import { filepaths } from "@fig/autocomplete-generators";

const runningAppsGenerator: Fig.Generator = {
  script: ["dapr", "list", "-A", "-o", "json"],
  postProcess: function (out) {
    try {
      const appList = JSON.parse(out);
      return appList.map((app) => {
        return {
          name: app.appId,
          description: `HTTP Port: ${app.httpPort} age: ${app.age}`,
        };
      });
    } catch {
      return [];
    }
  },
};

const runtimeVersionsGenerator: Fig.Generator = {
  cache: {
    ttl: 1000 * 60 * 60 * 24 * 2, // 2 days
  },
  custom: async (context, executeShellCommand): Promise<Fig.Suggestion[]> => {
    const queryVersions = [
      "-s",
      "-H",
      "Accept: application/json",
      "https://hub.docker.com/v2/namespaces/daprio/repositories/daprd/tags?page_size=100",
    ];

    const out = () =>
      executeShellCommand({
        command: "curl",
        args: queryVersions,
      });

    try {
      const data = JSON.parse((await out()).stdout);

      const results = data.results;

      return results.map((item) => ({
        name: item.name,
        description: `Updated: ${item.last_updated}`,
      })) as Fig.Suggestion[];
    } catch (error) {
      console.error({ error });
      return [];
    }
  },
};

