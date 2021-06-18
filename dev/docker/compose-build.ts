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
      name: "--build-arg",
      description: "Set build-time variables for services.",
      args: {
        name: "key=val",
      },
    },
    {
      name: "--compress",
      description: "Compress the build context using gzip.",
    },
    {
      name: "--force-rm",
      description: "Always remove intermediate containers.",
    },
    {
      name: ["-m", "--memory"],
      description: "Set memory limit for the build container.",
      args: {
        name: "MEM",
      },
    },
    {
      name: "--no-cache",
      description: "Do not use cache when building the image.",
    },
    {
      name: "--no-rm",
      description:
        "Do not remove intermediate containers after a successful build.",
    },
    {
      name: "--parallel",
      description: "Build images in parallel.",
    },
    {
      name: "--progress",
      description: "Set type of progress output (auto, plain, tty).",
      args: {
        name: "string",
      },
    },
    {
      name: "--pull",
      description: "Always attempt to pull a newer version of the image.",
    },
    {
      name: ["-q", "--quiet"],
      description: "Don't print anything to STDOUT",
    },
  ],
};
