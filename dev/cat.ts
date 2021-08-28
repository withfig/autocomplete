const completionSpec: Fig.Spec = {
  name: "cat",
  description: "Concatenate and print files",
  args: {
    isVariadic: true,
    template: "filepaths",
  },
};

export default completionSpec;
