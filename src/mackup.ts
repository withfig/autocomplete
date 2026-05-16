const applicationGenerator: Fig.Generator = {
  script: ["mackup", "list"],
  postProcess: (output) => {
    return output
      .split("\n")
      .filter((line) => line.includes("-"))
      .map((name) => ({ name: name.substring(3) }));
  },
};

const completionSpec: Fig.Spec = {
  name: "mackup",
  description: "Mackup",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
    },
    {
      name: ["--force", "-f"],
      description: "Force every question asked to be answered with 'Yes'",
    },
    {
      name: ["--root", "-r"],
      description: "Allow mackup to be run as superuser",
    },
    {
      name: ["--dry-run", "-n"],
      description: "Show steps without executing",
    },
    {
      name: "--version",
      description: "Show version",
    },
  ],
  subcommands: [
    {
      name: "list",
      description: "List all the supported mackup applications",
    },
    {
      name: "backup",
      description: "Sync your conf files to your synced storage",
    },
    {
      name: "restore",
      description:
        "Link the conf files already in your synced storage on your system",
    },
    {
      name: "show",
      description: "Show the current configuration",
      args: {
        name: "application",
        generators: applicationGenerator,
      },
    },
    {
      name: "uninstall",
      description: "Reset everything as it was before using Mackup",
    },
  ],
};

export default completionSpec;
