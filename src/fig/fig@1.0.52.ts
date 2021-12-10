import {
  settingsSpecGenerator,
  subsystemsGenerator,
  themesGenerator,
} from "./shared";
const completionSpec: Fig.Spec = {
  name: "fig",
  description: "CLI to interact with Fig",
  subcommands: [
    {
      name: "wrapped",
      icon: "fig://template?badge=🎁",
      description: "See your #FigWrapped",
      priority: 100,
    },
    {
      name: "app",
      description: "Interact with the macOS app",
      subcommands: [
        {
          name: "install",
          description: "Install and upgrade fig",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for install",
              displayName: "help",
            },
          ],
        },
        {
          name: "onboarding",
          description: "Run through onboarding process",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for onboarding",
              displayName: "help",
            },
          ],
        },
        {
          name: "running",
          description: "Gets the status if Fig is running",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for running",
              displayName: "help",
            },
          ],
        },
        {
          name: "set-path",
          description: "Set the path to the fig executable",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for set-path",
              displayName: "help",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstall Fig",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for uninstall",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for app",
          displayName: "help",
        },
      ],
    },
    {
      name: "community",
      description: "Join the Fig community",
      icon: "fig://icon?type=discord",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for community",
          displayName: "help",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
              displayName: "no-descriptions",
            },
            {
              name: ["--help", "-h"],
              description: "Help for bash",
              displayName: "help",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
              displayName: "no-descriptions",
            },
            {
              name: ["--help", "-h"],
              description: "Help for fish",
              displayName: "help",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
              displayName: "no-descriptions",
            },
            {
              name: ["--help", "-h"],
              description: "Help for powershell",
              displayName: "help",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
              displayName: "no-descriptions",
            },
            {
              name: ["--help", "-h"],
              description: "Help for zsh",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for completion",
          displayName: "help",
        },
      ],
    },
    {
      name: "contributors",
      description: "Contribute to Fig CLI",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for contributors",
          displayName: "help",
        },
      ],
    },
    {
      name: "debug",
      description: "Debug",
      subcommands: [
        {
          name: "app",
          description: "Debug fig app",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for app",
              displayName: "help",
            },
          ],
        },
        {
          name: "build",
          description: "Switch build",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for build",
              displayName: "help",
            },
          ],
        },
        {
          name: "debug-mode",
          description: "Toggle/set debug mode",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for debug-mode",
              displayName: "help",
            },
          ],
        },
        {
          name: "diagnostic",
          description: "Run diagnostic tests",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for diagnostic",
              displayName: "help",
            },
          ],
        },
        {
          name: "dotfiles",
          description: "Debug dotfiles",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for dotfiles",
              displayName: "help",
            },
          ],
        },
        {
          name: "logs",
          description: "Debug fig logs",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for logs",
              displayName: "help",
            },
          ],
        },
        {
          name: "perfs",
          description: "Debug perfs",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for perfs",
              displayName: "help",
            },
          ],
        },
        {
          name: "sample",
          description: "Sample fig",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for sample",
              displayName: "help",
            },
          ],
        },
        {
          name: "ssh",
          description: "Debug ssh",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for ssh",
              displayName: "help",
            },
          ],
        },
        {
          name: "terminal",
          description: "Debug terminal",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for terminal",
              displayName: "help",
            },
          ],
        },
        {
          name: "unix-socket",
          description: "Debug unix socket",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for unix-socket",
              displayName: "help",
            },
          ],
        },
        {
          name: "verify-codesign",
          description: "Debug fig verify-codesign",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for verify-codesign",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for debug",
          displayName: "help",
        },
      ],
    },
    {
      name: "dev",
      description: "Dev commands",
      subcommands: [
        {
          name: "docs",
          description: "Documentation for building completion specs",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for docs",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for dev",
          displayName: "help",
        },
      ],
    },
    {
      name: "diagnostic",
      description: "Run diagnostic tests",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for diagnostic",
          displayName: "help",
        },
      ],
    },
    {
      name: "docs",
      description: "Documentation for building completion specs",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for docs",
          displayName: "help",
        },
      ],
    },
    {
      name: "doctor",
      description: "Check Fig is properly configured",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for doctor",
          displayName: "help",
        },
      ],
    },
    {
      name: "integrations",
      description: "Manage integrations",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for integrations",
          displayName: "help",
        },
      ],
    },
    {
      name: "invite",
      description: "Invite friends to Fig",
      icon: "fig://icon?type=invite",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for invite",
          displayName: "help",
        },
      ],
    },
    {
      name: "issue",
      description: "Create a new GitHub issue",
      icon: "fig://icon?type=github",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for issue",
          displayName: "help",
        },
      ],
    },
    {
      name: "logout",
      description: "Logout of Fig",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for logout",
          displayName: "help",
        },
      ],
    },
    {
      name: "quit",
      description: "Quit Fig",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for quit",
          displayName: "help",
        },
      ],
    },
    {
      name: "report",
      description: "Open the report window",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for report",
          displayName: "help",
        },
      ],
    },
    {
      name: "restart",
      description: "Restart Fig",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for restart",
          displayName: "help",
        },
      ],
    },
    {
      name: "settings",
      description: "Customize appearance & behavior",
      generateSpec: settingsSpecGenerator,
      subcommands: [
        {
          name: "docs",
          description: "Get the settings documentation",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for docs",
              displayName: "help",
            },
          ],
        },
        {
          name: "open",
          description: "Open the settings file",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for open",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--delete", "-d"],
          description: "Delete the key",
          displayName: "delete",
        },
        {
          name: ["--help", "-h"],
          description: "Help for settings",
          displayName: "help",
        },
      ],
    },
    {
      name: "source",
      description: "Link with terminal session",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for source",
          displayName: "help",
        },
      ],
    },
    {
      name: "specs",
      description: "Manage your specs",
      subcommands: [
        {
          name: "list",
          description: "List autcomplete specs",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for list",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for specs",
          displayName: "help",
        },
      ],
    },
    {
      name: "theme",
      description: "Get/Set theme",
      args: {
        name: "theme",
        generators: themesGenerator,
      },
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for theme",
          displayName: "help",
        },
      ],
    },
    {
      name: "tweet",
      description: "Tweet about Fig",
      icon: "fig://icon?type=twitter",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for tweet",
          displayName: "help",
        },
      ],
    },
    {
      name: "update",
      description: "Update Fig",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for update",
          displayName: "help",
        },
      ],
    },
    {
      name: "user",
      description: "User commands",
      subcommands: [
        {
          name: "logout",
          description: "Logout of Fig",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for logout",
              displayName: "help",
            },
          ],
        },
        {
          name: "whoami",
          description: "Get currently logged in user",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for whoami",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for user",
          displayName: "help",
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "app",
          description: "Interact with the macOS app",
          subcommands: [
            {
              name: "install",
              description: "Install and upgrade fig",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for install",
                  displayName: "help",
                },
              ],
            },
            {
              name: "onboarding",
              description: "Run through onboarding process",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for onboarding",
                  displayName: "help",
                },
              ],
            },
            {
              name: "running",
              description: "Gets the status if Fig is running",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for running",
                  displayName: "help",
                },
              ],
            },
            {
              name: "set-path",
              description: "Set the path to the fig executable",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for set-path",
                  displayName: "help",
                },
              ],
            },
            {
              name: "uninstall",
              description: "Uninstall Fig",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for uninstall",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for app",
              displayName: "help",
            },
          ],
        },
        {
          name: "community",
          description: "Join the Fig community",
          icon: "fig://icon?type=discord",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for community",
              displayName: "help",
            },
          ],
        },
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
              options: [
                {
                  name: "--no-descriptions",
                  description: "Disable completion descriptions",
                  displayName: "no-descriptions",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for bash",
                  displayName: "help",
                },
              ],
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
              options: [
                {
                  name: "--no-descriptions",
                  description: "Disable completion descriptions",
                  displayName: "no-descriptions",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for fish",
                  displayName: "help",
                },
              ],
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
              options: [
                {
                  name: "--no-descriptions",
                  description: "Disable completion descriptions",
                  displayName: "no-descriptions",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for powershell",
                  displayName: "help",
                },
              ],
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
              options: [
                {
                  name: "--no-descriptions",
                  description: "Disable completion descriptions",
                  displayName: "no-descriptions",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for zsh",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for completion",
              displayName: "help",
            },
          ],
        },
        {
          name: "contributors",
          description: "Contribute to Fig CLI",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for contributors",
              displayName: "help",
            },
          ],
        },
        {
          name: "debug",
          description: "Debug",
          subcommands: [
            {
              name: "app",
              description: "Debug fig app",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for app",
                  displayName: "help",
                },
              ],
            },
            {
              name: "build",
              description: "Switch build",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for build",
                  displayName: "help",
                },
              ],
            },
            {
              name: "debug-mode",
              description: "Toggle/set debug mode",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for debug-mode",
                  displayName: "help",
                },
              ],
            },
            {
              name: "diagnostic",
              description: "Run diagnostic tests",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for diagnostic",
                  displayName: "help",
                },
              ],
            },
            {
              name: "dotfiles",
              description: "Debug dotfiles",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for dotfiles",
                  displayName: "help",
                },
              ],
            },
            {
              name: "logs",
              description: "Debug fig logs",
              icon: "🪵",
              args: {
                name: "subsystem",
                isOptional: true,
                isVariadic: true,
                generators: subsystemsGenerator,
              },
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for logs",
                  displayName: "help",
                },
              ],
            },
            {
              name: "perfs",
              description: "Debug perfs",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for perfs",
                  displayName: "help",
                },
              ],
            },
            {
              name: "sample",
              description: "Sample fig",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for sample",
                  displayName: "help",
                },
              ],
            },
            {
              name: "ssh",
              description: "Debug ssh",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for ssh",
                  displayName: "help",
                },
              ],
            },
            {
              name: "terminal",
              description: "Debug terminal",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for terminal",
                  displayName: "help",
                },
              ],
            },
            {
              name: "unix-socket",
              description: "Debug unix socket",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for unix-socket",
                  displayName: "help",
                },
              ],
            },
            {
              name: "verify-codesign",
              description: "Debug fig verify-codesign",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for verify-codesign",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for debug",
              displayName: "help",
            },
          ],
        },
        {
          name: "dev",
          description: "Dev commands",
          subcommands: [
            {
              name: "docs",
              description: "Documentation for building completion specs",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for docs",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for dev",
              displayName: "help",
            },
          ],
        },
        {
          name: "diagnostic",
          description: "Run diagnostic tests",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for diagnostic",
              displayName: "help",
            },
          ],
        },
        {
          name: "docs",
          description: "Documentation for building completion specs",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for docs",
              displayName: "help",
            },
          ],
        },
        {
          name: "doctor",
          description: "Check Fig is properly configured",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for doctor",
              displayName: "help",
            },
          ],
        },
        {
          name: "integrations",
          description: "Manage integrations",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for integrations",
              displayName: "help",
            },
          ],
        },
        {
          name: "invite",
          description: "Invite friends to Fig",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for invite",
              displayName: "help",
            },
          ],
        },
        {
          name: "issue",
          description: "Create a new GitHub issue",
          icon: "fig://icon?type=github",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for issue",
              displayName: "help",
            },
          ],
        },
        {
          name: "logout",
          description: "Logout of Fig",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for logout",
              displayName: "help",
            },
          ],
        },
        {
          name: "quit",
          description: "Quit Fig",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for quit",
              displayName: "help",
            },
          ],
        },
        {
          name: "report",
          description: "Open the report window",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for report",
              displayName: "help",
            },
          ],
        },
        {
          name: "restart",
          description: "Restart Fig",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for restart",
              displayName: "help",
            },
          ],
        },
        {
          name: "settings",
          description: "Customize appearance & behavior",
          subcommands: [
            {
              name: "docs",
              description: "Get the settings documentation",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for docs",
                  displayName: "help",
                },
              ],
            },
            {
              name: "open",
              description: "Open the settings file",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for open",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for settings",
              displayName: "help",
            },
          ],
        },
        {
          name: "source",
          description: "Link with terminal session",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for source",
              displayName: "help",
            },
          ],
        },
        {
          name: "specs",
          description: "Manage your specs",
          subcommands: [
            {
              name: "list",
              description: "List autcomplete specs",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for list",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for specs",
              displayName: "help",
            },
          ],
        },
        {
          name: "theme",
          description: "Get/Set theme",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for theme",
              displayName: "help",
            },
          ],
        },
        {
          name: "tweet",
          description: "Tweet about Fig",
          icon: "fig://icon?type=twitter",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for tweet",
              displayName: "help",
            },
          ],
        },
        {
          name: "update",
          description: "Update Fig",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for update",
              displayName: "help",
            },
          ],
        },
        {
          name: "user",
          description: "User commands",
          subcommands: [
            {
              name: "logout",
              description: "Logout of Fig",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for logout",
                  displayName: "help",
                },
              ],
            },
            {
              name: "whoami",
              description: "Get currently logged in user",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for whoami",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for user",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for help",
          displayName: "help",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Help for fig",
      displayName: "help",
    },
  ],
};
export default completionSpec;
