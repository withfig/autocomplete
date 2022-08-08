const completionSpec: Fig.Spec = {
  name: "copypath",
  description:
    "Oh-My-Zsh plugin that copies the path of given directory or file to the clipboard",
  args: {
    name: "path",
    isOptional: true,
    template: ["filepaths", "folders"],
  },
};

export default completionSpec;
