const environmentVariableGenerator: Fig.Generator = {
  script: ["env"],
  postProcess: (out) =>
    out.length === 0
      ? []
      : out
          .split("\n")
          .map((env) => env.split("=")[0])
          .map((suggestion) => ({
            name: `${suggestion}`,
            type: "arg",
            description: "Environment Variable",
          })),
};

const completionSpec: Fig.Spec = {
  name: "unset",
  description: "Named variable shall be undefined",
  args: {
    name: "string",
    generators: environmentVariableGenerator,
  },
  options: [
    {
      name: "-v",
      description: "Variable definition will be unset",
    },
  ],
};
export default completionSpec;
