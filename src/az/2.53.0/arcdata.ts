const completion: Fig.Spec = {
  name: "arcdata",
  description: "Commands for using Azure Arc-enabled data services",
  subcommands: [
    {
      name: "ad-connector",
      description:
        "Manage Active Directory authentication for Azure Arc data services",
      subcommands: [
        {
          name: "create",
          description: "Create a new Active Directory connector",
          options: [
            {
              name: "--account-provisioning",
              description:
                "Value indicating whether service account provisioning for data services should be automatic or manual. Allowed values are: 'manual' or 'automatic'",
              args: { name: "account-provisioning" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Active Directory connector",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--nameserver-addresses",
              description:
                "List of Active Directory DNS server IP addresses separated by ',' (e.g. 10.10.10.11,10.10.10.12,10.10.10.13)",
              args: { name: "nameserver-addresses" },
              isRequired: true,
            },
            {
              name: "--realm",
              description:
                "The name of the Active Directory domain in uppercase (e.g CONTOSO.LOCAL)",
              args: { name: "realm" },
              isRequired: true,
            },
            {
              name: "--data-controller-name",
              description:
                "The name of the Arc data controller associated with this Active Directory connector",
              args: { name: "data-controller-name" },
            },
            {
              name: "--dns-domain-name",
              description: "The DNS domain name (e.g. contoso.com)",
              args: { name: "dns-domain-name" },
            },
            {
              name: "--dns-replicas",
              description: "The number of copies for DNS proxy service",
              args: { name: "dns-replicas" },
            },
            {
              name: "--domain-service-account-secret",
              description:
                "The name of the Kubernetes secret containing the credentials for the pre-created Active Directory account with permissions to create and manage accounts in the given OU. Alternatively, setting the 'DOMAIN_SERVICE_ACCOUNT_USERNAME' and 'DOMAIN_SERVICE_ACCOUNT_PASSWORD' env variables will create this secret automatically",
              args: { name: "domain-service-account-secret" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace to deploy the Active Directory connector",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--netbios-domain-name",
              description:
                "The NETBIOS name of the Active Directory domain (e.g. CONTOSO)",
              args: { name: "netbios-domain-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--ou-distinguished-name",
              description:
                "The distinguished name of the pre-created Organizational Unit (OU) in the Active Directory domain. (e.g. OU=arcou,DC=contoso,DC=com)",
              args: { name: "ou-distinguished-name" },
            },
            {
              name: "--prefer-k8s-dns",
              description:
                "Use Kubernetes DNS Server responses over the Active Directory DNS server responses for IP address lookup. Allowed values are 'true' or 'false'",
              args: { name: "prefer-k8s-dns" },
            },
            {
              name: "--primary-ad-dc-hostname",
              description: "The hostname of the primary AD domain controller",
              args: { name: "primary-ad-dc-hostname" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group of the Arc data controller associated with this Active Directory connector",
              args: { name: "resource-group" },
            },
            {
              name: "--secondary-ad-dc-hostnames",
              description:
                "List of the hostnames of the secondary Active Directory domain controller separated by ','(e.g. azdc02.contoso.local,azdc03.contoso.local)",
              args: { name: "secondary-ad-dc-hostnames" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing Active Directory connector",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Active Directory connector",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--data-controller-name",
              description:
                "The name of the Arc data controller associated with this Active Directory connector",
              args: { name: "data-controller-name" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace containing the Active Directory connector",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group of the Arc data controller associated with this Active Directory connector",
              args: { name: "resource-group" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "list",
          description: "List all Active Directory connectors",
          options: [
            {
              name: "--data-controller-name",
              description:
                "The name of the Arc data controller associated with the Active Directory connectors",
              args: { name: "data-controller-name" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace containing the Active Directory connectors",
              args: { name: "k8s-namespace" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group containing the Active Directory connectors",
              args: { name: "resource-group" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the details of an existing Active Directory connector",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Active Directory connector",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--data-controller-name",
              description:
                "The name of the Arc data controller associated with this Active Directory connector",
              args: { name: "data-controller-name" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace containing the Active Directory connector",
              args: { name: "k8s-namespace" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group of the Arc data controller associated with this Active Directory connector",
              args: { name: "resource-group" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the settings of an existing Active Directory connector",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Active Directory connector",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--data-controller-name",
              description:
                "The name of the Arc data controller associated with this Active Directory connector",
              args: { name: "data-controller-name" },
            },
            {
              name: "--dns-replicas",
              description: "The number of copies for DNS proxy service",
              args: { name: "dns-replicas" },
            },
            {
              name: "--domain-service-account-secret",
              description:
                "The name of the Kubernetes secret containing the credentials for the pre-created Active Directory account with permissions to create and manage accounts in the given OU",
              args: { name: "domain-service-account-secret" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace containing Active Directory connector",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--nameserver-addresses",
              description:
                "List of Active Directory DNS server IP addresses separated by ',' (e.g. 10.10.10.11,10.10.10.12,10.10.10.13)",
              args: { name: "nameserver-addresses" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--prefer-k8s-dns",
              description:
                "Use Kubernetes DNS Server responses over the Active Directory DNS server responses for IP address lookup. Allowed values are 'true' or 'false'",
              args: { name: "prefer-k8s-dns" },
            },
            {
              name: "--primary-ad-dc-hostname",
              description: "The hostname of the primary AD domain controller",
              args: { name: "primary-ad-dc-hostname" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group of the Arc data controller associated with this Active Directory connector",
              args: { name: "resource-group" },
            },
            {
              name: "--secondary-ad-dc-hostnames",
              description:
                "List of the hostnames of the secondary Active Directory domain controller separated by ','(e.g. azdc02.contoso.local,azdc03.contoso.local)",
              args: { name: "secondary-ad-dc-hostnames" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
      ],
    },
    {
      name: "dc",
      description: "Create, delete, and manage data controllers",
      subcommands: [
        {
          name: "create",
          description: "Create data controller",
          options: [
            {
              name: "--connectivity-mode",
              description:
                "The connectivity to Azure - indirect or direct - which the data controller should operate in",
              args: { name: "connectivity-mode" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name for the data controller",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group in which the data controller resource should be added",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--annotations",
              description:
                "Comma-separated list of annotations to apply all data controller resources",
              args: { name: "annotations" },
            },
            {
              name: "--auto-upload-logs",
              description: "Enable auto upload logs",
              args: {
                name: "auto-upload-logs",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--auto-upload-metrics",
              description: "Enable auto upload metrics",
              args: {
                name: "auto-upload-metrics",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--cluster-name",
              description: "Name of the Kubernetes cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--custom-location",
              description: "The name of the custom location",
              args: { name: "custom-location" },
            },
            {
              name: "--image-tag",
              description:
                "Arc data services image tag to use for the data controller",
              args: { name: "image-tag" },
            },
            {
              name: "--infrastructure",
              description:
                "The infrastructure on which the data controller will be running on. Allowed values: ['aws', 'gcp', 'azure', 'alibaba', 'onpremises', 'other', 'auto']",
              args: { name: "infrastructure" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace to deploy the data controller into. If it exists already it will be used. If it does not exist, an attempt will be made to create it first",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--labels",
              description:
                "Comma-separated list of labels to apply to all data controller resources",
              args: { name: "labels" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The Azure location in which the data controller metadata will be stored (e.g. eastus)",
              args: { name: "location" },
            },
            {
              name: "--logs-ui-private-key-file",
              description:
                "Path to the file containing a PEM formatted certificate private key to be used for the Logs UI dashboard endpoint",
              args: { name: "logs-ui-private-key-file" },
            },
            {
              name: "--logs-ui-public-key-file",
              description:
                "Path to the file containing a PEM formatted certificate to be used for the Logs UI dashboard endpoint",
              args: { name: "logs-ui-public-key-file" },
            },
            {
              name: "--metrics-ui-private-key-file",
              description:
                "Path to the file containing a PEM formatted certificate private key to be used for the Metrics UI dashboard endpoint",
              args: { name: "metrics-ui-private-key-file" },
            },
            {
              name: "--metrics-ui-public-key-file",
              description:
                "Path to the file containing a PEM formatted certificate to be used for the Metrics UI dashboard endpoint",
              args: { name: "metrics-ui-public-key-file" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--path", "-p"],
              description:
                "The path to a directory containing a custom configuration profile to use. Run az arcdata dc config init to create a custom configuration profile",
              args: { name: "path" },
            },
            {
              name: "--profile-name",
              description:
                "The name of an existing configuration profile. Run az arcdata dc config list to see available options. One of the following: ['azure-arc-ake', 'azure-arc-aks-default-storage', 'azure-arc-aks-hci', 'azure-arc-aks-premium-storage', 'azure-arc-azure-openshift', 'azure-arc-eks', 'azure-arc-gke', 'azure-arc-kubeadm', 'azure-arc-openshift', 'azure-arc-unit-test']",
              args: { name: "profile-name" },
            },
            {
              name: "--service-annotations",
              description:
                "Comma-separated list of annotations to apply to all external data controller services",
              args: { name: "service-annotations" },
            },
            {
              name: "--service-labels",
              description:
                "Comma-separated list of labels to apply to all external data controller services",
              args: { name: "service-labels" },
            },
            {
              name: "--storage-annotations",
              description:
                "Comma-separated list of annotations to apply to all PVCs created by the data controller",
              args: { name: "storage-annotations" },
            },
            {
              name: "--storage-class",
              description:
                "The storage class to be used for all data and logs persistent volumes for all data controller pods that require them",
              args: { name: "storage-class" },
            },
            {
              name: "--storage-labels",
              description:
                "Comma-separated list of labels to apply to all PVCs created by the data controller",
              args: { name: "storage-labels" },
            },
            {
              name: "--use-k8s",
              description: "Create data controller using local Kubernetes APIs",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete data controller",
          options: [
            {
              name: ["--name", "-n"],
              description: "Data controller name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--force", "-f"],
              description:
                "Force delete data controller and all of its data services",
              args: { name: "force" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace in which the data controller exists",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group in which the data controller exists",
              args: { name: "resource-group" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
            {
              name: ["--yes", "-y"],
              description: "Delete data controller without confirmation prompt",
            },
          ],
        },
        {
          name: "export",
          description: "Export metrics, logs or usage",
          options: [
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace in which the data controller exists",
              args: { name: "k8s-namespace" },
              isRequired: true,
            },
            {
              name: ["--path", "-p"],
              description:
                "The full or relative path including the file name of the file to be exported",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: ["--type", "-t"],
              description:
                "The type of data to be exported. Options: logs, metrics, and usage",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: ["--force", "-f"],
              description:
                "Force create output file. Overwrites any existing file at the same path",
              args: { name: "force" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List Azure Arc data controllers by resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group containing the Arc data controller(s)",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list-upgrades",
          description: "List available upgrade versions",
          options: [
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace in which the data controller exists",
              args: { name: "k8s-namespace" },
              isRequired: true,
            },
            {
              name: "--use-k8s",
              description:
                "List available data controller versions using local Kubernetes APIs",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "update",
          description: "Update data controller",
          options: [
            {
              name: "--auto-upload-logs",
              description: "Enable auto upload logs",
              args: {
                name: "auto-upload-logs",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--auto-upload-metrics",
              description: "Enable auto upload metrics",
              args: {
                name: "auto-upload-metrics",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--desired-version", "-v"],
              description:
                "The desired version tag to which the data controller will be upgraded, or empty to use the latest valid version",
              args: { name: "desired-version" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace with a deployed data controller",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--maintenance-duration",
              description: "Duration of the default maintenance window",
              args: { name: "maintenance-duration" },
            },
            {
              name: "--maintenance-enabled",
              description:
                "Set the enabled flag on the default maintenance window",
              args: {
                name: "maintenance-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--maintenance-recurrence",
              description:
                "Recurring interval for the default maintenance window",
              args: { name: "maintenance-recurrence" },
            },
            {
              name: "--maintenance-start",
              description:
                "Date time of the start of the first default maintenance window",
              args: { name: "maintenance-start" },
            },
            {
              name: "--maintenance-time-zone",
              description:
                "Timezone used to calculate the default maintenance window",
              args: { name: "maintenance-time-zone" },
            },
            {
              name: ["--name", "-n"],
              description: "Data controller name",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group in which the data controller exists",
              args: { name: "resource-group" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade data controller",
          options: [
            {
              name: ["--desired-version", "-v"],
              description:
                "The desired version tag to which the data controller will be upgraded, or empty to use the latest valid version",
              args: { name: "desired-version" },
            },
            {
              name: ["--dry-run", "-d"],
              description:
                "Indicates which instance would be upgraded but does not actually upgrade the instances",
              args: { name: "dry-run" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace in which the data controller exists",
              args: { name: "k8s-namespace" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the data controller",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "If given, the command will start the upgrade, but will not wait for the entire upgrade to complete. Upgrade will continue in the background",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group in which the data controller exists",
              args: { name: "resource-group" },
            },
            {
              name: "--target",
              description:
                "Option '--target' has been deprecated and will be removed in a future release. Use '--desired-version' instead. The desired version tag to which the data controller will be upgraded, or empty to use the latest valid version",
              args: { name: "target" },
            },
            {
              name: "--use-k8s",
              description:
                "Upgrade data controller using local Kubernetes APIs",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "upload",
          description: "Upload exported data file",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "The full or relative path including the file name of the file to be uploaded",
              args: { name: "path" },
              isRequired: true,
            },
          ],
        },
        {
          name: "config",
          description: "Configuration commands",
          subcommands: [
            {
              name: "add",
              description: "Add a value for a json path in a config file",
              options: [
                {
                  name: ["--config-file", "-c"],
                  description:
                    "Option '-c' has been deprecated and will be removed in a future release. Use '-p' instead. Data controller config file path of the config you would like to set, i.e. custom/control.json",
                  args: { name: "config-file" },
                  isRequired: true,
                },
                {
                  name: ["--json-values", "-j"],
                  description:
                    'A key value pair list of json paths to values: key1.subkey1=value1,key2.subkey2=value2. You may provide inline json values such as: key=\'{"kind":"cluster","name":"test-cluster"}\' or provide a file path, such as key=./values.json. The add command does NOT support conditionals. If the inline value you are providing is a key value pair itself with "=" and "," escape those characters. For example, key1="key2=val2,key3=val3". See http://jsonpatch.com/ for examples of how your path should look. If you would like to access an array, you must do so by indicating the index, such as key.0=value',
                  args: { name: "json-values" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "Data controller config file path of the config you would like to set, i.e. custom/control.json",
                  args: { name: "path" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "init",
              description:
                "Initialize a data controller configuration profile that can be used with az arcdata dc create",
              options: [
                {
                  name: ["--force", "-f"],
                  description: "Force overwrite of the target file",
                  args: { name: "force" },
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "File path of where you would like the config profile placed, defaults to /custom",
                  args: { name: "path" },
                },
                {
                  name: ["--source", "-s"],
                  description:
                    "Config profile source: ['azure-arc-ake', 'azure-arc-aks-default-storage', 'azure-arc-aks-dev-test', 'azure-arc-aks-hci', 'azure-arc-aks-premium-storage', 'azure-arc-azure-openshift', 'azure-arc-eks', 'azure-arc-gke', 'azure-arc-kubeadm', 'azure-arc-kubeadm-dev-test', 'azure-arc-openshift', 'azure-arc-unit-test']",
                  args: { name: "source" },
                },
                {
                  name: ["--target", "-t"],
                  description:
                    "Option '-t' has been deprecated and will be removed in a future release. Use '-p' instead. File path of where you would like the config profile placed, defaults to /custom",
                  args: { name: "target" },
                },
              ],
            },
            {
              name: "list",
              description: "List available configuration profile choices",
              options: [
                {
                  name: ["--config-profile", "-c"],
                  description:
                    "Default config profile: ['azure-arc-ake', 'azure-arc-aks-default-storage', 'azure-arc-aks-dev-test', 'azure-arc-aks-hci', 'azure-arc-aks-premium-storage', 'azure-arc-azure-openshift', 'azure-arc-eks', 'azure-arc-gke', 'azure-arc-kubeadm', 'azure-arc-kubeadm-dev-test', 'azure-arc-openshift', 'azure-arc-unit-test']",
                  args: { name: "config-profile" },
                },
              ],
            },
            {
              name: "patch",
              description: "Patch a config file based on a json patch file",
              options: [
                {
                  name: ["--config-file", "-c"],
                  description:
                    "Option '-c' has been deprecated and will be removed in a future release. Use '--path' instead. Data controller config file path of the config you would like to set, i.e. custom/control.json",
                  args: { name: "config-file" },
                  isRequired: true,
                },
                {
                  name: ["--patch-file", "-p"],
                  description:
                    'Path to a patch json file that is based off the jsonpatch library: http://jsonpatch.com/. You must start your patch json file with a key called "patch", whose value is an array of patch operations you intend to make. For the path of a patch operation, you may use dot notation, such as key1.key2 for most operations. If you would like to do a replace operation, and you are replacing a value in an array that requires a conditional, please use the jsonpath notation by beginning your path with a $. This will allow you to do a conditional such as $.key1.key2[?(@.key3=="someValue"].key4. See the examples below. For additional help with conditionals, See: https://jsonpath.com/',
                  args: { name: "patch-file" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description:
                    "Data controller config file path of the config you would like to set, i.e. custom/control.json",
                  args: { name: "path" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a value for a json path in a config file",
              options: [
                {
                  name: ["--config-file", "-c"],
                  description:
                    "Option '-c' has been deprecated and will be removed in a future release. Use '-p' instead. Data controller config file path of the config you would like to set, i.e. custom/control.json",
                  args: { name: "config-file" },
                  isRequired: true,
                },
                {
                  name: ["--json-path", "-j"],
                  description:
                    "A list of json paths based on the jsonpatch library that indicates which values you would like removed, such as: key1.subkey1,key2.subkey2. The remove command does NOT support conditionals. See http://jsonpatch.com/ for examples of how your path should look. If you would like to access an array, you must do so by indicating the index, such as key.0=value",
                  args: { name: "json-path" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "Data controller config file path of the config you would like to set, i.e. custom/control.json",
                  args: { name: "path" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "replace",
              description: "Replace a value for a json path in a config file",
              options: [
                {
                  name: ["--config-file", "-c"],
                  description:
                    "Option '-c' has been deprecated and will be removed in a future release. Use '-p' instead. Data controller config file path of the config you would like to set, i.e. custom/control.json",
                  args: { name: "config-file" },
                  isRequired: true,
                },
                {
                  name: ["--json-values", "-j"],
                  description:
                    'A key value pair list of json paths to values: key1.subkey1=value1,key2.subkey2=value2. You may provide inline json values such as: key=\'{"kind":"cluster","name":"test-cluster"}\' or provide a file path, such as key=./values.json. The replace command supports conditionals through the jsonpath library. To use this, start your path with a $. This will allow you to do a conditional such as -j $.key1.key2[?(@.key3=="someValue"].key4=value. If the inline value you are providing is a key value pair itself with "=" and "," escape those characters. For example, key1="key2=val2,key3=val3". You may see examples below. For additional help, See: https://jsonpath.com/',
                  args: { name: "json-values" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "Data controller config file path of the config you would like to set, i.e. custom/control.json",
                  args: { name: "path" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Return the config of the data controller custom resource",
              options: [
                {
                  name: ["--k8s-namespace", "-k"],
                  description:
                    "The Kubernetes namespace in which the data controller exists",
                  args: { name: "k8s-namespace" },
                },
                {
                  name: "--use-k8s",
                  description:
                    "Use local Kubernetes APIs to perform this action",
                  args: { name: "use-k8s" },
                },
              ],
            },
          ],
        },
        {
          name: "debug",
          description: "Debug data controller",
          subcommands: [
            {
              name: "controldb-cdc",
              description:
                "Enable/disable CDC on Data Controller Database and Tables - for troubleshooting purposes only",
              options: [
                {
                  name: ["--k8s-namespace", "-k"],
                  description:
                    "Kubernetes namespace of the existing data controller",
                  args: { name: "k8s-namespace" },
                  isRequired: true,
                },
                {
                  name: "--enable",
                  description: "Enable or disable change data capture",
                  args: { name: "enable", suggestions: ["false", "true"] },
                },
                {
                  name: "--retention-hours",
                  description:
                    "CDC retention period, specified in hours. Allowed values are 1 to 24",
                  args: { name: "retention-hours" },
                },
                {
                  name: "--use-k8s",
                  description:
                    "Use local Kubernetes APIs to perform this action",
                  args: { name: "use-k8s" },
                },
              ],
            },
            {
              name: "copy-logs",
              description: "Copy logs",
              options: [
                {
                  name: ["--k8s-namespace", "-k"],
                  description: "Kubernetes namespace of the data controller",
                  args: { name: "k8s-namespace" },
                  isRequired: true,
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "Copy the logs for the containers with similar name, Optional, by default copies logs for all containers. Cannot be specified multiple times. If specified multiple times, last one will be used",
                  args: { name: "container" },
                },
                {
                  name: "--exclude-arcdata-logs",
                  description:
                    "Whether or not to exclude arc data services logs from result folder. The default value is False which includes all arc data services container logs",
                },
                {
                  name: "--exclude-cluster-info",
                  description:
                    "Whether or not to exclude kubernetes resource info from result folder per namespace. The default value is False which includes namespaced resource info",
                },
                {
                  name: "--exclude-controldb",
                  description:
                    "Whether or not to exclude a backup of controldb from result folder. The default value is False which includes a controldb backup",
                },
                {
                  name: "--exclude-dumps",
                  description:
                    "Whether or not to exclude dumps from result folder. The default value is False which includes dumps",
                },
                {
                  name: "--exclude-system-logs",
                  description:
                    "Whether or not to exclude kube-system and azure-arc namespace logs from collection. The default value is False which includes kube-system and connectedk8s logs, if accessible",
                },
                {
                  name: "--pod",
                  description:
                    "Copy the logs for the pods with similar name. Optional, by default copies logs for all pods. Cannot be specified multiple times. If specified multiple times, last one will be used",
                  args: { name: "pod" },
                },
                {
                  name: "--resource-kind",
                  description:
                    "Copy the logs for the resource of a particular kind. Cannot specified multiple times. If specified multiple times, last one will be used. If specified, --resource-name should also be specified to identify the resource",
                  args: { name: "resource-kind" },
                },
                {
                  name: "--resource-name",
                  description:
                    "Copy the logs for the resource of the specified name. Cannot be specified multiple times. If specified multiple times, last one will be used. If specified, --resource-kind should also be specified to identify the resource",
                  args: { name: "resource-name" },
                },
                {
                  name: "--skip-compress",
                  description:
                    "Whether or not to skip compressing the result folder. The default value is False which compresses the result folder",
                },
                {
                  name: ["--target-folder", "-d"],
                  description:
                    "Target folder path to copy logs to. Optional, by default creates the result in the local folder. Cannot be specified multiple times. If specified multiple times, last one will be used",
                  args: { name: "target-folder" },
                },
                {
                  name: ["--timeout", "-t"],
                  description:
                    "The number of seconds to wait for the command to complete. The default value is 0 which is unlimited",
                  args: { name: "timeout" },
                },
                {
                  name: "--use-k8s",
                  description:
                    "Use local Kubernetes APIs to perform this action",
                  args: { name: "use-k8s" },
                },
              ],
            },
            {
              name: "dump",
              description: "Trigger memory dump",
              options: [
                {
                  name: ["--k8s-namespace", "-k"],
                  description: "Kubernetes namespace of the data controller",
                  args: { name: "k8s-namespace" },
                  isRequired: true,
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The target container to be triggered for dumping the running processes",
                  args: { name: "container", suggestions: ["controller"] },
                },
                {
                  name: ["--target-folder", "-d"],
                  description: "Target folder to copy the dump out",
                  args: { name: "target-folder" },
                },
                {
                  name: "--use-k8s",
                  description:
                    "Use local Kubernetes APIs to perform this action",
                  args: { name: "use-k8s" },
                },
              ],
            },
            {
              name: "restore-controldb-snapshot",
              description:
                "Restores a unique copy of ControlDB from backup - for troubleshooting purposes only",
              options: [
                {
                  name: ["--backup-file", "-f"],
                  description:
                    "Existing Controller Database backup file - must end in '.bak', will be restored under a unique database name based on execution timestamp",
                  args: { name: "backup-file" },
                  isRequired: true,
                },
                {
                  name: ["--k8s-namespace", "-k"],
                  description:
                    "Kubernetes namespace of the existing data controller",
                  args: { name: "k8s-namespace" },
                  isRequired: true,
                },
                {
                  name: "--use-k8s",
                  description:
                    "Use local Kubernetes APIs to perform this action",
                  args: { name: "use-k8s" },
                },
              ],
            },
          ],
        },
        {
          name: "endpoint",
          description: "Endpoint commands",
          subcommands: [
            {
              name: "list",
              description: "List the data controller endpoint",
              options: [
                {
                  name: ["--k8s-namespace", "-k"],
                  description:
                    "The Kubernetes namespace in which the data controller exists",
                  args: { name: "k8s-namespace" },
                  isRequired: true,
                },
                {
                  name: ["--endpoint-name", "-e"],
                  description: "Arc data controller endpoint name",
                  args: { name: "endpoint-name" },
                },
                {
                  name: "--use-k8s",
                  description:
                    "Use local Kubernetes APIs to perform this action",
                  args: { name: "use-k8s" },
                },
              ],
            },
          ],
        },
        {
          name: "status",
          description: "Status commands",
          subcommands: [
            {
              name: "show",
              description: "Show the status of the data controller",
              options: [
                {
                  name: ["--k8s-namespace", "-k"],
                  description:
                    "The Kubernetes namespace in which the data controller exists",
                  args: { name: "k8s-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name for the data controller",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The Azure resource group in which the data controller exists",
                  args: { name: "resource-group" },
                },
                {
                  name: "--use-k8s",
                  description:
                    "Use local Kubernetes APIs to perform this action",
                  args: { name: "use-k8s" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "resource-kind",
      description:
        "Resource-kind commands to define and template custom resources on your cluster",
      subcommands: [
        {
          name: "get",
          description: "Get the Arc resource-kind's template file",
          options: [
            {
              name: ["--kind", "-k"],
              description:
                "The kind of arc resource you want the template file for",
              args: { name: "kind" },
              isRequired: true,
            },
            {
              name: ["--dest", "-d"],
              description:
                'The directory where you"d like to place the template files',
              args: { name: "dest" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List the available custom resource kinds for Arc that can be defined and created",
        },
      ],
    },
  ],
};

export default completion;
