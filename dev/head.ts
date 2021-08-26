const completionSpec: Fig.Spec = {
  name: "head",
  description: "output the first part of files",
  args: {
    name: "file",
    template: "filepaths",
  },
  options: [
    {
      name: ["-c", "--bytes"],
      description: "print the first [numBytes] bytes of each file",
      args: { name: "numBytes" },
    },
    {
      name: ["-n", "--lines"],
      description: "print the first [numLines] lines instead of the first 10",
      args: { name: "numLines" },
    },
    {
      name: ["-q", "--quiet", "--silent"],
      description: "never print headers giving file names",
    },
    {
      name: ["-v", "--verbose"],
      description: "always print headers giving file names",
    },
    { name: "--help", description: "display this help and exit" },
    {
      name: "--version",
      description: "output version information and exit",
    },
  ],
};

export default completionSpec;
