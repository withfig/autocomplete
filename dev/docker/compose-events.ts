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
  name: "events",
  description: "Receive real time events from containers.",
  args: [getServices],
  options: [
    {
      name: ["--json"],
      description: "Output events as a stream of json objects",
      args: {},
    },
  ],
};
