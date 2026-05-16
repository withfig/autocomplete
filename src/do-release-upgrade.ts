const modeArg: Fig.Arg = {
  name: "mode",
  suggestions: ["desktop", "server"],
};

const frontendArg: Fig.Arg = {
  name: "frontend",
};

const completionSpec: Fig.Spec = {
  name: "do-release-upgrade",
  description: "Upgrade Ubuntu to latest release",
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help message and exit",
    },
    {
      name: ["-d", "--devel-release"],
      description:
        "If using the latest supported release, upgrade to the development release",
    },
    {
      name: ["-p", "--proposed"],
      description:
        "Try upgrading to the latest release using the upgrader from Ubuntu-proposed",
    },
    {
      name: "-m",
      description: "Run in a special upgrade mode",
      args: modeArg,
      hidden: true,
    },
    {
      name: "--mode",
      description: "Run in a special upgrade mode",
      requiresSeparator: true,
      args: modeArg,
    },
    {
      name: "-f",
      description: "Run the specified frontend",
      args: frontendArg,
      hidden: true,
    },
    {
      name: "--frontend",
      description: "Run the specified frontend",
      requiresSeparator: true,
      args: frontendArg,
    },
  ],
};
export default completionSpec;
