const completionSpec: Fig.Spec = {
  name: "tail",
  description: "display the last part of a file",
  args: {
    isVariadic: true,
    template: "filepaths",
  },
  options: [
    {
      name: "-f",
      description: "wait for additional data to be appended",
    },
    {
      name: "-r",
      description: "display in reverse order",
    },
  ],
};

export default completionSpec;
