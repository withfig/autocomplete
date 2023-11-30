import YAML from "yaml";

const options: Record<string, Fig.Option> = {
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
      name: "region",
      suggestions: [
        "us-east-2",
        "us-east-1",
        "us-west-1",
        "us-west-2",
        "af-south-1",
        "ap-east-1",
        "ap-south-1",
        "ap-northeast-3",
        "ap-northeast-2",
        "ap-southeast-1",
        "ap-southeast-2",
        "ap-northeast-1",
        "ca-central-1",
        "cn-north-1",
        "cn-northwest-1",
        "eu-central-1",
        "eu-west-1",
        "eu-west-2",
        "eu-south-1",
        "eu-west-3",
        "eu-north-1",
        "me-south-1",
        "sa-east-1",
        "us-gov-east-1",
        "us-gov-west-1",
      ],
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
      template: "filepaths",
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
      name: "stage",
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
      template: "folders",
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
      template: "filepaths",
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
    name: "--context",
    description: "Context of the service",
    args: {
      name: "package",
    },
  },
  contextPath: {
    name: "--contextPath",
    description: "Path to JSON or YAML file holding context data",
    args: {
      name: "path",
      template: "filepaths",
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

const completionSpec: Fig.Spec = {
  name: "serverless",
  description: "Zero-friction serverless development",
  options: [
    {
      name: "--help",
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
            options.app,
            options.awsProfile,
            options.config,
            options.function,
            options.help,
            options.org,
            options.region,
            options.stage,
            options.useLocalCredentials,
            options.version,
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
                options.region,
                options.awsProfile,
                options.app,
                options.org,
                options.useLocalCredentials,
                options.config,
                options.stage,
                options.help,
                options.version,
              ],
            },
          ],
          options: [
            options.region,
            options.awsProfile,
            options.app,
            options.org,
            options.useLocalCredentials,
            options.config,
            options.stage,
            options.help,
            options.version,
          ],
        },
      ],
      options: [
        options.conceal,
        options.package,
        options.verbose,
        {
          name: "--force",
          description: "Forces a deployment to take place",
        },
        options.function,
        {
          name: "--aws-s3-accelerate",
          description:
            "Enables S3 Transfer Acceleration making uploading artifacts much faster",
        },
        options.region,
        options.awsProfile,
        options.app,
        options.org,
        options.useLocalCredentials,
        options.config,
        options.stage,
        options.help,
        options.version,
      ],
    },
    {
      name: "info",
      description: "Display information about the service",
      options: [
        options.conceal,
        options.region,
        options.awsProfile,
        options.app,
        options.org,
        options.useLocalCredentials,
        options.config,
        options.stage,
        options.help,
        options.version,
      ],
    },
    {
      name: "invoke",
      description: "Invoke a deployed function",
      options: [
        { ...options.function, ...{ isRequired: true } },
        options.path,
        options.data,
        options.raw,
        options.context,
        options.contextPath,
        options.region,
        options.awsProfile,
        options.app,
        options.org,
        options.useLocalCredentials,
        options.config,
        options.stage,
        options.help,
        options.version,
      ],
      subcommands: [
        {
          name: "local",
          options: [
            { ...options.function, ...{ isRequired: true } },
            options.path,
            options.data,
            options.raw,
            options.context,
            options.contextPath,
            options.env,
            options.region,
            options.awsProfile,
            options.app,
            options.org,
            options.useLocalCredentials,
            options.config,
            options.stage,
            options.help,
            options.version,
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
      description: "Package a Serverless service",
    },
    {
      name: "plugin",
      description: "Handle plugins",
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
      name: "slstats",
      description: "Enable or disable stats",
    },
  ],
  generateSpec: async (tokens, executeShellCommand) => {
    const { stdout } = await executeShellCommand({
      command: "cat",
      // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
      args: ["serverless-compose.yml"],
    });
    const servicesObject = YAML.parse(stdout).services;
    const services: string[] = Object.keys(servicesObject);
    // Avoid infinite recursion of generated subcommands
    if (services.includes(tokens[0])) {
      return;
    }

    const subcommands: Fig.Subcommand[] = services.map((service) => ({
      name: service,
      description: tokens.join(","),
      priority: 100,
      loadSpec: "serverless",
      icon: "fig://icon?type=box",
    }));

    if (subcommands.length > 0) {
      return {
        name: "serverless",
        subcommands,
      };
    }
  },
};

export default completionSpec;
