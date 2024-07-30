const completionSpec: Fig.Spec = {
  name: "artisan",
  description: "Laravel Artisan Command",
  generateSpec: async (_, executeShellCommand) => {
    var { stdout } = await executeShellCommand({
      command: "php",
      args: ["artisan", "list", "--format=json"],
    });
    const subcommands = [];

    try {
      const commandDefinition = JSON.parse(stdout);

      commandDefinition.commands
        .filter((command) => command.name !== "_complete")
        .map((command) => {
          subcommands.push({
            name: command.name,
            description: command.description,
            icon: "https://web.tinkerwell.app/img/laravel.3cab6a56.png",
            args: Object.keys(command.definition.arguments).map(
              (argumentKey) => {
                const argument = command.definition.arguments[argumentKey];

                return {
                  name: argument.name,
                  description: argument.description,
                  isOptional: !argument.is_required,
                };
              }
            ),
            options: Object.keys(command.definition.options).map(
              (optionKey) => {
                const option = command.definition.options[optionKey];
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
      //
    }

    return {
      name: "artisan",
      debounce: true,
      subcommands,
    };
  },
};

export default completionSpec;
