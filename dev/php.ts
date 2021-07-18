// To learn more about Fig's autocomplete standard visit: https://fig.io/docs/autocomplete/building-a-spec#building-your-first-autocomplete-spec

// The below is a dummy example for git. Make sure to change the file name!
const completionSpec: Fig.Spec = {
  name: "php",
  description: "Run the PHP interpreter",
  generateSpec: async (context, executeShellCommand) => {
    const subcommands = [];

    if ((await executeShellCommand("ls -1 artisan")) === "artisan") {
      subcommands.push({ name: "artisan", loadSpec: "php/artisan" });
    }

    return {
      name: "php",
      subcommands,
      args: {
        generators: {
          template: "filepaths",
          filterTemplateSuggestions: function (suggestions) {
            return suggestions.filter((suggestion) => {
              return (
                // suggestion.name.endsWith(".php") ||
                suggestion.name.indexOf(".") === -1
              );
            });
          },
        },
      },
    };
  },
};

export default completionSpec;
