const completionSpec: Fig.Spec = {
  name: "kill",
  description: "Terminate or signal a process",
  args: {
    name: "pid",
    isVariadic: true,
    generators: {
      script: "ps aux | sed 1d",
      postProcess: (result: string) => {
        return result.split("\n").map((line) => {
          const [, pid] = line.split(/\s+/);
          return {
            name: pid,
          };
        });
      },
    },
  },
  options: [
    {
      name: "-s",
      description: "A symbolic signal name specifying the signal to be sent",
      args: {
        name: "signal_name",
        generators: {
          script: "kill -l",
          splitOn: " ",
        },
      },
    },
    {
      name: "-l",
      description:
        "If no operand is given, list the signal names; otherwise, write the signal name corresponding to exit_status",
      args: {
        name: "exit_status",
        isOptional: true,
      },
    },
  ],
};

export default completionSpec;
