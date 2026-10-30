const istioctlGlobalFlags: Fig.Option[] = [
  {
    name: "-c",
    description: "Path to kubeconfig file to use for CLI requests",
    args: {
      name: "kubeconfig",
      description: "Kubeconfig file path",
      template: "filepaths",
    },
  },
  {
    name: "--context",
    description: "The name of the kubeconfig context to use",
    args: { name: "context", description: "Kubeconfig context name" },
  },
  {
    name: "-i",
    description: "Istio system namespace",
    args: {
      name: "istioNamespace",
      description: "Istio system namespace",
      default: "istio-system",
    },
  },
  {
    name: "-n",
    description: "Config namespace",
    args: { name: "namespace", description: "Config namespace" },
  },
  {
    name: "--kubeclient-timeout",
    description: "Timeout in seconds for Kubernetes client operations",
    args: {
      name: "seconds",
      description: "Kube client timeout in seconds",
      default: "15",
    },
  },
  {
    name: "--vklog",
    description: "Level for Kubernetes log verbosity (e.g. --vklog=9)",
    args: { name: "level", description: "Verbosity level" },
  },
];

const dashboardSubcommand = (
  name: string,
  description: string
): Fig.Subcommand => ({
  name,
  description,
  options: [
    {
      name: "--address",
      description: "Address to bind the local dashboard server",
      args: {
        name: "address",
        description: "Bind address",
        default: "localhost",
      },
    },
    {
      name: "--browser",
      description: "Set to false to not open a browser",
      args: { name: "bool", description: "Open browser", isOptional: true },
    },
    {
      name: ["-p", "--port"],
      description: "Local port to listen on",
      args: { name: "port", description: "Local listen port" },
    },
    {
      name: "--ui-port",
      description: "The upstream dashboard port to forward to",
      args: { name: "port", description: "Upstream dashboard port" },
    },
  ],
});

