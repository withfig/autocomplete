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
  name: "build",
  description: "Build or rebuild services.",
  args: [getServices],
  options: [
    {
      name: ["--build-arg"],
      description: "Set build-time variables for services.",
      args: {},
    },
    {
      name: ["--compress"],
      description: "Compress the build context using gzip.",
      args: {},
    },
    {
      name: ["--force-rm"],
      description: "Always remove intermediate containers.",
      args: {},
    },
    {
      name: ["-m", "--memory"],
      description: "Set memory limit for the build container.",
      args: {},
    },
    {
      name: ["--no-cache"],
      description: "Do not use cache when building the image.",
      args: {},
    },
    {
      name: ["--no-rm"],
      description:
        "Do not remove intermediate containers after a successful build.",
      args: {},
    },
    {
      name: ["--parallel"],
      description: "Build images in parallel.",
      args: {},
    },
    {
      name: ["--progress"],
      description:
        "Set type of progress output (auto, plain, tty). EXPERIMENTAL flag for native builder. To enable, run with COMPOSE_DOCKER_CLI_BUILD=1)",
      args: {},
    },
    {
      name: ["--pull"],
      description: "Always attempt to pull a newer version of the image.",
      args: {},
    },
    {
      name: ["-q", "--quiet"],
      description: "Don't print anything to STDOUT",
      args: {},
    },
  ],
};
