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
  name: "rm",
  description: "Removes stopped service containers",
  args: { generators: getServices },
  options: [
    {
      name: ["-f", "--force"],
      description: "Don't ask to confirm removal",
    },
    {
      name: ["-s", "--stop"],
      description: "Stop the containers, if required, before removing",
    },
    {
      name: "-v",
      description: "Remove any anonymous volumes attached to containers",
    },
  ],
};

export default completionSpec;
