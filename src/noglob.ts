const completionSpec: Fig.Spec = {
  name: "noglob",
  description: "ZSH pre-command modifier that disables glob expansion",
  hidden: true,
  args: {
    isCommand: true,
  },
};

export default completionSpec;
