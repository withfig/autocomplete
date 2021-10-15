const completionSpec: Fig.Spec = {
  name: "sfdx",
  description: "",
  subcommands: [
    {
      name: "force:lightning:lint",
      description: "Analyze (lint) Aura component code",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Pattern used to ignore some folders",
          args: {
            name: "ignore",
            isOptional: false,
          },
        },
        {
          name: "--files",
          description: "Pattern used to include specific files",
          args: {
            name: "files",
            isOptional: false,
          },
        },
        {
          name: "--config",
          description: "Path to a custom ESLint configuration file",
          args: {
            name: "config",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "Report warnings in addition to errors",
        },
        {
          name: "--exit",
          description: "Exit with error code 1 if there are lint issues",
        },
      ],
      args: {
        name: "path",
        isOptional: true,
      },
    },
    {
      name: "fig-completion",
      description: "Generate a Fig completion spec",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-o", "--output"],
          description:
            "Filepath to export completion spec (do not specify file extension)",
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
      args: {
        name: "file",
        isOptional: true,
      },
    },
    {
      name: "commands",
      description: "List all the commands",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-j", "--json"],
          description: "Display unfiltered api data in json format",
        },
        {
          name: "--hidden",
          description: "Show hidden commands",
        },
        {
          name: "--columns",
          description: "Only show provided columns (comma-separated)",
          args: {
            name: "columns",
            isOptional: false,
          },
        },
        {
          name: "--sort",
          description: "Property to sort by (prepend '-' for descending)",
          args: {
            name: "sort",
            isOptional: false,
          },
        },
        {
          name: "--filter",
          description:
            "Filter property by partial string matching, ex: name=foo",
          args: {
            name: "filter",
            isOptional: false,
          },
        },
        {
          name: "--csv",
          description: "Output is csv format [alias: --output=csv]",
        },
        {
          name: "--output",
          description: "Output in a more machine friendly format",
          args: {
            name: "output",
            isOptional: false,
            suggestions: ["csv", "json", "yaml"],
          },
        },
        {
          name: ["-x", "--extended"],
          description: "Show extra columns",
        },
        {
          name: "--no-truncate",
          description: "Do not truncate output to fit screen",
        },
        {
          name: "--no-header",
          description: "Hide table header from output",
        },
      ],
    },
    {
      name: "plugins",
      description: "List installed plugins",
      options: [
        {
          name: "--core",
          description: "Show core plugins",
        },
      ],
    },
    {
      name: "plugins:inspect",
      description: "Displays installation properties of a plugin",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: {
        name: "plugin",
        description: "Plugin to inspect",
        isOptional: false,
      },
    },
    {
      name: ["plugins:install", "plugins:add"],
      description: "Installs a plugin into the CLI",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-f", "--force"],
          description: "Yarn install with force flag",
        },
      ],
      args: {
        name: "plugin",
        description: "Plugin to install",
        isOptional: false,
      },
    },
    {
      name: "plugins:link",
      description: "Links a plugin into the CLI for development",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: {
        name: "path",
        description: "Path to plugin",
        isOptional: false,
      },
    },
    {
      name: ["plugins:uninstall", "plugins:unlink", "plugins:remove"],
      description: "Removes a plugin from the CLI",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: {
        name: "plugin",
        description: "Plugin to uninstall",
        isOptional: true,
      },
    },
    {
      name: "plugins:update",
      description: "Update installed plugins",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
    },
    {
      name: "autocomplete",
      description: "Display autocomplete installation instructions",
      options: [
        {
          name: ["-r", "--refresh-cache"],
          description: "Refresh cache (ignores displaying instructions)",
        },
      ],
      args: {
        name: "shell",
        description: "Shell type",
        isOptional: true,
      },
    },
    {
      name: "update",
      description: "Update the <%= config.bin %> CLI",
      options: [
        {
          name: "--from-local",
          description: "Interactively choose an already installed version",
        },
      ],
      args: {
        name: "channel",
        isOptional: true,
      },
    },
    {
      name: "which",
      description: "Show which plugin a command is in",

      args: {
        name: "command",
        isOptional: false,
      },
    },
    {
      name: "force:cmdt:create",
      description: "Creates a new custom metadata type in the current project",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Unique object name for the custom metadata type",
          args: {
            name: "typename",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--label"],
          description: "Label for the custom metadata type",
          args: {
            name: "label",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--plurallabel"],
          description:
            "Plural version of the label value; if blank, uses label",
          args: {
            name: "plurallabel",
            isOptional: false,
          },
        },
        {
          name: ["-v", "--visibility"],
          description: "Visibility of the custom metadata type",
          args: {
            name: "visibility",
            isOptional: false,
            suggestions: ["PackageProtected", "Protected", "Public"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description:
            "Directory to store the newly-created custom metadata type files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
      args: {
        name: "file",
        isOptional: true,
      },
    },
    {
      name: "force:cmdt:field:create",
      description:
        "Generate a custom metadata field based on the field type provided",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Unique name for the field",
          args: {
            name: "fieldname",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--fieldtype"],
          description: "Type of field",
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
            "Comma-separated list of picklist values; required for Picklist fields",
          args: {
            name: "picklistvalues",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--decimalplaces"],
          description:
            "Number of decimal places to use for Number or Percent fields",
          args: {
            name: "decimalplaces",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--label"],
          description: "Label for the field",
          args: {
            name: "label",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description:
            "Directory to store newly-created field definition files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
      args: {
        name: "file",
        isOptional: true,
      },
    },
    {
      name: "force:cmdt:generate",
      description:
        "Generates a custom metadata type and all its records for the provided sObject",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--devname"],
          description: "Name of the custom metadata type",
          args: {
            name: "devname",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--label"],
          description: "Label for the custom metadata type",
          args: {
            name: "label",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--plurallabel"],
          description:
            "Plural version of the label value; if blank, uses label",
          args: {
            name: "plurallabel",
            isOptional: false,
          },
        },
        {
          name: ["-v", "--visibility"],
          description: "Visibility of the custom metadata type",
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
          description: "Ignore unsupported field types",
        },
        {
          name: ["-d", "--typeoutputdir"],
          description:
            "Directory to store newly-created custom metadata type files",
          args: {
            name: "typeoutputdir",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--recordsoutputdir"],
          description:
            "Directory to store newly-created custom metadata record files",
          args: {
            name: "recordsoutputdir",
            isOptional: false,
          },
        },
      ],
      args: {
        name: "file",
        isOptional: true,
      },
    },
    {
      name: "force:cmdt:record:create",
      description:
        "Create a new record for a given custom metadata type in the current project",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Name for the new record",
          args: {
            name: "recordname",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--label"],
          description: "Label for the new record",
          args: {
            name: "label",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--protected"],
          description: "Protect the record when it is in a managed package",
          args: {
            name: "protected",
            isOptional: false,
            suggestions: ["true", "false"],
          },
        },
        {
          name: ["-i", "--inputdir"],
          description:
            "Directory to pull the custom metadata type definition from",
          args: {
            name: "inputdir",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description:
            "Directory to store newly-created custom metadata record files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:cmdt:record:insert",
      description: "Create new custom metadata type records from a CSV file",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Path to the CSV file",
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
            "Directory to pull the custom metadata type definition from",
          args: {
            name: "inputdir",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description:
            "Directory to store newly-created custom metadata record files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--namecolumn"],
          description:
            "Column that is used to determine the name of the record",
          args: {
            name: "namecolumn",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: ["alias:list", "force:alias:list"],
      description: "List username aliases for the Salesforce CLI",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
    },
    {
      name: ["alias:set", "force:alias:set"],
      description: "Set username aliases for the Salesforce CLI",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
    },
    {
      name: "alias:unset",
      description: "Unsets aliases for the Salesforce CLI",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
    },
    {
      name: "force:apex:execute",
      description: "Executes anonymous Apex code",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--apexcodefile"],
          description: "Path to a local file that contains Apex code",
          args: {
            name: "apexcodefile",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:apex:log:get",
      description: "Fetch debug logs",
      options: [
        {
          name: "--json",
          description: "Format output as JSON",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--logid"],
          description: "Id of the log to display",
          args: {
            name: "logid",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--number"],
          description: "Number of most recent logs to display",
          args: {
            name: "number",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "Directory for saving the log files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:apex:log:list",
      description:
        "Display a list of IDs and general information about debug logs",
      options: [
        {
          name: "--json",
          description: "Format output as JSON",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:apex:test:report",
      description: "Display test results for a specific asynchronous test run",
      options: [
        {
          name: "--json",
          description: "Format output as JSON",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--testrunid"],
          description: "The ID of the test run",
          args: {
            name: "testrunid",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--codecoverage"],
          description: "Retrieves code coverage results",
        },
        {
          name: ["-d", "--outputdir"],
          description: "Directory to store test result files",
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
            "Sets the streaming client socket timeout in minutes; specify a longer wait time if timeouts occur frequently",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description:
            "Display Apex test processing details; if JSON is specified, processing details aren't displayed",
        },
      ],
    },
    {
      name: "force:apex:test:run",
      description: "Invoke Apex tests",
      options: [
        {
          name: "--json",
          description: "Format output as JSON",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--codecoverage"],
          description: "Retrieves code coverage results",
        },
        {
          name: ["-d", "--outputdir"],
          description: "Directory to store test run files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--testlevel"],
          description:
            "Specifies which tests to run, using one of these TestLevel enum values:\nRunSpecifiedTests—Only the tests that you specify are run.\nRunLocalTests—All tests in your org are run, except the ones that originate from installed managed packages.\nRunAllTestsInOrg—All tests are in your org and in installed managed packages are run",
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
            "Comma-separated list of Apex test class names to run; if you select --classnames, you can't specify --suitenames or --tests",
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
            "Comma-separated list of Apex test suite names to run; if you select --suitenames, you can't specify --classnames or --tests",
          args: {
            name: "suitenames",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--tests"],
          description:
            "Comma-separated list of Apex test class names or IDs and, if applicable, test methods to run; if you specify --tests, you can't specify --classnames or --suitenames",
          args: {
            name: "tests",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Sets the streaming client socket timeout in minutes; specify a longer wait time if timeouts occur frequently",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-y", "--synchronous"],
          description:
            "Runs test methods from a single Apex class synchronously; if not specified, tests are run ansynchronously",
        },
        {
          name: "--verbose",
          description:
            "Display Apex test processing details; if JSON is specified, processing details aren't displayed",
        },
        {
          name: ["-v", "--detailedcoverage"],
          description: "Display detailed code coverage per test",
        },
      ],
    },
    {
      name: ["config:get", "force:config:get"],
      description: "Get config var values for given names",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Emit additional command output to stdout",
        },
      ],
    },
    {
      name: ["config:list", "force:config:list"],
      description:
        "Lists the config variables that the Salesforce CLI uses for various commands and tasks",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
    },
    {
      name: ["config:set", "force:config:set"],
      description:
        "Sets the configuration variables that the Salesforce CLI uses for various commands and tasks",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Set config var globally (to be used from any directory)",
        },
      ],
    },
    {
      name: "config:unset",
      description:
        "Unsets the local and global configuration variables for the Salesforce CLI",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Unset config var globally (to be used from any directory)",
        },
      ],
    },
    {
      name: "force:data:bulk:delete",
      description: "Bulk delete records from a csv file",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--csvfile"],
          description:
            "The path to the CSV file containing the ids of the records to delete",
          args: {
            name: "csvfile",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "The sObject type of the records you’re deleting",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "The number of minutes to wait for the command to complete before displaying the results",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:data:bulk:status",
      description: "View the status of a bulk data load job or batch",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-b", "--batchid"],
          description: "The ID of the batch whose status you want to view",
          args: {
            name: "batchid",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--jobid"],
          description:
            "The ID of the job you want to view or of the job whose batch you want to view",
          args: {
            name: "jobid",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:data:bulk:upsert",
      description: "Bulk upsert records from a CSV file",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--externalid"],
          description: "The column name of the external ID",
          args: {
            name: "externalid",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--csvfile"],
          description:
            "The path to the CSV file that defines the records to upsert",
          args: {
            name: "csvfile",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "The sObject type of the records you want to upsert",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "The number of minutes to wait for the command to complete before displaying the results",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--serial"],
          description: "Run batches in serial mode",
        },
      ],
    },
    {
      name: "force:data:record:create",
      description: "Creates and inserts a record",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "The type of the record you’re creating",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-v", "--values"],
          description: "The <fieldName>=<value> pairs you’re creating",
          args: {
            name: "values",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--usetoolingapi"],
          description: "Create the record with tooling api",
        },
        {
          name: "--perflog",
          description: "Get API performance data",
        },
      ],
    },
    {
      name: "force:data:record:delete",
      description: "Deletes a single record",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "The type of the record you’re deleting",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--sobjectid"],
          description: "The ID of the record you’re deleting",
          args: {
            name: "sobjectid",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--where"],
          description: "A list of <fieldName>=<value> pairs to search for",
          args: {
            name: "where",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--usetoolingapi"],
          description: "Delete the record with Tooling API",
        },
        {
          name: "--perflog",
          description: "Get API performance data",
        },
      ],
    },
    {
      name: "force:data:record:get",
      description: "Displays a single record",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "The type of the record you’re retrieving",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--sobjectid"],
          description: "The ID of the record you’re retrieving",
          args: {
            name: "sobjectid",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--where"],
          description: "A list of <fieldName>=<value> pairs to search for",
          args: {
            name: "where",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--usetoolingapi"],
          description: "Retrieve the record with Tooling API",
        },
        {
          name: "--perflog",
          description: "Get API performance data",
        },
      ],
    },
    {
      name: "force:data:record:update",
      description: "Updates a single record",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "The sObject type of the record you’re updating",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--sobjectid"],
          description: "The ID of the record you’re updating",
          args: {
            name: "sobjectid",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--where"],
          description: "A list of <fieldName>=<value> pairs to search for",
          args: {
            name: "where",
            isOptional: false,
          },
        },
        {
          name: ["-v", "--values"],
          description: "The <fieldName>=<value> pairs you’re updating",
          args: {
            name: "values",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--usetoolingapi"],
          description: "Update the record with Tooling API",
        },
        {
          name: "--perflog",
          description: "Get API performance data",
        },
      ],
    },
    {
      name: "force:data:soql:query",
      description: "Execute a SOQL query",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
          description: "Execute query with Tooling API",
        },
        {
          name: ["-r", "--resultformat"],
          description:
            "Result format emitted to stdout; --json flag overrides this parameter",
          args: {
            name: "resultformat",
            isOptional: false,
            suggestions: ["human", "csv", "json"],
          },
        },
        {
          name: "--perflog",
          description: "Get API performance data",
        },
      ],
    },
    {
      name: "force:data:tree:export",
      description: "Export data from an org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-q", "--query"],
          description:
            "Soql query, or filepath of file containing a soql query, to retrieve records",
          args: {
            name: "query",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--plan"],
          description:
            "Generate mulitple sobject tree files and a plan definition file for aggregated import",
        },
        {
          name: ["-x", "--prefix"],
          description: "Prefix of generated files",
          args: {
            name: "prefix",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "Directory to store files'",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:data:tree:import",
      description: "Import data into an org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--sobjecttreefiles"],
          description:
            "Comma-delimited, ordered paths of json files containing collection of record trees to insert",
          args: {
            name: "sobjecttreefiles",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--plan"],
          description:
            "Path to plan to insert multiple data files that have master-detail relationships",
          args: {
            name: "plan",
            isOptional: false,
          },
        },
        {
          name: "--confighelp",
          description:
            "Display schema information for the --plan configuration file to stdout; if you use this option, all other options except --json are ignored",
        },
      ],
    },
    {
      name: ["auth:accesstoken:store", "force:auth:accesstoken:store"],
      description: "Authorize an org using an existing Salesforce access token",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "The login URL of the instance the org lives on",
          args: {
            name: "instanceurl",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--setdefaultdevhubusername"],
          description:
            "Set the authenticated org as the default dev hub org for scratch org creation",
        },
        {
          // eslint-disable-next-line @withfig/fig-linter/no-duplicate-options-subcommands
          name: ["-s", "--setdefaultusername"],
          description:
            "Set the authenticated org as the default username that all commands run against",
        },
        {
          name: ["-a", "--setalias"],
          description: "Set an alias for the authenticated org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--noprompt"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: ["auth:device:login", "force:auth:device:login"],
      description: "Authorize an org using a device code",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "The login URL of the instance the org lives on",
          args: {
            name: "instanceurl",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--setdefaultdevhubusername"],
          description:
            "Set the authenticated org as the default dev hub org for scratch org creation",
        },
        {
          name: ["-s", "--setdefaultusername"],
          description:
            "Set the authenticated org as the default username that all commands run against",
        },
        {
          name: ["-a", "--setalias"],
          description: "Set an alias for the authenticated org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: ["auth:jwt:grant", "force:auth:jwt:grant"],
      description: "Authorize an org using the JWT flow",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Authentication username",
          args: {
            name: "username",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--jwtkeyfile"],
          description: "Path to a file containing the private key",
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
          description: "The login URL of the instance the org lives on",
          args: {
            name: "instanceurl",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--setdefaultdevhubusername"],
          description:
            "Set the authenticated org as the default dev hub org for scratch org creation",
        },
        {
          name: ["-s", "--setdefaultusername"],
          description:
            "Set the authenticated org as the default username that all commands run against",
        },
        {
          name: ["-a", "--setalias"],
          description: "Set an alias for the authenticated org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: ["auth:list", "force:auth:list"],
      description: "List auth connection information",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
    },
    {
      name: ["auth:logout", "force:auth:logout"],
      description: "Log out from authorized orgs",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--all"],
          description: "Include all authenticated orgs",
        },
        {
          name: ["-p", "--noprompt"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: ["auth:sfdxurl:store", "force:auth:sfdxurl:store"],
      description: "Authorize an org using an SFDX auth URL",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Path to a file containing the sfdx url",
          args: {
            name: "sfdxurlfile",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--setdefaultdevhubusername"],
          description:
            "Set the authenticated org as the default dev hub org for scratch org creation",
        },
        {
          name: ["-s", "--setdefaultusername"],
          description:
            "Set the authenticated org as the default username that all commands run against",
        },
        {
          name: ["-a", "--setalias"],
          description: "Set an alias for the authenticated org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: ["auth:web:login", "force:auth:web:login"],
      description: "Authorize an org using the web login flow",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "The login URL of the instance the org lives on",
          args: {
            name: "instanceurl",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--setdefaultdevhubusername"],
          description:
            "Set the authenticated org as the default dev hub org for scratch org creation",
        },
        {
          name: ["-s", "--setdefaultusername"],
          description:
            "Set the authenticated org as the default username that all commands run against",
        },
        {
          name: ["-a", "--setalias"],
          description: "Set an alias for the authenticated org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:limits:api:display",
      description: "Display current org’s limits",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:limits:recordcounts:display",
      description:
        "Display record counts for the specified standard and custom objects",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description:
            "Comma-separated list of API names of standard or custom objects for which to display record counts",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:org:display",
      description: "Get the description for the current or target org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "Emit additional command output to stdout",
        },
      ],
    },
    {
      name: "force:org:list",
      description: "List all orgs you’ve created or authenticated to",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "List more information about each org'",
        },
        {
          name: "--all",
          description:
            "Include expired, deleted, and unknown-status scratch orgs",
        },
        {
          name: "--clean",
          description:
            "Remove all local org authorizations for non-active orgs",
        },
        {
          name: ["-p", "--noprompt"],
          description: "Do not prompt for confirmation",
        },
        {
          name: "--skipconnectionstatus",
          description:
            "Skip retrieving the connection status of non-scratch orgs",
        },
      ],
    },
    {
      name: "force:org:open",
      description: "Open your default scratch org, or another specified org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--path"],
          description: "Navigation URL path",
          args: {
            name: "path",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--urlonly"],
          description: "Display navigation URL, but don’t launch browser",
        },
      ],
    },
    {
      name: "force:source:convert",
      description: "Convert source into Metadata API format",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "A source directory other than the default package to convert",
          args: {
            name: "rootdir",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description:
            "Output directory to store the Metadata API–formatted files in",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--packagename"],
          description:
            "Name of the package to associate with the metadata-formatted files",
          args: {
            name: "packagename",
            isOptional: false,
          },
        },
        {
          name: ["-x", "--manifest"],
          description:
            "File path to manifest (package.xml) of metadata types to convert",
          args: {
            name: "manifest",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--sourcepath"],
          description:
            "Comma-separated list of paths to the local source files to convert",
          args: {
            name: "sourcepath",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--metadata"],
          description:
            "Comma-separated list of metadata component names to convert",
          args: {
            name: "metadata",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:source:deploy",
      description:
        "Deploy source to an org Use this command to deploy source (metadata that’s in source format) to an org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--checkonly"],
          description: "Validate deploy but don’t save to the org",
        },
        {
          name: "--soapdeploy",
          description: "Deploy metadata with SOAP API instead of REST API",
        },
        {
          name: ["-w", "--wait"],
          description: "Wait time for command to finish in minutes",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--testlevel"],
          description: "Deployment testing level",
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
          description: "Tests to run if --testlevel RunSpecifiedTests",
          args: {
            name: "runtests",
            isOptional: false,
          },
        },
        {
          name: ["-o", "--ignoreerrors"],
          description: "Ignore any errors and do not roll back deployment",
        },
        {
          name: ["-g", "--ignorewarnings"],
          description:
            "Whether a warning will allow a deployment to complete successfully",
        },
        {
          name: ["-q", "--validateddeployrequestid"],
          description:
            "Deploy request ID of the validated deployment to run a Quick Deploy",
          args: {
            name: "validateddeployrequestid",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "Verbose output of deploy result",
        },
        {
          name: ["-m", "--metadata"],
          description: "Comma-separated list of metadata component names",
          args: {
            name: "metadata",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--sourcepath"],
          description: "Comma-separated list of source file paths to deploy",
          args: {
            name: "sourcepath",
            isOptional: false,
          },
        },
        {
          name: ["-x", "--manifest"],
          description:
            "File path for manifest (package.xml) of components to deploy",
          args: {
            name: "manifest",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:source:deploy:cancel",
      description: "Cancel a source deployment",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "Wait time for command to finish in minutes",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--jobid"],
          description:
            "Job ID of the deployment you want to cancel; defaults to your most recent CLI deployment if not specified",
          args: {
            name: "jobid",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:source:deploy:report",
      description: "Check the status of a metadata deployment",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "Wait time for command to finish in minutes",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--jobid"],
          description:
            "Job ID of the deployment you want to check; defaults to your most recent CLI deployment if not specified",
          args: {
            name: "jobid",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "Verbose output of deploy result",
        },
      ],
    },
    {
      name: "force:source:manifest:create",
      description:
        "Create a project manifest that lists the metadata components you want to deploy or retrieve",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--metadata"],
          description:
            "Comma-separated list of names of metadata components to include in the manifest",
          args: {
            name: "metadata",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--sourcepath"],
          description:
            "Comma-separated list of paths to the local source files to include in the manifest",
          args: {
            name: "sourcepath",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--manifestname"],
          description: "Name of a custom manifest file to create",
          args: {
            name: "manifestname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--manifesttype"],
          description:
            "Type of manifest to create; the type determines the name of the created file",
          args: {
            name: "manifesttype",
            isOptional: false,
            suggestions: ["pre", "post", "destroy", "package"],
          },
        },
        {
          name: ["-o", "--outputdir"],
          description: "Directory to save the created manifest",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:source:open",
      description: "Edit a Lightning Page with Lightning App Builder",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--sourcefile"],
          description: "File to edit",
          args: {
            name: "sourcefile",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--urlonly"],
          description: "Generate a navigation URL; don’t launch the editor",
        },
      ],
    },
    {
      name: "force:source:retrieve",
      description: "Retrieve source from an org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--apiversion"],
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--sourcepath"],
          description: "Comma-separated list of source file paths to retrieve",
          args: {
            name: "sourcepath",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "Wait time for command to finish in minutes",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-x", "--manifest"],
          description:
            "File path for manifest (package.xml) of components to retrieve",
          args: {
            name: "manifest",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--metadata"],
          description: "Comma-separated list of metadata component names",
          args: {
            name: "metadata",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--packagenames"],
          description: "A comma-separated list of packages to retrieve",
          args: {
            name: "packagenames",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "Verbose output of retrieve result",
        },
      ],
    },
    {
      name: "force:schema:sobject:describe",
      description: "Displays the metadata for a standard or custom object",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobjecttype"],
          description: "The API name of the object to describe",
          args: {
            name: "sobjecttype",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--usetoolingapi"],
          description: "Execute with Tooling API",
        },
      ],
    },
    {
      name: "force:schema:sobject:list",
      description: "List all objects of a specified category",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--sobjecttypecategory"],
          description: "The type of objects to list (all|custom|standard)",
          args: {
            name: "sobjecttypecategory",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:analytics:template:create",
      description: "Add an Analytics template to your workspace",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--templatename"],
          description: "Name of the Analytics template",
          args: {
            name: "templatename",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:apex:class:create",
      description: "Create an Apex class",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Name of the generated Apex class",
          args: {
            name: "classname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
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
          description: "Folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:apex:trigger:create",
      description: "Create an Apex trigger",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Name of the generated Apex trigger",
          args: {
            name: "triggername",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["ApexTrigger"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "Folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--sobject"],
          description: "SObject to create a trigger on",
          args: {
            name: "sobject",
            isOptional: false,
          },
        },
        {
          name: ["-e", "--triggerevents"],
          description: "Events that fire the trigger",
          args: {
            name: "triggerevents",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:lightning:app:create",
      description: "Create a Lightning app",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Name of the generated Lightning app",
          args: {
            name: "appname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["DefaultLightningApp"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "Folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:lightning:component:create",
      description:
        "Create a bundle for an Aura component or a Lightning web component",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Name of the generated Lightning component",
          args: {
            name: "componentname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
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
          description: "Folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: "--type",
          description: "Type of the Lightning component",
          args: {
            name: "type",
            isOptional: false,
            suggestions: ["aura", "lwc"],
          },
        },
      ],
    },
    {
      name: "force:lightning:event:create",
      description: "Create a Lightning event",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Name of the generated Lightning event",
          args: {
            name: "eventname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["DefaultLightningEvt"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "Folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:lightning:interface:create",
      description: "Create a Lightning interface",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Name of the generated Lightning interface",
          args: {
            name: "interfacename",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["DefaultLightningIntf"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "Folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:lightning:test:create",
      description: "Create a Lightning test",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Name of the generated Lightning test",
          args: {
            name: "testname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["DefaultLightningTest"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "Folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:project:create",
      description: "Create a Salesforce DX project",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Name of the generated project",
          args: {
            name: "projectname",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for project creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["standard", "empty", "analytics"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "Folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--namespace"],
          description: "Project associated namespace",
          args: {
            name: "namespace",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--defaultpackagedir"],
          description: "Default package directory name",
          args: {
            name: "defaultpackagedir",
            isOptional: false,
          },
        },
        {
          name: ["-x", "--manifest"],
          description:
            "Generate a manifest (package.xml) for change-set based development",
        },
      ],
    },
    {
      name: "force:staticresource:create",
      description: "Create a static resource",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Name of the generated static resource",
          args: {
            name: "resourcename",
            isOptional: false,
          },
        },
        {
          name: "--contenttype",
          description:
            "Content type (mime type) of the generated static resource",
          args: {
            name: "contenttype",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "Folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:visualforce:component:create",
      description: "Create a Visualforce component",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["DefaultVFComponent"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "Folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--componentname"],
          description: "Name of the generated Visualforce component",
          args: {
            name: "componentname",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
    },
    {
      name: "force:visualforce:page:create",
      description: "Create a Visualforce page",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Template to use for file creation",
          args: {
            name: "template",
            isOptional: false,
            suggestions: ["DefaultVFPage"],
          },
        },
        {
          name: ["-d", "--outputdir"],
          description: "Folder for saving the created files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--pagename"],
          description: "Name of the generated Visualforce page",
          args: {
            name: "pagename",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
    },
    {
      name: "force:user:create",
      description: "Create a user for a scratch org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--setalias"],
          description:
            "Set an alias for the created username to reference within the CLI",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--definitionfile"],
          description: "File path to a user definition",
          args: {
            name: "definitionfile",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--setuniqueusername"],
          description:
            "Force the username, if specified in the definition file or at the command line, to be unique by appending the org ID",
        },
      ],
    },
    {
      name: "force:user:display",
      description: "Displays information about a user of a scratch org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:user:list",
      description: "List all authenticated users of an org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:user:password:generate",
      description: "Generate a password for scratch org users",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-o", "--onbehalfof"],
          description:
            "Comma-separated list of usernames or aliases to assign the password to",
          args: {
            name: "onbehalfof",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--length"],
          description:
            "Number of characters in the generated password; valid values are between 8 and 1000",
          args: {
            name: "length",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--complexity"],
          description:
            "Level of password complexity or strength; the higher the value, the stronger the password",
          args: {
            name: "complexity",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:user:permset:assign",
      description: "Assign a permission set to one or more users of an org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--permsetname"],
          description: "Comma-separated list of permission sets to assign",
          args: {
            name: "permsetname",
            isOptional: false,
          },
        },
        {
          name: ["-o", "--onbehalfof"],
          description:
            "Comma-separated list of usernames or aliases to assign the permission set to",
          args: {
            name: "onbehalfof",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "help",
      description: "Display help for <%= config.bin %>",
      options: [
        {
          name: "--all",
          description: "See all commands in CLI",
        },
      ],
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
      },
    },
    {
      name: "force:apex:log:tail",
      description: "",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--color"],
          description: "Colorize noteworthy log lines",
        },
        {
          name: ["-d", "--debuglevel"],
          description: "Debug level for trace flag",
          args: {
            name: "debuglevel",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--skiptraceflag"],
          description: "Skip trace flag setup",
        },
      ],
    },
    {
      name: "force:community:create",
      description: "Creates an Experience Cloud site using a template",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--name"],
          description: "Name of the site to create",
          args: {
            name: "name",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--templatename"],
          description: "Template to use to create a site",
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
          description: "Description of the site",
          args: {
            name: "description",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:community:publish",
      description: "Publishes an Experience Builder site to make it live",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--name"],
          description: "Name of the Experience Builder site to publish",
          args: {
            name: "name",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:community:template:list",
      description: "Retrieves the list of templates available in your org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:mdapi:convert",
      description:
        "Convert metadata from the Metadata API format into the source format",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "The root directory containing the Metadata API–formatted metadata",
          args: {
            name: "rootdir",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--outputdir"],
          description:
            "The output directory to store the source–formatted files",
          args: {
            name: "outputdir",
            isOptional: false,
          },
        },
        {
          name: ["-x", "--manifest"],
          description:
            "File path to manifest (package.xml) of metadata types to convert",
          args: {
            name: "manifest",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--metadata"],
          description:
            "Comma-separated list of metadata component names to convert",
          args: {
            name: "metadata",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--metadatapath"],
          description:
            "Comma-separated list of paths to the local source files to convert",
          args: {
            name: "metadatapath",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:mdapi:deploy",
      description: "Deploy metadata to an org using Metadata API",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--checkonly"],
          description: "Validate deploy but don’t save to the org",
        },
        {
          name: ["-d", "--deploydir"],
          description: "Root of directory tree of files to deploy",
          args: {
            name: "deploydir",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Wait time for command to finish in minutes (default: 0)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--testlevel"],
          description: "Deployment testing level",
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
          description: "Tests to run if --testlevel RunSpecifiedTests",
          args: {
            name: "runtests",
            isOptional: false,
          },
        },
        {
          name: ["-o", "--ignoreerrors"],
          description: "Ignore any errors and do not roll back deployment",
        },
        {
          name: ["-g", "--ignorewarnings"],
          description:
            "Whether a warning will allow a deployment to complete successfully",
        },
        {
          name: ["-q", "--validateddeployrequestid"],
          description:
            "Request ID of the validated deployment to run a Quick Deploy",
          args: {
            name: "validateddeployrequestid",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "Verbose output of deploy results",
        },
        {
          name: ["-f", "--zipfile"],
          description: "Path to .zip file of metadata to deploy",
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
          description: "Deploy metadata with SOAP API instead of REST API",
        },
      ],
    },
    {
      name: "force:mdapi:deploy:cancel",
      description: "Cancel a metadata deployment",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "Wait time for command to finish in minutes 33",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--jobid"],
          description:
            "Job ID of the deployment you want to cancel; defaults to your most recent CLI deployment if not specified",
          args: {
            name: "jobid",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:mdapi:deploy:report",
      description: "Check the status of a metadata deployment",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Wait time for command to finish in minutes (default: 0)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--jobid"],
          description:
            "Job ID of the deployment to check; required if you’ve never deployed using Salesforce CLI; if not specified, defaults to your most recent CLI deployment",
          args: {
            name: "jobid",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "Verbose output of deploy results",
        },
      ],
    },
    {
      name: "force:mdapi:describemetadata",
      description: "Display the metadata types enabled for your org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
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
          description: "Filter metadata known by the CLI",
          args: {
            name: "resultfile",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:mdapi:listmetadata",
      description:
        "Display properties of metadata components of a specified type",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
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
          description: "Path to the file where results are stored",
          args: {
            name: "resultfile",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--metadatatype"],
          description:
            "Metadata type to be retrieved, such as CustomObject; metadata type value is case-sensitive",
          args: {
            name: "metadatatype",
            isOptional: false,
          },
        },
        {
          name: "--folder",
          description:
            "Folder associated with the component; required for components that use folders; folder names are case-sensitive",
          args: {
            name: "folder",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:mdapi:retrieve",
      description: "Retrieve metadata from an org using Metadata API",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--apiversion"],
          description: "Target API version for the retrieve",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Wait time for command to finish in minutes (default: -1 (no limit))",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--retrievetargetdir"],
          description: "Directory root for the retrieved files",
          args: {
            name: "retrievetargetdir",
            isOptional: false,
          },
        },
        {
          name: ["-k", "--unpackaged"],
          description: "File path of manifest of components to retrieve",
          args: {
            name: "unpackaged",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "Verbose output of retrieve result",
        },
        {
          name: ["-d", "--sourcedir"],
          description:
            "Source dir to use instead of the default package dir in sfdx-project.json",
          args: {
            name: "sourcedir",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--packagenames"],
          description: "A comma-separated list of packages to retrieve",
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
    },
    {
      name: "force:mdapi:retrieve:report",
      description: "Check the status of a metadata retrieval",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Wait time for command to finish in minutes (default: -1 (no limit))",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--retrievetargetdir"],
          description: "Directory root for the retrieved files",
          args: {
            name: "retrievetargetdir",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "Verbose output of retrieve result",
        },
        {
          name: ["-i", "--jobid"],
          description:
            "Job ID of the retrieve you want to check; defaults to your most recent CLI retrieval if not specified",
          args: {
            name: "jobid",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:org:clone",
      description: "Clone a sandbox org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--type"],
          description: "Type of org to create",
          args: {
            name: "type",
            isOptional: false,
            suggestions: ["sandbox"],
          },
        },
        {
          name: ["-f", "--definitionfile"],
          description: "Path to an org definition file",
          args: {
            name: "definitionfile",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--setdefaultusername"],
          description: "Set the created org as the default username",
        },
        {
          name: ["-a", "--setalias"],
          description: "Alias for the created org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "The streaming client socket timeout (in minutes)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:org:create",
      description: "Create a scratch or sandbox org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--type"],
          description: "Type of org to create",
          args: {
            name: "type",
            isOptional: false,
            suggestions: ["scratch", "sandbox"],
          },
        },
        {
          name: ["-f", "--definitionfile"],
          description: "Path to an org definition file",
          args: {
            name: "definitionfile",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--nonamespace"],
          description: "Create the scratch org with no namespace",
        },
        {
          name: ["-c", "--noancestors"],
          description:
            "Do not include second-generation package ancestors in the scratch org",
        },
        {
          name: ["-i", "--clientid"],
          description:
            "Connected app consumer key; not supported for sandbox org creation",
          args: {
            name: "clientid",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--setdefaultusername"],
          description: "Set the created org as the default username",
        },
        {
          name: ["-a", "--setalias"],
          description: "Alias for the created org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "The streaming client socket timeout (in minutes)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--durationdays"],
          description:
            "Duration of the scratch org (in days) (default:7, min:1, max:30)",
          args: {
            name: "durationdays",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:org:delete",
      description: "Mark a scratch or sandbox org for deletion",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: ["-u", "--targetusername"],
          description:
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--noprompt"],
          description: "No prompt to confirm deletion",
        },
      ],
    },
    {
      name: "force:org:shape:create",
      description:
        "Create a scratch org configuration (shape) based on the specified source org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:org:shape:delete",
      description: "Delete all org shapes for a target org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--noprompt"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "force:org:shape:list",
      description: "List all org shapes you’ve created",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "List more information about each org shape",
        },
      ],
    },
    {
      name: "force:org:snapshot:create",
      description: "Snapshot a scratch org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
          description: "Unique name of snapshot",
          args: {
            name: "snapshotname",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--description"],
          description: "Description of snapshot",
          args: {
            name: "description",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:org:snapshot:delete",
      description: "Delete a scratch org snapshot",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--snapshot"],
          description: "Name or ID of snapshot to delete",
          args: {
            name: "snapshot",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:org:snapshot:get",
      description: "Get details about a scratch org snapshot",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--snapshot"],
          description: "Name or ID of snapshot to retrieve",
          args: {
            name: "snapshot",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:org:snapshot:list",
      description: "List scratch org snapshots",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:org:status",
      description: "Report sandbox org creation status and authenticate to org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--sandboxname"],
          description: "Name of the sandbox org to check status for",
          args: {
            name: "sandboxname",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--setdefaultusername"],
          description: "Set the created org as the default username",
        },
        {
          name: ["-a", "--setalias"],
          description: "Alias for the created org",
          args: {
            name: "setalias",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "Number of minutes to wait while polling for status",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:package1:version:create",
      description:
        "Create a first-generation package version in the release org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
          description: "Package version name",
          args: {
            name: "name",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--description"],
          description: "Package version description",
          args: {
            name: "description",
            isOptional: false,
          },
        },
        {
          name: ["-v", "--version"],
          description:
            "Package version in major.minor format, for example, 3.2",
          args: {
            name: "version",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--managedreleased"],
          description: "Create a managed package version",
        },
        {
          name: ["-r", "--releasenotesurl"],
          description: "Release notes URL",
          args: {
            name: "releasenotesurl",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--postinstallurl"],
          description: "Post install URL",
          args: {
            name: "postinstallurl",
            isOptional: false,
          },
        },
        {
          name: ["-k", "--installationkey"],
          description:
            "Installation key for key-protected package (default: null)",
          args: {
            name: "installationkey",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Minutes to wait for the package version to be created (default: 2 minutes)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:package1:version:create:get",
      description: "Retrieve the status of a package version creation request",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
    },
    {
      name: "force:package1:version:display",
      description: "Display details about a first-generation package version",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--packageversionid"],
          description: "Metadata package version ID (starts with 04t)",
          args: {
            name: "packageversionid",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:package1:version:list",
      description:
        "List package versions for the specified first-generation package or for the org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--packageid"],
          description: "Metadata package ID (starts with 033)",
          args: {
            name: "packageid",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:package:create",
      description: "Create a package",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--name"],
          description: "Package name",
          args: {
            name: "name",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--packagetype"],
          description: "Package type",
          args: {
            name: "packagetype",
            isOptional: false,
            suggestions: ["Managed", "Unlocked"],
          },
        },
        {
          name: ["-d", "--description"],
          description: "Package description",
          args: {
            name: "description",
            isOptional: false,
          },
        },
        {
          name: ["-e", "--nonamespace"],
          description:
            "Creates the package with no namespace; available only for unlocked packages",
        },
        {
          name: ["-r", "--path"],
          description:
            "Path to directory that contains the contents of the package",
          args: {
            name: "path",
            isOptional: false,
          },
        },
        {
          name: "--orgdependent",
          description:
            "Depends on unpackaged metadata in the installation org. Applies to unlocked packages only",
        },
        {
          name: ["-o", "--errornotificationusername"],
          description:
            "Active Dev Hub user designated to receive email notifications for package errors",
          args: {
            name: "errornotificationusername",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:package:delete",
      description: "Delete a package",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--noprompt"],
          description: "Don’t prompt before deleting the package",
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
    },
    {
      name: "force:package:install",
      description: "Install a package in the target org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "Number of minutes to wait for installation status",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-k", "--installationkey"],
          description:
            "Installation key for key-protected package (default: null)",
          args: {
            name: "installationkey",
            isOptional: false,
          },
        },
        {
          name: ["-b", "--publishwait"],
          description:
            "Number of minutes to wait for subscriber package version ID to become available in the target org",
          args: {
            name: "publishwait",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--noprompt"],
          description: "Do not prompt for confirmation",
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
            "Compile all Apex in the org and package, or only Apex in the package; unlocked packages only",
          args: {
            name: "apexcompile",
            isOptional: false,
            suggestions: ["all", "package"],
          },
        },
        {
          name: ["-s", "--securitytype"],
          description:
            "Security access type for the installed package (deprecation notice: The default --securitytype value will change from AllUsers to AdminsOnly in v47.0 or later.)",
          args: {
            name: "securitytype",
            isOptional: false,
            suggestions: ["AllUsers", "AdminsOnly"],
          },
        },
        {
          name: ["-t", "--upgradetype"],
          description:
            "The upgrade type for the package installation; available only for unlocked packages",
          args: {
            name: "upgradetype",
            isOptional: false,
            suggestions: ["DeprecateOnly", "Mixed", "Delete"],
          },
        },
      ],
    },
    {
      name: "force:package:install:report",
      description: "Retrieve the status of a package installation request",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
    },
    {
      name: "force:package:installed:list",
      description: "List the org’s installed packages",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:package:list",
      description: "List all packages in the Dev Hub org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "Display extended package detail",
        },
      ],
    },
    {
      name: "force:package:uninstall",
      description: "Uninstall a second-generation package from the target org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description: "Number of minutes to wait for uninstall status",
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
    },
    {
      name: "force:package:uninstall:report",
      description: "Retrieve status of package uninstall request",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
    },
    {
      name: "force:package:update",
      description: "Update package details",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
          description: "New package name",
          args: {
            name: "name",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--description"],
          description: "New package description",
          args: {
            name: "description",
            isOptional: false,
          },
        },
        {
          name: ["-o", "--errornotificationusername"],
          description:
            "Active Dev Hub user designated to receive email notifications for package errors",
          args: {
            name: "errornotificationusername",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:package:version:create",
      description: "Create a package version",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
            "Path to directory that contains the contents of the package",
          args: {
            name: "path",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--definitionfile"],
          description:
            "Path to a definition file similar to scratch org definition file that contains the list of features and org preferences that the metadata of the package version depends on",
          args: {
            name: "definitionfile",
            isOptional: false,
          },
        },
        {
          name: ["-b", "--branch"],
          description: "The package version’s branch",
          args: {
            name: "branch",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--tag"],
          description: "The package version’s tag",
          args: {
            name: "tag",
            isOptional: false,
          },
        },
        {
          name: ["-k", "--installationkey"],
          description:
            "Installation key for key-protected package (either --installationkey or --installationkeybypass is required)",
          args: {
            name: "installationkey",
            isOptional: false,
          },
        },
        {
          name: ["-x", "--installationkeybypass"],
          description:
            "Bypass the installation key requirement (either --installationkey or --installationkeybypass is required)",
        },
        {
          name: ["-w", "--wait"],
          description: "Minutes to wait for the package version to be created",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--versionname"],
          description: "The name of the package version to be created",
          args: {
            name: "versionname",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--versionnumber"],
          description:
            "The version number of the package version to be created",
          args: {
            name: "versionnumber",
            isOptional: false,
          },
        },
        {
          name: ["-e", "--versiondescription"],
          description: "The description of the package version to be created",
          args: {
            name: "versiondescription",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--codecoverage"],
          description:
            "Calculate the code coverage by running the packaged Apex tests",
        },
        {
          name: "--releasenotesurl",
          description: "Release notes URL",
          args: {
            name: "releasenotesurl",
            isOptional: false,
          },
        },
        {
          name: "--postinstallurl",
          description: "Post-install URL",
          args: {
            name: "postinstallurl",
            isOptional: false,
          },
        },
        {
          name: "--postinstallscript",
          description: "Post-install script name; managed packages only",
          args: {
            name: "postinstallscript",
            isOptional: false,
          },
        },
        {
          name: "--uninstallscript",
          description: "Uninstall script name; managed packages only",
          args: {
            name: "uninstallscript",
            isOptional: false,
          },
        },
        {
          name: "--skipvalidation",
          description:
            "Skip validation during package version creation; you can’t promote unvalidated package versions",
        },
      ],
    },
    {
      name: "force:package:version:create:list",
      description: "List package version creation requests",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--createdlastdays"],
          description:
            "Created in the last specified number of days (starting at 00:00:00 of first day to now; 0 for today)",
          args: {
            name: "createdlastdays",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--status"],
          description: "Filter the list by version creation request status",
          args: {
            name: "status",
            isOptional: false,
            suggestions: ["Queued", "InProgress", "Success", "Error"],
          },
        },
      ],
    },
    {
      name: "force:package:version:create:report",
      description: "Retrieve details about a package version creation request",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-i", "--packagecreaterequestid"],
          description: "Package version creation request ID (starts with 08c)",
          args: {
            name: "packagecreaterequestid",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:package:version:delete",
      description: "Delete a package version",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-n", "--noprompt"],
          description: "Don’t prompt before deleting the package version",
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
    },
    {
      name: "force:package:version:displayancestry",
      description:
        "Display the ancestry tree for a 2GP managed package version",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
          description: "Display the ancestry tree in DOT code",
        },
        {
          name: "--verbose",
          description:
            "Display both the package version ID (starts with 04t) and the version number (major.minor.patch.build) in the ancestry tree",
        },
      ],
    },
    {
      name: "force:package:version:list",
      description: "List all package versions in the Dev Hub org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--createdlastdays"],
          description:
            "Created in the last specified number of days (starting at 00:00:00 of first day to now; 0 for today)",
          args: {
            name: "createdlastdays",
            isOptional: false,
          },
        },
        {
          name: "--concise",
          description: "Display limited package version details",
        },
        {
          name: ["-m", "--modifiedlastdays"],
          description:
            "List items modified in the specified last number of days (starting at 00:00:00 of first day to now; 0 for today)",
          args: {
            name: "modifiedlastdays",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--packages"],
          description:
            "Filter results on specified comma-delimited packages (aliases or 0Ho IDs)",
          args: {
            name: "packages",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--released"],
          description: "Display released versions only",
        },
        {
          name: ["-o", "--orderby"],
          description: "Order by the specified package version fields",
          args: {
            name: "orderby",
            isOptional: false,
          },
        },
        {
          name: "--verbose",
          description: "Display extended package version details",
        },
      ],
    },
    {
      name: "force:package:version:promote",
      description: "Promote a package version to released",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
            "No prompt to confirm setting the package version as released",
        },
      ],
    },
    {
      name: "force:package:version:report",
      description:
        "Retrieve details about a package version in the Dev Hub org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
          description: "Displays extended package version details",
        },
      ],
    },
    {
      name: "force:package:version:update",
      description: "Update a package version",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the dev hub org; overrides default dev hub org",
          args: {
            name: "targetdevhubusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
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
          description: "New package version name",
          args: {
            name: "versionname",
            isOptional: false,
          },
        },
        {
          name: ["-e", "--versiondescription"],
          description: "New package version description",
          args: {
            name: "versiondescription",
            isOptional: false,
          },
        },
        {
          name: ["-b", "--branch"],
          description: "New package version branch",
          args: {
            name: "branch",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--tag"],
          description: "New package version tag",
          args: {
            name: "tag",
            isOptional: false,
          },
        },
        {
          name: ["-k", "--installationkey"],
          description:
            "New installation key for key-protected package (default: null)",
          args: {
            name: "installationkey",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:source:delete",
      description:
        "Delete source from your project and from a non-source-tracked org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--checkonly"],
          description:
            "Validate delete command but do not delete from the org or delete files locally",
        },
        {
          name: ["-r", "--noprompt"],
          description: "Do not prompt for delete confirmation",
        },
        {
          name: ["-w", "--wait"],
          description: "Wait time for command to finish in minutes 33",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--sourcepath"],
          description:
            "Comma-separated list of paths to the local metadata to delete",
          args: {
            name: "sourcepath",
            isOptional: false,
          },
        },
        {
          name: ["-m", "--metadata"],
          description:
            "Comma-separated list of names of metadata components to delete",
          args: {
            name: "metadata",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:source:ignored:list",
      description:
        "Check your local project package directories for forceignored files",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "File or directory of files that the command checks for foreceignored files",
          args: {
            name: "sourcepath",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:source:pull",
      description: "Pull source from the scratch org to the project",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Wait time for command to finish in minutes (default: 33)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--forceoverwrite"],
          description:
            "Ignore conflict warnings and overwrite changes to the project",
        },
      ],
    },
    {
      name: "force:source:push",
      description: "Push source to a scratch org from the project",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--forceoverwrite"],
          description:
            "Ignore conflict warnings and overwrite changes to scratch org",
        },
        {
          name: ["-g", "--ignorewarnings"],
          description: "Deploy changes even if warnings are generated",
        },
        {
          name: ["-w", "--wait"],
          description:
            "Wait time for command to finish in minutes (default: 33)",
          args: {
            name: "wait",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:source:status",
      description: "List local changes and/or changes in a scratch org",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-a", "--all"],
          description: "List all the changes that have been made",
        },
        {
          name: ["-l", "--local"],
          description: "List the changes that have been made locally",
        },
        {
          name: ["-r", "--remote"],
          description:
            "List the changes that have been made in the scratch org",
        },
      ],
    },
    {
      name: "force:source:tracking:clear",
      description: "Clear all local source tracking information",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--noprompt"],
          description:
            "Do not prompt for source tracking override confirmation",
        },
      ],
    },
    {
      name: "force:source:tracking:reset",
      description: "Reset local and remote source tracking",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Username or alias for the target org; overrides default target org",
          args: {
            name: "targetusername",
            isOptional: false,
          },
        },
        {
          name: "--apiversion",
          description:
            "Override the api version used for api requests made by this command",
          args: {
            name: "apiversion",
            isOptional: false,
          },
        },
        {
          name: ["-r", "--revision"],
          description:
            "Reset to a specific SourceMember revision counter number",
          args: {
            name: "revision",
            isOptional: false,
          },
        },
        {
          name: ["-p", "--noprompt"],
          description:
            "Do not prompt for source tracking override confirmation",
        },
      ],
    },
    {
      name: "force:lightning:lwc:test:create",
      description:
        "Creates a Lightning web component test file with boilerplate code inside a __tests__ directory",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
            "Path to Lightning web component .js file to create a test for",
          args: {
            name: "filepath",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "force:lightning:lwc:test:run",
      description: "Invokes Lightning Web Components Jest unit tests",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
          description: "Run tests in debug mode",
        },
        {
          name: "--watch",
          description: "Run tests in watch mode",
        },
      ],
      args: {
        name: "passthrough",
        isOptional: true,
      },
    },
    {
      name: "force:lightning:lwc:test:setup",
      description:
        "Install Jest unit testing tools for Lightning Web Components",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
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
    },
    {
      name: "plugins:generate",
      description: "Create a new sfdx-cli plugin",
      options: [
        {
          name: "--defaults",
          description: "Use defaults for every setting",
        },
        {
          name: "--force",
          description: "Overwrite existing files",
        },
      ],
      args: {
        name: "path",
        isOptional: true,
      },
    },
  ],
};

export default completionSpec;
