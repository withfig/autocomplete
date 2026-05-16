type LaunchProfile = {
  commandName: string;
};

type LaunchProfiles = Record<string, LaunchProfile>;

const completionSpec: Fig.Spec = {
  name: "run",
  description:
    "The dotnet run command provides a convenient option to run your application from the source code with one command. It's useful for fast iterative development from the command line. The command depends on the dotnet build command to build the code. Any requirements for the build, such as that the project must be restored first, apply to dotnet run as well",
  options: [
    {
      name: "--",
      description:
        "Delimits arguments to dotnet run from arguments for the application being run. All arguments after this delimiter are passed to the application run",
    },
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
        "Builds and runs the app using the specified framework. The framework must be specified in the project file",
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
      name: "--launch-profile",
      description:
        "The name of the launch profile (if any) to use when launching the application. Launch profiles are defined in the launchSettings.json file and are typically called Development, Staging, and Production",
      args: {
        name: "name",
        suggestions: ["Development", "Staging", "Production"],
        generators: {
          script: ["cat", "Properties/launchSettings.json"],
          postProcess(out) {
            const profiles: LaunchProfiles = JSON.parse(out).profiles;

            return Object.keys(profiles).map<Fig.Suggestion>((key) => {
              return {
                name: key,
                priority: 100,
              };
            });
          },
        },
      },
    },
    {
      name: "--no-build",
      description:
        "Doesn't build the project before running. It also implicit sets the --no-restore flag",
    },
    {
      name: "--no-dependencies",
      description:
        "When restoring a project with project-to-project (P2P) references, restores the root project and not the references",
    },
    {
      name: "--no-launch-profile",
      description:
        "Doesn't try to use launchSettings.json to configure the application",
    },
    {
      name: "--no-restore",
      description:
        "Doesn't execute an implicit restore when running the command",
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
      name: "--project",
      description:
        "Specifies the path of the project file to run (folder name or full path). If not specified, it defaults to the current directory. The -p abbreviation for --project is deprecated starting in .NET 6 Preview SDK",
      args: {
        name: "path",
        template: ["folders", "filepaths"],
      },
    },
    {
      name: ["-r", "--runtime"],
      description:
        "Specifies the target runtime to restore packages for. For a list of Runtime Identifiers (RIDs), see the RID catalog. -r short option available since .NET Core 3.0 SDK",
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
  ],
};

export default completionSpec;
