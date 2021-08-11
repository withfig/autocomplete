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
  subcommands: [
    {
      name: "addons:attach",
      description: "attach an existing add-on resource to an app",
      options: [
        {
          name: "--as",
          description: "name for add-on attachment",
          args: {},
        },
        {
          name: "--credential",
          description: "credential name for scoped access to Heroku Postgres",
          args: {},
        },
        {
          name: "--confirm",
          description: "overwrite existing add-on attachment with same name",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "addon_name",
        },
      ],
    },
    {
      name: "addons:create",
      description: "create a new add-on resource",
      options: [
        {
          name: "--name",
          description: "name for the add-on resource",
          args: {},
        },
        {
          name: "--as",
          description: "name for the initial add-on attachment",
          args: {},
        },
        {
          name: "--confirm",
          description:
            "overwrite existing config vars or existing add-on attachments",
          args: {},
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "service:plan",
        },
        {
          name: "addon",
          isVariadic: true,
        },
      ],
    },
    {
      name: "addons:add",
      description: "create a new add-on resource",
      options: [
        {
          name: "--name",
          description: "name for the add-on resource",
          args: {},
        },
        {
          name: "--as",
          description: "name for the initial add-on attachment",
          args: {},
        },
        {
          name: "--confirm",
          description:
            "overwrite existing config vars or existing add-on attachments",
          args: {},
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "service:plan",
        },
        {
          name: "addon",
          isVariadic: true,
        },
      ],
    },
    {
      name: "addons:destroy",
      description: "permanently destroy an add-on resource",
      options: [
        {
          name: "--force",
          description: "allow destruction even if connected to other apps",
        },
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "addon",
          isVariadic: true,
        },
      ],
    },
    {
      name: "addons:remove",
      description: "permanently destroy an add-on resource",
      options: [
        {
          name: "--force",
          description: "allow destruction even if connected to other apps",
        },
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "addon",
          isVariadic: true,
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "attachment_name",
        },
      ],
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
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "addon",
        },
      ],
    },
    {
      name: "addons",
      description: "lists your add-ons and attachments",
      options: [
        {
          name: "--all",
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
            isOptional: true,
            generators: getAppGenerator,
          },
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
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "addon",
        },
      ],
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
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "addon",
        },
      ],
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
      args: [
        {
          name: "service",
        },
      ],
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
            isOptional: true,
            generators: getAppGenerator,
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
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "addon",
        },
        {
          name: "plan",
        },
      ],
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
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "addon",
        },
        {
          name: "plan",
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
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "addon",
        },
      ],
    },
    {
      name: "domains:add",
      description: "add a domain to an app",
      args: [
        {
          name: "hostname",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show help for this command",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-c", "--cert"],
          description:
            "the name of the SSL cert you want to use for this domain",
          args: {},
        },
        {
          name: ["-j", "--json"],
          description: "output in json format",
        },
        {
          name: "wait",
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "domains:clear",
      description: "remove all domains from an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show help for this command",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "domains",
      description: "list domains for an app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show help for this command",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-j", "--json"],
          description: "output in json format",
        },
      ],
    },
    {
      name: "domains:info",
      description: "show detailed information for a domain on an app",
      args: [
        {
          name: "hostname",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show help for this command",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "domains:remove",
      description: "remove a domain from an app",
      args: [
        {
          name: "hostname",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show help for this command",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "domains:update",
      description:
        "update a domain to use a different SSL certificate on an app",
      args: [
        {
          name: "hostname",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show help for this command",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: "cert",
          description:
            "the name or id of the certificate you want to use for this domain",
          args: {},
        },
      ],
    },
    {
      name: "domains:wait",
      description: "wait for domain to be active for an app",
      args: [
        {
          name: "hostname",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show help for this command",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "apps:create",
      description: "creates a new app",
      options: [
        {
          name: "--app",
          args: {},
        },
        {
          name: "--addons",
          description: "comma-delimited list of addons to install",
          args: {},
        },
        {
          name: "--buildpack",
          description: "buildpack url to use for this app",
          args: {},
        },
        {
          name: "--manifest",
          description: "use heroku.yml settings for this app",
        },
        {
          name: "--no-remote",
          description: "do not create a git remote",
        },
        {
          name: "--remote",
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: "--stack",
          description: "the stack to create the app on",
          args: {},
        },
        {
          name: "--space",
          description: "the private space to create the app in",
          args: {},
        },
        {
          name: "--region",
          description: "specify region for the app to run in",
          args: {},
        },
        {
          name: "--ssh-git",
          description: "use SSH git protocol for local git remote",
        },
        {
          name: "--internal-routing",
          description:
            "private space-only. create as an Internal Web App that is only routable in the local network.",
        },
        {
          name: "--features",
          args: {},
        },
        {
          name: "--kernel",
          args: {},
        },
        {
          name: "--locked",
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: "--team",
          description: "team to use",
          args: {},
        },
      ],
      args: [
        {
          name: "app",
          generators: getAppGenerator,
        },
      ],
    },
    {
      name: "create",
      description: "creates a new app",
      options: [
        {
          name: "--app",
          args: {},
        },
        {
          name: "--addons",
          description: "comma-delimited list of addons to install",
          args: {},
        },
        {
          name: "--buildpack",
          description: "buildpack url to use for this app",
          args: {},
        },
        {
          name: "--manifest",
          description: "use heroku.yml settings for this app",
        },
        {
          name: "--no-remote",
          description: "do not create a git remote",
        },
        {
          name: "--remote",
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: "--stack",
          description: "the stack to create the app on",
          args: {},
        },
        {
          name: "--space",
          description: "the private space to create the app in",
          args: {},
        },
        {
          name: "--region",
          description: "specify region for the app to run in",
          args: {},
        },
        {
          name: "--ssh-git",
          description: "use SSH git protocol for local git remote",
        },
        {
          name: "--internal-routing",
          description:
            "private space-only. create as an Internal Web App that is only routable in the local network.",
        },
        {
          name: "--features",
          args: {},
        },
        {
          name: "--kernel",
          args: {},
        },
        {
          name: "--locked",
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: "--team",
          description: "team to use",
          args: {},
        },
      ],
      args: [
        {
          name: "app",
          generators: getAppGenerator,
        },
      ],
    },
    {
      name: "apps:destroy",
      description: "permanently destroy an app",
      options: [
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "app",
          generators: getAppGenerator,
        },
      ],
    },
    {
      name: "destroy",
      description: "permanently destroy an app",
      options: [
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "app",
          generators: getAppGenerator,
        },
      ],
    },
    {
      name: "apps:delete",
      description: "permanently destroy an app",
      options: [
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "app",
          generators: getAppGenerator,
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
          args: {},
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
            generators: getAppGenerator,
          },
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
            generators: getAppGenerator,
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
      name: "apps:favorites:remove",
      description: "unfavorites an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "apps",
      description: "list your apps",
      options: [
        {
          name: "--all",
          description: "include apps in all teams",
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: "--space",
          description: "filter by space",
          args: {},
        },
        {
          name: "--personal",
          description:
            "list apps in personal account when a default team is set",
        },
        {
          name: "--internal-routing",
          description: "filter to Internal Web Apps",
        },
        {
          name: "--team",
          description: "team to use",
          args: {},
        },
      ],
    },
    {
      name: "list",
      description: "list your apps",
      options: [
        {
          name: "--all",
          description: "include apps in all teams",
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: "--space",
          description: "filter by space",
          args: {},
        },
        {
          name: "--personal",
          description:
            "list apps in personal account when a default team is set",
        },
        {
          name: "--internal-routing",
          description: "filter to Internal Web Apps",
        },
        {
          name: "--team",
          description: "team to use",
          args: {},
        },
      ],
    },
    {
      name: "apps:list",
      description: "list your apps",
      options: [
        {
          name: "--all",
          description: "include apps in all teams",
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: "--space",
          description: "filter by space",
          args: {},
        },
        {
          name: "--personal",
          description:
            "list apps in personal account when a default team is set",
        },
        {
          name: "--internal-routing",
          description: "filter to Internal Web Apps",
        },
        {
          name: "--team",
          description: "team to use",
          args: {},
        },
      ],
    },
    {
      name: "apps:info",
      description: "show detailed app information",
      options: [
        {
          name: "--shell",
          description: "output more shell friendly key/value pairs",
        },
        {
          name: "--extended",
        },
        {
          name: "--json",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "app",
          generators: getAppGenerator,
        },
      ],
    },
    {
      name: "info",
      description: "show detailed app information",
      options: [
        {
          name: "--shell",
          description: "output more shell friendly key/value pairs",
        },
        {
          name: "--extended",
        },
        {
          name: "--json",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "app",
          generators: getAppGenerator,
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "path",
        },
      ],
    },
    {
      name: "open",
      description: "open the app in a web browser",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "path",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "newname",
        },
      ],
    },
    {
      name: "rename",
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "newname",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "stack",
      description: "show the list of available stacks",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "stack",
        },
      ],
    },
    {
      name: "stack:set",
      description: "set the stack of an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "stack",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "confi",
          isVariadic: true,
        },
      ],
    },
    {
      name: "config:add",
      description: "set one or more config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "confi",
          isVariadic: true,
        },
      ],
    },
    {
      name: "dashboard",
      description: "display information about favorite apps",
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "url",
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
          name: "--extended",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "url",
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "feature",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "feature",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "feature",
        },
      ],
    },
    {
      name: "keys:add",
      description: "add an SSH key for a user",
      options: [
        {
          name: "--quiet",
        },
        {
          name: "--yes",
          description: "automatically answer yes for all prompts",
        },
      ],
      args: [
        {
          name: "key",
        },
      ],
    },
    {
      name: "keys:clear",
      description: "remove all SSH keys for current user",
    },
    {
      name: "keys",
      description: "display your SSH keys",
      options: [
        {
          name: "--long",
          description: "display full SSH keys",
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "keys:remove",
      description: "remove an SSH key from the user",

      args: [
        {
          name: "key",
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
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "feature",
        },
      ],
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
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
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
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "feature",
        },
      ],
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
            generators: getAppGenerator,
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
            generators: getAppGenerator,
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
            generators: getAppGenerator,
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
            isOptional: true,
            generators: getAppGenerator,
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
          name: "--extended",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "p",
          isVariadic: true,
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "dyno",
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "dyno",
        },
      ],
    },
    {
      name: "restart",
      description: "restart app dynos",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "dyno",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "p",
          isVariadic: true,
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "dyn",
          isVariadic: true,
        },
      ],
    },
    {
      name: "scale",
      description: "scale dyno quantity up or down",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "scal",
          isVariadic: true,
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "dyno",
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "dyno",
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "dyno",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "dyno",
        },
      ],
    },
    {
      name: "stop",
      description: "stop app dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "dyno",
        },
      ],
    },
    {
      name: "kill",
      description: "stop app dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "dyno",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "p",
          isVariadic: true,
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "p",
          isVariadic: true,
        },
      ],
    },
    {
      name: "resize",
      description: "manage dyno sizes",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "resiz",
          isVariadic: true,
        },
      ],
    },
    {
      name: "dyno:type",
      description: "manage dyno sizes",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "dyn",
          isVariadic: true,
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "dyn",
          isVariadic: true,
        },
      ],
    },
    {
      name: "releases",
      description: "display the releases for an app",
      options: [
        {
          name: "--num",
          description: "number of releases to show",
          args: {},
        },
        {
          name: "--json",
          description: "output releases in json format",
        },
        {
          name: "--extended",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
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
          name: "--shell",
          description: "output in shell format",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "release",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "release",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "release",
        },
      ],
    },
    {
      name: "rollback",
      description: "rollback to a previous release",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "release",
        },
      ],
    },
    {
      name: "auth:2fa:disable",
      description: "disables 2fa on account",
    },
    {
      name: "auth:2fa",
      description: "check 2fa status",
    },
    {
      name: "auth:login",
      description: "login with your Heroku credentials",
      options: [
        {
          name: "browser",
          description:
            'browser to open SSO with (example: "firefox", "safari")',
          args: {},
        },
        {
          name: ["-s", "--sso"],
          description: "login for enterprise users under SSO",
        },
        {
          name: ["-i", "--interactive"],
          description: "login with username/password",
        },
      ],
    },
    {
      name: "auth:logout",
      description: "clears local login credentials and invalidates API session",
    },
    {
      name: "auth:token",
      description: "",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show help for this command",
        },
      ],
    },
    {
      name: "auth:whoami",
      description: "display the current logged in user",
    },
    {
      name: "auth:disable",
      description: "disables an experimental feature",
      args: [
        {
          name: "feature",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: "confirm",
          args: {},
        },
      ],
    },
    {
      name: "autocomplete",
      description: "",
    },
    {
      name: "buildpacks:add",
      description:
        "add new app buildpack, inserting into list of buildpacks if necessary",
      args: [
        {
          name: "buildpack",
        },
      ],
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-i", "--index"],
          description: "the 1-based index of the URL in the list of URLs",
          args: {},
        },
      ],
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
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
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
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "buildpacks:info",
      description: "fetch info about a buildpack",
      args: [
        {
          name: "buildpack",
        },
      ],
    },
    {
      name: "buildpacks:remove",
      description: "remove a buildpack set on the app",
      args: [
        {
          name: "buildpack",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-i", "--index"],
          description:
            "the 1-based index of the URL to remove from the list of URLs",
          args: {},
        },
      ],
    },
    {
      name: "buildpacks:search",
      description: "search for buildpacks",
      args: [
        {
          name: "term",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "namespace",
          description:
            "buildpack namespaces to filter on using a comma separated list",
          args: {},
        },
        {
          name: "name",
          description:
            "buildpack names to filter on using a comma separated list ",
          args: {},
        },
        {
          name: "description",
          description: "buildpack description to filter on",
          args: {},
        },
      ],
    },
    {
      name: "buildpacks:set",
      description: "",
      args: [
        {
          name: "buildpack",
        },
      ],
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-i", "--index"],
          description: "the 1-based index of the URL in the list of URLs",
          args: {},
        },
      ],
    },
    {
      name: "buildpacks:versions",
      description: "list versions of a buildpack",
      args: [
        {
          name: "buildpack",
        },
      ],
    },
    {
      name: "certs:wait",
      description: "waits for the certificate to be activated",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show help for this command",
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
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
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
        {
          name: "cert",
          isVariadic: true,
        },
      ],
    },
    {
      name: "certs:auto:disable",
      description: "disable ACM for an app",
      options: [
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "certs:auto:enable",
      description: "enable ACM status for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "certs:auto",
      description: "show ACM status for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
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
            generators: getAppGenerator,
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "cert",
          isVariadic: true,
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
          args: {},
        },
        {
          name: "--owner",
          description: "name of organization certificate belongs to",
          args: {},
        },
        {
          name: "--country",
          description: "country of owner, as a two-letter ISO country code",
          args: {},
        },
        {
          name: "--area",
          description: "sub-country area (state, province, etc.) of owner",
          args: {},
        },
        {
          name: "--city",
          description: "city of owner",
          args: {},
        },
        {
          name: "--subject",
          description: "specify entire certificate subject",
          args: {},
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "domain",
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
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "certs:info",
      description: "show certificate information for an SSL certificate",
      options: [
        {
          name: "--name",
          description: "name to check info on",
          args: {},
        },
        {
          name: "--endpoint",
          description: "endpoint to check info on",
          args: {},
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
            generators: getAppGenerator,
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "cert",
          isVariadic: true,
        },
      ],
    },
    {
      name: "certs:remove",
      description: "remove an SSL certificate from an app",
      options: [
        {
          name: "--confirm",
          args: {},
        },
        {
          name: "--name",
          description: "name to remove",
          args: {},
        },
        {
          name: "--endpoint",
          description: "endpoint to remove",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
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
          name: "--confirm",
          args: {},
        },
        {
          name: "--name",
          description: "name to update",
          args: {},
        },
        {
          name: "--endpoint",
          description: "endpoint to update",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
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
        {
          name: "cert",
          isVariadic: true,
        },
      ],
    },
    {
      name: "ci",
      description: "display the most recent CI runs for the given pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: "watch",
          description: "keep running and watch for new and update tests",
        },
        {
          name: "pipeline",
          args: {},
        },
        {
          name: "json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "ci:info",
      description: "show the status of a specific test run",
      args: [
        {
          name: "test-run",
        },
      ],
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: "node",
          description: "the node number to show its setup and output",
          args: {},
        },
        {
          name: "pipeline",
          args: {},
        },
      ],
    },
    {
      name: "ci:last",
      description:
        "looks for the most recent run and returns the output of that run",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: "node",
          description: "the node number to show its setup and output",
          args: {},
        },
        {
          name: "pipeline",
          args: {},
        },
      ],
    },
    {
      name: "ci:rerun",
      description: "rerun tests against current directory",
      args: [
        {
          name: "number",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: "pipeline",
          args: {},
        },
      ],
    },
    {
      name: "ci:run",
      description: "run tests against current directory",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: "pipeline",
          args: {},
        },
      ],
    },
    {
      name: "ci:config:get",
      description: "get a CI config var",
      options: [
        {
          name: "--shell",
          description: "output config var in shell format",
        },
        {
          name: "--pipeline",
          description: "pipeline",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "key",
        },
      ],
    },
    {
      name: "ci:config",
      description: "display CI config vars",
      options: [
        {
          name: "--shell",
          description: "output config vars in shell format",
        },
        {
          name: "--json",
          description: "output config vars in json format",
        },
        {
          name: "--pipeline",
          description: "pipeline",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "ci:config:set",
      description: "set CI config vars",
      options: [
        {
          name: "--pipeline",
          description: "pipeline",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "c",
          isVariadic: true,
        },
      ],
    },
    {
      name: "ci:config:unset",
      description: "unset CI config vars",
      options: [
        {
          name: "--pipeline",
          description: "pipeline",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "c",
          isVariadic: true,
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
          name: "--pipeline",
          description: "pipeline",
          args: {},
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
            isOptional: true,
            generators: getAppGenerator,
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
          name: "--pipeline",
          description: "pipeline",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "config:edit",
      description: "",
      args: [
        {
          name: "key",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "config:get",
      description: "display a single config value for an app",
      args: [
        {
          name: "KEY",
        },
      ],
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-s", "--shell"],
          description: "output config vars in shell format",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
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
      name: "config:unset",
      description: "unset one or more config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "git:clone",
      description:
        "clones a heroku app to your local machine at DIRECTORY (defaults to app name)",
      args: [
        {
          name: "DIRECTORY",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "git:credentials",
      description: "internal command for git-credentials",
      args: [
        {
          name: "command",
        },
      ],
    },
    {
      name: "git:remote",
      description: "",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "local",
      description:
        "run heroku app locally\nStart the application specified by a Procfile (defaults to ./Procfile)",
      args: [
        {
          name: "processname",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-f", "--procfile"],
          description: "use a different Procfile",
          args: {},
        },
        {
          name: ["-e", "--env"],
          description: "location of env file (defaults to .env)",
          args: {},
        },
        {
          name: ["-p", "--port"],
          description: "port to listen on",
          args: {},
        },
        {
          name: ["-r", "--restart"],
          description: "restart process if it dies",
        },
        {
          name: ["-c", "--concurrency"],
          description: "number of processes to start",
          args: {},
        },
      ],
    },
    {
      name: "local:run",
      description: "run a one-off command",
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
      description: "display node-foreman version",
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
      name: "clients:info",
      description: "show details of an oauth client",
      args: {
        name: "id",
      },
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
    },
    {
      name: "authorizations:create",
      description: "create a new OAuth authorization",
      options: [
        {
          name: "--description",
          description: "set a custom authorization description",
          args: {},
        },
        {
          name: "--scope",
          description: "set custom OAuth scopes",
          args: {},
        },
        {
          name: "--expires-in",
          description: "set expiration in seconds (default no expiration)",
          args: {},
        },
        {
          name: "--short",
          description: "only output token",
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "authorizations:info",
      description: "show an existing OAuth authorization",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
      ],
      args: [
        {
          name: "id",
        },
      ],
    },
    {
      name: "authorizations:revoke",
      description: "revoke OAuth authorization",

      args: [
        {
          name: "id",
        },
      ],
    },
    {
      name: "authorizations:rotate",
      description: "updates an OAuth authorization token",

      args: [
        {
          name: "id",
        },
      ],
    },
    {
      name: "authorizations:update",
      description: "updates an OAuth authorization",
      options: [
        {
          name: "--description",
          description: "set a custom authorization description",
          args: {},
        },
        {
          name: "--client-id",
          description: "identifier of OAuth client to set",
          args: {},
        },
        {
          name: "--client-secret",
          description: "secret of OAuth client to set",
          args: {},
        },
      ],
      args: [
        {
          name: "id",
        },
      ],
    },
    {
      name: "clients:create",
      description: "create a new OAuth client",
      options: [
        {
          name: "--shell",
          description: "output in shell format",
        },
        {
          name: "--json",
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

      args: [
        {
          name: "id",
        },
      ],
    },
    {
      name: "clients:rotate",
      description: "rotate OAuth client secret",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: "--shell",
          description: "output in shell format",
        },
      ],
      args: [
        {
          name: "id",
        },
      ],
    },
    {
      name: "clients:update",
      description: "update OAuth client",
      options: [
        {
          name: "--name",
          description: "change the client name",
          args: {},
        },
        {
          name: "--url",
          description: "change the client redirect URL",
          args: {},
        },
      ],
      args: [
        {
          name: "id",
        },
      ],
    },
    {
      name: "sessions:destroy",
      description: "delete (logout) OAuth session by ID",

      args: [
        {
          name: "id",
        },
      ],
    },
    {
      name: "sessions",
      description: "list your OAuth sessions",
      options: [
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "access:add",
      description: "add new users to your app",
      options: [
        {
          name: "--permissions",
          description: "list of permissions comma separated",
          args: {},
        },
        {
          name: "--privileges",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "email",
        },
      ],
    },
    {
      name: "sharing:add",

      args: [
        {
          name: "sharin",
          isVariadic: true,
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
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "sharing:access",

      args: [
        {
          name: "sharin",
          isVariadic: true,
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "email",
        },
      ],
    },
    {
      name: "sharing:remove",

      args: [
        {
          name: "sharin",
          isVariadic: true,
        },
      ],
    },
    {
      name: "access:update",
      description: "update existing collaborators on an team app",
      options: [
        {
          name: "--permissions",
          description:
            "comma-delimited list of permissions to update (deploy,manage,operate)",
          args: {},
        },
        {
          name: "--privileges",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "email",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "join:null",
      description: "add yourself to a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
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
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "leave:null",
      description: "remove yourself from a team app",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
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
            generators: getAppGenerator,
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
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "apps:transfer",
      description: "transfer applications to another user or team",
      options: [
        {
          name: "--locked",
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
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "recipient",
        },
      ],
    },
    {
      name: "sharing:transfer",

      args: [
        {
          name: "sharin",
          isVariadic: true,
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "unlock:null",
      description: "unlock an app so any team member can join",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "members",
      description: "list members of a team",
      options: [
        {
          name: "--role",
          description: "filter by role",
          args: {},
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
          name: "--team",
          description: "team to use",
          args: {},
        },
      ],
    },
    {
      name: "members:remove",
      description: "removes a user from a team",
      options: [
        {
          name: "--team",
          description: "team to use",
          args: {},
        },
      ],
      args: [
        {
          name: "email",
        },
      ],
    },
    {
      name: "orgs:default",
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
        {
          name: "--teams",
          description: "filter by teams",
        },
      ],
    },
    {
      name: "orgs:open",
      description: "open the team interface in a browser window",
      options: [
        {
          name: "--team",
          description: "team to use",
          args: {},
        },
      ],
    },
    {
      name: "teams",
      description:
        "list the teams that you are a member of\n\nUse \u001b[36m\u001b[1mheroku members:*\u001b[22m\u001b[39m to manage team members.",
      options: [
        {
          name: "--json",
          description: "output in json format",
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "backup_id",
        },
      ],
    },
    {
      name: "pg:backups:capture",
      description: "capture a new backup",
      options: [
        {
          name: "--wait-interval",
          args: {},
        },
        {
          name: "--snapshot",
        },
        {
          name: "--verbose",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:backups:delete",
      description: "delete a backup",
      options: [
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "backup_id",
        },
      ],
    },
    {
      name: "pg:backups:download",
      description: "downloads database backup",
      options: [
        {
          name: "--output",
          description: "location to download to. Defaults to latest.dump",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "backup_id",
        },
      ],
    },
    {
      name: "pg:backups",
      description: "list database backups",
      options: [
        {
          name: "--verbose",
        },
        {
          name: "--confirm",
          args: {},
        },
        {
          name: "--output",
          args: {},
        },
        {
          name: "--wait-interval",
          args: {},
        },
        {
          name: "--at",
          args: {},
        },
        {
          name: "--quiet",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "p",
          isVariadic: true,
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "backup_id",
        },
      ],
    },
    {
      name: "pg:backups:restore",
      description: "restore a backup (default latest) to a database",
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
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "backup",
        },
        {
          name: "database",
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
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:backups:url",
      description: "get secret but publicly accessible URL of a backup",
      options: [
        {
          name: "--quiet",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "backup_id",
        },
      ],
    },
    {
      name: "pg:backups:public-url",
      description: "get secret but publicly accessible URL of a backup",
      options: [
        {
          name: "--quiet",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "backup_id",
        },
      ],
    },
    {
      name: "pg:backups:publicurl",
      description: "get secret but publicly accessible URL of a backup",
      options: [
        {
          name: "--quiet",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "backup_id",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:connection-pooling:attach",
      description: "add an attachment to a database using connection pooling",
      options: [
        {
          name: "--as",
          description: "name for add-on attachment",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:copy",
      description: "copy all data from source db to target",
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
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
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
      name: "pg:credentials:create",
      description: "create credential within database",
      options: [
        {
          name: "--name",
          description: "name of the new credential within the database",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:credentials:destroy",
      description: "destroy credential within database",
      options: [
        {
          name: "--name",
          description: "unique identifier for the credential",
          args: {},
        },
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:credentials:repair-default",
      description:
        "repair the permissions of the default credential within database",
      options: [
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:credentials:rotate",
      description: "rotate the database credentials",
      options: [
        {
          name: "--name",
          description:
            "which credential to rotate (default credentials if not specified)",
          args: {},
        },
        {
          name: "--all",
          description: "rotate all credentials",
        },
        {
          name: "--confirm",
          args: {},
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:credentials:url",
      description: "show information on a database credential",
      options: [
        {
          name: "--name",
          description:
            "which credential to show (default credentials if not specified)",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "DATABASE|REPORT_ID",
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:kill",
      description: "kill a query",
      options: [
        {
          name: "--force",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "pid",
        },
        {
          name: "database",
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:links:create",
      description: "create a link between data stores",
      options: [
        {
          name: "--as",
          description: "name of link to create",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
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
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
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
      name: "pg:links",
      description: "lists all databases and information on link",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:locks",
      description: "display queries with active locks",
      options: [
        {
          name: "--truncate",
          description: "truncates queries to 40 charaters",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:maintenance:run",
      description: "start maintenance",
      options: [
        {
          name: "--force",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
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
          name: "--truncate",
          description: "truncate queries to 40 characters",
        },
        {
          name: "--num",
          description: "the number of queries to display (default: 10)",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:promote",
      description: "sets DATABASE as your DATABASE_URL",
      options: [
        {
          name: "--force",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:ps",
      description: "view active queries with execution time",
      options: [
        {
          name: "--verbose",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:psql",
      description: "open a psql shell to the database",
      options: [
        {
          name: "--command",
          description: "SQL command to run",
          args: {},
        },
        {
          name: "--file",
          description: "SQL file to run",
          args: {},
        },
        {
          name: "--credential",
          description: "credential to use",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "psql",
      description: "open a psql shell to the database",
      options: [
        {
          name: "--command",
          description: "SQL command to run",
          args: {},
        },
        {
          name: "--file",
          description: "SQL file to run",
          args: {},
        },
        {
          name: "--credential",
          description: "credential to use",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
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
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
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
      name: "pg:pull",
      description: "pull Heroku database into local or remote database",
      options: [
        {
          name: "--exclude-table-data",
          description:
            "tables for which data should be excluded (use ';' to split multiple names)",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
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
      name: "pg:repoint",
      description: "changes which leader a follower is following",
      options: [
        {
          name: "--confirm",
          args: {},
        },
        {
          name: "--follow",
          description: "leader database to follow",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:reset",
      description: "delete all data in DATABASE",
      options: [
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:settings:log-connections",
      description:
        "Controls whether a log message is produced when a login attempt is made. Default is true.",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "value",
        },
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "value",
        },
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:settings:log-min-duration-statement",
      description:
        "The duration of each completed statement will be logged if the statement completes after the time specified by VALUE.\nVALUE needs to specified as a whole number, in milliseconds.",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "value",
        },
        {
          name: "database",
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "value",
        },
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:unfollow",
      description:
        "stop a replica from following and make it a writeable database",
      options: [
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:upgrade",
      description:
        "unfollow a database and upgrade it to the latest stable PostgreSQL version",
      options: [
        {
          name: "--confirm",
          args: {},
        },
        {
          name: "--version",
          description: "PostgreSQL version to upgrade to",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:vacuum_stats",
      description:
        "show dead rows and whether an automatic vacuum is expected to be triggered",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pg:wait",
      description: "blocks until database is available",
      options: [
        {
          name: "--wait-interval",
          description:
            "how frequently to poll in seconds (to avoid rate limiting)",
          args: {},
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "pipelines:add",
      description: "",
      args: [
        {
          name: "pipeline",
        },
      ],
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-s", "--stage"],
          description: "stage of first app in pipeline",
          args: {},
        },
      ],
    },
    {
      name: "pipelines:connect",
      description: "connect a github repo to an existing pipeline",
      args: [
        {
          name: "name",
        },
      ],
      options: [
        {
          name: ["-r", "--repo"],
          description: "the GitHub repository to connect to",
          args: {},
        },
      ],
    },
    {
      name: "pipelines:create",
      description: "",
      args: [
        {
          name: "name",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-s", "--stage"],
          description: "stage of first app in pipeline",
          args: {},
        },
        {
          name: "team",
          description: "the team which will own the apps",
          args: {},
        },
      ],
    },
    {
      name: "pipelines:destroy",
      description: "destroy a pipeline",
      args: [
        {
          name: "pipeline",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "pipelines",
      description: "list pipelines you have access to",
      options: [
        {
          name: "json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "pipelines:info",
      description: "show list of apps in a pipeline",
      args: [
        {
          name: "pipeline",
        },
      ],
      options: [
        {
          name: "json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "pipelines:open",
      description: "open a pipeline in dashboard",
      args: [
        {
          name: "pipeline",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-t", "--to"],
          description: "comma separated list of apps to promote to",
          args: {},
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
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "pipelines:rename",
      description: "rename a pipeline",
      args: [
        {
          name: "pipeline",
        },
        {
          name: "name",
        },
      ],
    },
    {
      name: "pipelines:setup",
      description:
        "bootstrap a new pipeline with common settings and create a production and staging app (requires a fully formed app.json in the repo)",
      args: [
        {
          name: "name",
          isOptional: true,
        },
        {
          name: "repo",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "team",
          description:
            "the team to assign pipeline ownership to (defaults to current user)",
          args: {},
        },
        {
          name: ["-y", "--yes"],
          description: "accept all default settings without prompting",
        },
      ],
    },
    {
      name: "pipelines:transfer",
      description: "transfer ownership of a pipeline",
      args: [
        {
          name: "owner",
        },
      ],
      options: [
        {
          name: "pipeline",
          args: {},
        },
        {
          name: ["-c", "--confirm"],
          args: {},
        },
      ],
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
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-s", "--stage"],
          description: "new stage of app",
          args: {},
        },
      ],
    },
    {
      name: "pipelines:disable",
      description:
        "disable review apps and/or settings on an existing pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: "pipeline",
          args: {},
        },
        {
          name: "autodeploy",
          description: "disable autodeployments",
        },
        {
          name: "autodestroy",
          description: "disable automatically destroying review apps",
        },
      ],
    },
    {
      name: "pipelines:enable",
      description: "enable review apps and/or settings on an existing pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "name of pipeline",
          args: {},
        },
        {
          name: "autodeploy",
          description: "autodeploy the review app",
        },
        {
          name: "autodestroy",
          description: "autodestroy the review app",
        },
      ],
    },
    {
      name: "ps:disable",
      description: "disable web dyno autoscaling",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
      ],
    },
    {
      name: "ps:enable",
      description: "enable web dyno autoscaling",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: "min",
          description: "minimum number of dynos",
          args: {},
        },
        {
          name: "max",
          description: "maximum number of dynos",
          args: {},
        },
        {
          name: "p95",
          description: "desired p95 response time",
          args: {},
        },
        {
          name: "notifications",
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
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-t", "--type"],
          description: "wait for one specific dyno type",
          args: {},
        },
      ],
    },
    {
      name: "ps:regions",
      description: "list available regions for deployment",
      options: [
        {
          name: "json",
          description: "output in json format",
        },
        {
          name: "private",
          description: "show regions for private spaces",
        },
        {
          name: "common",
          description: "show regions for common runtime",
        },
      ],
    },
    {
      name: "redis:cli",
      description: "opens a redis prompt",
      options: [
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "redis:keyspace-notifications",
      description: "set the keyspace notifications configuration",
      options: [
        {
          name: "--config",
          description: "set keyspace notifications configuration",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "redis:maintenance",
      description: "manage maintenance windows",
      options: [
        {
          name: "--window",
          description: "set weekly UTC maintenance window",
          args: {},
        },
        {
          name: "--run",
          description: "start maintenance",
        },
        {
          name: "--force",
          description:
            "start maintenance without entering application maintenance mode",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "redis:maxmemory",
      description: "set the key eviction policy",
      options: [
        {
          name: "--policy",
          description: "set policy name",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "redis:timeout",
      description:
        "set the number of seconds to wait before killing idle connections",
      options: [
        {
          name: "--seconds",
          description: "set timeout value",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
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
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "database",
        },
      ],
    },
    {
      name: "run:console",
      description: "",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-s", "--size"],
          description: "dyno size",
          args: {},
        },
        {
          name: ["-e", "--env"],
          description:
            "environment variables to set (use ';' to split multiple vars)",
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
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-n", "--num"],
          description: "number of lines to display",
          args: {},
        },
        {
          name: ["-p", "--ps"],
          description: "hidden alias for dyno",
          args: {},
        },
        {
          name: ["-d", "--dyno"],
          description:
            'only show output from this dyno type (such as "web" or "worker")',
          args: {},
        },
        {
          name: ["-s", "--source"],
          description:
            'only show output from this source (such as "app" or "heroku")',
          args: {},
        },
        {
          name: ["-t", "--tail"],
          description: "continually stream logs",
        },
      ],
    },
    {
      name: "run:rake",
      description: "",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-s", "--size"],
          description: "dyno size",
          args: {},
        },
        {
          name: ["-e", "--env"],
          description:
            "environment variables to set (use ';' to split multiple vars)",
          args: {},
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
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-e", "--env"],
          description:
            "environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
        {
          name: ["-s", "--size"],
          description: "dyno size",
          args: {},
        },
        {
          name: ["-t", "--tail"],
          description: "continually stream logs",
        },
        {
          name: "type",
          description: "process type",
          args: {},
        },
      ],
    },
    {
      name: "run",
      description:
        "run a one-off process inside a heroku dyno\nShows a notification if the dyno takes more than 20 seconds to start.",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-s", "--size"],
          description: "dyno size",
          args: {},
        },
        {
          name: "type",
          description: "process type",
          args: {},
        },
        {
          name: ["-e", "--env"],
          description:
            "environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
        {
          name: "listen",
          description: "listen on a local port",
        },
      ],
    },
    {
      name: "run:inside",
      description: "run a one-off process inside an existing heroku dyno",
      options: [
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
        {
          name: ["-r", "--remote"],
          description: 'the git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-e", "--env"],
          description:
            "environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
        {
          name: "listen",
          description: "listen on a local port",
        },
      ],
    },
    {
      name: "console",
      options: [
        {
          name: "--size",
          description: "dyno size",
          args: {},
        },
        {
          name: "--env",
          description:
            "environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "logs",
      description:
        "display recent log output\ndisable colors with --no-color, HEROKU_LOGS_COLOR=0, or HEROKU_COLOR=0",
      options: [
        {
          name: "--num",
          description: "number of lines to display",
          args: {},
        },
        {
          name: "--ps",
          description: "hidden alias for dyno",
          args: {},
        },
        {
          name: "--dyno",
          description:
            'only show output from this dyno type (such as "web" or "worker")',
          args: {},
        },
        {
          name: "--source",
          description:
            'only show output from this source (such as "app" or "heroku")',
          args: {},
        },
        {
          name: "--tail",
          description: "continually stream logs",
        },
        {
          name: "--force-colors",
          description: "force use of colors (even on non-tty output)",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
    },
    {
      name: "rake",
      options: [
        {
          name: "--size",
          description: "dyno size",
          args: {},
        },
        {
          name: "--exit-code",
          description: "passthrough the exit code of the remote command",
        },
        {
          name: "--env",
          description:
            "environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
        {
          name: "--no-tty",
          description: "force the command to not run in a tty",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "rak",
          isVariadic: true,
        },
      ],
    },
    {
      name: "spaces:create",
      description: "create a new space",
      options: [
        {
          name: "--space",
          description: "name of space to create",
          args: {},
        },
        {
          name: "--channel",
          args: {},
        },
        {
          name: "--region",
          description: "region name",
          args: {},
        },
        {
          name: "--features",
          description: "a list of features separated by commas",
          args: {},
        },
        {
          name: "--log-drain-url",
          description: "direct log drain url",
          args: {},
        },
        {
          name: "--shield",
          description: "create a Shield space",
        },
        {
          name: "--cidr",
          description: "RFC-1918 CIDR the space will use",
          args: {},
        },
        {
          name: "--kpi-url",
          description: "self-managed KPI endpoint to use",
          args: {},
        },
        {
          name: "--data-cidr",
          description:
            "RFC-1918 CIDR used by Heroku Data resources for the space",
          args: {},
        },
        {
          name: "--team",
          description: "team to use",
          args: {},
        },
      ],
      args: [
        {
          name: "space",
        },
      ],
    },
    {
      name: "spaces:destroy",
      description: "destroy a space",
      options: [
        {
          name: "--space",
          description: "space to destroy",
          args: {},
        },
        {
          name: "--confirm",
          description: "set to space name to bypass confirm prompt",
          args: {},
        },
      ],
      args: [
        {
          name: "space",
        },
      ],
    },
    {
      name: "drains:get",
      description: "display the log drain for a space",
      options: [
        {
          name: "--space",
          description: "space for which to get log drain",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "drains:set",
      description: "replaces the log drain for a space",
      options: [
        {
          name: "--space",
          description: "space for which to set log drain",
          args: {},
        },
      ],
      args: [
        {
          name: "url",
        },
      ],
    },
    {
      name: "spaces:hosts",
      description: "list dedicated hosts for a space",
      options: [
        {
          name: "--space",
          description: "space to get host list from",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
      args: [
        {
          name: "space",
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
          name: "--team",
          description: "team to use",
          args: {},
        },
      ],
    },
    {
      name: "spaces:info",
      description: "show info about a space",
      options: [
        {
          name: "--space",
          description: "space to get info of",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
      args: [
        {
          name: "space",
        },
      ],
    },
    {
      name: "outbound-rules:add",
      description: "Add outbound rules to a Private Space",
      options: [
        {
          name: "--space",
          description: "space to add rule to",
          args: {},
        },
        {
          name: "--confirm",
          description: "set to space name to bypass confirm prompt",
          args: {},
        },
        {
          name: "--dest",
          description:
            "target CIDR block dynos are allowed to communicate with",
          args: {},
        },
        {
          name: "--protocol",
          description:
            'the protocol dynos are allowed to use when communicating with hosts in destination CIDR block. Valid protocols are "tcp", "udp", "icmp", "0-255" and "any".',
          args: {},
        },
        {
          name: "--port",
          description:
            "the port dynos are allowed to use when communicating with hosts in destination CIDR block. Accepts a range in `<lowest port>-<highest port>` format. 0 is the minimum. The maximum port allowed is 65535, except for ICMP with a maximum of 255.",
          args: {},
        },
      ],
    },
    {
      name: "outbound-rules",
      description: "list Outbound Rules for a space",
      options: [
        {
          name: "--space",
          description: "space to get outbound rules from",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
      args: [
        {
          name: "space",
        },
      ],
    },
    {
      name: "outbound-rules:remove",
      description: "Remove a Rules from the list of Outbound Rules",
      options: [
        {
          name: "--space",
          description: "space to remove rule from",
          args: {},
        },
        {
          name: "--confirm",
          description: "set to space name to bypass confirm prompt",
          args: {},
        },
      ],
      args: [
        {
          name: "ruleNumber",
        },
      ],
    },
    {
      name: "spaces:peerings:accept",
      description: "accepts a pending peering request for a private space",
      options: [
        {
          name: "--pcxid",
          description: "PCX ID of a pending peering",
          args: {},
        },
        {
          name: "--space",
          description: "space to get peering info from",
          args: {},
        },
      ],
      args: [
        {
          name: "pcxid",
        },
      ],
    },
    {
      name: "spaces:peerings:destroy",
      description: "destroys an active peering connection in a private space",
      options: [
        {
          name: "--pcxid",
          description: "PCX ID of a pending peering",
          args: {},
        },
        {
          name: "--space",
          description: "space to get peering info from",
          args: {},
        },
        {
          name: "--confirm",
          description: "set to PCX ID to bypass confirm prompt",
          args: {},
        },
      ],
      args: [
        {
          name: "pcxid",
        },
      ],
    },
    {
      name: "spaces:peerings",
      description: "list peering connections for a space",
      options: [
        {
          name: "--space",
          description: "space to get peer list from",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
      args: [
        {
          name: "space",
        },
      ],
    },
    {
      name: "spaces:peering:info",
      description:
        "display the information necessary to initiate a peering connection",
      options: [
        {
          name: "--space",
          description: "space to get peering info from",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
      args: [
        {
          name: "space",
        },
      ],
    },
    {
      name: "spaces:ps",
      description: "list dynos for a space",
      options: [
        {
          name: "--space",
          description: "space to get dynos of",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
      args: [
        {
          name: "space",
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
          args: {},
        },
        {
          name: "--to",
          description: "desired name of space",
          args: {},
        },
      ],
    },
    {
      name: "spaces:topology",
      description: "show space topology",
      options: [
        {
          name: "--space",
          description: "space to get topology of",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
      args: [
        {
          name: "space",
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
          args: {},
        },
        {
          name: "--team",
          description: "desired owner of space",
          args: {},
        },
      ],
    },
    {
      name: "trusted-ips:add",
      description: "Add one range to the list of trusted IP ranges",
      options: [
        {
          name: "--space",
          description: "space to add rule to",
          args: {},
        },
        {
          name: "--confirm",
          description: "set to space name to bypass confirm prompt",
          args: {},
        },
      ],
      args: [
        {
          name: "source",
        },
      ],
    },
    {
      name: "trusted-ips",
      description: "list trusted IP ranges for a space",
      options: [
        {
          name: "--space",
          description: "space to get inbound rules from",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
      args: [
        {
          name: "space",
        },
      ],
    },
    {
      name: "trusted-ips:remove",
      description: "Remove a range from the list of trusted IP ranges",
      options: [
        {
          name: "--space",
          description: "space to remove rule from",
          args: {},
        },
        {
          name: "--confirm",
          description: "set to space name to bypass confirm prompt",
          args: {},
        },
      ],
      args: [
        {
          name: "source",
        },
      ],
    },
    {
      name: "spaces:vpn:config",
      description: "display the configuration information for VPN",
      options: [
        {
          name: "--space",
          description: "space the VPN connection belongs to",
          args: {},
        },
        {
          name: "--name",
          description:
            "name or id of the VPN connection to retrieve config from",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
      args: [
        {
          name: "name",
        },
      ],
    },
    {
      name: "spaces:vpn:connect",
      description: "create VPN",
      options: [
        {
          name: "--name",
          description: "VPN name",
          args: {},
        },
        {
          name: "--ip",
          description: "public IP of customer gateway",
          args: {},
        },
        {
          name: "--cidrs",
          description: "a list of routable CIDRs separated by commas",
          args: {},
        },
        {
          name: "--space",
          description: "space name",
          args: {},
        },
      ],
      args: [
        {
          name: "name",
        },
      ],
    },
    {
      name: "spaces:vpn:destroy",
      description: "destroys VPN in a private space",
      options: [
        {
          name: "--space",
          description: "space to get peering info from",
          args: {},
        },
        {
          name: "--name",
          description:
            "name or id of the VPN connection to retrieve config from",
          args: {},
        },
        {
          name: "--confirm",
          description: "set to VPN connection name to bypass confirm prompt",
          args: {},
        },
      ],
      args: [
        {
          name: "name",
        },
      ],
    },
    {
      name: "spaces:vpn:connections",
      description: "list the VPN Connections for a space",
      options: [
        {
          name: "--space",
          description: "space to get VPN connections from",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
      ],
      args: [
        {
          name: "space",
        },
      ],
    },
    {
      name: "spaces:vpn:info",
      description: "display the information for VPN",
      options: [
        {
          name: "--space",
          description: "space the vpn connection belongs to",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: "--name",
          description: "name or id of the VPN connection to get info from",
          args: {},
        },
      ],
      args: [
        {
          name: "name",
        },
      ],
    },
    {
      name: "spaces:vpn:update",
      description: "update VPN",
      options: [
        {
          name: "--name",
          description: "VPN name",
          args: {},
        },
        {
          name: "--cidrs",
          description: "a list of routable CIDRs separated by commas",
          args: {},
        },
        {
          name: "--space",
          description: "space name",
          args: {},
        },
      ],
      args: [
        {
          name: "name",
        },
      ],
    },
    {
      name: "spaces:vpn:wait",
      description: "wait for VPN Connection to be created",
      options: [
        {
          name: "--space",
          description: "space the vpn connection belongs to",
          args: {},
        },
        {
          name: "--name",
          description: "name or id of the vpn connection to wait for",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: "--interval",
          description: "seconds to wait between poll intervals",
          args: {},
        },
        {
          name: "--timeout",
          description: "maximum number of seconds to wait",
          args: {},
        },
      ],
      args: [
        {
          name: "name",
        },
      ],
    },
    {
      name: "spaces:wait",
      description: "wait for a space to be created",
      options: [
        {
          name: "--space",
          description: "space to get info of",
          args: {},
        },
        {
          name: "--json",
          description: "output in json format",
        },
        {
          name: "--interval",
          description: "seconds to wait between poll intervals",
          args: {},
        },
        {
          name: "--timeout",
          description: "maximum number of seconds to wait",
          args: {},
        },
      ],
      args: [
        {
          name: "space",
        },
      ],
    },
    {
      name: "status",
      description: "display current status of the Heroku platform",
      options: [
        {
          name: "json",
          description: "output in json format",
        },
      ],
    },
    {
      name: "webhooks",
      description: "",
    },
  ],
};

export default completionSpec;
