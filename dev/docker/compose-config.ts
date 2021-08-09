const completionSpec: Fig.Spec = {
  name: "config",
  description: "Validate and view the Compose file.",
  options: [
    {
      name: "--resolve-image-digests",
      description: "Pin image tags to digests.",
    },
    {
      name: "--no-interpolate",
      description: "Don't interpolate environment variables.",
    },
    {
      name: ["-q", "--quiet"],
      description: "Only validate the configuration, don't print",
    },
    {
      name: "--profiles",
      description: "Print the profile names, one per line.",
    },
    {
      name: "--services",
      description: "Print the service names, one per line.",
    },
    {
      name: "--volumes",
      description: "Print the volume names, one per line.",
    },
    {
      name: "--hash",
      description:
        'Print the service config hash, one per line. Set "service1,service2" for a list of specified services or use the wildcard symbol to display all services.',
      args: {
        name: "Service",
        suggestions: ["*"],
      },
    },
  ],
};

export default completionSpec;
