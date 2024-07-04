import { getAppGenerator } from "./shared";

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

const versions: Fig.VersionDiffMap = {};

versions["8.11.1"] = {
  subcommands: [
    {
      name: "2fa",
      description: "Check 2fa status",
    },
    {
      name: "twofactor",
      description: "Check 2fa status",
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
      options: [
        {
          name: ["-s", "--sso"],
          description: "Login for enterprise users under SSO",
          hidden: true,
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
      name: "logout",
      description: "Clears local login credentials and invalidates API session",
    },
    {
      name: "auth:token",
      description:
        "Outputs current CLI authentication token.\nBy default, the CLI auth token is only valid for 1 year. To generate a long-lived token, use heroku authorizations:create",
    },
    {
      name: "whoami",
      description: "Display the current logged in user",
    },
    {
      name: "authorizations:create",
      options: [
        {
          name: ["-d", "--description"],
          description: "Set a custom authorization",
        },
      ],
    },
    {
      name: "authorizations:destroy",
      description: "Revoke OAuth authorization",
      args: {
        name: "id",
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
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "buildpacks:add",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "buildpacks:clear",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "buildpacks:remove",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "buildpacks:set",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
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
      name: "config",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
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
          isRequired: true,
        },
      ],
    },
    {
      name: "config:get",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "config:unset",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
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
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
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
      name: "domains",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
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
      ],
    },
    {
      name: "domains:add",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "domains:clear",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "domains:info",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "domains:remove",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "domains:update",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: "--cert",
          isRequired: true,
        },
      ],
    },
    {
      name: "domains:wait",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "git:clone",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: "--ssh-git",
          remove: true,
        },
      ],
    },
    {
      name: "git:credentials",
      hidden: true,
    },
    {
      name: "git:remote",
      description:
        "Adds a git remote to an app repo\nextra arguments will be passed to git remote add\n",
      options: [
        {
          name: "--ssh-git",
          remove: true,
        },
      ],
    },
    {
      name: "local",
      description:
        "Run heroku app locally\nStart the application specified by a Procfile (defaults to ./Procfile)",
      options: [
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
        isOptional: true,
      },
    },
    {
      name: "logs",
      description:
        "Display recent log output\ndisable colors with --no-color, HEROKU_LOGS_COLOR=0, or HEROKU_COLOR=0",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: ["-p", "--ps"],
          description: "Hidden alias for dyno",
          args: {},
          hidden: true,
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
          isRequired: true,
        },
      ],
    },
    {
      name: "pipelines:connect",
      description: "Connect a GitHub repo to an existing pipeline",
      options: [
        {
          name: ["-r", "--repo"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pipelines:create",
      description:
        "Create a new pipeline\n  An existing app must be specified as the first app in the pipeline.\n  The pipeline name will be inferred from the app name if not specified.\n  The stage of the app will be guessed based on its name if not specified.\n  The pipeline owner will be the user creating the pipeline if not specified with -t for teams or -o for orgs",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pipelines:diff",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pipelines:info",
      options: [
        {
          name: "--with-owners",
          description: "Shows owner of every app",
          hidden: true,
        },
      ],
    },
    {
      name: "pipelines:promote",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pipelines:remove",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pipelines:transfer",
      options: [
        {
          name: ["-p", "--pipeline"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pipelines:update",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: ["-s", "--stage"],
          isRequired: true,
        },
      ],
    },
    {
      name: "ps:autoscale:disable",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "ps:autoscale:enable",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: "--min",
          isRequired: true,
        },
        {
          name: "--max",
          isRequired: true,
        },
      ],
    },
    {
      name: "ps:wait",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: ["-w", "--wait-interval"],
          args: {
            default: "10",
          },
        },
      ],
    },
    {
      name: "rake",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
          description: "Parent app used by review apps",
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
      name: "reviewapps:disable",
      options: [
        {
          name: ["-p", "--pipeline"],
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
      ],
    },
    {
      name: "reviewapps:enable",
      options: [
        {
          name: ["-p", "--pipeline"],
          isRequired: true,
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
          isRequired: true,
        },
        {
          name: "--listen",
          description: "Listen on a local port",
          hidden: true,
        },
      ],
    },
    {
      name: "run:detached",
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "run:inside",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
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
          name: "listen",
          remove: true,
        },
      ],
    },
    {
      name: "webhooks",
      options: [
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
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
        {
          name: ["-i", "--include"],
          isRequired: true,
        },
        {
          name: ["-l", "--level"],
          isRequired: true,
        },
        {
          name: ["-t", "--authorization"],
          description: "Authorization header to send with webhooks",
        },
        {
          name: ["-u", "--url"],
          isRequired: true,
        },
      ],
    },
    {
      name: "webhooks:deliveries",
      options: [
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
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "webhooks:events",
      options: [
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
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "webhooks:info",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "webhooks:remove",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "webhooks:update",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "Pipeline on which to list",
          args: {},
          hidden: true,
        },
        {
          name: ["-i", "--include"],
          isRequired: true,
        },
        {
          name: ["-l", "--level"],
          isRequired: true,
        },
        {
          name: ["-t", "--authorization"],
          description: "Authorization header to send with webhooks",
        },
        {
          name: ["-u", "--url"],
          isRequired: true,
        },
      ],
    },
    {
      name: "certs",
      description: "List SSL certificates for an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "certs:add",
      description:
        "Add an SSL certificate to an app\nNote: certificates with PEM encoding are also valid",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: "--type",
          remove: true,
        },
      ],
    },
    {
      name: "certs:auto",
      description: "Show ACM status for an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "certs:auto:disable",
      description: "Disable ACM for an app\n",
      hidden: false,
      options: [
        {
          name: "--confirm",
          args: {},
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "certs:auto:enable",
      description: "Enable ACM status for an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "certs:auto:refresh",
      description: "Refresh ACM for an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "certs:chain",
      description: "Print an ordered & complete chain for a certificate\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "certs:generate",
      description:
        "Generate a key and a CSR or self-signed certificate\nGenerate a key and certificate signing request (or self-signed certificate)\nfor an app. Prompts for information to put in the certificate unless --now\nis used, or at least one of the --subject, --owner, --country, --area, or\n--city options is specified",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "certs:info",
      description: "Show certificate information for an SSL certificate\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "certs:key",
      description:
        "Print the correct key for the given certificate\nYou must pass one single certificate, and one or more keys.\nThe first key that signs the certificate will be printed back",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "certs:remove",
      description: "Remove an SSL certificate from an app\n",
      hidden: false,
      options: [
        {
          name: "--confirm",
          args: {},
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "certs:update",
      description:
        "Update an SSL certificate on an app\nNote: certificates with PEM encoding are also valid",
      hidden: false,
      options: [
        {
          name: "--confirm",
          args: {},
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "addons",
      description:
        "Lists your add-ons and attachments\nThe default filter applied depends on whether you are in a Heroku app\ndirectory. If so, the --app flag is implied. If not, the default of --all\nis implied. Explicitly providing either flag overrides the default\nbehavior",
      hidden: false,
    },
    {
      name: "addons:add",
      description: "Create a new add-on resource\n",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: [
        {},
        {
          remove: true,
        },
      ],
    },
    {
      name: "addons:attach",
      description: "Attach an existing add-on resource to an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "addons:create",
      description: "Create a new add-on resource\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "addons:destroy",
      description: "Permanently destroy an add-on resource\n",
      hidden: false,
      options: [
        {
          name: "--wait",
          description: "Watch add-on destruction status and exit when complete",
        },
      ],
    },
    {
      name: "addons:detach",
      description: "Detach an existing add-on resource from an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "addons:docs",
      description:
        "Open an add-on's Dev Center documentation in your browser\n",
      hidden: false,
    },
    {
      name: "addons:downgrade",
      description:
        "Change add-on plan\nSee available plans with `heroku addons:plans SERVICE`.\n\nNote that `heroku addons:upgrade` and `heroku addons:downgrade` are the same.\nEither one can be used to change an add-on plan up or down.\n\nhttps://devcenter.heroku.com/articles/managing-add-ons",
      hidden: false,
    },
    {
      name: "addons:info",
      description: "Show detailed add-on resource and attachment information\n",
      hidden: false,
    },
    {
      name: "addons:open",
      description: "Open an add-on's dashboard in your browser\n",
      hidden: false,
    },
    {
      name: "addons:plans",
      description: "List all available plans for an add-on services\n",
      hidden: false,
    },
    {
      name: "addons:remove",
      description: "Permanently destroy an add-on resource\n",
      hidden: true,
      options: [
        {
          name: "--wait",
          description: "Watch add-on destruction status and exit when complete",
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "addons:rename",
      description: "Rename an add-on\n",
      hidden: false,
    },
    {
      name: "addons:services",
      description: "List all available add-on services\n",
      hidden: false,
    },
    {
      name: "addons:upgrade",
      description:
        "Change add-on plan\nSee available plans with `heroku addons:plans SERVICE`.\n\nNote that `heroku addons:upgrade` and `heroku addons:downgrade` are the same.\nEither one can be used to change an add-on plan up or down.\n\nhttps://devcenter.heroku.com/articles/managing-add-ons",
      hidden: false,
    },
    {
      name: "addons:wait",
      description: "Show provisioning status of the add-ons on the app\n",
      hidden: false,
    },
    {
      name: "ci:config",
      description:
        "Display CI config vars\nExample:\n\n    $ heroku ci:config --app murmuring-headland-14719 --json",
      hidden: false,
    },
    {
      name: "ci:config:get",
      description:
        "Get a CI config var\nExamples:\n\n    $ heroku ci:config:get RAILS_ENV\n    test\n",
      hidden: false,
    },
    {
      name: "ci:config:set",
      description:
        "Set CI config vars\nExamples:\n\n    $ heroku ci:config:set RAILS_ENV=test\n    Setting test config vars... done\n\n    RAILS_ENV: test\n",
      hidden: false,
    },
    {
      name: "ci:config:unset",
      description:
        "Unset CI config vars\nExamples:\n\n    $ heroku ci:config:uset RAILS_ENV\n    Unsetting RAILS_ENV... done\n",
      hidden: false,
    },
    {
      name: "ci:debug",
      description:
        "Opens an interactive test debugging session with the contents of the current directory\nExample:\n\n    $ heroku ci:debug\n    Preparing source... done\n    Creating test run... done\n    Running setup and attaching to test dyno...\n\n~ $\n",
      hidden: false,
    },
    {
      name: "ci:migrate-manifest",
      description:
        "App-ci.json is deprecated. Run this command to migrate to app.json with an environments key.\nExample:\n\n    $ heroku ci:migrate-manifest\n    Writing app.json file... done\n    Deleting app-ci.json file... done\n    Please check the contents of your app.json before committing to your repo\n    You're all set! 🎉",
      hidden: false,
    },
    {
      name: "ci:open",
      description:
        "Open the Dashboard version of Heroku CI\nopens a browser to view the Dashboard version of Heroku CI\n\n    Example:\n\n    $ heroku ci:open --app murmuring-headland-14719",
      hidden: false,
    },
    {
      name: "container",
      description: "Use containers to build and deploy Heroku apps\n",
      hidden: false,
    },
    {
      name: "container:login",
      description:
        "Log in to Heroku Container Registry\nUsage:\n        heroku container:login",
      hidden: false,
    },
    {
      name: "container:logout",
      description: "Log out from Heroku Container Registry\n",
      hidden: false,
    },
    {
      name: "container:pull",
      description:
        "Pulls an image from an app's process type\n\n    \u001b[1m\u001b[4m\u001b[35mUsage:\u001b[39m\u001b[24m\u001b[22m\n    \u001b[36m\u001b[1mheroku container:pull web\u001b[22m\u001b[39m        # Pulls the web image from the app\n    \u001b[36m\u001b[1mheroku container:pull web worker\u001b[22m\u001b[39m # Pulls both the web and worker images from the app\n    \u001b[36m\u001b[1mheroku container:pull web:latest\u001b[22m\u001b[39m # Pulls the latest tag from the web image",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "container:push",
      description:
        "Builds, then pushes Docker images to deploy your Heroku app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "container:release",
      description:
        "Releases previously pushed Docker images to your Heroku app\n\n    \u001b[1m\u001b[4m\u001b[35mUsage:\u001b[39m\u001b[24m\u001b[22m\n    \u001b[36m\u001b[1mheroku container:release web\u001b[22m\u001b[39m                       # Releases the previously pushed web process type\n    \u001b[36m\u001b[1mheroku container:release web worker\u001b[22m\u001b[39m                # Releases the previously pushed web and worker process types",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "container:rm",
      description:
        "Remove the process type from your app\n\n    \u001b[1m\u001b[4m\u001b[35mUsage:\u001b[39m\u001b[24m\u001b[22m\n    \u001b[36m\u001b[1mheroku container:rm web\u001b[22m\u001b[39m        # Destroys the web container\n    \u001b[36m\u001b[1mheroku container:rm web worker\u001b[22m\u001b[39m # Destroys the web and worker containers",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "container:run",
      description:
        "Builds, then runs the docker image locally\n\n    \u001b[1m\u001b[4m\u001b[35mUsage:\u001b[39m\u001b[24m\u001b[22m\n    \u001b[36m\u001b[1mheroku container:run web bash\u001b[22m\u001b[39m # Runs bash on the local web docker container\n    \u001b[36m\u001b[1mheroku container:run worker\u001b[22m\u001b[39m   # Runs the container CMD on the local worker container",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "ps:copy",
      description:
        "Copy a file from a dyno to the local filesystem\nExample:\n\n    $ heroku ps:copy FILENAME --app murmuring-headland-14719",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "ps:exec",
      description:
        "Create an SSH session to a dyno\nExample:\n\n    $ heroku ps:exec 'node -i' --app murmuring-headland-14719",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "ps:forward",
      description:
        'Forward traffic on a local port to a dyno\nProvide a port or comma-separated list of ports to forward.\n\n    For example, "4000,9000:9001" will forward port 4000 to port 4000 and\n    port 9000 to port 9001.\n\n    Example:\n\n    $ heroku ps:forward 8080 --app murmuring-headland-14719',
      hidden: false,
      options: [
        {
          name: ["-p", "--localPort"],
          description: "The local port to use",
          args: {},
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "ps:socks",
      description:
        "Launch a SOCKS proxy into a dyno\nExample:\n\n    $ heroku ps:socks --app murmuring-headland-14719\n    Establishing credentials... done\n    SOCKSv5 proxy server started on port 1080\n    Use CTRL+C to stop the proxy",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "redis",
      description: "Gets information about redis\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "redis:cli",
      description: "Opens a redis prompt\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "redis:credentials",
      description: "Display credentials information\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "redis:info",
      description: "Gets information about redis\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "redis:keyspace-notifications",
      description:
        'Set the keyspace notifications configuration\nSet the configuration to enable keyspace notification events:\n    K     Keyspace events, published with __keyspace@<db>__ prefix.\n    E     Keyevent events, published with __keyevent@<db>__ prefix.\n    g     Generic commands (non-type specific) like DEL, EXPIRE, RENAME, ...\n    $     String commands\n    l     List commands\n    s     Set commands\n    h     Hash commands\n    z     Sorted set commands\n    t     Stream commands\n    x     Expired events (events generated every time a key expires)\n    e     Evicted events (events generated when a key is evicted for maxmemory)\n    m     Key miss events (events generated when a key that doesn\'t exist is accessed)\n    A     Alias for "g$lshztxe", so that the "AKE" string means all the events except "m".\n\n    pass an empty string (\'\') to disable keyspace notifications\n',
      hidden: false,
      options: [
        {
          name: ["-c", "--config"],
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "redis:maintenance",
      description:
        "Manage maintenance windows\nSet or change the maintenance window for your Redis instance",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "redis:maxmemory",
      description:
        "Set the key eviction policy\nSet the key eviction policy when instance reaches its storage limit. Available policies for key eviction include:\n\n    noeviction      # returns errors when memory limit is reached\n    allkeys-lfu     # removes less frequently used keys first\n    volatile-lfu    # removes less frequently used keys first that have an expiry set\n    allkeys-lru     # removes less recently used keys first\n    volatile-lru    # removes less recently used keys first that have an expiry set\n    allkeys-random  # evicts random keys\n    volatile-random # evicts random keys but only those that have an expiry set\n    volatile-ttl    # only evicts keys with an expiry set and a short TTL\n",
      hidden: false,
      options: [
        {
          name: ["-p", "--policy"],
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "redis:promote",
      description: "Sets DATABASE as your REDIS_URL\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "redis:stats-reset",
      description:
        "Reset all stats covered by RESETSTAT (https://redis.io/commands/config-resetstat)\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "redis:timeout",
      description:
        "Set the number of seconds to wait before killing idle connections\nSets the number of seconds to wait before killing idle connections. A value of zero means that connections will not be closed",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "redis:upgrade",
      description: "Perform in-place version upgrade\n",
      options: [
        {
          name: ["-c", "--confirm"],
          args: {},
        },
        {
          name: ["-v", "--version"],
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
        isOptional: true,
      },
      hidden: false,
    },
    {
      name: "redis:wait",
      description: "Wait for Redis instance to be available\n",
      hidden: false,
      options: [
        {
          name: "--wait-interval",
          description: "How frequently to poll in seconds",
          args: {},
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "access",
      description: "List who has access to an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "access:add",
      description: "Add new users to your app\n",
      hidden: false,
      options: [
        {
          name: "--privileges",
          args: {},
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "access:remove",
      description: "Remove users from a team app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "access:update",
      description: "Update existing collaborators on an team app\n",
      hidden: false,
      options: [
        {
          name: "--privileges",
          args: {},
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "apps:join",
      description: "Add yourself to a team app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "apps:leave",
      description: "Remove yourself from a team app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "apps:lock",
      description: "Prevent team members from joining an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "apps:transfer",
      description: "Transfer applications to another user or team\n",
      hidden: false,
    },
    {
      name: "apps:unlock",
      description: "Unlock an app so any team member can join\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "join",
      description: "Add yourself to a team app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "leave",
      description: "Remove yourself from a team app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "lock",
      description: "Prevent team members from joining an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "members",
      description: "List members of a team\n",
      hidden: false,
      options: [
        {
          name: ["-t", "--team"],
          hidden: false,
        },
        {
          name: ["-o", "--org"],
          description: "Team to use",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "members:add",
      description: "Adds a user to a team\n",
      hidden: false,
      options: [
        {
          name: ["-r", "--role"],
          isRequired: true,
        },
        {
          name: ["-t", "--team"],
          hidden: false,
        },
        {
          name: ["-o", "--org"],
          description: "Team to use",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "members:remove",
      description: "Removes a user from a team\n",
      hidden: false,
      options: [
        {
          name: ["-t", "--team"],
          hidden: false,
        },
        {
          name: ["-o", "--org"],
          description: "Team to use",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "members:set",
      description: "Sets a members role in a team\n",
      hidden: false,
      options: [
        {
          name: ["-r", "--role"],
          isRequired: true,
        },
        {
          name: ["-t", "--team"],
          hidden: false,
        },
        {
          name: ["-o", "--org"],
          description: "Team to use",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "orgs",
      description: "List the teams that you are a member of\n",
      hidden: false,
      options: [
        {
          name: "--teams",
          description: "Filter by teams",
          hidden: true,
        },
      ],
    },
    {
      name: "orgs:default",
      description: "\n",
      hidden: true,
    },
    {
      name: "orgs:open",
      description: "Open the team interface in a browser window\n",
      hidden: false,
      options: [
        {
          name: ["-t", "--team"],
          hidden: false,
        },
        {
          name: ["-o", "--org"],
          description: "Team to use",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "sharing:access",
      description: "\nThis command is now heroku access",
      hidden: true,
    },
    {
      name: "sharing:add",
      description: "\nthis command is now heroku access:add",
      hidden: true,
    },
    {
      name: "sharing:remove",
      description: "\nthis command is now heroku access:remove",
      hidden: true,
    },
    {
      name: "sharing:transfer",
      description: "\nthis command is now heroku apps:transfer",
      hidden: true,
    },
    {
      name: "teams",
      description:
        "List the teams that you are a member of\n\nUse \u001b[36m\u001b[1mheroku members:*\u001b[22m\u001b[39m to manage team members.\n",
      hidden: false,
    },
    {
      name: "unlock",
      description: "Unlock an app so any team member can join\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "drains:get",
      description: "Display the log drain for a space\n",
      hidden: true,
      options: [
        {
          name: ["-s", "--space"],
          isRequired: true,
        },
      ],
    },
    {
      name: "drains:set",
      description: "Replaces the log drain for a space\n",
      hidden: true,
      options: [
        {
          name: ["-s", "--space"],
          isRequired: true,
        },
      ],
    },
    {
      name: "outbound-rules",
      description:
        'List Outbound Rules for a space\n\nOutbound Rules are only available on Private Spaces.\n\nNewly created spaces will have an "Allow All" rule set by default\nallowing all egress dyno traffic outside of the space.  You can\nremove this default rule to completely stop your private dynos from\ntalking to the world.\n\nYou can add specific rules that only allow your dyno to communicate with trusted hosts.\n',
      hidden: true,
    },
    {
      name: "outbound-rules:add",
      description:
        "Add outbound rules to a Private Space\n\nThe destination flag uses CIDR notation.\n\n Example:\n\n    $ heroku outbound-rules:add --space my-space --dest 192.168.2.0/24 --protocol tcp --port 80\n    Added 192.168.0.1/24 to the outbound rules on my-space\n\n Example with port range:\n\n    $ heroku outbound-rules:add --space my-space --dest 192.168.2.0/24 --protocol tcp --port 80-100\n    Added 192.168.0.1/24 to the outbound rules on my-space\n\n Example opening up everything\n\n    $ heroku outbound-rules:add --space my-space --dest 0.0.0.0/0 --protocol any --port any\n    Added 0.0.0.0/0 to the outbound rules on my-space\n\nICMP Rules\nThe ICMP protocol has types, not ports, but the underlying systems treat them as the same. For this reason,\nwhen you want to allow ICMP traffic you will use the --port flag to specify the ICMP types you want to\nallow. ICMP types are numbered, 0-255.\n",
      hidden: true,
    },
    {
      name: "outbound-rules:remove",
      description:
        "Remove a Rules from the list of Outbound Rules\nExample:\n\n    $ heroku outbound-rules:remove --space my-space 4\n    Removed 192.168.2.0/24 from trusted IP ranges on my-space\n",
      hidden: true,
      options: [
        {
          name: "--space",
          isRequired: true,
        },
      ],
    },
    {
      name: "spaces",
      description: "List available spaces\n",
      hidden: false,
      options: [
        {
          name: ["-t", "--team"],
          hidden: false,
        },
        {
          name: ["-o", "--org"],
          description: "Team to use",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "spaces:create",
      description:
        "Create a new space\nExample:\n\n    $ heroku spaces:create --space my-space --team my-team --region oregon\n    Creating space my-space in team my-team... done\n    === my-space\n    ID:         e7b99e37-69b3-4475-ad47-a5cc5d75fd9f\n    Team:       my-team\n    Region:     oregon\n    CIDR:       10.0.0.0/16\n    Data CIDR:  172.23.0.0/20\n    State:      allocating\n    Created at: 2016-01-06T03:23:13Z\n\n",
      hidden: false,
      options: [
        {
          name: "--channel",
          args: {},
          hidden: true,
        },
        {
          name: "--features",
          description: "A list of features separated by commas",
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
          name: "--shield",
          description: "Create a Shield space",
          hidden: true,
        },
        {
          name: "--kpi-url",
          description: "Self-managed KPI endpoint to use",
          args: {},
          hidden: true,
        },
        {
          name: ["-t", "--team"],
          hidden: false,
        },
        {
          name: ["-o", "--org"],
          description: "Team to use",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "spaces:destroy",
      description:
        "Destroy a space\nExample:\n\n    $ heroku spaces:destroy --space my-space\n    Destroying my-space... done\n",
      hidden: false,
    },
    {
      name: "spaces:hosts",
      description: "List dedicated hosts for a space\n",
      hidden: true,
    },
    {
      name: "spaces:info",
      description: "Show info about a space\n",
      hidden: false,
    },
    {
      name: "spaces:peering:info",
      description:
        'Display the information necessary to initiate a peering connection\nExample:\n\n    $ heroku spaces:peering:info example-space\n    === example-space Peering Info\n    AWS Account ID:    012345678910\n    AWS Region:        us-west-2\n    AWS VPC ID:        vpc-baadf00d\n    AWS VPC CIDR:      10.0.0.0/16\n    Space CIDRs:       10.0.128.0/20, 10.0.144.0/20\n    Unavailable CIDRs: 10.1.0.0/16\n\nYou will use the information provided by this command to establish a peering connection request from your AWS VPC to your private space.\n\nTo start the peering process, go into your AWS console for the VPC you would like peered with your Private Space,\nnavigate to the VPC service, choose the "Peering Connections" option and click the "Create peering connection" button.\n\n- The AWS Account ID and VPC ID are necessary for the AWS VPC Peering connection wizard.\n- You will also need to configure your VPC route table to route the Dyno CIDRs through the peering connection.\n\nOnce you\'ve established the peering connection request, you can use the spaces:peerings:accept command to accept and\nconfigure the peering connection for the space.\n',
      hidden: false,
    },
    {
      name: "spaces:peerings",
      description: "List peering connections for a space\n",
      hidden: false,
    },
    {
      name: "spaces:peerings:accept",
      description:
        "Accepts a pending peering request for a private space\nExample:\n\n    $ heroku spaces:peerings:accept pcx-4bd27022 --space example-space\n    Accepting and configuring peering connection pcx-4bd27022\n",
      hidden: false,
    },
    {
      name: "spaces:peerings:destroy",
      description:
        "Destroys an active peering connection in a private space\nExample:\n\n    $ heroku spaces:peerings:destroy pcx-4bd27022 --confirm pcx-4bd27022 --space example-space\n    Tearing down peering connection pcx-4bd27022\n",
      hidden: false,
    },
    {
      name: "spaces:ps",
      description: "List dynos for a space\n",
      hidden: false,
    },
    {
      name: "spaces:rename",
      description:
        "Renames a space\nExample:\n\n    $ heroku spaces:rename --from old-space-name --to new-space-name\n    Renaming space old-space-name to new-space-name... done\n",
      hidden: false,
      options: [
        {
          name: "--from",
          isRequired: true,
        },
        {
          name: "--to",
          isRequired: true,
        },
      ],
    },
    {
      name: "spaces:topology",
      description: "Show space topology\n",
      hidden: false,
    },
    {
      name: "spaces:transfer",
      description:
        "Transfer a space to another team\nExample:\n\n    $ heroku spaces:transfer --space=space-name --team=team-name\n    Transferring space-name to team-name... done\n",
      hidden: false,
      options: [
        {
          name: "--space",
          isRequired: true,
        },
        {
          name: "--team",
          isRequired: true,
        },
      ],
    },
    {
      name: "spaces:vpn:config",
      description:
        "Display the configuration information for VPN\nExample:\n\n    $ heroku spaces:vpn:config --space my-space vpn-connection-name\n    === vpn-connection-name VPN Tunnels\n    VPN Tunnel  Customer Gateway  VPN Gateway     Pre-shared Key  Routable Subnets  IKE Version\n    ──────────  ────────────────  ──────────────  ──────────────  ────────────────  ───────────\n    Tunnel 1    104.196.121.200   35.171.237.136  abcdef12345     10.0.0.0/16       1\n    Tunnel 2    104.196.121.200   52.44.7.216     fedcba54321     10.0.0.0/16       1\n\nYou will use the information provided by this command to establish a Private Space VPN Connection.\n\n- You must configure your VPN Gateway to use both Tunnels provided by Heroku\n- The VPN Gateway values are the IP addresses of the Private Space Tunnels\n- The Customer Gateway value is the Public IP of your VPN Gateway\n- The VPN Gateway must use the IKE Version shown and the Pre-shared Keys as the authentication method\n",
      hidden: false,
    },
    {
      name: "spaces:vpn:connect",
      description:
        "Create VPN\nPrivate Spaces can be connected to another private network via an IPSec VPN connection allowing dynos to connect to hosts on your private networks and vice versa.\nThe connection is established over the public Internet but all traffic is encrypted using IPSec",
      hidden: false,
    },
    {
      name: "spaces:vpn:connections",
      description:
        "List the VPN Connections for a space\nExample:\n\n  $ heroku spaces:vpn:connections --space my-space\n  === my-space VPN Connections\n  Name    Status  Tunnels\n  ──────  ──────  ───────\n  office  active  UP/UP\n",
      hidden: false,
    },
    {
      name: "spaces:vpn:destroy",
      description:
        "Destroys VPN in a private space\nExample:\n\n    $ heroku spaces:vpn:destroy --space example-space vpn-connection-name --confirm vpn-connection-name\n    Tearing down VPN Connection vpn-connection-name in space example-space\n",
      hidden: false,
    },
    {
      name: "spaces:vpn:info",
      description:
        "Display the information for VPN\nExample:\n\n    $ heroku spaces:vpn:info --space my-space vpn-connection-name\n    === vpn-connection-name VPN Tunnel Info\n    Name:           vpn-connection-name\n    ID:             123456789012\n    Public IP:      35.161.69.30\n    Routable CIDRs: 172.16.0.0/16\n    Status:         failed\n    Status Message: supplied CIDR block already in use\n    === my-space Tunnel Info\n    VPN Tunnel  IP Address     Status  Status Last Changed   Details\n    ──────────  ─────────────  ──────  ────────────────────  ──────────────\n    Tunnel 1    52.44.146.197  UP      2016-10-25T22:09:05Z  status message\n    Tunnel 2    52.44.146.197  UP      2016-10-25T22:09:05Z  status message",
      hidden: false,
    },
    {
      name: "spaces:vpn:update",
      description:
        "Update VPN\nPrivate Spaces can be connected to another private network via an IPSec VPN connection allowing dynos to connect to hosts on your private networks and vice versa.\nThe connection is established over the public Internet but all traffic is encrypted using IPSec",
      hidden: false,
    },
    {
      name: "spaces:vpn:wait",
      description: "Wait for VPN Connection to be created\n",
      hidden: false,
    },
    {
      name: "spaces:wait",
      description: "Wait for a space to be created\n",
      hidden: false,
    },
    {
      name: "trusted-ips",
      description:
        "List trusted IP ranges for a space\n\nTrusted IP ranges are only available on Private Spaces.\n\nThe space name is a required parameter. Newly created spaces will have 0.0.0.0/0 set by default\nallowing all traffic to applications in the space. More than one CIDR block can be provided at\na time to the commands listed below. For example 1.2.3.4/20 and 5.6.7.8/20 can be added with:\n",
      hidden: false,
    },
    {
      name: "trusted-ips:add",
      description:
        "Add one range to the list of trusted IP ranges\n\nUses CIDR notation.\n\nExample:\n\n    $ heroku trusted-ips:add --space my-space 192.168.2.0/24\n    Added 192.168.0.1/24 to trusted IP ranges on my-space\n",
      hidden: false,
    },
    {
      name: "trusted-ips:remove",
      description:
        "Remove a range from the list of trusted IP ranges\n\nUses CIDR notation.\n\nExample:\n\n    $ heroku trusted-ips:remove --space my-space 192.168.2.0/24\n    Removed 192.168.2.0/24 from trusted IP ranges on my-space\n",
      hidden: false,
      options: [
        {
          name: "--space",
          isRequired: true,
        },
      ],
    },
    {
      name: "commands",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: "--tree",
          description: "Show tree of commands",
        },
      ],
    },
    {
      name: "pg",
      description: "Show database information\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:backups",
      description: "List database backups\n",
      hidden: false,
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
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:backups:cancel",
      description: "Cancel an in-progress backup or restore (default newest)\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:backups:capture",
      description: "Capture a new backup\n",
      hidden: false,
      options: [
        {
          name: "--snapshot",
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:backups:delete",
      description: "Delete a backup\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:backups:download",
      description: "Downloads database backup\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:backups:info",
      description: "Get information about a specific backup\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:backups:public-url",
      description: "Get secret but publicly accessible URL of a backup\n",
      hidden: true,
      options: [
        {
          name: ["-q", "--quiet"],
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        isOptional: true,
      },
    },
    {
      name: "pg:backups:publicurl",
      description: "Get secret but publicly accessible URL of a backup\n",
      hidden: true,
      options: [
        {
          name: ["-q", "--quiet"],
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        isOptional: true,
      },
    },
    {
      name: "pg:backups:restore",
      description:
        "Restore a backup (default latest) to a database\ndefaults to saving the latest database to DATABASE_URL",
      hidden: false,
      options: [
        {
          name: ["-e", "--extensions"],
          description:
            "Comma-separated list of extensions to pre-install in the public schema",
          args: {},
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:backups:schedule",
      description: "Schedule daily backups for given database\n",
      hidden: false,
      options: [
        {
          name: "--at",
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:backups:schedules",
      description: "List backup schedule\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:backups:unschedule",
      description: "Stop daily backups\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:backups:url",
      description: "Get secret but publicly accessible URL of a backup\n",
      hidden: false,
      options: [
        {
          name: ["-q", "--quiet"],
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:bloat",
      description:
        "Show table and index bloat in your database ordered by most wasteful\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:blocking",
      description:
        "Display queries holding locks other queries are waiting to be released\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:connection-pooling:attach",
      description:
        "Add an attachment to a database using connection pooling\nExample:\n\n  heroku pg:connection-pooling:attach postgresql-something-12345\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:copy",
      description:
        "Copy all data from source db to target\nat least one of the databases must be a Heroku PostgreSQL DB",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:credentials",
      description: "Show information on credentials in the database\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: "--reset",
          remove: true,
        },
      ],
    },
    {
      name: "pg:credentials:create",
      description:
        "Create credential within database\nExample:\n\n    heroku pg:credentials:create postgresql-something-12345 --name new-cred-name\n",
      hidden: false,
      options: [
        {
          name: ["-n", "--name"],
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:credentials:destroy",
      description:
        "Destroy credential within database\nExample:\n\n    heroku pg:credentials:destroy postgresql-transparent-56874 --name cred-name -a woodstock-production\n",
      hidden: false,
      options: [
        {
          name: ["-n", "--name"],
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:credentials:repair-default",
      description:
        "Repair the permissions of the default credential within database\nExample:\n\n    heroku pg:credentials:repair-default postgresql-something-12345\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:credentials:rotate",
      description: "Rotate the database credentials\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:credentials:url",
      description: "Show information on a database credential\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:diagnose",
      description:
        "Run or view diagnostics report\n\ndefaults to DATABASE_URL database if no DATABASE is specified\nif REPORT_ID is specified instead, a previous report is displayed\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:info",
      description: "Show database information\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:kill",
      description: "Kill a query\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:killall",
      description: "Terminates all connections for all credentials\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:links",
      description: "Lists all databases and information on link\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:links:create",
      description:
        "Create a link between data stores\nExample:\n\n    heroku pg:links:create HEROKU_REDIS_RED HEROKU_POSTGRESQL_CERULEAN",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:links:destroy",
      description:
        "Destroys a link between data stores\nExample:\n\n    heroku pg:links:destroy HEROKU_POSTGRESQL_CERULEAN redis-symmetrical-100",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:locks",
      description: "Display queries with active locks\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:maintenance",
      description: "Show current maintenance information\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:maintenance:run",
      description: "Start maintenance\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:maintenance:window",
      description:
        'Set weekly maintenance window\nAll times are in UTC.\n\nExample:\n\n    heroku pg:maintenance:window postgres-slippery-100 "Sunday 06:00"',
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:outliers",
      description:
        "Show 10 queries that have longest execution time in aggregate\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:promote",
      description: "Sets DATABASE as your DATABASE_URL\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:ps",
      description: "View active queries with execution time\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:psql",
      description: "Open a psql shell to the database\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:pull",
      description:
        "Pull Heroku database into local or remote database\nPull from SOURCE into TARGET.\n\nTARGET must be one of:\n  * a database name (i.e. on a local PostgreSQL server)  => TARGET must not exist and will be created\n  * a fully qualified URL to a local PostgreSQL server   => TARGET must not exist and will be created\n  * a fully qualified URL to a remote PostgreSQL server  => TARGET must exist and be empty\n\nTo delete a local database run `dropdb TARGET`\nTo create an empty remote database, run `createdb` with connection command-line options (run `createdb --help` for details).\n\nExamples:\n\n    # pull Heroku DB named postgresql-swimmingly-100 into local DB mylocaldb that must not exist\n    $ heroku pg:pull postgresql-swimmingly-100 mylocaldb --app sushi\n\n    # pull Heroku DB named postgresql-swimmingly-100 into empty remote DB at postgres://myhost/mydb\n    $ heroku pg:pull postgresql-swimmingly-100 postgres://myhost/mydb --app sushi\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:push",
      description:
        "Push local or remote into Heroku database\nPush from SOURCE into TARGET. TARGET must be empty.\n\nTo empty a Heroku database for push run `heroku pg:reset`\n\nSOURCE must be either the name of a database existing on your localhost or the\nfully qualified URL of a remote database.\n\nExamples:\n\n    # push mylocaldb into a Heroku DB named postgresql-swimmingly-100\n    $ heroku pg:push mylocaldb postgresql-swimmingly-100\n\n    # push remote DB at postgres://myhost/mydb into a Heroku DB named postgresql-swimmingly-100\n    $ heroku pg:push postgres://myhost/mydb postgresql-swimmingly-100\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:repoint",
      description:
        "Changes which leader a follower is following\nExample:\n\n    heroku pg:repoint postgresql-transparent-56874 --follow postgresql-lucid-59103 -a woodstock-production\n",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        isOptional: true,
      },
    },
    {
      name: "pg:reset",
      description: "Delete all data in DATABASE\n",
      hidden: false,
      options: [
        {
          name: ["-e", "--extensions"],
          description:
            "Comma-separated list of extensions to pre-install in the public schema",
          args: {},
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:settings",
      description: "Show your current database settings\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:settings:auto-explain",
      description:
        "Automatically log execution plans of queries without running EXPLAIN by hand.\nThe auto_explain module is loaded at session-time so existing connections will not be logged.\nRestart your Heroku app and/or restart existing connections for logging to start taking place",
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
          name: "value",
          isOptional: true,
        },
        {
          name: "database",
          isOptional: true,
        },
      ],
      hidden: false,
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
          name: "value",
          isOptional: true,
        },
        {
          name: "database",
          isOptional: true,
        },
      ],
      hidden: false,
    },
    {
      name: "pg:settings:auto-explain:log-buffers",
      description:
        "Includes buffer usage statistics when execution plans are logged.\nThis is equivalent to calling EXPLAIN BUFFERS and can only be used in conjunction with pg:settings:auto-explain:log-analyze turned on",
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
          name: "value",
          isOptional: true,
        },
        {
          name: "database",
          isOptional: true,
        },
      ],
      hidden: false,
    },
    {
      name: "pg:settings:auto-explain:log-min-duration",
      description:
        "Sets the minimum execution time in milliseconds for a statement's plan to be logged.\nSetting this value to 0 will log all queries. Setting this value to -1 will disable logging entirely.\n\nWARNING: Setting a low value may have performance impacts on your database as well as generate a large volume of logs",
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
          name: "value",
          isOptional: true,
        },
        {
          name: "database",
          isOptional: true,
        },
      ],
      hidden: false,
    },
    {
      name: "pg:settings:auto-explain:log-nested-statements",
      description:
        "Nested statements are included in the execution plan's log.\n",
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
          name: "value",
          isOptional: true,
        },
        {
          name: "database",
          isOptional: true,
        },
      ],
      hidden: false,
    },
    {
      name: "pg:settings:auto-explain:log-triggers",
      description:
        "Includes trigger execution statistics in execution plan logs.\nThis parameter can only be used in conjunction with pg:settings:auto-explain:log-analyze turned on",
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
          name: "value",
          isOptional: true,
        },
        {
          name: "database",
          isOptional: true,
        },
      ],
      hidden: false,
    },
    {
      name: "pg:settings:auto-explain:log-verbose",
      description:
        "Include verbose details in execution plans.\nThis is equivalent to calling EXPLAIN VERBOSE",
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
          name: "value",
          isOptional: true,
        },
        {
          name: "database",
          isOptional: true,
        },
      ],
      hidden: false,
    },
    {
      name: "pg:settings:log-lock-waits",
      description:
        "Controls whether a log message is produced when a session waits longer than the deadlock_timeout to acquire a lock. deadlock_timeout is set to 1 second\nDelays due to lock contention occur when multiple transactions are trying to access the same resource at the same time.\nApplications and their query patterns should try to avoid changes to many different tables within the same transaction",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:settings:log-min-duration-statement",
      description:
        "The duration of each completed statement will be logged if the statement completes after the time specified by VALUE.\nVALUE needs to specified as a whole number, in milliseconds.\nSetting log_min_duration_statement to zero prints all statement durations and -1 will disable logging statement durations",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:settings:log-statement",
      description:
        "Log_statement controls which SQL statements are logged.\nValid values for VALUE:\nnone - No statements are logged\nddl  - All data definition statements, such as CREATE, ALTER and DROP will be logged\nmod  - Includes all statements from ddl as well as data-modifying statements such as INSERT, UPDATE, DELETE, TRUNCATE, COPY\nall  - All statements are logged",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:settings:track-functions",
      description:
        "Track_functions controls tracking of function call counts and time used. Default is none.\nValid values for VALUE:\nnone - No functions are tracked\npl   - Only procedural language functions are tracked\nall  - All functions, including SQL and C language functions, are tracked. Simple SQL-language that are inlined are not tracked",
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
          name: "value",
          isOptional: true,
        },
        {
          name: "database",
          isOptional: true,
        },
      ],
      hidden: false,
    },
    {
      name: "pg:unfollow",
      description:
        "Stop a replica from following and make it a writeable database\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:upgrade",
      description:
        "For an Essential-* plan, this command upgrades the database's PostgreSQL version. For a Standard-tier and higher plan, this command unfollows the leader database before upgrading the PostgreSQL version.\nto upgrade to another PostgreSQL version, use pg:copy instead",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:vacuum_stats",
      description:
        "Show dead rows and whether an automatic vacuum is expected to be triggered\n",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        isOptional: true,
      },
    },
    {
      name: "pg:vacuum-stats",
      description:
        "Show dead rows and whether an automatic vacuum is expected to be triggered\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "pg:wait",
      description: "Blocks until database is available\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "psql",
      description: "Open a psql shell to the database\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "update",
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
    },
    {
      name: "apps",
      description: "List your apps\n",
      hidden: false,
      options: [
        {
          name: ["-i", "--internal-routing"],
          description: "Filter to Internal Web Apps",
          hidden: true,
        },
        {
          name: ["-t", "--team"],
          hidden: false,
        },
        {
          name: ["-o", "--org"],
          description: "Team to use",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "apps:create",
      description: "Creates a new app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          args: {},
          hidden: true,
        },
        {
          name: ["-m", "--manifest"],
          description: "Use heroku.yml settings for this app",
          hidden: true,
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
          name: ["-t", "--team"],
          hidden: false,
        },
        {
          name: ["-o", "--org"],
          description: "Team to use",
          args: {},
          hidden: true,
        },
        {
          name: "--ssh-git",
          remove: true,
        },
      ],
    },
    {
      name: "apps:delete",
      description:
        "Permanently destroy an app\nThis will also destroy all add-ons on the app",
      hidden: true,
      options: [
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "apps:destroy",
      description:
        "Permanently destroy an app\nThis will also destroy all add-ons on the app",
      hidden: false,
    },
    {
      name: "apps:errors",
      description: "View app errors\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "apps:favorites",
      description: "List favorited apps\n",
      hidden: false,
    },
    {
      name: "apps:favorites:add",
      description: "Favorites an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "apps:favorites:remove",
      description: "Unfavorites an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "apps:info",
      description:
        "Show detailed app information\n$ heroku apps:info\n=== example\nGit URL:   https://git.heroku.com/example.git\nRepo Size: 5M\n...\n\n$ heroku apps:info --shell\ngit_url=https://git.heroku.com/example.git\nrepo_size=5000000\n",
      hidden: false,
      options: [
        {
          name: ["-x", "--extended"],
          hidden: true,
        },
      ],
    },
    {
      name: "apps:list",
      description: "List your apps\n",
      hidden: true,
      options: [
        {
          name: ["-i", "--internal-routing"],
          hidden: true,
        },
        {
          name: ["-t", "--team"],
          hidden: false,
        },
        {
          name: ["-o", "--org"],
          description: "Team to use",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "apps:open",
      description: "Open the app in a web browser\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "apps:rename",
      description:
        "Rename an app\nThis will locally update the git remote if it is set to the old app",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: "--ssh-git",
          remove: true,
        },
      ],
    },
    {
      name: "apps:stacks",
      description: "Show the list of available stacks\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "apps:stacks:set",
      description: "Set the stack of an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "config:add",
      description: "Set one or more config vars\n",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
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
      name: "config:set",
      description: "Set one or more config vars\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "create",
      description: "Creates a new app\n",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
          hidden: true,
        },
        {
          name: ["-m", "--manifest"],
          hidden: true,
        },
        {
          name: "--internal-routing",
          hidden: true,
        },
        {
          name: "--features",
          hidden: true,
        },
        {
          name: "--kernel",
          hidden: true,
        },
        {
          name: "--locked",
          hidden: true,
        },
        {
          name: ["-t", "--team"],
          hidden: false,
        },
        {
          name: ["-o", "--org"],
          description: "Team to use",
          args: {},
          hidden: true,
        },
        {
          name: "--ssh-git",
          remove: true,
        },
      ],
      args: {
        description: "Name of app to create",
        isOptional: true,
      },
    },
    {
      name: "dashboard",
      description: "Display information about favorite apps\n",
      hidden: true,
    },
    {
      name: "destroy",
      description:
        "Permanently destroy an app\nThis will also destroy all add-ons on the app",
      hidden: true,
      options: [
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "drains",
      description: "Display the log drains of an app\n",
      hidden: false,
      options: [
        {
          name: ["-x", "--extended"],
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "drains:add",
      description: "Adds a log drain to an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "drains:remove",
      description: "Removes a log drain from an app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "dyno:kill",
      description: "Stop app dyno\n\nstop app dyno or dyno type",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "dyno:resize",
      description:
        "Manage dyno sizes\n\nCalled with no arguments shows the current dyno size.\n\nCalled with one argument sets the size.\nWhere SIZE is one of eco|basic|standard-1x|standard-2x|performance\n\nCalled with 1..n TYPE=SIZE arguments sets the quantity per type.\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "dyno:restart",
      description:
        "Restart app dynos\nif DYNO is not specified, restarts all dynos on app",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "dyno:scale",
      description:
        "Scale dyno quantity up or down\nAppending a size (eg. web=2:Standard-2X) allows simultaneous scaling and resizing.\n\nOmitting any arguments will display the app's current dyno formation, in a\nformat suitable for passing back into ps:scale",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "dyno:stop",
      description: "Stop app dyno\n\nstop app dyno or dyno type",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "dyno:type",
      description:
        "Manage dyno sizes\n\nCalled with no arguments shows the current dyno size.\n\nCalled with one argument sets the size.\nWhere SIZE is one of eco|basic|standard-1x|standard-2x|performance\n\nCalled with 1..n TYPE=SIZE arguments sets the quantity per type.\n",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
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
      name: "features",
      description: "List available app features\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "features:disable",
      description: "Disables an app feature\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "features:enable",
      description: "Enables an app feature\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "features:info",
      description: "Display information about a feature\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "info",
      description:
        "Show detailed app information\n$ heroku apps:info\n=== example\nGit URL:   https://git.heroku.com/example.git\nRepo Size: 5M\n...\n\n$ heroku apps:info --shell\ngit_url=https://git.heroku.com/example.git\nrepo_size=5000000\n",
      hidden: true,
      options: [
        {
          name: ["-x", "--extended"],
          hidden: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
    },
    {
      name: "keys",
      description: "Display your SSH keys\n",
      hidden: false,
    },
    {
      name: "keys:add",
      description:
        "Add an SSH key for a user\nif no KEY is specified, will try to find ~/.ssh/id_rsa.pub",
      hidden: false,
      options: [
        {
          name: "--quiet",
          hidden: true,
        },
      ],
    },
    {
      name: "keys:clear",
      description: "Remove all SSH keys for current user\n",
      hidden: false,
    },
    {
      name: "keys:remove",
      description: "Remove an SSH key from the user\n",
      hidden: false,
    },
    {
      name: "kill",
      description: "Stop app dyno\n\nstop app dyno or dyno type",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
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
      name: "labs",
      description: "List experimental features\n",
      hidden: false,
    },
    {
      name: "labs:enable",
      description: "Enables an experimental feature\n",
      hidden: false,
    },
    {
      name: "labs:info",
      description: "Show feature info\n",
      hidden: false,
    },
    {
      name: "list",
      description: "List your apps\n",
      hidden: true,
      options: [
        {
          name: ["-i", "--internal-routing"],
          hidden: true,
        },
        {
          name: ["-t", "--team"],
          hidden: false,
        },
        {
          name: ["-o", "--org"],
          description: "Team to use",
          args: {},
          hidden: true,
        },
      ],
    },
    {
      name: "maintenance",
      description: "Display the current maintenance status of app\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "maintenance:off",
      description: "Take the app out of maintenance mode\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "maintenance:on",
      description: "Put the app into maintenance mode\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "notifications",
      description: "Display notifications\n",
      hidden: false,
    },
    {
      name: "open",
      description: "Open the app in a web browser\n",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        isOptional: true,
      },
    },
    {
      name: "ps",
      description: "List dynos for an app\n",
      hidden: false,
      options: [
        {
          name: ["-x", "--extended"],
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "ps:kill",
      description: "Stop app dyno\n\nstop app dyno or dyno type",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "ps:resize",
      description:
        "Manage dyno sizes\n\nCalled with no arguments shows the current dyno size.\n\nCalled with one argument sets the size.\nWhere SIZE is one of eco|basic|standard-1x|standard-2x|performance\n\nCalled with 1..n TYPE=SIZE arguments sets the quantity per type.\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "ps:restart",
      description:
        "Restart app dynos\nif DYNO is not specified, restarts all dynos on app",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "ps:scale",
      description:
        "Scale dyno quantity up or down\nAppending a size (eg. web=2:Standard-2X) allows simultaneous scaling and resizing.\n\nOmitting any arguments will display the app's current dyno formation, in a\nformat suitable for passing back into ps:scale",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "ps:stop",
      description: "Stop app dyno\n\nstop app dyno or dyno type",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "ps:type",
      description:
        "Manage dyno sizes\n\nCalled with no arguments shows the current dyno size.\n\nCalled with one argument sets the size.\nWhere SIZE is one of eco|basic|standard-1x|standard-2x|performance\n\nCalled with 1..n TYPE=SIZE arguments sets the quantity per type.\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "releases",
      description: "Display the releases for an app\n",
      hidden: false,
      options: [
        {
          name: ["-x", "--extended"],
          hidden: true,
        },
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "releases:info",
      description: "View detailed information for a release\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "releases:output",
      description: "View the release command output\n",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "releases:rollback",
      description:
        "Rollback to a previous release\nIf RELEASE is not specified, it will rollback one release",
      hidden: false,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
      ],
    },
    {
      name: "rename",
      description:
        "Rename an app\nThis will locally update the git remote if it is set to the old app",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--ssh-git",
          remove: true,
        },
      ],
    },
    {
      name: "resize",
      description:
        "Manage dyno sizes\n\nCalled with no arguments shows the current dyno size.\n\nCalled with one argument sets the size.\nWhere SIZE is one of eco|basic|standard-1x|standard-2x|performance\n\nCalled with 1..n TYPE=SIZE arguments sets the quantity per type.\n",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
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
      name: "restart",
      description:
        "Restart app dynos\nif DYNO is not specified, restarts all dynos on app",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        isOptional: true,
      },
    },
    {
      name: "rollback",
      description:
        "Rollback to a previous release\nIf RELEASE is not specified, it will rollback one release",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        isOptional: true,
      },
    },
    {
      name: "scale",
      description:
        "Scale dyno quantity up or down\nAppending a size (eg. web=2:Standard-2X) allows simultaneous scaling and resizing.\n\nOmitting any arguments will display the app's current dyno formation, in a\nformat suitable for passing back into ps:scale",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
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
      description: "Show the list of available stacks\n",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
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
      name: "stack:set",
      description: "Set the stack of an app\n",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
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
      name: "stop",
      description: "Stop app dyno\n\nstop app dyno or dyno type",
      hidden: true,
      options: [
        {
          name: ["-a", "--app"],
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
      name: "help",
      options: [
        {
          name: ["-n", "--nested-commands"],
          description: "Include all nested commands in the output",
        },
        {
          name: "--all",
          remove: true,
        },
      ],
      args: {
        name: "commands",
      },
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
          name: ["-f", "--force"],
          description: "Run yarn install with force flag",
        },
      ],
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
      args: {
        default: ".",
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
      name: "auth:disable",
      remove: true,
    },
    {
      name: "certs:wait",
      remove: true,
    },
    {
      name: "join:null",
      remove: true,
    },
    {
      name: "leave:null",
      remove: true,
    },
    {
      name: "unlock:null",
      remove: true,
    },
    {
      name: "pg:settings:log-connections",
      remove: true,
    },
    {
      name: "pipelines:disable",
      remove: true,
    },
    {
      name: "pipelines:enable",
      remove: true,
    },
    {
      name: "ps:disable",
      remove: true,
    },
    {
      name: "ps:enable",
      remove: true,
    },
    {
      name: "ps:regions",
      remove: true,
    },
    {
      name: "run:console",
      remove: true,
    },
    {
      name: "run:logs",
      remove: true,
    },
    {
      name: "run:rake",
      remove: true,
    },
  ],
};

export { versions };
export default completionSpec;
