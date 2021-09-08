const completionSpec: Fig.Spec = {
  name: "bat",
  description: "Concatenate and print files",
  args: {
    isVariadic: true,
    template: "filepaths",
  },
};

export default completionSpec;
