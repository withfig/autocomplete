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
          name: "--source codecommit/",
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
            description: "Minutes before timout",
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
      ],
    },
    {
      name: "open",
      description:
        "Opens the public URL of your website in the default browser",
      args: {
        name: "environment-name",
        description: "The name of the environment to open",
      },
    },
  ],
};

export default completionSpec;
