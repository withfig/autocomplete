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
    // TODO: -t --test
    // TODO: --task
    // TODO: -s --suite
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
      name: "--version",
      description: "Print version information",
    },
  ],
};
export default completionSpec;
