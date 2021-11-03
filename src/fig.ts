const SETTINGS_PATH = "~/.fig/tools/all-settings.json";

interface Settings {
  settingName: string;
  description: string;
  type: "boolean" | "text" | "single_select" | "multiselect";
  options?: Array<string | { name: string; description: string }>;
  default?: string;
}

const devCompletionsFolderGenerator: Fig.Generator = {
  script: 'ls -d -1 "$PWD/"**/',
  postProcess: (out) =>
    out.split("\n").map((folder) => {
      const paths = folder.split("/");
      paths.pop();

      return {
        name: paths.pop(),
        insertValue: folder,
        icon: `fig://${folder}`,
      };
    }),
};

const disableForCommandsGenerator: Fig.Generator = {
  script: "fig settings autocomplete.disableForCommands",
  postProcess: (out) => {
    const existing = out.split("\n").filter((item) => item.length > 0);

    const append: Fig.Suggestion = {
      name: "Disable...",
      icon: "fig://icon?type=box",
      insertValue: JSON.stringify(existing.concat(["{cursor}"])),
    };

    const enabledAll: Fig.Suggestion = {
      name: "Enable all commands",
      icon: "fig://icon?type=box",
      insertValue: "[]",
    };

    return [append, enabledAll].concat(
      existing.map((disabledCommand) => {
        return {
          name: `Enable ${disabledCommand}`,
          icon: "fig://icon?type=box",
          insertValue: JSON.stringify(
            existing.filter((cmd) => cmd != disabledCommand)
          ),
        };
      })
    );
  },
};

