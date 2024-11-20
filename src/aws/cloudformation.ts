import awsRegions from "./regions";
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
    "CloudFormation CloudFormation allows you to create and manage Amazon Web Services infrastructure deployments predictably and repeatedly. You can use CloudFormation to leverage Amazon Web Services products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification Service, Elastic Load Balancing, and Amazon EC2 Auto Scaling to build highly reliable, highly scalable, cost-effective applications without creating or configuring the underlying Amazon Web Services infrastructure. With CloudFormation, you declare all your resources and dependencies in a template file. The template defines a collection of resources as a single unit called a stack. CloudFormation creates and deletes all member resources of the stack together and manages all dependencies between the resources for you. For more information about CloudFormation, see the CloudFormation product page. CloudFormation makes use of other Amazon Web Services products. If you need additional technical information about a specific Amazon Web Services product, you can find the product's technical documentation at docs.aws.amazon.com",
  subcommands: [
    {
      name: "activate-organizations-access",
      description:
        "Activate trusted access with Organizations. With trusted access between StackSets and Organizations activated, the management account has permissions to create and manage StackSets for your organization",
      options: [
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
      name: "activate-type",
      description:
        "Activates a public third-party extension, making it available for use in stack templates. Once you have activated a public third-party extension in your account and Region, use SetTypeConfiguration to specify configuration properties for the extension. For more information, see Using public extensions in the CloudFormation User Guide",
      options: [
        {
          name: "--type",
          description:
            "The extension type. Conditional: You must specify PublicTypeArn, or TypeName, Type, and PublisherId",
          args: {
            name: "string",
          },
        },
        {
          name: "--public-type-arn",
          description:
            "The Amazon Resource Name (ARN) of the public extension. Conditional: You must specify PublicTypeArn, or TypeName, Type, and PublisherId",
          args: {
            name: "string",
          },
        },
        {
          name: "--publisher-id",
          description:
            "The ID of the extension publisher. Conditional: You must specify PublicTypeArn, or TypeName, Type, and PublisherId",
          args: {
            name: "string",
          },
        },
        {
          name: "--type-name",
          description:
            "The name of the extension. Conditional: You must specify PublicTypeArn, or TypeName, Type, and PublisherId",
          args: {
            name: "string",
          },
        },
        {
          name: "--type-name-alias",
          description:
            "An alias to assign to the public extension, in this account and Region. If you specify an alias for the extension, CloudFormation treats the alias as the extension type name within this account and Region. You must use the alias to refer to the extension in your templates, API calls, and CloudFormation console. An extension alias must be unique within a given account and Region. You can activate the same public resource multiple times in the same account and Region, using different type name aliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-update",
          description:
            "Whether to automatically update the extension in this account and Region when a new minor version is published by the extension publisher. Major versions released by the publisher must be manually updated. The default is true",
        },
        {
          name: "--no-auto-update",
          description:
            "Whether to automatically update the extension in this account and Region when a new minor version is published by the extension publisher. Major versions released by the publisher must be manually updated. The default is true",
        },
        {
          name: "--logging-config",
          description:
            "Contains logging configuration information for an extension",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The name of the IAM execution role to use to activate the extension",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-bump",
          description:
            "Manually updates a previously-activated type to a new major or minor version, if available. You can also use this parameter to update the value of AutoUpdate.    MAJOR: CloudFormation updates the extension to the newest major version, if one is available.    MINOR: CloudFormation updates the extension to the newest minor version, if one is available",
          args: {
            name: "string",
          },
        },
        {
          name: "--major-version",
          description:
            "The major version of this extension you want to activate, if multiple major versions are available. The default is the latest major version. CloudFormation uses the latest available minor version of the major version selected. You can specify MajorVersion or VersionBump, but not both",
          args: {
            name: "long",
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
      name: "batch-describe-type-configurations",
      description:
        "Returns configuration data for the specified CloudFormation extensions, from the CloudFormation registry for the account and Region. For more information, see Edit configuration data for extensions in your account in the CloudFormation User Guide",
      options: [
        {
          name: "--type-configuration-identifiers",
          description:
            "The list of identifiers for the desired extension configurations",
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
      name: "cancel-update-stack",
      description:
        "Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.  You can cancel only stacks that are in the UPDATE_IN_PROGRESS state",
      options: [
        {
          name: "--stack-name",
          description:
            'If you don\'t pass a parameter to StackName, the API returns a response that describes all resources in the account. The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request:  { "Version": "2012-10-17", "Statement": [{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*/*" }] }   The name or the unique stack ID that\'s associated with the stack',
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this CancelUpdateStack request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to cancel an update on a stack with the same name. You might retry CancelUpdateStack requests to ensure that CloudFormation successfully received them",
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
        "For a specified stack that's in the UPDATE_ROLLBACK_FAILED state, continues rolling it back to the UPDATE_ROLLBACK_COMPLETE state. Depending on the cause of the failure, you can manually fix the error and continue the rollback. By continuing the rollback, you can return your stack to a working state (the UPDATE_ROLLBACK_COMPLETE state), and then try to update the stack again. A stack goes into the UPDATE_ROLLBACK_FAILED state when CloudFormation can't roll back all changes after a failed stack update. For example, you might have a stack that's rolling back to an old database instance that was deleted outside of CloudFormation. Because CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail",
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
            "The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to roll back the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least permission. If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--resources-to-skip",
          description:
            "A list of the logical IDs of the resources that CloudFormation skips during the continue update rollback operation. You can specify only resources that are in the UPDATE_FAILED state because a rollback failed. You can't specify resources that are in the UPDATE_FAILED state for other reasons, for example, because an update was canceled. To check why a resource update failed, use the DescribeStackResources action, and view the resource status reason.  Specify this property to skip rolling back resources that CloudFormation can't successfully roll back. We recommend that you  troubleshoot resources before skipping them. CloudFormation sets the status of the specified resources to UPDATE_COMPLETE and continues to roll back the stack. After the rollback is complete, the state of the skipped resources will be inconsistent with the state of the resources in the stack template. Before performing another stack update, you must update the stack or resources to be consistent with each other. If you don't, subsequent stack updates might fail, and the stack will become unrecoverable.  Specify the minimum number of resources required to successfully roll back your stack. For example, a failed resource update might cause dependent resources to fail. In this case, it might not be necessary to skip the dependent resources. To skip resources that are part of nested stacks, use the following format: NestedStackName.ResourceLogicalID. If you want to specify the logical ID of a stack resource (Type: AWS::CloudFormation::Stack) in the ResourcesToSkip list, then its corresponding embedded stack must be in one of the following states: DELETE_IN_PROGRESS, DELETE_COMPLETE, or DELETE_FAILED.  Don't confuse a child stack's name with its corresponding logical ID defined in the parent stack. For an example of a continue update rollback operation with nested stacks, see Continue rolling back from failed nested stack updates",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listUpdateFailedResources,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this ContinueUpdateRollback request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to continue the rollback to a stack with the same name. You might retry ContinueUpdateRollback requests to ensure that CloudFormation successfully received them",
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
        "Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that CloudFormation will create. If you create a change set for an existing stack, CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack. To create a change set for a stack that doesn't exist, for the ChangeSetType parameter, specify CREATE. To create a change set for an existing stack, specify UPDATE for the ChangeSetType parameter. To create a change set for an import operation, specify IMPORT for the ChangeSetType parameter. After the CreateChangeSet call successfully completes, CloudFormation starts creating the change set. To check the status of the change set or to review it, use the DescribeChangeSet action. When you are satisfied with the changes the change set will make, execute the change set by using the ExecuteChangeSet action. CloudFormation doesn't make changes until you execute the change set. To create a change set for the entire stack hierarchy, set IncludeNestedStacks to True",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique ID of the stack for which you are creating a change set. CloudFormation generates the change set by comparing this stack's information with the information that you submit, such as a modified template or different parameter input values",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--template-body",
          description:
            "A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length of 51,200 bytes. CloudFormation generates the change set by comparing this template with the template of the stack that you specified. Conditional: You must specify only TemplateBody or TemplateURL",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "The location of the file that contains the revised template. The URL must point to a template (max size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. CloudFormation generates the change set by comparing this template with the stack that you specified. The location for an Amazon S3 bucket must start with https://. Conditional: You must specify only TemplateBody or TemplateURL",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-previous-template",
          description:
            "Whether to reuse the template that's associated with the stack to create the change set",
        },
        {
          name: "--no-use-previous-template",
          description:
            "Whether to reuse the template that's associated with the stack to create the change set",
        },
        {
          name: "--parameters",
          description:
            "A list of Parameter structures that specify input parameters for the change set. For more information, see the Parameter data type",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--capabilities",
          description:
            "In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to create the stack.    CAPABILITY_IAM and CAPABILITY_NAMED_IAM  Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new IAM users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability.   If you have IAM resources, you can specify either capability.   If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM.   If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error.   If your stack template contains these resources, we suggest that you review all permissions associated with them and edit their permissions if necessary.     AWS::IAM::AccessKey      AWS::IAM::Group     AWS::IAM::InstanceProfile      AWS::IAM::Policy      AWS::IAM::Role      AWS::IAM::User     AWS::IAM::UserToGroupAddition    For more information, see Acknowledging IAM resources in CloudFormation templates.    CAPABILITY_AUTO_EXPAND  Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation.  This capacity doesn't apply to creating change sets, and specifying it when creating change sets has no effect. If you want to create a stack from a stack template that contains macros and nested stacks, you must create or update the stack directly from the template using the CreateStack or UpdateStack action, and specifying this capability.  For more information about macros, see Perform custom processing on CloudFormation templates with template macros.    Only one of the Capabilities and ResourceType parameters can be specified",
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
            "The template resource types that you have permissions to work with if you execute this change set, such as AWS::EC2::Instance, AWS::EC2::*, or Custom::MyCustomInstance. If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By default, CloudFormation grants permissions to all resource types. IAM uses this parameter for condition keys in IAM policies for CloudFormation. For more information, see Control access with Identity and Access Management in the CloudFormation User Guide.  Only one of the Capabilities and ResourceType parameters can be specified",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes when executing the change set. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least permission. If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that is generated from your user credentials",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--rollback-configuration",
          description:
            "The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards",
          args: {
            name: "structure",
          },
        },
        {
          name: "--notification-arns",
          description:
            "The Amazon Resource Names (ARNs) of Amazon SNS topics that CloudFormation associates with the stack. To remove all associated notification topics, specify an empty list",
          args: {
            name: "list",
            generators: generators.listSNSTopics,
            isVariadic: true,
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs to associate with this stack. CloudFormation also propagates these tags to resources in the stack. You can specify a maximum of 50 tags",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--change-set-name",
          description:
            "The name of the change set. The name must be unique among all change sets that are associated with the specified stack. A change set name can contain only alphanumeric, case sensitive characters, and hyphens. It must start with an alphabetical character and can't exceed 128 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for this CreateChangeSet request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another change set with the same name. You might retry CreateChangeSet requests to ensure that CloudFormation successfully received them",
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
            "The type of change set operation. To create a change set for a new stack, specify CREATE. To create a change set for an existing stack, specify UPDATE. To create a change set for an import operation, specify IMPORT. If you create a change set for a new stack, CloudFormation creates a stack with a unique stack ID, but no template or resources. The stack will be in the REVIEW_IN_PROGRESS state until you execute the change set. By default, CloudFormation specifies UPDATE. You can't use the UPDATE type to create a change set for a new stack or the CREATE type to create a change set for an existing stack",
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
          name: "--on-stack-failure",
          description:
            "Determines what action will be taken if stack creation fails. If this parameter is specified, the DisableRollback parameter to the ExecuteChangeSet API operation must not be specified. This must be one of these values:    DELETE - Deletes the change set if the stack creation fails. This is only valid when the ChangeSetType parameter is set to CREATE. If the deletion of the stack fails, the status of the stack is DELETE_FAILED.    DO_NOTHING - if the stack creation fails, do nothing. This is equivalent to specifying true for the DisableRollback parameter to the ExecuteChangeSet API operation.    ROLLBACK - if the stack creation fails, roll back the stack. This is equivalent to specifying false for the DisableRollback parameter to the ExecuteChangeSet API operation.   For nested stacks, when the OnStackFailure parameter is set to DELETE for the change set for the parent stack, any failure in a child stack will cause the parent stack creation to fail and all stacks to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--import-existing-resources",
          description:
            "Indicates if the change set imports resources that already exist.  This parameter can only import resources that have custom names in templates. For more information, see name type in the CloudFormation User Guide. To import resources that do not accept custom names, such as EC2 instances, use the resource import feature instead. For more information, see Import Amazon Web Services resources into a CloudFormation stack with a resource import in the CloudFormation User Guide",
        },
        {
          name: "--no-import-existing-resources",
          description:
            "Indicates if the change set imports resources that already exist.  This parameter can only import resources that have custom names in templates. For more information, see name type in the CloudFormation User Guide. To import resources that do not accept custom names, such as EC2 instances, use the resource import feature instead. For more information, see Import Amazon Web Services resources into a CloudFormation stack with a resource import in the CloudFormation User Guide",
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
      name: "create-generated-template",
      description:
        "Creates a template from existing resources that are not already managed with CloudFormation. You can check the status of the template generation using the DescribeGeneratedTemplate API action",
      options: [
        {
          name: "--resources",
          description:
            "An optional list of resources to be included in the generated template.  If no resources are specified,the template will be created without any resources. Resources can be added to the template using the UpdateGeneratedTemplate API action",
          args: {
            name: "list",
          },
        },
        {
          name: "--generated-template-name",
          description: "The name assigned to the generated template",
          args: {
            name: "string",
          },
        },
        {
          name: "--stack-name",
          description:
            "An optional name or ARN of a stack to use as the base stack for the generated template",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-configuration",
          description:
            "The configuration details of the generated template, including the DeletionPolicy and UpdateReplacePolicy",
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
      name: "create-stack",
      description:
        "Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack through the DescribeStacks operation. For more information about creating a stack and monitoring stack progress, see Managing Amazon Web Services resources as a single unit with CloudFormation stacks in the CloudFormation User Guide",
      options: [
        {
          name: "--stack-name",
          description:
            "The name that's associated with the stack. The name must be unique in the Region in which you are creating the stack.  A stack name can contain only alphanumeric characters (case sensitive) and hyphens. It must start with an alphabetical character and can't be longer than 128 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-body",
          description:
            "Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with https://. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both",
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
            "The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards",
          args: {
            name: "structure",
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
            "The Amazon SNS topic ARNs to publish stack related events. You can find your Amazon SNS topic ARNs using the Amazon SNS console or your Command Line Interface (CLI)",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listSNSTopics,
          },
        },
        {
          name: "--capabilities",
          description:
            "In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to create the stack.    CAPABILITY_IAM and CAPABILITY_NAMED_IAM  Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new IAM users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability.   If you have IAM resources, you can specify either capability.   If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM.   If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error.   If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.    AWS::IAM::AccessKey     AWS::IAM::Group     AWS::IAM::InstanceProfile     AWS::IAM::Policy     AWS::IAM::Role     AWS::IAM::User     AWS::IAM::UserToGroupAddition    For more information, see Acknowledging IAM resources in CloudFormation templates.    CAPABILITY_AUTO_EXPAND  Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation. If you want to create a stack from a stack template that contains macros and nested stacks, you must create the stack directly from the template using this capability.  You should only create stacks directly from a stack template that contains macros if you know what processing the macro performs. Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without CloudFormation being notified.  For more information, see Perform custom processing on CloudFormation templates with template macros.    Only one of the Capabilities and ResourceType parameters can be specified",
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
            "The template resource types that you have permissions to work with for this create stack action, such as AWS::EC2::Instance, AWS::EC2::*, or Custom::MyCustomInstance. Use the following syntax to describe template resource types: AWS::* (for all Amazon Web Services resources), Custom::* (for all custom resources), Custom::logical_ID  (for a specific custom resource), AWS::service_name::* (for all resources of a particular Amazon Web Services service), and AWS::service_name::resource_logical_ID  (for a specific Amazon Web Services resource). If the list of resource types doesn't include a resource that you're creating, the stack creation fails. By default, CloudFormation grants permissions to all resource types. IAM uses this parameter for CloudFormation-specific condition keys in IAM policies. For more information, see Control access with Identity and Access Management.  Only one of the Capabilities and ResourceType parameters can be specified",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to create the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege. If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials",
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
            "Structure containing the stack policy body. For more information, see Prevent updates to stack resources in the CloudFormation User Guide. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--stack-policy-url",
          description:
            "Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same Region as the stack. The location for an Amazon S3 bucket must start with https://. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs to associate with this stack. CloudFormation also propagates these tags to the resources created in the stack. A maximum number of 50 tags can be specified",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this CreateStack request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create a stack with the same name. You might retry CreateStack requests to ensure that CloudFormation successfully received them. All events initiated by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a CreateStack operation with the token token1, then all the StackEvents generated by that operation will have ClientRequestToken set as token1. In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format Console-StackOperation-ID, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-termination-protection",
          description:
            "Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see Protect CloudFormation stacks from being deleted in the CloudFormation User Guide. Termination protection is deactivated on stacks by default. For nested stacks, termination protection is set on the root stack and can't be changed directly on the nested stack",
        },
        {
          name: "--no-enable-termination-protection",
          description:
            "Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see Protect CloudFormation stacks from being deleted in the CloudFormation User Guide. Termination protection is deactivated on stacks by default. For nested stacks, termination protection is set on the root stack and can't be changed directly on the nested stack",
        },
        {
          name: "--retain-except-on-create",
          description:
            "When set to true, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of Retain. Default: false",
        },
        {
          name: "--no-retain-except-on-create",
          description:
            "When set to true, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of Retain. Default: false",
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
        "Creates stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region. You must specify at least one value for either Accounts or DeploymentTargets, and you must specify at least one value for Regions",
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
            "[Self-managed permissions] The names of one or more Amazon Web Services accounts that you want to create stack instances in the specified Region(s) for. You can specify Accounts or DeploymentTargets, but not both",
          args: {
            name: "list",
            generators: generators.getAccountId,
            isVariadic: true,
          },
        },
        {
          name: "--deployment-targets",
          description:
            "[Service-managed permissions] The Organizations accounts for which to create stack instances in the specified Amazon Web Services Regions. You can specify Accounts or DeploymentTargets, but not both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--regions",
          description:
            "The names of one or more Amazon Web Services Regions where you want to create stack instances using the specified Amazon Web Services accounts",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: awsRegions,
          },
        },
        {
          name: "--parameter-overrides",
          description:
            "A list of stack set parameters whose values you want to override in the selected stack instances. Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets parameter values during stack instance operations:   To override the current value for a parameter, include the parameter and specify its value.   To leave an overridden parameter set to its present value, include the parameter and specify UsePreviousValue as true. (You can't specify both a value and set UsePreviousValue to true.)   To set an overridden parameter back to the value specified in the stack set, specify a parameter list but don't include the parameter in the list.   To leave all parameters set to their present values, don't specify this property at all.   During stack set updates, any parameter values overridden for a stack instance aren't updated, but retain their overridden value. You can only override the parameter values that are specified in the stack set; to add or delete a parameter itself, use UpdateStackSet to update the stack set template",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--operation-preferences",
          description:
            "Preferences for how CloudFormation performs this stack set operation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--operation-id",
          description:
            "The unique identifier for this stack set operation. The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that CloudFormation successfully received them. If you don't specify an operation ID, the SDK generates one automatically. Repeating this stack set operation with a new operation ID retries all stack instances whose status is OUTDATED",
          args: {
            name: "string",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
            "The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--stack-id",
          description:
            "The stack ID you are importing into a new stack set. Specify the Amazon Resource Name (ARN) of the stack",
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
          },
        },
        {
          name: "--capabilities",
          description:
            "In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for CloudFormation to create the stack set and related stack instances.    CAPABILITY_IAM and CAPABILITY_NAMED_IAM  Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new IAM users. For those stack sets, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability.   If you have IAM resources, you can specify either capability.   If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM.   If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error.   If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.    AWS::IAM::AccessKey     AWS::IAM::Group     AWS::IAM::InstanceProfile     AWS::IAM::Policy     AWS::IAM::Role     AWS::IAM::User     AWS::IAM::UserToGroupAddition    For more information, see Acknowledging IAM resources in CloudFormation templates.    CAPABILITY_AUTO_EXPAND  Some templates reference macros. If your stack set template references one or more macros, you must create the stack set directly from the processed template, without first reviewing the resulting changes in a change set. To create the stack set directly, you must acknowledge this capability. For more information, see Using CloudFormation Macros to Perform Custom Processing on Templates.  Stack sets with service-managed permissions don't currently support the use of macros in templates. (This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation.) Even if you specify this capability for a stack set with service-managed permissions, if you reference a macro in your template the stack set operation will fail",
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
            "The key-value pairs to associate with this stack set and the stacks created from it. CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified. If you specify tags as part of a CreateStackSet action, CloudFormation checks to see if you have the required IAM permission to tag resources. If you don't, the entire CreateStackSet action fails with an access denied error, and the stack set is not created",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--administration-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role to use to create this stack set. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see Prerequisites: Granting Permissions for Stack Set Operations in the CloudFormation User Guide",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--execution-role-name",
          description:
            "The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation. Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets",
          args: {
            name: "string",
            generators: generators.listRoles,
          },
        },
        {
          name: "--permission-model",
          description:
            "Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.   With self-managed permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see Grant Self-Managed Stack Set Permissions.   With service-managed permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see Grant Service-Managed Stack Set Permissions",
          args: {
            name: "string",
            suggestions: permissionModel,
          },
        },
        {
          name: "--auto-deployment",
          description:
            "Describes whether StackSets automatically deploys to Organizations accounts that are added to the target organization or organizational unit (OU). Specify only if PermissionModel is SERVICE_MANAGED",
          args: {
            name: "structure",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   To create a stack set with service-managed permissions while signed in to the management account, specify SELF.   To create a stack set with service-managed permissions while signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated admin in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide.   Stack sets with service-managed permissions are created in the management account, including stack sets that are created by delegated administrators",
          args: {
            name: "string",
            suggestions: callAs,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this CreateStackSet request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another stack set with the same name. You might retry CreateStackSet requests to ensure that CloudFormation successfully received them. If you don't specify an operation ID, the SDK generates one automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-execution",
          description:
            "Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations",
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
      name: "deactivate-organizations-access",
      description:
        "Deactivates trusted access with Organizations. If trusted access is deactivated, the management account does not have permissions to create and manage service-managed StackSets for your organization",
      options: [
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
      name: "deactivate-type",
      description:
        "Deactivates a public extension that was previously activated in this account and Region. Once deactivated, an extension can't be used in any CloudFormation operation. This includes stack update operations where the stack template includes the extension, even if no updates are being made to the extension. In addition, deactivated extensions aren't automatically updated if a new version of the extension is released",
      options: [
        {
          name: "--type-name",
          description:
            "The type name of the extension, in this account and Region. If you specified a type name alias when enabling the extension, use the type name alias. Conditional: You must specify either Arn, or TypeName and Type",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The extension type. Conditional: You must specify either Arn, or TypeName and Type",
          args: {
            name: "string",
          },
        },
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) for the extension, in this account and Region. Conditional: You must specify either Arn, or TypeName and Type",
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
      name: "delete-change-set",
      description:
        "Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set. If the call successfully completes, CloudFormation successfully deleted the change set. If IncludeNestedStacks specifies True during the creation of the nested change set, then DeleteChangeSet will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of REVIEW_IN_PROGRESS",
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
            "If you specified the name of a change set to delete, specify the stack name or Amazon Resource Name (ARN) that's associated with it",
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
      name: "delete-generated-template",
      description: "Deleted a generated template",
      options: [
        {
          name: "--generated-template-name",
          description:
            "The name or Amazon Resource Name (ARN) of a generated template",
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
      name: "delete-stack",
      description:
        "Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks don't show up in the DescribeStacks operation if the deletion has been completed successfully. For more information about deleting a stack, see Delete a stack from the CloudFormation console in the CloudFormation User Guide",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique stack ID that's associated with the stack",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--retain-resources",
          description:
            "For stacks in the DELETE_FAILED state, a list of resource logical IDs that are associated with the resources you want to retain. During deletion, CloudFormation deletes the stack but doesn't delete the retained resources. Retaining resources is useful when you can't delete a resource, such as a non-empty S3 bucket, but you want to delete the stack",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listDeleteFailedResources,
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to delete the stack. CloudFormation uses the role's credentials to make calls on your behalf. If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this DeleteStack request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to delete a stack with the same name. You might retry DeleteStack requests to ensure that CloudFormation successfully received them. All events initiated by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a CreateStack operation with the token token1, then all the StackEvents generated by that operation will have ClientRequestToken set as token1. In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format Console-StackOperation-ID, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-mode",
          description:
            "Specifies the deletion mode for the stack. Possible values are:    STANDARD - Use the standard behavior. Specifying this value is the same as not specifying this parameter.    FORCE_DELETE_STACK - Delete the stack if it's stuck in a DELETE_FAILED state due to resource deletion failure",
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
        "Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions",
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
            "[Self-managed permissions] The names of the Amazon Web Services accounts that you want to delete stack instances for. You can specify Accounts or DeploymentTargets, but not both",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.getAccountId,
          },
        },
        {
          name: "--deployment-targets",
          description:
            "[Service-managed permissions] The Organizations accounts from which to delete stack instances. You can specify Accounts or DeploymentTargets, but not both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--regions",
          description:
            "The Amazon Web Services Regions where you want to delete stack set instances",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: awsRegions,
          },
        },
        {
          name: "--operation-preferences",
          description:
            "Preferences for how CloudFormation performs this stack set operation",
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
            "The unique identifier for this stack set operation. If you don't specify an operation ID, the SDK generates one automatically. The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You can retry stack set operation requests to ensure that CloudFormation successfully received them. Repeating this stack set operation with a new operation ID retries all stack instances whose status is OUTDATED",
          args: {
            name: "string",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
        "Deletes a stack set. Before you can delete a stack set, all its member stack instances must be deleted. For more information about how to complete this, see DeleteStackInstances",
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
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
        "Marks an extension or extension version as DEPRECATED in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations. To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry. You can't deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the extension type itself is deregistered as well and marked as deprecated. To view the deprecation status of an extension or extension version, use DescribeType",
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
        "Retrieves your account's CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see Understand CloudFormation quotas in the CloudFormation User Guide",
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
        "Returns the inputs for the change set and a list of changes that CloudFormation will make if you execute the change set. For more information, see Update CloudFormation stacks using change sets in the CloudFormation User Guide",
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
          name: "--include-property-values",
          description:
            "If true, the returned changes include detailed changes in the property values",
        },
        {
          name: "--no-include-property-values",
          description:
            "If true, the returned changes include detailed changes in the property values",
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
      name: "describe-change-set-hooks",
      description:
        "Returns hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set",
      options: [
        {
          name: "--change-set-name",
          description:
            "The name or Amazon Resource Name (ARN) of the change set that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--stack-name",
          description:
            "If you specified the name of a change set, specify the stack name or stack ID (ARN) of the change set you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A string, provided by the DescribeChangeSetHooks response output, that identifies the next page of information that you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--logical-resource-id",
          description:
            "If specified, lists only the hooks related to the specified LogicalResourceId",
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
      name: "describe-generated-template",
      description:
        "Describes a generated template. The output includes details about the progress of the creation of a generated template started by a CreateGeneratedTemplate API action or the update of a generated template started with an UpdateGeneratedTemplate API action",
      options: [
        {
          name: "--generated-template-name",
          description:
            "The name or Amazon Resource Name (ARN) of a generated template",
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
      name: "describe-organizations-access",
      description:
        "Retrieves information about the account's OrganizationAccess status. This API can be called either by the management account or the delegated administrator by using the CallAs parameter. This API can also be called without the CallAs parameter by the management account",
      options: [
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
      name: "describe-publisher",
      description:
        "Returns information about a CloudFormation extension publisher. If you don't supply a PublisherId, and you have registered as an extension publisher, DescribePublisher returns information about your own publisher account. For more information about registering as a publisher, see:    RegisterPublisher     Publishing extensions to make them available for public use in the CloudFormation Command Line Interface (CLI) User Guide",
      options: [
        {
          name: "--publisher-id",
          description:
            "The ID of the extension publisher. If you don't supply a PublisherId, and you have registered as an extension publisher, DescribePublisher returns information about your own publisher account",
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
      name: "describe-resource-scan",
      description: "Describes details of a resource scan",
      options: [
        {
          name: "--resource-scan-id",
          description: "The Amazon Resource Name (ARN) of the resource scan",
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
      name: "describe-stack-drift-detection-status",
      description:
        "Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information about stack and resource drift, see Detect unmanaged configuration changes to stacks and resources with drift detection. Use DetectStackDrift to initiate a stack drift detection operation. DetectStackDrift returns a StackDriftDetectionId you can use to monitor the progress of the operation using DescribeStackDriftDetectionStatus. Once the drift detection operation has completed, use DescribeStackResourceDrifts to return drift information about the stack and its resources",
      options: [
        {
          name: "--stack-drift-detection-id",
          description:
            "The ID of the drift detection results of this operation. CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number of drift results CloudFormation retains for any given stack, and for how long, may vary",
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
        "Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, see Understand CloudFormation stack creation events in the CloudFormation User Guide.  You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID)",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
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
        "Returns the stack instance that's associated with the specified StackSet, Amazon Web Services account, and Amazon Web Services Region. For a list of stack instances that are associated with a specific StackSet, use ListStackInstances",
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
            "The ID of an Amazon Web Services account that's associated with this stack instance",
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
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
            "The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
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
        "Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where CloudFormation detects configuration drift. For a given stack, there will be one StackResourceDrift for each stack resource that has been checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that don't currently support drift detection aren't checked, and so not included. For a list of resources that support drift detection, see Resource type support for imports and drift detection. Use DetectStackResourceDrift to detect drift on individual resources, or DetectStackDrift to detect drift on all supported resources for a given stack",
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
            "The resource drift status values to use as filters for the resource drift results returned.    DELETED: The resource differs from its expected template configuration in that the resource has been deleted.    MODIFIED: One or more resource properties differ from their expected template values.    IN_SYNC: The resource's actual configuration matches its expected template configuration.    NOT_CHECKED: CloudFormation doesn't currently return this value",
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
        "Returns Amazon Web Services resource descriptions for running and deleted stacks. If StackName is specified, all the associated resources that are part of the stack are returned. If PhysicalResourceId is specified, the associated resources of the stack that the resource belongs to are returned.  Only the first 100 resources will be returned. If your stack has more resources than this, you should use ListStackResources instead.  For deleted stacks, DescribeStackResources returns resource information for up to 90 days after the stack has been deleted. You must specify either StackName or PhysicalResourceId, but not both. In addition, you can specify LogicalResourceId to filter the returned result. For more information about resources, the LogicalResourceId and PhysicalResourceId, see the CloudFormation User Guide.  A ValidationError is returned if you specify both StackName and PhysicalResourceId in the same request",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique stack ID that is associated with the stack, which aren't always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value. Required: Conditional. If you don't specify StackName, you must specify PhysicalResourceId",
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
            "The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation. For example, for an Amazon Elastic Compute Cloud (EC2) instance, PhysicalResourceId corresponds to the InstanceId. You can pass the EC2 InstanceId to DescribeStackResources to find which stack the instance belongs to and what other resources are part of the stack. Required: Conditional. If you don't specify PhysicalResourceId, you must specify StackName. Default: There is no default value",
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
      description: "Returns the description of the specified StackSet",
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
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
        "Returns the description of the specified StackSet operation",
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
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
        "Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created. For more information about a stack's event history, see Understand CloudFormation stack creation events in the CloudFormation User Guide.  If the stack doesn't exist, a ValidationError is returned",
      options: [
        {
          name: "--stack-name",
          description:
            'If you don\'t pass a parameter to StackName, the API returns a response that describes all resources in the account, which can impact performance. This requires ListStacks and DescribeStacks permissions. Consider using the ListStacks API if you\'re not passing a parameter to StackName. The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request: { "Version": "2012-10-17", "Statement": [{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*/*" }] }  The name or the unique stack ID that\'s associated with the stack, which aren\'t always interchangeable:   Running stacks: You can specify either the stack\'s name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value',
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
            "The kind of extension. Conditional: You must specify either TypeName and Type, or Arn",
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
          name: "--publisher-id",
          description:
            "The publisher ID of the extension publisher. Extensions provided by Amazon Web Services are not assigned a publisher ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--public-version-number",
          description: "The version number of a public third-party extension",
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
        "Returns information about an extension's registration, including its current status and type and version identifiers. When you initiate a registration request using RegisterType, you can then use DescribeTypeRegistration to monitor the progress of that registration request. Once the registration request has completed, use DescribeType to return detailed information about an extension",
      options: [
        {
          name: "--registration-token",
          description:
            "The identifier for this registration request. This registration token is generated by CloudFormation when you initiate a registration request using RegisterType",
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
        "Detects whether a stack's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see Detect unmanaged configuration changes to stacks and resources with drift detection. Use DetectStackDrift to detect drift on all supported resources for a given stack, or DetectStackResourceDrift to detect drift on individual resources. For a list of stack resources that currently support drift detection, see Resource type support for imports and drift detection.  DetectStackDrift can take up to several minutes, depending on the number of resources contained within the stack. Use DescribeStackDriftDetectionStatus to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use DescribeStackResourceDrifts to return drift information about the stack and its resources. When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks belonging to that stack. Perform DetectStackDrift directly on the nested stack itself",
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
        "Returns information about whether a resource's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see Detect unmanaged configuration changes to stacks and resources with drift detection. Use DetectStackResourceDrift to detect drift on individual resources, or DetectStackDrift to detect drift on all resources in a given stack that support drift detection. Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see Resource type support for imports and drift detection",
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
        "Detect drift on a stack set. When CloudFormation performs drift detection on a stack set, it performs drift detection on the stack associated with each stack instance in the stack set. For more information, see How CloudFormation performs drift detection on a stack set.  DetectStackSetDrift returns the OperationId of the stack set drift detection operation. Use this operation id with DescribeStackSetOperation to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the stack set, in addition to the number of resources included in each stack. Once the operation has completed, use the following actions to return drift information:   Use DescribeStackSet to return detailed information about the stack set, including detailed information about the last completed drift operation performed on the stack set. (Information about drift operations that are in progress isn't included.)   Use ListStackInstances to return a list of stack instances belonging to the stack set, including the drift status and last drift time checked of each instance.   Use DescribeStackInstance to return detailed information about a specific stack instance, including its drift status and last drift time checked.   For more information about performing a drift detection operation on a stack set, see Detecting unmanaged changes in stack sets. You can only run a single drift detection operation on a given stack set at one time. To stop a drift detection stack set operation, use StopStackSetOperation",
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
            "The user-specified preferences for how CloudFormation performs a stack set operation. For more information about maximum concurrent accounts and failure tolerance, see Stack set operation options",
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
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
        "Returns the estimated monthly cost of a template. The return value is an Amazon Web Services Simple Monthly Calculator URL with a query string that describes the resources required to run the template",
      options: [
        {
          name: "--template-body",
          description:
            "Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must pass TemplateBody or TemplateURL. If both are passed, only TemplateBody is used",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "Location of file containing the template body. The URL must point to a template that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with https://. Conditional: You must pass TemplateURL or TemplateBody. If both are passed, only TemplateBody is used",
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
        "Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, CloudFormation starts updating the stack. Use the DescribeStacks action to view the status of the update. When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack. If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy. To create a change set for the entire stack hierarchy, IncludeNestedStacks must have been set to True",
      options: [
        {
          name: "--change-set-name",
          description:
            "The name or Amazon Resource Name (ARN) of the change set that you want use to update the specified stack",
          args: {
            name: "string",
            generators: generators.listCfnChangeSets,
          },
        },
        {
          name: "--stack-name",
          description:
            "If you specified the name of a change set, specify the stack name or Amazon Resource Name (ARN) that's associated with the change set you want to execute",
          args: {
            name: "string",
            generators: generators.getStackIdForChangeSet,
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this ExecuteChangeSet request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to execute a change set to update a stack with the same name. You might retry ExecuteChangeSet requests to ensure that CloudFormation successfully received them",
          args: {
            name: "string",
          },
        },
        {
          name: "--disable-rollback",
          description:
            "Preserves the state of previously provisioned resources when an operation fails. This parameter can't be specified when the OnStackFailure parameter to the CreateChangeSet API operation was specified.    True - if the stack creation fails, do nothing. This is equivalent to specifying DO_NOTHING for the OnStackFailure parameter to the CreateChangeSet API operation.    False - if the stack creation fails, roll back the stack. This is equivalent to specifying ROLLBACK for the OnStackFailure parameter to the CreateChangeSet API operation.   Default: True",
        },
        {
          name: "--no-disable-rollback",
          description:
            "Preserves the state of previously provisioned resources when an operation fails. This parameter can't be specified when the OnStackFailure parameter to the CreateChangeSet API operation was specified.    True - if the stack creation fails, do nothing. This is equivalent to specifying DO_NOTHING for the OnStackFailure parameter to the CreateChangeSet API operation.    False - if the stack creation fails, roll back the stack. This is equivalent to specifying ROLLBACK for the OnStackFailure parameter to the CreateChangeSet API operation.   Default: True",
        },
        {
          name: "--retain-except-on-create",
          description:
            "When set to true, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of Retain. Default: false",
        },
        {
          name: "--no-retain-except-on-create",
          description:
            "When set to true, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of Retain. Default: false",
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
      name: "get-generated-template",
      description:
        "Retrieves a generated template. If the template is in an InProgress or Pending status then the template returned will be the template when the template was last in a Complete status. If the template has not yet been in a Complete status then an empty template will be returned",
      options: [
        {
          name: "--format",
          description:
            "The language to use to retrieve for the generated template. Supported values are:    JSON     YAML",
          args: {
            name: "string",
          },
        },
        {
          name: "--generated-template-name",
          description:
            "The name or Amazon Resource Name (ARN) of the generated template. The format is arn:${Partition}:cloudformation:${Region}:${Account}:generatedtemplate/${Id}. For example, arn:aws:cloudformation:us-east-1:123456789012:generatedtemplate/2e8465c1-9a80-43ea-a3a3-4f2d692fe6dc",
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
      name: "get-stack-policy",
      description:
        "Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or unique stack ID that's associated with the stack whose policy you want to get",
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
        "Returns the template body for a specified stack. You can get the template for running or deleted stacks. For deleted stacks, GetTemplate returns the template for up to 90 days after the stack has been deleted.  If the template doesn't exist, a ValidationError is returned",
      options: [
        {
          name: "--stack-name",
          description:
            "The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
          args: {
            name: "string",
            generators: generators.listCfnStackIds,
          },
        },
        {
          name: "--change-set-name",
          description:
            "The name or Amazon Resource Name (ARN) of a change set for which CloudFormation returns the associated template. If you specify a name, you must also specify the StackName",
          args: {
            name: "string",
            generators: generators.listCfnChangeSets,
          },
        },
        {
          name: "--template-stage",
          description:
            "For templates that include transforms, the stage of the template that CloudFormation returns. To get the user-submitted template, specify Original. To get the template after CloudFormation has processed all transforms, specify Processed. If the template doesn't include transforms, Original and Processed return the same template. By default, CloudFormation specifies Processed",
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
        "Returns information about a new or existing template. The GetTemplateSummary action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set. You can use the GetTemplateSummary action when you submit a template, or you can get template information for a stack set, or a running or deleted stack. For deleted stacks, GetTemplateSummary returns the template information for up to 90 days after the stack has been deleted. If the template doesn't exist, a ValidationError is returned",
      options: [
        {
          name: "--template-body",
          description:
            "Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must specify only one of the following parameters: StackName, StackSetName, TemplateBody, or TemplateURL",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with https://. Conditional: You must specify only one of the following parameters: StackName, StackSetName, TemplateBody, or TemplateURL",
          args: {
            name: "string",
          },
        },
        {
          name: "--stack-name",
          description:
            "The name or the stack ID that's associated with the stack, which aren't always interchangeable. For running stacks, you can specify either the stack's name or its unique stack ID. For deleted stack, you must specify the unique stack ID. Conditional: You must specify only one of the following parameters: StackName, StackSetName, TemplateBody, or TemplateURL",
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
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-summary-config",
          description:
            "Specifies options for the GetTemplateSummary API action",
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
      name: "import-stacks-to-stack-set",
      description:
        "Import existing stacks into a new stack sets. Use the stack import operation to import up to 10 stacks into a new stack set in the same account as the source stack or in a different administrator account and Region, by specifying the stack ID of the stack you intend to import",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name of the stack set. The name must be unique in the Region where you create your stack set",
          args: {
            name: "string",
          },
        },
        {
          name: "--stack-ids",
          description:
            "The IDs of the stacks you are importing into a stack set. You import up to 10 stacks per stack set at a time. Specify either StackIds or StackIdsUrl",
          args: {
            name: "list",
          },
        },
        {
          name: "--stack-ids-url",
          description:
            "The Amazon S3 URL which contains list of stack ids to be inputted. Specify either StackIds or StackIdsUrl",
          args: {
            name: "string",
          },
        },
        {
          name: "--organizational-unit-ids",
          description:
            "The list of OU ID's to which the stacks being imported has to be mapped as deployment target",
          args: {
            name: "list",
          },
        },
        {
          name: "--operation-preferences",
          description:
            "The user-specified preferences for how CloudFormation performs a stack set operation. For more information about maximum concurrent accounts and failure tolerance, see Stack set operation options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--operation-id",
          description:
            "A unique, user defined, identifier for the stack set operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--call-as",
          description:
            "By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   For service managed stack sets, specify DELEGATED_ADMIN",
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
      name: "list-change-sets",
      description:
        "Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the CREATE_IN_PROGRESS or CREATE_PENDING state",
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
        "Lists all exported output values in the account and Region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the  Fn::ImportValue function. For more information, see Get exported outputs from a deployed CloudFormation stack",
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
      name: "list-generated-templates",
      description: "Lists your generated templates in this Region",
      options: [
        {
          name: "--next-token",
          description:
            "A string that identifies the next page of resource scan results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "If the number of available results exceeds this maximum, the response includes a NextToken value that you can use for the NextToken parameter to get the next set of results. By default the ListGeneratedTemplates API action will return at most 50 results in each response. The maximum value is 100",
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
      name: "list-hook-results",
      description:
        "Returns summaries of invoked Hooks when a change set or Cloud Control API operation target is provided",
      options: [
        {
          name: "--target-type",
          description: "The type of operation being targeted by the Hook",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-id",
          description:
            "The logical ID of the target the operation is acting on by the Hook. If the target is a change set, it's the ARN of the change set. If the target is a Cloud Control API operation, this will be the HookRequestToken returned by the Cloud Control API operation request. For more information on the HookRequestToken, see ProgressEvent",
          args: {
            name: "string",
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
        "Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see ListExports. For more information about importing an exported output value, see the Fn::ImportValue function",
      options: [
        {
          name: "--export-name",
          description:
            "The name of the exported output value. CloudFormation returns the stack names that are importing this value",
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
      name: "list-resource-scan-related-resources",
      description:
        "Lists the related resources for a list of resources from a resource scan. The response indicates whether each returned resource is already managed by CloudFormation",
      options: [
        {
          name: "--resource-scan-id",
          description: "The Amazon Resource Name (ARN) of the resource scan",
          args: {
            name: "string",
          },
        },
        {
          name: "--resources",
          description:
            "The list of resources for which you want to get the related resources. Up to 100 resources can be provided",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "A string that identifies the next page of resource scan results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "If the number of available results exceeds this maximum, the response includes a NextToken value that you can use for the NextToken parameter to get the next set of results. By default the ListResourceScanRelatedResources API action will return up to 100 results in each response. The maximum value is 100",
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
      name: "list-resource-scan-resources",
      description:
        "Lists the resources from a resource scan. The results can be filtered by resource identifier, resource type prefix, tag key, and tag value. Only resources that match all specified filters are returned. The response indicates whether each returned resource is already managed by CloudFormation",
      options: [
        {
          name: "--resource-scan-id",
          description: "The Amazon Resource Name (ARN) of the resource scan",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-identifier",
          description:
            "If specified, the returned resources will have the specified resource identifier (or one of them in the case where the resource has multiple identifiers)",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type-prefix",
          description:
            "If specified, the returned resources will be of any of the resource types with the specified prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-key",
          description:
            "If specified, the returned resources will have a matching tag key",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-value",
          description:
            "If specified, the returned resources will have a matching tag value",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A string that identifies the next page of resource scan results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "If the number of available results exceeds this maximum, the response includes a NextToken value that you can use for the NextToken parameter to get the next set of results. By default the ListResourceScanResources API action will return at most 100 results in each response. The maximum value is 100",
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
      name: "list-resource-scans",
      description:
        "List the resource scans from newest to oldest. By default it will return up to 10 resource scans",
      options: [
        {
          name: "--next-token",
          description:
            "A string that identifies the next page of resource scan results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "If the number of available results exceeds this maximum, the response includes a NextToken value that you can use for the NextToken parameter to get the next set of results. The default value is 10. The maximum value is 100",
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
      name: "list-stack-instance-resource-drifts",
      description:
        "Returns drift information for resources in a stack instance.   ListStackInstanceResourceDrifts returns drift information for the most recent drift detection operation. If an operation is in progress, it may only return partial results",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or unique ID of the stack set that you want to list drifted resources for",
          args: {
            name: "string",
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
          name: "--max-results",
          description:
            "The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--stack-instance-resource-drift-statuses",
          description:
            "The resource drift status of the stack instance.     DELETED: The resource differs from its expected template configuration in that the resource has been deleted.    MODIFIED: One or more resource properties differ from their expected template values.    IN_SYNC: The resource's actual configuration matches its expected template configuration.    NOT_CHECKED: CloudFormation doesn't currently return this value",
          args: {
            name: "list",
          },
        },
        {
          name: "--stack-instance-account",
          description:
            "The name of the Amazon Web Services account that you want to list resource drifts for",
          args: {
            name: "string",
          },
        },
        {
          name: "--stack-instance-region",
          description:
            "The name of the Region where you want to list resource drifts",
          args: {
            name: "string",
          },
        },
        {
          name: "--operation-id",
          description: "The unique ID of the drift operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
      name: "list-stack-instances",
      description:
        "Returns summary information about stack instances that are associated with the specified stack set. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region, or that have a specific status",
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
            "If the previous request didn't return all the remaining results, the response's NextToken parameter value is set to a token. To retrieve the next set of results, call ListStackInstances again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
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
          description: "The filter to apply to stack instances",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--stack-instance-account",
          description:
            "The name of the Amazon Web Services account that you want to list stack instances for",
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
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
            "The name or the unique stack ID that is associated with the stack, which aren't always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value",
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
      name: "list-stack-set-auto-deployment-targets",
      description:
        "Returns summary information about deployment targets for a stack set",
      options: [
        {
          name: "--stack-set-name",
          description:
            "The name or unique ID of the stack set that you want to get automatic deployment targets for",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A string that identifies the next page of stack set deployment targets that you want to retrieve",
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
            "Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for StackSets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
            "If the previous request didn't return all the remaining results, the response object's NextToken parameter value is set to a token. To retrieve the next set of results, call ListStackSetOperationResults again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
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
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
          },
        },
        {
          name: "--filters",
          description: "The filter to apply to operation results",
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
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
        "Returns summary information about stack sets that are associated with the user.   [Self-managed permissions] If you set the CallAs parameter to SELF while signed in to your Amazon Web Services account, ListStackSets returns all self-managed stack sets in your Amazon Web Services account.   [Service-managed permissions] If you set the CallAs parameter to SELF while signed in to the organization's management account, ListStackSets returns all stack sets in the management account.   [Service-managed permissions] If you set the CallAs parameter to DELEGATED_ADMIN while signed in to your member account, ListStackSets returns all stack sets with service-managed permissions in the management account",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous paginated request didn't return all the remaining results, the response object's NextToken parameter value is set to a token. To retrieve the next set of results, call ListStackSets again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
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
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
            "If the previous paginated request didn't return all the remaining results, the response object's NextToken parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
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
            "The deprecation status of the extension versions that you want to get summary information about. Valid values include:    LIVE: The extension version is registered and can be used in CloudFormation operations, dependent on its provisioning behavior and visibility scope.    DEPRECATED: The extension version has been deregistered and can no longer be used in CloudFormation operations.   The default is LIVE",
          args: {
            name: "string",
            suggestions: deprecatedStatus,
          },
        },
        {
          name: "--publisher-id",
          description:
            "The publisher ID of the extension publisher. Extensions published by Amazon aren't assigned a publisher ID",
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
      name: "list-types",
      description:
        "Returns summary information about extension that have been registered with CloudFormation",
      options: [
        {
          name: "--visibility",
          description:
            "The scope at which the extensions are visible and usable in CloudFormation operations. Valid values include:    PRIVATE: Extensions that are visible and usable within this account and Region. This includes:   Private extensions you have registered in this account and Region.   Public extensions that you have activated in this account and Region.      PUBLIC: Extensions that are publicly visible and available to be activated within any Amazon Web Services account. This includes extensions from Amazon Web Services, in addition to third-party publishers.   The default is PRIVATE",
          args: {
            name: "string",
            suggestions: ["PUBLIC", "PRIVATE"],
          },
        },
        {
          name: "--provisioning-type",
          description:
            "For resource types, the provisioning behavior of the resource type. CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted. Valid values include:    FULLY_MUTABLE: The resource type includes an update handler to process updates to the type during stack update operations.    IMMUTABLE: The resource type doesn't include an update handler, so the type can't be updated and must instead be replaced during stack update operations.    NON_PROVISIONABLE: The resource type doesn't include create, read, and delete handlers, and therefore can't actually be provisioned.   The default is FULLY_MUTABLE",
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
          name: "--filters",
          description:
            "Filter criteria to use in determining which extensions to return. Filters must be compatible with Visibility to return valid results. For example, specifying AWS_TYPES for Category and PRIVATE for Visibility returns an empty list of types, but specifying PUBLIC for Visibility returns the desired list",
          args: {
            name: "structure",
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
            "If the previous paginated request didn't return all the remaining results, the response object's NextToken parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
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
      name: "publish-type",
      description:
        "Publishes the specified extension to the CloudFormation registry as a public extension in this Region. Public extensions are available for use by all CloudFormation users. For more information about publishing extensions, see Publishing extensions to make them available for public use in the CloudFormation Command Line Interface (CLI) User Guide. To publish an extension, you must be registered as a publisher with CloudFormation. For more information, see RegisterPublisher",
      options: [
        {
          name: "--type",
          description:
            "The type of the extension. Conditional: You must specify Arn, or TypeName and Type",
          args: {
            name: "string",
          },
        },
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the extension. Conditional: You must specify Arn, or TypeName and Type",
          args: {
            name: "string",
          },
        },
        {
          name: "--type-name",
          description:
            "The name of the extension. Conditional: You must specify Arn, or TypeName and Type",
          args: {
            name: "string",
          },
        },
        {
          name: "--public-version-number",
          description:
            "The version number to assign to this version of the extension. Use the following format, and adhere to semantic versioning when assigning a version number to your extension:  MAJOR.MINOR.PATCH  For more information, see Semantic Versioning 2.0.0. If you don't specify a version number, CloudFormation increments the version number by one minor version release. You cannot specify a version number the first time you publish a type. CloudFormation automatically sets the first version number to be 1.0.0",
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
      name: "record-handler-progress",
      description:
        "Reports progress of a resource handler to CloudFormation. Reserved for use by the CloudFormation CLI. Don't use this API in your code",
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
      name: "register-publisher",
      description:
        "Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users. This publisher ID applies to your account in all Amazon Web Services Regions. For information about requirements for registering as a public extension publisher, see Prerequisite: Registering your account to publish CloudFormation extensions in the CloudFormation Command Line Interface (CLI) User Guide",
      options: [
        {
          name: "--accept-terms-and-conditions",
          description:
            "Whether you accept the Terms and Conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to register to publish public extensions to the CloudFormation registry. The default is false",
        },
        {
          name: "--no-accept-terms-and-conditions",
          description:
            "Whether you accept the Terms and Conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to register to publish public extensions to the CloudFormation registry. The default is false",
        },
        {
          name: "--connection-arn",
          description:
            "If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account. For more information, see Prerequisite: Registering your account to publish CloudFormation extensions in the CloudFormation Command Line Interface (CLI) User Guide",
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
      name: "register-type",
      description:
        "Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes:   Validating the extension schema.   Determining which handlers, if any, have been specified for the extension.   Making the extension available for use in your account.   For more information about how to develop extensions and ready them for registration, see Creating resource types using the CloudFormation CLI in the CloudFormation Command Line Interface (CLI) User Guide. You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per Region. Use DeregisterType to deregister specific extension versions if necessary. Once you have initiated a registration request using RegisterType, you can use DescribeTypeRegistration to monitor the progress of the registration request. Once you have registered a private extension in your account and Region, use SetTypeConfiguration to specify configuration properties for the extension. For more information, see Edit configuration data for extensions in your account in the CloudFormation User Guide",
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
            "The name of the extension being registered. We suggest that extension names adhere to the following patterns:   For resource types, company_or_organization::service::type.   For modules, company_or_organization::service::type::MODULE.   For hooks, MyCompany::Testing::MyTestHook.    The following organization namespaces are reserved and can't be used in your extension names:    Alexa     AMZN     Amazon     AWS     Custom     Dev",
          args: {
            name: "string",
            generators: generators.listTypeArns,
          },
        },
        {
          name: "--schema-handler-package",
          description:
            "A URL to the S3 bucket containing the extension project package that contains the necessary files for the extension you want to register. For information about generating a schema handler package for the extension you want to register, see submit in the CloudFormation Command Line Interface (CLI) User Guide.  The user registering the extension must be able to access the package in the S3 bucket. That's, the user needs to have GetObject permissions for the schema handler package. For more information, see Actions, Resources, and Condition Keys for Amazon S3 in the Identity and Access Management User Guide",
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
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when invoking the extension. For CloudFormation to assume the specified execution role, the role must contain a trust relationship with the CloudFormation service principal (resources.cloudformation.amazonaws.com). For more information about adding trust relationships, see Modifying a role trust policy in the Identity and Access Management User Guide. If your extension calls Amazon Web Services APIs in any of its handlers, you must create an  IAM execution role  that includes the necessary permissions to call those Amazon Web Services APIs, and provision that execution role in your account. When CloudFormation needs to invoke the resource type handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the resource type handler, thereby supplying your resource type with the appropriate credentials",
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
      name: "rollback-stack",
      description:
        "When specifying RollbackStack, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the DescribeStacks operation. Rolls back the specified stack to the last known stable state from CREATE_FAILED or UPDATE_FAILED stack statuses. This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a *_COMPLETE. This includes the following stack statuses.    CREATE_COMPLETE     UPDATE_COMPLETE     UPDATE_ROLLBACK_COMPLETE     IMPORT_COMPLETE     IMPORT_ROLLBACK_COMPLETE",
      options: [
        {
          name: "--stack-name",
          description: "The name that's associated with the stack",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to rollback the stack",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description: "A unique identifier for this RollbackStack request",
          args: {
            name: "string",
          },
        },
        {
          name: "--retain-except-on-create",
          description:
            "When set to true, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of Retain. Default: false",
        },
        {
          name: "--no-retain-except-on-create",
          description:
            "When set to true, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of Retain. Default: false",
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
            "Structure containing the stack policy body. For more information, see Prevent updates to stack resources in the CloudFormation User Guide. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--stack-policy-url",
          description:
            "Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an Amazon S3 bucket in the same Amazon Web Services Region as the stack. The location for an Amazon S3 bucket must start with https://. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both",
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
      name: "set-type-configuration",
      description:
        "Specifies the configuration data for a registered CloudFormation extension, in the given account and Region. To view the current configuration data for an extension, refer to the ConfigurationSchema element of DescribeType. For more information, see Edit configuration data for extensions in your account in the CloudFormation User Guide.  It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such as third-party credentials. For more details on dynamic references, see Specify values stored in other services using dynamic references in the CloudFormation User Guide",
      options: [
        {
          name: "--type-arn",
          description:
            "The Amazon Resource Name (ARN) for the extension, in this account and Region. For public extensions, this will be the ARN assigned when you call the ActivateType API operation in this account and Region. For private extensions, this will be the ARN assigned when you call the RegisterType API operation in this account and Region. Do not include the extension versions suffix at the end of the ARN. You can set the configuration for an extension, but not for a specific extension version",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The configuration data for the extension, in this account and Region. The configuration data must be formatted as JSON, and validate against the schema returned in the ConfigurationSchema response element of DescribeType. For more information, see Defining the account-level configuration of an extension in the CloudFormation Command Line Interface (CLI) User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-alias",
          description:
            "An alias by which to refer to this extension configuration data. Conditional: Specifying a configuration alias is required when setting a configuration for a resource type extension",
          args: {
            name: "string",
          },
        },
        {
          name: "--type-name",
          description:
            "The name of the extension. Conditional: You must specify ConfigurationArn, or Type and TypeName",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of extension. Conditional: You must specify ConfigurationArn, or Type and TypeName",
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
        "Sends a signal to the specified resource with a success or failure status. You can use the SignalResource operation in conjunction with a creation policy or update policy. CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The SignalResource operation is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance",
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
            "The status of the signal, which is either success or failure. A failure signal causes CloudFormation to immediately fail the stack creation or update",
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
      name: "start-resource-scan",
      description:
        "Starts a scan of the resources in this account in this Region. You can the status of a scan using the ListResourceScans API action",
      options: [
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this StartResourceScan request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to start a new resource scan",
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
      name: "stop-stack-set-operation",
      description:
        "Stops an in-progress operation on a stack set and its associated stack instances. StackSets will cancel all the unstarted stack instance deployments and wait for those are in-progress to complete",
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
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
      name: "test-type",
      description:
        "Tests a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry.   For resource types, this includes passing all contracts tests defined for the type.   For modules, this includes determining if the module's model meets all necessary requirements.   For more information, see Testing your public extension before publishing in the CloudFormation Command Line Interface (CLI) User Guide. If you don't specify a version, CloudFormation uses the default version of the extension in your account and Region for testing. To perform testing, CloudFormation assumes the execution role specified when the type was registered. For more information, see RegisterType. Once you've initiated testing on an extension using TestType, you can pass the returned TypeVersionArn into DescribeType to monitor the current test status and test status description for the extension. An extension must have a test status of PASSED before it can be published. For more information, see Publishing extensions to make them available for public use in the CloudFormation Command Line Interface (CLI) User Guide",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the extension. Conditional: You must specify Arn, or TypeName and Type",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of the extension to test. Conditional: You must specify Arn, or TypeName and Type",
          args: {
            name: "string",
          },
        },
        {
          name: "--type-name",
          description:
            "The name of the extension to test. Conditional: You must specify Arn, or TypeName and Type",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The version of the extension to test. You can specify the version id with either Arn, or with TypeName and Type. If you don't specify a version, CloudFormation uses the default version of the extension in this account and Region for testing",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-delivery-bucket",
          description:
            "The S3 bucket to which CloudFormation delivers the contract test execution logs. CloudFormation delivers the logs by the time contract testing has completed and the extension has been assigned a test type status of PASSED or FAILED. The user calling TestType must be able to access items in the specified S3 bucket. Specifically, the user needs the following permissions:    GetObject     PutObject    For more information, see Actions, Resources, and Condition Keys for Amazon S3 in the Identity and Access Management User Guide",
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
      name: "update-generated-template",
      description:
        "Updates a generated template. This can be used to change the name, add and remove resources, refresh resources, and change the DeletionPolicy and UpdateReplacePolicy settings. You can check the status of the update to the generated template using the DescribeGeneratedTemplate API action",
      options: [
        {
          name: "--generated-template-name",
          description:
            "The name or Amazon Resource Name (ARN) of a generated template",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-generated-template-name",
          description:
            "An optional new name to assign to the generated template",
          args: {
            name: "string",
          },
        },
        {
          name: "--add-resources",
          description:
            "An optional list of resources to be added to the generated template",
          args: {
            name: "list",
          },
        },
        {
          name: "--remove-resources",
          description:
            "A list of logical ids for resources to remove from the generated template",
          args: {
            name: "list",
          },
        },
        {
          name: "--refresh-all-resources",
          description:
            "If true, update the resource properties in the generated template with their current live state. This feature is useful when the resource properties in your generated a template does not reflect the live state of the resource properties. This happens when a user update the resource properties after generating a template",
        },
        {
          name: "--no-refresh-all-resources",
          description:
            "If true, update the resource properties in the generated template with their current live state. This feature is useful when the resource properties in your generated a template does not reflect the live state of the resource properties. This happens when a user update the resource properties after generating a template",
        },
        {
          name: "--template-configuration",
          description:
            "The configuration details of the generated template, including the DeletionPolicy and UpdateReplacePolicy",
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
      name: "update-stack",
      description:
        "Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack through the DescribeStacks action. To get a copy of the template for an existing stack, you can use the GetTemplate action. For more information about updating a stack and monitoring the progress of the update, see Managing Amazon Web Services resources as a single unit with CloudFormation stacks in the CloudFormation User Guide",
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
            "Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "Location of file containing the template body. The URL must point to a template that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with https://. Conditional: You must specify only one of the following parameters: TemplateBody, TemplateURL, or set the UsePreviousTemplate to true",
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
            "Structure containing the temporary overriding stack policy body. You can specify either the StackPolicyDuringUpdateBody or the StackPolicyDuringUpdateURL parameter, but not both. If you want to update protected resources, specify a temporary overriding stack policy during this update. If you don't specify a stack policy, the current policy that is associated with the stack will be used",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--stack-policy-during-update-url",
          description:
            "Location of a file containing the temporary overriding stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. The location for an Amazon S3 bucket must start with https://. You can specify either the StackPolicyDuringUpdateBody or the StackPolicyDuringUpdateURL parameter, but not both. If you want to update protected resources, specify a temporary overriding stack policy during this update. If you don't specify a stack policy, the current policy that is associated with the stack will be used",
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
          },
        },
        {
          name: "--capabilities",
          description:
            "In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to update the stack.    CAPABILITY_IAM and CAPABILITY_NAMED_IAM  Some stack templates might include resources that can affect permissions in your Amazon Web Services account, for example, by creating new IAM users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability.   If you have IAM resources, you can specify either capability.   If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM.   If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error.   If your stack template contains these resources, we suggest that you review all permissions associated with them and edit their permissions if necessary.     AWS::IAM::AccessKey      AWS::IAM::Group     AWS::IAM::InstanceProfile     AWS::IAM::Policy      AWS::IAM::Role      AWS::IAM::User     AWS::IAM::UserToGroupAddition    For more information, see Acknowledging IAM resources in CloudFormation templates.    CAPABILITY_AUTO_EXPAND  Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually updating the stack. If your stack template contains one or more macros, and you choose to update a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation. If you want to update a stack from a stack template that contains macros and nested stacks, you must update the stack directly from the template using this capability.  You should only update stacks directly from a stack template that contains macros if you know what processing the macro performs. Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without CloudFormation being notified.  For more information, see Perform custom processing on CloudFormation templates with template macros.    Only one of the Capabilities and ResourceType parameters can be specified",
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
            "The template resource types that you have permissions to work with for this update stack action, such as AWS::EC2::Instance, AWS::EC2::*, or Custom::MyCustomInstance. If the list of resource types doesn't include a resource that you're updating, the stack update fails. By default, CloudFormation grants permissions to all resource types. IAM uses this parameter for CloudFormation-specific condition keys in IAM policies. For more information, see Control access with Identity and Access Management.  Only one of the Capabilities and ResourceType parameters can be specified",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to update the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege. If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that is generated from your user credentials",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--rollback-configuration",
          description:
            "The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards",
          args: {
            name: "structure",
          },
        },
        {
          name: "--stack-policy-body",
          description:
            "Structure containing a new stack policy body. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both. You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you don't specify a stack policy, the current policy that is associated with the stack is unchanged",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--stack-policy-url",
          description:
            "Location of a file containing the updated stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. The location for an Amazon S3 bucket must start with https://. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both. You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you don't specify a stack policy, the current policy that is associated with the stack is unchanged",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-arns",
          description:
            "Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that CloudFormation associates with the stack. Specify an empty list to remove all notification topics",
          args: {
            name: "list",
            generators: generators.listSNSTopics,
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs to associate with this stack. CloudFormation also propagates these tags to supported resources in the stack. You can specify a maximum number of 50 tags. If you don't specify this parameter, CloudFormation doesn't modify the stack's tags. If you specify an empty value, CloudFormation removes all associated tags",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--disable-rollback",
          description:
            "Preserve the state of previously provisioned resources when an operation fails. Default: False",
        },
        {
          name: "--no-disable-rollback",
          description:
            "Preserve the state of previously provisioned resources when an operation fails. Default: False",
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for this UpdateStack request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to update a stack with the same name. You might retry UpdateStack requests to ensure that CloudFormation successfully received them. All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a CreateStack operation with the token token1, then all the StackEvents generated by that operation will have ClientRequestToken set as token1. In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format Console-StackOperation-ID, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002",
          args: {
            name: "string",
          },
        },
        {
          name: "--retain-except-on-create",
          description:
            "When set to true, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of Retain. Default: false",
        },
        {
          name: "--no-retain-except-on-create",
          description:
            "When set to true, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of Retain. Default: false",
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
        "Updates the parameter values for stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region. You can only update stack instances in Amazon Web Services Regions and accounts where they already exist; to create additional stack instances, use CreateStackInstances. During stack set updates, any parameters overridden for a stack instance aren't updated, but retain their overridden value. You can only update the parameter values that are specified in the stack set; to add or delete a parameter itself, use UpdateStackSet to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use UpdateStackSet to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using UpdateStackInstances",
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
            "[Self-managed permissions] The names of one or more Amazon Web Services accounts for which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. You can specify Accounts or DeploymentTargets, but not both",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.getAccountId,
          },
        },
        {
          name: "--deployment-targets",
          description:
            "[Service-managed permissions] The Organizations accounts for which you want to update parameter values for stack instances. If your update targets OUs, the overridden parameter values only apply to the accounts that are currently in the target OUs and their child OUs. Accounts added to the target OUs and their child OUs in the future won't use the overridden values. You can specify Accounts or DeploymentTargets, but not both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--regions",
          description:
            "The names of one or more Amazon Web Services Regions in which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions",
          args: {
            name: "list",
            suggestions: awsRegions,
          },
        },
        {
          name: "--parameter-overrides",
          description:
            "A list of input parameters whose values you want to update for the specified stack instances. Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets parameter values during stack instance update operations:   To override the current value for a parameter, include the parameter and specify its value.   To leave an overridden parameter set to its present value, include the parameter and specify UsePreviousValue as true. (You can't specify both a value and set UsePreviousValue to true.)   To set an overridden parameter back to the value specified in the stack set, specify a parameter list but don't include the parameter in the list.   To leave all parameters set to their present values, don't specify this property at all.   During stack set updates, any parameter values overridden for a stack instance aren't updated, but retain their overridden value. You can only override the parameter values that are specified in the stack set; to add or delete a parameter itself, use UpdateStackSet to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use UpdateStackSet to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using UpdateStackInstances",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--operation-preferences",
          description:
            "Preferences for how CloudFormation performs this stack set operation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--operation-id",
          description:
            "The unique identifier for this stack set operation. The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that CloudFormation successfully received them. If you don't specify an operation ID, the SDK generates one automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
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
        "Updates the stack set, and associated stack instances in the specified accounts and Amazon Web Services Regions. Even if the stack set operation created by updating the stack set fails (completely or partially, below or above a specified failure tolerance), the stack set is updated with your changes. Subsequent CreateStackInstances calls on the specified stack set use the updated stack set",
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
            "The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must specify only one of the following parameters: TemplateBody or TemplateURL\u2014or set UsePreviousTemplate to true",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document. Conditional: You must specify only one of the following parameters: TemplateBody or TemplateURL\u2014or set UsePreviousTemplate to true",
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
          },
        },
        {
          name: "--capabilities",
          description:
            "In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to update the stack set and its associated stack instances.    CAPABILITY_IAM and CAPABILITY_NAMED_IAM  Some stack templates might include resources that can affect permissions in your Amazon Web Services account, for example, by creating new IAM users. For those stacks sets, you must explicitly acknowledge this by specifying one of these capabilities. The following IAM resources require you to specify either the CAPABILITY_IAM or CAPABILITY_NAMED_IAM capability.   If you have IAM resources, you can specify either capability.   If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM.   If you don't specify either of these capabilities, CloudFormation returns an InsufficientCapabilities error.   If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.    AWS::IAM::AccessKey     AWS::IAM::Group     AWS::IAM::InstanceProfile     AWS::IAM::Policy     AWS::IAM::Role     AWS::IAM::User     AWS::IAM::UserToGroupAddition    For more information, see Acknowledging IAM resources in CloudFormation templates.    CAPABILITY_AUTO_EXPAND  Some templates reference macros. If your stack set template references one or more macros, you must update the stack set directly from the processed template, without first reviewing the resulting changes in a change set. To update the stack set directly, you must acknowledge this capability. For more information, see Using CloudFormation Macros to Perform Custom Processing on Templates.  Stack sets with service-managed permissions do not currently support the use of macros in templates. (This includes the AWS::Include and AWS::Serverless transforms, which are macros hosted by CloudFormation.) Even if you specify this capability for a stack set with service-managed permissions, if you reference a macro in your template the stack set operation will fail",
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
            "The key-value pairs to associate with this stack set and the stacks created from it. CloudFormation also propagates these tags to supported resources that are created in the stacks. You can specify a maximum number of 50 tags. If you specify tags for this parameter, those tags replace any list of tags that are currently associated with this stack set. This means:   If you don't specify this parameter, CloudFormation doesn't modify the stack's tags.   If you specify any tags using this parameter, you must specify all the tags that you want associated with this stack set, even tags you've specified before (for example, when creating the stack set or during a previous update of the stack set.). Any tags that you don't include in the updated list of tags are removed from the stack set, and therefore from the stacks and resources as well.   If you specify an empty value, CloudFormation removes all currently associated tags.   If you specify new tags as part of an UpdateStackSet action, CloudFormation checks to see if you have the required IAM permission to tag resources. If you omit tags that are currently associated with the stack set from the list of tags you specify, CloudFormation assumes that you want to remove those tags from the stack set, and checks to see if you have permission to untag resources. If you don't have the necessary permission(s), the entire UpdateStackSet action fails with an access denied error, and the stack set is not updated",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--operation-preferences",
          description:
            "Preferences for how CloudFormation performs this stack set operation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--administration-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role to use to update this stack set. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see Granting Permissions for Stack Set Operations in the CloudFormation User Guide. If you specified a customized administrator role when you created the stack set, you must specify a customized administrator role, even if it is the same customized administrator role used with this stack set previously",
          args: {
            name: "string",
            generators: generators.listRoleArns,
          },
        },
        {
          name: "--execution-role-name",
          description:
            "The name of the IAM execution role to use to update the stack set. If you do not specify an execution role, CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation. Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets. If you specify a customized execution role, CloudFormation uses that role to update the stack. If you do not specify a customized execution role, CloudFormation performs the update using the role previously associated with the stack set, so long as you have permissions to perform operations on the stack set",
          args: {
            name: "string",
            generators: generators.listRoles,
          },
        },
        {
          name: "--deployment-targets",
          description:
            "[Service-managed permissions] The Organizations accounts in which to update associated stack instances. To update all the stack instances associated with this stack set, do not specify DeploymentTargets or Regions. If the stack set update includes changes to the template (that is, if TemplateBody or TemplateURL is specified), or the Parameters, CloudFormation marks all stack instances with a status of OUTDATED prior to updating the stack instances in the specified accounts and Amazon Web Services Regions. If the stack set update doesn't include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permission-model",
          description:
            "Describes how the IAM roles required for stack set operations are created. You cannot modify PermissionModel if there are stack instances associated with your stack set.   With self-managed permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see Grant Self-Managed Stack Set Permissions.   With service-managed permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see Grant Service-Managed Stack Set Permissions",
          args: {
            name: "string",
            suggestions: permissionModel,
          },
        },
        {
          name: "--auto-deployment",
          description:
            "[Service-managed permissions] Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organization or organizational unit (OU). If you specify AutoDeployment, don't specify DeploymentTargets or Regions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--operation-id",
          description:
            "The unique ID for this stack set operation. The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that CloudFormation successfully received them. If you don't specify an operation ID, CloudFormation generates one automatically. Repeating this stack set operation with a new operation ID retries all stack instances whose status is OUTDATED",
          args: {
            name: "string",
          },
        },
        {
          name: "--accounts",
          description:
            "[Self-managed permissions] The accounts in which to update associated stack instances. If you specify accounts, you must also specify the Amazon Web Services Regions in which to update stack set instances. To update all the stack instances associated with this stack set, don't specify the Accounts or Regions properties. If the stack set update includes changes to the template (that is, if the TemplateBody or TemplateURL properties are specified), or the Parameters property, CloudFormation marks all stack instances with a status of OUTDATED prior to updating the stack instances in the specified accounts and Amazon Web Services Regions. If the stack set update does not include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Amazon Web Services Regions, while leaving all other stack instances with their existing stack instance status",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.getAccountId,
          },
        },
        {
          name: "--regions",
          description:
            "The Amazon Web Services Regions in which to update associated stack instances. If you specify Regions, you must also specify accounts in which to update stack set instances. To update all the stack instances associated with this stack set, do not specify the Accounts or Regions properties. If the stack set update includes changes to the template (that is, if the TemplateBody or TemplateURL properties are specified), or the Parameters property, CloudFormation marks all stack instances with a status of OUTDATED prior to updating the stack instances in the specified accounts and Regions. If the stack set update does not include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status",
          args: {
            name: "list",
            suggestions: awsRegions,
          },
        },
        {
          name: "--call-as",
          description:
            "[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. Use SELF for stack sets with self-managed permissions.   If you are signed in to the management account, specify SELF.   If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide",
          args: {
            name: "string",
            suggestions: callAs,
          },
        },
        {
          name: "--managed-execution",
          description:
            "Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations",
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
      name: "update-termination-protection",
      description:
        "Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see Protect a CloudFormation stack from being deleted in the CloudFormation User Guide. For nested stacks, termination protection is set on the root stack and can't be changed directly on the nested stack",
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
        "Validates a specified template. CloudFormation first checks if the template is valid JSON. If it isn't, CloudFormation checks if the template is valid YAML. If both these checks fail, CloudFormation returns a template validation error",
      options: [
        {
          name: "--template-body",
          description:
            "Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must pass TemplateURL or TemplateBody. If both are passed, only TemplateBody is used",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--template-url",
          description:
            "Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with https://. Conditional: You must pass TemplateURL or TemplateBody. If both are passed, only TemplateBody is used",
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
        "Packages the local artifacts (local paths) that your AWS CloudFormation template\nreferences. The command uploads local artifacts, such as source code for an AWS\nLambda function or a Swagger file for an AWS API Gateway REST API, to an S3\nbucket. The command returns a copy of your template, replacing references to\nlocal artifacts with the S3 location where the command uploaded the artifacts.\n\nUse this command to quickly upload local artifacts that might be required by\nyour template. After you package your template's artifacts, run the ``deploy``\ncommand to deploy the returned template.\n\nThis command can upload local artifacts referenced in the following places:\n\n\n    - ``BodyS3Location`` property for the ``AWS::ApiGateway::RestApi`` resource\n    - ``Code`` property for the ``AWS::Lambda::Function`` resource\n    - ``Content`` property for the ``AWS::Lambda::LayerVersion`` resource\n    - ``CodeUri`` property for the ``AWS::Serverless::Function`` resource\n    - ``ContentUri`` property for the ``AWS::Serverless::LayerVersion`` resource\n    - ``Location`` property for the ``AWS::Serverless::Application`` resource\n    - ``DefinitionS3Location`` property for the ``AWS::AppSync::GraphQLSchema`` resource\n    - ``RequestMappingTemplateS3Location`` property for the ``AWS::AppSync::Resolver`` resource\n    - ``ResponseMappingTemplateS3Location`` property for the ``AWS::AppSync::Resolver`` resource\n    - ``RequestMappingTemplateS3Location`` property for the ``AWS::AppSync::FunctionConfiguration`` resource\n    - ``ResponseMappingTemplateS3Location`` property for the ``AWS::AppSync::FunctionConfiguration`` resource\n    - ``DefinitionUri`` property for the ``AWS::Serverless::Api`` resource\n    - ``Location`` parameter for the ``AWS::Include`` transform\n    - ``SourceBundle`` property for the ``AWS::ElasticBeanstalk::ApplicationVersion`` resource\n    - ``TemplateURL`` property for the ``AWS::CloudFormation::Stack`` resource\n    - ``Command.ScriptLocation`` property for the ``AWS::Glue::Job`` resource\n    - ``DefinitionS3Location`` property for the ``AWS::StepFunctions::StateMachine`` resource\n    - ``DefinitionUri`` property for the ``AWS::Serverless::StateMachine`` resource\n    - ``S3`` property for the ``AWS::CodeCommit::Repository`` resource\n\n\nTo specify a local artifact in your template, specify a path to a local file or folder,\nas either an absolute or relative path. The relative path is a location\nthat is relative to your template's location.\n\nFor example, if your AWS Lambda function source code is in the\n``/home/user/code/lambdafunction/`` folder, specify\n``CodeUri: /home/user/code/lambdafunction`` for the\n``AWS::Serverless::Function`` resource. The command returns a template and replaces\nthe local path with the S3 location: ``CodeUri: s3://mybucket/lambdafunction.zip``.\n\nIf you specify a file, the command directly uploads it to the S3 bucket. If you\nspecify a folder, the command zips the folder and then uploads the .zip file.\nFor most resources, if you don't specify a path, the command zips and uploads the\ncurrent working directory. The exception is ``AWS::ApiGateway::RestApi``;\nif you don't specify a ``BodyS3Location``, this command will not upload an artifact to S3.\n\nBefore the command uploads artifacts, it checks if the artifacts are already\npresent in the S3 bucket to prevent unnecessary uploads. The command uses MD5\nchecksums to compare files. If the values match, the command doesn't upload the\nartifacts. Use the ``--force-upload flag`` to skip this check and always upload the\nartifacts",
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
          },
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Deploys the specified AWS CloudFormation template by creating and then executing\na change set. The command terminates after AWS CloudFormation executes the\nchange set. If you want to view the change set before AWS CloudFormation\nexecutes it, use the ``--no-execute-changeset`` flag.\n\nTo update a stack, specify the name of an existing stack. To create a new stack,\nspecify a new stack name",
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
          name: "--disable-rollback",
          description:
            "Preserve the state of previously provisioned resources when the execute-change-set operation fails",
        },
        {
          name: "--no-disable-rollback",
          description:
            "Roll back all resource changes when the execute-change-set operation fails",
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
                "Required. Information about the location of the application revision to be uploaded to Amazon S3. You must specify both a bucket and a key that represent the Amazon S3 bucket name and the object key name. Content will be zipped before uploading. Use the format s3:///",
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
              name: "--include-property-values",
              description:
                "If true, the returned changes include detailed changes in the property values",
            },
            {
              name: "--no-include-property-values",
              description:
                "If true, the returned changes include detailed changes in the property values",
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
                'If you don\'t pass a parameter to StackName, the API returns a response that describes all resources in the account, which can impact performance. This requires ListStacks and DescribeStacks permissions. Consider using the ListStacks API if you\'re not passing a parameter to StackName. The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request: { "Version": "2012-10-17", "Statement": [{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*/*" }] }  The name or the unique stack ID that\'s associated with the stack, which aren\'t always interchangeable:   Running stacks: You can specify either the stack\'s name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value',
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
                'If you don\'t pass a parameter to StackName, the API returns a response that describes all resources in the account, which can impact performance. This requires ListStacks and DescribeStacks permissions. Consider using the ListStacks API if you\'re not passing a parameter to StackName. The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request: { "Version": "2012-10-17", "Statement": [{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*/*" }] }  The name or the unique stack ID that\'s associated with the stack, which aren\'t always interchangeable:   Running stacks: You can specify either the stack\'s name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value',
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
                'If you don\'t pass a parameter to StackName, the API returns a response that describes all resources in the account, which can impact performance. This requires ListStacks and DescribeStacks permissions. Consider using the ListStacks API if you\'re not passing a parameter to StackName. The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request: { "Version": "2012-10-17", "Statement": [{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*/*" }] }  The name or the unique stack ID that\'s associated with the stack, which aren\'t always interchangeable:   Running stacks: You can specify either the stack\'s name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value',
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
                'If you don\'t pass a parameter to StackName, the API returns a response that describes all resources in the account, which can impact performance. This requires ListStacks and DescribeStacks permissions. Consider using the ListStacks API if you\'re not passing a parameter to StackName. The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request: { "Version": "2012-10-17", "Statement": [{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*/*" }] }  The name or the unique stack ID that\'s associated with the stack, which aren\'t always interchangeable:   Running stacks: You can specify either the stack\'s name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value',
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
                'If you don\'t pass a parameter to StackName, the API returns a response that describes all resources in the account, which can impact performance. This requires ListStacks and DescribeStacks permissions. Consider using the ListStacks API if you\'re not passing a parameter to StackName. The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request: { "Version": "2012-10-17", "Statement": [{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*/*" }] }  The name or the unique stack ID that\'s associated with the stack, which aren\'t always interchangeable:   Running stacks: You can specify either the stack\'s name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value',
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
                'If you don\'t pass a parameter to StackName, the API returns a response that describes all resources in the account, which can impact performance. This requires ListStacks and DescribeStacks permissions. Consider using the ListStacks API if you\'re not passing a parameter to StackName. The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request: { "Version": "2012-10-17", "Statement": [{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*/*" }] }  The name or the unique stack ID that\'s associated with the stack, which aren\'t always interchangeable:   Running stacks: You can specify either the stack\'s name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value',
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
                "The identifier for this registration request. This registration token is generated by CloudFormation when you initiate a registration request using RegisterType",
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
