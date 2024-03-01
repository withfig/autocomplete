const completionSpec: Fig.Spec = {
  name: "enapter",
  description:
    "Cross-platform device management command-line tool for Enapter Energy Management System Toolkit",
  subcommands: [
    {
      name: "devices",
      description: "Device information and management commands",
      subcommands: [
        {
          name: "upload",
          description: "Upload blueprint to a device",
          options: [
            {
              name: "--hardware-id",
              description:
                "Hardware ID (UCM ID) of the device; can be obtained in cloud.enapter.com",
              args: {
                name: "ID",
              },
            },
            {
              name: "--blueprint-dir",
              description: "Directory which contains blueprint file",
              args: {
                template: "filepaths",
              },
            },
            {
              name: "--timeout",
              description:
                "Time to wait for blueprint uploading (default: 30s)",
              args: {
                name: "timeout",
                isOptional: true,
              },
            },
            {
              name: ["--help", "-h"],
              description: "Show help",
            },
          ],
        },
        {
          name: "logs",
          description: "Stream logs from a device",
          options: [
            {
              name: "--hardware-id",
              description:
                "Hardware ID (UCM ID) of the device; can be obtained in cloud.enapter.com",
              args: {
                name: "ID",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Show help",
            },
          ],
        },
        {
          name: "upload-logs",
          description: "Show blueprint uploading logs",
          options: [
            {
              name: "--hardware-id",
              description:
                "Hardware ID (UCM ID) of the device; can be obtained in cloud.enapter.com",
              args: {
                name: "ID",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Show help",
            },
          ],
        },
        {
          name: "execute",
          description: "Execute command on device",
          options: [
            {
              name: "--hardware-id",
              description:
                "Hardware ID (UCM ID) of the device; can be obtained in cloud.enapter.com",
              args: {
                name: "ID",
              },
            },
            {
              name: "--command",
              description: "Command name",
              args: {
                name: "command",
              },
            },
            {
              name: "--arguments",
              description: "Command arguments as JSON object",
              args: {
                name: "arguments",
              },
            },
            {
              name: "--show-progress",
              description:
                "Enable in-progress responses streaming (default: false)",
            },
            {
              name: ["--help", "-h"],
              description: "Show help",
            },
          ],
        },
        {
          name: "help",
          description: "Help",
        },
      ],
    },
    {
      name: "rules",
      description: "Rules information and management commands",
      subcommands: [
        {
          name: "update",
          description: "Update rule",
          options: [
            {
              name: "--rule-id",
              description: "Rule ID; can be obtained in cloud.enapter.com",
              args: {
                name: "ID",
              },
            },
            {
              name: "--rule-path",
              description: "Path to file with rule Lua code",
              args: {
                template: "filepaths",
              },
            },
            {
              name: "--execution-interval",
              description:
                "Rule execution interval in milliseconds (default: chosen by the server)",
              args: {
                name: "interval",
                isOptional: true,
              },
            },
            {
              name: "--stdlib-version",
              description:
                "Version of standard library used by the rule (default: chosen by the server)",
              args: {
                name: "version",
                isOptional: true,
              },
            },
            {
              name: "--timeout",
              description: "Time to wait for rule update (default: 30s)",
              args: {
                name: "timeout",
                isOptional: true,
              },
            },
            {
              name: ["--help", "-h"],
              description: "Show help",
            },
          ],
        },
        {
          name: "logs",
          description: "Stream logs from a rule",
          options: [
            {
              name: "--rule-id",
              description: "Rule ID; can be obtained in cloud.enapter.com",
              args: {
                name: "ID",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Show help",
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Shows a list of commands or help for one command",
      args: {
        name: "command",
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
    },
    {
      name: ["--version", "-v"],
      description: "Show version",
    },
  ],
  // Only uncomment if enapter takes an argument
  // args: {}
};
export default completionSpec;