const completionSpec: Fig.Spec = {
  name: "istioctl",
  description: "Istio control plane configuration command line utility",
  subcommands: [
    {
      name: "admin",
      description: "A group of commands used to manage istiod configuration",
      subcommands: [
        {
          name: "log",
          description: "Retrieve or update logging levels of istiod components",
          options: [
            {
              name: "--level",
              description:
                "Set levels for scopes: <scope>:<level> (none, error, warn, info, debug)",
              args: {
                name: "levels",
                description: "Comma-separated scope:level pairs",
              },
            },
            {
              name: "--reset",
              description: "Reset all log levels to default",
            },
            {
              name: "--stack-trace-level",
              description: "Set the stack trace log level",
              args: { name: "level", description: "Stack trace log level" },
            },
            {
              name: ["-o", "--output"],
              description: "Output format",
              args: {
                name: "format",
                suggestions: ["short", "json", "yaml"],
              },
            },
            {
              name: ["-r", "--revision"],
              description: "Control plane revision",
              args: { name: "revision", description: "Control plane revision" },
            },
          ],
        },
      ],
    },
    {
      name: "analyze",
      description: "Analyze Istio configuration and print validation messages",
      options: [
        {
          name: ["-A", "--all-namespaces"],
          description: "Analyze all namespaces",
        },
        {
          name: "--analyzer",
          description: "Run only the specified analyzers",
          isRepeatable: true,
          args: { name: "analyzer", description: "Analyzer name" },
        },
        {
          name: "--failure-threshold",
          description: "The severity at which analysis exits non-zero",
          args: { name: "severity", default: "Error" },
        },
        {
          name: ["-L", "--list-analyzers"],
          description: "List the available analyzers",
        },
        {
          name: ["-o", "--output"],
          description: "Output format",
          args: {
            name: "format",
            suggestions: ["log", "json", "yaml"],
          },
        },
        {
          name: ["-S", "--suppress"],
          description:
            "Suppress reporting a message code on a specific resource (wildcards allowed)",
          isRepeatable: true,
          args: {
            name: "code=resource",
            description: "Message code and resource",
          },
        },
        {
          name: "--use-kube",
          description:
            "Use live Kubernetes cluster for analysis (false analyzes files only)",
          args: { name: "bool", isOptional: true },
        },
        {
          name: ["-r", "--revision"],
          description:
            "Analyze the resources of a specific control plane revision",
          args: { name: "revision", description: "Control plane revision" },
        },
        {
          name: "--timeout",
          description: "The duration to wait before failing",
          args: { name: "duration", default: "30s" },
        },
        ...istioctlGlobalFlags,
      ],
    },
    {
      name: "bug-report",
      description:
        "Selectively captures cluster information and logs into an archive to help diagnose problems",
      options: [
        {
          name: "--include",
          description:
            "Comma-separated ns/deployment/pod/label/annotation/container filters (globs allowed)",
          isRepeatable: true,
          args: { name: "filters", description: "Resources to include" },
        },
        {
          name: "--exclude",
          description:
            "Comma-separated ns/deployment/pod/label/annotation/container filters to exclude",
          isRepeatable: true,
          args: { name: "filters", description: "Resources to exclude" },
        },
        {
          name: "--start-time",
          description: "Start time for log collection",
          args: { name: "time", description: "Start time" },
        },
        {
          name: "--end-time",
          description: "End time for log collection",
          args: { name: "time", description: "End time" },
        },
        {
          name: "--duration",
          description: "Duration of log collection ending at end-time",
          args: { name: "duration", description: "Duration" },
        },
        {
          name: "--full-secrets",
          description: "Also print full secrets when found",
        },
        {
          name: "--dry-run",
          description: "Only show what would be collected",
        },
        {
          name: "--timeout",
          description: "The duration to wait before failing",
          args: { name: "duration", default: "30m" },
        },
        {
          name: "--skip-analyze",
          description: "Skip the Istio analyze run",
        },
        {
          name: "--skip-cluster-dump",
          description: "Skip the cluster resource dump",
        },
        {
          name: "--skip-coredumps",
          description: "Skip the coredump collection",
        },
        {
          name: "--skip-proxy-debug",
          description: "Skip the Envoy proxy debug collection",
        },
        {
          name: "--skip-netstat",
          description: "Skip the netstat collection",
        },
        ...istioctlGlobalFlags,
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      args: {
        name: "shell",
        suggestions: ["bash", "fish", "powershell", "zsh"],
      },
    },
    {
      name: "create-remote-secret",
      description:
        "Create a secret with credentials to allow Istio to access remote Kubernetes apiservers",
      options: [...istioctlGlobalFlags],
    },
    {
      name: ["dashboard", "dash", "d"],
      description: "Access to Istio web UIs",
      subcommands: [
        dashboardSubcommand(
          "controlz",
          "Open the Envoy admin dashboard for a pod"
        ),
        dashboardSubcommand("envoy", "Open the Envoy dashboard (deprecated)"),
        dashboardSubcommand("grafana", "Open the Grafana dashboard"),
        dashboardSubcommand("istiod-debug", "Open the istiod debug dashboard"),
        dashboardSubcommand("jaeger", "Open the Jaeger dashboard"),
        dashboardSubcommand("kiali", "Open the Kiali dashboard"),
        dashboardSubcommand("prometheus", "Open the Prometheus dashboard"),
        dashboardSubcommand(
          "proxy",
          "Open the Envoy proxy dashboard for a pod"
        ),
        dashboardSubcommand("skywalking", "Open the SkyWalking dashboard"),
        dashboardSubcommand("zipkin", "Open the Zipkin dashboard"),
      ],
    },
    {
      name: "experimental",
      description: "Experimental commands that may be modified or deprecated",
      subcommands: [
        {
          name: "authz",
          description: "Inspect AuthorizationPolicies of a pod",
          subcommands: [
            {
              name: "check",
              description: "Check AuthorizationPolicies applied to a pod",
              options: [
                {
                  name: ["-f", "--file"],
                  description:
                    "The file to use instead of the live config dump",
                  args: {
                    name: "file",
                    description: "Config dump file",
                    template: "filepaths",
                  },
                },
                {
                  name: "--proxy-admin-port",
                  description: "Port of the proxy admin server",
                  args: { name: "port", default: "15000" },
                },
              ],
            },
          ],
        },
        {
          name: "check-inject",
          description:
            "Check whether Istio injection would be applied to a pod",
          options: [
            {
              name: ["-l", "--labels"],
              description: "Label pairs to test for injection",
              args: {
                name: "labels",
                description: "Comma-separated label pairs",
              },
            },
          ],
        },
        {
          name: "describe",
          description: "Describe workloads and their mesh configuration",
          subcommands: [
            {
              name: "pod",
              description: "Describe a pod and its mesh configuration",
              options: [
                {
                  name: "--ignore",
                  description: "Ignore unmeshed pods without warning",
                },
              ],
            },
            {
              name: "service",
              description: "Describe a service and its mesh configuration",
            },
          ],
        },
        {
          name: "metrics",
          description: "Prints the metrics of the specified pods",
          options: [
            {
              name: ["-d", "--duration"],
              description: "How far to look back for the metrics",
              args: { name: "duration", default: "1m" },
            },
          ],
        },
        {
          name: "precheck",
          description: "Checks the cluster for possible upgrade issues",
          options: [
            {
              name: ["-f", "--from-version"],
              description: "The version of Istio installed in the cluster",
              args: { name: "version", description: "From version" },
            },
            {
              name: "--skip-controlplane",
              description: "Skip control plane checks",
            },
            {
              name: ["-o", "--output"],
              description: "Output format",
              args: {
                name: "format",
                suggestions: ["log", "json", "yaml"],
              },
            },
          ],
        },
        {
          name: "proxy-status",
          description:
            "Prints the xDS sync status between Istiod and the proxies",
          options: [
            {
              name: ["-o", "--output"],
              description: "Output format",
              args: {
                name: "format",
                suggestions: ["json", "yaml", "table"],
              },
            },
            {
              name: "-v",
              description: "When 1, print all xDS types",
              args: { name: "verbosity", description: "Verbosity" },
            },
          ],
        },
        {
          name: "workload",
          description: "Operations on workloads with the Istio ambient mesh",
          subcommands: [
            {
              name: "group",
              description: "Operations on WorkloadGroups",
              subcommands: [
                {
                  name: "create",
                  description: "Create a WorkloadGroup",
                  options: [
                    {
                      name: ["-l", "--labels"],
                      description: "Workload labels",
                      args: {
                        name: "labels",
                        description: "Comma-separated label pairs",
                      },
                    },
                    {
                      name: ["-p", "--ports"],
                      description: "Workload ports",
                      args: { name: "ports", description: "Ports" },
                    },
                    {
                      name: ["-s", "--serviceAccount"],
                      description: "Service account to use",
                      args: {
                        name: "serviceAccount",
                        description: "Service account name",
                      },
                    },
                    {
                      name: ["-w", "--weight"],
                      description: "Weight of the workload entry",
                      args: { name: "weight", description: "Weight" },
                    },
                    {
                      name: "--network",
                      description: "Network of the workload",
                      args: { name: "network", description: "Network name" },
                    },
                    {
                      name: "--locality",
                      description: "Locality of the workload",
                      args: { name: "locality", description: "Locality" },
                    },
                  ],
                },
              ],
            },
            {
              name: "entry",
              description: "Operations on workload entries",
              subcommands: [
                {
                  name: "configure",
                  description:
                    "Generate the xDS proxy bootstrap config for a workload entry",
                  options: [
                    {
                      name: ["-f", "--file"],
                      description: "The WorkloadGroup file",
                      args: {
                        name: "file",
                        description: "WorkloadGroup file",
                        template: "filepaths",
                      },
                    },
                    {
                      name: ["-o", "--output"],
                      description: "Output directory for the generated config",
                      args: {
                        name: "dir",
                        description: "Output directory",
                        template: "folders",
                      },
                    },
                    {
                      name: "--autoregister",
                      description:
                        "Enables auto-registration of the workload entry",
                    },
                    {
                      name: "--tokenDuration",
                      description: "Token lifetime",
                      args: { name: "seconds", default: "3600" },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["install", "apply"],
      description:
        "Generates an Istio install manifest and applies it to a cluster",
      options: [
        {
          name: ["-f", "--filename"],
          description:
            "Path to file containing IstioOperator custom resources; overlaid left to right",
          isRepeatable: true,
          args: {
            name: "file",
            description: "IstioOperator file",
            template: "filepaths",
          },
        },
        {
          name: ["-d", "--manifests"],
          description: "Specify a path to a directory of charts and profiles",
          args: {
            name: "path",
            description: "Charts and profiles directory",
            template: "folders",
          },
        },
        {
          name: ["-s", "--set"],
          description:
            "Override an IstioOperator value (e.g. --set profile=demo)",
          isRepeatable: true,
          args: {
            name: "key=value",
            description: "IstioOperator value override",
          },
        },
        {
          name: ["-r", "--revision"],
          description: "Target control plane revision for the install",
          args: { name: "revision", description: "Control plane revision" },
        },
        {
          name: "--dry-run",
          description: "Console output only, do not apply anything",
        },
        {
          name: "--force",
          description: "Proceed even with validation errors encountered",
        },
        {
          name: ["-y", "--skip-confirmation"],
          description: 'Assume "yes" (skip confirmation prompt)',
        },
        {
          name: "--verify",
          description: "Verify the control plane is healthy after the install",
        },
        {
          name: "--readiness-timeout",
          description:
            "Maximum time to wait for the Istio resources to be ready",
          args: { name: "duration", default: "5m0s" },
        },
        ...istioctlGlobalFlags,
      ],
    },
    {
      name: "kube-inject",
      description:
        "Manually injects the Istio sidecar into Kubernetes workloads",
      options: [...istioctlGlobalFlags],
    },
    {
      name: "manifest",
      description: "Generate, install, and translate Istio manifests",
      subcommands: [
        {
          name: "generate",
          description: "Generates an Istio install manifest",
          options: [...istioctlGlobalFlags],
        },
        {
          name: "install",
          description:
            "Generates an Istio install manifest and applies it to a cluster",
          options: [...istioctlGlobalFlags],
        },
      ],
    },
    {
      name: "options",
      description: "Displays the values for all istioctl options",
    },
    {
      name: ["proxy-config", "pc"],
      description: "Information about the Envoy proxy configuration",
      subcommands: [
        {
          name: "all",
          description: "Retrieve all Envoy configuration for the specified pod",
        },
        {
          name: "bootstrap",
          description:
            "Retrieve Envoy bootstrap configuration for the specified pod",
        },
        {
          name: "cluster",
          description:
            "Retrieve Envoy cluster configuration for the specified pod",
        },
        {
          name: "ecds",
          description:
            "Retrieve Envoy ECDS configuration for the specified pod",
        },
        {
          name: "endpoint",
          description:
            "Retrieve Envoy endpoint configuration for the specified pod",
        },
        {
          name: "listener",
          description:
            "Retrieve Envoy listener configuration for the specified pod",
        },
        {
          name: "log",
          description:
            "Retrieve (change) logging levels of the Envoy proxy in the specified pod",
        },
        {
          name: "rootca-compare",
          description: "Compare the root certificate of the specified pods",
        },
        {
          name: "route",
          description:
            "Retrieve Envoy route configuration for the specified pod",
        },
        {
          name: "secret",
          description:
            "Retrieve Envoy secret configuration for the specified pod",
        },
      ],
    },
    {
      name: ["proxy-status", "ps"],
      description:
        "Retrieves the synchronization status of each Envoy in the mesh with the connected Istiod",
      options: [...istioctlGlobalFlags],
    },
    {
      name: "remote-cluster",
      description: "Attaches a remote cluster to the Istio control plane",
      options: [...istioctlGlobalFlags],
    },
    {
      name: "tag",
      description: "Operations on revision tags",
      subcommands: [
        { name: "generate", description: "Generates a revision tag" },
        { name: "list", description: "Lists the existing revision tags" },
        { name: "remove", description: "Removes a revision tag" },
        {
          name: "set",
          description: "Sets a revision tag to point to a particular revision",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstalls Istio from a cluster",
      options: [
        {
          name: ["-y", "--skip-confirmation"],
          description: 'Assume "yes" (skip confirmation prompt)',
        },
        ...istioctlGlobalFlags,
      ],
    },
    {
      name: "upgrade",
      description: "Upgrades the Istio control plane in-place",
      options: [...istioctlGlobalFlags],
    },
    {
      name: "validate",
      description: "Validates Istio configuration files",
      options: [...istioctlGlobalFlags],
    },
    {
      name: "version",
      description: "Prints out build version information",
      options: [
        {
          name: ["-o", "--output"],
          description: "Output format",
          args: {
            name: "format",
            suggestions: ["yaml", "json"],
          },
        },
        {
          name: ["-s", "--short"],
          description: "Prints just the version number",
        },
        {
          name: "--remote",
          description:
            "Set to false to suppress checking the control plane version",
          args: { name: "bool", isOptional: true },
        },
        ...istioctlGlobalFlags,
      ],
    },
    {
      name: "waypoint",
      description: "Manage ambient mesh waypoint proxies",
      subcommands: [
        { name: "apply", description: "Applies a waypoint to the cluster" },
        { name: "delete", description: "Deletes a waypoint from the cluster" },
        { name: "generate", description: "Generates a waypoint as YAML" },
        { name: "list", description: "Lists waypoints in the cluster" },
        {
          name: "status",
          description: "Shows the status of waypoints in the cluster",
        },
      ],
    },
    {
      name: ["ztunnel-config", "zc"],
      description: "Commands to introspect ztunnel state",
      subcommands: [
        { name: "all", description: "Retrieve all ztunnel configuration" },
        {
          name: "certificate",
          description: "Retrieve ztunnel certificate information",
        },
        {
          name: "connections",
          description: "Retrieve ztunnel connection information",
        },
        {
          name: "log",
          description: "Retrieve (change) ztunnel logging levels",
        },
        {
          name: "policy",
          description: "Retrieve ztunnel authorization policy information",
        },
        {
          name: "service",
          description: "Retrieve ztunnel service information",
        },
        {
          name: "workload",
          description: "Retrieve ztunnel workload information",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for istioctl",
    },
    ...istioctlGlobalFlags,
  ],
};

export default completionSpec;
