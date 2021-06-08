const postProcessDockerPs: Fig.Generator["postProcess"] = (out) => {
  const allLines = out.split("\n");
  return allLines.map((i) => {
    try {
      const parsedJSON: Record<string, string> = JSON.parse(i);
      return {
        name: parsedJSON.ID,
        displayName: `${parsedJSON.ID} (${parsedJSON.Image})`,
      };
    } catch (error) {
      console.error(error);
    }
  });
};

const dockerGenerators: Record<string, Fig.Generator> = {
  runningDockerContainers: {
    script: `docker ps --format '{{ json . }}'`,
    postProcess: postProcessDockerPs,
  },
  allDockerContainers: {
    script: `docker ps -a --format '{{ json . }}'`,
    postProcess: postProcessDockerPs,
  },
  pausedDockerContainers: {
    script: `docker ps --filter status=paused --format '{{ json . }}'`,
    postProcess: postProcessDockerPs,
  },
  allLocalImages: {
    script: `docker image ls --format '{{ json . }}'`,
    postProcess: function (out) {
      const allLines: Array<Record<string, string>> = out
        .split("\n")
        .map((line) => JSON.parse(line));
      return allLines.map((i) => ({
        name: `${i.Repository}`,
      }));
    },
  },
  dockerHubSearch: {
    script: function (context) {
      if (context[context.length - 1] === "") return "";
      const searchTerm = context[context.length - 1];
      return `docker search ${searchTerm} --format '{{ json . }}'`;
    },
    postProcess: function (out) {
      const allLines: Array<Record<string, string>> = out
        .split("\n")
        .map((line) => JSON.parse(line));
      return allLines.map((i) => ({
        name: `${i.Name}`,
        icon: "fig://icon?type=docker",
      }));
    },
    trigger: function () {
      return true;
    },
  },
  allDockerContexts: {
    script: `docker context list --format '{{ json . }}'`,
    postProcess: function (out) {
      const allLines: Array<Record<string, string>> = out
        .split("\n")
        .map((line) => JSON.parse(line));
      return allLines.map((i) => ({
        name: i.Name,
        description: i.Description,
      }));
    },
  },
  listDockerNetworks: {
    script: `docker network list --format '{{ json . }}'`,
    postProcess: function (out) {
      const allLines: Array<Record<string, string>> = out
        .split("\n")
        .map((line) => JSON.parse(line));
      return allLines.map((i) => ({
        name: i.Name,
        description: i.ID,
      }));
    },
  },
  listDockerSwarmNodes: {
    script: `docker node list --format '{{ json . }}'`,
    postProcess: function (out) {
      const allLines: Array<Record<string, string>> = out
        .split("\n")
        .map((line) => JSON.parse(line));
      return allLines.map((i) => ({
        name: i.ID,
        displayName: `${i.ID} - ${i.Hostname}`,
        description: i.Status,
      }));
    },
  },
  listDockerPlugins: {
    script: `docker plugin list --format '{{ json . }}'`,
    postProcess: function (out) {
      const allLines: Array<Record<string, string>> = out
        .split("\n")
        .map((line) => JSON.parse(line));
      return allLines.map((i) => ({
        name: i.Name,
        description: i.ID,
      }));
    },
  },
};

const containersArg = {
  name: "container",
  generators: [dockerGenerators.runningDockerContainers],
};

const imagesArg = {
  name: "image",
  generators: [dockerGenerators.allLocalImages],
};

const containerAndCommandArgs = [
  containersArg,
  {
    name: "command",
    isCommand: true,
  },
];

const contextsArg = {
  name: "CONTEXT",
  generators: [dockerGenerators.allDockerContexts],
};

