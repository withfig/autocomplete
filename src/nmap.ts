const completionSpec: Fig.Spec = {
  name: "nmap",
  description: "Network exploration tool and security / port scanner",
  subcommands: [
    {
      name: "-sS",
      description: "TCP SYN scan",
    },
    {
      name: "-sT",
      description: "TCP scan",
    },
    {
      name: "-sU",
      description: "UDP scan",
    },
    {
      name: "-sP",
      description: "Ping scan",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for nmap",
    },
    {
      name: "-v",
      description: "Increase verbosity level",
    },
  ],
  // Only uncomment if nmap takes an argument
  // args: {}
};
export default completionSpec;
