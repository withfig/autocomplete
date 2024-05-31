// https://laravel.com/docs/10.x/valet
// laravel version 10
// valet version 4.0.X
// 26 March 2023

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
        isOptional: true,
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
      description:
        "Get the URL to the current share tunnel (for Expose or ngrok)",
      args: {
        name: "domain",
        isOptional: true,
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
        isOptional: true,
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
        name: "command",
        generators: {
          script: ["valet", "list", "--raw"],
          postProcess: function (out) {
            return out.split("\n").map((command) => {
              const name = command.split(" ")[0];
              return { name: name, description: "Command", priority: 76 };
            });
          },
        },
      },
      options: [
        {
          name: "--format",
          requiresSeparator: true,
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
        {
          name: "--secure",
          description: "Link the site with a trusted TLS certificate",
        },
        {
          name: "--isolate",
          description:
            "Isolate the site to the PHP version specified in the current working directory's .valetrc file",
        },
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
        isOptional: true,
      },
      options: [
        { name: "--raw", description: "To output raw command list" },
        {
          name: "--format",
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
        isOptional: true,
      },
      options: [
        { name: ["-f", "--follow"] },
        {
          name: ["-l", "--lines"],
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
        isOptional: true,
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
      name: ["on-latest-version", "latest"],
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
        isOptional: true,
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
        isOptional: true,
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
        {
          name: "--secure",
          description: "Create a proxy with a trusted TLS certificate",
        },
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
        isOptional: true,
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
        isOptional: true,
      },
      options: [
        {
          name: "expireIn",
          description:
            "The amount of days the self signed certificate is valid for. Default is set to 368",
          requiresEquals: true,
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
        isOptional: true,
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
        isOptional: true,
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
      name: ["tld", "domain"],
      description: "Get or set the TLD used for Valet sites",
      args: {
        name: "tld",
        suggestions: [{ name: "local" }, { name: "test" }],
        isOptional: true,
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
        isOptional: true,
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
        isOptional: true,
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
          { name: "php@8.0" },
          { name: "php@8.1" },
          { name: "php@8.2" },
        ],
        isOptional: true,
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
    {
      name: "isolate",
      description:
        "Change the version of PHP used by Valet to serve the current working directory",
      args: {
        name: "phpVersion",
        isOptional: true,
        suggestions: [
          { name: "php@8.0" },
          { name: "php@8.1" },
          { name: "php@8.2" },
        ],
      },
      options: [
        {
          name: "--site",
          requiresEquals: true,
          description: "Name of the website you want to isolate",
          args: {
            name: "SITE",
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
      name: "unisolate",
      description:
        "Stop customizing the version of PHP used by Valet to serve the current working directory",
      options: [
        {
          name: "--site",
          description: "Name of the website you want to unisolate",
          args: {
            name: "SITE",
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
      name: "isolated",
      description: "List all sites using isolated versions of PHP",
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
      name: "php",
      description:
        'Proxy PHP commands to the "php" executable on the isolated site',
      args: {
        name: "command",
        isOptional: true,
      },
      options: [
        {
          name: "--site",
          requiresEquals: true,
          description:
            "Specify the site to use to get the PHP version (e.g. if the site isn't linked as its directory name)",
          args: {
            name: "SITE",
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
      name: "composer",
      description:
        'Proxy Composer commands with the "php" executable on the isolated site',
      args: {
        name: "command",
        isOptional: true,
      },
      options: [
        {
          name: "--site",
          requiresEquals: true,
          description:
            "Specify the site to use to get the PHP version (e.g. if the site isn't linked as its directory name)",
          args: {
            name: "SITE",
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
      name: "which-php",
      description: "Get the PHP executable path for a site",
      args: {
        name: "site",
        isOptional: true,
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
      name: "completion",
      description: "Dump the shell completion script",
      args: {
        name: "shell",
        suggestions: [{ name: "bash" }, { name: "fish" }],
        isOptional: true,
      },
      options: [
        {
          name: "--debug",
          description: "Tail the completion debug log",
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
      name: "secured",
      description: "Display all of the currently secured sites",
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
      name: "set-ngrok-token",
      description: "Set the Ngrok auth token",
      args: {
        name: "token",
        isOptional: true,
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
      name: "share-tool",
      description: "Get the name of the current share tool (Expose or ngrok)",
      args: {
        name: "tool",
        suggestions: [{ name: "Expose" }, { name: "Ngrok" }],
        isOptional: true,
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
      name: "status",
      description:
        "Output the status of Valet and its installed services and config",
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
