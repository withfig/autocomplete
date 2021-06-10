// To learn more about Fig"s autocomplete standard visit: https://fig.io/docs/autocomplete/building-a-spec#building-your-first-autocomplete-spec
const global_options = [
  {
    name: "--path",
    insertValue: "--path=",
    description: "Path to the WordPress files.",
    args: {
      name: "path",
    },
  },
  {
    name: "--url",
    insertValue: "--url=",
    description:
      "Pretend request came from given URL. In multisite, this argument is how the target site is specified.",
    args: {
      name: "url",
    },
  },
  {
    name: "--ssh",
    insertValue: "--ssh=",
    description:
      "Perform operation against a remote server over SSH (or a container using scheme of “docker”, “docker-compose”, “vagrant”).",
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
  },
  {
    name: "--http",
    insertValue: "--http=",
    description:
      "Perform operation against a remote WordPress installation over HTTP.",
    args: {
      name: "http",
    },
  },
  {
    name: "--user",
    insertValue: "--user=",
    description: "Set the WordPress user.",
    args: {
      name: "options",
      suggestions: [{ name: "id" }, { name: "login" }, { name: "email" }],
    },
  },
  {
    name: "--skip-plugins",
    description:
      "Skip loading all plugins, or a comma-separated list of plugins. Note: mu-plugins are still loaded.",
    args: {
      name: "=plugins",
    },
  },
  {
    name: "--skip-themes",
    description:
      "Skip loading all themes, or a comma-separated list of themes.",
    args: {
      name: "themes",
    },
  },
  {
    name: "--skip-packages",
    description: "Skip loading all installed packages.",
  },
  {
    name: "--require",
    insertValue: "--require=",
    description:
      "Load PHP file before running the command (may be used more than once).",
    args: {
      name: "path",
    },
  },
  {
    name: "--exec",
    insertValue: "--exec=",
    description:
      "Execute PHP code before running the command (may be used more than once).",
    args: {
      name: "php-code",
    },
  },
  {
    name: "--color",
    description: "Whether to colorize the output.",
  },
  {
    name: "--no-color",
    description: "Whether to colorize the output.",
  },
  {
    name: "--debug",
    description:
      "Show all PHP errors and add verbosity to WP-CLI output. Built-in groups include: bootstrap, commandfactory, and help.",
    args: {
      name: "=group",
    },
  },
  {
    name: "--prompt",
    description:
      "Prompt the user to enter values for all command arguments, or a subset specified as comma-separated values.",
    args: {
      name: "=assoc",
    },
  },
  {
    name: "--quiet",
    description: "Suppress informational messages.",
  },
];

