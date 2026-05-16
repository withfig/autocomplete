export const themesGenerator: Fig.Generator = {
  script: ["q", "theme", "--list"],
  postProcess: (output) => {
    const builtinThemes: Fig.Suggestion[] = [
      {
        name: "system",
        icon: "💻",
        priority: 51,
      },
      {
        name: "light",
        icon: "fig://template?color=ffffff&badge=☀️",
        priority: 51,
      },
      {
        name: "dark",
        icon: "fig://template?color=000000&badge=🌙",
        priority: 51,
      },
    ];
    return output
      .split("\n")
      .map(
        (name) =>
          ({
            name,
            icon: "🎨",
          }) as Fig.Suggestion
      )
      .concat(builtinThemes);
  },
};

const completion: Fig.Spec = {
  name: "q",
  description: "The Amazon Q CLI",
  subcommands: [
    {
      name: "app",
      description: "Interact with the desktop app",
      hidden: true,
      subcommands: [
        {
          name: "onboarding",
          description: "Run the tutorial again",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "running",
          description: "Check if the desktop app is running",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "launch",
          description: "Launch the desktop app",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "restart",
          description: "Restart the desktop app",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "quit",
          description: "Quit the desktop app",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstall the desktop app",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "prompts",
          description: "Prompts shown on terminal startup",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "onboarding",
              description: "Run the tutorial again",
            },
            {
              name: "running",
              description: "Check if the desktop app is running",
            },
            {
              name: "launch",
              description: "Launch the desktop app",
            },
            {
              name: "restart",
              description: "Restart the desktop app",
            },
            {
              name: "quit",
              description: "Quit the desktop app",
            },
            {
              name: "uninstall",
              description: "Uninstall the desktop app",
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "init",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
          name: "clear-autocomplete-cache",
          options: [
            {
              name: "--cli",
              isRepeatable: true,
              args: {
                name: "cli",
                isOptional: true,
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              name: "clear-autocomplete-cache",
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "debug",
      description: "Debug the app",
      subcommands: [
        {
          name: "app",
          description: "Debug the app",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "build",
          description: "Switch to another branch of a Fig.js app",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: [
            {
              name: "app",
              suggestions: ["dashboard", "autocomplete"],
            },
            {
              name: "build",
              isOptional: true,
              suggestions: ["production", "beta", "develop"],
            },
          ],
        },
        {
          name: "autocomplete-window",
          description: "Toggle/set autocomplete window debug mode",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
          description: "Show debug logs",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: {
            name: "files",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "input-method",
          description: "Input method debugger",
          subcommands: [
            {
              name: "install",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
              args: {
                name: "bundle_path",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "uninstall",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
              args: {
                name: "bundle_path",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "list",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "status",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
              args: {
                name: "bundle_path",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "source",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
              args: [
                {
                  name: "bundle_identifier",
                },
                {
                  name: "action",
                  suggestions: ["enable", "disable", "select", "deselect"],
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
                },
                {
                  name: "uninstall",
                },
                {
                  name: "list",
                },
                {
                  name: "status",
                },
                {
                  name: "source",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "prompt-accessibility",
          description: "Prompt accessibility",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "sample",
          description: "Sample desktop process",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "verify-codesign",
          description: "Debug application codesigning",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "accessibility",
          description: "Accessibility",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              name: ["-o", "--os"],
              isRepeatable: true,
              args: {
                name: "os",
              },
            },
            {
              name: ["-V", "--variant"],
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
              name: ["-f", "--file-type"],
              isRepeatable: true,
              args: {
                name: "file_type",
              },
            },
            {
              name: ["-r", "--enable-rollout"],
            },
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "devtools",
          description: "Open up the devtools of a specific webview",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: {
            name: "app",
            suggestions: ["dashboard", "autocomplete"],
          },
        },
        {
          name: "get-index",
          description: "Displays remote index",
          options: [
            {
              name: ["-d", "--debug"],
              description: "Display using debug formatting",
            },
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: {
            name: "channel",
          },
        },
        {
          name: "list-intellij-variants",
          description: "Lists installed IntelliJ variants",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "shell",
          description:
            "Disables sourcing of user shell config and instead uses a minimal shell config",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "app",
              description: "Debug the app",
            },
            {
              name: "build",
              description: "Switch to another branch of a Fig.js app",
            },
            {
              name: "autocomplete-window",
              description: "Toggle/set autocomplete window debug mode",
            },
            {
              name: "logs",
              description: "Show debug logs",
            },
            {
              name: "input-method",
              description: "Input method debugger",
              subcommands: [
                {
                  name: "install",
                },
                {
                  name: "uninstall",
                },
                {
                  name: "list",
                },
                {
                  name: "status",
                },
                {
                  name: "source",
                },
              ],
            },
            {
              name: "prompt-accessibility",
              description: "Prompt accessibility",
            },
            {
              name: "sample",
              description: "Sample desktop process",
            },
            {
              name: "verify-codesign",
              description: "Debug application codesigning",
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
              name: "get-index",
              description: "Displays remote index",
            },
            {
              name: "list-intellij-variants",
              description: "Lists installed IntelliJ variants",
            },
            {
              name: "shell",
              description:
                "Disables sourcing of user shell config and instead uses a minimal shell config",
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: ["settings", "setting"],
      description: "Customize appearance & behavior",
      subcommands: [
        {
          name: "open",
          description: "Open the settings file",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "open",
              description: "Open the settings file",
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
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
      name: "install",
      description: "Install cli components",
      options: [
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall Q",
      hidden: true,
      options: [
        {
          name: ["-y", "--no-confirm"],
          description: "Force uninstall",
        },
        {
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: ["update", "upgrade"],
      description: "Update the Q application",
      options: [
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
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
            {
              name: "nu",
              description: "Nu shell",
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "theme",
        isOptional: true,
        generators: themesGenerator,
      },
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
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
      description: "Login",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "logout",
      description: "Logout",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: "user",
      description: "Manage your account",
      subcommands: [
        {
          name: "login",
          description: "Login",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "logout",
          description: "Logout",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "login",
              description: "Login",
            },
            {
              name: "logout",
              description: "Logout",
            },
            {
              name: "whoami",
              description: "Prints details about the current user",
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "doctor",
      description: "Fix and diagnose common issues",
      options: [
        {
          name: ["-a", "--all"],
          description: "Run all doctor tests, with no fixes",
        },
        {
          name: ["-s", "--strict"],
          description: "Error on warnings",
        },
        {
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate CLI completion spec",
      hidden: true,
      options: [
        {
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
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
      description: "Internal subcommands",
      hidden: true,
      subcommands: [
        {
          name: "pre-cmd",
          description:
            "Command that is run during the PreCmd section of the Q integrations",
          options: [
            {
              name: "--alias",
              isRepeatable: true,
              args: {
                name: "alias",
                isOptional: true,
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
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
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help (see more with '--help')",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
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
          description: "Callback used for the internal pseudoterminal",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
          description: "Install Q cli",
          options: [
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstall Q cli",
          options: [
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "get-shell",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "hostname",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "should-figterm-launch",
          description: "Detects if Figterm should be launched",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "sockets-dir",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "stream-from-socket",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "figterm-socket-path",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              name: "--recv",
            },
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "uninstall-for-all-users",
          description: "Linux only",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "uuidgen",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "open-uninstall-page",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "ssh-local-command",
          description: "Displays prompt to install remote shell integrations",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: [
            {
              name: "remote_dest",
            },
            {
              name: "uuid",
            },
          ],
        },
        {
          name: "prompt-ssh",
          description:
            "\\[Deprecated\\] Displays prompt to install remote shell integrations",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: {
            name: "remote_dest",
          },
        },
        {
          name: "attempt-to-finish-input-method-installation",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: {
            name: "bundle_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "dump-state",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: {
            name: "component",
            suggestions: ["figterm", "web-notifications"],
          },
        },
        {
          name: "finish-update",
          options: [
            {
              name: "--delete-bundle",
              isRepeatable: true,
              args: {
                name: "delete_bundle",
                isOptional: true,
              },
            },
            {
              name: "--relaunch-dashboard",
            },
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "swap-files",
          options: [
            {
              name: "--not-same-bundle-name",
            },
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: [
            {
              name: "from",
              template: "filepaths",
            },
            {
              name: "to",
              template: "filepaths",
            },
          ],
        },
        {
          name: "brew-uninstall",
          options: [
            {
              name: "--zap",
            },
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "generate-ssh",
          description: "Generates an SSH configuration file",
          options: [
            {
              name: "--remote-host",
              description: "The remote host",
              isRepeatable: true,
              args: {
                name: "remote_host",
                isOptional: true,
              },
            },
            {
              name: "--remote-port",
              description: "The remote port",
              isRepeatable: true,
              args: {
                name: "remote_port",
                isOptional: true,
              },
            },
            {
              name: "--remote-username",
              description: "The remote username",
              isRepeatable: true,
              args: {
                name: "remote_username",
                isOptional: true,
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
        },
        {
          name: "inline-shell-completion",
          options: [
            {
              name: "--buffer",
              isRepeatable: true,
              args: {
                name: "buffer",
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "inline-shell-completion-accept",
          options: [
            {
              name: "--buffer",
              isRepeatable: true,
              args: {
                name: "buffer",
              },
            },
            {
              name: "--suggestion",
              isRepeatable: true,
              args: {
                name: "suggestion",
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "pre-cmd",
              description:
                "Command that is run during the PreCmd section of the Q integrations",
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
              description: "Install Q cli",
            },
            {
              name: "uninstall",
              description: "Uninstall Q cli",
            },
            {
              name: "get-shell",
            },
            {
              name: "hostname",
            },
            {
              name: "should-figterm-launch",
              description: "Detects if Figterm should be launched",
            },
            {
              name: "event",
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
              name: "open-uninstall-page",
            },
            {
              name: "ssh-local-command",
              description:
                "Displays prompt to install remote shell integrations",
            },
            {
              name: "prompt-ssh",
              description:
                "\\[Deprecated\\] Displays prompt to install remote shell integrations",
            },
            {
              name: "attempt-to-finish-input-method-installation",
            },
            {
              name: "dump-state",
            },
            {
              name: "finish-update",
            },
            {
              name: "swap-files",
            },
            {
              name: "brew-uninstall",
            },
            {
              name: "generate-ssh",
              description: "Generates an SSH configuration file",
            },
            {
              name: "inline-shell-completion",
            },
            {
              name: "inline-shell-completion-accept",
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "launch",
      description: "Launch the desktop app",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "quit",
      description: "Quit the desktop app",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "restart",
      description: "Restart the desktop app",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "process",
        isOptional: true,
        suggestions: [
          {
            name: "app",
            description: "Desktop Process",
          },
        ],
      },
    },
    {
      name: "onboarding",
      description: "Run the tutorial",
      hidden: true,
      options: [
        {
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
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
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help (see more with '--help')",
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
                  {
                    name: "nu",
                    description: "Nu shell",
                  },
                ],
              },
            },
            {
              name: "ssh",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "input-method",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "vscode",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: ["intellij-plugin", "jetbrains-plugin"],
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "all",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
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
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij-plugin",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help (see more with '--help')",
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
                  {
                    name: "nu",
                    description: "Nu shell",
                  },
                ],
              },
            },
            {
              name: "ssh",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "input-method",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "vscode",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: ["intellij-plugin", "jetbrains-plugin"],
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "all",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
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
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij-plugin",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "reinstall",
          subcommands: [
            {
              name: "dotfiles",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help (see more with '--help')",
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
                  {
                    name: "nu",
                    description: "Nu shell",
                  },
                ],
              },
            },
            {
              name: "ssh",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "input-method",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "vscode",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: ["intellij-plugin", "jetbrains-plugin"],
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "all",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
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
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij-plugin",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
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
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help (see more with '--help')",
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
                  {
                    name: "nu",
                    description: "Nu shell",
                  },
                ],
              },
            },
            {
              name: "ssh",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "input-method",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "vscode",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: ["intellij-plugin", "jetbrains-plugin"],
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "all",
              options: [
                {
                  name: ["-v", "--verbose"],
                  description: "Increase logging verbosity",
                  isRepeatable: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
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
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij-plugin",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
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
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij-plugin",
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
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij-plugin",
                },
                {
                  name: "all",
                },
              ],
            },
            {
              name: "reinstall",
              subcommands: [
                {
                  name: "dotfiles",
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
                  name: "intellij-plugin",
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
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij-plugin",
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: ["translate", "ai"],
      description: "Natural Language to Shell translation",
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "disable",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "status",
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
              name: ["-v", "--verbose"],
              description: "Increase logging verbosity",
              isRepeatable: true,
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
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
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "version",
      description: "Version",
      hidden: true,
      options: [
        {
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "dashboard",
      description: "Open the dashboard",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "chat",
      description: "AI assistant in your terminal",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "Increase logging verbosity",
          isRepeatable: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "input",
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
          hidden: true,
          subcommands: [
            {
              name: "onboarding",
              description: "Run the tutorial again",
            },
            {
              name: "running",
              description: "Check if the desktop app is running",
            },
            {
              name: "launch",
              description: "Launch the desktop app",
            },
            {
              name: "restart",
              description: "Restart the desktop app",
            },
            {
              name: "quit",
              description: "Quit the desktop app",
            },
            {
              name: "uninstall",
              description: "Uninstall the desktop app",
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
            {
              name: "clear-autocomplete-cache",
            },
          ],
        },
        {
          name: "debug",
          description: "Debug the app",
          subcommands: [
            {
              name: "app",
              description: "Debug the app",
            },
            {
              name: "build",
              description: "Switch to another branch of a Fig.js app",
            },
            {
              name: "autocomplete-window",
              description: "Toggle/set autocomplete window debug mode",
            },
            {
              name: "logs",
              description: "Show debug logs",
            },
            {
              name: "input-method",
              description: "Input method debugger",
              subcommands: [
                {
                  name: "install",
                },
                {
                  name: "uninstall",
                },
                {
                  name: "list",
                },
                {
                  name: "status",
                },
                {
                  name: "source",
                },
              ],
            },
            {
              name: "prompt-accessibility",
              description: "Prompt accessibility",
            },
            {
              name: "sample",
              description: "Sample desktop process",
            },
            {
              name: "verify-codesign",
              description: "Debug application codesigning",
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
              name: "get-index",
              description: "Displays remote index",
            },
            {
              name: "list-intellij-variants",
              description: "Lists installed IntelliJ variants",
            },
            {
              name: "shell",
              description:
                "Disables sourcing of user shell config and instead uses a minimal shell config",
            },
          ],
        },
        {
          name: "settings",
          description: "Customize appearance & behavior",
          subcommands: [
            {
              name: "open",
              description: "Open the settings file",
            },
            {
              name: "all",
              description: "List all the settings",
            },
          ],
        },
        {
          name: "install",
          description: "Install cli components",
        },
        {
          name: "uninstall",
          description: "Uninstall Q",
          hidden: true,
        },
        {
          name: "update",
          description: "Update the Q application",
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
          name: "theme",
          description: "Get or set theme",
        },
        {
          name: "issue",
          description: "Create a new Github issue",
        },
        {
          name: "login",
          description: "Login",
        },
        {
          name: "logout",
          description: "Logout",
        },
        {
          name: "whoami",
          description: "Prints details about the current user",
        },
        {
          name: "user",
          description: "Manage your account",
          subcommands: [
            {
              name: "login",
              description: "Login",
            },
            {
              name: "logout",
              description: "Logout",
            },
            {
              name: "whoami",
              description: "Prints details about the current user",
            },
          ],
        },
        {
          name: "doctor",
          description: "Fix and diagnose common issues",
        },
        {
          name: "completion",
          description: "Generate CLI completion spec",
          hidden: true,
        },
        {
          name: "internal",
          description: "Internal subcommands",
          hidden: true,
          subcommands: [
            {
              name: "pre-cmd",
              description:
                "Command that is run during the PreCmd section of the Q integrations",
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
              description: "Install Q cli",
            },
            {
              name: "uninstall",
              description: "Uninstall Q cli",
            },
            {
              name: "get-shell",
            },
            {
              name: "hostname",
            },
            {
              name: "should-figterm-launch",
              description: "Detects if Figterm should be launched",
            },
            {
              name: "event",
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
              name: "open-uninstall-page",
            },
            {
              name: "ssh-local-command",
              description:
                "Displays prompt to install remote shell integrations",
            },
            {
              name: "prompt-ssh",
              description:
                "\\[Deprecated\\] Displays prompt to install remote shell integrations",
            },
            {
              name: "attempt-to-finish-input-method-installation",
            },
            {
              name: "dump-state",
            },
            {
              name: "finish-update",
            },
            {
              name: "swap-files",
            },
            {
              name: "brew-uninstall",
            },
            {
              name: "generate-ssh",
              description: "Generates an SSH configuration file",
            },
            {
              name: "inline-shell-completion",
            },
            {
              name: "inline-shell-completion-accept",
            },
          ],
        },
        {
          name: "launch",
          description: "Launch the desktop app",
        },
        {
          name: "quit",
          description: "Quit the desktop app",
        },
        {
          name: "restart",
          description: "Restart the desktop app",
        },
        {
          name: "onboarding",
          description: "Run the tutorial",
          hidden: true,
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
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij-plugin",
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
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij-plugin",
                },
                {
                  name: "all",
                },
              ],
            },
            {
              name: "reinstall",
              subcommands: [
                {
                  name: "dotfiles",
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
                  name: "intellij-plugin",
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
                  name: "ssh",
                },
                {
                  name: "input-method",
                },
                {
                  name: "vscode",
                },
                {
                  name: "intellij-plugin",
                },
                {
                  name: "all",
                },
              ],
            },
          ],
        },
        {
          name: "translate",
          description: "Natural Language to Shell translation",
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
          name: "version",
          description: "Version",
          hidden: true,
        },
        {
          name: "dashboard",
          description: "Open the dashboard",
        },
        {
          name: "chat",
          description: "AI assistant in your terminal",
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
      name: ["-v", "--verbose"],
      description: "Increase logging verbosity",
      isRepeatable: true,
    },
    {
      name: "--help-all",
      description: "Print help for all subcommands",
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
};

export default completion;
