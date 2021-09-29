const completionSpec: Fig.Spec = {
  name: "please",
  description: "Statamic Please command",
  generateSpec: async (tokens, executeShellCommand) => {
    const out = await executeShellCommand("php please list --format=json");
    const subcommands = [];

    try {
      const commandDefinition = JSON.parse(out);

      commandDefinition.commands.map((command) => {
        subcommands.push({
          name: command.name,
          description: command.description,

          args: Object.keys(command.definition.arguments).map((argumentKey) => {
            const argument = command.definition.arguments[argumentKey];

            return {
              name: argument.name,
              description: argument.description,
              isOptional: !argument.is_required,
            };
          }),
          options: Object.keys(command.definition.options).map((optionKey) => {
            const option = command.definition.options[optionKey];
            const names = [option.name];

            if (option.shortcut !== "") {
              names.push(option.shortcut);
            }

            return {
              name: names,
              description: option.description,
            };
          }),
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
