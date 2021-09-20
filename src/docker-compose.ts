const completionSpec: Fig.Spec = {
  name: "docker-compose",
  description: "Define and run multi-container applications with Docker",
  subcommands: [
    {
      name: "build",
      description: "Build or rebuild services",
      loadSpec: "docker/compose-build",
    },
    {
      name: "config",
      description: "Validate and view the Compose file",
      loadSpec: "docker/compose-config",
    },
    {
      name: "create",
      description: "Creates containers for a service",
      loadSpec: "docker/compose-create",
    },
    {
      name: "down",
      description:
        "Stops containers and removes containers, networks, volumes, and images",
      loadSpec: "docker/compose-down",
    },
    {
      name: "events",
      description: "Receive real time events from containers",
      loadSpec: "docker/compose-events",
    },
    {
      name: "exec",
      description: "Execute a command in a running container",
      loadSpec: "docker/compose-exec",
    },
    {
      name: "help",
      description: "Get help on a command",
    },
    {
      name: "images",
      description: "List images used by the created containers",
      loadSpec: "docker/compose-images",
    },
    {
      name: "kill",
      description: "Force stop service containers",
      loadSpec: "docker/compose-kill",
    },
    {
      name: "logs",
      description: "View output from containers",
      loadSpec: "docker/compose-logs",
    },
    {
      name: "pause",
      description: "Pause services",
      loadSpec: "docker/compose-pause",
    },
    {
      name: "port",
      description: "Print the public port for a port binding",
      loadSpec: "docker/compose-port",
    },
    {
      name: "ps",
      description: "List containers",
      loadSpec: "docker/compose-ps",
    },
    {
      name: "pull",
      description:
        "Pulls images for services defined in a Compose file, but does not start the containers",
      loadSpec: "docker/compose-pull",
    },
    {
      name: "push",
      description: "Pushes images for services",
      options: [
        {
          name: "--ignore-push-failures",
          description: "Push what it can and ignores images with push failures",
          args: {},
        },
      ],
    },
    {
      name: "restart",
      description: "Restart running containers",
      loadSpec: "docker/compose-restart",
    },
    {
      name: "rm",
      description: "Removes stopped service containers",
      loadSpec: "docker/compose-rm",
    },
    {
      name: "run",
      description: "Run a one-off command on a service",
      loadSpec: "docker/compose-run",
    },
    {
      name: "scale",
      description: "Set number of containers to run for a service",
      options: [
        {
          name: ["-t", "--timeout"],
          description: "Specify a shutdown timeout in seconds. (default: 10)",
          args: {},
        },
      ],
    },
    {
      name: "start",
      description: "Start existing containers",
      loadSpec: "docker/compose-start",
    },
    {
      name: "stop",
      description: "Stop running containers without removing them",
      loadSpec: "docker/compose-stop",
    },
    {
      name: "top",
      description: "Display the running processes",
    },
    {
      name: "unpause",
      description: "Unpause services",
    },
    {
      name: "up",
      description:
        "Builds, (re)creates, starts, and attaches to containers for a service",
      loadSpec: "docker/compose-up",
    },
    {
      name: "version",
      description: "Show version information and quit",
      options: [
        {
          name: "--short",
          description: "Shows only Compose's version number",
          args: {},
        },
      ],
    },
  ],
  options: [
    {
      args: {
        name: "Docker Compose File",
        generators: {
          template: "filepaths",
          filterTemplateSuggestions: function (paths) {
            const suffix = ".yml";
            return paths.filter((file) => {
              return (
                file.name.indexOf(suffix, this.length - suffix.length) >= 0
              );
            });
          },
        },
      },
      description: "Specify an alternate compose file",
      name: ["-f", "--file"],
    },
    {
      args: {
        name: "string",
      },
      description: "Specify an alternate project name",
      name: ["-p", "--project-name"],
    },
    {
      args: {
        name: "string",
      },
      description: "Specify a profile to enable",
      name: "--profile",
    },
    {
      args: {
        name: "string",
      },
      description: "Specify a context name",
      name: ["-c", "--context"],
    },
    {
      description: "Show more output",
      name: "--verbose",
    },
    {
      args: {
        name: "LEVEL",
      },
      description: "Set log level (DEBUG, INFO, WARNING, ERROR, CRITICAL)",
      name: "--log-level",
    },
    {
      args: {
        name: "(never|always|auto)",
      },
      description: "Control when to print ANSI control characters",
      name: "--ansi",
    },
    {
      description: "Do not print ANSI control characters (DEPRECATED)",
      name: "--no-ansi",
    },
    {
      description: "Print version and exit",
      name: ["-v", "--version"],
    },
    {
      args: {
        name: "HOST",
      },
      description: "Daemon socket to connect to",
      name: ["-H", "--host"],
    },
    {
      description: "Use TLS; implied by --tlsverify",
      name: "--tls",
    },
    {
      args: {
        name: "CA_PATH",
      },
      description: "Trust certs signed only by this CA",
      name: "--tlscacert",
    },
    {
      args: {
        name: "CLIENT_CERT_PATH",
      },
      description: "Path to TLS certificate file",
      name: "--tlscert",
    },
    {
      args: {
        name: "TLS_KEY_PATH",
      },
      description: "Path to TLS key file",
      name: "--tlskey",
    },
    {
      description: "Use TLS and verify the remote",
      name: "--tlsverify",
    },
    {
      description: "Don't check the daemon's hostname against the",
      name: "--skip-hostname-check",
    },
    {
      args: {
        name: "PATH",
      },
      description: "Specify an alternate working directory",
      name: "--project-directory",
    },
    {
      description: "If set, Compose will attempt to convert keys",
      name: "--compatibility",
    },
    {
      args: {
        name: "PATH",
        template: "filepaths",
      },
      description: "Specify an alternate environment file",
      name: "--env-file",
    },
  ],
};

export default completionSpec;
