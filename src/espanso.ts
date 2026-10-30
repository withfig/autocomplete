const completionSpec: Fig.Spec = {
  name: "espanso",
  description: "A Privacy-first, Cross-platform Text Expander",
  options: [
    {
      name: ["-v", "--version"],
      description: "Print version information and exit",
    },
    {
      name: "--config_dir",
      description: "Specify a custom path for the config directory",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--package_dir",
      description: "Specify a custom path for the packages directory",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--runtime_dir",
      description: "Specify a custom path for the runtime directory",
      args: { name: "dir", template: "folders" },
    },
  ],
  subcommands: [
    {
      name: "env-path",
      description: "Add or remove the 'espanso' command from the PATH",
      subcommands: [
        { name: "register", description: "Add 'espanso' command to PATH" },
        {
          name: "unregister",
          description: "Remove 'espanso' command from PATH",
        },
      ],
      options: [
        {
          name: "--prompt",
          description: "Prompt for confirmation before modifying the PATH",
        },
      ],
    },
    {
      name: "cmd",
      description: "Send a command to the espanso daemon",
      subcommands: [
        { name: "enable", description: "Enable expansions" },
        { name: "disable", description: "Disable expansions" },
        { name: "toggle", description: "Enable/Disable expansions" },
        { name: "search", description: "Open the Espanso's search bar" },
      ],
    },
    {
      name: "edit",
      description:
        "Shortcut to open the default text editor to edit config files",
      args: {
        name: "target_file",
        template: "filepaths",
        isOptional: true,
      },
    },
    {
      name: "daemon",
      description: "Start the daemon without spawning a new process",
    },
    { name: "log", description: "Print the daemon logs" },
    {
      name: "stats",
      description: "Show expansion statistics",
      subcommands: [
        { name: "clear", description: "Clear the stats database" },
        {
          name: "prune",
          description: "Delete records older than N days",
          options: [
            {
              name: "--days",
              description: "Delete records older than the given number of days",
              args: { name: "days" },
            },
          ],
        },
      ],
      options: [
        {
          name: "--period",
          description: "Compute the statistics over the given period",
          args: { name: "period" },
        },
        {
          name: "--count",
          description: "Print the number of expansions instead of the details",
        },
        { name: "--json", description: "Print the statistics in JSON format" },
        {
          name: "--grep",
          description: "Filter matches with the given string",
          args: { name: "grep" },
        },
      ],
    },
    {
      name: "modulo",
      description: "Display espanso modulo GUI elements",
      subcommands: [
        {
          name: "form",
          description: "Display a customizable form",
          args: { name: "input_file", template: "filepaths", isOptional: true },
          options: [
            {
              name: "--json",
              description: "Read the form definition from stdin as JSON",
            },
          ],
        },
        {
          name: "search",
          description: "Display a search box",
          args: { name: "input_file", template: "filepaths", isOptional: true },
          options: [
            {
              name: "--json",
              description: "Read the search definition from stdin as JSON",
            },
          ],
        },
        {
          name: "textview",
          description: "Display a Text View",
          args: { name: "input_file", template: "filepaths", isOptional: true },
          options: [
            {
              name: "--title",
              description: "Set the title of the text view",
              args: { name: "title" },
            },
          ],
        },
        {
          name: "troubleshoot",
          description: "Display the troubleshooting GUI",
        },
        {
          name: "welcome",
          description: "Display the welcome screen",
          options: [
            {
              name: "--already-running",
              description: "Skip checks for an already running instance",
            },
          ],
        },
      ],
    },
    {
      name: "path",
      description:
        "Prints all the espanso directory paths to easily locate configuration and matches",
      subcommands: [
        { name: "config", description: "Print the current config folder path" },
        {
          name: "packages",
          description: "Print the current packages folder path",
        },
        { name: "data", description: "Print the current data folder path" },
        {
          name: "runtime",
          description: "Print the current runtime folder path",
        },
        {
          name: "default",
          description: "Print the default configuration file path",
        },
        { name: "base", description: "Print the default match file path" },
      ],
    },
    {
      name: "service",
      description:
        "A collection of commands to manage the Espanso service (for example, enabling auto-start on system boot)",
      subcommands: [
        {
          name: "register",
          description: "Register espanso as a system service",
        },
        {
          name: "unregister",
          description: "Unregister espanso from system services",
        },
        {
          name: "check",
          description: "Check if espanso is registered as a system service",
        },
        {
          name: "start",
          description: "Start espanso as a service",
          options: [
            {
              name: "--unmanaged",
              description: "Start espanso without registering a system service",
            },
          ],
        },
        {
          name: "restart",
          description: "Restart the espanso service",
          options: [
            {
              name: "--unmanaged",
              description:
                "Restart espanso without registering a system service",
            },
          ],
        },
        { name: "stop", description: "Stop espanso service" },
        {
          name: "status",
          description: "Check if the espanso daemon is running or not",
        },
      ],
    },
    {
      name: "match",
      description: "List and execute matches from the CLI",
      subcommands: [
        {
          name: "list",
          description: "Print matches to standard output",
          options: [
            { name: "--json", description: "Print the matches in JSON format" },
            {
              name: "--only-triggers",
              description: "Print only the triggers of the matches",
            },
            {
              name: "--preserve-newlines",
              description: "Preserve newlines when printing matches",
            },
            {
              name: "--class",
              description: "Filter matches by the given app class",
              args: { name: "class" },
            },
            {
              name: "--title",
              description: "Filter matches by the given window title",
              args: { name: "title" },
            },
          ],
        },
        {
          name: "exec",
          description: "Triggers the expansion of a match",
          options: [
            {
              name: "--trigger",
              description: "Trigger the match with the given trigger",
              args: { name: "trigger" },
            },
            {
              name: "--arg",
              description: "Assign a value to a match argument",
              args: { name: "name=value" },
            },
          ],
        },
      ],
    },
    {
      name: "package",
      description: "Package-management commands",
      subcommands: [
        {
          name: "install",
          description: "Install a package",
          args: { name: "package_name" },
          options: [
            {
              name: "--external",
              description:
                "Allow installing packages from external repositories",
            },
            {
              name: "--version",
              description: "Install a specific version of the package",
              args: { name: "version" },
            },
            {
              name: "--git",
              description: "Install the package from the given git repository",
              args: { name: "url" },
            },
            {
              name: "--git-branch",
              description: "Install the package from the given git branch",
              args: { name: "branch" },
            },
            {
              name: "--force",
              description: "Overwrite the package if already installed",
            },
            {
              name: "--refresh-index",
              description: "Refresh the package index",
            },
            {
              name: "--use-native-git",
              description:
                "Use the system git binary instead of the embedded one",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Remove a package",
          args: { name: "package_name" },
        },
        {
          name: "update",
          description: "Update a package to the latest version",
          args: { name: "package_name" },
        },
        { name: "list", description: "List all installed packages" },
      ],
    },
    {
      name: "workaround",
      description: "A collection of workarounds to solve some common problems",
      subcommands: [
        {
          name: "secure-input",
          description:
            "Attempt to disable secure input by automating the common steps",
        },
      ],
    },
    {
      name: "worker",
      description:
        "Internal command to run the espanso worker process (used internally by the daemon)",
      options: [
        {
          name: "--start-reason",
          description: "Register the reason why the worker was started",
          args: { name: "reason" },
        },
        {
          name: "--monitor-daemon",
          description: "Shut down the worker if the daemon is not running",
        },
      ],
    },
  ],
};

export default completionSpec;
