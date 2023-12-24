const completion: Fig.Spec = {
  name: "cloud-service",
  description: "Manage cloud service (extended support)",
  subcommands: [
    {
      name: "create",
      description:
        "Create a cloud service (extended support). Please note some properties can be set only during cloud service creation",
      options: [
        {
          name: ["--cloud-service-name", "--name", "-n"],
          description: "Name of the cloud service",
          args: { name: "cloud-service-name" },
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
          name: "--configuration",
          description:
            "Specify the XML service configuration (.cscfg) for the cloud service. Expected value: xml-string/@xml-file",
          args: { name: "configuration" },
        },
        {
          name: "--configuration-url",
          description:
            "Specify a URL that refers to the location of the service configuration in the Blob service. The service package URL can be Shared Access Signature (SAS) URI from any storage account. This is a write-only property and is not returned in GET calls",
          args: { name: "configuration-url" },
        },
        {
          name: "--extensions",
          description:
            'List of extensions for the cloud service. Expected value: json-string/@json-file. Example: [{"properties": {"type": "RDP", "autoUpgradeMinorVersion": false, "protectedSettings": "settings","publisher": "Microsoft.Windows.Azure.Extensions", "settings": "settings", "typeHandlerVersion": "1.2.1"}, "name": "RDPExtension"}]',
          args: { name: "extensions" },
        },
        { name: "--id", description: "Resource Id", args: { name: "id" } },
        {
          name: ["--load-balancer-configurations", "--lb"],
          description:
            "The list of load balancer configurations separated by space for the cloud service. The public IP is a mandatory field. Format: LBName:FrontendIPConfiguration:PublicIPAddress:Subnet:PrivateIP",
          args: { name: "load-balancer-configurations" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--package-url",
          description:
            "Specify a URL that refers to the location of the service package in the Blob service. The service package URL can be Shared Access Signature (SAS) URI from any storage account. This is a write-only property and is not returned in GET calls",
          args: { name: "package-url" },
        },
        {
          name: "--roles",
          description:
            "List of roles separated by space for the cloud service. Format: RoleName:SkuName:SkuCapacity:SkuTier",
          args: { name: "roles" },
        },
        {
          name: "--secrets",
          description:
            "Specify certificates separated by space that should be installed onto the role instances. Format: KeyVaultName:CertificateUrl:CertificateUrl2:...:CertificateUrlN",
          args: { name: "secrets" },
        },
        {
          name: "--start-cloud-service",
          description:
            "Indicate whether to start the cloud service immediately after it is created. The default value is true. If false, the service model is still deployed, but the code is not run immediately. Instead, the service is PoweredOff until you call Start, at which time the service will be started. A deployed service still incurs charges, even if it is poweredoff",
          args: { name: "start-cloud-service", suggestions: ["false", "true"] },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--upgrade-mode",
          description:
            "Update mode for the cloud service. Role instances are allocated to update domains when the service is deployed. Updates can be initiated manually in each update domain or initiated automatically in all update domains. Possible Values are Auto, Manual, Simultaneous. If not specified, the default value is Auto. If set to Manual, PUT UpdateDomain must be called to apply the update. If set to Auto, the update is automatically applied to each update domain in sequence",
          args: {
            name: "upgrade-mode",
            suggestions: ["Auto", "Manual", "Simultaneous"],
          },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a cloud service",
      options: [
        {
          name: ["--cloud-service-name", "--name", "-n"],
          description: "Name of the cloud service",
          args: { name: "cloud-service-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "delete-instance",
      description: "Delete role instances in a cloud service",
      options: [
        {
          name: ["--cloud-service-name", "--name", "-n"],
          description: "Name of the cloud service",
          args: { name: "cloud-service-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--role-instances",
          description:
            "List of cloud service role instance names. Value of '*' will signify all role instances of the cloud service",
          args: { name: "role-instances" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "list",
      description: "Get a list of all cloud services under a resource group",
      options: [
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
      name: "list-all",
      description:
        "Get a list of all cloud services in the subscription, regardless of the associated resource group",
    },
    {
      name: "power-off",
      description:
        "Power off the cloud service. Note that resources are still attached and you are getting charged for the resources",
      options: [
        {
          name: ["--cloud-service-name", "--name", "-n"],
          description: "Name of the cloud service",
          args: { name: "cloud-service-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      name: "rebuild",
      description:
        "Rebuild Role Instances. Reinstall the operating system on instances of web roles or worker roles and initialize the storage resources that are used by them. If you do not want to initialize storage resources, you can use Reimage Role Instances",
      options: [
        {
          name: ["--cloud-service-name", "--name", "-n"],
          description: "Name of the cloud service",
          args: { name: "cloud-service-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--role-instances",
          description:
            "List of cloud service role instance names. Value of '*' will signify all role instances of the cloud service",
          args: { name: "role-instances" },
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
      name: "reimage",
      description:
        "Reimage asynchronous operation reinstalls the operating system on instances of web roles or worker roles",
      options: [
        {
          name: ["--cloud-service-name", "--name", "-n"],
          description: "Name of the cloud service",
          args: { name: "cloud-service-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--role-instances",
          description:
            "List of cloud service role instance names. Value of '*' will signify all role instances of the cloud service",
          args: { name: "role-instances" },
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
      name: "restart",
      description: "Restart one or more role instances in a cloud service",
      options: [
        {
          name: ["--cloud-service-name", "--name", "-n"],
          description: "Name of the cloud service",
          args: { name: "cloud-service-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--role-instances",
          description:
            "List of cloud service role instance names. Value of '*' will signify all role instances of the cloud service",
          args: { name: "role-instances" },
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
      description: "Display information about a cloud service",
      options: [
        {
          name: ["--cloud-service-name", "--name", "-n"],
          description: "Name of the cloud service",
          args: { name: "cloud-service-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
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
      name: "show-instance-view",
      description: "Get the status of a cloud service",
      options: [
        {
          name: ["--cloud-service-name", "--name", "-n"],
          description: "Name of the cloud service",
          args: { name: "cloud-service-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
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
      name: "start",
      description: "Start the cloud service",
      options: [
        {
          name: ["--cloud-service-name", "--name", "-n"],
          description: "Name of the cloud service",
          args: { name: "cloud-service-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      description: "Update a cloud service",
      options: [
        {
          name: ["--cloud-service-name", "--name", "-n"],
          description: "Name of the cloud service",
          args: { name: "cloud-service-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the cloud-service is met",
      options: [
        {
          name: ["--cloud-service-name", "--name", "-n"],
          description: "Name of the cloud service",
          args: { name: "cloud-service-name" },
        },
        {
          name: "--created",
          description:
            "Wait until created with 'provisioningState' at 'Succeeded'",
        },
        {
          name: "--custom",
          description:
            "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
          args: { name: "custom" },
        },
        { name: "--deleted", description: "Wait until deleted" },
        { name: "--exists", description: "Wait until the resource exists" },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
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
          name: "--timeout",
          description: "Maximum wait in seconds",
          args: { name: "timeout" },
        },
        {
          name: "--updated",
          description:
            "Wait until updated with provisioningState at 'Succeeded'",
        },
      ],
    },
    {
      name: "role",
      description: "Manage cloud service role with cloud service",
      subcommands: [
        {
          name: "list",
          description: "Get a list of all roles in a cloud service",
          options: [
            {
              name: "--cloud-service-name",
              description: "Cloud service name",
              args: { name: "cloud-service-name" },
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
          name: "show",
          description: "Get a role from a cloud service",
          options: [
            {
              name: "--cloud-service-name",
              description: "Cloud service name",
              args: { name: "cloud-service-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role-name",
              description: "Name of the role",
              args: { name: "role-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
      ],
    },
    {
      name: "role-instance",
      description: "Manage cloud service role instance with cloud service",
      subcommands: [
        {
          name: "delete",
          description: "Delete a role instance from a cloud service",
          options: [
            {
              name: "--cloud-service-name",
              description: "Cloud service name",
              args: { name: "cloud-service-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role-instance-name",
              description: "Name of the role instance",
              args: { name: "role-instance-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Get the list of all role instances in a cloud service",
          options: [
            {
              name: "--cloud-service-name",
              description: "Cloud service name",
              args: { name: "cloud-service-name" },
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
          name: "rebuild",
          description:
            "The Rebuild Role Instance asynchronous operation reinstalls the operating system on instances of web roles or worker roles and initializes the storage resources that are used by them. If you do not want to initialize storage resources, you can use Reimage Role Instance",
          options: [
            {
              name: "--cloud-service-name",
              description: "Cloud service name",
              args: { name: "cloud-service-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role-instance-name",
              description: "Name of the role instance",
              args: { name: "role-instance-name" },
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
          name: "reimage",
          description:
            "The Reimage Role Instance asynchronous operation reinstalls the operating system on instances of web roles or worker roles",
          options: [
            {
              name: "--cloud-service-name",
              description: "Cloud service name",
              args: { name: "cloud-service-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role-instance-name",
              description: "Name of the role instance",
              args: { name: "role-instance-name" },
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
          name: "restart",
          description:
            "The Reboot Role Instance asynchronous operation requests a reboot of a role instance in the cloud service",
          options: [
            {
              name: "--cloud-service-name",
              description: "Cloud service name",
              args: { name: "cloud-service-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role-instance-name",
              description: "Name of the role instance",
              args: { name: "role-instance-name" },
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
          description: "Get a role instance from a cloud service",
          options: [
            {
              name: "--cloud-service-name",
              description: "Cloud service name",
              args: { name: "cloud-service-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role-instance-name",
              description: "Name of the role instance",
              args: { name: "role-instance-name" },
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
          name: "show-instance-view",
          description:
            "Retrieve information about the run-time state of a role instance in a cloud service",
          options: [
            {
              name: "--cloud-service-name",
              description: "Cloud service name",
              args: { name: "cloud-service-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role-instance-name",
              description: "Name of the role instance",
              args: { name: "role-instance-name" },
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
          name: "show-remote-desktop-file",
          description:
            "Get a remote desktop file for a role instance in a cloud service",
          options: [
            {
              name: "--cloud-service-name",
              description: "Cloud service name",
              args: { name: "cloud-service-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role-instance-name",
              description: "Name of the role instance",
              args: { name: "role-instance-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
      ],
    },
    {
      name: "update-domain",
      description: "Manage cloud service update domain with cloud service",
      subcommands: [
        {
          name: "list-update-domain",
          description: "Get a list of all update domains in a cloud service",
          options: [
            {
              name: "--cloud-service-name",
              description: "Name of the cloud service",
              args: { name: "cloud-service-name" },
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
          name: "show-update-domain",
          description: "Get the specified update domain of a cloud service",
          options: [
            {
              name: "--cloud-service-name",
              description: "Name of the cloud service",
              args: { name: "cloud-service-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
              name: "--update-domain",
              description:
                "Specifies an integer value that identifies the update domain. Update domains are identified with a zero-based index: the first update domain has an ID of 0, the second has an ID of 1, and so on",
              args: { name: "update-domain" },
            },
          ],
        },
        {
          name: "walk-update-domain",
          description:
            "Update the role instances in the specified update domain",
          options: [
            {
              name: "--cloud-service-name",
              description: "Name of the cloud service",
              args: { name: "cloud-service-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
              name: "--update-domain",
              description:
                "Specifies an integer value that identifies the update domain. Update domains are identified with a zero-based index: the first update domain has an ID of 0, the second has an ID of 1, and so on",
              args: { name: "update-domain" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
