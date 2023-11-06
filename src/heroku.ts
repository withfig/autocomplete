const getAppGenerator: Fig.Generator = {
  script: ["heroku", "apps", "--all", "--json"],
  cache: {
    strategy: "stale-while-revalidate",
  },
  scriptTimeout: 15000,
  postProcess: function (out) {
    try {
      return JSON.parse(out).map((app) => {
        return {
          name: app.name,
          description: app.name,
          icon: "https://www.herokucdn.com/favicon.ico",
        };
      });
    } catch (e) {
      return [];
    }
  },
};

const completionSpec: Fig.Spec = {
  name: "heroku",
  description:
    "Makes it easy to create and manage your Heroku apps directly from the terminal",
  subcommands: [
    {
      name: ["auth:2fa", "2fa", "twofactor"],
      description: "Check 2fa status",
    },
    {
      name: ["auth:2fa:disable", "twofactor:disable", "2fa:disable"],
      description: "Disables 2fa on account",
    },
    {
      name: ["auth:login", "login"],
      description: "Login with your Heroku credentials",
      options: [
        {
          name: "--browser",
          description:
            'Browser to open SSO with (example: "firefox", "safari")',
          args: {
            name: "browser",
            suggestions: ["firefox", "safari", "chrome", "brave", "explorer"],
          },
        },
        {
          name: ["-i", "--interactive"],
          description: "Login with username/password",
        },
        {
          name: ["-e", "--expires-in"],
          description: "Duration of token in seconds (default 30 days)",
          args: {
            name: "expires-in",
          },
        },
      ],
    },
    {
      name: ["auth:logout", "logout"],
      description: "Clears local login credentials and invalidates API session",
    },
    {
      name: "auth:token",
      description: "Outputs current CLI authentication token",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
      ],
    },
    {
      name: ["auth:whoami", "whoami"],
      description: "Display the current logged in user",
    },
    {
      name: "labs:disable",
      description: "Disables an experimental feature",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: "--confirm",
          description: "",
          args: {
            name: "confirm",
          },
        },
      ],
      args: {
        name: "feature",
        isOptional: true,
      },
    },
    {
      name: "buildpacks",
      description: "Display the buildpacks for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-i", "--index"],
          description: "The 1-based index of the URL in the list of URLs",
          args: {
            name: "index",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-i", "--index"],
          description:
            "The 1-based index of the URL to remove from the list of URLs",
          args: {
            name: "index",
          },
        },
      ],
      args: {
        name: "buildpack",
        description: "Namespace/name of the buildpack",
        isOptional: true,
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
          args: {
            name: "namespace",
          },
        },
        {
          name: "--name",
          description:
            "Buildpack names to filter on using a comma separated list",
          args: {
            name: "name",
          },
        },
        {
          name: "--description",
          description: "Buildpack description to filter on",
          args: {
            name: "description",
          },
        },
      ],
      args: {
        name: "term",
        description:
          "Search term that searches across name, namespace, and description",
        isOptional: true,
      },
    },
    {
      name: "buildpacks:set",
      description: "",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-i", "--index"],
          description: "The 1-based index of the URL in the list of URLs",
          args: {
            name: "index",
          },
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
      name: "ci:config",
      description: "Display CI config vars",
      options: [
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
          description: "Pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ci:config:get",
      description: "Get a CI config var",
      options: [
        {
          name: ["-s", "--shell"],
          description: "Output config var in shell format",
        },
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "key",
      },
    },
    {
      name: "ci:config:set",
      description: "Set CI config vars",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ci:config:unset",
      description: "Unset CI config vars",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ci:debug",
      description:
        "Opens an interactive test debugging session with the contents of the current directory",
      options: [
        {
          name: "--no-setup",
          description: "Start test dyno without running test-setup",
        },
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: "--no-cache",
          description: "Start test run with an empty cache",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          name: ["-p", "--pipeline"],
          description: "Pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
        {
          name: "--columns",
          description: "Only show provided columns (comma-separated)",
          args: {
            name: "columns",
          },
        },
        {
          name: "--sort",
          description: "Property to sort by (prepend '-' for descending)",
          args: {
            name: "sort",
          },
        },
        {
          name: "--filter",
          description:
            "Filter property by partial string matching, ex: name=foo",
          args: {
            name: "filter",
          },
        },
        {
          name: "--csv",
          description: "Output is csv format",
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-c", "--cert"],
          description:
            "The name of the SSL cert you want to use for this domain",
          args: {
            name: "cert",
          },
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
        {
          name: "--wait",
          description: "",
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "hostname",
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "hostname",
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "hostname",
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: "--cert",
          description:
            "The name or id of the certificate you want to use for this domain",
          args: {
            name: "cert",
          },
        },
      ],
      args: {
        name: "hostname",
        isOptional: true,
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "hostname",
        isOptional: true,
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
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-s", "--space"],
          description: "Filter by space",
          args: {
            name: "space",
          },
        },
        {
          name: ["-p", "--personal"],
          description:
            "List apps in personal account when a default team is set",
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {
            name: "team",
          },
        },
      ],
    },
    {
      name: "apps:create",
      description: "Creates a new app",
      options: [
        {
          name: "--addons",
          description: "Comma-delimited list of addons to install",
          args: {
            name: "addons",
          },
        },
        {
          name: ["-b", "--buildpack"],
          description: "Buildpack url to use for this app",
          args: {
            name: "buildpack",
          },
        },
        {
          name: ["-n", "--no-remote"],
          description: "Do not create a git remote",
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--stack"],
          description: "The stack to create the app on",
          args: {
            name: "stack",
          },
        },
        {
          name: "--space",
          description: "The private space to create the app in",
          args: {
            name: "space",
          },
        },
        {
          name: "--region",
          description: "Specify region for the app to run in",
          args: {
            name: "region",
          },
        },
        {
          name: "--ssh-git",
          description: "Use SSH git protocol for local git remote",
        },
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {
            name: "team",
          },
        },
      ],
      args: {
        name: "app",
        generators: getAppGenerator,
        description: "Name of app to create",
        isOptional: true,
      },
    },
    {
      name: "apps:destroy",
      description: "Permanently destroy an app",
      options: [
        {
          name: ["-c", "--confirm"],
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "apps:errors",
      description: "View app errors",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: "--hours",
          description: "Number of hours to look back (default 24)",
          args: {
            name: "hours",
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
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "apps:favorites",
      description: "List favorited apps",
      options: [
        {
          name: "--json",
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "apps:info",
      description: "Show detailed app information",
      options: [
        {
          name: ["-s", "--shell"],
          description: "Output more shell friendly key/value pairs",
        },
        {
          name: ["-j", "--json"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "path",
        isOptional: true,
      },
    },
    {
      name: "apps:rename",
      description: "Rename an app",
      options: [
        {
          name: "--ssh-git",
          description: "Use ssh git protocol instead of https",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "newname",
      },
    },
    {
      name: "apps:stacks",
      description: "Show the list of available stacks",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "stack",
      },
    },
    {
      name: "config:set",
      description: "Set one or more config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "drains",
      description: "Display the log drains of an app",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "drains:get",
      description: "Display the log drain for a space",
      options: [
        {
          name: "--space",
          description: "Space for which to get log drain",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "drains:set",
      description: "Replaces the log drain for a space",
      options: [
        {
          name: "--space",
          description: "Space for which to set log drain",
          args: {},
        },
      ],
      args: {
        name: "url",
      },
    },
    {
      name: "drains:add",
      description: "Adds a log drain to an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "url",
      },
    },
    {
      name: "drains:remove",
      description: "Removes a log drain from an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "url",
      },
    },
    {
      name: "dyno:kill",
      description: "Stop app dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "dyno",
      },
    },
    {
      name: "dyno:resize",
      description: "Manage dyno sizes",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "dyno:restart",
      description: "Restart app dynos",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "dyno",
        isOptional: true,
      },
    },
    {
      name: "dyno:scale",
      description: "Scale dyno quantity up or down",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "dyno:stop",
      description: "Stop app dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "dyno",
      },
    },
    {
      name: "features",
      description: "List available app features",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "feature",
      },
    },
    {
      name: "features:enable",
      description: "Enables an app feature",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "feature",
      },
    },
    {
      name: "features:info",
      description: "Display information about a feature",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "feature",
      },
    },
    {
      name: "keys",
      description: "Display your SSH keys",
      options: [
        {
          name: ["-l", "--long"],
          description: "Display full SSH keys",
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "keys:add",
      description: "Add an SSH key for a user",
      options: [
        {
          name: ["-y", "--yes"],
          description: "Automatically answer yes for all prompts",
        },
      ],
      args: {
        name: "key",
        isOptional: true,
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
      },
    },
    {
      name: "labs",
      description: "List experimental features",
      options: [
        {
          name: "--json",
          description: "Display as json",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "labs:enable",
      description: "Enables an experimental feature",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "feature",
      },
    },
    {
      name: "labs:info",
      description: "Show feature info",
      options: [
        {
          name: "--json",
          description: "Display as json",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "feature",
      },
    },
    {
      name: "maintenance",
      description: "Display the current maintenance status of app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "notifications",
      description: "Display notifications",
      options: [
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
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ps",
      description: "List dynos for an app",
      options: [
        {
          name: "--json",
          description: "Display as json",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ps:kill",
      description: "Stop app dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "dyno",
      },
    },
    {
      name: "ps:resize",
      description: "Manage dyno sizes",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ps:restart",
      description: "Restart app dynos",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "dyno",
        isOptional: true,
      },
    },
    {
      name: "ps:scale",
      description: "Scale dyno quantity up or down",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ps:stop",
      description: "Stop app dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "dyno",
      },
    },
    {
      name: "ps:type",
      description: "Manage dyno sizes",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "num",
          },
        },
        {
          name: "--json",
          description: "Output releases in json format",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "release",
        isOptional: true,
      },
    },
    {
      name: "releases:output",
      description: "View the release command output",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "release",
        isOptional: true,
      },
    },
    {
      name: "releases:rollback",
      description: "Rollback to a previous release",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "release",
        isOptional: true,
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
      name: "config",
      description: "Display the config vars for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
      description: "Interactively edit config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "key",
        description: "Edit a single key",
        isOptional: true,
      },
    },
    {
      name: "config:get",
      description: "Display a single config value for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--shell"],
          description: "Output config vars in shell format",
        },
      ],
      args: {
        name: "KEY",
      },
    },
    {
      name: ["config:unset", "config:remove"],
      description: "Unset one or more config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: ["local", "local:start"],
      description: "Run heroku app locally",
      options: [
        {
          name: ["-f", "--procfile"],
          description: "Use a different Procfile",
          args: {
            name: "procfile",
          },
        },
        {
          name: ["-e", "--env"],
          description: "Location of env file (defaults to .env)",
          args: {
            name: "env",
          },
        },
        {
          name: ["-p", "--port"],
          description: "Port to listen on",
          args: {
            name: "port",
          },
        },
      ],
      args: {
        name: "processname",
        isOptional: true,
      },
    },
    {
      name: "local:run",
      description: "Run a one-off command",
      options: [
        {
          name: ["-e", "--env"],
          description: "",
          args: {
            name: "env",
          },
        },
        {
          name: ["-p", "--port"],
          description: "",
          args: {
            name: "port",
          },
        },
      ],
    },
    {
      name: "local:version",
      description: "Display node-foreman version",
    },
    {
      name: "ci",
      description: "Display the most recent CI runs for the given pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "App name",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: "--watch",
          description: "Keep running and watch for new and update tests",
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "ci:info",
      description: "Show the status of a specific test run",
      options: [
        {
          name: ["-a", "--app"],
          description: "App name",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: "--node",
          description: "The node number to show its setup and output",
          args: {
            name: "node",
          },
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {
            name: "pipeline",
          },
        },
      ],
      args: {
        name: "test-run",
      },
    },
    {
      name: "ci:last",
      description:
        "Looks for the most recent run and returns the output of that run",
      options: [
        {
          name: ["-a", "--app"],
          description: "App name",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: "--node",
          description: "The node number to show its setup and output",
          args: {
            name: "node",
          },
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {
            name: "pipeline",
          },
        },
      ],
    },
    {
      name: "ci:rerun",
      description: "Rerun tests against current directory",
      options: [
        {
          name: ["-a", "--app"],
          description: "App name",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {
            name: "pipeline",
          },
        },
      ],
      args: {
        name: "number",
        isOptional: true,
      },
    },
    {
      name: "ci:run",
      description: "Run tests against current directory",
      options: [
        {
          name: ["-a", "--app"],
          description: "App name",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {
            name: "pipeline",
          },
        },
      ],
    },
    {
      name: "certs",
      description: "List SSL certificates for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:add",
      description: "Add an SSL certificate to an app",
      options: [
        {
          name: "--bypass",
          description: "Bypass the trust chain completion step",
        },
        {
          name: "--type",
          description: "Type to create, either 'sni' or 'endpoint'",
          args: {
            name: "type",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "CRT",
        },
        {
          name: "KEY",
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:auto:disable",
      description: "Disable ACM for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:chain",
      description: "Print an ordered & complete chain for a certificate",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
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
          args: {
            name: "keysize",
          },
        },
        {
          name: "--owner",
          description: "Name of organization certificate belongs to",
          args: {
            name: "owner",
          },
        },
        {
          name: "--country",
          description: "Country of owner, as a two-letter ISO country code",
          args: {
            name: "country",
          },
        },
        {
          name: "--area",
          description: "Sub-country area (state, province, etc.) of owner",
          args: {
            name: "area",
          },
        },
        {
          name: "--city",
          description: "City of owner",
          args: {
            name: "city",
          },
        },
        {
          name: "--subject",
          description: "Specify entire certificate subject",
          args: {
            name: "subject",
          },
        },
        {
          name: "--now",
          description: "Do not prompt for any owner information",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "domain",
      },
    },
    {
      name: "certs:info",
      description: "Show certificate information for an SSL certificate",
      options: [
        {
          name: "--name",
          description: "Name to check info on",
          args: {
            name: "name",
          },
        },
        {
          name: "--endpoint",
          description: "Endpoint to check info on",
          args: {
            name: "endpoint",
          },
        },
        {
          name: "--show-domains",
          description: "Show associated domains",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:key",
      description: "Print the correct key for the given certificate",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:remove",
      description: "Remove an SSL certificate from an app",
      options: [
        {
          name: "--name",
          description: "Name to remove",
          args: {
            name: "name",
          },
        },
        {
          name: "--endpoint",
          description: "Endpoint to remove",
          args: {
            name: "endpoint",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:update",
      description: "Update an SSL certificate on an app",
      options: [
        {
          name: "--bypass",
          description: "Bypass the trust chain completion step",
        },
        {
          name: "--name",
          description: "Name to update",
          args: {
            name: "name",
          },
        },
        {
          name: "--endpoint",
          description: "Endpoint to update",
          args: {
            name: "endpoint",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "CRT",
        },
        {
          name: "KEY",
        },
      ],
    },
    {
      name: "git:clone",
      description:
        "Clones a heroku app to your local machine at DIRECTORY (defaults to app name)",
      options: [
        {
          name: ["-a", "--app"],
          description: "The Heroku app to use",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {
            name: "remote",
          },
        },
        {
          name: "--ssh-git",
          description: "Use SSH git protocol",
        },
      ],
      args: {
        name: "DIRECTORY",
        description: "Where to clone the app",
        isOptional: true,
      },
    },
    {
      name: "git:remote",
      description: "Adds a git remote to an app repo",
      options: [
        {
          name: ["-a", "--app"],
          description: "The Heroku app to use",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "The git remote to create",
          args: {
            name: "remote",
          },
        },
        {
          name: "--ssh-git",
          description: "Use SSH git protocol",
        },
      ],
    },
    {
      name: "addons",
      description: "Lists your add-ons and attachments",
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "as",
          },
        },
        {
          name: "--credential",
          description: "Credential name for scoped access to Heroku Postgres",
          args: {
            name: "credential",
          },
        },
        {
          name: "--confirm",
          description: "Overwrite existing add-on attachment with same name",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "addon_name",
      },
    },
    {
      name: "addons:create",
      description: "Create a new add-on resource",
      options: [
        {
          name: "--name",
          description: "Name for the add-on resource",
          args: {
            name: "name",
          },
        },
        {
          name: "--as",
          description: "Name for the initial add-on attachment",
          args: {
            name: "as",
          },
        },
        {
          name: "--confirm",
          description:
            "Overwrite existing config vars or existing add-on attachments",
          args: {
            name: "confirm",
          },
        },
        {
          name: "--wait",
          description: "Watch add-on creation status and exit when complete",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "service:plan",
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
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "addons:detach",
      description: "Detach an existing add-on resource from an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "attachment_name",
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "addon",
      },
    },
    {
      name: "addons:downgrade",
      description: "Change add-on plan",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "addon",
        },
        {
          name: "plan",
          isOptional: true,
        },
      ],
    },
    {
      name: "addons:info",
      description: "Show detailed add-on resource and attachment information",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "addon",
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "addon",
      },
    },
    {
      name: "addons:plans",
      description: "List all available plans for an add-on services",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
      args: {
        name: "service",
      },
    },
    {
      name: "addons:rename",
      description: "Rename an add-on",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "addon",
        },
        {
          name: "name",
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
      description: "Change add-on plan",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "addon",
        },
        {
          name: "plan",
          isOptional: true,
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
          args: {
            name: "wait-interval",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "addon",
        isOptional: true,
      },
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
          description: "Set a custom authorization description",
          args: {
            name: "description",
          },
        },
        {
          name: ["-s", "--scope"],
          description: "Set custom OAuth scopes",
          args: {
            name: "scope",
          },
        },
        {
          name: ["-e", "--expires-in"],
          description: "Set expiration in seconds (default no expiration)",
          args: {
            name: "expires-in",
          },
        },
        {
          name: ["-S", "--short"],
          description: "Only output token",
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
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
      },
    },
    {
      name: ["authorizations:revoke", "authorizations:destroy"],
      description: "Revoke OAuth authorization",
      args: {
        name: "id",
      },
    },
    {
      name: "authorizations:rotate",
      description: "Updates an OAuth authorization token",
      args: {
        name: "id",
      },
    },
    {
      name: "authorizations:update",
      description: "Updates an OAuth authorization",
      options: [
        {
          name: ["-d", "--description"],
          description: "Set a custom authorization description",
          args: {
            name: "description",
          },
        },
        {
          name: "--client-id",
          description: "Identifier of OAuth client to set",
          args: {
            name: "client-id",
          },
        },
        {
          name: "--client-secret",
          description: "Secret of OAuth client to set",
          args: {
            name: "client-secret",
          },
        },
      ],
      args: {
        name: "id",
      },
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
          name: ["-s", "--shell"],
          description: "Output in shell format",
        },
        {
          name: ["-j", "--json"],
          description: "Output in json format",
        },
      ],
      args: [
        {
          name: "name",
        },
        {
          name: "redirect_uri",
        },
      ],
    },
    {
      name: "clients:destroy",
      description: "Delete client by ID",
      args: {
        name: "id",
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
      },
    },
    {
      name: "clients:update",
      description: "Update OAuth client",
      options: [
        {
          name: ["-n", "--name"],
          description: "Change the client name",
          args: {
            name: "name",
          },
        },
        {
          name: "--url",
          description: "Change the client redirect URL",
          args: {
            name: "url",
          },
        },
      ],
      args: {
        name: "id",
      },
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
      },
    },
    {
      name: "redis",
      description: "Gets information about redis",
      options: [
        {
          name: "--json",
          description: "Format output as JSON",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "redis:cli",
      description: "Opens a redis prompt",
      options: [
        {
          name: ["-c", "--confirm"],
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "redis:credentials",
      description: "Display credentials information",
      options: [
        {
          name: "--reset",
          description: "Reset credentials",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "redis:info",
      description: "Gets information about redis",
      options: [
        {
          name: "--json",
          description: "Format output as JSON",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "redis:keyspace-notifications",
      description: "Set the keyspace notifications configuration",
      options: [
        {
          name: ["-c", "--config"],
          description: "Set keyspace notifications configuration",
          args: {
            name: "config",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "redis:maintenance",
      description: "Manage maintenance windows",
      options: [
        {
          name: ["-w", "--window"],
          description: "Set weekly UTC maintenance window",
          args: {
            name: "window",
          },
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
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "redis:maxmemory",
      description: "Set the key eviction policy",
      options: [
        {
          name: ["-p", "--policy"],
          description: "Set policy name",
          args: {
            name: "policy",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "redis:promote",
      description: "Sets DATABASE as your REDIS_URL",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
      },
    },
    {
      name: "redis:stats-reset",
      description:
        "Reset all stats covered by RESETSTAT (https://redis.io/commands/config-resetstat)",
      options: [
        {
          name: ["-c", "--confirm"],
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "redis:timeout",
      description:
        "Set the number of seconds to wait before killing idle connections",
      options: [
        {
          name: ["-s", "--seconds"],
          description: "Set timeout value",
          args: {
            name: "seconds",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "redis:wait",
      description: "Wait for Redis instance to be available",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
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
          description: "",
        },
      ],
    },
    {
      name: "container:logout",
      description: "Log out from Heroku Container Registry",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
    },
    {
      name: "container:pull",
      description: "Pulls an image from an app's process type",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "container:push",
      description:
        "Builds, then pushes Docker images to deploy your Heroku app",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-R", "--recursive"],
          description:
            "Pushes Dockerfile.<process> found in current and subdirectories",
        },
        {
          name: "--arg",
          description: "Set build-time variables",
          args: {
            name: "arg",
          },
        },
        {
          name: "--context-path",
          description:
            "Path to use as build context (defaults to Dockerfile dir)",
          args: {
            name: "context-path",
            template: "filepaths",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "container:release",
      description:
        "Releases previously pushed Docker images to your Heroku app",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "container:run",
      description: "Builds, then runs the docker image locally",
      options: [
        {
          name: ["-p", "--port"],
          description: "Port the app will run on",
          args: {
            name: "port",
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "logs",
      description: "Display recent log output",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-n", "--num"],
          description: "Number of lines to display",
          args: {
            name: "num",
          },
        },
        {
          name: ["-d", "--dyno"],
          description:
            'Only show output from this dyno type (such as "web" or "worker")',
          args: {
            name: "dyno",
          },
        },
        {
          name: ["-s", "--source"],
          description:
            'Only show output from this source (such as "app" or "heroku")',
          args: {
            name: "source",
          },
        },
        {
          name: ["-t", "--tail"],
          description: "Continually stream logs",
        },
        {
          name: "--force-colors",
          description: "Force use of colors (even on non-tty output)",
        },
      ],
    },
    {
      name: "run",
      description: "Run a one-off process inside a heroku dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "Parent app used by review apps",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--size"],
          description: "Dyno size",
          args: {
            name: "size",
          },
        },
        {
          name: "--type",
          description: "Process type",
          args: {
            name: "type",
          },
        },
        {
          name: ["-x", "--exit-code"],
          description: "Passthrough the exit code of the remote command",
        },
        {
          name: ["-e", "--env"],
          description:
            "Environment variables to set (use ';' to split multiple vars)",
          args: {
            name: "env",
          },
        },
        {
          name: "--no-tty",
          description: "Force the command to not run in a tty",
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-e", "--env"],
          description:
            "Environment variables to set (use ';' to split multiple vars)",
          args: {
            name: "env",
          },
        },
        {
          name: ["-s", "--size"],
          description: "Dyno size",
          args: {
            name: "size",
          },
        },
        {
          name: ["-t", "--tail"],
          description: "Continually stream logs",
        },
        {
          name: "--type",
          description: "Process type",
          args: {
            name: "type",
          },
        },
      ],
    },
    {
      name: "outbound-rules:add",
      description: "Add outbound rules to a Private Space",
      options: [
        {
          name: "--space",
          description: "Space to add rule to",
          args: {},
        },
        {
          name: "--confirm",
          description: "Set to space name to bypass confirm prompt",
          args: {},
        },
        {
          name: "--dest",
          description:
            "Target CIDR block dynos are allowed to communicate with",
          args: {},
        },
        {
          name: "--protocol",
          description:
            'The protocol dynos are allowed to use when communicating with hosts in destination CIDR block. Valid protocols are "tcp", "udp", "icmp", "0-255" and "any"',
          args: {},
        },
        {
          name: "--port",
          description:
            "The port dynos are allowed to use when communicating with hosts in destination CIDR block. Accepts a range in `<lowest port>-<highest port>` format. 0 is the minimum. The maximum port allowed is 65535, except for ICMP with a maximum of 255",
          args: {},
        },
      ],
    },
    {
      name: "outbound-rules",
      description: "List Outbound Rules for a space",
      options: [
        {
          name: "--space",
          description: "Space to get outbound rules from",
          args: {},
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
      args: {
        name: "space",
      },
    },
    {
      name: "outbound-rules:remove",
      description: "Remove a Rules from the list of Outbound Rules",
      options: [
        {
          name: "--space",
          description: "Space to remove rule from",
          args: {},
        },
        {
          name: "--confirm",
          description: "Set to space name to bypass confirm prompt",
          args: {},
        },
      ],
      args: {
        name: "ruleNumber",
      },
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
      description: "Add this app to a pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--stage"],
          description: "Stage of first app in pipeline",
          args: {
            name: "stage",
          },
        },
      ],
      args: {
        name: "pipeline",
        description: "Name of pipeline",
      },
    },
    {
      name: "pipelines:connect",
      description: "Connect a github repo to an existing pipeline",
      options: [
        {
          name: ["-r", "--repo"],
          description: "The GitHub repository to connect to",
          args: {
            name: "repo",
          },
        },
      ],
      args: {
        name: "name",
        description: "Name of pipeline",
      },
    },
    {
      name: "pipelines:create",
      description: "Create a new pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--stage"],
          description: "Stage of first app in pipeline",
          args: {
            name: "stage",
          },
        },
        {
          name: ["-t", "--team"],
          description: "The team which will own the apps",
          args: {
            name: "team",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-t", "--to"],
          description: "Comma separated list of apps to promote to",
          args: {
            name: "to",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "team",
          },
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
          args: {
            name: "pipeline",
          },
        },
        {
          name: ["-c", "--confirm"],
          description: "",
          args: {
            name: "confirm",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--stage"],
          description: "New stage of app",
          args: {
            name: "stage",
          },
        },
      ],
    },
    {
      name: "reviewapps:disable",
      description:
        "Disable review apps and/or settings on an existing pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "Parent app used by review apps",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {
            name: "pipeline",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {
            name: "pipeline",
          },
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
          args: {
            name: "team",
          },
        },
      ],
    },
    {
      name: "spaces:create",
      description: "Create a new space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Name of space to create",
          args: {
            name: "space",
          },
        },
        {
          name: "--region",
          description: "Region name",
          args: {
            name: "region",
          },
        },
        {
          name: "--cidr",
          description: "RFC-1918 CIDR the space will use",
          args: {
            name: "cidr",
          },
        },
        {
          name: "--data-cidr",
          description:
            "RFC-1918 CIDR used by Heroku Data resources for the space",
          args: {
            name: "data-cidr",
          },
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {
            name: "team",
          },
        },
      ],
    },
    {
      name: "spaces:destroy",
      description: "Destroy a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to destroy",
          args: {
            name: "space",
          },
        },
        {
          name: "--confirm",
          description: "Set to space name to bypass confirm prompt",
          args: {
            name: "confirm",
          },
        },
      ],
    },
    {
      name: "spaces:info",
      description: "Show info about a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get info of",
          args: {
            name: "space",
          },
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
        "Display the information necessary to initiate a peering connection",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get peering info from",
          args: {
            name: "space",
          },
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
          args: {
            name: "space",
          },
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
          args: {
            name: "pcxid",
          },
        },
        {
          name: ["-s", "--space"],
          description: "Space to get peering info from",
          args: {
            name: "space",
          },
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
          args: {
            name: "pcxid",
          },
        },
        {
          name: ["-s", "--space"],
          description: "Space to get peering info from",
          args: {
            name: "space",
          },
        },
        {
          name: "--confirm",
          description: "Set to PCX ID to bypass confirm prompt",
          args: {
            name: "confirm",
          },
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
          args: {
            name: "space",
          },
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
          args: {
            name: "from",
          },
        },
        {
          name: "--to",
          description: "Desired name of space",
          args: {
            name: "to",
          },
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
          args: {
            name: "space",
          },
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
          name: "--space",
          description: "Name of space",
          args: {
            name: "space",
          },
        },
        {
          name: "--team",
          description: "Desired owner of space",
          args: {
            name: "team",
          },
        },
      ],
    },
    {
      name: "spaces:vpn:config",
      description: "Display the configuration information for VPN",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space the VPN connection belongs to",
          args: {
            name: "space",
          },
        },
        {
          name: ["-n", "--name"],
          description:
            "Name or id of the VPN connection to retrieve config from",
          args: {
            name: "name",
          },
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "spaces:vpn:connect",
      description: "Create VPN",
      options: [
        {
          name: ["-n", "--name"],
          description: "VPN name",
          args: {
            name: "name",
          },
        },
        {
          name: ["-i", "--ip"],
          description: "Public IP of customer gateway",
          args: {
            name: "ip",
          },
        },
        {
          name: ["-c", "--cidrs"],
          description: "A list of routable CIDRs separated by commas",
          args: {
            name: "cidrs",
          },
        },
        {
          name: ["-s", "--space"],
          description: "Space name",
          args: {
            name: "space",
          },
        },
      ],
    },
    {
      name: "spaces:vpn:connections",
      description: "List the VPN Connections for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get VPN connections from",
          args: {
            name: "space",
          },
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
          description: "Space to get peering info from",
          args: {
            name: "space",
          },
        },
        {
          name: ["-n", "--name"],
          description:
            "Name or id of the VPN connection to retrieve config from",
          args: {
            name: "name",
          },
        },
        {
          name: "--confirm",
          description: "Set to VPN connection name to bypass confirm prompt",
          args: {
            name: "confirm",
          },
        },
      ],
    },
    {
      name: "spaces:vpn:info",
      description: "Display the information for VPN",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space the vpn connection belongs to",
          args: {
            name: "space",
          },
        },
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-n", "--name"],
          description: "Name or id of the VPN connection to get info from",
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "spaces:vpn:update",
      description: "Update VPN",
      options: [
        {
          name: ["-n", "--name"],
          description: "VPN name",
          args: {
            name: "name",
          },
        },
        {
          name: ["-c", "--cidrs"],
          description: "A list of routable CIDRs separated by commas",
          args: {
            name: "cidrs",
          },
        },
        {
          name: ["-s", "--space"],
          description: "Space name",
          args: {
            name: "space",
          },
        },
      ],
    },
    {
      name: "spaces:vpn:wait",
      description: "Wait for VPN Connection to be created",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space the vpn connection belongs to",
          args: {
            name: "space",
          },
        },
        {
          name: ["-n", "--name"],
          description: "Name or id of the vpn connection to wait for",
          args: {
            name: "name",
          },
        },
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-i", "--interval"],
          description: "Seconds to wait between poll intervals",
          args: {
            name: "interval",
          },
        },
        {
          name: ["-t", "--timeout"],
          description: "Maximum number of seconds to wait",
          args: {
            name: "timeout",
          },
        },
      ],
    },
    {
      name: "spaces:wait",
      description: "Wait for a space to be created",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get info of",
          args: {
            name: "space",
          },
        },
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-i", "--interval"],
          description: "Seconds to wait between poll intervals",
          args: {
            name: "interval",
          },
        },
        {
          name: ["-t", "--timeout"],
          description: "Maximum number of seconds to wait",
          args: {
            name: "timeout",
          },
        },
      ],
    },
    {
      name: "trusted-ips",
      description: "List trusted IP ranges for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get inbound rules from",
          args: {
            name: "space",
          },
        },
        {
          name: "--json",
          description: "Output in json format",
        },
      ],
    },
    {
      name: "trusted-ips:add",
      description: "Add one range to the list of trusted IP ranges",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to add rule to",
          args: {
            name: "space",
          },
        },
        {
          name: "--confirm",
          description: "Set to space name to bypass confirm prompt",
          args: {
            name: "confirm",
          },
        },
      ],
      args: {
        name: "source",
      },
    },
    {
      name: "trusted-ips:remove",
      description: "Remove a range from the list of trusted IP ranges",
      options: [
        {
          name: "--space",
          description: "Space to remove rule from",
          args: {
            name: "space",
          },
        },
        {
          name: "--confirm",
          description: "Set to space name to bypass confirm prompt",
          args: {
            name: "confirm",
          },
        },
      ],
      args: {
        name: "source",
      },
    },
    {
      name: "ps:copy",
      description: "Copy a file from a dyno to the local filesystem",
      options: [
        {
          name: ["-d", "--dyno"],
          description: "Specify the dyno to connect to",
          args: {
            name: "dyno",
          },
        },
        {
          name: ["-o", "--output"],
          description: "The name of the output file",
          args: {
            name: "output",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "file",
      },
    },
    {
      name: "ps:exec",
      description: "Create an SSH session to a dyno",
      options: [
        {
          name: ["-d", "--dyno"],
          description: "Specify the dyno to connect to",
          args: {
            name: "dyno",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ps:forward",
      description: "Forward traffic on a local port to a dyno",
      options: [
        {
          name: ["-d", "--dyno"],
          description: "Specify the dyno to connect to",
          args: {
            name: "dyno",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "port",
      },
    },
    {
      name: "ps:socks",
      description: "Launch a SOCKS proxy into a dyno",
      options: [
        {
          name: ["-d", "--dyno"],
          description: "Specify the dyno to connect to",
          args: {
            name: "dyno",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "access",
      description: "List who has access to an app",
      options: [
        {
          name: "--json",
          description: "Output in json format",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "access:add",
      description: "Add new users to your app",
      options: [
        {
          name: ["-p", "--permissions"],
          description: "List of permissions comma separated",
          args: {
            name: "permissions",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "email",
      },
    },
    {
      name: "access:remove",
      description: "Remove users from a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "email",
      },
    },
    {
      name: "access:update",
      description: "Update existing collaborators on an team app",
      options: [
        {
          name: ["-p", "--permissions"],
          description:
            "Comma-delimited list of permissions to update (deploy,manage,operate)",
          args: {
            name: "permissions",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "email",
      },
    },
    {
      name: "apps:join",
      description: "Add yourself to a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "role",
          },
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
          args: {
            name: "team",
          },
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
          args: {
            name: "role",
          },
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {
            name: "team",
          },
        },
      ],
      args: {
        name: "email",
      },
    },
    {
      name: "members:remove",
      description: "Removes a user from a team",
      options: [
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {
            name: "team",
          },
        },
      ],
      args: {
        name: "email",
      },
    },
    {
      name: "members:set",
      description: "Sets a members role in a team",
      options: [
        {
          name: ["-r", "--role"],
          description: "Member role (admin, collaborator, member, owner)",
          args: {
            name: "role",
          },
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {
            name: "team",
          },
        },
      ],
      args: {
        name: "email",
      },
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
      ],
    },
    {
      name: "orgs:open",
      description: "Open the team interface in a browser window",
      options: [
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {
            name: "team",
          },
        },
      ],
    },
    {
      name: "teams",
      description: "List the teams that you are a member of",
      options: [
        {
          name: "--json",
          description: "Output in json format",
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: "--min",
          description: "Minimum number of dynos",
          args: {
            name: "min",
          },
        },
        {
          name: "--max",
          description: "Maximum number of dynos",
          args: {
            name: "max",
          },
        },
        {
          name: "--p95",
          description: "Desired p95 response time",
          args: {
            name: "p95",
          },
        },
        {
          name: "--notifications",
          description:
            "Receive email notifications when the max dyno limit is reached",
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-t", "--type"],
          description: "Wait for one specific dyno type",
          args: {
            name: "type",
          },
        },
        {
          name: ["-w", "--wait-interval"],
          description:
            "How frequently to poll in seconds (to avoid hitting Heroku API rate limits)",
          args: {
            name: "wait-interval",
          },
        },
        {
          name: ["-R", "--with-run"],
          description: "Whether to wait for one-off run dynos",
        },
      ],
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
      name: "webhooks",
      description: "List webhooks on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-i", "--include"],
          description: "Comma delimited event types your server will receive",
          args: {
            name: "include",
          },
        },
        {
          name: ["-l", "--level"],
          description:
            "Notify does not retry, sync will retry until successful or timeout",
          args: {
            name: "level",
          },
        },
        {
          name: ["-s", "--secret"],
          description:
            "Value to sign delivery with in Heroku-Webhook-Hmac-SHA256 header",
          args: {
            name: "secret",
          },
        },
        {
          name: ["-t", "--authorization"],
          description: "Authoriation header to send with webhooks",
          args: {
            name: "authorization",
          },
        },
        {
          name: ["-u", "--url"],
          description: "URL for receiver",
          args: {
            name: "url",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--status"],
          description: "Filter deliveries by status",
          args: {
            name: "status",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "id",
      },
    },
    {
      name: "webhooks:events",
      description: "List webhook events on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "id",
      },
    },
    {
      name: "webhooks:info",
      description: "Info for a webhook on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "id",
      },
    },
    {
      name: "webhooks:remove",
      description: "Removes a webhook from an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-i", "--include"],
          description: "Comma delimited event types your server will receive",
          args: {
            name: "include",
          },
        },
        {
          name: ["-l", "--level"],
          description:
            "Notify does not retry, sync will retry until successful or timeout",
          args: {
            name: "level",
          },
        },
        {
          name: ["-s", "--secret"],
          description:
            "Value to sign delivery with in Heroku-Webhook-Hmac-SHA256 header",
          args: {
            name: "secret",
          },
        },
        {
          name: ["-t", "--authorization"],
          description: "Authoriation header to send with webhooks",
          args: {
            name: "authorization",
          },
        },
        {
          name: ["-u", "--url"],
          description: "URL for receiver",
          args: {
            name: "url",
          },
        },
      ],
      args: {
        name: "id",
      },
    },
    {
      name: "commands",
      description: "List all the commands",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-j", "--json"],
          description: "Display unfiltered api data in json format",
        },
        {
          name: "--hidden",
          description: "Show hidden commands",
        },
        {
          name: "--columns",
          description: "Only show provided columns (comma-separated)",
          args: {
            name: "columns",
          },
        },
        {
          name: "--sort",
          description: "Property to sort by (prepend '-' for descending)",
          args: {
            name: "sort",
          },
        },
        {
          name: "--filter",
          description:
            "Filter property by partial string matching, ex: name=foo",
          args: {
            name: "filter",
          },
        },
        {
          name: "--csv",
          description: "Output is csv format [alias: --output=csv]",
        },
        {
          name: "--output",
          description: "Output in a more machine friendly format",
          args: {
            name: "output",
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
          name: "--all",
          description: "See all commands in CLI",
        },
      ],
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
      },
    },
    {
      name: "which",
      description: "Show which plugin a command is in",
      args: {
        name: "command",
      },
    },
    {
      name: "update",
      description: "Update the <%= config.bin %> CLI",
      args: {
        name: "channel",
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
      name: ["plugins:install", "plugins:add"],
      description: "Installs a plugin into the CLI",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-f", "--force"],
          description: "Yarn install with force flag",
        },
      ],
      args: {
        name: "plugin",
        description: "Plugin to install",
      },
    },
    {
      name: "plugins:link",
      description: "Links a plugin into the CLI for development",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: {
        name: "path",
        description: "Path to plugin",
        template: "folders",
      },
    },
    {
      name: ["plugins:uninstall", "plugins:unlink", "plugins:remove"],
      description: "Removes a plugin from the CLI",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: {
        name: "plugin",
        description: "Plugin to uninstall",
        isOptional: true,
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
          description: "",
        },
      ],
    },
    {
      name: "pg",
      description: "Show database information",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:backups",
      description: "List database backups",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "backup_id",
        isOptional: true,
      },
    },
    {
      name: "pg:backups:capture",
      description: "Capture a new backup",
      options: [
        {
          name: "--wait-interval",
          description: "",
          args: {
            name: "wait-interval",
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:backups:delete",
      description: "Delete a backup",
      options: [
        {
          name: ["-c", "--confirm"],
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "backup_id",
      },
    },
    {
      name: "pg:backups:download",
      description: "Downloads database backup",
      options: [
        {
          name: ["-o", "--output"],
          description: "Location to download to. Defaults to latest.dump",
          args: {
            name: "output",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "backup_id",
        isOptional: true,
      },
    },
    {
      name: "pg:backups:info",
      description: "Get information about a specific backup",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "backup_id",
        isOptional: true,
      },
    },
    {
      name: "pg:backups:restore",
      description: "Restore a backup (default latest) to a database",
      options: [
        {
          name: "--wait-interval",
          description: "",
          args: {
            name: "wait-interval",
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-c", "--confirm"],
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "backup",
          isOptional: true,
        },
        {
          name: "database",
          isOptional: true,
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
          args: {
            name: "at",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:backups:schedules",
      description: "List backup schedule",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:backups:url",
      description: "Get secret but publicly accessible URL of a backup",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "backup_id",
        isOptional: true,
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:connection-pooling:attach",
      description: "Add an attachment to a database using connection pooling",
      options: [
        {
          name: "--as",
          description: "Name for add-on attachment",
          args: {
            name: "as",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:copy",
      description: "Copy all data from source db to target",
      options: [
        {
          name: "--wait-interval",
          description: "",
          args: {
            name: "wait-interval",
          },
        },
        {
          name: "--verbose",
          description: "",
        },
        {
          name: "--confirm",
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "source",
        },
        {
          name: "target",
        },
      ],
    },
    {
      name: "pg:credentials",
      description: "Show information on credentials in the database",
      options: [
        {
          name: "--reset",
          description: "DEPRECATED",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:credentials:create",
      description: "Create credential within database",
      options: [
        {
          name: ["-n", "--name"],
          description: "Name of the new credential within the database",
          args: {
            name: "name",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:credentials:destroy",
      description: "Destroy credential within database",
      options: [
        {
          name: ["-n", "--name"],
          description: "Unique identifier for the credential",
          args: {
            name: "name",
          },
        },
        {
          name: ["-c", "--confirm"],
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:credentials:repair-default",
      description:
        "Repair the permissions of the default credential within database",
      options: [
        {
          name: ["-c", "--confirm"],
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:credentials:rotate",
      description: "Rotate the database credentials",
      options: [
        {
          name: ["-n", "--name"],
          description:
            "Which credential to rotate (default credentials if not specified)",
          args: {
            name: "name",
          },
        },
        {
          name: "--all",
          description: "Rotate all credentials",
        },
        {
          name: ["-c", "--confirm"],
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: "--force",
          description: "Forces rotating the targeted credentials",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
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
            name: "name",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:diagnose",
      description: "Run or view diagnostics report",
      options: [
        {
          name: "--json",
          description: "Format output as JSON",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "DATABASE|REPORT_ID",
        isOptional: true,
      },
    },
    {
      name: "pg:info",
      description: "Show database information",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:kill",
      description: "Kill a query",
      options: [
        {
          name: ["-f", "--force"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "pid",
        },
        {
          name: "database",
          isOptional: true,
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:links",
      description: "Lists all databases and information on link",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:links:create",
      description: "Create a link between data stores",
      options: [
        {
          name: "--as",
          description: "Name of link to create",
          args: {
            name: "as",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "remote",
        },
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:links:destroy",
      description: "Destroys a link between data stores",
      options: [
        {
          name: ["-c", "--confirm"],
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "database",
        },
        {
          name: "link",
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:maintenance",
      description: "Show current maintenance information",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:maintenance:run",
      description: "Start maintenance",
      options: [
        {
          name: ["-f", "--force"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:maintenance:window",
      description: "Set weekly maintenance window",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "database",
        },
        {
          name: "window",
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
          args: {
            name: "num",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:promote",
      description: "Sets DATABASE as your DATABASE_URL",
      options: [
        {
          name: ["-f", "--force"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
      },
    },
    {
      name: "pg:ps",
      description: "View active queries with execution time",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:psql",
      description: "Open a psql shell to the database",
      options: [
        {
          name: ["-c", "--command"],
          description: "SQL command to run",
          args: {
            name: "command",
          },
        },
        {
          name: ["-f", "--file"],
          description: "SQL file to run",
          args: {
            name: "file",
          },
        },
        {
          name: "--credential",
          description: "Credential to use",
          args: {
            name: "credential",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:pull",
      description: "Pull Heroku database into local or remote database",
      options: [
        {
          name: "--exclude-table-data",
          description:
            "Tables for which data should be excluded (use ';' to split multiple names)",
          args: {
            name: "exclude-table-data",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "source",
        },
        {
          name: "target",
        },
      ],
    },
    {
      name: "pg:push",
      description: "Push local or remote into Heroku database",
      options: [
        {
          name: "--exclude-table-data",
          description:
            "Tables for which data should be excluded (use ';' to split multiple names)",
          args: {
            name: "exclude-table-data",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "source",
        },
        {
          name: "target",
        },
      ],
    },
    {
      name: "pg:reset",
      description: "Delete all data in DATABASE",
      options: [
        {
          name: ["-c", "--confirm"],
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:settings",
      description: "Show your current database settings",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "pg:settings:log-lock-waits",
      description:
        "Controls whether a log message is produced when a session waits longer than the deadlock_timeout to acquire a lock. deadlock_timeout is set to 1 second",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "value",
          isOptional: true,
        },
        {
          name: "database",
          isOptional: true,
        },
      ],
    },
    {
      name: "pg:settings:log-min-duration-statement",
      description:
        "The duration of each completed statement will be logged if the statement completes after the time specified by VALUE",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "value",
          isOptional: true,
        },
        {
          name: "database",
          isOptional: true,
        },
      ],
    },
    {
      name: "pg:settings:log-statement",
      description: "Log_statement controls which SQL statements are logged",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: [
        {
          name: "value",
          isOptional: true,
        },
        {
          name: "database",
          isOptional: true,
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
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
      },
    },
    {
      name: "pg:upgrade",
      description:
        "Unfollow a database and upgrade it to the latest stable PostgreSQL version",
      options: [
        {
          name: ["-c", "--confirm"],
          description: "",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-v", "--version"],
          description: "PostgreSQL version to upgrade to",
          args: {
            name: "version",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
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
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
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
          args: {
            name: "wait-interval",
          },
        },
        {
          name: "--no-notify",
          description: "Do not show OS notification",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "psql",
      description: "Open a psql shell to the database",
      options: [
        {
          name: ["-c", "--command"],
          description: "SQL command to run",
          args: {
            name: "command",
          },
        },
        {
          name: ["-f", "--file"],
          description: "SQL file to run",
          args: {
            name: "file",
          },
        },
        {
          name: "--credential",
          description: "Credential to use",
          args: {
            name: "credential",
          },
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "database",
        isOptional: true,
      },
    },
    {
      name: "rake",
      options: [
        {
          name: "--size",
          description: "Dyno size",
          args: {},
        },
        {
          name: "--exit-code",
          description: "Passthrough the exit code of the remote command",
        },
        {
          name: "--env",
          description:
            "Environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
        {
          name: "--no-tty",
          description: "Force the command to not run in a tty",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: {
        name: "rake",
        isVariadic: true,
      },
    },
    {
      name: "addons:add",
      description: "Create a new add-on resource",
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
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: [{ name: "service:plan" }, { name: "addon", isVariadic: true }],
    },
    {
      name: "addons:remove",
      description: "Permanently destroy an add-on resource",
      options: [
        {
          name: "--force",
          description: "Allow destruction even if connected to other apps",
        },
        { name: "--confirm", args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: { name: "addon", isVariadic: true },
    },
    {
      name: "create",
      description: "Creates a new app",
      options: [
        { name: "--app", args: {} },
        {
          name: "--addons",
          description: "Comma-delimited list of addons to install",
          args: {},
        },
        {
          name: "--buildpack",
          description: "Buildpack url to use for this app",
          args: {},
        },
        {
          name: "--manifest",
          description: "Use heroku.yml settings for this app",
        },
        { name: "--no-remote", description: "Do not create a git remote" },
        {
          name: "--remote",
          description: 'The git remote to create, default "heroku"',
          args: {},
        },
        {
          name: "--stack",
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
          name: "--ssh-git",
          description: "Use SSH git protocol for local git remote",
        },
        {
          name: "--internal-routing",
          description:
            "Private space-only. create as an Internal Web App that is only routable in the local network",
        },
        { name: "--features", args: {} },
        { name: "--kernel", args: {} },
        { name: "--locked" },
        { name: "--json", description: "Output in json format" },
        { name: "--team", description: "Team to use", args: {} },
      ],
      args: { name: "app", generators: getAppGenerator },
    },
    {
      name: "destroy",
      description: "Permanently destroy an app",
      options: [
        { name: "--confirm", args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: { name: "app", generators: getAppGenerator },
    },
    {
      name: "apps:delete",
      description: "Permanently destroy an app",
      options: [
        { name: "--confirm", args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: { name: "app", generators: getAppGenerator },
    },
    {
      name: "list",
      description: "List your apps",
      options: [
        { name: "--all", description: "Include apps in all teams" },
        { name: "--json", description: "Output in json format" },
        { name: "--space", description: "Filter by space", args: {} },
        {
          name: "--personal",
          description:
            "List apps in personal account when a default team is set",
        },
        {
          name: "--internal-routing",
          description: "Filter to Internal Web Apps",
        },
        { name: "--team", description: "Team to use", args: {} },
      ],
    },
    {
      name: "apps:list",
      description: "List your apps",
      options: [
        { name: "--all", description: "Include apps in all teams" },
        { name: "--json", description: "Output in json format" },
        { name: "--space", description: "Filter by space", args: {} },
        {
          name: "--personal",
          description:
            "List apps in personal account when a default team is set",
        },
        {
          name: "--internal-routing",
          description: "Filter to Internal Web Apps",
        },
        { name: "--team", description: "Team to use", args: {} },
      ],
    },
    {
      name: "info",
      description: "Show detailed app information",
      options: [
        {
          name: "--shell",
          description: "Output more shell friendly key/value pairs",
        },
        { name: "--extended" },
        { name: "--json" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: { name: "app", generators: getAppGenerator },
    },
    {
      name: "open",
      description: "Open the app in a web browser",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "rename",
      description: "Rename an app",
      options: [
        {
          name: "--ssh-git",
          description: "Use ssh git protocol instead of https",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "newname" },
    },
    {
      name: "stack",
      description: "Show the list of available stacks",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
    },
    {
      name: "stack:set",
      description: "Set the stack of an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "stack" },
    },
    {
      name: "config:add",
      description: "Set one or more config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "confi", isVariadic: true },
    },
    {
      name: "dashboard",
      description: "Display information about favorite apps",
    },
    {
      name: "restart",
      description: "Restart app dynos",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "dyno" },
    },
    {
      name: "scale",
      description: "Scale dyno quantity up or down",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "scal", isVariadic: true },
    },
    {
      name: "stop",
      description: "Stop app dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "dyno" },
    },
    {
      name: "kill",
      description: "Stop app dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "dyno" },
    },
    {
      name: "resize",
      description: "Manage dyno sizes",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "resiz", isVariadic: true },
    },
    {
      name: "dyno:type",
      description: "Manage dyno sizes",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "dyn", isVariadic: true },
    },
    {
      name: "rollback",
      description: "Rollback to a previous release",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "release" },
    },
    {
      name: "auth:disable",
      description: "Disables an experimental feature",
      args: { name: "feature", isOptional: true },
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {},
        },
        { name: "confirm", args: {} },
      ],
    },
    {
      name: "certs:wait",
      description: "Waits for the certificate to be activated",
      options: [
        { name: ["-h", "--help"], description: "Show help for this command" },
      ],
    },
    {
      name: "git:credentials",
      description: "Internal command for git-credentials",
      args: { name: "command" },
    },
    { name: "sharing:add", args: { name: "sharin", isVariadic: true } },
    {
      name: "sharing:access",
      args: { name: "sharin", isVariadic: true },
    },
    {
      name: "sharing:remove",
      args: { name: "sharin", isVariadic: true },
    },
    {
      name: "join:null",
      description: "Add yourself to a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
    },
    {
      name: "leave:null",
      description: "Remove yourself from a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
    },
    {
      name: "sharing:transfer",
      args: { name: "sharin", isVariadic: true },
    },
    {
      name: "unlock:null",
      description: "Unlock an app so any team member can join",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
    },
    { name: "orgs:default" },
    {
      name: "pg:backups:public-url",
      description: "Get secret but publicly accessible URL of a backup",
      options: [
        { name: "--quiet" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "backup_id" },
    },
    {
      name: "pg:backups:publicurl",
      description: "Get secret but publicly accessible URL of a backup",
      options: [
        { name: "--quiet" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "backup_id" },
    },
    {
      name: "pg:repoint",
      description: "Changes which leader a follower is following",
      options: [
        { name: "--confirm", args: {} },
        {
          name: "--follow",
          description: "Leader database to follow",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "database" },
    },
    {
      name: "pg:settings:log-connections",
      description:
        "Controls whether a log message is produced when a login attempt is made. Default is true",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: [{ name: "value" }, { name: "database" }],
    },
    {
      name: "pg:vacuum_stats",
      description:
        "Show dead rows and whether an automatic vacuum is expected to be triggered",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
      args: { name: "database" },
    },
    {
      name: "pipelines:disable",
      description:
        "Disable review apps and/or settings on an existing pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {},
        },
        { name: "pipeline", args: {} },
        { name: "autodeploy", description: "Disable autodeployments" },
        {
          name: "autodestroy",
          description: "Disable automatically destroying review apps",
        },
      ],
    },
    {
      name: "pipelines:enable",
      description: "Enable review apps and/or settings on an existing pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        { name: "autodeploy", description: "Autodeploy the review app" },
        { name: "autodestroy", description: "Autodestroy the review app" },
      ],
    },
    {
      name: "ps:disable",
      description: "Disable web dyno autoscaling",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "ps:enable",
      description: "Enable web dyno autoscaling",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {},
        },
        { name: "min", description: "Minimum number of dynos", args: {} },
        { name: "max", description: "Maximum number of dynos", args: {} },
        { name: "p95", description: "Desired p95 response time", args: {} },
        {
          name: "notifications",
          description:
            "Receive email notifications when the max dyno limit is reached",
        },
      ],
    },
    {
      name: "ps:regions",
      description: "List available regions for deployment",
      options: [
        { name: "json", description: "Output in json format" },
        { name: "private", description: "Show regions for private spaces" },
        { name: "common", description: "Show regions for common runtime" },
      ],
    },
    {
      name: "run:console",
      description: "",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {},
        },
        { name: ["-s", "--size"], description: "Dyno size", args: {} },
        {
          name: ["-e", "--env"],
          description:
            "Environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
      ],
    },
    {
      name: "run:logs",
      description: "",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-n", "--num"],
          description: "Number of lines to display",
          args: {},
        },
        {
          name: ["-p", "--ps"],
          description: "Hidden alias for dyno",
          args: {},
        },
        {
          name: ["-d", "--dyno"],
          description:
            'Only show output from this dyno type (such as "web" or "worker")',
          args: {},
        },
        {
          name: ["-s", "--source"],
          description:
            'Only show output from this source (such as "app" or "heroku")',
          args: {},
        },
        { name: ["-t", "--tail"], description: "Continually stream logs" },
      ],
    },
    {
      name: "run:rake",
      description: "",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {},
        },
        { name: ["-s", "--size"], description: "Dyno size", args: {} },
        {
          name: ["-e", "--env"],
          description:
            "Environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
      ],
    },
    {
      name: "run:inside",
      description: "Run a one-off process inside an existing heroku dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-e", "--env"],
          description:
            "Environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
        { name: "listen", description: "Listen on a local port" },
      ],
    },
    {
      name: "console",
      options: [
        { name: "--size", description: "Dyno size", args: {} },
        {
          name: "--env",
          description:
            "Environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
      ],
    },
    {
      name: "spaces:hosts",
      description: "List dedicated hosts for a space",
      options: [
        {
          name: "--space",
          description: "Space to get host list from",
          args: {},
        },
        { name: "--json", description: "Output in json format" },
      ],
      args: { name: "space" },
    },
  ],
};

export default completionSpec;
