const completionSpec: Fig.Spec = {
  name: "w",
  description: "Display who is logged in and what they are doing",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: "-h",
      description: "Suppress the heading",
    },
    {
      name: "-i",
      description: "Output is sorted by idle time",
    },
  ],
  args: {
    name: "user",
    isVariadic: true,
    isOptional: true,
  },
};
export default completionSpec;
