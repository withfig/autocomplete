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
  name: "pull",
  description:
    "Pulls images for services defined in a Compose file, but does not start the containers.",
  options: [
    {
      name: ["--ignore-pull-failures"],
      description: "Pull what it can and ignores images with pull failures.",
      args: {},
    },
    {
      name: ["--parallel"],
      description:
        "Deprecated, pull multiple images in parallel (enabled by default).",
      args: {},
    },
    {
      name: ["--no-parallel"],
      description: "Disable parallel pulling.",
      args: {},
    },
    {
      name: ["-q", "--quiet"],
      description: "Pull without printing progress information",
      args: {},
    },
    {
      name: ["--include-deps"],
      description: "Also pull services declared as dependencies",
      args: {},
    },
  ],
};
