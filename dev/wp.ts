// To learn more about Fig"s autocomplete standard visit: https://fig.io/docs/autocomplete/building-a-spec#building-your-first-autocomplete-spec
const global_options = [
  {
    name: ["--path="],
    description: "Path to the WordPress files.",
    args: {
      name: "path",
    },
  },
  {
    name: ["--url="],
    description:
      "Pretend request came from given URL. In multisite, this argument is how the target site is specified.",
    args: {
      name: "url",
    },
  },
  {
    name: ["--ssh="],
    description:
      "Perform operation against a remote server over SSH (or a container using scheme of “docker”, “docker-compose”, “vagrant”).",
    args: [
      {
        name: "scheme:",
      },
      {
        name: "user@",
      },
      {
        name: "host|container",
      },
      {
        name: ":port",
      },
      {
        name: "path",
      },
    ],
  },
  {
    name: ["--http="],
    description:
      "Perform operation against a remote WordPress installation over HTTP.",
    args: {
      name: "http",
    },
  },
  {
    name: ["--user="],
    description: "Set the WordPress user.",
    args: [
      {
        name: "id",
      },
      {
        name: "login",
      },
      {
        name: "email",
      },
    ],
  },
  {
    name: ["--skip-plugins[=]"],
    description:
      "Skip loading all plugins, or a comma-separated list of plugins. Note: mu-plugins are still loaded.",
    args: {
      name: "plugins",
    },
  },
  {
    name: ["--skip-themes[=]"],
    description:
      "Skip loading all themes, or a comma-separated list of themes.",
    args: {
      name: "themes",
    },
  },
  {
    name: ["--skip-packages"],
    description: "Skip loading all installed packages.",
  },
  {
    name: ["--require="],
    description:
      "Load PHP file before running the command (may be used more than once).",
    args: {
      name: "path",
    },
  },
  {
    name: ["--exec="],
    description:
      "Execute PHP code before running the command (may be used more than once).",
    args: {
      name: "php-code",
    },
  },
  {
    name: ["--[no-]color"],
    description: "Whether to colorize the output.",
  },
  {
    name: ["--debug[=]"],
    description:
      "Show all PHP errors and add verbosity to WP-CLI output. Built-in groups include: bootstrap, commandfactory, and help.",
    args: {
      name: "group",
    },
  },
  {
    name: ["--prompt[=]"],
    description:
      "Prompt the user to enter values for all command arguments, or a subset specified as comma-separated values.",
    args: {
      name: "assoc",
    },
  },
  {
    name: ["--quiet"],
    description: "Suppress informational messages.",
  },
];

