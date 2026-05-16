const completion: Fig.Spec = {
  name: "spring-cloud",
  description: "Commands to manage Azure Spring Cloud",
  subcommands: [
    {
      name: "api-portal",
      description:
        "(Enterprise Tier Only) Commands to manage API portal in Azure Spring Cloud",
      subcommands: [
        {
          name: "clear",
          description: "Clear all settings of API portal",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the settings, provisioning status and runtime status of API portal",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update an existing API portal properties",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--assign-endpoint",
              description: "If true, assign endpoint URL for direct access",
              args: { name: "assign-endpoint", suggestions: ["false", "true"] },
            },
            {
              name: "--client-id",
              description: "The public identifier for the application",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description:
                "The secret known only to the application and the authorization server",
              args: { name: "client-secret" },
            },
            {
              name: "--https-only",
              description: "If true, access endpoint via https",
              args: { name: "https-only", suggestions: ["false", "true"] },
            },
            {
              name: "--instance-count",
              description: "Number of instance",
              args: { name: "instance-count" },
            },
            {
              name: "--issuer-uri",
              description: "The URI of Issuer Identifier",
              args: { name: "issuer-uri" },
            },
            {
              name: "--scope",
              description:
                "Comma-separated list of the specific actions applications can be allowed to do on a user's behalf",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "custom-domain",
          description: "Commands to manage custom domains for API portal",
          subcommands: [
            {
              name: "bind",
              description: "Bind a custom domain with the API portal",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of custom domain",
                  args: { name: "domain-name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--certificate",
                  description: "Certificate name in Azure Spring Cloud",
                  args: { name: "certificate" },
                },
              ],
            },
            {
              name: "list",
              description: "List all custom domains of the API portal",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show details of a custom domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of custom domain",
                  args: { name: "domain-name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "unbind",
              description: "Unbind a custom-domain of the API portal",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of custom domain",
                  args: { name: "domain-name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update a custom domain of the API portal",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of custom domain",
                  args: { name: "domain-name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--certificate",
                  description: "Certificate name in Azure Spring Cloud",
                  args: { name: "certificate" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "app",
      description: "Commands to manage apps in Azure Spring Cloud",
      subcommands: [
        {
          name: "append-loaded-public-certificate",
          description:
            "Append a new loaded public certificate to an app in the Azure Spring Cloud",
          options: [
            {
              name: "--certificate-name",
              description: "Name of the certificate to be appended",
              args: { name: "certificate-name" },
              isRequired: true,
            },
            {
              name: "--load-trust-store",
              description:
                "If true, the certificate would be loaded into trust store for Java applications",
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "append-persistent-storage",
          description:
            "Append a new persistent storage to an app in the Azure Spring Cloud",
          options: [
            {
              name: "--mount-path",
              description:
                "The path for the persistent storage volume to be mounted",
              args: { name: "mount-path" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--persistent-storage-type", "-t"],
              description: "Type of the persistent storage volumed",
              args: { name: "persistent-storage-type" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--share-name",
              description:
                "The name of the pre-created file share. ShareName should be provided only if the type of the persistent storage volume is AzureFileVolume",
              args: { name: "share-name" },
              isRequired: true,
            },
            {
              name: "--storage-name",
              description:
                "Name of the storage resource you created in Azure Spring Cloud",
              args: { name: "storage-name" },
              isRequired: true,
            },
            {
              name: "--mount-options",
              description:
                "[optional] The mount options for the persistent storage volume",
              args: { name: "mount-options" },
            },
            {
              name: "--read-only",
              description:
                "[optional] If true, the persistent storage volume will be read only",
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a new app with a default deployment in the Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--assign-endpoint",
              description: "If true, assign endpoint URL for direct access",
            },
            {
              name: "--cpu",
              description:
                "CPU resource quantity. Should be 500m or number of CPU cores",
              args: { name: "cpu" },
            },
            {
              name: "--disable-probe",
              description: "If true, disable the liveness and readiness probe",
              args: { name: "disable-probe", suggestions: ["false", "true"] },
            },
            {
              name: "--enable-persistent-storage",
              description:
                "If true, mount a 50G (Standard Pricing tier) or 1G (Basic Pricing tier) disk with default path",
              args: {
                name: "enable-persistent-storage",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--env",
              description:
                "Space-separated environment variables in 'key[=value]' format",
              args: { name: "env" },
            },
            {
              name: "--instance-count",
              description: "Number of instance",
              args: { name: "instance-count" },
            },
            {
              name: "--jvm-options",
              description:
                "A string containing jvm options, use '=' instead of ' ' for this argument to avoid bash parse error, eg: --jvm-options='-Xms1024m -Xmx2048m'",
              args: { name: "jvm-options" },
            },
            {
              name: ["--loaded-public-certificate-file", "-f"],
              description:
                "A json file path indicates the certificates which would be loaded to app",
              args: { name: "loaded-public-certificate-file" },
            },
            {
              name: "--memory",
              description:
                "Memory resource quantity. Should be 512Mi or #Gi, e.g., 1Gi, 3Gi",
              args: { name: "memory" },
            },
            {
              name: "--persistent-storage",
              description:
                "A json file path for the persistent storages to be mounted to the app",
              args: { name: "persistent-storage" },
            },
            {
              name: "--runtime-version",
              description: "Runtime version of used language",
              args: {
                name: "runtime-version",
                suggestions: ["Java_11", "Java_17", "Java_8", "NetCore_31"],
              },
            },
            {
              name: "--system-assigned",
              description: "Enable system-assigned managed identity",
              args: { name: "system-assigned", suggestions: ["false", "true"] },
            },
            {
              name: "--user-assigned",
              description:
                "Space-separated user-assigned managed identity resource IDs to assgin to an app",
              args: { name: "user-assigned" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an app in the Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "deploy",
          description:
            "Deploy source code or pre-built binary to an app and update related configurations",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--artifact-path",
              description:
                "Deploy the specified pre-built artifact (jar or netcore zip)",
              args: { name: "artifact-path" },
            },
            {
              name: "--build-env",
              description:
                "Space-separated environment variables in 'key[=value]' format",
              args: { name: "build-env" },
            },
            {
              name: "--builder",
              description:
                "(Enterprise Tier Only) Build service builder used to build the executable",
              args: { name: "builder" },
            },
            {
              name: "--config-file-patterns",
              description:
                "(Enterprise Tier Only) Config file patterns separated with ',' to decide which patterns of Application Configuration Service will be used. Use '\"\"' to clear existing configurations",
              args: { name: "config-file-patterns" },
            },
            {
              name: "--container-args",
              description: "The arguments of the container image",
              args: { name: "container-args" },
            },
            {
              name: "--container-command",
              description: "The command of the container image",
              args: { name: "container-command" },
            },
            {
              name: "--container-image",
              description: "The container image tag",
              args: { name: "container-image" },
            },
            {
              name: "--container-registry",
              description: "The registry of the container image",
              args: { name: "container-registry" },
            },
            {
              name: ["--deployment", "-d"],
              description:
                "Name of an existing deployment of the app. Default to the production deployment if not specified",
              args: { name: "deployment" },
            },
            {
              name: "--disable-probe",
              description: "If true, disable the liveness and readiness probe",
              args: { name: "disable-probe", suggestions: ["false", "true"] },
            },
            {
              name: "--disable-validation",
              description: "If true, disable jar validation",
              args: {
                name: "disable-validation",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--env",
              description:
                "Space-separated environment variables in 'key[=value]' format",
              args: { name: "env" },
            },
            {
              name: "--jvm-options",
              description:
                "A string containing jvm options, use '=' instead of ' ' for this argument to avoid bash parse error, eg: --jvm-options='-Xms1024m -Xmx2048m'",
              args: { name: "jvm-options" },
            },
            {
              name: ["--main-entry", "-m"],
              description:
                "A string containing the path to the .NET executable relative to zip root",
              args: { name: "main-entry" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--registry-password",
              description: "The password of the container registry",
              args: { name: "registry-password" },
            },
            {
              name: "--registry-username",
              description: "The username of the container registry",
              args: { name: "registry-username" },
            },
            {
              name: "--runtime-version",
              description: "Runtime version of used language",
              args: {
                name: "runtime-version",
                suggestions: ["Java_11", "Java_17", "Java_8", "NetCore_31"],
              },
            },
            {
              name: "--source-path",
              description:
                "Deploy the specified source folder. The folder will be packed into tar, uploaded, and built using kpack. Default to the current folder if no value provided",
              args: { name: "source-path" },
            },
            {
              name: "--target-module",
              description:
                "Child module to be deployed, required for multiple jar packages built from source code",
              args: { name: "target-module" },
            },
            {
              name: "--version",
              description: "Deployment version, keep unchanged if not set",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "list",
          description: "List all apps in the Azure Spring Cloud",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "logs",
          description:
            "Show logs of an app instance, logs will be streamed when setting '-f/--follow'",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: ["--deployment", "-d"],
              description:
                "Name of an existing deployment of the app. Default to the production deployment if not specified",
              args: { name: "deployment" },
            },
            {
              name: ["--follow", "-f", ""],
              description: "Specify if the logs should be streamed",
            },
            {
              name: "--format-json",
              description: "Format JSON logs if structured log is enabled",
              args: { name: "format-json" },
            },
            {
              name: ["--instance", "-i"],
              description: "Name of an existing instance of the deployment",
              args: { name: "instance" },
            },
            {
              name: "--limit",
              description:
                "Maximum kilobytes of logs to return. Ceiling number is 2048",
              args: { name: "limit" },
            },
            {
              name: "--lines",
              description: "Number of lines to show. Maximum is 10000",
              args: { name: "lines" },
            },
            {
              name: "--since",
              description:
                "Only return logs newer than a relative duration like 5s, 2m, or 1h. Maximum is 1h",
              args: { name: "since" },
            },
          ],
        },
        {
          name: "restart",
          description:
            "Restart instances of the app, default to production deployment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: ["--deployment", "-d"],
              description:
                "Name of an existing deployment of the app. Default to the production deployment if not specified",
              args: { name: "deployment" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "scale",
          description: "Manually scale an app or its deployments",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--cpu",
              description:
                "CPU resource quantity. Should be 500m or number of CPU cores",
              args: { name: "cpu" },
            },
            {
              name: ["--deployment", "-d"],
              description:
                "Name of an existing deployment of the app. Default to the production deployment if not specified",
              args: { name: "deployment" },
            },
            {
              name: "--instance-count",
              description: "Number of instance",
              args: { name: "instance-count" },
            },
            {
              name: "--memory",
              description:
                "Memory resource quantity. Should be 512Mi or #Gi, e.g., 1Gi, 3Gi",
              args: { name: "memory" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "set-deployment",
          description: "Set production deployment of an app",
          options: [
            {
              name: ["--deployment", "-d"],
              description: "Name of an existing deployment of the app",
              args: { name: "deployment" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of an app in the Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show-deploy-log",
          description:
            "Show build log of the last deploy, only apply to source code deploy, default to production deployment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: ["--deployment", "-d"],
              description:
                "Name of an existing deployment of the app. Default to the production deployment if not specified",
              args: { name: "deployment" },
            },
          ],
        },
        {
          name: "start",
          description:
            "Start instances of the app, default to production deployment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: ["--deployment", "-d"],
              description:
                "Name of an existing deployment of the app. Default to the production deployment if not specified",
              args: { name: "deployment" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "stop",
          description:
            "Stop instances of the app, default to production deployment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: ["--deployment", "-d"],
              description:
                "Name of an existing deployment of the app. Default to the production deployment if not specified",
              args: { name: "deployment" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "unset-deployment",
          description: "Unset production deployment of an app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "update",
          description: "Update configurations of an app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of app",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--assign-endpoint",
              description: "If true, assign endpoint URL for direct access",
              args: { name: "assign-endpoint", suggestions: ["false", "true"] },
            },
            {
              name: "--config-file-patterns",
              description:
                "(Enterprise Tier Only) Config file patterns separated with ',' to decide which patterns of Application Configuration Service will be used. Use '\"\"' to clear existing configurations",
              args: { name: "config-file-patterns" },
            },
            {
              name: ["--deployment", "-d"],
              description:
                "Name of an existing deployment of the app. Default to the production deployment if not specified",
              args: { name: "deployment" },
            },
            {
              name: "--disable-probe",
              description: "If true, disable the liveness and readiness probe",
              args: { name: "disable-probe", suggestions: ["false", "true"] },
            },
            {
              name: "--enable-ingress-to-app-tls",
              description: "If true, enable ingress to app tls",
              args: {
                name: "enable-ingress-to-app-tls",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-persistent-storage",
              description:
                "If true, mount a 50G (Standard Pricing tier) or 1G (Basic Pricing tier) disk with default path",
              args: {
                name: "enable-persistent-storage",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--env",
              description:
                "Space-separated environment variables in 'key[=value]' format",
              args: { name: "env" },
            },
            {
              name: "--https-only",
              description: "If true, access app via https",
            },
            {
              name: "--jvm-options",
              description:
                "A string containing jvm options, use '=' instead of ' ' for this argument to avoid bash parse error, eg: --jvm-options='-Xms1024m -Xmx2048m'",
              args: { name: "jvm-options" },
            },
            {
              name: ["--loaded-public-certificate-file", "-f"],
              description:
                "A json file path indicates the certificates which would be loaded to app",
              args: { name: "loaded-public-certificate-file" },
            },
            {
              name: ["--main-entry", "-m"],
              description:
                "The path to the .NET executable relative to zip root",
              args: { name: "main-entry" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--persistent-storage",
              description:
                "A json file path for the persistent storages to be mounted to the app",
              args: { name: "persistent-storage" },
            },
            {
              name: "--runtime-version",
              description: "Runtime version of used language",
              args: {
                name: "runtime-version",
                suggestions: ["Java_11", "Java_17", "Java_8", "NetCore_31"],
              },
            },
          ],
        },
        {
          name: "binding",
          description:
            "Commands to manage bindings with Azure Data Services, you need to manually restart app to make settings take effect",
          subcommands: [
            {
              name: "list",
              description: "List all service bindings in an app",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a service binding of the app",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of service binding",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show the details of a service binding",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of service binding",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "cosmos",
              description: "Commands to manage Azure Cosmos DB bindings",
              subcommands: [
                {
                  name: "add",
                  description: "Bind an Azure Cosmos DB with the app",
                  options: [
                    {
                      name: "--api-type",
                      description: "Type of API",
                      args: {
                        name: "api-type",
                        suggestions: [
                          "cassandra",
                          "gremlin",
                          "mongo",
                          "sql",
                          "table",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--app",
                      description: "Name of app",
                      args: { name: "app" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of service binding",
                      args: { name: "name" },
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
                      name: "--resource-id",
                      description:
                        "Azure resource ID of the service to bind with",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                    {
                      name: "--collection-name",
                      description: "Name of collection. Required for gremlin",
                      args: { name: "collection-name" },
                    },
                    {
                      name: "--database-name",
                      description:
                        "Name of database. Required for mongo, sql, gremlin",
                      args: { name: "database-name" },
                    },
                    {
                      name: "--key-space",
                      description:
                        "Cassandra key space. Required for cassandra",
                      args: { name: "key-space" },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update an Azure Cosmos DB service binding of the app",
                  options: [
                    {
                      name: "--app",
                      description: "Name of app",
                      args: { name: "app" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of service binding",
                      args: { name: "name" },
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
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                    {
                      name: "--collection-name",
                      description: "Name of collection. Required for gremlin",
                      args: { name: "collection-name" },
                    },
                    {
                      name: "--database-name",
                      description:
                        "Name of database. Required for mongo, sql, gremlin",
                      args: { name: "database-name" },
                    },
                    {
                      name: "--key-space",
                      description:
                        "Cassandra key space. Required for cassandra",
                      args: { name: "key-space" },
                    },
                  ],
                },
              ],
            },
            {
              name: "mysql",
              description:
                "Commands to manage Azure Database for MySQL bindings",
              subcommands: [
                {
                  name: "add",
                  description: "Bind an Azure Database for MySQL with the app",
                  options: [
                    {
                      name: "--app",
                      description: "Name of app",
                      args: { name: "app" },
                      isRequired: true,
                    },
                    {
                      name: "--database-name",
                      description: "Database name",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: "--key",
                      description: "API key of the service",
                      args: { name: "key" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of service binding",
                      args: { name: "name" },
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
                      name: "--resource-id",
                      description:
                        "Azure resource ID of the service to bind with",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                    {
                      name: "--username",
                      description: "Username of the database",
                      args: { name: "username" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update an Azure Database for MySQL service binding of the app",
                  options: [
                    {
                      name: "--app",
                      description: "Name of app",
                      args: { name: "app" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of service binding",
                      args: { name: "name" },
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
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                    {
                      name: "--database-name",
                      description: "Database name",
                      args: { name: "database-name" },
                    },
                    {
                      name: "--key",
                      description: "API key of the service",
                      args: { name: "key" },
                    },
                    {
                      name: "--username",
                      description: "Username of the database",
                      args: { name: "username" },
                    },
                  ],
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
                  options: [
                    {
                      name: "--app",
                      description: "Name of app",
                      args: { name: "app" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of service binding",
                      args: { name: "name" },
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
                      name: "--resource-id",
                      description:
                        "Azure resource ID of the service to bind with",
                      args: { name: "resource-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                    {
                      name: "--disable-ssl",
                      description: "If true, disable SSL. If false, enable SSL",
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update an Azure Cache for Redis service binding of the app",
                  options: [
                    {
                      name: "--app",
                      description: "Name of app",
                      args: { name: "app" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of service binding",
                      args: { name: "name" },
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
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                    {
                      name: "--disable-ssl",
                      description: "If true, disable SSL. If false, enable SSL",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "custom-domain",
          description: "Commands to manage custom domains",
          subcommands: [
            {
              name: "bind",
              description: "Bind a custom domain with the app",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
                  isRequired: true,
                },
                {
                  name: "--domain-name",
                  description: "Name of custom domain",
                  args: { name: "domain-name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--certificate",
                  description: "Certificate name in Azure Spring Cloud",
                  args: { name: "certificate" },
                },
                {
                  name: "--enable-ingress-to-app-tls",
                  description: "If true, enable ingress to app tls",
                  args: {
                    name: "enable-ingress-to-app-tls",
                    suggestions: ["false", "true"],
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List all custom domains of the app",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show details of a custom domain",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
                  isRequired: true,
                },
                {
                  name: "--domain-name",
                  description: "Name of custom domain",
                  args: { name: "domain-name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "unbind",
              description: "Unbind a custom-domain of the app",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
                  isRequired: true,
                },
                {
                  name: "--domain-name",
                  description: "Name of custom domain",
                  args: { name: "domain-name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update a custom domain of the app",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
                  isRequired: true,
                },
                {
                  name: "--domain-name",
                  description: "Name of custom domain",
                  args: { name: "domain-name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--certificate",
                  description: "Certificate name in Azure Spring Cloud",
                  args: { name: "certificate" },
                },
                {
                  name: "--enable-ingress-to-app-tls",
                  description: "If true, enable ingress to app tls",
                  args: {
                    name: "enable-ingress-to-app-tls",
                    suggestions: ["false", "true"],
                  },
                },
              ],
            },
          ],
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
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of deployment",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--artifact-path",
                  description:
                    "Deploy the specified pre-built artifact (jar or netcore zip)",
                  args: { name: "artifact-path" },
                },
                {
                  name: "--build-env",
                  description:
                    "Space-separated environment variables in 'key[=value]' format",
                  args: { name: "build-env" },
                },
                {
                  name: "--builder",
                  description:
                    "(Enterprise Tier Only) Build service builder used to build the executable",
                  args: { name: "builder" },
                },
                {
                  name: "--config-file-patterns",
                  description:
                    "(Enterprise Tier Only) Config file patterns separated with ',' to decide which patterns of Application Configuration Service will be used. Use '\"\"' to clear existing configurations",
                  args: { name: "config-file-patterns" },
                },
                {
                  name: "--container-args",
                  description: "The arguments of the container image",
                  args: { name: "container-args" },
                },
                {
                  name: "--container-command",
                  description: "The command of the container image",
                  args: { name: "container-command" },
                },
                {
                  name: "--container-image",
                  description: "The container image tag",
                  args: { name: "container-image" },
                },
                {
                  name: "--container-registry",
                  description: "The registry of the container image",
                  args: { name: "container-registry" },
                },
                {
                  name: "--cpu",
                  description:
                    "CPU resource quantity. Should be 500m or number of CPU cores",
                  args: { name: "cpu" },
                },
                {
                  name: "--disable-probe",
                  description:
                    "If true, disable the liveness and readiness probe",
                  args: {
                    name: "disable-probe",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--disable-validation",
                  description: "If true, disable jar validation",
                  args: {
                    name: "disable-validation",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--env",
                  description:
                    "Space-separated environment variables in 'key[=value]' format",
                  args: { name: "env" },
                },
                {
                  name: "--instance-count",
                  description: "Number of instance",
                  args: { name: "instance-count" },
                },
                {
                  name: "--jvm-options",
                  description:
                    "A string containing jvm options, use '=' instead of ' ' for this argument to avoid bash parse error, eg: --jvm-options='-Xms1024m -Xmx2048m'",
                  args: { name: "jvm-options" },
                },
                {
                  name: ["--main-entry", "-m"],
                  description:
                    "A string containing the path to the .NET executable relative to zip root",
                  args: { name: "main-entry" },
                },
                {
                  name: "--memory",
                  description:
                    "Memory resource quantity. Should be 512Mi or #Gi, e.g., 1Gi, 3Gi",
                  args: { name: "memory" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--registry-password",
                  description: "The password of the container registry",
                  args: { name: "registry-password" },
                },
                {
                  name: "--registry-username",
                  description: "The username of the container registry",
                  args: { name: "registry-username" },
                },
                {
                  name: "--runtime-version",
                  description: "Runtime version of used language",
                  args: {
                    name: "runtime-version",
                    suggestions: ["Java_11", "Java_17", "Java_8", "NetCore_31"],
                  },
                },
                {
                  name: "--skip-clone-settings",
                  description:
                    "Create staging deployment will automatically copy settings from production deployment",
                },
                {
                  name: "--source-path",
                  description:
                    "Deploy the specified source folder. The folder will be packed into tar, uploaded, and built using kpack. Default to the current folder if no value provided",
                  args: { name: "source-path" },
                },
                {
                  name: "--target-module",
                  description:
                    "Child module to be deployed, required for multiple jar packages built from source code",
                  args: { name: "target-module" },
                },
                {
                  name: "--version",
                  description: "Deployment version, keep unchanged if not set",
                  args: { name: "version" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a deployment of the app",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of deployment",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "generate-heap-dump",
              description:
                "Generate a heap dump of your target app instance to given file path",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
                  isRequired: true,
                },
                {
                  name: "--app-instance",
                  description: "Target app instance you want to dump",
                  args: { name: "app-instance" },
                  isRequired: true,
                },
                {
                  name: "--file-path",
                  description: "The mount file path for your dump file",
                  args: { name: "file-path" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: ["--deployment", "-d"],
                  description:
                    "Name of an existing deployment of the app. Default to the production deployment if not specified",
                  args: { name: "deployment" },
                },
              ],
            },
            {
              name: "generate-thread-dump",
              description:
                "Generate a thread dump of your target app instance to given file path",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
                  isRequired: true,
                },
                {
                  name: "--app-instance",
                  description: "Target app instance you want to dump",
                  args: { name: "app-instance" },
                  isRequired: true,
                },
                {
                  name: "--file-path",
                  description: "The mount file path for your dump file",
                  args: { name: "file-path" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: ["--deployment", "-d"],
                  description:
                    "Name of an existing deployment of the app. Default to the production deployment if not specified",
                  args: { name: "deployment" },
                },
              ],
            },
            {
              name: "list",
              description: "List all deployments in an app",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show details of a deployment",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of deployment",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "start-jfr",
              description:
                "Start a JFR on your target app instance to given file path",
              options: [
                {
                  name: "--app",
                  description: "Name of app",
                  args: { name: "app" },
                  isRequired: true,
                },
                {
                  name: "--app-instance",
                  description: "Target app instance you want to dump",
                  args: { name: "app-instance" },
                  isRequired: true,
                },
                {
                  name: "--file-path",
                  description: "The mount file path for your dump file",
                  args: { name: "file-path" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: ["--deployment", "-d"],
                  description:
                    "Name of an existing deployment of the app. Default to the production deployment if not specified",
                  args: { name: "deployment" },
                },
                {
                  name: "--duration",
                  description: "Duration of JFR",
                  args: { name: "duration" },
                },
              ],
            },
          ],
        },
        {
          name: "identity",
          description: "Manage an app's managed identities",
          subcommands: [
            {
              name: "assign",
              description:
                "Enable system-assigned managed identity or assign user-assigned managed identities to an app",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of app",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--role",
                  description:
                    "Role name or id the managed identity will be assigned",
                  args: { name: "role" },
                },
                {
                  name: "--scope",
                  description: "The scope the managed identity has access to",
                  args: { name: "scope" },
                },
                {
                  name: "--system-assigned",
                  description:
                    "Enable system-assigned managed identity on an app",
                  args: {
                    name: "system-assigned",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--user-assigned",
                  description:
                    "Space-separated user-assigned managed identity resource IDs to assgin to an app",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "force-set",
              description: "Force set managed identities on an app",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of app",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--system-assigned",
                  description:
                    'Allowed values: ["enable", "disable"]. Use "enable" to enable or keep system-assigned managed identity. Use "disable" to remove system-assigned managed identity',
                  args: { name: "system-assigned" },
                  isRequired: true,
                },
                {
                  name: "--user-assigned",
                  description:
                    'Allowed values: ["disable", space-separated user-assigned managed identity resource IDs]. Use "disable" to remove all user-assigned managed identities, use resource IDs to assign or keep user-assigned managed identities',
                  args: { name: "user-assigned" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description: "Remove managed identity from an app",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of app",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--system-assigned",
                  description: "Remove system-assigned managed identity",
                  args: {
                    name: "system-assigned",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--user-assigned",
                  description:
                    "Space-separated user-assigned managed identity resource IDs to remove. If no ID is provided, remove ALL user-assigned managed identities",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "show",
              description: "Display app's managed identity info",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of app",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
          ],
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
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of app",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: ["--deployment", "-d"],
                  description:
                    "Name of an existing deployment of the app. Default to the production deployment if not specified",
                  args: { name: "deployment" },
                },
                {
                  name: ["--follow", "-f", ""],
                  description: "Specify if the logs should be streamed",
                },
                {
                  name: "--format-json",
                  description: "Format JSON logs if structured log is enabled",
                  args: { name: "format-json" },
                },
                {
                  name: ["--instance", "-i"],
                  description: "Name of an existing instance of the deployment",
                  args: { name: "instance" },
                },
                {
                  name: "--limit",
                  description:
                    "Maximum kilobytes of logs to return. Ceiling number is 2048",
                  args: { name: "limit" },
                },
                {
                  name: "--lines",
                  description: "Number of lines to show. Maximum is 10000",
                  args: { name: "lines" },
                },
                {
                  name: "--since",
                  description:
                    "Only return logs newer than a relative duration like 5s, 2m, or 1h. Maximum is 1h",
                  args: { name: "since" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "app-insights",
      description:
        "Commands to management Application Insights in Azure Spring Cloud",
      subcommands: [
        {
          name: "show",
          description: "Show Application Insights settings",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of Azure Spring Cloud",
              args: { name: "name" },
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
          description: "Update Application Insights settings",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of Azure Spring Cloud",
              args: { name: "name" },
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
              name: "--app-insights",
              description:
                "Name of the existing Application Insights in the same Resource Group. Or Resource ID of the existing Application Insights in a different Resource Group",
              args: { name: "app-insights" },
            },
            {
              name: "--app-insights-key",
              description:
                "Connection string (recommended) or Instrumentation key of the existing Application Insights",
              args: { name: "app-insights-key" },
            },
            {
              name: "--disable",
              description: "Disable Application Insights",
              args: { name: "disable", suggestions: ["false", "true"] },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--sampling-rate",
              description:
                "Sampling Rate of application insights. Maximum is 100",
              args: { name: "sampling-rate" },
            },
          ],
        },
      ],
    },
    {
      name: "application-configuration-service",
      description:
        "(Enterprise Tier Only) Commands to manage Application Configuration Service in Azure Spring Cloud",
      subcommands: [
        {
          name: "bind",
          description: "Bind an app to Application Configuration Service",
          options: [
            {
              name: "--app",
              description: "Name of app",
              args: { name: "app" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "clear",
          description: "Reset all Application Configuration Service settings",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the provisioning status, runtime status, and settings of Application Configuration Service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "unbind",
          description: "Unbind an app from Application Configuration Service",
          options: [
            {
              name: "--app",
              description: "Name of app",
              args: { name: "app" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "git",
          description:
            "Commands to manage Application Configuration Service git property in Azure Spring Cloud",
          subcommands: [
            {
              name: "repo",
              description:
                "Commands to manage Application Configuration Service git repository in Azure Spring Cloud",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add a Git property to the Application Configuration Service settings",
                  options: [
                    {
                      name: "--label",
                      description:
                        "Required branch name to search in the Git repository",
                      args: { name: "label" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Required unique name to label each item of git configs",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--patterns",
                      description:
                        "Required patterns used to search in Git repositories. For each pattern, use format like {application} or {application}/{profile} instead of {application}-{profile}.yml, and separate them by comma",
                      args: { name: "patterns" },
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
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                    {
                      name: "--uri",
                      description: "Required Git URI",
                      args: { name: "uri" },
                      isRequired: true,
                    },
                    {
                      name: "--host-key",
                      description: "Host key of the added config",
                      args: { name: "host-key" },
                    },
                    {
                      name: "--host-key-algorithm",
                      description: "Host key algorithm of the added config",
                      args: { name: "host-key-algorithm" },
                    },
                    {
                      name: "--host-key-check",
                      description:
                        "Strict host key checking of the added config which is used in SSH authentication. If false, ignore errors with host key",
                      args: { name: "host-key-check" },
                    },
                    {
                      name: "--password",
                      description: "Password of the added config",
                      args: { name: "password" },
                    },
                    {
                      name: "--private-key",
                      description: "Private_key of the added config",
                      args: { name: "private-key" },
                    },
                    {
                      name: "--search-paths",
                      description:
                        "Search_paths of the added config, use , as delimiter for multiple paths",
                      args: { name: "search-paths" },
                    },
                    {
                      name: "--username",
                      description: "Username of the added config",
                      args: { name: "username" },
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List all Git settings of Application Configuration Service",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "remove",
                  description:
                    "Delete an existing Git property from the Application Configuration Service settings",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "Required unique name to label each item of git configs",
                      args: { name: "name" },
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
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update an existing Git property in the Application Configuration Service settings",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "Required unique name to label each item of git configs",
                      args: { name: "name" },
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
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                    {
                      name: "--host-key",
                      description: "Host key of the added config",
                      args: { name: "host-key" },
                    },
                    {
                      name: "--host-key-algorithm",
                      description: "Host key algorithm of the added config",
                      args: { name: "host-key-algorithm" },
                    },
                    {
                      name: "--host-key-check",
                      description:
                        "Strict host key checking of the added config which is used in SSH authentication. If false, ignore errors with host key",
                      args: { name: "host-key-check" },
                    },
                    {
                      name: "--label",
                      description:
                        "Required branch name to search in the Git repository",
                      args: { name: "label" },
                    },
                    {
                      name: "--password",
                      description: "Password of the added config",
                      args: { name: "password" },
                    },
                    {
                      name: "--patterns",
                      description:
                        "Required patterns used to search in Git repositories. For each pattern, use format like {application} or {application}/{profile} instead of {application}-{profile}.yml, and separate them by comma",
                      args: { name: "patterns" },
                    },
                    {
                      name: "--private-key",
                      description: "Private_key of the added config",
                      args: { name: "private-key" },
                    },
                    {
                      name: "--search-paths",
                      description:
                        "Search_paths of the added config, use , as delimiter for multiple paths",
                      args: { name: "search-paths" },
                    },
                    {
                      name: "--uri",
                      description: "Required Git URI",
                      args: { name: "uri" },
                    },
                    {
                      name: "--username",
                      description: "Username of the added config",
                      args: { name: "username" },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "build-service",
      description:
        "(Enterprise Tier Only) Commands to manage build service in Azure Spring Cloud",
      subcommands: [
        {
          name: "builder",
          description:
            "(Enterprise Tier Only) Commands to manage builder of build service",
          subcommands: [
            {
              name: "create",
              description: "Create a builder",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The builder name",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--builder-file",
                  description: "The file path of JSON array of builder",
                  args: { name: "builder-file" },
                },
                {
                  name: "--builder-json",
                  description: "The JSON array of builder",
                  args: { name: "builder-json" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a builder",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The builder name",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "show",
              description: "Show a builder",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The builder name",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update a builder",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The builder name",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--builder-file",
                  description: "The file path of JSON array of builder",
                  args: { name: "builder-file" },
                },
                {
                  name: "--builder-json",
                  description: "The JSON array of builder",
                  args: { name: "builder-json" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "buildpack-binding",
              description:
                "(Enterprise Tier Only) Commands to manage buildpack-binding of builder",
              subcommands: [
                {
                  name: "create",
                  description:
                    "(Enterprise Tier Only) Create a buildpack binding",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name for buildpack binding",
                      args: { name: "name" },
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
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                    {
                      name: "--type",
                      description: "Required type for buildpack binding",
                      args: {
                        name: "type",
                        suggestions: [
                          "ApacheSkyWalking",
                          "AppDynamics",
                          "ApplicationInsights",
                          "Dynatrace",
                          "ElasticAPM",
                          "NewRelic",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--builder-name",
                      description: "The name for builder",
                      args: { name: "builder-name" },
                    },
                    {
                      name: "--properties",
                      description:
                        'Non-sensitive properties for launchProperties. Format "key[=value]"',
                      args: { name: "properties" },
                    },
                    {
                      name: "--secrets",
                      description:
                        'Sensitive properties for launchProperties. Once put, it will be encrypted and never return to user. Format "key[=value]"',
                      args: { name: "secrets" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "(Enterprise Tier Only) Delete a buildpack binding",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name for buildpack binding",
                      args: { name: "name" },
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
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                    {
                      name: "--builder-name",
                      description: "The name for builder",
                      args: { name: "builder-name" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "(Enterprise Tier Only) List all buildpack binding in a builder. The secrets will be masked",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                    {
                      name: "--builder-name",
                      description: "The name for builder",
                      args: { name: "builder-name" },
                    },
                  ],
                },
                {
                  name: "set",
                  description: "(Enterprise Tier Only) Set a buildpack binding",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name for buildpack binding",
                      args: { name: "name" },
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
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                    {
                      name: "--type",
                      description: "Required type for buildpack binding",
                      args: {
                        name: "type",
                        suggestions: [
                          "ApacheSkyWalking",
                          "AppDynamics",
                          "ApplicationInsights",
                          "Dynatrace",
                          "ElasticAPM",
                          "NewRelic",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--builder-name",
                      description: "The name for builder",
                      args: { name: "builder-name" },
                    },
                    {
                      name: "--properties",
                      description:
                        'Non-sensitive properties for launchProperties. Format "key[=value]"',
                      args: { name: "properties" },
                    },
                    {
                      name: "--secrets",
                      description:
                        'Sensitive properties for launchProperties. Once put, it will be encrypted and never return to user. Format "key[=value]"',
                      args: { name: "secrets" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "(Enterprise Tier Only) Show a buildpack binding. The secrets will be masked",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name for buildpack binding",
                      args: { name: "name" },
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
                      name: ["--service", "-s"],
                      description:
                        "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                      args: { name: "service" },
                      isRequired: true,
                    },
                    {
                      name: "--builder-name",
                      description: "The name for builder",
                      args: { name: "builder-name" },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "certificate",
      description: "Commands to manage certificates",
      subcommands: [
        {
          name: "add",
          description: "Add a certificate in Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of certificate",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--only-public-cert",
              description:
                "If true, only import public certificate part from key vault",
            },
            {
              name: ["--public-certificate-file", "-f"],
              description:
                "A file path for the public certificate to be uploaded",
              args: { name: "public-certificate-file" },
            },
            {
              name: "--vault-certificate-name",
              description: "The certificate name in key vault",
              args: { name: "vault-certificate-name" },
            },
            {
              name: "--vault-uri",
              description: "The key vault uri where store the certificate",
              args: { name: "vault-uri" },
            },
          ],
        },
        {
          name: "list",
          description: "List all certificates in Azure Spring Cloud",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--certificate-type",
              description: "Type of uploaded certificate",
              args: {
                name: "certificate-type",
                suggestions: ["ContentCertificate", "KeyVaultCertificate"],
              },
            },
          ],
        },
        {
          name: "list-reference-app",
          description:
            "List all the apps reference an existing certificate in the Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of certificate",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a certificate in Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of certificate",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show a certificate in Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of certificate",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "config-server",
      description:
        "(Support Standard Tier and Basic Tier) Commands to manage Config Server in Azure Spring Cloud",
      subcommands: [
        {
          name: "clear",
          description: "Erase all settings in Config Server",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of Azure Spring Cloud",
              args: { name: "name" },
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
          name: "set",
          description: "Set Config Server from a yaml file",
          options: [
            {
              name: "--config-file",
              description:
                "A yaml file path for the configuration of Spring Cloud config server",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of Azure Spring Cloud",
              args: { name: "name" },
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "show",
          description: "Show Config Server",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of Azure Spring Cloud",
              args: { name: "name" },
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
          name: "git",
          description:
            "Commands to manage Config Server git property in Azure Spring Cloud",
          subcommands: [
            {
              name: "set",
              description:
                "Set git property of Config Server, will totally override the old one",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of Azure Spring Cloud",
                  args: { name: "name" },
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
                  name: "--uri",
                  description: "Uri of the added config",
                  args: { name: "uri" },
                  isRequired: true,
                },
                {
                  name: "--defer",
                  description:
                    "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                  args: { name: "defer" },
                },
                {
                  name: "--host-key",
                  description: "Host key of the added config",
                  args: { name: "host-key" },
                },
                {
                  name: "--host-key-algorithm",
                  description: "Host key algorithm of the added config",
                  args: { name: "host-key-algorithm" },
                },
                {
                  name: "--label",
                  description: "Label of the added config",
                  args: { name: "label" },
                },
                {
                  name: "--password",
                  description: "Password of the added config",
                  args: { name: "password" },
                },
                {
                  name: "--private-key",
                  description: "Private_key of the added config",
                  args: { name: "private-key" },
                },
                {
                  name: "--search-paths",
                  description:
                    "Search_paths of the added config, use , as delimiter for multiple paths",
                  args: { name: "search-paths" },
                },
                {
                  name: "--strict-host-key-checking",
                  description: "Strict_host_key_checking of the added config",
                  args: { name: "strict-host-key-checking" },
                },
                {
                  name: "--username",
                  description: "Username of the added config",
                  args: { name: "username" },
                },
              ],
            },
            {
              name: "repo",
              description:
                "Commands to manage Config Server git repository in Azure Spring Cloud",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add a new repository of git property of Config Server",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of Azure Spring Cloud",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--repo-name",
                      description: "Name of the repo",
                      args: { name: "repo-name" },
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
                      name: "--uri",
                      description: "Uri of the added config",
                      args: { name: "uri" },
                      isRequired: true,
                    },
                    {
                      name: "--defer",
                      description:
                        "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                      args: { name: "defer" },
                    },
                    {
                      name: "--host-key",
                      description: "Host key of the added config",
                      args: { name: "host-key" },
                    },
                    {
                      name: "--host-key-algorithm",
                      description: "Host key algorithm of the added config",
                      args: { name: "host-key-algorithm" },
                    },
                    {
                      name: "--label",
                      description: "Label of the added config",
                      args: { name: "label" },
                    },
                    {
                      name: "--password",
                      description: "Password of the added config",
                      args: { name: "password" },
                    },
                    {
                      name: "--pattern",
                      description:
                        "Pattern of the repo, use , as delimiter for multiple patterns",
                      args: { name: "pattern" },
                    },
                    {
                      name: "--private-key",
                      description: "Private_key of the added config",
                      args: { name: "private-key" },
                    },
                    {
                      name: "--search-paths",
                      description:
                        "Search_paths of the added config, use , as delimiter for multiple paths",
                      args: { name: "search-paths" },
                    },
                    {
                      name: "--strict-host-key-checking",
                      description:
                        "Strict_host_key_checking of the added config",
                      args: { name: "strict-host-key-checking" },
                    },
                    {
                      name: "--username",
                      description: "Username of the added config",
                      args: { name: "username" },
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List all repositories of git property of Config Server",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of Azure Spring Cloud",
                      args: { name: "name" },
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
                      name: "--defer",
                      description:
                        "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                      args: { name: "defer" },
                    },
                  ],
                },
                {
                  name: "remove",
                  description:
                    "Remove an existing repository of git property of Config Server",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of Azure Spring Cloud",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--repo-name",
                      description: "Name of the repo",
                      args: { name: "repo-name" },
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
                      name: "--defer",
                      description:
                        "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                      args: { name: "defer" },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Override an existing repository of git property of Config Server, will totally override the old one",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of Azure Spring Cloud",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--repo-name",
                      description: "Name of the repo",
                      args: { name: "repo-name" },
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
                      name: "--defer",
                      description:
                        "Temporarily store the object in the local cache instead of sending to Azure. Use az cache commands to view/clear",
                      args: { name: "defer" },
                    },
                    {
                      name: "--host-key",
                      description: "Host key of the added config",
                      args: { name: "host-key" },
                    },
                    {
                      name: "--host-key-algorithm",
                      description: "Host key algorithm of the added config",
                      args: { name: "host-key-algorithm" },
                    },
                    {
                      name: "--label",
                      description: "Label of the added config",
                      args: { name: "label" },
                    },
                    {
                      name: "--password",
                      description: "Password of the added config",
                      args: { name: "password" },
                    },
                    {
                      name: "--pattern",
                      description:
                        "Pattern of the repo, use , as delimiter for multiple patterns",
                      args: { name: "pattern" },
                    },
                    {
                      name: "--private-key",
                      description: "Private_key of the added config",
                      args: { name: "private-key" },
                    },
                    {
                      name: "--search-paths",
                      description:
                        "Search_paths of the added config, use , as delimiter for multiple paths",
                      args: { name: "search-paths" },
                    },
                    {
                      name: "--strict-host-key-checking",
                      description:
                        "Strict_host_key_checking of the added config",
                      args: { name: "strict-host-key-checking" },
                    },
                    {
                      name: "--uri",
                      description: "Uri of the added config",
                      args: { name: "uri" },
                    },
                    {
                      name: "--username",
                      description: "Username of the added config",
                      args: { name: "username" },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "connection",
      description: "Commands to manage spring-cloud connections",
      subcommands: [
        {
          name: "delete",
          description: "Delete a spring-cloud connection",
          options: [
            {
              name: "--app",
              description:
                "Name of the spring-cloud app. Required if '--id' is not specified.None",
              args: { name: "app" },
            },
            {
              name: "--connection",
              description: "Name of the spring-cloud connection",
              args: { name: "connection" },
            },
            {
              name: "--deployment",
              description:
                "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
              args: { name: "deployment" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--service",
              description:
                "Name of the spring-cloud service. Required if '--id' is not specified.None",
              args: { name: "service" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List connections of a spring-cloud",
          options: [
            {
              name: "--app",
              description:
                "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
              args: { name: "app" },
            },
            {
              name: "--deployment",
              description:
                "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
              args: { name: "deployment" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--service",
              description:
                "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
              args: { name: "service" },
            },
            {
              name: "--source-id",
              description:
                "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
              args: { name: "source-id" },
            },
          ],
        },
        {
          name: "list-configuration",
          description:
            "List source configurations of a spring-cloud connection",
          options: [
            {
              name: "--app",
              description:
                "Name of the spring-cloud app. Required if '--id' is not specified.None",
              args: { name: "app" },
            },
            {
              name: "--connection",
              description: "Name of the spring-cloud connection",
              args: { name: "connection" },
            },
            {
              name: "--deployment",
              description:
                "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
              args: { name: "deployment" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--service",
              description:
                "Name of the spring-cloud service. Required if '--id' is not specified.None",
              args: { name: "service" },
            },
          ],
        },
        {
          name: "list-support-types",
          description:
            "List client types and auth types supported by spring-cloud connections",
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
          description: "Get the details of a spring-cloud connection",
          options: [
            {
              name: "--app",
              description:
                "Name of the spring-cloud app. Required if '--id' is not specified.None",
              args: { name: "app" },
            },
            {
              name: "--connection",
              description: "Name of the spring-cloud connection",
              args: { name: "connection" },
            },
            {
              name: "--deployment",
              description:
                "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
              args: { name: "deployment" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--service",
              description:
                "Name of the spring-cloud service. Required if '--id' is not specified.None",
              args: { name: "service" },
            },
          ],
        },
        {
          name: "validate",
          description: "Validate a spring-cloud connection",
          options: [
            {
              name: "--app",
              description:
                "Name of the spring-cloud app. Required if '--id' is not specified.None",
              args: { name: "app" },
            },
            {
              name: "--connection",
              description: "Name of the spring-cloud connection",
              args: { name: "connection" },
            },
            {
              name: "--deployment",
              description:
                "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
              args: { name: "deployment" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--service",
              description:
                "Name of the spring-cloud service. Required if '--id' is not specified.None",
              args: { name: "service" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the connection is met",
          options: [
            {
              name: "--app",
              description:
                "Name of the spring-cloud app. Required if '--id' is not specified.None",
              args: { name: "app" },
            },
            {
              name: "--connection",
              description: "Name of the spring-cloud connection",
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
            {
              name: "--deployment",
              description:
                "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
              args: { name: "deployment" },
            },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--service",
              description:
                "Name of the spring-cloud service. Required if '--id' is not specified.None",
              args: { name: "service" },
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
          name: "create",
          description:
            "Create a connection between a spring-cloud and a target resource",
          subcommands: [
            {
              name: "appconfig",
              description: "Create a spring-cloud connection to appconfig",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--app-config",
                  description:
                    "Name of the app configuration. Required if '--target-id' is not specified",
                  args: { name: "app-config" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "confluent-cloud",
              description:
                "Create a spring-cloud connection to confluent-cloud",
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
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-cassandra",
              description:
                "Create a spring-cloud connection to cosmos-cassandra",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--key-space",
                  description:
                    "Name of the keyspace. Required if '--target-id' is not specified",
                  args: { name: "key-space" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-gremlin",
              description: "Create a spring-cloud connection to cosmos-gremlin",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
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
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--graph",
                  description:
                    "Name of the graph. Required if '--target-id' is not specified",
                  args: { name: "graph" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-mongo",
              description: "Create a spring-cloud connection to cosmos-mongo",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
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
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-sql",
              description: "Create a spring-cloud connection to cosmos-sql",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
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
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-table",
              description: "Create a spring-cloud connection to cosmos-table",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "eventhub",
              description: "Create a spring-cloud connection to eventhub",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
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
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "keyvault",
              description: "Create a spring-cloud connection to keyvault",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new keyvault when creating the spring-cloud connection",
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault",
                  description:
                    "Name of the keyvault. Required if '--target-id' is not specified",
                  args: { name: "vault" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql",
              description: "Create a spring-cloud connection to mysql",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
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
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
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
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
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
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql-flexible",
              description: "Create a spring-cloud connection to mysql-flexible",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
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
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
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
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres",
              description: "Create a spring-cloud connection to postgres",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
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
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new postgres when creating the spring-cloud connection",
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
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
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres-flexible",
              description:
                "Create a spring-cloud connection to postgres-flexible",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
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
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
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
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis",
              description: "Create a spring-cloud connection to redis",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
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
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
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
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
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
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis-enterprise",
              description:
                "Create a spring-cloud connection to redis-enterprise",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
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
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
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
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
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
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "servicebus",
              description: "Create a spring-cloud connection to servicebus",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
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
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "signalr",
              description: "Create a spring-cloud connection to signalr",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "none"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
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
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "sql",
              description: "Create a spring-cloud connection to sql",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
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
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
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
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-blob",
              description: "Create a spring-cloud connection to storage-blob",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new storage-blob when creating the spring-cloud connection",
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-file",
              description: "Create a spring-cloud connection to storage-file",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
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
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-queue",
              description: "Create a spring-cloud connection to storage-queue",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-table",
              description: "Create a spring-cloud connection to storage-table",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
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
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "webpubsub",
              description: "Create a spring-cloud connection to webpubsub",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
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
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
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
          name: "update",
          description: "Update a spring-cloud connection",
          subcommands: [
            {
              name: "appconfig",
              description: "Update a spring-cloud to appconfig connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "confluent-cloud",
              description:
                "Update a spring-cloud to confluent-cloud connection",
              options: [
                {
                  name: "--connection",
                  description: "Name of the connection",
                  args: { name: "connection" },
                  isRequired: true,
                },
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--source-id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--bootstrap-server",
                  description: "Kafka bootstrap server url",
                  args: { name: "bootstrap-server" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--source-id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--source-id' is not specified.None",
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
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--source-id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a spring-cloud. Required if ['--resource-group', '--service', '--app', '--deployment'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-cassandra",
              description:
                "Update a spring-cloud to cosmos-cassandra connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-gremlin",
              description: "Update a spring-cloud to cosmos-gremlin connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-mongo",
              description: "Update a spring-cloud to cosmos-mongo connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-sql",
              description: "Update a spring-cloud to cosmos-sql connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-table",
              description: "Update a spring-cloud to cosmos-table connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "eventhub",
              description: "Update a spring-cloud to eventhub connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "keyvault",
              description: "Update a spring-cloud to keyvault connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql",
              description: "Update a spring-cloud to mysql connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql-flexible",
              description: "Update a spring-cloud to mysql-flexible connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres",
              description: "Update a spring-cloud to postgres connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres-flexible",
              description:
                "Update a spring-cloud to postgres-flexible connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis",
              description: "Update a spring-cloud to redis connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis-enterprise",
              description:
                "Update a spring-cloud to redis-enterprise connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "servicebus",
              description: "Update a spring-cloud to servicebus connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "signalr",
              description: "Update a spring-cloud to signalr connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "none"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "sql",
              description: "Update a spring-cloud to sql connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-blob",
              description: "Update a spring-cloud to storage-blob connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-file",
              description: "Update a spring-cloud to storage-file connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-queue",
              description: "Update a spring-cloud to storage-queue connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
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
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-table",
              description: "Update a spring-cloud to storage-table connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "webpubsub",
              description: "Update a spring-cloud to webpubsub connection",
              options: [
                {
                  name: "--app",
                  description:
                    "Name of the spring-cloud app. Required if '--id' is not specified.None",
                  args: { name: "app" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the spring-cloud",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the spring-cloud connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--deployment",
                  description:
                    "Argument 'deployment' has been deprecated and will be removed in a future release. The deployment name of the app. Required if '--id' is not specified. Note: The default value of --deployment is deprecated and will be removed in a future release. Use --deployment default if you want stay in current behavior",
                  args: { name: "deployment" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--service', '--app', '--deployment', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the spring-cloud. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service",
                  description:
                    "Name of the spring-cloud service. Required if '--id' is not specified.None",
                  args: { name: "service" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Create an Azure Spring Cloud",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of Azure Spring Cloud",
          args: { name: "name" },
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
          name: ["--api-portal-instance-count", "--ap-instance"],
          description: "(Enterprise Tier Only) Number of API portal instances",
          args: { name: "api-portal-instance-count" },
        },
        {
          name: "--app-insights",
          description:
            "Name of the existing Application Insights in the same Resource Group. Or Resource ID of the existing Application Insights in a different Resource Group",
          args: { name: "app-insights" },
        },
        {
          name: "--app-insights-key",
          description:
            "Connection string (recommended) or Instrumentation key of the existing Application Insights",
          args: { name: "app-insights-key" },
        },
        {
          name: ["--app-network-resource-group", "--app-nrg"],
          description:
            "The resource group where all network resources for apps will be created in",
          args: { name: "app-network-resource-group" },
        },
        {
          name: "--app-subnet",
          description:
            'The name or ID of an existing subnet in "vnet" into which to deploy the Spring Cloud app. Required when deploying into a Virtual Network. Smaller subnet sizes are supported, please refer: https://aka.ms/azure-spring-cloud-smaller-subnet-vnet-docs',
          args: { name: "app-subnet" },
        },
        {
          name: "--build-pool-size",
          description:
            "(Enterprise Tier Only) Size of build agent pool. See aka.ms/azure-spring-cloud-build-service-docs for size info",
          args: {
            name: "build-pool-size",
            suggestions: ["S1", "S2", "S3", "S4", "S5"],
          },
        },
        {
          name: "--disable-app-insights",
          description:
            "Disable Application Insights, if not disabled and no existing Application Insights specified with --app-insights-key or --app-insights, will create a new Application Insights instance in the same resource group",
          args: {
            name: "disable-app-insights",
            suggestions: ["false", "true"],
          },
        },
        {
          name: ["--enable-application-configuration-service", "--enable-acs"],
          description:
            "(Enterprise Tier Only) Enable Application Configuration Service",
        },
        {
          name: "--enable-api-portal",
          description: "(Enterprise Tier Only) Enable API portal",
        },
        {
          name: "--enable-gateway",
          description: "(Enterprise Tier Only) Enable Spring Cloud Gateway",
        },
        {
          name: ["--enable-service-registry", "--enable-sr"],
          description: "(Enterprise Tier Only) Enable Service Registry",
        },
        {
          name: "--gateway-instance-count",
          description:
            "(Enterprise Tier Only) Number of Spring Cloud Gateway instances",
          args: { name: "gateway-instance-count" },
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
          name: "--reserved-cidr-range",
          description:
            "Comma-separated list of IP address ranges in CIDR format. The IP ranges are reserved to host underlying Azure Spring Cloud infrastructure, which should be 3 at least /16 unused IP ranges, must not overlap with any Subnet IP ranges",
          args: { name: "reserved-cidr-range" },
        },
        {
          name: "--sampling-rate",
          description:
            "Sampling Rate of application insights. Minimum is 0, maximum is 100",
          args: { name: "sampling-rate" },
        },
        {
          name: ["--service-runtime-network-resource-group", "--svc-nrg"],
          description:
            "The resource group where all network resources for Azure Spring Cloud service runtime will be created in",
          args: { name: "service-runtime-network-resource-group" },
        },
        {
          name: ["--service-runtime-subnet", "--svc-subnet"],
          description:
            'The name or ID of an existing subnet in "vnet" into which to deploy the Spring Cloud service runtime. Required when deploying into a Virtual Network',
          args: { name: "service-runtime-subnet" },
        },
        {
          name: "--sku",
          description: "Name of SKU. Enterprise is still in Preview",
          args: {
            name: "sku",
            suggestions: ["Basic", "Enterprise", "Standard"],
          },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--vnet",
          description:
            "The name or ID of an existing Virtual Network into which to deploy the Spring Cloud instance",
          args: { name: "vnet" },
        },
        {
          name: "--zone-redundant",
          description:
            "Create your Azure Spring Cloud service in an Azure availability zone or not, this could only be supported in several regions at the moment",
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an Azure Spring Cloud",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of Azure Spring Cloud",
          args: { name: "name" },
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "list",
      description:
        "List all Azure Spring Cloud in the given resource group, otherwise list the subscription's",
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
      description: "Show the details for an Azure Spring Cloud",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of Azure Spring Cloud",
          args: { name: "name" },
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
      name: "start",
      description: "Start an Azure Spring Cloud",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of Azure Spring Cloud",
          args: { name: "name" },
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "stop",
      description: "Stop an Azure Spring Cloud",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of Azure Spring Cloud",
          args: { name: "name" },
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "update",
      description: "Update an Azure Spring Cloud",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of Azure Spring Cloud",
          args: { name: "name" },
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
          name: "--build-pool-size",
          description:
            "(Enterprise Tier Only) Size of build agent pool. See aka.ms/azure-spring-cloud-build-service-docs for size info",
          args: {
            name: "build-pool-size",
            suggestions: ["S1", "S2", "S3", "S4", "S5"],
          },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--sku",
          description: "Name of SKU. Enterprise is still in Preview",
          args: {
            name: "sku",
            suggestions: ["Basic", "Enterprise", "Standard"],
          },
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
      name: "gateway",
      description:
        "(Enterprise Tier Only) Commands to manage gateway in Azure Spring Cloud",
      subcommands: [
        {
          name: "clear",
          description: "Clear all settings of gateway",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the settings, provisioning status and runtime status of gateway",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update an existing gateway properties",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--allow-credentials",
              description:
                "Whether user credentials are supported on cross-site requests",
              args: {
                name: "allow-credentials",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--allowed-headers",
              description:
                "Comma-separated list of allowed headers in cross-site requests. The special value * allows actual requests to send any header",
              args: { name: "allowed-headers" },
            },
            {
              name: "--allowed-methods",
              description:
                "Comma-separated list of allowed HTTP methods on cross-site requests. The special value * allows all methods",
              args: { name: "allowed-methods" },
            },
            {
              name: "--allowed-origins",
              description:
                "Comma-separated list of allowed origins to make cross-site requests. The special value * allows all domains",
              args: { name: "allowed-origins" },
            },
            {
              name: "--api-description",
              description:
                "Detailed description of the APIs available on the Gateway instance",
              args: { name: "api-description" },
            },
            {
              name: "--api-doc-location",
              description:
                "Location of additional documentation for the APIs available on the Gateway instance",
              args: { name: "api-doc-location" },
            },
            {
              name: "--api-title",
              description:
                "Title describing the context of the APIs available on the Gateway instance",
              args: { name: "api-title" },
            },
            {
              name: "--api-version",
              description: "Version of APIs available on this Gateway instance",
              args: { name: "api-version" },
            },
            {
              name: "--assign-endpoint",
              description: "If true, assign endpoint URL for direct access",
              args: { name: "assign-endpoint", suggestions: ["false", "true"] },
            },
            {
              name: "--client-id",
              description: "The public identifier for the application",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description:
                "The secret known only to the application and the authorization server",
              args: { name: "client-secret" },
            },
            {
              name: "--cpu",
              description:
                "CPU resource quantity. Should be 500m or number of CPU cores",
              args: { name: "cpu" },
            },
            {
              name: "--exposed-headers",
              description:
                "Comma-separated list of HTTP response headers to expose for cross-site requests",
              args: { name: "exposed-headers" },
            },
            {
              name: "--https-only",
              description: "If true, access endpoint via https",
              args: { name: "https-only", suggestions: ["false", "true"] },
            },
            {
              name: "--instance-count",
              description: "Number of instance",
              args: { name: "instance-count" },
            },
            {
              name: "--issuer-uri",
              description: "The URI of Issuer Identifier",
              args: { name: "issuer-uri" },
            },
            {
              name: "--max-age",
              description:
                "How long, in seconds, the response from a pre-flight request can be cached by clients",
              args: { name: "max-age" },
            },
            {
              name: "--memory",
              description:
                "Memory resource quantity. Should be 512Mi or #Gi, e.g., 1Gi, 3Gi",
              args: { name: "memory" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--scope",
              description:
                "Comma-separated list of the specific actions applications can be allowed to do on a user's behalf",
              args: { name: "scope" },
            },
            {
              name: "--server-url",
              description:
                "Base URL that API consumers will use to access APIs on the Gateway instance",
              args: { name: "server-url" },
            },
          ],
        },
        {
          name: "custom-domain",
          description: "Commands to manage custom domains for gateway",
          subcommands: [
            {
              name: "bind",
              description: "Bind a custom domain with the gateway",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of custom domain",
                  args: { name: "domain-name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--certificate",
                  description: "Certificate name in Azure Spring Cloud",
                  args: { name: "certificate" },
                },
              ],
            },
            {
              name: "list",
              description: "List all custom domains of the gateway",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show details of a custom domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of custom domain",
                  args: { name: "domain-name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "unbind",
              description: "Unbind a custom-domain of the gateway",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of custom domain",
                  args: { name: "domain-name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update a custom domain of the gateway",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of custom domain",
                  args: { name: "domain-name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--certificate",
                  description: "Certificate name in Azure Spring Cloud",
                  args: { name: "certificate" },
                },
              ],
            },
          ],
        },
        {
          name: "route-config",
          description:
            "Commands to manage gateway route configs in Azure Spring Cloud",
          subcommands: [
            {
              name: "create",
              description:
                "Create a gateway route config with routing rules of Json array format",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of route config",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--app-name",
                  description:
                    "The Azure Spring Cloud app name to configure the route",
                  args: { name: "app-name" },
                },
                {
                  name: "--routes-file",
                  description: "The file path of JSON array of API routes",
                  args: { name: "routes-file" },
                },
                {
                  name: "--routes-json",
                  description: "The JSON array of API routes",
                  args: { name: "routes-json" },
                },
              ],
            },
            {
              name: "list",
              description: "List all existing gateway route configs",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description: "Delete an existing gateway route config",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of route config",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get an existing gateway route config",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of route config",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an existing gateway route config with routing rules of Json array format",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of route config",
                  args: { name: "name" },
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
                  name: ["--service", "-s"],
                  description:
                    "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
                  args: { name: "service" },
                  isRequired: true,
                },
                {
                  name: "--app-name",
                  description:
                    "The Azure Spring Cloud app name to configure the route",
                  args: { name: "app-name" },
                },
                {
                  name: "--routes-file",
                  description: "The file path of JSON array of API routes",
                  args: { name: "routes-file" },
                },
                {
                  name: "--routes-json",
                  description: "The JSON array of API routes",
                  args: { name: "routes-json" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "service-registry",
      description:
        "(Enterprise Tier Only) Commands to manage Service Registry in Azure Spring Cloud",
      subcommands: [
        {
          name: "bind",
          description: "Bind an app to Service Registry",
          options: [
            {
              name: "--app",
              description: "Name of app",
              args: { name: "app" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the provisioning status and runtime status of Service Registry",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "unbind",
          description: "Unbind an app from Service Registry",
          options: [
            {
              name: "--app",
              description: "Name of app",
              args: { name: "app" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "storage",
      description: "Commands to manage Storages in Azure Spring Cloud",
      subcommands: [
        {
          name: "add",
          description: "Create a new storage in the Azure Spring Cloud",
          options: [
            {
              name: "--account-key",
              description: "The account key of the storage account",
              args: { name: "account-key" },
              isRequired: true,
            },
            {
              name: "--account-name",
              description: "The name of the storage account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of storage",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--storage-type",
              description: "The type of the torage. e.g. StorageAccount",
              args: { name: "storage-type" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List all existing storages in the Azure Spring Cloud",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-persistent-storage",
          description:
            "List all the persistent storages related to an existing storage in the Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of storage",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "remove",
          description: "Remove an existing storage in the Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of storage",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get an existing storage in the Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of storage",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update an existing storage in the Azure Spring Cloud",
          options: [
            {
              name: "--account-key",
              description: "The account key of the storage account",
              args: { name: "account-key" },
              isRequired: true,
            },
            {
              name: "--account-name",
              description: "The name of the storage account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of storage",
              args: { name: "name" },
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
              name: ["--service", "-s"],
              description:
                "Name of Azure Spring Cloud, you can configure the default service using az configure --defaults spring-cloud=",
              args: { name: "service" },
              isRequired: true,
            },
            {
              name: "--storage-type",
              description: "The type of the torage. e.g. StorageAccount",
              args: { name: "storage-type" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "test-endpoint",
      description: "Commands to manage test endpoint in Azure Spring Cloud",
      subcommands: [
        {
          name: "disable",
          description: "Disable test endpoint of the Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of Azure Spring Cloud",
              args: { name: "name" },
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
          name: "enable",
          description: "Enable test endpoint of the Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of Azure Spring Cloud",
              args: { name: "name" },
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
          description: "List test endpoint keys of the Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of Azure Spring Cloud",
              args: { name: "name" },
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
              name: "--app",
              description: "Name of app",
              args: { name: "app" },
            },
            {
              name: ["--deployment", "-d"],
              description:
                "Name of an existing deployment of the app. Default to the production deployment if not specified",
              args: { name: "deployment" },
            },
          ],
        },
        {
          name: "renew-key",
          description:
            "Regenerate a test-endpoint key for the Azure Spring Cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of Azure Spring Cloud",
              args: { name: "name" },
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
              name: "--type",
              description: "Type of test-endpoint key",
              args: { name: "type", suggestions: ["Primary", "Secondary"] },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
