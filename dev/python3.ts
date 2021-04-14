export const completionSpec: Fig.Spec = {
  name: "python3",
  description: "Run the python interpretor",
  args: {
    isScript: true,
    generators: {
      script: "\\ls -1 | grep .py",
      splitOn: "\n",
    },
  },
  options: [
    {
      name: ["-c"],
      insertValue: "-c '{cursor}'",
      description: "program passed in as string (terminates option list)",
      args: {
        name: "command",
        isCommand: true,
      },
    },
  ],
};
