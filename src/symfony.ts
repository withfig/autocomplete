const completionSpec: Fig.Spec = {
  name: "symfony",
  description: "Symfony Binary",
  subcommands: [
    {
      name: ["book:check-requirements", "book:check"],
      description:
        'Check that you have all the pre-requisites locally to code while reading the "Symfony: The Fast Track" book',
    },
    {
      name: "book:checkout",
      description:
        'Check out a step of the "Symfony: The Fast Track" book repository',
    },
    {
      name: ["cloud:clear-cache", "cloud:clearcache", "cloud:cc"],
      description: "Clear the CLI cache",
    },
    {
      name: "cloud:docs",
      description: "Open the online documentation",
    },
    {
      name: "cloud:multi",
      description: "Execute a command on multiple projects",
    },
    {
      name: "cloud:web",
      description: "Open the Web UI",
    },
    {
      name: "cloud:activity:cancel",
      description: "Cancel an activity",
    },
    {
      name: "cloud:activity:get",
      description: "View detailed information on a single activity",
    },
    {
      name: ["cloud:activity:list", "cloud:activities", "cloud:act"],
      description: "Get a list of activities for an environment or project",
    },
    {
      name: "cloud:activity:log",
      description: "Display the log for an activity",
    },
    {
      name: "cloud:app:config-get",
      description: "View the configuration of an app",
    },
    {
      name: "cloud:app:list",
      description: "List apps in the project",
    },
    {
      name: "cloud:auth:api-token-login",
      description: "Log in to Platform.sh using an API token",
    },
    {
      name: ["cloud:auth:browser-login", "cloud:login"],
      description: "Log in to Platform.sh via a browse",
    },
    {
      name: "cloud:auth:info",
      description: "Display your account information",
    },
    {
      name: ["cloud:auth:logout", "cloud:logout"],
      description: "Log out of Platform.sh",
    },
    {
      name: [
        "cloud:backup:create",
        "cloud:backup",
        "cloud:snapshot:create",
        "cloud:environment:backup",
      ],
      description: "Make a backup of an environment",
    },
    {
      name: [
        "cloud:backup:list",
        "cloud:backups",
        "cloud:snapshots",
        "cloud:snapshot:list",
      ],
      description: "List available backups of an environment",
    },
    {
      name: [
        "cloud:backup:restore",
        "cloud:environment:restore",
        "cloud:snapshot:restore",
      ],
      description: "Restore an environment backup",
    },
    {
      name: "cloud:certificate:add",
      description: "Add an SSL certificate to the project",
    },
    {
      name: "cloud:certificate:delete",
      description: "Delete a certificate from the project",
    },
    {
      name: "cloud:certificate:get",
      description: "View a certificate",
    },
    {
      name: ["cloud:certificate:list", "cloud:certificates", "cloud:certs"],
      description: "List project certificates",
    },
    {
      name: "cloud:commit:get",
      description: "Show commit details",
    },
    {
      name: ["cloud:commit:list", "cloud:commits"],
      description: "List commits",
    },
    {
      name: ["cloud:db:dump", "cloud:sql-dump", "cloud-environment:sql-dump"],
      description: "Create a local dump of the remote database",
    },
    {
      name: "cloud:db:size",
      description: "Estimate the disk usage of a database",
    },
    {
      name: ["cloud:db:sql", "cloud:sql", "cloud:environment:sql"],
      description: "Run SQL on the remote database",
    },
    {
      name: "cloud:domain:add",
      description: "Add a new domain to the project",
    },
    {
      name: "cloud:domain:delete",
      description: "Delete a domain from the project",
    },
    {
      name: "cloud:domain:get",
      description: "Show detailed information for a domain",
    },
    {
      name: ["cloud:domain:list", "cloud:domains"],
      description: "Get a list of all domains",
    },
    {
      name: "cloud:domain:update",
      description: "Update a domain",
    },
    {
      name: "coud:environment:activate",
      description: "Activate an environment",
    },
    {
      name: ["cloud:environment:branch", "cloud:branch"],
      description: "Branch an environment",
    },
    {
      name: ["cloud:environment:checkout", "cloud:checkout"],
      description: "Check out an environment",
    },
    {
      name: ["cloud:environment:debug", "environment:debug"],
      description:
        "Debug an environment by switching Symfony to the debug mode temporarily",
    },
    {
      name: ["cloud:environment:delete", "cloud:environment:deactivate"],
      description: "Delete one or more environments",
    },
    {
      name: ["cloud:environment:http-access", "cloud:httpaccess"],
      description: "Update HTTP access settings for an environment",
    },
    {
      name: ["cloud:environment:info", "cloud:environment:metadata"],
      description: "Read or set properties for an environment",
    },
    {
      name: "cloud:environment:init",
      description: "Initialize an environment from a public Git repository",
    },
    {
      name: ["cloud:environment:list", "cloud:environments", "cloud:env"],
      description: "Get a list of environments",
    },
    {
      name: ["cloud:environment:logs", "cloud:log", "cloud:logs"],
      description: "Read an environment's logs",
    },
    {
      name: ["cloud:environment:merge", "cloud:merge"],
      description: "Merge an environment",
    },
    {
      name: ["cloud:environment:push", "cloud:push", "deploy", "cloud:deploy"],
      description: "Push code to an environment",
    },
    {
      name: ["cloud:environment:redeploy", "cloud:redeploy"],
      description: "Redeploy an environment",
    },
    {
      name: ["cloud:environment:relationships", "cloud:relationships"],
      description: "Show an environment's relationships",
    },
    {
      name: ["cloud:environment:scp", "cloud:scp"],
      description: "Copy files to and from current environment using scp",
    },
    {
      name: ["cloud:environment:ssh", "cloud:ssh"],
      description: "SSH to the current environment",
    },
    {
      name: ["cloud:environment:synchronize", "cloud:sync"],
      description:
        "Synchronize an environment's code and/or data from its parent",
    },
    {
      name: ["cloud:environment:url", "cloud:url"],
      description: "Get the public URLs of an environment",
    },
    {
      name: ["cloud:environment:xdebug", "cloud:xdebug"],
      description: "Open a tunnel to Xdebug on the environment",
    },
    {
      name: "cloud:integration:activity:get",
      description: "View detailed information on a single integration activity",
    },
    {
      name: [
        "cloud:integration:activity:list",
        "cloud:i:act",
        "cloud:integration:activities",
      ],
      description: "Get a list of activities for an integration",
    },
    {
      name: "cloud:integration:activity:log",
      description: "Display the log for an integration activity",
    },
    {
      name: "cloud:integration:add",
      description: "Add an integration to the project",
    },
    {
      name: "cloud:integration:delete",
      description: "Delete an integration from a project",
    },
    {
      name: "cloud:integration:get",
      description: "View details of an integration",
    },
    {
      name: ["cloud:integration:list", "cloud:integrations"],
      description: "View a list of project integration(s)",
    },
    {
      name: "cloud:integration:update",
      description: "Update an integration",
    },
    {
      name: "cloud:integration:validate",
      description: "Validate an existing integration",
    },
    {
      name: "cloud:mount:download",
      description: "Download files from a mount, using rsync",
    },
    {
      name: ["cloud:mount:list", "cloud:mounts"],
      description: "Get a list of mounts",
    },
    {
      name: "cloud:mount:size",
      description: "Check the disk usage of mounts",
    },
    {
      name: "cloud:mount:upload",
      description: "Upload files to a mount, using rsync",
    },
    {
      name: "cloud:organization:billing:address",
      description: "View or change an organization's billing address",
    },
    {
      name: "cloud:organization:billing:profile",
      description: "View or change an organization's billing profile",
    },
    {
      name: "cloud:organization:create",
      description: "Create a new organization",
    },
    {
      name: "cloud:organization:delete",
      description: "Delete an organization",
    },
    {
      name: "cloud:organization:info",
      description: "View or change organization details",
    },
    {
      name: ["cloud:organization:list", "cloud:orgs", "cloud:organizations"],
      description: "List organizations",
    },
    {
      name: [
        "cloud:organization:subscription:list",
        "cloud:organization:subscriptions",
      ],
      description: "List subscriptions within an organization",
    },
    {
      name: "cloud:organization:user:add",
      description: "Invite a user to an organization",
    },
    {
      name: "cloud:organization:user:delete",
      description: "Remove a user from an organization",
    },
    {
      name: "cloud:organization:user:get",
      description: "View an organization user",
    },
    {
      name: ["cloud:organization:user:list", "cloud:organization:users"],
      description: "List organization users",
    },
    {
      name: "cloud:organization:user:update",
      description: "Update an organization user",
    },
    {
      name: "cloud:project:clear-build-cache",
      description: "Clear a project's build cache",
    },
    {
      name: ["cloud:project:create", "cloud:create"],
      description: "Create a new project",
    },
    {
      name: "cloud:project:delete",
      description: "Delete a project",
    },
    {
      name: ["cloud:project:get", "cloud:get"],
      description: "Clone a project locally",
    },
    {
      name: ["cloud:project:info", "cloud:project:metadata"],
      description: "Read or set properties for a project",
    },
    {
      name: ["cloud:project:list", "cloud:projects", "cloud:pro"],
      description: "Get a list of all active projects",
    },
    {
      name: "cloud:project:set-remote",
      description: "Set the remote project for the current Git repository",
    },
    {
      name: "cloud:repo:cat",
      description: "Read a file in the project repository",
    },
    {
      name: "cloud:repo:ls",
      description: "List files in the project repository",
    },
    {
      name: ["cloud:repo:read", "cloud:read"],
      description: "Read a directory or file in the project repository",
    },
    {
      name: "cloud:route:get",
      description: "View detailed information about a route",
    },
    {
      name: ["cloud:route:list", "cloud:routes", "cloud:environment:routes"],
      description: "List all routes for an environment",
    },
    {
      name: ["cloud:service:list", "cloud:services"],
      description: "List services in the project",
    },
    {
      name: ["cloud:service:mongo:dump", "cloud:mongodump"],
      description: "Create a binary archive dump of data from MongoDB",
    },
    {
      name: ["cloud:service:mongo:export", "cloud:mongoexport"],
      description: "Export data from MongoDB",
    },
    {
      name: ["cloud:service:mongo:restore", "cloud:mongorestore"],
      description: "Restore a binary archive dump of data into MongoDB",
    },
    {
      name: ["cloud:service:mongo:shell", "cloud:mongo"],
      description: "Use the MongoDB shell",
    },
    {
      name: ["cloud:service:redis-cli", "cloud:redis"],
      description: "Access the Redis CLI",
    },
    {
      name: "cloud:ssh-cert:load",
      description: "Generate an SSH certificate",
    },
    {
      name: "cloud:ssh-key:add",
      description: "Add a new SSH key",
    },
    {
      name: "cloud:ssh-key:delete",
      description: "Delete an SSH key",
    },
    {
      name: ["cloud:ssh-key:list", "cloud:ssh-keys"],
      description: "Get a list of SSH keys in your accountt",
    },
    {
      name: "cloud:subscription:info",
      description: "Read or modify subscription properties",
    },
    {
      name: "cloud:tunnel:close",
      description: "Close SSH tunnels",
    },
    {
      name: "cloud:tunnel:info",
      description: "View relationship info for SSH tunnels",
    },
    {
      name: ["cloud:tunnel:list", "cloud:tunnels"],
      description: "List SSH tunnels",
    },
    {
      name: "cloud:tunnel:open",
      description: "Open SSH tunnels to an app's relationships",
    },
    {
      name: "cloud:tunnel:single",
      description: "Open a single SSH tunnel to an app relationship",
    },
    {
      name: "cloud:user:add",
      description: "Add a user to the project",
    },
    {
      name: "cloud:user:delete",
      description: "Delete a user from the project",
    },
    {
      name: ["cloud:user:get", "cloud:vget"],
      description: "View a user's role(s)",
    },
    {
      name: ["cloud:user:list", "cloud:variables", "cloud:var"],
      description: "List project users",
    },
    {
      name: "cloud:user:update",
      description: "Update user role(s) on a project",
    },
    {
      name: "cloud:variable:create",
      description: "Create a variable",
    },
    {
      name: "cloud:variable:delete",
      description: "Delete a variable",
    },
    {
      name: "cloud:variable:get",
      description: "View a variable",
    },
    {
      name: "cloud:variable:list",
      description: "List variables",
    },
    {
      name: "cloud:variable:update",
      description: "Update a variable",
    },
    {
      name: ["cloud:worker:list", "cloud:workers"],
      description: "Get a list of all deployed workers",
    },
    {
      name: ["local:check:requirements", "check-requirements", "check:req"],
      description:
        "Checks requirements for running Symfony and gives useful recommendations to optimize PHP for Symfony",
    },
    {
      name: [
        "local:check:security",
        "security:check",
        "check:security",
        "local:security:check",
      ],
      description: "Check security issues in project dependencies",
    },
    {
      name: ["local:new", "new"],
      description: "Create a new Symfony project",
    },
    {
      name: "local:php:list",
      description: "List locally available PHP versions",
    },
    {
      name: "local:php:refresh",
      description: "Auto-discover the list of available PHP version",
    },
    {
      name: ["local:proxy:domain:attach", "proxy:domain:attach"],
      description: "Attach a local domain for the proxy",
    },
    {
      name: ["local:proxy:domain:detach", "proxy:domain:detach"],
      description: "Detach domains from the proxy",
    },
    {
      name: ["local:proxy:start", "proxy:start"],
      description: "Start the local proxy server (local domains support)",
    },
    {
      name: ["local:proxy:status", "proxy:status"],
      description: "Get the local proxy server status",
    },
    {
      name: ["local:proxy:stop", "proxy:stop"],
      description: "Stop the local proxy server",
    },
    {
      name: ["local:run", "run"],
      description:
        "Run a program with environment variables set depending on the current context",
    },
    {
      name: ["local:server:ca:install", "server:ca:install"],
      description: "Create a local Certificate Authority for serving HTTPS",
    },
    {
      name: ["local:server:ca:uninstall", "server:ca:uninstall"],
      description: "Uninstall the local Certificate Authority",
    },
    {
      name: ["local:server:list", "server:list"],
      description: "List all configured local web servers",
    },
    {
      name: ["local:server:log", "server:log"],
      description: "Display local web server logs",
    },
    {
      name: ["local:server:prod", "server:prod"],
      description: "Switch a project to use Symfony's production environment",
    },
    {
      name: ["local:server:start", "server:start", "serve"],
      description: "Run a local web server",
    },
    {
      name: ["local:server:status", "server:status"],
      description: "Get the local web server status",
    },
    {
      name: ["local:server:stop", "server:stop"],
      description: "Stop the local web server",
    },
    {
      name: ["local:var:expose-from-tunnel", "var:expose-from-tunnel"],
      description: "Expose tunnel service environment variables locally",
    },
    {
      name: "open:local",
      description: "Open the local project in a browser",
    },
    {
      name: "open:local:rabbitmq",
      description:
        "Open the local project RabbitMQ web management interface in a browser",
    },
    {
      name: "open:local:webmail",
      description:
        "Open the local project mail catcher web interface in a browser",
    },
    {
      name: ["project:init", "init"],
      description: "Initialize a new project using templates",
    },
    {
      name: ["self:help", "help", "list"],
      description: "Display help for a command or a category of commands",
    },
    {
      name: ["self:version", "version"],
      description: "Display the application version",
    },
    {
      name: "var:export",
      description:
        "Export environment variables depending on the current context",
    },
    {
      name: "composer",
      description: "Runs Composer without memory limit",
    },
    {
      name: "php",
      description: "Runs the binary using the configured PHP version",
    },
    {
      name: "pecl",
      description: "Runs the binary using the configured PHP version",
    },
    {
      name: "pear",
      description: "Runs the binary using the configured PHP version",
    },
    {
      name: "php-fdp",
      description: "Runs the binary using the configured PHP version",
    },
    {
      name: "php-cgi",
      description: "Runs the binary using the configured PHP version",
    },
    {
      name: "php-config",
      description: "Runs the binary using the configured PHP version",
    },
    {
      name: "phpdbg",
      description: "Runs the binary using the configured PHP version",
    },
    {
      name: "phpize",
      description: "Runs the binary using the configured PHP version",
    },
    {
      name: "console",
      description: "Runs the Symfony Console (bin/console) for current project",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
    {
      name: ["-q", "--quiet"],
      description: "Do not output any message",
    },
    {
      name: "--no-ansi",
      description: "Disable ANSI output",
    },
    {
      name: "--ansi",
      description: "Force ANSI output",
    },
    {
      name: "--no-interaction",
      description: "Do not ask any interactive question",
    },
    {
      name: ["-v", "--verbose"],
      isRepeatable: 3,
      description:
        "Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug",
    },
    {
      name: "-V",
      description: "Print the version",
    },
  ],
};

export default completionSpec;
