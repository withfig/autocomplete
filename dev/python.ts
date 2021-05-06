export const completionSpec: Fig.Spec = {
  name: "python3",
  description: "Run the python interpretor",
  args: {
    name: "python script",
    isScript: true,
    generators: {
      template: "filepaths",
      filterTemplateSuggestions: function (paths) {
        return paths.filter((file) => {
          if (typeof file.name === "string") {
            return file.name.endsWith(".py") || file.name.endsWith("/");
          }
          return false;
        });
      },
    },
  },
  options: [
    {
      name: ["-c"],
      insertValue: "-c '{cursor}'",
      description: "program passed in as string (terminates option list)",
      args: {
        name: "command",
        isCommand: true,
      },
    },
    {
      name: ["-m"],
      description: "module",
      args: {
        name: "python module",
        isModule: "python/",
        suggestions: ["http.server"],
      },
    },
  ],
};
