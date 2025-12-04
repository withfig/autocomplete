const kubernetesVersions = ["1.22.6", "1.21.5", "1.20.7", "1.19.15", "1.18.16"];
const postPrecessGenerator = (
  out: string,
  parentKey: string,
  childKey = ""
): Fig.Suggestion[] => {
  try {
    const list = JSON.parse(out)[parentKey];
    if (!Array.isArray(list)) {
      return [
        {
          name: list[childKey],
          icon: "fig://icon?type=aws",
        },
      ];
    }
    return list.map((elm) => {
      const name = (childKey ? elm[childKey] : elm) as string;
      return {
        name,
        icon: "fig://icon?type=aws",
      };
    });
  } catch (e) {
    console.log(e);
  }
  return [];
};
const listCustomGenerator = async (
  tokens: string[],
  executeShellCommand: Fig.ExecuteCommandFunction,
  command: string,
  options: string[],
  parentKey: string,
  childKey = ""
): Promise<Fig.Suggestion[]> => {
  try {
    let args = ["eks", command];
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      const idx = tokens.indexOf(option);
      if (idx < 0) {
        continue;
      }
      const param = tokens[idx + 1];
      args = [...args, option, param];
    }
    const { stdout } = await executeShellCommand({
      command: "aws",
      args,
    });
    const list = JSON.parse(stdout)[parentKey];
    if (!Array.isArray(list)) {
      return [
        {
          name: list[childKey],
          icon: "fig://icon?type=aws",
        },
      ];
    }
    return list.map((elm) => {
      const name = (childKey ? elm[childKey] : elm) as string;
      return {
        name,
        icon: "fig://icon?type=aws",
      };
    });
  } catch (e) {
    console.log(e);
  }
  return [];
};
const listRolesForPrincipal = (
  out: string,
  principal: string
): Fig.Suggestion[] => {
  try {
    const roles = JSON.parse(out)["Roles"];
    return roles
      .filter((role) => {
        const policyDocument = role["AssumeRolePolicyDocument"];
        const statement = policyDocument["Statement"];
        // Only collect IAM roles where the principal service
        // is Amplify
        if (statement.length > 0) {
          const service = statement[0]["Principal"]["Service"];
          return service === principal;
        }
        return false;
      })
      .map((elm) => ({
        name: elm["Arn"],
        icon: "fig://icon?type=aws",
      }));
  } catch (e) {
    console.log(e);
  }
  return [];
};
const _prefixFile = "file://";
const appendFolderPath = (tokens: string[], prefix: string): string[] => {
  const baseLsCommand = ["ls", "-1ApL"];
  let whatHasUserTyped = tokens[tokens.length - 1];
  if (!whatHasUserTyped.startsWith(prefix)) {
    return ["echo", prefix];
  }
  whatHasUserTyped = whatHasUserTyped.slice(prefix.length);
  let folderPath = "";
  const lastSlashIndex = whatHasUserTyped.lastIndexOf("/");
  if (lastSlashIndex > -1) {
    if (whatHasUserTyped.startsWith("/") && lastSlashIndex === 0) {
      folderPath = "/";
    } else {
      folderPath = whatHasUserTyped.slice(0, lastSlashIndex + 1);
    }
  }
  return [...baseLsCommand, folderPath];
};
const postProcessFiles = (out: string, prefix: string): Fig.Suggestion[] => {
  if (out.trim() === prefix) {
    return [
      {
        name: prefix,
        insertValue: prefix,
      },
    ];
  }
  const sortFnStrings = (a, b) => {
    return a.localeCompare(b);
  };
  const alphabeticalSortFilesAndFolders = (arr) => {
    const dotsArr = [];
    const otherArr = [];
    arr.map((elm) => {
      if (elm.toLowerCase() == ".ds_store") return;
      if (elm.slice(0, 1) === ".") dotsArr.push(elm);
      else otherArr.push(elm);
    });
    return [
      ...otherArr.sort(sortFnStrings),
      "../",
      ...dotsArr.sort(sortFnStrings),
    ];
  };
  const tempArr = alphabeticalSortFilesAndFolders(out.split("\n"));
  const finalArr = [];
  tempArr.forEach((item) => {
    if (!(item === "" || item === null || item === undefined)) {
      const outputType = item.slice(-1) === "/" ? "folder" : "file";
      finalArr.push({
        type: outputType,
        name: item,
        insertValue: item,
      });
    }
  });
  return finalArr;
};
const triggerPrefix = (
  newToken: string,
  oldToken: string,
  prefix: string
): boolean => {
  if (!newToken.startsWith(prefix)) {
    if (!oldToken) return false;
    return oldToken.startsWith(prefix);
  }
  return newToken.lastIndexOf("/") !== oldToken.lastIndexOf("/");
};
const filterWithPrefix = (token: string, prefix: string): string => {
  if (!token.startsWith(prefix)) return token;
  return token.slice(token.lastIndexOf("/") + 1);
};
const generators: Record<string, Fig.Generator> = {
  // --cli-input-json and a few other options takes a JSON string literal, or arbitrary files containing valid JSON.
  // In case the JSON is passed as a file, the filepath must be prefixed by file://
  // See more: https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-file.html
  listFiles: {
    script: (tokens) => {
      return appendFolderPath(tokens, _prefixFile);
    },
    postProcess: (out) => {
      return postProcessFiles(out, _prefixFile);
    },
    trigger: (newToken, oldToken) => {
      return triggerPrefix(newToken, oldToken, _prefixFile);
    },
    getQueryTerm: (token) => {
      return filterWithPrefix(token, _prefixFile);
    },
  },
  listClusters: {
    script: ["aws", "eks", "list-clusters"],
    postProcess: (out) => postPrecessGenerator(out, "clusters"),
  },
  listKmsKeys: {
    script: ["aws", "kms", "list-keys"],
    postProcess: function (out) {
      try {
        const list = JSON.parse(out)["Keys"];
        return list.map((key) => {
          return {
            name: `resources=secrets,provider={keyArn=${key["KeyArn"]}}`,
            icon: "fig://icon?type=aws",
          };
        });
      } catch (e) {
        console.log(e);
      }
      return [];
    },
  },
  listAddonsForCluster: {
    custom: async function (tokens, executeShellCommand) {
      return listCustomGenerator(
        tokens,
        executeShellCommand,
        "list-addons",
        ["--cluster-name"],
        "addons"
      );
    },
  },
  listAddons: {
    script: ["aws", "eks", "describe-addon-versions"],
    postProcess: (out) => postPrecessGenerator(out, "addons", "addonName"),
  },
  listAddonVersions: {
    script: ["aws", "eks", "describe-addon-versions"],
    postProcess: (out) => {
      try {
        const addons = JSON.parse(out)["addons"];
        return addons
          .map((addon) => {
            return addon["addonVersions"].map((version) => {
              return {
                name: version["addonVersion"],
                icon: "fig://icon?type=aws",
              };
            });
          })
          .flat();
      } catch (e) {
        console.log(e);
      }
      return [];
    },
  },
  listRoles: {
    script: ["aws", "iam", "list-roles"],
    postProcess: (out) => postPrecessGenerator(out, "Roles", "RoleName"),
  },
  listEKSClusterRoles: {
    script: ["aws", "iam", "list-roles"],
    postProcess: (out) => listRolesForPrincipal(out, "eks.amazonaws.com"),
  },
  listFargatePodRoles: {
    script: ["aws", "iam", "list-roles"],
    postProcess: (out) =>
      listRolesForPrincipal(out, "eks-fargate-pods.amazonaws.com"),
  },
  listNodeGroupRoles: {
    script: ["aws", "iam", "list-roles"],
    postProcess: (out) =>
      listRolesForPrincipal(out, "eks-nodegroup.amazonaws.com"),
  },
  listSubnetsForCluster: {
    custom: async (tokens, executeShellCommand) => {
      try {
        const idx = tokens.indexOf("--cluster-name");
        if (idx < 0) {
          return;
        }
        const param = tokens[idx + 1];
        const { stdout } = await executeShellCommand({
          command: "aws",
          args: ["eks", "describe-cluster", "--name", param],
        });
        const cluster = JSON.parse(stdout)["cluster"];
        const subnets = cluster["resourcesVpcConfig"]["subnetIds"];
        return subnets.map((subnet) => {
          return {
            name: subnet,
            icon: "fig://icon?type=aws",
          };
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  listFargateProfilesForCluster: {
    custom: async function (tokens, executeShellCommand) {
      return listCustomGenerator(
        tokens,
        executeShellCommand,
        "list-fargate-profiles",
        ["--cluster-name"],
        "fargateProfileNames"
      );
    },
  },
  listNodeGroupsForCluster: {
    custom: async function (tokens, executeShellCommand) {
      return listCustomGenerator(
        tokens,
        executeShellCommand,
        "list-nodegroups",
        ["--cluster-name"],
        "nodegroups"
      );
    },
  },
};
const completionSpec: Fig.Spec = {
  name: "eks",
  description:
    "Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on Amazon Web Services without needing to setup or maintain your own Kubernetes control plane. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use all the existing plugins and tooling from the Kubernetes community. Applications running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, whether running in on-premises data centers or public clouds. This means that you can easily migrate any standard Kubernetes application to Amazon EKS without any code modification required",
  subcommands: [
    {
      name: "associate-access-policy",
      description:
        "Associates an access policy and its scope to an access entry. For more information about associating access policies, see Associating and disassociating access policies to and from access entries in the Amazon EKS User Guide",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM user or role for the AccessEntry that you're associating the access policy to",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-arn",
          description:
            "The ARN of the AccessPolicy that you're associating. For a list of ARNs, use ListAccessPolicies",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-scope",
          description:
            "The scope for the AccessPolicy. You can scope access policies to an entire cluster or to specific Kubernetes namespaces",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-encryption-config",
      description:
        "Associates an encryption configuration to an existing cluster. Use this API to enable encryption on existing clusters that don't already have encryption enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new Amazon EKS clusters",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--encryption-config",
          description: "The configuration you are using for encryption",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listKmsKeys,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-identity-provider-config",
      description:
        "Associates an identity provider configuration to a cluster. If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes Role and ClusterRole objects, assign permissions to them, and then bind them to the identities using Kubernetes RoleBinding and ClusterRoleBinding objects. For more information see Using RBAC Authorization in the Kubernetes documentation",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--oidc",
          description:
            "An object representing an OpenID Connect (OIDC) identity provider configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-access-entry",
      description:
        "Creates an access entry. An access entry allows an IAM principal to access your cluster. Access entries can replace the need to maintain entries in the aws-auth ConfigMap for authentication. You have the following options for authorizing an IAM principal to access Kubernetes objects on your cluster: Kubernetes role-based access control (RBAC), Amazon EKS, or both. Kubernetes RBAC authorization requires you to create and manage Kubernetes Role, ClusterRole, RoleBinding, and ClusterRoleBinding objects, in addition to managing access entries. If you use Amazon EKS authorization exclusively, you don't need to create and manage Kubernetes Role, ClusterRole, RoleBinding, and ClusterRoleBinding objects. For more information about access entries, see Access entries in the Amazon EKS User Guide",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-arn",
          description:
            "The ARN of the IAM principal for the AccessEntry. You can specify one ARN for each access entry. You can't specify the same ARN in more than one access entry. This value can't be changed after access entry creation. The valid principals differ depending on the type of the access entry in the type field. The only valid ARN is IAM roles for the types of access entries for nodes:  . You can use every IAM principal type for STANDARD access entries. You can't use the STS session principal type with access entries because this is a temporary principal for each session and not a permanent identity that can be assigned permissions.  IAM best practices recommend using IAM roles with temporary credentials, rather than IAM users with long-term credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--kubernetes-groups",
          description:
            "The value for name that you've specified for kind: Group as a subject in a Kubernetes RoleBinding or ClusterRoleBinding object. Amazon EKS doesn't confirm that the value for name exists in any bindings on your cluster. You can specify one or more names. Kubernetes authorizes the principalArn of the access entry to access any cluster objects that you've specified in a Kubernetes Role or ClusterRole object that is also specified in a binding's roleRef. For more information about creating Kubernetes RoleBinding, ClusterRoleBinding, Role, or ClusterRole objects, see Using RBAC Authorization in the Kubernetes documentation. If you want Amazon EKS to authorize the principalArn (instead of, or in addition to Kubernetes authorizing the principalArn), you can associate one or more access policies to the access entry using AssociateAccessPolicy. If you associate any access policies, the principalARN has all permissions assigned in the associated access policies and all permissions in any Kubernetes Role or ClusterRole objects that the group names are bound to",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username to authenticate to Kubernetes with. We recommend not specifying a username and letting Amazon EKS specify it for you. For more information about the value Amazon EKS specifies for you, or constraints before specifying your own username, see Creating access entries in the Amazon EKS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of the new access entry. Valid values are Standard, FARGATE_LINUX, EC2_LINUX, and EC2_WINDOWS. If the principalArn is for an IAM role that's used for self-managed Amazon EC2 nodes, specify EC2_LINUX or EC2_WINDOWS. Amazon EKS grants the necessary permissions to the node for you. If the principalArn is for any other purpose, specify STANDARD. If you don't specify a value, Amazon EKS sets the value to STANDARD. It's unnecessary to create access entries for IAM roles used with Fargate profiles or managed Amazon EC2 nodes, because Amazon EKS creates entries in the aws-auth ConfigMap for the roles. You can't change this value once you've created the access entry. If you set the value to EC2_LINUX or EC2_WINDOWS, you can't specify values for kubernetesGroups, or associate an AccessPolicy to the access entry",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-addon",
      description:
        "Creates an Amazon EKS add-on. Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see Amazon EKS add-ons in the Amazon EKS User Guide",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--addon-name",
          description:
            "The name of the add-on. The name must match one of the names returned by DescribeAddonVersions",
          args: {
            name: "string",
            generators: generators.listAddons,
          },
        },
        {
          name: "--addon-version",
          description:
            "The version of the add-on. The version must match one of the versions returned by  DescribeAddonVersions",
          args: {
            name: "string",
            generators: generators.listAddonVersions,
          },
        },
        {
          name: "--service-account-role-arn",
          description:
            "The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see Amazon EKS node IAM role in the Amazon EKS User Guide.  To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see Enabling IAM roles for service accounts on your cluster in the Amazon EKS User Guide",
          args: {
            name: "string",
            generators: generators.listRoles,
          },
        },
        {
          name: "--resolve-conflicts",
          description:
            "How to resolve field value conflicts for an Amazon EKS add-on. Conflicts are handled based on the value you choose:    None \u2013 If the self-managed version of the add-on is installed on your cluster, Amazon EKS doesn't change the value. Creation of the add-on might fail.    Overwrite \u2013 If the self-managed version of the add-on is installed on your cluster and the Amazon EKS default value is different than the existing value, Amazon EKS changes the value to the Amazon EKS default value.    Preserve \u2013 This is similar to the NONE option. If the self-managed version of the add-on is installed on your cluster Amazon EKS doesn't change the add-on resource properties. Creation of the add-on might fail if conflicts are detected. This option works differently during the update operation. For more information, see UpdateAddon.   If you don't currently have the self-managed version of the add-on installed on your cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values to default values, regardless of the option that you specify",
          args: {
            name: "string",
            suggestions: ["OVERWRITE", "NONE"],
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--configuration-values",
          description:
            "The set of configuration values for the add-on that's created. The values that you provide are validated against the schema returned by DescribeAddonConfiguration",
          args: {
            name: "string",
          },
        },
        {
          name: "--pod-identity-associations",
          description:
            "An array of Pod Identity Assocations to be created. Each EKS Pod Identity association maps a Kubernetes service account to an IAM Role. For more information, see Attach an IAM Role to an Amazon EKS add-on using Pod Identity in the EKS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-cluster",
      description:
        "Creates an Amazon EKS control plane. The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as etcd and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances. The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support kubectl exec, logs, and proxy data flows). Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster. You can use the endpointPublicAccess and endpointPrivateAccess parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .  You can use the logging parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing.  In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see Allowing users to access your cluster and Launching Amazon EKS nodes in the Amazon EKS User Guide",
      options: [
        {
          name: "--name",
          description:
            "The unique name to give to your cluster. The name can contain only alphanumeric characters (case-sensitive), hyphens, and underscores. It must start with an alphanumeric character and can't be longer than 100 characters. The name must be unique within the Amazon Web Services Region and Amazon Web Services account that you're creating the cluster in",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf. For more information, see Amazon EKS Service IAM Role in the  Amazon EKS User Guide",
          args: {
            name: "string",
            generators: generators.listEKSClusterRoles,
          },
        },
        {
          name: "--resources-vpc-config",
          description:
            "The VPC configuration that's used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see Cluster VPC Considerations and Cluster Security Group Considerations in the Amazon EKS User Guide. You must specify at least two subnets. You can specify up to five security groups. However, we recommend that you use a dedicated security group for your cluster control plane",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kubernetes-network-config",
          description: "The Kubernetes network configuration for the cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--logging",
          description:
            "Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster control plane logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--encryption-config",
          description: "The encryption configuration for the cluster",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listKmsKeys,
          },
        },
        {
          name: "--outpost-config",
          description:
            "An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a local cluster on an Outpost, review Local clusters for Amazon EKS on Amazon Web Services Outposts in the Amazon EKS User Guide. This object isn't available for creating Amazon EKS clusters on the Amazon Web Services cloud",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-config",
          description: "The access configuration for the cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bootstrap-self-managed-addons",
          description:
            "If you set this value to False when creating a cluster, the default networking add-ons will not be installed. The default networking addons include vpc-cni, coredns, and kube-proxy. Use this option when you plan to install third-party alternative add-ons or self-manage the default networking add-ons",
        },
        {
          name: "--no-bootstrap-self-managed-addons",
          description:
            "If you set this value to False when creating a cluster, the default networking add-ons will not be installed. The default networking addons include vpc-cni, coredns, and kube-proxy. Use this option when you plan to install third-party alternative add-ons or self-manage the default networking add-ons",
        },
        {
          name: "--upgrade-policy",
          description:
            "New clusters, by default, have extended support enabled. You can disable extended support when creating a cluster by setting this value to STANDARD",
          args: {
            name: "structure",
          },
        },
        {
          name: "--zonal-shift-config",
          description:
            "Enable or disable ARC zonal shift for the cluster. If zonal shift is enabled, Amazon Web Services configures zonal autoshift for the cluster. Zonal shift is a feature of Amazon Application Recovery Controller (ARC). ARC zonal shift is designed to be a temporary measure that allows you to move traffic for a resource away from an impaired AZ until the zonal shift expires or you cancel it. You can extend the zonal shift if necessary. You can start a zonal shift for an EKS cluster, or you can allow Amazon Web Services to do it for you by enabling zonal autoshift. This shift updates the flow of east-to-west network traffic in your cluster to only consider network endpoints for Pods running on worker nodes in healthy AZs. Additionally, any ALB or NLB handling ingress traffic for applications in your EKS cluster will automatically route traffic to targets in the healthy AZs. For more information about zonal shift in EKS, see Learn about Amazon Application Recovery Controller (ARC) Zonal Shift in Amazon EKS in the  Amazon EKS User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--remote-network-config",
          description:
            "The configuration in the cluster for EKS Hybrid Nodes. You can't change or update this configuration after the cluster is created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--compute-config",
          description:
            "Enable or disable the compute capability of EKS Auto Mode when creating your EKS Auto Mode cluster. If the compute capability is enabled, EKS Auto Mode will create and delete EC2 Managed Instances in your Amazon Web Services account",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-config",
          description:
            "Enable or disable the block storage capability of EKS Auto Mode when creating your EKS Auto Mode cluster. If the block storage capability is enabled, EKS Auto Mode will create and delete EBS volumes in your Amazon Web Services account",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kubernetes-version",
          description:
            "The desired Kubernetes version for your cluster. If you don't specify a value here, the default version available in Amazon EKS is used.  The default version might not be the latest version available",
          args: {
            name: "string",
            suggestions: kubernetesVersions,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-eks-anywhere-subscription",
      description:
        "Creates an EKS Anywhere subscription. When a subscription is created, it is a contract agreement for the length of the term specified in the request. Licenses that are used to validate support are provisioned in Amazon Web Services License Manager and the caller account is granted access to EKS Anywhere Curated Packages",
      options: [
        {
          name: "--name",
          description:
            "The unique name for your subscription. It must be unique in your Amazon Web Services account in the Amazon Web Services Region you're creating the subscription in. The name can contain only alphanumeric characters (case-sensitive), hyphens, and underscores. It must start with an alphabetic character and can't be longer than 100 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--term",
          description:
            "An object representing the term duration and term unit type of your subscription. This determines the term length of your subscription. Valid values are MONTHS for term unit and 12 or 36 for term duration, indicating a 12 month or 36 month subscription. This value cannot be changed after creating the subscription",
          args: {
            name: "structure",
          },
        },
        {
          name: "--license-quantity",
          description:
            "The number of licenses to purchase with the subscription. Valid values are between 1 and 100. This value can't be changed after creating the subscription",
          args: {
            name: "integer",
          },
        },
        {
          name: "--license-type",
          description:
            "The license type for all licenses in the subscription. Valid value is CLUSTER. With the CLUSTER license type, each license covers support for a single EKS Anywhere cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-renew",
          description:
            "A boolean indicating whether the subscription auto renews at the end of the term",
        },
        {
          name: "--no-auto-renew",
          description:
            "A boolean indicating whether the subscription auto renews at the end of the term",
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata for a subscription to assist with categorization and organization. Each tag consists of a key and an optional value. Subscription tags don't propagate to any other resources associated with the subscription",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-fargate-profile",
      description:
        "Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate. The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile\u2019s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate. When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes Role Based Access Control (RBAC) for authorization so that the kubelet that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see Pod Execution Role in the Amazon EKS User Guide. Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating. If any Fargate profiles in a cluster are in the DELETING status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster. For more information, see Fargate profile in the Amazon EKS User Guide",
      options: [
        {
          name: "--fargate-profile-name",
          description: "The name of the Fargate profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--pod-execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the Pod execution role to use for a Pod that matches the selectors in the Fargate profile. The Pod execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see  Pod execution role in the Amazon EKS User Guide",
          args: {
            name: "string",
            generators: generators.listFargatePodRoles,
          },
        },
        {
          name: "--subnets",
          description:
            "The IDs of subnets to launch a Pod into. A Pod running on Fargate isn't assigned a public IP address, so only private subnets (with no direct route to an Internet Gateway) are accepted for this parameter",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listSubnetsForCluster,
          },
        },
        {
          name: "--selectors",
          description:
            "The selectors to match for a Pod to use this Fargate profile. Each selector must have an associated Kubernetes namespace. Optionally, you can also specify labels for a namespace. You may specify up to five selectors in a Fargate profile",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-nodegroup",
      description:
        "Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see Customizing managed nodes with launch templates. An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see Managed node groups in the Amazon EKS User Guide.  Windows AMI types are only supported for commercial Amazon Web Services Regions that support Windows on Amazon EKS",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--nodegroup-name",
          description: "The unique name to give your node group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-config",
          description:
            "The scaling configuration details for the Auto Scaling group that is created for your node group",
          args: {
            name: "structure",
          },
        },
        {
          name: "--disk-size",
          description:
            "The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows. If you specify launchTemplate, then don't specify diskSize, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--subnets",
          description:
            "The subnets to use for the Auto Scaling group that is created for your node group. If you specify launchTemplate, then don't specify  SubnetId  in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listSubnetsForCluster,
          },
        },
        {
          name: "--instance-types",
          description:
            "Specify the instance types for a node group. If you specify a GPU instance type, make sure to also specify an applicable GPU AMI type with the amiType parameter. If you specify launchTemplate, then you can specify zero or one instance type in your launch template or you can specify 0-20 instance types for instanceTypes. If however, you specify an instance type in your launch template and specify any instanceTypes, the node group deployment will fail. If you don't specify an instance type in a launch template or for instanceTypes, then t3.medium is used, by default. If you specify Spot for capacityType, then we recommend specifying multiple values for instanceTypes. For more information, see Managed node group capacity types and Customizing managed nodes with launch templates in the Amazon EKS User Guide",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--ami-type",
          description:
            "The AMI type for your node group. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify amiType, or the node group deployment will fail. If your launch template uses a Windows custom AMI, then add eks:kube-proxy-windows to your Windows nodes rolearn in the aws-auth ConfigMap. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide",
          args: {
            name: "string",
            suggestions: [
              "AL2_x86_64",
              "AL2_x86_64_GPU",
              "AL2_ARM_64",
              "CUSTOM",
            ],
          },
        },
        {
          name: "--remote-access",
          description:
            "The remote access configuration to use with your node group. For Linux, the protocol is SSH. For Windows, the protocol is RDP. If you specify launchTemplate, then don't specify remoteAccess, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--node-role",
          description:
            "The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node kubelet daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see Amazon EKS node IAM role in the  Amazon EKS User Guide . If you specify launchTemplate, then don't specify  IamInstanceProfile  in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide",
          args: {
            name: "string",
            generators: generators.listNodeGroupRoles,
          },
        },
        {
          name: "--labels",
          description:
            "The Kubernetes labels to apply to the nodes in the node group when they are created",
          args: {
            name: "map",
          },
        },
        {
          name: "--taints",
          description:
            "The Kubernetes taints to be applied to the nodes in the node group. For more information, see Node taints on managed node groups",
          args: {
            name: "list",
            suggestions: [
              "key=string,value=string,effect=NO_SCHEDULE",
              "key=string,value=string,effect=NO_EXECUTE",
              "key=string,value=string,effect=NO_EXECUTE",
            ],
          },
        },
        {
          name: "--tags",
          description:
            "Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-template",
          description:
            "An object representing a node group's launch template specification. When using this object, don't directly specify instanceTypes, diskSize, or remoteAccess. Make sure that the launch template meets the requirements in launchTemplateSpecification. Also refer to Customizing managed nodes with launch templates in the Amazon EKS User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--update-config",
          description: "The node group update configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--capacity-type",
          description: "The capacity type for your node group",
          args: {
            name: "string",
            suggestions: ["ON_DEMAND", "SPOT"],
          },
        },
        {
          name: "--release-version",
          description:
            "The AMI version of the Amazon EKS optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For information about Linux versions, see Amazon EKS optimized Amazon Linux AMI versions in the Amazon EKS User Guide. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see Amazon EKS optimized Windows AMI versions in the Amazon EKS User Guide. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify releaseVersion, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--kubernetes-version",
          description:
            "The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify version, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide",
          args: {
            name: "string",
            suggestions: kubernetesVersions,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-pod-identity-association",
      description:
        "Creates an EKS Pod Identity association between a service account in an Amazon EKS cluster and an IAM role with EKS Pod Identity. Use EKS Pod Identity to give temporary IAM credentials to pods and the credentials are rotated automatically. Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that Amazon EC2 instance profiles provide credentials to Amazon EC2 instances. If a pod uses a service account that has an association, Amazon EKS sets environment variables in the containers of the pod. The environment variables configure the Amazon Web Services SDKs, including the Command Line Interface, to use the EKS Pod Identity credentials. Pod Identity is a simpler method than IAM roles for service accounts, as this method doesn't use OIDC identity providers. Additionally, you can configure a role for Pod Identity once, and reuse it across clusters",
      options: [
        {
          name: "--cluster-name",
          description: "The name of the cluster to create the association in",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The name of the Kubernetes namespace inside the cluster to create the association in. The service account and the pods that use the service account must be in this namespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-account",
          description:
            "The name of the Kubernetes service account inside the cluster to associate the IAM credentials with",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role to associate with the service account. The EKS Pod Identity agent manages credentials to assume this role for applications in the containers in the pods that use this service account",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources. The following basic restrictions apply to tags:   Maximum number of tags per resource \u2013 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length \u2013 128 Unicode characters in UTF-8   Maximum value length \u2013 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-access-entry",
      description:
        "Deletes an access entry. Deleting an access entry of a type other than Standard can cause your cluster to function improperly. If you delete an access entry in error, you can recreate it",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-arn",
          description: "The ARN of the IAM principal for the AccessEntry",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-addon",
      description:
        "Deletes an Amazon EKS add-on. When you remove an add-on, it's deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--addon-name",
          description:
            "The name of the add-on. The name must match one of the names returned by  ListAddons",
          args: {
            name: "string",
            generators: generators.listAddonsForCluster,
          },
        },
        {
          name: "--preserve",
          description:
            "Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. If an IAM account is associated with the add-on, it isn't removed",
        },
        {
          name: "--no-preserve",
          description:
            "Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. If an IAM account is associated with the add-on, it isn't removed",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-cluster",
      description:
        "Deletes an Amazon EKS cluster control plane. If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see Deleting a cluster in the Amazon EKS User Guide. If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see DeleteNodgroup and DeleteFargateProfile",
      options: [
        {
          name: "--name",
          description: "The name of the cluster to delete",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-eks-anywhere-subscription",
      description:
        "Deletes an expired or inactive subscription. Deleting inactive subscriptions removes them from the Amazon Web Services Management Console view and from list/describe API responses. Subscriptions can only be cancelled within 7 days of creation and are cancelled by creating a ticket in the Amazon Web Services Support Center",
      options: [
        {
          name: "--id",
          description: "The ID of the subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-fargate-profile",
      description:
        "Deletes an Fargate profile. When you delete a Fargate profile, any Pod running on Fargate that was created with the profile is deleted. If the Pod matches another Fargate profile, then it is scheduled on Fargate with that profile. If it no longer matches any Fargate profiles, then it's not scheduled on Fargate and may remain in a pending state. Only one Fargate profile in a cluster can be in the DELETING status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--fargate-profile-name",
          description: "The name of the Fargate profile to delete",
          args: {
            name: "string",
            generators: generators.listFargateProfilesForCluster,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-nodegroup",
      description: "Deletes a managed node group",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--nodegroup-name",
          description: "The name of the node group to delete",
          args: {
            name: "string",
            generators: generators.listNodeGroupsForCluster,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-pod-identity-association",
      description:
        "Deletes a EKS Pod Identity association. The temporary Amazon Web Services credentials from the previous IAM role session might still be valid until the session expiry. If you need to immediately revoke the temporary session credentials, then go to the role in the IAM console",
      options: [
        {
          name: "--cluster-name",
          description: "The cluster name that",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-id",
          description: "The ID of the association to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "deregister-cluster",
      description:
        "Deregisters a connected cluster to remove it from the Amazon EKS control plane. A connected cluster is a Kubernetes cluster that you've connected to your control plane using the Amazon EKS Connector",
      options: [
        {
          name: "--name",
          description: "The name of the connected cluster to deregister",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-access-entry",
      description: "Describes an access entry",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-arn",
          description: "The ARN of the IAM principal for the AccessEntry",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-addon",
      description: "Describes an Amazon EKS add-on",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--addon-name",
          description:
            "The name of the add-on. The name must match one of the names returned by  ListAddons",
          args: {
            name: "string",
            generators: generators.listAddonsForCluster,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-addon-configuration",
      description: "Returns configuration options",
      options: [
        {
          name: "--addon-name",
          description:
            "The name of the add-on. The name must match one of the names returned by DescribeAddonVersions",
          args: {
            name: "string",
          },
        },
        {
          name: "--addon-version",
          description:
            "The version of the add-on. The version must match one of the versions returned by  DescribeAddonVersions",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-addon-versions",
      description:
        "Describes the versions for an add-on. Information such as the Kubernetes versions that you can use the add-on with, the owner, publisher, and the type of the add-on are returned",
      options: [
        {
          name: "--kubernetes-version",
          description:
            "The Kubernetes versions that you can use the add-on with",
          args: {
            name: "string",
            suggestions: kubernetesVersions,
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--addon-name",
          description:
            "The name of the add-on. The name must match one of the names returned by  ListAddons",
          args: {
            name: "string",
            generators: generators.listAddons,
          },
        },
        {
          name: "--types",
          description:
            "The type of the add-on. For valid types, don't specify a value for this property",
          args: {
            name: "list",
          },
        },
        {
          name: "--publishers",
          description:
            "The publisher of the add-on. For valid publishers, don't specify a value for this property",
          args: {
            name: "list",
          },
        },
        {
          name: "--owners",
          description:
            "The owner of the add-on. For valid owners, don't specify a value for this property",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-cluster",
      description:
        "Describes an Amazon EKS cluster. The API server endpoint and certificate authority data returned by this operation are required for kubelet and kubectl to communicate with your Kubernetes API server. For more information, see Creating or updating a kubeconfig file for an Amazon EKS cluster.  The API server endpoint and certificate authority data aren't available until the cluster reaches the ACTIVE state",
      options: [
        {
          name: "--name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-eks-anywhere-subscription",
      description: "Returns descriptive information about a subscription",
      options: [
        {
          name: "--id",
          description: "The ID of the subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-fargate-profile",
      description: "Describes an Fargate profile",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--fargate-profile-name",
          description: "The name of the Fargate profile to describe",
          args: {
            name: "string",
            generators: generators.ListFargateProfiles,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-identity-provider-config",
      description: "Describes an identity provider configuration",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--identity-provider-config",
          description:
            "An object representing an identity provider configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-insight",
      description:
        "Returns details about an insight that you specify using its ID",
      options: [
        {
          name: "--cluster-name",
          description: "The name of the cluster to describe the insight for",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The identity of the insight to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-nodegroup",
      description: "Describes a managed node group",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--nodegroup-name",
          description: "The name of the node group to describe",
          args: {
            name: "string",
            generators: generators.listNodeGroupsForCluster,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-pod-identity-association",
      description:
        "Returns descriptive information about an EKS Pod Identity association. This action requires the ID of the association. You can get the ID from the response to the CreatePodIdentityAssocation for newly created associations. Or, you can list the IDs for associations with ListPodIdentityAssociations and filter the list by namespace or service account",
      options: [
        {
          name: "--cluster-name",
          description: "The name of the cluster that the association is in",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-id",
          description:
            "The ID of the association that you want the description of",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-update",
      description:
        "Describes an update to an Amazon EKS resource. When the status of the update is Succeeded, the update is complete. If an update fails, the status is Failed, and an error detail explains the reason for the failure",
      options: [
        {
          name: "--name",
          description:
            "The name of the Amazon EKS cluster associated with the update",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--update-id",
          description: "The ID of the update to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--nodegroup-name",
          description:
            "The name of the Amazon EKS node group associated with the update. This parameter is required if the update is a node group update",
          args: {
            name: "string",
            generators: generators.listNodeGroupsForCluster,
          },
        },
        {
          name: "--addon-name",
          description:
            "The name of the add-on. The name must match one of the names returned by  ListAddons . This parameter is required if the update is an add-on update",
          args: {
            name: "string",
            generators: generators.listAddonsForCluster,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-access-policy",
      description: "Disassociates an access policy from an access entry",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-arn",
          description: "The ARN of the IAM principal for the AccessEntry",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-arn",
          description:
            "The ARN of the policy to disassociate from the access entry. For a list of associated policies ARNs, use ListAssociatedAccessPolicies",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-identity-provider-config",
      description:
        "Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with IAM principals",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--identity-provider-config",
          description:
            "An object representing an identity provider configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-access-entries",
      description: "Lists the access entries for your cluster",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--associated-policy-arn",
          description:
            "The ARN of an AccessPolicy. When you specify an access policy ARN, only the access entries associated to that access policy are returned. For a list of available policy ARNs, use ListAccessPolicies",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-access-policies",
      description: "Lists the available access policies",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-addons",
      description: "Lists the installed add-ons",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-associated-access-policies",
      description: "Lists the access policies associated with an access entry",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-arn",
          description: "The ARN of the IAM principal for the AccessEntry",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-clusters",
      description:
        "Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Amazon Web Services Region",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--include",
          description:
            "Indicates whether external clusters are included in the returned list. Use 'all' to return https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.htmlconnected clusters, or blank to return only Amazon EKS clusters. 'all' must be in lowercase otherwise an error occurs",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-eks-anywhere-subscriptions",
      description: "Displays the full description of the subscription",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of cluster results returned by ListEksAnywhereSubscriptions in paginated output. When you use this parameter, ListEksAnywhereSubscriptions returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListEksAnywhereSubscriptions request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListEksAnywhereSubscriptions returns up to 10 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListEksAnywhereSubscriptions request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-status",
          description: "An array of subscription statuses to filter on",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-fargate-profiles",
      description:
        "Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Amazon Web Services Region",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-identity-provider-configs",
      description:
        "Lists the identity provider configurations for your cluster",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-insights",
      description:
        "Returns a list of all insights checked for against the specified cluster. You can filter which insights are returned by category, associated Kubernetes version, and status",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of the Amazon EKS cluster associated with the insights",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "The criteria to filter your list of insights for your cluster. You can filter which insights are returned by category, associated Kubernetes version, and status",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of identity provider configurations returned by ListInsights in paginated output. When you use this parameter, ListInsights returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListInsights request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListInsights returns up to 100 results and a nextToken value, if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListInsights request. When the results of a ListInsights request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-nodegroups",
      description:
        "Lists the managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Amazon Web Services Region. Self-managed node groups aren't listed",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-pod-identity-associations",
      description:
        "List the EKS Pod Identity associations in a cluster. You can filter the list by the namespace that the association is in or the service account that the association uses",
      options: [
        {
          name: "--cluster-name",
          description: "The name of the cluster that the associations are in",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The name of the Kubernetes namespace inside the cluster that the associations are in",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-account",
          description:
            "The name of the Kubernetes service account that the associations use",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of EKS Pod Identity association results returned by ListPodIdentityAssociations in paginated output. When you use this parameter, ListPodIdentityAssociations returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListPodIdentityAssociations request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListPodIdentityAssociations returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListUpdates request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description: "List the tags for an Amazon EKS resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the resource to list tags for",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-updates",
      description:
        "Lists the updates associated with an Amazon EKS resource in your Amazon Web Services account, in the specified Amazon Web Services Region",
      options: [
        {
          name: "--name",
          description: "The name of the Amazon EKS cluster to list updates for",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--nodegroup-name",
          description:
            "The name of the Amazon EKS managed node group to list updates for",
          args: {
            name: "string",
            generators: generators.listNodeGroupsForCluster,
          },
        },
        {
          name: "--addon-name",
          description:
            "The names of the installed add-ons that have available updates",
          args: {
            name: "string",
            generators: generators.listAddonsForCluster,
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "register-cluster",
      description:
        "Connects a Kubernetes cluster to the Amazon EKS control plane.  Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes.  Cluster connection requires two steps. First, send a  RegisterClusterRequest  to add it to the Amazon EKS control plane. Second, a Manifest containing the activationID and activationCode must be applied to the Kubernetes cluster through it's native provider to provide visibility. After the manifest is updated and applied, the connected cluster is visible to the Amazon EKS control plane. If the manifest isn't applied within three days, the connected cluster will no longer be visible and must be deregistered using DeregisterCluster",
      options: [
        {
          name: "--name",
          description:
            "A unique name for this cluster in your Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-config",
          description:
            "The configuration settings required to connect the Kubernetes cluster to the Amazon EKS control plane",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "tag-resource",
      description:
        "Associates the specified tags to an Amazon EKS resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted. Tags that you create for Amazon EKS resources don't propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag doesn't automatically propagate to the subnets and nodes associated with the cluster",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to add tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description: "Deletes specified tags from an Amazon EKS resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to delete tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to remove",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-access-entry",
      description: "Updates an access entry",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-arn",
          description: "The ARN of the IAM principal for the AccessEntry",
          args: {
            name: "string",
          },
        },
        {
          name: "--kubernetes-groups",
          description:
            "The value for name that you've specified for kind: Group as a subject in a Kubernetes RoleBinding or ClusterRoleBinding object. Amazon EKS doesn't confirm that the value for name exists in any bindings on your cluster. You can specify one or more names. Kubernetes authorizes the principalArn of the access entry to access any cluster objects that you've specified in a Kubernetes Role or ClusterRole object that is also specified in a binding's roleRef. For more information about creating Kubernetes RoleBinding, ClusterRoleBinding, Role, or ClusterRole objects, see Using RBAC Authorization in the Kubernetes documentation. If you want Amazon EKS to authorize the principalArn (instead of, or in addition to Kubernetes authorizing the principalArn), you can associate one or more access policies to the access entry using AssociateAccessPolicy. If you associate any access policies, the principalARN has all permissions assigned in the associated access policies and all permissions in any Kubernetes Role or ClusterRole objects that the group names are bound to",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username to authenticate to Kubernetes with. We recommend not specifying a username and letting Amazon EKS specify it for you. For more information about the value Amazon EKS specifies for you, or constraints before specifying your own username, see Creating access entries in the Amazon EKS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-addon",
      description: "Updates an Amazon EKS add-on",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--addon-name",
          description:
            "The name of the add-on. The name must match one of the names returned by  ListAddons",
          args: {
            name: "string",
            generators: generators.listAddonsForCluster,
          },
        },
        {
          name: "--addon-version",
          description:
            "The version of the add-on. The version must match one of the versions returned by  DescribeAddonVersions",
          args: {
            name: "string",
            generators: generators.listAddonVersions,
          },
        },
        {
          name: "--service-account-role-arn",
          description:
            "The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see Amazon EKS node IAM role in the Amazon EKS User Guide.  To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see Enabling IAM roles for service accounts on your cluster in the Amazon EKS User Guide",
          args: {
            name: "string",
            generators: generators.listNodeGroupRoles,
          },
        },
        {
          name: "--resolve-conflicts",
          description:
            "How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Conflicts are handled based on the option you choose:    None \u2013 Amazon EKS doesn't change the value. The update might fail.    Overwrite \u2013 Amazon EKS overwrites the changed value back to the Amazon EKS default value.    Preserve \u2013 Amazon EKS preserves the value. If you choose this option, we recommend that you test any field and value changes on a non-production cluster before updating the add-on on your production cluster",
          args: {
            name: "string",
            suggestions: ["OVERWRITE", "NONE"],
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-values",
          description:
            "The set of configuration values for the add-on that's created. The values that you provide are validated against the schema returned by DescribeAddonConfiguration",
          args: {
            name: "string",
          },
        },
        {
          name: "--pod-identity-associations",
          description:
            "An array of Pod Identity Assocations to be updated. Each EKS Pod Identity association maps a Kubernetes service account to an IAM Role. If this value is left blank, no change. If an empty array is provided, existing Pod Identity Assocations owned by the Addon are deleted. For more information, see Attach an IAM Role to an Amazon EKS add-on using Pod Identity in the EKS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-cluster-config",
      description:
        "Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with DescribeUpdate\"/>. You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster control plane logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing.  You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Amazon EKS cluster endpoint access control in the  Amazon EKS User Guide . You can also use this API operation to choose different subnets and security groups for the cluster. You must specify at least two subnets that are in different Availability Zones. You can't change which VPC the subnets are from, the subnets must be in the same VPC as the subnets that the cluster was created with. For more information about the VPC requirements, see https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html in the  Amazon EKS User Guide . You can also use this API operation to enable or disable ARC zonal shift. If zonal shift is enabled, Amazon Web Services configures zonal autoshift for the cluster. Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active",
      options: [
        {
          name: "--name",
          description: "The name of the Amazon EKS cluster to update",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--resources-vpc-config",
          description:
            "An object representing the VPC configuration to use for an Amazon EKS cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--logging",
          description:
            "Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS cluster control plane logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-config",
          description: "The access configuration for the cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--upgrade-policy",
          description:
            "You can enable or disable extended support for clusters currently on standard support. You cannot disable extended support once it starts. You must enable extended support before your cluster exits standard support",
          args: {
            name: "structure",
          },
        },
        {
          name: "--zonal-shift-config",
          description:
            "Enable or disable ARC zonal shift for the cluster. If zonal shift is enabled, Amazon Web Services configures zonal autoshift for the cluster. Zonal shift is a feature of Amazon Application Recovery Controller (ARC). ARC zonal shift is designed to be a temporary measure that allows you to move traffic for a resource away from an impaired AZ until the zonal shift expires or you cancel it. You can extend the zonal shift if necessary. You can start a zonal shift for an EKS cluster, or you can allow Amazon Web Services to do it for you by enabling zonal autoshift. This shift updates the flow of east-to-west network traffic in your cluster to only consider network endpoints for Pods running on worker nodes in healthy AZs. Additionally, any ALB or NLB handling ingress traffic for applications in your EKS cluster will automatically route traffic to targets in the healthy AZs. For more information about zonal shift in EKS, see Learn about Amazon Application Recovery Controller (ARC) Zonal Shift in Amazon EKS in the  Amazon EKS User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--compute-config",
          description:
            "Update the configuration of the compute capability of your EKS Auto Mode cluster. For example, enable the capability",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kubernetes-network-config",
          description: "The Kubernetes network configuration for the cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-config",
          description:
            "Update the configuration of the block storage capability of your EKS Auto Mode cluster. For example, enable the capability",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-cluster-version",
      description:
        "Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active. If your cluster has managed node groups attached to it, all of your node groups\u2019 Kubernetes versions must match the cluster\u2019s Kubernetes version in order to update the cluster to a new Kubernetes version",
      options: [
        {
          name: "--name",
          description: "The name of the Amazon EKS cluster to update",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--kubernetes-version",
          description:
            "The desired Kubernetes version following a successful update",
          args: {
            name: "string",
            suggestions: kubernetesVersions,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-eks-anywhere-subscription",
      description:
        "Update an EKS Anywhere Subscription. Only auto renewal and tags can be updated after subscription creation",
      options: [
        {
          name: "--id",
          description: "The ID of the subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-renew",
          description:
            "A boolean indicating whether or not to automatically renew the subscription",
        },
        {
          name: "--no-auto-renew",
          description:
            "A boolean indicating whether or not to automatically renew the subscription",
        },
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-nodegroup-config",
      description:
        "Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the DescribeUpdate API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--nodegroup-name",
          description: "The name of the managed node group to update",
          args: {
            name: "string",
            generators: generators.listNodeGroupsForCluster,
          },
        },
        {
          name: "--labels",
          description:
            "The Kubernetes labels to apply to the nodes in the node group after the update",
          args: {
            name: "structure",
          },
        },
        {
          name: "--taints",
          description:
            "The Kubernetes taints to be applied to the nodes in the node group after the update. For more information, see Node taints on managed node groups",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scaling-config",
          description:
            "The scaling configuration details for the Auto Scaling group after the update",
          args: {
            name: "structure",
          },
        },
        {
          name: "--update-config",
          description: "The node group update configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-nodegroup-version",
      description:
        "Updates the Kubernetes version or AMI version of an Amazon EKS managed node group. You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template. If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For information about Linux versions, see Amazon EKS optimized Amazon Linux AMI versions in the Amazon EKS User Guide. For information about Windows versions, see Amazon EKS optimized Windows AMI versions in the Amazon EKS User Guide.  You cannot roll back a node group to an earlier Kubernetes version or AMI version. When a node in a managed node group is terminated due to a scaling action or update, every Pod on that node is drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can force the update if Amazon EKS is unable to drain the nodes as a result of a Pod disruption budget issue",
      options: [
        {
          name: "--cluster-name",
          description: "The name of your cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--nodegroup-name",
          description: "The name of the managed node group to update",
          args: {
            name: "string",
            generators: generators.listNodeGroupsForCluster,
          },
        },
        {
          name: "--release-version",
          description:
            "The AMI version of the Amazon EKS optimized AMI to use for the update. By default, the latest available AMI version for the node group's Kubernetes version is used. For information about Linux versions, see Amazon EKS optimized Amazon Linux AMI versions in the Amazon EKS User Guide. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see Amazon EKS optimized Windows AMI versions in the Amazon EKS User Guide. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify releaseVersion, or the node group update will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-template",
          description:
            "An object representing a node group's launch template specification. You can only update a node group using a launch template if the node group was originally deployed with a launch template",
          args: {
            name: "structure",
          },
        },
        {
          name: "--force",
          description:
            "Force the update if any Pod on the existing node group can't be drained due to a Pod disruption budget issue. If an update fails because all Pods can't be drained, you can force the update after it fails to terminate the old node whether or not any Pod is running on the node",
        },
        {
          name: "--no-force",
          description:
            "Force the update if any Pod on the existing node group can't be drained due to a Pod disruption budget issue. If an update fails because all Pods can't be drained, you can force the update after it fails to terminate the old node whether or not any Pod is running on the node",
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--kubernetes-version",
          description:
            "The Kubernetes version to update to. If no version is specified, then the Kubernetes version of the node group does not change. You can specify the Kubernetes version of the cluster to update the node group to the latest AMI version of the cluster's Kubernetes version. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify version, or the node group update will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide",
          args: {
            name: "string",
            suggestions: kubernetesVersions,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-pod-identity-association",
      description:
        "Updates a EKS Pod Identity association. Only the IAM role can be changed; an association can't be moved between clusters, namespaces, or service accounts. If you need to edit the namespace or service account, you need to delete the association and then create a new association with your desired settings",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of the cluster that you want to update the association in",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-id",
          description: "The ID of the association to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description: "The new IAM role to change the",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-kubeconfig",
      description:
        "Configures kubectl so that you can connect to an Amazon EKS cluster.\n\nNote:\n To use the resulting configuration, you must have kubectl installed and in your PATH environment variable.\n\nThis command constructs a configuration with prepopulated server and certificate authority data values for a specified cluster. \nYou can specify an IAM role ARN with the --role-arn option to use for authentication when you issue kubectl commands. \nOtherwise, the IAM entity in your default AWS CLI or SDK credential chain is used. \nYou can view your default AWS CLI or SDK identity by running the ``aws sts get-caller-identity`` command.\n\nThe resulting kubeconfig is created as a new file or merged with an existing kubeconfig file using the following logic:\n\n* If you specify a path with the --kubeconfig option, then the resulting configuration file is created there or merged with an existing kubeconfig at that location.\n* Or, if you have the KUBECONFIG environment variable set, then the resulting configuration file is created at the first entry in that variable or merged with an existing kubeconfig at that location. \n* Otherwise, by default, the resulting configuration file is created at the default kubeconfig path (.kube/config) in your home directory or merged with an existing kubeconfig at that location.\n* If a previous cluster configuration exists for an Amazon EKS cluster with the same name at the specified path, the existing configuration is overwritten with the new configuration.\n* When update-kubeconfig writes a configuration to a kubeconfig file, the current-context of the kubeconfig file is set to that configuration.\n\nYou can use the --dry-run option to print the resulting configuration to stdout instead of writing it to the specified location",
      options: [
        {
          name: "--name",
          description:
            "The name of the cluster for which to create a kubeconfig entry. This cluster must exist in your account and in the specified or configured default Region for your AWS CLI installation",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--kubeconfig",
          description:
            "Optionally specify a kubeconfig file to append with your configuration. By default, the configuration is written to the first file path in the KUBECONFIG environment variable (if it is set) or the default kubeconfig path (.kube/config) in your home directory",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--role-arn",
          description:
            "To assume a role for cluster authentication, specify an IAM role ARN with this option. For example, if you created a cluster while assuming an IAM role, then you must also assume that role to connect to the cluster the first time",
          args: {
            name: "string",
            generators: generators.listEKSClusterRoles,
          },
        },
        {
          name: "--dry-run",
          description:
            "Print the merged kubeconfig to stdout instead of writing it to the specified file",
        },
        {
          name: "--verbose",
          description:
            "Print more detailed output when writing to the kubeconfig file, including the appended entries",
        },
        {
          name: "--alias",
          description:
            "Alias for the cluster context name. Defaults to match cluster ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-alias",
          description:
            "Alias for the generated user name. Defaults to match cluster ARN",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "get-token",
      description:
        "Get a token for authentication with an Amazon EKS cluster. This can be used as an alternative to the aws-iam-authenticator",
      options: [
        {
          name: "--cluster-name",
          description:
            "Specify the name of the Amazon EKS cluster to create a token for. (Note: for local clusters on AWS Outposts, please use --cluster-id parameter)",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--role-arn",
          description:
            "Assume this role for credentials when signing the token. Use this optional parameter when the credentials for signing the token differ from that of the current role session. Using this parameter results in new role session credentials that are used to sign the token",
          args: {
            name: "string",
            generators: generators.listRoles,
          },
        },
        {
          name: "--cluster-id",
          description:
            "Specify the id of the Amazon EKS cluster to create a token for. (Note: for local clusters on AWS Outposts only)",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "addon-active",
          description:
            "Wait until JMESPath query addon.status returns ACTIVE when polling with ``describe-addon``. It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--cluster-name",
              description: "The name of your cluster",
              args: {
                name: "string",
                generators: generators.listClusters,
              },
            },
            {
              name: "--addon-name",
              description:
                "The name of the add-on. The name must match one of the names returned by  ListAddons",
              args: {
                name: "string",
                generators: generators.listAddonsForCluster,
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
                generators: generators.listFiles,
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "addon-deleted",
          description:
            "Wait until ResourceNotFoundException is thrown when polling with ``describe-addon``. It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--cluster-name",
              description: "The name of your cluster",
              args: {
                name: "string",
                generators: generators.listClusters,
              },
            },
            {
              name: "--addon-name",
              description:
                "The name of the add-on. The name must match one of the names returned by  ListAddons",
              args: {
                name: "string",
                generators: generators.listAddonsForCluster,
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
                generators: generators.listFiles,
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "cluster-active",
          description:
            "Wait until JMESPath query cluster.status returns ACTIVE when polling with ``describe-cluster``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks",
          options: [
            {
              name: "--name",
              description: "The name of your cluster",
              args: {
                name: "string",
                generators: generators.listClusters,
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
                generators: generators.listFiles,
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "cluster-deleted",
          description:
            "Wait until ResourceNotFoundException is thrown when polling with ``describe-cluster``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks",
          options: [
            {
              name: "--name",
              description: "The name of your cluster",
              args: {
                name: "string",
                generators: generators.listClusters,
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
                generators: generators.listFiles,
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "fargate-profile-active",
          description:
            "Wait until JMESPath query fargateProfile.status returns ACTIVE when polling with ``describe-fargate-profile``. It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--cluster-name",
              description: "The name of your cluster",
              args: {
                name: "string",
              },
            },
            {
              name: "--fargate-profile-name",
              description: "The name of the Fargate profile to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "fargate-profile-deleted",
          description:
            "Wait until ResourceNotFoundException is thrown when polling with ``describe-fargate-profile``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--cluster-name",
              description: "The name of your cluster",
              args: {
                name: "string",
              },
            },
            {
              name: "--fargate-profile-name",
              description: "The name of the Fargate profile to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "nodegroup-active",
          description:
            "Wait until JMESPath query nodegroup.status returns ACTIVE when polling with ``describe-nodegroup``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 80 failed checks",
          options: [
            {
              name: "--cluster-name",
              description: "The name of your cluster",
              args: {
                name: "string",
                generators: generators.listClusters,
              },
            },
            {
              name: "--nodegroup-name",
              description: "The name of the node group to describe",
              args: {
                name: "string",
                generators: generators.listNodeGroupsForCluster,
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
                generators: generators.listFiles,
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "nodegroup-deleted",
          description:
            "Wait until ResourceNotFoundException is thrown when polling with ``describe-nodegroup``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks",
          options: [
            {
              name: "--cluster-name",
              description: "The name of your cluster",
              args: {
                name: "string",
                generators: generators.listClusters,
              },
            },
            {
              name: "--nodegroup-name",
              description: "The name of the node group to describe",
              args: {
                name: "string",
                generators: generators.listNodeGroupsForCluster,
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
                generators: generators.listFiles,
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
      ],
    },
  ],
};
export default completionSpec;
