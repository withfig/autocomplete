const completionSpec: Fig.Spec = {
  name: "plutil",
  description:
    "Check the syntax of property list files, or convert a plist file from one format to another. Specifying - as an input file reads from stdin",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
    optionsMustPrecedeArguments: true,
  },
  args: {
    name: "file",
    description: "File to check the syntax of or convert",
  },
  options: [
    {
      name: "-help",
      description: "Show the usage information for the command and exit",
    },
    {
      name: "-p",
      description: "Print the property list in a human-readable fashion",
    },
    {
      name: "-lint",
      description:
        "Check the named property list files for syntax errors. This is the default command option if none is specified",
    },
    {
      name: "-convert",
      description:
        "Convert the named file to the indicated format and write back to the file system",
      args: {
        name: "format",
        description: "Format to convert the named file to",
        suggestions: [
          {
            name: "xml1",
            description: "For version 1 of the XML plist format",
          },
          {
            name: "binary1",
            description: "For version 1 of the binary plist",
          },
          {
            name: "json",
            description: "For the JSON format",
          },
        ],
      },
    },
    {
      name: "--",
      description: "Specifies that all further arguments are file names",
    },
    {
      name: "-s",
      description: "Don't print anything on success",
    },
    {
      name: "-r",
      description:
        "For JSON, add whitespace and indentation to make the output more human-readable",
    },
    {
      name: "-o",
      description:
        "Specify an alternate path name for the result of the -convert operation; this option is only useful with a single file to be converted. Specifying - as the path outputs to stdout",
      args: {
        name: "path",
      },
    },
    {
      name: "-e",
      description:
        "Specify an alternate extension for converted files, and the output file names are otherwise the same",
      args: {
        name: "extension",
      },
    },
  ],
};
export default completionSpec;
