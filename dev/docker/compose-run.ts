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
  name: "run",
      description: "Run a one-off command on a service.",
      args: [getServices],
      options: [
        {
          name: ["-d", "--detach"],
          description:
            "Detached mode: Run container in the background, print new container name.",
          args: {},
        },
        {
          name: ["--name"],
          description: "Assign a name to the container",
          args: {},
        },
        {
          name: ["--entrypoint"],
          description: "Override the entrypoint of the image.",
          args: {},
        },
        {
          name: ["-e"],
          description:
            "Set an environment variable (can be used multiple times)",
          args: {},
        },
        {
          name: ["-l", "--label"],
          description: "Add or override a label (can be used multiple times)",
          args: {},
        },
        {
          name: ["-u", "--user"],
          description: "Run as specified username or uid",
          args: {},
        },
        {
          name: ["--no-deps"],
          description: "Don't start linked services.",
          args: {},
        },
        {
          name: ["--rm"],
          description: "Remove container after run. Ignored in detached mode.",
          args: {},
        },
        {
          name: ["-p", "--publish"],
          description: "Publish a container's port(s) to the host",
          args: {},
        },
        {
          name: ["--service-ports"],
          description:
            "Run command with the service's ports enabled and mapped to the host.",
          args: {},
        },
        {
          name: ["--use-aliases"],
          description:
            "Use the service's network aliases in the network(s) the container connects to.",
          args: {},
        },
        {
          name: ["-v", "--volume"],
          description: "Bind mount a volume (default [])",
          args: {},
        },
        {
          name: ["-T"],
          description:
            "Disable pseudo-tty allocation. By default `docker-compose run` allocates a TTY.",
          args: {},
        },
        {
          name: ["-w", "--workdir"],
          description: "Working directory inside the container",
          args: {},
        },
      ],
};