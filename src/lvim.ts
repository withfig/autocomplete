const completionSpec: Fig.Spec = {
  name: "lvim",
  description: "Hyperextensible Vim-based text editor",
  args: {
    template: ["filepaths", "folders"],
  },
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: "+",
      description: "Start at end of file",
    },
    {
      name: "--cmd",
      args: { name: "cmd" },
      description: "Execute <cmd> before any config",
    },
    {
      name: "-c",
      args: { name: "cmd" },
      description: "Execute <cmd> after config and first file",
    },
    {
      name: "-b",
      description: "Binary mode",
    },
    {
      name: "-d",
      description: "Diff mode",
    },
    {
      name: ["-e", "-E"],
      description: "Ex mode",
    },
    {
      name: ["-es", "-Es"],
      description: "Silent (batch) mode",
    },
    {
      name: ["-h", "--help"],
      description: "Print this help message",
    },
    {
      name: "-i",
      args: { name: "shada", template: "filepaths" },
      description: "Use this shada file",
    },
    {
      name: "-m",
      description: "Modifications (writing files) not allowed",
    },
    {
      name: "-M",
      description: "Modifications in text not allowed",
    },
    {
      name: "-n",
      description: "No swap file, use memory only",
    },
    {
      name: "-o",
      args: { name: "N" },
      description: "Open N windows (default: one per file)",
    },
    {
      name: "-O",
      args: { name: "N" },
      description: "Open N vertical windows (default: one per file)",
    },
    {
      name: "-p",
      args: { name: "N" },
      description: "Open N tab pages (default: one per file)",
    },
    {
      name: "-L",
      description: "List swap files",
    },
    {
      name: "-r",
      args: { name: "file", template: "filepaths" },
      description: "Recover edit state for this file",
    },
    {
      name: "-R",
      description: "Read-only mode",
    },
    {
      name: "-S",
      args: { name: "session", template: "filepaths" },
      description: "Source <session> after loading the first file",
    },
    {
      name: "-s",
      args: { name: "scriptin", template: "filepaths" },
      description: "Read Normal mode commands from <scriptin>",
    },
    {
      name: "-u",
      args: { name: "config", template: "filepaths" },
      description: "Use this config file",
    },
    {
      name: ["-v", "--version"],
      description: "Print version information",
    },
    {
      name: "--api-info",
      description: "Write msgpack-encoded API metadata to stdout",
    },
    {
      name: "--embed",
      description: "Use stdin/stdout as a msgpack-rpc channel",
    },
    {
      name: "--headless",
      description: "Don't start a user interface",
    },
    {
      name: "--listen",
      args: { name: "address" },
      description: "Serve RPC API from this address",
    },
    {
      name: "--noplugin",
      description: "Don't load plugins",
    },
    {
      name: ["--remote", "--remote-subcommand"],
      description: "Execute commands remotely on a server",
    },
    {
      name: "--server",
      args: { name: "address" },
      description: "Specify RPC server to send commands to",
    },
    {
      name: "--startuptime",
      args: { name: "file", template: "filepaths" },
      description: "Write startup timing messages to <file>",
    },
  ],
};

export default completionSpec;
