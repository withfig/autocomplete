const listTargets: Fig.Generator = {
  custom: async (tokens, executeShellCommand, context) => {
    const { stdout } = await executeShellCommand({
      command: "cat",
      // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
      args: [`${context.environmentVariables["HOME"]}/.config/goto`],
    });

    const targetSuggestions = new Map<string, Fig.Suggestion>();

    for (const target of stdout.split("\n")) {
      const splits = target.split(" ");
      targetSuggestions.set(target, {
        name: splits[0],
        description: "Goto " + splits[1],
        icon: "🔖",
        priority: 80,
      });
    }

    return [...targetSuggestions.values()];
  },
};

const completionSpec: Fig.Spec = {
  name: "goto",
  displayName: "Goto a Folder by alias",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for goto",
    },
    {
      name: ["--register", "-r"],
      description: "Registers an alias",
      isPersistent: true,
      args: [
        {
          name: "alias",
        },
        {
          name: "target",
          template: "folders",
        },
      ],
    },
    {
      name: ["--unregister", "-u"],
      description: "Unregister an alias",
      isPersistent: true,
      args: {
        name: "alias",
        isDangerous: true,
        generators: listTargets,
        filterStrategy: "prefix",
      },
    },
    {
      name: ["--push", "-p"],
      description:
        "Pushes the current directory onto the stack, then performs goto",
    },
    {
      name: ["--pop", "-o"],
      description:
        "Pops the top directory from the stack, then changes to that directory",
    },
    {
      name: ["--list", "-l"],
      description:
        "Pops the top directory from the stack, then changes to that directory",
    },
    {
      name: ["--expand", "-x"],
      description: "Expands an alias",
      args: {
        name: "alias",
        generators: listTargets,
      },
    },
    {
      name: ["--cleanup", "-c"],
      description: "Cleans up non existent directory aliases",
    },
    {
      name: ["--version", "-v"],
      description: "Displays the version of the goto script",
    },
  ],
  args: {
    name: "alias",
    generators: listTargets,
  },
};
export default completionSpec;
