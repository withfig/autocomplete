import { valueList } from "@fig/autocomplete-generators";

const modifiers: Fig.Suggestion[] = [
  { name: ["after", "a"], description: "Attribute modifier" },
  { name: ["before", "b"], description: "Attribute modifier" },
  { name: ["empty", "e"], description: "Attribute modifier" },
  { name: "encrypted", description: "Attribute modifier" },
  { name: "exact", description: "Attribute modifier" },
  { name: ["executable", "x"], description: "Attribute modifier" },
  { name: ["once", "o"], description: "Attribute modifier" },
  { name: ["private", "p"], description: "Attribute modifier" },
  { name: ["readonly", "r"], description: "Attribute modifier" },
  { name: "remove", description: "Attribute modifier" },
  { name: ["template", "t"], description: "Attribute modifier" },
  { name: "create", description: "Type modifier" },
  { name: "modify", description: "Type modifier" },
  { name: "script", description: "Type modifier" },
  { name: "symlink", description: "Type modifier" },
];

const plusMinusModifiers = ["+", "-"].flatMap((prefix) =>
  modifiers.map((s) => ({
    ...s,
    name:
      typeof s.name === "string"
        ? `${prefix}${s.name}`
        : s.name.map((name) => `${prefix}${name}`),
  }))
);

const noModifiers = modifiers.map((s) => ({
  ...s,
  name:
    typeof s.name === "string"
      ? `no${s.name}`
      : s.name.map((name) => `no${name}`),
}));

const types = valueList({
  values: [
    "all",
    "dirs",
    "files",
    "remove",
    "scripts",
    "symlinks",
    "encrypted",
  ],
  insertDelimiter: true,
});

// TODO(SeparateRecords): Eventually replace all args that mention
// "target state" with a generator (chezmoi list) instead of template

