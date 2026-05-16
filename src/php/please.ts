interface Argument {
  name: string;
  is_required: boolean;
  is_array: boolean;
  description: string;
  default: string;
}

interface Option {
  name: string;
  shortcut: string;
  accept_value: boolean;
  is_value_required: boolean;
  is_multiple: false;
  description: string;
  default: string;
}

const completionSpec: Fig.Spec = {
  name: "please",
  description: "Statamic Please command",
  generateSpec: async (tokens, executeShellCommand) => {
    const { stdout } = await executeShellCommand({
      command: "php",
      args: ["please", "list", "--format=json"],
    });
    const subcommands = [];

    try {
      const commandDefinition = JSON.parse(stdout);

      commandDefinition.commands.map((command) => {
        subcommands.push({
          name: command.name,
          description: command.description,

          args: Object.values(command.definition.arguments).map(
            (argument: Argument) => {
              return {
                name: argument.name,
                description: argument.description,
                isOptional: !argument.is_required,
              };
            }
          ),
          options: Object.values(command.definition.options).map(
            (option: Option) => {
              const names = [option.name];

              if (option.shortcut !== "") {
                names.push(option.shortcut);
              }

              return {
                name: names,
                description: option.description,
              };
            }
          ),
        });
      });
    } catch (err) {
      console.error(err);
    }

    return {
      name: "please",
      debounce: true,
      subcommands,
    };
  },
};

export default completionSpec;
