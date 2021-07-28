var remotegenerators = {
  servicesgenerators: {
    script: "tfenv list-remote",
    postProcess: function (out) {
      return out.split("\n").map(function (line) {
        return { name: line, type: "option" };
      });
    },
  },
};

var localgenerators = {
  servicesgenerators: {
    script: "tfenv list",
    postProcess: function (out) {
      return out.split("\n").map((tfversion) => {
        return { name: tfversion, description: "Version" };
      });
    },
  },
};

export const completion: Fig.Spec = {
  name: "tfenv",
  description: "Terraform version manager",
  subcommands: [
    {
      name: "install",
      description: "Install a specific version of Terraform",
      args: [
        {
          name: "version",
          description: "Possible Terraform Version",
          suggestions: ["latest", "min-required"],
          generators: remotegenerators.servicesgenerators,
        },
      ],
    },
    {
      name: "use",
      description: "Swith to a version to use",
      args: {
        name: "version",
        description: "Installed Terraform Version",
        generators: localgenerators.servicesgenerators,
      },
    },
    {
      name: "uninstall",
      description: "Uninstall a specific version of Terraform",
      args: {
        name: "version",
        description: "Installed Terraform Version",
        generators: localgenerators.servicesgenerators,
      },
    },
    {
      name: "list",
      description: "List all installed versions",
    },
    {
      name: "list-remote",
      description: "List all installable versions",
    },
    {
      name: "version-name",
      description: "Print current version",
    },
    {
      name: "init",
      description: "Update environment to use tfenv correctly",
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "View your current tfenv version",
    },
    {
      name: ["--help"],
      description: "View commands",
    },
  ],
};
