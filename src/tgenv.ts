const generators: Record<string, Fig.Generator> = {
  installedVersions: {
    script: "tgenv list",
    postProcess: function (out) {
      return out
        .trim()
        .split("\n")
        .map((tfversion) => {
          return { name: tfversion, description: "Version" };
        });
    },
  },
  allVersions: {
    script: "tgenv list-remote",
    postProcess: function (out) {
      return out
        .trim()
        .split("\n")
        .map(function (line) {
          return { name: line, type: "option" };
        });
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "tgenv",
  description: "Terragrunt version manager",
  subcommands: [
    {
      name: "install",
      description: "Install a specific version of Terragrunt",
      args: {
        name: "version",
        description: "Possible Terragrunt Version",
        suggestions: ["latest", "min-required"],
        generators: generators.allVersions,
      },
    },
    {
      name: "use",
      description: "Switch to a version to use",
      args: {
        name: "version",
        description: "Installed Terragrunt Version",
        generators: generators.installedVersions,
      },
    },
    {
      name: "uninstall",
      description: "Uninstall a specific version of Terragrunt",
      args: {
        name: "version",
        description: "Installed Terragrunt Version",
        generators: generators.installedVersions,
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
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "View your current tgenv version",
    },
    {
      name: "--help",
      description: "View commands",
    },
  ],
};

export default completionSpec;