// The below is a dummy example for git. Make sure to change the file name!
export const completion: Fig.Spec = {
  name: "wp",
  description: "The stupid content tracker",
  // options: global_options,
  subcommands: [
    {
      name: "admin",
      description: "Open /wp-admin/ in a browser.",

      // If a subcommand or option takes an argument, you must include the args prop, even if it"s an empty object (like below)
      // If you want to build custom suggestions for arguments check out: https://fig.io/docs/autocomplete/building-a-spec#making-advanced-suggestions
      args: [{}],
      options: global_options,
    },
    {
      name: "cache",
      description:
        "Adds, removes, fetches, and flushes the WP Object Cache object.",
      subcommands: [
        {
          name: "add",
          description: "Adds a value to the object cache.",
          args: {
            variadic: true,
            suggestions: [
              {
                name: "key",
                insertValue: "my_key",
                description: "Cache key.",
              },
              {
                name: "value",
                insertValue: "my_value",
                description: "Value to add to the key.",
              },
              {
                name: "[group]",
                insertValue: "my_group",
                description:
                  "Method for grouping data within the cache which allows the same key to be used across groups.",
              },
              {
                name: "[expiration]",
                insertValue: "300",
                description:
                  "Define how long to keep the value, in seconds. 0 means as long as possible.",
              },
            ],
          },
        },
        {
          name: "decr",
          description: "Decrements a value in the object cache.",
          args: {
            suggestions: [
              {
                name: "key",
                insertValue: "key",
                description: "Cache key.",
              },
              {
                name: "offset",
                insertValue: "offset",
                description:
                  "The amount by which to decrement the item’s value.",
              },
              {
                name: "group",
                insertValue: "[group]",
                description:
                  "Method for grouping data within the cache which allows the same key to be used across groups.",
              },
            ],
          },
        },
        {
          name: "delete",
          description: "Removes a value from the object cache.",
          args: {
            suggestions: [
              {
                name: "key",
                insertValue: "key",
                description: "Cache key.",
              },

              {
                name: "group",
                insertValue: "[group]",
                description:
                  "Method for grouping data within the cache which allows the same key to be used across groups.",
              },
            ],
          },
        },
        {
          name: "flush",
          description: "Flushes the object cache.",
        },
        {
          name: "get",
          description: "Gets a value from the object cache.",
          args: {
            suggestions: [
              {
                name: "key",
                insertValue: "key",
                description: "Cache key.",
              },

              {
                name: "group",
                insertValue: "[group]",
                description:
                  "Method for grouping data within the cache which allows the same key to be used across groups.",
              },
            ],
          },
        },
        {
          name: "incr",
          description: "Increments a value in the object cache.",
          args: {
            suggestions: [
              {
                name: "key",
                insertValue: "key",
                description: "Cache key.",
              },
              {
                name: "offset",
                insertValue: "offset",
                description:
                  "The amount by which to decrement the item’s value.",
              },
              {
                name: "group",
                insertValue: "[group]",
                description:
                  "Method for grouping data within the cache which allows the same key to be used across groups.",
              },
            ],
          },
        },
        {
          name: "replace",
          description:
            "Replaces a value in the object cache, if the value already exists.",
          args: {
            suggestions: [
              {
                name: "key",
                insertValue: "key",
                description: "Cache key.",
              },
              {
                name: "value",
                insertValue: "value",
                description: "Value to add to the key.",
              },
              {
                name: "group",
                insertValue: "[group]",
                description:
                  "Method for grouping data within the cache which allows the same key to be used across groups.",
              },
              {
                name: "expiration",
                insertValue: "[expiration]",
                description:
                  "Define how long to keep the value, in seconds. 0 means as long as possible.",
              },
            ],
          },
        },
        {
          name: "set",
          description:
            "Sets a value to the object cache, regardless of whether it already exists.",
          args: {
            suggestions: [
              {
                name: "key",
                insertValue: "key",
                description: "Cache key.",
              },
              {
                name: "value",
                insertValue: "value",
                description: "Value to add to the key.",
              },
              {
                name: "group",
                insertValue: "[group]",
                description:
                  "Method for grouping data within the cache which allows the same key to be used across groups.",
              },
              {
                name: "expiration",
                insertValue: "[expiration]",
                description:
                  "Define how long to keep the value, in seconds. 0 means as long as possible.",
              },
            ],
          },
        },
        {
          name: "type",
          description:
            "Attempts to determine which object cache is being used.",
        },
      ],

      // If a subcommand or option takes an argument, you must include the args prop, even if it"s an empty object (like below)
      // If you want to build custom suggestions for arguments check out: https://fig.io/docs/autocomplete/building-a-spec#making-advanced-suggestions
      args: [{}],
      options: global_options,
    },
    {
      name: "cap",
      description: "Adds, removes, and lists capabilities of a user role.",
      subcommands: [
        {
          name: "add",
          description: "Adds a value to the object cache.",
          options: [
            {
              name: "--grant",
              description:
                "Adds the capability as an explicit boolean value, instead of implicitly defaulting to true.",
            },
          ],
          args: {
            variadic: true,
            suggestions: [
              {
                name: "role",
                insertValue: "'editor'",
                description: "Key for the role.",
              },
              {
                name: "cap",
                insertValue: "'spectate'",
                description: "One or more capabilities to add.",
              },
            ],
          },
        },
      ],
    },
    {
      name: "cli",
      description:
        "Reviews current WP-CLI info, checks for updates, or views defined aliases.",
      subcommands: [
        {
          name: "alias",
          description:
            "Retrieves, sets and updates aliases for WordPress Installations.",
          subcommands: [
            {
              name: "add",
              description: "Creates an alias.",
              args: [
                {
                  name: "key",
                  description: "Key for the alias.",
                },
              ],
              options: [
                {
                  name: "--set-user",
                  insertValue: "--set-user=",
                  description: "Set user for alias.",
                },
                {
                  name: "--set-url",
                  insertValue: "--set-url=",
                  description: "Set url for alias.",
                },
                {
                  name: "--set-path",
                  insertValue: "--set-path=",
                  description: "Set path for alias.",
                },
                {
                  name: "--set-ssh",
                  insertValue: "--set-ssh=",
                  description: "Set ssh for alias.",
                },
                {
                  name: "--set-http",
                  insertValue: "--set-http=",
                  description: "Set http for alias.",
                },
                {
                  name: "--grouping",
                  insertValue: "--grouping=",
                  description: "For grouping multiple aliases.",
                },
                {
                  name: "--config",
                  insertValue: "--config=global|project",
                  description: "Config file to be considered for operations.",
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes an alias.",
              args: [
                {
                  name: "key",
                  description: "Key for the alias.",
                },
              ],
              options: [
                {
                  name: "--config",
                  insertValue: "--config=global|project",
                  description: "Config file to be considered for operations.",
                },
              ],
            },
            {
              name: "get",
              description: "Gets the value for an alias.",
              args: [
                {
                  name: "key",
                  description: "Key for the alias.",
                },
              ],
            },
            {
              name: "list",
              description: "Lists available WP-CLI aliases.",
              options: [
                {
                  name: "--format",
                  insertValue: "--format=yaml|json|var_export",
                  description: "Set user for alias.",
                },
              ],
            },
            {
              name: "update",
              description: "Updates an alias.",
              args: [
                {
                  name: "key",
                  description: "Key for the alias.",
                },
              ],
              options: [
                {
                  name: "--set-user",
                  insertValue: "--set-user=",
                  description: "Set user for alias.",
                },
                {
                  name: "--set-url",
                  insertValue: "--set-url=",
                  description: "Set url for alias.",
                },
                {
                  name: "--set-path",
                  insertValue: "--set-path=",
                  description: "Set path for alias.",
                },
                {
                  name: "--set-ssh",
                  insertValue: "--set-ssh=",
                  description: "Set ssh for alias.",
                },
                {
                  name: "--set-http",
                  insertValue: "--set-http=",
                  description: "Set http for alias.",
                },
                {
                  name: "--grouping",
                  insertValue: "--grouping=",
                  description: "For grouping multiple aliases.",
                },
                {
                  name: "--config",
                  insertValue: "--config=global|project",
                  description: "Config file to be considered for operations.",
                },
              ],
            },
          ],
        },
        {
          name: "cache",
          description: "Manages the internal WP-CLI cache,.",
          subcommands: [
            {
              name: "clear",
              description: "Clears the internal cache.",
            },
            {
              name: "prune",
              description: "Prunes the internal cache.",
            },
          ],
        },
        {
          name: "check-update",
          description:
            "Checks to see if there is a newer version of WP-CLI available.",
          options: [
            {
              name: "--patch",
              // insertValue: "",
              description: "Only list patch updates.",
            },
            {
              name: "--minor",
              // insertValue: "",
              description: "Only list minor updates.",
            },
            {
              name: "--major",
              insertValue: "",
              description: "Only list major updates.",
            },
            {
              name: "--field",
              insertValue: "--field=<field>",
              description:
                "Prints the value of a single field for each update.",
            },
            {
              name: "--fields",
              insertValue: "--fields=<fields>",
              description:
                "Limit the output to specific object fields. Defaults to version,update_type,package_url.",
            },
            {
              name: "--format",
              insertValue: "--format=table|csv|json|count|yaml",
              description: "Render output in a particular format.",
            },
          ],
        },
        {
          name: "cmd-dump",
          description: "Dumps the list of installed commands, as JSON.",
        },
        {
          name: "completions",
          description: "Generates tab completion strings.",
          options: [
            {
              name: "--line",
              insertValue: "--line=<line>",
              description: "The current command line to be executed.",
            },
            {
              name: "--point",
              insertValue: "--point=<point>",
              description:
                "The index to the current cursor position relative to the beginning of the command.",
            },
          ],
        },
        {
          name: "has-command",
          description: "Detects if a command exists",
          args: [
            {
              name: "command_name",
              description: "The command",
            },
          ],
        },
        {
          name: "info",
          description: "Prints various details about the WP-CLI environment.",
          options: [
            {
              name: "--format",
              insertValue: "--format=list|json",
              description: "Render output in a particular format.",
            },
          ],
        },
        {
          name: "param-dump",
          description:
            "Dumps the list of global parameters, as JSON or in var_export format.",
          options: [
            {
              name: "--with-values",
              description: "Display current values also.",
            },
            {
              name: "--format",
              insertValue: "--format=list|json",
              description: "Render output in a particular format.",
            },
          ],
        },
        {
          name: "update",
          description: "Updates WP-CLI to the latest release.",
          options: [
            {
              name: "--patch",
              description: "Only perform patch updates.",
            },
            {
              name: "--minor",
              description: "Only perform minor updates.",
            },
            {
              name: "--major",
              description: "Only perform major updates.",
            },
            {
              name: "--stable",
              description:
                "Update to the latest stable release. Skips update check.",
            },
            {
              name: "--nightly",
              description:
                "Update to the latest built version of the master branch. Potentially unstable.",
            },
            {
              name: "--yes",
              description: "Do not prompt for confirmation.",
            },
            {
              name: "--insecure",
              description:
                "Retry without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack.",
            },
          ],
        },
        {
          name: "version",
          description: "Prints WP-CLI version.",
        },
      ],
    },
  ],
  options: global_options,
};
