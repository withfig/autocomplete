const completion: Fig.Spec = {
  name: "bot",
  description: "Manage Microsoft Azure Bot Service",
  subcommands: [
    {
      name: "authsetting",
      description: "Manage OAuth connection settings on a bot",
      subcommands: [
        {
          name: "create",
          description: "Create an OAuth connection setting on a bot",
          options: [
            {
              name: "--client-id",
              description:
                "Client ID associated with the service provider setting",
              args: { name: "client-id" },
              isRequired: true,
            },
            {
              name: "--client-secret",
              description:
                "Client secret associated with the service provider setting",
              args: { name: "client-secret" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--provider-scope-string",
              description:
                "The scope string associated with the service provider setting.The string should be delimited as needed for the service provider",
              args: { name: "provider-scope-string" },
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
              name: "--service",
              description:
                "Name of the service provider. For a list of all service providers, use az bot connection listserviceproviders",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: ["--setting-name", "-c"],
              description: "Name of the oauth connection setting",
              args: { name: "setting-name" },
              isRequired: true,
            },
            {
              name: "--parameters",
              description:
                "Parameter values for service provider parameters. Usage: --parameters key=value key1=value1",
              args: { name: "parameters" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an OAuth connection setting on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: ["--setting-name", "-c"],
              description: "Name of the oauth connection setting",
              args: { name: "setting-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "Show all OAuth connection settings on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: "list-providers",
          description:
            "List details for all service providers available for creating OAuth connection settings",
          options: [
            {
              name: "--provider-name",
              description: "Service provider name for which to fetch details",
              args: { name: "provider-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of an OAuth connection setting on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: ["--setting-name", "-c"],
              description: "Name of the oauth connection setting",
              args: { name: "setting-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Create a new v4 SDK bot",
      options: [
        {
          name: "--app-type",
          description:
            'Microsoft App Type for the bot. Possible values include: "UserAssignedMSI", "SingleTenant", "MultiTenant"',
          args: { name: "app-type" },
          isRequired: true,
        },
        {
          name: "--appid",
          description:
            "The Microsoft account ID (MSA ID) to be used with the bot",
          args: { name: "appid" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description:
            "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: ["--cmk-key-vault-key-url", "--cmk"],
          description:
            "The key vault key url to enable Customer Managed Keys encryption",
          args: { name: "cmk-key-vault-key-url" },
        },
        {
          name: ["--description", "-d"],
          description: "The description of the bot",
          args: { name: "description" },
        },
        {
          name: "--display-name",
          description:
            "The display name of the bot. If not specified, defaults to the name of the bot",
          args: { name: "display-name" },
        },
        {
          name: ["--endpoint", "-e"],
          description: "The messaging endpoint of the bot",
          args: { name: "endpoint" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--msi-resource-id",
          description: "Microsoft App Managed Identity Resource Id for the bot",
          args: { name: "msi-resource-id" },
        },
        {
          name: "--sku",
          description: "The Sku of the bot",
          args: { name: "sku", suggestions: ["F0", "S1"] },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--tenant-id",
          description: "Microsoft App Tenant Id for the bot",
          args: { name: "tenant-id" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an existing bot",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
      name: "download",
      description: "Download an existing bot",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: "--save-path",
          description: "The directory to download bot code to",
          args: { name: "save-path" },
        },
      ],
    },
    {
      name: "prepare-deploy",
      description:
        "Add scripts/config files for publishing with az webapp deployment",
      options: [
        {
          name: "--lang",
          description: "The language or runtime of the bot",
          args: {
            name: "lang",
            suggestions: ["Csharp", "Javascript", "Typescript"],
          },
          isRequired: true,
        },
        {
          name: "--code-dir",
          description:
            "The directory to place the generated deployment files in. Defaults to the current directory the command is called from",
          args: { name: "code-dir" },
        },
        {
          name: "--proj-file-path",
          description: "The path to the .csproj file relative to --code-dir",
          args: { name: "proj-file-path" },
        },
      ],
    },
    {
      name: "prepare-publish",
      description:
        "(Maintenance mode) Add scripts to your local source code directory to be able to publish back using az bot publish for v3 SDK bots",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--proj-file-path",
          description:
            'Path to the start up project file name. (E.g. "./EchoBotWithCounter.csproj") Required only for C#',
          args: { name: "proj-file-path" },
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
          name: "--sln-name",
          description:
            "Name of the start up solution file name. Required only for C#",
          args: { name: "sln-name" },
          isRequired: true,
        },
        {
          name: "--code-dir",
          description: "The directory to download deployment scripts to",
          args: { name: "code-dir" },
        },
        {
          name: ["--version", "-v"],
          description:
            "The Microsoft Bot Builder SDK version to be used in the bot template that will be created",
          args: { name: "version", suggestions: ["v3", "v4"] },
        },
      ],
    },
    {
      name: "publish",
      description: "Publish to a bot's associated app service",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: "--code-dir",
          description: "The directory to upload bot code from",
          args: { name: "code-dir" },
        },
        {
          name: "--keep-node-modules",
          description:
            "Keep node_modules folder and do not run npm install on the App Service. This can greatly speed up publish commands for Node.js SDK bots",
          args: { name: "keep-node-modules", suggestions: ["false", "true"] },
        },
        {
          name: "--proj-file-path",
          description:
            'Path to the start up project file name. (E.g. "./EchoBotWithCounter.csproj")',
          args: { name: "proj-file-path" },
        },
        {
          name: ["--timeout", "-t"],
          description:
            "Configurable timeout in seconds for checking the status of deployment",
          args: { name: "timeout" },
        },
        {
          name: ["--version", "-v"],
          description: "The Microsoft Bot Builder SDK version of the bot",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "show",
      description: "Get an existing bot",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: "--msbot",
          description: "Show the output as JSON compatible with a .bot file",
          args: { name: "msbot", suggestions: ["false", "true"] },
        },
      ],
    },
    {
      name: "update",
      description: "Update an existing bot",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: ["--app-insights-api-key", "--ai-api-key"],
          description:
            "Azure Application Insights API Key used to read bot analytics data. Provide a key if you want to view analytics about your bot in the Analytics blade",
          args: { name: "app-insights-api-key" },
        },
        {
          name: ["--app-insights-app-id", "--ai-app-id"],
          description:
            "Azure Application Insights Application ID used to read bot analytics data. Provide an Id if you want to view analytics about your bot in the Analytics blade",
          args: { name: "app-insights-app-id" },
        },
        {
          name: ["--app-insights-key", "--ai-key"],
          description:
            "Azure Application Insights Key used to write bot analytics data. Provide a key if you want to receive bot analytics",
          args: { name: "app-insights-key" },
        },
        {
          name: ["--cmk-key-vault-key-url", "--cmk"],
          description:
            "The key vault key url to enable Customer Managed Keys encryption",
          args: { name: "cmk-key-vault-key-url" },
        },
        {
          name: "--cmk-off",
          description: "Set encryption to Microsoft-Managed Keys",
          args: { name: "cmk-off" },
        },
        {
          name: "--description",
          description: "The bot's new description",
          args: { name: "description" },
        },
        {
          name: ["--display-name", "-d"],
          description: "The bot's new display name",
          args: { name: "display-name" },
        },
        {
          name: ["--endpoint", "-e"],
          description:
            'The new endpoint of the bot. Must start with "https://"',
          args: { name: "endpoint" },
        },
        {
          name: "--icon-url",
          description:
            "Icon URL for bot avatar. Accepts PNG files with file size limit of 30KB",
          args: { name: "icon-url" },
        },
        {
          name: "--sku",
          description: "The Sku of the bot",
          args: { name: "sku", suggestions: ["F0", "S1"] },
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
      name: "directline",
      description: "Manage the Directline Channel on a bot",
      subcommands: [
        {
          name: "create",
          description:
            "Create the DirectLine Channel on a bot with only v3 protocol enabled",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--add-disabled",
              description: "Add the channel in a disabled state",
              args: { name: "add-disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--disablev1",
              description:
                "If true, v1 protocol will be disabled on the channel",
              args: { name: "disablev1", suggestions: ["false", "true"] },
            },
            {
              name: "--disablev3",
              description:
                "If true, v3 protocol will be disabled on the channel",
              args: { name: "disablev3", suggestions: ["false", "true"] },
            },
            {
              name: "--enable-enhanced-auth",
              description:
                "If true, enables enhanced authentication features. Must be true for --trusted-origins parameters to work",
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--site-name", "-s"],
              description: "Name of the Directline channel site",
              args: { name: "site-name" },
            },
            {
              name: "--trusted-origins",
              description:
                "Space separated Trusted Origins URLs (must use HTTPS) e.g. --trusted-origins https://mybotsite1.azurewebsites.net https://mybotsite2.azurewebsites.net",
              args: { name: "trusted-origins" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Directline Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: "show",
          description: "Get details of the Directline Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--with-secrets",
              description: "Show secrets in response for the channel",
              args: { name: "with-secrets", suggestions: ["false", "true"] },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the DirectLine Channel on a bot with only v3 protocol enabled",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--add-disabled",
              description: "Add the channel in a disabled state",
              args: { name: "add-disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--disablev1",
              description:
                "If true, v1 protocol will be disabled on the channel",
              args: { name: "disablev1", suggestions: ["false", "true"] },
            },
            {
              name: "--disablev3",
              description:
                "If true, v3 protocol will be disabled on the channel",
              args: { name: "disablev3", suggestions: ["false", "true"] },
            },
            {
              name: "--enable-enhanced-auth",
              description:
                "If true, enables enhanced authentication features. Must be true for --trusted-origins parameters to work",
            },
            {
              name: ["--site-name", "-s"],
              description: "Name of the Directline channel site",
              args: { name: "site-name" },
            },
            {
              name: "--trusted-origins",
              description:
                "Space separated Trusted Origins URLs (must use HTTPS) e.g. --trusted-origins https://mybotsite1.azurewebsites.net https://mybotsite2.azurewebsites.net",
              args: { name: "trusted-origins" },
            },
          ],
        },
      ],
    },
    {
      name: "email",
      description: "Manage the email Channel on a bot",
      subcommands: [
        {
          name: "create",
          description: "Create the Email Channel on a bot",
          options: [
            {
              name: ["--email-address", "-a"],
              description: "The email address for the bot",
              args: { name: "email-address" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--password", "-p"],
              description: "The email password for the bot",
              args: { name: "password" },
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
              name: "--add-disabled",
              description: "Add the channel in a disabled state",
              args: { name: "add-disabled", suggestions: ["false", "true"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the email Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: "show",
          description: "Get details of the email Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--with-secrets",
              description: "Show secrets in response for the channel",
              args: { name: "with-secrets", suggestions: ["false", "true"] },
            },
          ],
        },
      ],
    },
    {
      name: "facebook",
      description: "Manage the Facebook Channel on a bot",
      subcommands: [
        {
          name: "create",
          description: "Create the Facebook Channel on a bot",
          options: [
            {
              name: "--appid",
              description: "The Facebook application id",
              args: { name: "appid" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--page-id",
              description:
                "Page ID of the Facebook page to be used for the bot",
              args: { name: "page-id" },
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
              name: "--secret",
              description: "The Facebook application secret",
              args: { name: "secret" },
              isRequired: true,
            },
            {
              name: "--token",
              description: "The Facebook application access token",
              args: { name: "token" },
              isRequired: true,
            },
            {
              name: "--add-disabled",
              description: "Add the channel in a disabled state",
              args: { name: "add-disabled", suggestions: ["false", "true"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Facebook Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: "show",
          description: "Get details of the Facebook Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--with-secrets",
              description: "Show secrets in response for the channel",
              args: { name: "with-secrets", suggestions: ["false", "true"] },
            },
          ],
        },
      ],
    },
    {
      name: "kik",
      description: "Manage the Kik Channel on a bot",
      subcommands: [
        {
          name: "create",
          description: "Create the Kik Channel on a bot",
          options: [
            {
              name: "--key",
              description: "The API key for the Kik account",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: ["--user-name", "-u"],
              description: "Kik user name",
              args: { name: "user-name" },
              isRequired: true,
            },
            {
              name: "--add-disabled",
              description: "Add the channel in a disabled state",
              args: { name: "add-disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--is-validated",
              description:
                "Whether or not the Kik account has been validated for use with the bot",
              args: { name: "is-validated", suggestions: ["false", "true"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Kik Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: "show",
          description: "Get details of the Kik Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--with-secrets",
              description: "Show secrets in response for the channel",
              args: { name: "with-secrets", suggestions: ["false", "true"] },
            },
          ],
        },
      ],
    },
    {
      name: "msteams",
      description: "Manage the Microsoft Teams Channel on a bot",
      subcommands: [
        {
          name: "create",
          description: "Create the Microsoft Teams Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--add-disabled",
              description: "Add the channel in a disabled state",
              args: { name: "add-disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--calling-web-hook",
              description: "The calling web hook to use on Microsoft Teams",
              args: { name: "calling-web-hook" },
            },
            {
              name: "--enable-calling",
              description: "Enable calling on Microsoft Teams",
              args: { name: "enable-calling", suggestions: ["false", "true"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Microsoft Teams Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: "show",
          description: "Get details of the Microsoft Teams Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--with-secrets",
              description: "Show secrets in response for the channel",
              args: { name: "with-secrets", suggestions: ["false", "true"] },
            },
          ],
        },
      ],
    },
    {
      name: "skype",
      description: "Manage the Skype Channel on a bot",
      subcommands: [
        {
          name: "create",
          description: "Create the Skype Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--add-disabled",
              description: "Add the channel in a disabled state",
              args: { name: "add-disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--calling-web-hook",
              description: "The calling web hook to use on Skype",
              args: { name: "calling-web-hook" },
            },
            {
              name: "--enable-calling",
              description: "Enable calling on Skype",
              args: { name: "enable-calling", suggestions: ["false", "true"] },
            },
            {
              name: "--enable-groups",
              description: "Enable groups on Skype",
              args: { name: "enable-groups", suggestions: ["false", "true"] },
            },
            {
              name: "--enable-media-cards",
              description: "Enable media cards on Skype",
              args: {
                name: "enable-media-cards",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-messaging",
              description: "Enable messaging on Skype",
              args: {
                name: "enable-messaging",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-screen-sharing",
              description: "Enable screen sharing on Skype",
              args: {
                name: "enable-screen-sharing",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-video",
              description: "Enable video on Skype",
              args: { name: "enable-video", suggestions: ["false", "true"] },
            },
            {
              name: "--groups-mode",
              description: "Select groups mode on Skype",
              args: { name: "groups-mode" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Skype Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: "show",
          description: "Get details of the Skype Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--with-secrets",
              description: "Show secrets in response for the channel",
              args: { name: "with-secrets", suggestions: ["false", "true"] },
            },
          ],
        },
      ],
    },
    {
      name: "slack",
      description: "Manage the Slack Channel on a bot",
      subcommands: [
        {
          name: "create",
          description: "Create the Slack Channel on a bot",
          options: [
            {
              name: "--client-id",
              description: "The client ID from Slack",
              args: { name: "client-id" },
              isRequired: true,
            },
            {
              name: "--client-secret",
              description: "The client secret from Slack",
              args: { name: "client-secret" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--verification-token",
              description: "The verification token from Slack",
              args: { name: "verification-token" },
              isRequired: true,
            },
            {
              name: "--add-disabled",
              description: "Add the channel in a disabled state",
              args: { name: "add-disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--landing-page-url",
              description: "The landing page url to redirect to after login",
              args: { name: "landing-page-url" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Slack Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: "show",
          description: "Get details of the Slack Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--with-secrets",
              description: "Show secrets in response for the channel",
              args: { name: "with-secrets", suggestions: ["false", "true"] },
            },
          ],
        },
      ],
    },
    {
      name: "sms",
      description: "Manage the SMS Channel on a bot",
      subcommands: [
        {
          name: "create",
          description: "Create the SMS Channel on a bot",
          options: [
            {
              name: "--account-sid",
              description: "The account SID for the Twilio account",
              args: { name: "account-sid" },
              isRequired: true,
            },
            {
              name: "--auth-token",
              description: "The token token for the Twilio account",
              args: { name: "auth-token" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--phone",
              description: "The phone number for the Twilio account",
              args: { name: "phone" },
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
              name: "--add-disabled",
              description: "Add the channel in a disabled state",
              args: { name: "add-disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--is-validated",
              description:
                "Whether or not the Twilio account has been validated for use with the bot",
              args: { name: "is-validated", suggestions: ["false", "true"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the SMS Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: "show",
          description: "Get details of the SMS Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--with-secrets",
              description: "Show secrets in response for the channel",
              args: { name: "with-secrets", suggestions: ["false", "true"] },
            },
          ],
        },
      ],
    },
    {
      name: "telegram",
      description: "Manage the Telegram Channel on a bot",
      subcommands: [
        {
          name: "create",
          description: "Create the Telegram Channel on a bot",
          options: [
            {
              name: "--access-token",
              description: "The access token for the Telegram account",
              args: { name: "access-token" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--add-disabled",
              description: "Add the channel in a disabled state",
              args: { name: "add-disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--is-validated",
              description:
                "Whether or not the Telegram account has been validated for use with the bot",
              args: { name: "is-validated", suggestions: ["false", "true"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Telegram Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
          name: "show",
          description: "Get details of the Telegram Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--with-secrets",
              description: "Show secrets in response for the channel",
              args: { name: "with-secrets", suggestions: ["false", "true"] },
            },
          ],
        },
      ],
    },
    {
      name: "webchat",
      description: "Manage the Webchat Channel on a bot",
      subcommands: [
        {
          name: "show",
          description: "Get details of the Webchat Channel on a bot",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _",
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
              name: "--with-secrets",
              description: "Show secrets in response for the channel",
              args: { name: "with-secrets", suggestions: ["false", "true"] },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
