const completionSpec: Fig.Spec = {
  name: "less",
  description: "opposite of more",
  args: {
    isVariadic: true,
    template: "filepaths",
  },
};

export default completionSpec;
