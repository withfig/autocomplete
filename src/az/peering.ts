const completionSpec: Fig.Spec = {
  name: "peering",
  description: "Manage peering",
  subcommands: [
    {
      name: "asn",
      description: "Peering asn",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new peer ASN or updates an existing peer ASN with the specified name under the given subscription",
        },
        {
          name: "delete",
          description:
            "Deletes an existing peer ASN with the specified name under the given subscription",
        },
        {
          name: "list",
          description:
            "Lists all of the peer ASNs under the given subscription",
        },
        {
          name: "show",
          description:
            "Gets the peer ASN with the specified name under the given subscription",
        },
      ],
    },
    {
      name: "legacy",
      description: "Peering legacy",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all of the legacy peerings under the given subscription matching the specified kind and location",
        },
      ],
    },
    {
      name: "location",
      description: "Peering location",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all of the available peering locations for the specified kind of peering",
        },
      ],
    },
    {
      name: "peering",
      description: "Peering peering",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new peering or updates an existing peering with the specified name under the given subscription and resource group",
        },
        {
          name: "delete",
          description:
            "Deletes an existing peering with the specified name under the given subscription and resource group",
        },
        {
          name: "list",
          description: "Lists all of the peerings under the given subscription",
        },
        {
          name: "show",
          description:
            "Gets an existing peering with the specified name under the given subscription and resource group",
        },
        {
          name: "update",
          description:
            "Updates tags for a peering with the specified name under the given subscription and resource group",
        },
      ],
    },
    {
      name: "received-route",
      description: "Peering received-route",
      subcommands: [
        {
          name: "list",
          description:
            "Lists the prefixes received over the specified peering under the given subscription and resource group",
        },
      ],
    },
    {
      name: "registered-asn",
      description: "Peering registered-asn",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new registered ASN with the specified name under the given subscription, resource group and peering",
        },
        {
          name: "delete",
          description:
            "Deletes an existing registered ASN with the specified name under the given subscription, resource group and peering",
        },
        {
          name: "list",
          description:
            "Lists all registered ASNs under the given subscription, resource group and peering",
        },
        {
          name: "show",
          description:
            "Gets an existing registered ASN with the specified name under the given subscription, resource group and peering",
        },
        {
          name: "update",
          description:
            "Creates a new registered ASN with the specified name under the given subscription, resource group and peering",
        },
      ],
    },
    {
      name: "registered-prefix",
      description: "Peering registered-prefix",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new registered prefix with the specified name under the given subscription, resource group and peering",
        },
        {
          name: "delete",
          description:
            "Deletes an existing registered prefix with the specified name under the given subscription, resource group and peering",
        },
        {
          name: "list",
          description:
            "Lists all registered prefixes under the given subscription, resource group and peering",
        },
        {
          name: "show",
          description:
            "Gets an existing registered prefix with the specified name under the given subscription, resource group and peering",
        },
        {
          name: "update",
          description:
            "Creates a new registered prefix with the specified name under the given subscription, resource group and peering",
        },
      ],
    },
    {
      name: "service",
      description: "Peering service",
      subcommands: [
        {
          name: "country",
          description: "Peering service country",
          subcommands: [
            {
              name: "list",
              description:
                "Lists all of the available countries for peering service",
            },
          ],
        },
        {
          name: "create",
          description:
            "Creates a new peering service or updates an existing peering with the specified name under the given subscription and resource group",
        },
        {
          name: "delete",
          description:
            "Deletes an existing peering service with the specified name under the given subscription and resource group",
        },
        {
          name: "list",
          description: "Lists all of the peerings under the given subscription",
        },
        {
          name: "location",
          description: "Peering service location",
          subcommands: [
            {
              name: "list",
              description:
                "Lists all of the available locations for peering service",
            },
          ],
        },
        {
          name: "prefix",
          description: "Peering service prefix",
          subcommands: [
            {
              name: "create",
              description:
                "Creates a new prefix with the specified name under the given subscription, resource group and peering service",
            },
            {
              name: "delete",
              description:
                "Deletes an existing prefix with the specified name under the given subscription, resource group and peering service",
            },
            {
              name: "list",
              description:
                "Lists all prefixes under the given subscription, resource group and peering service",
            },
            {
              name: "show",
              description:
                "Gets an existing prefix with the specified name under the given subscription, resource group and peering service",
            },
            {
              name: "update",
              description:
                "Creates a new prefix with the specified name under the given subscription, resource group and peering service",
            },
          ],
        },
        {
          name: "provider",
          description: "Peering service provider",
          subcommands: [
            {
              name: "list",
              description:
                "Lists all of the available peering service locations for the specified kind of peering",
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets an existing peering service with the specified name under the given subscription and resource group",
        },
        {
          name: "update",
          description:
            "Updates tags for a peering service with the specified name under the given subscription and resource group",
        },
      ],
    },
  ],
};

export default completionSpec;
