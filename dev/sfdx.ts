const completionSpec: Fig.Spec = {
  name: "sfdx",
  description: "",
  subcommands: [
    {
      name: "force:lightning:lint",
      description: "analyze (lint) Aura component code",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-i", "--ignore"],
          description: "pattern used to ignore some folders",
          args: {
            name: "ignore",
            isOptional: false,
          },
        },
        {
          name: "--files",
          description: "pattern used to include specific files",
          args: {
            name: "files",
            isOptional: false,
          },
        },
        {
          name: "--config",
          description: "path to a custom ESLint configuration file",
          args: {
            name: "config",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "report warnings in addition to errors",
        },
        {
          name: "--exit",
          description: "exit with error code 1 if there are lint issues",
        },
      ],
      args: [
        {
          name: "path",
          isOptional: true,
        },
      ],
    },
    {
      name: "fig-completion",
      description: "Generate a Fig completion spec",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-o", "--output"],
          description:
            "filepath to export completion spec (do not specify file extension)",
          args: {
            name: "output",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--lang"],
          description: "",
          args: {
            name: "lang",
            isOptional: false,
            suggestions: [" ts", "js"],
          },
        },
      ],
      args: [
        {
          name: "file",
          isOptional: true,
        },
      ],
    },
    {
      name: "commands",
      description: "list all the commands",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-j", "--json"],
          description: "display unfiltered api data in json format",
        },
        {
          name: "--hidden",
          description: "show hidden commands",
        },
        {
          name: "--columns",
          description: "only show provided columns (comma-separated)",
          args: {
            name: "columns",
            isOptional: false,
          },
        },
        {
          name: "--sort",
          description: "property to sort by (prepend '-' for descending)",
          args: {
            name: "sort",
            isOptional: false,
          },
        },
        {
          name: "--filter",
          description:
            "filter property by partial string matching, ex: name=foo",
          args: {
            name: "filter",
            isOptional: false,
          },
        },
        {
          name: "--csv",
          description: "output is csv format [alias: --output=csv]",
        },
        {
          name: "--output",
          description: "output in a more machine friendly format",
          args: {
            name: "output",
            isOptional: false,
            suggestions: ["csv", "json", "yaml"],
          },
        },
        {
          name: ["-x", "--extended"],
          description: "show extra columns",
        },
        {
          name: "--no-truncate",
          description: "do not truncate output to fit screen",
        },
        {
          name: "--no-header",
          description: "hide table header from output",
        },
      ],
      args: [],
    },
    {
      name: "plugins",
      description: "list installed plugins",
      options: [
        {
          name: "--core",
          description: "show core plugins",
        },
      ],
      args: [],
    },
    {
      name: "plugins:inspect",
      description: "displays installation properties of a plugin",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: [
        {
          name: "plugin",
          description: "plugin to inspect",
          isOptional: false,
        },
      ],
    },
    {
      name: ["plugins:install", "plugins:add"],
      description: "installs a plugin into the CLI",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-f", "--force"],
          description: "yarn install with force flag",
        },
      ],
      args: [
        {
          name: "plugin",
          description: "plugin to install",
          isOptional: false,
        },
      ],
    },
    {
      name: "plugins:link",
      description: "links a plugin into the CLI for development",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: [
        {
          name: "path",
          description: "path to plugin",
          isOptional: false,
        },
      ],
    },
    {
      name: ["plugins:uninstall", "plugins:unlink", "plugins:remove"],
      description: "removes a plugin from the CLI",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: [
        {
          name: "plugin",
          description: "plugin to uninstall",
          isOptional: true,
        },
      ],
    },
    {
      name: "plugins:update",
      description: "update installed plugins",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: [],
    },
    {
      name: "autocomplete",
      description: "display autocomplete installation instructions",
      options: [
        {
          name: ["-r", "--refresh-cache"],
          description: "Refresh cache (ignores displaying instructions)",
        },
      ],
      args: [
        {
          name: "shell",
          description: "shell type",
          isOptional: true,
        },
      ],
    },
    {
      name: "update",
      description: "update the <%= config.bin %> CLI",
      options: [
        {
          name: "--from-local",
          description: "interactively choose an already installed version",
        },
      ],
      args: [
        {
          name: "channel",
          isOptional: true,
        },
      ],
    },
    {
      name: "which",
      description: "show which plugin a command is in",
      options: [],
      args: [
        {
          name: "command",
          isOptional: false,
        },
      ],
    },
    {
      name: "force:cmdt:create",
      description: "creates a new custom metadata type in the current project",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-n", "--typename"],
          description: "unique object name for the custom metadata type",
          args: {
            name: "typename",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--label"],
          description: "label for the custom metadata type",
          args: {
            name: "label",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--plurallabel"],
          description:
            "plural version of the label value; if blank, uses label",
          args: {
            name: "plurallabel",
            isOptional: false,
          },
        },
        {
          name: ["-v", "--visibility"],
          description: "visibility of the custom metadata type",
          args: {
            name: "visibility",
            isOptional: false,
            suggestions: ["PackageProtected", "Protected", "Public"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description:
            "directory to store the newly-created custom metadata type files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
      args: [
        {
          name: "file",
          isOptional: true,
        },
      ],
    },
    {
      name: "force:cmdt:field:create",
      description:
        "generate a custom metadata field based on the field type provided",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-n", "--fieldname"],
          description: "unique name for the field",
          args: {
            name: "fieldname",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--fieldtype"],
          description: "type of field",
          args: {
            name: "fieldtype",
            isOptional: false,
            suggestions: [
              "Checkbox",
              "Date",
              "DateTime",
              "Email",
              "Number",
              "Percent",
              "Phone",
              "Picklist",
              "Text",
              "TextArea",
              "LongTextArea",
              "Url",
            ],
          },
        },
        {
          name: ["-p", "--picklistvalues"],
          description:
            "comma-separated list of picklist values; required for Picklist fields",
          args: {
            name: "picklistvalues",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--decimalplaces"],
          description:
            "number of decimal places to use for Number or Percent fields",
          args: {
            name: "decimalplaces",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--label"],
          description: "label for the field",
          args: {
            name: "label",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description:
            "directory to store newly-created field definition files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
      args: [
        {
          name: "file",
          isOptional: true,
        },
      ],
    },
    {
      name: "force:cmdt:generate",
      description:
        "generates a custom metadata type and all its records for the provided sObject",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--devname"],
          description: "name of the custom metadata type",
          args: {
            name: "devname",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--label"],
          description: "label for the custom metadata type",
          args: {
            name: "label",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--plurallabel"],
          description:
            "plural version of the label value; if blank, uses label",
          args: {
            name: "plurallabel",
            isOptional: false,
          },
        },
        {
          name: ["-v", "--visibility"],
          description: "visibility of the custom metadata type",
          args: {
            name: "visibility",
            isOptional: false,
            suggestions: ["PackageProtected", "Protected", "Public"],
          },
        },
        {
          name: ["-s", "--sobjectname"],
          description:
            "API name of the sObject source for custom metadata generation",
          args: {
            name: "sobjectname",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--ignoreunsupported"],
          description: "ignore unsupported field types",
        },
        {
          name: ["-d", "--typeoutputdir"],
          description:
            "directory to store newly-created custom metadata type files",
          args: {
            name: "typeoutputdir",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--recordsoutputdir"],
          description:
            "directory to store newly-created custom metadata record files",
          args: {
            name: "recordsoutputdir",
            isOptional: false,
          },
        },
      ],
      args: [
        {
          name: "file",
          isOptional: true,
        },
      ],
    },
    {
      name: "force:cmdt:record:create",
      description:
        "create a new record for a given custom metadata type in the current project",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-t", "--typename"],
          description:
            "API name of the custom metadata type to create a record for",
          args: {
            name: "typename",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--recordname"],
          description: "name for the new record",
          args: {
            name: "recordname",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--label"],
          description: "label for the new record",
          args: {
            name: "label",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--protected"],
          description: "protect the record when it is in a managed package",
          args: {
            name: "protected",
            isOptional: false,
            suggestions: ["true", "false"],
          },
        },
        {
          name: ["-i", "--inputdir"],
          description:
            "directory to pull the custom metadata type definition from",
          args: {
            name: "inputdir",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description:
            "directory to store newly-created custom metadata record files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:cmdt:record:insert",
      description: "create new custom metadata type records from a CSV file",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-f", "--filepath"],
          description: "path to the CSV file",
          args: {
            name: "filepath",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--typename"],
          description: "API name of the custom metadata type",
          args: {
            name: "typename",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--inputdir"],
          description:
            "directory to pull the custom metadata type definition from",
          args: {
            name: "inputdir",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description:
            "directory to store newly-created custom metadata record files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--namecolumn"],
          description:
            "column that is used to determine the name of the record",
          args: {
            name: "namecolumn",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: ["alias:list", "force:alias:list"],
      description: "list username aliases for the Salesforce CLI",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
      ],
      args: [],
    },
    {
      name: ["alias:set", "force:alias:set"],
      description: "set username aliases for the Salesforce CLI",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
      ],
      args: [],
    },
    {
      name: "alias:unset",
      description: "unsets aliases for the Salesforce CLI",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
      ],
      args: [],
    },
    {
      name: "force:apex:execute",
      description: "executes anonymous Apex code",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--apexcodefile"],
          description: "path to a local file that contains Apex code",
          args: {
            name: "apexcodefile",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:apex:log:get",
      description: "fetch debug logs",
      options: [
        {
          name: "--json",
          description: "format output as JSON",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--logid"],
          description: "id of the log to display",
          args: {
            name: "logid",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--number"],
          description: "number of most recent logs to display",
          args: {
            name: "number",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "directory for saving the log files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:apex:log:list",
      description:
        "display a list of IDs and general information about debug logs",
      options: [
        {
          name: "--json",
          description: "format output as JSON",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:apex:test:report",
      description: "display test results for a specific asynchronous test run",
      options: [
        {
          name: "--json",
          description: "format output as JSON",
        },
        {
          name: "--loglevel",
          description:
            "[default: warn] logging level for this command invocation; logs are stored in $HOME/.sfdx/sfdx.log",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--testrunid"],
          description: "the ID of the test run",
          args: {
            name: "testrunid",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--codecoverage"],
          description: "retrieves code coverage results",
        },
        {
          name: ["-d", "--outputdir"],
          description: "directory to store test result files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--resultformat"],
          description: "Permissible values are: human, tap, junit, json",
          args: {
            name: "resultformat",
            isOptional: false,
            suggestions: ["human", "tap", "junit", "json"],
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "sets the streaming client socket timeout in minutes; specify a longer wait time if timeouts occur frequently",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description:
            "display Apex test processing details; if JSON is specified, processing details aren't displayed",
        },
      ],
      args: [],
    },
    {
      name: "force:apex:test:run",
      description: "invoke Apex tests",
      options: [
        {
          name: "--json",
          description: "format output as JSON",
        },
        {
          name: "--loglevel",
          description:
            "[default: warn] logging level for this command invocation; logs are stored in $HOME/.sfdx/sfdx.log",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--codecoverage"],
          description: "retrieves code coverage results",
        },
        {
          name: ["-d", "--outputdir"],
          description: "directory to store test run files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--testlevel"],
          description:
            "specifies which tests to run, using one of these TestLevel enum values:\nRunSpecifiedTests—Only the tests that you specify are run.\nRunLocalTests—All tests in your org are run, except the ones that originate from installed managed packages.\nRunAllTestsInOrg—All tests are in your org and in installed managed packages are run",
          args: {
            name: "testlevel",
            isOptional: false,
            suggestions: [
              "RunLocalTests",
              "RunAllTestsInOrg",
              "RunSpecifiedTests",
            ],
          },
        },
        {
          name: ["-n", "--classnames"],
          description:
            "comma-separated list of Apex test class names to run; if you select --classnames, you can't specify --suitenames or --tests",
          args: {
            name: "classnames",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--resultformat"],
          description: "Permissible values are: human, tap, junit, json",
          args: {
            name: "resultformat",
            isOptional: false,
            suggestions: ["human", "tap", "junit", "json"],
          },
        },
        {
          name: ["-s", "--suitenames"],
          description:
            "comma-separated list of Apex test suite names to run; if you select --suitenames, you can't specify --classnames or --tests",
          args: {
            name: "suitenames",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--tests"],
          description:
            "comma-separated list of Apex test class names or IDs and, if applicable, test methods to run; if you specify --tests, you can't specify --classnames or --suitenames",
          args: {
            name: "tests",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "sets the streaming client socket timeout in minutes; specify a longer wait time if timeouts occur frequently",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-y", "--synchronous"],
          description:
            "runs test methods from a single Apex class synchronously; if not specified, tests are run ansynchronously",
        },
        {
          name: "--verbose",
          description:
            "display Apex test processing details; if JSON is specified, processing details aren't displayed",
        },
        {
          name: ["-v", "--detailedcoverage"],
          description: "display detailed code coverage per test",
        },
      ],
      args: [],
    },
    {
      name: ["config:get", "force:config:get"],
      description: "get config var values for given names",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: "--verbose",
          description: "emit additional command output to stdout",
        },
      ],
      args: [],
    },
    {
      name: ["config:list", "force:config:list"],
      description:
        "lists the config variables that the Salesforce CLI uses for various commands and tasks.",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
      ],
      args: [],
    },
    {
      name: ["config:set", "force:config:set"],
      description:
        "sets the configuration variables that the Salesforce CLI uses for various commands and tasks.",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-g", "--global"],
          description:
            "set config var globally (to be used from any directory)",
        },
      ],
      args: [],
    },
    {
      name: "config:unset",
      description:
        "unsets the local and global configuration variables for the Salesforce CLI.",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-g", "--global"],
          description:
            "unset config var globally (to be used from any directory)",
        },
      ],
      args: [],
    },
    {
      name: "force:data:bulk:delete",
      description: "bulk delete records from a csv file",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--csvfile"],
          description:
            "the path to the CSV file containing the ids of the records to delete",
          args: {
            name: "csvfile",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "the sObject type of the records you’re deleting",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "the number of minutes to wait for the command to complete before displaying the results",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:data:bulk:status",
      description: "view the status of a bulk data load job or batch",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-b", "--batchid"],
          description: "the ID of the batch whose status you want to view",
          args: {
            name: "batchid",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--jobid"],
          description:
            "the ID of the job you want to view or of the job whose batch you want to view",
          args: {
            name: "jobid",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:data:bulk:upsert",
      description: "bulk upsert records from a CSV file",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--externalid"],
          description: "the column name of the external ID",
          args: {
            name: "externalid",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--csvfile"],
          description:
            "the path to the CSV file that defines the records to upsert",
          args: {
            name: "csvfile",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "the sObject type of the records you want to upsert",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "the number of minutes to wait for the command to complete before displaying the results",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--serial"],
          description: "run batches in serial mode",
        },
      ],
      args: [],
    },
    {
      name: "force:data:record:create",
      description: "creates and inserts a record",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "the type of the record you’re creating",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-v", "--values"],
          description: "the <fieldName>=<value> pairs you’re creating",
          args: {
            name: "values",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--usetoolingapi"],
          description: "create the record with tooling api",
        },
        {
          name: "--perflog",
          description: "get API performance data",
        },
      ],
      args: [],
    },
    {
      name: "force:data:record:delete",
      description: "deletes a single record",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "the type of the record you’re deleting",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--sobjectid"],
          description: "the ID of the record you’re deleting",
          args: {
            name: "sobjectid",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--where"],
          description: "a list of <fieldName>=<value> pairs to search for",
          args: {
            name: "where",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--usetoolingapi"],
          description: "delete the record with Tooling API",
        },
        {
          name: "--perflog",
          description: "get API performance data",
        },
      ],
      args: [],
    },
    {
      name: "force:data:record:get",
      description: "displays a single record",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "the type of the record you’re retrieving",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--sobjectid"],
          description: "the ID of the record you’re retrieving",
          args: {
            name: "sobjectid",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--where"],
          description: "a list of <fieldName>=<value> pairs to search for",
          args: {
            name: "where",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--usetoolingapi"],
          description: "retrieve the record with Tooling API",
        },
        {
          name: "--perflog",
          description: "get API performance data",
        },
      ],
      args: [],
    },
    {
      name: "force:data:record:update",
      description: "updates a single record",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "the sObject type of the record you’re updating",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--sobjectid"],
          description: "the ID of the record you’re updating",
          args: {
            name: "sobjectid",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--where"],
          description: "a list of <fieldName>=<value> pairs to search for",
          args: {
            name: "where",
            isOptional: false,
          },
        },
        {
          name: ["-v", "--values"],
          description: "the <fieldName>=<value> pairs you’re updating",
          args: {
            name: "values",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--usetoolingapi"],
          description: "update the record with Tooling API",
        },
        {
          name: "--perflog",
          description: "get API performance data",
        },
      ],
      args: [],
    },
    {
      name: "force:data:soql:query",
      description: "execute a SOQL query",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-q", "--query"],
          description: "SOQL query to execute",
          args: {
            name: "query",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--usetoolingapi"],
          description: "execute query with Tooling API",
        },
        {
          name: ["-r", "--resultformat"],
          description:
            "result format emitted to stdout; --json flag overrides this parameter",
          args: {
            name: "resultformat",
            isOptional: false,
            suggestions: ["human", "csv", "json"],
          },
        },
        {
          name: "--perflog",
          description: "get API performance data",
        },
      ],
      args: [],
    },
    {
      name: "force:data:tree:export",
      description: "export data from an org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-q", "--query"],
          description:
            "soql query, or filepath of file containing a soql query, to retrieve records",
          args: {
            name: "query",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--plan"],
          description:
            "generate mulitple sobject tree files and a plan definition file for aggregated import",
        },
        {
          name: ["-x", "--prefix"],
          description: "prefix of generated files",
          args: {
            name: "prefix",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "directory to store files'",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:data:tree:import",
      description: "import data into an org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--sobjecttreefiles"],
          description:
            "comma-delimited, ordered paths of json files containing collection of record trees to insert",
          args: {
            name: "sobjecttreefiles",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--plan"],
          description:
            "path to plan to insert multiple data files that have master-detail relationships",
          args: {
            name: "plan",
            isOptional: false,
          },
        },
        {
          name: "--confighelp",
          description:
            "display schema information for the --plan configuration file to stdout; if you use this option, all other options except --json are ignored",
        },
      ],
      args: [],
    },
    {
      name: ["auth:accesstoken:store", "force:auth:accesstoken:store"],
      description: "authorize an org using an existing Salesforce access token",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-r", "--instanceurl"],
          description: "the login URL of the instance the org lives on",
          args: {
            name: "instanceurl",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--setdefaultdevhubusername"],
          description:
            "set the authenticated org as the default dev hub org for scratch org creation",
        },
        {
          name: ["-s", "--setdefaultusername"],
          description:
            "set the authenticated org as the default username that all commands run against",
        },
        {
          name: ["-a", "--setalias"],
          description: "set an alias for the authenticated org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--noprompt"],
          description: "do not prompt for confirmation",
        },
      ],
      args: [],
    },
    {
      name: ["auth:device:login", "force:auth:device:login"],
      description: "authorize an org using a device code",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-i", "--clientid"],
          description: "OAuth client ID (sometimes called the consumer key)",
          args: {
            name: "clientid",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--instanceurl"],
          description: "the login URL of the instance the org lives on",
          args: {
            name: "instanceurl",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--setdefaultdevhubusername"],
          description:
            "set the authenticated org as the default dev hub org for scratch org creation",
        },
        {
          name: ["-s", "--setdefaultusername"],
          description:
            "set the authenticated org as the default username that all commands run against",
        },
        {
          name: ["-a", "--setalias"],
          description: "set an alias for the authenticated org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: ["auth:jwt:grant", "force:auth:jwt:grant"],
      description: "authorize an org using the JWT flow",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--username"],
          description: "authentication username",
          args: {
            name: "username",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--jwtkeyfile"],
          description: "path to a file containing the private key",
          args: {
            name: "jwtkeyfile",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--clientid"],
          description: "OAuth client ID (sometimes called the consumer key)",
          args: {
            name: "clientid",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--instanceurl"],
          description: "the login URL of the instance the org lives on",
          args: {
            name: "instanceurl",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--setdefaultdevhubusername"],
          description:
            "set the authenticated org as the default dev hub org for scratch org creation",
        },
        {
          name: ["-s", "--setdefaultusername"],
          description:
            "set the authenticated org as the default username that all commands run against",
        },
        {
          name: ["-a", "--setalias"],
          description: "set an alias for the authenticated org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: ["auth:list", "force:auth:list"],
      description: "list auth connection information",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
      ],
      args: [],
    },
    {
      name: ["auth:logout", "force:auth:logout"],
      description: "log out from authorized orgs",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--all"],
          description: "include all authenticated orgs",
        },
        {
          name: ["-p", "--noprompt"],
          description: "do not prompt for confirmation",
        },
      ],
      args: [],
    },
    {
      name: ["auth:sfdxurl:store", "force:auth:sfdxurl:store"],
      description: "Authorize an org using an SFDX auth URL",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-f", "--sfdxurlfile"],
          description: "path to a file containing the sfdx url",
          args: {
            name: "sfdxurlfile",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--setdefaultdevhubusername"],
          description:
            "set the authenticated org as the default dev hub org for scratch org creation",
        },
        {
          name: ["-s", "--setdefaultusername"],
          description:
            "set the authenticated org as the default username that all commands run against",
        },
        {
          name: ["-a", "--setalias"],
          description: "set an alias for the authenticated org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: ["auth:web:login", "force:auth:web:login"],
      description: "authorize an org using the web login flow",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-i", "--clientid"],
          description: "OAuth client ID (sometimes called the consumer key)",
          args: {
            name: "clientid",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--instanceurl"],
          description: "the login URL of the instance the org lives on",
          args: {
            name: "instanceurl",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--setdefaultdevhubusername"],
          description:
            "set the authenticated org as the default dev hub org for scratch org creation",
        },
        {
          name: ["-s", "--setdefaultusername"],
          description:
            "set the authenticated org as the default username that all commands run against",
        },
        {
          name: ["-a", "--setalias"],
          description: "set an alias for the authenticated org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:limits:api:display",
      description: "display current org’s limits",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:limits:recordcounts:display",
      description:
        "display record counts for the specified standard and custom objects",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description:
            "comma-separated list of API names of standard or custom objects for which to display record counts",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:org:display",
      description: "get the description for the current or target org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "emit additional command output to stdout",
        },
      ],
      args: [],
    },
    {
      name: "force:org:list",
      description: "list all orgs you’ve created or authenticated to",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: "--verbose",
          description: "list more information about each org'",
        },
        {
          name: "--all",
          description:
            "include expired, deleted, and unknown-status scratch orgs",
        },
        {
          name: "--clean",
          description:
            "remove all local org authorizations for non-active orgs",
        },
        {
          name: ["-p", "--noprompt"],
          description: "do not prompt for confirmation",
        },
        {
          name: "--skipconnectionstatus",
          description:
            "skip retrieving the connection status of non-scratch orgs",
        },
      ],
      args: [],
    },
    {
      name: "force:org:open",
      description: "open your default scratch org, or another specified org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--path"],
          description: "navigation URL path",
          args: {
            name: "path",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--urlonly"],
          description: "display navigation URL, but don’t launch browser",
        },
      ],
      args: [],
    },
    {
      name: "force:source:convert",
      description: "convert source into Metadata API format ",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-r", "--rootdir"],
          description:
            "a source directory other than the default package to convert",
          args: {
            name: "rootdir",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description:
            "output directory to store the Metadata API–formatted files in",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--packagename"],
          description:
            "name of the package to associate with the metadata-formatted files",
          args: {
            name: "packagename",
            isOptional: false,
          },
        },
        {
          name: ["-x", "--manifest"],
          description:
            "file path to manifest (package.xml) of metadata types to convert.",
          args: {
            name: "manifest",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--sourcepath"],
          description:
            "comma-separated list of paths to the local source files to convert",
          args: {
            name: "sourcepath",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--metadata"],
          description:
            "comma-separated list of metadata component names to convert",
          args: {
            name: "metadata",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:source:deploy",
      description:
        "deploy source to an org Use this command to deploy source (metadata that’s in source format) to an org.",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--checkonly"],
          description: "validate deploy but don’t save to the org",
        },
        {
          name: "--soapdeploy",
          description: "deploy metadata with SOAP API instead of REST API",
        },
        {
          name: ["-w", "--wait"],
          description: "wait time for command to finish in minutes",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--testlevel"],
          description: "deployment testing level",
          args: {
            name: "testlevel",
            isOptional: false,
            suggestions: [
              "NoTestRun",
              "RunSpecifiedTests",
              "RunLocalTests",
              "RunAllTestsInOrg",
            ],
          },
        },
        {
          name: ["-r", "--runtests"],
          description: "tests to run if --testlevel RunSpecifiedTests",
          args: {
            name: "runtests",
            isOptional: false,
          },
        },
        {
          name: ["-o", "--ignoreerrors"],
          description: "ignore any errors and do not roll back deployment",
        },
        {
          name: ["-g", "--ignorewarnings"],
          description:
            "whether a warning will allow a deployment to complete successfully",
        },
        {
          name: ["-q", "--validateddeployrequestid"],
          description:
            "deploy request ID of the validated deployment to run a Quick Deploy",
          args: {
            name: "validateddeployrequestid",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "verbose output of deploy result",
        },
        {
          name: ["-m", "--metadata"],
          description: "comma-separated list of metadata component names",
          args: {
            name: "metadata",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--sourcepath"],
          description: "comma-separated list of source file paths to deploy",
          args: {
            name: "sourcepath",
            isOptional: false,
          },
        },
        {
          name: ["-x", "--manifest"],
          description:
            "file path for manifest (package.xml) of components to deploy",
          args: {
            name: "manifest",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:source:deploy:cancel",
      description: "cancel a source deployment",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "wait time for command to finish in minutes",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--jobid"],
          description:
            "job ID of the deployment you want to cancel; defaults to your most recent CLI deployment if not specified",
          args: {
            name: "jobid",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:source:deploy:report",
      description: "check the status of a metadata deployment ",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "wait time for command to finish in minutes",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--jobid"],
          description:
            "job ID of the deployment you want to check; defaults to your most recent CLI deployment if not specified",
          args: {
            name: "jobid",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "verbose output of deploy result",
        },
      ],
      args: [],
    },
    {
      name: "force:source:manifest:create",
      description:
        "create a project manifest that lists the metadata components you want to deploy or retrieve ",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--metadata"],
          description:
            "comma-separated list of names of metadata components to include in the manifest",
          args: {
            name: "metadata",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--sourcepath"],
          description:
            "comma-separated list of paths to the local source files to include in the manifest",
          args: {
            name: "sourcepath",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--manifestname"],
          description: "name of a custom manifest file to create",
          args: {
            name: "manifestname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--manifesttype"],
          description:
            "type of manifest to create; the type determines the name of the created file",
          args: {
            name: "manifesttype",
            isOptional: false,
            suggestions: ["pre", "post", "destroy", "package"],
          },
        },
        {
          name: ["-o", "--outputdir"],
          description: "directory to save the created manifest",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:source:open",
      description: "edit a Lightning Page with Lightning App Builder",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--sourcefile"],
          description: "file to edit",
          args: {
            name: "sourcefile",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--urlonly"],
          description: "generate a navigation URL; don’t launch the editor",
        },
      ],
      args: [],
    },
    {
      name: "force:source:retrieve",
      description: "retrieve source from an org ",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--apiversion"],
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--sourcepath"],
          description: "comma-separated list of source file paths to retrieve",
          args: {
            name: "sourcepath",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "wait time for command to finish in minutes",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-x", "--manifest"],
          description:
            "file path for manifest (package.xml) of components to retrieve",
          args: {
            name: "manifest",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--metadata"],
          description: "comma-separated list of metadata component names",
          args: {
            name: "metadata",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--packagenames"],
          description: "a comma-separated list of packages to retrieve",
          args: {
            name: "packagenames",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "verbose output of retrieve result",
        },
      ],
      args: [],
    },
    {
      name: "force:schema:sobject:describe",
      description: "displays the metadata for a standard or custom object",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "the API name of the object to describe",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--usetoolingapi"],
          description: "execute with Tooling API",
        },
      ],
      args: [],
    },
    {
      name: "force:schema:sobject:list",
      description: "list all objects of a specified category",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--sobjecttypecategory"],
          description: "the type of objects to list (all|custom|standard)",
          args: {
            name: "sobjecttypecategory",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:analytics:template:create",
      description: "add an Analytics template to your workspace",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--templatename"],
          description: "name of the Analytics template",
          args: {
            name: "templatename",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:apex:class:create",
      description: "create an Apex class",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-n", "--classname"],
          description: "name of the generated Apex class",
          args: {
            name: "classname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: [
              "ApexException",
              "ApexUnitTest",
              "DefaultApexClass",
              "InboundEmailService",
            ],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:apex:trigger:create",
      description: "create an Apex trigger",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-n", "--triggername"],
          description: "name of the generated Apex trigger",
          args: {
            name: "triggername",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["ApexTrigger"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobject"],
          description: "sObject to create a trigger on",
          args: {
            name: "sobject",
            isOptional: false,
          },
        },
        {
          name: ["-e", "--triggerevents"],
          description: "events that fire the trigger",
          args: {
            name: "triggerevents",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:lightning:app:create",
      description: "create a Lightning app",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-n", "--appname"],
          description: "name of the generated Lightning app",
          args: {
            name: "appname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["DefaultLightningApp"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:lightning:component:create",
      description:
        "create a bundle for an Aura component or a Lightning web component",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-n", "--componentname"],
          description: "name of the generated Lightning component",
          args: {
            name: "componentname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: [
              "default",
              "analyticsDashboard",
              "analyticsDashboardWithStep",
            ],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: "--type",
          description: "type of the Lightning component",
          args: {
            name: "type",
            isOptional: false,
            suggestions: ["aura", "lwc"],
          },
        },
      ],
      args: [],
    },
    {
      name: "force:lightning:event:create",
      description: "create a Lightning event",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-n", "--eventname"],
          description: "name of the generated Lightning event",
          args: {
            name: "eventname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["DefaultLightningEvt"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:lightning:interface:create",
      description: "create a Lightning interface",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-n", "--interfacename"],
          description: "name of the generated Lightning interface",
          args: {
            name: "interfacename",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["DefaultLightningIntf"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:lightning:test:create",
      description: "create a Lightning test",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-n", "--testname"],
          description: "name of the generated Lightning test",
          args: {
            name: "testname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["DefaultLightningTest"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:project:create",
      description: "create a Salesforce DX project",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-n", "--projectname"],
          description: "name of the generated project",
          args: {
            name: "projectname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "template to use for project creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["standard", "empty", "analytics"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--namespace"],
          description: "project associated namespace",
          args: {
            name: "namespace",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--defaultpackagedir"],
          description: "default package directory name",
          args: {
            name: "defaultpackagedir",
            isOptional: false,
          },
        },
        {
          name: ["-x", "--manifest"],
          description:
            "generate a manifest (package.xml) for change-set based development",
        },
      ],
      args: [],
    },
    {
      name: "force:staticresource:create",
      description: "create a static resource",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-n", "--resourcename"],
          description: "name of the generated static resource",
          args: {
            name: "resourcename",
            isOptional: false,
          },
        },
        {
          name: "--contenttype",
          description:
            "content type (mime type) of the generated static resource",
          args: {
            name: "contenttype",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:visualforce:component:create",
      description: "create a Visualforce component",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-t", "--template"],
          description: "template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["DefaultVFComponent"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--componentname"],
          description: "name of the generated Visualforce component",
          args: {
            name: "componentname",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--label"],
          description: "Visualforce component label",
          args: {
            name: "label",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:visualforce:page:create",
      description: "create a Visualforce page",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-t", "--template"],
          description: "template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["DefaultVFPage"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--pagename"],
          description: "name of the generated Visualforce page",
          args: {
            name: "pagename",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--label"],
          description: "Visualforce page label",
          args: {
            name: "label",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:user:create",
      description: "create a user for a scratch org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--setalias"],
          description:
            "set an alias for the created username to reference within the CLI",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--definitionfile"],
          description: "file path to a user definition",
          args: {
            name: "definitionfile",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--setuniqueusername"],
          description:
            "force the username, if specified in the definition file or at the command line, to be unique by appending the org ID",
        },
      ],
      args: [],
    },
    {
      name: "force:user:display",
      description: "displays information about a user of a scratch org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:user:list",
      description: "list all authenticated users of an org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:user:password:generate",
      description: "generate a password for scratch org users",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-o", "--onbehalfof"],
          description:
            "comma-separated list of usernames or aliases to assign the password to",
          args: {
            name: "onbehalfof",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--length"],
          description:
            "number of characters in the generated password; valid values are between 8 and 1000",
          args: {
            name: "length",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--complexity"],
          description:
            "level of password complexity or strength; the higher the value, the stronger the password",
          args: {
            name: "complexity",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:user:permset:assign",
      description: "assign a permission set to one or more users of an org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--permsetname"],
          description: "comma-separated list of permission sets to assign",
          args: {
            name: "permsetname",
            isOptional: false,
          },
        },
        {
          name: ["-o", "--onbehalfof"],
          description:
            "comma-separated list of usernames or aliases to assign the permission set to",
          args: {
            name: "onbehalfof",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "help",
      description: "display help for <%= config.bin %>",
      options: [
        {
          name: "--all",
          description: "see all commands in CLI",
        },
      ],
      args: [
        {
          name: "command",
          description: "command to show help for",
          isOptional: true,
        },
      ],
    },
    {
      name: "force:apex:log:tail",
      description: "",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--color"],
          description: "colorize noteworthy log lines",
        },
        {
          name: ["-d", "--debuglevel"],
          description: "debug level for trace flag",
          args: {
            name: "debuglevel",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--skiptraceflag"],
          description: "skip trace flag setup",
        },
      ],
      args: [],
    },
    {
      name: "force:community:create",
      description: "creates an Experience Cloud site using a template",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--name"],
          description: "name of the site to create",
          args: {
            name: "name",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--templatename"],
          description: "template to use to create a site",
          args: {
            name: "templatename",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--urlpathprefix"],
          description:
            "URL to append to the domain created when Digital Experiences was enabled for this org",
          args: {
            name: "urlpathprefix",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--description"],
          description: "description of the site",
          args: {
            name: "description",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:community:publish",
      description: "publishes an Experience Builder site to make it live",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--name"],
          description: "name of the Experience Builder site to publish",
          args: {
            name: "name",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:community:template:list",
      description: "retrieves the list of templates available in your org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:mdapi:convert",
      description:
        "convert metadata from the Metadata API format into the source format",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-r", "--rootdir"],
          description:
            "the root directory containing the Metadata API–formatted metadata",
          args: {
            name: "rootdir",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description:
            "the output directory to store the source–formatted files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-x", "--manifest"],
          description:
            "file path to manifest (package.xml) of metadata types to convert.",
          args: {
            name: "manifest",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--metadata"],
          description:
            "comma-separated list of metadata component names to convert",
          args: {
            name: "metadata",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--metadatapath"],
          description:
            "comma-separated list of paths to the local source files to convert",
          args: {
            name: "metadatapath",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:mdapi:deploy",
      description: "deploy metadata to an org using Metadata API",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--checkonly"],
          description: "validate deploy but don’t save to the org",
        },
        {
          name: ["-d", "--deploydir"],
          description: "root of directory tree of files to deploy",
          args: {
            name: "deploydir",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "wait time for command to finish in minutes (default: 0)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--testlevel"],
          description: "deployment testing level",
          args: {
            name: "testlevel",
            isOptional: false,
            suggestions: [
              "NoTestRun",
              "RunSpecifiedTests",
              "RunLocalTests",
              "RunAllTestsInOrg",
            ],
          },
        },
        {
          name: ["-r", "--runtests"],
          description: "tests to run if --testlevel RunSpecifiedTests",
          args: {
            name: "runtests",
            isOptional: false,
          },
        },
        {
          name: ["-o", "--ignoreerrors"],
          description: "ignore any errors and do not roll back deployment",
        },
        {
          name: ["-g", "--ignorewarnings"],
          description:
            "whether a warning will allow a deployment to complete successfully",
        },
        {
          name: ["-q", "--validateddeployrequestid"],
          description:
            "request ID of the validated deployment to run a Quick Deploy",
          args: {
            name: "validateddeployrequestid",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "verbose output of deploy results",
        },
        {
          name: ["-f", "--zipfile"],
          description: "path to .zip file of metadata to deploy",
          args: {
            name: "zipfile",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--singlepackage"],
          description:
            "Indicates that the zip file points to a directory structure for a single package",
        },
        {
          name: "--soapdeploy",
          description: "deploy metadata with SOAP API instead of REST API",
        },
      ],
      args: [],
    },
    {
      name: "force:mdapi:deploy:cancel",
      description: "cancel a metadata deployment",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "wait time for command to finish in minutes 33",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--jobid"],
          description:
            "job ID of the deployment you want to cancel; defaults to your most recent CLI deployment if not specified",
          args: {
            name: "jobid",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:mdapi:deploy:report",
      description: "check the status of a metadata deployment",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "wait time for command to finish in minutes (default: 0)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--jobid"],
          description:
            "job ID of the deployment to check; required if you’ve never deployed using Salesforce CLI; if not specified, defaults to your most recent CLI deployment",
          args: {
            name: "jobid",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "verbose output of deploy results",
        },
      ],
      args: [],
    },
    {
      name: "force:mdapi:describemetadata",
      description: "display the metadata types enabled for your org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--apiversion"],
          description: "API version to use",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--resultfile"],
          description: "filter metadata known by the CLI",
          args: {
            name: "resultfile",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:mdapi:listmetadata",
      description:
        "display properties of metadata components of a specified type",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--apiversion"],
          description: "API version to use",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--resultfile"],
          description: "path to the file where results are stored",
          args: {
            name: "resultfile",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--metadatatype"],
          description:
            "metadata type to be retrieved, such as CustomObject; metadata type value is case-sensitive",
          args: {
            name: "metadatatype",
            isOptional: false,
          },
        },
        {
          name: "--folder",
          description:
            "folder associated with the component; required for components that use folders; folder names are case-sensitive",
          args: {
            name: "folder",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:mdapi:retrieve",
      description: "retrieve metadata from an org using Metadata API",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--apiversion"],
          description: "target API version for the retrieve",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "wait time for command to finish in minutes (default: -1 (no limit))",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--retrievetargetdir"],
          description: "directory root for the retrieved files",
          args: {
            name: "retrievetargetdir",
            isOptional: false,
          },
        },
        {
          name: ["-k", "--unpackaged"],
          description: "file path of manifest of components to retrieve",
          args: {
            name: "unpackaged",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "verbose output of retrieve result",
        },
        {
          name: ["-d", "--sourcedir"],
          description:
            "source dir to use instead of the default package dir in sfdx-project.json",
          args: {
            name: "sourcedir",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--packagenames"],
          description: "a comma-separated list of packages to retrieve",
          args: {
            name: "packagenames",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--singlepackage"],
          description:
            "Indicates that the zip file points to a directory structure for a single package",
        },
      ],
      args: [],
    },
    {
      name: "force:mdapi:retrieve:report",
      description: "check the status of a metadata retrieval",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "wait time for command to finish in minutes (default: -1 (no limit))",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--retrievetargetdir"],
          description: "directory root for the retrieved files",
          args: {
            name: "retrievetargetdir",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "verbose output of retrieve result",
        },
        {
          name: ["-i", "--jobid"],
          description:
            "job ID of the retrieve you want to check; defaults to your most recent CLI retrieval if not specified",
          args: {
            name: "jobid",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:org:clone",
      description: "clone a sandbox org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--type"],
          description: "type of org to create",
          args: {
            name: "type",
            isOptional: false,
            suggestions: ["sandbox"],
          },
        },
        {
          name: ["-f", "--definitionfile"],
          description: "path to an org definition file",
          args: {
            name: "definitionfile",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--setdefaultusername"],
          description: "set the created org as the default username",
        },
        {
          name: ["-a", "--setalias"],
          description: "alias for the created org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "the streaming client socket timeout (in minutes)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:org:create",
      description: "create a scratch or sandbox org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--type"],
          description: "type of org to create",
          args: {
            name: "type",
            isOptional: false,
            suggestions: ["scratch", "sandbox"],
          },
        },
        {
          name: ["-f", "--definitionfile"],
          description: "path to an org definition file",
          args: {
            name: "definitionfile",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--nonamespace"],
          description: "create the scratch org with no namespace",
        },
        {
          name: ["-c", "--noancestors"],
          description:
            "do not include second-generation package ancestors in the scratch org",
        },
        {
          name: ["-i", "--clientid"],
          description:
            "connected app consumer key; not supported for sandbox org creation",
          args: {
            name: "clientid",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--setdefaultusername"],
          description: "set the created org as the default username",
        },
        {
          name: ["-a", "--setalias"],
          description: "alias for the created org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "the streaming client socket timeout (in minutes)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--durationdays"],
          description:
            "duration of the scratch org (in days) (default:7, min:1, max:30)",
          args: {
            name: "durationdays",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:org:delete",
      description: "mark a scratch or sandbox org for deletion",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--noprompt"],
          description: "no prompt to confirm deletion",
        },
      ],
      args: [],
    },
    {
      name: "force:org:shape:create",
      description:
        "Create a scratch org configuration (shape) based on the specified source org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:org:shape:delete",
      description: "delete all org shapes for a target org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--noprompt"],
          description: "do not prompt for confirmation",
        },
      ],
      args: [],
    },
    {
      name: "force:org:shape:list",
      description: "list all org shapes you’ve created",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: "--verbose",
          description: "list more information about each org shape",
        },
      ],
      args: [],
    },
    {
      name: "force:org:snapshot:create",
      description: "snapshot a scratch org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-o", "--sourceorg"],
          description:
            "ID or locally authenticated username or alias of scratch org to snapshot",
          args: {
            name: "sourceorg",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--snapshotname"],
          description: "unique name of snapshot",
          args: {
            name: "snapshotname",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--description"],
          description: "description of snapshot",
          args: {
            name: "description",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:org:snapshot:delete",
      description: "delete a scratch org snapshot",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--snapshot"],
          description: "name or ID of snapshot to delete",
          args: {
            name: "snapshot",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:org:snapshot:get",
      description: "get details about a scratch org snapshot",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--snapshot"],
          description: "name or ID of snapshot to retrieve",
          args: {
            name: "snapshot",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:org:snapshot:list",
      description: "list scratch org snapshots",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:org:status",
      description: "report sandbox org creation status and authenticate to org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--sandboxname"],
          description: "name of the sandbox org to check status for",
          args: {
            name: "sandboxname",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--setdefaultusername"],
          description: "set the created org as the default username",
        },
        {
          name: ["-a", "--setalias"],
          description: "alias for the created org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "number of minutes to wait while polling for status",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package1:version:create",
      description:
        "create a first-generation package version in the release org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--packageid"],
          description:
            "ID of the metadata package (starts with 033) of which you’re creating a new version",
          args: {
            name: "packageid",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--name"],
          description: "package version name",
          args: {
            name: "name",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--description"],
          description: "package version description",
          args: {
            name: "description",
            isOptional: false,
          },
        },
        {
          name: ["-v", "--version"],
          description:
            "package version in major.minor format, for example, 3.2",
          args: {
            name: "version",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--managedreleased"],
          description: "create a managed package version",
        },
        {
          name: ["-r", "--releasenotesurl"],
          description: "release notes URL",
          args: {
            name: "releasenotesurl",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--postinstallurl"],
          description: "post install URL",
          args: {
            name: "postinstallurl",
            isOptional: false,
          },
        },
        {
          name: ["-k", "--installationkey"],
          description:
            "installation key for key-protected package (default: null)",
          args: {
            name: "installationkey",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "minutes to wait for the package version to be created (default: 2 minutes)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package1:version:create:get",
      description: "retrieve the status of a package version creation request",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--requestid"],
          description: "PackageUploadRequest ID",
          args: {
            name: "requestid",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package1:version:display",
      description: "display details about a first-generation package version",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--packageversionid"],
          description: "metadata package version ID (starts with 04t)",
          args: {
            name: "packageversionid",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package1:version:list",
      description:
        "list package versions for the specified first-generation package or for the org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--packageid"],
          description: "metadata package ID (starts with 033)",
          args: {
            name: "packageid",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package:create",
      description: "create a package",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--name"],
          description: "package name",
          args: {
            name: "name",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--packagetype"],
          description: "package type",
          args: {
            name: "packagetype",
            isOptional: false,
            suggestions: ["Managed", "Unlocked"],
          },
        },
        {
          name: ["-d", "--description"],
          description: "package description",
          args: {
            name: "description",
            isOptional: false,
          },
        },
        {
          name: ["-e", "--nonamespace"],
          description:
            "creates the package with no namespace; available only for unlocked packages.",
        },
        {
          name: ["-r", "--path"],
          description:
            "path to directory that contains the contents of the package",
          args: {
            name: "path",
            isOptional: false,
          },
        },
        {
          name: "--orgdependent",
          description:
            "depends on unpackaged metadata in the installation org. Applies to unlocked packages only.",
        },
        {
          name: ["-o", "--errornotificationusername"],
          description:
            "active Dev Hub user designated to receive email notifications for package errors",
          args: {
            name: "errornotificationusername",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package:delete",
      description: "delete a package",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--noprompt"],
          description: "don’t prompt before deleting the package",
        },
        {
          name: ["-p", "--package"],
          description: "ID (starts with 0Ho) or alias of the package to delete",
          args: {
            name: "package",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package:install",
      description: "install a package in the target org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "number of minutes to wait for installation status",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-k", "--installationkey"],
          description:
            "installation key for key-protected package (default: null)",
          args: {
            name: "installationkey",
            isOptional: false,
          },
        },
        {
          name: ["-b", "--publishwait"],
          description:
            "number of minutes to wait for subscriber package version ID to become available in the target org ",
          args: {
            name: "publishwait",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--noprompt"],
          description: "do not prompt for confirmation",
        },
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 04t) or alias of the package version to install",
          args: {
            name: "package",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--apexcompile"],
          description:
            "compile all Apex in the org and package, or only Apex in the package; unlocked packages only",
          args: {
            name: "apexcompile",
            isOptional: false,
            suggestions: ["all", "package"],
          },
        },
        {
          name: ["-s", "--securitytype"],
          description:
            "security access type for the installed package (deprecation notice: The default --securitytype value will change from AllUsers to AdminsOnly in v47.0 or later.)",
          args: {
            name: "securitytype",
            isOptional: false,
            suggestions: ["AllUsers", "AdminsOnly"],
          },
        },
        {
          name: ["-t", "--upgradetype"],
          description:
            "the upgrade type for the package installation; available only for unlocked packages",
          args: {
            name: "upgradetype",
            isOptional: false,
            suggestions: ["DeprecateOnly", "Mixed", "Delete"],
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package:install:report",
      description: "retrieve the status of a package installation request",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--requestid"],
          description: "ID of the package install request you want to check",
          args: {
            name: "requestid",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package:installed:list",
      description: "list the org’s installed packages",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package:list",
      description: "list all packages in the Dev Hub org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "display extended package detail",
        },
      ],
      args: [],
    },
    {
      name: "force:package:uninstall",
      description: "uninstall a second-generation package from the target org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "number of minutes to wait for uninstall status",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 04t) or alias of the package version to uninstall",
          args: {
            name: "package",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package:uninstall:report",
      description: "retrieve status of package uninstall request",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--requestid"],
          description: "ID of the package uninstall request you want to check",
          args: {
            name: "requestid",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package:update",
      description: "update package details",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--package"],
          description: "ID (starts with 0Ho) or alias of the package to update",
          args: {
            name: "package",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--name"],
          description: "new package name",
          args: {
            name: "name",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--description"],
          description: "new package description",
          args: {
            name: "description",
            isOptional: false,
          },
        },
        {
          name: ["-o", "--errornotificationusername"],
          description:
            "active Dev Hub user designated to receive email notifications for package errors",
          args: {
            name: "errornotificationusername",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package:version:create",
      description: "create a package version",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 0Ho) or alias of the package to create a version of",
          args: {
            name: "package",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--path"],
          description:
            "path to directory that contains the contents of the package",
          args: {
            name: "path",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--definitionfile"],
          description:
            "path to a definition file similar to scratch org definition file that contains the list of features and org preferences that the metadata of the package version depends on",
          args: {
            name: "definitionfile",
            isOptional: false,
          },
        },
        {
          name: ["-b", "--branch"],
          description: "the package version’s branch",
          args: {
            name: "branch",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--tag"],
          description: "the package version’s tag",
          args: {
            name: "tag",
            isOptional: false,
          },
        },
        {
          name: ["-k", "--installationkey"],
          description:
            "installation key for key-protected package (either --installationkey or --installationkeybypass is required)",
          args: {
            name: "installationkey",
            isOptional: false,
          },
        },
        {
          name: ["-x", "--installationkeybypass"],
          description:
            "bypass the installation key requirement (either --installationkey or --installationkeybypass is required)",
        },
        {
          name: ["-w", "--wait"],
          description: "minutes to wait for the package version to be created",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--versionname"],
          description: "the name of the package version to be created",
          args: {
            name: "versionname",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--versionnumber"],
          description:
            "the version number of the package version to be created",
          args: {
            name: "versionnumber",
            isOptional: false,
          },
        },
        {
          name: ["-e", "--versiondescription"],
          description: "the description of the package version to be created",
          args: {
            name: "versiondescription",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--codecoverage"],
          description:
            "calculate the code coverage by running the packaged Apex tests",
        },
        {
          name: "--releasenotesurl",
          description: "release notes URL",
          args: {
            name: "releasenotesurl",
            isOptional: false,
          },
        },
        {
          name: "--postinstallurl",
          description: "post-install URL",
          args: {
            name: "postinstallurl",
            isOptional: false,
          },
        },
        {
          name: "--postinstallscript",
          description: "post-install script name; managed packages only",
          args: {
            name: "postinstallscript",
            isOptional: false,
          },
        },
        {
          name: "--uninstallscript",
          description: "uninstall script name; managed packages only",
          args: {
            name: "uninstallscript",
            isOptional: false,
          },
        },
        {
          name: "--skipvalidation",
          description:
            "skip validation during package version creation; you can’t promote unvalidated package versions",
        },
      ],
      args: [],
    },
    {
      name: "force:package:version:create:list",
      description: "list package version creation requests",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--createdlastdays"],
          description:
            "created in the last specified number of days (starting at 00:00:00 of first day to now; 0 for today)",
          args: {
            name: "createdlastdays",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--status"],
          description: "filter the list by version creation request status",
          args: {
            name: "status",
            isOptional: false,
            suggestions: ["Queued", "InProgress", "Success", "Error"],
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package:version:create:report",
      description: "retrieve details about a package version creation request",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--packagecreaterequestid"],
          description: "package version creation request ID (starts with 08c)",
          args: {
            name: "packagecreaterequestid",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package:version:delete",
      description: "delete a package version",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--noprompt"],
          description: "don’t prompt before deleting the package version",
        },
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 04t) or alias of the package to update a version of",
          args: {
            name: "package",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:package:version:displayancestry",
      description:
        "display the ancestry tree for a 2GP managed package version",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--package"],
          description:
            "ID or alias of the package (starts with 0Ho) or package version (starts with 04t) to display ancestry for",
          args: {
            name: "package",
            isOptional: false,
          },
        },
        {
          name: "--dotcode",
          description: "display the ancestry tree in DOT code",
        },
        {
          name: "--verbose",
          description:
            "display both the package version ID (starts with 04t) and the version number (major.minor.patch.build) in the ancestry tree",
        },
      ],
      args: [],
    },
    {
      name: "force:package:version:list",
      description: "list all package versions in the Dev Hub org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--createdlastdays"],
          description:
            "created in the last specified number of days (starting at 00:00:00 of first day to now; 0 for today)",
          args: {
            name: "createdlastdays",
            isOptional: false,
          },
        },
        {
          name: "--concise",
          description: "display limited package version details",
        },
        {
          name: ["-m", "--modifiedlastdays"],
          description:
            "list items modified in the specified last number of days (starting at 00:00:00 of first day to now; 0 for today)",
          args: {
            name: "modifiedlastdays",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--packages"],
          description:
            "filter results on specified comma-delimited packages (aliases or 0Ho IDs)",
          args: {
            name: "packages",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--released"],
          description: "display released versions only",
        },
        {
          name: ["-o", "--orderby"],
          description: "order by the specified package version fields",
          args: {
            name: "orderby",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "display extended package version details",
        },
      ],
      args: [],
    },
    {
      name: "force:package:version:promote",
      description: "promote a package version to released",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 04t) or alias of the package version to promote",
          args: {
            name: "package",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--noprompt"],
          description:
            "no prompt to confirm setting the package version as released",
        },
      ],
      args: [],
    },
    {
      name: "force:package:version:report",
      description:
        "retrieve details about a package version in the Dev Hub org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 04t) or alias of the package to retrieve details for",
          args: {
            name: "package",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "displays extended package version details",
        },
      ],
      args: [],
    },
    {
      name: "force:package:version:update",
      description: "update a package version",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-v", "--targetdevhubusername"],
          description:
            "username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 04t) or alias of the package to update a version of",
          args: {
            name: "package",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--versionname"],
          description: "new package version name",
          args: {
            name: "versionname",
            isOptional: false,
          },
        },
        {
          name: ["-e", "--versiondescription"],
          description: "new package version description",
          args: {
            name: "versiondescription",
            isOptional: false,
          },
        },
        {
          name: ["-b", "--branch"],
          description: "new package version branch",
          args: {
            name: "branch",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--tag"],
          description: "new package version tag",
          args: {
            name: "tag",
            isOptional: false,
          },
        },
        {
          name: ["-k", "--installationkey"],
          description:
            "new installation key for key-protected package (default: null)",
          args: {
            name: "installationkey",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:source:delete",
      description:
        "delete source from your project and from a non-source-tracked org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--checkonly"],
          description:
            "validate delete command but do not delete from the org or delete files locally",
        },
        {
          name: ["-r", "--noprompt"],
          description: "do not prompt for delete confirmation",
        },
        {
          name: ["-w", "--wait"],
          description: "wait time for command to finish in minutes 33",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--sourcepath"],
          description:
            "comma-separated list of paths to the local metadata to delete",
          args: {
            name: "sourcepath",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--metadata"],
          description:
            "comma-separated list of names of metadata components to delete",
          args: {
            name: "metadata",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:source:ignored:list",
      description:
        "check your local project package directories for forceignored files",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-p", "--sourcepath"],
          description:
            "file or directory of files that the command checks for foreceignored files",
          args: {
            name: "sourcepath",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:source:pull",
      description: "pull source from the scratch org to the project",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "wait time for command to finish in minutes (default: 33)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--forceoverwrite"],
          description:
            "ignore conflict warnings and overwrite changes to the project",
        },
      ],
      args: [],
    },
    {
      name: "force:source:push",
      description: "push source to a scratch org from the project",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--forceoverwrite"],
          description:
            "ignore conflict warnings and overwrite changes to scratch org",
        },
        {
          name: ["-g", "--ignorewarnings"],
          description: "deploy changes even if warnings are generated",
        },
        {
          name: ["-w", "--wait"],
          description:
            "wait time for command to finish in minutes (default: 33)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:source:status",
      description: "list local changes and/or changes in a scratch org",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--all"],
          description: "list all the changes that have been made",
        },
        {
          name: ["-l", "--local"],
          description: "list the changes that have been made locally",
        },
        {
          name: ["-r", "--remote"],
          description:
            "list the changes that have been made in the scratch org",
        },
      ],
      args: [],
    },
    {
      name: "force:source:tracking:clear",
      description: "clear all local source tracking information",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--noprompt"],
          description:
            "do not prompt for source tracking override confirmation",
        },
      ],
      args: [],
    },
    {
      name: "force:source:tracking:reset",
      description: "reset local and remote source tracking",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--revision"],
          description:
            "reset to a specific SourceMember revision counter number",
          args: {
            name: "revision",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--noprompt"],
          description:
            "do not prompt for source tracking override confirmation",
        },
      ],
      args: [],
    },
    {
      name: "force:lightning:lwc:test:create",
      description:
        "creates a Lightning web component test file with boilerplate code inside a __tests__ directory.",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-f", "--filepath"],
          description:
            "path to Lightning web component .js file to create a test for",
          args: {
            name: "filepath",
            isOptional: false,
          },
        },
      ],
      args: [],
    },
    {
      name: "force:lightning:lwc:test:run",
      description: "invokes Lightning Web Components Jest unit tests.",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "run tests in debug mode",
        },
        {
          name: "--watch",
          description: "run tests in watch mode",
        },
      ],
      args: [
        {
          name: "passthrough",
          isOptional: true,
        },
      ],
    },
    {
      name: "force:lightning:lwc:test:setup",
      description:
        "install Jest unit testing tools for Lightning Web Components.",
      options: [
        {
          name: "--json",
          description: "format output as json",
        },
        {
          name: "--loglevel",
          description: "logging level for this command invocation",
          args: {
            name: "loglevel",
            isOptional: false,
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
      ],
      args: [],
    },
    {
      name: "plugins:generate",
      description: "create a new sfdx-cli plugin",
      options: [
        {
          name: "--defaults",
          description: "use defaults for every setting",
        },
        {
          name: "--force",
          description: "overwrite existing files",
        },
      ],
      args: [
        {
          name: "path",
          isOptional: true,
        },
      ],
    },
  ],
};

export default completionSpec;
