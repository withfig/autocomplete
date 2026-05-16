const completionSpec: Fig.Spec = {
  name: "nhost",
  description: "Nhost's command-line",
  subcommands: [
    {
      name: "deploy",
      description:
        "Deploy local migrations and metadata changes to Nhost production",
    },
    {
      name: "dev",
      description: "Start Nhost project for local development",
    },
    {
      name: "down",
      description: "Stop and remove local Nhost backend started by `nhost dev`",
    },
    {
      name: ["env", "env:ls"],
      description: "List environment variables",
    },
    {
      name: "env:pull",
      description:
        "Sync remote environment variables to your local environment",
    },
    {
      name: "help",
      description: "Display help for nhost",
    },
    {
      name: "init",
      description: "Initialize current working directory as a Nhost project",
    },
    {
      name: "link",
      description: "Link Nhost Project",
    },
    {
      name: "login",
      description: "Login to your Nhost account",
      options: [
        {
          name: ["--email", "-e"],
          description: "Email address",
          args: {
            name: "email",
          },
        },
      ],
    },
    {
      name: "logout",
      description: "Logout from your Nhost account",
    },
  ],
};

export default completionSpec;
