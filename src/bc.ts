const completionSpec: Fig.Spec = {
  name: "bc",
  description: "An arbitrary precision calculator language",
  args: {
    name: "file",
    isOptional: true,
    isVariadic: true,
    template: ["filepaths"],
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Print the usage and exit",
      isDangerous: false,
    },
    {
      name: ["--interactive", "-i"],
      description: "Force interactive mode",
      isDangerous: false,
    },
    {
      name: ["--mathlib", "-l"],
      description: "Define the standard math library",
      isDangerous: false,
    },
    {
      name: ["--warn", "-w"],
      description: "Give warnings for extensions to POSIX bc",
      isDangerous: false,
    },
    {
      name: ["--standard", "-s"],
      description: "Process exactly the POSIX bc language",
      isDangerous: false,
    },
    {
      name: ["--quiet", "-q"],
      description: "Do not print the normal GNU bc welcome",
      isDangerous: false,
    },
    {
      name: ["--version", "-v"],
      description: "Print the version number and copyright and quit",
      isDangerous: false,
    },
  ],
};
export default completionSpec;
