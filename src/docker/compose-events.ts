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
  name: "events",
  description: "Receive real time events from containers",
  args: { generators: getServices },
  options: [
    {
      name: "--json",
      description: "Output events as a stream of json objects",
    },
  ],
};

export default completionSpec;
