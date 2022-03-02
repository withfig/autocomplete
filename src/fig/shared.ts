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
      name: "Disable new CLI...",
      description: `You must pass a valid JSON array of CLI tools contained within single quotes. e.g. '["npm","cd","ls"]'`,
      icon: "fig://icon?type=box",
      insertValue: JSON.stringify(existing.concat(["{cursor}"])),
    };

    const enabledAll: Fig.Suggestion = {
      name: "Enable all commands",
      icon: "fig://icon?type=box",
      insertValue: "'[]'",
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

export const themesGenerator: Fig.Generator = {
  script: "ls -1 ~/.fig/themes",
  postProcess: (output) => {
    const builtinThemes = [
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
      .map((theme) => ({ name: theme.replace(".json", "") }))
      .concat(builtinThemes);
  },
};

export const SETTINGS_GENERATOR: Record<string, Fig.Generator> = {
  "autocomplete.devCompletionsFolder": devCompletionsFolderGenerator,
  "autocomplete.disableForCommands": disableForCommandsGenerator,
  "autocomplete.theme": themesGenerator,
};

export const subsystemsGenerator: Fig.Generator = {
  script: "\\ls ~/.fig/logs",
  trigger: (curr, prev) => {
    // trigger on new token
    return curr.length == 0 && prev.length > 0;
  },
  postProcess: (out, tokens) => {
    const pivot = tokens.indexOf("logs");
    const insertedLogFiles = tokens.slice(pivot);
    return out
      .split("\n")
      .map((log) => ({
        name: log.replace(".log", ""),
        icon: "🪵",
      }))
      .filter((suggestion) => !insertedLogFiles.includes(suggestion.name));
  },
};

export const settingsSpecGenerator = async (_, executeShellCommand) => {
  const settings: Settings[] = JSON.parse(
    await executeShellCommand(`\\cat ${SETTINGS_PATH}`)
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
        // const insertValue =
        // type === "multiselect" ? `${name} '{cursor}'` : undefined;

        const generators = SETTINGS_GENERATOR[name];

        return {
          name,
          description,
          icon: "fig://icon?type=commandkey",
          // insertValue,
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
};
export default {};
