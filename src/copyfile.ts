const completionSpec: Fig.Spec = {
  name: "copyfile",
  description:
    "Oh-My-Zsh plugin that copies the contents of a file to the clipboard",
  args: {
    name: "file",
    template: "filepaths",
  },
};

export default completionSpec;
