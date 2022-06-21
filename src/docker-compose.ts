import { filepaths } from "@fig/autocomplete-generators";

const servicesGenerator: Fig.Generator = {
  script: (tokens) => {
    const files: string[] = [];
    for (let i = 0; i < tokens.length - 1; i += 1) {
      if (tokens[i] === "-f") {
        files.push(tokens[i + 1]);
        i += 1;
      }
    }
    const fileArgs = files.map((f) => `-f ${f}`).join(" ");
    return `docker-compose ${fileArgs} config --services`;
  },
  splitOn: "\n",
};

const completionSpec: Fig.Spec = {
  name: "docker-compose",
  description: "Define and run multi-container applications with Docker",
  subcommands: [
    {
      name: "build",
      description: "Build or rebuild services",
      args: { generators: servicesGenerator },
      options: [
        {
          name: "--build-arg",
          description: "Set build-time variables for services",
          args: {
            name: "key=val",
          },
        },
        {
          name: "--compress",
          description: "Compress the build context using gzip",
        },
        {
          name: "--force-rm",
          description: "Always remove intermediate containers",
        },
        {
          name: ["-m", "--memory"],
          description: "Set memory limit for the build container",
          args: {
            name: "MEM",
          },
        },
        {
          name: "--no-cache",
          description: "Do not use cache when building the image",
        },
        {
          name: "--no-rm",
          description:
            "Do not remove intermediate containers after a successful build",
        },
        {
          name: "--parallel",
          description: "Build images in parallel",
        },
        {
          name: "--progress",
          description: "Set type of progress output (auto, plain, tty)",
          args: {
            name: "string",
          },
        },
        {
          name: "--pull",
          description: "Always attempt to pull a newer version of the image",
        },
        {
          name: ["-q", "--quiet"],
          description: "Don't print anything to STDOUT",
        },
      ],
    },
    {
      name: "config",
      description: "Validate and view the Compose file",
      options: [
        {
          name: "--resolve-image-digests",
          description: "Pin image tags to digests",
        },
        {
          name: "--no-interpolate",
          description: "Don't interpolate environment variables",
        },
        {
          name: ["-q", "--quiet"],
          description: "Only validate the configuration, don't print",
        },
        {
          name: "--profiles",
          description: "Print the profile names, one per line",
        },
        {
          name: "--services",
          description: "Print the service names, one per line",
        },
        {
          name: "--volumes",
          description: "Print the volume names, one per line",
        },
        {
          name: "--hash",
          description:
            'Print the service config hash, one per line. Set "service1,service2" for a list of specified services or use the wildcard symbol to display all services',
          args: {
            name: "Service",
            suggestions: ["*"],
          },
        },
      ],
    },
    {
      name: "create",
      description: "Creates containers for a service",
      args: { generators: servicesGenerator },
      options: [
        {
          name: "--force-recreate",
          description:
            "Recreate containers even if their configuration and image haven't changed. Incompatible with --no-recreate",
        },
        {
          name: "--no-recreate",
          description:
            "If containers already exist, don't recreate them. Incompatible with --force-recreate",
        },
        {
          name: "--no-build",
          description: "Don't build an image, even if it's missing",
        },
        {
          name: "--build",
          description: "Build images before creating containers",
        },
      ],
    },
    {
      name: "down",
      description:
        "Stops containers and removes containers, networks, volumes, and images",
      options: [
        {
          name: "--rmi",
          description:
            "Remove images. Type must be one of: 'all': Remove all images used by any service. 'local': Remove only images that don't have a custom tag set by the `image` field",
          args: {
            name: "type",
            suggestions: ["all", "local"],
          },
        },
        {
          name: ["-v", "--volumes"],
          description:
            "Remove named volumes declared in the `volumes` section of the Compose file and anonymous volumes attached to containers",
        },
        {
          name: "--remove-orphans",
          description:
            "Remove containers for services not defined in the Compose file",
        },
        {
          name: ["-t", "--timeout"],
          description: "Specify a shutdown timeout in seconds. (default: 10)",
          args: {
            name: "timeout",
          },
        },
      ],
    },
    {
      name: "events",
      description: "Receive real time events from containers",
      args: { generators: servicesGenerator },
      options: [
        {
          name: "--json",
          description: "Output events as a stream of json objects",
        },
      ],
    },
    {
      name: "exec",
      description: "Execute a command in a running container",
      args: { generators: servicesGenerator },
      options: [
        {
          name: ["-d", "--detach"],
          description: "Detached mode: Run command in the background",
        },
        {
          name: "--privileged",
          description: "Give extended privileges to the process",
        },
        {
          name: ["-u", "--user"],
          description: "Run the command as this user",
          args: {
            name: "user",
          },
        },
        {
          name: "-T",
          description:
            "Disable pseudo-tty allocation. By default `docker-compose exec` allocates a TTY",
        },
        {
          name: "--index",
          description:
            "Index of the container if there are multiple instances of a service [default: 1]",
          args: {
            name: "index",
          },
        },
        {
          name: ["-e", "--env"],
          description: "Not supported in API < 1.25)",
          args: {
            name: "KEY=VAL",
            isVariadic: true,
          },
        },
        {
          name: ["-w", "--workdir"],
          description: "DIR Path to workdir directory for this command",
          args: {
            name: "DIR PATH",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Get help on a command",
    },
    {
      name: "images",
      description: "List images used by the created containers",
      args: { generators: servicesGenerator },
      options: [
        {
          name: ["-q", "--quiet"],
          description: "Only display IDs",
        },
      ],
    },
    {
      name: "kill",
      description: "Force stop service containers",
      args: { generators: servicesGenerator },
      options: [
        {
          name: "-s",
          description:
            "SIGNAL to send to the container. Default signal is SIGKILL",
        },
      ],
    },
    {
      name: "logs",
      description: "View output from containers",
      args: { generators: servicesGenerator },
      options: [
        {
          name: "--no-color",
          description: "Produce monochrome output",
        },
        {
          name: ["-f", "--follow"],
        },
        {
          name: ["-t", "--timestamps"],
          description: "Show timestamps",
        },
        {
          name: "--tail",
          description:
            "Number of lines to show from the end of the logs for each container",
          args: {
            name: "Num of Lines",
            suggestions: ["all"],
          },
        },
        {
          name: "--no-log-prefix",
          description: "Don't print prefix in logs",
        },
      ],
    },
    {
      name: "pause",
      description: "Pause services",
      args: { generators: servicesGenerator },
    },
    {
      name: "port",
      description: "Print the public port for a port binding",
      options: [
        {
          name: "--protocol",
          description: "Tcp or udp [default: tcp]",
          args: {
            name: "Protocol",
            suggestions: ["tcp", "udp"],
          },
        },
        {
          name: "--index",
          description:
            "Index of the container if there are multiple instances of a service [default: 1]",
          args: {
            name: "index",
          },
        },
      ],
    },
    {
      name: "ps",
      description: "List containers",
      args: { generators: servicesGenerator },
      options: [
        {
          name: ["-q", "--quiet"],
          description: "Only display IDs",
        },
        {
          name: "--services",
          description: "Display services",
        },
        {
          name: "--filter",
          description: "Filter services by a property",
          args: {
            name: "KEY=VAL",
          },
        },
        {
          name: ["-a", "--all"],
          description:
            "Show all stopped containers (including those created by the run command)",
        },
      ],
    },
    {
      name: "pull",
      description:
        "Pulls images for services defined in a Compose file, but does not start the containers",
      options: [
        {
          name: "--ignore-pull-failures",
          description: "Pull what it can and ignores images with pull failures",
        },
        {
          name: "--parallel",
          description:
            "Deprecated, pull multiple images in parallel (enabled by default)",
        },
        {
          name: "--no-parallel",
          description: "Disable parallel pulling",
        },
        {
          name: ["-q", "--quiet"],
          description: "Pull without printing progress information",
        },
        {
          name: "--include-deps",
          description: "Also pull services declared as dependencies",
        },
      ],
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
      args: { generators: servicesGenerator },
      options: [
        {
          name: ["-t", "--timeout"],
          description: "Specify a shutdown timeout in seconds. (default: 10)",
          args: {
            name: "timeout",
          },
        },
      ],
    },
    {
      name: "rm",
      description: "Removes stopped service containers",
      args: { generators: servicesGenerator },
      options: [
        {
          name: ["-f", "--force"],
          description: "Don't ask to confirm removal",
        },
        {
          name: ["-s", "--stop"],
          description: "Stop the containers, if required, before removing",
        },
        {
          name: "-v",
          description: "Remove any anonymous volumes attached to containers",
        },
      ],
    },
    {
      name: "run",
      description: "Run a one-off command on a service",
      args: { generators: servicesGenerator },
      options: [
        {
          name: ["-d", "--detach"],
          description:
            "Detached mode: Run container in the background, print new container name",
        },
        {
          name: "--name",
          description: "Assign a name to the container",
          args: {
            name: "name",
          },
        },
        {
          name: "--entrypoint",
          description: "Override the entrypoint of the image",
          args: {
            name: "CMD",
          },
        },
        {
          name: "-e",
          description:
            "Set an environment variable (can be used multiple times)",
          args: {
            name: "KEY=VAL",
            isVariadic: true,
          },
        },
        {
          name: ["-l", "--label"],
          description: "Add or override a label (can be used multiple times)",
          args: {
            name: "KEY=VAL",
            isVariadic: true,
          },
        },
        {
          name: ["-u", "--user"],
          description: "Run as specified username or uid",
          args: {
            name: "user",
          },
        },
        {
          name: "--no-deps",
          description: "Don't start linked services",
        },
        {
          name: "--rm",
          description: "Remove container after run. Ignored in detached mode",
        },
        {
          name: ["-p", "--publish"],
          description: "Publish a container's port(s) to the host",
          args: {
            name: "hostport:containerport",
          },
        },
        {
          name: "--service-ports",
          description:
            "Run command with the service's ports enabled and mapped to the host",
        },
        {
          name: "--use-aliases",
          description:
            "Use the service's network aliases in the network(s) the container connects to",
        },
        {
          name: ["-v", "--volume"],
          description: "Bind mount a volume (default [])",
          args: {
            name: "volume",
          },
        },
        {
          name: "-T",
          description:
            "Disable pseudo-tty allocation. By default `docker-compose run` allocates a TTY",
        },
        {
          name: ["-w", "--workdir"],
          description: "Working directory inside the container",
          args: {
            name: "workdir",
          },
        },
      ],
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
      args: { generators: servicesGenerator },
    },
    {
      name: "stop",
      description: "Stop running containers without removing them",
      args: { generators: servicesGenerator },
      options: [
        {
          name: ["-t", "--timeout"],
          description: "Specify a shutdown timeout in seconds. (default: 10)",
          args: {
            name: "timeout",
          },
        },
      ],
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
      args: {
        name: "service",
        isVariadic: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: ["-d", "--detach"],
          description:
            "Detached mode: Run containers in the background, print new container names. Incompatible with",
        },
        {
          name: "--no-color",
          description: "Produce monochrome output",
        },
        {
          name: "--quiet-pull",
          description: "Pull without printing progress information",
        },
        {
          name: "--no-deps",
          description: "Don't start linked services",
        },
        {
          name: "--force-recreate",
          description:
            "Recreate containers even if their configuration and image haven't changed",
        },
        {
          name: "--always-recreate-deps",
          description:
            "Recreate dependent containers. Incompatible with --no-recreate",
        },
        {
          name: "--no-recreate",
          description:
            "If containers already exist, don't recreate them. Incompatible with --force-recreate and -V",
        },
        {
          name: "--no-build",
          description: "Don't build an image, even if it's missing",
        },
        {
          name: "--no-start",
          description: "Don't start the services after creating them",
        },
        {
          name: "--build",
          description: "Build images before starting containers",
        },
        {
          name: "--abort-on-container-exit",
          description:
            "Stops all containers if any container was stopped. Incompatible with -d",
        },
        {
          name: "--attach-dependencies",
          description: "Attach to dependent containers",
        },
        {
          name: ["-t", "--timeout"],
          description:
            "Use this timeout in seconds for container shutdown when attached or when containers are already running. (default: 10)",
          args: {
            name: "timeout",
          },
        },
        {
          name: ["-V", "--renew-anon-volumes"],
          description:
            "Recreate anonymous volumes instead of retrieving data from the previous containers",
        },
        {
          name: "--remove-orphans",
          description:
            "Remove containers for services not defined in the Compose file",
        },
        {
          name: "--exit-code-from",
          description:
            "Return the exit code of the selected service container. Implies --abort-on-container-exit",
          args: {
            name: "service",
          },
        },
        {
          name: "--scale",
          description:
            "Scale SERVICE to NUM instances. Overrides the `scale` setting in the Compose file if present",
          args: {
            name: "SERVICE=NUM",
          },
        },
        {
          name: "--no-log-prefix",
          description: "Don't print prefix in logs",
        },
      ],
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
        generators: filepaths({ extensions: ["yml", "yaml"] }),
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
