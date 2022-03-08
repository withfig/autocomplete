// https://laravel.com/docs/8.x/valet
// laravel version 8
// valet version 2.15.x
// 19 June 2021

const global_option_help: Fig.Option = {
  name: ["-h", "--help"],
  description:
    "Display help for the given command. When no command is given display help for the list command",
};

const global_option_quiet: Fig.Option = {
  name: ["-q", "--quiet"],
  description: "Do not output any message",
};

const global_option_version: Fig.Option = {
  name: ["-V", "--version"],
  description: "Display this application version",
};

const global_option_ansi: Fig.Option = {
  name: "--ansi",
  description: "Force (or disable --no-ansi) ANSI output",
};

const global_option_noansi: Fig.Option = {
  name: "--no-ansi",
  description: "Force (or disable --no-ansi) ANSI output",
};

const global_option_nointeraction: Fig.Option = {
  name: ["-n", "--no-interaction"],
  description: "Do not ask any interactive question",
};

const global_option_verbose: Fig.Option = {
  name: ["-v", "-vv", "-vvv", "--verbose"],
  description:
    "Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug",
  args: {
    name: "verbosity",
    suggestions: [
      {
        name: "1",
        description: "Normal output",
      },
      {
        name: "2",
        description: "More verbose output",
      },
      {
        name: "3",
        description: "Debug output",
      },
    ],
    isOptional: true,
  },
};

const global_option_secure: Fig.Option = {
  name: "--secure",
};

