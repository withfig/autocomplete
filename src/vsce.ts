const completionSpec: Fig.Spec = {
  name: "vsce",
  description: "The Visual Studio Code Extension Manager",
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help for command",
    },
    {
      name: ["-V", "--version"],
      description: "Output the version number",
    },
  ],
};

export default completionSpec;
