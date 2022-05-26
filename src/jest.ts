const completionSpec: Fig.Spec = {
  name: "jest",
  description:
    "A delightful JavaScript Testing Framework with a focus on simplicity",
  args: {},
  options: [
    {
      name: ["--bail", "-b"],
      description:
        "Exit the test suite immediately upon n number of failing test suite. Defaults to 1",
      args: {
        name: "n",
      },
    },
    {
      name: "--cache",
      description: "Whether to use the cache",
    },
    {
      name: "--no-cache",
      description: "Whether to use the cache",
    },
    {
      name: "--changedFilesWithAncestor",
      description:
        "Runs tests related to the current changes and the changes made in the last commit",
    },
    {
      name: "--changedSince",
      description:
        "Runs tests related to the changes since the provided branch or commit hash",
      args: {
        name: "since",
      },
    },
    {
      name: "--ci",
      description:
        "Instead of the regular behavior of storing a new snapshot automatically, will fail the test and require Jest to be run with --updateSnapshot",
    },
    {
      name: "--clearCache",
      description:
        "Deletes the Jest cache directory and then exits without running tests",
      args: {
        name: "cacheDirectory",
      },
    },
    {
      name: "--collectCoverageFrom",
      displayName: "--collectCoverageFrom=<glob>",
      requiresSeparator: true,
      description:
        "A glob pattern relative to rootDir matching the files that coverage info needs to be collected from",
      args: {
        name: "glob",
      },
    },
    {
      name: "--colors",
      description:
        "Forces test results output highlighting even if stdout is not a TTY",
    },
    {
      name: ["--config", "-c"],
      displayName: "--config=<path>",
      requiresSeparator: true,
      description:
        "The path to a Jest config file specifying how to find and execute tests",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--coverage",
      displayName: "--coverage=<boolean>",
      requiresSeparator: true,
      description: "Enable or disable coverage, disabled by default",
      args: {
        name: "true|false",
        suggestions: [
          {
            name: "true",
          },
          {
            name: "false",
          },
        ],
      },
    },
    {
      name: "--coverageProvider",
      displayName: "--coverageProvider=<provider>",
      requiresSeparator: true,
      description:
        "Indicates which provider should be used to instrument code for coverage",
      args: {
        name: "babel|v8",
        suggestions: [{ name: "babel" }, { name: "v8" }],
      },
    },
    {
      name: "--debug",
      description: "Print debugging info about your Jest config",
    },
    {
      name: "--detectOpenHandles",
      description:
        "Attempt to collect and print open handles preventing Jest from exiting cleanly",
    },
    {
      name: "--env",
      displayName: "--env=<environment>",
      requiresSeparator: true,
      description: "The test environment used for all tests",
      args: {
        name: "jsdom|node|path/to/env.js",
        template: "filepaths",
        suggestions: [{ name: "jsdom" }, { name: "node" }],
      },
    },
    {
      name: "--errorOnDeprecated",
      description: "Make calling deprecated APIs throw helpful error messages",
    },
    {
      name: ["--expand", "-e"],
      description:
        "Use this flag to show full diffs and errors instead of a patch",
    },
    {
      name: "--findRelatedTests",
      displayName: "--findRelatedTests <path1> ... <pathN>",
      description:
        "Find and run the tests that cover a space separated list of source files that were passed in as arguments",
      args: {
        name: "<path1> ... <pathN>",
      },
    },
    {
      name: "--forceExit",
      description: "Force Jest to exit after all tests have completed running",
    },
    {
      name: "--help",
      description: "Show the help information",
    },
    {
      name: "--init",
      description: "Generate a basic configuration file",
    },
    {
      name: "--injectGlobals",
      description:
        "Insert Jest's globals (expect, test, describe, beforeEach etc.) into the global environment",
    },
    {
      name: "--json",
      description: "Prints the test results in JSON",
    },
    {
      name: "--outputFile",
      displayName: "--outputFile=<filename>",
      requiresSeparator: true,
      description:
        "Write test results to a file when the --json option is also specified",
      args: {
        name: "filename",
      },
    },
    {
      name: "--lastCommit",
      description:
        "Run all tests affected by file changes in the last commit made",
    },
    {
      name: "--listTests",
      description:
        "Lists all tests as JSON that Jest will run given the arguments, and exits",
    },
    {
      name: "--logHeapUsage",
      description: "Logs the heap usage after every test",
    },
    {
      name: "--maxConcurrency",
      displayName: "--maxConcurrency=<num>",
      requiresSeparator: true,
      description:
        "Prevents Jest from executing more than the specified amount of tests at the same time",
      args: {
        name: "num",
      },
    },
    {
      name: ["--maxWorkers", "-w"],
      displayName: "--maxWorkers=<num>|<string>",
      requiresSeparator: true,
      description:
        "Specifies the maximum number of workers the worker-pool will spawn for running tests",
      args: {
        name: "<num>|<string>",
      },
    },
    {
      name: "--noStackTrace",
      description: "Disables stack trace in test results output",
    },
    {
      name: "--notify",
      description: "Activates notifications for test results",
    },
    {
      name: ["--onlyChanged", "-o"],
      description:
        "Attempts to identify which tests to run based on which files have changed in the current repository",
    },
    {
      name: "--passWithNoTests",
      description: "Allows the test suite to pass when no files are found",
    },
    {
      name: "--projects",
      displayName: "--projects <path1> ... <pathN>",
      description:
        "Run tests from one or more projects, found in the specified paths; also takes path globs",
      args: {
        name: "<path1> ... <pathN>",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "--reporters",
      displayName: "--reporters=<reporter>",
      requiresSeparator: true,
      description: "Run tests with specified reporters",
      args: {
        name: "reporter",
      },
    },
    {
      name: "--roots",
      displayName: "--roots <path1> ... <pathN>",
      description:
        "A list of paths to directories that Jest should use to search for files in",
      args: {
        name: "<path1> ... <pathN>",
        isVariadic: true,
        template: "folders",
      },
    },
    {
      name: ["--runInBand", "-i"],
      description:
        "Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests",
    },
    {
      name: "--selectProjects",
      displayName: "--selectProjects <project1> ... <projectN>",
      description: "Run only the tests of the specified projects",
      args: {
        name: "<project1> ... <projectN>",
      },
    },
    {
      name: "--runTestsByPath",
      description:
        "Run only the tests that were specified with their exact paths",
    },
    {
      name: "--setupTestFrameworkScriptFile",
      displayName: "--setupTestFrameworkScriptFile=<file>",
      requiresSeparator: true,
      description:
        "The path to a module that runs some code to configure or set up the testing framework before each test",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--showConfig",
      description: "Print your Jest config and then exits",
    },
    {
      name: "--silent",
      description: "Prevent tests from printing messages through the console",
    },
    {
      name: ["--testNamePattern", "-t"],
      displayName: "--testNamePattern=<regex>",
      requiresSeparator: true,
      description: "Run only tests with a name that matches the regex",
      args: {
        name: "regex",
      },
    },
    {
      name: "--testLocationInResults",
      description: "Adds a location field to test results",
    },
    {
      name: "--testPathPattern",
      displayName: "--testPathPattern=<regex>",
      requiresSeparator: true,
      description:
        "A regexp pattern string that is matched against all tests paths before executing the test",
      args: {
        name: "regex",
      },
    },
    {
      name: "--testPathIgnorePatterns",
      displayName: "--testPathIgnorePatterns=[array]",
      requiresSeparator: true,
      description:
        "An array of regexp pattern strings that are tested against all tests paths before executing the test",
      args: {
        name: "[array]",
      },
    },
    {
      name: "--testRunner",
      displayName: "--testRunner=<path>",
      requiresSeparator: true,
      description: "Lets you specify a custom test runner",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--testSequencer",
      displayName: "--testSequencer=<path>",
      requiresSeparator: true,
      description: "Lets you specify a custom test sequencer",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--testTimeout",
      displayName: "--testTimeout=<num>",
      requiresSeparator: true,
      description: "Default timeout of a test in milliseconds",
      args: {
        name: "timeout in ms",
      },
    },
    {
      name: ["--updateSnapshot", "-u"],
      description:
        "Use this flag to re-record every snapshot that fails during this test run",
    },
    {
      name: "--useStderr",
      description: "Divert all output to stderr",
    },
    {
      name: "--verbose",
      description:
        "Display individual test results with the test suite hierarchy",
    },
    {
      name: ["--version", "-v"],
      description: "Print the version and exit",
    },
    {
      name: "--watch",
      description:
        "Watch files for changes and rerun tests related to changed files",
    },
    {
      name: "--watchAll",
      description:
        "Watch files for changes and rerun all tests when something changes",
    },
    {
      name: "--watchman",
      description: "Whether to use watchman for file crawling",
    },
    {
      name: "--no-watchman",
      description: "Whether to use watchman for file crawling",
    },
  ],
};

export default completionSpec;
