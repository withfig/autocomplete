import fig from "./fig";

let globalOptions: Fig.Option[] = [
  {
    name: "--argo-base-href",
    description:
      "An path to use with HTTP client (e.g. due to BASE_HREF). Defaults to the ARGO_BASE_HREF environment variable",
    args: {
      name: "string",
    },
  },
  {
    name: "--argo-http1",
    description:
      "If True, Use the HTTP client. Defaults to the ARGO_HTTP1 environment variable",
  },
  {
    name: ["--argo-server", "-s"],
    description:
      "API server host:port. e.g. localhost:2746. Defaults to the ARGO_SERVER environment variable",
    args: {
      name: "host:port",
    },
  },
  {
    name: "--as",
    description: "Username to impersonate for the operation",
    args: {
      name: "string",
    },
  },
  {
    name: "--as-group",
    description:
      "Group to impersonate for the operation, This flag can be repeated to specify multiple groups",
    args: {
      name: "stringArray",
    },
  },
  {
    name: "--as-uid",
    description: "UID to impersonate for the operation",
    args: {
      name: "string",
    },
  },
  {
    name: "--certificate-authorityk",
    description: "Path to a cert file for the certificate authority",
    args: {
      name: "string",
    },
  },
  {
    name: "--client-certificate",
    description: "Path to a client certificate file for TLS",
    args: {
      name: "string",
    },
  },
  {
    name: "--client-key",
    description: "Path to a client key file for TLS",
    args: {
      name: "string",
    },
  },
  {
    name: "--cluster",
    description: "The name of the kubeconfig cluster to use",
    args: {
      name: "string",
    },
  },
  {
    name: "--context",
    description: "The name of the kubeconfig context to use",
    args: {
      name: "string",
    },
  },
  {
    name: "--gloglevel",
    description: "Set the glog logging level",
    args: {
      name: "int",
    },
  },
  {
    name: ["--header", "-H"],
    description:
      "Sets additional header to all requests made by Argo CLI. (Can be repeated multiple times to add multiple headers",
    args: {
      name: "int",
    },
  },
  {
    name: ["--help", "-h"],
    description: "Help for argo",
  },
  {
    name: "--insecure-skip-tls-verify",
    description:
      "If True, The server's certificate will not be checked for validity. This will make your HTTPS connections insecure",
  },
  {
    name: ["--insecure-skip-verify", "-k"],
    description:
      "If true the Argo Server's certificate will not be checked for validity. This will make your HTTPS connections insecure. Defaults to the ARGO_INSECURE_SKIP_VERIFY environment variable",
  },
  {
    name: "--instanceid",
    description:
      "Submit with a specific controller's instance id label. Default to the ARGO_INSTANCEID environment variable",
    args: {
      name: "string",
    },
  },
  {
    name: "--kubeconfig",
    description: "Path to a kube config. Only required if out-of-cluster",
    args: {
      name: "string",
    },
  },
  {
    name: "--loglevel",
    description:
      'Set the logging level. One of: debug|info|warn|error (default "info")',
    args: {
      name: "string",
    },
  },
  {
    name: ["--namespace", "-n"],
    description: "If present the namespace scope for this CLI request",
    args: {
      name: "string",
    },
  },
  {
    name: "--password",
    description: "Password for basic authentication to the API server",
    args: {
      name: "string",
    },
  },
  {
    name: "--proxy-url",
    description: "This URL will be used to connect via proxy",
    args: {
      name: "string",
    },
  },
  {
    name: "--request-timeout",
    description:
      "The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m)",
    args: {
      name: "string",
    },
  },
  {
    name: ["--secure", "-e"],
    description:
      "Whether or not the server is using TLS with the Argo Server. Defaults to the ARGO_SECURE environment variable. (default true)",
  },
  {
    name: "--server",
    description: "The address and port of the Kubernetes API server",
    args: {
      name: "string",
    },
  },
  {
    name: "--tls-server-name",
    description:
      "If Provided, This name will be used to validate server certificate. If this is not provided",
    args: {
      name: "string",
    },
  },
  {
    name: "--token",
    description: "Bearer token for authentication to the API server",
    args: {
      name: "string",
    },
  },
  {
    name: "--user",
    description: "The name of the kubeconfig user to use",
    args: {
      name: "string",
    },
  },
  {
    name: "--username",
    description: "Username for basic authentication to the API server",
    args: {
      name: "string",
    },
  },
  {
    name: ["--verbose", "-v"],
    description: "Enabled verbose logging i.e. --loglevel debug",
  },
];

globalOptions = globalOptions.map((option) => ({
  isPersistent: true,
  ...option,
}));

const completionSpec: Fig.Spec = {
  name: "argo",
  description: "",
};

export default completionSpec;
