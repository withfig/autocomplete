const formatTsuruOutput = (output: string) => {
  return output
    .split("\n")
    .filter((line) => line.startsWith("|"))
    .map((line) => line.split("|")[1].trim())
    .slice(1);
};

const tsuruGenerators: Record<string, Fig.Generator> = {
  plans: {
    script: ["tsuru", "plan", "list"],
    postProcess: function (out) {
      const plans = formatTsuruOutput(out);
      return plans.map((plan) => {
        return { name: plan, description: "Plan" };
      });
    },
  },

  teams: {
    script: ["tsuru", "team", "list"],
    postProcess: function (out) {
      const teams = formatTsuruOutput(out);
      return teams.map((team) => {
        return { name: team, description: "Team" };
      });
    },
  },

  apps: {
    script: ["tsuru", "app", "list"],
    postProcess: function (out) {
      const apps = formatTsuruOutput(out);
      return apps.map((app) => {
        return { name: app, description: "Apps" };
      });
    },
  },

  platforms: {
    script: ["tsuru", "platform", "list"],
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
    script: ["tsuru", "pool", "list"],
    postProcess: function (out) {
      const pools = formatTsuruOutput(out);
      return pools.map((pool) => {
        return { name: pool, description: "Pool" };
      });
    },
  },
};

