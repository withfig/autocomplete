const updatesGenerator: Fig.Generator = {
  script: ["softwareupdate", "--list"],
  postProcess: (out) => {
    return out
      .split("\n")
      .filter((line) => line.startsWith("* Label: "))
      .map((line) => {
        const name = line.substring(9);
        return {
          name: name,
          insertValue: `"${name}"`,
          description: "Available update",
        };
      });
  },
  scriptTimeout: 20000,
  cache: {
    strategy: "stale-while-revalidate",
    ttl: 1000 * 60 * 60 * 2,
  },
};

const completionSpec: Fig.Spec = {
  name: "softwareupdate",
  description:
    "Software Update checks for new and updated versions of your software based on information about your computer and current software",
  subcommands: [
    /** Manage updates: */
    {
      name: ["-l", "--list"],
      description: "List all appropriate update labels",
    },
    {
      name: ["-d", "--download"],
      description: "Download Only",
    },
    {
      name: ["-i", "--install"],
      description: "Install",
      args: {
        name: "label",
        isVariadic: true,
        isOptional: true,
        generators: updatesGenerator,
      },
      options: [
        {
          name: ["-a", "--all"],
          description: "All appropriate updates",
          exclusiveOn: ["-r", "--recommended"],
        },
        {
          name: ["-R", "--restart"],
          description:
            "Automatically restart (or shut down) if required to complete installation",
        },
        {
          name: ["-r", "--recommended"],
          description: "Only recommended updates",
          exclusiveOn: ["-a", "--all"],
        },
      ],
    },
    {
      name: "--list-full-installers",
      description: "List the available macOS Installers",
    },
    {
      name: "--fetch-full-installer",
      description: "Install the latest recommended macOS Installer",
    },
    {
      name: "--full-installer-version",
      description: "The version of macOS to install",
      args: { name: "version" },
    },
    {
      name: "--install-rosetta",
      description: "Install Rosetta 2",
    },
    {
      name: "--background",
      description: "Trigger a background scan and update operation",
    },
    /** Other Tools: */
    {
      name: "--dump-state",
      description:
        "Log the internal state of the SU daemon to /var/log/install.log",
    },
    {
      name: "--evaluate-products",
      description:
        "Evaluate a list of product keys specified by the --products option",
    },
    {
      name: "--history",
      description:
        "Show the install history.  By default, only displays updates installed by softwareupdate",
      options: [
        {
          name: "--all",
          description:
            "Include all processes in history (including App installs)",
        },
      ],
    },
  ],
  options: [
    {
      name: "--no-scan",
      description:
        "Do not scan when listing or installing updates (use available updates previously scanned)",
      isPersistent: true,
    },
    {
      name: "--product-types",
      description:
        "Limit a scan to a particular product type only - ignoring all others",
      args: { name: "type" },
      isPersistent: true,
    },
    {
      name: "--products",
      description:
        "A comma-separated (no spaces) list of product keys to operate on",
      isPersistent: true,
    },
    {
      name: "--force",
      description:
        'Force an operation to complete.  Use with --background to trigger a background scan regardless of "Automatically check" pref',
      isDangerous: true,
      isPersistent: true,
    },
    {
      name: "--agree-to-license",
      description:
        "Agree to the software license agreement without user interaction",
      isPersistent: true,
    },
    {
      name: "--verbose",
      description: "Enable verbose output",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Show help for softwareupdate",
    },
  ],
};
export default completionSpec;
