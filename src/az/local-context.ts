const completionSpec: Fig.Spec = {
  name: "local-context",
  description: "Manage Local Context",
  subcommands: [
    { name: "delete", description: "Delete local context data" },
    { name: "off", description: "Turn off local context" },
    { name: "on", description: "Turn on local context" },
    { name: "show", description: "Show local context data" },
  ],
};

export default completionSpec;
