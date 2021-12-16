const completionSpec: Fig.Spec = {
  name: "sips",
  description: "Scriptable image processing system",
  args: {
    name: "file",
    template: "filepaths",
  },
  options: [
    {
      name: "--debug",
      description: "Enable debugging output",
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
    {
      name: ["-H", "--helpProperties"],
      description: "Show help for properties",
    },
    {
      name: "--man",
      description: "Generate man pages",
    },
    {
      name: ["-v", "--version"],
      description: "Show the version",
    },
    {
      name: "--formats",
      description: "Show the read/write formats",
    },
  ],
};

export default completionSpec;
