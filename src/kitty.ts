const icatCommand: Fig.Subcommand = {
  name: "icat",
  description: "A cat like utility to display images in the terminal",
  options: [
    {
      name: "--align",
      description: "Horizontal alignment for the displayed image",
      args: {
        name: "ALIGN",
        default: "center",
        suggestions: ["center", "left", "right"],
      },
    },
    {
      name: "--place",
      description: "Choose where on the screen to display the image",
      args: {
        name: "PLACE",
        description: "<width>x<height>@<left>x<top>",
      },
    },
    {
      name: "--scale-up",
      description:
        "Images that are smaller than the specified area to be scaled up to use as much of the specified area as possible",
      dependsOn: ["--place"],
    },
    {
      name: "--background",
      description:
        "Specify a background color, this will cause transparent images to be composited on top of the specified color",
      args: {
        name: "COLOR",
        default: "none",
        suggestions: [
          ["none", "000000"],
          ["black", "000000"],
          ["white", "ffffff"],
          ["gray", "808080"],
          ["red", "ff0000"],
          ["green", "00ff00"],
          ["blue", "0000ff"],
          ["yellow", "ffff00"],
          ["magenta", "ff00ff"],
          ["cyan", "00ffff"],
        ].map(([name, hex]) => ({
          name,
          icon: `fig://template?color=${hex}`,
        })),
      },
    },
    {
      name: "--mirror",
      description:
        "Mirror the image about a horizontal or vertical axis or both",
      args: {
        name: "AXIS",
        default: "none",
        suggestions: ["horizontal", "both", "none", "vertical"],
      },
    },
    {
      name: "--clear",
      description: "Remove all images currently displayed on the screen",
    },
    {
      name: "--transfer-mode",
      description: "Which mechanism to use to transfer images to the terminal",
      args: {
        name: "TRANSFER_MODE",
        default: "detect",
        suggestions: ["file", "detect", "stream"],
      },
    },
    {
      name: "--detect-support",
      description: "Detect support for image display in the terminal",
    },
    {
      name: "--detection-timeout",
      description: "How long to wait for detection to complete before aborting",
      dependsOn: ["--detect-support"],
      args: {
        name: "TIMEOUT",
        default: "10",
      },
    },
    {
      name: "--print-window-size",
      description: "Print the current terminal window size in pixels",
    },
    {
      name: "--stdin",
      description: "Read an image from stdin",
    },
  ],
  args: {
    name: "image-file-or-url-or-directory",
    template: "filepaths",
  },
};

const kittenCommands: Fig.Subcommand[] = [
  icatCommand,
  {
    name: "diff",
    args: [
      { name: "file1", template: "filepaths" },
      { name: "file2", template: "filepaths" },
    ],
  },
  { name: "show_key" },
  { name: "clipboard" },
  { name: "unicode_input" },
  { name: "panel" },
  { name: "transfer" },
  { name: "query_terminal" },
  { name: "broadcast" },
  {
    name: "hyperlinked_grep",
    loadSpec: "rg",
  },
  {
    name: "ssh",
    loadSpec: "ssh",
  },
  { name: "choose" },
  { name: "ask" },
  {
    name: "themes",
    description: "Change the kitty theme",
  },
  { name: "hints" },
  { name: "remote_file" },
  { name: "show_error" },
  { name: "resize_window" },
  { name: "mouse_demo" },
];

const plusCommands: Fig.Subcommand[] = [
  icatCommand,
  {
    name: "list-fonts",
  },
  {
    name: "hold",
  },
  {
    name: "complete",
  },
  {
    name: "runpy",
  },
  {
    name: "launch",
  },
  {
    name: "open",
  },
  {
    name: "kitten",
    subcommands: kittenCommands,
  },
  {
    name: "edit-config",
  },
  {
    name: "shebang",
  },
];

