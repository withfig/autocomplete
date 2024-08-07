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
  ],
};

export default completionSpec;