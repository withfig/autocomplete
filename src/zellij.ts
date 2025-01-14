const generateSessions: Fig.Generator = {
  script: {
    command: "zellij",
    args: ["list-sessions", "-n"],
  },
  postProcess: (out) => {
    if (out.includes("No active zellij sessions found")) {
      return [];
    }

    return out
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const name = line.split("[")[0].trim();
        const createdMatch = line.match(/\[Created (.+?) ago\]/);
        const isExited = line.includes("EXITED");

        let description = "";
        if (createdMatch) {
          description = `Created ${createdMatch[1]} ago`;
        }
        if (isExited) {
          description += " (EXITED)";
        }

        return {
          name: name,
          description: description,
          icon: isExited ? "⚠️" : "📟",
          priority: isExited ? 51 : 75,
        };
      });
  },
};

const option: Fig.Option[] = [
  {
    name: ["-c", "--config"],
    description: "Change where zellij looks for the configuration file",
    args: {
      name: "CONFIG",
      generators: {
        template: "filepaths",
      },
    },
  },
  {
    name: "--config-dir",
    description: "Change where zellij looks for the configuration directory",
    args: {
      name: "CONFIG_DIR",
      generators: {
        template: "folders",
      },
    },
  },
  {
    name: ["-d", "--debug"],
    description: "Specify emitting additional debug information",
  },
  {
    name: "--data-dir",
    description: "Change where zellij looks for plugins",
    args: {
      name: "DATA_DIR",
      generators: {
        template: "folders",
      },
    },
  },
  {
    name: ["-h", "--help"],
    description: "Print help information",
    isPersistent: true,
  },
  {
    name: ["-l", "--layout"],
    description:
      "Name of a predefined layout inside the layout directory or the path to a layout file",
    args: {
      name: "LAYOUT",
      generators: {
        template: "filepaths",
      },
    },
  },
  {
    name: "--max-panes",
    description:
      "Maximum panes on screen, caution: opening more panes will close old ones",
    args: {
      name: "MAX_PANES",
    },
  },
  {
    name: ["-n", "--new-session-with-layout"],
    description:
      "Name of a predefined layout inside the layout directory or the path to a layout file",
    args: {
      name: "NEW_SESSION_WITH_LAYOUT",
      generators: {
        template: "filepaths",
      },
    },
  },
  {
    name: ["-s", "--session"],
    description: "Specify name of a new session",
    args: {
      name: "SESSION",
    },
  },
  {
    name: ["-V", "--version"],
    description: "Print version information",
  },
];

