const completionSpec: Fig.Spec = {
  name: "who",
  description: "Display who is logged in",
  options: [
    {
      name: "-a",
      description: "Same as -bdlprTtu",
      insertValue: "-bdlprTtu",
      isDangerous: false,
    },
    {
      name: "-b",
      description: "Time of last system boot",
      isDangerous: false,
    },
    {
      name: "-d",
      description: "Print dead processes",
      isDangerous: false,
    },
    {
      name: "-H",
      description: "Write column headings above the regular output",
      isDangerous: false,
    },
    {
      name: "-l",
      description: "Print system login processes (unsupported)",
      isDangerous: false,
    },
    {
      name: "-m",
      description: "Only print information about the current terminal",
      isDangerous: false,
    },
    {
      name: "-p",
      description: "Print active processes spawned by launchd(8) (unsupported)",
      isDangerous: false,
    },
    {
      name: "-q",
      description:
        "'Quick mode': List only names and number of users currently logged on",
      isDangerous: false,
      exclusiveOn: [
        "-a",
        "-b",
        "-d",
        "-H",
        "-l",
        "-m",
        "-p",
        "-r",
        "-s",
        "-T",
        "-t",
        "-u",
      ],
    },
    {
      name: "-r",
      description: "Print the current runlevel",
      isDangerous: false,
    },
    {
      name: "-s",
      description:
        "List only the name, line and time fields (this is the default)",
      isDangerous: false,
    },
    {
      name: "-T",
      description:
        "Print a character after the user name indicating the state of the terminal line: '+' writable, '-' not writable, '?' bad",
      isDangerous: false,
    },
    {
      name: "-t",
      description: "Print last system clock change (unsupported)",
      isDangerous: false,
    },
    {
      name: "-u",
      description:
        "Print the idel time for each user and the associated process ID",
      isDangerous: false,
    },
  ],
  args: {
    name: "file",
    description:
      "By default, who gathers information from the file /var/run/utmpx; an alternative file may be specified",
    isDangerous: false,
    isOptional: true,
  },
};
export default completionSpec;
