import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "clean",
  description:
    "The dotnet clean command cleans the output of the previous build. It's implemented as an MSBuild target, so the project is evaluated when the command is run. Only the outputs created during the build are cleaned. Both intermediate (obj) and final output (bin) folders are cleaned",
  args: {
    name: "project",
    description:
      "The MSBuild project or solution to clean. If a project or solution file is not specified, MSBuild searches the current working directory for a file that has a file extension that ends in proj or sln, and uses that file",
    isOptional: true,
    generators: filepaths({ extensions: ["csproj", "sln"] }),
  },
  options: [
    {
      name: ["-c", "--configuration"],
      description:
        "Defines the build configuration. The default for most projects is Debug, but you can override the build configuration settings in your project. This option is only required when cleaning if you specified it during build time",
      args: {
        name: "configuration",
        suggestions: ["Debug", "Release"],
      },
    },
    {
      name: ["-f", "--framework"],
      description:
        "The framework that was specified at build time. The framework must be defined in the project file. If you specified the framework at build time, you must specify the framework when cleaning",
      args: {
        name: "framework",
      },
    },
    {
      name: "--interactive",
      description:
        "Allows the command to stop and wait for user input or action. For example, to complete authentication. Available since .NET Core 3.0 SDK",
    },
    {
      name: "--nologo",
      description:
        "Doesn't display the startup banner or the copyright message. Available since .NET Core 3.0 SDK",
    },
    {
      name: ["-o", "--output"],
      description:
        "The directory that contains the build artifacts to clean. Specify the -f|--framework <FRAMEWORK> switch with the output directory switch if you specified the framework when the project was built",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["-r", "--runtime"],
      description:
        "Cleans the output folder of the specified runtime. This is used when a self-contained deployment was created",
    },
    {
      name: ["-v", "--verbosity"],
      description:
        "Sets the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]. Not supported in every command. See specific command page to determine if this option is available",
      args: {
        name: "verbosity",
        suggestions: ["quiet", "minimal", "normal", "detailed", "diagnostic"],
      },
    },
  ],
};

export default completionSpec;
