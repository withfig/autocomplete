const SCRIPT_KEYWORD = "    • ";

const scriptGenerator: Fig.Generator = {
  script: "NO_COLOR=1 vr",
  postProcess: (out) => {
    let suggestions: Fig.Suggestion[] = [];

    try {
      const lines = out.split("\n").filter(Boolean);

      for (const line of lines) {
        if (!line.startsWith(SCRIPT_KEYWORD)) continue;

        const idx = lines.findIndex((k) => k === line);

        suggestions = [
          ...suggestions,
          {
            name: line.replace(SCRIPT_KEYWORD, ""),
            description: lines[idx + 1] ? lines[idx + 1].trim() : null,
          },
        ];
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
      options: [{ name: ["-h", "--help"], description: "Show help" }],
    },
    {
      name: "export",
      description: "Export one or more scripts as standalone executable files",
      args: {
        name: "script",
        isVariadic: true,
        generators: scriptGenerator,
      },
      options: [{ name: ["-h", "--help"], description: "Show help" }],
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
        { name: ["-h", "--help"], description: "Show help" },
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
