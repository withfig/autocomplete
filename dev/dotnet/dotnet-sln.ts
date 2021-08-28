const slnGenerator: Fig.Generator = {
  template: "filepaths",
  filterTemplateSuggestions(param) {
    const suffix = ".sln";

    return param.filter((file) => {
      if (typeof file.name === "string") {
        return file.name.endsWith(suffix);
      }

      return false;
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "sln",
  args: {
    name: "solution",
    description:
      "The solution file to use. If this argument is omitted, the command searches the current directory for one. If it finds no solution file or multiple solution files, the command fails",
    isOptional: true,
    generators: slnGenerator,
  },
  subcommands: [
    {
      name: "list",
      description: "Lists all projects in a solution file",
    },
    {
      name: "add",
      description: "Adds one or more projects to the solution file",
      args: {
        name: "path",
        description:
          "The path to the project or projects to add to the solution. Unix/Linux shell globbing pattern expansions are processed correctly by the dotnet sln command",
        template: "folders",
      },
      options: [
        {
          name: "--in-root",
          description:
            "Places the projects in the root of the solution, rather than creating a solution folder. Can't be used with -s|--solution-folder. Available since .NET Core 3.0 SDK",
        },
        {
          name: ["-s", "--solution-folder"],
          description:
            "The destination solution folder path to add the projects to. Can't be used with --in-root. Available since .NET Core 3.0 SDK",
          args: {
            name: "path",
            description:
              "The destination solution folder path to add the projects to. Can't be used with --in-root. Available since .NET Core 3.0 SDK",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "remove",
      description:
        "Removes a project or multiple projects from the solution file",
      args: {
        name: "path",
        description:
          "The path to the project or projects to add to the solution. Unix/Linux shell globbing pattern expansions are processed correctly by the dotnet sln command",
        template: "folders",
      },
    },
  ],
};

export default completionSpec;
