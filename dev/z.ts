// https://github.com/rupa/z
const completionSpec: Fig.Spec = {
  name: "z",
  description: "CLI tool to jump around directories",
  args: {
    name: "regex",
    isVariadic: true,
    isOptional: true,
  },
  options: [
    {
      name: "-c",
      description:
        "Restrict matches to subdirectories of the current directory",
    },
    { name: "-e", description: "Echo the best match, don't cd" },
    { name: "-h", description: "Show a brief help message" },
    { name: "-l", description: "List only" },
    { name: "-r", description: "Match by rank only" },
    { name: "-t", description: "Match by recent access only" },
    {
      name: "-x",
      description: "Remove the current directory from the datafile",
    },
  ],
};

export default completionSpec;
