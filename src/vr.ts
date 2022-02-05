// const SCRIPT_KEYWORD = "    • ";
// const scriptGenerator: Fig.Generator = {
//   script: "vr",
//   postProcess: (out) => {
//     let suggestions: Fig.Suggestion[] = [];

//     try {
//       const lines = out
//         .split("\n")
//         .filter(Boolean)
//         .map((k) => {
//           return k.replace(/\u001\[[0-9;]*m/g, "");
//         });

//       for (const idx_ in lines) {
//         const idx = (idx_ as unknown) as number;

//         if (idx >= lines.length - 2) continue;

//         const line = lines[idx];

//         if (line.search(SCRIPT_KEYWORD) === -1) continue;

//         const scriptName = line.substring(SCRIPT_KEYWORD.length);
//         const description = lines[idx + 1].substring(SCRIPT_KEYWORD.length - 2);

//         suggestions = [
//           ...suggestions,
//           {
//             name: scriptName,
//             description,
//           },
//         ];
//       }
//     } catch (error) {
//       console.error(error);
//     }

//     return suggestions;
//   },
// };

const completionSpec: Fig.Spec = {
  name: "vr",
  description: "The npm-style script runner for Deno",

  subcommands: [
    {
      name: "run",
      description: "Run a script",
      args: {
        name: "script",
        // generators: scriptGenerator,
      },
      options: [{ name: ["-h", "--help"], description: "Show help" }],
    },
    {
      name: "export",
      description: "Export one or more scripts as standalone executable files",
      args: {
        name: "script",
        isVariadic: true,
        // generators: scriptGenerator,
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
    // generators: scriptGenerator,
  },
};
export default completionSpec;
