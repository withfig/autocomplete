const completionSpec: Fig.Spec = {
  name: "homey",
  subcommands: [
    {
      name: "app",
      description: "App related commands",
      subcommands: [
        {
          name: "add-types",
          description: "Install the Apps SDK TypeScript declarations",
        },
        {
          name: "build",
          description: "Build a Homey App for publishing",
        },
        {
          name: "compose",
          description: "Migrate app to Homey compose",
        },
        {
          name: "create",
          description: "Create a new Homey App",
        },
        {
          name: "discovery",
          description: "Discovery related commands",
          subcommands: [
            {
              name: "create",
              description: "Create a new Discovery strategy",
            },
          ],
        },
        {
          name: "driver",
          description: "Driver related commands",
          subcommands: [
            {
              name: "capabilities",
              description: "Change the capabilities of a Driver",
            },
            {
              name: "create",
              description: "Create a new Driver",
            },
            {
              name: "flow",
              description: "Create a new Flow for a Driver",
            },
          ],
        },
        {
          name: "flow",
          description: "Flow related commands",
          subcommands: [
            {
              name: "create",
              description: "Create a new Flow",
            },
          ],
        },
        {
          name: "install",
          description: "Install a Homey App",
          options: [
            {
              name: ["-c", "--clean"],
              args: {
                name: "clean",
                default: "false",
                suggestions: [
                  {
                    name: "false",
                  },
                  {
                    name: "true",
                  },
                ],
              },
            },
            {
              name: ["-s", "--skip-build"],
              args: {
                name: "skip-build",
                default: "false",
                suggestions: [
                  {
                    name: "false",
                  },
                  {
                    name: "true",
                  },
                ],
              },
            },
          ],
        },
        {
          name: "manage",
          description: "View your app in the Homey Developer Tools",
        },
        {
          name: "publish",
          description: "Publish a Homey App to the Homey Apps Store",
        },
        {
          name: "run",
          description: "Run a Homey App in development mode",
          options: [
            {
              name: ["-c", "--clean"],
              args: {
                name: "clean",
                default: "false",
                suggestions: [
                  {
                    name: "false",
                  },
                  {
                    name: "true",
                  },
                ],
              },
            },
            {
              name: ["-s", "--skip-build"],
              args: {
                name: "skip-build",
                default: "false",
                suggestions: [
                  {
                    name: "false",
                  },
                  {
                    name: "true",
                  },
                ],
              },
            },
            {
              name: ["-l", "--link-modules"],
              description:
                "Provide a comma-separated path to local Node.js modules to link. Only works on Homey Cloud",
              args: {
                name: "modules",
              },
            },
          ],
        },
        {
          name: "validate",
          description: "Validate a Homey App",
          options: [
            {
              name: ["-l", "--level"],
              description: "Validation level",
              args: {
                name: "value",
                suggestions: [
                  {
                    name: "debug",
                  },
                  {
                    name: "publish",
                  },
                  {
                    name: "verified",
                  },
                ],
              },
            },
          ],
        },
        {
          name: "version",
          description: "Update a Homey App's version",
          args: {
            name: "next",
            suggestions: [
              {
                name: "patch",
              },
              {
                name: "minor",
              },
              {
                name: "major",
              },
              {
                name: "semver",
                insertValue: "1.0.0",
              },
            ],
          },
        },
        {
          name: "view",
          description: "View your app in the Homey Apps Store",
        },
      ],
      options: [
        {
          name: ["-p", "--path"],
          description: "Path to a Homey App directory",
          isPersistent: true,
          args: {
            template: "folders",
          },
        },
      ],
    },
    {
      name: "docs",
      description: "Open Homey Developer Documentation",
      icon: "📖",
    },
    {
      name: "list",
      description: "List all Homeys",
    },
    {
      name: "login",
      description: "Log in with an Athom Account",
    },
    {
      name: "logout",
      description: "Log out the current user",
    },
    {
      name: "select",
      description: "Select a Homey as active",
      options: [
        {
          name: ["-i", "--id"],
          description: "ID of the Homey",
          args: {
            name: "id",
          },
        },
        {
          name: ["-n", "--name"],
          description: "Name of the Homey",
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "tools",
      description: "Open Homey Developer Tools",
      icon: "🔧",
    },
    {
      name: "unselect",
      description: "Unselect the active Homey",
    },
    {
      name: "whoami",
      description: "Show the current logged in user",
    },
  ],
  options: [
    {
      name: "--help",
      isPersistent: true,
    },
    {
      name: "--version",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
