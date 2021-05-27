export const completion: Fig.Spec = {
  name: "rclone",
  description: "The Swiss army knife of cloud storage",
  subcommands: [
    {
      name: "about",
      description: "Get quota information from the remote.",
      args: [
        {
          name: "remote:",
        },
      ],
      options: [
        {
          name: "--full",
          description: "Full numbers instead of SI units",
        },
        {
          name: "--json",
          description: "Format output as JSON",
        },
      ],
    },
    {
      name: "authorize",
      description: "Remote authorization.",
      options: [
        {
          name: "--auth-no-open-browser",
          description: "Do not automatically open auth link in default browser",
        },
      ],
    },
    {
      name: "backend",
      description: "Run a backend specific command.",
      options: [
        {
          name: "--json",
          description: "Format output as JSON",
        },
      ],
    },
    {
      name: "cat",
      description: "Concatenates any files and sends them to stdout.",
      args: {
        name: "remote:path",
      },
      options: [
        {
          name: "--discard",
          description: "Discard the output instead of printing.",
        },
        {
          name: "--count",
          description: "Only print N characters. (default -1)",
          args: [
            {
              name: "int",
            },
          ],
        },
        {
          name: "--head",
          description: "Only print the first N characters.",
          args: [
            {
              name: "int",
            },
          ],
        },
        {
          name: "--offset",
          description: "Start printing at offset N (or from end if -ve)",
          args: [
            {
              name: "int",
            },
          ],
        },
        {
          name: "--tail",
          description: "Only print the last N characters.",
          args: [
            {
              name: "int",
            },
          ],
        },
      ],
    },
    {
      name: "check",
      description: "Checks the files in the source and destination match.",
      args: [
        {
          name: "source:path",
        },
        {
          name: "remote:path",
        },
      ],
      options: [
        {
          name: "--combined",
          description: "Make a combined report of changes to this file",
          args: { template: "filepaths" },
        },
        {
          name: "--differ",
          description: "Report all non-matching files to this file",
          args: { template: "filepaths" },
        },
        {
          name: "--download",
          description: "Check by downloading rather than with hash.",
        },
        {
          name: "--error",
          description:
            "Report all files with errors (hashing or reading) to this file",
          args: { template: "filepaths" },
        },
        {
          name: "--match",
          description: "Report all matching files to this file",
          args: { template: "filepaths" },
        },
        {
          name: "--missing-on-dst",
          description:
            "Report all files missing from the destination to this file",
          args: { template: "filepaths" },
        },
        {
          name: "--missing-on-src",
          description: "Report all files missing from the source to this file",
          args: { template: "filepaths" },
        },
        {
          name: "--one-way",
          description: "Check one way only, source files must exist on remote",
        },
      ],
    },
    {
      name: "cleanup",
      description: "Clean up the remote if possible.",
      args: {},
    },
    {
      name: "config",
      description: "Enter an interactive configuration session.",
    },
    {
      name: "copy",
      description: "Copy files from source to dest, skipping already copied.",
      args: [{}, {}],
    },
    {
      name: "copyto",
      description: "Copy files from source to dest, skipping already copied.",
      args: [{}, {}],
    },
    {
      name: "copyurl",
      description: "Copy url content to dest.",
      args: [{}, {}],
    },
    {
      name: "cryptcheck",
      description: "Cryptcheck checks the integrity of a crypted remote.",
      args: [{}, {}],
    },
    {
      name: "cryptdecode",
      description: "Cryptdecode returns unencrypted file names.",
      args: [{}, { variadic: true }],
    },
    {
      name: "dedupe",
      description:
        "Interactively find duplicate filenames and delete/rename them.",
      args: {},
    },
    {
      name: "delete",
      description: "Remove the files in path.",
      args: {},
    },
    {
      name: "deletefile",
      description: "Remove a single file from remote.",
      args: {},
    },
    {
      name: "genautocomplete",
      description: "Output completion script for a given shell.",
      args: {},
    },
    {
      name: "gendocs",
      description: "Output markdown docs for rclone to the directory supplied.",
      args: { template: "folders" },
    },
    {
      name: "hashsum",
      description: "Produces a hashsum file for all the objects in the path.",
      args: [
        { suggestions: ["MD5", "SHA-1", "DropboxHash", "QuickXorHash"] },
        {},
      ],
    },
    {
      name: "help",
      description: "Show help for rclone commands, flags and backends.",
      args: {},
    },
    {
      name: "link",
      description: "Generate public link to file/folder.",
      args: {},
    },
    {
      name: "listremotes",
      description: "List all the remotes in the config file.",
      options: [
        {
          name: "--long",
          description: "Show the type as well as names.",
        },
      ],
    },
    {
      name: "ls",
      description: "List the objects in the path with size and path.",
      args: {},
    },
    {
      name: "lsd",
      description: "List all directories/containers/buckets in the path.",
      args: {},
    },
    {
      name: "lsf",
      description:
        "List directories and objects in remote:path formatted for parsing.",
      args: {},
    },
    {
      name: "lsjson",
      description: "List directories and objects in the path in JSON format.",
      args: {},
    },
    {
      name: "lsl",
      description:
        "List the objects in path with modification time, size and path.",
      args: {},
    },
    {
      name: "md5sum",
      description: "Produces an md5sum file for all the objects in the path.",
      args: {},
    },
    {
      name: "mkdir",
      description: "Make the path if it doesn't already exist.",
      args: {},
    },
    {
      name: "mount",
      description: "Mount the remote as file system on a mountpoint.",
      args: [{}, { template: "folders" }],
    },
    {
      name: "move",
      description: "Move files from source to dest.",
      args: {},
    },
    {
      name: "moveto",
      description: "Move file or directory from source to dest.",
      args: {},
    },
    {
      name: "ncdu",
      description: "Explore a remote with a text based user interface.",
      args: {},
    },
    {
      name: "obscure",
      description: "Obscure password for use in the rclone config file.",
      args: {},
    },
    {
      name: "purge",
      description: "Remove the path and all of its contents.",
      args: {},
    },
    {
      name: "rc",
      description: "Run a command against a running rclone.",
      args: {},
    },
    {
      name: "rcat",
      description: "Copies standard input to file on remote.",
      args: {},
    },
    {
      name: "rcd",
      description: "Run rclone listening to remote control commands only.",
      args: {},
    },
    {
      name: "rmdir",
      description: "Remove the empty directory at path.",
      args: {},
    },
    {
      name: "rmdirs",
      description: "Remove empty directories under the path.",
      args: {},
    },
    {
      name: "selfupdate",
      description: "Update the rclone binary.",
    },
    {
      name: "serve",
      description: "Serve a remote over a protocol.",
      args: {},
    },
    {
      name: "settier",
      description: "Changes storage class/tier of objects in remote.",
      args: [{}, {}],
    },
    {
      name: "sha1sum",
      description: "Produces an sha1sum file for all the objects in the path.",
      args: {},
    },
    {
      name: "size",
      description:
        "Prints the total size and number of objects in remote:path.",
      args: {},
    },
    {
      name: "sync",
      description:
        "Make source and dest identical, modifying destination only.",
      args: [{}, {}],
    },
    {
      name: "test",
      description: "Run a test command",
      args: {},
    },
    {
      name: "touch",
      description: "Create new file or change file modification time.",
      args: {},
    },
    {
      name: "tree",
      description: "List the contents of the remote in a tree like fashion.",
      args: {},
    },
    {
      name: "version",
      description: "Show the version number.",
    },
  ],
  options: [
    {
      name: "--version",
      description: "View your current rclone version",
    },
    {
      name: "--help",
      description: "Show help for rclone commands, flags and backends.",
    },
  ],
};
