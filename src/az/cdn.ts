const completionSpec: Fig.Spec = {
  name: "cdn",
  description: "Manage Azure Content Delivery Networks (CDNs)",
  subcommands: [
    {
      name: "custom-domain",
      description:
        "Manage Azure CDN Custom Domains to provide custom host names for endpoints",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new custom domain to provide a hostname for a CDN endpoint",
        },
        { name: "delete", description: "Delete the custom domain of a CDN" },
        {
          name: "disable-https",
          description: "Disable https delivery of the custom domain",
        },
        {
          name: "enable-https",
          description:
            'Enable HTTPS for a custom domain. The resource name of the custom domain could be obtained using "az cdn custom-domain list"',
        },
        {
          name: "list",
          description:
            "Lists all of the existing custom domains within an endpoint",
        },
        {
          name: "show",
          description: "Show details for the custom domain of a CDN",
        },
      ],
    },
    {
      name: "edge-node",
      description: "View all available CDN edge nodes",
      subcommands: [
        {
          name: "list",
          description:
            "Edgenodes are the global Point of Presence (POP) locations used to deliver CDN content to end users",
        },
      ],
    },
    {
      name: "endpoint",
      description: "Manage CDN endpoints",
      subcommands: [
        {
          name: "create",
          description: "Create a named endpoint to connect to a CDN",
        },
        { name: "delete", description: "Delete a CDN endpoint" },
        { name: "list", description: "List available endpoints for a CDN" },
        { name: "load", description: "Pre-load content for a CDN endpoint" },
        {
          name: "purge",
          description: "Purge pre-loaded content for a CDN endpoint",
        },
        {
          name: "rule",
          description: "Manage delivery rules for an endpoint",
          subcommands: [
            {
              name: "action",
              description: "Manage delivery rule actions for an endpoint",
              subcommands: [
                {
                  name: "add",
                  description: "Add an action to a delivery rule",
                },
                {
                  name: "remove",
                  description: "Remove an action from a delivery rule",
                },
                {
                  name: "show",
                  description:
                    "Show delivery rules asscociate with the endpoint",
                },
              ],
            },
            {
              name: "add",
              description: "Add a delivery rule to a CDN endpoint",
            },
            {
              name: "condition",
              description: "Manage delivery rule conditions for an endpoint",
              subcommands: [
                {
                  name: "add",
                  description: "Add a condition to a delivery rule",
                },
                {
                  name: "remove",
                  description: "Remove a condition from a delivery rule",
                },
                {
                  name: "show",
                  description:
                    "Show delivery rules asscociate with the endpoint",
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a delivery rule from an endpoint",
            },
            {
              name: "show",
              description: "Show delivery rules asscociate with the endpoint",
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile",
        },
        { name: "start", description: "Start a CDN endpoint" },
        { name: "stop", description: "Stop a CDN endpoint" },
        {
          name: "update",
          description:
            "Update a CDN endpoint to manage how content is delivered",
        },
        {
          name: "validate-custom-domain",
          description:
            "Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS",
        },
        {
          name: "waf",
          description: "Manage WAF properties of a CDN endpoint",
          subcommands: [
            {
              name: "policy",
              description: "Apply a CDN WAF policy to a CDN endpoint",
              subcommands: [
                {
                  name: "remove",
                  description: "Remove a CDN WAF policy from a CDN endpoint",
                },
                {
                  name: "set",
                  description:
                    "Set the CDN WAF policy applied to a CDN endpoint",
                },
                {
                  name: "show",
                  description:
                    "Show which CDN WAF policy is applied to a CDN endpoint",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "name-exists",
      description:
        "Check the availability of a resource name. This is needed for resources where name is globally unique, such as a CDN endpoint",
    },
    {
      name: "origin",
      description: "List or show existing origins related to CDN endpoints",
      subcommands: [
        { name: "create", description: "Create an origin" },
        {
          name: "delete",
          description: "Deletes an existing origin within an endpoint",
        },
        {
          name: "list",
          description: "Lists all of the existing origins within an endpoint",
        },
        {
          name: "show",
          description: "Gets an existing origin within an endpoint",
        },
        { name: "update", description: "Update an origin" },
      ],
    },
    {
      name: "origin-group",
      description: "Manage origin groups of an endpoint",
      subcommands: [
        { name: "create", description: "Create an origin group" },
        {
          name: "delete",
          description: "Deletes an existing origin group within an endpoint",
        },
        {
          name: "list",
          description:
            "Lists all of the existing origin groups within an endpoint",
        },
        {
          name: "show",
          description: "Gets an existing origin group within an endpoint",
        },
        { name: "update", description: "Update an origin group" },
      ],
    },
    {
      name: "profile",
      description: "Manage CDN profiles to define an edge network",
      subcommands: [
        { name: "create", description: "Create a new CDN profile" },
        { name: "delete", description: "Delete a CDN profile" },
        { name: "list", description: "List CDN profiles" },
        { name: "show", description: "Show CDN profile details" },
        { name: "update", description: "Update a CDN profile" },
        {
          name: "usage",
          description:
            "Checks the quota and actual usage of endpoints under the given CDN profile",
        },
      ],
    },
    {
      name: "usage",
      description:
        "Check the quota and actual usage of the CDN profiles under the given subscription",
    },
    {
      name: "waf",
      description: "Manage CDN WAF",
      subcommands: [
        {
          name: "policy",
          description: "Manage CDN WAF policies",
          subcommands: [
            {
              name: "custom-rule",
              description: "Manage custom rules of a CDN WAF policy",
              subcommands: [
                {
                  name: "delete",
                  description: "Remove a custom rule from a CDN WAF policy",
                },
                {
                  name: "list",
                  description: "List custom rules of a CDN WAF policy",
                },
                {
                  name: "set",
                  description: "Add a custom rule to a CDN WAF policy",
                },
                {
                  name: "show",
                  description: "Show a custom rule of a CDN WAF policy",
                },
              ],
            },
            { name: "delete", description: "Delete a CDN WAF policy" },
            { name: "list", description: "List CDN WAF policies" },
            {
              name: "managed-rule-set",
              description: "Manage managed rule sets of a CDN WAF policy",
              subcommands: [
                {
                  name: "add",
                  description: "Add a managed rule set to a CDN WAF policy",
                },
                {
                  name: "list",
                  description:
                    "List managed rule sets added to a CDN WAF policy",
                },
                {
                  name: "list-available",
                  description: "List available CDN WAF managed rule sets",
                },
                {
                  name: "remove",
                  description:
                    "Remove a managed rule set from a CDN WAF policy",
                },
                {
                  name: "rule-group-override",
                  description:
                    "Manage rule group overrides of a managed rule on a CDN WAF policy",
                  subcommands: [
                    {
                      name: "delete",
                      description:
                        "Remove a rule group override from a managed rule set on a CDN WAF policy",
                    },
                    {
                      name: "list",
                      description:
                        "List rule group overrides of a managed rule on a CDN WAF policy",
                    },
                    {
                      name: "list-available",
                      description:
                        "List available CDN WAF managed rule groups of a managed rule set",
                    },
                    {
                      name: "set",
                      description:
                        "Add or update a rule group override to a managed rule set on a CDN WAF policy",
                    },
                    {
                      name: "show",
                      description:
                        "Show a rule group override of a managed rule on a CDN WAF policy",
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Show a managed rule of a CDN WAF policy",
                },
              ],
            },
            {
              name: "rate-limit-rule",
              description: "Manage rate limit rules of a CDN WAF policy",
              subcommands: [
                {
                  name: "delete",
                  description: "Remove a rate limit rule from a CDN WAF policy",
                },
                {
                  name: "list",
                  description: "List rate limit rules of a CDN WAF policy",
                },
                {
                  name: "set",
                  description: "Add a rate limit rule to a CDN WAF policy",
                },
                {
                  name: "show",
                  description: "Show a rate limit rule of a CDN WAF policy",
                },
              ],
            },
            { name: "set", description: "Create a new CDN WAF policy" },
            { name: "show", description: "Show details of a CDN WAF policy" },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
