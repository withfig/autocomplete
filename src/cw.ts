export const themesGenerator: Fig.Generator = {
  script: ["cw", "theme", "--list"],
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
  name: "cw",
  description: "Top level cli commands",
  subcommands: [
    {
      name: "app",
      description: "Interact with the desktop app",
      subcommands: [
        {
          name: "install",
          description: "Install the CodeWhisperer app",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "onboarding",
          description: "Run the CodeWhisperer tutorial again",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "running",
          description: "Check if CodeWhisperer is running",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "launch",
          description: "Launch the CodeWhisperer desktop app",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "restart",
          description: "Restart the CodeWhisperer desktop app",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "quit",
          description: "Quit the CodeWhisperer desktop app",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "set-path",
          description: "Set the internal pseudo-terminal path",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstall the CodeWhisperer app",
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
              description: "Remove CodeWhisperer daemon",
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
              description: "Print help",
            },
          ],
        },
        {
          name: "prompts",
          description: "Prompts shown on terminal startup",
          options: [
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
              name: "install",
              description: "Install the CodeWhisperer app",
            },
            {
              name: "onboarding",
              description: "Run the CodeWhisperer tutorial again",
            },
            {
              name: "running",
              description: "Check if CodeWhisperer is running",
            },
            {
              name: "launch",
              description: "Launch the CodeWhisperer desktop app",
            },
            {
              name: "restart",
              description: "Restart the CodeWhisperer desktop app",
            },
            {
              name: "quit",
              description: "Quit the CodeWhisperer desktop app",
            },
            {
              name: "set-path",
              description: "Set the internal pseudo-terminal path",
            },
            {
              name: "uninstall",
              description: "Uninstall the CodeWhisperer app",
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
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "init",
          options: [
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
          description: "Print help",
        },
      ],
    },
    {
      name: "debug",
      description: "Debug CodeWhisperer",
      subcommands: [
        {
          name: "app",
          description: "Debug CodeWhisperer app",
          options: [
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
          description: "Show CodeWhisperer debug logs",
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
          description: "CodeWhisperer input method editor",
          subcommands: [
            {
              name: "install",
              options: [
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
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "status",
              options: [
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
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "sample",
          description: "Sample CodeWhisperer process",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "verify-codesign",
          description: "Debug CodeWhisperer codesign verification",
          options: [
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
              description: "Print help",
            },
          ],
        },
        {
          name: "devtools",
          description: "Open up the devtools of a specific webview",
          options: [
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
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "shell",
          description:
            "Disables sourcing of user shell config and instead uses a minimal CodeWhisperer default",
          options: [
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
              description: "Debug CodeWhisperer app",
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
              description: "Show CodeWhisperer debug logs",
            },
            {
              name: "input-method",
              description: "CodeWhisperer input method editor",
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
              description: "Sample CodeWhisperer process",
            },
            {
              name: "verify-codesign",
              description: "Debug CodeWhisperer codesign verification",
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
                "Disables sourcing of user shell config and instead uses a minimal CodeWhisperer default",
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
      name: "tips",
      description: "Enable/disable CodeWhisperer tips",
      subcommands: [
        {
          name: "enable",
          description: "Enable CodeWhisperer tips",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "disable",
          description: "Disable CodeWhisperer tips",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
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
              description: "Print help",
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
              name: "enable",
              description: "Enable CodeWhisperer tips",
            },
            {
              name: "disable",
              description: "Disable CodeWhisperer tips",
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
          description: "Print help",
        },
      ],
    },
    {
      name: "install",
      description: "Install CodeWhisperer cli components",
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
          description: "Force installation of CodeWhisperer",
        },
        {
          name: "--ssh",
          description: "Install only the ssh integration",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall CodeWhisperer",
      hidden: true,
      options: [
        {
          name: ["-y", "--no-confirm"],
          description: "Force uninstall",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "update",
      description: "Check for updates",
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
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "theme",
        isOptional: true,
        generators: {
          script: ["cw", "theme", "--list"],
          splitOn: "\n",
        },
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
      description: "Login to CodeWhisperer",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "logout",
      description: "Logout of CodeWhisperer",
      options: [
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
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: "user",
      description: "Manage your CodeWhisperer user",
      subcommands: [
        {
          name: "login",
          description: "Login to CodeWhisperer",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "logout",
          description: "Logout of CodeWhisperer",
          options: [
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
              description: "Login to CodeWhisperer",
            },
            {
              name: "logout",
              description: "Logout of CodeWhisperer",
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
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "doctor",
      description: "Check CodeWhisperer is properly configured",
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
          description: "Print help",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the completion spec for CodeWhisperer",
      hidden: true,
      options: [
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
      description: "Internal subcommands used for CodeWhisperer",
      hidden: true,
      subcommands: [
        {
          name: "pre-cmd",
          description:
            "Command that is run during the PreCmd section of the CodeWhisperer integrations",
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
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "open",
              description: "Open the state file",
              options: [
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
              description: "Print help",
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
              description: "Print help",
            },
          ],
        },
        {
          name: "get-shell",
          options: [
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
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "sockets-dir",
          options: [
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
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "figterm-socket-path",
          options: [
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
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "uuidgen",
          options: [
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
              name: "--verbose",
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
              name: "--relaunch-dashboard",
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
          name: "check-ssh",
          hidden: true,
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: {
            name: "remote_username",
          },
        },
        {
          name: "brew-uninstall",
          options: [
            {
              name: "--zap",
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
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: {
            name: "remote_username",
          },
        },
        {
          name: "ghost-text",
          options: [
            {
              name: "--buffer",
              isRepeatable: true,
              args: {
                name: "buffer",
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "ghost-text-accept",
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
              name: "check-ssh",
              hidden: true,
            },
            {
              name: "brew-uninstall",
            },
            {
              name: "generate-ssh",
              description: "Generates an SSH configuration file",
            },
            {
              name: "ghost-text",
            },
            {
              name: "ghost-text-accept",
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
          description: "Print help",
        },
      ],
    },
    {
      name: "launch",
      description: "Launch the CodeWhisperer desktop app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "quit",
      description: "Quit the CodeWhisperer desktop app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "restart",
      description: "Restart the CodeWhisperer desktop app",
      options: [
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
            name: "daemon",
            description: "Daemon process",
          },
          {
            name: "app",
            description: "CodeWhisperer process",
          },
        ],
      },
    },
    {
      name: "onboarding",
      description: "Run the CodeWhisperer tutorial",
      hidden: true,
      options: [
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
              name: "daemon",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "ssh",
              options: [
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
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "vscode",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "intellij-plugin",
              options: [
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
              name: "daemon",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "ssh",
              options: [
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
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "vscode",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "intellij-plugin",
              options: [
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
              name: "daemon",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "ssh",
              options: [
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
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "vscode",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "intellij-plugin",
              options: [
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
              name: "daemon",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "ssh",
              options: [
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
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "vscode",
              options: [
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "intellij-plugin",
              options: [
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
              name: "reinstall",
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
          description: "Print help",
        },
      ],
    },
    {
      name: ["ai", "q"],
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
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "disable",
          options: [
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
          description: "Print help",
        },
      ],
    },
    {
      name: "version",
      description: "Version",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "help-all",
      description: "Print help for all subcommands",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "dashboard",
      description: "Open the fig dashboard",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
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
              description: "Run the CodeWhisperer tutorial again",
            },
            {
              name: "running",
              description: "Check if CodeWhisperer is running",
            },
            {
              name: "launch",
              description: "Launch the CodeWhisperer desktop app",
            },
            {
              name: "restart",
              description: "Restart the CodeWhisperer desktop app",
            },
            {
              name: "quit",
              description: "Quit the CodeWhisperer desktop app",
            },
            {
              name: "set-path",
              description: "Set the internal pseudo-terminal path",
            },
            {
              name: "uninstall",
              description: "Uninstall the CodeWhisperer app",
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
          description: "Debug CodeWhisperer",
          subcommands: [
            {
              name: "app",
              description: "Debug CodeWhisperer app",
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
              description: "Show CodeWhisperer debug logs",
            },
            {
              name: "input-method",
              description: "CodeWhisperer input method editor",
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
              description: "Sample CodeWhisperer process",
            },
            {
              name: "verify-codesign",
              description: "Debug CodeWhisperer codesign verification",
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
                "Disables sourcing of user shell config and instead uses a minimal CodeWhisperer default",
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
          name: "uninstall",
          description: "Uninstall fig",
          hidden: true,
        },
        {
          name: "update",
          description: "Update dotfiles",
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
          description: "Login to CodeWhisperer",
        },
        {
          name: "logout",
          description: "Logout of CodeWhisperer",
        },
        {
          name: "whoami",
          description: "Prints details about the current user",
        },
        {
          name: "user",
          description: "Manage your fig user",
          subcommands: [
            {
              name: "login",
              description: "Login to CodeWhisperer",
            },
            {
              name: "logout",
              description: "Logout of CodeWhisperer",
            },
            {
              name: "whoami",
              description: "Prints details about the current user",
            },
          ],
        },
        {
          name: "doctor",
          description: "Check CodeWhisperer is properly configured",
        },
        {
          name: "completion",
          description: "Generate the completion spec for CodeWhisperer",
          hidden: true,
        },
        {
          name: "internal",
          description: "Internal subcommands used for CodeWhisperer",
          hidden: true,
          subcommands: [
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
              name: "check-ssh",
              hidden: true,
            },
            {
              name: "brew-uninstall",
            },
            {
              name: "generate-ssh",
              description: "Generates an SSH configuration file",
            },
            {
              name: "ghost-text",
            },
            {
              name: "ghost-text-accept",
            },
          ],
        },
        {
          name: "launch",
          description: "Launch the CodeWhisperer desktop app",
        },
        {
          name: "quit",
          description: "Quit the CodeWhisperer desktop app",
        },
        {
          name: "restart",
          description: "Restart the CodeWhisperer desktop app",
        },
        {
          name: "onboarding",
          description: "Run the CodeWhisperer tutorial",
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
              name: "reinstall",
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
      description: "Print help",
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
};

export default completion;
