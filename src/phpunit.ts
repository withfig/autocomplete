const completionSpec: Fig.Spec = {
  name: "phpunit",
  description: "",
  options: 
  [
    {
      name: ["--log-junit"],
      description: "Log test execution in JUnit XML format to file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["--log-teamcity"],
      description: "Log test execution in TeamCity format to file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
    name: ["--testdox-html"],
    description: "Write agile documentation in HTML format to file",
    args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
    name: ["--testdox-text"],
    description: "Write agile documentation in Text format to file",
    args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
    name: ["--testdox-xml"],
    description: "Write agile documentation in HTML format to file",
    args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
    name: ["--reverse-list"],
    description: "Print defects in reverse order",
    },
    {
    name: ["--no-logging"],
    description: "Ignore logging configuration",
    },
    {
    name: ["--prepend"],
    description: "A PHP script that is included as early as possible",
    args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
    name: ["--bootstrap"],
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
    name: ["--no-configuration"],
    description: "Ignore default configuration file (phpunit.xml)",
    },
    {
    name: ["--extensions"],
    description: "A comma separated list of PHPUnit extensions to load",
    args: {
        name: "extensions",
      },
    },
    {
    name: ["--no-extensions"],
    description: "Do not load PHPUnit extensions",
    },
    {
    name: ["--include-path"],
    description: "Prepend PHP's include_path with given path(s)",
    args: {
        name: "path(s)",
      },
    },
    {
    name: ["-d"],
    description: "Sets a php.ini value",
    args: {
        name: "key[=value]",
      },
    },
    {
    name: ["--cache-result-file"],
    description: "Specify result cache path and filename",
    args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
    name: ["--generate-configuration"],
    description: "Generate configuration file with suggested settings",
    },
    {
    name: ["--migrate-configuration"],
    description: "Migrate configuration file to current format",
    },
  ],
};
export default completionSpec;
