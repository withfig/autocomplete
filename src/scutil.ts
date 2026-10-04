const preferenceSuggestions: Fig.Suggestion[] = [
  {
    name: "ComputerName",
    description: "The user-friendly name for the system",
  },
  {
    name: "LocalHostName",
    description: "The local (Bonjour) host name",
  },
  {
    name: "HostName",
    description: "The name associated with hostname(1) and gethostname(3)",
  },
];

const networkInterfaces: Fig.Generator = {
  script: ["networksetup", "-listallhardwareports"],
  postProcess: (out) => {
    const suggestions: Fig.Suggestion[] = [];
    const re = /^Hardware Port: (.*?)\n.*?Device: (.*?)$/gms;
    for (const match of out.matchAll(re)) {
      suggestions.push({
        name: match[2],
        description: `Hardware port: ${match[1]}`,
      });
    }
    return suggestions;
  },
};

const vpnServices: Fig.Generator = {
  script: ["scutil", "--nc", "list"],
  postProcess: (out) => {
    const suggestions: Fig.Suggestion[] = [];
    // Every service line looks like:
    // * (Connected)   <service-id> VPN (<bundle-id>) "<name>" [VPN:<bundle-id>]
    const re = /^\s*\*?\s*\([^)]*\)\s+(\S+)\s+.*?"([^"]*)"/;
    for (const line of out.split("\n")) {
      const match = line.match(re);
      if (!match) {
        continue;
      }
      suggestions.push({
        name: match[1],
        description: match[2],
      });
    }
    return suggestions;
  },
};

const ncCommands: Fig.Suggestion[] = [
  {
    name: "list",
    description:
      "List available network connection services in the current set",
  },
  {
    name: "status",
    description:
      "Indicate whether a given service is connected, and its extended status",
  },
  {
    name: "show",
    description: "Display configuration information for a given service",
  },
  {
    name: "statistics",
    description:
      "Provide statistics on bytes, packets, and errors for a given service",
  },
  {
    name: "select",
    description: "Make the given service active in the current set",
  },
  {
    name: "start",
    description: "Start a given service",
  },
  {
    name: "stop",
    description: "Stop a given service",
  },
  {
    name: "suspend",
    description: "Suspend a given service (PPP, Modem on Hold)",
  },
  {
    name: "resume",
    description: "Resume a given service (PPP, Modem on Hold)",
  },
  {
    name: "ondemand",
    description: "Display VPN on-demand information",
  },
  {
    name: "trigger",
    description: "Trigger VPN on-demand with a specified hostname",
  },
  {
    name: "enablevpn",
    description: "Enable the given VPN application type",
  },
  {
    name: "disablevpn",
    description: "Disable the given VPN application type",
  },
  {
    name: "help",
    description: "Display available commands for --nc",
  },
];

const completionSpec: Fig.Spec = {
  name: "scutil",
  description: "Manage system configuration parameters",
  options: [
    {
      name: "--help",
      description: "Display usage information",
    },
    {
      name: "-r",
      description:
        "Check the network reachability of a nodename, address, or a pair of local and remote addresses",
      args: [
        {
          name: "nodename | address | local-address",
          description: "Node name, IP address, or local address to check",
        },
        {
          name: "remote-address",
          description: "Remote address to pair with the local address",
          isOptional: true,
        },
      ],
    },
    {
      name: "-W",
      description: "Watch the reachability of the host specified with -r",
    },
    {
      name: "-w",
      description: "Wait for the presence of the given dynamic store key",
      args: {
        name: "dynamic-store-key",
      },
    },
    {
      name: "-t",
      description: "Time to wait for the key given with -w (0 waits forever)",
      args: {
        name: "timeout",
        default: "15",
      },
      dependsOn: ["-w"],
    },
    {
      name: "--prefs",
      description:
        "Access the [raw] stored preference data from standard input",
      args: {
        name: "preference-file",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "--get",
      description: "Report the value of the specified preference",
      args: {
        name: "pref",
        suggestions: preferenceSuggestions,
      },
    },
    {
      name: "--set",
      description:
        "Update the specified preference, reading the new value from standard input when it is omitted",
      args: [
        {
          name: "pref",
          suggestions: preferenceSuggestions,
        },
        {
          name: "newval",
          isOptional: true,
        },
      ],
      isDangerous: true,
    },
    {
      name: "--dns",
      description: "Report the current DNS configuration",
    },
    {
      name: "--proxy",
      description: "Report the current system proxy configuration",
    },
    {
      name: "--nwi",
      description: "Report network information",
    },
    {
      name: "-a",
      description: "Iterate over all interfaces, only valid with --nwi",
    },
    {
      name: "--nc",
      description: "Access the VPN network configuration commands",
      args: [
        {
          name: "command",
          suggestions: ncCommands,
          isOptional: true,
        },
        {
          name: "service-or-hostname",
          isOptional: true,
          generators: vpnServices,
        },
      ],
    },
    {
      name: "--renew",
      description: "Re-evaluate the network configuration of the interface",
      args: {
        name: "interface-name",
        isOptional: true,
        generators: networkInterfaces,
      },
    },
  ],
};

export default completionSpec;
