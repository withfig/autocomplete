const completionSpec: Fig.Spec = {
  name: "term",
  description: "Manage marketplace agreement with marketplaceordering",
  subcommands: [
    { name: "accept", description: "Accept marketplace terms" },
    { name: "show", description: "Get marketplace terms" },
  ],
};

export default completionSpec;
