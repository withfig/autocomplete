const encodingGenerator: Fig.Generator = {
  script: ["bash", "-c", "iconv -l | command tr ' ' '\\n' | sort"],
  postProcess: (out) =>
    out.split("\n").map((encoding) => ({
      name: encoding,
      description: encoding,
      type: "arg",
    })),
};

const completionSpec: Fig.Spec = {
  name: "iconv",
  description: "Character set conversion",
  options: [
    {
      name: "--help",
      description: "Show help for iconv",
    },
    {
      name: "--version",
      description: "Output version information and exit",
    },
    {
      name: ["-f", "--from-code"],
      description: "Specifies the encoding of the input",
      exclusiveOn: ["-l", "--list"],
      args: {
        name: "encoding",
        generators: encodingGenerator,
      },
    },
    {
      name: ["-t", "--to-code"],
      description: "Specifies the encoding of the output",
      exclusiveOn: ["-l", "--list"],
      args: {
        name: "encoding",
        generators: encodingGenerator,
      },
    },
    {
      name: "-c",
      description: "Discard unconvertible characters",
      exclusiveOn: ["-l", "--list"],
    },
    {
      name: ["-l", "--list"],
      description: "List the supported encodings",
      exclusiveOn: [
        "-f",
        "--from-code",
        "-t",
        "--to-code",
        "--unicode-subst",
        "--byte-subst",
        "--widechar-subst",
      ],
    },
    {
      name: "--unicode-subst",
      description: "Substitution for unconvertible Unicode characters",
      exclusiveOn: ["-l", "--list"],
      requiresSeparator: true,
      args: {
        name: "FORMATSTRING",
        description:
          "The formatstring must be a format string in the same format as for the printf command",
      },
    },
    {
      name: "--byte-subst",
      description: "Substitution for unconvertible bytes",
      exclusiveOn: ["-l", "--list"],
      requiresSeparator: true,
      args: {
        name: "FORMATSTRING",
        description:
          "The formatstring must be a format string in the same format as for the printf command",
      },
    },
    {
      name: "--widechar-subst",
      description: "Substitution for unconvertible wide characters",
      exclusiveOn: ["-l", "--list"],
      requiresSeparator: true,
      args: {
        name: "FORMATSTRING",
        description:
          "The formatstring must be a format string in the same format as for the printf command",
      },
    },
  ],
  args: {
    name: "inputfile",
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
