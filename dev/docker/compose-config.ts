export const completionSpec: Fig.Spec = {
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
};
