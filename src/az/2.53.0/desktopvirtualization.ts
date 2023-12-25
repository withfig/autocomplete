const completion: Fig.Spec = {
  name: "desktopvirtualization",
  description: "Manage desktop virtualization",
  subcommands: [
    {
      name: "applicationgroup",
      description: "Desktopvirtualization applicationgroup",
      subcommands: [
        {
          name: "create",
          description: "Create an applicationGroup",
          options: [
            {
              name: "--application-group-type",
              description: "Resource Type of ApplicationGroup",
              args: {
                name: "application-group-type",
                suggestions: ["Desktop", "RemoteApp"],
              },
              isRequired: true,
            },
            {
              name: "--host-pool-arm-path",
              description: "HostPool arm path of ApplicationGroup",
              args: { name: "host-pool-arm-path" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the application group",
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
              name: "--description",
              description: "Description of ApplicationGroup",
              args: { name: "description" },
            },
            {
              name: "--friendly-name",
              description: "Friendly name of ApplicationGroup",
              args: { name: "friendly-name" },
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
          ],
        },
        {
          name: "delete",
          description: "Remove an applicationGroup",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the application group",
              args: { name: "name" },
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
          description: "List applicationGroups in subscription",
          options: [
            {
              name: "--filter",
              description:
                "OData filter expression. Valid properties for filtering are applicationGroupType",
              args: { name: "filter" },
            },
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
          description: "Get an application group",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the application group",
              args: { name: "name" },
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
          description: "Update an applicationGroup",
          options: [
            {
              name: "--description",
              description: "Description of ApplicationGroup",
              args: { name: "description" },
            },
            {
              name: "--friendly-name",
              description: "Friendly name of ApplicationGroup",
              args: { name: "friendly-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the application group",
              args: { name: "name" },
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
    {
      name: "hostpool",
      description: "Desktopvirtualization hostpool",
      subcommands: [
        {
          name: "create",
          description: "Create a host pool",
          options: [
            {
              name: "--host-pool-type",
              description: "HostPool type for desktop",
              args: {
                name: "host-pool-type",
                suggestions: ["BYODesktop", "Personal", "Pooled"],
              },
              isRequired: true,
            },
            {
              name: "--load-balancer-type",
              description: "The type of the load balancer",
              args: {
                name: "load-balancer-type",
                suggestions: ["BreadthFirst", "DepthFirst", "Persistent"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the host pool within the specified resource group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--preferred-app-group-type", "-t"],
              description:
                "The type of preferred application group type, default to Desktop Application Group",
              args: {
                name: "preferred-app-group-type",
                suggestions: ["Desktop", "None", "RailApplications"],
              },
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
              name: "--custom-rdp-property",
              description: "Custom rdp property of HostPool",
              args: { name: "custom-rdp-property" },
            },
            {
              name: "--description",
              description: "Description of HostPool",
              args: { name: "description" },
            },
            {
              name: "--friendly-name",
              description: "Friendly name of HostPool",
              args: { name: "friendly-name" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--max-session-limit",
              description: "The max session limit of HostPool",
              args: { name: "max-session-limit" },
            },
            {
              name: "--personal-desktop-assignment-type",
              description: "PersonalDesktopAssignment type for HostPool",
              args: {
                name: "personal-desktop-assignment-type",
                suggestions: ["Automatic", "Direct"],
              },
            },
            {
              name: "--registration-info",
              description: "The registration info of HostPool",
              args: { name: "registration-info" },
            },
            {
              name: "--ring",
              description: "The ring number of HostPool",
              args: { name: "ring" },
            },
            {
              name: "--sso-client-id",
              description:
                "ClientId for the registered Relying Party used to issue WVD SSO certificates",
              args: { name: "sso-client-id" },
            },
            {
              name: ["--sso-client-secret-key-vault-path", "-p"],
              description:
                "Path to Azure KeyVault storing the secret used for communication to ADFS",
              args: { name: "sso-client-secret-key-vault-path" },
            },
            {
              name: "--sso-secret-type",
              description: "The type of single sign on Secret Type",
              args: {
                name: "sso-secret-type",
                suggestions: [
                  "Certificate",
                  "CertificateInKeyVault",
                  "SharedKey",
                  "SharedKeyInKeyVault",
                ],
              },
            },
            {
              name: "--ssoadfs-authority",
              description:
                "URL to customer ADFS server for signing WVD SSO certificates",
              args: { name: "ssoadfs-authority" },
            },
            {
              name: "--start-vm-on-connect",
              description: "The flag to turn on/off StartVMOnConnect feature",
              args: {
                name: "start-vm-on-connect",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--validation-environment",
              description: "Is validation environment",
              args: {
                name: "validation-environment",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--vm-template",
              description:
                "VM template for sessionhosts configuration within hostpool",
              args: { name: "vm-template" },
            },
          ],
        },
        {
          name: "delete",
          description: "Remove a host pool",
          options: [
            {
              name: "--force",
              description: "Force flag to delete sessionHost",
              args: { name: "force", suggestions: ["false", "true"] },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the host pool within the specified resource group",
              args: { name: "name" },
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
          description: "List hostPools in subscription",
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
          name: "retrieve-registration-token",
          description: "Registration token of the host pool",
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
                "The name of the host pool within the specified resource group",
              args: { name: "name" },
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
          name: "show",
          description: "Get a host pool",
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
                "The name of the host pool within the specified resource group",
              args: { name: "name" },
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
          description: "Update a host pool",
          options: [
            {
              name: "--custom-rdp-property",
              description: "Custom rdp property of HostPool",
              args: { name: "custom-rdp-property" },
            },
            {
              name: "--description",
              description: "Description of HostPool",
              args: { name: "description" },
            },
            {
              name: "--friendly-name",
              description: "Friendly name of HostPool",
              args: { name: "friendly-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--load-balancer-type",
              description: "The type of the load balancer",
              args: {
                name: "load-balancer-type",
                suggestions: ["BreadthFirst", "DepthFirst", "Persistent"],
              },
            },
            {
              name: "--max-session-limit",
              description: "The max session limit of HostPool",
              args: { name: "max-session-limit" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the host pool within the specified resource group",
              args: { name: "name" },
            },
            {
              name: "--personal-desktop-assignment-type",
              description: "PersonalDesktopAssignment type for HostPool",
              args: {
                name: "personal-desktop-assignment-type",
                suggestions: ["Automatic", "Direct"],
              },
            },
            {
              name: ["--preferred-app-group-type", "-t"],
              description:
                "The type of preferred application group type, default to Desktop Application Group",
              args: {
                name: "preferred-app-group-type",
                suggestions: ["Desktop", "None", "RailApplications"],
              },
            },
            {
              name: "--registration-info",
              description: "The registration info of HostPool",
              args: { name: "registration-info" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--ring",
              description: "The ring number of HostPool",
              args: { name: "ring" },
            },
            {
              name: "--sso-client-id",
              description:
                "ClientId for the registered Relying Party used to issue WVD SSO certificates",
              args: { name: "sso-client-id" },
            },
            {
              name: ["--sso-client-secret-key-vault-path", "-p"],
              description:
                "Path to Azure KeyVault storing the secret used for communication to ADFS",
              args: { name: "sso-client-secret-key-vault-path" },
            },
            {
              name: "--sso-secret-type",
              description: "The type of single sign on Secret Type",
              args: {
                name: "sso-secret-type",
                suggestions: [
                  "Certificate",
                  "CertificateInKeyVault",
                  "SharedKey",
                  "SharedKeyInKeyVault",
                ],
              },
            },
            {
              name: "--ssoadfs-authority",
              description:
                "URL to customer ADFS server for signing WVD SSO certificates",
              args: { name: "ssoadfs-authority" },
            },
            {
              name: "--start-vm-on-connect",
              description: "The flag to turn on/off StartVMOnConnect feature",
              args: {
                name: "start-vm-on-connect",
                suggestions: ["false", "true"],
              },
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
            {
              name: "--validation-environment",
              description: "Is validation environment",
              args: {
                name: "validation-environment",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--vm-template",
              description:
                "VM template for sessionhosts configuration within hostpool",
              args: { name: "vm-template" },
            },
          ],
        },
      ],
    },
    {
      name: "workspace",
      description: "Desktopvirtualization workspace",
      subcommands: [
        {
          name: "create",
          description: "Create a workspace",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the workspace",
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
              name: "--application-group-references",
              description: "List of applicationGroup resource Ids",
              args: { name: "application-group-references" },
            },
            {
              name: "--description",
              description: "Description of Workspace",
              args: { name: "description" },
            },
            {
              name: "--friendly-name",
              description: "Friendly name of Workspace",
              args: { name: "friendly-name" },
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
          ],
        },
        {
          name: "delete",
          description: "Remove a workspace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the workspace",
              args: { name: "name" },
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
          description: "List workspaces in subscription",
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
          description: "Get a workspace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the workspace",
              args: { name: "name" },
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
          description: "Update a workspace",
          options: [
            {
              name: "--application-group-references",
              description: "List of applicationGroup links",
              args: { name: "application-group-references" },
            },
            {
              name: "--description",
              description: "Description of Workspace",
              args: { name: "description" },
            },
            {
              name: "--friendly-name",
              description: "Friendly name of Workspace",
              args: { name: "friendly-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the workspace",
              args: { name: "name" },
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
