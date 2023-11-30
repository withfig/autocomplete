const flags: Fig.Option[] = [
  {
    name: ["--verbose", "-v"],
    description: "Increases the logging verbosity",
    priority: 1,
  },
  {
    name: ["--init", "-i"],
    description: "Writes the default configuration file to cliff.toml",
  },
  {
    name: ["--latest", "-l"],
    description: "Processes the commits starting from the latest tag",
    exclusiveOn: ["--current", "-u"],
  },
  {
    name: "--current",
    description: "Processes the commits that belong to the current tag",
    exclusiveOn: ["-l", "-u"],
  },
  {
    name: ["--unreleased", "-u"],
    description: "Processes the commits that do not belong to a tag",
    exclusiveOn: ["-l", "--current"],
  },
  {
    name: "--date-order",
    description: "Sorts the tags chronologically",
  },
  {
    name: "--context",
    description: "Prints changelog context as JSON",
  },
  {
    name: ["--help", "-h"],
    description: "Prints help information",
    priority: 1,
  },
  {
    name: ["--version", "-V"],
    description: "Prints version information",
    priority: 1,
  },
];

const folderPathArg = {
  name: "path",
  template: "folders",
  suggestCurrentToken: true,
} as const;

const patternArg = {
  name: "pattern",
  isVariadic: true,
  optionsCanBreakVariadicArg: true,
} as const;

const filePathArg = {
  name: "path",
  template: "filepaths",
  suggestCurrentToken: true,
} as const;

const options: Fig.Option[] = [
  {
    name: ["--config", "-c"],
    description: "Sets the configuration file",
    args: {
      name: "path",
      template: "filepaths",
      suggestCurrentToken: true,
      default: "cliff.toml",
    },
  },
  {
    name: ["--workdir", "-w"],
    description: "Sets the working directory",
    args: folderPathArg,
  },
  {
    name: ["--repository", "-r"],
    description: "Sets the git repository",
    args: folderPathArg,
  },
  {
    name: "--include-path",
    description: "Sets the path to include related commits",
    args: patternArg,
  },
  {
    name: "--exclude-path",
    description: "Sets the path to exclude related commits",
    args: patternArg,
  },
  {
    name: "--with-commit",
    description: "Sets custom commit messages to include in the changelog",
    args: {
      name: "msg",
      isVariadic: true,
      optionsCanBreakVariadicArg: true,
    },
  },
  {
    name: ["--prepend", "-p"],
    description: "Prepends entries to the given changelog file",
    args: filePathArg,
  },
  {
    name: ["--output", "-o"],
    description: "Writes output to the given file",
    args: filePathArg,
  },
  {
    name: ["--tag", "-t"],
    description: "Sets the tag for the latest version",
    args: {
      name: "tag",
    },
  },
  {
    name: ["--body", "-b"],
    description: "Sets the template for the changelog body",
    args: {
      name: "template",
    },
  },
  {
    name: ["--strip", "-s"],
    description: "Strips the given parts from the changelog",
    args: {
      name: "part",
      suggestions: [{ name: "header" }, { name: "footer" }, { name: "all" }],
    },
  },
  {
    name: "--sort",
    description: "Sets sorting of the commits inside sections",
    args: {
      name: "sort",
      default: "oldest",
      suggestions: [{ name: "oldest" }, { name: "newest" }],
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "git-cliff",
  description: "A highly customizable changelog generator ⛰️",
  options: [...flags, ...options],
  args: {
    name: "range",
    description: "Sets the commit range to process",
    generators: {
      trigger: "..",
      getQueryTerm: ".",
      script: ["git", "rev-list", "--all", "--oneline", "--abbrev-commit"],
      postProcess: (out, tokens) => {
        if (out.startsWith("fatal:")) {
          return [];
        }

        if (out.startsWith("warning:") || out.startsWith("error:")) {
          out = out.slice(out.indexOf("\n") + 1);
        }

        const token = tokens.pop();

        return [
          ...out.split("\n").map((line) => {
            const space = line.indexOf(" ");
            const hash = line.slice(0, space);

            return {
              name: hash,
              insertValue: hash + (token?.includes("..") ? "" : ".."),
              icon: "fig://icon?type=node",
              description: line.slice(space + 1),
              priority: 1,
            };
          }),
          {
            name: "HEAD",
            insertValue: "HEAD" + (token?.includes("..") ? "" : ".."),
            icon: "fig://icon?type=node",
            description: "The current commit",
            priority: 5,
          },
        ];
      },
    },
  },
};
export default completionSpec;