const completionSpec: Fig.Spec = {
  name: "kitty",
  options: [
    {
      name: ["-T", "--title"],
      description: "Set the OS window title",
      args: {
        name: "TITLE",
      },
    },
    {
      name: ["-C", "--config"],
      description: "Specify a path to the configuration file(s) to use",
      args: {
        name: "CONFIG",
        template: "filepaths",
      },
    },
    {
      name: ["-o", "--override"],
      description: "Override individual configuration options",
      isRepeatable: true,
    },
    {
      name: ["-d", "--directory", "--working-directory"],
      description: "Change to the specified directory when launching",
      args: {
        name: "DIRECTORY",
        template: "folders",
      },
    },
    {
      name: "--session",
      description: "Path to a file containing the startup session",
      args: {
        name: "SESSION",
        template: "filepaths",
        suggestions: [
          {
            name: "-",
            description: "Read from stdin",
          },
        ],
      },
    },
    {
      name: "--hold",
      description: "Remain open after child process exits",
    },
    {
      name: ["-1", "--single-instance"],
      description: "Only a single instance of kitty will run",
    },
    {
      name: "--instance-group",
      description:
        "Kitty will open a new window in an existing instance and quit immediately",
      dependsOn: ["-1", "--single-instance"],
      args: {
        name: "INSTANCE_GROUP",
      },
    },
    {
      name: "--wait-for-single-instance-window-close",
      description:
        "The new window will not quit till the newly opened window is closed",
      dependsOn: ["-1", "--single-instance"],
    },
    {
      name: "--listen-on",
      description:
        "Tell kitty to listen on the specified address for control messages",
      args: {
        name: "LISTEN_ON",
      },
    },
    {
      name: "--start-as",
      description: "Control how the initial kitty window is created",
      args: {
        name: "START_AS",
        suggestions: ["normal", "fullscreen", "maximized", "minimized"],
      },
    },
    {
      name: ["-v", "--version"],
      description: "The current kitty version",
    },
    {
      name: ["-h", "--help"],
      description: "Display this help message",
    },
  ],
  subcommands: [
    {
      name: "@",
      options: [
        {
          name: "--to",
          description: "An address for the kitty instance to control",
          args: {
            name: "TO",
          },
        },
      ],
      subcommands: [
        {
          name: "close-tab",
          description: "Close the specified tab(s)",
          options: [
            {
              name: ["-m", "--match"],
              description: "The tab to match",
              args: {
                name: "MATCH",
              },
            },
            {
              name: "--self",
              description:
                "Close the tab of the window this command is run in, rather than the active tab",
            },
            {
              name: "--target-group",
              description: "Close the specified group of tabs",
              args: {
                name: "TARGET_GROUP",
              },
            },
          ],
        },
        {
          name: "close-window",
          description: "Close the specified window(s)",
          options: [
            {
              name: ["-m", "--match"],
              description: "The window to match",
              args: {
                name: "MATCH",
              },
            },
            {
              name: "--self",
              description:
                "Close the window this command is run in, rather than the active window",
            },
          ],
        },
        {
          name: "create-marker",
          options: [
            {
              name: ["-m", "--match"],
              description: "The window to match",
              args: {
                name: "MATCH",
              },
            },
            {
              name: "--self",
              description:
                "Close the window this command is run in, rather than the active window",
            },
          ],
          args: [
            {
              name: "MARKER",
            },
            {
              name: "SPECIFICATION",
            },
          ],
        },
        {
          name: "detach-tab",
          description: "Detach the specified tab",
          options: [
            {
              name: ["-m", "--match"],
              description: "The tab to match",
              args: {
                name: "MATCH",
              },
            },
            {
              name: ["-t", "--target-tab"],
              description: "The tab to match",
              args: {
                name: "TARGET_TAB",
              },
            },
            {
              name: "--self",
              description:
                "Detach the tab this command is run in, rather than the active tab",
            },
          ],
        },
        {
          name: "detach-window",
          description: "Detach the specified window",
          options: [
            {
              name: ["-m", "--match"],
              description: "The window to match",
              args: {
                name: "MATCH",
              },
            },
            {
              name: ["-t", "--target-tab"],
              description: "The tab to match",
              args: {
                name: "TARGET_TAB",
              },
            },
            {
              name: "--self",
              description:
                "Detach the window this command is run in, rather than the active window",
            },
          ],
        },
        {
          name: "disable-ligatures",
          description:
            "Control ligature rendering for the specified windows/tabs",
          options: [
            {
              name: ["-a", "--all"],
              description: "Disable in all windows",
            },
            {
              name: ["-m", "--match"],
              description: "The window to match",
              args: {
                name: "MATCH",
              },
            },
            {
              name: ["-t", "--match-tab"],
              description: "The tab to match",
            },
          ],
          args: {
            name: "STRATEGY",
            suggestions: ["never", "always", "cursor"],
          },
        },
        {
          name: "env",
          description:
            "Change the environment variables seen by processing in newly launched windows",
          args: {
            name: "ENV",
            isVariadic: true,
          },
        },
        {
          name: "focus-tab",
          description: "The active window in the specified tab will be focused",
          options: [
            {
              name: ["-m", "--match"],
              description: "The tab to match",
              args: {
                name: "MATCH",
              },
            },
            {
              name: "--no-response",
              description:
                "Don't wait for a response indicating the success of the action",
            },
          ],
        },
        {
          name: "focus-window",
          description:
            "Focus the specified window, if no window is specified, focus the window this command is run inside",
          options: [
            {
              name: ["-m", "--match"],
              description: "The window to match",
              args: {
                name: "MATCH",
              },
            },
            {
              name: "--no-response",
              description:
                "Don't wait for a response indicating the success of the action",
            },
          ],
        },
        {
          name: "get-colors",
          description: "Get the terminal colors for the specified window",
          options: [
            {
              name: ["-c", "--configured"],
              description:
                "Instead of outputting the colors for the specified window, output the currently configured colors",
            },
            {
              name: ["-m", "--match"],
              description: "The window to match",
            },
          ],
        },
        {
          name: "get-text",
        },
        {
          name: "goto-layout",
        },
        {
          name: "kitten",
          icon: "🐱",
        },
        {
          name: "last-used-layout",
        },
        {
          name: "launch",
        },
        {
          name: "ls",
        },
        {
          name: "new-window",
        },
        {
          name: "remove-marker",
        },
        {
          name: "resize-os-window",
        },
        {
          name: "resize-window",
        },
        {
          name: "scroll-window",
        },
        {
          name: "select-window",
        },
        {
          name: "send-text",
        },
        {
          name: "set-background-image",
        },
        {
          name: "set-background-opacity",
        },
        {
          name: "set-colors",
        },
        {
          name: "set-enabled-layouts",
        },
        {
          name: "set-font-size",
        },
        {
          name: "set-spacing",
        },
        {
          name: "set-tab-color",
          description:
            "The foreground and background colors when active and inactive can be overridden using this command",
          options: [
            {
              name: ["-m", "--match"],
              description: "The tab to match",
              args: {
                name: "MATCH",
              },
            },
            {
              name: "--self",
              description:
                "Close the window this command is run in, rather than the active window",
            },
          ],
        },
        {
          name: "set-tab-title",
          description: "Set the title for the specified tab(s)",
          options: [
            {
              name: ["-m", "--match"],
              description: "The tab to match",
            },
          ],
        },
        {
          name: "set-window-logo",
        },
        {
          name: "set-window-title",
          description: "Set the title of the specified window(s)",
          options: [
            {
              name: ["-m", "--match"],
              description: "The window to match",
            },
            {
              name: "--temporary",
              description: "The title can be overwritten by escape sequences",
            },
          ],
        },
        {
          name: "signal-child",
          description:
            "Send one or more signals to the foreground process in the specified window(s)",
          options: [
            {
              name: ["-m", "--match"],
              description: "The window to match",
            },
          ],
          args: {
            name: "SIGNAL",
            isVariadic: true,
          },
        },
      ],
    },
    icatCommand,
    ...plusCommands.map((kitten) => ({
      ...kitten,
      name: `+${kitten.name}`,
    })),
  ],
  args: {
    isCommand: true,
  },
};

export default completionSpec;
