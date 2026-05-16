import {
  settingsSpecGenerator,
  subsystemsGenerator,
  themesGenerator,
  pluginsGenerator,
  tokensGenerators,
  invitationsGenerators,
  membersGenerators,
  teamsGenerators,
  scriptsSpecGenerator,
  sshHostsGenerator,
  sshIdentityGenerator,
  userGenerator,
} from "./shared";

const completion: Fig.Subcommand = {
  name: "fig",
  description: "The CLI for Fig",
  subcommands: [
    {
      name: "app",
      description: "Interact with the desktop app",
      subcommands: [
        {
          name: "install",
          description: "Install the Fig app",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "onboarding",
          description: "Run the Fig tutorial again",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "running",
          description: "Check if Fig is running",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "launch",
          description: "Launch the Fig desktop app",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "restart",
          description: "Restart the Fig desktop app",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "quit",
          description: "Quit the Fig desktop app",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "set-path",
          description: "Set the internal psudo-terminal path",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstall the Fig app",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "prompts",
          description: "Prompts shown on terminal startup",
          options: [
            {
              name: "--version",
              description: "Print version information",
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
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "hook",
      description: "Hook commands",
      hidden: true,
      subcommands: [
        {
          name: "editbuffer",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "session-id",
            },
            {
              name: "integration",
            },
            {
              name: "tty",
            },
            {
              name: "pid",
            },
            {
              name: "histno",
            },
            {
              name: "cursor",
            },
            {
              name: "text",
            },
          ],
        },
        {
          name: "event",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "event-name",
          },
        },
        {
          name: "hide",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "init",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "pid",
            },
            {
              name: "tty",
            },
          ],
        },
        {
          name: "integration-ready",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "integration",
          },
        },
        {
          name: "keyboard-focus-changed",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "app-identifier",
            },
            {
              name: "focused-session-id",
            },
          ],
        },
        {
          name: "pre-exec",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "pid",
            },
            {
              name: "tty",
            },
          ],
        },
        {
          name: "prompt",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "pid",
            },
            {
              name: "tty",
            },
          ],
        },
        {
          name: "ssh",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: "--prompt",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "pid",
            },
            {
              name: "tty",
            },
            {
              name: "control-path",
            },
            {
              name: "remote-dest",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "debug",
      description: "Debug Fig",
      subcommands: [
        {
          name: "app",
          description: "Debug fig app",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "build",
          description: "Switch build",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "build",
            suggestions: ["dev", "prod", "staging"],
          },
        },
        {
          name: "autocomplete-window",
          description: "Toggle/set autocomplete window debug mode",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "mode",
            isOptional: true,
            suggestions: ["on", "off"],
          },
        },
        {
          name: "logs",
          description: "Show fig debug logs",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "files",
            isOptional: true,
            generators: subsystemsGenerator,
          },
        },
        {
          name: "ime",
          description: "Fig input method editor",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "command",
            suggestions: [
              "install",
              "uninstall",
              "select",
              "deselect",
              "enable",
              "disable",
              "status",
              "register",
            ],
          },
        },
        {
          name: "prompt-accessibility",
          description: "Prompt accessibility",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "sample",
          description: "Sample fig process",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "unix-socket",
          description: "Debug fig unix sockets",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "verify-codesign",
          description: "Debug fig codesign verification",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "shell-integrations",
          description: "Toggle shell integrations",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "mode",
            isOptional: true,
            suggestions: ["on", "off"],
          },
        },
        {
          name: "accessibility",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "action",
            isOptional: true,
            suggestions: ["refresh", "reset", "prompt", "open", "status"],
          },
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "settings",
      description: "Customize appearance & behavior",
      filterStrategy: "fuzzy",
      subcommands: [
        {
          name: "init",
          description: "Reload the settings listener",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "docs",
          description: "Get the settings documentation",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "open",
          description: "Open the settings file",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "sync",
          description: "Sync the current settings",
          options: [
            {
              name: "--version",
              description: "Print version information",
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
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: ["-d", "--delete"],
          description: "Delete",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "key",
          isOptional: true,
        },
        {
          name: "value",
          isOptional: true,
        },
      ],
      generateSpec: settingsSpecGenerator,
    },
    {
      name: "tips",
      description: "Enable/disable fig tips",
      subcommands: [
        {
          name: "enable",
          description: "Enable fig tips",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "disable",
          description: "Disable fig tips",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "reset",
          description: "Reset the tips to the default",
          hidden: true,
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "prompt",
          description: "Show the tips",
          hidden: true,
          options: [
            {
              name: "--version",
              description: "Print version information",
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
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "install",
      description: "Install fig cli components",
      options: [
        {
          name: "--daemon",
          description: "Install only the daemon",
          exclusiveOn: ["--dotfiles"],
        },
        {
          name: "--dotfiles",
          description: "Install only the shell integrations",
        },
        {
          name: "--no-confirm",
          description: "Don't confirm automatic installation",
        },
        {
          name: "--force",
          description: "Force installation of fig",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall fig",
      hidden: true,
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "update",
      description: "Update dotfiles",
      options: [
        {
          name: ["-y", "--no-confirm"],
          description: "Force update",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "daemon",
      description: "Run the daemon",
      hidden: true,
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "diagnostic",
      description: "Run diagnostic tests",
      options: [
        {
          name: ["-f", "--format"],
          description: "The format of the output",
          args: {
            name: "format",
            isOptional: true,
            suggestions: [
              {
                name: "plain",
                description: "Outputs the results as markdown",
              },
              {
                name: "json",
                description: "Outputs the results as JSON",
              },
            ],
          },
        },
        {
          name: "--force",
          description: "Force limited diagnostic output",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "init",
      description: "Generate the dotfiles for the given shell",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "shell",
          suggestions: [
            {
              name: "bash",
              description: "Bash shell",
            },
            {
              name: "zsh",
              description: "Zsh shell",
            },
            {
              name: "fish",
              description: "Fish shell",
            },
          ],
        },
        {
          name: "when",
          suggestions: ["pre", "post"],
        },
      ],
      hidden: true,
    },
    {
      name: "source",
      description: "Sync your latest dotfiles",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "theme",
      description: "Get or set theme",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "theme",
        isOptional: true,
        generators: themesGenerator,
      },
    },
    {
      name: "invite",
      description: "Invite friends to Fig",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "tweet",
      description: "Tweet about Fig",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      icon: "fig://icon?type=twitter",
    },
    {
      name: "issue",
      description: "Create a new Github issue",
      options: [
        {
          name: ["-f", "--force"],
          description: "Force issue creation",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "description",
        isOptional: true,
      },
      icon: "fig://icon?type=github",
    },
    {
      name: "login",
      description: "Login to Fig",
      options: [
        {
          name: ["-r", "--refresh"],
          description: "Manually refresh the auth token",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "logout",
      description: "Logout of Fig",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "user",
      description: "Details about the current user",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "doctor",
      description: "Check Fig is properly configured",
      options: [
        {
          name: "--verbose",
          description: "Run all doctor tests, with no fixes",
        },
        {
          name: "--strict",
          description: "Error on warnings",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the completion spec for Fig",
      hidden: true,
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "shell",
        isOptional: true,
        suggestions: [
          {
            name: "bash",
            description: "Bash shell compleations",
          },
          {
            name: "fish",
            description: "Fish shell completions",
          },
          {
            name: "zsh",
            description: "Zsh shell completions",
          },
          {
            name: "fig",
            description: "Fig completion spec",
          },
        ],
      },
    },
    {
      name: ["internal", "_"],
      description: "Internal subcommands used for Fig",
      hidden: true,
      subcommands: [
        {
          name: "prompt-dotfiles-changed",
          description:
            "Prompt the user that the dotfiles have changes Also use for `fig source` internals",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "local-state",
          description: "Change the local-state file",
          subcommands: [
            {
              name: "init",
              description: "Reload the state listener",
              options: [
                {
                  name: "--help",
                  description: "Print help information",
                },
                {
                  name: "--version",
                  description: "Print version information",
                },
              ],
            },
            {
              name: "open",
              description: "Open the state file",
              options: [
                {
                  name: "--help",
                  description: "Print help information",
                },
                {
                  name: "--version",
                  description: "Print version information",
                },
              ],
            },
          ],
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-d", "--delete"],
              description: "Delete the state",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "key",
              isOptional: true,
            },
            {
              name: "value",
              isOptional: true,
            },
          ],
        },
        {
          name: "callback",
          description: "Callback used for the internal psudoterminal",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "handler-id",
            },
            {
              name: "filename",
              isOptional: true,
            },
            {
              name: "exit-code",
              isOptional: true,
            },
          ],
        },
        {
          name: "install",
          description: "Install fig cli",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: "--daemon",
              description: "Install only the daemon",
              exclusiveOn: ["--dotfiles"],
            },
            {
              name: "--dotfiles",
              description: "Install only the shell integrations",
            },
            {
              name: "--no-confirm",
              description: "Don't confirm automatic installation",
            },
            {
              name: "--force",
              description: "Force installation of fig",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstall fig cli",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: "--daemon",
              description: "Uninstall only the daemon",
            },
            {
              name: "--dotfiles",
              description: "Uninstall only the shell integrations",
            },
            {
              name: "--binary",
              description: "Uninstall only the binary",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "warn-user-when-uninstalling-incorrectly",
          description: "Notify the user that they are uninstalling incorrectly",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "animation",
          options: [
            {
              name: ["-f", "--filename"],
              args: {
                name: "filename",
                isOptional: true,
              },
            },
            {
              name: ["-r", "--rate"],
              args: {
                name: "rate",
                isOptional: true,
              },
            },
            {
              name: ["-b", "--before-text"],
              args: {
                name: "before-text",
                isOptional: true,
              },
            },
            {
              name: ["-a", "--after-text"],
              args: {
                name: "after-text",
                isOptional: true,
              },
            },
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "get-shell",
          options: [
            {
              name: "--version",
              description: "Print version information",
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
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "launch",
      description: "Launch the Fig desktop app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "quit",
      description: "Quit the Fig desktop app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "restart",
      description: "Restart the Fig desktop app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "process",
        isOptional: true,
        suggestions: [
          {
            name: "daemon",
            description: "Daemon process",
          },
          {
            name: "app",
            description: "Fig process",
          },
        ],
      },
    },
    {
      name: "alpha",
      description: "(LEGACY) Old way to launch mission control",
      hidden: true,
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "onboarding",
      description: "Run the Fig tutorial",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "plugins",
      subcommands: [
        {
          name: "sync",
          description:
            "Sync the current plugins (this will not update plugins that are already installed)",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "update",
          description: "Update the installed plugins",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "add",
          description: "Install a specific plugin from the plugin store",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "plugin",
            generators: pluginsGenerator({ installed: false }),
          },
        },
        {
          name: "remove",
          description: "Uninstall a specific plugin",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "plugin",
            generators: pluginsGenerator({ installed: true }),
          },
        },
        {
          name: "list",
          description: "List all plugins available in the plugin store",
          options: [
            {
              name: ["-f", "--format"],
              description: "The output format",
              args: {
                name: "format",
                isOptional: true,
                suggestions: [
                  {
                    name: "plain",
                    description: "Outputs the results as markdown",
                  },
                  {
                    name: "json",
                    description: "Outputs the results as JSON",
                  },
                ],
              },
            },
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-i", "--installed"],
              description: "Only list plugins that are installed",
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
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "app:running",
      description: "(LEGACY) Old hook that was being used somewhere",
      hidden: true,
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "bg:ssh",
      description: "(LEGACY) Old ssh hook that might be in ~/.ssh/config",
      hidden: true,
      options: [
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
      name: ["-h", "--help"],
      description: "Print help information",
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
  ],
};

const versions: Fig.VersionDiffMap = {};

versions["1.3.0"] = {};

versions["1.3.1"] = {
  subcommands: [
    {
      name: "debug",
      subcommands: [
        {
          name: "shell-integrations",
          remove: true,
        },
      ],
    },
    {
      name: "settings",
      subcommands: [
        {
          name: "all",
          description: "List all the settings",
          options: [
            {
              name: ["-f", "--format"],
              description: "Format of the output",
              args: {
                name: "format",
                isOptional: true,
                suggestions: [
                  {
                    name: "plain",
                    description: "Outputs the results as markdown",
                  },
                  {
                    name: "json",
                    description: "Outputs the results as JSON",
                  },
                  {
                    name: "json-pretty",
                    description: "Outputs the results as pretty print JSON",
                  },
                ],
              },
            },
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-r", "--remote"],
              description: "List the remote settings",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-f", "--format"],
          description: "Format of the output",
          args: {
            name: "format",
            isOptional: true,
            suggestions: [
              {
                name: "plain",
                description: "Outputs the results as markdown",
              },
              {
                name: "json",
                description: "Outputs the results as JSON",
              },
              {
                name: "json-pretty",
                description: "Outputs the results as pretty print JSON",
              },
            ],
          },
        },
        {
          name: ["-d", "--delete"],
          description: "Delete a value",
        },
      ],
    },
    {
      name: "install",
      options: [
        {
          name: "--daemon",
          exclusiveOn: ["--input-method"],
        },
        {
          name: "--dotfiles",
          exclusiveOn: ["--input-method"],
        },
        {
          name: "--input-method",
          description: "Prompt input method installation",
          exclusiveOn: ["--daemon", "--dotfiles"],
        },
        {
          name: "--ssh",
          description: "Install only the ssh integration",
        },
      ],
    },
    {
      name: "ssh",
      description: "Enable/disable fig SSH integration",
      subcommands: [
        {
          name: "enable",
          description: "Enable ssh integration",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "disable",
          description: "Disable ssh integration",
          options: [
            {
              name: "--version",
              description: "Print version information",
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
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "diagnostic",
      options: [
        {
          name: ["-f", "--format"],
          args: {
            suggestions: [
              {
                name: "plain",
                description: "Outputs the results as markdown",
              },
              {
                name: "json",
                description: "Outputs the results as JSON",
              },
              {
                name: "json-pretty",
                description: "Outputs the results as pretty print JSON",
              },
            ],
          },
        },
      ],
    },
    {
      name: "init",
      options: [
        {
          name: "--rcfile",
          args: {
            name: "rcfile",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: ["internal", "_"],
      subcommands: [
        {
          name: "local-state",
          subcommands: [
            {
              name: "all",
              description: "List all the settings",
              options: [
                {
                  name: ["-f", "--format"],
                  args: {
                    name: "format",
                    isOptional: true,
                    suggestions: [
                      {
                        name: "plain",
                        description: "Outputs the results as markdown",
                      },
                      {
                        name: "json",
                        description: "Outputs the results as JSON",
                      },
                      {
                        name: "json-pretty",
                        description: "Outputs the results as pretty print JSON",
                      },
                    ],
                  },
                },
                {
                  name: "--help",
                  description: "Print help information",
                },
                {
                  name: "--version",
                  description: "Print version information",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-f", "--format"],
              description: "Format of the output",
              args: {
                name: "format",
                isOptional: true,
                suggestions: [
                  {
                    name: "plain",
                    description: "Outputs the results as markdown",
                  },
                  {
                    name: "json",
                    description: "Outputs the results as JSON",
                  },
                  {
                    name: "json-pretty",
                    description: "Outputs the results as pretty print JSON",
                  },
                ],
              },
            },
          ],
        },
        {
          name: "install",
          options: [
            {
              name: "--daemon",
              exclusiveOn: ["--input-method"],
            },
            {
              name: "--dotfiles",
              exclusiveOn: ["--input-method"],
            },
            {
              name: "--input-method",
              description: "Prompt input method installation",
              exclusiveOn: ["--daemon", "--dotfiles"],
            },
            {
              name: "--ssh",
              description: "Install only the ssh integration",
            },
          ],
        },
        {
          name: "uninstall",
          options: [
            {
              name: "--ssh",
              description: "Uninstall only the ssh integration",
            },
          ],
        },
      ],
    },
    {
      name: "plugins",
      subcommands: [
        {
          name: "list",
          options: [
            {
              name: ["-f", "--format"],
              args: {
                suggestions: [
                  {
                    name: "plain",
                    description: "Outputs the results as markdown",
                  },
                  {
                    name: "json",
                    description: "Outputs the results as JSON",
                  },
                  {
                    name: "json-pretty",
                    description: "Outputs the results as pretty print JSON",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: "man",
      description: "Open manual page",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "command",
        isOptional: true,
      },
    },
  ],
};

versions["1.4.0"] = {
  subcommands: [
    {
      name: "app",
      subcommands: [
        {
          name: "uninstall",
          options: [
            {
              name: "--user-data",
              description: "Remove configuration and data files",
            },
            {
              name: "--app-bundle",
              description: "Remove executable and",
            },
            {
              name: "--input-method",
              description: "Remove input method",
            },
            {
              name: "--terminal-integrations",
              description:
                "Remove terminal integrations (i.e. VSCode, iTerm2, etc.)",
            },
            {
              name: "--daemon",
              description: "Remove Fig daemon",
            },
            {
              name: "--dotfiles",
              description: "Remove dotfile shell integration",
            },
            {
              name: "--ssh",
              description: "Remove SSH integration",
            },
            {
              name: "--no-open",
              description: "Do not open the uninstallation page",
            },
          ],
        },
      ],
    },
    {
      name: "debug",
      subcommands: [
        {
          name: "dotfiles",
          description: "Debug dotfiles",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: "--disable",
              description: "Disable debug mode",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
      ],
    },
    {
      name: "user",
      subcommands: [
        {
          name: "login",
          description: "Login to Fig",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-r", "--refresh"],
              description: "Manually refresh the auth token",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "logout",
          description: "Logout of Fig",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "whoami",
          options: [
            {
              name: ["-f", "--format"],
              description: "Output format to use",
              args: {
                name: "format",
                isOptional: true,
                suggestions: [
                  {
                    name: "plain",
                    description: "Outputs the results as markdown",
                  },
                  {
                    name: "json",
                    description: "Outputs the results as JSON",
                  },
                  {
                    name: "json-pretty",
                    description: "Outputs the results as pretty print JSON",
                  },
                ],
              },
            },
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-e", "--only-email"],
              description:
                "Only print the user's email address, this is quicker since it doesn't require a network request",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "tokens",
          subcommands: [
            {
              name: "new",
              options: [
                {
                  name: "--expires-date",
                  description:
                    "The expiration date of the token in RFC3339 format",
                  exclusiveOn: ["--expires-in"],
                  args: {
                    name: "expires-date",
                    isOptional: true,
                  },
                },
                {
                  name: "--expires-in",
                  description: 'The time till the token expires (e.g. "90d")',
                  exclusiveOn: ["--expires-date"],
                  args: {
                    name: "expires-in",
                    isOptional: true,
                  },
                },
                {
                  name: ["-t", "--team"],
                  description: "The team namespace to create the token for",
                  args: {
                    name: "team",
                    generators: teamsGenerators,
                  },
                },
                {
                  name: "--help",
                  description: "Print help information",
                },
                {
                  name: "--version",
                  description: "Print version information",
                },
              ],
              args: {
                name: "name",
              },
            },
            {
              name: "list",
              options: [
                {
                  name: ["-t", "--team"],
                  description: "The team namespace to list the tokens for",
                  exclusiveOn: ["-p", "--personal"],
                  args: {
                    name: "team",
                    generators: teamsGenerators,
                  },
                },
                {
                  name: ["-f", "--format"],
                  args: {
                    name: "format",
                    isOptional: true,
                    suggestions: [
                      {
                        name: "plain",
                        description: "Outputs the results as markdown",
                      },
                      {
                        name: "json",
                        description: "Outputs the results as JSON",
                      },
                      {
                        name: "json-pretty",
                        description: "Outputs the results as pretty print JSON",
                      },
                    ],
                  },
                },
                {
                  name: "--help",
                  description: "Print help information",
                },
                {
                  name: "--version",
                  description: "Print version information",
                },
                {
                  name: ["-p", "--personal"],
                  description: "Only list tokens owned by the current user",
                  exclusiveOn: ["-t", "--team"],
                },
              ],
            },
            {
              name: "revoke",
              options: [
                {
                  name: ["-t", "--team"],
                  description: "The team namespace to revoke the token for",
                  args: {
                    name: "team",
                    generators: teamsGenerators,
                  },
                },
                {
                  name: "--help",
                  description: "Print help information",
                },
                {
                  name: "--version",
                  description: "Print version information",
                },
              ],
              args: {
                name: "name",
                generators: tokensGenerators,
              },
            },
          ],
          options: [
            {
              name: "--version",
              description: "Print version information",
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
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "team",
      args: {
        name: "team",
        generators: teamsGenerators,
        isOptional: true,
        loadSpec: {
          name: "team",
          subcommands: [
            {
              name: "members",
              description: "List all members on a team",
              options: [
                {
                  name: "--version",
                  description: "Print version information",
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a member from a team",
              options: [
                {
                  name: "--version",
                  description: "Print version information",
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
              args: {
                name: "email",
                generators: membersGenerators,
              },
            },
            {
              name: "add",
              description: "Invite a member to a team",
              options: [
                {
                  name: "--role",
                  args: {
                    name: "role",
                    isOptional: true,
                    suggestions: ["owner", "admin", "member"],
                  },
                },
                {
                  name: "--version",
                  description: "Print version information",
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
              args: {
                name: "email",
              },
            },
            {
              name: "invitations",
              description: "List pending invitations to a team",
              options: [
                {
                  name: "--version",
                  description: "Print version information",
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "revoke",
              description: "Revoke an invitation to a team",
              options: [
                {
                  name: "--version",
                  description: "Print version information",
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
              args: {
                name: "email",
                generators: invitationsGenerators,
              },
            },
            {
              name: "help",
              description:
                "Print this message or the help of the given subcommand(s)",
              options: [
                {
                  name: "--version",
                  description: "Print version information",
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
              args: {
                name: "subcommand",
                isOptional: true,
              },
            },
          ],
        },
      },
      options: [
        {
          name: ["-f", "--format"],
          args: {
            name: "format",
            isOptional: true,
            suggestions: [
              {
                name: "plain",
                description: "Outputs the results as markdown",
              },
              {
                name: "json",
                description: "Outputs the results as JSON",
              },
              {
                name: "json-pretty",
                description: "Outputs the results as pretty print JSON",
              },
            ],
          },
        },
        {
          name: "--list",
          exclusiveOn: ["--new", "--delete"],
        },
        {
          name: "--new",
          exclusiveOn: ["--list", "--delete"],
        },
        {
          name: "--delete",
          exclusiveOn: ["--list", "--new"],
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: ["internal", "_"],
      subcommands: [
        {
          name: "hostname",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
      ],
    },
  ],
};

versions["1.4.1"] = {
  subcommands: [
    {
      name: "app",
      subcommands: [
        {
          name: "install",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "onboarding",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "running",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "launch",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "restart",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "quit",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "set-path",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "uninstall",
          options: [
            {
              name: "--user-data",
              isRepeatable: true,
            },
            {
              name: "--app-bundle",
              isRepeatable: true,
            },
            {
              name: "--input-method",
              isRepeatable: true,
            },
            {
              name: "--terminal-integrations",
              isRepeatable: true,
            },
            {
              name: "--daemon",
              isRepeatable: true,
            },
            {
              name: "--dotfiles",
              isRepeatable: true,
            },
            {
              name: "--ssh",
              isRepeatable: true,
            },
            {
              name: "--no-open",
              isRepeatable: true,
            },
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "prompts",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
      ],
    },
    {
      name: "hook",
      subcommands: [
        {
          name: "editbuffer",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "hide",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "init",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "integration-ready",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "keyboard-focus-changed",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "pre-exec",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "prompt",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "ssh",
          options: [
            {
              name: "--prompt",
              isRepeatable: true,
            },
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "event",
          remove: true,
        },
      ],
    },
    {
      name: "debug",
      subcommands: [
        {
          name: "app",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "dotfiles",
          options: [
            {
              name: "--disable",
              isRepeatable: true,
            },
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "build",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "autocomplete-window",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "logs",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
          args: {
            isVariadic: true,
          },
        },
        {
          name: "ime",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "prompt-accessibility",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "sample",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "unix-socket",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "verify-codesign",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "accessibility",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
      ],
    },
    {
      name: "settings",
      subcommands: [
        {
          name: "init",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "docs",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "open",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "sync",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "all",
          options: [
            {
              name: ["-f", "--format"],
              isRepeatable: true,
            },
            {
              name: ["-r", "--remote"],
              isRepeatable: true,
            },
            {
              name: "--version",
              remove: true,
            },
          ],
        },
      ],
      options: [
        {
          name: ["-f", "--format"],
          isRepeatable: true,
        },
        {
          name: ["-d", "--delete"],
          isRepeatable: true,
        },
      ],
    },
    {
      name: "tips",
      subcommands: [
        {
          name: "enable",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "disable",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "reset",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "prompt",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
      ],
    },
    {
      name: "install",
      options: [
        {
          name: "--daemon",
          isRepeatable: true,
        },
        {
          name: "--dotfiles",
          isRepeatable: true,
        },
        {
          name: "--input-method",
          isRepeatable: true,
        },
        {
          name: "--no-confirm",
          isRepeatable: true,
        },
        {
          name: "--force",
          isRepeatable: true,
        },
        {
          name: "--ssh",
          isRepeatable: true,
        },
      ],
    },
    {
      name: "ssh",
      subcommands: [
        {
          name: "enable",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "disable",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
      ],
    },
    {
      name: "update",
      options: [
        {
          name: ["-y", "--no-confirm"],
          isRepeatable: true,
        },
      ],
    },
    {
      name: "diagnostic",
      options: [
        {
          name: ["-f", "--format"],
          isRepeatable: true,
        },
        {
          name: "--force",
          isRepeatable: true,
        },
      ],
    },
    {
      name: "init",
      options: [
        {
          name: "--rcfile",
          isRepeatable: true,
        },
      ],
    },
    {
      name: "theme",
      options: [
        {
          name: "--list",
          exclusiveOn: ["--folder"],
          isRepeatable: true,
        },
        {
          name: "--folder",
          exclusiveOn: ["--list"],
          isRepeatable: true,
        },
      ],
    },
    {
      name: "issue",
      options: [
        {
          name: ["-f", "--force"],
          isRepeatable: true,
        },
      ],
      args: {
        isVariadic: true,
      },
    },
    {
      name: "login",
      options: [
        {
          name: ["-r", "--refresh"],
          isRepeatable: true,
        },
        {
          name: "--hard-refresh",
          description: "Manually refresh the auth token",
          isRepeatable: true,
        },
      ],
    },
    {
      name: "user",
      subcommands: [
        {
          name: "login",
          options: [
            {
              name: ["-r", "--refresh"],
              isRepeatable: true,
            },
            {
              name: "--hard-refresh",
              description: "Manually refresh the auth token",
              isRepeatable: true,
            },
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "logout",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "whoami",
          options: [
            {
              name: ["-f", "--format"],
              isRepeatable: true,
            },
            {
              name: ["-e", "--only-email"],
              isRepeatable: true,
            },
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "tokens",
          subcommands: [
            {
              name: "new",
              options: [
                {
                  name: "--expires-date",
                  isRepeatable: true,
                },
                {
                  name: "--expires-in",
                  isRepeatable: true,
                },
                {
                  name: ["-t", "--team"],
                  isRepeatable: true,
                },
                {
                  name: "--version",
                  remove: true,
                },
              ],
            },
            {
              name: "list",
              options: [
                {
                  name: ["-t", "--team"],
                  isRepeatable: true,
                },
                {
                  name: ["-f", "--format"],
                  isRepeatable: true,
                },
                {
                  name: ["-p", "--personal"],
                  isRepeatable: true,
                },
                {
                  name: "--version",
                  remove: true,
                },
              ],
            },
            {
              name: "revoke",
              options: [
                {
                  name: ["-t", "--team"],
                  isRepeatable: true,
                },
                {
                  name: "--version",
                  remove: true,
                },
              ],
            },
            {
              name: "validate",
              description: "Validate a token is valid",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
              args: {
                name: "token",
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
              name: "--version",
              remove: true,
            },
          ],
        },
      ],
    },
    {
      name: "team",
      subcommands: [
        {
          name: "members",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "remove",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "add",
          options: [
            {
              name: "--role",
              isRepeatable: true,
            },
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "invitations",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "revoke",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
      ],
      options: [
        {
          name: ["-f", "--format"],
          isRepeatable: true,
        },
        {
          name: "--list",
          isRepeatable: true,
        },
        {
          name: "--new",
          isRepeatable: true,
        },
        {
          name: "--delete",
          isRepeatable: true,
        },
      ],
    },
    {
      name: "doctor",
      options: [
        {
          name: "--verbose",
          isRepeatable: true,
        },
        {
          name: "--strict",
          isRepeatable: true,
        },
      ],
    },
    {
      name: "completion",
      args: {
        suggestions: [
          {
            name: "bash",
            description: "Bash shell completions",
          },
          {
            name: "fish",
            description: "Fish shell completions",
          },
          {
            name: "zsh",
            description: "Zsh shell completions",
          },
          {
            name: "fig",
            description: "Fig completion spec",
          },
        ],
      },
    },
    {
      name: ["internal", "_"],
      subcommands: [
        {
          name: "prompt-dotfiles-changed",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "local-state",
          subcommands: [
            {
              name: "init",
              options: [
                {
                  name: "--version",
                  remove: true,
                },
              ],
            },
            {
              name: "open",
              options: [
                {
                  name: "--version",
                  remove: true,
                },
              ],
            },
            {
              name: "all",
              options: [
                {
                  name: ["-f", "--format"],
                  isRepeatable: true,
                },
                {
                  name: "--version",
                  remove: true,
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
              name: ["-f", "--format"],
              isRepeatable: true,
            },
            {
              name: ["-d", "--delete"],
              isRepeatable: true,
            },
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "callback",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "install",
          options: [
            {
              name: "--daemon",
              isRepeatable: true,
            },
            {
              name: "--dotfiles",
              isRepeatable: true,
            },
            {
              name: "--input-method",
              isRepeatable: true,
            },
            {
              name: "--no-confirm",
              isRepeatable: true,
            },
            {
              name: "--force",
              isRepeatable: true,
            },
            {
              name: "--ssh",
              isRepeatable: true,
            },
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "install-ibus",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "fig-ibus-engine-location",
          },
        },
        {
          name: "uninstall",
          options: [
            {
              name: "--daemon",
              isRepeatable: true,
            },
            {
              name: "--dotfiles",
              isRepeatable: true,
            },
            {
              name: "--binary",
              isRepeatable: true,
            },
            {
              name: "--ssh",
              isRepeatable: true,
            },
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "get-shell",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "hostname",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "should-figterm-launch",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "event",
          options: [
            {
              name: "--name",
              description: "Name of the event",
              isRepeatable: true,
              args: {
                name: "name",
              },
            },
            {
              name: "--payload",
              description: "Payload of the event as a JSON string",
              isRepeatable: true,
              args: {
                name: "payload",
                isOptional: true,
              },
            },
            {
              name: "--apps",
              description: "Apps to send the event to",
              isRepeatable: true,
              args: {
                name: "apps",
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
          name: "auth-token",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "request",
          options: [
            {
              name: "--route",
              isRepeatable: true,
              args: {
                name: "route",
              },
            },
            {
              name: "--method",
              isRepeatable: true,
              args: {
                name: "method",
              },
            },
            {
              name: "--body",
              isRepeatable: true,
              args: {
                name: "body",
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
          name: "warn-user-when-uninstalling-incorrectly",
          remove: true,
        },
        {
          name: "animation",
          remove: true,
        },
      ],
    },
    {
      name: "plugins",
      subcommands: [
        {
          name: "sync",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "update",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "add",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "remove",
          options: [
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "list",
          options: [
            {
              name: ["-f", "--format"],
              isRepeatable: true,
            },
            {
              name: ["-i", "--installed"],
              isRepeatable: true,
            },
            {
              name: "--version",
              remove: true,
            },
          ],
        },
      ],
    },
    {
      name: "man",
      args: {
        isVariadic: true,
      },
    },
    {
      name: ["run", "r", "workflow", "workflows", "flow", "flows"],
      description: "Search for and execute workflows",
      filterStrategy: "fuzzy",
      options: [
        {
          name: ["-h", "--help"],
          priority: 20,
          description: "Print help information",
        },
      ],
      generateSpec: scriptsSpecGenerator,
    },
    {
      name: "bg:tmux",
      description: "(LEGACY) Old tmux hook that might be in ~/.tmux.conf",
      hidden: true,
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "args",
        isVariadic: true,
        isOptional: true,
      },
    },
  ],
};

versions["1.4.3"] = {
  subcommands: [
    {
      name: "ssh",
      subcommands: [
        { name: "enable", remove: true },
        { name: "disable", remove: true },
        { name: "help", remove: true },
      ],
      options: [
        {
          name: ["-a", "--auth"],
          description: "Identity to connect with",
          args: {
            name: "auth",
            generators: sshIdentityGenerator,
          },
        },
      ],
      args: {
        name: "host",
        filterStrategy: "fuzzy",
        generators: sshHostsGenerator,
      },
    },
    {
      name: "login",
      options: [
        {
          name: ["-r", "--refresh"],
          description: "Refresh the auth token if expired",
        },
        {
          name: "--hard-refresh",
          description: "Force a refresh of the auth token",
        },
      ],
    },
    {
      name: "user",
      subcommands: [
        {
          name: "login",
          options: [
            {
              name: ["-r", "--refresh"],
              description: "Refresh the auth token if expired",
            },
            {
              name: "--hard-refresh",
              description: "Force a refresh of the auth token",
            },
          ],
        },
        {
          name: "tokens",
          subcommands: [
            {
              name: "list",
              options: [
                {
                  name: ["-p", "--personal"],
                  remove: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "team",
      subcommands: [
        {
          name: "members",
          description: "List all members on a team",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a member from a team",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
            {
              name: "--version",
              remove: true,
            },
          ],
          args: {
            name: "email",
          },
        },
        {
          name: "add",
          description: "Invite a member to a team",
          options: [
            {
              name: "--role",
              args: {
                name: "role",
                isOptional: true,
                suggestions: ["owner", "admin", "member"],
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
            {
              name: "--version",
              remove: true,
            },
          ],
          args: {
            name: "email",
          },
        },
        {
          name: "invitations",
          description: "List pending invitations to a team",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
            {
              name: "--version",
              remove: true,
            },
          ],
        },
        {
          name: "revoke",
          description: "Revoke an invitation to a team",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
            {
              name: "--version",
              remove: true,
            },
          ],
          args: {
            name: "email",
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
    },
    {
      name: ["internal", "_"],
      subcommands: [
        {
          name: "request",
          options: [
            {
              name: "--method",
              args: {
                isOptional: true,
                suggestions: [
                  "GET",
                  "POST",
                  "PUT",
                  "DELETE",
                  "HEAD",
                  "OPTIONS",
                  "CONNECT",
                  "PATCH",
                  "TRACE",
                ],
              },
            },
          ],
        },
        {
          name: "ipc",
          options: [
            {
              name: "--figterm",
              isRepeatable: true,
              args: {
                name: "figterm",
                isOptional: true,
              },
            },
            {
              name: "--json",
              isRepeatable: true,
              args: {
                name: "json",
              },
            },
            {
              name: "--app",
            },
            {
              name: "--daemon",
            },
            {
              name: "--recv",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
      ],
    },
    {
      name: "onboarding",
      hidden: true,
    },
    {
      name: "plugins",
      subcommands: [
        {
          name: "list",
          options: [
            {
              name: "--fields",
              description: "Fields to include in the output",
              isRepeatable: true,
              args: {
                name: "fields",
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "info",
          description: "Info about a specific plugin",
          options: [
            {
              name: "--fields",
              description: "Fields to include in the output",
              isRepeatable: true,
              args: {
                name: "fields",
                isOptional: true,
              },
            },
            {
              name: ["-f", "--format"],
              description: "The output format",
              isRepeatable: true,
              args: {
                name: "format",
                isOptional: true,
                suggestions: [
                  {
                    name: "plain",
                    description: "Outputs the results as markdown",
                  },
                  {
                    name: "json",
                    description: "Outputs the results as JSON",
                  },
                  {
                    name: "json-pretty",
                    description: "Outputs the results as pretty print JSON",
                  },
                ],
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "plugin",
          },
        },
        {
          name: "configure",
          description: "Configure a specific plugin",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "plugin",
              isOptional: true,
            },
            {
              name: "config",
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: [
        "workflow",
        "run",
        "r",
        "workflows",
        "snippet",
        "snippets",
        "flow",
        "flows",
      ],
      args: {
        name: "args",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "integrations",
      description: "Managed system integrations",
      subcommands: [
        {
          name: "install",
          subcommands: [
            {
              name: "dotfiles",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "daemon",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "ssh",
              options: [
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
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "uninstall",
          subcommands: [
            {
              name: "dotfiles",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "daemon",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "ssh",
              options: [
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
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "alpha",
      remove: true,
    },
  ],
};

versions["1.4.7"] = {
  subcommands: [
    {
      name: "ssh",
      options: [
        {
          name: "--get-identities",
        },
      ],
    },
    {
      name: ["internal", "_"],
      subcommands: [
        {
          name: "request",
          options: [
            {
              name: "--namespace",
              isRepeatable: true,
              args: {
                name: "namespace",
                isOptional: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "integrations",
      description: "Manage system integrations",
    },
  ],
};

versions["1.4.10"] = {
  subcommands: [
    {
      name: "ssh",
      options: [
        {
          name: ["-a", "--auth"],
          args: {
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "login",
      options: [
        {
          name: "--switchable",
          hidden: true,
        },
      ],
      args: {
        name: "email",
        isOptional: true,
      },
    },
    {
      name: "user",
      subcommands: [
        {
          name: "login",
          options: [
            {
              name: "--switchable",
              hidden: true,
            },
          ],
          args: {
            name: "email",
            isOptional: true,
          },
        },
        {
          name: "tokens",
          description: "Subcommand for dealing with tokens",
        },
        {
          name: "whoami",
          description: "Prints details about the current user",
        },
        {
          name: "plan",
          description: "Prints details about the user's plan",
          hidden: true,
          options: [
            {
              name: ["-f", "--format"],
              description: "Output format to use",
              args: {
                name: "format",
                isOptional: true,
                suggestions: [
                  {
                    name: "plain",
                    description: "Outputs the results as markdown",
                  },
                  {
                    name: "json",
                    description: "Outputs the results as JSON",
                  },
                  {
                    name: "json-pretty",
                    description: "Outputs the results as pretty print JSON",
                  },
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
          name: "list-accounts",
          description: "List all accounts that can be switch to",
          hidden: true,
          options: [
            {
              name: ["-f", "--format"],
              description: "Output format to use",
              args: {
                name: "format",
                isOptional: true,
                suggestions: [
                  {
                    name: "plain",
                    description: "Outputs the results as markdown",
                  },
                  {
                    name: "json",
                    description: "Outputs the results as JSON",
                  },
                  {
                    name: "json-pretty",
                    description: "Outputs the results as pretty print JSON",
                  },
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
          name: "switch",
          description: "Switch to a switchable account",
          hidden: true,
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "email",
            generators: userGenerator,
          },
        },
      ],
    },
    {
      name: ["internal", "_"],
      subcommands: [
        {
          name: "fig-socket-path",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "figterm-socket-path",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "session-id",
          },
        },
      ],
    },
    {
      name: "ai",
      description: "English -> Bash translation",
      options: [
        {
          name: ["-n", "--n"],
          description: "Number of completions to generate (must be <=5)",
          hidden: true,
          args: {
            name: "n",
            isOptional: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "input",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "pro",
      description: "Fig Pro",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
  ],
};

export { versions };
export default completion;
