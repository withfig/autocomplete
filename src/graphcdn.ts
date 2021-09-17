const helpOption: Fig.Option = {
  name: ["--help", "-h"],
};

const completionSpec: Fig.Spec = {
  name: "graphcdn",
  description: "GraphCDN CLI",
  subcommands: [
    {
      name: "login",
      description: "Authenticate the CLI",
      options: [
        {
          name: "--token",
          args: {
            name: "token",
          },
        },
        helpOption,
      ],
    },
    {
      name: "init",
      description: "Create a new GraphCDN service",
      options: [
        {
          name: ["-y", "--yes"],
          description: "Skip all the questions and just init",
        },
        helpOption,
      ],
    },
    {
      name: "pull",
      description: "Pull the latest service configuration",
      options: [
        {
          name: "--service",
          description:
            "Name of the service to pull from (only required without graphcdn.yml)",
          args: {
            name: "service",
            description: "Name of the environment to pull from",
          },
        },
        {
          name: "--env",
          args: {
            name: "env",
          },
        },
        helpOption,
      ],
    },
    {
      name: "push",
      description: "Push and deploy the latest app configuration",
      options: [
        {
          name: "--env",
          args: {
            name: "env",
          },
        },
        helpOption,
      ],
      args: {
        name: "field",
        isOptional: true,
        suggestions: ["schema", "rules"],
      },
    },
  ],
  options: [helpOption],
};

export default completionSpec;
