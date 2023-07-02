const completionSpec: Fig.Spec = {
  name: "shadcn-ui",
  description: "Add shadcn-ui components to your project",
  subcommands: [
    {
      name: "init",
      description: "Configure your Next.js project",
      options: [
        {
          name: ["--yes", "-y"],
          description: "Skip confirmation prompt",
        },
        {
          name: ["--help", "-h"],
          description: "Display help for command",
        },
      ],
    },
    {
      name: "add",
      description: "Add components to your project",
      args: {
        name: "component",
        description: "Names of components",
        isVariadic: true,
        generators: {
          script: "curl -s https://ui.shadcn.com/api/components",
          postProcess(out) {
            const registry = JSON.parse(out);
            if (!registry) {
              return [];
            }

            if (!Array.isArray(registry)) {
              return [];
            }

            if (
              registry.some((component) => typeof component.name !== "string")
            ) {
              return [];
            }

            return registry.map((component: { name: string }) => {
              const suggestion: Fig.Suggestion = {
                name: component.name,
              };

              return suggestion;
            });
          },
        },
      },
      options: [
        {
          name: ["--yes", "-y"],
          description: "Skip confirmation prompt",
        },
        {
          name: ["--overwrite", "-o"],
          description: "Overwrite existing files",
        },
        {
          name: ["--cwd", "-c"],
          description:
            "The working directory. defaults to the current directory",
        },
        {
          name: ["--path", "-p"],
          description: "The path to add the component to",
        },
        {
          name: ["--help", "-h"],
          description: "Display help for command",
        },
      ],
    },
    {
      name: "help",
      description: "Display help for command",
      subcommands: [
        {
          name: "my_nested_subcommand",
          description:
            "Nested subcommand, example usage: 'shadcn-ui my_subcommand my_nested_subcommand'",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--version", "-v"],
      description: "Display the version number",
    },
    {
      name: ["--help", "-h"],
      description: "Display help for command",
    },
  ],
  // Only uncomment if shadcn-ui takes an argument
  // args: {}
};

export default completionSpec;