const themesGenerator: Fig.Generator = {
  script: "ls -1 ~/.fig/themes",
  postProcess: (output) => {
    const builtinThemes = [
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
      .map((theme) => ({ name: theme.replace(".json", "") }))
      .concat(builtinThemes);
  },
};

const SETTINGS_GENERATOR: Record<string, Fig.Generator> = {
  "autocomplete.devCompletionsFolder": devCompletionsFolderGenerator,
  "autocomplete.disableForCommands": disableForCommandsGenerator,
  "autocomplete.theme": themesGenerator,
};

const completionSpec: Fig.Spec = (version: string): Fig.Spec => {
  if (!version.includes("fig version")) {
    // Old CLI compleation spec
    return {
      name: "fig",
      description: "Autocomplete for your terminal",
      subcommands: [
        {
          name: "source",
          description: "(Re)connect fig to the current shell session",
        },
        { name: "update", description: "Update completion specs and app" },
        {
          name: "theme",
          description: "Set the Theme of fig",
          args: {
            name: "theme",
            generators: themesGenerator,
          },
        },
        {
          name: "settings",
          description: "Update preferences",
          generateSpec: async (_, executeShellCommand) => {
            const settings: Settings[] = JSON.parse(
              await executeShellCommand(`\cat ${SETTINGS_PATH}`)
            );

            return {
              name: "settings",
              subcommands: settings.map(
                ({
                  settingName: name,
                  description,
                  type,
                  options,
                  default: defaultValue,
                }) => {
                  const suggestions =
                    type === "boolean"
                      ? ["true", "false"]
                      : options?.map((option) => ({
                          name: option["name"] || option,
                          description: option["description"] || "",
                        }));
                  const insertValue =
                    type === "multiselect" ? `${name} '{cursor}'` : undefined;

                  const generators = SETTINGS_GENERATOR[name];

                  return {
                    name,
                    description,
                    icon: "fig://icon?type=commandkey",
                    insertValue,
                    args: {
                      name: type,
                      default: defaultValue,
                      suggestions: generators ? [] : suggestions,
                      generators,
                    },
                  };
                }
              ),
            };
          },
        },
        {
          name: "remove",
          description: "Remove a completion spec",
          args: {
            name: "spec",
            description: "The CLI completion spec to remove",
            generators: {
              script: "ls -1Ap ~/.fig/autocomplete",
              postProcess: (data) => {
                console.log(data);
                const out = data.split("\n").reduce((acc, curr) => {
                  if (
                    [
                      ".gitignore",
                      "README.md",
                      "package.json",
                      "package-lock.json",
                    ].includes(curr)
                  )
                    return acc;
                  else {
                    acc.push({
                      name: curr.trim().split(".")[0],
                      icon: "fig://icon?type=box",
                    });
                    return acc;
                  }
                }, []);
                return out;
              },
            },
          },
        },
        {
          name: "invite",
          description: "Share Fig with a teammate ⭐",
          icon: "fig://icon?type=invite",
        },
        { name: "report", description: "Report an issue" },
        {
          name: "tweet",
          description: "Tweet about Fig",
          icon: "fig://icon?type=twitter",
        },
        { name: "docs", description: "View docs in browser" },
        { name: "list", description: "List all available completion specs" },
        { name: "onboarding", description: "Re-run Fig's onboarding" },
        { name: "diagnostic", description: "Display diagnostic information" },
        {
          name: "issue",
          description: "Create a new GitHub issue in withfig/fig",
          icon: "fig://icon?type=github",
        },
        { name: "quit", description: "Quit the Fig application" },
        {
          name: "team:upload",
          description: "Share an completion spec with your team",
          args: {
            name: "spec",
            template: "filepaths",
          },
        },
        { name: "team:download", description: "Download your team's spec" },
        {
          name: "integrations:iterm",
          description: "Install the iTerm tab integration",
        },
        {
          name: "set:path",
          description: "Sync your $PATH variable with Fig",
        },
        {
          name: "debug",
          // workaround to avoid showing immediate execute arrow from appearing when 'debug' is entered
          insertValue: "debug {cursor}",
          description: "Utilities that are helpful when things break",
          subcommands: [
            {
              name: "terminal",
              description:
                "Print out terminal configuration and environment variables",
            },
            {
              name: "app",
              description: "Run app executable directly in terminal",
            },
            {
              name: "sample",
              description:
                "Profile the Fig process to determine why it is hanging or locked",
            },
            {
              name: "prefs",
              description:
                "Overview of user-defined preferences (config, settings.json, defaults)",
            },
            {
              name: "logs",
              description: "View categorized logs for all subsystems",
              args: {
                name: "subsystem",
                isOptional: true,
                isVariadic: true,
                generators: {
                  script: "ls ~/.fig/logs",
                  trigger: (curr, prev) => {
                    // trigger on new token
                    return curr.length == 0 && prev.length > 0;
                  },
                  postProcess: (out, tokens) => {
                    const pivot = tokens.indexOf("logs");
                    const insertedLogFiles = tokens.slice(pivot);
                    return out
                      .split("\n")
                      .map((log) => {
                        return { name: log.replace(".log", "") };
                      })
                      .filter(
                        (suggestion) =>
                          !insertedLogFiles.includes(suggestion.name)
                      );
                  },
                },
              },
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Overview of Fig CLI",
        },
        {
          name: "--version",
          description: "The current Fig version",
        },
      ],
    };
  } else {
    // New CLI compleation spec
    return {
      name: "fig",
      description: "CLI to interact with Fig",
      subcommands: [
        {
          name: "app",
          description: "Manage your Fig app",
          subcommands: [
            {
              name: "install-and-upgrade",
              description: "Install and upgrade fig",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for install-and-upgrade",
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
          name: "contrib",
          description: "Contribute to Fig CLI",
          subcommands: [
            {
              name: "contributors",
              description: "List the contributors to Fig",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for contributors",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for contrib",
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
              args: {
                name: "subsystem",
                isOptional: true,
                isVariadic: true,
                generators: {
                  script: "ls ~/.fig/logs",
                  trigger: (curr, prev) => {
                    // trigger on new token
                    return curr.length == 0 && prev.length > 0;
                  },
                  postProcess: (out, tokens) => {
                    const pivot = tokens.indexOf("logs");
                    const insertedLogFiles = tokens.slice(pivot);
                    return out
                      .split("\n")
                      .map((log) => {
                        return { name: log.replace(".log", "") };
                      })
                      .filter(
                        (suggestion) =>
                          !insertedLogFiles.includes(suggestion.name)
                      );
                  },
                },
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
              name: "build",
              description: "Switch branch",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for build",
                  displayName: "help",
                },
              ],
            },
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
          description: "Manage Fig integrations",
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
          icon: "fig://icon?type=invite",
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
          icon: "fig://icon?type=github",
          description: "Create a new GitHub issue",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for issue",
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
          name: "settings",
          description: "Get or set a setting",
          generateSpec: async (_, executeShellCommand) => {
            const settings: Settings[] = JSON.parse(
              await executeShellCommand(`\cat ${SETTINGS_PATH}`)
            );

            return {
              name: "settings",
              subcommands: settings.map(
                ({
                  settingName: name,
                  description,
                  type,
                  options,
                  default: defaultValue,
                }) => {
                  const suggestions =
                    type === "boolean"
                      ? ["true", "false"]
                      : options?.map((option) => ({
                          name: option["name"] || option,
                          description: option["description"] || "",
                        }));
                  const insertValue =
                    type === "multiselect" ? `${name} '{cursor}'` : undefined;

                  const generators = SETTINGS_GENERATOR[name];

                  return {
                    name,
                    description,
                    icon: "fig://icon?type=commandkey",
                    insertValue,
                    args: {
                      name: type,
                      default: defaultValue,
                      suggestions: generators ? [] : suggestions,
                      generators,
                    },
                  };
                }
              ),
            };
          },
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
          description: "Connected to this terminal session",
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
          icon: "fig://icon?type=twitter",
          description: "Tweet about Fig",
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
              description: "Manage your Fig app",
              subcommands: [
                {
                  name: "install-and-upgrade",
                  description: "Install and upgrade fig",
                  options: [
                    {
                      name: ["--help", "-h"],
                      description: "Help for install-and-upgrade",
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
                  description:
                    "Generate the autocompletion script for powershell",
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
              name: "contrib",
              description: "Contribute to Fig CLI",
              subcommands: [
                {
                  name: "contributors",
                  description: "List the contributors to Fig",
                  options: [
                    {
                      name: ["--help", "-h"],
                      description: "Help for contributors",
                      displayName: "help",
                    },
                  ],
                },
              ],
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for contrib",
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
                  name: "build",
                  description: "Switch branch",
                  options: [
                    {
                      name: ["--help", "-h"],
                      description: "Help for build",
                      displayName: "help",
                    },
                  ],
                },
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
              description: "Manage Fig integrations",
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
              icon: "fig://icon?type=invite",
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
              icon: "fig://icon?type=github",
              description: "Create a new GitHub issue",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for issue",
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
              name: "settings",
              description: "Get or set a setting",
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
              description: "Connected to this terminal session",
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
              icon: "fig://icon?type=twitter",
              description: "Tweet about Fig",
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
  }
};

export default completionSpec;

// Function that returns the semantic version for a given CLI tool,
// then used to load up the relevant completion spec.
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand: Fig.ExecuteShellCommandFunction
) => {
  const version: string = await executeShellCommand("fig --version");
  return version;
};
