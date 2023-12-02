// TODO: dynamically suggest paths
const remote: Fig.Arg = {
  name: "remote:",
  generators: {
    script: ["rclone", "listremotes"],
    postProcess: (list) => list.split("\n").map((remote) => ({ name: remote })),
  },
};
const hashes = [
  "MD5",
  "SHA-1",
  "DropboxHash",
  "QuickXorHash",
  "Whirlpool",
  "CRC-32",
  "MailruHash",
];
const listOptions: Fig.Option[] = [
  {
    name: "--dirs-only",
    description: "Only list directories",
  },
  {
    name: "--files-only",
    description: "Only list files",
  },
  {
    name: ["--recursive", "-R"],
    description: "Recurse into the listing",
  },
];
const cryptedremote: Fig.Arg = {
  name: "cryptedremote",
  generators: remote.generators,
  // TODO filter by crypted type
};
// TODO dynamically sugest path
const remotePath: Fig.Arg = {
  name: "remote:path",
  generators: remote.generators,
};
const sourcePath: Fig.Arg = {
  name: "source:path",
  generators: remote.generators,
};
const destPath: Fig.Arg = {
  name: "dest:path",
  generators: remote.generators,
};
const checkFlags: Array<Fig.Option> = [
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
    description: "Report all files missing from the destination to this file",
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
];

