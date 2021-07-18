const completionSpec: Fig.Spec = {
  name: "less",
  description: "opposite of more",
  args: {
    variadic: true,
    template: "filepaths",
  },
};

export default completionSpec;