const completionSpec: Fig.Spec = {
  name: "chezmoi",
  description:
    "Manage your dotfiles across multiple diverse machines, securely",
  subcommands: [
    {
      name: ["manage", "add"],
      description:
        "Add an existing file, directory, or symlink to the source state",
      args: {
        name: "file",
        template: ["filepaths", "folders"],
        isVariadic: true,
      },
      options: [
        {
          name: ["--autotemplate", "-a"],
          description: "Generate the template when adding files as templates",
        },
        {
          name: "--create",
          description:
            "Add files that should exist, irrespective of their contents",
        },
        { name: "--encrypt", description: "Encrypt files" },
        { name: "--exact", description: "Add directories exactly" },
        {
          name: ["--exclude", "-x"],
          description: "Exclude entry types",
          requiresSeparator: true,
          args: { name: "exclude", default: "none", generators: types },
        },
        {
          name: ["--follow", "-f"],
          description: "Add symlink targets instead of symlinks",
        },
        {
          name: ["--include", "-i"],
          description: "Include entry types",
          requiresSeparator: true,
          args: { name: "include", default: "all", generators: types },
        },
        {
          name: ["--prompt", "-p"],
          description: "Prompt before adding each entry",
        },
        {
          name: ["--recursive", "-r"],
          description: "Recurse into subdirectories",
        },
        { name: ["--template", "-T"], description: "Add files as templates" },
        {
          name: "--template-symlinks",
          description:
            "Add symlinks with target in source or home dirs as templates",
        },
      ],
    },
    {
      name: "apply",
      description: "Update the destination directory to match the target state",
      args: {
        name: "target",
        template: ["filepaths", "folders"],
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: ["--exclude", "-x"],
          description: "Exclude entry types",
          requiresSeparator: true,
          args: { name: "exclude", default: "none", generators: types },
        },
        {
          name: ["--include", "-i"],
          description: "Include entry types",
          requiresSeparator: true,
          args: { name: "include", default: "all", generators: types },
        },
        { name: "--init", description: "Recreate config file from template" },
        {
          name: ["--recursive", "-r"],
          description: "Recurse into subdirectories",
        },
      ],
    },
    {
      name: "archive",
      description: "Generate a tar archive of the target state",
      args: {
        name: "target",
        isVariadic: true,
        isOptional: true,
        template: ["filepaths", "folders"],
      },
      options: [
        {
          name: ["--exclude", "-x"],
          description: "Exclude entry types",
          requiresSeparator: true,
          args: { name: "exclude", default: "none", generators: types },
        },
        {
          name: ["--format", "-f"],
          description: "Set archive format",
          requiresSeparator: true,
          args: {
            name: "format",
            suggestions: [
              "tar",
              "tar.bz2",
              "tar.gz",
              "tar.xz",
              "tbz2",
              "tgz",
              "txz",
              "zip",
            ],
          },
        },

        { name: ["--gzip", "-z"], description: "Compress output with gzip" },
        {
          name: ["--include", "-i"],
          description: "Include entry types",
          requiresSeparator: true,
          args: { name: "include", default: "all", generators: types },
        },
        { name: "--init", description: "Recreate config file from template" },
        {
          name: ["--recursive", "-r"],
          description: "Recurse into subdirectories",
        },
      ],
    },
    {
      name: "cat",
      description: "Print the target contents of a file, script, or symlink",
      args: {
        name: "target",
        isVariadic: true,
        template: ["filepaths", "folders"],
      },
    },
    { name: "cd", description: "Launch a shell in the source directory" },
    {
      name: "chattr",
      description: "Change the attributes of a target in the source state",
      args: [
        {
          name: "attributes/modifiers",
          generators: {
            // This generator needs to run on every keystroke to provide
            // suggestions after '+', '-', ',' and 'no'. All the suggestions
            // are precomputed to make this as fast as it can be.
            trigger: () => true,
            getQueryTerm: ",",
            custom: async (tokens) => {
              const finalToken = tokens[tokens.length - 1];
              const finalSegment = finalToken.slice(
                finalToken.lastIndexOf(",") + 1
              );
              if (finalSegment[0] === "+" || finalSegment[0] === "-") {
                return plusMinusModifiers;
              }
              if (finalSegment.startsWith("no")) {
                return noModifiers;
              }
              return modifiers;
            },
          },
        },
        {
          name: "target",
          isVariadic: true,
          template: ["filepaths", "folders"],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion code",
      args: {
        name: "shell",
        suggestions: ["bash", "fish", "zsh", "powershell"],
      },
    },
    {
      name: "data",
      description: "Print the template data",
      options: [
        {
          name: ["--format", "-f"],
          description: "Format",
          isPersistent: true,
          requiresSeparator: true,
          args: {
            name: "format",
            default: "json",
            suggestions: ["json", "yaml"],
          },
        },
      ],
    },
    {
      name: "decrypt",
      description: "Decrypt file or standard input",
      args: {
        name: "file",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "diff",
      description:
        "Print the diff between the target state and the destination state",
      args: {
        name: "target",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: ["--exclude", "-x"],
          description: "Exclude entry types",
          requiresSeparator: true,
          args: { name: "exclude", default: "none", generators: types },
        },
        {
          name: ["--include", "-i"],
          description: "Include entry types",
          requiresSeparator: true,
          args: { name: "include", default: "all", generators: types },
        },
        { name: "--init", description: "Recreate config file from template" },
        {
          name: "--pager",
          description: "Set pager",
          requiresSeparator: true,
          args: { name: "pager" },
        },
        {
          name: ["--recursive", "-r"],
          description: "Recurse into subdirectories",
        },
        { name: "--reverse", description: "Reverse the direction of the diff" },
        { name: "--use-builtin-diff", description: "Use the builtin diff" },
      ],
    },
    { name: "doctor", description: "Check your system for potential problems" },
    {
      name: "dump",
      description: "Generate a dump of the target state",
      args: {
        name: "target",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["--exclude", "-x"],
          description: "Exclude entry types",
          requiresSeparator: true,
          args: { name: "exclude", default: "none", generators: types },
        },
        {
          name: ["--format", "-f"],
          description: "Set output format",
          requiresSeparator: true,
          args: { name: "format", default: "json" },
        },
        {
          name: ["--include", "-i"],
          description: "Include entry types",
          requiresSeparator: true,
          args: { name: "include", default: "all", generators: types },
        },
        { name: "--init", description: "Recreate config file from template" },
        {
          name: ["--recursive", "-r"],
          description: "Recurse into subdirectories",
        },
      ],
    },
    {
      name: "edit",
      description: "Edit the source state of a target",
      args: {
        name: "target",
        isVariadic: true,
        template: "filepaths",
      },
      options: [
        { name: ["--apply", "-a"], description: "Apply after editing" },
        {
          name: ["--exclude", "-x"],
          description: "Exclude entry types",
          requiresSeparator: true,
          args: { name: "exclude", default: "none", generators: types },
        },
        {
          name: "--hardlink",
          description: "Invoke editor with a hardlink to the source file",
        },
        {
          name: ["--include", "-i"],
          description: "Include entry types",
          requiresSeparator: true,
          args: {
            name: "include",
            default: "dirs,files,symlinks,encrypted",
            generators: types,
          },
        },
        { name: "--init", description: "Recreate config file from template" },
      ],
    },
    { name: "edit-config", description: "Edit the configuration file" },
    {
      name: "encrypt",
      description: "Encrypt file or standard input",
      args: {
        name: "target",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "execute-template",
      description: "Execute the given template(s)",
      args: {
        name: "template",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
      options: [
        { name: ["--init", "-i"], description: "Simulate chezmoi init" },
        {
          name: "--promptBool",
          description: "Simulate promptBool",
          requiresSeparator: true,
          args: { name: "promptBool" },
        },
        {
          name: "--promptInt",
          description: "Simulate promptInt",
          requiresSeparator: true,
          args: { name: "promptInt" },
        },
        {
          name: ["--promptString", "-p"],
          description: "Simulate promptString",
          requiresSeparator: true,
          args: { name: "promptString" },
        },
        { name: "--stdinisatty", description: "Simulate stdinIsATTY" },
      ],
    },
    {
      name: ["unmanage", "forget"],
      description: "Remove a target from the source state",
      args: {
        name: "target",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "generate",
      insertValue: "generate install.sh > install.sh",
      description: "Generate a file for use with chezmoi",
      args: {
        name: "file",
        suggestions: ["install.sh"],
      },
    },
    {
      name: "git",
      description: "Run git in the source directory",
      loadSpec: "git",
    },
    {
      name: "ignored",
      description: "Print ignored targets",
    },
    {
      name: "import",
      description: "Import an archive into the source state",
      args: {
        name: "archive",
        template: "filepaths",
      },
      options: [
        {
          name: "--exact",
          description: "Set exact_ attribute on imported directories",
        },
        {
          name: ["--exclude", "-x"],
          description: "Exclude entry types",
          requiresSeparator: true,
          args: { name: "exclude", default: "none", generators: types },
        },
        {
          name: ["--include", "-i"],
          description: "Include entry types",
          requiresSeparator: true,
          args: { name: "include", default: "all", generators: types },
        },
        {
          name: ["--remove-destination", "-r"],
          description: "Remove destination before import",
        },
        {
          name: "--strip-components",
          description: "Strip leading path components",
          requiresSeparator: true,
          args: { name: "strip-components", default: "0" },
        },
      ],
    },
    {
      name: "init",
      description:
        "Setup the source directory and update the destination directory to match the target state",
      args: {
        name: "source",
      },
      options: [
        {
          name: ["--apply", "-a"],
          description: "Update destination directory",
        },
        {
          name: "--branch",
          description: "Set initial branch to checkout",
          requiresSeparator: true,
          args: { name: "branch" },
        },
        {
          name: ["--config-path", "-C"],
          description: "Path to write generated config file",
          requiresSeparator: true,
          args: { name: "config-path" },
        },
        { name: "--data", description: "Include existing template data" },
        {
          name: ["--depth", "-d"],
          description: "Create a shallow clone",
          requiresSeparator: true,
          args: { name: "depth", default: "0" },
        },
        {
          name: ["--exclude", "-x"],
          description: "Exclude entry types",
          requiresSeparator: true,
          args: { name: "exclude", default: "none", generators: types },
        },
        { name: ["--guess-repo-url", "-g"], description: "Guess the repo URL" },
        { name: "--one-shot", description: "Run in one-shot mode" },
        {
          name: "--prompt",
          description: "Force prompt*Once template functions to prompt",
        },
        {
          name: ["--purge", "-p"],
          description: "Purge config and source directories after running",
        },
        {
          name: ["--purge-binary", "-P"],
          description: "Purge chezmoi binary after running",
        },
        {
          name: "--ssh",
          description:
            "Use ssh instead of https when guessing dotfile repo URL",
        },
      ],
    },
    { name: "license", description: "Print license" },
    {
      name: ["list", "managed"],
      description: "List the managed entries in the destination directory",
      options: [
        {
          name: ["--exclude", "-x"],
          description: "Exclude entry types",
          requiresSeparator: true,
          args: { name: "exclude", default: "none", generators: types },
        },
        {
          name: ["--include", "-i"],
          description: "Include entry types",
          requiresSeparator: true,
          args: {
            name: "include",
            default: "dirs,files,symlinks,encrypted",
            generators: types,
          },
        },
      ],
    },
    {
      name: "merge",
      description:
        "Perform a three-way merge between the destination state, the source state, and the target state",
      args: {
        name: "target",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "merge-all",
      description: "Perform a three-way merge for each modified file",
      options: [
        { name: "--init", description: "Recreate config file from template" },
        {
          name: ["--recursive", "-r"],
          description: "Recurse into subdirectories",
        },
      ],
    },
    {
      name: "purge",
      description: "Purge chezmoi's configuration and data",
      options: [
        { name: ["--binary", "-P"], description: "Purge chezmoi binary" },
      ],
    },
    {
      name: "re-add",
      description: "Re-add modified files",
      options: [
        {
          name: ["--exclude", "-x"],
          description: "Exclude entry types",
          requiresSeparator: true,
          args: { name: "exclude", default: "none", generators: types },
        },
        {
          name: ["--include", "-i"],
          description: "Include entry types",
          requiresSeparator: true,
          args: { name: "include", default: "all", generators: types },
        },
      ],
    },
    {
      name: ["rm", "remove"],
      description:
        "Remove a target from the source state and the destination directory",
      args: {
        name: "target",
        isVariadic: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["--recursive", "-r"],
          description: "Recurse into subdirectories",
        },
      ],
    },
    {
      name: "secret",
      description: "Interact with a secret manager",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "keyring",
          description: "Interact with keyring",
          requiresSubcommand: true,
          subcommands: [
            {
              name: "delete",
              description: "Delete a value from keyring",
              options: [
                {
                  name: "--service",
                  description: "Service",
                  isPersistent: true,
                  requiresSeparator: true,
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--user",
                  description: "User",
                  isPersistent: true,
                  requiresSeparator: true,
                  args: { name: "user" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "get",
              description: "Get a value from keyring",
              options: [
                {
                  name: "--service",
                  description: "Service",
                  isPersistent: true,
                  requiresSeparator: true,
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--user",
                  description: "User",
                  isPersistent: true,
                  requiresSeparator: true,
                  args: { name: "user" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "set",
              description: "Set a value in keyring",
              options: [
                {
                  name: "--service",
                  description: "Service",
                  isPersistent: true,
                  requiresSeparator: true,
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--user",
                  description: "User",
                  isPersistent: true,
                  requiresSeparator: true,
                  args: { name: "user" },
                  isRequired: true,
                },
                {
                  name: "--value",
                  description: "Value",
                  isPersistent: true,
                  requiresSeparator: true,
                  args: { name: "value" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "source-path",
      description: "Print the source path of a target",
      args: {
        name: "target",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "state",
      description: "Manipulate the persistent state",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "data",
          description: "Print the raw data in the persistent state",
          options: [
            {
              name: ["--format", "-f"],
              description: "Format",
              isPersistent: true,
              requiresSeparator: true,
              args: { name: "format", default: "json" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a value from the persistent state",
          options: [
            {
              name: "--bucket",
              description: "Bucket",
              isPersistent: true,
              requiresSeparator: true,
              args: { name: "bucket" },
            },
            {
              name: "--key",
              description: "Key",
              isPersistent: true,
              requiresSeparator: true,
              args: { name: "key" },
            },
          ],
        },
        {
          name: "delete-bucket",
          description: "Delete a bucket from the persistent state",
          options: [
            {
              name: "--bucket",
              description: "Bucket",
              isPersistent: true,
              requiresSeparator: true,
              args: { name: "bucket" },
            },
          ],
        },
        {
          name: "dump",
          description: "Generate a dump of the persistent state",
          options: [
            {
              name: ["--format", "-f"],
              description: "Format",
              isPersistent: true,
              requiresSeparator: true,
              args: { name: "format", default: "json" },
            },
          ],
        },
        {
          name: "get",
          description: "Get a value from the persistent state",
          options: [
            {
              name: "--bucket",
              description: "Bucket",
              isPersistent: true,
              requiresSeparator: true,
              args: { name: "bucket" },
            },
            {
              name: "--key",
              description: "Key",
              isPersistent: true,
              requiresSeparator: true,
              args: { name: "key" },
            },
          ],
        },
        {
          name: "get-bucket",
          description: "Get a bucket from the persistent state",
          options: [
            {
              name: "--bucket",
              description: "Bucket",
              isPersistent: true,
              requiresSeparator: true,
              args: { name: "bucket" },
            },
            {
              name: ["--format", "-f"],
              description: "Format",
              isPersistent: true,
              requiresSeparator: true,
              args: { name: "format", default: "json" },
            },
          ],
        },
        { name: "reset", description: "Reset the persistent state" },
        {
          name: "set",
          description: "Set a value from the persistent state",
          options: [
            {
              name: "--bucket",
              description: "Bucket",
              isPersistent: true,
              requiresSeparator: true,
              args: { name: "bucket" },
            },
            {
              name: "--key",
              description: "Key",
              isPersistent: true,
              requiresSeparator: true,
              args: { name: "key" },
            },
            {
              name: "--value",
              description: "Value",
              isPersistent: true,
              requiresSeparator: true,
              args: { name: "value" },
            },
          ],
        },
      ],
    },
    {
      name: "status",
      description: "Show the status of targets",
      args: {
        name: "target",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["--exclude", "-x"],
          description: "Exclude entry types",
          requiresSeparator: true,
          args: { name: "exclude", default: "none", generators: types },
        },
        {
          name: ["--include", "-i"],
          description: "Include entry types",
          requiresSeparator: true,
          args: { name: "include", default: "all", generators: types },
        },
        { name: "--init", description: "Recreate config file from template" },
        {
          name: ["--recursive", "-r"],
          description: "Recurse into subdirectories",
        },
      ],
    },
    {
      name: "target-path",
      description: "Print the target path of a source path",
      args: {
        name: "source",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "unmanaged",
      description: "List the unmanaged files in the destination directory",
      args: {
        name: "paths",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "update",
      description: "Pull and apply any changes",
      options: [
        { name: ["--apply", "-a"], description: "Apply after pulling" },
        {
          name: ["--exclude", "-x"],
          description: "Exclude entry types",
          requiresSeparator: true,
          args: { name: "exclude", default: "none", generators: types },
        },
        {
          name: ["--include", "-i"],
          description: "Include entry types",
          requiresSeparator: true,
          args: { name: "include", default: "all", generators: types },
        },
        { name: "--init", description: "Recreate config file from template" },
        {
          name: ["--recursive", "-r"],
          description: "Recurse into subdirectories",
        },
      ],
    },
    {
      name: "upgrade",
      description: "Upgrade chezmoi to the latest released version",
      options: [
        {
          name: "--executable",
          description: "Set executable to replace",
          requiresSeparator: true,
          args: { name: "executable" },
        },
        {
          name: "--method",
          description: "Set upgrade method",
          requiresSeparator: true,
          args: { name: "method" },
        },
        {
          name: "--owner",
          description: "Set owner",
          requiresSeparator: true,
          args: { name: "owner", default: "twpayne" },
        },
        {
          name: "--repo",
          description: "Set repo",
          requiresSeparator: true,
          args: { name: "repo", default: "chezmoi" },
        },
      ],
    },
    {
      name: "verify",
      description:
        "Exit with success if the destination state matches the target state, fail otherwise",
      args: {
        name: "target",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["--exclude", "-x"],
          description: "Exclude entry types",
          requiresSeparator: true,
          args: { name: "exclude", default: "none", generators: types },
        },
        {
          name: ["--include", "-i"],
          description: "Include entry types",
          requiresSeparator: true,
          args: {
            name: "include",
            default: "dirs,files,remove,symlinks,encrypted,externals",
            generators: types,
          },
        },
        { name: "--init", description: "Recreate config file from template" },
        {
          name: ["--recursive", "-r"],
          description: "Recurse into subdirectories",
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: ["manage", "add"],
          description:
            "Add an existing file, directory, or symlink to the source state",
        },
        {
          name: "apply",
          description:
            "Update the destination directory to match the target state",
        },
        {
          name: "archive",
          description: "Generate a tar archive of the target state",
        },
        {
          name: "cat",
          description:
            "Print the target contents of a file, script, or symlink",
        },
        { name: "cd", description: "Launch a shell in the source directory" },
        {
          name: "chattr",
          description: "Change the attributes of a target in the source state",
        },
        { name: "completion", description: "Generate shell completion code" },
        { name: "data", description: "Print the template data" },
        { name: "decrypt", description: "Decrypt file or standard input" },
        {
          name: "diff",
          description:
            "Print the diff between the target state and the destination state",
        },
        {
          name: "doctor",
          description: "Check your system for potential problems",
        },
        { name: "dump", description: "Generate a dump of the target state" },
        { name: "edit", description: "Edit the source state of a target" },
        { name: "edit-config", description: "Edit the configuration file" },
        { name: "encrypt", description: "Encrypt file or standard input" },
        {
          name: "execute-template",
          description: "Execute the given template(s)",
        },
        {
          name: ["unmanage", "forget"],
          description: "Remove a target from the source state",
        },
        {
          name: "generate",
          description: "Generate a file for use with chezmoi",
        },
        { name: "git", description: "Run git in the source directory" },
        { name: "ignored", description: "Print ignored targets" },
        {
          name: "import",
          description: "Import an archive into the source state",
        },
        {
          name: "init",
          description:
            "Setup the source directory and update the destination directory to match the target state",
        },
        { name: "license", description: "Print license" },
        {
          name: ["list", "managed"],
          description: "List the managed entries in the destination directory",
        },
        {
          name: "merge",
          description:
            "Perform a three-way merge between the destination state, the source state, and the target state",
        },
        {
          name: "merge-all",
          description: "Perform a three-way merge for each modified file",
        },
        {
          name: "purge",
          description: "Purge chezmoi's configuration and data",
        },
        { name: "re-add", description: "Re-add modified files" },
        {
          name: ["rm", "remove"],
          description:
            "Remove a target from the source state and the destination directory",
        },
        {
          name: "secret",
          description: "Interact with a secret manager",
          subcommands: [
            {
              name: "keyring",
              description: "Interact with keyring",
              subcommands: [
                { name: "delete", description: "Delete a value from keyring" },
                { name: "get", description: "Get a value from keyring" },
                { name: "set", description: "Set a value in keyring" },
              ],
            },
          ],
        },
        {
          name: "source-path",
          description: "Print the source path of a target",
        },
        {
          name: "state",
          description: "Manipulate the persistent state",
          subcommands: [
            {
              name: "data",
              description: "Print the raw data in the persistent state",
            },
            {
              name: "delete",
              description: "Delete a value from the persistent state",
            },
            {
              name: "delete-bucket",
              description: "Delete a bucket from the persistent state",
            },
            {
              name: "dump",
              description: "Generate a dump of the persistent state",
            },
            {
              name: "get",
              description: "Get a value from the persistent state",
            },
            {
              name: "get-bucket",
              description: "Get a bucket from the persistent state",
            },
            { name: "reset", description: "Reset the persistent state" },
            {
              name: "set",
              description: "Set a value from the persistent state",
            },
          ],
        },
        { name: "status", description: "Show the status of targets" },
        {
          name: "target-path",
          description: "Print the target path of a source path",
        },
        {
          name: "unmanaged",
          description: "List the unmanaged files in the destination directory",
        },
        { name: "update", description: "Pull and apply any changes" },
        {
          name: "upgrade",
          description: "Upgrade chezmoi to the latest released version",
        },
        {
          name: "verify",
          description:
            "Exit with success if the destination state matches the target state, fail otherwise",
        },
      ],
    },
  ],
  options: [
    {
      name: "--cache",
      description: "Set cache directory",
      isPersistent: true,
      requiresSeparator: true,
      args: { name: "cache", default: "~/.cache/chezmoi" },
    },
    {
      name: "--color",
      description: "Colorize output",
      isPersistent: true,
      requiresSeparator: true,
      args: {
        name: "color",
        default: "auto",
        suggestions: ["true", "false", "auto"],
      },
    },
    {
      name: ["--config", "-c"],
      description: "Set config file",
      isPersistent: true,
      requiresSeparator: true,
      args: {
        name: "config",
        default: "~/.config/chezmoi/chezmoi.toml",
        template: ["filepaths"],
      },
    },
    {
      name: "--config-format",
      description: "Set config file format",
      isPersistent: true,
      requiresSeparator: true,
      args: { name: "config-format", suggestions: ["json", "toml", "yaml"] },
    },
    {
      name: "--cpu-profile",
      description: "Write a CPU profile to path",
      isPersistent: true,
      hidden: true,
      requiresSeparator: true,
      args: { name: "cpu-profile", template: ["filepaths"] },
    },
    {
      name: "--debug",
      description: "Include debug information in output",
      isPersistent: true,
    },
    {
      name: ["--destination", "-D"],
      description: "Set destination directory",
      isPersistent: true,
      requiresSeparator: true,
      args: {
        name: "destination",
        default: "~",
        template: ["folders"],
      },
    },
    {
      name: ["--dry-run", "-n"],
      description: "Do not make any modifications to the destination directory",
      isPersistent: true,
    },
    {
      name: "--force",
      description: "Make all changes without prompting",
      isPersistent: true,
    },
    {
      name: "--gops",
      description: "Enable gops agent",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--interactive",
      description: "Prompt for all changes",
      isPersistent: true,
    },
    {
      name: ["--keep-going", "-k"],
      description: "Keep going as far as possible after an error",
      isPersistent: true,
    },
    {
      name: "--mode",
      description: "Mode",
      isPersistent: true,
      requiresSeparator: true,
      args: { name: "mode", suggestions: ["file", "symlink"] },
    },
    {
      name: "--no-pager",
      description: "Do not use the pager",
      isPersistent: true,
    },
    {
      name: "--no-tty",
      description: "Do not attempt to get a TTY for reading passwords",
      isPersistent: true,
    },
    {
      name: ["--output", "-o"],
      description: "Write output to path instead of stdout",
      isPersistent: true,
      requiresSeparator: true,
      args: { name: "output", template: ["filepaths"] },
    },
    {
      name: "--persistent-state",
      description: "Set persistent state file",
      isPersistent: true,
      requiresSeparator: true,
      args: { name: "persistent-state" },
    },
    {
      name: ["--refresh-externals", "-R"],
      description: "Refresh external cache",
      isPersistent: true,
    },
    {
      name: "--safe",
      description: "Safely replace files and symlinks",
      isPersistent: true,
      hidden: true,
    },
    {
      name: ["--source", "-S"],
      description: "Set source directory",
      isPersistent: true,
      requiresSeparator: true,
      args: {
        name: "source",
        default: "~/.local/share/chezmoi",
        template: ["folders"],
      },
    },
    {
      name: "--source-path",
      description: "Specify targets by source path",
      isPersistent: true,
    },
    {
      name: "--use-builtin-age",
      description: "Use builtin age",
      isPersistent: true,
      requiresSeparator: true,
      args: {
        name: "use-builtin-age",
        default: "auto",
        suggestions: ["true", "false", "auto"],
      },
    },
    {
      name: "--use-builtin-git",
      description: "Use builtin git",
      isPersistent: true,
      requiresSeparator: true,
      args: {
        name: "use-builtin-git",
        default: "auto",
        suggestions: ["true", "false", "auto"],
      },
    },
    {
      name: ["--verbose", "-v"],
      description: "Make output more verbose",
      isPersistent: true,
    },
    {
      name: ["--working-tree", "-W"],
      description: "Set working tree directory",
      isPersistent: true,
      requiresSeparator: true,
      args: { name: "working-tree", template: "folders" },
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
