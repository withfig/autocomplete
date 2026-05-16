import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "pack",
  description:
    "The dotnet pack command builds the project and creates NuGet packages. The result of this command is a NuGet package (that is, a .nupkg file)",
  args: {
    name: "project",
    description:
      "The project or solution to pack. It's either a path to a csproj, vbproj, or fsproj file, or to a solution file or directory. If not specified, the command searches the current directory for a project or solution file",
    generators: filepaths({ extensions: ["csproj", "sln"] }),
  },
  options: [
    {
      name: ["-c", "--configuration"],
      description:
        "Defines the build configuration. The default for most projects is Debug, but you can override the build configuration settings in your project",
      args: {
        name: "configuration",
        suggestions: ["Debug", "Release"],
      },
    },
    {
      name: "--force",
      description:
        "Forces all dependencies to be resolved even if the last restore was successful. Specifying this flag is the same as deleting the project.assets.json file",
    },
    {
      name: "--include-source",
      description:
        "Includes the debug symbols NuGet packages in addition to the regular NuGet packages in the output directory. The sources files are included in the src folder within the symbols package",
    },
    {
      name: "--include-symbols",
      description:
        "Includes the debug symbols NuGet packages in addition to the regular NuGet packages in the output directory",
    },
    {
      name: "--interactive",
      description:
        "Allows the command to stop and wait for user input or action. For example, to complete authentication. Available since .NET Core 3.0 SDK",
    },
    {
      name: "--no-build",
      description:
        "Doesn't build the project before packing. It also implicitly sets the --no-restore flag",
    },
    {
      name: "--no-dependencies",
      description:
        "Ignores project-to-project references and only restores the root project",
    },
    {
      name: "--no-restore",
      description:
        "Doesn't execute an implicit restore when running the command",
    },
    {
      name: "--nologo",
      description:
        "Doesn't display the startup banner or the copyright message. Available since .NET Core 3.0 SDK",
    },
    {
      name: ["-o", "--output"],
      description: "Places the built packages in the directory specified",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--runtime",
      description:
        "Specifies the target runtime to restore packages for. For a list of Runtime Identifiers (RIDs), see the RID catalog",
      args: {
        name: "runtime",
      },
    },
    {
      name: ["-s", "--serviceable"],
      description: "Sets the serviceable flag in the package",
    },
    {
      name: "--version-suffix",
      description:
        "Defines the value for the $(VersionSuffix) MSBuild property in the project",
      args: {
        name: "suffix",
      },
    },
    {
      name: ["-v", "--verbosity"],
      description:
        "Sets the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]. For more information, see LoggerVerbosity",
      args: {
        name: "verbosity",
        suggestions: ["quiet", "minimal", "normal", "detailed", "diagnostic"],
      },
    },
  ],
};

export default completionSpec;
