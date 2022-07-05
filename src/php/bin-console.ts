const completionSpec: Fig.Spec = {
  name: "bin-console",
  description: "Symfony bin/console command",
  generateSpec: async (tokens, executeShellCommand) => {
    const out = await executeShellCommand("php bin/console list --format=json");
    const subcommands = [];

    try {
      const commandDefinitions = JSON.parse(out);

      commandDefinitions.commands.map((command) => {
        if (command.name === "_complete") {
          return;
        }

        subcommands.push({
          name: command.name,
          description: command.description,
          icon: "https://cdn.iconscout.com/icon/free/png-128/symfony-282493.png",
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
      // ignore
    }

    return {
      name: "bin-console",
      debounce: true,
      subcommands,
    };
  },
};

export default completionSpec;
