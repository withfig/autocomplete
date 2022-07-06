const completionSpec: Fig.Spec = {
  name: "install",
  description:
    "The file(s) are copied to the target file or directory. If the destination is a directory, then the file is copied into directory with its original filename. If the target file already exists, it is either renamed to file.old if the -b option is given or overwritten if permissions allow. An alternate backup suffix may be specified via the -B option's argument",
  options: [
    {
      name: "-B",
      description: "Use suffix as the backup suffix if -b is given",
      args: {
        name: "suffix",
      },
    },
    {
      name: "-b",
      description:
        "Back up any existing files before overwriting them by renaming them to file.old. See -B for specifying a different backup suffix",
    },
    {
      name: "-C",
      description:
        "Copy the file.  If the target file already exists and the files are the same, then don't change the modification time of the target",
    },
    {
      name: "-c",
      description:
        "Copy the file.  This is actually the default.  The -c option is only included for backwards compatibility",
    },
    {
      name: "-d",
      description:
        "Create directories.  Missing parent directories are created as required",
    },
    {
      name: "-f",
      description:
        "Specify the target's file flags; see chflags(1) for a list of possible flags and their meanings",
    },
    {
      name: "-g",
      description: "Specify a group. A numeric GID is allowed",
    },
    {
      name: "-M",
      description: "Disable all use of mmap(2)",
    },
    {
      name: "-m",
      description:
        "Specify an alternate mode.  The default mode is set to rwxr-xr-x (0755). The specified mode may be either an octal or symbolic value; see chmod(1) for a description of possible mode values",
    },
    {
      name: "-o",
      description: "Specify an owner. A numeric UID is allowed",
    },
    {
      name: "-p",
      description:
        "Preserve the modification time. Copy the file, as if the -C (compare and copy) option is specified, except if the target file doesn't already exist or is different, then preserve the modification time of the file",
    },
    {
      name: "-S",
      description:
        "Safe copy. Normally, install unlinks an existing target before installing the new file. With the -S flag a temporary file is used and then renamed to be the target. The reason this is safer is that if the copy or rename fails, the existing target is left untouched",
    },
    {
      name: "-s",
      description:
        "Exec's the command strip(1) to strip binaries so that install can be portable over a large number of systems and binary types",
    },
    {
      name: "-v",
      description: "Causes install to show when -C actually installs something",
    },
  ],
  args: {
    name: "file1 file2 | file1 ... fileN directory | directory ...",
    description: "File(s) or directory(ies) installation directive",
    template: ["filepaths", "folders"],
  },
};
export default completionSpec;
