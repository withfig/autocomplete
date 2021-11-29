const supportedElmVersions: Fig.Generator = {
  script: "echo",
  postProcess: () => {
    return [
      {
        name: "0.19",
      },
      {
        name: "0.18",
      },
    ];
  },
};

/**
 * Based on the [elm-format](https://github.com/avh4/elm-format), version 0.8.5, cli tool for formatting Elm code.
 */
const completionSpec: Fig.Spec = {
  name: "elm-format",
  description: "Format your code in the Elm idiomatic way",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for elm-format",
    },
    {
      name: "--output",
      description:
        "Write output to FILE instead of overwriting the given source file",
      args: {
        name: "FILE",
        description: "Name and location of output file",
        template: "filepaths",
      },
    },
    {
      name: "--yes",
      description: "Reply 'yes' to all automated prompts",
    },
    {
      name: "--validate",
      description: "Check if files are formatted without changing them",
    },
    {
      name: "--stdin",
      description: "Read from stdin, output to stdout",
    },
    {
      name: "--elm-version",
      description: "The Elm version of the source files being formatted",
      args: {
        name: "FILE",
        description: "Name and location of output file",
        generators: supportedElmVersions,
      },
    },
  ],
  args: {
    name: "INPUT",
    template: "filepaths",
  },
};
export default completionSpec;
