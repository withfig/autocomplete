const icon =
  "data:image/svg+xml;base64,PHN2ZwogICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0NDAgNTUwIj4KPHBhdGggZmlsbD0iI0Y5MzMyQiIgZD0iCiAgTSAwLjAwIDAuMDAKICBMIDE1MC4wNiAwLjAwCiAgTCAxNTAuMDIgMTk4LjI3CiAgQSAwLjU3IDAuNTcgMC4wIDAgMCAxNTAuNTggMTk4Ljg0CiAgQyAxNjcuNDcgMTk5LjAxIDE4NS4zNiAxOTguNDggMjAxLjQyIDE5OS41NgogIFEgMjQ3LjQzIDIwMi42NSAyODkuNzUgMjIxLjQ2CiAgUSAzNDYuNzMgMjQ3LjY5IDM4NS43MSAyOTYuNzUKICBRIDQxOS42NCAzNDAuMzQgNDMyLjkxIDM5NC4wMAogIEwgNDM3LjcxIDQxNy41MAogIEwgNDM3Ljc5IDQxOS41MAogIFEgNDM3LjgzIDQyNS4yOSA0MzkuNTUgNDMwLjgwCiAgTCA0NDAuMDAgNDQyLjMxCiAgTCA0NDAuMDAgNTUwLjAwCiAgTCAyOTAuMTkgNTUwLjAwCiAgUSAyODkuODkgNTA1LjAzIDI4OS45OCA0NjAuMDcKICBRIDI5MC4wMSA0NDcuMDYgMjg5LjA2IDQ0MC4xMgogIEMgMjgyLjUzIDM5Mi41MCAyNDQuNzAgMzU1LjM2IDE5Ni45NiAzNDkuNzUKICBDIDE4My4wMSAzNDguMTEgMTY1Ljc3IDM0OC45OCAxNTAuNTAgMzQ5LjA1CiAgQSAwLjUxIDAuNDkgMC4wIDAgMCAxNDkuOTkgMzQ5LjU0CiAgTCAxNDkuOTQgNTUwLjAwCiAgTCAwLjAwIDU1MC4wMAogIEwgMC4wMCAwLjAwCiAgWiIKLz4KPHBhdGggZmlsbD0iI0Y5MzMyQiIgZmlsbC1vcGFjaXR5PSIwLjcxOCIgZD0iCiAgTSAyOTEuMDYgMC4wMAogIEwgNDQwLjAwIDAuMDAKICBMIDQ0MC4wMCA0MTAuNTYKICBMIDQzOS43MSA0MTIuNTAKICBRIDQzOC4wMSA0MTUuMzQgNDM4LjQ2IDQxOC43NQogIFEgNDM4LjIxIDQxMy4yOSA0MzcuNzEgNDE3LjUwCiAgTCA0MzIuOTEgMzk0LjAwCiAgTCA0MzQuMDIgMzk1LjA2CiAgQSAxLjIyIDAuNTcgLTc2LjggMCAxIDQzNC4yMSAzOTUuOTgKICBDIDQzMy45OSAzOTcuOTIgNDM0Ljk5IDM5OS4zNiA0MzUuMjYgNDAwLjkyCiAgUSA0MzYuMzYgNDA3LjEyIDQzNy4zNiA0MTMuMzMKICBBIDAuNTEgMC4zOSA4NC42IDAgMCA0MzcuNzUgNDEzLjc1CiAgTCA0MzguMjYgNDEzLjc2CiAgQSAwLjgyIDAuNDggLTg0LjYgMCAwIDQzOC43OSA0MTMuMDIKICBRIDQzOS4wOCA0MTAuNTQgNDM5LjA5IDQwNC44MQogIFEgNDM5LjE5IDIwNC4xMyA0MzkuMTIgMi45NQogIEEgMS42OSAxLjY5IDAuMCAwIDAgNDM3LjQzIDEuMjYKICBMIDI5MC4wMyAxLjQyCiAgUSAyODkuNzcgMC4zNCAyOTEuMDYgMC4wMAogIFoiCi8+CjxwYXRoIGZpbGw9IiNGOTMzMkIiIGZpbGwtb3BhY2l0eT0iMC42NzEiIGQ9IgogIE0gNDMyLjkxIDM5NC4wMAogIFEgNDE5LjY0IDM0MC4zNCAzODUuNzEgMjk2Ljc1CiAgQyAzODQuNjEgMjkzLjA2IDM4MC45OCAyODkuODEgMzc4Ljc2IDI4Ny4xNQogIEMgMzU5LjI5IDI2My44MCAzMzEuOTQgMjQyLjQ4IDMwMy41MyAyMjcuNDUKICBRIDI5NS40NSAyMjMuMTcgMjkwLjMxIDIyMC44MAogIEwgMjkwLjE5IDIyMC42MgogIEEgMC43NiAwLjY1IDMxLjYgMCAxIDI5MC4wNiAyMjAuMjIKICBMIDI5MC4wMyAxLjQyCiAgTCA0MzcuNDMgMS4yNgogIEEgMS42OSAxLjY5IDAuMCAwIDEgNDM5LjEyIDIuOTUKICBRIDQzOS4xOSAyMDQuMTMgNDM5LjA5IDQwNC44MQogIFEgNDM5LjA4IDQxMC41NCA0MzguNzkgNDEzLjAyCiAgQSAwLjgyIDAuNDggLTg0LjYgMCAxIDQzOC4yNiA0MTMuNzYKICBMIDQzNy43NSA0MTMuNzUKICBBIDAuNTEgMC4zOSA4NC42IDAgMSA0MzcuMzYgNDEzLjMzCiAgUSA0MzYuMzYgNDA3LjEyIDQzNS4yNiA0MDAuOTIKICBDIDQzNC45OSAzOTkuMzYgNDMzLjk5IDM5Ny45MiA0MzQuMjEgMzk1Ljk4CiAgQSAxLjIyIDAuNTcgLTc2LjggMCAwIDQzNC4wMiAzOTUuMDYKICBMIDQzMi45MSAzOTQuMDAKICBaIgovPgo8cGF0aCBmaWxsPSIjRjkzMzJCIiBmaWxsLW9wYWNpdHk9IjAuNzg4IiBkPSIKICBNIDM4NS43MSAyOTYuNzUKICBRIDM0Ni43MyAyNDcuNjkgMjg5Ljc1IDIyMS40NgogIEwgMjkwLjMxIDIyMC44MAogIFEgMjk1LjQ1IDIyMy4xNyAzMDMuNTMgMjI3LjQ1CiAgQyAzMzEuOTQgMjQyLjQ4IDM1OS4yOSAyNjMuODAgMzc4Ljc2IDI4Ny4xNQogIEMgMzgwLjk4IDI4OS44MSAzODQuNjEgMjkzLjA2IDM4NS43MSAyOTYuNzUKICBaIgovPgo8cGF0aCBmaWxsPSIjRjkzMzJCIiBmaWxsLW9wYWNpdHk9IjAuOTgwIiBkPSIKICBNIDQzOS43MSA0MTIuNTAKICBMIDQzOS41NSA0MzAuODAKICBRIDQzNy44MyA0MjUuMjkgNDM3Ljc5IDQxOS41MAogIFEgNDM4LjQ2IDQyMS45NyA0MzguNDYgNDE4Ljc1CiAgUSA0MzguMDEgNDE1LjM0IDQzOS43MSA0MTIuNTAKICBaIgovPgo8cGF0aCBmaWxsPSIjRjkzMzJCIiBmaWxsLW9wYWNpdHk9IjAuNjcxIiBkPSIKICBNIDQzOC40NiA0MTguNzUKICBRIDQzOC40NiA0MjEuOTcgNDM3Ljc5IDQxOS41MAogIEwgNDM3LjcxIDQxNy41MAogIFEgNDM4LjIxIDQxMy4yOSA0MzguNDYgNDE4Ljc1CiAgWiIKLz4KICAgIDwvc3ZnPgo=";

const baseOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description:
      "Display help for the given command. When no command is given display help for the list command",
  },
  {
    name: ["--version", "-V"],
    description: "Display this application version",
  },
  {
    name: ["--quiet", "-q"],
    description: "Do not output any message",
  },
  {
    name: ["--verbose", "-vv", "-vvv", "-v"],
    description:
      "Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug",
  },
  {
    name: "--ansi",
    description: "Force ANSI output",
  },
  {
    name: "--no-ansi",
    description: "Disable ANSI output",
  },
  {
    name: ["--no-interaction", "-n"],
    description: "Do not ask any interactive question",
  },
];

const combineOptions = (options: Fig.Option[] = []) => {
  if (options.length === 0) {
    return baseOptions;
  }

  return [...options, ...baseOptions];
};

const completionSpec: Fig.Spec = {
  name: "herd",
  description:
    "Herd is a blazing fast, native Laravel and PHP development environment for macOS. It provides everything that you need to get started with Laravel development",
  icon: icon,
  subcommands: [
    {
      icon: icon,
      name: "completion",
      description: "Dump the shell completion script",
      args: {
        name: "shell",
        description:
          'The shell type (e.g. "bash"), the value of the "$SHELL" env var will be used if this is not given',
        suggestions: ["bash", "fish", "powershell", "zsh"],
        isOptional: true,
      },
      options: combineOptions([
        {
          name: "--debug",
          description: "Tail the completion debug log",
        },
      ]),
    },
    {
      icon: icon,
      name: "composer",
      description:
        "Proxy Composer commands with isolated site's PHP executable",
      loadSpec: "composer",
    },
    {
      icon: icon,
      name: "coverage",
      description:
        "Proxy PHP commands with isolated sith Xdebug code coverage enabled",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "debug",
      description:
        "Proxy PHP commands with isolated site's PHP executable and debug.ini loaded",
      loadSpec: "php",
    },
    {
      icon: icon,
      name: "directory-listing",
      description:
        "Determine directory-listing behavior. Default is off, which means a 404 will display",
      args: {
        name: "status",
        description:
          "On or off. (default=off) will show a 404 page; [on] will display a listing if project folder exists but requested URI not found",
        suggestions: ["on", "off"],
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "edit",
      description: "Open the site in your favorite IDE",
      options: combineOptions([
        {
          name: "--path",
        },
      ]),
    },
    {
      icon: icon,
      name: "fetch-share-url",
      description: "Get the URL to the current share tunnel for Expose",
      args: {
        name: "domain",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "forget",
      description:
        "Remove the current working (or specified) directory from Herd's list of paths",
      args: {
        name: "path",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "help",
      description: "Display help for a command",
      args: {
        name: "command_name",
        description: 'The command name [default: "help"]',
        isOptional: true,
        generators: {
          script: ["herd", "list", "--raw"],
          postProcess: (out) =>
            out
              .trim()
              .split("\n")
              .filter((line) => line.trim())
              .map((line) => {
                const [command, ...descriptionParts] = line
                  .trim()
                  .split(/\s{2,}/);
                return {
                  name: command,
                  description: descriptionParts.join(" "),
                  icon: icon,
                };
              }),
        },
        filterStrategy: "fuzzy",
      },
      options: combineOptions([
        {
          name: "--format",
          description:
            'The output format (txt, xml, json, or md) [default: "txt"]',
        },
      ]),
    },
    {
      icon: icon,
      name: "init",
      description:
        "Start the services defined in the Herd manifest file, and apply the configuration",
      options: combineOptions([
        {
          name: "--fresh",
          description:
            'The output format (txt, xml, json, or md) [default: "txt"]',
        },
      ]),
    },
    {
      icon: icon,
      name: "isolate",
      description:
        "Change the version of PHP used by Herd to serve the current working directory",
      args: {
        name: "phpVersion",
        description: "The PHP version you want to use; e.g 8.1",
      },
      options: combineOptions([
        {
          name: "--site",
          description:
            "Specify the site to isolate (e.g. if the site isn't linked as its directory name)",
        },
        {
          name: "--silent",
        },
      ]),
    },
    {
      icon: icon,
      name: "isolate-node",
      description:
        "Change the version of Node used by the CLI for the current working directory",
      args: {
        name: "nodeVersion",
        description: "The Node version you want to use; e.g 21",
      },
      options: combineOptions([
        {
          name: "--site",
          description:
            "Specify the site to isolate (e.g. if the site isn't linked as its directory name)",
        },
      ]),
    },
    {
      icon: icon,
      name: "isolated",
      description: "List all sites using isolated versions of PHP",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "isolated-node",
      description: "List all sites using isolated versions of Nodes",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "link",
      description: "Link the current working directory to Herd",
      options: combineOptions([
        {
          name: "--secure",
          description: "Link the site with a trusted TLS certificate",
        },
        {
          name: "--isolate",
          description:
            "Isolate the site to the PHP version specified, for example 8.3",
        },
      ]),
      args: {
        name: "name",
        isOptional: true,
      },
    },
    {
      name: "links",
      description: "Display all of the registered Herd links",
      options: combineOptions(),
    },
    {
      name: "list",
      description: "List commands",
      args: {
        name: "namespace",
        description: "The namespace name",
        isOptional: true,
      },
      options: combineOptions([
        {
          name: "--raw",
          description: "To output raw command list",
        },
        {
          name: "--format",
          description:
            'The output format (txt, xml, json, or md) [default: "txt"]',
        },
        {
          name: "--short",
          description: "To skip describing commands' arguments",
        },
      ]),
    },
    {
      icon: icon,
      name: "log",
      description: "Tail log file",
      args: {
        name: "key",
      },
      options: combineOptions([
        {
          name: ["--lines", "-n"],
        },
        {
          name: ["--follow", "-f"],
        },
      ]),
    },
    {
      icon: icon,
      name: "logs",
      description: "Show the log viewer UI for the given site",
      options: combineOptions([
        {
          name: "--sites",
          description:
            "Specify the site to tinker with (e.g. if the site isn't linked as its directory name)",
        },
      ]),
    },
    {
      icon: icon,
      name: "loopback",
      description: "Get or set the loopback address used for Herd sites",
      args: {
        name: "loopback",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "open",
      description:
        "Open the site for the current (or specified) directory in your browser",
      args: {
        name: "domain",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "park",
      description:
        "Register the current working (or specified) directory with Herd",
      args: {
        name: "path",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "parked",
      description: "Display all the current sites within parked paths",
      options: combineOptions([
        {
          name: "--json",
        },
      ]),
    },
    {
      icon: icon,
      name: "paths",
      description: "Get all of the paths registered with Herd",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "php",
      description: "Proxy PHP commands with isolated site's PHP executable",
      args: {
        name: "command",
        loadSpec: "php",
      },
      options: combineOptions([
        {
          name: "--site",
          description:
            "Specify the site to use to get the PHP version (e.g. if the site isn't linked as its directory name)",
        },
      ]),
    },
    {
      icon: icon,
      name: "proxies",
      description: "Display all of the proxy sites",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "proxy",
      description:
        "Create an Nginx proxy site for the specified host. Useful for Reverb, Docker, etc",
      args: [
        {
          name: "domain",
        },
        {
          name: "host",
        },
      ],
      options: combineOptions([
        {
          name: "--secure",
          description: "Create a proxy with a trusted TLS certificate",
        },
      ]),
    },
    {
      icon: icon,
      name: "restart",
      description: "Restart the Herd services",
      args: {
        name: "service",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "secure",
      description: "Secure the given domain with a trusted TLS certificate",
      args: {
        name: "domain",
        isOptional: true,
      },
      options: combineOptions([
        {
          name: "--expireIn",
          description:
            'The amount of days the self signed certificate is valid for. Default is set to "368" [default: 368]',
        },
      ]),
    },
    {
      icon: icon,
      name: "secured",
      description: "Secure the given domain with a trusted TLS certificate",
      options: combineOptions([
        {
          name: "--expiring",
          description:
            "Limits the results to only sites expiring within the next 60 days",
        },
        {
          name: "--days",
          description:
            "To be used with --expiring. Limits the results to only sites expiring within the next X days. Default is set to 60. [default: 60]",
        },
      ]),
    },
    {
      icon: icon,
      name: "share",
      description: "Share the current site via an Expose tunnel",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "site-information",
      description: "Display information about the specified site",
      args: {
        name: "path",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "start",
      description: "Start the Herd services",
      args: {
        name: "service",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "stop",
      description: "Stop the Herd services",
      args: {
        name: "service",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "tinker",
      description: "Run tinker/Tinkerwell",
      options: combineOptions([
        {
          name: "--site",
          description:
            "Specify the site to tinker with (e.g. if the site isn't linked as its directory name)",
        },
      ]),
    },
    {
      icon: icon,
      name: "tld",
      description: "[domain] Get or set the TLD used for Herd sites",
      args: {
        name: "tld",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "unisolate",
      description:
        "Stop customizing the version of PHP used by Herd to serve the current working directory",
      options: combineOptions([
        {
          name: "--site",
          description:
            "Specify the site to un-isolate (e.g. if the site isn't linked as its directory name)",
        },
      ]),
    },
    {
      icon: icon,
      name: "unisolate-node",
      description:
        "Stop customizing the version of Node used the CLI for the current working directory",
      options: combineOptions([
        {
          name: "--site",
          description:
            "Specify the site to un-isolate (e.g. if the site isn't linked as its directory name)",
        },
      ]),
    },
    {
      icon: icon,
      name: "unlink",
      description: "Remove the specified Herd link",
      args: {
        name: "name",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "unproxy",
      description: "Delete an Nginx proxy config",
      args: {
        name: "domain",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "unsecure",
      description:
        "Stop serving the given domain over HTTPS and remove the trusted TLS certificate",
      args: {
        name: "domain",
        isOptional: true,
      },
      options: combineOptions([
        {
          name: "--all",
        },
        {
          name: "--silent",
        },
      ]),
    },
    {
      icon: icon,
      name: "use",
      description: "Change the version of PHP used by Herd",
      args: {
        name: "phpVersion",
        description: "The PHP version you want to use; e.g. 8.3",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "which",
      description:
        "Display which Herd driver serves the current working directory",
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "which-php",
      description: "Get the PHP executable path for a given site",
      args: {
        name: "site",
        description: "The site to get the PHP executable path for",
        isOptional: true,
      },
      options: combineOptions(),
    },
    {
      icon: icon,
      name: "init:fresh",
      description: "Initialize a Herd manifest file",
      options: combineOptions(),
    },
  ],
  options: combineOptions(),
};
export default completionSpec;
