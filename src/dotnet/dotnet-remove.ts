import { filepaths } from "@fig/autocomplete-generators";

const projectGenerator = filepaths({ extensions: ["csproj"] });

const completionSpec: Fig.Spec = {
  name: "remove",
  args: {
    name: "project",
    description:
      "Specifies the project file. If not specified, the command searches the current directory for one",
    isOptional: true,
    generators: projectGenerator,
  },
  subcommands: [
    {
      name: "package",
      description:
        "The dotnet remove package command provides a convenient option to remove a NuGet package reference from a project",
      args: {
        name: "id",
      },
    },
    {
      name: "reference",
      description:
        "The dotnet remove reference command provides a convenient option to remove project references from a project",
      args: {
        name: "ref",
        generators: projectGenerator,
      },
    },
  ],
};

export default completionSpec;
