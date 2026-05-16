const completionSpec: Fig.Spec = {
  name: "for",
  description: "Perform a set of commands multiple times",
  args: [
    {
      name: "var",
    },
    {
      suggestions: ["in"],
    },
    {
      name: "values",
      isVariadic: true,
    },
  ],
};

export default completionSpec;
