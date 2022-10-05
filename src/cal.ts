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
];

const completionSpec: Fig.Spec = {
  name: "cal",
  description: "Displays a calendar and the date of Easter",
  args: {
    name: "year",
    description: "Year to print calendar of",
  },
  options: [
    {
      name: "-h",
      description: "Turns off highlighting of today",
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
      isPersistent: false,
      exclusiveOn: ["-y"],
      args: {
        name: "month",
        description: "",
        suggestions: monthSuggestions,
      },
    },
    {
      name: "-y",
      description: "Display a calendar for the specified year",
      exclusiveOn: ["-m"],
    },
  ],
};
export default completionSpec;
