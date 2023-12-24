const completion: Fig.Spec = {
  name: "appservice",
  description: "Manage App Service plans",
  subcommands: [
    {
      name: "ase",
      description: "Manage App Service Environments",
      subcommands: [
        {
          name: "create",
          description: "Create app service environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
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
              name: "--subnet",
              description:
                "Name or ID of existing subnet. To create vnet and/or subnet use az network vnet [subnet] create",
              args: { name: "subnet" },
              isRequired: true,
            },
            {
              name: "--force-network-security-group",
              description:
                "Override network security group for subnet. Applies to ASEv2 only",
            },
            {
              name: "--force-route-table",
              description:
                "Override route table for subnet. Applies to ASEv2 only",
            },
            {
              name: "--front-end-scale-factor",
              description:
                "Scale of front ends to app service plan instance ratio. Applies to ASEv2 only",
              args: { name: "front-end-scale-factor" },
            },
            {
              name: "--front-end-sku",
              description: "Size of front end servers. Applies to ASEv2 only",
              args: { name: "front-end-sku", suggestions: ["I1", "I2", "I3"] },
            },
            {
              name: "--ignore-network-security-group",
              description:
                "Configure network security group manually. Applies to ASEv2 only",
            },
            {
              name: "--ignore-route-table",
              description:
                "Configure route table manually. Applies to ASEv2 only",
            },
            {
              name: "--ignore-subnet-size-validation",
              description:
                "Do not check if subnet is sized according to recommendations",
            },
            {
              name: ["--kind", "-k"],
              description: "Specify App Service Environment version",
              args: { name: "kind", suggestions: ["ASEv2", "ASEv3"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--os-preference",
              description:
                "Determine if app service environment should start with Linux workers. Applies to ASEv2 only",
              args: {
                name: "os-preference",
                suggestions: ["Linux", "Windows"],
              },
            },
            {
              name: "--virtual-ip-type",
              description:
                "Specify if app service environment should be accessible from internet",
              args: {
                name: "virtual-ip-type",
                suggestions: ["External", "Internal"],
              },
            },
            {
              name: "--vnet-name",
              description:
                "Name of the vNet. Mandatory if only subnet name is specified",
              args: { name: "vnet-name" },
            },
            {
              name: "--zone-redundant",
              description:
                "Configure App Service Environment as Zone Redundant. Applies to ASEv3 only",
              args: { name: "zone-redundant", suggestions: ["false", "true"] },
            },
          ],
        },
        {
          name: "create-inbound-services",
          description:
            "Private DNS Zone for Internal (ILB) App Service Environments",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
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
              name: "--subnet",
              description:
                "Name or ID of existing subnet for DNS Zone link. To create vnet and/or subnet use az network vnet [subnet] create",
              args: { name: "subnet" },
              isRequired: true,
            },
            {
              name: "--skip-dns",
              description:
                "Argument 'skip_dns' has been deprecated and will be removed in version '3.0.0'. Do not create Private DNS Zone and DNS records",
            },
            {
              name: "--vnet-name",
              description:
                "Name of the vNet. Mandatory if only subnet name is specified",
              args: { name: "vnet-name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete app service environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
              args: { name: "name" },
              isRequired: true,
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List app service environments",
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
          name: "list-addresses",
          description:
            "List VIPs associated with an app service environment v2",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
              args: { name: "name" },
              isRequired: true,
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
          name: "list-plans",
          description:
            "List app service plans associated with an app service environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
              args: { name: "name" },
              isRequired: true,
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
          name: "send-test-notification",
          description:
            "Send a test upgrade notification in app service environment v3",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
              args: { name: "name" },
              isRequired: true,
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
          description: "Show details of an app service environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
              args: { name: "name" },
              isRequired: true,
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
          name: "update",
          description: "Update app service environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--allow-incoming-ftp-connections", "-f"],
              description:
                "(ASEv3 only) Configure App Service Environment to allow FTP access. This ftpEnabled setting allows you to allow or deny FTP connections on the App Service Environment level. Individual apps will still need to configure FTP access",
              args: {
                name: "allow-incoming-ftp-connections",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--allow-new-private-endpoint-connections", "-p"],
              description:
                "(ASEv3 only) Configure Apps in App Service Environment to allow new private endpoint connections",
              args: {
                name: "allow-new-private-endpoint-connections",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--allow-remote-debugging", "-r"],
              description:
                "(ASEv3 only) Configure App Service Environment to allow remote debugging. You will still have to configure remote debugging at the individual app level",
              args: {
                name: "allow-remote-debugging",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--front-end-scale-factor",
              description:
                "(ASEv2 only) Scale of front ends to app service plan instance ratio between 5 and 15",
              args: { name: "front-end-scale-factor" },
            },
            {
              name: "--front-end-sku",
              description: "(ASEv2 only) Size of front end servers",
              args: { name: "front-end-sku", suggestions: ["I1", "I2", "I3"] },
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
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade app service environment v3",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app service environment",
              args: { name: "name" },
              isRequired: true,
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
      ],
    },
    {
      name: "domain",
      description: "Manage custom domains",
      subcommands: [
        {
          name: "create",
          description: "Create and purchase a custom domain",
          options: [
            {
              name: ["--contact-info", "-c"],
              description:
                "The file path to a JSON object with your contact info for domain registration. Please see the following link for the format of the JSON file expected: https://github.com/AzureAppServiceCLI/appservice_domains_templates/blob/master/contact_info.json",
              args: { name: "contact-info" },
              isRequired: true,
            },
            {
              name: ["--hostname", "-n"],
              description: "Name of the custom domain",
              args: { name: "hostname" },
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
              name: "--accept-terms",
              description:
                "By using this flag, you are accepting the conditions shown using the --show-hostname-purchase-terms flag",
            },
            {
              name: ["--auto-renew", "-a"],
              description: "Enable auto-renew on the domain",
              args: { name: "auto-renew" },
            },
            {
              name: "--dryrun",
              description:
                "Show summary of the purchase and create operation instead of executing it",
            },
            {
              name: ["--privacy", "-p"],
              description: "Enable privacy protection",
              args: { name: "privacy" },
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
          name: "show-terms",
          description:
            "Show the legal terms for purchasing and creating a custom domain",
          options: [
            {
              name: ["--hostname", "-n"],
              description: "Name of the custom domain",
              args: { name: "hostname" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "hybrid-connection",
      description: "A method that sets the key a hybrid-connection uses",
      subcommands: [
        {
          name: "set-key",
          description:
            "Set the key that all apps in an appservice plan use to connect to the hybrid-connections in that appservice plan",
          options: [
            {
              name: "--hybrid-connection",
              description: "Hybrid connection name",
              args: { name: "hybrid-connection" },
              isRequired: true,
            },
            {
              name: "--key-type",
              description: "Which key (primary or secondary) should be used",
              args: { name: "key-type" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Hybrid connection namespace",
              args: { name: "namespace" },
              isRequired: true,
            },
            {
              name: "--plan",
              description: "AppService plan",
              args: { name: "plan" },
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
      name: "kube",
      description: "Manage Kubernetes Environments",
      subcommands: [
        {
          name: "create",
          description: "Create a Kubernetes Environment",
          options: [
            {
              name: ["--custom-location", "-c"],
              description: "ID of the custom location",
              args: { name: "custom-location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the kubernetes environment",
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
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the create to complete, and return immediately after queuing the create",
            },
            {
              name: "--static-ip",
              description:
                "Static IP Address. This is required if an AKS resource ID is specified",
              args: { name: "static-ip" },
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
          description: "Delete kubernetes environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Kubernetes Environment",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description:
            "List kubernetes environments by subscription or resource group",
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
          description: "Show the details of a kubernetes environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Kubernetes Environment",
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
          name: "update",
          description:
            "Update a Kubernetes Environment. Currently not supported",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the kubernetes environment",
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
              name: ["--custom-location", "-c"],
              description: "ID of the custom location",
              args: { name: "custom-location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--static-ip",
              description: "New Static IP Address",
              args: { name: "static-ip" },
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
            "Wait for a Kubernetes Environment to reach a desired state",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Kubernetes Environment",
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
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
      ],
    },
    {
      name: "list-locations",
      description: "List regions where a plan sku is available",
      options: [
        {
          name: "--sku",
          description:
            "The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P2V2(Premium V2 Medium), P3V2(Premium V2 Large), P0V3(Premium V3 Extra Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), P1MV3(Premium Memory Optimized V3 Small), P2MV3(Premium Memory Optimized V3 Medium), P3MV3(Premium Memory Optimized V3 Large), P4MV3(Premium Memory Optimized V3 Extra Large), P5MV3(Premium Memory Optimized V3 Extra Extra Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large), I1v2 (Isolated V2 Small), I2v2 (Isolated V2 Medium), I3v2 (Isolated V2 Large), I4v2 (Isolated V2 I4v2), I5v2 (Isolated V2 I5v2), I6v2 (Isolated V2 I6v2), WS1 (Logic Apps Workflow Standard 1), WS2 (Logic Apps Workflow Standard 2), WS3 (Logic Apps Workflow Standard 3)",
          args: {
            name: "sku",
            suggestions: [
              "B1",
              "B2",
              "B3",
              "D1",
              "F1",
              "FREE",
              "I1",
              "I1v2",
              "I2",
              "I2v2",
              "I3",
              "I3v2",
              "I4v2",
              "I5v2",
              "I6v2",
              "P0V3",
              "P1MV3",
              "P1V2",
              "P1V3",
              "P2MV3",
              "P2V2",
              "P2V3",
              "P3MV3",
              "P3V2",
              "P3V3",
              "P4MV3",
              "P5MV3",
              "S1",
              "S2",
              "S3",
              "SHARED",
              "WS1",
              "WS2",
              "WS3",
            ],
          },
          isRequired: true,
        },
        {
          name: "--linux-workers-enabled",
          description:
            "Get regions which support hosting web apps on Linux workers",
          args: { name: "linux-workers-enabled" },
        },
      ],
    },
    {
      name: "plan",
      description: "Manage app service plans",
      subcommands: [
        {
          name: "create",
          description: "Create an app service plan",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the new app service plan",
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
              name: ["--app-service-environment", "-e"],
              description:
                "Name or ID of the app service environment. If you want to create the app service plan in different subscription than the app service environment, please use the resource ID for --app-service-environment parameter",
              args: { name: "app-service-environment" },
            },
            {
              name: "--hyper-v",
              description: "Host web app on Windows container",
              args: { name: "hyper-v" },
            },
            {
              name: "--is-linux",
              description: "Host web app on Linux worker",
              args: { name: "is-linux" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--number-of-workers",
              description: "Number of workers to be allocated",
              args: { name: "number-of-workers" },
            },
            {
              name: "--per-site-scaling",
              description:
                "Enable per-app scaling at the App Service plan level to allow for scaling an app independently from the App Service plan that hosts it",
            },
            {
              name: "--sku",
              description:
                "The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P2V2(Premium V2 Medium), P3V2(Premium V2 Large), P0V3(Premium V3 Extra Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), P1MV3(Premium Memory Optimized V3 Small), P2MV3(Premium Memory Optimized V3 Medium), P3MV3(Premium Memory Optimized V3 Large), P4MV3(Premium Memory Optimized V3 Extra Large), P5MV3(Premium Memory Optimized V3 Extra Extra Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large), I1v2 (Isolated V2 Small), I2v2 (Isolated V2 Medium), I3v2 (Isolated V2 Large), I4v2 (Isolated V2 I4v2), I5v2 (Isolated V2 I5v2), I6v2 (Isolated V2 I6v2), WS1 (Logic Apps Workflow Standard 1), WS2 (Logic Apps Workflow Standard 2), WS3 (Logic Apps Workflow Standard 3)",
              args: {
                name: "sku",
                suggestions: [
                  "B1",
                  "B2",
                  "B3",
                  "D1",
                  "F1",
                  "FREE",
                  "I1",
                  "I1v2",
                  "I2",
                  "I2v2",
                  "I3",
                  "I3v2",
                  "I4v2",
                  "I5v2",
                  "I6v2",
                  "P0V3",
                  "P1MV3",
                  "P1V2",
                  "P1V3",
                  "P2MV3",
                  "P2V2",
                  "P2V3",
                  "P3MV3",
                  "P3V2",
                  "P3V3",
                  "P4MV3",
                  "P5MV3",
                  "S1",
                  "S2",
                  "S3",
                  "SHARED",
                  "WS1",
                  "WS2",
                  "WS3",
                ],
              },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Enable zone redundancy for high availability. Cannot be changed after plan creation. Minimum instance count is 3",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an app service plan",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the app service plan",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List app service plans",
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
          description:
            "Get the app service plans for a resource group or a set of resource groups",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the app service plan",
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
          description: "Update an app service plan",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--elastic-scale",
              description:
                'Enable or disable automatic scaling. Set to "true" to enable elastic scale for this plan, or "false" to disable elastic scale for this plan. The SKU must be a Premium V2 SKU (P1V2, P2V2, P3V2) or a Premium V3 SKU (P1V3, P2V3, P3V3)',
              args: { name: "elastic-scale", suggestions: ["false", "true"] },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--max-elastic-worker-count", "-m"],
              description:
                "Maximum number of instances that the plan can scale out to. The plan must be an elastic scale plan",
              args: { name: "max-elastic-worker-count" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the app service plan",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--number-of-workers",
              description: "Number of workers to be allocated",
              args: { name: "number-of-workers" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--sku",
              description:
                "The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P2V2(Premium V2 Medium), P3V2(Premium V2 Large), P0V3(Premium V3 Extra Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), P1MV3(Premium Memory Optimized V3 Small), P2MV3(Premium Memory Optimized V3 Medium), P3MV3(Premium Memory Optimized V3 Large), P4MV3(Premium Memory Optimized V3 Extra Large), P5MV3(Premium Memory Optimized V3 Extra Extra Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large), I1v2 (Isolated V2 Small), I2v2 (Isolated V2 Medium), I3v2 (Isolated V2 Large), I4v2 (Isolated V2 I4v2), I5v2 (Isolated V2 I5v2), I6v2 (Isolated V2 I6v2), WS1 (Logic Apps Workflow Standard 1), WS2 (Logic Apps Workflow Standard 2), WS3 (Logic Apps Workflow Standard 3)",
              args: {
                name: "sku",
                suggestions: [
                  "B1",
                  "B2",
                  "B3",
                  "D1",
                  "F1",
                  "FREE",
                  "I1",
                  "I1v2",
                  "I2",
                  "I2v2",
                  "I3",
                  "I3v2",
                  "I4v2",
                  "I5v2",
                  "I6v2",
                  "P0V3",
                  "P1MV3",
                  "P1V2",
                  "P1V3",
                  "P2MV3",
                  "P2V2",
                  "P2V3",
                  "P3MV3",
                  "P3V2",
                  "P3V3",
                  "P4MV3",
                  "P5MV3",
                  "S1",
                  "S2",
                  "S3",
                  "SHARED",
                  "WS1",
                  "WS2",
                  "WS3",
                ],
              },
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
      name: "vnet-integration",
      description:
        "A method that lists the virtual network integrations used in an appservice plan",
      subcommands: [
        {
          name: "list",
          description:
            "List the virtual network integrations used in an appservice plan",
          options: [
            {
              name: "--plan",
              description: "AppService plan",
              args: { name: "plan" },
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
  ],
};

export default completion;
