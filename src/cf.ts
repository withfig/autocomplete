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
  }
],
  
  options: [{
    name: ["--help", "-h"],
    description: "Show help for Cloud Foundry command line tool",
  }],
  // Only uncomment if cf takes an argument
  // args: {}
};
export default completionSpec;