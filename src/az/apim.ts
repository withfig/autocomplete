const completionSpec: Fig.Spec = {
  name: "apim",
  description: "Manage Azure API Management services",
  subcommands: [
    {
      name: "api",
      description: "Manage Azure API Management API's",
      subcommands: [
        { name: "create", description: "Create an API Management API" },
        { name: "delete", description: "Delete an API Management API" },
        { name: "import", description: "Import an API Management API" },
        { name: "list", description: "List API Management API's" },
        {
          name: "operation",
          description: "Manage Azure API Management API Operations",
          subcommands: [
            {
              name: "create",
              description: "Creates a new operation in the API",
            },
            {
              name: "delete",
              description: "Deletes the specified operation in the API",
            },
            {
              name: "list",
              description:
                "List a collection of the operations for the specified API",
            },
            {
              name: "show",
              description:
                "Gets the details of the API Operation specified by its identifier",
            },
            {
              name: "update",
              description:
                "Updates the details of the operation in the API specified by its identifier",
            },
          ],
        },
        {
          name: "release",
          description: "Manage Azure API Management API Release",
          subcommands: [
            {
              name: "create",
              description: "Creates a new Release for the API",
            },
            {
              name: "delete",
              description: "Deletes the specified release in the API",
            },
            { name: "list", description: "Lists all releases of an API" },
            {
              name: "show",
              description: "Returns the details of an API release",
            },
            {
              name: "update",
              description:
                "Updates the details of the release of the API specified by its identifier",
            },
          ],
        },
        {
          name: "revision",
          description: "Manage Azure API Management API Revision",
          subcommands: [
            { name: "create", description: "Create API revision" },
            { name: "list", description: "Lists all revisions of an API" },
          ],
        },
        { name: "show", description: "Show details of an API Management API" },
        { name: "update", description: "Update an API Management API" },
        {
          name: "versionset",
          description: "Manage Azure API Management API Version Set",
          subcommands: [
            { name: "create", description: "Creates a Api Version Set" },
            { name: "delete", description: "Deletes specific Api Version Set" },
            {
              name: "list",
              description:
                "Lists a collection of API Version Sets in the specified service instance",
            },
            {
              name: "show",
              description:
                "Gets the details of the Api Version Set specified by its identifier",
            },
            {
              name: "update",
              description:
                "Updates the details of the Api VersionSet specified by its identifier",
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of an apim api is met",
        },
      ],
    },
    {
      name: "apply-network-updates",
      description:
        "Back up an API Management service to the configured storage account",
    },
    {
      name: "backup",
      description:
        "Creates a backup of the API Management service to the given Azure Storage Account. This is long running operation and could take several minutes to complete",
    },
    {
      name: "check-name",
      description: "Checks to see if a service name is available to use",
    },
    {
      name: "create",
      description: "Create an API Management service instance",
    },
    { name: "delete", description: "Deletes an API Management service" },
    { name: "list", description: "List API Management service instances" },
    {
      name: "nv",
      description: "Manage Azure API Management Named Values",
      subcommands: [
        { name: "create", description: "Create an API Management Named Value" },
        { name: "delete", description: "Delete an API Management Named Value" },
        { name: "list", description: "List API Management Named Values" },
        {
          name: "show",
          description: "Show details of an API Management Named Value",
        },
        {
          name: "show-secret",
          description: "Gets the secret of an API Management Named Value",
        },
        { name: "update", description: "Update an API Management Named Value" },
      ],
    },
    {
      name: "product",
      description: "Manage Azure API Management Product's",
      subcommands: [
        {
          name: "api",
          description: "Manage Azure API Management Product's APIs",
          subcommands: [
            { name: "add", description: "Add an API to the specified product" },
            {
              name: "check",
              description:
                "Checks that API entity specified by identifier is associated with the Product entity",
            },
            {
              name: "delete",
              description:
                "Deletes the specified API from the specified product",
            },
            {
              name: "list",
              description:
                "Lists a collection of the APIs associated with a product",
            },
          ],
        },
        { name: "create", description: "Creates a product" },
        { name: "delete", description: "Delete product" },
        {
          name: "list",
          description:
            "Lists a collection of products in the specified service instance",
        },
        {
          name: "show",
          description:
            "Gets the details of the product specified by its identifier",
        },
        { name: "update", description: "Update existing product details" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of an apim product is met",
        },
      ],
    },
    {
      name: "restore",
      description:
        "Restores a backup of an API Management service created using the ApiManagementService_Backup operation on the current service. This is a long running operation and could take several minutes to complete",
    },
    {
      name: "show",
      description: "Show details of an API Management service instance",
    },
    {
      name: "update",
      description: "Update an API Management service instance",
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of an apim is met",
    },
  ],
};

export default completionSpec;
