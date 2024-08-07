const hardwareports: Fig.Generator = {
  script: ["networksetup", "-listallhardwareports"],
  postProcess: (out) => {
    const suggestions: Fig.Suggestion[] = [];
    const re = /^Hardware Port: (.*?)\n.*?Device: (.*?)$/gms;
    for (const match of out.matchAll(re)) {
      suggestions.push({
        name: match[1],
        description: `Interface: ${match[2]}`,
      });
    }
    return suggestions;
  },
};

const networkservices: Fig.Generator = {
  script: ["networksetup2", "-listallnetworkservices"],
  postProcess: (out) => {
    const suggestions: Fig.Suggestion[] = [];
    const lines = out.split("\n");

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (
        trimmedLine ===
        "An asterisk (*) denotes that a network service is disabled."
      ) {
        continue;
      }
      if (trimmedLine.length > 0) {
        const serviceName = trimmedLine.replace(/^\* /, "").trim();
        const description = trimmedLine.startsWith("*")
          ? "Disabled network service"
          : "Network service";
        suggestions.push({ name: serviceName, description });
      }
    }
    return suggestions;
  },
};

const completionSpec: Fig.Spec = {
  name: "networksetup",
  description: "Configuration tool for network settings in System Preferences",
  subcommands: [
    {
      name: "-listnetworkserviceorder",
      description:
        "Displays a list of network services in the order they are contacted for a connection, along with the corresponding port and device for each",
    },
    {
      name: "-listallnetworkservices",
      description:
        "Displays a list of all the network services on the server's hardware ports",
    },
    {
      name: "-listallhardwareports",
      description:
        "Displays list of hardware ports with corresponding device name and ethernet address",
    },
    {
      name: "-detectnewhardware",
      description:
        "Detects new network hardware and creates a default network service on the hardware",
    },
    {
      name: "-getmacaddress",
      description:
        "Displays ethernet (or Wi-Fi) address for hardwareport or device specified",
      args: {
        name: "hardwareport",
        generators: hardwareports,
      },
    },
    {
      name: "-getcomputername",
      description: "Displays the computer name",
    },
    {
      name: "-setcomputername",
      description:
        "Sets computer name to <computername>. This name is used by AFP",
      args: {
        name: "computername",
        description: "The new name for your computer on the network",
      },
    },
    {
      name: "-getinfo",
      description:
        "Displays the IP address, subnet mask, router, and hardware address for the <networkservice> that you specify",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setmanual",
      description:
        "Set the TCP/IP configuration for <networkservice> to manual with IP address set to <ip>, Subnet Mask set to <subnet>, and Router address set to <router>",
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "ip",
          description: "The IP address to set for the network service",
        },
        { name: "subnet", description: "The subnet mask to apply" },
        { name: "router", description: "The router address to set" },
      ],
    },
    {
      name: "-setdhcp",
      description: `Use this command to set the TCP/IP configuration for the specified <networkservice> to use DHCP. The client ID is optional. Specify "Empty" for [clientid] to clear the DHCP client id`,
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "clientid",
          description: "Optional DHCP client ID. Use 'Empty' to clear it",
          isOptional: true,
        },
      ],
    },
    {
      name: "-setbootp",
      description:
        "Use this command to set the TCP/IP configuration for the specified <networkservice> to use BOOTP",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setmanualwithdhcprouter",
      description:
        "Use this command to specify a manual IP address to use for DHCP for the specified <networkservice>",
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "ip",
          description: "The IP address to set for the network service",
        },
      ],
    },
    {
      name: "-getadditionalroutes",
      description:
        "Use this command to display the list of additional IPv4 routes configured for the service",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setadditionalroutes",
      description:
        "Use this command to set the list of IPv4 additional routes configured for the service. Each route is specified as a (destination address, subnet mask, gateway address) tuple. Specifying no tuples clears the list of routes",
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "dest mask gate",
          description:
            "One or more tuples of (destination address, subnet mask, gateway address). Specify 'Empty' to clear routes",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "-setv4off",
      description:
        "Use this command to turn IPv4 off on the specified <networkservice>",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setv6off",
      description:
        "Use this command to turn IPv6 off on the specified <networkservice>",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setv6automatic",
      description:
        "Use this command to set IPv6 to get its addresses automatically for <networkservice>",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setv6linklocal",
      description:
        "Use this command to set IPv6 to only use link local for <networkservice>",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setv6manual",
      description:
        "Use this command to set IPv6 to get its addresses manually for <networkservice>. Specify the ip address, the prefix length and the router",
      args: [
        { name: "ip", description: "The IPv6 address to assign" },
        {
          name: "prefixlength",
          description: "The prefix length for the IPv6 address (e.g., 64)",
        },
        { name: "router", description: "The IPv6 address of the router" },
      ],
    },
    {
      name: "-getv6additionalroutes",
      description:
        "Use this command to display the list of additional IPv6 routes configured for the service",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setv6additionalroutes",
      description:
        "Use this command to set the list of additional routes configured for the service. Each route is specified as a (destination address, prefix length, gateway address) tuple. Specifying no tuples clears the list of routes",
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "dest prefixlength gate",
          description:
            "The list of routes, each specified as a tuple of destination address, prefix length, and gateway address. Provide multiple routes or omit this to clear all routes",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "-getdnsservers",
      description: "Displays DNS info for <networkservice>",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setdnsservers",
      description: `Use this command to specify the IP addresses of servers you want the specified <networkservice> to use to resolve domain names. You can list any number of servers (replace dns1, dns2, and so on with the IP addresses of domain name servers). If you want to clear all DNS entries for the specified network service, type "empty" in place of the DNS server names`,
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "dns",
          description:
            "IP addresses of DNS servers. Use 'empty' to clear all DNS entries",
          isVariadic: true,
        },
      ],
    },
    {
      name: "-getsearchdomains",
      description: "Displays Domain Name info for <networkservice>",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setsearchdomains",
      description: `Use this command to designate the search domain for the specified <networkservice>. You can list any number of search domains (replace domain1, domain2, and so on with the name of a local domain). If you want to clear all search domain entries for the specified network service, type “empty” in place of the domain name`,
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "domain",
          description:
            "List of search domains. Use 'empty' to clear all existing domains",
          isVariadic: true,
        },
      ],
    },
  ],
};

export default completionSpec;
