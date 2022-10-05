const monthSuggestions: Fig.Suggestion[] = [
  {
    name: "january",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "february",
    icon: "🗓",
  },
  {
    name: "march",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "april",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "may",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "june",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "july",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "august",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "september",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "october",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "november",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "december",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "1",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "2",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "3",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "4",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "5",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "6",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "7",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "8",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "9",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "10",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "11",
    icon: "🗓",
    type: "arg",
  },
  {
    name: "12",
    icon: "🗓",
    type: "arg",
  },
];

const countryCodeSuggestion: Fig.Suggestion[] = [
  { name: "AL", description: "Albania", icon: "🌎" },
  { name: "AT", description: "Austria", icon: "🌎" },
  { name: "AU", description: "Australia", icon: "🌎" },
  { name: "BE", description: "Belgium", icon: "🌎" },
  { name: "BG", description: "Bulgaria", icon: "🌎" },
  { name: "CA", description: "Canada", icon: "🌎" },
  { name: "CH", description: "Switzerland", icon: "🌎" },
  { name: "CN", description: "China", icon: "🌎" },
  { name: "CZ", description: "Czech Republic", icon: "🌎" },
  { name: "DE", description: "Germany", icon: "🌎" },
  { name: "DK", description: "Denmark", icon: "🌎" },
  { name: "ES", description: "Spain", icon: "🌎" },
  { name: "FI", description: "Finland", icon: "🌎" },
  { name: "FR", description: "France", icon: "🌎" },
  { name: "GB", description: "United Kingdom", icon: "🌎" },
  { name: "GR", description: "Greece", icon: "🌎" },
  { name: "HU", description: "Hungary", icon: "🌎" },
  { name: "IS", description: "Iceland", icon: "🌎" },
  { name: "IT", description: "Italy", icon: "🌎" },
  { name: "JP", description: "Japan", icon: "🌎" },
  { name: "LI", description: "Lithuania", icon: "🌎" },
  { name: "LN", description: "Latin", icon: "🌎" },
  { name: "LU", description: "Luxembourg", icon: "🌎" },
  { name: "LV", description: "Latvia", icon: "🌎" },
  { name: "NL", description: "Netherlands", icon: "🌎" },
  { name: "NO", description: "Norway", icon: "🌎" },
  { name: "PL", description: "Poland", icon: "🌎" },
  { name: "PT", description: "Portugal", icon: "🌎" },
  { name: "RO", description: "Romania", icon: "🌎" },
  { name: "RU", description: "Russia", icon: "🌎" },
  { name: "SI", description: "Slovenia", icon: "🌎" },
  { name: "SW", description: "Sweden", icon: "🌎" },
  { name: "TR", description: "Turkey", icon: "🌎" },
  { name: "US", description: "United States", icon: "🌎" },
  { name: "YU", description: "Yugoslavia", icon: "🌎" },
];

const completionSpec: Fig.Spec = {
  name: "ncal",
  description: "Displays a calendar and the date of Easter",
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
      description:
        "Display the specified month.  If month is specified as a decimal number, it may be followed by the letter ‘f’ or ‘p’ to indicate the following or preceding month of that number, respectively",
      exclusiveOn: ["-y", "-p"],
      args: {
        name: "month",
        description:
          "Display the specified month.  If month is specified as a decimal number, it may be followed by the letter ‘f’ or ‘p’ to indicate the following or preceding month of that number, respectively",
        suggestions: monthSuggestions,
      },
    },
    {
      name: "-y",
      description: "Display a calendar for the specified year",
      args: {
        name: "year",
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
        "Print the country codes and switching days from Julian to Gregorian Calendar as they are assumed by ncal.  The country code as determined from the local environment is marked with an asterisk",
    },
    {
      name: "-s",
      description:
        "Assume the switch from Julian to Gregorian Calendar at the date associated with the country_code.  If not specified, ncal tries to guess the switch date from the local environment or falls back to September 2, 1752.  This was when Great Britain and her colonies switched to the Gregorian Calendar",
      args: {
        name: "country_code",
        suggestions: countryCodeSuggestion,
      },
    },
    {
      name: "-w",
      description: "Print the number of the week below each week column",
    },
    {
      name: "-3",
      description:
        "Display the previous, current and next month surrounding today",
      exclusiveOn: ["-y", "-A", "-B", "-p"],
    },
    {
      name: "-A",
      description: "Display the number of months after the current month",
      args: {
        name: "number",
        description: "Number of months to display",
      },
    },
    {
      name: "-B",
      description: "Display the number of months before the current month",
      args: {
        name: "number",
        description: "Number of months to display",
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
        description: "Date to use as the current date",
      },
    },
    {
      name: "-H",
      description:
        "Use yyyy-mm-dd as the current date (for debugging of highlighting)",
      args: {
        name: "yyyy-mm-dd",
        description: "Date to use as the current date",
      },
    },
  ],
};
export default completionSpec;
