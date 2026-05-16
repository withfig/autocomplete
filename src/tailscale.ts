type HostsGeneratorOptions = {
  append?: string;
};

const hostsGenerator = ({ append }: HostsGeneratorOptions = {}) => ({
  script: ["tailscale", "status", "--json"],
  postProcess: (output: string) =>
    Object.values(JSON.parse(output)["Peer"]).map((peer) => ({
      name: `${peer["DNSName"].split(".")[0]}${append ?? ""}`,
      displayName: peer["HostName"],
      description: peer["OS"],
    })),
});

const spec: Fig.Spec = {
  name: "tailscale",
  subcommands: [
    {
      name: "up",
      description: "Connect to Tailscale, logging in if needed",
      options: [
        {
          name: "--accept-dns",
          description: "Accept DNS configuration from the admin panel",
        },
        {
          name: "--accept-routes",
          description: "Accept routes advertised by other Tailscale nodes",
        },
        {
          name: "--advertise-exit-node",
          description:
            "Offer to be an exit node for internet traffic for the tailnet",
        },
        {
          name: "--advertise-routes",
          description:
            'Routes to advertise to other nodes (comma-separated, e.g. "10.0.0.0/8,192.168.0.0/24") or empty string to not advertise routes',
          args: {
            name: "routes",
          },
        },
        {
          name: "--advertise-tags",
          description:
            'Comma-separated ACL tags to request; each must start with "tag:" (e.g. "tag:eng,tag:montreal,tag:ssh")',
          args: {
            name: "tags",
          },
        },
        {
          name: "--auth-key",
          description:
            'Node authorization key; if it begins with "file:", then it\'s a path to a file containing the authkey',
          args: {
            name: "authkey",
          },
        },
        {
          name: "--exit-node",
          description:
            "Tailscale exit node (IP or base name) for internet traffic, or empty string to not use an exit node",
          args: {
            name: "exitnode",
          },
        },
        {
          name: "--exit-node-allow-lan-access",
          description:
            "Allow direct access to the local network when routing traffic via an exit node",
        },
        {
          name: "--force-reauth",
          description: "Force reauthentication",
        },
        {
          name: "--host-routes",
          description: "Install host routes to other Tailscale nodes",
        },
        {
          name: "--hostname",
          description: "Hostname to use instead of the one provided by the OS",
        },
        {
          name: "--json",
          description: "Output in JSON format",
        },
        {
          name: "--login-server",
          description: "Login server to use",
        },
        {
          name: "--operator",
          description:
            "Unix username to allow to operate on tailscaled without sudo",
          args: {
            name: "username",
            suggestions: ["$USER"],
          },
        },
        {
          name: "--qr",
          description: "Show QR code for login URLs",
        },
        {
          name: "--reset",
          description: "Reset unspecified settings to their default values",
        },
        {
          name: "--shields-up",
          description: "Don't allow incoming connections",
        },
        {
          name: "--ssh",
          description:
            "Run an SSH server, permitting access per tailnet admin's declared policy",
        },
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "down",
      description: "Disconnect from Tailscale",
      options: [
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "logout",
      description: "Disconnect from Tailscale and expire current node key",
      options: [
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "netcheck",
      description: "Print an analysis of local network conditions",
      options: [
        {
          name: "--every",
          description:
            "If non-zero, do an incremental report with the given frequency",
        },
        {
          name: "--format",
          description: "Output format",
          args: {
            name: "format",
            suggestions: [
              {
                name: "json",
              },
              {
                name: "json-line",
              },
              {
                name: "human-readable",
                insertValue: "'' ",
              },
            ],
          },
        },
        {
          name: "--verbose",
          description: "Verbose logs",
        },
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "ip",
      description: "Show Tailscale IP addresses",
      args: {
        isOptional: true,
        generators: hostsGenerator(),
      },
      options: [
        {
          name: "--1",
          description: "Only print one IP address",
        },
        {
          name: "--4",
          description: "Only print IPv4 address",
        },
        {
          name: "--6",
          description: "Only print IPv6 address",
        },
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "status",
      description: "Show state of tailscaled and its connections",
      options: [
        {
          name: "--active",
          description: "Filter output to only peers with active sessions",
        },
        {
          name: "--browser",
          description: "Open a browser in web mode",
        },
        {
          name: "--json",
          description: "Output in JSON format",
        },
        {
          name: "--listen",
          description:
            "Listen address for web mode; use port 0 for automatic (default 127.0.0.1:8384)",
          args: {
            name: "address",
          },
        },
        {
          name: "--peers",
          description: "Show status of peers",
        },
        {
          name: "--self",
          description: "Show status of local machine",
        },
        {
          name: "--web",
          description: "Run webserver with HTML showing status",
        },
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "ping",
      description: "Ping a host at the Tailscale layer, see how it routed",
      options: [
        {
          name: "--c",
          description: "Max number of pings to send",
          args: {
            name: "count",
          },
        },
        {
          name: "--timeout",
          description: "Timeout before giving up on a ping",
          args: {
            name: "timeout",
          },
        },
        {
          name: "--tsmp",
          description:
            "Do a TSMP-level ping (through IP + wireguard, but not involving host OS stack)",
        },
        {
          name: "--until-direct",
          description: "Stop once a direct path is established",
        },
        {
          name: "--verbose",
          description: "Verbose logs",
        },
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "nc",
      description: "Connect to a port on a host, connected to stdin/stdout",
      args: [
        {
          name: "hosname-or-ip",
        },
        {
          name: "port",
        },
      ],
      options: [
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "ssh",
      description: "SSH to a Tailscale machine",
      args: {
        name: "[user@]<host>",
      },
      options: [
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "version",
      description: "Print Tailscale version",
      options: [
        {
          name: "--daemon",
          description: "Also print local node's daemon version",
        },
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "web",
      description: "Run a web server for controlling Tailscale",
      options: [
        {
          name: "--cgi",
          description: "Run as CGI script",
        },
        {
          name: "--listen",
          description:
            "Listen address; use port 0 for automatic (default localhost:8088)",
          args: {
            name: "address",
          },
        },
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "file",
      description: "Send or receive files",
      subcommands: [
        {
          name: "cp",
          description: "Copy file(s) to a host",
          args: [
            {
              name: "file",
              template: "filepaths",
            },
            {
              name: "file or host",
              isVariadic: true,
              generators: [
                hostsGenerator({ append: ":" }),
                {
                  template: "filepaths",
                },
              ],
            },
          ],
        },
        {
          name: "get",
          description: "Move files out of the Tailscale file inbox",
          args: {
            name: "target-directory",
            template: "folders",
          },
        },
      ],
      options: [
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "bugreport",
      description: "Print a shareable identifier to help diagnose issues",
      args: {
        name: "note",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "cert",
      description: "Get TLS certs",
      options: [
        {
          name: "--cert-file",
          description: 'Output cert file or "-" for stdout',
          args: {
            name: "file",
            template: "filepaths",
            suggestions: [
              {
                name: "-",
                description: "Stdout",
              },
            ],
          },
        },
        {
          name: "--key-file",
          description: 'Output cert file or "-" for stdout',
          args: {
            name: "file",
            template: "filepaths",
            suggestions: [
              {
                name: "-",
                description: "Stdout",
              },
            ],
          },
        },
        {
          name: "--serve-demo",
          description:
            "Serve on port :443 using the cert as a demo, instead of writing out the files to disk",
        },
        {
          name: "--help",
          description: "Show help message",
        },
      ],
    },
    {
      name: "help",
      description: "Print help message",
    },
  ],
  options: [
    {
      name: "--socket",
      description: "Path to tailscaled's unix socket",
      args: {
        name: "socket",
        default: "/var/run/tailscaled.socket",
      },
    },
  ],
};

export default spec;