const completionSpec: Fig.Spec = {
  name: "dapr",
  description: "Dapr CLI",
  subcommands: [
    {
      name: "annotate",
      description:
        "Add dapr annotations to a Kubernetes configuration. Supported platforms: Kubernetes",
      options: [
        {
          name: "--api-token-secret",
          description: "The secret to use for the API token",
          args: { name: "api-token-secret" },
        },
        {
          name: ["--app-id", "-a"],
          description: "The app id to annotate",
          args: { name: "app-id", generators: runningAppsGenerator },
        },
        {
          name: "--app-max-concurrency",
          description: "The maximum number of concurrent requests to allow",
          args: { name: "app-max-concurrency", default: "-1" },
        },
        {
          name: ["--app-port", "-p"],
          description: "The port to expose the app on",
          args: { name: "app-port", default: "-1" },
        },
        {
          name: "--app-protocol",
          description:
            "The protocol to use for the app. Allowed values http, https, h2c, grpc, grpcs",
          args: {
            name: "app-protocol",
            suggestions: ["http", "https", "h2c", "grpc", "grpcs"],
          },
        },
        {
          name: "--app-ssl",
          description: "Enable SSL for the app",
          hidden: true,
        },
        {
          name: "--app-token-secret",
          description: "The secret to use for the app token",
          args: { name: "app-token-secret" },
        },
        {
          name: ["--config", "-c"],
          description: "The config file to annotate",
          args: {
            name: "config",
            generators: filepaths({
              extensions: ["yaml", "yml"],
              editFileSuggestions: { priority: 99 },
            }),
          },
        },
        {
          name: "--cpu-limit",
          description: "The CPU limit to set",
          args: { name: "cpu-limit" },
        },
        {
          name: "--cpu-request",
          description: "The CPU request to set",
          args: { name: "cpu-request" },
        },
        {
          name: "--dapr-image",
          description: "The image to use for the dapr sidecar container",
          args: { name: "dapr-image" },
        },
        {
          name: "--disable-builtin-k8s-secret-store",
          description: "Disable the built-in k8s secret store",
        },
        {
          name: "--enable-api-logging",
          description: "Enable API logging for the Dapr sidecar",
        },
        { name: "--enable-debug", description: "Enable debug" },
        { name: "--enable-metrics", description: "Enable metrics" },
        { name: "--enable-profile", description: "Enable profiling" },
        {
          name: "--env",
          description:
            "Environment variables to set (key value pairs, comma separated)",
          args: { name: "env" },
        },
        {
          name: "--graceful-shutdown-seconds",
          description: "The number of seconds to wait for the app to shutdown",
          args: { name: "graceful-shutdown-seconds", default: "-1" },
        },
        {
          name: "--http-read-buffer-size",
          description:
            "The maximum size of HTTP header read buffer in kilobytes",
          args: { name: "http-read-buffer-size", default: "-1" },
        },
        {
          name: "--http-stream-request-body",
          description: "Enable streaming request body for HTTP",
        },
        {
          name: ["--kubernetes", "-k"],
          description: "Apply annotations to Kubernetes resources",
          isRequired: true,
          priority: 100,
        },
        {
          name: "--listen-addresses",
          description: "The addresses to listen on",
          args: { name: "listen-addresses" },
        },
        {
          name: "--liveness-probe-delay",
          description: "The delay to use for the liveness probe",
          args: { name: "liveness-probe-delay", default: "-1" },
        },
        {
          name: "--liveness-probe-period",
          description: "The period to use for the liveness probe",
          args: { name: "liveness-probe-period", default: "-1" },
        },
        {
          name: "--liveness-probe-threshold",
          description: "The threshold to use for the liveness probe",
          args: { name: "liveness-probe-threshold", default: "-1" },
        },
        {
          name: "--liveness-probe-timeout",
          description: "The timeout to use for the liveness probe",
          args: { name: "liveness-probe-timeout", default: "-1" },
        },
        { name: "--log-as-json", description: "Log as JSON" },
        {
          name: "--log-level",
          description: "The log level to use",
          args: { name: "log-level" },
        },
        {
          name: "--max-request-body-size",
          description: "The maximum request body size to use",
          args: { name: "max-request-body-size", default: "-1" },
        },
        {
          name: "--memory-limit",
          description: "The memory limit to set",
          args: { name: "memory-limit" },
        },
        {
          name: "--memory-request",
          description: "The memory request to set",
          args: { name: "memory-request" },
        },
        {
          name: "--metrics-port",
          description: "The port to expose the metrics on",
          args: { name: "metrics-port", default: "-1" },
        },
        {
          name: ["--namespace", "-n"],
          description:
            "The namespace the resource target is in (can only be set if --resource is also set)",
          args: { name: "namespace" },
        },
        {
          name: "--placement-host-address",
          description:
            "Comma separated list of addresses for Dapr actor placement servers",
          args: { name: "placement-host-address" },
        },
        {
          name: "--readiness-probe-delay",
          description: "The delay to use for the readiness probe",
          args: { name: "readiness-probe-delay", default: "-1" },
        },
        {
          name: "--readiness-probe-period",
          description: "The period to use for the readiness probe",
          args: { name: "readiness-probe-period", default: "-1" },
        },
        {
          name: "--readiness-probe-threshold",
          description: "The threshold to use for the readiness probe",
          args: { name: "readiness-probe-threshold", default: "-1" },
        },
        {
          name: "--readiness-probe-timeout",
          description: "The timeout to use for the readiness probe",
          args: { name: "readiness-probe-timeout", default: "-1" },
        },
        {
          name: ["--resource", "-r"],
          description: "The resource to target to annotate",
          args: { name: "resource" },
        },
        {
          name: "--unix-domain-socket-path",
          description:
            "Linux domain socket path to use for communicating with the Dapr sidecar",
          args: { name: "unix-domain-socket-path" },
        },
        {
          name: "--volume-mounts",
          description:
            "List of pod volumes to be mounted to the sidecar container in read-only mode",
          args: { name: "volume-mounts" },
        },
        {
          name: "--volume-mounts-rw",
          description:
            "List of pod volumes to be mounted to the sidecar container in read-write mode",
          args: { name: "volume-mounts-rw" },
        },
      ],
      args: {
        name: "config",
        generators: filepaths({
          extensions: ["yaml", "yml"],
          editFileSuggestions: { priority: 99 },
        }),
      },
    },
    {
      name: "build-info",
      description: "Print build info of Dapr CLI and runtime",
      options: [
        { name: ["--help", "-h"], description: "Print this help message" },
      ],
    },
    {
      name: "completion",
      description: "Generates shell completion scripts",
      subcommands: [
        {
          name: "bash",
          description: "Generates bash completion scripts",
          options: [
            { name: ["--help", "-h"], description: "Print this help message" },
          ],
        },
        {
          name: "fish",
          description: "Generates fish completion scripts",
          options: [
            { name: ["--help", "-h"], description: "Print this help message" },
          ],
        },
        {
          name: "powershell",
          description: "Generates powershell completion scripts",
          options: [
            { name: ["--help", "-h"], description: "Print this help message" },
          ],
        },
        {
          name: "zsh",
          description: "Generates zsh completion scripts",
          options: [
            { name: ["--help", "-h"], description: "Print this help message" },
          ],
        },
      ],
      options: [
        { name: ["--help", "-h"], description: "Print this help message" },
      ],
    },
    {
      name: "components",
      description: "List all Dapr components. Supported platforms: Kubernetes",
      options: [
        {
          name: ["--all-namespaces", "-A"],
          description: "If true, list all Dapr components in all namespaces",
        },
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: ["--kubernetes", "-k"],
          description: "List all Dapr components in a Kubernetes cluster",
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "The components name to be printed (optional)",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description: "List all namespace components in a Kubernetes cluster",
          args: { name: "namespace" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (options: json or yaml or list)",
          args: {
            name: "output",
            default: "list",
            suggestions: ["json", "yaml", "list"],
          },
        },
      ],
    },
    {
      name: "configurations",
      description:
        "List all Dapr configurations. Supported platforms: Kubernetes",
      options: [
        {
          name: ["--all-namespaces", "-A"],
          description:
            "If true, list all Dapr configurations in all namespaces",
        },
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: ["--kubernetes", "-k"],
          description: "List all Dapr configurations in a Kubernetes cluster",
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "The configuration name to be printed (optional)",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description:
            "List Define namespace configurations in a Kubernetes cluster",
          args: { name: "namespace" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (options: json or yaml or list)",
          args: {
            name: "output",
            default: "list",
            suggestions: ["json", "yaml", "list"],
          },
        },
      ],
    },
    {
      name: "dashboard",
      description:
        "Start Dapr dashboard. Supported platforms: Kubernetes and self-hosted",
      options: [
        {
          name: ["--address", "-a"],
          description:
            "Address to listen on. Only accepts IP address or localhost as a value",
          args: { name: "address", default: "localhost" },
        },
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: ["--kubernetes", "-k"],
          description:
            "Opens Dapr dashboard in local browser via local proxy to Kubernetes cluster",
        },
        {
          name: ["--namespace", "-n"],
          description: "The namespace where Dapr dashboard is running",
          args: { name: "namespace", default: "dapr-system" },
        },
        {
          name: ["--port", "-p"],
          description: "The local port on which to serve Dapr dashboard",
          args: { name: "port", default: "8080" },
        },
        {
          name: ["--version", "-v"],
          description: "Print the version for Dapr dashboard",
        },
      ],
    },
    {
      name: "init",
      description:
        "Install Dapr on supported hosting platforms. Supported platforms: Kubernetes and self-hosted",
      options: [
        {
          name: "--ca-root-certificate",
          description: "The root certificate file",
          args: { name: "ca-root-certificate" },
        },
        {
          name: "--container-runtime",
          description:
            "The container runtime to use. Supported values are docker (default) and podman",
          args: {
            name: "container-runtime",
            default: "docker",
            suggestions: ["docker", "podman"],
          },
        },
        {
          name: "--dashboard-version",
          description:
            "The version of the Dapr dashboard to install, for example: 0.13.0",
          args: { name: "dashboard-version", default: "latest" },
        },
        {
          name: "--dev",
          description:
            "Use Dev mode. Deploy Redis, Zipkin also in the Kubernetes cluster",
        },
        {
          name: "--enable-ha",
          description: "Enable high availability (HA) mode",
        },
        { name: "--enable-mtls", description: "Enable mTLS in your cluster" },
        {
          name: "--from-dir",
          description:
            "Use Dapr artifacts from local directory for self-hosted installation",
          args: { name: "from-dir" },
        },
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: "--image-registry",
          description: "Custom/private docker image repository URL",
          args: { name: "image-registry" },
        },
        {
          name: "--image-variant",
          description:
            "The image variant to use for the Dapr runtime, for example: mariner",
          args: { name: "image-variant" },
        },
        {
          name: "--issuer-private-key",
          description: "The issuer certificate private key",
          args: { name: "issuer-private-key" },
        },
        {
          name: "--issuer-public-certificate",
          description: "The issuer certificate",
          args: { name: "issuer-public-certificate" },
        },
        {
          name: ["--kubernetes", "-k"],
          description: "Deploy Dapr to a Kubernetes cluster",
        },
        {
          name: ["--namespace", "-n"],
          description: "The Kubernetes namespace to install Dapr in",
          args: { name: "namespace", default: "dapr-system" },
        },
        {
          name: "--network",
          description: "The Docker network on which to deploy the Dapr runtime",
          args: { name: "network" },
        },
        {
          name: "--runtime-version",
          description:
            "The version of the Dapr runtime to install, for example: 1.0.0",
          args: {
            name: "runtime-version",
            default: "latest",
            suggestCurrentToken: true,
            generators: runtimeVersionsGenerator,
          },
        },
        {
          name: "--set",
          description:
            "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set" },
        },
        {
          name: ["--slim", "-s"],
          description:
            "Exclude placement service, Redis and Zipkin containers from self-hosted installation",
        },
        {
          name: "--timeout",
          description: "The wait timeout for the Kubernetes installation",
          args: { name: "timeout", default: "300" },
        },
        {
          name: "--wait",
          description: "Wait for Kubernetes initialization to complete",
        },
      ],
    },
    {
      name: "invoke",
      description:
        "Invoke a method on a given Dapr application. Supported platforms: Self-hosted",
      options: [
        {
          name: ["--app-id", "-a"],
          description: "The application id to invoke",
          args: { name: "app-id", generators: runningAppsGenerator },
          isRequired: true,
        },
        {
          name: ["--data", "-d"],
          description: "The JSON serialized data string (optional)",
          args: { name: "data" },
        },
        {
          name: ["--data-file", "-f"],
          description: "A file containing the JSON serialized data (optional)",
          args: { name: "data-file", template: "filepaths" },
        },
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: ["--method", "-m"],
          description: "The method to invoke",
          args: { name: "method" },
          isRequired: true,
        },
        {
          name: ["--unix-domain-socket", "-u"],
          description:
            "Path to a unix domain socket dir. If specified, Dapr API servers will use Unix Domain Sockets",
          args: { name: "unix-domain-socket" },
        },
        {
          name: ["--verb", "-v"],
          description: "The HTTP verb to use",
          args: { name: "verb", default: "POST" },
        },
      ],
    },
    {
      name: "list",
      description:
        "List all Dapr instances. Supported platforms: Kubernetes and self-hosted",
      options: [
        {
          name: ["--all-namespaces", "-A"],
          description: "If true, list all Dapr pods in all namespaces",
        },
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: ["--kubernetes", "-k"],
          description: "List all Dapr pods in a Kubernetes cluster",
        },
        {
          name: "--namespace",
          description: "List define namespace pod in a Kubernetes cluster",
          args: { name: "namespace" },
        },
        {
          name: ["--output", "-o"],
          description:
            "The output format of the list. Valid values are: json, yaml, or table (default)",
          args: { name: "output", suggestions: ["json", "yaml", "table"] },
        },
      ],
    },
    {
      name: "logs",
      description:
        "Get Dapr sidecar logs for an application. Supported platforms: Kubernetes",
      options: [
        {
          name: ["--app-id", "-a"],
          description: "The application id for which logs are needed",
          args: { name: "app-id", generators: runningAppsGenerator },
          isRequired: true,
        },
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: ["--kubernetes", "-k"],
          description: "Get logs from a Kubernetes cluster",
          isRequired: true,
          priority: 100,
        },
        {
          name: ["--namespace", "-n"],
          description:
            "The Kubernetes namespace in which your application is deployed",
          args: { name: "namespace", default: "default" },
        },
        {
          name: ["--pod-name", "-p"],
          description:
            "The name of the pod in Kubernetes, in case your application has multiple pods (optional)",
          args: { name: "pod-name" },
        },
      ],
    },
    {
      name: "mtls",
      description: "Check if mTLS is enabled. Supported platforms: Kubernetes",
      subcommands: [
        {
          name: "expiry",
          description: "Checks the expiry of the root certificate",
        },
        {
          name: "export",
          description:
            "Export the root CA, issuer cert and key from Kubernetes to local files",
          options: [
            { name: ["--help", "-h"], description: "Print this help message" },
            {
              name: ["--out", "-o"],
              description: "The output directory path to save the certs",
              args: { name: "out", default: "." },
            },
          ],
        },
        {
          name: ["renew-cert", "rnc", "renew-certificate"],
          description:
            "Rotates the Dapr root certificate on your Kubernetes cluster",
          options: [
            {
              name: "--ca-root-certificate",
              description: "The root certificate file",
              args: { name: "ca-root-certificate" },
            },
            {
              name: "--image-variant",
              description:
                "The image variant to use for the Dapr runtime, for example: mariner",
              args: { name: "image-variant" },
            },
            {
              name: "--issuer-private-key",
              description: "The issuer certificate private key",
              args: { name: "issuer-private-key" },
            },
            {
              name: "--issuer-public-certificate",
              description: "The issuer certificate",
              args: { name: "issuer-public-certificate" },
            },
            {
              name: ["--kubernetes", "-k"],
              description:
                "Renews root and issuer certificates of Dapr in a Kubernetes cluster",
              isRequired: true,
            },
            {
              name: "--private-key",
              description:
                "The root.key file which is used to generate root certificate",
              args: { name: "private-key" },
            },
            {
              name: "--restart",
              description: "Restart Dapr control plane services",
            },
            {
              name: "--timeout",
              description: "The timeout for the certificate renewal",
              args: { name: "timeout", default: "300" },
            },
            {
              name: "--valid-until",
              description: "Max days before certificate expires",
              args: { name: "valid-until", default: "365" },
            },
          ],
        },
      ],
      options: [
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: ["--kubernetes", "-k"],
          description: "Check if mTLS is enabled in a Kubernetes cluster",
          isRequired: true,
        },
      ],
    },
    {
      name: "publish",
      description: "Publish a pub-sub event. Supported platforms: Self-hosted",
      options: [
        {
          name: ["--data", "-d"],
          description: "The JSON serialized data string (optional)",
          args: { name: "data" },
        },
        {
          name: ["--data-file", "-f"],
          description: "A file containing the JSON serialized data (optional)",
          args: { name: "data-file" },
        },
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: ["--metadata", "-m"],
          description: "The JSON serialized publish metadata (optional)",
          args: { name: "metadata" },
        },
        {
          name: ["--publish-app-id", "-i"],
          description: "The ID of the publishing app",
          args: { name: "publish-app-id" },
          isRequired: true,
        },
        {
          name: ["--pubsub", "-p"],
          description: "The name of the pub/sub component",
          args: { name: "pubsub" },
          isRequired: true,
        },
        {
          name: ["--topic", "-t"],
          description: "The topic to be published to",
          args: { name: "topic" },
          isRequired: true,
        },
        {
          name: ["--unix-domain-socket", "-u"],
          description:
            "Path to a unix domain socket dir. If specified, Dapr API servers will use Unix Domain Sockets",
          args: { name: "unix-domain-socket" },
        },
      ],
    },
    {
      name: "run",
      description:
        "Run Dapr and (optionally) your application side by side. Supported platforms: Self-hosted",
      options: [
        {
          name: "--app-channel-address",
          description: "The network address the application listens on",
          args: { name: "app-channel-address", default: "127.0.0.1" },
        },
        {
          name: "--app-health-check-path",
          description: "Path used for health checks; HTTP only",
          args: { name: "app-health-check-path" },
        },
        {
          name: "--app-health-probe-interval",
          description: "Interval to probe for the health of the app in seconds",
          args: { name: "app-health-probe-interval", default: "0" },
        },
        {
          name: "--app-health-probe-timeout",
          description: "Timeout for app health probes in milliseconds",
          args: { name: "app-health-probe-timeout", default: "0" },
        },
        {
          name: "--app-health-threshold",
          description:
            "Number of consecutive failures for the app to be considered unhealthy",
          args: { name: "app-health-threshold", default: "0" },
        },
        {
          name: ["--app-id", "-a"],
          description:
            "The id for your application, used for service discovery",
          args: { name: "app-id" },
        },
        {
          name: "--app-max-concurrency",
          description:
            "The concurrency level of the application, otherwise is unlimited",
          args: { name: "app-max-concurrency", default: "-1" },
        },
        {
          name: ["--app-port", "-p"],
          description: "The port your application is listening on",
          args: { name: "app-port", default: "-1" },
        },
        {
          name: ["--app-protocol", "-P"],
          description:
            "The protocol (grpc, grpcs, http, https, h2c) Dapr uses to talk to the application",
          args: {
            name: "app-protocol",
            default: "http",
            suggestions: ["http", "https", "h2c", "grpc", "grpcs"],
          },
        },
        {
          name: "--app-ssl",
          description: "Enable https when Dapr invokes the application",
        },
        {
          name: ["--components-path", "-d"],
          description:
            "The path for components directory. Default is $HOME/.dapr/components or %USERPROFILE%.daprcomponents",
          args: { name: "components-path", template: "folders" },
        },
        {
          name: ["--config", "-c"],
          description: "Dapr configuration file",
          args: {
            name: "config",
            generators: filepaths({
              extensions: ["yaml", "yml"],
              editFileSuggestions: { priority: 100 },
            }),
          },
        },
        {
          name: ["--dapr-grpc-port", "-G"],
          description: "The gRPC port for Dapr to listen on",
          args: { name: "dapr-grpc-port", default: "-1" },
        },
        {
          name: "--dapr-http-max-request-size",
          description: "Max size of request body in MB",
          args: { name: "dapr-http-max-request-size", default: "-1" },
        },
        {
          name: ["--dapr-http-port", "-H"],
          description: "The HTTP port for Dapr to listen on",
          args: { name: "dapr-http-port", default: "-1" },
        },
        {
          name: "--dapr-http-read-buffer-size",
          description: "HTTP header read buffer in KB",
          args: { name: "dapr-http-read-buffer-size", default: "-1" },
        },
        {
          name: ["--dapr-internal-grpc-port", "-I"],
          description: "The gRPC port for the Dapr internal API to listen on",
          args: { name: "dapr-internal-grpc-port", default: "-1" },
        },
        {
          name: "--dapr-listen-addresses",
          description:
            "Comma separated list of IP addresses that sidecar will listen to",
          args: { name: "dapr-listen-addresses" },
        },
        {
          name: "--enable-api-logging",
          description:
            "Log API calls at INFO verbosity. Valid values are: true or false",
        },
        {
          name: "--enable-app-health-check",
          description:
            "Enable health checks for the application using the protocol defined with app-protocol",
        },
        {
          name: "--enable-profiling",
          description: "Enable pprof profiling via an HTTP endpoint",
        },
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: ["--kubernetes", "-k"],
          description:
            "Run the multi-app run template against Kubernetes environment",
        },
        {
          name: "--log-level",
          description:
            "The log verbosity. Valid values are: debug, info, warn, error, fatal, or panic",
          args: { name: "log-level", default: "info" },
        },
        {
          name: ["--metrics-port", "-M"],
          description: "The port of metrics on dapr",
          args: { name: "metrics-port", default: "-1" },
        },
        {
          name: "--placement-host-address",
          description:
            "The address of the placement service. Format is either <hostname> for default port or <hostname>:<port> for custom port",
          args: { name: "placement-host-address", default: "localhost" },
        },
        {
          name: "--profile-port",
          description: "The port for the profile server to listen on",
          args: { name: "profile-port", default: "-1" },
        },
        {
          name: "--resources-path",
          description: "The path for resources directory",
          isRepeatable: true,
          args: { name: "resources-path", template: "folders" },
        },
        {
          name: ["--run-file", "-f"],
          description:
            "Path to the run template file for the list of apps to run",
          args: {
            name: "run-file",
            generators: filepaths({
              extensions: ["yaml", "yml"],
              editFileSuggestions: { priority: 100 },
            }),
          },
        },
        {
          name: ["--unix-domain-socket", "-u"],
          description:
            "Path to a unix domain socket dir. If specified, Dapr API servers will use Unix Domain Sockets",
          args: { name: "unix-domain-socket" },
        },
      ],
    },
    {
      name: "status",
      description:
        "Show the health status of Dapr services. Supported platforms: Kubernetes",
      options: [
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: ["--kubernetes", "-k"],
          description:
            "Show the health status of Dapr services on Kubernetes cluster",
          isRequired: true,
        },
      ],
    },
    {
      name: "stop",
      description:
        "Stop Dapr instances and their associated apps. Supported platforms: Self-hosted",
      options: [
        {
          name: ["--app-id", "-a"],
          description: "The application id to be stopped",
          args: {
            name: "app-id",
            isVariadic: true,
            generators: runningAppsGenerator,
          },
        },
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: ["--kubernetes", "-k"],
          description:
            "Stop deployments in Kunernetes based on multi-app run file",
        },
        {
          name: ["--run-file", "-f"],
          description:
            "Path to the run template file for the list of apps to stop",
          args: {
            name: "run-file",
            generators: filepaths({
              extensions: ["yaml", "yml"],
              editFileSuggestions: { priority: 100 },
            }),
          },
        },
      ],
    },
    {
      name: "uninstall",
      description:
        "Uninstall Dapr runtime. Supported platforms: Kubernetes and self-hosted",
      options: [
        {
          name: "--all",
          description:
            "Remove .dapr directory, Redis, Placement and Zipkin containers on local machine, and CRDs on a Kubernetes cluster",
        },
        {
          name: "--container-runtime",
          description:
            "The container runtime to use. Supported values are docker (default) and podman",
          args: { name: "container-runtime", default: "docker" },
        },
        {
          name: "--dev",
          description:
            "Uninstall Dapr Redis and Zipking installations from Kubernetes cluster",
        },
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: ["--kubernetes", "-k"],
          description: "Uninstall Dapr from a Kubernetes cluster",
        },
        {
          name: ["--namespace", "-n"],
          description: "The Kubernetes namespace to uninstall Dapr from",
          args: { name: "namespace", default: "dapr-system" },
        },
        {
          name: "--network",
          description:
            "The Docker network from which to remove the Dapr runtime",
          args: { name: "network" },
        },
        {
          name: "--timeout",
          description: "The timeout for the Kubernetes uninstall",
          args: { name: "timeout", default: "300" },
        },
      ],
    },
    {
      name: "upgrade",
      description:
        "Upgrades or downgrades a Dapr control plane installation in a cluster. Supported platforms: Kubernetes",
      options: [
        {
          name: "--dashboard-version",
          description:
            "The version of the Dapr dashboard to upgrade or downgrade to, for example: 0.13.0",
          args: { name: "dashboard-version" },
        },
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: "--image-registry",
          description: "Custom/Private docker image repository URL",
          args: { name: "image-registry" },
        },
        {
          name: "--image-variant",
          description:
            "The image variant to use for the Dapr runtime, for example: mariner",
          args: { name: "image-variant" },
        },
        {
          name: ["--kubernetes", "-k"],
          description: "Upgrade or downgrade Dapr in a Kubernetes cluster",
          isRequired: true,
        },
        {
          name: "--runtime-version",
          description:
            "The version of the Dapr runtime to upgrade or downgrade to, for example: 1.0.0",
          args: { name: "runtime-version" },
          isRequired: true,
        },
        {
          name: "--set",
          description:
            "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set" },
        },
        {
          name: "--timeout",
          description: "The timeout for the Kubernetes upgrade",
          args: { name: "timeout", default: "300" },
        },
      ],
    },
    {
      name: "version",
      description: "Print the Dapr runtime and CLI version",
      options: [
        { name: ["--help", "-h"], description: "Print this help message" },
        {
          name: ["--output", "-o"],
          description:
            "The output format of the version command. Valid values are: json",
          args: { name: "output", suggestions: ["json"] },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "annotate",
          description:
            "Add dapr annotations to a Kubernetes configuration. Supported platforms: Kubernetes",
        },
        {
          name: "build-info",
          description: "Print build info of Dapr CLI and runtime",
        },
        {
          name: "completion",
          description: "Generates shell completion scripts",
          subcommands: [
            {
              name: "bash",
              description: "Generates bash completion scripts",
            },
            {
              name: "fish",
              description: "Generates fish completion scripts",
            },
            {
              name: "powershell",
              description: "Generates powershell completion scripts",
            },
            { name: "zsh", description: "Generates zsh completion scripts" },
          ],
        },
        {
          name: "components",
          description:
            "List all Dapr components. Supported platforms: Kubernetes",
        },
        {
          name: "configurations",
          description:
            "List all Dapr configurations. Supported platforms: Kubernetes",
        },
        {
          name: "dashboard",
          description:
            "Start Dapr dashboard. Supported platforms: Kubernetes and self-hosted",
        },
        {
          name: "init",
          description:
            "Install Dapr on supported hosting platforms. Supported platforms: Kubernetes and self-hosted",
        },
        {
          name: "invoke",
          description:
            "Invoke a method on a given Dapr application. Supported platforms: Self-hosted",
        },
        {
          name: "list",
          description:
            "List all Dapr instances. Supported platforms: Kubernetes and self-hosted",
        },
        {
          name: "logs",
          description:
            "Get Dapr sidecar logs for an application. Supported platforms: Kubernetes",
        },
        {
          name: "mtls",
          description:
            "Check if mTLS is enabled. Supported platforms: Kubernetes",
          subcommands: [
            {
              name: "expiry",
              description: "Checks the expiry of the root certificate",
            },
            {
              name: "export",
              description:
                "Export the root CA, issuer cert and key from Kubernetes to local files",
            },
            {
              name: ["renew-cert", "rnc", "renew-certificate"],
              description:
                "Rotates the Dapr root certificate on your Kubernetes cluster",
            },
          ],
        },
        {
          name: "publish",
          description:
            "Publish a pub-sub event. Supported platforms: Self-hosted",
        },
        {
          name: "run",
          description:
            "Run Dapr and (optionally) your application side by side. Supported platforms: Self-hosted",
        },
        {
          name: "status",
          description:
            "Show the health status of Dapr services. Supported platforms: Kubernetes",
        },
        {
          name: "stop",
          description:
            "Stop Dapr instances and their associated apps. Supported platforms: Self-hosted",
        },
        {
          name: "uninstall",
          description:
            "Uninstall Dapr runtime. Supported platforms: Kubernetes and self-hosted",
        },
        {
          name: "upgrade",
          description:
            "Upgrades or downgrades a Dapr control plane installation in a cluster. Supported platforms: Kubernetes",
        },
        {
          name: "version",
          description: "Print the Dapr runtime and CLI version",
        },
      ],
    },
  ],
  options: [
    { name: ["--version", "-v"], description: "Version for dapr" },
    {
      name: "--log-as-json",
      description: "Log output in JSON format",
      isPersistent: true,
    },
    {
      name: "--runtime-path",
      description: "The path to the dapr runtime installation directory",
      isPersistent: true,
      args: { name: "runtime-path", template: "folders" },
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
