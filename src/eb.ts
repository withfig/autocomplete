const generateNames: Fig.Generator = {
  script: ["eb", "list"],
  postProcess: (str) => {
    const lines: string[] = str
      .trim()
      .split("\n")
      .map((line) => line.trim());
    return lines.map((line) => ({
      name: line.startsWith("*") ? line.slice(1).trim() : line,
    }));
  },
};

const completionSpec: Fig.Spec = {
  name: "eb",
  description: "AWS Elastic Beanstalk",
  subcommands: [
    {
      name: "init",
      description: "Initialize a new AWS Elastic Beanstalk application",
      args: {
        name: "name",
        description: "The name of the application",
      },
      options: [
        {
          name: ["-i", "--interactive"],
          description:
            "Forces EB CLI to prompt you to provide a value for every eb init command option",
        },
        {
          name: ["-k", "--keyname"],
          description: "The name of the AWS EC2 key pair",
          args: {
            name: "keyname",
          },
        },
        {
          name: "--modules",
          description: "List of child directories to initialize",
        },
        {
          name: ["-p", "--platform"],
          description: "The platform version to use",
          args: {
            name: "plataform-version",
          },
        },
        {
          name: "--tags",
          description: "List of tags to apply to the application",
          args: {
            name: "key=value",
          },
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Deploys the application source bundle from the initialized project directory to the running application",
      args: {
        name: "environment-name",
        generators: generateNames,
      },
      options: [
        {
          name: ["-l", "--label"],
          description:
            "Specify a label to use for the version that the EB CLI creates",
          args: {
            name: "version-label",
            description: "The label to use for the version",
          },
        },
        {
          name: "--env-group-suffix",
          description: "Group name to append to the environment name",
          args: {
            name: "groupname",
            description: "The group name to append to the environment name",
          },
        },
        {
          name: ["-m", "--message"],
          description:
            "The description for the application version, enclosed in double quotation marks",
          args: {
            name: "version-description",
            description: "Description for the application version",
          },
        },
        {
          name: "--modules",
          description:
            "List of components to update. Only for Compose Environments",
          args: {
            name: "component",
            description: "Component to update",
          },
        },
        {
          name: ["-p", "--platform"],
          description:
            "Preprocess and validate the environment manifest and configuration files in the source bundle",
        },
        {
          name: "--source",
          description: "CodeCommit repository and branch",
          args: {
            name: "repository-name/repository-branch",
            description: "The name of the CodeCommit repository and branch",
          },
        },
        {
          name: "--staged",
          description:
            "Deploy files staged in the git index instead of the HEAD commit",
        },
        {
          name: "--timeout",
          description: "The number of minutes before the command times out",
          args: {
            name: "minutes",
            description: "Minutes before timeout",
          },
        },
        {
          name: "--version",
          description: "An existing application version to deploy",
          args: {
            name: "version-label",
            description: "Label of the existing version to deploy",
          },
        },
      ],
    },
    {
      name: "abort",
      description: "Abort the current running process",
    },
    {
      name: "clone",
      description:
        "Clones an environment to a new environment so that both have identical environment settings",
      args: {
        name: "environment-name",
        description: "The name of the environment to clone",
        generators: generateNames,
      },
      options: [
        {
          name: ["-n", "--clone_name"],
          description: "Desired name for the cloned environment",
          args: {
            name: "string",
            description: "The name for the cloned environment",
          },
        },
        {
          name: ["-c", "--cname"],
          description: "Desired CNAME prefix for the cloned environment",
          args: {
            name: "cname",
            description: "CNAME prefix",
          },
        },
        {
          name: "--envvars",
          description:
            "Environment properties in a comma-separated list with the format name=value",
        },
        {
          name: "--exact",
          description:
            "Prevents Elastic Beanstalk from updating the solution stack version for the new clone environment to the most recent version available",
        },
        {
          name: "--scale",
          description:
            "The number of instances to run in the clone environment when it is launched",
          args: {
            name: "number",
            description: "Number of instances",
          },
        },
        {
          name: "--tags",
          description:
            "Tags for the resources in your environment in a comma-separated list with the format name=value",
          args: {
            name: "name=value",
            description: "Tags for the resources in your environment",
          },
        },
        {
          name: "--timeout",
          description: "The number of minutes before the command times out",
        },
      ],
    },
    {
      name: "open",
      description:
        "Opens the public URL of your website in the default browser",
      args: {
        name: "environment-name",
        description: "The name of the environment to open",
        generators: generateNames,
      },
    },
    {
      name: "list",
      description: "List environments",
      options: [
        {
          name: ["-a", "--all"],
          description: "List all environments from all applications",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Provides more detailed information about all environments, including instances",
        },
      ],
    },
    {
      name: "printenv",
      description:
        "Prints all the environment properties in the command window",
      args: {
        name: "environment-name",
        description: "The name of the environment to print",
        generators: generateNames,
      },
    },
    {
      name: "ssh",
      description:
        "Connect to a Linux Amazon EC2 instance in your environment using Secure Shell",
      args: {
        name: "environment-name",
        description: "The name of the environment to connect to",
        generators: generateNames,
      },
      options: [
        {
          name: ["-i", "--instance"],
          description: "The ID of the instance to connect to",
        },
        {
          name: ["-n", "--number"],
          description: "The number of the instance to connect to by number",
        },
        {
          name: ["-o", "--keep_open"],
          description:
            "Leave port 22 open on the security group after the SSH session ends",
        },
        {
          name: "--command",
          description:
            "Execute a shell command on the specified instance instead of starting an SSH session",
        },
        {
          name: "--custom",
          description:
            "Specify an SSH command to use instead of 'ssh -i keyfile'. Do not include the remote user and hostname",
        },
        {
          name: "--setup",
          description:
            "Change the key pair assigned to the environment's instances",
        },
        {
          name: "--force",
          description:
            "Open port 22 to incoming traffic from 0.0.0.0/0 in the environment's security group, even if the security group is already configured for SSH",
        },
        {
          name: "--timeout",
          description: "Set number of minutes before the command times out",
          args: {
            name: "minutes",
            description: "Number of minutes before timeout",
          },
        },
      ],
    },
    {
      name: "use",
      description: "Sets the specified environment as the default environment",
      args: {
        name: "environment-name",
        description: "The name of the environment to use",
        generators: generateNames,
      },
      options: [
        {
          name: ["-r", "--region"],
          description: "Change the region in which you create environments",
          args: {
            name: "region",
            description: "The region to use",
          },
        },
        {
          name: "--source",
          description: "CodeCommit repository and branch",
          args: {
            name: "codecommit/repository-name/repository-branch",
            description: "The name of the CodeCommit repository and branch",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
