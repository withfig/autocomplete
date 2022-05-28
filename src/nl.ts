const completionSpec: Fig.Spec = {
  name: "nl",
  description: "Line numbering filter",
  options: [
    {
      name: "--help",
      description: "Show help for nl",
    },
    {
      name: "-b",
      description: `Specify the logical page body lines to be numbered
        'a' number all lines, 't' number only non-empty lines,
        'n' no line numbering, 'pexpr' number only those lines that
        contain the basic regular expression specified by 'expr'`,
      args: {
        name: "type",
        suggestions: ["a", "t", "n", "pexpr"],
        default: "t",
      },
    },
    {
      name: "-d",
      description: `Specify the delimiter characters used to indicate the
        start of a logical page section in the input file.  At
        most two characters may be specified; if only one
        character is specified, the first character is
        replaced and the second character remains unchanged.
        The default delim characters are "\\:".`,
      args: {
        name: "delim",
        suggestions: ["\\:"],
        default: "\\:",
      },
    },
    {
      name: "-f",
      description: `Specify the same as -b type except for logical page
        footer lines.  The default type for logical page
        footer lines is n.`,
      args: {
        name: "type",
        suggestions: ["n"],
        default: "n",
      },
    },
    {
      name: "-h",
      description: `Specify the same as -b type except for logical page
        header lines.  The default type for logical page
        header lines is n.`,
      args: {
        name: "type",
        suggestions: ["n"],
        default: "n",
      },
    },
    {
      name: "-i",
      description: `Specify the increment value used to number logical
        page lines.  The default incr value is 1.`,
      args: {
        name: "incr",
        suggestions: ["1"],
        default: "1",
      },
    },
    {
      name: "-l",
      description: `If numbering of all lines is specified for the current
        logical section using the corresponding -b a, -f a or
        -h a option, specify the number of adjacent blank
        lines to be considered as one.  For example, -l 2
        results in only the second adjacent blank line being
        numbered.  The default num value is 1.`,
      args: {
        name: "num",
        suggestions: ["1"],
        default: "1",
      },
    },
    {
      name: "-n",
      description: `Specify the line numbering output format.
        Recognized format arguments are:
        'ln' Left justified,
        'rn' Right justified (leading zeros suppressed),
        'rz' Right justified (leading zeros kept).`,
      args: {
        name: "format",
        suggestions: ["ln", "rn", "rz"],
        default: "rz",
      },
    },
    {
      name: "-p",
      description: `Specify that line numbering should not be restarted at
        logical page delimiters.`,
    },
    {
      name: "-s",
      description: `Specify the characters used in separating the line
        number and the corresponding text line.  The default
        sep setting is a single tab character.`,
      args: {
        name: "sep",
        suggestions: ["\\t"],
        default: "\\t",
      },
    },
    {
      name: "-v",
      description: `Specify the initial value used to number logical page
        lines; see also the description of the -p option.  The
        default startnum value is 1.`,
      args: {
        name: "startnum",
        suggestions: ["1", "2", "3"],
        default: "1",
      },
    },
    {
      name: "-w",
      description: `Specify the number of characters to be occupied by the
        line number; in case the width is insufficient to hold
        the line number, it will be truncated to its width
        least significant digits.  The default width is 6.`,
      args: {
        name: "width",
        suggestions: ["6", "5", "4", "3", "2", "1"],
        default: "6",
      },
    },
  ],
  args: {
    name: "file",
    description: "File(s) to number",
    template: "filepaths",
  },
};
export default completionSpec;