const actionSubcommands: Fig.Subcommand[] = [
  {
    name: "clear",
    description: "Clear all buffers for a focused pane",
  },
  {
    name: "close-pane",
    description: "Close the focused pane",
  },
  {
    name: "close-tab",
    description: "Close the current tab",
  },
  {
    name: "dump-layout",
    description: "Dump current layout to stdout",
  },
  {
    name: "dump-screen",
    description: "Dump the focused pane to a file",
    args: {
      name: "FILE",
      generators: {
        template: "filepaths",
      },
    },
  },
  {
    name: "edit",
    description:
      "Open the specified file in a new zellij pane with your default EDITOR",
  },
  {
    name: "edit-scrollback",
    description: "Open the pane scrollback in your default editor",
  },
  {
    name: "focus-next-pane",
    description: "Change focus to the next pane",
  },
  {
    name: "focus-previous-pane",
    description: "Change focus to the previous pane",
  },
  {
    name: "go-to-next-tab",
    description: "Go to the next tab",
  },
  {
    name: "go-to-previous-tab",
    description: "Go to the previous tab",
  },
  {
    name: "go-to-tab",
    description: "Go to tab with index [index]",
  },
  {
    name: "go-to-tab-name",
    description: "Go to tab with name [name]",
  },
  {
    name: "half-page-scroll-down",
    description: "Scroll down half page in focus pane",
  },
  {
    name: "half-page-scroll-up",
    description: "Scroll up half page in focus pane",
  },
  {
    name: "help",
    description: "Print this message or the help of the given subcommand(s)",
  },
  {
    name: "launch-or-focus-plugin",
    description: "Launch or focus a plugin",
  },
  {
    name: "launch-plugin",
    description: "Launch a plugin",
  },
  {
    name: "list-clients",
    description: "List connected clients",
  },
  {
    name: "move-focus",
    description:
      "Move the focused pane in the specified direction. [right|left|up|down]",
  },
  {
    name: "move-focus-or-tab",
    description:
      "Move focus to the pane or tab (if on screen edge) in the specified direction [right|left|up|down]",
  },
  {
    name: "move-pane",
    description:
      "Change the location of the focused pane in the specified direction or rotate forwards [right|left|up|down]",
  },
  {
    name: "move-pane-backwards",
    description: "Rotate the location of the previous pane backwards",
  },
  {
    name: "move-tab",
    description:
      "Move the focused tab in the specified direction. [right|left]",
  },
  {
    name: "new-pane",
    description:
      "Open a new pane in the specified direction [right|down] If no direction is specified, will try to use the biggest available space",
  },
  {
    name: "new-tab",
    description:
      "Create a new tab, optionally with a specified tab layout and name",
  },
  {
    name: "next-swap-layout",
    description: "Swap to the next layout",
  },
  {
    name: "page-scroll-down",
    description: "Scroll down one page in focus pane",
  },
  {
    name: "page-scroll-up",
    description: "Scroll up one page in focus pane",
  },
  {
    name: "previous-swap-layout",
    description: "Swap to the previous layout",
  },
  {
    name: "query-tab-names",
    description: "Query all tab names",
  },
  {
    name: "rename-pane",
    description: "Renames the focused pane",
  },
  {
    name: "rename-session",
    description: "Rename the current session",
  },
  {
    name: "rename-tab",
    description: "Renames the focused pane",
  },
  {
    name: "resize",
    description:
      "[increase|decrease] the focused panes area at the [left|down|up|right] border",
  },
  {
    name: "scroll-down",
    description: "Scroll down in focus pane",
  },
  {
    name: "scroll-to-bottom",
    description: "Scroll down to bottom in focus pane",
  },
  {
    name: "scroll-to-top",
    description: "Scroll up to top in focus pane",
  },
  {
    name: "scroll-up",
    description: "Scroll up in the focused pane",
  },
  {
    name: "start-or-reload-plugin",
    description: "Start or reload a plugin",
  },
  {
    name: "switch-mode",
    description:
      "Switch input mode of all connected clients [locked|pane|tab|resize|move|search|session]",
  },
  {
    name: "toggle-active-sync-tab",
    description:
      "Toggle between sending text commands to all panes on the current tab and normal mode",
  },
  {
    name: "toggle-floating-panes",
    description:
      "Toggle the visibility of all floating panes in the current Tab, open one if none exist",
  },
  {
    name: "toggle-fullscreen",
    description: "Toggle between fullscreen focus pane and normal layout",
  },
  {
    name: "toggle-pane-embed-or-floating",
    description:
      "Embed focused pane if floating or float focused pane if embedded",
  },
  {
    name: "toggle-pane-frames",
    description: "Toggle frames around panes in the UI",
  },
  {
    name: "undo-rename-pane",
    description: "Remove a previously set pane name",
  },
  {
    name: "undo-rename-tab",
    description: "Remove a previously set tab name",
  },
  {
    name: "write",
    description: "Write bytes to the terminal",
  },
  {
    name: "write-chars",
    description: "Write characters to the terminal",
  },
];

