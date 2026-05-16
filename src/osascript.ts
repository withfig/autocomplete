import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "osascript",
  description: "Execute OSA scripts (AppleScript, JavaScript, etc.)",
  options: [
    {
      name: "-e",
      description: "Enter one line of a script",
      args: {
        name: "statement",
      },
    },
    {
      name: "-i",
      description: "Interactive mode",
    },
    {
      name: "-l",
      description: "Override the language for any plain text files",
      args: {
        name: "language",
      },
    },
    {
      name: "-s",
      description: "Modify the output style",
      args: {
        name: "flags",
        isVariadic: true,
        suggestions: [
          {
            name: "h",
            description: "Print values in human-readable form (default)",
          },
          {
            name: "s",
            description: "Print values in recompilable source form",
          },
          {
            name: "e",
            description: "Print script errors to stderr (default)",
          },
          {
            name: "o",
            description: "Print script errors to stdout",
          },
        ],
      },
    },
  ],
  args: {
    name: "script",
    isScript: true,
    isOptional: true,
    generators: filepaths({
      extensions: ["scpt", "scptd"],
      editFileSuggestions: { priority: 76 },
    }),
  },
};

export default completionSpec;
