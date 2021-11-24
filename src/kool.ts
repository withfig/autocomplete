const getScripts: Fig.Generator = {
  script: "kool run --help",
  postProcess: (output) => {
    const lines = output.split("\n");
    const scriptsIndex = lines.findIndex(
      (line) => line.trim() === "Available Scripts:"
    );

    return lines.slice(scriptsIndex + 1).map((line) => ({
      name: line.trim(),
      description: "Script",
    }));
  },
};

const getServices: Fig.Generator = {
  script: "docker-compose config --services",
  splitOn: "\n",
};

const completionSpec: Fig.Spec = {
  name: "kool",
  description: "Cloud and docker environments made easy",
  subcommands: [
    {
      name: "create",
      description: "Create a new project using a preset",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for create",
          displayName: "help",
        },
      ],
      args: [
        {
          name: "preset",
          description: "Preset that will be used to create the project",
        },
        {
          name: "folder",
          description: "Folder where the project will be created",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy a local application to a Kool Cloud environment",
      subcommands: [
        {
          name: "destroy",
          description: "Destroy an environment deployed to Kool Cloud",
          options: [
            {
              name: "--verbose",
              description: "Increases output verbosity",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for destroy",
              displayName: "help",
            },
          ],
        },
        {
          name: "exec",
          description:
            "Execute a command inside a running service container deployed to Kool Cloud",
          options: [
            {
              name: "--verbose",
              description: "Increases output verbosity",
              displayName: "verbose",
            },
            {
              name: ["--container", "-c"],
              description: "Container target",
              displayName: "container",
              args: { name: "container", default: "default" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for exec",
              displayName: "help",
            },
          ],
        },
        {
          name: "logs",
          description:
            "See the logs of running service container deployed to Kool Cloud",
          options: [
            {
              name: "--verbose",
              description: "Increases output verbosity",
              displayName: "verbose",
            },
            {
              name: ["--container", "-c"],
              description: "Container target",
              displayName: "container",
              args: { name: "container", default: "default" },
            },
            {
              name: ["--follow", "-f"],
              description: "Follow log output",
              displayName: "follow",
            },
            {
              name: ["--tail", "-t"],
              description:
                "Number of lines to show from the end of the logs for each container. A value equal to 0 will show all lines",
              displayName: "tail",
              args: { name: "tail", default: "25" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for logs",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for deploy",
          displayName: "help",
        },
      ],
    },
    {
      name: "docker",
      description: "Create a new container (a powered up 'docker run')",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: ["--env", "-e"],
          description: "Environment variables",
          isRepeatable: true,
          displayName: "env",
          args: { name: "env" },
        },
        {
          name: ["--network", "-n"],
          description: "Connect a container to a network",
          isRepeatable: true,
          displayName: "network",
          args: { name: "network" },
        },
        {
          name: ["--publish", "-p"],
          description: "Publish a container's port(s) to the host",
          isRepeatable: true,
          displayName: "publish",
          args: { name: "publish" },
        },
        {
          name: ["--volume", "-v"],
          description: "Bind mount a volume",
          isRepeatable: true,
          displayName: "volume",
          args: { name: "volume" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for docker",
          displayName: "help",
        },
      ],
      args: [
        {
          name: "image",
          description: "Docker image",
        },
        {
          name: "command",
          description: "Command to execute inside the container",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "exec",
      description: "Execute a command inside a running service container",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: ["--detach", "-d"],
          description: "Detached mode: Run command in the background",
          displayName: "detach",
        },
        {
          name: ["--env", "-e"],
          description: "Environment variables",
          isRepeatable: true,
          displayName: "env",
          args: { name: "env" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for exec",
          displayName: "help",
        },
      ],
      args: [
        {
          name: "service",
          description: "Service you want to execute a command",
        },
        {
          name: "command",
          description: "Command to execute inside the container",
          isVariadic: true,
        },
      ],
    },
    {
      name: "info",
      description: "Print out information about the local environment",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for info",
          displayName: "help",
        },
      ],
    },
    {
      name: "logs",
      description: "Display log output from running service containers",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: ["--follow", "-f"],
          description: "Follow log output",
          displayName: "follow",
        },
        {
          name: ["--tail", "-t"],
          description:
            "Number of lines to show from the end of the logs for each container. A value equal to 0 will show all lines",
          displayName: "tail",
          args: { name: "tail", default: "25" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for logs",
          displayName: "help",
        },
      ],
      args: {
        name: "service",
        description: "Service to get logs from",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "preset",
      description:
        "Install configuration files customized for Kool in the current directory",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for preset",
          displayName: "help",
        },
      ],
      args: {
        name: "preset",
        description: "Preset that will be used to configure the project",
      },
    },
    {
      name: "recipe",
      description:
        "Adds configuration for some recipe in the current work directory",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for recipe",
          displayName: "help",
        },
      ],
      args: {
        name: "recipe",
        description: "Recipe that will be used to add configuration",
      },
    },
    {
      name: "restart",
      description:
        "Restart running service containers (the same as 'kool stop' followed by 'kool start')",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: "--purge",
          description:
            "Remove all persistent data from volume mounts on containers",
          displayName: "purge",
        },
        {
          name: "--rebuild",
          description: "Updates and builds service's images",
          displayName: "rebuild",
        },
        {
          name: ["--help", "-h"],
          description: "Help for restart",
          displayName: "help",
        },
      ],
      args: {
        name: "service",
        description: "Service you want to restart",
        isOptional: true,
        isVariadic: true,
        generators: getServices,
      },
    },
    {
      name: "run",
      description: "Execute a script defined in kool.yml",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: ["--env", "-e"],
          description: "Environment variables",
          isRepeatable: true,
          displayName: "env",
          args: { name: "env" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for run",
          displayName: "help",
        },
      ],
      args: {
        name: "script",
        description: "Script to be executed",
        generators: getScripts,
      },
    },
    {
      name: "self-update",
      description: "Update kool to the latest version",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for self-update",
          displayName: "help",
        },
      ],
    },
    {
      name: "share",
      description:
        "Live share your local environment on the Internet using an HTTP tunnel",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: "--port",
          description:
            "The port from the target service that should be shared. If not provided, it will default to port 80",
          displayName: "port",
          args: { name: "port", default: "0" },
        },
        {
          name: "--service",
          description:
            "The name of the local service container you want to share",
          displayName: "service",
          args: { name: "service", default: "app" },
        },
        {
          name: "--subdomain",
          description:
            "The subdomain used to generate your public https://subdomain.kool.live URL",
          displayName: "subdomain",
          args: { name: "subdomain" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for share",
          displayName: "help",
        },
      ],
    },
    {
      name: "start",
      description: "Start service containers defined in docker-compose.yml",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: ["--foreground", "-f"],
          description: "Start containers in foreground mode",
          displayName: "foreground",
        },
        {
          name: "--profile",
          description: "Specify a profile to enable",
          displayName: "profile",
          args: { name: "profile" },
        },
        {
          name: ["--rebuild", "-b"],
          description: "Updates and builds service's images",
          displayName: "rebuild",
        },
        {
          name: ["--help", "-h"],
          description: "Help for start",
          displayName: "help",
        },
      ],
      args: {
        name: "service",
        description: "Service you want to start",
        isOptional: true,
        isVariadic: true,
        generators: getServices,
      },
    },
    {
      name: "status",
      description: "Show the status of all service containers",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for status",
          displayName: "help",
        },
      ],
    },
    {
      name: "stop",
      description: "Stop and destroy running service containers",
      options: [
        {
          name: "--verbose",
          description: "Increases output verbosity",
          displayName: "verbose",
        },
        {
          name: "--purge",
          description:
            "Remove all persistent data from volume mounts on containers",
          displayName: "purge",
        },
        {
          name: ["--help", "-h"],
          description: "Help for stop",
          displayName: "help",
        },
      ],
      args: {
        name: "service",
        description: "Service you want to stop",
        isOptional: true,
        isVariadic: true,
        generators: getServices,
      },
    },
  ],
  options: [
    {
      name: "--verbose",
      description: "Increases output verbosity",
      displayName: "verbose",
    },
    {
      name: ["--help", "-h"],
      description: "Help for kool",
      displayName: "help",
    },
  ],
};

export default completionSpec;
