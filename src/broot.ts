const completionSpec: Fig.Spec = {
  name: "broot",
  description:
    "Broot lets you explore file hierarchies with a tree-like view, manipulate files, launch actions, and define your own shortcuts. broot is best launched as br: this shell function gives you access to more commands, especially cd. The br shell function is interactively installed on first broot launch. Flags and options can be classically passed on launch but also written in the configuration file. Each flag has a counter-flag so that you can cancel at command line a flag which has been set in the configuration file",
  options: [
    {
      name: ["--dates", "-d"],
      description: "Show the last modified date of files and directories",
      exclusiveOn: ["--no-dates", "-D"],
    },
    {
      name: ["--no-dates", "-D"],
      description: "Don't show the last modified date",
      exclusiveOn: ["--dates", "-d"],
    },
    {
      name: ["--only-folders", "-f"],
      description: "Only show folders",
      exclusiveOn: ["--no-only-folders", "-F"],
    },
    {
      name: ["--no-only-folders", "-F"],
      description: "Show folders and files alike",
      exclusiveOn: ["--only-folders", "-f"],
    },
    {
      name: "--show-root-fs",
      description: "Show filesystem info on top",
    },
    {
      name: ["--show-git-info", "-g"],
      description: "Show git statuses on files and stats of repository",
      exclusiveOn: ["--no-show-git-info", "-G"],
    },
    {
      name: ["--no-show-git-info", "-G"],
      description: "Don't show git statuses on files nor stats",
      exclusiveOn: ["--show-git-info", "-g"],
    },
    {
      name: "--git-status",
      description:
        "Only show files having an interesting git status, including hidden ones",
    },
    {
      name: ["--hidden", "-h"],
      description: "Show hidden files",
      exclusiveOn: ["--no-hidden", "-H"],
    },
    {
      name: ["--no-hidden", "-H"],
      description: "Don't show hidden files",
      exclusiveOn: ["--hidden", "-h"],
    },
    {
      name: ["--show-gitignored", "-i"],
      description: "Show files which should be ignored according to git",
      exclusiveOn: ["--no-show-gitignored", "-I"],
    },
    {
      name: ["--no-show-gitignored", "-I"],
      description: "Don't show gitignored files",
      exclusiveOn: ["--show-gitignored", "-i"],
    },
    {
      name: ["--permissions", "-p"],
      description: "Show permissions with owner and group",
      exclusiveOn: ["--no-permissions", "-P"],
    },
    {
      name: ["--no-permissions", "-P"],
      description: "Don't show permissions",
      exclusiveOn: ["--permissions", "-p"],
    },
    {
      name: ["--sizes", "-s"],
      description:
        "Show the sizes of files and directories. When this mode is on, children aren't shown so that the biggest entries at the selected level can be sorted first",
      exclusiveOn: ["--no-sizes", "-S"],
    },
    {
      name: ["--no-sizes", "-S"],
      description: "Don't show sizes",
      exclusiveOn: ["--sizes", "-s"],
    },
    {
      name: "--sort-by-count",
      description: "Sort by count (only show one level of the tree)",
      exclusiveOn: ["--no-sort"],
    },
    {
      name: "--sort-by-date",
      description: "Sort by date (only show one level of the tree)",
      exclusiveOn: ["--no-sort"],
    },
    {
      name: "--sort-by-size",
      description: "Sort by size (only show one level of the tree)",
      exclusiveOn: ["--no-sort"],
    },
    {
      name: ["--whale-spotting", "-w"],
      description: "Sort by size, show ignored and hidden files",
    },
    {
      name: "--no-sort",
      description: "Don't sort",
      exclusiveOn: ["--sort-by-count", "--sort-by-date", "--sort-by-size"],
    },
    {
      name: ["--trim-root", "-t"],
      description:
        "Trim the root: remove elements which would exceed the screen size. This removes the scrollbar",
      exclusiveOn: ["--no-trim-root", "-T"],
    },
    {
      name: ["--no-trim-root", "-T"],
      description:
        "Don't trim the root (still trim the deeper levels). A scrollbar may be used when there are too many elements to show on screen",
      exclusiveOn: ["--trim-root", "-t"],
    },
    {
      name: "--install",
      description: "Install or reinstall the br shell function",
    },
    {
      name: "--get-root",
      description: "Ask for the current root of the remote broot",
    },
    {
      name: "--color",
      description:
        "Controls styling of the output (default: auto). If set to auto, all styling is removed when output is piped",
      args: {
        suggestions: ["yes", "no", "auto"],
        isOptional: true,
      },
    },
    {
      name: "--help",
      description:
        "Prints a help page, with more or less the same content as this man page",
    },
    {
      name: ["--version", "-v"],
      description: "Prints the version of broot",
    },
    {
      name: "--outcmd",
      description: "Where to write a command if broot produces one",
      args: {
        name: "cmd-export-path",
      },
    },
    {
      name: ["--cmd", "-c"],
      description: "Semicolon separated commands to execute on start of broot",
      args: {
        name: "commands",
      },
    },
    {
      name: "--conf",
      description: "Semicolon separated paths to specific config files",
      args: {
        name: "conf",
      },
    },
    {
      name: "--height",
      description:
        "Height to use if you don't want to fill the screen or for file export (by default the terminal height is used)",
      args: {
        name: "height",
      },
    },
    {
      name: ["--out", "-o"],
      description: "Where to write the produced path, if any",
      args: {
        name: "file-export-path",
        template: "filepaths",
        suggestCurrentToken: true,
      },
    },
    {
      name: "--set-install-state",
      description:
        "Set the installation state. This is mostly useful in installation scripts to override the normal installation process",
      args: {
        name: "state",
        suggestions: ["undefined", "refused", "installed"],
      },
    },
    {
      name: "--print-shell-function",
      description:
        "Print to stdout the br function for the given shell. This can be used in your own installation process overriden the standard one",
      args: {
        name: "shell",
        suggestions: ["bash", "fish", "zsh"],
      },
    },
    {
      name: "--listen",
      description: "Listen for commands",
      args: {
        name: "listen",
      },
    },
    {
      name: "--send",
      description: "Send commands to a remote broot then quits",
      args: {
        name: "send",
      },
    },
  ],
  args: {
    name: "ROOT",
    description: "Sets the root directory",
  },
};
export default completionSpec;
