const completionSpec: Fig.Spec = {
  name: "baremetalinstance",
  description: "(PREVIEW) Manage BareMetal Instances",
  subcommands: [
    { name: "delete", description: "Delete a BareMetal Instance" },
    { name: "list", description: "List BareMetal Instances" },
    { name: "restart", description: "Restart a BareMetal Instance" },
    { name: "show", description: "Get the details of a BareMetal Instance" },
    { name: "shutdown", description: "Shutdown a BareMetal Instance" },
    { name: "start", description: "Start a BareMetal Instance" },
    {
      name: "update",
      description: "Update the tags field of a BareMetal Instance",
    },
  ],
};

export default completionSpec;
