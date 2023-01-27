const environmentVariableGenerator: Fig.Generator = {
  custom: async (tokens, executeShellCommand) => {
    if (tokens.length < 3 || tokens[tokens.length - 1].startsWith("$")) {
      // TODO: this should use the shell context when it is available
      const output = await executeShellCommand("env");
      return output.length === 0
        ? []
        : output
            .split("\n")
            .map((env) => env.split("=")[0])
            .map((suggestion) => ({
              name: `$${suggestion}`,
              type: "arg",
              description: "Environment Variable",
            }));
    } else {
      return [];
    }
  },
  getQueryTerm: "$",
  trigger: "$",
};

const completionSpec: Fig.Spec = {
  name: "echo",
  description: "Write arguments to the standard output",
  args: {
    name: "string",
    isVariadic: true,
    optionsCanBreakVariadicArg: false,
    suggestCurrentToken: true,
    generators: environmentVariableGenerator,
  },
  options: [
    {
      name: "-n",
      description: "Do not print the trailing newline character",
    },
    {
      name: "-e",
      description: "Interpret escape sequences",
    },
    {
      name: "-E",
      description: "Disable escape sequences",
    },
  ],
};

export default completionSpec;
