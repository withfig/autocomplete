const completionSpec: Fig.Spec = {
  name: "eslint",
  description: "Pluggable JavaScript linter",
  options: [
    {
      name: "--no-eslintrc",
      description: "Disable use of configuration from .eslintrc.*",
    },
    {
      name: ["-c", "--config"],
      description:
        "Use this configuration, overriding .eslintrc.* config options if present",
      args: {
        template: ["filepaths"],
      },
    },
    {
      name: "--env",
      description: "Specify environments",
      args: {
        generators: {
          /*
           * Multiple envs can be set with a ',' separator.
           * We want to filter over this static list of suggestions
           * so we don't suggest envs that have already been entered.
           * */
          getQueryTerm: ",",
          trigger: ",",
          custom: async (ctx) => {
            const suggestions = [
              "browser",
              "node",
              "commonjs",
              "shared-node-browser",
              "es6",
              "ecmaVersion",
              "es2017",
              "es2020",
              "es2021",
              "worker",
              "amd",
              "mocha",
              "jasmine",
              "jest",
              "phantomjs",
              "protractor",
              "qunit",
              "jquery",
              "prototypejs",
              "shelljs",
              "meteor",
              "mongo",
              "applescript",
              "nashorn",
              "servicerworker",
              "atomtest",
              "embertest",
              "webextensions",
              "greasemonkey",
            ];

            const currentToken = [ctx[ctx.length - 1]][0];

            // Return suggestions minus those that have already been entered
            return suggestions
              .filter((sugg) => !currentToken.split(",").includes(sugg))
              .map((sugg) => ({ name: sugg }));
          },
        },
      },
    },
    {
      name: "--ext",
      description: "Specify JavaScript file extensions",
      args: {
        name: "Extension",
        default: ".js",
      },
    },
    {
      name: "--global",
      description: "Define global variables",
      args: {
        name: "Variables",
      },
    },
    {
      name: "--parser",
      description: "Specify the parser to be used",
      args: {},
    },
    {
      name: "--parser-options",
      description: "Specify parser options",
      args: {},
    },
    {
      name: "--resolve-plugins-relative-to",
      description: "A folder where plugins should be resolved from",
      args: {
        template: ["folders"],
        default: "CWD",
      },
    },
    {
      name: "--rulesdir",
      description: "Use additional rules from this directory",
      args: {
        template: ["folders"],
      },
    },
    {
      name: "--plugin",
      description: "Specify plugins",
      args: {
        name: "Plugin",
        generators: {
          script: [
            "bash",
            "-c",
            "{ ls node_modules ; ls $(npm root -g) ; ls $(yarn global dir)/node_modules/ ; } | cat",
          ],
          postProcess: (out) =>
            out
              .split("\n")
              .filter((dir) => dir.startsWith("eslint-plugin"))
              .map((dir) => ({ name: dir.split(" ")[0].slice(14) })),
        },
      },
    },
    {
      name: "--rule",
      description: "Specify rules",
      args: {},
    },
    {
      name: "--fix",
      description: "Automatically fix problems",
    },
    {
      name: "--fix-dry-run",
      description:
        "Automatically fix problems without saving the changes to the file system",
    },
    {
      name: "--fix-type",
      description: "Specify the types of fixes to apply",
      dependsOn: ["--fix", "--fix-dry-run"],
      args: {
        suggestions: ["problem", "suggestion", "layout"],
      },
    },
    {
      name: "--ignore-path",
      description: "Specify path of ignore file",
      args: {
        template: ["filepaths"],
      },
    },
    {
      name: "--no-ignore",
      description: "Disable use of ignore files and patterns",
    },
    {
      name: "--ignore-pattern",
      description:
        "Pattern of files to ignore (in addition to those in .eslintignore)",
      args: {},
    },
    {
      name: "--stdin",
      description: "Lint code provided on <STDIN>",
    },
    {
      name: "--stdin-filename",
      description: "Specify filename to process STDIN as",
      args: {
        template: ["filepaths"],
      },
    },
    {
      name: "--quiet",
      description: "Report errors only",
    },
    {
      name: "--max-warnings",
      description: "Number of warnings to trigger nonzero exit code",
      args: {
        default: "-1",
      },
    },
    {
      name: ["-o", "--output-file"],
      description: "Specify file to write report to",
      args: {
        template: ["filepaths"],
      },
    },
    {
      name: ["-f", "--format"],
      description: "Use a specific output format",
      args: {
        default: "stylish",
        suggestions: [
          "checkstyle",
          "codeframe",
          "compact",
          "html",
          "jslint-xml",
          "json",
          "junit",
          "stylish",
          "table",
          "tap",
          "unix",
          "visualstudio",
        ],
      },
    },
    {
      name: "--color",
      description: "Force enabling of color",
      exclusiveOn: ["--no-color"],
    },
    {
      name: "--no-color",
      description: "Force disabling of color",
      exclusiveOn: ["--color"],
    },
    {
      name: "--no-inline-config",
      description: "Prevent comments from changing config or rules",
    },
    {
      name: "--report-unused-disable-directives",
      description: "Adds reported errors for unused eslint-disable-directives",
    },
    {
      name: "--cache",
      description: "Only check changed files",
    },
    {
      name: "--cache-location",
      description: "Path to the cache file or directory",
      args: {
        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--cache-strategy",
      description: "Strategy to use for detecting changed files",
      args: {
        suggestions: ["metadata", "content"],
        default: "metadata",
      },
    },
    {
      name: "--init",
      description: "Run config initialization wizard",
    },
    {
      name: "--env-info",
      description: "Output execution environment information",
    },
    {
      name: "--no-error-on-unmatched-pattern",
      description: "Prevent errors when pattern is unmatched",
    },
    {
      name: "--debug",
      description: "Output debugging information",
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
    {
      name: ["-v", "--version"],
      description: "Output the version number",
    },
    {
      name: "--print-config",
      description: "Print the configuration for the give file",
      args: {
        template: ["filepaths"],
      },
    },
  ],
  args: {
    name: "file|dir|glob",
    description: "File(s) to lint",
    template: ["filepaths", "folders"],
    isVariadic: true,
  },
};

export default completionSpec;
