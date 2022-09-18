const formatTsuruOutput = (output: string) => {
  return output
    .split("\n")
    .filter((line) => line.startsWith("|"))
    .map((line) => line.split("|")[1].trim())
    .slice(1);
};

const tsuruGenerators: Record<string, Fig.Generator> = {
  plans: {
    script: "tsuru plan list",
    postProcess: function (out) {
      const plans = formatTsuruOutput(out);
      return plans.map((plan) => {
        return { name: plan, description: "Plan" };
      });
    },
  },

  teams: {
    script: "tsuru team list",
    postProcess: function (out) {
      const teams = formatTsuruOutput(out);
      return teams.map((team) => {
        return { name: team, description: "Team" };
      });
    },
  },

  apps: {
    script: "tsuru app list",
    postProcess: function (out) {
      const apps = formatTsuruOutput(out);
      return apps.map((app) => {
        return { name: app, description: "Apps" };
      });
    },
  },

  platforms: {
    script: "tsuru platform list",
    postProcess: function (out) {
      return out
        .split("\n")
        .map((p) => p.replace("- ", ""))
        .map((branch) => {
          return { name: branch, description: "Platform" };
        });
    },
  },

  pools: {
    script: "tsuru pool list",
    postProcess: function (out) {
      const pools = formatTsuruOutput(out);
      return pools.map((pool) => {
        return { name: pool, description: "Pool" };
      });
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "tsuru",
  description: "",
  subcommands: [
    {
      name: "app",
      description: "App commands",
      subcommands: [
        {
          name: "build",
          description: "Builds a tsuru app image respecting",
          args: {
            name: "file-or-dir-n",
            template: "filepaths",
          },
          options: [
            {
              name: ["-a", "--app"],
              description: "App name",
              isRequired: true,
            },
            {
              name: ["-f", "--files-only"],
              description:
                "Enables single file build into the root of the app's tree",
            },
            {
              name: ["-h", "--help"],
              description: "Help for build",
            },
            {
              name: ["-t", "--tag"],
              description: "The image tag",
            },
          ],
        },
        {
          name: "create",
          description: "Creates a new app using the given name and platform",
          args: [
            {
              name: "appname",
              description: "Name of the app",
            },
            {
              name: "platform",
              description: "Platform of the app",
              generators: tsuruGenerators.platforms,
            },
          ],
          options: [
            {
              name: ["-o", "--pool"],
              description: "Pool where the app will be created",
              args: {
                name: "pool",
                description: "Team where the app will be created",
                generators: tsuruGenerators.pools,
              },
            },
            {
              name: ["-t", "--team"],
              description: "Team that will own the app",
              args: {
                name: "team",
                description: "Pool where the app will be created",
                generators: tsuruGenerators.teams,
              },
            },
            {
              name: ["-p", "--plan"],
              description: "Plan to be used by the app",
              args: {
                name: "plan",
                description: "Plan to be used by the app",
                generators: tsuruGenerators.plans,
              },
            },
            {
              name: ["-d", "--description"],
              description: "Description of the app",
            },
            {
              name: ["-g", "--tag"],
              description: "Tag to be used by the app",
            },
            {
              name: "--router-opts",
              description: "Router options",
            },
          ],
        },
        {
          name: "deploy",
          description:
            "Deploys set of files and/or directories to tsuru server",
          subcommands: [
            {
              name: "list",
              description: "List information about deploys for an application",
            },
            {
              name: "rebuild",
              description: "Rebuild and deploy the last app image",
            },
            {
              name: "rollback",
              description: "Deploys an existing image for an app",
              subcommands: [
                {
                  name: "update",
                  description: "Locks an existing image of an app",
                },
              ],
            },
          ],
        },
        {
          name: "restart",
          description:
            "Restarts an application, or one of the processes of the application",
        },
        {
          name: "shell",
          description:
            "Opens a remote shell inside unit, using the API server as a proxy",
          args: {
            name: "app",
            description: "App name",
            generators: tsuruGenerators.apps,
          },
        },
        {
          name: "grant",
          description: "Allows a team to access an application",
          args: {
            name: "team",
            description: "Team name",
            generators: tsuruGenerators.teams,
          },
          options: [
            {
              name: ["-a", "--app"],
              description: "App name",
              args: {
                name: "app",
                description: "App name",
                generators: tsuruGenerators.apps,
              },
            },
          ],
        },
        {
          name: "info",
          description: "Shows information about an app",
          options: [
            {
              name: ["-a", "--app"],
              description: "App name",
              args: {
                name: "app",
                description: "App name",
                generators: tsuruGenerators.apps,
              },
            },
          ],
        },
        {
          name: "list",
          description: "List all apps",
          options: [
            {
              name: ["-n", "--name"],
              description: "Filter applications by name",
            },
            {
              name: ["-o", "--pool"],
              description: "Filter applications by pool",
              args: {
                name: "pool",
                description: "Poll name",
                generators: tsuruGenerators.pools,
              },
            },
            {
              name: ["-p", "--platform"],
              description: "Filter applications by platform",
              args: {
                name: "platform",
                description: "Platform",
                generators: tsuruGenerators.platforms,
              },
            },
            {
              name: "-q",
              description: "Display only applications name",
            },
            {
              name: ["-s", "--status"],
              description:
                "Filter applications by unit status. Accepts multiple values separated by commas. Possible values can be: building, created, starting, error, started, stopped, asleep",
            },
            {
              name: ["-t", "--team"],
              description: "Filter applications by team owner",
              args: {
                name: "team",
                description: "Team name",
                generators: tsuruGenerators.teams,
              },
            },
            {
              name: ["-u", "--user"],
              description: "Filter applications by owner",
            },
          ],
        },
        {
          name: "log",
          description: "Shows the logs of an app",
          options: [
            {
              name: ["-a", "--app"],
              description: "App name",
              args: {
                name: "app",
                description: "App name",
                generators: tsuruGenerators.apps,
              },
            },
          ],
        },
        {
          name: "remove",
          description: "Removes an app",
          options: [
            {
              name: ["-a", "--app"],
              description: "App name",
              args: {
                name: "app",
                description: "App name",
                generators: tsuruGenerators.apps,
              },
            },
          ],
        },
        {
          name: "revoke",
          description: "Removes a team access to an application",
        },
        {
          name: "swap",
          description: "Swaps routing between two apps",
        },
        {
          name: "stop",
          description: "Stops an application",
          options: [
            {
              name: ["-a", "--app"],
              description: "App name",
              args: {
                name: "app",
                description: "App name",
                generators: tsuruGenerators.apps,
              },
            },
          ],
        },
      ],
    },
    {
      name: "env",
      description: "App environment variables",
      subcommands: [
        {
          name: "get",
          description: "Get environment variables from an app",
          options: [
            {
              name: ["-a", "--app"],
              description: "App name",
              args: {
                name: "app",
                description: "App name",
                generators: tsuruGenerators.apps,
              },
            },
          ],
        },
        {
          name: "set",
          description: "Set environment variables to an app",
          options: [
            {
              name: ["-a", "--app"],
              description: "App name",
              args: {
                name: "app",
                description: "App name",
                generators: tsuruGenerators.apps,
              },
            },
            {
              name: ["-p", "--private"],
              description: "Private environment variables",
            },
            {
              name: "--no-restart",
              description: "Don't restart the app after setting the env vars",
            },
          ],
        },
        {
          name: "unset",
          description: "Unset environment variables from an app",
          options: [
            {
              name: ["-a", "--app"],
              description: "App name",
              args: {
                name: "app",
                description: "App name",
                generators: tsuruGenerators.apps,
              },
            },
            {
              name: "--no-restart",
              description: "Don't restart the app after setting the env vars",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-a", "--app"],
          description: "App name",
          args: {
            name: "app",
            description: "App name",
            generators: tsuruGenerators.apps,
          },
        },
        {
          name: ["-p", "--private"],
          description: "Private environment variables",
        },
        {
          name: "--no-restart",
          description: "Don't restart the app after setting the env vars",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for tsuru",
    },
  ],
};
export default completionSpec;
