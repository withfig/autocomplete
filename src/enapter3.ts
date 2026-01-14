/*
Supported by Enapter
Please reach out https://go.enapter.com/discord for support
*/
const commonOptions: Fig.Option[] = [
  {
    name: ["--connection", "-c"],
    description: "Name of the connection to use",
    args: { name: "connection" },
  },
  {
    name: "--site-id",
    description: "Site ID",
    args: { name: "value" },
  },
  {
    name: "--api-allow-insecure",
    description: "Allow insecure API connection (default: disabled)",
  },
  {
    name: "--verbose",
    description: "Log extra details about the operation (default: disabled)",
  },
  {
    name: ["--help", "-h"],
    description: "Show help",
  },
];

const completionSpec: Fig.Spec = {
  name: "enapter3",
  description:
    "Cross-platform device management command-line tool for Enapter Energy Management System Toolkit 3.0",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
    },
    {
      name: ["--version", "-v"],
      description: "Show version number",
    },
  ],
  subcommands: [
    {
      name: "site",
      description: "Site information and management commands",
      subcommands: [
        {
          name: "list",
          description: "List all sites",
          options: [
            {
              name: "--my-sites",
              description:
                "List only sites where the user is a owner (default: false)",
              args: { name: "true|false" },
            },
            {
              name: "--limit",
              description: "Limit number of sites in output (default: all)",
              args: { name: "number of sites" },
            },
            ...commonOptions,
          ],
        },
        {
          name: "get",
          description: "Get a site",
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              isRequired: true,
              args: { name: "Site ID" },
            },
            ...commonOptions,
          ],
        },
      ],
    },
    {
      name: "device",
      description: "Device management commands",
      subcommands: [
        {
          name: "list",
          description: "List user devices ordered by device ID",
          options: [
            {
              name: "--expand",
              description:
                "Comma-separated list of expanded device information",
              args: {
                name: "value",
                suggestions: [
                  "connectivity",
                  "manifest",
                  "properties",
                  "communication",
                  "site",
                ],
              },
            },
            {
              name: "--site-id",
              description: "List devices from this site",
              args: { name: "site-id" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of devices to retrieve (default: retrieves all)",
              args: { name: "count" },
            },
            ...commonOptions,
          ],
        },
        {
          name: "create",
          description: "Create devices of different types",
          subcommands: [
            {
              name: "standalone",
              description: "Create a new standalone device",
              options: [
                {
                  name: ["-s", "--site-id"],
                  description: "Site ID where the device will be created",
                  args: { name: "site-id" },
                },
                {
                  name: ["-n", "--device-name"],
                  description: "Name for the new device",
                  isRequired: true,
                  args: { name: "device-name" },
                },
                ...commonOptions,
              ],
            },
            {
              name: "lua-device",
              description: "Create a new Lua device",
              options: [
                {
                  name: ["-r", "--runtime-id"],
                  description:
                    "UCM device ID where the new Lua device will run",
                  isRequired: true,
                  args: { name: "runtime-id" },
                },
                {
                  name: ["-n", "--device-name"],
                  description: "Name for the new Lua device",
                  isRequired: true,
                  args: { name: "device-name" },
                },
                {
                  name: "--device-slug",
                  description: "Slug for the new Lua device",
                  args: { name: "device-slug" },
                },
                {
                  name: ["-b", "--blueprint-id"],
                  description: "Blueprint ID to use for the new Lua device",
                  args: { name: "blueprint-id" },
                },
                {
                  name: "--blueprint-path",
                  description:
                    "Blueprint path (zip file or directory) to use for the new Lua device",
                  isRequired: true,
                  args: {
                    name: "blueprint-path",
                    template: "filepaths",
                  },
                },
                ...commonOptions,
              ],
            },
          ],
        },
        {
          name: "get",
          description: "Get a device",
          options: [
            {
              name: ["-d", "--device-id"],
              description: "Device ID",
              isRequired: true,
              args: { name: "device-id" },
            },
            {
              name: "--expand",
              description:
                "Comma-separated list of expanded device information",
              args: {
                name: "value",
                suggestions: [
                  "connectivity",
                  "manifest",
                  "properties",
                  "communication",
                  "site",
                ],
              },
            },
            ...commonOptions,
          ],
        },
        {
          name: "change-blueprint",
          description: "Change blueprint to device",
          options: [
            {
              name: ["-d", "--device-id"],
              description: "Device ID",
              isRequired: true,
              args: { name: "device-id" },
            },
            {
              name: ["-b", "--blueprint-id"],
              description: "Blueprint ID to use as new device blueprint",
              args: { name: "blueprint-id" },
            },
            {
              name: "--blueprint-path",
              description:
                "Blueprint path (zip file or directory) to use as new device blueprint",
              isRequired: true,
              args: {
                name: "blueprint-path",
                template: "filepaths",
              },
            },
            ...commonOptions,
          ],
        },
        {
          name: "logs",
          description: "Show device logs",
          options: [
            {
              name: ["-d", "--device-id"],
              description: "Device ID",
              isRequired: true,
              args: { name: "device-id" },
            },
            {
              name: ["-f", "--follow"],
              description: "Follow the log output (default: false)",
            },
            {
              name: "--from",
              description:
                "From timestamp in RFC 3339 format (e.g. 2006-01-02T15:04:05Z)",
              args: { name: "timestamp" },
            },
            {
              name: "--to",
              description:
                "To timestamp in RFC 3339 format (e.g. 2006-01-02T15:04:05Z)",
              args: { name: "timestamp" },
            },
            {
              name: ["-l", "--limit"],
              description: "Maximum number of logs to retrieve (default: 0)",
              args: { name: "count" },
            },
            {
              name: ["-o", "--offset"],
              description:
                "Number of logs to skip when retrieving (default: 0)",
              args: { name: "count" },
            },
            {
              name: ["-s", "--severity"],
              description: "Filter logs by severity",
              args: { name: "severity" },
            },
            {
              name: "--order",
              description: "Order logs by criteria",
              args: {
                name: "order",
                suggestions: ["RECEIVED_AT_ASC", "RECEIVED_AT_DESC"],
              },
            },
            {
              name: "--show",
              description: "Filter logs by criteria",
              args: {
                name: "filter",
                suggestions: ["ALL", "PERSISTED_ONLY", "TEMPORARY_ONLY"],
              },
            },
            ...commonOptions,
          ],
        },
        {
          name: "delete",
          description: "Delete a device",
          options: [
            {
              name: ["-d", "--device-id"],
              description: "Device ID",
              isRequired: true,
              args: { name: "device-id" },
            },
            ...commonOptions,
          ],
        },
        {
          name: "command",
          description: "Device command management",
          subcommands: [
            {
              name: "execute",
              description: "Execute a device command",
              options: [
                {
                  name: ["-d", "--device-id"],
                  description: "Device ID",
                  isRequired: true,
                  args: { name: "device-id" },
                },
                {
                  name: "--name",
                  description: "Command name",
                  isRequired: true,
                  args: { name: "command-name" },
                },
                {
                  name: "--arguments",
                  description: "Command arguments (JSON string)",
                  args: { name: "json-string" },
                },
                ...commonOptions,
              ],
            },
            {
              name: "list",
              description: "List device commands",
              options: [
                {
                  name: ["-d", "--device-id"],
                  description: "Device ID",
                  isRequired: true,
                  args: { name: "device-id" },
                },
                ...commonOptions,
              ],
            },
            {
              name: "get",
              description: "Get device command execution details",
              options: [
                {
                  name: ["-d", "--device-id"],
                  description: "Device ID",
                  isRequired: true,
                  args: { name: "device-id" },
                },
                {
                  name: "--execution-id",
                  description: "Execution ID",
                  isRequired: true,
                  args: { name: "execution-id" },
                },
                {
                  name: "--expand",
                  description: "Comma-separated list of expanded options",
                  isRepeatable: true,
                  args: {
                    name: "value",
                    suggestions: ["logs"],
                  },
                },
                ...commonOptions,
              ],
            },
          ],
        },
        {
          name: "telemetry",
          description: "Show device telemetry",
          options: [
            {
              name: ["-d", "--device-id"],
              description: "Device ID",
              isRequired: true,
              args: { name: "device-id" },
            },
            {
              name: ["-f", "--follow"],
              description: "Follow the telemetry output (default: false)",
            },
            ...commonOptions,
          ],
        },
        {
          name: "communication-config",
          description: "Device communication configuration management",
          subcommands: [
            {
              name: "generate",
              description: "Generate a new communication config for device",
              options: [
                {
                  name: ["-d", "--device-id"],
                  description: "Device ID",
                  isRequired: true,
                  args: { name: "device-id" },
                },
                {
                  name: "--protocol",
                  description: "Connection protocol",
                  isRequired: true,
                  args: {
                    name: "protocol",
                    suggestions: ["MQTT", "MQTTS"],
                  },
                },
                ...commonOptions,
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Update device settings",
          options: [
            {
              name: ["-d", "--device-id"],
              description: "Device ID",
              isRequired: true,
              args: { name: "device-id" },
            },
            {
              name: "--name",
              description: "Device name",
              args: { name: "name" },
            },
            {
              name: "--slug",
              description: "Device slug",
              args: { name: "slug" },
            },
            ...commonOptions,
          ],
        },
        {
          name: "run-terminal",
          description: "Run shell terminal for Enapter Gateway device",
          options: [
            {
              name: ["-d", "--device-id"],
              description: "Enapter Gateway Device ID",
              isRequired: true,
              args: { name: "device-id" },
            },
            ...commonOptions,
          ],
        },
        {
          name: "monitor",
          description: "Monitor device traffic",
          options: [
            {
              name: ["-d", "--device-id"],
              description: "Device ID",
              isRequired: true,
              args: { name: "device-id" },
            },
            {
              name: "--include-runtime",
              description:
                "Monitor device's runtime traffic too (default: false)",
            },
            ...commonOptions,
          ],
        },
      ],
    },
    {
      name: "blueprint",
      description: "Enapter Blueprints management commands",
      subcommands: [
        {
          name: "upload",
          description: "Upload Blueprint to the platform",
          options: [
            {
              name: ["-p", "--path"],
              description: "Blueprint path (zip file or directory)",
              isRequired: true,
              args: {
                name: "blueprint-path",
                template: "filepaths",
              },
            },
            ...commonOptions,
          ],
        },
        {
          name: "download",
          description:
            "Download Blueprint from the platform in enbp or zip format",
          options: [
            {
              name: ["-b", "--blueprint-id"],
              description: "Blueprint name or ID to download",
              isRequired: true,
              args: { name: "blueprint-id" },
            },
            {
              name: ["-o", "--output"],
              description: "Blueprint file name to save the blueprint",
              args: { name: "filename" },
            },
            ...commonOptions,
          ],
        },
        {
          name: "get",
          description: "Get Enapter Blueprint metadata",
          options: [
            {
              name: ["-b", "--blueprint-id"],
              description: "Blueprint name or ID to retrieve metadata for",
              isRequired: true,
              args: { name: "blueprint-id" },
            },
            ...commonOptions,
          ],
        },
        {
          name: "profiles",
          description: "Enapter Blueprint profiles management",
          subcommands: [
            {
              name: "download",
              description:
                "Download Enapter Blueprint profiles in zip format from platform",
              options: [
                {
                  name: ["-o", "--output"],
                  description: "File name to save the downloaded profiles",
                  args: { name: "filename" },
                },
                ...commonOptions,
              ],
            },
            {
              name: "upload",
              description: "Upload Enapter Bueprint profiles to the platform",
              options: [
                {
                  name: ["-p", "--path"],
                  description: "Profiles zip-file path",
                  isRequired: true,
                  args: {
                    name: "profiles-path",
                    template: "filepaths",
                  },
                },
                ...commonOptions,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "connection",
      description: "Management connections to Enapter Cloud and Gateways",
      subcommands: [
        {
          name: "add",
          description: "Add a new connection to Enapter Cloud or Gateway",
          options: [
            {
              name: "--name",
              description: "Connection name",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--gateway",
              description:
                "Indicates that the connection is to a Gateway (default: false)",
            },
            {
              name: "--url",
              description:
                'Enapter API base URL (default: "https://api.enapter.com")',
              args: { name: "url" },
            },
            {
              name: "--token",
              description: "Enapter API access token",
              isRequired: true,
              args: { name: "token" },
            },
            {
              name: "--site-id",
              description:
                "If specified, the connection will be limited to this site (Cloud connections only)",
              args: { name: "site-id" },
            },
            {
              name: "--allow-insecure",
              description:
                "Allow insecure connections to the Enapter API (default: false)",
            },
            ...commonOptions,
          ],
        },
        {
          name: "remove",
          description: "Remove a connection",
          options: [
            {
              name: "--name",
              description: "Connection name",
              isRequired: true,
              args: { name: "name" },
            },
            ...commonOptions,
          ],
        },
        {
          name: "list",
          description: "List all configured connections",
        },
        {
          name: "set-default",
          description: "Set a connection as default",
          options: [
            {
              name: "--name",
              description: "Connection name",
              isRequired: true,
              args: { name: "name" },
            },
            ...commonOptions,
          ],
        },
      ],
    },
    {
      name: "rule-engine",
      description: "Rule engine (automation) management commands",
      subcommands: [
        {
          name: "get",
          description: "Get rule engine state",
          options: [...commonOptions],
        },
        {
          name: "suspend",
          description: "Suspend execution of automation rules",
          options: [...commonOptions],
        },
        {
          name: "resume",
          description: "Resume execution of automation rules",
          options: [...commonOptions],
        },
        {
          name: "rule",
          description: "Manage individual automation rules",
          subcommands: [
            {
              name: "create",
              description: "Create a new automation rule",
              options: [
                {
                  name: "--slug",
                  description: "Slug for the new rule",
                  args: { name: "slug" },
                },
                {
                  name: "--script",
                  description: "Path to the file containing the script code",
                  isRequired: true,
                  args: {
                    name: "script-path",
                    template: "filepaths",
                  },
                },
                {
                  name: "--runtime-version",
                  description:
                    "Version of the runtime to use for the script execution",
                  args: {
                    name: "version",
                    suggestions: ["V1", "V3"],
                  },
                },
                {
                  name: "--exec-interval",
                  description:
                    "How frequently to execute the script (compatible only with runtime version 1)",
                  args: {
                    name: "duration",
                    description: "Duration format (e.g., 5s, 2m)",
                  },
                },
                {
                  name: "--disable",
                  description:
                    "Disable the rule upon creation (default: false)",
                },
                ...commonOptions,
              ],
            },
            {
              name: "delete",
              description: "Delete an automation rule(s)",
              options: [
                {
                  name: "--rule-id",
                  description: "Rule ID",
                  isRequired: true,
                  isRepeatable: true,
                  args: { name: "rule-id" },
                },
                ...commonOptions,
              ],
            },
            {
              name: "disable",
              description: "Disable automation rule(s)",
              options: [
                {
                  name: "--rule-id",
                  description: "Rule ID",
                  isRequired: true,
                  isRepeatable: true,
                  args: { name: "rule-id" },
                },
                ...commonOptions,
              ],
            },
            {
              name: "enable",
              description: "Enable automation rule(s)",
              options: [
                {
                  name: "--rule-id",
                  description: "Rule ID",
                  isRequired: true,
                  isRepeatable: true,
                  args: { name: "rule-id" },
                },
                ...commonOptions,
              ],
            },
            {
              name: "get",
              description: "Get automation rule details",
              options: [
                {
                  name: "--rule-id",
                  description: "Rule ID or slug",
                  isRequired: true,
                  args: { name: "rule-id" },
                },
                ...commonOptions,
              ],
            },
            {
              name: "list",
              description: "List all automation rules",
              options: [...commonOptions],
            },
            {
              name: "update",
              description: "Update rule settings",
              options: [
                {
                  name: "--rule-id",
                  description: "Rule ID or slug to update",
                  isRequired: true,
                  args: { name: "rule-id" },
                },
                {
                  name: "--slug",
                  description: "A new rule slug",
                  isRequired: true,
                  args: { name: "slug" },
                },
                ...commonOptions,
              ],
            },
            {
              name: "update-script",
              description: "Update automation rule Lua script",
              options: [
                {
                  name: "--rule-id",
                  description: "Rule ID or slug to update",
                  isRequired: true,
                  args: { name: "rule-id" },
                },
                {
                  name: "--script",
                  description: "Path to a file containing the script code",
                  isRequired: true,
                  args: {
                    name: "script-path",
                    template: "filepaths",
                  },
                },
                {
                  name: "--runtime-version",
                  description:
                    "Version of the runtime to use for the script execution",
                  args: {
                    name: "version",
                    suggestions: ["V1", "V3"],
                  },
                },
                {
                  name: "--exec-interval",
                  description:
                    "How frequently to execute the script (compatible only with runtime version 1)",
                  args: {
                    name: "duration",
                    description: "Duration format (e.g., 5s, 2m)",
                  },
                },
                ...commonOptions,
              ],
            },
            {
              name: "logs",
              description: "Show logs for individual automation rule",
              options: [
                {
                  name: "--rule-id",
                  description: "Rule ID",
                  isRequired: true,
                  args: { name: "rule-id" },
                },
                {
                  name: ["-f", "--follow"],
                  description: "Follow the log output (default: false)",
                },
                ...commonOptions,
              ],
            },
          ],
        },
        {
          name: "connection",
          description: "Management connections to Enapter Cloud and Gateways",
          subcommands: [
            {
              name: "add",
              description: "Add a new connection to Enapter Cloud or Gateway",
              options: [
                {
                  name: "--name",
                  description: "Connection name",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: "--gateway",
                  description:
                    "Indicates that the connection is to a Gateway (default: false)",
                },
                {
                  name: "--url",
                  description:
                    'Enapter API base URL (default: "https://api.enapter.com")',
                  args: { name: "url" },
                },
                {
                  name: "--token",
                  description: "Enapter API access token",
                  isRequired: true,
                  args: { name: "token" },
                },
                {
                  name: "--site-id",
                  description:
                    "If specified, the connection will be limited to this site (Cloud connections only)",
                  args: { name: "site-id" },
                },
                {
                  name: "--allow-insecure",
                  description:
                    "Allow insecure connections to the Enapter API (default: false)",
                },
                ...commonOptions,
              ],
            },
            {
              name: "remove",
              description: "Remove a connection",
              options: [
                {
                  name: "--name",
                  description: "Connection name",
                  isRequired: true,
                  args: { name: "name" },
                },
                ...commonOptions,
              ],
            },
            {
              name: "list",
              description: "List all configured connections",
            },
            {
              name: "set-default",
              description: "Set a connection as default",
              options: [
                {
                  name: "--name",
                  description: "Connection name",
                  isRequired: true,
                  args: { name: "name" },
                },
                ...commonOptions,
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
