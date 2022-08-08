const completionSpec: Fig.Spec = {
  name: "copyfile",
  description: "Copies the contents of a file to the clipboard",
  args: {
    name: "file",
    template: "filepaths",
  },
};

export default completionSpec;