const completionSpec: Fig.Spec = {
  name: "rclone",
  description: "The Swiss army knife of cloud storage",
  subcommands: [
    {
      name: "about",
      description: "Get quota information from the remote",
      args: remote,
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
      description: "Remote authorization",
      options: [
        {
          name: "--auth-no-open-browser",
          description: "Do not automatically open auth link in default browser",
        },
      ],
    },
    {
      name: "backend",
      description: "Run a backend specific command",
      options: [
        {
          name: "--json",
          description: "Format output as JSON",
        },
      ],
    },
    {
      name: "cat",
      description: "Concatenates any files and sends them to stdout",
      args: remotePath,
      options: [
        {
          name: "--discard",
          description: "Discard the output instead of printing",
        },
        {
          name: "--count",
          description: "Only print N characters. (default -1)",
          args: {
            name: "int",
          },
        },
        {
          name: "--head",
          description: "Only print the first N characters",
          args: {
            name: "int",
          },
        },
        {
          name: "--offset",
          description: "Start printing at offset N (or from end if -ve)",
          args: {
            name: "int",
          },
        },
        {
          name: "--tail",
          description: "Only print the last N characters",
          args: {
            name: "int",
          },
        },
      ],
    },
    {
      name: "check",
      description: "Checks the files in the source and destination match",
      args: [sourcePath, remotePath],
      options: [
        {
          name: "--download",
          description: "Check by downloading rather than with hash",
        },
        ...checkFlags,
      ],
    },
    {
      name: "cleanup",
      description: "Clean up the remote if possible",
      args: remotePath,
    },
    {
      name: "config",
      description: "Enter an interactive configuration session",
      subcommands: [
        {
          name: "create",
          description: "Create a new remote with name, type and options",
          args: [
            {
              name: "name",
            },
            {
              name: "type",
            },
          ],
        },
      ],
    },
    {
      name: "copy",
      description: "Copy files from source to dest, skipping already copied",
      args: [sourcePath, destPath],
    },
    {
      name: "copyto",
      description: "Copy files from source to dest, skipping already copied",
      args: [sourcePath, destPath],
    },
    {
      name: "copyurl",
      description: "Copy url content to dest",
      args: [
        {
          name: "url",
        },
        destPath,
      ],
    },
    {
      name: "cryptcheck",
      description: "Cryptcheck checks the integrity of a crypted remote",
      args: [remotePath, cryptedremote],
      options: checkFlags,
    },
    {
      name: "cryptdecode",
      description: "Cryptdecode returns unencrypted file names",
      args: [
        cryptedremote,
        {
          name: "encryptedfilename",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: "--reverse",
          description: "Reverse cryptdecode, encrypts filenames",
        },
      ],
    },
    {
      name: "dedupe",
      description:
        "Interactively find duplicate filenames and delete/rename them",
      args: remotePath,
      options: [
        {
          name: "--by-hash",
          description: "Find identical hashes rather than names",
        },
        {
          name: "--dedupe-mode",
          description: "Dedupe mode",
          args: {
            name: "mode",
            suggestions: [
              {
                name: "interactive",
                description: "Interactive",
              },
              {
                name: "skip",
                description: "Removes identical files then skips anything left",
              },
              {
                name: "rename",
                description:
                  "Removes identical files then renames the rest to be different",
              },
              {
                name: "list",
                description:
                  "Lists duplicate dirs and files only and changes nothing",
              },
              ...["first", "newest", "oldest", "largest", "smallest"].map(
                (_) => ({
                  name: _,
                  description: `removes identical files then keeps the ${_} one.`,
                })
              ),
            ],
          },
        },
      ],
    },
    {
      name: "delete",
      description: "Remove the files in path",
      isDangerous: true,
      args: remotePath,
      options: [
        {
          name: "--rmdirs",
          description:
            "Rmdirs removes empty directories but leaves root intact",
        },
      ],
    },
    {
      name: "deletefile",
      isDangerous: true,
      description: "Remove a single file from remote",
      args: remotePath,
    },
    {
      name: "genautocomplete",
      description: "Output completion script for a given shell",
      subcommands: [
        ...["bash", "fish", "zsh"].map((_) => ({
          name: _,
          description: `Output ${_} completion script for rclone.`,
          args: {
            name: "output_file",
            isOptional: true,
            description:
              'If output_file is "-", then the output will be written to stdout',
          },
        })),
      ],
    },
    {
      name: "gendocs",
      description: "Output markdown docs for rclone to the directory supplied",
      args: {
        name: "output_directory",
        template: "folders",
      },
    },
    {
      name: "hashsum",
      description: "Produces a hashsum file for all the objects in the path",
      args: [
        {
          name: "hash",
          suggestions: hashes,
        },
        remotePath,
      ],
      options: [
        {
          name: "--base64",
          description: "Output base64 encoded hashsum",
        },
        {
          name: "--download",
          description:
            "Download the file and hash it locally; if this flag is not specified, the hash is requested from the remote",
        },
        {
          name: "--output-file",
          description: "Output hashsums to a file rather than the terminal",
          args: {
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Show help for rclone commands, flags and backends",
      subcommands: [
        {
          name: "flags",
          description: "List of global flags",
        },
      ],
    },
    {
      name: "link",
      description: "Generate public link to file/folder",
      args: remotePath,
      options: [
        {
          name: "--expire",
          description:
            "The amount of time that the link will be valid (default 100y)",
          args: {
            name: "duration",
          },
        },
        {
          name: "--unlink",
          description: "Remove existing public link to file/folder",
        },
      ],
    },
    {
      name: "listremotes",
      description: "List all the remotes in the config file",
      options: [
        {
          name: "--long",
          description: "Show the type as well as names",
        },
      ],
    },
    {
      name: "ls",
      description: "List the objects in the path with size and path",
      args: remotePath,
    },
    {
      name: "lsd",
      description: "List all directories/containers/buckets in the path",
      args: remotePath,
      options: [
        {
          name: ["-R", "--recursive"],
        },
      ],
    },
    {
      name: "lsf",
      description:
        "List directories and objects in remote:path formatted for parsing",
      args: {
        ...remotePath,
      },
      options: [
        ...listOptions,
        {
          name: "--absolute",
          description: "Put a leading / in front of path names",
        },
        {
          name: "--csv",
          description: "Output in CSV format",
        },
        {
          name: ["-d", "--dir-slash"],
          description: "Append a slash to directory names. (default true)",
        },
        {
          name: ["--format", "-F"],
          description: 'Output format - see  help for details (default "p")',
          args: {
            name: "format",
            suggestions: [
              ...[
                ["p", "path"],
                ["s", "size"],
                ["t", "modification time"],
                ["h", "hash"],
                ["i", "ID of object"],
                ["o", "Original ID of underlying object"],
                ["m", "MimeType of object if known"],
              ].map((_) => ({
                name: _[0],
                description: _[1],
              })),
            ],
          },
        },
        {
          name: "--hash",
          description:
            'Use this hash when h is used in the format (default "MD5")',
          args: {
            name: "hash",
            suggestions: hashes,
          },
        },
        {
          name: ["--separator", "-s"],
          description: 'Separator for the items in the format. (default ";")',
          args: {
            name: "separator",
          },
        },
      ],
    },
    {
      name: "lsjson",
      description: "List directories and objects in the path in JSON format",
      args: remotePath,
      options: [
        ...listOptions,
        {
          name: ["--encrypted", "-M"],
          description: "Show the encrypted names",
        },
        {
          name: "--hash",
          description: "Include hashes in the output (may take longer)",
        },
        {
          name: "--hash-type",
          description: "Show only this hash type (may be repeated)",
          args: {
            name: "hashes",
            suggestions: hashes,
          },
        },
        {
          name: "--no-mimetype",
          description: "Don't read the mime type (can speed things up)",
        },
        {
          name: "--no-modtime",
          description: "Don't read the modification time (can speed things up)",
        },
        {
          name: "--original",
          description: "Show the ID of the underlying Object",
        },
      ],
    },
    {
      name: "lsl",
      description:
        "List the objects in path with modification time, size and path",
      args: remotePath,
    },
    {
      name: "md5sum",
      description: "Produces an md5sum file for all the objects in the path",
      args: remotePath,
      options: [
        {
          name: "--base64",
          description: "Output base64 encoded hashsum",
        },
        {
          name: "--download",
          description:
            "Download the file and hash it locally; if this flag is not specified, the hash is requested from the remote",
        },
        {
          name: "--output-file",
          description: "Output hashsums to a file rather than the terminal",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "mkdir",
      description: "Make the path if it doesn't already exist",
      args: remotePath,
    },
    {
      name: "mount",
      description: "Mount the remote as file system on a mountpoint",
      args: [
        remotePath,
        {
          // TODO: suggest only empty directories
          name: "mountpoint",
          template: "folders",
        },
      ],
    },
    {
      name: "move",
      description: "Move files from source to dest",
      args: {},
    },
    {
      name: "moveto",
      description: "Move file or directory from source to dest",
      args: {},
    },
    {
      name: "ncdu",
      description: "Explore a remote with a text based user interface",
      args: {},
    },
    {
      name: "obscure",
      description: "Obscure password for use in the rclone config file",
      args: {},
    },
    {
      name: "purge",
      description: "Remove the path and all of its contents",
      isDangerous: true,
      args: {},
    },
    {
      name: "rc",
      description: "Run a command against a running rclone",
      args: {},
    },
    {
      name: "rcat",
      description: "Copies standard input to file on remote",
      args: {},
    },
    {
      name: "rcd",
      description: "Run rclone listening to remote control commands only",
      args: {},
    },
    {
      name: "rmdir",
      description: "Remove the empty directory at path",
      args: {},
    },
    {
      name: "rmdirs",
      description: "Remove empty directories under the path",
      args: {},
    },
    {
      name: "selfupdate",
      description: "Update the rclone binary",
    },
    {
      name: "serve",
      description: "Serve a remote over a protocol",
      args: {},
    },
    {
      name: "settier",
      description: "Changes storage class/tier of objects in remote",
      args: [{}, {}],
    },
    {
      name: "sha1sum",
      description: "Produces an sha1sum file for all the objects in the path",
      args: {},
    },
    {
      name: "size",
      description: "Prints the total size and number of objects in remote:path",
      args: {},
    },
    {
      name: "sync",
      description: "Make source and dest identical, modifying destination only",
      args: [sourcePath, destPath],
    },
    {
      name: "test",
      description: "Run a test command",
      args: {},
    },
    {
      name: "touch",
      description: "Create new file or change file modification time",
      args: {},
    },
    {
      name: "tree",
      description: "List the contents of the remote in a tree like fashion",
      args: {},
    },
    {
      name: "version",
      description: "Show the version number",
    },
  ],
  options: [
    {
      name: "--version",
      description: "View your current rclone version",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for rclone commands, flags and backends",
    },
  ],
};

export default completionSpec;
