const completion: Fig.Spec = {
  name: "wezterm",
  description: "Wez's Terminal Emulator",
  subcommands: [
    {
      name: "start",
      description: "Start the GUI, optionally running an alternative program",
      options: [
        {
          name: "--cwd",
          description:
            "Specify the current working directory for the initially spawned program",
          args: {
            name: "cwd",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--class",
          description:
            'Override the default windowing system class. The default is "org.wezfurlong.wezterm". Under X11 and Windows this changes the window class. Under Wayland this changes the app_id. This changes the class for all windows spawned by this instance of wezterm, including error, update and ssh authentication dialogs',
          args: {
            name: "class",
            isOptional: true,
          },
        },
        {
          name: "--workspace",
          description:
            'Override the default workspace with the provided name. The default is "default"',
          args: {
            name: "workspace",
            isOptional: true,
          },
        },
        {
          name: "--position",
          description:
            "Override the position for the initial window launched by this process",
          args: {
            name: "position",
            isOptional: true,
          },
        },
        {
          name: "--no-auto-connect",
          description:
            "If true, do not connect to domains marked as connect_automatically in your wezterm configuration file",
        },
        {
          name: "--always-new-process",
          description:
            "If enabled, don't try to ask an existing wezterm GUI instance to start the command.  Instead, always start the GUI in this invocation of wezterm so that you can wait for the command to complete by waiting for this wezterm process to finish",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "prog",
        isVariadic: true,
        isOptional: true,
        isCommand: true,
      },
    },
    {
      name: "ssh",
      description: "Establish an ssh session",
      options: [
        {
          name: ["-o", "--ssh-option"],
          description:
            "Override specific SSH configuration options. `wezterm ssh` is able to parse some (but not all!) options from your `~/.ssh/config` and `/etc/ssh/ssh_config` files. This command line switch allows you to override or otherwise specify ssh_config style options",
          isRepeatable: true,
          args: {
            name: "name=value",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--class",
          description:
            'Override the default windowing system class. The default is "org.wezfurlong.wezterm". Under X11 and Windows this changes the window class. Under Wayland this changes the app_id. This changes the class for all windows spawned by this instance of wezterm, including error, update and ssh authentication dialogs',
          args: {
            name: "class",
            isOptional: true,
          },
        },
        {
          name: "--position",
          description:
            "Override the position for the initial window launched by this process",
          args: {
            name: "position",
            isOptional: true,
          },
        },
        {
          name: "-v",
          description:
            "Enable verbose ssh protocol tracing. The trace information is printed to the stderr stream of the process",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "user-at-host-and-port",
        },
        {
          name: "prog",
          isVariadic: true,
          isOptional: true,
          isCommand: true,
        },
      ],
    },
    {
      name: "serial",
      description: "Open a serial port",
      options: [
        {
          name: "--baud",
          description: "Set the baud rate.  The default is 9600 baud",
          args: {
            name: "baud",
            isOptional: true,
          },
        },
        {
          name: "--class",
          description:
            'Override the default windowing system class. The default is "org.wezfurlong.wezterm". Under X11 and Windows this changes the window class. Under Wayland this changes the app_id. This changes the class for all windows spawned by this instance of wezterm, including error, update and ssh authentication dialogs',
          args: {
            name: "class",
            isOptional: true,
          },
        },
        {
          name: "--position",
          description:
            "Override the position for the initial window launched by this process",
          args: {
            name: "position",
            isOptional: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "port",
      },
    },
    {
      name: "connect",
      description: "Connect to wezterm multiplexer",
      options: [
        {
          name: "--class",
          description:
            'Override the default windowing system class. The default is "org.wezfurlong.wezterm". Under X11 and Windows this changes the window class. Under Wayland this changes the app_id. This changes the class for all windows spawned by this instance of wezterm, including error, update and ssh authentication dialogs',
          args: {
            name: "class",
            isOptional: true,
          },
        },
        {
          name: "--workspace",
          description:
            'Override the default workspace with the provided name. The default is "default"',
          args: {
            name: "workspace",
            isOptional: true,
          },
        },
        {
          name: "--position",
          description:
            "Override the position for the initial window launched by this process",
          args: {
            name: "position",
            isOptional: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "domain-name",
        },
        {
          name: "prog",
          isVariadic: true,
          isOptional: true,
          isCommand: true,
        },
      ],
    },
    {
      name: "ls-fonts",
      description: "Display information about fonts",
      options: [
        {
          name: "--text",
          description:
            "Explain which fonts are used to render the supplied text string",
          exclusiveOn: ["--list-system"],
          args: {
            name: "text",
            isOptional: true,
          },
        },
        {
          name: "--list-system",
          description: "Whether to list all fonts available to the system",
        },
        {
          name: "--rasterize-ascii",
          description:
            "Show rasterized glyphs for the text in --text using ascii blocks",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "show-keys",
      description: "Show key assignments",
      options: [
        {
          name: "--key-table",
          description: "In lua mode, show only the named key table",
          args: {
            name: "key-table",
            isOptional: true,
          },
        },
        {
          name: "--lua",
          description: "Show the keys as lua config statements",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "cli",
      description: "Interact with experimental mux server",
      subcommands: [
        {
          name: "list",
          description: "List windows, tabs and panes",
          options: [
            {
              name: "--format",
              description:
                'Controls the output format. "table" and "json" are possible formats',
              args: {
                name: "format",
                isOptional: true,
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "list-clients",
          description: "List clients",
          options: [
            {
              name: "--format",
              description:
                'Controls the output format. "table" and "json" are possible formats',
              args: {
                name: "format",
                isOptional: true,
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "proxy",
          description: "Start rpc proxy pipe",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "tlscreds",
          description: "Obtain tls credentials",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "move-pane-to-new-tab",
          description: "Move a pane into a new tab",
          options: [
            {
              name: "--pane-id",
              description:
                "Specify the pane that should be moved. The default is to use the current pane based on the environment variable WEZTERM_PANE",
              args: {
                name: "pane-id",
                isOptional: true,
              },
            },
            {
              name: "--window-id",
              description:
                "Specify the window into which the new tab will be created. If omitted, the window associated with the current pane is used",
              args: {
                name: "window-id",
                isOptional: true,
              },
            },
            {
              name: "--workspace",
              description:
                'If creating a new window, override the default workspace name with the provided name.  The default name is "default"',
              args: {
                name: "workspace",
                isOptional: true,
              },
            },
            {
              name: "--new-window",
              description:
                "Create tab in a new window, rather than the window currently containing the pane",
              exclusiveOn: ["--window-id"],
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "split-pane",
          description:
            "Split the current pane. Outputs the pane-id for the newly created pane on success",
          options: [
            {
              name: "--pane-id",
              description:
                "Specify the pane that should be split. The default is to use the current pane based on the environment variable WEZTERM_PANE",
              args: {
                name: "pane-id",
                isOptional: true,
              },
            },
            {
              name: "--cells",
              description:
                "The number of cells that the new split should have. If omitted, 50% of the available space is used",
              args: {
                name: "cells",
                isOptional: true,
              },
            },
            {
              name: "--percent",
              description:
                "Specify the number of cells that the new split should have, expressed as a percentage of the available space",
              exclusiveOn: ["--cells"],
              args: {
                name: "percent",
                isOptional: true,
              },
            },
            {
              name: "--cwd",
              description:
                "Specify the current working directory for the initially spawned program",
              args: {
                name: "cwd",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "--move-pane-id",
              description:
                "Instead of spawning a new command, move the specified pane into the newly created split",
              exclusiveOn: ["--cwd"],
              args: {
                name: "move-pane-id",
                isOptional: true,
              },
            },
            {
              name: "--horizontal",
              description:
                "Equivalent to `--right`. If neither this nor any other direction is specified, the default is equivalent to `--bottom`",
              exclusiveOn: ["--left", "--right", "--top", "--bottom"],
            },
            {
              name: "--left",
              description: "Split horizontally, with the new pane on the left",
              exclusiveOn: ["--right", "--top", "--bottom"],
            },
            {
              name: "--right",
              description: "Split horizontally, with the new pane on the right",
              exclusiveOn: ["--left", "--top", "--bottom"],
            },
            {
              name: "--top",
              description: "Split vertically, with the new pane on the top",
              exclusiveOn: ["--left", "--right", "--bottom"],
            },
            {
              name: "--bottom",
              description: "Split vertically, with the new pane on the bottom",
              exclusiveOn: ["--left", "--right", "--top"],
            },
            {
              name: "--top-level",
              description:
                "Rather than splitting the active pane, split the entire window",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "prog",
            isVariadic: true,
            isOptional: true,
            isCommand: true,
          },
        },
        {
          name: "spawn",
          description:
            "Spawn a command into a new window or tab. Outputs the pane-id for the newly created pane on success",
          options: [
            {
              name: "--pane-id",
              description:
                "Specify the current pane. The default is to use the current pane based on the environment variable WEZTERM_PANE. The pane is used to determine the current domain and window",
              args: {
                name: "pane-id",
                isOptional: true,
              },
            },
            {
              name: "--domain-name",
              args: {
                name: "domain-name",
                isOptional: true,
              },
            },
            {
              name: "--window-id",
              description:
                "Specify the window into which to spawn a tab. If omitted, the window associated with the current pane is used. Cannot be used with `--workspace` or `--new-window`",
              exclusiveOn: ["--workspace", "--new-window"],
              args: {
                name: "window-id",
                isOptional: true,
              },
            },
            {
              name: "--cwd",
              description:
                "Specify the current working directory for the initially spawned program",
              args: {
                name: "cwd",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "--workspace",
              description:
                'When creating a new window, override the default workspace name with the provided name.  The default name is "default"',
              dependsOn: ["--new-window"],
              args: {
                name: "workspace",
                isOptional: true,
              },
            },
            {
              name: "--new-window",
              description: "Spawn into a new window, rather than a new tab",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "prog",
            isVariadic: true,
            isOptional: true,
            isCommand: true,
          },
        },
        {
          name: "send-text",
          description:
            "Send text to a pane as though it were pasted. If bracketed paste mode is enabled in the pane, then the text will be sent as a bracketed paste",
          options: [
            {
              name: "--pane-id",
              description:
                "Specify the target pane. The default is to use the current pane based on the environment variable WEZTERM_PANE",
              args: {
                name: "pane-id",
                isOptional: true,
              },
            },
            {
              name: "--no-paste",
              description:
                "Send the text directly, rather than as a bracketed paste",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "text",
            isOptional: true,
          },
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
          name: "--class",
          description:
            "When connecting to a gui instance, if you started the gui with `--class SOMETHING`, you should also pass that same value here in order for the client to find the correct gui instance",
          args: {
            name: "class",
            isOptional: true,
          },
        },
        {
          name: "--no-auto-start",
          description: "Don't automatically start the server",
        },
        {
          name: "--prefer-mux",
          description:
            "Prefer connecting to a background mux server. The default is to prefer connecting to a running wezterm gui instance",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "imgcat",
      description: "Output an image to the terminal",
      options: [
        {
          name: "--width",
          description:
            'Specify the display width; defaults to "auto" which automatically selects an appropriate size.  You may also use an integer value `N` to specify the number of cells, or `Npx` to specify the number of pixels, or `N%` to size relative to the terminal width',
          args: {
            name: "width",
            isOptional: true,
          },
        },
        {
          name: "--height",
          description:
            'Specify the display height; defaults to "auto" which automatically selects an appropriate size.  You may also use an integer value `N` to specify the number of cells, or `Npx` to specify the number of pixels, or `N%` to size relative to the terminal height',
          args: {
            name: "height",
            isOptional: true,
          },
        },
        {
          name: "--no-preserve-aspect-ratio",
          description:
            "Do not respect the aspect ratio.  The default is to respect the aspect ratio",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "file-name",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "set-working-directory",
      description:
        "Advise the terminal of the current working directory by emitting an OSC 7 escape sequence",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "cwd",
          isOptional: true,
          template: "folders",
        },
        {
          name: "host",
          isOptional: true,
        },
      ],
    },
    {
      name: "record",
      description: "Record a terminal session as an asciicast",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "prog",
        isOptional: true,
      },
    },
    {
      name: "replay",
      description: "Replay an asciicast terminal session",
      options: [
        {
          name: "--explain",
          description: "Explain what is being sent/received",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "cast-file",
      },
    },
    {
      name: "shell-completion",
      description: "Generate shell completion information",
      options: [
        {
          name: "--shell",
          description: "Which shell to generate for",
          args: {
            name: "shell",
            suggestions: [
              "bash",
              "elvish",
              "fish",
              "power-shell",
              "zsh",
              "fig",
            ],
          },
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
      name: "--config-file",
      description:
        "Specify the configuration file to use, overrides the normal configuration file resolution",
      exclusiveOn: ["-n"],
      args: {
        name: "config-file",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "--config",
      description: "Override specific configuration values",
      isRepeatable: true,
      args: {
        name: "name=value",
        isVariadic: true,
        isOptional: true,
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
      name: "-n",
      description: "Skip loading wezterm.lua",
    },
  ],
};

export default completion;
