const completion: Fig.Spec = {
  name: "extension",
  description: "Manage and update CLI extensions",
  subcommands: [
    {
      name: "add",
      description: "Add an extension",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of extension",
          args: { name: "name" },
        },
        {
          name: "--pip-extra-index-urls",
          description:
            "Space-separated list of extra URLs of package indexes to use. This should point to a repository compliant with PEP 503 (the simple repository API) or a local directory laid out in the same format",
          args: { name: "pip-extra-index-urls" },
        },
        {
          name: "--pip-proxy",
          description:
            "Proxy for pip to use for extension dependencies in the form of [user:passwd@]proxy.server:port",
          args: { name: "pip-proxy" },
        },
        {
          name: ["--source", "-s"],
          description: "Filepath or URL to an extension",
          args: { name: "source" },
        },
        {
          name: "--system",
          description: "Use a system directory for the extension",
          args: { name: "system" },
        },
        {
          name: "--upgrade",
          description:
            "Update the extension if already installed, otherwise just install the extension",
          args: { name: "upgrade" },
        },
        {
          name: "--version",
          description: "The specific version of an extension",
          args: { name: "version" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    { name: "list", description: "List the installed extensions" },
    {
      name: "list-available",
      description: "List publicly available extensions",
      options: [
        {
          name: ["--show-details", "-d"],
          description: "Show the raw data from the extension index",
        },
      ],
    },
    {
      name: "list-versions",
      description: "List available versions for an extension",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of extension",
          args: { name: "name" },
          isRequired: true,
        },
      ],
    },
    {
      name: "remove",
      description: "Remove an extension",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of extension",
          args: { name: "name" },
          isRequired: true,
        },
      ],
    },
    {
      name: "show",
      description: "Show an extension",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of extension",
          args: { name: "name" },
          isRequired: true,
        },
      ],
    },
    {
      name: "update",
      description: "Update an extension",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of extension",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--pip-extra-index-urls",
          description:
            "Space-separated list of extra URLs of package indexes to use. This should point to a repository compliant with PEP 503 (the simple repository API) or a local directory laid out in the same format",
          args: { name: "pip-extra-index-urls" },
        },
        {
          name: "--pip-proxy",
          description:
            "Proxy for pip to use for extension dependencies in the form of [user:passwd@]proxy.server:port",
          args: { name: "pip-proxy" },
        },
      ],
    },
  ],
};

export default completion;
