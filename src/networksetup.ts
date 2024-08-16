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
  script: ["networksetup", "-listallnetworkservices"],
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

const wirelessInterfaces: Fig.Generator = {
  script: ["networksetup", "-listallhardwareports"],
  postProcess: (out) => {
    const suggestions: Fig.Suggestion[] = [];
    const re = /^Hardware Port: (.*?)\n.*?Device: (.*?)$/gms;
    for (const match of out.matchAll(re)) {
      if (match[1] === "Wi-Fi") {
        suggestions.push({
          name: match[2],
          description: `Hardwareport: ${match[1]}`,
        });
      }
    }
    return suggestions;
  },
};

const interfaces: Fig.Generator = {
  script: ["networksetup", "-listallhardwareports"],
  postProcess: (out) => {
    const suggestions: Fig.Suggestion[] = [];
    const re = /^Hardware Port: (.*?)\n.*?Device: (.*?)$/gms;
    for (const match of out.matchAll(re)) {
      suggestions.push({
        name: match[2],
        description: `Hardwareport: ${match[1]}`,
      });
    }
    return suggestions;
  },
};

const bonds: Fig.Generator = {
  script: ["networksetup", "-listBonds"],
  postProcess: (out) => {
    const suggestions: Fig.Suggestion[] = [];
    const re = /^interface name: (.*?)\n.*?user-defined-name: (.*?)$/gms;
    for (const match of out.matchAll(re)) {
      suggestions.push({ name: match[2], description: "Bonds" });
    }
    return suggestions;
  },
};

const pppoeServices: Fig.Generator = {
  script: ["networksetup", "-listpppoeservices"],
  postProcess: (out) => {
    const suggestions: Fig.Suggestion[] = [];
    const lines = out.trim().split("\n");
    for (const line of lines) {
      if (line.trim()) {
        suggestions.push({ name: line.trim(), description: "PPPoE Service" });
      }
    }
    return suggestions;
  },
};

