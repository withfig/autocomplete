const completionSpec: Fig.Spec = {
  name: ".",
  description: "Source a file",
  args: {
    template: "filepaths",
    isScript: true,
  },
};

export default completionSpec;
