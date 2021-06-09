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
      name: "type",
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
      name: "type",
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
                    name: "type",
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
                    name: "type",
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
                    name: "output type",
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
                    name: "type",
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
                name: "output type",
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
                name: "type",
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
                name: "type",
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
                name: "format",
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
                name: "format",
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
                    name: "type",
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
                    name: "type",
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
                    name: "type",
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
                    name: "type",
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
                    name: "type",
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
                  name: "action",
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
                    name: "type",
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
                    name: "type",
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
                    name: "type",
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
                name: "type",
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
                name: "type",
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
                name: "type",
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
                name: "type",
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
                name: "type",
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
                name: "type",
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
                name: "place",
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
                name: "type",
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
      subcommands: [{}],
    },
    {
      name: "cron",
      description:
        "Tests, runs, and deletes WP-Cron events; manages WP-Cron schedules.",
      subcommands: [{}],
    },
    {
      name: "db",
      Pdescription:
        "Performs basic database operations using credentials stored in wp-config.php.",
      subcommands: [{}],
    },
    {
      name: "dist-archive",
      description:
        "Create a distribution archive based on a project’s .distignore file.",
      subcommands: [{}],
    },
    {
      name: "embed",
      description: "Inspects oEmbed providers, clears embed cache, and more.",
      subcommands: [{}],
    },
    {
      name: "eval",
      description: "Executes arbitrary PHP code.",
      subcommands: [{}],
    },
    {
      name: "eval-file",
      description: "Loads and executes a PHP file.",
      subcommands: [{}],
    },
    {
      name: "export",
      description: "Exports WordPress content to a WXR file.",
      subcommands: [{}],
    },
    {
      name: "find",
      description: "Find WordPress installations on the filesystem.",
      subcommands: [{}],
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
