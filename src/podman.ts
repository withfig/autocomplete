const postProcessDockerPs: Fig.Generator["postProcess"] = (out) => {
  return out.split("\n").map((i) => {
    try {
      const parsedJSON: Record<string, string> = JSON.parse(i);
      return {
        name: parsedJSON.Names,
        displayName: `${parsedJSON.Names} (${parsedJSON.Image})`,
        icon: "fig://icon?type=docker",
      };
    } catch (error) {
      console.error(error);
    }
  });
};

const sharedPostProcess: Fig.Generator["postProcess"] = (out) => {
  return out
    .split("\n")
    .map((line) => JSON.parse(line))
    .map((i) => ({
      name: i.name || i.Name, //Added for backwards compatibility
      description: i.id || i.ID, //Added for backwards compatibility
      icon: "fig://icon?type=docker",
    }));
};

const dockerGenerators: Record<string, Fig.Generator> = {
  runningDockerContainers: {
    script: ["podman", "ps", "--format", "{{ json . }}"],
    postProcess: postProcessDockerPs,
  },
  allDockerContainers: {
    script: ["podman", "ps", "-a", "--format", "{{ json . }}"],
    postProcess: postProcessDockerPs,
  },
  pausedDockerContainers: {
    script: [
      "podman",
      "ps",
      "--filter",
      "status=paused",
      "--format",
      "{{ json . }}",
    ],
    postProcess: postProcessDockerPs,
  },
  allLocalImages: {
    script: ["podman", "image", "ls", "--format", "{{ json . }}"],
    postProcess: function (out) {
      return out
        .split("\n")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: `${i.Id}`,
          displayName: `${i.repository} - ${i.Id}`,
          icon: "fig://icon?type=docker",
        }));
    },
  },
  allLocalImagesWithRepository: {
    script: ["podman", "image", "ls", "--format", "{{ json . }}"],
    postProcess: function (out) {
      return out
        .split("\n")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: i.repository,
          displayName: `${i.repository} - ${i.Id}`,
          icon: "fig://icon?type=docker",
        }));
    },
  },
  dockerHubSearch: {
    script: function (context) {
      if (context[context.length - 1] === "") return undefined;
      const searchTerm = context[context.length - 1];
      return ["podman", "search", searchTerm, "--format", "{{ json . }}"];
    },
    postProcess: function (out) {
      return out
        .split("\n")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: `${i.Name}`,
          icon: "fig://icon?type=docker",
        }));
    },
    trigger: function () {
      return true;
    },
  },
  listDockerNetworks: {
    script: ["podman", "network", "list", "--format", "{{ json . }}"],
    postProcess: sharedPostProcess,
  },
  listDockerSecrets: {
    script: ["podman", "secret", "list", "--format", "{{ json . }}"],
    postProcess: sharedPostProcess,
  },
  listDockerVolumes: {
    script: ["podman", "volume", "list", "--format", "{{ json . }}"],
    postProcess: function (out) {
      return out
        .split("\n")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: i.Name,
          icon: "fig://icon?type=docker",
        }));
    },
  },
};

const containersArg = {
  name: "container",
  generators: dockerGenerators.runningDockerContainers,
};

const imagesArg = {
  name: "image",
  generators: dockerGenerators.allLocalImages,
};

const containerAndCommandArgs = [
  containersArg,
  {
    name: "command",
    isCommand: true,
  },
];

