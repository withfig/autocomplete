interface RegistryItem {
  name: string;
  dependencies: string[];
  files: string[];
  type: string;
}

const componentGenerator: Fig.Generator = {
  custom: async (_tokens, executeShellCommand) => {
    const { stdout } = await executeShellCommand({
      command: "curl",
      args: [
        "-sL",
        "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/registry/index.json",
      ],
    });
    const components = JSON.parse(stdout) as RegistryItem[];
    return components.map((component) => ({
      name: component.name,
      description: component.type,
      priority: 50,
      icon: "fig://icon?type=box",
    }));
  },
};

const completionSpec: Fig.Spec = {
  name: "shadcn-ui",
  description: "Shadcn UI CLI",
  subcommands: [
    {
      name: "add",
      description: "Add a component to your project",
      args: {
        name: "components",
        description: "The components to add",
        isVariadic: true,
        generators: componentGenerator,
      },
      options: [
        {
          name: ["-y", "--yes"],
          description: "Skip confirmation prompt",
        },
        {
          name: ["-o", "--overwrite"],
          description: "Overwrite existing files",
        },
        {
          name: ["-c", "--cwd"],
          description:
            "The working directory. defaults to the current directory",
          args: {
            name: "cwd",
          },
        },
        {
          name: ["-p", "--path"],
          description: "The path to add the component to",
          args: {
            name: "path",
          },
        },
      ],
    },
    {
      name: "diff",
      description: "Check for updates against the registry",
      args: {
        name: "component",
        description: "The component name",
        generators: componentGenerator,
      },
      options: [
        {
          name: ["-y", "--yes"],
          description: "Skip confirmation prompt",
        },
        {
          name: ["-c", "--cwd"],
          description:
            "The working directory. defaults to the current directory",
          args: {
            name: "cwd",
          },
        },
      ],
    },
    {
      name: "init",
      description: "Initialize your project and install dependencies",
      options: [
        {
          name: ["-y", "--yes"],
          description: "Skip confirmation prompt",
        },
        {
          name: ["-c", "--cwd"],
          description:
            "The working directory. defaults to the current directory",
          args: {
            name: "cwd",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
