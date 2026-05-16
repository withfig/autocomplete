const completionSpec: Fig.Spec = {
  name: "xdg-open",
  description: "Opens a file or URL in the user's preferred application",
  args: {
    name: "FILE or URL",
    template: "filepaths",
  },
  options: [
    {
      name: "--help",
      description: "Show command synopsis",
    },
    {
      name: "--manual",
      description: "Show manual page",
    },
    {
      name: "--version",
      description: "Show the xdg-utils version information",
    },
  ],
};
export default completionSpec;