const sharedCommands: Record<string, Fig.Subcommand> = {
  build: {
    name: "build",
    description: "Build an image using instructions from Containerfiles",
    args: {
      name: "path",
      generators: {
        template: "folders",
      },
    },
    options: [
      {
        name: "--add-host",
        args: {
          name: "list",
          description: "Add a custom host-to-IP mapping (host:ip)",
        },
      },
      {
        name: "--build-arg",
        args: {
          name: "list",
          description: "Set build-time variables",
        },
      },
      {
        name: "--cache-from",
        args: {
          name: "strings",
          description: "Images to consider as cache sources",
        },
      },
      {
        name: "--disable-content-trust",
        description: "Skip image verification (default true)",
      },
      {
        name: ["-f", "--file"],
        description: "Name of the Dockerfile (Default is 'PATH/Dockerfile')",
        args: {
          name: "string",
          generators: {
            template: "filepaths",
          },
        },
      },
      {
        name: "--iidfile",
        description: "Write the image ID to the file",
        args: {
          name: "string",
        },
      },
      {
        name: "--isolation",
        description: "Container isolation technology",
        args: {
          name: "string",
        },
      },
      {
        name: "--label",
        description: "Set metadata for an image",
        args: {
          name: "list",
        },
      },
      {
        name: "--network",
        description:
          'Set the networking mode for the RUN instructions during build (default "default")',
        args: {
          name: "string",
        },
      },
      {
        name: "--no-cache",
        description: "Do not use cache when building the image",
      },
      {
        name: ["-o", "--output"],
        description: "Output destination (format: type=local,dest=path)",
        args: {
          name: "stringArray",
        },
      },
      {
        name: "--platform",
        description: "Set platform if server is multi-platform capable",
        args: {
          name: "string",
        },
      },
      {
        name: "--progress",
        description:
          "Set type of progress output (auto, plain, tty). Use plain to show container output",
        args: {
          name: "string",
          suggestions: ["auto", "plain", "tty"].map((i) => ({ name: i })),
        },
      },
      {
        name: "--pull",
        description: "Always attempt to pull a newer version of the image",
      },
      {
        name: ["-q", "--quiet"],
        description: "Suppress the build output and print image ID on success",
      },
      {
        name: "--secret",
        description: `Secret file to expose to the build (only if BuildKit enabled): id=mysecret,src=/local/secret`,
        args: {
          name: "stringArray",
        },
      },
      {
        name: "--squash",
        description: "Squash newly built layers into a single new layer",
      },
      {
        name: "--ssh",
        description: `SSH agent socket or keys to expose to the build (only if BuildKit enabled) (format: default|<id>[=<socket>|<key>[,<key>]])`,
        args: {
          name: "stringArray",
        },
      },
      {
        name: ["-t", "--tag"],
        description: "Name and optionally a tag in the 'name:tag' format",
      },
      {
        name: "--target",
        description: "Set the target build stage to build",
        args: {
          name: "target build stage",
          generators: {
            trigger: function () {
              return true;
            },
            script: function (context) {
              let fileFlagIndex, dockerfilePath;
              if (context.includes("-f")) {
                fileFlagIndex = context.indexOf("-f");
                dockerfilePath = context[fileFlagIndex + 1];
              } else if (context.includes("--file")) {
                fileFlagIndex = context.indexOf("--file");
                dockerfilePath = context[fileFlagIndex + 1];
              } else {
                dockerfilePath = "Dockerfile";
              }

              return ["grep", "-iE", "FROM.*AS", dockerfilePath];
            },
            postProcess: function (out) {
              // This just searches the Dockerfile for the alias name after AS,
              // and due to the grep above, will only match lines where FROM and AS
              // are on the same line. This could certainly be made more robust
              // down the line.
              const imageNameRegexp = /(?:[aA][sS]\s+)([\w:.-]+)/;
              return out
                .split("\n")
                .map((i) => {
                  const result = imageNameRegexp.exec(i);
                  if (result) {
                    return {
                      name: result[1],
                    };
                  }
                })
                .filter((i) => i !== undefined);
            },
          },
        },
      },
    ],
  },
  create: {
    name: "create",
    description: "Create but do not start a container",
    args: [
      {
        name: "container",
        generators: dockerGenerators.allLocalImages,
      },
      {
        name: "command",
        isCommand: true,
      },
    ],
    options: [
      {
        args: {
          name: "list",
        },
        description: "Add a custom host-to-IP mapping (host:ip)",
        name: "--add-host",
      },
      {
        args: {
          name: "list",
        },
        description: "Attach to STDIN, STDOUT or STDERR",
        name: ["-a", "--attach"],
      },
      {
        args: {
          name: "uint16",
        },
        description:
          "Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)",
        name: "--blkio-weight",
      },
      {
        args: {
          name: "list",
        },
        description: "Block IO weight (relative device weight) (default [])",
        name: "--blkio-weight-device",
      },
      {
        args: {
          name: "list",
        },
        description: "Add Linux capabilities",
        name: "--cap-add",
      },
      {
        args: {
          name: "list",
        },
        description: "Drop Linux capabilities",
        name: "--cap-drop",
      },
      {
        args: {
          name: "string",
        },
        description: "Optional parent cgroup for the container",
        name: "--cgroup-parent",
      },
      {
        args: {
          name: "string",
        },
        description: "Cgroup namespace to use (host|private)",
        name: "--cgroupns",
      },
      {
        args: {
          name: "string",
        },
        description: "Write the container ID to the file",
        name: "--cidfile",
      },
      {
        args: {
          name: "int",
        },
        description: "Limit CPU CFS (Completely Fair Scheduler) period",
        name: "--cpu-period",
      },
      {
        args: {
          name: "int",
        },
        description: "Limit CPU CFS (Completely Fair Scheduler) quota",
        name: "--cpu-quota",
      },
      {
        args: {
          name: "int",
        },
        description: "Limit CPU real-time period in microseconds",
        name: "--cpu-rt-period",
      },
      {
        args: {
          name: "int",
        },
        description: "Limit CPU real-time runtime in microseconds",
        name: "--cpu-rt-runtime",
      },
      {
        args: {
          name: "int",
        },
        description: "CPU shares (relative weight)",
        name: ["-c", "--cpu-shares"],
      },
      {
        args: {
          name: "decimal",
        },
        description: "Number of CPUs",
        name: "--cpus",
      },
      {
        args: {
          name: "string",
        },
        description: "CPUs in which to allow execution (0-3, 0,1)",
        name: "--cpuset-cpus",
      },
      {
        args: {
          name: "string",
        },
        description: "MEMs in which to allow execution (0-3, 0,1)",
        name: "--cpuset-mems",
      },
      {
        args: {
          name: "list",
        },
        description: "Add a host device to the container",
        name: "--device",
      },
      {
        args: {
          name: "list",
        },
        description: "Add a rule to the cgroup allowed devices list",
        name: "--device-cgroup-rule",
      },
      {
        args: {
          name: "list",
        },
        description:
          "Limit read rate (bytes per second) from a device (default [])",
        name: "--device-read-bps",
      },
      {
        args: {
          name: "list",
        },
        description:
          "Limit read rate (IO per second) from a device (default [])",
        name: "--device-read-iops",
      },
      {
        args: {
          name: "list",
        },
        description:
          "Limit write rate (bytes per second) to a device (default [])",
        name: "--device-write-bps",
      },
      {
        args: {
          name: "list",
        },
        description:
          "Limit write rate (IO per second) to a device (default [])",
        name: "--device-write-iops",
      },
      {
        description: "Skip image verification (default true)",
        name: "--disable-content-trust",
      },
      {
        args: {
          name: "list",
        },
        description: "Set custom DNS servers",
        name: "--dns",
      },
      {
        args: {
          name: "list",
        },
        description: "Set DNS options",
        name: "--dns-option",
      },
      {
        args: {
          name: "list",
        },
        description: "Set custom DNS search domains",
        name: "--dns-search",
      },
      {
        args: {
          name: "string",
        },
        description: "Container NIS domain name",
        name: "--domainname",
      },
      {
        args: {
          name: "string",
        },
        description: "Overwrite the default ENTRYPOINT of the image",
        name: "--entrypoint",
      },
      {
        args: {
          name: "list",
        },
        description: "Set environment variables",
        name: ["-e", "--env"],
      },
      {
        args: {
          name: "list",
        },
        description: "Read in a file of environment variables",
        name: "--env-file",
      },
      {
        args: {
          name: "list",
        },
        description: "Expose a port or a range of ports",
        name: "--expose",
      },
      {
        args: {
          name: "gpu-request",
        },
        description:
          "GPU devices to add to the container ('all' to pass all GPUs)",
        name: "--gpus",
      },
      {
        args: {
          name: "list",
        },
        description: "Add additional groups to join",
        name: "--group-add",
      },
      {
        args: {
          name: "string",
        },
        description: "Command to run to check health",
        name: "--health-cmd",
      },
      {
        args: {
          name: "duration",
        },
        description: "Time between running the check (ms|s|m|h) (default 0s)",
        name: "--health-interval",
      },
      {
        args: {
          name: "int",
        },
        description: "Consecutive failures needed to report unhealthy",
        name: "--health-retries",
      },
      {
        args: {
          name: "duration",
        },
        description:
          "Start period for the container to initialize before starting health-retries countdown (ms|s|m|h) (default 0s)",
        name: "--health-start-period",
      },
      {
        args: {
          name: "duration",
        },
        description:
          "Maximum time to allow one check to run (ms|s|m|h) (default 0s)",
        name: "--health-timeout",
      },
      {
        description: "Print usage",
        name: "--help",
      },
      {
        args: {
          name: "string",
        },
        description: "Container host name",
        name: ["-h", "--hostname"],
      },
      {
        description:
          "Run an init inside the container that forwards signals and reaps processes",
        name: "--init",
      },
      {
        description: "Keep STDIN open even if not attached",
        name: ["-i", "--interactive"],
      },
      {
        args: {
          name: "string",
        },
        description: "IPv4 address (e.g., 172.30.100.104)",
        name: "--ip",
      },
      {
        args: {
          name: "string",
        },
        description: "IPv6 address (e.g., 2001:db8::33)",
        name: "--ip6",
      },
      {
        args: {
          name: "string",
        },
        description: "IPC mode to use",
        name: "--ipc",
      },
      {
        args: {
          name: "string",
        },
        description: "Container isolation technology",
        name: "--isolation",
      },
      {
        args: {
          name: "bytes",
        },
        description: "Kernel memory limit",
        name: "--kernel-memory",
      },
      {
        args: {
          name: "list",
        },
        description: "Set meta data on a container",
        name: ["-l", "--label"],
      },
      {
        args: {
          name: "list",
        },
        description: "Read in a line delimited file of labels",
        name: "--label-file",
      },
      {
        args: {
          name: "list",
        },
        description: "Add link to another container",
        name: "--link",
      },
      {
        args: {
          name: "list",
        },
        description: "Container IPv4/IPv6 link-local addresses",
        name: "--link-local-ip",
      },
      {
        args: {
          name: "string",
        },
        description: "Logging driver for the container",
        name: "--log-driver",
      },
      {
        args: {
          name: "list",
        },
        description: "Log driver options",
        name: "--log-opt",
      },
      {
        args: {
          name: "string",
        },
        description: "Container MAC address (e.g., 92:d0:c6:0a:29:33)",
        name: "--mac-address",
      },
      {
        args: {
          name: "bytes",
        },
        description: "Memory limit",
        name: ["-m", "--memory"],
      },
      {
        args: {
          name: "bytes",
        },
        description: "Memory soft limit",
        name: "--memory-reservation",
      },
      {
        args: {
          name: "bytes",
        },
        description:
          "Swap limit equal to memory plus swap: '-1' to enable unlimited swap",
        name: "--memory-swap",
      },
      {
        args: {
          name: "int",
        },
        description: "Tune container memory swappiness (0 to 100) (default -1)",
        name: "--memory-swappiness",
      },
      {
        args: {
          name: "mount",
        },
        description: "Attach a filesystem mount to the container",
        name: "--mount",
      },
      {
        args: {
          name: "string",
        },
        description: "Assign a name to the container",
        name: "--name",
      },
      {
        args: {
          name: "network",
        },
        description: "Connect a container to a network",
        name: "--network",
      },
      {
        args: {
          name: "list",
        },
        description: "Add network-scoped alias for the container",
        name: "--network-alias",
      },
      {
        description: "Disable any container-specified HEALTHCHECK",
        name: "--no-healthcheck",
      },
      {
        description: "Disable OOM Killer",
        name: "--oom-kill-disable",
      },
      {
        args: {
          name: "int",
        },
        description: "Tune host's OOM preferences (-1000 to 1000)",
        name: "--oom-score-adj",
      },
      {
        args: {
          name: "string",
        },
        description: "PID namespace to use",
        name: "--pid",
      },
      {
        args: {
          name: "int",
        },
        description: "Tune container pids limit (set -1 for unlimited)",
        name: "--pids-limit",
      },
      {
        args: {
          name: "string",
        },
        description: "Set platform if server is multi-platform capable",
        name: "--platform",
      },
      {
        description: "Give extended privileges to this container",
        name: "--privileged",
      },
      {
        args: {
          name: "list",
        },
        description: "Publish a container's port(s) to the host",
        name: ["-p", "--publish"],
      },
      {
        description: "Publish all exposed ports to random ports",
        name: ["-P", "--publish-all"],
      },
      {
        args: {
          name: "string",
        },
        description:
          'Pull image before creating ("always"|"missing"|"never") (default "missing")',
        name: "--pull",
      },
      {
        description: "Mount the container's root filesystem as read only",
        name: "--read-only",
      },
      {
        args: {
          name: "string",
        },
        description:
          'Restart policy to apply when a container exits (default "no")',
        name: "--restart",
      },
      {
        description: "Automatically remove the container when it exits",
        name: "--rm",
      },
      {
        args: {
          name: "string",
        },
        description: "Runtime to use for this container",
        name: "--runtime",
      },
      {
        args: {
          name: "list",
        },
        description: "Security Options",
        name: "--security-opt",
      },
      {
        args: {
          name: "bytes",
        },
        description: "Size of /dev/shm",
        name: "--shm-size",
      },
      {
        args: {
          name: "string",
        },
        description: 'Signal to stop a container (default "SIGTERM")',
        name: "--stop-signal",
      },
      {
        args: {
          name: "int",
        },
        description: "Timeout (in seconds) to stop a container",
        name: "--stop-timeout",
      },
      {
        args: {
          name: "list",
        },
        description: "Storage driver options for the container",
        name: "--storage-opt",
      },
      {
        args: {
          name: "map",
        },
        description: "Sysctl options (default map[])",
        name: "--sysctl",
      },
      {
        args: {
          name: "list",
        },
        description: "Mount a tmpfs directory",
        name: "--tmpfs",
      },
      {
        description: "Allocate a pseudo-TTY",
        name: ["-t", "--tty"],
      },
      {
        args: {
          name: "ulimit",
        },
        description: "Ulimit options (default [])",
        name: "--ulimit",
      },
      {
        args: {
          name: "string",
        },
        description: "Username or UID (format: <name|uid>[:<group|gid>])",
        name: ["-u", "--user"],
      },
      {
        args: {
          name: "string",
        },
        description: "User namespace to use",
        name: "--userns",
      },
      {
        args: {
          name: "string",
        },
        description: "UTS namespace to use",
        name: "--uts",
      },
      {
        args: {
          name: "list",
        },
        description: "Bind mount a volume",
        name: ["-v", "--volume"],
      },
      {
        args: {
          name: "string",
        },
        description: "Optional volume driver for the container",
        name: "--volume-driver",
      },
      {
        args: {
          name: "list",
        },
        description: "Mount volumes from the specified container(s)",
        name: "--volumes-from",
      },
      {
        args: {
          name: "string",
        },
        description: "Working directory inside the container",
        name: ["-w", "--workdir"],
      },
    ],
  },
  attach: {
    name: "attach",
    description: "Attach to a running container",
    options: [
      {
        name: "--detach-keys",
        description: "Override the key sequence for detaching a container",
        args: {
          name: "string",
        },
      },
      {
        name: "--no-stdin",
        description: "Do not attach STDIN",
      },
      {
        name: "--sig-proxy",
        description: "Proxy all received signals to the process (default true)",
      },
    ],
  },
  commit: {
    name: "commit",
    description: "Create new image based on the changed container",
    args: [
      containersArg,
      {
        name: "[REPOSITORY[:TAG]]",
      },
    ],
    options: [
      {
        args: {
          name: "string",
        },
        description:
          'Author (e.g., "John Hannibal Smith <hannibal@a-team.com>")',
        name: ["-a", "--author"],
      },
      {
        args: {
          name: "list",
        },
        description: "Apply Dockerfile instruction to the created image",
        name: ["-c", "--change"],
      },
      {
        args: {
          name: "string",
        },
        description: "Commit message",
        name: ["-m", "--message"],
      },
      {
        description: "Pause container during commit (default true)",
        name: ["-p", "--pause"],
      },
    ],
  },
  cp: {
    name: "cp",
    description:
      "Copy files/folders between a container and the local filesystem",
    args: {
      name: "CONTAINER:SRC_PATH DEST_PATH|- OR SRC_PATH|- CONTAINER:DEST_PATH",
    },
    options: [
      {
        description: "Archive mode (copy all uid/gid information)",
        name: ["-a", "--archive"],
      },
      {
        description: "Always follow symbol link in SRC_PATH",
        name: ["-L", "--follow-link"],
      },
    ],
  },
  diff: {
    name: "diff",
    description: "Display the changes to the object's file system",
    args: containersArg,
  },
  exec: {
    name: "exec",
    description: "Run a process in a running container",
    options: [
      {
        name: "-it",
        description: "Launch an interactive session",
        icon: "fig://icon?type=commandkey",
      },
      {
        description: "Detached mode: run command in the background",
        name: ["-d", "--detach"],
      },
      {
        args: {
          name: "string",
        },
        description: "Override the key sequence for detaching a container",
        name: "--detach-keys",
      },
      {
        args: {
          name: "list",
        },
        description: "Set environment variables",
        name: ["-e", "--env"],
      },
      {
        args: {
          name: "list",
        },
        description: "Read in a file of environment variables",
        name: "--env-file",
      },
      {
        description: "Keep STDIN open even if not attached",
        name: ["-i", "--interactive"],
      },
      {
        description: "Give extended privileges to the command",
        name: "--privileged",
      },
      {
        description: "Allocate a pseudo-TTY",
        name: ["-t", "--tty"],
      },
      {
        args: {
          name: "string",
        },
        description: "Username or UID (format: <name|uid>[:<group|gid>])",
        name: ["-u", "--user"],
      },
      {
        args: {
          name: "string",
        },
        description: "Working directory inside the container",
        name: ["-w", "--workdir"],
      },
    ],
    args: containerAndCommandArgs,
  },
  export: {
    name: "export",
    description: "Export container's filesystem contents as a tar archive",
    args: containersArg,
    options: [
      {
        description: "Write to a file, instead of STDOUT",
        name: ["-o", "--output"],
        args: {
          name: "string",
        },
      },
    ],
  },
  kill: {
    name: "kill",
    description: "Kill one or more running containers with a specific signal",
    args: { ...containersArg, isVariadic: true },
    options: [
      {
        description: 'Signal to send to the container (default "KILL")',
        name: ["-s", "--signal"],
        args: {
          name: "string",
        },
      },
    ],
  },
  logs: {
    name: "logs",
    description: "Fetch the logs of one or more containers",
    args: containersArg,
    options: [
      {
        description: "Show extra details provided to logs",
        name: "--details",
      },
      {
        description: "Follow log output",
        name: ["-f", "--follow"],
      },
      {
        description:
          "Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
        name: "--since",
        args: {
          name: "string",
        },
      },
      {
        description:
          'Number of lines to show from the end of the logs (default "all")',
        name: ["-n", "--tail"],
        args: {
          name: "string",
        },
      },
      {
        description: "Show timestamps",
        name: ["-t", "--timestamps"],
      },
      {
        description:
          "Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
        name: "--until",
        args: {
          name: "string",
        },
      },
    ],
  },
  pause: {
    name: "pause",
    description: "Pause all processes within one or more containers",
    args: containersArg,
  },
  port: {
    name: "port",
    description: "List port mappings or a specific mapping for the container",
    args: [
      containersArg,
      {
        name: "[PRIVATE_PORT[/PROTO]]",
      },
    ],
  },
  rename: {
    name: "rename",
    description: "Rename an existing container",
    args: [
      containersArg,
      {
        name: "NEW_NAME",
      },
    ],
  },
  restart: {
    name: "restart",
    description: "Restart one or more containers",
    args: containersArg,
    options: [
      {
        description:
          "Seconds to wait for stop before killing the container (default 10)",
        name: ["-t", "--time"],
        args: {
          name: "int",
        },
      },
    ],
  },
  rm: {
    name: "rm",
    description: "Remove one or more containers",
    args: {
      isVariadic: true,
      name: "containers",
      generators: dockerGenerators.allDockerContainers,
    },
    options: [
      {
        name: ["-f", "--force"],
        description: "Force the removal of a running container (uses SIGKILL)",
      },
      {
        name: ["-l", "--link"],
        description: "Remove the specified link",
      },
      {
        name: ["-v", "--volumes"],
        description:
          "Remove the anonymous volumes associated with the container",
      },
    ],
  },
  run: {
    name: "run",
    description: "Run a command in a new container",
    options: [
      {
        name: "-it",
        description: "Launch an interactive session",
        icon: "fig://icon?type=commandkey",
      },
      {
        name: "--add-host",
        description: "Add a custom host-to-IP mapping (host:ip)",
        args: {
          name: "list",
        },
      },
      {
        name: ["-a", "--attach"],
        description: "Attach to STDIN, STDOUT or STDERR",
        args: {
          name: "list",
        },
      },
      {
        name: "--blkio-weight",
        description:
          "Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)",
        args: {
          name: "uint16",
        },
      },
      {
        name: "--blkio-weight-device",
        description: "Block IO weight (relative device weight) (default [])",
        args: {
          name: "list",
        },
      },
      {
        name: "--cap-add",
        description: "Add Linux capabilities",
        args: {
          name: "list",
        },
      },
      {
        name: "--cap-drop",
        description: "Drop Linux capabilities",
        args: {
          name: "list",
        },
      },
      {
        name: "--cgroup-parent",
        description: "Optional parent cgroup for the container",
        args: {
          name: "string",
        },
      },
      {
        name: "--cgroupns",
        description: `Cgroup namespace to use (host|private)
'host':    Run the container in the Docker host's cgroup namespace
'private': Run the container in its own private cgroup namespace
'':        Use the cgroup namespace as configured by the
default-cgroupns-mode option on the daemon (default)`,
        args: {
          name: "string",
        },
      },
      {
        name: "--cidfile",
        description: "Write the container ID to the file",
        args: {
          name: "string",
        },
      },
      {
        name: "--cpu-period",
        description: "Limit CPU CFS (Completely Fair Scheduler) period",
        args: {
          name: "int",
        },
      },
      {
        name: "--cpu-quota",
        description: "Limit CPU CFS (Completely Fair Scheduler) quota",
        args: {
          name: "int",
        },
      },
      {
        name: "--cpu-rt-period",
        description: "Limit CPU real-time period in microseconds",
        args: {
          name: "int",
        },
      },
      {
        name: "--cpu-rt-runtime",
        description: "Limit CPU real-time runtime in microseconds",
        args: {
          name: "int",
        },
      },
      {
        name: ["-c", "--cpu-shares"],
        description: "CPU shares (relative weight)",
        args: {
          name: "int",
        },
      },
      {
        name: "--cpus",
        description: "Number of CPUs",
        args: {
          name: "decimal",
        },
      },
      {
        name: "--cpuset-cpus",
        description: "CPUs in which to allow execution (0-3, 0,1)",
        args: {
          name: "string",
        },
      },
      {
        name: "--cpuset-mems",
        description: "MEMs in which to allow execution (0-3, 0,1)",
        args: {
          name: "string",
        },
      },
      {
        name: ["-d", "--detach"],
        description: "Run container in background and print container ID",
      },
      {
        name: "--detach-keys",
        description: "Override the key sequence for detaching a container",
        args: {
          name: "string",
        },
      },
      {
        name: "--device",
        description: "Add a host device to the container",
        args: {
          name: "list",
        },
      },
      {
        name: "--device-cgroup-rule",
        description: "Add a rule to the cgroup allowed devices list",
        args: {
          name: "list",
        },
      },
      {
        name: "--device-read-bps",
        description:
          "Limit read rate (bytes per second) from a device (default [])",
        args: {
          name: "list",
        },
      },
      {
        name: "--device-read-iops",
        description:
          "Limit read rate (IO per second) from a device (default [])",
        args: {
          name: "list",
        },
      },
      {
        name: "--device-write-bps",
        description:
          "Limit write rate (bytes per second) to a device (default [])",
        args: {
          name: "list",
        },
      },
      {
        name: "--device-write-iops",
        description:
          "Limit write rate (IO per second) to a device (default [])",
        args: {
          name: "list",
        },
      },
      {
        name: "--disable-content-trust",
        description: "Skip image verification (default true)",
      },
      {
        name: "--dns",
        description: "Set custom DNS servers",
        args: {
          name: "list",
        },
      },
      {
        name: "--dns-option",
        description: "Set DNS options",
        args: {
          name: "list",
        },
      },
      {
        name: "--dns-search",
        description: "Set custom DNS search domains",
        args: {
          name: "list",
        },
      },
      {
        name: "--domainname",
        description: "Container NIS domain name",
        args: {
          name: "string",
        },
      },
      {
        name: "--entrypoint",
        description: "Overwrite the default ENTRYPOINT of the image",
        args: {
          name: "string",
        },
      },
      {
        name: ["-e", "--env"],
        description: "Set environment variables",
        args: {
          name: "list",
        },
      },
      {
        name: "--env-file",
        description: "Read in a file of environment variables",
        args: {
          name: "list",
        },
      },
      {
        name: "--expose",
        description: "Expose a port or a range of ports",
        args: {
          name: "list",
        },
      },
      {
        name: "--gpus",
        description:
          "GPU devices to add to the container ('all' to pass all GPUs)",
        args: {
          name: "gpu-request",
        },
      },
      {
        name: "--group-add",
        description: "Add additional groups to join",
        args: {
          name: "list",
        },
      },
      {
        name: "--health-cmd",
        description: "Command to run to check health",
        args: {
          name: "string",
        },
      },
      {
        name: "--health-interval",
        description: "Time between running the check (ms|s|m|h) (default 0s)",
        args: {
          name: "duration",
        },
      },
      {
        name: "--health-retries",
        description: "Consecutive failures needed to report unhealthy",
        args: {
          name: "int",
        },
      },
      {
        name: "--health-start-period",
        description:
          "Start period for the container to initialize before starting health-retries countdown (ms|s|m|h) (default 0s)",
        args: {
          name: "duration",
        },
      },
      {
        name: "--health-timeout",
        description:
          "Maximum time to allow one check to run (ms|s|m|h) (default 0s)",
        args: {
          name: "duration",
        },
      },
      {
        name: "--help",
        description: "Print usage",
      },
      {
        name: ["-h", "--hostname"],
        description: "Container host name",
        args: {
          name: "string",
        },
      },
      {
        name: "--init",
        description:
          "Run an init inside the container that forwards signals and reaps processes",
      },
      {
        name: ["-i", "--interactive"],
        description: "Keep STDIN open even if not attached",
      },
      {
        name: "--ip",
        description: "IPv4 address (e.g., 172.30.100.104)",
        args: {
          name: "string",
        },
      },
      {
        name: "--ip6",
        description: "IPv6 address (e.g., 2001:db8::33)",
        args: {
          name: "string",
        },
      },
      {
        name: "--ipc",
        description: "IPC mode to use",
        args: {
          name: "string",
        },
      },
      {
        name: "--isolation",
        description: "Container isolation technology",
        args: {
          name: "string",
        },
      },
      {
        name: "--kernel-memory",
        description: "Kernel memory limit",
        args: {
          name: "bytes",
        },
      },
      {
        name: ["-l", "--label"],
        description: "Set meta data on a container",
        args: {
          name: "list",
        },
      },
      {
        name: "--label-file",
        description: "Read in a line delimited file of labels",
        args: {
          name: "list",
        },
      },
      {
        name: "--link",
        description: "Add link to another container",
        args: {
          name: "list",
        },
      },
      {
        name: "--link-local-ip",
        description: "Container IPv4/IPv6 link-local addresses",
        args: {
          name: "list",
        },
      },
      {
        name: "--log-driver",
        description: "Logging driver for the container",
        args: {
          name: "string",
          suggestions: [
            "json-file",
            "syslog",
            "journald",
            "gelf",
            "fluentd",
            "awslogs",
            "splunk",
            "etwlogs",
            "gcplogs",
            "none",
          ],
        },
      },
      {
        name: "--log-opt",
        description: "Log driver options",
        args: {
          name: "list",
        },
      },
      {
        name: "--mac-address",
        description: "Container MAC address (e.g., 92:d0:c6:0a:29:33)",
        args: {
          name: "string",
        },
      },
      {
        name: ["-m", "--memory"],
        description: "Memory limit",
        args: {
          name: "bytes",
        },
      },
      {
        name: "--memory-reservation",
        description: "Memory soft limit",
        args: {
          name: "bytes",
        },
      },
      {
        name: "--memory-swap",
        description:
          "Swap limit equal to memory plus swap: '-1' to enable unlimited swap",
        args: {
          name: "bytes",
        },
      },
      {
        name: "--memory-swappiness",
        description: "Tune container memory swappiness (0 to 100) (default -1)",
        args: {
          name: "int",
        },
      },
      {
        name: "--mount",
        description: "Attach a filesystem mount to the container",
        args: {
          name: "mount",
        },
      },
      {
        name: "--name",
        description: "Assign a name to the container",
        args: {
          name: "string",
        },
      },
      {
        name: "--network",
        description: "Connect a container to a network",
        args: {
          name: "network",
        },
      },
      {
        name: "--network-alias",
        description: "Add network-scoped alias for the container",
        args: {
          name: "list",
        },
      },
      {
        name: "--no-healthcheck",
        description: "Disable any container-specified HEALTHCHECK",
      },
      {
        name: "--oom-kill-disable",
        description: "Disable OOM Killer",
      },
      {
        name: "--oom-score-adj",
        description: "Tune host's OOM preferences (-1000 to 1000)",
        args: {
          name: "int",
        },
      },
      {
        name: "--pid",
        description: "PID namespace to use",
        args: {
          name: "string",
        },
      },
      {
        name: "--pids-limit",
        description: "Tune container pids limit (set -1 for unlimited)",
        args: {
          name: "int",
        },
      },
      {
        name: "--platform",
        description: "Set platform if server is multi-platform capable",
        args: {
          name: "string",
        },
      },
      {
        name: "--privileged",
        description: "Give extended privileges to this container",
      },
      {
        name: ["-p", "--publish"],
        description: "Publish a container's port(s) to the host",
        args: {
          name: "list",
        },
      },
      {
        name: ["-P", "--publish-all"],
        description: "Publish all exposed ports to random ports",
      },
      {
        name: "--pull",
        description:
          "Pull image before running ('always'|'missing'|'never') (default 'missing')",
        args: {
          name: "string",
        },
      },
      {
        name: "--read-only",
        description: "Mount the container's root filesystem as read only",
      },
      {
        name: "--restart",
        description:
          "Restart policy to apply when a container exits (default 'no')",
        args: {
          name: "string",
        },
      },
      {
        name: "--rm",
        description: "Automatically remove the container when it exits",
      },
      {
        name: "--runtime",
        description: "Runtime to use for this container",
        args: {
          name: "string",
        },
      },
      {
        name: "--security-opt",
        description: "Security Options",
        args: {
          name: "list",
        },
      },
      {
        name: "--shm-size",
        description: "Size of /dev/shm",
        args: {
          name: "bytes",
        },
      },
      {
        name: "--sig-proxy",
        description: "Proxy received signals to the process (default true)",
      },
      {
        name: "--stop-signal",
        description: "Signal to stop a container (default 'SIGTERM')",
        args: {
          name: "string",
        },
      },
      {
        name: "--stop-timeout",
        description: "Timeout (in seconds) to stop a container",
        args: {
          name: "int",
        },
      },
      {
        name: "--storage-opt",
        description: "Storage driver options for the container",
        args: {
          name: "list",
        },
      },
      {
        name: "--sysctl",
        description: "Sysctl options (default map[])",
        args: {
          name: "map",
        },
      },
      {
        name: "--tmpfs",
        description: "Mount a tmpfs directory",
        args: {
          name: "list",
        },
      },
      {
        name: ["-t", "--tty"],
        description: "Allocate a pseudo-TTY",
      },
      {
        name: "--ulimit",
        description: "Ulimit options (default [])",
        args: {
          name: "ulimit",
        },
      },
      {
        name: ["-u", "--user"],
        description: "Username or UID (format: <name|uid>[:<group|gid>])",
        args: {
          name: "string",
        },
      },
      {
        name: "--userns",
        description: "User namespace to use",
        args: {
          name: "string",
        },
      },
      {
        name: "--uts",
        description: "UTS namespace to use",
        args: {
          name: "string",
        },
      },
      {
        name: ["-v", "--volume"],
        description: "Bind mount a volume",
        args: {
          name: "list",
        },
      },
      {
        name: "--volume-driver",
        description: "Optional volume driver for the container",
        args: {
          name: "string",
        },
      },
      {
        name: "--volumes-from",
        description: "Mount volumes from the specified container(s)",
        args: {
          name: "list",
        },
      },
      {
        name: ["-w", "--workdir"],
        description: "Working directory inside the container",
        args: {
          name: "string",
        },
      },
    ],
    args: [
      {
        name: "image",
        description: "The Podman image to use",
        generators: {
          script: [
            "podman",
            "images",
            "--format",
            "{{.Repository}} {{.Size}} {{.Tag}} {{.ID}}",
          ],
          postProcess: function (out) {
            return out.split("\n").map((image) => {
              const [repo, size, tag, id] = image.split(" ");
              return {
                name: repo,
                description: `${id}@${tag} - ${size}`,
                icon: "fig://icon?type=docker",
              };
            });
          },
        },
      },
      {
        name: "command",
        // description: "The command to run in the container"
      },
    ],
  },
  start: {
    name: "start",
    description: "Start one or more containers",
    args: {
      name: "container",
      generators: dockerGenerators.allDockerContainers,
    },
    options: [
      {
        description: "Attach STDOUT/STDERR and forward signals",
        name: ["-a", "--attach"],
      },
      {
        description: "Override the key sequence for detaching a container",
        name: "--detach-keys",
        args: {
          name: "string",
        },
      },
      {
        description: "Attach container's STDIN",
        name: ["-i", "--interactive"],
      },
    ],
  },
  stats: {
    name: "stats",
    description: "Display a live stream of container resource usage statistics",
    args: containersArg,
    options: [
      {
        description: "Show all containers (default shows just running)",
        name: ["-a", "--all"],
      },
      {
        description: "Pretty-print images using a Go template",
        name: "--format",
        args: {
          name: "string",
        },
      },
      {
        description: "Disable streaming stats and only pull the first result",
        name: "--no-stream",
      },
      {
        description: "Do not truncate output",
        name: "--no-trunc",
      },
    ],
  },
  stop: {
    name: "stop",
    description: "Stop one or more containers",
    args: containersArg,
    options: [
      {
        name: ["-t", "--t"],
        description: "Seconds to wait for stop before killing it (default 10)",
        args: {
          name: "int",
        },
      },
    ],
  },
  top: {
    name: "top",
    description: "Display the running processes of a container",
    // TODO: You can pass in psOptions?
    args: containersArg,
  },
  unpause: {
    name: "unpause",
    description: "Unpause the processes in one or more containers",
    args: {
      name: "container",
      generators: dockerGenerators.pausedDockerContainers,
    },
  },
  update: {
    name: "update",
    description: "Update an existing container",
    // INFO: You can do this on any container, even if it's not running - Is that useful though?
    // INFO: For now, only displaying running containers
    args: containersArg,
    options: [
      {
        args: {
          name: "uint16",
        },
        description:
          "Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)",
        name: "--blkio-weight",
      },
      {
        args: {
          name: "int",
        },
        description: "Limit CPU CFS (Completely Fair Scheduler) period",
        name: "--cpu-period",
      },
      {
        args: {
          name: "int",
        },
        description: "Limit CPU CFS (Completely Fair Scheduler) quota",
        name: "--cpu-quota",
      },
      {
        args: {
          name: "int",
        },
        description: "Limit the CPU real-time period in microseconds",
        name: "--cpu-rt-period",
      },
      {
        args: {
          name: "int",
        },
        description: "Limit the CPU real-time runtime in microseconds",
        name: "--cpu-rt-runtime",
      },
      {
        args: {
          name: "int",
        },
        description: "CPU shares (relative weight)",
        name: ["-c", "--cpu-shares"],
      },
      {
        args: {
          name: "decimal",
        },
        description: "Number of CPUs",
        name: "--cpus",
      },
      {
        args: {
          name: "string",
        },
        description: "CPUs in which to allow execution (0-3, 0,1)",
        name: "--cpuset-cpus",
      },
      {
        args: {
          name: "string",
        },
        description: "MEMs in which to allow execution (0-3, 0,1)",
        name: "--cpuset-mems",
      },
      {
        args: {
          name: "bytes",
        },
        description: "Kernel memory limit",
        name: "--kernel-memory",
      },
      {
        args: {
          name: "bytes",
        },
        description: "Memory limit",
        name: ["-m", "--memory"],
      },
      {
        args: {
          name: "bytes",
        },
        description: "Memory soft limit",
        name: "--memory-reservation",
      },
      {
        args: {
          name: "bytes",
        },
        description:
          "Swap limit equal to memory plus swap: '-1' to enable unlimited swap",
        name: "--memory-swap",
      },
      {
        args: {
          name: "int",
        },
        description: "Tune container pids limit (set -1 for unlimited)",
        name: "--pids-limit",
      },
      {
        args: {
          name: "string",
        },
        description: "Restart policy to apply when a container exits",
        name: "--restart",
      },
    ],
  },
  wait: {
    name: "wait",
    description: "Block on one or more containers",
    args: containersArg,
  },
  ps: {
    name: "ps",
    description: "List containers",
    options: [
      {
        description: "Show all containers (default shows just running)",
        name: ["-a", "--all"],
      },
      {
        args: {
          name: "filter",
        },
        description: "Filter output based on conditions provided",
        name: ["-f", "--filter"],
      },
      {
        args: {
          name: "string",
        },
        description: "Pretty-print containers using a Go template",
        name: "--format",
      },
      {
        args: {
          name: "int",
        },
        description:
          "Show n last created containers (includes all states) (default -1)",
        name: ["-n", "--last"],
      },
      {
        description: "Show the latest created container (includes all states)",
        name: ["-l", "--latest"],
      },
      {
        description: "Don't truncate output",
        name: "--no-trunc",
      },
      {
        description: "Only display container IDs",
        name: ["-q", "--quiet"],
      },
      {
        description: "Display total file sizes",
        name: ["-s", "--size"],
      },
    ],
  },
  history: {
    name: "history",
    description: "Show history of a specified image",
    args: imagesArg,
    options: [
      {
        description: "Pretty-print images using a Go template",
        name: "--format",
        args: {
          name: "string",
        },
      },
      {
        description:
          "Print sizes and dates in human readable format (default true)",
        name: ["-H", "--human"],
      },
      {
        description: "Don't truncate output",
        name: "--no-trunc",
      },
      {
        description: "Only show image IDs",
        name: ["-q", "--quiet"],
      },
    ],
  },
  imageImport: {
    name: "import",
    description: "Import a tarball to create a filesystem image",
    args: {
      name: "file|URL|- [REPOSITORY[:TAG]]",
    },
    options: [
      {
        args: {
          name: "list",
        },
        description: "Apply Dockerfile instruction to the created image",
        name: ["-c", "--change"],
      },
      {
        args: {
          name: "string",
        },
        description: "Set commit message for imported image",
        name: ["-m", "--message"],
      },
      {
        args: {
          name: "string",
        },
        description: "Set platform if server is multi-platform capable",
        name: "--platform",
      },
    ],
  },
  imageList: {
    name: "images",
    description: "List images in local storage",
    args: {
      name: "[REPOSITORY[:TAG]]",
    },
    options: [
      {
        name: ["-a", "--all"],
        description: "Show all images (default hides intermediate images)",
      },
      {
        name: "--digests",
        description: "Show digests",
      },
      {
        name: ["-f", "--filter"],
        description: "Filter output based on conditions provided",
        args: {
          name: "filter",
        },
      },
      {
        name: "--format",
        description: "Pretty-print images using a Go template",
        args: {
          name: "string",
        },
      },
      {
        name: "--no-trunc",
        description: "Don't truncate output",
      },
      {
        name: ["-q", "--quiet"],
        description: "Only show image IDs",
      },
    ],
  },
  load: {
    name: "load",
    description: "Load image(s) from a tar archive",
    options: [
      {
        name: "-i",
        description: "Read from tar archive file, instead of STDIN",
        args: {
          name: "string",
        },
      },
      {
        name: ["-q", "--quiet"],
        description: "Suppress the load output",
      },
    ],
  },
  pull: {
    name: "pull",
    description: "Pull an image from a registry",
    args: {
      name: "NAME[:TAG|@DIGEST]",
      generators: dockerGenerators.dockerHubSearch,
      debounce: true,
    },
    options: [
      {
        description: "Download all tagged images in the repository",
        name: ["-a", "--all-tags"],
      },
      {
        description: "Skip image verification (default true)",
        name: "--disable-content-trust",
      },
      {
        description: "Set platform if server is multi-platform capable",
        name: "--platform",
        args: {
          name: "string",
        },
      },
      {
        description: "Suppress verbose output",
        name: ["-q", "--quiet"],
      },
    ],
  },
  push: {
    name: "push",
    description: "Push an image to a specified destination",
    // TODO: Autocomplete images
    args: {
      name: "NAME[:TAG]",
    },
    options: [
      {
        description: "Push all tagged images in the repository",
        name: ["-a", "--all-tags"],
      },
      {
        description: "Skip image signing (default true)",
        name: "--disable-content-trust",
      },
      {
        description: "Suppress verbose output",
        name: ["-q", "--quiet"],
      },
    ],
  },
  tag: {
    name: "tag",
    description: "Add an additional name to a local image",
    args: {
      name: "SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]",
    },
  },
  imageSave: {
    name: "save",
    description: "Save image(s) to an archive",
    args: imagesArg,
    options: [
      {
        description: "Write to a file, instead of STDOUT",
        name: ["-o", "--output"],
        args: {
          name: "string",
        },
      },
    ],
  },
  removeImage: {
    name: "rmi",
    description: "Remove one or more images from local storage",
    args: { ...imagesArg, isVariadic: true },
    options: [
      {
        name: ["-f", "--force"],
        description: "Force removal of the image",
      },
      {
        name: "--no-prune",
        description: "Do not delete untagged parents",
      },
    ],
  },
};

