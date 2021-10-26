const completionSpec: Fig.Spec = {
  name: "k8s-configuration",
  description: "Commands to manage Kubernetes configuration",
  subcommands: [
    { name: "create", description: "Create a Kubernetes configuration" },
    { name: "delete", description: "Delete a Kubernetes configuration" },
    { name: "list", description: "List Kubernetes configurations" },
    { name: "show", description: "Show details of a Kubernetes configuration" },
    { name: "update", description: "Update a Kubernetes configuration" },
  ],
};

export default completionSpec;
