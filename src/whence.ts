const completionSpec: Fig.Spec = {
  name: "whence",
  description: "For each name, indicate how it should be interpreted",
  args: {
    name: "names",
    isVariadic: true,
  },
  options: [
    {
      name: "-v",
      description: "Produce verbose output",
    },
    {
      name: "-c",
      description: "Print results in a csh-like format",
    },
    {
      name: "-w",
      description:
        "For each name, print 'name: word', where 'word' is the kind of command",
    },
    {
      name: "-f",
      description: "Display contents of shell functions",
    },
    {
      name: "-p",
      description:
        "Do a path search for the name, even if it's an alias/function/builtin",
    },
    {
      name: "-a",
      description: "Don't stop at the first match on the path",
    },
    {
      name: "-m",
      description:
        "The arguments are taken as patterns (pattern characters must be quoted)",
    },
    {
      name: "-s",
      description:
        "If the pathname contains symlinks, print the symlink-free name as well",
    },
    {
      name: "-S",
      description: "Print intermediate symlinks and the resolved name",
    },
    {
      name: "-x",
      description: "Expand tabs when outputting shell function",
      args: { name: "num" },
    },
  ],
};

export default completionSpec;
