// To learn more about Fig's autocomplete standard visit: https://fig.io/docs/autocomplete/building-a-spec#building-your-first-autocomplete-spec

const Options = {
  awsProfile: {
    name: "--aws-profile",
    description: "AWS profile to use with the command",
    args: {
      name: "profile name",
    },
  },
  function: {
    name: ["--function", "-f"],
    description: "Name of the function",
    args: {
      name: "function",
    },
  },
  region: {
    name: ["--region", "-r"],
    description: "Region of the service",
    args: {
      name: "us-east-1",
    },
  },
  useLocalCredentials: {
    name: "--use-local-credentials",
    description:
      "Rely on locally resolved AWS credentials instead of loading them from Dashboard provider settings (applies only to services integrated with Dashboard)",
  },
  config: {
    name: ["--config", "-c"],
    description: "Path to serverless config file",
    args: {
      name: ".yml file",
    },
  },
  app: {
    name: "--app",
    description: "Dashboard app",
    args: {
      name: "app",
    },
  },
  org: {
    name: "--org",
    description: "Dashboard org",
    args: {
      name: "org",
    },
  },
  help: {
    name: ["--help", "-h"],
    description: "Show help",
  },
  version: {
    name: "--version",
    description: "Show version info",
  },
  stage: {
    name: ["--stage", "-s"],
    description: "Stage of the service",
    args: {
      name: "production",
    },
  },
  verbose: {
    name: ["--verbose", "-v"],
    description: "Show all stack events during deployment",
    args: {
      name: "production",
    },
  },
  package: {
    name: ["--package", "-p"],
    description: "Path of the deployment package",
    args: {
      name: "package",
    },
  },
  conceal: {
    name: "--conceal",
    description: "Hide secrets from the output (e.g. API Gateway key values)",
  },
  qualifier: {
    name: ["--qualifier", "-q"],
    description: "Version number or alias to invoke",
    args: {
      name: "qualifier",
    },
  },
  path: {
    name: ["--path", "-p"],
    description: "Path to JSON or YAML file holding input data",
    args: {
      name: "path",
    },
  },
  type: {
    name: ["--type", "-t"],
    description: "Type of invocation",
    args: {
      name: "type",
    },
  },
  log: {
    name: ["--log", "-l"],
    description: "Trigger logging data output",
  },
  data: {
    name: ["--data", "-d"],
    description: "Input data",
    args: {
      name: "input",
    },
  },
  raw: {
    name: "--raw",
    description: "Flag to pass input data as a raw string",
  },
  context: {
    name: ["--context"],
    description: "Context of the service",
    args: {
      name: "package",
    },
  },
  contextPath: {
    name: ["--contextPath"],
    description: "Path to JSON or YAML file holding context data",
    args: {
      name: "path",
    },
  },
  env: {
    name: ["--env", "-e"],
    description:
      "Override environment variables. e.g. --env VAR1=val1 --env VAR2=val2",
    args: {
      name: "--env VAR1=val1 --env VAR2=val2",
    },
  },
};

export const completion: Fig.Spec = {
  name: "serverless",
  description: "zero-friction serverless development",
  options: [
    {
      name: ["--help"],
      description: "Show help",
    },
  ],
  subcommands: [
    {
      name: "deploy",
      description: "Deploy a Serverless service",
      subcommands: [
        {
          name: "function",
          options: [
            Options.app,
            Options.awsProfile,
            Options.config,
            Options.function,
            Options.help,
            Options.org,
            Options.region,
            Options.stage,
            Options.useLocalCredentials,
            Options.version,
            {
              name: "--force",
              description: "Forces a deployment to take place",
            },
            {
              name: ["--update-config", "-u"],
              description:
                "Updates function configuration, e.g. Timeout or Memory Size without deploying code",
              args: {
                name: "config",
              },
            },
          ],
        },
        {
          name: "list",
          subcommands: [
            {
              name: "functions",
              options: [
                Options.region,
                Options.awsProfile,
                Options.app,
                Options.org,
                Options.useLocalCredentials,
                Options.config,
                Options.stage,
                Options.help,
                Options.version,
              ],
            },
          ],
          options: [
            Options.region,
            Options.awsProfile,
            Options.app,
            Options.org,
            Options.useLocalCredentials,
            Options.config,
            Options.stage,
            Options.help,
            Options.version,
          ],
        },
      ],
      options: [
        Options.conceal,
        Options.package,
        Options.verbose,
        {
          name: "--force",
          description: "Forces a deployment to take place",
        },
        Options.function,
        {
          name: "--aws-s3-accelerate",
          description:
            "Enables S3 Transfer Acceleration making uploading artifacts much faster",
        },
        Options.region,
        Options.awsProfile,
        Options.app,
        Options.org,
        Options.useLocalCredentials,
        Options.config,
        Options.stage,
        Options.help,
        Options.version,
      ],
    },
    {
      name: "info",
      description: "Display information about the service",
      options: [
        Options.conceal,
        Options.region,
        Options.awsProfile,
        Options.app,
        Options.org,
        Options.useLocalCredentials,
        Options.config,
        Options.stage,
        Options.help,
        Options.version,
      ],
    },
    {
      name: "invoke",
      description: "Invoke a deployed function",
      options: [
        { ...Options.function, ...{ required: true } },
        Options.path,
        Options.data,
        Options.raw,
        Options.context,
        Options.contextPath,
        Options.region,
        Options.awsProfile,
        Options.app,
        Options.org,
        Options.useLocalCredentials,
        Options.config,
        Options.stage,
        Options.help,
        Options.version,
      ],
      subcommands: [
        {
          name: "local",
          options: [
            { ...Options.function, ...{ required: true } },
            Options.path,
            Options.data,
            Options.raw,
            Options.context,
            Options.contextPath,
            Options.env,
            Options.region,
            Options.awsProfile,
            Options.app,
            Options.org,
            Options.useLocalCredentials,
            Options.config,
            Options.stage,
            Options.help,
            Options.version,
          ],
        },
      ],
    },
    {
      name: "logs",
      description: "Output the logs of a deployed function",
    },
    {
      name: "metrics",
      description: "Show metrics for a specific function",
    },
    {
      name: "remove",
      description: "Remove Serverless service and all resources",
    },
    {
      name: "rollback",
      description: "Rollback the Serverless service to a specific deployment",
    },
    {
      name: "studio",
      description: "Develop a Serverless application in the cloud",
    },
    {
      name: "test",
      description: "Run HTTP tests",
    },
    {
      name: "package",
      description: "Packages a Serverless service",
    },
    {
      name: "plugin",
      description: "Install/uninstall and add/remove a plugin to your service",
    },
    {
      name: "print",
      description: "Print your compiled and resolved config file",
    },
    {
      name: "create",
      description: "Create new Serverless service",
    },
    {
      name: "dashboard",
      description: "Open the Serverless dashboard",
    },
    {
      name: "generate-event",
      description: "Generate event",
    },
    {
      name: "install",
      description:
        "Install a Serverless service from GitHub or a plugin from the Serverless registry",
    },
    {
      name: "login",
      description: "Login or sign up for Serverless",
    },
    {
      name: "logout",
      description: "Logout from Serverless",
    },
    {
      name: "output",
      description: "Get/list value of dashboard deployment profile parameter",
    },
    {
      name: "param",
      description: "Get/list value of dashboard service output",
    },
    {
      name: "plugin",
      description: "Lists/search plugins",
    },
    {
      name: "slstats",
      description: "Enable or disable stats",
    },
  ],
};