const sharedCommands: Record<string, Fig.Subcommand> = {
  build: {
    name: "build",
    description: "Build an image from a Dockerfile",
    args: {
      name: "path",
      generators: [
        {
          template: "folders",
        },
      ],
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
          generators: [
            {
              template: "filepaths",
            },
          ],
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
          generators: [
            {
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
                  dockerfilePath = "$PWD/Dockerfile";
                }

                return `grep -iE 'FROM.*AS' "${dockerfilePath}"`;
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
          ],
        },
      },
    ],
  },
  create: {
    name: "create",
    description: "Create a new container",
    args: [
      {
        name: "container",
        generators: [dockerGenerators.allLocalImages],
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
        name: ["--add-host"],
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
        name: ["--blkio-weight"],
      },
      {
        args: {
          name: "list",
        },
        description: "Block IO weight (relative device weight) (default [])",
        name: ["--blkio-weight-device"],
      },
      {
        args: {
          name: "list",
        },
        description: "Add Linux capabilities",
        name: ["--cap-add"],
      },
      {
        args: {
          name: "list",
        },
        description: "Drop Linux capabilities",
        name: ["--cap-drop"],
      },
      {
        args: {
          name: "string",
        },
        description: "Optional parent cgroup for the container",
        name: ["--cgroup-parent"],
      },
      {
        args: {
          name: "string",
        },
        description: "Cgroup namespace to use (host|private)",
        name: ["--cgroupns"],
      },
      {
        args: {
          name: "string",
        },
        description: "Write the container ID to the file",
        name: ["--cidfile"],
      },
      {
        args: {
          name: "int",
        },
        description: "Limit CPU CFS (Completely Fair Scheduler) period",
        name: ["--cpu-period"],
      },
      {
        args: {
          name: "int",
        },
        description: "Limit CPU CFS (Completely Fair Scheduler) quota",
        name: ["--cpu-quota"],
      },
      {
        args: {
          name: "int",
        },
        description: "Limit CPU real-time period in microseconds",
        name: ["--cpu-rt-period"],
      },
      {
        args: {
          name: "int",
        },
        description: "Limit CPU real-time runtime in microseconds",
        name: ["--cpu-rt-runtime"],
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
        name: ["--cpus"],
      },
      {
        args: {
          name: "string",
        },
        description: "CPUs in which to allow execution (0-3, 0,1)",
        name: ["--cpuset-cpus"],
      },
      {
        args: {
          name: "string",
        },
        description: "MEMs in which to allow execution (0-3, 0,1)",
        name: ["--cpuset-mems"],
      },
      {
        args: {
          name: "list",
        },
        description: "Add a host device to the container",
        name: ["--device"],
      },
      {
        args: {
          name: "list",
        },
        description: "Add a rule to the cgroup allowed devices list",
        name: ["--device-cgroup-rule"],
      },
      {
        args: {
          name: "list",
        },
        description:
          "Limit read rate (bytes per second) from a device (default [])",
        name: ["--device-read-bps"],
      },
      {
        args: {
          name: "list",
        },
        description:
          "Limit read rate (IO per second) from a device (default [])",
        name: ["--device-read-iops"],
      },
      {
        args: {
          name: "list",
        },
        description:
          "Limit write rate (bytes per second) to a device (default [])",
        name: ["--device-write-bps"],
      },
      {
        args: {
          name: "list",
        },
        description:
          "Limit write rate (IO per second) to a device (default [])",
        name: ["--device-write-iops"],
      },
      {
        description: "Skip image verification (default true)",
        name: ["--disable-content-trust"],
      },
      {
        args: {
          name: "list",
        },
        description: "Set custom DNS servers",
        name: ["--dns"],
      },
      {
        args: {
          name: "list",
        },
        description: "Set DNS options",
        name: ["--dns-option"],
      },
      {
        args: {
          name: "list",
        },
        description: "Set custom DNS search domains",
        name: ["--dns-search"],
      },
      {
        args: {
          name: "string",
        },
        description: "Container NIS domain name",
        name: ["--domainname"],
      },
      {
        args: {
          name: "string",
        },
        description: "Overwrite the default ENTRYPOINT of the image",
        name: ["--entrypoint"],
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
        name: ["--env-file"],
      },
      {
        args: {
          name: "list",
        },
        description: "Expose a port or a range of ports",
        name: ["--expose"],
      },
      {
        args: {
          name: "gpu-request",
        },
        description:
          "GPU devices to add to the container ('all' to pass all GPUs)",
        name: ["--gpus"],
      },
      {
        args: {
          name: "list",
        },
        description: "Add additional groups to join",
        name: ["--group-add"],
      },
      {
        args: {
          name: "string",
        },
        description: "Command to run to check health",
        name: ["--health-cmd"],
      },
      {
        args: {
          name: "duration",
        },
        description: "Time between running the check (ms|s|m|h) (default 0s)",
        name: ["--health-interval"],
      },
      {
        args: {
          name: "int",
        },
        description: "Consecutive failures needed to report unhealthy",
        name: ["--health-retries"],
      },
      {
        args: {
          name: "duration",
        },
        description:
          "Start period for the container to initialize before starting health-retries countdown (ms|s|m|h) (default 0s)",
        name: ["--health-start-period"],
      },
      {
        args: {
          name: "duration",
        },
        description:
          "Maximum time to allow one check to run (ms|s|m|h) (default 0s)",
        name: ["--health-timeout"],
      },
      {
        description: "Print usage",
        name: ["--help"],
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
        name: ["--init"],
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
        name: ["--ip"],
      },
      {
        args: {
          name: "string",
        },
        description: "IPv6 address (e.g., 2001:db8::33)",
        name: ["--ip6"],
      },
      {
        args: {
          name: "string",
        },
        description: "IPC mode to use",
        name: ["--ipc"],
      },
      {
        args: {
          name: "string",
        },
        description: "Container isolation technology",
        name: ["--isolation"],
      },
      {
        args: {
          name: "bytes",
        },
        description: "Kernel memory limit",
        name: ["--kernel-memory"],
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
        name: ["--label-file"],
      },
      {
        args: {
          name: "list",
        },
        description: "Add link to another container",
        name: ["--link"],
      },
      {
        args: {
          name: "list",
        },
        description: "Container IPv4/IPv6 link-local addresses",
        name: ["--link-local-ip"],
      },
      {
        args: {
          name: "string",
        },
        description: "Logging driver for the container",
        name: ["--log-driver"],
      },
      {
        args: {
          name: "list",
        },
        description: "Log driver options",
        name: ["--log-opt"],
      },
      {
        args: {
          name: "string",
        },
        description: "Container MAC address (e.g., 92:d0:c6:0a:29:33)",
        name: ["--mac-address"],
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
        name: ["--memory-reservation"],
      },
      {
        args: {
          name: "bytes",
        },
        description:
          "Swap limit equal to memory plus swap: '-1' to enable unlimited swap",
        name: ["--memory-swap"],
      },
      {
        args: {
          name: "int",
        },
        description: "Tune container memory swappiness (0 to 100) (default -1)",
        name: ["--memory-swappiness"],
      },
      {
        args: {
          name: "mount",
        },
        description: "Attach a filesystem mount to the container",
        name: ["--mount"],
      },
      {
        args: {
          name: "string",
        },
        description: "Assign a name to the container",
        name: ["--name"],
      },
      {
        args: {
          name: "network",
        },
        description: "Connect a container to a network",
        name: ["--network"],
      },
      {
        args: {
          name: "list",
        },
        description: "Add network-scoped alias for the container",
        name: ["--network-alias"],
      },
      {
        description: "Disable any container-specified HEALTHCHECK",
        name: ["--no-healthcheck"],
      },
      {
        description: "Disable OOM Killer",
        name: ["--oom-kill-disable"],
      },
      {
        args: {
          name: "int",
        },
        description: "Tune host's OOM preferences (-1000 to 1000)",
        name: ["--oom-score-adj"],
      },
      {
        args: {
          name: "string",
        },
        description: "PID namespace to use",
        name: ["--pid"],
      },
      {
        args: {
          name: "int",
        },
        description: "Tune container pids limit (set -1 for unlimited)",
        name: ["--pids-limit"],
      },
      {
        args: {
          name: "string",
        },
        description: "Set platform if server is multi-platform capable",
        name: ["--platform"],
      },
      {
        description: "Give extended privileges to this container",
        name: ["--privileged"],
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
        name: ["--pull"],
      },
      {
        description: "Mount the container's root filesystem as read only",
        name: ["--read-only"],
      },
      {
        args: {
          name: "string",
        },
        description:
          'Restart policy to apply when a container exits (default "no")',
        name: ["--restart"],
      },
      {
        description: "Automatically remove the container when it exits",
        name: ["--rm"],
      },
      {
        args: {
          name: "string",
        },
        description: "Runtime to use for this container",
        name: ["--runtime"],
      },
      {
        args: {
          name: "list",
        },
        description: "Security Options",
        name: ["--security-opt"],
      },
      {
        args: {
          name: "bytes",
        },
        description: "Size of /dev/shm",
        name: ["--shm-size"],
      },
      {
        args: {
          name: "string",
        },
        description: 'Signal to stop a container (default "SIGTERM")',
        name: ["--stop-signal"],
      },
      {
        args: {
          name: "int",
        },
        description: "Timeout (in seconds) to stop a container",
        name: ["--stop-timeout"],
      },
      {
        args: {
          name: "list",
        },
        description: "Storage driver options for the container",
        name: ["--storage-opt"],
      },
      {
        args: {
          name: "map",
        },
        description: "Sysctl options (default map[])",
        name: ["--sysctl"],
      },
      {
        args: {
          name: "list",
        },
        description: "Mount a tmpfs directory",
        name: ["--tmpfs"],
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
        name: ["--ulimit"],
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
        name: ["--userns"],
      },
      {
        args: {
          name: "string",
        },
        description: "UTS namespace to use",
        name: ["--uts"],
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
        name: ["--volume-driver"],
      },
      {
        args: {
          name: "list",
        },
        description: "Mount volumes from the specified container(s)",
        name: ["--volumes-from"],
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
    description:
      "Attach local standard input, output, and error streams to a running container,",
    options: [
      {
        name: ["--detach-keys"],
        description: "Override the key sequence for detaching a container",
        args: {
          name: "string",
        },
      },
      {
        name: ["--no-stdin"],
        description: "Do not attach STDIN",
      },
      {
        name: ["--sig-proxy"],
        description: "Proxy all received signals to the process (default true)",
      },
    ],
  },
  commit: {
    name: "commit",
    description: "Create a new image from a container's changes",
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
    description:
      "Inspect changes to files or directories on a container's filesystem",
    args: containersArg,
  },
  exec: {
    name: "exec",
    description: "Run a command in a running container",
    options: [
      {
        name: ["-it"],
        insertValue: "-it ",
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
        name: ["--detach-keys"],
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
        name: ["--env-file"],
      },
      {
        description: "Keep STDIN open even if not attached",
        name: ["-i", "--interactive"],
      },
      {
        description: "Give extended privileges to the command",
        name: ["--privileged"],
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
    description: "Export a container's filesystem as a tar archive",
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
    description: "Kill one or more running containers",
    args: { ...containersArg, variadic: true },
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
    description: "Fetch the logs of a container",
    args: containersArg,
    options: [
      {
        description: "Show extra details provided to logs",
        name: ["--details"],
      },
      {
        description: "Follow log output",
        name: ["-f", "--follow"],
      },
      {
        description:
          "Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
        name: ["--since"],
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
        name: ["--until"],
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
    description: "Rename a container",
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
      variadic: true,
      name: "containers",
      suggestions: [
        {
          name: "$(docker ps -aq)",
          insertValue: "$(docker ps -aq)",
          description: "All containers, running and exited",
        },
        {
          name: "$(docker ps -q)",
          insertValue: "$(docker ps -q)",
          description: "All running containers",
        },
      ],
      generators: [dockerGenerators.allDockerContainers],
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
        name: ["-i", "--interactive"],
        description: "Keep STDIN open even if not attached",
      },
      { name: ["-t", "--tty"], description: "Allocate a pseudo-TTY" },
      {
        name: ["-it"],
        insertValue: "-it ",
        description: "Launch an interactive session",
        icon: "fig://icon?type=commandkey",
      },
    ],
    args: [
      {
        name: "image",
        description: "the Docker image to use",
        generators: {
          script:
            "docker images --format '{{.Repository}} {{.Size}} {{.Tag}} {{.ID}}'",
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
    description: "Start one or more stopped containers",
    args: {
      name: "container",
      generators: [dockerGenerators.allDockerContainers],
    },
    options: [
      {
        description: "Attach STDOUT/STDERR and forward signals",
        name: ["-a", "--attach"],
      },
      {
        description: "Override the key sequence for detaching a container",
        name: ["--detach-keys"],
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
    description:
      "Display a live stream of container(s) resource usage statistics",
    args: containersArg,
    options: [
      {
        description: "Show all containers (default shows just running)",
        name: ["-a", "--all"],
      },
      {
        description: "Pretty-print images using a Go template",
        name: ["--format"],
        args: {
          name: "string",
        },
      },
      {
        description: "Disable streaming stats and only pull the first result",
        name: ["--no-stream"],
      },
      {
        description: "Do not truncate output",
        name: ["--no-trunc"],
      },
    ],
  },
  stop: {
    name: "stop",
    description: "Stop one or more running containers",
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
    description: "Unpause all processes within one or more containers",
    args: {
      name: "container",
      generators: [dockerGenerators.pausedDockerContainers],
    },
  },
  update: {
    name: "update",
    description: "Update configuration of one or more containers",
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
        name: ["--blkio-weight"],
      },
      {
        args: {
          name: "int",
        },
        description: "Limit CPU CFS (Completely Fair Scheduler) period",
        name: ["--cpu-period"],
      },
      {
        args: {
          name: "int",
        },
        description: "Limit CPU CFS (Completely Fair Scheduler) quota",
        name: ["--cpu-quota"],
      },
      {
        args: {
          name: "int",
        },
        description: "Limit the CPU real-time period in microseconds",
        name: ["--cpu-rt-period"],
      },
      {
        args: {
          name: "int",
        },
        description: "Limit the CPU real-time runtime in microseconds",
        name: ["--cpu-rt-runtime"],
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
        name: ["--cpus"],
      },
      {
        args: {
          name: "string",
        },
        description: "CPUs in which to allow execution (0-3, 0,1)",
        name: ["--cpuset-cpus"],
      },
      {
        args: {
          name: "string",
        },
        description: "MEMs in which to allow execution (0-3, 0,1)",
        name: ["--cpuset-mems"],
      },
      {
        args: {
          name: "bytes",
        },
        description: "Kernel memory limit",
        name: ["--kernel-memory"],
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
        name: ["--memory-reservation"],
      },
      {
        args: {
          name: "bytes",
        },
        description:
          "Swap limit equal to memory plus swap: '-1' to enable unlimited swap",
        name: ["--memory-swap"],
      },
      {
        args: {
          name: "int",
        },
        description: "Tune container pids limit (set -1 for unlimited)",
        name: ["--pids-limit"],
      },
      {
        args: {
          name: "string",
        },
        description: "Restart policy to apply when a container exits",
        name: ["--restart"],
      },
    ],
  },
  wait: {
    name: "wait",
    description:
      "Block until one or more containers stop, then print their exit codes",
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
        name: ["--format"],
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
        name: ["--no-trunc"],
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
    description: "Show the history of an image",
    args: imagesArg,
    options: [
      {
        description: "Pretty-print images using a Go template",
        name: ["--format"],
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
        name: ["--no-trunc"],
      },
      {
        description: "Only show image IDs",
        name: ["-q", "--quiet"],
      },
    ],
  },
  imageImport: {
    name: "import",
    description:
      "Import the contents from a tarball to create a filesystem image",
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
        name: ["--platform"],
      },
    ],
  },
  imageList: {
    name: "images",
    description: "List images",
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
    description: "Load an image from a tar archive or STDIN",
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
    description: "Pull an image or a repository from a registry",
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
        name: ["--disable-content-trust"],
      },
      {
        description: "Set platform if server is multi-platform capable",
        name: ["--platform"],
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
    description: "Push an image or a repository to a registry",
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
        name: ["--disable-content-trust"],
      },
      {
        description: "Suppress verbose output",
        name: ["-q", "--quiet"],
      },
    ],
  },
  tag: {
    name: "tag",
    description: "Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE",
    args: {
      name: "SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]",
    },
  },
  imageSave: {
    name: "save",
    description:
      "Save one or more images to a tar archive (streamed to STDOUT by default)",
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
    description: "Remove one or more images",
    args: { ...imagesArg, variadic: true },
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

export const completionSpec: Fig.Spec = {
  name: "docker",
  description: "A self-sufficient runtime for containers",
  subcommands: [
    sharedCommands.attach,
    sharedCommands.build,
    sharedCommands.commit,
    sharedCommands.cp,
    sharedCommands.create,
    sharedCommands.diff,
    {
      name: "events",
      description: "Get real time events from the server",
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
          name: ["--format"],
        },
        {
          args: {
            name: "string",
          },
          description: "Show all events created since timestamp",
          name: ["--since"],
        },
        {
          args: {
            name: "string",
          },
          description: "Stream events until this timestamp",
          name: ["--until"],
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
      description: "Display system-wide information",
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
      description: "Return low-level information on Docker objects",
      args: {
        // TODO: There are more types of docker objects beyond running containers
        // that can be inspected
        name: "Name or ID",
        generators: [
          {
            script: `docker ps -a --format '{{ json . }}'`,
            postProcess: function (out) {
              const allLines = out.split("\n").map((line) => JSON.parse(line));
              return allLines.map((i) => ({
                name: i.ID,
                displayName: `[con] ${i.ID} (${i.Image})`,
              }));
            },
          },
          {
            script: `docker images -a --format '{{ json . }}'`,
            postProcess: function (out) {
              const allLines = out.split("\n").map((line) => JSON.parse(line));
              return allLines.map((i) => {
                let displayName;
                if (i.Repository === "\u003cnone\u003e") {
                  displayName = i.ID;
                } else {
                  displayName = i.Repository;
                  if (i.Tag !== "\u003cnone\u003e") {
                    displayName += `:${i.Tag}`;
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
            script: `docker volume ls --format '{{ json . }}'`,
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
      description: "Log in to a Docker registry",
      args: {
        name: "server",
      },
      options: [
        {
          description: "password",
          name: ["-p", "--password"],
          args: {
            name: "string",
          },
        },
        {
          description: "Take the password from stdin",
          name: ["--password-stdin"],
        },
        {
          description: "username",
          name: ["-u", "--username"],
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "logout",
      description: "Log out from a Docker registry",
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
      description: "Search the Docker Hub for images",
      args: [
        {
          name: "TERM",
          description: "Search term",
        },
      ],
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
          name: ["--format"],
        },
        {
          args: {
            name: "int",
          },
          description: "Max number of search results (default 25)",
          name: ["--limit"],
        },
        {
          description: "Don't truncate output",
          name: ["--no-trunc"],
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
      description: "Show the Docker version information",
      options: [
        {
          description:
            "Format the output. Values: [pretty | json]. (Default: pretty)",
          name: ["-f", "--format"],
          args: {
            name: "string",
          },
        },
        {
          description: "Kubernetes config file",
          name: ["--kubeconfig"],
          args: {
            name: "string",
          },
        },
      ],
    },
    sharedCommands.wait,
    {
      name: "builder",
      description: "Manage builds",
      subcommands: [
        sharedCommands.build,
        {
          name: "prune",
          description: "Amount of disk space to keep for cache",
          options: [
            {
              name: "-a, --all",
              description:
                "Remove all unused build cache, not just dangling ones",
            },
            {
              name: "--filter",
              description: "Provide filter values (e.g. 'until=24h')",
              args: {
                name: "filter",
              },
            },
            {
              name: "-f, --force",
              description: "Do not prompt for confirmation",
            },
            {
              name: "--keep-storage",
              description: "Amount of disk space to keep for cache",
              args: {
                name: "bytes",
              },
            },
          ],
        },
      ],
    },
    {
      name: "config",
      description: "Manage Docker configs",
      subcommands: [
        {
          name: "create",
          description: "Create a config from a file or STDIN",
          args: {
            name: "file",
            template: "filepaths",
          },
          options: [
            {
              name: "-l",
              description: "Config labels",
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
          description: "Display detailed information on one or more configs",
          args: {
            name: "CONFIG",
            variadic: true,
          },
          options: [
            {
              name: "-f",
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
          description: "List configs",
          options: [
            {
              name: "-f",
              description: "Filter output based on conditions provided",
              args: {
                name: "filter",
              },
            },
            {
              name: "--format",
              description: "Pretty-print configs using a Go template",
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
          description: "Remove one or more configs",
          args: {
            name: "CONFIG",
            variadic: true,
          },
        },
      ],
    },
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
      name: "context",
      description: "Manage contexts",
      subcommands: [
        {
          name: "create",
          description: "Create new context",
          subcommands: [
            {
              name: "aci",
              description: "Create a context for Azure Container Instances",
              args: {
                name: "CONTEXT",
              },
              options: [
                {
                  name: "--description",
                  description: "Description of the context",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Help for aci",
                },
                {
                  name: "--location",
                  description: 'Location (default "eastus")',
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--resource-group",
                  description: "Resource group",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--subscription-id",
                  description: "Location",
                  args: {
                    name: "string",
                  },
                },
              ],
            },
            {
              name: "ecs",
              description: "Create a context for Amazon ECS",
              args: {
                name: "CONTEXT",
              },
              options: [
                {
                  name: "--access-keys",
                  description: "Use AWS access keys from file",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the context",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--from-env",
                  description:
                    "Use AWS environment variables for profile, or credentials and region",
                },
                {
                  name: "-h, --help",
                  description: "Help for ecs",
                },
                {
                  name: "--local-simulation",
                  description:
                    "Create context for ECS local simulation endpoints",
                },
                {
                  name: "--profile",
                  description: "Use an existing AWS profile",
                  args: {
                    name: "string",
                  },
                },
              ],
            },
          ],
          options: [
            {
              name: "--default-stack-orchestrator",
              description:
                "Default orchestrator for stack operations to use with this context (swarm|kubernetes|all)",
              args: {
                name: "string",
              },
            },
            {
              name: "--description",
              description: "Description of the context",
              args: {
                name: "string",
              },
            },
            {
              name: "--docker",
              description: "Set the docker endpoint (default [])",
              args: {
                name: "stringToString",
              },
            },
            {
              name: "--from",
              description: "Create context from a named context",
              args: {
                name: "string",
              },
            },
            {
              name: ["-h", "--help"],
              description: "Help for create",
            },
            {
              name: "--kubernetes",
              description: "Set the kubernetes endpoint (default [])",
              args: {
                name: "stringToString",
              },
            },
          ],
        },
        {
          name: "export",
          description: "Export a context to a tar or kubeconfig file",
          args: [
            contextsArg,
            {
              name: "FILE",
              template: "filepaths",
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for export",
            },
            {
              name: "--kubeconfig",
              description: "Export as a kubeconfig file",
            },
          ],
        },
        {
          name: "import",
          description: "Import a context from a tar or zip file",
          args: [
            {
              name: "CONTEXT",
            },
            {
              name: "FILE",
              template: "filepaths",
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for export",
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more contexts",
          args: { ...contextsArg, variadic: true },
          options: [
            {
              name: "-f",
              description: "Format the output using the given Go template",
              args: {
                name: "string",
              },
            },
            {
              name: ["-h", "--help"],
              description: "Help for inspect",
            },
          ],
        },
        {
          name: "list",
          description: "List available contexts",
          options: [
            {
              name: "--format",
              description:
                "Format the output. Values: [pretty | json]. (Default: pretty)",
              args: {
                name: "string",
              },
            },
            {
              name: ["-h", "--help"],
              description: "Help for list",
            },
            {
              name: ["-q", "--quiet"],
              description: "Only show context names",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more contexts",
          args: { ...contextsArg, variadic: true },
          options: [
            {
              name: ["-f", "--force"],
              description: "Force removing current context",
            },
            {
              name: ["-h", "--help"],
              description: "Help for rm",
            },
          ],
        },
        {
          name: "show",
          description: "Print the current context",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for show",
            },
          ],
        },
        {
          name: "update",
          description: "Update a context",
          args: contextsArg,
          options: [
            {
              name: "--default-stack-orchestrator",
              description:
                "Default orchestrator for stack operations to use with this context (swarm|kubernetes|all)",
              args: {
                name: "string",
              },
            },
            {
              name: "--description",
              description: "Description of the context",
              args: {
                name: "string",
              },
            },
            {
              name: "--docker",
              description: "Set the docker endpoint (default [])",
              args: {
                name: "stringToString",
              },
            },
            {
              name: ["-h", "--help"],
              description: "Help for update",
            },
            {
              name: "--kubernetes",
              description: "Set the kubernetes endpoint (default [])",
              args: {
                name: "stringToString",
              },
            },
          ],
        },
        {
          name: "use",
          description: "Set the default context",
          args: contextsArg,
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for use",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for context",
        },
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
          args: { ...imagesArg, variadic: true },
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
              generators: [dockerGenerators.listDockerNetworks],
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
              description: "driver options for the network",
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
              generators: [dockerGenerators.listDockerNetworks],
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
            generators: [dockerGenerators.listDockerNetworks],
            variadic: true,
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
            generators: [dockerGenerators.listDockerNetworks],
            variadic: true,
          },
        },
      ],
    },
    {
      name: "node",
      description: "Manage Swarm nodes",
      subcommands: [
        {
          name: "demote",
          description: "Demote one or more nodes from manager in the swarm",
          args: {
            name: "NODE",
            generators: [dockerGenerators.listDockerSwarmNodes],
            variadic: true,
          },
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more nodes",
          args: {
            name: "NODE",
            generators: [dockerGenerators.listDockerSwarmNodes],
            variadic: true,
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
          description: "List nodes in the swarm",
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
              description: "Pretty-print nodes using a Go template",
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
          name: "promote",
          description: "Promote one or more nodes to manager in the swarm",
          args: {
            name: "NODE",
            generators: [dockerGenerators.listDockerSwarmNodes],
            variadic: true,
          },
        },
        {
          name: "ps",
          description:
            "List tasks running on one or more nodes, defaults to current node",
          args: {
            name: "NODE",
            generators: [dockerGenerators.listDockerSwarmNodes],
            variadic: true,
          },
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
              description: "Pretty-print tasks using a Go template",
              args: {
                name: "string",
              },
            },
            {
              name: "--no-resolve",
              description: "Do not map IDs to Names",
            },
            {
              name: "--no-trunc",
              description: "Do not truncate output",
            },
            {
              name: ["-q", "--quiet"],
              description: "Only display task IDs",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more nodes from the swarm",
          args: {
            name: "NODE",
            generators: [dockerGenerators.listDockerSwarmNodes],
            variadic: true,
          },
          options: [
            {
              name: ["-f", "--force"],
              description: "Force remove a node from the swarm",
            },
          ],
        },
        {
          name: "update",
          description: "Update a node",
          args: {
            name: "NODE",
            generators: [dockerGenerators.listDockerSwarmNodes],
            variadic: true,
          },
          options: [
            {
              name: "--availability",
              description:
                'Availability of the node ("active"|"pause"|"drain")',
              args: {
                name: "string",
              },
            },
            {
              name: "--label-add",
              description: "Add or update a node label (key=value)",
              args: {
                name: "list",
              },
            },
            {
              name: "--label-rm",
              description: "Remove a node label if exists",
              args: {
                name: "list",
              },
            },
            {
              name: "--role",
              description: 'Role of the node ("worker"|"manager")',
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "plugin",
      description: "Manage plugins",
      subcommands: [
        {
          name: "create",
          description:
            "Create a plugin from a rootfs and configuration. Plugin data directory must contain config.json and rootfs directory.",
          args: [
            { name: "PLUGIN" },
            { name: "PLUGIN-DATA-DIR", template: "filepaths" },
          ],
          options: [
            {
              name: "--compress",
              description: "Compress the context using gzip",
            },
          ],
        },
        {
          name: "disable",
          description: "Disable a plugin",
          args: {
            name: "PLUGIN",
            generators: [dockerGenerators.listDockerPlugins],
          },
          options: [
            {
              name: ["-f", "--force"],
              description: "Force the disable of an active plugin",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable a plugin",
          args: {
            name: "PLUGIN",
            generators: [dockerGenerators.listDockerPlugins],
          },
          options: [
            {
              name: "--timeout",
              description: "HTTP client timeout (in seconds) (default 30)",
              args: {
                name: "int",
              },
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more plugins",
          args: {
            name: "PLUGIN",
            generators: [dockerGenerators.listDockerPlugins],
            variadic: true,
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
          name: "install",
          description: "Install a plugin",
          args: [{ name: "PLUGIN" }, { name: "KEY=VALUE", variadic: true }],
          options: [
            {
              name: "--alias",
              description: "Local name for plugin",
              args: {
                name: "string",
              },
            },
            {
              name: "--disable",
              description: "Do not enable the plugin on install",
            },
            {
              name: "--disable-content-trust",
              description: "Skip image verification (default true)",
            },
            {
              name: "--grant-all-permissions",
              description: "Grant all permissions necessary to run the plugin",
            },
          ],
        },
        {
          name: "ls",
          description: "List plugins",
          options: [
            {
              name: ["-f", "--filter"],
              description: "Provide filter values (e.g. 'enabled=true')",
              args: {
                name: "filter",
              },
            },
            {
              name: "--format",
              description: "Pretty-print plugins using a Go template",
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
              description: "Only display plugin IDs",
            },
          ],
        },
        {
          name: "push",
          description: "Push a plugin to a registry",
          args: { name: "PLUGIN:[TAG]" },
          options: [
            {
              name: "--disable-content-trust",
              description: "Skip image signing (default true)",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more plugins",
          args: {
            name: "PLUGIN",
            generators: [dockerGenerators.listDockerPlugins],
            variadic: true,
          },
          options: [
            {
              name: ["-f", "--force"],
              description: "Force the removal of an active plugin",
            },
          ],
        },
        {
          name: "set",
          description: "Change settings for a plugin",
          args: [
            {
              name: "PLUGIN",
              generators: [dockerGenerators.listDockerPlugins],
            },
            { name: "KEY=VALUE", variadic: true },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade an existing plugin",
          args: [
            {
              name: "PLUGIN",
              generators: [dockerGenerators.listDockerPlugins],
            },
            { name: "REMOTE" },
          ],
          options: [
            {
              name: "--disable-content-trust",
              description: "Skip image verification (default true)",
            },
            {
              name: "--grant-all-permissions",
              description: "Grant all permissions necessary to run the plugin",
            },
            {
              name: "--skip-remote-check",
              description:
                "Do not check if specified remote plugin matches existing plugin image",
            },
          ],
        },
      ],
    },
    {
      name: "secret",
      description: "Manage Docker secrets",
      subcommands: [
        {
          name: "create",
          description: "Create a secret from a file or STDIN as content",
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more secrets",
        },
        {
          name: "ls",
          description: "List secrets",
        },
        {
          name: "rm",
          description: "Remove one or more secrets",
        },
      ],
    },
    {
      name: "service",
      description: "Manage services",
      subcommands: [
        {
          name: "create",
          description: "Create a new service",
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more services",
        },
        {
          name: "logs",
          description: "Fetch the logs of a service or task",
        },
        {
          name: "ls",
          description: "List services",
        },
        {
          name: "ps",
          description: "List the tasks of one or more services",
        },
        {
          name: "rm",
          description: "Remove one or more services",
        },
        {
          name: "rollback",
          description: "Revert changes to a service's configuration",
        },
        {
          name: "scale",
          description: "Scale one or multiple replicated services",
        },
        {
          name: "update",
          description: "Update a service",
        },
      ],
    },
    {
      name: "stack",
      description: "Manage Docker stacks",
      subcommands: [
        {
          name: "deploy",
          description: "Deploy a new stack or update an existing stack",
        },
        {
          name: "ls",
          description: "List stacks",
        },
        {
          name: "ps",
          description: "List the tasks in the stack",
        },
        {
          name: "rm",
          description: "Remove one or more stacks",
        },
        {
          name: "services",
          description: "List the services in the stack",
        },
      ],
    },
    {
      name: "swarm",
      description: "Manage Swarm",
      subcommands: [
        {
          name: "ca",
          description: "Display and rotate the root CA",
        },
        {
          name: "init",
          description: "Initialize a swarm",
        },
        {
          name: "join",
          description: "Join a swarm as a node and/or manager",
        },
        {
          name: "join-token",
          description: "Manage join tokens",
        },
        {
          name: "leave",
          description: "Leave the swarm",
        },
        {
          name: "unlock",
          description: "Unlock swarm",
        },
        {
          name: "unlock-key",
          description: "Manage the unlock key",
        },
        {
          name: "update",
          description: "Update the swarm",
        },
      ],
    },
    {
      name: "system",
      description: "Manage Docker",
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
      ],
    },
    {
      name: "trust",
      description: "Manage trust on Docker images",
      subcommands: [
        {
          name: "inspect",
          description: "Return low-level information about keys and signatures",
        },
        {
          name: "revoke",
          description: "Remove trust for an image",
        },
        {
          name: "sign",
          description: "Sign an image",
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
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more volumes",
        },
        {
          name: "ls",
          description: "List volumes",
        },
        {
          name: "prune",
          description: "Remove all unused local volumes",
        },
        {
          name: "rm",
          description: "Remove one or more volumes",
        },
      ],
    },
  ],
};
