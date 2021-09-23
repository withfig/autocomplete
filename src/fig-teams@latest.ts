const getTeamsGenerator: Fig.Generator = {
  script: "npx -y fig-teams@latest teams ls --json",
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
      return `npx -y fig-teams@latest users get -t ${teamName} --json`;
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

const teamOption: Fig.Option = {
  name: ["-t", "--team"],
  description: "Team to use",
  args: {
    name: "teamname",
    generators: getTeamsGenerator,
  },
};

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Output as JSON",
};

const completionSpec: Fig.Spec = {
  name: "fig-teams",
  description: "Fig for teams",
  subcommands: [
    {
      name: "teams",
      subcommands: [
        {
          name: "ls",
          description: "Get all available teams for the current user",
          options: [jsonOption],
        },
        {
          name: "create",
          description: "Create a new team",
          args: {
            name: "team_name",
          },
        },
        {
          name: "ls:user",
          description: "Get all users for a given team",
          options: [teamOption, jsonOption],
        },
        {
          name: "add:user",
          description: "Add a new user to a team",
          options: [teamOption],
          args: {
            name: "email",
            generators: getUsersGenerator,
          },
        },
        {
          name: "remove:user",
          description: "Remove a user from a team",
          options: [teamOption],
          args: {
            name: "email",
            generators: getUsersGenerator,
          },
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Push your locally compiled completion specs to Fig's server based on the mapping defined in the .fig/manifest file",
    },
    {
      name: "manifest",
      description:
        "Create or update the .fig/manifest file. Use this command to link your locally created completion specs to your team",
    },
    {
      name: "whoami",
      description:
        "Get information about the current user and their associated teams",
    },
  ],
};

export default completionSpec;
