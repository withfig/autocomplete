const attributes: string[] = [
  "HealthStatus",
  "Color",
  "Causes",
  "ApplicationMetrics",
  "RefreshedAt",
  "All",
];
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
    return list.map((resource) => {
      const name = (childKey ? resource[childKey] : resource) as string;
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
const customGenerator = async (
  tokens: string[],
  executeShellCommand: Fig.ExecuteCommandFunction,
  command: string[],
  options: string[],
  parentKey: string,
  childKey = ""
): Promise<Fig.Suggestion[]> => {
  try {
    let args = ["elasticbeanstalk", ...command];
    for (const option of options) {
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
    return list.map((resource) => {
      const name = (childKey ? resource[childKey] : resource) as string;
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
const filterManagedAction = async (
  tokens: string[],
  executeShellCommand: Fig.ExecuteCommandFunction,
  command: string,
  options: string[],
  parentKey: string,
  childKey = "",
  filter: string
): Promise<Fig.Suggestion[]> => {
  return customGenerator(
    tokens,
    executeShellCommand,
    [command, "--status", filter],
    options,
    parentKey,
    childKey
  );
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
    arr.map((fsObject) => {
      if (fsObject.toLowerCase() == ".ds_store") return;
      if (fsObject.slice(0, 1) === ".") dotsArr.push(fsObject);
      else otherArr.push(fsObject);
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
  listEnvironmentIds: {
    script: ["aws", "elasticbeanstalk", "describe-environments"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Environments", "EnvironmentId");
    },
  },
  listEnvironmentNames: {
    script: ["aws", "elasticbeanstalk", "describe-environments"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Environments", "EnvironmentName");
    },
  },
  listManagedActionsWithFilter: {
    custom: async function (tokens, executeShellCommand) {
      return filterManagedAction(
        tokens,
        executeShellCommand,
        "describe-environment-managed-actions",
        ["--environment-name", "--environment-id"],
        "ManagedActions",
        "ActionId",
        "Scheduled"
      );
    },
  },
  listIamRoleArns: {
    script: ["aws", "iam", "list-roles"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Roles", "Arn");
    },
  },
  listCnamePrefixes: {
    script: ["aws", "elasticbeanstalk", "describe-environments"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Environments", "CNAME").map((cname) => {
        try {
          const parts = (cname.name as string).split(".");
          if (parts.length && parts[0] !== "elasticbeanstalk") {
            return {
              name: parts[0],
              icon: cname.icon,
            };
          }
          return null;
        } catch (e) {
          console.log(e);
        }
      });
    },
  },
  listApplications: {
    script: ["aws", "elasticbeanstalk", "describe-applications"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Applications", "ApplicationName");
    },
  },
  listApplicationVersionLabels: {
    custom: async function (tokens, executeShellCommand) {
      return customGenerator(
        tokens,
        executeShellCommand,
        ["describe-application-versions"],
        ["--application-name"],
        "ApplicationVersions",
        "VersionLabel"
      );
    },
  },
  listBuckets: {
    script: ["aws", "s3", "ls", "--page-size", "1000"],
    postProcess: (out) => {
      try {
        return out.split("\n").map((line) => {
          const parts = line.split(/\s+/);
          // sub prefix
          if (!parts.length) {
            return [];
          }
          return {
            name: parts[parts.length - 1],
            insertValue: `S3Bucket=${parts[parts.length - 1]},S3Key=`,
          };
        }) as Fig.Suggestion[];
      } catch (error) {
        console.error(error);
      }
      return [];
    },
  },
  listSolutionStacks: {
    script: ["aws", "elasticbeanstalk", "list-available-solution-stacks"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "SolutionStacks");
    },
  },
  listPlatformArns: {
    script: ["aws", "elasticbeanstalk", "list-platform-versions"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "PlatformSummaryList", "PlatformArn");
    },
  },
  listApplicationArns: {
    script: ["aws", "elasticbeanstalk", "describe-applications"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Applications", "ApplicationArn");
    },
  },
  listEnvironmentArns: {
    script: ["aws", "elasticbeanstalk", "describe-environments"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Environments", "EnvironmentArn");
    },
  },
};
const completionSpec: Fig.Spec = {
  name: "elasticbeanstalk",
  description:
    "AWS Elastic Beanstalk AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable, fault-tolerant applications running on the Amazon Web Services cloud. For more information about this product, go to the AWS Elastic Beanstalk details page. The location of the latest AWS Elastic Beanstalk WSDL is https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl. To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that enable you to access the API, go to Tools for Amazon Web Services.  Endpoints  For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to Regions and Endpoints in the Amazon Web Services Glossary",
  subcommands: [
    {
      name: "abort-environment-update",
      description:
        "Cancels in-progress environment configuration update or application version deployment",
      options: [
        {
          name: "--environment-id",
          description:
            "This specifies the ID of the environment with the in-progress update that you want to cancel",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--environment-name",
          description:
            "This specifies the name of the environment with the in-progress update that you want to cancel",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
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
      name: "apply-environment-managed-action",
      description:
        "Applies a scheduled managed action immediately. A managed action can be applied only if its status is Scheduled. Get the status and action ID of a managed action with DescribeEnvironmentManagedActions",
      options: [
        {
          name: "--environment-name",
          description: "The name of the target environment",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--environment-id",
          description: "The environment ID of the target environment",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--action-id",
          description:
            "The action ID of the scheduled managed action to execute",
          args: {
            name: "string",
            generators: generators.listManagedActionsWithFilter,
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
      name: "associate-environment-operations-role",
      description:
        "Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see Operations roles in the AWS Elastic Beanstalk Developer Guide",
      options: [
        {
          name: "--environment-name",
          description:
            "The name of the environment to which to set the operations role",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--operations-role",
          description:
            "The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role",
          args: {
            name: "string",
            generators: generators.listIamRoleArns,
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
      name: "check-dns-availability",
      description: "Checks if the specified CNAME is available",
      options: [
        {
          name: "--cname-prefix",
          description: "The prefix used when this CNAME is reserved",
          args: {
            name: "string",
            generators: generators.listCnamePrefixes,
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
      name: "compose-environments",
      description:
        "Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named env.yaml. See Compose Environments for details",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application to which the specified source bundles belong",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--group-name",
          description:
            "The name of the group to which the target environments belong. Specify a group name only if the environment name defined in each target environment's manifest ends with a + (plus) character. See Environment Manifest (env.yaml) for details",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-labels",
          description:
            "A list of version labels, specifying one or more application source bundles that belong to the target application. Each source bundle must include an environment manifest that specifies the name of the environment and the name of the solution stack to use, and optionally can specify environment links to create",
          args: {
            name: "list",
            generators: generators.listApplicationVersionLabels,
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
      name: "create-application",
      description:
        "Creates an application that has one configuration template named default and no application versions",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application. Must be unique within your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Your description of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-lifecycle-config",
          description:
            "Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies the tags applied to the application. Elastic Beanstalk applies these tags only to the application. Environments that you create in the application don't inherit the tags",
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
      name: "create-application-version",
      description:
        "Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows: Specify a commit in an AWS CodeCommit repository with SourceBuildInformation. Specify a build in an AWS CodeBuild with SourceBuildInformation and BuildConfiguration. Specify a source bundle in S3 with SourceBundle  Omit both SourceBuildInformation and SourceBundle to use the default sample application.  After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application. If no application is found with this name, and AutoCreateApplication is false, returns an InvalidParameterValue error",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--version-label",
          description:
            "A label identifying this version. Constraint: Must be unique per application. If an application version already exists with this label for the specified application, AWS Elastic Beanstalk returns an InvalidParameterValue error",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of this application version",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-build-information",
          description:
            "Specify a commit in an AWS CodeCommit Git repository to use as the source code for the application version",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-bundle",
          description:
            "The Amazon S3 bucket and key that identify the location of the source bundle for this version.  The Amazon S3 bucket must be in the same region as the environment.  Specify a source bundle in S3 or a commit in an AWS CodeCommit repository (with SourceBuildInformation), but not both. If neither SourceBundle nor SourceBuildInformation are provided, Elastic Beanstalk uses a sample application",
          args: {
            name: "structure",
            generators: generators.listBuckets,
          },
        },
        {
          name: "--build-configuration",
          description: "Settings for an AWS CodeBuild build",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-create-application",
          description:
            "Set to true to create an application with the specified name if it doesn't already exist",
        },
        {
          name: "--no-auto-create-application",
          description:
            "Set to true to create an application with the specified name if it doesn't already exist",
        },
        {
          name: "--process",
          description:
            "Pre-processes and validates the environment manifest (env.yaml) and configuration files (*.config files in the .ebextensions folder) in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment. You must turn processing on for application versions that you create using AWS CodeBuild or AWS CodeCommit. For application versions built from a source bundle in Amazon S3, processing is optional.  The Process option validates Elastic Beanstalk configuration files. It doesn't validate your application's configuration files, like proxy server or Docker configuration",
        },
        {
          name: "--no-process",
          description:
            "Pre-processes and validates the environment manifest (env.yaml) and configuration files (*.config files in the .ebextensions folder) in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment. You must turn processing on for application versions that you create using AWS CodeBuild or AWS CodeCommit. For application versions built from a source bundle in Amazon S3, processing is optional.  The Process option validates Elastic Beanstalk configuration files. It doesn't validate your application's configuration files, like proxy server or Docker configuration",
        },
        {
          name: "--tags",
          description:
            "Specifies the tags applied to the application version. Elastic Beanstalk applies these tags only to the application version. Environments that use the application version don't inherit the tags",
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
      name: "create-configuration-template",
      description:
        "Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings. Templates aren't associated with any environment. The EnvironmentName response element is always null. Related Topics    DescribeConfigurationOptions     DescribeConfigurationSettings     ListAvailableSolutionStacks",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the Elastic Beanstalk application to associate with this configuration template",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--template-name",
          description:
            "The name of the configuration template. Constraint: This name must be unique per application",
          args: {
            name: "string",
          },
        },
        {
          name: "--solution-stack-name",
          description:
            "The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see Supported Platforms in the AWS Elastic Beanstalk Developer Guide. You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration. Use the  ListAvailableSolutionStacks  API to obtain a list of available solution stacks",
          args: {
            name: "string",
            generators: generators.listSolutionStacks,
          },
        },
        {
          name: "--platform-arn",
          description:
            "The Amazon Resource Name (ARN) of the custom platform. For more information, see  Custom Platforms in the AWS Elastic Beanstalk Developer Guide.  If you specify PlatformArn, then don't specify SolutionStackName",
          args: {
            name: "string",
            generators: generators.listPlatformArns,
          },
        },
        {
          name: "--source-configuration",
          description:
            "An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration. Values specified in OptionSettings override any values obtained from the SourceConfiguration. You must specify SourceConfiguration if you don't specify PlatformArn, EnvironmentId, or SolutionStackName. Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name",
          args: {
            name: "structure",
          },
        },
        {
          name: "--environment-id",
          description:
            "The ID of an environment whose settings you want to use to create the configuration template. You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--description",
          description: "An optional description for this configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--option-settings",
          description:
            "Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see Option Values in the AWS Elastic Beanstalk Developer Guide",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--tags",
          description:
            "Specifies the tags applied to the configuration template",
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
      name: "create-environment",
      description:
        "Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application that is associated with this environment",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--environment-name",
          description:
            "A unique name for the environment. Constraint: Must be from 4 to 40 characters in length. The name can contain only letters, numbers, and hyphens. It can't start or end with a hyphen. This name must be unique within a region in your account. If the specified name already exists in the region, Elastic Beanstalk returns an InvalidParameterValue error.  If you don't specify the CNAMEPrefix parameter, the environment name becomes part of the CNAME, and therefore part of the visible URL for your application",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description:
            "The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name parameter. See Environment Manifest (env.yaml) for details",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Your description for this environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cname-prefix",
          description:
            "If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name",
          args: {
            name: "string",
            generators: generators.listCnamePrefixes,
          },
        },
        {
          name: "--tier",
          description:
            "Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies the tags applied to resources in the environment",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--version-label",
          description:
            "The name of the application version to deploy. Default: If not specified, Elastic Beanstalk attempts to deploy the sample application",
          args: {
            name: "string",
            generators: generators.listApplicationVersionLabels,
          },
        },
        {
          name: "--template-name",
          description:
            "The name of the Elastic Beanstalk configuration template to use with the environment.  If you specify TemplateName, then don't specify SolutionStackName",
          args: {
            name: "string",
          },
        },
        {
          name: "--solution-stack-name",
          description:
            "The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. If specified, Elastic Beanstalk sets the configuration values to the default values associated with the specified solution stack. For a list of current solution stacks, see Elastic Beanstalk Supported Platforms in the AWS Elastic Beanstalk Platforms guide.  If you specify SolutionStackName, don't specify PlatformArn or TemplateName",
          args: {
            name: "string",
            generators: generators.listSolutionStacks,
          },
        },
        {
          name: "--platform-arn",
          description:
            "The Amazon Resource Name (ARN) of the custom platform to use with the environment. For more information, see Custom Platforms in the AWS Elastic Beanstalk Developer Guide.  If you specify PlatformArn, don't specify SolutionStackName",
          args: {
            name: "string",
            generators: generators.listPlatformArns,
          },
        },
        {
          name: "--option-settings",
          description:
            "If specified, AWS Elastic Beanstalk sets the specified configuration options to the requested value in the configuration set for the new environment. These override the values obtained from the solution stack or the configuration template",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--options-to-remove",
          description:
            "A list of custom user-defined configuration options to remove from the configuration set for this new environment",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--operations-role",
          description:
            "The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. If specified, Elastic Beanstalk uses the operations role for permissions to downstream services during this call and during subsequent calls acting on this environment. To specify an operations role, you must have the iam:PassRole permission for the role. For more information, see Operations roles in the AWS Elastic Beanstalk Developer Guide",
          args: {
            name: "string",
            generators: generators.listIamRoleArns,
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
      name: "create-platform-version",
      description: "Create a new version of your custom platform",
      options: [
        {
          name: "--platform-name",
          description: "The name of your custom platform",
          args: {
            name: "string",
          },
        },
        {
          name: "--platform-version",
          description:
            "The number, such as 1.0.2, for the new platform version",
          args: {
            name: "string",
          },
        },
        {
          name: "--platform-definition-bundle",
          description:
            "The location of the platform definition archive in Amazon S3",
          args: {
            name: "structure",
            generators: generators.listBuckets,
          },
        },
        {
          name: "--environment-name",
          description: "The name of the builder environment",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--option-settings",
          description:
            "The configuration option settings to apply to the builder environment",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--tags",
          description:
            "Specifies the tags applied to the new platform version. Elastic Beanstalk applies these tags only to the platform version. Environments that you create using the platform version don't inherit the tags",
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
      name: "create-storage-location",
      description:
        "Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, CreateStorageLocation still returns the bucket name but does not create a new bucket",
      options: [
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
      name: "delete-application",
      description:
        "Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.  You cannot delete an application that has a running environment",
      options: [
        {
          name: "--application-name",
          description: "The name of the application to delete",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--terminate-env-by-force",
          description:
            "When set to true, running environments will be terminated before deleting the application",
        },
        {
          name: "--no-terminate-env-by-force",
          description:
            "When set to true, running environments will be terminated before deleting the application",
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
      name: "delete-application-version",
      description:
        "Deletes the specified version from the specified application.  You cannot delete an application version that is associated with a running environment",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application to which the version belongs",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--version-label",
          description: "The label of the version to delete",
          args: {
            name: "string",
            generators: generators.listApplicationVersionLabels,
          },
        },
        {
          name: "--delete-source-bundle",
          description:
            "Set to true to delete the source bundle from your storage bucket. Otherwise, the application version is deleted only from Elastic Beanstalk and the source bundle remains in Amazon S3",
        },
        {
          name: "--no-delete-source-bundle",
          description:
            "Set to true to delete the source bundle from your storage bucket. Otherwise, the application version is deleted only from Elastic Beanstalk and the source bundle remains in Amazon S3",
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
      name: "delete-configuration-template",
      description:
        "Deletes the specified configuration template.  When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application to delete the configuration template from",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--template-name",
          description: "The name of the configuration template to delete",
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
      name: "delete-environment-configuration",
      description:
        "Deletes the draft configuration associated with the running environment. Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using DescribeConfigurationSettings while the update is in progress or if the update fails. The DeploymentStatus for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application the environment is associated with",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--environment-name",
          description:
            "The name of the environment to delete the draft configuration from",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
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
      name: "delete-platform-version",
      description: "Deletes the specified version of a custom platform",
      options: [
        {
          name: "--platform-arn",
          description: "The ARN of the version of the custom platform",
          args: {
            name: "string",
            generators: generators.listPlatformArns,
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
      name: "describe-account-attributes",
      description:
        "Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account. The result currently has one set of attributes\u2014resource quotas",
      options: [
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
      name: "describe-application-versions",
      description: "Retrieve a list of application versions",
      options: [
        {
          name: "--application-name",
          description:
            "Specify an application name to show only application versions for that application",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--version-labels",
          description:
            "Specify a version label to show a specific application version",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listApplicationVersionLabels,
          },
        },
        {
          name: "--max-records",
          description:
            "For a paginated request. Specify a maximum number of application versions to include in each response. If no MaxRecords is specified, all available application versions are retrieved in a single response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request. If no NextToken is specified, the first page is retrieved",
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
      name: "describe-applications",
      description: "Returns the descriptions of existing applications",
      options: [
        {
          name: "--application-names",
          description:
            "If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include those with the specified names",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listApplications,
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
      name: "describe-configuration-options",
      description:
        "Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application associated with the configuration template or environment. Only needed if you want to describe the configuration options associated with either the configuration template or environment",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--template-name",
          description:
            "The name of the configuration template whose configuration options you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-name",
          description:
            "The name of the environment whose configuration options you want to describe",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--solution-stack-name",
          description:
            "The name of the solution stack whose configuration options you want to describe",
          args: {
            name: "string",
            generators: generators.listSolutionStacks,
          },
        },
        {
          name: "--platform-arn",
          description: "The ARN of the custom platform",
          args: {
            name: "string",
            generators: generators.listPlatformArns,
          },
        },
        {
          name: "--options",
          description:
            "If specified, restricts the descriptions to only the specified options",
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
      name: "describe-configuration-settings",
      description:
        "Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment. When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy. Related Topics    DeleteEnvironmentConfiguration",
      options: [
        {
          name: "--application-name",
          description:
            "The application for the environment or configuration template",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--template-name",
          description:
            "The name of the configuration template to describe.  Conditional: You must specify either this parameter or an EnvironmentName, but not both. If you specify both, AWS Elastic Beanstalk returns an InvalidParameterCombination error. If you do not specify either, AWS Elastic Beanstalk returns a MissingRequiredParameter error",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-name",
          description:
            "The name of the environment to describe.  Condition: You must specify either this or a TemplateName, but not both. If you specify both, AWS Elastic Beanstalk returns an InvalidParameterCombination error. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
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
      name: "describe-environment-health",
      description:
        "Returns information about the overall health of the specified environment. The DescribeEnvironmentHealth operation is only available with AWS Elastic Beanstalk Enhanced Health",
      options: [
        {
          name: "--environment-name",
          description:
            "Specify the environment by name. You must specify either this or an EnvironmentName, or both",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--environment-id",
          description:
            "Specify the environment by ID. You must specify either this or an EnvironmentName, or both",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--attribute-names",
          description:
            "Specify the response elements to return. To retrieve all attributes, set to All. If no attribute names are specified, returns the name of the environment",
          args: {
            name: "list",
            suggestions: [
              "Status",
              "ApplicationMetrics",
              "InstancesHealth",
              ...attributes,
            ],
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
      name: "describe-environment-managed-action-history",
      description:
        "Lists an environment's completed and failed managed actions",
      options: [
        {
          name: "--environment-id",
          description: "The environment ID of the target environment",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--environment-name",
          description: "The name of the target environment",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--next-token",
          description: "The pagination token returned by a previous request",
          args: {
            name: "string",
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
      name: "describe-environment-managed-actions",
      description:
        "Lists an environment's upcoming and in-progress managed actions",
      options: [
        {
          name: "--environment-name",
          description: "The name of the target environment",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--environment-id",
          description: "The environment ID of the target environment",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--status",
          description:
            "To show only actions with a particular status, specify a status",
          args: {
            name: "string",
            suggestions: ["Scheduled", "Pending", "Running", "Unknown"],
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
      name: "describe-environment-resources",
      description: "Returns AWS resources for this environment",
      options: [
        {
          name: "--environment-id",
          description:
            "The ID of the environment to retrieve AWS resource usage data.  Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--environment-name",
          description:
            "The name of the environment to retrieve AWS resource usage data.  Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
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
      name: "describe-environments",
      description: "Returns descriptions for existing environments",
      options: [
        {
          name: "--application-name",
          description:
            "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--version-label",
          description:
            "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application version",
          args: {
            name: "string",
            generators: generators.listApplicationVersionLabels,
          },
        },
        {
          name: "--environment-ids",
          description:
            "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified IDs",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--environment-names",
          description:
            "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified names",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--include-deleted",
          description:
            "Indicates whether to include deleted environments:  true: Environments that have been deleted after IncludedDeletedBackTo are displayed.  false: Do not include deleted environments",
        },
        {
          name: "--no-include-deleted",
          description:
            "Indicates whether to include deleted environments:  true: Environments that have been deleted after IncludedDeletedBackTo are displayed.  false: Do not include deleted environments",
        },
        {
          name: "--included-deleted-back-to",
          description:
            "If specified when IncludeDeleted is set to true, then environments deleted after this date are displayed",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-records",
          description:
            "For a paginated request. Specify a maximum number of environments to include in each response. If no MaxRecords is specified, all available environments are retrieved in a single response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request. If no NextToken is specified, the first page is retrieved",
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
      name: "describe-events",
      description:
        "Returns list of event descriptions matching criteria up to the last 6 weeks.  This action returns the most recent 1,000 events from the specified NextToken",
      options: [
        {
          name: "--application-name",
          description:
            "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those associated with this application",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--version-label",
          description:
            "If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this application version",
          args: {
            name: "string",
            generators: generators.listApplicationVersionLabels,
          },
        },
        {
          name: "--template-name",
          description:
            "If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that are associated with this environment configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description:
            "If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--environment-name",
          description:
            "If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--platform-arn",
          description:
            "The ARN of a custom platform version. If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this custom platform version",
          args: {
            name: "string",
            generators: generators.listPlatformArns,
          },
        },
        {
          name: "--request-id",
          description:
            "If specified, AWS Elastic Beanstalk restricts the described events to include only those associated with this request ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--severity",
          description:
            "If specified, limits the events returned from this call to include only those with the specified severity or higher",
          args: {
            name: "string",
            suggestions: ["TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL"],
          },
        },
        {
          name: "--start-time",
          description:
            "If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur on or after this time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur up to, but not including, the EndTime",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-records",
          description:
            "Specifies the maximum number of events that can be returned, beginning with the most recent event",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Pagination token. If specified, the events return the next batch of results",
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
      name: "describe-instances-health",
      description:
        "Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires enhanced health reporting",
      options: [
        {
          name: "--environment-name",
          description: "Specify the AWS Elastic Beanstalk environment by name",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--environment-id",
          description: "Specify the AWS Elastic Beanstalk environment by ID",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--attribute-names",
          description:
            "Specifies the response elements you wish to receive. To retrieve all attributes, set to All. If no attribute names are specified, returns a list of instances",
          args: {
            name: "list",
            suggestions: [
              "LaunchedAt",
              "System",
              "Deployment",
              "AvailabilityZone",
              "InstanceType",
              ...attributes,
            ],
          },
        },
        {
          name: "--next-token",
          description:
            "Specify the pagination token returned by a previous call",
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
      name: "describe-platform-version",
      description:
        "Describes a platform version. Provides full details. Compare to ListPlatformVersions, which provides summary information about a list of platform versions. For definitions of platform version and other platform-related terms, see AWS Elastic Beanstalk Platforms Glossary",
      options: [
        {
          name: "--platform-arn",
          description: "The ARN of the platform version",
          args: {
            name: "string",
            generators: generators.listPlatformArns,
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
      name: "disassociate-environment-operations-role",
      description:
        "Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see Operations roles in the AWS Elastic Beanstalk Developer Guide",
      options: [
        {
          name: "--environment-name",
          description:
            "The name of the environment from which to disassociate the operations role",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
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
      name: "list-available-solution-stacks",
      description:
        "Returns a list of the available solution stack names, with the public version first and then in reverse chronological order",
      options: [
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
      name: "list-platform-branches",
      description:
        "Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch. For definitions of platform branch and other platform-related terms, see AWS Elastic Beanstalk Platforms Glossary",
      options: [
        {
          name: "--filters",
          description:
            "Criteria for restricting the resulting list of platform branches. The filter is evaluated as a logical conjunction (AND) of the separate SearchFilter terms. The following list shows valid attribute values for each of the SearchFilter terms. Most operators take a single value. The in and not_in operators can take multiple values.    Attribute = BranchName:    Operator: = | != | begins_with | ends_with | contains | in | not_in       Attribute = LifecycleState:    Operator: = | != | in | not_in     Values: beta | supported | deprecated | retired       Attribute = PlatformName:    Operator: = | != | begins_with | ends_with | contains | in | not_in       Attribute = TierType:    Operator: = | !=     Values: WebServer/Standard | Worker/SQS/HTTP      Array size: limited to 10 SearchFilter objects. Within each SearchFilter item, the Values array is limited to 10 items",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of platform branch values returned in one call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request. If no NextToken is specified, the first page is retrieved",
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
      name: "list-platform-versions",
      description:
        "Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to DescribePlatformVersion, which provides full details about a single platform version. For definitions of platform version and other platform-related terms, see AWS Elastic Beanstalk Platforms Glossary",
      options: [
        {
          name: "--filters",
          description:
            "Criteria for restricting the resulting list of platform versions. The filter is interpreted as a logical conjunction (AND) of the separate PlatformFilter terms",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of platform version values returned in one call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request. If no NextToken is specified, the first page is retrieved",
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
      description:
        "Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs. Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see Tagging Application Resources",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resouce for which a tag list is requested. Must be the ARN of an Elastic Beanstalk resource",
          args: {
            name: "string",
            generators: [
              generators.listApplicationArns,
              generators.listEnvironmentArns,
            ],
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
      name: "rebuild-environment",
      description:
        "Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart",
      options: [
        {
          name: "--environment-id",
          description:
            "The ID of the environment to rebuild.  Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--environment-name",
          description:
            "The name of the environment to rebuild.  Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
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
      name: "request-environment-info",
      description:
        "Initiates a request to compile the specified type of information of the deployed environment.  Setting the InfoType to tail compiles the last lines from the application server log files of every Amazon EC2 instance in your environment.   Setting the InfoType to bundle compresses the application server log files for every Amazon EC2 instance into a .zip file. Legacy and .NET containers do not support bundle logs.   Use RetrieveEnvironmentInfo to obtain the set of logs.  Related Topics    RetrieveEnvironmentInfo",
      options: [
        {
          name: "--environment-id",
          description:
            "The ID of the environment of the requested data. If no such environment is found, RequestEnvironmentInfo returns an InvalidParameterValue error.  Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--environment-name",
          description:
            "The name of the environment of the requested data. If no such environment is found, RequestEnvironmentInfo returns an InvalidParameterValue error.  Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--info-type",
          description: "The type of information to request",
          args: {
            name: "string",
            suggestions: ["tail", "bundle"],
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
      name: "restart-app-server",
      description:
        "Causes the environment to restart the application container server running on each Amazon EC2 instance",
      options: [
        {
          name: "--environment-id",
          description:
            "The ID of the environment to restart the server for.  Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--environment-name",
          description:
            "The name of the environment to restart the server for.  Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
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
      name: "retrieve-environment-info",
      description:
        "Retrieves the compiled information from a RequestEnvironmentInfo request. Related Topics    RequestEnvironmentInfo",
      options: [
        {
          name: "--environment-id",
          description:
            "The ID of the data's environment. If no such environment is found, returns an InvalidParameterValue error. Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--environment-name",
          description:
            "The name of the data's environment.  If no such environment is found, returns an InvalidParameterValue error.   Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--info-type",
          description: "The type of information to retrieve",
          args: {
            name: "string",
            suggestions: ["tail", "bundle"],
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
      name: "swap-environment-cnames",
      description: "Swaps the CNAMEs of two environments",
      options: [
        {
          name: "--source-environment-id",
          description:
            "The ID of the source environment.  Condition: You must specify at least the SourceEnvironmentID or the SourceEnvironmentName. You may also specify both. If you specify the SourceEnvironmentId, you must specify the DestinationEnvironmentId",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--source-environment-name",
          description:
            "The name of the source environment.  Condition: You must specify at least the SourceEnvironmentID or the SourceEnvironmentName. You may also specify both. If you specify the SourceEnvironmentName, you must specify the DestinationEnvironmentName",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--destination-environment-id",
          description:
            "The ID of the destination environment.  Condition: You must specify at least the DestinationEnvironmentID or the DestinationEnvironmentName. You may also specify both. You must specify the SourceEnvironmentId with the DestinationEnvironmentId",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--destination-environment-name",
          description:
            "The name of the destination environment.  Condition: You must specify at least the DestinationEnvironmentID or the DestinationEnvironmentName. You may also specify both. You must specify the SourceEnvironmentName with the DestinationEnvironmentName",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
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
      name: "terminate-environment",
      description: "Terminates the specified environment",
      options: [
        {
          name: "--environment-id",
          description:
            "The ID of the environment to terminate.  Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--environment-name",
          description:
            "The name of the environment to terminate.  Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--terminate-resources",
          description:
            "Indicates whether the associated AWS resources should shut down when the environment is terminated:    true: The specified environment as well as the associated AWS resources, such as Auto Scaling group and LoadBalancer, are terminated.    false: AWS Elastic Beanstalk resource management is removed from the environment, but the AWS resources continue to operate.    For more information, see the  AWS Elastic Beanstalk User Guide.    Default: true   Valid Values: true | false",
        },
        {
          name: "--no-terminate-resources",
          description:
            "Indicates whether the associated AWS resources should shut down when the environment is terminated:    true: The specified environment as well as the associated AWS resources, such as Auto Scaling group and LoadBalancer, are terminated.    false: AWS Elastic Beanstalk resource management is removed from the environment, but the AWS resources continue to operate.    For more information, see the  AWS Elastic Beanstalk User Guide.    Default: true   Valid Values: true | false",
        },
        {
          name: "--force-terminate",
          description:
            "Terminates the target environment even if another environment in the same group is dependent on it",
        },
        {
          name: "--no-force-terminate",
          description:
            "Terminates the target environment even if another environment in the same group is dependent on it",
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
      name: "update-application",
      description:
        "Updates the specified application to have the specified properties.  If a property (for example, description) is not provided, the value remains unchanged. To clear these properties, specify an empty string",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application to update. If no such application is found, UpdateApplication returns an InvalidParameterValue error",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--description",
          description:
            "A new description for the application. Default: If not specified, AWS Elastic Beanstalk does not update the description",
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
      name: "update-application-resource-lifecycle",
      description: "Modifies lifecycle settings for an application",
      options: [
        {
          name: "--application-name",
          description: "The name of the application",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--resource-lifecycle-config",
          description: "The lifecycle configuration",
          args: {
            name: "structure",
            generators: generators.listIamRoleArns,
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
      name: "update-application-version",
      description:
        "Updates the specified application version to have the specified properties.  If a property (for example, description) is not provided, the value remains unchanged. To clear properties, specify an empty string",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application associated with this version.  If no application is found with this name, UpdateApplication returns an InvalidParameterValue error",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--version-label",
          description:
            "The name of the version to update. If no application version is found with this label, UpdateApplication returns an InvalidParameterValue error",
          args: {
            name: "string",
            generators: generators.listApplicationVersionLabels,
          },
        },
        {
          name: "--description",
          description: "A new description for this version",
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
      name: "update-configuration-template",
      description:
        "Updates the specified configuration template to have the specified properties or configuration option values.  If a property (for example, ApplicationName) is not provided, its value remains unchanged. To clear such properties, specify an empty string.  Related Topics    DescribeConfigurationOptions",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application associated with the configuration template to update.  If no application is found with this name, UpdateConfigurationTemplate returns an InvalidParameterValue error",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-name",
          description:
            "The name of the configuration template to update.  If no configuration template is found with this name, UpdateConfigurationTemplate returns an InvalidParameterValue error",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A new description for the configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--option-settings",
          description:
            "A list of configuration option settings to update with the new specified option value",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--options-to-remove",
          description:
            "A list of configuration options to remove from the configuration set.  Constraint: You can remove only UserDefined configuration options",
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
      name: "update-environment",
      description:
        "Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.  Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an InvalidParameterCombination error.   When updating the configuration settings to a new template or individual settings, a draft configuration is created and DescribeConfigurationSettings for this environment returns two setting descriptions with different DeploymentStatus values",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application with which the environment is associated",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--environment-id",
          description:
            "The ID of the environment to update. If no environment with this ID exists, AWS Elastic Beanstalk returns an InvalidParameterValue error. Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentIds,
          },
        },
        {
          name: "--environment-name",
          description:
            "The name of the environment to update. If no environment with this name exists, AWS Elastic Beanstalk returns an InvalidParameterValue error.  Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--group-name",
          description:
            "The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name or environment ID parameters. See Environment Manifest (env.yaml) for details",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "If this parameter is specified, AWS Elastic Beanstalk updates the description of this environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tier",
          description:
            "This specifies the tier to use to update the environment. Condition: At this time, if you change the tier version, name, or type, AWS Elastic Beanstalk returns InvalidParameterValue error",
          args: {
            name: "structure",
          },
        },
        {
          name: "--version-label",
          description:
            "If this parameter is specified, AWS Elastic Beanstalk deploys the named application version to the environment. If no such application version is found, returns an InvalidParameterValue error",
          args: {
            name: "string",
            generators: generators.listApplicationVersionLabels,
          },
        },
        {
          name: "--template-name",
          description:
            "If this parameter is specified, AWS Elastic Beanstalk deploys this configuration template to the environment. If no such configuration template is found, AWS Elastic Beanstalk returns an InvalidParameterValue error",
          args: {
            name: "string",
          },
        },
        {
          name: "--solution-stack-name",
          description:
            "This specifies the platform version that the environment will run after the environment is updated",
          args: {
            name: "string",
            generators: generators.listSolutionStacks,
          },
        },
        {
          name: "--platform-arn",
          description: "The ARN of the platform, if used",
          args: {
            name: "string",
            generators: generators.listPlatformArns,
          },
        },
        {
          name: "--option-settings",
          description:
            "If specified, AWS Elastic Beanstalk updates the configuration set associated with the running environment and sets the specified configuration options to the requested value",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--options-to-remove",
          description:
            "A list of custom user-defined configuration options to remove from the configuration set for this environment",
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
      name: "update-tags-for-resource",
      description:
        "Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: TagsToAdd for tags to add or update, and TagsToRemove. Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see Tagging Application Resources. If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:  elasticbeanstalk:AddTags  Controls permission to call UpdateTagsForResource and pass a list of tags to add in the TagsToAdd parameter.  elasticbeanstalk:RemoveTags  Controls permission to call UpdateTagsForResource and pass a list of tag keys to remove in the TagsToRemove parameter.   For details about creating a custom user policy, see Creating a Custom User Policy",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resouce to be updated. Must be the ARN of an Elastic Beanstalk resource",
          args: {
            name: "string",
            generators: [
              generators.listApplicationArns,
              generators.listEnvironmentArns,
            ],
          },
        },
        {
          name: "--tags-to-add",
          description:
            "A list of tags to add or update. If a key of an existing tag is added, the tag's value is updated. Specify at least one of these parameters: TagsToAdd, TagsToRemove",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--tags-to-remove",
          description:
            "A list of tag keys to remove. If a tag key doesn't exist, it is silently ignored. Specify at least one of these parameters: TagsToAdd, TagsToRemove",
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
      name: "validate-configuration-settings",
      description:
        "Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid. This action returns a list of messages indicating any errors or warnings associated with the selection of option values",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application that the configuration template or environment belongs to",
          args: {
            name: "string",
            generators: generators.listApplications,
          },
        },
        {
          name: "--template-name",
          description:
            "The name of the configuration template to validate the settings against. Condition: You cannot specify both this and an environment name",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-name",
          description:
            "The name of the environment to validate the settings against. Condition: You cannot specify both this and a configuration template name",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--option-settings",
          description: "A list of the options and desired values to evaluate",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "environment-exists",
          description:
            "Wait until JMESPath query Environments[].Status returns Ready for all elements when polling with ``describe-environments``. It will poll every 20 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--application-name",
              description:
                "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application",
              args: {
                name: "string",
                generators: generators.listApplications,
              },
            },
            {
              name: "--version-label",
              description:
                "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application version",
              args: {
                name: "string",
                generators: generators.listApplicationVersionLabels,
              },
            },
            {
              name: "--environment-ids",
              description:
                "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified IDs",
              args: {
                name: "list",
                isVariadic: true,
                generators: generators.listEnvironmentIds,
              },
            },
            {
              name: "--environment-names",
              description:
                "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified names",
              args: {
                name: "list",
                isVariadic: true,
                generators: generators.listEnvironmentNames,
              },
            },
            {
              name: "--include-deleted",
              description:
                "Indicates whether to include deleted environments:  true: Environments that have been deleted after IncludedDeletedBackTo are displayed.  false: Do not include deleted environments",
            },
            {
              name: "--no-include-deleted",
              description:
                "Indicates whether to include deleted environments:  true: Environments that have been deleted after IncludedDeletedBackTo are displayed.  false: Do not include deleted environments",
            },
            {
              name: "--included-deleted-back-to",
              description:
                "If specified when IncludeDeleted is set to true, then environments deleted after this date are displayed",
              args: {
                name: "timestamp",
              },
            },
            {
              name: "--max-records",
              description:
                "For a paginated request. Specify a maximum number of environments to include in each response. If no MaxRecords is specified, all available environments are retrieved in a single response",
              args: {
                name: "integer",
              },
            },
            {
              name: "--next-token",
              description:
                "For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request. If no NextToken is specified, the first page is retrieved",
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
          name: "environment-terminated",
          description:
            "Wait until JMESPath query Environments[].Status returns Terminated for all elements when polling with ``describe-environments``. It will poll every 20 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--application-name",
              description:
                "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application",
              args: {
                name: "string",
                generators: generators.listApplications,
              },
            },
            {
              name: "--version-label",
              description:
                "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application version",
              args: {
                name: "string",
                generators: generators.listApplicationVersionLabels,
              },
            },
            {
              name: "--environment-ids",
              description:
                "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified IDs",
              args: {
                name: "list",
                isVariadic: true,
                generators: generators.listEnvironmentIds,
              },
            },
            {
              name: "--environment-names",
              description:
                "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified names",
              args: {
                name: "list",
                isVariadic: true,
                generators: generators.listEnvironmentNames,
              },
            },
            {
              name: "--include-deleted",
              description:
                "Indicates whether to include deleted environments:  true: Environments that have been deleted after IncludedDeletedBackTo are displayed.  false: Do not include deleted environments",
            },
            {
              name: "--no-include-deleted",
              description:
                "Indicates whether to include deleted environments:  true: Environments that have been deleted after IncludedDeletedBackTo are displayed.  false: Do not include deleted environments",
            },
            {
              name: "--included-deleted-back-to",
              description:
                "If specified when IncludeDeleted is set to true, then environments deleted after this date are displayed",
              args: {
                name: "timestamp",
              },
            },
            {
              name: "--max-records",
              description:
                "For a paginated request. Specify a maximum number of environments to include in each response. If no MaxRecords is specified, all available environments are retrieved in a single response",
              args: {
                name: "integer",
              },
            },
            {
              name: "--next-token",
              description:
                "For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request. If no NextToken is specified, the first page is retrieved",
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
          name: "environment-updated",
          description:
            "Wait until JMESPath query Environments[].Status returns Ready for all elements when polling with ``describe-environments``. It will poll every 20 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--application-name",
              description:
                "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application",
              args: {
                name: "string",
                generators: generators.listApplications,
              },
            },
            {
              name: "--version-label",
              description:
                "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application version",
              args: {
                name: "string",
                generators: generators.listApplicationVersionLabels,
              },
            },
            {
              name: "--environment-ids",
              description:
                "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified IDs",
              args: {
                name: "list",
                isVariadic: true,
                generators: generators.listEnvironmentIds,
              },
            },
            {
              name: "--environment-names",
              description:
                "If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified names",
              args: {
                name: "list",
                isVariadic: true,
                generators: generators.listEnvironmentNames,
              },
            },
            {
              name: "--include-deleted",
              description:
                "Indicates whether to include deleted environments:  true: Environments that have been deleted after IncludedDeletedBackTo are displayed.  false: Do not include deleted environments",
            },
            {
              name: "--no-include-deleted",
              description:
                "Indicates whether to include deleted environments:  true: Environments that have been deleted after IncludedDeletedBackTo are displayed.  false: Do not include deleted environments",
            },
            {
              name: "--included-deleted-back-to",
              description:
                "If specified when IncludeDeleted is set to true, then environments deleted after this date are displayed",
              args: {
                name: "timestamp",
              },
            },
            {
              name: "--max-records",
              description:
                "For a paginated request. Specify a maximum number of environments to include in each response. If no MaxRecords is specified, all available environments are retrieved in a single response",
              args: {
                name: "integer",
              },
            },
            {
              name: "--next-token",
              description:
                "For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request. If no NextToken is specified, the first page is retrieved",
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
      ],
    },
  ],
};
export default completionSpec;
