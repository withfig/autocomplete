const completionSpec: Fig.Spec = {
  name: "internet-analyzer",
  description: "Commands to manage internet analyzer",
  subcommands: [
    {
      name: "preconfigured-endpoint",
      description: "Commands to manage preconfigured endpoints",
      subcommands: [
        { name: "list", description: "List preconfigured endpoints" },
      ],
    },
    {
      name: "profile",
      description: "Commands to manage internet analyzer profile",
      subcommands: [
        { name: "create", description: "Create internet analyzer profile" },
        { name: "delete", description: "Delete internet analyzer profile" },
        { name: "list", description: "List internet analyzer profiles" },
        { name: "show", description: "Show internet analyzer profile" },
        { name: "update", description: "Update internet analyzer profile" },
      ],
    },
    {
      name: "show-scorecard",
      description: "Show latency scorecard for a test",
    },
    { name: "show-timeseries", description: "Show timeseries for a test" },
    {
      name: "test",
      description: "Commands to manage tests",
      subcommands: [
        { name: "create", description: "Create test" },
        { name: "delete", description: "Delete test" },
        { name: "list", description: "List tests" },
        { name: "show", description: "Show test" },
        { name: "update", description: "Update test" },
      ],
    },
  ],
};

export default completionSpec;
