const completionSpec: Fig.Spec = {
  name: "w",
  description: "Display who is logged in and what they are doing",
  options: [
    {
      name: "-h",
      description: "Suppress the heading",
      isDangerous: false,
    },
    {
      name: "-i",
      description: "Output is sorted by idle time",
      isDangerous: false,
    },
  ],
  args: {
    name: "user",
    isVariadic: true,
    isOptional: true,
  },
};
export default completionSpec;
