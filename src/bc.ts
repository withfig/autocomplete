const completionSpec: Fig.Spec = {
  name: "bc",
  description: "An arbitrary precision calculator language",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Print the usage and exit",
    },
    {
      name: ["--interactive", "-i"],
      description: "Force interactive mode",
    },
    {
      name: ["--mathlib", "-l"],
      description: "Define the standard math library",
    },
    {
      name: ["--warn", "-w"],
      description: "Give warnings for extensions to POSIX bc",
    },
    {
      name: ["--standard", "-s"],
      description: "Process exactly the POSIX bc language",
    },
    {
      name: ["--quiet", "-q"],
      description: "Do not print the normal GNU bc welcome",
    },
    {
      name: ["--version", "-v"],
      description: "Print the version number and copyright and quit",
    },
  ],
  args: {
    name: "file",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
