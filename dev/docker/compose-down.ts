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
  name: "down",
  description:
    "Stops containers and removes containers, networks, volumes, and images",
  options: [
    {
      name: ["--rmi"],
      description:
        "Remove images. Type must be one of: 'all': Remove all images used by any service. 'local': Remove only images that don't have a custom tag set by the `image` field.",
      args: {},
    },
    {
      name: ["-v", "--volumes"],
      description:
        "Remove named volumes declared in the `volumes` section of the Compose file and anonymous volumes attached to containers.",
      args: {},
    },
    {
      name: ["--remove-orphans"],
      description:
        "Remove containers for services not defined in the Compose file",
      args: {},
    },
    {
      name: ["-t", "--timeout"],
      description: "Specify a shutdown timeout in seconds. (default: 10)",
      args: {},
    },
  ],
};
