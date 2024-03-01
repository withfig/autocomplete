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
    "Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications.  Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use all the existing plugins and tooling from the Kubernetes community. Applications running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, whether running in on-premises data centers or public clouds. This means that you can easily migrate any standard Kubernetes application to Amazon EKS without any code modification required",
  subcommands: [
    {
      name: "associate-encryption-config",
      description:
        "Associate encryption configuration to an existing cluster. You can use this API to enable encryption on existing clusters which do not have encryption already enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new EKS clusters",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of the cluster that you are associating with encryption configuration",
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
            "The client request token you are using with the encryption configuration",
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
        "Associate an identity provider configuration to a cluster. If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes roles and clusterroles to assign permissions to the roles, and then bind the roles to the identities using Kubernetes rolebindings and clusterrolebindings. For more information see Using RBAC Authorization in the Kubernetes documentation",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of the cluster to associate the configuration to",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--oidc",
          description:
            "An object that represents an OpenID Connect (OIDC) identity provider configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata to apply to the configuration to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define",
          args: {
            name: "map",
            description: "Key1=string,Key2=string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
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
      name: "create-addon",
      description:
        "Creates an Amazon EKS add-on. Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. Amazon EKS add-ons can only be used with Amazon EKS clusters running version 1.18 with platform version eks.3 or later because add-ons rely on the Server-side Apply Kubernetes feature, which is only available in Kubernetes 1.18 and later",
      options: [
        {
          name: "--cluster-name",
          description: "The name of the cluster to create the add-on for",
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
            "How to resolve parameter value conflicts when migrating an existing add-on to an Amazon EKS add-on",
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
            "The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define",
          args: {
            name: "map",
            description: "Key1=string,Key2=string",
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
        "Creates an Amazon EKS control plane.  The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as etcd and the API server. The control plane runs in an account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single-tenant and unique and runs on its own set of Amazon EC2 instances. The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support kubectl exec, logs, and proxy data flows). Amazon EKS nodes run in your AWS account and connect to your cluster's control plane via the Kubernetes API server endpoint and a certificate file that is created for your cluster. Cluster creation typically takes several minutes. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see Managing Cluster Authentication and Launching Amazon EKS nodes in the Amazon EKS User Guide",
      options: [
        {
          name: "--name",
          description: "The unique name to give to your cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. For more information, see Amazon EKS Service IAM Role in the  Amazon EKS User Guide",
          args: {
            name: "string",
            generators: generators.listEKSClusterRoles,
          },
        },
        {
          name: "--resources-vpc-config",
          description:
            "The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see Cluster VPC Considerations and Cluster Security Group Considerations in the Amazon EKS User Guide. You must specify at least two subnets. You can specify up to five security groups, but we recommend that you use a dedicated security group for your cluster control plane",
          args: {
            name: "structure",
            description:
              "SubnetIds=string,string,securityGroupIds=string,string,endpointPublicAccess=boolean,endpointPrivateAccess=boolean,publicAccessCidrs=string,string",
          },
        },
        {
          name: "--kubernetes-network-config",
          description: "The Kubernetes network configuration for the cluster",
          args: {
            name: "structure",
            description: "ServiceIpv4Cidr=string",
          },
        },
        {
          name: "--logging",
          description:
            "Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define",
          args: {
            name: "map",
            description: "Key1=string,Key2=string",
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
          name: "--kubernetes-version",
          description:
            "The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used",
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
      name: "create-fargate-profile",
      description:
        "Creates an AWS Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate. The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile\u2019s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate. When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes Role Based Access Control (RBAC) for authorization so that the kubelet that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see Pod Execution Role in the Amazon EKS User Guide. Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating. If any Fargate profiles in a cluster are in the DELETING status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster. For more information, see AWS Fargate Profile in the Amazon EKS User Guide",
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
          description:
            "The name of the Amazon EKS cluster to apply the Fargate profile to",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--pod-execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in the Fargate profile. The pod execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see Pod Execution Role in the Amazon EKS User Guide",
          args: {
            name: "string",
            generators: generators.listFargatePodRoles,
          },
        },
        {
          name: "--subnets",
          description:
            "The IDs of subnets to launch your pods into. At this time, pods running on Fargate are not assigned public IP addresses, so only private subnets (with no direct route to an Internet Gateway) are accepted for this parameter",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listSubnetsForCluster,
          },
        },
        {
          name: "--selectors",
          description:
            "The selectors to match for pods to use this Fargate profile. Each selector must have an associated namespace. Optionally, you can also specify labels for a namespace. You may specify up to five selectors in a Fargate profile",
          args: {
            name: "list",
            isVariadic: true,
            description:
              "Namespace=string,labels={KeyName1=string,KeyName2=string}",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata to apply to the Fargate profile to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Fargate profile tags do not propagate to any other resources associated with the Fargate profile, such as the pods that are scheduled with it",
          args: {
            name: "map",
            description: "Key1=string,Key2=string",
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
        "Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see Launch template support. An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by AWS for an Amazon EKS cluster. Each node group uses a version of the Amazon EKS optimized Amazon Linux 2 AMI. For more information, see Managed Node Groups in the Amazon EKS User Guide",
      options: [
        {
          name: "--cluster-name",
          description: "The name of the cluster to create the node group in",
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
            description: "MinSize=integer,maxSize=integer,desiredSize=integer",
          },
        },
        {
          name: "--disk-size",
          description:
            "The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB. If you specify launchTemplate, then don't specify diskSize, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--subnets",
          description:
            "The subnets to use for the Auto Scaling group that is created for your node group. These subnets must have the tag key kubernetes.io/cluster/CLUSTER_NAME with a value of shared, where CLUSTER_NAME is replaced with the name of your cluster. If you specify launchTemplate, then don't specify  SubnetId  in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listSubnetsForCluster,
          },
        },
        {
          name: "--instance-types",
          description:
            "Specify the instance types for a node group. If you specify a GPU instance type, be sure to specify AL2_x86_64_GPU with the amiType parameter. If you specify launchTemplate, then you can specify zero or one instance type in your launch template or you can specify 0-20 instance types for instanceTypes. If however, you specify an instance type in your launch template and specify any instanceTypes, the node group deployment will fail. If you don't specify an instance type in a launch template or for instanceTypes, then t3.medium is used, by default. If you specify Spot for capacityType, then we recommend specifying multiple values for instanceTypes. For more information, see Managed node group capacity types and Launch template support in the Amazon EKS User Guide",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--ami-type",
          description:
            "The AMI type for your node group. GPU instance types should use the AL2_x86_64_GPU AMI type. Non-GPU instances should use the AL2_x86_64 AMI type. Arm instances should use the AL2_ARM_64 AMI type. All types use the Amazon EKS optimized Amazon Linux 2 AMI. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify amiType, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide",
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
            "The remote access (SSH) configuration to use with your node group. If you specify launchTemplate, then don't specify remoteAccess, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide",
          args: {
            name: "structure",
            description: "Ec2SshKey=string,sourceSecurityGroups=string,string",
          },
        },
        {
          name: "--node-role",
          description:
            "The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node kubelet daemon makes calls to AWS APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see Amazon EKS node IAM role in the  Amazon EKS User Guide . If you specify launchTemplate, then don't specify  IamInstanceProfile  in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide",
          args: {
            name: "string",
            generators: generators.listNodeGroupRoles,
          },
        },
        {
          name: "--labels",
          description:
            "The Kubernetes labels to be applied to the nodes in the node group when they are created",
          args: {
            name: "map",
            description: "Key1=string,Key2=string",
          },
        },
        {
          name: "--taints",
          description:
            "The Kubernetes taints to be applied to the nodes in the node group",
          args: {
            name: "structure",
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
            "The metadata to apply to the node group to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets",
          args: {
            name: "map",
            description: "Key1=string,Key2=string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-template",
          description:
            "An object representing a node group's launch template specification. If specified, then do not specify instanceTypes, diskSize, or remoteAccess and make sure that the launch template meets the requirements in launchTemplateSpecification",
          args: {
            name: "structure",
            description: "Name=string,version=string,id=string",
          },
        },
        {
          name: "--update-config",
          description: "The node group update configuration",
          args: {
            name: "structure",
            description:
              "MaxUnavailable=integer,maxUnavailablePercentage=integer",
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
            "The AMI version of the Amazon EKS optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For more information, see Amazon EKS optimized Amazon Linux 2 AMI versions in the Amazon EKS User Guide. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify releaseVersion, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--kubernetes-version",
          description:
            "The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify version, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide",
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
      name: "delete-addon",
      description:
        "Delete an Amazon EKS add-on. When you remove the add-on, it will also be deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API",
      options: [
        {
          name: "--cluster-name",
          description: "The name of the cluster to delete the add-on from",
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
      name: "delete-cluster",
      description:
        "Deletes the Amazon EKS cluster control plane. If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see Deleting a Cluster in the Amazon EKS User Guide. If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see DeleteNodegroup and DeleteFargateProfile",
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
      name: "delete-fargate-profile",
      description:
        "Deletes an AWS Fargate profile. When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then they are not scheduled on Fargate and they may remain in a pending state. Only one Fargate profile in a cluster can be in the DELETING status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of the Amazon EKS cluster associated with the Fargate profile to delete",
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
      description: "Deletes an Amazon EKS node group for a cluster",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of the Amazon EKS cluster that is associated with your node group",
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
      name: "describe-addon",
      description: "Describes an Amazon EKS add-on",
      options: [
        {
          name: "--cluster-name",
          description: "The name of the cluster",
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
      name: "describe-addon-versions",
      description:
        "Describes the Kubernetes versions that the add-on can be used with",
      options: [
        {
          name: "--kubernetes-version",
          description:
            "The Kubernetes versions that the add-on can be used with",
          args: {
            name: "string",
            suggestions: kubernetesVersions,
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated DescribeAddonVersionsRequest where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
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
        "Returns descriptive information about an Amazon EKS cluster. The API server endpoint and certificate authority data returned by this operation are required for kubelet and kubectl to communicate with your Kubernetes API server. For more information, see Create a kubeconfig for Amazon EKS.  The API server endpoint and certificate authority data aren't available until the cluster reaches the ACTIVE state",
      options: [
        {
          name: "--name",
          description: "The name of the cluster to describe",
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
      name: "describe-fargate-profile",
      description:
        "Returns descriptive information about an AWS Fargate profile",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of the Amazon EKS cluster associated with the Fargate profile",
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
      description:
        "Returns descriptive information about an identity provider configuration",
      options: [
        {
          name: "--cluster-name",
          description:
            "The cluster name that the identity provider configuration is associated to",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--identity-provider-config",
          description:
            "An object that represents an identity provider configuration",
          args: {
            name: "structure",
            description: "Type=string,name=string",
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
      name: "describe-nodegroup",
      description:
        "Returns descriptive information about an Amazon EKS node group",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of the Amazon EKS cluster associated with the node group",
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
      name: "describe-update",
      description:
        "Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group. When the status of the update is Succeeded, the update is complete. If an update fails, the status is Failed, and an error detail explains the reason for the failure",
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
            "The name of the Amazon EKS node group associated with the update",
          args: {
            name: "string",
            generators: generators.listNodeGroupsForCluster,
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
      name: "disassociate-identity-provider-config",
      description:
        "Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with AWS IAM users",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of the cluster to disassociate an identity provider from",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--identity-provider-config",
          description:
            "An object that represents an identity provider configuration",
          args: {
            name: "structure",
            description: "Type=string,name=string",
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
      name: "list-addons",
      description: "Lists the available add-ons",
      options: [
        {
          name: "--cluster-name",
          description: "The name of the cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of add-on results returned by ListAddonsRequest in paginated output. When you use this parameter, ListAddonsRequest returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListAddonsRequest request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListAddonsRequest returns up to 100 results and a nextToken value, if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListAddonsRequest where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
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
      name: "list-clusters",
      description:
        "Lists the Amazon EKS clusters in your AWS account in the specified Region",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of cluster results returned by ListClusters in paginated output. When you use this parameter, ListClusters returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListClusters request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListClusters returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListClusters request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes",
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
      name: "list-fargate-profiles",
      description:
        "Lists the AWS Fargate profiles associated with the specified cluster in your AWS account in the specified Region",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of the Amazon EKS cluster that you would like to listFargate profiles in",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of Fargate profile results returned by ListFargateProfiles in paginated output. When you use this parameter, ListFargateProfiles returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListFargateProfiles request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListFargateProfiles returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListFargateProfiles request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value",
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
      description: "A list of identity provider configurations",
      options: [
        {
          name: "--cluster-name",
          description:
            "The cluster name that you want to list identity provider configurations for",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of identity provider configurations returned by ListIdentityProviderConfigs in paginated output. When you use this parameter, ListIdentityProviderConfigs returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListIdentityProviderConfigs request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListIdentityProviderConfigs returns up to 100 results and a nextToken value, if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated IdentityProviderConfigsRequest where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value",
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
      name: "list-nodegroups",
      description:
        "Lists the Amazon EKS managed node groups associated with the specified cluster in your AWS account in the specified Region. Self-managed node groups are not listed",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of the Amazon EKS cluster that you would like to list node groups in",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of node group results returned by ListNodegroups in paginated output. When you use this parameter, ListNodegroups returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListNodegroups request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListNodegroups returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListNodegroups request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value",
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
      name: "list-tags-for-resource",
      description: "List the tags for an Amazon EKS resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are Amazon EKS clusters and managed node groups",
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
        "Lists the updates associated with an Amazon EKS cluster or managed node group in your AWS account, in the specified Region",
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
            "The nextToken value returned from a previous paginated ListUpdates request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of update results returned by ListUpdates in paginated output. When you use this parameter, ListUpdates returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListUpdates request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListUpdates returns up to 100 results and a nextToken value if applicable",
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
      name: "tag-resource",
      description:
        "Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and nodes associated with the cluster",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to which to add tags. Currently, the supported resources are Amazon EKS clusters and managed node groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to add to the resource. A tag is an array of key-value pairs",
          args: {
            name: "map",
            description: "Key1=string,Key2=string",
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
      description: "Deletes specified tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource from which to delete tags. Currently, the supported resources are Amazon EKS clusters and managed node groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to be removed",
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
      name: "update-addon",
      description: "Updates an Amazon EKS add-on",
      options: [
        {
          name: "--cluster-name",
          description: "The name of the cluster",
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
            "How to resolve parameter value conflicts when applying the new version of the add-on to the cluster",
          args: {
            name: "string",
            suggestions: ["OVERWRITE", "NONE"],
          },
        },
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
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
      name: "update-cluster-config",
      description:
        "Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing.  You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .   At this time, you can not update the subnets or security group IDs for an existing cluster.  Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active",
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
            description:
              "SubnetIds=string,string,securityGroupIds=string,string,endpointPublicAccess=boolean,endpointPrivateAccess=boolean,publicAccessCidrs=string,string",
          },
        },
        {
          name: "--logging",
          description:
            "Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
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
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
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
      name: "update-nodegroup-config",
      description:
        "Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the DescribeUpdate API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of the Amazon EKS cluster that the managed node group resides in",
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
            "The Kubernetes labels to be applied to the nodes in the node group after the update",
          args: {
            name: "structure",
            description:
              "AddOrUpdateLabels={Key1=string,Key2=string},removeLabels=string,string",
          },
        },
        {
          name: "--scaling-config",
          description:
            "The scaling configuration details for the Auto Scaling group after the update",
          args: {
            name: "structure",
            description: "MinSize=integer,maxSize=integer,desiredSize=integer",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
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
        "Updates the Kubernetes version or AMI version of an Amazon EKS managed node group. You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template. If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For more information, see Amazon EKS optimized Amazon Linux 2 AMI versions in the Amazon EKS User Guide. You cannot roll back a node group to an earlier Kubernetes version or AMI version. When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can force the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of the Amazon EKS cluster that is associated with the managed node group to update",
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
            "The AMI version of the Amazon EKS optimized AMI to use for the update. By default, the latest available AMI version for the node group's Kubernetes version is used. For more information, see Amazon EKS optimized Amazon Linux 2 AMI versions  in the Amazon EKS User Guide. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify releaseVersion, or the node group update will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide",
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
            description: "Name=string,version=string,id=string",
          },
        },
        {
          name: "--force",
          description:
            "Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue. If an update fails because pods could not be drained, you can force the update after it fails to terminate the old node whether or not any pods are running on the node",
        },
        {
          name: "--no-force",
          description:
            "Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue. If an update fails because pods could not be drained, you can force the update after it fails to terminate the old node whether or not any pods are running on the node",
        },
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--kubernetes-version",
          description:
            "The Kubernetes version to update to. If no version is specified, then the Kubernetes version of the node group does not change. You can specify the Kubernetes version of the cluster to update the node group to the latest AMI version of the cluster's Kubernetes version. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify version, or the node group update will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide",
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
      name: "update-kubeconfig",
      description:
        "Configures kubectl so that you can connect to an Amazon EKS cluster.\n\nNote:\n To use the resulting configuration, you must have kubectl installed and in your PATH environment variable.\n\nThis command constructs a configuration with prepopulated server and certificate authority data values for a specified cluster. \nYou can specify an IAM role ARN with the --role-arn option to use for authentication when you issue kubectl commands. \nOtherwise, the IAM entity in your default AWS CLI or SDK credential chain is used. \nYou can view your default AWS CLI or SDK identity by running the ``aws sts get-caller-identity`` command.\n\nThe resulting kubeconfig is created as a new file or merged with an existing kubeconfig file using the following logic:\n\n* If you specify a path with the --kubeconfig option, then the resulting configuration file is created there or merged with an existing kubeconfig at that location.\n* Or, if you have the KUBECONFIG environment variable set, then the resulting configuration file is created at the first entry in that variable or merged with an existing kubeconfig at that location. \n* Otherwise, by default, the resulting configuration file is created at the default kubeconfig path (.kube/config) in your home directory or merged with an existing kubeconfig at that location.\n* If a previous cluster configuration exists for an Amazon EKS cluster with the same name at the specified path, the existing configuration is overwritten with the new configuration.\n* When update-kubeconfig writes a configuration to a kubeconfig file, the current-context of the kubeconfig file is set to that configuration.\n\nYou can use the --dry-run option to print the resulting configuration to stdout instead of writing it to the specified location.\n",
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
            "Specify the name of the Amazon EKS cluster to create a token for",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--role-arn",
          description:
            "Assume this role for credentials when signing the token",
          args: {
            name: "string",
            generators: generators.listRoles,
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
              description: "The name of the cluster",
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
              description: "The name of the cluster",
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
              description: "The name of the cluster to describe",
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
              description: "The name of the cluster to describe",
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
          name: "nodegroup-active",
          description:
            "Wait until JMESPath query nodegroup.status returns ACTIVE when polling with ``describe-nodegroup``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 80 failed checks",
          options: [
            {
              name: "--cluster-name",
              description:
                "The name of the Amazon EKS cluster associated with the node group",
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
              description:
                "The name of the Amazon EKS cluster associated with the node group",
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
