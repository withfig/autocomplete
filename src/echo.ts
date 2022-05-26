const completionSpec: Fig.Spec = {
  name: "echo",
  description: "Write arguments to the standard output",
  args: {
    name: "string",
    isVariadic: true,
    optionsCanBreakVariadicArg: false,
  },
  options: [
    {
      name: "-n",
      description: "Do not print the trailing newline character",
    },
    {
      name: "-e",
      description: "Interpret escape sequences",
    },
    {
      name: "-E",
      description: "Disable escape sequences",
    },
  ],
};

export default completionSpec;
