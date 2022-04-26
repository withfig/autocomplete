const projectsAndFoldersGenerator: Fig.Generator = {
  template: "folders",
  filterTemplateSuggestions: (paths) => {
    return paths.map((file) => {
      const isXcodeProjFolder = file.name.endsWith(".xcodeproj/");
      return {
        ...file,
        priority: isXcodeProjFolder && 76,
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "xcodeproj",
  description: "Xcodeproj lets you create and modify Xcode projects",
  subcommands: [
    {
      description:
        "Dumps the build settings of all project targets for all configurations in directories named by the target in the given output directory",
      name: "config-dump",
      args: [
        {
          name: "PROJECT",
          isOptional: true,
          generators: projectsAndFoldersGenerator,
        },
        {
          name: "OUTPUT",
          isOptional: true,
          template: "folders",
        },
      ],
    },
    {
      description: "Shows the difference between two projects",
      name: "project-diff",
      options: [
        {
          name: "--ignore",
          requiresSeparator: true,
          isRepeatable: true,
          description:
            "A key to ignore in the comparison. Can be specified multiple times",
          args: {
            name: "KEY",
          },
        },
      ],
      args: [
        {
          name: "PROJECT1",
          generators: projectsAndFoldersGenerator,
        },
        {
          name: "PROJECT2",
          generators: projectsAndFoldersGenerator,
        },
      ],
    },
    {
      description: "Shows an overview of a project in a YAML representation",
      name: "show",
      options: [
        {
          name: "--format",
          requiresSeparator: true,
          description: "YAML output format",
          args: {
            name: "FORMAT",
            suggestions: ["hash", "tree_hash", "raw"],
          },
        },
      ],
      args: {
        name: "PROJECT",
        isOptional: true,
        generators: projectsAndFoldersGenerator,
      },
    },
    {
      description: "Sorts the given project",
      name: "sort",
      options: [
        {
          name: "--group-option",
          requiresSeparator: true,
          description:
            "The position of the groups when sorting. If no option is specified sorting will interleave groups and files",
          args: {
            name: "POSITION",
            suggestions: ["above", "below"],
          },
        },
      ],
      args: {
        name: "PROJECT",
        generators: projectsAndFoldersGenerator,
        isOptional: true,
      },
    },
    {
      description: "Shows the difference between two targets",
      name: "target-diff",
      options: [
        {
          name: "--project",
          description: "The Xcode project document to use",
          args: {
            name: "PATH",
            generators: projectsAndFoldersGenerator,
          },
        },
      ],
      args: [
        {
          name: "TARGET1",
        },
        {
          name: "TARGET2",
        },
      ],
    },
  ],
  options: [
    {
      name: "--verbose",
      icon: "🔊",
      isPersistent: true,
      description: "Show more debugging information",
    },
    {
      name: "--version",
      description: "Show the version of the tool",
    },
    {
      name: "--no-ansi",
      isPersistent: true,
      description: "Show output without ANSI codes",
    },
    {
      name: "--help",
      isPersistent: true,
      description: "Show help banner of specified command",
    },
  ],
};

export default completionSpec;
