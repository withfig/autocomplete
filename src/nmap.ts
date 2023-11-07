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
      //BEGIN SCAN TECHNIQUES:
      name: "-sS",
      description: "TCP SYN scan",
    },
    {
      name: "-sT",
      description: "TCP scan",
    },
    {
      name: "-sA",
      description: "TCP ACK scan",
    },
    {
      name: "-sW",
      description: "TCP Window scan",
    },
    {
      name: "-sM",
      description: "TCP Maimon scan",
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
      name: "-sN",
      description: "TCP Null scan",
    },
    {
      name: "-sF",
      description: "FIN scan",
    },
    {
      name: "-sX",
      description: "Xmas scan",
    },
    {
      name: "-sO",
      description: "IP protocol scan",
      //END SCAN TECHNIQUES:
    },
    {
      name: "-p",
      description: "Scan specified ports",
    },
    {
      name: ["-v", "-vv"],
      description: "Increase verbosity level",
    },
    {
      //BEGIN OS DETECTION
      name: "-O",
      description: "Enable OS detection",
    },
    {
      name: "--osscan-limit",
      description: "Limit OS detection to promising targets",
    },
    {
      name: "---osscan-guess",
      description: "Guess OS more aggressively",
      //END OS DETECTION
    },
    {
      //BEGIN MISC
      name: "-A",
      description: "Enable a full detection",
    },
    {
      name: "-6",
      description: "Enable IPV6 scanning",
    },
    {
      name: "-V",
      description: "Print version number",
    },
    {
      name: "-privileged",
      description: "Assume that user is fully privileges",
    },
    {
      name: "-unprivileged",
      description: "Assume that user lacks raw socket privileges",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for nmap",
      //END MISC
    },
  ],
  // Only uncomment if nmap takes an argument
  // args: {}
};
export default completionSpec;
