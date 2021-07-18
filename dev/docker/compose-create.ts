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
  name: "create",
  description: "Creates containers for a service.",
  args: [{ generators: getServices }],
  options: [
    {
      name: ["--force-recreate"],
      description:
        "Recreate containers even if their configuration and image haven't changed. Incompatible with --no-recreate.",
    },
    {
      name: ["--no-recreate"],
      description:
        "If containers already exist, don't recreate them. Incompatible with --force-recreate.",
    },
    {
      name: ["--no-build"],
      description: "Don't build an image, even if it's missing.",
    },
    {
      name: ["--build"],
      description: "Build images before creating containers.",
    },
  ],
};

export default completionSpec;
