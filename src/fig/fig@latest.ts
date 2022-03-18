import {
  edit,
  settingsSpecGenerator,
  subsystemsGenerator,
  themesGenerator,
} from "./shared";
const completion: Fig.Spec = {
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
          description: "Launch th Fig desktop app",
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
      description: "Install fig cli comoponents",
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
      name: "internal",
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
// Automatic merge overrides these properties - will be fixed in an update to
// the clap integration. Until then, the modifications are hardcoded.
edit(completion.subcommands, {
  internal: {
    name: ["internal", "_"],
    description: "Internal plumbing commands",
  },
  debug: (debug) =>
    edit(debug.subcommands, {
      logs: (logs) =>
        edit(logs.args, {
          files: {
            isVariadic: true,
          },
        }),
    }),
});
