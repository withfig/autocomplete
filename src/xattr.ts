const attrNames: Fig.Suggestion[] = [
  {
    name: "com.apple.metadata:kMDItemWhereFroms",
    description: "Where the file was downloaded from",
  },
  {
    name: "com.apple.quarantine",
    description: "Gatekeeper quarantine marker",
  },
  { name: "com.apple.FinderInfo", description: "Finder flags and metadata" },
  { name: "com.apple.ResourceFork", description: "Resource fork contents" },
  {
    name: "com.apple.provenance",
    description: "Provenance tracking metadata",
  },
];

const commonAttrs = {
  name: "attr_name",
  description: "Extended attribute name",
  suggestions: attrNames,
};

const fileArgs: Fig.Arg = {
  name: "file",
  description: "File, directory, or symbolic link",
  isVariadic: true,
  template: ["filepaths"],
};

const completionSpec: Fig.Spec = {
  name: "xattr",
  description: "Display and manipulate extended attributes",
  options: [
    {
      name: ["-h", "--help"],
      description: "Display a short help message and exit",
    },
    {
      name: "-l",
      description:
        "Print long format (attr_name: attr_value and hex output with offsets and ASCII representation)",
    },
    {
      name: "-r",
      description:
        "Act recursively on the entire contents of any directory arguments",
    },
    {
      name: "-s",
      description:
        "Act on the symbolic link itself rather than what the link points to",
    },
    {
      name: "-v",
      description:
        "Also print filename (automatic with -r and with multiple files)",
    },
    {
      name: "-x",
      description:
        "Attr_value is represented as a hex string for input and output",
    },
    {
      name: "-p",
      description: "Print the value of the xattr attr_name",
      args: commonAttrs,
    },
    {
      name: "-w",
      description: "Set the value of the xattr attr_name to attr_value",
      args: [
        commonAttrs,
        {
          name: "attr_value",
          description: "Value to assign to the attribute",
        },
      ],
    },
    {
      name: "-d",
      description: "Delete the xattr attr_name",
      args: commonAttrs,
    },
    {
      name: "-c",
      description: "Delete (clear) all xattrs",
    },
  ],
  args: fileArgs,
};

export default completionSpec;
