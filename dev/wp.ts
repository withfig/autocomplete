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
          variadic: true,
          name: "add",
          // variadic: false,
          description: "Adds a value to the object cache.",
          args: {
            variadic: true,
            suggestions: [
              {
                name: "key",
                insertValue: "key",
                // isOptional: true,
                // description: "Cache key."
              },
              {
                name: "value",
                insertValue: "value",
                // isOptional: true,
                // description: "Value to add to the key."
              },
              {
                name: "[group]",
                insertValue: "[group]",
                // isOptional: true,
                // description: "Method for grouping data within the cache which allows the same key to be used across groups."
              },
              {
                name: "[expiration]",
                insertValue: "[expiration]",
                // isOptional: true,
                // description: "Define how long to keep the value, in seconds. 0 means as long as possible."
              },
            ],
          },
        },
        {
          name: "decr",
          description: "Decrements a value in the object cache.",
        },
        {
          name: "delete",
          // variadic: true,
          description: "Removes a value from the object cache.",
        },
        {
          name: "flush",
          description: "Flushes the object cache.",
        },
        {
          name: "get",
          description: "Gets a value from the object cache.",
        },
        {
          name: "incr",
          description: "Increments a value in the object cache.",
        },
        {
          name: "replace",
          description:
            "Replaces a value in the object cache, if the value already exists.",
        },
        {
          name: "set",
          description:
            "Sets a value to the object cache, regardless of whether it already exists.",
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
  ],
  options: [{}],
};
