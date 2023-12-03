const completion: Fig.Spec = {
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
          options: [
            {
              name: "--peer-asn-name",
              description: "The peer ASN name",
              args: { name: "peer-asn-name" },
              isRequired: true,
            },
            {
              name: "--peer-asn",
              description: "The Autonomous System Number (ASN) of the peer",
              args: { name: "peer-asn" },
            },
            {
              name: "--peer-contact-detail",
              description:
                "The contact details of the peer. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... , available KEYs are: role, email, phone",
              args: { name: "peer-contact-detail" },
            },
            {
              name: "--peer-name",
              description: "The name of the peer",
              args: { name: "peer-name" },
            },
            {
              name: "--validation-state",
              description:
                "The validation state of the ASN associated with the peer",
              args: {
                name: "validation-state",
                suggestions: ["Approved", "Failed", "None", "Pending"],
              },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes an existing peer ASN with the specified name under the given subscription",
          options: [
            {
              name: "--peer-asn-name",
              description: "The peer ASN name",
              args: { name: "peer-asn-name" },
              isRequired: true,
            },
          ],
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
          options: [
            {
              name: "--peer-asn-name",
              description: "The peer ASN name",
              args: { name: "peer-asn-name" },
              isRequired: true,
            },
          ],
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
          options: [
            {
              name: "--kind",
              description: "The kind of the peering",
              args: { name: "kind", suggestions: ["Direct", "Exchange"] },
              isRequired: true,
            },
            {
              name: "--peering-location",
              description: "The location of the peering",
              args: { name: "peering-location" },
              isRequired: true,
            },
            {
              name: "--asn",
              description: "The ASN number associated with a legacy peering",
              args: { name: "asn" },
            },
          ],
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
          options: [
            {
              name: "--kind",
              description: "The kind of the peering",
              args: { name: "kind", suggestions: ["Direct", "Exchange"] },
              isRequired: true,
            },
            {
              name: "--direct-peering-type",
              description: "The type of direct peering",
              args: {
                name: "direct-peering-type",
                suggestions: [
                  "Cdn",
                  "Edge",
                  "Internal",
                  "Ix",
                  "IxRs",
                  "Transit",
                ],
              },
            },
          ],
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
          options: [
            {
              name: "--kind",
              description: "The kind of the peering",
              args: { name: "kind", suggestions: ["Direct", "Exchange"] },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--sku",
              description:
                "The SKU that defines the tier and kind of the peering. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... , available KEYs are: name, tier, family, size",
              args: { name: "sku" },
              isRequired: true,
            },
            {
              name: "--direct",
              description:
                "The properties that define a direct peering. Expected value: json-string/@json-file",
              args: { name: "direct" },
            },
            {
              name: "--exchange",
              description:
                "The properties that define an exchange peering. Expected value: json-string/@json-file",
              args: { name: "exchange" },
            },
            {
              name: "--peering-location",
              description: "The location of the peering",
              args: { name: "peering-location" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes an existing peering with the specified name under the given subscription and resource group",
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "Lists all of the peerings under the given subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets an existing peering with the specified name under the given subscription and resource group",
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Updates tags for a peering with the specified name under the given subscription and resource group",
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
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
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--as-path",
              description:
                "The optional AS path that can be used to filter the routes",
              args: { name: "as-path" },
            },
            {
              name: "--origin-as-validation-state",
              description:
                "The optional origin AS validation state that can be used to filter the routes",
              args: { name: "origin-as-validation-state" },
            },
            {
              name: "--prefix",
              description:
                "The optional prefix that can be used to filter the routes",
              args: { name: "prefix" },
            },
            {
              name: "--rpki-validation-state",
              description:
                "The optional RPKI validation state that can be used to filter the routes",
              args: { name: "rpki-validation-state" },
            },
            {
              name: "--skip-token",
              description:
                "The optional page continuation token that is used in the event of paginated result",
              args: { name: "skip-token" },
            },
          ],
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
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: "--registered-asn-name",
              description: "The name of the ASN",
              args: { name: "registered-asn-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--asn",
              description: "The customer's ASN from which traffic originates",
              args: { name: "asn" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes an existing registered ASN with the specified name under the given subscription, resource group and peering",
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: "--registered-asn-name",
              description: "The name of the registered ASN",
              args: { name: "registered-asn-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all registered ASNs under the given subscription, resource group and peering",
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets an existing registered ASN with the specified name under the given subscription, resource group and peering",
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: "--registered-asn-name",
              description: "The name of the registered ASN",
              args: { name: "registered-asn-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Creates a new registered ASN with the specified name under the given subscription, resource group and peering",
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: "--registered-asn-name",
              description: "The name of the ASN",
              args: { name: "registered-asn-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--asn",
              description: "The customer's ASN from which traffic originates",
              args: { name: "asn" },
            },
          ],
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
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: "--registered-prefix-name",
              description: "The name of the registered prefix",
              args: { name: "registered-prefix-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--prefix",
              description:
                "The customer's prefix from which traffic originates",
              args: { name: "prefix" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes an existing registered prefix with the specified name under the given subscription, resource group and peering",
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: "--registered-prefix-name",
              description: "The name of the registered prefix",
              args: { name: "registered-prefix-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all registered prefixes under the given subscription, resource group and peering",
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets an existing registered prefix with the specified name under the given subscription, resource group and peering",
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: "--registered-prefix-name",
              description: "The name of the registered prefix",
              args: { name: "registered-prefix-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Creates a new registered prefix with the specified name under the given subscription, resource group and peering",
          options: [
            {
              name: "--peering-name",
              description: "The name of the peering",
              args: { name: "peering-name" },
              isRequired: true,
            },
            {
              name: "--registered-prefix-name",
              description: "The name of the registered prefix",
              args: { name: "registered-prefix-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--prefix",
              description:
                "The customer's prefix from which traffic originates",
              args: { name: "prefix" },
            },
          ],
        },
      ],
    },
    {
      name: "service",
      description: "Peering service",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new peering service or updates an existing peering with the specified name under the given subscription and resource group",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--peering-service-name",
              description: "The name of the peering service",
              args: { name: "peering-service-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--peering-service-location",
              description: "The PeeringServiceLocation of the Customer",
              args: { name: "peering-service-location" },
            },
            {
              name: "--peering-service-provider",
              description: "The MAPS Provider Name",
              args: { name: "peering-service-provider" },
            },
            {
              name: "--sku",
              description:
                "The SKU that defines the type of the peering service. Expect value: name=xx",
              args: { name: "sku" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes an existing peering service with the specified name under the given subscription and resource group",
          options: [
            {
              name: "--peering-service-name",
              description: "The name of the peering service",
              args: { name: "peering-service-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "Lists all of the peerings under the given subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets an existing peering service with the specified name under the given subscription and resource group",
          options: [
            {
              name: "--peering-service-name",
              description: "The name of the peering",
              args: { name: "peering-service-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Updates tags for a peering service with the specified name under the given subscription and resource group",
          options: [
            {
              name: "--peering-service-name",
              description: "The name of the peering service",
              args: { name: "peering-service-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
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
          name: "location",
          description: "Peering service location",
          subcommands: [
            {
              name: "list",
              description:
                "Lists all of the available locations for peering service",
              options: [
                {
                  name: "--country",
                  description:
                    "The country of interest, in which the locations are to be present",
                  args: { name: "country" },
                },
              ],
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
              options: [
                {
                  name: "--peering-service-name",
                  description: "The name of the peering service",
                  args: { name: "peering-service-name" },
                  isRequired: true,
                },
                {
                  name: "--prefix-name",
                  description: "The name of the prefix",
                  args: { name: "prefix-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--peering-service-prefix-key",
                  description: "The peering service prefix key",
                  args: { name: "peering-service-prefix-key" },
                },
                {
                  name: "--prefix",
                  description: "The prefix from which your traffic originates",
                  args: { name: "prefix" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes an existing prefix with the specified name under the given subscription, resource group and peering service",
              options: [
                {
                  name: "--peering-service-name",
                  description: "The name of the peering service",
                  args: { name: "peering-service-name" },
                  isRequired: true,
                },
                {
                  name: "--prefix-name",
                  description: "The name of the prefix",
                  args: { name: "prefix-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description:
                "Lists all prefixes under the given subscription, resource group and peering service",
              options: [
                {
                  name: "--peering-service-name",
                  description: "The name of the peering service",
                  args: { name: "peering-service-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--expand",
                  description: "The properties to be expanded",
                  args: { name: "expand" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets an existing prefix with the specified name under the given subscription, resource group and peering service",
              options: [
                {
                  name: "--peering-service-name",
                  description: "The name of the peering service",
                  args: { name: "peering-service-name" },
                  isRequired: true,
                },
                {
                  name: "--prefix-name",
                  description: "The name of the prefix",
                  args: { name: "prefix-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--expand",
                  description: "The properties to be expanded",
                  args: { name: "expand" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Creates a new prefix with the specified name under the given subscription, resource group and peering service",
              options: [
                {
                  name: "--peering-service-name",
                  description: "The name of the peering service",
                  args: { name: "peering-service-name" },
                  isRequired: true,
                },
                {
                  name: "--prefix-name",
                  description: "The name of the prefix",
                  args: { name: "prefix-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--peering-service-prefix-key",
                  description: "The peering service prefix key",
                  args: { name: "peering-service-prefix-key" },
                },
                {
                  name: "--prefix",
                  description: "The prefix from which your traffic originates",
                  args: { name: "prefix" },
                },
              ],
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
      ],
    },
  ],
};

export default completion;
