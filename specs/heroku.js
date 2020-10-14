
var completionSpec = {
    name: "heroku",
    description: "CLI Interface for Heroku.com",
    args: {
    },
    subcommands: [
        {
            name: "addons:attach",
            description: "attach an existing add-on resource to an app",
            options: [
                {
                    name: ["-a", "--app"],
                    description: "app to run command against",
                    args: {
                        shellSuggestions: {
                            cmd: String.raw`node -p "const a = $( heroku apps --json ); const b = a.map(elm => elm.name); console.log(b.join('\n'))"`,
                            // splitOn: "\n",
                            postProcess: function (out) {
                                return out.split("\n").slice(0, -2)
                            }
                        }
                    },
                }
            ]
        },
        {
            name: "logs",
            description: "view server logs",
            options: [
                {
                    name: ["-t", "--tail"],
                    description: "continually stream logs",
                },
                {
                    name: ["-a", "--app"],
                    description: "app to run command against",
                    args: {
                        shellSuggestions: {
                            cmd: String.raw`node -p "const a = $( heroku apps --json ); const b = a.map(elm => elm.name); console.log(b.join('\n'))"`,
                            // splitOn: "\n",
                            postProcess: function (out) {
                                return out.split("\n").slice(0, -2)
                            }
                        }
                    },
                }
            ],
        },
        { name: "access", description: "manage user access to apps" },
        { name: "addons", description: "tools and services for developing, extending, and operating your app" },
        { name: "apps", description: "manage apps on Heroku" },
        { name: "auth", description: "check 2fa status" },
        { name: "authorizations", description: "OAuth authorizations" },
        { name: "autocomplete", description: "display autocomplete installation instructions" },
        { name: "buildpacks", description: "scripts used to compile apps" },
        { name: "certs", description: "a topic for the ssl plugin" },
        { name: "ci", description: "run an application test suite on Heroku" },
        { name: "clients", description: "OAuth clients on the platform" },
        { name: "config", description: "environment variables of apps" },
        { name: "container", description: "Use containers to build and deploy Heroku apps" },
        { name: "domains", description: "custom domains for apps" },
        { name: "drains", description: "forward logs to syslog or HTTPS" },
        { name: "features", description: "add/remove app features" },
        { name: "git", description: "manage local git repository for app" },
        { name: "help", description: "display help for heroku" },
        { name: "keys", description: "add/remove account ssh keys" },
        { name: "labs", description: "add/remove experimental features" },
        { name: "local", description: "run Heroku app locally" },
        { name: "logs", description: "display recent log output" },
        { name: "maintenance", description: "enable/disable access to app" },
        { name: "members", description: "manage organization members" },
        { name: "notifications", description: "display notifications" },
        { name: "orgs", description: "manage organizations" },
        { name: "pg", description: "manage postgresql databases" },
        { name: "pipelines", description: "manage pipelines" },
        { name: "plugins", description: "list installed plugins" },
        { name: "ps", description: "Client tools for Heroku Exec" },
        { name: "psql", description: "open a psql shell to the database" },
        { name: "redis", description: "manage heroku redis instances" },
        { name: "regions", description: "list available regions for deployment" },
        { name: "releases", description: "display the releases for an app" },
        { name: "reviewapps", description: "manage reviewapps in pipelines" },
        { name: "run", description: "run a one-off process inside a Heroku dyno" },
        { name: "sessions", description: "OAuth sessions" },
        { name: "spaces", description: "manage heroku private spaces" },
        { name: "status", description: "status of the Heroku platform" },
        { name: "teams", description: "manage teams" },
        { name: "update", description: "update the Heroku CLI" },
        { name: "webhooks", description: "list webhooks on an app" }
    ]
}

