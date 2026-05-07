const attrNameArg: Fig.Arg = {
  name: "attr_name",
  description: "Attribute name",
};

const fileArg: Fig.Arg = {
  name: "file",
  description: "File(s)",
  isVariadic: true,
  template: "filepaths",
};

const completionSpec: Fig.Spec = {
  name: "xattr",
  description: "Display and manipulate extended attributes",
  options: [
    {
      name: "-l",
      description: "List attributes with their values",
    },
    {
      name: "-r",
      description: "Apply recursively to directories",
    },
    {
      name: "-v",
      description: "Always print the file name",
    },
    {
      name: "-x",
      description: "Display attribute values in hex",
    },
    {
      name: "-s",
      description: "Act on the symbolic link itself",
    },
    {
      name: "-z",
      description: "Compress or decompress values using gzip",
    },
    {
      name: "-p",
      description: "Print a named attribute",
      exclusiveOn: ["-w", "-d", "-c"],
      args: [attrNameArg, fileArg],
    },
    {
      name: "-w",
      description: "Write a named attribute",
      exclusiveOn: ["-p", "-d", "-c"],
      args: [
        attrNameArg,
        {
          name: "attr_value",
          description: "Attribute value",
        },
        fileArg,
      ],
    },
    {
      name: "-d",
      description: "Delete a named attribute",
      exclusiveOn: ["-p", "-w", "-c"],
      isDangerous: true,
      args: [attrNameArg, fileArg],
    },
    {
      name: "-c",
      description: "Clear all attributes",
      exclusiveOn: ["-p", "-w", "-d"],
      isDangerous: true,
      args: fileArg,
    },
  ],
  args: fileArg,
};

export default completionSpec;
