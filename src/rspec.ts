const completionSpec: Fig.Spec = {
  name: "rspec",
  description:
    "Behaviour Driven Development for Ruby. Making TDD Productive and Fun",
  args: {
    name: "file",
    description: "The file to run",
    default: "./spec",
    generators: {
      template: ["filepaths", "folders"],
    },
  },
};

export default completionSpec;
