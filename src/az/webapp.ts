const completionSpec: Fig.Spec = {
  name: "webapp",
  description: "Manage web apps",
  subcommands: [
    {
      name: "auth",
      description:
        'Manage webapp authentication and authorization. To use v2 auth commands, run "az extension add --name authV2" to add the authV2 CLI extension',
      subcommands: [
        {
          name: "apple",
          description:
            "Manage webapp authentication and authorization of the Apple identity provider",
          subcommands: [
            {
              name: "show",
              description:
                "Show the authentication settings for the Apple identity provider",
            },
            {
              name: "update",
              description:
                "Update the client id and client secret for the Apple identity provider",
            },
          ],
        },
        {
          name: "config-version",
          description:
            "Manage the state of the configuration version for the authentication settings for the webapp. Configuration version v1 refers to the /authSettings endpoints whereas v2 refers to the /authSettingsV2 endpoints",
          subcommands: [
            {
              name: "revert",
              description:
                "Reverts the configuration version of the authentication settings for the webapp from v2 to v1 (classic)",
            },
            {
              name: "show",
              description:
                "Show the configuration version of the authentication settings for the webapp. Configuration version v1 refers to the /authSettings endpoints whereas v2 refers to the /authSettingsV2 endpoints",
            },
            {
              name: "upgrade",
              description:
                "Upgrades the configuration version of the authentication settings for the webapp from v1 (classic) to v2",
            },
          ],
        },
        {
          name: "facebook",
          description:
            "Manage webapp authentication and authorization of the Facebook identity provider",
          subcommands: [
            {
              name: "show",
              description:
                "Show the authentication settings for the Facebook identity provider",
            },
            {
              name: "update",
              description:
                "Update the app id and app secret for the Facebook identity provider",
            },
          ],
        },
        {
          name: "github",
          description:
            "Manage webapp authentication and authorization of the GitHub identity provider",
          subcommands: [
            {
              name: "show",
              description:
                "Show the authentication settings for the GitHub identity provider",
            },
            {
              name: "update",
              description:
                "Update the client id and client secret for the GitHub identity provider",
            },
          ],
        },
        {
          name: "google",
          description:
            "Manage webapp authentication and authorization of the Google identity provider",
          subcommands: [
            {
              name: "show",
              description:
                "Show the authentication settings for the Google identity provider",
            },
            {
              name: "update",
              description:
                "Update the client id and client secret for the Google identity provider",
            },
          ],
        },
        {
          name: "microsoft",
          description:
            "Manage webapp authentication and authorization of the Microsoft identity provider",
          subcommands: [
            {
              name: "show",
              description:
                "Show the authentication settings for the Azure Active Directory identity provider",
            },
            {
              name: "update",
              description:
                "Update the client id and client secret for the Azure Active Directory identity provider",
            },
          ],
        },
        {
          name: "openid-connect",
          description:
            "Manage webapp authentication and authorization of the custom OpenID Connect identity providers",
          subcommands: [
            {
              name: "add",
              description:
                "Configure a new custom OpenID Connect identity provider",
            },
            {
              name: "remove",
              description:
                "Removes an existing custom OpenID Connect identity provider",
            },
            {
              name: "show",
              description:
                "Show the authentication settings for the custom OpenID Connect identity provider",
            },
            {
              name: "update",
              description:
                "Update the client id and client secret setting name for an existing custom OpenID Connect identity provider",
            },
          ],
        },
        {
          name: "set",
          description:
            "Sets the authentication settings for the webapp in the v2 format, overwriting any existing settings",
        },
        {
          name: "show",
          description: "Show the authentification settings for the webapp",
        },
        {
          name: "twitter",
          description:
            "Manage webapp authentication and authorization of the Twitter identity provider",
          subcommands: [
            {
              name: "show",
              description:
                "Show the authentication settings for the Twitter identity provider",
            },
            {
              name: "update",
              description:
                "Update the consumer key and consumer secret for the Twitter identity provider",
            },
          ],
        },
        {
          name: "update",
          description: "Update the authentication settings for the webapp",
        },
      ],
    },
    {
      name: "auth-classic",
      description:
        "Manage webapp authentication and authorization in the classic format",
      subcommands: [
        {
          name: "show",
          description:
            "Show the authentication settings for the webapp in the classic format",
        },
        {
          name: "update",
          description:
            "Update the authentication settings for the webapp in the classic format",
        },
      ],
    },
    { name: "browse", description: "Open a web app in a browser" },
    {
      name: "config",
      description: "Configure a web app",
      subcommands: [
        {
          name: "access-restriction",
          description:
            "Methods that show, set, add, and remove access restrictions on a webapp",
          subcommands: [
            {
              name: "add",
              description: "Adds an Access Restriction to the webapp",
            },
            {
              name: "remove",
              description: "Removes an Access Restriction from the webapp",
            },
            {
              name: "set",
              description:
                "Sets if SCM site is using the same restrictions as the main site",
            },
            {
              name: "show",
              description: "Show Access Restriction settings for webapp",
            },
          ],
        },
        {
          name: "appsettings",
          description:
            "Configure web app settings. Updating or removing application settings will cause an app recycle",
          subcommands: [
            { name: "delete", description: "Delete web app settings" },
            {
              name: "list",
              description: "Get the details of a web app's settings",
            },
            { name: "set", description: "Set a web app's settings" },
          ],
        },
        {
          name: "backup",
          description: "Manage backups for web apps",
          subcommands: [
            { name: "create", description: "Create a backup of a web app" },
            { name: "list", description: "List backups of a web app" },
            { name: "restore", description: "Restore a web app from a backup" },
            {
              name: "show",
              description: "Show the backup schedule for a web app",
            },
            {
              name: "update",
              description: "Configure a new backup schedule for a web app",
            },
          ],
        },
        {
          name: "connection-string",
          description: "Manage a web app's connection strings",
          subcommands: [
            {
              name: "delete",
              description: "Delete a web app's connection strings",
            },
            { name: "list", description: "Get a web app's connection strings" },
            {
              name: "set",
              description: "Update a web app's connection strings",
            },
          ],
        },
        {
          name: "container",
          description: "Manage an existing web app's container settings",
          subcommands: [
            {
              name: "delete",
              description: "Delete an existing web app's container settings",
            },
            {
              name: "set",
              description: "Set an existing web app's container settings",
            },
            {
              name: "show",
              description: "Get details of a web app's container settings",
            },
          ],
        },
        {
          name: "hostname",
          description: "Configure hostnames for a web app",
          subcommands: [
            { name: "add", description: "Bind a hostname to a web app" },
            { name: "delete", description: "Unbind a hostname from a web app" },
            {
              name: "get-external-ip",
              description: "Get the external-facing IP address for a web app",
            },
            {
              name: "list",
              description: "List all hostname bindings for a web app",
            },
          ],
        },
        { name: "set", description: "Set a web app's configuration" },
        {
          name: "show",
          description: "Get the details of a web app's configuration",
        },
        {
          name: "snapshot",
          description: "Manage web app snapshots",
          subcommands: [
            {
              name: "list",
              description: "List the restorable snapshots for a web app",
            },
            { name: "restore", description: "Restore a web app snapshot" },
          ],
        },
        {
          name: "ssl",
          description: "Configure SSL certificates for web apps",
          subcommands: [
            {
              name: "bind",
              description: "Bind an SSL certificate to a web app",
            },
            {
              name: "create",
              description:
                "Create a Managed Certificate for a hostname in a webapp app",
            },
            {
              name: "delete",
              description: "Delete an SSL certificate from a web app",
            },
            {
              name: "import",
              description:
                "Import an SSL or App Service Certificate to a web app from Key Vault",
            },
            {
              name: "list",
              description: "List SSL certificates for a web app",
            },
            {
              name: "show",
              description:
                "Show the details of an SSL certificate for a web app",
            },
            {
              name: "unbind",
              description: "Unbind an SSL certificate from a web app",
            },
            {
              name: "upload",
              description: "Upload an SSL certificate to a web app",
            },
          ],
        },
        {
          name: "storage-account",
          description:
            "Manage a web app's Azure storage account configurations. (Linux Web Apps and Windows Containers Web Apps Only)",
          subcommands: [
            {
              name: "add",
              description:
                "Add an Azure storage account configuration to a web app. (Linux Web Apps and Windows Containers Web Apps Only)",
            },
            {
              name: "delete",
              description:
                "Delete a web app's Azure storage account configuration. (Linux Web Apps and Windows Containers Web Apps Only)",
            },
            {
              name: "list",
              description:
                "Get a web app's Azure storage account configurations. (Linux Web Apps and Windows Containers Web Apps Only)",
            },
            {
              name: "update",
              description:
                "Update an existing Azure storage account configuration on a web app. (Linux Web Apps and Windows Containers Web Apps Only)",
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
    { name: "create", description: "Create a web app" },
    {
      name: "create-remote-connection",
      description:
        "Creates a remote connection using a tcp tunnel to your web app",
    },
    { name: "delete", description: "Delete a web app" },
    {
      name: "deleted",
      description: "Manage deleted web apps",
      subcommands: [
        { name: "list", description: "List web apps that have been deleted" },
        { name: "restore", description: "Restore a deleted web app" },
      ],
    },
    {
      name: "deploy",
      description: "Deploys a provided artifact to Azure Web Apps",
    },
    {
      name: "deployment",
      description: "Manage web app deployments",
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
          name: "github-actions",
          description: "Configure GitHub Actions for a webapp",
          subcommands: [
            {
              name: "add",
              description:
                "Add a GitHub Actions workflow file to the specified repository. The workflow will build and deploy your app to the specified webapp",
            },
            {
              name: "remove",
              description:
                "Remove and disconnect the GitHub Actions workflow file from the specified repository",
            },
          ],
        },
        {
          name: "list-publishing-credentials",
          description:
            "Get the details for available web app publishing credentials",
        },
        {
          name: "list-publishing-profiles",
          description:
            "Get the details for available web app deployment profiles",
        },
        {
          name: "slot",
          description: "Manage web app deployment slots",
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
              description: "Swap deployment slots for a web app",
            },
          ],
        },
        {
          name: "source",
          description: "Manage web app deployment via source control",
          subcommands: [
            {
              name: "config",
              description:
                "Manage deployment from git or Mercurial repositories",
            },
            {
              name: "config-local-git",
              description:
                "Get a URL for a git repository endpoint to clone and push to for web app deployment",
            },
            {
              name: "config-zip",
              description:
                "Perform deployment using the kudu zip push deployment for a web app",
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
            { name: "show", description: "Get deployment publishing user" },
          ],
        },
      ],
    },
    {
      name: "hybrid-connection",
      description:
        "Methods that list, add and remove hybrid-connections from webapps",
      subcommands: [
        {
          name: "add",
          description: "Add an existing hybrid-connection to a webapp",
        },
        {
          name: "list",
          description: "List the hybrid-connections on a webapp",
        },
        {
          name: "remove",
          description: "Remove a hybrid-connection from a webapp",
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
    { name: "list", description: "List web apps" },
    {
      name: "list-instances",
      description: "List all scaled out instances of a web app or web app slot",
    },
    {
      name: "list-runtimes",
      description:
        "List available built-in stacks which can be used for web apps",
    },
    {
      name: "log",
      description: "Manage web app logs",
      subcommands: [
        { name: "config", description: "Configure logging for a web app" },
        {
          name: "deployment",
          description: "Manage web app deployment logs",
          subcommands: [
            {
              name: "list",
              description: "List deployments associated with web app",
            },
            {
              name: "show",
              description:
                "Show deployment logs of the latest deployment, or a specific deployment if deployment-id is specified",
            },
          ],
        },
        {
          name: "download",
          description: "Download a web app's log history as a zip file",
        },
        {
          name: "show",
          description: "Get the details of a web app's logging configuration",
        },
        { name: "tail", description: "Start live log tracing for a web app" },
      ],
    },
    { name: "restart", description: "Restart a web app" },
    {
      name: "scan",
      description:
        "Holds group of commands which cater to webapp scans. Currently available only for Linux based webapps",
      subcommands: [
        {
          name: "list-result",
          description:
            "Get details of all scans conducted on webapp, upto max scan limit set on the webapp This will get you the scan log results in addition to the scan status of each scan conducted on the webapp",
        },
        {
          name: "show-result",
          description:
            "Get results of specified scan-id. This will fetch you the Scan log results of the specified scan-id",
        },
        {
          name: "start",
          description:
            "Starts the scan on the specified webapp files in the wwwroot directory. It returns a JSON containing the ScanID, traking and results URL",
        },
        {
          name: "stop",
          description:
            "Stops the current executing scan. Does nothing if no scan is executing",
        },
        {
          name: "track",
          description:
            "Track status of scan by providing scan-id. You can track the status of the scan from [Starting, Success, Failed, TimeoutFailure, Executing]",
        },
      ],
    },
    { name: "show", description: "Get the details of a web app" },
    {
      name: "ssh",
      description:
        "SSH command establishes a ssh session to the web container and developer would get a shell terminal remotely",
    },
    { name: "start", description: "Start a web app" },
    { name: "stop", description: "Stop a web app" },
    {
      name: "traffic-routing",
      description: "Manage traffic routing for web apps",
      subcommands: [
        {
          name: "clear",
          description:
            "Clear the routing rules and send all traffic to production",
        },
        {
          name: "set",
          description: "Configure routing traffic to deployment slots",
        },
        {
          name: "show",
          description:
            "Display the current distribution of traffic across slots",
        },
      ],
    },
    {
      name: "up",
      description:
        "Create a webapp and deploy code from a local workspace to the app. The command is required to run from the folder where the code is present. Current support includes Node, Python, .NET Core and ASP.NET. Node, Python apps are created as Linux apps. .Net Core, ASP.NET, and static HTML apps are created as Windows apps. Append the html flag to deploy as a static HTML app",
    },
    { name: "update", description: "Update an existing web app" },
    {
      name: "vnet-integration",
      description:
        "Methods that list, add, and remove virtual network integrations from a webapp",
      subcommands: [
        {
          name: "add",
          description: "Add a regional virtual network integration to a webapp",
        },
        {
          name: "list",
          description: "List the virtual network integrations on a webapp",
        },
        {
          name: "remove",
          description:
            "Remove a regional virtual network integration from webapp",
        },
      ],
    },
    {
      name: "webjob",
      description: "Allows management operations for webjobs on a web app",
      subcommands: [
        {
          name: "continuous",
          description:
            "Allows management operations of continuous webjobs on a web app",
          subcommands: [
            {
              name: "list",
              description: "List all continuous webjobs on a selected web app",
            },
            {
              name: "remove",
              description: "Delete a specific continuous webjob",
            },
            {
              name: "start",
              description:
                "Start a specific continuous webjob on a selected web app",
            },
            { name: "stop", description: "Stop a specific continuous webjob" },
          ],
        },
        {
          name: "triggered",
          description:
            "Allows management operations of triggered webjobs on a web app",
          subcommands: [
            {
              name: "list",
              description: "List all triggered webjobs hosted on a web app",
            },
            {
              name: "log",
              description:
                "Get history of a specific triggered webjob hosted on a web app",
            },
            {
              name: "remove",
              description:
                "Delete a specific triggered webjob hosted on a web app",
            },
            {
              name: "run",
              description:
                "Run a specific triggered webjob hosted on a web app",
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
