import { knownHosts, configHosts } from "./ssh"

const completionSpec: Fig.Spec = {
  name: "mosh",
  description: "",
  args: {
    name: "user@hostname",
    description: "Address of remote machine to log into",
    generators: [knownHosts, configHosts, { template: "history" }],
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for mosh",
    },
    {
      name: ["--client"],
      description: "mosh client on local machine (default: \"mosh-client\")",
    },
    {
      name: ["--server"],
      description: "mosh server on remote machine (default: \"mosh-server\")",
    },
    {
      name: ["--predict=adaptive"],
      description: "local echo for slower links [default]",
    },
    {
      name: ["--predict=always", "-a"],
      description: "use local echo even on fast links",
    },
    {
      name: ["--predict=never", "-n"],
      description: "never use local echo",
    },
    {
      name: ["--predict=experimental"],
      description: "aggressively echo even when incorrect",
    },
    {
      name: ["--family=inet", "-4"],
      description: "use IPv4 only",
    },
    {
      name: ["--family=inet6", "-6"],
      description: "use IPv6 only",
    },
    {
      name: ["--family=auto"],
      description: "autodetect network type for single-family hosts only",
    },
    {
      name: ["--family=all"],
      description: "try all network types",
    },
    {
      name: ["--family=prefer-inet"],
      description: "use all network types, but try IPv4 first [default]",
    },
    {
      name: ["--family=prefer-inet6"],
      description: "use all network types, but try IPv6 first",
    },
    {
      name: ["--port", "-p"],
      description: "server-side UDP port or range, (No effect on server-side SSH port)",
    },
    {
      name: ["--bind-server="],
      description: "{ssh|any|IP}, ask the server to reply from an IP address, (default: \"ssh\")",
    },
    {
      name: "--ssh",
      requiresSeparator: true,
      args: {
        name: "command",
        isCommand: true,
      },
      description: "ssh command to run when setting up session, (example: \"ssh -p 2222\")",
    },
    {
      name: ["--no-ssh-pty"],
      description: "do not allocate a pseudo tty on ssh connection",
    },
    {
      name: ["--no-init"],
      description: "do not send terminal initialization string",
    },
    {
      name: ["--local"],
      description: "run mosh-server locally without using ssh",
    },
    {
      name: "--experimental-remote-ip",
      description: "Select the method for discovering the remote IP address to use for mosh",
      requiresSeparator: true,
      args: {
        name: "method",
        suggestions: ["local", "remote", "proxy"],
        default: "proxy",
      },
    },
    {
      name: ["--version"],
      description: "Version and copyright information",
    },
  ],
  // Only uncomment if mosh takes an argument
  // args: {}
};
export default completionSpec;