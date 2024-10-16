const branchStages = [
  "PRODUCTION",
  "BETA",
  "DEVELOPMENT",
  "EXPERIMENTAL",
  "PULL_REQUEST",
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
const customGenerator = async (
  tokens: string[],
  executeShellCommand: Fig.ExecuteCommandFunction,
  command: string,
  options: string[],
  parentKey: string,
  childKey = ""
): Promise<Fig.Suggestion[]> => {
  try {
    let args = ["amplify", command];
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
  listAmplifyServiceRoles: {
    script: ["aws", "iam", "list-roles"],
    postProcess: (out) => {
      try {
        const list = JSON.parse(out)["Roles"];
        return list
          .filter((elm) => {
            const policyDocument = elm["AssumeRolePolicyDocument"];
            const statement = policyDocument["Statement"];
            // Only collect IAM roles where the principal service
            // is Amplify
            if (statement.length > 0) {
              const service = statement[0]["Principal"]["Service"];
              return service === "amplify.amazonaws.com";
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
    },
  },
  listAmplifyAppIds: {
    script: ["aws", "amplify", "list-apps"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "apps", "appId");
    },
  },
  listAmplifyAppArns: {
    script: ["aws", "amplify", "list-apps"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "apps", "appArn");
    },
  },
  listCfnStackNames: {
    script: ["aws", "cloudformation", "list-stacks"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "StackSummaries", "StackName");
    },
  },
  listEnvironmentNames: {
    custom: async function (tokens, executeShellCommand) {
      return customGenerator(
        tokens,
        executeShellCommand,
        "list-backend-environments",
        ["--app-id"],
        "backendEnvironments",
        "environmentName"
      );
    },
  },
  listEnvironmentArns: {
    custom: async function (tokens, executeShellCommand) {
      return customGenerator(
        tokens,
        executeShellCommand,
        "list-backend-environments",
        ["--app-id"],
        "backendEnvironments",
        "backendEnvironmentArn"
      );
    },
  },
  listBranchNames: {
    custom: async function (tokens, executeShellCommand) {
      return customGenerator(
        tokens,
        executeShellCommand,
        "list-branches",
        ["--app-id"],
        "branches",
        "branchName"
      );
    },
  },
  listFrameworkForApp: {
    custom: async function (tokens, executeShellCommand) {
      return customGenerator(
        tokens,
        executeShellCommand,
        "list-branches",
        ["--app-id"],
        "branches",
        "framework"
      );
    },
  },
  listBuildSpecForApp: {
    custom: async function (tokens, executeShellCommand) {
      return customGenerator(
        tokens,
        executeShellCommand,
        "list-branches",
        ["--app-id"],
        "branches",
        "buildSpec"
      );
    },
  },
  listIamRoleArns: {
    script: ["aws", "iam", "list-roles"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Roles", "Arn");
    },
  },
  listDomainNames: {
    custom: async function (tokens, executeShellCommand) {
      return customGenerator(
        tokens,
        executeShellCommand,
        "list-domain-associations",
        ["--app-id"],
        "domainAssociations",
        "domainName"
      );
    },
  },
  listJobIds: {
    custom: async function (tokens, executeShellCommand) {
      return customGenerator(
        tokens,
        executeShellCommand,
        "list-jobs",
        ["--app-id", "--branch-name"],
        "jobSummaries",
        "jobId"
      );
    },
  },
  listWebhookIds: {
    script: ["aws", "amplify", "list-webhooks"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "webhooks", "webhookId");
    },
  },
  listAllBranches: {
    script: ["aws", "amplify", "list-apps"],
    postProcess: (out) => {
      try {
        const list = JSON.parse(out)["Roles"];
        return list.map((elm) => {
          const prodBranch = elm["productionBranch"];
          if (prodBranch) {
            return {
              name: prodBranch["branchName"],
              icon: "fig://icon?type=aws",
            };
          }
        });
      } catch (e) {
        console.log(e);
      }
      return [];
    },
  },
};
const completionSpec: Fig.Spec = {
  name: "amplify",
  description:
    "Amplify enables developers to develop and deploy cloud-powered mobile and web apps. Amplify Hosting provides a continuous delivery and hosting service for web applications. For more information, see the Amplify Hosting User Guide. The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation for client app development. For more information, see the Amplify Framework",
  subcommands: [
    {
      name: "create-app",
      description: "Creates a new Amplify app",
      options: [
        {
          name: "--name",
          description: "The name of the Amplify app",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the Amplify app",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository",
          description: "The Git repository for the Amplify app",
          args: {
            name: "string",
          },
        },
        {
          name: "--platform",
          description:
            "The platform for the Amplify app. For a static app, set the platform type to WEB. For a dynamic server-side rendered (SSR) app, set the platform type to WEB_COMPUTE. For an app requiring Amplify Hosting's original SSR support only, set the platform type to WEB_DYNAMIC. If you are deploying an SSG only app with Next.js version 14 or later, you must set the platform type to WEB_COMPUTE and set the artifacts baseDirectory to .next in the application's build settings. For an example of the build specification settings, see Amplify build settings for a Next.js 14 SSG application in the Amplify Hosting User Guide",
          args: {
            name: "string",
            suggestions: ["WEB"],
          },
        },
        {
          name: "--iam-service-role-arn",
          description:
            "The AWS Identity and Access Management (IAM) service role for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyServiceRoles,
          },
        },
        {
          name: "--oauth-token",
          description:
            "The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored. Use oauthToken for repository providers other than GitHub, such as Bitbucket or CodeCommit. To authorize access to GitHub as your repository provider, use accessToken. You must specify either oauthToken or accessToken when you create a new app. Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see Migrating an existing OAuth app to the Amplify GitHub App in the Amplify User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-token",
          description:
            "The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored. Use accessToken for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use oauthToken. You must specify either accessToken or oauthToken when you create a new app. Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see Migrating an existing OAuth app to the Amplify GitHub App in the Amplify User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-variables",
          description:
            "The environment variables map for an Amplify app.  For a list of the environment variables that are accessible to Amplify by default, see Amplify Environment variables in the Amplify Hosting User Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--enable-branch-auto-build",
          description:
            "Enables the auto building of branches for an Amplify app",
        },
        {
          name: "--no-enable-branch-auto-build",
          description:
            "Enables the auto building of branches for an Amplify app",
        },
        {
          name: "--enable-branch-auto-deletion",
          description:
            "Automatically disconnects a branch in the Amplify console when you delete a branch from your Git repository",
        },
        {
          name: "--no-enable-branch-auto-deletion",
          description:
            "Automatically disconnects a branch in the Amplify console when you delete a branch from your Git repository",
        },
        {
          name: "--enable-basic-auth",
          description:
            "Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app",
        },
        {
          name: "--no-enable-basic-auth",
          description:
            "Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app",
        },
        {
          name: "--basic-auth-credentials",
          description:
            "The credentials for basic authorization for an Amplify app. You must base64-encode the authorization credentials and provide them in the format user:password",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-rules",
          description:
            "The custom rewrite and redirect rules for an Amplify app",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tag for an Amplify app",
          args: {
            name: "map",
          },
        },
        {
          name: "--build-spec",
          description:
            "The build specification (build spec) for an Amplify app",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-headers",
          description: "The custom HTTP headers for an Amplify app",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-auto-branch-creation",
          description: "Enables automated branch creation for an Amplify app",
        },
        {
          name: "--no-enable-auto-branch-creation",
          description: "Enables automated branch creation for an Amplify app",
        },
        {
          name: "--auto-branch-creation-patterns",
          description:
            "The automated branch creation glob patterns for an Amplify app",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--auto-branch-creation-config",
          description:
            "The automated branch creation configuration for an Amplify app",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cache-config",
          description: "The cache configuration for the Amplify app",
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
      name: "create-backend-environment",
      description:
        "Creates a new backend environment for an Amplify app.  This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn\u2019t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--environment-name",
          description: "The name for the backend environment",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--stack-name",
          description:
            "The AWS CloudFormation stack name of a backend environment",
          args: {
            name: "string",
            generators: generators.listCfnStackNames,
          },
        },
        {
          name: "--deployment-artifacts",
          description: "The name of deployment artifacts",
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
      name: "create-branch",
      description: "Creates a new branch for an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name for the branch",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for the branch",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage",
          description: "Describes the current stage for the branch",
          args: {
            name: "string",
            suggestions: branchStages,
          },
        },
        {
          name: "--framework",
          description: "The framework for the branch",
          args: {
            name: "string",
            generators: generators.listFrameworkForApp,
          },
        },
        {
          name: "--enable-notification",
          description: "Enables notifications for the branch",
        },
        {
          name: "--no-enable-notification",
          description: "Enables notifications for the branch",
        },
        {
          name: "--enable-auto-build",
          description: "Enables auto building for the branch",
        },
        {
          name: "--no-enable-auto-build",
          description: "Enables auto building for the branch",
        },
        {
          name: "--environment-variables",
          description: "The environment variables for the branch",
          args: {
            name: "map",
          },
        },
        {
          name: "--basic-auth-credentials",
          description:
            "The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format user:password",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-basic-auth",
          description: "Enables basic authorization for the branch",
        },
        {
          name: "--no-enable-basic-auth",
          description: "Enables basic authorization for the branch",
        },
        {
          name: "--enable-performance-mode",
          description:
            "Enables performance mode for the branch. Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out",
        },
        {
          name: "--no-enable-performance-mode",
          description:
            "Enables performance mode for the branch. Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out",
        },
        {
          name: "--tags",
          description: "The tag for the branch",
          args: {
            name: "map",
          },
        },
        {
          name: "--build-spec",
          description: "The build specification (build spec) for the branch",
          args: {
            name: "string",
            generators: generators.listBuildSpecForApp,
          },
        },
        {
          name: "--ttl",
          description:
            "The content Time To Live (TTL) for the website in seconds",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The display name for a branch. This is used as the default domain prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-pull-request-preview",
          description: "Enables pull request previews for this branch",
        },
        {
          name: "--no-enable-pull-request-preview",
          description: "Enables pull request previews for this branch",
        },
        {
          name: "--pull-request-environment-name",
          description: "The Amplify environment name for the pull request",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-arn",
          description:
            "The Amazon Resource Name (ARN) for a backend environment that is part of a Gen 1 Amplify app.  This field is available to Amplify Gen 1 apps only where the backend is created using Amplify Studio or the Amplify command line interface (CLI)",
          args: {
            name: "string",
            generators: generators.listEnvironmentArns,
          },
        },
        {
          name: "--backend",
          description:
            "The backend for a Branch of an Amplify app. Use for a backend created from an CloudFormation stack. This field is available to Amplify Gen 2 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code",
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
      name: "create-deployment",
      description:
        "Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a Git repository.  The maximum duration between the CreateDeployment call and the StartDeployment call cannot exceed 8 hours. If the duration exceeds 8 hours, the StartDeployment call and the associated Job will fail",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name of the branch to use for the job",
          args: {
            name: "string",
            generators: generators.listBranchNames,
          },
        },
        {
          name: "--file-map",
          description:
            "An optional file map that contains the file name as the key and the file content md5 hash as the value. If this argument is provided, the service will generate a unique upload URL per file. Otherwise, the service will only generate a single upload URL for the zipped files",
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
      name: "create-domain-association",
      description:
        "Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--domain-name",
          description: "The domain name for the domain association",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-auto-sub-domain",
          description:
            "Enables the automated creation of subdomains for branches",
        },
        {
          name: "--no-enable-auto-sub-domain",
          description:
            "Enables the automated creation of subdomains for branches",
        },
        {
          name: "--sub-domain-settings",
          description: "The setting for the subdomain",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--auto-sub-domain-creation-patterns",
          description:
            "Sets the branch patterns for automatic subdomain creation",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--auto-sub-domain-iam-role",
          description:
            "The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains",
          args: {
            name: "string",
            generators: generators.listIamRoleArns,
          },
        },
        {
          name: "--certificate-settings",
          description:
            "The type of SSL/TLS certificate to use for your custom domain. If you don't specify a certificate type, Amplify uses the default certificate that it provisions and manages for you",
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
      name: "create-webhook",
      description: "Creates a new webhook on an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name for a branch that is part of an Amplify app",
          args: {
            name: "string",
            generators: generators.listBranchNames,
          },
        },
        {
          name: "--description",
          description: "The description for a webhook",
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
      name: "delete-app",
      description: "Deletes an existing Amplify app specified by an app ID",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
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
      name: "delete-backend-environment",
      description:
        "Deletes a backend environment for an Amplify app.  This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn\u2019t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code",
      options: [
        {
          name: "--app-id",
          description: "The unique ID of an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--environment-name",
          description: "The name of a backend environment of an Amplify app",
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
      name: "delete-branch",
      description: "Deletes a branch for an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name of the branch",
          args: {
            name: "string",
            generators: generators.listBranchNames,
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
      name: "delete-domain-association",
      description: "Deletes a domain association for an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique id for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--domain-name",
          description: "The name of the domain",
          args: {
            name: "string",
            generators: generators.listDomainNames,
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
      name: "delete-job",
      description: "Deletes a job for a branch of an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name of the branch to use for the job",
          args: {
            name: "string",
            generators: generators.listBranchNames,
          },
        },
        {
          name: "--job-id",
          description: "The unique ID for the job",
          args: {
            name: "string",
            generators: generators.listJobIds,
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
      name: "delete-webhook",
      description: "Deletes a webhook",
      options: [
        {
          name: "--webhook-id",
          description: "The unique ID for a webhook",
          args: {
            name: "string",
            generators: generators.listWebhookIds,
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
      name: "generate-access-logs",
      description:
        "Returns the website access logs for a specific time range using a presigned URL",
      options: [
        {
          name: "--start-time",
          description:
            "The time at which the logs should start. The time range specified is inclusive of the start time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The time at which the logs should end. The time range specified is inclusive of the end time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--domain-name",
          description: "The name of the domain",
          args: {
            name: "string",
            generators: generators.listDomainNames,
          },
        },
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
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
      name: "get-app",
      description: "Returns an existing Amplify app specified by an app ID",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
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
      name: "get-artifact-url",
      description:
        "Returns the artifact info that corresponds to an artifact id",
      options: [
        {
          name: "--artifact-id",
          description: "The unique ID for an artifact",
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
      name: "get-backend-environment",
      description:
        "Returns a backend environment for an Amplify app.  This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn\u2019t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code",
      options: [
        {
          name: "--app-id",
          description: "The unique id for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--environment-name",
          description: "The name for the backend environment",
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
      name: "get-branch",
      description: "Returns a branch for an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name of the branch",
          args: {
            name: "string",
            generators: generators.listBranchNames,
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
      name: "get-domain-association",
      description: "Returns the domain information for an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique id for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--domain-name",
          description: "The name of the domain",
          args: {
            name: "string",
            generators: generators.listDomainNames,
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
      name: "get-job",
      description: "Returns a job for a branch of an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name of the branch to use for the job",
          args: {
            name: "string",
            generators: generators.listBranchNames,
          },
        },
        {
          name: "--job-id",
          description: "The unique ID for the job",
          args: {
            name: "string",
            generators: generators.listJobIds,
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
      name: "get-webhook",
      description:
        "Returns the webhook information that corresponds to a specified webhook ID",
      options: [
        {
          name: "--webhook-id",
          description: "The unique ID for a webhook",
          args: {
            name: "string",
            generators: generators.listWebhookIds,
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
      name: "list-apps",
      description: "Returns a list of the existing Amplify apps",
      options: [
        {
          name: "--next-token",
          description:
            "A pagination token. If non-null, the pagination token is returned in a result. Pass its value in another request to retrieve more entries",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of records to list in a single response",
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
      name: "list-artifacts",
      description:
        "Returns a list of artifacts for a specified app, branch, and job",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name of a branch that is part of an Amplify app",
          args: {
            name: "string",
            generators: generators.listBranchNames,
          },
        },
        {
          name: "--job-id",
          description: "The unique ID for a job",
          args: {
            name: "string",
            generators: generators.listJobIds,
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token. Set to null to start listing artifacts from start. If a non-null pagination token is returned in a result, pass its value in here to list more artifacts",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of records to list in a single response",
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
      name: "list-backend-environments",
      description:
        "Lists the backend environments for an Amplify app.  This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn\u2019t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
            generators: generators.listEnvironmentNames,
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token. Set to null to start listing backend environments from the start. If a non-null pagination token is returned in a result, pass its value in here to list more backend environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of records to list in a single response",
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
      name: "list-branches",
      description: "Lists the branches of an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token. Set to null to start listing branches from the start. If a non-null pagination token is returned in a result, pass its value in here to list more branches",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of records to list in a single response",
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
      name: "list-domain-associations",
      description: "Returns the domain associations for an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listDomainNames,
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token. Set to null to start listing apps from the start. If non-null, a pagination token is returned in a result. Pass its value in here to list more projects",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of records to list in a single response",
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
      name: "list-jobs",
      description: "Lists the jobs for a branch of an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name of the branch to use for the request",
          args: {
            name: "string",
            generators: generators.listBranchNames,
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token. Set to null to start listing steps from the start. If a non-null pagination token is returned in a result, pass its value in here to list more steps",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of records to list in a single response",
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
      name: "list-tags-for-resource",
      description:
        "Returns a list of tags for a specified Amazon Resource Name (ARN)",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) to use to list tags",
          args: {
            name: "string",
            generators: generators.listAmplifyAppArns,
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
      name: "list-webhooks",
      description: "Returns a list of webhooks for an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token. Set to null to start listing webhooks from the start. If non-null,the pagination token is returned in a result. Pass its value in here to list more webhooks",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of records to list in a single response",
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
      name: "start-deployment",
      description:
        "Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a Git repository.  The maximum duration between the CreateDeployment call and the StartDeployment call cannot exceed 8 hours. If the duration exceeds 8 hours, the StartDeployment call and the associated Job will fail",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name of the branch to use for the deployment job",
          args: {
            name: "string",
            generators: generators.listBranchNames,
          },
        },
        {
          name: "--job-id",
          description:
            "The job ID for this deployment that is generated by the CreateDeployment request",
          args: {
            name: "string",
            generators: generators.listJobIds,
          },
        },
        {
          name: "--source-url",
          description:
            "The source URL for the deployment that is used when calling StartDeployment without CreateDeployment. The source URL can be either an HTTP GET URL that is publicly accessible and downloads a single .zip file, or an Amazon S3 bucket and prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-url-type",
          description:
            "The type of source specified by the sourceURL. If the value is ZIP, the source is a .zip file. If the value is BUCKET_PREFIX, the source is an Amazon S3 bucket and prefix. If no value is specified, the default is ZIP",
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
      name: "start-job",
      description: "Starts a new job for a branch of an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name of the branch to use for the job",
          args: {
            name: "string",
            generators: generators.listBranchNames,
          },
        },
        {
          name: "--job-id",
          description:
            "The unique ID for an existing job. This is required if the value of jobType is RETRY",
          args: {
            name: "string",
            generators: generators.listJobIds,
          },
        },
        {
          name: "--job-type",
          description:
            "Describes the type for the job. The job type RELEASE starts a new job with the latest change from the specified branch. This value is available only for apps that are connected to a repository.  The job type RETRY retries an existing job. If the job type value is RETRY, the jobId is also required",
          args: {
            name: "string",
            suggestions: ["RELEASE", "RETRY", "MANUAL", "WEB_HOOK"],
          },
        },
        {
          name: "--job-reason",
          description: "A descriptive reason for starting the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-id",
          description:
            "The commit ID from a third-party repository provider for the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-message",
          description:
            "The commit message from a third-party repository provider for the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-time",
          description: "The commit date and time for the job",
          args: {
            name: "timestamp",
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
      name: "stop-job",
      description:
        "Stops a job that is in progress for a branch of an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name of the branch to use for the stop job request",
          args: {
            name: "string",
            generators: generators.listBranchNames,
          },
        },
        {
          name: "--job-id",
          description: "The unique id for the job",
          args: {
            name: "string",
            generators: generators.listJobIds,
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
      name: "tag-resource",
      description: "Tags the resource with a tag key and value",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) to use to tag a resource",
          args: {
            name: "string",
            generators: generators.listAmplifyAppArns,
          },
        },
        {
          name: "--tags",
          description: "The tags used to tag the resource",
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
      description:
        "Untags a resource with a specified Amazon Resource Name (ARN)",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) to use to untag a resource",
          args: {
            name: "string",
            generators: generators.listAmplifyAppArns,
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys to use to untag a resource",
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
      name: "update-app",
      description: "Updates an existing Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--name",
          description: "The name for an Amplify app",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for an Amplify app",
          args: {
            name: "string",
          },
        },
        {
          name: "--platform",
          description:
            "The platform for the Amplify app. For a static app, set the platform type to WEB. For a dynamic server-side rendered (SSR) app, set the platform type to WEB_COMPUTE. For an app requiring Amplify Hosting's original SSR support only, set the platform type to WEB_DYNAMIC. If you are deploying an SSG only app with Next.js version 14 or later, you must set the platform type to WEB_COMPUTE",
          args: {
            name: "string",
            suggestions: ["WEB"],
          },
        },
        {
          name: "--iam-service-role-arn",
          description:
            "The AWS Identity and Access Management (IAM) service role for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyServiceRoles,
          },
        },
        {
          name: "--environment-variables",
          description: "The environment variables for an Amplify app",
          args: {
            name: "map",
          },
        },
        {
          name: "--enable-branch-auto-build",
          description: "Enables branch auto-building for an Amplify app",
        },
        {
          name: "--no-enable-branch-auto-build",
          description: "Enables branch auto-building for an Amplify app",
        },
        {
          name: "--enable-branch-auto-deletion",
          description:
            "Automatically disconnects a branch in the Amplify console when you delete a branch from your Git repository",
        },
        {
          name: "--no-enable-branch-auto-deletion",
          description:
            "Automatically disconnects a branch in the Amplify console when you delete a branch from your Git repository",
        },
        {
          name: "--enable-basic-auth",
          description: "Enables basic authorization for an Amplify app",
        },
        {
          name: "--no-enable-basic-auth",
          description: "Enables basic authorization for an Amplify app",
        },
        {
          name: "--basic-auth-credentials",
          description:
            "The basic authorization credentials for an Amplify app. You must base64-encode the authorization credentials and provide them in the format user:password",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-rules",
          description:
            "The custom redirect and rewrite rules for an Amplify app",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--build-spec",
          description:
            "The build specification (build spec) for an Amplify app",
          args: {
            name: "string",
            generators: generators.listBuildSpecForApp,
          },
        },
        {
          name: "--custom-headers",
          description: "The custom HTTP headers for an Amplify app",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-auto-branch-creation",
          description: "Enables automated branch creation for an Amplify app",
        },
        {
          name: "--no-enable-auto-branch-creation",
          description: "Enables automated branch creation for an Amplify app",
        },
        {
          name: "--auto-branch-creation-patterns",
          description:
            "Describes the automated branch creation glob patterns for an Amplify app",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--auto-branch-creation-config",
          description:
            "The automated branch creation configuration for an Amplify app",
          args: {
            name: "structure",
          },
        },
        {
          name: "--repository",
          description: "The name of the Git repository for an Amplify app",
          args: {
            name: "string",
          },
        },
        {
          name: "--oauth-token",
          description:
            "The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored. Use oauthToken for repository providers other than GitHub, such as Bitbucket or CodeCommit. To authorize access to GitHub as your repository provider, use accessToken. You must specify either oauthToken or accessToken when you update an app. Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see Migrating an existing OAuth app to the Amplify GitHub App in the Amplify User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-token",
          description:
            "The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored. Use accessToken for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use oauthToken. You must specify either accessToken or oauthToken when you update an app. Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see Migrating an existing OAuth app to the Amplify GitHub App in the Amplify User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cache-config",
          description: "The cache configuration for the Amplify app",
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
      name: "update-branch",
      description: "Updates a branch for an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name of the branch",
          args: {
            name: "string",
            generators: generators.listBranchNames,
          },
        },
        {
          name: "--description",
          description: "The description for the branch",
          args: {
            name: "string",
          },
        },
        {
          name: "--framework",
          description: "The framework for the branch",
          args: {
            name: "string",
            generators: generators.listFrameworkForApp,
          },
        },
        {
          name: "--stage",
          description: "Describes the current stage for the branch",
          args: {
            name: "string",
            suggestions: branchStages,
          },
        },
        {
          name: "--enable-notification",
          description: "Enables notifications for the branch",
        },
        {
          name: "--no-enable-notification",
          description: "Enables notifications for the branch",
        },
        {
          name: "--enable-auto-build",
          description: "Enables auto building for the branch",
        },
        {
          name: "--no-enable-auto-build",
          description: "Enables auto building for the branch",
        },
        {
          name: "--environment-variables",
          description: "The environment variables for the branch",
          args: {
            name: "map",
          },
        },
        {
          name: "--basic-auth-credentials",
          description:
            "The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format user:password",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-basic-auth",
          description: "Enables basic authorization for the branch",
        },
        {
          name: "--no-enable-basic-auth",
          description: "Enables basic authorization for the branch",
        },
        {
          name: "--enable-performance-mode",
          description:
            "Enables performance mode for the branch. Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out",
        },
        {
          name: "--no-enable-performance-mode",
          description:
            "Enables performance mode for the branch. Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out",
        },
        {
          name: "--build-spec",
          description: "The build specification (build spec) for the branch",
          args: {
            name: "string",
            generators: generators.listBuildSpecForApp,
          },
        },
        {
          name: "--ttl",
          description:
            "The content Time to Live (TTL) for the website in seconds",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The display name for a branch. This is used as the default domain prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-pull-request-preview",
          description: "Enables pull request previews for this branch",
        },
        {
          name: "--no-enable-pull-request-preview",
          description: "Enables pull request previews for this branch",
        },
        {
          name: "--pull-request-environment-name",
          description: "The Amplify environment name for the pull request",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-arn",
          description:
            "The Amazon Resource Name (ARN) for a backend environment that is part of a Gen 1 Amplify app.  This field is available to Amplify Gen 1 apps only where the backend is created using Amplify Studio or the Amplify command line interface (CLI)",
          args: {
            name: "string",
            generators: generators.listEnvironmentArns,
          },
        },
        {
          name: "--backend",
          description:
            "The backend for a Branch of an Amplify app. Use for a backend created from an CloudFormation stack. This field is available to Amplify Gen 2 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code",
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
      name: "update-domain-association",
      description: "Creates a new domain association for an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The unique ID for an Amplify app",
          args: {
            name: "string",
            generators: generators.listAmplifyAppIds,
          },
        },
        {
          name: "--domain-name",
          description: "The name of the domain",
          args: {
            name: "string",
            generators: generators.listDomainNames,
          },
        },
        {
          name: "--enable-auto-sub-domain",
          description:
            "Enables the automated creation of subdomains for branches",
        },
        {
          name: "--no-enable-auto-sub-domain",
          description:
            "Enables the automated creation of subdomains for branches",
        },
        {
          name: "--sub-domain-settings",
          description: "Describes the settings for the subdomain",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--auto-sub-domain-creation-patterns",
          description:
            "Sets the branch patterns for automatic subdomain creation",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-sub-domain-iam-role",
          description:
            "The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains",
          args: {
            name: "string",
            isVariadic: true,
            generators: generators.listIamRoleArns,
          },
        },
        {
          name: "--certificate-settings",
          description:
            "The type of SSL/TLS certificate to use for your custom domain",
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
      name: "update-webhook",
      description: "Updates a webhook",
      options: [
        {
          name: "--webhook-id",
          description: "The unique ID for a webhook",
          args: {
            name: "string",
            generators: generators.listWebhookIds,
          },
        },
        {
          name: "--branch-name",
          description: "The name for a branch that is part of an Amplify app",
          args: {
            name: "string",
            generators: generators.listAllBranches,
          },
        },
        {
          name: "--description",
          description: "The description for a webhook",
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
};
export default completionSpec;
