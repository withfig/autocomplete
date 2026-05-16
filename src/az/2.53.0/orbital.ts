const completion: Fig.Spec = {
  name: "orbital",
  description: "Azure Orbital Ground Station as-a-Service (GSaaS)",
  subcommands: [
    {
      name: "available-ground-station",
      description: "Ground stations available to schedule contacts",
      subcommands: [
        {
          name: "list",
          description: "List available ground stations",
          options: [
            {
              name: "--capability",
              description: "Ground Station Capability",
              args: {
                name: "capability",
                suggestions: ["Communication", "EarthObservation"],
              },
            },
          ],
        },
        {
          name: "show",
          description: "Get the specified available ground station",
          options: [
            {
              name: ["--ground-station-name", "--name", "-n"],
              description: "Ground Station name",
              args: { name: "ground-station-name" },
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
      ],
    },
    {
      name: "contact-profile",
      description: "Contact profile is a reusable contact configuration",
      subcommands: [
        {
          name: "create",
          description: "Create a contact profile",
          options: [
            {
              name: ["--contact-profile-name", "--name", "-n"],
              description: "Contact Profile name",
              args: { name: "contact-profile-name" },
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
              name: ["--auto-tracking-configuration", "--auto-tracking"],
              description: "Auto-tracking configuration",
              args: {
                name: "auto-tracking-configuration",
                suggestions: ["disabled", "sBand", "xBand"],
              },
            },
            {
              name: "--event-hub-uri",
              description:
                "ARM resource identifier of the Event Hub used for telemetry. Requires granting Orbital Resource Provider the rights to send telemetry into the hub",
              args: { name: "event-hub-uri" },
            },
            {
              name: "--links",
              description:
                'Links of the Contact Profile. Describes RF links, modem processing, and IP endpoints. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "links" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: ["--minimum-elevation-degrees", "--min-elevation"],
              description:
                "Minimum viable elevation for the contact in decimal degrees. Used for listing the available contacts with a spacecraft at a given ground station",
              args: { name: "minimum-elevation-degrees" },
            },
            {
              name: [
                "--minimum-viable-contact-duration",
                "--min-viable-duration",
              ],
              description:
                "Minimum viable contact duration in ISO 8601 format. Used for listing the available contacts with a spacecraft at a given ground station",
              args: { name: "minimum-viable-contact-duration" },
            },
            {
              name: "--network-configuration",
              description:
                'Network configuration of customer virtual network. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "network-configuration" },
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a specified contact profile resource",
          options: [
            {
              name: ["--contact-profile-name", "--name", "-n"],
              description: "Contact Profile name",
              args: { name: "contact-profile-name" },
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
          description: "List contact profiles",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--skiptoken",
              description:
                "An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls",
              args: { name: "skiptoken" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the specified contact Profile in a specified resource group",
          options: [
            {
              name: ["--contact-profile-name", "--name", "-n"],
              description: "Contact Profile name",
              args: { name: "contact-profile-name" },
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
          description: "Update contact profile",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--auto-tracking-configuration", "--auto-tracking"],
              description: "Auto-tracking configuration",
              args: {
                name: "auto-tracking-configuration",
                suggestions: ["disabled", "sBand", "xBand"],
              },
            },
            {
              name: ["--contact-profile-name", "--name", "-n"],
              description: "Contact Profile name",
              args: { name: "contact-profile-name" },
            },
            {
              name: "--event-hub-uri",
              description:
                "ARM resource identifier of the Event Hub used for telemetry. Requires granting Orbital Resource Provider the rights to send telemetry into the hub",
              args: { name: "event-hub-uri" },
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
              name: "--links",
              description:
                'Links of the Contact Profile. Describes RF links, modem processing, and IP endpoints. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "links" },
            },
            {
              name: ["--location", "-l"],
              description: "The geo-location where the resource lives",
              args: { name: "location" },
            },
            {
              name: ["--minimum-elevation-degrees", "--min-elevation"],
              description:
                "Minimum viable elevation for the contact in decimal degrees. Used for listing the available contacts with a spacecraft at a given ground station",
              args: { name: "minimum-elevation-degrees" },
            },
            {
              name: [
                "--minimum-viable-contact-duration",
                "--min-viable-duration",
              ],
              description:
                "Minimum viable contact duration in ISO 8601 format. Used for listing the available contacts with a spacecraft at a given ground station",
              args: { name: "minimum-viable-contact-duration" },
            },
            {
              name: "--network-configuration",
              description:
                'Network configuration of customer virtual network. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "network-configuration" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--contact-profile-name", "--name", "-n"],
              description: "Contact Profile name",
              args: { name: "contact-profile-name" },
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
      ],
    },
    {
      name: "operation-result",
      description: "Result of a long running async operation",
      subcommands: [
        {
          name: "show",
          description: "Return operation results",
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
              name: ["--operation-id", "--name", "-n"],
              description: "The ID of an ongoing async operation",
              args: { name: "operation-id" },
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
      name: "spacecraft",
      description:
        "Satellites must be registered as a spacecraft with Azure Orbital to establish contacts with the satellite",
      subcommands: [
        {
          name: "create",
          description: "Create a spacecraft resource",
          options: [
            {
              name: ["--spacecraft-name", "--name", "-n"],
              description: "Spacecraft ID",
              args: { name: "spacecraft-name" },
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
              name: "--links",
              description:
                'Immutable list of Spacecraft links. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "links" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
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
              name: "--norad-id",
              description: "NORAD ID of the spacecraft",
              args: { name: "norad-id" },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--title-line",
              description: "Title line of the two-line element set (TLE)",
              args: { name: "title-line" },
            },
            {
              name: "--tle-line1",
              description: "Line 1 of the two-line element set (TLE)",
              args: { name: "tle-line1" },
            },
            {
              name: "--tle-line2",
              description: "Line 2 of the two-line element set (TLE)",
              args: { name: "tle-line2" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a specified spacecraft resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--spacecraft-name", "--name", "-n"],
              description: "Spacecraft ID",
              args: { name: "spacecraft-name" },
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
          description: "List spacecrafts",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--skiptoken",
              description:
                "An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls",
              args: { name: "skiptoken" },
            },
          ],
        },
        {
          name: "list-available-contact",
          description:
            "List available contacts. A contact is available if the spacecraft is visible from the ground station for more than the minimum viable contact duration provided in the contact profile",
          options: [
            {
              name: "--contact-profile",
              description:
                'The reference to the contact profile resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "contact-profile" },
              isRequired: true,
            },
            {
              name: "--end-time",
              description: "End time of a contact (ISO 8601 UTC standard)",
              args: { name: "end-time" },
              isRequired: true,
            },
            {
              name: "--ground-station-name",
              description: "Name of Azure Ground Station",
              args: { name: "ground-station-name" },
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
              name: "--spacecraft-name",
              description: "Spacecraft ID",
              args: { name: "spacecraft-name" },
              isRequired: true,
            },
            {
              name: "--start-time",
              description: "Start time of a contact (ISO 8601 UTC standard)",
              args: { name: "start-time" },
              isRequired: true,
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
          ],
        },
        {
          name: "show",
          description:
            "Get the specified spacecraft in a specified resource group",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--spacecraft-name", "--name", "-n"],
              description: "Spacecraft ID",
              args: { name: "spacecraft-name" },
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
          description: "Update spacecraft",
          options: [
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
              description: "The geo-location where the resource lives",
              args: { name: "location" },
            },
            {
              name: ["--spacecraft-name", "--name", "-n"],
              description: "Spacecraft ID",
              args: { name: "spacecraft-name" },
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
              name: "--norad-id",
              description: "NORAD ID of the spacecraft",
              args: { name: "norad-id" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--title-line",
              description: "Title line of the two-line element set (TLE)",
              args: { name: "title-line" },
            },
            {
              name: "--tle-line1",
              description: "Line 1 of the two-line element set (TLE)",
              args: { name: "tle-line1" },
            },
            {
              name: "--tle-line2",
              description: "Line 2 of the two-line element set (TLE)",
              args: { name: "tle-line2" },
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
              name: ["--spacecraft-name", "--name", "-n"],
              description: "Spacecraft ID",
              args: { name: "spacecraft-name" },
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
          name: "contact",
          description:
            "At the scheduled time, the selected ground station will contact the spacecraft and start data retrieval/delivery using the contact profile",
          subcommands: [
            {
              name: "create",
              description: "Create a contact",
              options: [
                {
                  name: ["--contact-name", "--name", "-n"],
                  description: "Contact name",
                  args: { name: "contact-name" },
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
                  name: "--spacecraft-name",
                  description: "Spacecraft ID",
                  args: { name: "spacecraft-name" },
                  isRequired: true,
                },
                {
                  name: "--contact-profile",
                  description:
                    'The reference to the contact profile resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "contact-profile" },
                },
                {
                  name: "--ground-station-name",
                  description: "Azure Ground Station name",
                  args: { name: "ground-station-name" },
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
                  name: "--reservation-end-time",
                  description:
                    "Reservation end time of a contact (ISO 8601 UTC standard)",
                  args: { name: "reservation-end-time" },
                },
                {
                  name: "--reservation-start-time",
                  description:
                    "Reservation start time of a contact (ISO 8601 UTC standard)",
                  args: { name: "reservation-start-time" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a specified contact",
              options: [
                {
                  name: ["--contact-name", "--name", "-n"],
                  description: "Contact name",
                  args: { name: "contact-name" },
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
                  name: "--spacecraft-name",
                  description: "Spacecraft ID",
                  args: { name: "spacecraft-name" },
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
              description: "List contacts by spacecraft",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--spacecraft-name",
                  description: "Spacecraft ID",
                  args: { name: "spacecraft-name" },
                  isRequired: true,
                },
                {
                  name: "--skiptoken",
                  description:
                    "An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls",
                  args: { name: "skiptoken" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the specified contact in a specified resource group",
              options: [
                {
                  name: ["--contact-name", "--name", "-n"],
                  description: "Contact name",
                  args: { name: "contact-name" },
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
                  name: "--spacecraft-name",
                  description: "Spacecraft ID",
                  args: { name: "spacecraft-name" },
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
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--contact-name", "--name", "-n"],
                  description: "Contact name",
                  args: { name: "contact-name" },
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
                  name: "--spacecraft-name",
                  description: "Spacecraft ID",
                  args: { name: "spacecraft-name" },
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
  ],
};

export default completion;
