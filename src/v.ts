const completionSpec: Fig.Spec = {
  name: "v",
  description: "Vbuilder cli spec",
  subcommands: [
    {
      name: "deploy",
      description: "Deploy app",
      subcommands: [
        {
          name: "daily",
          description: "Deploy daily env",
        },
        {
          name: "pre",
          description: "Deploy pre env",
        },
      ],
    },
    {
      name: "run",
      description: "Build project",
      subcommands: [
        {
          name: "daily",
          description: "Build daily project",
        },
        {
          name: "pre",
          description: "Build pre project",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Vbuilder cli help",
    },
  ],
};
export default completionSpec;
