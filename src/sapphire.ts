const completionSpec: Fig.Spec = {
  name: "sapphire",
  description: "CLI for the Sapphire Framework",
  subcommands: [
    {
      name: ["new", "n"],
      priority: 100,
      description: "Creates a new Sapphire project",
      displayName: "Create a new Sapphire project 📂",
      args: {
        name: "name",
        description: "Project name",
        isOptional: true,
      },
      options: [
        {
          name: ["-v", "--verbose"],
          description: "Enable verbose logging",
        },
      ],
    },
    {
      name: ["generate", "g"],
      priority: 90,
      description: "Generates a component/piece",
      displayName: "Generate a component/piece 📄",
      args: [
        {
          name: "component",
          description: "Component/piece name",
        },
        {
          name: "name",
          description: "File name",
          template: "filepaths",
          suggestCurrentToken: true,
        },
      ],
    },
    {
      name: ["init", "i"],
      priority: 80,
      description: "Creates a config file on an existing Sapphire project",
      displayName: "Initalize CLI on an existing project ⚙️",
    },
    {
      name: "help",
      priority: 70,
      description: "Display help for command",
      displayName: "Display help for a command 📖",
      args: {
        name: "command",
        description: "Command to display help for",
        isOptional: true,
        template: "help",
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      priority: 10,
      description: "Show help for sapphire",
      isPersistent: true,
    },
    {
      name: ["--version", "-V"],
      priority: 1,
      description: "Output the version number",
    },
  ],
};
export default completionSpec;
