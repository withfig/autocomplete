const completionSpec: Fig.Spec = {
  name: "atuin",
  description: "Magical shell history",
  subcommands: [
    {
      name: "history",
      description: "Manipulate shell history",
      subcommands: [
        {
          name: "start",
          description: "Begins a new command in the history",
          args: {
            name: "COMMAND",
            isVariadic: true,
          },
        },
        {
          name: "end",
          description:
            "Finishes a new command in the history (adds time, exit code)",
          args: {
            name: "ID",
          },
          options: [
            {
              name: ["--exit", "-e"],
              args: {
                name: "EXIT",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List all items in history",
          options: [
            {
              name: ["--cwd", "-c"],
            },
            {
              name: ["--session", "-s"],
            },
            {
              name: "--human",
            },
            {
              name: "--cmd-only",
              description: "Show only the text of the command",
            },
            {
              name: ["--format", "-f"],
              args: {
                name: "FORMAT",
                description:
                  'Available variables: {command}, {directory}, {duration}, {user}, {host} and {time}. Example: --format "{time} - [{duration}] - {directory}$\\t{command}"',
              },
            },
          ],
        },
        {
          name: "last",
          description: "Get the last command ran",
          options: [
            {
              name: "--human",
            },
            {
              name: "--cmd-only",
              description: "Show only the text of the command",
            },
            {
              name: ["--format", "-f"],
              args: {
                name: "FORMAT",
                description:
                  'Available variables: {command}, {directory}, {duration}, {user}, {host} and {time}. Example: --format "{time} - [{duration}] - {directory}$\\t{command}"',
              },
            },
          ],
        },
      ],
    },
    {
      name: "import",
      description: "Import shell history from file",
      subcommands: [
        {
          name: "auto",
          description: "Import history for the current shell",
        },
        ...[
          "zsh",
          "zsh-hist-db",
          "bash",
          "resh",
          "fish",
          "nu",
          "nu-hist-db",
        ].map((shell) => {
          const prettyShellName = shell.replace(/-hist-db/, "");
          return {
            name: shell,
            description: `Import history from the ${prettyShellName} history file`,
          };
        }),
      ],
    },
    {
      name: "stats",
      description: "Calculate statistics for your history",
      args: {
        name: "PERIOD",
        description:
          "Compute statistics for the specified period, leave blank for statistics since the beginning",
        isVariadic: true,
      },
      options: [
        {
          name: ["--count", "-c"],
          description: "How many top commands to list",
          args: {
            name: "COUNT",
          },
        },
      ],
    },
    {
      name: "search",
      description: "Interactive history search",
      args: {
        name: "QUERY",
        isVariadic: true,
      },
      options: [
        {
          name: ["--cwd", "-c"],
          description: "Filter search result by directory",
          args: {
            name: "CWD",
          },
        },
        {
          name: "--exclude-cwd",
          description: "Exclude directory from results",
          args: {
            name: "EXCLUDE_CWD",
          },
        },
        {
          name: ["--exit", "-e"],
          description: "Filter search result by exit code",
          args: {
            name: "EXIT",
          },
        },
        {
          name: "--exclude-exit",
          description: "Exclude results with this exit code",
          args: {
            name: "EXCLUDE_EXIT",
          },
        },
        {
          name: ["--before", "-b"],
          description: "Only include results added before this date",
          args: {
            name: "BEFORE",
          },
        },
        {
          name: "--after",
          description: "Only include results after this date",
          args: {
            name: "AFTER",
          },
        },
        {
          name: "--limit",
          description: "How many entries to return at most",
          args: {
            name: "LIMIT",
          },
        },
        {
          name: "--offset",
          description: "Offset from the start of the results",
          args: {
            name: "OFFSET",
          },
        },
        {
          name: ["--interactive", "-i"],
          description: "Open interactive search UI",
        },
        {
          name: "--filter-mode",
          description: "Allow overriding filter mode over config",
          args: {
            name: "FILTER_MODE",
            suggestions: [
              "global",
              "host",
              "session",
              "directory",
              "workspace",
            ],
          },
        },
        {
          name: "--search-mode",
          description: "Allow overriding search mode over config",
          args: {
            name: "SEARCH_MODE",
            suggestions: ["prefix", "full-text", "fuzzy", "skim"],
          },
        },
        {
          name: "--human",
          description: "Use human-readable formatting for time",
        },
        {
          name: "--cmd-only",
          description: "Show only the text of the command",
        },
        {
          name: "--delete",
          description:
            "Delete anything matching this query. Will not print out the match",
        },
        {
          name: "--delete-it-all",
          description: "Delete EVERYTHING!",
        },
        {
          name: ["--reverse", "-r"],
          description: "Reverse the order of results, oldest first",
        },
        {
          name: ["--format", "-f"],
          args: {
            name: "FORMAT",
            description:
              'Available variables: {command}, {directory}, {duration}, {user}, {host} and {time}. Example: --format "{time} - [{duration}] - {directory}$\\t{command}"',
          },
        },
        {
          name: "--inline-height",
          description:
            "Set the maximum number of lines Atuin's interface should take up",
          args: {
            name: "INLINE_HEIGHT",
          },
        },
      ],
    },
    {
      name: "sync",
      description: "Sync with the configured server",
      options: [
        {
          name: ["--force", "-f"],
          description: "Force re-download everything",
        },
      ],
    },
    {
      name: "login",
      description: "Login to the configured server",
      options: [
        {
          name: ["--username", "-u"],
          args: {
            name: "USERNAME",
          },
        },
        {
          name: ["--password", "-p"],
          args: {
            name: "PASSWORD",
          },
        },
        {
          name: ["--key", "-k"],
          description: "The encryption key for your account",
          args: {
            name: "KEY",
          },
        },
      ],
    },
    {
      name: "logout",
      description: "Log out",
    },
    {
      name: "register",
      description: "Register with the configured server",
      options: [
        {
          name: ["--username", "-u"],
          args: {
            name: "USERNAME",
          },
        },
        {
          name: ["--password", "-p"],
          args: {
            name: "PASSWORD",
          },
        },
        {
          name: ["--email", "-e"],
          args: {
            name: "EMAIL",
          },
        },
      ],
    },
    {
      name: "key",
      description: "Print the encryption key for transfer to another machine",
      options: [
        {
          name: "--base64",
          description: "Switch to base64 output of the key",
        },
      ],
    },
    {
      name: "status",
    },
    {
      name: "account",
      subcommands: [
        {
          name: "login",
          description: "Login to the configured server",
          options: [
            {
              name: ["--username", "-u"],
              args: {
                name: "USERNAME",
              },
            },
            {
              name: ["--password", "-p"],
              args: {
                name: "PASSWORD",
              },
            },
            {
              name: ["--key", "-k"],
              description: "The encryption key for your account",
              args: {
                name: "KEY",
              },
            },
          ],
        },
        {
          name: "register",
          options: [
            {
              name: ["--username", "-u"],
              args: {
                name: "USERNAME",
              },
            },
            {
              name: ["--password", "-p"],
              args: {
                name: "PASSWORD",
              },
            },
            {
              name: ["--email", "-e"],
              args: {
                name: "EMAIL",
              },
            },
          ],
        },
        {
          name: "logout",
          description: "Log out",
        },
        {
          name: "delete",
        },
      ],
    },
    {
      name: "kv",
      subcommands: [
        {
          name: "set",
          args: {
            name: "VALUE",
          },
          options: [
            {
              name: ["--key", "-k"],
              isRequired: true,
              args: {
                name: "KEY",
              },
            },
            {
              name: ["--namespace", "-n"],
              args: {
                name: "NAMESPACE",
              },
            },
          ],
        },
        {
          name: "get",
          args: {
            name: "KEY",
          },
          options: [
            {
              name: ["--namespace", "-n"],
              args: {
                name: "NAMESPACE",
              },
            },
          ],
        },
      ],
    },
    {
      name: "server",
      description: "Start an atuin server",
      subcommands: [
        {
          name: "start",
          description: "Start the server",
          options: [
            {
              name: "--host",
              description: "The host address to bind",
              args: {
                name: "HOST",
              },
            },
            {
              name: ["--port", "-p"],
              description: "The port to bind",
              args: {
                name: "PORT",
              },
            },
          ],
        },
      ],
    },
    {
      name: "init",
      description: "Output shell setup",
      args: {
        name: "SHELL",
        suggestions: ["zsh", "bash", "fish", "nu"],
      },
      options: [
        {
          name: "--disable-ctrl-r",
          description: "Disable the binding of CTRL-R to atuin",
        },
        {
          name: "--disable-up-arrow",
          description: "Disable the binding of the Up Arrow key to atuin",
        },
      ],
    },
    {
      name: "uuid",
      description: "Generate a UUID",
    },
    {
      name: "contributors",
    },
    {
      name: "gen-completions",
      description: "Generate shell completions",
      options: [
        {
          name: ["--shell", "-s"],
          description: "Set the shell for generating completions",
          isRequired: true,
          args: {
            name: "SHELL",
            suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
          },
        },
        {
          name: ["--out-dir", "-o"],
          description: "Set the output directory",
          args: {
            name: "OUT_DIR",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help",
      isPersistent: true,
    },
    {
      name: ["--version", "-V"],
      description: "Print version",
    },
  ],
  // Only uncomment if atuin takes an argument
  // args: {}
};
export default completionSpec;
