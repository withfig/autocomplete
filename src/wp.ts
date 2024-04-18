// https://wp-cli.org/
// wp-cli version 2.5.0
// 19 June 2021

// To learn more about Fig's autocomplete standard visit: https://fig.io/docs/concepts/cli-skeleton
const global_parameter_path: Fig.Option = {
  name: "--path",
  requiresSeparator: true,
  description: "Path to the WordPress files",
  args: {
    name: "path",
    template: "filepaths",
  },
};

const global_parameter_url: Fig.Option = {
  name: "--url",
  requiresSeparator: true,
  description:
    "Pretend request came from given URL. In multisite, this argument is how the target site is specified",
  args: {
    name: "url",
  },
};

const global_parameter_ssh: Fig.Option = {
  name: "--ssh",
  requiresSeparator: true,
  description:
    "Perform operation against a remote server over SSH (or a container using scheme of “docker”, “docker-compose”, “vagrant”)",
  args: {
    name: "options",
    suggestions: [
      { name: "scheme:" },
      { name: "user@" },
      { name: "host" },
      { name: "container" },
      { name: ":port" },
      { name: "path" },
    ],
  },
};

const global_parameter_http: Fig.Option = {
  name: "--http",
  requiresSeparator: true,
  description:
    "Perform operation against a remote WordPress installation over HTTP",
  args: {
    name: "http",
  },
};

const global_parameter_user: Fig.Option = {
  name: "--user",
  requiresSeparator: true,
  description: "Set the WordPress user",
  args: {
    name: "options",
    suggestions: [{ name: "id" }, { name: "login" }, { name: "email" }],
  },
};

const global_parameter_skip_plugins1: Fig.Option = {
  name: "--skip-plugins",
  description:
    "Skip loading all plugins, or a comma-separated list of plugins. Note: mu-plugins are still loaded",
};

const global_parameter_skip_plugins2: Fig.Option = {
  name: "--skip-plugins",
  requiresSeparator: true,
  displayName: "--skip-plugins=",
  description:
    "Skip loading all plugins, or a comma-separated list of plugins. Note: mu-plugins are still loaded",
  args: {
    name: "plugins",
  },
};

const global_parameter_skip_themes1: Fig.Option = {
  name: "--skip-themes",
  description: "Skip loading all themes, or a comma-separated list of themes",
};

const global_parameter_skip_themes2: Fig.Option = {
  name: "--skip-themes",
  requiresSeparator: true,
  displayName: "--skip-themes=",
  description: "Skip loading all themes, or a comma-separated list of themes",
  args: {
    name: "themes",
  },
};

const global_parameter_skip_packages: Fig.Option = {
  name: "--skip-packages",
  description: "Skip loading all installed packages",
};

const global_parameter_require: Fig.Option = {
  name: "--require",
  requiresSeparator: true,
  description:
    "Load PHP file before running the command (may be used more than once)",
  args: {
    name: "path",
  },
};

const global_parameter_exec: Fig.Option = {
  name: "--exec",
  requiresSeparator: true,
  description:
    "Execute PHP code before running the command (may be used more than once)",
  args: {
    name: "php-code",
  },
};

const global_parameter_color: Fig.Option = {
  name: "--color",
  description: "Whether to colorize the output",
};

const global_parameter_no_color: Fig.Option = {
  name: "--no-color",
  description: "Whether to colorize the output",
};

const global_parameter_debug1: Fig.Option = {
  name: "--debug",
  description:
    "Show all PHP errors and add verbosity to WP-CLI output. Built-in groups include: bootstrap, commandfactory, and help",
};

const global_parameter_debug2: Fig.Option = {
  name: "--debug",
  displayName: "--debug=",
  requiresSeparator: true,

  description:
    "Show all PHP errors and add verbosity to WP-CLI output. Built-in groups include: bootstrap, commandfactory, and help",
  args: {
    name: "group",
  },
};

const global_parameter_prompt1: Fig.Option = {
  name: "--prompt",
  description:
    "Prompt the user to enter values for all command arguments, or a subset specified as comma-separated values",
};

const global_parameter_prompt2: Fig.Option = {
  name: "--prompt",
  requiresSeparator: true,
  displayName: "--prompt=",
  description:
    "Prompt the user to enter values for all command arguments, or a subset specified as comma-separated values",
  args: {
    name: "assoc",
  },
};

const global_parameter_quiet: Fig.Option = {
  name: "--quiet",
  description: "Suppress informational messages",
};

