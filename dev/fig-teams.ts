const getTeamsGenerator: Fig.Generator = {
  script: "fig-teams teams get --raw",
  postProcess: (output) => {
    try {
      const teams = JSON.parse(output) as Array<string>;
      return teams.map((name) => ({
        name,
      }));
    } catch (e) {
      return [];
    }
  },
};

const getUsersGenerator: Fig.Generator = {
  script: (context) => {
    const teamOption = context.findIndex(
      (ctx) => ctx === "-t" || ctx === "--team"
    );
    // try getting the value of the team option
    if (teamOption !== -1 && context[teamOption + 1] !== undefined) {
      const teamName = context[teamOption + 1];
      return `fig-teams users get -t ${teamName} --raw`;
    }
    return "";
  },
  postProcess: (output) => {
    try {
      const teams = JSON.parse(output) as Array<{
        email: string;
        role: string;
      }>;
      return teams.map(({ email }) => ({
        name: email,
        icon: "fig://icon?type=invite",
      }));
    } catch (e) {
      return [];
    }
  },
};

const ROLES = ["user", "admin"];

const teamOption: Fig.Option = {
  name: ["-t", "--team"],
  description: "Team to use",
  args: {
    name: "teamname",
    generators: getTeamsGenerator,
  },
};

const rawOption: Fig.Option = {
  name: "--raw",
  description: "Output as JSON",
};

const completionSpec: Fig.Spec = {
  name: "fig-teams",
  description: "Interact with fig for teams",
  subcommands: [
    {
      name: "teams",
      subcommands: [
        {
          name: "get",
          description: "Get all available teams for the current user",
          options: [rawOption],
        },
        {
          name: "create",
          description: "Create a new team",
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "clis",
      description: "Manage internal completion specs",
      subcommands: [
        {
          name: "get",
          description: "Get all available clis for the given team",
          options: [teamOption, rawOption],
        },
        {
          name: "create",
          description: "Create a new cli for the given team",
          args: {
            name: "name",
          },
          options: [teamOption],
        },
        {
          name: "push",
          description: "Push the cli to the fig servers",
          args: {
            name: "cli path",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "users",
      description: "Manage users",
      subcommands: [
        {
          name: "get",
          description: "Get all users for a given team",
          options: [teamOption, rawOption],
        },
        {
          name: "add",
          description: "Add a new user to a team",
          options: [
            teamOption,
            {
              name: ["-a", "--as-admin"],
            },
          ],
          args: {
            name: "email",
            generators: getUsersGenerator,
          },
        },
        {
          name: "remove",
          description: "Remove a user from a team",
          options: [teamOption],
          args: {
            name: "email",
            generators: getUsersGenerator,
          },
        },
        {
          name: "change-role",
          description: "Change the role of a user in a team",
          options: [
            teamOption,
            {
              name: ["-r", "--role"],
              description: "The new role",
              args: {
                name: "role",
                suggestions: ROLES,
              },
            },
          ],
          args: {
            name: "email",
            generators: getUsersGenerator,
          },
        },
      ],
    },
  ],
};

export default completionSpec;
