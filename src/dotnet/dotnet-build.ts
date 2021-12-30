import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "build",
  args: {
    name: "project",
    description:
      "The project or solution file to build. If a project or solution file isn't specified, MSBuild searches the current working directory for a file that has a file extension that ends in either proj or sln and uses that file",
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
        name: "config",
      },
    },
    {
      name: ["-f", "--framework"],
      description:
        "Compiles for a specific framework. The framework must be defined in the project file",
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
      name: "--no-dependencies",
      description:
        "Ignores project-to-project (P2P) references and only builds the specified root project",
    },
    {
      name: "--no-incremental",
      description:
        "Marks the build as unsafe for incremental build. This flag turns off incremental compilation and forces a clean rebuild of the project's dependency graph",
    },
    {
      name: "--no-restore",
      description: "Doesn't execute an implicit restore during build",
    },
    {
      name: "--nologo",
      description:
        "Doesn't display the startup banner or the copyright message. Available since .NET Core 3.0 SDK",
    },
    {
      name: "--no-self-contained",
      description:
        "Publishes the application as a framework dependent application. A compatible .NET runtime must be installed on the target machine to run the application",
    },
    {
      name: ["-o", "--output"],
      description:
        "Directory in which to place the built binaries. If not specified, the default path is ./bin/<configuration>/<framework>/. For projects with multiple target frameworks (via the TargetFrameworks property), you also need to define --framework when you specify this option",
      args: {
        name: "directory",
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
      name: ["-r", "--runtime"],
      description:
        "Specifies the target runtime. For a list of Runtime Identifiers (RIDs), see the RID catalog. If you use this option, use --self-contained or --no-self-contained also",
      args: {
        name: "runtime",
      },
    },
    {
      name: "--self-contained",
      description:
        "Publishes the .NET runtime with the application so the runtime doesn't need to be installed on the target machine. The default is true if a runtime identifier is specified",
      args: {
        name: "self-contained",
        isOptional: true,
        default: "true",
        suggestions: ["true", "false"],
      },
    },
    {
      name: "--source",
      description:
        "The URI of the NuGet package source to use during the restore operation",
      args: {
        name: "source",
      },
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
    {
      name: "--version-suffix",
      description:
        "Sets the value of the $(VersionSuffix) property to use when building the project. This only works if the $(Version) property isn't set. Then, $(Version) is set to the $(VersionPrefix) combined with the $(VersionSuffix), separated by a dash",
      args: {
        name: "suffix",
      },
    },
  ],
};

export default completionSpec;
