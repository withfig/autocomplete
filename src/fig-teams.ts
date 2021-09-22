const getTeamsGenerator: Fig.Generator = {
  script: "fig-teams teams ls --json",
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
      return `fig-teams users get -t ${teamName} --json`;
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
  description: "Interact with fig for teams",
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
            name: "name",
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
      description: "Push the cli to the fig servers",
    },
    {
      name: "manifest",
      description: "Update or create config for fig",
    },
  ],
};

export default completionSpec;
