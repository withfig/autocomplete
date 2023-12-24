const completion: Fig.Spec = {
  name: "command-change",
  description: "Commands for CLI modules metadata management",
  subcommands: [
    {
      name: "meta-diff",
      description: "Diff command meta between provided meta files",
      options: [
        {
          name: "--base-meta-file",
          description: "Command meta json file",
          args: { name: "base-meta-file" },
          isRequired: true,
        },
        {
          name: "--diff-meta-file",
          description: "Command meta json file to diff",
          args: { name: "diff-meta-file" },
          isRequired: true,
        },
        {
          name: "--only-break",
          description: "Whether include non breaking changes",
        },
        {
          name: "--output-file",
          description: "Command meta diff json file path to store",
          args: { name: "output-file" },
        },
        {
          name: "--output-type",
          description: "Format to print diff and suggest message",
          args: { name: "output-type", suggestions: ["dict", "text", "tree"] },
        },
      ],
    },
    {
      name: "version-diff",
      description: "Diff command meta data between different cli versions",
      options: [
        {
          name: "--base-version",
          description: "Azure cli version as base",
          args: { name: "base-version" },
          isRequired: true,
        },
        {
          name: "--diff-version",
          description: "Azure cli version to diff",
          args: { name: "diff-version" },
          isRequired: true,
        },
        {
          name: "--only-break",
          description: "Whether include non breaking changes",
        },
        {
          name: "--output-type",
          description: "Command meta diff format to store",
          args: { name: "output-type" },
        },
        {
          name: "--target-module",
          description: "Module chosen to diff between different cli versions",
          args: { name: "target-module" },
        },
        {
          name: "--use-cache",
          description: "Whether use cached metadata files",
        },
        {
          name: "--version-diff-file",
          description: "Command meta version diff file path to store",
          args: { name: "version-diff-file" },
        },
      ],
    },
  ],
};

export default completion;
