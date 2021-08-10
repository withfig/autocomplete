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
  name: "exec",
  description: "Execute a command in a running container",
  args: [{ generators: getServices }],
  options: [
    {
      name: ["-d", "--detach"],
      description: "Detached mode: Run command in the background.",
    },
    {
      name: ["--privileged"],
      description: "Give extended privileges to the process.",
    },
    {
      name: ["-u", "--user"],
      description: "Run the command as this user.",
      args: {
        name: "user",
      },
    },
    {
      name: ["-T"],
      description:
        "Disable pseudo-tty allocation. By default `docker-compose exec` allocates a TTY.",
    },
    {
      name: ["--index"],
      description:
        "index of the container if there are multiple instances of a service [default: 1]",
      args: {
        name: "index",
      },
    },
    {
      name: ["-e", "--env"],
      description: "not supported in API < 1.25)",
      args: {
        name: "KEY=VAL",
        isVariadic: true,
      },
    },
    {
      name: ["-w", "--workdir"],
      description: "DIR Path to workdir directory for this command.",
      args: {
        name: "DIR PATH",
      },
    },
  ],
};

export default completionSpec;
