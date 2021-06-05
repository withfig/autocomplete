// use to complete on files when they are the first string in a branch

export const completionSpec: Fig.Spec = {
  name: "dotslash",
  args: {
    template: ["filepaths", "folders"],
  },
};
