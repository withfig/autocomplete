const completion: Fig.Spec = {
  name: "connection",
  description:
    "Commands to manage Service Connector local connections which allow local environment to connect Azure Resource. If you want to manage connection for compute service, please run 'az webapp/containerapp/spring connection'",
  subcommands: [
    {
      name: "create",
      description: "Create a connection from local to a target resource",
      subcommands: [
        {
          name: "appconfig",
          description:
            "Create a Service Connector local connection to appconfig",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--app-config",
              description:
                "Name of the app configuration. Required if '--target-id' is not specified",
              args: { name: "app-config" },
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: ["dotnet", "java", "nodejs", "none", "python"],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--app-config'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the app configuration. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "confluent-cloud",
          description: "Create a local connection to confluent-cloud",
          options: [
            {
              name: "--bootstrap-server",
              description: "Kafka bootstrap server url",
              args: { name: "bootstrap-server" },
              isRequired: true,
            },
            {
              name: "--kafka-key",
              description: "Kafka API-Key (key)",
              args: { name: "kafka-key" },
              isRequired: true,
            },
            {
              name: "--kafka-secret",
              description: "Kafka API-Key (secret)",
              args: { name: "kafka-secret" },
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
              name: "--schema-key",
              description: "Schema registry API-Key (key)",
              args: { name: "schema-key" },
              isRequired: true,
            },
            {
              name: "--schema-registry",
              description: "Schema registry url",
              args: { name: "schema-registry" },
              isRequired: true,
            },
            {
              name: "--schema-secret",
              description: "Schema registry API-Key (secret)",
              args: { name: "schema-secret" },
              isRequired: true,
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "cosmos-cassandra",
          description:
            "Create a Service Connector local connection to cosmos-cassandra",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--account",
              description:
                "Name of the cosmos database account. Required if '--target-id' is not specified",
              args: { name: "account" },
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--key-space",
              description:
                "Name of the keyspace. Required if '--target-id' is not specified",
              args: { name: "key-space" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--account', '--key-space'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "cosmos-gremlin",
          description:
            "Create a Service Connector local connection to cosmos-gremlin",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--account",
              description:
                "Name of the cosmos database account. Required if '--target-id' is not specified",
              args: { name: "account" },
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--database",
              description:
                "Name of the database. Required if '--target-id' is not specified",
              args: { name: "database" },
            },
            {
              name: "--graph",
              description:
                "Name of the graph. Required if '--target-id' is not specified",
              args: { name: "graph" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--account', '--database', '--graph'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "cosmos-mongo",
          description:
            "Create a Service Connector local connection to cosmos-mongo",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--account",
              description:
                "Name of the cosmos database account. Required if '--target-id' is not specified",
              args: { name: "account" },
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--database",
              description:
                "Name of the database. Required if '--target-id' is not specified",
              args: { name: "database" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--account', '--database'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "cosmos-sql",
          description:
            "Create a Service Connector local connection to cosmos-sql",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--account",
              description:
                "Name of the cosmos database account. Required if '--target-id' is not specified",
              args: { name: "account" },
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--database",
              description:
                "Name of the database. Required if '--target-id' is not specified",
              args: { name: "database" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--account', '--database'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "cosmos-table",
          description:
            "Create a Service Connector local connection to cosmos-table",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--account",
              description:
                "Name of the cosmos database account. Required if '--target-id' is not specified",
              args: { name: "account" },
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--table",
              description:
                "Name of the table. Required if '--target-id' is not specified",
              args: { name: "table" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--account', '--table'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "eventhub",
          description:
            "Create a Service Connector local connection to eventhub",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "kafka-springBoot",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--namespace",
              description:
                "Name of the eventhub namespace. Required if '--target-id' is not specified",
              args: { name: "namespace" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--namespace'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the eventhub. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "keyvault",
          description:
            "Create a Service Connector local connection to keyvault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--vault'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the keyvault. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
            {
              name: "--vault",
              description:
                "Name of the keyvault. Required if '--target-id' is not specified",
              args: { name: "vault" },
            },
          ],
        },
        {
          name: "mysql",
          description: "Create a Service Connector local connection to mysql",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--database",
              description:
                "Name of the mysql database. Required if '--target-id' is not specified",
              args: { name: "database" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--server",
              description:
                "Name of the mysql server. Required if '--target-id' is not specified",
              args: { name: "server" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the mysql server. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
          ],
        },
        {
          name: "mysql-flexible",
          description:
            "Create a Service Connector local connection to mysql-flexible",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--database",
              description:
                "Name of the mysql flexible database. Required if '--target-id' is not specified",
              args: { name: "database" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--server",
              description:
                "Name of the mysql flexible server. Required if '--target-id' is not specified",
              args: { name: "server" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the mysql flexible server. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "postgres",
          description:
            "Create a Service Connector local connection to postgres",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--database",
              description:
                "Name of postgres database. Required if '--target-id' is not specified",
              args: { name: "database" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--server",
              description:
                "Name of postgres server. Required if '--target-id' is not specified",
              args: { name: "server" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the postgres service. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "postgres-flexible",
          description:
            "Create a Service Connector local connection to postgres-flexible",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--database",
              description:
                "Name of postgres flexible database. Required if '--target-id' is not specified",
              args: { name: "database" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--server",
              description:
                "Name of postgres flexible server. Required if '--target-id' is not specified",
              args: { name: "server" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the flexible postgres service. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "redis",
          description: "Create a Service Connector local connection to redis",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--database",
              description:
                "Name of the redis database. Required if '--target-id' is not specified",
              args: { name: "database" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--server",
              description:
                "Name of the redis server. Required if '--target-id' is not specified",
              args: { name: "server" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the redis server. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
          ],
        },
        {
          name: "redis-enterprise",
          description:
            "Create a Service Connector local connection to redis-enterprise",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--database",
              description:
                "Name of the redis enterprise database. Required if '--target-id' is not specified",
              args: { name: "database" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--server",
              description:
                "Name of the redis enterprise server. Required if '--target-id' is not specified",
              args: { name: "server" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the redis server. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
          ],
        },
        {
          name: "servicebus",
          description:
            "Create a Service Connector local connection to servicebus",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--namespace",
              description:
                "Name of the servicebus namespace. Required if '--target-id' is not specified",
              args: { name: "namespace" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--namespace'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the servicebus. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "signalr",
          description: "Create a Service Connector local connection to signalr",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: { name: "client-type", suggestions: ["dotnet", "none"] },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--signalr",
              description:
                "Name of the signalr service. Required if '--target-id' is not specified",
              args: { name: "signalr" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--signalr'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the signalr. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "sql",
          description: "Create a Service Connector local connection to sql",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--database",
              description:
                "Name of the sql database. Required if '--target-id' is not specified",
              args: { name: "database" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--server",
              description:
                "Name of the sql server. Required if '--target-id' is not specified",
              args: { name: "server" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the sql server. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "storage-blob",
          description:
            "Create a Service Connector local connection to storage-blob",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--account",
              description:
                "Name of the storage account. Required if '--target-id' is not specified",
              args: { name: "account" },
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the storage account. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "storage-file",
          description:
            "Create a Service Connector local connection to storage-file",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--account",
              description:
                "Name of the storage account. Required if '--target-id' is not specified",
              args: { name: "account" },
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the storage account. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
          ],
        },
        {
          name: "storage-queue",
          description:
            "Create a Service Connector local connection to storage-queue",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--account",
              description:
                "Name of the storage account. Required if '--target-id' is not specified",
              args: { name: "account" },
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the storage account. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "storage-table",
          description:
            "Create a Service Connector local connection to storage-table",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--account",
              description:
                "Name of the storage account. Required if '--target-id' is not specified",
              args: { name: "account" },
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: ["dotnet", "java", "nodejs", "none", "python"],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the storage account. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
          ],
        },
        {
          name: "webpubsub",
          description:
            "Create a Service Connector local connection to webpubsub",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: ["dotnet", "java", "nodejs", "none", "python"],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--target-id",
              description:
                "The resource id of target service. Required if ['--target-resource-group', '--webpubsub'] are not specified",
              args: { name: "target-id" },
            },
            {
              name: ["--target-resource-group", "--tg"],
              description:
                "The resource group which contains the webpubsub. Required if '--target-id' is not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
            {
              name: "--webpubsub",
              description:
                "Name of the webpubsub service. Required if '--target-id' is not specified",
              args: { name: "webpubsub" },
            },
          ],
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a Service Connector local connection",
      options: [
        {
          name: "--connection",
          description: "Name of the connection",
          args: { name: "connection" },
        },
        {
          name: "--id",
          description: "The id of connection",
          args: { name: "id" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "generate-configuration",
      description:
        "Generate configurations of a Service Connector local connection. The result should be put to application configuration file or set as environment variables",
      options: [
        {
          name: "--connection",
          description: "Name of the connection",
          args: { name: "connection" },
        },
        {
          name: "--id",
          description: "The id of connection",
          args: { name: "id" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "list",
      description: "List local connections of Service Connector",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
      ],
    },
    {
      name: "list-support-types",
      description:
        "List client types and auth types supported by local connections",
      options: [
        {
          name: ["--target-type", "-t"],
          description: "The target resource type",
          args: {
            name: "target-type",
            suggestions: [
              "appconfig",
              "confluent-cloud",
              "cosmos-cassandra",
              "cosmos-gremlin",
              "cosmos-mongo",
              "cosmos-sql",
              "cosmos-table",
              "eventhub",
              "keyvault",
              "mysql",
              "mysql-flexible",
              "postgres",
              "postgres-flexible",
              "redis",
              "redis-enterprise",
              "servicebus",
              "signalr",
              "sql",
              "storage-blob",
              "storage-file",
              "storage-queue",
              "storage-table",
              "webpubsub",
            ],
          },
        },
      ],
    },
    {
      name: "show",
      description: "Get the details of a Service Connector local connection",
      options: [
        {
          name: "--connection",
          description: "Name of the connection",
          args: { name: "connection" },
        },
        {
          name: "--id",
          description: "The id of connection",
          args: { name: "id" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "validate",
      description: "Validate a Service Connector local connection",
      options: [
        {
          name: "--connection",
          description: "Name of the connection",
          args: { name: "connection" },
        },
        {
          name: "--id",
          description: "The id of connection",
          args: { name: "id" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the connection is met",
      options: [
        {
          name: "--connection",
          description: "Name of the connection",
          args: { name: "connection" },
        },
        {
          name: "--created",
          description:
            "Wait until created with 'provisioningState' at 'Succeeded'",
        },
        {
          name: "--custom",
          description:
            "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
          args: { name: "custom" },
        },
        { name: "--deleted", description: "Wait until deleted" },
        { name: "--exists", description: "Wait until the resource exists" },
        {
          name: "--id",
          description: "The id of connection",
          args: { name: "id" },
        },
        {
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--timeout",
          description: "Maximum wait in seconds",
          args: { name: "timeout" },
        },
        {
          name: "--updated",
          description:
            "Wait until updated with provisioningState at 'Succeeded'",
        },
      ],
    },
    {
      name: "preview-configuration",
      description: "Preview the expected configurations of local connection",
      subcommands: [
        {
          name: "appconfig",
          description:
            "Preview the expected configurations of local connection to appconfig",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: ["dotnet", "java", "nodejs", "none", "python"],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "confluent-cloud",
          description:
            "Preview the expected configurations of local connection to confluent-cloud",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "cosmos-cassandra",
          description:
            "Preview the expected configurations of local connection to cosmos-cassandra",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "cosmos-gremlin",
          description:
            "Preview the expected configurations of local connection to cosmos-gremlin",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "cosmos-mongo",
          description:
            "Preview the expected configurations of local connection to cosmos-mongo",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "cosmos-sql",
          description:
            "Preview the expected configurations of local connection to cosmos-sql",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "cosmos-table",
          description:
            "Preview the expected configurations of local connection to cosmos-table",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "eventhub",
          description:
            "Preview the expected configurations of local connection to eventhub",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "kafka-springBoot",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "keyvault",
          description:
            "Preview the expected configurations of local connection to keyvault",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "mysql",
          description:
            "Preview the expected configurations of local connection to mysql",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "mysql-flexible",
          description:
            "Preview the expected configurations of local connection to mysql-flexible",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "postgres",
          description:
            "Preview the expected configurations of local connection to postgres",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "postgres-flexible",
          description:
            "Preview the expected configurations of local connection to postgres-flexible",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "redis",
          description:
            "Preview the expected configurations of local connection to redis",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "redis-enterprise",
          description:
            "Preview the expected configurations of local connection to redis-enterprise",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "servicebus",
          description:
            "Preview the expected configurations of local connection to servicebus",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "signalr",
          description:
            "Preview the expected configurations of local connection to signalr",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: { name: "client-type", suggestions: ["dotnet", "none"] },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "sql",
          description:
            "Preview the expected configurations of local connection to sql",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "storage-blob",
          description:
            "Preview the expected configurations of local connection to storage-blob",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "storage-file",
          description:
            "Preview the expected configurations of local connection to storage-file",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "storage-queue",
          description:
            "Preview the expected configurations of local connection to storage-queue",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "storage-table",
          description:
            "Preview the expected configurations of local connection to storage-table",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: ["dotnet", "java", "nodejs", "none", "python"],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "webpubsub",
          description:
            "Preview the expected configurations of local connection to webpubsub",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: ["dotnet", "java", "nodejs", "none", "python"],
              },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The local user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
      ],
    },
    {
      name: "update",
      description: "Update a Service Connector local connection",
      subcommands: [
        {
          name: "appconfig",
          description: "Update a local to appconfig connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: ["dotnet", "java", "nodejs", "none", "python"],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "confluent-cloud",
          description: "Update a local connection to confluent-cloud",
          options: [
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
              isRequired: true,
            },
            {
              name: "--bootstrap-server",
              description: "Kafka bootstrap server url",
              args: { name: "bootstrap-server" },
            },
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--kafka-key",
              description: "Kafka API-Key (key)",
              args: { name: "kafka-key" },
            },
            {
              name: "--kafka-secret",
              description: "Kafka API-Key (secret)",
              args: { name: "kafka-secret" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--schema-key",
              description: "Schema registry API-Key (key)",
              args: { name: "schema-key" },
            },
            {
              name: "--schema-registry",
              description: "Schema registry url",
              args: { name: "schema-registry" },
            },
            {
              name: "--schema-secret",
              description: "Schema registry API-Key (secret)",
              args: { name: "schema-secret" },
            },
          ],
        },
        {
          name: "cosmos-cassandra",
          description: "Update a local to cosmos-cassandra connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "cosmos-gremlin",
          description: "Update a local to cosmos-gremlin connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "cosmos-mongo",
          description: "Update a local to cosmos-mongo connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "cosmos-sql",
          description: "Update a local to cosmos-sql connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "cosmos-table",
          description: "Update a local to cosmos-table connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "eventhub",
          description: "Update a local to eventhub connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "kafka-springBoot",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "keyvault",
          description: "Update a local to keyvault connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "mysql",
          description: "Update a local to mysql connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "mysql-flexible",
          description: "Update a local to mysql-flexible connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "postgres",
          description: "Update a local to postgres connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "postgres-flexible",
          description: "Update a local to postgres-flexible connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "redis",
          description: "Update a local to redis connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "redis-enterprise",
          description: "Update a local to redis-enterprise connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "servicebus",
          description: "Update a local to servicebus connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "signalr",
          description: "Update a local to signalr connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: { name: "client-type", suggestions: ["dotnet", "none"] },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "sql",
          description: "Update a local to sql connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "django",
                  "dotnet",
                  "go",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "storage-blob",
          description: "Update a local to storage-blob connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "storage-file",
          description: "Update a local to storage-file connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "php",
                  "python",
                  "ruby",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "storage-queue",
          description: "Update a local to storage-queue connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: [
                  "dotnet",
                  "java",
                  "nodejs",
                  "none",
                  "python",
                  "springBoot",
                ],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
        {
          name: "storage-table",
          description: "Update a local to storage-table connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: ["dotnet", "java", "nodejs", "none", "python"],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "webpubsub",
          description: "Update a local to webpubsub connection",
          options: [
            {
              name: "--client-type",
              description: "The client type used on the connection",
              args: {
                name: "client-type",
                suggestions: ["dotnet", "java", "nodejs", "none", "python"],
              },
            },
            {
              name: "--connection",
              description: "Name of the connection",
              args: { name: "connection" },
            },
            {
              name: "--customized-keys",
              description:
                "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
              args: { name: "customized-keys" },
            },
            {
              name: "--id",
              description: "The id of connection",
              args: { name: "id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "The secret auth info",
              args: { name: "secret" },
            },
            {
              name: "--service-principal",
              description: "The service principal auth info",
              args: { name: "service-principal" },
            },
            {
              name: "--user-account",
              description: "The user account auth info",
              args: { name: "user-account" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
