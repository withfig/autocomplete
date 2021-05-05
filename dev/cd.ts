export const completionSpec: Fig.Spec = {
  name: "cd",
  description: "Change the shell working directory.",
  args: {
    template: "folders",

    // Add an additional hidden suggestion so users can execute on it if they want to
    suggestions: [
      {
        name: "-",
        description: "switch to the last used folder",
        hidden: true,
      },
    ],
  },
};
