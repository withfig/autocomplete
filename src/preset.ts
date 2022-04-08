const commonOptions: Fig.Option[] = [
  {
    name: "--no-interaction",
    description: "Disable interactions",
  },
  {
    name: "--debug",
    description: "Display debug information instead of standard output",
  },
  {
    name: "--silent",
    description: "Do not print anything",
  },
];

const applyOptions: Fig.Option[] = [
  {
    name: ["--path", "-p"],
    description: "Path to a sub-directory in which to look for a preset",
  },
  {
    name: ["--tag", "-t"],
    description: "Branch or tag to use if the preset is a repository",
  },
  {
    name: "--no-ssh",
    description: "Do not use SSH when cloning repositories",
  },
  {
    name: "--no-cache",
    description: "Do not use the cached repository if it exists",
  },
];

const applyArguments: Fig.Arg[] = [
  {
    name: "resolvable",
    description: "Repository identifier or path to the preset",
    template: ["folders", "filepaths", "history"],
  },
  {
    name: "target-directory",
    description: "Directory in which to apply the preset",
    template: ["folders"],
    isOptional: true,
  },
];

const completionSpec: Fig.Spec = {
  name: "preset",
  description: "Elegant, ecosystem-agnostic scaffolding tool",
  subcommands: [
    {
      name: "apply",
      description: "Apply a preset",
      options: [...applyOptions, ...commonOptions],
      args: applyArguments,
    },
    {
      name: "init",
      description: "Create a new preset",
      options: commonOptions,
      args: {
        name: "target-directory",
        description: "Directory in which to apply the preset",
        template: ["folders"],
        isOptional: true,
      },
    },
  ],
  options: [
    ...commonOptions,
    ...applyOptions,
    {
      name: ["--help", "-h"],
      description: "Show help for preset",
    },
    {
      name: ["--version", "-v"],
      description: "Show the version number",
    },
  ],
  args: applyArguments, // `apply` is optional, so its arguments can be used directly
};

export default completionSpec;
