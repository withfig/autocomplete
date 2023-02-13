const sharedOpts: Record<string, Fig.Option> = {
  output: {
    name: ["--output", "-o"],
    description: "Format to print stdout in",
    args: {
      name: "format",
      suggestions: ["json", "text"],
    },
  },
  shell: {
    name: "--shell",
    description: "Force environment to be configured for a specified shell",
  },
  unset: {
    name: ["--unset", "-u"],
    description: "Unset variables instead of setting them",
  },
};

const completionSpec: Fig.Spec = {
  name: "minikube",
  description:
    "Minikube provisions and manages local Kubernetes clusters optimized for development workflows",
  subcommands: [
    // basic commands
    {
      name: "start",
      description: "Starts a local Kubernetes cluster",
      options: [
        {
          name: "--addons",
          description:
            "Enable addons. see `minikube addons list` for a list of valid addon names",
        },
        {
          name: "--apiserver-ips",
          description:
            "A set of apiserver IP Addresses which are used in the generated certificate for kubernetes",
        },
        {
          name: "--apiserver-name",
          description:
            "The authoritative apiserver hostname for apiserver certificates and connectivity",
        },
        {
          name: "--apiserver-names",
          description:
            "A set of apiserver names which are used in the generated certificate for kubernetes",
        },
        {
          name: "--apiserver-port",
          description: "The apiserver listening port",
        },
        {
          name: "--auto-update-drivers",
          description:
            "If set, automatically updates drivers to the latest version",
          args: {
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--base-image",
          description:
            "The base image to use for docker/podman drivers. Intended for local development",
        },
        {
          name: "--cache-images",
          description:
            "If true, cache docker images for the current bootstrapper and load them into the machine",
        },
        {
          name: "--cert-expiration",
          description: "Duration until minikube certificate expiration",
        },
        {
          name: "--cni",
          description: "CNI plug-in to use",
          args: {
            name: "cni-plugin",
            suggestions: ["auto", "bridge", "cilium", "flannel", "kindnet"],
          },
        },
        {
          name: "--container-runtime",
          description: "The container runtime to be used",
          args: {
            name: "container-runtime",
            suggestions: ["docker", "cri-o", "containerd"],
          },
        },
        {
          name: "--cpus",
          description: "Number of CPUs allocated to Kubernetes",
          args: {
            name: "cpu number",
            suggestions: ["max"],
          },
        },
        {
          name: "--cri-socket",
          description: "The cri socket path to be used",
        },
        {
          name: "--delete-on-failure",
          description:
            "If set, delete the current cluster if start fails and try again",
          args: {
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--disable-driver-mounts",
          description:
            "Disables the filesystem mounts provided by the hypervisors",
        },
        {
          name: "--disk-size",
          description: "Disk size allocated to the minikube VM",
        },
        {
          name: "--dns-domain",
          description:
            "The cluster dns domain name used in the Kubernetes cluster",
        },
        {
          name: "--dns-proxy",
          description: "Enable proxy for NAT DNS requests",
        },
        {
          name: "--docker-env",
          description:
            "Environment variables to pass to the Docker daemon. (format: key=value)",
        },
        {
          name: "--docker-opt",
          description:
            "Specify arbitrary flags to pass to the Docker daemon. (format: key=value)",
        },
        {
          name: "--download-only",
          description:
            "If true, only download and cache files for later use - don't install or start anything",
        },
        {
          name: "--driver",
          description: "Choose driver",
          args: {
            name: "driver",
            suggestions: [
              "virtualbox",
              "parallels",
              "vmwarefusion",
              "hyperkit",
              "vmware",
              "docker",
              "podman",
            ],
          },
        },
        {
          name: "--dry-run",
          description:
            "Dry-run mode. Validates configuration, but does not mutate system state",
        },
        {
          name: "--embed-certs",
          description: "If true, will embed the certs in kubeconfig",
          args: {
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--extra-config",
          description:
            "A set of key=value pairs that describe configuration that may be passed to different components",
        },
        {
          name: "--extra-disks",
          description:
            "Number of extra disks created and attached to the minikube VM",
        },
        {
          name: "--feature-gates",
          description:
            "A set of key=value pairs that describe feature gates for alpha/experimental features",
        },
        {
          name: "--force",
          description:
            "Force minikube to perform possibly dangerous operations",
        },
        {
          name: "--force-systemd",
          description:
            "If set, force the container runtime to use systemd as cgroup manager",
          args: {
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--host-dns-resolver",
          description: "Enable host resolver for NAT DNS requests",
        },
        {
          name: "--host-only-cidr",
          description: "The CIDR to be used for the minikube VM",
        },
        {
          name: "--host-only-nic-type",
          description: "NIC Type used for host only network",
          args: {
            name: "nic type",
            suggestions: [
              "Am79C970A",
              "Am79C973",
              "82540EM",
              "82543GC",
              "82545EM",
              "virtio",
            ],
          },
        },
        {
          name: "--hyperkit-vpnkit-sock",
          description: "Location of the VPNKit socket used for networking",
        },
        {
          name: "--hyperkit-vsock-ports",
          description:
            "List of guest VSock ports that should be exposed as sockets on the host",
        },
        {
          name: "--hyperv-external-adapter",
          description:
            "External Adapter on which external switch will be created if no external switch is found",
        },
        {
          name: "--hyperv-use-external-switch",
          description:
            "Whether to use external switch over Default Switch if virtual switch not explicitly specified",
        },
        {
          name: "--hyperv-virtual-switch",
          description:
            "The hyperv virtual switch name. Defaults to first found",
        },
        {
          name: "--image-mirror-country",
          description: "Country code of the image mirror to be used",
        },
        {
          name: "--image-repository",
          description:
            "Alternative image repository to pull docker images from",
        },
        {
          name: "--insecure-registry",
          description:
            "Insecure Docker registries to pass to the Docker daemon",
        },
        {
          name: "--install-addons",
          description: "If set, install addons. Defaults to true",
          args: {
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--interactive",
          description: "Allow user prompts for more information",
        },
        {
          name: "--iso-url",
          description: "Locations to fetch the minikube ISO from",
        },
        {
          name: "--keep-context",
          description:
            "This will keep the existing kubectl context and will create a minikube context",
        },
        {
          name: "--kubernetes-version",
          description: "The Kubernetes version that the minikube VM will use",
        },
        {
          name: "--kvm-gpu",
          description: "Enable experimental NVIDIA GPU support in minikube",
        },
        {
          name: "--kvm-hidden",
          description:
            "Hide the hypervisor signature from the guest in minikube",
        },
        {
          name: "--kvm-network",
          description: "The KVM default network name",
        },
        {
          name: "--kvm-numa-count",
          description:
            "Simulate numa node count in minikube, supported numa node count range is 1-8",
          args: {
            name: "numa count",
            suggestions: ["1", "2", "3", "4", "5", "6", "7", "8"],
          },
        },
        {
          name: "--kvm-qemu-uri",
          description: "The KVM QEMU connection URI",
        },
        {
          name: "--listen-address",
          description: "IP Address to use to expose ports",
        },
        {
          name: "--memory",
          description: "Amount of RAM to allocate to Kubernetes",
        },
        {
          name: "--mount",
          description:
            "This will start the mount daemon and automatically mount files into minikube",
        },
        {
          name: "--mount-string",
          description:
            "The argument to pass the minikube mount command on start",
        },
        {
          name: "--namespace",
          description: "The named space to activate after start",
        },
        {
          name: "--nat-nic-type",
          description: "NIC Type used for nat network",
        },
        {
          name: "--native-ssh",
          description: "Use native Golang SSH client",
        },
        {
          name: "--network",
          description: "Network to run minikube with",
        },
        {
          name: "--network-plugin",
          description: "Kubelet network plug-in to use",
        },
        {
          name: "--nfs-share",
          description: "Local folders to share with Guest via NFS mounts",
        },
        {
          name: "--nfs-shares-root",
          description: "Where to root the NFS Shares",
        },
        {
          name: "--no-kubernetes",
          description:
            "If set, minikube VM/container will start without starting or configuring Kubernetes",
        },
        {
          name: "--no-vtx-check",
          description:
            "Disable checking for the availability of hardware virtualization before the vm is started",
        },
        {
          name: ["--nodes", "-n"],
          description: "The number of nodes to spin up",
        },
        sharedOpts.output,
        {
          name: "--ports",
          description: "List of ports that should be exposed",
        },
        {
          name: "--preload",
          description:
            "If set, download tarball of preloaded images if available to improve start time",
          args: {
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--registry-mirror",
          description: "Registry mirrors to pass to the Docker daemon",
        },
        {
          name: "--service-cluster-ip-range",
          description: "The CIDR to be used for service cluster IPs",
        },
        {
          name: "--ssh-ip-address",
          description: "IP address",
        },
        {
          name: "--ssh-key",
          description: "SSH key",
        },
        {
          name: "--ssh-port",
          description: "SSH port",
        },
        {
          name: "--ssh-user",
          description: "SSH user",
        },
        {
          name: "--trace",
          description: "Send trace events",
          args: {
            name: "trace",
            suggestions: ["gcp"],
          },
        },
        {
          name: "--uuid",
          description: "Provide VM UUID to restore MAC address",
        },
        {
          name: "--vm",
          description: "Filter to use only VM Drivers",
        },
        {
          name: "--wait",
          description:
            "Comma separated list of Kubernetes components to verify and wait for after starting a cluster",
        },
        {
          name: "--wait-timeout",
          description: "Max time to wait per Kubernetes or host to be healthy",
        },
      ],
    },
    {
      name: "status",
      description: "Gets the status of a local Kubernetes cluster",
      options: [
        {
          name: ["--format", "-f"],
          description: "Go template format string for the status output",
        },
        {
          name: ["--layout", "-l"],
          description: "Output layout",
        },
        {
          name: ["--node", "-n"],
          description: "The node to check status for",
        },
        sharedOpts.output,
        {
          name: ["--watch", "-w"],
          description:
            "Continuously listing/getting the status with optional interval duration",
        },
      ],
    },
    {
      name: "stop",
      description: "Stops a running local Kubernetes cluster",
      options: [
        {
          name: "--all",
          description: "Set flag to stop all profiles (clusters)",
        },
        {
          name: "--cancel-scheduled",
          description: "Output layout",
        },
        {
          name: "--keep-context-active",
          description: "The node to check status for",
        },
        sharedOpts.output,
        {
          name: "--schedule",
          description: "Set flag to stop cluster after a set amount of time",
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes a local Kubernetes cluster",
      options: [
        {
          name: "--all",
          description: "Set flag to delete all profiles",
        },
        {
          name: "--purge",
          description:
            "Set this flag to delete the '.minikube' folder from your user directory",
        },
      ],
    },
    {
      name: "unpause",
      description: "Unpause Kubernetes",
      options: [
        {
          name: ["--all-namespaces", "-A"],
          description: "If set, unpause all namespaces",
        },
        {
          name: ["--namespaces", "-n"],
          description: "Namespaces to unpause",
        },
        sharedOpts.output,
      ],
    },

    // Images Commands
    {
      name: "docker-env",
      description: "Configure environment to use minikube's Docker daemon",
      options: [
        {
          name: ["--no-proxy", "-A"],
          description: "If set, unpause all namespaces",
        },
        sharedOpts.output,
        sharedOpts.shell,
        {
          name: "--ssh-host",
          description: "Use SSH connection instead of HTTPS (port 2376)",
        },
        sharedOpts.unset,
      ],
    },
    {
      name: "podman-env",
      description: "Configure environment to use minikube's Podman service",
      options: [sharedOpts.shell, sharedOpts.unset],
    },
    {
      name: "cache",
      description: "Add, delete, or push a local image into minikube",
      subcommands: [
        {
          name: "add",
          description: "Add an image to local cache",
        },
        {
          name: "delete",
          description: "Delete an image from the local cache",
        },
        {
          name: "list",
          description: "List all available images from the local cache",
        },
        {
          name: "reload",
          description: "Reload cached images",
        },
      ],
    },
    {
      name: "image",
      description: "Manage images",
      subcommands: [
        {
          name: "build",
          description: "Build a container image in minikube",
        },
        {
          name: "load",
          description: "Load a image into minikube",
        },
        {
          name: "ls",
          description: "List images",
        },
        {
          name: "pull",
          description: "Pull images",
        },
        {
          name: "push",
          description: "Push images",
        },
        {
          name: "rm",
          description: "Remove one or more images",
        },
        {
          name: "save",
          description: "Save a image from minikube",
        },
        {
          name: "tag",
          description: "Tag images",
        },
      ],
    },

    // Configuration and Management Commands
    {
      name: "addons",
      description: "Enable or disable a minikube addon",
      subcommands: [
        {
          name: "configure",
          description: "Configures the addon w/ADDON_NAME within minikube",
        },
        {
          name: "disable",
          description: "Disables the addon w/ADDON_NAME within minikube",
        },
        {
          name: "enable",
          description: "Enables the addon w/ADDON_NAME within minikube",
        },
        {
          name: "images",
          description: "List image names the addon w/ADDON_NAME used",
        },
        {
          name: "list",
          description:
            "Lists all available minikube addons as well as their current statuses",
        },
        {
          name: "open",
          description: "Opens the addon w/ADDON_NAME within minikube",
        },
      ],
    },
    {
      name: "config",
      description: "Modify persistent configuration values",
      subcommands: [
        {
          name: "defaults",
          description: "Lists all valid default values for PROPERTY_NAME",
        },
        {
          name: "get",
          description:
            "Gets the value of PROPERTY_NAME from the minikube config file",
        },
        {
          name: "set",
          description: "Sets an individual value in a minikube config file",
        },
        {
          name: "unset",
          description: "Unsets an individual value in a minikube config file",
        },
        {
          name: "view",
          description:
            "Display values currently set in the minikube config file",
        },
      ],
    },
    {
      name: "profile",
      description: "Get or list the current profiles (clusters)",
      subcommands: [
        {
          name: "list",
          description: "Lists all minikube profiles",
        },
      ],
    },
    {
      name: "update-context",
      description: "Update kubeconfig in case of an IP or port change",
    },

    // Networking and Connectivity Commands
    {
      name: "service",
      description: "Returns a URL to connect to a service",
      subcommands: [
        {
          name: "list",
          description: "Lists the URLs for the services in your local cluster",
          options: [
            {
              name: ["--namespace", "-n"],
              description: "The services namespace",
            },
          ],
        },
      ],
      options: [
        {
          name: "--https",
          description: "Open the service URL with https instead of http",
        },
        {
          name: "--interval",
          description:
            "The initial time interval for each check that wait performs in seconds",
        },
        {
          name: "--namespace",
          description: "The service namespace",
        },
        {
          name: "--url",
          description:
            "Display the Kubernetes service URL in the CLI instead of opening it in the default browser",
        },
        {
          name: "--wait",
          description: "Amount of time to wait for a service in seconds",
        },
      ],
    },
    {
      name: "tunnel",
      description: "Connect to LoadBalancer services",
      options: [
        {
          name: ["--cleanup", "-c"],
          description: "Call with cleanup=true to remove old tunnels",
        },
      ],
    },

    // Advanced Commands
    {
      name: "mount",
      description: "Mounts the specified directory into minikube",
      options: [
        {
          name: "--9p-version",
          description: "Specify the 9p version that the mount should use",
        },
        {
          name: "--gid",
          description: "Default group id used for the mount",
        },
        {
          name: "--ip",
          description: "Specify the ip that the mount should be setup on",
        },
        {
          name: "--kill",
          description: "Kill the mount process spawned by minikube start",
        },
        {
          name: "--mode",
          description: "File permissions used for the mount",
        },
        {
          name: "--msize",
          description: "The number of bytes to use for 9p packet payload",
        },
        {
          name: "--options",
          description: "Additional mount options, such as cache=fscache",
        },
        {
          name: "--port",
          description: "Specify the port that the mount should be setup on",
        },
        {
          name: "--type",
          description:
            "Specify the mount filesystem type (supported types: 9p)",
        },
        {
          name: "--uid",
          description: "Default user id used for the mount",
        },
      ],
    },
    {
      name: "ssh",
      description: "Log into the minikube environment (for debugging)",
      options: [
        {
          name: "--native-ssh",
          description: "Use native Golang SSH client",
        },
        {
          name: ["--node", "-n"],
          description: "The node to ssh into",
        },
      ],
    },
    {
      name: "kubectl",
      description: "Run a kubectl binary matching the cluster version",
      options: [
        {
          name: "--ssh",
          description: "Use SSH for running kubernetes client on the node",
        },
      ],
    },
    {
      name: "node",
      description: "Add, remove, or list additional nodes",
      subcommands: [
        {
          name: "add",
          description: "Adds a node to the given cluster",
        },
        {
          name: "delete",
          description: "Deletes a node from a cluster",
        },
        {
          name: "list",
          description: "List nodes",
        },
        {
          name: "start",
          description: "Starts a node",
        },
        {
          name: "stop",
          description: "Stops a node in a cluster",
        },
      ],
    },
    {
      name: "cp",
      description: "Copy the specified file into minikube",
      args: {
        name: "[source] [target]",
      },
    },

    // Troubleshooting Commands
    {
      name: "ssh-key",
      description: "Retrieve the ssh identity key path of the specified node",
      options: [
        {
          name: ["--node", "-n"],
          description: "The node to get ssh-key path",
        },
      ],
    },
    {
      name: "ssh-host",
      description: "Retrieve the ssh host key of the specified node",
      options: [
        {
          name: "--append-known",
          description: "Add host key to SSH known_hosts file",
        },
        {
          name: ["--node", "-n"],
          description: "The node to ssh into",
        },
      ],
    },
    {
      name: "ip",
      description: "Retrieves the IP address of the specified node",
      options: [
        {
          name: ["--node", "-n"],
          description: "The node to get IP",
        },
      ],
    },
    {
      name: "logs",
      description: "Returns logs to debug a local Kubernetes cluster",
      options: [
        {
          name: "--file",
          description:
            "If present, writes to the provided file instead of stdout",
        },
        {
          name: ["--follow", "-f"],
          description: "Show only the most recent journal entries",
        },
        {
          name: ["--length", "-n"],
          description: "Number of lines back to go within the log",
        },
        {
          name: "--node",
          description:
            "The node to get logs from. Defaults to the primary control plane",
        },
        {
          name: "--problems",
          description: "Show only log entries which point to known problems",
        },
      ],
    },
    {
      name: "update-check",
      description: "Print current and latest version number",
    },
    {
      name: "version",
      description: "Print the version of minikube",
      options: [
        {
          name: "--components",
          description: "List versions of all components included with minikube",
        },
        sharedOpts.output,
        {
          name: "--short",
          description: "Print just the version number",
          args: {
            suggestions: ["true", "false"],
          },
        },
      ],
    },
    {
      name: "options",
      description: "Add, remove, or list additional nodes",
    },

    // Other Commands
    {
      name: "completion",
      description: "Generate command completion for a shell",
      subcommands: [
        {
          name: "bash",
          description: "Bash completion",
        },
        {
          name: "fish",
          description: "Fish completion",
        },
        {
          name: "zsh",
          description: "Zsh completion",
        },
      ],
    },
  ],
};
export default completionSpec;
