const completionSpec: Fig.Spec = {
  name: "expressots",
  description: "ExpressoTS CLI",
  subcommands: [
    {
      name: "new",
      description: "Create a new ExpressoTS application",
      args: {
        name: "name",
        description: "Name of the application",
      },
      options: [
        {
          name: ["-t", "--template"],
          description: "Choose a template to use",
          args: {
            name: "template",
            description: "Choose a template",
            generators: {
              script: ["expressots", "templates"],
              postProcess: function (out) {
                return [
                  {
                    name: "opinionated",
                    description: "An opinionated ExpressoTS application",
                  },
                  {
                    name: "non-opinionated",
                    description: "An ExpressoTS application",
                  },
                ];
              },
            },
          },
        },
        {
          name: ["-p", "--package-manager"],
          description: "Choose a package manager to use",
          args: {
            name: "package-manager",
            description: "Choose a package manager",
            generators: {
              script: ["expressots", "package", "manager"],
              postProcess: function (out) {
                return [
                  {
                    name: "npm",
                    description: "",
                  },
                  {
                    name: "yarn",
                    description: "",
                  },
                  {
                    name: "pnpm",
                    description: "",
                  },
                ];
              },
            },
          },
        },
        {
          name: ["-d", "--directory"],
          description: "Create the application in a specific directory",
          args: {
            name: "directory",
            description: "Select a directory",
            template: "filepaths",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Show command help",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for expressots",
    },
    {
      name: ["i", "info"],
      description: "Display CLI details",
    },
  ],
};
export default completionSpec;