const completionSpec: Fig.Spec = {
  name: "podman",
  description: "Manage containers, pods, and images with Podman",
  subcommands: [
    sharedCommands.attach,
    sharedCommands.build,
    sharedCommands.commit,
    sharedCommands.cp,
    sharedCommands.create,
    sharedCommands.diff,
    {
      name: "events",
      description: "Show podman system events",
      options: [
        {
          args: {
            name: "filter",
          },
          description: "Filter output based on conditions provided",
          name: ["-f", "--filter"],
        },
        {
          args: {
            name: "string",
          },
          description: "Format the output using the given Go template",
          name: "--format",
        },
        {
          args: {
            name: "string",
          },
          description: "Show all events created since timestamp",
          name: "--since",
        },
        {
          args: {
            name: "string",
          },
          description: "Stream events until this timestamp",
          name: "--until",
        },
      ],
    },
    sharedCommands.exec,
    sharedCommands.export,
    sharedCommands.history,
    sharedCommands.imageList,
    sharedCommands.imageImport,
    {
      name: "info",
      description: "Display podman system information",
      options: [
        {
          args: {
            name: "string",
          },
          description: "Format the output using the given Go template",
          name: ["-f", "--format"],
        },
      ],
    },
    {
      name: "inspect",
      description: "Display the configuration of object denoted by ID",
      args: {
        // TODO: There are more types of podman objects beyond running containers
        // that can be inspected
        name: "Name or ID",
        generators: [
          {
            script: ["podman", "ps", "-a", "--format", "{{ json . }}"],
            postProcess: function (out) {
              const allLines = out.split("\n").map((line) => JSON.parse(line));
              return allLines.map((i) => ({
                name: i.Id,
                displayName: `[con] ${i.Id} (${i.Image})`,
              }));
            },
          },
          {
            script: ["podman", "images", "-a", "--format", "{{ json . }}"],
            postProcess: function (out) {
              const allLines = out.split("\n").map((line) => JSON.parse(line));
              return allLines.map((i) => {
                let displayName;
                if (i.repository === "\u003cnone\u003e") {
                  displayName = i.Id;
                } else {
                  displayName = i.repository;
                  if (i.Tag !== "\u003cnone\u003e") {
                    displayName += `:${i.tag}`;
                  }
                }

                return {
                  name: i.ID,
                  displayName: `[img] ${displayName}`,
                };
              });
            },
          },
          {
            script: ["docker", "volume", "ls", "--format", "{{ json . }}"],
            postProcess: function (out) {
              const allLines = out.split("\n").map((line) => JSON.parse(line));
              return allLines.map((i) => ({
                name: i.Name,
                displayName: `[vol] ${i.Name}`,
              }));
            },
          },
        ],
      },
      options: [
        {
          name: ["-f", "--format"],
          description: "Format the output using the given Go template",
          args: {
            name: "string",
          },
        },
        {
          name: ["-s", "--size"],
          description: "Display total file sizes if the type is container",
        },
        {
          name: "--type",
          description: "Return JSON for specified type",
          args: {
            name: "string",
          },
        },
      ],
    },
    sharedCommands.kill,
    sharedCommands.load,
    {
      name: "login",
      description: "Log in to a container registry",
      args: {
        name: "server",
      },
      options: [
        {
          description: "Password",
          name: ["-p", "--password"],
          args: {
            name: "string",
          },
        },
        {
          description: "Take the password from stdin",
          name: "--password-stdin",
        },
        {
          description: "Username",
          name: ["-u", "--username"],
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of a container registry",
      args: {
        name: "server",
      },
    },
    sharedCommands.logs,
    sharedCommands.pause,
    sharedCommands.port,
    sharedCommands.ps,
    sharedCommands.pull,
    sharedCommands.push,
    sharedCommands.rename,
    sharedCommands.restart,
    sharedCommands.rm,
    sharedCommands.removeImage,
    sharedCommands.run,
    sharedCommands.imageSave,
    {
      name: "search",
      description: "Search registry for image",
      args: {
        name: "TERM",
        description: "Search term",
      },
      options: [
        {
          args: {
            name: "filter",
          },
          description: "Filter output based on conditions provided",
          name: ["-f", "--filter"],
        },
        {
          args: {
            name: "string",
          },
          description: "Pretty-print search using a Go template",
          name: "--format",
        },
        {
          args: {
            name: "int",
          },
          description: "Max number of search results (default 25)",
          name: "--limit",
        },
        {
          description: "Don't truncate output",
          name: "--no-trunc",
        },
      ],
    },
    sharedCommands.start,
    sharedCommands.stats,
    sharedCommands.stop,
    sharedCommands.tag,
    sharedCommands.top,
    sharedCommands.unpause,
    sharedCommands.update,
    {
      name: "version",
      description: "Display the Podman version information",
      options: [
        {
          description:
            "Format the output. Values: [pretty | json]. (Default: pretty)",
          name: ["-f", "--format"],
          args: {
            name: "string",
            suggestions: ["pretty", "json"],
          },
        },
        {
          description: "Kubernetes config file",
          name: "--kubeconfig",
          args: {
            name: "string",
          },
        },
      ],
    },
    sharedCommands.wait,
    {
      name: "container",
      description: "Manage containers",
      subcommands: [
        sharedCommands.attach,
        sharedCommands.cp,
        sharedCommands.create,
        sharedCommands.diff,
        sharedCommands.exec,
        sharedCommands.export,
        {
          name: "inspect",
          description: "Return low-level information on Docker objects",
          args: containersArg,
          options: [
            {
              name: ["-f", "--format"],
              description: "Format the output using the given Go template",
              args: {
                name: "string",
              },
            },
            {
              name: ["-s", "--size"],
              description: "Display total file sizes if the type is container",
            },
          ],
        },
        sharedCommands.kill,
        sharedCommands.logs,
        { ...sharedCommands.ps, name: "ls" },
        sharedCommands.pause,
        sharedCommands.port,
        {
          name: "prune",
          description: "Remove all stopped containers",
          options: [
            {
              name: "--filter",
              description: "Provide filter values (e.g. 'until=<timestamp>')",
              args: {
                name: "filter",
              },
            },
            {
              name: ["-f", "--force"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        sharedCommands.rename,
        sharedCommands.restart,
        sharedCommands.rm,
        sharedCommands.run,
        sharedCommands.start,
        sharedCommands.stats,
        sharedCommands.stop,
        sharedCommands.top,
        sharedCommands.unpause,
        sharedCommands.update,
        sharedCommands.wait,
      ],
    },
    {
      name: "image",
      description: "Manage images",
      subcommands: [
        sharedCommands.build,
        sharedCommands.history,
        sharedCommands.imageImport,
        {
          name: "inspect",
          description: "Display detailed information on one or more images",
          args: { ...imagesArg, isVariadic: true },
          options: [
            {
              name: "-f",
              description: "Format the output using the given Go template",
              args: {
                name: "string",
              },
            },
          ],
        },
        sharedCommands.load,
        { ...sharedCommands.imageList, name: "ls" },
        {
          name: "prune",
          description: "Remove unused images",
          options: [
            {
              name: ["-a", "--all"],
              description: "Remove all unused images, not just dangling ones",
            },
            {
              name: "--filter",
              description: "Provide filter values (e.g. 'until=<timestamp>')",
              args: {
                name: "filter",
              },
            },
            {
              name: ["-f", "--force"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        sharedCommands.pull,
        sharedCommands.push,
        { ...sharedCommands.removeImage, name: "rm" },
        sharedCommands.imageSave,
        sharedCommands.tag,
      ],
    },
    {
      name: "network",
      description: "Manage networks",
      subcommands: [
        {
          name: "connect",
          description: "Connect a container to a network",
          args: [
            {
              name: "NETWORK",
              generators: dockerGenerators.listDockerNetworks,
            },
            containersArg,
          ],
          options: [
            {
              name: "--alias",
              description: "Add network-scoped alias for the container",
              args: {
                name: "strings",
              },
            },
            {
              name: "--driver-opt",
              description: "Driver options for the network",
              args: {
                name: "strings",
              },
            },
            {
              name: "--ip",
              description: "IPv4 address (e.g., 172.30.100.104)",
              args: {
                name: "string",
              },
            },
            {
              name: "--ip6",
              description: "IPv6 address (e.g., 2001:db8::33)",
              args: {
                name: "string",
              },
            },
            {
              name: "--link",
              description: "Add link to another container",
              args: {
                name: "list",
              },
            },
            {
              name: "--link-local-ip",
              description: "Add a link-local address for the container",
              args: {
                name: "strings",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a network",
          args: {
            name: "NETWORK",
          },
          options: [
            {
              name: "--attachable",
              description: "Enable manual container attachment",
            },
            {
              name: "--aux-address",
              description:
                "Auxiliary IPv4 or IPv6 addresses used by Network driver (default map[])",
              args: {
                name: "map",
              },
            },
            {
              name: "--config-from",
              description: "The network from which to copy the configuration",
              args: {
                name: "string",
              },
            },
            {
              name: "--config-only",
              description: "Create a configuration only network",
            },
            {
              name: ["-d", "--driver"],
              description: 'Driver to manage the Network (default "bridge")',
              args: {
                name: "string",
              },
            },
            {
              name: "--gateway",
              description: "IPv4 or IPv6 Gateway for the master subnet",
              args: {
                name: "strings",
              },
            },
            {
              name: "--ingress",
              description: "Create swarm routing-mesh network",
            },
            {
              name: "--internal",
              description: "Restrict external access to the network",
            },
            {
              name: "--ip-range",
              description: "Allocate container ip from a sub-range",
              args: {
                name: "strings",
              },
            },
            {
              name: "--ipam-driver",
              description: 'IP Address Management Driver (default "default")',
              args: {
                name: "string",
              },
            },
            {
              name: "--ipam-opt",
              description: "Set IPAM driver specific options (default map[])",
              args: {
                name: "map",
              },
            },
            {
              name: "--ipv6",
              description: "Enable IPv6 networking",
            },
            {
              name: "--label",
              description: "Set metadata on a network",
              args: {
                name: "list",
              },
            },
            {
              name: ["-o", "--opt"],
              description: "Set driver specific options (default map[])",
              args: {
                name: "map",
              },
            },
            {
              name: "--scope",
              description: "Control the network's scope",
              args: {
                name: "string",
              },
            },
            {
              name: "--subnet",
              description:
                "Subnet in CIDR format that represents a network segment",
              args: {
                name: "strings",
              },
            },
          ],
        },
        {
          name: "disconnect",
          description: "Disconnect a container from a network",
          args: [
            {
              name: "NETWORK",
              generators: dockerGenerators.listDockerNetworks,
            },
            containersArg,
          ],
          options: [
            {
              name: ["-f", "--force"],
              description: "Force the container to disconnect from a network",
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more networks",
          args: {
            name: "NETWORK",
            generators: dockerGenerators.listDockerNetworks,
            isVariadic: true,
          },
          options: [
            {
              name: ["-f", "--format"],
              description: "Format the output using the given Go template",
              args: {
                name: "string",
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Verbose output for diagnostics",
            },
          ],
        },
        {
          name: "ls",
          description: "List networks",
          options: [
            {
              name: ["-f", "--filter"],
              description: "Provide filter values (e.g. 'driver=bridge')",
              args: {
                name: "filter",
              },
            },
            {
              name: "--format",
              description: "Pretty-print networks using a Go template",
              args: {
                name: "string",
              },
            },
            {
              name: "--no-trunc",
              description: "Do not truncate the output",
            },
            {
              name: ["-q", "--quiet"],
              description: "Only display network IDs",
            },
          ],
        },
        {
          name: "prune",
          description: "Remove all unused networks",
          options: [
            {
              name: "--filter",
              description: "Provide filter values (e.g. 'until=<timestamp>')",
              args: {
                name: "filter",
              },
            },
            {
              name: ["-f", "--force"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more networks",
          args: {
            name: "NETWORK",
            generators: dockerGenerators.listDockerNetworks,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "secret",
      description: "Manage secrets",
      subcommands: [
        {
          name: "create",
          description: "Create a secret from a file or STDIN as content",
          args: [
            {
              name: "SECRET NAME",
            },
            {
              name: "SECRET",
              template: "filepaths",
            },
          ],
          options: [
            {
              name: ["-d", "--driver"],
              description: "Secret driver",
              args: {
                name: "string",
              },
            },
            {
              name: ["-l", "--label"],
              description: "Secret labels",
              args: {
                name: "list",
              },
            },
            {
              name: "--template-driver",
              description: "Template driver",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more secrets",
          args: {
            name: "SECRET",
            generators: dockerGenerators.listDockerSecrets,
            isVariadic: true,
          },
          options: [
            {
              name: ["-f", "--format"],
              description: "Format the output using the given Go template",
              args: {
                name: "string",
              },
            },
            {
              name: "--pretty",
              description: "Print the information in a human friendly format",
            },
          ],
        },
        {
          name: "ls",
          description: "List secrets",
          options: [
            {
              name: ["-f", "--filter"],
              description: "Filter output based on conditions provided",
              args: {
                name: "filter",
              },
            },
            {
              name: "--format",
              description: "Pretty-print secrets using a Go template",
              args: {
                name: "string",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Only display IDs",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more secrets",
          args: {
            name: "SECRET",
            generators: dockerGenerators.listDockerSecrets,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "system",
      description: "Manage podman",
      subcommands: [
        {
          name: "prune",
          description: "Remove unused data",
          options: [
            {
              name: ["-a", "--all"],
              description: "Remove all unused images not just dangling ones",
            },
            {
              name: "--filter",
              description: `Provide filter values (e.g. 'label=<key>=<value')`,
              args: {
                name: "filter",
              },
            },
            {
              name: ["-f", "--force"],
              description: "Do not prompt for confirmation",
            },
            {
              name: "--volumes",
              description: "Prune volumes",
            },
          ],
        },
        {
          name: "df",
          description: "Show podman disk usage",
          options: [
            {
              name: "--format",
              description: "Pretty-print images using a Go template",
              args: {
                name: "string",
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Show detailed information on space usage",
            },
          ],
        },
        {
          name: "events",
          description: "Get real time events from the server",
          options: [
            {
              name: ["-f", "--filter"],
              description: "Filter output based on conditions provided",
              args: {
                name: "filter",
              },
            },
            {
              name: "--format",
              description: "Format the output using the given Go template",
              args: {
                name: "string",
              },
            },
            {
              name: "--since",
              description: "Show all events created since timestamp",
              args: {
                name: "string",
              },
            },
            {
              name: "--until",
              description: "Stream events until this timestamp",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "info",
          description: "Display podman system information",
          options: [
            {
              name: ["-f", "--format"],
              description: "Format the output using the given Go template",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "volume",
      description: "Manage volumes",
      subcommands: [
        {
          name: "create",
          description: "Create a volume",
          args: {
            name: "VOLUME",
          },
          options: [
            {
              name: ["-d", "--driver"],
              description: 'Specify volume driver name (default "local")',
              args: {
                name: "string",
              },
            },
            {
              name: "--label",
              description: "Set metadata for a volume",
              args: {
                name: "list",
              },
            },
            {
              name: ["-o", "--opt"],
              description: "Set driver specific options (default map[])",
              args: {
                name: "map",
              },
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more volumes",
          args: {
            name: "VOLUME",
            generators: dockerGenerators.listDockerVolumes,
            isVariadic: true,
          },
          options: [
            {
              name: ["-f", "--format"],
              description: "Format the output using the given Go template",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "ls",
          description: "List volumes",
          options: [
            {
              name: ["-f", "--filter"],
              description: "Provide filter values (e.g. 'dangling=true')",
              args: {
                name: "filter",
              },
            },
            {
              name: "--format",
              description: "Pretty-print volumes using a Go template",
              args: {
                name: "string",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Only display volume names",
            },
          ],
        },
        {
          name: "prune",
          description: "Remove all unused local volumes",
          options: [
            {
              name: "--filter",
              description: "Provide filter values (e.g. 'label=<label>')",
              args: {
                name: "filter",
              },
            },
            {
              name: ["-f", "--force"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more volumes",
          args: {
            name: "VOLUME",
            generators: dockerGenerators.listDockerVolumes,
            isVariadic: true,
          },
          options: [
            {
              name: ["-f", "--force"],
              description: "Force the removal of one or more volumes",
            },
          ],
        },
      ],
    },
    {
      name: "compose",
      description:
        "Run compose workloads via an external provider such as docker-compose or podman-compose",
      loadSpec: "docker-compose",
    },
    {
      name: "generate",
      description:
        "Generate structured data based on containers, pods or volumes",
    },
    {
      name: "healthcheck",
      description: "Manage health checks on containers",
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "init",
      description: "Initialize one or more containers",
    },
    {
      name: "kube",
      description: "Play containers, pods or volumes from a structured file",
    },
    {
      name: "machine",
      description: "Manage a virtual machine",
      subcommands: [
        {
          name: "info",
          description: "Display machine host info",
        },
        {
          name: "init",
          description: "Initialize a virtual machine",
        },
        {
          name: "inspect",
          description: "Inspect an existing machine",
        },
        {
          name: "list",
          description: "List machines",
        },
        {
          name: "os",
          description: "Manage a Podman virtual machine's OS",
        },
        {
          name: "rm",
          description: "Remove an existing machine",
        },
        {
          name: "set",
          description: "Set a virtual machine setting",
        },
        {
          name: "ssh",
          description: "SSH into an existing machine",
        },
        {
          name: "start",
          description: "Start an existing machine",
        },
        {
          name: "stop",
          description: "Stop an existing machine",
        },
      ],
    },
    {
      name: "manifest",
      description: "Manipulate manifest lists and image indexes",
    },
    {
      name: "pod",
      description: "Manage pods",
    },
    {
      name: "untag",
      description: "Remove a name from a local image",
    },
  ],
  options: [
    {
      name: ["--connection", "-c"],
      description: "Connection to use for remote Podman service",
    },
    {
      name: ["--help", "-h"],
      description: "Help for podman",
    },
    {
      name: "--identity",
      description: "Path to SSH identity file, (CONTAINER_SSHKEY)",
    },
    {
      name: "--log-level",
      description:
        "Log messages above specified level (trace, debug, info, warn, warning, error, fatal, panic) (default 'warn')",
    },
    {
      name: "--out",
      description: "Send output (stdout) from podman to a file",
    },
    {
      name: "--ssh",
      description: "Define the ssh mode (default 'golang')",
    },
    {
      name: "--storage-opt",
      description: "Used to pass an option to the storage driver",
    },
    {
      name: "--url",
      description: "URL to access Podman service (CONTAINER_HOST)",
    },
    {
      name: ["--version", "-v"],
      description: "Version for podman",
    },
  ],
};

export default completionSpec;
