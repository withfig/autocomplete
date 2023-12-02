interface BinConsoleJSON {
  commands: {
    name: string;
    description: string;
    hidden: boolean;
    help: string;
    definition: {
      arguments:
        | []
        | Record<
            string,
            {
              name: string;
              is_required: boolean;
              description: string;
              is_array: boolean;
            }
          >;
      options:
        | []
        | Record<
            string,
            {
              name: string;
              accept_value: boolean;
              shortcut: string;
              is_value_required: boolean;
              is_multiple: boolean;
              description: string;
            }
          >;
    };
  }[];
}
const completionSpec: Fig.Spec = {
  name: "bin-console",
  description: "Symfony bin/console command",
  generateSpec: async (_, executeShellCommand) => {
    const { stdout } = await executeShellCommand({
      command: "php",
      args: ["bin/console", "list", "--format=json"],
    });
    let subcommands = [];

    try {
      const commandDefinitions = JSON.parse(stdout) as BinConsoleJSON;

      subcommands = commandDefinitions.commands.map((command) => ({
        name: command.name,
        description: command.description,
        icon: "https://cdn.iconscout.com/icon/free/png-128/symfony-282493.png",
        hidden: command.hidden || false,
        args: Object.values(command.definition.arguments).map((argument) => {
          return {
            name: argument.name,
            description: argument.description,
            isOptional: !argument.is_required,
          };
        }),
        options: Object.values(command.definition.options).map((option) => {
          const name = [option.name];

          if (option.shortcut !== "") {
            name.push(option.shortcut);
          }

          const args: Fig.Arg[] = [];
          if (option.accept_value) {
            args.push({
              name: "arg",
              isVariadic: option.is_multiple,
              isOptional: !option.is_value_required,
            });
          }

          return {
            name,
            args,
            description: option.description,
          };
        }),
      }));
    } catch (err) {
      // ignore
      console.error(err);
    }

    return {
      name: "bin-console",
      subcommands,
    };
  },
};

export default completionSpec;
