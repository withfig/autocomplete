const completionSpec: Fig.Spec = {
  name: "cloud",
  description: "Manage registered Azure clouds",
  subcommands: [
    { name: "list", description: "List registered clouds" },
    {
      name: "list-profiles",
      description: "List the supported profiles for a cloud",
    },
    { name: "register", description: "Register a cloud" },
    { name: "set", description: "Set the active cloud" },
    { name: "show", description: "Get the details of a registered cloud" },
    { name: "unregister", description: "Unregister a cloud" },
    { name: "update", description: "Update the configuration of a cloud" },
  ],
};

export default completionSpec;
