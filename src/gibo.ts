const boilerplates: Fig.Generator = {
  script: 'find "$HOME/.gitignore-boilerplates" -name "*.gitignore"',
  postProcess: (output) => {
    return output
      .split("\n")
      .map((path) => {
        return { name: path.replace(/.*\//, "").replace(".gitignore", "") };
      })
      .sort((a, b) => {
        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
      });
  },
};

const completionSpec: Fig.Spec = {
  name: "gibo",
  description: "Easy access to gitignore boilerplates",
  subcommands: [
    {
      name: "dump",
      description: "Dump one or more boilerplates to STDOUT",
      args: {
        name: "boilerplate",
        description: "Name of the boilerplate to dump",
        generators: boilerplates,
        isVariadic: true,
      },
    },
    { name: "search", description: "Search for boilerplates" },
    {
      name: "root",
      description: "Show the directory where gibo stores its boilerplates",
    },
    { name: "help", description: "Show help information" },
    { name: "list", description: "Show the list of available boilerplates" },
    {
      name: "update",
      description: "Update the list of available boilerplates",
    },
    {
      name: "version",
      description: "Show the current version of gibo installed",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for gibo",
    },
  ],
};
export default completionSpec;
