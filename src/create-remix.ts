const completionSpec: Fig.Spec = {
  name: "create-remix",
  icon: "https://remix.run/favicon-light.1.png",
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help for command",
    },
    {
      name: ["-v", "--version"],
      description: "Display version for command",
    },
  ],
};

export default completionSpec;
