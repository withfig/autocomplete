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
              default: unknown;
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
              default: unknown;
            }
          >;
    };
  }[];
}

const getEnvConfig = async (executeShellCommand) => {
  const command = "php -r 'print(json_encode(require \"app/etc/env.php\"));'";
  const out = await executeShellCommand(command);
  return JSON.parse(out);
};
const getCacheTypes = async (executeShellCommand) => {
  const env = await getEnvConfig(executeShellCommand);
  return Object.keys(env.cache_types);
};

const completionSpec: Fig.Spec = {
  name: "magento",
  description: "Open-source E-commerce",
  generateSpec: async (tokens, executeShellCommand) => {
    const { stdout } = await executeShellCommand({
      command: "bin/magento",
      args: ["list", "--format=json", "--raw"],
    });
    const magento = JSON.parse(stdout) as BinConsoleJSON;
    const cacheTypes = await getCacheTypes(executeShellCommand);

    return {
      name: "magento",
      description: "Open-source E-commerce",
      subcommands: magento.commands.map((command) => {
        return {
          name: command.name,
          description: command.description,
          args: Object.values(command.definition.arguments).map((argument) => {
            const suggestions = [];

            if (
              command.name.startsWith("cache:") &&
              argument.name === "types"
            ) {
              suggestions.push(...cacheTypes);
            }

            return {
              name: argument.name,
              description: argument.description,
              isOptional: !argument.is_required,
              default: argument.default?.toString() ?? "",
              isVariadic: argument.is_array,
              suggestions,
            };
          }),
          options: Object.values(command.definition.options).map((option) => {
            return {
              name: [option.name, ...(option.shortcut.split("|") || [])],
              description: option.description,
              isRequired: option.is_value_required,
              requiresEquals: option.accept_value,
            };
          }),
        };
      }),
    };
  },
};

export default completionSpec;
