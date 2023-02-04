const envVarGenerator: Fig.Generator = {
  //script: "amplify env list --json",
  script: "env",
  // testingggggggggggggg
  //test 2
  // test 3
  postProcess: function (output) {
    //const output = JSON.parse(out);
    return output.split("\n").map((env) => {
      return { name: env, description: "Environment Variable" };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "unset",
  description: "Named variable/function shall be undefined",
  args: {
    //what info does the variable to unset need to be defined by?
    name: "string",
    generators: envVarGenerator,
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
