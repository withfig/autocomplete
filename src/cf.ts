const postProcessCfList =
  (description: string, leadingLines: number) => (out: string) =>
    out
      .trim() // output can have a trailing newline, prevents empty suggestion
      .split("\n")
      .slice(leadingLines)
      .map((name) => ({ name, description }));

const generateAppNames: Fig.Generator = {
  script: ["bash", "-c", `cf apps | cut -d " " -f1`],
  postProcess: postProcessCfList("App name", 4),
};

const generateOrgs: Fig.Generator = {
  script: ["cf", "orgs"],
  postProcess: postProcessCfList("Org", 3),
};

const generateSpaces: Fig.Generator = {
  script: ["cf", "spaces"],
  postProcess: postProcessCfList("Space", 3),
};

const generateServices: Fig.Generator = {
  script: ["bash", "-c", `cf services | cut -d " " -f1 `],
  postProcess: postProcessCfList("Service", 4),
};

const completionSpec: Fig.Spec = {
  name: "cf",
  description: "Cloudfoundry cli",
  subcommands: [
    {
      name: ["app", "a"],
      description: "Display health and status for app",
      args: {
        name: "APP_NAME",
        description: "The app you want to get health and status for",
        generators: generateAppNames,
      },
      options: [
        {
          name: "--guid",
          description:
            "Retrieve and display the given app's guid.  All other health and status output for the app is suppressed",
        },
      ],
    },
    {
      name: "ssh",
      description: "Display health and status for app",
      args: {
        name: "APP_NAME",
        description: "The app you want to ssh into",
        generators: generateAppNames,
      },
      options: [
        {
          name: "-v",
          description: "Verbose output",
        },
      ],
    },
    {
      name: "env",
      description: "Show all env variables for an app",
      args: {
        name: "APP_NAME",
        description: "The app you want to get env vars for",
        generators: generateAppNames,
      },
    },
    {
      name: "orgs",
      description: "List all orgs",
    },
    {
      name: ["version", "-v", "--version"],
      description: "Print the version of cf",
    },
    {
      name: "login",
      description: "Log user in",
      options: [
        {
          name: "-a",
          description: "API endpoint (e.g. https://api.example.com)",
          args: {
            name: "API endpoint",
          },
        },
        {
          name: "-o",
          description: "Org",
          args: {
            name: "Org",
            generators: generateOrgs,
          },
        },
        {
          name: "-s",
          description: "Space",
          args: {
            name: "Space",
            generators: generateSpaces,
          },
        },
        {
          name: "-p",
          description: "Password",
          args: {
            name: "Password",
          },
        },
        {
          name: "-u",
          description: "Username",
          args: {
            name: "Username",
          },
        },
      ],
    },
    {
      name: "logout",
      description: "Log user out",
    },
    {
      name: "password",
      description: "Change user password",
    },
    {
      name: "target",
      description: "Set or view the targeted org or space",
      options: [
        {
          name: "-o",
          description: "Org",
          args: {
            name: "Org",
            generators: generateOrgs,
          },
        },
        {
          name: "-s",
          description: "Space",
          args: {
            name: "Space",
            generators: generateSpaces,
          },
        },
      ],
    },
    {
      name: "api",
      description: "Set or view target api url",
      args: {
        name: "url",
        description: "API endpoint",
        isOptional: true,
      },
      options: [
        {
          name: "--skip-ssl-validation",
          description:
            "Skip verification of the API endpoint. Not recommended!",
        },
        {
          name: "--unset",
          description: "Remove all api endpoint targeting",
        },
      ],
    },
    {
      name: "auth",
      description: "Auth user non-interactively",
      args: [
        {
          name: "username",
        },
        {
          name: "password",
        },
      ],
    },
    {
      name: "apps",
      description: "List all apps in the target space",
    },
    {
      name: "push",
      description: "Push a new app or sync changes to an existing app",
      options: [
        {
          name: "-b",
          description: "Custom buildpack by name or git url",
          args: {
            name: "Buildpack",
          },
        },
        {
          name: "-c",
          description:
            "Startup command, set to null to reset to default start command",
          args: {
            name: "Command",
            isOptional: true,
          },
        },
        {
          name: "-d",
          description: "Domain",
          args: {
            name: "Domain",
          },
        },
        {
          name: ["-o", "--docker-image"],
          description: "Docker image",
          args: {
            name: "Docker image",
          },
        },
        {
          name: "-f",
          description: "Path to manifest",
          args: {
            name: "Path to manifest",
          },
        },
        {
          name: ["-n", "--host-name"],
          description: "Hostname",
          args: {
            name: "Hostname",
          },
        },
        {
          name: "-i",
          description: "Number of instances",
          args: {
            name: "Number of instances",
          },
        },
        {
          name: "-k",
          description: "Disk limit",
          args: {
            name: "Disk limit",
          },
        },
        {
          name: "-m",
          description: "Memory limit",
          args: {
            name: "Memory limit",
          },
        },
      ],
    },
    {
      name: "scale",
      description:
        "Change or view the instance count, disk space limit, and memory limit for an app",
      options: [
        {
          name: "-f",
          description: "Force restart of app without prompt",
        },
        {
          name: "-i",
          description: "Number of instances",
          args: {
            name: "Number of instances",
          },
        },
        {
          name: "-k",
          description: "Disk limit",
          args: {
            name: "Disk limit",
          },
        },
        {
          name: "-m",
          description: "Memory limit",
          args: {
            name: "Memory limit",
          },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an app",
      isDangerous: true,
      args: {
        name: "APP_NAME",
        description: "The app you want to get health and status for",
        generators: generateAppNames,
      },
      options: [
        {
          name: "-f",
          description: "Force deletion without confirmation",
          isDangerous: true,
        },
        {
          name: "-r",
          description: "Also delete any mapped routes",
        },
      ],
    },
    {
      name: "rename",
      description: "Rename an app",
      args: [
        {
          name: "APP_NAME",
          generators: generateAppNames,
        },
        {
          name: "new app name",
        },
      ],
    },
    {
      name: "start",
      description: "Start an app",
      args: {
        name: "APP_NAME",
        generators: generateAppNames,
      },
    },
    {
      name: "stop",
      description: "Stop an app",
      args: {
        name: "APP_NAME",
        generators: generateAppNames,
      },
    },
    {
      name: "restart",
      description:
        "Stop all instances of the app, then start them again. This may cause downtime",
      args: {
        name: "APP_NAME",
        generators: generateAppNames,
      },
    },
    {
      name: "restage",
      description:
        "Recreate the app's executable artifact using the latest pushed app files and the latest environment (variables, service bindings, buildpack, stack, etc.)",
      args: {
        name: "APP_NAME",
        generators: generateAppNames,
      },
    },
    {
      name: "restart-app-instance",
      description:
        "Terminate the running application Instance at the given index and instantiate a new instance of the application with the same index",
      args: [
        {
          name: "APP_NAME",
          generators: generateAppNames,
        },
        {
          name: "index",
        },
      ],
    },
    {
      name: "run-task",
      description: "Run a one-off task on an app",
      args: [
        {
          name: "APP_NAME",
          generators: generateAppNames,
        },
        {
          name: "command",
        },
      ],
      options: [
        {
          name: "-k",
          description: "Disk limit",
          args: {
            name: "Disk limit",
          },
        },
        {
          name: "-m",
          description: "Memory limit",
          args: {
            name: "Memory limit",
          },
        },
        {
          name: "--name",
          description: "Name for task",
          args: {
            name: "Name for task",
          },
        },
      ],
    },
    {
      name: "tasks",
      description: "List tasks of an app",
      args: {
        name: "APP_NAME",
        generators: generateAppNames,
      },
    },
    {
      name: "terminate-task",
      description: "Terminate a running task of an app",
      args: [
        {
          name: "APP_NAME",
          generators: generateAppNames,
        },
        {
          name: "task id",
        },
      ],
    },
    {
      name: "events",
      description: "Show recent app events",
      args: {
        name: "APP_NAME",
        generators: generateAppNames,
      },
    },
    {
      name: "files",
      description:
        "Print out a list of files in a directory or the contents of a specific file of an app running on the DEA backend",
      args: [
        {
          name: "APP_NAME",
          generators: generateAppNames,
        },
        {
          name: "path",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "-i",
          description: "Instance",
          args: {
            name: "instance",
          },
        },
      ],
    },
    {
      name: "logs",
      description: "Trail or show recent logs for an app",
      args: {
        name: "APP_NAME",
        generators: generateAppNames,
      },
      options: [
        {
          name: "--recent",
          description: "Dump recent logs instead of tailing",
        },
      ],
    },
    {
      name: "set-env",
      description: "Set an environment variable for an app",
      args: [
        {
          name: "APP_NAME",
          generators: generateAppNames,
        },
        {
          name: "env var name",
        },
        {
          name: "env var value",
        },
      ],
    },
    {
      name: "unset-env",
      description: "Remove an environment variable",
      args: [
        {
          name: "APP_NAME",
          generators: generateAppNames,
        },
        {
          name: "env var name",
        },
      ],
    },
    {
      name: "stacks",
      description:
        "List all stacks (a stack is a pre-built file system, including an operating system, that can run apps)",
    },
    {
      name: "copy-source",
      description:
        "Copies the source code of an application to another existing application (and restarts that application)",
      args: [
        {
          name: "source app",
        },
        {
          name: "target app",
        },
      ],
      options: [
        {
          name: "-s",
          description: "Space that contains the target application",
          args: {
            name: "space",
            generators: generateSpaces,
          },
        },
        {
          name: "-o",
          description: "Org that contains the target application",
          args: {
            name: "org",
            generators: generateOrgs,
          },
        },
        {
          name: "--no-restart",
          description:
            "Override restart of the application in target environment after copy-source completes",
        },
      ],
    },
    {
      name: "create-app-manifest",
      description:
        "Create an app manifest for an app that has been pushed successfully",
      args: {
        name: "APP_NAME",
        generators: generateAppNames,
      },
      options: [
        {
          name: "-p",
          description: "Path for file creation",
          args: {
            name: "path",
          },
        },
      ],
    },
    {
      name: "get-health-check",
      description: "Show the type of health check performed on an app",
      args: {
        name: "APP_NAME",
        generators: generateAppNames,
      },
    },
    {
      name: "set-health-check",
      description: "Change type of health check performed on an app",
      args: [
        {
          name: "APP_NAME",
          generators: generateAppNames,
        },
        {
          name: "type of health check",
          description: "Process, port or http",
        },
      ],
    },
    {
      name: "enable-ssh",
      description: "Enable ssh for the application",
      args: {
        name: "APP_NAME",
        generators: generateAppNames,
      },
    },
    {
      name: "disable-ssh",
      description: "Disable ssh for the application",
      args: {
        name: "APP_NAME",
        generators: generateAppNames,
      },
    },
    {
      name: "ssh-enabled",
      description:
        "Reports whether SSH is enabled on an application container instance",
      args: {
        name: "APP_NAME",
        generators: generateAppNames,
      },
    },
    {
      name: "marketplace",
      description: "List available offerings in the marketplace",
      options: [
        {
          name: "-s",
          description: "Show plan details for a particular service offering",
          args: {
            name: "service",
          },
        },
      ],
    },
    {
      name: ["services", "s"],
      description: "List all service instances in the target space",
    },
    {
      name: "create-service",
      description: "Create a service instance",
      args: [
        {
          name: "service",
        },
        {
          name: "plan",
        },
        {
          name: "service instance",
        },
      ],
      options: [
        {
          name: "-c",
          description:
            "Valid JSON object containing service-specific configuration parameters, provided either in-line or in a file",
          args: {
            name: "JSON object",
          },
        },
        {
          name: "-t",
          description: "User provided tags",
          args: {
            name: "tags",
          },
        },
      ],
    },
    {
      name: "update-service",
      description: "Update a service instance",
      args: {
        name: "service",
        generators: generateServices,
      },
      options: [
        {
          name: "-c",
          description:
            "Valid JSON object containing service-specific configuration parameters, provided either in-line or in a file",
          args: {
            name: "JSON object",
          },
        },
        {
          name: "-p",
          description: "Change service plan for a service instance",
          args: {
            name: "new plan",
          },
        },
        {
          name: "-t",
          description: "User provided tags",
          args: {
            name: "tags",
          },
        },
      ],
    },
    {
      name: "delete-service",
      description: "Delete a service instance",
      args: {
        name: "service instance",
        generators: generateServices,
      },
      options: [
        {
          name: "-f",
          description: "Force deletion without confirmation",
        },
      ],
    },
    {
      name: "rename-service",
      description: "Rename a service instance",
      args: [
        {
          name: "service instance",
          generators: generateServices,
        },
        {
          name: "new service instance",
        },
      ],
    },
    {
      name: "create-service-key",
      description: "Create key for a service instance",
      args: [
        {
          name: "service instance",
          generators: generateServices,
        },
        {
          name: "service key",
        },
      ],
      options: [
        {
          name: "-c",
          description:
            "Valid JSON object containing service-specific configuration parameters, provided either in-line or in a file",
          args: {
            name: "JSON object",
          },
        },
      ],
    },
    {
      name: "service-keys",
      description: "List keys for a service instance",
      args: {
        name: "service instance",
        generators: generateServices,
      },
    },
    {
      name: "service-key",
      description: "Show service key info",
      args: [
        {
          name: "service instance",
          generators: generateServices,
        },
        {
          name: "service key",
        },
      ],
    },
    {
      name: "delete-service-key",
      description: "Delete a service key",
      args: [
        {
          name: "service instance",
          generators: generateServices,
        },
        {
          name: "service key",
        },
      ],
      options: [
        {
          name: "-f",
          description: "Force deletion without confirmation",
        },
      ],
    },
    {
      name: "bind-service",
      description: "Bind a service instance to an app",
      args: [
        {
          name: "APP_NAME",
          generators: generateAppNames,
        },
        {
          name: "service instance",
          generators: generateServices,
        },
      ],
      options: [
        {
          name: "-c",
          description:
            "Valid JSON object containing service-specific configuration parameters, provided either in-line or in a file",
          args: {
            name: "JSON object",
          },
        },
      ],
    },
    {
      name: "unbind-service",
      description: "Unbind a service instance from an app",
      args: [
        {
          name: "APP_NAME",
          generators: generateAppNames,
        },
        {
          name: "service instance",
          generators: generateServices,
        },
      ],
    },
    {
      name: "bind-route-service",
      description: "Bind a service instance to an HTTP route",
      args: [
        {
          name: "domain",
        },
        {
          name: "service instance",
          generators: generateServices,
        },
      ],
      options: [
        {
          name: "-c",
          description:
            "Valid JSON object containing service-specific configuration parameters, provided either in-line or in a file",
          args: {
            name: "JSON object",
          },
        },
        {
          name: ["-n", "--hostname"],
          description:
            "Hostname used in combination with DOMAIN to specify the route to bind",
          args: {
            name: "hostname",
          },
        },
        {
          name: "--path",
          description:
            "Path used in combination with HOSTNAME and DOMAIN to specify the route to bind",
          args: {
            name: "path",
          },
        },
      ],
    },
    {
      name: "unbind-route-service",
      description: "Unbind a service instance from an HTTP route",
      args: [
        {
          name: "domain",
        },
        {
          name: "service instance",
          generators: generateServices,
        },
      ],
      options: [
        {
          name: "-f",
          description: "Force unbinding without confirmation",
        },
        {
          name: ["-n", "--hostname"],
          description:
            "Hostname used in combination with DOMAIN to specify the route to bind",
          args: {
            name: "hostname",
          },
        },
        {
          name: "--path",
          description:
            "Path used in combination with HOSTNAME and DOMAIN to specify the route to bind",
          args: {
            name: "path",
          },
        },
      ],
    },
    {
      name: "create-user-provided-service",
      description: "Make a user-provided service instance available to CF apps",
      args: {
        name: "service instance",
      },
      options: [
        {
          name: "-p",
          description:
            "Credentials, provided inline or in a file, to be exposed in the VCAP_SERVICES environment variable for bound applications",
          args: {
            name: "credentials",
          },
        },
        {
          name: "-l",
          description:
            "URL to which logs for bound applications will be streamed",
          args: {
            name: "sys log drain url",
          },
        },
        {
          name: "-r",
          description:
            "URL to which requests for bound routes will be forwarded. Scheme for this URL must be https",
          args: {
            name: "serice url",
          },
        },
      ],
    },
    {
      name: "update-user-provided-service",
      description: "Update user-provided service instance",
      args: {
        name: "service instance",
      },
      options: [
        {
          name: "-p",
          description:
            "Credentials, provided inline or in a file, to be exposed in the VCAP_SERVICES environment variable for bound applications",
          args: {
            name: "credentials",
          },
        },
        {
          name: "-l",
          description:
            "URL to which logs for bound applications will be streamed",
          args: {
            name: "sys log drain url",
          },
        },
        {
          name: "-r",
          description:
            "URL to which requests for bound routes will be forwarded. Scheme for this URL must be https",
          args: {
            name: "serice url",
          },
        },
      ],
    },
    {
      name: "org",
      description: "Show org info",
      args: {
        name: "org",
        generators: generateOrgs,
      },
      options: [
        {
          name: "--guid",
          description:
            "Retrieve and display the given org's guid.  All other output for the org is suppressed",
        },
      ],
    },
    {
      name: "create-org",
      description: "Create an org",
      args: {
        name: "org",
      },
      options: [
        {
          name: "-p",
          description:
            "Quota to assign to the newly created org (excluding this option results in assignment of default quota)",
          args: {
            name: "quota",
          },
        },
      ],
    },
    {
      name: "delete-org",
      description: "Delete an org",
      args: {
        name: "org",
        generators: generateOrgs,
      },
      options: [
        {
          name: "-f",
          description: "Force deletion without confirmation",
        },
      ],
    },
    {
      name: "rename-org",
      description: "Rename an org",
      args: [
        {
          name: "org",
          generators: generateOrgs,
        },
        {
          name: "new org",
        },
      ],
    },
    {
      name: "spaces",
      description: "List all spaces in an org",
    },
    {
      name: "space",
      description: "Show space info",
      args: {
        name: "space",
        generators: generateSpaces,
      },
      options: [
        {
          name: "--guid",
          description:
            "Retrieve and display the given org's guid.  All other output for the org is suppressed",
        },
        {
          name: "--security-group-rules",
          description:
            "Retrieve the rules for all the security groups associated with the space's guid.  All other output for the org is suppressed",
        },
      ],
    },
    {
      name: "create-space",
      description: "Create a space",
      args: {
        name: "space",
      },
      options: [
        {
          name: "-o",
          description: "Org",
          args: {
            name: "org",
            generators: generateOrgs,
          },
        },
        {
          name: "-p",
          description: "Quota to assign to the newly created space",
          args: {
            name: "quota",
          },
        },
      ],
    },
    {
      name: "delete-space",
      description: "Delete a space",
      args: {
        name: "space",
        generators: generateSpaces,
      },
      options: [
        {
          name: "-o",
          description: "Delete space within specified org",
          args: {
            name: "org",
            generators: generateOrgs,
          },
        },
        {
          name: "-f",
          description: "Force deletion without confirmation",
        },
      ],
    },
    {
      name: "rename-space",
      description: "Rename a space",
      args: [
        {
          name: "space",
          generators: generateSpaces,
        },
        {
          name: "new space",
        },
      ],
    },
    {
      name: "allow-space-ssh",
      description: "Allow SSH access for the space",
      args: {
        name: "space",
        generators: generateSpaces,
      },
    },
    {
      name: "disallow-space-ssh",
      description: "Disallow SSH access for the space",
      args: {
        name: "space",
        generators: generateSpaces,
      },
    },
    {
      name: "space-ssh-allowed",
      description: "Reports whether SSH is allowed in a space",
      args: {
        name: "space",
        generators: generateSpaces,
      },
    },
    {
      name: "domains",
      description: "List domains in the target org",
    },
    {
      name: "create-domain",
      description: "Create a domain in an org for later use",
      args: [
        {
          name: "org",
          generators: generateOrgs,
        },
        {
          name: "domain",
        },
      ],
    },
    {
      name: "delete-domain",
      description: "Delete a domain",
      args: {
        name: "space",
        generators: generateSpaces,
      },
      options: [
        {
          name: "-f",
          description: "Force deletion without confirmation",
        },
      ],
    },
    {
      name: "create-shared-domain",
      description: "Create a domain that can be used by all orgs (admin-only)",
      args: {
        name: "domain",
      },
      options: [
        {
          name: "--router-group",
          description:
            "Routes for this domain will be configured only on the specified router group",
        },
      ],
    },
    {
      name: "delete-shared-domain",
      description: "Delete a shared domain",
      args: {
        name: "domain",
      },
      options: [
        {
          name: "-f",
          description: "Force deletion without confirmation",
        },
      ],
    },
    {
      name: "router-groups",
      description: "List router groups",
    },
    {
      name: "routes",
      description:
        "List all routes in the current space or the current organization",
      options: [
        {
          name: "--orglevel",
          description:
            "List all the routes for all spaces of current organization",
        },
      ],
    },
    {
      name: "create-route",
      description: "Create a url route in a space for later use",
      args: [
        {
          name: "space",
          generators: generateSpaces,
        },
        {
          name: "domain",
        },
      ],
      options: [
        {
          name: ["--hostname", "-n"],
          description:
            "Hostname for the HTTP route (required for shared domains)",
          args: {
            name: "hostname",
          },
        },
        {
          name: "--path",
          description: "Path for the HTTP route",
          args: {
            name: "path",
          },
        },
        {
          name: "--port",
          description: "Port for the TCP route",
          args: {
            name: "port",
          },
        },
        {
          name: "--random-port",
          description: "Create a random port for the TCP route",
        },
      ],
    },
    {
      name: "check-route",
      description:
        "Perform a simple check to determine whether a route currently exists or not",
      args: [
        {
          name: "host",
        },
        {
          name: "domain",
        },
      ],
      options: [
        {
          name: "--path",
          description: "Path for the route",
          args: {
            name: "path",
          },
        },
      ],
    },
    {
      name: "map-route",
      description: "Add a url route to an app",
      args: [
        {
          name: "APP_NAME",
          generators: generateAppNames,
        },
        {
          name: "domain",
        },
      ],
      options: [
        {
          name: ["--hostname", "-n"],
          description:
            "Hostname for the HTTP route (required for shared domains)",
          args: {
            name: "hostname",
          },
        },
        {
          name: "--path",
          description: "Path for the HTTP route",
          args: {
            name: "path",
          },
        },
        {
          name: "--port",
          description: "Port for the TCP route",
          args: {
            name: "port",
          },
        },
        {
          name: "--random-port",
          description: "Create a random port for the TCP route",
        },
      ],
    },
    {
      name: "unmap-route",
      description: "Remove a url route from an app",
      args: [
        {
          name: "APP_NAME",
          generators: generateAppNames,
        },
        {
          name: "domain",
        },
      ],
      options: [
        {
          name: ["--hostname", "-n"],
          description: "Hostname used to identify the HTTP route",
          args: {
            name: "hostname",
          },
        },
        {
          name: "--path",
          description: "Path used to identify the HTTP route",
          args: {
            name: "path",
          },
        },
        {
          name: "--port",
          description: "Port used to identify the TCP route",
          args: {
            name: "port",
          },
        },
      ],
    },
    {
      name: "delete-route",
      description: "Delete a route",
      args: {
        name: "domain",
      },
      options: [
        {
          name: ["--hostname", "-n"],
          description: "Hostname used to identify the HTTP route",
          args: {
            name: "hostname",
          },
        },
        {
          name: "--path",
          description: "Path used to identify the HTTP route",
          args: {
            name: "path",
          },
        },
        {
          name: "--port",
          description: "Port used to identify the TCP route",
          args: {
            name: "port",
          },
        },
        {
          name: "-f",
          description: "Force deletion without confirmation",
        },
      ],
    },
    {
      name: "delete-orphaned-routes",
      description:
        "Delete all orphaned routes (i.e. those that are not mapped to an app)",
      options: [
        {
          name: "-f",
          description: "Force deletion without confirmation",
        },
      ],
    },
    {
      name: "create-user",
      description: "Create a new user",
      args: [
        {
          name: "username",
        },
        {
          name: "password",
        },
      ],
      options: [
        {
          name: "--origin",
          description:
            "Origin for mapping a user account to a user in an external identity provider",
          args: {
            name: "provider",
          },
        },
      ],
    },
    {
      name: "delete-user",
      description: "Delete a user",
      args: {
        name: "username",
      },
      options: [
        {
          name: "-f",
          description: "Force deletion without confirmation",
        },
      ],
    },
    {
      name: "org-users",
      description: "Show org users by role",
      args: {
        name: "org",
        generators: generateOrgs,
      },
      options: [
        {
          name: "-a",
          description: "List all users in the org",
        },
      ],
    },
    {
      name: "set-org-role",
      description: "Assign an org role to a user",
      args: [
        {
          name: "username",
        },
        {
          name: "org",
          generators: generateOrgs,
        },
        {
          name: "role",
        },
      ],
    },
    {
      name: "unset-org-role",
      description: "Remove an org role from a user",
      args: [
        {
          name: "username",
        },
        {
          name: "org",
          generators: generateOrgs,
        },
        {
          name: "role",
        },
      ],
    },
    {
      name: "space-users",
      description: "Show space users by role",
    },
    {
      name: "set-space-role",
      description: "Assign a space role to a user",
      args: [
        {
          name: "username",
        },
        {
          name: "org",
          generators: generateOrgs,
        },
        {
          name: "space",
          generators: generateSpaces,
        },
        {
          name: "role",
        },
      ],
    },
    {
      name: "unset-space-role",
      description: "Remove a space role from a user",
      args: [
        {
          name: "username",
        },
        {
          name: "org",
          generators: generateOrgs,
        },
        {
          name: "space",
          generators: generateSpaces,
        },
        {
          name: "role",
        },
      ],
    },
    {
      name: "quotas",
      description: "List available usage quotas",
    },
    {
      name: "quota",
      description: "Show quota info",
      args: {
        name: "quota",
      },
    },
    {
      name: "set-quota",
      description: "Assign a quota to an org",
      args: [
        {
          name: "org",
          generators: generateOrgs,
        },
        {
          name: "quota",
        },
      ],
    },
    {
      name: "create-quota",
      description: "Define a new resource quota",
      args: {
        name: "quota",
      },
      options: [
        {
          name: "-a",
          description: "Total number of application instances",
          args: {
            name: "number of application instances",
          },
        },
        {
          name: "-i",
          description:
            "Maximum amount of memory an application instance can have",
          args: {
            name: "instance memory",
          },
        },
        {
          name: "-m",
          description: "Total amount of memory a space can have",
          args: {
            name: "total memory",
          },
        },
        {
          name: "--reserved-route-ports",
          description:
            "Maximum number of routes that may be created with reserved ports (Default: 0)",
          args: {
            name: "reserved route ports",
          },
        },
        {
          name: "-s",
          description: "Total number of service instances",
          args: {
            name: "service instances",
          },
        },
        {
          name: "-r",
          description: "Total number of routes",
          args: {
            name: "routes",
          },
        },
        {
          name: "--allow-paid-service-plans",
          description: "Can provision instances of paid service plans",
        },
      ],
    },
    {
      name: "delete-quota",
      description: "Delete a quota",
      args: {
        name: "quota",
      },
      options: [
        {
          name: "-f",
          description: "Force deletion without confirmation",
        },
      ],
    },
    {
      name: "update-quota",
      description: "Update an existing resource quota",
      args: {
        name: "quota",
      },
      options: [
        {
          name: "-a",
          description: "Total number of application instances",
          args: {
            name: "number of application instances",
          },
        },
        {
          name: "-i",
          description:
            "Maximum amount of memory an application instance can have",
          args: {
            name: "instance memory",
          },
        },
        {
          name: "-m",
          description: "Total amount of memory a space can have",
          args: {
            name: "total memory",
          },
        },
        {
          name: "--reserved-route-ports",
          description:
            "Maximum number of routes that may be created with reserved ports (Default: 0)",
          args: {
            name: "reserved route ports",
          },
        },
        {
          name: "-s",
          description: "Total number of service instances",
          args: {
            name: "service instances",
          },
        },
        {
          name: "-r",
          description: "Total number of routes",
          args: {
            name: "routes",
          },
        },
        {
          name: "-n",
          description: "New name",
          args: {
            name: "name",
          },
        },
        {
          name: "--allow-paid-service-plans",
          description: "Can provision instances of paid service plans",
          exclusiveOn: ["--disallow-paid-service-plans"],
        },
        {
          name: "--disallow-paid-service-plans",
          description: "Cannot provision instances of paid service plans",
          exclusiveOn: ["--allow-paid-service-plans"],
        },
      ],
    },
    {
      name: "space-quotas",
      description: "List available space resource quotas",
    },
    {
      name: "space-quota",
      description: "Show space quota info",
      args: {
        name: "space quota",
      },
    },
    {
      name: "create-space-quota",
      description: "Define a new space resource quota",
      args: {
        name: "quota",
      },
      options: [
        {
          name: "-a",
          description: "Total number of application instances",
          args: {
            name: "number of application instances",
          },
        },
        {
          name: "-i",
          description:
            "Maximum amount of memory an application instance can have",
          args: {
            name: "instance memory",
          },
        },
        {
          name: "-m",
          description: "Total amount of memory a space can have",
          args: {
            name: "total memory",
          },
        },
        {
          name: "--reserved-route-ports",
          description:
            "Maximum number of routes that may be created with reserved ports (Default: 0)",
          args: {
            name: "reserved route ports",
          },
        },
        {
          name: "-s",
          description: "Total number of service instances",
          args: {
            name: "service instances",
          },
        },
        {
          name: "-r",
          description: "Total number of routes",
          args: {
            name: "routes",
          },
        },
        {
          name: "--allow-paid-service-plans",
          description: "Can provision instances of paid service plans",
        },
      ],
    },
    {
      name: "update-space-quota",
      description: "Update an existing space quota",
      args: {
        name: "space quota",
      },
      options: [
        {
          name: "-a",
          description: "Total number of application instances",
          args: {
            name: "number of application instances",
          },
        },
        {
          name: "-i",
          description:
            "Maximum amount of memory an application instance can have",
          args: {
            name: "instance memory",
          },
        },
        {
          name: "-m",
          description: "Total amount of memory a space can have",
          args: {
            name: "total memory",
          },
        },
        {
          name: "--reserved-route-ports",
          description:
            "Maximum number of routes that may be created with reserved ports (Default: 0)",
          args: {
            name: "reserved route ports",
          },
        },
        {
          name: "-s",
          description: "Total number of service instances",
          args: {
            name: "service instances",
          },
        },
        {
          name: "-r",
          description: "Total number of routes",
          args: {
            name: "routes",
          },
        },
        {
          name: "-n",
          description: "New name",
          args: {
            name: "name",
          },
        },
        {
          name: "--allow-paid-service-plans",
          description: "Can provision instances of paid service plans",
          exclusiveOn: ["--disallow-paid-service-plans"],
        },
        {
          name: "--disallow-paid-service-plans",
          description: "Cannot provision instances of paid service plans",
          exclusiveOn: ["--allow-paid-service-plans"],
        },
      ],
    },
    {
      name: "delete-space-quota",
      description:
        "Delete a space quota definition and unassign the space quota from all spaces",
      args: {
        name: "space quota",
      },
      options: [
        {
          name: "-f",
          description: "Force deletion without confirmation",
        },
      ],
    },
    {
      name: "set-space-quota",
      description: "Assign a space quota definition to a space",
      args: [
        {
          name: "space",
          generators: generateSpaces,
        },
        {
          name: "quota",
        },
      ],
    },
    {
      name: "unset-space-quota",
      description: "Unassign a quota from a space",
      args: [
        {
          name: "space",
          generators: generateSpaces,
        },
        {
          name: "quota",
        },
      ],
    },
    {
      name: "curl",
      description: "Executes a request to the targeted API endpoint",
      args: {
        name: "path",
        description: "Path to curl",
      },
      options: [
        {
          name: "-H",
          description:
            "Custom headers to include in the request, flag can be specified multiple times",
          args: {
            name: "headers",
          },
        },
        {
          name: "-X",
          description: "HTTP method (GET,POST,PUT,DELETE,etc)",
          args: {
            name: "HTTP method",
          },
        },
        {
          name: "-d",
          description:
            "HTTP data to include in the request body, or '@' followed by a file name to read the data from",
          args: {
            name: "data",
          },
        },
        {
          name: "--output",
          description: "Write curl body to FILE instead of stdout",
          args: {
            name: "path to file",
          },
        },
        {
          name: "-i",
          description: "Include response headers in the output",
        },
      ],
    },
    {
      name: "oauth-token",
      description:
        "Retrieve and display the OAuth token for the current session",
    },
    {
      name: "ssh-code",
      description: "Get a one time password for ssh clients",
    },
    {
      name: "add-plugin-repo",
      description: "Add a new plugin repository",
      args: [
        {
          name: "repo name",
        },
        {
          name: "url",
        },
      ],
    },
    {
      name: "remove-plugin-repo",
      description: "Remove a plugin repository",
      args: {
        name: "repo name",
      },
    },
    {
      name: "list-plugin-repos",
      description: "List all the added plugin repositories",
    },
    {
      name: "repo-plugins",
      description:
        "List all available plugins in specified repository or in all added repositories",
      options: [
        {
          name: "-r",
          description: "Name of a registered repository",
          args: {
            name: "repo",
          },
        },
      ],
    },
    {
      name: "plugins",
      description: "List all available plugin commands",
      options: [
        {
          name: "--checksum",
          description:
            "Compute and show the sha1 value of the plugin binary file",
        },
      ],
    },
    {
      name: "install-plugin",
      description: "Install CLI plugin",
      args: [
        {
          name: "path",
          description: "Local path to plugin",
        },
        {
          name: "url",
          description: "URL for plugin",
        },
      ],
      options: [
        {
          name: "-r",
          description:
            "Name of a registered repository where the specified plugin is located",
          args: [
            {
              name: "repo name",
            },
            {
              name: "plugin name",
            },
          ],
        },
        {
          name: "-f",
          description: "Force install of plugin without confirmation",
        },
      ],
    },
    {
      name: "uninstall-plugin",
      description: "Uninstall the plugin defined in command argument",
      args: {
        name: "plugin name",
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for Cloud Foundry command line tool",
    },
    {
      name: "-v",
      description: "Print API request diagnostics to stdout",
    },
  ],
  // Only uncomment if cf takes an argument
  // args: {}
};
export default completionSpec;
