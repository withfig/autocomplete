const completionSpec: Fig.Spec = {
  name: "luz",
  description: "A next-generation build system for Apple Darwin-based systems",
  subcommands: [
    {
      name: "build",
      description: "Build the target in the current directory",
      options: [
        {
          name: ["--help", "-h"],
          description: "Show help for the build command",
        },
        {
          name: ["--clean", "-c"],
          description: "Clean the build directory before building",
        },
      ],
    },
    {
      name: "gen",
      description: "Generate a new project",
      options: [
        {
          name: ["--help", "-h"],
          description: "Show help for the gen command",
        },
        {
          name: ["--type", "-t"],
          description: "The type of project to generate",
          args: {
            name: "type",
            suggestions: [
              {
                name: "tool",
                description: "A command-line tool",
                icon: "💻",
              },
              {
                name: "tweak",
                description: "A tweak",
                icon: "🛠",
              },
            ],
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for Luz",
    },
  ],
};
export default completionSpec;
