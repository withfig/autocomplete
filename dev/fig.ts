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

export const completionSpec: Fig.Spec = {
  name: "fig",
  description: "Autocomplete for your terminal",
  subcommands: [
    {
      name: "source",
      description: "(re)connect fig to the current shell session",
    },
    { name: "update", description: "update completion specs" },
    {
      name: "settings",
      description: "update preferences",
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
      name: "uninstall",
      description: "uninstall a completion spec",
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
      description: "share Fig with a teammate ⭐",
      icon: "fig://icon?type=invite",
    },
    { name: "report", description: "report an issue" },
    {
      name: "tweet",
      description: "tweet about Fig",
      icon: "fig://icon?type=twitter",
    },
    { name: "docs", description: "view docs in browser" },
    { name: "list", description: "list all available completion specs" },
    { name: "onboarding", description: "re-run Fig's onboarding" },
    { name: "diagnostic", description: "display diagnostic information" },
    {
      name: "issue",
      description: "create a new Github issue in withfig/fig",
      icon: "fig://icon?type=github",
    },

    { name: "quit", description: "quit the Fig application" },

    {
      name: "team:upload",
      description: "share an completion spec with your team",
      args: {
        name: "spec",
        template: "filepaths",
      },
    },
    { name: "team:download", description: "download your team's spec" },
    {
      name: "integrations:iterm",
      description: "Install the iTerm tab integration",
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
