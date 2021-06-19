// https://laravel.com/docs/8.x/valet
// laravel version 8
// valet version 2.15.x
// 19 June 2021

const global_option_help: Fig.Option = {
  name: ["-h", "--help"],
  description:
    "Display help for the given command. When no command is given display help for the list command.",
};

const global_option_quiet: Fig.Option = {
  name: ["-q", "--quiet"],
  description: "Do not output any message.",
};

const global_option_version: Fig.Option = {
  name: ["-V", "--version"],
  description: "Display this application version.",
};

const global_option_ansi: Fig.Option = {
  name: "--ansi",
  description: "Force (or disable --no-ansi) ANSI output.",
};

const global_option_noansi: Fig.Option = {
  name: "--no-ansi",
  description: "Force (or disable --no-ansi) ANSI output.",
};

const global_option_nointeraction: Fig.Option = {
  name: ["-n", "--no-interaction"],
  description: "Do not ask any interactive question.",
};

const global_option_verbose: Fig.Option = {
  name: ["-v", "-vv", "-vvv", "--verbose"],
  description:
    "Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug",
};

export const completion: Fig.Spec = {
  name: "valet",
  description:
    "Valet is a Laravel development environment for macOS minimalists.",
  options: [
    global_option_help,
    global_option_quiet,
    global_option_version,
    global_option_ansi,
    global_option_noansi,
    global_option_nointeraction,
    global_option_verbose,
  ],
  subcommands: [
    {
      name: "forget",
      description:
        "Run this command from a 'parked' directory to remove it from the parked directory list.",
      args: {
        name: "path",
      },
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "install",
      description:
        "This will configure and install Valet and DnsMasq. In addition, the daemons Valet depends on will be configured to launch when your system starts.",
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "log",
      description: "View a list of logs which are written by Valet's services.",
      args: {
        name: "key",
      },
      options: [
        { name: ["-f", "--follow"] },
        {
          name: "-l",
          args: {
            name: "LINES",
          },
        },
        {
          name: "--lines",
          insertValue: "--lines=",
          args: {
            name: "LINES",
          },
        },
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "link",
      description: "Link the current working directory to Valet.",
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "links",
      description: "Display all of the registered Valet links.",
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "on-latest-version",
      description: "Determine if this is the latest version of Valet.",
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "paths",
      description: "View all of your 'parked' paths.",
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "park",
      description:
        "Register the current working (or specified) directory with Valet.",
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "parked",
      description: "Display all the current sites within parked paths.",
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "proxy",
      description:
        "Sometimes you may wish to proxy a Valet domain to another service on your local machine.",
      args: [
        {
          name: "--secure",
          variadic: true,
          suggestions: [{ name: "appName" }, { name: "http://127.0.0.1:9200" }],
        },
        {
          name: "appName",
        },
      ],
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "proxies",
      description:
        "You may use the proxies command to list all site configurations that are proxied.",
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "restart",
      description: "Restart the Valet daemons.",
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "secure",
      description: "Secure the given domain with a trusted TLS certificate",
      args: {
        name: "appName",
      },
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "start",
      description: "Start the Valet daemons.",
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "stop",
      description: "Stop the Valet daemons.",
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "tld",
      description: "Link the current working directory to Valet.",
      args: {
        name: "tld",
        suggestions: [{ name: "local" }, { name: "test" }],
      },
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "trust",
      description:
        "Add sudoers files for Brew and Valet to allow Valet commands to be run without prompting for your password.",
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "uninstall",
      description:
        "Uninstall Valet: shows instructions for manual uninstall. Pass the --force option to aggressively delete all of Valet's resources.",
      options: [
        {
          name: "--force",
          description:
            "Pass the --force option to aggressively delete all of Valet's resources.",
        },
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "unlink",
      description: "Remove the specified Valet link.",
      args: {
        name: "appName",
      },
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "unproxy",
      description: "You may remove a proxy using the unproxy command.",
      args: {
        name: "appName",
      },
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "unsecure",
      description: "Secure the given domain with a trusted TLS certificate",
      args: {
        name: "appName",
      },
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
    {
      name: "use",
      description:
        "Valet allows you to switch PHP versions using the valet use php@version command. Valet will install the specified PHP version via Homebrew if it is not already installed.",
      args: {
        name: "php",
        suggestions: [{ name: "php" }, { name: "php@" }],
      },
      options: [
        global_option_help,
        global_option_quiet,
        global_option_version,
        global_option_ansi,
        global_option_noansi,
        global_option_nointeraction,
        global_option_verbose,
      ],
    },
  ],
};
