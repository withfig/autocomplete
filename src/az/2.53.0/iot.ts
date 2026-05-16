const completion: Fig.Spec = {
  name: "iot",
  description: "Manage Internet of Things (IoT) assets",
  subcommands: [
    {
      name: "central",
      description:
        "Manage IoT Central resources.\n\n\t\tIoT Central is an IoT application platform that reduces the burden and cost of developing, managing, and maintaining enterprise-grade IoT solutions. Choosing to build with IoT Central gives you the opportunity to focus time, money, and energy on transforming your business with IoT data, rather than just maintaining and updating a complex and continually evolving IoT infrastructure.\nIoT Central documentation is available at https://aka.ms/iotcentral-documentation\nComprehensive IoT Central data-plane functionality is available in the Azure IoT CLI Extension. For more info on how to install visit https://github.com/Azure/azure-iot-cli-extension",
      subcommands: [
        {
          name: "query",
          description:
            "Query device telemetry or property data with IoT Central Query Language",
          options: [
            {
              name: ["--app-id", "-n"],
              description:
                'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: ["--query-string", "--qs"],
              description:
                "Query clause to retrieve telemetry or property data",
              args: { name: "query-string" },
              isRequired: true,
            },
            {
              name: ["--api-version", "--av"],
              description:
                "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
              args: {
                name: "api-version",
                suggestions: ["2022-06-30-preview"],
              },
            },
            {
              name: ["--central-dns-suffix", "--central-api-uri"],
              description:
                "The IoT Central DNS suffix associated with your application",
              args: { name: "central-dns-suffix" },
            },
            {
              name: "--token",
              description:
                "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
              args: { name: "token" },
            },
          ],
        },
        {
          name: "api-token",
          description:
            "Manage API tokens for your IoT Central application.\n\n\t\tIoT Central allows you to generate and manage API tokens to be used to access the IoT Central API. More information about APIs can be found at https://aka.ms/iotcentraldocsapi",
          subcommands: [
            {
              name: "create",
              description:
                "Generate an API token associated with your IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--role", "-r"],
                  description:
                    "The role that will be associated with this token or user. You can specify one of the built-in roles, or specify the role ID of a custom role. See more at https://aka.ms/iotcentral-customrolesdocs",
                  args: { name: "role" },
                  isRequired: true,
                },
                {
                  name: ["--token-id", "--tkid"],
                  description:
                    "The IoT Central ID associated with this token, [0-9a-zA-Z-] allowed, max length limit to 40. Specify an ID that you'll then use when modifying or deleting this token later via the CLI or API",
                  args: { name: "token-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--organization-id", "--org-id"],
                  description:
                    "The ID of the organization for the token role assignment. Only available for api-version == 1.1-preview",
                  args: { name: "organization-id" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an API token associated with your IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--token-id", "--tkid"],
                  description:
                    "The IoT Central ID associated with this token, [0-9a-zA-Z-] allowed, max length limit to 40. Specify an ID that you'll then use when modifying or deleting this token later via the CLI or API",
                  args: { name: "token-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Get the list of API tokens associated with your IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get details for an API token associated with your IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--token-id", "--tkid"],
                  description:
                    "The IoT Central ID associated with this token, [0-9a-zA-Z-] allowed, max length limit to 40. Specify an ID that you'll then use when modifying or deleting this token later via the CLI or API",
                  args: { name: "token-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
        {
          name: "app",
          description:
            "Manage IoT Central applications.\n\n\t\tCreate, delete, view, and update your IoT Central apps",
          subcommands: [
            {
              name: "create",
              description: "Create an IoT Central application",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Give your IoT Central app a unique name so you can find it later.This will be used as the resource name in the Azure portal and CLI.Avoid special characters - instead, use lower case letters (a-z), numbers (0-9), and dashes (-)",
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
                  name: ["--subdomain", "-s"],
                  description:
                    "Enter a unique URL. Your app will be accessible via https://.azureiotcentral.com/. Avoid special characters - instead, use lower case letters (a-z), numbers (0-9), and dashes (-)",
                  args: { name: "subdomain" },
                  isRequired: true,
                },
                {
                  name: ["--display-name", "-d"],
                  description:
                    "Custom display name for the IoT Central app. This will be used in the IoT Central application manager to help you identify your app. Default value is the resource name",
                  args: { name: "display-name" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Where your app's info and resources are stored. We will default to the location of the target resource group. See documentation for a full list of supported locations",
                  args: { name: "location" },
                },
                {
                  name: "--mi-system-assigned",
                  description:
                    "Provide this flag to use system assigned identity",
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--sku", "-p"],
                  description: "Pricing plan for IoT Central application",
                  args: { name: "sku", suggestions: ["ST0", "ST1", "ST2"] },
                },
                {
                  name: ["--template", "-t"],
                  description:
                    'IoT Central application template name. Default is "Custom application". See documentation for a list of available templates',
                  args: { name: "template" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an IoT Central application",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "IoT Central application name",
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
              description: "List IoT Central applications",
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
              description: "Get the details of an IoT Central application",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "IoT Central application name",
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
              description: "Update metadata for an IoT Central application",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "IoT Central application name",
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
              name: "identity",
              description:
                "Manage IoT Central application identities.\n\n\t\tAssign, remove, and show your IoT Central application identities",
              subcommands: [
                {
                  name: "assign",
                  description:
                    "Assign managed identities to an IoT Central application",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "IoT Central application name",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--system-assigned",
                      description:
                        "Provide this flag to refer to the system-assigned identity",
                    },
                  ],
                },
                {
                  name: "remove",
                  description:
                    "Remove managed identities from an IoT Central application",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "IoT Central application name",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--system-assigned",
                      description:
                        "Provide this flag to refer to the system-assigned identity",
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show the identity properties of an IoT Central application",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "IoT Central application name",
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
              ],
            },
            {
              name: "private-endpoint-connection",
              description:
                "Manage private endpoint connection of IoT Central application",
              subcommands: [
                {
                  name: "approve",
                  description:
                    "Approve a private endpoint connection request for an IoT Central application",
                  options: [
                    {
                      name: "--account-name",
                      description:
                        "Name of the IoT Central application. Required if --id is not specified",
                      args: { name: "account-name" },
                    },
                    {
                      name: "--description",
                      description: "Comments for the approve operation",
                      args: { name: "description" },
                    },
                    {
                      name: "--id",
                      description:
                        "The ID of the private endpoint connection associated with the IoT Central application. If --account-name --resource-group/-g and --name/-n are specified, this should be omitted",
                      args: { name: "id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "The name of the private endpoint connection associated with IoT Central application. Required if --id is not specified",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "The resource group name of specified IoT Central application. Required if --id is not specified",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a private endpoint connection for an IoT Central application",
                  options: [
                    {
                      name: "--account-name",
                      description:
                        "Name of the IoT Central application. Required if --id is not specified",
                      args: { name: "account-name" },
                    },
                    {
                      name: "--id",
                      description:
                        "The ID of the private endpoint connection associated with the IoT Central application. If --account-name --resource-group/-g and --name/-n are specified, this should be omitted",
                      args: { name: "id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "The name of the private endpoint connection associated with IoT Central application. Required if --id is not specified",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "The resource group name of specified IoT Central application. Required if --id is not specified",
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
                  description:
                    "List all of the private endpoint connections for an IoT Central application",
                  options: [
                    {
                      name: "--account-name",
                      description:
                        "Name of the IoT Central application. Required if --id is not specified",
                      args: { name: "account-name" },
                    },
                    {
                      name: "--id",
                      description: "ID of the resource",
                      args: { name: "id" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. If provided, --name must be provided too",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "reject",
                  description:
                    "Reject a private endpoint connection request for an IoT Central application",
                  options: [
                    {
                      name: "--account-name",
                      description:
                        "Name of the IoT Central application. Required if --id is not specified",
                      args: { name: "account-name" },
                    },
                    {
                      name: "--description",
                      description: "Comments for the reject operation",
                      args: { name: "description" },
                    },
                    {
                      name: "--id",
                      description:
                        "The ID of the private endpoint connection associated with the IoT Central application. If --account-name --resource-group/-g and --name/-n are specified, this should be omitted",
                      args: { name: "id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "The name of the private endpoint connection associated with IoT Central application. Required if --id is not specified",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "The resource group name of specified IoT Central application. Required if --id is not specified",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show details of a private endpoint connection request for an IoT Central application",
                  options: [
                    {
                      name: "--account-name",
                      description:
                        "Name of the IoT Central application. Required if --id is not specified",
                      args: { name: "account-name" },
                    },
                    {
                      name: "--id",
                      description:
                        "The ID of the private endpoint connection associated with the IoT Central application. If --account-name --resource-group/-g and --name/-n are specified, this should be omitted",
                      args: { name: "id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "The name of the private endpoint connection associated with IoT Central application. Required if --id is not specified",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "The resource group name of specified IoT Central application. Required if --id is not specified",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
            {
              name: "private-link-resource",
              description:
                "Manage an IoT Central application private link resources",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List all of the IoT Central application private link resources in the specified account",
                  options: [
                    {
                      name: "--id",
                      description: "ID of the resource",
                      args: { name: "id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "IoT Central application name",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. If provided, --name and --type must be provided too",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--type",
                      description:
                        "Type of the resource. If provided, --name and --resource-group must be provided too",
                      args: { name: "type" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show details of a private link resource in the specified IoT Central application",
                  options: [
                    {
                      name: "--group-id",
                      description:
                        "Name of the private link resource. If provided, --name and --type must be provided too",
                      args: { name: "group-id" },
                    },
                    {
                      name: "--id",
                      description: "ID of the resource",
                      args: { name: "id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the resource. If provided, --type and --resource-group must be provided too",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. If provided, --name and --type must be provided too",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "device",
          description: "Manage and configure IoT Central devices",
          subcommands: [
            {
              name: "compute-device-key",
              description: "Generate a derived device SAS key",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--primary-key", "--pk"],
                  description:
                    "The primary symmetric shared access key stored in base64 format",
                  args: { name: "primary-key" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "create",
              description: "Create a device in IoT Central",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "Unique identifier for the device. A case-sensitive string (up to 128 characters long) of ASCII 7-bit alphanumeric characters plus certain special characters: - . + % _ # * ? ! ( ) , : = @ $ '",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--device-name",
                  description: "Human readable device name. Example: Fridge",
                  args: { name: "device-name" },
                },
                {
                  name: ["--organizations", "--orgs"],
                  description:
                    "Assign the device to the specified organizations. Comma separated list of organization ids. Minimum supported version: 1.1-preview",
                  args: { name: "organizations" },
                },
                {
                  name: "--simulated",
                  description:
                    "Add this flag if you would like IoT Central to set this up as a simulated device. --template is required if this is true",
                },
                {
                  name: "--template",
                  description:
                    "Central template id. Example: dtmi:ojpkindbz:modelDefinition:iild3tm_uo",
                  args: { name: "template" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a device from IoT Central",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Get the list of devices for an IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--edge-only", "-e"],
                  description: "Only list IoT Edge devices",
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "list-components",
              description: "List the components present in a device",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--module-name", "--mn"],
                  description: "The name of the device module",
                  args: { name: "module-name" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "list-modules",
              description: "List the modules present in a device",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "manual-failback",
              description:
                "Reverts the previously executed failover command by moving the device back to it's original IoT Hub",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "manual-failover",
              description:
                "Execute a manual failover of device across multiple IoT Hubs to validate device firmware's ability to reconnect using DPS to a different IoT Hub",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
                {
                  name: ["--ttl-minutes", "--ttl"],
                  description:
                    "A positive integer. TTL in minutes to move device back to the original hub.Has default value in backend. See documentation on what the latest backend default time to live valueby visiting https://github.com/iot-for-all/iot-central-high-availability-clients#readme",
                  args: { name: "ttl-minutes" },
                },
              ],
            },
            {
              name: "registration-info",
              description:
                "Get registration info on device(s) from IoT Central",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a device from IoT Central",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "show-credentials",
              description: "Get device credentials from IoT Central",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a device in IoT Central",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--device-name",
                  description: "Human readable device name. Example: Fridge",
                  args: { name: "device-name" },
                },
                {
                  name: "--enable",
                  description:
                    "Add this flag if you would like IoT Central to enable or disable the device",
                  args: { name: "enable", suggestions: ["false", "true"] },
                },
                {
                  name: ["--organizations", "--orgs"],
                  description:
                    "Assign the device to the specified organizations. Comma separated list of organization ids. Minimum supported version: 1.1-preview",
                  args: { name: "organizations" },
                },
                {
                  name: "--simulated",
                  description:
                    "Add this flag if you would like IoT Central to set this up as a simulated device. --template is required if this is true",
                  args: { name: "simulated", suggestions: ["false", "true"] },
                },
                {
                  name: "--template",
                  description:
                    "Central template id. Example: dtmi:ojpkindbz:modelDefinition:iild3tm_uo",
                  args: { name: "template" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "attestation",
              description:
                "Manage and configure IoT Central device attestation",
              subcommands: [
                {
                  name: "create",
                  description: "Create an individual device attestation",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--content", "-k"],
                      description:
                        "Configuration for request. Provide path to JSON file or raw stringified JSON. [File Path Example: ./path/to/file.json] [Stringified JSON Example: {'a': 'b'}]",
                      args: { name: "content" },
                      isRequired: true,
                    },
                    {
                      name: ["--device-id", "-d"],
                      description:
                        "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview", "2022-07-31"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Remove an individual device attestation",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--device-id", "-d"],
                      description:
                        "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview", "2022-07-31"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Get device attestation",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--device-id", "-d"],
                      description:
                        "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview", "2022-07-31"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update an individual device attestation via patch",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--content", "-k"],
                      description:
                        "Configuration for request. Provide path to JSON file or raw stringified JSON. [File Path Example: ./path/to/file.json] [Stringified JSON Example: {'a': 'b'}]",
                      args: { name: "content" },
                      isRequired: true,
                    },
                    {
                      name: ["--device-id", "-d"],
                      description:
                        "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview", "2022-07-31"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
              ],
            },
            {
              name: "c2d-message",
              description: "Run device cloud-to-device messaging commands",
              subcommands: [
                {
                  name: "purge",
                  description:
                    "Purges the cloud-to-device message queue for the target device",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--device-id", "-d"],
                      description:
                        "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
              ],
            },
            {
              name: "command",
              description: "Run device commands",
              subcommands: [
                {
                  name: "history",
                  description:
                    "Get the details for the latest command request and response sent to the device",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--command-name", "--cn"],
                      description:
                        "The command name as specified in the device template. Command name could be different from the Display Name of the command",
                      args: { name: "command-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--device-id", "-d"],
                      description:
                        "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview", "2022-07-31"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: ["--component-name", "--co"],
                      description: "The name of the device component",
                      args: { name: "component-name" },
                    },
                    {
                      name: ["--interface-id", "-i"],
                      description:
                        "The name of the interface/component as specified in the device template.You can find it by navigating to Device Template and view the interface/component identity under the corresponding device capability",
                      args: { name: "interface-id" },
                    },
                    {
                      name: ["--module-name", "--mn"],
                      description: "The name of the device module",
                      args: { name: "module-name" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
                {
                  name: "run",
                  description:
                    "Run a command on a device and view associated response. Does NOT monitor property updates that the command may perform",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--command-name", "--cn"],
                      description:
                        "The command name as specified in the device template. Command name could be different from the Display Name of the command",
                      args: { name: "command-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--content", "-k"],
                      description:
                        "Configuration for request. Provide path to JSON file or raw stringified JSON. [File Path Example: ./path/to/file.json] [Stringified JSON Example: {'a': 'b'}]",
                      args: { name: "content" },
                      isRequired: true,
                    },
                    {
                      name: ["--device-id", "-d"],
                      description:
                        "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview", "2022-07-31"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: ["--component-name", "--co"],
                      description: "The name of the device component",
                      args: { name: "component-name" },
                    },
                    {
                      name: ["--interface-id", "-i"],
                      description:
                        "The name of the interface/component as specified in the device template.You can find it by navigating to Device Template and view the interface/component identity under the corresponding device capability",
                      args: { name: "interface-id" },
                    },
                    {
                      name: ["--module-name", "--mn"],
                      description: "The name of the device module",
                      args: { name: "module-name" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
              ],
            },
            {
              name: "edge",
              description: "Manage and configure IoT Central edge devices",
              subcommands: [
                {
                  name: "children",
                  description: "Manage IoT Edge device children devices",
                  subcommands: [
                    {
                      name: "add",
                      description:
                        "Add devices as children to a target edge device",
                      options: [
                        {
                          name: ["--app-id", "-n"],
                          description:
                            'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                          args: { name: "app-id" },
                          isRequired: true,
                        },
                        {
                          name: "--children-ids",
                          description:
                            "Space-separated list of children device ids",
                          args: { name: "children-ids" },
                          isRequired: true,
                        },
                        {
                          name: ["--device-id", "-d"],
                          description:
                            "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                          args: { name: "device-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--api-version", "--av"],
                          description:
                            "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                          args: {
                            name: "api-version",
                            suggestions: ["2022-06-30-preview", "2022-07-31"],
                          },
                        },
                        {
                          name: ["--central-dns-suffix", "--central-api-uri"],
                          description:
                            "The IoT Central DNS suffix associated with your application",
                          args: { name: "central-dns-suffix" },
                        },
                        {
                          name: "--token",
                          description:
                            "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                          args: { name: "token" },
                        },
                      ],
                    },
                    {
                      name: "list",
                      description:
                        "Get the list of children of an IoT Edge device",
                      options: [
                        {
                          name: ["--app-id", "-n"],
                          description:
                            'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                          args: { name: "app-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--device-id", "-d"],
                          description:
                            "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                          args: { name: "device-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--api-version", "--av"],
                          description:
                            "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                          args: {
                            name: "api-version",
                            suggestions: ["2022-06-30-preview", "2022-07-31"],
                          },
                        },
                        {
                          name: ["--central-dns-suffix", "--central-api-uri"],
                          description:
                            "The IoT Central DNS suffix associated with your application",
                          args: { name: "central-dns-suffix" },
                        },
                        {
                          name: "--token",
                          description:
                            "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                          args: { name: "token" },
                        },
                      ],
                    },
                    {
                      name: "remove",
                      description:
                        "Remove child devices from a target edge device",
                      options: [
                        {
                          name: ["--app-id", "-n"],
                          description:
                            'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                          args: { name: "app-id" },
                          isRequired: true,
                        },
                        {
                          name: "--children-ids",
                          description:
                            "Space-separated list of children device ids",
                          args: { name: "children-ids" },
                          isRequired: true,
                        },
                        {
                          name: ["--device-id", "-d"],
                          description:
                            "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                          args: { name: "device-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--api-version", "--av"],
                          description:
                            "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                          args: {
                            name: "api-version",
                            suggestions: ["2022-06-30-preview", "2022-07-31"],
                          },
                        },
                        {
                          name: ["--central-dns-suffix", "--central-api-uri"],
                          description:
                            "The IoT Central DNS suffix associated with your application",
                          args: { name: "central-dns-suffix" },
                        },
                        {
                          name: "--token",
                          description:
                            "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                          args: { name: "token" },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "manifest",
                  description: "Manage IoT Edge device manifests",
                  subcommands: [
                    {
                      name: "show",
                      description:
                        "Get the deployment manifest associated to the specified IoT Edge device",
                      options: [
                        {
                          name: ["--app-id", "-n"],
                          description:
                            'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                          args: { name: "app-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--device-id", "-d"],
                          description:
                            "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                          args: { name: "device-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--central-dns-suffix", "--central-api-uri"],
                          description:
                            "The IoT Central DNS suffix associated with your application",
                          args: { name: "central-dns-suffix" },
                        },
                        {
                          name: "--token",
                          description:
                            "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                          args: { name: "token" },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "module",
                  description: "Manage IoT Edge device modules",
                  subcommands: [
                    {
                      name: "list",
                      description:
                        "Get the list of modules in an IoT Edge device",
                      options: [
                        {
                          name: ["--app-id", "-n"],
                          description:
                            'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                          args: { name: "app-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--device-id", "-d"],
                          description:
                            "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                          args: { name: "device-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--central-dns-suffix", "--central-api-uri"],
                          description:
                            "The IoT Central DNS suffix associated with your application",
                          args: { name: "central-dns-suffix" },
                        },
                        {
                          name: "--token",
                          description:
                            "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                          args: { name: "token" },
                        },
                      ],
                    },
                    {
                      name: "restart",
                      description: "Restart a module in an IoT Edge device",
                      options: [
                        {
                          name: ["--app-id", "-n"],
                          description:
                            'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                          args: { name: "app-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--device-id", "-d"],
                          description:
                            "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                          args: { name: "device-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--module-id", "-m"],
                          description: "The module ID of the target module",
                          args: { name: "module-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--central-dns-suffix", "--central-api-uri"],
                          description:
                            "The IoT Central DNS suffix associated with your application",
                          args: { name: "central-dns-suffix" },
                        },
                        {
                          name: "--token",
                          description:
                            "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                          args: { name: "token" },
                        },
                      ],
                    },
                    {
                      name: "show",
                      description: "Get a module in an IoT Edge device",
                      options: [
                        {
                          name: ["--app-id", "-n"],
                          description:
                            'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                          args: { name: "app-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--device-id", "-d"],
                          description:
                            "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                          args: { name: "device-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--module-id", "-m"],
                          description: "The module ID of the target module",
                          args: { name: "module-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--central-dns-suffix", "--central-api-uri"],
                          description:
                            "The IoT Central DNS suffix associated with your application",
                          args: { name: "central-dns-suffix" },
                        },
                        {
                          name: "--token",
                          description:
                            "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                          args: { name: "token" },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "telemetry",
              description: "Query IoT Central device last telemetry value",
              subcommands: [
                {
                  name: "show",
                  description: "Get the last telemetry value from a device",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--device-id", "-d"],
                      description:
                        "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: "--telemetry-name--tn",
                      description: "The name of the device telemetry",
                      args: { name: "telemetry-name--tn" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview", "2022-07-31"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: ["--component-name", "--co"],
                      description: "The name of the device component",
                      args: { name: "component-name" },
                    },
                    {
                      name: ["--module-name", "--mn"],
                      description: "The name of the device module",
                      args: { name: "module-name" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
              ],
            },
            {
              name: "twin",
              description: "Manage IoT Central device twins",
              subcommands: [
                {
                  name: "replace",
                  description:
                    "Replace writable property values of a device, a device component or a device module or a device module component",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--content", "-k"],
                      description:
                        "Configuration for request. Provide path to JSON file or raw stringified JSON. [File Path Example: ./path/to/file.json] [Stringified JSON Example: {'a': 'b'}]",
                      args: { name: "content" },
                      isRequired: true,
                    },
                    {
                      name: ["--device-id", "-d"],
                      description:
                        "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview", "2022-07-31"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: ["--component-name", "--co"],
                      description: "The name of the device component",
                      args: { name: "component-name" },
                    },
                    {
                      name: ["--module-name", "--mn"],
                      description: "The name of the device module",
                      args: { name: "module-name" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get all property values of a device, a device component, a device module or a device module component",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--device-id", "-d"],
                      description:
                        "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview", "2022-07-31"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: ["--component-name", "--co"],
                      description: "The name of the device component",
                      args: { name: "component-name" },
                    },
                    {
                      name: ["--module-name", "--mn"],
                      description: "The name of the device module",
                      args: { name: "module-name" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update writable property values of a device, a device component, a device module or a device module component",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--content", "-k"],
                      description:
                        "Configuration for request. Provide path to JSON file or raw stringified JSON. [File Path Example: ./path/to/file.json] [Stringified JSON Example: {'a': 'b'}]",
                      args: { name: "content" },
                      isRequired: true,
                    },
                    {
                      name: ["--device-id", "-d"],
                      description:
                        "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview", "2022-07-31"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: ["--component-name", "--co"],
                      description: "The name of the device component",
                      args: { name: "component-name" },
                    },
                    {
                      name: ["--module-name", "--mn"],
                      description: "The name of the device module",
                      args: { name: "module-name" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "device-group",
          description: "Manage and configure IoT Central device groups",
          subcommands: [
            {
              name: "create",
              description: "Create a device group",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: "--device-group-id",
                  description: "Unique ID of the device group",
                  args: { name: "device-group-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "Display name of the device group",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--filter",
                  description:
                    'Query defining which devices should be in this group.[Query filter Example: SELECT * FROM devices WHERE $template = "dtmi:modelDefinition:dtdlv2"]',
                  args: { name: "filter" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--description",
                  description: "Short summary of device group",
                  args: { name: "description" },
                },
                {
                  name: "--organizations",
                  description: "List of organization IDs of the device group",
                  args: { name: "organizations" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a device group",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: "--device-group-id",
                  description: "Unique ID of the device group",
                  args: { name: "device-group-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Get the list of device groups for an IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the device group  by ID",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: "--device-group-id",
                  description: "Unique ID of the device group",
                  args: { name: "device-group-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "update",
              description: "Update an existing device group",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: "--device-group-id",
                  description: "Unique ID of the device group",
                  args: { name: "device-group-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--description",
                  description: "Short summary of device group",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "Display name of the device group",
                  args: { name: "display-name" },
                },
                {
                  name: "--filter",
                  description:
                    'Query defining which devices should be in this group.[Query filter Example: SELECT * FROM devices WHERE $template = "dtmi:modelDefinition:dtdlv2"]',
                  args: { name: "filter" },
                },
                {
                  name: "--organizations",
                  description: "List of organization IDs of the device group",
                  args: { name: "organizations" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
        {
          name: "device-template",
          description: "Manage and configure IoT Central device templates",
          subcommands: [
            {
              name: "create",
              description: "Create a device template in IoT Central",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--content", "-k"],
                  description:
                    "The device template definition. Provide path to JSON file or raw stringified JSON. [File Path Example: ./path/to/file.json] [Example of stringified JSON: {}]. The request body must contain CapabilityModel",
                  args: { name: "content" },
                  isRequired: true,
                },
                {
                  name: ["--device-template-id", "--dtid"],
                  description:
                    "Digital Twin Model Identifier of the device template. Learn more at https://aka.ms/iotcentraldtmi",
                  args: { name: "device-template-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a device template from IoT Central",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-template-id", "--dtid"],
                  description:
                    "The ID of the target device template. Example: somedevicetemplate",
                  args: { name: "device-template-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Get the list of device templates for an IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--compact", "-c"],
                  description:
                    "Show templates in compact mode. For each template will only display id, name and model types",
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a device template from IoT Central",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-template-id", "--dtid"],
                  description:
                    "The ID of the target device template. Example: somedevicetemplate",
                  args: { name: "device-template-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a device template in IoT Central",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--content", "-k"],
                  description:
                    "The device template definition. Provide path to JSON file or raw stringified JSON. [File Path Example: ./path/to/file.json] [Example of stringified JSON: {}]. The request body must contain CapabilityModel",
                  args: { name: "content" },
                  isRequired: true,
                },
                {
                  name: ["--device-template-id", "--dtid"],
                  description:
                    "The ID of the target device template. Example: somedevicetemplate",
                  args: { name: "device-template-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
        {
          name: "diagnostics",
          description: "Perform application and device level diagnostics",
          subcommands: [
            {
              name: "monitor-events",
              description:
                "View device telemetry messages sent to the IoT Central app",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--consumer-group", "--cg", "-c"],
                  description:
                    "Specify the consumer group to use when connecting to event hub endpoint",
                  args: { name: "consumer-group" },
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                },
                {
                  name: ["--enqueued-time", "--et", "-e"],
                  description:
                    'Indicates the time that should be used as a starting point to read messages from the partitions. Units are milliseconds since unix epoch. If no time is indicated "now" is used',
                  args: { name: "enqueued-time" },
                },
                {
                  name: ["--module-id", "-m"],
                  description:
                    "The IoT Edge Module ID if the device type is IoT Edge",
                  args: { name: "module-id" },
                },
                {
                  name: ["--properties", "--props", "-p"],
                  description:
                    "Indicate key message properties to output. sys = system properties, app = application properties, anno = annotations",
                  args: {
                    name: "properties",
                    suggestions: ["all", "anno", "app", "sys"],
                  },
                },
                {
                  name: ["--repair", "-r"],
                  description:
                    "Reinstall uamqp dependency compatible with extension version. Default: false",
                },
                {
                  name: ["--timeout", "--to", "-t"],
                  description:
                    "Maximum seconds to maintain connection without receiving message. Use 0 for infinity",
                  args: { name: "timeout" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
                },
              ],
            },
            {
              name: "monitor-properties",
              description:
                "View desired and reported properties sent to/from the IoT Central app",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "registration-summary",
              description:
                "View the registration summary of all the devices in an app",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "validate-messages",
              description:
                "Validate messages sent to the IoT Hub for an IoT Central app",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--consumer-group", "--cg", "-c"],
                  description:
                    "Specify the consumer group to use when connecting to event hub endpoint",
                  args: { name: "consumer-group" },
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                },
                {
                  name: ["--duration", "--dr"],
                  description:
                    "Maximum duration to receive messages from target device before terminating connection.Use 0 for infinity",
                  args: { name: "duration" },
                },
                {
                  name: ["--enqueued-time", "--et", "-e"],
                  description:
                    'Indicates the time that should be used as a starting point to read messages from the partitions. Units are milliseconds since unix epoch. If no time is indicated "now" is used',
                  args: { name: "enqueued-time" },
                },
                {
                  name: ["--max-messages", "--mm"],
                  description:
                    "Maximum number of messages to recieve from target device before terminating connection.Use 0 for infinity",
                  args: { name: "max-messages" },
                },
                {
                  name: "--minimum-severity",
                  description:
                    "Minimum severity of issue required for reporting",
                  args: {
                    name: "minimum-severity",
                    suggestions: ["error", "info", "warning"],
                  },
                },
                {
                  name: ["--module-id", "-m"],
                  description:
                    "The IoT Edge Module ID if the device type is IoT Edge",
                  args: { name: "module-id" },
                },
                {
                  name: ["--properties", "--props", "-p"],
                  description:
                    "Indicate key message properties to output. sys = system properties, app = application properties, anno = annotations",
                  args: {
                    name: "properties",
                    suggestions: ["all", "anno", "app", "sys"],
                  },
                },
                {
                  name: ["--repair", "-r"],
                  description:
                    "Reinstall uamqp dependency compatible with extension version. Default: false",
                },
                {
                  name: "--style",
                  description:
                    "Indicate output stylescroll = deliver errors as they arrive, json = summarize results as json, csv = summarize results as csv",
                  args: {
                    name: "style",
                    suggestions: ["csv", "json", "scroll"],
                  },
                },
                {
                  name: ["--timeout", "--to", "-t"],
                  description:
                    "Maximum seconds to maintain connection without receiving message. Use 0 for infinity",
                  args: { name: "timeout" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
                },
              ],
            },
            {
              name: "validate-properties",
              description:
                "Validate reported properties sent to the IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description:
                    "The device ID of the target device.You can find the device ID by, clicking on the Connect button on the Device Details page",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--minimum-severity",
                  description:
                    "Minimum severity of issue required for reporting",
                  args: {
                    name: "minimum-severity",
                    suggestions: ["error", "info", "warning"],
                  },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
        {
          name: "enrollment-group",
          description: "Manage and configure IoT Central enrollment group",
          subcommands: [
            {
              name: "create",
              description: "Create an enrollment group",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--attestation-type", "--at"],
                  description:
                    "The attestation mechanism for the enrollment group. Only 'x509' or 'symmetricKey' are allowed.By default 'symmetricKey' will be used for attestation",
                  args: {
                    name: "attestation-type",
                    suggestions: ["symmetricKey", "x509"],
                  },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "Display name of the enrollment group",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: ["--group-id", "--id"],
                  description: "Unique identifier for the enrollment group",
                  args: { name: "group-id" },
                  isRequired: true,
                },
                {
                  name: "--type",
                  description: "Type of devices that connect through the group",
                  args: { name: "type" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--certificate-path", "--cp"],
                  description:
                    "The path to the file containing the primary certificate",
                  args: { name: "certificate-path" },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--primary-key", "--pk"],
                  description:
                    "The primary symmetric shared access key stored in base64 format",
                  args: { name: "primary-key" },
                },
                {
                  name: ["--provisioning-status", "--ps"],
                  description:
                    "Whether the devices using the group are allowed to connect to IoT Central. True or False",
                  args: {
                    name: "provisioning-status",
                    suggestions: ["disabled", "enabled"],
                  },
                },
                {
                  name: ["--secondary-certificate-path", "--scp"],
                  description:
                    "The path to the file containing the secondary certificate",
                  args: { name: "secondary-certificate-path" },
                },
                {
                  name: ["--secondary-key", "--sk"],
                  description:
                    "The secondary symmetric shared access key stored in base64 format",
                  args: { name: "secondary-key" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an enrollment group by ID",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--group-id", "--id"],
                  description: "Unique identifier for the enrollment group",
                  args: { name: "group-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "generate-verification-code",
              description:
                "Generate a verification code for the primary or secondary x509 certificate of an enrollment group",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--group-id", "--id"],
                  description: "Unique identifier for the enrollment group",
                  args: { name: "group-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--certificate-entry", "--entry"],
                  description:
                    "Entry type of the x509 certificate which only allows 'primary' and 'secondary'",
                  args: {
                    name: "certificate-entry",
                    suggestions: ["primary", "secondary"],
                  },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Get the list of enrollment groups in an application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get details about an enrollment group by ID",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--group-id", "--id"],
                  description: "Unique identifier for the enrollment group",
                  args: { name: "group-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--certificate-entry", "--entry"],
                  description:
                    "Entry type of the x509 certificate which only allows 'primary' and 'secondary'",
                  args: {
                    name: "certificate-entry",
                    suggestions: ["primary", "secondary"],
                  },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "update",
              description: "Update an enrollment group",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--group-id", "--id"],
                  description: "Unique identifier for the enrollment group",
                  args: { name: "group-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--certificate-entry", "--entry"],
                  description:
                    "Entry type of the x509 certificate which only allows 'primary' and 'secondary'",
                  args: {
                    name: "certificate-entry",
                    suggestions: ["primary", "secondary"],
                  },
                },
                {
                  name: ["--certificate-path", "--cp"],
                  description:
                    "The path to the file containing the primary certificate",
                  args: { name: "certificate-path" },
                },
                {
                  name: "--display-name",
                  description: "Display name of the enrollment group",
                  args: { name: "display-name" },
                },
                {
                  name: "--etag",
                  description:
                    "ETag used to prevent conflict in enrollment group updates",
                  args: { name: "etag" },
                },
                {
                  name: ["--provisioning-status", "--ps"],
                  description:
                    "Whether the devices using the group are allowed to connect to IoT Central. True or False",
                  args: {
                    name: "provisioning-status",
                    suggestions: ["disabled", "enabled"],
                  },
                },
                {
                  name: "--remove-x509",
                  description:
                    "Whether the x509 certificate should be removed from the group. True or False",
                  args: { name: "remove-x509", suggestions: ["false", "true"] },
                },
                {
                  name: ["--secondary-certificate-path", "--scp"],
                  description:
                    "The path to the file containing the secondary certificate",
                  args: { name: "secondary-certificate-path" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
                {
                  name: "--type",
                  description: "Type of devices that connect through the group",
                  args: { name: "type" },
                },
              ],
            },
            {
              name: "verify-certificate",
              description:
                "Verify the primary or secondary x509 certificate of an enrollment group",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--group-id", "--id"],
                  description: "Unique identifier for the enrollment group",
                  args: { name: "group-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--certificate-path", "--cp"],
                  description:
                    "The path to the file containing the primary certificate",
                  args: { name: "certificate-path" },
                },
                {
                  name: ["--secondary-certificate-path", "--scp"],
                  description:
                    "The path to the file containing the secondary certificate",
                  args: { name: "secondary-certificate-path" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
        {
          name: "export",
          description: "Manage and configure IoT Central data exports",
          subcommands: [
            {
              name: "create",
              description: "Create an export for an IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--destinations", "--dests"],
                  description: "The list of destinations with transform",
                  args: { name: "destinations" },
                  isRequired: true,
                },
                {
                  name: ["--display-name", "--name"],
                  description: "The data export display name",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: ["--export-id", "--id"],
                  description: "Unique identifier for the export",
                  args: { name: "export-id" },
                  isRequired: true,
                },
                {
                  name: ["--source", "-s"],
                  description: "The data export source",
                  args: {
                    name: "source",
                    suggestions: [
                      "deviceConnectivity",
                      "deviceLifecycle",
                      "deviceTemplateLifecycle",
                      "properties",
                      "telemetry",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--enrichments", "--en"],
                  description: "The data export enrichment",
                  args: { name: "enrichments" },
                },
                {
                  name: ["--enabled", "-e"],
                  description:
                    "The enabled status for data export, True or False",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                },
                {
                  name: ["--filter", "-f"],
                  description:
                    "IoT Central Query Language based filter, more details from: aka.ms/iotcquery",
                  args: { name: "filter" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an export for an IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--export-id", "--id"],
                  description: "Unique identifier for the export",
                  args: { name: "export-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Get the full list of exports for an IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get an export details",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--export-id", "--id"],
                  description: "Unique identifier for the export",
                  args: { name: "export-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "update",
              description: "Update an export for an IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--content", "-k"],
                  description:
                    "The partial export definition. Provide path to JSON file or raw stringified JSON. [File Path Example:./path/to/file.json] [Example of stringified JSON:{}]. The request body must contain partial content of Export",
                  args: { name: "content" },
                  isRequired: true,
                },
                {
                  name: ["--export-id", "--id"],
                  description: "Unique identifier for the export",
                  args: { name: "export-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "destination",
              description:
                "Manage and configure IoT Central export destinations",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create an export destination for an IoT Central application",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: "--dest-id",
                      description:
                        "Unique identifier for the export destination",
                      args: { name: "dest-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--display-name", "--name"],
                      description: "The destination display name",
                      args: { name: "display-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--type", "-t"],
                      description: "The destination type",
                      args: {
                        name: "type",
                        suggestions: [
                          "blobstorage@v1",
                          "dataexplorer@v1",
                          "eventhubs@v1",
                          "servicebusqueue@v1",
                          "servicebustopic@v1",
                          "webhook@v1",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview"],
                      },
                    },
                    {
                      name: ["--authorization", "--au"],
                      description: "The authorization config in json",
                      args: { name: "authorization" },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: ["--cluster-url", "--cu"],
                      description: "The azure data explorer cluster url",
                      args: { name: "cluster-url" },
                    },
                    {
                      name: "--database",
                      description: "The azure data explorer database",
                      args: { name: "database" },
                    },
                    {
                      name: "--header",
                      description:
                        "The webhook destination custimized header collection in json",
                      args: { name: "header" },
                    },
                    {
                      name: "--table",
                      description: "The azure data explorer table",
                      args: { name: "table" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                    {
                      name: "--url",
                      description: "The webhook url",
                      args: { name: "url" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete an export destination for an IoT Central application",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: "--dest-id",
                      description:
                        "Unique identifier for the export destination",
                      args: { name: "dest-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "Get the full list of export destinations for an IoT Central application",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Get an export destination details",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: "--dest-id",
                      description:
                        "Unique identifier for the export destination",
                      args: { name: "dest-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update an export destination for an IoT Central application",
                  options: [
                    {
                      name: ["--app-id", "-n"],
                      description:
                        'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                      args: { name: "app-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--content", "-k"],
                      description:
                        "The partial destination definition. Provide path to JSON file or raw stringified JSON. [File Path Example:./path/to/file.json] [Example of stringified JSON:{}]. The request body must contain partial content of Destination",
                      args: { name: "content" },
                      isRequired: true,
                    },
                    {
                      name: "--dest-id",
                      description:
                        "Unique identifier for the export destination",
                      args: { name: "dest-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--api-version", "--av"],
                      description:
                        "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                      args: {
                        name: "api-version",
                        suggestions: ["2022-06-30-preview"],
                      },
                    },
                    {
                      name: ["--central-dns-suffix", "--central-api-uri"],
                      description:
                        "The IoT Central DNS suffix associated with your application",
                      args: { name: "central-dns-suffix" },
                    },
                    {
                      name: "--token",
                      description:
                        "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                      args: { name: "token" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "file-upload-config",
          description: "Manage and configure IoT Central file upload",
          subcommands: [
            {
              name: "create",
              description: "Create file upload storage account configuration",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--connection-string", "-s"],
                  description:
                    "The connection string used to configure the storage account",
                  args: { name: "connection-string" },
                  isRequired: true,
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The name of the container inside the storage account",
                  args: { name: "container" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-a"],
                  description:
                    "The storage account name where to upload the file to",
                  args: { name: "account" },
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--sas-ttl",
                  description:
                    "The amount of time the device’s request to upload a file is valid before it expires. ISO 8601 duration standard. Default: 1h",
                  args: { name: "sas-ttl" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete file upload storage account configuration",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the details of file upload storage account configuration",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "update",
              description: "Update file upload storage account configuration",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-a"],
                  description:
                    "The storage account name where to upload the file to",
                  args: { name: "account" },
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--connection-string", "-s"],
                  description:
                    "The connection string used to configure the storage account",
                  args: { name: "connection-string" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The name of the container inside the storage account",
                  args: { name: "container" },
                },
                {
                  name: "--sas-ttl",
                  description:
                    "The amount of time the device’s request to upload a file is valid before it expires. ISO 8601 duration standard. Default: 1h",
                  args: { name: "sas-ttl" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
        {
          name: "job",
          description:
            "Manage and configure jobs for an IoT Central application",
          subcommands: [
            {
              name: "create",
              description: "Create and execute a job via its job definition",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--content", "-k"],
                  description:
                    "The job data definition. Provide path to JSON file or raw stringified JSON. [File Path Example:./path/to/file.json] [Example of stringified JSON:[{}]. The request body must contain array of JobData",
                  args: { name: "content" },
                  isRequired: true,
                },
                {
                  name: ["--group-id", "-g"],
                  description:
                    "The ID of the device group on which to execute the job",
                  args: { name: "group-id" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "-j"],
                  description: "Unique identifier for the job",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--batch", "-b"],
                  description:
                    "The number or percentage of devices on which batching is done",
                  args: { name: "batch" },
                },
                {
                  name: ["--batch-type", "--bt"],
                  description:
                    "Specify if batching is done on a number of devices or a percentage of the total",
                  args: {
                    name: "batch-type",
                    suggestions: ["number", "percentage"],
                  },
                },
                {
                  name: ["--cancellation-threshold", "--cth"],
                  description:
                    "The number or percentage of devices on which the cancellation threshold is applied",
                  args: { name: "cancellation-threshold" },
                },
                {
                  name: ["--cancellation-threshold-batch", "--ctb"],
                  description:
                    "Whether the cancellation threshold applies per-batch or to the overall job",
                  args: { name: "cancellation-threshold-batch" },
                },
                {
                  name: ["--cancellation-threshold-type", "--ctt"],
                  description:
                    "Specify if cancellation threshold applies for a number of devices or a percentage of the total",
                  args: {
                    name: "cancellation-threshold-type",
                    suggestions: ["number", "percentage"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--description", "--desc"],
                  description: "Detailed description of the job",
                  args: { name: "description" },
                },
                {
                  name: "--job-name",
                  description: "Display name of the job",
                  args: { name: "job-name" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "get-devices",
              description: "Get job device statuses",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "-j"],
                  description: "Unique identifier for the job",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Get the list of jobs for an IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "rerun",
              description: "Re-run a job on all failed devices",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "-j"],
                  description: "Unique identifier for the job",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: "--rerun-id",
                  description: "Unique identifier for the rerun",
                  args: { name: "rerun-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "resume",
              description: "Resume a stopped job",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "-j"],
                  description: "Unique identifier for the job",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a job by ID",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "-j"],
                  description: "Unique identifier for the job",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "stop",
              description: "Stop a running job",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "-j"],
                  description: "Unique identifier for the job",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
        {
          name: "organization",
          description:
            "Manage and configure organizations for an IoT Central application",
          subcommands: [
            {
              name: "create",
              description: "Create an organization in the application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: "--org-id",
                  description: "Unique identifier for the organization",
                  args: { name: "org-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--org-name",
                  description: "Display name of the organization",
                  args: { name: "org-name" },
                },
                {
                  name: "--parent-id",
                  description: "The ID of the parent of the organization",
                  args: { name: "parent-id" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an organization by ID",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: "--org-id",
                  description: "Unique identifier for the organization",
                  args: { name: "org-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Get the list of organizations for an IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a organization by ID",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: "--org-id",
                  description: "Unique identifier for the organization",
                  args: { name: "org-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "update",
              description: "Update an organization in the application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: "--org-id",
                  description: "Unique identifier for the organization",
                  args: { name: "org-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. The API version for the requested operation",
                  args: { name: "api-version", suggestions: ["2022-07-31"] },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--org-name",
                  description: "Display name of the organization",
                  args: { name: "org-name" },
                },
                {
                  name: "--parent-id",
                  description: "The ID of the parent of the organization",
                  args: { name: "parent-id" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
        {
          name: "role",
          description:
            "Manage and configure roles for an IoT Central application",
          subcommands: [
            {
              name: "list",
              description:
                "Get the list of roles for an IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a role by ID",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--role-id", "-r"],
                  description: "Unique identifier for the role",
                  args: { name: "role-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
        {
          name: "scheduled-job",
          description: "Manage and configure IoT Central schedule job",
          subcommands: [
            {
              name: "create",
              description: "Create a scheduled job by ID",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--content", "-k"],
                  description:
                    "The job data definition. Provide path to JSON file or raw stringified JSON. The request body must contain array of JobData",
                  args: { name: "content" },
                  isRequired: true,
                },
                {
                  name: ["--group-id", "-g"],
                  description:
                    "The ID of the device group on which to execute the job",
                  args: { name: "group-id" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "--id"],
                  description: "Unique identifier for the scheduled job",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: "--schedule",
                  description:
                    "The schedule at which to execute the job. Provide path to JSON file or raw stringified JSON",
                  args: { name: "schedule" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--batch", "-b"],
                  description:
                    "The number or percentage of devices on which batching is done",
                  args: { name: "batch" },
                },
                {
                  name: ["--batch-type", "--bt"],
                  description:
                    "Specify if batching is done on a number of devices or a percentage of the total",
                  args: {
                    name: "batch-type",
                    suggestions: ["number", "percentage"],
                  },
                },
                {
                  name: ["--cancellation-threshold", "--cth"],
                  description:
                    "The number or percentage of devices on which the cancellation threshold is applied",
                  args: { name: "cancellation-threshold" },
                },
                {
                  name: ["--cancellation-threshold-batch", "--ctb"],
                  description:
                    "Whether the cancellation threshold applies per-batch or to the overall job",
                  args: { name: "cancellation-threshold-batch" },
                },
                {
                  name: ["--cancellation-threshold-type", "--ctt"],
                  description:
                    "Specify if cancellation threshold applies for a number of devices or a percentage of the total",
                  args: {
                    name: "cancellation-threshold-type",
                    suggestions: ["number", "percentage"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--description", "--desc"],
                  description: "Detailed description of the job",
                  args: { name: "description" },
                },
                {
                  name: "--job-name",
                  description: "Display name of the job",
                  args: { name: "job-name" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an existing scheduled job by ID",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "--id"],
                  description: "Unique identifier for the scheduled job",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Get the list of scheduled job definitions in an application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "list-runs",
              description:
                "Get the list of job instances for a scheduled job definition",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "--id"],
                  description: "Unique identifier for the scheduled job",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get details about a scheduled job by ID",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "--id"],
                  description: "Unique identifier for the scheduled job",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a scheduled job by ID",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "--id"],
                  description: "Unique identifier for the scheduled job",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--batch", "-b"],
                  description:
                    "The number or percentage of devices on which batching is done",
                  args: { name: "batch" },
                },
                {
                  name: ["--batch-type", "--bt"],
                  description:
                    "Specify if batching is done on a number of devices or a percentage of the total",
                  args: {
                    name: "batch-type",
                    suggestions: ["number", "percentage"],
                  },
                },
                {
                  name: ["--cancellation-threshold", "--cth"],
                  description:
                    "The number or percentage of devices on which the cancellation threshold is applied",
                  args: { name: "cancellation-threshold" },
                },
                {
                  name: ["--cancellation-threshold-batch", "--ctb"],
                  description:
                    "Whether the cancellation threshold applies per-batch or to the overall job",
                  args: { name: "cancellation-threshold-batch" },
                },
                {
                  name: ["--cancellation-threshold-type", "--ctt"],
                  description:
                    "Specify if cancellation threshold applies for a number of devices or a percentage of the total",
                  args: {
                    name: "cancellation-threshold-type",
                    suggestions: ["number", "percentage"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: ["--content", "-k"],
                  description:
                    "The job data definition. Provide path to JSON file or raw stringified JSON. The request body must contain array of JobData",
                  args: { name: "content" },
                },
                {
                  name: ["--description", "--desc"],
                  description: "Detailed description of the job",
                  args: { name: "description" },
                },
                {
                  name: ["--group-id", "-g"],
                  description:
                    "The ID of the device group on which to execute the job",
                  args: { name: "group-id" },
                },
                {
                  name: "--job-name",
                  description: "Display name of the job",
                  args: { name: "job-name" },
                },
                {
                  name: "--schedule",
                  description:
                    "The schedule at which to execute the job. Provide path to JSON file or raw stringified JSON",
                  args: { name: "schedule" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
        {
          name: "user",
          description: "Manage and configure IoT Central users",
          subcommands: [
            {
              name: "create",
              description: "Add a user to the application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--assignee", "--user-id"],
                  description: "ID associated with the user",
                  args: { name: "assignee" },
                  isRequired: true,
                },
                {
                  name: ["--role", "-r"],
                  description:
                    "The role that will be associated with this token or user. You can specify one of the built-in roles, or specify the role ID of a custom role. See more at https://aka.ms/iotcentral-customrolesdocs",
                  args: { name: "role" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--email",
                  description:
                    "Email address of user to be added to the app. If this is specified, service principal parameters (tenant_id and object_id) will be ignored",
                  args: { name: "email" },
                },
                {
                  name: ["--object-id", "--oid"],
                  description:
                    'Object ID for service principal to be added to the app. Tenant ID must also be specified. If email is specified this gets ignored and the user will not be a service principal user but a standard "email" user',
                  args: { name: "object-id" },
                },
                {
                  name: ["--organization-id", "--org-id"],
                  description:
                    "The ID of the organization for the user role assignment. Only available for api-version == 1.1-preview",
                  args: { name: "organization-id" },
                },
                {
                  name: ["--tenant-id", "--tnid"],
                  description:
                    'Tenant ID for service principal to be added to the app. Object ID must also be specified. If email is specified this gets ignored and the user will not be a service principal user but a standard "email" user',
                  args: { name: "tenant-id" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a user from the application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--assignee", "--user-id"],
                  description: "ID associated with the user",
                  args: { name: "assignee" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "list",
              description: "Get list of users for an IoT Central application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a user by ID",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--assignee", "--user-id"],
                  description: "ID associated with the user",
                  args: { name: "assignee" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "update",
              description: "Update roles for a user in the application",
              options: [
                {
                  name: ["--app-id", "-n"],
                  description:
                    'The App ID of the IoT Central app you want to manage. You can find the App ID in the "About" page for your application under the help menu',
                  args: { name: "app-id" },
                  isRequired: true,
                },
                {
                  name: ["--assignee", "--user-id"],
                  description: "ID associated with the user",
                  args: { name: "assignee" },
                  isRequired: true,
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "Argument 'api_version' has been deprecated and will be removed in a future release. This command parameter has been deprecated and will be ignored.In the future release, we will only support IoT Central APIs from latest GA version.If any API is not GA yet, we will call latest preview version",
                  args: {
                    name: "api-version",
                    suggestions: ["2022-06-30-preview", "2022-07-31"],
                  },
                },
                {
                  name: ["--central-dns-suffix", "--central-api-uri"],
                  description:
                    "The IoT Central DNS suffix associated with your application",
                  args: { name: "central-dns-suffix" },
                },
                {
                  name: "--email",
                  description:
                    "Email address of user to be added to the app. If this is specified, service principal parameters (tenant_id and object_id) will be ignored",
                  args: { name: "email" },
                },
                {
                  name: ["--object-id", "--oid"],
                  description:
                    'Object ID for service principal to be added to the app. Tenant ID must also be specified. If email is specified this gets ignored and the user will not be a service principal user but a standard "email" user',
                  args: { name: "object-id" },
                },
                {
                  name: "--roles",
                  description:
                    'Comma-separated list of roles that will be associated with this user. You can specify one of the built-in roles, or specify the role ID of a custom role. See more at https://aka.ms/iotcentral-customrolesdocs. Organizations can be specified alongside roles when running with API version == 1.1-preview. E.g. "organization_id\\role"',
                  args: { name: "roles" },
                },
                {
                  name: ["--tenant-id", "--tnid"],
                  description:
                    'Tenant ID for service principal to be added to the app. Object ID must also be specified. If email is specified this gets ignored and the user will not be a service principal user but a standard "email" user',
                  args: { name: "tenant-id" },
                },
                {
                  name: "--token",
                  description:
                    "If you'd prefer to submit your request without authenticating against the Azure CLI, you can specify a valid user token to authenticate your request. You must specify the type of key as part of the request. Learn more at https://aka.ms/iotcentraldocsapi",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "device",
      description:
        "Leverage device simulation and other device-centric operations such as device-to-cloud or cloud-to-device messaging capabilities",
      subcommands: [
        {
          name: "send-d2c-message",
          description: "Send an mqtt device-to-cloud message",
          options: [
            {
              name: ["--device-id", "-d"],
              description: "Target Device Id",
              args: { name: "device-id" },
              isRequired: true,
            },
            {
              name: ["--certificate-file-path", "--cp"],
              description: "Path to certificate file",
              args: { name: "certificate-file-path" },
            },
            {
              name: ["--data", "--da"],
              description: "Message body. Provide text or raw json",
              args: { name: "data" },
            },
            {
              name: ["--data-file-path", "--dfp"],
              description:
                "Provide path to file for message body payload. Please note when the payload needs to be sent in binary format, set the content type to application/octet-stream",
              args: { name: "data-file-path" },
            },
            {
              name: ["--model-id", "--dtmi"],
              description:
                "The Digital Twin Model Id the device will report when connecting to the hub. See https://docs.microsoft.com/en-us/azure/iot-develop/overview-iot-plug-and-play for more details",
              args: { name: "model-id" },
            },
            {
              name: ["--hub-name", "-n"],
              description:
                "IoT Hub name or hostname. Required if --login is not provided",
              args: { name: "hub-name" },
            },
            {
              name: ["--symmetric-key", "--key"],
              description:
                "Symmetric key to use for the device. If the symmetric key and other device authentication arguments are provided, symmetric key takes priority",
              args: { name: "symmetric-key" },
            },
            {
              name: ["--key-file-path", "--kp"],
              description: "Path to key file",
              args: { name: "key-file-path" },
            },
            {
              name: ["--login", "-l"],
              description:
                'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
              args: { name: "login" },
            },
            {
              name: ["--msg-count", "--mc"],
              description: "Number of device messages to send to IoT Hub",
              args: { name: "msg-count" },
            },
            {
              name: ["--passphrase", "--pass"],
              description: "Passphrase for key file",
              args: { name: "passphrase" },
            },
            {
              name: ["--properties", "--props", "-p"],
              description:
                "Message property bag in key-value pairs with the following format: a=b;c=d. For mqtt messaging - you are able to send system properties using $.=value. For instance $.cid=12345 sets the system correlation Id property. Other system property identifier examples include $.ct for content type, $.mid for message Id and $.ce for content encoding",
              args: { name: "properties" },
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
          name: "simulate",
          description: "Simulate a device in an Azure IoT Hub",
          options: [
            {
              name: ["--device-id", "-d"],
              description: "Target Device Id",
              args: { name: "device-id" },
              isRequired: true,
            },
            {
              name: ["--certificate-file-path", "--cp"],
              description: "Path to certificate file",
              args: { name: "certificate-file-path" },
            },
            {
              name: ["--data", "--da"],
              description: "Message body. Provide text or raw json",
              args: { name: "data" },
            },
            {
              name: ["--model-id", "--dtmi"],
              description:
                "The Digital Twin Model Id the device will report when connecting to the hub. See https://docs.microsoft.com/en-us/azure/iot-develop/overview-iot-plug-and-play for more details",
              args: { name: "model-id" },
            },
            {
              name: ["--hub-name", "-n"],
              description:
                "IoT Hub name or hostname. Required if --login is not provided",
              args: { name: "hub-name" },
            },
            {
              name: ["--init-reported-properties", "--irp"],
              description:
                "Initial state of twin reported properties for the target device when the simulator is run. Optional param, only supported for mqtt",
              args: { name: "init-reported-properties" },
            },
            {
              name: ["--symmetric-key", "--key"],
              description:
                "Symmetric key to use for the device. If the symmetric key and other device authentication arguments are provided, symmetric key takes priority",
              args: { name: "symmetric-key" },
            },
            {
              name: ["--key-file-path", "--kp"],
              description: "Path to key file",
              args: { name: "key-file-path" },
            },
            {
              name: ["--login", "-l"],
              description:
                'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
              args: { name: "login" },
            },
            {
              name: ["--msg-count", "--mc"],
              description: "Number of device messages to send to IoT Hub",
              args: { name: "msg-count" },
            },
            {
              name: ["--method-response-code", "--mrc"],
              description:
                "Status code to be returned when direct method is executed on device. Optional param, only supported for mqtt",
              args: { name: "method-response-code" },
            },
            {
              name: ["--method-response-payload", "--mrp"],
              description:
                "Payload to be returned when direct method is executed on device. Provide file path or raw json. Optional param, only supported for mqtt",
              args: { name: "method-response-payload" },
            },
            {
              name: ["--msg-interval", "--mi"],
              description: "Delay in seconds between device-to-cloud messages",
              args: { name: "msg-interval" },
            },
            {
              name: ["--passphrase", "--pass"],
              description: "Passphrase for key file",
              args: { name: "passphrase" },
            },
            {
              name: ["--properties", "--props", "-p"],
              description:
                "Message property bag in key-value pairs with the following format: a=b;c=d. For mqtt messaging - you are able to send system properties using $.=value. For instance $.cid=12345 sets the system correlation Id property. Other system property identifier examples include $.ct for content type, $.mid for message Id and $.ce for content encoding. For http messaging - application properties are sent using iothub-app-=value, for instance iothub-app-myprop=myvalue. System properties are generally prefixed with iothub- like iothub-correlationid but there are exceptions such as content-type and content-encoding",
              args: { name: "properties" },
            },
            {
              name: ["--protocol", "--proto"],
              description: "Indicates device-to-cloud message protocol",
              args: { name: "protocol", suggestions: ["http", "mqtt"] },
            },
            {
              name: ["--receive-settle", "--rs"],
              description:
                "Indicates how to settle received cloud-to-device messages. Supported with HTTP only",
              args: {
                name: "receive-settle",
                suggestions: ["abandon", "complete", "reject"],
              },
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
          name: "upload-file",
          description:
            "Upload a local file as a device to a pre-configured blob storage container",
          options: [
            {
              name: ["--content-type", "--ct"],
              description: "MIME Type of file",
              args: { name: "content-type" },
              isRequired: true,
            },
            {
              name: ["--device-id", "-d"],
              description: "Target Device Id",
              args: { name: "device-id" },
              isRequired: true,
            },
            {
              name: ["--file-path", "--fp"],
              description: "Path to file for upload",
              args: { name: "file-path" },
              isRequired: true,
            },
            {
              name: ["--hub-name", "-n"],
              description:
                "IoT Hub name or hostname. Required if --login is not provided",
              args: { name: "hub-name" },
            },
            {
              name: ["--login", "-l"],
              description:
                'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
              args: { name: "login" },
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
          name: "c2d-message",
          description: "Cloud-to-device messaging commands",
          subcommands: [
            {
              name: "abandon",
              description: "Abandon a cloud-to-device message",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              name: "complete",
              description: "Complete a cloud-to-device message",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              name: "purge",
              description:
                "Purge cloud-to-device message queue for a target device",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              name: "receive",
              description: "Receive a cloud-to-device message",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: "--abandon",
                  description:
                    "Abandon the cloud-to-device message after receipt",
                },
                {
                  name: "--complete",
                  description:
                    "Complete the cloud-to-device message after receipt",
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--lock-timeout", "--lt"],
                  description:
                    "Specifies the amount of time a message will be invisible to other receive calls",
                  args: { name: "lock-timeout" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: "--reject",
                  description:
                    "Reject the cloud-to-device message after receipt",
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
              name: "reject",
              description: "Reject or deadletter a cloud-to-device message",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              name: "send",
              description: "Send a cloud-to-device message",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: "--ack",
                  description:
                    "Request the delivery of per-message feedback regarding the final state of that message. The description of ack values is as follows. Positive: If the c2d message reaches the Completed state, IoT Hub generates a feedback message. Negative: If the c2d message reaches the Dead lettered state, IoT Hub generates a feedback message. Full: IoT Hub generates a feedback message in either case. By default, no ack is requested",
                  args: {
                    name: "ack",
                    suggestions: ["full", "negative", "positive"],
                  },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--content-encoding", "--ce"],
                  description: "The encoding for the C2D message body",
                  args: { name: "content-encoding" },
                },
                {
                  name: ["--correlation-id", "--cid"],
                  description:
                    "The correlation Id associated with the C2D message",
                  args: { name: "correlation-id" },
                },
                {
                  name: ["--content-type", "--ct"],
                  description: "The content type for the C2D message body",
                  args: { name: "content-type" },
                },
                {
                  name: ["--data", "--da"],
                  description: "Message body. Provide text or raw json",
                  args: { name: "data" },
                },
                {
                  name: ["--data-file-path", "--dfp"],
                  description:
                    "Provide path to file for message body payload. Please note when the payload needs to be sent in binary format, set the content type to application/octet-stream",
                  args: { name: "data-file-path" },
                },
                {
                  name: ["--expiry-time-utc", "--expiry"],
                  description:
                    "Units are milliseconds since unix epoch. If no time is indicated the default IoT Hub C2D message TTL is used",
                  args: { name: "expiry-time-utc" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--message-id", "--mid"],
                  description:
                    "The C2D message Id. If no message Id is provided a UUID will be generated",
                  args: { name: "message-id" },
                },
                {
                  name: ["--properties", "--props", "-p"],
                  description:
                    "Message property bag in key-value pairs with the following format: a=b;c=d",
                  args: { name: "properties" },
                },
                {
                  name: ["--repair", "-r"],
                  description:
                    "Reinstall uamqp dependency compatible with extension version. Default: false",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--user-id", "--uid"],
                  description: "The C2D message, user Id property",
                  args: { name: "user-id" },
                },
                {
                  name: ["--wait", "-w"],
                  description:
                    "If set the c2d send operation will block until device feedback has been received",
                },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
                },
              ],
            },
          ],
        },
        {
          name: "registration",
          description:
            "Manage IoT device registrations for the IoT Device Provisioning Service.\n\n\t\tUse az iot dps enrollment registration or az iot dps enrollment-group registration to view and delete registrations",
          subcommands: [
            {
              name: "create",
              description:
                "Register an IoT device with the IoT Device Provisioning Service",
              options: [
                {
                  name: ["--registration-id", "--rid"],
                  description:
                    "Device registration ID or individual enrollment ID",
                  args: { name: "registration-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--certificate-file-path", "--cp"],
                  description:
                    "Path to certificate PEM file. Required for x509 registrations",
                  args: { name: "certificate-file-path" },
                },
                {
                  name: ["--compute-key", "--ck"],
                  description:
                    "Flag to indicate that the symmetric key for the device registration should be computed from the given key with --symmetric-key",
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided or authenticaton arguments and --id-scope are not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--enrollment-group-id", "--group-id", "--gid"],
                  description:
                    "Enrollment group ID. Only needed to retrieve authentication arguments",
                  args: { name: "enrollment-group-id" },
                },
                {
                  name: ["--provisioning-host", "--host"],
                  description:
                    "Endpoint pointing to the provisioning host to use",
                  args: { name: "provisioning-host" },
                },
                {
                  name: ["--id-scope", "--scope"],
                  description:
                    "Id Scope of the Azure IoT Hub Device Provisioning Service. If provided with authentication arguments, will avoid session login",
                  args: { name: "id-scope" },
                },
                {
                  name: ["--symmetric-key", "--key"],
                  description:
                    "The symmetric shared access key for the device registration",
                  args: { name: "symmetric-key" },
                },
                {
                  name: ["--key-file-path", "--kp"],
                  description:
                    "Path to key PEM file. Required for x509 registrations",
                  args: { name: "key-file-path" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided or authenticaton arguments and --id-scope are not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--passphrase", "--pass"],
                  description: "Passphrase for the certificate",
                  args: { name: "passphrase" },
                },
                {
                  name: "--payload",
                  description:
                    "Custom allocation payload as JSON. Specifically for use with custom allocation policies using Azure Functions",
                  args: { name: "payload" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "dps",
      description: "Manage Azure IoT Hub Device Provisioning Service",
      subcommands: [
        {
          name: "compute-device-key",
          description: "Generate a derived device SAS key",
          options: [
            {
              name: "--registration-id",
              description: "ID of device registration",
              args: { name: "registration-id" },
              isRequired: true,
            },
            {
              name: "--auth-type",
              description:
                "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
              args: { name: "auth-type", suggestions: ["key", "login"] },
            },
            {
              name: ["--dps-name", "-n"],
              description:
                "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
              args: { name: "dps-name" },
            },
            {
              name: ["--enrollment-id", "--group-id", "--eid", "--gid"],
              description: "Enrollment group ID",
              args: { name: "enrollment-id" },
            },
            {
              name: ["--symmetric-key", "--key"],
              description:
                "The symmetric shared access key for the enrollment group. This bypasses the Device Provisioning Service registry and generates the SAS token directly from the supplied symmetric key without further validation. All other command parameters aside from registration ID will be ignored",
              args: { name: "symmetric-key" },
            },
            {
              name: ["--login", "-l"],
              description:
                'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
              args: { name: "login" },
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
          name: "create",
          description:
            "Create an Azure IoT Hub Device Provisioning Service instance",
          options: [
            {
              name: ["--name", "-n"],
              description: "IoT Hub Device Provisioning Service name",
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
              name: ["--enforce-data-residency", "--edr"],
              description:
                "Enforce data residency for this IoT Hub Device Provisioning Service by disabling cross geo-pair disaster recovery. This property is immutable once set on the resource. Only available in select regions. Learn more at https://aka.ms/dpsdr",
              args: {
                name: "enforce-data-residency",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of your IoT Hub Device Provisioning Service. Default is the location of target resource group",
              args: { name: "location" },
            },
            {
              name: "--sku",
              description:
                "Pricing tier for the IoT Hub Device Provisioning Service",
              args: { name: "sku", suggestions: ["S1"] },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--unit",
              description: "Units in your IoT Hub Device Provisioning Service",
              args: { name: "unit" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete an Azure IoT Hub Device Provisioning Service instance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub Device Provisioning Service name",
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
          description:
            "List Azure IoT Hub Device Provisioning Service instances",
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
            "Get the details of an Azure IoT Hub Device Provisioning Service instance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub Device Provisioning Service name",
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
          description:
            "Update an Azure IoT Hub Device Provisioning Service instance",
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
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub Device Provisioning Service name",
              args: { name: "name" },
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
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "certificate",
          description:
            "Manage certificates for an Azure IoT Hub Device Provisioning Service instance",
          subcommands: [
            {
              name: "create",
              description:
                "Create/upload a certficate to an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "The path to the file containing the certificate",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--verified", "-v"],
                  description:
                    "A boolean indicating whether or not the certificate is verified",
                  args: { name: "verified", suggestions: ["false", "true"] },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a certificate in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
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
              name: "generate-verification-code",
              description:
                "Generate a verification code for a certificate in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
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
              name: "list",
              description:
                "List all certificates contained within an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
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
              description:
                "Show information about a particular certificate in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
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
              description:
                "Update a certificate in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "The path to the file containing the certificate",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--verified", "-v"],
                  description:
                    "A boolean indicating whether or not the certificate is verified",
                  args: { name: "verified", suggestions: ["false", "true"] },
                },
              ],
            },
            {
              name: "verify",
              description:
                "Verify a certificate in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "The path to the file containing the certificate",
                  args: { name: "path" },
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
          ],
        },
        {
          name: "connection-string",
          description:
            "Manage connection strings for an Azure IoT Hub Device Provisioning Service instance",
          subcommands: [
            {
              name: "show",
              description:
                "Show the connection strings for the specified Device Provisioning Services using the given policy name and key",
              options: [
                {
                  name: ["--show-all", "--all"],
                  description:
                    "Show all shared access policies for the respective DPS",
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--key-type", "--kt"],
                  description:
                    "Shared access policy key type for authentication",
                  args: {
                    name: "key-type",
                    suggestions: ["primary", "secondary"],
                  },
                },
                {
                  name: ["--policy-name", "--pn"],
                  description: "Shared access policy to use for authentication",
                  args: { name: "policy-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
        {
          name: "enrollment",
          description:
            "Manage individual device enrollments in an Azure IoT Hub Device Provisioning Service",
          subcommands: [
            {
              name: "create",
              description:
                "Create an individual device enrollment in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: ["--attestation-type", "--at"],
                  description:
                    "Attestation Mechanism used for authentication to the DPS",
                  args: {
                    name: "attestation-type",
                    suggestions: ["symmetricKey", "tpm", "x509"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--enrollment-id", "--eid"],
                  description: "Individual device enrollment ID",
                  args: { name: "enrollment-id" },
                  isRequired: true,
                },
                {
                  name: ["--allocation-policy", "--ap"],
                  description:
                    "Type of allocation policy to determine how a device is assigned to an IoT Hub. If not provided, the allocation policy will be the current allocation policy default set for the Device Provisioning Service instance",
                  args: {
                    name: "allocation-policy",
                    suggestions: ["custom", "geoLatency", "hashed", "static"],
                  },
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "The API version of the provisioning service types sent in the custom allocation request. Minimum supported version: 2018-09-01-preview",
                  args: { name: "api-version" },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--certificate-path", "--cp"],
                  description:
                    "The path to the file containing the primary certificate. Required when choosing x509 as attestation type and the secondary certificate path is not provided",
                  args: { name: "certificate-path" },
                },
                {
                  name: ["--device-id", "-d"],
                  description: "Device ID registered in the IoT Hub",
                  args: { name: "device-id" },
                },
                {
                  name: ["--device-information", "--info"],
                  description: "Optional device information",
                  args: { name: "device-information" },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--edge-enabled", "--ee"],
                  description: "Flag indicating edge enablement",
                },
                {
                  name: ["--endorsement-key", "--ek"],
                  description:
                    "TPM endorsement key for a TPM device. When choosing tpm as attestation type, endorsement key is required",
                  args: { name: "endorsement-key" },
                },
                {
                  name: ["--iot-hubs", "--ih"],
                  description:
                    "Host name of target IoT Hub associated with the allocation policy. Use space-separated list for multiple IoT Hubs",
                  args: { name: "iot-hubs" },
                },
                {
                  name: ["--initial-twin-properties", "--props"],
                  description: "Initial device twin properties",
                  args: { name: "initial-twin-properties" },
                },
                {
                  name: ["--initial-twin-tags", "--tags"],
                  description: "Initial device twin tags",
                  args: { name: "initial-twin-tags" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--primary-key", "--pk"],
                  description:
                    "The primary symmetric shared access key stored in base64 format",
                  args: { name: "primary-key" },
                },
                {
                  name: ["--provisioning-status", "--ps"],
                  description: "Enable or disable enrollment entry",
                  args: {
                    name: "provisioning-status",
                    suggestions: ["disabled", "enabled"],
                  },
                },
                {
                  name: ["--reprovision-policy", "--rp"],
                  description:
                    "Policy to determine how device data should be handled on re-provision to a different IoT Hub",
                  args: {
                    name: "reprovision-policy",
                    suggestions: [
                      "never",
                      "reprovisionandmigratedata",
                      "reprovisionandresetdata",
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
                  name: ["--secondary-certificate-path", "--scp"],
                  description:
                    "The path to the file containing the secondary certificate. Required when choosing x509 as attestation type and the primary certificate path is not provided",
                  args: { name: "secondary-certificate-path" },
                },
                {
                  name: ["--secondary-key", "--sk"],
                  description:
                    "The secondary symmetric shared access key stored in base64 format",
                  args: { name: "secondary-key" },
                },
                {
                  name: ["--webhook-url", "--wh"],
                  description:
                    "The Azure Function webhook URL used for custom allocation requests",
                  args: { name: "webhook-url" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an individual device enrollment in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: ["--enrollment-id", "--eid"],
                  description: "Individual device enrollment ID",
                  args: { name: "enrollment-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
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
              name: "list",
              description:
                "List individual device enrollments in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--top",
                  description:
                    "Maximum number of elements to return. Use -1 for unlimited",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get individual device enrollment details in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: ["--enrollment-id", "--eid"],
                  description: "Individual device enrollment ID",
                  args: { name: "enrollment-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--show-keys", "--keys"],
                  description:
                    "Include attestation keys and information in enrollment results",
                  args: { name: "show-keys", suggestions: ["false", "true"] },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
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
              description:
                "Update an individual device enrollment in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: ["--enrollment-id", "--eid"],
                  description: "Individual device enrollment ID",
                  args: { name: "enrollment-id" },
                  isRequired: true,
                },
                {
                  name: ["--allocation-policy", "--ap"],
                  description:
                    "Type of allocation policy to determine how a device is assigned to an IoT Hub. If not provided, the allocation policy will be the current allocation policy default set for the Device Provisioning Service instance",
                  args: {
                    name: "allocation-policy",
                    suggestions: ["custom", "geoLatency", "hashed", "static"],
                  },
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "The API version of the provisioning service types sent in the custom allocation request. Minimum supported version: 2018-09-01-preview",
                  args: { name: "api-version" },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--certificate-path", "--cp"],
                  description:
                    "The path to the file containing the primary certificate",
                  args: { name: "certificate-path" },
                },
                {
                  name: ["--device-id", "-d"],
                  description: "Device ID registered in the IoT Hub",
                  args: { name: "device-id" },
                },
                {
                  name: ["--device-information", "--info"],
                  description: "Optional device information",
                  args: { name: "device-information" },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--edge-enabled", "--ee"],
                  description: "Flag indicating edge enablement",
                  args: {
                    name: "edge-enabled",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--endorsement-key", "--ek"],
                  description: "TPM endorsement key for a TPM device",
                  args: { name: "endorsement-key" },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--iot-hubs", "--ih"],
                  description:
                    "Host name of target IoT Hub associated with the allocation policy. Use space-separated list for multiple IoT Hubs",
                  args: { name: "iot-hubs" },
                },
                {
                  name: ["--initial-twin-properties", "--props"],
                  description: "Initial device twin properties",
                  args: { name: "initial-twin-properties" },
                },
                {
                  name: ["--initial-twin-tags", "--tags"],
                  description: "Initial device twin tags",
                  args: { name: "initial-twin-tags" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--primary-key", "--pk"],
                  description:
                    "The primary symmetric shared access key stored in base64 format",
                  args: { name: "primary-key" },
                },
                {
                  name: ["--provisioning-status", "--ps"],
                  description: "Enable or disable enrollment entry",
                  args: {
                    name: "provisioning-status",
                    suggestions: ["disabled", "enabled"],
                  },
                },
                {
                  name: ["--remove-certificate", "--rc"],
                  description: "Flag to remove current primary certificate",
                  args: {
                    name: "remove-certificate",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--remove-secondary-certificate", "--rsc"],
                  description: "Flag to remove current secondary certificate",
                  args: {
                    name: "remove-secondary-certificate",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--reprovision-policy", "--rp"],
                  description:
                    "Policy to determine how device data should be handled on re-provision to a different IoT Hub",
                  args: {
                    name: "reprovision-policy",
                    suggestions: [
                      "never",
                      "reprovisionandmigratedata",
                      "reprovisionandresetdata",
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
                  name: ["--secondary-certificate-path", "--scp"],
                  description:
                    "The path to the file containing the secondary certificate",
                  args: { name: "secondary-certificate-path" },
                },
                {
                  name: ["--secondary-key", "--sk"],
                  description:
                    "The secondary symmetric shared access key stored in base64 format",
                  args: { name: "secondary-key" },
                },
                {
                  name: ["--webhook-url", "--wh"],
                  description:
                    "The Azure Function webhook URL used for custom allocation requests",
                  args: { name: "webhook-url" },
                },
              ],
            },
            {
              name: "registration",
              description:
                "Manage service-side device registrations for an individual enrollment in an Azure IoT Hub Device Provisioning Service.\n\n\t\tUse az iot device registration create to simulate device registration",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete a device registration for an individual enrollment in an Azure IoT Hub Device Provisioning Service",
                  options: [
                    {
                      name: ["--enrollment-id", "--eid"],
                      description: "Individual device enrollment ID",
                      args: { name: "enrollment-id" },
                      isRequired: true,
                    },
                    {
                      name: "--auth-type",
                      description:
                        "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                      args: {
                        name: "auth-type",
                        suggestions: ["key", "login"],
                      },
                    },
                    {
                      name: ["--dps-name", "-n"],
                      description:
                        "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                      args: { name: "dps-name" },
                    },
                    {
                      name: ["--etag", "-e"],
                      description:
                        "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                      args: { name: "etag" },
                    },
                    {
                      name: ["--login", "-l"],
                      description:
                        'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                      args: { name: "login" },
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
                  description:
                    "Get a device registration for an individual enrollment in an Azure IoT Hub Device Provisioning Service",
                  options: [
                    {
                      name: ["--enrollment-id", "--eid"],
                      description: "Individual device enrollment ID",
                      args: { name: "enrollment-id" },
                      isRequired: true,
                    },
                    {
                      name: "--auth-type",
                      description:
                        "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                      args: {
                        name: "auth-type",
                        suggestions: ["key", "login"],
                      },
                    },
                    {
                      name: ["--dps-name", "-n"],
                      description:
                        "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                      args: { name: "dps-name" },
                    },
                    {
                      name: ["--login", "-l"],
                      description:
                        'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                      args: { name: "login" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "enrollment-group",
          description:
            "Manage enrollment groups in an Azure IoT Hub Device Provisioning Service",
          subcommands: [
            {
              name: "compute-device-key",
              description:
                "Generate a derived device SAS key for an enrollment group in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: ["--registration-id", "--rid"],
                  description: "ID of device registration",
                  args: { name: "registration-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--enrollment-id", "--group-id", "--eid", "--gid"],
                  description: "Enrollment group ID",
                  args: { name: "enrollment-id" },
                },
                {
                  name: ["--symmetric-key", "--key"],
                  description:
                    "The symmetric shared access key for the enrollment group. This bypasses the Device Provisioning Service registry and generates the SAS token directly from the supplied symmetric key without further validation. All other command parameters aside from registration ID will be ignored",
                  args: { name: "symmetric-key" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
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
              name: "create",
              description:
                "Create an enrollment group in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: ["--enrollment-id", "--group-id", "--eid", "--gid"],
                  description: "Enrollment group ID",
                  args: { name: "enrollment-id" },
                  isRequired: true,
                },
                {
                  name: ["--allocation-policy", "--ap"],
                  description:
                    "Type of allocation policy to determine how a device is assigned to an IoT Hub. If not provided, the allocation policy will be the current allocation policy default set for the Device Provisioning Service instance",
                  args: {
                    name: "allocation-policy",
                    suggestions: ["custom", "geoLatency", "hashed", "static"],
                  },
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "The API version of the provisioning service types sent in the custom allocation request. Minimum supported version: 2018-09-01-preview",
                  args: { name: "api-version" },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--root-ca-name", "--ca-name", "--cn"],
                  description:
                    "The name of the primary root CA certificate. If attestation with a root CA certificate is desired then a root ca name must be provided",
                  args: { name: "root-ca-name" },
                },
                {
                  name: ["--certificate-path", "--cp"],
                  description:
                    "The path to the file containing the primary certificate. If attestation with an intermediate certificate is desired then a certificate path must be provided",
                  args: { name: "certificate-path" },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--edge-enabled", "--ee"],
                  description: "Flag indicating edge enablement",
                },
                {
                  name: ["--iot-hubs", "--ih"],
                  description:
                    "Host name of target IoT Hub associated with the allocation policy. Use space-separated list for multiple IoT Hubs",
                  args: { name: "iot-hubs" },
                },
                {
                  name: ["--initial-twin-properties", "--props"],
                  description: "Initial device twin properties",
                  args: { name: "initial-twin-properties" },
                },
                {
                  name: ["--initial-twin-tags", "--tags"],
                  description: "Initial device twin tags",
                  args: { name: "initial-twin-tags" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--primary-key", "--pk"],
                  description:
                    "The primary symmetric shared access key stored in base64 format",
                  args: { name: "primary-key" },
                },
                {
                  name: ["--provisioning-status", "--ps"],
                  description: "Enable or disable enrollment entry",
                  args: {
                    name: "provisioning-status",
                    suggestions: ["disabled", "enabled"],
                  },
                },
                {
                  name: ["--reprovision-policy", "--rp"],
                  description:
                    "Policy to determine how device data should be handled on re-provision to a different IoT Hub",
                  args: {
                    name: "reprovision-policy",
                    suggestions: [
                      "never",
                      "reprovisionandmigratedata",
                      "reprovisionandresetdata",
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
                  name: [
                    "--secondary-root-ca-name",
                    "--secondary-ca-name",
                    "--scn",
                  ],
                  description:
                    "The name of the secondary root CA certificate. If attestation with a root CA certificate is desired then a root ca name must be provided",
                  args: { name: "secondary-root-ca-name" },
                },
                {
                  name: ["--secondary-certificate-path", "--scp"],
                  description:
                    "The path to the file containing the secondary certificate. If attestation with an intermediate certificate is desired then a certificate path must be provided",
                  args: { name: "secondary-certificate-path" },
                },
                {
                  name: ["--secondary-key", "--sk"],
                  description:
                    "The secondary symmetric shared access key stored in base64 format",
                  args: { name: "secondary-key" },
                },
                {
                  name: ["--webhook-url", "--wh"],
                  description:
                    "The Azure Function webhook URL used for custom allocation requests",
                  args: { name: "webhook-url" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an enrollment group in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: ["--enrollment-id", "--group-id", "--eid", "--gid"],
                  description: "Enrollment group ID",
                  args: { name: "enrollment-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
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
              name: "list",
              description:
                "List enrollments groups in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--top",
                  description:
                    "Maximum number of elements to return. Use -1 for unlimited",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get an enrollment group's details in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: ["--enrollment-id", "--group-id", "--eid", "--gid"],
                  description: "Enrollment group ID",
                  args: { name: "enrollment-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--show-keys", "--keys"],
                  description:
                    "Include attestation keys and information in enrollment group results",
                  args: { name: "show-keys", suggestions: ["false", "true"] },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
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
              description:
                "Update an enrollment group in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: ["--enrollment-id", "--group-id", "--eid", "--gid"],
                  description: "Enrollment group ID",
                  args: { name: "enrollment-id" },
                  isRequired: true,
                },
                {
                  name: ["--allocation-policy", "--ap"],
                  description:
                    "Type of allocation policy to determine how a device is assigned to an IoT Hub. If not provided, the allocation policy will be the current allocation policy default set for the Device Provisioning Service instance",
                  args: {
                    name: "allocation-policy",
                    suggestions: ["custom", "geoLatency", "hashed", "static"],
                  },
                },
                {
                  name: ["--api-version", "--av"],
                  description:
                    "The API version of the provisioning service types sent in the custom allocation request. Minimum supported version: 2018-09-01-preview",
                  args: { name: "api-version" },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--root-ca-name", "--ca-name", "--cn"],
                  description:
                    "The name of the primary root CA certificate. If attestation with a root CA certificate is desired then a root ca name must be provided",
                  args: { name: "root-ca-name" },
                },
                {
                  name: ["--certificate-path", "--cp"],
                  description:
                    "The path to the file containing the primary certificate. If attestation with an intermediate certificate is desired then a certificate path must be provided",
                  args: { name: "certificate-path" },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--edge-enabled", "--ee"],
                  description: "Flag indicating edge enablement",
                  args: {
                    name: "edge-enabled",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--iot-hubs", "--ih"],
                  description:
                    "Host name of target IoT Hub associated with the allocation policy. Use space-separated list for multiple IoT Hubs",
                  args: { name: "iot-hubs" },
                },
                {
                  name: ["--initial-twin-properties", "--props"],
                  description: "Initial device twin properties",
                  args: { name: "initial-twin-properties" },
                },
                {
                  name: ["--initial-twin-tags", "--tags"],
                  description: "Initial device twin tags",
                  args: { name: "initial-twin-tags" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--primary-key", "--pk"],
                  description:
                    "The primary symmetric shared access key stored in base64 format",
                  args: { name: "primary-key" },
                },
                {
                  name: ["--provisioning-status", "--ps"],
                  description: "Enable or disable enrollment entry",
                  args: {
                    name: "provisioning-status",
                    suggestions: ["disabled", "enabled"],
                  },
                },
                {
                  name: ["--remove-certificate", "--rc"],
                  description: "Flag to remove current primary certificate",
                  args: {
                    name: "remove-certificate",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--remove-secondary-certificate", "--rsc"],
                  description: "Flag to remove current secondary certificate",
                  args: {
                    name: "remove-secondary-certificate",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--reprovision-policy", "--rp"],
                  description:
                    "Policy to determine how device data should be handled on re-provision to a different IoT Hub",
                  args: {
                    name: "reprovision-policy",
                    suggestions: [
                      "never",
                      "reprovisionandmigratedata",
                      "reprovisionandresetdata",
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
                  name: [
                    "--secondary-root-ca-name",
                    "--secondary-ca-name",
                    "--scn",
                  ],
                  description:
                    "The name of the secondary root CA certificate. If attestation with a root CA certificate is desired then a root ca name must be provided",
                  args: { name: "secondary-root-ca-name" },
                },
                {
                  name: ["--secondary-certificate-path", "--scp"],
                  description:
                    "The path to the file containing the secondary certificate. If attestation with an intermediate certificate is desired then a certificate path must be provided",
                  args: { name: "secondary-certificate-path" },
                },
                {
                  name: ["--secondary-key", "--sk"],
                  description:
                    "The secondary symmetric shared access key stored in base64 format",
                  args: { name: "secondary-key" },
                },
                {
                  name: ["--webhook-url", "--wh"],
                  description:
                    "The Azure Function webhook URL used for custom allocation requests",
                  args: { name: "webhook-url" },
                },
              ],
            },
            {
              name: "registration",
              description:
                "Manage service-side device registrations for an enrollment group in an Azure IoT Hub Device Provisioning Service.\n\n\t\tUse az iot device registration create to simulate device registration",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete a device registration for an enrollment group in an Azure IoT Hub Device Provisioning Service",
                  options: [
                    {
                      name: ["--registration-id", "--rid"],
                      description: "ID of device registration",
                      args: { name: "registration-id" },
                      isRequired: true,
                    },
                    {
                      name: "--auth-type",
                      description:
                        "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                      args: {
                        name: "auth-type",
                        suggestions: ["key", "login"],
                      },
                    },
                    {
                      name: ["--dps-name", "-n"],
                      description:
                        "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                      args: { name: "dps-name" },
                    },
                    {
                      name: ["--etag", "-e"],
                      description:
                        "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                      args: { name: "etag" },
                    },
                    {
                      name: ["--login", "-l"],
                      description:
                        'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                      args: { name: "login" },
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
                  name: "list",
                  description:
                    "List device registrations for an enrollment group in an Azure IoT Hub Device Provisioning Service",
                  options: [
                    {
                      name: ["--enrollment-id", "--group-id", "--eid", "--gid"],
                      description: "Enrollment group ID",
                      args: { name: "enrollment-id" },
                      isRequired: true,
                    },
                    {
                      name: "--auth-type",
                      description:
                        "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                      args: {
                        name: "auth-type",
                        suggestions: ["key", "login"],
                      },
                    },
                    {
                      name: ["--dps-name", "-n"],
                      description:
                        "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                      args: { name: "dps-name" },
                    },
                    {
                      name: ["--login", "-l"],
                      description:
                        'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                      args: { name: "login" },
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
                  description:
                    "Get a device registration for an enrollment group in an Azure IoT Hub Device Provisioning Service",
                  options: [
                    {
                      name: ["--registration-id", "--rid"],
                      description: "ID of device registration",
                      args: { name: "registration-id" },
                      isRequired: true,
                    },
                    {
                      name: "--auth-type",
                      description:
                        "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                      args: {
                        name: "auth-type",
                        suggestions: ["key", "login"],
                      },
                    },
                    {
                      name: ["--dps-name", "-n"],
                      description:
                        "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                      args: { name: "dps-name" },
                    },
                    {
                      name: ["--login", "-l"],
                      description:
                        'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                      args: { name: "login" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "linked-hub",
          description:
            "Manage linked IoT Hubs in an Azure IoT Hub Device Provisioning Service instance",
          subcommands: [
            {
              name: "create",
              description:
                "Create a linked IoT hub in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: "--allocation-weight",
                  description: "Allocation weight of the IoT hub",
                  args: { name: "allocation-weight" },
                },
                {
                  name: "--apply-allocation-policy",
                  description:
                    "A boolean indicating whether to apply allocation policy to the IoT hub",
                  args: {
                    name: "apply-allocation-policy",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--connection-string",
                  description:
                    "Connection string of the IoT hub. Required if hub name is not provided using --hub-name",
                  args: { name: "connection-string" },
                },
                {
                  name: ["--hub-name", "--hn"],
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--hub-resource-group", "--hrg"],
                  description: "IoT Hub resource group name",
                  args: { name: "hub-resource-group" },
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
              name: "delete",
              description:
                "Update a linked IoT hub in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: "--linked-hub",
                  description: "Host name of linked IoT Hub",
                  args: { name: "linked-hub" },
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
              ],
            },
            {
              name: "list",
              description:
                "List all linked IoT hubs in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
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
              description:
                "Show details of a linked IoT hub in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: "--linked-hub",
                  description: "Host name of linked IoT Hub",
                  args: { name: "linked-hub" },
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
              description:
                "Update a linked IoT hub in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: "--linked-hub",
                  description: "Host name of linked IoT Hub",
                  args: { name: "linked-hub" },
                  isRequired: true,
                },
                {
                  name: "--allocation-weight",
                  description: "Allocation weight of the IoT hub",
                  args: { name: "allocation-weight" },
                },
                {
                  name: "--apply-allocation-policy",
                  description:
                    "A boolean indicating whether to apply allocation policy to the Iot hub",
                  args: {
                    name: "apply-allocation-policy",
                    suggestions: ["false", "true"],
                  },
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
          ],
        },
        {
          name: "policy",
          description:
            "Manage shared access policies for an Azure IoT Hub Device Provisioning Service instance",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new shared access policy in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--dps-name", "-n"],
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--policy-name", "--pn"],
                  description: "A friendly name for DPS access policy",
                  args: { name: "policy-name" },
                  isRequired: true,
                },
                {
                  name: ["--rights", "-r"],
                  description:
                    "Access rights for the IoT Hub Device Provisioning Service. Use space-separated list for multiple rights",
                  args: {
                    name: "rights",
                    suggestions: [
                      "DeviceConnect",
                      "EnrollmentRead",
                      "EnrollmentWrite",
                      "RegistrationStatusRead",
                      "RegistrationStatusWrite",
                      "ServiceConfig",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--primary-key",
                  description: "Primary SAS key value",
                  args: { name: "primary-key" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secondary-key",
                  description: "Secondary SAS key value",
                  args: { name: "secondary-key" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a shared access policies in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--dps-name", "-n"],
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--policy-name", "--pn"],
                  description: "A friendly name for DPS access policy",
                  args: { name: "policy-name" },
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
              ],
            },
            {
              name: "list",
              description:
                "List all shared access policies in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--dps-name", "-n"],
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
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
              description:
                "Show details of a shared access policies in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--dps-name", "-n"],
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--policy-name", "--pn"],
                  description: "A friendly name for DPS access policy",
                  args: { name: "policy-name" },
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
              description:
                "Update a shared access policy in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--dps-name", "-n"],
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--policy-name", "--pn"],
                  description: "A friendly name for DPS access policy",
                  args: { name: "policy-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--primary-key",
                  description: "Primary SAS key value",
                  args: { name: "primary-key" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--rights", "-r"],
                  description:
                    "Access rights for the IoT Hub Device Provisioning Service. Use space-separated list for multiple rights",
                  args: {
                    name: "rights",
                    suggestions: [
                      "DeviceConnect",
                      "EnrollmentRead",
                      "EnrollmentWrite",
                      "RegistrationStatusRead",
                      "RegistrationStatusWrite",
                      "ServiceConfig",
                    ],
                  },
                },
                {
                  name: "--secondary-key",
                  description: "Secondary SAS key value",
                  args: { name: "secondary-key" },
                },
              ],
            },
          ],
        },
        {
          name: "registration",
          description:
            "Manage device registrations for an enrollment group in an Azure IoT Hub Device Provisioning Service",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete a device registration in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: "--registration-id",
                  description: "ID of device registration",
                  args: { name: "registration-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
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
              name: "list",
              description:
                "List device registrations for an enrollment group in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: ["--enrollment-id", "--group-id", "--eid", "--gid"],
                  description: "Enrollment group ID",
                  args: { name: "enrollment-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
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
              description:
                "Get a device registration for an enrollment group in an Azure IoT Hub Device Provisioning Service",
              options: [
                {
                  name: "--registration-id",
                  description: "ID of device registration",
                  args: { name: "registration-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iotdps-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--dps-name", "-n"],
                  description:
                    "Name or hostname of the Azure IoT Hub Device Provisioning Service. Required if --login is not provided",
                  args: { name: "dps-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --dps-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "du",
      description:
        "Device Update for IoT Hub is a service that enables you to deploy over-the-air updates (OTA) for your IoT devices.\n\n\t\tAs organizations look to further enable productivity and operational efficiency, Internet of Things (IoT) solutions continue to be adopted at increasing rates. This makes it essential that the devices forming these solutions are built on a foundation of reliability and security and are easy to connect and manage at scale. Device Update for IoT Hub is an end-to-end platform that customers can use to publish, distribute, and manage over-the-air updates for everything from tiny sensors to gateway-level devices.\nTo learn more about the Device Update for IoT Hub service visit https://docs.microsoft.com/en-us/azure/iot-hub-device-update/",
      subcommands: [
        {
          name: "account",
          description: "Device Update account management",
          subcommands: [
            {
              name: "create",
              description: "Create a Device Update account",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--assign-identity",
                  description:
                    "Accepts system or user assigned identities separated by spaces. Use '[system]' to refer to the system assigned identity, or a resource Id to refer to a user assigned identity. Check out help for examples",
                  args: { name: "assign-identity" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Device Update account location. If no location is provided the resource group location is used. You can configure the default location using az configure --defaults location=<name>",
                  args: { name: "location" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--public-network-access", "--pna"],
                  description:
                    "Indicates if the Device Update account can be accessed from a public network",
                  args: {
                    name: "public-network-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--role",
                  description:
                    "Role name or Id the system assigned identity will have",
                  args: { name: "role" },
                },
                {
                  name: "--scopes",
                  description:
                    "Space-separated scopes the system assigned identity can access. Cannot be used with --no-wait",
                  args: { name: "scopes" },
                },
                {
                  name: "--sku",
                  description: "Device Update account SKU",
                  args: { name: "sku", suggestions: ["Free", "Standard"] },
                },
                {
                  name: "--tags",
                  description:
                    "Resource tags. Property bag in key-value pairs with the following format: a=b c=d",
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a Device Update account",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
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
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
                },
              ],
            },
            {
              name: "list",
              description:
                "List all Device Update accounts in a subscription or resource group",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "show",
              description: "Show the details of a Device Update account",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a Device Update account",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
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
                "Block until a desired account resource state has been met",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
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
              name: "private-endpoint-connection",
              description:
                "Device Update account private endpoint connection management",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete a private endpoint connection associated with a Device Update account",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--conn-name", "--cn"],
                      description: "Private endpoint connection name",
                      args: { name: "conn-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description:
                        "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List private endpoint connections associated with a Device Update account",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "set",
                  description:
                    "Set the state of a private endpoint connection associated with a Device Update account",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--conn-name", "--cn"],
                      description: "Private endpoint connection name",
                      args: { name: "conn-name" },
                      isRequired: true,
                    },
                    {
                      name: "--status",
                      description:
                        "The status of the private endpoint connection",
                      args: {
                        name: "status",
                        suggestions: ["Approved", "Pending", "Rejected"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--desc",
                      description:
                        "The reason for approval/rejection of the connection",
                      args: { name: "desc" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show a private endpoint connection associated with a Device Update account",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--conn-name", "--cn"],
                      description: "Private endpoint connection name",
                      args: { name: "conn-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
            {
              name: "private-link-resource",
              description:
                "Device Update account private link resource management",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List private link resources supported by the account",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "device",
          description: "Device Update device management",
          subcommands: [
            {
              name: "import",
              description:
                "Import devices and modules to the Device Update instance from a linked IoT Hub",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                  args: { name: "instance" },
                  isRequired: true,
                },
                {
                  name: ["--import-type", "--it"],
                  description: "The types of devices to import from IoT Hub",
                  args: {
                    name: "import-type",
                    suggestions: ["All", "Devices", "Modules"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List device identities contained within an instance",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                  args: { name: "instance" },
                  isRequired: true,
                },
                {
                  name: "--filter",
                  description:
                    "Restricts the set of devices returned. You can filter on groupId, deviceClassId, or groupId and deploymentStatus",
                  args: { name: "filter" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show a device identity contained within an instance",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                  args: { name: "instance" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "class",
              description:
                "Device class and device class subgroup management.\n\n\t\tA device class describes a set of devices which share a common set of attributes across groups while a device class subgroup is a subset of devices in a group that share the same device class id. Device classes are created automatically when Device Update-enabled devices are connected to the hub",
              subcommands: [
                {
                  name: "delete",
                  description: "Delete a device class or device class subgroup",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--class-id", "--cid"],
                      description:
                        "Device class Id. This is generated from the model Id and the compat properties reported by the device update agent in the Device Update PnP interface in IoT Hub. It is a hex-encoded SHA1 hash",
                      args: { name: "class-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--group-id", "--gid"],
                      description:
                        "Device group Id. This is created from the value of the ADUGroup tag in the connected IoT Hub's device/module twin or $default for devices with no tag",
                      args: { name: "group-id" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description:
                        "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
                    },
                  ],
                },
                {
                  name: "list",
                  description: "List device classes or device class subgroups",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: "--filter",
                      description:
                        "If provided with --group-id, supports filtering based on device class compat property names and values. For example \"compatProperties/manufacturer eq 'Contoso'\". Otherwise supports filtering by class friendly name",
                      args: { name: "filter" },
                    },
                    {
                      name: ["--group-id", "--gid"],
                      description:
                        "Device group Id. This is created from the value of the ADUGroup tag in the connected IoT Hub's device/module twin or $default for devices with no tag",
                      args: { name: "group-id" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show details about a device class or device class subgroup including installable updates, the best update and update compliance",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--class-id", "--cid"],
                      description:
                        "Device class Id. This is generated from the model Id and the compat properties reported by the device update agent in the Device Update PnP interface in IoT Hub. It is a hex-encoded SHA1 hash",
                      args: { name: "class-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: "--best-update",
                      description:
                        "Flag indicating the command should fetch the best available update for the device class subgroup including a count of how many devices need the update. Group Id is required for this flag. A best update is the latest update that meets all compatibility specifications of a device class",
                      args: {
                        name: "best-update",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: ["--group-id", "--gid"],
                      description:
                        "Device group Id. This is created from the value of the ADUGroup tag in the connected IoT Hub's device/module twin or $default for devices with no tag",
                      args: { name: "group-id" },
                    },
                    {
                      name: "--installable-updates",
                      description:
                        "Flag indicating the command should fetch installable updates for the device class",
                      args: {
                        name: "installable-updates",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--update-compliance",
                      description:
                        "Flag indicating the command should fetch device class subgroup update compliance information, such as how many devices are on their latest update, how many need new updates, and how many are in progress on receiving a new update. Group Id is required for this flag",
                      args: {
                        name: "update-compliance",
                        suggestions: ["false", "true"],
                      },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a device class",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--class-id", "--cid"],
                      description:
                        "Device class Id. This is generated from the model Id and the compat properties reported by the device update agent in the Device Update PnP interface in IoT Hub. It is a hex-encoded SHA1 hash",
                      args: { name: "class-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: "--friendly-name",
                      description:
                        "The device class friendly name. The friendly name must be 1 - 100 characters and supports alphanumeric, dot and dash values",
                      args: { name: "friendly-name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
            {
              name: "compliance",
              description: "Instance-view device compliance utilities",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Gets the breakdown of how many devices are on their latest update, have new updates available, or are in progress receiving new updates",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
            {
              name: "deployment",
              description:
                "Device deployment management.\n\n\t\tDeployments will apply a desired compatible update against a target device group distributing the update across device classes within the group. Cloud-initiated rollback policy can be optionally configured",
              subcommands: [
                {
                  name: "cancel",
                  description: "Cancel a device class subgroup deployment",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--class-id", "--cid"],
                      description:
                        "Device class Id. This is generated from the model Id and the compat properties reported by the device update agent in the Device Update PnP interface in IoT Hub. It is a hex-encoded SHA1 hash",
                      args: { name: "class-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--deployment-id", "--did"],
                      description:
                        "The caller-provided deployment Id. This cannot be longer than 73 characters, must be all lower-case, and cannot contain '&', '^', '[', ']', '{', '}', '|', '<', '>', forward slash, backslash, or double quote",
                      args: { name: "deployment-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--group-id", "--gid"],
                      description:
                        "Device group Id. This is created from the value of the ADUGroup tag in the connected IoT Hub's device/module twin or $default for devices with no tag",
                      args: { name: "group-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "create",
                  description:
                    "Create a deployment for a device group. The deployment will be multi-cast against every device class subgroup within the target group",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--deployment-id", "--did"],
                      description:
                        "The caller-provided deployment Id. This cannot be longer than 73 characters, must be all lower-case, and cannot contain '&', '^', '[', ']', '{', '}', '|', '<', '>', forward slash, backslash, or double quote",
                      args: { name: "deployment-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--group-id", "--gid"],
                      description:
                        "Device group Id. This is created from the value of the ADUGroup tag in the connected IoT Hub's device/module twin or $default for devices with no tag",
                      args: { name: "group-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--update-name", "--un"],
                      description: "The update name",
                      args: { name: "update-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--update-provider", "--up"],
                      description: "The update provider",
                      args: { name: "update-provider" },
                      isRequired: true,
                    },
                    {
                      name: ["--update-version", "--uv"],
                      description: "The update version",
                      args: { name: "update-version" },
                      isRequired: true,
                    },
                    {
                      name: ["--failed-count", "--fc"],
                      description:
                        "Integer representing the number of failed devices in a deployment before a cloud initated rollback occurs. Required when defining rollback policy",
                      args: { name: "failed-count" },
                    },
                    {
                      name: ["--failed-percentage", "--fp"],
                      description:
                        "Integer representing the percentage of failed devices in a deployment before a cloud initated rollback occurs. Required when defining rollback policy",
                      args: { name: "failed-percentage" },
                    },
                    {
                      name: ["--rollback-update-name", "--rbun"],
                      description: "The rollback update name",
                      args: { name: "rollback-update-name" },
                    },
                    {
                      name: ["--rollback-update-provider", "--rbup"],
                      description: "The rollback update provider",
                      args: { name: "rollback-update-provider" },
                    },
                    {
                      name: ["--rollback-update-version", "--rbuv"],
                      description: "The rollback update version",
                      args: { name: "rollback-update-version" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--start-time",
                      description:
                        "The iso-8601 compliant start time for deployment. If no value is provided the corresponding value for UTC 'now' will be used",
                      args: { name: "start-time" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a deployment by device group or device class subgroup",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--deployment-id", "--did"],
                      description:
                        "The caller-provided deployment Id. This cannot be longer than 73 characters, must be all lower-case, and cannot contain '&', '^', '[', ']', '{', '}', '|', '<', '>', forward slash, backslash, or double quote",
                      args: { name: "deployment-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--group-id", "--gid"],
                      description:
                        "Device group Id. This is created from the value of the ADUGroup tag in the connected IoT Hub's device/module twin or $default for devices with no tag",
                      args: { name: "group-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--class-id", "--cid"],
                      description:
                        "Device class Id. This is generated from the model Id and the compat properties reported by the device update agent in the Device Update PnP interface in IoT Hub. It is a hex-encoded SHA1 hash",
                      args: { name: "class-id" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description:
                        "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List deployments for a device group or device class subgroup",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--group-id", "--gid"],
                      description:
                        "Device group Id. This is created from the value of the ADUGroup tag in the connected IoT Hub's device/module twin or $default for devices with no tag",
                      args: { name: "group-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--class-id", "--cid"],
                      description:
                        "Device class Id. This is generated from the model Id and the compat properties reported by the device update agent in the Device Update PnP interface in IoT Hub. It is a hex-encoded SHA1 hash",
                      args: { name: "class-id" },
                    },
                    {
                      name: "--order-by",
                      description:
                        "Orders the set of deployments returned. You can order by startDateTime [desc/asc]",
                      args: { name: "order-by" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "list-devices",
                  description:
                    "List devices in a device class subgroup deployment along with their state. Useful for getting a list of failed devices",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--class-id", "--cid"],
                      description:
                        "Device class Id. This is generated from the model Id and the compat properties reported by the device update agent in the Device Update PnP interface in IoT Hub. It is a hex-encoded SHA1 hash",
                      args: { name: "class-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--deployment-id", "--did"],
                      description:
                        "The caller-provided deployment Id. This cannot be longer than 73 characters, must be all lower-case, and cannot contain '&', '^', '[', ']', '{', '}', '|', '<', '>', forward slash, backslash, or double quote",
                      args: { name: "deployment-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--group-id", "--gid"],
                      description:
                        "Device group Id. This is created from the value of the ADUGroup tag in the connected IoT Hub's device/module twin or $default for devices with no tag",
                      args: { name: "group-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: "--filter",
                      description:
                        "Restricts the set of deployment device states returned. You can filter on deviceId and moduleId and/or deviceState",
                      args: { name: "filter" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "retry",
                  description: "Retry a device class subgroup deployment",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--class-id", "--cid"],
                      description:
                        "Device class Id. This is generated from the model Id and the compat properties reported by the device update agent in the Device Update PnP interface in IoT Hub. It is a hex-encoded SHA1 hash",
                      args: { name: "class-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--deployment-id", "--did"],
                      description:
                        "The caller-provided deployment Id. This cannot be longer than 73 characters, must be all lower-case, and cannot contain '&', '^', '[', ']', '{', '}', '|', '<', '>', forward slash, backslash, or double quote",
                      args: { name: "deployment-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--group-id", "--gid"],
                      description:
                        "Device group Id. This is created from the value of the ADUGroup tag in the connected IoT Hub's device/module twin or $default for devices with no tag",
                      args: { name: "group-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show a deployment for a device group or device class subgroup including status which details a breakdown of how many devices in the deployment are in progress, completed, or failed",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--deployment-id", "--did"],
                      description:
                        "The caller-provided deployment Id. This cannot be longer than 73 characters, must be all lower-case, and cannot contain '&', '^', '[', ']', '{', '}', '|', '<', '>', forward slash, backslash, or double quote",
                      args: { name: "deployment-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--group-id", "--gid"],
                      description:
                        "Device group Id. This is created from the value of the ADUGroup tag in the connected IoT Hub's device/module twin or $default for devices with no tag",
                      args: { name: "group-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--class-id", "--cid"],
                      description:
                        "Device class Id. This is generated from the model Id and the compat properties reported by the device update agent in the Device Update PnP interface in IoT Hub. It is a hex-encoded SHA1 hash",
                      args: { name: "class-id" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--status",
                      description:
                        "Gets the status of a deployment including a breakdown of how many devices in the deployment are in progress, completed, or failed",
                      args: { name: "status", suggestions: ["false", "true"] },
                    },
                  ],
                },
              ],
            },
            {
              name: "group",
              description:
                "Device group management.\n\n\t\tA device group is a collection of devices. Device groups provide a way to scale deployments to many devices. Each device belongs to exactly one device group at a time. A device group is automatically created when a Device Update-enabled device is connected to the hub and reports its properties",
              subcommands: [
                {
                  name: "delete",
                  description: "Delete a device group",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--group-id", "--gid"],
                      description:
                        "Device group Id. This is created from the value of the ADUGroup tag in the connected IoT Hub's device/module twin or $default for devices with no tag",
                      args: { name: "group-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description:
                        "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
                    },
                  ],
                },
                {
                  name: "list",
                  description: "List device groups within an instance",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: "--order-by",
                      description:
                        "Orders the set of groups returned. You can order by groupId, deviceCount, createdDateTime, subgroupsWithNewUpdatesAvailableCount, subgroupsWithUpdatesInProgressCount or subgroupsWithOnLatestUpdateCount",
                      args: { name: "order-by" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show details about a device group including the best update and update compliance",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--group-id", "--gid"],
                      description:
                        "Device group Id. This is created from the value of the ADUGroup tag in the connected IoT Hub's device/module twin or $default for devices with no tag",
                      args: { name: "group-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: "--best-updates",
                      description:
                        "Flag indicating the command should fetch the best available updates for the device group including a count of how many devices need each update. A best update is the latest update that meets all compatibility specifications of a device class",
                      args: {
                        name: "best-updates",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--update-compliance",
                      description:
                        "Flag indicating the command should fetch device group update compliance information such as how many devices are on their latest update, how many need new updates, and how many are in progress on receiving a new update",
                      args: {
                        name: "update-compliance",
                        suggestions: ["false", "true"],
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "health",
              description: "Device health-check utilities",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List device health with respect to a target filter",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: "--filter",
                      description:
                        "Device health filter. Supports the properties of state or deviceId. If deviceId is provided moduleId can be optionally specified",
                      args: { name: "filter" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
            {
              name: "log",
              description: "Instance log collection management",
              subcommands: [
                {
                  name: "collect",
                  description:
                    "Configure a device diagnostics log collection operation on specified devices",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: "--agent-id",
                      description:
                        "Space-separated key=value pairs corresponding to device update agent identifier properties. The key of deviceId is required, while moduleId is optional. --agent-id can be used 1 or more times",
                      args: { name: "agent-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--log-collection-id", "--lcid"],
                      description: "Log collection Id",
                      args: { name: "log-collection-id" },
                      isRequired: true,
                    },
                    {
                      name: "--description",
                      description:
                        "Description for the log collection operation",
                      args: { name: "description" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List instance diagnostic log collection operations",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show a specific instance diagnostic log collection operation",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--log-collection-id", "--lcid"],
                      description: "Log collection Id",
                      args: { name: "log-collection-id" },
                      isRequired: true,
                    },
                    {
                      name: "--detailed",
                      description:
                        "Flag indicating whether the command should fetch the detailed status of a log collection operation",
                      args: {
                        name: "detailed",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
            {
              name: "module",
              description: "Device module management",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Show a device module identity imported to the instance",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--device-id", "-d"],
                      description: "Target Device Id",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--module-id", "-m"],
                      description: "Target Module Id",
                      args: { name: "module-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "instance",
          description: "Device Update instance management",
          subcommands: [
            {
              name: "create",
              description: "Create a Device Update instance",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                  args: { name: "instance" },
                  isRequired: true,
                },
                {
                  name: "--iothub-ids",
                  description: "Space-separated IoT Hub resource Ids",
                  args: { name: "iothub-ids" },
                  isRequired: true,
                },
                {
                  name: "--diagnostics-storage-id",
                  description:
                    "User provided storage account resource Id for use in diagnostic logs collection",
                  args: { name: "diagnostics-storage-id" },
                },
                {
                  name: "--enable-diagnostics",
                  description: "Enables diagnostic logs collection",
                  args: {
                    name: "enable-diagnostics",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--tags",
                  description:
                    "Resource tags. Property bag in key-value pairs with the following format: a=b c=d",
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a Device Update instance",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                  args: { name: "instance" },
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
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
                },
              ],
            },
            {
              name: "list",
              description: "List Device Update instances",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "show",
              description: "Show a Device Update instance",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                  args: { name: "instance" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a Device Update instance",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                  args: { name: "instance" },
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
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
                "Block until a desired instance resource state has been met",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                  args: { name: "instance" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
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
          name: "update",
          description: "Device Update update management",
          subcommands: [
            {
              name: "calculate-hash",
              description:
                "Calculate the base64 hashed representation of a file",
              options: [
                {
                  name: ["--file-path", "-f"],
                  description:
                    "Local path to target file for hash calculation. --file-path can be used 1 or more times",
                  args: { name: "file-path" },
                  isRequired: true,
                },
                {
                  name: "--hash-algo",
                  description: "Cryptographic algorithm to use for hashing",
                  args: { name: "hash-algo", suggestions: ["sha256"] },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a specific update version",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                  args: { name: "instance" },
                  isRequired: true,
                },
                {
                  name: ["--update-name", "--un"],
                  description: "The update name",
                  args: { name: "update-name" },
                  isRequired: true,
                },
                {
                  name: ["--update-provider", "--up"],
                  description: "The update provider",
                  args: { name: "update-provider" },
                  isRequired: true,
                },
                {
                  name: ["--update-version", "--uv"],
                  description: "The update version",
                  args: { name: "update-version" },
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
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
                },
              ],
            },
            {
              name: "import",
              description:
                "Import a new update version into the Device Update instance",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                  args: { name: "instance" },
                  isRequired: true,
                },
                {
                  name: "--url",
                  description:
                    "Routable location from which the import manifest can be downloaded by Device Update for IoT Hub. This is typically a read-only SAS-protected blob URL with an expiration set to at least 3 hours",
                  args: { name: "url" },
                  isRequired: true,
                },
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer" },
                },
                {
                  name: "--file",
                  description:
                    "Space-separated key=value pairs corresponding to import manifest metadata file properties. Required keys include filename and url. --file can be used 1 or more times",
                  args: { name: "file" },
                },
                {
                  name: "--friendly-name",
                  description:
                    "Friendly name associated with the update definition",
                  args: { name: "friendly-name" },
                },
                {
                  name: "--hashes",
                  description:
                    "Space-separated key=value pairs where the key is the hash algorithm used and the value is the base64 encoded import manifest file hash. At least a sha256 entry is required. If not provided it will by calculated from the provided url",
                  args: { name: "hashes" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--size",
                  description:
                    "File size in number of bytes. If not provided it will by calculated from the provided url",
                  args: { name: "size" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List updates that have been imported to the Device Update instance",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                  args: { name: "instance" },
                  isRequired: true,
                },
                {
                  name: "--by-provider",
                  description:
                    "Flag indicating the result set should be constrained to update providers",
                  args: { name: "by-provider", suggestions: ["false", "true"] },
                },
                {
                  name: "--filter",
                  description:
                    "Restricts the set of updates returned by property values. Supported when listing updates with no constraints or when listing by version",
                  args: { name: "filter" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--search",
                  description:
                    "Request updates matching a free-text search expression. Supported when listing updates with no constraints",
                  args: { name: "search" },
                },
                {
                  name: ["--update-name", "--un"],
                  description: "The update name",
                  args: { name: "update-name" },
                },
                {
                  name: ["--update-provider", "--up"],
                  description: "The update provider",
                  args: { name: "update-provider" },
                },
              ],
            },
            {
              name: "show",
              description: "Show a specific update version",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                  args: { name: "instance" },
                  isRequired: true,
                },
                {
                  name: ["--update-name", "--un"],
                  description: "The update name",
                  args: { name: "update-name" },
                  isRequired: true,
                },
                {
                  name: ["--update-provider", "--up"],
                  description: "The update provider",
                  args: { name: "update-provider" },
                  isRequired: true,
                },
                {
                  name: ["--update-version", "--uv"],
                  description: "The update version",
                  args: { name: "update-version" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "stage",
              description: "Stage an update for import to a target instance",
              options: [
                {
                  name: ["--account", "-n"],
                  description:
                    "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                  args: { name: "instance" },
                  isRequired: true,
                },
                {
                  name: "--manifest-path",
                  description:
                    "Local file path to the import manifest that should be staged. Can be used 1 or more times",
                  args: { name: "manifest-path" },
                  isRequired: true,
                },
                {
                  name: "--storage-account",
                  description:
                    "Desired storage account name to stage import manifest artifacts",
                  args: { name: "storage-account" },
                  isRequired: true,
                },
                {
                  name: "--storage-container",
                  description:
                    "Desired storage container name to stage import manifest artifacts",
                  args: { name: "storage-container" },
                  isRequired: true,
                },
                {
                  name: "--friendly-name",
                  description:
                    "Friendly name associated with the update definition",
                  args: { name: "friendly-name" },
                },
                {
                  name: "--overwrite",
                  description:
                    "Flag indicating whether existing blobs should be overwritten if a conflict exists",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--storage-subscription",
                  description:
                    "Desired storage account subscription to stage import manifest artifacts. Applicable when the storage and device update accounts are in different subscriptions",
                  args: { name: "storage-subscription" },
                },
                {
                  name: "--then-import",
                  description:
                    "Flag indicating whether the update should be imported after staging",
                  args: { name: "then-import", suggestions: ["false", "true"] },
                },
              ],
            },
            {
              name: "file",
              description: "Update file operations",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List update file Ids with respect to update provider, name and version",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--update-name", "--un"],
                      description: "The update name",
                      args: { name: "update-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--update-provider", "--up"],
                      description: "The update provider",
                      args: { name: "update-provider" },
                      isRequired: true,
                    },
                    {
                      name: ["--update-version", "--uv"],
                      description: "The update version",
                      args: { name: "update-version" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show the details of a specific update file with respect to update provider, name and version",
                  options: [
                    {
                      name: ["--account", "-n"],
                      description:
                        "Device Update account name. You can configure the default account name using az config set defaults.adu_account=<name>",
                      args: { name: "account" },
                      isRequired: true,
                    },
                    {
                      name: ["--instance", "-i"],
                      description:
                        "Device Update instance name. You can configure the default instance name using az config set defaults.adu_instance=<name>",
                      args: { name: "instance" },
                      isRequired: true,
                    },
                    {
                      name: ["--update-file-id", "--ufid"],
                      description: "The update file Id",
                      args: { name: "update-file-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--update-name", "--un"],
                      description: "The update name",
                      args: { name: "update-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--update-provider", "--up"],
                      description: "The update provider",
                      args: { name: "update-provider" },
                      isRequired: true,
                    },
                    {
                      name: ["--update-version", "--uv"],
                      description: "The update version",
                      args: { name: "update-version" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Device Update account resource group name. You can configure the default group using az config set defaults.adu_group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
            {
              name: "init",
              description: "Utility for import manifest initialization",
              subcommands: [
                {
                  name: "v5",
                  description:
                    "Initialize a v5 import manifest with the desired state",
                  options: [
                    {
                      name: "--compat",
                      description:
                        "Space-separated key=value pairs corresponding to properties of a device this update is compatible with. Typically used for defining properties such as manufacturer and model. --compat can be used 1 or more times",
                      args: { name: "compat" },
                      isRequired: true,
                    },
                    {
                      name: "--step",
                      description:
                        "Space-separated key=value pairs corresponding to 'instructions.steps' element properties. The client will determine if a step is an inline or reference step based on the provided key value pairs. If either inline or reference step can be satisfied, the reference step will be prioritized. Usage of --file will be associated with the nearest inline --step entry, deriving the value for 'files'. The following reference step keys are supported: updateId.provider, updateId.name, updateId.version and description. The following inline step keys are supported: handler (ex: 'microsoft/script:1' or 'microsoft/swupdate:1' or 'microsoft/apt:1'), properties (in-line json object the agent will pass to the handler), and description. --step can be used 1 or more times",
                      args: { name: "step" },
                      isRequired: true,
                    },
                    {
                      name: "--update-name",
                      description: "The update name as a component of updateId",
                      args: { name: "update-name" },
                      isRequired: true,
                    },
                    {
                      name: "--update-provider",
                      description:
                        "The update provider as a component of updateId",
                      args: { name: "update-provider" },
                      isRequired: true,
                    },
                    {
                      name: "--update-version",
                      description:
                        "The update version as a component of updateId",
                      args: { name: "update-version" },
                      isRequired: true,
                    },
                    {
                      name: "--description",
                      description: "Description for the import manifest",
                      args: { name: "description" },
                    },
                    {
                      name: "--file",
                      description:
                        "Space-separated key=value pairs corresponding to 'files' element properties. A --file entry can include the closest --related-file entries if provided. The following keys are supported: path [required] local file path to update file, downloadHandler (ex: 'microsoft/delta:1') handler for utilizing related files to download payload file, properties (in-line json object the agent will pass to the handler). --file can be used 1 or more times",
                      args: { name: "file" },
                    },
                    {
                      name: "--is-deployable",
                      description:
                        "Indicates whether the update is independently deployable",
                      args: {
                        name: "is-deployable",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--no-validation",
                      description:
                        "Disables client-side json schema validation of the import manifest content",
                      args: {
                        name: "no-validation",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--related-file",
                      description:
                        "Space-separated key=value pairs corresponding to 'files[*].relatedFiles' element properties. A --related-file entry will be associated to the closest --file entry if it exists. The following keys are supported: path [required] local file path to related update file, properties (in-line json object passed to the download handler). --related-file can be used 1 or more times",
                      args: { name: "related-file" },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "edge",
      description: "Manage IoT solutions on the Edge",
      subcommands: [
        {
          name: "export-modules",
          description:
            "Export the edge modules' configuration on a single edge device",
          options: [
            {
              name: ["--device-id", "-d"],
              description: "Target Device Id",
              args: { name: "device-id" },
              isRequired: true,
            },
            {
              name: "--auth-type",
              description:
                "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
              args: { name: "auth-type", suggestions: ["key", "login"] },
            },
            {
              name: ["--hub-name", "-n"],
              description:
                "IoT Hub name or hostname. Required if --login is not provided",
              args: { name: "hub-name" },
            },
            {
              name: ["--login", "-l"],
              description:
                'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
              args: { name: "login" },
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
          name: "set-modules",
          description: "Set edge modules on a single device",
          options: [
            {
              name: ["--content", "-k"],
              description:
                "IoT Edge deployment content. Provide file path or raw json",
              args: { name: "content" },
              isRequired: true,
            },
            {
              name: ["--device-id", "-d"],
              description: "Target Device Id",
              args: { name: "device-id" },
              isRequired: true,
            },
            {
              name: "--auth-type",
              description:
                "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
              args: { name: "auth-type", suggestions: ["key", "login"] },
            },
            {
              name: ["--hub-name", "-n"],
              description:
                "IoT Hub name or hostname. Required if --login is not provided",
              args: { name: "hub-name" },
            },
            {
              name: ["--login", "-l"],
              description:
                'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
              args: { name: "login" },
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
          name: "deployment",
          description: "Manage IoT Edge deployments at scale",
          subcommands: [
            {
              name: "create",
              description: "Create an IoT Edge deployment in a target IoT Hub",
              options: [
                {
                  name: ["--content", "-k"],
                  description:
                    "IoT Edge deployment content. Provide file path or raw json",
                  args: { name: "content" },
                  isRequired: true,
                },
                {
                  name: ["--deployment-id", "-d"],
                  description:
                    "Target deployment name. Lowercase and the following special characters are allowed: [-+%_*!']",
                  args: { name: "deployment-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--custom-labels", "--cl"],
                  description:
                    'An alternative input style (space separated key=value pairs) for --labels and intended to replace it in the future. Format example: key1=value1 key2="this is my value"',
                  args: { name: "custom-labels" },
                },
                {
                  name: ["--custom-metric-queries", "--cmq"],
                  description:
                    'An alternative input style (space separated key=value pairs) for --metrics and intended to replace it in the future. Format example: metric1="select deviceId from devices where tags.location=\'US\'" metric2="select *"',
                  args: { name: "custom-metric-queries" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--labels", "--lab"],
                  description:
                    'Map of labels to be applied to target deployment. Use the following format: \'{"key0":"value0", "key1":"value1"}\'. Using --custom-labels instead of --labels is recommended',
                  args: { name: "labels" },
                },
                {
                  name: "--layered",
                  description:
                    "Layered deployments allow you to define desired properties in $edgeAgent, $edgeHub and user modules that will layer on top of a base deployment. The properties specified in a layered deployment will merge with properties of the base deployment. Properties with the same path will be overwritten based on deployment priority. This option is an alias for --no-validation",
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--metrics", "-m"],
                  description:
                    'IoT Edge deployment user metric definitions. Provide file path or raw json. User metrics are in the form of {"queries":{...}} or {"metrics":{"queries":{...}}}. Using --custom-metric-queries instead of --metrics is recommended',
                  args: { name: "metrics" },
                },
                {
                  name: "--no-validation",
                  description:
                    "Disables client side schema validation for edge deployment creation",
                },
                {
                  name: ["--priority", "--pri"],
                  description:
                    "Weight of deployment in case of competing rules (highest wins)",
                  args: { name: "priority" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--target-condition", "--tc", "-t"],
                  description:
                    "Target condition in which an edge deployment applies to. Deployments with no target condition will target no device. Use the following format: \"tags.environment='test'\"",
                  args: { name: "target-condition" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an IoT Edge deployment",
              options: [
                {
                  name: ["--deployment-id", "-d"],
                  description:
                    "Target deployment name. Lowercase and the following special characters are allowed: [-+%_*!']",
                  args: { name: "deployment-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              name: "list",
              description: "List IoT Edge deployments in an IoT Hub",
              options: [
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--top",
                  description:
                    "Maximum number of deployments to return. By default all deployments are returned",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of an IoT Edge deployment",
              options: [
                {
                  name: ["--deployment-id", "-d"],
                  description:
                    "Target deployment name. Lowercase and the following special characters are allowed: [-+%_*!']",
                  args: { name: "deployment-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              name: "show-metric",
              description:
                "Evaluate a target system metric defined in an IoT Edge deployment",
              options: [
                {
                  name: ["--deployment-id", "-d"],
                  description:
                    "Target deployment name. Lowercase and the following special characters are allowed: [-+%_*!']",
                  args: { name: "deployment-id" },
                  isRequired: true,
                },
                {
                  name: ["--metric-id", "-m"],
                  description: "Target metric for evaluation",
                  args: { name: "metric-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--metric-type", "--mt"],
                  description:
                    "Indicates which metric collection should be used to lookup a metric",
                  args: {
                    name: "metric-type",
                    suggestions: ["system", "user"],
                  },
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
              description:
                "Update specified properties of an IoT Edge deployment",
              options: [
                {
                  name: ["--deployment-id", "-d"],
                  description:
                    "Target deployment name. Lowercase and the following special characters are allowed: [-+%_*!']",
                  args: { name: "deployment-id" },
                  isRequired: true,
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              ],
            },
          ],
        },
        {
          name: "devices",
          description: "Commands to manage IoT Edge devices",
          subcommands: [
            {
              name: "create",
              description:
                "Create and configure multiple edge devices in an IoT Hub",
              options: [
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--config-file", "--config", "--cfg"],
                  description:
                    "Path to devices configuration file. Sample configuration file: https://aka.ms/aziotcli-edge-devices-config",
                  args: { name: "config-file" },
                },
                {
                  name: ["--clean", "-c"],
                  description:
                    "Deletes all devices in target hub before creating new devices",
                },
                {
                  name: ["--device-config-template", "--dct"],
                  description:
                    "Path to IoT Edge config.toml file to use as a basis for edge device configs",
                  args: { name: "device-config-template" },
                },
                {
                  name: ["--default-edge-agent", "--default-agent", "--dea"],
                  description:
                    "Default edge agent for created Edge devices if not specified individually",
                  args: { name: "default-edge-agent" },
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "Space-separated key=value pairs corresponding to properties of the edge device to create. The following key values are supported: id (device_id), deployment (inline json or path to file), hostname, parent (device_id), edge_agent (image URL), and container_auth (inline json or path to file). --device can be used 1 or more times. Review help examples for full parameter usage - these parameters also refer to their corresponding values in our sample configuration file: https://aka.ms/aziotcli-edge-devices-config",
                  args: { name: "device" },
                },
                {
                  name: ["--device-auth-type", "--device-auth"],
                  description: "Device to hub authorization mechanism",
                  args: {
                    name: "device-auth-type",
                    suggestions: ["shared_private_key", "x509_thumbprint"],
                  },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--output-path", "--out"],
                  description:
                    "Directory path to output device configuration bundles. If this value is not specified, no file output will be created",
                  args: { name: "output-path" },
                },
                {
                  name: ["--root-cert", "--rc"],
                  description:
                    "Path to root public key certificate to sign nested edge device certs",
                  args: { name: "root-cert" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--root-key", "--rk"],
                  description:
                    "Path to root private key to sign nested edge device certs",
                  args: { name: "root-key" },
                },
                {
                  name: ["--root-pass", "--rp"],
                  description: "Root key password",
                  args: { name: "root-pass" },
                },
                {
                  name: ["--visualize", "--vis", "-v"],
                  description:
                    "Shows visualizations of devices and progress of various tasks (device creation, setting parents, updating configs, etc)",
                },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Do not prompt for confirmation when --clean switch is used to delete existing hub devices",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "hub",
      description: "Manage Azure IoT hubs",
      subcommands: [
        {
          name: "create",
          description: "Create an Azure IoT hub",
          options: [
            {
              name: ["--name", "-n"],
              description: "IoT Hub name",
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
              name: ["--c2d-max-delivery-count", "--cdd"],
              description:
                "The number of times the IoT hub will attempt to deliver a cloud-to-device message to a device, between 1 and 100",
              args: { name: "c2d-max-delivery-count" },
            },
            {
              name: ["--c2d-ttl", "--ct"],
              description:
                "The amount of time a message is available for the device to consume before it is expired by IoT Hub, between 1 and 48 hours",
              args: { name: "c2d-ttl" },
            },
            {
              name: ["--disable-device-sas", "--dds"],
              description:
                "A boolean indicating whether or not to disable all device (including Edge devices but excluding modules) scoped SAS keys for authentication",
              args: {
                name: "disable-device-sas",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--disable-local-auth", "--dla"],
              description:
                "A boolean indicating whether or not to disable IoT hub scoped SAS keys for authentication",
              args: {
                name: "disable-local-auth",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--disable-module-sas", "--dms"],
              description:
                "A boolean indicating whether or not to disable module-scoped SAS keys for authentication",
              args: {
                name: "disable-module-sas",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--enforce-data-residency", "--edr"],
              description:
                "Enforce data residency for this IoT Hub by disabling cross-region disaster recovery. This property is immutable once set on the resource. Only available in select regions. Learn more at https://aka.ms/iothubdisabledr",
              args: {
                name: "enforce-data-residency",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--fileupload-storage-container-name", "--fc"],
              description:
                "The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified",
              args: { name: "fileupload-storage-container-name" },
            },
            {
              name: ["--fileupload-storage-connectionstring", "--fcs"],
              description:
                "The connection string for the Azure Storage account to which files are uploaded",
              args: { name: "fileupload-storage-connectionstring" },
            },
            {
              name: ["--feedback-max-delivery-count", "--fd"],
              description:
                "The number of times the IoT hub attempts to deliver a message on the feedback queue, between 1 and 100",
              args: { name: "feedback-max-delivery-count" },
            },
            {
              name: ["--feedback-lock-duration", "--fld"],
              description:
                "The lock duration for the feedback queue, between 5 and 300 seconds",
              args: { name: "feedback-lock-duration" },
            },
            {
              name: ["--feedback-ttl", "--ft"],
              description:
                "The period of time for which the IoT hub will maintain the feedback for expiration or delivery of cloud-to-device messages, between 1 and 48 hours",
              args: { name: "feedback-ttl" },
            },
            {
              name: ["--fileupload-notification-lock-duration", "--fnld"],
              description:
                "The lock duration for the file upload notifications queue, between 5 and 300 seconds",
              args: { name: "fileupload-notification-lock-duration" },
            },
            {
              name: ["--fileupload-notification-max-delivery-count", "--fnd"],
              description:
                "The number of times the IoT hub will attempt to deliver a file notification message, between 1 and 100",
              args: { name: "fileupload-notification-max-delivery-count" },
            },
            {
              name: ["--fileupload-notification-ttl", "--fnt"],
              description:
                "The amount of time a file upload notification is available for the service to consume before it is expired by IoT Hub, between 1 and 48 hours",
              args: { name: "fileupload-notification-ttl" },
            },
            {
              name: ["--fileupload-notifications", "--fn"],
              description:
                "A boolean indicating whether to log information about uploaded files to the messages/servicebound/filenotifications IoT Hub endpoint",
            },
            {
              name: ["--fileupload-sas-ttl", "--fst"],
              description:
                "The amount of time a SAS URI generated by IoT Hub is valid before it expires, between 1 and 24 hours",
              args: { name: "fileupload-sas-ttl" },
            },
            {
              name: ["--fileupload-storage-auth-type", "--fsa"],
              description:
                "The authentication type for the Azure Storage account to which files are uploaded",
              args: {
                name: "fileupload-storage-auth-type",
                suggestions: ["identityBased", "keyBased"],
              },
            },
            {
              name: ["--fileupload-storage-identity", "--fsi"],
              description:
                "The managed identity to use for file upload authentication. Use '[system]' to refer to the system-assigned managed identity or a resource ID to refer to a user-assigned managed identity",
              args: { name: "fileupload-storage-identity" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of your IoT Hub. Default is the location of target resource group",
              args: { name: "location" },
            },
            {
              name: "--mi-system-assigned",
              description:
                "Enable system-assigned managed identity for this hub",
              args: {
                name: "mi-system-assigned",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--mi-user-assigned",
              description:
                "Enable user-assigned managed identities for this hub. Accept space-separated list of identity resource IDs",
              args: { name: "mi-user-assigned" },
            },
            {
              name: ["--min-tls-version", "--mintls"],
              description:
                'Specify the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected',
              args: { name: "min-tls-version" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--partition-count",
              description:
                "The number of partitions of the backing Event Hub for device-to-cloud messages",
              args: { name: "partition-count" },
            },
            {
              name: ["--retention-day", "--rd"],
              description:
                "Specifies how long this IoT hub will maintain device-to-cloud events, between 1 and 7 days",
              args: { name: "retention-day" },
            },
            {
              name: "--role",
              description:
                "Role to assign to the hub's system-assigned managed identity",
              args: { name: "role" },
            },
            {
              name: "--scopes",
              description:
                "Space separated list of scopes to assign the role (--role) for the system-assigned managed identity",
              args: { name: "scopes" },
            },
            {
              name: "--sku",
              description:
                "Pricing tier for Azure IoT Hub. Note that only one free IoT hub instance (F1) is allowed in each subscription. Exception will be thrown if free instances exceed one",
              args: {
                name: "sku",
                suggestions: ["B1", "B2", "B3", "F1", "S1", "S2", "S3"],
              },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--unit",
              description: "Units in your IoT Hub",
              args: { name: "unit" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an IoT hub",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub name",
              args: { name: "name" },
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
          name: "generate-sas-token",
          description:
            "Generate a SAS token for a target IoT Hub, device or module",
          options: [
            {
              name: "--auth-type",
              description:
                "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
              args: { name: "auth-type", suggestions: ["key", "login"] },
            },
            {
              name: ["--connection-string", "--cs"],
              description:
                "Target connection string. This bypasses the IoT Hub registry and generates the SAS token directly from the supplied symmetric key without further validation. All other command parameters aside from duration will be ignored. Supported connection string types: Iot Hub, Device, Module",
              args: { name: "connection-string" },
            },
            {
              name: ["--device-id", "-d"],
              description: "Target Device Id",
              args: { name: "device-id" },
            },
            {
              name: ["--duration", "--du"],
              description: "Valid token duration in seconds",
              args: { name: "duration" },
            },
            {
              name: ["--hub-name", "-n"],
              description:
                "IoT Hub name or hostname. Required if --login is not provided",
              args: { name: "hub-name" },
            },
            {
              name: ["--key-type", "--kt"],
              description: "Shared access policy key type for authentication",
              args: { name: "key-type", suggestions: ["primary", "secondary"] },
            },
            {
              name: ["--login", "-l"],
              description:
                'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
              args: { name: "login" },
            },
            {
              name: ["--module-id", "-m"],
              description: "Target Module Id",
              args: { name: "module-id" },
            },
            {
              name: ["--policy-name", "--pn"],
              description:
                "Shared access policy with operation permissions for target IoT Hub entity",
              args: { name: "policy-name" },
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
          name: "invoke-device-method",
          description: "Invoke a device method",
          options: [
            {
              name: ["--device-id", "-d"],
              description: "Target Device Id",
              args: { name: "device-id" },
              isRequired: true,
            },
            {
              name: ["--method-name", "--mn"],
              description: "Target method for invocation",
              args: { name: "method-name" },
              isRequired: true,
            },
            {
              name: "--auth-type",
              description:
                "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
              args: { name: "auth-type", suggestions: ["key", "login"] },
            },
            {
              name: ["--hub-name", "-n"],
              description:
                "IoT Hub name or hostname. Required if --login is not provided",
              args: { name: "hub-name" },
            },
            {
              name: ["--login", "-l"],
              description:
                'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
              args: { name: "login" },
            },
            {
              name: ["--method-payload", "--mp"],
              description:
                "Json payload to be passed to method. Must be file path or raw json",
              args: { name: "method-payload" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--timeout", "--to"],
              description:
                "Maximum number of seconds to wait for the device method result",
              args: { name: "timeout" },
            },
          ],
        },
        {
          name: "invoke-module-method",
          description: "Invoke a module method",
          options: [
            {
              name: ["--device-id", "-d"],
              description: "Target Device Id",
              args: { name: "device-id" },
              isRequired: true,
            },
            {
              name: ["--method-name", "--mn"],
              description: "Target method for invocation",
              args: { name: "method-name" },
              isRequired: true,
            },
            {
              name: ["--module-id", "-m"],
              description: "Target Module Id",
              args: { name: "module-id" },
              isRequired: true,
            },
            {
              name: "--auth-type",
              description:
                "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
              args: { name: "auth-type", suggestions: ["key", "login"] },
            },
            {
              name: ["--hub-name", "-n"],
              description:
                "IoT Hub name or hostname. Required if --login is not provided",
              args: { name: "hub-name" },
            },
            {
              name: ["--login", "-l"],
              description:
                'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
              args: { name: "login" },
            },
            {
              name: ["--method-payload", "--mp"],
              description:
                "Json payload to be passed to method. Must be file path or raw json",
              args: { name: "method-payload" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--timeout", "--to"],
              description:
                "Maximum number of seconds to wait for the module method result",
              args: { name: "timeout" },
            },
          ],
        },
        {
          name: "list",
          description: "List IoT hubs",
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
          name: "list-skus",
          description: "List available pricing tiers",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub name",
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
          name: "manual-failover",
          description:
            "Initiate a manual failover for the IoT Hub to the geo-paired disaster recovery region",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub name",
              args: { name: "name" },
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
          name: "monitor-events",
          description: "Monitor device telemetry & messages sent to an IoT Hub",
          options: [
            {
              name: ["--consumer-group", "--cg", "-c"],
              description:
                "Specify the consumer group to use when connecting to event hub endpoint",
              args: { name: "consumer-group" },
            },
            {
              name: ["--content-type", "--ct"],
              description:
                "Specify the Content-Type of the message payload to automatically format the output to that type",
              args: { name: "content-type" },
            },
            {
              name: ["--device-id", "-d"],
              description: "Target Device Id",
              args: { name: "device-id" },
            },
            {
              name: ["--device-query", "-q"],
              description: "Specify a custom query to filter devices",
              args: { name: "device-query" },
            },
            {
              name: ["--enqueued-time", "--et", "-e"],
              description:
                'Indicates the time that should be used as a starting point to read messages from the partitions. Units are milliseconds since unix epoch. If no time is indicated "now" is used',
              args: { name: "enqueued-time" },
            },
            {
              name: ["--hub-name", "-n"],
              description:
                "IoT Hub name or hostname. Required if --login is not provided",
              args: { name: "hub-name" },
            },
            {
              name: ["--interface", "-i"],
              description:
                "Target interface identifier to filter on. For example: dtmi:com:example:TemperatureController;1",
              args: { name: "interface" },
            },
            {
              name: ["--login", "-l"],
              description:
                'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
              args: { name: "login" },
            },
            {
              name: ["--message-count", "--mc"],
              description:
                "Number of telemetry messages to capture before the monitor is terminated. If not specified, monitor keeps running until meeting the timeout threshold of not receiving messages from hub",
              args: { name: "message-count" },
            },
            {
              name: ["--module-id", "-m"],
              description: "Target Module Id",
              args: { name: "module-id" },
            },
            {
              name: ["--properties", "--props", "-p"],
              description:
                "Indicate key message properties to output. sys = system properties, app = application properties, anno = annotations",
              args: {
                name: "properties",
                suggestions: ["all", "anno", "app", "sys"],
              },
            },
            {
              name: ["--repair", "-r"],
              description:
                "Reinstall uamqp dependency compatible with extension version. Default: false",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--timeout", "--to", "-t"],
              description:
                "Maximum seconds to maintain connection without receiving message. Use 0 for infinity",
              args: { name: "timeout" },
            },
            {
              name: ["--yes", "-y"],
              description:
                "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
            },
          ],
        },
        {
          name: "monitor-feedback",
          description:
            "Monitor feedback sent by devices to acknowledge cloud-to-device (C2D) messages",
          options: [
            {
              name: "--auth-type",
              description:
                "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
              args: { name: "auth-type", suggestions: ["key", "login"] },
            },
            {
              name: ["--device-id", "-d"],
              description: "Target Device Id",
              args: { name: "device-id" },
            },
            {
              name: ["--hub-name", "-n"],
              description:
                "IoT Hub name or hostname. Required if --login is not provided",
              args: { name: "hub-name" },
            },
            {
              name: ["--login", "-l"],
              description:
                'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
              args: { name: "login" },
            },
            {
              name: ["--repair", "-r"],
              description:
                "Reinstall uamqp dependency compatible with extension version. Default: false",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--wait-on-msg", "-w"],
              description:
                "Feedback monitor will block until a message with specific id (uuid) is received",
              args: { name: "wait-on-msg" },
            },
            {
              name: ["--yes", "-y"],
              description:
                "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
            },
          ],
        },
        {
          name: "query",
          description: "Query an IoT Hub using a powerful SQL-like language",
          options: [
            {
              name: ["--query-command", "-q"],
              description: "User query to be executed",
              args: { name: "query-command" },
              isRequired: true,
            },
            {
              name: "--auth-type",
              description:
                "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
              args: { name: "auth-type", suggestions: ["key", "login"] },
            },
            {
              name: ["--hub-name", "-n"],
              description:
                "IoT Hub name or hostname. Required if --login is not provided",
              args: { name: "hub-name" },
            },
            {
              name: ["--login", "-l"],
              description:
                'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
              args: { name: "login" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--top",
              description:
                "Maximum number of elements to return. By default query has no cap",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of an IoT hub",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub name",
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
          name: "show-connection-string",
          description: "Show the connection strings for an IoT hub",
          options: [
            {
              name: "--all",
              description: "Allow to show all shared access policies",
            },
            {
              name: ["--hub-name", "--name", "-n"],
              description: "IoT Hub name",
              args: { name: "hub-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--key",
              description: "The key to use",
              args: { name: "key", suggestions: ["primary", "secondary"] },
            },
            {
              name: "--policy-name",
              description: "Shared access policy to use",
              args: { name: "policy-name" },
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
          name: "show-quota-metrics",
          description: "Get the quota metrics for an IoT hub",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub name",
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
          name: "show-stats",
          description: "Get the statistics for an IoT hub",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub name",
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
          description: "Update metadata for an IoT hub",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--c2d-max-delivery-count", "--cdd"],
              description:
                "The number of times the IoT hub will attempt to deliver a cloud-to-device message to a device, between 1 and 100",
              args: { name: "c2d-max-delivery-count" },
            },
            {
              name: ["--c2d-ttl", "--ct"],
              description:
                "The amount of time a message is available for the device to consume before it is expired by IoT Hub, between 1 and 48 hours",
              args: { name: "c2d-ttl" },
            },
            {
              name: ["--disable-device-sas", "--dds"],
              description:
                "A boolean indicating whether or not to disable all device (including Edge devices but excluding modules) scoped SAS keys for authentication",
              args: {
                name: "disable-device-sas",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--disable-local-auth", "--dla"],
              description:
                "A boolean indicating whether or not to disable IoT hub scoped SAS keys for authentication",
              args: {
                name: "disable-local-auth",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--disable-module-sas", "--dms"],
              description:
                "A boolean indicating whether or not to disable module-scoped SAS keys for authentication",
              args: {
                name: "disable-module-sas",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--fileupload-storage-container-name", "--fc"],
              description:
                "The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified",
              args: { name: "fileupload-storage-container-name" },
            },
            {
              name: ["--fileupload-storage-connectionstring", "--fcs"],
              description:
                "The connection string for the Azure Storage account to which files are uploaded",
              args: { name: "fileupload-storage-connectionstring" },
            },
            {
              name: ["--feedback-max-delivery-count", "--fd"],
              description:
                "The number of times the IoT hub attempts to deliver a message on the feedback queue, between 1 and 100",
              args: { name: "feedback-max-delivery-count" },
            },
            {
              name: ["--feedback-lock-duration", "--fld"],
              description:
                "The lock duration for the feedback queue, between 5 and 300 seconds",
              args: { name: "feedback-lock-duration" },
            },
            {
              name: ["--feedback-ttl", "--ft"],
              description:
                "The period of time for which the IoT hub will maintain the feedback for expiration or delivery of cloud-to-device messages, between 1 and 48 hours",
              args: { name: "feedback-ttl" },
            },
            {
              name: ["--fileupload-notification-lock-duration", "--fnld"],
              description:
                "The lock duration for the file upload notifications queue, between 5 and 300 seconds",
              args: { name: "fileupload-notification-lock-duration" },
            },
            {
              name: ["--fileupload-notification-max-delivery-count", "--fnd"],
              description:
                "The number of times the IoT hub will attempt to deliver a file notification message, between 1 and 100",
              args: { name: "fileupload-notification-max-delivery-count" },
            },
            {
              name: ["--fileupload-notification-ttl", "--fnt"],
              description:
                "The amount of time a file upload notification is available for the service to consume before it is expired by IoT Hub, between 1 and 48 hours",
              args: { name: "fileupload-notification-ttl" },
            },
            {
              name: ["--fileupload-notifications", "--fn"],
              description:
                "A boolean indicating whether to log information about uploaded files to the messages/servicebound/filenotifications IoT Hub endpoint",
              args: {
                name: "fileupload-notifications",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--fileupload-sas-ttl", "--fst"],
              description:
                "The amount of time a SAS URI generated by IoT Hub is valid before it expires, between 1 and 24 hours",
              args: { name: "fileupload-sas-ttl" },
            },
            {
              name: ["--fileupload-storage-auth-type", "--fsa"],
              description:
                "The authentication type for the Azure Storage account to which files are uploaded",
              args: {
                name: "fileupload-storage-auth-type",
                suggestions: ["identityBased", "keyBased"],
              },
            },
            {
              name: ["--fileupload-storage-identity", "--fsi"],
              description:
                "The managed identity to use for file upload authentication. Use '[system]' to refer to the system-assigned managed identity or a resource ID to refer to a user-assigned managed identity",
              args: { name: "fileupload-storage-identity" },
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
              name: ["--name", "-n"],
              description: "IoT Hub name",
              args: { name: "name" },
            },
            {
              name: ["--retention-day", "--rd"],
              description:
                "Specifies how long this IoT hub will maintain device-to-cloud events, between 1 and 7 days",
              args: { name: "retention-day" },
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
                "Pricing tier for Azure IoT Hub. Note that only one free IoT hub instance (F1) is allowed in each subscription. Exception will be thrown if free instances exceed one",
              args: {
                name: "sku",
                suggestions: ["B1", "B2", "B3", "F1", "S1", "S2", "S3"],
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
              name: "--unit",
              description: "Units in your IoT Hub",
              args: { name: "unit" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Wait until an operation on an IoT Hub instance is complete",
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
              name: ["--name", "-n"],
              description: "IoT Hub name",
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
          name: "certificate",
          description: "Manage IoT Hub certificates",
          subcommands: [
            {
              name: "create",
              description: "Create/upload an Azure IoT Hub certificate",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "The path to the file containing the certificate",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--verified", "-v"],
                  description:
                    "A boolean indicating whether or not the certificate is verified",
                  args: { name: "verified", suggestions: ["false", "true"] },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes an Azure IoT Hub certificate",
              options: [
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
              name: "generate-verification-code",
              description:
                "Generates a verification code for an Azure IoT Hub certificate",
              options: [
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
              name: "list",
              description:
                "Lists all certificates contained within an Azure IoT Hub",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
              name: "show",
              description:
                "Shows information about a particular Azure IoT Hub certificate",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
              description: "Update an Azure IoT Hub certificate",
              options: [
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "The path to the file containing the certificate",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
                  name: ["--verified", "-v"],
                  description:
                    "A boolean indicating whether or not the certificate is verified",
                  args: { name: "verified", suggestions: ["false", "true"] },
                },
              ],
            },
            {
              name: "verify",
              description: "Verifies an Azure IoT Hub certificate",
              options: [
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "The path to the file containing the certificate",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
              name: "root-authority",
              description:
                "Manage the certificate root-authority for an IoT Hub instance",
              subcommands: [
                {
                  name: "set",
                  description:
                    "Set the certificate root-authority for an IoT Hub instance to a specific version",
                  options: [
                    {
                      name: ["--certificate-authority", "--cav"],
                      description:
                        "Certificate Root Authority version. The v1 represents Baltimore CA and v2 represents Digicert CA",
                      args: {
                        name: "certificate-authority",
                        suggestions: ["v1", "v2"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--hub-name",
                      description:
                        "IoT Hub name. Required if --login is not provided",
                      args: { name: "hub-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description:
                        "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show the current certificate root-authority for an IoT Hub instance",
                  options: [
                    {
                      name: "--hub-name",
                      description:
                        "IoT Hub name. Required if --login is not provided",
                      args: { name: "hub-name" },
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
              ],
            },
          ],
        },
        {
          name: "configuration",
          description:
            "Manage IoT automatic device management configuration at scale",
          subcommands: [
            {
              name: "create",
              description:
                "Create an IoT automatic device management configuration in a target IoT Hub",
              options: [
                {
                  name: ["--config-id", "-c"],
                  description:
                    "Target device configuration name. Lowercase and the following special characters are allowed: [-+%_*!']",
                  args: { name: "config-id" },
                  isRequired: true,
                },
                {
                  name: ["--content", "-k"],
                  description:
                    "Device configuration content. Provide file path or raw json",
                  args: { name: "content" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--custom-labels", "--cl"],
                  description:
                    'An alternative input style (space separated key=value pairs) for --labels and intended to replace it in the future. Format example: key1=value1 key2="this is my value"',
                  args: { name: "custom-labels" },
                },
                {
                  name: ["--custom-metric-queries", "--cmq"],
                  description:
                    'An alternative input style (space separated key=value pairs) for --metrics and intended to replace it in the future. Format example: metric1="select deviceId from devices where tags.location=\'US\'" metric2="select *"',
                  args: { name: "custom-metric-queries" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--labels", "--lab"],
                  description:
                    'Map of labels to be applied to target configuration. Using --custom-labels instead of --labels is recommended.Format example: {"key0":"value0", "key1":"value1"}',
                  args: { name: "labels" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--metrics", "-m"],
                  description:
                    "Device configuration metric definitions. Provide file path or raw json.Using --custom-metric-queries instead of --metrics is recommended",
                  args: { name: "metrics" },
                },
                {
                  name: ["--priority", "--pri"],
                  description:
                    "Weight of the device configuration in case of competing rules (highest wins)",
                  args: { name: "priority" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--target-condition", "--tc", "-t"],
                  description:
                    "Target condition in which a device or module configuration applies to. Configurations with no target condition will target no device or module. Use the following format: \"tags.environment='test'\"",
                  args: { name: "target-condition" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an IoT device configuration",
              options: [
                {
                  name: ["--config-id", "-c"],
                  description:
                    "Target device configuration name. Lowercase and the following special characters are allowed: [-+%_*!']",
                  args: { name: "config-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              name: "list",
              description:
                "List IoT automatic device management configurations in an IoT Hub",
              options: [
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--top",
                  description:
                    "Maximum number of configurations to return. By default all configurations are returned",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the details of an IoT automatic device management configuration",
              options: [
                {
                  name: ["--config-id", "-c"],
                  description:
                    "Target device configuration name. Lowercase and the following special characters are allowed: [-+%_*!']",
                  args: { name: "config-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              name: "show-metric",
              description:
                "Evaluate a target user or system metric defined in an IoT device configuration",
              options: [
                {
                  name: ["--config-id", "-c"],
                  description:
                    "Target device configuration name. Lowercase and the following special characters are allowed: [-+%_*!']",
                  args: { name: "config-id" },
                  isRequired: true,
                },
                {
                  name: ["--metric-id", "-m"],
                  description: "Target metric for evaluation",
                  args: { name: "metric-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--metric-type", "--mt"],
                  description:
                    "Indicates which metric collection should be used to lookup a metric",
                  args: {
                    name: "metric-type",
                    suggestions: ["system", "user"],
                  },
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
              description:
                "Update specified properties of an IoT automatic device management configuration",
              options: [
                {
                  name: ["--config-id", "-c"],
                  description:
                    "Target device configuration name. Lowercase and the following special characters are allowed: [-+%_*!']",
                  args: { name: "config-id" },
                  isRequired: true,
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              ],
            },
          ],
        },
        {
          name: "connection-string",
          description: "Manage IoT Hub connection strings",
          subcommands: [
            {
              name: "show",
              description:
                "Show the connection strings for the specified IoT Hubs using the given policy name and key",
              options: [
                {
                  name: ["--show-all", "--all"],
                  description:
                    "Show all shared access policies for the respective IoT Hub",
                },
                {
                  name: ["--default-eventhub", "--eh"],
                  description:
                    "Flag indicating the connection string returned is for the default EventHub endpoint. Default: false",
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--key-type", "--kt"],
                  description:
                    "Shared access policy key type for authentication",
                  args: {
                    name: "key-type",
                    suggestions: ["primary", "secondary"],
                  },
                },
                {
                  name: ["--policy-name", "--pn"],
                  description:
                    "Shared access policy with operation permissions for target IoT Hub entity",
                  args: { name: "policy-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
        {
          name: "consumer-group",
          description: "Manage the event hub consumer groups of an IoT hub",
          subcommands: [
            {
              name: "create",
              description: "Create an event hub consumer group",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Event hub consumer group name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--event-hub-name",
                  description: "Event hub endpoint name",
                  args: { name: "event-hub-name" },
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
              name: "delete",
              description: "Delete an event hub consumer group",
              options: [
                {
                  name: "--event-hub-name",
                  description: "Event hub endpoint name",
                  args: { name: "event-hub-name" },
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Event hub consumer group name",
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
              description: "List event hub consumer groups",
              options: [
                {
                  name: "--event-hub-name",
                  description: "Event hub endpoint name",
                  args: { name: "event-hub-name" },
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
              name: "show",
              description: "Get the details for an event hub consumer group",
              options: [
                {
                  name: "--event-hub-name",
                  description: "Event hub endpoint name",
                  args: { name: "event-hub-name" },
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Event hub consumer group name",
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
          ],
        },
        {
          name: "device-identity",
          description: "Manage IoT devices",
          subcommands: [
            {
              name: "create",
              description: "Create a device in an IoT Hub",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--auth-method", "--am"],
                  description:
                    "The authorization method an entity is to be created with",
                  args: {
                    name: "auth-method",
                    suggestions: [
                      "shared_private_key",
                      "x509_ca",
                      "x509_thumbprint",
                    ],
                  },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: "--device-scope",
                  description:
                    "The scope of the device. For edge devices, this is auto-generated and immutable. For leaf devices, set this to create child/parent relationship",
                  args: { name: "device-scope" },
                },
                {
                  name: ["--edge-enabled", "--ee"],
                  description: "Flag indicating edge enablement",
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--output-dir", "--od"],
                  description:
                    "Generate self-signed cert and use its thumbprint. Output to specified target directory",
                  args: { name: "output-dir" },
                },
                {
                  name: ["--primary-key", "--pk"],
                  description:
                    "The primary symmetric shared access key stored in base64 format",
                  args: { name: "primary-key" },
                },
                {
                  name: ["--primary-thumbprint", "--ptp"],
                  description:
                    "Self-signed certificate thumbprint to use for the primary thumbprint",
                  args: { name: "primary-thumbprint" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--secondary-key", "--sk"],
                  description:
                    "The secondary symmetric shared access key stored in base64 format",
                  args: { name: "secondary-key" },
                },
                {
                  name: ["--secondary-thumbprint", "--stp"],
                  description:
                    "Self-signed certificate thumbprint to use for the secondary thumbprint",
                  args: { name: "secondary-thumbprint" },
                },
                {
                  name: ["--status", "--sta"],
                  description: "Set device status upon creation",
                  args: {
                    name: "status",
                    suggestions: ["disabled", "enabled"],
                  },
                },
                {
                  name: ["--status-reason", "--star"],
                  description: "Description for device status",
                  args: { name: "status-reason" },
                },
                {
                  name: ["--valid-days", "--vd"],
                  description:
                    "Generate self-signed cert and use its thumbprint. Valid for specified number of days. Default: 365",
                  args: { name: "valid-days" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an IoT Hub device",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              name: "export",
              description:
                "Export all device identities from an IoT Hub to an Azure Storage blob container",
              options: [
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--blob-container", "--bc"],
                  description:
                    "This blob container is used to output the status of the device identity import job and the results. Parameter is ignored when blob_container_uri is provided. Write, read and delete access is required for this blob container",
                  args: { name: "blob-container" },
                },
                {
                  name: ["--blob-container-uri", "--bcu"],
                  description:
                    "Blob Shared Access Signature URI with write, read, and delete access to a blob container. This is used to output the status of the job and the results. Note: when using Identity-based authentication an https:// URI is still required - but no SAS token is necessary. Input for this argument can be inline or from a file path",
                  args: { name: "blob-container-uri" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: "--identity",
                  description:
                    "Managed identity type to determine if system assigned managed identity or user assigned managed identity is used. For system assigned managed identity, use [system]. For user assigned managed identity, provide the user assigned managed identity resource id. This identity requires a Storage Blob Data Contributor roles for the Storage Account",
                  args: { name: "identity" },
                },
                {
                  name: ["--include-keys", "--ik"],
                  description:
                    "If set, keys are exported normally. Otherwise, keys are set to null in export output",
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--storage-account", "--sa"],
                  description:
                    "Name of Azure Storage account containing the output blob container.Parameter is ignored when blob_container_uri is provided. Write, read and delete access is required",
                  args: { name: "storage-account" },
                },
              ],
            },
            {
              name: "import",
              description:
                "Import device identities to an IoT Hub from a storage container blob",
              options: [
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--input-blob-container", "--ibc"],
                  description:
                    "This blob container stores the file which defines operations to be performed on the identity registry. Parameter is ignored when input_blob_container_uri is provided. Read access is required for this blob container",
                  args: { name: "input-blob-container" },
                },
                {
                  name: ["--input-blob-container-uri", "--ibcu"],
                  description:
                    "Blob Shared Access Signature URI with read access to a blob container. This blob contains the operations to be performed on the identity registry. Note: when using Identity-based authentication an https:// URI is still required - but no SAS token is necessary. Input for this argument can be inline or from a file path",
                  args: { name: "input-blob-container-uri" },
                },
                {
                  name: "--identity",
                  description:
                    "Managed identity type to determine if system assigned managed identity or user assigned managed identity is used. For system assigned managed identity, use [system]. For user assigned managed identity, provide the user assigned managed identity resource id. This identity requires a Storage Blob Data Contributor role for the target Storage Account and Contributor role for the IoT Hub",
                  args: { name: "identity" },
                },
                {
                  name: ["--input-storage-account", "--isa"],
                  description:
                    "Name of Azure Storage account containing the input blob container.Only required when input_blob_container_uri is not provided. Read access is required",
                  args: { name: "input-storage-account" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--output-blob-container", "--obc"],
                  description:
                    "This blob container is used to output the status of the device identity import job and the results. Only required when input_blob_container_uri is not provided. Write access is required for this blob container",
                  args: { name: "output-blob-container" },
                },
                {
                  name: ["--output-blob-container-uri", "--obcu"],
                  description:
                    "Blob Shared Access Signature URI with write access to a blob container. This is used to output the status of the job and the results. Note: when using Identity-based authentication an https:// URI without the SAS token is still required. Input for this argument can be inline or from a file path",
                  args: { name: "output-blob-container-uri" },
                },
                {
                  name: ["--output-storage-account", "--osa"],
                  description:
                    "Name of Azure Storage account containing the output blob container.Parameter is ignored when output_blob_container_uri is provided. Write access is required",
                  args: { name: "output-storage-account" },
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
              name: "list",
              description: "List devices in an IoT Hub",
              options: [
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--edge-enabled", "--ee"],
                  description: "Flag indicating edge enablement",
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--top",
                  description:
                    "Maximum number of elements to return. Use -1 for unlimited",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "renew-key",
              description:
                "Renew target keys of an IoT Hub device with sas authentication",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--key-type", "--kt"],
                  description: "Target key type to regenerate",
                  args: {
                    name: "key-type",
                    suggestions: ["primary", "secondary", "swap"],
                  },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              description: "Get the details of an IoT Hub device",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              description: "Update an IoT Hub device",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--auth-method", "--am"],
                  description:
                    "The authorization method an entity is to be created with",
                  args: {
                    name: "auth-method",
                    suggestions: [
                      "shared_private_key",
                      "x509_ca",
                      "x509_thumbprint",
                    ],
                  },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--edge-enabled", "--ee"],
                  description: "Flag indicating edge enablement",
                  args: {
                    name: "edge-enabled",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--primary-key", "--pk"],
                  description:
                    "The primary symmetric shared access key stored in base64 format",
                  args: { name: "primary-key" },
                },
                {
                  name: ["--primary-thumbprint", "--ptp"],
                  description:
                    "Self-signed certificate thumbprint to use for the primary thumbprint",
                  args: { name: "primary-thumbprint" },
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
                  name: ["--secondary-key", "--sk"],
                  description:
                    "The secondary symmetric shared access key stored in base64 format",
                  args: { name: "secondary-key" },
                },
                {
                  name: ["--secondary-thumbprint", "--stp"],
                  description:
                    "Self-signed certificate thumbprint to use for the secondary thumbprint",
                  args: { name: "secondary-thumbprint" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: ["--status", "--sta"],
                  description: "Set device status upon creation",
                  args: {
                    name: "status",
                    suggestions: ["disabled", "enabled"],
                  },
                },
                {
                  name: ["--status-reason", "--star"],
                  description: "Description for device status",
                  args: { name: "status-reason" },
                },
              ],
            },
            {
              name: "children",
              description:
                "Manage children device relationships for IoT edge devices",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add devices as children to a target edge device",
                  options: [
                    {
                      name: ["--child-list", "--cl"],
                      description: "Child device list (space separated)",
                      args: { name: "child-list" },
                      isRequired: true,
                    },
                    {
                      name: ["--device-id", "-d"],
                      description: "Id of edge device",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: "--auth-type",
                      description:
                        "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                      args: {
                        name: "auth-type",
                        suggestions: ["key", "login"],
                      },
                    },
                    {
                      name: ["--force", "-f"],
                      description:
                        "Overwrites the child device's parent device",
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description:
                        "IoT Hub name or hostname. Required if --login is not provided",
                      args: { name: "hub-name" },
                    },
                    {
                      name: ["--login", "-l"],
                      description:
                        'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                      args: { name: "login" },
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
                  name: "list",
                  description:
                    "Outputs the collection of assigned child devices",
                  options: [
                    {
                      name: ["--device-id", "-d"],
                      description: "Id of edge device",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: "--auth-type",
                      description:
                        "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                      args: {
                        name: "auth-type",
                        suggestions: ["key", "login"],
                      },
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description:
                        "IoT Hub name or hostname. Required if --login is not provided",
                      args: { name: "hub-name" },
                    },
                    {
                      name: ["--login", "-l"],
                      description:
                        'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                      args: { name: "login" },
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
                  name: "remove",
                  description: "Remove child devices from a target edge device",
                  options: [
                    {
                      name: ["--device-id", "-d"],
                      description: "Id of edge device",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: "--auth-type",
                      description:
                        "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                      args: {
                        name: "auth-type",
                        suggestions: ["key", "login"],
                      },
                    },
                    {
                      name: ["--child-list", "--cl"],
                      description: "Child device list (space separated)",
                      args: { name: "child-list" },
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description:
                        "IoT Hub name or hostname. Required if --login is not provided",
                      args: { name: "hub-name" },
                    },
                    {
                      name: ["--login", "-l"],
                      description:
                        'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                      args: { name: "login" },
                    },
                    {
                      name: ["--remove-all", "-a"],
                      description: "To remove all children",
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
            {
              name: "connection-string",
              description: "Manage IoT device's connection string",
              subcommands: [
                {
                  name: "show",
                  description: "Show a given IoT Hub device connection string",
                  options: [
                    {
                      name: ["--device-id", "-d"],
                      description: "Target Device Id",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: "--auth-type",
                      description:
                        "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                      args: {
                        name: "auth-type",
                        suggestions: ["key", "login"],
                      },
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description:
                        "IoT Hub name or hostname. Required if --login is not provided",
                      args: { name: "hub-name" },
                    },
                    {
                      name: ["--key-type", "--kt"],
                      description:
                        "Shared access policy key type for authentication",
                      args: {
                        name: "key-type",
                        suggestions: ["primary", "secondary"],
                      },
                    },
                    {
                      name: ["--login", "-l"],
                      description:
                        'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                      args: { name: "login" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
            {
              name: "parent",
              description: "Manage parent device relationships for IoT devices",
              subcommands: [
                {
                  name: "set",
                  description: "Set the parent device of a target device",
                  options: [
                    {
                      name: ["--device-id", "-d"],
                      description: "Target Device Id",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--parent-device-id", "--pd"],
                      description: "Id of edge device",
                      args: { name: "parent-device-id" },
                      isRequired: true,
                    },
                    {
                      name: "--auth-type",
                      description:
                        "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                      args: {
                        name: "auth-type",
                        suggestions: ["key", "login"],
                      },
                    },
                    {
                      name: ["--force", "-f"],
                      description: "Overwrites the device's parent device",
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description:
                        "IoT Hub name or hostname. Required if --login is not provided",
                      args: { name: "hub-name" },
                    },
                    {
                      name: ["--login", "-l"],
                      description:
                        'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                      args: { name: "login" },
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
                  description: "Get the parent device of a target device",
                  options: [
                    {
                      name: ["--device-id", "-d"],
                      description: "Target Device Id",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: "--auth-type",
                      description:
                        "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                      args: {
                        name: "auth-type",
                        suggestions: ["key", "login"],
                      },
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description:
                        "IoT Hub name or hostname. Required if --login is not provided",
                      args: { name: "hub-name" },
                    },
                    {
                      name: ["--login", "-l"],
                      description:
                        'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                      args: { name: "login" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "device-twin",
          description: "Manage IoT device twin configuration",
          subcommands: [
            {
              name: "list",
              description: "List device twins in an IoT Hub",
              options: [
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--edge-enabled", "--ee"],
                  description: "Flag indicating edge enablement",
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--top",
                  description:
                    "Maximum number of elements to return. Use -1 for unlimited",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "replace",
              description: "Replace device twin definition with target json",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--json", "-j"],
                  description:
                    "Json to replace existing twin with. Provide file path or raw json",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              description: "Get a device twin definition",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              description: "Update device twin desired properties and tags",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: "--desired",
                  description: "Twin desired properties",
                  args: { name: "desired" },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
                  name: "--tags",
                  description: "Twin tags",
                  args: { name: "tags" },
                },
              ],
            },
          ],
        },
        {
          name: "devicestream",
          description: "Manage device streams of an IoT hub",
          subcommands: [
            {
              name: "show",
              description: "Get IoT Hub's device streams endpoints",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "IoT Hub name",
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
          ],
        },
        {
          name: "digital-twin",
          description:
            "Manipulate and interact with the digital twin of an IoT Hub device",
          subcommands: [
            {
              name: "invoke-command",
              description:
                "Invoke a root or component level command of a digital twin device",
              options: [
                {
                  name: ["--command-name", "--cn"],
                  description: "Digital twin command name",
                  args: { name: "command-name" },
                  isRequired: true,
                },
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: "--component-path",
                  description:
                    "Digital twin component path. For example: thermostat1",
                  args: { name: "component-path" },
                },
                {
                  name: ["--connect-timeout", "--cto"],
                  description:
                    "Maximum interval of time, in seconds, that IoT Hub will attempt to connect to the device",
                  args: { name: "connect-timeout" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: "--payload",
                  description:
                    "JSON payload input for command. Provide file path or inline JSON",
                  args: { name: "payload" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--response-timeout", "--rto"],
                  description:
                    "Maximum interval of time, in seconds, that the digital twin command will wait for the result",
                  args: { name: "response-timeout" },
                },
              ],
            },
            {
              name: "show",
              description: "Show the digital twin of an IoT Hub device",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              description:
                "Update the read-write properties of a digital twin device via JSON patch specification",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--json-patch", "--patch"],
                  description:
                    "An update specification described by JSON-patch. Operations are limited to add, replace and remove. Provide file path or inline JSON",
                  args: { name: "json-patch" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
        {
          name: "distributed-tracing",
          description: "Manage distributed settings per-device",
          subcommands: [
            {
              name: "show",
              description: "Get the distributed tracing settings for a device",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
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
              description:
                "Update the distributed tracing options for a device",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--sampling-mode", "--sm"],
                  description:
                    "Turns sampling for distributed tracing on and off. 1 is On and, 2 is Off",
                  args: { name: "sampling-mode", suggestions: ["off", "on"] },
                  isRequired: true,
                },
                {
                  name: ["--sampling-rate", "--sr"],
                  description:
                    "Controls the amount of messages sampled for adding trace context. This value isa percentage. Only values from 0 to 100 (inclusive) are permitted",
                  args: { name: "sampling-rate" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
        {
          name: "identity",
          description: "Manage identities of an Azure IoT hub",
          subcommands: [
            {
              name: "assign",
              description: "Assign managed identities to an IoT Hub",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "IoT Hub name",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--role",
                  description:
                    "Role to assign to the hub's system-assigned managed identity",
                  args: { name: "role" },
                },
                {
                  name: "--scopes",
                  description:
                    "Space separated list of scopes to assign the role (--role) for the system-assigned managed identity",
                  args: { name: "scopes" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--system-assigned", "--system"],
                  description:
                    "Assign a system-assigned managed identity to this hub",
                  args: {
                    name: "system-assigned",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--user-assigned", "--user"],
                  description:
                    "Assign user-assigned managed identities to this hub. Accept space-separated list of identity resource IDs",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove managed identities from an IoT Hub",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "IoT Hub name",
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
                  name: ["--system-assigned", "--system"],
                  description:
                    "Remove a system-assigned managed identity from this hub",
                  args: {
                    name: "system-assigned",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--user-assigned", "--user"],
                  description:
                    "Remove user-assigned managed identities from this hub. Accept space-separated list of identity resource IDs",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "show",
              description: "Show the identity properties of an IoT Hub",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "IoT Hub name",
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
          ],
        },
        {
          name: "job",
          description: "Manage IoT Hub jobs (v2)",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel an IoT Hub job",
              options: [
                {
                  name: "--job-id",
                  description: "IoT Hub job Id",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              name: "create",
              description: "Create and schedule an IoT Hub job for execution",
              options: [
                {
                  name: "--job-id",
                  description: "IoT Hub job Id",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--job-type", "--jt"],
                  description: "The type of scheduled job",
                  args: {
                    name: "job-type",
                    suggestions: ["scheduleDeviceMethod", "scheduleUpdateTwin"],
                  },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--poll-duration", "--duration"],
                  description:
                    "Total duration in seconds where job status will be checked if --wait flag is passed in",
                  args: { name: "poll-duration" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--poll-interval", "--interval"],
                  description:
                    "Interval in seconds that job status will be checked if --wait flag is passed in",
                  args: { name: "poll-interval" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--method-connect-timeout", "--mct"],
                  description:
                    "Maximum number of seconds to wait on device connection",
                  args: { name: "method-connect-timeout" },
                },
                {
                  name: ["--method-name", "--mn"],
                  description: "Target method for invocation",
                  args: { name: "method-name" },
                },
                {
                  name: ["--method-payload", "--mp"],
                  description:
                    "Json payload to be passed to method. Must be file path or raw json",
                  args: { name: "method-payload" },
                },
                {
                  name: ["--method-response-timeout", "--mrt"],
                  description:
                    "Maximum number of seconds to wait for device method result",
                  args: { name: "method-response-timeout" },
                },
                {
                  name: ["--twin-patch", "--patch"],
                  description:
                    "The desired twin patch. Provide file path or raw json",
                  args: { name: "twin-patch" },
                },
                {
                  name: ["--query-condition", "-q"],
                  description:
                    'Condition for device query to get devices to execute the job on. Required if job type is scheduleDeviceMethod or scheduleUpdateTwin. Note: The service will prefix "SELECT * FROM devices WHERE " to the input',
                  args: { name: "query-condition" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--start-time", "--start"],
                  description:
                    "The scheduled start of the job in ISO 8601 date time format. If no start time is provided, the job is queued for asap execution. Using a custom start time that's in the past may cause the operation to fail",
                  args: { name: "start-time" },
                },
                {
                  name: "--ttl",
                  description:
                    "Max execution time in seconds, before job is terminated",
                  args: { name: "ttl" },
                },
                {
                  name: ["--wait", "-w"],
                  description:
                    "Block until the created job is in a completed, failed or cancelled state. Will regularly poll on interval specified by --poll-interval",
                },
              ],
            },
            {
              name: "list",
              description: "List the historical jobs of an IoT Hub",
              options: [
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--job-status", "--js"],
                  description: "The status of a scheduled job",
                  args: {
                    name: "job-status",
                    suggestions: [
                      "cancelled",
                      "completed",
                      "enqueued",
                      "failed",
                      "queued",
                      "running",
                      "scheduled",
                      "unknown",
                    ],
                  },
                },
                {
                  name: ["--job-type", "--jt"],
                  description: "The type of scheduled job",
                  args: {
                    name: "job-type",
                    suggestions: [
                      "export",
                      "import",
                      "scheduleDeviceMethod",
                      "scheduleUpdateTwin",
                    ],
                  },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--top",
                  description:
                    "Maximum number of elements to return. Use -1 for unlimited",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Show details of an existing IoT Hub job",
              options: [
                {
                  name: "--job-id",
                  description: "IoT Hub job Id",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
        {
          name: "message-endpoint",
          description: "Manage custom endpoints of an IoT hub",
          subcommands: [
            {
              name: "delete",
              description: "Delete all or a specific endpoint for an IoT Hub",
              options: [
                {
                  name: ["--hub-name", "-n"],
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--endpoint-name", "--endpoint", "--en"],
                  description: "Name of the routing endpoint",
                  args: { name: "endpoint-name" },
                },
                {
                  name: ["--endpoint-type", "--type", "-t"],
                  description: "Type of the routing endpoint",
                  args: {
                    name: "endpoint-type",
                    suggestions: [
                      "cosmosdb-container",
                      "eventhub",
                      "servicebus-queue",
                      "servicebus-topic",
                      "storage-container",
                    ],
                  },
                },
                {
                  name: ["--force", "-f"],
                  description:
                    "Force delete the endpoint(s) and any routes and message enrichments associated",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
                },
              ],
            },
            {
              name: "list",
              description:
                "Get information on all the endpoints for an IoT Hub",
              options: [
                {
                  name: ["--hub-name", "-n"],
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--endpoint-type", "--type", "-t"],
                  description: "Type of the routing endpoint",
                  args: {
                    name: "endpoint-type",
                    suggestions: [
                      "cosmosdb-container",
                      "eventhub",
                      "servicebus-queue",
                      "servicebus-topic",
                      "storage-container",
                    ],
                  },
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
              description:
                "Get information on mentioned endpoint for an IoT Hub",
              options: [
                {
                  name: ["--endpoint-name", "--endpoint", "--en"],
                  description: "Name of the routing endpoint",
                  args: { name: "endpoint-name" },
                  isRequired: true,
                },
                {
                  name: ["--hub-name", "-n"],
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
              name: "create",
              description: "Add an endpoint to an IoT Hub",
              subcommands: [
                {
                  name: "cosmosdb-container",
                  description:
                    "Add a Cosmos DB Container endpoint for an IoT Hub",
                  options: [
                    {
                      name: ["--container-name", "--container"],
                      description:
                        "The name of the Cosmos DB SQL Container in the cosmos DB Database",
                      args: { name: "container-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--database-name", "--db"],
                      description:
                        "The name of the cosmos DB database in the cosmos DB account",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--endpoint-name", "--endpoint", "--en"],
                      description: "Name of the routing endpoint",
                      args: { name: "endpoint-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description: "IoT Hub name",
                      args: { name: "hub-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--connection-string", "-c"],
                      description: "Connection string of the routing endpoint",
                      args: { name: "connection-string" },
                    },
                    {
                      name: "--endpoint-account",
                      description: "The account name for the endpoint resource",
                      args: { name: "endpoint-account" },
                    },
                    {
                      name: ["--endpoint-resource-group", "--erg", "-r"],
                      description:
                        "Resource group of the Endpoint resoure. If not provided, the IoT Hub's resource group will be used",
                      args: { name: "endpoint-resource-group" },
                    },
                    {
                      name: ["--endpoint-subscription-id", "-s"],
                      description:
                        "Subscription Id of the Endpoint resource. If not provided, the IoT Hub's subscription will be used",
                      args: { name: "endpoint-subscription-id" },
                    },
                    {
                      name: "--endpoint-uri",
                      description: "The uri of the endpoint resource",
                      args: { name: "endpoint-uri" },
                    },
                    {
                      name: "--identity",
                      description:
                        'Use a system-assigned or user-assigned managed identity for endpoint authentication. Use "[system]" to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity',
                      args: { name: "identity" },
                    },
                    {
                      name: ["--partition-key-name", "--pkn"],
                      description:
                        "The name of the partition key associated with this Cosmos DB SQL Container if one exists",
                      args: { name: "partition-key-name" },
                    },
                    {
                      name: ["--partition-key-template", "--pkt"],
                      description:
                        "The template for generating a synthetic partition key value for use with this Cosmos DB SQL Container. The template must include at least one of the following placeholders: {iothub}, {deviceid}, {DD}, {MM}, and {YYYY}. Any one placeholder may be specified at most once, but order and non-placeholder components are arbitrary. If partition key name is provided, partition key template defaults to {deviceid}-{YYYY}-{MM}",
                      args: { name: "partition-key-template" },
                    },
                    {
                      name: ["--primary-key", "--pk"],
                      description: "The primary key of the cosmos DB account",
                      args: { name: "primary-key" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--secondary-key", "--sk"],
                      description: "The secondary key of the cosmos DB account",
                      args: { name: "secondary-key" },
                    },
                  ],
                },
                {
                  name: "eventhub",
                  description: "Add an Event Hub endpoint for an IoT Hub",
                  options: [
                    {
                      name: ["--endpoint-name", "--endpoint", "--en"],
                      description: "Name of the routing endpoint",
                      args: { name: "endpoint-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description: "IoT Hub name",
                      args: { name: "hub-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--connection-string", "-c"],
                      description: "Connection string of the routing endpoint",
                      args: { name: "connection-string" },
                    },
                    {
                      name: ["--endpoint-namespace-name", "--namespace"],
                      description:
                        "The namespace name for the endpoint resource",
                      args: { name: "endpoint-namespace-name" },
                    },
                    {
                      name: ["--endpoint-policy-name", "--policy"],
                      description:
                        "The policy name for connection string retrieval",
                      args: { name: "endpoint-policy-name" },
                    },
                    {
                      name: ["--endpoint-resource-group", "--erg", "-r"],
                      description:
                        "Resource group of the Endpoint resoure. If not provided, the IoT Hub's resource group will be used",
                      args: { name: "endpoint-resource-group" },
                    },
                    {
                      name: ["--endpoint-subscription-id", "-s"],
                      description:
                        "Subscription Id of the Endpoint resource. If not provided, the IoT Hub's subscription will be used",
                      args: { name: "endpoint-subscription-id" },
                    },
                    {
                      name: "--endpoint-uri",
                      description: "The uri of the endpoint resource",
                      args: { name: "endpoint-uri" },
                    },
                    {
                      name: "--entity-path",
                      description: "The entity path of the endpoint resource",
                      args: { name: "entity-path" },
                    },
                    {
                      name: "--identity",
                      description:
                        'Use a system-assigned or user-assigned managed identity for endpoint authentication. Use "[system]" to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity',
                      args: { name: "identity" },
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
                  name: "servicebus-queue",
                  description:
                    "Add a Service Bus Queue endpoint for an IoT Hub",
                  options: [
                    {
                      name: ["--endpoint-name", "--endpoint", "--en"],
                      description: "Name of the routing endpoint",
                      args: { name: "endpoint-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description: "IoT Hub name",
                      args: { name: "hub-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--connection-string", "-c"],
                      description: "Connection string of the routing endpoint",
                      args: { name: "connection-string" },
                    },
                    {
                      name: ["--endpoint-namespace-name", "--namespace"],
                      description:
                        "The namespace name for the endpoint resource",
                      args: { name: "endpoint-namespace-name" },
                    },
                    {
                      name: ["--endpoint-policy-name", "--policy"],
                      description:
                        "The policy name for connection string retrieval",
                      args: { name: "endpoint-policy-name" },
                    },
                    {
                      name: ["--endpoint-resource-group", "--erg", "-r"],
                      description:
                        "Resource group of the Endpoint resoure. If not provided, the IoT Hub's resource group will be used",
                      args: { name: "endpoint-resource-group" },
                    },
                    {
                      name: ["--endpoint-subscription-id", "-s"],
                      description:
                        "Subscription Id of the Endpoint resource. If not provided, the IoT Hub's subscription will be used",
                      args: { name: "endpoint-subscription-id" },
                    },
                    {
                      name: "--endpoint-uri",
                      description: "The uri of the endpoint resource",
                      args: { name: "endpoint-uri" },
                    },
                    {
                      name: "--entity-path",
                      description: "The entity path of the endpoint resource",
                      args: { name: "entity-path" },
                    },
                    {
                      name: "--identity",
                      description:
                        'Use a system-assigned or user-assigned managed identity for endpoint authentication. Use "[system]" to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity',
                      args: { name: "identity" },
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
                  name: "servicebus-topic",
                  description:
                    "Add a Service Bus Topic endpoint for an IoT Hub",
                  options: [
                    {
                      name: ["--endpoint-name", "--endpoint", "--en"],
                      description: "Name of the routing endpoint",
                      args: { name: "endpoint-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description: "IoT Hub name",
                      args: { name: "hub-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--connection-string", "-c"],
                      description: "Connection string of the routing endpoint",
                      args: { name: "connection-string" },
                    },
                    {
                      name: ["--endpoint-namespace-name", "--namespace"],
                      description:
                        "The namespace name for the endpoint resource",
                      args: { name: "endpoint-namespace-name" },
                    },
                    {
                      name: ["--endpoint-policy-name", "--policy"],
                      description:
                        "The policy name for connection string retrieval",
                      args: { name: "endpoint-policy-name" },
                    },
                    {
                      name: ["--endpoint-resource-group", "--erg", "-r"],
                      description:
                        "Resource group of the Endpoint resoure. If not provided, the IoT Hub's resource group will be used",
                      args: { name: "endpoint-resource-group" },
                    },
                    {
                      name: ["--endpoint-subscription-id", "-s"],
                      description:
                        "Subscription Id of the Endpoint resource. If not provided, the IoT Hub's subscription will be used",
                      args: { name: "endpoint-subscription-id" },
                    },
                    {
                      name: "--endpoint-uri",
                      description: "The uri of the endpoint resource",
                      args: { name: "endpoint-uri" },
                    },
                    {
                      name: "--entity-path",
                      description: "The entity path of the endpoint resource",
                      args: { name: "entity-path" },
                    },
                    {
                      name: "--identity",
                      description:
                        'Use a system-assigned or user-assigned managed identity for endpoint authentication. Use "[system]" to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity',
                      args: { name: "identity" },
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
                  name: "storage-container",
                  description:
                    "Add a Storage Container endpoint for an IoT Hub",
                  options: [
                    {
                      name: ["--container-name", "--container"],
                      description: "Name of the storage container",
                      args: { name: "container-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--endpoint-name", "--endpoint", "--en"],
                      description: "Name of the routing endpoint",
                      args: { name: "endpoint-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description: "IoT Hub name",
                      args: { name: "hub-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--batch-frequency", "-b"],
                      description:
                        "Request batch frequency in seconds. The maximum amount of time that can elapse before data is written to a blob, between 60 and 720 seconds",
                      args: { name: "batch-frequency" },
                    },
                    {
                      name: ["--chunk-size", "-w"],
                      description:
                        "Request chunk size in megabytes(MB). The maximum size of blobs, between 10 and 500 MB",
                      args: { name: "chunk-size" },
                    },
                    {
                      name: ["--connection-string", "-c"],
                      description: "Connection string of the routing endpoint",
                      args: { name: "connection-string" },
                    },
                    {
                      name: "--encoding",
                      description: "Encoding format for the container",
                      args: { name: "encoding", suggestions: ["avro", "json"] },
                    },
                    {
                      name: "--endpoint-account",
                      description: "The account name for the endpoint resource",
                      args: { name: "endpoint-account" },
                    },
                    {
                      name: ["--endpoint-resource-group", "--erg", "-r"],
                      description:
                        "Resource group of the Endpoint resoure. If not provided, the IoT Hub's resource group will be used",
                      args: { name: "endpoint-resource-group" },
                    },
                    {
                      name: ["--endpoint-subscription-id", "-s"],
                      description:
                        "Subscription Id of the Endpoint resource. If not provided, the IoT Hub's subscription will be used",
                      args: { name: "endpoint-subscription-id" },
                    },
                    {
                      name: "--endpoint-uri",
                      description: "The uri of the endpoint resource",
                      args: { name: "endpoint-uri" },
                    },
                    {
                      name: ["--file-name-format", "--ff"],
                      description:
                        "File name format for the blob. The file name format must contain {iothub}, {partition}, {YYYY}, {MM}, {DD}, {HH} and {mm} fields. All parameters are mandatory but can be reordered with or without delimiters",
                      args: { name: "file-name-format" },
                    },
                    {
                      name: "--identity",
                      description:
                        'Use a system-assigned or user-assigned managed identity for endpoint authentication. Use "[system]" to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity',
                      args: { name: "identity" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the properties of an existing endpoint for an IoT Hub",
              subcommands: [
                {
                  name: "cosmosdb-container",
                  description:
                    "Update the properties of an existing Cosmos DB Container endpoint for an IoT Hub",
                  options: [
                    {
                      name: ["--endpoint-name", "--endpoint", "--en"],
                      description: "Name of the routing endpoint",
                      args: { name: "endpoint-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description: "IoT Hub name",
                      args: { name: "hub-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--connection-string", "-c"],
                      description: "Connection string of the routing endpoint",
                      args: { name: "connection-string" },
                    },
                    {
                      name: ["--database-name", "--db"],
                      description:
                        "The name of the cosmos DB database in the cosmos DB account",
                      args: { name: "database-name" },
                    },
                    {
                      name: ["--endpoint-resource-group", "--erg", "-r"],
                      description:
                        "Resource group of the Endpoint resoure. If not provided, the IoT Hub's resource group will be used",
                      args: { name: "endpoint-resource-group" },
                    },
                    {
                      name: ["--endpoint-subscription-id", "-s"],
                      description:
                        "Subscription Id of the Endpoint resource. If not provided, the IoT Hub's subscription will be used",
                      args: { name: "endpoint-subscription-id" },
                    },
                    {
                      name: "--endpoint-uri",
                      description: "The uri of the endpoint resource",
                      args: { name: "endpoint-uri" },
                    },
                    {
                      name: "--identity",
                      description:
                        'Use a system-assigned or user-assigned managed identity for endpoint authentication. Use "[system]" to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity',
                      args: { name: "identity" },
                    },
                    {
                      name: ["--partition-key-name", "--pkn"],
                      description:
                        'The name of the partition key associated with this Cosmos DB SQL Container if one exists. To clear this property, set this to ""',
                      args: { name: "partition-key-name" },
                    },
                    {
                      name: ["--partition-key-template", "--pkt"],
                      description:
                        'The template for generating a synthetic partition key value for use with this Cosmos DB SQL Container. The template must include at least one of the following placeholders: {iothub}, {deviceid}, {DD}, {MM}, and {YYYY}. Any one placeholder may be specified at most once, but order and non-placeholder components are arbitrary. If partition key name is provided, partition key template defaults to {deviceid}-{YYYY}-{MM}. To clear this property, set this to ""',
                      args: { name: "partition-key-template" },
                    },
                    {
                      name: ["--primary-key", "--pk"],
                      description: "The primary key of the cosmos DB account",
                      args: { name: "primary-key" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--secondary-key", "--sk"],
                      description: "The secondary key of the cosmos DB account",
                      args: { name: "secondary-key" },
                    },
                  ],
                },
                {
                  name: "eventhub",
                  description:
                    "Update the properties of an existing Event Hub endpoint for an IoT Hub",
                  options: [
                    {
                      name: ["--endpoint-name", "--endpoint", "--en"],
                      description: "Name of the routing endpoint",
                      args: { name: "endpoint-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description: "IoT Hub name",
                      args: { name: "hub-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--connection-string", "-c"],
                      description: "Connection string of the routing endpoint",
                      args: { name: "connection-string" },
                    },
                    {
                      name: ["--endpoint-resource-group", "--erg", "-r"],
                      description:
                        "Resource group of the Endpoint resoure. If not provided, the IoT Hub's resource group will be used",
                      args: { name: "endpoint-resource-group" },
                    },
                    {
                      name: ["--endpoint-subscription-id", "-s"],
                      description:
                        "Subscription Id of the Endpoint resource. If not provided, the IoT Hub's subscription will be used",
                      args: { name: "endpoint-subscription-id" },
                    },
                    {
                      name: "--endpoint-uri",
                      description: "The uri of the endpoint resource",
                      args: { name: "endpoint-uri" },
                    },
                    {
                      name: "--entity-path",
                      description: "The entity path of the endpoint resource",
                      args: { name: "entity-path" },
                    },
                    {
                      name: "--identity",
                      description:
                        'Use a system-assigned or user-assigned managed identity for endpoint authentication. Use "[system]" to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity',
                      args: { name: "identity" },
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
                  name: "servicebus-queue",
                  description:
                    "Update the properties of an existing Service Bus Queue endpoint for an IoT Hub",
                  options: [
                    {
                      name: ["--endpoint-name", "--endpoint", "--en"],
                      description: "Name of the routing endpoint",
                      args: { name: "endpoint-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description: "IoT Hub name",
                      args: { name: "hub-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--connection-string", "-c"],
                      description: "Connection string of the routing endpoint",
                      args: { name: "connection-string" },
                    },
                    {
                      name: ["--endpoint-resource-group", "--erg", "-r"],
                      description:
                        "Resource group of the Endpoint resoure. If not provided, the IoT Hub's resource group will be used",
                      args: { name: "endpoint-resource-group" },
                    },
                    {
                      name: ["--endpoint-subscription-id", "-s"],
                      description:
                        "Subscription Id of the Endpoint resource. If not provided, the IoT Hub's subscription will be used",
                      args: { name: "endpoint-subscription-id" },
                    },
                    {
                      name: "--endpoint-uri",
                      description: "The uri of the endpoint resource",
                      args: { name: "endpoint-uri" },
                    },
                    {
                      name: "--entity-path",
                      description: "The entity path of the endpoint resource",
                      args: { name: "entity-path" },
                    },
                    {
                      name: "--identity",
                      description:
                        'Use a system-assigned or user-assigned managed identity for endpoint authentication. Use "[system]" to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity',
                      args: { name: "identity" },
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
                  name: "servicebus-topic",
                  description:
                    "Update the properties of an existing Service Bus Topic endpoint for an IoT Hub",
                  options: [
                    {
                      name: ["--endpoint-name", "--endpoint", "--en"],
                      description: "Name of the routing endpoint",
                      args: { name: "endpoint-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description: "IoT Hub name",
                      args: { name: "hub-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--connection-string", "-c"],
                      description: "Connection string of the routing endpoint",
                      args: { name: "connection-string" },
                    },
                    {
                      name: ["--endpoint-resource-group", "--erg", "-r"],
                      description:
                        "Resource group of the Endpoint resoure. If not provided, the IoT Hub's resource group will be used",
                      args: { name: "endpoint-resource-group" },
                    },
                    {
                      name: ["--endpoint-subscription-id", "-s"],
                      description:
                        "Subscription Id of the Endpoint resource. If not provided, the IoT Hub's subscription will be used",
                      args: { name: "endpoint-subscription-id" },
                    },
                    {
                      name: "--endpoint-uri",
                      description: "The uri of the endpoint resource",
                      args: { name: "endpoint-uri" },
                    },
                    {
                      name: "--entity-path",
                      description: "The entity path of the endpoint resource",
                      args: { name: "entity-path" },
                    },
                    {
                      name: "--identity",
                      description:
                        'Use a system-assigned or user-assigned managed identity for endpoint authentication. Use "[system]" to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity',
                      args: { name: "identity" },
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
                  name: "storage-container",
                  description:
                    "Update the properties of an existing Storage Container endpoint for an IoT Hub",
                  options: [
                    {
                      name: ["--endpoint-name", "--endpoint", "--en"],
                      description: "Name of the routing endpoint",
                      args: { name: "endpoint-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description: "IoT Hub name",
                      args: { name: "hub-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--batch-frequency", "-b"],
                      description:
                        "Request batch frequency in seconds. The maximum amount of time that can elapse before data is written to a blob, between 60 and 720 seconds",
                      args: { name: "batch-frequency" },
                    },
                    {
                      name: ["--chunk-size", "-w"],
                      description:
                        "Request chunk size in megabytes(MB). The maximum size of blobs, between 10 and 500 MB",
                      args: { name: "chunk-size" },
                    },
                    {
                      name: ["--connection-string", "-c"],
                      description: "Connection string of the routing endpoint",
                      args: { name: "connection-string" },
                    },
                    {
                      name: ["--endpoint-resource-group", "--erg", "-r"],
                      description:
                        "Resource group of the Endpoint resoure. If not provided, the IoT Hub's resource group will be used",
                      args: { name: "endpoint-resource-group" },
                    },
                    {
                      name: ["--endpoint-subscription-id", "-s"],
                      description:
                        "Subscription Id of the Endpoint resource. If not provided, the IoT Hub's subscription will be used",
                      args: { name: "endpoint-subscription-id" },
                    },
                    {
                      name: "--endpoint-uri",
                      description: "The uri of the endpoint resource",
                      args: { name: "endpoint-uri" },
                    },
                    {
                      name: ["--file-name-format", "--ff"],
                      description:
                        "File name format for the blob. The file name format must contain {iothub}, {partition}, {YYYY}, {MM}, {DD}, {HH} and {mm} fields. All parameters are mandatory but can be reordered with or without delimiters",
                      args: { name: "file-name-format" },
                    },
                    {
                      name: "--identity",
                      description:
                        'Use a system-assigned or user-assigned managed identity for endpoint authentication. Use "[system]" to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity',
                      args: { name: "identity" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "message-enrichment",
          description: "Manage message enrichments for endpoints of an IoT Hub",
          subcommands: [
            {
              name: "create",
              description:
                "Create a message enrichment for chosen endpoints in your IoT Hub",
              options: [
                {
                  name: ["--endpoints", "-e"],
                  description:
                    "Endpoint(s) to apply enrichments to. Use a space-separated list for multiple endpoints",
                  args: { name: "endpoints" },
                  isRequired: true,
                },
                {
                  name: ["--key", "-k"],
                  description: "The enrichment's key",
                  args: { name: "key" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "IoT Hub name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--value", "-v"],
                  description: "The enrichment's value",
                  args: { name: "value" },
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
              name: "delete",
              description:
                "Delete a message enrichment in your IoT hub (by key)",
              options: [
                {
                  name: ["--key", "-k"],
                  description: "The enrichment's key",
                  args: { name: "key" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "IoT Hub name",
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
              description:
                "Get information on all message enrichments for your IoT Hub",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "IoT Hub name",
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
              description:
                "Update a message enrichment in your IoT hub (by key)",
              options: [
                {
                  name: ["--endpoints", "-e"],
                  description:
                    "Endpoint(s) to apply enrichments to. Use a space-separated list for multiple endpoints",
                  args: { name: "endpoints" },
                  isRequired: true,
                },
                {
                  name: ["--key", "-k"],
                  description: "The enrichment's key",
                  args: { name: "key" },
                  isRequired: true,
                },
                {
                  name: ["--value", "-v"],
                  description: "The enrichment's value",
                  args: { name: "value" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "IoT Hub name",
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
          ],
        },
        {
          name: "message-route",
          description: "Manage routes of an IoT hub",
          subcommands: [
            {
              name: "create",
              description: "Add a route for an IoT Hub",
              options: [
                {
                  name: ["--endpoint-name", "--endpoint", "--en"],
                  description:
                    "Name of the routing endpoint. For the built-in endpoint, use endpoint name 'events'",
                  args: { name: "endpoint-name" },
                  isRequired: true,
                },
                {
                  name: ["--hub-name", "-n"],
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--route-name", "--route", "--rn"],
                  description: "Name of the route",
                  args: { name: "route-name" },
                  isRequired: true,
                },
                {
                  name: ["--source-type", "--type", "-t"],
                  description: "Source of the route",
                  args: {
                    name: "source-type",
                    suggestions: [
                      "deviceconnectionstateevents",
                      "devicejoblifecycleevents",
                      "devicelifecycleevents",
                      "devicemessages",
                      "digitaltwinchangeevents",
                      "invalid",
                      "twinchangeevents",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--condition", "-c"],
                  description:
                    "Condition that is evaluated to apply the routing rule",
                  args: { name: "condition" },
                },
                {
                  name: ["--enabled", "-e"],
                  description:
                    "A boolean indicating whether to enable route to the IoT Hub",
                  args: { name: "enabled", suggestions: ["false", "true"] },
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
              name: "delete",
              description:
                "Delete all routes or a mentioned route in an IoT Hub",
              options: [
                {
                  name: ["--hub-name", "-n"],
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--route-name", "--route", "--rn"],
                  description: "Name of the route",
                  args: { name: "route-name" },
                },
                {
                  name: ["--source-type", "--type", "-t"],
                  description: "Source of the route",
                  args: {
                    name: "source-type",
                    suggestions: [
                      "deviceconnectionstateevents",
                      "devicejoblifecycleevents",
                      "devicelifecycleevents",
                      "devicemessages",
                      "digitaltwinchangeevents",
                      "invalid",
                      "twinchangeevents",
                    ],
                  },
                },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Skip user prompts. Indicates acceptance of action. Used primarily for automation scenarios. Default: false",
                },
              ],
            },
            {
              name: "list",
              description: "Get all the routes in an IoT Hub",
              options: [
                {
                  name: ["--hub-name", "-n"],
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--source-type", "--type", "-t"],
                  description: "Source of the route",
                  args: {
                    name: "source-type",
                    suggestions: [
                      "deviceconnectionstateevents",
                      "devicejoblifecycleevents",
                      "devicelifecycleevents",
                      "devicemessages",
                      "digitaltwinchangeevents",
                      "invalid",
                      "twinchangeevents",
                    ],
                  },
                },
              ],
            },
            {
              name: "show",
              description: "Get information about the route in an IoT Hub",
              options: [
                {
                  name: ["--hub-name", "-n"],
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--route-name", "--route", "--rn"],
                  description: "Name of the route",
                  args: { name: "route-name" },
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
              name: "test",
              description: "Test all routes or a mentioned route in an IoT Hub",
              options: [
                {
                  name: ["--hub-name", "-n"],
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--app-properties", "--ap"],
                  description: "App properties of the route message",
                  args: { name: "app-properties" },
                },
                {
                  name: ["--body", "-b"],
                  description: "Body of the route message",
                  args: { name: "body" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--route-name", "--route", "--rn"],
                  description: "Name of the route",
                  args: { name: "route-name" },
                },
                {
                  name: ["--source-type", "--type", "-t"],
                  description: "Source of the route",
                  args: {
                    name: "source-type",
                    suggestions: [
                      "deviceconnectionstateevents",
                      "devicejoblifecycleevents",
                      "devicelifecycleevents",
                      "devicemessages",
                      "digitaltwinchangeevents",
                      "invalid",
                      "twinchangeevents",
                    ],
                  },
                },
                {
                  name: ["--system-properties", "--sp"],
                  description: "System properties of the route message",
                  args: { name: "system-properties" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a route for an IoT Hub",
              options: [
                {
                  name: ["--hub-name", "-n"],
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--route-name", "--route", "--rn"],
                  description: "Name of the route",
                  args: { name: "route-name" },
                  isRequired: true,
                },
                {
                  name: ["--condition", "-c"],
                  description:
                    "Condition that is evaluated to apply the routing rule",
                  args: { name: "condition" },
                },
                {
                  name: ["--endpoint-name", "--endpoint", "--en"],
                  description:
                    "Name of the routing endpoint. For the built-in endpoint, use endpoint name 'events'",
                  args: { name: "endpoint-name" },
                },
                {
                  name: ["--enabled", "-e"],
                  description:
                    "A boolean indicating whether to enable route to the IoT Hub",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--source-type", "--type", "-t"],
                  description: "Source of the route",
                  args: {
                    name: "source-type",
                    suggestions: [
                      "deviceconnectionstateevents",
                      "devicejoblifecycleevents",
                      "devicelifecycleevents",
                      "devicemessages",
                      "digitaltwinchangeevents",
                      "invalid",
                      "twinchangeevents",
                    ],
                  },
                },
              ],
            },
            {
              name: "fallback",
              description: "Manage the fallback route of an IoT hub",
              subcommands: [
                {
                  name: "set",
                  description:
                    "Enable or disable the fallback route in an IoT Hub",
                  options: [
                    {
                      name: ["--enabled", "-e"],
                      description:
                        "A boolean indicating whether to enable route to the IoT Hub",
                      args: { name: "enabled", suggestions: ["false", "true"] },
                      isRequired: true,
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description: "IoT Hub name",
                      args: { name: "hub-name" },
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
                  description: "Show the fallback route of an IoT Hub",
                  options: [
                    {
                      name: ["--hub-name", "-n"],
                      description: "IoT Hub name",
                      args: { name: "hub-name" },
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
              ],
            },
          ],
        },
        {
          name: "module-identity",
          description: "Manage IoT device modules",
          subcommands: [
            {
              name: "create",
              description:
                "Create a module on a target IoT device in an IoT Hub",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--module-id", "-m"],
                  description: "Target Module Id",
                  args: { name: "module-id" },
                  isRequired: true,
                },
                {
                  name: ["--auth-method", "--am"],
                  description:
                    "The authorization method an entity is to be created with",
                  args: {
                    name: "auth-method",
                    suggestions: [
                      "shared_private_key",
                      "x509_ca",
                      "x509_thumbprint",
                    ],
                  },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--output-dir", "--od"],
                  description:
                    "Generate self-signed cert and use its thumbprint. Output to specified target directory",
                  args: { name: "output-dir" },
                },
                {
                  name: ["--primary-key", "--pk"],
                  description:
                    "The primary symmetric shared access key stored in base64 format",
                  args: { name: "primary-key" },
                },
                {
                  name: ["--primary-thumbprint", "--ptp"],
                  description:
                    "Self-signed certificate thumbprint to use for the primary thumbprint",
                  args: { name: "primary-thumbprint" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--secondary-key", "--sk"],
                  description:
                    "The secondary symmetric shared access key stored in base64 format",
                  args: { name: "secondary-key" },
                },
                {
                  name: ["--secondary-thumbprint", "--stp"],
                  description:
                    "Self-signed certificate thumbprint to use for the secondary thumbprint",
                  args: { name: "secondary-thumbprint" },
                },
                {
                  name: ["--valid-days", "--vd"],
                  description:
                    "Generate self-signed cert and use its thumbprint. Valid for specified number of days. Default: 365",
                  args: { name: "valid-days" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a device in an IoT Hub",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--module-id", "-m"],
                  description: "Target Module Id",
                  args: { name: "module-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              name: "list",
              description:
                "List modules located on an IoT device in an IoT Hub",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--top",
                  description:
                    "Maximum number of elements to return. Use -1 for unlimited",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "renew-key",
              description:
                "Renew target keys of an IoT Hub device module with sas authentication",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--key-type", "--kt"],
                  description: "Target key type to regenerate",
                  args: {
                    name: "key-type",
                    suggestions: ["primary", "secondary", "swap"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--module-id", "-m"],
                  description: "Target Module Id",
                  args: { name: "module-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              description:
                "Get the details of an IoT device module in an IoT Hub",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--module-id", "-m"],
                  description: "Target Module Id",
                  args: { name: "module-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              description: "Update an IoT Hub device module",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--module-id", "-m"],
                  description: "Target Module Id",
                  args: { name: "module-id" },
                  isRequired: true,
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              ],
            },
            {
              name: "connection-string",
              description: "Manage IoT device module's connection string",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Show a target IoT device module connection string",
                  options: [
                    {
                      name: ["--device-id", "-d"],
                      description: "Target Device Id",
                      args: { name: "device-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--module-id", "-m"],
                      description: "Target Module Id",
                      args: { name: "module-id" },
                      isRequired: true,
                    },
                    {
                      name: "--auth-type",
                      description:
                        "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                      args: {
                        name: "auth-type",
                        suggestions: ["key", "login"],
                      },
                    },
                    {
                      name: ["--hub-name", "-n"],
                      description:
                        "IoT Hub name or hostname. Required if --login is not provided",
                      args: { name: "hub-name" },
                    },
                    {
                      name: ["--key-type", "--kt"],
                      description:
                        "Shared access policy key type for authentication",
                      args: {
                        name: "key-type",
                        suggestions: ["primary", "secondary"],
                      },
                    },
                    {
                      name: ["--login", "-l"],
                      description:
                        'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                      args: { name: "login" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "module-twin",
          description: "Manage IoT device module twin configuration",
          subcommands: [
            {
              name: "replace",
              description: "Replace a module twin definition with target json",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--json", "-j"],
                  description:
                    "Json to replace existing twin with. Provide file path or raw json",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: ["--module-id", "-m"],
                  description: "Target Module Id",
                  args: { name: "module-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              description: "Show a module twin definition",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--module-id", "-m"],
                  description: "Target Module Id",
                  args: { name: "module-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
              description: "Update module twin desired properties and tags",
              options: [
                {
                  name: ["--device-id", "-d"],
                  description: "Target Device Id",
                  args: { name: "device-id" },
                  isRequired: true,
                },
                {
                  name: ["--module-id", "-m"],
                  description: "Target Module Id",
                  args: { name: "module-id" },
                  isRequired: true,
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: "--desired",
                  description: "Twin desired properties",
                  args: { name: "desired" },
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Etag or entity tag corresponding to the last state of the resource. If no etag is provided the value '*' is used",
                  args: { name: "etag" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
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
                  name: "--tags",
                  description: "Twin tags",
                  args: { name: "tags" },
                },
              ],
            },
          ],
        },
        {
          name: "policy",
          description: "Manage shared access policies of an IoT hub",
          subcommands: [
            {
              name: "create",
              description: "Create a new shared access policy in an IoT hub",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Shared access policy name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--permissions",
                  description:
                    "Permissions of shared access policy. Use space-separated list for multiple permissions. Possible values: RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect",
                  args: { name: "permissions" },
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
              name: "delete",
              description: "Delete a shared access policy from an IoT hub",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Shared access policy name",
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
              description: "List shared access policies of an IoT hub",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
              name: "renew-key",
              description:
                "Regenerate keys of a shared access policy of an IoT hub",
              options: [
                {
                  name: ["--renew-key", "--rk"],
                  description: "Regenerate keys",
                  args: {
                    name: "renew-key",
                    suggestions: ["primary", "secondary", "swap"],
                  },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Shared access policy name",
                  args: { name: "name" },
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
              name: "show",
              description:
                "Get the details of a shared access policy of an IoT hub",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Shared access policy name",
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
          ],
        },
        {
          name: "route",
          description: "Manage routes of an IoT hub",
          subcommands: [
            {
              name: "create",
              description: "Create a route in IoT Hub",
              options: [
                {
                  name: ["--endpoint-name", "--endpoint", "--en"],
                  description: "Name of the routing endpoint",
                  args: { name: "endpoint-name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--route-name", "--name", "-n"],
                  description: "Name of the Route",
                  args: { name: "route-name" },
                  isRequired: true,
                },
                {
                  name: ["--source-type", "--source", "--type", "-s"],
                  description: "Source of the route",
                  args: {
                    name: "source-type",
                    suggestions: [
                      "deviceconnectionstateevents",
                      "devicejoblifecycleevents",
                      "devicelifecycleevents",
                      "devicemessages",
                      "digitaltwinchangeevents",
                      "invalid",
                      "twinchangeevents",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--condition", "-c"],
                  description:
                    "Condition that is evaluated to apply the routing rule",
                  args: { name: "condition" },
                },
                {
                  name: ["--enabled", "-e"],
                  description:
                    "A boolean indicating whether to enable route to the Iot hub",
                  args: { name: "enabled", suggestions: ["false", "true"] },
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
              name: "delete",
              description: "Delete all or mentioned route for your IoT Hub",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--route-name", "--name", "-n"],
                  description: "Name of the Route",
                  args: { name: "route-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--source-type", "--source", "--type", "-s"],
                  description: "Source of the route",
                  args: {
                    name: "source-type",
                    suggestions: [
                      "deviceconnectionstateevents",
                      "devicejoblifecycleevents",
                      "devicelifecycleevents",
                      "devicemessages",
                      "digitaltwinchangeevents",
                      "invalid",
                      "twinchangeevents",
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
            {
              name: "list",
              description: "Get all the routes in IoT Hub",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
                  name: ["--source-type", "--source", "--type", "-s"],
                  description: "Source of the route",
                  args: {
                    name: "source-type",
                    suggestions: [
                      "deviceconnectionstateevents",
                      "devicejoblifecycleevents",
                      "devicelifecycleevents",
                      "devicemessages",
                      "digitaltwinchangeevents",
                      "invalid",
                      "twinchangeevents",
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
            {
              name: "show",
              description: "Get information about the route in IoT Hub",
              options: [
                {
                  name: ["--route-name", "--name", "-n"],
                  description: "Name of the Route",
                  args: { name: "route-name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
              name: "test",
              description: "Test all routes or mentioned route in IoT Hub",
              options: [
                {
                  name: ["--app-properties", "--ap"],
                  description: "App properties of the route message",
                  args: { name: "app-properties" },
                },
                {
                  name: ["--body", "-b"],
                  description: "Body of the route message",
                  args: { name: "body" },
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--route-name", "--name", "-n"],
                  description: "Name of the Route",
                  args: { name: "route-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--source-type", "--source", "--type", "-s"],
                  description: "Source of the route",
                  args: {
                    name: "source-type",
                    suggestions: [
                      "deviceconnectionstateevents",
                      "devicejoblifecycleevents",
                      "devicelifecycleevents",
                      "devicemessages",
                      "digitaltwinchangeevents",
                      "invalid",
                      "twinchangeevents",
                    ],
                  },
                },
                {
                  name: ["--system-properties", "--sp"],
                  description: "System properties of the route message",
                  args: { name: "system-properties" },
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
              description: "Update a route in IoT Hub",
              options: [
                {
                  name: ["--route-name", "--name", "-n"],
                  description: "Name of the Route",
                  args: { name: "route-name" },
                  isRequired: true,
                },
                {
                  name: ["--condition", "-c"],
                  description:
                    "Condition that is evaluated to apply the routing rule",
                  args: { name: "condition" },
                },
                {
                  name: ["--endpoint-name", "--endpoint", "--en"],
                  description: "Name of the routing endpoint",
                  args: { name: "endpoint-name" },
                },
                {
                  name: ["--enabled", "-e"],
                  description:
                    "A boolean indicating whether to enable route to the Iot hub",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
                  name: ["--source-type", "--source", "--type", "-s"],
                  description: "Source of the route",
                  args: {
                    name: "source-type",
                    suggestions: [
                      "deviceconnectionstateevents",
                      "devicejoblifecycleevents",
                      "devicelifecycleevents",
                      "devicemessages",
                      "digitaltwinchangeevents",
                      "invalid",
                      "twinchangeevents",
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
          name: "routing-endpoint",
          description: "Manage custom endpoints of an IoT hub",
          subcommands: [
            {
              name: "create",
              description: "Add an endpoint to your IoT Hub",
              options: [
                {
                  name: ["--endpoint-name", "--name", "-n"],
                  description: "Name of the Routing Endpoint",
                  args: { name: "endpoint-name" },
                  isRequired: true,
                },
                {
                  name: ["--endpoint-resource-group", "--erg", "-r"],
                  description: "Resource group of the Endpoint resoure",
                  args: { name: "endpoint-resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--endpoint-subscription-id", "-s"],
                  description: "SubscriptionId of the Endpoint resource",
                  args: { name: "endpoint-subscription-id" },
                  isRequired: true,
                },
                {
                  name: ["--endpoint-type", "--type", "-t"],
                  description: "Type of the Routing Endpoint",
                  args: {
                    name: "endpoint-type",
                    suggestions: [
                      "azurestoragecontainer",
                      "eventhub",
                      "servicebusqueue",
                      "servicebustopic",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Authentication type for the endpoint. The default is keyBased",
                  args: {
                    name: "auth-type",
                    suggestions: ["identityBased", "keyBased"],
                  },
                },
                {
                  name: ["--batch-frequency", "-b"],
                  description:
                    "Request batch frequency in seconds. The maximum amount of time that can elapse before data is written to a blob, between 60 and 720 seconds",
                  args: { name: "batch-frequency" },
                },
                {
                  name: ["--chunk-size", "-w"],
                  description:
                    "Request chunk size in megabytes(MB). The maximum size of blobs, between 10 and 500 MB",
                  args: { name: "chunk-size" },
                },
                {
                  name: ["--connection-string", "-c"],
                  description: "Connection string of the Routing Endpoint",
                  args: { name: "connection-string" },
                },
                {
                  name: ["--container-name", "--container"],
                  description: "Name of the storage container",
                  args: { name: "container-name" },
                },
                {
                  name: "--encoding",
                  description:
                    "Encoding format for the container. The default is AVRO. Note that this field is applicable only for blob container endpoints",
                  args: { name: "encoding", suggestions: ["avro", "json"] },
                },
                {
                  name: "--endpoint-uri",
                  description: "The uri of the endpoint resource",
                  args: { name: "endpoint-uri" },
                },
                {
                  name: "--entity-path",
                  description: "The entity path of the endpoint resource",
                  args: { name: "entity-path" },
                },
                {
                  name: ["--file-name-format", "--ff"],
                  description:
                    "File name format for the blob. The file name format must contain {iothub}, {partition}, {YYYY}, {MM}, {DD}, {HH} and {mm} fields. All parameters are mandatory but can be reordered with or without delimiters",
                  args: { name: "file-name-format" },
                },
                {
                  name: "--identity",
                  description:
                    'Use a system-assigned or user-assigned managed identity for endpoint authentication. Use "[system]" to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity. If you use --auth-type without this parameter, system-assigned managed identity is assumed',
                  args: { name: "identity" },
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
              name: "delete",
              description: "Delete all or mentioned endpoint for your IoT Hub",
              options: [
                {
                  name: ["--endpoint-name", "--name", "-n"],
                  description: "Name of the Routing Endpoint",
                  args: { name: "endpoint-name" },
                },
                {
                  name: ["--endpoint-type", "--type", "-t"],
                  description: "Type of the Routing Endpoint",
                  args: {
                    name: "endpoint-type",
                    suggestions: [
                      "azurestoragecontainer",
                      "eventhub",
                      "servicebusqueue",
                      "servicebustopic",
                    ],
                  },
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
              name: "list",
              description:
                "Get information on all the endpoints for your IoT Hub",
              options: [
                {
                  name: ["--endpoint-type", "--type", "-t"],
                  description: "Type of the Routing Endpoint",
                  args: {
                    name: "endpoint-type",
                    suggestions: [
                      "azurestoragecontainer",
                      "eventhub",
                      "servicebusqueue",
                      "servicebustopic",
                    ],
                  },
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
              name: "show",
              description:
                "Get information on mentioned endpoint for your IoT Hub",
              options: [
                {
                  name: ["--endpoint-name", "--name", "-n"],
                  description: "Name of the Routing Endpoint",
                  args: { name: "endpoint-name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
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
          ],
        },
        {
          name: "state",
          description:
            "Manage the state of an IoT Hub.\n\n\t\tFor more information, see aka.ms/aziotcli-iot-hub-state",
          subcommands: [
            {
              name: "export",
              description: "Export the state of an IoT Hub to a file",
              options: [
                {
                  name: ["--state-file", "-f"],
                  description:
                    "The path to the file where the state information will be stored",
                  args: { name: "state-file" },
                  isRequired: true,
                },
                {
                  name: "--aspects",
                  description: "Hub Aspects (space-separated)",
                  args: {
                    name: "aspects",
                    suggestions: ["arm", "configurations", "devices"],
                  },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--replace", "-r"],
                  description:
                    "If this flag is set, then the command will overwrite the contents of the output file",
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
              name: "import",
              description: "Import a Hub state from a file to an IoT Hub",
              options: [
                {
                  name: ["--state-file", "-f"],
                  description:
                    "The path to the file where the state information will be stored",
                  args: { name: "state-file" },
                  isRequired: true,
                },
                {
                  name: "--aspects",
                  description: "Hub Aspects (space-separated)",
                  args: {
                    name: "aspects",
                    suggestions: ["arm", "configurations", "devices"],
                  },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--hub-name", "-n"],
                  description:
                    "IoT Hub name or hostname. Required if --login is not provided",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--login", "-l"],
                  description:
                    'This command supports an entity connection string with rights to perform action. Use to avoid session login via "az login". If both an entity connection string and name are provided the connection string takes priority. Required if --hub-name is not provided',
                  args: { name: "login" },
                },
                {
                  name: ["--replace", "-r"],
                  description:
                    "If this flag is set, then the command will delete the current devices, configurations, and certificates of the destination hub",
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
              name: "migrate",
              description:
                "Migrate the state of one hub to another hub without saving to a file",
              options: [
                {
                  name: "--aspects",
                  description: "Hub Aspects (space-separated)",
                  args: {
                    name: "aspects",
                    suggestions: ["arm", "configurations", "devices"],
                  },
                },
                {
                  name: "--auth-type",
                  description:
                    "Indicates whether the operation should auto-derive a policy key or use the current Azure AD session. If the authentication type is login and the resource hostname is provided, resource lookup will be skipped unless needed.You can configure the default using az configure --defaults iothub-data-auth-type=<auth-type-value>",
                  args: { name: "auth-type", suggestions: ["key", "login"] },
                },
                {
                  name: ["--destination-hub", "--dh"],
                  description:
                    "Name of IoT Hub to which the origin hub state will be copied to",
                  args: { name: "destination-hub" },
                },
                {
                  name: ["--destination-hub-login", "--dl"],
                  description:
                    "This command supports an entity connection string with rights to perform action on the destination hub. Use to avoid session login via az login for this IoT Hub instance. If both an entity connection string and name are provided the connection string takes priority. Required if --destination-hub is not provided",
                  args: { name: "destination-hub-login" },
                },
                {
                  name: ["--destination-resource-group", "--dg"],
                  description:
                    "Name of resource group of the IoT Hub to which the origin hub state will be copied to. If not provided, will use the origin IoT Hub's resource group",
                  args: { name: "destination-resource-group" },
                },
                {
                  name: ["--origin-resource-group", "--og"],
                  description:
                    "Name of resource group of the IoT Hub which will be copied",
                  args: { name: "origin-resource-group" },
                },
                {
                  name: ["--origin-hub", "--oh"],
                  description: "Name of IoT Hub which will be copied",
                  args: { name: "origin-hub" },
                },
                {
                  name: ["--origin-hub-login", "--ol"],
                  description:
                    "This command supports an entity connection string with rights to perform action on the origin hub. Use to avoid session login via az login for this IoT Hub instance. If both an entity connection string and name are provided the connection string takes priority. Required if --origin-hub is not provided",
                  args: { name: "origin-hub-login" },
                },
                {
                  name: ["--replace", "-r"],
                  description:
                    "If this flag is set, then the command will delete the current devices, configurations, and certificates of the destination hub",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "product",
      description: "Manage device testing for product certification",
      subcommands: [
        {
          name: "requirement",
          description: "Manage product certification requirements",
          subcommands: [
            {
              name: "list",
              description:
                "Discover information about provisioning attestation methods that are supported for each badge type",
              options: [
                {
                  name: ["--badge-type", "--bt"],
                  description: "The type of certification badge",
                  args: {
                    name: "badge-type",
                    suggestions: ["IotDevice", "IotEdgeCompatible", "Pnp"],
                  },
                },
                {
                  name: "--base-url",
                  description:
                    "Override certification service URL to allow testing in non-production environements",
                  args: { name: "base-url" },
                },
              ],
            },
          ],
        },
        {
          name: "test",
          description: "Manage device tests for product certification",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new product test for product certification",
              options: [
                {
                  name: ["--attestation-type", "--at"],
                  description:
                    "How the device will authenticate to testing service Device Provisioning Service",
                  args: {
                    name: "attestation-type",
                    suggestions: [
                      "ConnectionString",
                      "SymmetricKey",
                      "TPM",
                      "X509",
                    ],
                  },
                },
                {
                  name: ["--badge-type", "--bt"],
                  description: "The type of certification badge",
                  args: {
                    name: "badge-type",
                    suggestions: ["IotDevice", "IotEdgeCompatible", "Pnp"],
                  },
                },
                {
                  name: "--base-url",
                  description:
                    "Override certification service URL to allow testing in non-production environements",
                  args: { name: "base-url" },
                },
                {
                  name: ["--certificate-path", "--cp"],
                  description:
                    "The path to the file containing the primary certificate. When choosing x509 as attestation type, one of the certificate path is required",
                  args: { name: "certificate-path" },
                },
                {
                  name: ["--configuration-file", "--cf"],
                  description:
                    "Path to device test JSON file. If not specified, attestation and device definition parameters must be specified",
                  args: { name: "configuration-file" },
                },
                {
                  name: ["--connection-string", "--cs"],
                  description:
                    "Edge module connection stringWhen choosing IotEdgeCompatible badge type, connection string and attestaion-type of connection string are required",
                  args: { name: "connection-string" },
                },
                {
                  name: ["--device-type", "--dt"],
                  description: "Defines the type of device to be tested",
                  args: {
                    name: "device-type",
                    suggestions: ["DevKit", "FinishedProduct"],
                  },
                },
                {
                  name: ["--endorsement-key", "--ek"],
                  description:
                    "TPM endorsement key for a TPM device. When choosing TPM as attestation type, endorsement key is required",
                  args: { name: "endorsement-key" },
                },
                {
                  name: ["--models", "-m"],
                  description:
                    "Path containing Azure IoT Plug and Play interfaces implemented by the device being tested. When badge type is Pnp, models is required",
                  args: { name: "models" },
                },
                {
                  name: ["--product-id", "-p"],
                  description:
                    "The submitted product id. Required when validation-type is 'Certification'",
                  args: { name: "product-id" },
                },
                {
                  name: ["--skip-provisioning", "--sp"],
                  description:
                    "Determines whether the service skips generating provisioning configuration. Only applies to SymmetricKey and ConnectionString provisioning types",
                },
                {
                  name: ["--validation-type", "--vt"],
                  description:
                    "The type of validations testing to be performed",
                  args: {
                    name: "validation-type",
                    suggestions: ["Certification", "Test"],
                  },
                },
              ],
            },
            {
              name: "search",
              description: "Search product repository for testing data",
              options: [
                {
                  name: "--base-url",
                  description:
                    "Override certification service URL to allow testing in non-production environements",
                  args: { name: "base-url" },
                },
                {
                  name: ["--certificate-name", "--cn"],
                  description:
                    "The x509 Certificate Common Name (cn) used for Device Provisioning Service attestation",
                  args: { name: "certificate-name" },
                },
                {
                  name: ["--product-id", "-p"],
                  description: "The submitted product id",
                  args: { name: "product-id" },
                },
                {
                  name: ["--registration-id", "-r"],
                  description:
                    "The regstration Id for Device Provisioning Service",
                  args: { name: "registration-id" },
                },
              ],
            },
            {
              name: "show",
              description: "View product test data",
              options: [
                {
                  name: ["--test-id", "-t"],
                  description:
                    "The generated Id for the device certification test",
                  args: { name: "test-id" },
                  isRequired: true,
                },
                {
                  name: "--base-url",
                  description:
                    "Override certification service URL to allow testing in non-production environements",
                  args: { name: "base-url" },
                },
              ],
            },
            {
              name: "update",
              description: "Update the product certification test data",
              options: [
                {
                  name: ["--test-id", "-t"],
                  description:
                    "The generated Id for the device certification test",
                  args: { name: "test-id" },
                  isRequired: true,
                },
                {
                  name: ["--attestation-type", "--at"],
                  description:
                    "How the device will authenticate to testing service Device Provisioning Service",
                  args: {
                    name: "attestation-type",
                    suggestions: [
                      "ConnectionString",
                      "SymmetricKey",
                      "TPM",
                      "X509",
                    ],
                  },
                },
                {
                  name: ["--badge-type", "--bt"],
                  description: "The type of certification badge",
                  args: {
                    name: "badge-type",
                    suggestions: ["IotDevice", "IotEdgeCompatible", "Pnp"],
                  },
                },
                {
                  name: "--base-url",
                  description:
                    "Override certification service URL to allow testing in non-production environements",
                  args: { name: "base-url" },
                },
                {
                  name: ["--certificate-path", "--cp"],
                  description:
                    "The path to the file containing the primary certificate. When choosing x509 as attestation type, one of the certificate path is required",
                  args: { name: "certificate-path" },
                },
                {
                  name: ["--configuration-file", "--cf"],
                  description:
                    "Path to device test JSON file. If not specified, attestation and device definition parameters must be specified",
                  args: { name: "configuration-file" },
                },
                {
                  name: ["--connection-string", "--cs"],
                  description:
                    "Edge module connection stringWhen choosing IotEdgeCompatible badge type, connection string and attestaion-type of connection string are required",
                  args: { name: "connection-string" },
                },
                {
                  name: ["--endorsement-key", "--ek"],
                  description:
                    "TPM endorsement key for a TPM device. When choosing TPM as attestation type, endorsement key is required",
                  args: { name: "endorsement-key" },
                },
                {
                  name: ["--models", "-m"],
                  description:
                    "Path containing Azure IoT Plug and Play interfaces implemented by the device being tested. When badge type is Pnp, models is required",
                  args: { name: "models" },
                },
              ],
            },
            {
              name: "case",
              description: "Manage product testing certification test cases",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List the test cases of a product certification test",
                  options: [
                    {
                      name: ["--test-id", "-t"],
                      description:
                        "The generated Id for the device certification test",
                      args: { name: "test-id" },
                      isRequired: true,
                    },
                    {
                      name: "--base-url",
                      description:
                        "Override certification service URL to allow testing in non-production environements",
                      args: { name: "base-url" },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update the product certification test case data",
                  options: [
                    {
                      name: ["--configuration-file", "--cf"],
                      description:
                        "The file path for test case configuration JSON",
                      args: { name: "configuration-file" },
                      isRequired: true,
                    },
                    {
                      name: ["--test-id", "-t"],
                      description:
                        "The generated Id for the device certification test",
                      args: { name: "test-id" },
                      isRequired: true,
                    },
                    {
                      name: "--base-url",
                      description:
                        "Override certification service URL to allow testing in non-production environements",
                      args: { name: "base-url" },
                    },
                  ],
                },
              ],
            },
            {
              name: "run",
              description: "Manage product testing certification test runs",
              subcommands: [
                {
                  name: "show",
                  description: "Show the status of a testing run",
                  options: [
                    {
                      name: ["--test-id", "-t"],
                      description:
                        "The generated Id for the device certification test",
                      args: { name: "test-id" },
                      isRequired: true,
                    },
                    {
                      name: "--base-url",
                      description:
                        "Override certification service URL to allow testing in non-production environements",
                      args: { name: "base-url" },
                    },
                    {
                      name: ["--poll-interval", "--interval"],
                      description:
                        "Used in conjunction with --wait. Specifies how frequently (in seconds) polling occurs",
                      args: { name: "poll-interval" },
                    },
                    {
                      name: ["--run-id", "-r"],
                      description: "The generated Id of a test run",
                      args: { name: "run-id" },
                    },
                    {
                      name: ["--wait", "-w"],
                      description:
                        'Wait until test run status is "started" or "running"',
                    },
                  ],
                },
                {
                  name: "submit",
                  description:
                    "Submit a completed test run to the partner/product service",
                  options: [
                    {
                      name: ["--run-id", "-r"],
                      description: "The generated Id of a test run",
                      args: { name: "run-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--test-id", "-t"],
                      description:
                        "The generated Id for the device certification test",
                      args: { name: "test-id" },
                      isRequired: true,
                    },
                    {
                      name: "--base-url",
                      description:
                        "Override certification service URL to allow testing in non-production environements",
                      args: { name: "base-url" },
                    },
                  ],
                },
              ],
            },
            {
              name: "task",
              description: "Manage product testing certification tasks",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Queue a new testing task. Only one testing task can be running at a time",
                  options: [
                    {
                      name: ["--test-id", "-t"],
                      description:
                        "The generated Id for the device certification test",
                      args: { name: "test-id" },
                      isRequired: true,
                    },
                    {
                      name: "--base-url",
                      description:
                        "Override certification service URL to allow testing in non-production environements",
                      args: { name: "base-url" },
                    },
                    {
                      name: ["--poll-interval", "--interval"],
                      description:
                        "Used in conjunction with --wait. Sepcifies how frequently (in seconds) polling occurs",
                      args: { name: "poll-interval" },
                    },
                    {
                      name: "--type",
                      description: "The type of task for the device test",
                      args: {
                        name: "type",
                        suggestions: ["GenerateTestCases", "QueueTestRun"],
                      },
                    },
                    {
                      name: ["--wait", "-w"],
                      description:
                        "Wait for task completion and return test case data when available",
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Cancel a running task matching the specified --task-id",
                  options: [
                    {
                      name: "--task-id",
                      description: "The generated Id of the testing task",
                      args: { name: "task-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--test-id", "-t"],
                      description:
                        "The generated Id for the device certification test",
                      args: { name: "test-id" },
                      isRequired: true,
                    },
                    {
                      name: "--base-url",
                      description:
                        "Override certification service URL to allow testing in non-production environements",
                      args: { name: "base-url" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show the status of a testing task. Use --running for current running task or --task-id",
                  options: [
                    {
                      name: ["--test-id", "-t"],
                      description:
                        "The generated Id for the device certification test",
                      args: { name: "test-id" },
                      isRequired: true,
                    },
                    {
                      name: "--base-url",
                      description:
                        "Override certification service URL to allow testing in non-production environements",
                      args: { name: "base-url" },
                    },
                    {
                      name: "--running",
                      description: "Get the running tasks of a device test",
                    },
                    {
                      name: "--task-id",
                      description: "The generated Id of the testing task",
                      args: { name: "task-id" },
                    },
                  ],
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
