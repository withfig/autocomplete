export const monthSuggestions: Fig.Suggestion[] = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
].map((month) => ({ name: month, icon: "🗓", type: "arg" }));
const countryCodeSuggestion: Fig.Suggestion[] = [
  ["AL", "Albania"],
  ["AT", "Austria"],
  ["AU", "Australia"],
  ["BE", "Belgium"],
  ["BG", "Bulgaria"],
  ["CA", "Canada"],
  ["CH", "Switzerland"],
  ["CN", "China"],
  ["CZ", "Czech Republic"],
  ["DE", "Germany"],
  ["DK", "Denmark"],
  ["ES", "Spain"],
  ["FI", "Finland"],
  ["FR", "France"],
  ["GB", "United Kingdom"],
  ["GR", "Greece"],
  ["HU", "Hungary"],
  ["IS", "Iceland"],
  ["IT", "Italy"],
  ["JP", "Japan"],
  ["LI", "Lithuania"],
  ["LN", "Latin"],
  ["LU", "Luxembourg"],
  ["LV", "Latvia"],
  ["NL", "Netherlands"],
  ["NO", "Norway"],
  ["PL", "Poland"],
  ["PT", "Portugal"],
  ["RO", "Romania"],
  ["RU", "Russia"],
  ["SI", "Slovenia"],
  ["SW", "Sweden"],
  ["TR", "Turkey"],
  ["US", "United States"],
  ["YU", "Yugoslavia"],
].map((country) => ({
  name: country[0],
  description: country[1],
  icon: "🌎",
  type: "arg",
}));

const completionSpec: Fig.Spec = {
  name: "ncal",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
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
