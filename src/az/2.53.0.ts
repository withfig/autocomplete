const completion: Fig.Spec = {
  name: "az",
  subcommands: [
    {
      name: "account",
      description: "Manage Azure subscription information",
      loadSpec: "az/2.53.0/account",
    },
    {
      name: "acr",
      description: "Manage private registries with Azure Container Registries",
      loadSpec: "az/2.53.0/acr",
    },
    {
      name: "ad",
      description:
        "Manage Azure Active Directory Graph entities needed for Role Based Access Control",
      loadSpec: "az/2.53.0/ad",
    },
    {
      name: "adp",
      description: "Manage Azure Autonomous Development Platform resources",
      loadSpec: "az/2.53.0/adp",
    },
    {
      name: "advisor",
      description: "Manage Azure Advisor",
      loadSpec: "az/2.53.0/advisor",
    },
    {
      name: "afd",
      description:
        "Manage Azure Front Door Standard/Premium. For classical Azure Front Door, please refer https://docs.microsoft.com/en-us/cli/azure/network/front-door?view=azure-cli-latest",
      loadSpec: "az/2.53.0/afd",
    },
    {
      name: "ai-examples",
      description: "Add AI powered examples to help content",
      loadSpec: "az/2.53.0/ai-examples",
    },
    {
      name: "aks",
      description: "Manage Azure Kubernetes Services",
      loadSpec: "az/2.53.0/aks",
    },
    {
      name: "alerts-management",
      description: "Manage Azure Alerts Management Service Resource",
      loadSpec: "az/2.53.0/alerts-management",
    },
    {
      name: "alias",
      description: "Manage Azure CLI Aliases",
      loadSpec: "az/2.53.0/alias",
    },
    {
      name: "amlfs",
      description: "Manage lustre file system",
      loadSpec: "az/2.53.0/amlfs",
    },
    {
      name: "ams",
      description: "Manage Azure Media Services resources",
      loadSpec: "az/2.53.0/ams",
    },
    {
      name: "apim",
      description: "Manage Azure API Management services",
      loadSpec: "az/2.53.0/apim",
    },
    {
      name: "appconfig",
      description: "Manage App Configurations",
      loadSpec: "az/2.53.0/appconfig",
    },
    {
      name: "appservice",
      description: "Manage App Service plans",
      loadSpec: "az/2.53.0/appservice",
    },
    {
      name: "arcappliance",
      description: "Commands to manage Arc resource bridge",
      loadSpec: "az/2.53.0/arcappliance",
    },
    {
      name: "arcdata",
      description: "Commands for using Azure Arc-enabled data services",
      loadSpec: "az/2.53.0/arcdata",
    },
    {
      name: "aro",
      description: "Manage Azure Red Hat OpenShift clusters",
      loadSpec: "az/2.53.0/aro",
    },
    {
      name: "artifacts",
      description: "Manage Azure Artifacts",
      loadSpec: "az/2.53.0/artifacts",
    },
    {
      name: "attestation",
      description: "Manage Microsoft Azure Attestation (MAA)",
      loadSpec: "az/2.53.0/attestation",
    },
    {
      name: "automanage",
      description: "Manage Automanage",
      loadSpec: "az/2.53.0/automanage",
    },
    {
      name: "automation",
      description: "Manage Automation Account",
      loadSpec: "az/2.53.0/automation",
    },
    {
      name: "azurestackhci",
      description: "Manage azurestackhci",
      loadSpec: "az/2.53.0/azurestackhci",
    },
    {
      name: "backup",
      description: "Manage Azure Backups",
      loadSpec: "az/2.53.0/backup",
    },
    {
      name: "baremetalinstance",
      description: "(PREVIEW) Manage BareMetal Instances",
      loadSpec: "az/2.53.0/baremetalinstance",
    },
    {
      name: "batch",
      description: "Manage Azure Batch",
      loadSpec: "az/2.53.0/batch",
    },
    {
      name: "batchai",
      description: "Manage Batch AI resources",
      loadSpec: "az/2.53.0/batchai",
    },
    {
      name: "bicep",
      description: "Bicep CLI command group",
      loadSpec: "az/2.53.0/bicep",
    },
    {
      name: "billing",
      description: "Manage Azure Billing",
      loadSpec: "az/2.53.0/billing",
    },
    {
      name: "billing-benefits",
      description: "Azure billing benefits commands",
      loadSpec: "az/2.53.0/billing-benefits",
    },
    {
      name: "blockchain",
      description: "Manage blockchain",
      loadSpec: "az/2.53.0/blockchain",
    },
    {
      name: "blueprint",
      description: "Commands to manage blueprint",
      loadSpec: "az/2.53.0/blueprint",
    },
    {
      name: "boards",
      description: "Manage Azure Boards",
      loadSpec: "az/2.53.0/boards",
    },
    {
      name: "bot",
      description: "Manage Microsoft Azure Bot Service",
      loadSpec: "az/2.53.0/bot",
    },
    {
      name: "cache",
      description:
        "Commands to manage CLI objects cached using the --defer argument",
      loadSpec: "az/2.53.0/cache",
    },
    {
      name: "capacity",
      description: "Manage capacity",
      loadSpec: "az/2.53.0/capacity",
    },
    {
      name: "cdn",
      description: "Manage Azure Content Delivery Networks (CDNs)",
      loadSpec: "az/2.53.0/cdn",
    },
    {
      name: "change-analysis",
      description: "List changes for resources",
      loadSpec: "az/2.53.0/change-analysis",
    },
    {
      name: "cli-translator",
      description: "Translate ARM template or REST API to CLI scripts",
      loadSpec: "az/2.53.0/cli-translator",
    },
    {
      name: "cloud",
      description: "Manage registered Azure clouds",
      loadSpec: "az/2.53.0/cloud",
    },
    {
      name: "cloud-service",
      description: "Manage cloud service (extended support)",
      loadSpec: "az/2.53.0/cloud-service",
    },
    {
      name: "cognitiveservices",
      description: "Manage Azure Cognitive Services accounts",
      loadSpec: "az/2.53.0/cognitiveservices",
    },
    {
      name: "command-change",
      description: "Commands for CLI modules metadata management",
      loadSpec: "az/2.53.0/command-change",
    },
    {
      name: "communication",
      description: "Manage communication service with communication",
      loadSpec: "az/2.53.0/communication",
    },
    {
      name: "confcom",
      description:
        "Commands to generate security policies for confidential containers in Azure",
      loadSpec: "az/2.53.0/confcom",
    },
    {
      name: "confidentialledger",
      description: "Manage Confidential Ledger",
      loadSpec: "az/2.53.0/confidentialledger",
    },
    {
      name: "config",
      description: "Manage Azure CLI configuration",
      loadSpec: "az/2.53.0/config",
    },
    {
      name: "configure",
      description:
        "Manage Azure CLI configuration. This command is interactive",
      loadSpec: "az/2.53.0/configure",
    },
    {
      name: "confluent",
      description: "Manage confluent resources",
      loadSpec: "az/2.53.0/confluent",
    },
    {
      name: "connectedk8s",
      description: "Commands to manage connected kubernetes clusters",
      loadSpec: "az/2.53.0/connectedk8s",
    },
    {
      name: "connectedmachine",
      description: "Manage an Azure Arc-Enabled Server",
      loadSpec: "az/2.53.0/connectedmachine",
    },
    {
      name: "connectedvmware",
      description: "Commands to manage Connected VMware",
      loadSpec: "az/2.53.0/connectedvmware",
    },
    {
      name: "connection",
      description:
        "Commands to manage Service Connector local connections which allow local environment to connect Azure Resource. If you want to manage connection for compute service, please run 'az webapp/containerapp/spring connection'",
      loadSpec: "az/2.53.0/connection",
    },
    {
      name: "consumption",
      description: "Manage consumption of Azure resources",
      loadSpec: "az/2.53.0/consumption",
    },
    {
      name: "container",
      description: "Manage Azure Container Instances",
      loadSpec: "az/2.53.0/container",
    },
    {
      name: "containerapp",
      description: "Manage Azure Container Apps",
      loadSpec: "az/2.53.0/containerapp",
    },
    {
      name: "cosmosdb",
      description: "Manage Azure Cosmos DB database accounts",
      loadSpec: "az/2.53.0/cosmosdb",
    },
    {
      name: "costmanagement",
      description: "Manage cost and billing in Azure",
      loadSpec: "az/2.53.0/costmanagement",
    },
    {
      name: "csvmware",
      description: "Manage Azure VMware Solution by CloudSimple",
      loadSpec: "az/2.53.0/csvmware",
    },
    {
      name: "custom-providers",
      description: "Commands to manage custom providers",
      loadSpec: "az/2.53.0/custom-providers",
    },
    {
      name: "customlocation",
      description: "Commands to Create, Get, List and Delete CustomLocations",
      loadSpec: "az/2.53.0/customlocation",
    },
    {
      name: "databox",
      description: "Manage data box",
      loadSpec: "az/2.53.0/databox",
    },
    {
      name: "databoxedge",
      description: "Support data box edge device and management",
      loadSpec: "az/2.53.0/databoxedge",
    },
    {
      name: "databricks",
      description: "Manage databricks workspaces",
      loadSpec: "az/2.53.0/databricks",
    },
    {
      name: "datadog",
      description: "Manage datadog",
      loadSpec: "az/2.53.0/datadog",
    },
    {
      name: "datafactory",
      description: "Manage Data Factory",
      loadSpec: "az/2.53.0/datafactory",
    },
    {
      name: "datamigration",
      description: "Manage Data Migration",
      loadSpec: "az/2.53.0/datamigration",
    },
    {
      name: "dataprotection",
      description: "Manage dataprotection",
      loadSpec: "az/2.53.0/dataprotection",
    },
    {
      name: "datashare",
      description: "Manage Data Share",
      loadSpec: "az/2.53.0/datashare",
    },
    {
      name: "dedicated-hsm",
      description: "Manage dedicated hsm with hardware security modules",
      loadSpec: "az/2.53.0/dedicated-hsm",
    },
    {
      name: "demo",
      description:
        "Demos for designing, developing and demonstrating Azure CLI",
      loadSpec: "az/2.53.0/demo",
    },
    {
      name: "deployment",
      description:
        "Manage Azure Resource Manager template deployment at subscription scope",
      loadSpec: "az/2.53.0/deployment",
    },
    {
      name: "deployment-scripts",
      description:
        "Manage deployment scripts at subscription or resource group scope",
      loadSpec: "az/2.53.0/deployment-scripts",
    },
    {
      name: "desktopvirtualization",
      description: "Manage desktop virtualization",
      loadSpec: "az/2.53.0/desktopvirtualization",
    },
    {
      name: "devcenter",
      description: "Manage resources with devcenter",
      loadSpec: "az/2.53.0/devcenter",
    },
    {
      name: "devops",
      description: "Manage Azure DevOps organization level operations",
      loadSpec: "az/2.53.0/devops",
    },
    {
      name: "disk",
      description: "Manage Azure Managed Disks",
      loadSpec: "az/2.53.0/disk",
    },
    {
      name: "disk-access",
      description: "Manage disk access resources",
      loadSpec: "az/2.53.0/disk-access",
    },
    {
      name: "disk-encryption-set",
      description: "Disk Encryption Set resource",
      loadSpec: "az/2.53.0/disk-encryption-set",
    },
    {
      name: "disk-pool",
      description: "Manage Azure disk pool",
      loadSpec: "az/2.53.0/disk-pool",
    },
    {
      name: "dla",
      description: "Manage Data Lake Analytics accounts, jobs, and catalogs",
      loadSpec: "az/2.53.0/dla",
    },
    {
      name: "dls",
      description: "Manage Data Lake Store accounts and filesystems",
      loadSpec: "az/2.53.0/dls",
    },
    {
      name: "dms",
      description: "Manage Azure Data Migration Service (classic) instances",
      loadSpec: "az/2.53.0/dms",
    },
    {
      name: "dnc",
      description: "Manage Delegated Network",
      loadSpec: "az/2.53.0/dnc",
    },
    {
      name: "dns-resolver",
      description: "Manage Dns Resolver",
      loadSpec: "az/2.53.0/dns-resolver",
    },
    {
      name: "dt",
      description: "Manage Azure Digital Twins solutions & infrastructure",
      loadSpec: "az/2.53.0/dt",
    },
    {
      name: "dynatrace",
      description: "Manage dynatrace",
      loadSpec: "az/2.53.0/dynatrace",
    },
    {
      name: "edgeorder",
      description: "Manage Edge Order",
      loadSpec: "az/2.53.0/edgeorder",
    },
    {
      name: "elastic",
      description: "Manage Microsoft Elastic",
      loadSpec: "az/2.53.0/elastic",
    },
    {
      name: "elastic-san",
      description: "Manage Elastic SAN",
      loadSpec: "az/2.53.0/elastic-san",
    },
    {
      name: "eventgrid",
      description:
        "Manage Azure Event Grid topics, domains, domain topics, system topics partner topics, event subscriptions, system topic event subscriptions and partner topic event subscriptions",
      loadSpec: "az/2.53.0/eventgrid",
    },
    {
      name: "eventhubs",
      description: "Eventhubs",
      loadSpec: "az/2.53.0/eventhubs",
    },
    {
      name: "extension",
      description: "Manage and update CLI extensions",
      loadSpec: "az/2.53.0/extension",
    },
    {
      name: "feature",
      description: "Manage resource provider features",
      loadSpec: "az/2.53.0/feature",
    },
    {
      name: "feedback",
      description: "Send feedback to the Azure CLI Team",
      loadSpec: "az/2.53.0/feedback",
    },
    {
      name: "find",
      description:
        "I'm an AI robot, my advice is based on our Azure documentation as well as the usage patterns of Azure CLI and Azure ARM users. Using me improves Azure products and documentation",
      loadSpec: "az/2.53.0/find",
    },
    {
      name: "fleet",
      description: "Commands to manage fleet",
      loadSpec: "az/2.53.0/fleet",
    },
    {
      name: "fluid-relay",
      description: "Manage Fluid Relay",
      loadSpec: "az/2.53.0/fluid-relay",
    },
    { name: "footprint", description: "", loadSpec: "az/2.53.0/footprint" },
    {
      name: "functionapp",
      description:
        "Manage function apps. To install the Azure Functions Core tools see https://github.com/Azure/azure-functions-core-tools",
      loadSpec: "az/2.53.0/functionapp",
    },
    {
      name: "fzf",
      description: "Commands to select active or default objects via fzf",
      loadSpec: "az/2.53.0/fzf",
    },
    {
      name: "grafana",
      description: "Commands to manage Azure Grafana instanced",
      loadSpec: "az/2.53.0/grafana",
    },
    {
      name: "graph",
      description: "Query the resources managed by Azure Resource Manager",
      loadSpec: "az/2.53.0/graph",
    },
    {
      name: "graph-services",
      description: "Make operations on Microsoft.GraphServices resource types",
      loadSpec: "az/2.53.0/graph-services",
    },
    {
      name: "group",
      description: "Manage resource groups and template deployments",
      loadSpec: "az/2.53.0/group",
    },
    {
      name: "guestconfig",
      description: "Manage Guest Configuration",
      loadSpec: "az/2.53.0/guestconfig",
    },
    {
      name: "hack",
      description:
        "Commands to manage resources commonly used for student hacks",
      loadSpec: "az/2.53.0/hack",
    },
    {
      name: "hanainstance",
      description: "(PREVIEW) Manage Azure SAP HANA Instance",
      loadSpec: "az/2.53.0/hanainstance",
    },
    {
      name: "hdinsight",
      description: "Manage HDInsight resources",
      loadSpec: "az/2.53.0/hdinsight",
    },
    {
      name: "healthbot",
      description: "Manage bot with healthbot",
      loadSpec: "az/2.53.0/healthbot",
    },
    {
      name: "healthcareapis",
      description: "Manage Healthcare Apis",
      loadSpec: "az/2.53.0/healthcareapis",
    },
    {
      name: "hpc-cache",
      description: "Commands to manage hpc cache",
      loadSpec: "az/2.53.0/hpc-cache",
    },
    {
      name: "hybridaks",
      description: "Manage hybridaks provisioned clusters",
      loadSpec: "az/2.53.0/hybridaks",
    },
    {
      name: "identity",
      description: "Managed Identities",
      loadSpec: "az/2.53.0/identity",
    },
    {
      name: "image",
      description: "Manage custom virtual machine images",
      loadSpec: "az/2.53.0/image",
    },
    {
      name: "import-export",
      description: "Manage Import Export",
      loadSpec: "az/2.53.0/import-export",
    },
    {
      name: "init",
      description: "It's an effortless setting up tool for configs",
      loadSpec: "az/2.53.0/init",
    },
    {
      name: "interactive",
      description:
        "Start interactive mode. Installs the Interactive extension if not installed already",
      loadSpec: "az/2.53.0/interactive",
    },
    {
      name: "internet-analyzer",
      description: "Commands to manage internet analyzer",
      loadSpec: "az/2.53.0/internet-analyzer",
    },
    {
      name: "iot",
      description: "Manage Internet of Things (IoT) assets",
      loadSpec: "az/2.53.0/iot",
    },
    {
      name: "k8s-configuration",
      description:
        "Commands to manage resources from Microsoft.KubernetesConfiguration",
      loadSpec: "az/2.53.0/k8s-configuration",
    },
    {
      name: "k8s-extension",
      description: "Commands to manage Kubernetes Extensions",
      loadSpec: "az/2.53.0/k8s-extension",
    },
    {
      name: "k8sconfiguration",
      description: "Commands to manage Kubernetes configuration",
      loadSpec: "az/2.53.0/k8sconfiguration",
    },
    {
      name: "keyvault",
      description: "Manage KeyVault keys, secrets, and certificates",
      loadSpec: "az/2.53.0/keyvault",
    },
    {
      name: "kusto",
      description: "Manage Azure Kusto resources",
      loadSpec: "az/2.53.0/kusto",
    },
    {
      name: "lab",
      description: "Manage Azure DevTest Labs",
      loadSpec: "az/2.53.0/lab",
    },
    {
      name: "load",
      description: "Manage Azure Load Testing resources",
      loadSpec: "az/2.53.0/load",
    },
    {
      name: "lock",
      description: "Manage Azure locks",
      loadSpec: "az/2.53.0/lock",
    },
    { name: "logic", description: "Manage logic", loadSpec: "az/2.53.0/logic" },
    {
      name: "logicapp",
      description: "Manage logic apps",
      loadSpec: "az/2.53.0/logicapp",
    },
    {
      name: "login",
      description: "Log in to Azure",
      loadSpec: "az/2.53.0/login",
    },
    {
      name: "logout",
      description: "Log out to remove access to Azure subscriptions",
      loadSpec: "az/2.53.0/logout",
    },
    {
      name: "logz",
      description: "Manage Microsoft Logz",
      loadSpec: "az/2.53.0/logz",
    },
    {
      name: "maintenance",
      description: "Manage Maintenance",
      loadSpec: "az/2.53.0/maintenance",
    },
    {
      name: "managed-cassandra",
      description: "Azure Managed Cassandra",
      loadSpec: "az/2.53.0/managed-cassandra",
    },
    {
      name: "managedapp",
      description:
        "Manage template solutions provided and maintained by Independent Software Vendors (ISVs)",
      loadSpec: "az/2.53.0/managedapp",
    },
    {
      name: "managedservices",
      description:
        "Manage the registration assignments and definitions in Azure",
      loadSpec: "az/2.53.0/managedservices",
    },
    {
      name: "managementpartner",
      description:
        "Allows the partners to associate a Microsoft Partner Network(MPN) ID to a user or service principal in the customer's Azure directory",
      loadSpec: "az/2.53.0/managementpartner",
    },
    {
      name: "maps",
      description: "Manage Azure Maps",
      loadSpec: "az/2.53.0/maps",
    },
    {
      name: "mariadb",
      description: "Manage Azure Database for MariaDB servers",
      loadSpec: "az/2.53.0/mariadb",
    },
    {
      name: "mesh",
      description: "(PREVIEW) Manage Azure Service Fabric Mesh Resources",
      loadSpec: "az/2.53.0/mesh",
    },
    {
      name: "ml",
      description:
        "Manage Azure Machine Learning resources with the Azure CLI ML extension v1",
      loadSpec: "az/2.53.0/ml",
    },
    {
      name: "mobile-network",
      description: "Manage mobile network",
      loadSpec: "az/2.53.0/mobile-network",
    },
    {
      name: "monitor",
      description: "Manage the Azure Monitor Service",
      loadSpec: "az/2.53.0/monitor",
    },
    {
      name: "mysql",
      description: "Manage Azure Database for MySQL servers",
      loadSpec: "az/2.53.0/mysql",
    },
    {
      name: "netappfiles",
      description: "Manage Azure NetApp Files (ANF) Resources",
      loadSpec: "az/2.53.0/netappfiles",
    },
    {
      name: "network",
      description: "Manage Azure Network resources",
      loadSpec: "az/2.53.0/network",
    },
    {
      name: "network-function",
      description: "Manage network function",
      loadSpec: "az/2.53.0/network-function",
    },
    {
      name: "networkcloud",
      description: "Manage Network Cloud resources",
      loadSpec: "az/2.53.0/networkcloud",
    },
    {
      name: "networkfabric",
      description: "Manage Azure Network Fabric Management Service API",
      loadSpec: "az/2.53.0/networkfabric",
    },
    {
      name: "new-relic",
      description: "Manage Azure NewRelic resources",
      loadSpec: "az/2.53.0/new-relic",
    },
    {
      name: "next",
      description: "Recommend the possible next set of commands to take",
      loadSpec: "az/2.53.0/next",
    },
    {
      name: "nginx",
      description: "Manage NGINX deployment resources",
      loadSpec: "az/2.53.0/nginx",
    },
    {
      name: "notification-hub",
      description: "Manage notification hubs",
      loadSpec: "az/2.53.0/notification-hub",
    },
    {
      name: "offazure",
      description: "Manage on-premise resources for migrate",
      loadSpec: "az/2.53.0/offazure",
    },
    {
      name: "orbital",
      description: "Azure Orbital Ground Station as-a-Service (GSaaS)",
      loadSpec: "az/2.53.0/orbital",
    },
    {
      name: "palo-alto",
      description: "Manage palo-alto networks resource",
      loadSpec: "az/2.53.0/palo-alto",
    },
    {
      name: "partnercenter",
      description: "Partner Center management",
      loadSpec: "az/2.53.0/partnercenter",
    },
    {
      name: "peering",
      description: "Manage peering",
      loadSpec: "az/2.53.0/peering",
    },
    {
      name: "pipelines",
      description: "Manage Azure Pipelines",
      loadSpec: "az/2.53.0/pipelines",
    },
    {
      name: "policy",
      description: "Manage resource policies",
      loadSpec: "az/2.53.0/policy",
    },
    {
      name: "portal",
      description: "Manage Portal",
      loadSpec: "az/2.53.0/portal",
    },
    {
      name: "postgres",
      description: "Manage Azure Database for PostgreSQL servers",
      loadSpec: "az/2.53.0/postgres",
    },
    {
      name: "powerbi",
      description: "Manage PowerBI resources",
      loadSpec: "az/2.53.0/powerbi",
    },
    {
      name: "ppg",
      description: "Manage Proximity Placement Groups",
      loadSpec: "az/2.53.0/ppg",
    },
    {
      name: "private-link",
      description: "Private-link association CLI command group",
      loadSpec: "az/2.53.0/private-link",
    },
    {
      name: "provider",
      description: "Manage resource providers",
      loadSpec: "az/2.53.0/provider",
    },
    {
      name: "providerhub",
      description: "Manage resources with ProviderHub",
      loadSpec: "az/2.53.0/providerhub",
    },
    {
      name: "purview",
      description: "Manage Purview",
      loadSpec: "az/2.53.0/purview",
    },
    {
      name: "quantum",
      description:
        "Manage Azure Quantum Workspaces and submit jobs to Azure Quantum Providers",
      loadSpec: "az/2.53.0/quantum",
    },
    {
      name: "qumulo",
      description: "Manage qumulo",
      loadSpec: "az/2.53.0/qumulo",
    },
    {
      name: "quota",
      description: "Manage Azure Quota Extension API",
      loadSpec: "az/2.53.0/quota",
    },
    {
      name: "redis",
      description: "Manage dedicated Redis caches for your Azure applications",
      loadSpec: "az/2.53.0/redis",
    },
    {
      name: "redisenterprise",
      description: "Manage the redisenterprise cache",
      loadSpec: "az/2.53.0/redisenterprise",
    },
    {
      name: "relay",
      description:
        "Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules",
      loadSpec: "az/2.53.0/relay",
    },
    {
      name: "remote-rendering-account",
      description: "Manage remote rendering account with mixed reality",
      loadSpec: "az/2.53.0/remote-rendering-account",
    },
    {
      name: "repos",
      description: "Manage Azure Repos",
      loadSpec: "az/2.53.0/repos",
    },
    {
      name: "reservations",
      description: "Azure Reservations",
      loadSpec: "az/2.53.0/reservations",
    },
    {
      name: "resource",
      description: "Manage Azure resources",
      loadSpec: "az/2.53.0/resource",
    },
    {
      name: "resource-mover",
      description: "Manage Resource Mover Service API",
      loadSpec: "az/2.53.0/resource-mover",
    },
    {
      name: "resourcemanagement",
      description: "Resourcemanagement CLI command group",
      loadSpec: "az/2.53.0/resourcemanagement",
    },
    {
      name: "rest",
      description: "Invoke a custom request",
      loadSpec: "az/2.53.0/rest",
    },
    {
      name: "restore-point",
      description: "Manage restore point with res",
      loadSpec: "az/2.53.0/restore-point",
    },
    {
      name: "role",
      description:
        "Manage user roles for access control with Azure Active Directory and service principals",
      loadSpec: "az/2.53.0/role",
    },
    {
      name: "sapmonitor",
      description: "(PREVIEW) Manage Azure SAP Monitor",
      loadSpec: "az/2.53.0/sapmonitor",
    },
    {
      name: "scenario",
      description: "E2E Scenario Usage Guidance",
      loadSpec: "az/2.53.0/scenario",
    },
    {
      name: "scvmm",
      description: "Commands for managing Arc for SCVMM resources",
      loadSpec: "az/2.53.0/scvmm",
    },
    {
      name: "search",
      description: "Manage Azure Search services, admin keys and query keys",
      loadSpec: "az/2.53.0/search",
    },
    {
      name: "security",
      description:
        "Manage your security posture with Microsoft Defender for Cloud",
      loadSpec: "az/2.53.0/security",
    },
    {
      name: "self-help",
      description:
        "Azure SelfHelp will help you troubleshoot issues with Azure resources",
      loadSpec: "az/2.53.0/self-help",
    },
    {
      name: "self-test",
      description: "Runs a self-test of the CLI",
      loadSpec: "az/2.53.0/self-test",
    },
    {
      name: "sentinel",
      description: "Manage Microsoft Sentinel",
      loadSpec: "az/2.53.0/sentinel",
    },
    {
      name: "serial-console",
      description:
        "Connect to the Serial Console of a Linux/Windows Virtual Machine or VMSS Instance",
      loadSpec: "az/2.53.0/serial-console",
    },
    {
      name: "servicebus",
      description: "Servicebus",
      loadSpec: "az/2.53.0/servicebus",
    },
    {
      name: "sf",
      description: "Manage and administer Azure Service Fabric clusters",
      loadSpec: "az/2.53.0/sf",
    },
    {
      name: "sig",
      description: "Manage shared image gallery",
      loadSpec: "az/2.53.0/sig",
    },
    {
      name: "signalr",
      description: "Manage Azure SignalR Service",
      loadSpec: "az/2.53.0/signalr",
    },
    {
      name: "site-recovery",
      description: "Manage Site Recovery Service",
      loadSpec: "az/2.53.0/site-recovery",
    },
    {
      name: "snapshot",
      description:
        "Manage point-in-time copies of managed disks, native blobs, or other snapshots",
      loadSpec: "az/2.53.0/snapshot",
    },
    {
      name: "spatial-anchors-account",
      description: "Manage spatial anchor account with mixed reality",
      loadSpec: "az/2.53.0/spatial-anchors-account",
    },
    {
      name: "sphere",
      description: "Manage Azure Sphere",
      loadSpec: "az/2.53.0/sphere",
    },
    {
      name: "spring",
      description: "Commands to manage Azure Spring Apps",
      loadSpec: "az/2.53.0/spring",
    },
    {
      name: "spring-cloud",
      description: "Commands to manage Azure Spring Cloud",
      loadSpec: "az/2.53.0/spring-cloud",
    },
    {
      name: "sql",
      description: "Manage Azure SQL Databases and Data Warehouses",
      loadSpec: "az/2.53.0/sql",
    },
    {
      name: "ssh",
      description:
        "SSH into resources (Azure VMs, Arc servers, etc) using AAD issued openssh certificates",
      loadSpec: "az/2.53.0/ssh",
    },
    {
      name: "sshkey",
      description: "Manage ssh public key with vm",
      loadSpec: "az/2.53.0/sshkey",
    },
    {
      name: "stack",
      description:
        "A deployment stack is a native Azure resource type that enables you to perform operations on a resource collection as an atomic unit",
      loadSpec: "az/2.53.0/stack",
    },
    {
      name: "stack-hci",
      description: "Manage Azure Stack HCI",
      loadSpec: "az/2.53.0/stack-hci",
    },
    {
      name: "staticwebapp",
      description: "Manage static apps",
      loadSpec: "az/2.53.0/staticwebapp",
    },
    {
      name: "storage",
      description: "Manage Azure Cloud Storage resources",
      loadSpec: "az/2.53.0/storage",
    },
    {
      name: "storage-mover",
      description: "Manage top-level Storage Mover resource",
      loadSpec: "az/2.53.0/storage-mover",
    },
    {
      name: "storagesync",
      description: "Manage Azure File Sync",
      loadSpec: "az/2.53.0/storagesync",
    },
    {
      name: "stream-analytics",
      description: "Manage Stream Analytics",
      loadSpec: "az/2.53.0/stream-analytics",
    },
    {
      name: "support",
      description: "Manage Azure support resource",
      loadSpec: "az/2.53.0/support",
    },
    {
      name: "survey",
      description: "Take Azure CLI survey",
      loadSpec: "az/2.53.0/survey",
    },
    {
      name: "synapse",
      description: "Manage and operate Synapse Workspace, Spark Pool, SQL Pool",
      loadSpec: "az/2.53.0/synapse",
    },
    {
      name: "tag",
      description: "Tag Management on a resource",
      loadSpec: "az/2.53.0/tag",
    },
    {
      name: "term",
      description: "Manage marketplace agreement with marketplaceordering",
      loadSpec: "az/2.53.0/term",
    },
    {
      name: "ts",
      description:
        "Manage template specs at subscription or resource group scope",
      loadSpec: "az/2.53.0/ts",
    },
    {
      name: "tsi",
      description: "Manage Azure Time Series Insights",
      loadSpec: "az/2.53.0/tsi",
    },
    {
      name: "upgrade",
      description: "Upgrade Azure CLI and extensions",
      loadSpec: "az/2.53.0/upgrade",
    },
    {
      name: "version",
      description:
        "Show the versions of Azure CLI modules and extensions in JSON format by default or format configured by --output",
      loadSpec: "az/2.53.0/version",
    },
    {
      name: "vm",
      description: "Manage Linux or Windows virtual machines",
      loadSpec: "az/2.53.0/vm",
    },
    {
      name: "vmss",
      description:
        "Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS)",
      loadSpec: "az/2.53.0/vmss",
    },
    {
      name: "vmware",
      description: "Commands to manage Azure VMware Solution",
      loadSpec: "az/2.53.0/vmware",
    },
    {
      name: "webapp",
      description: "Manage web apps",
      loadSpec: "az/2.53.0/webapp",
    },
    {
      name: "webpubsub",
      description: "Commands to manage Webpubsub",
      loadSpec: "az/2.53.0/webpubsub",
    },
    {
      name: "workloads",
      description: "Manage workloads",
      loadSpec: "az/2.53.0/workloads",
    },
  ],
  options: [
    {
      name: "--debug",
      description: "Increase logging verbosity to show all debug logs",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Show this help message and exit",
      isPersistent: true,
    },
    {
      name: "--only-show-errors",
      description: "Only show errors, suppressing warnings",
      isPersistent: true,
    },
    {
      name: ["--output", "-o"],
      description: "Output format",
      args: {
        name: "output",
        suggestions: ["json", "jsonc", "none", "table", "tsv", "yaml", "yamlc"],
      },
      isPersistent: true,
    },
    {
      name: "--query",
      description:
        "JMESPath query string. See http://jmespath.org/ for more information and examples",
      args: { name: "query" },
      isPersistent: true,
    },
    {
      name: "--subscription",
      description:
        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
      args: { name: "subscription" },
      isPersistent: true,
    },
    {
      name: "--verbose",
      description:
        "Increase logging verbosity. Use --debug for full debug logs",
      isPersistent: true,
    },
  ],
};

const versions: Fig.VersionDiffMap = { "2.53.0": {} };

export { versions };
export default completion;
