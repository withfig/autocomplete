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
    if (teamOption !== -1 && context[teamOption + 1]) {
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
  args: {
    name: "teamname",
    generators: getTeamsGenerator,
  },
};

const rawOption: Fig.Option = {
  name: "--raw",
};

const completionSpec: Fig.Spec = {
  name: "fig-teams",
  description: "Change the shell working directory",
  subcommands: [
    {
      name: "teams",
      subcommands: [
        {
          name: "get",
          options: [rawOption],
        },
        {
          name: "create",
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "clis",
      subcommands: [
        {
          name: "get",
          options: [teamOption, rawOption],
        },
        {
          name: "create",
          args: {
            name: "name",
          },
          options: [teamOption],
        },
        {
          name: "push",
        },
      ],
    },
    {
      name: "users",
      subcommands: [
        {
          name: "get",
          options: [teamOption, rawOption],
        },
        {
          name: "add",
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
          name: "change-role",
          options: [
            teamOption,
            {
              name: ["-r", "--role"],
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
