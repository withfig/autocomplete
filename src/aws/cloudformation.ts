const awsRegions = [
  "af-south-1",
  "eu-north-1",
  "ap-south-1",
  "eu-west-3",
  "eu-west-2",
  "eu-south-1",
  "eu-west-1",
  "ap-northeast-3",
  "ap-northeast-2",
  "me-south-1",
  "ap-northeast-1",
  "sa-east-1",
  "ca-central-1",
  "ap-east-1",
  "ap-southeast-1",
  "ap-southeast-2",
  "eu-central-1",
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2",
];

const callAs = ["SELF", "DELEGATED_ADMIN"];
const typeSuggestion = ["RESOURCE", "MODULE"];
const permissionModel = ["SERVICE_MANAGED", "SELF_MANAGED"];
const deprecatedStatus = ["LIVE", "DEPRECATED"];
const operationStatus = ["PENDING", "IN_PROGRESS", "SUCCESS", "FAILED"];

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
  command: string,
  options: string[],
  parentKey: string,
  childKey = ""
): Promise<Fig.Suggestion[]> => {
  try {
    let args = ["cloudformation", command];

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

const customGeneratorWithFilter = async (
  tokens: string[],
  executeShellCommand: Fig.ExecuteCommandFunction,
  command: string,
  options: string[],
  parentKey: string,
  childKey = "",
  filter: string
): Promise<Fig.Suggestion[]> => {
  try {
    let args = ["cloudformation", command];

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

    return list
      .filter((resource) => {
        return resource.ResourceStatus === filter;
      })
      .map((resource) => ({
        name: (childKey ? resource[childKey] : resource) as string,
        icon: "fig://icon?type=aws",
      }));
  } catch (e) {
    console.log(e);
  }
  return [];
};

const _prefixFile = "file://";
const _prefixS3 = "s3://";

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
  return sortSuggestions(out.split("\n"), false);
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

const sortSuggestions = (arr: string[], isS3?: boolean): Fig.Suggestion[] => {
  const sortFnStrings = (a, b) => {
    return a.localeCompare(b);
  };

  const alphabeticalSortFilesAndFolders = (arr) => {
    const dots_arr = [];
    const other_arr = [];

    arr.map((fsObject) => {
      if (fsObject.toLowerCase() == ".ds_store") return;
      if (fsObject.slice(0, 1) === ".") {
        dots_arr.push(fsObject);
      } else {
        other_arr.push(fsObject);
      }
    });

    if (isS3) {
      return [
        ...other_arr.sort(sortFnStrings),
        ...dots_arr.sort(sortFnStrings),
      ];
    }

    return [
      ...other_arr.sort(sortFnStrings),
      "../",
      ...dots_arr.sort(sortFnStrings),
    ];
  };

  const temp_array = alphabeticalSortFilesAndFolders(arr);

  const final_array = [];

  temp_array.forEach((item) => {
    if (item !== "" && item !== null) {
      const outputType = item.slice(-1) === "/" ? "folder" : "file";

      final_array.push({
        type: outputType,
        name: item,
        insertValue: item,
      });
    }
  });

  return final_array;
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

  listRemoteFilesGenerator: {
    script: (tokens) => {
      const whatHasUserTyped = tokens[tokens.length - 1];
      const baseLsCommand = ["aws", "s3", "ls"];

      let folderPath = "";

      const lastSlashIndex = whatHasUserTyped.lastIndexOf("/");

      if (!whatHasUserTyped.startsWith(_prefixS3)) {
        // if whatHasUserTyped is neither s3:// or its substr permutations,
        // then we can assume that the filepath generator is in work
        // so do not return any s3 related filepaths
        if (!_prefixS3.startsWith(whatHasUserTyped)) {
          return undefined;
        }

        return ["echo", "s3://"];
      }

      if (lastSlashIndex > -1) {
        folderPath = whatHasUserTyped.slice(0, lastSlashIndex + 1);
      }

      return [...baseLsCommand, folderPath];
    },
    postProcess: (out) => {
      if (out == "") {
        return [];
      }

      if (out.trim() === _prefixS3) {
        return [
          {
            name: _prefixS3,
            insertValue: _prefixS3,
          },
        ];
      }

      let preFound = false;
      const lines = out.split("\n").map((line) => {
        const parts = line.split(/\s+/);
        // sub prefix
        if (!parts.length) {
          return [];
        }

        let s3Path = parts[parts.length - 1];

        // Parsing S3 CLI Output here
        // Do this in a try block because of the indexing magic
        try {
          //Example Output:
          //                             PRE charts/
          //  2021-05-08 10:15:53      81765 img.jpg
          //
          // After we have found at least 1 PRE keyword
          // we can assume that all lines without PRE are files
          if (parts[1] === "PRE") {
            preFound = true;
            return s3Path;
          }

          const hasBackSlash =
            s3Path.slice(_prefixS3.length).lastIndexOf("/") > -1;

          // it is a file, do not append trailing '/'
          if (preFound && !hasBackSlash) {
            return s3Path;
          }

          // If output line's third column is a number (File size column)
          // we can assume that it is a file so do not append trailing '/'
          if (!isNaN(parseFloat(parts[2])) && isFinite(parseInt(parts[2]))) {
            return s3Path;
          }

          // Any leftover lines are bucket names
          // just append '/' at the end
          if (!hasBackSlash) {
            s3Path = s3Path + "/";
          }
        } catch (e) {
          console.log(e);
        }

        return s3Path;
      });

      return sortSuggestions(lines as string[], true);
    },
    trigger: (newToken, oldToken) => {
      return triggerPrefix(newToken, oldToken, _prefixS3);
    },

    getQueryTerm: (token) => {
      if (!token.startsWith(_prefixS3)) return token;
      return token.slice(token.lastIndexOf("/") + 1);
    },
  },

  listCfnStackIds: {
    script: ["aws", "cloudformation", "list-stacks"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "StackSummaries", "StackId");
    },
  },

  listLogicalResourceIds: {
    custom: async (tokens, executeShellCommand) => {
      return customGenerator(
        tokens,
        executeShellCommand,
        "list-stack-resources",
        ["--stack-name"],
        "StackResourceSummaries",
        "LogicalResourceId"
      );
    },
  },

  listPhysicalResourceIds: {
    custom: async (tokens, executeShellCommand) => {
      return customGenerator(
        tokens,
        executeShellCommand,
        "list-stack-resources",
        ["--stack-name"],
        "StackResourceSummaries",
        "PhysicalResourceId"
      );
    },
  },

  listUpdateFailedResources: {
    custom: async (tokens, executeShellCommand) => {
      return customGeneratorWithFilter(
        tokens,
        executeShellCommand,
        "list-stack-resources",
        ["--stack-name"],
        "StackResourceSummaries",
        "LogicalResourceId",
        "UPDATE_FAILED"
      );
    },
  },

  listDeleteFailedResources: {
    custom: async (tokens, executeShellCommand) => {
      return customGeneratorWithFilter(
        tokens,
        executeShellCommand,
        "list-stack-resources",
        ["--stack-name"],
        "StackResourceSummaries",
        "LogicalResourceId",
        "DELETE_FAILED"
      );
    },
  },

  listCfnStackSets: {
    script: ["aws", "cloudformation", "list-stack-sets"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Summaries", "StackSetId");
    },
  },

  listCfnChangeSets: {
    script: ["aws", "cloudformation", "list-change-sets"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Summaries", "ChangeSetId");
    },
  },

  listRoleArns: {
    script: ["aws", "iam", "list-roles", "--page-size", "100"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Roles", "Arn");
    },
  },

  listRoles: {
    script: ["aws", "iam", "list-roles", "--page-size", "100"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Roles", "RoleName");
    },
  },

  listSNSTopics: {
    script: ["aws", "sns", "list-topics"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Topics", "TopicArn");
    },
  },

  getAccountId: {
    script: ["aws", "sts", "get-caller-identity"],
    postProcess: function (out) {
      try {
        const accountId = JSON.parse(out)["Account"];
        return [{ name: accountId }];
      } catch (error) {
        console.error(error);
      }
      return [];
    },
  },

  listTypeArns: {
    script: ["aws", "cloudformation", "list-types"],
    postProcess: function (out) {
      return postPrecessGenerator(out, "TypeSummaries", "TypeArn");
    },
  },

  listTypeVersionsByTypeName: {
    custom: async (tokens, executeShellCommand) => {
      return customGenerator(
        tokens,
        executeShellCommand,
        "list-type-versions",
        ["--type-name"],
        "TypeVersionSummaries",
        "VersionId"
      );
    },
  },

  listTypeVersionsByArn: {
    custom: async (tokens, executeShellCommand) => {
      return customGenerator(
        tokens,
        executeShellCommand,
        "list-type-versions",
        ["--arn"],
        "TypeVersionSummaries",
        "VersionId"
      );
    },
  },

  getStackIdForChangeSet: {
    custom: async (tokens, executeShellCommand) => {
      try {
        const idx = tokens.indexOf("--change-set-name");
        if (idx < 0) {
          return [];
        }
        const param = tokens[idx + 1];
        const { stdout } = await executeShellCommand({
          command: "aws",
          args: [
            "cloudformation",
            "describe-change-set",
            "--change-set-name",
            param,
          ],
        });

        const stackId = JSON.parse(stdout)["StackId"];

        return [
          {
            name: stackId,
            icon: "fig://icon?type=aws",
          },
        ];
      } catch (e) {
        console.log(e);
      }
      return [];
    },
  },

  listExportNames: {
    script: ["aws", "cloudformation", "list-exports"],
    postProcess: function (out) {
      return postPrecessGenerator(out, "Exports", "Name");
    },
  },

  listBuckets: {
    script: ["aws", "s3", "ls", "--page-size", "1000"],
    postProcess: function (out, tokens) {
      try {
        return out.split("\n").map((line) => {
          const parts = line.split(/\s+/);
          // sub prefix
          if (!parts.length) {
            return [];
          }
          return {
            name: _prefixS3 + parts[parts.length - 1],
          };
        }) as Fig.Suggestion[];
      } catch (error) {
        console.error(error);
      }
      return [];
    },
  },

  listKmsKeys: {
    script: ["aws", "kms", "list-keys", "--page-size", "100"],
    postProcess: function (out) {
      return postPrecessGenerator(out, "Keys", "KeyId");
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "cloudformation",
  description:
    "AWS CloudFormation AWS CloudFormation allows you to create and manage AWS infrastructure deployments predictably and repeatedly. You can use AWS CloudFormation to leverage AWS products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification Service, Elastic Load Balancing, and Auto Scaling to build highly-reliable, highly scalable, cost-effective applications without creating or configuring the underlying AWS infrastructure. With AWS CloudFormation, you declare all of your resources and dependencies in a template file. The template defines a collection of resources as a single unit called a stack. AWS CloudFormation creates and deletes all member resources of the stack together and manages all dependencies between the resources for you. For more information about AWS CloudFormation, see the AWS CloudFormation Product Page. Amazon CloudFormation makes use of other AWS products. If you need additional technical information about a specific AWS product, you can find the product's technical documentation at docs.aws.amazon.com",
  subcommands: [
    {
      name: "cancel-update-stack",
      description:
        "Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.  You can cancel only stacks that are in the UPDATE_IN_PROGRESS state",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique stack ID that is associated with the stack",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this CancelUpdateStack request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to cancel an update on a stack with the same name. You might retry CancelUpdateStack requests to ensure that AWS CloudFormation successfully received them",
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
      name: "continue-update-rollback",
      description:
        "For a specified stack that is in the UPDATE_ROLLBACK_FAILED state, continues rolling it back to the UPDATE_ROLLBACK_COMPLETE state. Depending on the cause of the failure, you can manually  fix the error and continue the rollback. By continuing the rollback, you can return your stack to a working state (the UPDATE_ROLLBACK_COMPLETE state), and then try to update the stack again. A stack goes into the UPDATE_ROLLBACK_FAILED state when AWS CloudFormation cannot roll back all changes after a failed stack update. For example, you might have a stack that is rolling back to an old database instance that was deleted outside of AWS CloudFormation. Because AWS CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique ID of the stack that you want to continue rolling back.  Don't specify the name of a nested stack (a stack that was created by using the AWS::CloudFormation::Stack resource). Instead, use this operation on the parent stack (the stack that contains the AWS::CloudFormation::Stack resource)",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to roll back the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--resources-to-skip",
          description:
            "A list of the logical IDs of the resources that AWS CloudFormation skips during the continue update rollback operation. You can specify only resources that are in the UPDATE_FAILED state because a rollback failed. You can't specify resources that are in the UPDATE_FAILED state for other reasons, for example, because an update was cancelled. To check why a resource update failed, use the DescribeStackResources action, and view the resource status reason.   Specify this property to skip rolling back resources that AWS CloudFormation can't successfully roll back. We recommend that you  troubleshoot resources before skipping them. AWS CloudFormation sets the status of the specified resources to UPDATE_COMPLETE and continues to roll back the stack. After the rollback is complete, the state of the skipped resources will be inconsistent with the state of the resources in the stack template. Before performing another stack update, you must update the stack or resources to be consistent with each other. If you don't, subsequent stack updates might fail, and the stack will become unrecoverable.   Specify the minimum number of resources required to successfully roll back your stack. For example, a failed resource update might cause dependent resources to fail. In this case, it might not be necessary to skip the dependent resources.  To skip resources that are part of nested stacks, use the following format: NestedStackName.ResourceLogicalID. If you want to specify the logical ID of a stack resource (Type: AWS::CloudFormation::Stack) in the ResourcesToSkip list, then its corresponding embedded stack must be in one of the following states: DELETE_IN_PROGRESS, DELETE_COMPLETE, or DELETE_FAILED.   Don't confuse a child stack's name with its corresponding logical ID defined in the parent stack. For an example of a continue update rollback operation with nested stacks, see Using ResourcesToSkip to recover a nested stacks hierarchy",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listUpdateFailedResources,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this ContinueUpdateRollback request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to continue the rollback to a stack with the same name. You might retry ContinueUpdateRollback requests to ensure that AWS CloudFormation successfully received them",
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
      name: "create-change-set",
      description:
        "Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that AWS CloudFormation will create. If you create a change set for an existing stack, AWS CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources AWS CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack. To create a change set for a stack that doesn't exist, for the ChangeSetType parameter, specify CREATE. To create a change set for an existing stack, specify UPDATE for the ChangeSetType parameter. To create a change set for an import operation, specify IMPORT for the ChangeSetType parameter. After the CreateChangeSet call successfully completes, AWS CloudFormation starts creating the change set. To check the status of the change set or to review it, use the DescribeChangeSet action. When you are satisfied with the changes the change set will make, execute the change set by using the ExecuteChangeSet action. AWS CloudFormation doesn't make changes until you execute the change set. To create a change set for the entire stack hierarchy, set IncludeNestedStacks to True",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique ID of the stack for which you are creating a change set. AWS CloudFormation generates the change set by comparing this stack's information with the information that you submit, such as a modified template or different parameter input values",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--template-body",
          description:
            "A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length of 51,200 bytes. AWS CloudFormation generates the change set by comparing this template with the template of the stack that you specified. Conditional: You must specify only TemplateBody or TemplateURL",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "The location of the file that contains the revised template. The URL must point to a template (max size: 460,800 bytes) that is located in an S3 bucket or a Systems Manager document. AWS CloudFormation generates the change set by comparing this template with the stack that you specified. Conditional: You must specify only TemplateBody or TemplateURL",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-previous-template",
          description:
            "Whether to reuse the template that is associated with the stack to create the change set",
        },
        {
          name: "--no-use-previous-template",
          description:
            "Whether to reuse the template that is associated with the stack to create the change set",
        },
        {
          name: "--parameters",
          description:
            "A list of Parameter structures that specify input parameters for the change set. For more information, see the Parameter data type",
          args: {
            name: "list",
            isVariadic: true,
            description:
              "ParameterKey=string,ParameterValue=string,UsePreviousValue=boolean,ResolvedValue=string",
          },
        },
        {
          name: "--capabilities",
          description:
            "In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for AWS CloudFormation to create the stack.    CAPABILITY_IAM and CAPABILITY_NAMED_IAM  Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability.   If you have IAM resources, you can specify either capability.    If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM.    If you don't specify either of these capabilities, AWS CloudFormation returns an InsufficientCapabilities error.   If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.     AWS::IAM::AccessKey      AWS::IAM::Group      AWS::IAM::InstanceProfile      AWS::IAM::Policy      AWS::IAM::Role      AWS::IAM::User      AWS::IAM::UserToGroupAddition    For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.    CAPABILITY_AUTO_EXPAND  Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by AWS CloudFormation.  This capacity does not apply to creating change sets, and specifying it when creating change sets has no effect. If you want to create a stack from a stack template that contains macros and nested stacks, you must create or update the stack directly from the template using the CreateStack or UpdateStack action, and specifying this capability.  For more information on macros, see Using AWS CloudFormation Macros to Perform Custom Processing on Templates",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "CAPABILITY_IAM",
              "CAPABILITY_NAMED_IAM",
              "CAPABILITY_AUTO_EXPAND",
            ],
          },
        },
        {
          name: "--resource-types",
          description:
            "The template resource types that you have permissions to work with if you execute this change set, such as AWS::EC2::Instance, AWS::EC2::*, or Custom::MyCustomInstance. If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for condition keys in IAM policies for AWS CloudFormation. For more information, see Controlling Access with AWS Identity and Access Management in the AWS CloudFormation User Guide",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes when executing the change set. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--rollback-configuration",
          description:
            "The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards",
          args: {
            name: "structure",
            description:
              "RollbackTriggers=[{Arn=string,Type=string},{Arn=string,Type=string}],MonitoringTimeInMinutes=integer",
          },
        },
        {
          name: "--notification-arns",
          description:
            "The Amazon Resource Names (ARNs) of Amazon Simple Notification Service (Amazon SNS) topics that AWS CloudFormation associates with the stack. To remove all associated notification topics, specify an empty list",
          args: {
            name: "list",
            generators: generators.listSNSTopics,
            isVariadic: true,
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to resources in the stack. You can specify a maximum of 50 tags",
          args: {
            name: "list",
            isVariadic: true,
            description: "Key=string,Value=string",
          },
        },
        {
          name: "--change-set-name",
          description:
            "The name of the change set. The name must be unique among all change sets that are associated with the specified stack. A change set name can contain only alphanumeric, case sensitive characters and hyphens. It must start with an alphabetic character and cannot exceed 128 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for this CreateChangeSet request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create another change set with the same name. You might retry CreateChangeSet requests to ensure that AWS CloudFormation successfully received them",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description to help you identify this change set",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-set-type",
          description:
            "The type of change set operation. To create a change set for a new stack, specify CREATE. To create a change set for an existing stack, specify UPDATE. To create a change set for an import operation, specify IMPORT. If you create a change set for a new stack, AWS Cloudformation creates a stack with a unique stack ID, but no template or resources. The stack will be in the  REVIEW_IN_PROGRESS  state until you execute the change set. By default, AWS CloudFormation specifies UPDATE. You can't use the UPDATE type to create a change set for a new stack or the CREATE type to create a change set for an existing stack",
          args: {
            name: "string",
            suggestions: ["CREATE", "UPDATE", "IMPORT"],
          },
        },
        {
          name: "--resources-to-import",
          description: "The resources to import into your stack",
          args: {
            name: "list",
            isVariadic: true,
            description:
              "ResourceType=string,LogicalResourceId=string,ResourceIdentifier={Key1=string,Key2=string}",
          },
        },
        {
          name: "--include-nested-stacks",
          description:
            "Creates a change set for the all nested stacks specified in the template. The default behavior of this action is set to False. To include nested sets in a change set, specify True",
        },
        {
          name: "--no-include-nested-stacks",
          description:
            "Creates a change set for the all nested stacks specified in the template. The default behavior of this action is set to False. To include nested sets in a change set, specify True",
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
      name: "create-stack",
      description:
        "Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack via the DescribeStacks API",
      options: [
        {
          name: "--stack-name",
          description:
            "The name that is associated with the stack. The name must be unique in the Region in which you are creating the stack.  A stack name can contain only alphanumeric characters (case sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-body",
          description:
            "Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document. For more information, go to the Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "A list of Parameter structures that specify input parameters for the stack. For more information, see the Parameter data type",
          args: {
            name: "list",
            isVariadic: true,
            description:
              "ParameterKey=string,ParameterValue=string,UsePreviousValue=boolean,ResolvedValue=string",
          },
        },
        {
          name: "--disable-rollback",
          description:
            "Set to true to disable rollback of the stack if stack creation failed. You can specify either DisableRollback or OnFailure, but not both. Default: false",
        },
        {
          name: "--no-disable-rollback",
          description:
            "Set to true to disable rollback of the stack if stack creation failed. You can specify either DisableRollback or OnFailure, but not both. Default: false",
        },
        {
          name: "--rollback-configuration",
          description:
            "The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards",
          args: {
            name: "structure",
            description:
              "RollbackTriggers=[{Arn=string,Type=string},{Arn=string,Type=string}],MonitoringTimeInMinutes=integer",
          },
        },
        {
          name: "--timeout-in-minutes",
          description:
            "The amount of time that can pass before the stack status becomes CREATE_FAILED; if DisableRollback is not set or is set to false, the stack will be rolled back",
          args: {
            name: "integer",
          },
        },
        {
          name: "--notification-arns",
          description:
            "The Simple Notification Service (SNS) topic ARNs to publish stack related events. You can find your SNS topic ARNs using the SNS console or your Command Line Interface (CLI)",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listSNSTopics,
          },
        },
        {
          name: "--capabilities",
          description:
            "In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for AWS CloudFormation to create the stack.    CAPABILITY_IAM and CAPABILITY_NAMED_IAM  Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability.   If you have IAM resources, you can specify either capability.    If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM.    If you don't specify either of these capabilities, AWS CloudFormation returns an InsufficientCapabilities error.   If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.     AWS::IAM::AccessKey      AWS::IAM::Group      AWS::IAM::InstanceProfile      AWS::IAM::Policy      AWS::IAM::Role      AWS::IAM::User      AWS::IAM::UserToGroupAddition    For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.    CAPABILITY_AUTO_EXPAND  Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by AWS CloudFormation. If you want to create a stack from a stack template that contains macros and nested stacks, you must create the stack directly from the template using this capability.  You should only create stacks directly from a stack template that contains macros if you know what processing the macro performs. Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without AWS CloudFormation being notified.  For more information, see Using AWS CloudFormation Macros to Perform Custom Processing on Templates",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "CAPABILITY_IAM",
              "CAPABILITY_NAMED_IAM",
              "CAPABILITY_AUTO_EXPAND",
            ],
          },
        },
        {
          name: "--resource-types",
          description:
            "The template resource types that you have permissions to work with for this create stack action, such as AWS::EC2::Instance, AWS::EC2::*, or Custom::MyCustomInstance. Use the following syntax to describe template resource types: AWS::* (for all AWS resource), Custom::* (for all custom resources), Custom::logical_ID  (for a specific custom resource), AWS::service_name::* (for all resources of a particular AWS service), and AWS::service_name::resource_logical_ID  (for a specific AWS resource). If the list of resource types doesn't include a resource that you're creating, the stack creation fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for AWS CloudFormation-specific condition keys in IAM policies. For more information, see Controlling Access with AWS Identity and Access Management",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to create the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--on-failure",
          description:
            "Determines what action will be taken if stack creation fails. This must be one of: DO_NOTHING, ROLLBACK, or DELETE. You can specify either OnFailure or DisableRollback, but not both. Default: ROLLBACK",
          args: {
            name: "string",
            suggestions: ["DO_NOTHING", "ROLLBACK", "DELETE"],
          },
        },
        {
          name: "--stack-policy-body",
          description:
            "Structure containing the stack policy body. For more information, go to  Prevent Updates to Stack Resources in the AWS CloudFormation User Guide. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--stack-policy-url",
          description:
            "Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same Region as the stack. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to the resources created in the stack. A maximum number of 50 tags can be specified",
          args: {
            name: "list",
            isVariadic: true,
            description: "Key=string,Value=string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this CreateStack request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create a stack with the same name. You might retry CreateStack requests to ensure that AWS CloudFormation successfully received them. All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a CreateStack operation with the token token1, then all the StackEvents generated by that operation will have ClientRequestToken set as token1. In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format Console-StackOperation-ID, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-termination-protection",
          description:
            "Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see Protecting a Stack From Being Deleted in the AWS CloudFormation User Guide. Termination protection is disabled on stacks by default.   For nested stacks, termination protection is set on the root stack and cannot be changed directly on the nested stack",
        },
        {
          name: "--no-enable-termination-protection",
          description:
            "Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see Protecting a Stack From Being Deleted in the AWS CloudFormation User Guide. Termination protection is disabled on stacks by default.   For nested stacks, termination protection is set on the root stack and cannot be changed directly on the nested stack",
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
      name: "create-stack-instances",
      description:
        "Creates stack instances for the specified accounts, within the specified Regions. A stack instance refers to a stack in a specific account and Region. You must specify at least one value for either Accounts or DeploymentTargets, and you must specify at least one value for Regions",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or unique ID of the stack set that you want to create stack instances from",
          args: {
            name: "string",
            generators: generators.listCfnStackSets,
          },
        },
        {
          name: "--accounts",
          description:
            "[Self-managed permissions] The names of one or more AWS accounts that you want to create stack instances in the specified Region(s) for. You can specify Accounts or DeploymentTargets, but not both",
          args: {
            name: "list",
            generators: generators.getAccountId,
            isVariadic: true,
          },
        },
        {
          name: "--deployment-targets",
          description:
            "[Service-managed permissions] The AWS Organizations accounts for which to create stack instances in the specified Regions. You can specify Accounts or DeploymentTargets, but not both",
          args: {
            name: "structure",
            description:
              "Accounts=string,string,AccountsUrl=string,OrganizationalUnitIds=string,string",
          },
        },
        {
          name: "--regions",
          description:
            "The names of one or more Regions where you want to create stack instances using the specified AWS account(s)",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: awsRegions,
          },
        },
        {
          name: "--parameter-overrides",
          description:
            "A list of stack set parameters whose values you want to override in the selected stack instances. Any overridden parameter values will be applied to all stack instances in the specified accounts and Regions. When specifying parameters and their values, be aware of how AWS CloudFormation sets parameter values during stack instance operations:   To override the current value for a parameter, include the parameter and specify its value.   To leave a parameter set to its present value, you can do one of the following:   Do not include the parameter in the list.   Include the parameter and specify UsePreviousValue as true. (You cannot specify both a value and set UsePreviousValue to true.)     To set all overridden parameter back to the values specified in the stack set, specify a parameter list but do not include any parameters.   To leave all parameters set to their present values, do not specify this property at all.   During stack set updates, any parameter values overridden for a stack instance are not updated, but retain their overridden value. You can only override the parameter values that are specified in the stack set; to add or delete a parameter itself, use UpdateStackSet to update the stack set template",
          args: {
            name: "list",
            isVariadic: true,
            description:
              "ParameterKey=string,ParameterValue=string,UsePreviousValue=boolean,ResolvedValue=string",
          },
        },
        {
          name: "--operation-preferences",
          description:
            "Preferences for how AWS CloudFormation performs this stack set operation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--operation-id",
          description:
            "The unique identifier for this stack set operation.  The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that AWS CloudFormation successfully received them. If you don't specify an operation ID, the SDK generates one automatically.  Repeating this stack set operation with a new operation ID retries all stack instances whose status is OUTDATED",
          args: {
            name: "string",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "create-stack-set",
      description: "Creates a stack set",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name to associate with the stack set. The name must be unique in the Region where you create your stack set.  A stack name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and can't be longer than 128 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the stack set. You can use the description to identify the stack set's purpose or other important information",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-body",
          description:
            "The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, see Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. For more information, see Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description: "The input parameters for the stack set template",
          args: {
            name: "list",
            isVariadic: true,
            description:
              "ParameterKey=string,ParameterValue=string,UsePreviousValue=boolean,ResolvedValue=string",
          },
        },
        {
          name: "--capabilities",
          description:
            "In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.    CAPABILITY_IAM and CAPABILITY_NAMED_IAM  Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stack sets, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability.   If you have IAM resources, you can specify either capability.    If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM.    If you don't specify either of these capabilities, AWS CloudFormation returns an InsufficientCapabilities error.   If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.     AWS::IAM::AccessKey      AWS::IAM::Group      AWS::IAM::InstanceProfile      AWS::IAM::Policy      AWS::IAM::Role      AWS::IAM::User      AWS::IAM::UserToGroupAddition    For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.    CAPABILITY_AUTO_EXPAND  Some templates reference macros. If your stack set template references one or more macros, you must create the stack set directly from the processed template, without first reviewing the resulting changes in a change set. To create the stack set directly, you must acknowledge this capability. For more information, see Using AWS CloudFormation Macros to Perform Custom Processing on Templates.  Stack sets with service-managed permissions do not currently support the use of macros in templates. (This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by AWS CloudFormation.) Even if you specify this capability for a stack set with service-managed permissions, if you reference a macro in your template the stack set operation will fail",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "CAPABILITY_IAM",
              "CAPABILITY_NAMED_IAM",
              "CAPABILITY_AUTO_EXPAND",
            ],
          },
        },
        {
          name: "--tags",
          description:
            "The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified. If you specify tags as part of a CreateStackSet action, AWS CloudFormation checks to see if you have the required IAM permission to tag resources. If you don't, the entire CreateStackSet action fails with an access denied error, and the stack set is not created",
          args: {
            name: "list",
            isVariadic: true,
            description: "Key=string,Value=string",
          },
        },
        {
          name: "--administration-role-arn",
          description:
            "The Amazon Resource Number (ARN) of the IAM role to use to create this stack set.  Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see Prerequisites: Granting Permissions for Stack Set Operations in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--execution-role-name",
          description:
            "The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation. Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets",
          args: {
            name: "string",
            generators: generators.listRoles,
          },
        },
        {
          name: "--permission-model",
          description:
            "Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.   With self-managed permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see Grant Self-Managed Stack Set Permissions.   With service-managed permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by AWS Organizations. For more information, see Grant Service-Managed Stack Set Permissions",
          args: {
            name: "string",
            suggestions: permissionModel,
          },
        },
        {
          name: "--auto-deployment",
          description:
            "Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). Specify only if PermissionModel is SERVICE_MANAGED",
          args: {
            name: "structure",
            description: "Enabled=boolean,RetainStacksOnAccountRemoval=boolean",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   To create a stack set with service-managed permissions while signed in to the management account, specify SELF.   To create a stack set with service-managed permissions while signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated admin in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide.   Stack sets with service-managed permissions are created in the management account, including stack sets that are created by delegated administrators",
          args: {
            name: "string",
            suggestions: callAs,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this CreateStackSet request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create another stack set with the same name. You might retry CreateStackSet requests to ensure that AWS CloudFormation successfully received them. If you don't specify an operation ID, the SDK generates one automatically",
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
      name: "delete-change-set",
      description:
        "Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set. If the call successfully completes, AWS CloudFormation successfully deleted the change set. If IncludeNestedStacks specifies True during the creation of the nested change set, then DeleteChangeSet will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of REVIEW_IN_PROGRESS",
      options: [
        {
          name: "--change-set-name",
          description:
            "The name or Amazon Resource Name (ARN) of the change set that you want to delete",
          args: {
            name: "string",
            generators: generators.listCfnChangeSets,
          },
        },
        {
          name: "--stack-name",
          description:
            "If you specified the name of a change set to delete, specify the stack name or ID (ARN) that is associated with it",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
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
      name: "delete-stack",
      description:
        "Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks do not show up in the DescribeStacks API if the deletion has been completed successfully",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique stack ID that is associated with the stack",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--retain-resources",
          description:
            "For stacks in the DELETE_FAILED state, a list of resource logical IDs that are associated with the resources you want to retain. During deletion, AWS CloudFormation deletes the stack but does not delete the retained resources. Retaining resources is useful when you cannot delete a resource, such as a non-empty S3 bucket, but you want to delete the stack",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listDeleteFailedResources,
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to delete the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this DeleteStack request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to delete a stack with the same name. You might retry DeleteStack requests to ensure that AWS CloudFormation successfully received them. All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a CreateStack operation with the token token1, then all the StackEvents generated by that operation will have ClientRequestToken set as token1. In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format Console-StackOperation-ID, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002",
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
      name: "delete-stack-instances",
      description:
        "Deletes stack instances for the specified accounts, in the specified Regions",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or unique ID of the stack set that you want to delete stack instances for",
          args: {
            name: "string",
            generators: generators.listCfnStackSets,
          },
        },
        {
          name: "--accounts",
          description:
            "[Self-managed permissions] The names of the AWS accounts that you want to delete stack instances for. You can specify Accounts or DeploymentTargets, but not both",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.getAccountId,
          },
        },
        {
          name: "--deployment-targets",
          description:
            "[Service-managed permissions] The AWS Organizations accounts from which to delete stack instances. You can specify Accounts or DeploymentTargets, but not both",
          args: {
            name: "structure",
            description:
              "Accounts=string,string,AccountsUrl=string,OrganizationalUnitIds=string,string",
          },
        },
        {
          name: "--regions",
          description:
            "The Regions where you want to delete stack set instances",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: awsRegions,
          },
        },
        {
          name: "--operation-preferences",
          description:
            "Preferences for how AWS CloudFormation performs this stack set operation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--retain-stacks",
          description:
            "Removes the stack instances from the specified stack set, but doesn't delete the stacks. You can't reassociate a retained stack or add an existing, saved stack to a new stack set. For more information, see Stack set operation options",
        },
        {
          name: "--no-retain-stacks",
          description:
            "Removes the stack instances from the specified stack set, but doesn't delete the stacks. You can't reassociate a retained stack or add an existing, saved stack to a new stack set. For more information, see Stack set operation options",
        },
        {
          name: "--operation-id",
          description:
            "The unique identifier for this stack set operation.  If you don't specify an operation ID, the SDK generates one automatically.  The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You can retry stack set operation requests to ensure that AWS CloudFormation successfully received them. Repeating this stack set operation with a new operation ID retries all stack instances whose status is OUTDATED",
          args: {
            name: "string",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "delete-stack-set",
      description:
        "Deletes a stack set. Before you can delete a stack set, all of its member stack instances must be deleted. For more information about how to do this, see DeleteStackInstances",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or unique ID of the stack set that you're deleting. You can obtain this value by running ListStackSets",
          args: {
            name: "string",
            generators: generators.listCfnStackSets,
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "deregister-type",
      description:
        "Marks an extension or extension version as DEPRECATED in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations. To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry.  You cannot deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the textensionype itself is deregistered as well and marked as deprecated.  To view the deprecation status of an extension or extension version, use DescribeType",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the extension. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            generators: generators.listTypeArns,
          },
        },
        {
          name: "--type",
          description:
            "The kind of extension. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            suggestions: typeSuggestion,
          },
        },
        {
          name: "--type-name",
          description:
            "The name of the extension. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            generators: generators.listTypeArns,
          },
        },
        {
          name: "--version-id",
          description:
            "The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered",
          args: {
            name: "string",
            generators: [
              generators.listTypeVersionsByTypeName,
              generators.listTypeVersionsByArn,
            ],
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
      name: "describe-account-limits",
      description:
        "Retrieves your account's AWS CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see AWS CloudFormation Limits in the AWS CloudFormation User Guide",
      options: [
        {
          name: "--next-token",
          description:
            "A string that identifies the next page of limits that you want to retrieve",
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
      name: "describe-change-set",
      description:
        "Returns the inputs for the change set and a list of changes that AWS CloudFormation will make if you execute the change set. For more information, see Updating Stacks Using Change Sets in the AWS CloudFormation User Guide",
      options: [
        {
          name: "--change-set-name",
          description:
            "The name or Amazon Resource Name (ARN) of the change set that you want to describe",
          args: {
            name: "string",
            generators: generators.listCfnChangeSets,
          },
        },
        {
          name: "--stack-name",
          description:
            "If you specified the name of a change set, specify the stack name or ID (ARN) of the change set you want to describe",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--next-token",
          description:
            "A string (provided by the DescribeChangeSet response output) that identifies the next page of information that you want to retrieve",
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
      name: "describe-stack-drift-detection-status",
      description:
        "Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has drifted, from it's expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information on stack and resource drift, see Detecting Unregulated Configuration Changes to Stacks and Resources. Use DetectStackDrift to initiate a stack drift detection operation. DetectStackDrift returns a StackDriftDetectionId you can use to monitor the progress of the operation using DescribeStackDriftDetectionStatus. Once the drift detection operation has completed, use DescribeStackResourceDrifts to return drift information about the stack and its resources",
      options: [
        {
          name: "--stack-drift-detection-id",
          description:
            "The ID of the drift detection results of this operation.  AWS CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number of drift results AWS CloudFormation retains for any given stack, and for how long, may vary",
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
      name: "describe-stack-events",
      description:
        "Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to Stacks in the AWS CloudFormation User Guide.  You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID)",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--next-token",
          description:
            "A string that identifies the next page of events that you want to retrieve",
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
      name: "describe-stack-instance",
      description:
        "Returns the stack instance that's associated with the specified stack set, AWS account, and Region. For a list of stack instances that are associated with a specific stack set, use ListStackInstances",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or the unique stack ID of the stack set that you want to get stack instance information for",
          args: {
            name: "string",
            generators: generators.listCfnStackSets,
          },
        },
        {
          name: "--stack-instance-account",
          description:
            "The ID of an AWS account that's associated with this stack instance",
          args: {
            name: "string",
            generators: generators.getAccountId,
          },
        },
        {
          name: "--stack-instance-region",
          description:
            "The name of a Region that's associated with this stack instance",
          args: {
            name: "string",
            suggestions: awsRegions,
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "describe-stack-resource",
      description:
        "Returns a description of the specified resource in the specified stack. For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--logical-resource-id",
          description:
            "The logical name of the resource as specified in the template. Default: There is no default value",
          args: {
            name: "string",
            generators: generators.listLogicalResourceIds,
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
      name: "describe-stack-resource-drifts",
      description:
        "Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where AWS CloudFormation detects configuration drift. For a given stack, there will be one StackResourceDrift for each stack resource that has been checked for drift. Resources that have not yet been checked for drift are not included. Resources that do not currently support drift detection are not checked, and so not included. For a list of resources that support drift detection, see Resources that Support Drift Detection. Use DetectStackResourceDrift to detect drift on individual resources, or DetectStackDrift to detect drift on all supported resources for a given stack",
      options: [
        {
          name: "--stack-name",
          description:
            "The name of the stack for which you want drift information",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--stack-resource-drift-status-filters",
          description:
            "The resource drift status values to use as filters for the resource drift results returned.    DELETED: The resource differs from its expected template configuration in that the resource has been deleted.    MODIFIED: One or more resource properties differ from their expected template values.    IN_SYNC: The resources's actual configuration matches its expected template configuration.    NOT_CHECKED: AWS CloudFormation does not currently return this value",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: ["IN_SYNC", "MODIFIED", "DELETED", "NOT_CHECKED"],
          },
        },
        {
          name: "--next-token",
          description:
            "A string that identifies the next page of stack resource drift results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results",
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
      name: "describe-stack-resources",
      description:
        "Returns AWS resource descriptions for running and deleted stacks. If StackName is specified, all the associated resources that are part of the stack are returned. If PhysicalResourceId is specified, the associated resources of the stack that the resource belongs to are returned.  Only the first 100 resources will be returned. If your stack has more resources than this, you should use ListStackResources instead.  For deleted stacks, DescribeStackResources returns resource information for up to 90 days after the stack has been deleted. You must specify either StackName or PhysicalResourceId, but not both. In addition, you can specify LogicalResourceId to filter the returned result. For more information about resources, the LogicalResourceId and PhysicalResourceId, go to the AWS CloudFormation User Guide.  A ValidationError is returned if you specify both StackName and PhysicalResourceId in the same request",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value. Required: Conditional. If you do not specify StackName, you must specify PhysicalResourceId",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--logical-resource-id",
          description:
            "The logical name of the resource as specified in the template. Default: There is no default value",
          args: {
            name: "string",
            generators: generators.listLogicalResourceIds,
          },
        },
        {
          name: "--physical-resource-id",
          description:
            "The name or unique identifier that corresponds to a physical instance ID of a resource supported by AWS CloudFormation. For example, for an Amazon Elastic Compute Cloud (EC2) instance, PhysicalResourceId corresponds to the InstanceId. You can pass the EC2 InstanceId to DescribeStackResources to find which stack the instance belongs to and what other resources are part of the stack. Required: Conditional. If you do not specify PhysicalResourceId, you must specify StackName. Default: There is no default value",
          args: {
            name: "string",
            generators: generators.listPhysicalResourceIds,
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
      name: "describe-stack-set",
      description: "Returns the description of the specified stack set",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or unique ID of the stack set whose description you want",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "describe-stack-set-operation",
      description:
        "Returns the description of the specified stack set operation",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or the unique stack ID of the stack set for the stack operation",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--operation-id",
          description: "The unique ID of the stack set operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "describe-stacks",
      description:
        "Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.  If the stack does not exist, an AmazonCloudFormationException is returned",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--next-token",
          description:
            "A string that identifies the next page of stacks that you want to retrieve",
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
      name: "describe-type",
      description:
        "Returns detailed information about an extension that has been registered. If you specify a VersionId, DescribeType returns information about that specific extension version. Otherwise, it returns information about the default extension version",
      options: [
        {
          name: "--type",
          description:
            "The kind of extension.  Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            generators: generators.listTypeArns,
          },
        },
        {
          name: "--type-name",
          description:
            "The name of the extension. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            generators: generators.listTypeArns,
          },
        },
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the extension. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered. If you specify a VersionId, DescribeType returns information about that specific extension version. Otherwise, it returns information about the default extension version",
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
      name: "describe-type-registration",
      description:
        "Returns information about an extension's registration, including its current status and type and version identifiers. When you initiate a registration request using  RegisterType , you can then use  DescribeTypeRegistration  to monitor the progress of that registration request. Once the registration request has completed, use  DescribeType  to return detailed information about an extension",
      options: [
        {
          name: "--registration-token",
          description:
            "The identifier for this registration request. This registration token is generated by CloudFormation when you initiate a registration request using  RegisterType",
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
      name: "detect-stack-drift",
      description:
        "Detects whether a stack's actual configuration differs, or has drifted, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, AWS CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see Detecting Unregulated Configuration Changes to Stacks and Resources. Use DetectStackDrift to detect drift on all supported resources for a given stack, or DetectStackResourceDrift to detect drift on individual resources. For a list of stack resources that currently support drift detection, see Resources that Support Drift Detection.  DetectStackDrift can take up to several minutes, depending on the number of resources contained within the stack. Use DescribeStackDriftDetectionStatus to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use DescribeStackResourceDrifts to return drift information about the stack and its resources. When detecting drift on a stack, AWS CloudFormation does not detect drift on any nested stacks belonging to that stack. Perform DetectStackDrift directly on the nested stack itself",
      options: [
        {
          name: "--stack-name",
          description:
            "The name of the stack for which you want to detect drift",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--logical-resource-ids",
          description:
            "The logical names of any resources you want to use as filters",
          args: {
            name: "list",
            generators: generators.listLogicalResourceIds,
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
      name: "detect-stack-resource-drift",
      description:
        "Returns information about whether a resource's actual configuration differs, or has drifted, from it's expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which AWS CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see Detecting Unregulated Configuration Changes to Stacks and Resources. Use DetectStackResourceDrift to detect drift on individual resources, or DetectStackDrift to detect drift on all resources in a given stack that support drift detection. Resources that do not currently support drift detection cannot be checked. For a list of resources that support drift detection, see Resources that Support Drift Detection",
      options: [
        {
          name: "--stack-name",
          description: "The name of the stack to which the resource belongs",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--logical-resource-id",
          description:
            "The logical name of the resource for which to return drift information",
          args: {
            name: "string",
            generators: generators.listLogicalResourceIds,
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
      name: "detect-stack-set-drift",
      description:
        "Detect drift on a stack set. When CloudFormation performs drift detection on a stack set, it performs drift detection on the stack associated with each stack instance in the stack set. For more information, see How CloudFormation Performs Drift Detection on a Stack Set.  DetectStackSetDrift returns the OperationId of the stack set drift detection operation. Use this operation id with  DescribeStackSetOperation  to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the stack set, as well as the number of resources included in each stack. Once the operation has completed, use the following actions to return drift information:   Use  DescribeStackSet  to return detailed information about the stack set, including detailed information about the last completed drift operation performed on the stack set. (Information about drift operations that are in progress is not included.)   Use  ListStackInstances  to return a list of stack instances belonging to the stack set, including the drift status and last drift time checked of each instance.   Use  DescribeStackInstance  to return detailed information about a specific stack instance, including its drift status and last drift time checked.   For more information on performing a drift detection operation on a stack set, see Detecting Unmanaged Changes in Stack Sets.  You can only run a single drift detection operation on a given stack set at one time.  To stop a drift detection stack set operation, use  StopStackSetOperation",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name of the stack set on which to perform the drift detection operation",
          args: {
            name: "string",
            generators: generators.listCfnStackSets,
          },
        },
        {
          name: "--operation-preferences",
          description:
            "The user-specified preferences for how AWS CloudFormation performs a stack set operation.  For more information on maximum concurrent accounts and failure tolerance, see Stack set operation options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--operation-id",
          description: "The ID of the stack set operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "estimate-template-cost",
      description:
        "Returns the estimated monthly cost of a template. The return value is an AWS Simple Monthly Calculator URL with a query string that describes the resources required to run the template",
      options: [
        {
          name: "--template-body",
          description:
            "Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to Template Anatomy in the AWS CloudFormation User Guide.) Conditional: You must pass TemplateBody or TemplateURL. If both are passed, only TemplateBody is used",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "Location of file containing the template body. The URL must point to a template that is located in an Amazon S3 bucket or a Systems Manager document. For more information, go to Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must pass TemplateURL or TemplateBody. If both are passed, only TemplateBody is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "A list of Parameter structures that specify input parameters",
          args: {
            name: "list",
            isVariadic: true,
            description:
              "ParameterKey=string,ParameterValue=string,UsePreviousValue=boolean,ResolvedValue=string",
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
      name: "execute-change-set",
      description:
        "Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, AWS CloudFormation starts updating the stack. Use the DescribeStacks action to view the status of the update. When you execute a change set, AWS CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack. If a stack policy is associated with the stack, AWS CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy. To create a change set for the entire stack hierarchy, IncludeNestedStacks must have been set to True",
      options: [
        {
          name: "--change-set-name",
          description:
            "The name or ARN of the change set that you want use to update the specified stack",
          args: {
            name: "string",
            generators: generators.listCfnChangeSets,
          },
        },
        {
          name: "--stack-name",
          description:
            "If you specified the name of a change set, specify the stack name or ID (ARN) that is associated with the change set you want to execute",
          args: {
            name: "string",
            generators: generators.getStackIdForChangeSet,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this ExecuteChangeSet request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to execute a change set to update a stack with the same name. You might retry ExecuteChangeSet requests to ensure that AWS CloudFormation successfully received them",
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
      name: "get-stack-policy",
      description:
        "Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or unique stack ID that is associated with the stack whose policy you want to get",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
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
      name: "get-template",
      description:
        "Returns the template body for a specified stack. You can get the template for running or deleted stacks. For deleted stacks, GetTemplate returns the template for up to 90 days after the stack has been deleted.   If the template does not exist, a ValidationError is returned",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--change-set-name",
          description:
            "The name or Amazon Resource Name (ARN) of a change set for which AWS CloudFormation returns the associated template. If you specify a name, you must also specify the StackName",
          args: {
            name: "string",
            generators: generators.listCfnChangeSets,
          },
        },
        {
          name: "--template-stage",
          description:
            "For templates that include transforms, the stage of the template that AWS CloudFormation returns. To get the user-submitted template, specify Original. To get the template after AWS CloudFormation has processed all transforms, specify Processed.  If the template doesn't include transforms, Original and Processed return the same template. By default, AWS CloudFormation specifies Original",
          args: {
            name: "string",
            suggestions: ["Original", "Processed"],
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
      name: "get-template-summary",
      description:
        "Returns information about a new or existing template. The GetTemplateSummary action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set. You can use the GetTemplateSummary action when you submit a template, or you can get template information for a stack set, or a running or deleted stack. For deleted stacks, GetTemplateSummary returns the template information for up to 90 days after the stack has been deleted. If the template does not exist, a ValidationError is returned",
      options: [
        {
          name: "--template-body",
          description:
            "Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information about templates, see Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify only one of the following parameters: StackName, StackSetName, TemplateBody, or TemplateURL",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document. For more information about templates, see Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify only one of the following parameters: StackName, StackSetName, TemplateBody, or TemplateURL",
          args: {
            name: "string",
          },
        },
        {
          name: "--stack-name",
          description:
            "The name or the stack ID that is associated with the stack, which are not always interchangeable. For running stacks, you can specify either the stack's name or its unique stack ID. For deleted stack, you must specify the unique stack ID. Conditional: You must specify only one of the following parameters: StackName, StackSetName, TemplateBody, or TemplateURL",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--stack-set-name",
          description:
            "The name or unique ID of the stack set from which the stack was created. Conditional: You must specify only one of the following parameters: StackName, StackSetName, TemplateBody, or TemplateURL",
          args: {
            name: "string",
            generators: generators.listCfnStackSets,
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
      name: "list-change-sets",
      description:
        "Returns the ID and status of each active change set for a stack. For example, AWS CloudFormation lists change sets that are in the CREATE_IN_PROGRESS or CREATE_PENDING state",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the Amazon Resource Name (ARN) of the stack for which you want to list change sets",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--next-token",
          description:
            "A string (provided by the ListChangeSets response output) that identifies the next page of change sets that you want to retrieve",
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
      name: "list-exports",
      description:
        "Lists all exported output values in the account and Region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the  Fn::ImportValue  function.  For more information, see  AWS CloudFormation Export Stack Output Values",
      options: [
        {
          name: "--next-token",
          description:
            "A string (provided by the ListExports response output) that identifies the next page of exported output values that you asked to retrieve",
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
      name: "list-imports",
      description:
        "Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see ListExports.  For more information about importing an exported output value, see the  Fn::ImportValue  function",
      options: [
        {
          name: "--export-name",
          description:
            "The name of the exported output value. AWS CloudFormation returns the stack names that are importing this value",
          args: {
            name: "string",
            generators: generators.listExportNames,
          },
        },
        {
          name: "--next-token",
          description:
            "A string (provided by the ListImports response output) that identifies the next page of stacks that are importing the specified exported output value",
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
      name: "list-stack-instances",
      description:
        "Returns summary information about stack instances that are associated with the specified stack set. You can filter for stack instances that are associated with a specific AWS account name or Region, or that have a specific status",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or unique ID of the stack set that you want to list stack instances for",
          args: {
            name: "string",
            generators: generators.listCfnStackSets,
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous request didn't return all of the remaining results, the response's NextToken parameter value is set to a token. To retrieve the next set of results, call ListStackInstances again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description: "The status that stack instances are filtered by",
          args: {
            name: "list",
            isVariadic: true,
            description: "Name=string,Values=string",
          },
        },
        {
          name: "--stack-instance-account",
          description:
            "The name of the AWS account that you want to list stack instances for",
          args: {
            name: "string",
            generators: generators.getAccountId,
          },
        },
        {
          name: "--stack-instance-region",
          description:
            "The name of the Region where you want to list stack instances",
          args: {
            name: "string",
            suggestions: awsRegions,
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "list-stack-resources",
      description:
        "Returns descriptions of all resources of the specified stack. For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--next-token",
          description:
            "A string that identifies the next page of stack resources that you want to retrieve",
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
      name: "list-stack-set-operation-results",
      description:
        "Returns summary information about the results of a stack set operation",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or unique ID of the stack set that you want to get operation results for",
          args: {
            name: "string",
            generators: generators.listCfnStackSets,
          },
        },
        {
          name: "--operation-id",
          description: "The ID of the stack set operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous request didn't return all of the remaining results, the response object's NextToken parameter value is set to a token. To retrieve the next set of results, call ListStackSetOperationResults again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "list-stack-set-operations",
      description:
        "Returns summary information about operations performed on a stack set",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or unique ID of the stack set that you want to get operation summaries for",
          args: {
            name: "string",
            generators: generators.listCfnStackSets,
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous paginated request didn't return all of the remaining results, the response object's NextToken parameter value is set to a token. To retrieve the next set of results, call ListStackSetOperations again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "list-stack-sets",
      description:
        "Returns summary information about stack sets that are associated with the user.   [Self-managed permissions] If you set the CallAs parameter to SELF while signed in to your AWS account, ListStackSets returns all self-managed stack sets in your AWS account.   [Service-managed permissions] If you set the CallAs parameter to SELF while signed in to the organization's management account, ListStackSets returns all stack sets in the management account.   [Service-managed permissions] If you set the CallAs parameter to DELEGATED_ADMIN while signed in to your member account, ListStackSets returns all stack sets with service-managed permissions in the management account",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous paginated request didn't return all of the remaining results, the response object's NextToken parameter value is set to a token. To retrieve the next set of results, call ListStackSets again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--status",
          description:
            "The status of the stack sets that you want to get summary information about",
          args: {
            name: "string",
            suggestions: ["ACTIVE", "DELETED"],
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "list-stacks",
      description:
        "Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted)",
      options: [
        {
          name: "--next-token",
          description:
            "A string that identifies the next page of stacks that you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--stack-status-filter",
          description:
            "Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified status codes. For a complete list of stack status codes, see the StackStatus parameter of the Stack data type",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "CREATE_IN_PROGRESS",
              "CREATE_FAILED",
              "CREATE_COMPLETE",
              "ROLLBACK_IN_PROGRESS",
              "ROLLBACK_FAILED",
              "ROLLBACK_COMPLETE",
              "DELETE_IN_PROGRESS",
              "DELETE_FAILED",
              "DELETE_COMPLETE",
              "UPDATE_IN_PROGRESS",
              "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS",
              "UPDATE_COMPLETE",
              "UPDATE_ROLLBACK_IN_PROGRESS",
              "UPDATE_ROLLBACK_FAILED",
              "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS",
              "UPDATE_ROLLBACK_COMPLETE",
              "REVIEW_IN_PROGRESS",
              "IMPORT_IN_PROGRESS",
              "IMPORT_COMPLETE",
              "IMPORT_ROLLBACK_IN_PROGRESS",
              "IMPORT_ROLLBACK_FAILED",
              "IMPORT_ROLLBACK_COMPLETE",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
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
      name: "list-type-registrations",
      description:
        "Returns a list of registration tokens for the specified extension(s)",
      options: [
        {
          name: "--type",
          description:
            "The kind of extension. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            suggestions: typeSuggestion,
          },
        },
        {
          name: "--type-name",
          description:
            "The name of the extension. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            generators: generators.listTypeArns,
          },
        },
        {
          name: "--type-arn",
          description:
            "The Amazon Resource Name (ARN) of the extension. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            generators: generators.listTypeArns,
          },
        },
        {
          name: "--registration-status-filter",
          description:
            "The current status of the extension registration request. The default is IN_PROGRESS",
          args: {
            name: "string",
            suggestions: ["COMPLETE", "IN_PROGRESS", "FAILED"],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous paginated request didn't return all of the remaining results, the response object's NextToken parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
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
      name: "list-type-versions",
      description:
        "Returns summary information about the versions of an extension",
      options: [
        {
          name: "--type",
          description:
            "The kind of the extension. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            suggestions: typeSuggestion,
          },
        },
        {
          name: "--type-name",
          description:
            "The name of the extension for which you want version summary information. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            generators: generators.listTypeArns,
          },
        },
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the extension for which you want version summary information. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            generators: generators.listTypeArns,
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous paginated request didn't return all of the remaining results, the response object's NextToken parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--deprecated-status",
          description:
            "The deprecation status of the extension versions that you want to get summary information about. Valid values include:    LIVE: The extension version is registered and can be used in CloudFormation operations, dependent on its provisioning behavior and visibility scope.    DEPRECATED: The extension version has been deregistered and can no longer be used in CloudFormation operations.    The default is LIVE",
          args: {
            name: "string",
            suggestions: deprecatedStatus,
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
      name: "list-types",
      description:
        "Returns summary information about extension that have been registered with CloudFormation",
      options: [
        {
          name: "--visibility",
          description:
            "The scope at which the extension is visible and usable in CloudFormation operations. Valid values include:    PRIVATE: The extension is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any extension you create as PRIVATE.    PUBLIC: The extension is publicly visible and usable within any Amazon account.   The default is PRIVATE",
          args: {
            name: "string",
            suggestions: ["PUBLIC", "PRIVATE"],
          },
        },
        {
          name: "--provisioning-type",
          description:
            "The provisioning behavior of the type. AWS CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted. Valid values include:    FULLY_MUTABLE: The extension includes an update handler to process updates to the extension during stack update operations.    IMMUTABLE: The extension does not include an update handler, so the extension cannot be updated and must instead be replaced during stack update operations.    NON_PROVISIONABLE: The extension does not include create, read, and delete handlers, and therefore cannot actually be provisioned",
          args: {
            name: "string",
            suggestions: ["NON_PROVISIONABLE", "IMMUTABLE", "FULLY_MUTABLE"],
          },
        },
        {
          name: "--deprecated-status",
          description:
            "The deprecation status of the extension that you want to get summary information about. Valid values include:    LIVE: The extension is registered for use in CloudFormation operations.    DEPRECATED: The extension has been deregistered and can no longer be used in CloudFormation operations",
          args: {
            name: "string",
            suggestions: deprecatedStatus,
          },
        },
        {
          name: "--type",
          description: "The type of extension",
          args: {
            name: "string",
            suggestions: typeSuggestion,
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous paginated request didn't return all of the remaining results, the response object's NextToken parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
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
      name: "record-handler-progress",
      description:
        "Reports progress of a resource handler to CloudFormation. Reserved for use by the CloudFormation CLI. Do not use this API in your code",
      options: [
        {
          name: "--bearer-token",
          description: "Reserved for use by the CloudFormation CLI",
          args: {
            name: "string",
          },
        },
        {
          name: "--operation-status",
          description: "Reserved for use by the CloudFormation CLI",
          args: {
            name: "string",
            suggestions: operationStatus,
          },
        },
        {
          name: "--current-operation-status",
          description: "Reserved for use by the CloudFormation CLI",
          args: {
            name: "string",
            suggestions: operationStatus,
          },
        },
        {
          name: "--status-message",
          description: "Reserved for use by the CloudFormation CLI",
          args: {
            name: "string",
          },
        },
        {
          name: "--error-code",
          description: "Reserved for use by the CloudFormation CLI",
          args: {
            name: "string",
            suggestions: [
              "NotUpdatable",
              "InvalidRequest",
              "AccessDenied",
              "InvalidCredentials",
              "AlreadyExists",
              "NotFound",
              "ResourceConflict",
              "Throttling",
              "ServiceLimitExceeded",
              "NotStabilized",
              "GeneralServiceException",
              "ServiceInternalError",
              "NetworkFailure",
              "InternalFailure",
            ],
          },
        },
        {
          name: "--resource-model",
          description: "Reserved for use by the CloudFormation CLI",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description: "Reserved for use by the CloudFormation CLI",
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
      name: "register-type",
      description:
        "Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your AWS account, and includes:   Validating the extension schema   Determining which handlers, if any, have been specified for the extension   Making the extension available for use in your account   For more information on how to develop extensions and ready them for registration, see Creating Resource Providers in the CloudFormation CLI User Guide. You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per region. Use DeregisterType to deregister specific extension versions if necessary. Once you have initiated a registration request using  RegisterType , you can use  DescribeTypeRegistration  to monitor the progress of the registration request",
      options: [
        {
          name: "--type",
          description: "The kind of extension",
          args: {
            name: "string",
            suggestions: typeSuggestion,
          },
        },
        {
          name: "--type-name",
          description:
            "The name of the extension being registered. We recommend that extension names adhere to the following pattern: company_or_organization::service::type.  The following organization namespaces are reserved and cannot be used in your extension names:    Alexa     AMZN     Amazon     AWS     Custom     Dev",
          args: {
            name: "string",
            generators: generators.listTypeArns,
          },
        },
        {
          name: "--schema-handler-package",
          description:
            "A url to the S3 bucket containing the extension project package that contains the necessary files for the extension you want to register. For information on generating a schema handler package for the extension you want to register, see submit in the CloudFormation CLI User Guide.  The user registering the extension must be able to access the package in the S3 bucket. That is, the user needs to have GetObject permissions for the schema handler package. For more information, see Actions, Resources, and Condition Keys for Amazon S3 in the AWS Identity and Access Management User Guide",
          args: {
            name: "string",
            generators: generators.listRemoteFilesGenerator,
          },
        },
        {
          name: "--logging-config",
          description:
            "Specifies logging configuration information for an extension",
          args: {
            name: "structure",
            description: "LogRoleArn=string,LogGroupName=string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when invoking the extension. If your extension calls AWS APIs in any of its handlers, you must create an  IAM execution role  that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. When CloudFormation needs to invoke the extension handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the extension handler, thereby supplying your extension with the appropriate credentials",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier that acts as an idempotency key for this registration request. Specifying a client request token prevents CloudFormation from generating more than one version of an extension from the same registration request, even if the request is submitted multiple times",
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
      name: "set-stack-policy",
      description: "Sets a stack policy for a specified stack",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or unique stack ID that you want to associate a policy with",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--stack-policy-body",
          description:
            "Structure containing the stack policy body. For more information, go to  Prevent Updates to Stack Resources in the AWS CloudFormation User Guide. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--stack-policy-url",
          description:
            "Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same Region as the stack. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both",
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
      name: "set-type-default-version",
      description:
        "Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the extension for which you want version summary information. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            generators: generators.listTypeArns,
          },
        },
        {
          name: "--type",
          description:
            "The kind of extension. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            suggestions: typeSuggestion,
          },
        },
        {
          name: "--type-name",
          description:
            "The name of the extension. Conditional: You must specify either TypeName and Type, or Arn",
          args: {
            name: "string",
            generators: generators.listTypeArns,
          },
        },
        {
          name: "--version-id",
          description:
            "The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered",
          args: {
            name: "string",
            generators: [
              generators.listTypeVersionsByTypeName,
              generators.listTypeVersionsByArn,
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
      name: "signal-resource",
      description:
        "Sends a signal to the specified resource with a success or failure status. You can use the SignalResource API in conjunction with a creation policy or update policy. AWS CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The SignalResource API is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance",
      options: [
        {
          name: "--stack-name",
          description:
            "The stack name or unique stack ID that includes the resource that you want to signal",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--logical-resource-id",
          description:
            "The logical ID of the resource that you want to signal. The logical ID is the name of the resource that given in the template",
          args: {
            name: "string",
            generators: generators.listLogicalResourceIds,
          },
        },
        {
          name: "--unique-id",
          description:
            "A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling groups, specify the instance ID that you are signaling as the unique ID. If you send multiple signals to a single resource (such as signaling a wait condition), each signal requires a different unique ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status of the signal, which is either success or failure. A failure signal causes AWS CloudFormation to immediately fail the stack creation or update",
          args: {
            name: "string",
            suggestions: ["SUCCESS", "FAILURE"],
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
      name: "stop-stack-set-operation",
      description:
        "Stops an in-progress operation on a stack set and its associated stack instances",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or unique ID of the stack set that you want to stop the operation for",
          args: {
            name: "string",
            generators: generators.listCfnChangeSets,
          },
        },
        {
          name: "--operation-id",
          description: "The ID of the stack operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "update-stack",
      description:
        "Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack via the DescribeStacks action. To get a copy of the template for an existing stack, you can use the GetTemplate action. For more information about creating an update template, updating a stack, and monitoring the progress of the update, see Updating a Stack",
      options: [
        {
          name: "--stack-name",
          description: "The name or unique stack ID of the stack to update",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--template-body",
          description:
            "Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to Template Anatomy in the AWS CloudFormation User Guide.) Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "Location of file containing the template body. The URL must point to a template that is located in an Amazon S3 bucket or a Systems Manager document. For more information, go to Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-previous-template",
          description:
            "Reuse the existing template that is associated with the stack that you are updating. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true",
        },
        {
          name: "--no-use-previous-template",
          description:
            "Reuse the existing template that is associated with the stack that you are updating. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true",
        },
        {
          name: "--stack-policy-during-update-body",
          description:
            "Structure containing the temporary overriding stack policy body. You can specify either the StackPolicyDuringUpdateBody or the StackPolicyDuringUpdateURL parameter, but not both. If you want to update protected resources, specify a temporary overriding stack policy during this update. If you do not specify a stack policy, the current policy that is associated with the stack will be used",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--stack-policy-during-update-url",
          description:
            "Location of a file containing the temporary overriding stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. You can specify either the StackPolicyDuringUpdateBody or the StackPolicyDuringUpdateURL parameter, but not both. If you want to update protected resources, specify a temporary overriding stack policy during this update. If you do not specify a stack policy, the current policy that is associated with the stack will be used",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "A list of Parameter structures that specify input parameters for the stack. For more information, see the Parameter data type",
          args: {
            name: "list",
            isVariadic: true,
            description:
              "ParameterKey=string,ParameterValue=string,UsePreviousValue=boolean,ResolvedValue=string",
          },
        },
        {
          name: "--capabilities",
          description:
            "In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for AWS CloudFormation to update the stack.    CAPABILITY_IAM and CAPABILITY_NAMED_IAM  Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability.   If you have IAM resources, you can specify either capability.    If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM.    If you don't specify either of these capabilities, AWS CloudFormation returns an InsufficientCapabilities error.   If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.     AWS::IAM::AccessKey      AWS::IAM::Group      AWS::IAM::InstanceProfile      AWS::IAM::Policy      AWS::IAM::Role      AWS::IAM::User      AWS::IAM::UserToGroupAddition    For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.    CAPABILITY_AUTO_EXPAND  Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually updating the stack. If your stack template contains one or more macros, and you choose to update a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by AWS CloudFormation. If you want to update a stack from a stack template that contains macros and nested stacks, you must update the stack directly from the template using this capability.  You should only update stacks directly from a stack template that contains macros if you know what processing the macro performs. Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without AWS CloudFormation being notified.  For more information, see Using AWS CloudFormation Macros to Perform Custom Processing on Templates",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "CAPABILITY_IAM",
              "CAPABILITY_NAMED_IAM",
              "CAPABILITY_AUTO_EXPAND",
            ],
          },
        },
        {
          name: "--resource-types",
          description:
            "The template resource types that you have permissions to work with for this update stack action, such as AWS::EC2::Instance, AWS::EC2::*, or Custom::MyCustomInstance. If the list of resource types doesn't include a resource that you're updating, the stack update fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for AWS CloudFormation-specific condition keys in IAM policies. For more information, see Controlling Access with AWS Identity and Access Management",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to update the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--rollback-configuration",
          description:
            "The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards",
          args: {
            name: "structure",
            description:
              "RollbackTriggers=[{Arn=string,Type=string},{Arn=string,Type=string}],MonitoringTimeInMinutes=integer",
          },
        },
        {
          name: "--stack-policy-body",
          description:
            "Structure containing a new stack policy body. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both. You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you do not specify a stack policy, the current policy that is associated with the stack is unchanged",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--stack-policy-url",
          description:
            "Location of a file containing the updated stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both. You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you do not specify a stack policy, the current policy that is associated with the stack is unchanged",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-arns",
          description:
            "Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that AWS CloudFormation associates with the stack. Specify an empty list to remove all notification topics",
          args: {
            name: "list",
            generators: generators.listSNSTopics,
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to supported resources in the stack. You can specify a maximum number of 50 tags. If you don't specify this parameter, AWS CloudFormation doesn't modify the stack's tags. If you specify an empty value, AWS CloudFormation removes all associated tags",
          args: {
            name: "list",
            isVariadic: true,
            description: "Key=string,Value=string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this UpdateStack request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to update a stack with the same name. You might retry UpdateStack requests to ensure that AWS CloudFormation successfully received them. All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a CreateStack operation with the token token1, then all the StackEvents generated by that operation will have ClientRequestToken set as token1. In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format Console-StackOperation-ID, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002",
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
      name: "update-stack-instances",
      description:
        "Updates the parameter values for stack instances for the specified accounts, within the specified Regions. A stack instance refers to a stack in a specific account and Region.  You can only update stack instances in Regions and accounts where they already exist; to create additional stack instances, use CreateStackInstances.  During stack set updates, any parameters overridden for a stack instance are not updated, but retain their overridden value. You can only update the parameter values that are specified in the stack set; to add or delete a parameter itself, use UpdateStackSet to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use UpdateStackSet to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using UpdateStackInstances",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or unique ID of the stack set associated with the stack instances",
          args: {
            name: "string",
            generators: generators.listCfnStackSets,
          },
        },
        {
          name: "--accounts",
          description:
            "[Self-managed permissions] The names of one or more AWS accounts for which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Regions. You can specify Accounts or DeploymentTargets, but not both",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.getAccountId,
          },
        },
        {
          name: "--deployment-targets",
          description:
            "[Service-managed permissions] The AWS Organizations accounts for which you want to update parameter values for stack instances. If your update targets OUs, the overridden parameter values only apply to the accounts that are currently in the target OUs and their child OUs. Accounts added to the target OUs and their child OUs in the future won't use the overridden values. You can specify Accounts or DeploymentTargets, but not both",
          args: {
            name: "structure",
            description:
              "Accounts=string,string,AccountsUrl=string,OrganizationalUnitIds=string,string",
          },
        },
        {
          name: "--regions",
          description:
            "The names of one or more Regions in which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Regions",
          args: {
            name: "list",
            suggestions: awsRegions,
          },
        },
        {
          name: "--parameter-overrides",
          description:
            "A list of input parameters whose values you want to update for the specified stack instances.  Any overridden parameter values will be applied to all stack instances in the specified accounts and Regions. When specifying parameters and their values, be aware of how AWS CloudFormation sets parameter values during stack instance update operations:   To override the current value for a parameter, include the parameter and specify its value.   To leave a parameter set to its present value, you can do one of the following:   Do not include the parameter in the list.   Include the parameter and specify UsePreviousValue as true. (You cannot specify both a value and set UsePreviousValue to true.)     To set all overridden parameter back to the values specified in the stack set, specify a parameter list but do not include any parameters.   To leave all parameters set to their present values, do not specify this property at all.   During stack set updates, any parameter values overridden for a stack instance are not updated, but retain their overridden value. You can only override the parameter values that are specified in the stack set; to add or delete a parameter itself, use UpdateStackSet to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use UpdateStackSet to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using UpdateStackInstances",
          args: {
            name: "list",
            isVariadic: true,
            description:
              "ParameterKey=string,ParameterValue=string,UsePreviousValue=boolean,ResolvedValue=string",
          },
        },
        {
          name: "--operation-preferences",
          description:
            "Preferences for how AWS CloudFormation performs this stack set operation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--operation-id",
          description:
            "The unique identifier for this stack set operation.  The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that AWS CloudFormation successfully received them. If you don't specify an operation ID, the SDK generates one automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "update-stack-set",
      description:
        "Updates the stack set, and associated stack instances in the specified accounts and Regions. Even if the stack set operation created by updating the stack set fails (completely or partially, below or above a specified failure tolerance), the stack set is updated with your changes. Subsequent CreateStackInstances calls on the specified stack set use the updated stack set",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or unique ID of the stack set that you want to update",
          args: {
            name: "string",
            generators: generators.listCfnStackSets,
          },
        },
        {
          name: "--description",
          description: "A brief description of updates that you are making",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-body",
          description:
            "The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, see Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify only one of the following parameters: TemplateBody or TemplateURL\u2014or set UsePreviousTemplate to true",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document. For more information, see Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify only one of the following parameters: TemplateBody or TemplateURL\u2014or set UsePreviousTemplate to true",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-previous-template",
          description:
            "Use the existing template that's associated with the stack set that you're updating. Conditional: You must specify only one of the following parameters: TemplateBody or TemplateURL\u2014or set UsePreviousTemplate to true",
        },
        {
          name: "--no-use-previous-template",
          description:
            "Use the existing template that's associated with the stack set that you're updating. Conditional: You must specify only one of the following parameters: TemplateBody or TemplateURL\u2014or set UsePreviousTemplate to true",
        },
        {
          name: "--parameters",
          description: "A list of input parameters for the stack set template",
          args: {
            name: "list",
            isVariadic: true,
            description:
              "ParameterKey=string,ParameterValue=string,UsePreviousValue=boolean,ResolvedValue=string",
          },
        },
        {
          name: "--capabilities",
          description:
            "In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for AWS CloudFormation to update the stack set and its associated stack instances.    CAPABILITY_IAM and CAPABILITY_NAMED_IAM  Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks sets, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability.   If you have IAM resources, you can specify either capability.    If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM.    If you don't specify either of these capabilities, AWS CloudFormation returns an InsufficientCapabilities error.   If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.     AWS::IAM::AccessKey      AWS::IAM::Group      AWS::IAM::InstanceProfile      AWS::IAM::Policy      AWS::IAM::Role      AWS::IAM::User      AWS::IAM::UserToGroupAddition    For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.    CAPABILITY_AUTO_EXPAND  Some templates reference macros. If your stack set template references one or more macros, you must update the stack set directly from the processed template, without first reviewing the resulting changes in a change set. To update the stack set directly, you must acknowledge this capability. For more information, see Using AWS CloudFormation Macros to Perform Custom Processing on Templates.  Stack sets with service-managed permissions do not currently support the use of macros in templates. (This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by AWS CloudFormation.) Even if you specify this capability for a stack set with service-managed permissions, if you reference a macro in your template the stack set operation will fail",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "CAPABILITY_IAM",
              "CAPABILITY_NAMED_IAM",
              "CAPABILITY_AUTO_EXPAND",
            ],
          },
        },
        {
          name: "--tags",
          description:
            "The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. You can specify a maximum number of 50 tags. If you specify tags for this parameter, those tags replace any list of tags that are currently associated with this stack set. This means:   If you don't specify this parameter, AWS CloudFormation doesn't modify the stack's tags.    If you specify any tags using this parameter, you must specify all the tags that you want associated with this stack set, even tags you've specified before (for example, when creating the stack set or during a previous update of the stack set.). Any tags that you don't include in the updated list of tags are removed from the stack set, and therefore from the stacks and resources as well.    If you specify an empty value, AWS CloudFormation removes all currently associated tags.   If you specify new tags as part of an UpdateStackSet action, AWS CloudFormation checks to see if you have the required IAM permission to tag resources. If you omit tags that are currently associated with the stack set from the list of tags you specify, AWS CloudFormation assumes that you want to remove those tags from the stack set, and checks to see if you have permission to untag resources. If you don't have the necessary permission(s), the entire UpdateStackSet action fails with an access denied error, and the stack set is not updated",
          args: {
            name: "list",
            isVariadic: true,
            description: "Key=string,Value=string",
          },
        },
        {
          name: "--operation-preferences",
          description:
            "Preferences for how AWS CloudFormation performs this stack set operation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--administration-role-arn",
          description:
            "The Amazon Resource Number (ARN) of the IAM role to use to update this stack set. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see Granting Permissions for Stack Set Operations in the AWS CloudFormation User Guide. If you specified a customized administrator role when you created the stack set, you must specify a customized administrator role, even if it is the same customized administrator role used with this stack set previously",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--execution-role-name",
          description:
            "The name of the IAM execution role to use to update the stack set. If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation. Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets.   If you specify a customized execution role, AWS CloudFormation uses that role to update the stack. If you do not specify a customized execution role, AWS CloudFormation performs the update using the role previously associated with the stack set, so long as you have permissions to perform operations on the stack set",
          args: {
            name: "string",
            generators: generators.listRoles,
          },
        },
        {
          name: "--deployment-targets",
          description:
            "[Service-managed permissions] The AWS Organizations accounts in which to update associated stack instances. To update all the stack instances associated with this stack set, do not specify DeploymentTargets or Regions. If the stack set update includes changes to the template (that is, if TemplateBody or TemplateURL is specified), or the Parameters, AWS CloudFormation marks all stack instances with a status of OUTDATED prior to updating the stack instances in the specified accounts and Regions. If the stack set update does not include changes to the template or parameters, AWS CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status",
          args: {
            name: "structure",
            description:
              "Accounts=string,string,AccountsUrl=string,OrganizationalUnitIds=string,string",
          },
        },
        {
          name: "--permission-model",
          description:
            "Describes how the IAM roles required for stack set operations are created. You cannot modify PermissionModel if there are stack instances associated with your stack set.   With self-managed permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see Grant Self-Managed Stack Set Permissions.   With service-managed permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by AWS Organizations. For more information, see Grant Service-Managed Stack Set Permissions",
          args: {
            name: "string",
            suggestions: permissionModel,
          },
        },
        {
          name: "--auto-deployment",
          description:
            "[Service-managed permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU). If you specify AutoDeployment, do not specify DeploymentTargets or Regions",
          args: {
            name: "structure",
            description: "Enabled=boolean,RetainStacksOnAccountRemoval=boolean",
          },
        },
        {
          name: "--operation-id",
          description:
            "The unique ID for this stack set operation.  The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that AWS CloudFormation successfully received them. If you don't specify an operation ID, AWS CloudFormation generates one automatically. Repeating this stack set operation with a new operation ID retries all stack instances whose status is OUTDATED",
          args: {
            name: "string",
          },
        },
        {
          name: "--accounts",
          description:
            "[Self-managed permissions] The accounts in which to update associated stack instances. If you specify accounts, you must also specify the Regions in which to update stack set instances. To update all the stack instances associated with this stack set, do not specify the Accounts or Regions properties. If the stack set update includes changes to the template (that is, if the TemplateBody or TemplateURL properties are specified), or the Parameters property, AWS CloudFormation marks all stack instances with a status of OUTDATED prior to updating the stack instances in the specified accounts and Regions. If the stack set update does not include changes to the template or parameters, AWS CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.getAccountId,
          },
        },
        {
          name: "--regions",
          description:
            "The Regions in which to update associated stack instances. If you specify Regions, you must also specify accounts in which to update stack set instances. To update all the stack instances associated with this stack set, do not specify the Accounts or Regions properties. If the stack set update includes changes to the template (that is, if the TemplateBody or TemplateURL properties are specified), or the Parameters property, AWS CloudFormation marks all stack instances with a status of OUTDATED prior to updating the stack instances in the specified accounts and Regions. If the stack set update does not include changes to the template or parameters, AWS CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status",
          args: {
            name: "list",
            suggestions: awsRegions,
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your AWS account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the AWS CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
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
      name: "update-termination-protection",
      description:
        "Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see Protecting a Stack From Being Deleted in the AWS CloudFormation User Guide.  For nested stacks, termination protection is set on the root stack and cannot be changed directly on the nested stack",
      options: [
        {
          name: "--enable-termination-protection",
          description:
            "Whether to enable termination protection on the specified stack",
        },
        {
          name: "--no-enable-termination-protection",
          description:
            "Whether to enable termination protection on the specified stack",
        },
        {
          name: "--stack-name",
          description:
            "The name or unique ID of the stack for which you want to set termination protection",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
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
      name: "validate-template",
      description:
        "Validates a specified template. AWS CloudFormation first checks if the template is valid JSON. If it isn't, AWS CloudFormation checks if the template is valid YAML. If both these checks fail, AWS CloudFormation returns a template validation error",
      options: [
        {
          name: "--template-body",
          description:
            "Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must pass TemplateURL or TemplateBody. If both are passed, only TemplateBody is used",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document. For more information, go to Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must pass TemplateURL or TemplateBody. If both are passed, only TemplateBody is used",
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
      name: "package",
      description:
        "Packages the local artifacts (local paths) that your AWS CloudFormation template\nreferences. The command uploads local artifacts, such as source code for an AWS\nLambda function or a Swagger file for an AWS API Gateway REST API, to an S3\nbucket. The command returns a copy of your template, replacing references to\nlocal artifacts with the S3 location where the command uploaded the artifacts.\n\nUse this command to quickly upload local artifacts that might be required by\nyour template. After you package your template's artifacts, run the deploy\ncommand to ``deploy`` the returned template.\n\nThis command can upload local artifacts referenced in the following places:\n\n\n    - ``BodyS3Location`` property for the ``AWS::ApiGateway::RestApi`` resource\n    - ``Code`` property for the ``AWS::Lambda::Function`` resource\n    - ``CodeUri`` property for the ``AWS::Serverless::Function`` resource\n    - ``DefinitionS3Location`` property for the ``AWS::AppSync::GraphQLSchema`` resource\n    - ``RequestMappingTemplateS3Location`` property for the ``AWS::AppSync::Resolver`` resource\n    - ``ResponseMappingTemplateS3Location`` property for the ``AWS::AppSync::Resolver`` resource\n    - ``DefinitionUri`` property for the ``AWS::Serverless::Api`` resource\n    - ``Location`` parameter for the ``AWS::Include`` transform\n    - ``SourceBundle`` property for the ``AWS::ElasticBeanstalk::ApplicationVersion`` resource\n    - ``TemplateURL`` property for the ``AWS::CloudFormation::Stack`` resource\n    - ``Command.ScriptLocation`` property for the ``AWS::Glue::Job`` resource\n    - ``DefinitionS3Location`` property for the ``AWS::StepFunctions::StateMachine`` resource\n\n\nTo specify a local artifact in your template, specify a path to a local file or folder,\nas either an absolute or relative path. The relative path is a location\nthat is relative to your template's location.\n\nFor example, if your AWS Lambda function source code is in the\n``/home/user/code/lambdafunction/`` folder, specify\n``CodeUri: /home/user/code/lambdafunction`` for the\n``AWS::Serverless::Function`` resource. The command returns a template and replaces\nthe local path with the S3 location: ``CodeUri: s3://mybucket/lambdafunction.zip``.\n\nIf you specify a file, the command directly uploads it to the S3 bucket. If you\nspecify a folder, the command zips the folder and then uploads the .zip file.\nFor most resources, if you don't specify a path, the command zips and uploads the\ncurrent working directory. The exception is ``AWS::ApiGateway::RestApi``;\nif you don't specify a ``BodyS3Location``, this command will not upload an artifact to S3.\n\nBefore the command uploads artifacts, it checks if the artifacts are already\npresent in the S3 bucket to prevent unnecessary uploads. The command uses MD5\nchecksums to compare files. If the values match, the command doesn't upload the\nartifacts. Use the ``--force flag`` to skip this check and always upload the\nartifacts.\n\n",
      options: [
        {
          name: "--template-file",
          description:
            "The path where your AWS CloudFormation template is located",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--s3-bucket",
          description:
            "The name of the S3 bucket where this command uploads the artifacts that are referenced in your template",
          args: {
            name: "string",
            generators: generators.listBuckets,
          },
        },
        {
          name: "--s3-prefix",
          description:
            "A prefix name that the command adds to the artifacts' name when it uploads them to the S3 bucket. The prefix name is a path name (folder name) for the S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ID of an AWS KMS key that the command uses to encrypt artifacts that are at rest in the S3 bucket",
          args: {
            name: "string",
            generators: generators.listKmsKeys,
          },
        },
        {
          name: "--output-template-file",
          description:
            "The path to the file where the command writes the output AWS CloudFormation template. If you don't specify a path, the command writes the template to the standard output",
          args: {
            name: "string",
            template: "folders",
          },
        },
        {
          name: "--use-json",
          description:
            "Indicates whether to use JSON as the format for the output AWS CloudFormation template. YAML is used by default",
        },
        {
          name: "--force-upload",
          description:
            "Indicates whether to override existing files in the S3 bucket. Specify this flag to upload artifacts even if they  match existing artifacts in the S3 bucket",
        },
        {
          name: "--metadata",
          description:
            "A map of metadata to attach to *ALL* the artifacts that are referenced in your template",
          args: {
            name: "map",
            description: "KeyName1=string,KeyName2=string",
          },
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Deploys the specified AWS CloudFormation template by creating and then executing\na change set. The command terminates after AWS CloudFormation executes the\nchange set. If you want to view the change set before AWS CloudFormation\nexecutes it, use the ``--no-execute-changeset`` flag.\n\nTo update a stack, specify the name of an existing stack. To create a new stack,\nspecify a new stack name.\n\n",
      options: [
        {
          name: "--template-file",
          description:
            "The path where your AWS CloudFormation template is located",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--stack-name",
          description:
            "The name of the AWS CloudFormation stack you're deploying to. If you specify an existing stack, the command updates the stack. If you specify a new stack, the command creates it",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--s3-bucket",
          description:
            "The name of the S3 bucket where this command uploads your CloudFormation template. This is required the deployments of templates sized greater than 51,200 bytes",
          args: {
            name: "string",
            generators: generators.listBuckets,
          },
        },
        {
          name: "--force-upload",
          description:
            "Indicates whether to override existing files in the S3 bucket. Specify this flag to upload artifacts even if they  match existing artifacts in the S3 bucket",
        },
        {
          name: "--s3-prefix",
          description:
            "A prefix name that the command adds to the artifacts' name when it uploads them to the S3 bucket. The prefix name is a path name (folder name) for the S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ID of an AWS KMS key that the command uses to encrypt artifacts that are at rest in the S3 bucket",
          args: {
            name: "string",
            generators: generators.listKmsKeys,
          },
        },
        {
          name: "--parameter-overrides",
          description:
            "A list of parameter structures that specify input parameters for your stack template. If you're updating a stack and you don't specify a parameter, the command uses the stack's existing value. For new stacks, you must specify parameters that don't have a default value. Syntax: ParameterKey1=ParameterValue1 ParameterKey2=ParameterValue2",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--capabilities",
          description:
            "A list of capabilities that you must specify before AWS Cloudformation can create certain stacks. Some stack templates might include resources that can affect permissions in your AWS account, for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge their capabilities by specifying this parameter.  The only valid values are CAPABILITY_IAM and CAPABILITY_NAMED_IAM. If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify this parameter, this action returns an InsufficientCapabilities error",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: ["CAPABILITY_IAM", "CAPABILITY_NAMED_IAM"],
          },
        },
        {
          name: "--no-execute-changeset",
          description:
            "Indicates whether to execute the change set. Specify this flag if you want to view your stack changes before executing the change set. The command creates an AWS CloudFormation change set and then exits without executing the change set. After you view the change set, execute it to implement your changes",
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes when executing the change set",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--notification-arns",
          description:
            "Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that AWS CloudFormation associates with the stack",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listSNSTopics,
          },
        },
        {
          name: "--fail-on-empty-changeset",
          description:
            "Specify if the CLI should return a non-zero exit code if there are no changes to be made to the stack. The default behavior is to return a non-zero exit code",
        },
        {
          name: "--no-fail-on-empty-changeset",
          description:
            "Causes the CLI to return an exit code of 0 if there are no changes to be made to the stack",
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with the stack that is created or updated. AWS CloudFormation also propagates these tags to resources in the stack if the resource supports it. Syntax: TagKey1=TagValue1 TagKey2=TagValue2",
          args: {
            name: "list",
            isVariadic: true,
            description: "Tag1=Value1 Tag2=Value2",
          },
        },
      ],
      subcommands: [
        {
          name: "push",
          description:
            "Bundles and uploads to Amazon Simple Storage Service (Amazon S3) an application revision, which is a zip archive file that contains deployable content and an accompanying Application Specification file (AppSpec file). If the upload is successful, a message is returned that describes how to call the create-deployment command to deploy the application revision from Amazon S3 to target Amazon Elastic Compute Cloud (Amazon EC2) instances",
          options: [
            {
              name: "--application-name",
              description:
                "Required. The name of the AWS CodeDeploy application to be associated with the application revision",
              args: {
                name: "string",
              },
            },
            {
              name: "--s3-location",
              description:
                "Required. Information about the location of the application revision to be uploaded to Amazon S3. You must specify both a bucket and a key that represent the Amazon S3 bucket name and the object key name. Content will be zipped before uploading. Use the format s3://\\/\\",
              args: {
                name: "string",
              },
            },
            {
              name: "--ignore-hidden-files",
              description:
                "Optional. Set the --ignore-hidden-files flag to not bundle and upload hidden files to Amazon S3; otherwise, set the --no-ignore-hidden-files flag (the default) to bundle and upload hidden files to Amazon S3",
            },
            {
              name: "--no-ignore-hidden-files",
            },
            {
              name: "--source",
              description:
                "Optional. The location of the deployable content and the accompanying AppSpec file on the development machine to be zipped and uploaded to Amazon S3. If not specified, the current directory is used",
              args: {
                name: "string",
              },
            },
            {
              name: "--description",
              description:
                "Optional. A comment that summarizes the application revision. If not specified, the default string \"Uploaded by AWS CLI 'time' UTC\" is used, where 'time' is the current system time in Coordinated Universal Time (UTC)",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "register",
          description:
            "Creates an IAM user for the on-premises instance, if not provided, and saves the user's credentials to an on-premises instance configuration file; registers the on-premises instance with AWS CodeDeploy; and optionally adds tags to the on-premises instance",
          options: [
            {
              name: "--instance-name",
              description: "Required. The name of the on-premises instance",
              args: {
                name: "string",
              },
            },
            {
              name: "--tags",
              description:
                "Optional. The list of key/value pairs to tag the on-premises instance",
              args: {
                name: "list",
                isVariadic: true,
              },
            },
            {
              name: "--iam-user-arn",
              description:
                "Optional. The IAM user associated with the on-premises instance",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "deregister",
          description:
            "Removes any tags from the on-premises instance; deregisters the on-premises instance from AWS CodeDeploy; and, unless requested otherwise, deletes the IAM user for the on-premises instance",
          options: [
            {
              name: "--instance-name",
              description: "Required. The name of the on-premises instance",
              args: {
                name: "string",
              },
            },
            {
              name: "--no-delete-iam-user",
              description:
                "Optional. Do not delete the IAM user for the registered on-premises instance",
            },
          ],
        },
        {
          name: "install",
          description:
            "Configures and installs the AWS CodeDeploy Agent on the on-premises instance",
          options: [
            {
              name: "--config-file",
              description:
                "Required. The path to the on-premises instance configuration file",
              args: {
                name: "string",
              },
            },
            {
              name: "--override-config",
              description:
                "Optional. Overrides the on-premises instance configuration file",
            },
            {
              name: "--agent-installer",
              description: "Optional. The AWS CodeDeploy Agent installer file",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "uninstall",
          description:
            "Uninstalls the AWS CodeDeploy Agent from the on-premises instance",
        },
      ],
    },
    {
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "change-set-create-complete",
          description:
            "Wait until change set status is CREATE_COMPLETE. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--change-set-name",
              description:
                "The name or Amazon Resource Name (ARN) of the change set that you want to describe",
              args: {
                name: "string",
                generators: generators.listCfnChangeSets,
              },
            },
            {
              name: "--stack-name",
              description:
                "If you specified the name of a change set, specify the stack name or ID (ARN) of the change set you want to describe",
              args: {
                name: "string",
                generators: generators.getStackIdForChangeSet,
              },
            },
            {
              name: "--next-token",
              description:
                "A string (provided by the DescribeChangeSet response output) that identifies the next page of information that you want to retrieve",
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
          name: "stack-create-complete",
          description:
            "Wait until stack status is CREATE_COMPLETE. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--stack-name",
              description:
                "The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
              args: {
                name: "string",
                generators: generators.listCfnStackIds,
              },
            },
            {
              name: "--next-token",
              description:
                "A string that identifies the next page of stacks that you want to retrieve",
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
          name: "stack-delete-complete",
          description:
            "Wait until stack status is DELETE_COMPLETE. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--stack-name",
              description:
                "The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
              args: {
                name: "string",
                generators: generators.listCfnStackIds,
              },
            },
            {
              name: "--next-token",
              description:
                "A string that identifies the next page of stacks that you want to retrieve",
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
          name: "stack-exists",
          description:
            "Wait until 200 response is received when polling with ``describe-stacks``. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--stack-name",
              description:
                "The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
              args: {
                name: "string",
                generators: generators.listCfnStackIds,
              },
            },
            {
              name: "--next-token",
              description:
                "A string that identifies the next page of stacks that you want to retrieve",
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
          name: "stack-import-complete",
          description:
            "Wait until stack status is IMPORT_COMPLETE. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--stack-name",
              description:
                "The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
              args: {
                name: "string",
                generators: generators.listCfnStackIds,
              },
            },
            {
              name: "--next-token",
              description:
                "A string that identifies the next page of stacks that you want to retrieve",
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
          name: "stack-rollback-complete",
          description:
            "Wait until stack status is UPDATE_ROLLBACK_COMPLETE. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--stack-name",
              description:
                "The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
              args: {
                name: "string",
                generators: generators.listCfnStackIds,
              },
            },
            {
              name: "--next-token",
              description:
                "A string that identifies the next page of stacks that you want to retrieve",
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
          name: "stack-update-complete",
          description:
            "Wait until stack status is UPDATE_COMPLETE. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--stack-name",
              description:
                "The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
              args: {
                name: "string",
                generators: generators.listCfnStackIds,
              },
            },
            {
              name: "--next-token",
              description:
                "A string that identifies the next page of stacks that you want to retrieve",
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
          name: "type-registration-complete",
          description:
            "Wait until type registration is COMPLETE. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--registration-token",
              description:
                "The identifier for this registration request. This registration token is generated by CloudFormation when you initiate a registration request using  RegisterType",
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
      ],
    },
  ],
};

export default completionSpec;
