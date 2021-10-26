const completionSpec: Fig.Spec = {
  name: "cache",
  description:
    "Commands to manage CLI objects cached using the --defer argument",
  subcommands: [
    { name: "delete", description: "Delete an object from the cache" },
    { name: "list", description: "List the contents of the object cache" },
    { name: "purge", description: "Clear the entire CLI object cache" },
    {
      name: "show",
      description: "Show the contents of a specific object in the cache",
    },
  ],
};

export default completionSpec;
