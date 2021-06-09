const getServices: Fig.Generator = {
  script: (context) => {
    if (context.includes("-f")) {
      const index = context.indexOf("-f");
      return `docker-compose -f ${context[index + 1]} config --services`;
    }
    return "docker-compose config --services";
  },
  splitOn: "\n",
};

export const completionSpec: Fig.Spec = {
  name: "logs",
  description: "View output from containers.",
  args: [getServices],
  options: [
    {
      name: ["--no-color"],
      description: "Produce monochrome output.",
      args: {},
    },
    {
      name: ["-f", "--follow"],
      description: "Follow log output.",
      args: {},
    },
    {
      name: ["-t", "--timestamps"],
      description: "Show timestamps.",
      args: {},
    },
    {
      name: ["--tail"],
      description:
        "Number of lines to show from the end of the logs for each container.",
      args: {},
    },
  ],
};
