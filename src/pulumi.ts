const stacksGenerator: Fig.Generator = {
  cache: {
    cacheByDirectory: true,
  },
  script: ["pulumi", "stack", "ls", "--json"],
  postProcess: (out) => {
    try {
      return JSON.parse(out).map((stack) => ({
        name: stack.name,
        description: stack.description,
      }));
    } catch (e) {
      return [];
    }
  },
};

const stackOption: Fig.Option = {
  name: ["-s", "--stack"],
  description:
    "The name of the stack to operate on. Defaults to the current stack",
  args: {
    name: "stack-name",
    generators: stacksGenerator,
  },
};

const yesOption: Fig.Option = {
  name: ["-y", "--yes"],
  description:
    "Skip confirmation prompts, and proceed with cancellation anyway",
  isDangerous: true,
};

const jsonOption: Fig.Option = {
  name: ["-j", "--json"],
  description: "Emit output as JSON",
};

const configFileOption: Fig.Option = {
  name: "--config-file",
  description:
    "Use the configuration values in the specified file rather than detecting the file name",
  args: {
    name: "file",
    template: ["filepaths", "folders"],
  },
};

const messageOption: Fig.Option = {
  name: ["-m", "--message"],
  description: "Optional message to associate with the destroy operation",
  args: { name: "message" },
};