// The below is a dummy example for git. Make sure to change the file name!
export const completion: Fig.Spec = {
  name: "wp",
  description: "WP-CLI is the command-line interface for WordPress.",
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
          args: [
            {
              name: "key",
            },
            {
              name: "value",
            },
            {
              name: "[group]",
            },
            {
              name: "[expiration]",
            },
          ],
        },
        {
          name: "decr",
          description: "Decrements a value in the object cache.",
          args: [
            {
              name: "key",
            },
            {
              name: "offset",
            },
            {
              name: "group",
            },
          ],
        },
        {
          name: "delete",
          description: "Removes a value from the object cache.",
          args: [
            {
              name: "key",
            },
            {
              name: "group",
            },
          ],
        },
        {
          name: "flush",
          description: "Flushes the object cache.",
        },
        {
          name: "get",
          description: "Gets a value from the object cache.",
          args: [
            {
              name: "key",
            },
            {
              name: "group",
            },
          ],
        },
        {
          name: "incr",
          description: "Increments a value in the object cache.",
          args: [
            {
              name: "key",
            },
            {
              name: "offset",
            },
            {
              name: "group",
            },
          ],
        },
        {
          name: "replace",
          description:
            "Replaces a value in the object cache, if the value already exists.",
          args: [
            {
              name: "key",
            },
            {
              name: "value",
            },
            {
              name: "group",
            },
            {
              name: "expiration",
            },
          ],
        },
        {
          name: "set",
          description:
            "Sets a value to the object cache, regardless of whether it already exists.",
          args: [
            {
              name: "key",
            },
            {
              name: "value",
            },
            {
              name: "group",
            },
            {
              name: "expiration",
            },
          ],
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
          args: [
            {
              name: "role",
            },
            {
              name: "cap",
            },
          ],
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
                  insertValue: "--config=",
                  description: "Config file to be considered for operations.",
                  args: {
                    name: "options",
                    suggestions: [{ name: "global" }, { name: "project" }],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes an alias.",
              args: [
                {
                  name: "key",
                },
              ],
              options: [
                {
                  name: "--config",
                  insertValue: "--config=",
                  description: "Config file to be considered for operations.",
                  args: {
                    name: "options",
                    suggestions: [{ name: "global" }, { name: "project" }],
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Gets the value for an alias.",
              args: [
                {
                  name: "key",
                },
              ],
            },
            {
              name: "list",
              description: "Lists available WP-CLI aliases.",
              options: [
                {
                  name: "--format",
                  insertValue: "--format=",
                  description: "Set user for alias.",
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
              description: "Updates an alias.",
              args: [
                {
                  name: "key",
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
                  insertValue: "--config=",
                  description: "Config file to be considered for operations.",
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
              description: "Only list patch updates.",
            },
            {
              name: "--minor",
              description: "Only list minor updates.",
            },
            {
              name: "--major",
              description: "Only list major updates.",
            },
            {
              name: "--field",
              insertValue: "--field=",
              description:
                "Prints the value of a single field for each update.",
            },
            {
              name: "--fields",
              insertValue: "--fields=",
              description:
                "Limit the output to specific object fields. Defaults to version,update_type,package_url.",
            },
            {
              name: "--format",
              insertValue: "--format=",
              description: "Render output in a particular format.",
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
          description: "Dumps the list of installed commands, as JSON.",
        },
        {
          name: "completions",
          description: "Generates tab completion strings.",
          options: [
            {
              name: "--line",
              insertValue: "--line=",
              description: "The current command line to be executed.",
            },
            {
              name: "--point",
              insertValue: "--point=",
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
            },
          ],
        },
        {
          name: "info",
          description: "Prints various details about the WP-CLI environment.",
          options: [
            {
              name: "--format",
              insertValue: "--format=",
              description: "Render output in a particular format.",
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
            "Dumps the list of global parameters, as JSON or in var_export format.",
          options: [
            {
              name: "--with-values",
              description: "Display current values also.",
            },
            {
              name: "--format",
              insertValue: "--format=",
              description: "Render output in a particular format.",
              args: {
                name: "options",
                suggestions: [{ name: "list" }, { name: "json" }],
              },
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

    {
      name: "comment",
      description: "Creates, updates, deletes, and moderates comments.",
      subcommands: [
        {
          name: "approve",
          description: "Approves a comment.",
          args: [
            {
              name: "id",
            },
          ],
        },
        {
          name: "count",
          description: "Counts comments, on whole blog or on a given post.",
          args: [
            {
              name: "post-id",
            },
          ],
        },
        {
          name: "create",
          description: "Creates a new comment.",
          options: [
            {
              name: ["--field=value"],
              insertValue: "--",
              description:
                "Associative args for the new comment. See wp_insert_comment().",
            },
            {
              name: "--porcelain",
              description: "Output just the new comment id.",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a comment.",
          args: {
            name: "id",
          },
          options: [
            {
              name: "--force",
              description: "Skip the trash bin.",
            },
          ],
        },
        {
          name: "exists",
          description: "Verifies whether a comment exists.",
          args: [
            {
              name: "id",
            },
          ],
        },
        {
          name: "generate",
          description: "Generates some number of new dummy comments.",
          options: [
            {
              name: "--count",
              insertValue: "--count=",
              description: "How many comments to generate?",
              args: {
                name: "number",
              },
            },
            {
              name: "--post_id",
              insertValue: "--post_id=",
              description: "Assign comments to a specific post.",
              args: {
                name: "post-id",
              },
            },
            {
              name: "--format",
              insertValue: "--format=",
              description: "Render output in a particular format.",
              args: {
                name: "options",
                suggestions: [{ name: "progress" }, { name: "ids" }],
              },
            },
          ],
        },
        {
          name: "get",
          description: "Gets the data of a single comment.",
          args: {
            name: "id",
          },
          options: [
            {
              name: "--field",
              insertValue: "--field=",
              description:
                "Instead of returning the whole comment, returns the value of a single field.",
              args: {
                name: "field",
              },
            },
            {
              name: "--fields",
              insertValue: "--fields=",
              description:
                "Limit the output to specific fields. Defaults to all fields.",
              args: {
                name: "fields",
              },
            },
            {
              name: "--format",
              insertValue: "--format=",
              description: "Render output in a particular format.",
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
          description: "Gets a list of comments.",
          options: [
            {
              name: "--field=value",
              insertValue: "--",
              description: "One or more args to pass to WP_Comment_Query.",
            },
            {
              name: "--field",
              insertValue: "--field=",
              description:
                "Prints the value of a single field for each comment.",
              args: {
                name: "field",
              },
            },
            {
              name: "--fields",
              insertValue: "--fields=",
              description: "Limit the output to specific object fields.",
              args: {
                name: "fields",
              },
            },
            {
              name: "--format",
              insertValue: "--format=",
              description: "Render output in a particular format.",
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
            "Adds, updates, deletes, and lists comment custom fields.",
          subcommands: [
            {
              name: "add",
              description: "Add a meta field.",
              args: [
                {
                  name: "id",
                },
                {
                  name: "key",
                },
                {
                  name: "value",
                },
              ],
              options: [
                {
                  name: "--format",
                  insertValue: "--format=",
                  description: "The serialization format for the value.",
                  args: {
                    name: "options",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a meta field.",
              args: [
                {
                  name: "id",
                },
                {
                  name: "key",
                },
                {
                  name: "value",
                },
              ],
              options: [
                {
                  name: "--all",
                  description: "Delete all meta for the object.",
                },
              ],
            },
            {
              name: "get",
              description: "Get meta field value.",
              args: [
                {
                  name: "id",
                },
                {
                  name: "key",
                },
              ],
              options: [
                {
                  name: "--format",
                  insertValue: "--format=",
                  description: "Get value in a particular format.",
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
              description: "List all metadata associated with an object.",
              args: [
                {
                  name: "id",
                },
              ],
              options: [
                {
                  name: "--keys",
                  insertValue: "--keys=",
                  description: "Limit output to metadata of specific keys.",
                },
                {
                  name: "--fields",
                  insertValue: "--fields=",
                  description:
                    "Limit the output to specific row fields. Defaults to id,meta_key,meta_value.",
                },
                {
                  name: "--format",
                  insertValue: "--format=",
                  description: "Render output in a particular format.",
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
                  insertValue: "--orderby=",
                  description: "Set orderby which field.",
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
                  insertValue: "--order=",
                  description: "Set ascending or descending order.",
                  args: {
                    name: "options",
                    suggestions: [{ name: "asc" }, { name: "desc" }],
                  },
                },
                {
                  name: "--unserialize",
                  description: "Unserialize meta_value output.",
                },
              ],
            },
            {
              name: "patch",
              description: "Update a nested value for a meta field.",
              args: [
                {
                  name: "options",
                  suggestions: [
                    { name: "insert" },
                    { name: "update" },
                    { name: "delete" },
                  ],
                },
                {
                  name: "id",
                },
                {
                  name: "key",
                },
                {
                  name: "key-path",
                },
                {
                  name: "value",
                },
              ],
              options: [
                {
                  name: "--format",
                  insertValue: "--format=",
                  description: "The serialization format for the value.",
                  args: {
                    name: "options",
                    suggestions: [{ name: "plaintext" }, { name: "json" }],
                  },
                },
              ],
            },
            {
              name: "pluck",
              description: "Get a nested value from a meta field.",
              args: [
                {
                  name: "id",
                },
                {
                  name: "key",
                },
                {
                  name: "key-path",
                },
              ],
              options: [
                {
                  name: "--format",
                  insertValue: "--format=",
                  description: "The output format of the value.",
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
              description: "Update a meta field.",
              args: [
                {
                  name: "id",
                },
                {
                  name: "key",
                },
                {
                  name: "value",
                },
              ],
              options: [
                {
                  name: "--format",
                  insertValue: "--format=",
                  description: "The serialization format for the value.",
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
            "Recalculates the comment_count value for one or more posts.",
          args: [
            {
              name: "id",
              description: "IDs for one or more posts to update.",
            },
          ],
        },
        {
          name: "spam",
          description: "Marks a comment as spam.",
          args: [
            {
              name: "id",
              description: "The IDs of the comments to mark as spam.",
            },
          ],
        },
        {
          name: "status",
          description: "Gets the status of a comment.",
          args: [
            {
              name: "id",
              description: "The ID of the comment to check.",
            },
          ],
        },
        {
          name: "trash",
          description: "Trashes a comment.",
          args: [
            {
              name: "id",
              description: "The IDs of the comments to trash.",
            },
          ],
        },
        {
          name: "unapprove",
          description: "Unapproves a comment.",
          args: [
            {
              name: "id",
              description: "The IDs of the comments to unapprove.",
            },
          ],
        },
        {
          name: "unspam",
          description: "Unmarks a comment as spam.",
          args: [
            {
              name: "id",
              description: "The IDs of the comments to unmark as spam.",
            },
          ],
        },
        {
          name: "untrash",
          description: "Untrashes a comment.",
          args: [
            {
              name: "id",
              description: "The IDs of the comments to untrash.",
            },
          ],
        },
        {
          name: "update",
          description: "Updates one or more comments.",
          args: [
            {
              name: "id",
              description: "One or more IDs of comments to update.",
            },
          ],
          options: [
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "One or more fields to update. See wp_update_comment().",
            },
          ],
        },
      ],
    },
    {
      name: "config",
      description: "Generates and reads the wp-config.php file.",
      subcommands: [
        {
          name: "create",
          description: "Generates a wp-config.php file.",
          options: [
            {
              name: "--dbname",
              insertValue: "--dbname=",
              description: "Set the database name.",
            },
            {
              name: "--dbuser",
              insertValue: "--dbuser=",
              description: "Set the database user.",
            },
            {
              name: "--dbpass",
              insertValue: "--dbpass=",
              description: "Set the database password.",
              args: {
                name: "options",
                suggestions: [{ name: "plaintext" }, { name: "json" }],
              },
            },
            {
              name: "--dbhost",
              insertValue: "--dbhost=",
              description: "Set the database host.",
              args: {
                name: "default",
                suggestions: [{ name: "localhost" }],
              },
            },
            {
              name: "--dbprefix",
              insertValue: "--dbprefix=",
              description: "Set the database table prefix.",
              args: {
                name: "default",
                suggestions: [{ name: "wp_" }],
              },
            },
            {
              name: "--dbcharset",
              insertValue: "--dbcharset=",
              description: "Set the database charset.",
              args: {
                name: "default",
                suggestions: [{ name: "utf8" }],
              },
            },
            {
              name: "--dbcollate",
              insertValue: "--dbcollate=",
              description: "Set the database collation.",
            },
            {
              name: "--locale",
              insertValue: "--locale=",
              description:
                "Set the WPLANG constant. Defaults to $wp_local_package variable.",
            },
            {
              name: "--extra-php",
              description:
                "If set, the command copies additional PHP code into wp-config.php from STDIN.",
            },
            {
              name: "--skip-salts",
              description:
                "If set, keys and salts won’t be generated, but should instead be passed via --extra-php.",
            },
            {
              name: "--skip-check",
              description: "If set, the database connection is not checked.",
            },
            {
              name: "--force",
              description: "Overwrites existing files, if present.",
            },
            {
              name: "--insecure",
              description:
                "Retry API download without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack.",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a specific constant or variable from the wp-config.php file.",
          args: [
            {
              name: "name",
              description: "Name of the wp-config.php constant or variable.",
            },
          ],
          options: [
            {
              name: "--type",
              insertValue: "--type=",
              description:
                "Type of the config value to delete. Defaults to ‘all’.",
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
          description: "Launches system editor to edit the wp-config.php file.",
        },
        {
          name: "get",
          description:
            "Gets the value of a specific constant or variable defined in wp-config.php file.",
          args: [
            {
              name: "name",
              description: "Name of the wp-config.php constant or variable.",
            },
          ],
          options: [
            {
              name: "--type",
              insertValue: "--type=",
              description:
                "Type of the config value to delete. Defaults to ‘all’.",
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
              insertValue: "--format=",
              description: "Get value in a particular format.",
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
            "Checks whether a specific constant or variable exists in the wp-config.php file.",
          args: [
            {
              name: "name",
              description: "Name of the wp-config.php constant or variable.",
            },
          ],
          options: [
            {
              name: "--type",
              insertValue: "--type=",
              description:
                "Type of the config value to delete. Defaults to ‘all’.",
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
            "Lists variables, constants, and file includes defined in wp-config.php file.",
          args: [
            {
              name: "filter",
              description: "Name or partial name to filter the list by.",
            },
          ],
          options: [
            {
              name: "--fields",
              insertValue: "--fields=",
              description:
                "Limit the output to specific fields. Defaults to all fields.",
            },
            {
              name: "--format",
              insertValue: "--format=",
              description: "Render output in a particular format.",
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
              description: "Enforce strict matching when a filter is provided.",
            },
          ],
        },
        {
          name: "path",
          description: "Gets the path to wp-config.php file.",
        },
        {
          name: "set",
          description:
            "Sets the value of a specific constant or variable defined in wp-config.php file.",
          args: [
            {
              name: "name",
              description: "Name of the wp-config.php constant or variable.",
            },
            {
              name: "value",
              description:
                "Value to set the wp-config.php constant or variable to.",
            },
          ],
          options: [
            {
              name: "--add",
              description:
                "Add the value if it doesn’t exist yet. This is the default behavior, override with –no-add.",
            },
            {
              name: "--raw",
              description:
                "Place the value into the wp-config.php file as is, instead of as a quoted string.",
            },
            {
              name: "--anchor",
              insertValue: "--anchor=",
              description:
                "Anchor string where additions of new values are anchored around. Defaults to “/* That’s all, stop editing!”.",
            },
            {
              name: "--placement",
              insertValue: "--placement=",
              description:
                "Where to place the new values in relation to the anchor string.",
              args: {
                name: "options",
                suggestions: [{ name: "before" }, { name: "after" }],
              },
            },
            {
              name: "--separator",
              insertValue: "--separator=",
              description:
                "Separator string to put between an added value and its anchor string. The following escape sequences will be recognized and properly interpreted: ‘\n’ => newline, ‘\r’ => carriage return, ‘\t’ => tab. Defaults to a single EOL (“\n” on *nix and “\r\n” on Windows).",
            },
            {
              name: "--type",
              insertValue: "--type=",
              description:
                "Type of the config value to set. Defaults to ‘all’.",
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
          description: "Refreshes the salts defined in the wp-config.php file.",
          args: [
            {
              name: "keys",
              description:
                "One ore more keys to shuffle. If none are provided, this falls back to the default WordPress Core salt keys.",
            },
          ],
          options: [
            {
              name: "--force",
              description:
                "If an unknown key is requested to be shuffled, add it instead of throwing a warning.",
            },
            {
              name: "--insecure",
              description:
                "Retry API download without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack.",
            },
          ],
        },
      ],
    },
    {
      name: "core",
      description:
        "Downloads, installs, updates, and manages a WordPress installation.",
      subcommands: [
        {
          name: "check-update",
          description: "Checks for WordPress updates via Version Check API.",
          options: [
            {
              name: "--minor",
              description:
                "Compare only the first two parts of the version number.",
            },
            {
              name: "--major",
              description: "Compare only the first part of the version number.",
            },
            {
              name: "--field",
              insertValue: "--field=",
              description:
                "Prints the value of a single field for each update.",
            },
            {
              name: "--fields",
              insertValue: "--fields=",
              description:
                "Limit the output to specific object fields. Defaults to version,update_type,package_url.",
            },
            {
              name: "--format",
              insertValue: "--format=",
              description: "Render output in a particular format.",
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
          description: "Downloads core WordPress files.",
          args: [
            {
              name: "download-url",
              description:
                "Download directly from a provided URL instead of fetching the URL from the wordpress.org servers.",
            },
          ],
          options: [
            {
              name: "--path",
              insertValue: "--path=",
              description:
                "Specify the path in which to install WordPress. Defaults to current directory.",
            },
            {
              name: "--locale",
              insertValue: "--locale=",
              description: "Select which language you want to download.",
            },
            {
              name: "--version",
              insertValue: "--version=",
              description:
                "Select which version you want to download. Accepts a version number, ‘latest’ or ‘nightly’.",
            },
            {
              name: "--skip-content",
              description:
                "Download WP without the default themes and plugins.",
            },
            {
              name: "--force",
              description: "Overwrites existing files, if present.",
            },
            {
              name: "--insecure",
              description:
                "Retry download without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack.",
            },
          ],
        },
        {
          name: "install",
          description: "Runs the standard WordPress installation process.",
          options: [
            {
              name: "--url",
              insertValue: "--url=",
              description: "The address of the new site.",
            },
            {
              name: "--title",
              insertValue: "--title=",
              description: "The title of the new site.",
            },
            {
              name: "--admin_user",
              insertValue: "--admin_user=",
              description: "The name of the admin user.",
              args: {
                name: "default",
                suggestions: [{ name: "admin" }],
              },
            },
            {
              name: "--admin_password",
              insertValue: "--admin_password=",
              description:
                "The password for the admin user. Defaults to randomly generated string.",
            },
            {
              name: "--admin_email",
              insertValue: "--admin_email=",
              description: "The email address for the admin user.",
            },
            {
              name: "--skip-email",
              description:
                "Don’t send an email notification to the new admin user.",
            },
          ],
        },
        {
          name: "is-installed",
          description: "Checks if WordPress is installed.",
          options: [
            {
              name: "--network",
              insertValue: "--network=",
              description: "Check if this is a multisite installation.",
            },
          ],
        },
        {
          name: "multisite-convert",
          description:
            "Transforms an existing single-site installation into a multisite installation.",
          options: [
            {
              name: "--title",
              insertValue: "--title=",
              description: "The title of the new network.",
            },
            {
              name: "--base",
              insertValue: "--base=",
              description:
                "Base path after the domain name that each site url will start with.",
              args: {
                name: "default",
                suggestions: [{ name: "/" }],
              },
            },
            {
              name: "--subdomains",
              description:
                "If passed, the network will use subdomains, instead of subdirectories. Doesn’t work with ‘localhost’.",
            },
          ],
        },
        {
          name: "multisite-install",
          description: "Installs WordPress multisite from scratch.",
          options: [
            {
              name: "--url",
              insertValue: "--url=",
              description: "The address of the new site.",
            },
            {
              name: "--base",
              insertValue: "--base=",
              description:
                "Base path after the domain name that each site url will start with.",
              args: {
                name: "default",
                suggestions: [{ name: "/" }],
              },
            },
            {
              name: "--subdomains",
              description:
                "If passed, the network will use subdomains, instead of subdirectories. Doesn’t work with ‘localhost’.",
            },
            {
              name: "--title",
              insertValue: "--title=",
              description: "The title of the new site.",
            },
            {
              name: "--admin_user",
              insertValue: "--admin_user=",
              description: "The name of the admin user.",
              args: {
                name: "default",
                suggestions: [{ name: "admin" }],
              },
            },
            {
              name: "--admin_password",
              insertValue: "--admin_password=",
              description:
                "The password for the admin user. Defaults to randomly generated string.",
            },
            {
              name: "--admin_email",
              insertValue: "--admin_email=",
              description: "The email address for the admin user.",
            },
            {
              name: "--skip-email",
              description:
                "Don’t send an email notification to the new admin user.",
            },
            {
              name: "--skip-config",
              description: "Don’t add multisite constants to wp-config.php.",
            },
          ],
        },
        {
          name: "update",
          description: "Updates WordPress to a newer version.",
          args: [
            {
              name: "zip",
            },
          ],
          options: [
            {
              name: "--minor",
              description:
                "Only perform updates for minor releases (e.g. update from WP 4.3 to 4.3.3 instead of 4.4.2).",
            },
            {
              name: "--version",
              insertValue: "--version=",
              description:
                "Update to a specific version, instead of to the latest version. Alternatively accepts ‘nightly’.",
            },
            {
              name: "--force",
              description:
                "Update even when installed WP version is greater than the requested version.",
            },
            {
              name: "--locale",
              insertValue: "--locale=",
              description: "Select which language you want to download.",
            },
            {
              name: "--insecure",
              description:
                "Retry download without certificate validation if TLS handshake fails. Note: This makes the request vulnerable to a MITM attack.",
            },
          ],
        },
        {
          name: "update-db",
          description: "Runs the WordPress database update procedure.",
          options: [
            {
              name: "--network",
              description: "Update databases for all sites on a network.",
            },
            {
              name: "--dry-run",
              description:
                "Compare database versions without performing the update.",
            },
          ],
        },
        {
          name: "verify-checksums",
          description:
            "Verifies WordPress files against WordPress.org’s checksums.",
          options: [
            {
              name: "--version",
              insertValue: "--version=",
              description:
                "Verify checksums against a specific version of WordPress.",
            },
            {
              name: "--locale",
              insertValue: "--locale=",
              description:
                "Verify checksums against a specific locale of WordPress.",
            },
            {
              name: "--insecure",
              description:
                "Verify checksums against a specific locale of WordPress.",
            },
          ],
        },
        {
          name: "version",
          description: "Displays the WordPress version.",
          options: [
            {
              name: "--extra",
              description: "Show extended version information.",
            },
          ],
        },
      ],
    },
    {
      name: "cron",
      description:
        "Tests, runs, and deletes WP-Cron events; manages WP-Cron schedules.",
      subcommands: [
        {
          name: "event",
          description: "Schedules, runs, and deletes WP-Cron events.",
        },
        {
          name: "schedule",
          description: "Gets WP-Cron schedules.",
          subcommands: [
            {
              name: "list",
              description: "List available cron schedules.",
              options: [
                {
                  name: "--fields",
                  insertValue: "--fields=",
                  description: "Limit the output to specific object fields.",
                },
                {
                  name: "--field",
                  insertValue: "--field=",
                  description:
                    "Prints the value of a single field for each schedule.",
                },
                {
                  name: "--format",
                  insertValue: "--format=",
                  description: "Render output in a particular format.",
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
            "Tests the WP Cron spawning system and reports back its status.",
        },
      ],
    },
    {
      name: "db",
      description:
        "Performs basic database operations using credentials stored in wp-config.php.",
      subcommands: [
        {
          name: "check",
          description: "Checks the current status of the database.",
          options: [
            {
              name: "--dbuser",
              insertValue: "--dbuser=",
              description:
                "Username to pass to mysqlcheck. Defaults to DB_USER.",
            },
            {
              name: "--dbpass",
              insertValue: "--dbpass=",
              description:
                "Password to pass to mysqlcheck. Defaults to DB_PASSWORD.",
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysqlcheck. Refer to mysqlcheck docs.",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration.",
            },
          ],
        },
        {
          name: "clean",
          description:
            "Removes all tables with `$table_prefix` from the database.",
          options: [
            {
              name: "--dbuser",
              insertValue: "--dbuser=",
              description:
                "Username to pass to mysqlcheck. Defaults to DB_USER.",
            },
            {
              name: "--dbpass",
              insertValue: "--dbpass=",
              description:
                "Password to pass to mysqlcheck. Defaults to DB_PASSWORD.",
            },
            {
              name: "--yes",
              description: "Answer yes to the confirmation message.",
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
              insertValue: "--database=",
              description: "Use a specific database. Defaults to DB_NAME.",
            },
            {
              name: "--default-character-set",
              insertValue: "--default-character-set=",
              description:
                "Use a specific character set. Defaults to DB_CHARSET when defined.",
            },
            {
              name: "--dbuser",
              insertValue: "--dbuser=",
              description: "Username to pass to mysql. Defaults to DB_USER.",
            },
            {
              name: "--dbpass",
              insertValue: "--dbpass=",
              description:
                "Password to pass to mysql. Defaults to DB_PASSWORD.",
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysql. Refer to mysql docs.",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration.",
            },
          ],
        },
        {
          name: "columns",
          description: "Displays information about a given table.",
          args: [
            {
              name: "table",
            },
          ],
          options: [
            {
              name: "--format",
              insertValue: "--format=",
              description: "Render output in a particular format.",
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
          description: "Creates a new database.",
          options: [
            {
              name: "--dbuser",
              insertValue: "--dbuser=",
              description: "Username to pass to mysql. Defaults to DB_USER.",
            },
            {
              name: "--dbpass",
              insertValue: "--dbpass=",
              description:
                "Password to pass to mysql. Defaults to DB_PASSWORD.",
            },
          ],
        },
        {
          name: "drop",
          description: "Deletes the existing database.",
          options: [
            {
              name: "--dbuser",
              insertValue: "--dbuser=",
              description: "Username to pass to mysql. Defaults to DB_USER.",
            },
            {
              name: "--dbpass",
              insertValue: "--dbpass=",
              description:
                "Password to pass to mysql. Defaults to DB_PASSWORD.",
            },
            {
              name: "--yes",
              description: "Answer yes to the confirmation message.",
            },
          ],
        },
        {
          name: "export",
          description: "Exports the database to a file or to STDOUT.",
          args: [
            {
              name: "file",
            },
          ],
          options: [
            {
              name: "--dbuser",
              insertValue: "--dbuser=",
              description:
                "Username to pass to mysqldump. Defaults to DB_USER.",
            },
            {
              name: "--dbpass",
              insertValue: "--dbpass=",
              description:
                "Password to pass to mysqldump. Defaults to DB_PASSWORD.",
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysqldump. Refer to mysqldump docs.",
            },
            {
              name: "--tables",
              insertValue: "--tables=",
              description:
                "The comma separated list of specific tables to export. Excluding this parameter will export all tables in the database.",
            },
            {
              name: "--exclude_tables",
              insertValue: "--exclude_tables=",
              description:
                "The comma separated list of specific tables that should be skipped from exporting. Excluding this parameter will export all tables in the database.",
            },
            {
              name: "--include-tablespaces",
              description:
                "Skips adding the default –no-tablespaces option to mysqldump.",
            },
            {
              name: "--porcelain",
              description: "Output filename for the exported database.",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration.",
            },
          ],
        },
        {
          name: "import",
          description: "Imports a database from a file or from STDIN.",
          args: [
            {
              name: "file",
            },
          ],
          options: [
            {
              name: "--dbuser",
              insertValue: "--dbuser=",
              description: "Username to pass to mysql. Defaults to DB_USER.",
            },
            {
              name: "--dbpass",
              insertValue: "--dbpass=",
              description:
                "Password to pass to mysql. Defaults to DB_PASSWORD.",
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysqldump. Refer to mysqldump docs.",
            },
            {
              name: "--skip-optimization",
              description:
                "When using an SQL file, do not include speed optimization such as disabling auto-commit and key checks.",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration.",
            },
          ],
        },
        {
          name: "optimize",
          description: "Optimizes the database.",
          options: [
            {
              name: "--dbuser",
              insertValue: "--dbuser=",
              description:
                "Username to pass to mysqlcheck. Defaults to DB_USER.",
            },
            {
              name: "--dbpass",
              insertValue: "--dbpass=",
              description:
                "Password to pass to mysqlcheck. Defaults to DB_PASSWORD.",
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysqldump. Refer to mysqldump docs.",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration.",
            },
          ],
        },
        {
          name: "prefix",
          description: "Displays the database table prefix.",
        },
        {
          name: "query",
          description: "Executes a SQL query against the database.",
          args: [
            {
              name: "sql",
            },
          ],
          options: [
            {
              name: "--dbuser",
              insertValue: "--dbuser=",
              description: "Username to pass to mysql. Defaults to DB_USER.",
            },
            {
              name: "--dbpass",
              insertValue: "--dbpass=",
              description:
                "Password to pass to mysql. Defaults to DB_PASSWORD.",
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysqldump. Refer to mysqldump docs.",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration.",
            },
          ],
        },
        {
          name: "repair",
          description: "Repairs the database.",
          options: [
            {
              name: "--dbuser",
              insertValue: "--dbuser=",
              description:
                "Username to pass to mysqlcheck. Defaults to DB_USER.",
            },
            {
              name: "--dbpass",
              insertValue: "--dbpass=",
              description:
                "Password to pass to mysqlcheck. Defaults to DB_PASSWORD.",
            },
            {
              name: "--field=value",
              insertValue: "--",
              description:
                "Extra arguments to pass to mysqldump. Refer to mysqldump docs.",
            },
            {
              name: "--defaults",
              description:
                "Loads the environment’s MySQL option files. Default behavior is to skip loading them to avoid failures due to misconfiguration.",
            },
          ],
        },
        {
          name: "reset",
          description: "Removes all tables from the database.",
          options: [
            {
              name: "--dbuser",
              insertValue: "--dbuser=",
              description: "Username to pass to mysql. Defaults to DB_USER.",
            },
            {
              name: "--dbpass",
              insertValue: "--dbpass=",
              description:
                "Password to pass to mysql. Defaults to DB_PASSWORD.",
            },
            {
              name: "--yes",
              description: "Answer yes to the confirmation message.",
            },
          ],
        },
        {
          name: "search",
          description: "Finds a string in the database.",
          args: [
            {
              name: "search",
            },
            {
              name: "tables",
            },
          ],
          options: [
            {
              name: "--network",
              description:
                "Search through all the tables registered to $wpdb in a multisite install.",
            },
            {
              name: "--all-tables-with-prefix",
              description:
                "Search through all tables that match the registered table prefix, even if not registered on $wpdb. On one hand, sometimes plugins use tables without registering them to $wpdb. On another hand, this could return tables you don’t expect. Overrides –network.",
            },
            {
              name: "--all-tables",
              description:
                "Search through ALL tables in the database, regardless of the prefix, and even if not registered on $wpdb. Overrides –network and –all-tables-with-prefix.",
            },
            {
              name: "--before_context",
              insertValue: "--before_context=",
              description: "Number of characters to display before the match.",
              args: {
                name: "default",
                suggestions: [{ name: "40" }],
              },
            },
            {
              name: "--after_context",
              insertValue: "--after_context=",
              description: "Number of characters to display after the match.",
              args: {
                name: "default",
                suggestions: [{ name: "40" }],
              },
            },
            {
              name: "--regex",
              description:
                "Runs the search as a regular expression (without delimiters). The search becomes case-sensitive (i.e. no PCRE flags are added). Delimiters must be escaped if they occur in the expression. Because the search is run on individual columns, you can use the ^ and $ tokens to mark the start and end of a match, respectively.",
            },
            {
              name: "--regex-flags",
              insertValue: "--regex-flags=",
              description:
                "Pass PCRE modifiers to the regex search (e.g. ‘i’ for case-insensitivity).",
            },
            {
              name: "--regex-delimiter",
              insertValue: "--regex-delimiter=",
              description:
                "The delimiter to use for the regex. It must be escaped if it appears in the search string. The default value is the result of chr(1).",
            },
            {
              name: "--table_column_once",
              description:
                "Output the ‘table:column’ line once before all matching row lines in the table column rather than before each matching row.",
            },
            {
              name: "--one_line",
              description:
                "Place the ‘table:column’ output on the same line as the row id and match (‘table:column:id:match’). Overrides –table_column_once.",
            },
            {
              name: "--matches_only",
              description:
                "Only output the string matches (including context). No ‘table:column’s or row ids are outputted.",
            },
            {
              name: "--stats",
              description:
                "Output stats on the number of matches found, time taken, tables/columns/rows searched, tables skipped..",
            },
            {
              name: "--table_column_color",
              insertValue: "--table_column_color=",
              description:
                "Percent color code to use for the ‘table:column’ output. For a list of available percent color codes, see below. Default ‘%G’ (bright green).",
            },
            {
              name: "--id_color",
              insertValue: "--id_color=",
              description:
                "Percent color code to use for the row id output. For a list of available percent color codes, see below. Default ‘%Y’ (bright yellow).",
            },
            {
              name: "--match_color",
              insertValue: "--match_color=",
              description:
                "Percent color code to use for the match (unless both before and after context are 0, when no color code is used). For a list of available percent color codes, see below. Default ‘%3%k’ (black on a mustard background).",
            },
          ],
        },
        {
          name: "size",
          description: "Displays the database name and size.",
          options: [
            {
              name: "--size_format",
              insertValue: "--size_format=",
              description: "Display the database size only, as a bare number.",
              args: {
                name: "options",
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
              name: "--table",
              description:
                "Display each table name and size instead of the database size.",
            },
            {
              name: "--human-readable",
              description: "Display database sizes in human readable formats.",
            },
            {
              name: "--format",
              insertValue: "--format=",
              description: "Render output in a particular format.",
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
              insertValue: "--scope=",
              description:
                "Can be all, global, ms_global, blog, or old tables. Defaults to all.",
            },
            {
              name: "--network",
              description: "List all the tables in a multisite install.",
            },
            {
              name: "--all-tables-with-prefix",
              description:
                "List all tables that match the table prefix even if not registered on $wpdb. Overrides –network.",
            },
            {
              name: "--all-tables",
              description:
                "List all tables in the database, regardless of the prefix, and even if not registered on $wpdb. Overrides –all-tables-with-prefix.",
            },
          ],
        },
        {
          name: "tables",
          description: "Lists the database tables.",
          args: [
            {
              name: "table",
            },
          ],
          options: [
            {
              name: "--scope",
              insertValue: "--scope=",
              description:
                "Can be all, global, ms_global, blog, or old tables. Defaults to all.",
            },
            {
              name: "--network",
              description: "List all the tables in a multisite install.",
            },
            {
              name: "--all-tables-with-prefix",
              description:
                "List all tables that match the table prefix even if not registered on $wpdb. Overrides –network.",
            },
            {
              name: "--all-tables",
              description:
                "List all tables in the database, regardless of the prefix, and even if not registered on $wpdb. Overrides –all-tables-with-prefix.",
            },
            {
              name: "--format",
              insertValue: "--format=",
              description: "Render output in a particular format.",
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
        "Create a distribution archive based on a project’s .distignore file.",
      args: [
        {
          name: "path",
        },
        {
          name: "target",
        },
      ],
      options: [
        {
          name: "--create-target-dir",
          description: "Automatically create the target directory as needed.",
        },
        {
          name: "--format",
          insertValue: "--format=",
          description: "Choose the format for the archive.",
          args: {
            name: "options",
            suggestions: [{ name: "zip" }, { name: "targz" }],
          },
        },
      ],
    },
    {
      name: "embed",
      description: "Inspects oEmbed providers, clears embed cache, and more.",
      subcommands: [
        {
          name: "cache",
          description: "Finds, triggers, and deletes oEmbed caches.",
          subcommands: [
            {
              name: "clear",
              description: "Deletes all oEmbed caches for a given post.",
              args: [
                {
                  name: "post_id",
                  // description: "ID of the post to clear the cache for."
                },
              ],
            },
            {
              name: "find",
              description: "Finds an oEmbed cache post ID for a given URL.",
              args: [
                {
                  name: "url",
                  // description: "ID of the post to clear the cache for."
                },
              ],
              options: [
                {
                  name: "--width",
                  insertValue: "--width=",
                  description:
                    "Width of the embed in pixels. Part of cache key so must match. Defaults to content_width if set else 500px, so is theme and context dependent.",
                },
                {
                  name: "--height",
                  insertValue: "--height=",
                  description:
                    "Height of the embed in pixels. Part of cache key so must match. Defaults to 1.5 * default width (content_width or 500px), to a maximum of 1000px.",
                },
                {
                  name: "--discover",
                  description:
                    "Whether to search with the discover attribute set or not. Part of cache key so must match. If not given, will search with attribute: unset, ‘1’, ‘0’, returning first.",
                },
              ],
            },
            {
              name: "trigger",
              description:
                "Triggers the caching of all oEmbed results for a given post.",
              args: [
                {
                  name: "post_id",
                  // description: "ID of the post to do the caching for."
                },
              ],
            },
          ],
        },
        {
          name: "fetch",
          description: "Attempts to convert a URL into embed HTML.",
          args: [
            {
              name: "url",
              // description: "URL to retrieve oEmbed data for."
            },
          ],
          options: [
            {
              name: "--width",
              insertValue: "--width=",
              description: "Width of the embed in pixels.",
            },
            {
              name: "--height",
              insertValue: "--height=",
              description: "Height of the embed in pixels.",
            },
            {
              name: "--post-id",
              insertValue: "--post-id=",
              description: "Cache oEmbed response for a given post.",
            },
            {
              name: "--discover",
              description: "Enable oEmbed discovery. Defaults to true.",
            },
            {
              name: "--skip-cache",
              description:
                "Ignore already cached oEmbed responses. Has no effect if using the ‘raw’ option, which doesn’t use the cache.",
            },
            {
              name: "--skip-sanitization",
              description:
                "Remove the filter that WordPress from 4.4 onwards uses to sanitize oEmbed responses. Has no effect if using the ‘raw’ option, which by-passes sanitization.",
            },
            {
              name: "--do-shortcode",
              description:
                "If the URL is handled by a registered embed handler and returns a shortcode, do shortcode and return result. Has no effect if using the ‘raw’ option, which by-passes handlers.",
            },
            {
              name: "--limit-response-size",
              insertValue: "--limit-response-size=",
              description:
                "Limit the size of the resulting HTML when using discovery. Default 150 KB (the standard WordPress limit). Not compatible with ‘no-discover’.",
            },
            {
              name: "--raw",
              description:
                "Return the raw oEmbed response instead of the resulting HTML. Ignores the cache and does not sanitize responses or use registered embed handlers.",
            },
            {
              name: "--raw-format",
              insertValue: "--raw-format=",
              description: "The serialization format for the value.",
              args: {
                name: "options",
                suggestions: [{ name: "json" }, { name: "xml" }],
              },
            },
          ],
        },
        {
          name: "handler",
          description: "Retrieves embed handlers.",
          subcommands: [
            {
              name: "list",
              description: "Lists all available embed handlers.",
              options: [
                {
                  name: "--field",
                  insertValue: "--field=",
                  description: "Display the value of a single field.",
                },
                {
                  name: "--fields",
                  insertValue: "--fields=",
                  description: "Limit the output to specific fields.",
                },
                {
                  name: "--format",
                  insertValue: "--format=",
                  description: "Render output in a particular format.",
                  args: {
                    name: "options",
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
          description: "Retrieves oEmbed providers.",
          subcommands: [
            {
              name: "list",
              description: "Lists all available oEmbed providers.",
              options: [
                {
                  name: "--field",
                  insertValue: "--field=",
                  description: "Display the value of a single field.",
                },
                {
                  name: "--fields",
                  insertValue: "--fields=",
                  description: "Limit the output to specific fields.",
                },
                {
                  name: "--format",
                  insertValue: "--format=",
                  description: "Render output in a particular format.",
                  args: {
                    name: "options",
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
              description: "Gets the matching provider for a given URL.",
              args: [
                {
                  name: "url",
                  // description: "URL to retrieve oEmbed data for."
                },
              ],
              options: [
                {
                  name: "--discover",
                  description: "Enable oEmbed discovery. Defaults to true.",
                },
                {
                  name: "--limit-response-size",
                  insertValue: "--limit-response-size=",
                  description:
                    "Limit the size of the resulting HTML when using discovery. Default 150 KB (the standard WordPress limit). Not compatible with ‘no-discover’.",
                },
                {
                  name: "--link-typet",
                  insertValue: "--link-typet=",
                  description:
                    "Whether to accept only a certain link type when using discovery. Defaults to any (json or xml), preferring json. Not compatible with ‘no-discover’.",
                  args: {
                    name: "options",
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
      description: "Executes arbitrary PHP code.",
      args: [
        {
          name: "php-code",
          // description: "The code to execute, as a string."
        },
      ],
      options: [
        {
          name: "--skip-wordpress",
          description: "Execute code without loading WordPress.",
        },
      ],
    },
    {
      name: "eval-file",
      description: "Loads and executes a PHP file.",
      args: [
        {
          name: "file",
          // description: "The path to the PHP file to execute. Use ‘-‘ to run code from STDIN."
        },
        {
          name: "arg",
          // description: "One or more arguments to pass to the file. They are placed in the $args variable."
        },
      ],
      options: [
        {
          name: "--skip-wordpress",
          description: "Load and execute file without loading WordPress.",
        },
      ],
    },
    {
      name: "export",
      description: "Exports WordPress content to a WXR file.",
      options: [
        {
          name: "--dir",
          insertValue: "--dir=",
          description:
            "Full path to directory where WXR export files should be stored. Defaults to current working directory.",
        },
        {
          name: "--stdout",
          description:
            "Output the whole XML using standard output (incompatible with –dir=)",
        },
        {
          name: "--skip_comments",
          description: "Don’t include comments in the WXR export file.",
        },
        {
          name: "--max_file_size",
          insertValue: "--max_file_size=",
          description:
            "A single export file should have this many megabytes. -1 for unlimited.",
          args: {
            name: "default",
            suggestions: [{ name: "15" }],
          },
        },
        {
          name: "--start_date",
          insertValue: "--start_date=",
          description:
            "Export only posts published after this date, in format YYYY-MM-DD.",
        },
        {
          name: "--end_date",
          insertValue: "--end_date=",
          description:
            "Export only posts published before this date, in format YYYY-MM-DD.",
        },
        {
          name: "--post_type",
          insertValue: "--post_type=",
          description:
            "Export only posts with this post_type. Separate multiple post types with a comma.",
          args: {
            name: "default",
            suggestions: [{ name: "any" }],
          },
        },
        {
          name: "--post_type__not_in",
          insertValue: "--post_type__not_in=",
          description:
            "Export all post types except those identified. Separate multiple post types with a comma. Defaults to none.",
        },
        {
          name: "--post_in",
          insertValue: "--post_in=",
          description:
            "Export all posts specified as a comma- or space-separated list of IDs. Post’s attachments won’t be exported unless –with_attachments is specified.",
        },
        {
          name: "--with_attachments",
          description:
            "Force including attachments in case –post__in has been specified.",
        },
        {
          name: "--start_id",
          insertValue: "--start_id=",
          description:
            "Export only posts with IDs greater than or equal to this post ID.",
        },
        {
          name: "--max_num_posts",
          insertValue: "--max_num_posts=",
          description:
            "Export no more than <num> posts (excluding attachments).",
        },
        {
          name: "--author",
          insertValue: "--author=",
          description:
            "Export only posts by this author. Can be either user login or user ID.",
        },
        {
          name: "--category",
          insertValue: "--category=",
          description: "Export only posts in this category.",
        },
        {
          name: "--post_status",
          insertValue: "--post_status=",
          description: "Export only posts with this status.",
        },
        {
          name: "--filename_format",
          insertValue: "--filename_format=",
          description:
            "Use a custom format for export filenames. Defaults to ‘{site}.wordpress.{date}.{n}.xml’.",
        },
      ],
    },
    {
      name: "find",
      description: "Find WordPress installations on the filesystem.",
      args: [
        {
          name: "path",
          // description: "Path to search the subdirectories of."
        },
      ],
      options: [
        {
          name: "--skip-ignored-paths",
          insertValue: "--skip-ignored-paths=",
          description: "Skip the paths that are ignored by default.",
        },
        {
          name: "--include_ignored_paths",
          insertValue: "--include_ignored_paths=",
          description:
            "Include additional ignored paths as CSV (e.g. ‘/sys-backup/,/temp/’).",
        },
        {
          name: "--max_depth",
          insertValue: "--max_depth=",
          description: "Only recurse to a specified depth, inclusive.",
        },
        {
          name: "--fields",
          insertValue: "--fields=",
          description: "Limit the output to specific row fields.",
        },
        {
          name: "--field",
          insertValue: "--field=",
          description: "Output a specific field for each row.",
        },
        {
          name: "--format",
          insertValue: "--format=",
          description: "Render output in a particular format.",
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
      ],
    },
    {
      name: "help",
      description: "Gets help on WP-CLI, or on a specific command.",
      subcommands: [{}],
    },
    {
      name: "i18n",
      description:
        "Provides internationalization tools for WordPress projects.",
      subcommands: [{}],
    },
    {
      name: "import",
      description: "Imports content from a given WXR file.",
      subcommands: [{}],
    },
    {
      name: "language",
      description: "Installs, activates, and manages language packs.",
      subcommands: [{}],
    },
    {
      name: "maintenance-mode",
      description:
        "Activates, deactivates or checks the status of the maintenance mode of a site.",
      subcommands: [{}],
    },
    {
      name: "media",
      description:
        "Imports files as attachments, regenerates thumbnails, or lists registered image sizes.",
      subcommands: [{}],
    },
    {
      name: "menu",
      description:
        "Lists, creates, assigns, and deletes the active theme’s navigation menus.",
      subcommands: [{}],
    },
    {
      name: "network",
      description: "Perform network-wide operations.",
      subcommands: [{}],
    },
    {
      name: "option",
      description:
        "Retrieves and sets site options, including plugin and WordPress settings.",
      subcommands: [{}],
    },
    {
      name: "package",
      description: "Lists, installs, and removes WP-CLI packages.",
      subcommands: [{}],
    },
    {
      name: "plugin",
      description:
        "Manages plugins, including installs, activations, and updates.",
      subcommands: [{}],
    },
    {
      name: "post",
      description: "Manages posts, content, and meta.",
      subcommands: [{}],
    },
    {
      name: "post-type",
      description: "Retrieves details on the site’s registered post types.",
      subcommands: [{}],
    },
    {
      name: "profile",
      description: "",
      subcommands: [{}],
    },
    {
      name: "rewrite",
      description:
        "Lists or flushes the site’s rewrite rules, updates the permalink structure.",
      subcommands: [{}],
    },
    {
      name: "role",
      description:
        "Manages user roles, including creating new roles and resetting to defaults.",
      subcommands: [{}],
    },
    {
      name: "scaffold",
      description:
        "Generates code for post types, taxonomies, plugins, child themes, etc.",
      subcommands: [{}],
    },
    {
      name: "search-replace",
      description: "Searches/replaces strings in the database.",
      subcommands: [{}],
    },
    {
      name: "server",
      description:
        "Launches PHP’s built-in web server for a specific WordPress installation.",
      subcommands: [{}],
    },
    {
      name: "shell",
      description:
        "Opens an interactive PHP console for running and testing PHP code.",
      subcommands: [{}],
    },
    {
      name: "sidebar",
      description: "Lists registered sidebars.",
      subcommands: [{}],
    },
    {
      name: "site",
      description:
        "Creates, deletes, empties, moderates, and lists one or more sites on a multisite installation.",
      subcommands: [{}],
    },
    {
      name: "super-admin",
      description:
        "Lists, adds, or removes super admin users on a multisite installation.",
      subcommands: [{}],
    },
    {
      name: "taxonomy",
      description: "Retrieves information about registered taxonomies.",
      subcommands: [{}],
    },
    {
      name: "term",
      description:
        "Manages taxonomy terms and term meta, with create, delete, and list commands.",
      subcommands: [{}],
    },
    {
      name: "theme",
      description:
        "Manages themes, including installs, activations, and updates.",
      subcommands: [{}],
    },
    {
      name: "transient",
      description:
        "Adds, gets, and deletes entries in the WordPress Transient Cache.",
      subcommands: [{}],
    },
    {
      name: "user",
      description:
        "Manages users, along with their roles, capabilities, and meta.",
      subcommands: [{}],
    },
    {
      name: "widget",
      description:
        "Manages widgets, including adding and moving them within sidebars.",
      subcommands: [{}],
    },
  ],
  options: global_options,
};
