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
  name: "up",
  description:
    "Builds, (re)creates, starts, and attaches to containers for a service.",
  args: [getServices],
  options: [
    {
      name: ["-d", "--detach"],
      description:
        "Detached mode: Run containers in the background, print new container names. Incompatible with",
      args: {},
    },
    {
      name: ["--no-color"],
      description: "Produce monochrome output.",
      args: {},
    },
    {
      name: ["--quiet-pull"],
      description: "Pull without printing progress information",
      args: {},
    },
    {
      name: ["--no-deps"],
      description: "Don't start linked services.",
      args: {},
    },
    {
      name: ["--force-recreate"],
      description:
        "Recreate containers even if their configuration and image haven't changed.",
      args: {},
    },
    {
      name: ["--always-recreate-deps"],
      description:
        "Recreate dependent containers. Incompatible with --no-recreate.",
      args: {},
    },
    {
      name: ["--no-recreate"],
      description:
        "If containers already exist, don't recreate them. Incompatible with --force-recreate and -V.",
      args: {},
    },
    {
      name: ["--no-build"],
      description: "Don't build an image, even if it's missing.",
      args: {},
    },
    {
      name: ["--no-start"],
      description: "Don't start the services after creating them.",
      args: {},
    },
    {
      name: ["--build"],
      description: "Build images before starting containers.",
      args: {},
    },
    {
      name: ["--abort-on-container-exit"],
      description:
        "Stops all containers if any container was stopped. Incompatible with -d.",
      args: {},
    },
    {
      name: ["--attach-dependencies"],
      description: "Attach to dependent containers.",
      args: {},
    },
    {
      name: ["-t", "--timeout"],
      description:
        "Use this timeout in seconds for container shutdown when attached or when containers are already running. (default: 10)",
      args: {},
    },
    {
      name: ["-V", "--renew-anon-volumes"],
      description:
        "Recreate anonymous volumes instead of retrieving data from the previous containers.",
      args: {},
    },
    {
      name: ["--remove-orphans"],
      description:
        "Remove containers for services not defined in the Compose file.",
      args: {},
    },
    {
      name: ["--exit-code-from"],
      description:
        "Return the exit code of the selected service container. Implies --abort-on-container-exit.",
      args: {},
    },
    {
      name: ["--scale"],
      description:
        "Scale SERVICE to NUM instances. Overrides the `scale` setting in the Compose file if present.",
      args: {},
    },
  ],
};
