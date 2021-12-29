import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "publish",
  description:
    "Dotnet publish compiles the application, reads through its dependencies specified in the project file, and publishes the resulting set of files to a directory",
  args: {
    name: "project",
    description: "The project or solution to publish",
    isOptional: true,
    generators: filepaths({ extensions: ["csproj", "sln"] }),
  },
  options: [
    {
      name: ["-a", "--arch"],
      description:
        "Specifies the target architecture. This is a shorthand syntax for setting the Runtime Identifier (RID), where the provided value is combined with the default RID. For example, on a win-x64 machine, specifying --arch x86 sets the RID to win-x86. If you use this option, don't use the -r|--runtime option. Available since .NET 6 Preview 7",
      args: {
        name: "arch",
        suggestions: ["x86", "x64", "arm", "arm64"],
      },
    },
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
      name: ["-f", "--framework"],
      description:
        "Publishes the application for the specified target framework. You must specify the target framework in the project file",
      args: {
        name: "framework",
      },
    },
    {
      name: "--force",
      description:
        "Forces all dependencies to be resolved even if the last restore was successful. Specifying this flag is the same as deleting the project.assets.json file",
    },
    {
      name: "--interactive",
      description:
        "Allows the command to stop and wait for user input or action. For example, to complete authentication. Available since .NET Core 3.0 SDK",
    },
    {
      name: "--manifest",
      description:
        "Specifies one or several target manifests to use to trim the set of packages published with the app. The manifest file is part of the output of the dotnet store command. To specify multiple manifests, add a --manifest option for each manifest",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--no-build",
      description:
        "Doesn't build the project before publishing. It also implicitly sets the --no-restore flag",
    },
    {
      name: "--no-dependencies",
      description:
        "Ignores project-to-project references and only restores the root project",
    },
    {
      name: "--nologo",
      description:
        "Doesn't display the startup banner or the copyright message. Available since .NET Core 3.0 SDK",
    },
    {
      name: "--no-restore",
      description:
        "Doesn't execute an implicit restore when running the command",
    },
    {
      name: ["-o", "--output"],
      description: "Specifies the path for the output directory",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--os",
      description:
        "Specifies the target operating system (OS). This is a shorthand syntax for setting the Runtime Identifier (RID), where the provided value is combined with the default RID. For example, on a win-x64 machine, specifying --os os sets the RID to os-x64. If you use this option, don't use the -r|--runtime option. Available since .NET 6 Preview 7",
      args: {
        name: "os",
      },
    },
    {
      name: "--self-contained",
      description:
        "Publishes the .NET runtime with your application so the runtime doesn't need to be installed on the target machine. Default is true if a runtime identifier is specified and the project is an executable project (not a library project)",
      args: {
        name: "self-contained",
        default: "true",
        isOptional: true,
        suggestions: ["true", "false"],
      },
    },
    {
      name: "--no-self-contained",
      description:
        "Equivalent to --self-contained false. Available since .NET Core 3.0 SDK",
    },
    {
      name: ["-r", "--runtime"],
      description:
        "Publishes the application for a given runtime. For a list of Runtime Identifiers (RIDs), see the RID catalog",
      args: {
        name: "runtime",
      },
    },
    {
      name: ["-v", "--verbosity"],
      description:
        "Sets the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]. The default is minimal. For more information, see LoggerVerbosity",
      args: {
        name: "verbosity",
        suggestions: ["quiet", "minimal", "normal", "detailed", "diagnostic"],
      },
    },
    {
      name: "--version-suffix",
      description:
        "Defines the version suffix to replace the asterisk (*) in the version field of the project file",
      args: {
        name: "suffix",
      },
    },
  ],
};

export default completionSpec;
