import { filepaths } from "@fig/autocomplete-generators";

const projectGenerator = filepaths({ extensions: ["csproj", "sln", "dll"] });

const completionSpec: Fig.Spec = {
  name: "test",
  description:
    "The dotnet test command is used to execute unit tests in a given solution. The dotnet test command builds the solution and runs a test host application for each test project in the solution. The test host executes tests in the given project using a test framework, for example: MSTest, NUnit, or xUnit, and reports the success or failure of each test. If all tests are successful, the test runner returns 0 as an exit code; otherwise if any test fails, it returns 1",
  args: {
    name: "PROJECT | SOLUTION | DIRECTORY | DLL",
    generators: projectGenerator,
  },
  options: [
    {
      name: ["-a", "--test-adapter-path"],
      description:
        "Path to a directory to be searched for additional test adapters. Only .dll files with suffix .TestAdapter.dll are inspected. If not specified, the directory of the test .dll is searched",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--arch",
      description:
        "Specifies the target architecture. This is a shorthand syntax for setting the Runtime Identifier (RID), where the provided value is combined with the default RID. For example, on a win-x64 machine, specifying --arch x86 sets the RID to win-x86. If you use this option, don't use the -r|--runtime option. Available since .NET 6 Preview 7",
      args: {
        name: "architecture",
      },
    },
    {
      name: "--blame",
      description:
        "Runs the tests in blame mode. This option is helpful in isolating problematic tests that cause the test host to crash. When a crash is detected, it creates a sequence file in TestResults/<Guid>/<Guid>_Sequence.xml that captures the order of tests that were run before the crash",
    },
    {
      name: "--blame-crash",
      description:
        "Runs the tests in blame mode and collects a crash dump when the test host exits unexpectedly. This option depends on the version of .NET used, the type of error, and the operating system",
    },
    {
      name: "--blame-crash-dump-type",
      description:
        "The type of crash dump to be collected. Implies --blame-crash",
      args: {
        name: "type",
      },
    },
    {
      name: "--blame-crash-collect-always",
      description:
        "Collects a crash dump on expected as well as unexpected test host exit",
    },
    {
      name: "--blame-hang",
      description:
        "Run the tests in blame mode and collects a hang dump when a test exceeds the given timeout",
    },
    {
      name: "--blame-hang-timeout",
      description:
        "Per-test timeout, after which a hang dump is triggered and the test host process and all of its child processes are dumped and terminated",
      args: {
        name: "timeout",
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
      name: "--collect",
      description: "Enables data collector for the test run",
      args: {
        name: "name",
      },
    },
    {
      name: ["-d", "--diag"],
      description:
        "Enables diagnostic mode for the test platform and writes diagnostic messages to the specified file and to files next to it. The process that is logging the messages determines which files are created, such as *.host_<date>.txt for test host log, and *.datacollector_<date>.txt for data collector log",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["-f", "--framework"],
      description:
        "Forces the use of dotnet or .NET Framework test host for the test binaries. This option only determines which type of host to use. The actual framework version to be used is determined by the runtimeconfig.json of the test project. When not specified, the TargetFramework assembly attribute is used to determine the type of host. When that attribute is stripped from the .dll, the .NET Framework host is used",
      args: {
        name: "framework",
      },
    },
    {
      name: "--filter",
      description:
        "Filters out tests in the current project using the given expression. For more information, see the Filter option details section. For more information and examples on how to use selective unit test filtering, see Running selective unit tests",
      args: {
        name: "expression",
      },
    },
    {
      name: "--interactive",
      description:
        "Allows the command to stop and wait for user input or action. For example, to complete authentication. Available since .NET Core 3.0 SDK",
    },
    {
      name: ["-l", "--logger"],
      description:
        'Specifies a logger for test results. Unlike MSBuild, dotnet test doesn\'t accept abbreviations: instead of -l "console;v=d" use -l "console;verbosity=detailed". Specify the parameter multiple times to enable multiple loggers',
    },
    {
      name: "--no-build",
      description:
        "Doesn't build the test project before running it. It also implicitly sets the - --no-restore flag",
    },
    {
      name: "--nologo",
      description:
        "Run tests without displaying the Microsoft TestPlatform banner. Available since .NET Core 3.0 SDK",
    },
    {
      name: ["-o", "--output"],
      description:
        "Directory in which to find the binaries to run. If not specified, the default path is ./bin/<configuration>/<framework>/. For projects with multiple target frameworks (via the TargetFrameworks property), you also need to define --framework when you specify this option. dotnet test always runs tests from the output directory. You can use AppDomain.BaseDirectory to consume test assets in the output directory",
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
      name: ["-r", "--results-directory"],
      description:
        "The directory where the test results are going to be placed. If the specified directory doesn't exist, it's created. The default is TestResults in the directory that contains the project file",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--runtime",
      description: "The target runtime to test for",
      args: {
        name: "runtime",
      },
    },
    {
      name: ["-s", "--settings"],
      description:
        "The .runsettings file to use for running the tests. The TargetPlatform element (x86|x64) has no effect for dotnet test. To run tests that target x86, install the x86 version of .NET Core. The bitness of the dotnet.exe that is on the path is what will be used for running tests",
      args: {
        name: "file",
        generators: filepaths({ extensions: ["runsettings"] }),
      },
    },
    {
      name: ["-t", "--list-tests"],
      description: "List the discovered tests instead of running the tests",
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
      name: "--",
      args: {
        name: "args",
      },
    },
  ],
};

export default completionSpec;