// The below is a dummy example for git. Make sure to change the file name!
const completionSpec: Fig.Spec = {
  name: "wp",
  description: "WP-CLI is the command-line interface for WordPress",
  subcommands: [
    // {
    //   name: "admin",
    //   description: "Open /wp-admin/ in a browser.",
    //   // If a subcommand or option takes an argument, you must include the args prop, even if it"s an empty object (like below)
    //   // If you want to build custom suggestions for arguments check out: https://fig.io/docs/concepts/dynamic-suggestions
    //   args: [{}],
    //   options: global_parameters,
    // },
    {
      name: "cache",
      description:
        "Adds, removes, fetches, and flushes the WP Object Cache object",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "add",
          description: "Adds a value to the object cache",
          args: [
            {
              name: "key",
              description: "Cache key",
            },
            {
              name: "value",
              description: "Value to add to the key",
            },
            {
              name: "group",
              description:
                "Method for grouping data within the cache which allows the same key to be used across groups",
            },
            {
              name: "expiration",
              description:
                "Define how long to keep the value, in seconds. 0 means as long as possible",
            },
          ],
        },
        {
          name: "decr",
          description: "Decrements a value in the object cache",
          args: [
            {
              name: "key",
              description: "Cache key",
            },
            {
              name: "offset",
              description: "The amount by which to decrement the item’s value",
            },
            {
              name: "group",
              description:
                "Method for grouping data within the cache which allows the same key to be used across groups",
            },
          ],
        },
        {
          name: "delete",
          description: "Removes a value from the object cache",
          args: [
            {
              name: "key",
              description: "Cache key",
            },
            {
              name: "group",
              description:
                "Method for grouping data within the cache which allows the same key to be used across groups",
            },
          ],
        },
        {
          name: "flush",
          description: "Flushes the object cache",
        },
        {
          name: "get",
          description: "Gets a value from the object cache",
          args: [
            {
              name: "key",
              description: "Cache key",
            },
            {
              name: "group",
              description:
                "Method for grouping data within the cache which allows the same key to be used across groups",
            },
          ],
        },
        {
          name: "incr",
          description: "Increments a value in the object cache",
          args: [
            {
              name: "key",
              description: "Cache key",
            },
            {
              name: "offset",
              description: "The amount by which to increment the item’s value",
            },
            {
              name: "group",
              description:
                "Method for grouping data within the cache which allows the same key to be used across groups",
            },
          ],
        },
        {
          name: "replace",
          description:
            "Replaces a value in the object cache, if the value already exists",
          args: [
            {
              name: "key",
              description: "Cache key",
            },
            {
              name: "value",
              description: "Value to replace",
            },
            {
              name: "group",
              description:
                "Method for grouping data within the cache which allows the same key to be used across groups",
            },
            {
              name: "expiration",
              description:
                "Define how long to keep the value, in seconds. 0 means as long as possible",
            },
          ],
        },
        {
          name: "set",
          description:
            "Sets a value to the object cache, regardless of whether it already exists",
          args: [
            {
              name: "key",
              description: "Cache key",
            },
            {
              name: "value",
              description: "Value to set on the key",
            },
            {
              name: "group",
              description:
                "Method for grouping data within the cache which allows the same key to be used across groups",
            },
            {
              name: "expiration",
              description:
                "Define how long to keep the value, in seconds. 0 means as long as possible",
            },
          ],
        },
        {
          name: "type",
          description: "Attempts to determine which object cache is being used",
        },
      ],
    },
    {
      name: "cap",
      description: "Adds, removes, and lists capabilities of a user role",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "add",
          description: "Adds a value to the object cache",
          args: [
            {
              name: "role",
              description: "Key for the role",
            },
            {
              name: "cap",
              description: "One or more capabilities to add",
            },
          ],
          options: [
            {
              name: "--grant",
              description:
                "Adds the capability as an explicit boolean value, instead of implicitly defaulting to true",
              args: {
                name: "options",
                suggestions: [{ name: "true" }, { name: "false" }],
              },
            },
          ],
        },
        {
          name: "list",
          description: "Lists capabilities for a given role",
          args: {
            name: "role",
            description: "Key for the role",
          },
          options: [
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "options",
                suggestions: [
                  { name: "list" },
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
            {
              name: "--show-grant",
              description:
                "Display all capabilities defined for a role including grant",
            },
          ],
        },
        {
          name: "remove",
          description: "Removes capabilities from a given role",
          args: [
            {
              name: "role",
              description: "Key for the role",
            },
            {
              name: "cap",
              description: "One or more capabilities to remove",
            },
          ],
        },
      ],
    },
    {
      name: "cli",
      description:
        "Reviews current WP-CLI info, checks for updates, or views defined aliases",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "alias",
          description:
            "Retrieves, sets and updates aliases for WordPress Installations",
          subcommands: [
            {
              name: "add",
              description: "Creates an alias",
              args: {
                name: "key",
                description: "Key for the alias",
              },
              options: [
                {
                  name: "--set-user",
                  requiresSeparator: true,
                  description: "Set user for alias",
                  args: { name: "user" },
                },
                {
                  name: "--set-url",
                  requiresSeparator: true,
                  description: "Set url for alias",
                  args: { name: "url" },
                },
                {
                  name: "--set-path",
                  requiresSeparator: true,
                  description: "Set path for alias",
                  args: {
                    name: "path",
                    template: "folders",
                  },
                },
                {
                  name: "--set-ssh",
                  requiresSeparator: true,
                  description: "Set ssh for alias",
                  args: { name: "ssh" },
                },
                {
                  name: "--set-http",
                  requiresSeparator: true,
                  description: "Set http for alias",
                  args: { name: "http" },
                },
                {
                  name: "--grouping",
                  requiresSeparator: true,
                  description: "For grouping multiple aliases",
                  args: { name: "grouping" },
                },
                {
                  name: "--config",
                  requiresSeparator: true,
                  description: "Config file to be considered for operations",
                  args: {
                    name: "options",
                    suggestions: [{ name: "global" }, { name: "project" }],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes an alias",
              args: {
                name: "key",
                description: "Key for the alias",
              },
              options: [
                {
                  name: "--config",
                  requiresSeparator: true,
                  description: "Config file to be considered for operations",
                  args: {
                    name: "options",
                    suggestions: [{ name: "global" }, { name: "project" }],
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Gets the value for an alias",
              args: {
                name: "key",
                description: "Key for the alias",
              },
            },
            {
              name: "list",
              description: "Lists available WP-CLI aliases",
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Set user for alias",
                  args: {
                    name: "options",
                    suggestions: [
                      { name: "yaml" },
                      { name: "json" },
                      { name: "var_export" },
                    ],
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Updates an alias",
              args: {
                name: "key",
                description: "Key for the alias",
              },
              options: [
                {
                  name: "--set-user",
                  requiresSeparator: true,
                  description: "Set user for alias",
                  args: { name: "user" },
                },
                {
                  name: "--set-url",
                  requiresSeparator: true,
                  description: "Set url for alias",
                  args: { name: "url" },
                },
                {
                  name: "--set-path",
                  requiresSeparator: true,
                  description: "Set path for alias",
                  args: {
                    name: "path",
                    template: "folders",
                  },
                },
                {
                  name: "--set-ssh",
                  requiresSeparator: true,
                  description: "Set ssh for alias",
                  args: { name: "ssh" },
                },
                {
                  name: "--set-http",
                  requiresSeparator: true,
                  description: "Set http for alias",
                  args: { name: "http" },
                },
                {
                  name: "--grouping",
                  requiresSeparator: true,
                  description: "For grouping multiple aliases",
                  args: { name: "grouping" },
                },
                {
                  name: "--config",
                  requiresSeparator: true,
                  description: "Config file to be considered for operations",
                  args: {
                    name: "options",
                    suggestions: [{ name: "global" }, { name: "project" }],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "cache",
          description: "Manages the internal WP-CLI cache,",
          subcommands: [
            {
              name: "clear",
              description: "Clears the internal cache",
            },
            {
              name: "prune",
              description: "Prunes the internal cache",
            },
          ],
        },
        {
          name: "check-update",
          description:
            "Checks to see if there is a newer version of WP-CLI available",
          options: [
            {
              name: "--patch",
              description: "Only list patch updates",
            },
            {
              name: "--minor",
              description: "Only list minor updates",
            },
            {
              name: "--major",
              description: "Only list major updates",
            },
            {
              name: "--field",
              requiresSeparator: true,
              description: "Prints the value of a single field for each update",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific object fields. Defaults to version,update_type,package_url",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "options",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "cmd-dump",
          description: "Dumps the list of installed commands, as JSON",
        },
        {
          name: "completions",
          description: "Generates tab completion strings",
          options: [
            {
              name: "--line",
              requiresSeparator: true,
              description: "The current command line to be executed",
              args: { name: "line" },
            },
            {
              name: "--point",
              requiresSeparator: true,
              description:
                "The index to the current cursor position relative to the beginning of the command",
              args: { name: "point" },
            },
          ],
        },
        {
          name: "has-command",
          description: "Detects if a command exists",
          args: {
            name: "command_name",
            description: "The command",
          },
        },
        {
          name: "info",
          description: "Prints various details about the WP-CLI environment",
          options: [
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "options",
                suggestions: [{ name: "list" }, { name: "json" }],
              },
            },
          ],
        },
        {
          name: "param-dump",
          description:
            "Dumps the list of global parameters, as JSON or in var_export format",
          options: [
            {
              name: "--with-values",
              description: "Display current values also",
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "options",
                suggestions: [{ name: "var_export" }, { name: "json" }],
              },
            },
          ],
        },
        {
          name: "update",
          description: "Updates WP-CLI to the latest release",
          options: [
            {
              name: "--patch",
              description: "Only perform patch updates",
            },
            {
              name: "--minor",
              description: "Only perform minor updates",
            },
            {
              name: "--major",
              description: "Only perform major updates",
            },
            {
              name: "--stable",
              description:
                "Update to the latest stable release. Skips update check",
            },
            {
              name: "--nightly",
              description:
                "Update to the latest built version of the master branch. Potentially unstable",
            },
            {
              name: "--yes",
              description: "Do not prompt for confirmation",
            },
            {
              name: "--insecure",
              description:
                "Retry without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack",
            },
          ],
        },
        {
          name: "version",
          description: "Prints WP-CLI version",
        },
      ],
    },
    {
      name: "comment",
      description: "Creates, updates, deletes, and moderates comments",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "approve",
          description: "Approves a comment",
          args: {
            name: "id",
            description: "The IDs of the comments to approve",
          },
        },
        {
          name: "count",
          description: "Counts comments, on whole blog or on a given post",
          args: {
            name: "post-id",
            description: "The ID of the post to count comments in",
          },
        },
        {
          name: "create",
          description: "Creates a new comment",
          options: [
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Associative args for the new comment. See wp_insert_comment()",
              args: { name: "field" },
            },
            {
              name: "--porcelain",
              description: "Output just the new comment id",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a comment",
          args: {
            name: "id",
            description: "One or more IDs of comments to delete",
          },
          options: [
            {
              name: "--force",
              description: "Skip the trash bin",
            },
          ],
        },
        {
          name: "exists",
          description: "Verifies whether a comment exists",
          args: {
            name: "id",
            description: "The ID of the comment to check",
          },
        },
        {
          name: "generate",
          description: "Generates some number of new dummy comments",
          options: [
            {
              name: "--count",
              requiresSeparator: true,
              description: "How many comments to generate?",
              args: {
                name: "default",
                suggestions: [{ name: "100" }],
              },
            },
            {
              name: "--post_id",
              requiresSeparator: true,
              description: "Assign comments to a specific post",
              args: {
                name: "post-id",
              },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "options",
                suggestions: [{ name: "progress" }, { name: "ids" }],
              },
            },
          ],
        },
        {
          name: "get",
          description: "Gets the data of a single comment",
          args: {
            name: "id",
            description: "The comment to get",
          },
          options: [
            {
              name: "--field",
              requiresSeparator: true,
              description:
                "Instead of returning the whole comment, returns the value of a single field",
              args: {
                name: "field",
              },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific fields. Defaults to all fields",
              args: {
                name: "fields",
              },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "options",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "list",
          description: "Gets a list of comments",
          options: [
            {
              name: "--field=value",
              insertValue: "--",
              description: "One or more args to pass to WP_Comment_Query",
            },
            {
              name: "--field",
              requiresSeparator: true,
              description:
                "Prints the value of a single field for each comment",
              args: {
                name: "field",
              },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific object fields",
              args: {
                name: "fields",
              },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "options",
                suggestions: [
                  { name: "table" },
                  { name: "ids" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "meta",
          description:
            "Adds, updates, deletes, and lists comment custom fields",
          subcommands: [
            {
              name: "add",
              description: "Add a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to create",
                },
                {
                  name: "value",
                  description:
                    "The value of the meta field. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "options",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to delete",
                },
                {
                  name: "value",
                  description:
                    "The value to delete. If omitted, all rows with key will deleted",
                },
              ],
              options: [
                {
                  name: "--all",
                  description: "Delete all meta for the object",
                },
              ],
            },
            {
              name: "get",
              description: "Get meta field value",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to get",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Get value in a particular format",
                  args: {
                    name: "options",
                    suggestions: [
                      { name: "var_export" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List all metadata associated with an object",
              args: {
                name: "id",
                description: "ID for the object",
              },
              options: [
                {
                  name: "--keys",
                  requiresSeparator: true,
                  description: "Limit output to metadata of specific keys",
                  args: {
                    name: "keys",
                  },
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description:
                    "Limit the output to specific row fields. Defaults to id,meta_key,meta_value",
                  args: {
                    name: "fields",
                  },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "options",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "yaml" },
                      { name: "count" },
                    ],
                  },
                },
                {
                  name: "--orderby",
                  requiresSeparator: true,
                  description: "Set orderby which field",
                  args: {
                    name: "options",
                    suggestions: [
                      { name: "id" },
                      { name: "meta_key" },
                      { name: "meta_value" },
                    ],
                  },
                },
                {
                  name: "--order",
                  requiresSeparator: true,
                  description: "Set ascending or descending order",
                  args: {
                    name: "options",
                    suggestions: [{ name: "asc" }, { name: "desc" }],
                  },
                },
                {
                  name: "--unserialize",
                  description: "Unserialize meta_value output",
                },
              ],
            },
            {
              name: "patch",
              description: "Update a nested value for a meta field",
              args: [
                {
                  name: "options",
                  description: "Patch action to perform",
                  suggestions: [
                    { name: "insert" },
                    { name: "update" },
                    { name: "delete" },
                  ],
                },
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to update",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to patch",
                },
                {
                  name: "value",
                  description:
                    "The new value. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "options",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "pluck",
              description: "Get a nested value from a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to get",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to pluck",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The output format of the value",
                  args: {
                    name: "options",
                    suggestions: [
                      { name: "plaintext" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to update",
                },
                {
                  name: "value",
                  description:
                    "The new value. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "options",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "recount",
          description:
            "Recalculates the comment_count value for one or more posts",
          args: {
            name: "id",
            description: "IDs for one or more posts to update",
          },
        },
        {
          name: "spam",
          description: "Marks a comment as spam",
          args: {
            name: "id",
            description: "The IDs of the comments to mark as spam",
          },
        },
        {
          name: "status",
          description: "Gets the status of a comment",
          args: {
            name: "id",
            description: "The ID of the comment to check",
          },
        },
        {
          name: "trash",
          description: "Trashes a comment",
          args: {
            name: "id",
            description: "The IDs of the comments to trash",
          },
        },
        {
          name: "unapprove",
          description: "Unapproves a comment",
          args: {
            name: "id",
            description: "The IDs of the comments to unapprove",
          },
        },
        {
          name: "unspam",
          description: "Unmarks a comment as spam",
          args: {
            name: "id",
            description: "The IDs of the comments to unmark as spam",
          },
        },
        {
          name: "untrash",
          description: "Untrashes a comment",
          args: {
            name: "id",
            description: "The IDs of the comments to untrash",
          },
        },
        {
          name: "update",
          description: "Updates one or more comments",
          args: {
            name: "id",
            description: "One or more IDs of comments to update",
          },
          options: [
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "One or more fields to update. See wp_update_comment()",
            },
          ],
        },
      ],
    },
    {
      name: "config",
      description: "Generates and reads the wp-config.php file",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "create",
          description: "Generates a wp-config.php file",
          options: [
            {
              name: "--dbname",
              requiresSeparator: true,
              description: "Set the database name",
              args: { name: "dbname" },
            },
            {
              name: "--dbuser",
              requiresSeparator: true,
              description: "Set the database user",
              args: { name: "dbuser" },
            },
            {
              name: "--dbpass",
              requiresSeparator: true,
              description: "Set the database password",
              args: {
                name: "options",
                suggestions: [{ name: "plaintext" }, { name: "json" }],
              },
            },
            {
              name: "--dbhost",
              requiresSeparator: true,
              description: "Set the database host",
              args: {
                name: "default",
                suggestions: [{ name: "localhost" }],
              },
            },
            {
              name: "--dbprefix",
              requiresSeparator: true,
              description: "Set the database table prefix",
              args: {
                name: "default",
                suggestions: [{ name: "wp_" }],
              },
            },
            {
              name: "--dbcharset",
              requiresSeparator: true,
              description: "Set the database charset",
              args: {
                name: "default",
                suggestions: [{ name: "utf8" }],
              },
            },
            {
              name: "--dbcollate",
              requiresSeparator: true,
              description: "Set the database collation",
              args: { name: "dbcollate" },
            },
            {
              name: "--locale",
              requiresSeparator: true,
              description:
                "Set the WPLANG constant. Defaults to $wp_local_package variable",
              args: { name: "locale" },
            },
            {
              name: "--extra-php",
              description:
                "If set, the command copies additional PHP code into wp-config.php from STDIN",
            },
            {
              name: "--skip-salts",
              description:
                "If set, keys and salts won’t be generated, but should instead be passed via --extra-php",
            },
            {
              name: "--skip-check",
              description: "If set, the database connection is not checked",
            },
            {
              name: "--force",
              description: "Overwrites existing files, if present",
            },
            {
              name: "--insecure",
              description:
                "Retry API download without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a specific constant or variable from the wp-config.php file",
          args: {
            name: "name",
            description: "Name of the wp-config.php constant or variable",
          },
          options: [
            {
              name: "--type",
              requiresSeparator: true,
              description:
                "Type of the config value to delete. Defaults to ‘all’",
              args: {
                name: "options",
                suggestions: [
                  { name: "constant" },
                  { name: "variable" },
                  { name: "all" },
                ],
              },
            },
          ],
        },
        {
          name: "edit",
          description: "Launches system editor to edit the wp-config.php file",
        },
        {
          name: "get",
          description:
            "Gets the value of a specific constant or variable defined in wp-config.php file",
          args: {
            name: "name",
            description: "Name of the wp-config.php constant or variable",
          },
          options: [
            {
              name: "--type",
              requiresSeparator: true,
              description:
                "Type of the config value to delete. Defaults to ‘all’",
              args: {
                name: "options",
                suggestions: [
                  { name: "constant" },
                  { name: "variable" },
                  { name: "all" },
                ],
              },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Get value in a particular format",
              args: {
                name: "options",
                suggestions: [
                  { name: "var_export" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "has",
          description:
            "Checks whether a specific constant or variable exists in the wp-config.php file",
          args: {
            name: "name",
            description: "Name of the wp-config.php constant or variable",
          },
          options: [
            {
              name: "--type",
              requiresSeparator: true,
              description:
                "Type of the config value to delete. Defaults to ‘all’",
              args: {
                name: "options",
                suggestions: [
                  { name: "constant" },
                  { name: "variable" },
                  { name: "all" },
                ],
              },
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists variables, constants, and file includes defined in wp-config.php file",
          args: {
            name: "filter",
            description: "Name or partial name to filter the list by",
          },
          options: [
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific fields. Defaults to all fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "options",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
            {
              name: "--strict",
              description: "Enforce strict matching when a filter is provided",
            },
          ],
        },
        {
          name: "path",
          description: "Gets the path to wp-config.php file",
        },
        {
          name: "set",
          description:
            "Sets the value of a specific constant or variable defined in wp-config.php file",
          args: [
            {
              name: "name",
              description: "Name of the wp-config.php constant or variable",
            },
            {
              name: "value",
              description:
                "Value to set the wp-config.php constant or variable to",
            },
          ],
          options: [
            {
              name: "--add",
              description:
                "Add the value if it doesn’t exist yet. This is the default behavior, override with –no-add",
            },
            {
              name: "--no-add",
              description:
                "Add the value if it doesn’t exist yet. This is the default behavior, override with –no-add",
            },
            {
              name: "--raw",
              description:
                "Place the value into the wp-config.php file as is, instead of as a quoted string",
            },
            {
              name: "--anchor",
              requiresSeparator: true,
              description:
                "Anchor string where additions of new values are anchored around. Defaults to “/* That’s all, stop editing!”",
              args: { name: "anchor" },
            },
            {
              name: "--placement",
              requiresSeparator: true,
              description:
                "Where to place the new values in relation to the anchor string",
              args: {
                name: "options",
                suggestions: [{ name: "before" }, { name: "after" }],
              },
            },
            {
              name: "--separator",
              requiresSeparator: true,
              description:
                "Separator string to put between an added value and its anchor string. The following escape sequences will be recognized and properly interpreted: ‘\n’ => newline, ‘\r’ => carriage return, ‘\t’ => tab. Defaults to a single EOL (“\n” on *nix and “\r\n” on Windows)",
              args: { name: "separator" },
            },
            {
              name: "--type",
              requiresSeparator: true,
              description: "Type of the config value to set. Defaults to ‘all’",
              args: {
                name: "options",
                suggestions: [
                  { name: "constant" },
                  { name: "variable" },
                  { name: "all" },
                ],
              },
            },
          ],
        },
        {
          name: "shuffle-salts",
          description: "Refreshes the salts defined in the wp-config.php file",
          args: {
            name: "keys",
            description:
              "One ore more keys to shuffle. If none are provided, this falls back to the default WordPress Core salt keys",
          },
          options: [
            {
              name: "--force",
              description:
                "If an unknown key is requested to be shuffled, add it instead of throwing a warning",
            },
            {
              name: "--insecure",
              description:
                "Retry API download without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack",
            },
          ],
        },
      ],
    },
    {
      name: "core",
      description:
        "Downloads, installs, updates, and manages a WordPress installation",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "check-update",
          description: "Checks for WordPress updates via Version Check API",
          options: [
            {
              name: "--minor",
              description:
                "Compare only the first two parts of the version number",
            },
            {
              name: "--major",
              description: "Compare only the first part of the version number",
            },
            {
              name: "--field",
              requiresSeparator: true,
              description: "Prints the value of a single field for each update",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific object fields. Defaults to version,update_type,package_url",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "options",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "count" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "download",
          description: "Downloads core WordPress files",
          args: {
            name: "download-url",
            description:
              "Download directly from a provided URL instead of fetching the URL from the wordpress.org servers",
          },
          options: [
            {
              name: "--path",
              requiresSeparator: true,
              description:
                "Specify the path in which to install WordPress. Defaults to current directory",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--locale",
              requiresSeparator: true,
              description: "Select which language you want to download",
              args: { name: "locale" },
            },
            {
              name: "--version",
              requiresSeparator: true,
              description:
                "Select which version you want to download. Accepts a version number, ‘latest’ or ‘nightly’",
              args: {
                name: "options",
                suggestions: [
                  { name: "<number>" },
                  { name: "latest" },
                  { name: "nightly" },
                ],
              },
            },
            {
              name: "--skip-content",
              description: "Download WP without the default themes and plugins",
            },
            {
              name: "--force",
              description: "Overwrites existing files, if present",
            },
            {
              name: "--insecure",
              description:
                "Retry download without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack",
            },
          ],
        },
        {
          name: "install",
          description: "Runs the standard WordPress installation process",
          options: [
            {
              name: "--url",
              requiresSeparator: true,
              description: "The address of the new site",
              args: { name: "url" },
            },
            {
              name: "--title",
              requiresSeparator: true,
              description: "The title of the new site",
              args: { name: "site-title" },
            },
            {
              name: "--admin_user",
              requiresSeparator: true,
              description: "The name of the admin user",
              args: { name: "username" },
            },
            {
              name: "--admin_password",
              requiresSeparator: true,
              description:
                "The password for the admin user. Defaults to randomly generated string",
              args: { name: "password" },
            },
            {
              name: "--admin_email",
              requiresSeparator: true,
              description: "The email address for the admin user",
              args: { name: "email" },
            },
            {
              name: "--skip-email",
              description:
                "Don’t send an email notification to the new admin user",
            },
          ],
        },
        {
          name: "is-installed",
          description: "Checks if WordPress is installed",
          options: [
            {
              name: "--network",
              description: "Check if this is a multisite installation",
            },
          ],
        },
        {
          name: "multisite-convert",
          description:
            "Transforms an existing single-site installation into a multisite installation",
          options: [
            {
              name: "--title",
              requiresSeparator: true,
              description: "The title of the new network",
              args: { name: "network-title" },
            },
            {
              name: "--base",
              requiresSeparator: true,
              description:
                "Base path after the domain name that each site url will start with",
              args: {
                name: "url-path",
                suggestions: [{ name: "/" }],
              },
            },
            {
              name: "--subdomains",
              description:
                "If passed, the network will use subdomains, instead of subdirectories. Doesn’t work with ‘localhost’",
            },
          ],
        },
        {
          name: "multisite-install",
          description: "Installs WordPress multisite from scratch",
          options: [
            {
              name: "--url",
              requiresSeparator: true,
              description: "The address of the new site",
              args: { name: "url" },
            },
            {
              name: "--base",
              requiresSeparator: true,
              description:
                "Base path after the domain name that each site url will start with",
              args: {
                name: "url-path",
                suggestions: [{ name: "/" }],
              },
            },
            {
              name: "--subdomains",
              description:
                "If passed, the network will use subdomains, instead of subdirectories. Doesn’t work with ‘localhost’",
            },
            {
              name: "--title",
              requiresSeparator: true,
              description: "The title of the new site",
              args: { name: "site-title" },
            },
            {
              name: "--admin_user",
              requiresSeparator: true,
              description: "The name of the admin user",
              args: {
                name: "username",
                suggestions: [{ name: "admin" }],
              },
            },
            {
              name: "--admin_password",
              requiresSeparator: true,
              description:
                "The password for the admin user. Defaults to randomly generated string",
              args: { name: "password" },
            },
            {
              name: "--admin_email",
              requiresSeparator: true,
              description: "The email address for the admin user",
              args: { name: "email" },
            },
            {
              name: "--skip-email",
              description:
                "Don’t send an email notification to the new admin user",
            },
            {
              name: "--skip-config",
              description: "Don’t add multisite constants to wp-config.php",
            },
          ],
        },
        {
          name: "update",
          description: "Updates WordPress to a newer version",
          args: {
            name: "zip",
            template: "filepaths",
            description:
              "Path to zip file to use, instead of downloading from wordpress.org",
          },
          options: [
            {
              name: "--minor",
              description:
                "Only perform updates for minor releases (e.g. update from WP 4.3 to 4.3.3 instead of 4.4.2)",
            },
            {
              name: "--version",
              requiresSeparator: true,
              description:
                "Update to a specific version, instead of to the latest version. Alternatively accepts ‘nightly’",
              args: { name: "version" },
            },
            {
              name: "--force",
              description:
                "Update even when installed WP version is greater than the requested version",
            },
            {
              name: "--locale",
              requiresSeparator: true,
              description: "Select which language you want to download",
              args: { name: "locale" },
            },
            {
              name: "--insecure",
              description:
                "Retry download without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack",
            },
          ],
        },
        {
          name: "update-db",
          description: "Runs the WordPress database update procedure",
          options: [
            {
              name: "--network",
              description: "Update databases for all sites on a network",
            },
            {
              name: "--dry-run",
              description:
                "Compare database versions without performing the update",
            },
          ],
        },
        {
          name: "verify-checksums",
          description:
            "Verifies WordPress files against WordPress.org’s checksums",
          options: [
            {
              name: "--version",
              requiresSeparator: true,
              description:
                "Verify checksums against a specific version of WordPress",
              args: { name: "version" },
            },
            {
              name: "--locale",
              requiresSeparator: true,
              description:
                "Verify checksums against a specific locale of WordPress",
              args: { name: "locale" },
            },
            {
              name: "--insecure",
              description:
                "Verify checksums against a specific locale of WordPress",
            },
          ],
        },
        {
          name: "version",
          description: "Displays the WordPress version",
          options: [
            {
              name: "--extra",
              description: "Show extended version information",
            },
          ],
        },
      ],
    },
    {
      name: "cron",
      description:
        "Tests, runs, and deletes WP-Cron events; manages WP-Cron schedules",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "event",
          description: "Schedules, runs, and deletes WP-Cron events",
          subcommands: [
            {
              name: "delete",
              description:
                "Deletes all scheduled cron events for the given hook",
              args: {
                name: "hook",
                description: "The hook name",
              },
            },
            {
              name: "list",
              description: "Lists scheduled cron events",
              options: [
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description: "Limit the output to specific object fields",
                  args: { name: "fields" },
                },
                {
                  name: "--field=value",
                  insertValue: "--",
                  description: "Filter by one or more fields",
                },
                {
                  name: "--field",
                  requiresSeparator: true,
                  description:
                    "Prints the value of a single field for each term",
                  args: { name: "field" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "options",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "ids" },
                      { name: "json" },
                      { name: "count" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "run",
              description:
                "Runs the next scheduled cron event for the given hook",
              args: {
                name: "hook",
                description: "The hook name",
              },
              options: [
                {
                  name: "--due-now",
                  description: "Run all hooks due right now",
                },
                {
                  name: "--all",
                  description: "Run all hooks",
                },
              ],
            },
            {
              name: "schedule",
              description: "Schedules a new cron event",
              args: [
                {
                  name: "hook",
                  description: "The hook name",
                },
                {
                  name: "next-run",
                  description:
                    "A Unix timestamp or an English textual datetime description compatible with strtotime(). Defaults to now",
                },
                {
                  name: "recurrence",
                  description:
                    "How often the event should recur. See wp cron schedule list for available schedule names. Defaults to no recurrence",
                },
              ],
              options: [
                {
                  name: "--field=value",
                  insertValue: "--",
                  description:
                    "Arguments to pass to the hook for the event. <field> should be a numeric key, not a string",
                },
              ],
            },
            {
              name: "unschedule",
              description: "Unschedules all cron events for a given hook",
              args: {
                name: "hook",
                description:
                  "Name of the hook for which all events should be unscheduled",
              },
            },
          ],
        },
        {
          name: "schedule",
          description: "Gets WP-Cron schedules",
          subcommands: [
            {
              name: "list",
              description: "List available cron schedules",
              options: [
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description: "Limit the output to specific object fields",
                  args: { name: "fields" },
                },
                {
                  name: "--field",
                  requiresSeparator: true,
                  description:
                    "Prints the value of a single field for each schedule",
                  args: { name: "field" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "options",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "ids" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "test",
          description:
            "Tests the WP Cron spawning system and reports back its status",
        },
      ],
    },
    {
      name: "db",
      description:
        "Performs basic database operations using credentials stored in wp-config.php",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "check",
          description: "Checks the current status of the database",
          options: [
            {
              name: "--dbuser",
              requiresSeparator: true,
              description:
                "Username to pass to mysqlcheck. Defaults to DB_USER",
              args: { name: "value" },
            },
            {
              name: "--dbpass",
              requiresSeparator: true,
              description:
                "Password to pass to mysqlcheck. Defaults to DB_PASSWORD",
              args: { name: "value" },
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysqlcheck. Refer to mysqlcheck docs",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration",
            },
          ],
        },
        {
          name: "clean",
          description:
            "Removes all tables with `$table_prefix` from the database",
          options: [
            {
              name: "--dbuser",
              requiresSeparator: true,
              description:
                "Username to pass to mysqlcheck. Defaults to DB_USER",
              args: { name: "value" },
            },
            {
              name: "--dbpass",
              requiresSeparator: true,
              description:
                "Password to pass to mysqlcheck. Defaults to DB_PASSWORD",
              args: { name: "value" },
            },
            {
              name: "--yes",
              description: "Answer yes to the confirmation message",
            },
          ],
        },
        {
          name: "cli",
          description:
            "Opens a MySQL console using credentials from wp-config.php",
          options: [
            {
              name: "--database",
              requiresSeparator: true,
              description: "Use a specific database. Defaults to DB_NAME",
              args: { name: "database" },
            },
            {
              name: "--default-character-set",
              requiresSeparator: true,
              description:
                "Use a specific character set. Defaults to DB_CHARSET when defined",
              args: { name: "character-set" },
            },
            {
              name: "--dbuser",
              requiresSeparator: true,
              description: "Username to pass to mysql. Defaults to DB_USER",
              args: { name: "value" },
            },
            {
              name: "--dbpass",
              requiresSeparator: true,
              description: "Password to pass to mysql. Defaults to DB_PASSWORD",
              args: { name: "value" },
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysql. Refer to mysql docs",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration",
            },
          ],
        },
        {
          name: "columns",
          description: "Displays information about a given table",
          args: {
            name: "table",
            description: "Name of the database table",
          },
          options: [
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "options",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "create",
          description: "Creates a new database",
          options: [
            {
              name: "--dbuser",
              requiresSeparator: true,
              description: "Username to pass to mysql. Defaults to DB_USER",
              args: { name: "value" },
            },
            {
              name: "--dbpass",
              requiresSeparator: true,
              description: "Password to pass to mysql. Defaults to DB_PASSWORD",
              args: { name: "value" },
            },
          ],
        },
        {
          name: "drop",
          description: "Deletes the existing database",
          options: [
            {
              name: "--dbuser",
              requiresSeparator: true,
              description: "Username to pass to mysql. Defaults to DB_USER",
              args: { name: "value" },
            },
            {
              name: "--dbpass",
              requiresSeparator: true,
              description: "Password to pass to mysql. Defaults to DB_PASSWORD",
              args: { name: "value" },
            },
            {
              name: "--yes",
              description: "Answer yes to the confirmation message",
            },
          ],
        },
        {
          name: "export",
          description: "Exports the database to a file or to STDOUT",
          args: {
            name: "file",
            description:
              "The name of the SQL file to export. If ‘-‘, then outputs to STDOUT. If omitted, it will be ‘{dbname}-{Y-m-d}-{random-hash}.sql’",
          },
          options: [
            {
              name: "--dbuser",
              requiresSeparator: true,
              description: "Username to pass to mysqldump. Defaults to DB_USER",
              args: { name: "value" },
            },
            {
              name: "--dbpass",
              requiresSeparator: true,
              description:
                "Password to pass to mysqldump. Defaults to DB_PASSWORD",
              args: { name: "value" },
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysqldump. Refer to mysqldump docs",
            },
            {
              name: "--tables",
              requiresSeparator: true,
              description:
                "The comma separated list of specific tables to export. Excluding this parameter will export all tables in the database",
              args: { name: "tables" },
            },
            {
              name: "--exclude_tables",
              requiresSeparator: true,
              description:
                "The comma separated list of specific tables that should be skipped from exporting. Excluding this parameter will export all tables in the database",
              args: { name: "tables" },
            },
            {
              name: "--include-tablespaces",
              description:
                "Skips adding the default –no-tablespaces option to mysqldump",
            },
            {
              name: "--porcelain",
              description: "Output filename for the exported database",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration",
            },
          ],
        },
        {
          name: "import",
          description: "Imports a database from a file or from STDIN",
          args: {
            name: "file",
            description:
              "The name of the SQL file to import. If ‘-‘, then reads from STDIN. If omitted, it will look for ‘{dbname}.sql’",
          },
          options: [
            {
              name: "--dbuser",
              requiresSeparator: true,
              description: "Username to pass to mysql. Defaults to DB_USER",
              args: {
                name: "value",
                suggestions: [{ name: "DB_USER" }],
              },
            },
            {
              name: "--dbpass",
              requiresSeparator: true,
              description: "Password to pass to mysql. Defaults to DB_PASSWORD",
              args: {
                name: "value",
                suggestions: [{ name: "DB_PASSWORD" }],
              },
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysql. Refer to mysql binary docs",
            },
            {
              name: "--skip-optimization",
              description:
                "When using an SQL file, do not include speed optimization such as disabling auto-commit and key checks",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration",
            },
          ],
        },
        {
          name: "optimize",
          description: "Optimizes the database",
          options: [
            {
              name: "--dbuser",
              requiresSeparator: true,
              description:
                "Username to pass to mysqlcheck. Defaults to DB_USER",
              args: {
                name: "value",
                suggestions: [{ name: "DB_USER" }],
              },
            },
            {
              name: "--dbpass",
              requiresSeparator: true,
              description:
                "Password to pass to mysqlcheck. Defaults to DB_PASSWORD",
              args: {
                name: "value",
                suggestions: [{ name: "DB_PASSWORD" }],
              },
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysqldump. Refer to mysqldump docs",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration",
            },
          ],
        },
        {
          name: "prefix",
          description: "Displays the database table prefix",
        },
        {
          name: "query",
          description: "Executes a SQL query against the database",
          args: {
            name: "sql",
            description:
              "A SQL query. If not passed, will try to read from STDIN",
          },
          options: [
            {
              name: "--dbuser",
              requiresSeparator: true,
              description: "Username to pass to mysql. Defaults to DB_USER",
              args: {
                name: "value",
                suggestions: [{ name: "DB_USER" }],
              },
            },
            {
              name: "--dbpass",
              requiresSeparator: true,
              description: "Password to pass to mysql. Defaults to DB_PASSWORD",
              args: {
                name: "value",
                suggestions: [{ name: "DB_PASSWORD" }],
              },
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysql. Refer to mysql docs",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration",
            },
          ],
        },
        {
          name: "repair",
          description: "Repairs the database",
          options: [
            {
              name: "--dbuser",
              requiresSeparator: true,
              description:
                "Username to pass to mysqlcheck. Defaults to DB_USER",
              args: {
                name: "value",
                suggestions: [{ name: "DB_USER" }],
              },
            },
            {
              name: "--dbpass",
              requiresSeparator: true,
              description:
                "Password to pass to mysqlcheck. Defaults to DB_PASSWORD",
              args: {
                name: "value",
                suggestions: [{ name: "DB_PASSWORD" }],
              },
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysqlcheck. Refer to mysqlcheck docs",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration",
            },
          ],
        },
        {
          name: "reset",
          description: "Removes all tables from the database",
          options: [
            {
              name: "--dbuser",
              requiresSeparator: true,
              description: "Username to pass to mysql. Defaults to DB_USER",
              args: {
                name: "value",
                suggestions: [{ name: "DB_USER" }],
              },
            },
            {
              name: "--dbpass",
              requiresSeparator: true,
              description: "Password to pass to mysql. Defaults to DB_PASSWORD",
              args: {
                name: "value",
                suggestions: [{ name: "DB_PASSWORD" }],
              },
            },
            {
              name: "--yes",
              description: "Answer yes to the confirmation message",
            },
          ],
        },
        {
          name: "search",
          description: "Finds a string in the database",
          args: [
            {
              name: "search",
              description:
                "String to search for. The search is case-insensitive by default",
            },
            {
              name: "tables",
              description:
                "One or more tables to search through for the string",
            },
          ],
          options: [
            {
              name: "--network",
              description:
                "Search through all the tables registered to $wpdb in a multisite install",
            },
            {
              name: "--all-tables-with-prefix",
              description:
                "Search through all tables that match the registered table prefix, even if not registered on $wpdb. On one hand, sometimes plugins use tables without registering them to $wpdb. On another hand, this could return tables you don’t expect. Overrides –network",
            },
            {
              name: "--all-tables",
              description:
                "Search through ALL tables in the database, regardless of the prefix, and even if not registered on $wpdb. Overrides –network and –all-tables-with-prefix",
            },
            {
              name: "--before_context",
              requiresSeparator: true,
              description: "Number of characters to display before the match",
              args: {
                name: "num",
                suggestions: [{ name: "40" }],
              },
            },
            {
              name: "--after_context",
              requiresSeparator: true,
              description: "Number of characters to display after the match",
              args: {
                name: "num",
                suggestions: [{ name: "40" }],
              },
            },
            {
              name: "--regex",
              description:
                "Runs the search as a regular expression (without delimiters). The search becomes case-sensitive (i.e. no PCRE flags are added). Delimiters must be escaped if they occur in the expression. Because the search is run on individual columns, you can use the ^ and $ tokens to mark the start and end of a match, respectively",
            },
            {
              name: "--regex-flags",
              requiresSeparator: true,
              description:
                "Pass PCRE modifiers to the regex search (e.g. ‘i’ for case-insensitivity)",
              args: { name: "regex-flags" },
            },
            {
              name: "--regex-delimiter",
              requiresSeparator: true,
              description:
                "The delimiter to use for the regex. It must be escaped if it appears in the search string. The default value is the result of chr(1)",
              args: { name: "regex-delimiter" },
            },
            {
              name: "--table_column_once",
              description:
                "Output the ‘table:column’ line once before all matching row lines in the table column rather than before each matching row",
            },
            {
              name: "--one_line",
              description:
                "Place the ‘table:column’ output on the same line as the row id and match (‘table:column:id:match’). Overrides –table_column_once",
            },
            {
              name: "--matches_only",
              description:
                "Only output the string matches (including context). No ‘table:column’s or row ids are outputted",
            },
            {
              name: "--stats",
              description:
                "Output stats on the number of matches found, time taken, tables/columns/rows searched, tables skipped",
            },
            {
              name: "--table_column_color",
              requiresSeparator: true,
              description:
                "Percent color code to use for the ‘table:column’ output. For a list of available percent color codes, see below. Default ‘%G’ (bright green)",
              args: { name: "table_column_color" },
            },
            {
              name: "--id_color",
              requiresSeparator: true,
              description:
                "Percent color code to use for the row id output. For a list of available percent color codes, see below. Default ‘%Y’ (bright yellow)",
              args: { name: "id_color" },
            },
            {
              name: "--match_color",
              requiresSeparator: true,
              description:
                "Percent color code to use for the match (unless both before and after context are 0, when no color code is used). For a list of available percent color codes, see below. Default ‘%3%k’ (black on a mustard background)",
              args: { name: "match_color" },
            },
          ],
        },
        {
          name: "size",
          description: "Displays the database name and size",
          options: [
            {
              name: "--size_format",
              requiresSeparator: true,
              description: "Display the database size only, as a bare number",
              args: {
                name: "format",
                suggestions: [
                  { name: "b" },
                  { name: "kb" },
                  { name: "mb" },
                  { name: "gb" },
                  { name: "tb" },
                  { name: "B" },
                  { name: "KB" },
                  { name: "KiB" },
                  { name: "MB" },
                  { name: "MiB" },
                  { name: "GB" },
                  { name: "GiB" },
                  { name: "TB" },
                  { name: "TiB" },
                ],
              },
            },
            {
              name: "--tables",
              description:
                "Display each table name and size instead of the database size",
            },
            {
              name: "--human-readable",
              description: "Display database sizes in human readable formats",
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "options",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
            {
              name: "--scope",
              requiresSeparator: true,
              description:
                "Can be all, global, ms_global, blog, or old tables. Defaults to all",
              args: { name: "scope" },
            },
            {
              name: "--network",
              description: "List all the tables in a multisite install",
            },
            {
              name: "--all-tables-with-prefix",
              description:
                "List all tables that match the table prefix even if not registered on $wpdb. Overrides –network",
            },
            {
              name: "--all-tables",
              description:
                "List all tables in the database, regardless of the prefix, and even if not registered on $wpdb. Overrides –all-tables-with-prefix",
            },
          ],
        },
        {
          name: "tables",
          description: "Lists the database tables",
          args: {
            name: "table",
            description:
              "List tables based on wildcard search, e.g. ‘wp_*_options’ or ‘wp_post?’",
          },
          options: [
            {
              name: "--scope",
              requiresSeparator: true,
              description:
                "Can be all, global, ms_global, blog, or old tables. Defaults to all",
              args: { name: "scope" },
            },
            {
              name: "--network",
              description: "List all the tables in a multisite install",
            },
            {
              name: "--all-tables-with-prefix",
              description:
                "List all tables that match the table prefix even if not registered on $wpdb. Overrides –network",
            },
            {
              name: "--all-tables",
              description:
                "List all tables in the database, regardless of the prefix, and even if not registered on $wpdb. Overrides –all-tables-with-prefix",
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "options",
                suggestions: [{ name: "list" }, { name: "csv" }],
              },
            },
          ],
        },
      ],
    },
    {
      name: "dist-archive",
      description:
        "Create a distribution archive based on a project’s .distignore file",
      args: [
        {
          name: "path",
          description: "Path to the project that includes a .distignore file",
          template: "folders",
        },
        {
          name: "target",
          template: "filepaths",
          description:
            "Path and file name for the distribution archive. Defaults to project directory name plus version, if discoverable",
        },
      ],
      options: [
        {
          name: "--create-target-dir",
          description: "Automatically create the target directory as needed",
        },
        {
          name: "--format",
          requiresSeparator: true,
          description: "Choose the format for the archive",
          args: {
            name: "options",
            suggestions: [{ name: "zip" }, { name: "targz" }],
          },
        },
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
    },
    {
      name: "embed",
      description: "Inspects oEmbed providers, clears embed cache, and more",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "cache",
          description: "Finds, triggers, and deletes oEmbed caches",
          subcommands: [
            {
              name: "clear",
              description: "Deletes all oEmbed caches for a given post",
              args: {
                name: "post_id",
                description: "ID of the post to clear the cache for",
              },
            },
            {
              name: "find",
              description: "Finds an oEmbed cache post ID for a given URL",
              args: {
                name: "url",
                description: "ID of the post to clear the cache for",
              },
              options: [
                {
                  name: "--width",
                  requiresSeparator: true,
                  description:
                    "Width of the embed in pixels. Part of cache key so must match. Defaults to content_width if set else 500px, so is theme and context dependent",
                  args: { name: "width" },
                },
                {
                  name: "--height",
                  requiresSeparator: true,
                  description:
                    "Height of the embed in pixels. Part of cache key so must match. Defaults to 1.5 * default width (content_width or 500px), to a maximum of 1000px",
                  args: { name: "height" },
                },
                {
                  name: "--discover",
                  description:
                    "Whether to search with the discover attribute set or not. Part of cache key so must match. If not given, will search with attribute: unset, ‘1’, ‘0’, returning first",
                },
              ],
            },
            {
              name: "trigger",
              description:
                "Triggers the caching of all oEmbed results for a given post",
              args: {
                name: "post_id",
                description: "ID of the post to do the caching for",
              },
            },
          ],
        },
        {
          name: "fetch",
          description: "Attempts to convert a URL into embed HTML",
          args: {
            name: "url",
            description: "URL to retrieve oEmbed data for",
          },
          options: [
            {
              name: "--width",
              requiresSeparator: true,
              description: "Width of the embed in pixels",
              args: { name: "width" },
            },
            {
              name: "--height",
              requiresSeparator: true,
              description: "Height of the embed in pixels",
              args: { name: "height" },
            },
            {
              name: "--post-id",
              requiresSeparator: true,
              description: "Cache oEmbed response for a given post",
              args: { name: "id" },
            },
            {
              name: "--discover",
              description: "Enable oEmbed discovery. Defaults to true",
            },
            {
              name: "--skip-cache",
              description:
                "Ignore already cached oEmbed responses. Has no effect if using the ‘raw’ option, which doesn’t use the cache",
            },
            {
              name: "--skip-sanitization",
              description:
                "Remove the filter that WordPress from 4.4 onwards uses to sanitize oEmbed responses. Has no effect if using the ‘raw’ option, which by-passes sanitization",
            },
            {
              name: "--do-shortcode",
              description:
                "If the URL is handled by a registered embed handler and returns a shortcode, do shortcode and return result. Has no effect if using the ‘raw’ option, which by-passes handlers",
            },
            {
              name: "--limit-response-size",
              requiresSeparator: true,
              description:
                "Limit the size of the resulting HTML when using discovery. Default 150 KB (the standard WordPress limit). Not compatible with ‘no-discover’",
              args: { name: "size" },
            },
            {
              name: "--raw",
              description:
                "Return the raw oEmbed response instead of the resulting HTML. Ignores the cache and does not sanitize responses or use registered embed handlers",
            },
            {
              name: "--raw-format",
              requiresSeparator: true,
              description: "The serialization format for the value",
              args: {
                name: "json|xml",
                suggestions: [{ name: "json" }, { name: "xml" }],
              },
            },
          ],
        },
        {
          name: "handler",
          description: "Retrieves embed handlers",
          subcommands: [
            {
              name: "list",
              description: "Lists all available embed handlers",
              options: [
                {
                  name: "--field",
                  requiresSeparator: true,
                  description: "Display the value of a single field",
                  args: { name: "field" },
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description: "Limit the output to specific fields",
                  args: { name: "fields" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "provider",
          description: "Retrieves oEmbed providers",
          subcommands: [
            {
              name: "list",
              description: "Lists all available oEmbed providers",
              options: [
                {
                  name: "--field",
                  requiresSeparator: true,
                  description: "Display the value of a single field",
                  args: { name: "field" },
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description: "Limit the output to specific fields",
                  args: { name: "fields" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                    ],
                  },
                },
              ],
            },
            {
              name: "match",
              description: "Gets the matching provider for a given URL",
              args: {
                name: "url",
                description: "URL to retrieve provider for",
              },
              options: [
                {
                  name: "--discover",
                  description:
                    "Whether to use oEmbed discovery or not. Defaults to true",
                },
                {
                  name: "--limit-response-size",
                  requiresSeparator: true,
                  description:
                    "Limit the size of the resulting HTML when using discovery. Default 150 KB (the standard WordPress limit). Not compatible with ‘no-discover’",
                  args: { name: "size" },
                },
                {
                  name: "--link-type",
                  requiresSeparator: true,
                  description:
                    "Whether to accept only a certain link type when using discovery. Defaults to any (json or xml), preferring json. Not compatible with ‘no-discover’",
                  args: {
                    name: "json|xml",
                    suggestions: [{ name: "json" }, { name: "xml" }],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "eval",
      description: "Executes arbitrary PHP code",
      args: {
        name: "php-code",
        description: "The code to execute, as a string",
      },
      options: [
        {
          name: "--skip-wordpress",
          description: "Execute code without loading WordPress",
        },
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
    },
    {
      name: "eval-file",
      description: "Loads and executes a PHP file",
      args: [
        {
          name: "file",
          description:
            "The path to the PHP file to execute. Use ‘-‘ to run code from STDIN",
        },
        {
          name: "arg",
          description:
            "One or more arguments to pass to the file. They are placed in the $args variable",
        },
      ],
      options: [
        {
          name: "--skip-wordpress",
          description: "Load and execute file without loading WordPress",
        },
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
    },
    {
      name: "export",
      description: "Exports WordPress content to a WXR file",
      options: [
        {
          name: "--dir",
          requiresSeparator: true,
          description:
            "Full path to directory where WXR export files should be stored. Defaults to current working directory",
          args: { name: "dirname", template: "folders" },
        },
        {
          name: "--stdout",
          description:
            "Output the whole XML using standard output (incompatible with –dir=)",
        },
        {
          name: "--skip_comments",
          description: "Don’t include comments in the WXR export file",
        },
        {
          name: "--max_file_size",
          requiresSeparator: true,
          description:
            "A single export file should have this many megabytes. -1 for unlimited",
          args: {
            name: "MB",
            suggestions: [{ name: "15" }],
          },
        },
        {
          name: "--start_date",
          requiresSeparator: true,
          description:
            "Export only posts published after this date, in format YYYY-MM-DD",
          args: { name: "date" },
        },
        {
          name: "--end_date",
          requiresSeparator: true,
          description:
            "Export only posts published before this date, in format YYYY-MM-DD",
          args: { name: "date" },
        },
        {
          name: "--post_type",
          requiresSeparator: true,
          description:
            "Export only posts with this post_type. Separate multiple post types with a comma",
          args: {
            name: "post-type",
            suggestions: [{ name: "any" }],
          },
        },
        {
          name: "--post_type__not_in",
          requiresSeparator: true,
          description:
            "Export all post types except those identified. Separate multiple post types with a comma. Defaults to none",
          args: { name: "post-type" },
        },
        {
          name: "--post_in",
          requiresSeparator: true,
          description:
            "Export all posts specified as a comma- or space-separated list of IDs. Post’s attachments won’t be exported unless –with_attachments is specified",
          args: { name: "pid" },
        },
        {
          name: "--with_attachments",
          description:
            "Force including attachments in case –post__in has been specified",
        },
        {
          name: "--start_id",
          requiresSeparator: true,
          description:
            "Export only posts with IDs greater than or equal to this post ID",
          args: { name: "pid" },
        },
        {
          name: "--max_num_posts",
          requiresSeparator: true,
          description:
            "Export no more than <num> posts (excluding attachments)",
          args: { name: "num" },
        },
        {
          name: "--author",
          requiresSeparator: true,
          description:
            "Export only posts by this author. Can be either user login or user ID",
          args: { name: "author" },
        },
        {
          name: "--category",
          requiresSeparator: true,
          description: "Export only posts in this category",
          args: { name: "category" },
        },
        {
          name: "--post_status",
          requiresSeparator: true,
          description: "Export only posts with this status",
          args: { name: "status" },
        },
        {
          name: "--filename_format",
          requiresSeparator: true,
          description:
            "Use a custom format for export filenames. Defaults to ‘{site}.wordpress.{date}.{n}.xml’",
          args: { name: "format" },
        },
      ],
    },
    {
      name: "find",
      description: "Find WordPress installations on the filesystem",
      args: {
        name: "path",
        template: "folders",
        description: "Path to search the subdirectories of",
      },
      options: [
        {
          name: "--skip-ignored-paths",
          description: "Skip the paths that are ignored by default",
        },
        {
          name: "--include_ignored_paths",
          requiresSeparator: true,
          description:
            "Include additional ignored paths as CSV (e.g. ‘/sys-backup/,/temp/’)",
          args: { name: "paths" },
        },
        {
          name: "--max_depth",
          requiresSeparator: true,
          description: "Only recurse to a specified depth, inclusive",
          args: { name: "max-depth" },
        },
        {
          name: "--fields",
          requiresSeparator: true,
          description: "Limit the output to specific row fields",
          args: { name: "fields" },
        },
        {
          name: "--field",
          requiresSeparator: true,
          description: "Output a specific field for each row",
          args: { name: "field" },
        },
        {
          name: "--format",
          requiresSeparator: true,
          description: "Render output in a particular format",
          args: {
            name: "options",
            suggestions: [
              { name: "table" },
              { name: "json" },
              { name: "csv" },
              { name: "yaml" },
              { name: "count" },
            ],
          },
        },
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
    },
    {
      name: "help",
      description: "Gets help on WP-CLI, or on a specific command",
      args: {
        name: "command",
        description: "Get help on a specific command",
      },
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
    },
    {
      name: "i18n",
      description: "Provides internationalization tools for WordPress projects",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "make-json",
          description:
            "Extract JavaScript strings from PO files and add them to individual JSON files",
          args: [
            {
              name: "source",
              template: "filepaths",
              description:
                "Path to an existing PO file or a directory containing multiple PO files",
            },
            {
              name: "destination",
              template: "folders",
              description:
                "Path to the destination directory for the resulting JSON files. Defaults to the source directory",
            },
          ],
          options: [
            {
              name: "--purge",
              description:
                "Whether to purge the strings that were extracted from the original source file. Defaults to true, use --no-purge to skip the removal",
            },
            {
              name: "--pretty-print",
              description: "Pretty-print resulting JSON files",
            },
          ],
        },
        {
          name: "make-mo",
          description: "Create MO files from PO files",
          args: [
            {
              name: "source",
              template: "filepaths",
              description:
                "Path to an existing PO file or a directory containing multiple PO files",
            },
            {
              name: "destination",
              template: "folders",
              description:
                "Path to the destination directory for the resulting JSON files. Defaults to the source directory",
            },
          ],
        },
        {
          name: "make-pot",
          description: "Create a POT file for a WordPress project",
          args: [
            {
              name: "source",
              description: "Directory to scan for string extraction",
            },
            {
              name: "destination",
              description: "Name of the resulting POT file",
            },
          ],
          options: [
            {
              name: "--slug",
              requiresSeparator: true,
              description:
                "Plugin or theme slug. Defaults to the source directory’s basename",
              args: { name: "slug" },
            },
            {
              name: "--domain",
              requiresSeparator: true,
              description:
                "Text domain to look for in the source code, unless the --ignore-domain option is used. By default, the “Text Domain” header of the plugin or theme is used. If none is provided, it falls back to the project slug",
              args: { name: "domain" },
            },
            {
              name: "--ignore-domain",
              description:
                "Ignore the text domain completely and extract strings with any text domain",
            },
            {
              name: "--merge",
              requiresSeparator: true,
              description:
                "Comma-separated list of POT files whose contents should be merged with the extracted strings. If left empty, defaults to the destination POT file. POT file headers will be ignored",
              args: { name: "paths" },
            },
            {
              name: "--subtract",
              requiresSeparator: true,
              description:
                "Comma-separated list of POT files whose contents should act as some sort of blacklist for string extraction. Any string which is found on that blacklist will not be extracted. This can be useful when you want to create multiple POT files from the same source directory with slightly different content and no duplicate strings between them",
              args: { name: "paths" },
            },
            {
              name: "--include",
              requiresSeparator: true,
              description:
                "Comma-separated list of files and paths that should be used for string extraction. If provided, only these files and folders will be taken into account for string extraction. For example, --include='src,my-file.php will ignore anything besides my-file.php and files in the src directory. Simple glob patterns can be used, i.e. --include=foo-*.php includes any PHP file with the foo- prefix. Leading and trailing slashes are ignored, i.e. /my/directory/ is the same as my/directory",
              args: { name: "paths" },
            },
            {
              name: "--exclude",
              requiresSeparator: true,
              description:
                "Comma-separated list of files and paths that should be skipped for string extraction. For example, --exclude='.github,myfile.php would ignore any strings found within myfile.php or the .github folder. Simple glob patterns can be used, i.e. --exclude=foo-*.php excludes any PHP file with the foo- prefix. Leading and trailing slashes are ignored, i.e. /my/directory/ is the same as my/directory. The following files and folders are always excluded: node_modules, .git, .svn, .CVS, .hg, vendor, *.min.js",
              args: { name: "paths" },
            },
            {
              name: "--headers",
              requiresSeparator: true,
              description:
                "Array in JSON format of custom headers which will be added to the POT file. Defaults to empty array",
              args: { name: "headers" },
            },
            {
              name: "--skip-js",
              description:
                "Skips JavaScript string extraction. Useful when this is done in another build step, e.g. through Babel",
            },
            {
              name: "--skip-php",
              description: "Skips PHP string extraction",
            },
            {
              name: "--skip-block-json",
              description: "Skips string extraction from block.json files",
            },
            {
              name: "--skip-audit",
              description:
                "Skips string audit where it tries to find possible mistakes in translatable strings. Useful when running in an automated environment",
            },
            {
              name: "--file-comment",
              requiresSeparator: true,
              description:
                "String that should be added as a comment to the top of the resulting POT file. By default, a copyright comment is added for WordPress plugins and themes in the following manner: Copyright (C) 2018 Example Plugin Author. This file is distributed under the same license as the Example Plugin package. If a plugin or theme specifies a license in their main plugin file or stylesheet, the comment looks like this: Copyright (C) 2018 Example Plugin Author. This file is distributed under the GPLv2",
              args: { name: "file-comment" },
            },
            {
              name: "--package-name",
              requiresSeparator: true,
              description:
                "Name to use for package name in the resulting POT file’s Project-Id-Version header. Overrides plugin or theme name, if applicable",
              args: { name: "name" },
            },
          ],
        },
      ],
    },
    {
      name: "import",
      description: "Imports content from a given WXR file",
      args: {
        name: "file",
        template: "filepaths",
        description:
          "Path to one or more valid WXR files for importing. Directories are also accepted",
      },
      options: [
        {
          name: "--authors",
          requiresSeparator: true,
          description:
            "How the author mapping should be handled. Options are ‘create’, ‘mapping.csv’, or ‘skip’. The first will create any non-existent users from the WXR file. The second will read author mapping associations from a CSV, or create a CSV for editing if the file path doesn’t exist. The CSV requires two columns, and a header row like “old_user_login,new_user_login”. The last option will skip any author mapping",
          args: { name: "authors" },
        },
        {
          name: "--skip",
          requiresSeparator: true,
          description:
            "Skip importing specific data. Supported options are: ‘attachment’ and ‘image_resize’ (skip time-consuming thumbnail generation)",
          args: { name: "data-type" },
        },
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
    },
    {
      name: "language",
      description: "Installs, activates, and manages language packs",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "core",
          description: "Installs, activates, and manages core language packs",
          subcommands: [
            {
              name: "activate",
              description: "Activates a given language",
              args: {
                name: "language",
                description: "Language code to activate",
              },
            },
            {
              name: "install",
              description: "Installs a given language",
              args: {
                name: "language",
                description: "Language code to install",
              },
              options: [
                {
                  name: "--activate",
                  description:
                    "If set, the language will be activated immediately after install",
                },
              ],
            },
            {
              name: "is-installed",
              description: "Checks if a given language is installed",
              args: {
                name: "language",
                description: "Language code to check",
              },
            },
            {
              name: "list",
              description: "Lists all available languages",
              options: [
                {
                  name: "--field",
                  requiresSeparator: true,
                  description: "Display the value of a single field",
                  args: { name: "field" },
                },
                {
                  name: "--field=value",
                  insertValue: "--",
                  description: "Filter results by key=value pairs",
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description: "Limit the output to specific fields",
                  args: { name: "fields" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                    ],
                  },
                },
              ],
            },
            {
              name: "uninstall",
              description: "Uninstalls a given language",
              args: {
                name: "language",
                description: "Language code to uninstall",
              },
            },
            {
              name: "update",
              description: "Updates installed languages for core",
              options: [
                {
                  name: "--dry-run",
                  description: "Preview which translations would be updated",
                },
              ],
            },
          ],
        },
        {
          name: "plugin",
          description: "Installs, activates, and manages plugin language packs",
          subcommands: [
            {
              name: "install",
              description: "Installs a given language for a plugin",
              args: [
                {
                  name: "plugin",
                  description: "Plugin to install language for",
                },
                {
                  name: "language",
                  description: "Language code to install",
                },
              ],
              options: [
                {
                  name: "--all",
                  description:
                    "If set, languages for all plugins will be installed",
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description:
                    "Render output in a particular format. Used when installing languages for all plugins",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "summary" },
                    ],
                  },
                },
              ],
            },
            {
              name: "is-installed",
              description: "Checks if a given language is installed",
              args: [
                {
                  name: "plugin",
                  description: "Plugin to check for",
                },
                {
                  name: "language",
                  description: "Language code to check",
                },
              ],
            },
            {
              name: "list",
              description:
                "Lists all available languages for one or more plugins",
              args: {
                name: "plugin",
                description: "One or more plugins to list languages for",
              },
              options: [
                {
                  name: "--all",
                  description:
                    "If set, languages for all plugins will be listed",
                },
                {
                  name: "--field",
                  requiresSeparator: true,
                  description: "Display the value of a single field",
                  args: { name: "field" },
                },
                {
                  name: "--field=value",
                  insertValue: "--",
                  description: "Filter results by key=value pairs",
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description: "Limit the output to specific fields",
                  args: { name: "fields" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                    ],
                  },
                },
              ],
            },
            {
              name: "uninstall",
              description: "Uninstalls a given language for a plugin",
              args: [
                {
                  name: "plugin",
                  description: "Plugin to uninstall language for",
                },
                {
                  name: "language",
                  description: "Language code to uninstall",
                },
              ],
            },
            {
              name: "update",
              description:
                "Updates installed languages for one or more plugins",
              args: {
                name: "plugin",
                description: "One or more plugins to update languages for",
              },
              options: [
                {
                  name: "--all",
                  description:
                    "If set, languages for all plugins will be updated",
                },
                {
                  name: "--dry-run",
                  description: "Preview which translations would be updated",
                },
              ],
            },
          ],
        },
        {
          name: "theme",
          description: "Installs, activates, and manages theme language packs",
          subcommands: [
            {
              name: "install",
              description: "Installs a given language for a theme",
              args: [
                {
                  name: "theme",
                  description: "Theme to install language for",
                },
                {
                  name: "language",
                  description: "Language code to install",
                },
              ],
              options: [
                {
                  name: "--all",
                  description:
                    "If set, languages for all themes will be installed",
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description:
                    "Render output in a particular format. Used when installing languages for all themes",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "summary" },
                    ],
                  },
                },
              ],
            },
            {
              name: "is-installed",
              description: "Checks if a given language is installed",
              args: [
                {
                  name: "theme",
                  description: "Theme to install language for",
                },
                {
                  name: "language",
                  description: "Language code to install",
                },
              ],
            },
            {
              name: "list",
              description:
                "Lists all available languages for one or more themes",
              args: {
                name: "theme",
                description: "One or more themes to list languages for",
              },
              options: [
                {
                  name: "--all",
                  description:
                    "If set, available languages for all themes will be listed",
                },
                {
                  name: "--field",
                  requiresSeparator: true,
                  description: "Display the value of a single field",
                  args: { name: "field" },
                },
                {
                  name: "--field=value",
                  insertValue: "--",
                  description: "Filter results by key=value pairs",
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description: "Limit the output to specific fields",
                  args: { name: "fields" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                    ],
                  },
                },
              ],
            },
            {
              name: "uninstall",
              description: "Uninstalls a given language for a theme",
              args: [
                {
                  name: "theme",
                  description: "Theme to uninstall language for",
                },
                {
                  name: "language",
                  description: "Language code to uninstall",
                },
              ],
            },
            {
              name: "update",
              description: "Updates installed languages for one or more themes",
              args: {
                name: "theme",
                description: "One or more themes to update languages for",
              },
              options: [
                {
                  name: "--all",
                  description:
                    "If set, languages for all themes will be updated",
                },
                {
                  name: "--dry-run",
                  description: "Preview which translations would be updated",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "maintenance-mode",
      description:
        "Activates, deactivates or checks the status of the maintenance mode of a site",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "activate",
          description: "Activates maintenance mode",
          options: [
            {
              name: "--force",
              description: "Force maintenance mode activation operation",
            },
          ],
        },
        {
          name: "deactivate",
          description: "Deactivates maintenance mode",
        },
        {
          name: "is-active",
          description: "Detects maintenance mode status",
        },
        {
          name: "status",
          description: "Displays maintenance mode status",
        },
      ],
    },
    {
      name: "media",
      description:
        "Imports files as attachments, regenerates thumbnails, or lists registered image sizes",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "fix-orientation",
          description: "Fix image orientation for one or more attachments",
          args: {
            name: "attachment-id",
            description: "One or more IDs of the attachments to regenerate",
          },
          options: [
            {
              name: "--dry-run",
              description:
                "Check images needing orientation without performing the operation",
            },
          ],
        },
        {
          name: "image-size",
          description: "Lists image sizes registered with WordPress",
          options: [
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific fields. Defaults to all fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "json" },
                  { name: "csv" },
                  { name: "yaml" },
                  { name: "count" },
                ],
              },
            },
          ],
        },
        {
          name: "import",
          description: "Creates attachments from local files or URLs",
          args: {
            name: "file",
            template: "filepaths",
            description:
              "Path to file or files to be imported. Supports the glob(3) capabilities of the current shell. If file is recognized as a URL (for example, with a scheme of http or ftp), the file will be downloaded to a temp file before being sideloaded",
          },
          options: [
            {
              name: "--post_id",
              requiresSeparator: true,
              description: "ID of the post to attach the imported files to",
              args: { name: "post_id" },
            },
            {
              name: "--title",
              requiresSeparator: true,
              description: "Attachment title (post title field)",
              args: { name: "title" },
            },
            {
              name: "--caption",
              requiresSeparator: true,
              description: "Caption for attachent (post excerpt field)",
              args: { name: "caption" },
            },
            {
              name: "--alt",
              requiresSeparator: true,
              description: "Alt text for image (saved as post meta)",
              args: { name: "alt_text" },
            },
            {
              name: "--desc",
              requiresSeparator: true,
              description:
                "'Description' field (post content) of attachment post",
              args: { name: "description" },
            },
            {
              name: "--skip-copy",
              description:
                "If set, media files (local only) are imported to the library but not moved on disk. File names will not be run through wp_unique_filename() with this set",
            },
            {
              name: "--preserve-filetime",
              description:
                "Use the file modified time as the post published & modified dates. Remote files will always use the current time",
            },
            {
              name: "--featured_image",
              description:
                "If set, set the imported image as the Featured Image of the post its attached to",
            },
            {
              name: "--porcelain",
              description: "Output just the new attachment ID",
            },
          ],
        },
        {
          name: "regenerate",
          description: "Regenerates thumbnails for one or more attachments",
          args: {
            name: "attachment-id",
            description: "One or more IDs of the attachments to regenerate",
          },
          options: [
            {
              name: "--image_size",
              requiresSeparator: true,
              description:
                "Name of the image size to regenerate. Only thumbnails of this image size will be regenerated, thumbnails of other image sizes will not",
              args: { name: "image_size" },
            },
            {
              name: "--skip-delete",
              description:
                "Skip deletion of the original thumbnails. If your thumbnails are linked from sources outside your control, it’s likely best to leave them around. Defaults to false",
            },
            {
              name: "--only-missing",
              description:
                "Only generate thumbnails for images missing image sizes",
            },
            {
              name: "--yes",
              description:
                "Answer yes to the confirmation message. Confirmation only shows when no IDs passed as arguments",
            },
          ],
        },
      ],
    },
    {
      name: "menu",
      description:
        "Lists, creates, assigns, and deletes the active theme’s navigation menus",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "create",
          description: "Creates a new menu",
          args: {
            name: "menu-name",
            description: "A descriptive name for the menu",
          },
          options: [
            {
              name: "--porcelain",
              description: "Output just the new menu ID",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes one or more menus",
          args: {
            name: "menu",
            description: "The name, slug, or term ID for the menu(s)",
          },
        },
        {
          name: "item",
          description: "List, add, and delete items associated with a menu",
          subcommands: [
            {
              name: "add-custom",
              description: "Adds a custom menu item",
              args: [
                {
                  name: "menu",
                  description: "The name, slug, or term ID for the menu",
                },
                {
                  name: "title",
                  description: "Title for the link",
                },
                {
                  name: "link",
                  description: "Target URL for the link",
                },
              ],
              options: [
                {
                  name: "--description",
                  requiresSeparator: true,
                  description: "Set a custom description for the menu item",
                  args: { name: "description" },
                },
                {
                  name: "--attr-title",
                  requiresSeparator: true,
                  description: "Set a custom title attribute for the menu item",
                  args: { name: "attr-title" },
                },
                {
                  name: "--target",
                  requiresSeparator: true,
                  description: "Set a custom link target for the menu item",
                  args: { name: "target" },
                },
                {
                  name: "--classes",
                  requiresSeparator: true,
                  description: "Set a custom link classes for the menu item",
                  args: { name: "classes" },
                },
                {
                  name: "--position",
                  requiresSeparator: true,
                  description: "Specify the position of this menu item",
                  args: { name: "position" },
                },
                {
                  name: "--parent-id",
                  requiresSeparator: true,
                  description:
                    "Make this menu item a child of another menu item",
                  args: { name: "parent-id" },
                },
                {
                  name: "--porcelain",
                  description: "Output just the new menu item ID",
                },
              ],
            },
            {
              name: "add-post",
              description: "Adds a post as a menu item",
              args: [
                {
                  name: "menu",
                  description: "The name, slug, or term ID for the menu",
                },
                {
                  name: "post-id",
                  description: "Post ID to add to the menu",
                },
              ],
              options: [
                {
                  name: "--title",
                  requiresSeparator: true,
                  description: "Set a custom title for the menu item",
                  args: { name: "title" },
                },
                {
                  name: "--link",
                  requiresSeparator: true,
                  description: "Set a custom url for the menu item",
                  args: { name: "link" },
                },
                {
                  name: "--description",
                  requiresSeparator: true,
                  description: "Set a custom description for the menu item",
                  args: { name: "description" },
                },
                {
                  name: "--attr-title",
                  requiresSeparator: true,
                  description: "Set a custom title attribute for the menu item",
                  args: { name: "attr-title" },
                },
                {
                  name: "--target",
                  requiresSeparator: true,
                  description: "Set a custom link target for the menu item",
                  args: { name: "target" },
                },
                {
                  name: "--classes",
                  requiresSeparator: true,
                  description: "Set a custom link classes for the menu item",
                  args: { name: "classes" },
                },
                {
                  name: "--position",
                  requiresSeparator: true,
                  description: "Specify the position of this menu item",
                  args: { name: "position" },
                },
                {
                  name: "--parent-id",
                  requiresSeparator: true,
                  description:
                    "Make this menu item a child of another menu item",
                  args: { name: "parent-id" },
                },
                {
                  name: "--porcelain",
                  description: "Output just the new menu item id",
                },
              ],
            },
            {
              name: "add-term",
              description: "Adds a taxonomy term as a menu item",
              args: [
                {
                  name: "menu",
                  description: "The name, slug, or term ID for the menu",
                },
                {
                  name: "taxonomy",
                  description: "Taxonomy of the term to be added",
                },
                {
                  name: "term-id",
                  description: "Term ID of the term to be added",
                },
              ],
              options: [
                {
                  name: "--title",
                  requiresSeparator: true,
                  description: "Set a custom title for the menu item",
                  args: { name: "title" },
                },
                {
                  name: "--link",
                  requiresSeparator: true,
                  description: "Set a custom url for the menu item",
                  args: { name: "link" },
                },
                {
                  name: "--description",
                  requiresSeparator: true,
                  description: "Set a custom description for the menu item",
                  args: { name: "description" },
                },
                {
                  name: "--attr-title",
                  requiresSeparator: true,
                  description: "Set a custom title attribute for the menu item",
                  args: { name: "attr-title" },
                },
                {
                  name: "--target",
                  requiresSeparator: true,
                  description: "Set a custom link target for the menu item",
                  args: { name: "target" },
                },
                {
                  name: "--classes",
                  requiresSeparator: true,
                  description: "Set a custom link classes for the menu item",
                  args: { name: "classes" },
                },
                {
                  name: "--position",
                  requiresSeparator: true,
                  description: "Specify the position of this menu item",
                  args: { name: "position" },
                },
                {
                  name: "--parent-id",
                  requiresSeparator: true,
                  description:
                    "Make this menu item a child of another menu item",
                  args: { name: "parent-id" },
                },
                {
                  name: "--porcelain",
                  description: "Output just the new menu item id",
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes one or more items from a menu",
              args: {
                name: "db-id",
                description: "Database ID for the menu item(s)",
              },
            },
            {
              name: "list",
              description: "Gets a list of items associated with a menu",
              args: {
                name: "menu",
                description: "The name, slug, or term ID for the menu",
              },
              options: [
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description: "Limit the output to specific object fields",
                  args: { name: "fields" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "count" },
                      { name: "ids" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Updates a menu item",
              args: {
                name: "db-id",
                description: "Database ID for the menu item",
              },
              options: [
                {
                  name: "--title",
                  requiresSeparator: true,
                  description: "Set a custom title for the menu item",
                  args: { name: "title" },
                },
                {
                  name: "--link",
                  requiresSeparator: true,
                  description: "Set a custom url for the menu item",
                  args: { name: "link" },
                },
                {
                  name: "--description",
                  requiresSeparator: true,
                  description: "Set a custom description for the menu item",
                  args: { name: "description" },
                },
                {
                  name: "--attr-title",
                  requiresSeparator: true,
                  description: "Set a custom title attribute for the menu item",
                  args: { name: "attr-title" },
                },
                {
                  name: "--target",
                  requiresSeparator: true,
                  description: "Set a custom link target for the menu item",
                  args: { name: "target" },
                },
                {
                  name: "--classes",
                  requiresSeparator: true,
                  description: "Set a custom link classes for the menu item",
                  args: { name: "classes" },
                },
                {
                  name: "--position",
                  requiresSeparator: true,
                  description: "Specify the position of this menu item",
                  args: { name: "position" },
                },
                {
                  name: "--parent-id",
                  requiresSeparator: true,
                  description:
                    "Make this menu item a child of another menu item",
                  args: { name: "parent-id" },
                },
              ],
            },
          ],
        },
        {
          name: "list",
          description: "Gets a list of menus",
          options: [
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific object fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "count" },
                  { name: "ids" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "location",
          description: "Assigns, removes, and lists a menu’s locations",
          subcommands: [
            {
              name: "assign",
              description: "Assigns a location to a menu",
              args: [
                {
                  name: "menu",
                  description: "The name, slug, or term ID for the menu",
                },
                {
                  name: "location",
                  description: "Location’s slug",
                },
              ],
            },
            {
              name: "list",
              description: "Lists locations for the current theme",
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "count" },
                      { name: "yaml" },
                      { name: "ids" },
                    ],
                  },
                },
              ],
            },
            {
              name: "remove",
              description: "Removes a location from a menu",
              args: [
                {
                  name: "menu",
                  description: "The name, slug, or term ID for the menu",
                },
                {
                  name: "location",
                  description: "Location’s slug",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "network",
      description: "Perform network-wide operations",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "meta",
          description:
            "Gets, adds, updates, deletes, and lists network custom fields",
          subcommands: [
            {
              name: "add",
              description: "Add a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to create",
                },
                {
                  name: "value",
                  description:
                    "The value of the meta field. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to delete",
                },
                {
                  name: "value",
                  description:
                    "The value to delete. If omitted, all rows with key will deleted",
                },
              ],
              options: [
                {
                  name: "--all",
                  description: "Delete all meta for the object",
                },
              ],
            },
            {
              name: "get",
              description: "Get meta field value",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to get",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Get value in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "var_export" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List all metadata associated with an object",
              args: {
                name: "id",
                description: "ID for the object",
              },
              options: [
                {
                  name: "--keys",
                  requiresSeparator: true,
                  description: "Limit output to metadata of specific keys",
                  args: { name: "keys" },
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description:
                    "Limit the output to specific row fields. Defaults to id,meta_key,meta_value",
                  args: { name: "fields" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "yaml" },
                      { name: "count" },
                    ],
                  },
                },
                {
                  name: "--orderby",
                  requiresSeparator: true,
                  description: "Set orderby which field",
                  args: {
                    name: "fields",
                    suggestions: [
                      { name: "id" },
                      { name: "meta_key" },
                      { name: "meta_value" },
                    ],
                  },
                },
                {
                  name: "--order",
                  requiresSeparator: true,
                  description: "Set ascending or descending order",
                  args: {
                    name: "order",
                    suggestions: [{ name: "asc" }, { name: "desc" }],
                  },
                },
                {
                  name: "--unserialize",
                  description: "Unserialize meta_value output",
                },
              ],
            },
            {
              name: "patch",
              description: "Update a nested value for a meta field",
              args: [
                {
                  name: "action",
                  description: "Patch action to perform",
                  suggestions: [
                    { name: "insert" },
                    { name: "update" },
                    { name: "delete" },
                  ],
                },
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to update",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to patch",
                },
                {
                  name: "value",
                  description:
                    "The new value. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "pluck",
              description: "Get a nested value from a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to get",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to pluck",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The output format of the value",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "plaintext" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to update",
                },
                {
                  name: "value",
                  description:
                    "The new value. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "option",
      description:
        "Retrieves and sets site options, including plugin and WordPress settings",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "add",
          description: "Adds a new option value",
          args: [
            {
              name: "key",
              description: "The name of the option to add",
            },
            {
              name: "value",
              description:
                "The value of the option to add. If omitted, the value is read from STDIN",
            },
          ],
          options: [
            {
              name: "--format",
              requiresSeparator: true,
              description: "The serialization format for the value",
              args: {
                name: "format",
                suggestions: [{ name: "plaintext" }, { name: "json" }],
              },
            },
            {
              name: "--autoload",
              requiresSeparator: true,
              description: "Should this option be automatically loaded",
              args: {
                name: "autoload",
                suggestions: [{ name: "'yes'" }, { name: "'no'" }],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an option",
          args: {
            name: "key",
            description: "Key for the option",
          },
        },
        {
          name: "get",
          description: "Gets the value for an option",
          args: {
            name: "key",
            description: "Key for the option",
          },
          options: [
            {
              name: "--format",
              requiresSeparator: true,
              description: "Get value in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "var_export" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "list",
          description: "Lists options and their values",
          options: [
            {
              name: "--search",
              requiresSeparator: true,
              description: "Use wildcards ( * and ? ) to match option name",
              args: { name: "search" },
            },
            {
              name: "--exclude",
              requiresSeparator: true,
              description:
                "Pattern to exclude. Use wildcards ( * and ? ) to match option name",
              args: { name: "exclude" },
            },
            {
              name: "--autoload",
              requiresSeparator: true,
              description:
                "Match only autoload options when value is on, and only not-autoload option when off",
              args: { name: "autoload" },
            },
            {
              name: "--transients",
              description:
                "List only transients. Use --no-transients to ignore all transients",
            },
            {
              name: "--no-transients",
              description:
                "List only transients. Use --no-transients to ignore all transients",
            },
            {
              name: "--unserialize",
              description: "Unserialize option values in output",
            },
            {
              name: "--field",
              requiresSeparator: true,
              description: "Prints the value of a single field",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific object fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description:
                "The serialization format for the value. total_bytes displays the total size of matching options in bytes",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "json" },
                  { name: "csv" },
                  { name: "count" },
                  { name: "yaml" },
                  { name: "total_bytes" },
                ],
              },
            },
            {
              name: "--orderby",
              requiresSeparator: true,
              description: "Set orderby which field",
              args: {
                name: "fields",
                suggestions: [
                  { name: "option_id" },
                  { name: "option_name" },
                  { name: "option_value" },
                ],
              },
            },
            {
              name: "--order",
              requiresSeparator: true,
              description: "Set ascending or descending order",
              args: {
                name: "order",
                suggestions: [{ name: "asc" }, { name: "desc" }],
              },
            },
          ],
        },
        {
          name: "patch",
          description: "Updates a nested value in an option",
          args: [
            {
              name: "action",
              description: "Patch action to perform",
              suggestions: [
                { name: "insert" },
                { name: "update" },
                { name: "delete" },
              ],
            },
            {
              name: "key",
              description: "The option name",
            },
            {
              name: "key-path",
              description:
                "The name(s) of the keys within the value to locate the value to patch",
            },
            {
              name: "value",
              description:
                "The new value. If omitted, the value is read from STDIN",
            },
          ],
          options: [
            {
              name: "--format",
              requiresSeparator: true,
              description: "The serialization format for the value",
              args: {
                name: "format",
                suggestions: [{ name: "plaintext" }, { name: "json" }],
              },
            },
          ],
        },
        {
          name: "pluck",
          description: "Gets a nested value from an option",
          args: [
            {
              name: "key",
              description: "The option name",
            },
            {
              name: "key-path",
              description:
                "The name(s) of the keys within the value to locate the value to pluck",
            },
          ],
          options: [
            {
              name: "--format",
              requiresSeparator: true,
              description: "The output format for the value",
              args: {
                name: "format",
                suggestions: [
                  { name: "plaintext" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "update",
          description: "Updates an option value",
          args: [
            {
              name: "key",
              description: "The name of the option to update",
            },
            {
              name: "value",
              description:
                "The new value. If omitted, the value is read from STDIN",
            },
          ],
          options: [
            {
              name: "--autoload",
              requiresSeparator: true,
              description:
                "Requires WP 4.2. Should this option be automatically loaded",
              args: {
                name: "autoload",
                suggestions: [{ name: "'yes'" }, { name: "'no" }],
              },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "The serialization format for the value",
              args: {
                name: "format",
                suggestions: [{ name: "plaintext" }, { name: "json" }],
              },
            },
          ],
        },
      ],
    },
    {
      name: "package",
      description: "Lists, installs, and removes WP-CLI packages",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "browse",
          description: "Browses WP-CLI packages available for installation",
          options: [
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific fields. Defaults to all fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "ids" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "install",
          description: "Installs a WP-CLI package",
          args: {
            name: "name|git|path|zip",
            description:
              "Name, git URL, directory path, or .zip file for the package to install. Names can optionally include a version constraint (e.g. wp-cli/server-command:@stable)",
          },
          options: [
            {
              name: "--insecure",
              description:
                "Retry downloads without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack",
            },
          ],
        },
        {
          name: "list",
          description: "Lists installed WP-CLI packages",
          options: [
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific fields. Defaults to all fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "ids" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "path",
          description:
            "Gets the path to an installed WP-CLI package, or the package directory",
          args: {
            name: "name",
            template: "folders",
            description: "Name of the package to get the directory for",
          },
        },
        {
          name: "uninstall",
          description: "Uninstalls a WP-CLI package",
          args: {
            name: "name",
            description: "Name of the package to uninstall",
          },
        },
        {
          name: "update",
          description:
            "Updates all installed WP-CLI packages to their latest version",
        },
      ],
    },
    {
      name: "plugin",
      description:
        "Manages plugins, including installs, activations, and updates",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "activate",
          description: "Activates one or more plugins",
          args: {
            name: "plugin",
            description: "One or more plugins to activate",
          },
          options: [
            {
              name: "--all",
              description: "If set, all plugins will be activated",
            },
            {
              name: "--network",
              description:
                "If set, the plugin will be activated for the entire multisite network",
            },
          ],
        },
        {
          name: "auto-updates",
          description: "Manages plugin auto-updates",
          subcommands: [
            {
              name: "disable",
              description: "Disables the auto-updates for a plugin",
              args: {
                name: "plugin",
                description: "One or more plugins to disable auto-updates for",
              },
              options: [
                {
                  name: "--all",
                  description:
                    "If set, auto-updates will be disabled for all plugins",
                },
                {
                  name: "--enabled-only",
                  description:
                    "If set, filters list of plugins to only include the ones that have auto-updates enabled",
                },
              ],
            },
            {
              name: "enable",
              description: "Enables the auto-updates for a plugin",
              args: {
                name: "plugin",
                description: "One or more plugins to enable auto-updates for",
              },
              options: [
                {
                  name: "--all",
                  description:
                    "If set, auto-updates will be enabled for all plugins",
                },
                {
                  name: "--disabled-only",
                  description:
                    "If set, filters list of plugins to only include the ones that have auto-updates disabled",
                },
              ],
            },
            {
              name: "status",
              description: "Shows the status of auto-updates for a plugin",
              args: {
                name: "plugin",
                description:
                  "One or more plugins to show the status of the auto-updates of",
              },
              options: [
                {
                  name: "--all",
                  description:
                    "If set, the status of auto-updates for all plugins will be shown",
                },
                {
                  name: "--enabled-only",
                  description:
                    "If set, filters list of plugins to only include the ones that have auto-updates enabled",
                },
                {
                  name: "--disabled-only",
                  description:
                    "If set, filters list of plugins to only include the ones that have auto-updates disabled",
                },
                {
                  name: "--field",
                  requiresSeparator: true,
                  description: "Only show the provided field",
                  args: { name: "field" },
                },
              ],
            },
          ],
        },
        {
          name: "deactivate",
          description: "Deactivates one or more plugins",
          args: {
            name: "plugin",
            description: "One or more plugins to deactivate",
          },
          options: [
            {
              name: "--uninstall",
              description: "Uninstall the plugin after deactivation",
            },
            {
              name: "--all",
              description: "If set, all plugins will be deactivated",
            },
            {
              name: "--network",
              description:
                "If set, the plugin will be deactivated for the entire multisite network",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes plugin files without deactivating or uninstalling",
          args: {
            name: "plugin",
            description: "One or more plugins to delete",
          },
          options: [
            {
              name: "--all",
              description: "If set, all plugins will be deleted",
            },
          ],
        },
        {
          name: "get",
          description: "Gets details about an installed plugin",
          args: {
            name: "plugin",
            description: "The plugin to get",
          },
          options: [
            {
              name: "--field",
              requiresSeparator: true,
              description:
                "Instead of returning the whole plugin, returns the value of a single field",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific fields. Defaults to all fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "install",
          description: "Installs one or more plugins",
          args: {
            name: "plugin|zip|url",
            description:
              "One or more plugins to install. Accepts a plugin slug, the path to a local zip file, or a URL to a remote zip file",
          },
          options: [
            {
              name: "--version",
              requiresSeparator: true,
              description:
                "If set, get that particular version from wordpress.org, instead of the stable version",
              args: { name: "version" },
            },
            {
              name: "--force",
              description:
                "If set, the command will overwrite any installed version of the plugin, without prompting for confirmation",
            },
            {
              name: "--activate",
              description:
                "If set, the plugin will be activated immediately after install",
            },
            {
              name: "--activate-network",
              description:
                "If set, the plugin will be network activated immediately after installl",
            },
            {
              name: "--insecure",
              description:
                "Retry downloads without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack",
            },
          ],
        },
        {
          name: "is-active",
          description: "Checks if a given plugin is active",
          args: {
            name: "plugin",
            description: "The plugin to check",
          },
          options: [
            {
              name: "--network",
              description: "If set, check if plugin is network-activated",
            },
          ],
        },
        {
          name: "is-installed",
          description: "Checks if a given plugin is installed",
          args: {
            name: "plugin",
            description: "The plugin to check",
          },
        },
        {
          name: "list",
          description: "Gets a list of plugins",
          options: [
            {
              name: "--field=value",
              insertValue: "--",
              description: "Filter results based on the value of a field",
            },
            {
              name: "--field",
              requiresSeparator: true,
              description: "Prints the value of a single field for each plugin",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific object fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "count" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
            {
              name: "--status",
              requiresSeparator: true,
              description: "Filter the output by plugin status",
              args: {
                name: "status",
                suggestions: [
                  { name: "active" },
                  { name: "active-network" },
                  { name: "dropin" },
                  { name: "inactive" },
                  { name: "must-use" },
                ],
              },
            },
          ],
        },
        {
          name: "path",
          description: "Gets the path to a plugin or to the plugin directory",
          args: {
            name: "plugin",
            description:
              "The plugin to get the path to. If not set, will return the path to the plugins directory",
          },
          options: [
            {
              name: "--dir",
              description:
                "If set, get the path to the closest parent directory, instead of the plugin file",
            },
          ],
        },
        {
          name: "search",
          description: "Searches the WordPress.org plugin directory",
          args: {
            name: "search",
            description: "The string to search for",
          },
          options: [
            {
              name: "--page",
              requiresSeparator: true,
              description: "Optional page to display",
              args: {
                name: "page",
                suggestions: [{ name: "1" }],
              },
            },
            {
              name: "--per-page",
              requiresSeparator: true,
              description: "Optional number of results to display",
              args: {
                name: "per-page",
                suggestions: [{ name: "10" }],
              },
            },
            {
              name: "--field",
              requiresSeparator: true,
              description: "Prints the value of a single field for each plugin",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Ask for specific fields from the API. Defaults to name,slug,author_profile,rating. Acceptable values:",
              args: {
                name: "fields",
                suggestions: [
                  { name: "name" },
                  { name: "slug" },
                  { name: "version" },
                  { name: "author" },
                  { name: "author_profile" },
                  { name: "contributors" },
                  { name: "requires" },
                  { name: "tested" },
                  { name: "compatibility" },
                  { name: "rating" },
                  { name: "ratings" },
                  { name: "num_ratings" },
                  { name: "homepage" },
                  { name: "description" },
                  { name: "short_description" },
                  { name: "sections" },
                  { name: "downloaded" },
                  { name: "last_updated" },
                  { name: "added" },
                  { name: "tags" },
                  { name: "versions" },
                  { name: "donate_link" },
                  { name: "banners" },
                  { name: "icons" },
                  { name: "active_installs" },
                  { name: "contributors" },
                  { name: "url" },
                ],
              },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "plaintext" },
                  { name: "table" },
                  { name: "csv" },
                  { name: "count" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "status",
          description: "Reveals the status of one or all plugins",
          args: {
            name: "plugin",
            description: "A particular plugin to show the status for",
          },
        },
        {
          name: "toggle",
          description: "Toggles a plugin’s activation state",
          args: {
            name: "plugin",
            description: "One or more plugins to toggle",
          },
          options: [
            {
              name: "--network",
              description:
                "If set, the plugin will be toggled for the entire multisite network",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstalls one or more plugins",
          args: {
            name: "plugin",
            description: "One or more plugins to uninstall",
          },
          options: [
            {
              name: "--deactivate",
              description:
                "Deactivate the plugin before uninstalling. Default behavior is to warn and skip if the plugin is active",
            },
            {
              name: "--skip-delete",
              description:
                "If set, the plugin files will not be deleted. Only the uninstall procedure will be run",
            },
            {
              name: "--all",
              description: "If set, all plugins will be uninstalled",
            },
          ],
        },
        {
          name: "update",
          description: "Updates one or more plugins",
          args: {
            name: "plugin",
            description: "One or more plugins to update",
          },
          options: [
            {
              name: "--all",
              description:
                "If set, all plugins that have updates will be updated",
            },
            {
              name: "--exclude",
              requiresSeparator: true,
              description:
                "Comma separated list of plugin names that should be excluded from updating",
              args: { name: "name" },
            },
            {
              name: "--minor",
              description:
                "Only perform updates for minor releases (e.g. from 1.3 to 1.4 instead of 2.0)",
            },
            {
              name: "--patch",
              description:
                "Only perform updates for patch releases (e.g. from 1.3 to 1.3.3 instead of 1.4)",
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "summary" },
                ],
              },
            },
            {
              name: "--version",
              requiresSeparator: true,
              description:
                "If set, the plugin will be updated to the specified version",
            },
            {
              name: "--dry-run",
              description: "Preview which plugins would be updated",
            },
            {
              name: "--insecure",
              description:
                "Retry downloads without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack",
            },
          ],
        },
        {
          name: "verify-checksums",
          description:
            "Verifies plugin files against WordPress.org’s checksums",
          args: {
            name: "plugin",
            description: "One or more plugins to verify",
          },
          options: [
            {
              name: "--all",
              description: "If set, all plugins will be verified",
            },
            {
              name: "--strict",
              description:
                "If set, even “soft changes” like readme.txt changes will trigger checksum errors",
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "json" },
                  { name: "csv" },
                  { name: "yaml" },
                  { name: "count" },
                ],
              },
            },
            {
              name: "--insecure",
              description:
                "Retry downloads without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack",
            },
          ],
        },
      ],
    },
    {
      name: "post",
      description: "Manages posts, content, and meta",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "create",
          description: "Creates a new post",
          args: {
            name: "file",
            description:
              "Read post content from <file>. If this value is present, the --post_content argument will be ignored. Passing - as the filename will cause post content to be read from STDIN",
          },
          options: [
            {
              name: "--post_author",
              requiresSeparator: true,
              description:
                "The ID of the user who added the post. Default is the current user ID",
              args: { name: "post_author" },
            },
            {
              name: "--post_date",
              requiresSeparator: true,
              description: "The date of the post. Default is the current time",
              args: { name: "post_date" },
            },
            {
              name: "--post_date_gmt",
              requiresSeparator: true,
              description:
                "The date of the post in the GMT timezone. Default is the value of $post_date",
              args: { name: "post_date_gmt" },
            },
            {
              name: "--post_content",
              requiresSeparator: true,
              description: "The post content. Default empty",
              args: { name: "post_content" },
            },
            {
              name: "--post_content_filtered",
              requiresSeparator: true,
              description: "The filtered post content. Default empty",
              args: { name: "post_content_filtered" },
            },
            {
              name: "--post_title",
              requiresSeparator: true,
              description: "The post title. Default empty",
              args: { name: "post_title" },
            },
            {
              name: "--post_excerpt",
              requiresSeparator: true,
              description: "The post excerpt. Default empty",
              args: { name: "post_excerpt" },
            },
            {
              name: "--post_status",
              requiresSeparator: true,
              description: "The post status. Default ‘draft’",
              args: { name: "post_status" },
            },
            {
              name: "--post_type",
              requiresSeparator: true,
              description: "The post type. Default ‘post’",
              args: { name: "post_type" },
            },
            {
              name: "--comment_status",
              requiresSeparator: true,
              description:
                "Whether the post can accept comments. Accepts ‘open’ or ‘closed’. Default is the value of ‘default_comment_status’ option",
              args: {
                name: "comment_status",
                suggestions: [{ name: "'open'" }, { name: "'closed" }],
              },
            },
            {
              name: "--ping_status",
              requiresSeparator: true,
              description:
                "Whether the post can accept pings. Accepts ‘open’ or ‘closed’. Default is the value of ‘default_ping_status’ option",
              args: {
                name: "ping_status",
                suggestions: [{ name: "'open'" }, { name: "'closed" }],
              },
            },
            {
              name: "--post_password",
              requiresSeparator: true,
              description: "The password to access the post. Default empty",
              args: { name: "post_password" },
            },
            {
              name: "--post_name",
              requiresSeparator: true,
              description:
                "The post name. Default is the sanitized post title when creating a new post",
              args: { name: "post_name" },
            },
            {
              name: "--from-post",
              requiresSeparator: true,
              description: "Post id of a post to be duplicated",
              args: { name: "post_id" },
            },
            {
              name: "--to_ping",
              requiresSeparator: true,
              description:
                "Space or carriage return-separated list of URLs to ping. Default empty",
              args: { name: "to_ping" },
            },
            {
              name: "--pinged",
              requiresSeparator: true,
              description:
                "Space or carriage return-separated list of URLs that have been pinged. Default empty",
              args: { name: "pinged" },
            },
            {
              name: "--post_modified",
              requiresSeparator: true,
              description:
                "The date when the post was last modified. Default is the current time",
              args: { name: "post_modified" },
            },
            {
              name: "--post_modified_gmt",
              requiresSeparator: true,
              description:
                "The date when the post was last modified in the GMT timezone. Default is the current time",
              args: { name: "post_modified_gmt" },
            },
            {
              name: "--post_parent",
              requiresSeparator: true,
              description:
                "Set this for the post it belongs to, if any. Default 0",
              args: {
                name: "post_parent",
                suggestions: [{ name: "0" }],
              },
            },
            {
              name: "--menu_order",
              requiresSeparator: true,
              description:
                "The order the post should be displayed in. Default 0",
              args: {
                name: "menu_order",
                suggestions: [{ name: "0" }],
              },
            },
            {
              name: "--post_mime_type",
              requiresSeparator: true,
              description: "The mime type of the post. Default empty",
              args: { name: "post_mime_type" },
            },
            {
              name: "--guid",
              requiresSeparator: true,
              description:
                "Global Unique ID for referencing the post. Default empty",
              args: { name: "guid" },
            },
            {
              name: "--post_category",
              requiresSeparator: true,
              description:
                "Array of category names, slugs, or IDs. Defaults to value of the ‘default_category’ option",
              args: { name: "post_category" },
            },
            {
              name: "--tags_input",
              requiresSeparator: true,
              description: "Array of tag names, slugs, or IDs. Default empty",
              args: { name: "tags_input" },
            },
            {
              name: "--tax_input",
              requiresSeparator: true,
              description:
                "Array of taxonomy terms keyed by their taxonomy name. Default empty",
              args: { name: "tax_input" },
            },
            {
              name: "--meta_input",
              requiresSeparator: true,
              description:
                "Array in JSON format of post meta values keyed by their post meta key. Default empty",
              args: { name: "meta_input" },
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Associative args for the new post. See wp_insert_post()",
            },
            {
              name: "--edit",
              description:
                "Immediately open system’s editor to write or edit post content. If content is read from a file, from STDIN, or from the --post_content argument, that text will be loaded into the editor",
            },
            {
              name: "--porcelain",
              description: "Output just the new post id",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an existing post",
          args: {
            name: "id",
            description: "One or more IDs of posts to delete",
          },
          options: [
            {
              name: "--force",
              description: "Skip the trash bin",
            },
            {
              name: "--defer-term-counting",
              description:
                "Recalculate term count in batch, for a performance boost",
            },
          ],
        },
        {
          name: "edit",
          description: "Launches system editor to edit post content",
          args: {
            name: "id",
            description: "The ID of the post to edit",
          },
        },
        {
          name: "exists",
          description: "Verifies whether a post exists",
          args: {
            name: "id",
            description: "The ID of the post to check",
          },
        },
        {
          name: "generate",
          description: "Generates some posts",
          options: [
            {
              name: "--count",
              requiresSeparator: true,
              description: "How many posts to generate?",
              args: {
                name: "number",
                suggestions: [{ name: "100" }],
              },
            },
            {
              name: "--post_type",
              requiresSeparator: true,
              description: "The type of the generated posts",
              args: {
                name: "type",
                suggestions: [{ name: "post" }],
              },
            },
            {
              name: "--post_status",
              requiresSeparator: true,
              description: "The status of the generated posts",
              args: {
                name: "status",
                suggestions: [{ name: "publish" }],
              },
            },
            {
              name: "--post_title",
              requiresSeparator: true,
              description: "The post title",
              args: { name: "post_title" },
            },
            {
              name: "--post_author",
              requiresSeparator: true,
              description: "The author of the generated posts",
              args: { name: "login" },
            },
            {
              name: "--post_date",
              requiresSeparator: true,
              description:
                "The date of the generated posts. Default: current date",
              args: { name: "yyyy-mm-dd-hh-ii-ss" },
            },
            {
              name: "--post_date_gmt",
              requiresSeparator: true,
              description:
                "The GMT date of the generated posts. Default: value of post_date (or current date if it’s not set)",
              args: { name: "yyyy-mm-dd-hh-ii-ss" },
            },
            {
              name: "--post_content",
              description:
                "If set, the command reads the post_content from STDIN",
            },
            {
              name: "--max_depth",
              requiresSeparator: true,
              description:
                "For hierarchical post types, generate child posts down to a certain depth",
              args: {
                name: "number",
                suggestions: [{ name: "1" }],
              },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [{ name: "progress" }, { name: "ids" }],
              },
            },
          ],
        },
        {
          name: "get",
          description: "Gets details about a post",
          args: {
            name: "id",
            description: "The ID of the post to get",
          },
          options: [
            {
              name: "--field",
              requiresSeparator: true,
              description:
                "Instead of returning the whole post, returns the value of a single field",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific fields. Defaults to all fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "list",
          description: "Gets a list of posts",
          options: [
            {
              name: "--field=value",
              insertValue: "--",
              description: "One or more args to pass to WP_Query",
            },
            {
              name: "--field",
              requiresSeparator: true,
              description: "Prints the value of a single field for each post",
              args: {
                name: "fields",
                suggestions: [
                  { name: "ID" },
                  { name: "post_title" },
                  { name: "post_name" },
                  { name: "post_date" },
                  { name: "post_status" },
                  { name: "post_author" },
                  { name: "post_date_gmt" },
                  { name: "post_content" },
                  { name: "post_excerpt" },
                  { name: "comment_status" },
                  { name: "ping_status" },
                  { name: "post_password" },
                  { name: "to_ping" },
                  { name: "pinged" },
                  { name: "post_modified" },
                  { name: "post_modified_gmt" },
                  { name: "post_content_filtered" },
                  { name: "post_parent" },
                  { name: "guid" },
                  { name: "menu_order" },
                  { name: "post_type" },
                  { name: "post_mime_type" },
                  { name: "comment_count" },
                  { name: "filter" },
                  { name: "url" },
                ],
              },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific object fields",
              args: {
                name: "fields",
                suggestions: [
                  { name: "ID" },
                  { name: "post_title" },
                  { name: "post_name" },
                  { name: "post_date" },
                  { name: "post_status" },
                  { name: "post_author" },
                  { name: "post_date_gmt" },
                  { name: "post_content" },
                  { name: "post_excerpt" },
                  { name: "comment_status" },
                  { name: "ping_status" },
                  { name: "post_password" },
                  { name: "to_ping" },
                  { name: "pinged" },
                  { name: "post_modified" },
                  { name: "post_modified_gmt" },
                  { name: "post_content_filtered" },
                  { name: "post_parent" },
                  { name: "guid" },
                  { name: "menu_order" },
                  { name: "post_type" },
                  { name: "post_mime_type" },
                  { name: "comment_count" },
                  { name: "filter" },
                  { name: "url" },
                ],
              },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "ids" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "meta",
          description: "Adds, updates, deletes, and lists post custom fields",
          subcommands: [
            {
              name: "add",
              description: "Add a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to create",
                },
                {
                  name: "value",
                  description:
                    "The value of the meta field. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to delete",
                },
                {
                  name: "value",
                  description:
                    "The value to delete. If omitted, all rows with key will deleted",
                },
              ],
              options: [
                {
                  name: "--all",
                  description: "Delete all meta for the object",
                },
              ],
            },
            {
              name: "get",
              description: "Get meta field value",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to get",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Get value in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "var_export" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List all metadata associated with an object",
              args: {
                name: "id",
                description: "ID for the object",
              },
              options: [
                {
                  name: "--keys",
                  requiresSeparator: true,
                  description: "Limit output to metadata of specific keys",
                  args: { name: "keys" },
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description:
                    "Limit the output to specific row fields. Defaults to id,meta_key,meta_value",
                  args: { name: "fields" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "yaml" },
                      { name: "count" },
                    ],
                  },
                },
                {
                  name: "--orderby",
                  requiresSeparator: true,
                  description: "Set orderby which field",
                  args: {
                    name: "fields",
                    suggestions: [
                      { name: "id" },
                      { name: "meta_key" },
                      { name: "meta_value" },
                    ],
                  },
                },
                {
                  name: "--order",
                  requiresSeparator: true,
                  description: "Set ascending or descending order",
                  args: {
                    name: "order",
                    suggestions: [{ name: "asc" }, { name: "desc" }],
                  },
                },
                {
                  name: "--unserialize",
                  description: "Unserialize meta_value output",
                },
              ],
            },
            {
              name: "patch",
              description: "Update a nested value for a meta field",
              args: [
                {
                  name: "action",
                  description: "Patch action to perform",
                  suggestions: [
                    { name: "insert" },
                    { name: "update" },
                    { name: "delete" },
                  ],
                },
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to update",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to patch",
                },
                {
                  name: "value",
                  description:
                    "The new value. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "pluck",
              description: "Get a nested value from a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to get",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to pluck",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The output format of the value",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "plaintext" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to update",
                },
                {
                  name: "value",
                  description:
                    "The new value. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "term",
          description: "Adds, updates, removes, and lists post terms",
          subcommands: [
            {
              name: "add",
              description: "Add a term to an object",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "taxonomy",
                  description: "The name of the taxonomy type to be added",
                },
                {
                  name: "term",
                  description: "The slug of the term or terms to be added",
                },
              ],
              options: [
                {
                  name: "--by",
                  requiresSeparator: true,
                  description:
                    "Explicitly handle the term value as a slug or id",
                  args: {
                    name: "field",
                    suggestions: [{ name: "slug" }, { name: "id" }],
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List all terms associated with an object",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "taxonomy",
                  description: "One or more taxonomies to list",
                },
              ],
              options: [
                {
                  name: "--field",
                  requiresSeparator: true,
                  description:
                    "Prints the value of a single field for each term",
                  args: {
                    name: "field",
                    suggestions: [
                      { name: "term_id" },
                      { name: "name" },
                      { name: "slug" },
                      { name: "taxonomy" },
                      { name: "term_taxonomy_id" },
                      { name: "description" },
                      { name: "term_group" },
                      { name: "parent" },
                      { name: "count" },
                    ],
                  },
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description: "Limit the output to specific row fields",
                  args: {
                    name: "fields",
                    suggestions: [
                      { name: "term_id" },
                      { name: "name" },
                      { name: "slug" },
                      { name: "taxonomy" },
                      { name: "term_taxonomy_id" },
                      { name: "description" },
                      { name: "term_group" },
                      { name: "parent" },
                      { name: "count" },
                    ],
                  },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "yaml" },
                      { name: "count" },
                      { name: "ids" },
                    ],
                  },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a term from an object",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "taxonomy",
                  description: "The name of the term’s taxonomy",
                },
                {
                  name: "term",
                  description:
                    "The name of the term or terms to be removed from the object",
                },
              ],
              options: [
                {
                  name: "--by",
                  requiresSeparator: true,
                  description:
                    "Explicitly handle the term value as a slug or id",
                  args: {
                    name: "field",
                    suggestions: [{ name: "slug" }, { name: "id" }],
                  },
                },
                {
                  name: "--all",
                  description: "Remove all terms from the object",
                },
              ],
            },
            {
              name: "set",
              description: "Set object terms",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "taxonomy",
                  description: "The name of the taxonomy type to be updated",
                },
                {
                  name: "term",
                  description: "The slug of the term or terms to be updated",
                },
              ],
              options: [
                {
                  name: "--by",
                  requiresSeparator: true,
                  description:
                    "Explicitly handle the term value as a slug or id",
                  args: {
                    name: "field",
                    suggestions: [{ name: "slug" }, { name: "id" }],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Updates one or more existing posts",
          args: [
            {
              name: "id",
              description: "One or more IDs of posts to update",
            },
            {
              name: "file",
              description: "One or more fields to update. See wp_insert_post()",
            },
          ],
          options: [
            {
              name: "--post_author",
              requiresSeparator: true,
              description:
                "The ID of the user who added the post. Default is the current user ID",
              args: { name: "post_author" },
            },
            {
              name: "--post_date",
              requiresSeparator: true,
              description: "The date of the post. Default is the current time",
              args: { name: "post_date" },
            },
            {
              name: "--post_date_gmt",
              requiresSeparator: true,
              description:
                "The date of the post in the GMT timezone. Default is the value of $post_date",
              args: { name: "post_date_gmt" },
            },
            {
              name: "--post_content",
              requiresSeparator: true,
              description: "The post content. Default empty",
              args: { name: "post_content" },
            },
            {
              name: "--post_content_filtered",
              requiresSeparator: true,
              description: "The filtered post content. Default empty",
              args: { name: "post_content_filtered" },
            },
            {
              name: "--post_title",
              requiresSeparator: true,
              description: "The post title. Default empty",
              args: { name: "post_title" },
            },
            {
              name: "--post_excerpt",
              requiresSeparator: true,
              description: "The post excerpt. Default empty",
              args: { name: "post_excerpt" },
            },
            {
              name: "--post_status",
              requiresSeparator: true,
              description: "The post status. Default ‘draft’",
              args: { name: "post_status" },
            },
            {
              name: "--post_type",
              requiresSeparator: true,
              description: "The post type. Default ‘post’",
              args: { name: "post_type" },
            },
            {
              name: "--comment_status",
              requiresSeparator: true,
              description:
                "Whether the post can accept comments. Accepts ‘open’ or ‘closed’. Default is the value of ‘default_comment_status’ option",
              args: {
                name: "comment_status",
                suggestions: [{ name: "'open'" }, { name: "'closed" }],
              },
            },
            {
              name: "--ping_status",
              requiresSeparator: true,
              description:
                "Whether the post can accept pings. Accepts ‘open’ or ‘closed’. Default is the value of ‘default_ping_status’ option",
              args: {
                name: "ping_status",
                suggestions: [{ name: "'open'" }, { name: "'closed" }],
              },
            },
            {
              name: "--post_password",
              requiresSeparator: true,
              description: "The password to access the post. Default empty",
              args: { name: "post_password" },
            },
            {
              name: "--post_name",
              requiresSeparator: true,
              description:
                "The post name. Default is the sanitized post title when creating a new post",
              args: { name: "post_name" },
            },
            {
              name: "--to_ping",
              requiresSeparator: true,
              description:
                "Space or carriage return-separated list of URLs to ping. Default empty",
              args: { name: "to_ping" },
            },
            {
              name: "--pinged",
              requiresSeparator: true,
              description:
                "Space or carriage return-separated list of URLs that have been pinged. Default empty",
              args: { name: "pinged" },
            },
            {
              name: "--post_modified",
              requiresSeparator: true,
              description:
                "The date when the post was last modified. Default is the current time",
              args: { name: "post_modified" },
            },
            {
              name: "--post_modified_gmt",
              requiresSeparator: true,
              description:
                "The date when the post was last modified in the GMT timezone. Default is the current time",
              args: { name: "post_modified_gmt" },
            },
            {
              name: "--post_parent",
              requiresSeparator: true,
              description:
                "Set this for the post it belongs to, if any. Default 0",
              args: {
                name: "post_parent",
                suggestions: [{ name: "0" }],
              },
            },
            {
              name: "--menu_order",
              requiresSeparator: true,
              description:
                "The order the post should be displayed in. Default 0",
              args: {
                name: "menu_order",
                suggestions: [{ name: "0" }],
              },
            },
            {
              name: "--post_mime_type",
              requiresSeparator: true,
              description: "The mime type of the post. Default empty",
              args: { name: "post_mime_type" },
            },
            {
              name: "--guid",
              requiresSeparator: true,
              description:
                "Global Unique ID for referencing the post. Default empty",
              args: { name: "guid" },
            },
            {
              name: "--post_category",
              requiresSeparator: true,
              description:
                "Array of category names, slugs, or IDs. Defaults to value of the ‘default_category’ option",
              args: { name: "post_category" },
            },
            {
              name: "--tags_input",
              requiresSeparator: true,
              description: "Array of tag names, slugs, or IDs. Default empty",
              args: { name: "tags_input" },
            },
            {
              name: "--tax_input",
              requiresSeparator: true,
              description:
                "Array of taxonomy terms keyed by their taxonomy name. Default empty",
              args: { name: "tax_input" },
            },
            {
              name: "--meta_input",
              requiresSeparator: true,
              description:
                "Array in JSON format of post meta values keyed by their post meta key. Default empty",
              args: { name: "meta_input" },
            },
            {
              name: "--field",
              requiresSeparator: true,
              description: "One or more fields to update. See wp_insert_post()",
            },
            {
              name: "--defer-term-counting",
              description:
                "Recalculate term count in batch, for a performance boost",
            },
          ],
        },
      ],
    },
    {
      name: "post-type",
      description: "Retrieves details on the site’s registered post types",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "get",
          description: "Gets details about a registered post type",
          args: {
            name: "post-type",
            description: "Post type slug",
          },
          options: [
            {
              name: "--field",
              requiresSeparator: true,
              description:
                "Instead of returning the whole taxonomy, returns the value of a single field",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific fields. Defaults to all fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "list",
          description: "Lists registered post types",
          options: [
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Filter by one or more fields (see get_post_types() first parameter for a list of available fields)",
            },
            {
              name: "--field",
              requiresSeparator: true,
              description:
                "Prints the value of a single field for each post type",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific post type fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: "profile",
      description: "",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "eval",
          description: "Profile arbitrary code execution",
          args: {
            name: "php-code",
            description: "The code to execute, as a string",
          },
          options: [
            {
              name: "--hook",
              requiresSeparator: true,
              description:
                "Focus on key metrics for all hooks, or callbacks on a specific hook",
              args: { name: "hook" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Display one or more fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "json" },
                  { name: "yaml" },
                  { name: "csv" },
                ],
              },
            },
            {
              name: "--order",
              requiresSeparator: true,
              description: "Ascending or descending order",
              args: {
                name: "order",
                suggestions: [{ name: "ASC" }, { name: "DESC" }],
              },
            },
            {
              name: "--orderby",
              requiresSeparator: true,
              description: "Order by fields",
              args: { name: "orderby" },
            },
          ],
        },
        {
          name: "eval-file",
          description: "Profile execution of an arbitrary file",
          args: {
            name: "file",
            template: "filepaths",
            description: "The path to the PHP file to execute and profile",
          },
          options: [
            {
              name: "--hook",
              requiresSeparator: true,
              description:
                "Focus on key metrics for all hooks, or callbacks on a specific hook",
              args: { name: "hook" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Display one or more fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "json" },
                  { name: "yaml" },
                  { name: "csv" },
                ],
              },
            },
            {
              name: "--order",
              requiresSeparator: true,
              description: "Ascending or descending order",
              args: {
                name: "order",
                suggestions: [{ name: "ASC" }, { name: "DESC" }],
              },
            },
            {
              name: "--orderby",
              requiresSeparator: true,
              description: "Order by fields",
              args: { name: "orderby" },
            },
          ],
        },
        {
          name: "hook",
          description:
            "Profile key metrics for WordPress hooks (actions and filters)",
          args: {
            name: "hook",
            description:
              "Drill into key metrics of callbacks on a specific WordPress hook",
          },
          options: [
            {
              name: "--all",
              description: "Profile callbacks for all WordPress hooks",
            },
            {
              name: "--spotlight",
              description: "Filter out logs with zero-ish values from the set",
            },
            {
              name: "--url",
              requiresSeparator: true,
              description:
                "Execute a request against a specified URL. Defaults to the home URL",
              args: { name: "url" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Display one or more fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "json" },
                  { name: "yaml" },
                  { name: "csv" },
                ],
              },
            },
            {
              name: "--order",
              requiresSeparator: true,
              description: "Ascending or descending order",
              args: {
                name: "order",
                suggestions: [{ name: "ASC" }, { name: "DESC" }],
              },
            },
            {
              name: "--orderby",
              requiresSeparator: true,
              description: "Order by fields",
              args: { name: "orderby" },
            },
          ],
        },
        {
          name: "stage",
          description:
            "Profile each stage of the WordPress load process (bootstrap, main_query, template)",
          args: {
            name: "stage",
            description: "Drill down into a specific stage",
          },
          options: [
            {
              name: "--all",
              description: "Expand upon all stages",
            },
            {
              name: "--spotlight",
              description: "Filter out logs with zero-ish values from the set",
            },
            {
              name: "--url",
              requiresSeparator: true,
              description:
                "Execute a request against a specified URL. Defaults to the home URL",
              args: { name: "url" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific fields. Default is all fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "json" },
                  { name: "yaml" },
                  { name: "csv" },
                ],
              },
            },
            {
              name: "--order",
              requiresSeparator: true,
              description: "Ascending or descending order",
              args: {
                name: "order",
                suggestions: [{ name: "asc" }, { name: "desc" }],
              },
            },
            {
              name: "--orderby",
              requiresSeparator: true,
              description: "Order by fields",
              args: { name: "orderby" },
            },
          ],
        },
      ],
    },
    {
      name: "rewrite",
      description:
        "Lists or flushes the site’s rewrite rules, updates the permalink structure",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "flush",
          description: "Flushes rewrite rules",
          options: [
            {
              name: "--hard",
              description:
                "Perform a hard flush – update .htaccess rules as well as rewrite rules in database. Works only on single site installs",
            },
          ],
        },
        {
          name: "list",
          description: "Gets a list of the current rewrite rules",
          options: [
            {
              name: "--match",
              requiresSeparator: true,
              description: "Show rewrite rules matching a particular URL",
              args: { name: "url" },
            },
            {
              name: "--source",
              requiresSeparator: true,
              description: "Show rewrite rules from a particular source",
              args: { name: "source" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific fields. Defaults to match,query,source",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "structure",
          description: "Updates the permalink structure",
          args: {
            name: "permastruct",
            description: "The new permalink structure to apply",
          },
          options: [
            {
              name: "--category-base",
              requiresSeparator: true,
              description:
                "Set the base for category permalinks, i.e. ‘/category/’",
              args: { name: "base" },
            },
            {
              name: "--tag-base",
              requiresSeparator: true,
              description: "Set the base for tag permalinks, i.e. ‘/tag/’",
              args: { name: "base" },
            },
            {
              name: "--hard",
              description:
                "Perform a hard flush – update .htaccess rules as well as rewrite rules in database. Works only on single site installs",
            },
          ],
        },
      ],
    },
    {
      name: "role",
      description:
        "Manages user roles, including creating new roles and resetting to defaults",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "create",
          description: "Creates a new role",
          args: [
            {
              name: "role-key",
              description: "The internal name of the role",
            },
            {
              name: "role-name",
              description: "The publicly visible name of the role",
            },
          ],
          options: [
            {
              name: "--clone",
              requiresSeparator: true,
              description: "Clone capabilities from an existing role",
              args: { name: "role" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an existing role",
          args: {
            name: "role-key",
            description: "The internal name of the role",
          },
        },
        {
          name: "exists",
          description: "Checks if a role exists",
          args: {
            name: "role-key",
            description: "The internal name of the role",
          },
        },
        {
          name: "list",
          description: "Lists all roles",
          options: [
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific row fields",
              args: { name: "fields" },
            },
            {
              name: "--field",
              requiresSeparator: true,
              description: "Prints the value of a single field",
              args: { name: "field" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "reset",
          description: "Resets any default role to default capabilities",
          args: {
            name: "role-key",
            description: "The internal name of one or more roles to reset",
          },
          options: [
            {
              name: "--all",
              description: "If set, all default roles will be reset",
            },
          ],
        },
      ],
    },
    {
      name: "scaffold",
      description:
        "Generates code for post types, taxonomies, plugins, child themes, etc",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "block",
          description:
            "Generates PHP, JS and CSS code for registering a Gutenberg block for a plugin or theme",
          args: {
            name: "slug",
            description: "The internal name of the block",
          },
          options: [
            {
              name: "--title",
              requiresSeparator: true,
              description: "The display title for your block",
              args: { name: "title" },
            },
            {
              name: "--dashicon",
              requiresSeparator: true,
              description:
                "The dashicon to make it easier to identify your block",
              args: { name: "dashicon" },
            },
            {
              name: "--category",
              requiresSeparator: true,
              description:
                "The category name to help users browse and discover your block",
              args: {
                name: "category",
                suggestions: [
                  { name: "common" },
                  { name: "embed" },
                  { name: "formatting" },
                  { name: "layout" },
                  { name: "widgets" },
                ],
              },
            },
            {
              name: "--theme",
              description:
                "Create files in the active theme directory. Specify a theme with --theme=<theme> to have the file placed in that theme",
            },
            {
              name: "--plugin",
              requiresSeparator: true,
              description: "Create files in the given plugin’s directory",
              args: { name: "plugin" },
            },
            {
              name: "--force",
              description: "Overwrite files that already exist",
            },
          ],
        },
        {
          name: "child-theme",
          description: "Generates child theme based on an existing theme",
          args: {
            name: "slug",
            description: "The slug for the new child theme",
          },
          options: [
            {
              name: "--parent_theme",
              requiresSeparator: true,
              description:
                "What to put in the ‘Template:’ header in ‘style.css’",
              args: { name: "slug" },
            },
            {
              name: "--theme_name",
              requiresSeparator: true,
              description:
                "What to put in the ‘Theme Name:’ header in ‘style.css’",
              args: { name: "title" },
            },
            {
              name: "--author",
              requiresSeparator: true,
              description: "What to put in the ‘Author:’ header in ‘style.css’",
              args: { name: "full-name" },
            },
            {
              name: "--author_uri",
              requiresSeparator: true,
              description:
                "What to put in the ‘Author URI:’ header in ‘style.css’",
              args: { name: "uri" },
            },
            {
              name: "--theme_uri",
              requiresSeparator: true,
              description:
                "What to put in the ‘Theme URI:’ header in ‘style.css’",
              args: { name: "uri" },
            },
            {
              name: "--activate",
              description: "Activate the newly created child theme",
            },
            {
              name: "--enable-network",
              description:
                "Enable the newly created child theme for the entire network",
            },
            {
              name: "--force",
              description: "Overwrite files that already exist",
            },
          ],
        },
        {
          name: "plugin",
          description: "Generates starter code for a plugin",
          args: {
            name: "slug",
            description: "The internal name of the plugin",
          },
          options: [
            {
              name: "--dir",
              requiresSeparator: true,
              description:
                "Put the new plugin in some arbitrary directory path. Plugin directory will be path plus supplied slug",
              args: { name: "dirname", template: "folders" },
            },
            {
              name: "--plugin_name",
              requiresSeparator: true,
              description: "What to put in the ‘Plugin Name:’ header",
              args: { name: "title" },
            },
            {
              name: "--plugin_description",
              requiresSeparator: true,
              description: "What to put in the ‘Description:’ header",
              args: { name: "description" },
            },
            {
              name: "--plugin_author",
              requiresSeparator: true,
              description: "What to put in the ‘Author:’ header",
              args: { name: "author" },
            },
            {
              name: "--plugin_author_uri",
              requiresSeparator: true,
              description: "What to put in the ‘Author URI:’ header",
              args: { name: "uri" },
            },
            {
              name: "--plugin_uri",
              requiresSeparator: true,
              description: "What to put in the ‘Plugin URI:’ header",
              args: { name: "uri" },
            },
            {
              name: "--skip-tests",
              description: "Don’t generate files for unit testing",
            },
            {
              name: "--ci",
              requiresSeparator: true,
              description:
                "Choose a configuration file for a continuous integration provider",
              args: {
                name: "provider",
                suggestions: [
                  { name: "travis" },
                  { name: "circle" },
                  { name: "gitlab", icon: "fig://icon?type=gitlab" },
                ],
              },
            },
            {
              name: "--activate",
              description: "Activate the newly created plugin",
            },
            {
              name: "--enable-network",
              description: "Network activate the newly generated plugin",
            },
            {
              name: "--force",
              description: "Overwrite files that already exist",
            },
          ],
        },
        {
          name: "plugin-tests",
          description:
            "Generates files needed for running PHPUnit tests in a plugin",
          args: {
            name: "plugin",
            description: "The name of the plugin to generate test files for",
          },
          options: [
            {
              name: "--dir",
              requiresSeparator: true,
              description:
                "Generate test files for a non-standard plugin path. If no plugin slug is specified, the directory name is used",
              args: { name: "dirname", template: "folders" },
            },
            {
              name: "--ci",
              requiresSeparator: true,
              description:
                "Choose a configuration file for a continuous integration provider",
              args: {
                name: "provider",
                suggestions: [
                  { name: "travis" },
                  { name: "circle" },
                  { name: "gitlab", icon: "fig://icon?type=gitlab" },
                  { name: "bitbucket" },
                ],
              },
            },
            {
              name: "--force",
              description: "Overwrite files that already exist",
            },
          ],
        },
        {
          name: "post-type",
          description: "Generates PHP code for registering a custom post type",
          args: {
            name: "slug",
            description: "The internal name of the post type",
          },
          options: [
            {
              name: "--label",
              requiresSeparator: true,
              description: "The text used to translate the update messages",
              args: { name: "label" },
            },
            {
              name: "--textdomain",
              requiresSeparator: true,
              description: "The textdomain to use for the labels",
              args: { name: "textdomain" },
            },
            {
              name: "--dashicon",
              requiresSeparator: true,
              description: "The dashicon to use in the menu",
              args: { name: "dashicon" },
            },
            {
              name: "--theme",
              description:
                "Create a file in the active theme directory, instead of sending to STDOUT. Specify a theme with --theme=<theme> to have the file placed in that theme",
            },
            {
              name: "--plugin",
              requiresSeparator: true,
              description:
                "Create a file in the given plugin’s directory, instead of sending to STDOUT",
              args: { name: "plugin" },
            },
            {
              name: "--raw",
              description:
                "Just generate the register_post_type() call and nothing else",
            },
            {
              name: "--force",
              description: "Overwrite files that already exist",
            },
          ],
        },
        {
          name: "taxonomy",
          description: "Generates PHP code for registering a custom taxonomy",
          args: {
            name: "slug",
            description: "The internal name of taxonomy",
          },
          options: [
            {
              name: "--post_types",
              requiresSeparator: true,
              description: "Post types to register for use with the taxonomy",
              args: { name: "post_types" },
            },
            {
              name: "--label",
              requiresSeparator: true,
              description: "The text used to translate the update messages",
              args: { name: "label" },
            },
            {
              name: "--textdomain",
              requiresSeparator: true,
              description: "The textdomain to use for the labels",
              args: { name: "textdomain" },
            },
            {
              name: "--theme",
              description:
                "Create a file in the active theme directory, instead of sending to STDOUT. Specify a theme with --theme=<theme> to have the file placed in that theme",
            },
            {
              name: "--plugin",
              requiresSeparator: true,
              description:
                "Create a file in the given plugin’s directory, instead of sending to STDOUT",
              args: { name: "plugin" },
            },
            {
              name: "--raw",
              description:
                "Just generate the register_taxonomy() call and nothing else",
            },
            {
              name: "--force",
              description: "Overwrite files that already exist",
            },
          ],
        },
        {
          name: "theme-tests",
          description:
            "Generates files needed for running PHPUnit tests in a theme",
          args: {
            name: "theme",
            description: "The name of the theme to generate test files for",
          },
          options: [
            {
              name: "--dir",
              requiresSeparator: true,
              description:
                "Generate test files for a non-standard theme path. If no theme slug is specified, the directory name is used",
              args: { name: "dirname", template: "folders" },
            },
            {
              name: "--ci",
              requiresSeparator: true,
              description:
                "Choose a configuration file for a continuous integration provider",
              args: {
                name: "provider",
                suggestions: [
                  { name: "travis" },
                  { name: "circle" },
                  { name: "gitlab", icon: "fig://icon?type=gitlab" },
                  { name: "bitbucket" },
                ],
              },
            },
            {
              name: "--force",
              description: "Overwrite files that already exist",
            },
          ],
        },
        {
          name: "underscores",
          description: "Generates starter code for a theme based on _s",
          args: {
            name: "slug",
            description:
              "The slug for the new theme, used for prefixing functions",
          },
          options: [
            {
              name: "--activate",
              description: "Activate the newly downloaded theme",
            },
            {
              name: "--enable-network",
              description:
                "Enable the newly downloaded theme for the entire network",
            },
            {
              name: "--theme_name",
              requiresSeparator: true,
              description:
                "What to put in the ‘Theme Name:’ header in ‘style.css’",
              args: { name: "title" },
            },
            {
              name: "--author",
              requiresSeparator: true,
              description: "What to put in the ‘Author:’ header in ‘style.css’",
              args: { name: "full-name" },
            },
            {
              name: "--author_uri",
              requiresSeparator: true,
              description:
                "What to put in the ‘Author URI:’ header in ‘style.css’",
              args: { name: "uri" },
            },
            {
              name: "--sassify",
              description: "Include stylesheets as SASS",
            },
            {
              name: "--woocommerce",
              description: "Include WooCommerce boilerplate files",
            },
            {
              name: "--force",
              description: "Overwrite files that already exist",
            },
          ],
        },
        {
          name: "_s",
          description: "Generates starter code for a theme based on _s",
          args: {
            name: "slug",
            description:
              "The slug for the new theme, used for prefixing functions",
          },
          options: [
            {
              name: "--activate",
              description: "Activate the newly downloaded theme",
            },
            {
              name: "--enable-network",
              description:
                "Enable the newly downloaded theme for the entire network",
            },
            {
              name: "--theme_name",
              requiresSeparator: true,
              description:
                "What to put in the ‘Theme Name:’ header in ‘style.css’",
              args: { name: "title" },
            },
            {
              name: "--author",
              requiresSeparator: true,
              description: "What to put in the ‘Author:’ header in ‘style.css’",
              args: { name: "full-name" },
            },
            {
              name: "--author_uri",
              requiresSeparator: true,
              description:
                "What to put in the ‘Author URI:’ header in ‘style.css’",
              args: { name: "uri" },
            },
            {
              name: "--sassify",
              description: "Include stylesheets as SASS",
            },
            {
              name: "--woocommerce",
              description: "Include WooCommerce boilerplate files",
            },
            {
              name: "--force",
              description: "Overwrite files that already exist",
            },
          ],
        },
      ],
    },
    {
      name: "search-replace",
      description: "Searches/replaces strings in the database",
      args: [
        {
          name: "old",
          description: "A string to search for within the database",
        },
        {
          name: "new",
          description:
            "Replace instances of the first string with this new string",
        },
        {
          name: "table",
          description:
            "List of database tables to restrict the replacement to. Wildcards are supported, e.g. 'wp_*options' or 'wp_post*'",
        },
      ],
      options: [
        {
          name: "--dry-run",
          description:
            "Run the entire search/replace operation and show report, but don’t save changes to the database",
        },
        {
          name: "--network",
          description:
            "Search/replace through all the tables registered to $wpdb in a multisite install",
        },
        {
          name: "--all-tables-with-prefix",
          description:
            "Enable replacement on any tables that match the table prefix even if not registered on $wpdb",
        },
        {
          name: "--all-tables",
          description:
            "Enable replacement on ALL tables in the database, regardless of the prefix, and even if not registered on $wpdb. Overrides –network and –all-tables-with-prefix",
        },
        {
          name: "--export",
          requiresSeparator: true,
          description:
            "Write transformed data as SQL file instead of saving replacements to the database. If <file> is not supplied, will output to STDOUT",
          args: { name: "file" },
        },
        {
          name: "--export_insert_size",
          requiresSeparator: true,
          description:
            "Define number of rows in single INSERT statement when doing SQL export. You might want to change this depending on your database configuration (e.g. if you need to do fewer queries). Default: 50",
          args: {
            name: "rows",
            suggestions: [{ name: "50" }],
          },
        },
        {
          name: "--skip-tables",
          requiresSeparator: true,
          description:
            "Do not perform the replacement on specific tables. Use commas to specify multiple tables. Wildcards are supported, e.g. 'wp_*options' or 'wp_post*'",
          args: { name: "tables" },
        },
        {
          name: "--skip-columns",
          requiresSeparator: true,
          description:
            "Do not perform the replacement on specific columns. Use commas to specify multiple columns",
          args: { name: "columns" },
        },
        {
          name: "--include-columns",
          requiresSeparator: true,
          description:
            "Perform the replacement on specific columns. Use commas to specify multiple columns",
          args: { name: "columns" },
        },
        {
          name: "--precise",
          description:
            "Force the use of PHP (instead of SQL) which is more thorough, but slower",
        },
        {
          name: "--recurse-objects",
          description:
            "Enable recursing into objects to replace strings. Defaults to true; pass –no-recurse-objects to disable",
        },
        {
          name: "--no-recurse-objects",
          description:
            "Enable recursing into objects to replace strings. Defaults to true; pass –no-recurse-objects to disable",
        },
        {
          name: "--verbose",
          description: "Prints rows to the console as they’re updated",
        },
        {
          name: "--regex",
          description:
            "Runs the search using a regular expression (without delimiters). Warning: search-replace will take about 15-20x longer when using –regex",
        },
        {
          name: "--regex-flags",
          requiresSeparator: true,
          description:
            "Pass PCRE modifiers to regex search-replace (e.g. ‘i’ for case-insensitivity)",
          args: { name: "regex-flags" },
        },
        {
          name: "--regex-delimiter",
          requiresSeparator: true,
          description:
            "The delimiter to use for the regex. It must be escaped if it appears in the search string. The default value is the result of chr(1)",
          args: { name: "regex-delimiter" },
        },
        {
          name: "--regex-limit",
          requiresSeparator: true,
          description:
            "The maximum possible replacements for the regex per row (or per unserialized data bit per row). Defaults to -1 (no limit)",
          args: { name: "regex-limit" },
        },
        {
          name: "--format",
          requiresSeparator: true,
          description: "Render output in a particular format",
          args: {
            name: "format",
            suggestions: [{ name: "table" }, { name: "count" }],
          },
        },
        {
          name: "--report",
          description: "Produce report. Defaults to true",
        },
        {
          name: "--report-changed-only",
          description:
            "Report changed fields only. Defaults to false, unless logging, when it defaults to true",
        },
        {
          name: "--log",
          displayName: "--log=",
          requiresSeparator: true,

          description:
            "Log the items changed. If <file> is not supplied or is “-“, will output to STDOUT. Warning: causes a significant slow down, similar or worse to enabling –precise or –regex",
          args: { name: "file", isOptional: true },
        },
        {
          name: "--before_context",
          requiresSeparator: true,
          description:
            "For logging, number of characters to display before the old match and the new replacement. Default 40. Ignored if not logging",
          args: { name: "num" },
        },
        {
          name: "--after_context",
          requiresSeparator: true,
          description:
            "For logging, number of characters to display after the old match and the new replacement. Default 40. Ignored if not logging",
          args: { name: "num" },
        },
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
    },
    {
      name: "server",
      description:
        "Launches PHP’s built-in web server for a specific WordPress installation",
      options: [
        {
          name: "--host",
          requiresSeparator: true,
          description: "The hostname to bind the server to",
          args: {
            name: "host",
            suggestions: [{ name: "localhost" }],
          },
        },
        {
          name: "--port",
          requiresSeparator: true,
          description: "The port number to bind the server to",
          args: {
            name: "port",
            suggestions: [{ name: "8080" }],
          },
        },
        {
          name: "--docroot",
          requiresSeparator: true,
          description:
            "The path to use as the document root. If the path global parameter is set, the default value is it",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--config",
          requiresSeparator: true,
          description: "Config the server with a specific .ini file",
          args: { name: "file" },
        },
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
    },
    {
      name: "shell",
      description:
        "Opens an interactive PHP console for running and testing PHP code",
      options: [
        {
          name: "--basic",
          description:
            "Force the use of WP-CLI’s built-in PHP REPL, even if the Boris or PsySH PHP REPLs are available",
        },
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
    },
    {
      name: "sidebar",
      description: "Lists registered sidebars",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "list",
          description: "Lists registered sidebars",
          options: [
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific row fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "ids" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: "site",
      description:
        "Creates, deletes, empties, moderates, and lists one or more sites on a multisite installation",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "activate",
          description: "Activates one or more sites",
          args: {
            name: "id",
            description: "One or more IDs of sites to activate",
          },
        },
        {
          name: "archive",
          description: "Archives one or more sites",
          args: {
            name: "id",
            description: "One or more IDs of sites to archive",
          },
        },
        {
          name: "create",
          description: "Creates a site in a multisite installation",
          options: [
            {
              name: "--slug",
              requiresSeparator: true,
              description:
                "Path for the new site. Subdomain on subdomain installs, directory on subdirectory installs",
              args: { name: "slug" },
            },
            {
              name: "--title",
              requiresSeparator: true,
              description: "Title of the new site. Default: prettified slug",
              args: { name: "title" },
            },
            {
              name: "--email",
              requiresSeparator: true,
              description:
                "Email for Admin user. User will be created if none exists. Assignment to Super Admin if not included",
              args: { name: "email" },
            },
            {
              name: "--network_id",
              requiresSeparator: true,
              description:
                "Network to associate new site with. Defaults to current network (typically 1)",
              args: { name: "network-id" },
            },
            {
              name: "--private",
              description:
                "If set, the new site will be non-public (not indexed)",
            },
            {
              name: "--porcelain",
              description: "If set, only the site id will be output on success",
            },
          ],
        },
        {
          name: "deactivate",
          description: "Deactivates one or more sites",
          args: {
            name: "id",
            description: "One or more IDs of sites to deactivate",
          },
        },
        {
          name: "delete",
          description: "Deletes a site in a multisite installation",
          args: {
            name: "site-id",
            description:
              "The id of the site to delete. If not provided, you must set the –slug parameter",
          },
          options: [
            {
              name: "--slug",
              requiresSeparator: true,
              description:
                "Path of the blog to be deleted. Subdomain on subdomain installs, directory on subdirectory installs",
              args: { name: "slug" },
            },
            {
              name: "--yes",
              description: "Answer yes to the confirmation message",
            },
            {
              name: "--keep-tables",
              description:
                "Delete the blog from the list, but don’t drop it’s tables",
            },
          ],
        },
        {
          name: "empty",
          description:
            "Empties a site of its content (posts, comments, terms, and meta)",
          options: [
            {
              name: "--uploads",
              description:
                "Also delete all files in the site’s uploads directory",
            },
            {
              name: "--yes",
              description:
                "Proceed to empty the site without a confirmation prompt",
            },
          ],
        },
        {
          name: "list",
          description: "Lists all sites in a multisite installation",
          options: [
            {
              name: "--network",
              requiresSeparator: true,
              description: "The network to which the sites belong",
              args: { name: "id" },
            },
            {
              name: "--field=value",
              insertValue: "--",
              description: "The serialization format for the value",
            },
            {
              name: "--site_in",
              requiresSeparator: true,
              description:
                "Only list the sites with these blog_id values (comma-separated)",
              args: { name: "value" },
            },
            {
              name: "--field",
              requiresSeparator: true,
              description: "Prints the value of a single field for each site",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Comma-separated list of fields to show",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "count" },
                  { name: "ids" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "mature",
          description: "Sets one or more sites as mature",
          args: {
            name: "id",
            description: "One or more IDs of sites to set as mature",
          },
        },
        {
          name: "meta",
          description: "Adds, updates, deletes, and lists site custom fields",
          subcommands: [
            {
              name: "add",
              description: "Add a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to create",
                },
                {
                  name: "value",
                  description:
                    "The value of the meta field. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to delete",
                },
                {
                  name: "value",
                  description:
                    "The value to delete. If omitted, all rows with key will deleted",
                },
              ],
              options: [
                {
                  name: "--all",
                  description: "Delete all meta for the object",
                },
              ],
            },
            {
              name: "get",
              description: "Get meta field value",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to get",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Get value in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "var_export" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List all metadata associated with an object",
              args: {
                name: "id",
                description: "ID for the object",
              },
              options: [
                {
                  name: "--keys",
                  requiresSeparator: true,
                  description: "Limit output to metadata of specific keys",
                  args: { name: "keys" },
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description:
                    "Limit the output to specific row fields. Defaults to id,meta_key,meta_value",
                  args: {
                    name: "fields",
                    suggestions: [{ name: "id,meta_key,meta_value" }],
                  },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "count" },
                      { name: "yaml" },
                    ],
                  },
                },
                {
                  name: "--orderby",
                  requiresSeparator: true,
                  description: "Set orderby which field",
                  args: {
                    name: "fields",
                    suggestions: [
                      { name: "id" },
                      { name: "meta_key" },
                      { name: "meta_value" },
                    ],
                  },
                },
                {
                  name: "--order",
                  requiresSeparator: true,
                  description: "Set ascending or descending order",
                  args: {
                    name: "order",
                    suggestions: [{ name: "asc" }, { name: "desc" }],
                  },
                },
                {
                  name: "--unserialize",
                  description: "Unserialize meta_value output",
                },
              ],
            },
            {
              name: "patch",
              description: "Update a nested value for a meta field",
              args: [
                {
                  name: "action",
                  description: "Patch action to perform",
                  suggestions: [
                    { name: "insert" },
                    { name: "update" },
                    { name: "delete" },
                  ],
                },
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to update",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to patch",
                },
                {
                  name: "value",
                  description:
                    "The new value. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "pluck",
              description: "Get a nested value from a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to get",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to pluck",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The output format of the value",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "plaintext" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to update",
                },
                {
                  name: "value",
                  description:
                    "The new value. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "option",
          description:
            "Adds, updates, deletes, and lists site options in a multisite installation",
          subcommands: [
            {
              name: "add",
              description: "Adds a site option",
              args: [
                {
                  name: "key",
                  description: "The name of the site option to add",
                },
                {
                  name: "value",
                  description:
                    "The value of the site option to add. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a site option",
              args: {
                name: "key",
                description: "Key for the site option",
              },
            },
            {
              name: "get",
              description: "Gets a site option",
              args: {
                name: "key",
                description: "Key for the site option",
              },
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Get value in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "var_export" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "list",
              description: "Lists site options",
              options: [
                {
                  name: "--search",
                  requiresSeparator: true,
                  description: "Use wildcards ( * and ? ) to match option name",
                  args: { name: "pattern" },
                },
                {
                  name: "--site_id",
                  requiresSeparator: true,
                  description: "Limit options to those of a particular site id",
                  args: { name: "id" },
                },
                {
                  name: "--field",
                  requiresSeparator: true,
                  description: "Prints the value of a single field",
                  args: { name: "field" },
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description: "Limit the output to specific object fields",
                  args: { name: "fields" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description:
                    "The serialization format for the value. total_bytes displays the total size of matching options in bytes",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "json" },
                      { name: "csv" },
                      { name: "count" },
                      { name: "yaml" },
                      { name: "total_bytes" },
                    ],
                  },
                },
              ],
            },
            {
              name: "patch",
              description: "Updates a nested value in an option",
              args: [
                {
                  name: "action",
                  description: "Patch action to perform",
                  suggestions: [
                    { name: "insert" },
                    { name: "update" },
                    { name: "delete" },
                  ],
                },
                {
                  name: "key",
                  description: "The option name",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to patch",
                },
                {
                  name: "value",
                  description:
                    "The new value. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "pluck",
              description: "Gets a nested value from an option",
              args: [
                {
                  name: "key",
                  description: "The option name",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to pluck",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The output format of the value",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "plaintext" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Updates a site option",
              args: [
                {
                  name: "key",
                  description: "The name of the site option to update",
                },
                {
                  name: "key-path",
                  description:
                    "The new value. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "private",
          description: "Sets one or more sites as private",
          args: {
            name: "id",
            description: "One or more IDs of sites to set as private",
          },
        },
        {
          name: "public",
          description: "Sets one or more sites as public",
          args: {
            name: "id",
            description: "One or more IDs of sites to set as public",
          },
        },
        {
          name: "spam",
          description: "Marks one or more sites as spam",
          args: {
            name: "id",
            description: "One or more IDs of sites to set as spam",
          },
        },
        {
          name: "switch-language",
          description: "Activates a given language",
          args: {
            name: "language",
            description: "Language code to activate",
          },
        },
        {
          name: "unarchive",
          description: "Unarchives one or more sites",
          args: {
            name: "id",
            description: "One or more IDs of sites to unarchive",
          },
        },
        {
          name: "unmature",
          description: "Sets one or more sites as immature",
          args: {
            name: "id",
            description: "One or more IDs of sites to set as unmature",
          },
        },
        {
          name: "unspam",
          description: "Removes one or more sites from spam",
          args: {
            name: "id",
            description: "One or more IDs of sites to remove from spam",
          },
        },
      ],
    },
    {
      name: "super-admin",
      description:
        "Lists, adds, or removes super admin users on a multisite installation",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "add",
          description: "Grants super admin privileges to one or more users",
          args: {
            name: "user",
            description: "One or more user IDs, user emails, or user logins",
          },
        },
        {
          name: "list",
          description: "Lists users with super admin capabilities",
          options: [
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "list" },
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "remove",
          description: "Removes super admin privileges from one or more users",
          args: {
            name: "user",
            description: "One or more user IDs, user emails, or user logins",
          },
        },
      ],
    },
    {
      name: "taxonomy",
      description: "Retrieves information about registered taxonomies",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "get",
          description: "Gets details about a registered taxonomy",
          args: {
            name: "taxonomy",
            description: "Taxonomy slug",
          },
          options: [
            {
              name: "--field",
              requiresSeparator: true,
              description:
                "Instead of returning the whole taxonomy, returns the value of a single field",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific fields. Defaults to all fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "list",
          description: "Lists registered taxonomies",
          options: [
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Filter by one or more fields (see get_taxonomies() first parameter for a list of available fields)",
            },
            {
              name: "--field",
              requiresSeparator: true,
              description:
                "Prints the value of a single field for each taxonomy",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific taxonomy fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: "term",
      description:
        "Manages taxonomy terms and term meta, with create, delete, and list commands",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "create",
          description: "Creates a new term",
          args: [
            {
              name: "taxonomy",
              description: "Taxonomy for the new term",
            },
            {
              name: "term",
              description: "A name for the new term",
            },
          ],
          options: [
            {
              name: "--slug",
              requiresSeparator: true,
              description:
                "A unique slug for the new term. Defaults to sanitized version of name",
              args: { name: "slug" },
            },
            {
              name: "--description",
              requiresSeparator: true,
              description: "A description for the new term",
              args: { name: "description" },
            },
            {
              name: "--parent",
              requiresSeparator: true,
              description: "A parent for the new term",
              args: { name: "term-id" },
            },
            {
              name: "--porcelain",
              description: "Output just the new term id",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an existing term",
          args: [
            {
              name: "taxonomy",
              description: "Taxonomy of the term to delete",
            },
            {
              name: "term",
              description: "One or more IDs or slugs of terms to delete",
            },
          ],
          options: [
            {
              name: "--by",
              requiresSeparator: true,
              description: "Explicitly handle the term value as a slug or id",
              args: {
                name: "field",
                suggestions: [{ name: "slug" }, { name: "id" }],
              },
            },
          ],
        },
        {
          name: "generate",
          description: "Generates some terms",
          args: {
            name: "taxonomy",
            description: "The taxonomy for the generated terms",
          },
          options: [
            {
              name: "--count",
              requiresSeparator: true,
              description: "How many terms to generate?",
              args: {
                name: "number",
                suggestions: [{ name: "100" }],
              },
            },
            {
              name: "--max_depth",
              requiresSeparator: true,
              description: "Generate child terms down to a certain depth",
              args: {
                name: "number",
                suggestions: [{ name: "1" }],
              },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [{ name: "progress" }, { name: "ids" }],
              },
            },
          ],
        },
        {
          name: "get",
          description: "Gets details about a term",
          args: [
            {
              name: "taxonomy",
              description: "Taxonomy of the term to get",
            },
            {
              name: "term",
              description: "ID or slug of term to get",
            },
          ],
          options: [
            {
              name: "--by",
              requiresSeparator: true,
              description: "Explicitly handle the term value as a slug or id",
              args: {
                name: "field",
                suggestions: [{ name: "slug" }, { name: "id" }],
              },
            },
            {
              name: "--field",
              requiresSeparator: true,
              description:
                "Instead of returning the whole term, returns the value of a single field",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific fields. Defaults to all fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Get value in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "list",
          description: "Lists terms in a taxonomy",
          args: {
            name: "taxonomy",
            description: "List terms of one or more taxonomies",
          },
          options: [
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Filter by one or more fields (see get_terms() $args parameter for a list of fields)",
            },
            {
              name: "--field",
              requiresSeparator: true,
              description: "Prints the value of a single field for each term",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific object fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "ids" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "meta",
          description: "Adds, updates, deletes, and lists term custom fields",
          subcommands: [
            {
              name: "add",
              description: "Add a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to create",
                },
                {
                  name: "value",
                  description:
                    "The value of the meta field. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to delete",
                },
                {
                  name: "value",
                  description:
                    "The value to delete. If omitted, all rows with key will deleted",
                },
              ],
              options: [
                {
                  name: "--all",
                  description: "Delete all meta for the object",
                },
              ],
            },
            {
              name: "get",
              description: "Get meta field value",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to get",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Get value in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "var_export" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List all metadata associated with an object",
              args: {
                name: "id",
                description: "ID for the object",
              },
              options: [
                {
                  name: "--keys",
                  requiresSeparator: true,
                  description: "Limit output to metadata of specific keys",
                  args: { name: "keys" },
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description:
                    "Limit the output to specific row fields. Defaults to id,meta_key,meta_value",
                  args: {
                    name: "fields",
                    suggestions: [{ name: "id,meta_key,meta_value" }],
                  },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "count" },
                      { name: "yaml" },
                    ],
                  },
                },
                {
                  name: "--orderby",
                  requiresSeparator: true,
                  description: "Set orderby which field",
                  args: {
                    name: "fields",
                    suggestions: [
                      { name: "id" },
                      { name: "meta_key" },
                      { name: "meta_value" },
                    ],
                  },
                },
                {
                  name: "--order",
                  requiresSeparator: true,
                  description: "Set ascending or descending order",
                  args: {
                    name: "order",
                    suggestions: [{ name: "asc" }, { name: "desc" }],
                  },
                },
                {
                  name: "--unserialize",
                  description: "Unserialize meta_value output",
                },
              ],
            },
            {
              name: "patch",
              description: "Update a nested value for a meta field",
              args: [
                {
                  name: "action",
                  description: "Patch action to perform",
                  suggestions: [
                    { name: "insert" },
                    { name: "update" },
                    { name: "delete" },
                  ],
                },
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to update",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to patch",
                },
                {
                  name: "value",
                  description:
                    "The new value. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "pluck",
              description: "Get a nested value from a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to get",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to pluck",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The output format of the value",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "plaintext" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to update",
                },
                {
                  name: "value",
                  description:
                    "The new value. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "migrate",
          description: "Migrate a term of a taxonomy to another taxonomy",
          args: {
            name: "term",
            description: "Slug or ID of the term to migrate",
          },
          options: [
            {
              name: "--by",
              requiresSeparator: true,
              description: "Explicitly handle the term value as a slug or id",
              args: {
                name: "field",
                suggestions: [{ name: "slug" }, { name: "id" }],
              },
            },
            {
              name: "--from",
              requiresSeparator: true,
              description: "Taxonomy slug of the term to migrate",
              args: { name: "taxonomy" },
            },
            {
              name: "--to",
              requiresSeparator: true,
              description: "Taxonomy slug to migrate to",
              args: { name: "taxonomy" },
            },
          ],
        },
        {
          name: "recount",
          description: "Recalculates number of posts assigned to each term",
          args: {
            name: "taxonomy",
            description: "One or more taxonomies to recalculate",
          },
        },
        {
          name: "update",
          description: "Updates an existing term",
          args: [
            {
              name: "taxonomy",
              description: "Taxonomy of the term to update",
            },
            {
              name: "term",
              description: "ID or slug for the term to update",
            },
          ],
          options: [
            {
              name: "--by",
              requiresSeparator: true,
              description: "Explicitly handle the term value as a slug or id",
              args: {
                name: "field",
                suggestions: [{ name: "slug" }, { name: "id" }],
              },
            },
            {
              name: "--name",
              requiresSeparator: true,
              description: "A new name for the term",
              args: { name: "name" },
            },
            {
              name: "--slug",
              requiresSeparator: true,
              description: "A new slug for the term",
              args: { name: "slug" },
            },
            {
              name: "--description",
              requiresSeparator: true,
              description: "A new description for the term",
              args: { name: "description" },
            },
            {
              name: "--parent",
              requiresSeparator: true,
              description: "A new parent for the term",
              args: { name: "term-id" },
            },
          ],
        },
      ],
    },
    {
      name: "theme",
      description:
        "Manages themes, including installs, activations, and updates",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "activate",
          description: "Activates a theme",
          args: {
            name: "theme",
            description: "The theme to activate",
          },
        },
        {
          name: "auto-updates",
          description: "Manages theme auto-updates",
          subcommands: [
            {
              name: "disable",
              description: "Disables the auto-updates for a theme",
              args: {
                name: "theme",
                description: "One or more themes to disable auto-updates for",
              },
              options: [
                {
                  name: "--all",
                  description:
                    "If set, auto-updates will be disabled for all themes",
                },
                {
                  name: "--enabled-only",
                  description:
                    "If set, filters list of themes to only include the ones that have auto-updates enabled",
                },
              ],
            },
            {
              name: "enable",
              description: "Enables the auto-updates for a theme",
              args: {
                name: "theme",
                description: "One or more themes to enable auto-updates for",
              },
              options: [
                {
                  name: "--all",
                  description:
                    "If set, auto-updates will be enabled for all themes",
                },
                {
                  name: "--enabled-only",
                  description:
                    "If set, filters list of themes to only include the ones that have auto-updates disabled",
                },
              ],
            },
            {
              name: "status",
              description: "Shows the status of auto-updates for a theme",
              args: {
                name: "theme",
                description:
                  "One or more themes to show the status of the auto-updates of",
              },
              options: [
                {
                  name: "--all",
                  description:
                    "If set, the status of auto-updates for all themes will be shown",
                },
                {
                  name: "--enabled-only",
                  description:
                    "If set, filters list of themes to only include the ones that have auto-updates enabled",
                },
                {
                  name: "--disabled-only",
                  description:
                    "If set, filters list of themes to only include the ones that have auto-updates disabled",
                },
                {
                  name: "--field",
                  requiresSeparator: true,
                  description: "Only show the provided field",
                  args: { name: "field" },
                },
              ],
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes one or more themes",
          args: {
            name: "theme",
            description: "One or more themes to delete",
          },
          options: [
            {
              name: "--all",
              description:
                "If set, all themes will be deleted except active theme",
            },
            {
              name: "--force",
              description: "To delete active theme use this",
            },
          ],
        },
        {
          name: "disable",
          description: "Disables a theme on a WordPress multisite install",
          args: {
            name: "theme",
            description: "The theme to disable",
          },
          options: [
            {
              name: "--network",
              description:
                "If set, the theme is disabled on the network level. Note that individual sites may still have this theme enabled if it was enabled for them independently",
            },
          ],
        },
        {
          name: "enable",
          description: "Enables a theme on a WordPress multisite install",
          args: {
            name: "theme",
            description: "The theme to enable",
          },
          options: [
            {
              name: "--network",
              description:
                "If set, the theme is enabled for the entire network",
            },
            {
              name: "--activate",
              description:
                "If set, the theme is activated for the current site. Note that the “network” flag has no influence on this",
            },
          ],
        },
        {
          name: "get",
          description: "Gets details about a theme",
          args: {
            name: "theme",
            description: "The theme to get",
          },
          options: [
            {
              name: "--field",
              requiresSeparator: true,
              description:
                "Instead of returning the whole theme, returns the value of a single field",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Limit the output to specific fields. Defaults to all fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "install",
          description: "Installs one or more themes",
          args: {
            name: "theme|zip|url",
            description:
              "One or more themes to install. Accepts a theme slug, the path to a local zip file, or a URL to a remote zip file",
          },
          options: [
            {
              name: "--version",
              requiresSeparator: true,
              description:
                "If set, get that particular version from wordpress.org, instead of the stable version",
              args: { name: "version" },
            },
            {
              name: "--force",
              description:
                "If set, the command will overwrite any installed version of the theme, without prompting for confirmation",
            },
            {
              name: "--activate",
              description:
                "If set, the theme is activated for the current site. Note that the “network” flag has no influence on this",
            },
            {
              name: "--insecure",
              description:
                "Retry downloads without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack",
            },
          ],
        },
        {
          name: "is-active",
          description: "Checks if a given theme is active",
          args: {
            name: "theme",
            description: "The plugin to check",
          },
        },
        {
          name: "is-installed",
          description: "Checks if a given theme is installed",
          args: {
            name: "theme",
            description: "The plugin to check",
          },
        },
        {
          name: "list",
          description: "Gets a list of themes",
          options: [
            {
              name: "--field=value",
              insertValue: "--",
              description: "Filter results based on the value of a field",
            },
            {
              name: "--field",
              requiresSeparator: true,
              description: "Prints the value of a single field for each theme",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific object fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
            {
              name: "--status",
              requiresSeparator: true,
              description: "Filter the output by theme status",
              args: {
                name: "status",
                suggestions: [
                  { name: "active" },
                  { name: "parent" },
                  { name: "inactive" },
                ],
              },
            },
          ],
        },
        {
          name: "mod",
          description: "Sets, gets, and removes theme mods",
          subcommands: [
            {
              name: "get",
              description: "Gets one or more theme mods",
              args: {
                name: "mod",
                description: "One or more mods to get",
              },
              options: [
                {
                  name: "--field",
                  requiresSeparator: true,
                  description: "Returns the value of a single field",
                },
                {
                  name: "--all",
                  description: "List all theme mods",
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "json" },
                      { name: "csv" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "list",
              description: "Gets a list of theme mods",
              options: [
                {
                  name: "--field",
                  requiresSeparator: true,
                  description: "Returns the value of a single field",
                  args: { name: "field" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "json" },
                      { name: "csv" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "remove",
              description: "Removes one or more theme mods",
              args: {
                name: "mod",
                description: "One or more mods to remove",
              },
              options: [
                {
                  name: "--all",
                  description: "Remove all theme mods",
                },
              ],
            },
            {
              name: "set",
              description: "Sets the value of a theme mod",
              args: [
                {
                  name: "mod",
                  description: "The name of the theme mod to set or update",
                },
                {
                  name: "value",
                  description: "The new value",
                },
              ],
            },
          ],
        },
        {
          name: "path",
          description: "Gets the path to a theme or to the theme directory",
          args: {
            name: "theme",
            description:
              "The theme to get the path to. Path includes “style.css” file. If not set, will return the path to the themes directory",
          },
          options: [
            {
              name: "--dir",
              description:
                "If set, get the path to the closest parent directory, instead of the theme’s “style.css” file",
            },
          ],
        },
        {
          name: "search",
          description: "Searches the WordPress.org theme directory",
          args: {
            name: "search",
            description: "The string to search for",
          },
          options: [
            {
              name: "--page",
              requiresSeparator: true,
              description: "Optional page to display",
              args: {
                name: "page",
                suggestions: [{ name: "1" }],
              },
            },
            {
              name: "--per-page",
              requiresSeparator: true,
              description:
                "Optional number of results to display. Defaults to 10",
              args: {
                name: "per-page",
                suggestions: [{ name: "10" }],
              },
            },
            {
              name: "--field",
              requiresSeparator: true,
              description: "Prints the value of a single field for each theme",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description:
                "Ask for specific fields from the API. Defaults to name,slug,author,rating",
              args: {
                name: "fields",
                suggestions: [
                  {
                    name: "name",
                  },
                  {
                    name: "slug",
                  },
                  {
                    name: "version",
                  },
                  {
                    name: "author",
                  },
                  {
                    name: "preview_url",
                  },
                  {
                    name: "screenshot_url",
                  },
                  {
                    name: "rating",
                  },
                  {
                    name: "num_ratings",
                  },
                  {
                    name: "homepage",
                  },
                  {
                    name: "description",
                  },
                  {
                    name: "url",
                  },
                ],
              },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "status",
          description: "Reveals the status of one or all themes",
          args: {
            name: "theme",
            description: "A particular theme to show the status for",
          },
        },
        {
          name: "update",
          description: "Updates one or more themes",
          args: {
            name: "theme",
            description: "One or more themes to update",
          },
          options: [
            {
              name: "--all",
              description:
                "If set, all themes that have updates will be updated",
            },
            {
              name: "--exclude",
              requiresSeparator: true,
              description:
                "Comma separated list of theme names that should be excluded from updating",
              args: { name: "theme-names" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "summary" },
                ],
              },
            },
            {
              name: "--version",
              requiresSeparator: true,
              description:
                "If set, the theme will be updated to the specified version",
              args: { name: "version" },
            },
            {
              name: "--dry-run",
              description: "Preview which themes would be updated",
            },
            {
              name: "--insecure",
              description:
                "Retry downloads without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack",
            },
          ],
        },
      ],
    },
    {
      name: "transient",
      description:
        "Adds, gets, and deletes entries in the WordPress Transient Cache",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "delete",
          description: "Deletes a transient value",
          args: {
            name: "key",
            description: "Key for the transient",
          },
          options: [
            {
              name: "--network",
              description:
                "Delete the value of a network|site transient. On single site, this is a specially-named cache key. On multisite, this is a global cache (instead of local to the site)",
            },
            {
              name: "--all",
              description: "Delete all transients",
            },
            {
              name: "--expired",
              description: "Delete all expired transients",
            },
          ],
        },
        {
          name: "get",
          description: "Gets a transient value",
          args: {
            name: "key",
            description: "Key for the transient",
          },
          options: [
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
            {
              name: "--network",
              description:
                "Get the value of a network|site transient. On single site, this is a specially-named cache key. On multisite, this is a global cache (instead of local to the site)",
            },
          ],
        },
        {
          name: "list",
          description: "Lists transients and their values",
          options: [
            {
              name: "--search",
              requiresSeparator: true,
              description: "Use wildcards ( * and ? ) to match transient name",
              args: { name: "pattern" },
            },
            {
              name: "--exclude",
              requiresSeparator: true,
              description:
                "Pattern to exclude. Use wildcards ( * and ? ) to match transient name",
              args: { name: "pattern" },
            },
            {
              name: "--network",
              description:
                "Get the values of network|site transients. On single site, this is a specially-named cache key. On multisite, this is a global cache (instead of local to the site)",
            },
            {
              name: "--unserialize",
              description: "Unserialize transient values in output",
            },
            {
              name: "--human-readable",
              description: "Human-readable output for expirations",
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific object fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "json" },
                  { name: "csv" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "set",
          description: "Sets a transient value",
          args: [
            {
              name: "key",
              description: "Key for the transient",
            },
            {
              name: "value",
              description: "Value to be set for the transient",
            },
            {
              name: "expiration",
              description: "Time until expiration, in seconds",
            },
          ],
          options: [
            {
              name: "--network",
              description:
                "Set the value of a network|site transient. On single site, this is a specially-named cache key. On multisite, this is a global cache (instead of local to the site)",
            },
          ],
        },
        {
          name: "type",
          description: "Determines the type of transients implementation",
        },
      ],
    },
    {
      name: "user",
      description:
        "Manages users, along with their roles, capabilities, and meta",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "add-cap",
          description: "Adds a capability to a user",
          args: [
            {
              name: "user",
              description: "User ID, user email, or user login",
            },
            {
              name: "cap",
              description: "The capability to add",
            },
          ],
        },
        {
          name: "add-role",
          description: "Adds a role for a user",
          args: [
            {
              name: "user",
              description: "User ID, user email, or user login",
            },
            {
              name: "role",
              description: "Add the specified role to the user",
            },
          ],
        },
        {
          name: "check-password",
          description: "Checks if a user’s password is valid or not",
          args: [
            {
              name: "user",
              description:
                "The user login, user email or user ID of the user to check credentials for",
            },
            {
              name: "user_pass",
              description:
                "A string that contains the plain text password for the user",
            },
          ],
          options: [
            {
              name: "--escape-chars",
              description:
                "Escape password with wp_slash() to mimic the same behavior as wp-login.php",
            },
          ],
        },
        {
          name: "create",
          description: "Creates a new user",
          args: [
            {
              name: "user-login",
              description: "The login of the user to create",
            },
            {
              name: "user-email",
              description: "The email address of the user to create",
            },
          ],
          options: [
            {
              name: "--role",
              requiresSeparator: true,
              description:
                "The role of the user to create. Default: default role. Possible values include ‘administrator’, ‘editor’, ‘author’, ‘contributor’, ‘subscriber’",
              args: {
                name: "role",
                suggestions: [
                  { name: "administrator" },
                  { name: "editor" },
                  { name: "author" },
                  { name: "contributor" },
                  { name: "subscriber" },
                ],
              },
            },
            {
              name: "--user_pass",
              requiresSeparator: true,
              description: "The user password. Default: randomly generated",
              args: { name: "password" },
            },
            {
              name: "--user_registered",
              requiresSeparator: true,
              description:
                "The date the user registered. Default: current date",
              args: { name: "yyyy-mm-dd-hh-ii-ss" },
            },
            {
              name: "--display_name",
              requiresSeparator: true,
              description: "The display name",
              args: { name: "name" },
            },
            {
              name: "--user_nicename",
              requiresSeparator: true,
              description:
                "A string that contains a URL-friendly name for the user. The default is the user’s username",
              args: { name: "nice_name" },
            },
            {
              name: "--user_url",
              requiresSeparator: true,
              description:
                "A string containing the user’s URL for the user’s web site",
              args: { name: "url" },
            },
            {
              name: "--nickname",
              requiresSeparator: true,
              description:
                "The user’s nickname, defaults to the user’s username",
              args: { name: "nickname" },
            },
            {
              name: "--first_name",
              requiresSeparator: true,
              description: "The user’s first name",
              args: { name: "first_name" },
            },
            {
              name: "--last_name",
              requiresSeparator: true,
              description: "The user’s last name",
              args: { name: "last_name" },
            },
            {
              name: "--description",
              requiresSeparator: true,
              description: "A string containing content about the user",
              args: { name: "description" },
            },
            {
              name: "--rich_editing",
              requiresSeparator: true,
              description:
                "A string for whether to enable the rich editor or not. False if not empty",
              args: { name: "rich_editing" },
            },
            {
              name: "--send-email",
              description:
                "Send an email to the user with their new account details",
            },
            {
              name: "--porcelain",
              description: "Output just the new user id",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes one or more users from the current site",
          args: {
            name: "user",
            description:
              "The user login, user email, or user ID of the user(s) to delete",
          },
          options: [
            {
              name: "--network",
              description:
                "On multisite, delete the user from the entire network",
            },
            {
              name: "--reassign",
              requiresSeparator: true,
              description: "User ID to reassign the posts to",
              args: { name: "user-id" },
            },
            {
              name: "--yes",
              description: "Answer yes to any confirmation prompts",
            },
          ],
        },
        {
          name: "generate",
          description: "Generates some users",
          options: [
            {
              name: "--count",
              requiresSeparator: true,
              description: "How many users to generate?",
              args: {
                name: "number",
                suggestions: [{ name: "100" }],
              },
            },
            {
              name: "--role",
              requiresSeparator: true,
              description:
                "The role of the generated users. Default: default role from WP",
              args: { name: "role" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [{ name: "progress" }, { name: "ids" }],
              },
            },
          ],
        },
        {
          name: "get",
          description: "Gets details about a user",
          args: {
            name: "user",
            description: "User ID, user email, or user login",
          },
          options: [
            {
              name: "--field",
              requiresSeparator: true,
              description:
                "Instead of returning the whole user, returns the value of a single field",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Get a specific subset of the user’s fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "import-csv",
          description: "Imports users from a CSV file",
          args: {
            name: "file",
            description:
              "The local or remote CSV file of users to import. If ‘-‘, then reads from STDIN",
          },
          options: [
            {
              name: "--send-email",
              description:
                "Send an email to new users with their account details",
            },
            {
              name: "--skip-update",
              description: "Don’t update users that already exist",
            },
          ],
        },
        {
          name: "list",
          description: "Lists users",
          options: [
            {
              name: "--role",
              requiresSeparator: true,
              description: "Only display users with a certain role",
              args: { name: "role" },
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Control output by one or more arguments of WP_User_Query()",
            },
            {
              name: "--network",
              description: "List all users in the network for multisite",
            },
            {
              name: "--field",
              requiresSeparator: true,
              description: "Prints the value of a single field for each user",
              args: { name: "field" },
            },
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific object fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "ids" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "list-caps",
          description: "Lists all capabilities for a user",
          args: {
            name: "user",
            description: "User ID, user email, or login",
          },
          options: [
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "list" },
                  { name: "table" },
                  { name: "csv" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "meta",
          description: "Adds, updates, deletes, and lists user custom fields",
          subcommands: [
            {
              name: "add",
              description: "Adds a meta field",
              args: [
                {
                  name: "user",
                  description:
                    "The user login, user email, or user ID of the user to add metadata for",
                },
                {
                  name: "key",
                  description: "The metadata key",
                },
                {
                  name: "value",
                  description: "The new metadata value",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a meta field",
              args: [
                {
                  name: "user",
                  description:
                    "The user login, user email, or user ID of the user to delete metadata from",
                },
                {
                  name: "key",
                  description: "The metadata key",
                },
                {
                  name: "value",
                  description:
                    "The value to delete. If omitted, all rows with key will deleted",
                },
              ],
            },
            {
              name: "get",
              description: "Gets meta field value",
              args: [
                {
                  name: "user",
                  description:
                    "The user login, user email, or user ID of the user to get metadata for",
                },
                {
                  name: "key",
                  description: "The metadata key",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "list",
              description: "Lists all metadata associated with a user",
              args: {
                name: "user",
                description:
                  "The user login, user email, or user ID of the user to get metadata for",
              },
              options: [
                {
                  name: "--keys",
                  requiresSeparator: true,
                  description: "Limit output to metadata of specific keys",
                  args: { name: "keys" },
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description:
                    "Limit the output to specific row fields. Defaults to id,meta_key,meta_value",
                  args: {
                    name: "fields",
                    suggestions: [{ name: "id,meta_key,meta_value" }],
                  },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "count" },
                      { name: "yaml" },
                    ],
                  },
                },
                {
                  name: "--orderby",
                  requiresSeparator: true,
                  description: "Set orderby which field",
                  args: {
                    name: "fields",
                    suggestions: [
                      { name: "id" },
                      { name: "meta_key" },
                      { name: "meta_value" },
                    ],
                  },
                },
                {
                  name: "--order",
                  requiresSeparator: true,
                  description: "Set ascending or descending order",
                  args: {
                    name: "order",
                    suggestions: [{ name: "asc" }, { name: "desc" }],
                  },
                },
                {
                  name: "--unserialize",
                  description: "Unserialize meta_value output",
                },
              ],
            },
            {
              name: "patch",
              description: "Update a nested value for a meta field",
              args: [
                {
                  name: "action",
                  description: "Patch action to perform",
                  suggestions: [
                    { name: "insert" },
                    { name: "update" },
                    { name: "delete" },
                  ],
                },
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to update",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to patch",
                },
                {
                  name: "value",
                  description:
                    "The new value. If omitted, the value is read from STDIN",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "pluck",
              description: "Get a nested value from a meta field",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "key",
                  description: "The name of the meta field to get",
                },
                {
                  name: "key-path",
                  description:
                    "The name(s) of the keys within the value to locate the value to pluck",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The output format of the value",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "plaintext" },
                      { name: "json" },
                      { name: "yaml" },
                    ],
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Updates a meta field",
              args: [
                {
                  name: "user",
                  description:
                    "The user login, user email, or user ID of the user to update metadata for",
                },
                {
                  name: "key",
                  description: "The metadata key",
                },
                {
                  name: "value",
                  description: "The new metadata value",
                },
              ],
              options: [
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "The serialization format for the value",
                  args: {
                    name: "format",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "remove-cap",
          description: "Removes a user’s capability",
          args: [
            {
              name: "user",
              description: "User ID, user email, or user login",
            },
            {
              name: "cap",
              description: "The capability to be removed",
            },
          ],
        },
        {
          name: "remove-role",
          description: "Removes a user’s role",
          args: [
            {
              name: "user",
              description: "User ID, user email, or user login",
            },
            {
              name: "role",
              description: "A specific role to remove",
            },
          ],
        },
        {
          name: "reset-password",
          description: "Resets the password for one or more users",
          args: {
            name: "user",
            description: "One or more user logins or IDs",
          },
          options: [
            {
              name: "--skip-email",
              description:
                "Don’t send an email notification to the affected user(s)",
            },
          ],
        },
        {
          name: "session",
          description: "Destroys and lists a user’s sessions",
          subcommands: [
            {
              name: "destroy",
              description: "Destroy a session for the given user",
              args: [
                {
                  name: "user",
                  description: "User ID, user email, or user login",
                },
                {
                  name: "token",
                  description:
                    "The token of the session to destroy. Defaults to the most recently created session",
                },
              ],
              options: [
                {
                  name: "--all",
                  description: "Destroy all of the user’s sessions",
                },
              ],
            },
            {
              name: "list",
              description: "List sessions for the given user",
              args: {
                name: "user",
                description: "User ID, user email, or user login",
              },
              options: [
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description: "Limit the output to specific fields",
                  args: { name: "fields" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "yaml" },
                      { name: "count" },
                      { name: "ids" },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "set-role",
          description: "Sets the user role",
          args: [
            {
              name: "user",
              description: "User ID, user email, or user login",
            },
            {
              name: "role",
              description:
                "Make the user have the specified role. If not passed, the default role is used",
            },
          ],
        },
        {
          name: "spam",
          description: "Marks one or more users as spam",
          args: {
            name: "id",
            description: "One or more IDs of users to mark as spam",
          },
        },
        {
          name: "term",
          description: "Adds, updates, removes, and lists user terms",
          subcommands: [
            {
              name: "add",
              description: "Add a term to an object",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "taxonomy",
                  description: "The name of the taxonomy type to be added",
                },
                {
                  name: "term",
                  description: "The slug of the term or terms to be added",
                },
              ],
              options: [
                {
                  name: "--by",
                  requiresSeparator: true,
                  description:
                    "Explicitly handle the term value as a slug or id",
                  args: {
                    name: "field",
                    suggestions: [{ name: "slug" }, { name: "id" }],
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List all terms associated with an object",
              args: [
                {
                  name: "id",
                  description: "ID for the object",
                },
                {
                  name: "taxonomy",
                  description: "One or more taxonomies to list",
                },
              ],
              options: [
                {
                  name: "--field",
                  requiresSeparator: true,
                  description:
                    "Prints the value of a single field for each term",
                  args: { name: "field" },
                },
                {
                  name: "--fields",
                  requiresSeparator: true,
                  description: "Limit the output to specific row fields",
                  args: { name: "fields" },
                },
                {
                  name: "--format",
                  requiresSeparator: true,
                  description: "Render output in a particular format",
                  args: {
                    name: "format",
                    suggestions: [
                      { name: "table" },
                      { name: "csv" },
                      { name: "json" },
                      { name: "yaml" },
                      { name: "count" },
                      { name: "ids" },
                    ],
                  },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a term from an object",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "taxonomy",
                  description: "The name of the term’s taxonomy",
                },
                {
                  name: "term",
                  description:
                    "The name of the term or terms to be removed from the object",
                },
              ],
              options: [
                {
                  name: "--by",
                  requiresSeparator: true,
                  description:
                    "Explicitly handle the term value as a slug or id",
                  args: {
                    name: "field",
                    suggestions: [{ name: "slug" }, { name: "id" }],
                  },
                },
                {
                  name: "--all",
                  description: "Remove all terms from the object",
                },
              ],
            },
            {
              name: "set",
              description: "Set object terms",
              args: [
                {
                  name: "id",
                  description: "The ID of the object",
                },
                {
                  name: "taxonomy",
                  description: "The name of the taxonomy type to be updated",
                },
                {
                  name: "term",
                  description: "The slug of the term or terms to be updated",
                },
              ],
              options: [
                {
                  name: "--by",
                  requiresSeparator: true,
                  description:
                    "Explicitly handle the term value as a slug or id",
                  args: {
                    name: "field",
                    suggestions: [{ name: "slug" }, { name: "id" }],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "unspam",
          description: "Removes one or more users from spam",
          args: {
            name: "id",
            description: "One or more IDs of users to remove from spam",
          },
        },
        {
          name: "update",
          description: "Updates an existing user",
          args: {
            name: "user",
            description:
              "The user login, user email or user ID of the user(s) to update",
          },
          options: [
            {
              name: "--user_pass",
              requiresSeparator: true,
              description:
                "A string that contains the plain text password for the user",
              args: { name: "password" },
            },
            {
              name: "--user_nicename",
              requiresSeparator: true,
              description:
                "A string that contains a URL-friendly name for the user. The default is the user’s username",
              args: { name: "nice_name" },
            },
            {
              name: "--user_url",
              requiresSeparator: true,
              description:
                "A string containing the user’s URL for the user’s web site",
              args: { name: "url" },
            },
            {
              name: "--user_email",
              requiresSeparator: true,
              description: "A string containing the user’s email address",
              args: { name: "email" },
            },
            {
              name: "--display_name",
              requiresSeparator: true,
              description: "The display name",
              args: { name: "display_name" },
            },
            {
              name: "--nickname",
              requiresSeparator: true,
              description:
                "The user’s nickname, defaults to the user’s username",
              args: { name: "nickname" },
            },
            {
              name: "--first_name",
              requiresSeparator: true,
              description: "The user’s first name",
              args: { name: "first_name" },
            },
            {
              name: "--last_name",
              requiresSeparator: true,
              description: "The user’s last name",
              args: { name: "last_name" },
            },
            {
              name: "--description",
              requiresSeparator: true,
              description: "A string containing content about the user",
              args: { name: "description" },
            },
            {
              name: "--rich_editing",
              requiresSeparator: true,
              description:
                "A string for whether to enable the rich editor or not. False if not empty",
              args: { name: "rich_editing" },
            },
            {
              name: "--user_registered",
              requiresSeparator: true,
              description:
                "The date the user registered. Default: current date",
              args: { name: "yyyy-mm-dd-hh-ii-ss" },
            },
            {
              name: "--role",
              requiresSeparator: true,
              description: "A string used to set the user’s role",
              args: { name: "role" },
            },
            {
              name: "--field",
              requiresSeparator: true,
              description:
                "One or more fields to update. For accepted fields, see wp_update_user()",
              args: { name: "field" },
            },
            {
              name: "--skip-email",
              description: "Don’t send an email notification to the user",
            },
          ],
        },
      ],
    },
    {
      name: "widget",
      description:
        "Manages widgets, including adding and moving them within sidebars",
      options: [
        global_parameter_path,
        global_parameter_url,
        global_parameter_ssh,
        global_parameter_http,
        global_parameter_user,
        global_parameter_skip_plugins1,
        global_parameter_skip_plugins2,
        global_parameter_skip_themes1,
        global_parameter_skip_themes2,
        global_parameter_skip_packages,
        global_parameter_require,
        global_parameter_exec,
        global_parameter_color,
        global_parameter_no_color,
        global_parameter_debug1,
        global_parameter_debug2,
        global_parameter_prompt1,
        global_parameter_prompt2,
        global_parameter_quiet,
      ],
      subcommands: [
        {
          name: "add",
          description: "Adds a widget to a sidebar",
          args: [
            {
              name: "name",
              description: "Widget name",
            },
            {
              name: "sidebar-id",
              description: "ID for the corresponding sidebar",
            },
            {
              name: "position",
              description:
                "Widget’s current position within the sidebar. Defaults to last",
            },
          ],
          options: [
            {
              name: "--field=value",
              insertValue: "--",
              description: "Widget option to add, with its new value",
            },
          ],
        },
        {
          name: "deactivate",
          description: "Deactivates one or more widgets from an active sidebar",
          args: {
            name: "widget-id",
            description: "Unique ID for the widget(s)",
          },
        },
        {
          name: "delete",
          description: "Deletes one or more widgets from a sidebar",
          args: {
            name: "widget-id",
            description: "Unique ID for the widget(s)",
          },
        },
        {
          name: "list",
          description: "Lists widgets associated with a sidebar",
          args: {
            name: "sidebar-id",
            description: "ID for the corresponding sidebar",
          },
          options: [
            {
              name: "--fields",
              requiresSeparator: true,
              description: "Limit the output to specific row fields",
              args: { name: "fields" },
            },
            {
              name: "--format",
              requiresSeparator: true,
              description: "Render output in a particular format",
              args: {
                name: "format",
                suggestions: [
                  { name: "table" },
                  { name: "csv" },
                  { name: "ids" },
                  { name: "json" },
                  { name: "count" },
                  { name: "yaml" },
                ],
              },
            },
          ],
        },
        {
          name: "move",
          description: "Moves the position of a widget",
          args: {
            name: "widget-id",
            description: "Unique ID for the widget",
          },
          options: [
            {
              name: "--position",
              requiresSeparator: true,
              description: "Assign the widget to a new position",
              args: { name: "position" },
            },
            {
              name: "--sidebar-id",
              requiresSeparator: true,
              description: "Assign the widget to a new sidebars",
              args: { name: "sidebar-id" },
            },
          ],
        },
        {
          name: "reset",
          description: "Resets sidebar",
          args: {
            name: "sidebar-id",
            description: "One or more sidebars to reset",
          },
          options: [
            {
              name: "--all",
              description: "If set, all sidebars will be reset",
            },
          ],
        },
        {
          name: "update",
          description: "Updates options for an existing widget",
          args: {
            name: "widget-id",
            description: "Unique ID for the widget",
          },
          options: [
            {
              name: "--field=value",
              insertValue: "--",
              description: "Field to update, with its new value",
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
