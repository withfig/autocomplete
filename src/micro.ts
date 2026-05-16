const boolArgDefaultFalse: Fig.Arg = {
  name: "bool",
  description: "True/false",
  default: "false",
  suggestions: ["true", "false"],
};

const boolArgDefaultTrue: Fig.Arg = {
  name: "bool",
  description: "True/false",
  default: "true",
  suggestions: ["true", "false"],
};

const completionSpec: Fig.Spec = {
  name: "micro",
  description: "A modern and intuitive terminal-based text editor",
  subcommands: [
    {
      name: "--plugin",
      description: "Manage plugins",
      options: [
        {
          name: "remove",
          description: "Remove plugin(s)",
          args: {
            name: "plugin",
            isVariadic: true,
          },
        },
        {
          name: "update",
          description:
            "Update plugin(s) (if no argument is given, updates all plugins)",
          args: {
            name: "plugin",
            isVariadic: true,
          },
        },
        {
          name: "search",
          description: "Search for a plugin",
          args: {
            name: "plugin",
          },
        },
        {
          name: "list",
          description: "List installed plugins",
        },
        {
          name: "available",
          description: "List available plugins",
        },
      ],
    },
  ],
  options: [
    {
      name: "--clean",
      description: "Cleans the configuration directory",
    },
    {
      name: "--config-dir",
      description: "Specify a custom location for the configuration directory",
      args: {
        name: "dir",
      },
    },
    {
      name: "--options",
      description: "Show all option help",
    },
    {
      name: "--debug",
      description: "Enable debug mode",
    },
    {
      name: "--version",
      description: "Show the version number and information",
    },
    {
      name: "--autoindent",
      description:
        "When creating a new line, use the same indentation as the previous line",
      args: boolArgDefaultTrue,
    },
    {
      name: "--autosave",
      description:
        "Automatically save the buffer every <n> seconds. If set to 0, no autosaving is performed",
      args: {
        name: "n",
        description: "Seconds",
        default: "0",
        suggestions: ["0", "60", "120", "300", "600", "1800"],
      },
    },
    {
      name: "--autosu",
      description:
        "Automatically attempt to use super user privileges to save without asking",
      args: boolArgDefaultFalse,
    },
    {
      name: "--backup",
      description: "Automatically keep backups of all open buffers",
      args: boolArgDefaultTrue,
    },
    {
      name: "--backupdir",
      description: "The directory to place backups in",
      args: {
        name: "dir",
        default: "~/.config/micro.backups",
        template: "folders",
        suggestions: ["~/.config/micro.backups"],
      },
    },
    {
      name: "--basename",
      description:
        "In the infobar and tabbar, show only the basename of the file being edited rather than the full path",
      args: boolArgDefaultFalse,
    },
    {
      name: "--clipboard",
      description: "Apecifies how the system clipboard should be accessed",
      args: {
        name: "type",
        default: "external",
        suggestions: [
          {
            name: "external",
            description:
              "Accesses clipboard via an external tool, such as xclip/xsel or wl-clipboard on Linux, pbcopy/pbpaste on MacOS, and system calls on Windows",
          },
          {
            name: "terminal",
            description: "Accesses the clipboard via your terminal emulator",
          },
          {
            name: "internal",
            description: "Uses an internal clipboard",
          },
        ],
      },
    },
    {
      name: "--colorcolumn",
      description: "Display a color at the specified column if not set to 0",
      args: {
        name: "value",
        default: "0",
        suggestions: ["0", "1"],
      },
    },
    {
      name: "--colorscheme",
      description:
        "Loads the colorscheme stored in $(configDir)/colorschemes/<scheme>.micro",
      args: {
        name: "scheme",
        default: "default",
        suggestions: ["default"],
      },
    },
    {
      name: "--cursorline",
      description:
        "Highlight the line that the cursor is on in a different color",
      args: boolArgDefaultTrue,
    },
    {
      name: "--diffgutter",
      description: "Display diff indicators before lines",
      args: boolArgDefaultFalse,
    },
    {
      name: "--divchars",
      description:
        "Specifies the divider characters used for the dividing line between vertical/horizontal splits (the first character is for vertical dividers, and the second is for horizontal dividers)",
      args: {
        name: "chars",
        default: "|-",
        suggestions: ["|-"],
      },
    },
    {
      name: "--divreverse",
      description: "Reverse colors specified by the colorscheme",
      args: boolArgDefaultFalse,
    },
    {
      name: "--encoding",
      description: "The encoding to open and save files with",
      args: {
        name: "encoding",
        default: "utf-8",
        suggestions: ["utf-8"], // https://encoding.spec.whatwg.org/#encodings
      },
    },
    {
      name: "--eofnewline",
      description:
        "Automatically add a newline to the end of the file if one does not exist",
      args: boolArgDefaultTrue,
    },
    {
      name: "--fastdirty",
      description:
        "Use 'fast dirty' algorithm to determine if a buffer is modified or not",
      args: boolArgDefaultFalse,
    },
    {
      name: "--fileformat",
      description: "Type of line endings to be used for the file",
      args: {
        name: "format",
        default: "unix",
        suggestions: ["unix", "dos"],
      },
    },
    {
      name: "--filetype",
      description: "File type for the current buffer",
      args: {
        name: "type",
        default: "unknown",
        suggestions: [
          {
            name: "unknown",
            description:
              "Automatically overridden depending on type of file opened",
          },
          {
            name: "off",
            description: "Disable file type detection",
          },
        ],
      },
    },
    {
      name: "--ignorecase",
      description: "Perform case-insensitive searches",
      args: boolArgDefaultTrue,
    },
    {
      name: "--incsearch",
      description: 'Enable incremental search in "Find" prompt',
      args: boolArgDefaultTrue,
    },
    {
      name: "--indentchar",
      description: "Sets the indentation character",
      args: {
        name: "character",
        default: " ",
        suggestions: [
          {
            name: " ",
            displayName: "space",
          },
          {
            name: "\\t",
            displayName: "tab",
          },
        ],
      },
    },
    {
      name: "--infobar",
      description:
        "Enables the line at the bottom of the editor where messages are printed",
      args: boolArgDefaultTrue,
    },
    {
      name: "--keepautoindent",
      description:
        "Remove trailing whitespace from a line with no insertions when moving to the next line",
      args: boolArgDefaultFalse,
    },
    {
      name: "--keymenu",
      description:
        "Display the nano-style key menu at the bottom of the screen",
      args: boolArgDefaultFalse,
    },
    {
      name: "--matchbrace",
      description:
        "Underline matching braces for '()', '{}', '[]' when the cursor is on a brace character",
      args: boolArgDefaultTrue,
    },
    {
      name: "--mkparents",
      description:
        "Allow parent directories to be created automatically when opening a file on a path that doesn't exist",
      args: boolArgDefaultFalse,
    },
    {
      name: "--mouse",
      description: "Enable mouse support",
      args: boolArgDefaultTrue,
    },
    {
      name: "--paste",
      description:
        "Treat characters sent from the terminal in a single chunk as a paste event rather than a series of manual key presses",
      args: boolArgDefaultFalse,
    },
    {
      name: "--parsecursor",
      description:
        "Parse filenames such as file.txt:10:5 as requesting to open file.txt with the cursor at line 10 and column 5",
      args: boolArgDefaultFalse,
    },
    {
      name: "--permbackup",
      description: "Cause backups to be permanently saved",
      args: boolArgDefaultFalse,
    },
    {
      name: "--pluginchannels",
      description:
        "List of URLs pointing to plugin channels for downloading and installing plugins",
      args: {
        name: "url",
        isVariadic: true,
        default:
          "https://raw.githubusercontent.com/micro-editor/plugin-channel/master/channel.json",
        suggestions: [
          "https://raw.githubusercontent.com/micro-editor/plugin-channel/master/channel.json",
        ],
      },
    },
    {
      name: "--pluginrepos",
      description: "A list of links to plugin repositories",
      args: {
        name: "link",
        isVariadic: true,
        default: "",
      },
    },
    {
      name: "--readonly",
      description: "Disallow edits to the buffer",
      args: boolArgDefaultFalse,
    },
    {
      name: "--relativeruler",
      description: "Make line numbers display relatively",
      args: boolArgDefaultFalse,
    },
    {
      name: "--rmtrailingws",
      description: "Automatically trim trailing whitespaces at ends of lines",
      args: boolArgDefaultFalse,
    },
    {
      name: "--ruler",
      description: "Display line numbers",
      args: boolArgDefaultTrue,
    },
    {
      name: "--savecursor",
      description:
        "Remember where the cursor was last time the file was opened and put it there when re-opened",
      args: boolArgDefaultFalse,
    },
    {
      name: "--savehistory",
      description:
        "Remember command history between closing and re-opening micro",
      args: boolArgDefaultTrue,
    },
    {
      name: "--saveundo",
      description: "Remember undo state between closing and re-opening a file",
      args: boolArgDefaultFalse,
    },
    {
      name: "--scrollbar",
      description: "Display a scroll bar",
      args: boolArgDefaultFalse,
    },
    {
      name: "--scrollmargin",
      description:
        "Margin at which the view starts scrolling when the cursor approaches the edge of the view",
      args: {
        name: "margin",
        default: "3",
        suggestions: ["0", "1", "2", "3", "5", "10"],
      },
    },
    {
      name: "--scrollspeed",
      description: "Number of lines to scroll for one scroll event",
      args: {
        name: "number",
        default: "2",
        suggestions: ["1", "2", "3", "4", "5"],
      },
    },
    {
      name: "--smartpaste",
      description: "Add leading whitespace when pasting multiple lines",
      args: boolArgDefaultTrue,
    },
    {
      name: "--softwrap",
      description: "Wrap lines that are too long to fit on the screen",
      args: boolArgDefaultFalse,
    },
    {
      name: "--splitbottom",
      description:
        "When a horizontal split is created, create it below the current split",
      args: boolArgDefaultTrue,
    },
    {
      name: "--splitright",
      description:
        "When a vertical split is created, create it to the right of the current split",
      args: boolArgDefaultTrue,
    },
    {
      name: "--statusformatl",
      description:
        "Format string definition for the left-justified part of the statusline",
      args: {
        name: "format",
      },
    },
    {
      name: "--statusformatr",
      description:
        "Format string definition for the right-justified part of the statusline",
      args: {
        name: "format",
      },
    },
    {
      name: "--statusline",
      description: "Display the status line at the bottom of the screen",
      args: boolArgDefaultTrue,
    },
    {
      name: "--sucmd",
      description: "The super user command",
      args: {
        name: "command",
        default: "sudo",
        suggestions: ["sudo", "doas"],
      },
    },
    {
      name: "--syntax",
      description: "Enables syntax highlighting",
      args: boolArgDefaultTrue,
    },
    {
      name: "--tabmovement",
      description:
        "Navigate spaces at the beginning of lines as if they are tabs",
      args: boolArgDefaultFalse,
    },
    {
      name: "--tabsize",
      description:
        "The size in spaces that a tab character should be displayed with",
      args: {
        name: "size",
        default: "4",
        suggestions: ["2", "4", "8", "16"],
      },
    },
    {
      name: "--tabstospaces",
      description: "Use spaces instead of tabs",
      args: boolArgDefaultFalse,
    },
    {
      name: "--useprimary",
      description:
        "Use the primary clipboard to copy selections in the background",
      args: boolArgDefaultTrue,
    },
    {
      name: "--wordwrap",
      description: "Wrap long lines by words",
      args: boolArgDefaultFalse,
    },
    {
      name: "--xterm",
      description:
        "Assume that the terminal conforms to xterm-256color regardless of what the $TERM variable actually contains",
      args: boolArgDefaultFalse,
    },
  ],
  args: {
    name: "file",
    template: ["filepaths"],

    isOptional: true,
  },
};
export default completionSpec;
