const completionSpec: Fig.Spec = {
  name: "sshkey",
  description: "Manage ssh public key with vm",
  subcommands: [
    { name: "create", description: "Create a new SSH public key resource" },
    { name: "delete", description: "Delete an SSH public key" },
    { name: "list", description: "List all of the SSH public keys" },
    {
      name: "show",
      description: "Retrieve information about an SSH public key",
    },
    { name: "update", description: "Update an SSH public key resource" },
  ],
};

export default completionSpec;
