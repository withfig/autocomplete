const SCRIPT_KEYWORD = "    • ";

const scriptGenerator: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
  },
  script: {
    command: "vr",
    // eslint-disable-next-line @withfig/fig-linter/no-empty-array-values
    args: [],
    env: {
      NO_COLOR: "1",
    },
  },
  postProcess: (out) => {
    const suggestions: Fig.Suggestion[] = [];

    try {
      const lines = out.split("\n").filter(Boolean);

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!line.startsWith(SCRIPT_KEYWORD)) continue;

        suggestions.push({
          name: line.replace(SCRIPT_KEYWORD, ""),
          ...(lines[i + 1] && { description: lines[i + 1].trim() }),
        });
      }
    } catch (error) {
      console.error(error);
    }

    return suggestions;
  },
};

const completionSpec: Fig.Spec = {
  name: "vr",
  description: "The npm-style script runner for Deno",
  subcommands: [
    {
      name: "run",
      description: "Run a script",
      args: {
        name: "script",
        generators: scriptGenerator,
      },
    },
    {
      name: "export",
      description: "Export one or more scripts as standalone executable files",
      args: {
        name: "script",
        isVariadic: true,
        generators: scriptGenerator,
      },
    },
    {
      name: "upgrade",
      description:
        "Upgrade Velociraptor to the latest version or to a specific one",
      args: {
        name: "version",
        isOptional: true,
      },
      options: [
        {
          name: ["-o", "--out-dir"],
          description: "The folder where the scripts will be exported",
          args: {
            name: "dir",
          },
        },
      ],
    },
  ],

  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for Velociraptor",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Show the version number for Velociraptor",
    },
  ],

  args: {
    name: "script",
    generators: scriptGenerator,
  },
};

export default completionSpec;
