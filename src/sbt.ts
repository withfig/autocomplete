const completionSpec: Fig.Spec = {
  name: "sbt",
  description: "The interactive build tool for Scala",
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help message",
    },
    {
      name: ["-V", "--verbose"],
      description: "Enable verbose logging",
    },
    {
      name: "--debug",
      description: "Set log level to debug",
    },
    {
      name: "--no-colors",
      description: "Disable ANSI color codes",
    },
    {
      name: "--color",
      description: "Enable or disable ANSI color codes",
      args: {
        name: "auto|always|true|false|never",
        suggestions: ["auto", "always", "true", "false", "never"],
      },
    },
    {
      name: "--supershell",
      description: "Enable or disable supershell",
      args: {
        name: "auto|always|true|false|never",
        suggestions: ["auto", "always", "true", "false", "never"],
      },
    },
    {
      name: "--traces",
      description: "Generate traces for debugging",
    },
    {
      name: "--timings",
      description: "Display task timings",
    },
    {
      name: "--sbt-create",
      description: "Start sbt even if current directory has no sbt project",
    },
    {
      name: "--sbt-dir",
      description: "Path to global settings/plugins directory",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--sbt-boot",
      description: "Path to shared boot directory",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--ivy",
      description: "Path to local Ivy repository",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--mem",
      description: "Set memory options (default: 1024)",
      args: {
        name: "integer",
      },
    },
    {
      name: "--no-share",
      description: "Use all local caches; no sharing",
    },
    {
      name: "--no-global",
      description: "Use global settings/plugins directory but do not share",
    },
    {
      name: "--jvm-debug",
      description: "Turn on JVM debugging, open at the given port",
      args: {
        name: "port",
      },
    },
    {
      name: "--batch",
      description: "Disable interactive mode",
    },
    {
      name: "--no-server",
      description: "Don't use the sbt server",
    },
    {
      name: "--sbt-version",
      description: "Use the specified version of sbt",
      args: {
        name: "version",
      },
    },
    {
      name: "--sbt-jar",
      description: "Use the specified jar as the sbt launcher",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--sbt-launch-dir",
      description: "Path to sbt launcher directory",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--sbt-launch-repo",
      description: "Repo url for downloading sbt launcher jar",
      args: {
        name: "url",
      },
    },
    {
      name: "-J",
      description: "Pass argument directly to the JVM",
      args: {
        name: "flag",
      },
    },
    {
      name: "-D",
      description: "Pass -Dprop=val directly to the JVM",
      args: {
        name: "prop=val",
      },
    },
  ],
  args: {
    name: "command",
    isVariadic: true,
    isOptional: true,
    suggestions: [
      {
        name: "compile",
        description: "Compile sources",
      },
      {
        name: "test",
        description: "Run all tests",
      },
      {
        name: "testOnly",
        description: "Run specific tests",
      },
      {
        name: "testQuick",
        description: "Run tests that failed previously or have new code changes",
      },
      {
        name: "run",
        description: "Run the main class",
      },
      {
        name: "runMain",
        description: "Run a specific main class",
      },
      {
        name: "clean",
        description: "Delete files produced by the build",
      },
      {
        name: "package",
        description: "Produce the main artifact (jar)",
      },
      {
        name: "publish",
        description: "Publish artifacts to a repository",
      },
      {
        name: "publishLocal",
        description: "Publish artifacts to the local Ivy repository",
      },
      {
        name: "reload",
        description: "Reload the build definition",
      },
      {
        name: "update",
        description: "Resolve and retrieve external dependencies",
      },
      {
        name: "console",
        description: "Start the Scala REPL with project classes on the classpath",
      },
      {
        name: "consoleProject",
        description:
          "Start the Scala REPL with the sbt build definition on the classpath",
      },
      {
        name: "doc",
        description: "Generate API documentation",
      },
      {
        name: "projects",
        description: "List all available projects",
      },
      {
        name: "project",
        description: "Display or switch to a project",
      },
      {
        name: "set",
        description: "Evaluate a setting and apply it to the build",
      },
      {
        name: "session",
        description: "Manipulate session settings",
      },
      {
        name: "inspect",
        description: "Display information about a setting or task",
      },
      {
        name: "tasks",
        description: "List available tasks",
      },
      {
        name: "settings",
        description: "List available settings",
      },
      {
        name: "last",
        description: "Display output from a previous command or the last command",
      },
      {
        name: "exit",
        description: "Terminate the build",
      },
      {
        name: "~compile",
        description: "Compile sources on file change (continuous)",
      },
      {
        name: "~test",
        description: "Run all tests on file change (continuous)",
      },
      {
        name: "~run",
        description: "Run the main class on file change (continuous)",
      },
      {
        name: "scalafmtAll",
        description: "Format all Scala sources",
      },
      {
        name: "scalafmtCheck",
        description: "Check if Scala sources are formatted",
      },
      {
        name: "assembly",
        description: "Create a fat JAR with all dependencies (sbt-assembly plugin)",
      },
      {
        name: "dependencyTree",
        description: "Display the dependency tree",
      },
    ],
  },
};
export default completionSpec;
