const completionSpec: Fig.Spec = {
  name: "logicapp",
  description: "Manage logic apps",
  subcommands: [
    { name: "create", description: "Create a logic app" },
    { name: "delete", description: "Delete a logic app" },
    { name: "list", description: "List logic apps" },
    { name: "restart", description: "Restart a logic app" },
    { name: "show", description: "Get the details of a logic app" },
    { name: "start", description: "Start a logic app" },
    { name: "stop", description: "Stop a logic app" },
  ],
};

export default completionSpec;
