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
        name: "GEMNAME",
        generators: gems,
        debounce: true,
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
