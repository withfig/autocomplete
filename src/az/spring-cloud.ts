const completionSpec: Fig.Spec = {
  name: "spring-cloud",
  description: "Commands to manage Azure Spring Cloud",
  subcommands: [
    {
      name: "app",
      description: "Commands to manage apps in Azure Spring Cloud",
      subcommands: [
        {
          name: "binding",
          description:
            "Commands to manage bindings with Azure Data Services, you need to manually restart app to make settings take effect",
          subcommands: [
            {
              name: "cosmos",
              description: "Commands to manage Azure Cosmos DB bindings",
              subcommands: [
                {
                  name: "add",
                  description: "Bind an Azure Cosmos DB with the app",
                },
                {
                  name: "update",
                  description:
                    "Update an Azure Cosmos DB service binding of the app",
                },
              ],
            },
            {
              name: "list",
              description: "List all service bindings in an app",
            },
            {
              name: "mysql",
              description:
                "Commands to manage Azure Database for MySQL bindings",
              subcommands: [
                {
                  name: "add",
                  description: "Bind an Azure Database for MySQL with the app",
                },
                {
                  name: "update",
                  description:
                    "Update an Azure Database for MySQL service binding of the app",
                },
              ],
            },
            {
              name: "redis",
              description: "Commands to manage Azure Cache for Redis bindings",
              subcommands: [
                {
                  name: "add",
                  description: "Bind an Azure Cache for Redis with the app",
                },
                {
                  name: "update",
                  description:
                    "Update an Azure Cache for Redis service binding of the app",
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a service binding of the app",
            },
            {
              name: "show",
              description: "Show the details of a service binding",
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a new app with a default deployment in the Azure Spring Cloud",
        },
        {
          name: "custom-domain",
          description: "Commands to manage custom domains",
          subcommands: [
            { name: "bind", description: "Bind a custom domain with the app" },
            { name: "list", description: "List all custom domains of the app" },
            { name: "show", description: "Show details of a custom domain" },
            {
              name: "unbind",
              description: "Unbind a custom-domain of the app",
            },
            {
              name: "update",
              description: "Update a custom domain of the app",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an app in the Azure Spring Cloud",
        },
        {
          name: "deploy",
          description:
            "Deploy source code or pre-built binary to an app and update related configurations",
        },
        {
          name: "deployment",
          description:
            "Commands to manage life cycle of deployments of an app in Azure Spring Cloud. More operations on deployments can be done on app level with parameter --deployment. e.g. az spring-cloud app deploy --deployment",
          subcommands: [
            {
              name: "create",
              description:
                "Create a staging deployment for the app. To deploy code or update setting to an existing deployment, use az spring-cloud app deploy/update --deployment <staging deployment>",
            },
            { name: "delete", description: "Delete a deployment of the app" },
            { name: "list", description: "List all deployments in an app" },
            { name: "show", description: "Show details of a deployment" },
          ],
        },
        {
          name: "identity",
          description: "Manage an app's managed service identity",
          subcommands: [
            {
              name: "assign",
              description: "Enable managed service identity on an app",
            },
            {
              name: "remove",
              description: "Remove managed service identity from an app",
            },
            {
              name: "show",
              description: "Display app's managed identity info",
            },
          ],
        },
        {
          name: "list",
          description: "List all apps in the Azure Spring Cloud",
        },
        {
          name: "log",
          description:
            "Commands to tail app instances logs with multiple options. If the app has only one instance, the instance name is optional",
          subcommands: [
            {
              name: "tail",
              description:
                "Show logs of an app instance, logs will be streamed when setting '-f/--follow'",
            },
          ],
        },
        {
          name: "logs",
          description:
            "Show logs of an app instance, logs will be streamed when setting '-f/--follow'",
        },
        {
          name: "restart",
          description:
            "Restart instances of the app, default to production deployment",
        },
        {
          name: "scale",
          description: "Manually scale an app or its deployments",
        },
        {
          name: "set-deployment",
          description: "Set production deployment of an app",
        },
        {
          name: "show",
          description: "Show the details of an app in the Azure Spring Cloud",
        },
        {
          name: "show-deploy-log",
          description:
            "Show build log of the last deploy, only apply to source code deploy, default to production deployment",
        },
        {
          name: "start",
          description:
            "Start instances of the app, default to production deployment",
        },
        {
          name: "stop",
          description:
            "Stop instances of the app, default to production deployment",
        },
        {
          name: "unset-deployment",
          description: "Unset production deployment of an app",
        },
        { name: "update", description: "Update configurations of an app" },
      ],
    },
    {
      name: "app-insights",
      description:
        "Commands to management Application Insights in Azure Spring Cloud",
      subcommands: [
        { name: "show", description: "Show Application Insights settings" },
        { name: "update", description: "Update Application Insights settings" },
      ],
    },
    {
      name: "certificate",
      description: "Commands to manage certificates",
      subcommands: [
        { name: "add", description: "Add a certificate in Azure Spring Cloud" },
        {
          name: "list",
          description: "List all certificates in Azure Spring Cloud",
        },
        {
          name: "remove",
          description: "Remove a certificate in Azure Spring Cloud",
        },
        {
          name: "show",
          description: "Show a certificate in Azure Spring Cloud",
        },
      ],
    },
    {
      name: "config-server",
      description: "Commands to manage Config Server in Azure Spring Cloud",
      subcommands: [
        { name: "clear", description: "Erase all settings in Config Server" },
        {
          name: "git",
          description:
            "Commands to manage Config Server git property in Azure Spring Cloud",
          subcommands: [
            {
              name: "repo",
              description:
                "Commands to manage Config Server git repository in Azure Spring Cloud",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add a new repository of git property of Config Server",
                },
                {
                  name: "list",
                  description:
                    "List all repositories of git property of Config Server",
                },
                {
                  name: "remove",
                  description:
                    "Remove an existing repository of git property of Config Server",
                },
                {
                  name: "update",
                  description:
                    "Override an existing repository of git property of Config Server, will totally override the old one",
                },
              ],
            },
            {
              name: "set",
              description:
                "Set git property of Config Server, will totally override the old one",
            },
          ],
        },
        { name: "set", description: "Set Config Server from a yaml file" },
        { name: "show", description: "Show Config Server" },
      ],
    },
    { name: "create", description: "Create an Azure Spring Cloud" },
    { name: "delete", description: "Delete an Azure Spring Cloud" },
    {
      name: "list",
      description:
        "List all Azure Spring Cloud in the given resource group, otherwise list the subscription's",
    },
    { name: "show", description: "Show the details for an Azure Spring Cloud" },
    {
      name: "test-endpoint",
      description: "Commands to manage test endpoint in Azure Spring Cloud",
      subcommands: [
        {
          name: "disable",
          description: "Disable test endpoint of the Azure Spring Cloud",
        },
        {
          name: "enable",
          description: "Enable test endpoint of the Azure Spring Cloud",
        },
        {
          name: "list",
          description: "List test endpoint keys of the Azure Spring Cloud",
        },
        {
          name: "renew-key",
          description:
            "Regenerate a test-endpoint key for the Azure Spring Cloud",
        },
      ],
    },
    { name: "update", description: "Update an Azure Spring Cloud" },
  ],
};

export default completionSpec;
