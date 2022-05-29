const completionSpec: Fig.Spec = {
  name: "pr",
  description: "A printing and pagination filter for text files",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      // NOTE: I'm not sure how to do this; could use help
      name: "+",
      hidden: true,
      description: `Begin output at page number page of the formatted input.`,
      args: {
        name: "page",
      },
    },
    {
      // NOTE: I'm not sure how to do this; could use help
      name: "-",
      hidden: true,
      description: `Produce output that is columns wide (default is 1) that is
        written vertically down each column in the order in which the
        text is received from the input file.  The options -e and -i are
        assumed.  This option should not be used with -m.  When used with
        -t, the minimum number of lines is used to display the output.
        (To columnify and reshape text files more generally and without
        additional formatting, see the rs(1) utility.)`,
    },
    {
      name: "-a",
      description: `Modify the effect of the -column option so that the columns are
        filled across the page in a round-robin order (e.g., when column
        is 2, the first input line heads column 1, the second heads
        column 2, the third is the second line in column 1, etc.).  This
        option requires the use of the -column option.`,
    },
    {
      name: "-d",
      description: `Produce output that is double spaced.  An extra <newline>
        character is output following every <newline> found in the input.`,
    },
    {
      name: "-e",
      description: `Expand each input <tab> to the next greater column position
        specified by the formula n*gap+1, where n is an integer > 0.  If
        gap is zero or is omitted the default is 8.  All <tab> characters
        in the input are expanded into the appropriate number of
        <space>s.  If any nondigit character, char, is specified, it is
        used as the input tab character.`,
      args: {
        name: "[char][gap]",
        suggestions: [" 8"],
        default: " 8",
      },
    },
    {
      name: "-F",
      description: `Use a <form-feed> character for new pages, instead of the default
        behavior that uses a sequence of <newline> characters.`,
    },
    {
      name: "-f",
      description: `Same as -F but pause before beginning the first page if standard
        output is a terminal`,
    },
    {
      name: "-h",
      description: `Use the string header to replace the file name in the header
        line.`,
      args: {
        name: "header",
      },
    },
    {
      name: "-i",
      description: `In output, replace multiple <space>s with <tab>s whenever two or
        more adjacent <space>s reach column positions gap+1, 2*gap+1,
        etc.  If gap is zero or omitted, default <tab> settings at every
        eighth column position is used.  If any nondigit character, char,
        is specified, it is used as the output <tab> character.`,
      args: {
        name: "[char][gap]",
        suggestions: [" 8"],
        default: " 8",
      },
    },
    {
      name: "-L",
      description: `Use locale specified as argument instead of one found in
        environment.  Use "C" to reset locale to default.`,
      args: {
        name: "locale",
        suggestions: ["C"],
        default: "C",
      },
    },
    {
      name: "-l",
      description: `Override the 66 line default and reset the page length to lines.
        If lines is not greater than the sum of both the header and
        trailer depths (in lines), the pr utility suppresses output of
        both the header and trailer, as if the -t option were in effect.`,
      args: {
        name: "lines",
        suggestions: ["66", "70", "74", "78", "82"],
        default: "66",
      },
    },
    {
      name: "-m",
      description: `Merge the contents of multiple files.  One line from each file
        specified by a file operand is written side by side into text
        columns of equal fixed widths, in terms of the number of column
        positions.  The number of text columns depends on the number of
        file operands successfully opened.  The maximum number of files
        merged depends on page width and the per process open file limit.
        The options -e and -i are assumed.`,
    },
    {
      name: "-n",
      description: `Provide width digit line numbering.  The default for width, if
        not specified, is 5.  The number occupies the first width column
        positions of each text column or each line of -m output.  If char
        (any nondigit character) is given, it is appended to the line
        number to separate it from whatever follows.  The default for
        char is a <tab>.  Line numbers longer than width columns are
        truncated.`,
      args: {
        name: "[char][width]",
        suggestions: [" 5"],
        default: " 5",
      },
    },
    {
      name: "-o",
      description: `Each line of output is preceded by offset <spaces>s.  If the -o
        option is not specified, the default is zero.  The space taken is
        in addition to the output line width.`,
      args: {
        name: "offset",
        suggestions: ["0"],
        default: "0",
      },
    },
    {
      name: "-p",
      description: `Pause before each page if the standard output is a terminal.  pr
        will write an alert character to standard error and wait for a
        carriage return to be read on the terminal.`,
    },
    {
      name: "-r",
      description: `Write no diagnostic reports on failure to open a file.`,
    },
    {
      name: "-s",
      description: ` Separate text columns by the single character char instead of by
        the appropriate number of <space>s (default for char is the <tab>
        character).`,
      args: {
        name: "char",
        suggestions: ["\\t"],
        default: "\\t",
      },
    },
    {
      name: "-t",
      description: `Print neither the five-line identifying header nor the five-line
        trailer usually supplied for each page.  Quit printing after the
        last line of each file without spacing to the end of the page.`,
    },
    {
      name: "-w",
      description: `Set the width of the line to width column positions for multiple
        text-column output only.  If the -w option is not specified and
        the -s option is not specified, the default width is 72.  If the
        -w option is not specified and the -s option is specified, the
        default width is 512.`,
      args: {
        name: "width",
        suggestions: ["72", "80", "88", "96", "104"],
        default: "72",
      },
    },
  ],
  args: {
    name: "file",
    description: "File(s) to be printed",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
