const completionSpec: Fig.Spec = {
  name: "functionapp",
  description:
    "Manage function apps. To install the Azure Functions Core tools see https://github.com/Azure/azure-functions-core-tools",
  subcommands: [
    {
      name: "app",
      description: "Commands to manage Azure Functions app",
      subcommands: [
        {
          name: "up",
          description: "Deploy to Azure Functions via GitHub actions",
        },
      ],
    },
    {
      name: "config",
      description: "Configure a function app",
      subcommands: [
        {
          name: "access-restriction",
          description:
            "Methods that show, set, add, and remove access restrictions on a functionapp",
          subcommands: [
            {
              name: "add",
              description: "Adds an Access Restriction to the functionapp",
            },
            {
              name: "remove",
              description: "Removes an Access Restriction from the functionapp",
            },
            {
              name: "set",
              description:
                "Sets if SCM site is using the same restrictions as the main site",
            },
            {
              name: "show",
              description: "Show Access Restriction settings for functionapp",
            },
          ],
        },
        {
          name: "appsettings",
          description: "Configure function app settings",
          subcommands: [
            { name: "delete", description: "Delete a function app's settings" },
            { name: "list", description: "Show settings for a function app" },
            { name: "set", description: "Update a function app's settings" },
          ],
        },
        {
          name: "container",
          description: "Manage an existing function app's container settings",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete an existing function app's container settings",
            },
            {
              name: "set",
              description: "Set an existing function app's container settings",
            },
            {
              name: "show",
              description: "Get details of a function app's container settings",
            },
          ],
        },
        {
          name: "hostname",
          description: "Configure hostnames for a function app",
          subcommands: [
            { name: "add", description: "Bind a hostname to a function app" },
            {
              name: "delete",
              description: "Unbind a hostname from a function app",
            },
            {
              name: "get-external-ip",
              description:
                "Get the external-facing IP address for a function app",
            },
            {
              name: "list",
              description: "List all hostname bindings for a function app",
            },
          ],
        },
        {
          name: "set",
          description: "Set an existing function app's configuration",
        },
        {
          name: "show",
          description:
            "Get the details of an existing function app's configuration",
        },
        {
          name: "ssl",
          description: "Configure SSL certificates",
          subcommands: [
            {
              name: "bind",
              description: "Bind an SSL certificate to a function app",
            },
            {
              name: "create",
              description:
                "Create a Managed Certificate for a hostname in a function app",
            },
            {
              name: "delete",
              description: "Delete an SSL certificate from a function app",
            },
            {
              name: "import",
              description:
                "Import an SSL certificate to a function app from Key Vault",
            },
            {
              name: "list",
              description: "List SSL certificates for a function app",
            },
            {
              name: "show",
              description:
                "Show the details of an SSL certificate for a function app",
            },
            {
              name: "unbind",
              description: "Unbind an SSL certificate from a function app",
            },
            {
              name: "upload",
              description: "Upload an SSL certificate to a function app",
            },
          ],
        },
      ],
    },
    {
      name: "cors",
      description: "Manage Cross-Origin Resource Sharing (CORS)",
      subcommands: [
        { name: "add", description: "Add allowed origins" },
        { name: "remove", description: "Remove allowed origins" },
        { name: "show", description: "Show allowed origins" },
      ],
    },
    { name: "create", description: "Create a function app" },
    { name: "delete", description: "Delete a function app" },
    {
      name: "deploy",
      description: "Deploys a provided artifact to Azure functionapp",
    },
    {
      name: "deployment",
      description: "Manage function app deployments",
      subcommands: [
        {
          name: "container",
          description: "Manage container-based continuous deployment",
          subcommands: [
            {
              name: "config",
              description: "Configure continuous deployment via containers",
            },
            {
              name: "show-cd-url",
              description:
                "Get the URL which can be used to configure webhooks for continuous deployment",
            },
          ],
        },
        {
          name: "list-publishing-credentials",
          description:
            "Get the details for available function app publishing credentials",
        },
        {
          name: "list-publishing-profiles",
          description:
            "Get the details for available function app deployment profiles",
        },
        {
          name: "slot",
          description: "Manage function app deployment slots",
          subcommands: [
            {
              name: "auto-swap",
              description: "Configure deployment slot auto swap",
            },
            { name: "create", description: "Create a deployment slot" },
            { name: "delete", description: "Delete a deployment slot" },
            { name: "list", description: "List all deployment slots" },
            {
              name: "swap",
              description: "Swap deployment slots for a function app",
            },
          ],
        },
        {
          name: "source",
          description: "Manage function app deployment via source control",
          subcommands: [
            {
              name: "config",
              description:
                "Manage deployment from git or Mercurial repositories",
            },
            {
              name: "config-local-git",
              description:
                "Get a URL for a git repository endpoint to clone and push to for function app deployment",
            },
            {
              name: "config-zip",
              description:
                "Perform deployment using the kudu zip push deployment for a function app",
            },
            {
              name: "delete",
              description: "Delete a source control deployment configuration",
            },
            {
              name: "show",
              description:
                "Get the details of a source control deployment configuration",
            },
            {
              name: "sync",
              description:
                "Synchronize from the repository. Only needed under manual integration mode",
            },
            {
              name: "update-token",
              description:
                "Update source control token cached in Azure app service",
            },
          ],
        },
        {
          name: "user",
          description: "Manage user credentials for deployment",
          subcommands: [
            { name: "set", description: "Update deployment credentials" },
            { name: "show", description: "Gets publishing user" },
          ],
        },
      ],
    },
    {
      name: "devops-pipeline",
      description:
        "Azure Function specific integration with Azure DevOps. Please visit https://aka.ms/functions-azure-devops for more information",
      subcommands: [
        {
          name: "create",
          description: "Create an Azure DevOps pipeline for a function app",
        },
      ],
    },
    {
      name: "function",
      description: "Manage function app functions",
      subcommands: [
        { name: "delete", description: "Delete a function" },
        {
          name: "keys",
          description: "Manage function keys",
          subcommands: [
            { name: "delete", description: "Delete a function key" },
            { name: "list", description: "List all function keys" },
            { name: "set", description: "Create or update a function key" },
          ],
        },
        { name: "show", description: "Get the details of a function" },
      ],
    },
    {
      name: "hybrid-connection",
      description:
        "Methods that list, add and remove hybrid-connections from functionapp",
      subcommands: [
        {
          name: "add",
          description: "Add an existing hybrid-connection to a functionapp",
        },
        {
          name: "list",
          description: "List the hybrid-connections on a functionapp",
        },
        {
          name: "remove",
          description: "Remove a hybrid-connection from a functionapp",
        },
      ],
    },
    {
      name: "identity",
      description: "Manage web app's managed service identity",
      subcommands: [
        {
          name: "assign",
          description: "Assign managed service identity to the web app",
        },
        {
          name: "remove",
          description: "Disable web app's managed service identity",
        },
        {
          name: "show",
          description: "Display web app's managed service identity",
        },
      ],
    },
    {
      name: "keys",
      description: "Manage function app keys",
      subcommands: [
        { name: "delete", description: "Delete a function app key" },
        { name: "list", description: "List all function app keys" },
        { name: "set", description: "Create or update a function app key" },
      ],
    },
    { name: "list", description: "List function apps" },
    {
      name: "list-consumption-locations",
      description: "List available locations for running function apps",
    },
    {
      name: "log",
      description: "Manage function app logs",
      subcommands: [
        {
          name: "deployment",
          description: "Manage function app deployment logs",
          subcommands: [
            {
              name: "list",
              description:
                "List deployment logs of the deployments associated with function app",
            },
            {
              name: "show",
              description:
                "Show deployment logs of the latest deployment, or a specific deployment if deployment-id is specified",
            },
          ],
        },
      ],
    },
    {
      name: "plan",
      description: "Manage App Service Plans for an Azure Function",
      subcommands: [
        {
          name: "create",
          description: "Create an App Service Plan for an Azure Function",
        },
        { name: "delete", description: "Delete an App Service Plan" },
        { name: "list", description: "List App Service Plans" },
        {
          name: "show",
          description:
            "Get the App Service Plans for a resource group or a set of resource groups",
        },
        {
          name: "update",
          description: "Update an App Service plan for an Azure Function",
        },
      ],
    },
    { name: "restart", description: "Restart a function app" },
    { name: "show", description: "Get the details of a function app" },
    { name: "start", description: "Start a function app" },
    { name: "stop", description: "Stop a function app" },
    { name: "update", description: "Update a function app" },
    {
      name: "vnet-integration",
      description:
        "Methods that list, add, and remove virtual networks integrations from a functionapp",
      subcommands: [
        {
          name: "add",
          description:
            "Add a regional virtual network integration to a functionapp",
        },
        {
          name: "list",
          description: "List the virtual network integrations on a functionapp",
        },
        {
          name: "remove",
          description:
            "Remove a regional virtual network integration from functionapp",
        },
      ],
    },
  ],
};

export default completionSpec;
