import {
  settingsSpecGenerator,
  subsystemsGenerator,
  themesGenerator,
} from "./shared";
const completion: Fig.Spec = {
  name: "fig",
  description: "The CLI for Fig",
  subcommands: [
    {
      name: "install",
      description: "Install dotfiles",
      options: [
        {
          name: "--daemon",
          description: "Install only the daemon",
        },
        {
          name: "--dotfiles",
          description: "Install only the dotfiles",
        },
        {
          name: "--no-confirm",
          description: "Don't confirm automatic installation",
        },
        {
          name: "--force",
          description: "Force installation of the dotfiles",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "app",
      description: "Interact with the desktop app",
      subcommands: [
        {
          name: "install",
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
            suggestions: [
              {
                name: "dev",
              },
              {
                name: "prod",
              },
              {
                name: "staging",
              },
            ],
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
            suggestions: [
              {
                name: "on",
              },
              {
                name: "off",
              },
            ],
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
              {
                name: "install",
              },
              {
                name: "uninstall",
              },
              {
                name: "select",
              },
              {
                name: "deselect",
              },
              {
                name: "enable",
              },
              {
                name: "disable",
              },
              {
                name: "status",
              },
              {
                name: "register",
              },
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
      icon: "fig://template?badge=🐞",
    },
    {
      name: "settings",
      description: "Customize appearance & behavior",
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
      name: "uninstall",
      description: "Uninstall dotfiles",
      options: [
        {
          name: "--daemon",
          description: "Uninstall only the daemon",
        },
        {
          name: "--dotfiles",
          description: "Uninstall only the dotfiles",
        },
        {
          name: "--no-confirm",
          description: "Don't confirm automatic removal",
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
          args: {
            name: "format",
            isOptional: true,
            suggestions: [
              {
                name: "plain",
              },
              {
                name: "json",
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
          suggestions: [
            {
              name: "pre",
            },
            {
              name: "post",
            },
          ],
        },
      ],
    },
    {
      name: "sync",
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
      description: "Login to dotfiles",
      options: [
        {
          name: ["-r", "--refresh"],
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "logout",
      description: "Logout of dotfiles",
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
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "plugins",
      description: "Plugins management",
      subcommands: [
        {
          name: "info",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-v", "--verbose"],
            },
            {
              name: ["-q", "--quiet"],
              description: "Quiet",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "plugin-file",
          },
        },
        {
          name: "add",
          options: [
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-l", "--local"],
            },
            {
              name: ["-f", "--force"],
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
          name: "remove",
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
          },
        },
        {
          name: "list",
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
          name: "test",
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
      name: "generate-fig-spec",
      description: "Generate the completion spec for Fig",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      hidden: true,
    },
    {
      name: "internal",
      subcommands: [
        {
          name: "prompt-dotfiles-changed",
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
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "quit",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "restart",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "alpha",
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
export default completion;
