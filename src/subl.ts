const generateProjects: Fig.Generator = {
  template: "filepaths",
  filterTemplateSuggestions: (suggestions) => {
    const out: Fig.Suggestion[] = [];

    // This is a combined filter/map that also mutates suggestion objects.
    for (const suggestion of suggestions) {
      // Folders should always be emitted regardless of their name.
      if (suggestion.type === "folder") {
        out.push(suggestion);
        continue;
      }

      // With the filepaths template, if it wasn't a folder, it's a file.
      // Files should only be emitted if they're a sublime project/workspace.
      // These should appear before folders, so their priority is increased.
      if (
        suggestion.name === ".sublime-project" ||
        suggestion.name === ".sublime-workspace"
      ) {
        suggestion.priority = 76;
        out.push(suggestion);
      }
    }

    return out;
  },
};

const completionSpec: Fig.Spec = {
  name: "subl",
  description: "Sublime Text",
  args: {
    name: "files|directories",
    isVariadic: true,
    isOptional: true,
    template: ["folders", "filepaths"],
  },
  options: [
    {
      name: "--project",
      description: "Load the given project",
      args: {
        name: "project",
        generators: generateProjects,
      },
    },
    {
      name: "--command",
      description: "Run the given command",
      args: {
        name: "command",
      },
    },
    {
      name: ["-n", "--new-window"],
      description: "Open a new window",
      exclusiveOn: ["-a"],
    },
    {
      name: ["-a", "--add"],
      description: "Add folders to the current window",
      exclusiveOn: ["-n"],
    },
    {
      name: "--launch-or-new-window",
      description: "Only open a new window if the application is open",
    },
    {
      name: ["-w", "--wait"],
      description: "Wait for the files to be closed before returning",
    },
    {
      name: ["-b", "--background"],
      description: "Don't activate the application",
    },
    {
      name: ["-s", "--stay"],
      description: "Keep the application activated after closing the file",
    },
    {
      name: "--safe-mode",
      description: "Launch using a clean environment",
    },
    {
      name: ["-h", "--help"],
      description: "Show a help message and exit",
    },
    {
      name: ["-v", "--version"],
      description: "Show the version and exit",
    },
  ],
};

export default completionSpec;
