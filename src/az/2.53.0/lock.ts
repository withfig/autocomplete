const completion: Fig.Spec = {
  name: "lock",
  description: "Manage Azure locks",
  subcommands: [
    {
      name: "create",
      description: "Create a lock",
      options: [
        {
          name: ["--lock-type", "-t"],
          description: "The type of lock restriction",
          args: {
            name: "lock-type",
            suggestions: ["CanNotDelete", "ReadOnly"],
          },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the lock",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: "--notes",
          description: "Notes about this lock",
          args: { name: "notes" },
        },
        {
          name: "--parent",
          description: "The parent path (Ex: 'resA/myA/resB/myB')",
          args: { name: "parent" },
        },
        {
          name: ["--resource-name", "--resource"],
          description:
            "Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given",
          args: { name: "resource-name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a lock",
      options: [
        {
          name: "--ids",
          description:
            'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the lock",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: "--parent",
          description: "The parent path (Ex: 'resA/myA/resB/myB')",
          args: { name: "parent" },
        },
        {
          name: ["--resource-name", "--resource"],
          description:
            "Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given",
          args: { name: "resource-name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "list",
      description: "List lock information",
      options: [
        {
          name: "--filter-string",
          description: "A query filter to use to restrict the results",
          args: { name: "filter-string" },
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: "--parent",
          description: "The parent path (Ex: 'resA/myA/resB/myB')",
          args: { name: "parent" },
        },
        {
          name: ["--resource-name", "--resource"],
          description:
            "Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given",
          args: { name: "resource-name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "show",
      description: "Show the properties of a lock",
      options: [
        {
          name: "--ids",
          description:
            'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the lock",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: "--parent",
          description: "The parent path (Ex: 'resA/myA/resB/myB')",
          args: { name: "parent" },
        },
        {
          name: ["--resource-name", "--resource"],
          description:
            "Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given",
          args: { name: "resource-name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "update",
      description: "Update a lock",
      options: [
        {
          name: "--ids",
          description:
            'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
          args: { name: "ids" },
        },
        {
          name: ["--lock-type", "-t"],
          description: "The type of lock restriction",
          args: {
            name: "lock-type",
            suggestions: ["CanNotDelete", "ReadOnly"],
          },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the lock",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: "--notes",
          description: "Notes about this lock",
          args: { name: "notes" },
        },
        {
          name: "--parent",
          description: "The parent path (Ex: 'resA/myA/resB/myB')",
          args: { name: "parent" },
        },
        {
          name: ["--resource-name", "--resource"],
          description:
            "Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given",
          args: { name: "resource-name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
        },
      ],
    },
  ],
};

export default completion;
