const completionSpec: Fig.Spec = {
  name: "docker",
  description: "A self-sufficient runtime for containers",
  subcommands: [
    {
      name: "builder",
      description: "Manage builds",
      subcommands: [
        {
          name: "build",
          description: "Build an image from a Dockerfile",
          options: [
            {
              name: "--add-host",
              description: "Add a custom host-to-IP mapping (host:ip)",
              args: {
                name: "list",
              },
            },
            {
              name: "--build-arg",
              description: "Set build-time variables",
              args: {
                name: "list",
              },
            },
            {
              name: "--cache-from",
              description: "Images to consider as cache sources",
              args: {
                name: "strings",
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
              name: "--compress",
              description: "Compress the build context using gzip",
            },
            {
              name: "--cpu-period",
              description:
                "Limit the CPU CFS (Completely Fair Scheduler) period",
              args: {
                name: "int",
              },
            },
            {
              name: "--cpu-quota",
              description:
                "Limit the CPU CFS (Completely Fair Scheduler) quota",
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
              name: "--disable-content-trust",
              description: "Skip image verification (default true)",
            },
            {
              name: ["-f", "--file"],
              description:
                "Name of the Dockerfile (Default is 'PATH/Dockerfile')",
              args: {
                name: "string",
              },
            },
            {
              name: "--force-rm",
              description: "Always remove intermediate containers",
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
              name: ["-m", "--memory"],
              description: "Memory limit",
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
              name: "--network",
              description:
                "Set the networking mode for the RUN instructions during build (default 'default')",
              args: {
                name: "string",
              },
            },
            {
              name: "--no-cache",
              description: "Do not use cache when building the image",
            },
            {
              name: "--pull",
              description:
                "Always attempt to pull a newer version of the image",
            },
            {
              name: ["-q", "--quiet"],
              description:
                "Suppress the build output and print image ID on success",
            },
            {
              name: "--rm",
              description:
                "Remove intermediate containers after a successful build (default true)",
            },
            {
              name: "--security-opt",
              description: "Security options",
              args: {
                name: "strings",
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
              name: "--squash",
              description: "Squash newly built layers into a single new layer",
            },
            {
              name: ["-t", "--tag"],
              description: "Name and optionally a tag in the 'name:tag' format",
              args: {
                name: "list",
              },
            },
            {
              name: "--target",
              description: "Set the target build stage to build",
              args: {
                name: "string",
              },
            },
            {
              name: "--ulimit",
              description: "Ulimit options (default [])",
              args: {
                name: "ulimit",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "prune",
          description: "Remove build cache",
          options: [
            {
              name: ["-a", "--all"],
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
              name: ["-f", "--force"],
              description: "Do not prompt for confirmation",
            },
            {
              name: "--keep-storage",
              description: "Amount of disk space to keep for cache",
              args: {
                name: "bytes",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
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
          options: [
            {
              name: ["-l", "--label"],
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more configs",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "ls",
          description: "List configs",
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
              description: "Pretty-print configs using a Go template",
              args: {
                name: "string",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Only display IDs",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more configs",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "container",
      description: "Manage containers",
      subcommands: [
        {
          name: "attach",
          description:
            "Attach local standard input, output, and error streams to a running container",
          options: [
            {
              name: "--detach-keys",
              description:
                "Override the key sequence for detaching a container",
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
              description:
                "Proxy all received signals to the process (default true)",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "commit",
          description: "Create a new image from a container's changes",
          options: [
            {
              name: ["-a", "--author"],
              description:
                "Author (e.g., 'John Hannibal Smith <hannibal@a-team.com>')",
              args: {
                name: "string",
              },
            },
            {
              name: ["-c", "--change"],
              description: "Apply Dockerfile instruction to the created image",
              args: {
                name: "list",
              },
            },
            {
              name: ["-m", "--message"],
              description: "Commit message",
              args: {
                name: "string",
              },
            },
            {
              name: ["-p", "--pause"],
              description: "Pause container during commit (default true)",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "cp",
          description:
            "Copy files/folders between a container and the local filesystem",
          options: [
            {
              name: ["-a", "--archive"],
              description: "Archive mode (copy all uid/gid information)",
            },
            {
              name: ["-L", "--follow-link"],
              description: "Always follow symbol link in SRC_PATH",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "create",
          description: "Create a new container",
          options: [
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
              description:
                "Block IO weight (relative device weight) (default [])",
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
              description:
                "Time between running the check (ms|s|m|h) (default 0s)",
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
              description:
                "Tune container memory swappiness (0 to 100) (default -1)",
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
                "Pull image before creating ('always'|'missing'|'never') (default 'missing')",
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
        },
        {
          name: "diff",
          description:
            "Inspect changes to files or directories on a container's filesystem",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "exec",
          description: "Run a command in a running container",
          options: [
            {
              name: ["-d", "--detach"],
              description: "Detached mode: run command in the background",
            },
            {
              name: "--detach-keys",
              description:
                "Override the key sequence for detaching a container",
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
              name: ["-i", "--interactive"],
              description: "Keep STDIN open even if not attached",
            },
            {
              name: "--privileged",
              description: "Give extended privileges to the command",
            },
            {
              name: ["-t", "--tty"],
              description: "Allocate a pseudo-TTY",
            },
            {
              name: ["-u", "--user"],
              description: "Username or UID (format: <name|uid>[:<group|gid>])",
              args: {
                name: "string",
              },
            },
            {
              name: ["-w", "--workdir"],
              description: "Working directory inside the container",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "export",
          description: "Export a container's filesystem as a tar archive",
          options: [
            {
              name: ["-o", "--output"],
              description: "Write to a file, instead of STDOUT",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more containers",
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
              description: "Display total file sizes",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "kill",
          description: "Kill one or more running containers",
          options: [
            {
              name: ["-s", "--signal"],
              description: "Signal to send to the container (default 'KILL')",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "logs",
          description: "Fetch the logs of a container",
          options: [
            {
              name: "--details",
              description: "Show extra details provided to logs",
            },
            {
              name: ["-f", "--follow"],
              description: "Follow log output",
            },
            {
              name: "--since",
              description:
                "Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
              args: {
                name: "string",
              },
            },
            {
              name: ["-n", "--tail"],
              description:
                "Number of lines to show from the end of the logs (default 'all')",
              args: {
                name: "string",
              },
            },
            {
              name: ["-t", "--timestamps"],
              description: "Show timestamps",
            },
            {
              name: "--until",
              description:
                "Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "ls",
          description: "List containers",
          options: [
            {
              name: ["-a", "--all"],
              description: "Show all containers (default shows just running)",
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
              description: "Pretty-print containers using a Go template",
              args: {
                name: "string",
              },
            },
            {
              name: ["-n", "--last"],
              description:
                "Show n last created containers (includes all states) (default -1)",
              args: {
                name: "int",
              },
            },
            {
              name: ["-l", "--latest"],
              description:
                "Show the latest created container (includes all states)",
            },
            {
              name: "--no-trunc",
              description: "Don't truncate output",
            },
            {
              name: ["-q", "--quiet"],
              description: "Only display container IDs",
            },
            {
              name: ["-s", "--size"],
              description: "Display total file sizes",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "pause",
          description: "Pause all processes within one or more containers",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "port",
          description:
            "List port mappings or a specific mapping for the container",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rename",
          description: "Rename a container",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "restart",
          description: "Restart one or more containers",
          options: [
            {
              name: ["-t", "--time"],
              description:
                "Seconds to wait for stop before killing the container (default 10)",
              args: {
                name: "int",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more containers",
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Force the removal of a running container (uses SIGKILL)",
            },
            {
              name: ["-l", "--link"],
              description: "Remove the specified link",
            },
            {
              name: ["-v", "--volumes"],
              description:
                "Remove anonymous volumes associated with the container",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "run",
          description: "Run a command in a new container",
          options: [
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
              description:
                "Block IO weight (relative device weight) (default [])",
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
              description:
                "Override the key sequence for detaching a container",
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
              description:
                "Time between running the check (ms|s|m|h) (default 0s)",
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
              description:
                "Tune container memory swappiness (0 to 100) (default -1)",
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
              description:
                "Proxy received signals to the process (default true)",
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
        },
        {
          name: "start",
          description: "Start one or more stopped containers",
          options: [
            {
              name: ["-a", "--attach"],
              description: "Attach STDOUT/STDERR and forward signals",
            },
            {
              name: "--detach-keys",
              description:
                "Override the key sequence for detaching a container",
              args: {
                name: "string",
              },
            },
            {
              name: ["-i", "--interactive"],
              description: "Attach container's STDIN",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "stats",
          description:
            "Display a live stream of container(s) resource usage statistics",
          options: [
            {
              name: ["-a", "--all"],
              description: "Show all containers (default shows just running)",
            },
            {
              name: "--format",
              description: "Pretty-print images using a Go template",
              args: {
                name: "string",
              },
            },
            {
              name: "--no-stream",
              description:
                "Disable streaming stats and only pull the first result",
            },
            {
              name: "--no-trunc",
              description: "Do not truncate output",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "stop",
          description: "Stop one or more running containers",
          options: [
            {
              name: ["-t", "--time"],
              description:
                "Seconds to wait for stop before killing it (default 10)",
              args: {
                name: "int",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "top",
          description: "Display the running processes of a container",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "unpause",
          description: "Unpause all processes within one or more containers",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "update",
          description: "Update configuration of one or more containers",
          options: [
            {
              name: "--blkio-weight",
              description:
                "Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)",
              args: {
                name: "uint16",
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
              description: "Limit the CPU real-time period in microseconds",
              args: {
                name: "int",
              },
            },
            {
              name: "--cpu-rt-runtime",
              description: "Limit the CPU real-time runtime in microseconds",
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
              name: "--kernel-memory",
              description: "Kernel memory limit",
              args: {
                name: "bytes",
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
              name: "--pids-limit",
              description: "Tune container pids limit (set -1 for unlimited)",
              args: {
                name: "int",
              },
            },
            {
              name: "--restart",
              description: "Restart policy to apply when a container exits",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "wait",
          description:
            "Block until one or more containers stop, then print their exit codes",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "context",
      description: "Manage contexts",
      subcommands: [
        {
          name: "create",
          description: "Create a context",
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
              name: "--kubernetes",
              description: "Set the kubernetes endpoint (default [])",
              args: {
                name: "stringToString",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "export",
          description: "Export a context to a tar or kubeconfig file",
          options: [
            {
              name: "--kubeconfig",
              description: "Export as a kubeconfig file",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "import",
          description: "Import a context from a tar or zip file",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more contexts",
          options: [
            {
              name: ["-f", "--format"],
              description: "Format the output using the given Go template",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "ls",
          description: "List contexts",
          options: [
            {
              name: "--format",
              description: "Pretty-print contexts using a Go template",
              args: {
                name: "string",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Only show context names",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more contexts",
          options: [
            {
              name: ["-f", "--force"],
              description: "Force the removal of a context in use",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "update",
          description: "Update a context",
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
              name: "--kubernetes",
              description: "Set the kubernetes endpoint (default [])",
              args: {
                name: "stringToString",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "use",
          description: "Set the current docker context",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "image",
      description: "Manage images",
      subcommands: [
        {
          name: "build",
          description: "Build an image from a Dockerfile",
          options: [
            {
              name: "--add-host",
              description: "Add a custom host-to-IP mapping (host:ip)",
              args: {
                name: "list",
              },
            },
            {
              name: "--build-arg",
              description: "Set build-time variables",
              args: {
                name: "list",
              },
            },
            {
              name: "--cache-from",
              description: "Images to consider as cache sources",
              args: {
                name: "strings",
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
              name: "--compress",
              description: "Compress the build context using gzip",
            },
            {
              name: "--cpu-period",
              description:
                "Limit the CPU CFS (Completely Fair Scheduler) period",
              args: {
                name: "int",
              },
            },
            {
              name: "--cpu-quota",
              description:
                "Limit the CPU CFS (Completely Fair Scheduler) quota",
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
              name: "--disable-content-trust",
              description: "Skip image verification (default true)",
            },
            {
              name: ["-f", "--file"],
              description:
                "Name of the Dockerfile (Default is 'PATH/Dockerfile')",
              args: {
                name: "string",
              },
            },
            {
              name: "--force-rm",
              description: "Always remove intermediate containers",
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
              name: ["-m", "--memory"],
              description: "Memory limit",
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
              name: "--network",
              description:
                "Set the networking mode for the RUN instructions during build (default 'default')",
              args: {
                name: "string",
              },
            },
            {
              name: "--no-cache",
              description: "Do not use cache when building the image",
            },
            {
              name: "--pull",
              description:
                "Always attempt to pull a newer version of the image",
            },
            {
              name: ["-q", "--quiet"],
              description:
                "Suppress the build output and print image ID on success",
            },
            {
              name: "--rm",
              description:
                "Remove intermediate containers after a successful build (default true)",
            },
            {
              name: "--security-opt",
              description: "Security options",
              args: {
                name: "strings",
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
              name: "--squash",
              description: "Squash newly built layers into a single new layer",
            },
            {
              name: ["-t", "--tag"],
              description: "Name and optionally a tag in the 'name:tag' format",
              args: {
                name: "list",
              },
            },
            {
              name: "--target",
              description: "Set the target build stage to build",
              args: {
                name: "string",
              },
            },
            {
              name: "--ulimit",
              description: "Ulimit options (default [])",
              args: {
                name: "ulimit",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "history",
          description: "Show the history of an image",
          options: [
            {
              name: "--format",
              description: "Pretty-print images using a Go template",
              args: {
                name: "string",
              },
            },
            {
              name: ["-H", "--human"],
              description:
                "Print sizes and dates in human readable format (default true)",
            },
            {
              name: "--no-trunc",
              description: "Don't truncate output",
            },
            {
              name: ["-q", "--quiet"],
              description: "Only show image IDs",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "import",
          description:
            "Import the contents from a tarball to create a filesystem image",
          options: [
            {
              name: ["-c", "--change"],
              description: "Apply Dockerfile instruction to the created image",
              args: {
                name: "list",
              },
            },
            {
              name: ["-m", "--message"],
              description: "Set commit message for imported image",
              args: {
                name: "string",
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
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more images",
          options: [
            {
              name: ["-f", "--format"],
              description: "Format the output using the given Go template",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "load",
          description: "Load an image from a tar archive or STDIN",
          options: [
            {
              name: ["-i", "--input"],
              description: "Read from tar archive file, instead of STDIN",
              args: {
                name: "string",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Suppress the load output",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "ls",
          description: "List images",
          options: [
            {
              name: ["-a", "--all"],
              description:
                "Show all images (default hides intermediate images)",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "pull",
          description: "Pull an image or a repository from a registry",
          options: [
            {
              name: ["-a", "--all-tags"],
              description: "Download all tagged images in the repository",
            },
            {
              name: "--disable-content-trust",
              description: "Skip image verification (default true)",
            },
            {
              name: "--platform",
              description: "Set platform if server is multi-platform capable",
              args: {
                name: "string",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Suppress verbose output",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "push",
          description: "Push an image or a repository to a registry",
          options: [
            {
              name: ["-a", "--all-tags"],
              description: "Push all tagged images in the repository",
            },
            {
              name: "--disable-content-trust",
              description: "Skip image signing (default true)",
            },
            {
              name: ["-q", "--quiet"],
              description: "Suppress verbose output",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more images",
          options: [
            {
              name: ["-f", "--force"],
              description: "Force removal of the image",
            },
            {
              name: "--no-prune",
              description: "Do not delete untagged parents",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "save",
          description:
            "Save one or more images to a tar archive (streamed to STDOUT by default)",
          options: [
            {
              name: ["-o", "--output"],
              description: "Write to a file, instead of STDOUT",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "tag",
          description: "Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "manifest",
      description: "Manage Docker image manifests and manifest lists",
      subcommands: [
        {
          name: "annotate",
          description: "Add additional information to a local image manifest",
          options: [
            {
              name: "--arch",
              description: "Set architecture",
              args: {
                name: "string",
              },
            },
            {
              name: "--os",
              description: "Set operating system",
              args: {
                name: "string",
              },
            },
            {
              name: "--os-features",
              description: "Set operating system feature",
              args: {
                name: "strings",
              },
            },
            {
              name: "--os-version",
              description: "Set operating system version",
              args: {
                name: "string",
              },
            },
            {
              name: "--variant",
              description: "Set architecture variant",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a local manifest list for annotating and pushing to a registry",
          options: [
            {
              name: ["-a", "--amend"],
              description: "Amend an existing manifest list",
            },
            {
              name: "--insecure",
              description: "Allow communication with an insecure registry",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "inspect",
          description: "Display an image manifest, or manifest list",
          options: [
            {
              name: "--insecure",
              description: "Allow communication with an insecure registry",
            },
            {
              name: ["-v", "--verbose"],
              description:
                "Output additional info including layers and platform",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "push",
          description: "Push a manifest list to a repository",
          options: [
            {
              name: "--insecure",
              description: "Allow push to an insecure registry",
            },
            {
              name: ["-p", "--purge"],
              description: "Remove the local manifest list after push",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rm",
          description: "Delete one or more manifest lists from local storage",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "network",
      description: "Manage networks",
      subcommands: [
        {
          name: "connect",
          description: "Connect a container to a network",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "create",
          description: "Create a network",
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
              description: "Driver to manage the Network (default 'bridge')",
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
              description: "IP Address Management Driver (default 'default')",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "disconnect",
          description: "Disconnect a container from a network",
          options: [
            {
              name: ["-f", "--force"],
              description: "Force the container to disconnect from a network",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more networks",
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
            {
              name: "--help",
              description: "Print usage",
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
            {
              name: "--help",
              description: "Print usage",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more networks",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
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
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more nodes",
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
            {
              name: "--help",
              description: "Print usage",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "promote",
          description: "Promote one or more nodes to manager in the swarm",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "ps",
          description:
            "List tasks running on one or more nodes, defaults to current node",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more nodes from the swarm",
          options: [
            {
              name: ["-f", "--force"],
              description: "Force remove a node from the swarm",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "update",
          description: "Update a node",
          options: [
            {
              name: "--availability",
              description:
                "Availability of the node ('active'|'pause'|'drain')",
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
              description: "Role of the node ('worker'|'manager')",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
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
            "Create a plugin from a rootfs and configuration. Plugin data directory must contain config.json and rootfs directory",
          options: [
            {
              name: "--compress",
              description: "Compress the context using gzip",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "disable",
          description: "Disable a plugin",
          options: [
            {
              name: ["-f", "--force"],
              description: "Force the disable of an active plugin",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable a plugin",
          options: [
            {
              name: "--timeout",
              description: "HTTP client timeout (in seconds) (default 30)",
              args: {
                name: "int",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more plugins",
          options: [
            {
              name: ["-f", "--format"],
              description: "Format the output using the given Go template",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "install",
          description: "Install a plugin",
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
            {
              name: "--help",
              description: "Print usage",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "push",
          description: "Push a plugin to a registry",
          options: [
            {
              name: "--disable-content-trust",
              description: "Skip image signing (default true)",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more plugins",
          options: [
            {
              name: ["-f", "--force"],
              description: "Force the removal of an active plugin",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "set",
          description: "Change settings for a plugin",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade an existing plugin",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more secrets",
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
            {
              name: "--help",
              description: "Print usage",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more secrets",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
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
          options: [
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
              name: "--config",
              description: "Specify configurations to expose to the service",
              args: {
                name: "config",
              },
            },
            {
              name: "--constraint",
              description: "Placement constraints",
              args: {
                name: "list",
              },
            },
            {
              name: "--container-label",
              description: "Container labels",
              args: {
                name: "list",
              },
            },
            {
              name: "--credential-spec",
              description:
                "Credential spec for managed service account (Windows only)",
              args: {
                name: "credential-spec",
              },
            },
            {
              name: ["-d", "--detach"],
              description:
                "Exit immediately instead of waiting for the service to converge",
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
              name: "--endpoint-mode",
              description: "Endpoint mode (vip or dnsrr) (default 'vip')",
              args: {
                name: "string",
              },
            },
            {
              name: "--entrypoint",
              description: "Overwrite the default ENTRYPOINT of the image",
              args: {
                name: "command",
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
              name: "--generic-resource",
              description: "User defined resources",
              args: {
                name: "list",
              },
            },
            {
              name: "--group",
              description:
                "Set one or more supplementary user groups for the container",
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
              description: "Time between running the check (ms|s|m|h)",
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
                "Start period for the container to initialize before counting retries towards unstable (ms|s|m|h)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--health-timeout",
              description: "Maximum time to allow one check to run (ms|s|m|h)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--host",
              description:
                "Set one or more custom host-to-IP mappings (host:ip)",
              args: {
                name: "list",
              },
            },
            {
              name: "--hostname",
              description: "Container hostname",
              args: {
                name: "string",
              },
            },
            {
              name: "--init",
              description:
                "Use an init inside each service container to forward signals and reap processes",
            },
            {
              name: "--isolation",
              description: "Service container isolation mode",
              args: {
                name: "string",
              },
            },
            {
              name: ["-l", "--label"],
              description: "Service labels",
              args: {
                name: "list",
              },
            },
            {
              name: "--limit-cpu",
              description: "Limit CPUs",
              args: {
                name: "decimal",
              },
            },
            {
              name: "--limit-memory",
              description: "Limit Memory",
              args: {
                name: "bytes",
              },
            },
            {
              name: "--limit-pids",
              description:
                "Limit maximum number of processes (default 0 = unlimited)",
              args: {
                name: "int",
              },
            },
            {
              name: "--log-driver",
              description: "Logging driver for service",
              args: {
                name: "string",
              },
            },
            {
              name: "--log-opt",
              description: "Logging driver options",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-concurrent",
              description:
                "Number of job tasks to run concurrently (default equal to --replicas)",
              args: {
                name: "uint",
              },
            },
            {
              name: "--mode",
              description:
                "Service mode (replicated, global, replicated-job, or global-job) (default 'replicated')",
              args: {
                name: "string",
              },
            },
            {
              name: "--mount",
              description: "Attach a filesystem mount to the service",
              args: {
                name: "mount",
              },
            },
            {
              name: "--name",
              description: "Service name",
              args: {
                name: "string",
              },
            },
            {
              name: "--network",
              description: "Network attachments",
              args: {
                name: "network",
              },
            },
            {
              name: "--no-healthcheck",
              description: "Disable any container-specified HEALTHCHECK",
            },
            {
              name: "--no-resolve-image",
              description:
                "Do not query the registry to resolve image digest and supported platforms",
            },
            {
              name: "--placement-pref",
              description: "Add a placement preference",
              args: {
                name: "pref",
              },
            },
            {
              name: ["-p", "--publish"],
              description: "Publish a port as a node port",
              args: {
                name: "port",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Suppress progress output",
            },
            {
              name: "--read-only",
              description: "Mount the container's root filesystem as read only",
            },
            {
              name: "--replicas",
              description: "Number of tasks",
              args: {
                name: "uint",
              },
            },
            {
              name: "--replicas-max-per-node",
              description:
                "Maximum number of tasks per node (default 0 = unlimited)",
              args: {
                name: "uint",
              },
            },
            {
              name: "--reserve-cpu",
              description: "Reserve CPUs",
              args: {
                name: "decimal",
              },
            },
            {
              name: "--reserve-memory",
              description: "Reserve Memory",
              args: {
                name: "bytes",
              },
            },
            {
              name: "--restart-condition",
              description:
                "Restart when condition is met ('none'|'on-failure'|'any') (default 'any')",
              args: {
                name: "string",
              },
            },
            {
              name: "--restart-delay",
              description:
                "Delay between restart attempts (ns|us|ms|s|m|h) (default 5s)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--restart-max-attempts",
              description: "Maximum number of restarts before giving up",
              args: {
                name: "uint",
              },
            },
            {
              name: "--restart-window",
              description:
                "Window used to evaluate the restart policy (ns|us|ms|s|m|h)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--rollback-delay",
              description:
                "Delay between task rollbacks (ns|us|ms|s|m|h) (default 0s)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--rollback-failure-action",
              description:
                "Action on rollback failure ('pause'|'continue') (default 'pause')",
              args: {
                name: "string",
              },
            },
            {
              name: "--rollback-max-failure-ratio",
              description:
                "Failure rate to tolerate during a rollback (default 0)",
              args: {
                name: "float",
              },
            },
            {
              name: "--rollback-monitor",
              description:
                "Duration after each task rollback to monitor for failure (ns|us|ms|s|m|h) (default 5s)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--rollback-order",
              description:
                "Rollback order ('start-first'|'stop-first') (default 'stop-first')",
              args: {
                name: "string",
              },
            },
            {
              name: "--rollback-parallelism",
              description:
                "Maximum number of tasks rolled back simultaneously (0 to roll back all at once) (default 1)",
              args: {
                name: "uint",
              },
            },
            {
              name: "--secret",
              description: "Specify secrets to expose to the service",
              args: {
                name: "secret",
              },
            },
            {
              name: "--stop-grace-period",
              description:
                "Time to wait before force killing a container (ns|us|ms|s|m|h) (default 10s)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--stop-signal",
              description: "Signal to stop the container",
              args: {
                name: "string",
              },
            },
            {
              name: "--sysctl",
              description: "Sysctl options",
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
              name: "--update-delay",
              description:
                "Delay between updates (ns|us|ms|s|m|h) (default 0s)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--update-failure-action",
              description:
                "Action on update failure ('pause'|'continue'|'rollback') (default 'pause')",
              args: {
                name: "string",
              },
            },
            {
              name: "--update-max-failure-ratio",
              description:
                "Failure rate to tolerate during an update (default 0)",
              args: {
                name: "float",
              },
            },
            {
              name: "--update-monitor",
              description:
                "Duration after each task update to monitor for failure (ns|us|ms|s|m|h) (default 5s)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--update-order",
              description:
                "Update order ('start-first'|'stop-first') (default 'stop-first')",
              args: {
                name: "string",
              },
            },
            {
              name: "--update-parallelism",
              description:
                "Maximum number of tasks updated simultaneously (0 to update all at once) (default 1)",
              args: {
                name: "uint",
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
              name: "--with-registry-auth",
              description:
                "Send registry authentication details to swarm agents",
            },
            {
              name: ["-w", "--workdir"],
              description: "Working directory inside the container",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more services",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "logs",
          description: "Fetch the logs of a service or task",
          options: [
            {
              name: "--details",
              description: "Show extra details provided to logs",
            },
            {
              name: ["-f", "--follow"],
              description: "Follow log output",
            },
            {
              name: "--no-resolve",
              description: "Do not map IDs to Names in output",
            },
            {
              name: "--no-task-ids",
              description: "Do not include task IDs in output",
            },
            {
              name: "--no-trunc",
              description: "Do not truncate output",
            },
            {
              name: "--raw",
              description: "Do not neatly format logs",
            },
            {
              name: "--since",
              description:
                "Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
              args: {
                name: "string",
              },
            },
            {
              name: ["-n", "--tail"],
              description:
                "Number of lines to show from the end of the logs (default 'all')",
              args: {
                name: "string",
              },
            },
            {
              name: ["-t", "--timestamps"],
              description: "Show timestamps",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "ls",
          description: "List services",
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
              description: "Pretty-print services using a Go template",
              args: {
                name: "string",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Only display IDs",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "ps",
          description: "List the tasks of one or more services",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more services",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rollback",
          description: "Revert changes to a service's configuration",
          options: [
            {
              name: ["-d", "--detach"],
              description:
                "Exit immediately instead of waiting for the service to converge",
            },
            {
              name: ["-q", "--quiet"],
              description: "Suppress progress output",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "scale",
          description: "Scale one or multiple replicated services",
          options: [
            {
              name: ["-d", "--detach"],
              description:
                "Exit immediately instead of waiting for the service to converge",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "update",
          description: "Update a service",
          options: [
            {
              name: "--args",
              description: "Service command args",
              args: {
                name: "command",
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
              name: "--config-add",
              description: "Add or update a config file on a service",
              args: {
                name: "config",
              },
            },
            {
              name: "--config-rm",
              description: "Remove a configuration file",
              args: {
                name: "list",
              },
            },
            {
              name: "--constraint-add",
              description: "Add or update a placement constraint",
              args: {
                name: "list",
              },
            },
            {
              name: "--constraint-rm",
              description: "Remove a constraint",
              args: {
                name: "list",
              },
            },
            {
              name: "--container-label-add",
              description: "Add or update a container label",
              args: {
                name: "list",
              },
            },
            {
              name: "--container-label-rm",
              description: "Remove a container label by its key",
              args: {
                name: "list",
              },
            },
            {
              name: "--credential-spec",
              description:
                "Credential spec for managed service account (Windows only)",
              args: {
                name: "credential-spec",
              },
            },
            {
              name: ["-d", "--detach"],
              description:
                "Exit immediately instead of waiting for the service to converge",
            },
            {
              name: "--dns-add",
              description: "Add or update a custom DNS server",
              args: {
                name: "list",
              },
            },
            {
              name: "--dns-option-add",
              description: "Add or update a DNS option",
              args: {
                name: "list",
              },
            },
            {
              name: "--dns-option-rm",
              description: "Remove a DNS option",
              args: {
                name: "list",
              },
            },
            {
              name: "--dns-rm",
              description: "Remove a custom DNS server",
              args: {
                name: "list",
              },
            },
            {
              name: "--dns-search-add",
              description: "Add or update a custom DNS search domain",
              args: {
                name: "list",
              },
            },
            {
              name: "--dns-search-rm",
              description: "Remove a DNS search domain",
              args: {
                name: "list",
              },
            },
            {
              name: "--endpoint-mode",
              description: "Endpoint mode (vip or dnsrr)",
              args: {
                name: "string",
              },
            },
            {
              name: "--entrypoint",
              description: "Overwrite the default ENTRYPOINT of the image",
              args: {
                name: "command",
              },
            },
            {
              name: "--env-add",
              description: "Add or update an environment variable",
              args: {
                name: "list",
              },
            },
            {
              name: "--env-rm",
              description: "Remove an environment variable",
              args: {
                name: "list",
              },
            },
            {
              name: "--force",
              description: "Force update even if no changes require it",
            },
            {
              name: "--generic-resource-add",
              description: "Add a Generic resource",
              args: {
                name: "list",
              },
            },
            {
              name: "--generic-resource-rm",
              description: "Remove a Generic resource",
              args: {
                name: "list",
              },
            },
            {
              name: "--group-add",
              description:
                "Add an additional supplementary user group to the container",
              args: {
                name: "list",
              },
            },
            {
              name: "--group-rm",
              description:
                "Remove a previously added supplementary user group from the container",
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
              description: "Time between running the check (ms|s|m|h)",
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
                "Start period for the container to initialize before counting retries towards unstable (ms|s|m|h)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--health-timeout",
              description: "Maximum time to allow one check to run (ms|s|m|h)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--host-add",
              description: "Add a custom host-to-IP mapping (host:ip)",
              args: {
                name: "list",
              },
            },
            {
              name: "--host-rm",
              description: "Remove a custom host-to-IP mapping (host:ip)",
              args: {
                name: "list",
              },
            },
            {
              name: "--hostname",
              description: "Container hostname",
              args: {
                name: "string",
              },
            },
            {
              name: "--image",
              description: "Service image tag",
              args: {
                name: "string",
              },
            },
            {
              name: "--init",
              description:
                "Use an init inside each service container to forward signals and reap processes",
            },
            {
              name: "--isolation",
              description: "Service container isolation mode",
              args: {
                name: "string",
              },
            },
            {
              name: "--label-add",
              description: "Add or update a service label",
              args: {
                name: "list",
              },
            },
            {
              name: "--label-rm",
              description: "Remove a label by its key",
              args: {
                name: "list",
              },
            },
            {
              name: "--limit-cpu",
              description: "Limit CPUs",
              args: {
                name: "decimal",
              },
            },
            {
              name: "--limit-memory",
              description: "Limit Memory",
              args: {
                name: "bytes",
              },
            },
            {
              name: "--limit-pids",
              description:
                "Limit maximum number of processes (default 0 = unlimited)",
              args: {
                name: "int",
              },
            },
            {
              name: "--log-driver",
              description: "Logging driver for service",
              args: {
                name: "string",
              },
            },
            {
              name: "--log-opt",
              description: "Logging driver options",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-concurrent",
              description:
                "Number of job tasks to run concurrently (default equal to --replicas)",
              args: {
                name: "uint",
              },
            },
            {
              name: "--mount-add",
              description: "Add or update a mount on a service",
              args: {
                name: "mount",
              },
            },
            {
              name: "--mount-rm",
              description: "Remove a mount by its target path",
              args: {
                name: "list",
              },
            },
            {
              name: "--network-add",
              description: "Add a network",
              args: {
                name: "network",
              },
            },
            {
              name: "--network-rm",
              description: "Remove a network",
              args: {
                name: "list",
              },
            },
            {
              name: "--no-healthcheck",
              description: "Disable any container-specified HEALTHCHECK",
            },
            {
              name: "--no-resolve-image",
              description:
                "Do not query the registry to resolve image digest and supported platforms",
            },
            {
              name: "--placement-pref-add",
              description: "Add a placement preference",
              args: {
                name: "pref",
              },
            },
            {
              name: "--placement-pref-rm",
              description: "Remove a placement preference",
              args: {
                name: "pref",
              },
            },
            {
              name: "--publish-add",
              description: "Add or update a published port",
              args: {
                name: "port",
              },
            },
            {
              name: "--publish-rm",
              description: "Remove a published port by its target port",
              args: {
                name: "port",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Suppress progress output",
            },
            {
              name: "--read-only",
              description: "Mount the container's root filesystem as read only",
            },
            {
              name: "--replicas",
              description: "Number of tasks",
              args: {
                name: "uint",
              },
            },
            {
              name: "--replicas-max-per-node",
              description:
                "Maximum number of tasks per node (default 0 = unlimited)",
              args: {
                name: "uint",
              },
            },
            {
              name: "--reserve-cpu",
              description: "Reserve CPUs",
              args: {
                name: "decimal",
              },
            },
            {
              name: "--reserve-memory",
              description: "Reserve Memory",
              args: {
                name: "bytes",
              },
            },
            {
              name: "--restart-condition",
              description:
                "Restart when condition is met ('none'|'on-failure'|'any')",
              args: {
                name: "string",
              },
            },
            {
              name: "--restart-delay",
              description: "Delay between restart attempts (ns|us|ms|s|m|h)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--restart-max-attempts",
              description: "Maximum number of restarts before giving up",
              args: {
                name: "uint",
              },
            },
            {
              name: "--restart-window",
              description:
                "Window used to evaluate the restart policy (ns|us|ms|s|m|h)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--rollback",
              description: "Rollback to previous specification",
            },
            {
              name: "--rollback-delay",
              description: "Delay between task rollbacks (ns|us|ms|s|m|h)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--rollback-failure-action",
              description: "Action on rollback failure ('pause'|'continue')",
              args: {
                name: "string",
              },
            },
            {
              name: "--rollback-max-failure-ratio",
              description: "Failure rate to tolerate during a rollback",
              args: {
                name: "float",
              },
            },
            {
              name: "--rollback-monitor",
              description:
                "Duration after each task rollback to monitor for failure (ns|us|ms|s|m|h)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--rollback-order",
              description: "Rollback order ('start-first'|'stop-first')",
              args: {
                name: "string",
              },
            },
            {
              name: "--rollback-parallelism",
              description:
                "Maximum number of tasks rolled back simultaneously (0 to roll back all at once)",
              args: {
                name: "uint",
              },
            },
            {
              name: "--secret-add",
              description: "Add or update a secret on a service",
              args: {
                name: "secret",
              },
            },
            {
              name: "--secret-rm",
              description: "Remove a secret",
              args: {
                name: "list",
              },
            },
            {
              name: "--stop-grace-period",
              description:
                "Time to wait before force killing a container (ns|us|ms|s|m|h)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--stop-signal",
              description: "Signal to stop the container",
              args: {
                name: "string",
              },
            },
            {
              name: "--sysctl-add",
              description: "Add or update a Sysctl option",
              args: {
                name: "list",
              },
            },
            {
              name: "--sysctl-rm",
              description: "Remove a Sysctl option",
              args: {
                name: "list",
              },
            },
            {
              name: ["-t", "--tty"],
              description: "Allocate a pseudo-TTY",
            },
            {
              name: "--ulimit-add",
              description: "Add or update a ulimit option (default [])",
              args: {
                name: "ulimit",
              },
            },
            {
              name: "--ulimit-rm",
              description: "Remove a ulimit option",
              args: {
                name: "list",
              },
            },
            {
              name: "--update-delay",
              description: "Delay between updates (ns|us|ms|s|m|h)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--update-failure-action",
              description:
                "Action on update failure ('pause'|'continue'|'rollback')",
              args: {
                name: "string",
              },
            },
            {
              name: "--update-max-failure-ratio",
              description: "Failure rate to tolerate during an update",
              args: {
                name: "float",
              },
            },
            {
              name: "--update-monitor",
              description:
                "Duration after each task update to monitor for failure (ns|us|ms|s|m|h)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--update-order",
              description: "Update order ('start-first'|'stop-first')",
              args: {
                name: "string",
              },
            },
            {
              name: "--update-parallelism",
              description:
                "Maximum number of tasks updated simultaneously (0 to update all at once)",
              args: {
                name: "uint",
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
              name: "--with-registry-auth",
              description:
                "Send registry authentication details to swarm agents",
            },
            {
              name: ["-w", "--workdir"],
              description: "Working directory inside the container",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
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
          options: [
            {
              name: ["-c", "--compose-file"],
              description: "Path to a Compose file, or '-' to read from stdin",
              args: {
                name: "strings",
              },
            },
            {
              name: "--orchestrator",
              description: "Orchestrator to use (swarm|kubernetes|all)",
              args: {
                name: "string",
              },
            },
            {
              name: "--prune",
              description: "Prune services that are no longer referenced",
            },
            {
              name: "--resolve-image",
              description:
                "Query the registry to resolve image digest and supported platforms ('always'|'changed'|'never') (default 'always')",
              args: {
                name: "string",
              },
            },
            {
              name: "--with-registry-auth",
              description:
                "Send registry authentication details to Swarm agents",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "ls",
          description: "List stacks",
          options: [
            {
              name: "--format",
              description: "Pretty-print stacks using a Go template",
              args: {
                name: "string",
              },
            },
            {
              name: "--orchestrator",
              description: "Orchestrator to use (swarm|kubernetes|all)",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "ps",
          description: "List the tasks in the stack",
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
              name: "--orchestrator",
              description: "Orchestrator to use (swarm|kubernetes|all)",
              args: {
                name: "string",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Only display task IDs",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more stacks",
          options: [
            {
              name: "--orchestrator",
              description: "Orchestrator to use (swarm|kubernetes|all)",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "services",
          description: "List the services in the stack",
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
              description: "Pretty-print services using a Go template",
              args: {
                name: "string",
              },
            },
            {
              name: "--orchestrator",
              description: "Orchestrator to use (swarm|kubernetes|all)",
              args: {
                name: "string",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Only display IDs",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--orchestrator",
          description: "Orchestrator to use (swarm|kubernetes|all)",
          args: {
            name: "string",
          },
        },
        {
          name: "--help",
          description: "Print usage",
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
          options: [
            {
              name: "--ca-cert",
              description:
                "Path to the PEM-formatted root CA certificate to use for the new cluster",
              args: {
                name: "pem-file",
              },
            },
            {
              name: "--ca-key",
              description:
                "Path to the PEM-formatted root CA key to use for the new cluster",
              args: {
                name: "pem-file",
              },
            },
            {
              name: "--cert-expiry",
              description:
                "Validity period for node certificates (ns|us|ms|s|m|h) (default 2160h0m0s)",
              args: {
                name: "duration",
              },
            },
            {
              name: ["-d", "--detach"],
              description:
                "Exit immediately instead of waiting for the root rotation to converge",
            },
            {
              name: "--external-ca",
              description:
                "Specifications of one or more certificate signing endpoints",
              args: {
                name: "external-ca",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Suppress progress output",
            },
            {
              name: "--rotate",
              description:
                "Rotate the swarm CA - if no certificate or key are provided, new ones will be generated",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "init",
          description: "Initialize a swarm",
          options: [
            {
              name: "--advertise-addr",
              description: "Advertised address (format: <ip|interface>[:port])",
              args: {
                name: "string",
              },
            },
            {
              name: "--autolock",
              description:
                "Enable manager autolocking (requiring an unlock key to start a stopped manager)",
            },
            {
              name: "--availability",
              description:
                "Availability of the node ('active'|'pause'|'drain') (default 'active')",
              args: {
                name: "string",
              },
            },
            {
              name: "--cert-expiry",
              description:
                "Validity period for node certificates (ns|us|ms|s|m|h) (default 2160h0m0s)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--data-path-addr",
              description:
                "Address or interface to use for data path traffic (format: <ip|interface>)",
              args: {
                name: "string",
              },
            },
            {
              name: "--data-path-port",
              description: `Port number to use for data path traffic (1024 - 49151). If no value is set or is set to 0, the default port (4789) is
used.`,
              args: {
                name: "uint32",
              },
            },
            {
              name: "--default-addr-pool",
              description: "Default address pool in CIDR format (default [])",
              args: {
                name: "ipNetSlice",
              },
            },
            {
              name: "--default-addr-pool-mask-length",
              description:
                "Default address pool subnet mask length (default 24)",
              args: {
                name: "uint32",
              },
            },
            {
              name: "--dispatcher-heartbeat",
              description:
                "Dispatcher heartbeat period (ns|us|ms|s|m|h) (default 5s)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--external-ca",
              description:
                "Specifications of one or more certificate signing endpoints",
              args: {
                name: "external-ca",
              },
            },
            {
              name: "--force-new-cluster",
              description: "Force create a new cluster from current state",
            },
            {
              name: "--listen-addr",
              description:
                "Listen address (format: <ip|interface>[:port]) (default 0.0.0.0:2377)",
              args: {
                name: "node-addr",
              },
            },
            {
              name: "--max-snapshots",
              description: "Number of additional Raft snapshots to retain",
              args: {
                name: "uint",
              },
            },
            {
              name: "--snapshot-interval",
              description:
                "Number of log entries between Raft snapshots (default 10000)",
              args: {
                name: "uint",
              },
            },
            {
              name: "--task-history-limit",
              description: "Task history retention limit (default 5)",
              args: {
                name: "int",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "join",
          description: "Join a swarm as a node and/or manager",
          options: [
            {
              name: "--advertise-addr",
              description: "Advertised address (format: <ip|interface>[:port])",
              args: {
                name: "string",
              },
            },
            {
              name: "--availability",
              description:
                "Availability of the node ('active'|'pause'|'drain') (default 'active')",
              args: {
                name: "string",
              },
            },
            {
              name: "--data-path-addr",
              description:
                "Address or interface to use for data path traffic (format: <ip|interface>)",
              args: {
                name: "string",
              },
            },
            {
              name: "--listen-addr",
              description:
                "Listen address (format: <ip|interface>[:port]) (default 0.0.0.0:2377)",
              args: {
                name: "node-addr",
              },
            },
            {
              name: "--token",
              description: "Token for entry into the swarm",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "join-token",
          description: "Manage join tokens",
          options: [
            {
              name: ["-q", "--quiet"],
              description: "Only display token",
            },
            {
              name: "--rotate",
              description: "Rotate join token",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "leave",
          description: "Leave the swarm",
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Force this node to leave the swarm, ignoring warnings",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "unlock",
          description: "Unlock swarm",
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "unlock-key",
          description: "Manage the unlock key",
          options: [
            {
              name: ["-q", "--quiet"],
              description: "Only display token",
            },
            {
              name: "--rotate",
              description: "Rotate unlock key",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "update",
          description: "Update the swarm",
          options: [
            {
              name: "--autolock",
              description: "Change manager autolocking setting (true|false)",
            },
            {
              name: "--cert-expiry",
              description:
                "Validity period for node certificates (ns|us|ms|s|m|h) (default 2160h0m0s)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--dispatcher-heartbeat",
              description:
                "Dispatcher heartbeat period (ns|us|ms|s|m|h) (default 5s)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--external-ca",
              description:
                "Specifications of one or more certificate signing endpoints",
              args: {
                name: "external-ca",
              },
            },
            {
              name: "--max-snapshots",
              description: "Number of additional Raft snapshots to retain",
              args: {
                name: "uint",
              },
            },
            {
              name: "--snapshot-interval",
              description:
                "Number of log entries between Raft snapshots (default 10000)",
              args: {
                name: "uint",
              },
            },
            {
              name: "--task-history-limit",
              description: "Task history retention limit (default 5)",
              args: {
                name: "int",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "system",
      description: "Manage Docker",
      subcommands: [
        {
          name: "df",
          description: "Show docker disk usage",
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
            {
              name: "--help",
              description: "Print usage",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "info",
          description: "Display system-wide information",
          options: [
            {
              name: ["-f", "--format"],
              description: "Format the output using the given Go template",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
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
              description: "Provide filter values (e.g. 'label=<key>=<value>')",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "trust",
      description: "Manage trust on Docker images",
      subcommands: [
        {
          name: "key",
          description: "Manage keys for signing Docker images",
          subcommands: [
            {
              name: "generate",
              description: "Generate and load a signing key-pair",
              options: [
                {
                  name: "--dir",
                  description:
                    "Directory to generate key in, defaults to current directory",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--help",
                  description: "Print usage",
                },
              ],
            },
            {
              name: "load",
              description: "Load a private key file for signing",
              options: [
                {
                  name: "--name",
                  description: "Name for the loaded key (default 'signer')",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--help",
                  description: "Print usage",
                },
              ],
            },
          ],
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "signer",
          description: "Manage entities who can sign Docker images",
          subcommands: [
            {
              name: "add",
              description: "Add a signer",
              options: [
                {
                  name: "--key",
                  description: "Path to the signer's public key file",
                  args: {
                    name: "list",
                  },
                },
                {
                  name: "--help",
                  description: "Print usage",
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a signer",
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Do not prompt for confirmation before removing the most recent signer",
                },
                {
                  name: "--help",
                  description: "Print usage",
                },
              ],
            },
          ],
          options: [
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "inspect",
          description: "Return low-level information about keys and signatures",
          options: [
            {
              name: "--pretty",
              description: "Print the information in a human friendly format",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "revoke",
          description: "Remove trust for an image",
          options: [
            {
              name: ["-y", "--yes"],
              description: "Do not prompt for confirmation",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "sign",
          description: "Sign an image",
          options: [
            {
              name: "--local",
              description: "Sign a locally tagged image",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
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
          options: [
            {
              name: ["-d", "--driver"],
              description: "Specify volume driver name (default 'local')",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more volumes",
          options: [
            {
              name: ["-f", "--format"],
              description: "Format the output using the given Go template",
              args: {
                name: "string",
              },
            },
            {
              name: "--help",
              description: "Print usage",
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
            {
              name: "--help",
              description: "Print usage",
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
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more volumes",
          options: [
            {
              name: ["-f", "--force"],
              description: "Force the removal of one or more volumes",
            },
            {
              name: "--help",
              description: "Print usage",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "attach",
      description:
        "Attach local standard input, output, and error streams to a running container",
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
          description:
            "Proxy all received signals to the process (default true)",
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "build",
      description: "Build an image from a Dockerfile",
      options: [
        {
          name: "--add-host",
          description: "Add a custom host-to-IP mapping (host:ip)",
          args: {
            name: "list",
          },
        },
        {
          name: "--build-arg",
          description: "Set build-time variables",
          args: {
            name: "list",
          },
        },
        {
          name: "--cache-from",
          description: "Images to consider as cache sources",
          args: {
            name: "strings",
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
          name: "--compress",
          description: "Compress the build context using gzip",
        },
        {
          name: "--cpu-period",
          description: "Limit the CPU CFS (Completely Fair Scheduler) period",
          args: {
            name: "int",
          },
        },
        {
          name: "--cpu-quota",
          description: "Limit the CPU CFS (Completely Fair Scheduler) quota",
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
          name: "--disable-content-trust",
          description: "Skip image verification (default true)",
        },
        {
          name: ["-f", "--file"],
          description: "Name of the Dockerfile (Default is 'PATH/Dockerfile')",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-rm",
          description: "Always remove intermediate containers",
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
          name: ["-m", "--memory"],
          description: "Memory limit",
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
          name: "--network",
          description:
            "Set the networking mode for the RUN instructions during build (default 'default')",
          args: {
            name: "string",
          },
        },
        {
          name: "--no-cache",
          description: "Do not use cache when building the image",
        },
        {
          name: "--pull",
          description: "Always attempt to pull a newer version of the image",
        },
        {
          name: ["-q", "--quiet"],
          description:
            "Suppress the build output and print image ID on success",
        },
        {
          name: "--rm",
          description:
            "Remove intermediate containers after a successful build (default true)",
        },
        {
          name: "--security-opt",
          description: "Security options",
          args: {
            name: "strings",
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
          name: "--squash",
          description: "Squash newly built layers into a single new layer",
        },
        {
          name: ["-t", "--tag"],
          description: "Name and optionally a tag in the 'name:tag' format",
          args: {
            name: "list",
          },
        },
        {
          name: "--target",
          description: "Set the target build stage to build",
          args: {
            name: "string",
          },
        },
        {
          name: "--ulimit",
          description: "Ulimit options (default [])",
          args: {
            name: "ulimit",
          },
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "commit",
      description: "Create a new image from a container's changes",
      options: [
        {
          name: ["-a", "--author"],
          description:
            "Author (e.g., 'John Hannibal Smith <hannibal@a-team.com>')",
          args: {
            name: "string",
          },
        },
        {
          name: ["-c", "--change"],
          description: "Apply Dockerfile instruction to the created image",
          args: {
            name: "list",
          },
        },
        {
          name: ["-m", "--message"],
          description: "Commit message",
          args: {
            name: "string",
          },
        },
        {
          name: ["-p", "--pause"],
          description: "Pause container during commit (default true)",
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "cp",
      description:
        "Copy files/folders between a container and the local filesystem",
      options: [
        {
          name: ["-a", "--archive"],
          description: "Archive mode (copy all uid/gid information)",
        },
        {
          name: ["-L", "--follow-link"],
          description: "Always follow symbol link in SRC_PATH",
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "create",
      description: "Create a new container",
      options: [
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
          description:
            "Tune container memory swappiness (0 to 100) (default -1)",
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
            "Pull image before creating ('always'|'missing'|'never') (default 'missing')",
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
    },
    {
      name: "diff",
      description:
        "Inspect changes to files or directories on a container's filesystem",
      options: [
        {
          name: "--help",
          description: "Print usage",
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
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "exec",
      description: "Run a command in a running container",
      options: [
        {
          name: ["-d", "--detach"],
          description: "Detached mode: run command in the background",
        },
        {
          name: "--detach-keys",
          description: "Override the key sequence for detaching a container",
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
          name: ["-i", "--interactive"],
          description: "Keep STDIN open even if not attached",
        },
        {
          name: "--privileged",
          description: "Give extended privileges to the command",
        },
        {
          name: ["-t", "--tty"],
          description: "Allocate a pseudo-TTY",
        },
        {
          name: ["-u", "--user"],
          description: "Username or UID (format: <name|uid>[:<group|gid>])",
          args: {
            name: "string",
          },
        },
        {
          name: ["-w", "--workdir"],
          description: "Working directory inside the container",
          args: {
            name: "string",
          },
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "export",
      description: "Export a container's filesystem as a tar archive",
      options: [
        {
          name: ["-o", "--output"],
          description: "Write to a file, instead of STDOUT",
          args: {
            name: "string",
          },
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "history",
      description: "Show the history of an image",
      options: [
        {
          name: "--format",
          description: "Pretty-print images using a Go template",
          args: {
            name: "string",
          },
        },
        {
          name: ["-H", "--human"],
          description:
            "Print sizes and dates in human readable format (default true)",
        },
        {
          name: "--no-trunc",
          description: "Don't truncate output",
        },
        {
          name: ["-q", "--quiet"],
          description: "Only show image IDs",
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "images",
      description: "List images",
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
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "import",
      description:
        "Import the contents from a tarball to create a filesystem image",
      options: [
        {
          name: ["-c", "--change"],
          description: "Apply Dockerfile instruction to the created image",
          args: {
            name: "list",
          },
        },
        {
          name: ["-m", "--message"],
          description: "Set commit message for imported image",
          args: {
            name: "string",
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
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "info",
      description: "Display system-wide information",
      options: [
        {
          name: ["-f", "--format"],
          description: "Format the output using the given Go template",
          args: {
            name: "string",
          },
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "inspect",
      description: "Return low-level information on Docker objects",
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
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "kill",
      description: "Kill one or more running containers",
      options: [
        {
          name: ["-s", "--signal"],
          description: "Signal to send to the container (default 'KILL')",
          args: {
            name: "string",
          },
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "load",
      description: "Load an image from a tar archive or STDIN",
      options: [
        {
          name: ["-i", "--input"],
          description: "Read from tar archive file, instead of STDIN",
          args: {
            name: "string",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress the load output",
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "login",
      description: "Log in to a Docker registry",
      options: [
        {
          name: ["-p", "--password"],
          description: "Password",
          args: {
            name: "string",
          },
        },
        {
          name: "--password-stdin",
          description: "Take the password from stdin",
        },
        {
          name: ["-u", "--username"],
          description: "Username",
          args: {
            name: "string",
          },
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "logout",
      description: "Log out from a Docker registry",
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "logs",
      description: "Fetch the logs of a container",
      options: [
        {
          name: "--details",
          description: "Show extra details provided to logs",
        },
        {
          name: ["-f", "--follow"],
          description: "Follow log output",
        },
        {
          name: "--since",
          description:
            "Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
          args: {
            name: "string",
          },
        },
        {
          name: ["-n", "--tail"],
          description:
            "Number of lines to show from the end of the logs (default 'all')",
          args: {
            name: "string",
          },
        },
        {
          name: ["-t", "--timestamps"],
          description: "Show timestamps",
        },
        {
          name: "--until",
          description:
            "Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
          args: {
            name: "string",
          },
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "pause",
      description: "Pause all processes within one or more containers",
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "port",
      description: "List port mappings or a specific mapping for the container",
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "ps",
      description: "List containers",
      options: [
        {
          name: ["-a", "--all"],
          description: "Show all containers (default shows just running)",
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
          description: "Pretty-print containers using a Go template",
          args: {
            name: "string",
          },
        },
        {
          name: ["-n", "--last"],
          description:
            "Show n last created containers (includes all states) (default -1)",
          args: {
            name: "int",
          },
        },
        {
          name: ["-l", "--latest"],
          description:
            "Show the latest created container (includes all states)",
        },
        {
          name: "--no-trunc",
          description: "Don't truncate output",
        },
        {
          name: ["-q", "--quiet"],
          description: "Only display container IDs",
        },
        {
          name: ["-s", "--size"],
          description: "Display total file sizes",
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "pull",
      description: "Pull an image or a repository from a registry",
      options: [
        {
          name: ["-a", "--all-tags"],
          description: "Download all tagged images in the repository",
        },
        {
          name: "--disable-content-trust",
          description: "Skip image verification (default true)",
        },
        {
          name: "--platform",
          description: "Set platform if server is multi-platform capable",
          args: {
            name: "string",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress verbose output",
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "push",
      description: "Push an image or a repository to a registry",
      options: [
        {
          name: ["-a", "--all-tags"],
          description: "Push all tagged images in the repository",
        },
        {
          name: "--disable-content-trust",
          description: "Skip image signing (default true)",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress verbose output",
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "rename",
      description: "Rename a container",
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "restart",
      description: "Restart one or more containers",
      options: [
        {
          name: ["-t", "--time"],
          description:
            "Seconds to wait for stop before killing the container (default 10)",
          args: {
            name: "int",
          },
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "rm",
      description: "Remove one or more containers",
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Force the removal of a running container (uses SIGKILL)",
        },
        {
          name: ["-l", "--link"],
          description: "Remove the specified link",
        },
        {
          name: ["-v", "--volumes"],
          description: "Remove anonymous volumes associated with the container",
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "rmi",
      description: "Remove one or more images",
      options: [
        {
          name: ["-f", "--force"],
          description: "Force removal of the image",
        },
        {
          name: "--no-prune",
          description: "Do not delete untagged parents",
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "run",
      description: "Run a command in a new container",
      options: [
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
          description:
            "Tune container memory swappiness (0 to 100) (default -1)",
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
    },
    {
      name: "save",
      description:
        "Save one or more images to a tar archive (streamed to STDOUT by default)",
      options: [
        {
          name: ["-o", "--output"],
          description: "Write to a file, instead of STDOUT",
          args: {
            name: "string",
          },
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "search",
      description: "Search the Docker Hub for images",
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
          description: "Pretty-print search using a Go template",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "Max number of search results (default 25)",
          args: {
            name: "int",
          },
        },
        {
          name: "--no-trunc",
          description: "Don't truncate output",
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "start",
      description: "Start one or more stopped containers",
      options: [
        {
          name: ["-a", "--attach"],
          description: "Attach STDOUT/STDERR and forward signals",
        },
        {
          name: "--detach-keys",
          description: "Override the key sequence for detaching a container",
          args: {
            name: "string",
          },
        },
        {
          name: ["-i", "--interactive"],
          description: "Attach container's STDIN",
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "stats",
      description:
        "Display a live stream of container(s) resource usage statistics",
      options: [
        {
          name: ["-a", "--all"],
          description: "Show all containers (default shows just running)",
        },
        {
          name: "--format",
          description: "Pretty-print images using a Go template",
          args: {
            name: "string",
          },
        },
        {
          name: "--no-stream",
          description: "Disable streaming stats and only pull the first result",
        },
        {
          name: "--no-trunc",
          description: "Do not truncate output",
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "stop",
      description: "Stop one or more running containers",
      options: [
        {
          name: ["-t", "--time"],
          description:
            "Seconds to wait for stop before killing it (default 10)",
          args: {
            name: "int",
          },
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "tag",
      description: "Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE",
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "top",
      description: "Display the running processes of a container",
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "unpause",
      description: "Unpause all processes within one or more containers",
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "update",
      description: "Update configuration of one or more containers",
      options: [
        {
          name: "--blkio-weight",
          description:
            "Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)",
          args: {
            name: "uint16",
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
          description: "Limit the CPU real-time period in microseconds",
          args: {
            name: "int",
          },
        },
        {
          name: "--cpu-rt-runtime",
          description: "Limit the CPU real-time runtime in microseconds",
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
          name: "--kernel-memory",
          description: "Kernel memory limit",
          args: {
            name: "bytes",
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
          name: "--pids-limit",
          description: "Tune container pids limit (set -1 for unlimited)",
          args: {
            name: "int",
          },
        },
        {
          name: "--restart",
          description: "Restart policy to apply when a container exits",
          args: {
            name: "string",
          },
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "version",
      description: "Show the Docker version information",
      options: [
        {
          name: ["-f", "--format"],
          description: "Format the output using the given Go template",
          args: {
            name: "string",
          },
        },
        {
          name: "--kubeconfig",
          description: "Kubernetes config file",
          args: {
            name: "string",
          },
        },
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
    {
      name: "wait",
      description:
        "Block until one or more containers stop, then print their exit codes",
      options: [
        {
          name: "--help",
          description: "Print usage",
        },
      ],
    },
  ],
  options: [
    {
      name: "--config",
      description: "Location of client config files (default '$HOME/.docker')",
      args: {
        name: "string",
      },
    },
    {
      name: ["-c", "--context"],
      description:
        "Name of the context to use to connect to the daemon (overrides DOCKER_HOST env var and default context set with 'docker context use')",
      args: {
        name: "string",
      },
    },
    {
      name: ["-D", "--debug"],
      description: "Enable debug mode",
    },
    {
      name: ["-H", "--host"],
      description: "Daemon socket(s) to connect to",
      args: {
        name: "list",
      },
    },
    {
      name: ["-l", "--log-level"],
      description:
        "Set the logging level ('debug'|'info'|'warn'|'error'|'fatal') (default 'info')",
      args: {
        name: "string",
      },
    },
    {
      name: "--tls",
      description: "Use TLS; implied by --tlsverify",
    },
    {
      name: "--tlscacert",
      description:
        "Trust certs signed only by this CA (default '$HOME/.docker/ca.pem')",
      args: {
        name: "string",
      },
    },
    {
      name: "--tlscert",
      description:
        "Path to TLS certificate file (default '$HOME/.docker/cert.pem')",
      args: {
        name: "string",
      },
    },
    {
      name: "--tlskey",
      description: "Path to TLS key file (default '$HOME/.docker/key.pem')",
      args: {
        name: "string",
      },
    },
    {
      name: "--tlsverify",
      description: "Use TLS and verify the remote",
    },
    {
      name: ["-v", "--version"],
      description: "Print version information and quit",
    },
    {
      name: "--help",
      description: "Print usage",
    },
  ],
};

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
      name: i.Name,
      description: i.ID,
      icon: "fig://icon?type=docker",
    }));
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
      return out
        .split("\n")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: `${i.ID}`,
          displayName: `${i.Repository} - ${i.ID}`,
          icon: "fig://icon?type=docker",
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
  allDockerContexts: {
    script: `docker context list --format '{{ json . }}'`,
    postProcess: function (out) {
      return out
        .split("\n")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: i.Name,
          description: i.Description,
          icon: "fig://icon?type=docker",
        }));
    },
  },
  listDockerNetworks: {
    script: `docker network list --format '{{ json . }}'`,
    postProcess: sharedPostProcess,
  },
  listDockerSwarmNodes: {
    script: `docker node list --format '{{ json . }}'`,
    postProcess: function (out) {
      return out
        .split("\n")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: i.ID,
          displayName: `${i.ID} - ${i.Hostname}`,
          description: i.Status,
          icon: "fig://icon?type=docker",
        }));
    },
  },
  listDockerPlugins: {
    script: `docker plugin list --format '{{ json . }}'`,
    postProcess: sharedPostProcess,
  },
  listDockerSecrets: {
    script: `docker secret list --format '{{ json . }}'`,
    postProcess: sharedPostProcess,
  },
  listDockerServices: {
    script: `docker service list --format '{{ json . }}'`,
    postProcess: function (out) {
      return out
        .split("\n")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: i.Name,
          description: i.Image,
          icon: "fig://icon?type=docker",
        }));
    },
  },
  listDockerServicesReplicas: {
    script: `docker service list --format '{{ json . }}'`,
    postProcess: function (out) {
      return out
        .split("\n")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: `${i.Name}=`,
          description: i.Image,
          icon: "fig://icon?type=docker",
        }));
    },
  },
  listDockerStacks: {
    script: `docker stack list --format '{{ json . }}'`,
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
  listDockerVolumes: {
    script: `docker volume list --format '{{ json . }}'`,
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

const contextsArg = {
  name: "CONTEXT",
  generators: dockerGenerators.allDockerContexts,
};

completionSpec.subcommands.forEach((command) => {
  // containersArg
  switch (command.name) {
    case "commit":
      command.args = [
        containersArg,
        {
          name: "[REPOSITORY[:TAG]]",
        },
      ];
      break;
    case "kill":
      command.args = { ...containersArg, isVariadic: true };
      break;
    case "port":
      command.args = [
        containersArg,
        {
          name: "[PRIVATE_PORT[/PROTO]]",
        },
      ];
      break;
    case "rename":
      command.args = [
        containersArg,
        {
          name: "NEW_NAME",
        },
      ];
      break;
    case "container":
      command.subcommands.find((c) => c.name == "inspect").args = containersArg;
      break;
    case "network":
      command.subcommands
        .filter((c) => c.name == "connect" || c.name == "disconnect")
        .forEach((c) => {
          c.args = [
            {
              name: "NETWORK",
              generators: dockerGenerators.listDockerNetworks,
            },
            containersArg,
          ];
        });
      break;
    case "exec":
      command.args = [
        containersArg,
        {
          name: "command",
          isCommand: true,
        },
      ];
      break;
    case "logs":
    case "diff":
    case "export":
    case "pause":
    case "restart":
    case "stats":
    case "stop":
    case "top":
    case "update":
    case "wait":
      command.args = containersArg;
  }

  // imagesArg
  switch (command.name) {
    case "history":
    case "save":
      command.args = imagesArg;
      break;
    case "image":
      command.subcommands.find((c) => c.name == "inspect").args = imagesArg;
      break;
    case "service":
      command.subcommands.find((c) => c.name == "create").args = [
        imagesArg,
        {
          name: "COMMAND",
          isOptional: true,
          isCommand: true,
        },
      ];
      break;
    case "rmi":
      command.args = { ...imagesArg, isVariadic: true };
      break;
    case "trust":
      command.subcommands
        .filter((c) => c.name == "revoke" || c.name == "sign")
        .forEach((c) => {
          c.args = imagesArg;
        });
  }

  // contextsArg
  if (command.name == "context") {
    command.subcommands.find((c) => c.name == "export").args = [
      contextsArg,
      {
        name: "FILE",
        template: "filepaths",
      },
    ];
    command.subcommands
      .filter((c) => c.name == "inspect" || c.name == "rm")
      .forEach((c) => {
        c.args = { ...contextsArg, isVariadic: true };
      });
    command.subcommands
      .filter((c) => c.name == "update" || c.name == "use")
      .forEach((c) => {
        c.args = contextsArg;
      });
  }

  // dockerGenerators.allDockerContainers
  switch (command.name) {
    case "rm":
      command.args = {
        isVariadic: true,
        name: "containers",
        generators: dockerGenerators.allDockerContainers,
      };
      break;
    case "start":
      command.args = {
        name: "container",
        generators: dockerGenerators.allDockerContainers,
      };
      break;
  }

  // dockerGenerators.pausedDockerContainers
  if (command.name == "unpause") {
    command.args = {
      name: "container",
      generators: dockerGenerators.pausedDockerContainers,
    };
  }

  // dockerGenerators.allLocalImages
  if (command.name == "create") {
    command.args = [
      {
        name: "container",
        generators: dockerGenerators.allLocalImages,
      },
      {
        name: "command",
        isCommand: true,
      },
    ];
  }

  // dockerGenerators.dockerHubSearch
  if (command.name == "pull") {
    command.args = {
      name: "NAME[:TAG|@DIGEST]",
      generators: dockerGenerators.dockerHubSearch,
      debounce: true,
    };
  }

  // dockerGenerators.listDockerNetworks
  if (command.name == "network") {
    command.subcommands
      .filter((c) => c.name == "inspect" || c.name == "rm")
      .forEach((c) => {
        c.args = {
          name: "NETWORK",
          generators: dockerGenerators.listDockerNetworks,
          isVariadic: true,
        };
      });
  }

  // dockerGenerators.listDockerSwarmNodes
  if (command.name == "node") {
    command.subcommands
      .filter(
        (c) =>
          c.name == "demote" ||
          c.name == "inspect" ||
          c.name == "promote" ||
          c.name == "ps" ||
          c.name == "rm" ||
          c.name == "update"
      )
      .forEach((c) => {
        c.args = {
          name: "NODE",
          generators: dockerGenerators.listDockerSwarmNodes,
          isVariadic: true,
        };
      });
  }

  // dockerGenerators.listDockerPlugins
  if (command.name == "plugin") {
    command.subcommands
      .filter((c) => c.name == "enable" || c.name == "disable")
      .forEach((c) => {
        c.args = {
          name: "PLUGIN",
          generators: dockerGenerators.listDockerPlugins,
        };
      });

    command.subcommands
      .filter((c) => c.name == "inspect" || c.name == "rm")
      .forEach((c) => {
        c.args = {
          name: "PLUGIN",
          generators: dockerGenerators.listDockerPlugins,
          isVariadic: true,
        };
      });

    command.subcommands.find((c) => c.name == "set").args = [
      {
        name: "PLUGIN",
        generators: dockerGenerators.listDockerPlugins,
      },
      { name: "KEY=VALUE", isVariadic: true },
    ];

    command.subcommands.find((c) => c.name == "upgrade").args = [
      {
        name: "PLUGIN",
        generators: dockerGenerators.listDockerPlugins,
      },
      { name: "REMOTE" },
    ];
  }

  // dockerGenerators.listDockerSecrets
  if (command.name == "secret") {
    command.subcommands
      .filter((c) => c.name == "inspect" || c.name == "rm")
      .forEach((c) => {
        c.args = {
          name: "SECRET",
          generators: dockerGenerators.listDockerSecrets,
          isVariadic: true,
        };
      });
  }

  // dockerGenerators.listDockerServices
  if (command.name == "service") {
    command.subcommands
      .filter((c) => c.name == "inspect" || c.name == "ps" || c.name == "rm")
      .forEach((c) => {
        c.args = {
          name: "SERVICE",
          generators: dockerGenerators.listDockerServices,
          isVariadic: true,
        };
      });

    command.subcommands
      .filter(
        (c) => c.name == "logs" || c.name == "rollback" || c.name == "update"
      )
      .forEach((c) => {
        c.args = {
          name: "SERVICE",
          generators: dockerGenerators.listDockerServices,
        };
      });

    command.subcommands.find((c) => c.name == "logs").args = {
      name: "SERVICE OR TASK",
      generators: dockerGenerators.listDockerServices,
    };

    command.subcommands.find((c) => c.name == "scale").args = {
      name: "SERVICE=REPLICAS",
      generators: dockerGenerators.listDockerServicesReplicas,
      isVariadic: true,
    };
  }

  // dockerGenerators.listDockerStacks
  if (command.name == "stack") {
    command.subcommands
      .filter((c) => c.name == "ps" || c.name == "services")
      .forEach((c) => {
        c.args = {
          name: "STACK",
          generators: dockerGenerators.listDockerStacks,
        };
      });

    command.subcommands.find((c) => c.name == "rm").args = {
      name: "STACK",
      generators: dockerGenerators.listDockerStacks,
      isVariadic: true,
    };
  }

  // dockerGenerators.listDockerVolumes
  if (command.name == "volume") {
    command.subcommands
      .filter((c) => c.name == "inspect" || c.name == "rm")
      .forEach((c) => {
        c.args = {
          name: "VOLUME",
          generators: dockerGenerators.listDockerVolumes,
          isVariadic: true,
        };
      });
  }

  // template
  if (command.name == "config") {
    command.subcommands.find((c) => c.name == "create").args = {
      name: "file",
      template: "filepaths",
    };
  }
  if (command.name == "context") {
    command.subcommands.find((c) => c.name == "import").args = [
      { name: "CONTEXT" },
      { name: "FILE", template: "filepaths" },
    ];
  }
  if (command.name == "plugin") {
    command.subcommands.find((c) => c.name == "create").args = [
      { name: "PLUGIN" },
      { name: "PLUGIN-DATA-DIR", template: "filepaths" },
    ];
  }
  if (command.name == "secret") {
    command.subcommands.find((c) => c.name == "create").args = [
      { name: "SECRET NAME" },
      { name: "SECRET", template: "filepaths" },
    ];
  }

  // customize
  if (command.name == "inspect") {
    command.args = {
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
    };
  }
});

const handleCommand = function (c: Fig.Subcommand) {
  if (c.options != null) {
    c.options.forEach((co) => {
      // suggestions
      if (co.name.includes("--log-driver")) {
        co.args = {
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
        };
      }
      if (co.description.includes("('always'|'missing'|'never')")) {
        co.args = {
          name: "string",
          suggestions: ["always", "missing", "never"],
        };
      }

      if (co.description.includes("(host|private)")) {
        co.args = {
          name: "string",
          suggestions: ["host", "private"],
        };
      }

      if (co.description.includes("(swarm|kubernetes|all)")) {
        co.args = {
          name: "string",
          suggestions: ["swarm", "kubernetes", "all"],
        };
      }

      if (co.description.includes("('active'|'pause'|'drain')")) {
        co.args = {
          name: "string",
          suggestions: ["active", "pause", "drain"],
        };
      }

      if (co.description.includes("('worker'|'manager')")) {
        co.args = {
          name: "string",
          suggestions: ["worker", "manager"],
        };
      }

      if (co.description.includes("('none'|'on-failure'|'any')")) {
        co.args = {
          name: "string",
          suggestions: ["none", "on-failure", "any"],
        };
      }

      if (co.description.includes("('pause'|'continue')")) {
        co.args = {
          name: "string",
          suggestions: ["pause", "continue"],
        };
      }

      if (co.description.includes("('pause'|'continue'|'rollback')")) {
        co.args = {
          name: "string",
          suggestions: ["pause", "continue", "rollback"],
        };
      }

      if (co.description.includes("('start-first'|'stop-first')")) {
        co.args = {
          name: "string",
          suggestions: ["start-first", "stop-first"],
        };
      }

      if (co.description.includes("('always'|'changed'|'never')")) {
        co.args = {
          name: "string",
          suggestions: ["always", "changed", "never"],
        };
      }

      if (co.description.includes("(true|false)")) {
        co.args = {
          name: "string",
          suggestions: ["true", "false"],
        };
      }

      if (co.description.includes("('debug'|'info'|'warn'|'error'|'fatal')")) {
        co.args = {
          name: "string",
          suggestions: ["debug", "info", "warn", "error", "fatal"],
        };
      }

      if (
        co.description.includes(
          "(replicated, global, replicated-job, or global-job)"
        )
      ) {
        co.args = {
          name: "string",
          suggestions: ["replicated", "global", "replicated-job", "global-job"],
        };
      }

      // template
      if (co.name.includes("--ca-key") || co.name.includes("--ca-cert")) {
        co.args = {
          name: "pem-file",
          template: "filepaths",
        };
      }
      if (co.name.includes("--compose-file")) {
        co.args = {
          name: "strings",
          template: "filepaths",
        };
      }
    });
  }

  if (c.name == "build") {
    c.args = {
      name: "path",
      generators: {
        template: "folders",
      },
    };
    c.options.find((co) => co.name.includes("--file")).args = {
      name: "string",
      generators: {
        template: "filepaths",
      },
    };
    c.options.find((co) => co.name.includes("--target")).args = {
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
            dockerfilePath = "$PWD/Dockerfile";
          }

          return `\grep -iE 'FROM.*AS' "${dockerfilePath}"`;
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
    };
  }

  if (c.name == "run" || c.name == "exec") {
    c.options.push({
      name: "-it",
      description: "Launch an interactive session",
      icon: "fig://icon?type=commandkey",
    });
  }

  if (c.name == "run") {
    c.args = [
      {
        name: "image",
        description: "The Docker image to use",
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
    ];
  }

  if (c.subcommands != null) {
    c.subcommands.forEach((cc) => handleCommand(cc));
  }
};
handleCommand(completionSpec);

export default completionSpec;
