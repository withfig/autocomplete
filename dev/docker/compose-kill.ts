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
  name: "kill",
  description: "Force stop service containers.",
  args: [getServices],
  options: [
    {
      name: ["-s"],
      description:
        "SIGNAL to send to the container. Default signal is SIGKILL.",
    },
  ],
};
