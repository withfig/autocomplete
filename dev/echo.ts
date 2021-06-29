export const completion: Fig.Spec = {
  name: "echo",
  description: "Write arguments to the standard output",
  args: {
    name: "operands",
    description:
      "Write any specified operands, separated by single blank characters and followed by a newline character, to the standard output",
    variadic: true,
  },
  options: [
    {
      name: "-n",
      description: "Do not print the trailing newline character",
    },
  ],
};
