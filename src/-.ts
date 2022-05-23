const completionSpec: Fig.Spec = {
  name: "-",
  description:
    "ZSH pre-command modifier that prepends a '-' to the argv[0] string",
  hidden: true,
  args: {
    isCommand: true,
  },
};

export default completionSpec;
