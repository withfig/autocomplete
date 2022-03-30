const convValues: Fig.Suggestion[] = [
  {
    name: "ascii",
    icon: "fig://icon?type=string",
    description:
      "The same as 'unblock' except characters are translated from EBCDIC to ASCII",
  },
  {
    name: "oldascii",
    icon: "fig://icon?type=string",
    description:
      "The same as 'unblock' except characters are translated from EBCDIC to ASCII",
  },
  {
    name: "block",
    icon: "fig://icon?type=string",
    description:
      "Treats the input as a sequence of newline or EOF-terminated variable length records of independent input and output block boundaries",
  },
  {
    name: "ebcdic",
    icon: "fig://icon?type=string",
    description:
      "The same as the 'block' value except that characters are translated from ASCII to EBCDIC after the records are converted",
  },
  {
    name: "ibm",
    icon: "fig://icon?type=string",
    description:
      "The same as the 'block' value except that characters are translated from ASCII to EBCDIC after the records are converted",
  },
  {
    name: "oldebcdic",
    icon: "fig://icon?type=string",
    description:
      "The same as the 'block' value except that characters are translated from ASCII to EBCDIC after the records are converted",
  },
  {
    name: "oldibm",
    icon: "fig://icon?type=string",
    description:
      "The same as the 'block' value except that characters are translated from ASCII to EBCDIC after the records are converted",
  },
  {
    name: "lcase",
    icon: "fig://icon?type=string",
    description: "Transform uppercase characters into lowercase characters",
  },
  {
    name: "noerror",
    icon: "fig://icon?type=string",
    description: "Do not stop processing on an input error",
  },
  {
    name: "notrunc",
    icon: "fig://icon?type=string",
    description:
      "Do not truncate the output file. This will preserve any blocks in the output file not explicitly written by dd",
  },
  {
    name: "osync",
    icon: "fig://icon?type=string",
    description: "Pad the final output block to the full output block size",
  },
  {
    name: "sparse",
    icon: "fig://icon?type=string",
    description:
      "If one or more output blocks would consist solely of NUL bytes, try to seek the output file by the required space instead of filling them with NULs, resulting in a sparse file",
  },
  {
    name: "swab",
    icon: "fig://icon?type=string",
    description: "Swap every pair of input bytes",
  },
  {
    name: "sync",
    icon: "fig://icon?type=string",
    description: "Pad every input block to the input buffer size",
  },
  {
    name: "ucase",
    icon: "fig://icon?type=string",
    description: "Transform lowercase characters into uppercase characters",
  },
  {
    name: "unblock",
    icon: "fig://icon?type=string",
    description:
      "Treats the input as a sequence of fixed length records independent of input and output block boundaries",
  },
];

const completionSpec: Fig.Spec = {
  name: "dd",
  description: "Convert and copy a file",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  // dd has "operands", which are most closely modeled as options in a Fig spec.
  // Asterisk *feels* a lot better than the default option icon here.
  options: [
    {
      name: "bs",
      insertValue: "bs={cursor}",
      icon: "fig://icon?type=asterisk",
      description: "Set input and output block size",
      requiresEquals: true,
      args: {
        name: "size",
      },
    },
    {
      name: "cbs",
      insertValue: "cbs={cursor}",
      icon: "fig://icon?type=asterisk",
      description: "Set the conversion record size",
      requiresEquals: true,
      args: {
        name: "size",
      },
    },
    {
      name: "count",
      insertValue: "count={cursor}",
      icon: "fig://icon?type=asterisk",
      description: "Copy this many input blocks",
      requiresEquals: true,
      args: {
        name: "number",
      },
    },
    {
      name: "files",
      insertValue: "files={cursor}",
      icon: "fig://icon?type=asterisk",
      description: "Copy this many files before terminating",
      requiresEquals: true,
      args: {
        name: "number",
      },
    },
    {
      name: "ibs",
      insertValue: "ibs={cursor}",
      icon: "fig://icon?type=asterisk",
      description: "Set the input block size",
      requiresEquals: true,
      args: {
        name: "size",
        default: "512",
      },
    },
    {
      name: "if",
      insertValue: "if={cursor}",
      icon: "fig://icon?type=asterisk",
      description: "Read an input file instead of stdin",
      requiresEquals: true,
      priority: 60,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "iseek",
      insertValue: "iseek={cursor}",
      icon: "fig://icon?type=asterisk",
      description: "Seek this many blocks on the input file",
      requiresEquals: true,
      args: {
        name: "blocks",
      },
    },
    {
      name: "obs",
      insertValue: "obs={cursor}",
      icon: "fig://icon?type=asterisk",
      description: "Set the output block size",
      requiresEquals: true,
      args: {
        name: "size",
        default: "512",
      },
    },
    {
      name: "of",
      insertValue: "of={cursor}",
      icon: "fig://icon?type=asterisk",
      description: "Write to an output file instead of stdout",
      requiresEquals: true,
      priority: 59,
      args: {
        name: "file",
        template: "filepaths",
        suggestCurrentToken: true,
      },
    },
    {
      name: "oseek",
      insertValue: "oseek={cursor}",
      icon: "fig://icon?type=asterisk",
      description: "Seek this many blocks on the output file",
      requiresEquals: true,
      args: {
        name: "blocks",
      },
    },
    {
      name: "seek",
      insertValue: "seek={cursor}",
      icon: "fig://icon?type=asterisk",
      description:
        "Seek this many blocks from the beginning of the output before copying",
      requiresEquals: true,
      args: {
        name: "blocks",
      },
    },
    {
      name: "skip",
      insertValue: "skip={cursor}",
      icon: "fig://icon?type=asterisk",
      description:
        "Skip this many blocks from the beginning of the input before copying",
      requiresEquals: true,
      args: {
        name: "blocks",
      },
    },
    {
      name: "conv",
      insertValue: "conv={cursor}",
      icon: "fig://icon?type=asterisk",
      description: "Convert input data (comma-separated list)",
      requiresEquals: true,
      args: {
        name: "value",
        generators: {
          getQueryTerm: ",",
          custom: async () => convValues,
        },
      },
    },
  ],
};
export default completionSpec;
