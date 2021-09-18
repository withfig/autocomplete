const generateProjects: Fig.Generator = {
  template: "filepaths",
  filterTemplateSuggestions: (suggestions) => {
    const out: Fig.Suggestion[] = [];
    for (const suggestion of suggestions) {
      if (suggestion.type === "folder") {
        out.push(suggestion);
        continue;
      }
      if (/^\.sublime-(project|workspace)$/.test(suggestion.name)) {
        suggestion.priority = 75;
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
    },
    {
      name: ["-a", "--add"],
      description: "Add folders to the current window",
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
