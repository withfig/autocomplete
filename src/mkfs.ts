const completionSpec: Fig.Spec = {
  name: "mkfs",
  description:
    "Build a Linux filesystem on a device. This mkfs frontend dispatches to filesystem specific mkfs.<type> utils",
  args: [
    {
      name: "fs-options",
      description:
        "Filesystem-specific options to be passed to the real filesystem builder",
      isVariadic: true,
      isOptional: true,
    },
    {
      name: "device",
      description:
        "Device name (e.g. /dev/hda1, /dev/sdb2) or regular file that shall contain the filesystem",
      template: "filepaths",
    },
    {
      name: "size",
      description: "Number of blocks to be used for the filesystem",
      isOptional: true,
    },
  ],
  options: [
    {
      name: ["-t", "--type"],
      description:
        "Specify the type of filesystem to be built (default is ext2). Dispatches to the mkfs.<type> builder",
      args: {
        name: "type",
        suggestions: [
          "ext2",
          "ext3",
          "ext4",
          "vfat",
          "exfat",
          "xfs",
          "btrfs",
          "f2fs",
          "minix",
          "msdos",
          "ntfs",
          "swap",
        ],
      },
    },
    {
      name: "-V",
      description:
        "Produce verbose output, including all filesystem-specific commands that are executed. Specifying more than once inhibits execution of any filesystem-specific commands (only useful for testing). When -V is the only parameter, displays version information instead",
      isRepeatable: true,
    },
    {
      name: ["-h", "--help"],
      description: "Display help text and exit",
    },
  ],
};

export default completionSpec;
