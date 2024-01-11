const completion: Fig.Spec = {
  name: "managedapp",
  description:
    "Manage template solutions provided and maintained by Independent Software Vendors (ISVs)",
  subcommands: [
    {
      name: "create",
      description: "Create a managed application",
      options: [
        {
          name: "--kind",
          description:
            "The managed application kind. can be marketplace or servicecatalog",
          args: { name: "kind" },
          isRequired: true,
        },
        {
          name: ["--managed-rg-id", "-m"],
          description: "The resource group managed by the managed application",
          args: { name: "managed-rg-id" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "The managed application name",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description: "The resource group of the managed application",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: ["--location", "-l"],
          description: "The managed application location",
          args: { name: "location" },
        },
        {
          name: ["--managedapp-definition-id", "-d"],
          description: "The full qualified managed application definition id",
          args: { name: "managedapp-definition-id" },
        },
        {
          name: "--parameters",
          description:
            "JSON formatted string or a path to a file with such content",
          args: { name: "parameters" },
        },
        {
          name: "--plan-name",
          description: "The managed application package plan name",
          args: { name: "plan-name" },
        },
        {
          name: "--plan-product",
          description: "The managed application package plan product",
          args: { name: "plan-product" },
        },
        {
          name: "--plan-publisher",
          description: "The managed application package plan publisher",
          args: { name: "plan-publisher" },
        },
        {
          name: "--plan-version",
          description: "The managed application package plan version",
          args: { name: "plan-version" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a managed application",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the managed application. Required",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description: "The resource group of the managed application",
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
      description: "List managed applications",
      options: [
        {
          name: ["--resource-group", "-g"],
          description: "The resource group of the managed application",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "show",
      description: "Gets a managed application",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The managed application name",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description: "The resource group of the managed application",
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
      name: "definition",
      description: "Manage Azure Managed Applications",
      subcommands: [
        {
          name: "create",
          description: "Create a managed application definition",
          options: [
            {
              name: ["--authorizations", "-a"],
              description:
                "Space-separated authorization pairs in a format of <principalId>:<roleDefinitionId>",
              args: { name: "authorizations" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The managed application definition description",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The managed application definition display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--lock-level",
              description: "The type of lock restriction",
              args: {
                name: "lock-level",
                suggestions: ["CanNotDelete", "None", "ReadOnly"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The managed application definition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group of the managed application definition",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--create-ui-definition", "-c"],
              description:
                "JSON formatted string or a path to a file with such content",
              args: { name: "create-ui-definition" },
            },
            {
              name: "--deployment-mode",
              description: "The managed application deployment mode",
              args: {
                name: "deployment-mode",
                suggestions: ["Complete", "Incremental"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--main-template", "-t"],
              description:
                "JSON formatted string or a path to a file with such content",
              args: { name: "main-template" },
            },
            {
              name: "--package-file-uri",
              description:
                "The managed application definition package file uri",
              args: { name: "package-file-uri" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a managed application definition",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the managed application definition to delete. Required",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group of the managed application definition",
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
          description: "List managed application definitions",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group of the managed application definition",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Gets a managed application definition",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The managed application definition name",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group of the managed application definition",
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
          description: "Update a managed application definition",
          options: [
            {
              name: ["--authorizations", "-a"],
              description:
                "Space-separated authorization pairs in a format of <principalId>:<roleDefinitionId>",
              args: { name: "authorizations" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The managed application definition description",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The managed application definition display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--lock-level",
              description: "The type of lock restriction",
              args: {
                name: "lock-level",
                suggestions: ["CanNotDelete", "None", "ReadOnly"],
              },
              isRequired: true,
            },
            {
              name: ["--create-ui-definition", "-c"],
              description:
                "JSON formatted string or a path to a file with such content",
              args: { name: "create-ui-definition" },
            },
            {
              name: "--deployment-mode",
              description: "The managed application deployment mode",
              args: {
                name: "deployment-mode",
                suggestions: ["Complete", "Incremental"],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--main-template", "-t"],
              description:
                "JSON formatted string or a path to a file with such content",
              args: { name: "main-template" },
            },
            {
              name: ["--name", "-n"],
              description: "The managed application definition name",
              args: { name: "name" },
            },
            {
              name: "--package-file-uri",
              description:
                "The managed application definition package file uri",
              args: { name: "package-file-uri" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group of the managed application definition",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
