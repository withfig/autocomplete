const completionSpec: Fig.Spec = {
  name: "nmap",
  description: "Network exploration tool and security / port scanner",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
    optionsMustPrecedeArguments: false,
  },
  options: [
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
    {
      name: "-p",
      description: "Scan specified ports",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for nmap",
    },
    {
      name: ["-v", "-vv"],
      description: "Increase verbosity level",
    },
    {
      name: "-O",
      description: "Enable OS detection",
    },
    {
      name: "-A",
      description: "Enable a full detection",
    },
    {
      name: "-V",
      description: "Print version number",
    },
  ],
  // Only uncomment if nmap takes an argument
  // args: {}
};
export default completionSpec;
