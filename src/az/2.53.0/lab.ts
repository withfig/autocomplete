const completion: Fig.Spec = {
  name: "lab",
  description: "Manage Azure DevTest Labs",
  subcommands: [
    {
      name: "arm-template",
      description:
        "Manage Azure Resource Manager (ARM) templates in an Azure DevTest Lab",
      subcommands: [
        {
          name: "list",
          description:
            "List azure resource manager templates in a given artifact source",
          options: [
            {
              name: "--artifact-source-name",
              description: "The name of the artifact source",
              args: { name: "artifact-source-name" },
              isRequired: true,
            },
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=displayName)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of an ARM template in a lab",
          options: [
            {
              name: "--artifact-source-name",
              description: "Name of the artifact source",
              args: { name: "artifact-source-name" },
              isRequired: true,
            },
            {
              name: "--lab-name",
              description: "Name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Resource Manager template",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of lab's resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--export-parameters",
              description: "Whether or not to export parameters template",
            },
          ],
        },
      ],
    },
    {
      name: "artifact",
      description: "Manage DevTest Labs artifacts",
      subcommands: [
        {
          name: "list",
          description: "List artifacts in a given artifact source",
          options: [
            {
              name: "--artifact-source-name",
              description: "The name of the artifact source",
              args: { name: "artifact-source-name" },
              isRequired: true,
            },
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=title)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
      ],
    },
    {
      name: "artifact-source",
      description: "Manage DevTest Lab artifact sources",
      subcommands: [
        {
          name: "list",
          description: "List artifact sources in a given lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=displayName)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get artifact source",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the artifact source",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=displayName)'",
              args: { name: "expand" },
            },
          ],
        },
      ],
    },
    {
      name: "custom-image",
      description: "Manage custom images of a DevTest Lab",
      subcommands: [
        {
          name: "create",
          description: "Create a custom image in a DevTest Lab",
          options: [
            {
              name: "--lab-name",
              description: "Name of the Lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the image",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--os-state",
              description: "The current state of the virtual machine",
              args: { name: "os-state" },
              isRequired: true,
            },
            {
              name: "--os-type",
              description:
                "Type of the OS on which the custom image is based. Allowed values are: Windows, Linux",
              args: { name: "os-type" },
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
              name: "--source-vm-id",
              description:
                "The resource ID of a virtual machine in the provided lab",
              args: { name: "source-vm-id" },
              isRequired: true,
            },
            {
              name: "--author",
              description: "The author of the custom image",
              args: { name: "author" },
            },
            {
              name: "--description",
              description: "A detailed description for the custom image",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete custom image",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the custom image",
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
          ],
        },
        {
          name: "list",
          description: "List custom images in a given lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=vm)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get custom image",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the custom image",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=vm)'",
              args: { name: "expand" },
            },
          ],
        },
      ],
    },
    {
      name: "delete",
      description: "Delete lab",
      options: [
        {
          name: "--name",
          description: "The name of the lab",
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
      ],
    },
    {
      name: "get",
      description: "Get lab",
      options: [
        {
          name: "--name",
          description: "The name of the lab",
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
          name: "--expand",
          description:
            "Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'",
          args: { name: "expand" },
        },
      ],
    },
    {
      name: "environment",
      description: "Manage environments for an Azure DevTest Lab",
      subcommands: [
        {
          name: "create",
          description: "Create an environment in a lab",
          options: [
            {
              name: "--arm-template",
              description: "Name or ID of the ARM template in the lab",
              args: { name: "arm-template" },
              isRequired: true,
            },
            {
              name: "--lab-name",
              description: "Name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the environment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the lab's resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--artifact-source-name",
              description:
                "Name of the artifact source in the lab. value from: az lab artifact-source list",
              args: { name: "artifact-source-name" },
            },
            {
              name: "--parameters",
              description:
                "JSON encoded list of parameters. Use '@{file}' to load from a file",
              args: { name: "parameters" },
            },
            {
              name: "--tags",
              description: "The tags for the resource",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an environment from a lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the environment",
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
          ],
        },
        {
          name: "list",
          description: "List environments in a lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=deploymentProperties)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details for an environment of a lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the environment",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=deploymentProperties)'",
              args: { name: "expand" },
            },
          ],
        },
      ],
    },
    {
      name: "formula",
      description: "Manage formulas for an Azure DevTest Lab",
      subcommands: [
        {
          name: "delete",
          description: "Delete formula",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the formula",
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
          ],
        },
        {
          name: "export-artifacts",
          description: "Export artifacts from a formula",
          options: [
            {
              name: "--lab-name",
              description: "Name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the formula",
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
          ],
        },
        {
          name: "list",
          description: "List formulas in a given lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=description)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Show formulae from an Azure DevTest Lab",
          options: [
            {
              name: "--lab-name",
              description: "Name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the formula",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=description)'",
              args: { name: "expand" },
            },
          ],
        },
      ],
    },
    {
      name: "gallery-image",
      description: "List Azure Marketplace images allowed for a DevTest Lab",
      subcommands: [
        {
          name: "list",
          description: "List gallery images in a given lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=author)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
      ],
    },
    {
      name: "secret",
      description: "Manage secrets of an Azure DevTest Lab",
      subcommands: [
        {
          name: "delete",
          description: "Delete secret",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the secret",
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
          ],
        },
        {
          name: "list",
          description: "List secrets in a given user profile",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=value)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "set",
          description: "Set a secret for a lab",
          options: [
            {
              name: "--lab-name",
              description: "Name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the secret",
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
              name: "--value",
              description: "Value of the secret",
              args: { name: "value" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get secret",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the secret",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($select=value)'",
              args: { name: "expand" },
            },
          ],
        },
      ],
    },
    {
      name: "vm",
      description: "Manage VMs in an Azure DevTest Lab",
      subcommands: [
        {
          name: "apply-artifacts",
          description:
            "Apply artifacts to a virtual machine in Azure DevTest Lab",
          options: [
            {
              name: "--lab-name",
              description: "Name of the Lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the virtual machine",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of lab's resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--artifacts",
              description:
                "JSON encoded array of artifacts to be applied. Use '@{file}' to load from a file",
              args: { name: "artifacts" },
            },
          ],
        },
        {
          name: "claim",
          description: "Claim a virtual machine from the Lab",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--lab-name",
              description: "Name of the lab",
              args: { name: "lab-name" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the virtual machine to claim",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of lab's resource group",
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
          name: "create",
          description: "Create a VM in a lab",
          options: [
            {
              name: "--lab-name",
              description: "Name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the virtual machine",
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
              name: "--admin-password",
              description: "Password for the VM admin",
              args: { name: "admin-password" },
            },
            {
              name: "--admin-username",
              description: "Username for the VM admin",
              args: { name: "admin-username" },
            },
            {
              name: "--allow-claim",
              description:
                "Flag indicating if the VM should be created as claimable",
            },
            {
              name: "--artifacts",
              description:
                "JSON encoded array of artifacts to be applied. Use '@{file}' to load from a file",
              args: { name: "artifacts" },
            },
            {
              name: "--authentication-type",
              description:
                "Type of authentication allowed for the VM. Allowed values are: password, ssh",
              args: { name: "authentication-type" },
            },
            {
              name: "--disk-type",
              description:
                "Storage type to use for virtual machine. Allowed values are: Premium, Standard, StandardSSD",
              args: { name: "disk-type" },
            },
            {
              name: "--expiration-date",
              description:
                "The expiration date in UTC(yyyy-MM-ddTHH:mm:ss) for the VM",
              args: { name: "expiration-date" },
            },
            {
              name: "--formula",
              description:
                "Name of the formula. Use az lab formula list for available formulas",
              args: { name: "formula" },
            },
            {
              name: "--generate-ssh-keys",
              description:
                "Generate SSH public and private key files if missing",
              args: { name: "generate-ssh-keys" },
            },
            {
              name: "--image",
              description:
                "The name of the operating system image (gallery image name or custom image name/ID)",
              args: { name: "image" },
            },
            {
              name: "--image-type",
              description:
                "Type of the image. Allowed values are: gallery, custom",
              args: { name: "image-type" },
            },
            {
              name: "--ip-configuration",
              description:
                "Type of IP configuration to use for the VM. Allowed values are: shared, public, private",
              args: { name: "ip-configuration" },
            },
            {
              name: "--notes",
              description: "Notes for the virtual machine",
              args: { name: "notes" },
            },
            {
              name: "--saved-secret",
              description:
                "Name of the saved secret to be used for authentication",
              args: { name: "saved-secret" },
            },
            {
              name: "--size",
              description:
                "The size of the VM to be created. See https://azure.microsoft.com/pricing/details/virtual-machines/ for size info",
              args: { name: "size" },
            },
            {
              name: "--ssh-key",
              description:
                "The SSH public key or public key file path. Use --generate-ssh-keys to generate SSH keys",
              args: { name: "ssh-key" },
            },
            {
              name: "--subnet",
              description: "Name of the subnet to add the VM to",
              args: { name: "subnet" },
            },
            {
              name: "--tags",
              description: "Space-separated tags in key[=value] format",
              args: { name: "tags" },
            },
            {
              name: "--vnet-name",
              description: "Name of the virtual network to add the VM to",
              args: { name: "vnet-name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete virtual machine",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the virtual machine",
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
          ],
        },
        {
          name: "list",
          description: "List the VMs in an Azure DevTest Lab",
          options: [
            {
              name: "--lab-name",
              description: "Name of the lab",
              args: { name: "lab-name" },
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
              name: "--all",
              description:
                "List all virtual machines in the lab. Cannot be used with --filters",
              args: { name: "all" },
            },
            {
              name: "--claimable",
              description:
                "List only claimable virtual machines in the lab. Cannot be used with --filters",
              args: { name: "claimable" },
            },
            {
              name: "--environment",
              description:
                "Name or ID of the environment to list virtual machines in. Cannot be used with --filters",
              args: { name: "environment" },
            },
            {
              name: "--expand",
              description: "The expand query",
              args: { name: "expand" },
            },
            {
              name: "--filters",
              description: "The filter to apply",
              args: { name: "filters" },
            },
            {
              name: "--object-id",
              description: "Object ID of the owner to list VMs for",
              args: { name: "object-id" },
            },
            {
              name: "--order-by",
              description:
                "The ordering expression for the results using OData notation",
              args: { name: "order-by" },
            },
            {
              name: "--top",
              description: "The maximum number of resources to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get virtual machine",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the virtual machine",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "start",
          description: "Start a virtual machine",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the virtual machine",
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
          ],
        },
        {
          name: "stop",
          description:
            "Stop a virtual machine This operation can take a while to complete",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the virtual machine",
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
          ],
        },
      ],
    },
    {
      name: "vnet",
      description: "Manage virtual networks of an Azure DevTest Lab",
      subcommands: [
        {
          name: "get",
          description: "Get virtual network",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the virtual network",
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($expand=externalSubnets)'",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "list",
          description: "List virtual networks in a given lab",
          options: [
            {
              name: "--lab-name",
              description: "The name of the lab",
              args: { name: "lab-name" },
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
              name: "--expand",
              description:
                "Specify the $expand query. Example: 'properties($expand=externalSubnets)'",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "The filter to apply to the operation. Example: '$filter=contains(name,'myName')",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "The ordering expression for the results, using OData notation. Example: '$orderby=name desc'",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "The maximum number of resources to return from the operation. Example: '$top=10'",
              args: { name: "top" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
