const machineArg: Fig.Arg = {
  name: "machine",
  isOptional: true,
  description: "Machine name (defaults to the default machine)",
};

const completionSpec: Fig.Spec = {
  name: "orb",
  description:
    "OrbStack CLI: manage Linux machines and containers; without a subcommand, runs a command in Linux",
  args: {
    name: "command",
    isVariadic: true,
    isOptional: true,
    description: "Command to run in the Linux machine (e.g. orb uname -a)",
  },
  options: [
    {
      name: ["-m", "--machine"],
      description: "Machine to use",
      args: { name: "machine" },
    },
    {
      name: ["-u", "--user"],
      description: "Linux user to run the command as",
      args: { name: "user" },
    },
  ],
  subcommands: [
    // Linux machines
    {
      name: "create",
      description: "Create a new Linux machine from a distro image",
      args: [
        { name: "distro", description: "Distro image, e.g. ubuntu:22.04" },
        { ...machineArg },
      ],
    },
    {
      name: "clone",
      description: "Clone an existing Linux machine",
      args: [{ name: "source" }, { name: "name" }],
    },
    {
      name: "delete",
      description: "Permanently delete a machine",
      args: machineArg,
      options: [
        {
          name: ["-f", "--force"],
          description: "Force delete without confirmation",
        },
      ],
    },
    {
      name: "logs",
      description: "Show machine logs",
      args: machineArg,
    },
    {
      name: "list",
      description: "List machines",
    },
    {
      name: "info",
      description: "Show machine information",
      args: machineArg,
    },
    {
      name: "default",
      description: "Show or set the default machine",
      args: { ...machineArg, isOptional: true },
    },
    {
      name: "run",
      description: "Run a one-off command in a machine",
      args: { name: "command", isVariadic: true },
    },
    {
      name: "ssh",
      description: "SSH into a machine",
      args: { name: "command", isVariadic: true, isOptional: true },
    },
    {
      name: "export",
      description: "Export a machine to a tar archive",
      args: [{ name: "machine" }, { name: "output", template: "filepaths" }],
    },
    {
      name: "import",
      description: "Import a machine from a tar archive",
      args: [{ name: "archive", template: "filepaths" }, { name: "name" }],
    },
    {
      name: "pull",
      description: "Pull a machine image",
      args: { name: "image" },
    },
    {
      name: "push",
      description: "Push a machine image",
      args: { name: "image" },
    },
    {
      name: "rename",
      description: "Rename a machine",
      args: [{ name: "machine" }, { name: "newname" }],
    },
    // Containers / Kubernetes
    {
      name: "docker",
      description: "Run Docker commands through OrbStack",
      args: { name: "docker command", isVariadic: true },
    },
    {
      name: "k8s",
      description: "Run Kubernetes commands through OrbStack",
      args: { name: "kubectl command", isVariadic: true },
    },
    {
      name: "debug",
      description: "Show debug information for OrbStack",
    },
    // General
    {
      name: "config",
      description: "Show or edit OrbStack configuration",
    },
    {
      name: "start",
      description: "Start a machine (or the OrbStack service with no machine)",
      args: machineArg,
    },
    {
      name: "stop",
      description: "Stop a machine (or the OrbStack service with no machine)",
      args: machineArg,
    },
    {
      name: "restart",
      description: "Restart a machine",
      args: machineArg,
    },
    {
      name: "status",
      description: "Show machine status",
      args: machineArg,
    },
    {
      name: "doctor",
      description: "Check the OrbStack installation for problems",
    },
    {
      name: "report",
      description: "Report a problem with diagnostic information",
    },
    {
      name: "reset",
      description: "Reset OrbStack state",
    },
    {
      name: "update",
      description: "Update OrbStack",
    },
    {
      name: "login",
      description: "Log in to an OrbStack account",
      options: [
        {
          name: "--domain",
          description: "Domain for SSO",
          args: { name: "domain" },
        },
        {
          name: ["-f", "--force"],
          description: "Force re-login if already logged in",
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of the OrbStack account",
    },
    {
      name: "version",
      description: "Print the OrbStack version",
    },
  ],
};

export default completionSpec;
