const completionSpec: Fig.Spec = {
  name: "charm",
  description:
    "Do Charm stuff; run without arguments for a TUI or use the sub-commands like a pro",
  subcommands: [
    {
      name: "backup-keys",
      description: "Backup your Charm account keys",
    },
    {
      name: "completion",
      description: "Generate shell completion",
    },
    {
      name: "crypt",
      description: "Use charm encryption",
      subcommands: [
        {
          name: "decrypt",
          description: "Decrypt stdin with your Charm account encryption key",
        },
        {
          name: "decrypt-lookup",
          description: "Decrypt arg deterministically",
        },
        {
          name: "encrypt",
          description: "Encrypt stdin with your Charm account encryption key",
        },
        {
          name: "encrypt-lookup",
          description: "Encrypt arg deterministically",
        },
      ],
    },
    {
      name: "fs",
      description: "Use the Charm file systems",
      subcommands: [
        {
          name: "cat",
          description: "Output the content of the file at path",
          args: {
            name: "[charm:]PATH",
          },
        },
        {
          name: "cp",
          description:
            'Copy a file, preface source or destination with "charm:" to specify a remote path',
          args: [
            {
              name: "[charm:]PATH",
            },
            {
              name: "[charm:]PATH",
            },
          ],
          options: [
            {
              name: ["--recursive", "-r"],
              description: "Copy directories recursively",
            },
          ],
        },
        {
          name: "ls",
          description: "List file or directory at path",
          args: {
            name: "[charm:]PATH",
          },
        },
        {
          name: "mv",
          description:
            'Move a file, preface source or destination with "charm" to specify a remote  path',
          args: [
            {
              name: "[charm:]PATH",
            },
            {
              name: "[charm:]PATH",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove file or directory at path",
          args: {
            name: "[charm:]PATH",
          },
        },
        {
          name: "tree",
          description: "Print a file system tree from path",
          args: {
            name: "[charm:]PATH",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "id",
      description: "Print your Charm ID",
    },
    {
      name: "import-keys",
      description: "Import previously backed up Charm account keys",
      args: {
        name: "BACKUP.tar",
        suggestions: ["BACKUP.tar"],
        template: "filepaths",
      },
      options: [
        {
          name: ["--force-overwrite", "-f"],
          description: "Overwrite if keys exist; don't prompt for input",
        },
      ],
    },
    {
      name: "jwt",
      description: "Print a JWT",
    },
    {
      name: "keys",
      description: "Browse or print linked SSH keys",
      options: [
        {
          name: ["--randomart", "-r"],
          description:
            "Print SSH 5.1 randomart for each key (the Drunken Bishop algorithm)",
        },
        {
          name: ["--simple", "-s"],
          description: "Simple, non-interactive output (good for scripts)",
        },
      ],
    },
    {
      name: "kv",
      description: "Use the Charm key value store",
      subcommands: [
        {
          name: "delete",
          description: "Delete a key with an optional @ db",
          args: {
            name: "KEY[@DB]",
          },
        },
        {
          name: "get",
          description: "Get a value for a key with an optional @ db",
          args: {
            name: "KEY[@DB]",
          },
        },
        {
          name: "list",
          description: "List all key value pairs with an optional @ db",
          args: {
            name: "KEY[@DB]",
            isOptional: true,
          },
        },
        {
          name: "reset",
          description:
            "Delete local db and pull down fresh copy from Charm Cloud",
          args: {
            name: "KEY[@DB]",
            isOptional: true,
          },
        },
        {
          name: "set",
          description: "Set a value for a key with an optional @ db",
          args: [
            {
              name: "KEY[@DB]",
            },
            {
              name: "VALUE",
            },
          ],
        },
        {
          name: "sync",
          description: "Sync local db with latest Charm Cloud db",
          args: {
            name: "KEY[@DB]",
          },
        },
      ],
    },
    {
      name: "link",
      description: "Link multiple machines to your Charm account",
      args: {
        name: "code",
        isOptional: true,
      },
    },
    {
      name: "name",
      description: "Username stuff",
      args: {
        name: "username",
        isOptional: true,
      },
    },
    {
      name: "serve",
      description: "Start a self-hosted Charm Cloud server",
      options: [
        {
          name: "--data-dir",
          description: "Directory to store SQLite db, SSH keys and file data",
          args: {
            name: "DATA_DIR",
            template: ["folders"],
          },
        },
        {
          name: "--health-port",
          description: "Health port to listen on",
          args: {
            name: "HEALTH_PORT",
            suggestions: ["35356"],
          },
        },
        {
          name: "--http-port",
          description: "HTTP port to listen on",
          args: {
            name: "HTTP_PORT",
            suggestions: ["35354"],
          },
        },
        {
          name: "--ssh-port",
          description: "SSH port to listen on",
          args: {
            name: "SSH_PORT",
            suggestions: ["35353"],
          },
        },
        {
          name: "--stats-port",
          description: "Stats port to listen on",
          args: {
            name: "STATS_PORT",
            suggestions: ["35355"],
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Help for charm",
    },
    {
      name: ["--version", "-v"],
      description: "Version for charm",
    },
  ],
};
export default completionSpec;
