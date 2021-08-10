const completionSpec: Fig.Spec = {
  name: "bat",
  description: "concatenate and print files",
  args: {
    isVariadic: true,
    template: "filepaths",
  },
};

export default completionSpec;
