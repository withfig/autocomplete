const completionSpec: Fig.Spec = {
  name: "ldd",
  description: "Print shared library dependencies",
  options: [
    {
      name: "--help",
      description: "Show help for ldd",
    },
    {
      name: "--version",
      description: "Print version information and exit",
    },
    {
      name: ["-d", "--data-relocs"],
      description: "Process data relocations",
    },
    {
      name: ["-r", "--function-relocs"],
      description: "Process data and function relocations",
    },
    {
      name: ["-u", "--unused"],
      description: "Print unused direct dependencies",
    },
    {
      name: ["-v", "--verbose"],
      description: "Print all information",
    },
  ],
  args: {
    name: "exe",
    template: "filepaths",
    isVariadic: true,
  },
};
export default completionSpec;