const subcommands: Fig.Subcommand[] = [
  {
    name: ["action", "ac"],
    description: "Send actions to a specific session",
    subcommands: actionSubcommands,
  },
  {
    name: ["attach", "a"],
    description: "Attach to a session",
    options: [
      {
        name: ["-b", "--background"],
        description:
          "Create a detached session in the background if one does not exist",
      },
      {
        name: ["-c", "--create"],
        description: "Create a session if one does not exist",
      },
      {
        name: ["-f", "--force-run-commands"],
        description:
          "If resurrecting a dead session, immediately run all its commands on startup",
      },
      {
        name: "--index",
        description:
          "Number of the session index in the active sessions ordered creation date",
      },
    ],
    args: {
      name: "SESSION_NAME",
      description: "Name of the session to attach to",
      generators: generateSessions,
    },
  },
  {
    name: "convert-config",
    description: "Convert configuration files",
    args: {
      name: "CONFIG",
      generators: {
        template: "filepaths",
      },
    },
  },
  {
    name: "convert-layout",
    description: "Convert layout files",
    args: {
      name: "LAYOUT",
      generators: {
        template: "filepaths",
      },
    },
  },
  {
    name: "convert-theme",
    description: "Convert theme files",
    args: {
      name: "THEME",
      generators: {
        template: "filepaths",
      },
    },
  },
  {
    name: ["delete-all-sessions", "da"],
    description: "Delete all sessions",
    options: [
      {
        name: ["-f", "--force"],
        description:
          "Kill the sessions if they're running before deleting them",
      },
      {
        name: ["-y", "--yes"],
        description: "Automatic yes to prompts",
      },
    ],
  },
  {
    name: ["delete-session", "d"],
    description: "Delete a specific session",
    options: [
      {
        name: ["-f", "--force"],
        description:
          "Kill the sessions if they're running before deleting them",
      },
    ],
    args: {
      name: "TARGET_SESSION",
      description: "Name of the session to delete",
      generators: generateSessions,
    },
  },
  {
    name: ["edit", "e"],
    description: "Edit file with default $EDITOR / $VISUAL",
    args: {
      name: "FILE",
      generators: {
        template: "filepaths",
      },
    },
    options: [
      {
        name: "--cwd",
        description: "Change the working directory of the editor",
        args: {
          name: "CWD",
          generators: {
            template: "folders",
          },
        },
      },
      {
        name: ["-d", "--direction"],
        description: "Direction to open the new pane in",
        args: {
          name: "DIRECTION",
        },
      },
      {
        name: ["-f", "--floating"],
        description: "Open the new pane in floating mode",
      },
      {
        name: "--height",
        description:
          "The height if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
        args: {
          name: "HEIGHT",
        },
      },
      {
        name: ["-i", "--in-place"],
        description:
          "Open the new pane in place of the current pane, temporarily suspending it",
      },
      {
        name: ["-l", "--line-number"],
        description: "Open the file in the specified line number",
        args: {
          name: "LINE_NUMBER",
        },
      },
      {
        name: "--width",
        description:
          "The width if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
        args: {
          name: "WIDTH",
        },
      },
      {
        name: ["-x", "--x"],
        description:
          "The x coordinates if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
        args: {
          name: "X",
        },
      },
      {
        name: ["-y", "--y"],
        description:
          "The y coordinates if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
        args: {
          name: "Y",
        },
      },
    ],
  },
  {
    name: "help",
    description: "Print this message or the help of the given subcommand(s)",
  },
  {
    name: ["kill-all-sessions", "ka"],
    description: "Kill all sessions",
    options: [
      {
        name: ["-y", "--yes"],
        description: "Automatic yes to prompts",
      },
    ],
  },
  {
    name: ["kill-session", "k"],
    description: "Kill a specific session",
    args: {
      name: "TARGET_SESSION",
      description: "Name of the session to kill",
      generators: generateSessions,
    },
  },
  {
    name: ["list-aliases", "la"],
    description: "List existing plugin aliases",
  },
  {
    name: ["list-sessions", "ls"],
    description: "List active sessions",
    options: [
      {
        name: ["-n", "--no-formatting"],
        description: "Do not add colors and formatting to the list",
      },
      {
        name: ["-r", "--reverse"],
        description: "List the sessions in reverse order",
      },
      {
        name: ["-s", "--short"],
        description: "Print just the session name",
      },
    ],
  },
  {
    name: "options",
    description: "Change the behaviour of zellij",

    options: [
      {
        name: "--attach-to-session",
        description:
          "Whether to attach to a session specified in 'session-name' if it exists",
        args: {
          name: "ATTACH_TO_SESSION",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--auto-layout",
        description:
          "Whether to lay out panes in a predefined set of layouts whenever possible",
        args: {
          name: "AUTO_LAYOUT",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--copy-clipboard",
        description: "OSC52 destination clipboard",
        args: {
          name: "COPY_CLIPBOARD",
          suggestions: ["system", "primary"],
        },
      },
      {
        name: "--copy-command",
        description:
          "Switch to using a user supplied command for clipboard instead of OSC52",
        args: {
          name: "COPY_COMMAND",
        },
      },
      {
        name: "--copy-on-select",
        description: "Automatically copy when selecting text (true or false)",
        args: {
          name: "COPY_ON_SELECT",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--default-cwd",
        description: "Set the default cwd",
        args: {
          name: "DEFAULT_CWD",
        },
      },
      {
        name: "--default-layout",
        description: "Set the default layout",
        args: {
          name: "DEFAULT_LAYOUT",
        },
      },
      {
        name: "--default-mode",
        description: "Set the default mode",
        args: {
          name: "DEFAULT_MODE",
        },
      },
      {
        name: "--default-shell",
        description: "Set the default shell",
        args: {
          name: "DEFAULT_SHELL",
        },
      },
      {
        name: "--disable-mouse-mode",
        description: "Disable handling of mouse events",
      },
      {
        name: "--disable-session-metadata",
        description: "If true, will disable writing session metadata to disk",
        args: {
          name: "DISABLE_SESSION_METADATA",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--layout-dir",
        description:
          "Set the layout_dir, defaults to subdirectory of config dir",
        args: {
          name: "LAYOUT_DIR",
          generators: {
            template: "folders",
          },
        },
      },
      {
        name: "--mirror-session",
        description: "Mirror session when multiple users are connected",
        args: {
          name: "MIRROR_SESSION",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--mouse-mode",
        description:
          "Set the handling of mouse events (true or false) Can be temporarily bypassed by the [SHIFT] key",
        args: {
          name: "MOUSE_MODE",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--no-pane-frames",
        description: "Disable display of pane frames",
      },
      {
        name: "--on-force-close",
        description: "Set behaviour on force close (quit or detach)",
        args: {
          name: "ON_FORCE_CLOSE",
        },
      },
      {
        name: "--pane-frames",
        description: "Set display of the pane frames (true or false)",
        args: {
          name: "PANE_FRAMES",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--scroll-buffer-size",
        description: "",
        args: {
          name: "SCROLL_BUFFER_SIZE",
        },
      },
      {
        name: "--scrollback-editor",
        description:
          "Explicit full path to open the scrollback editor (default is $EDITOR or $VISUAL)",
        args: {
          name: "SCROLLBACK_EDITOR",
        },
      },
      {
        name: "--scrollback-lines-to-serialize",
        description:
          "Scrollback lines to serialize along with the pane viewport when serializing sessions, 0 defaults to the scrollback size. If this number is higher than the scrollback size, it will also default to the scrollback size",
        args: {
          name: "SCROLLBACK_LINES_TO_SERIALIZE",
        },
      },
      {
        name: "--serialization-interval",
        description:
          "The interval at which to serialize sessions for resurrection (in seconds)",
        args: {
          name: "SERIALIZATION_INTERVAL",
        },
      },
      {
        name: "--serialize-pane-viewport",
        description:
          "Whether pane viewports are serialized along with the session, default is false",
        args: {
          name: "SERIALIZE_PANE_VIEWPORT",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--session-name",
        description: "The name of the session to create when starting Zellij",
        args: {
          name: "SESSION_NAME",
        },
      },
      {
        name: "--session-serialization",
        description: "Whether sessions should be serialized to the HD",
        args: {
          name: "SESSION_SERIALIZATION",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--simplified-ui",
        description:
          "Allow plugins to use a more simplified layout that is compatible with more fonts",
        args: {
          name: "SIMPLIFIED_UI",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--styled-underlines",
        description: "Whether to use ANSI styled underlines",
        args: {
          name: "STYLED_UNDERLINES",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--support-kitty-keyboard-protocol",
        description:
          "Whether to enable support for the Kitty keyboard protocol",
        args: {
          name: "SUPPORT_KITTY_KEYBOARD_PROTOCOL",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--theme",
        description: "Set the default theme",
        args: {
          name: "THEME",
        },
      },
      {
        name: "--theme-dir",
        description:
          "Set the theme_dir, defaults to subdirectory of config dir",
        args: {
          name: "THEME_DIR",
          generators: {
            template: "folders",
          },
        },
      },
    ],
  },
  {
    name: "pipe",
    description:
      "Send data to one or more plugins, launch them if they are not running",
    args: {
      name: "PAYLOAD",
      description: "The data to send down this pipe",
    },
    options: [
      {
        name: ["-n", "--name"],
        description: "The name of the pipe",
        args: {
          name: "NAME",
        },
      },
      {
        name: ["-a", "--args"],
        description: "The args of the pipe",
        args: {
          name: "ARGS",
        },
      },
      {
        name: ["-p", "--plugin"],
        description:
          "The plugin url (eg. file:/tmp/my-plugin.wasm) to direct this pipe to, if not specified, will be sent to all plugins, if specified and is not running, the plugin will be launched",
        args: {
          name: "PLUGIN",
        },
      },
      {
        name: ["-c", "--plugin-configuration"],
        description:
          "The plugin configuration (note: the same plugin with different configuration is considered a different plugin for the purposes of determining the pipe destination)",
        args: {
          name: "PLUGIN_CONFIGURATION",
        },
      },
    ],
  },
  {
    name: ["plugin", "p"],
    description: "Load a plugin",
    args: {
      name: "URL",
      description:
        "Plugin URL, can either start with http(s), file: or zellij:",
    },
    options: [
      {
        name: ["-c", "--configuration"],
        description: "Plugin configuration",
        args: {
          name: "CONFIGURATION",
        },
      },
      {
        name: ["-f", "--floating"],
        description: "Open the new pane in floating mode",
      },
      {
        name: "--height",
        description:
          "The height if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
        args: {
          name: "HEIGHT",
        },
      },
      {
        name: ["-i", "--in-place"],
        description:
          "Open the new pane in place of the current pane, temporarily suspending it",
      },
      {
        name: "--width",
        description:
          "The width if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
        args: {
          name: "WIDTH",
        },
      },
      {
        name: ["-x", "--x"],
        description:
          "The x coordinates if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
        args: {
          name: "X",
        },
      },
      {
        name: ["-y", "--y"],
        description:
          "The y coordinates if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
        args: {
          name: "Y",
        },
      },
    ],
  },
  {
    name: ["run", "r"],
    description: "Run a command in a new pane",
    args: {
      name: "COMMAND",
      description: "Command to run",
    },
    options: [
      {
        name: ["-c", "--close-on-exit"],
        description: "Close the pane immediately when its command exits",
      },
      {
        name: "--cwd",
        description: "Change the working directory of the new pane",
        args: {
          name: "CWD",
          generators: {
            template: "folders",
          },
        },
      },
      {
        name: ["-d", "--direction"],
        description: "Direction to open the new pane in",
        args: {
          name: "DIRECTION",
        },
      },
      {
        name: ["-f", "--floating"],
        description: "Open the new pane in floating mode",
      },
      {
        name: "--height",
        description:
          "The height if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
        args: {
          name: "HEIGHT",
        },
      },
      {
        name: ["-i", "--in-place"],
        description:
          "Open the new pane in place of the current pane, temporarily suspending it",
      },
      {
        name: ["-n", "--name"],
        description: "Name of the new pane",
        args: {
          name: "NAME",
        },
      },
      {
        name: ["-s", "--start-suspended"],
        description:
          "Start the command suspended, only running after you first presses ENTER",
      },
      {
        name: "--width",
        description:
          "The width if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
        args: {
          name: "WIDTH",
        },
      },
      {
        name: ["-x", "--x"],
        description:
          "The x coordinates if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
        args: {
          name: "X",
        },
      },
      {
        name: ["-y", "--y"],
        description:
          "The y coordinates if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
        args: {
          name: "Y",
        },
      },
    ],
  },
  {
    name: "setup",
    description: "Setup zellij and check its configuration",
    options: [
      {
        name: "--check",
        description:
          "Checks the configuration of zellij and displays currently used directories",
      },
      {
        name: "--clean",
        description:
          "Disables loading of configuration file at default location, loads the defaults that zellij ships with",
      },
      {
        name: "--dump-config",
        description: "Dump the default configuration file to stdout",
      },
      {
        name: "--dump-layout",
        description: "Dump specified layout to stdout",
        args: {
          name: "DUMP_LAYOUT",
        },
      },
      {
        name: "--dump-plugins",
        description:
          "Dump the builtin plugins to DIR or 'DATA DIR' if unspecified",
        args: {
          name: "DIR",
        },
      },
      {
        name: "--dump-swap-layout",
        description: "Dump the specified swap layout file to stdout",
        args: {
          name: "DUMP_SWAP_LAYOUT",
        },
      },
      {
        name: "--generate-auto-start",
        description: "Generates auto-start script for the specified shell",
        args: {
          name: "SHELL",
        },
      },
      {
        name: "--generate-completion",
        description: "Generates completion for the specified shell",
        args: {
          name: "SHELL",
          suggestions: ["bash", "fish", "zsh"],
        },
      },
    ],
  },
];

const completion: Fig.Spec = {
  name: "zellij",
  description: "A terminal workspace with batteries included",
  options: option,
  subcommands: subcommands,
};

export default completion;
