const completionSpec: Fig.Spec = {
  name: "az",
  description: "",
  subcommands: [
    {
      name: "account",
      description: "Manage Azure subscription information",
      loadSpec: "az/account",
    },
    {
      name: "acr",
      description: "Manage private registries with Azure Container Registries",
      loadSpec: "az/acr",
    },
    {
      name: "acs",
      description: "Manage Azure Container Services",
      loadSpec: "az/acs",
    },
    {
      name: "ad",
      description:
        "Manage Azure Active Directory Graph entities needed for Role Based Access Control",
      loadSpec: "az/ad",
    },
    {
      name: "advisor",
      description: "Manage Azure Advisor",
      loadSpec: "az/advisor",
    },
    { name: "afd", description: "Manage Azure Front Door", loadSpec: "az/afd" },
    {
      name: "ai-examples",
      description: "Add AI powered examples to help content",
      loadSpec: "az/ai-examples",
    },
    {
      name: "aks",
      description: "Manage Azure Kubernetes Services",
      loadSpec: "az/aks",
    },
    {
      name: "alias",
      description: "Manage Azure CLI Aliases",
      loadSpec: "az/alias",
    },
    {
      name: "ams",
      description: "Manage Azure Media Services resources",
      loadSpec: "az/ams",
    },
    {
      name: "apim",
      description: "Manage Azure API Management services",
      loadSpec: "az/apim",
    },
    {
      name: "appconfig",
      description: "Manage App Configurations",
      loadSpec: "az/appconfig",
    },
    {
      name: "appservice",
      description: "Manage App Service plans",
      loadSpec: "az/appservice",
    },
    {
      name: "arcappliance",
      description: "Commands to manage an Appliance resource",
      loadSpec: "az/arcappliance",
    },
    {
      name: "arcdata",
      description: "Commands for using Azure Arc-enabled data services",
      loadSpec: "az/arcdata",
    },
    {
      name: "aro",
      description: "Manage Azure Red Hat OpenShift clusters",
      loadSpec: "az/aro",
    },
    {
      name: "artifacts",
      description: "Manage Azure Artifacts",
      loadSpec: "az/artifacts",
    },
    {
      name: "attestation",
      description: "Manage Microsoft Azure Attestation (MAA)",
      loadSpec: "az/attestation",
    },
    {
      name: "automation",
      description: "Manage Automation",
      loadSpec: "az/automation",
    },
    {
      name: "backup",
      description: "Manage Azure Backups",
      loadSpec: "az/backup",
    },
    {
      name: "baremetalinstance",
      description: "(PREVIEW) Manage BareMetal Instances",
      loadSpec: "az/baremetalinstance",
    },
    { name: "batch", description: "Manage Azure Batch", loadSpec: "az/batch" },
    {
      name: "batchai",
      description: "Manage Batch AI resources",
      loadSpec: "az/batchai",
    },
    {
      name: "bicep",
      description: "Bicep CLI command group",
      loadSpec: "az/bicep",
    },
    {
      name: "billing",
      description: "Manage Azure Billing",
      loadSpec: "az/billing",
    },
    {
      name: "blockchain",
      description: "Manage blockchain",
      loadSpec: "az/blockchain",
    },
    {
      name: "blueprint",
      description: "Commands to manage blueprint",
      loadSpec: "az/blueprint",
    },
    {
      name: "boards",
      description: "Manage Azure Boards",
      loadSpec: "az/boards",
    },
    {
      name: "bot",
      description: "Manage Microsoft Azure Bot Service",
      loadSpec: "az/bot",
    },
    {
      name: "cache",
      description:
        "Commands to manage CLI objects cached using the --defer argument",
      loadSpec: "az/cache",
    },
    {
      name: "capacity",
      description: "Manage capacity",
      loadSpec: "az/capacity",
    },
    {
      name: "cdn",
      description: "Manage Azure Content Delivery Networks (CDNs)",
      loadSpec: "az/cdn",
    },
    {
      name: "cli-translator",
      description: "Translate ARM template or REST API to CLI scripts",
      loadSpec: "az/cli-translator",
    },
    {
      name: "cloud",
      description: "Manage registered Azure clouds",
      loadSpec: "az/cloud",
    },
    {
      name: "cloud-service",
      description: "Manage cloud service (extended support)",
      loadSpec: "az/cloud-service",
    },
    {
      name: "codespace",
      description: "Manage Visual Studio Codespaces",
      loadSpec: "az/codespace",
    },
    {
      name: "cognitiveservices",
      description: "Manage Azure Cognitive Services accounts",
      loadSpec: "az/cognitiveservices",
    },
    {
      name: "communication",
      description: "Manage communication service with communication",
      loadSpec: "az/communication",
    },
    {
      name: "config",
      description: "Manage Azure CLI configuration",
      loadSpec: "az/config",
    },
    {
      name: "configure",
      description:
        "Manage Azure CLI configuration. This command is interactive",
      loadSpec: "az/configure",
    },
    {
      name: "confluent",
      description: "Manage confluent resources",
      loadSpec: "az/confluent",
    },
    {
      name: "connectedk8s",
      description: "Commands to manage connected kubernetes clusters",
      loadSpec: "az/connectedk8s",
    },
    {
      name: "connectedmachine",
      description: "Manage Connected Machine",
      loadSpec: "az/connectedmachine",
    },
    {
      name: "consumption",
      description: "Manage consumption of Azure resources",
      loadSpec: "az/consumption",
    },
    {
      name: "container",
      description: "Manage Azure Container Instances",
      loadSpec: "az/container",
    },
    {
      name: "cosmosdb",
      description: "Manage Azure Cosmos DB database accounts",
      loadSpec: "az/cosmosdb",
    },
    {
      name: "costmanagement",
      description: "Manage cost and billing in Azure",
      loadSpec: "az/costmanagement",
    },
    {
      name: "csvmware",
      description: "Manage Azure VMware Solution by CloudSimple",
      loadSpec: "az/csvmware",
    },
    {
      name: "customlocation",
      description: "Commands to Create, Get, List and Delete CustomLocations",
      loadSpec: "az/customlocation",
    },
    {
      name: "custom-providers",
      description: "Commands to manage custom providers",
      loadSpec: "az/custom-providers",
    },
    { name: "databox", description: "Manage databox", loadSpec: "az/databox" },
    {
      name: "databoxedge",
      description: "Support data box edge device and management",
      loadSpec: "az/databoxedge",
    },
    {
      name: "databricks",
      description: "Manage databricks workspaces",
      loadSpec: "az/databricks",
    },
    { name: "datadog", description: "Manage datadog", loadSpec: "az/datadog" },
    {
      name: "datafactory",
      description: "Manage Data Factory",
      loadSpec: "az/datafactory",
    },
    {
      name: "dataprotection",
      description: "Manage Data Protection",
      loadSpec: "az/dataprotection",
    },
    {
      name: "datashare",
      description: "Commands to manage datashare",
      loadSpec: "az/datashare",
    },
    {
      name: "dedicated-hsm",
      description:
        "Dedicated-hsm to create, update, list, show, and delete HSMs",
      loadSpec: "az/dedicated-hsm",
    },
    {
      name: "demo",
      description:
        "Demos for designing, developing and demonstrating Azure CLI",
      loadSpec: "az/demo",
    },
    {
      name: "deployment",
      description:
        "Manage Azure Resource Manager template deployment at subscription scope",
      loadSpec: "az/deployment",
    },
    {
      name: "deploymentmanager",
      description: "Create and manage rollouts for your service",
      loadSpec: "az/deploymentmanager",
    },
    {
      name: "deployment-scripts",
      description:
        "Manage deployment scripts at subscription or resource group scope",
      loadSpec: "az/deployment-scripts",
    },
    {
      name: "desktopvirtualization",
      description: "Manage desktop virtualization",
      loadSpec: "az/desktopvirtualization",
    },
    {
      name: "devops",
      description: "Manage Azure DevOps organization level operations",
      loadSpec: "az/devops",
    },
    {
      name: "disk",
      description: "Manage Azure Managed Disks",
      loadSpec: "az/disk",
    },
    {
      name: "disk-access",
      description: "Manage disk access resources",
      loadSpec: "az/disk-access",
    },
    {
      name: "disk-encryption-set",
      description: "Disk Encryption Set resource",
      loadSpec: "az/disk-encryption-set",
    },
    {
      name: "disk-pool",
      description: "Manage Azure disk pool",
      loadSpec: "az/disk-pool",
    },
    {
      name: "dla",
      description: "Manage Data Lake Analytics accounts, jobs, and catalogs",
      loadSpec: "az/dla",
    },
    {
      name: "dls",
      description: "Manage Data Lake Store accounts and filesystems",
      loadSpec: "az/dls",
    },
    {
      name: "dms",
      description: "Manage Azure Data Migration Service (DMS) instances",
      loadSpec: "az/dms",
    },
    {
      name: "dnc",
      description: "Manage Delegated Network",
      loadSpec: "az/dnc",
    },
    {
      name: "dt",
      description: "Manage Azure Digital Twins solutions & infrastructure",
      loadSpec: "az/dt",
    },
    {
      name: "eventgrid",
      description:
        "Manage Azure Event Grid topics, domains, domain topics, system topics partner topics, event subscriptions, system topic event subscriptions and partner topic event subscriptions",
      loadSpec: "az/eventgrid",
    },
    {
      name: "eventhubs",
      description:
        "Manage Azure Event Hubs namespaces, eventhubs, consumergroups and geo recovery configurations - Alias",
      loadSpec: "az/eventhubs",
    },
    {
      name: "extension",
      description: "Manage and update CLI extensions",
      loadSpec: "az/extension",
    },
    {
      name: "feature",
      description: "Manage resource provider features",
      loadSpec: "az/feature",
    },
    {
      name: "feedback",
      description: "Send feedback to the Azure CLI Team",
      loadSpec: "az/feedback",
    },
    {
      name: "find",
      description:
        "I'm an AI robot, my advice is based on our Azure documentation as well as the usage patterns of Azure CLI and Azure ARM users. Using me improves Azure products and documentation",
      loadSpec: "az/find",
    },
    { name: "footprint", description: "", loadSpec: "az/footprint" },
    {
      name: "functionapp",
      description:
        "Manage function apps. To install the Azure Functions Core tools see https://github.com/Azure/azure-functions-core-tools",
      loadSpec: "az/functionapp",
    },
    {
      name: "fzf",
      description: "Commands to select active or default objects via fzf",
      loadSpec: "az/fzf",
    },
    {
      name: "graph",
      description: "Query the resources managed by Azure Resource Manager",
      loadSpec: "az/graph",
    },
    {
      name: "group",
      description: "Manage resource groups and template deployments",
      loadSpec: "az/group",
    },
    {
      name: "guestconfig",
      description: "Manage Guest Configuration",
      loadSpec: "az/guestconfig",
    },
    {
      name: "hanainstance",
      description: "(PREVIEW) Manage Azure SAP HANA Instance",
      loadSpec: "az/hanainstance",
    },
    {
      name: "hdinsight",
      description: "Manage HDInsight resources",
      loadSpec: "az/hdinsight",
    },
    {
      name: "healthbot",
      description: "Manage bot with healthbot",
      loadSpec: "az/healthbot",
    },
    {
      name: "healthcareapis",
      description: "Manage Healthcare Apis",
      loadSpec: "az/healthcareapis",
    },
    {
      name: "hpc-cache",
      description: "Commands to manage hpc cache",
      loadSpec: "az/hpc-cache",
    },
    {
      name: "identity",
      description: "Managed Service Identities",
      loadSpec: "az/identity",
    },
    {
      name: "image",
      description: "Manage custom virtual machine images",
      loadSpec: "az/image",
    },
    {
      name: "import-export",
      description: "Manage Import Export",
      loadSpec: "az/import-export",
    },
    {
      name: "interactive",
      description:
        "Start interactive mode. Installs the Interactive extension if not installed already",
      loadSpec: "az/interactive",
    },
    {
      name: "internet-analyzer",
      description: "Commands to manage internet analyzer",
      loadSpec: "az/internet-analyzer",
    },
    {
      name: "iot",
      description: "Manage Internet of Things (IoT) assets",
      loadSpec: "az/iot",
    },
    {
      name: "k8sconfiguration",
      description: "Commands to manage Kubernetes configuration",
      loadSpec: "az/k8sconfiguration",
    },
    {
      name: "k8s-configuration",
      description: "Commands to manage Kubernetes configuration",
      loadSpec: "az/k8s-configuration",
    },
    {
      name: "k8s-extension",
      description: "Commands to manage Kubernetes Extensions",
      loadSpec: "az/k8s-extension",
    },
    {
      name: "keyvault",
      description: "Manage KeyVault keys, secrets, and certificates",
      loadSpec: "az/keyvault",
    },
    {
      name: "kusto",
      description: "Manage Azure Kusto resources",
      loadSpec: "az/kusto",
    },
    {
      name: "lab",
      description: "Manage Azure DevTest Labs",
      loadSpec: "az/lab",
    },
    {
      name: "local-context",
      description: "Manage Local Context",
      loadSpec: "az/local-context",
    },
    { name: "lock", description: "Manage Azure locks", loadSpec: "az/lock" },
    { name: "logic", description: "Manage Logic", loadSpec: "az/logic" },
    {
      name: "logicapp",
      description: "Manage logic apps",
      loadSpec: "az/logicapp",
    },
    { name: "login", description: "Log in to Azure", loadSpec: "az/login" },
    {
      name: "logout",
      description: "Log out to remove access to Azure subscriptions",
      loadSpec: "az/logout",
    },
    {
      name: "maintenance",
      description: "Manage Maintenance",
      loadSpec: "az/maintenance",
    },
    {
      name: "managedapp",
      description:
        "Manage template solutions provided and maintained by Independent Software Vendors (ISVs)",
      loadSpec: "az/managedapp",
    },
    {
      name: "managed-cassandra",
      description: "Azure Managed Cassandra",
      loadSpec: "az/managed-cassandra",
    },
    {
      name: "managedservices",
      description:
        "Manage the registration assignments and definitions in Azure",
      loadSpec: "az/managedservices",
    },
    {
      name: "managementpartner",
      description:
        "Allows the partners to associate a Microsoft Partner Network(MPN) ID to a user or service principal in the customer's Azure directory",
      loadSpec: "az/managementpartner",
    },
    { name: "maps", description: "Manage Azure Maps", loadSpec: "az/maps" },
    {
      name: "mariadb",
      description: "Manage Azure Database for MariaDB servers",
      loadSpec: "az/mariadb",
    },
    {
      name: "mesh",
      description: "(PREVIEW) Manage Azure Service Fabric Mesh Resources",
      loadSpec: "az/mesh",
    },
    {
      name: "ml",
      description: "Manage Machine Learning resources",
      loadSpec: "az/ml",
    },
    {
      name: "monitor",
      description: "Manage the Azure Monitor Service",
      loadSpec: "az/monitor",
    },
    {
      name: "mysql",
      description: "Manage Azure Database for MySQL servers",
      loadSpec: "az/mysql",
    },
    {
      name: "netappfiles",
      description: "Manage Azure NetApp Files (ANF) Resources",
      loadSpec: "az/netappfiles",
    },
    {
      name: "network",
      description: "Manage Azure Network resources",
      loadSpec: "az/network",
    },
    {
      name: "next",
      description: "Recommend the possible next set of commands to take",
      loadSpec: "az/next",
    },
    {
      name: "notification-hub",
      description: "Manage Notification Hubs",
      loadSpec: "az/notification-hub",
    },
    {
      name: "offazure",
      description: "Manage on-premise resources for migrate",
      loadSpec: "az/offazure",
    },
    {
      name: "openshift",
      description: "Manage Azure Red Hat OpenShift 3.11 clusters",
      loadSpec: "az/openshift",
    },
    { name: "peering", description: "Manage peering", loadSpec: "az/peering" },
    {
      name: "pipelines",
      description: "Manage Azure Pipelines",
      loadSpec: "az/pipelines",
    },
    {
      name: "policy",
      description: "Manage resource policies",
      loadSpec: "az/policy",
    },
    { name: "portal", description: "Manage Portal", loadSpec: "az/portal" },
    {
      name: "postgres",
      description: "Manage Azure Database for PostgreSQL servers",
      loadSpec: "az/postgres",
    },
    {
      name: "powerbi",
      description: "Manage PowerBI resources",
      loadSpec: "az/powerbi",
    },
    {
      name: "ppg",
      description: "Manage Proximity Placement Groups",
      loadSpec: "az/ppg",
    },
    {
      name: "provider",
      description: "Manage resource providers",
      loadSpec: "az/provider",
    },
    {
      name: "providerhub",
      description: "Manage resources with ProviderHub",
      loadSpec: "az/providerhub",
    },
    { name: "purview", description: "Manage Purview", loadSpec: "az/purview" },
    {
      name: "quantum",
      description:
        "Manage Azure Quantum Workspaces and submit jobs to Azure Quantum Providers",
      loadSpec: "az/quantum",
    },
    {
      name: "redis",
      description: "Manage dedicated Redis caches for your Azure applications",
      loadSpec: "az/redis",
    },
    {
      name: "redisenterprise",
      description:
        "Manage dedicated Redis Enterprise caches for your Azure applications",
      loadSpec: "az/redisenterprise",
    },
    {
      name: "relay",
      description:
        "Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules",
      loadSpec: "az/relay",
    },
    {
      name: "remote-rendering-account",
      description: "Manage remote rendering account with mixed reality",
      loadSpec: "az/remote-rendering-account",
    },
    { name: "repos", description: "Manage Azure Repos", loadSpec: "az/repos" },
    {
      name: "reservations",
      description: "Manage Azure Reservations",
      loadSpec: "az/reservations",
    },
    {
      name: "resource",
      description: "Manage Azure resources",
      loadSpec: "az/resource",
    },
    {
      name: "resource-mover",
      description: "Move resources in Azure",
      loadSpec: "az/resource-mover",
    },
    {
      name: "rest",
      description: "Invoke a custom request",
      loadSpec: "az/rest",
    },
    {
      name: "role",
      description:
        "Manage user roles for access control with Azure Active Directory and service principals",
      loadSpec: "az/role",
    },
    {
      name: "sapmonitor",
      description: "(PREVIEW) Manage Azure SAP Monitor",
      loadSpec: "az/sapmonitor",
    },
    {
      name: "search",
      description: "Manage Azure Search services, admin keys and query keys",
      loadSpec: "az/search",
    },
    {
      name: "security",
      description: "Manage your security posture with Azure Security Center",
      loadSpec: "az/security",
    },
    {
      name: "self-test",
      description: "Runs a self-test of the CLI",
      loadSpec: "az/self-test",
    },
    {
      name: "sentinel",
      description: "Manage Security Insight",
      loadSpec: "az/sentinel",
    },
    {
      name: "serial-console",
      description:
        "Connent to the Serial Console of a Linux/Windows Virtual Machine or VMSS Instance",
      loadSpec: "az/serial-console",
    },
    {
      name: "servicebus",
      description:
        "Manage Azure Service Bus namespaces, queues, topics, subscriptions, rules and geo-disaster recovery configuration alias",
      loadSpec: "az/servicebus",
    },
    {
      name: "sf",
      description: "Manage and administer Azure Service Fabric clusters",
      loadSpec: "az/sf",
    },
    {
      name: "sig",
      description: "Manage shared image gallery",
      loadSpec: "az/sig",
    },
    {
      name: "signalr",
      description: "Manage Azure SignalR Service",
      loadSpec: "az/signalr",
    },
    {
      name: "snapshot",
      description:
        "Manage point-in-time copies of managed disks, native blobs, or other snapshots",
      loadSpec: "az/snapshot",
    },
    {
      name: "spatial-anchors-account",
      description: "Manage spatial anchor account with mixed reality",
      loadSpec: "az/spatial-anchors-account",
    },
    {
      name: "spring-cloud",
      description: "Commands to manage Azure Spring Cloud",
      loadSpec: "az/spring-cloud",
    },
    {
      name: "sql",
      description: "Manage Azure SQL Databases and Data Warehouses",
      loadSpec: "az/sql",
    },
    {
      name: "ssh",
      description:
        "SSH into resources (Azure VMs, etc) using AAD issued openssh certificates",
      loadSpec: "az/ssh",
    },
    {
      name: "sshkey",
      description: "Manage ssh public key with vm",
      loadSpec: "az/sshkey",
    },
    {
      name: "stack-hci",
      description: "Manage Azure Stack HCI",
      loadSpec: "az/stack-hci",
    },
    {
      name: "staticwebapp",
      description: "Manage static apps",
      loadSpec: "az/staticwebapp",
    },
    {
      name: "storage",
      description: "Manage Azure Cloud Storage resources",
      loadSpec: "az/storage",
    },
    {
      name: "storagesync",
      description: "Manage Azure File Sync",
      loadSpec: "az/storagesync",
    },
    {
      name: "stream-analytics",
      description: "Manage Stream Analytics",
      loadSpec: "az/stream-analytics",
    },
    {
      name: "support",
      description: "Manage Azure support resource",
      loadSpec: "az/support",
    },
    {
      name: "synapse",
      description: "Manage and operate Synapse Workspace, Spark Pool, SQL Pool",
      loadSpec: "az/synapse",
    },
    {
      name: "tag",
      description: "Tag Management on a resource",
      loadSpec: "az/tag",
    },
    {
      name: "term",
      description: "Manage marketplace agreement with marketplaceordering",
      loadSpec: "az/term",
    },
    {
      name: "ts",
      description:
        "Manage template specs at subscription or resource group scope",
      loadSpec: "az/ts",
    },
    {
      name: "tsi",
      description: "Manage Azure Time Series Insights",
      loadSpec: "az/tsi",
    },
    {
      name: "upgrade",
      description: "Upgrade Azure CLI and extensions",
      loadSpec: "az/upgrade",
    },
    {
      name: "version",
      description:
        "Show the versions of Azure CLI modules and extensions in JSON format by default or format configured by --output",
      loadSpec: "az/version",
    },
    {
      name: "vm",
      description: "Manage Linux or Windows virtual machines",
      loadSpec: "az/vm",
    },
    {
      name: "vmss",
      description:
        "Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS)",
      loadSpec: "az/vmss",
    },
    {
      name: "vmware",
      description: "Commands to manage Azure VMware Solution",
      loadSpec: "az/vmware",
    },
    { name: "webapp", description: "Manage web apps", loadSpec: "az/webapp" },
    {
      name: "webpubsub",
      description: "Commands to manage Webpubsub",
      loadSpec: "az/webpubsub",
    },
  ],
};

export default completionSpec;
