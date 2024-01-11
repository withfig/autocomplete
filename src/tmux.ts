const lsArg = (name: string, command: string): Fig.Arg => ({
  name,
  generators: {
    script: ["tmux", command],
    postProcess: (out) => {
      return out.split("\n").map((line) => {
        const content = line.split(":");

        return {
          name: content[0],
          description: content[1],
        };
      });
    },
  },
});

const sessionsArg = lsArg("target-session", "ls");
const clientsArg = lsArg("target-client", "lsc");
const panesArg = lsArg("src-pane", "lsp");
const windowsArg = lsArg("window-name", "lsw");
const buffersArg = lsArg("buffer-name", "lsb");

const formatOption: Fig.Option = {
  name: "-F",
  description: "Format output",
  args: {
    name: "format",
    description: "The format for the output of this command",
  },
};

const flagsOption: Fig.Option = {
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
};

const completionSpec: Fig.Spec = {
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
        flagsOption,
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
      args: [
        {
          name: "key",
          description: "The key to bind",
        },
        {
          name: "command",
          description: "The command to bind to the key",
        },
        {
          name: "arguments",
          description: "Arguments for the command",
          isVariadic: true,
          isOptional: true,
        },
      ],
      options: [
        {
          name: "-n",
          description: "Alias for -T root",
        },
        {
          name: "-r",
          description: "Indicate that this key may repeat",
        },
        {
          name: "-N",
          description: "Attach a note to the key",
          args: {
            name: "note",
          },
        },
        {
          name: "-T",
          description: "The key table to use",
          args: {
            name: "key-table",
          },
        },
      ],
    },
    {
      name: ["breakp", "break-pane"],
      description: "Break a pane from an exiting into a new window",
      options: [
        {
          name: "-a",
          description: "Move the window to the next index after",
        },
        {
          name: "-b",
          description: "Move the window to the next index before",
        },
        {
          name: "-d",
          description: "The new windows does not become the current window",
        },
        {
          name: "-P",
          description: "Print information about the new window",
        },
        formatOption,
        {
          name: "-n",
          description: "The target window",
          args: windowsArg,
        },
        {
          name: "-s",
          description: "The source pane",
          args: panesArg,
        },
        {
          name: "-t",
          description: "The destination window",
          args: windowsArg,
        },
      ],
    },
    {
      name: ["capturep", "capture-pane"],
      description: "Capture the contents of a pane to a buffer",
      options: [
        {
          name: "-a",
          description: "Use the alternate screen and history is not accessible",
        },
        {
          name: "-e",
          description:
            "Include escape sequences for text and background attributes",
        },
        {
          name: "-p",
          description: "Redirect output to stdout",
        },
        {
          name: "-P",
          description:
            "Capture only outputs that is the beginning of an as-yet incomplete escape sequence",
        },
        {
          name: "-q",
          description: "Do not throw an error if not alternate screen is found",
        },
        {
          name: "-C",
          description: "Escape non-printable characters as octal",
        },
        {
          name: "-J",
          description: "Preserve trailing spaces and join any wrapped lines",
        },
        {
          name: "-N",
          description: "Preserve trailing spaces at each line's end",
        },
        {
          name: "-b",
          description: "The buffer name",
          args: buffersArg,
        },
        {
          name: "-E",
          description: "Ending line number",
          args: {
            name: "end-line",
          },
        },
        {
          name: "-S",
          description: "Starting line number",
          args: {
            name: "start-line",
          },
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
      ],
    },
    {
      name: "choose-buffer",
      description: "Put a pane into buffer choice mode",
      args: {
        name: "template",
        isOptional: true,
        default: "paste-buffer -b '%%'",
      },
      options: [
        {
          name: "-N",
          description: "Start without the preview",
        },
        {
          name: "-Z",
          description: "Zoom the pane",
        },
        {
          name: "-r",
          description: "Reverse the sort order",
        },
        formatOption,
        {
          name: "-f",
          description: "Specify an initial filter",
          args: {
            name: "filter",
          },
        },
        {
          name: "-O",
          description: "Specify the sort order",
          args: {
            name: "sort-order",
            suggestions: ["time", "name", "size"],
          },
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
      ],
    },
    {
      name: "choose-client",
      description: "Put a pane into buffer client mode",
      args: {
        name: "template",
        isOptional: true,
        default: "detach-client -t '%%'",
      },
      options: [
        {
          name: "-N",
          description: "Start without the preview",
        },
        {
          name: "-r",
          description: "Reserve the sort order",
        },
        {
          name: "-Z",
          description: "Zoom the pane",
        },
        formatOption,
        {
          name: "-f",
          description: "Specify an initial filter",
          args: {
            name: "filter",
          },
        },
        {
          name: "-O",
          description: "Specify the initial sort field",
          args: {
            name: "sort",
            suggestions: ["name", "size", "creation", "activity"],
          },
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
      ],
    },
    {
      name: "choose-tree",
      description: "Put a pane into buffer tree mode",
      args: {
        name: "template",
        isOptional: true,
        default: "switch-client -t '%%'",
      },
      options: [
        {
          name: "-G",
          description: "Include all sessions in any session group in the tree",
        },
        {
          name: "-N",
          description: "Start without the preview",
        },
        {
          name: "-r",
          description: "Reserve the sort order",
        },
        {
          name: "-s",
          description: "Start with sessions collapsed",
        },
        {
          name: "-w",
          description: "Start with windows collapsed",
        },
        {
          name: "-Z",
          description: "Zoom the pane",
        },
        formatOption,
        {
          name: "-f",
          description: "Specify an initial filter",
          args: {
            name: "filter",
          },
        },
        {
          name: "-O",
          description: "Specify the initial sort field",
          args: {
            name: "sort",
            suggestions: ["name", "size", "creation", "activity"],
          },
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
      ],
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
      args: {
        name: "template",
        description: "If specified, used as a command",
        isOptional: true,
      },
      options: [
        {
          name: "-l",
          description: "The prompt only accept one key press",
        },
        {
          name: "-i",
          description:
            "Execute the command every time the prompt input changes",
        },
        {
          name: "-k",
          description: "Like -l but the key press is translated to a key name",
        },
        {
          name: "-N",
          description: "The prompt only accept numeric key press",
        },
        {
          name: "-T",
          description: "Tell that the prompt is for a target",
        },
        {
          name: "-W",
          description: "Tell that the prompt is for a window",
        },
        {
          name: "-I",
          description:
            "Comma-separated list of the initial text for each prompt",
          args: {
            name: "inputs",
          },
        },
        {
          name: "-p",
          description:
            "Comma-separated list of prompts which are displayed in order",
          args: {
            name: "prompts",
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
      name: ["confirm", "confirm-before"],
      description: "Run a command but ask for confirmation before",
      args: {
        name: "command",
        description: "The command to run",
        isVariadic: true,
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
      description: "Enter copy mode",
      options: [
        {
          name: "-e",
          description: "Scrolling to the bottom should exit copy mode",
        },
        {
          name: "-H",
          description: "Hide the position indicator",
        },
        {
          name: "-M",
          description: "Begin a mouse drag",
        },
        {
          name: "-q",
          description: "Cancel copy mode and any other modes",
        },
        {
          name: "-u",
          description: "Scroll one page up",
        },
        {
          name: "-s",
          description: "The source pane",
          args: panesArg,
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
      ],
    },
    {
      name: ["deleteb", "delete-buffer"],
      description: "Delete a paste buffer",
      options: [
        {
          name: "-b",
          description: "The target buffer",
          args: buffersArg,
        },
      ],
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
      args: [
        {
          name: "name",
          description: "The name of the menu",
        },
        {
          name: "key",
          description: "The key to press to open the menu",
        },
        {
          name: "command",
          description: "Commands to execute",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: "-O",
          description:
            "Do not close the menu when the mouse button is released",
        },
        {
          name: "-c",
          description: "The target client",
          args: clientsArg,
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
        {
          name: "-T",
          description: "Specify a title",
          args: {
            name: "title",
          },
        },
        {
          name: "-x",
          description: "Give the x position of the menu",
          args: {
            name: "position",
          },
        },
        {
          name: "-y",
          description: "Give the y position of the menu",
          args: {
            name: "position",
          },
        },
      ],
    },
    {
      name: ["display", "display-message"],
      description: "Display a message in the status line",
      args: {
        name: "message",
        description: "The message to display",
        isOptional: true,
      },
      options: [
        {
          name: "-a",
          description: "List the format variables and their values",
        },
        {
          name: "-I",
          description:
            "Forward any input read from stdin to the empty pane target-pane",
        },
        {
          name: "-p",
          description: "Print output to stdout",
        },
        {
          name: "-v",
          description: "Print verbose logging as the format is parsed",
          args: clientsArg,
        },
        {
          name: "-d",
          description: "A delay for the message",
          args: {
            name: "delay",
          },
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
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
      args: {
        name: "match-string",
        description: "A string to search for",
      },
      options: [
        {
          name: "-i",
          description: "Make the search ignore cases",
        },
        {
          name: "-C",
          description: "Match only visible window contents",
        },
        {
          name: "-N",
          description: "Match only the window name",
        },
        {
          name: "-r",
          description: "Search a regular expression",
        },
        {
          name: "-T",
          description: "Match only the window's title",
        },
        {
          name: "-Z",
          description: "Zoom the pane",
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
      ],
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
      name: ["joinp", "join-pane", "movep", "move-pane"],
      description: "Split a pane and move an existing one into the new space",
      options: [
        {
          name: "-b",
          description: "Src-pane will be joined to left of or above dst-pane",
          args: panesArg,
        },
        {
          name: "-l",
          description: "Set the size of the new space",
          args: {
            name: "size",
            description: "The size of the new space",
          },
        },
        {
          name: "-s",
          description: "The source pane",
          args: panesArg,
        },
        {
          name: "-t",
          description: "The destination pane",
          args: panesArg,
        },
      ],
    },
    {
      name: ["killp", "kill-pane"],
      description: "Destroy a given pane",
      options: [
        {
          name: "-a",
          description: "Kill all but the target-pane",
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
      ],
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
        {
          name: "-C",
          description:
            "Clear alerts (bell, activity, or silence) in all windows linked to the session",
        },
      ],
    },
    {
      name: ["killw", "kill-window"],
      description: "Destroy a given window",
      options: [
        {
          name: "-a",
          description: "Kill all but the target-window",
        },
        {
          name: "-t",
          description: "The target window",
          args: windowsArg,
        },
      ],
    },
    {
      name: ["lastp", "last-pane"],
      description: "Select the previously selected pane",
      options: [
        {
          name: "-d",
          description: "Disable input to the pane",
        },
        {
          name: "-e",
          description: "Enable input to the pane",
        },
        {
          name: "-Z",
          description: "Keep the window zoomed if it was zoomed",
        },
        {
          name: "-t",
          description: "The target window",
          args: windowsArg,
        },
      ],
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
      options: [
        {
          name: "-a",
          description: "Move the window to the next index after dst-window",
        },
        {
          name: "-b",
          description: "Move the window to the next index before dst-window",
        },
        {
          name: "-d",
          description: "Do not select the newly linked window",
        },
        {
          name: "-k",
          description: "Kill dst-window if exist",
        },
        {
          name: "-s",
          description: "The source window",
          args: windowsArg,
        },
        {
          name: "-t",
          description: "The destination window",
          args: windowsArg,
        },
      ],
    },
    {
      name: ["lsb", "list-buffers"],
      description: "List paste buffers of a session",
    },
    {
      name: ["lsc", "list-clients"],
      description: "List clients attached to a server",
      options: [
        formatOption,
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
      args: {
        name: "command",
        description: "The command to list syntax of",
        isOptional: true,
      },
      options: [formatOption],
    },
    {
      name: ["lsk", "list-keys"],
      description: "List all key-bindings",
    },
    {
      name: ["lsp", "list-panes"],
      description: "List panes of a window",
      options: [
        {
          name: "-a",
          description: "Ignore target-window and list all panes",
        },
        {
          name: "-s",
          description: "Target-window becomes a session",
        },
        formatOption,
        {
          name: "-f",
          description: "Specify a filter",
          args: {
            name: "filter",
          },
        },
        {
          name: "-t",
          description: "The target window",
          args: windowsArg,
        },
      ],
    },
    {
      name: ["ls", "list-sessions"],
      description: "List sessions managed by a server",
      options: [
        formatOption,
        {
          name: "-f",
          description: "Filter the sessions",
          args: {
            name: "filter",
          },
        },
      ],
    },
    {
      name: ["lsw", "list-windows"],
      description: "List windows of a session",
      options: [
        {
          name: "-a",
          description: "Ignore target-session and list all windows",
        },
        formatOption,
        {
          name: "-f",
          description: "Specify a filter",
          args: {
            name: "filter",
          },
        },
        {
          name: "-t",
          description: "The target session",
          args: sessionsArg,
        },
      ],
    },
    {
      name: ["loadb", "load-buffer"],
      description: "Load a file into a paste buffer",
      args: {
        name: "path",
        description: "Load from this path",
      },
      options: [
        {
          name: "-w",
          description: "Send the buffer to the clipboard",
        },
        {
          name: "-b",
          description: "The target buffer",
          args: buffersArg,
        },
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
      name: ["movew", "move-window"],
      description: "Move a window to another",
      options: [
        {
          name: "-a",
          description: "Move the window to the next index after dst-window",
        },
        {
          name: "-b",
          description: "Move the window to the next index before dst-window",
        },
        {
          name: "-r",
          description:
            "Renumber all windows in the session in sequential order",
        },
        {
          name: "-d",
          description: "Do not select the newly linked window",
        },
        {
          name: "-k",
          description: "Kill dst-window if exist",
        },
        {
          name: "-s",
          description: "The source window",
          args: windowsArg,
        },
        {
          name: "-t",
          description: "The destination window",
          args: windowsArg,
        },
      ],
    },
    {
      name: ["new", "new-session"],
      description: "Create a new session",
      args: {
        name: "shell-command",
        description: "A shell command to run when creating the session",
      },
      options: [
        {
          name: "-A",
          description:
            "Behave like attach-session if session-name already exist",
        },
        {
          name: "-d",
          description: "Use the initial size from default-size",
        },
        {
          name: "-D",
          description: "Behave like -d if -A is set",
        },
        {
          name: "-E",
          description: "Do not use update-environment option",
        },
        {
          name: "-P",
          description: "Print information about the new session",
        },
        {
          name: "-X",
          description: "Behave like -x if -A is set",
        },
        {
          name: "-c",
          description: "Specify a start directory for the session",
          args: {
            name: "start-directory",
            description: "The start directory",
            template: "folders",
          },
        },
        {
          name: "-e",
          description: "Set environment variables",
          args: {
            name: "environment",
            description: "Environment variables with the form VARIABLE=VALUE",
          },
        },
        flagsOption,
        formatOption,
        {
          name: "-n",
          description: "Start a new session with the given name",
          args: {
            name: "window-name",
          },
        },
        {
          name: "-s",
          description: "Start a new session with the given name",
          args: {
            name: "session-name",
          },
        },
        {
          name: "-t",
          description: "The name of the group",
          args: {
            name: "group-name",
          },
        },
        {
          name: "-x",
          description: "The width of the session",
          args: {
            name: "width",
          },
        },
        {
          name: "-y",
          description: "The height of the session",
          args: {
            name: "height",
          },
        },
      ],
    },
    {
      name: ["neww", "new-window"],
      description: "Create a new window",
      args: {
        name: "shell-command",
        description: "A shell command to run when creating the window",
      },
      options: [
        {
          name: "-a",
          description:
            "Insert the new window at the next index after target-window",
        },
        {
          name: "-b",
          description:
            "Insert the new window at the next index before target-window",
        },
        {
          name: "-d",
          description:
            "The session does not make the new window the current window",
        },
        {
          name: "-k",
          description: "Kill the target-window if exist",
        },
        {
          name: "-P",
          description: "Print information about the new window",
        },
        {
          name: "-S",
          description: "Select window-name if exist",
        },
        {
          name: "-c",
          description: "Specify a start directory for the window",
          args: {
            name: "start-directory",
            description: "The start directory",
            template: "folders",
          },
        },
        {
          name: "-e",
          description: "Set environment variables",
          args: {
            name: "environment",
            description: "Environment variables with the form VARIABLE=VALUE",
          },
        },
        formatOption,
        {
          name: "-n",
          description: "Start a new window with the given name",
          args: {
            name: "window-name",
          },
        },
        {
          name: "-t",
          description: "The target window",
          args: windowsArg,
        },
      ],
    },
    {
      name: ["nextl", "next-layout"],
      description: "Move a window to the next layout",
      options: [
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
      ],
    },
    {
      name: ["next", "next-window"],
      description: "Move to the next window in a session",
      options: [
        {
          name: "-a",
          description: "Move to the next window with an alert",
        },
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
      args: {
        name: "shell-command",
        description: "The shell-command to run",
        isOptional: true,
      },
      options: [
        {
          name: "-I",
          description: "Connect stdout to shell-command",
        },
        {
          name: "-O",
          description: "Connect stdin to shell-command",
        },
        {
          name: "-o",
          description: "Only open a new pipe if no previous pipe exists",
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
      ],
    },
    {
      name: ["prevl", "previous-layout"],
      description: "Move a window to the previous layout",
      options: [
        {
          name: "-t",
          description: "The target window",
          args: windowsArg,
        },
      ],
    },
    {
      name: ["prev", "previous-window"],
      description: "Move to the previous window in a session",
      options: [
        {
          name: "-a",
          description: "Move with an alert",
        },
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
      args: {
        name: "adjustment",
        description: "An adjustment value to use",
        isOptional: true,
      },
      options: [
        {
          name: "-c",
          description: "Return the tracking cursor",
        },
        {
          name: "-D",
          description: "Allow the visible portion of a window to be changed",
        },
        {
          name: "-l",
          description: "Request the clipboard from the client",
        },
        {
          name: "-L",
          description: "Allow the visible portion of a window to be changed",
        },
        {
          name: "-R",
          description: "Allow the visible portion of a window to be changed",
        },
        {
          name: "-S",
          description: "Only update the client's status line",
        },
        {
          name: "-U",
          description: "Allow the visible portion of a window to be changed",
        },
        {
          name: "-A",
          description: "The target pane",
          args: panesArg,
        },
        {
          name: "-B",
          description: "A subscription to a format for a control mode",
          args: {
            name: "subscription",
          },
        },
        {
          name: "-C",
          description: "Set the width and height",
          args: {
            name: "XxY",
          },
        },
        flagsOption,
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
      args: {
        name: "new-name",
        description: "The new name of the window",
      },
      options: [
        {
          name: "-t",
          description: "The target window",
          args: windowsArg,
        },
      ],
    },
    {
      name: ["resizep", "resize-pane"],
      description: "Resize a pane",
      args: {
        name: "adjustment",
        description: "Adjustment used with -ULDR",
      },
      options: [
        {
          name: "-D",
          description: "Resize down by adjustment",
        },
        {
          name: "-L",
          description: "Resize left by adjustment",
        },
        {
          name: "-M",
          description: "Begin mouse resizing",
        },
        {
          name: "-R",
          description: "Resize right by adjustment",
        },
        {
          name: "-T",
          description: "Trim all lines below the current cursor position",
        },
        {
          name: "-U",
          description: "Resize up by adjustment",
        },
        {
          name: "-Z",
          description: "Toggle the active pane between zoomed and unzoomed",
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
        {
          name: "-x",
          description: "The width of the pane",
          args: {
            name: "width",
          },
        },
        {
          name: "-y",
          description: "The height of the pane",
          args: {
            name: "height",
          },
        },
      ],
    },
    {
      name: ["resizew", "resize-window"],
      description: "Resize a window",
      args: {
        name: "adjustment",
        description: "Adjustment used with -ULDR",
      },
      options: [
        {
          name: "-a",
          description:
            "Set the size of the smallest session containing the window",
        },
        {
          name: "-A",
          description:
            "Set the size of the largest session containing the window",
        },
        {
          name: "-D",
          description: "Resize down by adjustment",
        },
        {
          name: "-L",
          description: "Resize left by adjustment",
        },
        {
          name: "-R",
          description: "Resize right by adjustment",
        },
        {
          name: "-U",
          description: "Resize up by adjustment",
        },
        {
          name: "-t",
          description: "The target window",
          args: windowsArg,
        },
        {
          name: "-x",
          description: "The width of the pane",
          args: {
            name: "width",
          },
        },
        {
          name: "-y",
          description: "The height of the pane",
          args: {
            name: "height",
          },
        },
      ],
    },
    {
      name: ["respawnp", "respawn-pane"],
      description: "Reactivate a pane in which a command has exited",
      args: {
        name: "shell-command",
        description: "A shell command to run when creating the pane",
        isOptional: true,
      },
      options: [
        {
          name: "-k",
          description: "Kill the target-pane if exist",
        },
        {
          name: "-c",
          description: "Specify a start directory for the pane",
          args: {
            name: "start-directory",
            description: "The start directory",
            template: "folders",
          },
        },
        {
          name: "-e",
          description: "Set environment variables",
          args: {
            name: "environment",
            description: "Environment variables with the form VARIABLE=VALUE",
          },
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
      ],
    },
    {
      name: ["respawnw", "respawn-window"],
      description: "Reactivate a window in which a command has exited",
      args: {
        name: "shell-command",
        description: "A shell command to run when creating the window",
        isOptional: true,
      },
      options: [
        {
          name: "-k",
          description: "Kill the target-window if exist",
        },
        {
          name: "-c",
          description: "Specify a start directory for the window",
          args: {
            name: "start-directory",
            description: "The start directory",
            template: "folders",
          },
        },
        {
          name: "-e",
          description: "Set environment variables",
          args: {
            name: "environment",
            description: "Environment variables with the form VARIABLE=VALUE",
          },
        },
        {
          name: "-t",
          description: "The target window",
          args: windowsArg,
        },
      ],
    },
    {
      name: ["rotatew", "rotate-window"],
      description: "Rotate positions of panes in a window",
      options: [
        {
          name: "-D",
          description: "Rotate upward",
        },
        {
          name: "-U",
          description: "Rotate downward",
        },
        {
          name: "-Z",
          description: "Keep the window zoomed if it was zoomed",
        },
        {
          name: "-t",
          description: "The target window",
          args: windowsArg,
        },
      ],
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
      args: {
        name: "layout-name",
        description: "Use the last preset layout used if not specified",
        isOptional: true,
      },
      options: [
        {
          name: "-E",
          description:
            "Spread the current pane and any panes next to it evenly",
        },
        {
          name: "-n",
          description: "Equivalent to next-layout",
        },
        {
          name: "-o",
          description: "Apply the last set layout if possible",
        },
        {
          name: "-p",
          description: "Equivalent to previous-layout",
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
      ],
    },
    {
      name: ["selectp", "select-pane"],
      description: "Make a pane the active one in the window",
      options: [
        {
          name: "-D",
          description: "Use the down pane",
        },
        {
          name: "-d",
          description: "Disable input to the pane",
        },
        {
          name: "-e",
          description: "Enable input to the pane",
        },
        {
          name: "-L",
          description: "Use the left pane",
        },
        {
          name: "-l",
          description: "Same as last-pane command",
        },
        {
          name: "-M",
          description: "Clear the marked pane",
        },
        {
          name: "-m",
          description: "Set the market pane",
        },
        {
          name: "-R",
          description: "Use the right pane",
        },
        {
          name: "-U",
          description: "Use the up pane",
        },
        {
          name: "-Z",
          description: "Set the pane's title",
        },
        {
          name: "-T",
          description: "Set the pane title",
          args: {
            name: "title",
          },
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
      ],
    },
    {
      name: ["selectw", "select-window"],
      description: "Select a window",
      options: [
        {
          name: "-l",
          description: "Same as last-window",
        },
        {
          name: "-n",
          description: "Same as next-window",
        },
        {
          name: "-p",
          description: "Same as previous-window",
        },
        {
          name: "-T",
          description:
            "Same as last-window if the selected window is already the current window",
        },
        {
          name: "-t",
          description: "The target window",
          args: windowsArg,
        },
      ],
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
      description: "Show every session, window, pane, etc",
    },
    {
      name: ["setb", "set-buffer"],
      description: "Set content of a paste buffer",
      args: {
        name: "data",
        description: "The data to set in the buffer",
      },
      options: [
        {
          name: "-a",
          description: "Append to rather than overwriting the buffer",
        },
        {
          name: "-w",
          description: "Send the buffer to the clipboard",
        },
        {
          name: "-b",
          description: "The name of the buffer",
          args: buffersArg,
        },
        {
          name: "-t",
          description: "The target client",
          args: clientsArg,
        },
        {
          name: "-n",
          description: "The new name of the buffer",
          args: {
            name: "new-buffer-name",
          },
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
          description: "Display the environment of the target-session",
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
      args: {
        name: "path",
        isVariadic: true,
      },
      options: [
        {
          name: "-F",
          description: "Expand path as a format",
        },
        {
          name: "-n",
          description: "Parse the file but don't run commands",
        },
        {
          name: "-q",
          description: "Don't return any error if path does not exist",
        },
        {
          name: "-v",
          description: "Show the parsed command and line numbers if possible",
        },
      ],
    },
    {
      name: ["splitw", "split-window"],
      description: "Splits a pane into two",
      args: {
        name: "shell-command",
        description: "A shell command to run when creating the pane",
        isOptional: true,
      },
      options: [
        {
          name: "-b",
          description:
            "Create the new pane to the left of or above target-pane",
        },
        {
          name: "-f",
          description:
            "Create a new pane spanning the full window height with -h or width with -v",
        },
        {
          name: "-h",
          description: "Set the pane take full height",
        },
        {
          name: "-I",
          description: "Create an empty pane and forward stdin to it",
        },
        {
          name: "-v",
          description: "Set the pane take full width",
        },
        {
          name: "-Z",
          description: "Zoom if the window is not zoomed",
        },
        {
          name: "-c",
          description: "Specify a start directory for the pane",
          args: {
            name: "start-directory",
            description: "The start directory",
            template: "folders",
          },
        },
        {
          name: "-e",
          description: "Set environment variables",
          args: {
            name: "environment",
            description: "Environment variables with the form VARIABLE=VALUE",
          },
        },
        {
          name: "-l",
          description:
            "Set the size in columns (horizontal split) or rows (vertical split)",
          args: {
            name: "size",
          },
        },
        {
          name: "-t",
          description: "The target pane",
          args: panesArg,
        },
        formatOption,
      ],
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
      options: [
        {
          name: "-d",
          description: "Do not change the active pane",
        },
        {
          name: "-D",
          description: "Swap with the next pane",
        },
        {
          name: "-U",
          description: "Swap dst-pane with the previous pane",
        },
        {
          name: "-Z",
          description: "Keep the window zoomed if it was zoomed",
        },
        {
          name: "-s",
          description: "The source pane",
          args: panesArg,
        },
        {
          name: "-t",
          description: "The destination pane",
          args: panesArg,
        },
      ],
    },
    {
      name: ["swapw", "swap-window"],
      description: "Swap two windows",
      options: [
        {
          name: "-d",
          description: "The new window does not become the current window",
        },
        {
          name: "-s",
          description: "The source window",
          args: windowsArg,
        },
        {
          name: "-t",
          description: "The destination window",
          args: windowsArg,
        },
      ],
    },
    {
      name: ["switchc", "switch-client"],
      description: "Switch the client to another session",
      options: [
        {
          name: "-E",
          description: "Do not use update-environment option",
        },
        {
          name: "-l",
          description: "Move the client to the last session",
        },
        {
          name: "-n",
          description: "Move the client to the next session",
        },
        {
          name: "-p",
          description: "Move the client to the previous session",
        },
        {
          name: "-r",
          description: "Toggle the client read-only and ignore-size flags",
        },
        {
          name: "-Z",
          description: "Keep the window zoomed if it was zoomed",
        },
        {
          name: "-c",
          description: "The target client",
          args: clientsArg,
        },
        {
          name: "-t",
          description: "Switch the client to the target-session",
          args: sessionsArg,
        },
        {
          name: "-T",
          description: "Set the client's key table",
          args: {
            name: "key-table",
          },
        },
      ],
    },
    {
      name: ["unbind", "unbind-key"],
      description: "Unbind a key",
      args: {
        name: "key",
        description: "The key to unbind",
      },
      options: [
        {
          name: "-a",
          description: "Remove all key-bindings",
        },
        {
          name: "-n",
          description: "Alias for -T root",
        },
        {
          name: "-q",
          description: "Prevent errors being returned",
        },
        {
          name: "-T",
          description: "The key table to use",
          args: {
            name: "key-table",
          },
        },
      ],
    },
    {
      name: ["unlinkw", "unlink-window"],
      description: "Unlink a window",
      options: [
        {
          name: "-k",
          description: "Destroy the window",
        },
        {
          name: "-t",
          description: "The target window",
          args: windowsArg,
        },
      ],
    },
    {
      name: ["wait", "wait-for"],
      description: "Wait for an event or trigger it",
      args: {
        name: "channel",
        description: "Wait for this channel",
      },
      options: [
        {
          name: "-L",
          description: "Lock the channel",
          exclusiveOn: ["-U"],
        },
        {
          name: "-U",
          description: "Unlock the channel",
          exclusiveOn: ["-L"],
        },
      ],
    },
  ],
  additionalSuggestions: [
    {
      name: "new -s 'name'",
      description: "Create a new session shortcut",
      insertValue: "new -s '{cursor}'",
      icon: "fig://template?color=2ecc71&badge=🔥",
      // type: "shortcut",
    },
  ],
};

export default completionSpec;
