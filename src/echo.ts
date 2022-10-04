const environmentVariableGenerator: Fig.Generator = {
  script: "env",
  postProcess: (out) =>
    out.length === 0
      ? []
      : out
          .split("\n")
          .map((env) => env.split("=")[0])
          .map((suggestion) => ({
            name: `$${suggestion}`,
            type: "arg",
            description: "Environment Variable",
          })),
};

const completionSpec: Fig.Spec = {
  name: "echo",
  description: "Write arguments to the standard output",
  args: {
    name: "string",
    isVariadic: true,
    optionsCanBreakVariadicArg: false,
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
