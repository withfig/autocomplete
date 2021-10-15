const completionSpec: Fig.Spec = {
  name: "lima",
  description: 'Lima is an alias for "limactl shell $LIMA_INSTANCE"',
  args: {
    name: "COMMAND",
    isVariadic: true,
    isOptional: true,
    isCommand: true,
  },

  options: [
    {
      name: ["-h", "--help"],
      description: "Help for lima",
    },
  ],
};

export default completionSpec;
