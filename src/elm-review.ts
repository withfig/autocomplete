/**
 * The report type is either `json` or `ndjson`
 */
const reportType = [
  {
    name: "json",
    description: "Prints a single JSON object",
  },
  {
    name: "ndjson",
    description: "Print one JSON object per error each on a new line",
  },
];

/**
 * Based on [elm-review](https://github.com/jfmengels/node-elm-review), version 2.9.1. Cli tool for reviewing Elm code.
 */
const completionSpec: Fig.Spec = {
  name: "elm-review",
  description: "",
  subcommands: [
    {
      name: "init",
      description: "Initialize Elm Review in this directory",
      options: [
        {
          name: ["--help", "-h"],
          description: "Show help for elm-review init",
        },
        {
          name: "--config",
          description:
            "Create the configuration files in the specified directory instead of in the review/ directory",
          args: {
            name: "<path-to-review-directory>",
            template: "folders",
          },
        },
        {
          name: "--template",
          description:
            "Copy the review configuration from a GitHub repository, at the root or in a folder",
          args: {
            name: "<author>/<repo>[/path-to-the-config-folder][#branch-or-commit]",
          },
        },
        {
          name: "--compiler",
          description: "Specify the path to the elm compiler",
          args: {
            name: "<path-to-elm>",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "suppress",
      description:
        "Generate suppression files for rules that report many errors",
      options: [
        {
          name: ["--help", "-h"],
          description: "Show help for elm-review suppress",
        },
        {
          name: "--check-after-tests",
          description: "Checks whether there are uncommitted suppression files",
        },
        {
          name: "--unsuppress",
          description:
            "Include suppressed errors in the error report for all rules",
        },
        {
          name: "--unsuppress-rules",
          description:
            "Include suppressed errors in the error report for all rules",
          args: {
            name: "<rule1,rule2,...>",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "new-package",
      description:
        "Creates an new project aimed to contain rules and to be published later",
      options: [
        {
          name: ["--help", "-h"],
          description: "Show help for elm-review new-package",
        },
        {
          name: "--compiler",
          description: "Specify the path to the elm compiler",
          args: {
            name: "<path-to-elm>",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "new-rule",
      description:
        "Adds a new rule to your review configuration or review package",
      options: [
        {
          name: ["--help", "-h"],
          description: "Show help for elm-review new-package",
        },
      ],
      args: {
        name: "rule name",
        description:
          "Add a rule file in src/ and a corresponding test file in tests/. Should be formatted just like an Elm module name, such as NoDoingThis or No.Doing.This",
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for elm-review",
    },
    {
      name: "--unsuppress",
      description:
        "Include suppressed errors in the error report for all rules",
    },
    {
      name: "--rules",
      description:
        "Run with a subsection of the rules in the configuration. Specify them by their name, and separate them by commas",
      args: {
        name: "<rule1,rule2,...>",
        description: "Run with a subsection of the rules in the configuration",
        isVariadic: true,
      },
    },
    {
      name: "--watch",
      description:
        "Re-run elm-review automatically when your project or configuration changes",
    },
    {
      name: "--watch-code",
      description: "Re-run elm-review automatically when your project changes",
    },
    {
      name: "--elmjson",
      description: "Specify the path to the elm.json file of the project",
      args: {
        name: "<path-to-elm.json>",
        template: "filepaths",
      },
    },
    {
      name: "--config",
      description: "Use the review configuration in the specified directory",
      args: {
        name: "<path-to-review-directory>",
        template: "folders",
      },
    },
    {
      name: "--template",
      description: "Use the review configuration from a GitHub repository",
      args: {
        name: "<author>/<repo>[/path-to-the-config-folder][#branch-or-commit]",
      },
    },
    {
      name: "--compiler",
      description: "Specify the path to the elm compiler",
      args: {
        name: "<path-to-elm>",
        template: "filepaths",
      },
    },
    {
      name: ["--version", "-v"],
      description: "Print the version of the elm-review CLI",
    },
    {
      name: "--debug",
      description:
        "Add helpful information to debug your configuration or rules",
    },
    {
      name: "--report",
      description: "Error reports will be in JSON format",
      args: {
        name: "json or ndjson",
        suggestions: reportType,
      },
    },
    {
      name: "--no-details",
      description:
        "Hide the details from error reports for a more compact view",
    },
    {
      name: "--ignore-dirs",
      description:
        "Ignore the reports of all rules for the specified directories",
      args: {
        name: "<dir1,dir2,...>",
        template: "folders",
        isVariadic: true,
      },
    },
    {
      name: "--ignore-files",
      description: "Ignore the reports of all rules for the specified files",
      args: {
        name: "<file1,file2,...>",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--fix",
      description:
        "Elm Review will present fixes for the errors that offer an automatic fix, which you can then accept or refuse one by one",
    },
    {
      name: "--fix-all",
      description:
        "Elm Review will present a single fix containing the application of all available automatic fixes, which you can then accept or refuse",
    },
    {
      name: "--elm-format-path",
      description: "Specify the path to elm-format",
      args: {
        name: "<path-to-elm-format>",
        template: "filepaths",
      },
    },
    {
      name: "--fix-limit",
      description: "Limit the number of fixes applied in a single batch to N",
      args: {
        name: "N",
        description: "The number of fixes to apply before prompting the user",
      },
    },
    {
      name: "--extract",
      description:
        'Enable extracting data from the project for the rules that have a data extractor. Requires running with --report=json. Learn more by reading the section about "Extracting information" at https://bit.ly/3UmNr0V',
    },
    {
      name: "--benchmark-info",
      description:
        "Print out how much time it took for rules and phases of the process to run. This is meant for benchmarking purposes",
    },
    {
      name: "--no-color",
      description: "Disable colors in the output",
    },
  ],
  args: {
    name: "files or directories to review",
    isVariadic: true,
    template: ["filepaths", "folders"],
  },
};
export default completionSpec;
