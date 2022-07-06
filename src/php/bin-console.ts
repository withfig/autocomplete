const completionSpec: Fig.Spec = {
  name: "bin-console",
  description: "Symfony bin/console command",
  generateSpec: async (tokens, executeShellCommand) => {
    const out = await executeShellCommand("php bin/console list --format=json");
    let subcommands = [];

    try {
      const commandDefinitions = JSON.parse(out);

      subcommands = commandDefinitions.commands
        .filter((command) => command.name !== "_complete")
        .map((command) => ({
          name: command.name,
          description: command.description,
          icon: "https://cdn.iconscout.com/icon/free/png-128/symfony-282493.png",
          args: command.definition.arguments.map((argumentKey) => {
            const argument = command.definition.arguments[argumentKey];

            return {
              name: argument.name,
              description: argument.description,
              isOptional: !argument.is_required,
            };
          }),
          options: command.definition.options.map((optionKey) => {
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
        }));
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
