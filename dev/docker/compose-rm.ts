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
  name: "rm",
  description: "Removes stopped service containers.",
  args: [getServices],
  options: [
    {
      name: ["-f", "--force"],
      description: "Don't ask to confirm removal",
      args: {},
    },
    {
      name: ["-s", "--stop"],
      description: "Stop the containers, if required, before removing",
      args: {},
    },
    {
      name: ["-v"],
      description: "Remove any anonymous volumes attached to containers",
      args: {},
    },
  ],
};
