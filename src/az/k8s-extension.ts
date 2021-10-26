const completionSpec: Fig.Spec = {
  name: "k8s-extension",
  description: "Commands to manage Kubernetes Extensions",
  subcommands: [
    { name: "create", description: "Create a Kubernetes Extension" },
    { name: "delete", description: "Delete a Kubernetes Extension" },
    { name: "list", description: "List Kubernetes Extensions" },
    { name: "show", description: "Show a Kubernetes Extension" },
  ],
};

export default completionSpec;
