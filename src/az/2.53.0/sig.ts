const completion: Fig.Spec = {
  name: "sig",
  description: "Manage shared image gallery",
  subcommands: [
    {
      name: "create",
      description: "Create a shared image gallery",
      options: [
        {
          name: ["--gallery-name", "-r"],
          description: "Gallery name",
          args: { name: "gallery-name" },
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
          description: "The description of the gallery",
          args: { name: "description" },
        },
        {
          name: "--eula",
          description: "Community gallery publisher eula",
          args: { name: "eula" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--permissions",
          description:
            "This property allows you to specify the permission of sharing gallery",
          args: {
            name: "permissions",
            suggestions: ["Community", "Groups", "Private"],
          },
        },
        {
          name: "--public-name-prefix",
          description: "Community gallery public name prefix",
          args: { name: "public-name-prefix" },
        },
        {
          name: "--publisher-email",
          description: "Community gallery publisher contact email",
          args: { name: "publisher-email" },
        },
        {
          name: "--publisher-uri",
          description: "Community gallery publisher uri",
          args: { name: "publisher-uri" },
        },
        {
          name: "--soft-delete",
          description:
            "Enable soft-deletion for resources in this gallery, allowing them to be recovered within retention time",
          args: { name: "soft-delete", suggestions: ["false", "true"] },
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
      description: "Delete a Shared Image Gallery",
      options: [
        {
          name: ["--gallery-name", "-r"],
          description: "The name of the Shared Image Gallery to be deleted",
          args: { name: "gallery-name" },
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
          args: {
            name: "no-wait",
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
      description: "List galleries under a resource group",
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
      name: "list-community",
      description:
        "List all community galleries shared directly to your subscription or tenant",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--marker",
          description:
            "A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. If specified, this generator will begin returning results from the point where the previous generator stopped",
          args: { name: "marker" },
        },
        {
          name: "--show-next-marker",
          description: "Show nextMarker in result when specified",
          args: { name: "show-next-marker" },
        },
      ],
    },
    {
      name: "list-shared",
      description:
        "List all shared galleries shared directly to your subscription or tenant",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: "--shared-to",
          description:
            "The query parameter to decide what shared galleries to fetch when doing listing operations. If not specified, list by subscription id",
          args: { name: "shared-to", suggestions: ["tenant"] },
        },
      ],
    },
    {
      name: "show",
      description: "Retrieve information about a Shared Image Gallery",
      options: [
        {
          name: ["--gallery-name", "-r"],
          description: "Gallery name",
          args: { name: "gallery-name" },
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
          name: "--select",
          description: "The select expression to apply on the operation",
          args: { name: "select" },
        },
        {
          name: "--sharing-groups",
          description: "The expand query option to query shared gallery groups",
          args: { name: "sharing-groups" },
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
      name: "show-community",
      description: "Get a community gallery by gallery public name",
      options: [
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
          name: ["--public-gallery-name", "--name", "-n"],
          description: "The public name of the community gallery",
          args: { name: "public-gallery-name" },
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
      name: "show-shared",
      description:
        "Get a gallery that has been shared directly to your subscription or tenant",
      options: [
        {
          name: ["--gallery-unique-name", "--name", "-n"],
          description: "The unique name of the Shared Gallery",
          args: { name: "gallery-unique-name" },
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
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "update",
      description: "Update a share image gallery",
      options: [
        {
          name: ["--gallery-name", "-r"],
          description: "Gallery name",
          args: { name: "gallery-name" },
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
          name: "--eula",
          description: "Community gallery publisher eula",
          args: { name: "eula" },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--permissions",
          description:
            "This property allows you to specify the permission of sharing gallery",
          args: {
            name: "permissions",
            suggestions: ["Community", "Groups", "Private"],
          },
        },
        {
          name: "--public-name-prefix",
          description: "Community gallery public name prefix",
          args: { name: "public-name-prefix" },
        },
        {
          name: "--publisher-email",
          description: "Community gallery publisher contact email",
          args: { name: "publisher-email" },
        },
        {
          name: "--publisher-uri",
          description: "Community gallery publisher uri",
          args: { name: "publisher-uri" },
        },
        {
          name: "--remove",
          description:
            "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
          args: { name: "remove" },
        },
        {
          name: "--select",
          description:
            'The select expression to apply on the operation. "Permissions" Default value is None',
          args: { name: "select" },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
          args: { name: "set" },
        },
        {
          name: "--soft-delete",
          description:
            "Enable soft-deletion for resources in this gallery, allowing them to be recovered within retention time",
          args: { name: "soft-delete", suggestions: ["false", "true"] },
        },
      ],
    },
    {
      name: "gallery-application",
      description: "Manage gallery application",
      subcommands: [
        {
          name: "create",
          description: "Create a gallery Application Definition",
          options: [
            {
              name: ["--application-name", "--name", "-n"],
              description: "The name of the gallery Application",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
              isRequired: true,
            },
            {
              name: "--os-type",
              description:
                "This property allows you to specify the supported type of the OS that application is built for. Possible values are: Windows Linux",
              args: { name: "os-type", suggestions: ["Linux", "Windows"] },
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
              description:
                "The description of this gallery Application Definition resource. This property is updatable",
              args: { name: "description" },
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
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a gallery Application",
          options: [
            {
              name: [
                "--gallery-application-name",
                "--application-name",
                "--name",
                "-n",
              ],
              description: "The name of the gallery application",
              args: { name: "gallery-application-name" },
            },
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
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
              args: {
                name: "no-wait",
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
          description: "List gallery Application Definitions in a gallery",
          options: [
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
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
          description: "Get information about a gallery Application Definition",
          options: [
            {
              name: [
                "--gallery-application-name",
                "--application-name",
                "--name",
                "-n",
              ],
              description: "The name of the gallery application",
              args: { name: "gallery-application-name" },
            },
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
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
          name: "update",
          description: "Update a gallery Application Definition",
          options: [
            {
              name: ["--application-name", "--name", "-n"],
              description: "The name of the gallery Application",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
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
              description:
                "The description of this gallery Application Definition resource. This property is updatable",
              args: { name: "description" },
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
            "Place the CLI in a waiting state until a condition of the sig gallery-application is met",
          options: [
            {
              name: ["--application-name", "--name", "-n"],
              description: "The name of the gallery Application",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
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
        {
          name: "version",
          description: "Manage gallery application version",
          subcommands: [
            {
              name: "create",
              description: "Create a gallery Application Version",
              options: [
                {
                  name: "--application-name",
                  description: "The name of the gallery Application",
                  args: { name: "application-name" },
                  isRequired: true,
                },
                {
                  name: ["--gallery-name", "-r"],
                  description: "Gallery name",
                  args: { name: "gallery-name" },
                  isRequired: true,
                },
                {
                  name: "--install-command",
                  description:
                    "The path and arguments to install the gallery application",
                  args: { name: "install-command" },
                  isRequired: true,
                },
                {
                  name: ["--version-name", "--name", "-n"],
                  description: "The name of the gallery Application Version",
                  args: { name: "version-name" },
                  isRequired: true,
                },
                {
                  name: "--package-file-link",
                  description:
                    "The mediaLink of the artifact, must be a readable storage page blob",
                  args: { name: "package-file-link" },
                  isRequired: true,
                },
                {
                  name: "--remove-command",
                  description:
                    "The path and arguments to remove the gallery application",
                  args: { name: "remove-command" },
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
                  name: "--config-file-name",
                  description:
                    'The name to assign the downloaded config file on the VM. This is limited to 4096 characters. If not specified, the config file will be named the Gallery Application name appended with "_config"',
                  args: { name: "config-file-name" },
                },
                {
                  name: "--default-file-link",
                  description:
                    "The default configuration link of the artifact, must be a readable storage page blob",
                  args: { name: "default-file-link" },
                },
                {
                  name: "--end-of-life-date",
                  description:
                    "The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable",
                  args: { name: "end-of-life-date" },
                },
                {
                  name: "--exclude-from",
                  description:
                    "If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version",
                  args: {
                    name: "exclude-from",
                    suggestions: ["false", "true"],
                  },
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
                  name: "--package-file-name",
                  description:
                    "The name to assign the downloaded package file on the VM. This is limited to 4096 characters.If not specified, the package file will be named the same as the Gallery Application name",
                  args: { name: "package-file-name" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: "--target-regions",
                  description:
                    "The target regions where the Image Version isgoing to be replicated to. This property is updatable. Expected value: json-string/json-file/@json-file",
                  args: { name: "target-regions" },
                },
                {
                  name: "--update-command",
                  description:
                    "The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application",
                  args: { name: "update-command" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a gallery application version",
              options: [
                {
                  name: ["--gallery-application-name", "--application-name"],
                  description: "The name of the gallery application",
                  args: { name: "gallery-application-name" },
                },
                {
                  name: [
                    "--gallery-application-version-name",
                    "--version-name",
                    "--name",
                    "-n",
                  ],
                  description: "The name of the gallery application version",
                  args: { name: "gallery-application-version-name" },
                },
                {
                  name: ["--gallery-name", "-r"],
                  description: "Gallery name",
                  args: { name: "gallery-name" },
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
                  args: {
                    name: "no-wait",
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
              description: "List gallery application versions",
              options: [
                {
                  name: ["--gallery-application-name", "--application-name"],
                  description: "The name of the gallery application",
                  args: { name: "gallery-application-name" },
                  isRequired: true,
                },
                {
                  name: ["--gallery-name", "-r"],
                  description: "Gallery name",
                  args: { name: "gallery-name" },
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
              description:
                "Get information about a gallery application version",
              options: [
                {
                  name: ["--gallery-application-name", "--application-name"],
                  description: "The name of the gallery application",
                  args: { name: "gallery-application-name" },
                },
                {
                  name: "--expand",
                  description:
                    'The expand expression to apply on the operation. "ReplicationStatus" Default value is None',
                  args: { name: "expand", suggestions: ["ReplicationStatus"] },
                },
                {
                  name: [
                    "--gallery-application-version-name",
                    "--version-name",
                    "--name",
                    "-n",
                  ],
                  description: "The name of the gallery application version",
                  args: { name: "gallery-application-version-name" },
                },
                {
                  name: ["--gallery-name", "-r"],
                  description: "Gallery name",
                  args: { name: "gallery-name" },
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
              name: "update",
              description: "Update a gallery Application Version",
              options: [
                {
                  name: "--application-name",
                  description: "The name of the gallery Application",
                  args: { name: "application-name" },
                  isRequired: true,
                },
                {
                  name: ["--gallery-name", "-r"],
                  description: "Gallery name",
                  args: { name: "gallery-name" },
                  isRequired: true,
                },
                {
                  name: ["--version-name", "--name", "-n"],
                  description: "The name of the gallery Application Version",
                  args: { name: "version-name" },
                  isRequired: true,
                },
                {
                  name: "--package-file-link",
                  description:
                    "The mediaLink of the artifact, must be a readable storage page blob",
                  args: { name: "package-file-link" },
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
                  name: "--default-file-link",
                  description:
                    "The default configuration link of the artifact, must be a readable storage page blob",
                  args: { name: "default-file-link" },
                },
                {
                  name: "--end-of-life-date",
                  description:
                    "The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable",
                  args: { name: "end-of-life-date" },
                },
                {
                  name: "--exclude-from",
                  description:
                    "If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version",
                  args: {
                    name: "exclude-from",
                    suggestions: ["false", "true"],
                  },
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
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: "--target-regions",
                  description:
                    "The target regions where the Image Version isgoing to be replicated to. This property is updatable. Expected value: json-string/json-file/@json-file",
                  args: { name: "target-regions" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--gallery-application-name", "--application-name"],
                  description: "The name of the gallery application",
                  args: { name: "gallery-application-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--expand",
                  description:
                    'The expand expression to apply on the operation. "ReplicationStatus" Default value is None',
                  args: { name: "expand", suggestions: ["ReplicationStatus"] },
                },
                {
                  name: [
                    "--gallery-application-version-name",
                    "--version-name",
                    "--name",
                    "-n",
                  ],
                  description: "The name of the gallery application version",
                  args: { name: "gallery-application-version-name" },
                },
                {
                  name: ["--gallery-name", "-r"],
                  description: "Gallery name",
                  args: { name: "gallery-name" },
                },
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
          ],
        },
      ],
    },
    {
      name: "image-definition",
      description: "Manage shared gallery image with VM",
      subcommands: [
        {
          name: "create",
          description: "Create a gallery image definition",
          options: [
            {
              name: ["--gallery-image-definition", "-i"],
              description: "Gallery image definition",
              args: { name: "gallery-image-definition" },
              isRequired: true,
            },
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
              isRequired: true,
            },
            {
              name: ["--offer", "-f"],
              description: "Image offer",
              args: { name: "offer" },
              isRequired: true,
            },
            {
              name: "--os-type",
              description:
                "The type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD",
              args: { name: "os-type", suggestions: ["Linux", "Windows"] },
              isRequired: true,
            },
            {
              name: ["--publisher", "-p"],
              description: "Image publisher",
              args: { name: "publisher" },
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
              name: ["--sku", "-s"],
              description: "Image sku",
              args: { name: "sku" },
              isRequired: true,
            },
            {
              name: "--architecture",
              description: "CPU architecture",
              args: { name: "architecture", suggestions: ["Arm64", "x64"] },
            },
            {
              name: "--description",
              description: "The description of the gallery image definition",
              args: { name: "description" },
            },
            {
              name: "--disallowed-disk-types",
              description:
                "Disk types which would not work with the image, e.g., Standard_LRS",
              args: { name: "disallowed-disk-types" },
            },
            {
              name: "--end-of-life-date",
              description: "The end of life date, e.g. '2020-12-31'",
              args: { name: "end-of-life-date" },
            },
            {
              name: "--eula",
              description: "The Eula agreement for the gallery image",
              args: { name: "eula" },
            },
            {
              name: "--features",
              description:
                'A list of gallery image features. E.g. "IsSecureBootSupported=true IsMeasuredBootSupported=false"',
              args: { name: "features" },
            },
            {
              name: "--hyper-v-generation",
              description:
                "The hypervisor generation of the Virtual Machine. Applicable to OS disks only",
              args: { name: "hyper-v-generation", suggestions: ["V1", "V2"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--maximum-cpu-core",
              description: "Maximum cpu cores",
              args: { name: "maximum-cpu-core" },
            },
            {
              name: "--maximum-memory",
              description: "Maximum memory in MB",
              args: { name: "maximum-memory" },
            },
            {
              name: "--minimum-cpu-core",
              description: "Minimum cpu cores",
              args: { name: "minimum-cpu-core" },
            },
            {
              name: "--minimum-memory",
              description: "Minimum memory in MB",
              args: { name: "minimum-memory" },
            },
            {
              name: "--os-state",
              description:
                "This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'",
              args: {
                name: "os-state",
                suggestions: ["Generalized", "Specialized"],
              },
            },
            {
              name: "--plan-name",
              description: "Plan name",
              args: { name: "plan-name" },
            },
            {
              name: "--plan-product",
              description: "Plan product",
              args: { name: "plan-product" },
            },
            {
              name: "--plan-publisher",
              description: "Plan publisher",
              args: { name: "plan-publisher" },
            },
            {
              name: "--privacy-statement-uri",
              description: "The privacy statement uri",
              args: { name: "privacy-statement-uri" },
            },
            {
              name: "--release-note-uri",
              description: "The release note uri",
              args: { name: "release-note-uri" },
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
          description: "Delete a gallery image",
          options: [
            {
              name: [
                "--gallery-image-definition",
                "--gallery-image-name",
                "-i",
              ],
              description:
                "The name of the gallery image definition to be deleted",
              args: { name: "gallery-image-definition" },
            },
            {
              name: ["--gallery-name", "-r"],
              description:
                "The name of the Shared Image Gallery in which the Image Definition is to be deleted",
              args: { name: "gallery-name" },
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
              args: {
                name: "no-wait",
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
          description: "List gallery image definitions in a gallery",
          options: [
            {
              name: ["--gallery-name", "-r"],
              description:
                "The name of the Shared Image Gallery from which Image Definitions are to be listed",
              args: { name: "gallery-name" },
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
          name: "list-community",
          description: "List VM Image definitions in a gallery community",
          options: [
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
              name: "--marker",
              description:
                "A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. If specified, this generator will begin returning results from the point where the previous generator stopped",
              args: { name: "marker" },
            },
            {
              name: "--public-gallery-name",
              description: "The public name of community gallery",
              args: { name: "public-gallery-name" },
            },
            {
              name: "--show-next-marker",
              description: "Show nextMarker in result when specified",
              args: { name: "show-next-marker" },
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
          name: "list-shared",
          description:
            "List VM Image definitions in a gallery shared directly to your subscription or tenant",
          options: [
            {
              name: "--gallery-unique-name",
              description: "The unique name of the Shared Gallery",
              args: { name: "gallery-unique-name" },
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
              name: "--marker",
              description:
                "A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. If specified, this generator will begin returning results from the point where the previous generator stopped",
              args: { name: "marker" },
            },
            {
              name: "--shared-to",
              description:
                "The query parameter to decide what shared galleries to fetch when doing listing operations. If not specified, list by subscription id",
              args: { name: "shared-to", suggestions: ["tenant"] },
            },
            {
              name: "--show-next-marker",
              description: "Show nextMarker in result when specified",
              args: { name: "show-next-marker" },
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
          description: "Get information about a gallery image definition",
          options: [
            {
              name: [
                "--gallery-image-definition",
                "--gallery-image-name",
                "-i",
              ],
              description:
                "The name of the gallery image definition to be retrieved",
              args: { name: "gallery-image-definition" },
            },
            {
              name: ["--gallery-name", "-r"],
              description:
                "The name of the Shared Image Gallery from which the Image Definitions are to be retrieved",
              args: { name: "gallery-name" },
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
          name: "show-community",
          description: "Get a community gallery image",
          options: [
            {
              name: ["--gallery-image-definition", "-i"],
              description:
                "The name of the community gallery image definition from which the image versions are to be listed",
              args: { name: "gallery-image-definition" },
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
              name: "--public-gallery-name",
              description: "The public name of community gallery",
              args: { name: "public-gallery-name" },
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
          name: "show-shared",
          description: "Get a shared gallery image",
          options: [
            {
              name: [
                "--gallery-image-definition",
                "--gallery-image-name",
                "-i",
              ],
              description:
                "The name of the Shared Gallery Image Definition from which the Image Versions are to be listed",
              args: { name: "gallery-image-definition" },
            },
            {
              name: "--gallery-unique-name",
              description: "The unique name of the Shared Gallery",
              args: { name: "gallery-unique-name" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a VM Image definition",
          options: [
            {
              name: ["--gallery-image-definition", "-i"],
              description: "Gallery image definition",
              args: { name: "gallery-image-definition" },
              isRequired: true,
            },
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
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
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
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
              name: [
                "--gallery-image-definition",
                "--gallery-image-name",
                "-i",
              ],
              description:
                "The name of the gallery image definition to be retrieved",
              args: { name: "gallery-image-definition" },
            },
            {
              name: ["--gallery-name", "-r"],
              description:
                "The name of the Shared Image Gallery from which the Image Definitions are to be retrieved",
              args: { name: "gallery-name" },
            },
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
      ],
    },
    {
      name: "image-version",
      description: "Manage shared gallery image version with VM",
      subcommands: [
        {
          name: "create",
          description: "Create a new image version",
          options: [
            {
              name: ["--gallery-image-definition", "-i"],
              description: "Gallery image definition",
              args: { name: "gallery-image-definition" },
              isRequired: true,
            },
            {
              name: ["--gallery-image-version", "-e"],
              description:
                "Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. <MajorVersion>.<MinorVersion>.<Patch>",
              args: { name: "gallery-image-version" },
              isRequired: true,
            },
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
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
              name: "--allow-replicated-location-deletion",
              description:
                "Indicate whether or not removing this gallery image version from replicated regions is allowed",
              args: {
                name: "allow-replicated-location-deletion",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--data-snapshot-luns",
              description:
                "Logical unit numbers (space-delimited) of data disk snapshots",
              args: { name: "data-snapshot-luns" },
            },
            {
              name: "--data-snapshots",
              description:
                "Names or IDs (space-delimited) of data disk snapshots",
              args: { name: "data-snapshots" },
            },
            {
              name: "--data-vhds-luns",
              description:
                "Logical unit numbers (space-delimited) of source VHD URIs of data disks",
              args: { name: "data-vhds-luns" },
            },
            {
              name: ["--data-vhds-storage-accounts", "--data-vhds-sa"],
              description:
                "Names or IDs (space-delimited) of storage accounts of source VHD URIs of data disks",
              args: { name: "data-vhds-storage-accounts" },
            },
            {
              name: "--data-vhds-uris",
              description: "Source VHD URIs (space-delimited) of data disks",
              args: { name: "data-vhds-uris" },
            },
            {
              name: "--end-of-life-date",
              description: "The end of life date, e.g. '2020-12-31'",
              args: { name: "end-of-life-date" },
            },
            {
              name: "--exclude-from-latest",
              description:
                "The flag means that if it is set to true, people deploying VMs with version omitted will not use this version",
              args: {
                name: "exclude-from-latest",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--image-version",
              description: "Resource id of gallery image version source",
              args: { name: "image-version" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--managed-image",
              description:
                "Image name(if in the same resource group) or resource id",
              args: { name: "managed-image" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--os-snapshot",
              description: "Name or ID of OS disk snapshot",
              args: { name: "os-snapshot" },
            },
            {
              name: "--os-vhd-storage-account",
              description:
                "Name or ID of storage account of source VHD URI of OS disk",
              args: { name: "os-vhd-storage-account" },
            },
            {
              name: "--os-vhd-uri",
              description: "Source VHD URI of OS disk",
              args: { name: "os-vhd-uri" },
            },
            {
              name: "--replica-count",
              description:
                "The default number of replicas to be created per region. To set regional replication counts, use --target-regions",
              args: { name: "replica-count" },
            },
            {
              name: "--replication-mode",
              description:
                "Optional parameter which specifies the mode to be used for replication. This property is not updatable",
              args: {
                name: "replication-mode",
                suggestions: ["Full", "Shallow"],
              },
            },
            {
              name: "--storage-account-type",
              description:
                "The default storage account type to be used per region. To set regional storage account types, use --target-regions",
              args: {
                name: "storage-account-type",
                suggestions: ["Premium_LRS", "Standard_LRS", "Standard_ZRS"],
              },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--target-edge-zone-encryption", "--zone-encryption"],
              description:
                "Space-separated list of customer managed keys for encrypting the OS and data disks in the gallery artifact for each region. Format for each edge zone: ,<os_des>,,<lun1_des>,,<lun2_des>",
              args: { name: "target-edge-zone-encryption" },
            },
            {
              name: "--target-edge-zones",
              description:
                'Space-separated list of regions, edge zones, replica counts and storage types. Use =[=][=] to optionally set the replica count and/or storage account type for each region. If a replica count is not specified, the default replica count will be used. If a storage account type is not specified, the default storage account type will be used. If "--target-edge-zones None" is specified, the target extended locations will be cleared',
              args: { name: "target-edge-zones" },
            },
            {
              name: "--target-region-cvm-encryption",
              description:
                "Space-separated list of customer managed key for Confidential VM encrypting the OS disk in the gallery artifact for each region. Format for each region: <os_cvm_encryption_type>,<os_cvm_des>. The valid values for os_cvm_encryption_type are EncryptedVMGuestStateOnlyWithPmk, EncryptedWithPmk, EncryptedWithCmk",
              args: { name: "target-region-cvm-encryption" },
            },
            {
              name: "--target-region-encryption",
              description:
                'Space-separated list of customer managed keys for encrypting the OS and data disks in the gallery artifact for each region. Format for each region: <os_des>,<lun1>,<lun1_des>,<lun2>,<lun2_des>. Use "null" as a placeholder',
              args: { name: "target-region-encryption" },
            },
            {
              name: "--target-regions",
              description:
                "Space-separated list of regions and their replica counts. Use <region>[=<replica count>][=<storage account type>] to optionally set the replica count and/or storage account type for each region. If a replica count is not specified, the default replica count will be used. If a storage account type is not specified, the default storage account type will be used",
              args: { name: "target-regions" },
            },
            {
              name: "--virtual-machine",
              description: "Resource id of VM source",
              args: { name: "virtual-machine" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a gallery image version",
          options: [
            {
              name: [
                "--gallery-image-definition",
                "--gallery-image-name",
                "-i",
              ],
              description:
                "The name of the gallery image definition in which the Image Version resides",
              args: { name: "gallery-image-definition" },
            },
            {
              name: [
                "--gallery-image-version-name",
                "--gallery-image-version",
                "-e",
              ],
              description:
                "The name of the gallery image version to be deleted",
              args: { name: "gallery-image-version-name" },
            },
            {
              name: ["--gallery-name", "-r"],
              description:
                "The name of the Shared Image Gallery in which the Image Definition resides",
              args: { name: "gallery-name" },
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
              args: {
                name: "no-wait",
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
          description:
            "List gallery image versions in a gallery image definition",
          options: [
            {
              name: [
                "--gallery-image-definition",
                "--gallery-image-name",
                "-i",
              ],
              description: "Gallery image definition",
              args: { name: "gallery-image-definition" },
              isRequired: true,
            },
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
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
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
          ],
        },
        {
          name: "list-community",
          description: "List VM Image Versions in a gallery community",
          options: [
            {
              name: ["--gallery-image-definition", "-i"],
              description:
                "The name of the community gallery image definition from which the image versions are to be listed",
              args: { name: "gallery-image-definition" },
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
              name: "--marker",
              description:
                "A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. If specified, this generator will begin returning results from the point where the previous generator stopped",
              args: { name: "marker" },
            },
            {
              name: "--public-gallery-name",
              description: "The public name of community gallery",
              args: { name: "public-gallery-name" },
            },
            {
              name: "--show-next-marker",
              description: "Show nextMarker in result when specified",
              args: { name: "show-next-marker" },
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
          name: "list-shared",
          description:
            "List VM Image Versions in a gallery shared directly to your subscription or tenant",
          options: [
            {
              name: ["--gallery-image-definition", "-i"],
              description:
                "The name of the Shared Gallery Image Definition from which the Image Versions are to be listed",
              args: { name: "gallery-image-definition" },
            },
            {
              name: "--gallery-unique-name",
              description: "The unique name of the Shared Gallery",
              args: { name: "gallery-unique-name" },
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
              name: "--marker",
              description:
                "A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. If specified, this generator will begin returning results from the point where the previous generator stopped",
              args: { name: "marker" },
            },
            {
              name: "--shared-to",
              description:
                "The query parameter to decide what shared galleries to fetch when doing listing operations. If not specified, list by subscription id",
              args: { name: "shared-to", suggestions: ["tenant"] },
            },
            {
              name: "--show-next-marker",
              description: "Show nextMarker in result when specified",
              args: { name: "show-next-marker" },
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
          description: "Retrieves information about a gallery image version",
          options: [
            {
              name: ["--gallery-image-definition", "-i"],
              description: "Gallery image definition",
              args: { name: "gallery-image-definition" },
              isRequired: true,
            },
            {
              name: ["--gallery-image-version", "-e"],
              description:
                "Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. <MajorVersion>.<MinorVersion>.<Patch>",
              args: { name: "gallery-image-version" },
              isRequired: true,
            },
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
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
                "The expand expression to apply on the operation, e.g. 'ReplicationStatus'",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "show-community",
          description: "Get a community gallery image version",
          options: [
            {
              name: [
                "--gallery-image-definition",
                "--gallery-image-name",
                "-i",
              ],
              description:
                "The name of the community gallery image definition from which the image versions are to be listed",
              args: { name: "gallery-image-definition" },
            },
            {
              name: [
                "--gallery-image-version-name",
                "--gallery-image-version",
                "-e",
              ],
              description:
                "Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. <MajorVersion>.<MinorVersion>.<Patch>",
              args: { name: "gallery-image-version-name" },
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
              name: "--public-gallery-name",
              description: "The public name of the community gallery",
              args: { name: "public-gallery-name" },
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
          name: "show-shared",
          description:
            "Get an image version in a gallery shared directly to your subscription or tenant",
          options: [
            {
              name: [
                "--gallery-image-definition",
                "--gallery-image-name",
                "-i",
              ],
              description:
                "The name of the Shared Gallery Image Definition from which the Image Versions are to be listed",
              args: { name: "gallery-image-definition" },
            },
            {
              name: [
                "--gallery-image-version-name",
                "--gallery-image-version",
                "-e",
              ],
              description:
                "The name of the gallery image version to be created. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format:",
              args: { name: "gallery-image-version-name" },
            },
            {
              name: "--gallery-unique-name",
              description: "The unique name of the Shared Gallery",
              args: { name: "gallery-unique-name" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "undelete",
          description: "Restore soft deleted Image Version",
          options: [
            {
              name: ["--gallery-image-definition", "-i"],
              description: "Gallery image definition",
              args: { name: "gallery-image-definition" },
              isRequired: true,
            },
            {
              name: ["--gallery-image-version", "-e"],
              description:
                "Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. <MajorVersion>.<MinorVersion>.<Patch>",
              args: { name: "gallery-image-version" },
              isRequired: true,
            },
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
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
              name: "--allow-replicated-location-deletion",
              description:
                "Indicate whether or not removing this gallery image version from replicated regions is allowed",
              args: {
                name: "allow-replicated-location-deletion",
                suggestions: ["false", "true"],
              },
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
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a share image version",
          options: [
            {
              name: ["--gallery-image-definition", "-i"],
              description: "Gallery image definition",
              args: { name: "gallery-image-definition" },
              isRequired: true,
            },
            {
              name: ["--gallery-image-version", "-e"],
              description:
                "Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. <MajorVersion>.<MinorVersion>.<Patch>",
              args: { name: "gallery-image-version" },
              isRequired: true,
            },
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
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
              name: "--allow-replicated-location-deletion",
              description:
                "Indicate whether or not removing this gallery image version from replicated regions is allowed",
              args: {
                name: "allow-replicated-location-deletion",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--replica-count",
              description:
                "The default number of replicas to be created per region. To set regional replication counts, use --target-regions",
              args: { name: "replica-count" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--target-edge-zones",
              description:
                'Space-separated list of regions, edge zones, replica counts and storage types. Use =[=][=] to optionally set the replica count and/or storage account type for each region. If a replica count is not specified, the default replica count will be used. If a storage account type is not specified, the default storage account type will be used. If "--target-edge-zones None" is specified, the target extended locations will be cleared',
              args: { name: "target-edge-zones" },
            },
            {
              name: "--target-regions",
              description:
                "Space-separated list of regions and their replica counts. Use <region>[=<replica count>][=<storage account type>] to optionally set the replica count and/or storage account type for each region. If a replica count is not specified, the default replica count will be used. If a storage account type is not specified, the default storage account type will be used",
              args: { name: "target-regions" },
            },
          ],
        },
        {
          name: "wait",
          description: "Wait for image version related operation",
          options: [
            {
              name: ["--gallery-image-definition", "-i"],
              description: "Gallery image definition",
              args: { name: "gallery-image-definition" },
              isRequired: true,
            },
            {
              name: ["--gallery-image-version", "-e"],
              description:
                "Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. <MajorVersion>.<MinorVersion>.<Patch>",
              args: { name: "gallery-image-version" },
              isRequired: true,
            },
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
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
              name: "--expand",
              description:
                "The expand expression to apply on the operation. 'ReplicationStatus' Default value is None",
              args: { name: "expand" },
            },
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
      name: "share",
      description: "Manage gallery sharing profile",
      subcommands: [
        {
          name: "add",
          description: "Share gallery with subscriptions and tenants",
          options: [
            {
              name: ["--gallery-name", "-r"],
              description: "The name of the Shared Image Gallery",
              args: { name: "gallery-name" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--subscription-ids",
              description: "A list of subscription ids to share the gallery",
              args: { name: "subscription-ids" },
            },
            {
              name: "--tenant-ids",
              description: "A list of tenant ids to share the gallery",
              args: { name: "tenant-ids" },
            },
          ],
        },
        {
          name: "enable-community",
          description: "Allow to share gallery to the community",
          options: [
            {
              name: ["--gallery-name", "-r"],
              description: "The name of the Shared Image Gallery",
              args: { name: "gallery-name" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--subscription-ids",
              description: "A list of subscription ids to share the gallery",
              args: { name: "subscription-ids" },
            },
            {
              name: "--tenant-ids",
              description: "A list of tenant ids to share the gallery",
              args: { name: "tenant-ids" },
            },
          ],
        },
        {
          name: "remove",
          description: "Stop sharing gallery with a subscription or tenant",
          options: [
            {
              name: ["--gallery-name", "-r"],
              description: "The name of the Shared Image Gallery",
              args: { name: "gallery-name" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--subscription-ids",
              description: "A list of subscription ids to share the gallery",
              args: { name: "subscription-ids" },
            },
            {
              name: "--tenant-ids",
              description: "A list of tenant ids to share the gallery",
              args: { name: "tenant-ids" },
            },
          ],
        },
        {
          name: "reset",
          description:
            "Disable gallery from being shared with subscription or tenant",
          options: [
            {
              name: ["--gallery-name", "-r"],
              description: "The name of the Shared Image Gallery",
              args: { name: "gallery-name" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of a shared gallery is met",
          options: [
            {
              name: ["--gallery-name", "-r"],
              description: "Gallery name",
              args: { name: "gallery-name" },
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
  ],
};

export default completion;
