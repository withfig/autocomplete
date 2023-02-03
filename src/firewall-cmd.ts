const zones: Fig.Generator = {
  script: "firewall-cmd --get-zones",
  postProcess(out) {
    return out.split(" ").map((zone) => {
      return { name: zone };
    });
  },
};

const policies: Fig.Generator = {
  script: "firewall-cmd --get-policies",
  postProcess(out) {
    return out.split(" ").map((policy) => {
      return { name: policy };
    });
  },
};

const services: Fig.Generator = {
  script: "firewall-cmd --get-services",
  postProcess(out) {
    return out.split(" ").map((service) => {
      return { name: service };
    });
  },
};

const newPorts: Fig.Generator = {
  // needs some work to prevent suggestions like "80/tcp/udp"
  custom: async (tokens) => {
    const search = tokens
      .filter((token) => token.startsWith("--add-port="))[0]
      .split("=")[1];
    if (search.length == 0) return [];
    const suggestions: Fig.Suggestion[] = [];
    const types = ["tcp", "udp", "sctp", "dccp"];
    for (const type of types) {
      suggestions.push({ name: `${search}/${type}` });
    }
    return suggestions;
  },
};

const addedPorts: Fig.Generator = {
  script: "firewall-cmd --list-ports",
  postProcess(out) {
    return out.split(" ").map((port) => {
      return { name: port };
    });
  },
};

const icmpTypes: Fig.Generator = {
  script: "firewall-cmd --get-icmptypes",
  postProcess(out) {
    return out.split(" ").map((port) => {
      return { name: port };
    });
  },
};

const addedIcmpBlocks: Fig.Generator = {
  script: "firewall-cmd --list-icmp-blocks",
  postProcess(out) {
    return out.split(" ").map((block) => {
      return { name: block };
    });
  },
};

const timeout: Fig.Generator = {
  // needs some work to prevent suggestions like "45sm"
  custom: async (tokens) => {
    const search = tokens
      .filter((token) => token.startsWith("--timeout="))[0]
      .split("=")[1];
    if (search.length === 0) return [];
    const types = ["s", "m", "h"];
    const suggestions: Fig.Suggestion[] = [{ name: search }];
    for (const type of types) {
      if (search.endsWith(type)) continue;
      suggestions.push({ name: `${search}${type}` });
    }
    return suggestions;
  },
};

