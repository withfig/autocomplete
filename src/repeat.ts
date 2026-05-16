const completionSpec: Fig.Spec = {
  name: "repeat",
  description:
    "Interpret the result as a number and repeat the commands this many times",
  args: {
    isCommand: true,
  },
};

export default completionSpec;
