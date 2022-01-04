const completionSpec: Fig.Spec = {
  name: "vsce",
  description: "The Visual Studio Code Extension Manager",
  subcommands: [
    {
      name: "ls",
      description: "Lists all the files that will be published",
    },
    {
      name: "package",
      description: "Packages an extension",
    },
    {
      name: "publish",
      description: "Publishes an extension",
    },
    {
      name: "unpublish",
      description:
        "Unpublishes an extension. Example extension id: microsoft.csharp",
    },
    {
      name: "ls-publishers",
      description: "List all known publishers",
    },
    {
      name: "delete-publisher",
      description: "Deletes a publisher",
    },
    {
      name: "login",
      description: "Add a publisher to the known publishers list",
    },
    {
      name: "logout",
      description: "Remove a publisher from the known publishers list",
    },
    {
      name: "verify-pat",
      description:
        "Verify if the Personal Access Token has publish rights for the publisher",
    },
    {
      name: "show",
      description: "Show extension metadata",
    },
    {
      name: "search",
      description: "Search extension gallery",
    },
    {
      name: "help",
      description: "Display help for command",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help for command",
    },
    {
      name: ["-V", "--version"],
      description: "Output the version number",
    },
  ],
};

export default completionSpec;
