const completionSpec: Fig.Spec = {
  name: "config",
  description: "Manage Azure CLI configuration",
  subcommands: [
    { name: "get", description: "Get a configuration" },
    {
      name: "param-persist",
      description: "Manage parameter persistence",
      subcommands: [
        { name: "delete", description: "Delete parameter persistence data" },
        { name: "off", description: "Turn off parameter persistence" },
        { name: "on", description: "Turn on parameter persistence" },
        { name: "show", description: "Show parameter persistence data" },
      ],
    },
    { name: "set", description: "Set a configuration" },
    { name: "unset", description: "Unset a configuration" },
  ],
};

export default completionSpec;
