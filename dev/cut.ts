const completionSpec: Fig.Spec = {
  name: "cut",
  description: "cut out selected portions of each line of a file",
  args: {
    template: "filepaths",
    isOptional: true,
    variadic: true,
  },
  options: [
    {
      name: "-b",
      description: "byte positions as a comma or - separated list of numbers",
      args: [
        {
          name: "list",
          description: "specifies byte positions",
        },
      ],
    },
    {
      name: "-c",
      description: "column positions as a comma or - separated list of numbers",
      args: [
        {
          name: "list",
          description: "specifies column positions",
        },
      ],
    },
    {
      name: "-f",
      description: "field positions as a comma or - separated list of numbers",
      args: [
        {
          name: "list",
          description: "specifies column positions",
        },
      ],
    },
    {
      name: "-n",
      description: "do not split multi-byte characters",
    },
    {
      name: "-d",
      description:
        "use delim as the field delimiter character instead of the tab character.",
      args: [
        {
          name: "delim",
          description: "field deliminator to use instead of the tab character",
          isOptional: true,
        },
      ],
    },
    {
      name: "-s",
      description:
        "suppress lines with no field delimiter characters.  unless specified, lines with no delimiters are passed through unmodified.",
    },
  ],
};

export default completionSpec;
