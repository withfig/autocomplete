const completionSpec: Fig.Spec = {
  name: "doggo",
  description: "DNS Client for Humans",
  options: [
    {
      name: "--version",
      description: "Output version",
    },
    {
      name: ["--help", "-h"],
      description: "Output help",
    },
    {
      name: ["-q", "--query"],
      insertValue: "-q {cursor}",
      description: "Hostname to query the DNS records for (e.g., example.com)",
    },
    {
      name: ["-t", "--type"],
      insertValue: "-t {cursor}",
      description: "Type of the DNS Record (A, MX, NS, etc.)",
    },
    {
      name: ["-n", "--nameserver"],
      insertValue: "-n {cursor}",
      description:
        "Address of a specific nameserver to send queries to (e.g., 9.9.9.9, 8.8.8.8)",
    },
    {
      name: ["-c", "--class"],
      insertValue: "-c {cursor}",
      description: "Network class of the DNS record (IN, CH, HS, etc.)",
    },
    {
      name: ["-x", "--reverse"],
      insertValue: "-x {cursor}",
      description: "Performs a reverse DNS lookup for an IPv4 or IPv6 address",
    },
    {
      name: "--any",
      description:
        "Query all supported DNS record types (A, AAAA, CNAME, MX, NS, PTR, SOA, SRV, TXT, CAA)",
    },
    {
      name: "--strategy",
      description: "Specify strategy to query nameservers (all, random, first)",
      requiresSeparator: true,
    },
    {
      name: "--ndots",
      description: "Specify ndots parameter",
      requiresSeparator: true,
    },
    {
      name: "--search",
      description: "Use the search list defined in resolv.conf (default: true)",
    },
    {
      name: "--timeout",
      description:
        "Specify timeout (in seconds) for the resolver to return a response",
    },
    {
      name: ["-4", "--ipv4"],
      description: "Use IPv4 only",
    },
    {
      name: ["-6", "--ipv6"],
      description: "Use IPv4 only",
    },
    {
      name: "--tls-hostname",
      description: "Provide a hostname for TLS certificate verification",
      requiresSeparator: true,
    },
    {
      name: "--skip-hostname-verification",
      description: "Skip TLS Hostname Verification for DoT lookups",
    },
    {
      name: "--aa",
      description: "Set Authoritative Answer flag",
    },
    {
      name: "--ad",
      description: "Set Authenticated Data flag",
    },
    {
      name: "--cd",
      description: "Set Checking Disabled flag",
    },
    {
      name: "--rd",
      description: "Set Recursion Desired flag (default: true)",
    },
    {
      name: "--z",
      description: "Set Z flag (reserved for future use)",
    },
    {
      name: "--do",
      description: "Set DNSSEC OK flag",
    },
    {
      name: ["-J", "--json"],
      description: "Format the output as JSON",
    },
    {
      name: "--short",
      description: "Short output format (shows only the response section)",
    },
    {
      name: "--color",
      description: "Enable/disable colored output (default: true)",
    },
    {
      name: "--debug",
      description: "Enable debug logging",
    },
    {
      name: "--time",
      description: "Show query response time",
    },
  ],
  args: [
    {
      name: "domain",
      description: "Hostname to query the DNS records for (e.g., example.com)",
    },
    {
      name: "type",
      description: "Type of the DNS Record (A, MX, NS, etc.)",
    },
    {
      name: "nameserver",
      description:
        "Address of a specific nameserver to send queries to (e.g., 9.9.9.9, 8.8.8.8)",
    },
  ],
};
export default completionSpec;
