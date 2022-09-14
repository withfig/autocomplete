const completionSpec: Fig.Spec = {
  name: "mknod",
  description: "Create device special file",
  subcommands: [
    {
      name: "c",
      description: "Create (c)haracter device",
    },
    {
      name: "b",
      description: "Create (b)lock device",
    },
  ],
  options: [
    {
      name: "-F",
      description: "Format",
      args: {
        name: "FORMAT",
        suggestions: [
          "native",
          "386bsd",
          "4bsd",
          "bsdos",
          "freebsd",
          "hpux",
          "isc",
          "linux",
          "netbsd",
          "npux",
          "isc",
          "linux",
          "netbsd",
          "osf1",
          "sco",
          "solaris",
          "sunos",
          "svr3",
          "svr4",
          "ultrix",
        ],
        default: "native",
      },
    },
  ],
  args: [
    {
      name: "FILE",
      description: "File to create",
    },
    {
      name: "major",
      description:
        "The major device number is an integer number which tells the kernel which device driver entry point to use",
    },
    {
      name: "minor | unit subunit",
      description:
        "The minor device number tells the kernel which one of several similar devices the node corresponds to; the unit and subunit numbers select a subset of a device; for example, the unit may specify a particular SCSI disk, and the subunit a partition on that disk",
    },
  ],
};
export default completionSpec;
