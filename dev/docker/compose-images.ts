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
  name: "images",
  description: "List images used by the created containers.",
  args: [getServices],
  options: [
    {
      name: ["-q", "--quiet"],
      description: "Only display IDs",
      args: {},
    },
  ],
};
