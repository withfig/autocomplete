const completionSpec: Fig.Spec = {
  name: "who",
  description: "Display who is logged in",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: "-a",
      description: "Same as -bdlprTtu",
      insertValue: "-bdlprTtu",
      args: {
        isOptional: true,
      },
    },
    {
      name: "-b",
      description: "Time of last system boot",
      args: {
        isOptional: true,
      },
    },
    {
      name: "-d",
      description: "Print dead processes",
      args: {
        isOptional: true,
      },
    },
    {
      name: "-H",
      description: "Write column headings above the regular output",
      args: {
        isOptional: true,
      },
    },
    {
      name: "-l",
      description: "Print system login processes (unsupported)",
      args: {
        isOptional: true,
      },
    },
    {
      name: "-m",
      description: "Only print information about the current terminal",
      args: {
        isOptional: true,
      },
    },
    {
      name: "-p",
      description: "Print active processes spawned by launchd(8) (unsupported)",
      args: {
        isOptional: true,
      },
    },
    {
      name: "-q",
      description:
        "'Quick mode': List only names and number of users currently logged on",
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
      args: {
        isDangerous: false,
        isOptional: true,
      },
    },
    {
      name: "-r",
      description: "Print the current runlevel",
      args: {
        isOptional: true,
      },
    },
    {
      name: "-s",
      description:
        "List only the name, line and time fields (this is the default)",
      args: {
        isOptional: true,
      },
    },
    {
      name: "-T",
      description:
        "Print a character after the user name indicating the state of the terminal line: '+' writable, '-' not writable, '?' bad",
      args: {
        isOptional: true,
      },
    },
    {
      name: "-t",
      description: "Print last system clock change (unsupported)",
      args: {
        isOptional: true,
      },
    },
    {
      name: "-u",
      description:
        "Print the idel time for each user and the associated process ID",
      args: {
        isOptional: true,
      },
    },
  ],
  args: {
    name: "file",
    description:
      "By default, who gathers information from the file /var/run/utmpx; an alternative file may be specified",
    isOptional: true,
  },
};
export default completionSpec;
