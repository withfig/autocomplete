const completionSpec: Fig.Spec = {
  name: "flyctl",
  description: "The Fly CLI",
  subcommands: [
    {
      name: "agent",
      description:
        "Commands that manage the Fly agent, a background process that manages flyctl wireguard connections",
      subcommands: [
        { name: "ping", description: "Ping the Fly agent" },
        { name: "restart", description: "Restart the Fly agent" },
        {
          name: ["daemon-start", "run"],
          description: "Run the Fly agent in the foreground",
        },
        { name: "start", description: "Start the Fly agent" },
        { name: "stop", description: "Stop the Fly agent" },
      ],
    },
    {
      name: "apps",
      description: "Manage apps",
      subcommands: [
        {
          name: "create",
          description: "Create a new application",
          options: [
            {
              name: "--generate-name",
              description: "Generate a name for the app",
            },
            {
              name: "--name",
              description: "The app name to use",
              args: { name: "name" },
            },
            {
              name: "--network",
              description: "Specify custom network id",
              args: { name: "network" },
            },
            {
              name: ["--org", "-o"],
              description: "The organization to operate on",
              args: { name: "org" },
            },
          ],
        },
        {
          name: "destroy",
          description: "Permanently destroys an app",
          options: [
            { name: ["--yes", "-y"], description: "Accept all confirmations" },
          ],
        },
        { name: "list", description: "List applications" },
        {
          name: "move",
          description: "Move an app to another organization",
          options: [
            {
              name: ["--org", "-o"],
              description: "The organization to operate on",
              args: { name: "org" },
            },
            { name: ["--yes", "-y"], description: "Accept all confirmations" },
          ],
        },
        {
          name: "open",
          description: "Open browser to current deployed application",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
          ],
        },
        {
          name: "releases",
          description: "List app releases",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
            {
              name: "--image",
              description: "Display the Docker image reference of the release",
            },
          ],
        },
        { name: "restart", description: "Restart an application" },
      ],
    },
    {
      name: "auth",
      description: "Manage authentication",
      subcommands: [
        { name: "docker", description: "Authenticate docker" },
        {
          name: "login",
          description: "Log in a user",
          options: [
            {
              name: "--email",
              description: "Login email",
              args: { name: "email" },
            },
            {
              name: ["--interactive", "-i"],
              description: "Log in with an email and password interactively",
            },
            {
              name: "--otp",
              description: "One time password",
              args: { name: "otp" },
            },
            {
              name: "--password",
              description: "Login password",
              args: { name: "password" },
            },
          ],
        },
        {
          name: "logout",
          description: "Logs out the currently logged in user",
        },
        { name: "signup", description: "Create a new fly account" },
        { name: "token", description: "Show the current auth token" },
        {
          name: "whoami",
          description:
            "Displays the users email address/service identity currently authenticated and in use",
        },
      ],
    },
    {
      name: "autoscale",
      description: "Autoscaling app resources",
      subcommands: [
        {
          name: "balanced",
          description:
            "Configure a traffic balanced app with params (min=int max=int)",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "disable",
          description: "Disable autoscaling",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "set",
          description: "Set current models autoscaling parameters",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "show",
          description: "Show current autoscaling configuration",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "standard",
          description:
            "Configure a standard balanced app with params (min=int max=int)",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--app", "-a"],
          description: "App name to operate on",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to an app config file or directory containing one",
          args: { name: "config", default: "./fly.toml" },
        },
      ],
    },
    {
      name: "builds",
      description: "Manage application builds",
      subcommands: [
        {
          name: "list",
          description: "List builds",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
          ],
        },
      ],
    },
    {
      name: "certs",
      description: "Manage certificates",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Add a certificate for an app",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "check",
          description: "Checks DNS configuration",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "list",
          description: "List certificates for an app",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: ["delete", "remove"],
          description: "Removes a certificate from an app",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            { name: ["--yes", "-y"], description: "Accept all confirmations" },
          ],
        },
        {
          name: "show",
          description: "Shows certificate information",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--app", "-a"],
          description: "App name to operate on",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to an app config file or directory containing one",
          args: { name: "config", default: "./fly.toml" },
        },
      ],
    },
    {
      name: "checks",
      description: "Manage health checks",
      subcommands: [
        {
          name: "handlers",
          description: "Manage health check handlers",
          subcommands: [
            {
              name: "create",
              description: "Create a health check handler",
              options: [
                {
                  name: ["--organization", "-o"],
                  description: "The organization to add the handler to",
                  args: { name: "organization" },
                },
                {
                  name: "--type",
                  description:
                    "The type of handler to create, can be slack or pagerduty",
                  args: { name: "type" },
                },
              ],
            },
            { name: "delete", description: "Delete a health check handler" },
            { name: "list", description: "List health check handlers" },
          ],
        },
        {
          name: "list",
          description: "List app health checks",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: "--check-name",
              description: "Filter checks by name",
              args: { name: "check-name" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: "config",
      description: "Manage an app's configuration",
      subcommands: [
        {
          name: "display",
          description: "Display an app's configuration",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "env",
          description: "Display an app's runtime environment variables",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "save",
          description: "Save an app's config file",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "validate",
          description: "Validate an app's config file",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--app", "-a"],
          description: "App name to operate on",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to an app config file or directory containing one",
          args: { name: "config", default: "./fly.toml" },
        },
      ],
    },
    {
      name: "create",
      description: "Create a new application",
      options: [
        {
          name: "--generate-name",
          description: "Generate a name for the app",
        },
        {
          name: "--name",
          description: "The app name to use",
          args: { name: "name" },
        },
        {
          name: "--network",
          description: "Specify custom network id",
          args: { name: "network" },
        },
        {
          name: ["--org", "-o"],
          description: "The organization to operate on",
          args: { name: "org" },
        },
      ],
    },
    { name: "curl", description: "Run a performance test against a URL" },
    {
      name: ["dash", "dashboard"],
      description: "Open web browser on Fly Web UI for this app",
      subcommands: [
        {
          name: "metrics",
          description: "Open web browser on Fly Web UI for this app's metrics",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--app", "-a"],
          description: "App name to operate on",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to an app config file or directory containing one",
          args: { name: "config", default: "./fly.toml" },
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy Fly applications",
      options: [
        {
          name: ["--app", "-a"],
          description: "Application name",
          args: { name: "app" },
        },
        {
          name: "--build-arg",
          description:
            "Set of build time variables in the form of NAME=VALUE pairs. Can be specified multiple times",
          args: { name: "build-arg" },
        },
        { name: "--build-only", description: "Build but do not deploy" },
        {
          name: "--build-target",
          description:
            "Set the target build stage to build if the Dockerfile has more than one stage",
          args: { name: "build-target" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to application configuration file",
          args: { name: "config" },
        },
        {
          name: "--detach",
          description:
            "Return immediately instead of monitoring deployment progress",
        },
        {
          name: "--dockerfile",
          description:
            "Path to a Dockerfile. Defaults to the Dockerfile in the working directory",
          args: { name: "dockerfile" },
        },
        {
          name: ["--env", "-e"],
          description:
            "Set of environment variables in the form of NAME=VALUE pairs. Can be specified multiple times",
          args: { name: "env" },
        },
        {
          name: ["--image", "-i"],
          description: "The image tag or ID to deploy",
          args: { name: "image" },
        },
        {
          name: "--image-label",
          description:
            'Image label to use when tagging and pushing to the fly registry. Defaults to "deployment-{timestamp}"',
          args: { name: "image-label" },
        },
        {
          name: "--local-only",
          description:
            "Only perform builds locally using the local docker daemon",
        },
        { name: "--nix", description: "Build with Nix" },
        {
          name: "--no-cache",
          description: "Do not use the build cache when building the image",
        },
        { name: "--now", description: "Deploy now without confirmation" },
        {
          name: "--push",
          description: "Push image to registry after build is complete",
        },
        {
          name: ["--region", "-r"],
          description: "The region to operate on",
          args: { name: "region" },
        },
        {
          name: "--remote-only",
          description:
            "Perform builds on a remote builder instance instead of using the local docker daemon",
        },
        {
          name: "--strategy",
          description:
            "The strategy for replacing running instances. Options are canary, rolling, bluegreen, or immediate. Default is canary, or rolling when max-per-region is set",
          args: { name: "strategy" },
        },
      ],
    },
    {
      name: "destroy",
      description: "Permanently destroys an app",
      options: [
        { name: ["--yes", "-y"], description: "Accept all confirmations" },
      ],
    },
    {
      name: "dig",
      description: "Make DNS requests against Fly.io's internal DNS server",
      options: [
        {
          name: ["--app", "-a"],
          description: "Application name",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to application configuration file",
          args: { name: "config" },
        },
        {
          name: ["--org", "-o"],
          description: "The organization to operate on",
          args: { name: "org" },
        },
        {
          name: ["--short", "-s"],
          description: "Just print the answers, not DNS record details",
        },
      ],
    },
    {
      name: "dns-records",
      description: "Manage DNS records",
      subcommands: [
        {
          name: "export",
          description: "Export DNS records",
          options: [{ name: "--overwrite", description: "" }],
        },
        { name: "import", description: "Import DNS records" },
        { name: "list", description: "List DNS records" },
      ],
    },
    { name: "docs", description: "View Fly documentation" },
    {
      name: "doctor",
      description:
        "The DOCTOR command allows you to debug your Fly environment",
      subcommands: [
        {
          name: "diag",
          description:
            "Send diagnostic information about your applications back to Fly.io",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
            {
              name: "--force",
              description:
                "Send diagnostics even if we can't find your local Fly.io app",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--app", "-a"],
          description: "Application name",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to application configuration file",
          args: { name: "config" },
        },
      ],
    },
    {
      name: "domains",
      description: "Manage domains",
      subcommands: [
        { name: "add", description: "Add a domain" },
        { name: "list", description: "List domains" },
        { name: "register", description: "Register a domain" },
        { name: "show", description: "Show domain" },
      ],
    },
    {
      name: "history",
      description: "List an app's change history",
      options: [
        {
          name: ["--app", "-a"],
          description: "Application name",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to application configuration file",
          args: { name: "config" },
        },
      ],
    },
    {
      name: ["img", "image"],
      description: "Manage app image",
      subcommands: [
        {
          name: "show",
          description: "Show image details",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Updates the app's image to the latest available version. (Fly Postgres only)",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
            {
              name: "--detach",
              description:
                "Return immediately instead of monitoring update progress",
            },
            { name: ["--yes", "-y"], description: "Accept all confirmations" },
          ],
        },
      ],
    },
    {
      name: "info",
      description: "Show detailed app information",
      options: [
        {
          name: ["--app", "-a"],
          description: "App name to operate on",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to an app config file or directory containing one",
          args: { name: "config", default: "./fly.toml" },
        },
        { name: "--host", description: "Returns just the hostname" },
        { name: ["--name", "-n"], description: "Returns just the appname" },
      ],
    },
    {
      name: "ips",
      description: "Manage IP addresses for apps",
      subcommands: [
        {
          name: "allocate-v4",
          description: "Allocate an IPv4 address",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--region",
              description: "The region where the address should be allocated",
              args: { name: "region" },
            },
          ],
        },
        {
          name: "allocate-v6",
          description: "Allocate an IPv6 address",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--region",
              description: "The region where the address should be allocated",
              args: { name: "region" },
            },
          ],
        },
        {
          name: "list",
          description: "List allocated IP addresses",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "private",
          description: "List instances private IP addresses",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "release",
          description: "Release an IP address",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--app", "-a"],
          description: "App name to operate on",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to an app config file or directory containing one",
          args: { name: "config", default: "./fly.toml" },
        },
      ],
    },
    {
      name: "launch",
      description: "Launch a new app",
      options: [
        {
          name: "--copy-config",
          description:
            "Use the configuration file if present without prompting",
        },
        {
          name: "--dockerfile",
          description:
            "Path to a Dockerfile. Defaults to the Dockerfile in the working directory",
          args: { name: "dockerfile" },
        },
        {
          name: "--generate-name",
          description: "Always generate a name for the app",
        },
        {
          name: "--image",
          description: "The image to launch",
          args: { name: "image" },
        },
        {
          name: "--name",
          description: "The name of the new app",
          args: { name: "name" },
        },
        { name: "--no-deploy", description: "Do not prompt for deployment" },
        { name: "--now", description: "Deploy now without confirmation" },
        {
          name: "--org",
          description: "The organization that will own the app",
          args: { name: "org" },
        },
        {
          name: "--path",
          description:
            "Path to app code and where a fly.toml file will be saved",
          args: { name: "path", default: "." },
        },
        {
          name: "--region",
          description: "The region to launch the new app in",
          args: { name: "region" },
        },
        {
          name: "--remote-only",
          description:
            "Perform builds remotely without using the local docker daemon",
        },
      ],
    },
    {
      name: ["ls", "list"],
      description: "Lists your Fly resources",
      subcommands: [
        {
          name: "apps",
          description: "Lists all your apps",
          options: [
            { name: ["--exact", "-e"], description: "Show exact times" },
            {
              name: ["--org", "-o"],
              description: "Show only apps in this organisation",
              args: { name: "org" },
            },
            {
              name: "--sort",
              description: "Sort by name, created",
              args: { name: "sort", default: "name" },
            },
            {
              name: ["--status", "-s"],
              description: "Show only apps with this status",
              args: { name: "status" },
            },
          ],
        },
        { name: "orgs", description: "List all your organizations" },
      ],
    },
    {
      name: "logs",
      description: "View app logs",
      options: [
        {
          name: ["--app", "-a"],
          description: "Application name",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to application configuration file",
          args: { name: "config" },
        },
        {
          name: ["--instance", "-i"],
          description: "Filter by instance ID",
          args: { name: "instance" },
        },
        {
          name: ["--region", "-r"],
          description: "The region to operate on",
          args: { name: "region" },
        },
      ],
    },
    {
      name: ["machines", "m", "machine"],
      description: "Commands that manage machines",
      subcommands: [
        {
          name: "clone",
          description: "Clones a Fly Machine",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
            {
              name: ["--detach", "-d"],
              description: "Detach from the machine's logs",
            },
            {
              name: ["--name", "-n"],
              description: "The name of the new machine",
              args: { name: "name" },
            },
            {
              name: ["--org", "-o"],
              description: "The organization to operate on",
              args: { name: "org" },
            },
            {
              name: ["--region", "-r"],
              description: "The region to operate on",
              args: { name: "region" },
            },
          ],
        },
        {
          name: "kill",
          description: "Kill (SIGKILL) a Fly machine",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
          ],
        },
        {
          name: "list",
          description: "List Fly machines",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
            { name: ["--quiet", "-q"], description: "Only list machine ids" },
          ],
        },
        {
          name: ["rm", "remove"],
          description: "Remove a Fly machine",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
            {
              name: ["--force", "-f"],
              description: "Force kill machine if it's running",
            },
          ],
        },
        {
          name: "run",
          description: "Run a machine",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: "--build-arg",
              description:
                "Set of build time variables in the form of NAME=VALUE pairs. Can be specified multiple times",
              args: { name: "build-arg" },
            },
            {
              name: "--build-local-only",
              description:
                "Only perform builds locally using the local docker daemon",
            },
            { name: "--build-only", description: "" },
            {
              name: "--build-remote-only",
              description:
                "Perform builds remotely without using the local docker daemon",
            },
            {
              name: "--build-target",
              description:
                "Set the target build stage to build if the Dockerfile has more than one stage",
              args: { name: "build-target" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
            {
              name: "--cpu-kind",
              description: "Kind of CPU to use (shared, dedicated)",
              args: { name: "cpu-kind" },
            },
            {
              name: "--cpus",
              description: "Number of CPUs",
              args: { name: "cpus", default: "0" },
            },
            {
              name: ["--detach", "-d"],
              description: "Detach from the machine's logs",
            },
            {
              name: "--dockerfile",
              description:
                "Path to a Dockerfile. Defaults to the Dockerfile in the working directory",
              args: { name: "dockerfile" },
            },
            {
              name: "--entrypoint",
              description: "ENTRYPOINT replacement",
              args: { name: "entrypoint" },
            },
            {
              name: ["--env", "-e"],
              description:
                "Set of environment variables in the form of NAME=VALUE pairs. Can be specified multiple times",
              args: { name: "env" },
            },
            {
              name: "--id",
              description: "Machine ID, if previously known",
              args: { name: "id" },
            },
            {
              name: "--image-label",
              description:
                'Image label to use when tagging and pushing to the fly registry. Defaults to "deployment-{timestamp}"',
              args: { name: "image-label" },
            },
            {
              name: "--memory",
              description: "Memory (in megabytes) to attribute to the machine",
              args: { name: "memory", default: "0" },
            },
            {
              name: ["--name", "-n"],
              description: "Machine name, will be generated if missing",
              args: { name: "name" },
            },
            {
              name: "--no-build-cache",
              description: "Do not use the cache when building the image",
            },
            {
              name: "--org",
              description: "The organization that will own the app",
              args: { name: "org" },
            },
            {
              name: ["--port", "-p"],
              description:
                "Exposed port mappings (format: edgePort[:machinePort]/[protocol[:handler]])",
              args: { name: "port" },
            },
            {
              name: ["--region", "-r"],
              description: "The region to operate on",
              args: { name: "region" },
            },
            {
              name: ["--size", "-s"],
              description: "Preset guest cpu and memory for a machine",
              args: { name: "size" },
            },
            {
              name: ["--volume", "-v"],
              description:
                "Volumes to mount in the form of <volume_id_or_name>:/path/inside/machine[:<options>]",
              args: { name: "volume" },
            },
          ],
        },
        {
          name: "start",
          description: "Start a Fly machine",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
          ],
        },
        {
          name: "status",
          description: "Show current status of a running machine",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
          ],
        },
        {
          name: "stop",
          description: "Stop a Fly machine",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
            {
              name: ["--signal", "-s"],
              description: "Signal to stop the machine with (default: SIGINT)",
              args: { name: "signal" },
            },
            {
              name: "--time",
              description: "Seconds to wait before killing the machine",
              args: { name: "time", default: "0" },
            },
          ],
        },
      ],
    },
    {
      name: "monitor",
      description: "Monitor currently running application deployments",
      options: [
        {
          name: ["--app", "-a"],
          description: "Application name",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to application configuration file",
          args: { name: "config" },
        },
      ],
    },
    {
      name: "move",
      description: "Move an app to another organization",
      options: [
        {
          name: ["--org", "-o"],
          description: "The organization to operate on",
          args: { name: "org" },
        },
        { name: ["--yes", "-y"], description: "Accept all confirmations" },
      ],
    },
    {
      name: "open",
      description: "Open browser to current deployed application",
      options: [
        {
          name: ["--app", "-a"],
          description: "Application name",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to application configuration file",
          args: { name: "config" },
        },
      ],
    },
    {
      name: "orgs",
      description: "Commands for managing Fly organizations",
      subcommands: [
        {
          name: "builder",
          description: "Manage remote builder",
          subcommands: [
            {
              name: "show",
              description:
                "Show details about an organization's remote builder image",
            },
            {
              name: "update",
              description: "Update an organization's remote builder image",
            },
          ],
        },
        { name: "create", description: "Create an organization" },
        {
          name: "delete",
          description: "Delete an organization",
          options: [
            { name: ["--yes", "-y"], description: "Accept all confirmations" },
          ],
        },
        {
          name: "invite",
          description: "Invite user (by email) to organization",
        },
        { name: "list", description: "Lists organizations for current user" },
        { name: "remove", description: "Remove a user from an organization" },
        {
          name: "show",
          description: "Show information about an organization",
        },
      ],
    },
    {
      name: "ping",
      description: "Test connectivity with ICMP ping messages",
      options: [
        {
          name: ["--app", "-a"],
          description: "Application name",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to application configuration file",
          args: { name: "config" },
        },
        {
          name: ["--count", "-n"],
          description: "Number of probes to send (0=indefinite)",
          args: { name: "count", default: "0" },
        },
        {
          name: ["--interval", "-i"],
          description: "Interval between ping probes",
          args: { name: "interval", default: "1s" },
        },
        {
          name: ["--org", "-o"],
          description: "The organization to operate on",
          args: { name: "org" },
        },
        {
          name: ["--size", "-s"],
          description: "Size of probe to send (not including headers)",
          args: { name: "size", default: "12" },
        },
      ],
    },
    {
      name: "platform",
      description: "Fly platform information",
      subcommands: [
        { name: "regions", description: "List regions" },
        { name: "status", description: "Show current platform status" },
        { name: "vm-sizes", description: "List VM Sizes" },
      ],
    },
    {
      name: ["pg", "postgres"],
      description: "Manage postgres clusters",
      subcommands: [
        {
          name: "attach",
          description: "Attach a postgres cluster to an app",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--database-name",
              description:
                "Database to use, defaults to a new database with the same name as the app",
              args: { name: "database-name" },
            },
            {
              name: "--database-user",
              description:
                "The database user to create, defaults to creating a user with the same name as the consuming app",
              args: { name: "database-user" },
            },
            {
              name: "--postgres-app",
              description: "The postgres cluster to attach to the app",
              args: { name: "postgres-app" },
            },
            {
              name: "--variable-name",
              description:
                "The env variable name that will be added to the app. Defaults to DATABASE_URL",
              args: { name: "variable-name" },
            },
          ],
        },
        {
          name: "connect",
          description: "Connect to the Postgres console",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--database",
              description: "The postgres database to connect to",
              args: { name: "database" },
            },
            {
              name: "--password",
              description: "The postgres user password",
              args: { name: "password" },
            },
            {
              name: "--user",
              description: "The postgres user to connect with",
              args: { name: "user" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a postgres cluster",
          options: [
            {
              name: "--image-ref",
              description: "",
              hidden: true,
              args: { name: "image-ref", default: "flyio/postgres" },
            },
            {
              name: "--initial-cluster-size",
              description: "The size of the initial postgres cluster",
              args: { name: "initial-cluster-size" },
            },
            {
              name: "--name",
              description: "The name of the new app",
              args: { name: "name" },
            },
            {
              name: "--organization",
              description: "The organization that will own the app",
              args: { name: "organization" },
            },
            {
              name: "--password",
              description:
                "The superuser password. one will be generated for you if you leave this blank",
              args: { name: "password" },
            },
            {
              name: "--region",
              description: "The region to launch the new app in",
              args: { name: "region" },
            },
            {
              name: "--snapshot-id",
              description:
                "Creates the volume with the contents of the snapshot",
              args: { name: "snapshot-id" },
            },
            {
              name: "--vm-size",
              description: "The size of the VM",
              args: { name: "vm-size" },
            },
            {
              name: "--volume-size",
              description: "The size in GB for volumes",
              args: { name: "volume-size" },
            },
          ],
        },
        {
          name: "db",
          description: "Manage databases in a cluster",
          subcommands: [
            {
              name: "list",
              description: "List databases in a cluster",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "App name to operate on",
                  args: { name: "app" },
                },
                {
                  name: ["--config", "-c"],
                  description:
                    "Path to an app config file or directory containing one",
                  args: { name: "config", default: "./fly.toml" },
                },
              ],
            },
          ],
        },
        {
          name: "detach",
          description: "Detach a postgres cluster from an app",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--postgres-app",
              description: "The postgres cluster to detach from the app",
              args: { name: "postgres-app" },
            },
          ],
        },
        { name: "list", description: "List postgres clusters" },
        {
          name: "users",
          description: "Manage users in a cluster",
          subcommands: [
            {
              name: "list",
              description: "List users in a cluster",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "App name to operate on",
                  args: { name: "app" },
                },
                {
                  name: ["--config", "-c"],
                  description:
                    "Path to an app config file or directory containing one",
                  args: { name: "config", default: "./fly.toml" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "proxy",
      description: "Proxies connections to a fly VM",
      options: [
        {
          name: ["--app", "-a"],
          description: "Application name",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to application configuration file",
          args: { name: "config" },
        },
        {
          name: ["--org", "-o"],
          description: "The organization to operate on",
          args: { name: "org" },
        },
        {
          name: ["--select", "-s"],
          description:
            "Prompt to select from available instances from the current application",
        },
      ],
    },
    {
      name: "regions",
      description: "Manage regions",
      subcommands: [
        {
          name: "add",
          description: "Allow the app to run in the provided regions",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--group",
              description: "The process group to add the region to",
              args: { name: "group" },
            },
          ],
        },
        {
          name: "backup",
          description: "Sets the backup region pool with provided regions",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "list",
          description: "Shows the list of regions the app is allowed to run in",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "remove",
          description: "Prevent the app from running in the provided regions",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--group",
              description: "The process group to remove the region from",
              args: { name: "group" },
            },
          ],
        },
        {
          name: "set",
          description: "Sets the region pool with provided regions",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--group",
              description: "The process group to set regions for",
              args: { name: "group" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--app", "-a"],
          description: "App name to operate on",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to an app config file or directory containing one",
          args: { name: "config", default: "./fly.toml" },
        },
      ],
    },
    {
      name: "releases",
      description: "List app releases",
      options: [
        {
          name: ["--app", "-a"],
          description: "Application name",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to application configuration file",
          args: { name: "config" },
        },
        {
          name: "--image",
          description: "Display the Docker image reference of the release",
        },
      ],
    },
    { name: "restart", description: "Restart an application" },
    { name: "resume", description: "Resume an application" },
    {
      name: "scale",
      description: "Scale app resources",
      subcommands: [
        {
          name: "count",
          description: "Change an app's VM count to the given value",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--max-per-region",
              description: "Max number of VMs per region",
              args: { name: "max-per-region", default: "-1" },
            },
          ],
        },
        {
          name: "memory",
          description: "Set VM memory",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--group",
              description: "The process group to apply the memory size to",
              args: { name: "group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show current resources",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "vm",
          description:
            "Change an app's VM to a named size (eg. shared-cpu-1x, dedicated-cpu-1x, dedicated-cpu-2x...)",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--group",
              description: "The process group to apply the VM size to",
              args: { name: "group" },
            },
            {
              name: "--memory",
              description: "Memory in MB for the VM",
              args: { name: "memory", default: "0" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--app", "-a"],
          description: "App name to operate on",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to an app config file or directory containing one",
          args: { name: "config", default: "./fly.toml" },
        },
      ],
    },
    {
      name: "secrets",
      description: "Manage app secrets",
      subcommands: [
        {
          name: "import",
          description: "Read secrets in name=value from stdin",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--detach",
              description:
                "Return immediately instead of monitoring deployment progress",
            },
          ],
        },
        {
          name: "list",
          description: "Lists the secrets available to the app",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "set",
          description: "Set one or more encrypted secrets for an app",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--detach",
              description:
                "Return immediately instead of monitoring deployment progress",
            },
          ],
        },
        {
          name: "unset",
          description: "Remove encrypted secrets from an app",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: "--detach",
              description:
                "Return immediately instead of monitoring deployment progress",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--app", "-a"],
          description: "App name to operate on",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to an app config file or directory containing one",
          args: { name: "config", default: "./fly.toml" },
        },
      ],
    },
    {
      name: "ssh",
      description: "Commands that manage SSH credentials",
      subcommands: [
        {
          name: "console",
          description: "Connect to a running instance of the current app",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--command", "-C"],
              description: "Command to run on SSH session",
              args: { name: "command" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
            {
              name: ["--probe", "-p"],
              description: "Test WireGuard connection after establishing",
            },
            {
              name: ["--region", "-r"],
              description: "Region to create WireGuard connection in",
              args: { name: "region" },
            },
            {
              name: ["--select", "-s"],
              description: "Select available instances",
            },
          ],
        },
        {
          name: "establish",
          description: "Create a root SSH certificate for your organization",
        },
        {
          name: "issue",
          description: "Issue a new SSH credential",
          options: [
            { name: "--agent", description: "Add key to SSH agent" },
            {
              name: ["--dotssh", "-d"],
              description: "Store keys in ~/.ssh, like normal keys",
            },
            {
              name: "--hours",
              description: "Expiration, in hours (<72)",
              args: { name: "hours", default: "24" },
            },
            {
              name: ["--overwrite", "-o"],
              description:
                "Overwrite existing SSH keys in same location, if we generated them",
            },
            {
              name: ["--username", "-u"],
              description: "Unix username for SSH cert",
              args: { name: "username" },
            },
          ],
        },
        { name: "log", description: "Log of all issued certs" },
      ],
    },
    {
      name: "status",
      description: "Show app status",
      subcommands: [
        {
          name: "instance",
          description: "Show instance status",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
          ],
        },
      ],
      options: [
        { name: "--all", description: "Show completed instances" },
        {
          name: ["--app", "-a"],
          description: "Application name",
          args: { name: "app" },
        },
        {
          name: ["--config", "-c"],
          description: "Path to application configuration file",
          args: { name: "config" },
        },
        {
          name: "--deployment",
          description: "Always show deployment status",
        },
        {
          name: "--rate",
          description: "Refresh Rate for --watch",
          args: { name: "rate", default: "5" },
        },
        { name: "--watch", description: "Refresh details" },
      ],
    },
    { name: "suspend", description: "Suspend an application" },
    {
      name: "turboku",
      description: "Launches heroku apps",
      options: [
        {
          name: "--heroku-token",
          description: "Heroku API token",
          args: { name: "heroku-token" },
        },
        {
          name: "--keep",
          description: "Keep the app directory after deployment",
        },
        {
          name: "--name",
          description: "The name of the new app",
          args: { name: "name" },
        },
        { name: "--now", description: "Deploy now without confirmation" },
        {
          name: "--org",
          description: "The organization that will own the app",
          args: { name: "org" },
        },
        {
          name: "--region",
          description: "The region to launch the new app in",
          args: { name: "region" },
        },
      ],
    },
    {
      name: "version",
      description: "Show version information for the flyctl command",
      subcommands: [
        {
          name: "update",
          description: "Checks for available updates and automatically updates",
        },
      ],
      options: [
        {
          name: ["--saveinstall", "-s"],
          description: "Save parameter in config",
          args: { name: "saveinstall" },
        },
      ],
    },
    {
      name: "vm",
      description: "Commands that manage VM instances",
      subcommands: [
        {
          name: "restart",
          description: "Restart a VM",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "status",
          description: "Show a VM's status",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
        {
          name: "stop",
          description: "Stop a VM",
          options: [
            {
              name: ["--app", "-a"],
              description: "App name to operate on",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description:
                "Path to an app config file or directory containing one",
              args: { name: "config", default: "./fly.toml" },
            },
          ],
        },
      ],
    },
    {
      name: ["vol", "volumes"],
      description: "Volume management commands",
      subcommands: [
        {
          name: "create",
          description: "Create new volume for app",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
            {
              name: "--no-encryption",
              description: "Do not encrypt the volume contents",
            },
            {
              name: ["--region", "-r"],
              description: "The region to operate on",
              args: { name: "region" },
            },
            {
              name: "--require-unique-zone",
              description:
                "Require volume to be placed in separate hardware zone from existing volumes",
            },
            {
              name: ["--size", "-s"],
              description: "Size of volume in gigabytes",
              args: { name: "size", default: "3" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a volume from the app",
          options: [
            { name: ["--yes", "-y"], description: "Accept all confirmations" },
          ],
        },
        {
          name: "list",
          description: "List the volumes for app",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application name",
              args: { name: "app" },
            },
            {
              name: ["--config", "-c"],
              description: "Path to application configuration file",
              args: { name: "config" },
            },
          ],
        },
        { name: "show", description: "Show details of an app's volume" },
        {
          name: ["snaps", "snapshots"],
          description: "Manage volume snapshots",
          subcommands: [{ name: "list", description: "List snapshots" }],
        },
      ],
    },
    {
      name: ["wg", "wireguard"],
      description: "Commands that manage WireGuard peer connections",
      subcommands: [
        { name: "create", description: "Add a WireGuard peer connection" },
        { name: "list", description: "List all WireGuard peer connections" },
        { name: "remove", description: "Remove a WireGuard peer connection" },
        {
          name: "reset",
          description: "Reset WireGuard peer connection for an organization",
        },
        {
          name: "status",
          description: "Get status a WireGuard peer connection",
        },
        {
          name: "token",
          description:
            "Commands that managed WireGuard delegated access tokens",
          subcommands: [
            { name: "create", description: "Create a new WireGuard token" },
            {
              name: "delete",
              description:
                "Delete a WireGuard token; token is name:<name> or token:<token>",
            },
            { name: "list", description: "List all WireGuard tokens" },
            {
              name: "start",
              description:
                "Start a new WireGuard peer connection associated with a token (set FLY_WIREGUARD_TOKEN)",
            },
            {
              name: "update",
              description:
                "Rekey a WireGuard peer connection associated with a token (set FLY_WIREGUARD_TOKEN)",
            },
          ],
        },
        {
          name: "websockets",
          description: "Enable or disable WireGuard tunneling over WebSockets",
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        { name: "Use", description: "Short" },
        {
          name: "agent",
          description:
            "Commands that manage the Fly agent, a background process that manages flyctl wireguard connections",
          subcommands: [
            { name: "ping", description: "Ping the Fly agent" },
            { name: "restart", description: "Restart the Fly agent" },
            {
              name: ["daemon-start", "run"],
              description: "Run the Fly agent in the foreground",
            },
            { name: "start", description: "Start the Fly agent" },
            { name: "stop", description: "Stop the Fly agent" },
          ],
        },
        {
          name: "apps",
          description: "Manage apps",
          subcommands: [
            { name: "create", description: "Create a new application" },
            { name: "destroy", description: "Permanently destroys an app" },
            { name: "list", description: "List applications" },
            {
              name: "move",
              description: "Move an app to another organization",
            },
            {
              name: "open",
              description: "Open browser to current deployed application",
            },
            { name: "releases", description: "List app releases" },
            { name: "restart", description: "Restart an application" },
          ],
        },
        {
          name: "auth",
          description: "Manage authentication",
          subcommands: [
            { name: "docker", description: "Authenticate docker" },
            { name: "login", description: "Log in a user" },
            {
              name: "logout",
              description: "Logs out the currently logged in user",
            },
            { name: "signup", description: "Create a new fly account" },
            { name: "token", description: "Show the current auth token" },
            {
              name: "whoami",
              description:
                "Displays the users email address/service identity currently authenticated and in use",
            },
          ],
        },
        {
          name: "autoscale",
          description: "Autoscaling app resources",
          subcommands: [
            {
              name: "balanced",
              description:
                "Configure a traffic balanced app with params (min=int max=int)",
            },
            { name: "disable", description: "Disable autoscaling" },
            {
              name: "set",
              description: "Set current models autoscaling parameters",
            },
            {
              name: "show",
              description: "Show current autoscaling configuration",
            },
            {
              name: "standard",
              description:
                "Configure a standard balanced app with params (min=int max=int)",
            },
          ],
        },
        {
          name: "builds",
          description: "Manage application builds",
          subcommands: [{ name: "list", description: "List builds" }],
        },
        {
          name: "certs",
          description: "Manage certificates",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Add a certificate for an app",
            },
            { name: "check", description: "Checks DNS configuration" },
            { name: "list", description: "List certificates for an app" },
            {
              name: ["delete", "remove"],
              description: "Removes a certificate from an app",
            },
            { name: "show", description: "Shows certificate information" },
          ],
        },
        {
          name: "checks",
          description: "Manage health checks",
          subcommands: [
            {
              name: "handlers",
              description: "Manage health check handlers",
              subcommands: [
                {
                  name: "create",
                  description: "Create a health check handler",
                },
                {
                  name: "delete",
                  description: "Delete a health check handler",
                },
                { name: "list", description: "List health check handlers" },
              ],
            },
            { name: "list", description: "List app health checks" },
          ],
        },
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
            },
          ],
        },
        {
          name: "config",
          description: "Manage an app's configuration",
          subcommands: [
            {
              name: "display",
              description: "Display an app's configuration",
            },
            {
              name: "env",
              description: "Display an app's runtime environment variables",
            },
            { name: "save", description: "Save an app's config file" },
            {
              name: "validate",
              description: "Validate an app's config file",
            },
          ],
        },
        { name: "create", description: "Create a new application" },
        { name: "curl", description: "Run a performance test against a URL" },
        {
          name: ["dash", "dashboard"],
          description: "Open web browser on Fly Web UI for this app",
          subcommands: [
            {
              name: "metrics",
              description:
                "Open web browser on Fly Web UI for this app's metrics",
            },
          ],
        },
        { name: "deploy", description: "Deploy Fly applications" },
        { name: "destroy", description: "Permanently destroys an app" },
        {
          name: "dig",
          description: "Make DNS requests against Fly.io's internal DNS server",
        },
        {
          name: "dns-records",
          description: "Manage DNS records",
          subcommands: [
            { name: "export", description: "Export DNS records" },
            { name: "import", description: "Import DNS records" },
            { name: "list", description: "List DNS records" },
          ],
        },
        { name: "docs", description: "View Fly documentation" },
        {
          name: "doctor",
          description:
            "The DOCTOR command allows you to debug your Fly environment",
          subcommands: [
            {
              name: "diag",
              description:
                "Send diagnostic information about your applications back to Fly.io",
            },
          ],
        },
        {
          name: "domains",
          description: "Manage domains",
          subcommands: [
            { name: "add", description: "Add a domain" },
            { name: "list", description: "List domains" },
            { name: "register", description: "Register a domain" },
            { name: "show", description: "Show domain" },
          ],
        },
        { name: "history", description: "List an app's change history" },
        {
          name: ["img", "image"],
          description: "Manage app image",
          subcommands: [
            { name: "show", description: "Show image details" },
            {
              name: "update",
              description:
                "Updates the app's image to the latest available version. (Fly Postgres only)",
            },
          ],
        },
        { name: "info", description: "Show detailed app information" },
        {
          name: "ips",
          description: "Manage IP addresses for apps",
          subcommands: [
            { name: "allocate-v4", description: "Allocate an IPv4 address" },
            { name: "allocate-v6", description: "Allocate an IPv6 address" },
            { name: "list", description: "List allocated IP addresses" },
            {
              name: "private",
              description: "List instances private IP addresses",
            },
            { name: "release", description: "Release an IP address" },
          ],
        },
        { name: "launch", description: "Launch a new app" },
        {
          name: ["ls", "list"],
          description: "Lists your Fly resources",
          subcommands: [
            { name: "apps", description: "Lists all your apps" },
            { name: "orgs", description: "List all your organizations" },
          ],
        },
        { name: "logs", description: "View app logs" },
        {
          name: ["machines", "m", "machine"],
          description: "Commands that manage machines",
          subcommands: [
            { name: "clone", description: "Clones a Fly Machine" },
            { name: "kill", description: "Kill (SIGKILL) a Fly machine" },
            { name: "list", description: "List Fly machines" },
            { name: ["rm", "remove"], description: "Remove a Fly machine" },
            { name: "run", description: "Run a machine" },
            { name: "start", description: "Start a Fly machine" },
            {
              name: "status",
              description: "Show current status of a running machine",
            },
            { name: "stop", description: "Stop a Fly machine" },
          ],
        },
        {
          name: "monitor",
          description: "Monitor currently running application deployments",
        },
        { name: "move", description: "Move an app to another organization" },
        {
          name: "open",
          description: "Open browser to current deployed application",
        },
        {
          name: "orgs",
          description: "Commands for managing Fly organizations",
          subcommands: [
            {
              name: "builder",
              description: "Manage remote builder",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Show details about an organization's remote builder image",
                },
                {
                  name: "update",
                  description: "Update an organization's remote builder image",
                },
              ],
            },
            { name: "create", description: "Create an organization" },
            { name: "delete", description: "Delete an organization" },
            {
              name: "invite",
              description: "Invite user (by email) to organization",
            },
            {
              name: "list",
              description: "Lists organizations for current user",
            },
            {
              name: "remove",
              description: "Remove a user from an organization",
            },
            {
              name: "show",
              description: "Show information about an organization",
            },
          ],
        },
        {
          name: "ping",
          description: "Test connectivity with ICMP ping messages",
        },
        {
          name: "platform",
          description: "Fly platform information",
          subcommands: [
            { name: "regions", description: "List regions" },
            { name: "status", description: "Show current platform status" },
            { name: "vm-sizes", description: "List VM Sizes" },
          ],
        },
        {
          name: ["pg", "postgres"],
          description: "Manage postgres clusters",
          subcommands: [
            {
              name: "attach",
              description: "Attach a postgres cluster to an app",
            },
            {
              name: "connect",
              description: "Connect to the Postgres console",
            },
            { name: "create", description: "Create a postgres cluster" },
            {
              name: "db",
              description: "Manage databases in a cluster",
              subcommands: [
                { name: "list", description: "List databases in a cluster" },
              ],
            },
            {
              name: "detach",
              description: "Detach a postgres cluster from an app",
            },
            { name: "list", description: "List postgres clusters" },
            {
              name: "users",
              description: "Manage users in a cluster",
              subcommands: [
                { name: "list", description: "List users in a cluster" },
              ],
            },
          ],
        },
        { name: "proxy", description: "Proxies connections to a fly VM" },
        {
          name: "regions",
          description: "Manage regions",
          subcommands: [
            {
              name: "add",
              description: "Allow the app to run in the provided regions",
            },
            {
              name: "backup",
              description: "Sets the backup region pool with provided regions",
            },
            {
              name: "list",
              description:
                "Shows the list of regions the app is allowed to run in",
            },
            {
              name: "remove",
              description:
                "Prevent the app from running in the provided regions",
            },
            {
              name: "set",
              description: "Sets the region pool with provided regions",
            },
          ],
        },
        { name: "releases", description: "List app releases" },
        { name: "restart", description: "Restart an application" },
        { name: "resume", description: "Resume an application" },
        {
          name: "scale",
          description: "Scale app resources",
          subcommands: [
            {
              name: "count",
              description: "Change an app's VM count to the given value",
            },
            { name: "memory", description: "Set VM memory" },
            { name: "show", description: "Show current resources" },
            {
              name: "vm",
              description:
                "Change an app's VM to a named size (eg. shared-cpu-1x, dedicated-cpu-1x, dedicated-cpu-2x...)",
            },
          ],
        },
        {
          name: "secrets",
          description: "Manage app secrets",
          subcommands: [
            {
              name: "import",
              description: "Read secrets in name=value from stdin",
            },
            {
              name: "list",
              description: "Lists the secrets available to the app",
            },
            {
              name: "set",
              description: "Set one or more encrypted secrets for an app",
            },
            {
              name: "unset",
              description: "Remove encrypted secrets from an app",
            },
          ],
        },
        {
          name: "ssh",
          description: "Commands that manage SSH credentials",
          subcommands: [
            {
              name: "console",
              description: "Connect to a running instance of the current app",
            },
            {
              name: "establish",
              description:
                "Create a root SSH certificate for your organization",
            },
            { name: "issue", description: "Issue a new SSH credential" },
            { name: "log", description: "Log of all issued certs" },
          ],
        },
        {
          name: "status",
          description: "Show app status",
          subcommands: [
            { name: "instance", description: "Show instance status" },
          ],
        },
        { name: "suspend", description: "Suspend an application" },
        { name: "turboku", description: "Launches heroku apps" },
        {
          name: "version",
          description: "Show version information for the flyctl command",
          subcommands: [
            {
              name: "update",
              description:
                "Checks for available updates and automatically updates",
            },
          ],
        },
        {
          name: "vm",
          description: "Commands that manage VM instances",
          subcommands: [
            { name: "restart", description: "Restart a VM" },
            { name: "status", description: "Show a VM's status" },
            { name: "stop", description: "Stop a VM" },
          ],
        },
        {
          name: ["vol", "volumes"],
          description: "Volume management commands",
          subcommands: [
            { name: "create", description: "Create new volume for app" },
            { name: "delete", description: "Delete a volume from the app" },
            { name: "list", description: "List the volumes for app" },
            { name: "show", description: "Show details of an app's volume" },
            {
              name: ["snaps", "snapshots"],
              description: "Manage volume snapshots",
              subcommands: [{ name: "list", description: "List snapshots" }],
            },
          ],
        },
        {
          name: ["wg", "wireguard"],
          description: "Commands that manage WireGuard peer connections",
          subcommands: [
            {
              name: "create",
              description: "Add a WireGuard peer connection",
            },
            {
              name: "list",
              description: "List all WireGuard peer connections",
            },
            {
              name: "remove",
              description: "Remove a WireGuard peer connection",
            },
            {
              name: "reset",
              description:
                "Reset WireGuard peer connection for an organization",
            },
            {
              name: "status",
              description: "Get status a WireGuard peer connection",
            },
            {
              name: "token",
              description:
                "Commands that managed WireGuard delegated access tokens",
              subcommands: [
                {
                  name: "create",
                  description: "Create a new WireGuard token",
                },
                {
                  name: "delete",
                  description:
                    "Delete a WireGuard token; token is name:<name> or token:<token>",
                },
                { name: "list", description: "List all WireGuard tokens" },
                {
                  name: "start",
                  description:
                    "Start a new WireGuard peer connection associated with a token (set FLY_WIREGUARD_TOKEN)",
                },
                {
                  name: "update",
                  description:
                    "Rekey a WireGuard peer connection associated with a token (set FLY_WIREGUARD_TOKEN)",
                },
              ],
            },
            {
              name: "websockets",
              description:
                "Enable or disable WireGuard tunneling over WebSockets",
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--access-token", "-t"],
      description: "Fly API Access Token",
      isPersistent: true,
      args: { name: "access-token" },
    },
    {
      name: "--builtinsfile",
      description: "Load builtins from named file",
      isPersistent: true,
      hidden: true,
      args: { name: "builtinsfile" },
    },
    { name: ["--json", "-j"], description: "Json output", isPersistent: true },
    { name: "--verbose", description: "Verbose output", isPersistent: true },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};

export default completionSpec;
