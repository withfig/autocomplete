import { filepaths } from "@fig/autocomplete-generators";
import { YAMLSeq } from "yaml";
const bwLogo32x32 = "https://bitwarden.com/images/icon_32x32.png";

const completionSpec: Fig.Spec = {
  name: "bws",
  subcommands: [
    {
      name: "config",
      description: "Specify server settings for the Secrets Manager CLI",
      icon: bwLogo32x32,
      options: [
        {
          name: "name",
          description: "Value to set",
          args: [
            {
              name: "server-base",
              description: "Base server URL",
              isOptional: true,
            },
            {
              name: "server-api",
              description: "Server API endpoint URL",
              isOptional: true,
            },
            {
              name: "server-identity",
              description: "Server Identity endpoint URL",
              isOptional: true,
            },
            {
              name: "state-file-dir",
              description: "Server file storage location",
              isOptional: true,
            },
          ],
          exclusiveOn: ["delete", "edit", "get", "list"],
        },
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
            template: "filepaths"
          }
        },
        {
          name: ["-h", "--help"],
          description: "Display help for login command",
          priority: 49,
        },
      ],
      args: [
        {
          name: "email",
          description: "Email Address of Bitwarden Account",
          isOptional: true,
        },
        {
          name: "password",
          description: "Master Password of Bitwarden Vault",
          isOptional: true,
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
      options: [
        {
          name: "create",
          description: "Create a new project",
          args: {
            name: "NAME",
            description: "Project Name",
          },
          exclusiveOn: ["delete", "edit", "get", "list"],
        },
        {
          name: "delete",
          description: "Delete one or more existing projects",
          args: {
            name: "PROJECT_IDS",
            description: "ID(s) of project(s) to delete",
          },
          exclusiveOn: ["create", "edit", "get", "list"],
        },
        {
          name: "edit",
          description: "Change the name of an existing project",
          args: [
            {
              name: "--name",
              description: "New project name",
            },
            {
              name: "PROJECT_ID",
              description: "Project to edit",
            },
          ],
          exclusiveOn: ["create", "delete", "get", "list"],
        },
        {
          name: "get",
          description:
            "Retrieve a specific project accessible to this service account",
          args: {
            name: "PROJECT_ID",
            description: "Project to retrieve",
          },
          exclusiveOn: ["create", "delete", "edit", "list"],
        },
        {
          name: "list",
          description: "List projects accessible to this service account",
          exclusiveOn: ["create", "delete", "edit", "get"],
        },
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
      options: [
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
            {
              name: "NOTE",
              description: "Optional notes about this secret",
              isOptional: true,
            },
          ],
          exclusiveOn: ["delete", "edit", "get", "list"],
        },
        {
          name: "delete",
          description: "Delete an existing secret",
          exclusiveOn: ["create", "edit", "get", "list"],
          args: {
            name: "SECRET_IDS",
            description: "Delete one or more secrets designated by SECRET_IDS",
          },
          isDangerous: true,
        },
        {
          name: "edit",
          description: "Edit an existing secret",
          exclusiveOn: ["create", "delete", "get", "list"],
          args: [
            {
              name: "KEY",
              description: "Secret Key",
              isOptional: true,
            },
            { name: "VALUE", description: "Secret Value", isOptional: true },
            {
              name: "PROJECT_ID",
              description: "The ID of the project this secret will be added to",
              isOptional: true,
            },
            {
              name: "NOTE",
              description: "Optional notes about this secret",
              isOptional: true,
            },
          ],
        },
        {
          name: "get",
          description: "Retrieve an existing secret",
          exclusiveOn: ["create", "delete", "edit", "list"],
          args: {
            name: "SECRET_ID",
            description: "Secret to retrieve",
          },
        },
        {
          name: "list",
          description: "List the secrets this service account can access",
          exclusiveOn: ["create", "delete", "edit", "get"],
          args: {
            name: "Project",
            description: "Project Identifier",
            isOptional: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Display help for unlock command",
          exclusiveOn: ["--check", "--passwordenv", "--passwordfile"],
          priority: 49,
        },
      ],
      args: {
        name: "password",
        description: "Master Password for the Vault to be unlocked",
        isOptional: true,
      },
    },
    {
      name: "help",
      description: "",
      icon: bwLogo32x32,
      options: [
        {
          name: ["-f", "--force"],
          description: "Force a full sync",
          exclusiveOn: ["--last"],
        },
        {
          name: "--last",
          description: "Show details of the last sync",
          exclusiveOn: ["--force", "-f"],
        },
        {
          name: ["-h", "--help"],
          description: "Display help for sync command",
          priority: 49,
        },
      ],
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
          { name: "yaml", description: "Produce yaml output"},
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
