// https://stackoverflow.com/a/70994696/6183068
const satisfies =
  <T>() =>
  <U extends T>(u: U) =>
    u;

const dsclOptions: Fig.Option[] = [
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
];

const dsclOptionsWithArgs = new Set<string>(
  dsclOptions
    .filter((option) => option.args !== undefined)
    .flatMap((option) => option.name)
);

const generateDsclPath: Fig.Generator = {
  trigger: "/",
  getQueryTerm: "/",
  custom: async (tokens, executeShellCommand) => {
    const lastToken = tokens[tokens.length - 1];
    if (lastToken === "") {
      return [];
    }
    // can't guarantee that dscl is the first token. If it's not found,
    // this is -1, so searching for `datasource` will start from index 0
    const dsclIndex = tokens.indexOf("dscl");
    let datasource: string;
    for (let i = dsclIndex + 1; i < tokens.length; i++) {
      const token = tokens[i];
      // skip if the current token is a flag
      if (token.startsWith("-")) {
        continue;
      }
      // skip if the previous token is a flag that takes an argument
      const prev = tokens[i - 1];
      if (dsclOptionsWithArgs.has(prev)) {
        continue;
      }
      datasource = token;
      break;
    }
    const lastSlashIndex = lastToken.lastIndexOf("/");
    const path = lastToken.slice(0, lastSlashIndex < 0 ? 0 : lastSlashIndex);
    const { stdout: lines } = await executeShellCommand({
      command: "dscl",
      args: [datasource, "-list", path ?? "/"],
    });
    return lines
      .trim()
      .split("\n")
      .map((line) => ({
        name: line,
        icon: "📁",
        priority: line[line.lastIndexOf("/") + 1] === "_" ? 49 : 50,
      }));
  },
};

const dsclArgs = satisfies<Record<string, Fig.Arg>>()({
  path: {
    name: "path",
    description: "Path to the record",
    generators: generateDsclPath,
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
});

const arg = (
  name: keyof typeof dsclArgs,
  merge: Partial<Fig.Arg>
): Fig.Arg => ({
  ...dsclArgs[name],
  ...merge,
});

const dsclSubcommands: Fig.Subcommand = {
  name: "dscl",
  subcommands: [
    {
      name: ["read", "-read"],
      description: "Prints a directory",
      args: [
        arg("path", { isOptional: true }),
        arg("keys", { isOptional: true }),
      ],
    },
    {
      name: ["readall", "-readall"],
      description: "Prints all the records of a given type",
      args: [
        arg("path", { isOptional: true }),
        arg("keys", { isOptional: true }),
      ],
    },
    {
      name: ["readpl", "-readpl"],
      description: "Prints the contents of plist_path",
      args: [dsclArgs.path, dsclArgs.key, dsclArgs.plistPath],
    },
    {
      name: ["readpli", "-readpli"],
      description:
        "Prints the contents of plist_path for the plist at value_index of the key",
      args: [
        dsclArgs.path,
        dsclArgs.key,
        dsclArgs.valueIndex,
        dsclArgs.plistPath,
      ],
    },
    {
      name: ["list", "-list", "ls", "-ls"],
      description: "Lists the subdirectories of the given directory",
      args: [dsclArgs.path, arg("key", { isOptional: true })],
    },
    {
      name: ["search", "-search"],
      description: "Searches for records that match a pattern",
      args: [dsclArgs.path, dsclArgs.key, dsclArgs.val],
    },
    {
      name: ["create", "-create", "mk", "-mk"],
      description: "Creates a new record",
      args: [
        dsclArgs.path,
        arg("key", { isOptional: true }),
        arg("vals", { isOptional: true }),
      ],
    },
    {
      name: ["createpl", "-createpl"],
      description: "Creates a string, or array of strings at plist_path",
      args: [
        dsclArgs.path,
        dsclArgs.key,
        dsclArgs.plistPath,
        dsclArgs.val,
        arg("vals", { isOptional: true }),
      ],
    },
    {
      name: ["createpli", "-createpli"],
      description:
        "Creates a string, or array of strings at plist_path for the plist at value_index of the key",
      args: [
        dsclArgs.path,
        dsclArgs.key,
        dsclArgs.valueIndex,
        dsclArgs.plistPath,
        dsclArgs.val,
        arg("vals", { isOptional: true }),
      ],
    },
    {
      name: ["append", "-append"],
      description: "Appends one or more values to a property in a given record",
      args: [dsclArgs.path, dsclArgs.key, dsclArgs.vals],
    },
    {
      name: ["merge", "-merge"],
      description:
        "Appends one or more values to a property in a given directory if the property does not already have those values",
      args: [dsclArgs.path, dsclArgs.key, dsclArgs.vals],
    },
    {
      name: ["delete", "-delete", "rm", "-rm"],
      description: "Delete a directory, property, or value",
      args: [
        dsclArgs.path,
        arg("key", { isOptional: true }),
        arg("vals", { isOptional: true }),
      ],
    },
    {
      name: ["deletepl", "-deletepl"],
      description: "Deletes a value in a plist",
      args: [
        dsclArgs.path,
        dsclArgs.key,
        dsclArgs.plistPath,
        arg("vals", { isOptional: true }),
      ],
    },
    {
      name: ["deletepli", "-deletepli"],
      description: "Deletes a value for the plist at value_index of the key",
      args: [
        dsclArgs.path,
        dsclArgs.key,
        dsclArgs.valueIndex,
        dsclArgs.plistPath,
        arg("vals", { isOptional: true }),
      ],
    },
    {
      name: ["change", "-change"],
      description:
        "Replaces the given old value in the list of values of the given key with the new value in the specified record",
      args: [dsclArgs.path, dsclArgs.key, dsclArgs.oldVal, dsclArgs.newVal],
    },
    {
      name: ["changei", "-changei"],
      description:
        "Replaces the value at the given index in the list of values of the given key with the new value in the specified record",
      args: [dsclArgs.path, dsclArgs.key, dsclArgs.valueIndex, dsclArgs.newVal],
    },
    {
      name: ["diff", "-diff"],
      description:
        "Compares the data from path1 and path2 looking at the specified keys (or all if no keys are specified)",
      args: [dsclArgs.path, dsclArgs.path, arg("keys", { isOptional: true })],
    },
    {
      name: ["passwd", "-passwd"],
      description: "Changes the password of a user",
      args: [
        dsclArgs.path,
        {
          name: "new password",
          description: "New password of the user",
          isOptional: true,
        },
      ],
    },
  ],
};

const completionSpec: Fig.Spec = {
  name: "dscl",
  description: "Directory Service command line utility",
  subcommands: dsclSubcommands.subcommands,
  options: dsclOptions,
  args: {
    name: "datasource",
    suggestions: [".", "..", "localhost", "localonly"],
    isOptional: true,
    loadSpec: dsclSubcommands,
  },
};

export default completionSpec;
