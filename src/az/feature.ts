const completionSpec: Fig.Spec = {
  name: "feature",
  description: "Manage resource provider features",
  subcommands: [
    { name: "list", description: "List preview features" },
    { name: "register", description: "Register a preview feature" },
    {
      name: "registration",
      description: "Manage resource provider feature registrations",
      subcommands: [
        { name: "create", description: "Create a feature registration" },
        { name: "delete", description: "Delete a feature registration" },
        { name: "list", description: "List feature registrations" },
        { name: "show", description: "Returns a feature registration" },
      ],
    },
    {
      name: "show",
      description: "Gets the preview feature with the specified name",
    },
    { name: "unregister", description: "Unregister a preview feature" },
  ],
};

export default completionSpec;
