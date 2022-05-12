const completionSpec: Fig.Spec = {
  name: "croc",
  description:
    "Croc is a tool that allows any two computers to simply and securely transfer files and folders",
  subcommands: [
    {
      name: "send",
      description: "Send file(s), or folder",
      args: {
        template: ["filepaths", "folders"],
      },
      options: [
        {
          name: ["--code", "-c"],
          description: "Codephrase used to connect to relay",
          args: { name: "codephrase" },
        },
        {
          name: "--hash",
          description: "Hash algorithm",
          args: {
            suggestions: [
              { name: "xxhash" },
              { name: "imohash" },
              { name: "md5" },
            ],
          },
        },
        {
          name: ["--text", "-t"],
          description: "Send some text",
          args: {
            name: "text",
          },
        },
        {
          name: "--no-local",
          description: "Disable local relay when sending",
        },
        {
          name: "--no-multi",
          description: "Disable multiplexing",
        },
        {
          name: "--ports",
          description: "Ports of the local relay",
        },
      ],
    },
    {
      name: "relay",
      description: "Start your own relay",
      options: [
        {
          name: "--host",
          description: "Host of the relay",
          args: { name: "value" },
        },
        {
          name: "--ports",
          description: "Ports of the local relay",
          args: { name: "ports" },
        },
      ],
    },
    {
      name: ["help", "h"],
      description: "Shows a list of commands or help for one command",
      args: {
        name: "command",
        template: "help",
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for croc",
      isPersistent: true,
    },
    {
      name: "--internal-dns",
      description:
        "Use a built-in DNS stub resolver rather than the host operating system",
    },
    {
      name: "--remember",
      description: "Save these settings to reuse next time",
    },
    {
      name: "--debug",
      description: "Toggle debug mode",
    },
    {
      name: "--yes",
      description: "Automatically agree to all prompts",
    },
    {
      name: "--stdout",
      description: "Redirect file to stdout",
    },
    {
      name: "--no-compress",
      description: "Disable compression",
    },
    {
      name: "--ask",
      description: "Make sure sender and recipient are prompted",
    },
    {
      name: "--local",
      description: "Force to use only local connections",
    },
    {
      name: "--ignore-stdin",
      description: "Ignore piped stdin",
    },
    {
      name: "--overwrite",
      description: "Do not prompt to overwrite",
    },
    {
      name: "--curve",
      description: "Choose an encryption curve",
      args: {
        name: "value",
        suggestions: [
          { name: "p521" },
          { name: "p256" },
          { name: "p384" },
          { name: "siec" },
        ],
      },
    },
    {
      name: "--ip",
      description: "Set sender ip if known",
      args: { name: "value" },
    },
    {
      name: "--relay",
      description: "Address of the relay",
      args: { name: "ipv4 address" },
    },
    {
      name: "--relay6",
      description: "Ipv6 address of the relay",
      args: { name: "ipv6 address" },
    },
    {
      name: "--out",
      description: "Specify an output folder to receive the file",
      args: { name: "output folder" },
    },
    {
      name: "--pass",
      description: 'Password for the relay (default: "pass123")',
      args: { name: "password" },
    },
    {
      name: "--socks5",
      description: "Add a socks5 proxy",
      args: { name: "value" },
    },
    {
      name: "--throttleUpload",
      description: "Throttle the upload speed e.g. 500k",
      args: { name: "value" },
    },
    {
      name: ["--version", "-v"],
      description: "Print the version",
    },
  ],
  args: {
    name: "secret-code",
    description: "Receive a file using code",
  },
};
export default completionSpec;
