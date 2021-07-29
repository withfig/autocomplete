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

const SETTINGS_GENERATOR: Record<string, Fig.Generator> = {
  "autocomplete.devCompletionsFolder": devCompletionsFolderGenerator,
  "autocomplete.disableForCommands": disableForCommandsGenerator,
};

interface GithubApiResult {
  tree: Array<{
    path: string;
    type: "blob" | "tree";
  }>;
}

const themeGenerator: Fig.Generator = {
  custom: async (_, executeShellCommand) => {
    try {
      const output = await executeShellCommand(
        'curl -s -H "Accept: application/json" "https://api.github.com/repos/withfig/themes/git/trees/main?recursive=1"'
      );
      const builtInThemes = ((JSON.parse(
        await executeShellCommand(`cat ${SETTINGS_PATH}`)
      ) as Settings[])?.find((e) => e.settingName === "autocomplete.theme")
        ?.options ?? []) as string[];

      const result = JSON.parse(output) as GithubApiResult;
      const themes = result.tree.filter(
        (item) => item.type === "blob" && item.path.startsWith("themes/")
      );
      return [
        ...themes.map((theme) => {
          const name = theme.path.replace("themes/", "").replace(".json", "");
          return {
            name,
            icon: "fig://icon?type=box",
          };
        }),
        ...builtInThemes.map((theme) => ({
          name: theme,
          icon: "fig://icon?type=box",
        })),
      ];
    } catch (e) {
      return [];
    }
  },
};

export const completionSpec: Fig.Spec = {
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
      description: "Set the theme",
      args: {
        name: "theme",
        generators: themeGenerator,
      },
    },
    {
      name: "settings",
      description: "Update preferences",
      generateSpec: async (_, executeShellCommand) => {
        const settings: Settings[] = JSON.parse(
          await executeShellCommand(`cat ${SETTINGS_PATH}`)
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
                  suggestions,
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
      description: "Create a new Github issue in withfig/fig",
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
  ],

  options: [
    {
      name: ["-h", "--help"],
      description: "Overview of Fig CLI",
    },
    {
      name: ["--version"],
      description: "The current Fig version",
    },
  ],
};
