const completionSpec: Fig.Spec = {
  name: "pro",
  description: "Manage Ubuntu Pro services from Canonical",
  subcommands: [
    {
      name: "attach",
      description: "Connect an Ubuntu Pro support contract to this machine",
      options: [
        {
          name: "--no-auto-enable",
          description:
            "Disable  the  automatic enablement of recommended entitlements",
        },
        {
          name: "--attach-config",
          description: "Provide a file with configuration options",
          requiresSeparator: true,
          args: {
            name: "file path",
            template: "filepaths",
          },
        },
      ],
      args: {
        name: "token",
        isOptional: true,
        description:
          "Auth token. Not required if specified in --attach-config file",
      },
    },
    {
      name: "collect-logs",
      description: "Create a tarball with all relevant logs and debug data",
      options: [
        {
          name: ["-o", "--output"],
          description:
            "Path for tarball. Uses ua_logs.tar.gz in current directory if not specified",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "detach",
      description: "Remove Ubuntu Pro from this machine",
      isDangerous: true,
    },
    {
      name: "disable",
      description: "Disable this machine's access to an Ubuntu Pro service",
      args: {
        name: "service",
        suggestions: [
          "cc-eal",
          "cis",
          "esm",
          "fips",
          "fips-updates",
          "livepatch",
          "ros",
          "ros-updates",
        ],
      },
    },
    {
      name: "enable",
      description:
        "Activate and configure this machine's access to an Ubuntu Pro service",
      args: {
        name: "service",
        suggestions: [
          "cc-eal",
          "cis",
          "esm",
          "fips",
          "fips-updates",
          "livepatch",
          "ros",
          "ros-updates",
        ],
      },
    },
    {
      name: "fix",
      description:
        "Fix a CVE or USN on the  system  by  upgrading  the  appropriate package(s)",
      args: {
        name: "security issue",
      },
    },
    {
      name: "refresh",
      description: "Refresh contract and service details from Canonical",
    },
    {
      name: "security-status",
      description:
        "Show  security updates for packages in the system, including all available ESM related content",
    },
    {
      name: "status",
      description: "Report current status of Ubuntu Pro services on system",
      options: [
        {
          name: "--format",
          description: "Output format",
          requiresSeparator: true,
          args: {
            suggestions: ["tabular", "json", "yaml"],
          },
        },
        {
          name: "--simulate-with-token",
          args: {
            name: "token",
          },
        },
        {
          name: "--all",
          description: "Include beta and unavailable services",
        },
      ],
    },
  ],
};
export default completionSpec;
