import {
  settingsSpecGenerator,
  subsystemsGenerator,
  themesGenerator,
  pluginsGenerator,
  tokensGenerators,
  invitationsGenerators,
  membersGenerators,
  teamsGenerators,
  workflowsSpecGenerator,
  sshHostsGenerator,
  sshIdentityGenerator,
  userGenerator,
  stateGenerator,
} from "./shared";

const completion: Fig.Subcommand = {
  name: "fig",
  description: "Top level cli commands",
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
          name: "set-path",
          description: "Set the internal pseudo-terminal path",
          options: [
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
              name: "--app-bundle",
              description: "Remove executable and user data",
            },
            {
              name: "--input-method",
              description: "Remove input method",
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
            {
              name: "--only-open",
              description: "Only open the uninstallation page",
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
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "install",
              description: "Install the Fig app",
            },
            {
              name: "onboarding",
              description: "Run the Fig tutorial again",
            },
            {
              name: "running",
              description: "Check if Fig is running",
            },
            {
              name: "launch",
              description: "Launch the Fig desktop app",
            },
            {
              name: "restart",
              description: "Restart the Fig desktop app",
            },
            {
              name: "quit",
              description: "Quit the Fig desktop app",
            },
            {
              name: "set-path",
              description: "Set the internal pseudo-terminal path",
            },
            {
              name: "uninstall",
              description: "Uninstall the Fig app",
            },
            {
              name: "prompts",
              description: "Prompts shown on terminal startup",
            },
            {
              name: "help",
              description:
                "Print this message or the help of the given subcommand(s)",
            },
          ],
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
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "session_id",
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
          name: "hide",
          options: [
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
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "app_identifier",
            },
            {
              name: "focused_session_id",
            },
          ],
        },
        {
          name: "pre-exec",
          options: [
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
              name: "control_path",
            },
            {
              name: "remote_dest",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "editbuffer",
            },
            {
              name: "hide",
            },
            {
              name: "init",
            },
            {
              name: "integration-ready",
            },
            {
              name: "keyboard-focus-changed",
            },
            {
              name: "pre-exec",
            },
            {
              name: "prompt",
            },
            {
              name: "ssh",
            },
            {
              name: "help",
              description:
                "Print this message or the help of the given subcommand(s)",
            },
          ],
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
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "dotfiles",
          description: "Debug dotfiles",
          options: [
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
        {
          name: "build",
          description: "Switch build",
          options: [
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
              name: "--level",
              isRepeatable: true,
              args: {
                name: "level",
                isOptional: true,
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "files",
            isVariadic: true,
            isOptional: true,
            generators: subsystemsGenerator,
          },
        },
        {
          name: "prompt-accessibility",
          description: "Prompt accessibility",
          options: [
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
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "accessibility",
          description: "Accessibility",
          options: [
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
          name: "key-tester",
          description: "Key Tester",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "diagnostics",
          description: "Watches diagnostics",
          options: [
            {
              name: "--rate",
              isRepeatable: true,
              args: {
                name: "rate",
                isOptional: true,
              },
            },
            {
              name: "--watch",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "query-index",
          description:
            "Queries remote repository for updates given the specified metadata",
          options: [
            {
              name: ["-c", "--channel"],
              isRepeatable: true,
              args: {
                name: "channel",
              },
            },
            {
              name: ["-k", "--kind"],
              isRepeatable: true,
              args: {
                name: "kind",
              },
            },
            {
              name: ["-v", "--variant"],
              isRepeatable: true,
              args: {
                name: "variant",
              },
            },
            {
              name: ["-e", "--version"],
              isRepeatable: true,
              args: {
                name: "version",
              },
            },
            {
              name: ["-a", "--architecture"],
              isRepeatable: true,
              args: {
                name: "architecture",
              },
            },
            {
              name: ["-t", "--override-threshold"],
              isRepeatable: true,
              args: {
                name: "override_threshold",
                isOptional: true,
              },
            },
            {
              name: ["-r", "--enable-rollout"],
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "devtools",
          description: "Open up the devtools of a specific webview",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "window",
          },
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "app",
              description: "Debug fig app",
            },
            {
              name: "dotfiles",
              description: "Debug dotfiles",
            },
            {
              name: "build",
              description: "Switch build",
            },
            {
              name: "autocomplete-window",
              description: "Toggle/set autocomplete window debug mode",
            },
            {
              name: "logs",
              description: "Show fig debug logs",
            },
            {
              name: "prompt-accessibility",
              description: "Prompt accessibility",
            },
            {
              name: "sample",
              description: "Sample fig process",
            },
            {
              name: "unix-socket",
              description: "Debug fig unix sockets",
            },
            {
              name: "verify-codesign",
              description: "Debug fig codesign verification",
            },
            {
              name: "accessibility",
              description: "Accessibility",
            },
            {
              name: "key-tester",
              description: "Key Tester",
            },
            {
              name: "diagnostics",
              description: "Watches diagnostics",
            },
            {
              name: "query-index",
              description:
                "Queries remote repository for updates given the specified metadata",
            },
            {
              name: "devtools",
              description: "Open up the devtools of a specific webview",
            },
            {
              name: "help",
              description:
                "Print this message or the help of the given subcommand(s)",
            },
          ],
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
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "all",
          description: "List all the settings",
          options: [
            {
              name: ["-f", "--format"],
              description: "Format of the output",
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
              name: ["-r", "--remote"],
              description: "List the remote settings",
            },
            {
              name: ["-h", "--help"],
              description:
                "Print help information (use `--help` for more detail)",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "init",
              description: "Reload the settings listener",
            },
            {
              name: "docs",
              description: "Get the settings documentation",
            },
            {
              name: "open",
              description: "Open the settings file",
            },
            {
              name: "sync",
              description: "Sync the current settings",
            },
            {
              name: "all",
              description: "List all the settings",
            },
            {
              name: "help",
              description:
                "Print this message or the help of the given subcommand(s)",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-f", "--format"],
          description: "Format of the output",
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
          name: ["-d", "--delete"],
          description: "Delete a value",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information (use `--help` for more detail)",
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
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "enable",
              description: "Enable fig tips",
            },
            {
              name: "disable",
              description: "Disable fig tips",
            },
            {
              name: "reset",
              description: "Reset the tips to the default",
              hidden: true,
            },
            {
              name: "prompt",
              description: "Show the tips",
              hidden: true,
            },
            {
              name: "help",
              description:
                "Print this message or the help of the given subcommand(s)",
            },
          ],
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
        },
        {
          name: "--dotfiles",
          description: "Install only the shell integrations",
        },
        {
          name: "--input-method",
          description: "Prompt input method installation",
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
          name: "--ssh",
          description: "Install only the ssh integration",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "ssh",
      description: "Enable/disable fig SSH integration",
      options: [
        {
          name: ["-a", "--auth"],
          description: "Identity to connect with",
          isRepeatable: true,
          args: {
            name: "auth",
            isOptional: true,
            generators: sshIdentityGenerator,
          },
        },
        {
          name: "--get-identities",
        },
        {
          name: "--ignore-saved",
          description: "Ignore saved identities",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "host",
        isOptional: true,
        generators: sshHostsGenerator,
      },
    },
    {
      name: "uninstall",
      description: "Uninstall fig",
      hidden: true,
      options: [
        {
          name: ["-y", "--no-confirm"],
          description: "Force uninstall",
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
          name: "--no-confirm",
          description: "(deprecated) Use --non-interactive instead",
        },
        {
          name: ["-y", "--non-interactive"],
          description: "Don't prompt for confirmation",
        },
        {
          name: "--relaunch-dashboard",
          description:
            "Relaunch into dashboard after update (false will launch in background)",
        },
        {
          name: "--rollout",
          description: "Uses rollout",
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
      name: ["diagnostic", "diagnostics"],
      description: "Run diagnostic tests",
      options: [
        {
          name: ["-f", "--format"],
          description: "The format of the output",
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
          name: "--force",
          description: "Force limited diagnostic output",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information (use `--help` for more detail)",
        },
      ],
    },
    {
      name: "init",
      description: "Generate the dotfiles for the given shell",
      options: [
        {
          name: "--rcfile",
          isRepeatable: true,
          args: {
            name: "rcfile",
            isOptional: true,
          },
        },
        {
          name: "--skip-dotfiles",
          description: "Whether to skip loading dotfiles",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information (use `--help` for more detail)",
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
          name: "--list",
          exclusiveOn: ["--folder"],
        },
        {
          name: "--folder",
          exclusiveOn: ["--list"],
        },
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
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "login",
      description: "Login to Fig",
      options: [
        {
          name: ["-r", "--refresh"],
          description: "Refresh the auth token if expired",
        },
        {
          name: "--hard-refresh",
          description: "Force a refresh of the auth token",
        },
        {
          name: "--switchable",
        },
        {
          name: "--not-now",
          description: 'Add a "not now" option to the choicer',
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "email",
        isOptional: true,
      },
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
      description: "Manage your fig user",
      subcommands: [
        {
          name: "login",
          description: "Login to Fig",
          options: [
            {
              name: ["-r", "--refresh"],
              description: "Refresh the auth token if expired",
            },
            {
              name: "--hard-refresh",
              description: "Force a refresh of the auth token",
            },
            {
              name: "--switchable",
            },
            {
              name: "--not-now",
              description: 'Add a "not now" option to the choicer',
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "email",
            isOptional: true,
          },
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
          name: "tokens",
          description: "Subcommand for dealing with tokens",
          subcommands: [
            {
              name: "new",
              options: [
                {
                  name: "--expires-date",
                  description:
                    "The expiration date of the token in RFC3339 format",
                  exclusiveOn: ["--expires-in"],
                  isRepeatable: true,
                  args: {
                    name: "expires_date",
                    isOptional: true,
                  },
                },
                {
                  name: "--expires-in",
                  description: 'The time till the token expires (e.g. "90d")',
                  exclusiveOn: ["--expires-date"],
                  isRepeatable: true,
                  args: {
                    name: "expires_in",
                    isOptional: true,
                  },
                },
                {
                  name: ["-t", "--team"],
                  description: "The team namespace to create the token for",
                  isRepeatable: true,
                  args: {
                    name: "team",
                    generators: teamsGenerators,
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
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
                  isRepeatable: true,
                  args: {
                    name: "team",
                    generators: teamsGenerators,
                  },
                },
                {
                  name: ["-f", "--format"],
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
                  description:
                    "Print help information (use `--help` for more detail)",
                },
              ],
            },
            {
              name: "revoke",
              options: [
                {
                  name: ["-t", "--team"],
                  description: "The team namespace to revoke the token for",
                  isRepeatable: true,
                  args: {
                    name: "team",
                    generators: teamsGenerators,
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
              args: {
                name: "name",
                generators: tokensGenerators,
              },
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
              subcommands: [
                {
                  name: "new",
                },
                {
                  name: "list",
                },
                {
                  name: "revoke",
                },
                {
                  name: "validate",
                  description: "Validate a token is valid",
                },
                {
                  name: "help",
                  description:
                    "Print this message or the help of the given subcommand(s)",
                },
              ],
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
          name: "whoami",
          description: "Prints details about the current user",
          options: [
            {
              name: ["-f", "--format"],
              description: "Output format to use",
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
              name: ["-e", "--only-email"],
              description:
                "Only print the user's email address, this is quicker since it doesn't require a network request",
            },
            {
              name: ["-h", "--help"],
              description:
                "Print help information (use `--help` for more detail)",
            },
          ],
        },
        {
          name: "plan",
          description: "Prints details about the user's plan",
          hidden: true,
          options: [
            {
              name: ["-f", "--format"],
              description: "Output format to use",
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
              description:
                "Print help information (use `--help` for more detail)",
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
              description:
                "Print help information (use `--help` for more detail)",
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
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "login",
              description: "Login to Fig",
            },
            {
              name: "logout",
              description: "Logout of Fig",
            },
            {
              name: "tokens",
              description: "Subcommand for dealing with tokens",
              subcommands: [
                {
                  name: "new",
                },
                {
                  name: "list",
                },
                {
                  name: "revoke",
                },
                {
                  name: "validate",
                  description: "Validate a token is valid",
                },
              ],
            },
            {
              name: "whoami",
              description: "Prints details about the current user",
            },
            {
              name: "plan",
              description: "Prints details about the user's plan",
              hidden: true,
            },
            {
              name: "list-accounts",
              description: "List all accounts that can be switch to",
              hidden: true,
            },
            {
              name: "switch",
              description: "Switch to a switchable account",
              hidden: true,
            },
            {
              name: "help",
              description:
                "Print this message or the help of the given subcommand(s)",
            },
          ],
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
      name: "team",
      description: "Manage your fig team",
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
                  isRepeatable: true,
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
              subcommands: [
                {
                  name: "members",
                  description: "List all members on a team",
                },
                {
                  name: "remove",
                  description: "Remove a member from a team",
                },
                {
                  name: "add",
                  description: "Invite a member to a team",
                },
                {
                  name: "invitations",
                  description: "List pending invitations to a team",
                },
                {
                  name: "revoke",
                  description: "Revoke an invitation to a team",
                },
                {
                  name: "help",
                  description:
                    "Print this message or the help of the given subcommand(s)",
                },
              ],
            },
          ],
        },
      },
      options: [
        {
          name: ["-f", "--format"],
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
          description: "Print help information (use `--help` for more detail)",
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
          description: "Print help information (use `--help` for more detail)",
        },
      ],
      args: {
        name: "shell",
        isOptional: true,
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
      description: "Internal subcommands used for Fig",
      hidden: true,
      subcommands: [
        {
          name: "prompt-dotfiles-changed",
          description:
            "Prompt the user that the dotfiles have changes Also use for `fig source` internals",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "pre-cmd",
          description:
            "Command that is run during the PreCmd section of the fig integrations",
          options: [
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
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "open",
              description: "Open the state file",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "all",
              description: "List all the settings",
              options: [
                {
                  name: ["-f", "--format"],
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
                  description:
                    "Print help information (use `--help` for more detail)",
                },
              ],
            },
            {
              name: "help",
              description:
                "Print this message or the help of the given subcommand(s)",
              subcommands: [
                {
                  name: "init",
                  description: "Reload the state listener",
                },
                {
                  name: "open",
                  description: "Open the state file",
                },
                {
                  name: "all",
                  description: "List all the settings",
                },
                {
                  name: "help",
                  description:
                    "Print this message or the help of the given subcommand(s)",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-f", "--format"],
              description: "Format of the output",
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
              name: ["-d", "--delete"],
              description: "Delete the state",
            },
            {
              name: ["-h", "--help"],
              description:
                "Print help information (use `--help` for more detail)",
            },
          ],
          args: [
            {
              name: "key",
              isOptional: true,
              generators: stateGenerator,
            },
            {
              name: "value",
              isOptional: true,
            },
          ],
        },
        {
          name: "callback",
          description: "Callback used for the internal pseudoterminal",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "handler_id",
            },
            {
              name: "filename",
              isOptional: true,
            },
            {
              name: "exit_code",
              isOptional: true,
            },
          ],
        },
        {
          name: "install",
          description: "Install fig cli",
          options: [
            {
              name: "--daemon",
              description: "Install only the daemon",
            },
            {
              name: "--dotfiles",
              description: "Install only the shell integrations",
            },
            {
              name: "--input-method",
              description: "Prompt input method installation",
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
              name: "--ssh",
              description: "Install only the ssh integration",
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
              name: "--daemon",
              description: "Uninstall only the daemon",
            },
            {
              name: "--dotfiles",
              description: "Uninstall only the shell integrations",
            },
            {
              name: "--input-method",
              description: "Uninstall only the input method",
            },
            {
              name: "--binary",
              description: "Uninstall only the binary",
            },
            {
              name: "--ssh",
              description: "Uninstall only the ssh integration",
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
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "hostname",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
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
            {
              name: "--body",
              isRepeatable: true,
              args: {
                name: "body",
                isOptional: true,
              },
            },
            {
              name: "--namespace",
              isRepeatable: true,
              args: {
                name: "namespace",
                isOptional: true,
              },
            },
            {
              name: "--release",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "sockets-dir",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "stream-from-socket",
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
            name: "session_id",
          },
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
        {
          name: "uninstall-for-all-users",
          description: "Linux only",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "uuidgen",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "ibus-bootstrap",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "detect-sandbox",
          description: "Checks for sandboxing",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "open-uninstall-page",
          options: [
            {
              name: "--verbose",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "prompt-ssh",
          description: "Displays prompt to install remote shell integrations",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "remote_dest",
          },
        },
        {
          name: "dump-state",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: {
            name: "component",
            suggestions: ["figterm"],
          },
        },
        {
          name: "finish-update",
          options: [
            {
              name: "--relaunch-dashboard",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "check-ssh",
          description:
            "Checks to see if we should try to forward on this SSH connection",
          options: [
            {
              name: ["-h", "--help"],
              description:
                "Print help information (use `--help` for more detail)",
            },
          ],
          args: {
            name: "remote_username",
          },
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "prompt-dotfiles-changed",
              description:
                "Prompt the user that the dotfiles have changes Also use for `fig source` internals",
            },
            {
              name: "pre-cmd",
              description:
                "Command that is run during the PreCmd section of the fig integrations",
            },
            {
              name: "local-state",
              description: "Change the local-state file",
              subcommands: [
                {
                  name: "init",
                  description: "Reload the state listener",
                },
                {
                  name: "open",
                  description: "Open the state file",
                },
                {
                  name: "all",
                  description: "List all the settings",
                },
              ],
            },
            {
              name: "callback",
              description: "Callback used for the internal pseudoterminal",
            },
            {
              name: "install",
              description: "Install fig cli",
            },
            {
              name: "uninstall",
              description: "Uninstall fig cli",
            },
            {
              name: "get-shell",
            },
            {
              name: "hostname",
            },
            {
              name: "should-figterm-launch",
            },
            {
              name: "event",
            },
            {
              name: "auth-token",
            },
            {
              name: "request",
            },
            {
              name: "sockets-dir",
            },
            {
              name: "stream-from-socket",
            },
            {
              name: "figterm-socket-path",
            },
            {
              name: "ipc",
            },
            {
              name: "uninstall-for-all-users",
              description: "Linux only",
            },
            {
              name: "uuidgen",
            },
            {
              name: "ibus-bootstrap",
            },
            {
              name: "detect-sandbox",
              description: "Checks for sandboxing",
            },
            {
              name: "open-uninstall-page",
            },
            {
              name: "prompt-ssh",
              description:
                "Displays prompt to install remote shell integrations",
            },
            {
              name: "dump-state",
            },
            {
              name: "finish-update",
            },
            {
              name: "check-ssh",
              description:
                "Checks to see if we should try to forward on this SSH connection",
            },
            {
              name: "help",
              description:
                "Print this message or the help of the given subcommand(s)",
            },
          ],
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
          description: "Print help information (use `--help` for more detail)",
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
      name: "onboarding",
      description: "Run the Fig tutorial",
      hidden: true,
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "plugins",
      description: "Manage your shell plugins with Fig",
      subcommands: [
        {
          name: "sync",
          description:
            "Sync the current plugins (this will not update plugins that are already installed)",
          options: [
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
              name: ["-i", "--installed"],
              description: "Only list plugins that are installed",
            },
            {
              name: ["-h", "--help"],
              description:
                "Print help information (use `--help` for more detail)",
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
              description:
                "Print help information (use `--help` for more detail)",
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
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "sync",
              description:
                "Sync the current plugins (this will not update plugins that are already installed)",
            },
            {
              name: "update",
              description: "Update the installed plugins",
            },
            {
              name: "add",
              description: "Install a specific plugin from the plugin store",
            },
            {
              name: "remove",
              description: "Uninstall a specific plugin",
            },
            {
              name: "list",
              description: "List all plugins available in the plugin store",
            },
            {
              name: "info",
              description: "Info about a specific plugin",
            },
            {
              name: "configure",
              description: "Configure a specific plugin",
            },
            {
              name: "help",
              description:
                "Print this message or the help of the given subcommand(s)",
            },
          ],
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
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: ["run", "r"],
      description: "Fig Workflows",
      options: [
        {
          name: ["-h", "--help"],
          priority: 20,
          description: "Print help information",
        },
      ],
      args: {
        name: "args",
        isVariadic: true,
        isOptional: true,
      },
      generateSpec: workflowsSpecGenerator,
      filterStrategy: "fuzzy",
    },
    {
      name: ["integrations", "integration"],
      description: "Manage system integrations",
      subcommands: [
        {
          name: "install",
          subcommands: [
            {
              name: "dotfiles",
              options: [
                {
                  name: ["-h", "--help"],
                  description:
                    "Print help information (use `--help` for more detail)",
                },
              ],
              args: {
                name: "shell",
                isOptional: true,
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
              name: "input-method",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "vscode",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: ["intellij", "jetbrains"],
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "all",
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
              subcommands: [
                {
                  name: "dotfiles",
                },
                {
                  name: "daemon",
                },
                {
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij",
                },
                {
                  name: "all",
                },
                {
                  name: "help",
                  description:
                    "Print this message or the help of the given subcommand(s)",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-s", "--silent"],
              description: "Suppress status messages",
            },
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
                  description:
                    "Print help information (use `--help` for more detail)",
                },
              ],
              args: {
                name: "shell",
                isOptional: true,
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
              name: "input-method",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "vscode",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: ["intellij", "jetbrains"],
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "all",
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
              subcommands: [
                {
                  name: "dotfiles",
                },
                {
                  name: "daemon",
                },
                {
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij",
                },
                {
                  name: "all",
                },
                {
                  name: "help",
                  description:
                    "Print this message or the help of the given subcommand(s)",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-s", "--silent"],
              description: "Suppress status messages",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "status",
          subcommands: [
            {
              name: "dotfiles",
              options: [
                {
                  name: ["-h", "--help"],
                  description:
                    "Print help information (use `--help` for more detail)",
                },
              ],
              args: {
                name: "shell",
                isOptional: true,
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
              name: "input-method",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "vscode",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: ["intellij", "jetbrains"],
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help information",
                },
              ],
            },
            {
              name: "all",
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
              subcommands: [
                {
                  name: "dotfiles",
                },
                {
                  name: "daemon",
                },
                {
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij",
                },
                {
                  name: "all",
                },
                {
                  name: "help",
                  description:
                    "Print this message or the help of the given subcommand(s)",
                },
              ],
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
          subcommands: [
            {
              name: "install",
              subcommands: [
                {
                  name: "dotfiles",
                },
                {
                  name: "daemon",
                },
                {
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij",
                },
                {
                  name: "all",
                },
              ],
            },
            {
              name: "uninstall",
              subcommands: [
                {
                  name: "dotfiles",
                },
                {
                  name: "daemon",
                },
                {
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij",
                },
                {
                  name: "all",
                },
              ],
            },
            {
              name: "status",
              subcommands: [
                {
                  name: "dotfiles",
                },
                {
                  name: "daemon",
                },
                {
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij",
                },
                {
                  name: "all",
                },
              ],
            },
            {
              name: "help",
              description:
                "Print this message or the help of the given subcommand(s)",
            },
          ],
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
      name: "ai",
      description: "English -> Bash translation",
      options: [
        {
          name: ["-n", "--n"],
          description: "Number of completions to generate (must be <=5)",
          hidden: true,
          isRepeatable: true,
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
      name: "telemetry",
      description: "Enable/disable telemetry",
      hidden: true,
      subcommands: [
        {
          name: "enable",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "disable",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "status",
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
          subcommands: [
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
              name: "help",
              description:
                "Print this message or the help of the given subcommand(s)",
            },
          ],
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
      name: "pro",
      description: "Fig Pro",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "version",
      description: "Version",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: ["help-all", "--help-all"],
      insertValue: "help-all",
      description: "Print help for all subcommands",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "dashboard",
      description: "Open the fig dashboard",
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
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      subcommands: [
        {
          name: "app",
          description: "Interact with the desktop app",
          subcommands: [
            {
              name: "install",
              description: "Install the Fig app",
            },
            {
              name: "onboarding",
              description: "Run the Fig tutorial again",
            },
            {
              name: "running",
              description: "Check if Fig is running",
            },
            {
              name: "launch",
              description: "Launch the Fig desktop app",
            },
            {
              name: "restart",
              description: "Restart the Fig desktop app",
            },
            {
              name: "quit",
              description: "Quit the Fig desktop app",
            },
            {
              name: "set-path",
              description: "Set the internal pseudo-terminal path",
            },
            {
              name: "uninstall",
              description: "Uninstall the Fig app",
            },
            {
              name: "prompts",
              description: "Prompts shown on terminal startup",
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
            },
            {
              name: "hide",
            },
            {
              name: "init",
            },
            {
              name: "integration-ready",
            },
            {
              name: "keyboard-focus-changed",
            },
            {
              name: "pre-exec",
            },
            {
              name: "prompt",
            },
            {
              name: "ssh",
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
            },
            {
              name: "dotfiles",
              description: "Debug dotfiles",
            },
            {
              name: "build",
              description: "Switch build",
            },
            {
              name: "autocomplete-window",
              description: "Toggle/set autocomplete window debug mode",
            },
            {
              name: "logs",
              description: "Show fig debug logs",
            },
            {
              name: "prompt-accessibility",
              description: "Prompt accessibility",
            },
            {
              name: "sample",
              description: "Sample fig process",
            },
            {
              name: "unix-socket",
              description: "Debug fig unix sockets",
            },
            {
              name: "verify-codesign",
              description: "Debug fig codesign verification",
            },
            {
              name: "accessibility",
              description: "Accessibility",
            },
            {
              name: "key-tester",
              description: "Key Tester",
            },
            {
              name: "diagnostics",
              description: "Watches diagnostics",
            },
            {
              name: "query-index",
              description:
                "Queries remote repository for updates given the specified metadata",
            },
            {
              name: "devtools",
              description: "Open up the devtools of a specific webview",
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
            },
            {
              name: "docs",
              description: "Get the settings documentation",
            },
            {
              name: "open",
              description: "Open the settings file",
            },
            {
              name: "sync",
              description: "Sync the current settings",
            },
            {
              name: "all",
              description: "List all the settings",
            },
          ],
        },
        {
          name: "tips",
          description: "Enable/disable fig tips",
          subcommands: [
            {
              name: "enable",
              description: "Enable fig tips",
            },
            {
              name: "disable",
              description: "Disable fig tips",
            },
            {
              name: "reset",
              description: "Reset the tips to the default",
              hidden: true,
            },
            {
              name: "prompt",
              description: "Show the tips",
              hidden: true,
            },
          ],
        },
        {
          name: "install",
          description: "Install fig cli components",
        },
        {
          name: "ssh",
          description: "Enable/disable fig SSH integration",
        },
        {
          name: "uninstall",
          description: "Uninstall fig",
          hidden: true,
        },
        {
          name: "update",
          description: "Update dotfiles",
        },
        {
          name: "daemon",
          description: "Run the daemon",
          hidden: true,
        },
        {
          name: "diagnostic",
          description: "Run diagnostic tests",
        },
        {
          name: "init",
          description: "Generate the dotfiles for the given shell",
        },
        {
          name: "source",
          description: "Sync your latest dotfiles",
        },
        {
          name: "theme",
          description: "Get or set theme",
        },
        {
          name: "invite",
          description: "Invite friends to Fig",
        },
        {
          name: "tweet",
          description: "Tweet about Fig",
        },
        {
          name: "issue",
          description: "Create a new Github issue",
        },
        {
          name: "login",
          description: "Login to Fig",
        },
        {
          name: "logout",
          description: "Logout of Fig",
        },
        {
          name: "user",
          description: "Manage your fig user",
          subcommands: [
            {
              name: "login",
              description: "Login to Fig",
            },
            {
              name: "logout",
              description: "Logout of Fig",
            },
            {
              name: "tokens",
              description: "Subcommand for dealing with tokens",
              subcommands: [
                {
                  name: "new",
                },
                {
                  name: "list",
                },
                {
                  name: "revoke",
                },
                {
                  name: "validate",
                  description: "Validate a token is valid",
                },
              ],
            },
            {
              name: "whoami",
              description: "Prints details about the current user",
            },
            {
              name: "plan",
              description: "Prints details about the user's plan",
              hidden: true,
            },
            {
              name: "list-accounts",
              description: "List all accounts that can be switch to",
              hidden: true,
            },
            {
              name: "switch",
              description: "Switch to a switchable account",
              hidden: true,
            },
          ],
        },
        {
          name: "team",
          description: "Manage your fig team",
          subcommands: [
            {
              name: "members",
              description: "List all members on a team",
            },
            {
              name: "remove",
              description: "Remove a member from a team",
            },
            {
              name: "add",
              description: "Invite a member to a team",
            },
            {
              name: "invitations",
              description: "List pending invitations to a team",
            },
            {
              name: "revoke",
              description: "Revoke an invitation to a team",
            },
          ],
        },
        {
          name: "doctor",
          description: "Check Fig is properly configured",
        },
        {
          name: "completion",
          description: "Generate the completion spec for Fig",
          hidden: true,
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
            },
            {
              name: "pre-cmd",
              description:
                "Command that is run during the PreCmd section of the fig integrations",
            },
            {
              name: "local-state",
              description: "Change the local-state file",
              subcommands: [
                {
                  name: "init",
                  description: "Reload the state listener",
                },
                {
                  name: "open",
                  description: "Open the state file",
                },
                {
                  name: "all",
                  description: "List all the settings",
                },
              ],
            },
            {
              name: "callback",
              description: "Callback used for the internal pseudoterminal",
            },
            {
              name: "install",
              description: "Install fig cli",
            },
            {
              name: "uninstall",
              description: "Uninstall fig cli",
            },
            {
              name: "get-shell",
            },
            {
              name: "hostname",
            },
            {
              name: "should-figterm-launch",
            },
            {
              name: "event",
            },
            {
              name: "auth-token",
            },
            {
              name: "request",
            },
            {
              name: "sockets-dir",
            },
            {
              name: "stream-from-socket",
            },
            {
              name: "figterm-socket-path",
            },
            {
              name: "ipc",
            },
            {
              name: "uninstall-for-all-users",
              description: "Linux only",
            },
            {
              name: "uuidgen",
            },
            {
              name: "ibus-bootstrap",
            },
            {
              name: "detect-sandbox",
              description: "Checks for sandboxing",
            },
            {
              name: "open-uninstall-page",
            },
            {
              name: "prompt-ssh",
              description:
                "Displays prompt to install remote shell integrations",
            },
            {
              name: "dump-state",
            },
            {
              name: "finish-update",
            },
            {
              name: "check-ssh",
              description:
                "Checks to see if we should try to forward on this SSH connection",
            },
          ],
        },
        {
          name: "launch",
          description: "Launch the Fig desktop app",
        },
        {
          name: "quit",
          description: "Quit the Fig desktop app",
        },
        {
          name: "restart",
          description: "Restart the Fig desktop app",
        },
        {
          name: "onboarding",
          description: "Run the Fig tutorial",
          hidden: true,
        },
        {
          name: "plugins",
          description: "Manage your shell plugins with Fig",
          subcommands: [
            {
              name: "sync",
              description:
                "Sync the current plugins (this will not update plugins that are already installed)",
            },
            {
              name: "update",
              description: "Update the installed plugins",
            },
            {
              name: "add",
              description: "Install a specific plugin from the plugin store",
            },
            {
              name: "remove",
              description: "Uninstall a specific plugin",
            },
            {
              name: "list",
              description: "List all plugins available in the plugin store",
            },
            {
              name: "info",
              description: "Info about a specific plugin",
            },
            {
              name: "configure",
              description: "Configure a specific plugin",
            },
          ],
        },
        {
          name: "man",
          description: "Open manual page",
        },
        {
          name: "workflow",
          description: "Fig Workflows",
        },
        {
          name: "integrations",
          description: "Manage system integrations",
          subcommands: [
            {
              name: "install",
              subcommands: [
                {
                  name: "dotfiles",
                },
                {
                  name: "daemon",
                },
                {
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij",
                },
                {
                  name: "all",
                },
              ],
            },
            {
              name: "uninstall",
              subcommands: [
                {
                  name: "dotfiles",
                },
                {
                  name: "daemon",
                },
                {
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij",
                },
                {
                  name: "all",
                },
              ],
            },
            {
              name: "status",
              subcommands: [
                {
                  name: "dotfiles",
                },
                {
                  name: "daemon",
                },
                {
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij",
                },
                {
                  name: "all",
                },
              ],
            },
          ],
        },
        {
          name: "ai",
          description: "English -> Bash translation",
        },
        {
          name: "telemetry",
          description: "Enable/disable telemetry",
          hidden: true,
          subcommands: [
            {
              name: "enable",
            },
            {
              name: "disable",
            },
            {
              name: "status",
            },
          ],
        },
        {
          name: "pro",
          description: "Fig Pro",
        },
        {
          name: "version",
          description: "Version",
        },
        {
          name: "help-all",
          description: "Print help for all subcommands",
        },
        {
          name: "dashboard",
          description: "Open the fig dashboard",
        },
        {
          name: "app:running",
          description: "(LEGACY) Old hook that was being used somewhere",
          hidden: true,
        },
        {
          name: "bg:ssh",
          description: "(LEGACY) Old ssh hook that might be in ~/.ssh/config",
          hidden: true,
        },
        {
          name: "bg:tmux",
          description: "(LEGACY) Old tmux hook that might be in ~/.tmux.conf",
          hidden: true,
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
        },
      ],
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

versions["2.7.5"] = {};

export { versions };
export default completion;
