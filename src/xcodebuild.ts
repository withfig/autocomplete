const completionSpec: Fig.Spec = {
  name: "xcodebuild",
  description: "Build Xcode projects",
  options: [
    {
      name: "-usage",
      description: "Print brief usage",
    },
    {
      name: "-help",
      description: "Print complete usage",
    },
    {
      name: "-verbose",
      description: "Provide additional status output",
    },
    {
      name: "-license",
      description: "Show the Xcode and SDK license agreements",
    },
    {
      name: "-checkFirstLaunchStatus",
      description: "Check if any First Launch tasks need to be performed",
    },
    {
      name: "-runFirstLaunch",
      description: "Install packages and agree to the license",
    },
    {
      name: "-project",
      description: "Build the project NAME",
      args: {
        name: "NAME",
      },
    },
    {
      name: "-target",
      description: "Build the target NAME",
      args: {
        name: "NAME",
      },
    },
    {
      name: "-alltargets",
      description: "Build all targets",
    },
    {
      name: "-workspace",
      description: "Build the workspace NAME",
      args: {
        name: "NAME",
        template: "filepaths",
      },
    },
    {
      name: "-scheme",
      description: "Build the scheme NAME",
      args: {
        name: "NAME",
      },
    },
    {
      name: "-configuration",
      description: "Use the build configuration NAME for building each target",
      args: {
        name: "NAME",
      },
    },
    {
      name: "-xcconfig",
      description:
        "Apply the build settings defined in the file at PATH as overrides",
      args: {
        name: "NAME",
        template: "filepaths",
      },
    },
    {
      name: "-arch",
      description:
        "Build each target for the architecture ARCH; this will override architectures defined in the project",
      args: {
        name: "ARCH",
        suggestions: ["x86_64", "arm64", "armv7"],
      },
    },
    {
      name: "-sdk",
      description:
        "Use SDK as the name or path of the base SDK when building the project",
      args: {
        name: "SDK",
        template: "folders",
      },
    },
    {
      name: "-toolchain",
      description: "Use the toolchain with identifier or name NAME",
      args: {
        name: "NAME",
      },
    },
    {
      name: "-destination",
      description:
        "Use the destination described by DESTINATIONSPECIFIER (a comma-separated set of key=value pairs describing the destination to use)",
      args: {
        name: "DESTINATION SPECIFIER",
        template: "folders",
      },
    },
    {
      name: "-destination-timeout",
      description:
        "Wait for TIMEOUT seconds while searching for the destination device",
      args: {
        name: "TIMEOUT",
      },
    },
    {
      name: "-parallelizeTargets",
      description: "Build independent targets in parallel",
    },
    {
      name: "-jobs",
      description: "Specify the maximum number of concurrent build operations",
      args: {
        name: "NUMBER",
      },
    },
    {
      name: "-maximum-concurrent-test-device-destinations",
      description:
        "The maximum number of device destinations to test on concurrently",
      args: {
        name: "NUMBER",
      },
    },
    {
      name: "-maximum-concurrent-test-simulator-destinations",
      description:
        "The maximum number of simulator destinations to test on concurrently",
      args: {
        name: "NUMBER",
      },
    },
    {
      name: "-parallel-testing-enabled",
      description: "Overrides the per-target setting in the scheme",
      args: {
        name: "mode",
        suggestions: ["YES", "NO"],
      },
    },
    {
      name: "-parallel-testing-worker-count",
      description:
        "The exact number of test runners that will be spawned during parallel testing",
      args: {
        name: "NUMBER",
      },
    },
    {
      name: "-maximum-parallel-testing-workers",
      description:
        "The maximum number of test runners that will be spawned during parallel testing",
      args: {
        name: "NUMBER",
      },
    },
    {
      name: "-dry-run",
      description: "Do everything except actually running the commands",
    },
    {
      name: "-quiet",
      description: "Do not print any output except for warnings and errors",
    },
    {
      name: "-hideShellScriptEnvironment",
      description: "Don't show shell script environment variables in build log",
    },
    {
      name: "-showsdks",
      description: "Display a compact list of the installed SDKs",
    },
    {
      name: "-showdestinations",
      description: "Display a list of destinations",
    },
    {
      name: "-showTestPlans",
      description: "Display a list of test plans",
    },
    {
      name: "-showBuildSettings",
      description: "Display a list of build settings and values",
    },
    {
      name: "-showBuildSettingsForIndex",
      description: "Display build settings for the index service",
    },
    {
      name: "-list",
      description:
        "Lists the targets and configurations in a project, or the schemes in a workspace",
    },
    {
      name: "-find-executable",
      description:
        "Display the full path to executable NAME in the provided SDK and toolchain",
      args: {
        name: "NAME",
      },
    },
    {
      name: "-find-library",
      description:
        "Display the full path to library NAME in the provided SDK and toolchain",
      args: {
        name: "NAME",
      },
    },
    {
      name: "-version",
      description:
        "Display the version of Xcode; with -sdk will display info about one or all installed SDKs",
    },
    {
      name: "-enableAddressSanitizer",
      description: "Turn the address sanitizer on or off",
      args: {
        name: "mode",
        suggestions: ["YES", "NO"],
      },
    },
    {
      name: "-enableThreadSanitizer",
      description: "Turn the thread sanitizer on or off",
      args: {
        name: "mode",
        suggestions: ["YES", "NO"],
      },
    },
    {
      name: "-enableUndefinedBehaviorSanitizer",
      description: "Turn the undefined behavior sanitizer on or off",
      args: {
        name: "mode",
        suggestions: ["YES", "NO"],
      },
    },
    {
      name: "-resultBundlePath",
      description:
        "Specifies the directory where a result bundle describing what occurred will be placed",
      args: {
        name: "PATH",
        template: "folders",
      },
    },
    {
      name: "-resultStreamPath",
      description:
        "Specifies the file where a result stream will be written to (the file must already exist)",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "-resultBundleVersion",
      description: "Specifies which result bundle version should be used",
      args: {
        name: "version",
        default: "3",
      },
    },
    {
      name: "-clonedSourcePackagesDirPath",
      description:
        "Specifies the directory to which remote source packages are fetch or expected to be found",
      args: {
        name: "PATH",
        template: "folders",
      },
    },
    {
      name: "-derivedDataPath",
      description:
        "Specifies the directory where build products and other derived data will go",
      args: {
        name: "PATH",
        template: "folders",
      },
    },
    {
      name: "-archivePath",
      description:
        "Specifies the directory where any created archives will be placed, or the archive that should be exported",
      args: {
        name: "PATH",
        template: "folders",
      },
    },
    {
      name: "-exportArchive",
      description: "Specifies that an archive should be exported",
    },
    {
      name: "-exportNotarizedApp",
      description: "Export an archive that has been notarized by Apple",
    },
    {
      name: "-exportOptionsPlist",
      description:
        "Specifies a path to a plist file that configures archive exporting",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "-enableCodeCoverage",
      description: "Turn code coverage on or off when testing",
      args: {
        name: "mode",
        suggestions: ["YES", "NO"],
      },
    },
    {
      name: "-exportPath",
      description:
        "Specifies the destination for the product exported from an archive",
      args: {
        name: "PATH",
        template: "folders",
      },
    },
    {
      name: "-skipUnavailableActions",
      description:
        "Specifies that scheme actions that cannot be performed should be skipped instead of causing a failure",
    },
    {
      name: "-exportLocalizations",
      description: "Exports completed and outstanding project localizations",
    },
    {
      name: "-importLocalizations",
      description:
        "Imports localizations for a project, assuming any necessary localized resources have been created in Xcode",
    },
    {
      name: "-localizationPath",
      description: "Specifies a path to XLIFF localization file",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "-exportLanguage",
      description:
        "Specifies multiple optional ISO 639-1 languages included in a localization export",
      args: {
        name: "languages",
        isVariadic: true,
      },
    },
    {
      name: "-xcroot",
      description:
        "Specifies a path to a .xcroot to use for building and/or testing",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "-xctestrun",
      description: "Specifies a path to a test run specification",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "-testPlan",
      description:
        "Specifies the name of the test plan associated with the scheme to use for testing",
      args: {
        name: "test plan",
      },
    },
    {
      name: "-only-testing",
      description:
        "Constrains testing by specifying tests to include, and excluding other tests",
      exclusiveOn: ["-skip-testing"],
    },
    {
      name: "-only-testing:",
      insertValue: "-only-testing:{cursor}",
      description:
        "Constrains testing by specifying tests to include, and excluding other tests",
      args: {
        name: "Test Identifier",
      },
      exclusiveOn: ["-skip-testing"],
    },
    {
      name: "-skip-testing",
      description:
        "Constrains testing by specifying tests to exclude, but including other tests",
      exclusiveOn: ["-only-testing"],
    },
    {
      name: "-skip-testing:",
      insertValue: "-skip-testing:{cursor}",
      description:
        "Constrains testing by specifying tests to exclude, but including other tests",
      args: {
        name: "Test Identifier",
      },
      exclusiveOn: ["-only-testing"],
    },
    {
      name: "-test-timeouts-enabled",
      description: "Enable or disable test timeout behavior",
      args: {
        name: "mode",
        suggestions: ["YES", "NO"],
      },
    },
    {
      name: "-default-test-execution-time-allowance",
      description:
        "The default execution time an individual test is given to execute, if test timeouts are enabled",
      args: {
        name: "SECONDS",
      },
    },
    {
      name: "-maximum-test-execution-time-allowance",
      description:
        "The maximum execution time an individual test is given to execute, regardless of the test's preferred allowance",
      args: {
        name: "SECONDS",
      },
    },
    {
      name: "-only-test-configuration",
      description:
        "Constrains testing by specifying test configurations to include, and excluding other test configurations",
    },
    {
      name: "-skip-test-configuration",
      description:
        "Constrains testing by specifying test configurations to exclude, but including other test configurations",
    },
    {
      name: "-testLanguage",
      description:
        "Constrains testing by specifying ISO 639-1 language in which to run the tests",
    },
    {
      name: "-testRegion",
      description:
        "Constrains testing by specifying ISO 3166-1 region in which to run the tests",
    },
    {
      name: "-resolvePackageDependencies",
      description:
        "Resolves any Swift package dependencies referenced by the project or workspace",
    },
    {
      name: "-disableAutomaticPackageResolution",
      description:
        "Prevents packages from automatically being resolved to versions other than those recorded in the `Package.resolved` file",
    },
    {
      name: "-json",
      description: "Output as JSON",
    },
    {
      name: "-allowProvisioningUpdates",
      description:
        "Allow xcodebuild to communicate with the Apple Developer website. For automatically signed targets, xcodebuild will create and update profiles, app IDs, and certificates. For manually signed targets, xcodebuild will download missing or updated provisioning profiles. Requires a developer account to have been added in Xcode's Accounts preference pane",
    },
    {
      name: "-allowProvisioningDeviceRegistration",
      description:
        "Allow xcodebuild to register your destination device on the developer portal if necessary. This flag only takes effect if -allowProvisioningUpdates is also passed",
    },
    {
      name: "-scmProvider",
      description:
        "Which implementation to use for Git operations (system/xcode)",
      args: {
        name: "Implementation",
        suggestions: ["system", "xcode"],
      },
    },
    {
      name: "-showBuildTimingSummary",
      description:
        "Display a report of the timings of all the commands invoked during the build",
    },
    {
      name: "-create-xcframework",
      description:
        "Create an xcframework from prebuilt libraries; -help for more information",
    },
    {
      name: "build",
      description:
        "Build the target in the build root (SYMROOT).  This is the default build action",
    },
    {
      name: "installsrc",
      description:
        "Copy the source of the project to the source root (SRCROOT)",
    },
    {
      name: "install",
      description:
        "Build the target and install it into the target's installation directory in the distribution root (DSTROOT)",
    },
    {
      name: "clean",
      description:
        "Remove build products and intermediate files from the build root (SYMROOT)",
    },
  ],
};

export default completionSpec;
