// Code Coverage Options: 
const coverageCloverOption: Fig.Option = { 
  name: ["--coverage-clover"],
  description: "Generate code coverage report in Clover XML format,"
};

const coverageCrap4jOption: Fig.Option = {
  name: ["--coverage-crap4j"],
  description: "Generate code coverage report in Crap4J XML format",
};

const coverageHtmlOption: Fig.Option = {
  name: ["--coverage-html"],
  description: "Generate code coverage report in HTML format",
};

const coveragePhpOption: Fig.Option = {
  name: ["--coverage-php"],
  description: "Export PHP_CodeCoverage object to file",
};

const coverageTextOption: Fig.Option = {
  name: ["--coverage-text="],
  description:
    " Generate code coverage report in text format [default: standard output]",
};

const coverageXmlOption: Fig.Option = {
  name: ["--coverage-xml"],
  description: "Generate code coverage report in PHPUnit XML format",
};

const coverageCacheOption: Fig.Option = {
  name: ["--coverage-cache"],
  description: "Cache static analysis results",
};

const warmCoverageCacheOption: Fig.Option = {
  name: ["--warm-coverage-cache"],
  description: "Warm static analysis cache",
};

const coverageFilterOption: Fig.Option = {
  name: ["--coverage-filter"],
  description: "Include <dir> in code coverage analysis",
};

const pathCoverageOption: Fig.Option = {
  name: ["--path-coverage"],
  description: "Perform path coverage analysis",
};

const disableCoverageIgnoreOption: Fig.Option = {
  name: ["--disable-coverage-ignore"],
  description: "Disable annotations for ignoring code coverage",
};

const noCoverageOption: Fig.Option = {
  name: ["--no-coverage"],
  description: "Ignore code coverage configuration",
};


// Test Execution Options: 

const dontReportUselessTestsOption: Fig.Option = {
  name: ["--dont-report-useless-tests"],
  description: "Do not report tests that do not test anything",
};

const strictCoverageOption: Fig.Option = {
  name: ["--strict-coverage"],
  description: "Be strict about @covers annotation usage",
};

const strictGlobalStateOption: Fig.Option = {
  name: ["--strict-global-state"],
  description: "Be strict about changes to global state",
};


const completionSpec: Fig.Spec = {
  name: "phpunit",
  description:
    "The PHPUnit is a command-line test runner that can be invoked through the phpunit command",
  options: [

    // Code Coverage Options:
    coverageCloverOption,
    coverageCrap4jOption,
    coverageHtmlOption,
    coveragePhpOption,
    coverageTextOption,
    coverageXmlOption,
    coverageCacheOption,
    warmCoverageCacheOption,
    coverageFilterOption,
    pathCoverageOption,
    disableCoverageIgnoreOption,
    noCoverageOption,

    // Test Execution Option: 
    dontReportUselessTestsOption, 
    strictCoverageOption, 
    strictGlobalStateOption, 
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
