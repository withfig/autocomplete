const completionSpec: Fig.Spec = {
  name: "whence",
  description: "For each name, indicate how it should be interpreted",
  args: {
    name: "names",
    isVariadic: true,
  },
  options: [
    {
      name: "-s",
      description:
        "No output, return 0 if all the executables are found, 1 if not",
    },
    {
      name: "-a",
      description:
        "List all instances of executables found, instead of just the first",
    },
  ],
};

export default completionSpec;