const completionSpec: Fig.Spec = {
  name: "firewall-cmd",
  description: "Firewalld command line client",
  options: [
    {
      name: ["-h", "--help"],
      description: "Prints a short help text and exits",
    },
    {
      name: ["-v", "--version"],
      description: "Print the version string of firewalld",
    },
    {
      name: ["-q", "--quiet"],
      description: "Do not print status messages",
    },
    {
      name: "--reload",
      description: "Reload firewalld and keep state information",
    },
    {
      name: "--complete-reload",
      description: "Reload firewall completely, even netfilter kernel modules",
      isDangerous: true,
    },
    {
      name: "--runtime-to-permanent",
      description:
        "Save active runtime configuration and overwrite permanent configuration with it",
      isDangerous: true,
    },
    {
      name: "--check-config",
      description: "Run checks on the permanent configuration",
    },
    {
      name: "--reset-to-defaults",
      description: "Reset configuration to firewalld's default configuration",
      isDangerous: true,
    },
    {
      name: "--get-log-denied",
      description: "Print the log denied setting",
    },
    {
      name: "--set-log-denied",
      description: "Add logging rules right before reject and drop rules",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["all", "unicast", "broadcast", "multicast", "off"],
      },
    },
    {
      name: "--permanent",
      description: "Set options permanently",
      exclusiveOn: ["--timeout"],
    },
    {
      name: "--get-default-zone",
      description: "Print default zone for connections and interfaces",
    },
    {
      name: "--set-default-zone",
      description: "Set default zone for connections and interfaces",
      requiresSeparator: true,
      args: {
        name: "zone",
        generators: zones,
      },
    },
    {
      name: "--get-active-zones",
      description: "List active zones and interfaces",
    },
    {
      name: "--get-zones",
      description: "Print predefined zones as a space separated list",
      dependsOn: ["--permanent"],
    },
    {
      name: "--get-services",
      description: "Print predefined services as a space separated list",
      dependsOn: ["--permanent"],
    },
    {
      name: "--get-icmptypes",
      description: "Print predefined icmptypes as a space separated list",
      dependsOn: ["--permanent"],
    },
    {
      name: "--get-zone-of-interface",
      description: "Print the name of the zone the interface is bound to",
      requiresSeparator: true,
      args: {
        name: "interface",
      },
      dependsOn: ["--permanent"],
    },
    {
      name: "--get-zone-of-source",
      description: "Print the name of the zone the source is bound to",
      requiresSeparator: true,
      args: {
        name: "source",
      },
      dependsOn: ["--permanent"],
    },
    {
      name: "--info-zone",
      description: "Print information about the zone",
      requiresSeparator: true,
      args: {
        name: "zone",
        generators: zones,
      },
      dependsOn: ["--permanent"],
    },
    {
      name: "--list-all-zones",
      description: "List everything added for or enabled in all zones",
      dependsOn: ["--permanent"],
    },
    {
      name: "--new-zone",
      description: "Add a new permanent and empty zone",
      requiresSeparator: true,
      args: {
        name: "name",
      },
      dependsOn: ["--permanent"],
    },
    {
      name: "--new-zone-from-file",
      description:
        "Add a new zone from a prepared zone file with an optional name override",
      requiresSeparator: true,
      args: {
        name: "filename",
        template: "folders",
      },
      dependsOn: ["--permanent", "--name"],
    },
    {
      name: "--name",
      description: "Specify name",
      requiresSeparator: true,
      args: {
        name: "name",
      },
    },
    {
      name: "--delete-zone",
      description: "Delete an existing zone",
      requiresSeparator: true,
      args: {
        name: "zone",
        generators: zones,
      },
      dependsOn: ["--permanent"],
    },
    {
      name: "--load-zone-defaults",
      description: "Load zone default settings or report NO_DEFAULTS error",
      requiresSeparator: true,
      args: {
        name: "zone",
        generators: zones,
      },
      dependsOn: ["--permanent"],
    },
    {
      name: "--path-zone",
      description: "Print path of the zone configuration file",
      requiresSeparator: true,
      args: {
        name: "zone",
        generators: zones,
      },
      dependsOn: ["--permanent"],
    },
    {
      name: "--get-policies",
      description: "Print predefined policies as a space separated list",
      dependsOn: ["--permanent"],
    },
    {
      name: "--info-policy",
      description: "Print information about a policy",
      requiresSeparator: true,
      args: {
        name: "policy",
        generators: policies,
      },
      dependsOn: ["--permanent"],
    },
    {
      name: "--list-all-policies",
      description: "List everything added for or enabled in all policies",
      dependsOn: ["--permanent"],
    },
    {
      name: "--new-policy",
      description: "Add a new policy",
      requiresSeparator: true,
      args: {
        name: "name",
      },
      dependsOn: ["--permanent"],
    },
    {
      name: "--new-policy-from-file",
      description: "Add a new permanent policy from a prepared policy file",
      requiresSeparator: true,
      args: {
        name: "file",
        template: "filepaths",
      },
      dependsOn: ["--permanent", "--name"],
    },
    {
      name: "--path-policy",
      description: "Print path of the policy configuration file",
      requiresSeparator: true,
      args: {
        name: "policy",
        generators: policies,
      },
      dependsOn: ["--permanent"],
    },
    {
      name: "--delete-policy",
      description: "Delete an existing permanent policy",
      requiresSeparator: true,
      args: {
        name: "policy",
        generators: policies,
      },
      dependsOn: ["--permanent"],
    },
    {
      name: "--load-policy-defaults",
      description: "Load the shipped defaults for a policy",
      requiresSeparator: true,
      args: {
        name: "policy",
        generators: policies,
      },
      dependsOn: ["--permanent"],
    },
    {
      name: "--zone",
      description: "Specify zone",
      requiresSeparator: true,
      args: {
        name: "zone",
        generators: zones,
      },
    },
    {
      name: "--policy",
      description: "Specify policy",
      requiresSeparator: true,
      args: {
        name: "policy",
        generators: policies,
      },
    },
    {
      name: "--list-all",
      description: "List everything",
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--get-target",
      description: "Get target",
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--set-target",
      description: "Set the target",
      requiresSeparator: true,
      args: {
        name: "target",
        suggestions: ["default", "ACCEPT", "DROP", "REJECT", "CONTINUE"],
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--set-description",
      description: "Sets the description",
      requiresSeparator: true,
      args: {
        name: "description",
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--get-description",
      description: "Print description",
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--set-short",
      description: "Set the short description",
      requiresSeparator: true,
      args: {
        name: "description",
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--get-short",
      description: "Get the short description",
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--list-services",
      description: "List services added as a space separated list",
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--timeout",
      requiresSeparator: true,
      args: {
        name: "timeout",
        generators: timeout,
      },
      exclusiveOn: ["--permanent"],
    },
    {
      name: "--add-service",
      description: "Add a service",
      requiresSeparator: true,
      args: {
        name: "service",
        generators: services,
      },
      dependsOn: ["--permanent", "--zone", "--policy", "--timeout"],
    },
    {
      name: "--remove-service",
      description: "Remove a service",
      requiresSeparator: true,
      args: {
        name: "service",
        generators: services,
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
      isRepeatable: true,
    },
    {
      name: "--query--service",
      description: "Return whether service has been added",
      requiresSeparator: true,
      args: {
        name: "service",
        generators: services,
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--list-ports",
      description: "List open ports",
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--add-port",
      description: "Add a port",
      requiresSeparator: true,
      args: {
        name: "port",
        generators: newPorts,
      },
      dependsOn: ["--permanent", "--zone", "--policy", "--timeout"],
    },
    {
      name: "--remove-port",
      description: "Remove a port",
      requiresSeparator: true,
      args: {
        name: "port",
        generators: addedPorts,
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
      isRepeatable: true,
    },
    {
      name: "--query-port",
      description: "Return whether port has been added",
      requiresSeparator: true,
      args: {
        name: "port",
        generators: newPorts,
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--list-protocols",
      description: "List protocols",
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--add-protocol",
      description: "Add a protocol",
      requiresSeparator: true,
      args: {
        name: "protocol",
      },
      dependsOn: ["--permanent", "--zone", "--policy", "--timeout"],
    },
    {
      name: "--remove-protocol",
      description: "Remove a protocol",
      requiresSeparator: true,
      args: {
        name: "protocol",
        // generator is not possible as --list-protocols requires superuser
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--query-protocol",
      description: "Return whether protocol has been added",
      requiresSeparator: true,
      args: {
        name: "protocol",
        // generator is not possible as --list-protocols requires superuser
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--list-source-ports",
      description: "List source ports",
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--add-source-port",
      description: "Add a source port",
      requiresSeparator: true,
      args: {
        name: "port",
        generators: newPorts,
      },
      dependsOn: ["--permanent", "--zone", "--policy", "--timeout"],
    },
    {
      name: "--remove-source-port",
      description: "Remove a source port",
      requiresSeparator: true,
      args: {
        name: "port",
        generators: newPorts,
        // a generator of added source ports is not possible as --list-source-ports requires superuser
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--query-source-port",
      description: "Return whether source port has been added",
      requiresSeparator: true,
      args: {
        name: "port",
        generators: newPorts,
        // a generator of added source ports is not possible as --list-source-ports requires superuser
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--list-icmp-blocks",
      description: "List icmp blocks",
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--add-icmp-block",
      description: "Add an icmp block",
      requiresSeparator: true,
      args: {
        name: "icmp block",
        generators: icmpTypes,
      },
      dependsOn: ["--permanent", "--zone", "--policy", "--timeout"],
    },
    {
      name: "--remove-icmp-block",
      description: "Remove an icmp block",
      requiresSeparator: true,
      args: {
        name: "icmp block",
        generators: addedIcmpBlocks,
      },
      dependsOn: ["--permanent", "--zone", "--polcy"],
    },
    {
      name: "--query-icmp-block",
      description: "Return wether an icmp block was been added",
      requiresSeparator: true,
      args: {
        name: "icmp block",
        generators: addedIcmpBlocks,
      },
    },
    {
      name: "--list-forward-ports",
      description: "List ipv4 forwarded ports",
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--add-forward-port",
      description: "Add an ipv4 forwarded port",
      requiresSeparator: true,
      args: {
        name: "port",
        // port=portid[-portid]:proto=protocol[:toport=portid[-portid]][:toaddr=address[/mask]]
        // somebody else make a generator if they want to try and decipher this mess lol
      },
      dependsOn: ["--permanent", "--zone", "--policy", "--timeout"],
    },
    {
      name: "--remove-forward-port",
      description: "Remove an ipv4 forwarded port",
      requiresSeparator: true,
      args: {
        name: "port",
        // generator is not possible as --list-forward-ports requires superuser
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--query-forward-port",
      description: "Return whether an ipv4 forwarded port has been added",
      requiresSeparator: true,
      args: {
        name: "port",
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--add-masquarde",
      description: "Enable ipv4 masquerade",
      dependsOn: ["--permanent", "--zone", "--policy", "--timeout"],
    },
    {
      name: "--remove-masquerade",
      description: "Disable ipv4 masquerade",
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--query-masquerade",
      description: "Return whether ipv4 masquerade has been enabled",
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--list-rich-rules",
      description: "List rich rules",
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--add-rich-rule",
      description: "Add a rich rule",
      requiresSeparator: true,
      args: {
        name: "rule",
      },
      dependsOn: ["--permanent", "--zone", "--policy", "--timeout"],
    },
    {
      name: "--remove-rich-rule",
      description: "Remove a rich rule",
      requiresSeparator: true,
      args: {
        name: "rule",
        // generator is not possible as --list-rich-rules requires superuser
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
    {
      name: "--query-rich-rule",
      description: "Return whether a rich rule has been added",
      requiresSeparator: true,
      args: {
        name: "rule",
        // generator is not possible as --list-rich-rules requires superuser
      },
      dependsOn: ["--permanent", "--zone", "--policy"],
    },
  ],
};
export default completionSpec;
