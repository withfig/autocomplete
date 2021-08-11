const completionSpec: Fig.Spec = {
  name: "echo",
  description: "Write arguments to the standard output",
  args: {
    name: "operands",
    description:
      "Write any specified operands, separated by single blank characters and followed by a newline character, to the standard output",
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
