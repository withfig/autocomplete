const completionSpec: Fig.Spec = {
  name: "bicep",
  description: "Bicep CLI command group",
  subcommands: [
    { name: "build", description: "Build a Bicep file" },
    {
      name: "decompile",
      description: "Attempt to decompile an ARM template file to a Bicep file",
    },
    { name: "install", description: "Install Bicep CLI" },
    {
      name: "list-versions",
      description: "List out all available versions of Bicep CLI",
    },
    { name: "uninstall", description: "Uninstall Bicep CLI" },
    { name: "upgrade", description: "Upgrade Bicep CLI to the latest version" },
    { name: "version", description: "Show the installed version of Bicep CLI" },
  ],
};

export default completionSpec;