const locations: Fig.Generator = {
  script: ["networksetup", "-listlocations"],
  postProcess: (out) => {
    const suggestions: Fig.Suggestion[] = [];
    const lines = out.trim().split("\n");
    for (const line of lines) {
      if (line.trim()) {
        suggestions.push({
          name: line.trim(),
          description: "Network Location",
        });
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
    {
      name: "-create6to4service",
      description:
        "Use this command to create a new 6 to 4 service with name <newnetworkservicename>",
      args: {
        name: "newnetworkservicename",
        description: "The name of the new 6 to 4 service to be created",
      },
    },
    {
      name: "-set6to4automatic",
      description:
        "Use this command to set the 6 to 4 service such that it will get the relay address automatically",
      args: {
        name: "newnetworkservicename",
        description:
          "The name of the 6 to 4 service to be configured for automatic relay address retrieval",
      },
    },
    {
      name: "-set6to4manual",
      description:
        "Use this command to set the 6 to 4 service such that it will get the relay address manually. Specify the <relayaddress> that you would like to set",
      args: [
        {
          name: "newnetworkservicename",
          description: "The name of the 6 to 4 service to be configured",
        },
        {
          name: "relayaddress",
          description:
            "The manually specified relay address to be used by the 6 to 4 service",
        },
      ],
    },
    {
      name: "-getwebproxy",
      description:
        "Displays Web proxy (server, port, enabled value) info for <networkservice>",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setwebproxy",
      description:
        "Set Web proxy for <networkservice> with <domain> and <port number>. Turns proxy on. Optionally, specify <on> or <off> for <authenticated> to enable and disable authenticated proxy support. Specify <username> and <password> if you turn authenticated proxy support on",
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "domain",
          description: "The domain name or IP address of the proxy server",
        },
        {
          name: "portnumber",
          description: "The port number for the proxy server",
        },
        {
          name: "authenticated",
          description: "Specify whether proxy authentication is required",
          isOptional: true,
          suggestions: [
            {
              name: "on",
              description:
                "Specify <on> for <authenticated> to enable authenticated proxy support",
            },
            {
              name: "off",
              description:
                "Specify <off> for <authenticated> to disable authenticated proxy support",
            },
          ],
        },
        {
          name: "username",
          description: "The username for proxy authentication",
        },
        {
          name: "password",
          description: "The password for proxy authentication",
        },
      ],
    },
    {
      name: "-setwebproxystate",
      description: "Set Web proxy on <networkservice> to either <on> or <off>",
      args: [
        { name: "networkservice", generators: networkservices },
        { name: "on | off", suggestions: ["on", "off"] },
      ],
    },
    {
      name: "-getsecurewebproxy",
      description:
        "Displays Secure Web proxy (server, port, enabled value) info for <networkservice>",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setsecurewebproxy",
      description:
        "Set Secure Web proxy for <networkservice> with <domain> and <port number>. Turns proxy on. Optionally, specify <on> or <off> for <authenticated> to enable and disable authenticated proxy support. Specify <username> and <password> if you turn authenticated proxy support on",
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "domain",
          description: "The proxy server's domain or IP address",
        },
        {
          name: "portnumber",
          description: "The port number for the proxy server",
        },
        {
          name: "authenticated",
          description: "Specify whether proxy authentication is required",
          isOptional: true,
          suggestions: [
            {
              name: "on",
              description:
                "Specify <on> for <authenticated> to enable authenticated proxy support",
            },
            {
              name: "off",
              description:
                "Specify <off> for <authenticated> to disable authenticated proxy support",
            },
          ],
        },
        {
          name: "username",
          description: "The username for proxy authentication",
        },
        {
          name: "password",
          description: "The password for proxy authentication",
        },
      ],
    },
    {
      name: "-setsecurewebproxystate",
      description:
        "Set Secure Web proxy on <networkservice> to either <on> or <off>",
      args: [
        { name: "networkservice", generators: networkservices },
        { name: "on | off", suggestions: ["on", "off"] },
      ],
    },
    {
      name: "-getsocksfirewallproxy",
      description:
        "Displays SOCKS Firewall proxy (server, port, enabled value) info for <networkservice>",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setsocksfirewallproxy",
      description:
        "Set SOCKS Firewall proxy for <networkservice> with <domain> and <port number>. Turns proxy on.  Optionally, specify <on> or <off> for <authenticated> to enable and disable authenticated proxy support. Specify <username> and <password> if you turn authenticated proxy support on",
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "domain",
          description: "The proxy server's domain or IP address",
        },
        {
          name: "portnumber",
          description: "The port number for the proxy server",
        },
        {
          name: "authenticated",
          description: "Specify whether proxy authentication is required",
          isOptional: true,
          suggestions: [
            {
              name: "on",
              description:
                "Specify <on> for <authenticated> to enable authenticated proxy support",
            },
            {
              name: "off",
              description:
                "Specify <off> for <authenticated> to disable authenticated proxy support",
            },
          ],
        },
        {
          name: "username",
          description: "The username for proxy authentication",
        },
        {
          name: "password",
          description: "The password for proxy authentication",
        },
      ],
    },
    {
      name: "-setsocksfirewallproxystate",
      description: "Set SOCKS Firewall proxy to  either <on> or <off>",
      args: [
        { name: "networkservice", generators: networkservices },
        { name: "on | off", suggestions: ["on", "off"] },
      ],
    },
    {
      name: "-getproxybypassdomains",
      description: "Displays Bypass Domain Names for <networkservice>",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setproxybypassdomains",
      description: `Set the Bypass Domain Name Servers for <networkservice> to <domain1> [domain2] [...]. Any number of Domain Name servers can be specified. Specify "Empty" for <domain1> to clear all Domain Name entries`,
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "domain",
          description:
            "Domains to bypass proxy for. Use 'Empty' to clear all bypass domains",
          isVariadic: true,
        },
      ],
    },
    {
      name: "-getproxyautodiscovery",
      description: "Displays Proxy Auto Discover for <networkservice>",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setproxyautodiscovery",
      description:
        "Set Proxy Auto Discover for <networkservice> to either <on> or <off>",
      args: [
        { name: "networkservice", generators: networkservices },
        { name: "on | off", suggestions: ["on", "off"] },
      ],
    },
    {
      name: "-setautoproxyurl",
      description:
        "Set proxy auto-config to url for <networkservice> and enable it",
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "url",
          description: "The URL of the proxy auto-config (PAC) file",
        },
      ],
    },
    {
      name: "-getautoproxyurl",
      description:
        "Displays proxy auto-config (url, enabled) info for <networkservice>",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-getairportnetwork",
      description: "Displays current Wi-Fi Network",
      args: {
        name: "hardwareport",
        generators: wirelessInterfaces,
      },
    },
    {
      name: "-setairportnetwork",
      description:
        "Set Wi-Fi Network to <network> using optional [password] if specified",
      args: [
        { name: "hardwareport", generators: wirelessInterfaces },
        {
          name: "network",
          description: "The name of the Wi-Fi network to connect to",
        },
        {
          name: "password",
          description: "Optional password for the Wi-Fi network",
          isOptional: true,
        },
      ],
    },
    {
      name: "-getairportpower",
      description: "Displays whether Wi-Fi power is on or off",
      args: {
        name: "hardwareport",
        generators: wirelessInterfaces,
      },
    },
    {
      name: "-setairportpower",
      description: "Set Wi-Fi power to either <on> or <off>",
      args: [
        { name: "hardwareport", generators: wirelessInterfaces },
        { name: "on | off", suggestions: ["on", "off"] },
      ],
    },
    {
      name: "-listpreferredwirelessnetworks",
      description: "List the preferred wireless networks for <hardwareport>",
      args: {
        name: "hardwareport",
        generators: wirelessInterfaces,
      },
    },
    {
      name: "-addpreferredwirelessnetworkatindex",
      description:
        "Add wireless network named <network> to preferred list for <hardwareport> at <index>. Store the optional password in the keychain",
      args: [
        { name: "hardwareport", generators: wirelessInterfaces },
        {
          name: "network",
          description: "The name of the Wi-Fi network to add",
        },
        { name: "index", description: "The position in the preferred list" },
        {
          name: "securitytype",
          description: "The security type of the network",
          suggestions: [
            { name: "OPEN", description: "No security" },
            { name: "WPA", description: "WPA Personal" },
            { name: "WPA2", description: "WPA2 Personal" },
            { name: "WPA/WPA2", description: "WPA/WPA2 Personal" },
            { name: "WPAE", description: "WPA Enterprise" },
            { name: "WPA2E", description: "WPA2 Enterprise" },
            {
              name: "WPAE/WPA2E",
              description: "WPA/WPA2 Enterprise",
            },
            { name: "WEP", description: "Plain WEP" },
            { name: "8021XWEP", description: "802.1X WEP" },
          ],
        },
        {
          name: "password",
          description: "Optional password for the network",
          isOptional: true,
        },
      ],
    },
    {
      name: "-removepreferredwirelessnetwork",
      description:
        "Remove <network> from the preferred wireless network list for <hardwareport>",
      args: [
        { name: "hardwareport", generators: wirelessInterfaces },
        {
          name: "network",
          description: "The name of the Wi-Fi network to remove",
        },
      ],
    },
    {
      name: "-removeallpreferredwirelessnetworks",
      description:
        "Remove all networks from the preferred wireless network list for <hardwareport>",
      args: {
        name: "hardwareport",
        generators: wirelessInterfaces,
      },
    },
    {
      name: "-getnetworkserviceenabled",
      description:
        "Displays whether a service is on or off (enabled or disabled)",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-setnetworkserviceenabled",
      description:
        "Use this command to turn the specified network service on or off (enable or disable)",
      args: [
        { name: "networkservice", generators: networkservices },
        { name: "on | off", suggestions: ["on", "off"] },
      ],
    },
    {
      name: "-createnetworkservice",
      description:
        "Create a service named <networkservice> on port <hardwareport>. The new service will be enabled by default",
      args: [
        {
          name: "networkservicename",
          description: "The name for the new network service",
        },
        { name: "hardwareport", generators: hardwareports },
      ],
    },
    {
      name: "-renamenetworkservice",
      description:
        "Use this command to rename the specified network service <networkservice> to <newnetworkservicename>",
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "newnetworkservicename",
          description: "The new name for the network service",
        },
      ],
    },
    {
      name: "-duplicatenetworkservice",
      description:
        "Use this command to duplicate an existing network service <networkservice> and rename it to the specified name <newnetworkservicename>",
      args: [
        { name: "networkservice", generators: networkservices },
        {
          name: "newnetworkservicename",
          description: "The new name for the duplicated network service",
        },
      ],
    },
    {
      name: "-removenetworkservice",
      description:
        "Use this command to delete a network service <networkservice>. You cannot use this command to delete the last remaining service for a hardware port. To do so, you use the -setnetworkserviceenabled command",
      args: {
        name: "networkservice",
        generators: networkservices,
      },
    },
    {
      name: "-ordernetworkservices",
      description: `Use this command to designate the order network services are contacted on the specified hardware port. Name the network you want contacted first, then the second, and so on. Use "listnetworkserviceorder" to view current service order. Note: use quotes around service names which contain spaces (ie. "Built-in Ethernet")`,
      args: {
        name: "service",
        generators: networkservices,
        isVariadic: true,
      },
    },
    {
      name: "-setMTUAndMediaAutomatically",
      description:
        "Set hardwareport or device specified back to automatically setting the MTU and Media",
      args: {
        name: "hardwarePort",
        generators: hardwareports,
      },
    },
    {
      name: "-getMTU",
      description: "Get the MTU value for hardwareport or device specified",
      args: {
        name: "hardwarePort",
        generators: hardwareports,
      },
    },
    {
      name: "-setMTU",
      description: "Set MTU for hardwareport or device specified",
      args: [
        { name: "hardwarePort", generators: hardwareports },
        {
          name: "value",
          description:
            "The MTU value to set, typically an integer representing the maximum packet size",
        },
      ],
    },
    {
      name: "-listValidMTURange",
      description:
        "List the valid MTU range for hardwareport or device specified",
      args: {
        name: "hardwareport",
        generators: hardwareports,
      },
    },
    {
      name: "-getMedia",
      description:
        "Show both the current setting for media and the active media on hardwareport or device specified",
      args: {
        name: "hardwareport",
        generators: hardwareports,
      },
    },
    {
      name: "-setMedia",
      description:
        "Set media for hardwareport or device specified to subtype. Specify optional [option1] and additional options depending on subtype. Any number of valid options can be specified",
      args: [
        { name: "hardwarePort", generators: hardwareports },
        {
          name: "subtype",
          description:
            "The media subtype to set for the hardware port or device",
        },
        {
          name: "option",
          description:
            "Additional options relevant to the <subtype>. Can include multiple values depending on the subtype",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "-listValidMedia",
      description:
        "List valid media options for hardwareport or device name. Enumerates available subtypes and options per subtype",
      args: {
        name: "hardwareport",
        generators: hardwareports,
      },
    },
    {
      name: "-createVLAN",
      description:
        "Create a VLAN with the name <name> over the parent device <parentdevice> and with the tag <tag>",
      args: [
        { name: "name", description: "The name to assign to the new VLAN" },
        {
          name: "parentdevice",
          description: "The parent device over which the VLAN will be created",
          generators: hardwareports,
        },
        { name: "tag", description: "The VLAN tag to assign to the new VLAN" },
      ],
    },
    {
      name: "-deleteVLAN",
      description:
        "Delete the VLAN with the name <name> over the parent device <parentdevice> and with the tag <tag>",
      args: [
        { name: "name", description: "The name of the VLAN to be deleted" },
        {
          name: "parentdevice",
          description: "The parent device on which the VLAN is configured",
          generators: hardwareports,
        },
        { name: "tag", description: "The VLAN tag of the VLAN to be deleted" },
      ],
    },
    {
      name: "-listVLANs",
      description: "List the VLANs that have been created",
    },
    {
      name: "-listdevicesthatsupportVLAN",
      description: "List the devices that support VLANs",
    },
    {
      name: "-isBondSupported",
      description:
        "Displays YES if the device can be added to a bond. NO if it cannot",
      args: {
        name: "device",
        generators: interfaces,
      },
    },
    {
      name: "-createBond",
      description:
        "Create a bond with the user-defined-name name and optionally add any listed devices if they support bonding",
      args: [
        { name: "name", description: "The user-defined name for the new bond" },
        {
          name: "device",
          description:
            "The devices to include in the bond. Any number of devices can be specified",
          generators: interfaces,
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "-deleteBond",
      description: "Delete the bond with the specified device-name",
      args: {
        name: "bond",
        generators: bonds,
      },
    },
    {
      name: "-addDeviceToBond",
      description: "Add device to bond",
      args: [
        { name: "device", generators: interfaces },
        { name: "bond", generators: bonds },
      ],
    },
    {
      name: "-removeDeviceFromBond",
      description: "Remove device from bond",
      args: [
        { name: "device", generators: interfaces },
        { name: "bond", generators: bonds },
      ],
    },
    {
      name: "-listBonds",
      description: "List of all bonds",
    },
    {
      name: "-showBondStatus",
      description: "Display the status of the specified bond",
      args: {
        name: "bond",
        generators: bonds,
      },
    },
    {
      name: "-listpppoeservices",
      description: "List all PPPoE services in the current set",
    },
    {
      name: "-showpppoestatus",
      description:
        "Display the status of the PPPoE service with the specified name",
      args: {
        name: "name",
        generators: pppoeServices,
      },
    },
    {
      name: "-createpppoeservice",
      description:
        "Create a PPPoE service on the specified device with the service name specified",
      args: [
        {
          name: "device",
          description: "The network device to create the PPPoE service on",
          generators: interfaces,
        },
        { name: "name", description: "The name for the new PPPoE service" },
        { name: "account", description: "The PPPoE account name" },
        { name: "password", description: "The PPPoE account password" },
        {
          name: "pppoeName",
          description: "Optional name for the PPPoE service",
          isOptional: true,
        },
      ],
    },
    {
      name: "-deletepppoeservice",
      description: "Delete the service",
      args: {
        name: "service",
        generators: pppoeServices,
      },
    },
    {
      name: "-setpppoeaccountname",
      description: "Set the account name for the service",
      args: [
        { name: "service", generators: pppoeServices },
        { name: "account", description: "The PPPoE account name" },
      ],
    },
    {
      name: "-setpppoepassword",
      description: "Set the password for the service",
      args: [
        { name: "service", generators: pppoeServices },
        { name: "password", description: "The PPPoE account password" },
      ],
    },
    {
      name: "-connectpppoeservice",
      description: "Connect the service",
      args: {
        name: "service",
        generators: pppoeServices,
      },
    },
    {
      name: "-disconnectpppoeservice",
      description: "Disconnect the service",
      args: {
        name: "service",
        generators: pppoeServices,
      },
    },
    {
      name: "-listlocations",
      description: "List all network locations",
    },
    {
      name: "-getcurrentlocation",
      description: "Display the name of the current set",
    },
    {
      name: "-createlocation",
      description:
        "Create a set with the user-defined-name name and optionally populate it with the default services",
      args: [
        { name: "location", description: "The name for the new location" },
        {
          name: "populate",
          description:
            "Specify 'true' to populate with default services or 'false' to create an empty location",
          isOptional: true,
        },
      ],
    },
    {
      name: "-deletelocation",
      description: "Delete the set",
      args: {
        name: "location",
        generators: locations,
      },
    },
    {
      name: "-switchtolocation",
      description: "Make the specified set the current set",
      args: {
        name: "location",
        generators: locations,
      },
    },
    {
      name: "-version",
      description: "Displays version of networksetup tool",
    },
    {
      name: "-help",
      description:
        "Displays a list of all the commands available in the Network Setup Tool, with explanatory information",
    },
    {
      name: "-printcommands",
      description: "Displays a list of commands with no detail",
    },
  ],
};

export default completionSpec;
