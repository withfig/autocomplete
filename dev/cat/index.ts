const completionSpec: Fig.Spec = {
  name: "cat",
  description: "concatenate and print files",
  args: {
    isVariadic: true,
    template: "filepaths",
  },
};

export default completionSpec;
