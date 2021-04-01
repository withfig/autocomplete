export const completionSpec: Fig.Spec = {
  name: "cd",
  description: "Change the shell working directory.",
  args: {
    template: "folders",
    suggestions: [{ name: "-", description: "switch to the last used folder" }],
  },
};
