const completion: Fig.Spec = {
  name: "logicapp",
  description: "Manage logic apps",
  subcommands: [
    {
      name: "config",
      description: "Configure a logic app",
      subcommands: [
        {
          name: "appsettings",
          description: "Configure logic app settings",
          subcommands: [
            {
              name: "delete",
              description: "Delete a logic app's settings",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the logic app",
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
                  name: "--setting-names",
                  description: "Space-separated app setting names",
                  args: { name: "setting-names" },
                  isRequired: true,
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "list",
              description: "Show settings for a logic app",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the logic app",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "set",
              description: "Update a logic app's settings",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the logic app",
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
                  name: "--settings",
                  description:
                    "Space-separated app settings in a format of <name>=<value>",
                  args: { name: "settings" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--slot-settings",
                  description:
                    "Space-separated slot app settings in a format of <name>=<value>",
                  args: { name: "slot-settings" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Create a logic app",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the new logic app",
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
          name: ["--storage-account", "-s"],
          description:
            "Provide a string value of a Storage Account in the provided Resource Group. Or Resource ID of a Storage Account in a different Resource Group",
          args: { name: "storage-account" },
          isRequired: true,
        },
        {
          name: "--app-insights",
          description:
            "Name of the existing App Insights project to be added to the logic app. Must be in the same resource group",
          args: { name: "app-insights" },
        },
        {
          name: "--app-insights-key",
          description: "Instrumentation key of App Insights to be added",
          args: { name: "app-insights-key" },
        },
        {
          name: ["--deployment-container-image-name", "-i"],
          description:
            "Container image name from Docker Hub, e.g. publisher/image-name:tag",
          args: { name: "deployment-container-image-name" },
        },
        {
          name: ["--deployment-local-git", "-l"],
          description: "Enable local git",
          args: { name: "deployment-local-git" },
        },
        {
          name: ["--deployment-source-branch", "-b"],
          description: "The branch to deploy",
          args: { name: "deployment-source-branch" },
        },
        {
          name: ["--deployment-source-url", "-u"],
          description: "Git repository URL to link with manual integration",
          args: { name: "deployment-source-url" },
        },
        {
          name: "--disable-app-insights",
          description:
            "Disable creating application insights resource during logicapp create. No logs will be available",
          args: {
            name: "disable-app-insights",
            suggestions: ["false", "true"],
          },
        },
        {
          name: ["--docker-registry-server-password", "-w"],
          description:
            "The container registry server password. Required for private registries",
          args: { name: "docker-registry-server-password" },
        },
        {
          name: ["--docker-registry-server-user", "-d"],
          description: "The container registry server username",
          args: { name: "docker-registry-server-user" },
        },
        {
          name: ["--functions-version", "-v"],
          description: "The functions version for logic app",
          args: { name: "functions-version", suggestions: ["2", "3", "4"] },
        },
        {
          name: "--https-only",
          description:
            "Redirect all traffic made to an app using HTTP to HTTPS",
        },
        {
          name: ["--plan", "-p"],
          description:
            "Name or resource id of the logicapp app service plan. Use 'appservice plan create' to get one. If using an App Service plan from a different resource group, the full resource id must be used and not the plan name",
          args: { name: "plan" },
        },
        {
          name: "--runtime-version",
          description: "The runtime version for logic app",
          args: { name: "runtime-version", suggestions: ["~14", "~16", "~18"] },
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
      description: "Delete a logic app",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the logic app",
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
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "list",
      description: "List logic apps",
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
      name: "restart",
      description: "Restart a logic app",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the logic app",
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
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
      ],
    },
    {
      name: "scale",
      description: "Scale a logic app",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the logic app",
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
          name: "--max-instances",
          description:
            "The maximum number of instances this logic app can scale out to under load",
          args: { name: "max-instances" },
        },
        {
          name: "--min-instances",
          description:
            "The number of instances that are always ready and warm for this logic app",
          args: { name: "min-instances" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
      ],
    },
    {
      name: "show",
      description: "Get the details of a logic app",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the logic app",
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
      name: "start",
      description: "Start a logic app",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the logic app",
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
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
      ],
    },
    {
      name: "stop",
      description: "Stop a logic app",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the logic app",
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
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
      ],
    },
    {
      name: "update",
      description: "Update a logic app",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the logic app",
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
          name: "--plan",
          description:
            "The name or resource id of the plan to update the logicapp with",
          args: { name: "plan" },
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
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
      ],
    },
    {
      name: "deployment",
      description: "Manage logic app deployments",
      subcommands: [
        {
          name: "source",
          description: "Manage logicapp app deployment via source control",
          subcommands: [
            {
              name: "config-zip",
              description:
                "Perform deployment using the kudu zip push deployment for a logic app",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the logic app",
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
                  name: "--src",
                  description: "A zip file path for deployment",
                  args: { name: "src" },
                  isRequired: true,
                },
                {
                  name: "--build-remote",
                  description: "Enable remote build during deployment",
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: ["--timeout", "-t"],
                  description:
                    "Configurable timeout in seconds for checking the status of deployment",
                  args: { name: "timeout" },
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
