const completionSpec: Fig.Spec = {
  name: "vue",
  description: "Vue cli tools",
  subcommands: [
    {
      name: "create",
      description: "Create a new project powered by vue-cli-service",
      args: {
        name: "app-name",
      },
      options: [
        {
          name: ["-p", "--preset"],
          description: "Skip prompts and use saved or remote preset",
          args: {
            name: "presetName",
          },
        },
        {
          name: ["-d", "--default"],
          description: "Skip prompts and use default preset",
        },
        {
          name: ["-i", "--inlinePreset"],
          description: "Skip prompts and use inline JSON string as preset",
          args: {
            name: "json",
          },
        },
        {
          name: ["-m", "--packageManager"],
          description: "Use specified npm client when installing dependencies",
          args: {
            name: "command",
          },
        },
        {
          name: ["-r", "--registry"],
          description:
            "Use specified npm registry when installing dependencies (only for npm)",
          args: {
            name: "url",
          },
        },
        {
          name: ["-g", "--git"],
          description: "Force git initialization with initial commit message",
          args: {
            name: "message",
          },
        },
        {
          name: ["-n", "--no-git"],
          description: "Skip git initialization",
        },
        {
          name: ["-f", "--force"],
          description: "Overwrite target directory if it exists",
        },
        {
          name: "--merge",
          description: "Merge target directory if it exists",
        },
        {
          name: ["-c", "--clone"],
          description: "Use git clone when fetching remote preset",
        },
        {
          name: ["-X", "--proxy"],
          description: "Use specified proxy when creating project",
          args: {
            name: "proxyUrl",
          },
        },
        {
          name: ["-b", "--bar"],
          description: "Scaffold project without beginner instructions",
        },
        {
          name: "--skipGetStarted",
          description: 'Skip displaying "Get started" instructions',
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "add",
      description:
        "Install a plugin and invoke its generator in an already created project",
      args: {
        name: "plugin",
      },
      options: [
        {
          name: "--registry",
          description:
            "Use specified npm registry when installing dependencies (only for npm)",
          args: {
            name: "url",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "invoke",
      description:
        "Invoke the generator of a plugin in an already created project",
      args: {
        name: "plugin",
      },
      options: [
        {
          name: "--registry",
          description:
            "Use specified npm registry when installing dependencies (only for npm)",
          args: {
            name: "url",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "inspect",
      description:
        "Inspect the webpack config in a project with vue-cli-service",
      args: {},
      options: [
        {
          name: "--mode",
          args: {
            name: "mode",
          },
        },
        {
          name: "--rule",
          description: "Inspect a specific module rule",
          args: {
            name: "ruleName",
          },
        },
        {
          name: "--plugin",
          description: "Inspect a specific plugin",
          args: {
            name: "pluginName",
          },
        },
        {
          name: "--rules",
          description: "List all module rule names",
        },
        {
          name: "--plugins",
          description: "List all plugin names",
        },
        {
          name: ["-v", "--verbose"],
          description: "Show full function definitions in output",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "serve",
      description:
        "Serve a .js or .vue file in development mode with zero config",
      args: {
        template: "filepaths",
      },
      options: [
        {
          name: ["-o", "--open"],
          description: "Open browser",
        },
        {
          name: ["-c", "--copy"],
          description: "Copy local url to clipboard",
        },
        {
          name: ["-p", "--port"],
          description:
            "Port used by the server (default: 8080 or next available port)",
          args: {
            name: "port",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "build",
      description:
        "Build a .js or .vue file in production mode with zero config",
      args: {
        template: "filepaths",
      },
      options: [
        {
          name: ["-t", "--target"],
          description: "Build target (app | lib | wc | wc-async, default: app)",
          args: {
            name: "target",
          },
        },
        {
          name: ["-n", "--name"],
          description:
            "Name for lib or web-component mode (default: entry filename)",
          args: {
            name: "name",
          },
        },
        {
          name: ["-d", "--destination"],
          description: "Output directory (default: dist)",
          args: {
            name: "dir",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "ui",
      description: "Start and open the vue-cli ui",
      options: [
        {
          name: ["-H", "--host"],
          description: "Host used for the UI server (default: localhost)",
          args: {
            name: "host",
          },
        },
        {
          name: ["-p", "--port"],
          description:
            "Port used for the UI server (by default search for available port)",
          args: {
            name: "port",
          },
        },
        {
          name: ["-D", "--dev"],
          description: "Run in dev mode",
        },
        {
          name: "--quiet",
          description: "Don't output starting messages",
        },
        {
          name: "--headless",
          description: "Don't open browser on start and output port",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "init",
      description:
        "Generate a project from a remote template (legacy API, requires @vue/cli-init)",
      args: [
        {
          name: "template",
        },
        {
          name: "app-name",
        },
      ],
      options: [
        {
          name: ["-c", "--clone"],
          description: "Use git clone when fetching remote template",
        },
        {
          name: "--offline",
          description: "Use cached template",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "config",
      description: "Inspect and modify the config",
      args: {
        name: "value",
      },
      options: [
        {
          name: ["-g", "--get"],
          description: "Get value from option",
          args: {
            name: "path",
          },
        },
        {
          name: ["-s", "--set"],
          description: "Set option value",
          args: {
            name: "value",
          },
        },
        {
          name: ["-d", "--delete"],
          description: "Delete option from config",
          args: {
            name: "path",
          },
        },
        {
          name: ["-e", "--edit"],
          description: "Open config with default editor",
        },
        {
          name: "--json",
          description: "Outputs JSON result only",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "outdated",
      description:
        "(experimental) check for outdated vue cli service / plugins",
      options: [
        {
          name: "--next",
          description:
            "Also check for alpha / beta / rc versions when upgrading",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "upgrade",
      description: "(experimental) upgrade vue cli service / plugins",
      args: {
        name: "plugin-name",
      },
      options: [
        {
          name: ["-t", "--to"],
          description: "Upgrade <package-name> to a version that is not latest",
          args: {
            name: "version",
          },
        },
        {
          name: ["-f", "--from"],
          description:
            "Skip probing installed plugin, assuming it is upgraded from the designated version",
          args: {
            name: "version",
          },
        },
        {
          name: ["-r", "--registry"],
          description:
            "Use specified npm registry when installing dependencies",
          args: {
            name: "url",
          },
        },
        {
          name: "--all",
          description: "Upgrade all plugins",
        },
        {
          name: "--next",
          description:
            "Also check for alpha / beta /rc versions when upgrading",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "migrate",
      description:
        "(experimental) run migrator for an already-installed cli plugin",
      args: {
        name: "plugin-name",
      },
      options: [
        {
          name: ["-f", "--from"],
          description: "The base version for the migrator to migrate from",
          args: {
            name: "version",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "info",
      description: "Print debugging information about your environment",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-V", "--version"],
      description: "Output the version number",
    },
    {
      name: ["-h", "--help"],
      description: "Output usage information",
    },
  ],
};

export default completionSpec;
