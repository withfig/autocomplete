const completionSpec: Fig.Spec = {
  name: "aro",
  description: "Manage Azure Red Hat OpenShift clusters",
  subcommands: [
    { name: "create", description: "Create a cluster" },
    { name: "delete", description: "Delete a cluster" },
    { name: "list", description: "List clusters" },
    { name: "list-credentials", description: "List credentials of a cluster" },
    { name: "show", description: "Get the details of a cluster" },
    { name: "update", description: "Update a cluster" },
    {
      name: "wait",
      description: "Wait for a cluster to reach a desired state",
    },
  ],
};

export default completionSpec;
