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

const completionSpec: Fig.Spec = {
  name: "logs",
  description: "View output from containers.",
  args: [{ generators: getServices }],
  options: [
    {
      name: "--no-color",
      description: "Produce monochrome output.",
    },
    {
      name: ["-f", "--follow"],
    },
    {
      name: ["-t", "--timestamps"],
      description: "Show timestamps.",
    },
    {
      name: "--tail",
      description:
        "Number of lines to show from the end of the logs for each container.",
      args: {
        name: "Num of Lines",
        suggestions: ["all"],
      },
    },
    {
      name: "--no-log-prefix",
      description: "Don't print prefix in logs.",
    },
  ],
};

export default completionSpec;
