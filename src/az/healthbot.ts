const completionSpec: Fig.Spec = {
  name: "healthbot",
  description: "Manage bot with healthbot",
  subcommands: [
    { name: "create", description: "Create a new HealthBot" },
    { name: "delete", description: "Delete a HealthBot" },
    {
      name: "list",
      description:
        "Returns all the resources of a particular type belonging to a resource group And Returns all the resources of a particular type belonging to a subscription",
    },
    { name: "show", description: "Get a HealthBot" },
    { name: "update", description: "Patch a HealthBot" },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the healthbot is met",
    },
  ],
};

export default completionSpec;
