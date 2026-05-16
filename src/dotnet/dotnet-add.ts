import { filepaths } from "@fig/autocomplete-generators";

type PackageSearchResultData = {
  id: string;
  title: string;
  description: string;
};

const packageSearchGenerator: Fig.Generator = {
  script(context) {
    const searchTerm = context[context.length - 1];
    return [
      "curl",
      "-s",
      "-H",
      "Accept: application/json",
      `https://azuresearch-usnc.nuget.org/query?packageType=Dependency&q=${searchTerm}`,
    ];
  },
  postProcess(out) {
    const searchResults: PackageSearchResultData[] = JSON.parse(out).data;

    return searchResults.map<Fig.Suggestion>((value) => {
      return {
        name: value.title,
        insertValue: value.id,
        description: value.description,
      };
    });
  },
};

const versionSearchGenerator: Fig.Generator = {
  script(context) {
    const command = context.filter((ctx) => !ctx.startsWith("-"));
    const idx = command.findIndex((ctx) => ctx === "package");
    const searchTerm = command[idx + 1].toLowerCase();

    return [
      "curl",
      "-s",
      "-H",
      "Accept: application/json",
      `https://api.nuget.org/v3-flatcontainer/${searchTerm}/index.json`,
    ];
  },
  postProcess(out) {
    const searchResults: string[] = JSON.parse(out).versions;

    return searchResults.reverse().map<Fig.Suggestion>((value) => {
      return {
        name: value,
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "add",
  args: {
    name: "project",
    description:
      "Specifies the project file. If not specified, the command searches the current directory for one",
    isOptional: true,
    generators: filepaths({ extensions: ["csproj"] }),
  },
  subcommands: [
    {
      name: "package",
      description: "The package reference to add",
      args: {
        name: "id",
        debounce: true,
        generators: packageSearchGenerator,
      },
      options: [
        {
          name: ["-f", "--framework"],
          description:
            "Adds a package reference only when targeting a specific framework",
          args: {
            name: "framework",
          },
        },
        {
          name: "--interactive",
          description:
            "Allows the command to stop and wait for user input or action. For example, to complete authentication",
        },
        {
          name: ["-n", "--no-restore"],
          description:
            "Adds a package reference without performing a restore preview and compatibility check",
        },
        {
          name: "--package-directory",
          description:
            "The directory where to restore the packages. The default package restore location is %userprofile%.nugetpackages on Windows and ~/.nuget/packages on macOS and Linux",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--prerelease",
          description:
            "Allows prerelease packages to be installed. Available since .NET Core 5 SDK",
        },
        {
          name: ["-s", "--source"],
          description:
            "The URI of the NuGet package source to use during the restore operation",
        },
        {
          name: ["-v", "--version"],
          description: "Version of the package",
          args: {
            name: "version",
            debounce: true,
            generators: versionSearchGenerator,
          },
        },
      ],
    },
    {
      name: "reference",
      description:
        "The dotnet add reference command provides a convenient option to add project references to a project. After running the command, the <ProjectReference> elements are added to the project file",
      args: {
        name: "path",
        isVariadic: true,
        generators: filepaths({ extensions: ["csproj"] }),
      },
      options: [
        {
          name: ["-f", "--framework"],
          description:
            "Adds a package reference only when targeting a specific framework",
          args: {
            name: "framework",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
