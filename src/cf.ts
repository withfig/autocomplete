const completionSpec: Fig.Spec = {
  name: "cf",
  description: "",
  subcommands: [{
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
  },
  {
    name: "scale",
    description: "Change or view the instance count, disk space limit, and memory limit for an app",
  },
  {
    name: "delete",
    description: "Delete an app",
  },
  {
    name: "rename",
    description: "Rename an app",
  },
  {
    name: "start",
    description: "Start an app",
  },
  {
    name: "stop",
    description: "Stop an app",
  },
  {
    name: "restart",
    description: "Stop all instances of the app, then start them again. This may cause downtime",
  },
  {
    name: "restage",
    description: "Recreate the app's executable artifact using the latest pushed app files and the latest environment (variables, service bindings, buildpack, stack, etc.)",
  },
  {
    name: "restart-app-instance",
    description: "Terminate the running application Instance at the given index and instantiate a new instance of the application with the same index",
  },
],
  options: [{
    name: ["--help", "-h"],
    description: "Show help for Cloud Foundry command line tool",
  }],
  // Only uncomment if cf takes an argument
  // args: {}
};
export default completionSpec;