const tsuruOptions: Record<string, Fig.Option> = {
  app: {
    name: ["-a", "--app"],
    description: "App name",
    args: {
      name: "app",
      description: "App name",
      generators: tsuruGenerators.apps,
    },
  },

  pool: {
    name: ["-o", "--pool"],
    description: "Filter applications by pool",
    args: {
      name: "pool",
      description: "Poll name",
      generators: tsuruGenerators.pools,
    },
  },

  platform: {
    name: ["-p", "--platform"],
    description: "Filter applications by platform",
    args: {
      name: "platform",
      description: "Platform",
      generators: tsuruGenerators.platforms,
    },
  },

  team: {
    name: ["-t", "--team"],
    description: "Team that will own the app",
    args: {
      name: "team",
      description: "Pool where the app will be created",
      generators: tsuruGenerators.teams,
    },
  },

  plan: {
    name: ["-p", "--plan"],
    description: "Plan to be used by the app",
    args: {
      name: "plan",
      description: "Plan to be used by the app",
      generators: tsuruGenerators.plans,
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "tsuru",
  description:
    "Tsuru is the command line utility used by application developers, that will allow users to create, list, bind and manage apps",
  subcommands: [
    {
      name: "app",
      description: "App commands",
      subcommands: [
        {
          name: "build",
          description: "Builds a tsuru app image respecting",
          options: [
            tsuruOptions.app,
            {
              name: ["-f", "--files-only"],
              description:
                "Enables single file build into the root of the app's tree",
              args: {
                name: "file-or-dir-n",
                template: "filepaths",
              },
            },
            {
              name: ["-h", "--help"],
              description: "Help for build",
            },
            {
              name: ["-t", "--tag"],
              description: "The image tag",
              isRequired: true,
            },
          ],
        },
        {
          name: "create",
          description: "Creates a new app using the given name and platform",
          args: [
            {
              name: "app",
              description: "App name",
              generators: tsuruGenerators.apps,
            },
            {
              name: "platform",
              description: "Platform of the app",
              generators: tsuruGenerators.platforms,
            },
          ],
          options: [
            tsuruOptions.pool,
            tsuruOptions.team,
            tsuruOptions.plan,
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
          args: {
            name: "file-or-dir-n",
            template: "filepaths",
          },
          options: [
            tsuruOptions.app,
            {
              name: ["-f", "--files-only"],
              description:
                "Enables single file deployment into the root of the app's tree",
            },
            {
              name: ["-i", "--image"],
              description: "The image to deploy in app",
            },
            {
              name: ["-m", "--message"],
              description: "A message describing this deploy",
            },
            {
              name: "--new-version",
              description:
                "Creates a new version for the current deployment while preserving existing versions",
            },
            {
              name: "--override-old-versions",
              description:
                "Force replace all deployed versions by this new deploy",
            },
          ],
          subcommands: [
            {
              name: "list",
              description: "List information about deploys for an application",
              options: [tsuruOptions.app],
            },
            {
              name: "rebuild",
              description: "Rebuild and deploy the last app image",
              options: [
                tsuruOptions.app,
                {
                  name: "--new-version",
                  description:
                    "Creates a new version for the current deployment while preserving existing versions",
                },
                {
                  name: "--override-old-versions",
                  description:
                    "Force replace all deployed versions by this new deploy",
                },
              ],
            },
            {
              name: "rollback",
              description: "Deploys an existing image for an app",
              options: [
                tsuruOptions.app,
                {
                  name: "--new-version",
                  description:
                    "Creates a new version for the current deployment while preserving existing versions",
                },
                {
                  name: "--override-old-versions",
                  description:
                    "Force replace all deployed versions by this new deploy",
                },
                {
                  name: ["y", "--yes"],
                  description: "Answer yes to all questions",
                },
              ],
              subcommands: [
                {
                  name: "update",
                  description: "Locks an existing image of an app",
                  options: [
                    tsuruOptions.app,
                    {
                      name: ["-d", "--disable"],
                      description:
                        "Enables or disables the rollback on a specific image version",
                    },
                    {
                      name: ["-i", "--image"],
                      description: "The image name for an app version",
                    },
                    {
                      name: ["-r", "--reason"],
                      description:
                        "The reason why the rollback has to be disabled",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "grant",
          description: "Allows a team to access an application",
          args: {
            name: "team",
            description: "Team name",
            generators: tsuruGenerators.teams,
          },
          options: [tsuruOptions.app],
        },
        {
          name: "info",
          description: "Shows information about an app",
          options: [tsuruOptions.app],
        },
        {
          name: "list",
          description: "List all apps",
          options: [
            {
              name: ["-n", "--name"],
              description: "Filter applications by name",
            },
            tsuruOptions.pool,
            tsuruOptions.platform,
            {
              name: "-q",
              description: "Display only applications name",
            },
            {
              name: ["-s", "--status"],
              description:
                "Filter applications by unit status. Accepts multiple values separated by commas. Possible values can be: building, created, starting, error, started, stopped, asleep",
            },
            tsuruOptions.team,
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
            tsuruOptions.app,
            {
              name: ["-f", "--follow"],
              description: "Follow log output",
            },
            {
              name: ["-l", "--lines"],
              description: "Number of lines to show",
            },
            {
              name: "no-data",
              description: "No date information",
            },
            {
              name: ["-s", "--source"],
              description: "The log from the given source",
            },
            {
              name: ["-u", "--unit"],
              description: "The log from the given unit",
            },
          ],
        },
        {
          name: "metadata",
          description: "Manage metadata for an app",
          subcommands: [
            {
              name: "get",
              description: "Retrieves metadata for an application",
              options: [tsuruOptions.app],
            },
            {
              name: "set",
              description: "Sets metadata for an application",
              args: {
                name: "<NAME=value>",
                description: "The metadata key",
                isVariadic: true,
              },
              options: [
                tsuruOptions.app,
                {
                  name: "--no-restart",
                  description:
                    "Do not restart the app after the metadata is set",
                },
                {
                  name: ["-t", "--type"],
                  description: "Metadata type: annotation or label",
                },
              ],
            },
            {
              name: "unset",
              description: "Unsets metadata for an application",
              args: {
                name: "NAME",
                description: "The metadata key",
                isVariadic: true,
              },
              options: [
                tsuruOptions.app,
                {
                  name: "--no-restart",
                  description:
                    "Do not restart the app after the metadata is set",
                },
                {
                  name: ["-t", "--type"],
                  description: "Metadata type: annotation or label",
                },
              ],
            },
          ],
        },
        {
          name: "quota",
          description: "Shows the quota of an app",
          subcommands: [
            {
              name: "change",
              description: "Changes the limit of units that an app can have",
              options: [tsuruOptions.app],
              args: {
                name: "limit",
                description: "The new limit of units",
              },
            },
            {
              name: "view",
              description:
                "Displays the current usage and limit of the given app",
              options: [tsuruOptions.app],
            },
          ],
        },
        {
          name: "remove",
          description: "Removes an app",
          options: [tsuruOptions.app],
        },
        {
          name: "restart",
          description:
            "Restarts an application, or one of the processes of the application",
          options: [
            tsuruOptions.app,
            {
              name: ["-p", "--process"],
              description: "Process name",
            },
            {
              name: "--version",
            },
          ],
        },
        {
          name: "revoke",
          description: "Removes a team access to an application",
          args: {
            name: "team",
            description: "Team name",
            generators: tsuruGenerators.teams,
          },
          options: [tsuruOptions.app],
        },
        {
          name: "router",
          description: "Manage routers for an app",
          subcommands: [
            {
              name: "add",
              description: "Adds a router to an app",
              args: {
                name: "router",
                description: "Router name",
              },
              options: [
                tsuruOptions.app,
                {
                  name: ["-o", "--opts"],
                  description:
                    "Custom options sent directly to router implementation",
                },
              ],
            },
            {
              name: "list",
              description: "List routers for an app",
              options: [tsuruOptions.app],
            },
            {
              name: "remove",
              description: "Removes a router from an app",
              args: {
                name: "router",
                description: "Router name",
              },
              options: [tsuruOptions.app],
            },
            {
              name: "update",
              description: "Updates a router for an app",
              options: [
                tsuruOptions.app,
                {
                  name: ["-o", "--opts"],
                  description:
                    "Custom options sent directly to router implementation",
                },
              ],
            },
            {
              name: "version",
              description: "Manage router versions for an app",
              subcommands: [
                {
                  name: "add",
                  description: "Adds a router version to an app",
                  args: {
                    name: "version",
                  },
                  options: [tsuruOptions.app],
                },
                {
                  name: "remove",
                  description: "Removes a router version from an app",
                  args: {
                    name: "version",
                  },
                  options: [tsuruOptions.app],
                },
              ],
            },
          ],
        },
        {
          name: "routes",
          description: "List all routers",
          subcommands: [
            {
              name: "rebuild",
              description: "Rebuild routes for an application",
              options: [tsuruOptions.app],
            },
          ],
        },
        {
          name: "run",
          description: "Runs a command inside an app",
          options: [
            tsuruOptions.app,
            {
              name: ["-i", "--isolated"],
              description: "Running in ephemeral container",
            },
            {
              name: ["-o", "--once"],
              description: "Running only one unit",
            },
          ],
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
          name: "start",
          description: "Starts an app",
          options: [
            tsuruOptions.app,
            {
              name: ["-p", "--process"],
              description: "Process name",
            },
            {
              name: "--version",
              description: "Version number",
            },
          ],
        },
        {
          name: "stop",
          description: "Stops an application",
          options: [
            tsuruOptions.app,
            {
              name: ["-p", "--process"],
              description: "Process name",
            },
            {
              name: "--version",
              description: "Version number",
            },
          ],
        },
        {
          name: "swap",
          description: "Swaps routing between two apps",
          options: [
            {
              name: ["-c", "--cname-only"],
              description: "Swap only the cname",
            },
            {
              name: ["-f", "--force"],
              description:
                "Force Swap among apps with different number of units or different platform",
            },
          ],
        },
        {
          name: "unlock",
          description: "Forces the removal of an application lock",
          options: [
            tsuruOptions.app,
            {
              name: ["-y", "--assume-yes"],
              description: "Don't ask for confirmation",
            },
          ],
        },
        {
          name: "update",
          description: "Updates an app",
          options: [
            tsuruOptions.app,
            {
              name: "--cpu",
              description:
                "CPU limit for app, this will override the plan cpu value. One cpu is equivalent to 1 vCPU/Core, fractional requests are allowed and the expression 0.1 is equivalent to the expression 100m",
            },
            {
              name: ["-d", "--description"],
              description: "Changes description for the app",
            },
            {
              name: ["-g", "--tag"],
              description: "Add tags for the app",
            },
            {
              name: ["-i", "--image-reset"],
              description: "Forces next deploy to build app image from scratch",
            },
            tsuruOptions.platform,
            {
              name: "--memory",
              description:
                "Memory limit for app, this will override the plan memory value. You can express memory as a bytes integer or using one of these suffixes: E, P, T, G, M, K, Ei, Pi, Ti, Gi, Mi, Ki",
            },
            {
              name: "--no-restart",
              description: "Prevent tsuru from restarting the application",
            },
            tsuruOptions.pool,
            tsuruOptions.plan,
            tsuruOptions.team,
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
          options: [tsuruOptions.app],
        },
        {
          name: "set",
          description: "Set environment variables to an app",
          options: [
            tsuruOptions.app,
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
            tsuruOptions.app,
            {
              name: "--no-restart",
              description: "Don't restart the app after setting the env vars",
            },
          ],
        },
      ],
      options: [
        tsuruOptions.app,
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
      name: "cluster",
      description: "Cluster commands",
      subcommands: [
        {
          name: "add",
          description: "Add a new cluster",
        },
        {
          name: "list",
          description: "List all clusters",
        },
        {
          name: "remove",
          description: "Remove a cluster",
        },
        {
          name: "update",
          description: "Update a cluster",
        },
      ],
    },
    {
      name: "certificate",
      description: "Certificate commands",
      subcommands: [
        {
          name: "list",
          description: "List App TLS certificates",
        },
        {
          name: "set",
          description:
            "Creates or update a TLS certificate into the specific app",
        },
        {
          name: "unset",
          description: "Unset a TLS certificate from a specific app",
        },
      ],
    },
    {
      name: "login",
      description: "Login to tsuru server",
      args: {
        name: "email",
      },
    },
    {
      name: "logout",
      description: "Logout from tsuru server",
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
