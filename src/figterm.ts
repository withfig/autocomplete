const completionSpec: Fig.Spec = {
  name: "figterm",
  description: "Fig's terminal layer",
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help information",
    },
    {
      name: ["--version", "-v"],
      description: "Print version information",
    },
  ],
};

export default completionSpec;
