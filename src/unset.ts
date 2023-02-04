const environmentVariableGenerator: Fig.Generator = {
  script: "env",
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
  description: "Named variable/function shall be undefined",
  args: {
    //what info does the variable to unset need to be defined by?
    name: "string",
    generators: environmentVariableGenerator,
  },
  options: [
    {
      name: "-v",
      description: "Variable definition will be unset",
    },
    {
      name: "-f",
      description: "Function definition will be unset",
    },
  ],
};
export default completionSpec;
//export to be compiled properly
