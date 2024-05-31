import { filepaths } from "@fig/autocomplete-generators";
const bwLogo32x32 = "https://bitwarden.com/images/icon_32x32.png";

const completionSpec: Fig.Spec = {
  name: "bws",
  subcommands: [
    {
      name: "config",
      description: "Specify server settings for the Secrets Manager CLI",
      icon: bwLogo32x32,
      args: {
        name: "Setting",
        description: "Server setting to specify",
        suggestions: [
          {
            name: "server-base",
            description: "Base server URL",
          },
          {
            name: "server-api",
            description: "Server API endpoint URL",
          },
          {
            name: "server-identity",
            description: "Server Identity endpoint URL",
          },
          {
            name: "state-file-dir",
            description: "Server file storage location",
          },
        ],
      },
      options: [
        {
          name: "--profile",
          description: "Save specified value(s) to an alternate profile",
          args: {
            name: "profile",
            description: "Profile name to save to",
          },
        },
        {
          name: "--config-file",
          description: "Save specified value(s) to an alternative config file",
          args: {
            name: "Config file path",
            template: "filepaths",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Display help for login command",
          priority: 49,
        },
      ],
    },
    {
      name: "completions",
      description: "Generate shell completions",
      icon: bwLogo32x32,
      args: {
        name: "SHELL",
        description: "Shell to generate completions for",
        suggestions: [
          { name: "bash", description: "Generate shell completions for bash" },
          {
            name: "elvish",
            description: "Generate shell completions for elvish",
          },
          { name: "fish", description: "Generate shell completions for fish" },
          {
            name: "powershell",
            description: "Generate shell completions for powershell",
          },
          { name: "zsh", description: "Generate shell completions for zsh" },
        ],
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Display help for logout command",
          priority: 49,
        },
      ],
    },
    {
      name: "project",
      description: "Access, manipulate and create projects",
      icon: bwLogo32x32,
      subcommands: [
        {
          name: "create",
          description: "Create a new project",
          insertValue: "create '{cursor}'",
          args: {
            name: "NAME",
            description: "Name of project to be created",
          },
        },
        {
          name: "delete",
          description: "Delete one or more existing projects",
          insertValue: "delete '{cursor}'",
          args: {
            name: "PROJECT_ID(s)",
            description: "ID(s) of project(s) to delete",
          },
          isDangerous: true,
        },
        {
          name: "edit",
          description: "Change the name of an existing project",
          insertValue: "edit --name '{cursor}'",
          args: [
            {
              name: "--name",
              description: "New project name",
            },
            {
              name: "PROJECT_ID",
              description: "ID of project to edit",
            },
          ],
        },
        {
          name: "get",
          description:
            "Retrieve a specific project accessible to this service account",
          insertValue: "get '{cursor}'",
          args: {
            name: "PROJECT_ID",
            description: "ID of project to retrieve",
          },
        },
        {
          name: "list",
          description: "List projects accessible to this service account",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Access, manipulate and create projects",
          priority: 49,
        },
      ],
    },
    {
      name: "secret",
      description: "Access, manipulate and create secrets",
      icon: bwLogo32x32,
      subcommands: [
        {
          name: "create",
          description: "Create a new secret",
          args: [
            {
              name: "KEY",
              description: "Secret Key",
            },
            { name: "VALUE", description: "Secret Value" },
            {
              name: "PROJECT_ID",
              description: "The ID of the project this secret will be added to",
            },
          ],
          options: [
            {
              name: "--note",
              description: "Optional notes about this secret",
              insertValue: "--note '{cursor}'",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing secret",
          args: {
            name: "SECRET_IDS",
            description: "Delete one or more secrets designated by SECRET_IDS",
          },
          isDangerous: true,
        },
        {
          name: "edit",
          description: "Edit an existing secret",
          args: {
            name: "SECRET_ID",
            description: "ID of secret to be edited",
          },
          options: [
            {
              name: "key",
              description: "Edit the Secret Key",
              insertValue: "--key '{cursor}'",
            },
            {
              name: "value",
              description: "Edit the Secret Value",
              insertValue: "--value '{cursor}'",
            },
            {
              name: "project-id",
              description: "Edit the ID of project this secret belongs to",
              insertValue: "--project-id '{cursor}'",
            },
            {
              name: "note",
              description: "Edit the optional notes about this secret",
              insertValue: "--note '{cursor}'",
            },
          ],
        },
        {
          name: "get",
          description: "Retrieve an existing secret",
          args: {
            name: "SECRET_ID",
            description: "Secret to retrieve",
          },
        },
        {
          name: "list",
          description: "List the secrets this service account can access",
          args: {
            name: "Project",
            description: "Project Identifier",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Display help for unlock command",
          priority: 49,
        },
      ],
    },
    {
      name: ["--help", "-h"],
      description:
        "Get help about using the Bitwarden Secrets Manager CLI tool",
      icon: bwLogo32x32,
    },
  ],
  options: [
    {
      name: ["-o", "--output"],
      description: "Output format [default: json]",
      args: {
        name: "Format",
        description: "Select output format",
        suggestions: [
          { name: "json", description: "Produce json output" },
          { name: "yaml", description: "Produce yaml output" },
          { name: "env", description: "Produce env output" },
          { name: "table", description: "Produce table output" },
          { name: "tsv", description: "Produce tsv output" },
          { name: "none", description: "Produce no output" },
        ],
      },
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 40,
    },
    {
      name: ["-c", "--color"],
      description: "Use colors in the output [default: auto]",
      args: {
        name: "Color",
        description: "Select output coloration scheme",
        suggestions: [
          { name: "no", description: "Do not color output" },
          { name: "yes", description: "Colorize output" },
          { name: "auto", description: "Use default terminal colors" },
        ],
      },
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 40,
    },
    {
      name: ["-t", "--access-token"],
      description:
        "Specify access token for the service account [env: BWS_ACCESS_TOKEN]",
      args: {
        name: "Access Token",
        description: "Bitwarden Secrets Manager Access Token",
      },
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 40,
    },
    {
      name: ["-f", "--config-file"],
      description: "Config file to use [default: ~/.bws.config]",
      args: {
        name: "Config File",
        template: "filepaths",
      },
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 40,
    },
    {
      name: ["-p", "--profile"],
      description: "Profile to use from the config file [env: BWS_PROFILE=]",
      args: {
        name: "Profile",
        description: "User Profile to enable",
      },
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 40,
    },
    {
      name: ["-u", "--server-url"],
      description:
        "Override the server URL from the config file [env: BWS_SERVER_URL=]",
      args: {
        name: "Server URL",
        description: "URL of Bitwarden Secrets Manager server",
      },
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 40,
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 49,
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 49,
    },
  ],
};

export default completionSpec;
