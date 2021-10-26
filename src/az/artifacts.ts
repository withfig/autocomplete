const completionSpec: Fig.Spec = {
  name: "artifacts",
  description: "Manage Azure Artifacts",
  subcommands: [
    {
      name: "universal",
      description: "Manage Universal Packages",
      subcommands: [
        { name: "download", description: "Download a package" },
        { name: "publish", description: "Publish a package to a feed" },
      ],
    },
  ],
};

export default completionSpec;
