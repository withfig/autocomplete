const completionSpec: Fig.Spec = {
  name: "pijul",
  description:
    "Welcome to the Pijul book, an introduction to Pijul, a distributed version control system that is at the same time theoretically sound, fast and easy to learn and use",
  subcommands: [
    {
      name: "add",
      description:
        "Adds a path to the tree. Pijul has an internal tree to represent the files currently tracked. This command adds files and directories to that tree",
      options: [
        {
          name: ["-f", "--force"],
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-r", "--recursive"],
        },
      ],
    },
    {
      name: "pull",
      description: "Pulls changes from a remote upstream",
      args: [
        {
          name: "FROM",
          description: "Pulls from this remote",
          isOptional: true,
        },
        {
          name: "CHANGES",
          description:
            "Pull changes from the local repository, not necessarily from a channel",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-a", "--all"],
          description: "Pull all changes",
        },
        {
          name: ["-f", "--force-cache"],
          description:
            "Force an update of the local remote cache. May effect some reporting of unrecords/concurrent changes in the remote",
        },
        {
          name: "--from-channel",
          description: "Pull from this remote channel",
          args: {
            name: "FROM_CHANNEL",
          },
        },
        {
          name: "--full",
          description: "Download full changes, even when not necessary",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "-k",
          description:
            "Do not check certificates (HTTPS remotes only, this option might be dangerous)",
        },
        {
          name: "--path",
          description: "Only pull to these paths",
          args: {
            name: "PATH",
          },
        },
        {
          name: "--repository",
          description:
            "Set the repository where this command should run. Defaults to the first ancestor of the current directory that contains a .pijul directory",
          args: {
            name: "REPO_PATH",
          },
        },
        {
          name: "--to-channel",
          description: "Pull into this channel instead of the current channel",
          args: {
            name: "TO_CHANNEL",
          },
        },
      ],
    },
  ],
};
export default completionSpec;
