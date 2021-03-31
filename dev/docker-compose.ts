const getServices: Fig.Generator = {
  script: "docker-compose config --services",
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
          description: "Set build-time variables for services.\n",
          args: {},
        },
        {
          name: ["--compress"],
          description: "Compress the build context using gzip.\n",
          args: {},
        },
        {
          name: ["--force-rm"],
          description: "Always remove intermediate containers.\n",
          args: {},
        },
        {
          name: ["-m", "--memory"],
          description: "Set memory limit for the build container.\n",
          args: {},
        },
        {
          name: ["--no-cache"],
          description: "Do not use cache when building the image.\n",
          args: {},
        },
        {
          name: ["--no-rm"],
          description:
            "Do not remove intermediate containers after a successful build.\n",
          args: {},
        },
        {
          name: ["--parallel"],
          description: "Build images in parallel.\n",
          args: {},
        },
        {
          name: ["--progress"],
          description:
            "Set type of progress output (auto, plain, tty).\n                            EXPERIMENTAL flag for native builder.\n                            To enable, run with COMPOSE_DOCKER_CLI_BUILD=1)\n",
          args: {},
        },
        {
          name: ["--pull"],
          description: "Always attempt to pull a newer version of the image.\n",
          args: {},
        },
        {
          name: ["-q", "--quiet"],
          description: "Don't print anything to STDOUT\n",
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
          description: "Pin image tags to digests.\n",
          args: {},
        },
        {
          name: ["--no-interpolate"],
          description: "Don't interpolate environment variables.\n",
          args: {},
        },
        {
          name: ["-q", "--quiet"],
          description:
            "Only validate the configuration, don't print\n                             anything.\n",
          args: {},
        },
        {
          name: ["--services"],
          description: "Print the service names, one per line.\n",
          args: {},
        },
        {
          name: ["--volumes"],
          description: "Print the volume names, one per line.\n",
          args: {},
        },
        {
          name: ["--hash"],
          description:
            'Print the service config hash, one per line.\n                             Set "service1,service2" for a list of specified services\n                             or use the wildcard symbol to display all services.\n',
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
            "Recreate containers even if their configuration and\n                           image haven't changed. Incompatible with --no-recreate.\n",
          args: {},
        },
        {
          name: ["--no-recreate"],
          description:
            "If containers already exist, don't recreate them.\n                           Incompatible with --force-recreate.\n",
          args: {},
        },
        {
          name: ["--no-build"],
          description: "Don't build an image, even if it's missing.\n",
          args: {},
        },
        {
          name: ["--build"],
          description: "Build images before creating containers.\n",
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
            "Remove images. Type must be one of:\n                              'all': Remove all images used by any service.\n                              'local': Remove only images that don't have a\n                              custom tag set by the `image` field.\n",
          args: {},
        },
        {
          name: ["-v", "--volumes"],
          description:
            "Remove named volumes declared in the `volumes`\n                            section of the Compose file and anonymous volumes\n                            attached to containers.\n",
          args: {},
        },
        {
          name: ["--remove-orphans"],
          description:
            "Remove containers for services not defined in the\n                            Compose file\n",
          args: {},
        },
        {
          name: ["-t", "--timeout"],
          description:
            "Specify a shutdown timeout in seconds.\n                            (default: 10)\n",
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
          description: "Output events as a stream of json objects\n",
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
          description: "Detached mode: Run command in the background.\n",
          args: {},
        },
        {
          name: ["--privileged"],
          description: "Give extended privileges to the process.\n",
          args: {},
        },
        {
          name: ["-u", "--user"],
          description: "Run the command as this user.\n",
          args: {},
        },
        {
          name: ["-T"],
          description:
            "Disable pseudo-tty allocation. By default `docker-compose exec`\n                      allocates a TTY.\n",
          args: {},
        },
        {
          name: ["--index"],
          description:
            "index of the container if there are multiple\n                      instances of a service [default: 1]\n",
          args: {},
        },
        {
          name: ["-e", "--env"],
          description: "not supported in API < 1.25)\n",
          args: {},
        },
        {
          name: ["-w", "--workdir"],
          description: "DIR Path to workdir directory for this command.\n",
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
          description: "Only display IDs\n",
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
            "SIGNAL to send to the container.\n                      Default signal is SIGKILL.\n",
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
          description: "Produce monochrome output.\n",
          args: {},
        },
        {
          name: ["-f", "--follow"],
          description: "Follow log output.\n",
          args: {},
        },
        {
          name: ["-t", "--timestamps"],
          description: "Show timestamps.\n",
          args: {},
        },
        {
          name: ["--tail"],
          description:
            "Number of lines to show from the end of the logs\n                        for each container.\n",
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
          description: "tcp or udp [default: tcp]\n",
          args: {},
        },
        {
          name: ["--index"],
          description:
            "index of the container if there are multiple\n                      instances of a service [default: 1]\n",
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
          description: "Only display IDs\n",
          args: {},
        },
        {
          name: ["--services"],
          description: "Display services\n",
          args: {},
        },
        {
          name: ["--filter"],
          description: "Filter services by a property\n",
          args: {},
        },
        {
          name: ["-a", "--all"],
          description:
            "Show all stopped containers (including those created by the run command)\n",
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
            "Pull what it can and ignores images with pull failures.\n",
          args: {},
        },
        {
          name: ["--parallel"],
          description:
            "Deprecated, pull multiple images in parallel (enabled by default).\n",
          args: {},
        },
        {
          name: ["--no-parallel"],
          description: "Disable parallel pulling.\n",
          args: {},
        },
        {
          name: ["-q", "--quiet"],
          description: "Pull without printing progress information\n",
          args: {},
        },
        {
          name: ["--include-deps"],
          description: "Also pull services declared as dependencies\n",
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
            "Push what it can and ignores images with push failures.\n",
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
          description:
            "Specify a shutdown timeout in seconds.\n                             (default: 10)\n",
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
          description: "Don't ask to confirm removal\n",
          args: {},
        },
        {
          name: ["-s", "--stop"],
          description: "Stop the containers, if required, before removing\n",
          args: {},
        },
        {
          name: ["-v"],
          description: "Remove any anonymous volumes attached to containers\n",
          args: {},
        },
        {
          name: ["-a", "--all"],
          description: "Deprecated - no effect.\n",
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
            "Detached mode: Run container in the background, print\n                          new container name.\n",
          args: {},
        },
        {
          name: ["--name"],
          description: "Assign a name to the container\n",
          args: {},
        },
        {
          name: ["--entrypoint"],
          description: "Override the entrypoint of the image.\n",
          args: {},
        },
        {
          name: ["-e"],
          description:
            "Set an environment variable (can be used multiple times)\n",
          args: {},
        },
        {
          name: ["-l", "--label"],
          description: "Add or override a label (can be used multiple times)\n",
          args: {},
        },
        {
          name: ["-u", "--user"],
          description: "Run as specified username or uid\n",
          args: {},
        },
        {
          name: ["--no-deps"],
          description: "Don't start linked services.\n",
          args: {},
        },
        {
          name: ["--rm"],
          description:
            "Remove container after run. Ignored in detached mode.\n",
          args: {},
        },
        {
          name: ["-p", "--publish"],
          description: "Publish a container's port(s) to the host\n",
          args: {},
        },
        {
          name: ["--service-ports"],
          description:
            "Run command with the service's ports enabled and mapped\n                          to the host.\n",
          args: {},
        },
        {
          name: ["--use-aliases"],
          description:
            "Use the service's network aliases in the network(s) the\n                          container connects to.\n",
          args: {},
        },
        {
          name: ["-v", "--volume"],
          description: "Bind mount a volume (default [])\n",
          args: {},
        },
        {
          name: ["-T"],
          description:
            "Disable pseudo-tty allocation. By default `docker-compose run`\n                          allocates a TTY.\n",
          args: {},
        },
        {
          name: ["-w", "--workdir"],
          description: "Working directory inside the container\n",
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
          description:
            "Specify a shutdown timeout in seconds.\n                             (default: 10)\n",
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
          description:
            "Specify a shutdown timeout in seconds.\n                             (default: 10)\n",
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
            "Detached mode: Run containers in the background,\n                               print new container names. Incompatible with\n",
          args: {},
        },
        {
          name: ["--no-color"],
          description: "Produce monochrome output.\n",
          args: {},
        },
        {
          name: ["--quiet-pull"],
          description: "Pull without printing progress information\n",
          args: {},
        },
        {
          name: ["--no-deps"],
          description: "Don't start linked services.\n",
          args: {},
        },
        {
          name: ["--force-recreate"],
          description:
            "Recreate containers even if their configuration\n                               and image haven't changed.\n",
          args: {},
        },
        {
          name: ["--always-recreate-deps"],
          description:
            "Recreate dependent containers.\n                               Incompatible with --no-recreate.\n",
          args: {},
        },
        {
          name: ["--no-recreate"],
          description:
            "If containers already exist, don't recreate\n                               them. Incompatible with --force-recreate and -V.\n",
          args: {},
        },
        {
          name: ["--no-build"],
          description: "Don't build an image, even if it's missing.\n",
          args: {},
        },
        {
          name: ["--no-start"],
          description: "Don't start the services after creating them.\n",
          args: {},
        },
        {
          name: ["--build"],
          description: "Build images before starting containers.\n",
          args: {},
        },
        {
          name: ["--abort-on-container-exit"],
          description:
            "Stops all containers if any container was\n                               stopped. Incompatible with -d.\n",
          args: {},
        },
        {
          name: ["--attach-dependencies"],
          description: "Attach to dependent containers.\n",
          args: {},
        },
        {
          name: ["-t", "--timeout"],
          description:
            "Use this timeout in seconds for container\n                               shutdown when attached or when containers are\n                               already running. (default: 10)\n",
          args: {},
        },
        {
          name: ["-V", "--renew-anon-volumes"],
          description:
            "Recreate anonymous volumes instead of retrieving\n                               data from the previous containers.\n",
          args: {},
        },
        {
          name: ["--remove-orphans"],
          description:
            "Remove containers for services not defined\n                               in the Compose file.\n",
          args: {},
        },
        {
          name: ["--exit-code-from"],
          description:
            "Return the exit code of the selected service\n                               container. Implies --abort-on-container-exit.\n",
          args: {},
        },
        {
          name: ["--scale"],
          description:
            "Scale SERVICE to NUM instances. Overrides the\n                               `scale` setting in the Compose file if present.\n",
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
          description: "Shows only Compose's version number.\n",
          args: {},
        },
      ],
      subcommands: [],
    },
  ],
};
