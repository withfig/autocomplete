const getProjectsAndFolders = (paths) => {
  return paths.map((file) => {
    const isXcodeProjFolder = file.name.endsWith(".xcodeproj/");
    return {
      ...file,
      priority: isXcodeProjFolder && 76,
    };
  });
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
          generators: {
            template: "folders",
            filterTemplateSuggestions: getProjectsAndFolders,
          },
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
          requiresEquals: true,
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
          template: "filepaths",
        },
        {
          name: "PROJECT2",
          template: "filepaths",
        },
      ],
    },
    {
      description: "Shows an overview of a project in a YAML representation",
      name: "show",
      options: [
        {
          name: "--format",
          requiresEquals: true,
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
        template: "filepaths",
      },
    },
    {
      description: "Sorts the given project",
      name: "sort",
      options: [
        {
          name: "--group-option",
          requiresEquals: true,
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
        template: "filepaths",
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
            template: "filepaths",
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
