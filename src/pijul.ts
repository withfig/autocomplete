const completionSpec: Fig.Spec = {
  name: "pijul",
  description:
    "Welcome to the Pijul book, an introduction to Pijul, a distributed version control system that is at the same time theoretically sound, fast and easy to learn and use",
  subcommands: [
    // --------------------------------------- DUAN ---------------------------------------
    {
      name: "add",
      description:
        "Adds a path to the tree. Pijul has an internal tree to represent the files currently tracked. This command adds files and directories to that tree",
      args: {
        name: "<PATHS>...",
        description: "Paths to add to the internal tree",
      },
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
      name: "apply",
      description: "Applies changes to a channel",
      args: {
        name: "<CHANGE>...",
        description:
          "The change that need to be applied. If this value is missing, read the change in text format on the standard input",
      },
      options: [
        {
          name: "--channel <CHANNEL>",
          description: "--deps-only",
        },
        {
          name: "--deps-only",
          description:
            "Only apply the dependencies of the change, not the change itself. Only applicable for a single change",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--repository <REPO_PATH>",
          description:
            "Set the repository where this command should run. Defaults to the first ancestor of the current directory that contains a .pijul directory",
        },
      ],
    },
    {
      name: "archive",
      description: "Creates an archive of the repository",
      options: [
        {
          name: "--change <CHANGE>",
          description: "Apply these changes after switching to the channel",
        },
        {
          name: "--channel <CHANNEL>",
          description: "Use this channel, instead of the current channel",
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
          name: "-o <NAME>",
          description: "Name of the output file",
        },
        {
          name: "--prefix <PREFIX>",
          description:
            "Append this path in front of each path inside the archive",
        },
        {
          name: "--remote <REMOTE>",
          description: "Ask the remote to send an archive",
        },
        {
          name: "--repository <REPO_PATH>",
          description:
            "Set the repository where this command should run. Defaults to the first ancestor of the current directory that contains a .pijul directory",
        },
        {
          name: "--state <STATE>",
          description: "Archive in this state",
        },
        {
          name: "--umask <UMASK>",
          description:
            "Append this path in front of each path inside the archive",
        },
      ],
    },
    {
      name: "change",
      description: "Shows information about a particular change",
      args: {
        name: "<HASH>",
        description:
          "The hash of the change to show, or an unambiguous prefix thereof",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--repository <PATH>",
          description:
            "Use the repository at PATH instead of the current directory",
        },
      ],
    },
    {
      name: "channel",
      description: "Manages different channels",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--repository <REPO_PATH>",
          description:
            "Set the repository where this command should run. Defaults to the first ancestor of the current directory that contains a .pijul directory",
        },
      ],
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a channel. The channel must not be the current channel",
          args: {
            name: "<DELETE>",
          },
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
        },
        {
          name: "new",
          description: "Create a new, empty channel",
        },
        {
          name: "rename",
          description: "Rename a channel",
          args: [
            {
              name: "<FROM>",
            },
            {
              name: "<TO>",
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
        },
        {
          name: "switch",
          description:
            "Switch to a channel. There must not be unrecorded changes in the working copy",
        },
      ],
    },
    {
      name: "clone",
      description: "Clones an existing pijul repository",
      args: [
        {
          name: "<REMOTE>",
          description: "Clone this remote",
        },
        {
          name: "<PATH>",
          description:
            "Path where to clone the repository. If missing, the inferred name of the remote repository is used",
        },
        {
          name: "<SALT>",
        },
      ],
      options: [
        {
          name: "--change <CHANGE>",
          description: "Clone this change and its dependencies",
        },
        {
          name: "--channel <CHANNEL>",
          description: "Set the remote channel [default: main]",
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
          name: "--path <PARTIAL_PATHS>",
          description: "Clone this path only",
        },
        {
          name: "--state <STATE>",
          description: "Clone this state",
        },
      ],
    },
    // --------------------------------------- NICK ---------------------------------------

    // --------------------------------------- ANDY ---------------------------------------
    {
      name: "pull",
      description: "Pulls changes from a remote upstream",
      args: [
        {
          name: "FROM",
          description: "Pulls from this remote",
        },
        {
          name: "CHANGES",
          description:
            "Pull changes from the local repository, not necessarily from a channel",
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
    {
      name: "push",
      description: "Pushes changes to a remote upstream",
      args: [
        {
          name: "TO",
          description: "Push to this remote",
        },
        {
          name: "CHANGES",
          description: "Push only these changes",
        },
      ],
      options: [
        {
          name: ["-a", "--all"],
          description: "Push all changes",
        },
        {
          name: ["-f", "--force-cache"],
          description:
            "Force an update of the local remote cache. May effect some reporting of unrecords/concurrent changes in the remote",
        },
        {
          name: "--from-channel",
          description: "Push from this channel instead of the default channel",
          args: {
            name: "FROM_CHANNEL",
          },
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
          description: "Push changes only relating to these paths",
          args: {
            name: "PATH",
          },
        },
        {
          name: "--repository",
          description:
            "Path to the repository. Uses the current repository if the argument is omitted",
          args: {
            name: "REPO_PATH",
          },
        },
        {
          name: "--to-channel",
          description:
            "Push to this remote channel instead of the remote’s default channel",
          args: {
            name: "TO_CHANNEL",
          },
        },
      ],
    },
    {
      name: "record",
      description: "Creates a new change",
      args: {
        name: "PREFIXES",
        description: "Paths in which to record the changes",
      },
      options: [
        {
          name: ["-a", "--all"],
          description: "Record all paths that have changed",
        },
        {
          name: "--amend",
          description: "Amend this change instead of creating a new change",
          args: {
            name: "AMEND",
          },
        },
        {
          name: "--author",
          description: "Set the author field",
          args: {
            name: "AUTHOR",
          },
        },
        {
          name: "--channel",
          description:
            "Record the change in this channel instead of the current channel",
          args: {
            name: "CHANNEL",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--ignore-missing",
          description: "Ignore missing (deleted) files",
        },
        {
          name: ["-m", "--message"],
          description: "Set the change message",
          args: {
            name: "MESSAGE",
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
          name: "--timestamp",
          description: "Set the timestamp field",
          args: {
            name: "TIMESTAMP",
          },
        },
        {
          name: "--working-copy",
          args: {
            name: "WORKING_COPY",
          },
        },
      ],
    },
    {
      name: "remote",
      description: "Manages remote repositories",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the remote",
          args: {
            name: "REMOTE",
          },
          options: [
            {
              name: ["-h", "--help"],
              description: "Pirnt help information",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--repository",
          description:
            "Set the repository where this command should run. Defaults to the first ancestor of the current directory that contains a .pijul directory",
          args: {
            name: "REPO_PATH",
          },
        },
      ],
    },
    {
      name: "remove",
      description:
        "Removes a file from the tree of tracked files (pijul record will then record this as a deletion)",
      args: {
        name: "PATHS",
        description: "The paths need to be removed",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
  ],
};
export default completionSpec;
