const completionSpec: Fig.Spec = {
  name: "whois",
  description: "Query a database for information about a domain registrant",
  args: {
    name: "name",
    isVariadic: true,
  },
  options: [
    {
      name: "-a",
      description:
        "Use the American Registry for Internet Numbers (ARIN) database",
    },
    {
      name: "-A",
      description:
        "Use the Asia/Pacific Network Information Center (APNIC) database",
    },
    {
      name: "-b",
      description: "Use the Network Abuse Clearinghouse database",
    },
    {
      name: "-c",
      description:
        "Equivalent to '-h TLD.whois-servers.net', where 'TLD' is this option's argument",
      args: { name: "TLD" },
    },
    {
      name: "-f",
      description:
        "Use the African Network Information Centre (AfriNIC) database",
    },
    {
      name: "-g",
      description: "Use the US non-military federal government database",
    },
    {
      name: "-h",
      description:
        "Use the specified host instead of the default (host name or IP)",
      args: { name: "hostname" },
    },
    {
      name: "-i",
      description:
        "Use the traditional Network Information Center (InterNIC) database",
    },
    {
      name: "-I",
      description:
        "Use the Internet Assigned Numbers Authority (IANA) database",
    },
    {
      name: "-k",
      description:
        "Use the National Internet Development Agency of Korea (KRNIC) database",
    },
    {
      name: "-l",
      description:
        "Use the Latin American and Caribbean IP address Regional Registry (LACNIC) database",
    },
    {
      name: "-m",
      description: "Use the Route Arbiter Database (RADB) database",
    },
    {
      name: "-p",
      description: "Connect to the whois server on the given port",
      args: { name: "port", default: "43" },
    },
    {
      name: "-P",
      description: "Use the PeeringDB database of AS numbers",
    },
    {
      name: "-Q",
      description: "Do a quick lookup (don't follow referrals)",
    },
    {
      name: "-r",
      description: "Use the Réseaux IP Européens (RIPE) database",
    },
    {
      name: "-R",
      description: "Do a recursive lookup",
    },
    {
      name: "-S",
      description: "Print the output verbatim",
    },
  ],
};

export default completionSpec;
