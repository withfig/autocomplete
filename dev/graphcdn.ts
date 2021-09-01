const helpOption: Fig.Option = {
  name: ["--help", "-h"],
};

const completionSpec: Fig.Spec = {
  name: "graphcdn",
  description: "Change the shell working directory",
  subcommands: [
    {
      name: "login",
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
      options: [
        {
          name: "--env",
          args: {
            name: "env",
          },
        },
        helpOption,
      ],
      subcommands: [{ name: "schema" }],
    },
  ],
  options: [helpOption],
};

export default completionSpec;
