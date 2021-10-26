const completionSpec: Fig.Spec = {
  name: "kusto",
  description: "Manage Azure Kusto resources",
  subcommands: [
    {
      name: "attached-database-configuration",
      description: "Manage attached database configuration with kusto",
      subcommands: [
        {
          name: "create",
          description: "Create an attached database configuration",
        },
        {
          name: "delete",
          description:
            "Deletes the attached database configuration with the given name",
        },
        {
          name: "list",
          description:
            "Returns the list of attached database configurations of the given Kusto cluster",
        },
        {
          name: "show",
          description: "Returns an attached database configuration",
        },
        {
          name: "update",
          description: "Update an attached database configuration",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the kusto attached-database-configuration is met",
        },
      ],
    },
    {
      name: "cluster",
      description: "Manage Azure Kusto clusters",
      subcommands: [
        {
          name: "add-language-extension",
          description:
            "Add a list of language extensions that can run within KQL queries",
        },
        { name: "create", description: "Create a Kusto cluster" },
        { name: "delete", description: "Delete a Kusto cluster" },
        {
          name: "detach-follower-database",
          description:
            "Detaches all followers of a database owned by this cluster",
        },
        {
          name: "diagnose-virtual-network",
          description:
            "Diagnoses network connectivity status for external resources on which the service is dependent on",
        },
        { name: "list", description: "List a Kusto cluster" },
        {
          name: "list-follower-database",
          description:
            "Returns a list of databases that are owned by this cluster and were followed by another cluster",
        },
        {
          name: "list-language-extension",
          description:
            "Returns a list of language extensions that can run within KQL queries",
        },
        {
          name: "list-sku",
          description:
            "Returns the SKUs available for the provided resource. And Lists eligible SKUs for Kusto resource provider",
        },
        {
          name: "remove-language-extension",
          description:
            "Remove a list of language extensions that can run within KQL queries",
        },
        { name: "show", description: "Get a Kusto cluster" },
        { name: "start", description: "Start a Kusto cluster" },
        { name: "stop", description: "Stop a Kusto cluster" },
        { name: "update", description: "Update a Kusto cluster" },
        {
          name: "wait",
          description:
            "Wait for a managed Kusto cluster to reach a desired state",
        },
      ],
    },
    {
      name: "cluster-principal-assignment",
      description: "Manage cluster principal assignment with kusto",
      subcommands: [
        {
          name: "create",
          description: "Create a Kusto cluster principalAssignment",
        },
        {
          name: "delete",
          description: "Deletes a Kusto cluster principalAssignment",
        },
        {
          name: "list",
          description: "Lists all Kusto cluster principalAssignments",
        },
        {
          name: "show",
          description: "Gets a Kusto cluster principalAssignment",
        },
        {
          name: "update",
          description: "Update a Kusto cluster principalAssignment",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the kusto cluster-principal-assignment is met",
        },
      ],
    },
    {
      name: "database",
      description: "Manage Azure Kusto databases",
      subcommands: [
        {
          name: "add-principal",
          description: "Add Database principals permissions",
        },
        { name: "create", description: "Create a Kusto database" },
        { name: "delete", description: "Delete a Kusto database" },
        { name: "list", description: "List a Kusto database" },
        {
          name: "list-principal",
          description:
            "Returns a list of database principals of the given Kusto cluster and database",
        },
        {
          name: "remove-principal",
          description: "Remove Database principals permissions",
        },
        { name: "show", description: "Get a Kusto database" },
        { name: "update", description: "Update a Kusto database" },
        {
          name: "wait",
          description:
            "Wait for a managed Kusto database to reach a desired state",
        },
      ],
    },
    {
      name: "database-principal-assignment",
      description: "Manage database principal assignment with kusto",
      subcommands: [
        {
          name: "create",
          description: "Creates a Kusto cluster database principalAssignment",
        },
        { name: "delete", description: "Deletes a Kusto principalAssignment" },
        {
          name: "list",
          description: "Lists all Kusto cluster database principalAssignments",
        },
        {
          name: "show",
          description: "Gets a Kusto cluster database principalAssignment",
        },
        {
          name: "update",
          description: "Update a Kusto cluster database principalAssignment",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the kusto database-principal-assignment is met",
        },
      ],
    },
    {
      name: "data-connection",
      description: "Manage data connection with kusto",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the data connection with the given name",
        },
        {
          name: "event-grid",
          description: "Manage data connection with kusto sub group event-grid",
          subcommands: [
            { name: "create", description: "Create a data connection" },
            {
              name: "data-connection-validation",
              description:
                "Checks that the data connection parameters are valid",
            },
            { name: "update", description: "Updates a data connection" },
          ],
        },
        {
          name: "event-hub",
          description: "Manage data connection with kusto sub group event-hub",
          subcommands: [
            { name: "create", description: "Create a data connection" },
            {
              name: "data-connection-validation",
              description:
                "Checks that the data connection parameters are valid",
            },
            { name: "update", description: "Updates a data connection" },
          ],
        },
        {
          name: "iot-hub",
          description: "Manage data connection with kusto sub group iot-hub",
          subcommands: [
            { name: "create", description: "Create a data connection" },
            {
              name: "data-connection-validation",
              description:
                "Checks that the data connection parameters are valid",
            },
            { name: "update", description: "Updates a data connection" },
          ],
        },
        {
          name: "list",
          description:
            "Returns the list of data connections of the given Kusto database",
        },
        { name: "show", description: "Returns a data connection" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the kusto data-connection is met",
        },
      ],
    },
    {
      name: "operation-result",
      description: "Manage operation result with kusto",
      subcommands: [{ name: "show", description: "Returns operation results" }],
    },
    {
      name: "script",
      description: "Manage script with kusto",
      subcommands: [
        { name: "create", description: "Creates a Kusto database script" },
        { name: "delete", description: "Deletes a Kusto principalAssignment" },
        {
          name: "list",
          description:
            "Returns the list of database scripts for given database",
        },
        { name: "show", description: "Gets a Kusto cluster database script" },
        { name: "update", description: "Updates a database script" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the kusto script is met",
        },
      ],
    },
  ],
};

export default completionSpec;
