const completion: Fig.Spec = {
  name: "sf",
  description: "Manage and administer Azure Service Fabric clusters",
  subcommands: [
    {
      name: "application",
      description:
        "Manage applications running on an Azure Service Fabric cluster. Only support ARM deployed applications",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new application on an Azure Service Fabric cluster",
          options: [
            {
              name: ["--application-name", "--name"],
              description: "Specify the application name",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--application-type-name", "--type-name"],
              description: "Specify the application type name",
              args: { name: "application-type-name" },
              isRequired: true,
            },
            {
              name: ["--application-type-version", "--version"],
              description: "Specify the application type version",
              args: { name: "application-type-version" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--application-parameters", "--parameters"],
              description:
                "Specify the application parameters as key/value pairs. These parameters must exist in the application manifest. for example: --application-parameters param1=value1 param2=value2",
              args: { name: "application-parameters" },
            },
            {
              name: ["--maximum-nodes", "--max-nodes"],
              description:
                "Specify the maximum number of nodes on which to place an application. The value of this parameter must be a non-negative integer. The default value is 0, which indicates the application can be placed on any number of nodes in the cluster",
              args: { name: "maximum-nodes" },
            },
            {
              name: ["--minimum-nodes", "--min-nodes"],
              description:
                "Specify the minimum number of nodes where Service Fabric will reserve capacity for this application, this does not mean that the application is guaranteed to have replicas on all those nodes. The value of this parameter must be a non-negative integer. Default value for this is zero, which means no capacity is reserved for the application",
              args: { name: "minimum-nodes" },
            },
            {
              name: "--package-url",
              description:
                "Specify the url of the application package sfpkg file",
              args: { name: "package-url" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an application",
          options: [
            {
              name: ["--application-name", "--name"],
              description: "Specify the application name",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List applications of a given cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the properties of an application on an Azure Service Fabric cluster",
          options: [
            {
              name: ["--application-name", "--name"],
              description: "Specify the application name",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update a Azure Service Fabric application. This allows updating the application parameters and/or upgrade the application type version which will trigger an application upgrade",
          options: [
            {
              name: ["--application-name", "--name"],
              description: "Specify the application name",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--application-parameters", "--parameters"],
              description:
                "Specify the application parameters as key/value pairs. These parameters must exist in the application manifest. for example: --application-parameters param1=value1 param2=value2",
              args: { name: "application-parameters" },
            },
            {
              name: ["--application-type-version", "--version"],
              description: "Specify the application type version",
              args: { name: "application-type-version" },
            },
            {
              name: ["--consider-warning-as-error", "--warning-as-error"],
              description:
                "Indicates whether to treat a warning health event as an error event during health evaluation",
            },
            {
              name: "--failure-action",
              description:
                "Specify the action to take if the monitored upgrade fails. The acceptable values for this parameter are Rollback or Manual",
              args: {
                name: "failure-action",
                suggestions: ["Manual", "Rollback"],
              },
            },
            {
              name: "--force-restart",
              description:
                "Indicates that the service host restarts even if the upgrade is a configuration-only change",
            },
            {
              name: ["--health-check-retry-timeout", "--hc-retry-timeout"],
              description:
                "Specify the duration, in seconds, after which Service Fabric retries the health check if the previous health check fails",
              args: { name: "health-check-retry-timeout" },
            },
            {
              name: ["--health-check-stable-duration", "--hc-stable-duration"],
              description:
                "Specify the duration, in seconds, that Service Fabric waits in order to verify that the application is stable before moving to the next upgrade domain or completing the upgrade. This wait duration prevents undetected changes of health right after the health check is performed",
              args: { name: "health-check-stable-duration" },
            },
            {
              name: ["--health-check-wait-duration", "--hc-wait-duration"],
              description:
                "Specify the duration, in seconds, that Service Fabric waits before it performs the initial health check after it finishes the upgrade on the upgrade domain",
              args: { name: "health-check-wait-duration" },
            },
            {
              name: ["--maximum-nodes", "--max-nodes"],
              description:
                "Specify the maximum number of nodes on which to place an application. The value of this parameter must be a non-negative integer. The default value is 0, which indicates the application can be placed on any number of nodes in the cluster",
              args: { name: "maximum-nodes" },
            },
            {
              name: ["--max-porcent-unhealthy-apps", "--max-unhealthy-apps"],
              description:
                "Specify the maximum percentage of the application instances deployed on the nodes in the cluster that have a health state of error before the application health state for the cluster is error. Allowed values are form 0 to 100",
              args: { name: "max-porcent-unhealthy-apps" },
            },
            {
              name: [
                "--max-porcent-unhealthy-partitions",
                "--max-unhealthy-parts",
              ],
              description:
                "Specify the maximum percent of unhelthy partitions per service allowed by the health policy for the default service type to use for the monitored upgrade. Allowed values are form 0 to 100",
              args: { name: "max-porcent-unhealthy-partitions" },
            },
            {
              name: [
                "--max-porcent-unhealthy-replicas",
                "--max-unhealthy-reps",
              ],
              description:
                "Specify the maximum percent of unhelthy replicas per service allowed by the health policy for the default service type to use for the monitored upgrade. Allowed values are form 0 to 100",
              args: { name: "max-porcent-unhealthy-replicas" },
            },
            {
              name: [
                "--max-porcent-unhealthy-services",
                "--max-unhealthy-servs",
              ],
              description:
                "Specify the maximum percent of unhelthy services allowed by the health policy for the default service type to use for the monitored upgrade. Allowed values are form 0 to 100",
              args: { name: "max-porcent-unhealthy-services" },
            },
            {
              name: ["--minimum-nodes", "--min-nodes"],
              description:
                "Specify the minimum number of nodes where Service Fabric will reserve capacity for this application, this does not mean that the application is guaranteed to have replicas on all those nodes. The value of this parameter must be a non-negative integer. Default value for this is zero, which means no capacity is reserved for the application",
              args: { name: "minimum-nodes" },
            },
            {
              name: [
                "--upgrade-replica-set-check-timeout",
                "--replica-check-timeout",
                "--rep-check-timeout",
              ],
              description:
                "Specify the maximum time, in seconds, that Service Fabric waits for a service to reconfigure into a safe state, if not already in a safe state, before Service Fabric proceeds with the upgrade",
              args: { name: "upgrade-replica-set-check-timeout" },
            },
            {
              name: [
                "--service-type-health-policy-map",
                "--service-type-policy",
              ],
              description:
                'Specify the map of the health policy to use for different service types as a hash table in the following format: {"ServiceTypeName" : "MaxPercentUnhealthyPartitionsPerService,MaxPercentUnhealthyReplicasPerPartition,MaxPercentUnhealthyServices"}. For example: @{ "ServiceTypeName01" = "5,10,5"; "ServiceTypeName02" = "5,5,5" }',
              args: { name: "service-type-health-policy-map" },
            },
            {
              name: ["--upgrade-domain-timeout", "--ud-timeout"],
              description:
                "Specify the maximum time, in seconds, that Service Fabric takes to upgrade a single upgrade domain. After this period, the upgrade fails",
              args: { name: "upgrade-domain-timeout" },
            },
            {
              name: "--upgrade-timeout",
              description:
                "Specify the maximum time, in seconds, that Service Fabric takes for the entire upgrade. After this period, the upgrade fails",
              args: { name: "upgrade-timeout" },
            },
          ],
        },
        {
          name: "certificate",
          description: "Manage the certificate of an application",
          subcommands: [
            {
              name: "add",
              description:
                "Add a new certificate to the Virtual Machine Scale Sets that make up the cluster to be used by hosted applications",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--certificate-output-folder", "--cert-out-folder"],
                  description:
                    "The folder of the new certificate file to be created",
                  args: { name: "certificate-output-folder" },
                },
                {
                  name: ["--certificate-subject-name", "--cert-subject-name"],
                  description:
                    "The subject name of the certificate to be created",
                  args: { name: "certificate-subject-name" },
                },
                {
                  name: "--certificate-file",
                  description:
                    "The existing certificate file path for the primary cluster certificate",
                  args: { name: "certificate-file" },
                },
                {
                  name: "--certificate-password",
                  description: "The password of the certificate file",
                  args: { name: "certificate-password" },
                },
                {
                  name: "--secret-identifier",
                  description: "The existing Azure key vault secret URL",
                  args: { name: "secret-identifier" },
                },
                {
                  name: "--vault-name",
                  description:
                    "Azure key vault name, it not given it will be the cluster resource group name",
                  args: { name: "vault-name" },
                },
                {
                  name: "--vault-rg",
                  description:
                    "Key vault resource group name, if not given it will be cluster resource group name",
                  args: { name: "vault-rg" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "application-type",
      description:
        "Manage application types on an Azure Service Fabric cluster",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new application type on an Azure Service Fabric cluster",
          options: [
            {
              name: ["--application-type-name", "--name"],
              description: "Specify the application type name",
              args: { name: "application-type-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an application type",
          options: [
            {
              name: ["--application-type-name", "--name"],
              description: "Specify the application type name",
              args: { name: "application-type-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List application types of a given cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the properties of an application type on an Azure Service Fabric cluster",
          options: [
            {
              name: ["--application-type-name", "--name"],
              description: "Specify the application type name",
              args: { name: "application-type-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "version",
          description:
            "Manage application type versions on an Azure Service Fabric cluster. Only support ARM deployed application type versions",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new application type on an Azure Service Fabric cluster",
              options: [
                {
                  name: ["--application-type-name", "--name"],
                  description: "Specify the application type name",
                  args: { name: "application-type-name" },
                  isRequired: true,
                },
                {
                  name: ["--application-type-version", "--version"],
                  description: "Specify the application type version",
                  args: { name: "application-type-version" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--package-url",
                  description:
                    "Specify the url of the application package sfpkg file",
                  args: { name: "package-url" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an application type version",
              options: [
                {
                  name: ["--application-type-name", "--name"],
                  description: "Specify the application type name",
                  args: { name: "application-type-name" },
                  isRequired: true,
                },
                {
                  name: ["--application-type-version", "--version"],
                  description: "Specify the application type version",
                  args: { name: "application-type-version" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description: "List version of a given application type",
              options: [
                {
                  name: ["--application-type-name", "--name"],
                  description: "Specify the application type name",
                  args: { name: "application-type-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the properties of an application type version on an Azure Service Fabric cluster",
              options: [
                {
                  name: ["--application-type-name", "--name"],
                  description: "Specify the application type name",
                  args: { name: "application-type-name" },
                  isRequired: true,
                },
                {
                  name: ["--application-type-version", "--version"],
                  description: "Specify the application type version",
                  args: { name: "application-type-version" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "cluster",
      description: "Manage an Azure Service Fabric cluster",
      subcommands: [
        {
          name: "create",
          description: "Create a new Azure Service Fabric cluster",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--certificate-output-folder", "--cert-out-folder"],
              description:
                "The folder of the new certificate file to be created",
              args: { name: "certificate-output-folder" },
            },
            {
              name: ["--certificate-subject-name", "--cert-subject-name"],
              description: "The subject name of the certificate to be created",
              args: { name: "certificate-subject-name" },
            },
            {
              name: "--certificate-file",
              description:
                "The existing certificate file path for the primary cluster certificate",
              args: { name: "certificate-file" },
            },
            {
              name: "--certificate-password",
              description: "The password of the certificate file",
              args: { name: "certificate-password" },
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
            },
            {
              name: ["--cluster-size", "-s"],
              description:
                "The number of nodes in the cluster. Default are 5 nodes",
              args: { name: "cluster-size" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--vm-os", "--os"],
              description:
                "The Operating System of the VMs that make up the cluster",
              args: {
                name: "vm-os",
                suggestions: [
                  "UbuntuServer1604",
                  "WindowsServer1709",
                  "WindowsServer1709withContainers",
                  "WindowsServer1803withContainers",
                  "WindowsServer1809withContainers",
                  "WindowsServer2012R2Datacenter",
                  "WindowsServer2016Datacenter",
                  "WindowsServer2016DatacenterwithContainers",
                  "WindowsServer2019Datacenter",
                  "WindowsServer2019DatacenterwithContainers",
                ],
              },
            },
            {
              name: "--parameter-file",
              description: "The path to the template parameter file",
              args: { name: "parameter-file" },
            },
            {
              name: "--secret-identifier",
              description: "The existing Azure key vault secret URL",
              args: { name: "secret-identifier" },
            },
            {
              name: "--template-file",
              description: "The path to the template file",
              args: { name: "template-file" },
            },
            {
              name: "--vault-name",
              description:
                "Azure key vault name, it not given it will be the cluster resource group name",
              args: { name: "vault-name" },
            },
            {
              name: "--vault-rg",
              description:
                "Key vault resource group name, if not given it will be cluster resource group name",
              args: { name: "vault-rg" },
            },
            {
              name: "--vm-password",
              description: "The password of the Vm",
              args: { name: "vm-password" },
            },
            {
              name: "--vm-sku",
              description: "VM Sku",
              args: { name: "vm-sku" },
            },
            {
              name: "--vm-user-name",
              description:
                "The user name for logging to Vm. Default will be adminuser",
              args: { name: "vm-user-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List cluster resources",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets a Service Fabric cluster resource",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "client-certificate",
          description: "Manage the client certificate of a cluster",
          subcommands: [
            {
              name: "add",
              description:
                "Add a common name or certificate thumbprint to the cluster for client authentication",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--admin-client-thumbprints", "--admin-client-tps"],
                  description:
                    "Client certificate thumbprint that only has admin permission",
                  args: { name: "admin-client-thumbprints" },
                },
                {
                  name: ["--certificate-common-name", "--cert-common-name"],
                  description: "Client certificate common name",
                  args: { name: "certificate-common-name" },
                },
                {
                  name: ["--certificate-issuer-thumbprint", "--cert-issuer-tp"],
                  description: "Client certificate issuer thumbprint",
                  args: { name: "certificate-issuer-thumbprint" },
                },
                {
                  name: [
                    "--client-certificate-common-names",
                    "--client-cert-cn",
                  ],
                  description:
                    'JSON encoded parameters configuration. Use @{file} to load from a file. For example: [{"isAdmin":true, "certificateCommonName": "test.com", "certificateIssuerThumbprint": "22B4AE296B504E512DF880A77A2CAE20200FF922"}]',
                  args: { name: "client-certificate-common-names" },
                },
                {
                  name: "--is-admin",
                  description: "Client authentication type",
                },
                {
                  name: [
                    "--readonly-client-thumbprints",
                    "--readonly-client-tps",
                  ],
                  description:
                    "Space-separated list of client certificate thumbprint that has read only permission",
                  args: { name: "readonly-client-thumbprints" },
                },
                {
                  name: "--thumbprint",
                  description: "Client certificate thumbprint",
                  args: { name: "thumbprint" },
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove client certificates or subject names used for authentication",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--certificate-common-name", "--cert-common-name"],
                  description: "Client certificate common name",
                  args: { name: "certificate-common-name" },
                },
                {
                  name: ["--certificate-issuer-thumbprint", "--cert-issuer-tp"],
                  description: "Client certificate issuer thumbprint",
                  args: { name: "certificate-issuer-thumbprint" },
                },
                {
                  name: [
                    "--client-certificate-common-names",
                    "--client-cert-cn",
                  ],
                  description:
                    'JSON encoded parameters configuration. Use @{file} to load from a file. For example: [{"certificateCommonName": "test.com","certificateIssuerThumbprint": "22B4AE296B504E512DF880A77A2CAE20200FF922"}]',
                  args: { name: "client-certificate-common-names" },
                },
                {
                  name: "--thumbprints",
                  description:
                    "A single or Space-separated list of client certificate thumbprint(s) to be remove",
                  args: { name: "thumbprints" },
                },
              ],
            },
          ],
        },
        {
          name: "durability",
          description: "Manage the durability of a cluster",
          subcommands: [
            {
              name: "update",
              description:
                "Update the durability tier or VM SKU of a node type in the cluster",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--durability-level",
                  description: "Durability level",
                  args: {
                    name: "durability-level",
                    suggestions: ["Bronze", "Gold", "Silver"],
                  },
                  isRequired: true,
                },
                {
                  name: "--node-type",
                  description: "The Node type name",
                  args: { name: "node-type" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "node",
          description: "Manage the node instance of a cluster",
          subcommands: [
            {
              name: "add",
              description: "Add nodes to a node type in a cluster",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--node-type",
                  description: "The Node type name",
                  args: { name: "node-type" },
                  isRequired: true,
                },
                {
                  name: ["--number-of-nodes-to-add", "--nodes-to-add"],
                  description: "Number of nodes to add",
                  args: { name: "number-of-nodes-to-add" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description: "Remove nodes from a node type in a cluster",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--node-type",
                  description: "The Node type name",
                  args: { name: "node-type" },
                  isRequired: true,
                },
                {
                  name: ["--number-of-nodes-to-remove", "--nodes-to-remove"],
                  description: "Number of nodes to remove",
                  args: { name: "number-of-nodes-to-remove" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "node-type",
          description: "Manage the node-type of a cluster",
          subcommands: [
            {
              name: "add",
              description: "Add a new node type to a cluster",
              options: [
                {
                  name: "--capacity",
                  description:
                    "The capacity tag applied to nodes in the node type. The cluster resource manager uses these tags to understand how much capacity a node has",
                  args: { name: "capacity" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--node-type",
                  description: "The Node type name",
                  args: { name: "node-type" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--vm-password",
                  description: "The password of the Vm",
                  args: { name: "vm-password" },
                  isRequired: true,
                },
                {
                  name: "--vm-user-name",
                  description:
                    "The user name for logging to Vm. Default will be adminuser",
                  args: { name: "vm-user-name" },
                  isRequired: true,
                },
                {
                  name: "--durability-level",
                  description: "Durability level",
                  args: {
                    name: "durability-level",
                    suggestions: ["Bronze", "Gold", "Silver"],
                  },
                },
                {
                  name: "--vm-sku",
                  description: "VM Sku",
                  args: { name: "vm-sku" },
                },
                {
                  name: "--vm-tier",
                  description: "VM tier",
                  args: { name: "vm-tier" },
                },
              ],
            },
          ],
        },
        {
          name: "reliability",
          description: "Manage the reliability of a cluster",
          subcommands: [
            {
              name: "update",
              description:
                "Update the reliability tier for the primary node in a cluster",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--reliability-level",
                  description: "Durability level",
                  args: {
                    name: "reliability-level",
                    suggestions: ["Bronze", "Gold", "Platinum", "Silver"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--auto-add-node",
                  description:
                    "Add node count automatically when changing reliability",
                },
              ],
            },
          ],
        },
        {
          name: "setting",
          description: "Manage a cluster's settings",
          subcommands: [
            {
              name: "remove",
              description: "Remove settings from a cluster",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--parameter",
                  description: "Parameter name",
                  args: { name: "parameter" },
                },
                {
                  name: "--section",
                  description: "Section name",
                  args: { name: "section" },
                },
                {
                  name: [
                    "--settings-section-description",
                    "--settings-section",
                  ],
                  description:
                    'JSON encoded parameters configuration. Use @{file} to load from a file. For example: [{"section": "NamingService","parameter": "MaxOperationTimeout"}]',
                  args: { name: "settings-section-description" },
                },
              ],
            },
            {
              name: "set",
              description: "Update the settings of a cluster",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--parameter",
                  description: "Parameter name",
                  args: { name: "parameter" },
                },
                {
                  name: "--section",
                  description: "Section name",
                  args: { name: "section" },
                },
                {
                  name: [
                    "--settings-section-description",
                    "--settings-section",
                  ],
                  description:
                    'JSON encoded parameters configuration. Use @{file} to load from a file. For example: [{"section": "NamingService","parameter": "MaxOperationTimeout","value": 1000},{"section": "MaxFileOperationTimeout","parameter": "Max2","value": 1000]',
                  args: { name: "settings-section-description" },
                },
                {
                  name: "--value",
                  description: "Specify the value",
                  args: { name: "value" },
                },
              ],
            },
          ],
        },
        {
          name: "upgrade-type",
          description: "Manage the upgrade type of a cluster",
          subcommands: [
            {
              name: "set",
              description: "Change the  upgrade type for a cluster",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--upgrade-mode",
                  description: "Cluster upgrade mode",
                  args: {
                    name: "upgrade-mode",
                    suggestions: ["automatic", "manual"],
                  },
                  isRequired: true,
                },
                {
                  name: "--version",
                  description: "Cluster code version",
                  args: { name: "version" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "managed-application",
      description:
        "Manage applications running on an Azure Service Fabric managed cluster. Only support ARM deployed applications",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new managed application on an Azure Service Fabric managed cluster",
          options: [
            {
              name: ["--application-name", "--name"],
              description: "Specify the application name",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--application-type-name", "--type-name"],
              description: "Specify the application type name",
              args: { name: "application-type-name" },
              isRequired: true,
            },
            {
              name: ["--application-type-version", "--version"],
              description: "Specify the application type version",
              args: { name: "application-type-version" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--application-parameters", "--parameters"],
              description:
                "Specify the application parameters as key/value pairs. These parameters must exist in the application manifest. for example: --application-parameters param1=value1 param2=value2",
              args: { name: "application-parameters" },
            },
            {
              name: "--package-url",
              description:
                "Specify the url of the application package sfpkg file",
              args: { name: "package-url" },
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
          name: "delete",
          description: "Delete a managed application",
          options: [
            {
              name: ["--application-name", "--name"],
              description: "Specify the application name",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List managed applications of a given managed cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the properties of a managed application on an Azure Service Fabric managed cluster",
          options: [
            {
              name: ["--application-name", "--name"],
              description: "Specify the application name",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a Azure Service Fabric managed application",
          options: [
            {
              name: ["--application-name", "--name"],
              description: "Specify the application name",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--application-parameters", "--parameters"],
              description:
                "Specify the application parameters as key/value pairs. These parameters must exist in the application manifest. for example: --application-parameters param1=value1 param2=value2",
              args: { name: "application-parameters" },
            },
            {
              name: ["--application-type-version", "--version"],
              description: "Specify the application type version",
              args: { name: "application-type-version" },
            },
            {
              name: [
                "--instance-close-delay-duration",
                "--instance-close-duration",
                "--close-duration",
              ],
              description:
                "Specify the duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade, only for those instances which have a non-zero delay duration configured in the service description",
              args: { name: "instance-close-delay-duration" },
            },
            {
              name: ["--consider-warning-as-error", "--warning-as-error"],
              description:
                "Indicates whether to treat a warning health event as an error event during health evaluation",
            },
            {
              name: "--failure-action",
              description:
                "Specify the action to take if the monitored upgrade fails. The acceptable values for this parameter are Rollback or Manual",
              args: {
                name: "failure-action",
                suggestions: ["Manual", "Rollback"],
              },
            },
            {
              name: "--force-restart",
              description:
                "Indicates that the service host restarts even if the upgrade is a configuration-only change",
            },
            {
              name: ["--health-check-retry-timeout", "--hc-retry-timeout"],
              description:
                "Specify the duration, in seconds, after which Service Fabric retries the health check if the previous health check fails",
              args: { name: "health-check-retry-timeout" },
            },
            {
              name: ["--health-check-stable-duration", "--hc-stable-duration"],
              description:
                "Specify the duration, in seconds, that Service Fabric waits in order to verify that the application is stable before moving to the next upgrade domain or completing the upgrade. This wait duration prevents undetected changes of health right after the health check is performed",
              args: { name: "health-check-stable-duration" },
            },
            {
              name: ["--health-check-wait-duration", "--hc-wait-duration"],
              description:
                "Specify the duration, in seconds, that Service Fabric waits before it performs the initial health check after it finishes the upgrade on the upgrade domain",
              args: { name: "health-check-wait-duration" },
            },
            {
              name: [
                "--max-percent-unhealthy-deployed-applications",
                "--max-percent-unhealthy-apps",
                "--max-unhealthy-apps",
              ],
              description:
                "Specify the maximum percentage of the application instances deployed on the nodes in the cluster that have a health state of error before the application health state for the cluster is error. Allowed values are form 0 to 100",
              args: { name: "max-percent-unhealthy-deployed-applications" },
            },
            {
              name: [
                "--max-percent-unhealthy-partitions",
                "--max-unhealthy-parts",
              ],
              description:
                "Specify the maximum percent of unhelthy partitions per service allowed by the health policy for the default service type to use for the monitored upgrade. Allowed values are from 0 to 100",
              args: { name: "max-percent-unhealthy-partitions" },
            },
            {
              name: [
                "--max-percent-unhealthy-replicas",
                "--max-unhealthy-reps",
              ],
              description:
                "Specify the maximum percent of unhelthy replicas per service allowed by the health policy for the default service type to use for the monitored upgrade. Allowed values are from 0 to 100",
              args: { name: "max-percent-unhealthy-replicas" },
            },
            {
              name: [
                "--max-percent-unhealthy-services",
                "--max-unhealthy-servs",
              ],
              description:
                "Specify the maximum percent of unhelthy services allowed by the health policy for the default service type to use for the monitored upgrade. Allowed values are from 0 to 100",
              args: { name: "max-percent-unhealthy-services" },
            },
            {
              name: "--recreate-application",
              description:
                "Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed",
            },
            {
              name: [
                "--upgrade-replica-set-check-timeout",
                "--replica-check-timeout",
                "--rep-check-timeout",
              ],
              description:
                "Specify the maximum time, in seconds, that Service Fabric waits for a service to reconfigure into a safe state, if not already in a safe state, before Service Fabric proceeds with the upgrade",
              args: { name: "upgrade-replica-set-check-timeout" },
            },
            {
              name: [
                "--service-type-health-policy-map",
                "--service-type-policy",
              ],
              description:
                'Specify the map of the health policy to use for different service types as key/value pairs in the following format: "ServiceTypeName"="MaxPercentUnhealthyPartitionsPerService,MaxPercentUnhealthyReplicasPerPartition,MaxPercentUnhealthyServices". for example: --service-type-health-policy-map "ServiceTypeName01"="5,10,5" "ServiceTypeName02"="5,5,5"',
              args: { name: "service-type-health-policy-map" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--upgrade-domain-timeout", "--ud-timeout"],
              description:
                "Specify the maximum time, in seconds, that Service Fabric takes to upgrade a single upgrade domain. After this period, the upgrade fails",
              args: { name: "upgrade-domain-timeout" },
            },
            {
              name: "--upgrade-mode",
              description:
                "Specify the mode used to monitor health during a rolling upgrade. The values are Monitored, and UnmonitoredAuto",
              args: {
                name: "upgrade-mode",
                suggestions: ["Monitored", "UnmonitoredAuto"],
              },
            },
            {
              name: "--upgrade-timeout",
              description:
                "Specify the maximum time, in seconds, that Service Fabric takes for the entire upgrade. After this period, the upgrade fails",
              args: { name: "upgrade-timeout" },
            },
          ],
        },
      ],
    },
    {
      name: "managed-application-type",
      description:
        "Manage application types on an Azure Service Fabric cluster",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new managed application type on an Azure Service Fabric managed cluster",
          options: [
            {
              name: ["--application-type-name", "--name"],
              description: "Specify the application type name",
              args: { name: "application-type-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
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
          name: "delete",
          description: "Delete a managed application type",
          options: [
            {
              name: ["--application-type-name", "--name"],
              description: "Specify the application type name",
              args: { name: "application-type-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description:
            "List managed application types of a given managed cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the properties of a managed application type on an Azure Service Fabric managed cluster",
          options: [
            {
              name: ["--application-type-name", "--name"],
              description: "Specify the application type name",
              args: { name: "application-type-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update an managed application type",
          options: [
            {
              name: ["--application-type-name", "--name"],
              description: "Specify the application type name",
              args: { name: "application-type-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
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
          name: "version",
          description:
            "Manage application type versions on an Azure Service Fabric managed cluster. Only support ARM deployed application type versions",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new managed application type on an Azure Service Fabric managed cluster",
              options: [
                {
                  name: ["--application-type-name", "--name"],
                  description: "Specify the application type name",
                  args: { name: "application-type-name" },
                  isRequired: true,
                },
                {
                  name: ["--application-type-version", "--version"],
                  description: "Specify the application type version",
                  args: { name: "application-type-version" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--package-url",
                  description:
                    "Specify the url of the application package sfpkg file",
                  args: { name: "package-url" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
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
              name: "delete",
              description: "Delete a managed application type version",
              options: [
                {
                  name: ["--application-type-name", "--name"],
                  description: "Specify the application type name",
                  args: { name: "application-type-name" },
                  isRequired: true,
                },
                {
                  name: ["--application-type-version", "--version"],
                  description: "Specify the application type version",
                  args: { name: "application-type-version" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description: "List versions of a given managed application type",
              options: [
                {
                  name: ["--application-type-name", "--name"],
                  description: "Specify the application type name",
                  args: { name: "application-type-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the properties of a managed application type version on an Azure Service Fabric managed cluster",
              options: [
                {
                  name: ["--application-type-name", "--name"],
                  description: "Specify the application type name",
                  args: { name: "application-type-name" },
                  isRequired: true,
                },
                {
                  name: ["--application-type-version", "--version"],
                  description: "Specify the application type version",
                  args: { name: "application-type-version" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update a managed application type version",
              options: [
                {
                  name: ["--application-type-name", "--name"],
                  description: "Specify the application type name",
                  args: { name: "application-type-name" },
                  isRequired: true,
                },
                {
                  name: ["--application-type-version", "--version"],
                  description: "Specify the application type version",
                  args: { name: "application-type-version" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--package-url",
                  description:
                    "Specify the url of the application package sfpkg file",
                  args: { name: "package-url" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "managed-cluster",
      description: "Manage an Azure Service Fabric managed cluster",
      subcommands: [
        {
          name: "create",
          description: "Delete a managed cluster",
          options: [
            {
              name: "--admin-password",
              description: "Admin password used for the virtual machines",
              args: { name: "admin-password" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--admin-user-name",
              description: "Admin user used for the virtual machines",
              args: { name: "admin-user-name" },
            },
            {
              name: ["--client-cert-common-name", "--cert-common-name"],
              description: "Client certificate common name",
              args: { name: "client-cert-common-name" },
            },
            {
              name: ["--client-cert-is-admin", "--cert-is-admin"],
              description: "Client authentication type",
              args: {
                name: "client-cert-is-admin",
                suggestions: ["false", "true"],
              },
            },
            {
              name: [
                "--client-cert-issuer-thumbprint",
                "--cert-issuer-thumbprint",
                "--cert-issuer-tp",
              ],
              description: "Space-separated list of issuer thumbprints",
              args: { name: "client-cert-issuer-thumbprint" },
            },
            {
              name: ["--client-cert-thumbprint", "--cert-thumbprint"],
              description: "Client certificate thumbprint",
              args: { name: "client-cert-thumbprint" },
            },
            {
              name: ["--client-connection-port", "--client-port"],
              description: "Port used for client connections to the cluster",
              args: { name: "client-connection-port" },
            },
            {
              name: ["--cluster-code-version", "--code-version"],
              description:
                "Cluster service fabric code version. Only use if upgrade mode is Manual",
              args: { name: "cluster-code-version" },
            },
            {
              name: ["--cluster-upgrade-cadence", "--upgrade-cadence"],
              description:
                "The upgrade mode of the cluster when new Service Fabric runtime version is available Wave0: Cluster upgrade starts immediately after a new version is rolled out. Recommended for Test/Dev clusters.Wave1: Cluster upgrade starts 7 days after a new version is rolled out. Recommended for Pre-prod clusters.Wave2: Cluster upgrade starts 14 days after a new version is rolled out. Recommended for Production clusters",
              args: {
                name: "cluster-upgrade-cadence",
                suggestions: ["Wave0", "Wave1", "Wave2"],
              },
            },
            {
              name: ["--cluster-upgrade-mode", "--upgrade-mode"],
              description:
                "The upgrade mode of the cluster when new Service Fabric runtime version is available Automatic: The cluster will be automatically upgraded to the latest Service Fabric runtime version, upgrade_cadence will determine when the upgrade starts after the new version becomes available.Manual: The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the code_version property in the cluster resource",
              args: {
                name: "cluster-upgrade-mode",
                suggestions: ["Automatic", "Manual"],
              },
            },
            {
              name: "--dns-name",
              description: "Cluster's dns name",
              args: { name: "dns-name" },
            },
            {
              name: ["--gateway-connection-port", "--gateway-port"],
              description: "Port used for http connections to the cluster",
              args: { name: "gateway-connection-port" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--sku",
              description:
                "Cluster's Sku, the options are Basic: it will have a minimum of 3 seed nodes and only allows 1 node type and Standard: it will have a minimum of 5 seed nodes and allows multiple node types",
              args: { name: "sku" },
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
          name: "delete",
          description: "Delete a managed cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List managed clusters",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the properties of an Azure Service Fabric managed cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a managed cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--client-connection-port", "--client-port"],
              description: "Port used for client connections to the cluster",
              args: { name: "client-connection-port" },
            },
            {
              name: "--dns-name",
              description: "Cluster's dns name",
              args: { name: "dns-name" },
            },
            {
              name: ["--gateway-connection-port", "--gateway-port"],
              description: "Port used for http connections to the cluster",
              args: { name: "gateway-connection-port" },
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
          name: "client-certificate",
          description: "Manage client certificates of a manged cluster",
          subcommands: [
            {
              name: "add",
              description:
                "Add a new client certificate to the managed cluster",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--common-name",
                  description: "Client certificate common name",
                  args: { name: "common-name" },
                },
                {
                  name: "--is-admin",
                  description: "Client authentication type",
                },
                {
                  name: "--issuer-thumbprint",
                  description: "Space-separated list of issuer thumbprints",
                  args: { name: "issuer-thumbprint" },
                },
                {
                  name: "--thumbprint",
                  description: "Client certificate thumbprint",
                  args: { name: "thumbprint" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a client certificate from the managed cluster",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--common-name",
                  description:
                    "A single or Space-separated list of client certificate common name(s) to be remove",
                  args: { name: "common-name" },
                },
                {
                  name: "--thumbprint",
                  description:
                    "A single or Space-separated list of client certificate thumbprint(s) to be remove",
                  args: { name: "thumbprint" },
                },
              ],
            },
          ],
        },
        {
          name: "network-security-rule",
          description: "Network security rule of a manged cluster",
          subcommands: [
            {
              name: "add",
              description: "Add a network security rule to a manged cluster",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--access",
                  description: "Allows or denies network traffic",
                  args: { name: "access", suggestions: ["allow", "deny"] },
                },
                {
                  name: "--description",
                  description: "Network security rule description",
                  args: { name: "description" },
                },
                {
                  name: "--dest-addr-prefixes",
                  description:
                    "CIDR or destination IP ranges. A single or space separated list of destination address prefixes",
                  args: { name: "dest-addr-prefixes" },
                },
                {
                  name: "--dest-port-ranges",
                  description:
                    "A single or space separated list of destination port ranges",
                  args: { name: "dest-port-ranges" },
                },
                {
                  name: "--direction",
                  description: "Network security rule direction",
                  args: {
                    name: "direction",
                    suggestions: ["inbound", "outbound"],
                  },
                },
                {
                  name: "--name",
                  description: "Network security rule name",
                  args: { name: "name" },
                },
                {
                  name: "--priority",
                  description: "Integer that shows priority for rule",
                  args: { name: "priority" },
                },
                {
                  name: "--protocol",
                  description: "Network protocol",
                  args: {
                    name: "protocol",
                    suggestions: [
                      "ah",
                      "any",
                      "esp",
                      "http",
                      "https",
                      "icmp",
                      "tcp",
                      "udp",
                    ],
                  },
                },
                {
                  name: "--source-addr-prefixes",
                  description:
                    "The CIDR or source IP ranges. A single or space separated list of source address prefixes",
                  args: { name: "source-addr-prefixes" },
                },
                {
                  name: "--source-port-ranges",
                  description:
                    "A single or space separated list of source port ranges",
                  args: { name: "source-port-ranges" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "managed-node-type",
      description:
        "Manage a node type of an Azure Service Fabric managed cluster",
      subcommands: [
        {
          name: "create",
          description: "Delete a managed cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--instance-count",
              description: 'Essage = "The number of nodes in the node type',
              args: { name: "instance-count" },
              isRequired: true,
            },
            {
              name: ["--node-type-name", "--name", "-n"],
              description: "Node type name",
              args: { name: "node-type-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--application-end-port", "--app-end-port"],
              description: "Application End port of a range of ports",
              args: { name: "application-end-port" },
            },
            {
              name: ["--application-start-port", "--app-start-port"],
              description: "Application start port of a range of ports",
              args: { name: "application-start-port" },
            },
            {
              name: "--capacity",
              description:
                "Capacity tags applied to the nodes in the node type as key/value pairs, the cluster resource manager uses these tags to understand how much resource a node has. Updating this will override the current values.for example: --capacity ClientConnections=65536 param2=value2",
              args: { name: "capacity" },
            },
            {
              name: ["--data-disk-size", "--disk-size"],
              description: "Disk size for each vm in the node type in GBs",
              args: { name: "data-disk-size" },
            },
            {
              name: ["--data-disk-type", "--disk-type"],
              description:
                "Managed data disk type. IOPS and throughput are given by the disk size, to see more information go to https://docs.microsoft.com/azure/virtual-machines/disks-types. Default StandardSSD_LRSStandard_LRS: Standard HDD locally redundant storage. Best for backup, non-critical, and infrequent access.StandardSSD_LRS: Standard SSD locally redundant storage. Best for web servers, lightly used enterprise applications and dev/test.Premium_LRS: Premium SSD locally redundant storage. Best for production and performance sensitive workloads",
              args: {
                name: "data-disk-type",
                suggestions: ["Premium_LRS", "StandardSSD_LRS", "Standard_LRS"],
              },
            },
            {
              name: "--ephemeral-end-port",
              description: "Ephemeral end port of a range of ports",
              args: { name: "ephemeral-end-port" },
            },
            {
              name: "--ephemeral-start-port",
              description: "Ephemeral start port of a range of ports",
              args: { name: "ephemeral-start-port" },
            },
            {
              name: "--is-stateless",
              description:
                "Indicates if the node type can only host Stateless workloads",
            },
            {
              name: ["--multiple-placement-groups", "--multi-place-groups"],
              description:
                "Indicates if scale set associated with the node type can be composed of multiple placement groups",
            },
            {
              name: "--placement-property",
              description:
                "Placement tags applied to nodes in the node type as key/value pairs, which can be used to indicate where certain services (workload) should run. Updating this will override the current values.for example: --placement-property NodeColor=Green SomeProperty=5",
              args: { name: "placement-property" },
            },
            {
              name: "--primary",
              description:
                "Specify if the node type is primary. On this node type will run system services. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters",
            },
            {
              name: "--vm-image-offer",
              description:
                "The offer type of the Azure Virtual Machines Marketplace image",
              args: { name: "vm-image-offer" },
            },
            {
              name: "--vm-image-publisher",
              description:
                "The publisher of the Azure Virtual Machines Marketplace image",
              args: { name: "vm-image-publisher" },
            },
            {
              name: "--vm-image-sku",
              description:
                "The SKU of the Azure Virtual Machines Marketplace image",
              args: { name: "vm-image-sku" },
            },
            {
              name: "--vm-image-version",
              description:
                "The version of the Azure Virtual Machines Marketplace image",
              args: { name: "vm-image-version" },
            },
            {
              name: "--vm-size",
              description:
                "The size of virtual machines in the pool. All virtual machines in a pool are the same size",
              args: { name: "vm-size" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete node type from a cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--node-type-name", "--name", "-n"],
              description: "Node type name",
              args: { name: "node-type-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List node types of a managed cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show the properties of a node type",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--node-type-name", "--name", "-n"],
              description: "Node type name",
              args: { name: "node-type-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a managed cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--node-type-name", "--name", "-n"],
              description: "Node type name",
              args: { name: "node-type-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--application-end-port", "--app-end-port"],
              description: "Application End port of a range of ports",
              args: { name: "application-end-port" },
            },
            {
              name: ["--application-start-port", "--app-start-port"],
              description: "Application start port of a range of ports",
              args: { name: "application-start-port" },
            },
            {
              name: "--capacity",
              description:
                "Capacity tags applied to the nodes in the node type as key/value pairs, the cluster resource manager uses these tags to understand how much resource a node has. Updating this will override the current values.for example: --capacity ClientConnections=65536 param2=value2",
              args: { name: "capacity" },
            },
            {
              name: "--ephemeral-end-port",
              description: "Ephemeral end port of a range of ports",
              args: { name: "ephemeral-end-port" },
            },
            {
              name: "--ephemeral-start-port",
              description: "Ephemeral start port of a range of ports",
              args: { name: "ephemeral-start-port" },
            },
            {
              name: "--instance-count",
              description: 'Essage = "The number of nodes in the node type',
              args: { name: "instance-count" },
            },
            {
              name: "--placement-property",
              description:
                "Placement tags applied to nodes in the node type as key/value pairs, which can be used to indicate where certain services (workload) should run. Updating this will override the current values.for example: --placement-property NodeColor=Green SomeProperty=5",
              args: { name: "placement-property" },
            },
          ],
        },
        {
          name: "node",
          description:
            "Perform operations on nodes of a node type on managed clusters",
          subcommands: [
            {
              name: "delete",
              description: "Delete nodes of a node type",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--node-type-name", "--name", "-n"],
                  description: "Node type name",
                  args: { name: "node-type-name" },
                  isRequired: true,
                },
                {
                  name: "--node-name",
                  description: "List of target nodes to perform the operation",
                  args: { name: "node-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--force",
                  description:
                    "Using this flag will force the operation even if service fabric is unable to disable the nodes. Use with caution as this might cause data loss if stateful workloads are running on the node",
                },
              ],
            },
            {
              name: "reimage",
              description: "Reimage nodes of a node type",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--node-type-name", "--name", "-n"],
                  description: "Node type name",
                  args: { name: "node-type-name" },
                  isRequired: true,
                },
                {
                  name: "--node-name",
                  description: "List of target nodes to perform the operation",
                  args: { name: "node-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--force",
                  description:
                    "Using this flag will force the operation even if service fabric is unable to disable the nodes. Use with caution as this might cause data loss if stateful workloads are running on the node",
                },
              ],
            },
            {
              name: "restart",
              description: "Restart nodes of a node type",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--node-type-name", "--name", "-n"],
                  description: "Node type name",
                  args: { name: "node-type-name" },
                  isRequired: true,
                },
                {
                  name: "--node-name",
                  description: "List of target nodes to perform the operation",
                  args: { name: "node-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--force",
                  description:
                    "Using this flag will force the operation even if service fabric is unable to disable the nodes. Use with caution as this might cause data loss if stateful workloads are running on the node",
                },
              ],
            },
          ],
        },
        {
          name: "vm-extension",
          description:
            "Managed vm extension on a node type on managed clusters",
          subcommands: [
            {
              name: "add",
              description: "Add an extension to the node type",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--extension-name",
                  description: "Extension name",
                  args: { name: "extension-name" },
                  isRequired: true,
                },
                {
                  name: "--extension-type",
                  description:
                    'Specifies the type of the extension; an example is "CustomScriptExtension"',
                  args: { name: "extension-type" },
                  isRequired: true,
                },
                {
                  name: ["--node-type-name", "--name", "-n"],
                  description: "Node type name",
                  args: { name: "node-type-name" },
                  isRequired: true,
                },
                {
                  name: "--publisher",
                  description: "The name of the extension handler publisher",
                  args: { name: "publisher" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--type-handler-version",
                  description: "Specifies the version of the script handler",
                  args: { name: "type-handler-version" },
                  isRequired: true,
                },
                {
                  name: ["--auto-upgrade-minor-version", "--auto-upgrade"],
                  description:
                    "Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true",
                  args: {
                    name: "auto-upgrade-minor-version",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--force-update-tag",
                  description:
                    "If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed",
                  args: { name: "force-update-tag" },
                },
                {
                  name: "--protected-setting",
                  description:
                    "The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all",
                  args: { name: "protected-setting" },
                },
                {
                  name: ["--provision-after-extension", "--provision-after"],
                  description:
                    "Collection of extension names after which this extension needs to be provisioned",
                  args: { name: "provision-after-extension" },
                },
                {
                  name: "--setting",
                  description:
                    "Json formatted public settings for the extension",
                  args: { name: "setting" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an extension to the node type",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--extension-name",
                  description: "Extension name",
                  args: { name: "extension-name" },
                  isRequired: true,
                },
                {
                  name: ["--node-type-name", "--name", "-n"],
                  description: "Node type name",
                  args: { name: "node-type-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "vm-secret",
          description: "Managed vm secrets on a node type on managed clusters",
          subcommands: [
            {
              name: "add",
              description: "Add a secret to the node type",
              options: [
                {
                  name: "--certificate-store",
                  description:
                    "Specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account",
                  args: { name: "certificate-store" },
                  isRequired: true,
                },
                {
                  name: "--certificate-url",
                  description:
                    'This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see Add a key or secret to the key vault. In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: { "data":"", "dataType":"pfx", "password":""}/',
                  args: { name: "certificate-url" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--node-type-name", "--name", "-n"],
                  description: "Node type name",
                  args: { name: "node-type-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--source-vault-id",
                  description:
                    "Key Vault resource id containing the certificates",
                  args: { name: "source-vault-id" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "managed-service",
      description:
        "Manage services running on an Azure Service Fabric managed cluster. Only support ARM deployed services",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new managed service on an Azure Service Fabric managed cluster",
          options: [
            {
              name: ["--application-name", "--application"],
              description: "Specify the name of the service",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--service-name", "--name"],
              description: "Specify the name of the service",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service-type", "--type"],
              description:
                "Specify the service type name of the application, it should exist in the application manifest",
              args: { name: "service-type" },
              isRequired: true,
            },
            {
              name: "--state",
              description: "Specify if the service is stateless or stateful",
              args: { name: "state", suggestions: ["Stateful", "Stateless"] },
              isRequired: true,
            },
            {
              name: [
                "--service-package-activation-mode",
                "--package-activation-mode",
                "--activation-mode",
              ],
              description: "Specify the activation mode of the service package",
              args: { name: "service-package-activation-mode" },
            },
            {
              name: "--default-move-cost",
              description:
                "Specify the default cost for a move. Higher costs make it less likely that the Cluster Resource Manager will move the replica when trying to balance the cluster",
              args: {
                name: "default-move-cost",
                suggestions: ["High", "Low", "Medium", "Zero"],
              },
            },
            {
              name: "--has-persisted-state",
              description:
                "Determines whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false",
              args: {
                name: "has-persisted-state",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--high-key",
              description:
                "Specify the upper bound of the partition key range that should be split between the partition ‘Count’ This is only used with UniformInt64 partition scheme",
              args: { name: "high-key" },
            },
            {
              name: "--instance-count",
              description:
                "Specify the instance count for the stateless service. If -1 is used, it means it will run on all the nodes",
              args: { name: "instance-count" },
            },
            {
              name: [
                "--stand-by-replica-keep-duration",
                "--stand-by-keep-duration",
                "--keep-duration",
              ],
              description:
                'Specify the definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format "hh:mm:ss"',
              args: { name: "stand-by-replica-keep-duration" },
            },
            {
              name: "--low-key",
              description:
                "Specify the lower bound of the partition key range that should be split between the partition ‘Count’ This is only used with UniformInt64 partition scheme",
              args: { name: "low-key" },
            },
            {
              name: ["--min-instance-percentage", "--min-inst-pct"],
              description:
                "Specify the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service. Allowed values are from 0 to 100",
              args: { name: "min-instance-percentage" },
            },
            {
              name: "--min-instance-count",
              description:
                "Specify the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service",
              args: { name: "min-instance-count" },
            },
            {
              name: ["--min-replica-set-size", "--min-replica"],
              description:
                "Specify the min replica set size for the stateful service",
              args: { name: "min-replica-set-size" },
            },
            {
              name: "--partition-count",
              description:
                "Specify the number of partitions. This is only used with UniformInt64 partition scheme",
              args: { name: "partition-count" },
            },
            {
              name: "--partition-names",
              description:
                "Specify the array for the names of the partitions. This is only used with Named partition scheme",
              args: { name: "partition-names" },
            },
            {
              name: "--partition-scheme",
              description:
                "Specify what partition scheme to use. Singleton partitions are typically used when the service does not require any additional routing. UniformInt64 means that each partition owns a range of int64 keys. Named is usually for services with data that can be bucketed, within a bounded set. Some common examples of data fields used as named partition keys would be regions, postal codes, customer groups, or other business boundaries",
              args: {
                name: "partition-scheme",
                suggestions: ["Named", "Singleton", "UniformInt64Range"],
              },
            },
            {
              name: "--placement-constraints",
              description:
                'Specify the placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)"',
              args: { name: "placement-constraints" },
            },
            {
              name: ["--service-placement-time-limit", "--plcmt-time-limit"],
              description:
                'Specify the duration for which replicas can stay InBuild before reporting that build is stuck, represented in ISO 8601 format "hh:mm:ss"',
              args: { name: "service-placement-time-limit" },
            },
            {
              name: ["--quorum-loss-wait-duration", "--quorum-loss-wait"],
              description:
                'Specify the maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format "hh:mm:ss"',
              args: { name: "quorum-loss-wait-duration" },
            },
            {
              name: [
                "--replica-restart-wait-duration",
                "--replica-restart-wait",
              ],
              description:
                'Specify the duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format "hh:mm:ss"',
              args: { name: "replica-restart-wait-duration" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--target-replica-set-size", "--target-replica"],
              description:
                "Specify the target replica set size for the stateful service",
              args: { name: "target-replica-set-size" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a managed service",
          options: [
            {
              name: ["--application-name", "--application"],
              description: "Specify the name of the service",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--service-name", "--name"],
              description: "Specify the name of the service",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List managed services of a given managed application",
          options: [
            {
              name: ["--application-name", "--application"],
              description: "Specify the name of the service",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a service",
          options: [
            {
              name: ["--application-name", "--application"],
              description: "Specify the name of the service",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--service-name", "--name"],
              description: "Specify the name of the service",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a managed service",
          options: [
            {
              name: ["--application-name", "--application"],
              description: "Specify the name of the service",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--service-name", "--name"],
              description: "Specify the name of the service",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--default-move-cost",
              description:
                "Specify the default cost for a move. Higher costs make it less likely that the Cluster Resource Manager will move the replica when trying to balance the cluster",
              args: {
                name: "default-move-cost",
                suggestions: ["High", "Low", "Medium", "Zero"],
              },
            },
            {
              name: "--instance-count",
              description:
                "Specify the instance count for the stateless service. If -1 is used, it means it will run on all the nodes",
              args: { name: "instance-count" },
            },
            {
              name: [
                "--stand-by-replica-keep-duration",
                "--stand-by-keep-duration",
                "--keep-duration",
              ],
              description:
                'Specify the definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format "hh:mm:ss"',
              args: { name: "stand-by-replica-keep-duration" },
            },
            {
              name: ["--min-instance-percentage", "--min-inst-pct"],
              description:
                "Specify the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service. Allowed values are from 0 to 100",
              args: { name: "min-instance-percentage" },
            },
            {
              name: "--min-instance-count",
              description:
                "Specify the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service",
              args: { name: "min-instance-count" },
            },
            {
              name: ["--min-replica-set-size", "--min-replica"],
              description:
                "Specify the min replica set size for the stateful service",
              args: { name: "min-replica-set-size" },
            },
            {
              name: "--placement-constraints",
              description:
                'Specify the placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)"',
              args: { name: "placement-constraints" },
            },
            {
              name: ["--service-placement-time-limit", "--plcmt-time-limit"],
              description:
                'Specify the duration for which replicas can stay InBuild before reporting that build is stuck, represented in ISO 8601 format "hh:mm:ss"',
              args: { name: "service-placement-time-limit" },
            },
            {
              name: ["--quorum-loss-wait-duration", "--quorum-loss-wait"],
              description:
                'Specify the maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format "hh:mm:ss"',
              args: { name: "quorum-loss-wait-duration" },
            },
            {
              name: [
                "--replica-restart-wait-duration",
                "--replica-restart-wait",
              ],
              description:
                'Specify the duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format "hh:mm:ss"',
              args: { name: "replica-restart-wait-duration" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--target-replica-set-size", "--target-replica"],
              description:
                "Specify the target replica set size for the stateful service",
              args: { name: "target-replica-set-size" },
            },
          ],
        },
        {
          name: "correlation-scheme",
          description:
            "Manage correlation schemes of services running on an Azure Service Fabric managed cluster. Only support ARM deployed services",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new managed service correlation scheme on an Azure Service Fabric managed cluster",
              options: [
                {
                  name: ["--application-name", "--application"],
                  description: "Specify the name of the service",
                  args: { name: "application-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--correlated-service-name", "--correlated-name"],
                  description:
                    "Specify the Arm Resource ID of the service that the correlation relationship is established with",
                  args: { name: "correlated-service-name" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "--name"],
                  description: "Specify the name of the service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--scheme",
                  description:
                    "Specify the ServiceCorrelationScheme which describes the relationship between this service and the service specified via correlated_service_name",
                  args: { name: "scheme" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a managed service correlation scheme",
              options: [
                {
                  name: ["--application-name", "--application"],
                  description: "Specify the name of the service",
                  args: { name: "application-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--correlated-service-name", "--correlated-name"],
                  description:
                    "Specify the Arm Resource ID of the service that the correlation relationship is established with",
                  args: { name: "correlated-service-name" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "--name"],
                  description: "Specify the name of the service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update a managed service correlation scheme",
              options: [
                {
                  name: ["--application-name", "--application"],
                  description: "Specify the name of the service",
                  args: { name: "application-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--correlated-service-name", "--correlated-name"],
                  description:
                    "Specify the Arm Resource ID of the service that the correlation relationship is established with",
                  args: { name: "correlated-service-name" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "--name"],
                  description: "Specify the name of the service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--scheme",
                  description:
                    "Specify the ServiceCorrelationScheme which describes the relationship between this service and the service specified via correlated_service_name",
                  args: { name: "scheme" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "load-metrics",
          description:
            "Manage service load metrics running on an Azure Service Fabric managed cluster. Only support ARM deployed services",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new managed service load metric on an Azure Service Fabric managed cluster",
              options: [
                {
                  name: ["--application-name", "--application"],
                  description: "Specify the name of the service",
                  args: { name: "application-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--metric-name",
                  description: "Specify the name of the metric",
                  args: { name: "metric-name" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "--name"],
                  description: "Specify the name of the service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--default-load",
                  description:
                    "Specify the default amount of load, as a number, that this service creates for this metric. Used only for Stateless services",
                  args: { name: "default-load" },
                },
                {
                  name: "--primary-default-load",
                  description:
                    "Specify the default amount of load, as a number, that this service creates for this metric when it is a Primary replica. Used only for Stateful services",
                  args: { name: "primary-default-load" },
                },
                {
                  name: "--secondary-default-load",
                  description:
                    "Specify the default amount of load, as a number, that this service creates for this metric when it is a Secondary replica. Used only for Stateful services",
                  args: { name: "secondary-default-load" },
                },
                {
                  name: "--weight",
                  description:
                    "Specify the service load metric relative weight, compared to other metrics configured for this service, as a number",
                  args: { name: "weight" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a managed service",
              options: [
                {
                  name: ["--application-name", "--application"],
                  description: "Specify the name of the service",
                  args: { name: "application-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--metric-name",
                  description: "Specify the name of the metric",
                  args: { name: "metric-name" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "--name"],
                  description: "Specify the name of the service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update a managed service",
              options: [
                {
                  name: ["--application-name", "--application"],
                  description: "Specify the name of the service",
                  args: { name: "application-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description:
                    "Specify the name of the cluster, if not given it will be same as resource group name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--metric-name",
                  description: "Specify the name of the metric",
                  args: { name: "metric-name" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "--name"],
                  description: "Specify the name of the service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--default-load",
                  description:
                    "Specify the default amount of load, as a number, that this service creates for this metric. Used only for Stateless services",
                  args: { name: "default-load" },
                },
                {
                  name: "--primary-default-load",
                  description:
                    "Specify the default amount of load, as a number, that this service creates for this metric when it is a Primary replica. Used only for Stateful services",
                  args: { name: "primary-default-load" },
                },
                {
                  name: "--secondary-default-load",
                  description:
                    "Specify the default amount of load, as a number, that this service creates for this metric when it is a Secondary replica. Used only for Stateful services",
                  args: { name: "secondary-default-load" },
                },
                {
                  name: "--weight",
                  description:
                    "Specify the service load metric relative weight, compared to other metrics configured for this service, as a number",
                  args: { name: "weight" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "service",
      description:
        "Manage services running on an Azure Service Fabric cluster. Only support ARM deployed services",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new service on an Azure Service Fabric cluster",
          options: [
            {
              name: ["--application-name", "--application"],
              description:
                "Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--service-name", "--name"],
              description:
                "Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-type",
              description:
                "Specify the service type name of the application, it should exist in the application manifest",
              args: { name: "service-type" },
              isRequired: true,
            },
            {
              name: "--state",
              description: "Specify if the service is stateless or stateful",
              args: { name: "state", suggestions: ["stateful", "stateless"] },
              isRequired: true,
            },
            {
              name: "--default-move-cost",
              description:
                "Specify the default cost for a move. Higher costs make it less likely that the Cluster Resource Manager will move the replica when trying to balance the cluster",
              args: {
                name: "default-move-cost",
                suggestions: ["High", "Low", "Medium", "Zero"],
              },
            },
            {
              name: "--instance-count",
              description:
                "Specify the instance count for the stateless service. If -1 is used, it means it will run on all the nodes",
              args: { name: "instance-count" },
            },
            {
              name: ["--min-replica-set-size", "--min-replica"],
              description:
                "Specify the min replica set size for the stateful service",
              args: { name: "min-replica-set-size" },
            },
            {
              name: "--partition-scheme",
              description:
                "Specify what partition scheme to use. Singleton partitions are typically used when the service does not require any additional routing. UniformInt64 means that each partition owns a range of int64 keys. Named is usually for services with data that can be bucketed, within a bounded set. Some common examples of data fields used as named partition keys would be regions, postal codes, customer groups, or other business boundaries",
              args: {
                name: "partition-scheme",
                suggestions: ["named", "singleton", "uniformInt64"],
              },
            },
            {
              name: ["--target-replica-set-size", "--target-replica"],
              description:
                "Specify the target replica set size for the stateful service",
              args: { name: "target-replica-set-size" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a service",
          options: [
            {
              name: "--application-name",
              description: "The name of the application resource",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--service-name", "--name"],
              description:
                "Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List services of a given application",
          options: [
            {
              name: "--application-name",
              description: "The name of the application resource",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a service",
          options: [
            {
              name: "--application-name",
              description: "The name of the application resource",
              args: { name: "application-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description:
                "Specify the name of the cluster, if not given it will be same as resource group name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--service-name", "--name"],
              description:
                "Specify the name of the service. The application name must be a prefix of the service name, for example: appName~serviceName",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Specify the resource group name. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
