var sessionsArg = {
  name: "target-session",
  generators: {
    script: "tmux ls",
    postProcess: function (out) {
      return out.split("\n").map(function (line) {
        var content = line.split(":");
        return {
          name: content[0],
          description: content[1],
        };
      });
    },
  },
};
var clientsArg = {
  name: "target-client",
  generators: {
    script: "tmux lsc",
    postProcess: function (out) {
      return out.split("\n").map(function (line) {
        var content = line.split(":");
        return {
          name: content[0],
          description: content[1],
        };
      });
    },
  },
};
var completionSpec = {
  name: "tmux",
  description: "A terminal multiplexer",
  subcommands: [
    {
      name: ["a", "at", "attach", "attach-session"],
      description: "Attach to last session",
      options: [
        {
          name: "-d",
          description: "Detach all others clients to the session",
        },
        {
          name: "-x",
          description:
            "Send SIGHUP to the parent process and detach the client",
        },
        {
          name: "-f",
          description: "Set client flags",
          args: {
            name: "flags",
            description: "Comma-separated list of flags",
            suggestions: [
              "active-pane",
              "ignore-size",
              "no-output",
              "pause-after",
              "read-only",
              "wait-exit",
            ],
          },
        },
        {
          name: "-c",
          description: "Set the session's working directory",
          args: {
            name: "working-directory",
            description: "The session's working directory",
            template: "folders",
          },
        },
        {
          name: "-E",
          description: "Don't use update-environment option",
        },
        {
          name: "-t",
          description: "Attach to a session with the given name",
          args: sessionsArg,
        },
      ],
    },
    {
      name: ["bind", "bind-key"],
      description: "Bind a key to a command",
    },
    {
      name: "break-pane",
      description: "Break a pane from an exiting into a new window",
    },
    {
      name: ["capturep", "capture-pane"],
      description: "Capture the contents of a pane to a buffer",
    },
    {
      name: "choose-buffer",
      description: "Put a pane into buffer choice mode",
    },
    {
      name: "choose-client",
      description: "Put a pane into buffer client mode",
    },
    {
      name: "choose-tree",
      description: "Put a pane into buffer tree mode",
    },
    {
      name: ["clearhist", "clear-history"],
      description: "Remove and clear history for a pane",
    },
    {
      name: "clock-mode",
      description: "Enter clock mode",
    },
    {
      name: "command-prompt",
      description: "Open the tmux command prompt in a client",
      // TODO add other options
      options: [
        {
          name: "-t",
          description: "The target client",
          args: clientsArg,
        },
      ],
    },
    {
      name: ["confirm", "confirm-before"],
      description: "Run a command but ask for confirmation before",
      args: {
        name: "command",
        description: "The command to run",
        variadic: true,
      },
      options: [
        {
          name: "-p",
          description: "A prompt to display for confirmation",
          args: {
            name: "prompt",
          },
        },
        {
          name: "-t",
          description: "The target client",
          args: clientsArg,
        },
      ],
    },
    {
      name: "copy-mode",
      description: "Ennter copy mode",
    },
    {
      name: ["deleteb", "delete-buffer"],
      description: "Delete a paste buffer",
    },
    {
      name: ["detach", "detach-client"],
      description: "Detach a client from the server",
      options: [
        {
          name: "-a",
          description: "Kills all but the client given with -t",
        },
        {
          name: "-P",
          description: "Send SIGHUP to the parent process",
        },
        {
          name: "-E",
          description: "Run the given shell-command to replace the client",
          args: {
            name: "shell-command",
            description: "The shell-command to run",
            variadic: true,
          },
        },
        {
          name: "-t",
          description: "The target client",
          args: clientsArg,
        },
        {
          name: "-s",
          description: "Detach all clients attached to the specified session",
          args: sessionsArg,
        },
      ],
    },
    {
      name: ["menu", "display-menu"],
      description: "Display menu on target-client",
      // TODO add other options
      options: [
        {
          name: "-c",
          description: "The target client",
          args: clientsArg,
        },
      ],
    },
    {
      name: ["display", "display-message"],
      description: "Display a message in the status line",
      // TODO add other options
      options: [
        {
          name: "-c",
          description: "The target client",
          args: clientsArg,
        },
      ],
    },
    {
      name: ["displayp", "display-panes"],
      description: "Display an indicator for each visible pane",
      args: {
        name: "template",
        default: "'select-pane -t %%'",
        isOptional: true,
      },
      options: [
        {
          name: "-b",
          description:
            "Do not block other commands from running until the indicator is closed",
        },
        {
          name: "-N",
          description: "Do not close the indicator when a key is pressed",
        },
        {
          name: "-d",
          description: "Specify the duration",
          args: {
            name: "duration",
            description:
              "The duration to close the indicator after in milliseconds",
          },
        },
        {
          name: "-t",
          description: "The target client",
          args: clientsArg,
        },
      ],
    },
    {
      name: ["findw", "find-window"],
      description: "Search for a pattern in windows",
    },
    {
      name: ["has", "has-session"],
      description: "Check and report if a session exists on the server",
      options: [
        {
          name: "-t",
          description: "Specify the target session",
          args: sessionsArg,
        },
      ],
    },
    {
      name: ["if", "if-shell"],
      description: "Execute a tmux command if a shell-command succeeded",
    },
    {
      name: ["joinp", "join-pane"],
      description: "Split a pae and move an existing one into the new space",
    },
    {
      name: ["killp", "kill-pane"],
      description: "Destroy a given pane",
    },
    {
      name: "kill-server",
      description: "Kill clients, session and server",
    },
    {
      name: ["kill-ses", "kill-session"],
      description: "Kill/delete sessions",
      options: [
        {
          name: "-t",
          description: "Kill/delete session with the given name",
          args: sessionsArg,
        },
        {
          name: "-a",
          description: "Kill/delete all session but the current",
        },
      ],
    },
    {
      name: ["killw", "kill-window"],
      description: "Destroy a given window",
    },
    {
      name: ["lastp", "last-pane"],
      description: "Select the previously selected pane",
    },
    {
      name: ["last", "last-window"],
      description: "Select the previously selected window",
      options: [
        {
          name: "-t",
          description:
            "Select the previously select window of the target-session",
          args: sessionsArg,
        },
      ],
    },
    {
      name: ["linkw", "link-window"],
      description: "Link a window to another",
    },
    {
      name: ["linkw", "link-window"],
      description: "Link a window to another",
    },
    {
      name: ["lsb", "list-buffers"],
      description: "List paste buffers of a session",
    },
    {
      name: ["lsc", "list-clients"],
      description: "List clients attached to a server",
      options: [
        {
          name: "-t",
          description: "List only clients connected to that session",
          args: sessionsArg,
        },
      ],
    },
    {
      name: ["lscm", "list-commands"],
      description: "List supported sub-commands",
    },
    {
      name: ["lsk", "list-keys"],
      description: "List all key-bindings",
    },
    {
      name: ["lsp", "list-panes"],
      description: "List panes of a window",
    },
    {
      name: ["ls", "list-sessions"],
      description: "List sessions managed by a server",
    },
    {
      name: ["lsw", "list-windows"],
      description: "List windows of a session",
      options: [
        {
          name: "-t",
          description: "List windows of the target-session",
          args: sessionsArg,
        },
      ],
    },
    {
      name: ["loadb", "load-buffer"],
      description: "Load a file intoa paste buffer",
      // TODO add other options
      options: [
        {
          name: "-t",
          description: "The target client",
          args: clientsArg,
        },
      ],
    },
    {
      name: ["lockc", "lock-client"],
      description: "Lock a client",
      options: [
        {
          name: "-t",
          description: "The target client",
          args: clientsArg,
        },
      ],
    },
    {
      name: ["lock", "lock-server"],
      description: "Lock all clients attached to the server",
    },
    {
      name: ["locks", "lock-session"],
      description: "Lock all clients attached to a session",
      options: [
        {
          name: "-t",
          description: "Lock all clients attached to target-session",
          args: sessionsArg,
        },
      ],
    },
    {
      name: ["movep", "move-pane"],
      description: "Move a pane into a new space",
    },
    {
      name: ["movew", "move-window"],
      description: "Move a window to another",
    },
    {
      name: ["new", "new-session"],
      description: "Create a new session",
      options: [
        {
          name: "-s",
          description: "Start a new session with the given name",
          args: {
            name: "session-name",
          },
        },
        {
          name: "-n",
          description: "Start a new session with the given window",
          args: {
            name: "window-name",
          },
        },
      ],
    },
    {
      name: ["neww", "new-window"],
      description: "Create a new window",
    },
    {
      name: ["nextl", "next-layout"],
      description: "Move a window to the next layout",
    },
    {
      name: ["next", "next-window"],
      description: "Move to the next window in a session",
      options: [
        {
          name: "-t",
          description: "Move to the next window of the target-session",
          args: sessionsArg,
        },
      ],
    },
    {
      name: ["pasteb", "paste-buffer"],
      description: "Insert a paste buffer into the window",
    },
    {
      name: ["pipep", "pipe-pane"],
      description: "Pipe output from a pane to a shell command",
    },
    {
      name: ["prevl", "previous-layout"],
      description: "Move a window to the previous layout",
    },
    {
      name: ["prev", "previous-window"],
      description: "Move to the previous window in a session",
      options: [
        {
          name: "-t",
          description: "Move to the previous window of the target-session",
          args: sessionsArg,
        },
      ],
    },
    {
      name: ["refresh", "refresh-client"],
      description: "Refresh a client",
      // TODO add other options
      options: [
        {
          name: "-t",
          description: "The target client",
          args: clientsArg,
        },
      ],
    },
    {
      name: ["rename", "rename-session"],
      description: "Rename a session",
      options: [
        {
          name: "-t",
          description: "Rename the target-session",
          args: sessionsArg,
        },
      ],
      args: {
        name: "new-name",
        description: "The new name of the session",
      },
    },
    {
      name: ["renamew", "rename-window"],
      description: "Rename a window",
    },
    {
      name: ["resizep", "resize-pane"],
      description: "Resize a pane",
    },
    {
      name: ["resizew", "resize-window"],
      description: "Resize a window",
    },
    {
      name: ["respawnp", "respawn-pane"],
      description: "Resue a pane in which a command has exited",
    },
    {
      name: ["respawnw", "respawn-window"],
      description: "Resue a window in which a command has exited",
    },
    {
      name: ["rotatew", "rotate-window"],
      description: "Rotate positions of panes in a window",
    },
    {
      name: ["run", "run-shell"],
      description: "Execute a command without create a new window",
    },
    {
      name: ["saveb", "save-buffer"],
      description: "Save a paste buffer to a file",
    },
    {
      name: ["selectl", "select-layout"],
      description: "Choose a layout for a pane",
    },
    {
      name: ["selectp", "select-pane"],
      description: "Make a pane the active one in the window",
    },
    {
      name: ["selectw", "select-window"],
      description: "Select a window",
    },
    {
      name: ["send", "send-keys"],
      description: "Send key(s) to a window",
    },
    {
      name: "send-prefix",
      description: "Send the prefix key to a window",
    },
    {
      name: ["info", "server-info"],
      description: "Show every session, window, pane, etc...",
    },
    {
      name: ["setb", "set-buffer"],
      description: "Set content of a paste buffer",
      // TODO add other options
      options: [
        {
          name: "-t",
          description: "The target client",
          args: clientsArg,
        },
      ],
    },
    {
      name: ["setenv", "set-environment"],
      description: "(Un)set an environment variable",
    },
    {
      name: "set-hook",
      description: "Set a hook to a command",
    },
    {
      name: ["set", "set-option"],
      description: "Set a session option",
    },
    {
      name: ["setw", "set-window-option"],
      description: "Set a window option",
    },
    {
      name: ["showb", "show-buffer"],
      description: "Display the contents of a paste buffer",
    },
    {
      name: ["showenv", "show-environment"],
      description: "Display the environment",
      options: [
        {
          name: "-t",
          description: "Displat the environment of the target-session",
          args: sessionsArg,
        },
      ],
    },
    {
      name: "show-hooks",
      description: "Show the global list of hooks",
    },
    {
      name: ["showmsgs", "show-messages"],
      description: "Show client's message log",
      options: [
        {
          name: "-T",
          description: "Show debugging information about terminals",
        },
        {
          name: "-J",
          description: "Show debugging information about jobs",
        },
        {
          name: "-t",
          description: "The target client",
          args: clientsArg,
        },
      ],
    },
    {
      name: ["show", "show-options"],
      description: "Show session options",
    },
    {
      name: ["showw", "show-winsow-options"],
      description: "Show window options",
    },
    {
      name: ["source", "source-file"],
      description: "Execute tmux commands from a file",
    },
    {
      name: ["splitw", "split-window"],
      description: "Splits a pane into two",
    },
    {
      name: ["start", "start-server"],
      description: "Start a tmux server",
    },
    {
      name: ["suspendc", "suspend-client"],
      description: "Suspend a client",
      options: [
        {
          name: "-t",
          description: "The target client",
          args: clientsArg,
        },
      ],
    },
    {
      name: ["swapp", "swap-pane"],
      description: "Swap two panes",
    },
    {
      name: ["swapw", "swap-window"],
      description: "Swap two windows",
    },
    {
      name: ["switchc", "switch-client"],
      description: "Switch the client to another session",
      options: [
        {
          name: "-t",
          description: "Switch the client to the target-session",
          args: sessionsArg,
        },
        {
          name: "-c",
          description: "The target client",
          args: clientsArg,
        },
      ],
    },
    {
      name: ["unbind", "unbind-key"],
      description: "Unbind a key",
    },
    {
      name: ["unlinkw", "unlink-window"],
      description: "Unlink a window",
    },
    {
      name: ["wait", "wait-for"],
      description: "Wait for an event or trigger it",
    },
  ],
};
