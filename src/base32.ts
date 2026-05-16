const completionSpec: Fig.Spec = {
  name: "base32",
  description: "Base32 encode/decode data and print to standard output",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Display this help and exit",
    },
    {
      name: ["--decode", "-d"],
      description: "Decode data",
    },
    {
      name: ["--ignore-garbage", "-i"],
      description: "When decoding, ignore non-alphabet characters",
    },
    {
      name: ["--wrap", "-w"],
      description:
        "Wrap encoded lines after COLS character (default 76).  Use 0 to disable line wrapping",
      args: {
        name: "COLS",
        suggestions: ["76", "78", "80", "100", "120", "160", "0"],
        default: "76",
      },
    },
    {
      name: "--version",
      description: "Output version information and exit",
    },
  ],
  args: {
    name: "FILE",
    description: "File to base32 encode/decode",
    template: "filepaths",
  },
};
export default completionSpec;
