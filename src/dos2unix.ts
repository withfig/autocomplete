const completionSpec: Fig.Spec = {
  name: "dos2unix",
  description: "DOS to Unix file format converter",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for dos2unix",
    },
    {
      name: "--",
      description:
        "Treat all following options as file names. Use this option if you want to convert files whose names start with a dash",
    },
    {
      name: "--allow-chown",
      description: "Allow file ownership change in old file mode",
    },
    {
      name: "-ascii",
      description:
        "Convert only line breaks. This is the default conversion mode",
    },
    {
      name: "-iso",
      description: "Conversion between DOS and ISO-8859-1 character set",
    },
    {
      name: "-1252",
      description: "Use Windows code page 1252 (Western European)",
    },
    {
      name: "-437",
      description:
        "Use DOS code page 437 (US). This is the default code page used for ISO conversion",
    },
    {
      name: "-850",
      description: "Use DOS code page 850 (Western European)",
    },
    {
      name: "-860",
      description: "Use DOS code page 860 (Portuguese)",
    },
    {
      name: "-863",
      description: "Use DOS code page 863 (French Canadian)",
    },
    {
      name: "-865",
      description: "Use DOS code page 865 (Nordic)",
    },
    {
      name: "-7",
      description: "Convert 8 bit characters to 7 bit space",
    },
    {
      name: ["-b", "--keep-bom"],
      description:
        "Keep Byte Order Mark (BOM). When the input file has a BOM, write a BOM in the output file",
    },
    {
      name: ["-c", "--convmode"],
      description: "Set conversion mode",
      args: {
        name: "CONVMODE",
        suggestions: ["ascii", "7bit", "iso", "mac"],
      },
    },
    {
      name: ["-D", "--display-enc"],
      description: "Set encoding of displayed text",
      args: {
        name: "ENCODING",
        suggestions: ["ansi", "unicode", "unicodebom", "utf8", "utf8bom"],
      },
    },
    {
      name: ["-f", "--force"],
      description: "Force conversion of binary files",
    },
    {
      name: ["-gb", "--gb18030"],
      description:
        "On Windows UTF-16 files are by default converted to UTF-8, regardless of the locale setting",
    },
    {
      name: "-i",
      description: "Display file information. No conversion is done",
      insertValue: "-i{cursor}",
      exclusiveOn: ["--info"],
      args: {
        name: "value",
      },
    },
    {
      name: "--info",
      description: "Display file information. No conversion is done",
      requiresSeparator: true,
      exclusiveOn: ["-i"],
      args: {
        name: "value",
      },
    },
    {
      name: ["-k", "--keepdate"],
      description: "",
    },
    {
      name: ["-L", "--license"],
      description: "Display program's license",
    },
    {
      name: ["-l", "--newline"],
      description: "Add additional newline",
    },
    {
      name: ["-m", "--add-bom"],
      description:
        "Write a Byte Order Mark (BOM) in the output file. By default an UTF-8 BOM is written",
    },
    {
      name: "--newfile",
      description:
        "New file mode. Convert file INFILE and write output to file OUTFILE. File names must be given in pairs and wildcard names should not be used or you will lose your files",
      args: [
        {
          name: "INFILE",
          template: "filepaths",
        },
        {
          name: "OUTFILE",
          template: "filepaths",
          suggestCurrentToken: true,
        },
      ],
    },
    {
      name: "--no-allow-chown",
      description:
        "Don't allow file ownership change in old file mode (default)",
    },
    {
      name: ["-o", "--oldfile"],
      description:
        "Old file mode. Convert file FILE and overwrite output to it",
      args: {
        name: "FILE",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: ["-q", "--quiet"],
      description:
        "Quiet mode. Suppress all warnings and messages. The return value is zero.  Except when wrong command-line options are used",
    },
    {
      name: ["-r", "--remove-bom"],
      description:
        "Remove Byte Order Mark (BOM). Do not write a BOM in the output file",
    },
    {
      name: ["-s", "--safe"],
      description: "Skip binary files (default)",
    },
    {
      name: ["-u", "--keep-utf16"],
      description: "Keep UTF-16 encoding",
    },
    {
      name: ["-ul", "--assume-utf16le"],
      description: "Assume that the input format is UTF-16LE",
    },
    {
      name: ["-ub", "--assume-utf16be"],
      description: "Assume that the input format is UTF-16BE",
    },
    {
      name: ["-v", "--verbose"],
      description: "Verbose operation",
    },
    {
      name: ["-F", "--follow-symlink"],
      description: "Follow symbolic links and convert the targets",
    },
    {
      name: ["-R", "--replace-symlink"],
      description: "Replace symbolic links with converted files",
    },
    {
      name: ["-S", "--skip-symlink"],
      description: "Keep symbolic links and targets unchanged (default)",
    },
    {
      name: ["-V", "--version"],
      description: "Display version number",
    },
  ],
  args: {
    name: "file",
    isVariadic: true,
    isOptional: true,
    template: "filepaths",
  },
};
export default completionSpec;
