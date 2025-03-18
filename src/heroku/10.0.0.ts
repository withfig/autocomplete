const completion: Fig.Subcommand = {
  name: "heroku",
  subcommands: [
    {
      name: "access",
      description: "List who has access to an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "access:add",
      description: "Add new users to your app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--permissions"],
          description: "List of permissions comma separated",
          args: {},
        },
      ],
      args: {
        name: "email",
        description: "Email address of the team member",
      },
    },
    {
      name: "access:remove",
      description: "Remove users from a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "access:update",
      description: "Update existing collaborators on an team app",
      options: [
        {
          name: ["-p", "--permissions"],
          description:
            "Comma-delimited list of permissions to update (deploy,manage,operate)",
          args: {},
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "email",
        description: "Email address of the team member",
      },
    },
    {
      name: "addons",
      description:
        "Lists your add-ons and attachments.\n\n  The default filter applied depends on whether you are in a Heroku app\n  directory. If so, the --app flag is implied. If not, the default of --all\n  is implied. Explicitly providing either flag overrides the default\n  behavior.\n",
      options: [
        {
          name: ["-A", "--all"],
          description: "Show add-ons and attachments for all accessible apps",
        },
        {
          name: "--json",
          description: "Return add-ons in json format",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "addons:attach",
      description: "Attach an existing add-on resource to an app",
      options: [
        {
          name: "--as",
          description: "Name for add-on attachment",
          args: {},
        },
        {
          name: "--credential",
          description: "Credential name for scoped access to Heroku Postgres",
          args: {},
        },
        {
          name: "--confirm",
          description: "Overwrite existing add-on attachment with same name",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "addon_name",
        description: "Unique identifier or globally unique name of the add-on",
      },
    },
    {
      name: "addons:create",
      description:
        "Create a new add-on resource.\n\nIn order to add additional config items, please place them at the end of the command after a double-dash (--).\n",
      options: [
        {
          name: "--name",
          description: "Name for the add-on resource",
          args: {},
        },
        {
          name: "--as",
          description: "Name for the initial add-on attachment",
          args: {},
        },
        {
          name: "--confirm",
          description:
            "Overwrite existing config vars or existing add-on attachments",
          args: {},
        },
        {
          name: "--wait",
          description: "Watch add-on creation status and exit when complete",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "service:plan",
        description:
          "Unique identifier or unique name of the add-on service plan",
      },
    },
    {
      name: "addons:add",
      description:
        "Create a new add-on resource.\n\nIn order to add additional config items, please place them at the end of the command after a double-dash (--).\n",
      options: [
        {
          name: "--name",
          description: "Name for the add-on resource",
          args: {},
        },
        {
          name: "--as",
          description: "Name for the initial add-on attachment",
          args: {},
        },
        {
          name: "--confirm",
          description:
            "Overwrite existing config vars or existing add-on attachments",
          args: {},
        },
        {
          name: "--wait",
          description: "Watch add-on creation status and exit when complete",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "service:plan",
        description:
          "Unique identifier or unique name of the add-on service plan",
      },
    },
    {
      name: "addons:destroy",
      description: "Permanently destroy an add-on resource",
      options: [
        {
          name: ["-f", "--force"],
          description: "Allow destruction even if connected to other apps",
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
        {
          name: "--wait",
          description: "Watch add-on destruction status and exit when complete",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "addonName",
        description: "Unique identifier or globally unique name of the add-on",
      },
    },
    {
      name: "addons:remove",
      description: "Permanently destroy an add-on resource",
      options: [
        {
          name: ["-f", "--force"],
          description: "Allow destruction even if connected to other apps",
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
        {
          name: "--wait",
          description: "Watch add-on destruction status and exit when complete",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "addonName",
        description: "Unique identifier or globally unique name of the add-on",
      },
    },
    {
      name: "addons:detach",
      description: "Detach an existing add-on resource from an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "attachment_name",
        description: "Unique identifier of the add-on attachment",
      },
    },
    {
      name: "addons:docs",
      description: "Open an add-on's Dev Center documentation in your browser",
      options: [
        {
          name: "--show-url",
          description: "Show URL, do not open browser",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "addon",
        description: "Unique identifier or globally unique name of the add-on",
      },
    },
    {
      name: "addons:info",
      description: "Show detailed add-on resource and attachment information",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "addon",
        description: "Unique identifier or globally unique name of the add-on",
      },
    },
    {
      name: "addons:open",
      description: "Open an add-on's dashboard in your browser",
      options: [
        {
          name: "--show-url",
          description: "Show URL, do not open browser",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "addon",
        description: "Unique identifier or globally unique name of the add-on",
      },
    },
    {
      name: "addons:plans",
      description: "List all available plans for an add-on service",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
      args: {
        name: "service",
        description: "Unique identifier or globally unique name of the add-on",
      },
    },
    {
      name: "addons:rename",
      description: "Rename an add-on",
      args: [
        {
          name: "addon_name",
          description:
            "Unique identifier or globally unique name of the add-on",
        },
        {
          name: "new_name",
          description: "New globally unique name of the add-on",
        },
      ],
    },
    {
      name: "addons:services",
      description: "List all available add-on services",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "addons:upgrade",
      description:
        "Change add-on plan.\n  See available plans with `heroku addons:plans SERVICE`.\n\n  Note that `heroku addons:upgrade` and `heroku addons:downgrade` are the same.  Either one can be used to change an add-on plan up or down.\n\n  https://devcenter.heroku.com/articles/managing-add-ons\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "addon",
          description:
            "Unique identifier or globally unique name of the add-on",
        },
        {
          name: "plan",
          description: "Unique identifier or name of the plan",
        },
      ],
    },
    {
      name: "addons:downgrade",
      description:
        "Change add-on plan.\n  See available plans with `heroku addons:plans SERVICE`.\n\n  Note that `heroku addons:upgrade` and `heroku addons:downgrade` are the same.  Either one can be used to change an add-on plan up or down.\n\n  https://devcenter.heroku.com/articles/managing-add-ons\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "addon",
          description:
            "Unique identifier or globally unique name of the add-on",
        },
        {
          name: "plan",
          description: "Unique identifier or name of the plan",
        },
      ],
    },
    {
      name: "addons:wait",
      description: "Show provisioning status of the add-ons on the app",
      options: [
        {
          name: "--wait-interval",
          description: "How frequently to poll in seconds",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "addon",
        description: "Unique identifier or globally unique name of the add-on",
      },
    },
    {
      name: "apps",
      description: "List your apps",
      options: [
        {
          name: ["-A", "--all"],
          description: "Include apps in all teams",
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
        {
          name: ["-s", "--space"],
          description: "Filter by space",
          args: {},
        },
        {
          name: ["-p", "--personal"],
          description:
            "List apps in personal account when a default team is set",
        },
        {
          name: ["-i", "--internal-routing"],
          description: "Filter to Internal Web Apps",
          hidden: true,
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
        },
      ],
    },
    {
      name: "list",
      description: "List your apps",
      options: [
        {
          name: ["-A", "--all"],
          description: "Include apps in all teams",
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
        {
          name: ["-s", "--space"],
          description: "Filter by space",
          args: {},
        },
        {
          name: ["-p", "--personal"],
          description:
            "List apps in personal account when a default team is set",
        },
        {
          name: ["-i", "--internal-routing"],
          description: "Filter to Internal Web Apps",
          hidden: true,
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
        },
      ],
    },
    {
      name: "apps:list",
      description: "List your apps",
      options: [
        {
          name: ["-A", "--all"],
          description: "Include apps in all teams",
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
        {
          name: ["-s", "--space"],
          description: "Filter by space",
          args: {},
        },
        {
          name: ["-p", "--personal"],
          description:
            "List apps in personal account when a default team is set",
        },
        {
          name: ["-i", "--internal-routing"],
          description: "Filter to Internal Web Apps",
          hidden: true,
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
        },
      ],
    },
    {
      name: "apps:create",
      description: "Creates a new app",
      options: [
        {
          name: "--app",
          args: {},
          hidden: true,
        },
        {
          name: "--addons",
          description: "Comma-delimited list of addons to install",
          args: {},
        },
        {
          name: ["-b", "--buildpack"],
          description: "Buildpack url to use for this app",
          args: {},
        },
        {
          name: ["-m", "--manifest"],
          description: "Use heroku.yml settings for this app",
          hidden: true,
        },
        {
          name: ["-n", "--no-remote"],
          description: "Do not create a git remote",
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {
            default: "heroku",
          },
        },
        {
          name: ["-s", "--stack"],
          description: "The stack to create the app on",
          args: {},
        },
        {
          name: "--space",
          description: "The private space to create the app in",
          args: {},
        },
        {
          name: "--region",
          description: "Specify region for the app to run in",
          args: {},
        },
        {
          name: "--internal-routing",
          description:
            "Private space-only. create as an Internal Web App that is only routable in the local network",
          hidden: true,
        },
        {
          name: "--features",
          args: {},
          hidden: true,
        },
        {
          name: "--kernel",
          args: {},
          hidden: true,
        },
        {
          name: "--locked",
          hidden: true,
        },
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
        },
      ],
      args: {
        name: "app",
        description: "Name of app to create",
        isOptional: true,
      },
    },
    {
      name: "create",
      description: "Creates a new app",
      options: [
        {
          name: "--app",
          args: {},
          hidden: true,
        },
        {
          name: "--addons",
          description: "Comma-delimited list of addons to install",
          args: {},
        },
        {
          name: ["-b", "--buildpack"],
          description: "Buildpack url to use for this app",
          args: {},
        },
        {
          name: ["-m", "--manifest"],
          description: "Use heroku.yml settings for this app",
          hidden: true,
        },
        {
          name: ["-n", "--no-remote"],
          description: "Do not create a git remote",
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {
            default: "heroku",
          },
        },
        {
          name: ["-s", "--stack"],
          description: "The stack to create the app on",
          args: {},
        },
        {
          name: "--space",
          description: "The private space to create the app in",
          args: {},
        },
        {
          name: "--region",
          description: "Specify region for the app to run in",
          args: {},
        },
        {
          name: "--internal-routing",
          description:
            "Private space-only. create as an Internal Web App that is only routable in the local network",
          hidden: true,
        },
        {
          name: "--features",
          args: {},
          hidden: true,
        },
        {
          name: "--kernel",
          args: {},
          hidden: true,
        },
        {
          name: "--locked",
          hidden: true,
        },
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
        },
      ],
      args: {
        name: "app",
        description: "Name of app to create",
        isOptional: true,
      },
    },
    {
      name: "apps:destroy",
      description: "Permanently destroy an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
      ],
    },
    {
      name: "destroy",
      description: "Permanently destroy an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
      ],
    },
    {
      name: "apps:delete",
      description: "Permanently destroy an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
      ],
    },
    {
      name: "apps:errors",
      description: "View app errors",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: "--hours",
          description: "Number of hours to look back (default 24)",
          args: {
            default: "24",
          },
        },
        {
          name: "--router",
          description: "Show only router errors",
        },
        {
          name: "--dyno",
          description: "Show only dyno errors",
        },
      ],
    },
    {
      name: "apps:favorites",
      description: "List favorited apps",
      options: [
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
      ],
    },
    {
      name: "apps:favorites:add",
      description: "Favorites an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "apps:favorites:remove",
      description: "Unfavorites an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "apps:info",
      description: "Show detailed app information",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--shell"],
          description: "Output more shell friendly key/value pairs",
        },
        {
          name: ["-x", "--extended"],
          hidden: true,
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
      ],
    },
    {
      name: "info",
      description: "Show detailed app information",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--shell"],
          description: "Output more shell friendly key/value pairs",
        },
        {
          name: ["-x", "--extended"],
          hidden: true,
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
      ],
    },
    {
      name: "apps:join",
      description: "Add yourself to a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "join",
      description: "Add yourself to a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "apps:leave",
      description: "Remove yourself from a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "leave",
      description: "Remove yourself from a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "apps:lock",
      description: "Prevent team members from joining an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "lock",
      description: "Prevent team members from joining an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "apps:open",
      description: "Open the app in a web browser",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "path",
        description: "Base URL path of app",
        isOptional: true,
      },
    },
    {
      name: "open",
      description: "Open the app in a web browser",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "path",
        description: "Base URL path of app",
        isOptional: true,
      },
    },
    {
      name: "apps:rename",
      description: "Rename an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "newname",
        description: "New unique name of the app",
      },
    },
    {
      name: "rename",
      description: "Rename an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "newname",
        description: "New unique name of the app",
      },
    },
    {
      name: "apps:stacks",
      description: "Show the list of available stacks",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "stack",
      description: "Show the list of available stacks",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "apps:stacks:set",
      description: "Set the stack of an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "stack",
        description: "Unique name or identifier of the stack",
      },
    },
    {
      name: "stack:set",
      description: "Set the stack of an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "stack",
        description: "Unique name or identifier of the stack",
      },
    },
    {
      name: "apps:transfer",
      description: "Transfer applications to another user or team",
      options: [
        {
          name: ["-l", "--locked"],
          description: "Lock the app upon transfer",
        },
        {
          name: "--bulk",
          description: "Transfer applications in bulk",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-c", "--confirm"],
          args: {},
          hidden: true,
        },
      ],
      args: {
        name: "recipient",
        description: "User or team to transfer applications to",
      },
    },
    {
      name: "apps:unlock",
      description: "Unlock an app so any team member can join",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "unlock",
      description: "Unlock an app so any team member can join",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "auth:2fa",
      description: "Check 2fa status",
    },
    {
      name: "2fa",
      description: "Check 2fa status",
    },
    {
      name: "twofactor",
      description: "Check 2fa status",
    },
    {
      name: "auth:2fa:disable",
      description: "Disables 2fa on account",
    },
    {
      name: "twofactor:disable",
      description: "Disables 2fa on account",
    },
    {
      name: "2fa:disable",
      description: "Disables 2fa on account",
    },
    {
      name: "auth:login",
      description: "Login with your Heroku credentials",
      options: [
        {
          name: "--browser",
          description:
            'Browser to open SSO with (example: "firefox", "safari")',
          args: {},
        },
        {
          name: ["-s", "--sso"],
          description: "Login for enterprise users under SSO",
          hidden: true,
        },
        {
          name: ["-i", "--interactive"],
          description: "Login with username/password",
        },
        {
          name: ["-e", "--expires-in"],
          description: "Duration of token in seconds (default 30 days)",
          args: {},
        },
      ],
    },
    {
      name: "login",
      description: "Login with your Heroku credentials",
      options: [
        {
          name: "--browser",
          description:
            'Browser to open SSO with (example: "firefox", "safari")',
          args: {},
        },
        {
          name: ["-s", "--sso"],
          description: "Login for enterprise users under SSO",
          hidden: true,
        },
        {
          name: ["-i", "--interactive"],
          description: "Login with username/password",
        },
        {
          name: ["-e", "--expires-in"],
          description: "Duration of token in seconds (default 30 days)",
          args: {},
        },
      ],
    },
    {
      name: "auth:logout",
      description: "Clears local login credentials and invalidates API session",
    },
    {
      name: "logout",
      description: "Clears local login credentials and invalidates API session",
    },
    {
      name: "auth:token",
      description:
        "Outputs current CLI authentication token.\nBy default, the CLI auth token is only valid for 1 year. To generate a long-lived token, use heroku authorizations:create",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
      ],
    },
    {
      name: "auth:whoami",
      description: "Display the current logged in user",
    },
    {
      name: "whoami",
      description: "Display the current logged in user",
    },
    {
      name: "authorizations",
      description: "List OAuth authorizations",
      options: [
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
      ],
    },
    {
      name: "authorizations:create",
      description: "Create a new OAuth authorization",
      options: [
        {
          name: ["-d", "--description"],
          description: "Set a custom authorization",
          args: {},
        },
        {
          name: ["-S", "--short"],
          description: "Only output token",
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
        {
          name: ["-s", "--scope"],
          description: "Set custom OAuth scopes",
          args: {},
        },
        {
          name: ["-e", "--expires-in"],
          description: "Set expiration in seconds (default no expiration)",
          args: {},
        },
      ],
    },
    {
      name: "authorizations:info",
      description: "Show an existing OAuth authorization",
      options: [
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
      ],
      args: {
        name: "id",
        description: "ID of the authorization",
      },
    },
    {
      name: "authorizations:revoke",
      description: "Revoke OAuth authorization",
      args: {
        name: "id",
        description: "ID of the authorization",
      },
    },
    {
      name: "authorizations:destroy",
      description: "Revoke OAuth authorization",
      args: {
        name: "id",
        description: "ID of the authorization",
      },
    },
    {
      name: "authorizations:rotate",
      description: "Updates an OAuth authorization token",
      args: {
        name: "id",
        description: "ID of the authorization",
      },
    },
    {
      name: "authorizations:update",
      description: "Updates an OAuth authorization",
      options: [
        {
          name: ["-d", "--description"],
          description: "Set a custom authorization description",
          args: {},
        },
        {
          name: "--client-id",
          description: "Identifier of OAuth client to set",
          args: {},
        },
        {
          name: "--client-secret",
          description: "Secret of OAuth client to set",
          args: {},
        },
      ],
      args: {
        name: "id",
        description: "ID of the authorization",
      },
    },
    {
      name: "autocomplete",
      description: "Display autocomplete installation instructions",
      options: [
        {
          name: ["-r", "--refresh-cache"],
          description: "Refresh cache only (ignores displaying instructions)",
        },
      ],
      args: {
        name: "shell",
        description: "Shell type",
        isOptional: true,
      },
    },
    {
      name: "autocomplete:create",
      description: "Create autocomplete setup scripts and completion functions",
      hidden: true,
    },
    {
      name: "autocomplete:doctor",
      description: "Autocomplete diagnostic",
      options: [
        {
          name: "--verbose",
          description: "List completable commands",
        },
      ],
      args: {
        name: "shell",
        description: "Shell type",
        isOptional: true,
      },
      hidden: true,
    },
    {
      name: "autocomplete:options",
      description:
        "Display arg or flag completion options (used internally by completion functions)",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          hidden: true,
        },
      ],
      args: {
        name: "completion",
      },
      hidden: true,
    },
    {
      name: "autocomplete:script",
      description: "Display autocomplete setup script for shell",
      args: {
        name: "shell",
        description: "Shell type",
        isOptional: true,
      },
      hidden: true,
    },
    {
      name: "buildpacks",
      description: "Display the buildpacks for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "buildpacks:add",
      description:
        "Add new app buildpack, inserting into list of buildpacks if necessary",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-i", "--index"],
          description: "The 1-based index of the URL in the list of URLs",
          args: {},
        },
      ],
      args: {
        name: "buildpack",
        description: "Namespace/name of the buildpack",
      },
    },
    {
      name: "buildpacks:clear",
      description: "Clear all buildpacks set on the app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "buildpacks:info",
      description: "Fetch info about a buildpack",
      args: {
        name: "buildpack",
        description: "Namespace/name of the buildpack",
      },
    },
    {
      name: "buildpacks:remove",
      description: "Remove a buildpack set on the app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-i", "--index"],
          description:
            "The 1-based index of the URL to remove from the list of URLs",
          args: {},
        },
      ],
      args: {
        name: "buildpack",
        description: "Namespace/name of the buildpack",
      },
    },
    {
      name: "buildpacks:search",
      description: "Search for buildpacks",
      options: [
        {
          name: "--namespace",
          description:
            "Buildpack namespaces to filter on using a comma separated list",
          args: {},
        },
        {
          name: "--name",
          description:
            "Buildpack names to filter on using a comma separated list",
          args: {},
        },
        {
          name: "--description",
          description: "Buildpack description to filter on",
          args: {},
        },
      ],
      args: {
        name: "term",
        description:
          "Search term that searches across name, namespace, and description",
      },
    },
    {
      name: "buildpacks:set",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-i", "--index"],
          description: "The 1-based index of the URL in the list of URLs",
          args: {},
        },
      ],
      args: {
        name: "buildpack",
        description: "Namespace/name of the buildpack",
      },
    },
    {
      name: "buildpacks:versions",
      description: "List versions of a buildpack",
      args: {
        name: "buildpack",
        description: "Namespace/name of the buildpack",
      },
    },
    {
      name: "certs",
      description: "List SSL certificates for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "certs:add",
      description:
        "Add an SSL certificate to an app.\n\n  Note: certificates with PEM encoding are also valid.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "CRT",
          description: "Absolute path of the certificate file on disk",
        },
        {
          name: "KEY",
          description: "Absolute path of the key file on disk",
        },
      ],
    },
    {
      name: "certs:auto",
      description: "Show ACM status for an app",
      options: [
        {
          name: "--wait",
          description: "Watch ACM status and display the status when complete",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "certs:auto:disable",
      description: "Disable ACM for an app",
      options: [
        {
          name: ["-c", "--confirm"],
          args: {},
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "certs:auto:enable",
      description: "Enable ACM status for an app",
      options: [
        {
          name: "--wait",
          description: "Watch ACM status and exit when complete",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "certs:auto:refresh",
      description: "Refresh ACM for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "certs:auto:wait",
      description: "Waits for the certificate to be activated",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
      ],
      hidden: true,
    },
    {
      name: "certs:generate",
      description: "Generate a key and a CSR or self-signed certificate",
      options: [
        {
          name: "--selfsigned",
          description: "Generate a self-signed certificate instead of a CSR",
        },
        {
          name: "--keysize",
          description: "RSA key size in bits (default: 2048)",
          args: {},
        },
        {
          name: "--owner",
          description: "Name of organization certificate belongs to",
          args: {},
        },
        {
          name: "--country",
          description: "Country of owner, as a two-letter ISO country code",
          args: {},
        },
        {
          name: "--area",
          description: "Sub-country area (state, province, etc.) of owner",
          args: {},
        },
        {
          name: "--city",
          description: "City of owner",
          args: {},
        },
        {
          name: "--subject",
          description: "Specify entire certificate subject",
          args: {},
        },
        {
          name: "--now",
          description: "Do not prompt for any owner information",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "domain",
        description: "Domain name to generate",
      },
    },
    {
      name: "certs:info",
      description: "Show certificate information for an SSL certificate",
      options: [
        {
          name: "--name",
          description: "Name to check info on",
          args: {},
        },
        {
          name: "--endpoint",
          description: "Endpoint to check info on",
          args: {},
        },
        {
          name: "--show-domains",
          description: "Show associated domains",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "certs:remove",
      description: "Remove an SSL certificate from an app",
      options: [
        {
          name: "--confirm",
          args: {},
          hidden: true,
        },
        {
          name: "--name",
          description: "Name to remove",
          args: {},
        },
        {
          name: "--endpoint",
          description: "Endpoint to remove",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "certs:update",
      description:
        "Update an SSL certificate on an app\nNote: certificates with PEM encoding are also valid\n",
      options: [
        {
          name: "--confirm",
          args: {},
          hidden: true,
        },
        {
          name: "--name",
          description: "Name to update",
          args: {},
        },
        {
          name: "--endpoint",
          description: "Endpoint to update",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "CRT",
          description: "Absolute path of the certificate file on disk",
        },
        {
          name: "KEY",
          description: "Absolute path of the key file on disk",
        },
      ],
    },
    {
      name: "ci",
      description: "Display the most recent CI runs for the given pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--watch",
          description: "Keep running and watch for new and update tests",
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "ci:config",
      description: "Display CI config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--shell"],
          description: "Output config vars in shell format",
        },
        {
          name: "--json",
          description: "Output config vars in json format",
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
      ],
    },
    {
      name: "ci:config:get",
      description: "Get a CI config var",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        {
          name: ["-s", "--shell"],
          description: "Output config var in shell format",
        },
      ],
      args: {
        name: "key",
        description: "Name of the config var key",
      },
    },
    {
      name: "ci:config:set",
      description: "Set CI config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
      ],
    },
    {
      name: "ci:config:unset",
      description: "Unset CI config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
      ],
    },
    {
      name: "ci:debug",
      description:
        "Opens an interactive test debugging session with the contents of the current directory",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: "--no-cache",
          description: "Start test run with an empty cache",
        },
        {
          name: "--no-setup",
          description: "Start test dyno without running test-setup",
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
      ],
    },
    {
      name: "ci:info",
      description: "Show the status of a specific test run",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--node",
          description: "The node number to show its setup and output",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
      ],
      args: {
        name: "test-run",
        description: "Auto-incremented test run number",
      },
    },
    {
      name: "ci:last",
      description:
        "Looks for the most recent run and returns the output of that run",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--node",
          description: "The node number to show its setup and output",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
      ],
    },
    {
      name: "ci:migrate-manifest",
      description:
        "App-ci.json is deprecated. Run this command to migrate to app.json with an environments key",
    },
    {
      name: "ci:open",
      description: "Open the Dashboard version of Heroku CI",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
      ],
    },
    {
      name: "ci:rerun",
      description: "Rerun tests against current directory",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
      ],
      args: {
        name: "number",
        description: "Auto-incremented test run number",
        isOptional: true,
      },
    },
    {
      name: "ci:run",
      description: "Run tests against current directory",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
      ],
    },
    {
      name: "clients",
      description: "List your OAuth clients",
      options: [
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
      ],
    },
    {
      name: "clients:create",
      description: "Create a new OAuth client",
      options: [
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
        {
          name: ["-s", "--shell"],
          description: "Output in shell format",
        },
      ],
      args: [
        {
          name: "name",
          description: "Name of the OAuth client",
        },
        {
          name: "redirect_uri",
          description: "Redirect URL of the OAuth client",
        },
      ],
    },
    {
      name: "clients:destroy",
      description: "Delete client by ID",
      args: {
        name: "id",
        description: "ID of the OAuth client",
      },
    },
    {
      name: "clients:info",
      description: "Show details of an oauth client",
      options: [
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
        {
          name: ["-s", "--shell"],
          description: "Output in shell format",
        },
      ],
      args: {
        name: "id",
        description: "ID of the OAuth client",
      },
    },
    {
      name: "clients:rotate",
      description: "Rotate OAuth client secret",
      options: [
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
        {
          name: ["-s", "--shell"],
          description: "Output in shell format",
        },
      ],
      args: {
        name: "id",
        description: "ID of the OAuth client",
      },
    },
    {
      name: "clients:update",
      description: "Update OAuth client",
      options: [
        {
          name: ["-n", "--name"],
          description: "Change the client name",
          args: {},
        },
        {
          name: "--url",
          description: "Change the client redirect URL",
          args: {},
        },
      ],
      args: {
        name: "id",
        description: "ID of the OAuth client",
      },
    },
    {
      name: "config",
      description: "Display the config vars for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--shell"],
          description: "Output config vars in shell format",
        },
        {
          name: ["-j", "--json"],
          description: "Output config vars in json format",
        },
      ],
    },
    {
      name: "config:edit",
      description:
        "Interactively edit config vars\nThis command opens the app config in a text editor set by $VISUAL or $EDITOR.\nAny variables added/removed/changed will be updated on the app after saving and closing the file",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "key",
        description: "Edit a single key",
      },
    },
    {
      name: "config:get",
      description: "Display a single config value for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--shell"],
          description: "Output config vars in shell format",
        },
      ],
      args: {
        name: "KEY",
        description: "Key name of the config var value",
      },
    },
    {
      name: "config:set",
      description: "Set one or more config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "config:add",
      description: "Set one or more config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "config:unset",
      description: "Unset one or more config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "config:remove",
      description: "Unset one or more config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "console",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--size"],
          description: "Dyno size",
          args: {},
        },
        {
          name: ["-e", "--env"],
          description:
            "Environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
      ],
      hidden: true,
    },
    {
      name: "container",
      description: "Use containers to build and deploy Heroku apps",
    },
    {
      name: "container:login",
      description: "Log in to Heroku Container Registry",
      options: [
        {
          name: ["-v", "--verbose"],
        },
      ],
    },
    {
      name: "container:logout",
      description: "Log out from Heroku Container Registry",
      options: [
        {
          name: ["-v", "--verbose"],
        },
      ],
    },
    {
      name: "container:pull",
      description: "Pulls an image from an app's process type",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-v", "--verbose"],
        },
      ],
    },
    {
      name: "container:push",
      description:
        "Builds, then pushes Docker images to deploy your Heroku app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-v", "--verbose"],
        },
        {
          name: ["-R", "--recursive"],
          description:
            "Pushes Dockerfile.<process> found in current and subdirectories",
        },
        {
          name: "--arg",
          description: "Set build-time variables",
          args: {},
        },
        {
          name: "--context-path",
          description:
            "Path to use as build context (defaults to Dockerfile dir)",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "container:release",
      description:
        "Releases previously pushed Docker images to your Heroku app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-v", "--verbose"],
        },
      ],
    },
    {
      name: "container:rm",
      description: "Remove the process type from your app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "container:run",
      description: "Builds, then runs the docker image locally",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--port"],
          description: "Port the app will run on",
          args: {
            default: "5000",
          },
        },
        {
          name: ["-v", "--verbose"],
        },
      ],
    },
    {
      name: "dashboard",
      description: "Display information about favorite apps",
      hidden: true,
    },
    {
      name: "domains",
      description: "List domains for an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
        {
          name: "--columns",
          description: "Only show provided columns (comma-separated)",
          args: {},
        },
        {
          name: "--sort",
          description: "Property to sort by (prepend '-' for descending)",
          args: {},
        },
        {
          name: "--filter",
          description:
            "Filter property by partial string matching, ex: name=foo",
          args: {},
        },
        {
          name: "--csv",
          description: "Output is csv format [alias: --output=csv]",
        },
        {
          name: "--output",
          description: "Output in a more machine friendly format",
          args: {
            suggestions: ["csv", "json", "yaml"],
          },
        },
        {
          name: ["-x", "--extended"],
          description: "Show extra columns",
        },
        {
          name: "--no-header",
          description: "Hide table header from output",
        },
      ],
    },
    {
      name: "domains:add",
      description: "Add a domain to an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-c", "--cert"],
          description:
            "The name of the SSL cert you want to use for this domain",
          args: {},
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
        {
          name: "--wait",
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "hostname",
        description: "Unique identifier of the domain or full hostname",
      },
    },
    {
      name: "domains:clear",
      description: "Remove all domains from an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "domains:info",
      description: "Show detailed information for a domain on an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "hostname",
        description: "Unique identifier of the domain or full hostname",
      },
    },
    {
      name: "domains:remove",
      description: "Remove a domain from an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "hostname",
        description: "Unique identifier of the domain or full hostname",
      },
    },
    {
      name: "domains:update",
      description:
        "Update a domain to use a different SSL certificate on an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--cert",
          description:
            "The name or id of the certificate you want to use for this domain",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "hostname",
        description: "Unique identifier of the domain or full hostname",
      },
    },
    {
      name: "domains:wait",
      description: "Wait for domain to be active for an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "hostname",
        description: "Unique identifier of the domain or full hostname",
      },
    },
    {
      name: "drains",
      description: "Display the log drains of an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-x", "--extended"],
          hidden: true,
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "drains:add",
      description: "Adds a log drain to an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "url",
        description: "URL of the log drain",
      },
    },
    {
      name: "drains:remove",
      description: "Removes a log drain from an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "url",
        description: "URL of the log drain",
      },
    },
    {
      name: "features",
      description: "List available app features",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "features:disable",
      description: "Disables an app feature",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "feature",
        description: "Unique identifier or name of the app feature",
      },
    },
    {
      name: "features:enable",
      description: "Enables an app feature",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "feature",
        description: "Unique identifier or name of the app feature",
      },
    },
    {
      name: "features:info",
      description: "Display information about a feature",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
      args: {
        name: "feature",
        description: "Unique identifier or name of the app feature",
      },
    },
    {
      name: "git:clone",
      description:
        "Clones a heroku app to your local machine at DIRECTORY (defaults to app name)",
      options: [
        {
          name: ["-a", "--app"],
          description: "The Heroku app to use",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {},
        },
      ],
      args: {
        name: "DIRECTORY",
        description: "Where to clone the app",
      },
    },
    {
      name: "git:credentials",
      description: "Internal command for git-credentials",
      args: {
        name: "command",
        description: "Command name of the git credentials",
      },
      hidden: true,
    },
    {
      name: "git:remote",
      description:
        "Adds a git remote to an app repo\nextra arguments will be passed to git remote add\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "The Heroku app to use",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "The git remote to create",
          args: {},
        },
      ],
    },
    {
      name: "keys",
      description: "Display your SSH keys",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-l", "--long"],
          description: "Display full SSH keys",
        },
      ],
    },
    {
      name: "keys:add",
      description: "Add an SSH key for a user",
      options: [
        {
          name: "--quiet",
          hidden: true,
        },
        {
          name: ["-y", "--yes"],
          description: "Automatically answer yes for all prompts",
        },
      ],
      args: {
        name: "key",
        description:
          "Absolute path to the key located on disk. If omitted, we use the default rsa key",
      },
    },
    {
      name: "keys:clear",
      description: "Remove all SSH keys for current user",
    },
    {
      name: "keys:remove",
      description: "Remove an SSH key from the user",
      args: {
        name: "key",
        description: "Email address of the user",
      },
    },
    {
      name: "labs",
      description: "List experimental features",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--json",
          description: "Display as json",
        },
      ],
    },
    {
      name: "labs:disable",
      description: "Disables an experimental feature",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--confirm",
          args: {},
        },
      ],
      args: {
        name: "feature",
        description: "Unique identifier or name of the account feature",
      },
    },
    {
      name: "labs:enable",
      description: "Enables an experimental feature",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "feature",
        description: "Unique identifier or name of the account feature",
      },
    },
    {
      name: "labs:info",
      description: "Show feature info",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--json",
          description: "Display as json",
        },
      ],
      args: {
        name: "feature",
        description: "Unique identifier or name of the account feature",
      },
    },
    {
      name: "local",
      description:
        "Run heroku app locally\nStart the application specified by a Procfile (defaults to ./Procfile)",
      options: [
        {
          name: ["-f", "--procfile"],
          description: "Use a different Procfile",
          args: {},
        },
        {
          name: ["-e", "--env"],
          description: "Location of env file (defaults to .env)",
          args: {},
        },
        {
          name: ["-p", "--port"],
          description: "Port to listen on",
          args: {},
        },
        {
          name: ["-r", "--restart"],
          description: "Restart process if it dies",
          hidden: true,
        },
        {
          name: ["-c", "--concurrency"],
          description: "Number of processes to start",
          args: {},
          hidden: true,
        },
      ],
      args: {
        name: "processname",
        description: "Name of the process",
        isOptional: true,
      },
    },
    {
      name: "local:start",
      description:
        "Run heroku app locally\nStart the application specified by a Procfile (defaults to ./Procfile)",
      options: [
        {
          name: ["-f", "--procfile"],
          description: "Use a different Procfile",
          args: {},
        },
        {
          name: ["-e", "--env"],
          description: "Location of env file (defaults to .env)",
          args: {},
        },
        {
          name: ["-p", "--port"],
          description: "Port to listen on",
          args: {},
        },
        {
          name: ["-r", "--restart"],
          description: "Restart process if it dies",
          hidden: true,
        },
        {
          name: ["-c", "--concurrency"],
          description: "Number of processes to start",
          args: {},
          hidden: true,
        },
      ],
      args: {
        name: "processname",
        description: "Name of the process",
        isOptional: true,
      },
    },
    {
      name: "local:run",
      description: "Run a one-off command",
      options: [
        {
          name: ["-e", "--env"],
          args: {},
        },
        {
          name: ["-p", "--port"],
          args: {},
        },
      ],
    },
    {
      name: "local:version",
      description: "Display node-foreman version",
    },
    {
      name: "logs",
      description:
        "Display recent log output\ndisable colors with --no-color, HEROKU_LOGS_COLOR=0, or HEROKU_COLOR=0\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-d", "--dyno-name"],
          description:
            'Only show output from this dyno (such as "web-123-456" or "worker.2")',
          args: {},
        },
        {
          name: "--force-colors",
          description: "Force use of colors (even on non-tty output)",
        },
        {
          name: "--no-color",
          hidden: true,
        },
        {
          name: ["-n", "--num"],
          description:
            "Number of lines to display (ignored for Fir generation apps)",
          args: {},
        },
        {
          name: ["-p", "--ps"],
          description: "Hidden alias for type",
          args: {},
          hidden: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--source"],
          description:
            'Only show output from this source (such as "app" or "heroku")',
          args: {},
        },
        {
          name: ["-t", "--tail"],
          description:
            "Continually stream logs (defaults to true for Fir generation apps)",
        },
        {
          name: ["-p", "--process-type"],
          description:
            'Only show output from this process type (such as "web" or "worker")',
          args: {},
        },
      ],
    },
    {
      name: "maintenance",
      description: "Display the current maintenance status of app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "maintenance:off",
      description: "Take the app out of maintenance mode",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "maintenance:on",
      description: "Put the app into maintenance mode",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "members",
      description: "List members of a team",
      options: [
        {
          name: ["-r", "--role"],
          description: "Filter by role",
          args: {},
        },
        {
          name: "--pending",
          description: "Filter by pending team invitations",
        },
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
          isRequired: true,
        },
      ],
    },
    {
      name: "members:add",
      description: "Adds a user to a team",
      options: [
        {
          name: ["-r", "--role"],
          description: "Member role (admin, collaborator, member, owner)",
          args: {},
          isRequired: true,
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "email",
        description: "Email address of the team member",
      },
    },
    {
      name: "members:remove",
      description: "Removes a user from a team",
      options: [
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
          isRequired: true,
        },
      ],
    },
    {
      name: "members:set",
      description: "Sets a members role in a team",
      options: [
        {
          name: ["-r", "--role"],
          description: "Member role (admin, collaborator, member, owner)",
          args: {},
          isRequired: true,
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
          isRequired: true,
        },
      ],
    },
    {
      name: "notifications",
      description: "Display notifications",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--all",
          description:
            "View all notifications (not just the ones for the current app)",
        },
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: "--read",
          description: "Show notifications already read",
        },
      ],
    },
    {
      name: "orgs",
      description: "List the teams that you are a member of",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: "--enterprise",
          description: "Filter by enterprise teams",
        },
        {
          name: "--teams",
          description: "Filter by teams",
          hidden: true,
        },
      ],
    },
    {
      name: "orgs:open",
      description: "Open the team interface in a browser window",
      options: [
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:backups",
      description: "List database backups",
      options: [
        {
          name: ["-v", "--verbose"],
          hidden: true,
        },
        {
          name: ["-c", "--confirm"],
          args: {},
          hidden: true,
        },
        {
          name: ["-o", "--output"],
          args: {},
          hidden: true,
        },
        {
          name: "--wait-interval",
          args: {},
          hidden: true,
        },
        {
          name: "--at",
          args: {},
          hidden: true,
        },
        {
          name: ["-q", "--quiet"],
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "pg:backups:cancel",
      description: "Cancel an in-progress backup or restore (default newest)",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "backup_id",
        description:
          "ID of the backup. If omitted, we use the last unfinished backup ID",
      },
    },
    {
      name: "pg:backups:capture",
      description: "Capture a new backup",
      options: [
        {
          name: "--wait-interval",
          args: {},
        },
        {
          name: ["-v", "--verbose"],
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:backups:delete",
      description: "Delete a backup",
      options: [
        {
          name: ["-c", "--confirm"],
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "backup_id",
        description: "ID of the backup",
      },
    },
    {
      name: "pg:backups:download",
      description: "Downloads database backup",
      options: [
        {
          name: ["-o", "--output"],
          description: "Location to download to. Defaults to latest.dump",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "backup_id",
        description: "ID of the backup. If omitted, we use the last backup ID",
      },
    },
    {
      name: "pg:backups:info",
      description: "Get information about a specific backup",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "backup_id",
        description: "ID of the backup. If omitted, we use the last backup ID",
      },
    },
    {
      name: "pg:backups:restore",
      description: "Restore a backup (default latest) to a database",
      options: [
        {
          name: "--wait-interval",
          args: {
            default: "3",
          },
        },
        {
          name: ["-e", "--extensions"],
          description:
            "Comma-separated list of extensions to pre-install in the public schema\ndefaults to saving the latest database to DATABASE_URL\n",
          args: {},
        },
        {
          name: ["-v", "--verbose"],
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "backup",
          description: "URL or backup ID from another app",
        },
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
      ],
    },
    {
      name: "pg:backups:schedule",
      description: "Schedule daily backups for given database",
      options: [
        {
          name: "--at",
          description:
            "At a specific (24h) hour in the given timezone. Defaults to UTC. --at '[HOUR]:00 [TIMEZONE]'",
          args: {},
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:backups:schedules",
      description: "List backup schedule",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "pg:backups:unschedule",
      description: "Stop daily backups",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use a random database attached to the app",
      },
    },
    {
      name: "pg:backups:url",
      description: "Get secret but publicly accessible URL of a backup",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "backup_id",
        description: "ID of the backup. If omitted, we use the last backup ID",
      },
    },
    {
      name: "pg:bloat",
      description:
        "Show table and index bloat in your database ordered by most wasteful",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:blocking",
      description:
        "Display queries holding locks other queries are waiting to be released",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:connection-pooling:attach",
      description: "Add an attachment to a database using connection pooling",
      options: [
        {
          name: "--as",
          description: "Name for add-on attachment",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:copy",
      description: "Copy all data from source db to target",
      options: [
        {
          name: "--wait-interval",
          args: {},
        },
        {
          name: "--verbose",
        },
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "source",
          description:
            "Config var exposed to the owning app containing the source database URL",
        },
        {
          name: "target",
          description:
            "Config var exposed to the owning app containing the target database URL",
        },
      ],
    },
    {
      name: "pg:credentials",
      description: "Show information on credentials in the database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:credentials:create",
      description:
        "Create credential within database\nExample:\n\n    heroku pg:credentials:create postgresql-something-12345 --name new-cred-name\n",
      options: [
        {
          name: ["-n", "--name"],
          description: "Name of the new credential within the database",
          args: {},
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:credentials:destroy",
      description: "Destroy credential within database",
      options: [
        {
          name: ["-n", "--name"],
          description: "Unique identifier for the credential",
          args: {},
          isRequired: true,
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:credentials:repair-default",
      description:
        "Repair the permissions of the default credential within database",
      options: [
        {
          name: ["-c", "--confirm"],
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:credentials:rotate",
      description: "Rotate the database credentials",
      options: [
        {
          name: ["-n", "--name"],
          description:
            "Which credential to rotate (default credentials if not specified and --all is not used)",
          args: {},
        },
        {
          name: "--all",
          description: "Rotate all credentials",
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
        {
          name: "--force",
          description: "Forces rotating the targeted credentials",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:credentials:url",
      description: "Show information on a database credential",
      options: [
        {
          name: ["-n", "--name"],
          description:
            "Which credential to show (default credentials if not specified)",
          args: {
            default: "default",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:diagnose",
      description:
        "Run or view diagnostics report\ndefaults to DATABASE_URL database if no DATABASE is specified\nif REPORT_ID is specified instead, a previous report is displayed\n\n",
      options: [
        {
          name: "--json",
          description: "Format output as JSON",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "DATABASE|REPORT_ID",
        description:
          "Config var exposed to the owning app containing the database URL or the report ID",
      },
    },
    {
      name: "pg:info",
      description: "Show database information",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use all databases",
      },
    },
    {
      name: "pg",
      description: "Show database information",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use all databases",
      },
    },
    {
      name: "pg:kill",
      description: "Kill a query",
      options: [
        {
          name: ["-f", "--force"],
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "pid",
          description: "ID of the process",
        },
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
      ],
    },
    {
      name: "pg:killall",
      description: "Terminates all connections for all credentials",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:links",
      description: "Lists all databases and information on link",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:links:create",
      description:
        "Create a link between data stores\nExample:\nheroku pg:links:create HEROKU_REDIS_RED HEROKU_POSTGRESQL_CERULEAN\n",
      options: [
        {
          name: "--as",
          description: "Name of link to create",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "remote",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::`",
        },
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::`",
        },
      ],
    },
    {
      name: "pg:links:destroy",
      description: "Destroys a link between data stores",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::`",
        },
        {
          name: "link",
          description: "Name of the linked data store",
        },
      ],
    },
    {
      name: "pg:locks",
      description: "Display queries with active locks",
      options: [
        {
          name: ["-t", "--truncate"],
          description: "Truncates queries to 40 characters",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:maintenance",
      description: "Show current maintenance information",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:maintenance:run",
      description: "Start maintenance",
      options: [
        {
          name: ["-f", "--force"],
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:maintenance:window",
      description: "Set weekly maintenance window.\nAll times are in UTC.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "window",
          description: "Timestamp of the maintenance window",
        },
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
      ],
    },
    {
      name: "pg:outliers",
      description:
        "Show 10 queries that have longest execution time in aggregate",
      options: [
        {
          name: "--reset",
          description: "Resets statistics gathered by pg_stat_statements",
        },
        {
          name: ["-t", "--truncate"],
          description: "Truncate queries to 40 characters",
        },
        {
          name: ["-n", "--num"],
          description: "The number of queries to display (default: 10)",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:promote",
      description: "Sets DATABASE as your DATABASE_URL",
      options: [
        {
          name: ["-f", "--force"],
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::`",
      },
    },
    {
      name: "pg:ps",
      description: "View active queries with execution time",
      options: [
        {
          name: ["-v", "--verbose"],
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:psql",
      description: "Open a psql shell to the database",
      options: [
        {
          name: ["-c", "--command"],
          description: "SQL command to run",
          args: {},
        },
        {
          name: ["-f", "--file"],
          description: "SQL file to run",
          args: {},
        },
        {
          name: "--credential",
          description: "Credential to use",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "psql",
      description: "Open a psql shell to the database",
      options: [
        {
          name: ["-c", "--command"],
          description: "SQL command to run",
          args: {},
        },
        {
          name: ["-f", "--file"],
          description: "SQL file to run",
          args: {},
        },
        {
          name: "--credential",
          description: "Credential to use",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:pull",
      description:
        "Pull Heroku database into local or remote database\nPull from SOURCE into TARGET.\n\nTARGET must be one of:\n* a database name (i.e. on a local PostgreSQL server)  => TARGET must not exist and will be created\n* a fully qualified URL to a local PostgreSQL server   => TARGET must not exist and will be created\n* a fully qualified URL to a remote PostgreSQL server  => TARGET must exist and be empty\n\nTo delete a local database run dropdb TARGET.\nTo create an empty remote database, run createdb with connection command-line options (run createdb --help for details).\n",
      options: [
        {
          name: "--exclude-table-data",
          description:
            "Tables for which data should be excluded (use ';' to split multiple names)",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "source",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "target",
          description: "PostgreSQL connection string for the target database",
        },
      ],
    },
    {
      name: "pg:push",
      description:
        "Push local or remote into Heroku database\nPush from SOURCE into TARGET. TARGET must be empty.\n\nTo empty a Heroku database for push run heroku pg:reset\n\nSOURCE must be either the name of a database existing on your localhost or the\nfully qualified URL of a remote database.\n",
      options: [
        {
          name: "--exclude-table-data",
          description:
            "Tables for which data should be excluded (use ';' to split multiple names)",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "source",
          description: "PostgreSQL connection string for the source database",
        },
        {
          name: "target",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
      ],
    },
    {
      name: "pg:reset",
      description: "Delete all data in DATABASE",
      options: [
        {
          name: ["-e", "--extensions"],
          description:
            "Comma-separated list of extensions to pre-install in the public schema",
          args: {},
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:settings",
      description: "Show your current database settings",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:settings:auto-explain",
      description:
        "Automatically log execution plans of queries without running EXPLAIN by hand.\nThe auto_explain module is loaded at session-time so existing connections will not be logged.\nRestart your Heroku app and/or restart existing connections for logging to start taking place.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description:
            "Boolean indicating if execution plans of queries will be logged for future connections",
        },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-analyze",
      description:
        "Shows actual run times on the execution plan.\nThis is equivalent to calling EXPLAIN ANALYZE.\n\nWARNING: EXPLAIN ANALYZE will be run on ALL queries, not just logged queries. This can cause significant performance impacts to your database and should be used with caution.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description: "Boolean indicating if execution plans get logged",
        },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-buffers",
      description:
        "Includes buffer usage statistics when execution plans are logged.\nThis is equivalent to calling EXPLAIN BUFFERS and can only be used in conjunction with pg:settings:auto-explain:log-analyze turned on.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description:
            "Boolean indicating if the database has buffer statistics enabled",
        },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-format",
      description:
        "Selects the EXPLAIN output format to be used\nThe allowed values are text, xml, json, and yaml. The default is text.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description:
            "Format of the log output\n<options: text|json|yaml|xml>",
          suggestions: ["text", "json", "yaml", "xml"],
        },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-min-duration",
      description:
        "Sets the minimum execution time in milliseconds for a statement's plan to be logged.\nSetting this value to 0 will log all queries. Setting this value to -1 will disable logging entirely.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description:
            "Minimum duration in milliseconds for queries before logging execution plans. A value of -1 disables it. A value of 0 logs all query execution plans",
        },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-nested-statements",
      description: "Nested statements are included in the execution plan's log",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description:
            "Boolean indicating if execution plan logs include nested statements",
        },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-triggers",
      description:
        "Includes trigger execution statistics in execution plan logs.\nThis parameter can only be used in conjunction with pg:settings:auto-explain:log-analyze turned on.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description:
            "Boolean indicating if the database has trigger execution statistics enabled",
        },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-verbose",
      description:
        "Include verbose details in execution plans.\n    This is equivalent to calling EXPLAIN VERBOSE",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description:
            "Boolean indicating if the database has verbose execution plan logging enabled",
        },
      ],
    },
    {
      name: "pg:settings:explain-data-connector-details",
      description:
        'Displays stats on replication slots on your database, the default value is "off"\n',
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description:
            "Boolean indicating if data replication slot details get logged",
        },
      ],
    },
    {
      name: "pg:settings:log-connections",
      description:
        "Controls whether a log message is produced when a login attempt is made. Default is true.\nSetting log_connections to false stops emitting log messages for all attempts to login to the database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description:
            "Boolean indicating if database login attempts get logged",
        },
      ],
    },
    {
      name: "pg:settings:log-lock-waits",
      description:
        "Controls whether a log message is produced when a session waits longer than the deadlock_timeout to acquire a lock. deadlock_timeout is set to 1 second\nDelays due to lock contention occur when multiple transactions are trying to access the same resource at the same time.\nApplications and their query patterns should try to avoid changes to many different tables within the same transaction.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description:
            "Boolean indicating if a message gets logged when a session waits longer than the deadlock_timeout to acquire a lock",
        },
      ],
    },
    {
      name: "pg:settings:log-min-duration-statement",
      description:
        "The duration of each completed statement will be logged if the statement completes after the time specified by VALUE.\nVALUE needs to specified as a whole number, in milliseconds.\nSetting log_min_duration_statement to zero prints all statement durations and -1 will disable logging statement durations.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description:
            "Milliseconds to wait for a statement to complete before logging it",
        },
      ],
    },
    {
      name: "pg:settings:log-min-error-statement",
      description:
        'Log-min-error-statement controls the logging of SQL statements that cause an error at a specified severity level.\nThis setting is useful to prevent logging SQL queries that might contain sensitive information.\nUse this setting to prevent logging SQL queries that contain sensitive information. Default is "error".\n',
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          suggestions: ["error", "log", "fatal", "panic"],
        },
      ],
    },
    {
      name: "pg:settings:log-statement",
      description:
        "Log_statement controls which SQL statements are logged.\nValid values for VALUE:\nnone - No statements are logged\nddl  - All data definition statements, such as CREATE, ALTER and DROP will be logged\nmod  - Includes all statements from ddl as well as data-modifying statements such as INSERT, UPDATE, DELETE, TRUNCATE, COPY\nall  - All statements are logged\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description:
            "Type of SQL statements to log\n<options: none|ddl|mod|all>",
          suggestions: ["none", "ddl", "mod", "all"],
        },
      ],
    },
    {
      name: "pg:settings:track-functions",
      description:
        "Track_functions controls tracking of function call counts and time used. Default is none.\nValid values for VALUE:\nnone - No functions are tracked (default)\npl   - Only procedural language functions are tracked\nall  - All functions, including SQL and C language functions, are tracked. Simple SQL-language that are inlined are not tracked",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        },
        {
          name: "value",
          description: "Function type to track\n<options: none|pl|all>",
          suggestions: ["none", "pl", "all"],
        },
      ],
    },
    {
      name: "pg:unfollow",
      description:
        "Stop a replica from following and make it a writeable database",
      options: [
        {
          name: ["-c", "--confirm"],
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::`",
      },
    },
    {
      name: "pg:upgrade",
      description:
        "For an Essential-* plan, this command upgrades the database's PostgreSQL version. For a Standard-tier and higher plan, this command unfollows the leader database before upgrading the PostgreSQL version.\nTo upgrade to another PostgreSQL version, use pg:copy instead\n",
      options: [
        {
          name: ["-c", "--confirm"],
          args: {},
        },
        {
          name: ["-v", "--version"],
          description: "PostgreSQL version to upgrade to",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:vacuum-stats",
      description:
        "Show dead rows and whether an automatic vacuum is expected to be triggered",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
      },
    },
    {
      name: "pg:wait",
      description: "Blocks until database is available",
      options: [
        {
          name: "--wait-interval",
          description:
            "How frequently to poll in seconds (to avoid rate limiting)",
          args: {},
        },
        {
          name: "--no-notify",
          description: "Do not show OS notification",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use all databases",
      },
    },
    {
      name: "pipelines",
      description: "List pipelines you have access to",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "pipelines:add",
      description:
        "Add this app to a pipeline\nThe app and pipeline names must be specified.\nThe stage of the app will be guessed based on its name if not specified",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--stage"],
          description: "Stage of first app in pipeline",
          args: {},
        },
      ],
      args: {
        name: "pipeline",
        description: "Name of pipeline",
      },
    },
    {
      name: "pipelines:connect",
      description: "Connect a GitHub repo to an existing pipeline",
      options: [
        {
          name: ["-r", "--repo"],
          description: "The GitHub repository to connect to",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "name",
        description: "Name of pipeline",
      },
    },
    {
      name: "pipelines:create",
      description:
        "Create a new pipeline\n  An existing app must be specified as the first app in the pipeline.\n  The pipeline name will be inferred from the app name if not specified.\n  The stage of the app will be guessed based on its name if not specified.\n  The pipeline owner will be the user creating the pipeline if not specified with -t for teams or -o for orgs",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--stage"],
          description: "Stage of first app in pipeline",
          args: {},
        },
        {
          name: ["-t", "--team"],
          description: "The team which will own the apps",
          args: {},
        },
      ],
      args: {
        name: "name",
        description: "Name of pipeline (defaults to basename of the app)",
        isOptional: true,
      },
    },
    {
      name: "pipelines:destroy",
      description: "Destroy a pipeline",
      args: {
        name: "pipeline",
        description: "Name of pipeline",
      },
    },
    {
      name: "pipelines:diff",
      description:
        "Compares the latest release of this app to its downstream app(s)",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "pipelines:info",
      description: "Show list of apps in a pipeline",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: "--with-owners",
          description: "Shows owner of every app",
          hidden: true,
        },
      ],
      args: {
        name: "pipeline",
        description: "Pipeline to show list of apps for",
      },
    },
    {
      name: "pipelines:open",
      description: "Open a pipeline in dashboard",
      args: {
        name: "pipeline",
        description: "Name of pipeline",
      },
    },
    {
      name: "pipelines:promote",
      description:
        "Promote the latest release of this app to its downstream app(s)",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-t", "--to"],
          description: "Comma separated list of apps to promote to",
          args: {},
        },
      ],
    },
    {
      name: "pipelines:remove",
      description: "Remove this app from its pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "pipelines:rename",
      description: "Rename a pipeline",
      args: [
        {
          name: "pipeline",
          description: "Current name of pipeline",
        },
        {
          name: "name",
          description: "New name of pipeline",
        },
      ],
    },
    {
      name: "pipelines:setup",
      description:
        "Bootstrap a new pipeline with common settings and create a production and staging app (requires a fully formed app.json in the repo)",
      options: [
        {
          name: ["-t", "--team"],
          description:
            "The team to assign pipeline ownership to (defaults to current user)",
          args: {},
        },
        {
          name: ["-y", "--yes"],
          description: "Accept all default settings without prompting",
        },
      ],
      args: [
        {
          name: "name",
          description: "Name of pipeline",
          isOptional: true,
        },
        {
          name: "repo",
          description: "A GitHub repository to connect the pipeline to",
          isOptional: true,
        },
      ],
    },
    {
      name: "pipelines:transfer",
      description: "Transfer ownership of a pipeline",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
          isRequired: true,
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
      ],
      args: {
        name: "owner",
        description: "The owner to transfer the pipeline to",
      },
    },
    {
      name: "pipelines:update",
      description: "Update the app's stage in a pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--stage"],
          description: "New stage of app",
          args: {},
          isRequired: true,
        },
      ],
    },
    {
      name: "ps",
      description: "List dynos for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--json",
          description: "Display as json",
        },
        {
          name: ["-x", "--extended"],
          hidden: true,
        },
      ],
    },
    {
      name: "ps:autoscale:disable",
      description: "Disable web dyno autoscaling",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "ps:autoscale:enable",
      description: "Enable web dyno autoscaling",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--min",
          description: "Minimum number of dynos",
          args: {},
          isRequired: true,
        },
        {
          name: "--max",
          description: "Maximum number of dynos",
          args: {},
          isRequired: true,
        },
        {
          name: "--p95",
          description: "Desired p95 response time",
          args: {},
        },
        {
          name: "--notifications",
          description:
            "Receive email notifications when the max dyno limit is reached",
        },
      ],
    },
    {
      name: "ps:restart",
      description:
        "Restart an app dyno or process type\nif neither --dyno nor --type are specified, restarts all dynos on app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to restart",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to restart",
          args: {},
        },
      ],
      args: {
        name: "dyno",
        description: "Name of the dyno to restart",
        isOptional: true,
      },
    },
    {
      name: "dyno:restart",
      description:
        "Restart an app dyno or process type\nif neither --dyno nor --type are specified, restarts all dynos on app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to restart",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to restart",
          args: {},
        },
      ],
      args: {
        name: "dyno",
        description: "Name of the dyno to restart",
        isOptional: true,
      },
    },
    {
      name: "restart",
      description:
        "Restart an app dyno or process type\nif neither --dyno nor --type are specified, restarts all dynos on app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to restart",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to restart",
          args: {},
        },
      ],
      args: {
        name: "dyno",
        description: "Name of the dyno to restart",
        isOptional: true,
      },
    },
    {
      name: "ps:scale",
      description:
        "Scale dyno quantity up or down\nAppending a size (eg. web=2:Standard-2X) allows simultaneous scaling and resizing.\n\nOmitting any arguments will display the app's current dyno formation, in a\nformat suitable for passing back into ps:scale.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "dyno:scale",
      description:
        "Scale dyno quantity up or down\nAppending a size (eg. web=2:Standard-2X) allows simultaneous scaling and resizing.\n\nOmitting any arguments will display the app's current dyno formation, in a\nformat suitable for passing back into ps:scale.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "scale",
      description:
        "Scale dyno quantity up or down\nAppending a size (eg. web=2:Standard-2X) allows simultaneous scaling and resizing.\n\nOmitting any arguments will display the app's current dyno formation, in a\nformat suitable for passing back into ps:scale.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "ps:stop",
      description: "Stop an app dyno or process type",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to stop",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to stop",
          args: {},
        },
      ],
      args: {
        name: "dyno",
        description: "Name of the dyno to stop",
        isOptional: true,
      },
    },
    {
      name: "dyno:stop",
      description: "Stop an app dyno or process type",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to stop",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to stop",
          args: {},
        },
      ],
      args: {
        name: "dyno",
        description: "Name of the dyno to stop",
        isOptional: true,
      },
    },
    {
      name: "ps:kill",
      description: "Stop an app dyno or process type",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to stop",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to stop",
          args: {},
        },
      ],
      args: {
        name: "dyno",
        description: "Name of the dyno to stop",
        isOptional: true,
      },
    },
    {
      name: "dyno:kill",
      description: "Stop an app dyno or process type",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to stop",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to stop",
          args: {},
        },
      ],
      args: {
        name: "dyno",
        description: "Name of the dyno to stop",
        isOptional: true,
      },
    },
    {
      name: "stop",
      description: "Stop an app dyno or process type",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to stop",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to stop",
          args: {},
        },
      ],
      args: {
        name: "dyno",
        description: "Name of the dyno to stop",
        isOptional: true,
      },
    },
    {
      name: "kill",
      description: "Stop an app dyno or process type",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to stop",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to stop",
          args: {},
        },
      ],
      args: {
        name: "dyno",
        description: "Name of the dyno to stop",
        isOptional: true,
      },
    },
    {
      name: "ps:type",
      description:
        "Manage dyno sizes\nCalled with no arguments shows the current dyno size.\n\nCalled with one argument sets the size.\nWhere SIZE is one of eco|basic|standard-1x|standard-2x|performance\n\nCalled with 1..n TYPE=SIZE arguments sets the quantity per type.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "ps:resize",
      description:
        "Manage dyno sizes\nCalled with no arguments shows the current dyno size.\n\nCalled with one argument sets the size.\nWhere SIZE is one of eco|basic|standard-1x|standard-2x|performance\n\nCalled with 1..n TYPE=SIZE arguments sets the quantity per type.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "dyno:resize",
      description:
        "Manage dyno sizes\nCalled with no arguments shows the current dyno size.\n\nCalled with one argument sets the size.\nWhere SIZE is one of eco|basic|standard-1x|standard-2x|performance\n\nCalled with 1..n TYPE=SIZE arguments sets the quantity per type.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "resize",
      description:
        "Manage dyno sizes\nCalled with no arguments shows the current dyno size.\n\nCalled with one argument sets the size.\nWhere SIZE is one of eco|basic|standard-1x|standard-2x|performance\n\nCalled with 1..n TYPE=SIZE arguments sets the quantity per type.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "dyno:type",
      description:
        "Manage dyno sizes\nCalled with no arguments shows the current dyno size.\n\nCalled with one argument sets the size.\nWhere SIZE is one of eco|basic|standard-1x|standard-2x|performance\n\nCalled with 1..n TYPE=SIZE arguments sets the quantity per type.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "ps:wait",
      description:
        "Wait for all dynos to be running latest version after a release",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-t", "--type"],
          description: "Wait for one specific dyno type",
          args: {},
        },
        {
          name: ["-w", "--wait-interval"],
          description:
            "How frequently to poll in seconds (to avoid hitting Heroku API rate limits)",
          args: {
            default: "10",
          },
        },
        {
          name: ["-R", "--with-run"],
          description: "Whether to wait for one-off run dynos",
        },
      ],
    },
    {
      name: "rake",
      options: [
        {
          name: ["-a", "--app"],
          description: "Parent app used by review apps",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--size"],
          description: "Dyno size",
          args: {},
        },
        {
          name: ["-x", "--exit-code"],
          description: "Passthrough the exit code of the remote command",
        },
        {
          name: ["-e", "--env"],
          description:
            "Environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
        {
          name: "--no-tty",
          description: "Force the command to not run in a tty",
        },
      ],
      hidden: true,
    },
    {
      name: "redis:cli",
      description: "Opens a redis prompt",
      options: [
        {
          name: ["-c", "--confirm"],
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Name of the Key-Value Store database. If omitted, it defaults to the primary database associated with the app",
      },
    },
    {
      name: "redis:credentials",
      description: "Display credentials information",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--reset",
          description: "Reset credentials",
        },
      ],
      args: {
        name: "database",
        description:
          "Name of the Key-Value Store database. If omitted, it defaults to the primary database associated with the app",
        isOptional: true,
      },
    },
    {
      name: "redis:info",
      description: "Gets information about redis",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
      ],
      args: {
        name: "database",
        description:
          "Name of the Key-Value Store database. If omitted, it defaults to the primary database associated with the app",
      },
    },
    {
      name: "redis",
      description: "Gets information about redis",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
      ],
      args: {
        name: "database",
        description:
          "Name of the Key-Value Store database. If omitted, it defaults to the primary database associated with the app",
      },
    },
    {
      name: "redis:keyspace-notifications",
      description:
        'Set the keyspace notifications configuration\nSet the configuration to enable keyspace notification events:\nK     Keyspace events, published with __keyspace@<db>__ prefix.\nE     Keyevent events, published with __keyevent@<db>__ prefix.\ng     Generic commands (non-type specific) like DEL, EXPIRE, RENAME, ...\n$     String commands\nl     List commands\ns     Set commands\nh     Hash commands\nz     Sorted set commands\nt     Stream commands\nx     Expired events (events generated every time a key expires)\ne     Evicted events (events generated when a key is evicted for maxmemory)\nm     Key miss events (events generated when a key that doesn\'t exist is accessed)\nA     Alias for "g$lshztxe", so that the "AKE" string means all the events except "m".\n\npass an empty string (\'\') to disable keyspace notifications\n',
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-c", "--config"],
          description: "Set keyspace notifications configuration",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "database",
        description:
          "Name of the Key-Value Store database. If omitted, it defaults to the primary database associated with the app",
      },
    },
    {
      name: "redis:maintenance",
      description:
        "Manage maintenance windows\nSet or change the maintenance window for your Redis instance\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-w", "--window"],
          description:
            'Set weekly UTC maintenance window (format: "Day HH:MM", where MM is 00 or 30)',
          args: {},
        },
        {
          name: "--run",
          description: "Start maintenance",
        },
        {
          name: ["-f", "--force"],
          description:
            "Start maintenance without entering application maintenance mode",
        },
      ],
      args: {
        name: "database",
        description:
          "Name of the Key-Value Store database. If omitted, it defaults to the primary database associated with the app",
        isOptional: true,
      },
    },
    {
      name: "redis:maxmemory",
      description:
        "Set the key eviction policy when instances reach their storage limit\n  Available policies for key eviction include:\n\n  noeviction      # returns errors when memory limit is reached\n  allkeys-lfu     # removes less frequently used keys first\n  volatile-lfu    # removes less frequently used keys first that have an expiry set\n  allkeys-lru     # removes less recently used keys first\n  volatile-lru    # removes less recently used keys first that have an expiry set\n  allkeys-random  # evicts random keys\n  volatile-random # evicts random keys but only those that have an expiry set\n  volatile-ttl    # only evicts keys with an expiry set and a short TTL\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-p", "--policy"],
          description: "Set policy name",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Name of the Key-Value Store database. If omitted, it defaults to the primary database associated with the app",
      },
    },
    {
      name: "redis:promote",
      description: "Sets DATABASE as your REDIS_URL",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Name of the Key-Value Store database. If omitted, it defaults to the primary database associated with the app",
        isOptional: true,
      },
    },
    {
      name: "redis:stats-reset",
      description:
        "Reset all stats covered by RESETSTAT (https://redis.io/commands/config-resetstat)",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Name of the Key-Value Store database. If omitted, it defaults to the primary database associated with the app",
      },
    },
    {
      name: "redis:timeout",
      description:
        "Set the number of seconds to wait before killing idle connections\n    A value of zero means that connections will not be closed.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--seconds"],
          description: "Set timeout value",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "database",
        description:
          "Name of the Key-Value Store database. If omitted, it defaults to the primary database associated with the app",
      },
    },
    {
      name: "redis:upgrade",
      description: "Perform in-place version upgrade",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-v", "--version"],
          args: {},
          isRequired: true,
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Name of the Key-Value Store database. If omitted, it defaults to the primary database associated with the app",
      },
    },
    {
      name: "redis:wait",
      description: "Wait for Redis instance to be available",
      options: [
        {
          name: "--wait-interval",
          description: "How frequently to poll in seconds",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Name of the Key-Value Store database. If omitted, it defaults to the primary database associated with the app",
        isOptional: true,
      },
    },
    {
      name: "regions",
      description: "List available regions for deployment",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: "--private",
          description: "Show regions for private spaces",
        },
        {
          name: "--common",
          description: "Show regions for common runtime",
        },
      ],
    },
    {
      name: "releases",
      description: "Display the releases for an app",
      options: [
        {
          name: ["-n", "--num"],
          description: "Number of releases to show",
          args: {},
        },
        {
          name: "--json",
          description: "Output releases in json format",
        },
        {
          name: ["-x", "--extended"],
          hidden: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
      ],
    },
    {
      name: "releases:info",
      description: "View detailed information for a release",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-s", "--shell"],
          description: "Output in shell format",
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "release",
        description:
          "ID of the release. If omitted, we use the last release ID",
      },
    },
    {
      name: "releases:output",
      description: "View the release command output",
      options: [
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "release",
        description:
          "ID of the release. If omitted, we use the last release ID",
      },
    },
    {
      name: "releases:rollback",
      description:
        "Roll back to a previous release.\n\n    If RELEASE is not specified, it will roll back to the last eligible release.\n",
      options: [
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "release",
        description:
          "ID of the release. If omitted, we use the last eligible release",
      },
    },
    {
      name: "rollback",
      description:
        "Roll back to a previous release.\n\n    If RELEASE is not specified, it will roll back to the last eligible release.\n",
      options: [
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "release",
        description:
          "ID of the release. If omitted, we use the last eligible release",
      },
    },
    {
      name: "reviewapps:disable",
      description:
        "Disable review apps and/or settings on an existing pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "Parent app used by review apps",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
          isRequired: true,
        },
        {
          name: "--autodeploy",
          description: "Disable autodeployments",
          hidden: true,
        },
        {
          name: "--autodestroy",
          description: "Disable automatically destroying review apps",
          hidden: true,
        },
        {
          name: "--wait-for-ci",
          description: "Disable wait for CI",
          hidden: true,
        },
        {
          name: "--no-autodeploy",
          description: "Disable autodeployments",
        },
        {
          name: "--no-autodestroy",
          description: "Disable automatically destroying review apps",
        },
        {
          name: "--no-wait-for-ci",
          description: "Disable wait for CI",
        },
      ],
    },
    {
      name: "reviewapps:enable",
      description: "Enable review apps and/or settings on an existing pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "Parent app used by review apps",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
          isRequired: true,
        },
        {
          name: "--autodeploy",
          description: "Autodeploy the review app",
        },
        {
          name: "--autodestroy",
          description: "Autodestroy the review app",
        },
        {
          name: "--wait-for-ci",
          description: "Wait for CI to pass before deploying",
        },
      ],
    },
    {
      name: "run",
      description:
        "Run a one-off process inside a heroku dyno\nShows a notification if the dyno takes more than 20 seconds to start",
      options: [
        {
          name: ["-a", "--app"],
          description: "Parent app used by review apps",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--size"],
          description: "Dyno size",
          args: {},
        },
        {
          name: "--type",
          description: "Process type",
          args: {},
        },
        {
          name: ["-x", "--exit-code"],
          description: "Passthrough the exit code of the remote command",
        },
        {
          name: ["-e", "--env"],
          description:
            "Environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
        {
          name: "--no-tty",
          description: "Force the command to not run in a tty",
        },
        {
          name: "--listen",
          description: "Listen on a local port",
          hidden: true,
        },
        {
          name: "--no-notify",
          description:
            "Disables notification when dyno is up (alternatively use HEROKU_NOTIFICATIONS=0)",
        },
      ],
    },
    {
      name: "run:detached",
      description: "Run a detached dyno, where output is sent to your logs",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-e", "--env"],
          description:
            "Environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
        {
          name: ["-s", "--size"],
          description: "Dyno size",
          args: {},
        },
        {
          name: ["-t", "--tail"],
          description: "Continually stream logs",
        },
        {
          name: "--type",
          description: "Process type",
          args: {},
        },
      ],
    },
    {
      name: "run:inside",
      description:
        "Run a command inside an existing dyno (for Fir-generation apps only)",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-x", "--exit-code"],
          description: "Passthrough the exit code of the remote command",
        },
        {
          name: "--listen",
          description: "Listen on a local port",
          hidden: true,
        },
        {
          name: "--no-launcher",
          description: "Don’t prepend ‘launcher’ before a command",
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {
          name: "dyno_name",
          description: "Name of the dyno to run command inside",
        },
        {
          name: "command",
          description:
            "Command to run (Heroku automatically prepends ‘launcher’ to the command)",
        },
      ],
    },
    {
      name: "sessions",
      description: "List your OAuth sessions",
      options: [
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
      ],
    },
    {
      name: "sessions:destroy",
      description: "Delete (logout) OAuth session by ID",
      args: {
        name: "id",
        description: "ID of the OAuth session",
      },
    },
    {
      name: "spaces",
      description: "List available spaces",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
        },
      ],
    },
    {
      name: "spaces:create",
      description: "Create a new space\n",
      options: [
        {
          name: "--channel",
          args: {},
          hidden: true,
        },
        {
          name: "--cidr",
          description: "RFC-1918 CIDR the space will use",
          args: {},
        },
        {
          name: "--data-cidr",
          description:
            "RFC-1918 CIDR used by Heroku Data resources for the space",
          args: {},
        },
        {
          name: "--features",
          description: "A list of features separated by commas",
          args: {},
          hidden: true,
        },
        {
          name: "--generation",
          description: "Generation for space",
          args: {
            suggestions: ["cedar", "fir"],
            default: "cedar",
          },
        },
        {
          name: "--kpi-url",
          description: "Self-managed KPI endpoint to use",
          args: {},
          hidden: true,
        },
        {
          name: "--log-drain-url",
          description: "Direct log drain url",
          args: {},
          hidden: true,
        },
        {
          name: "--region",
          description: "Region name",
          args: {},
        },
        {
          name: "--shield",
          description: "Create a Shield space",
          hidden: true,
        },
        {
          name: ["-s", "--space"],
          description: "Name of space to create",
          args: {},
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
          isRequired: true,
        },
      ],
    },
    {
      name: "spaces:destroy",
      description: "Destroy a space\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to destroy",
          args: {},
        },
        {
          name: "--confirm",
          description: "Set to space name to bypass confirm prompt",
          args: {},
        },
      ],
    },
    {
      name: "spaces:drains:get",
      description: "Display the log drain for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space for which to get log drain",
          args: {},
          isRequired: true,
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
      hidden: true,
    },
    {
      name: "drains:get",
      description: "Display the log drain for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space for which to get log drain",
          args: {},
          isRequired: true,
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
      hidden: true,
    },
    {
      name: "spaces:drains:set",
      description: "Replaces the log drain for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space for which to set log drain",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "url",
        description: "URL to replace the log drain with",
      },
      hidden: true,
    },
    {
      name: "drains:set",
      description: "Replaces the log drain for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space for which to set log drain",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "url",
        description: "URL to replace the log drain with",
      },
      hidden: true,
    },
    {
      name: "spaces:hosts",
      description: "List dedicated hosts for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get host list from",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
      hidden: true,
    },
    {
      name: "spaces:info",
      description: "Show info about a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get info of",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "spaces:peerings",
      description: "List peering connections for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get peer list from",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "spaces:peerings:accept",
      description: "Accepts a pending peering request for a private space",
      options: [
        {
          name: ["-p", "--pcxid"],
          description: "PCX ID of a pending peering",
          args: {},
        },
        {
          name: ["-s", "--space"],
          description: "Space to get peering info from",
          args: {},
        },
      ],
    },
    {
      name: "spaces:peerings:destroy",
      description: "Destroys an active peering connection in a private space",
      options: [
        {
          name: ["-p", "--pcxid"],
          description: "PCX ID of a pending peering",
          args: {},
        },
        {
          name: ["-s", "--space"],
          description: "Space to get peering info from",
          args: {},
          isRequired: true,
        },
        {
          name: "--confirm",
          description: "Set to PCX ID to bypass confirm prompt",
          args: {},
        },
      ],
    },
    {
      name: "spaces:peerings:info",
      description:
        'Display the information necessary to initiate a peering connection\n\nYou will use the information provided by this command to establish a peering connection request from your AWS VPC to your private space.\n\nTo start the peering process, go into your AWS console for the VPC you would like peered with your Private Space,\nnavigate to the VPC service, choose the "Peering Connections" option and click the "Create peering connection" button.\n\n- The AWS Account ID and VPC ID are necessary for the AWS VPC Peering connection wizard.\n- You will also need to configure your VPC route table to route the Dyno CIDRs through the peering connection.\n\nOnce you\'ve established the peering connection request, you can use the spaces:peerings:accept command to accept and\nconfigure the peering connection for the space.\n',
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get peering info from",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "spaces:peering:info",
      description:
        'Display the information necessary to initiate a peering connection\n\nYou will use the information provided by this command to establish a peering connection request from your AWS VPC to your private space.\n\nTo start the peering process, go into your AWS console for the VPC you would like peered with your Private Space,\nnavigate to the VPC service, choose the "Peering Connections" option and click the "Create peering connection" button.\n\n- The AWS Account ID and VPC ID are necessary for the AWS VPC Peering connection wizard.\n- You will also need to configure your VPC route table to route the Dyno CIDRs through the peering connection.\n\nOnce you\'ve established the peering connection request, you can use the spaces:peerings:accept command to accept and\nconfigure the peering connection for the space.\n',
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get peering info from",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "spaces:ps",
      description: "List dynos for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get dynos of",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "spaces:rename",
      description: "Renames a space",
      options: [
        {
          name: "--from",
          description: "Current name of space",
          args: {},
          isRequired: true,
        },
        {
          name: "--to",
          description: "Desired name of space",
          args: {},
          isRequired: true,
        },
      ],
    },
    {
      name: "spaces:topology",
      description: "Show space topology",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get topology of",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "spaces:transfer",
      description: "Transfer a space to another team",
      options: [
        {
          name: ["-s", "--space"],
          description: "Name of space",
          args: {},
          isRequired: true,
        },
        {
          name: ["-t", "--team"],
          description: "Desired owner of space",
          args: {},
          isRequired: true,
        },
      ],
    },
    {
      name: "spaces:trusted-ips",
      description:
        "List trusted IP ranges for a space\nTrusted IP ranges are only available on Private Spaces.\n\nThe space name is a required parameter. Newly created spaces will have 0.0.0.0/0 set by default\nallowing all traffic to applications in the space. More than one CIDR block can be provided at\na time to the commands listed below. For example 1.2.3.4/20 and 5.6.7.8/20 can be added with:\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get inbound rules from",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "trusted-ips",
      description:
        "List trusted IP ranges for a space\nTrusted IP ranges are only available on Private Spaces.\n\nThe space name is a required parameter. Newly created spaces will have 0.0.0.0/0 set by default\nallowing all traffic to applications in the space. More than one CIDR block can be provided at\na time to the commands listed below. For example 1.2.3.4/20 and 5.6.7.8/20 can be added with:\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get inbound rules from",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "spaces:trusted-ips:add",
      description:
        "Add one range to the list of trusted IP ranges\nUses CIDR notation",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to add rule to",
          args: {},
          isRequired: true,
        },
        {
          name: "--confirm",
          description: "Set to space name to bypass confirm prompt",
          args: {},
        },
      ],
      args: {
        name: "source",
        description: "IP address in CIDR notation",
      },
    },
    {
      name: "trusted-ips:add",
      description:
        "Add one range to the list of trusted IP ranges\nUses CIDR notation",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to add rule to",
          args: {},
          isRequired: true,
        },
        {
          name: "--confirm",
          description: "Set to space name to bypass confirm prompt",
          args: {},
        },
      ],
      args: {
        name: "source",
        description: "IP address in CIDR notation",
      },
    },
    {
      name: "spaces:trusted-ips:remove",
      description:
        "Remove a range from the list of trusted IP ranges\nUses CIDR notation",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to remove rule from",
          args: {},
          isRequired: true,
        },
        {
          name: "--confirm",
          description: "Set to space name to bypass confirm prompt",
          args: {},
        },
      ],
      args: {
        name: "source",
        description: "IP address in CIDR notation",
      },
    },
    {
      name: "trusted-ips:remove",
      description:
        "Remove a range from the list of trusted IP ranges\nUses CIDR notation",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to remove rule from",
          args: {},
          isRequired: true,
        },
        {
          name: "--confirm",
          description: "Set to space name to bypass confirm prompt",
          args: {},
        },
      ],
      args: {
        name: "source",
        description: "IP address in CIDR notation",
      },
    },
    {
      name: "spaces:vpn:config",
      description:
        "Display the configuration information for VPN\n\nYou will use the information provided by this command to establish a Private Space VPN Connection.\n\n- You must configure your VPN Gateway to use both Tunnels provided by Heroku\n- The VPN Gateway values are the IP addresses of the Private Space Tunnels\n- The Customer Gateway value is the Public IP of your VPN Gateway\n- The VPN Gateway must use the IKE Version shown and the Pre-shared Keys as the authentication method\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space the VPN connection belongs to",
          args: {},
          isRequired: true,
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
      args: {
        name: "name",
        description: "Name or id of the VPN connection to retrieve config from",
      },
    },
    {
      name: "spaces:vpn:connect",
      description:
        "Create VPN\nPrivate Spaces can be connected to another private network via an IPSec VPN connection allowing dynos to connect to hosts on your private networks and vice versa.\nThe connection is established over the public Internet but all traffic is encrypted using IPSec.\n",
      options: [
        {
          name: ["-i", "--ip"],
          description: "Public IP of customer gateway",
          args: {},
          isRequired: true,
        },
        {
          name: ["-c", "--cidrs"],
          description: "A list of routable CIDRs separated by commas",
          args: {},
          isRequired: true,
        },
        {
          name: ["-s", "--space"],
          description: "Space name",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "name",
        description: "Name or id of the VPN connection to create",
      },
    },
    {
      name: "spaces:vpn:connections",
      description: "List the VPN Connections for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get VPN connections from",
          args: {},
          isRequired: true,
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "spaces:vpn:destroy",
      description: "Destroys VPN in a private space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space name",
          args: {},
          isRequired: true,
        },
        {
          name: "--confirm",
          description: "Set to VPN connection name to bypass confirm prompt",
          args: {},
          hidden: true,
        },
      ],
      args: {
        name: "name",
        description: "Name or id of the VPN connection to destroy",
      },
    },
    {
      name: "spaces:vpn:info",
      description: "Display the information for VPN",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space the vpn connection belongs to",
          args: {},
          isRequired: true,
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
      args: {
        name: "name",
        description: "Name or id of the VPN connection to get info from",
      },
    },
    {
      name: "spaces:vpn:update",
      description:
        "Update VPN\nPrivate Spaces can be connected to another private network via an IPSec VPN connection allowing dynos to connect to hosts on your private networks and vice versa.\nThe connection is established over the public Internet but all traffic is encrypted using IPSec.\n",
      options: [
        {
          name: ["-c", "--cidrs"],
          description: "A list of routable CIDRs separated by commas",
          args: {},
          isRequired: true,
        },
        {
          name: ["-s", "--space"],
          description: "Space name",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "name",
        description: "Name or id of the VPN connection to update",
      },
    },
    {
      name: "spaces:vpn:wait",
      description: "Wait for VPN Connection to be created",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space the vpn connection belongs to",
          args: {},
          isRequired: true,
        },
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-i", "--interval"],
          description: "Seconds to wait between poll intervals",
          args: {},
        },
        {
          name: ["-t", "--timeout"],
          description: "Maximum number of seconds to wait",
          args: {},
        },
      ],
      args: {
        name: "name",
        description:
          "Name or id of the VPN connection you are waiting on for allocation",
      },
    },
    {
      name: "spaces:wait",
      description: "Wait for a space to be created",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get info of",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-i", "--interval"],
          description: "Seconds to wait between poll intervals",
          args: {
            default: "30",
          },
        },
        {
          name: ["-t", "--timeout"],
          description: "Maximum number of seconds to wait",
          args: {
            default: "1500",
          },
        },
      ],
    },
    {
      name: "status",
      description: "Display current status of the Heroku platform",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "teams",
      description:
        "List the teams that you are a member of\n\nUse heroku members:* to manage team members",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "telemetry",
      description: "List telemetry drains",
      options: [
        {
          name: ["-s", "--space"],
          description: "Filter by space name",
          args: {},
        },
        {
          name: "--app",
          description: "Filter by app name",
          args: {},
        },
      ],
    },
    {
      name: "telemetry:add",
      description:
        "Add and configure a new telemetry drain. Defaults to collecting all telemetry unless otherwise specified",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to add a drain to",
          args: {},
        },
        {
          name: "--headers",
          description: "Custom headers to configure the drain in json format",
          args: {},
        },
        {
          name: ["-s", "--space"],
          description: "Space to add a drain to",
          args: {},
        },
        {
          name: "--signals",
          description:
            'Comma-delimited list of signals to collect (traces, metrics, logs). Use "all" to collect all signals',
          args: {
            default: "all",
          },
        },
        {
          name: "--transport",
          description: "Transport protocol for the drain",
          args: {
            suggestions: ["http", "grpc"],
            default: "http",
          },
        },
      ],
      args: {
        name: "endpoint",
        description: "Drain url",
      },
    },
    {
      name: "telemetry:info",
      description: "Show a telemetry drain's info",
      args: {
        name: "telemetry_drain_id",
        description: "ID of the drain to show info for",
      },
    },
    {
      name: "telemetry:remove",
      description: "Remove a telemetry drain",
      options: [
        {
          name: ["-a", "--app"],
          description: "Name of the app to remove all drains from",
          args: {},
        },
        {
          name: ["-s", "--space"],
          description: "Name of the space to remove all drains from",
          args: {},
        },
      ],
      args: {
        name: "telemetry_drain_id",
        description: "ID of the drain to remove",
      },
    },
    {
      name: "telemetry:update",
      description:
        "Updates a telemetry drain with provided attributes (attributes not provided remain unchanged)",
      options: [
        {
          name: "--endpoint",
          description: "Drain url",
          args: {},
        },
        {
          name: "--headers",
          description: "Custom headers to configure the drain in json format",
          args: {},
        },
        {
          name: "--signals",
          description:
            'Comma-delimited list of signals to collect (traces, metrics, logs). Use "all" to collect all signals',
          args: {},
        },
        {
          name: "--transport",
          description: "Transport protocol for the drain",
          args: {
            suggestions: ["http", "grpc"],
          },
        },
      ],
      args: {
        name: "telemetry_drain_id",
        description: "ID of the drain to update",
      },
    },
    {
      name: "webhooks",
      description: "List webhooks on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "webhooks:add",
      description: "Add a webhook to an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
        {
          name: ["-i", "--include"],
          description: "Comma delimited event types your server will receive",
          args: {},
          isRequired: true,
        },
        {
          name: ["-l", "--level"],
          description:
            "Notify does not retry, sync will retry until successful or timeout",
          args: {},
          isRequired: true,
        },
        {
          name: ["-s", "--secret"],
          description:
            "Value to sign delivery with in Heroku-Webhook-Hmac-SHA256 header",
          args: {},
        },
        {
          name: ["-t", "--authorization"],
          description: "Authorization header to send with webhooks",
          args: {},
        },
        {
          name: ["-u", "--url"],
          description: "URL for receiver",
          args: {},
          isRequired: true,
        },
      ],
    },
    {
      name: "webhooks:deliveries",
      description: "List webhook deliveries on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--status"],
          description: "Filter deliveries by status",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "webhooks:deliveries:info",
      description: "Info for a webhook event on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
      ],
      args: {
        name: "id",
        description: "ID of the webhook event",
      },
    },
    {
      name: "webhooks:events",
      description: "List webhook events on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "webhooks:events:info",
      description: "Info for a webhook event on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
      ],
      args: {
        name: "id",
        description: "ID of the webhook event",
      },
    },
    {
      name: "webhooks:info",
      description: "Info for a webhook on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
      ],
      args: {
        name: "id",
        description: "ID of the webhook",
      },
    },
    {
      name: "webhooks:remove",
      description: "Removes a webhook from an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
      ],
      args: {
        name: "id",
        description: "Id of webhook to remove",
      },
    },
    {
      name: "webhooks:update",
      description: "Updates a webhook in an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
        {
          name: ["-i", "--include"],
          description: "Comma delimited event types your server will receive",
          args: {},
          isRequired: true,
        },
        {
          name: ["-l", "--level"],
          description:
            "Notify does not retry, sync will retry until successful or timeout",
          args: {},
          isRequired: true,
        },
        {
          name: ["-s", "--secret"],
          description:
            "Value to sign delivery with in Heroku-Webhook-Hmac-SHA256 header",
          args: {},
        },
        {
          name: ["-t", "--authorization"],
          description: "Authorization header to send with webhooks",
          args: {},
        },
        {
          name: ["-u", "--url"],
          description: "URL for receiver",
          args: {},
          isRequired: true,
        },
      ],
      args: {
        name: "id",
        description: "ID of the webhook",
      },
    },
    {
      name: "ps:copy",
      description:
        "Copy a file from a dyno to the local filesystem\nExample:\n\n    $ heroku ps:copy FILENAME --app murmuring-headland-14719",
      options: [
        {
          name: ["-d", "--dyno"],
          description: "Specify the dyno to connect to",
          args: {},
        },
        {
          name: ["-o", "--output"],
          description: "The name of the output file",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "file",
      },
      hidden: false,
    },
    {
      name: "ps:exec",
      description:
        "Create an SSH session to a dyno\nExample:\n\n    $ heroku ps:exec 'node -i' --app murmuring-headland-14719",
      options: [
        {
          name: ["-d", "--dyno"],
          description: "Specify the dyno to connect to",
          args: {},
        },
        {
          name: "--ssh",
          description: "Use native ssh",
        },
        {
          name: "--status",
          description: "Lists the status of the SSH server in the dyno",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      hidden: false,
    },
    {
      name: "ps:forward",
      description:
        'Forward traffic on a local port to a dyno\nProvide a port or comma-separated list of ports to forward.\n\n    For example, "4000,9000:9001" will forward port 4000 to port 4000 and\n    port 9000 to port 9001.\n\n    Example:\n\n    $ heroku ps:forward 8080 --app murmuring-headland-14719',
      options: [
        {
          name: ["-d", "--dyno"],
          description: "Specify the dyno to connect to",
          args: {},
        },
        {
          name: ["-p", "--localPort"],
          description: "The local port to use",
          args: {},
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "port",
      },
      hidden: false,
    },
    {
      name: "ps:socks",
      description:
        "Launch a SOCKS proxy into a dyno\nExample:\n\n    $ heroku ps:socks --app murmuring-headland-14719\n    Establishing credentials... done\n    SOCKSv5 proxy server started on port 1080\n    Use CTRL+C to stop the proxy",
      options: [
        {
          name: ["-d", "--dyno"],
          description: "Specify the dyno to connect to",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      hidden: false,
    },
    {
      name: "update",
      description: "Update the <%= config.bin %> CLI",
      options: [
        {
          name: "--autoupdate",
          hidden: true,
        },
        {
          name: ["-a", "--available"],
          description: "Install a specific version",
        },
        {
          name: ["-v", "--version"],
          description: "Install a specific version",
          args: {},
        },
        {
          name: ["-i", "--interactive"],
          description:
            "Interactively select version to install. This is ignored if a channel is provided",
        },
        {
          name: "--force",
          description: "Force a re-download of the requested version",
        },
      ],
      args: {
        name: "channel",
      },
    },
    {
      name: "commands",
      description: "List all the commands",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: "--hidden",
          description: "Show hidden commands",
        },
        {
          name: "--tree",
          description: "Show tree of commands",
        },
        {
          name: "--columns",
          description: "Only show provided columns (comma-separated)",
          args: {},
        },
        {
          name: "--sort",
          description: "Property to sort by (prepend '-' for descending)",
          args: {},
        },
        {
          name: "--filter",
          description:
            "Filter property by partial string matching, ex: name=foo",
          args: {},
        },
        {
          name: "--csv",
          description: "Output is csv format [alias: --output=csv]",
        },
        {
          name: "--output",
          description: "Output in a more machine friendly format",
          args: {
            suggestions: ["csv", "json", "yaml"],
          },
        },
        {
          name: ["-x", "--extended"],
          description: "Show extra columns",
        },
        {
          name: "--no-truncate",
          description: "Do not truncate output to fit screen",
        },
        {
          name: "--no-header",
          description: "Hide table header from output",
        },
      ],
    },
    {
      name: "help",
      description: "Display help for <%= config.bin %>",
      options: [
        {
          name: ["-n", "--nested-commands"],
          description: "Include all nested commands in the output",
        },
      ],
      args: {
        name: "commands",
        description: "Command to show help for",
        isOptional: true,
      },
    },
    {
      name: "plugins",
      description: "List installed plugins",
      options: [
        {
          name: "--core",
          description: "Show core plugins",
        },
      ],
    },
    {
      name: "plugins:inspect",
      description: "Displays installation properties of a plugin",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
        },
      ],
      args: {
        name: "plugin",
        description: "Plugin to inspect",
        default: ".",
      },
    },
    {
      name: "plugins:install",
      description:
        "Installs a plugin into the CLI.\nCan be installed from npm or a git url.\n\nInstallation of a user-installed plugin will override a core plugin.\n\ne.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in the CLI without the need to patch and update the whole CLI.\n",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
        },
        {
          name: ["-f", "--force"],
          description: "Run yarn install with force flag",
        },
      ],
      args: {
        name: "plugin",
        description: "Plugin to install",
      },
    },
    {
      name: "plugins:add",
      description:
        "Installs a plugin into the CLI.\nCan be installed from npm or a git url.\n\nInstallation of a user-installed plugin will override a core plugin.\n\ne.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in the CLI without the need to patch and update the whole CLI.\n",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
        },
        {
          name: ["-f", "--force"],
          description: "Run yarn install with force flag",
        },
      ],
      args: {
        name: "plugin",
        description: "Plugin to install",
      },
    },
    {
      name: "plugins:link",
      description:
        "Links a plugin into the CLI for development.\nInstallation of a linked plugin will override a user-installed or core plugin.\n\ne.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' command will override the user-installed or core plugin implementation. This is useful for development work.\n",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
        },
      ],
      args: {
        name: "path",
        description: "Path to plugin",
        default: ".",
      },
    },
    {
      name: "plugins:uninstall",
      description: "Removes a plugin from the CLI",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
        },
      ],
      args: {
        name: "plugin",
        description: "Plugin to uninstall",
      },
    },
    {
      name: "plugins:unlink",
      description: "Removes a plugin from the CLI",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
        },
      ],
      args: {
        name: "plugin",
        description: "Plugin to uninstall",
      },
    },
    {
      name: "plugins:remove",
      description: "Removes a plugin from the CLI",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
        },
      ],
      args: {
        name: "plugin",
        description: "Plugin to uninstall",
      },
    },
    {
      name: "plugins:update",
      description: "Update installed plugins",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
        },
      ],
    },
    {
      name: "version",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--verbose",
          description:
            "Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using",
        },
      ],
    },
    {
      name: "which",
      description: "Show which plugin a command is in",
    },
  ],
};

const versions: Fig.VersionDiffMap = {};

versions["10.1.0"] = {};

export { versions };
export default completion;
