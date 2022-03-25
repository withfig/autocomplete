import { filepaths } from "@fig/autocomplete-generators";

const tagsGenerator: Fig.Generator = {
  custom: async (tokens, executeShellCommand) => {
    const out = await executeShellCommand(
      'for i in $(find -E . -regex ".*.robot" -type f); do cat -s $i ; done'
    );
    const iter = out.matchAll(/(?:^\s\s+\[Tags\])\s\s+(\w+ *)*(?!.\#.*)/gm);

    const seen: Set<string> = new Set();
    const suggestions: Fig.Suggestion[] = [];

    for (const [line] of iter) {
      // original line: "   [Tags]  first tag  dev tag    some tag   "
      // desired line: ["first tag", "dev tag", "some tag"]
      for (const tag of line.trim().substring(6).trim().split(/\s\s+/)) {
        if (seen.has(tag)) continue;
        seen.add(tag);
        suggestions.push({
          name: tag,
          description: "Tag",
          icon: "🏷",
        });
      }
    }
    return suggestions;
  },
};

const variablesGenerator: Fig.Generator = {
  trigger: ":",
  custom: async (tokens, executeShellCommand) => {
    const finalToken = tokens[tokens.length - 1];
    const isKey = !finalToken.includes(":");
    if (!isKey) return [];
    const out = await executeShellCommand(
      'for i in $(find -E . -regex ".*.(robot|resource)" -type f); do cat -s $i ; done'
    );
    const iter = out.matchAll(/^\$\{(.*?)\}/gm);
    return [...iter]
      .map((item) => item[1])
      .map((variable) => ({
        name: variable,
        description: "Variable",
      }));
  },
};

const completionSpec: Fig.Spec = {
  name: "robot",
  description: "Run the node interpreter",
  args: {
    name: "robot script",
    isScript: true,
    isOptional: false,
    generators: filepaths({
      extensions: ["robot"],
      editFileSuggestions: { priority: 76, icon: "fig://icon?type=txt" },
    }),
  },
  options: [
    {
      name: ["-h", "-?", "--help"],
      description: "Print usage instructions",
    },
    {
      name: "--rpa",
      description:
        'Turn on the generic automation mode. Mainly affects terminology so that "test" is replaced with "task" in logs and reports',
    },
    {
      name: ["-F", "--extension"],
      description:
        "Parse only files with this extension when executing a directory",
      args: {
        name: "extension",
        description: "File extensions divided by colon",
        suggestions: ["txt", "robot:txt"],
      },
    },
    {
      name: ["-N", "--name"],
      description: "Set a name of the top level suite",
      args: {
        name: "name",
      },
    },
    {
      name: ["-D", "--doc=..."],
      insertValue: "-D '{cursor}'",
      description: "Set a documentation of the top level suite",
    },
    {
      name: ["-M", "--metadata"],
      insertValue: "-M {cursor}:",
      description: "Set metadata of the top level suite",
      args: {
        name: "name:value",
      },
    },
    {
      name: ["-G", "--settag"],
      description: "Sets given tag to all executed tests",
      args: {
        name: "tag",
      },
    },
    {
      name: ["-t", "--test"],
      description:
        "Select tests by name or by long name containing also parent suite name like `Parent.Test`",
      args: {
        name: "name",
      },
    },
    {
      name: "--task",
      description: "Alias to --test. Especially applicable with --rpa",
      args: {
        name: "name",
      },
    },
    {
      name: ["-s", "--suite"],
      description: "Select suites by name",
      args: {
        name: "name",
      },
    },
    {
      name: ["-i", "--include"],
      description: "Select test cases by tag",
      args: {
        name: "tag",
        generators: tagsGenerator,
      },
    },
    {
      name: ["-e", "--exclude"],
      description: "Select test cases not to run by tag",
      args: {
        name: "tag",
        generators: tagsGenerator,
      },
    },
    {
      name: ["-R", "--rerunfailed"],
      description:
        "Select failed tests from an earlier output file to be re-executed",
      args: {
        name: "output file",
        generators: filepaths({
          extensions: ["xml"],
        }),
      },
    },
    {
      name: ["-S", "--rerunfailedsuites"],
      description:
        "Select failed suites from an earlier output file to be re-executed",
      args: {
        name: "output file",
        generators: filepaths({
          extensions: ["xml"],
        }),
      },
    },
    {
      name: "--runemptysuite",
      description: "Executes suite even if it contains no tests",
    },
    {
      name: "--skip",
      description: "Tests having given tag will be skipped",
      args: {
        name: "tag",
        generators: tagsGenerator,
      },
    },
    {
      name: "--skiponfailure",
      description: "Tests having given tag will be skipped if they fail",
      args: {
        name: "tag",
        generators: tagsGenerator,
      },
    },
    {
      name: ["-v", "--variable"],
      description: "Set variables in the test data",
      args: {
        name: "variable",
        generators: variablesGenerator,
      },
    },
    {
      name: ["-V", "--variablefile"],
      description: "Python or YAML file file to read variables from",
      args: {
        name: "file",
        generators: filepaths({
          extensions: ["py", "yaml"],
        }),
      },
    },

    {
      name: ["-d", "--outputdir"],
      description:
        "Where to create output files. The default is the directory where tests are run from",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["-o", "--output"],
      description:
        "XML output file relative to --outputdir unless given as an absolute path. Default: output.xml",
      args: {
        name: "file",
        suggestions: ["output.xml"],
      },
    },
    {
      name: ["-l", "--log"],
      description:
        "HTML log file. Can be disabled by giving a special value `NONE`. Default: log.html",
      args: {
        name: "file",
        suggestions: ["log.html", "NONE"],
      },
    },
    {
      name: ["-r", "--report"],
      description:
        "HTML report file. Can be disabled with `NONE` similarly as --log. Default: report.html",
      args: {
        name: "file",
        suggestions: ["report.html", "NONE"],
      },
    },
    {
      name: ["-x", "--xunit"],
      description:
        "XUnit compatible result file. Not created unless this option is specified",
      args: {
        name: "file",
        suggestions: ["xunit.xml"],
      },
    },
    {
      name: ["-b", "--debugfile"],
      description:
        "Debug file written during execution. Not created unless this option is specified",
      args: {
        name: "file",
      },
    },
    {
      name: ["-T", "--timestampoutputs"],
      description:
        "Adds timestamp in a format `YYYYMMDD-hhmmss` to all generated output files between their basename and extension",
    },
    {
      name: "--splitlog",
      description:
        "Split the log file into smaller pieces that open in browsers transparently",
    },
    {
      name: "--logtitle",
      description:
        "Title for the generated log file. The default title is `<SuiteName> Log`",
      args: {
        name: "title",
      },
    },
    {
      name: "--reporttitle",
      description:
        "Title for the generated report file. The default title is `<SuiteName> Report`",
      args: {
        name: "title",
      },
    },
    {
      name: "--reportbackground",
      description:
        "Background colors to use in the report file. Given in format `passed:failed:skipped` where the `:skipped` part can be omitted",
      args: {
        name: "colors",
      },
    },
    {
      name: "--maxerrorlines",
      description:
        "Maximum number of error message lines to show in report when tests fail. Default is 40, minimum is 10 and `NONE` can be used to show the full message",
      args: {
        name: "lines",
        suggestions: [
          {
            name: "40",
            displayName: "40 (default)",
            description: "Default number of lines",
          },
          {
            name: "10",
            displayName: "10 (minimum)",
            description: "Minimum number of lines",
          },
          {
            name: "NONE",
            description: "Unlimited number of lines. Shows the full message",
          },
        ],
      },
    },
    {
      name: "--maxassignlength",
      description:
        "Maximum number of characters to show in log when variables are assigned. Zero or negative values can be used to avoid showing assigned values at all. Default is 200",
      args: {
        name: "characters",
        suggestions: [
          {
            name: "200",
            displayName: "200 (default)",
            description: "Default number of characters",
          },
          {
            name: "0",
            description: "No values at all",
          },
        ],
      },
    },
    {
      name: ["-L", "--loglevel"],
      description: "Threshold level for logging",
      args: {
        name: "level",
        suggestions: [
          "TRACE",
          "DEBUG",
          {
            name: "INFO",
            displayName: "INFO (default)",
            priority: 76,
          },
          "WARN",
          {
            name: "NONE",
            displayName: "NONE (no logging)",
          },
        ],
      },
    },

    {
      name: "--version",
      description: "Print version information",
    },
  ],
};
export default completionSpec;
