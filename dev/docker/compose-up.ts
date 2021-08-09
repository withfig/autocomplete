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
  name: "up",
  description:
    "Builds, (re)creates, starts, and attaches to containers for a service.",
  args: [{ generators: getServices }],
  options: [
    {
      name: ["-d", "--detach"],
      description:
        "Detached mode: Run containers in the background, print new container names. Incompatible with",
    },
    {
      name: "--no-color",
      description: "Produce monochrome output.",
    },
    {
      name: "--quiet-pull",
      description: "Pull without printing progress information",
    },
    {
      name: "--no-deps",
      description: "Don't start linked services.",
    },
    {
      name: "--force-recreate",
      description:
        "Recreate containers even if their configuration and image haven't changed.",
    },
    {
      name: "--always-recreate-deps",
      description:
        "Recreate dependent containers. Incompatible with --no-recreate.",
    },
    {
      name: "--no-recreate",
      description:
        "If containers already exist, don't recreate them. Incompatible with --force-recreate and -V.",
    },
    {
      name: "--no-build",
      description: "Don't build an image, even if it's missing.",
    },
    {
      name: "--no-start",
      description: "Don't start the services after creating them.",
    },
    {
      name: "--build",
      description: "Build images before starting containers.",
    },
    {
      name: "--abort-on-container-exit",
      description:
        "Stops all containers if any container was stopped. Incompatible with -d.",
    },
    {
      name: "--attach-dependencies",
      description: "Attach to dependent containers.",
    },
    {
      name: ["-t", "--timeout"],
      description:
        "Use this timeout in seconds for container shutdown when attached or when containers are already running. (default: 10)",
      args: {
        name: "timeout",
      },
    },
    {
      name: ["-V", "--renew-anon-volumes"],
      description:
        "Recreate anonymous volumes instead of retrieving data from the previous containers.",
    },
    {
      name: "--remove-orphans",
      description:
        "Remove containers for services not defined in the Compose file.",
    },
    {
      name: "--exit-code-from",
      description:
        "Return the exit code of the selected service container. Implies --abort-on-container-exit.",
      args: {
        name: "service",
      },
    },
    {
      name: "--scale",
      description:
        "Scale SERVICE to NUM instances. Overrides the `scale` setting in the Compose file if present.",
      args: {
        name: "SERVICE=NUM",
      },
    },
    {
      name: "--no-log-prefix",
      description: "Don't print prefix in logs.",
    },
  ],
};

export default completionSpec;
