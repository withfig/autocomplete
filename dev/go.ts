export const completionSpec: Fig.Spec = {
  name: "go",
  description: "golang completions",
  subcommands: [
    {
      name: "run",
      description: "compile and run Go program",
      args: {
        name: "go script",
        isScript: true,
        generators: {
          template: "filepaths",
          filterTemplateSuggestions: function (paths) {
            return paths.filter(function (file) {
              if (typeof file.name === "string") {
                return file.name.endsWith(".go") || file.name.endsWith("/");
              }
              return false;
            });
          },
        },
      },
      options: [
        {
          name: ["-v"],
          description: "print the names of packages as they are compiled.",
        },
      ],
    },
  ],
};
