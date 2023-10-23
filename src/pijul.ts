const completionSpec: Fig.Spec = {
  name: "pijul",
  description:
    "A distributed version control system that is at the same time theoretically sound, fast and easy to learn and use",
  subcommands: [
    {
      name: "add",
      description: "Adds a path to the tree",
      args: {
        name: "PATHS",
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
        name: "CHANGE",
        description:
          "The change that need to be applied. If this value is missing, read the change in text format on the standard input",
      },
      options: [
        {
          name: "--channel",
          description: "Apply change to this channel",
          args: {
            name: "CHANNEL",
          },
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
      name: "archive",
      description: "Creates an archive of the repository",
      options: [
        {
          name: "--change",
          description: "Apply these changes after switching to the channel",
          args: {
            name: "CHANGE",
          },
        },
        {
          name: "--channel",
          description: "Use this channel, instead of the current channel",
          args: {
            name: "CHANNEL",
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
          name: "-o",
          description: "Name of the output file",
          args: {
            name: "NAME",
          },
        },
        {
          name: "--prefix",
          description:
            "Append this path in front of each path inside the archive",
          args: {
            name: "PREFIX",
          },
        },
        {
          name: "--remote",
          description: "Ask the remote to send an archive",
          args: {
            name: "REMOTE",
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
          name: "--state",
          description: "Archive in this state",
          args: {
            name: "STATE",
          },
        },
        {
          name: "--umask",
          description:
            "Append this path in front of each path inside the archive",
          args: {
            name: "UMASK",
          },
        },
      ],
    },
    {
      name: "change",
      description: "Shows information about a particular change",
      args: {
        name: "HASH",
        description:
          "The hash of the change to show, or an unambiguous prefix thereof",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--repository",
          description:
            "Use the repository at PATH instead of the current directory",
          args: {
            name: "PATH",
          },
        },
      ],
    },
    {
      name: "channel",
      description: "Manages different channels",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a channel. The channel must not be the current channel",
          args: {
            name: "DELETE",
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
              name: "FROM",
            },
            {
              name: "TO",
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
      name: "clone",
      description: "Clones an existing pijul repository",
      args: [
        {
          name: "REMOTE",
          description: "Clone this remote",
        },
        {
          name: "PATH",
          description:
            "Path where to clone the repository. If missing, the inferred name of the remote repository is used",
        },
        {
          name: "SALT",
        },
      ],
      options: [
        {
          name: "--change",
          description: "Clone this change and its dependencies",
          args: {
            name: "CHANGE",
          },
        },
        {
          name: "--channel",
          description: "Set the remote channel [default: main]",
          args: {
            name: "CHANNEL",
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
          description: "Clone this path only",
          args: {
            name: "PARTIAL_PATHS",
          },
        },
        {
          name: "--state",
          description: "Clone this state",
          args: {
            name: "STATE",
          },
        },
      ],
    },
    {
      name: "credit",
      description:
        "Shows which change last affected each line of the given file(s)",
      args: {
        name: "FILE",
        description: "The file to annotate",
      },
      options: [
        {
          name: "--channel",
          description: "Use this channel instead of the current channel",
          args: {
            name: "CHANNEL",
          },
        },
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
      name: "diff",
      description: "Shows difference between two channels/changes",
      args: {
        name: "PREFIXES",
        description:
          "Only diff those paths (files or directories). If missing, diff the entire repository",
      },
      options: [
        {
          name: "--channel",
          description: "Compare with this channel",
          args: {
            name: "CHANNEL",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--json",
          description:
            "Output the diff in JSON format instead of the default change text format",
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
          name: ["-s", "--short"],
          description: "Show a short version of the diff",
        },
        {
          name: "--tag",
          description:
            "Add all the changes of this channel as dependencies (except changes implied transitively), instead of the minimal dependencies",
        },
        {
          name: ["-u", "--untracked"],
          description: "Include the untracked files",
        },
      ],
    },
    {
      name: "fork",
      description: "Create a new channel",
      args: {
        name: "TO",
        description: "The name of the new channel",
      },
      options: [
        {
          name: "--change",
          description: "Apply this change after creating the channel",
          args: {
            name: "CHANGE",
          },
        },
        {
          name: "--channel",
          description:
            "Make the new channel from this channel instead of the current channel",
          args: {
            name: "CHANNEL",
          },
        },
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
      name: "init",
      description: "Initializes an empty pijul repository",
      args: {
        name: "PATH",
        description: "Path where the repository should be initialized",
      },
      options: [
        {
          name: "--channel",
          description:
            "Set the name of the current channel (defaults to “main”)",
          args: {
            name: "CHANNEL",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-k", "--kind"],
          description:
            "Project kind; if Pijul knows about your project kind, the .ignore file will be populated with a conservative list of commonly ignored entries. Example: pijul init --kind=rust",
          args: {
            name: "KIND",
          },
        },
      ],
    },
    {
      name: "log",
      description: "Show the entire log of changes",
      args: {
        name: "FILTERS",
        description:
          "Filter log output, showing only log entries that touched the specified files. Accepted as a list of paths relative to your current directory. Currently, filters can only be applied when logging the channel that’s in use",
      },
      options: [
        {
          name: "--channel",
          description:
            "Show logs for this channel instead of the current channel",
          args: {
            name: "CHANNEL",
          },
        },
        {
          name: "--description",
          description: "Include full change description in the output",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--hash-only",
          description: "Only show the change hashes",
        },
        {
          name: "--limit",
          description: "Output at most this many changes",
          args: {
            name: "LIMIT",
          },
        },
        {
          name: "--offset",
          description: "Start after this many changes",
          args: {
            name: "OFFSET",
          },
        },
        {
          name: "--output-format",
          args: {
            name: "OUTPUT_FORMAT",
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
          name: "--state",
          description: "Include state identifiers in the output",
        },
      ],
    },
    {
      name: "ls",
    },
    {
      name: "mv",
    },
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
              description: "Print help information",
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
    {
      name: "reset",
      description:
        "Resets the working copy to the last recorded change.\nIn other words, discards all unrecorded changes",
      args: {
        name: "FILES",
        description: "Only reset these files",
      },
      options: [
        {
          name: "--channel",
          description:
            "Reset the working copy to this channel, and change the current channel to this channel",
          args: {
            name: "CHANNEL",
          },
        },
        {
          name: "--dry-run",
          description:
            "Print this file to the standard output, without modifying the repository (works for a single file only)",
        },
        {
          name: ["-f", "--force"],
          description: "Reset even if there are unrecorded changes",
        },
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
      name: "unrecord",
      description: "Unrecords a list of changes",
      args: {
        name: "CHANGE_ID",
        description: "The hash of a change (unambiguous prefixes are accepted)",
      },
      options: [
        {
          name: "--channel",
          description:
            "Unrecord changes from this channel instead of the current channel",
          args: {
            name: "CHANNEL",
          },
        },
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
        {
          name: "--reset",
          description:
            "Also undo the changes in the working copy (preserving unrecorded changes if there are any)",
        },
        {
          name: "--show-changes",
          description:
            "Show N changes in a text editor if no s were given. Defaults to the value of unrecord_changes in your global configuration",
          args: {
            name: "N",
          },
        },
      ],
    },
  ],
};
export default completionSpec;
