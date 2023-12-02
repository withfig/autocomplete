const completion: Fig.Spec = {
  name: "config",
  description:
    "Manage Azure CLI configuration.\n\n\t\tAvailable since Azure CLI 2.10.0",
  subcommands: [
    {
      name: "get",
      description: "Get a configuration",
      options: [
        {
          name: "--local",
          description:
            "Include local configuration. Scan from the working directory up to the root drive, then the global configuration and return the first occurrence",
        },
      ],
      args: {
        name: "<KEY>",
        description:
          "The configuration to get. If not provided, all sections and configurations will be listed. If section is provided, all configurations under the specified section will be listed. If <section>.<key> is provided, only the corresponding configuration is shown",
        isOptional: true,
      },
    },
    {
      name: "set",
      description: "Set a configuration",
      options: [
        {
          name: "--local",
          description: "Set as a local configuration in the working directory",
        },
      ],
      args: {
        name: "<KEY_VALUE>",
        description: "Space-separated configurations in the form of .=",
        isOptional: true,
      },
    },
    {
      name: "unset",
      description: "Unset a configuration",
      options: [
        {
          name: "--local",
          description:
            "Include local configuration. Scan from the working directory up to the root drive, then the global configuration and unset the first occurrence",
        },
      ],
      args: {
        name: "<KEY>",
        description: "The configuration to unset, in the form of",
        isOptional: true,
      },
    },
    {
      name: "param-persist",
      description: "Manage parameter persistence",
      subcommands: [
        {
          name: "delete",
          description: "Delete parameter persistence data",
          options: [
            {
              name: "--all",
              description:
                "Clear all parameter persistence data. Either positional name argument or --all can be specified",
            },
            {
              name: "--purge",
              description:
                "Delete parameter persistence file from working directory. Only available when --all is specified",
            },
            {
              name: "--recursive",
              description:
                "Indicate this is recursive delete of parameter persistence. Only available when --all is specified",
            },
            {
              name: ["--yes", "-y"],
              description:
                "Do not prompt for confirmation. Only available when --all is specified",
            },
          ],
          args: {
            name: "<NAME>",
            description:
              "Space-separated list of parameter persistence names. Either positional name argument or --all can be specified",
            isOptional: true,
          },
        },
        {
          name: "off",
          description: "Turn off parameter persistence",
        },
        {
          name: "on",
          description: "Turn on parameter persistence",
        },
        {
          name: "show",
          description: "Show parameter persistence data",

          args: {
            name: "<NAME>",
            description: "Space-separated list of parameter persistence names",
            isOptional: true,
          },
        },
      ],
    },
  ],
};

export default completion;
