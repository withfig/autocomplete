const prefs: Fig.Suggestion[] = [
  { name: "ComputerName", description: "Name of the computer" },
  {
    name: "LocalHostName",
    description: "Local (Bonjour) host name of the computer",
  },
  { name: "HostName", description: "Host name of the computer" },
];

const ncCommands: Fig.Suggestion[] = [
  { name: "list", description: "List available network connection services" },
  {
    name: "status",
    description: "Indicate whether a given service is connected",
  },
  {
    name: "show",
    description: "Display configuration information for a given service",
  },
  {
    name: "statistics",
    description: "Provide statistics on bytes, packets, and errors",
  },
  { name: "select", description: "Make the given service active" },
  { name: "start", description: "Start a given service" },
  { name: "stop", description: "Stop a given service" },
  { name: "suspend", description: "Suspend a given service" },
  { name: "resume", description: "Resume a given service" },
  { name: "trigger", description: "Trigger a given service on demand" },
  { name: "help", description: "Display the VPN command list" },
];

const serviceArg: Fig.Arg = {
  name: "service",
  description: "Network connection (VPN) service",
  isVariadic: false,
};

const completionSpec: Fig.Spec = {
  name: "scutil",
  description: "Manage system configuration parameters",
  options: [
    {
      name: "--prefs",
      description: "Interactive access to the [raw] stored preferences",
      args: {
        name: "preference-file",
        description: "Preference file to open",
        isOptional: true,
        template: ["filepaths"],
      },
    },
    {
      name: "-r",
      description: "Check reachability of node, address, or address pair",
      args: [
        {
          name: "nodename/address",
          description: "Node name or address to check",
        },
        {
          name: "remote-address",
          description: "Remote address of the pair to check",
          isOptional: true,
        },
      ],
    },
    {
      name: "-W",
      description: 'With -r, "watch" the reachability status',
    },
    {
      name: "-w",
      description: "Wait for presence of dynamic store key",
      args: {
        name: "dynamic-store-key",
        description: "Dynamic store key to wait for",
      },
    },
    {
      name: "-t",
      description: "Time to wait for key (with -w)",
      args: {
        name: "timeout",
        description: "Timeout in seconds",
      },
    },
    {
      name: "--get",
      description: "Display the specified preference",
      args: {
        name: "pref",
        description: "Preference to display",
        suggestions: prefs,
      },
    },
    {
      name: "--set",
      description: "Set the specified preference",
      args: [
        {
          name: "pref",
          description: "Preference to set",
          suggestions: prefs,
        },
        {
          name: "newval",
          description: "New preference value (read from stdin if omitted)",
          isOptional: true,
        },
      ],
    },
    {
      name: "--dns",
      description: "Show DNS configuration",
    },
    {
      name: "--proxy",
      description: 'Show "proxy" configuration',
    },
    {
      name: "--nwi",
      description: "Show network information",
    },
    {
      name: "-a",
      description: "With --nwi, iterate over all interfaces",
    },
    {
      name: "--nc",
      description: "Show VPN network configuration information",
      args: {
        name: "command",
        description: "VPN command",
        isOptional: true,
        suggestions: ncCommands,
      },
    },
    {
      name: "--renew",
      description: "Re-evaluate network configuration on the interface",
      args: {
        name: "interface-name",
        description: "Interface to renew (e.g. en0)",
        isOptional: true,
      },
    },
    {
      name: "--allow-new-interfaces",
      description: "Manage new interface creation with screen locked",
      args: {
        name: "mode",
        description: "Whether to allow new interfaces",
        isOptional: true,
        suggestions: [
          { name: "off", description: "Disallow new interfaces" },
          { name: "on", description: "Allow new interfaces" },
        ],
      },
    },
    {
      name: "--error",
      description: "Display a descriptive message for the given error code",
      args: {
        name: "err#",
        description: "Error code to describe",
      },
    },
  ],
};

export default completionSpec;
