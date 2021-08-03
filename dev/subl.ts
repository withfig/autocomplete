const completionSpec: Fig.Spec = {
  name: "subl",
  description: "Sublime Text",
  args: {
    variadic: true,
    template: ["folders", "filepaths"],
  },
};

export default completionSpec;
