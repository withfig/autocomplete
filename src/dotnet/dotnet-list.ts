import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "list",
  args: {
    name: "project",
    description:
      "The project or solution file to operate on. If not specified, the command searches the current directory for one. If more than one solution or project is found, an error is thrown",
    isOptional: true,
    generators: filepaths({ extensions: ["csproj", "sln"] }),
  },
  subcommands: [
    {
      name: "package",
      description:
        "The dotnet list package command provides a convenient option to list all NuGet package references for a specific project or a solution. You first need to build the project in order to have the assets needed for this command to process",
      options: [
        {
          name: "--config",
          description:
            "The NuGet sources to use when searching for newer packages. Requires the --outdated option",
          args: {
            name: "source",
          },
        },
        {
          name: "--deprecated",
          description: "Displays packages that have been deprecated",
        },
        {
          name: "--framework",
          description:
            "Displays only the packages applicable for the specified target framework. To specify multiple frameworks, repeat the option multiple times. For example: --framework netcoreapp2.2 --framework netstandard2.0",
          args: {
            name: "framework",
          },
        },
        {
          name: "--highest-minor",
          description:
            "Considers only the packages with a matching major version number when searching for newer packages. Requires the --outdated or --deprecated option",
        },
        {
          name: "--highest-patch",
          description:
            "Considers only the packages with a matching major and minor version numbers when searching for newer packages. Requires the --outdated or --deprecated option",
        },
        {
          name: "--include-prerelease",
          description:
            "Considers packages with prerelease versions when searching for newer packages. Requires the --outdated or --deprecated option",
        },
        {
          name: "--include-transitive",
          description:
            "Lists transitive packages, in addition to the top-level packages. When specifying this option, you get a list of packages that the top-level packages depend on",
        },
        {
          name: "--interactive",
          description:
            "Allows the command to stop and wait for user input or action. For example, to complete authentication. Available since .NET Core 3.0 SDK",
        },
        {
          name: "--outdated",
          description: "Lists packages that have newer versions available",
        },
        {
          name: ["-s", "--source"],
          description:
            "The NuGet sources to use when searching for newer packages. Requires the --outdated or --deprecated option",
        },
        {
          name: ["-v", "--verbosity"],
          description:
            "Sets the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]. Not supported in every command. See specific command page to determine if this option is available",
          args: {
            name: "verbosity",
            suggestions: [
              "quiet",
              "minimal",
              "normal",
              "detailed",
              "diagnostic",
            ],
          },
        },
        {
          name: "--vulnerable",
          description:
            "Lists packages that have known vulnerabilities. Cannot be combined with --deprecated or --outdated options",
        },
      ],
    },
    {
      name: "reference",
      description:
        "The dotnet list reference command provides a convenient option to list project references for a given project",
    },
  ],
};

export default completionSpec;