const parallelOption: Fig.Option = {
  name: ["-p", "--parallel"],
  description:
    "Allow P resource operations to run in parallel at once (1 for no parallelism). Defaults to unbounded. (default 2147483647)",
  args: {
    name: "int",
    default: "1",
    suggestions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
};

const diffOption: Fig.Option = {
  name: "--diff",
  description: "Display operation as a rich diff showing the overall change",
};

const debugOption: Fig.Option = {
  name: ["-d", "--debug"],
  description: "Print detailed debugging output during resource operations",
};

const localOption: Fig.Option = {
  name: ["-l", "--local"],
  description: "Use Pulumi in local-only mode",
};

const skipPreview: Fig.Option = {
  name: ["-f", "--skip-preview"],
  description: "Do not perform a preview before performing the destroy",
};

const targetOption: Fig.Option = {
  name: ["-t", "--target"],
  description:
    "Specify a single resource URN to destroy. All resources necessary to destroy this target will also be destroyed. Multiple resources can be specified using: --target urn1 --target urn2",
  args: { name: "stringArray" },
};

const pathOption: Fig.Option = {
  name: "--path",
  description: "The key contains a path to a property in a map or list to set",
};

const pathsOption: Fig.Option = {
  name: "--path",
  description:
    "Parse the keys as paths in a map or list rather than raw strings",
};

const suppressPermalinkOption: Fig.Option = {
  name: "--suppress-permalink",
  description: "Suppress display of the state permalink",
  args: {
    name: "bool",
    default: "false",
    suggestions: ["false", "true"],
  },
};

const secretsProviderOption: Fig.Option = {
  name: "--secrets-provider",
  description:
    'The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault) (default "default")',
  args: {
    name: "providerType",
    default: "default",
    suggestions: [
      "default",
      "passphrase",
      "awskms",
      "azurekeyvault",
      "gcpkms",
      "hashivault",
    ],
  },
};

const inheritedOptions: Fig.Option[] = [
  {
    name: "--color",
    description:
      'Colorize output. Choices are: always, never, raw, auto (default "auto")',
    args: {
      name: "mode",
      default: "auto",
      suggestions: ["always", "never", "raw", "auto"],
    },
  },
  {
    name: ["-C", "--cwd"],
    description: "Run pulumi as if it had been started in another directory",
    args: {
      name: "path",
      template: ["folders"],
    },
  },
  {
    name: "--disable-integrity-checking",
    description: "Disable integrity checking of checkpoint files",
  },
  {
    name: ["-e", "--emoji"],
    description: "Enable emojis in the output",
  },
  {
    name: "--logflow",
    description: "Flow log settings to child processes (like plugins)",
  },
  {
    name: "--logtostderr",
    description: "Log to stderr instead of to files",
  },
  {
    name: "--non-interactive",
    description: "Disable interactive mode for all commands",
  },
  {
    name: "--profiling",
    description:
      "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
  },
  {
    name: "--tracing",
    description:
      "Emit tracing to the specified endpoint. Use the file: scheme to write tracing data to a local file",
    args: {
      name: "file",
    },
  },
  {
    name: ["-v", "--verbose"],
    description:
      "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
    args: {
      name: "int",
      default: "3",
      suggestions: ["1", "2", "3", "4", "5"],
    },
  },
];

const upDestroyOptions: Fig.Option[] = [
  stackOption,
  parallelOption,
  messageOption,
  diffOption,
  debugOption,
  configFileOption,
  suppressPermalinkOption,
  targetOption,
  {
    name: ["-j", "--json"],
    description:
      "Serialize the update diffs, operations, and overall output as JSON",
  },
  {
    name: ["-r", "--refresh"],
    description:
      "Refresh the state of the stack's resources before this update",
    args: {
      name: "bool",
      default: "true",
      suggestions: ["false", "true"],
    },
  },
  {
    name: "--show-config",
    description: "Show configuration keys and variables",
  },
  {
    name: "--show-replacement-steps",
    description:
      "Show detailed resource replacement creates and deletes instead of a single step",
  },
  {
    name: "--show-sames",
    description:
      "Show resources that don't need to be updated because they haven't changed, alongside those that do",
  },
  {
    name: "--suppress-outputs",
    description:
      "Suppress display of stack outputs (in case they contain sensitive values)",
  },
  {
    name: "--target-dependents",
    description:
      "Allows destroying of dependent targets discovered but not specified in --target list",
  },
];

const icon = "https://www.pulumi.com/logos/brand/avatar-on-white.svg";

const completionSpec: Fig.Spec = {
  name: "pulumi",
  description:
    "Pulumi's open source infrastructure as code SDK enables you to create, deploy, and manage infrastructure on any cloud, using your favorite languages",
  subcommands: [
    {
      name: "about",
      description: "Print information about the Pulumi environment",
      icon,
      options: [
        ...inheritedOptions,
        jsonOption,
        {
          name: ["-t", "--transitive"],
          description: "Include transitive dependencies",
        },
      ],
    },
    {
      name: "cancel",
      description: "Cancel a stack’s currently running update, if any",
      options: [...inheritedOptions, yesOption, stackOption],
    },
    {
      name: "config",
      description: "Manage configuration",
      subcommands: [
        {
          name: "cp",
          description: "Copy config to another stack",
          options: [
            ...inheritedOptions,
            pathOption,
            {
              name: ["-d", "--dest"],
              description: "The name of the new stack to copy the config to",
              args: {
                name: "stack-name",
                generators: stacksGenerator,
              },
            },
          ],
        },
        {
          name: "get",
          description: "Get a single configuration value",
          args: {
            name: "key",
          },
          options: [
            ...inheritedOptions,
            jsonOption,
            {
              name: "--path",
              description:
                "The key contains a path to a property in a map or list to get",
            },
          ],
        },
        {
          name: "refresh",
          description:
            "Update the local configuration based on the most recent deployment of the stack",
          options: [
            ...inheritedOptions,
            {
              name: ["-f", "--force"],
              description:
                "Overwrite configuration file, if it exists, without creating a backup",
              isDangerous: true,
            },
          ],
        },
        {
          name: "rm",
          description: "Remove configuration value",
          args: { name: "key" },
          options: [
            ...inheritedOptions,
            {
              name: "--path",
              description:
                "The key contains a path to a property in a map or list to remove",
            },
          ],
        },
        {
          name: "rm-all",
          description: "Remove multiple configuration values",
          args: {
            name: "key",
            isVariadic: true,
          },
          options: [...inheritedOptions, pathsOption],
        },
        {
          name: "set",
          description: "Set configuration value",
          args: [
            {
              name: "key",
            },
            {
              name: "value",
            },
          ],
          options: [
            ...inheritedOptions,
            pathOption,
            {
              name: "--plaintext",
              description: "Save the value as plaintext (unencrypted)",
            },
            {
              name: "--secret",
              description:
                "Encrypt the value instead of storing it in plaintext",
            },
          ],
        },
        {
          name: "set-all",
          description: "Set multiple configuration values",
          args: {
            name: "key value",
          },
          options: [
            ...inheritedOptions,
            pathsOption,
            {
              name: "--plaintext",
              description: "Marks a value as plaintext (unencrypted)",
              args: {
                name: "stringArray",
              },
            },
            {
              name: "--secret",
              description: "Marks a value as secret to be encrypted",
              args: {
                name: "stringArray",
              },
            },
          ],
        },
      ],
      options: [
        ...inheritedOptions,
        jsonOption,
        stackOption,
        configFileOption,
        {
          name: "--show-secrets",
          description:
            "Show secret values when listing config instead of displaying blinded values",
        },
      ],
    },
    {
      name: "console",
      description: "Opens the current stack in the Pulumi Console",
      options: [...inheritedOptions, stackOption],
    },
    {
      name: "destroy",
      description: "Destroy an existing stack and its resources",
      options: [
        ...inheritedOptions,
        ...upDestroyOptions,
        yesOption,
        skipPreview,
        {
          name: "--exclude-protected",
          description:
            "Do not destroy protected resources. Destroy all other resources",
        },
      ],
    },
    {
      name: "import",
      description: "Import resources into an existing stack",
      options: [
        ...inheritedOptions,
        configFileOption,
        debugOption,
        diffOption,
        messageOption,
        parallelOption,
        stackOption,
        yesOption,
        skipPreview,
        suppressPermalinkOption,
        {
          name: ["-f", "--file"],
          description:
            "The path to a JSON-encoded file containing a list of resources to import",
          args: { name: "file", template: ["filepaths"] },
        },
        {
          name: ["-o", "--out"],
          description:
            "The path to the file that will contain the generated resource declarations",
          args: { name: "file" },
        },
        {
          name: "--parent",
          description:
            "The name and URN of the parent resource in the format name=urn, where name is the variable name of the parent resource",
          args: { name: "[name=urn]" },
        },
        {
          name: "--protect",
          description:
            "Allow resources to be imported with protection from deletion enabled (default true)",
        },
        {
          name: "--provider",
          description:
            "The name and URN of the provider to use for the import in the format name=urn, where name is the variable name for the provider resourceƒ",
          args: { name: "[name=urn]" },
        },
        {
          name: "--suppress-outputs",
          description:
            "Suppress display of stack outputs (in case they contain sensitive values)",
        },
      ],
      args: [{ name: "type" }, { name: "name" }, { name: "id" }],
    },
    {
      name: "login",
      description: "Log in to the Pulumi service",
      options: [
        ...inheritedOptions,
        localOption,
        {
          name: ["-c", "--cloud-url"],
          description: "A cloud URL to log in to",
          args: { name: "url" },
        },
        {
          name: "--default-org",
          description:
            "A default org to associate with the login. Please note, currently, only the managed and self-hosted backends support organizations",
          args: { name: "name" },
        },
      ],
      args: { name: "url" },
    },
    {
      name: "logout",
      description: "Log out of the Pulumi service",
      options: [
        ...inheritedOptions,
        localOption,
        {
          name: "--all",
          description: "Logout of all backends",
        },
        {
          name: ["-c", "--cloud-url"],
          description: "A cloud URL to log out of (defaults to current cloud)",
          args: { name: "url" },
        },
      ],
      args: { name: "url" },
    },
    {
      name: "logs",
      description: "[PREVIEW] Show aggregated resource logs for a stack",
      options: [
        ...inheritedOptions,
        configFileOption,
        stackOption,
        jsonOption,
        {
          name: ["-f", "--follow"],
          description: "Follow the log stream in real time (like tail -f)",
        },
        {
          name: ["-r", "--resource"],
          description:
            "Only return logs for the requested resource ('name', 'type::name' or full URN).  Defaults to returning all logs",
          args: { name: "name" },
        },
        {
          name: "--since",
          description:
            "Only return logs newer than a relative duration ('5s', '2m', '3h') or absolute timestamp.  Defaults to returning the last 1 hour of logs. (default \"1h\")",
          args: {
            name: "duration",
            default: "1h",
            suggestions: ["5s", "2m", "3h"],
          },
        },
      ],
    },
    {
      name: "new",
      description: "Create a new Pulumi project",
      options: [
        ...inheritedOptions,
        stackOption,
        yesOption,
        secretsProviderOption,
        {
          name: ["-c", "--config"],
          description: "Config to save",
          args: { name: "stringArray" },
        },
        {
          name: "--config-path",
          description:
            "Config keys contain a path to a property in a map or list to set",
        },
        {
          name: ["-d", "--description"],
          description:
            "The project description; if not specified, a prompt will request it",
          args: { name: "desc" },
        },
        {
          name: "--dir",
          description:
            "The location to place the generated project; if not specified, the current directory is used",
          args: { name: "location", template: ["folders"] },
        },
        {
          name: ["-f", "--force"],
          isDangerous: true,
          description:
            "Forces content to be generated even if it would change existing files",
        },
        {
          name: ["-g", "--generate-only"],
          description:
            "Generate the project only; do not create a stack, save config, or install dependencies",
        },
        {
          name: ["-n", "--name"],
          description:
            "The project name; if not specified, a prompt will request it",
          args: { name: "projectName" },
        },
        {
          name: ["-o", "--offline"],
          description:
            "Use locally cached templates without making any network requests",
        },
      ],
    },
    {
      name: "org",
      description: "Manage Organization configuration",
      subcommands: [
        {
          name: "get-default",
          description: "Get the default org for the current backend",
        },
        {
          name: "set-default",
          description: "Set the default organization for the current backend",
          args: { name: "NAME" },
        },
      ],
      options: inheritedOptions,
    },
    {
      name: "plugin",
      description: "Manage language and resource provider plugins",
      subcommands: [
        {
          name: "install",
          description: "Install one or more plugins",
          options: [
            ...inheritedOptions,
            {
              name: "--exact",
              description:
                "Force installation of an exact version match (usually >= is accepted)",
            },
            {
              name: ["-f", "--file"],
              description:
                "Install a plugin from a tarball file, instead of downloading it",
              args: { name: "file", template: ["filepaths"] },
            },
            {
              name: "--reinstall",
              description: "Reinstall a plugin even if it already exists",
            },
            {
              name: "--server",
              description: "A URL to download plugins from",
              args: { name: "url" },
            },
          ],
        },
        {
          name: "ls",
          description: "List plugins",
          options: [
            ...inheritedOptions,
            jsonOption,
            {
              name: ["-p", "--project"],
              description: "List only the plugins used by the current project",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more plugins from the download cache",
          options: [
            ...inheritedOptions,
            yesOption,
            {
              name: ["-a", "--all"],
              description: "Remove all plugins",
            },
          ],
        },
      ],
      options: inheritedOptions,
    },
    {
      name: "policy",
      description: "Manage resource policies",
      options: inheritedOptions,
      subcommands: [
        {
          name: "disable",
          description: "Disable a Policy Pack for a Pulumi organization",
          args: { name: "org-name/policy-pack-name" },
          options: [
            ...inheritedOptions,
            {
              name: "--policy-group",
              description:
                "The Policy Group for which the Policy Pack will be disabled; if not specified, the default Policy Group is used",
              args: { name: "policyGroup" },
            },
            {
              name: "--version",
              description:
                "The version of the Policy Pack that will be disabled; if not specified, any enabled version of the Policy Pack will be disabled",
              args: { name: "policyPackVersion" },
            },
          ],
        },
        {
          name: "enable",
          description: "Enable a Policy Pack for a Pulumi organization",
          args: { name: "org-name/policy-pack-name" },
          options: [
            ...inheritedOptions,
            {
              name: "--policy-group",
              description:
                "The Policy Group for which the Policy Pack will be enabled; if not specified, the default Policy Group is used",
              args: { name: "policyGroup" },
            },
            {
              name: "--config",
              description:
                "The file path for the Policy Pack configuration file",
              args: { name: "file" },
            },
          ],
        },
        {
          name: "group",
          description: "Manage policy groups",
          options: inheritedOptions,
        },
        {
          name: "ls",
          description: "List all Policy Packs for a Pulumi organization",
          args: { name: "org-name" },
          options: [...inheritedOptions, jsonOption],
        },
        {
          name: "new",
          description: "Create a new Pulumi Policy Pack",
          args: { name: "template|url" },
          options: [
            ...inheritedOptions,
            jsonOption,
            {
              name: ["-o", "--offline"],
              description:
                "Use locally cached templates without making any network requests",
            },
            {
              name: ["-g", "--generate-only"],
              description:
                "Generate the Policy Pack only; do not install dependencies",
            },
            {
              name: ["-f", "--force"],
              isDangerous: true,
              description:
                "Forces content to be generated even if it would change existing files",
            },
            {
              name: "--dir",
              description:
                "The location to place the generated Policy Pack; if not specified, the current directory is used",
              args: { name: "location", template: ["folders"] },
            },
          ],
        },
        {
          name: "publish",
          description: "Publish a Policy Pack to the Pulumi service",
          args: { name: "org-name" },
          options: inheritedOptions,
        },
        {
          name: "rm",
          description: "Removes a Policy Pack from a Pulumi organization",
          args: { name: "org-name/policy-pack-name" },
          options: [...inheritedOptions, yesOption],
        },
        {
          name: "validate-config",
          description: "Validate a Policy Pack configuration",
          args: { name: "org-name/policy-pack-name" },
          options: [
            ...inheritedOptions,
            {
              name: "--config",
              description:
                "The file path for the Policy Pack configuration file",
              args: { name: "file" },
            },
          ],
        },
      ],
    },
    {
      name: "preview",
      description: "Show a preview of updates to a stack’s resources",
      options: [
        ...inheritedOptions,
        ...upDestroyOptions,
        {
          name: ["-c", "--config"],
          description: "Config to use during the preview",
          args: { name: "stringArray" },
        },
        {
          name: "--config-path",
          description:
            "Config keys contain a path to a property in a map or list to set",
        },
        {
          name: "--expect-no-changes",
          description:
            "Return an error if any changes are proposed by this preview",
        },
        {
          name: "--policy-pack",
          description: "Run one or more policy packs as part of this update",
          args: { name: "strings" },
        },
        {
          name: "--policy-pack-config",
          description:
            'Path to JSON file containing the config for the policy pack of the corresponding"--policy-pack" flag',
          args: { name: "strings" },
        },
        {
          name: "--replace",
          description:
            "Specify resources to replace. Multiple resources can be specified using --replace urn1 --replace urn2",
          args: { name: "stringArray" },
        },
        {
          name: "--show-reads",
          description:
            "Show resources that are being read in, alongside those being managed directly in the stack",
        },
        {
          name: "--target-replace",
          description:
            "Specify a single resource URN to replace. Other resources will not be updated. Shorthand for --target urn --replace urn",
          args: { name: "stringArray" },
        },
      ],
    },
    {
      name: "refresh",
      description: "Refresh the resources in a stack",
      options: [
        ...inheritedOptions,
        configFileOption,
        debugOption,
        diffOption,
        messageOption,
        parallelOption,
        skipPreview,
        stackOption,
        yesOption,
        suppressPermalinkOption,
        targetOption,
        {
          name: ["-j", "--json"],
          description:
            "Serialize the refresh diffs, operations, and overall output as JSON",
        },
        {
          name: "--expect-no-changes",
          description:
            "Return an error if any changes occur during this update",
        },
        {
          name: "--show-replacement-steps",
          description:
            "Show detailed resource replacement creates and deletes instead of a single step",
        },
        {
          name: "--show-sames",
          description:
            "Show resources that needn't be updated because they haven't changed, alongside those that do",
        },
        {
          name: "--suppress-outputs",
          description:
            "Suppress display of stack outputs (in case they contain sensitive values)",
        },
      ],
    },
    {
      name: "schema",
      description: "Analyze package schemas",
      options: inheritedOptions,
      subcommands: [
        {
          name: "check",
          description: "Check a Pulumi package schema for errors",
        },
      ],
    },
    {
      name: "stack",
      description: "Manage stacks",
      options: [
        ...inheritedOptions,
        stackOption,
        { name: "--show-name", description: "Display only the stack name" },
        {
          name: "--show-secrets",
          description:
            "Display stack outputs which are marked as secret in plaintext",
        },
        {
          name: ["-i", "--show-ids"],
          description: "Display each resource's provider-assigned unique ID",
        },
        {
          name: ["-u", "--show-urns"],
          description:
            "Display each resource's Pulumi-assigned globally unique URN",
        },
      ],
      subcommands: [
        {
          name: "change-secrets-provider",
          description: "Change the secrets provider for the current stack",
          args: { name: "new-secrets-provider" },
          options: inheritedOptions,
        },
        {
          name: "export",
          description: "Export a stack’s deployment to standard out",
          options: [
            ...inheritedOptions,
            {
              name: "--file",
              description: "A filename to write stack output to",
              args: { name: "file" },
            },
            {
              name: "--show-secrets",
              description:
                "Emit secrets in plaintext in exported stack. Defaults to false",
              args: {
                name: "bool",
                default: "false",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--version",
              description:
                "Previous stack version to export. (If unset, will export the latest)",
            },
          ],
        },
        {
          name: "graph",
          description: "Export a stack’s dependency graph to a file",
          args: { name: "filename" },
          options: [
            ...inheritedOptions,
            {
              name: "--dependency-edge-color",
              description:
                'Sets the color of dependency edges in the graph (default "#246C60")',
              args: { name: "color", default: "#246C60" },
            },
            {
              name: "--ignore-dependency-edges",
              description:
                "Ignores edges introduced by dependency resource relationships",
            },
            {
              name: "--ignore-parent-edges",
              description:
                "Ignores edges introduced by parent/child resource relationships",
            },
            {
              name: "--parent-edge-color",
              description:
                'Sets the color of parent edges in the graph (default #AA6639")',
              args: { name: "color", default: "#246C60" },
            },
          ],
        },
        {
          name: "history",
          description: "[PREVIEW] Display history for a stack",
          options: [
            ...inheritedOptions,
            jsonOption,
            {
              name: "--full-dates",
              description: "Show full dates, instead of relative dates",
            },
            {
              name: "--page",
              description:
                "Used with 'page-size' to paginate results (default 1)",
              args: { name: "int", default: "1" },
            },
            {
              name: "--page-size",
              description:
                "Used with 'page' to control number of results returned (default 10)",
              args: { name: "int", default: "10" },
            },
            {
              name: "--show-secrets",
              description:
                "Show secret values when listing config instead of displaying blinded values",
            },
          ],
        },
        {
          name: "import",
          description:
            "Import a deployment from standard in into an existing stack",
          options: [
            ...inheritedOptions,
            {
              name: ["-f", "--force"],
              description:
                "Force the import to occur, even if apparent errors are discovered beforehand (not recommended)",
              isDangerous: true,
            },
            {
              name: "--file",
              description: "A filename to read stack input from",
              args: { name: "file", template: ["filepaths"] },
            },
          ],
        },
        {
          name: "init",
          description:
            "Create an empty stack with the given name, ready for updates",
          args: { name: "org-name/stack-name" },
          options: [
            ...inheritedOptions,
            secretsProviderOption,
            {
              name: "--copy-config-from",
              description: "The name of the stack to copy existing config from",
              args: { name: "stackName", generators: stacksGenerator },
            },
          ],
        },
        {
          name: "ls",
          description: "List stacks",
          options: [
            ...inheritedOptions,
            jsonOption,
            {
              name: ["-a", "--all"],
              description:
                "List all stacks instead of just stacks for the current project",
            },
            {
              name: ["-o", "--organization"],
              description:
                "Filter returned stacks to those in a specific organization",
              args: { name: "orgName" },
            },
            {
              name: ["-p", "--project"],
              description:
                "Filter returned stacks to those with a specific project name",
              args: { name: "projectName" },
            },
            {
              name: ["-t", "--tag"],
              description:
                "Filter returned stacks to those in a specific tag (tag-name or tag-name=tag-value)",
              args: { name: "tagName" },
            },
          ],
        },
        {
          name: "output",
          description: "Show a stack’s output properties",
          args: { name: "property-name" },
          options: [
            ...inheritedOptions,
            jsonOption,
            {
              name: "--show-secrets",
              description:
                "Display outputs which are marked as secret in plaintext",
            },
          ],
        },
        {
          name: "rename",
          description: "Rename an existing stack",
          args: { name: "new-stack-name" },
          options: inheritedOptions,
        },
        {
          name: "rm",
          description: "Remove a stack and its configuration",
          args: { name: "stack-name", generators: stacksGenerator },
          options: [
            ...inheritedOptions,
            yesOption,
            {
              name: ["-f", "--force"],
              description:
                "Forces deletion of the stack, leaving behind any resources managed by the stack",
              isDangerous: true,
            },
            {
              name: "--preserve-config",
              description:
                "Do not delete the corresponding Pulumi.<stack-name>.yaml configuration file for the stack",
            },
          ],
        },
        {
          name: "select",
          description: "Switch the current workspace to the given stack",
          args: { name: "stack", generators: stacksGenerator },
          options: [
            ...inheritedOptions,
            {
              name: "--secrets-provider",
              description:
                'Use with --create flag, The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault) (default "default")',
              args: {
                name: "providerType",
                default: "default",
                suggestions: [
                  "default",
                  "passphrase",
                  "awskms",
                  "azurekeyvault",
                  "gcpkms",
                  "hashivault",
                ],
              },
            },
          ],
        },
        {
          name: "tag",
          description: "Manage stack tags",
          options: inheritedOptions,
          subcommands: [
            {
              name: "get",
              description: "Get a single stack tag value",
              args: { name: "name" },
              subcommands: inheritedOptions,
            },
            {
              name: "ls",
              description: "List all stack tags",
              subcommands: [...inheritedOptions, jsonOption],
            },
            {
              name: "rm",
              description: "Remove a stack tag",
              args: { name: "name" },
              subcommands: inheritedOptions,
            },
            {
              name: "set",
              description: "Set a stack tag",
              args: { name: "name value" },
              subcommands: inheritedOptions,
            },
          ],
        },
      ],
    },
    {
      name: "state",
      description: "Edit the current stack’s state",
      icon,
      options: inheritedOptions,
      subcommands: [
        {
          name: "delete",
          description: "Deletes a resource from a stack’s state",
          options: [
            ...inheritedOptions,
            stackOption,
            yesOption,
            {
              name: "--force",
              description: "Force deletion of protected resources",
              args: {
                name: "stack-name",
                generators: stacksGenerator,
              },
            },
          ],
          args: { name: "resource URN" },
        },
        {
          name: "unprotect",
          description: "Unprotect resources in a stack’s state",
          options: [
            ...inheritedOptions,
            stackOption,
            yesOption,
            {
              name: "--all",
              description: "Unprotect all resources in the checkpoint",
              args: {
                name: "stack-name",
                generators: stacksGenerator,
              },
            },
          ],
          args: { name: "resource URN" },
        },
      ],
    },
    {
      name: "up",
      description: "Deploy code and/or resource changes",
      options: [
        ...inheritedOptions,
        ...upDestroyOptions,
        yesOption,
        skipPreview,
        secretsProviderOption,
        {
          name: ["-c", "--config"],
          description: "Config to use during the update",
          args: { name: "stringArray" },
        },
        {
          name: "--config-path",
          description:
            "Config keys contain a path to a property in a map or list to set",
        },
        {
          name: "--expect-no-changes",
          description:
            "Return an error if any changes occur during this update",
        },
        {
          name: "--policy-pack",
          description: "Run one or more policy packs as part of this update",
          args: { name: "strings" },
        },
        {
          name: "--policy-pack-config",
          description:
            'Path to JSON file containing the config for the policy pack of the corresponding "--policy-pack" flag',
          args: { name: "strings" },
        },
        {
          name: "--replace",
          description:
            "Specify resources to replace. Multiple resources can be specified using --replace urn1 --replace urn2",
          args: { name: "stringArray" },
        },
        {
          name: "--show-reads",
          description:
            "Show resources that are being read in, alongside those being managed directly in the stack",
        },
        {
          name: "--target-replace",
          description:
            "Specify a single resource URN to replace. Other resources will not be updated. Shorthand for --target urn --replace urn",
          args: { name: "stringArray" },
        },
      ],
      args: { name: "template|url" },
    },
    {
      name: "version",
      description: "Print Pulumi’s version number",
      options: inheritedOptions,
    },
    {
      name: "watch",
      description: "[PREVIEW] Continuously update the resources in a stack",
      options: [
        ...inheritedOptions,
        configFileOption,
        debugOption,
        messageOption,
        parallelOption,
        stackOption,
        secretsProviderOption,
        {
          name: ["-c", "--config"],
          description: "Config to use during the update",
          args: { name: "stringArray" },
        },
        {
          name: "--config-path",
          description:
            "Config keys contain a path to a property in a map or list to set",
        },
        {
          name: "--path",
          description:
            "Specify one or more relative or absolute paths that need to be watched. A path can point to a folder or a file. Defaults to working directory",
          args: { name: "stringArray" },
        },
        {
          name: "--policy-pack",
          description: "Run one or more policy packs as part of each update",
          args: { name: "strings" },
        },
        {
          name: "--policy-pack-config",
          description:
            'Path to JSON file containing the config for the policy pack of the corresponding "--policy-pack" flag',
          args: { name: "strings" },
        },
        {
          name: ["-r", "--refresh"],
          description:
            "Refresh the state of the stack's resources before each update",
        },
        {
          name: "--show-config",
          description: "Show configuration keys and variables",
        },
        {
          name: "--show-replacement-steps",
          description:
            "Show detailed resource replacement creates and deletes instead of a single step",
        },
        {
          name: "--show-sames",
          description:
            "Show resources that don't need be updated because they haven't changed, alongside those that do",
        },
      ],
    },
    {
      name: "whoami",
      description: "Displays the username of the currently logged in user",
      options: inheritedOptions,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      isPersistent: true,
      description: "Show help",
    },
  ],
};

export default completionSpec;
