const getAppGenerator: Fig.Generator = {
  script: "heroku apps --all --json",
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
      description: "check 2fa status",
    },
    {
      name: ["auth:2fa:disable", "twofactor:disable", "2fa:disable"],
      description: "disables 2fa on account",
    },
    {
      name: ["auth:login", "login"],
      description: "login with your Heroku credentials",
      options: [
        {
          name: "--browser",
          description:
            'browser to open SSO with (example: "firefox", "safari")',
          args: {
            name: "browser",
          },
        },
        {
          name: ["-i", "--interactive"],
          description: "login with username/password",
        },
        {
          name: ["-e", "--expires-in"],
          description: "duration of token in seconds (default 30 days)",
          args: {
            name: "expires-in",
          },
        },
      ],
    },
    {
      name: ["auth:logout", "logout"],
      description: "clears local login credentials and invalidates API session",
    },
    {
      name: "auth:token",
      description: "outputs current CLI authentication token.",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
      ],
    },
    {
      name: ["auth:whoami", "whoami"],
      description: "display the current logged in user",
    },
    {
      name: "labs:disable",
      description: "disables an experimental feature",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "display the buildpacks for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "buildpacks:add",
      description:
        "add new app buildpack, inserting into list of buildpacks if necessary",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-i", "--index"],
          description: "the 1-based index of the URL in the list of URLs",
          args: {
            name: "index",
          },
        },
      ],
      args: {
        name: "buildpack",
        description: "namespace/name of the buildpack",
      },
    },
    {
      name: "buildpacks:clear",
      description: "clear all buildpacks set on the app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "buildpacks:info",
      description: "fetch info about a buildpack",

      args: {
        name: "buildpack",
        description: "namespace/name of the buildpack",
      },
    },
    {
      name: "buildpacks:remove",
      description: "remove a buildpack set on the app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-i", "--index"],
          description:
            "the 1-based index of the URL to remove from the list of URLs",
          args: {
            name: "index",
          },
        },
      ],
      args: {
        name: "buildpack",
        description: "namespace/name of the buildpack",
        isOptional: true,
      },
    },
    {
      name: "buildpacks:search",
      description: "search for buildpacks",
      options: [
        {
          name: "--namespace",
          description:
            "buildpack namespaces to filter on using a comma separated list",
          args: {
            name: "namespace",
          },
        },
        {
          name: "--name",
          description:
            "buildpack names to filter on using a comma separated list ",
          args: {
            name: "name",
          },
        },
        {
          name: "--description",
          description: "buildpack description to filter on",
          args: {
            name: "description",
          },
        },
      ],
      args: {
        name: "term",
        description:
          "search term that searches across name, namespace, and description",
        isOptional: true,
      },
    },
    {
      name: "buildpacks:set",
      description: "",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-i", "--index"],
          description: "the 1-based index of the URL in the list of URLs",
          args: {
            name: "index",
          },
        },
      ],
      args: {
        name: "buildpack",
        description: "namespace/name of the buildpack",
      },
    },
    {
      name: "buildpacks:versions",
      description: "list versions of a buildpack",

      args: {
        name: "buildpack",
        description: "namespace/name of the buildpack",
      },
    },
    {
      name: "ci:config",
      description: "display CI config vars",
      options: [
        {
          name: ["-s", "--shell"],
          description: "output config vars in shell format",
        },
        {
          name: "--json",
          description: "output config vars in json format",
        },
        {
          name: ["-p", "--pipeline"],
          description: "pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ci:config:get",
      description: "get a CI config var",
      options: [
        {
          name: ["-s", "--shell"],
          description: "output config var in shell format",
        },
        {
          name: ["-p", "--pipeline"],
          description: "pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "set CI config vars",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ci:config:unset",
      description: "unset CI config vars",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ci:debug",
      description:
        "opens an interactive test debugging session with the contents of the current directory",
      options: [
        {
          name: "--no-setup",
          description: "start test dyno without running test-setup",
        },
        {
          name: ["-p", "--pipeline"],
          description: "pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: "--no-cache",
          description: "start test run with an empty cache",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ci:migrate-manifest",
      description:
        "app-ci.json is deprecated. Run this command to migrate to app.json with an environments key.",
    },
    {
      name: "ci:open",
      description: "open the Dashboard version of Heroku CI",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "domains",
      description: "list domains for an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-j", "--json"],
          description: "output in json format",
        },
        {
          name: "--columns",
          description: "only show provided columns (comma-separated)",
          args: {
            name: "columns",
          },
        },
        {
          name: "--sort",
          description: "property to sort by (prepend '-' for descending)",
          args: {
            name: "sort",
          },
        },
        {
          name: "--filter",
          description:
            "filter property by partial string matching, ex: name=foo",
          args: {
            name: "filter",
          },
        },
        {
          name: "--csv",
          description: "output is csv format",
        },
        {
          name: ["-x", "--extended"],
          description: "show extra columns",
        },
        {
          name: "--no-header",
          description: "hide table header from output",
        },
      ],
    },
    {
      name: "domains:add",
      description: "add a domain to an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-c", "--cert"],
          description:
            "the name of the SSL cert you want to use for this domain",
          args: {
            name: "cert",
          },
        },
        {
          name: ["-j", "--json"],
          description: "output in json format",
        },
        {
          name: "--wait",
          description: "",
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "remove all domains from an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "domains:info",
      description: "show detailed information for a domain on an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "remove a domain from an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
        "update a domain to use a different SSL certificate on an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: "--cert",
          description:
            "the name or id of the certificate you want to use for this domain",
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
      description: "wait for domain to be active for an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "list your apps",
      options: [
        {
          name: ["-A", "--all"],
          description: "include apps in all teams",
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: ["-s", "--space"],
          description: "filter by space",
          args: {
            name: "space",
          },
        },
        {
          name: ["-p", "--personal"],
          description:
            "list apps in personal account when a default team is set",
        },
        {
          name: ["-t", "--team"],
          description: "team to use",
          args: {
            name: "team",
          },
        },
      ],
    },
    {
      name: "apps:create",
      description: "creates a new app",
      options: [
        {
          name: "--addons",
          description: "comma-delimited list of addons to install",
          args: {
            name: "addons",
          },
        },
        {
          name: ["-b", "--buildpack"],
          description: "buildpack url to use for this app",
          args: {
            name: "buildpack",
          },
        },
        {
          name: ["-n", "--no-remote"],
          description: "do not create a git remote",
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--stack"],
          description: "the stack to create the app on",
          args: {
            name: "stack",
          },
        },
        {
          name: "--space",
          description: "the private space to create the app in",
          args: {
            name: "space",
          },
        },
        {
          name: "--region",
          description: "specify region for the app to run in",
          args: {
            name: "region",
          },
        },
        {
          name: "--ssh-git",
          description: "use SSH git protocol for local git remote",
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: ["-t", "--team"],
          description: "team to use",
          args: {
            name: "team",
          },
        },
      ],
      args: {
        name: "app",
        description: "name of app to create",
        isOptional: true,
      },
    },
    {
      name: "apps:destroy",
      description: "permanently destroy an app",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "apps:errors",
      description: "view app errors",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: "--hours",
          description: "number of hours to look back (default 24)",
          args: {
            name: "hours",
          },
        },
        {
          name: "--router",
          description: "show only router errors",
        },
        {
          name: "--dyno",
          description: "show only dyno errors",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "apps:favorites",
      description: "list favorited apps",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "apps:favorites:add",
      description: "favorites an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "apps:favorites:remove",
      description: "unfavorites an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "apps:info",
      description: "show detailed app information",
      options: [
        {
          name: ["-s", "--shell"],
          description: "output more shell friendly key/value pairs",
        },
        {
          name: ["-j", "--json"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "apps:open",
      description: "open the app in a web browser",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "rename an app",
      options: [
        {
          name: "--ssh-git",
          description: "use ssh git protocol instead of https",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "show the list of available stacks",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "apps:stacks:set",
      description: "set the stack of an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "set one or more config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "drains",
      description: "display the log drains of an app",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "drains:add",
      description: "adds a log drain to an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "removes a log drain from an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "stop app dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "manage dyno sizes",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "dyno:restart",
      description: "restart app dynos",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "scale dyno quantity up or down",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "dyno:stop",
      description: "stop app dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "list available app features",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "features:disable",
      description: "disables an app feature",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "enables an app feature",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "display information about a feature",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "display your SSH keys",
      options: [
        {
          name: ["-l", "--long"],
          description: "display full SSH keys",
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "keys:add",
      description: "add an SSH key for a user",
      options: [
        {
          name: ["-y", "--yes"],
          description: "automatically answer yes for all prompts",
        },
      ],
      args: {
        name: "key",
        isOptional: true,
      },
    },
    {
      name: "keys:clear",
      description: "remove all SSH keys for current user",
    },
    {
      name: "keys:remove",
      description: "remove an SSH key from the user",

      args: {
        name: "key",
      },
    },
    {
      name: "labs",
      description: "list experimental features",
      options: [
        {
          name: "--json",
          description: "display as json",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "labs:enable",
      description: "enables an experimental feature",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "show feature info",
      options: [
        {
          name: "--json",
          description: "display as json",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "display the current maintenance status of app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "maintenance:off",
      description: "take the app out of maintenance mode",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "maintenance:on",
      description: "put the app into maintenance mode",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "notifications",
      description: "display notifications",
      options: [
        {
          name: "--all",
          description:
            "view all notifications (not just the ones for the current app)",
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: "--read",
          description: "show notifications already read",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ps",
      description: "list dynos for an app",
      options: [
        {
          name: "--json",
          description: "display as json",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ps:kill",
      description: "stop app dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "manage dyno sizes",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ps:restart",
      description: "restart app dynos",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "scale dyno quantity up or down",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ps:stop",
      description: "stop app dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "manage dyno sizes",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "releases",
      description: "display the releases for an app",
      options: [
        {
          name: ["-n", "--num"],
          description: "number of releases to show",
          args: {
            name: "num",
          },
        },
        {
          name: "--json",
          description: "output releases in json format",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "releases:info",
      description: "view detailed information for a release",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: ["-s", "--shell"],
          description: "output in shell format",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "rollback to a previous release",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "display autocomplete installation instructions",
      options: [
        {
          name: ["-r", "--refresh-cache"],
          description: "refresh cache only (ignores displaying instructions)",
        },
      ],
      args: {
        name: "shell",
        description: "shell type",
        isOptional: true,
      },
    },
    {
      name: "config",
      description: "display the config vars for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--shell"],
          description: "output config vars in shell format",
        },
        {
          name: ["-j", "--json"],
          description: "output config vars in json format",
        },
      ],
    },
    {
      name: "config:edit",
      description: "interactively edit config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "key",
        description: "edit a single key",
        isOptional: true,
      },
    },
    {
      name: "config:get",
      description: "display a single config value for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--shell"],
          description: "output config vars in shell format",
        },
      ],
      args: {
        name: "KEY",
      },
    },
    {
      name: ["config:unset", "config:remove"],
      description: "unset one or more config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: ["local", "local:start"],
      description: "run heroku app locally",
      options: [
        {
          name: ["-f", "--procfile"],
          description: "use a different Procfile",
          args: {
            name: "procfile",
          },
        },
        {
          name: ["-e", "--env"],
          description: "location of env file (defaults to .env)",
          args: {
            name: "env",
          },
        },
        {
          name: ["-p", "--port"],
          description: "port to listen on",
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
      description: "run a one-off command",
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
      description: "display node-foreman version",
    },
    {
      name: "ci",
      description: "display the most recent CI runs for the given pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "app name",
          args: {
            name: "app",
          },
        },
        {
          name: "--watch",
          description: "keep running and watch for new and update tests",
        },
        {
          name: ["-p", "--pipeline"],
          description: "name of pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "ci:info",
      description: "show the status of a specific test run",
      options: [
        {
          name: ["-a", "--app"],
          description: "app name",
          args: {
            name: "app",
          },
        },
        {
          name: "--node",
          description: "the node number to show its setup and output",
          args: {
            name: "node",
          },
        },
        {
          name: ["-p", "--pipeline"],
          description: "name of pipeline",
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
        "looks for the most recent run and returns the output of that run",
      options: [
        {
          name: ["-a", "--app"],
          description: "app name",
          args: {
            name: "app",
          },
        },
        {
          name: "--node",
          description: "the node number to show its setup and output",
          args: {
            name: "node",
          },
        },
        {
          name: ["-p", "--pipeline"],
          description: "name of pipeline",
          args: {
            name: "pipeline",
          },
        },
      ],
    },
    {
      name: "ci:rerun",
      description: "rerun tests against current directory",
      options: [
        {
          name: ["-a", "--app"],
          description: "app name",
          args: {
            name: "app",
          },
        },
        {
          name: ["-p", "--pipeline"],
          description: "name of pipeline",
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
      description: "run tests against current directory",
      options: [
        {
          name: ["-a", "--app"],
          description: "app name",
          args: {
            name: "app",
          },
        },
        {
          name: ["-p", "--pipeline"],
          description: "name of pipeline",
          args: {
            name: "pipeline",
          },
        },
      ],
    },
    {
      name: "certs",
      description: "list SSL certificates for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:add",
      description: "add an SSL certificate to an app",
      options: [
        {
          name: "--bypass",
          description: "bypass the trust chain completion step",
        },
        {
          name: "--type",
          description: "type to create, either 'sni' or 'endpoint'",
          args: {
            name: "type",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "show ACM status for an app",
      options: [
        {
          name: "--wait",
          description: "watch ACM status and display the status when complete",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:auto:disable",
      description: "disable ACM for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:auto:enable",
      description: "enable ACM status for an app",
      options: [
        {
          name: "--wait",
          description: "watch ACM status and exit when complete",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:auto:refresh",
      description: "refresh ACM for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:chain",
      description: "print an ordered & complete chain for a certificate",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:generate",
      description: "generate a key and a CSR or self-signed certificate",
      options: [
        {
          name: "--selfsigned",
          description: "generate a self-signed certificate instead of a CSR",
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
          description: "name of organization certificate belongs to",
          args: {
            name: "owner",
          },
        },
        {
          name: "--country",
          description: "country of owner, as a two-letter ISO country code",
          args: {
            name: "country",
          },
        },
        {
          name: "--area",
          description: "sub-country area (state, province, etc.) of owner",
          args: {
            name: "area",
          },
        },
        {
          name: "--city",
          description: "city of owner",
          args: {
            name: "city",
          },
        },
        {
          name: "--subject",
          description: "specify entire certificate subject",
          args: {
            name: "subject",
          },
        },
        {
          name: "--now",
          description: "do not prompt for any owner information",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "show certificate information for an SSL certificate",
      options: [
        {
          name: "--name",
          description: "name to check info on",
          args: {
            name: "name",
          },
        },
        {
          name: "--endpoint",
          description: "endpoint to check info on",
          args: {
            name: "endpoint",
          },
        },
        {
          name: "--show-domains",
          description: "show associated domains",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:key",
      description: "print the correct key for the given certificate",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:remove",
      description: "remove an SSL certificate from an app",
      options: [
        {
          name: "--name",
          description: "name to remove",
          args: {
            name: "name",
          },
        },
        {
          name: "--endpoint",
          description: "endpoint to remove",
          args: {
            name: "endpoint",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "certs:update",
      description: "update an SSL certificate on an app",
      options: [
        {
          name: "--bypass",
          description: "bypass the trust chain completion step",
        },
        {
          name: "--name",
          description: "name to update",
          args: {
            name: "name",
          },
        },
        {
          name: "--endpoint",
          description: "endpoint to update",
          args: {
            name: "endpoint",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
        "clones a heroku app to your local machine at DIRECTORY (defaults to app name)",
      options: [
        {
          name: ["-a", "--app"],
          description: "the Heroku app to use",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {
            name: "remote",
          },
        },
        {
          name: "--ssh-git",
          description: "use SSH git protocol",
        },
      ],
      args: {
        name: "DIRECTORY",
        description: "where to clone the app",
        isOptional: true,
      },
    },
    {
      name: "git:remote",
      description: "adds a git remote to an app repo",
      options: [
        {
          name: ["-a", "--app"],
          description: "the Heroku app to use",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "the git remote to create",
          args: {
            name: "remote",
          },
        },
        {
          name: "--ssh-git",
          description: "use SSH git protocol",
        },
      ],
    },
    {
      name: "addons",
      description: "lists your add-ons and attachments",
      options: [
        {
          name: ["-A", "--all"],
          description: "show add-ons and attachments for all accessible apps",
        },
        {
          name: "--json",
          description: "return add-ons in json format",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "addons:attach",
      description: "attach an existing add-on resource to an app",
      options: [
        {
          name: "--as",
          description: "name for add-on attachment",
          args: {
            name: "as",
          },
        },
        {
          name: "--credential",
          description: "credential name for scoped access to Heroku Postgres",
          args: {
            name: "credential",
          },
        },
        {
          name: "--confirm",
          description: "overwrite existing add-on attachment with same name",
          args: {
            name: "confirm",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "create a new add-on resource",
      options: [
        {
          name: "--name",
          description: "name for the add-on resource",
          args: {
            name: "name",
          },
        },
        {
          name: "--as",
          description: "name for the initial add-on attachment",
          args: {
            name: "as",
          },
        },
        {
          name: "--confirm",
          description:
            "overwrite existing config vars or existing add-on attachments",
          args: {
            name: "confirm",
          },
        },
        {
          name: "--wait",
          description: "watch add-on creation status and exit when complete",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "permanently destroy an add-on resource",
      options: [
        {
          name: ["-f", "--force"],
          description: "allow destruction even if connected to other apps",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "addons:detach",
      description: "detach an existing add-on resource from an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "open an add-on's Dev Center documentation in your browser",
      options: [
        {
          name: "--show-url",
          description: "show URL, do not open browser",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "change add-on plan",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "show detailed add-on resource and attachment information",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "open an add-on's dashboard in your browser",
      options: [
        {
          name: "--show-url",
          description: "show URL, do not open browser",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "list all available plans for an add-on services",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
      ],
      args: {
        name: "service",
      },
    },
    {
      name: "addons:rename",
      description: "rename an add-on",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "list all available add-on services",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "addons:upgrade",
      description: "change add-on plan",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "show provisioning status of the add-ons on the app",
      options: [
        {
          name: "--wait-interval",
          description: "how frequently to poll in seconds",
          args: {
            name: "wait-interval",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "list OAuth authorizations",
      options: [
        {
          name: ["-j", "--json"],
          description: "output in json format",
        },
      ],
    },
    {
      name: "authorizations:create",
      description: "create a new OAuth authorization",
      options: [
        {
          name: ["-d", "--description"],
          description: "set a custom authorization description",
          args: {
            name: "description",
          },
        },
        {
          name: ["-s", "--scope"],
          description: "set custom OAuth scopes",
          args: {
            name: "scope",
          },
        },
        {
          name: ["-e", "--expires-in"],
          description: "set expiration in seconds (default no expiration)",
          args: {
            name: "expires-in",
          },
        },
        {
          name: ["-S", "--short"],
          description: "only output token",
        },
        {
          name: ["-j", "--json"],
          description: "output in json format",
        },
      ],
    },
    {
      name: "authorizations:info",
      description: "show an existing OAuth authorization",
      options: [
        {
          name: ["-j", "--json"],
          description: "output in json format",
        },
      ],
      args: {
        name: "id",
      },
    },
    {
      name: ["authorizations:revoke", "authorizations:destroy"],
      description: "revoke OAuth authorization",

      args: {
        name: "id",
      },
    },
    {
      name: "authorizations:rotate",
      description: "updates an OAuth authorization token",

      args: {
        name: "id",
      },
    },
    {
      name: "authorizations:update",
      description: "updates an OAuth authorization",
      options: [
        {
          name: ["-d", "--description"],
          description: "set a custom authorization description",
          args: {
            name: "description",
          },
        },
        {
          name: "--client-id",
          description: "identifier of OAuth client to set",
          args: {
            name: "client-id",
          },
        },
        {
          name: "--client-secret",
          description: "secret of OAuth client to set",
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
      description: "list your OAuth clients",
      options: [
        {
          name: ["-j", "--json"],
          description: "output in json format",
        },
      ],
    },
    {
      name: "clients:create",
      description: "create a new OAuth client",
      options: [
        {
          name: ["-s", "--shell"],
          description: "output in shell format",
        },
        {
          name: ["-j", "--json"],
          description: "output in json format",
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
      description: "delete client by ID",

      args: {
        name: "id",
      },
    },
    {
      name: "clients:info",
      description: "show details of an oauth client",
      options: [
        {
          name: ["-j", "--json"],
          description: "output in json format",
        },
        {
          name: ["-s", "--shell"],
          description: "output in shell format",
        },
      ],
      args: {
        name: "id",
      },
    },
    {
      name: "clients:rotate",
      description: "rotate OAuth client secret",
      options: [
        {
          name: ["-j", "--json"],
          description: "output in json format",
        },
        {
          name: ["-s", "--shell"],
          description: "output in shell format",
        },
      ],
      args: {
        name: "id",
      },
    },
    {
      name: "clients:update",
      description: "update OAuth client",
      options: [
        {
          name: ["-n", "--name"],
          description: "change the client name",
          args: {
            name: "name",
          },
        },
        {
          name: "--url",
          description: "change the client redirect URL",
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
      description: "list your OAuth sessions",
      options: [
        {
          name: ["-j", "--json"],
          description: "output in json format",
        },
      ],
    },
    {
      name: "sessions:destroy",
      description: "delete (logout) OAuth session by ID",

      args: {
        name: "id",
      },
    },
    {
      name: "redis",
      description: "gets information about redis",
      options: [
        {
          name: "--json",
          description: "format output as JSON",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "opens a redis prompt",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "display credentials information",
      options: [
        {
          name: "--reset",
          description: "reset credentials",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "gets information about redis",
      options: [
        {
          name: "--json",
          description: "format output as JSON",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "set the keyspace notifications configuration",
      options: [
        {
          name: ["-c", "--config"],
          description: "set keyspace notifications configuration",
          args: {
            name: "config",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "manage maintenance windows",
      options: [
        {
          name: ["-w", "--window"],
          description: "set weekly UTC maintenance window",
          args: {
            name: "window",
          },
        },
        {
          name: "--run",
          description: "start maintenance",
        },
        {
          name: ["-f", "--force"],
          description:
            "start maintenance without entering application maintenance mode",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "set the key eviction policy",
      options: [
        {
          name: ["-p", "--policy"],
          description: "set policy name",
          args: {
            name: "policy",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "sets DATABASE as your REDIS_URL",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
        "reset all stats covered by RESETSTAT (https://redis.io/commands/config-resetstat)",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
        "set the number of seconds to wait before killing idle connections",
      options: [
        {
          name: ["-s", "--seconds"],
          description: "set timeout value",
          args: {
            name: "seconds",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "wait for Redis instance to be available",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "log in to Heroku Container Registry",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
    },
    {
      name: "container:logout",
      description: "log out from Heroku Container Registry",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
    },
    {
      name: "container:pull",
      description: "pulls an image from an app's process type",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "container:push",
      description:
        "builds, then pushes Docker images to deploy your Heroku app",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-R", "--recursive"],
          description:
            "pushes Dockerfile.<process> found in current and subdirectories",
        },
        {
          name: "--arg",
          description: "set build-time variables",
          args: {
            name: "arg",
          },
        },
        {
          name: "--context-path",
          description:
            "path to use as build context (defaults to Dockerfile dir)",
          args: {
            name: "context-path",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "container:rm",
      description: "remove the process type from your app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "container:run",
      description: "builds, then runs the docker image locally",
      options: [
        {
          name: ["-p", "--port"],
          description: "port the app will run on",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "logs",
      description: "display recent log output",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-n", "--num"],
          description: "number of lines to display",
          args: {
            name: "num",
          },
        },
        {
          name: ["-d", "--dyno"],
          description:
            'only show output from this dyno type (such as "web" or "worker")',
          args: {
            name: "dyno",
          },
        },
        {
          name: ["-s", "--source"],
          description:
            'only show output from this source (such as "app" or "heroku")',
          args: {
            name: "source",
          },
        },
        {
          name: ["-t", "--tail"],
          description: "continually stream logs",
        },
        {
          name: "--force-colors",
          description: "force use of colors (even on non-tty output)",
        },
      ],
    },
    {
      name: "run",
      description: "run a one-off process inside a heroku dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "parent app used by review apps",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--size"],
          description: "dyno size",
          args: {
            name: "size",
          },
        },
        {
          name: "--type",
          description: "process type",
          args: {
            name: "type",
          },
        },
        {
          name: ["-x", "--exit-code"],
          description: "passthrough the exit code of the remote command",
        },
        {
          name: ["-e", "--env"],
          description:
            "environment variables to set (use ';' to split multiple vars)",
          args: {
            name: "env",
          },
        },
        {
          name: "--no-tty",
          description: "force the command to not run in a tty",
        },
        {
          name: "--no-notify",
          description:
            "disables notification when dyno is up (alternatively use HEROKU_NOTIFICATIONS=0)",
        },
      ],
    },
    {
      name: "run:detached",
      description: "run a detached dyno, where output is sent to your logs",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-e", "--env"],
          description:
            "environment variables to set (use ';' to split multiple vars)",
          args: {
            name: "env",
          },
        },
        {
          name: ["-s", "--size"],
          description: "dyno size",
          args: {
            name: "size",
          },
        },
        {
          name: ["-t", "--tail"],
          description: "continually stream logs",
        },
        {
          name: "--type",
          description: "process type",
          args: {
            name: "type",
          },
        },
      ],
    },
    {
      name: "status",
      description: "display current status of the Heroku platform",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "pipelines",
      description: "list pipelines you have access to",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "pipelines:add",
      description: "add this app to a pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--stage"],
          description: "stage of first app in pipeline",
          args: {
            name: "stage",
          },
        },
      ],
      args: {
        name: "pipeline",
        description: "name of pipeline",
      },
    },
    {
      name: "pipelines:connect",
      description: "connect a github repo to an existing pipeline",
      options: [
        {
          name: ["-r", "--repo"],
          description: "the GitHub repository to connect to",
          args: {
            name: "repo",
          },
        },
      ],
      args: {
        name: "name",
        description: "name of pipeline",
      },
    },
    {
      name: "pipelines:create",
      description: "create a new pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--stage"],
          description: "stage of first app in pipeline",
          args: {
            name: "stage",
          },
        },
        {
          name: ["-t", "--team"],
          description: "the team which will own the apps",
          args: {
            name: "team",
          },
        },
      ],
      args: {
        name: "name",
        description: "name of pipeline (defaults to basename of the app)",
        isOptional: true,
      },
    },
    {
      name: "pipelines:destroy",
      description: "destroy a pipeline",

      args: {
        name: "pipeline",
        description: "name of pipeline",
      },
    },
    {
      name: "pipelines:diff",
      description:
        "compares the latest release of this app to its downstream app(s)",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "pipelines:info",
      description: "show list of apps in a pipeline",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
      ],
      args: {
        name: "pipeline",
        description: "pipeline to show list of apps for",
      },
    },
    {
      name: "pipelines:open",
      description: "open a pipeline in dashboard",

      args: {
        name: "pipeline",
        description: "name of pipeline",
      },
    },
    {
      name: "pipelines:promote",
      description:
        "promote the latest release of this app to its downstream app(s)",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-t", "--to"],
          description: "comma separated list of apps to promote to",
          args: {
            name: "to",
          },
        },
      ],
    },
    {
      name: "pipelines:remove",
      description: "remove this app from its pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "pipelines:rename",
      description: "rename a pipeline",

      args: [
        {
          name: "pipeline",
          description: "current name of pipeline",
        },
        {
          name: "name",
          description: "new name of pipeline",
        },
      ],
    },
    {
      name: "pipelines:setup",
      description:
        "bootstrap a new pipeline with common settings and create a production and staging app (requires a fully formed app.json in the repo)",
      options: [
        {
          name: ["-t", "--team"],
          description:
            "the team to assign pipeline ownership to (defaults to current user)",
          args: {
            name: "team",
          },
        },
        {
          name: ["-y", "--yes"],
          description: "accept all default settings without prompting",
        },
      ],
      args: [
        {
          name: "name",
          description: "name of pipeline",
          isOptional: true,
        },
        {
          name: "repo",
          description: "a GitHub repository to connect the pipeline to",
          isOptional: true,
        },
      ],
    },
    {
      name: "pipelines:transfer",
      description: "transfer ownership of a pipeline",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "name of pipeline",
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
        description: "the owner to transfer the pipeline to",
      },
    },
    {
      name: "pipelines:update",
      description: "update the app's stage in a pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--stage"],
          description: "new stage of app",
          args: {
            name: "stage",
          },
        },
      ],
    },
    {
      name: "reviewapps:disable",
      description:
        "disable review apps and/or settings on an existing pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "parent app used by review apps",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-p", "--pipeline"],
          description: "name of pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: "--no-autodeploy",
          description: "disable autodeployments",
        },
        {
          name: "--no-autodestroy",
          description: "disable automatically destroying review apps",
        },
        {
          name: "--no-wait-for-ci",
          description: "disable wait for CI",
        },
      ],
    },
    {
      name: "reviewapps:enable",
      description: "enable review apps and/or settings on an existing pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "parent app used by review apps",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-p", "--pipeline"],
          description: "name of pipeline",
          args: {
            name: "pipeline",
          },
        },
        {
          name: "--autodeploy",
          description: "autodeploy the review app",
        },
        {
          name: "--autodestroy",
          description: "autodestroy the review app",
        },
        {
          name: "--wait-for-ci",
          description: "wait for CI to pass before deploying",
        },
      ],
    },
    {
      name: "spaces",
      description: "list available spaces",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: ["-t", "--team"],
          description: "team to use",
          args: {
            name: "team",
          },
        },
      ],
    },
    {
      name: "spaces:create",
      description: "create a new space",
      options: [
        {
          name: ["-s", "--space"],
          description: "name of space to create",
          args: {
            name: "space",
          },
        },
        {
          name: "--region",
          description: "region name",
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
          description: "team to use",
          args: {
            name: "team",
          },
        },
      ],
    },
    {
      name: "spaces:destroy",
      description: "destroy a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "space to destroy",
          args: {
            name: "space",
          },
        },
        {
          name: "--confirm",
          description: "set to space name to bypass confirm prompt",
          args: {
            name: "confirm",
          },
        },
      ],
    },
    {
      name: "spaces:info",
      description: "show info about a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "space to get info of",
          args: {
            name: "space",
          },
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "spaces:peering:info",
      description:
        "display the information necessary to initiate a peering connection",
      options: [
        {
          name: ["-s", "--space"],
          description: "space to get peering info from",
          args: {
            name: "space",
          },
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "spaces:peerings",
      description: "list peering connections for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "space to get peer list from",
          args: {
            name: "space",
          },
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "spaces:peerings:accept",
      description: "accepts a pending peering request for a private space",
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
          description: "space to get peering info from",
          args: {
            name: "space",
          },
        },
      ],
    },
    {
      name: "spaces:peerings:destroy",
      description: "destroys an active peering connection in a private space",
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
          description: "space to get peering info from",
          args: {
            name: "space",
          },
        },
        {
          name: "--confirm",
          description: "set to PCX ID to bypass confirm prompt",
          args: {
            name: "confirm",
          },
        },
      ],
    },
    {
      name: "spaces:ps",
      description: "list dynos for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "space to get dynos of",
          args: {
            name: "space",
          },
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "spaces:rename",
      description: "renames a space",
      options: [
        {
          name: "--from",
          description: "current name of space",
          args: {
            name: "from",
          },
        },
        {
          name: "--to",
          description: "desired name of space",
          args: {
            name: "to",
          },
        },
      ],
    },
    {
      name: "spaces:topology",
      description: "show space topology",
      options: [
        {
          name: ["-s", "--space"],
          description: "space to get topology of",
          args: {
            name: "space",
          },
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "spaces:transfer",
      description: "transfer a space to another team",
      options: [
        {
          name: "--space",
          description: "name of space",
          args: {
            name: "space",
          },
        },
        {
          name: "--team",
          description: "desired owner of space",
          args: {
            name: "team",
          },
        },
      ],
    },
    {
      name: "spaces:vpn:config",
      description: "display the configuration information for VPN",
      options: [
        {
          name: ["-s", "--space"],
          description: "space the VPN connection belongs to",
          args: {
            name: "space",
          },
        },
        {
          name: ["-n", "--name"],
          description:
            "name or id of the VPN connection to retrieve config from",
          args: {
            name: "name",
          },
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "spaces:vpn:connect",
      description: "create VPN",
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
          description: "public IP of customer gateway",
          args: {
            name: "ip",
          },
        },
        {
          name: ["-c", "--cidrs"],
          description: "a list of routable CIDRs separated by commas",
          args: {
            name: "cidrs",
          },
        },
        {
          name: ["-s", "--space"],
          description: "space name",
          args: {
            name: "space",
          },
        },
      ],
    },
    {
      name: "spaces:vpn:connections",
      description: "list the VPN Connections for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "space to get VPN connections from",
          args: {
            name: "space",
          },
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "spaces:vpn:destroy",
      description: "destroys VPN in a private space",
      options: [
        {
          name: ["-s", "--space"],
          description: "space to get peering info from",
          args: {
            name: "space",
          },
        },
        {
          name: ["-n", "--name"],
          description:
            "name or id of the VPN connection to retrieve config from",
          args: {
            name: "name",
          },
        },
        {
          name: "--confirm",
          description: "set to VPN connection name to bypass confirm prompt",
          args: {
            name: "confirm",
          },
        },
      ],
    },
    {
      name: "spaces:vpn:info",
      description: "display the information for VPN",
      options: [
        {
          name: ["-s", "--space"],
          description: "space the vpn connection belongs to",
          args: {
            name: "space",
          },
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: ["-n", "--name"],
          description: "name or id of the VPN connection to get info from",
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "spaces:vpn:update",
      description: "update VPN",
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
          description: "a list of routable CIDRs separated by commas",
          args: {
            name: "cidrs",
          },
        },
        {
          name: ["-s", "--space"],
          description: "space name",
          args: {
            name: "space",
          },
        },
      ],
    },
    {
      name: "spaces:vpn:wait",
      description: "wait for VPN Connection to be created",
      options: [
        {
          name: ["-s", "--space"],
          description: "space the vpn connection belongs to",
          args: {
            name: "space",
          },
        },
        {
          name: ["-n", "--name"],
          description: "name or id of the vpn connection to wait for",
          args: {
            name: "name",
          },
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: ["-i", "--interval"],
          description: "seconds to wait between poll intervals",
          args: {
            name: "interval",
          },
        },
        {
          name: ["-t", "--timeout"],
          description: "maximum number of seconds to wait",
          args: {
            name: "timeout",
          },
        },
      ],
    },
    {
      name: "spaces:wait",
      description: "wait for a space to be created",
      options: [
        {
          name: ["-s", "--space"],
          description: "space to get info of",
          args: {
            name: "space",
          },
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: ["-i", "--interval"],
          description: "seconds to wait between poll intervals",
          args: {
            name: "interval",
          },
        },
        {
          name: ["-t", "--timeout"],
          description: "maximum number of seconds to wait",
          args: {
            name: "timeout",
          },
        },
      ],
    },
    {
      name: "trusted-ips",
      description: "list trusted IP ranges for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "space to get inbound rules from",
          args: {
            name: "space",
          },
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "trusted-ips:add",
      description: "Add one range to the list of trusted IP ranges",
      options: [
        {
          name: ["-s", "--space"],
          description: "space to add rule to",
          args: {
            name: "space",
          },
        },
        {
          name: "--confirm",
          description: "set to space name to bypass confirm prompt",
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
          description: "space to remove rule from",
          args: {
            name: "space",
          },
        },
        {
          name: "--confirm",
          description: "set to space name to bypass confirm prompt",
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
          description: "specify the dyno to connect to",
          args: {
            name: "dyno",
          },
        },
        {
          name: ["-o", "--output"],
          description: "the name of the output file",
          args: {
            name: "output",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
          description: "specify the dyno to connect to",
          args: {
            name: "dyno",
          },
        },
        {
          name: "--ssh",
          description: "use native ssh",
        },
        {
          name: "--status",
          description: "lists the status of the SSH server in the dyno",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
          description: "specify the dyno to connect to",
          args: {
            name: "dyno",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
          description: "specify the dyno to connect to",
          args: {
            name: "dyno",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "access",
      description: "list who has access to an app",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "access:add",
      description: "add new users to your app",
      options: [
        {
          name: ["-p", "--permissions"],
          description: "list of permissions comma separated",
          args: {
            name: "permissions",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "remove users from a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "update existing collaborators on an team app",
      options: [
        {
          name: ["-p", "--permissions"],
          description:
            "comma-delimited list of permissions to update (deploy,manage,operate)",
          args: {
            name: "permissions",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "add yourself to a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "apps:leave",
      description: "remove yourself from a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "apps:lock",
      description: "prevent team members from joining an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "apps:transfer",
      description: "transfer applications to another user or team",
      options: [
        {
          name: ["-l", "--locked"],
          description: "lock the app upon transfer",
        },
        {
          name: "--bulk",
          description: "transfer applications in bulk",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "recipient",
        description: "user or team to transfer applications to",
      },
    },
    {
      name: "apps:unlock",
      description: "unlock an app so any team member can join",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "join",
      description: "add yourself to a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "leave",
      description: "remove yourself from a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "lock",
      description: "prevent team members from joining an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "members",
      description: "list members of a team",
      options: [
        {
          name: ["-r", "--role"],
          description: "filter by role",
          args: {
            name: "role",
          },
        },
        {
          name: "--pending",
          description: "filter by pending team invitations",
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: ["-t", "--team"],
          description: "team to use",
          args: {
            name: "team",
          },
        },
      ],
    },
    {
      name: "members:add",
      description: "adds a user to a team",
      options: [
        {
          name: ["-r", "--role"],
          description: "member role (admin, collaborator, member, owner)",
          args: {
            name: "role",
          },
        },
        {
          name: ["-t", "--team"],
          description: "team to use",
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
      description: "removes a user from a team",
      options: [
        {
          name: ["-t", "--team"],
          description: "team to use",
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
      description: "sets a members role in a team",
      options: [
        {
          name: ["-r", "--role"],
          description: "member role (admin, collaborator, member, owner)",
          args: {
            name: "role",
          },
        },
        {
          name: ["-t", "--team"],
          description: "team to use",
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
      description: "list the teams that you are a member of",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: "--enterprise",
          description: "filter by enterprise teams",
        },
      ],
    },
    {
      name: "orgs:open",
      description: "open the team interface in a browser window",
      options: [
        {
          name: ["-t", "--team"],
          description: "team to use",
          args: {
            name: "team",
          },
        },
      ],
    },
    {
      name: "teams",
      description: "list the teams that you are a member of",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "unlock",
      description: "unlock an app so any team member can join",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ps:autoscale:disable",
      description: "disable web dyno autoscaling",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "ps:autoscale:enable",
      description: "enable web dyno autoscaling",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: "--min",
          description: "minimum number of dynos",
          args: {
            name: "min",
          },
        },
        {
          name: "--max",
          description: "maximum number of dynos",
          args: {
            name: "max",
          },
        },
        {
          name: "--p95",
          description: "desired p95 response time",
          args: {
            name: "p95",
          },
        },
        {
          name: "--notifications",
          description:
            "receive email notifications when the max dyno limit is reached",
        },
      ],
    },
    {
      name: "ps:wait",
      description:
        "wait for all dynos to be running latest version after a release",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-t", "--type"],
          description: "wait for one specific dyno type",
          args: {
            name: "type",
          },
        },
        {
          name: ["-w", "--wait-interval"],
          description:
            "how frequently to poll in seconds (to avoid hitting Heroku API rate limits)",
          args: {
            name: "wait-interval",
          },
        },
        {
          name: ["-R", "--with-run"],
          description: "whether to wait for one-off run dynos",
        },
      ],
    },
    {
      name: "regions",
      description: "list available regions for deployment",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: "--private",
          description: "show regions for private spaces",
        },
        {
          name: "--common",
          description: "show regions for common runtime",
        },
      ],
    },
    {
      name: "webhooks",
      description: "list webhooks on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "webhooks:add",
      description: "add a webhook to an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-i", "--include"],
          description: "comma delimited event types your server will receive ",
          args: {
            name: "include",
          },
        },
        {
          name: ["-l", "--level"],
          description:
            "notify does not retry, sync will retry until successful or timeout",
          args: {
            name: "level",
          },
        },
        {
          name: ["-s", "--secret"],
          description:
            "value to sign delivery with in Heroku-Webhook-Hmac-SHA256 header",
          args: {
            name: "secret",
          },
        },
        {
          name: ["-t", "--authorization"],
          description: "authoriation header to send with webhooks",
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
      description: "list webhook deliveries on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-s", "--status"],
          description: "filter deliveries by status",
          args: {
            name: "status",
          },
        },
      ],
    },
    {
      name: "webhooks:deliveries:info",
      description: "info for a webhook event on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "list webhook events on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "webhooks:events:info",
      description: "info for a webhook event on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "info for a webhook on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "removes a webhook from an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
      args: {
        name: "id",
        description: "id of webhook to remove",
      },
    },
    {
      name: "webhooks:update",
      description: "updates a webhook in an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
        {
          name: ["-i", "--include"],
          description: "comma delimited event types your server will receive ",
          args: {
            name: "include",
          },
        },
        {
          name: ["-l", "--level"],
          description:
            "notify does not retry, sync will retry until successful or timeout",
          args: {
            name: "level",
          },
        },
        {
          name: ["-s", "--secret"],
          description:
            "value to sign delivery with in Heroku-Webhook-Hmac-SHA256 header",
          args: {
            name: "secret",
          },
        },
        {
          name: ["-t", "--authorization"],
          description: "authoriation header to send with webhooks",
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
      description: "list all the commands",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-j", "--json"],
          description: "display unfiltered api data in json format",
        },
        {
          name: "--hidden",
          description: "show hidden commands",
        },
        {
          name: "--columns",
          description: "only show provided columns (comma-separated)",
          args: {
            name: "columns",
          },
        },
        {
          name: "--sort",
          description: "property to sort by (prepend '-' for descending)",
          args: {
            name: "sort",
          },
        },
        {
          name: "--filter",
          description:
            "filter property by partial string matching, ex: name=foo",
          args: {
            name: "filter",
          },
        },
        {
          name: "--csv",
          description: "output is csv format [alias: --output=csv]",
        },
        {
          name: "--output",
          description: "output in a more machine friendly format",
          args: {
            name: "output",

            suggestions: ["csv", "json", "yaml"],
          },
        },
        {
          name: ["-x", "--extended"],
          description: "show extra columns",
        },
        {
          name: "--no-truncate",
          description: "do not truncate output to fit screen",
        },
        {
          name: "--no-header",
          description: "hide table header from output",
        },
      ],
    },
    {
      name: "help",
      description: "display help for <%= config.bin %>",
      options: [
        {
          name: "--all",
          description: "see all commands in CLI",
        },
      ],
      args: {
        name: "command",
        description: "command to show help for",
        isOptional: true,
      },
    },
    {
      name: "which",
      description: "show which plugin a command is in",

      args: {
        name: "command",
      },
    },
    {
      name: "update",
      description: "update the <%= config.bin %> CLI",

      args: {
        name: "channel",
        isOptional: true,
      },
    },
    {
      name: "plugins",
      description: "list installed plugins",
      options: [
        {
          name: "--core",
          description: "show core plugins",
        },
      ],
    },
    {
      name: ["plugins:install", "plugins:add"],
      description: "installs a plugin into the CLI",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-f", "--force"],
          description: "yarn install with force flag",
        },
      ],
      args: {
        name: "plugin",
        description: "plugin to install",
      },
    },
    {
      name: "plugins:link",
      description: "links a plugin into the CLI for development",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: {
        name: "path",
        description: "path to plugin",
      },
    },
    {
      name: ["plugins:uninstall", "plugins:unlink", "plugins:remove"],
      description: "removes a plugin from the CLI",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: {
        name: "plugin",
        description: "plugin to uninstall",
        isOptional: true,
      },
    },
    {
      name: "plugins:update",
      description: "update installed plugins",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
    },
    {
      name: "pg",
      description: "show database information",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "list database backups",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "pg:backups:cancel",
      description: "cancel an in-progress backup or restore (default newest)",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "capture a new backup",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "delete a backup",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "downloads database backup",
      options: [
        {
          name: ["-o", "--output"],
          description: "location to download to. Defaults to latest.dump",
          args: {
            name: "output",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "get information about a specific backup",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "restore a backup (default latest) to a database",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "schedule daily backups for given database",
      options: [
        {
          name: "--at",
          description:
            "at a specific (24h) hour in the given timezone. Defaults to UTC. --at '[HOUR]:00 [TIMEZONE]'",
          args: {
            name: "at",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "list backup schedule",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
          args: {
            name: "remote",
          },
        },
      ],
    },
    {
      name: "pg:backups:unschedule",
      description: "stop daily backups",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "get secret but publicly accessible URL of a backup",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
        "show table and index bloat in your database ordered by most wasteful",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
        "display queries holding locks other queries are waiting to be released",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "add an attachment to a database using connection pooling",
      options: [
        {
          name: "--as",
          description: "name for add-on attachment",
          args: {
            name: "as",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "copy all data from source db to target",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "show information on credentials in the database",
      options: [
        {
          name: "--reset",
          description: "DEPRECATED",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "create credential within database",
      options: [
        {
          name: ["-n", "--name"],
          description: "name of the new credential within the database",
          args: {
            name: "name",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "destroy credential within database",
      options: [
        {
          name: ["-n", "--name"],
          description: "unique identifier for the credential",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
        "repair the permissions of the default credential within database",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "rotate the database credentials",
      options: [
        {
          name: ["-n", "--name"],
          description:
            "which credential to rotate (default credentials if not specified)",
          args: {
            name: "name",
          },
        },
        {
          name: "--all",
          description: "rotate all credentials",
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
          description: "forces rotating the targeted credentials",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "show information on a database credential",
      options: [
        {
          name: ["-n", "--name"],
          description:
            "which credential to show (default credentials if not specified)",
          args: {
            name: "name",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "run or view diagnostics report",
      options: [
        {
          name: "--json",
          description: "format output as JSON",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "show database information",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "kill a query",
      options: [
        {
          name: ["-f", "--force"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "terminates all connections for all credentials",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "lists all databases and information on link",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "create a link between data stores",
      options: [
        {
          name: "--as",
          description: "name of link to create",
          args: {
            name: "as",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "destroys a link between data stores",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "display queries with active locks",
      options: [
        {
          name: ["-t", "--truncate"],
          description: "truncates queries to 40 charaters",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "show current maintenance information",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "start maintenance",
      options: [
        {
          name: ["-f", "--force"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "set weekly maintenance window",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
        "show 10 queries that have longest execution time in aggregate",
      options: [
        {
          name: "--reset",
          description: "resets statistics gathered by pg_stat_statements",
        },
        {
          name: ["-t", "--truncate"],
          description: "truncate queries to 40 characters",
        },
        {
          name: ["-n", "--num"],
          description: "the number of queries to display (default: 10)",
          args: {
            name: "num",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "sets DATABASE as your DATABASE_URL",
      options: [
        {
          name: ["-f", "--force"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "view active queries with execution time",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "open a psql shell to the database",
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
          description: "credential to use",
          args: {
            name: "credential",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "pull Heroku database into local or remote database",
      options: [
        {
          name: "--exclude-table-data",
          description:
            "tables for which data should be excluded (use ';' to split multiple names)",
          args: {
            name: "exclude-table-data",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "push local or remote into Heroku database",
      options: [
        {
          name: "--exclude-table-data",
          description:
            "tables for which data should be excluded (use ';' to split multiple names)",
          args: {
            name: "exclude-table-data",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "delete all data in DATABASE",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "show your current database settings",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
        "The duration of each completed statement will be logged if the statement completes after the time specified by VALUE.",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "log_statement controls which SQL statements are logged.",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
        "stop a replica from following and make it a writeable database",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
        "unfollow a database and upgrade it to the latest stable PostgreSQL version",
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
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
        "show dead rows and whether an automatic vacuum is expected to be triggered",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "blocks until database is available",
      options: [
        {
          name: "--wait-interval",
          description:
            "how frequently to poll in seconds (to avoid rate limiting)",
          args: {
            name: "wait-interval",
          },
        },
        {
          name: "--no-notify",
          description: "do not show OS notification",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
      description: "open a psql shell to the database",
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
          description: "credential to use",
          args: {
            name: "credential",
          },
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
          },
        },
        {
          name: ["-r", "--remote"],
          description: "git remote of app to use",
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
  ],
};

export default completionSpec;
