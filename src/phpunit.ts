const completionSpec: Fig.Spec = {
  name: "phpunit",
  description:
    "The PHPUnit is a command-line test runner that can be invoked through the phpunit command",
  options: [
    {
      name: "--coverage-clover",
      description: "Generate code coverage report in Clover XML format,",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--coverage-crap4j",
      description: "Generate code coverage report in Crap4J XML format",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--coverage-html",
      description: "Generate code coverage report in HTML format",
      args: {
        name: "dir",
        template: "filepaths",
      },
    },
    {
      name: "--coverage-php",
      description: "Export PHP_CodeCoverage object to file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--coverage-text",
      requiresSeparator: true,
      description:
        "Generate code coverage report in text format [default: standard output]",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--coverage-xml",
      description: "Generate code coverage report in PHPUnit XML format",
      args: {
        name: "dir",
        template: "filepaths",
      },
    },
    {
      name: "--coverage-cache",
      description: "Cache static analysis results",
      args: {
        name: "dir",
        template: "filepaths",
      },
    },
    {
      name: "--warm-coverage-cache",
      description: "Warm static analysis cache",
    },
    {
      name: "--coverage-filter",
      description: "Include <dir> in code coverage analysis",
      args: {
        name: "dir",
        template: "filepaths",
      },
    },

    {
      name: "--path-coverage",
      description: "Perform path coverage analysis",
    },

    {
      name: "--disable-coverage-ignore",
      description: "Disable annotations for ignoring code coverage",
    },

    {
      name: "--no-coverage",
      description: "Ignore code coverage configuration",
    },
    {
      name: "--dont-report-useless-tests",
      description: "Do not report tests that do not test anything",
    },

    {
      name: "--strict-coverage",
      description: "Be strict about @covers annotation usage",
    },
    {
      name: "--strict-global-state",
      description: "Be strict about changes to global state",
    },
    {
      name: "--disallow-test-output",
      description: "Be strict about output during tests",
    },
    {
      name: "--disallow-resource-usage",
      description: "Be strict about resource usage during small tests",
    },
    {
      name: "--enforce-time-limit",
      description: "Enforce time limit based on test size",
    },
    {
      name: "--default-time-limit",
      description:
        "Timeout in seconds for tests without @small, @medium or @large",
      args: {
        name: "seconds",
      },
    },
    {
      name: "--disallow-todo-tests",
      description: "Disallow @todo-annotated tests",
    },
    {
      name: "--log-junit",
      description: "Log test execution in JUnit XML format to file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--log-teamcity",
      description: "Log test execution in TeamCity format to file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--testdox-html",
      description: "Write agile documentation in HTML format to file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--testdox-text",
      description: "Write agile documentation in Text format to file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--testdox-xml",
      description: "Write agile documentation in HTML format to file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--reverse-list",
      description: "Print defects in reverse order",
    },
    {
      name: "--no-logging",
      description: "Ignore logging configuration",
    },
    {
      name: "--prepend",
      description: "A PHP script that is included as early as possible",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--bootstrap",
      description: "A PHP script that is included before the tests run",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["-c", "--configuration"],
      description: "Read configuration from XML file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--no-configuration",
      description: "Ignore default configuration file (phpunit.xml)",
    },
    {
      name: "--extensions",
      description: "A comma separated list of PHPUnit extensions to load",
      args: {
        name: "extensions",
      },
    },
    {
      name: "--no-extensions",
      description: "Do not load PHPUnit extensions",
    },
    {
      name: "--include-path",
      description: "Prepend PHP's include_path with given path(s)",
      args: {
        name: "path(s)",
      },
    },
    {
      name: "-d",
      description: "Sets a php.ini value",
      args: {
        name: "key[=value]",
      },
    },
    {
      name: "--cache-result-file",
      description: "Specify result cache path and filename",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--generate-configuration",
      description: "Generate configuration file with suggested settings",
    },
    {
      name: "--migrate-configuration",
      description: "Migrate configuration file to current format",
    },
  ],
};

export default completionSpec;
