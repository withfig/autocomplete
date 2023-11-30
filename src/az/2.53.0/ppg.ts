const completion: Fig.Spec = {
  name: "ppg",
  description: "Manage Proximity Placement Groups",
  subcommands: [
    {
      name: "create",
      description: "Create a proximity placement group",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the proximity placement group",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--intent-vm-sizes",
          description:
            "Specify possible sizes of virtual machines that can be created in the proximity placement group",
          args: { name: "intent-vm-sizes" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: ["--type", "-t"],
          description: "The type of the proximity placement group",
          args: { name: "type", suggestions: ["Standard", "Ultra"] },
        },
        {
          name: ["--zone", "-z"],
          description: "Availability zone into which to provision the resource",
          args: { name: "zone", suggestions: ["1", "2", "3"] },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a proximity placement group",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--proximity-placement-group-name", "--name", "-n"],
          description: "The name of the proximity placement group",
          args: { name: "proximity-placement-group-name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "list",
      description: "List proximity placement groups",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "show",
      description: "Get a proximity placement group",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--include-colocation-status",
          description:
            "Enable fetching the colocation status of all the resources in the proximity placement group",
          args: {
            name: "include-colocation-status",
            suggestions: ["False", "True"],
          },
        },
        {
          name: ["--proximity-placement-group-name", "--name", "-n"],
          description: "The name of the proximity placement group",
          args: { name: "proximity-placement-group-name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "update",
      description: "Update a proximity placement group",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the proximity placement group",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--include-colocation-status",
          description:
            "IncludeColocationStatus=true enables fetching the colocation status of all the resources in the proximity placement group. Default value is None",
          args: { name: "include-colocation-status" },
        },
        {
          name: "--intent-vm-sizes",
          description:
            "Specify possible sizes of virtual machines that can be created in the proximity placement group",
          args: { name: "intent-vm-sizes" },
        },
        {
          name: "--remove",
          description:
            "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
          args: { name: "remove" },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
          args: { name: "set" },
        },
        {
          name: ["--type", "-t"],
          description: "The type of the proximity placement group",
          args: { name: "type", suggestions: ["Standard", "Ultra"] },
        },
      ],
    },
  ],
};

export default completion;
