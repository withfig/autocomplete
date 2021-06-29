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
  name: "ps",
  description: "List containers.",
  args: [{ generators: getServices }],
  options: [
    {
      name: ["-q", "--quiet"],
      description: "Only display IDs",
    },
    {
      name: ["--services"],
      description: "Display services",
    },
    {
      name: ["--filter"],
      description: "Filter services by a property",
      args: {
        name: "KEY=VAL",
      },
    },
    {
      name: ["-a", "--all"],
      description:
        "Show all stopped containers (including those created by the run command)",
    },
  ],
};
