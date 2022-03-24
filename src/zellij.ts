const sessions: Fig.Generator = {
  script: "zellij list-sessions",
  splitOn: "\n",
};

const help: Fig.Option = {
  name: ["-h", "--help"],
  description: "Print help information",
};

const completionSpec: Fig.Spec = {
  name: "zellij",
  description: "A terminal workspace with batteries included",
  subcommands: [
    {
      name: "attach",
      description: "Attach to a session",
      subcommands: [
        help,
        {
          name: "options",
          description: "Change the behavior of zellij",
        },
      ],
      args: {
        name: "session",
        description: "The session to attach to",
        isOptional: false,
        generators: sessions,
      },
      options: [
        {
          name: ["-c", "--create"],
          description: "Create a session if one does not exist",
          args: {
            name: "<session>",
            description: "New session name",
          },
        },
        help,
        {
          name: "--index",
          description:
            "Number of the session index in the active sessions ordered by creation date",
          args: {},
        },
      ],
    },
    {
      name: "kill-all-sessions",
      description: "Kill all sessions",
      options: [
        help,
        {
          name: ["-y", "--yes"],
          description: "Automation yes to prompts",
        },
      ],
    },
    {
      name: "kill-session",
      description: "Kill the specific session",
      args: {
        name: "session",
        description: "The session to kill",
        isOptional: false,
        generators: sessions,
        isDangerous: true,
      },
      options: [help],
    },
    {
      name: "list-sessions",
      description: "List active sessions",
      options: [help],
    },
    {
      name: "options",
      description: "Change the behavior of zellij",
      options: [
        help,
        {
          name: "--copy-clipboard",
          description:
            "OSC52 destination clipboard [possible values: system, primary]",
          args: {
            name: "clipboard",
            description: "OSC52 destination clipboard",
            suggestions: ["system", "primary"],
          },
        },
        {
          name: "--copy-command",
          description:
            "Switch to user supplied command for clipboard instead of OSC52",
          args: {},
        },
        {
          name: "--default-mode",
          description: "Set the default mode",
          args: {
            name: "default_mode",
            suggestions: [
              "normal",
              "locked",
              "pane",
              "tab",
              "resize",
              "scroll",
              "session",
            ],
          },
        },
        {
          name: "--default-shell",
          description: "Set the default shell",
          args: {},
        },
        {
          name: "--disable-mouse-mode",
          description: "Disable handling of mouse events",
        },
        {
          name: "--layout-dir",
          description:
            "Set the layout_dir, defaults to subdirectory of config dir",
        },
        {
          name: "--mirror-session",
          description: "Mirror session when multiple users are connected",
          args: {
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--mouse-mode",
          description:
            "Set the handling of mouse events. Can be temporarily bypassed by the [SHIFT] key",
          args: {
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--no-pane-frames",
          description: "Disable display of pane frames",
        },
        {
          name: "--on-force-close",
          description: "Set behavior on force close",
          args: {
            suggestions: ["quit", "detach"],
          },
        },
        {
          name: "--pane-frames",
          description: "Set display of pane frames",
          args: {
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--scroll-buffer-size",
          description: "Set the scroll buffer size",
          args: {
            name: "scroll_buffer_size",
          },
        },
        {
          name: "--simplified-ui",
          description:
            "Allow plugins to use a more simplified layout that is compatible with more fonts",
          args: {
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--theme",
          description: "Set the default theme",
        },
      ],
    },
    {
      name: "setup",
      description: "Setup zellij and check its configuration",
      options: [
        help,
        {
          name: "--check",
          description:
            "Checks the configuration of zellij and displays currently used directories",
        },
        {
          name: "--clean",
          description:
            "Disables loading of configuration file at default location, loads defaults that zellij ships with",
        },
        {
          name: "--dump-config",
          description: "Dump the default configuration file to stdout",
        },
        {
          name: "--dump-layout",
          description: "Dump the specified layout file to stdout",
          args: {},
        },
        {
          name: "--generate-completion",
          description: "Generates completion for the specified shell",
          args: {
            name: "shell",
            description: "Supported shell",
            suggestions: ["bash", "zsh", "fish"],
          },
        },
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: {
        name: "command",
        suggestions: [
          "help",
          "attach",
          "kill-all-sessions",
          "kill-session",
          "list-sessions",
          "options",
          "setup",
        ],
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for zellij",
    },
    {
      name: ["-c", "--config"],
      description:
        "Change where zellij looks for the configuration file [env: ZELLIJ_CONFIG_FILE]",
      args: {},
    },
    {
      name: "--config-dir",
      description:
        "Change where zellij looks for the configuration directory [env: ZELLIJ_CONFIG_DIR",
      args: {},
    },
    {
      name: ["-d", "--debug"],
      description: "Debug mode",
    },
    {
      name: "--data-dir",
      description: "Change where zellij looks for layouts and plugins",
      args: {},
    },
    {
      name: ["-l", "--layout"],
      description: "Name of a layout file in the layout directory",
      args: {},
    },
    {
      name: "--layout-path",
      description: "Path to a layout yaml file",
      args: {},
    },
    {
      name: "--max-panes",
      description:
        "Maximum panes on screen, caution: opening more panes will close old ones",
      args: {},
    },
    {
      name: ["-s", "--session"],
      description: "Specify the name of a new session",
      args: {},
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
  ],
};

export default completionSpec;
