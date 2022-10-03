const gems: Fig.Generator = {
  trigger: () => true,
  custom: async (tokens, executeShellCommand) => {
    const searchTerm = tokens[tokens.length - 1];
    const out = await executeShellCommand(
      `gem search --both --no-versions --no-details --quiet --norc '${searchTerm.replace(
        "'",
        `'"'"'`
      )}'`
    );
    return out
      .trim()
      .split("\n")
      .filter((line) => line && !line.startsWith("*"))
      .map((name) => ({ name }));
  },
};

const completionSpec: Fig.Spec = {
  name: "gem",
  description: "Ruby package manager",
  subcommands: [
    {
      name: ["install", "i"],
      description: "Install a gem into the local repository",
      args: {
        name: "gem",
        generators: gems,
        debounce: true,
      },
    },
    {
      name: "outdated",
      description: "Display all gems that need updates",
    },
    {
      name: "update",
      description: "Update installed gems to the latest version",
      args: {
        name: "gems",
        description: "The gem(s) you want to update",
        isVariadic: true,
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for gem",
    },
  ],
};
export default completionSpec;
