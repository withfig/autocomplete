const completionSpec: Fig.Spec = {
  name: "openshift",
  description: "Manage Azure Red Hat OpenShift 3.11 clusters",
  subcommands: [
    {
      name: "create",
      description: "Create a new Azure Red Hat OpenShift 3.11 cluster",
    },
    {
      name: "delete",
      description: "Delete an Azure Red Hat OpenShift 3.11 cluster",
    },
    { name: "list", description: "List Azure Red Hat OpenShift 3.11 clusters" },
    {
      name: "monitor",
      description:
        "Commands to manage Log Analytics monitoring in an ARO 3.11 cluster",
      subcommands: [
        {
          name: "disable",
          description:
            "Disable Log Analytics monitoring in an ARO 3.11 cluster",
        },
        {
          name: "enable",
          description: "Enable Log Analytics monitoring in an ARO 3.11 cluster",
        },
      ],
    },
    {
      name: "scale",
      description:
        "Scale the compute pool in an Azure Red Hat OpenShift 3.11 cluster",
    },
    {
      name: "show",
      description:
        "Show the details for an Azure Red Hat OpenShift 3.11 cluster",
    },
    {
      name: "wait",
      description:
        "Wait for an Azure Red Hat OpenShift 3.11 cluster to reach a desired state",
    },
  ],
};

export default completionSpec;
