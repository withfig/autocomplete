const completionSpec: Fig.Spec = {
  name: "cal",
  description: "Displays a calendar and the date of Easter",
  subcommands: [
    {
      name: "my_subcommand",
      description: "Example subcommand",
      subcommands: [
        {
          name: "my_nested_subcommand",
          description:
            "Nested subcommand, example usage: 'cal my_subcommand my_nested_subcommand'",
        },
      ],
    },
  ],
  options: [
    {
      name: "-h",
      description: "Turns off highlighting of today",
    },
    {
      name: "-J",
      description:
        "Display Julian Calendar, if combined with the -e option, display date of Easter according to the Julian Calendar",
    },
    {
      name: "-e",
      description: "Display date of Easter (for western churches)",
    },
    {
      name: "-j",
      description:
        "Display Julian days (days one-based, numbered from January 1)",
    },
    {
      name: "-m",
      description: "Display the specified month",
      args: {
        name: "month",
        description: "The month",
      },
    },
    {
      name: "-o",
      description:
        "Display date of Orthodox Easter (Greek and Russian Orthodox Churches)",
    },
    {
      name: "-p",
      description:
        "Print the country codes and switching days from Julian to Gregorian Calendar as they are assumed by ncal",
    },
    {
      name: "-s",
      description:
        "Assume the switch from Julian to Gregorian Calendar at the date associated with the country_code",
      args: {
        name: "country_code",
        description: "The country code",
      },
    },
    {
      name: "-w",
      description: "Print the number of the week below each week column",
    },
    {
      name: "-y",
      description: "Display a calendar for the specified year",
    },
    {
      name: "-3",
      description:
        "Display the previous, current and next month surrounding today",
    },
    {
      name: "-A",
      description: "Display the number of months after the current month",
      args: {
        name: "number",
        description: "The number of months after the current month",
      },
    },
    {
      name: "-B",
      description: "Display the number of months before the current month",
      args: {
        name: "number",
        description: "The number of months after the current month",
      },
    },
    {
      name: "-C",
      description: "Switch to cal mode",
    },
    {
      name: "-N",
      description: "Switch to ncal mode",
    },
    {
      name: "-d",
      description:
        "Use yyyy-mm as the current date (for debugging of date selection)",
      args: {
        name: "yyyy-mm",
        description: "The current date",
      },
    },
    {
      name: "-H",
      description:
        "Use yyyy-mm-dd as the current date (for debugging of highlighting)",
      args: {
        name: "yyyy-mm-dd",
        description: "The current date",
      },
    },
  ],
};

export default completionSpec;
