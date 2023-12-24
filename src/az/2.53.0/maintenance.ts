const completion: Fig.Spec = {
  name: "maintenance",
  description: "Manage Maintenance",
  subcommands: [
    {
      name: "applyupdate",
      description: "Manage apply update with maintenance",
      subcommands: [
        {
          name: "create",
          description: "Apply maintenance updates to resource",
          options: [
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
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
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-or-update-parent",
          description: "Apply maintenance updates to resource with parent",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
            },
            {
              name: "--resource-parent-name",
              description: "Resource parent identifier",
              args: { name: "resource-parent-name" },
            },
            {
              name: "--resource-parent-type",
              description: "Resource parent type",
              args: { name: "resource-parent-type" },
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
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
          description: "Get Configuration records within a subscription",
        },
        {
          name: "show",
          description: "Track maintenance updates to resource",
          options: [
            {
              name: ["--apply-update-name", "--name", "-n"],
              description: "ApplyUpdate Id",
              args: { name: "apply-update-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
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
          name: "show-parent",
          description: "Track maintenance updates to resource with parent",
          options: [
            {
              name: ["--apply-update-name", "--name", "-n"],
              description: "ApplyUpdate Id",
              args: { name: "apply-update-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
            },
            {
              name: "--resource-parent-name",
              description: "Resource parent identifier",
              args: { name: "resource-parent-name" },
            },
            {
              name: "--resource-parent-type",
              description: "Resource parent type",
              args: { name: "resource-parent-type" },
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
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
      name: "assignment",
      description: "Manage configuration assignment with maintenance",
      subcommands: [
        {
          name: "create",
          description: "Apply maintenance updates to resource",
          options: [
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Configuration assignment name",
              args: { name: "configuration-assignment-name" },
              isRequired: true,
            },
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
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
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
              isRequired: true,
            },
            {
              name: ["--maintenance-configuration-id", "--config-id"],
              description: "The maintenance configuration Id",
              args: { name: "maintenance-configuration-id" },
            },
            {
              name: "--filter-locations",
              description:
                'List of locations to scope the query to. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-locations" },
            },
            {
              name: "--filter-os-types",
              description:
                'List of allowed operating systems. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-os-types" },
            },
            {
              name: "--filter-resource-groups",
              description:
                'List of allowed resource groups. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-groups" },
            },
            {
              name: "--filter-resource-types",
              description:
                'List of allowed resources. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-types" },
            },
            {
              name: "--filter-tags",
              description:
                'Dictionary of tags with its list of values. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-tags" },
            },
            {
              name: "--filter-tags-operator",
              description: "Filter VMs by Any or All specified tags",
              args: {
                name: "filter-tags-operator",
                suggestions: ["All", "Any"],
              },
            },
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
            },
            {
              name: "--resource-id",
              description: "The unique resourceId",
              args: { name: "resource-id" },
            },
          ],
        },
        {
          name: "create-or-update-parent",
          description: "Apply maintenance updates to resource with parent",
          options: [
            {
              name: ["--maintenance-configuration-id", "--config-id"],
              description: "The maintenance configuration Id",
              args: { name: "maintenance-configuration-id" },
            },
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Configuration assignment name",
              args: { name: "configuration-assignment-name" },
            },
            {
              name: "--filter-locations",
              description:
                'List of locations to scope the query to. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-locations" },
            },
            {
              name: "--filter-os-types",
              description:
                'List of allowed operating systems. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-os-types" },
            },
            {
              name: "--filter-resource-groups",
              description:
                'List of allowed resource groups. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-groups" },
            },
            {
              name: "--filter-resource-types",
              description:
                'List of allowed resources. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-types" },
            },
            {
              name: "--filter-tags",
              description:
                'Dictionary of tags with its list of values. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-tags" },
            },
            {
              name: "--filter-tags-operator",
              description: "Filter VMs by Any or All specified tags",
              args: {
                name: "filter-tags-operator",
                suggestions: ["All", "Any"],
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
              description: "Location of the resource",
              args: { name: "location" },
            },
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-id",
              description: "The unique resourceId",
              args: { name: "resource-id" },
            },
            {
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
            },
            {
              name: "--resource-parent-name",
              description: "Resource parent identifier",
              args: { name: "resource-parent-name" },
            },
            {
              name: "--resource-parent-type",
              description: "Resource parent type",
              args: { name: "resource-parent-type" },
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
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
          name: "create-or-update-resource-group",
          description: "Create configuration for resource",
          options: [
            {
              name: ["--maintenance-configuration-id", "--config-id"],
              description: "The maintenance configuration Id",
              args: { name: "maintenance-configuration-id" },
            },
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Configuration assignment name",
              args: { name: "configuration-assignment-name" },
            },
            {
              name: "--filter-locations",
              description:
                'List of locations to scope the query to. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-locations" },
            },
            {
              name: "--filter-os-types",
              description:
                'List of allowed operating systems. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-os-types" },
            },
            {
              name: "--filter-resource-groups",
              description:
                'List of allowed resource groups. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-groups" },
            },
            {
              name: "--filter-resource-types",
              description:
                'List of allowed resources. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-types" },
            },
            {
              name: "--filter-tags",
              description:
                'Dictionary of tags with its list of values. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-tags" },
            },
            {
              name: "--filter-tags-operator",
              description: "Filter VMs by Any or All specified tags",
              args: {
                name: "filter-tags-operator",
                suggestions: ["All", "Any"],
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
              description: "Location of the resource",
              args: { name: "location" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-id",
              description: "The unique resourceId",
              args: { name: "resource-id" },
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
          name: "create-or-update-subscription",
          description: "Create configuration for resource",
          options: [
            {
              name: ["--maintenance-configuration-id", "--config-id"],
              description: "The maintenance configuration Id",
              args: { name: "maintenance-configuration-id" },
            },
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Configuration assignment name",
              args: { name: "configuration-assignment-name" },
            },
            {
              name: "--filter-locations",
              description:
                'List of locations to scope the query to. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-locations" },
            },
            {
              name: "--filter-os-types",
              description:
                'List of allowed operating systems. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-os-types" },
            },
            {
              name: "--filter-resource-groups",
              description:
                'List of allowed resource groups. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-groups" },
            },
            {
              name: "--filter-resource-types",
              description:
                'List of allowed resources. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-types" },
            },
            {
              name: "--filter-tags",
              description:
                'Dictionary of tags with its list of values. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-tags" },
            },
            {
              name: "--filter-tags-operator",
              description: "Filter VMs by Any or All specified tags",
              args: {
                name: "filter-tags-operator",
                suggestions: ["All", "Any"],
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
              description: "Location of the resource",
              args: { name: "location" },
            },
            {
              name: "--resource-id",
              description: "The unique resourceId",
              args: { name: "resource-id" },
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
          name: "delete",
          description: "Delete configuration for resource",
          options: [
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Unique configuration assignment name",
              args: { name: "configuration-assignment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
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
          name: "delete-parent",
          description: "Delete configuration for resource",
          options: [
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Unique configuration assignment name",
              args: { name: "configuration-assignment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
            },
            {
              name: "--resource-parent-name",
              description: "Resource parent identifier",
              args: { name: "resource-parent-name" },
            },
            {
              name: "--resource-parent-type",
              description: "Resource parent type",
              args: { name: "resource-parent-type" },
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
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
          name: "delete-resource-group",
          description: "Delete configuration for resource",
          options: [
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Unique configuration assignment name",
              args: { name: "configuration-assignment-name" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "delete-subscription",
          description: "Delete configuration for resource",
          options: [
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Unique configuration assignment name",
              args: { name: "configuration-assignment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
          description: "List configurationAssignments for resource",
          options: [
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
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
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-parent",
          description: "List configurationAssignments for resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
            },
            {
              name: "--resource-parent-name",
              description: "Resource parent identifier",
              args: { name: "resource-parent-name" },
            },
            {
              name: "--resource-parent-type",
              description: "Resource parent type",
              args: { name: "resource-parent-type" },
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
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
          name: "list-subscription",
          description: "List configuration assignment within a subscription",
        },
        {
          name: "show",
          description: "Get configuration assignment for resource",
          options: [
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Configuration assignment name",
              args: { name: "configuration-assignment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
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
          name: "show-parent",
          description: "Get configuration assignment for resource",
          options: [
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Configuration assignment name",
              args: { name: "configuration-assignment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
            },
            {
              name: "--resource-parent-name",
              description: "Resource parent identifier",
              args: { name: "resource-parent-name" },
            },
            {
              name: "--resource-parent-type",
              description: "Resource parent type",
              args: { name: "resource-parent-type" },
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
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
          name: "show-resource-group",
          description: "Get configuration assignment for resource",
          options: [
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Configuration assignment name",
              args: { name: "configuration-assignment-name" },
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
          name: "show-subscription",
          description: "Get configuration assignment for resource",
          options: [
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Configuration assignment name",
              args: { name: "configuration-assignment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
          description: "Update configuration for resource",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--maintenance-configuration-id", "--config-id"],
              description: "The maintenance configuration Id",
              args: { name: "maintenance-configuration-id" },
            },
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Configuration assignment name",
              args: { name: "configuration-assignment-name" },
            },
            {
              name: "--filter-locations",
              description:
                'List of locations to scope the query to. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-locations" },
            },
            {
              name: "--filter-os-types",
              description:
                'List of allowed operating systems. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-os-types" },
            },
            {
              name: "--filter-resource-groups",
              description:
                'List of allowed resource groups. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-groups" },
            },
            {
              name: "--filter-resource-types",
              description:
                'List of allowed resources. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-types" },
            },
            {
              name: "--filter-tags",
              description:
                'Dictionary of tags with its list of values. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-tags" },
            },
            {
              name: "--filter-tags-operator",
              description: "Filter VMs by Any or All specified tags",
              args: {
                name: "filter-tags-operator",
                suggestions: ["All", "Any"],
              },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
              args: {
                name: "force-string",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
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
              description: "Location of the resource",
              args: { name: "location" },
            },
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
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
              name: "--resource-id",
              description: "The unique resourceId",
              args: { name: "resource-id" },
            },
            {
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
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
          name: "update-parent",
          description: "Update configuration for resource",
          options: [
            {
              name: ["--maintenance-configuration-id", "--config-id"],
              description: "The maintenance configuration Id",
              args: { name: "maintenance-configuration-id" },
            },
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Configuration assignment name",
              args: { name: "configuration-assignment-name" },
            },
            {
              name: "--filter-locations",
              description:
                'List of locations to scope the query to. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-locations" },
            },
            {
              name: "--filter-os-types",
              description:
                'List of allowed operating systems. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-os-types" },
            },
            {
              name: "--filter-resource-groups",
              description:
                'List of allowed resource groups. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-groups" },
            },
            {
              name: "--filter-resource-types",
              description:
                'List of allowed resources. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-types" },
            },
            {
              name: "--filter-tags",
              description:
                'Dictionary of tags with its list of values. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-tags" },
            },
            {
              name: "--filter-tags-operator",
              description: "Filter VMs by Any or All specified tags",
              args: {
                name: "filter-tags-operator",
                suggestions: ["All", "Any"],
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
              description: "Location of the resource",
              args: { name: "location" },
            },
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-id",
              description: "The unique resourceId",
              args: { name: "resource-id" },
            },
            {
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
            },
            {
              name: "--resource-parent-name",
              description: "Resource parent identifier",
              args: { name: "resource-parent-name" },
            },
            {
              name: "--resource-parent-type",
              description: "Resource parent type",
              args: { name: "resource-parent-type" },
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
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
          name: "update-resource-group",
          description: "Update configuration for resource",
          options: [
            {
              name: ["--maintenance-configuration-id", "--config-id"],
              description: "The maintenance configuration Id",
              args: { name: "maintenance-configuration-id" },
            },
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Configuration assignment name",
              args: { name: "configuration-assignment-name" },
            },
            {
              name: "--filter-locations",
              description:
                'List of locations to scope the query to. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-locations" },
            },
            {
              name: "--filter-os-types",
              description:
                'List of allowed operating systems. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-os-types" },
            },
            {
              name: "--filter-resource-groups",
              description:
                'List of allowed resource groups. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-groups" },
            },
            {
              name: "--filter-resource-types",
              description:
                'List of allowed resources. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-types" },
            },
            {
              name: "--filter-tags",
              description:
                'Dictionary of tags with its list of values. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-tags" },
            },
            {
              name: "--filter-tags-operator",
              description: "Filter VMs by Any or All specified tags",
              args: {
                name: "filter-tags-operator",
                suggestions: ["All", "Any"],
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
              description: "Location of the resource",
              args: { name: "location" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-id",
              description: "The unique resourceId",
              args: { name: "resource-id" },
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
          name: "update-subscription",
          description: "Update configuration for resource",
          options: [
            {
              name: ["--maintenance-configuration-id", "--config-id"],
              description: "The maintenance configuration Id",
              args: { name: "maintenance-configuration-id" },
            },
            {
              name: ["--configuration-assignment-name", "--name", "-n"],
              description: "Configuration assignment name",
              args: { name: "configuration-assignment-name" },
            },
            {
              name: "--filter-locations",
              description:
                'List of locations to scope the query to. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-locations" },
            },
            {
              name: "--filter-os-types",
              description:
                'List of allowed operating systems. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-os-types" },
            },
            {
              name: "--filter-resource-groups",
              description:
                'List of allowed resource groups. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-groups" },
            },
            {
              name: "--filter-resource-types",
              description:
                'List of allowed resources. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-resource-types" },
            },
            {
              name: "--filter-tags",
              description:
                'Dictionary of tags with its list of values. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filter-tags" },
            },
            {
              name: "--filter-tags-operator",
              description: "Filter VMs by Any or All specified tags",
              args: {
                name: "filter-tags-operator",
                suggestions: ["All", "Any"],
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
              description: "Location of the resource",
              args: { name: "location" },
            },
            {
              name: "--resource-id",
              description: "The unique resourceId",
              args: { name: "resource-id" },
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
      name: "configuration",
      description: "Manage maintenance configuration with maintenance",
      subcommands: [
        {
          name: "create",
          description: "Create configuration record",
          options: [
            {
              name: ["--resource-name", "--name", "-n"],
              description: "Maintenance Configuration Name",
              args: { name: "resource-name" },
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
              name: ["--maintenance-window-duration", "--duration"],
              description:
                "Duration of the maintenance window in HH:mm format. If not provided, default value will be used based on maintenance scope provided. Example: 05:00",
              args: { name: "maintenance-window-duration" },
            },
            {
              name: [
                "--maintenance-window-expiration-date-time",
                "--expiration-date-time",
              ],
              description:
                "Effective expiration date of the maintenance window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59",
              args: { name: "maintenance-window-expiration-date-time" },
            },
            {
              name: "--extension-properties",
              description:
                'Gets or sets extensionProperties of the maintenanceConfiguration Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "extension-properties" },
            },
            {
              name: [
                "--install-patches-linux-parameters",
                "--linux-parameters",
              ],
              description:
                'Input parameters specific to patching Linux machine. For Windows machines, do not pass this property. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "install-patches-linux-parameters" },
            },
            {
              name: [
                "--install-patches-windows-parameters",
                "--windows-parameters",
              ],
              description:
                'Input parameters specific to patching a Windows machine. For Linux machines, do not pass this property. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "install-patches-windows-parameters" },
            },
            {
              name: ["--location", "-l"],
              description: "Gets or sets location of the resource",
              args: { name: "location" },
            },
            {
              name: "--maintenance-scope",
              description: "Gets or sets maintenanceScope of the configuration",
              args: {
                name: "maintenance-scope",
                suggestions: [
                  "Extension",
                  "Host",
                  "InGuestPatch",
                  "OSImage",
                  "Resource",
                  "SQLDB",
                  "SQLManagedInstance",
                ],
              },
            },
            {
              name: ["--maintenance-window-recur-every", "--recur-every"],
              description:
                "Rate at which a Maintenance window is expected to recur. The rate can be expressed as daily, weekly, or monthly schedules. Daily schedule are formatted as recurEvery: [Frequency as integer]['Day(s)']. If no frequency is provided, the default frequency is 1. Daily schedule examples are recurEvery: Day, recurEvery: 3Days. Weekly schedule are formatted as recurEvery: [Frequency as integer]['Week(s)'] [Optional comma separated list of weekdays Monday-Sunday]. Weekly schedule examples are recurEvery: 3Weeks, recurEvery: Week Saturday,Sunday. Monthly schedules are formatted as [Frequency as integer]['Month(s)'] [Comma separated list of month days] or [Frequency as integer]['Month(s)'] [Week of Month (First, Second, Third, Fourth, Last)] [Weekday Monday-Sunday] [Optional Offset(No. of days)]. Offset value must be between -6 to 6 inclusive. Monthly schedule examples are recurEvery: Month, recurEvery: 2Months, recurEvery: Month day23,day24, recurEvery: Month Last Sunday, recurEvery: Month Fourth Monday, recurEvery: Month Last Sunday Offset-3, recurEvery: Month Third Sunday Offset6",
              args: { name: "maintenance-window-recur-every" },
            },
            {
              name: [
                "--maintenance-window-start-date-time",
                "--start-date-time",
              ],
              description:
                "Effective start date of the maintenance window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone",
              args: { name: "maintenance-window-start-date-time" },
            },
            {
              name: ["--maintenance-window-time-zone", "--time-zone"],
              description:
                "Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time",
              args: { name: "maintenance-window-time-zone" },
            },
            {
              name: "--namespace",
              description: "Gets or sets namespace of the resource",
              args: { name: "namespace" },
            },
            {
              name: "--reboot-setting",
              description:
                "Possible reboot preference as defined by the user based on which it would be decided to reboot the machine or not after the patch operation is completed",
              args: {
                name: "reboot-setting",
                suggestions: ["Always", "IfRequired", "Never"],
              },
            },
            {
              name: "--tags",
              description:
                'Gets or sets tags of the resource Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--visibility",
              description:
                "Gets or sets the visibility of the configuration. The default value is 'Custom'",
              args: { name: "visibility", suggestions: ["Custom", "Public"] },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete Configuration record",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-name", "--name", "-n"],
              description: "Maintenance Configuration Name",
              args: { name: "resource-name" },
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
          description:
            "List Configuration records within a subscription and resource group",
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
          description: "Get Configuration record",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-name", "--name", "-n"],
              description: "Maintenance Configuration Name",
              args: { name: "resource-name" },
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
          description: "Update configuration record",
          options: [
            {
              name: ["--maintenance-window-duration", "--duration"],
              description:
                "Duration of the maintenance window in HH:mm format. If not provided, default value will be used based on maintenance scope provided. Example: 05:00",
              args: { name: "maintenance-window-duration" },
            },
            {
              name: [
                "--maintenance-window-expiration-date-time",
                "--expiration-date-time",
              ],
              description:
                "Effective expiration date of the maintenance window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59",
              args: { name: "maintenance-window-expiration-date-time" },
            },
            {
              name: "--extension-properties",
              description:
                'Gets or sets extensionProperties of the maintenanceConfiguration Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "extension-properties" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: [
                "--install-patches-linux-parameters",
                "--linux-parameters",
              ],
              description:
                'Input parameters specific to patching Linux machine. For Windows machines, do not pass this property. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "install-patches-linux-parameters" },
            },
            {
              name: [
                "--install-patches-windows-parameters",
                "--windows-parameters",
              ],
              description:
                'Input parameters specific to patching a Windows machine. For Linux machines, do not pass this property. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "install-patches-windows-parameters" },
            },
            {
              name: ["--location", "-l"],
              description: "Gets or sets location of the resource",
              args: { name: "location" },
            },
            {
              name: "--maintenance-scope",
              description: "Gets or sets maintenanceScope of the configuration",
              args: {
                name: "maintenance-scope",
                suggestions: [
                  "Extension",
                  "Host",
                  "InGuestPatch",
                  "OSImage",
                  "Resource",
                  "SQLDB",
                  "SQLManagedInstance",
                ],
              },
            },
            {
              name: ["--maintenance-window-recur-every", "--recur-every"],
              description:
                "Rate at which a Maintenance window is expected to recur. The rate can be expressed as daily, weekly, or monthly schedules. Daily schedule are formatted as recurEvery: [Frequency as integer]['Day(s)']. If no frequency is provided, the default frequency is 1. Daily schedule examples are recurEvery: Day, recurEvery: 3Days. Weekly schedule are formatted as recurEvery: [Frequency as integer]['Week(s)'] [Optional comma separated list of weekdays Monday-Sunday]. Weekly schedule examples are recurEvery: 3Weeks, recurEvery: Week Saturday,Sunday. Monthly schedules are formatted as [Frequency as integer]['Month(s)'] [Comma separated list of month days] or [Frequency as integer]['Month(s)'] [Week of Month (First, Second, Third, Fourth, Last)] [Weekday Monday-Sunday] [Optional Offset(No. of days)]. Offset value must be between -6 to 6 inclusive. Monthly schedule examples are recurEvery: Month, recurEvery: 2Months, recurEvery: Month day23,day24, recurEvery: Month Last Sunday, recurEvery: Month Fourth Monday, recurEvery: Month Last Sunday Offset-3, recurEvery: Month Third Sunday Offset6",
              args: { name: "maintenance-window-recur-every" },
            },
            {
              name: [
                "--maintenance-window-start-date-time",
                "--start-date-time",
              ],
              description:
                "Effective start date of the maintenance window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone",
              args: { name: "maintenance-window-start-date-time" },
            },
            {
              name: ["--maintenance-window-time-zone", "--time-zone"],
              description:
                "Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time",
              args: { name: "maintenance-window-time-zone" },
            },
            {
              name: ["--resource-name", "--name", "-n"],
              description: "Maintenance Configuration Name",
              args: { name: "resource-name" },
            },
            {
              name: "--namespace",
              description: "Gets or sets namespace of the resource",
              args: { name: "namespace" },
            },
            {
              name: "--reboot-setting",
              description:
                "Possible reboot preference as defined by the user based on which it would be decided to reboot the machine or not after the patch operation is completed",
              args: {
                name: "reboot-setting",
                suggestions: ["Always", "IfRequired", "Never"],
              },
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
                'Gets or sets tags of the resource Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--visibility",
              description:
                "Gets or sets the visibility of the configuration. The default value is 'Custom'",
              args: { name: "visibility", suggestions: ["Custom", "Public"] },
            },
          ],
        },
      ],
    },
    {
      name: "public-configuration",
      description: "Manage public maintenance configuration with maintenance",
      subcommands: [
        {
          name: "list",
          description: "List Public Maintenance Configuration records",
        },
        {
          name: "show",
          description: "Get Public Maintenance Configuration record",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-name", "--name", "-n"],
              description: "Maintenance Configuration Name",
              args: { name: "resource-name" },
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
      name: "update",
      description: "Manage update with maintenance",
      subcommands: [
        {
          name: "list",
          description: "List updates to resources",
          options: [
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
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
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-parent",
          description: "List updates to resources",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-name",
              description: "Resource provider name",
              args: { name: "provider-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Resource identifier",
              args: { name: "resource-name" },
            },
            {
              name: "--resource-parent-name",
              description: "Resource parent identifier",
              args: { name: "resource-parent-name" },
            },
            {
              name: "--resource-parent-type",
              description: "Resource parent type",
              args: { name: "resource-parent-type" },
            },
            {
              name: "--resource-type",
              description: "Resource type",
              args: { name: "resource-type" },
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
  ],
};

export default completion;
