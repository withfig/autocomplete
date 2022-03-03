const completionSpec: Fig.Spec = {
  name: "cf",
  description: "",
  subcommands: [
  {
    name: "app",
    description: "Display health and status for app",
    args: {
      name: "APP_NAME",
      generators: {
          script: `cf apps | cut -d " " -f1`,
          postProcess: function(out) {
            return out.split('\n').map(APP_NAME => {
              return { name: APP_NAME, description: "APP_NAME"}
            })
          }
        },
      description: "The app you want to get health and status for",
      isOptional: false,
    },
    options: [
      {
        name: "--guid",
        description: "Retrieve and display the given app's guid.  All other health and status output for the app is suppressed",
        isRequired: false,
      },
    ],
  },
  {
    name: "ssh",
    description: "Display health and status for app",
    args: {
      name: "APP_NAME",
      generators: {
        script: `cf apps | cut -d " " -f1`,
        postProcess: function(out) {
          return out.split('\n').map(APP_NAME => {
            return { name: APP_NAME, description: "APP_NAME"}
          })
        }
      },
      description: "The app you want to ssh into",
      isOptional: false,
    },
    options: [
      {
        name: "-v",
        description: "Verbose output",
        isRequired: false,
      },
    ],
  },
  {
    name: "env",
    description: "Show all env variables for an app",
    args: {
      name: "APP_NAME",
      generators: {
        script: `cf apps | cut -d " " -f1`,
        postProcess: function(out) {
          return out.split('\n').map(APP_NAME => {
            return { name: APP_NAME, description: "APP_NAME"}
          })
        }
      },
      description: "The app you want to get env vars for",
      isOptional: false,
    },
  },
  {
    name: "orgs",
    description: "List all orgs",
  },
  {
    name: "version",
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
          name: "API endpoint"
        }
      },
      {
        name: "-o",
        description: "Org",
        args: {
          name: "Org"
        }
      },
      {
        name: "-s",
        description: "Space",
        args: {
          name: "Space"
        }
      },
      {
        name: "-p",
        description: "Password",
        args: {
          name: "Password"
        }
      },
      {
        name: "-u",
        description: "Username",
        args: {
          name: "Username"
        }
      },
    ]
  },
  {
    name: "logout",
    description: "Log user out",
  },
  {
    name: "passwd",
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
          name: "Org"
        }
      },
      {
        name: "-s",
        description: "Space",
        args: {
          name: "Space",
        }
      },
    ]
  },
  {
    name: "api",
    description: "Set or view target api url",
  },
  {
    name: "auth",
    description: "Auth user non-interactively",
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
          name: "Buildpack"
        }
      },
      {
        name: "-c",
        description: "Startup command, set to null to reset to default start command",
        args: {
          name: "Command",
          isOptional: true,
        }
      },
      {
        name: "-d",
        description: "Domain",
        args: {
          name: "Domain",
        }
      },
      {
        name: ["-o", "--docker-image"],
        description: "Docker image",
        args: {
          name: "Docker image",
        }
      },
      {
        name: "-f",
        description: "Path to manifest",
        args: {
          name: "Path to manifest",
        }
      },
      {
        name: ["-n", "--host-name"],
        description: "Hostname",
        args: {
          name: "Hostname",
        }
      },
      {
        name: "-i",
        description: "Number of instances",
        args: {
          name: "Number of instances",
        }
      },
      {
        name: "-k",
        description: "Disk limit",
        args: {
          name: "Disk limit",
        }
      },
      {
        name: "-m",
        description: "Memory limit",
        args: {
          name: "Memory limit",
        }
      },
    ]
  },
  {
    name: "scale",
    description: "Change or view the instance count, disk space limit, and memory limit for an app",
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
        }
      },
      {
        name: "-k",
        description: "Disk limit",
        args: {
          name: "Disk limit",
        }
      },
      {
        name: "-m",
        description: "Memory limit",
        args: {
          name: "Memory limit",
        }
      },
    ]
  },
  {
    name: "delete",
    description: "Delete an app",
    isDangerous: true,
    args: 
    {
      name: "APP_NAME",
      generators: {
          script: `cf apps | cut -d " " -f1`,
          postProcess: function(out) {
            return out.split('\n').map(APP_NAME => {
              return { name: APP_NAME, description: "APP_NAME"}
            })
          }
        },
      description: "The app you want to get health and status for",
      isOptional: false,
    },
    options:[
      {
        name: "-f",
        description: "Force deletion without confirmation",
        isDangerous: true,
      },
      {
        name: "-r",
        description: "Also delete any mapped routes",
      },
    ]
  },
  {
    name: "rename",
    description: "Rename an app",
    args: [
      {
        name: "app name",
        isOptional: false,
      },
      {
        name: "new app name",
        isOptional: false,
      },
    ],
  },
  {
    name: "start",
    description: "Start an app",
    args: {
      name: "app name",
      isOptional: false,
    },
  },
  {
    name: "stop",
    description: "Stop an app",
    args: {
      name: "app name",
      isOptional: false,
    },
  },
  {
    name: "restart",
    description: "Stop all instances of the app, then start them again. This may cause downtime",
    args: {
      name: "app name",
      isOptional: false,
    },
  },
  {
    name: "restage",
    description: "Recreate the app's executable artifact using the latest pushed app files and the latest environment (variables, service bindings, buildpack, stack, etc.)",
    args: {
      name: "app name",
      isOptional: false,
    },
  },
  {
    name: "restart-app-instance",
    description: "Terminate the running application Instance at the given index and instantiate a new instance of the application with the same index",
    args: [
      {
        name: "app name",
        isOptional: false,
      },
      {
        name: "index",
        isOptional: false,
      },
    ],
  },
  {
    name: "run-task",
    description: "Run a one-off task on an app",
    args: [
      {
        name: "app name",
        isOptional: false,
      },
      {
        name: "command",
        isOptional: false,
      },
    ],
    options: [
      {
        name: "-k",
        description: "Disk limit",
        args: {
          name: "Disk limit",
        }
      },
      {
        name: "-m",
        description: "Memory limit",
        args: {
          name: "Memory limit",
        }
      },
      {
        name: "--name",
        description: "Name for task",
        args: {
          name: "Name for task",
        }
      },
    ],
  },
  {
    name: "tasks",
    description: "List tasks of an app",
    args: {
      name: "app name",
      isOptional: false,
    },
  },
  {
    name: "terminate-task",
    description: "Terminate a running task of an app",
    args: [
      {
        name: "app name",
        isOptional: false,
      },
      {
        name: "task id",
        isOptional: false,
      },
    ]
  },
  {
    name: "events",
    description: "Show recent app events",
    args: {
      name: "app name",
      isOptional: false,
    }
  },
  {
    name: "files",
    description: "Print out a list of files in a directory or the contents of a specific file of an app running on the DEA backend",
  },
  {
    name: "logs",
    description: "Trail or show recent logs for an app",
    args: {
      name: "app name",
      isOptional: false,
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
        name: "app name",
        isOptional: false,
      },
      {
        name: "env var name",
        isOptional: false,
      },
      {
        name: "env var value",
        isOptional: false,
      },
    ]
  },
  {
    name: "unset-env",
    description: "Remove an environment variable",
    args: [
      {
        name: "app name",
        isOptional: false,
      },
      {
        name: "env var name",
        isOptional: false,
      },
    ]
  },
  {
    name: "stacks",
    description: "List all stacks (a stack is a pre-built file system, including an operating system, that can run apps)",
  },
  {
    name: "copy-source",
    description: "Copies the source code of an application to another existing application (and restarts that application)",
  },
  {
    name: "create-app-manifest",
    description: "Create an app manifest for an app that has been pushed successfully",
    args: {
      name: "app name",
      isOptional: false,
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
      name: "app name",
      isOptional: false,
    },
  },
  {
    name: "set-health-check",
    description: "Change type of health check performed on an app",
    args: [
      {
        name: "app name",
        isOptional: false,
      },
      {
        name: "type of health check",
        description: "Process, port or http",
        isOptional: false,
      },
    ],
  },
  {
    name: "enable-ssh",
    description: "Enable ssh for the application",
    args: {
      name: "app name",
      isOptional: false,
    },
  },
  {
    name: "disable-ssh",
    description: "Disable ssh for the application",
    args: {
      name: "app name",
      isOptional: false,
    },
  },
  {
    name: "ssh-enabled",
    description: "Reports whether SSH is enabled on an application container instance",
    args: {
      name: "app name",
      isOptional: false,
    },
  },
  {
    name: "marketplace",
    description: "List available offerings in the marketplace",
  },
  {
    name: "services",
    description: "List all service instances in the target space",
  },
  {
    name: "create-service",
    description: "Create a service instance",
  },
  {
    name: "update-service",
    description: "Update a service instance",
  },
  {
    name: "delete-service",
    description: "Update a service instance",
  },
  {
    name: "rename-service",
    description: "Rename a service instance",
  },
  {
    name: "create-service-key",
    description: "Create key for a service instance",
  },
  {
    name: "service-keys",
    description: "List keys for a service instance",
  },
  {
    name: "service-key",
    description: "Show service key info",
  },
  {
    name: "delete-service-key",
    description: "Delete a service key",
  },
  {
    name: "bind-service",
    description: "Bind a service instance to an app",
  },
  {
    name: "unbind-service",
    description: "Unbind a service instance from an app",
  },
  {
    name: "bind-route-service",
    description: "Bind a service instance to an HTTP route",
  },
  {
    name: "unbind-route-service",
    description: "Unbind a service instance from an HTTP route",
  },
  {
    name: "create-user-provided-service",
    description: "Make a user-provided service instance available to CF apps",
  },
  {
    name: "update-user-provided-service",
    description: "Update user-provided service instance",
  },
  {
    name: "org",
    description: "Show org info",
  },
  {
    name: "create-org",
    description: "Create an org",
  },
  {
    name: "delete-org",
    description: "Delete an org",
  },
  {
    name: "rename-org",
    description: "Rename an org",
  },
  {
    name: "spaces",
    description: "List all spaces in an org",
  },
  {
    name: "space",
    description: "Show space info",
  },
  {
    name: "create-space",
    description: "Create a space",
  },
  {
    name: "delete-space",
    description: "Delete a space",
  },
  {
    name: "rename-space",
    description: "Rename a space",
  },
  {
    name: "allow-space-ssh",
    description: "Allow SSH access for the space",
  },
  {
    name: "disallow-space-ssh",
    description: "Disallow SSH access for the space",
  },
  {
    name: "space-ssh-allowed",
    description: "Reports whether SSH is allowed in a space",
  },
  {
    name: "domains",
    description: "List domains in the target org",
  },
  {
    name: "create-domain",
    description: "Create a domain in an org for later use",
  },
  {
    name: "delete-domain",
    description: "Delete a domain",
  },
  {
    name: "create-shared-domain",
    description: "Create a domain that can be used by all orgs (admin-only)",
  },
  {
    name: "delete-shared-domain",
    description: "Delete a shared domain",
  },
  {
    name: "router-groups",
    description: "List router groups",
  },
  {
    name: "routes",
    description: "List all routes in the current space or the current organization",
  },
  {
    name: "create-route",
    description: "Create a url route in a space for later use",
  },
  {
    name: "check-route",
    description: "Perform a simple check to determine whether a route currently exists or not",
  },
  {
    name: "map-route",
    description: "Add a url route to an app",
  },
  {
    name: "unmap-route",
    description: "Remove a url route from an app",
  },
  {
    name: "delete-route",
    description: "Delete a route",
  },
  {
    name: "delete-orphaned-routes",
    description: "Delete all orphaned routes (i.e. those that are not mapped to an app)",
  },
  {
    name: "create-user",
    description: "Create a new user",
  },
  {
    name: "delete-user",
    description: "Delete a user",
  },
  {
    name: "org-users",
    description: "Show org users by role",
  },
  {
    name: "set-org-role",
    description: "Assign an org role to a user",
  },
  {
    name: "unset-org-role",
    description: "Remove an org role from a user",
  },
  {
    name: "space-users",
    description: "Show space users by role",
  },
  {
    name: "set-space-role",
    description: "Assign a space role to a user",
  },
  {
    name: "unset-space-role",
    description: "Remove a space role from a user",
  },
  {
    name: "quotas",
    description: "List available usage quotas",
  },
  {
    name: "quota",
    description: "Show quota info",
  },
  {
    name: "set-quota",
    description: "Assign a quota to an org",
  },
  {
    name: "create-quota",
    description: "Define a new resource quota",
  },
  {
    name: "delete-quota",
    description: "Delete a quota",
  },
  {
    name: "update-quota",
    description: "Update an existing resource quota",
  },
  {
    name: "space-quotas",
    description: "List available space resource quotas",
  },
  {
    name: "space-quota",
    description: "Show space quota info",
  },
  {
    name: "create-space-quota",
    description: "Define a new space resource quota",
  },
  {
    name: "update-space-quota",
    description: "Update an existing space quota",
  },
  {
    name: "delete-space-quota",
    description: "Delete a space quota definition and unassign the space quota from all spaces",
  },
  {
    name: "set-space-quota",
    description: "Assign a space quota definition to a space",
  },
  {
    name: "unset-space-quota",
    description: "Unassign a quota from a space",
  },
  {
    name: "curl",
    description: "Executes a request to the targeted API endpoint",
  },
  {
    name: "oauth-token",
    description: "Retrieve and display the OAuth token for the current session",
  },
  {
    name: "ssh-code",
    description: "Get a one time password for ssh clients",
  },
  {
    name: "add-plugin-repo",
    description: "Add a new plugin repository",
  },
  {
    name: "remove-plugin-repo",
    description: "Remove a plugin repository",
  },
  {
    name: "list-plugin-repos",
    description: "List all the added plugin repositories",
  },
  {
    name: "repo-plugins",
    description: "List all available plugins in specified repository or in all added repositories",
  },
  {
    name: "plugins",
    description: "List all available plugin commands",
  },
  {
    name: "install-plugin",
    description: "Install CLI plugin",
  },
  {
    name: "uninstall-plugin",
    description: "Uninstall the plugin defined in command argument",
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
  }
],
  // Only uncomment if cf takes an argument
  // args: {}
};
export default completionSpec;
