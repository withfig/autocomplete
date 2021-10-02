const envNameGenerator: Fig.Generator = {
  script: "amplify env list --json",
  postProcess: function (out) {
    const envContent = JSON.parse(out);
    return envContent["envs"].map((env: string) => {
      return { name: env, description: "Environment" };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "amplify",
  description:
    "A set of tools and services to help front-end web and mobile developers build scalable full stack applications",
  subcommands: [
    {
      name: "env",
      description: "Display all commands available for new Amplify project",
      subcommands: [
        {
          name: "add",
          description: "Adds a new environment",
        },
        {
          name: "pull",
          description: "Pulls the current env from the cloud",
          options: [
            {
              name: "--restore",
              description: "Overwrite your local changes",
            },
          ],
        },
        {
          name: "checkout",
          description: "Switches to selected environment",
          args: {
            name: "env-name",
            description: "Env name",
            generators: envNameGenerator,
          },
          options: [
            {
              name: "--restore",
              description: "Overwrite your local changes",
            },
          ],
        },
        {
          name: "list",
          description: "Displays a list of all the environments",
          options: [
            {
              name: "--details",
              description: "See more details",
            },
            {
              name: "--json",
              description: "Format the output",
            },
          ],
        },
        {
          name: "get",
          description: "Displays the environment details",
          options: [
            {
              name: "--name",
              description: "Mandatory flag",
              isRequired: true,
              args: {
                name: "env-name",
                description: "Env name",
                generators: envNameGenerator,
              },
            },
          ],
        },
        {
          name: "import",
          description: "Imports an environment",
          options: [
            {
              name: "--name",
              description: "Mandatory flag",
              isRequired: true,
              args: {
                name: "env-name",
                description: "Env name",
                generators: envNameGenerator,
              },
            },
            {
              name: "--config",
              description: "Specify provider configs",
              isRequired: true,
              args: {},
            },
            {
              name: "--awsInfo",
              description: "Specify AWS configs",
              args: {},
            },
          ],
        },
        {
          name: "remove",
          description: "Removes an environment",
          args: {
            name: "env-name",
            description: "Env name",
            generators: envNameGenerator,
          },
        },
      ],
    },
  ],
};
export default completionSpec;