const completionSpec: Fig.Spec = {
  name: "valet",
  description:
    "Valet is a Laravel development environment for macOS minimalists",
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
      name: "diagnose",
      description: "Output diagnostics to aid in debugging Valet",
      options: [
        {
          name: ["-p", "--print"],
          description: "Print diagnostics output while running",
        },
        {
          name: "--plain",
          description: "Format clipboard output as plain text",
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
      name: "directory-listing",
      description:
        "Determine directory-listing behavior. Default is off, which means a 404 will display",
      args: {
        name: "status",
        description:
          "On or off. (default=off) will show a 404 page; [on] will display a listing if project folder exists but requested URI not found",
        suggestions: [{ name: "on" }, { name: "off" }],
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
      name: "fetch-share-url",
      description: "Get the URL to the current Ngrok tunnel",
      args: {
        name: "domain",
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
      name: "forget",
      description:
        "Remove the current working (or specified) directory from Valet's list of paths",
      args: {
        name: "path",
        template: "folders",
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
      name: "help",
      description: "Display help for a command",
      args: {
        name: "command_name",
        description: "The command name [default: 'help']",
      },
      options: [
        {
          name: "--format",
          insertValue: "--format={cursor}",
          requiresEquals: true,
          description:
            "The output format (txt, xml, json, or md) [default: 'txt']",
          args: {
            name: "FORMAT",
            suggestions: [
              { name: "txt" },
              { name: "xml" },
              { name: "json" },
              { name: "md" },
            ],
          },
        },
        { name: "--raw", description: "To output raw command help" },
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
      description: "Install the Valet services",
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
      name: "link",
      description: "Link the current working directory to Valet",
      args: {
        name: "name",
        isOptional: true,
      },
      options: [
        global_option_secure,
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
      description: "Display all of the registered Valet links",
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
      name: "list",
      description: "List commands",
      args: {
        name: "namespace",
      },
      options: [
        { name: "--raw", description: "To output raw command list" },
        {
          name: "--format",
          insertValue: "--format={cursor}",
          requiresEquals: true,
          description:
            "The output format (txt, xml, json, or md) [default: 'txt']",
          args: {
            name: "FORMAT",
            suggestions: [
              { name: "txt" },
              { name: "xml" },
              { name: "json" },
              { name: "md" },
            ],
          },
        },
        {
          name: "--short",
          description: "To skip describing commands' arguments",
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
      name: "log",
      description: "Tail log file",
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
          insertValue: "--lines={cursor}",
          requiresEquals: true,
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
      name: "loopback",
      description: "Get or set the loopback address used for Valet sites",
      args: {
        name: "loopback",
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
      name: "on-latest-version",
      description: "Determine if this is the latest version of Valet",
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
      name: "open",
      description:
        "Open the site for the current (or specified) directory in your browser",
      args: {
        name: "domain",
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
      name: "park",
      description:
        "Register the current working (or specified) directory with Valet",
      args: {
        name: "path",
        template: "folders",
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
      name: "parked",
      description: "Display all the current sites within parked paths",
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
      description: "Get all of the paths registered with Valet",
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
      description: "Display all of the proxy sites",
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
        "Create an Nginx proxy site for the specified host. Useful for docker, mailhog etc",
      args: [
        {
          name: "domain",
        },
        {
          name: "host",
        },
      ],
      options: [
        global_option_secure,
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
      description: "Restart the Valet services",
      args: {
        name: "service",
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
      name: "secure",
      description: "Secure the given domain with a trusted TLS certificate",
      args: {
        name: "domain",
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
      name: "share",
      description: "Generate a publicly accessible URL for your project",
      options: [
        {
          name: "--auth",
          description: "Enforce basic auth on tunnel endpoint, 'user:password'",
        },
        {
          name: "--authtoken",
          description: "Ngrok.com authtoken identifying a user",
          args: {
            name: "token",
          },
        },
        {
          name: "--bind-tls",
          description: "Listen for http, https or both: true/false/both",
          args: {
            name: "listen",
            suggestions: [
              { name: "true", insertValue: "'true'" },
              { name: "false", insertValue: "'false'" },
              { name: "both", insertValue: "'both'" },
            ],
          },
        },
        {
          name: "--config",
          description: "Path to config files; they are merged if multiple",
          args: {
            name: "config",
            template: "filepaths",
          },
        },
        {
          name: "--host-header",
          description:
            "Set Host header; if 'rewrite' use local address hostname",
          args: {
            name: "host",
          },
        },
        {
          name: "--hostname",
          description: "Host tunnel on custom hostname (requires DNS CNAME)",
        },
        {
          name: "--inspect",
          description: "Enable/disable http introspection",
        },
        {
          name: "--log",
          description: "Path to log file, 'stdout', 'stderr' or 'false'",
          args: {
            name: "path",
            suggestions: [
              { name: "stdout", insertValue: "'stdout'" },
              { name: "stderr", insertValue: "'stderr'" },
              { name: "false", insertValue: "'false'" },
            ],
          },
        },
        {
          name: "--log-format",
          description: "Log record format: 'term', 'logfmt', 'json'",
          args: {
            name: "format",
            suggestions: [
              { name: "term", insertValue: "'term'" },
              { name: "logfmt", insertValue: "'logfmt'" },
              { name: "json", insertValue: "'json'" },
            ],
          },
        },
        {
          name: "--log-level",
          description: "Logging level",
          args: {
            name: "level",
            suggestions: [{ name: "info", insertValue: "'info'" }],
          },
        },
        {
          name: "--region",
          description:
            "Ngrok server region [us, eu, au, ap, sa, jp, in] (default: us)",
          args: {
            name: "region",
            suggestions: [
              { name: "us" },
              { name: "eu" },
              { name: "au" },
              { name: "ap" },
              { name: "sa" },
              { name: "jp" },
              { name: "in" },
            ],
          },
        },
        {
          name: "--subdomain",
          description: "Host tunnel on a custom subdomain",
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
      name: "start",
      description: "Start the Valet services",
      args: {
        name: "service",
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
      name: "stop",
      description: "Stop the Valet services",
      args: {
        name: "service",
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
      name: "tld",
      description: "Get or set the TLD used for Valet sites",
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
        "Add sudoers files for Brew and Valet to make Valet commands run without passwords",
      args: {
        name: "options",
      },
      options: [
        {
          name: "--off",
          description:
            "Remove the sudoers files so normal sudo password prompts are required",
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
      name: "uninstall",
      description: "Uninstall the Valet services",
      options: [
        {
          name: "--force",
          description:
            "Do a forceful uninstall of Valet and related Homebrew pkgs",
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
      description: "Remove the specified Valet link",
      args: {
        name: "name",
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
      description: "Delete an Nginx proxy config",
      args: {
        name: "domain",
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
      description:
        "Stop serving the given domain over HTTPS and remove the trusted TLS certificate",
      args: {
        name: "domain",
      },
      options: [
        { name: "--all" },
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
      description: "Change the version of PHP used by valet",
      args: {
        name: "phpVersion",
        suggestions: [
          { name: "php@7.2" },
          { name: "php@7.3" },
          { name: "php@7.4" },
          { name: "php@8.0" },
        ],
      },
      options: [
        { name: "--force" },
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
      name: "which",
      description:
        "Determine which Valet driver serves the current working directory",
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

export default completionSpec;
