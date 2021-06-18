export const completionSpec: Fig.Spec = {
  name: "tailwindcss",
  description: "tailwindcss CLI tools",
  icon: "https://tailwindcss.com/favicon-32x32.png",
  options: [{ name: "--help", description: "Show help." }],
  subcommands: [
    {
      name: "help",
      description: "More information about the command.",
      args: {
        name: "command",
        suggestions: ["init", "build"],
      },
    },
    {
      name: "init",
      description: "Creates Tailwind config file. Default: tailwind.config.js.",
      args: {
        name: "filename",
        isOptional: true,
      },
      options: [
        {
          name: "-p",
          description: "Generate also a PostCSS config file.",
        },
        {
          name: "--full",
          description: "Generate a complete configuration file.",
        },
      ],
    },
    {
      name: "build",
      description: "Build CSS file.",
      args: {
        description: "Tailwind CSS file to compile.",
        template: "filepaths",
      },
      options: [
        {
          name: ["-o", "--output"],
          description: "Specify output file.",
          args: { name: "output file", template: "filepaths" },
        },
        {
          name: ["-c", "--config"],
          description: "Specify config file to use.",
          args: { name: "config file", template: "filepaths" },
        },
        {
          name: "--no-autoprefixer",
          description: "Don't add vendor prefixes using autoprefixer.",
        },
      ],
    },
  ],
};
