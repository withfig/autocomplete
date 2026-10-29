const completionSpec: Fig.Spec = {
  name: "denon",
  description:
    "Denon: a Deno CLI wrapper that watches files and restarts your app (like nodemon)",
  args: {
    name: "script or command",
    isVariadic: true,
    description:
      "A script name from your config, or a deno command and arguments (with no arguments, lists available scripts)",
    isOptional: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for denon and the wrapped deno CLI",
    },
    {
      name: ["--version", "-v"],
      description: "Print the denon version",
    },
    {
      name: ["--config", "-c"],
      description:
        "Use a specific configuration file (scripts.json, scripts.yml or scripts.config.ts)",
      requiresSeparator: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["--init", "-i"],
      description:
        "Create a starter configuration file in the project root (default template: json)",
      args: {
        name: "template",
        isOptional: true,
        description: "Config template to use",
      },
    },
    {
      name: ["--upgrade", "-u"],
      description: "Upgrade denon to the latest version (or the given version)",
      args: {
        name: "version",
        isOptional: true,
        description: "Version to upgrade to, or latest",
      },
    },
  ],
};

export default completionSpec;
