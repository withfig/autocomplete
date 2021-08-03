const completionSpec: Fig.Spec = {
  name: "bat",
  description: "concatenate and print files",
  args: {
    variadic: true,
    template: "filepaths",
  },
};

export default completionSpec;
