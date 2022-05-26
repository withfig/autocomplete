import { knownHosts, configHosts } from "./ssh";

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
      name: "--client",
      description: 'Mosh client on local machine (default: "mosh-client")',
    },
    {
      name: "--server",
      description: 'Mosh server on remote machine (default: "mosh-server")',
    },
    {
      name: "--predict",
      description: "Local echo options",
      requiresEquals: true,
      args: {
        suggestions: [
          {
            name: "adaptive",
            description: "Local echo for slower links [default]",
          },
          { name: "always", description: "Use local echo even on fast links" },
          { name: "never", description: "Never use local echo" },
          {
            name: "experimental",
            description: "Aggressively echo even when incorrect",
          },
        ],
      },
    },
    {
      name: "-4",
      description: "Use IPv4 only",
    },
    {
      name: "-6",
      description: "Use IPv6 only",
    },
    {
      name: "--family",
      description: "Network Type",
      requiresEquals: true,
      args: {
        suggestions: [
          { name: "inet", description: "Use IPv4 only" },
          { name: "ine6", description: "Use IPv6 only" },
          {
            name: "auto",
            description: "Autodetect network type for single-family hosts only",
          },
          { name: "all", description: "Try all network types" },
          {
            name: "prefer-inet4",
            description: "Use all network types, but try IPv4 first [default]",
          },
          {
            name: "prefer-inet6",
            description: "Use all network types, but try IPv6 first",
          },
        ],
      },
    },
    {
      name: ["--port", "-p"],
      description:
        "Server-side UDP port or range, (No effect on server-side SSH port)",
    },
    {
      name: "--bind-server",
      description:
        '{ssh|any|IP}, ask the server to reply from an IP address, (default: "ssh")',
    },
    {
      name: "--ssh",
      requiresSeparator: true,
      args: {
        name: "command",
        isCommand: true,
      },
      description:
        'Ssh command to run when setting up session, (example: "ssh -p 2222")',
    },
    {
      name: "--no-ssh-pty",
      description: "Do not allocate a pseudo tty on ssh connection",
    },
    {
      name: "--no-init",
      description: "Do not send terminal initialization string",
    },
    {
      name: "--local",
      description: "Run mosh-server locally without using ssh",
    },
    {
      name: "--experimental-remote-ip",
      description:
        "Select the method for discovering the remote IP address to use for mosh",
      requiresSeparator: true,
      args: {
        name: "method",
        suggestions: ["local", "remote", "proxy"],
        default: "proxy",
      },
    },
    {
      name: "--version",
      description: "Version and copyright information",
    },
  ],
  // Only uncomment if mosh takes an argument
  // args: {}
};
export default completionSpec;
