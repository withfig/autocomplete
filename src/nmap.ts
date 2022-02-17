const completionSpec: Fig.Spec = {
  name: "nmap",
  description: "Network exploration tool and security / port scanner",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
    optionsMustPrecedeArguments: false,
  },
  options: [
    {
      //BEGIN TARGET SPECIFICATION:
      name: "-iL",
      description: "Input from list of hosts/networks",
    },
    {
      name: "-iR",
      description: "Choose random targets",
    },
    {
      name: "--exclude",
      description: "Excluide hosts/networks",
    },
    {
      name: "--excludefile",
      description: "Exclude list from file",
      //END TARGET SPECIFICATION:
    },
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
