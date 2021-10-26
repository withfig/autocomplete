const completionSpec: Fig.Spec = {
  name: "dt",
  description: "Manage Azure Digital Twins solutions & infrastructure",
  subcommands: [
    {
      name: "create",
      description: "Create or update a Digital Twins instance",
    },
    {
      name: "delete",
      description: "Delete an existing Digital Twins instance",
    },
    {
      name: "endpoint",
      description: "Manage and configure Digital Twins instance endpoints",
      subcommands: [
        {
          name: "create",
          description: "Add egress endpoints to a Digital Twins instance",
          subcommands: [
            {
              name: "eventgrid",
              description:
                "Adds an EventGrid Topic endpoint to a Digital Twins instance. Requires pre-created resource",
            },
            {
              name: "eventhub",
              description:
                "Adds an EventHub endpoint to a Digital Twins instance. Requires pre-created resource. The instance must be created with a managed identity to support identity based endpoint integration",
            },
            {
              name: "servicebus",
              description:
                "Adds a ServiceBus Topic endpoint to a Digital Twins instance. Requires pre-created resource. The instance must be created with a managed identity to support identity based endpoint integration",
            },
          ],
        },
        {
          name: "delete",
          description: "Remove an endpoint from a Digital Twins instance",
        },
        {
          name: "list",
          description:
            "List all egress endpoints configured on a Digital Twins instance",
        },
        {
          name: "show",
          description:
            "Show details of an endpoint configured on a Digital Twins instance",
        },
        {
          name: "wait",
          description: "Wait until an endpoint operation is done",
        },
      ],
    },
    {
      name: "list",
      description:
        "List the collection of Digital Twins instances by subscription or resource group",
    },
    {
      name: "model",
      description:
        "Manage DTDL models and definitions on a Digital Twins instance",
      subcommands: [
        {
          name: "create",
          description:
            "Uploads one or more models. When any error occurs, no models are uploaded",
        },
        {
          name: "delete",
          description:
            "Delete a model. A model can only be deleted if no other models reference it",
        },
        {
          name: "delete-all",
          description:
            "Delete all models within a Digital Twins instance. Twins configurations are not affected but may be broken without model definitions",
        },
        {
          name: "list",
          description: "List model metadata, definitions and dependencies",
        },
        {
          name: "show",
          description: "Retrieve a target model or model definition",
        },
        {
          name: "update",
          description:
            "Updates the metadata for a model. Currently a model can only be decommisioned",
        },
      ],
    },
    {
      name: "network",
      description:
        "Manage Digital Twins network configuration including private links and endpoint connections",
      subcommands: [
        {
          name: "private-endpoint",
          description: "Manage Digital Twins instance private-endpoints",
          subcommands: [
            {
              name: "connection",
              description:
                "Manage Digital Twins instance private-endpoint connections",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete a private-endpoint connection associated with the Digital Twins instance",
                },
                {
                  name: "list",
                  description:
                    "List private-endpoint connections associated with the Digital Twins instance",
                },
                {
                  name: "set",
                  description:
                    "Set the state of a private-endpoint connection associated with the Digital Twins instance",
                },
                {
                  name: "show",
                  description:
                    "Show a private-endpoint connection associated with the Digital Twins instance",
                },
                {
                  name: "wait",
                  description:
                    "Wait until an operation on a private-endpoint connection is complete",
                },
              ],
            },
          ],
        },
        {
          name: "private-link",
          description: "Manage Digital Twins instance private-link operations",
          subcommands: [
            {
              name: "list",
              description:
                "List private-links associated with the Digital Twins instance",
            },
            {
              name: "show",
              description: "Show a private-link associated with the instance",
            },
          ],
        },
      ],
    },
    {
      name: "reset",
      description:
        "Reset an existing Digital Twins instance by deleting associated assets. Currently only supports deleting models and twins",
    },
    {
      name: "role-assignment",
      description: "Manage RBAC role assignments for a Digital Twins instance",
      subcommands: [
        {
          name: "create",
          description:
            "Assign a user, group or service principal to a role against a Digital Twins instance",
        },
        {
          name: "delete",
          description:
            "Remove a user, group or service principal role assignment from a Digital Twins instance",
        },
        {
          name: "list",
          description:
            "List the existing role assignments of a Digital Twins instance",
        },
      ],
    },
    {
      name: "route",
      description: "Manage and configure event routes",
      subcommands: [
        {
          name: "create",
          description: "Add an event route to a Digital Twins instance",
        },
        {
          name: "delete",
          description: "Remove an event route from a Digital Twins instance",
        },
        {
          name: "list",
          description:
            "List the configured event routes of a Digital Twins instance",
        },
        {
          name: "show",
          description:
            "Show details of an event route configured on a Digital Twins instance",
        },
      ],
    },
    { name: "show", description: "Show an existing Digital Twins instance" },
    {
      name: "twin",
      description:
        "Manage and configure the digital twins of a Digital Twins instance",
      subcommands: [
        {
          name: "component",
          description:
            "Show and update the digital twin components of a Digital Twins instance",
          subcommands: [
            {
              name: "show",
              description: "Show details of a digital twin component",
            },
            {
              name: "update",
              description:
                "Update a digital twin component via JSON patch specification",
            },
          ],
        },
        { name: "create", description: "Create a digital twin on an instance" },
        {
          name: "delete",
          description:
            "Remove a digital twin. All relationships referencing this twin must already be deleted",
        },
        {
          name: "delete-all",
          description:
            "Deletes all digital twins within a Digital Twins instance, including all relationships for those twins",
        },
        {
          name: "query",
          description:
            "Query the digital twins of an instance. Allows traversing relationships and filtering by property values",
        },
        {
          name: "relationship",
          description:
            "Manage and configure the digital twin relationships of a Digital Twins instance",
          subcommands: [
            {
              name: "create",
              description:
                "Create a relationship between source and target digital twins",
            },
            {
              name: "delete",
              description:
                "Delete a digital twin relationship on a Digital Twins instance",
            },
            {
              name: "delete-all",
              description:
                "Deletes all digital twin relationships within a Digital Twins instance, including incoming relationships",
            },
            {
              name: "list",
              description: "List the relationships of a digital twin",
            },
            {
              name: "show",
              description: "Show details of a digital twin relationship",
            },
            {
              name: "update",
              description:
                "Updates the properties of a relationship between two digital twins via JSON patch specification",
            },
          ],
        },
        { name: "show", description: "Show the details of a digital twin" },
        {
          name: "telemetry",
          description:
            "Test and validate the event routes and endpoints of a Digital Twins instance",
          subcommands: [
            {
              name: "send",
              description:
                "Sends telemetry on behalf of a digital twin. If component path is provided the emitted telemetry is on behalf of the component",
            },
          ],
        },
        {
          name: "update",
          description:
            "Update an instance digital twin via JSON patch specification",
        },
      ],
    },
    {
      name: "wait",
      description:
        "Wait until an operation on an Digital Twins instance is complete",
    },
  ],
};

export default completionSpec;
