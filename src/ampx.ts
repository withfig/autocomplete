const completionSpec: Fig.Spec = {
  name: "ampx",
  description: "CLI for Amplify Gen 2",
  subcommands: [
    {
      name: "sandbox",
      description: "Deploy to your personal cloud sandbox",
      options: [
        {
          name: "--dir-to-watch",
          description: "Directory to watch for file changes",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--exclude",
          description: "Paths or glob patterns to ignore",
          isRepeatable: true,
          args: { name: "pattern" },
        },
        {
          name: "--identifier",
          description: "Name to distinguish between sandbox environments",
          args: { name: "name" },
        },
        {
          name: "--outputs-out-dir",
          description: "Directory where client config file is written",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--outputs-format",
          description: "Format of the client config file",
          args: { name: "format", suggestions: ["json", "dart"] },
        },
        {
          name: "--outputs-version",
          description: "Version of the configuration",
          args: { name: "version", suggestions: ["0", "1"] },
        },
        {
          name: "--profile",
          description: "AWS profile name",
          args: { name: "profile" },
        },
        {
          name: "--stream-function-logs",
          description: "Stream function execution logs",
          args: { name: "boolean", suggestions: ["true", "false"] },
        },
        {
          name: "--logs-filter",
          description: "Regex pattern to filter logs",
          isRepeatable: true,
          args: { name: "pattern" },
        },
        {
          name: "--logs-out-file",
          description: "File to append streaming logs",
          args: { name: "file", template: "filepaths" },
        },
      ],
      subcommands: [
        {
          name: "delete",
          description: "Delete your personal cloud sandbox",
          options: [
            {
              name: "--name",
              description: "Name to distinguish between sandbox environments",
              args: { name: "name" },
            },
            {
              name: "--profile",
              description: "AWS profile name",
              args: { name: "profile" },
            },
            {
              name: ["-y", "--yes"],
              description: "Do not ask for confirmation before deleting",
            },
          ],
        },
        {
          name: "secret",
          description: "Manage backend secrets for your personal cloud sandbox",
          subcommands: [
            {
              name: "set",
              description: "Set a secret",
              args: { name: "secret_name" },
              options: [
                {
                  name: "--profile",
                  description: "AWS profile name",
                  args: { name: "profile" },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a secret",
              args: { name: "secret_name" },
              options: [
                {
                  name: "--profile",
                  description: "AWS profile name",
                  args: { name: "profile" },
                },
              ],
            },
            {
              name: "list",
              description: "List all available secrets",
              options: [
                {
                  name: "--profile",
                  description: "AWS profile name",
                  args: { name: "profile" },
                },
              ],
            },
            {
              name: "get",
              description: "View details of a secret",
              args: { name: "secret_name" },
              options: [
                {
                  name: "--profile",
                  description: "AWS profile name",
                  args: { name: "profile" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "generate",
      description: "Generate supplemental information or code",
      subcommands: [
        {
          name: "outputs",
          description: "Generate backend outputs file",
          options: [
            {
              name: "--profile",
              description: "AWS profile name",
              args: { name: "profile" },
            },
            {
              name: "--format",
              description: "Format of the configuration",
              args: { name: "format", suggestions: ["json", "dart"] },
            },
            {
              name: "--out-dir",
              description: "Directory where config is written",
              args: { name: "directory", template: "folders" },
            },
            {
              name: "--outputs-version",
              description: "Version of the configuration",
              args: { name: "version", suggestions: ["0", "1"] },
            },
          ],
        },
        {
          name: "graphql-client-code",
          description: "Generate GraphQL statements and types",
          options: [
            {
              name: "--out",
              description: "Directory where config is written",
              args: { name: "directory", template: "folders" },
            },
            {
              name: "--format",
              description: "Format of the GraphQL client code",
              args: {
                name: "format",
                suggestions: ["modelgen", "graphql-codegen", "introspection"],
              },
            },
            {
              name: "--model-target",
              description: "Modelgen export target",
              args: {
                name: "target",
                suggestions: [
                  "java",
                  "swift",
                  "javascript",
                  "typescript",
                  "dart",
                ],
              },
            },
            {
              name: "--statement-target",
              description: "Graphql codegen statement export target",
              args: {
                name: "target",
                suggestions: [
                  "javascript",
                  "graphql",
                  "flow",
                  "typescript",
                  "angular",
                ],
              },
            },
            {
              name: "--type-target",
              description: "Graphql-codegen type export target",
              args: {
                name: "target",
                suggestions: [
                  "json",
                  "swift",
                  "typescript",
                  "flow",
                  "scala",
                  "flow-modern",
                  "angular",
                ],
              },
            },
            {
              name: "--all",
              description: "Show hidden options",
            },
            {
              name: "--profile",
              description: "AWS profile name",
              args: { name: "profile" },
            },
            {
              name: "--debug",
              description: "Print debug logs to the console",
            },
          ],
        },
        {
          name: "forms",
          description: "Generate React form components",
          options: [
            {
              name: "--out-dir",
              description: "Directory where generated forms are written",
              args: { name: "directory", template: "folders" },
            },
            {
              name: "--models",
              description: "Model names to generate",
              isRepeatable: true,
              args: { name: "model" },
            },
            {
              name: "--profile",
              description: "AWS profile name",
              args: { name: "profile" },
            },
          ],
        },
      ],
      options: [
        {
          name: "--stack",
          description: "CloudFormation stack name",
          args: { name: "stack_name" },
        },
        {
          name: "--app-id",
          description: "Amplify App ID",
          args: { name: "app_id" },
        },
        {
          name: "--branch",
          description: "Git branch name",
          args: { name: "branch_name" },
        },
        {
          name: "--profile",
          description: "AWS profile name",
          args: { name: "profile" },
        },
      ],
    },
    {
      name: "info",
      description: "Generate system information for troubleshooting",
    },
    {
      name: "pipeline-deploy",
      description: "Deploy Amplify project in a CI/CD pipeline",
      options: [
        {
          name: "--branch",
          description: "Name of the git branch being deployed",
          args: { name: "branch_name" },
        },
        {
          name: "--app-id",
          description: "The app id of the target Amplify app",
          args: { name: "app_id" },
        },
        {
          name: "--outputs-out-dir",
          description: "Directory where client config file is written",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--outputs-version",
          description: "Version of the configuration",
          args: { name: "version", suggestions: ["0", "1"] },
        },
      ],
    },
  ],
  options: [
    {
      name: "--help",
      description: "Display help information",
    },
    {
      name: "--version",
      description: "Display version information",
    },
    {
      name: "--profile",
      description: "AWS profile name",
      args: { name: "profile" },
    },
  ],
};

export default completionSpec;
