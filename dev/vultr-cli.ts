const completionSpec: Fig.Spec = {
  name: "vultr-cli",
  description: "Official command line interface for the Vultr API",
  icon: "https://www.vultr.com/favicon/favicon-32x32.png",
  subcommands: [
    { name: "account", description: "Retrieve information about your account" },
    { name: "apps", description: "Display all available applications" },
    { name: "backups", description: "Display backups" },
    {
      name: "bare-metal",
      description: "Bare-metal is used to access bare metal server commands",
    },
    { name: "block-storage", description: "Block storage commands" },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
    },
    { name: "dns", description: "Dns is used to access dns commands" },
    {
      name: "firewall",
      description: "Firewall is used to access firewall commands",
    },
    { name: "help", description: "Help about any command" },
    {
      name: "instance",
      description: "Commands to interact with instances on vultr",
    },
    { name: "iso", description: "Iso is used to access iso commands" },
    {
      name: "kubernetes",
      description: "Kubernetes is used to access kubernetes commands",
    },
    { name: "load-balancer  ", description: "Load balancer commands" },
    { name: "network", description: "Network interacts with network actions" },
    { name: "object-storage ", description: "Object storage commands" },
    { name: "os", description: "Os is used to access os commands" },
    { name: "plans", description: "Get information about Vultr plans" },
    { name: "regions", description: "Get regions" },
    {
      name: "reserved-ip",
      description: "Reserved-ip lets you interact with reserved-ip",
    },
    { name: "script", description: "Startup script commands" },
    { name: "snapshot", description: "Snapshot commands" },
    { name: "ssh-key", description: "Ssh-key commands" },
    { name: "user", description: "User commands" },
    { name: "version", description: "Display current version of Vultr-cli" },
  ],
};
export default completionSpec;
