const capnames: string[] = [
  "bold",
  "clear",
  "cols",
  "colors",
  "cup",
  "el",
  "ed",
  "init",
  "lines",
  "longname",
  "reset",
  "rmcup",
  "setab",
  "setaf",
  "sgr0",
  "smcup",
];

const completionSpec: Fig.Spec = {
  name: "tput",
  description:
    "Initialize a terminal or query the terminfo database via capability names",
  args: {
    name: "capname",
    description:
      "A terminfo capability; init, reset and longname are also accepted",
    suggestions: capnames,
    isOptional: true,
  },
  options: [
    {
      name: ["-T", "-Ttype"],
      description:
        "Use the given terminal type instead of $TERM; LINES and COLUMNS are ignored",
      requiresSeparator: true,
      args: {
        name: "type",
        description: "Terminal type from the terminfo database",
      },
    },
    {
      name: "-S",
      description:
        "Read multiple capabilities (one per line) from standard input instead of the command line",
    },
    {
      name: "-V",
      description: "Report the ncurses version and exit",
    },
  ],
};

export default completionSpec;
