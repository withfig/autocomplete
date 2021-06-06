// To learn more about Fig"s autocomplete standard visit: https://fig.io/docs/autocomplete/building-a-spec#building-your-first-autocomplete-spec
const global_options = [
  {
    name: ["--path="],
    description: "Path to the WordPress files.",
    args: {
      name: "<path>",
    },
  },
  {
    name: ["--url="],
    description:
      "Pretend request came from given URL. In multisite, this argument is how the target site is specified.",
    args: {
      name: "<url>",
    },
  },
  {
    name: ["--ssh=[<scheme>:][<user>@]<host|container>[:<port>][<path>]"],
    description:
      "Perform operation against a remote server over SSH (or a container using scheme of “docker”, “docker-compose”, “vagrant”).",
    args: [
      {
        name: "<scheme>:",
      },
      {
        name: "<user@>",
      },
    ],
  },
  {
    name: ["--http="],
    description:
      "Perform operation against a remote WordPress installation over HTTP.",
    args: {
      name: "<http>",
    },
  },
  {
    name: ["--user=<id|login|email>"],
    description: "Set the WordPress user.",
    args: {
      name: "<path>",
    },
  },
  {
    name: ["--skip-plugins[=]"],
    description:
      "Skip loading all plugins, or a comma-separated list of plugins. Note: mu-plugins are still loaded.",
    args: {
      name: "<plugins>",
    },
  },
  {
    name: ["--skip-themes[=]"],
    description:
      "Skip loading all themes, or a comma-separated list of themes.",
    args: {
      name: "<themes>",
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
      name: "<path>",
    },
  },
  {
    name: ["--exec="],
    description:
      "Execute PHP code before running the command (may be used more than once).",
    args: {
      name: "<php-code>",
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
      name: "<group>",
    },
  },
  {
    name: ["--prompt[=]"],
    description:
      "Prompt the user to enter values for all command arguments, or a subset specified as comma-separated values.",
    args: {
      name: "<assoc>",
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
  subcommands: [
    {
      name: "admin",
      description: "Open /wp-admin/ in a browser.",

      // If a subcommand or option takes an argument, you must include the args prop, even if it"s an empty object (like below)
      // If you want to build custom suggestions for arguments check out: https://fig.io/docs/autocomplete/building-a-spec#making-advanced-suggestions
      args: [{}],
      options: global_options,
    },
  ],
  options: [{}],
};
