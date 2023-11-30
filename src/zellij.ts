const generateSessions: Fig.Generator = {
  script: ["zellij", "list-sessions"],
  splitOn: "\n",
};

const completion: Fig.Spec = {
  name: "zellij",
  description: "A terminal workspace with batteries included",
  subcommands: [
    {
      name: "options",
      description: "Change the behaviour of zellij",
      options: [
        {
          name: "--simplified-ui",
          description:
            "Allow plugins to use a more simplified layout that is compatible with more fonts (true or false)",
          isRepeatable: true,
          args: {
            name: "simplified-ui",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--theme",
          description: "Set the default theme",
          isRepeatable: true,
          args: {
            name: "theme",
            isOptional: true,
          },
        },
        {
          name: "--default-mode",
          description: "Set the default mode",
          isRepeatable: true,
          args: {
            name: "default-mode",
            isOptional: true,
            suggestions: [
              {
                name: "normal",
                description:
                  "In `Normal` mode, input is always written to the terminal, except for the shortcuts leading to other modes",
              },
              {
                name: "locked",
                description:
                  "In `Locked` mode, input is always written to the terminal and all shortcuts are disabled except the one leading back to normal mode",
              },
              {
                name: "resize",
                description:
                  "`Resize` mode allows resizing the different existing panes",
              },
              {
                name: "pane",
                description:
                  "`Pane` mode allows creating and closing panes, as well as moving between them",
              },
              {
                name: "tab",
                description:
                  "`Tab` mode allows creating and closing tabs, as well as moving between them",
              },
              {
                name: "scroll",
                description:
                  "`Scroll` mode allows scrolling up and down within a pane",
              },
              {
                name: "enter-search",
                description:
                  "`EnterSearch` mode allows for typing in the needle for a search in the scroll buffer of a pane",
              },
              {
                name: "search",
                description:
                  "`Search` mode allows for searching a term in a pane (superset of `Scroll`)",
              },
              {
                name: "rename-tab",
                description:
                  "`RenameTab` mode allows assigning a new name to a tab",
              },
              {
                name: "rename-pane",
                description:
                  "`RenamePane` mode allows assigning a new name to a pane",
              },
              {
                name: "session",
                description: "`Session` mode allows detaching sessions",
              },
              {
                name: "move",
                description:
                  "`Move` mode allows moving the different existing panes within a tab",
              },
              {
                name: "prompt",
                description:
                  "`Prompt` mode allows interacting with active prompts",
              },
              {
                name: "tmux",
                description:
                  "`Tmux` mode allows for basic tmux keybindings functionality",
              },
            ],
          },
        },
        {
          name: "--default-shell",
          description: "Set the default shell",
          isRepeatable: true,
          args: {
            name: "default-shell",
            isOptional: true,
            suggestions: [
              "bash",
              "fish",
              "zsh",
              "tcsh",
              "csh",
              "sh",
              "ksh",
              "nu",
            ],
          },
        },
        {
          name: "--default-layout",
          description: "Set the default layout",
          isRepeatable: true,
          args: {
            name: "default-layout",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--layout-dir",
          description:
            "Set the layout_dir, defaults to subdirectory of config dir",
          isRepeatable: true,
          args: {
            name: "layout-dir",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--theme-dir",
          description:
            "Set the theme_dir, defaults to subdirectory of config dir",
          isRepeatable: true,
          args: {
            name: "theme-dir",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--mouse-mode",
          description:
            "Set the handling of mouse events (true or false) Can be temporarily bypassed by the [SHIFT] key",
          isRepeatable: true,
          args: {
            name: "mouse-mode",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--pane-frames",
          description: "Set display of the pane frames (true or false)",
          isRepeatable: true,
          args: {
            name: "pane-frames",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--mirror-session",
          description:
            "Mirror session when multiple users are connected (true or false)",
          isRepeatable: true,
          args: {
            name: "mirror-session",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--on-force-close",
          description: "Set behaviour on force close (quit or detach)",
          isRepeatable: true,
          args: {
            name: "on-force-close",
            isOptional: true,
            suggestions: ["quit", "detach"],
          },
        },
        {
          name: "--scroll-buffer-size",
          isRepeatable: true,
          args: {
            name: "scroll-buffer-size",
            isOptional: true,
          },
        },
        {
          name: "--copy-command",
          description:
            "Switch to using a user supplied command for clipboard instead of OSC52",
          isRepeatable: true,
          args: {
            name: "copy-command",
            isOptional: true,
          },
        },
        {
          name: "--copy-clipboard",
          description: "OSC52 destination clipboard",
          exclusiveOn: ["--copy-command"],
          isRepeatable: true,
          args: {
            name: "copy-clipboard",
            isOptional: true,
            suggestions: ["system", "primary"],
          },
        },
        {
          name: "--copy-on-select",
          description: "Automatically copy when selecting text (true or false)",
          isRepeatable: true,
          args: {
            name: "copy-on-select",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--scrollback-editor",
          description:
            "Explicit full path to open the scrollback editor (default is $EDITOR or $VISUAL)",
          isRepeatable: true,
          args: {
            name: "scrollback-editor",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--disable-mouse-mode",
          description: "Disable handling of mouse events",
          exclusiveOn: ["--mouse-mode"],
        },
        {
          name: "--no-pane-frames",
          description: "Disable display of pane frames",
          exclusiveOn: ["--pane-frames"],
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "setup",
      description: "Setup zellij and check its configuration",
      options: [
        {
          name: "--dump-layout",
          description: "Dump the specified layout file to stdout",
          isRepeatable: true,
          args: {
            name: "dump-layout",
            isOptional: true,
          },
        },
        {
          name: "--generate-completion",
          description: "Generates completion for the specified shell",
          isRepeatable: true,
          args: {
            name: "generate-completion",
            isOptional: true,
          },
        },
        {
          name: "--generate-auto-start",
          description: "Generates auto-start script for the specified shell",
          isRepeatable: true,
          args: {
            name: "generate-auto-start",
            isOptional: true,
          },
        },
        {
          name: "--dump-config",
          description: "Dump the default configuration file to stdout",
        },
        {
          name: "--clean",
          description:
            "Disables loading of configuration file at default location, loads the defaults that zellij ships with",
        },
        {
          name: "--check",
          description:
            "Checks the configuration of zellij and displays currently used directories",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: ["list-sessions", "ls"],
      description: "List active sessions",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: ["attach", "a"],
      description: "Attach to a session",
      subcommands: [
        {
          name: "options",
          description: "Change the behaviour of zellij",
          options: [
            {
              name: "--simplified-ui",
              description:
                "Allow plugins to use a more simplified layout that is compatible with more fonts (true or false)",
              isRepeatable: true,
              args: {
                name: "simplified-ui",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--theme",
              description: "Set the default theme",
              isRepeatable: true,
              args: {
                name: "theme",
                isOptional: true,
              },
            },
            {
              name: "--default-mode",
              description: "Set the default mode",
              isRepeatable: true,
              args: {
                name: "default-mode",
                isOptional: true,
                suggestions: [
                  {
                    name: "normal",
                    description:
                      "In `Normal` mode, input is always written to the terminal, except for the shortcuts leading to other modes",
                  },
                  {
                    name: "locked",
                    description:
                      "In `Locked` mode, input is always written to the terminal and all shortcuts are disabled except the one leading back to normal mode",
                  },
                  {
                    name: "resize",
                    description:
                      "`Resize` mode allows resizing the different existing panes",
                  },
                  {
                    name: "pane",
                    description:
                      "`Pane` mode allows creating and closing panes, as well as moving between them",
                  },
                  {
                    name: "tab",
                    description:
                      "`Tab` mode allows creating and closing tabs, as well as moving between them",
                  },
                  {
                    name: "scroll",
                    description:
                      "`Scroll` mode allows scrolling up and down within a pane",
                  },
                  {
                    name: "enter-search",
                    description:
                      "`EnterSearch` mode allows for typing in the needle for a search in the scroll buffer of a pane",
                  },
                  {
                    name: "search",
                    description:
                      "`Search` mode allows for searching a term in a pane (superset of `Scroll`)",
                  },
                  {
                    name: "rename-tab",
                    description:
                      "`RenameTab` mode allows assigning a new name to a tab",
                  },
                  {
                    name: "rename-pane",
                    description:
                      "`RenamePane` mode allows assigning a new name to a pane",
                  },
                  {
                    name: "session",
                    description: "`Session` mode allows detaching sessions",
                  },
                  {
                    name: "move",
                    description:
                      "`Move` mode allows moving the different existing panes within a tab",
                  },
                  {
                    name: "prompt",
                    description:
                      "`Prompt` mode allows interacting with active prompts",
                  },
                  {
                    name: "tmux",
                    description:
                      "`Tmux` mode allows for basic tmux keybindings functionality",
                  },
                ],
              },
            },
            {
              name: "--default-shell",
              description: "Set the default shell",
              isRepeatable: true,
              args: {
                name: "default-shell",
                isOptional: true,
                suggestions: [
                  "bash",
                  "fish",
                  "zsh",
                  "tcsh",
                  "csh",
                  "sh",
                  "ksh",
                  "nu",
                ],
              },
            },
            {
              name: "--default-layout",
              description: "Set the default layout",
              isRepeatable: true,
              args: {
                name: "default-layout",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--layout-dir",
              description:
                "Set the layout_dir, defaults to subdirectory of config dir",
              isRepeatable: true,
              args: {
                name: "layout-dir",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "--theme-dir",
              description:
                "Set the theme_dir, defaults to subdirectory of config dir",
              isRepeatable: true,
              args: {
                name: "theme-dir",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "--mouse-mode",
              description:
                "Set the handling of mouse events (true or false) Can be temporarily bypassed by the [SHIFT] key",
              isRepeatable: true,
              args: {
                name: "mouse-mode",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--pane-frames",
              description: "Set display of the pane frames (true or false)",
              isRepeatable: true,
              args: {
                name: "pane-frames",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--mirror-session",
              description:
                "Mirror session when multiple users are connected (true or false)",
              isRepeatable: true,
              args: {
                name: "mirror-session",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--on-force-close",
              description: "Set behaviour on force close (quit or detach)",
              isRepeatable: true,
              args: {
                name: "on-force-close",
                isOptional: true,
                suggestions: ["quit", "detach"],
              },
            },
            {
              name: "--scroll-buffer-size",
              isRepeatable: true,
              args: {
                name: "scroll-buffer-size",
                isOptional: true,
              },
            },
            {
              name: "--copy-command",
              description:
                "Switch to using a user supplied command for clipboard instead of OSC52",
              isRepeatable: true,
              args: {
                name: "copy-command",
                isOptional: true,
              },
            },
            {
              name: "--copy-clipboard",
              description: "OSC52 destination clipboard",
              exclusiveOn: ["--copy-command"],
              isRepeatable: true,
              args: {
                name: "copy-clipboard",
                isOptional: true,
                suggestions: ["system", "primary"],
              },
            },
            {
              name: "--copy-on-select",
              description:
                "Automatically copy when selecting text (true or false)",
              isRepeatable: true,
              args: {
                name: "copy-on-select",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--scrollback-editor",
              description:
                "Explicit full path to open the scrollback editor (default is $EDITOR or $VISUAL)",
              isRepeatable: true,
              args: {
                name: "scrollback-editor",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--disable-mouse-mode",
              description: "Disable handling of mouse events",
              exclusiveOn: ["--mouse-mode"],
            },
            {
              name: "--no-pane-frames",
              description: "Disable display of pane frames",
              exclusiveOn: ["--pane-frames"],
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: "--index",
          description:
            "Number of the session index in the active sessions ordered creation date",
          isRepeatable: true,
          args: {
            name: "index",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--create"],
          description: "Create a session if one does not exist",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "session-name",
        isOptional: true,
        generators: generateSessions,
      },
    },
    {
      name: ["kill-session", "k"],
      description: "Kill the specific session",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "target-session",
        isOptional: true,
        generators: generateSessions,
      },
    },
    {
      name: ["kill-all-sessions", "ka"],
      description: "Kill all sessions",
      options: [
        {
          name: ["-y", "--yes"],
          description: "Automatic yes to prompts",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: {
        name: "subcommand",
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: "--max-panes",
      description:
        "Maximum panes on screen, caution: opening more panes will close old ones",
      isRepeatable: true,
      args: {
        name: "max-panes",
        isOptional: true,
      },
    },
    {
      name: "--data-dir",
      description: "Change where zellij looks for plugins",
      isRepeatable: true,
      args: {
        name: "data-dir",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "--server",
      description: "Run server listening at the specified socket path",
      hidden: true,
      isRepeatable: true,
      args: {
        name: "server",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: ["-s", "--session"],
      description: "Specify name of a new session",
      isRepeatable: true,
      args: {
        name: "session",
        isOptional: true,
      },
    },
    {
      name: ["-l", "--layout"],
      description:
        "Name of a predefined layout inside the layout directory or the path to a layout file",
      isRepeatable: true,
      args: {
        name: "layout",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: ["-c", "--config"],
      description: "Change where zellij looks for the configuration file",
      isRepeatable: true,
      args: {
        name: "config",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "--config-dir",
      description: "Change where zellij looks for the configuration directory",
      isRepeatable: true,
      args: {
        name: "config-dir",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Print help information",
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
    {
      name: ["-d", "--debug"],
      description: "Specify emitting additional debug information",
    },
  ],
};

export default completion;
