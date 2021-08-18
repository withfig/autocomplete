const completionSpec: Fig.Spec = {
  name: "echo",
  description: "Write arguments to the standard output",
  args: {
    name: "string",
    isVariadic: true,
  },
  options: [
    {
      name: "-n",
      description: "Do not print the trailing newline character",
    },
  ],
};

export default completionSpec;
