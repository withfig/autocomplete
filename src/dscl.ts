const args: Record<string, Fig.Arg> = {
  path: {
    name: "path",
    description: "Path to the record",
  },
  key: {
    name: "key",
    description: "Directory Service record attribute type",
  },
  keys: {
    name: "keys",
    description: "Directory Service record attribute type",
    isVariadic: true,
  },
  plistPath: {
    name: "plist path",
    description: "Path to the plist file",
  },
  valueIndex: {
    name: "value index",
    description: "Value index of the key",
  },
  val: {
    name: "val",
    description: "Value of the key",
  },
  vals: {
    name: "vals",
    description: "Value of the key",
    isVariadic: true,
  },
  oldVal: {
    name: "old val",
    description: "Old value of the key",
  },
  newVal: {
    name: "new val",
    description: "New value of the key",
  },
};

// Add "optional" arguments
for (const [name, arg] of Object.entries(args)) {
  args[`${name}Optional`] = {
    ...arg,
    isOptional: true,
  };
}

const completionSpec: Fig.Spec = {
  name: "dscl",
  description: "Directory Service command line utility",
  subcommands: [
    {
      name: ["read", "-read"],
      description: "Prints a directory",
      args: [args.pathOptional, args.keysOptional],
    },
    {
      name: ["readall", "-readall"],
      description: "Prints all the records of a given type",
      args: [args.pathOptional, args.keysOptional],
    },
    {
      name: ["readpl", "-readpl"],
      description: "Prints the contents of plist_path",
      args: [args.path, args.key, args.plistPath],
    },
    {
      name: ["readpli", "-readpli"],
      description:
        "Prints the contents of plist_path for the plist at value_index of the key",
      args: [args.path, args.key, args.valueIndex, args.plistPath],
    },
    {
      name: ["list", "-list", "ls"],
      description: "Lists the subdirectories of the given directory",
      args: [args.path, args.keyOptional],
    },
    {
      name: ["search", "-search"],
      description: "Searches for records that match a pattern",
      args: [args.path, args.key, args.val],
    },
    {
      name: ["create", "-create", "mk"],
      description: "Creates a new record",
      args: [args.path, args.keyOptional, args.valsOptional],
    },
    {
      name: ["createpl", "-createpl"],
      description: "Creates a string, or array of strings at plist_path",
      args: [args.path, args.key, args.plistPath, args.val, args.valsOptional],
    },
    {
      name: ["createpli", "-createpli"],
      description:
        "Creates a string, or array of strings at plist_path for the plist at value_index of the key",
      args: [
        args.path,
        args.key,
        args.valueIndex,
        args.plistPath,
        args.val,
        args.valsOptional,
      ],
    },
    {
      name: ["append", "-append"],
      description: "Appends one or more values to a property in a given record",
      args: [args.path, args.key, args.vals],
    },
    {
      name: ["merge", "-merge"],
      description:
        "Appends one or more values to a property in a given directory if the property does not already have those values",
      args: [args.path, args.key, args.vals],
    },
    {
      name: ["delete", "-delete", "rm"],
      description: "Delete a directory, property, or value",
      args: [args.path, args.keyOptional, args.valsOptional],
    },
    {
      name: ["deletepl", "-deletepl"],
      description: "Deletes a value in a plist",
      args: [args.path, args.key, args.plistPath, args.valsOptional],
    },
    {
      name: ["deletepli", "-deletepli"],
      description: "Deletes a value for the plist at value_index of the key",
      args: [
        args.path,
        args.key,
        args.valueIndex,
        args.plistPath,
        args.valsOptional,
      ],
    },
    {
      name: ["change", "-change"],
      description:
        "Replaces the given old value in the list of values of the given key with the new value in the specified record",
      args: [args.path, args.key, args.oldVal, args.newVal],
    },
    {
      name: ["changei", "-changei"],
      description:
        "Replaces the value at the given index in the list of values of the given key with the new value in the specified record",
      args: [args.path, args.key, args.valueIndex, args.newVal],
    },
    {
      name: ["diff", "-diff"],
      description:
        "Compares the data from path1 and path2 looking at the specified keys (or all if no keys are specified)",
      args: [args.path, args.path, args.keysOptional],
    },
    {
      name: ["passwd", "-passwd"],
      description: "Changes the password of a user",
      args: [
        args.path,
        {
          name: "new password",
          description: "New password of the user",
          isOptional: true,
        },
      ],
    },
  ],
  options: [
    {
      name: "-p",
      description: "Prompt for password",
    },
    {
      name: "-u",
      description: "Authenticate as user",
      args: {
        name: "user",
        description: "User to authenticate as",
      },
    },
    {
      name: "-P",
      description: "Authenticate with password",
      args: {
        name: "password",
        description: "Password to authenticate with",
      },
    },
    {
      name: "-f",
      description: "Targeted local node database file path",
      args: {
        name: "file",
        description: "File path",
      },
    },
    {
      name: "-raw",
      description: "Don't strip off prefix from DirectoryService API constants",
    },
    {
      name: "-plist",
      description: "Print out record(s) or attribute(s) in XML plist format",
    },
    {
      name: "-url",
      description: "Print record attribute values in URL-style encoding",
    },
    {
      name: "-q",
      description: "Quiet - no interactive prompt",
    },
  ],
  args: {
    name: "datasource",
    suggestions: [".", "..", "localhost", "localonly"],
    isOptional: true,
    loadSpec: "dscl",
  },
};

export default completionSpec;
