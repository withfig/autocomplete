const consoleModeArg: Fig.Arg = {
  name: "mode",
  default: "auto",
  suggestions: [
    {
      name: "auto",
      description:
        "Enables color and other rich output in the console output when the build process is attached to a console, or to generate plain text only when not attached to a console",
    },
    {
      name: "plain",
      description:
        "Disables all color and other rich output in the console output. This is the default when Gradle is not attached to a terminal",
    },
    {
      name: "rich",
      description:
        "Enables color and other rich output in the console output, regardless of whether the build process is not attached to a console",
    },
    {
      name: "verbose",
      description:
        "Enables color and other rich output like the rich, but output task names and outcomes at the lifecycle log level, as is done by default in Gradle 3.5 and earlier",
    },
  ],
};

const warningModeArg: Fig.Arg = {
  name: "mode",
  default: "summary",
  suggestions: [
    {
      name: "all",
      description: "Log all warnings",
    },
    {
      name: "fail",
      description:
        "Log all warnings and fail the build if there are any warnings",
    },
    {
      name: "summary",
      description:
        "Suppress all warnings and log a summary at the end of the build",
    },
    {
      name: "none",
      description:
        "Suppress all warnings, including the summary at the end of the build",
    },
  ],
};

const sharedOptions: Fig.Option[] = [
  {
    name: ["-?", "-h", "--help"],
    description: "Shows a help message with all available CLI options",
  },
  {
    name: ["-v", "--version"],
    description:
      "Prints Gradle, Groovy, Ant, JVM, and operating system version information",
  },
  {
    name: ["-S", "--full-stacktrace"],
    description:
      "Print out the full (very verbose) stacktrace for any exceptions",
  },
  {
    name: ["-s", "--stacktrace"],
    description:
      "Print out the stacktrace also for user exceptions (e.g. compile error)",
  },
  {
    name: "--scan",
    description:
      "Create a build scan with fine-grained information about all aspects of your Gradle build",
  },
  {
    name: "-Dorg.gradle.debug",
    description:
      "Debug Gradle client (non-Daemon) process. Gradle will wait for you to attach a debugger at localhost:5005 by default",
  },
  {
    name: "-Dorg.gradle.daemon.debug",
    description: "Debug Gradle Daemon process",
  },
  {
    name: "--build-cache",
    description:
      "Toggles the Gradle build cache. Gradle will try to reuse outputs from previous builds. Default is off",
    exclusiveOn: ["--no-build-cache"],
  },
  {
    name: "--no-build-cache",
    description:
      "Toggles the Gradle build cache. Gradle will try to reuse outputs from previous builds. Default is off",
    exclusiveOn: ["--build-cache"],
  },
  {
    name: "--configure-on-demand",
    description:
      "Toggles Configure-on-demand. Only relevant projects are configured in this build run. Default is off",
    exclusiveOn: ["--configure-on-demand"],
  },
  {
    name: "--no-configure-on-demand",
    description:
      "Toggles Configure-on-demand. Only relevant projects are configured in this build run. Default is off",
    exclusiveOn: ["--configure-on-demand"],
  },
  {
    name: "--max-workers",
    description:
      "Sets maximum number of workers that Gradle may use. Default is number of processors",
    args: {
      name: "number",
    },
  },
  {
    name: "--parallel",
    description:
      "Build projects in parallel. For limitations of this option, see Parallel Project Execution. Default is off",
    exclusiveOn: ["--no-parallel"],
  },
  {
    name: "--no-parallel",
    description: "Disables --parallel",
    exclusiveOn: ["--parallel"],
  },
  {
    name: "--priority",
    description:
      "Specifies the scheduling priority for the Gradle daemon and all processes launched by it",
    args: {
      name: "priority",
      default: "normal",
      suggestions: ["normal", "low"],
    },
  },
  {
    name: "--profile",
    description:
      "Generates a high-level performance report in the $buildDir/reports/profile directory. --scan is preferred",
  },
  {
    name: "--scan",
    description: "Generate a build scan with detailed performance diagnostics",
  },
  {
    name: "--watch-fs",
    description:
      "Toggles watching the file system. When enabled Gradle re-uses information it collects about the file system between builds. Enabled by default on operating systems where Gradle supports this feature",
    exclusiveOn: ["--no-watch-fs"],
  },
  {
    name: "--no-watch-fs",
    description:
      "Toggles watching the file system. When enabled Gradle re-uses information it collects about the file system between builds. Enabled by default on operating systems where Gradle supports this feature",
    exclusiveOn: ["--watch-fs"],
  },
  {
    name: "--daemon",
    description:
      "Use the Gradle Daemon to run the build. Starts the daemon if not running or existing daemon busy. Default is on",
    exclusiveOn: ["--no-daemon"],
  },
  {
    name: "--no-daemon",
    description: "Disables --daemon",
    exclusiveOn: ["--daemon"],
  },
  {
    name: "--foreground",
    description: "Starts the Gradle Daemon in a foreground process",
  },
  {
    name: "-Dorg.gradle.daemon.idletimeout",
    description:
      "Gradle Daemon will stop itself after this number of milliseconds of idle time",
    args: {
      name: "milliseconds",
      default: "10800000",
    },
  },
  {
    name: "-Dorg.gradle.logging.level",
    description: "Set logging level via Gradle properties",
    args: {
      name: "level",
      suggestions: ["quiet", "warn", "lifecycle", "info", "debug"],
    },
  },
  {
    name: ["-q", "--quiet"],
    description: "Log errors only",
  },
  {
    name: ["-w", "--warn"],
    description: "Set log level to warn",
  },
  {
    name: ["-i", "--info"],
    description: "Set log level to info",
  },
  {
    name: ["-d", "--debug"],
    description: "Log in debug mode (includes normal stacktrace)",
  },
  {
    name: "-Dorg.gradle.console",
    description: "Specify console mode via Gradle properties",
    args: consoleModeArg,
  },
  {
    name: "--console",
    description: "Specifies which type of console output to generate",
    args: consoleModeArg,
  },
  {
    name: "-Dorg.gradle.warning.mode",
    description: "Specify warning mode via Gradle properties",
    args: warningModeArg,
  },
  {
    name: "--warning-mode",
    description: "Specifies how to log warning",
    args: warningModeArg,
  },
  {
    name: "--include-build",
    description: "Run the build as a composite, including the specified build",
  },
  {
    name: "--offline",
    description:
      "Specifies that the build should operate without accessing network resources",
  },
  {
    name: "--refresh-dependencies",
    description: "Refresh the state of dependencies",
  },
  {
    name: "--dry-run",
    description:
      "Run Gradle with all task actions disabled. Use this to show which task would have executed",
  },
  {
    name: "--write-locks",
    description:
      "Indicates that all resolved configurations that are lockable should have their lock state persisted",
  },
  {
    name: "--update-locks",
    description:
      "Indicates that versions for the specified modules have to be updated in the lock file",
    args: {
      name: "group:name",
      isVariadic: true,
    },
  },
  {
    name: "--no-rebuild",
    description:
      "Do not rebuild project dependencies. Useful for debugging and fine-tuning buildSrc, but can lead to wrong results. Use with caution",
    isDangerous: true,
  },
  {
    name: ["-b", "--build-file"],
    description:
      "Specifies the build file. For example: gradle --build-file=foo.gradle",
    args: {
      name: "file",
      default: "build.gradle",
      template: "filepaths",
    },
  },
  {
    name: ["-c", "--settings-file"],
    description:
      "Specifies the settings file. For example: gradle --settings-file=somewhere/else/settings.gradle",
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  {
    name: ["-g", "--gradle-user-home"],
    description:
      "Specifies the Gradle user home directory. The default is the .gradle directory in the user’s home directory",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: ["-p", "--project-dir"],
    description: "Specifies the start directory for Gradle",
    args: {
      name: "directory",
      default: "./",
      template: "folders",
    },
  },
  {
    name: "--project-cache-dir",
    description:
      "Specifies the project-specific cache directory. Default value is .gradle in the root project directory",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: ["-D", "--system-prop"],
    description:
      "Sets a system property of the JVM, for example -Dmyprop=myvalue",
    args: {
      name: "system property",
    },
  },
  {
    name: ["-I", "--init-script"],
    description: "Specifies an initialization script",
  },
  {
    name: ["-P", "--project-prop"],
    description:
      "Sets a project property of the root project, for example -Pmyprop=myvalue",
    args: {
      name: "system property",
    },
  },
  {
    name: "-Dorg.gradle.jvmargs",
    description: "Set JVM arguments",
    args: {
      name: "arguments",
    },
  },
  {
    name: "-Dorg.gradle.java.home",
    description: "Set JDK home dir",
    args: {
      name: "directory",
      template: "folders",
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "gradle",
  description:
    "Gradle is an open-source build automation tool that is designed to be flexible enough to build almost any type of software",
  subcommands: [
    {
      name: "build",
      description: "Compute all outputs",
      options: sharedOptions,
    },
    {
      name: "run",
      description: "Run applications",
      options: sharedOptions,
    },
    {
      name: "check",
      description: "Run all checks",
      options: sharedOptions,
    },
    {
      name: "clean",
      description: "Clear the contents of the build directory",
      options: sharedOptions,
    },
    {
      name: "projects",
      description: "List of all sub-projects",
      options: sharedOptions,
    },
    {
      name: "tasks",
      description: "List of main tasks of the selected project",
      options: [
        {
          name: "--all",
          description:
            "By default, this report shows only those tasks which have been assigned to a task group. You can obtain more information in the task listing using the --all option",
        },
        {
          name: "--group",
          description:
            "If you need to be more precise, you can display only the tasks from a specific group",
          args: {
            name: "group",
          },
        },
        ...sharedOptions,
      ],
    },
    {
      name: "help",
      description: "Display task usage information",
      options: [
        {
          name: "--task",
          isRequired: true,
          args: {
            name: "task",
          },
        },
        ...sharedOptions,
      ],
    },
    {
      name: "dependencies",
      description:
        "Gives you a list of the dependencies of the selected project, broken down by configuration",
      options: sharedOptions,
    },
    {
      name: "buildEnvironment",
      description:
        "Visualises the buildscript dependencies of the selected project",
      options: sharedOptions,
    },
    {
      name: "dependencyInsight",
      description:
        "Gives you an insight into a particular dependency (or dependencies) that match specified input",
      options: sharedOptions,
    },
    {
      name: "properties",
      description: "Gives you a list of the properties of the selected project",
      options: sharedOptions,
    },
    {
      name: "--status",
      description:
        "(Standalone command) List running and recently stopped Gradle daemons. Only displays daemons of the same Gradle version",
    },
    {
      name: "--stop",
      description:
        "(Standalone command) Stop all Gradle Daemons of the same version",
    },
    {
      name: "init",
      description: "Create new Gradle builds, with new or existing projects",
      options: [
        {
          name: "--type",
          description: "Specify project type",
          args: {
            name: "type",
            default: "basic",
            suggestions: ["basic", "java-library", "java-application"],
          },
        },
        ...sharedOptions,
      ],
    },
    {
      name: "wrapper",
      description:
        "Generates a script, gradlew, that invokes a declared version of Gradle, downloading it beforehand if necessary",
      options: [
        {
          name: "--gradle-version",
          description:
            "The Gradle version used for downloading and executing the Wrapper",
          args: {
            name: "version",
          },
        },
        {
          name: "--distribution-type",
          description: "The Gradle distribution type used for the Wrapper",
          args: {
            name: "type",
            default: "bin",
            suggestions: ["bin", "all"],
          },
        },
        {
          name: "--gradle-distribution-url",
          description: "The full URL pointing to Gradle distribution ZIP file",
          args: {
            name: "url",
          },
        },
        {
          name: "--gradle-distribution-sha256-sum",
          description:
            "The SHA256 hash sum used for verifying the downloaded Gradle distribution",
          args: {
            name: "SHA256 hash sum",
          },
        },
        ...sharedOptions,
      ],
    },
    {
      name: "test",
      description: "Run a test task",
      options: [
        {
          name: "--continuous",
          description:
            "Allows you to automatically re-execute the requested tasks when task inputs change",
        },
        {
          name: "--rerun-tasks",
          description:
            "This will force test and all task dependencies of test to execute",
        },
        {
          name: "--continue",
          description:
            "Gradle will execute every task to be executed where all of the dependencies for that task completed without failure",
        },
        ...sharedOptions,
      ],
    },
  ],
  options: [...sharedOptions],

  // There isn't a generator for gradle tasks (takes too long)
  args: {
    name: "task name",
    isVariadic: true,
    isOptional: true,
  },
};

export default completionSpec;
