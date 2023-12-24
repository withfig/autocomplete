interface DrushArgument {
  name: string;
  is_required: boolean;
  is_array: boolean;
  description: string;
  default: null | string | Array<string>;
}

interface DrushOption {
  name: string;
  shortcut: string;
  accept_value: boolean;
  is_value_required: boolean;
  is_multiple: boolean; // isRepeatable in fig
  description: string;
  default: null | boolean; // not supported by fig
}

interface DrushCommandDefinition {
  arguments: Record<string, DrushArgument>;
  options: Record<string, DrushOption>;
}

interface DrushCommand {
  name: string;
  usage: string[];
  description: string;
  help: string;
  definition: DrushCommandDefinition;
}

interface DrushListOutput {
  commands: DrushCommand[];
}

const completionSpec: Fig.Spec = {
  name: "drush",
  description:
    "Drush is a command line shell and Unix scripting interface for Drupal",
  generateSpec: async (tokens, executeShellCommand) => {
    const { stdout: jsonList } = await executeShellCommand({
      command: "drush",
      // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
      args: ["--format=json"],
    });
    const subcommands: Fig.Subcommand[] = [];

    try {
      const data: DrushListOutput = JSON.parse(jsonList);
      for (const command of data.commands) {
        subcommands.push({
          name: command.name,
          description: command.description,

          args: Object.keys(command.definition.arguments).map((argKey) => {
            const arg = command.definition.arguments[argKey];
            const argDefault = arg.default
              ? Array.isArray(arg.default)
                ? arg.default[0]
                : arg.default
              : undefined;

            return {
              name: arg.name,
              description: arg.description,
              isOptional: !arg.is_required,
              default: argDefault,
              isVariadic: arg.is_array,
            };
          }),

          options: Object.keys(command.definition.options).map((optionKey) => {
            const option = command.definition.options[optionKey];
            const names = [option.name];

            const shortCut = option.shortcut;
            if (shortCut.trim().length > 0) {
              names.push(shortCut);
            }

            return {
              name: names,
              description: option.description,
              isRequired: option.is_value_required,
              args: option.accept_value ? {} : undefined,
              isRepeatable: option.is_multiple,
            };
          }),
        });
      }
    } catch (err) {
      console.error(err);
    }

    return {
      name: "drush",
      subcommands,
    };
  },
};
export default completionSpec;
