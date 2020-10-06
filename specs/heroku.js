let appOption = {
    type: "option",
    name: ["-a", "--app"],
    insertValue: "-a ",
    description: "app to run command against",
    arg: {
        takesInput: true, // default is optional
        shellSuggestions: {
            cmd: String.raw`node -p "const a = $( heroku apps --json ); const b = a.map(elm => elm.name); console.log(b.join('\n'))"`,
            // splitOn: "\n",
            postProcess: function (out) {
                return out.split("\n").slice(0, -2)
            }
        }
    },
    children: []
}

var completionSpec = {
    name: "heroku",
    type: "root",
    description: "CLI Interface for Heroku.com",
    arg: {
        takesInput: true, // default is optional
        // variadic: true, // default is false
    },
    // addons:attach
    children: [
        {
            type: "subcommand",
            name: "addons:attach",
            insertValue: "addons:attach",
            description: "attach an existing add-on resource to an app",
            children: [
                {
                    type: "option",
                    name: ["-a", "--app"],
                    insertValue: "-a ",
                    description: "app to run command against",
                    arg: {
                        takesInput: true, // default is optional
                        shellSuggestions: {
                            cmd: String.raw`node -p "const a = $( heroku apps --json ); const b = a.map(elm => elm.name); console.log(b.join('\n'))"`,
                            // splitOn: "\n",
                            postProcess: function (out) {
                                return out.split("\n").slice(0, -2)
                            }
                        }
                    },
                    children: []
                }
            ]
        },
        {
            type: "subcommand",
            name: "logs",
            insertValue: "logs ",
            description: "view server logs",
            children: [
                {
                    type: "option",
                    name: ["-t", "--tail"],
                    insertValue: "--tail ",
                    description: "continually stream logs",
                    arg: {},
                    children: []
                },
                appOption
            ],
        },
  { type: "subcommand", name: "access", insertValue: "access",          description: "manage user access to apps" },
  { type: "subcommand", name: "addons", insertValue: "addons",          description: "tools and services for developing, extending, and operating your app" },
  { type: "subcommand", name: "apps", insertValue: "apps",            description: "manage apps on Heroku" },
  { type: "subcommand", name: "auth", insertValue: "auth",            description: "check 2fa status" },
  { type: "subcommand", name: "authorizations", insertValue: "authorizations",  description: "OAuth authorizations" },
  { type: "subcommand", name: "autocomplete", insertValue: "autocomplete",    description: "display autocomplete installation instructions" },
  { type: "subcommand", name: "buildpacks", insertValue: "buildpacks",      description: "scripts used to compile apps" },
  { type: "subcommand", name: "certs", insertValue: "certs",           description: "a topic for the ssl plugin" },
  { type: "subcommand", name: "ci", insertValue: "ci",              description: "run an application test suite on Heroku" },
  { type: "subcommand", name: "clients", insertValue: "clients",         description: "OAuth clients on the platform" },
  { type: "subcommand", name: "config", insertValue: "config",          description: "environment variables of apps" },
  { type: "subcommand", name: "container", insertValue: "container",       description: "Use containers to build and deploy Heroku apps" },
  { type: "subcommand", name: "domains", insertValue: "domains",         description: "custom domains for apps" },
  { type: "subcommand", name: "drains", insertValue: "drains",          description: "forward logs to syslog or HTTPS" },
  { type: "subcommand", name: "features", insertValue: "features",        description: "add/remove app features" },
  { type: "subcommand", name: "git", insertValue: "git",             description: "manage local git repository for app" },
  { type: "subcommand", name: "help", insertValue: "help",            description: "display help for heroku" },
  { type: "subcommand", name: "keys", insertValue: "keys",            description: "add/remove account ssh keys" },
  { type: "subcommand", name: "labs", insertValue: "labs",            description: "add/remove experimental features" },
  { type: "subcommand", name: "local", insertValue: "local",           description: "run Heroku app locally" },
  { type: "subcommand", name: "logs", insertValue: "logs",            description: "display recent log output" },
  { type: "subcommand", name: "maintenance", insertValue: "maintenance",     description: "enable/disable access to app" },
  { type: "subcommand", name: "members", insertValue: "members",         description: "manage organization members" },
  { type: "subcommand", name: "notifications", insertValue: "notifications",   description: "display notifications" },
  { type: "subcommand", name: "orgs", insertValue: "orgs",            description: "manage organizations" },
  { type: "subcommand", name: "pg", insertValue: "pg",              description: "manage postgresql databases" },
  { type: "subcommand", name: "pipelines", insertValue: "pipelines",       description: "manage pipelines" },
  { type: "subcommand", name: "plugins", insertValue: "plugins",         description: "list installed plugins" },
  { type: "subcommand", name: "ps", insertValue: "ps",              description: "Client tools for Heroku Exec" },
  { type: "subcommand", name: "psql", insertValue: "psql",            description: "open a psql shell to the database" },
  { type: "subcommand", name: "redis", insertValue: "redis",           description: "manage heroku redis instances" },
  { type: "subcommand", name: "regions", insertValue: "regions",         description: "list available regions for deployment" },
  { type: "subcommand", name: "releases", insertValue: "releases",        description: "display the releases for an app" },
  { type: "subcommand", name: "reviewapps", insertValue: "reviewapps",      description: "manage reviewapps in pipelines" },
  { type: "subcommand", name: "run", insertValue: "run",             description: "run a one-off process inside a Heroku dyno" },
  { type: "subcommand", name: "sessions", insertValue: "sessions",        description: "OAuth sessions" },
  { type: "subcommand", name: "spaces", insertValue: "spaces",          description: "manage heroku private spaces" },
  { type: "subcommand", name: "status", insertValue: "status",          description: "status of the Heroku platform" },
  { type: "subcommand", name: "teams", insertValue: "teams",           description: "manage teams" },
  { type: "subcommand", name: "update", insertValue: "update",          description: "update the Heroku CLI" },
  { type: "subcommand", name: "webhooks", insertValue: "webhooks", description: "list webhooks on an app" }
    ]
}

