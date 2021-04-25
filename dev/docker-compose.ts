const getServices: Fig.Generator = {
  script: (context) => {
    if (context.includes("-f")) {
      const index = context.indexOf("-f");
      return `docker-compose -f ${context[index + 1]} config --services`;
    }
    return "docker-compose config --services";
  },
  splitOn: "\n",
};

export const completionSpec: Fig.Spec = {
  name: "docker-compose",
  description: "",
  subcommands: [
    {
      name: "build",
      description: "Build or rebuild services.",
      args: [getServices],
      options: [
        {
          name: ["--build-arg"],
          description: "Set build-time variables for services.",
          args: {},
        },
        {
          name: ["--compress"],
          description: "Compress the build context using gzip.",
          args: {},
        },
        {
          name: ["--force-rm"],
          description: "Always remove intermediate containers.",
          args: {},
        },
        {
          name: ["-m", "--memory"],
          description: "Set memory limit for the build container.",
          args: {},
        },
        {
          name: ["--no-cache"],
          description: "Do not use cache when building the image.",
          args: {},
        },
        {
          name: ["--no-rm"],
          description:
            "Do not remove intermediate containers after a successful build.",
          args: {},
        },
        {
          name: ["--parallel"],
          description: "Build images in parallel.",
          args: {},
        },
        {
          name: ["--progress"],
          description:
            "Set type of progress output (auto, plain, tty). EXPERIMENTAL flag for native builder. To enable, run with COMPOSE_DOCKER_CLI_BUILD=1)",
          args: {},
        },
        {
          name: ["--pull"],
          description: "Always attempt to pull a newer version of the image.",
          args: {},
        },
        {
          name: ["-q", "--quiet"],
          description: "Don't print anything to STDOUT",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "config",
      description: "Validate and view the Compose file.",
      options: [
        {
          name: ["--resolve-image-digests"],
          description: "Pin image tags to digests.",
          args: {},
        },
        {
          name: ["--no-interpolate"],
          description: "Don't interpolate environment variables.",
          args: {},
        },
        {
          name: ["-q", "--quiet"],
          description: "Only validate the configuration, don't print anything.",
          args: {},
        },
        {
          name: ["--services"],
          description: "Print the service names, one per line.",
          args: {},
        },
        {
          name: ["--volumes"],
          description: "Print the volume names, one per line.",
          args: {},
        },
        {
          name: ["--hash"],
          description:
            'Print the service config hash, one per line. Set "service1,service2" for a list of specified services or use the wildcard symbol to display all services.',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "create",
      description: "Creates containers for a service.",
      args: [getServices],
      options: [
        {
          name: ["--force-recreate"],
          description:
            "Recreate containers even if their configuration and image haven't changed. Incompatible with --no-recreate.",
          args: {},
        },
        {
          name: ["--no-recreate"],
          description:
            "If containers already exist, don't recreate them. Incompatible with --force-recreate.",
          args: {},
        },
        {
          name: ["--no-build"],
          description: "Don't build an image, even if it's missing.",
          args: {},
        },
        {
          name: ["--build"],
          description: "Build images before creating containers.",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "down",
      description:
        "Stops containers and removes containers, networks, volumes, and images",
      options: [
        {
          name: ["--rmi"],
          description:
            "Remove images. Type must be one of: 'all': Remove all images used by any service. 'local': Remove only images that don't have a custom tag set by the `image` field.",
          args: {},
        },
        {
          name: ["-v", "--volumes"],
          description:
            "Remove named volumes declared in the `volumes` section of the Compose file and anonymous volumes attached to containers.",
          args: {},
        },
        {
          name: ["--remove-orphans"],
          description:
            "Remove containers for services not defined in the Compose file",
          args: {},
        },
        {
          name: ["-t", "--timeout"],
          description: "Specify a shutdown timeout in seconds. (default: 10)",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "events",
      description: "Receive real time events from containers.",
      args: [getServices],
      options: [
        {
          name: ["--json"],
          description: "Output events as a stream of json objects",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "exec",
      description: "Execute a command in a running container",
      args: [getServices],
      options: [
        {
          name: ["-d", "--detach"],
          description: "Detached mode: Run command in the background.",
          args: {},
        },
        {
          name: ["--privileged"],
          description: "Give extended privileges to the process.",
          args: {},
        },
        {
          name: ["-u", "--user"],
          description: "Run the command as this user.",
          args: {},
        },
        {
          name: ["-T"],
          description:
            "Disable pseudo-tty allocation. By default `docker-compose exec` allocates a TTY.",
          args: {},
        },
        {
          name: ["--index"],
          description:
            "index of the container if there are multiple instances of a service [default: 1]",
          args: {},
        },
        {
          name: ["-e", "--env"],
          description: "not supported in API < 1.25)",
          args: {},
        },
        {
          name: ["-w", "--workdir"],
          description: "DIR Path to workdir directory for this command.",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "help",
      description: "Get help on a command.",
      options: [],
      subcommands: [],
    },
    {
      name: "images",
      description: "List images used by the created containers.",
      args: [getServices],
      options: [
        {
          name: ["-q", "--quiet"],
          description: "Only display IDs",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "kill",
      description: "Force stop service containers.",
      args: [getServices],
      options: [
        {
          name: ["-s"],
          description:
            "SIGNAL to send to the container. Default signal is SIGKILL.",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "logs",
      description: "View output from containers.",
      args: [getServices],
      options: [
        {
          name: ["--no-color"],
          description: "Produce monochrome output.",
          args: {},
        },
        {
          name: ["-f", "--follow"],
          description: "Follow log output.",
          args: {},
        },
        {
          name: ["-t", "--timestamps"],
          description: "Show timestamps.",
          args: {},
        },
        {
          name: ["--tail"],
          description:
            "Number of lines to show from the end of the logs for each container.",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "pause",
      description: "Pause services.",
      args: [getServices],
      options: [],
      subcommands: [],
    },
    {
      name: "port",
      description: "Print the public port for a port binding.",
      options: [
        {
          name: ["--protocol"],
          description: "tcp or udp [default: tcp]",
          args: {},
        },
        {
          name: ["--index"],
          description:
            "index of the container if there are multiple instances of a service [default: 1]",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "ps",
      description: "List containers.",
      args: [getServices],
      options: [
        {
          name: ["-q", "--quiet"],
          description: "Only display IDs",
          args: {},
        },
        {
          name: ["--services"],
          description: "Display services",
          args: {},
        },
        {
          name: ["--filter"],
          description: "Filter services by a property",
          args: {},
        },
        {
          name: ["-a", "--all"],
          description:
            "Show all stopped containers (including those created by the run command)",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "pull",
      description:
        "Pulls images for services defined in a Compose file, but does not start the containers.",
      options: [
        {
          name: ["--ignore-pull-failures"],
          description:
            "Pull what it can and ignores images with pull failures.",
          args: {},
        },
        {
          name: ["--parallel"],
          description:
            "Deprecated, pull multiple images in parallel (enabled by default).",
          args: {},
        },
        {
          name: ["--no-parallel"],
          description: "Disable parallel pulling.",
          args: {},
        },
        {
          name: ["-q", "--quiet"],
          description: "Pull without printing progress information",
          args: {},
        },
        {
          name: ["--include-deps"],
          description: "Also pull services declared as dependencies",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "push",
      description: "Pushes images for services.",
      options: [
        {
          name: ["--ignore-push-failures"],
          description:
            "Push what it can and ignores images with push failures.",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "restart",
      description: "Restart running containers.",
      args: [getServices],
      options: [
        {
          name: ["-t", "--timeout"],
          description: "Specify a shutdown timeout in seconds. (default: 10)",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "rm",
      description: "Removes stopped service containers.",
      args: [getServices],
      options: [
        {
          name: ["-f", "--force"],
          description: "Don't ask to confirm removal",
          args: {},
        },
        {
          name: ["-s", "--stop"],
          description: "Stop the containers, if required, before removing",
          args: {},
        },
        {
          name: ["-v"],
          description: "Remove any anonymous volumes attached to containers",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "run",
      description: "Run a one-off command on a service.",
      args: [getServices],
      options: [
        {
          name: ["-d", "--detach"],
          description:
            "Detached mode: Run container in the background, print new container name.",
          args: {},
        },
        {
          name: ["--name"],
          description: "Assign a name to the container",
          args: {},
        },
        {
          name: ["--entrypoint"],
          description: "Override the entrypoint of the image.",
          args: {},
        },
        {
          name: ["-e"],
          description:
            "Set an environment variable (can be used multiple times)",
          args: {},
        },
        {
          name: ["-l", "--label"],
          description: "Add or override a label (can be used multiple times)",
          args: {},
        },
        {
          name: ["-u", "--user"],
          description: "Run as specified username or uid",
          args: {},
        },
        {
          name: ["--no-deps"],
          description: "Don't start linked services.",
          args: {},
        },
        {
          name: ["--rm"],
          description: "Remove container after run. Ignored in detached mode.",
          args: {},
        },
        {
          name: ["-p", "--publish"],
          description: "Publish a container's port(s) to the host",
          args: {},
        },
        {
          name: ["--service-ports"],
          description:
            "Run command with the service's ports enabled and mapped to the host.",
          args: {},
        },
        {
          name: ["--use-aliases"],
          description:
            "Use the service's network aliases in the network(s) the container connects to.",
          args: {},
        },
        {
          name: ["-v", "--volume"],
          description: "Bind mount a volume (default [])",
          args: {},
        },
        {
          name: ["-T"],
          description:
            "Disable pseudo-tty allocation. By default `docker-compose run` allocates a TTY.",
          args: {},
        },
        {
          name: ["-w", "--workdir"],
          description: "Working directory inside the container",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "scale",
      description: "Set number of containers to run for a service.",
      options: [
        {
          name: ["-t", "--timeout"],
          description: "Specify a shutdown timeout in seconds. (default: 10)",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "start",
      description: "Start existing containers.",
      args: [getServices],
      options: [],
      subcommands: [],
    },
    {
      name: "stop",
      description: "Stop running containers without removing them.",
      args: [getServices],
      options: [
        {
          name: ["-t", "--timeout"],
          description: "Specify a shutdown timeout in seconds. (default: 10)",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "top",
      description: "Display the running processes",
      options: [],
      subcommands: [],
    },
    {
      name: "unpause",
      description: "Unpause services.",
      options: [],
      subcommands: [],
    },
    {
      name: "up",
      description:
        "Builds, (re)creates, starts, and attaches to containers for a service.",
      args: [getServices],
      options: [
        {
          name: ["-d", "--detach"],
          description:
            "Detached mode: Run containers in the background, print new container names. Incompatible with",
          args: {},
        },
        {
          name: ["--no-color"],
          description: "Produce monochrome output.",
          args: {},
        },
        {
          name: ["--quiet-pull"],
          description: "Pull without printing progress information",
          args: {},
        },
        {
          name: ["--no-deps"],
          description: "Don't start linked services.",
          args: {},
        },
        {
          name: ["--force-recreate"],
          description:
            "Recreate containers even if their configuration and image haven't changed.",
          args: {},
        },
        {
          name: ["--always-recreate-deps"],
          description:
            "Recreate dependent containers. Incompatible with --no-recreate.",
          args: {},
        },
        {
          name: ["--no-recreate"],
          description:
            "If containers already exist, don't recreate them. Incompatible with --force-recreate and -V.",
          args: {},
        },
        {
          name: ["--no-build"],
          description: "Don't build an image, even if it's missing.",
          args: {},
        },
        {
          name: ["--no-start"],
          description: "Don't start the services after creating them.",
          args: {},
        },
        {
          name: ["--build"],
          description: "Build images before starting containers.",
          args: {},
        },
        {
          name: ["--abort-on-container-exit"],
          description:
            "Stops all containers if any container was stopped. Incompatible with -d.",
          args: {},
        },
        {
          name: ["--attach-dependencies"],
          description: "Attach to dependent containers.",
          args: {},
        },
        {
          name: ["-t", "--timeout"],
          description:
            "Use this timeout in seconds for container shutdown when attached or when containers are already running. (default: 10)",
          args: {},
        },
        {
          name: ["-V", "--renew-anon-volumes"],
          description:
            "Recreate anonymous volumes instead of retrieving data from the previous containers.",
          args: {},
        },
        {
          name: ["--remove-orphans"],
          description:
            "Remove containers for services not defined in the Compose file.",
          args: {},
        },
        {
          name: ["--exit-code-from"],
          description:
            "Return the exit code of the selected service container. Implies --abort-on-container-exit.",
          args: {},
        },
        {
          name: ["--scale"],
          description:
            "Scale SERVICE to NUM instances. Overrides the `scale` setting in the Compose file if present.",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "version",
      description: "Show version information and quit.",
      options: [
        {
          name: ["--short"],
          description: "Shows only Compose's version number.",
          args: {},
        },
      ],
      subcommands: [],
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
      name: ["--profile"],
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
      name: ["--verbose"],
    },
    {
      args: {
        name: "LEVEL",
      },
      description: "Set log level (DEBUG, INFO, WARNING, ERROR, CRITICAL)",
      name: ["--log-level"],
    },
    {
      args: {
        name: "(never|always|auto)",
      },
      description: "Control when to print ANSI control characters",
      name: ["--ansi"],
    },
    {
      description: "Do not print ANSI control characters (DEPRECATED)",
      name: ["--no-ansi"],
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
      name: ["--tls"],
    },
    {
      args: {
        name: "CA_PATH",
      },
      description: "Trust certs signed only by this CA",
      name: ["--tlscacert"],
    },
    {
      args: {
        name: "CLIENT_CERT_PATH",
      },
      description: "Path to TLS certificate file",
      name: ["--tlscert"],
    },
    {
      args: {
        name: "TLS_KEY_PATH",
      },
      description: "Path to TLS key file",
      name: ["--tlskey"],
    },
    {
      description: "Use TLS and verify the remote",
      name: ["--tlsverify"],
    },
    {
      description: "Don't check the daemon's hostname against the",
      name: ["--skip-hostname-check"],
    },
    {
      args: {
        name: "PATH",
      },
      description: "Specify an alternate working directory",
      name: ["--project-directory"],
    },
    {
      description: "If set, Compose will attempt to convert keys",
      name: ["--compatibility"],
    },
    {
      args: {
        name: "PATH",
        template: "filepaths",
      },
      description: "Specify an alternate environment file",
      name: ["--env-file"],
    },
  ],
};
