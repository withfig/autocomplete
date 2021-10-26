const completionSpec: Fig.Spec = {
  name: "afd",
  description: "Manage Azure Front Door",
  subcommands: [
    {
      name: "custom-domain",
      description: "Manage custom domains within the specified profile",
      subcommands: [
        {
          name: "create",
          description: "Create a custom domain within the specified profile",
        },
        { name: "delete", description: "Delete a custom domain" },
        {
          name: "list",
          description:
            "List all the custom domains within the specified profile",
        },
        { name: "show", description: "Show the custom domain details" },
        {
          name: "update",
          description: "Update a custom domain within the specified profile",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the custom domain is met",
        },
      ],
    },
    {
      name: "endpoint",
      description: "Manage AFD endpoints within the specified profile",
      subcommands: [
        {
          name: "create",
          description: "Creates an endpoint within the specified profile",
        },
        {
          name: "delete",
          description: "Delete an endpoint within the specified profile",
        },
        {
          name: "list",
          description: "List all the endpoints within the specified profile",
        },
        {
          name: "purge",
          description: "Removes cached contents from Azure Front Door",
        },
        {
          name: "show",
          description:
            "Show details of an endpoint within the specified profile",
        },
        {
          name: "update",
          description: "Update an endpoint within the specified profile",
        },
      ],
    },
    {
      name: "log-analytic",
      description: "Manage afd log analytic results",
      subcommands: [
        {
          name: "location",
          description: "Manage available location names for AFD log analysis",
          subcommands: [
            {
              name: "list",
              description:
                "Get all available location names for AFD log analytics report",
            },
          ],
        },
        {
          name: "metric",
          description: "Manage metric statistics for AFD profile",
          subcommands: [
            { name: "list", description: "Get log report for AFD profile" },
          ],
        },
        {
          name: "ranking",
          description: "Manage ranking statistics for AFD profile",
          subcommands: [
            {
              name: "list",
              description: "Get log analytics ranking report for AFD profile",
            },
          ],
        },
        {
          name: "resource",
          description:
            "Manage endpoints and custom domains available for AFD log analysis",
          subcommands: [
            {
              name: "list",
              description:
                "Get all endpoints and custom domains available for AFD log report",
            },
          ],
        },
      ],
    },
    {
      name: "origin",
      description: "Manage origins within the specified origin group",
      subcommands: [
        { name: "create", description: "Create an AFD origin" },
        {
          name: "delete",
          description: "Deletes an existing origin within an origin group",
        },
        {
          name: "list",
          description:
            "Lists all of the existing origins within an origin group",
        },
        {
          name: "show",
          description: "Gets an existing origin within an origin group",
        },
        {
          name: "update",
          description: "Update the settings of the specified AFD origin",
        },
      ],
    },
    {
      name: "origin-group",
      description: "Manage origin groups under the specified profile",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new origin group within the specified profile",
        },
        {
          name: "delete",
          description:
            "Deletes an existing origin group within the specified profile",
        },
        {
          name: "list",
          description:
            "Lists all of the existing origin groups within a profile",
        },
        {
          name: "show",
          description: "Gets an existing origin group within a profile",
        },
        {
          name: "update",
          description:
            "Creates a new origin group within the specified profile",
        },
      ],
    },
    {
      name: "profile",
      description: "Manage AFD profiles",
      subcommands: [
        { name: "create", description: "Create a new AFD profile" },
        { name: "delete", description: "Delete an AFD profile" },
        { name: "list", description: "List AFD profiles" },
        { name: "show", description: "Show details of an AFD profile" },
        { name: "update", description: "Update an AFD profile" },
        {
          name: "usage",
          description: "List resource usage within the specific AFD profile",
        },
      ],
    },
    {
      name: "route",
      description: "Manage routes under an AFD endpoint",
      subcommands: [
        {
          name: "create",
          description: "Creates a new route within the specified endpoint",
        },
        {
          name: "delete",
          description: "Delete an existing route within the specified endpoint",
        },
        {
          name: "list",
          description: "List all the routes within the specified endpoint",
        },
        { name: "show", description: "Show route details" },
        {
          name: "update",
          description: "Update an existing route within the specified endpoint",
        },
      ],
    },
    {
      name: "rule",
      description: "Manage delivery rules within the specified rule set",
      subcommands: [
        {
          name: "action",
          description: "Manage delivery rule actions for a rule",
          subcommands: [
            { name: "add", description: "Add an action to a delivery rule" },
            {
              name: "list",
              description: "Show actions asscociated with the rule",
            },
            {
              name: "remove",
              description: "Remove an action from a delivery rule",
            },
          ],
        },
        {
          name: "condition",
          description: "Manage delivery rule conditions for a rule",
          subcommands: [
            { name: "add", description: "Add a condition to a delivery rule" },
            {
              name: "list",
              description: "Show condtions asscociated with the rule",
            },
            {
              name: "remove",
              description: "Remove a condition from a delivery rule",
            },
          ],
        },
        {
          name: "create",
          description:
            "Creates a new delivery rule within the specified rule set",
        },
        { name: "delete", description: "Remove a delivery rule from rule set" },
        {
          name: "list",
          description:
            "Lists all of the existing delivery rules within a rule set",
        },
        { name: "show", description: "Show delivery rule details" },
      ],
    },
    {
      name: "rule-set",
      description: "Manage rule set for the specified profile",
      subcommands: [
        {
          name: "create",
          description: "Creates a new rule set under the specified profile",
        },
        { name: "delete", description: "Delete the rule set" },
        {
          name: "list",
          description:
            "Lists existing AzureFrontDoor rule sets within a profile",
        },
        {
          name: "show",
          description:
            "Gets an existing AzureFrontDoor rule set with the specified rule set name under the specified subscription, resource group and profile",
        },
      ],
    },
    {
      name: "secret",
      description: "Manage secrets within the specified profile",
      subcommands: [
        {
          name: "create",
          description: "Creates a new secret within the specified profile",
        },
        {
          name: "delete",
          description: "Deletes an existing Secret within profile",
        },
        { name: "list", description: "Lists existing AzureFrontDoor secrets" },
        {
          name: "show",
          description: "Gets an existing Secret within a profile",
        },
        {
          name: "update",
          description: "Update an existing secret within the specified profile",
        },
      ],
    },
    {
      name: "security-policy",
      description: "Manage security policies within the specified profile",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new security policy within the specified profile",
        },
        {
          name: "delete",
          description: "Deletes an existing security policy within profile",
        },
        {
          name: "list",
          description: "Lists security policies associated with the profile",
        },
        {
          name: "show",
          description: "Gets an existing security policy within a profile",
        },
        {
          name: "update",
          description:
            "Update an existing security policy within the specified profile",
        },
      ],
    },
    {
      name: "waf-log-analytic",
      description: "Manage afd WAF related log analytic results",
      subcommands: [
        {
          name: "metric",
          description: "Manage WAF related metric statistics for AFD profile",
          subcommands: [
            {
              name: "list",
              description:
                "Get Waf related log analytics report for AFD profile",
            },
          ],
        },
        {
          name: "ranking",
          description: "Manage WAF related ranking statistics for AFD profile",
          subcommands: [
            {
              name: "list",
              description: "Get WAF log analytics charts for AFD profile",
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
