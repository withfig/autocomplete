const completion: Fig.Spec = {
  name: "aks",
  description: "Manage Azure Kubernetes Services",
  subcommands: [
    {
      name: "addon",
      description: "Commands to manage and view single addon conditions",
      subcommands: [
        {
          name: "disable",
          description: "Disable an enabled Kubernetes addon in a cluster",
          options: [
            {
              name: ["--addon", "-a"],
              description: "Specify the Kubernetes addon to disable",
              args: { name: "addon" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
          name: "enable",
          description: "Enable a Kubernetes addon",
          options: [
            {
              name: ["--addon", "-a"],
              description: "Specify the Kubernetes addon to enable",
              args: { name: "addon" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: "--appgw-id",
              description:
                "Resource Id of an existing Application Gateway to use with AGIC. Use with ingress-azure addon",
              args: { name: "appgw-id" },
            },
            {
              name: "--appgw-name",
              description:
                "Name of the application gateway to create/use in the node resource group. Use with ingress-azure addon",
              args: { name: "appgw-name" },
            },
            {
              name: "--appgw-subnet-cidr",
              description:
                "Subnet CIDR to use for a new subnet created to deploy the Application Gateway. Use with ingress-azure addon",
              args: { name: "appgw-subnet-cidr" },
            },
            {
              name: "--appgw-subnet-id",
              description:
                "Resource Id of an existing Subnet used to deploy the Application Gateway. Use with ingress-azure addon",
              args: { name: "appgw-subnet-id" },
            },
            {
              name: "--appgw-watch-namespace",
              description:
                "Specify the namespace, which AGIC should watch. This could be a single string value, or a comma-separated list of namespaces. Use with ingress-azure addon",
              args: { name: "appgw-watch-namespace" },
            },
            {
              name: "--data-collection-settings",
              description:
                "Path to JSON file containing data collection settings for Monitoring addon",
              args: { name: "data-collection-settings" },
            },
            {
              name: "--dns-zone-resource-ids",
              description:
                "A comma separated list of resource IDs of the DNS zone resource to use with the web_application_routing addon",
              args: { name: "dns-zone-resource-ids" },
            },
            {
              name: "--enable-msi-auth-for-monitoring",
              description:
                "Send monitoring data to Log Analytics using the cluster's assigned identity (instead of the Log Analytics Workspace's shared key)",
              args: {
                name: "enable-msi-auth-for-monitoring",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-secret-rotation",
              description:
                "Enable secret rotation. Use with azure-keyvault-secrets-provider addon",
            },
            {
              name: "--enable-sgxquotehelper",
              description: "Enable SGX quote helper for confcom addon",
            },
            {
              name: "--enable-syslog",
              description: "Enable syslog data collection for Monitoring addon",
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--rotation-poll-interval",
              description:
                "Set interval of rotation poll. Use with azure-keyvault-secrets-provider addon",
              args: { name: "rotation-poll-interval" },
            },
            {
              name: ["--subnet-name", "-s"],
              description: "The subnet name for the virtual node to use",
              args: { name: "subnet-name" },
            },
            {
              name: "--workspace-resource-id",
              description:
                "The resource ID of an existing Log Analytics Workspace to use for storing monitoring data",
              args: { name: "workspace-resource-id" },
            },
          ],
        },
        {
          name: "list",
          description: "List status of all Kubernetes addons in given cluster",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
          name: "list-available",
          description: "List available Kubernetes addons",
        },
        {
          name: "show",
          description:
            "Show status and configuration for an enabled Kubernetes addon in a given cluster",
          options: [
            {
              name: ["--addon", "-a"],
              description: "Specify the Kubernetes addon",
              args: { name: "addon" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
          description: "Update an already enabled Kubernetes addon",
          options: [
            {
              name: ["--addon", "-a"],
              description: "Specify the Kubernetes addon to update",
              args: { name: "addon" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: "--appgw-id",
              description:
                "Resource Id of an existing Application Gateway to use with AGIC. Use with ingress-azure addon",
              args: { name: "appgw-id" },
            },
            {
              name: "--appgw-name",
              description:
                "Name of the application gateway to create/use in the node resource group. Use with ingress-azure addon",
              args: { name: "appgw-name" },
            },
            {
              name: "--appgw-subnet-cidr",
              description:
                "Subnet CIDR to use for a new subnet created to deploy the Application Gateway. Use with ingress-azure addon",
              args: { name: "appgw-subnet-cidr" },
            },
            {
              name: "--appgw-subnet-id",
              description:
                "Resource Id of an existing Subnet used to deploy the Application Gateway. Use with ingress-azure addon",
              args: { name: "appgw-subnet-id" },
            },
            {
              name: "--appgw-watch-namespace",
              description:
                "Specify the namespace, which AGIC should watch. This could be a single string value, or a comma-separated list of namespaces. Use with ingress-azure addon",
              args: { name: "appgw-watch-namespace" },
            },
            {
              name: "--data-collection-settings",
              description:
                "Path to JSON file containing data collection settings for Monitoring addon",
              args: { name: "data-collection-settings" },
            },
            {
              name: "--dns-zone-resource-ids",
              description:
                "A comma separated list of resource IDs of the DNS zone resource to use with the web_application_routing addon",
              args: { name: "dns-zone-resource-ids" },
            },
            {
              name: "--enable-msi-auth-for-monitoring",
              description:
                "Send monitoring data to Log Analytics using the cluster's assigned identity (instead of the Log Analytics Workspace's shared key)",
              args: {
                name: "enable-msi-auth-for-monitoring",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-secret-rotation",
              description:
                "Enable secret rotation. Use with azure-keyvault-secrets-provider addon",
            },
            {
              name: "--enable-sgxquotehelper",
              description: "Enable SGX quote helper for confcom addon",
            },
            {
              name: "--enable-syslog",
              description: "Enable syslog data collection for Monitoring addon",
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--rotation-poll-interval",
              description:
                "Set interval of rotation poll. Use with azure-keyvault-secrets-provider addon",
              args: { name: "rotation-poll-interval" },
            },
            {
              name: ["--subnet-name", "-s"],
              description: "The subnet name for the virtual node to use",
              args: { name: "subnet-name" },
            },
            {
              name: "--workspace-resource-id",
              description:
                "The resource ID of an existing Log Analytics Workspace to use for storing monitoring data",
              args: { name: "workspace-resource-id" },
            },
          ],
        },
      ],
    },
    {
      name: "app",
      description: "Commands to manage AKS app",
      subcommands: [
        {
          name: "up",
          description: "Deploy to AKS via GitHub actions",
          options: [
            {
              name: "--acr",
              description:
                "Name of the Azure Container Registry to be used for pushing the image",
              args: { name: "acr" },
            },
            {
              name: "--aks-cluster",
              description: "Name of the cluster to select for deployment",
              args: { name: "aks-cluster" },
            },
            {
              name: "--branch-name",
              description:
                "New branch name to be created to check in files and raise a PR",
              args: { name: "branch-name" },
            },
            {
              name: "--do-not-wait",
              description: "Do not wait for workflow completion",
            },
            {
              name: "--port",
              description:
                "Port on which your application runs. Default is 8080",
              args: { name: "port" },
            },
            {
              name: ["--repository", "-r"],
              description:
                "GitHub repository URL e.g. https://github.com/azure/azure-cli",
              args: { name: "repository" },
            },
          ],
        },
      ],
    },
    {
      name: "browse",
      description:
        "Show the dashboard for a Kubernetes cluster in a web browser",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--disable-browser",
          description:
            "Don't launch a web browser after establishing port-forwarding",
        },
        {
          name: "--listen-address",
          description: "The listening address for the dashboard",
          args: { name: "listen-address" },
        },
        {
          name: "--listen-port",
          description: "The listening port for the dashboard",
          args: { name: "listen-port" },
        },
      ],
    },
    {
      name: "check-acr",
      description: "Validate an ACR is accessible from an AKS cluster",
      options: [
        {
          name: "--acr",
          description: "The FQDN of the ACR",
          args: { name: "acr" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--node-name",
          description:
            "The name of a specific node to perform acr pull test checks. If not specified, it will be checked on a random node",
          args: { name: "node-name" },
        },
      ],
    },
    {
      name: "create",
      description: "Create a new managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--aad-admin-group-object-ids",
          description:
            "Comma seperated list of aad group object IDs that will be set as cluster admin",
          args: { name: "aad-admin-group-object-ids" },
        },
        {
          name: "--aad-tenant-id",
          description: "The ID of an Azure Active Directory tenant",
          args: { name: "aad-tenant-id" },
        },
        {
          name: "--aci-subnet-name",
          description:
            "The name of a subnet in an existing VNet into which to deploy the virtual nodes",
          args: { name: "aci-subnet-name" },
        },
        {
          name: ["--admin-username", "-u"],
          description: "User account to create on node VMs for SSH access",
          args: { name: "admin-username" },
        },
        {
          name: "--aks-custom-headers",
          description:
            "Comma-separated key-value pairs to specify custom headers",
          args: { name: "aks-custom-headers" },
        },
        {
          name: "--api-server-authorized-ip-ranges",
          description:
            "Comma seperated list of authorized apiserver IP ranges. Set to 0.0.0.0/32 to restrict apiserver traffic to node pools",
          args: { name: "api-server-authorized-ip-ranges" },
        },
        {
          name: "--appgw-id",
          description:
            "Resource Id of an existing Application Gateway to use with AGIC. Use with ingress-azure addon",
          args: { name: "appgw-id" },
        },
        {
          name: "--appgw-name",
          description:
            "Name of the application gateway to create/use in the node resource group. Use with ingress-azure addon",
          args: { name: "appgw-name" },
        },
        {
          name: "--appgw-subnet-cidr",
          description:
            "Subnet CIDR to use for a new subnet created to deploy the Application Gateway. Use with ingress-azure addon",
          args: { name: "appgw-subnet-cidr" },
        },
        {
          name: "--appgw-subnet-id",
          description:
            "Resource Id of an existing Subnet used to deploy the Application Gateway. Use with ingress-azure addon",
          args: { name: "appgw-subnet-id" },
        },
        {
          name: "--appgw-watch-namespace",
          description:
            "Specify the namespace, which AGIC should watch. This could be a single string value, or a comma-separated list of namespaces",
          args: { name: "appgw-watch-namespace" },
        },
        {
          name: "--assign-identity",
          description:
            "Specify an existing user assigned identity for control plane's usage in order to manage cluster resource group",
          args: { name: "assign-identity" },
        },
        {
          name: "--assign-kubelet-identity",
          description:
            "Specify an existing user assigned identity for kubelet's usage, which is typically used to pull image from ACR",
          args: { name: "assign-kubelet-identity" },
        },
        {
          name: "--attach-acr",
          description:
            "Grant the 'acrpull' role assignment to the ACR specified by name or resource ID",
          args: { name: "attach-acr" },
        },
        {
          name: "--auto-upgrade-channel",
          description: "Specify the upgrade channel for autoupgrade",
          args: {
            name: "auto-upgrade-channel",
            suggestions: ["node-image", "none", "patch", "rapid", "stable"],
          },
        },
        {
          name: "--azure-keyvault-kms-key-id",
          description: "Identifier of Azure Key Vault key",
          args: { name: "azure-keyvault-kms-key-id" },
        },
        {
          name: "--azure-keyvault-kms-key-vault-network-access",
          description: "Network Access of Azure Key Vault",
          args: {
            name: "azure-keyvault-kms-key-vault-network-access",
            suggestions: ["Private", "Public"],
          },
        },
        {
          name: "--azure-keyvault-kms-key-vault-resource-id",
          description: "Resource ID of Azure Key Vault",
          args: { name: "azure-keyvault-kms-key-vault-resource-id" },
        },
        {
          name: "--azure-monitor-workspace-resource-id",
          description: "Resource ID of the Azure Monitor Workspace",
          args: { name: "azure-monitor-workspace-resource-id" },
        },
        {
          name: ["--cluster-autoscaler-profile", "--ca-profile"],
          description:
            "Comma-separated list of key=value pairs for configuring cluster autoscaler. Pass an empty string to clear the profile",
          args: { name: "cluster-autoscaler-profile" },
        },
        {
          name: "--client-secret",
          description:
            "Secret associated with the service principal. This argument is required if --service-principal is specified",
          args: { name: "client-secret" },
        },
        {
          name: "--data-collection-settings",
          description:
            "Path to JSON file containing data collection settings for Monitoring addon",
          args: { name: "data-collection-settings" },
        },
        {
          name: "--defender-config",
          description:
            "Path to JSON file containing Microsoft Defender profile configurations",
          args: { name: "defender-config" },
        },
        {
          name: "--disable-disk-driver",
          description: "Disable AzureDisk CSI Driver",
        },
        {
          name: "--disable-file-driver",
          description: "Disable AzureFile CSI Driver",
        },
        {
          name: "--disable-local-accounts",
          description:
            "If set to true, getting static credential will be disabled for this cluster",
        },
        {
          name: "--disable-public-fqdn",
          description: "Disable public fqdn feature for private cluster",
        },
        {
          name: "--disable-rbac",
          description: "Disable Kubernetes Role-Based Access Control",
          args: { name: "disable-rbac" },
        },
        {
          name: "--disable-snapshot-controller",
          description: "Disable CSI Snapshot Controller",
        },
        {
          name: ["--dns-name-prefix", "-p"],
          description:
            "Prefix for hostnames that are created. If not specified, generate a hostname using the managed cluster and resource group names",
          args: { name: "dns-name-prefix" },
        },
        {
          name: "--dns-service-ip",
          description: "An IP address assigned to the Kubernetes DNS service",
          args: { name: "dns-service-ip" },
        },
        {
          name: "--edge-zone",
          description: "The name of the Edge Zone",
          args: { name: "edge-zone" },
        },
        {
          name: "--enable-aad",
          description: "Enable managed AAD feature for cluster",
        },
        {
          name: ["--enable-addons", "-a"],
          description: "Enable the Kubernetes addons in a comma-separated list",
          args: { name: "enable-addons" },
        },
        {
          name: "--enable-ahub",
          description:
            "Enable Azure Hybrid User Benefits (AHUB) for Windows VMs",
        },
        {
          name: "--enable-azure-keyvault-kms",
          description: "Enable Azure KeyVault Key Management Service",
        },
        {
          name: "--enable-azure-monitor-metrics",
          description:
            "Enable a kubernetes cluster with the Azure Monitor managed service for Prometheus integration",
        },
        {
          name: "--enable-azure-rbac",
          description:
            "Enable Azure RBAC to control authorization checks on cluster",
        },
        {
          name: "--enable-blob-driver",
          description: "Enable AzureBlob CSI Driver",
          args: { name: "enable-blob-driver" },
        },
        {
          name: "--enable-cluster-autoscaler",
          description: "Enable cluster autoscaler, default value is false",
        },
        {
          name: "--enable-defender",
          description: "Enable Microsoft Defender security profile",
        },
        {
          name: "--enable-encryption-at-host",
          description: "Enable EncryptionAtHost, default value is false",
        },
        {
          name: "--enable-fips-image",
          description: "Use FIPS-enabled OS on agent nodes",
        },
        {
          name: "--enable-image-cleaner",
          description: "Enable ImageCleaner Service",
        },
        {
          name: "--enable-keda",
          description: "Enable KEDA workload auto-scaler",
        },
        {
          name: "--enable-managed-identity",
          description:
            "Using a system assigned managed identity to manage cluster resource group",
          args: { name: "enable-managed-identity" },
        },
        {
          name: "--enable-msi-auth-for-monitoring",
          description: "Enable Managed Identity Auth for Monitoring addon",
          args: {
            name: "enable-msi-auth-for-monitoring",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-node-public-ip",
          description: "Enable VMSS node public IP",
        },
        { name: "--enable-oidc-issuer", description: "Enable OIDC issuer" },
        {
          name: "--enable-private-cluster",
          description: "Enable private cluster",
        },
        {
          name: "--enable-secret-rotation",
          description:
            "Enable secret rotation. Use with azure-keyvault-secrets-provider addon",
        },
        {
          name: "--enable-sgxquotehelper",
          description: "Enable SGX quote helper for confcom addon",
        },
        {
          name: "--enable-syslog",
          description: "Enable syslog data collection for Monitoring addon",
        },
        {
          name: "--enable-ultra-ssd",
          description: "Enable UltraSSD, default value is false",
        },
        {
          name: "--enable-vpa",
          description: "Enable vertical pod autoscaler for cluster",
        },
        { name: "--enable-windows-gmsa", description: "Enable Windows gmsa" },
        {
          name: "--enable-windows-recording-rules",
          description:
            "Enable Windows Recording Rules when enabling the Azure Monitor Metrics addon",
        },
        {
          name: "--enable-workload-identity",
          description: "Enable workload identity addon",
        },
        {
          name: "--fqdn-subdomain",
          description:
            "Prefix for FQDN that is created for private cluster with custom private dns zone scenario",
          args: { name: "fqdn-subdomain" },
        },
        {
          name: "--generate-ssh-keys",
          description:
            "Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory",
        },
        {
          name: "--gmsa-dns-server",
          description: "Specify DNS server for Windows gmsa for this cluster",
          args: { name: "gmsa-dns-server" },
        },
        {
          name: "--gmsa-root-domain-name",
          description:
            "Specify root domain name for Windows gmsa for this cluster",
          args: { name: "gmsa-root-domain-name" },
        },
        {
          name: "--gpu-instance-profile",
          description:
            "GPU instance profile to partition multi-gpu Nvidia GPUs",
          args: {
            name: "gpu-instance-profile",
            suggestions: ["MIG1g", "MIG2g", "MIG3g", "MIG4g", "MIG7g"],
          },
        },
        {
          name: "--grafana-resource-id",
          description: "Resource ID of the Azure Managed Grafana Workspace",
          args: { name: "grafana-resource-id" },
        },
        {
          name: "--host-group-id",
          description:
            "The fully qualified dedicated host group id used to provision agent node pool",
          args: { name: "host-group-id" },
        },
        {
          name: "--http-proxy-config",
          description: "HTTP Proxy configuration for this cluster",
          args: { name: "http-proxy-config" },
        },
        {
          name: "--image-cleaner-interval-hours",
          description: "ImageCleaner scanning interval",
          args: { name: "image-cleaner-interval-hours" },
        },
        {
          name: "--ip-families",
          description:
            "A comma separated list of IP versions to use for cluster networking",
          args: { name: "ip-families" },
        },
        {
          name: "--k8s-support-plan",
          description:
            'Choose from "KubernetesOfficial" or "AKSLongTermSupport", with "AKSLongTermSupport" you get 1 extra year of CVE patchs',
          args: {
            name: "k8s-support-plan",
            suggestions: ["AKSLongTermSupport", "KubernetesOfficial"],
          },
        },
        {
          name: "--ksm-metric-annotations-allow-list",
          description:
            "Comma-separated list of additional Kubernetes label keys that will be used in the resource' labels metric. By default the metric contains only name and namespace labels. To include additional labels provide a list of resource names in their plural form and Kubernetes label keys you would like to allow for them (e.g.'=namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...)'. A single '' can be provided per resource instead to allow any labels, but that has severe performance implications (e.g. '=pods=[]')",
          args: { name: "ksm-metric-annotations-allow-list" },
        },
        {
          name: "--ksm-metric-labels-allow-list",
          description:
            "Comma-separated list of additional Kubernetes label keys that will be used in the resource' labels metric. By default the metric contains only name and namespace labels. To include additional labels provide a list of resource names in their plural form and Kubernetes label keys you would like to allow for them (e.g. '=namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...)'. A single '' can be provided per resource instead to allow any labels, but that has severe performance implications (e.g. '=pods=[]')",
          args: { name: "ksm-metric-labels-allow-list" },
        },
        {
          name: "--kubelet-config",
          description:
            "Path to JSON file containing Kubelet configurations for agent nodes. https://aka.ms/aks/custom-node-config",
          args: { name: "kubelet-config" },
        },
        {
          name: ["--kubernetes-version", "-k"],
          description:
            'Version of Kubernetes to use for creating the cluster, such as "1.16.9". value from: `az aks get-versions`',
          args: { name: "kubernetes-version" },
        },
        {
          name: "--linux-os-config",
          description:
            "Path to JSON file containing OS configurations for Linux agent nodes. https://aka.ms/aks/custom-node-config",
          args: { name: "linux-os-config" },
        },
        {
          name: "--load-balancer-idle-timeout",
          description: "Load balancer idle timeout in minutes",
          args: { name: "load-balancer-idle-timeout" },
        },
        {
          name: "--load-balancer-managed-outbound-ip-count",
          description: "Load balancer managed outbound IP count",
          args: { name: "load-balancer-managed-outbound-ip-count" },
        },
        {
          name: "--load-balancer-managed-outbound-ipv6-count",
          description: "Load balancer managed outbound IPv6 IP count",
          args: { name: "load-balancer-managed-outbound-ipv6-count" },
        },
        {
          name: "--load-balancer-outbound-ip-prefixes",
          description: "Load balancer outbound IP prefix resource IDs",
          args: { name: "load-balancer-outbound-ip-prefixes" },
        },
        {
          name: "--load-balancer-outbound-ips",
          description: "Load balancer outbound IP resource IDs",
          args: { name: "load-balancer-outbound-ips" },
        },
        {
          name: "--load-balancer-outbound-ports",
          description: "Load balancer outbound allocated ports",
          args: { name: "load-balancer-outbound-ports" },
        },
        {
          name: "--load-balancer-sku",
          description:
            "Azure Load Balancer SKU selection for your cluster. basic or standard. Defaults to 'standard'",
          args: {
            name: "load-balancer-sku",
            suggestions: ["basic", "standard"],
          },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--max-count",
          description:
            'Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 1000]',
          args: { name: "max-count" },
        },
        {
          name: ["--max-pods", "-m"],
          description: "The maximum number of pods deployable to a node",
          args: { name: "max-pods" },
        },
        {
          name: "--min-count",
          description:
            'Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 1000]',
          args: { name: "min-count" },
        },
        {
          name: "--nat-gateway-idle-timeout",
          description: "NAT gateway idle timeout in minutes",
          args: { name: "nat-gateway-idle-timeout" },
        },
        {
          name: "--nat-gateway-managed-outbound-ip-count",
          description: "NAT gateway managed outbound IP count",
          args: { name: "nat-gateway-managed-outbound-ip-count" },
        },
        {
          name: "--network-dataplane",
          description: "The network dataplane to use",
          args: { name: "network-dataplane", suggestions: ["azure", "cilium"] },
        },
        {
          name: "--network-plugin",
          description: "The Kubernetes network plugin to use",
          args: {
            name: "network-plugin",
            suggestions: ["azure", "kubenet", "none"],
          },
        },
        {
          name: "--network-plugin-mode",
          description: "The network plugin mode to use",
          args: { name: "network-plugin-mode", suggestions: ["overlay"] },
        },
        {
          name: "--network-policy",
          description: "The Kubernetes network policy to use",
          args: { name: "network-policy" },
        },
        {
          name: ["--no-ssh-key", "-x"],
          description: "Do not use or create a local SSH key",
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--node-count", "-c"],
          description:
            "Number of nodes in the Kubernetes node pool. After creating a cluster, you can change the size of its node pool with az aks scale",
          args: { name: "node-count" },
        },
        {
          name: "--node-os-upgrade-channel",
          description:
            "Manner in which the OS on your nodes is updated. It could be NodeImage, None, SecurityPatch or Unmanaged",
          args: {
            name: "node-os-upgrade-channel",
            suggestions: ["NodeImage", "None", "Unmanaged"],
          },
        },
        {
          name: ["--node-osdisk-diskencryptionset-id", "-d"],
          description:
            "ResourceId of the disk encryption set to use for enabling encryption at rest on agent node os disk",
          args: { name: "node-osdisk-diskencryptionset-id" },
        },
        {
          name: "--node-osdisk-size",
          description:
            "Size in GB of the OS disk for each node in the node pool. Minimum 30 GB",
          args: { name: "node-osdisk-size" },
        },
        {
          name: "--node-osdisk-type",
          description:
            "OS disk type to be used for machines in a given agent pool: Ephemeral or Managed. Defaults to 'Ephemeral' when possible in conjunction with VM size and OS disk size. May not be changed for this pool after creation",
          args: {
            name: "node-osdisk-type",
            suggestions: ["Ephemeral", "Managed"],
          },
        },
        {
          name: "--node-public-ip-prefix-id",
          description:
            "Public IP prefix ID used to assign public IPs to VMSS nodes",
          args: { name: "node-public-ip-prefix-id" },
        },
        {
          name: "--node-resource-group",
          description:
            "The node resource group is the resource group where all customer's resources will be created in, such as virtual machines",
          args: { name: "node-resource-group" },
        },
        {
          name: ["--node-vm-size", "-s"],
          description: "Size of Virtual Machines to create as Kubernetes nodes",
          args: { name: "node-vm-size" },
        },
        {
          name: "--nodepool-labels",
          description:
            "The node labels for all node pool. See https://aka.ms/node-labels for syntax of labels",
          args: { name: "nodepool-labels" },
        },
        {
          name: "--nodepool-name",
          description: "Node pool name, up to 12 alphanumeric characters",
          args: { name: "nodepool-name" },
        },
        {
          name: "--nodepool-tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "nodepool-tags" },
        },
        {
          name: "--nodepool-taints",
          description: "The node taints for all node pool",
          args: { name: "nodepool-taints" },
        },
        {
          name: "--os-sku",
          description:
            "The OS SKU of the agent node pool. Ubuntu or CBLMariner",
          args: {
            name: "os-sku",
            suggestions: ["AzureLinux", "CBLMariner", "Mariner", "Ubuntu"],
          },
        },
        {
          name: "--outbound-type",
          description: "How outbound traffic will be configured for a cluster",
          args: {
            name: "outbound-type",
            suggestions: [
              "loadBalancer",
              "managedNATGateway",
              "userAssignedNATGateway",
              "userDefinedRouting",
            ],
          },
        },
        {
          name: "--pod-cidr",
          description:
            "A CIDR notation IP range from which to assign pod IPs when kubenet is used",
          args: { name: "pod-cidr" },
        },
        {
          name: "--pod-cidrs",
          description:
            "A comma separated list of CIDR notation IP ranges from which to assign pod IPs when kubenet is used",
          args: { name: "pod-cidrs" },
        },
        {
          name: "--pod-subnet-id",
          description:
            "The ID of a subnet in an existing VNet into which to assign pods in the cluster (requires azure network-plugin)",
          args: { name: "pod-subnet-id" },
        },
        {
          name: "--ppg",
          description: "The ID of a PPG",
          args: { name: "ppg" },
        },
        {
          name: "--private-dns-zone",
          description: "Private dns zone mode for private cluster",
          args: { name: "private-dns-zone" },
        },
        {
          name: "--rotation-poll-interval",
          description:
            "Set interval of rotation poll. Use with azure-keyvault-secrets-provider addon",
          args: { name: "rotation-poll-interval" },
        },
        {
          name: "--service-cidr",
          description:
            "A CIDR notation IP range from which to assign service cluster IPs",
          args: { name: "service-cidr" },
        },
        {
          name: "--service-cidrs",
          description:
            "A comma separated list of CIDR notation IP ranges from which to assign service cluster IPs",
          args: { name: "service-cidrs" },
        },
        {
          name: "--service-principal",
          description:
            "Service principal used for authentication to Azure APIs",
          args: { name: "service-principal" },
        },
        {
          name: "--skip-subnet-role-assignment",
          description: "Skip role assignment for subnet (advanced networking)",
        },
        {
          name: "--snapshot-id",
          description: "The source snapshot id used to create this cluster",
          args: { name: "snapshot-id" },
        },
        {
          name: "--ssh-key-value",
          description:
            "Public key path or key contents to install on node VMs for SSH access. For example, 'ssh-rsa AAAAB...snip...UcyupgH azureuser@linuxvm'",
          args: { name: "ssh-key-value" },
        },
        {
          name: "--tags",
          description:
            "The tags of the managed cluster. The managed cluster instance and all resources managed by the cloud provider will be tagged",
          args: { name: "tags" },
        },
        {
          name: "--tier",
          description:
            "Specify SKU tier for managed clusters. '--tier standard' enables a standard managed cluster service with a financially backed SLA. '--tier free' does not have a financially backed SLA",
          args: { name: "tier", suggestions: ["free", "premium", "standard"] },
        },
        {
          name: "--vm-set-type",
          description:
            "Agent pool vm set type. VirtualMachineScaleSets or AvailabilitySet. Defaults to 'VirtualMachineScaleSets'",
          args: { name: "vm-set-type" },
        },
        {
          name: "--vnet-subnet-id",
          description:
            "The ID of a subnet in an existing VNet into which to deploy the cluster",
          args: { name: "vnet-subnet-id" },
        },
        {
          name: "--windows-admin-password",
          description: "User account password to use on windows node VMs",
          args: { name: "windows-admin-password" },
        },
        {
          name: "--windows-admin-username",
          description: "User account to create on windows node VMs",
          args: { name: "windows-admin-username" },
        },
        {
          name: "--workspace-resource-id",
          description:
            "The resource ID of an existing Log Analytics Workspace to use for storing monitoring data. If not specified, uses the default Log Analytics Workspace if it exists, otherwise creates one",
          args: { name: "workspace-resource-id" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
        {
          name: ["--zones", "-z"],
          description:
            "Availability zones where agent nodes will be placed. Also, to install agent nodes to more than one zones you need to pass zone numbers (1,2 or 3) separated by blanks. For example - To have all 3 zones, you are expected to enter --zones 1 2 3",
          args: { name: "zones", suggestions: ["1", "2", "3"] },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "disable-addons",
      description: "Disable Kubernetes addons",
      options: [
        {
          name: ["--addons", "-a"],
          description:
            "Disable the Kubernetes addons in a comma-separated list",
          args: { name: "addons" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
      name: "enable-addons",
      description: "Enable Kubernetes addons",
      options: [
        {
          name: ["--addons", "-a"],
          description: "Enable the Kubernetes addons in a comma-separated list",
          args: { name: "addons" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--appgw-id",
          description:
            "Resource Id of an existing Application Gateway to use with AGIC. Use with ingress-azure addon",
          args: { name: "appgw-id" },
        },
        {
          name: "--appgw-name",
          description:
            "Name of the application gateway to create/use in the node resource group. Use with ingress-azure addon",
          args: { name: "appgw-name" },
        },
        {
          name: "--appgw-subnet-cidr",
          description:
            "Subnet CIDR to use for a new subnet created to deploy the Application Gateway. Use with ingress-azure addon",
          args: { name: "appgw-subnet-cidr" },
        },
        {
          name: "--appgw-subnet-id",
          description:
            "Resource Id of an existing Subnet used to deploy the Application Gateway. Use with ingress-azure addon",
          args: { name: "appgw-subnet-id" },
        },
        {
          name: "--appgw-watch-namespace",
          description:
            "Specify the namespace, which AGIC should watch. This could be a single string value, or a comma-separated list of namespaces",
          args: { name: "appgw-watch-namespace" },
        },
        {
          name: "--data-collection-settings",
          description:
            "Path to JSON file containing data collection settings for Monitoring addon",
          args: { name: "data-collection-settings" },
        },
        {
          name: "--enable-msi-auth-for-monitoring",
          description: "Enable Managed Identity Auth for Monitoring addon",
          args: {
            name: "enable-msi-auth-for-monitoring",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-secret-rotation",
          description:
            "Enable secret rotation. Use with azure-keyvault-secrets-provider addon",
        },
        {
          name: "--enable-sgxquotehelper",
          description: "Enable SGX quote helper for confcom addon",
        },
        {
          name: "--enable-syslog",
          description: "Enable syslog data collection for Monitoring addon",
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--rotation-poll-interval",
          description:
            "Set interval of rotation poll. Use with azure-keyvault-secrets-provider addon",
          args: { name: "rotation-poll-interval" },
        },
        {
          name: ["--subnet-name", "-s"],
          description:
            "Name of an existing subnet to use with the virtual-node add-on",
          args: { name: "subnet-name" },
        },
        {
          name: "--workspace-resource-id",
          description:
            "The resource ID of an existing Log Analytics Workspace to use for storing monitoring data",
          args: { name: "workspace-resource-id" },
        },
      ],
    },
    {
      name: "get-credentials",
      description: "Get access credentials for a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: ["--admin", "-a"],
          description:
            "Get cluster administrator credentials. Default: cluster user credentials",
        },
        {
          name: "--context",
          description:
            "If specified, overwrite the default context name. The --admin parameter takes precedence over --context",
          args: { name: "context" },
        },
        {
          name: ["--file", "-f"],
          description:
            'Kubernetes configuration file to update. Use "-" to print YAML to stdout instead',
          args: { name: "file" },
        },
        {
          name: "--format",
          description:
            'Specify the format of the returned credential. Available values are ["exec", "azure"]. Only take effect when requesting clusterUser credential of AAD clusters',
          args: { name: "format" },
        },
        {
          name: "--overwrite-existing",
          description:
            "Overwrite any existing cluster entry with the same name",
        },
        {
          name: "--public-fqdn",
          description:
            "Get private cluster credential with server address to be public fqdn",
        },
      ],
    },
    {
      name: "get-os-options",
      description:
        "Get the OS options available for creating a managed Kubernetes cluster",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
      ],
    },
    {
      name: "get-upgrades",
      description:
        "Get the upgrade versions available for a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
      name: "get-versions",
      description:
        "Get the versions available for creating a managed Kubernetes cluster",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
      ],
    },
    {
      name: "install-cli",
      description:
        "Download and install kubectl, the Kubernetes command-line tool. Download and install kubelogin, a client-go credential (exec) plugin implementing azure authentication",
      options: [
        {
          name: "--base-src-url",
          description: "Base download source URL for kubectl releases",
          args: { name: "base-src-url" },
        },
        {
          name: "--client-version",
          description: "Version of kubectl to install",
          args: { name: "client-version" },
        },
        {
          name: "--install-location",
          description:
            "Path at which to install kubectl. Note: the path should contain the binary filename",
          args: { name: "install-location" },
        },
        {
          name: ["--kubelogin-base-src-url", "-l"],
          description: "Base download source URL for kubelogin releases",
          args: { name: "kubelogin-base-src-url" },
        },
        {
          name: "--kubelogin-install-location",
          description:
            "Path at which to install kubelogin. Note: the path should contain the binary filename",
          args: { name: "kubelogin-install-location" },
        },
        {
          name: "--kubelogin-version",
          description: "Version of kubelogin to install",
          args: { name: "kubelogin-version" },
        },
      ],
    },
    {
      name: "kanalyze",
      description:
        "Display diagnostic results for the Kubernetes cluster after kollect is done",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
      name: "kollect",
      description:
        "Collecting diagnostic information for the Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--container-logs",
          description: "The list of container logs to collect",
          args: { name: "container-logs" },
        },
        {
          name: "--kube-objects",
          description: "The list of kubernetes objects to describe",
          args: { name: "kube-objects" },
        },
        {
          name: "--node-logs",
          description:
            "The list of node logs to collect for Linux nodes. For example, /var/log/cloud-init.log",
          args: { name: "node-logs" },
        },
        {
          name: "--node-logs-windows",
          description:
            "The list of node logs to collect for Windows nodes. For example, C:\\AzureData\\CustomDataSetupScript.log",
          args: { name: "node-logs-windows" },
        },
        {
          name: "--sas-token",
          description:
            "The SAS token with writable permission for the storage account",
          args: { name: "sas-token" },
        },
        {
          name: "--storage-account",
          description:
            "Name or ID of the storage account to save the diagnostic information",
          args: { name: "storage-account" },
        },
      ],
    },
    {
      name: "list",
      description: "List managed Kubernetes clusters",
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
      name: "operation-abort",
      description: "Abort last running operation on managed cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
      name: "remove-dev-spaces",
      description: "Remove Azure Dev Spaces from a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "rotate-certs",
      description:
        "Rotate certificates and keys on a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "scale",
      description: "Scale the node pool in a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--node-count", "-c"],
          description: "Number of nodes in the Kubernetes node pool",
          args: { name: "node-count" },
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
        {
          name: "--nodepool-name",
          description: "Node pool name, up to 12 alphanumeric characters",
          args: { name: "nodepool-name" },
        },
      ],
    },
    {
      name: "show",
      description: "Show the details for a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
      description: "Starts a previously stopped Managed Cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
      description: "Stops a Managed Cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
      description:
        "Update a managed Kubernetes cluster. When called with no optional arguments this attempts to move the cluster to its goal state without changing the current cluster configuration. This can be used to move out of a non succeeded state",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--aad-admin-group-object-ids",
          description:
            "Comma seperated list of aad group object IDs that will be set as cluster admin",
          args: { name: "aad-admin-group-object-ids" },
        },
        {
          name: "--aad-tenant-id",
          description: "The ID of an Azure Active Directory tenant",
          args: { name: "aad-tenant-id" },
        },
        {
          name: "--aks-custom-headers",
          description:
            "Comma-separated key-value pairs to specify custom headers",
          args: { name: "aks-custom-headers" },
        },
        {
          name: "--api-server-authorized-ip-ranges",
          description:
            'Comma seperated list of authorized apiserver IP ranges. Set to "" to allow all traffic on a previously restricted cluster. Set to 0.0.0.0/32 to restrict apiserver traffic to node pools',
          args: { name: "api-server-authorized-ip-ranges" },
        },
        {
          name: "--assign-identity",
          description:
            "Specify an existing user assigned identity to manage cluster resource group",
          args: { name: "assign-identity" },
        },
        {
          name: "--assign-kubelet-identity",
          description:
            "Update cluster's kubelet identity to an existing user assigned identity. Please note this operation will recreate all agent nodes in the cluster",
          args: { name: "assign-kubelet-identity" },
        },
        {
          name: "--attach-acr",
          description:
            "Grant the 'acrpull' role assignment to the ACR specified by name or resource ID",
          args: { name: "attach-acr" },
        },
        {
          name: "--auto-upgrade-channel",
          description: "Specify the upgrade channel for autoupgrade",
          args: {
            name: "auto-upgrade-channel",
            suggestions: ["node-image", "none", "patch", "rapid", "stable"],
          },
        },
        {
          name: "--azure-keyvault-kms-key-id",
          description: "Identifier of Azure Key Vault key",
          args: { name: "azure-keyvault-kms-key-id" },
        },
        {
          name: "--azure-keyvault-kms-key-vault-network-access",
          description: "Network Access of Azure Key Vault",
          args: {
            name: "azure-keyvault-kms-key-vault-network-access",
            suggestions: ["Private", "Public"],
          },
        },
        {
          name: "--azure-keyvault-kms-key-vault-resource-id",
          description: "Resource ID of Azure Key Vault",
          args: { name: "azure-keyvault-kms-key-vault-resource-id" },
        },
        {
          name: "--azure-monitor-workspace-resource-id",
          description: "Resource ID of the Azure Monitor Workspace",
          args: { name: "azure-monitor-workspace-resource-id" },
        },
        {
          name: ["--cluster-autoscaler-profile", "--ca-profile"],
          description:
            "Comma-separated list of key=value pairs for configuring cluster autoscaler. Pass an empty string to clear the profile",
          args: { name: "cluster-autoscaler-profile" },
        },
        {
          name: "--defender-config",
          description:
            "Path to JSON file containing Microsoft Defender profile configurations",
          args: { name: "defender-config" },
        },
        {
          name: "--detach-acr",
          description:
            "Disable the 'acrpull' role assignment to the ACR specified by name or resource ID",
          args: { name: "detach-acr" },
        },
        {
          name: "--disable-ahub",
          description:
            "Disable Azure Hybrid User Benefits (AHUB) feature for cluster",
        },
        {
          name: "--disable-azure-keyvault-kms",
          description: "Disable Azure KeyVault Key Management Service",
        },
        {
          name: "--disable-azure-monitor-metrics",
          description:
            "Disable Azure Monitor Metrics Profile. This will delete all DCRA's associated with the cluster, any linked DCRs with the data stream = prometheus-stream and the recording rule groups created by the addon for this AKS cluster",
        },
        {
          name: "--disable-azure-rbac",
          description:
            "Disable Azure RBAC to control authorization checks on cluster",
        },
        {
          name: "--disable-blob-driver",
          description: "Disable AzureBlob CSI Driver",
          args: { name: "disable-blob-driver" },
        },
        {
          name: ["--disable-cluster-autoscaler", "-d"],
          description: "Disable cluster autoscaler",
        },
        { name: "--disable-defender", description: "Disable defender profile" },
        {
          name: "--disable-disk-driver",
          description: "Disable AzureDisk CSI Driver",
        },
        {
          name: "--disable-file-driver",
          description: "Disable AzureFile CSI Driver",
        },
        {
          name: "--disable-force-upgrade",
          description: "Disable forceUpgrade cluster upgrade settings override",
        },
        {
          name: "--disable-image-cleaner",
          description: "Disable ImageCleaner Service",
        },
        {
          name: "--disable-keda",
          description: "Disable KEDA workload auto-scaler",
        },
        {
          name: "--disable-local-accounts",
          description:
            "If set to true, getting static credential will be disabled for this cluster",
        },
        {
          name: "--disable-public-fqdn",
          description: "Disable public fqdn feature for private cluster",
        },
        {
          name: "--disable-secret-rotation",
          description:
            "Disable secret rotation. Use with azure-keyvault-secrets-provider addon",
        },
        {
          name: "--disable-snapshot-controller",
          description: "Disable CSI Snapshot Controller",
        },
        {
          name: "--disable-vpa",
          description: "Disable vertical pod autoscaler for cluster",
        },
        {
          name: "--disable-windows-gmsa",
          description: "Disable Windows gmsa on cluster",
        },
        {
          name: "--disable-workload-identity",
          description: "Disable workload identity addon",
        },
        {
          name: "--enable-aad",
          description: "Enable managed AAD feature for cluster",
        },
        {
          name: "--enable-ahub",
          description:
            "Enable Azure Hybrid User Benefits (AHUB) feature for cluster",
        },
        {
          name: "--enable-azure-keyvault-kms",
          description: "Enable Azure KeyVault Key Management Service",
        },
        {
          name: "--enable-azure-monitor-metrics",
          description:
            "Enable a kubernetes cluster with the Azure Monitor managed service for Prometheus integration",
        },
        {
          name: "--enable-azure-rbac",
          description:
            "Enable Azure RBAC to control authorization checks on cluster",
        },
        {
          name: "--enable-blob-driver",
          description: "Enable AzureBlob CSI Driver",
          args: { name: "enable-blob-driver" },
        },
        {
          name: ["--enable-cluster-autoscaler", "-e"],
          description: "Enable cluster autoscaler",
        },
        {
          name: "--enable-defender",
          description: "Enable Microsoft Defender security profile",
        },
        {
          name: "--enable-disk-driver",
          description: "Enable AzureDisk CSI Driver",
        },
        {
          name: "--enable-file-driver",
          description: "Enable AzureFile CSI Driver",
        },
        {
          name: "--enable-force-upgrade",
          description: "Enable forceUpgrade cluster upgrade settings override",
        },
        {
          name: "--enable-image-cleaner",
          description: "Enable ImageCleaner Service",
        },
        {
          name: "--enable-keda",
          description: "Enable KEDA workload auto-scaler",
        },
        {
          name: "--enable-local-accounts",
          description:
            "If set to true, will enable getting static credential for this cluster",
        },
        {
          name: "--enable-managed-identity",
          description:
            "Update current cluster to use managed identity to manage cluster resource group",
        },
        { name: "--enable-oidc-issuer", description: "Enable OIDC issuer" },
        {
          name: "--enable-public-fqdn",
          description: "Enable public fqdn feature for private cluster",
        },
        {
          name: "--enable-secret-rotation",
          description:
            "Enable secret rotation. Use with azure-keyvault-secrets-provider addon",
        },
        {
          name: "--enable-snapshot-controller",
          description: "Enable Snapshot Controller",
        },
        {
          name: "--enable-vpa",
          description: "Enable vertical pod autoscaler for cluster",
        },
        {
          name: "--enable-windows-gmsa",
          description: "Enable Windows gmsa on cluster",
        },
        {
          name: "--enable-windows-recording-rules",
          description:
            "Enable Windows Recording Rules when enabling the Azure Monitor Metrics addon",
        },
        {
          name: "--enable-workload-identity",
          description: "Enable workload identity addon",
        },
        {
          name: "--gmsa-dns-server",
          description: "Specify DNS server for Windows gmsa on cluster",
          args: { name: "gmsa-dns-server" },
        },
        {
          name: "--gmsa-root-domain-name",
          description: "Specify root domain name for Windows gmsa on cluster",
          args: { name: "gmsa-root-domain-name" },
        },
        {
          name: "--grafana-resource-id",
          description: "Resource ID of the Azure Managed Grafana Workspace",
          args: { name: "grafana-resource-id" },
        },
        {
          name: "--http-proxy-config",
          description: "HTTP Proxy configuration for this cluster",
          args: { name: "http-proxy-config" },
        },
        {
          name: "--image-cleaner-interval-hours",
          description: "ImageCleaner scanning interval",
          args: { name: "image-cleaner-interval-hours" },
        },
        {
          name: "--k8s-support-plan",
          description:
            'Choose from "KubernetesOfficial" or "AKSLongTermSupport", with "AKSLongTermSupport" you get 1 extra year of CVE patchs',
          args: {
            name: "k8s-support-plan",
            suggestions: ["AKSLongTermSupport", "KubernetesOfficial"],
          },
        },
        {
          name: "--ksm-metric-annotations-allow-list",
          description:
            "Comma-separated list of additional Kubernetes label keys that will be used in the resource' labels metric. By default the metric contains only name and namespace labels. To include additional labels provide a list of resource names in their plural form and Kubernetes label keys you would like to allow for them (e.g.'=namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...)'. A single '' can be provided per resource instead to allow any labels, but that has severe performance implications (e.g. '=pods=[]')",
          args: { name: "ksm-metric-annotations-allow-list" },
        },
        {
          name: "--ksm-metric-labels-allow-list",
          description:
            "Comma-separated list of additional Kubernetes label keys that will be used in the resource' labels metric. By default the metric contains only name and namespace labels. To include additional labels provide a list of resource names in their plural form and Kubernetes label keys you would like to allow for them (e.g. '=namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...)'. A single '' can be provided per resource instead to allow any labels, but that has severe performance implications (e.g. '=pods=[]')",
          args: { name: "ksm-metric-labels-allow-list" },
        },
        {
          name: "--load-balancer-idle-timeout",
          description: "Load balancer idle timeout in minutes",
          args: { name: "load-balancer-idle-timeout" },
        },
        {
          name: "--load-balancer-managed-outbound-ip-count",
          description: "Load balancer managed outbound IP count",
          args: { name: "load-balancer-managed-outbound-ip-count" },
        },
        {
          name: "--load-balancer-managed-outbound-ipv6-count",
          description: "Load balancer managed outbound IPv6 IP count",
          args: { name: "load-balancer-managed-outbound-ipv6-count" },
        },
        {
          name: "--load-balancer-outbound-ip-prefixes",
          description: "Load balancer outbound IP prefix resource IDs",
          args: { name: "load-balancer-outbound-ip-prefixes" },
        },
        {
          name: "--load-balancer-outbound-ips",
          description: "Load balancer outbound IP resource IDs",
          args: { name: "load-balancer-outbound-ips" },
        },
        {
          name: "--load-balancer-outbound-ports",
          description: "Load balancer outbound allocated ports",
          args: { name: "load-balancer-outbound-ports" },
        },
        {
          name: "--max-count",
          description:
            'Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 1000]',
          args: { name: "max-count" },
        },
        {
          name: "--min-count",
          description:
            'Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 1000]',
          args: { name: "min-count" },
        },
        {
          name: "--nat-gateway-idle-timeout",
          description: "NAT gateway idle timeout in minutes",
          args: { name: "nat-gateway-idle-timeout" },
        },
        {
          name: "--nat-gateway-managed-outbound-ip-count",
          description: "NAT gateway managed outbound IP count",
          args: { name: "nat-gateway-managed-outbound-ip-count" },
        },
        {
          name: "--network-dataplane",
          description: "The network dataplane to use",
          args: { name: "network-dataplane", suggestions: ["azure", "cilium"] },
        },
        {
          name: "--network-plugin-mode",
          description:
            "Update the mode of a network plugin to migrate to a different pod networking setup",
          args: { name: "network-plugin-mode" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--node-os-upgrade-channel",
          description:
            "Manner in which the OS on your nodes is updated. It could be NodeImage, None, SecurityPatch or Unmanaged",
          args: { name: "node-os-upgrade-channel" },
        },
        {
          name: "--nodepool-labels",
          description:
            "The node labels for all node pool. See https://aka.ms/node-labels for syntax of labels",
          args: { name: "nodepool-labels" },
        },
        {
          name: "--nodepool-taints",
          description: "The node taints for all node pool",
          args: { name: "nodepool-taints" },
        },
        {
          name: "--outbound-type",
          description: "How outbound traffic will be configured for a cluster",
          args: {
            name: "outbound-type",
            suggestions: [
              "loadBalancer",
              "managedNATGateway",
              "userAssignedNATGateway",
              "userDefinedRouting",
            ],
          },
        },
        {
          name: "--pod-cidr",
          description:
            "Update the pod CIDR for a cluster. Used when updating a cluster from Azure CNI to Azure CNI Overlay",
          args: { name: "pod-cidr" },
        },
        {
          name: "--private-dns-zone",
          description: "The private dns zone mode for private cluster",
          args: { name: "private-dns-zone" },
        },
        {
          name: "--rotation-poll-interval",
          description:
            "Set interval of rotation poll. Use with azure-keyvault-secrets-provider addon",
          args: { name: "rotation-poll-interval" },
        },
        {
          name: "--tags",
          description:
            "The tags of the managed cluster. The managed cluster instance and all resources managed by the cloud provider will be tagged",
          args: { name: "tags" },
        },
        {
          name: "--tier",
          description:
            "Specify SKU tier for managed clusters. '--tier standard' enables a standard managed cluster service with a financially backed SLA. '--tier free' changes a standard managed cluster to a free one",
          args: { name: "tier", suggestions: ["free", "premium", "standard"] },
        },
        {
          name: ["--update-cluster-autoscaler", "-u"],
          description: "Update min-count or max-count for cluster autoscaler",
        },
        {
          name: "--upgrade-override-until",
          description:
            "Until when the cluster upgradeSettings overrides are effective. It needs to be in a valid date-time format that's within the next 30 days. For example, 2023-04-01T13:00:00Z. Note that if --force-upgrade is set to true and --upgrade-override-until is not set, by default it will be set to 3 days from now",
          args: { name: "upgrade-override-until" },
        },
        {
          name: "--windows-admin-password",
          description: "User account password to use on windows node VMs",
          args: { name: "windows-admin-password" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "update-credentials",
      description:
        "Update credentials for a managed Kubernetes cluster, like service principal",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--client-secret",
          description:
            "Secret associated with the service principal. This argument is required if --service-principal is specified",
          args: { name: "client-secret" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--reset-service-principal",
          description: "Reset service principal for a managed cluster",
        },
        {
          name: "--service-principal",
          description:
            "Service principal used for authentication to Azure APIs. This argument is required if --reset-service-principal is specified",
          args: { name: "service-principal" },
        },
      ],
    },
    {
      name: "upgrade",
      description: "Upgrade a managed Kubernetes cluster to a newer version",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--control-plane-only",
          description:
            "Upgrade the cluster control plane only. If not specified, both control plane AND all node pools will be upgraded",
        },
        {
          name: ["--kubernetes-version", "-k"],
          description:
            'Version of Kubernetes to upgrade the cluster to, such as "1.16.9". value from: `az aks get-upgrades`',
          args: { name: "kubernetes-version" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--node-image-only",
          description: "Only upgrade node image for agent pools",
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "use-dev-spaces",
      description: "Use Azure Dev Spaces with a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: ["--endpoint", "-e"],
          description:
            "The endpoint type to be used for a Azure Dev Spaces controller. See https://aka.ms/azds-networking for more information",
          args: {
            name: "endpoint",
            suggestions: ["None", "Private", "Public"],
          },
        },
        {
          name: ["--space", "-s"],
          description:
            "Name of the new or existing dev space to select. Defaults to an interactive selection experience",
          args: { name: "space" },
        },
        {
          name: "--update",
          description:
            "Update to the latest Azure Dev Spaces client components",
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation. Requires --space",
        },
      ],
    },
    {
      name: "wait",
      description:
        "Wait for a managed Kubernetes cluster to reach a desired state",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
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
      name: "command",
      description:
        "See detail usage in 'az aks command invoke', 'az aks command result'",
      subcommands: [
        {
          name: "invoke",
          description:
            "Run a shell command (with kubectl, helm) on your aks cluster, support attaching files as well",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: ["--command", "-c"],
              description: "Command or shell script you want to run",
              args: { name: "command" },
            },
            {
              name: ["--file", "-f"],
              description:
                "Files to be used by the command, use '.' to attach the current folder",
              args: { name: "file" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "result",
          description:
            "Fetch result from previously triggered 'aks command invoke'",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: ["--command-id", "-i"],
              description: "CommandId returned from 'aks command invoke'",
              args: { name: "command-id" },
            },
          ],
        },
      ],
    },
    {
      name: "draft",
      description:
        "Commands to build deployment files in a project directory and deploy to an AKS cluster",
      subcommands: [
        {
          name: "create",
          description:
            "Generate a Dockerfile and the minimum required Kubernetes deployment files (helm, kustomize, manifests) for your project directory",
          options: [
            {
              name: "--app",
              description: "Specify the name of the helm release",
              args: { name: "app" },
            },
            {
              name: "--create-config",
              description: "Specify the path to the configuration file",
              args: { name: "create-config" },
            },
            {
              name: "--deployment-only",
              description:
                "Only generate deployment files (helm, kustomize, manifests) for the Kubernetes deployment",
              args: { name: "deployment-only" },
            },
            {
              name: "--destination",
              description:
                "Specify the path to the project directory (default is .)",
              args: { name: "destination" },
            },
            {
              name: "--dockerfile-only",
              description:
                "Only generate Dockerfile for the Kubernetes deployment",
              args: { name: "dockerfile-only" },
            },
            {
              name: "--language",
              description:
                "Specify the language used to create the Kubernetes deployment",
              args: { name: "language" },
            },
            {
              name: "--path",
              description:
                "Automatically download and use the Draft binary at the specified location",
              args: { name: "path" },
            },
          ],
        },
        {
          name: "generate-workflow",
          description:
            "Generate a GitHub workflow for automatic build and deploy to AKS",
          options: [
            {
              name: "--branch",
              description:
                "Specify the GitHub branch to automatically deploy from",
              args: { name: "branch" },
            },
            {
              name: "--cluster-name",
              description: "Specify the AKS cluster name",
              args: { name: "cluster-name" },
            },
            {
              name: "--container-name",
              description: "Specify the name of the container image",
              args: { name: "container-name" },
            },
            {
              name: "--destination",
              description:
                "Specify the path to the project directory (default is .)",
              args: { name: "destination" },
            },
            {
              name: "--path",
              description:
                "Automatically download and use the Draft binary at the specified location",
              args: { name: "path" },
            },
            {
              name: "--registry-name",
              description: "Specify the path to the project directory",
              args: { name: "registry-name" },
            },
            {
              name: "--resource-group",
              description: "Specify the name of the Azure resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "setup-gh",
          description: "Set up GitHub OIDC for your application",
          options: [
            {
              name: "--app",
              description: "Specify the Azure Active Directory applicaton name",
              args: { name: "app" },
            },
            {
              name: "--gh-repo",
              description:
                "Specify the the GitHub repository (organization/repo_name)",
              args: { name: "gh-repo" },
            },
            {
              name: "--path",
              description:
                "Automatically download and use the Draft binary at the specified location",
              args: { name: "path" },
            },
            {
              name: "--provider",
              description: "Specify the cloud provider (default is azure)",
              args: { name: "provider" },
            },
            {
              name: "--resource-group",
              description: "Specify the name of the Azure resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specify the Azure subscription ID",
              args: { name: "subscription-id" },
            },
          ],
        },
        {
          name: "up",
          description:
            "Set up GitHub OIDC and generate a GitHub workflow for automatic build and deploy to AKS",
          options: [
            {
              name: "--app",
              description: "Specify the name of the application",
              args: { name: "app" },
            },
            {
              name: "--branch",
              description:
                "Specify the GitHub branch to automatically deploy from",
              args: { name: "branch" },
            },
            {
              name: "--cluster-name",
              description: "Specify the AKS cluster name",
              args: { name: "cluster-name" },
            },
            {
              name: "--container-name",
              description: "Specify the name of the container image",
              args: { name: "container-name" },
            },
            {
              name: "--destination",
              description:
                "Specify the path to the project directory (default is .)",
              args: { name: "destination" },
            },
            {
              name: "--gh-repo",
              description:
                "Specify the the GitHub repository (organization/repo_name)",
              args: { name: "gh-repo" },
            },
            {
              name: "--path",
              description:
                "Automatically download and use the Draft binary at the specified location",
              args: { name: "path" },
            },
            {
              name: "--provider",
              description: "Specify the cloud provider (default is azure)",
              args: { name: "provider" },
            },
            {
              name: "--registry-name",
              description: "Specify the path to the project directory",
              args: { name: "registry-name" },
            },
            {
              name: "--resource-group",
              description: "Specify the name of the Azure resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specify the Azure subscription ID",
              args: { name: "subscription-id" },
            },
          ],
        },
        {
          name: "update",
          description: "Update your application to be internet accessible",
          options: [
            {
              name: "--certificate",
              description:
                "Specify the URI of the Keyvault certificate to present",
              args: { name: "certificate" },
            },
            {
              name: "--destination",
              description:
                "Specify the path to the project directory (default is .)",
              args: { name: "destination" },
            },
            {
              name: "--host",
              description: "Specify the host of the ingress resource",
              args: { name: "host" },
            },
            {
              name: "--path",
              description:
                "Automatically download and use the Draft binary at the specified location",
              args: { name: "path" },
            },
          ],
        },
      ],
    },
    {
      name: "egress-endpoints",
      description:
        "Commands to manage egress endpoints in managed Kubernetes cluster",
      subcommands: [
        {
          name: "list",
          description:
            "List egress endpoints that are required or recommended to be whitelisted for a cluster",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
      ],
    },
    {
      name: "machine",
      description:
        "Get information about machines in a nodepool of a managed clusters",
      subcommands: [
        {
          name: "list",
          description:
            "Get information about IP Addresses, Hostname for all machines in an agentpool",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the managed cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--nodepool-name",
              description: "Name of the agentpool of a managed cluster",
              args: { name: "nodepool-name" },
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
          name: "show",
          description:
            "Show IP Addresses, Hostname for a specific machine in an agentpool for a managedcluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the managed cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--machine-name",
              description:
                "Get IP Addresses, Hostname for a specific machine in an agentpool",
              args: { name: "machine-name" },
              isRequired: true,
            },
            {
              name: "--nodepool-name",
              description: "Name of the agentpool of a managed cluster",
              args: { name: "nodepool-name" },
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
      ],
    },
    {
      name: "maintenanceconfiguration",
      description:
        "Commands to manage maintenance configurations in managed Kubernetes cluster",
      subcommands: [
        {
          name: "add",
          description:
            "Add a maintenance configuration in managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The config name",
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
              name: "--config-file",
              description: "The maintenance configuration json file",
              args: { name: "config-file" },
            },
            {
              name: "--day-of-month",
              description:
                "Specify on which day of the month the maintenance occurs. E.g. 1 indicates the 1st of the month. Applicable to absolute monthly schedule type only",
              args: { name: "day-of-month" },
            },
            {
              name: "--day-of-week",
              description:
                'Specify on which day of the week the maintenance occurs. E.g. "Monday". Applicable to weekly and relative monthly schedule types',
              args: { name: "day-of-week" },
            },
            {
              name: "--duration",
              description:
                "The length of maintenance window range from 4 to 24 hours",
              args: { name: "duration" },
            },
            {
              name: "--interval-days",
              description:
                "The number of days between each set of occurrences for daily schedule type",
              args: { name: "interval-days" },
            },
            {
              name: "--interval-months",
              description:
                "The number of months between each set of occurrences. Applicable to absolute and relative monthly schedule types",
              args: { name: "interval-months" },
            },
            {
              name: "--interval-weeks",
              description:
                "The number of weeks between each set of occurrences. Applicable to weekly schedule types only",
              args: { name: "interval-weeks" },
            },
            {
              name: "--schedule-type",
              description:
                "Choose either 'Daily', 'Weekly', 'AbsoluteMonthly' or 'RelativeMonthly' for your maintenance schedule. Only applicable to 'aksManagedAutoUpgradeSchedule' and 'aksManagedNodeOSUpgradeSchedule' maintenance configuration",
              args: {
                name: "schedule-type",
                suggestions: [
                  "AbsoluteMonthly",
                  "Daily",
                  "RelativeMonthly",
                  "Weekly",
                ],
              },
            },
            {
              name: "--start-date",
              description:
                'The date the maintenance configuration activates. If not specified, the maintenance window will be active right away."',
              args: { name: "start-date" },
            },
            {
              name: "--start-hour",
              description:
                "The start time of 1 hour window which maintenance is allowd. E.g. 1 means it's allowd between 1:00 am and 2:00 am. Applicable to default maintenance configuration only",
              args: { name: "start-hour" },
            },
            {
              name: "--start-time",
              description:
                "The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. '--utc-offset' applies to this field. For example, '02:00' with '--utc-offset +02:00' means UTC time '00:00'",
              args: { name: "start-time" },
            },
            {
              name: "--utc-offset",
              description:
                "The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'",
              args: { name: "utc-offset" },
            },
            {
              name: "--week-index",
              description:
                "Specify on which instance of the allowed days specified in '--day-of-week' the maintenance occurs. Applicable to relative monthly schedule type only",
              args: {
                name: "week-index",
                suggestions: ["First", "Fourth", "Last", "Second", "Third"],
              },
            },
            {
              name: "--weekday",
              description:
                "A day in week on which maintenance is allowed. E.g. Monday. Applicable to default maintenance configuration only",
              args: { name: "weekday" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a maintenance configuration in managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The config name",
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
          description:
            "List maintenance configurations in managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
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
          name: "show",
          description:
            "Show the details of a maintenance configuration in managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The config name",
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
          description:
            "Update a maintenance configuration of a managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The config name",
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
              name: "--config-file",
              description: "The maintenance configuration json file",
              args: { name: "config-file" },
            },
            {
              name: "--day-of-month",
              description:
                "Specify on which day of the month the maintenance occurs. E.g. 1 indicates the 1st of the month. Applicable to absolute monthly schedule type only",
              args: { name: "day-of-month" },
            },
            {
              name: "--day-of-week",
              description:
                'Specify on which day of the week the maintenance occurs. E.g. "Monday". Applicable to weekly and relative monthly schedule types',
              args: { name: "day-of-week" },
            },
            {
              name: "--duration",
              description:
                "The length of maintenance window range from 4 to 24 hours",
              args: { name: "duration" },
            },
            {
              name: "--interval-days",
              description:
                "The number of days between each set of occurrences for daily schedule type",
              args: { name: "interval-days" },
            },
            {
              name: "--interval-months",
              description:
                "The number of months between each set of occurrences. Applicable to absolute and relative monthly schedule types",
              args: { name: "interval-months" },
            },
            {
              name: "--interval-weeks",
              description:
                "The number of weeks between each set of occurrences. Applicable to weekly schedule types only",
              args: { name: "interval-weeks" },
            },
            {
              name: "--schedule-type",
              description:
                "Choose either 'Daily', 'Weekly', 'AbsoluteMonthly' or 'RelativeMonthly' for your maintenance schedule. Only applicable to 'aksManagedAutoUpgradeSchedule' and 'aksManagedNodeOSUpgradeSchedule' maintenance configuration",
              args: {
                name: "schedule-type",
                suggestions: [
                  "AbsoluteMonthly",
                  "Daily",
                  "RelativeMonthly",
                  "Weekly",
                ],
              },
            },
            {
              name: "--start-date",
              description:
                'The date the maintenance configuration activates. If not specified, the maintenance window will be active right away."',
              args: { name: "start-date" },
            },
            {
              name: "--start-hour",
              description:
                "The start time of 1 hour window which maintenance is allowd. E.g. 1 means it's allowd between 1:00 am and 2:00 am. Applicable to default maintenance configuration only",
              args: { name: "start-hour" },
            },
            {
              name: "--start-time",
              description:
                "The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. '--utc-offset' applies to this field. For example, '02:00' with '--utc-offset +02:00' means UTC time '00:00'",
              args: { name: "start-time" },
            },
            {
              name: "--utc-offset",
              description:
                "The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'",
              args: { name: "utc-offset" },
            },
            {
              name: "--week-index",
              description:
                "Specify on which instance of the allowed days specified in '--day-of-week' the maintenance occurs. Applicable to relative monthly schedule type only",
              args: {
                name: "week-index",
                suggestions: ["First", "Fourth", "Last", "Second", "Third"],
              },
            },
            {
              name: "--weekday",
              description:
                "A day in week on which maintenance is allowed. E.g. Monday. Applicable to default maintenance configuration only",
              args: { name: "weekday" },
            },
          ],
        },
      ],
    },
    {
      name: "mesh",
      description:
        "Commands to manage Azure Service Mesh.\n\n\t\tA group of commands to manage Azure Service Mesh in given cluster",
      subcommands: [
        {
          name: "disable",
          description: "Disable Azure Service Mesh",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "disable-egress-gateway",
          description: "Disable an Azure Service Mesh egress gateway",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "disable-ingress-gateway",
          description: "Disable an Azure Service Mesh ingress gateway",
          options: [
            {
              name: "--ingress-gateway-type",
              description: "Specify the type of ingress gateway",
              args: {
                name: "ingress-gateway-type",
                suggestions: ["External", "Internal"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable Azure Service Mesh",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: "--ca-cert-object-name",
              description:
                "Intermediate cert object name in the Azure Keyvault",
              args: { name: "ca-cert-object-name" },
            },
            {
              name: "--ca-key-object-name",
              description: "Intermediate key object name in the Azure Keyvault",
              args: { name: "ca-key-object-name" },
            },
            {
              name: "--cert-chain-object-name",
              description: "Cert chain object name in the Azure Keyvault",
              args: { name: "cert-chain-object-name" },
            },
            {
              name: "--key-vault-id",
              description: "The Azure Keyvault id with plugin CA info",
              args: { name: "key-vault-id" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--revision",
              description: "Azure Service Mesh revision to install",
              args: { name: "revision" },
            },
            {
              name: "--root-cert-object-name",
              description: "Root cert object name in the Azure Keyvault",
              args: { name: "root-cert-object-name" },
            },
          ],
        },
        {
          name: "enable-egress-gateway",
          description: "Enable an Azure Service Mesh egress gateway",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: ["--egress-gateway-nodeselector", "--egx-gtw-ns"],
              description:
                "Specify the node selector for the egress gateway with space-separated, key-value pairs (key1=value1 key2=value2)",
              args: { name: "egress-gateway-nodeselector" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "enable-ingress-gateway",
          description: "Enable an Azure Service Mesh ingress gateway",
          options: [
            {
              name: "--ingress-gateway-type",
              description: "Specify the type of ingress gateway",
              args: {
                name: "ingress-gateway-type",
                suggestions: ["External", "Internal"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
          name: "get-revisions",
          description:
            "Discover available Azure Service Mesh revisions and their compatibility",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location in which to discover available Azure Service Mesh revisions",
              args: { name: "location" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-upgrades",
          description: "Discover available Azure Service Mesh upgrades",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
          name: "upgrade",
          description:
            "Commands to manage the upgrades for Azure Service Mesh.\n\n\t\tA group of commands to manage the upgrades for Azure Service Mesh in given cluster",
          subcommands: [
            {
              name: "complete",
              description: "Complete Azure Service Mesh upgrade",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the managed cluster",
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
              name: "rollback",
              description: "Rollback Azure Service Mesh upgrade",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the managed cluster",
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
              name: "start",
              description: "Initiate Azure Service Mesh upgrade",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the managed cluster",
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
                  name: "--revision",
                  description: "Azure Service Mesh revision to upgrade to",
                  args: { name: "revision" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "nodepool",
      description:
        "Commands to manage node pools in Kubernetes kubernetes cluster",
      subcommands: [
        {
          name: "add",
          description: "Add a node pool to the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--aks-custom-headers",
              description:
                "Comma-separated key-value pairs to specify custom headers",
              args: { name: "aks-custom-headers" },
            },
            {
              name: ["--enable-cluster-autoscaler", "-e"],
              description: "Enable cluster autoscaler",
            },
            {
              name: "--enable-encryption-at-host",
              description: "Enable EncryptionAtHost, default value is false",
            },
            {
              name: "--enable-fips-image",
              description: "Use FIPS-enabled OS on agent nodes",
            },
            {
              name: "--enable-node-public-ip",
              description: "Enable VMSS node public IP",
            },
            {
              name: "--enable-ultra-ssd",
              description: "Enable UltraSSD, default value is false",
            },
            {
              name: "--eviction-policy",
              description:
                "The eviction policy of the Spot node pool. It can only be set when --priority is Spot",
              args: {
                name: "eviction-policy",
                suggestions: ["Deallocate", "Delete"],
              },
            },
            {
              name: "--gpu-instance-profile",
              description:
                "GPU instance profile to partition multi-gpu Nvidia GPUs",
              args: {
                name: "gpu-instance-profile",
                suggestions: ["MIG1g", "MIG2g", "MIG3g", "MIG4g", "MIG7g"],
              },
            },
            {
              name: "--host-group-id",
              description:
                "The fully qualified dedicated host group id used to provision agent node pool",
              args: { name: "host-group-id" },
            },
            {
              name: "--kubelet-config",
              description:
                "Path to JSON file containing Kubelet configurations for agent nodes. https://aka.ms/aks/custom-node-config",
              args: { name: "kubelet-config" },
            },
            {
              name: ["--kubernetes-version", "-k"],
              description:
                'Version of Kubernetes to use for creating the cluster, such as "1.16.9". value from: `az aks get-versions`',
              args: { name: "kubernetes-version" },
            },
            {
              name: "--labels",
              description:
                "The node labels for the node pool. See https://aka.ms/node-labels for syntax of labels",
              args: { name: "labels" },
            },
            {
              name: "--linux-os-config",
              description:
                "Path to JSON file containing OS configurations for Linux agent nodes. https://aka.ms/aks/custom-node-config",
              args: { name: "linux-os-config" },
            },
            {
              name: "--max-count",
              description:
                'Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [0, 1000] for user nodepool, and [1,1000] for system nodepool',
              args: { name: "max-count" },
            },
            {
              name: ["--max-pods", "-m"],
              description: "The maximum number of pods deployable to a node",
              args: { name: "max-pods" },
            },
            {
              name: "--max-surge",
              description:
                "Extra nodes used to speed upgrade. When specified, it represents the number or percent used, eg. 5 or 33%",
              args: { name: "max-surge" },
            },
            {
              name: "--min-count",
              description:
                'Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [0, 1000] for user nodepool, and [1,1000] for system nodepool',
              args: { name: "min-count" },
            },
            {
              name: "--mode",
              description:
                'The mode for a node pool which defines a node pool\'s primary function. If set as "System", AKS prefers system pods scheduling to node pools with mode System. Learn more at https://aka.ms/aks/nodepool/mode',
              args: { name: "mode", suggestions: ["System", "User"] },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--node-count", "-c"],
              description:
                "Number of nodes in the Kubernetes agent pool. After creating a cluster, you can change the size of its node pool with az aks scale",
              args: { name: "node-count" },
            },
            {
              name: "--node-osdisk-size",
              description:
                "Size in GB of the OS disk for each node in the agent pool. Minimum 30 GB",
              args: { name: "node-osdisk-size" },
            },
            {
              name: "--node-osdisk-type",
              description:
                "OS disk type to be used for machines in a given agent pool. Defaults to 'Ephemeral' when possible in conjunction with VM size and OS disk size. May not be changed for this pool after creation. ('Ephemeral' or 'Managed')",
              args: {
                name: "node-osdisk-type",
                suggestions: ["Ephemeral", "Managed"],
              },
            },
            {
              name: "--node-public-ip-prefix-id",
              description:
                "Public IP prefix ID used to assign public IPs to VMSS nodes",
              args: { name: "node-public-ip-prefix-id" },
            },
            {
              name: "--node-taints",
              description: "The node taints for the node pool",
              args: { name: "node-taints" },
            },
            {
              name: ["--node-vm-size", "-s"],
              description:
                "Size of Virtual Machines to create as Kubernetes nodes",
              args: { name: "node-vm-size" },
            },
            {
              name: "--os-sku",
              description:
                "The OS SKU of the agent node pool. Ubuntu or CBLMariner for Linux. Windows2019 or Windows2022 for Windows",
              args: {
                name: "os-sku",
                suggestions: [
                  "AzureLinux",
                  "CBLMariner",
                  "Mariner",
                  "Ubuntu",
                  "Windows2019",
                  "Windows2022",
                ],
              },
            },
            {
              name: "--os-type",
              description: "The OS Type. Linux or Windows",
              args: { name: "os-type" },
            },
            {
              name: "--pod-subnet-id",
              description:
                "The Resource Id of a subnet in an existing VNet into which to assign pods in the cluster (requires azure network-plugin)",
              args: { name: "pod-subnet-id" },
            },
            {
              name: "--ppg",
              description: "The ID of a PPG",
              args: { name: "ppg" },
            },
            {
              name: "--priority",
              description: "The priority of the node pool",
              args: { name: "priority", suggestions: ["Regular", "Spot"] },
            },
            {
              name: "--scale-down-mode",
              description:
                "Describe how VMs are added to or removed from nodepools",
              args: {
                name: "scale-down-mode",
                suggestions: ["Deallocate", "Delete"],
              },
            },
            {
              name: "--snapshot-id",
              description:
                "The source snapshot id used to create this nodepool",
              args: { name: "snapshot-id" },
            },
            {
              name: "--spot-max-price",
              description:
                "It can only be set when --priority is Spot. Specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand. It can only include up to 5 decimal places",
              args: { name: "spot-max-price" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--vnet-subnet-id",
              description:
                "The Resource Id of a subnet in an existing VNet into which to deploy the cluster",
              args: { name: "vnet-subnet-id" },
            },
            {
              name: ["--zones", "-z"],
              description:
                "Availability zones where agent nodes will be placed. Also, to install agent nodes to more than one zone you need to pass zone numbers separated by blanks. For example - To have all 3 zones, you are expected to enter --zones 1 2 3",
              args: { name: "zones", suggestions: ["1", "2", "3"] },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete the agent pool in the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
          name: "get-upgrades",
          description:
            "Get the available upgrade versions for an agent pool of the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
          description:
            "List node pools in the managed Kubernetes cluster. To get list of nodes in the cluster run kubectl get nodes command",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
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
          name: "operation-abort",
          description: "Abort last running operation on nodepool",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
          name: "scale",
          description: "Scale the node pool in a managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
            {
              name: ["--node-count", "-c"],
              description: "Number of nodes in the Kubernetes node pool",
              args: { name: "node-count" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the details for a node pool in the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
          description:
            "Start stopped agent pool in the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--aks-custom-headers",
              description:
                "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
              args: { name: "aks-custom-headers" },
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
            "Stop running agent pool in the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--aks-custom-headers",
              description:
                "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
              args: { name: "aks-custom-headers" },
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
          description: "Update a node pool properties",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--aks-custom-headers",
              description:
                "Comma-separated key-value pairs to specify custom headers",
              args: { name: "aks-custom-headers" },
            },
            {
              name: ["--disable-cluster-autoscaler", "-d"],
              description: "Disable cluster autoscaler",
            },
            {
              name: ["--enable-cluster-autoscaler", "-e"],
              description: "Enable cluster autoscaler",
            },
            {
              name: "--labels",
              description:
                "The node labels for the node pool. See https://aka.ms/node-labels for syntax of labels",
              args: { name: "labels" },
            },
            {
              name: "--max-count",
              description:
                'Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [0, 1000] for user nodepool, and [1,1000] for system nodepool',
              args: { name: "max-count" },
            },
            {
              name: "--max-surge",
              description:
                "Extra nodes used to speed upgrade. When specified, it represents the number or percent used, eg. 5 or 33%",
              args: { name: "max-surge" },
            },
            {
              name: "--min-count",
              description:
                'Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [0, 1000] for user nodepool, and [1,1000] for system nodepool',
              args: { name: "min-count" },
            },
            {
              name: "--mode",
              description:
                'The mode for a node pool which defines a node pool\'s primary function. If set as "System", AKS prefers system pods scheduling to node pools with mode System. Learn more at https://aka.ms/aks/nodepool/mode',
              args: { name: "mode", suggestions: ["System", "User"] },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--node-taints",
              description:
                'The node taints for the node pool. You can update the existing node taint of a nodepool or create a new node taint for a nodepool. Pass the empty string "" to remove all taints',
              args: { name: "node-taints" },
            },
            {
              name: "--scale-down-mode",
              description:
                "Describe how VMs are added to or removed from nodepools",
              args: {
                name: "scale-down-mode",
                suggestions: ["Deallocate", "Delete"],
              },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--update-cluster-autoscaler", "-u"],
              description:
                "Update min-count or max-count for cluster autoscaler",
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade the node pool in a managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--aks-custom-headers",
              description:
                "Comma-separated key-value pairs to specify custom headers",
              args: { name: "aks-custom-headers" },
            },
            {
              name: ["--kubernetes-version", "-k"],
              description:
                'Version of Kubernetes to upgrade the node pool to, such as "1.16.9"',
              args: { name: "kubernetes-version" },
            },
            {
              name: "--max-surge",
              description:
                'Extra nodes used to speed upgrade. When specified, it represents the number or percent used, eg. 5 or 33% (mutually exclusive with "--node-image-only". See "az aks nodepool update --max-surge" to update max surge before upgrading with "--node-image-only")',
              args: { name: "max-surge" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--node-image-only",
              description: "Only upgrade agent pool's node image",
            },
            {
              name: "--snapshot-id",
              description:
                "The source snapshot id used to upgrade this nodepool",
              args: { name: "snapshot-id" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "wait",
          description: "Wait for a node pool to reach a desired state",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
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
          name: "snapshot",
          description: "Commands to manage nodepool snapshots",
          subcommands: [
            {
              name: "create",
              description: "Create a nodepool snapshot",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The nodepool snapshot name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--nodepool-id",
                  description:
                    "The source nodepool id from which to create this snapshot",
                  args: { name: "nodepool-id" },
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
                  name: "--aks-custom-headers",
                  description:
                    "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
                  args: { name: "aks-custom-headers" },
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
                  name: "--tags",
                  description: "The tags of the snapshot",
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a nodepool snapshot",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The nodepool snapshot name",
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
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List nodepool snapshots",
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
              description: "Show the details of a nodepool snapshot",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The nodepool snapshot name",
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
              description: "Update tags on a snapshot of a nodepool",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The nodepool snapshot name",
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
                  name: "--tags",
                  description: "The tags to set to the snapshot",
                  args: { name: "tags" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "wait",
              description:
                "Wait for a nodepool snapshot to reach a desired state",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the managed cluster",
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
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
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
          ],
        },
      ],
    },
    {
      name: "oidc-issuer",
      description: "Oidc issuer related commands",
      subcommands: [
        {
          name: "rotate-signing-keys",
          description: "Rotate oidc issuer service account signing keys",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
      ],
    },
    {
      name: "pod-identity",
      description:
        "Commands to manage pod identities in managed Kubernetes cluster",
      subcommands: [
        {
          name: "add",
          description: "Add a pod identity to a managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--identity-resource-id",
              description: "Resource id of the identity to use",
              args: { name: "identity-resource-id" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "The pod identity namespace",
              args: { name: "namespace" },
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
              name: "--aks-custom-headers",
              description:
                "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
              args: { name: "aks-custom-headers" },
            },
            {
              name: "--binding-selector",
              description: "Optional binding selector to use",
              args: { name: "binding-selector" },
            },
            {
              name: ["--name", "-n"],
              description: "The pod identity name. Generate if not specified",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Remove a pod identity from a managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The pod identity name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "The pod identity namespace",
              args: { name: "namespace" },
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
              name: "--aks-custom-headers",
              description:
                "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
              args: { name: "aks-custom-headers" },
            },
          ],
        },
        {
          name: "list",
          description: "List pod identities in a managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
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
          name: "exception",
          description:
            "Commands to manage pod identity exceptions in managed Kubernetes cluster",
          subcommands: [
            {
              name: "add",
              description:
                "Add a pod identity exception to a managed Kubernetes cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace",
                  description: "The pod identity exception namespace",
                  args: { name: "namespace" },
                  isRequired: true,
                },
                {
                  name: "--pod-labels",
                  description:
                    "Space-separated labels: key=value [key=value ...]",
                  args: { name: "pod-labels" },
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
                  name: "--aks-custom-headers",
                  description:
                    "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
                  args: { name: "aks-custom-headers" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The pod identity exception name. Generate if not specified",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Remove a pod identity exception from a managed Kubernetes cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The pod identity exception name to remove",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--namespace",
                  description: "The pod identity exception namespace to remove",
                  args: { name: "namespace" },
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
                  name: "--aks-custom-headers",
                  description:
                    "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
                  args: { name: "aks-custom-headers" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List pod identity exceptions in a managed Kubernetes cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
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
              description:
                "Update a pod identity exception in a managed Kubernetes cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The pod identity exception name to remove",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--namespace",
                  description: "The pod identity exception namespace to remove",
                  args: { name: "namespace" },
                  isRequired: true,
                },
                {
                  name: "--pod-labels",
                  description: "Pod labels in key=value [key=value ...]",
                  args: { name: "pod-labels" },
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
                  name: "--aks-custom-headers",
                  description:
                    "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
                  args: { name: "aks-custom-headers" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "snapshot",
      description: "Commands to manage nodepool snapshots",
      subcommands: [
        {
          name: "create",
          description: "Create a nodepool snapshot",
          options: [
            {
              name: ["--name", "-n"],
              description: "The nodepool snapshot name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--nodepool-id",
              description:
                "The source nodepool id from which to create this snapshot",
              args: { name: "nodepool-id" },
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
              name: "--aks-custom-headers",
              description:
                "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
              args: { name: "aks-custom-headers" },
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
              name: "--tags",
              description: "The tags of the snapshot",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a nodepool snapshot",
          options: [
            {
              name: ["--name", "-n"],
              description: "The nodepool snapshot name",
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
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List nodepool snapshots",
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
          description: "Show the details of a nodepool snapshot",
          options: [
            {
              name: ["--name", "-n"],
              description: "The nodepool snapshot name",
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
          name: "wait",
          description: "Wait for a nodepool snapshot to reach a desired state",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
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
      ],
    },
    {
      name: "trustedaccess",
      description: "Commands to manage trusted access security features",
      subcommands: [
        {
          name: "role",
          description: "Commands to manage trusted access roles",
          subcommands: [
            {
              name: "list",
              description: "List trusted access roles",
              options: [
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "rolebinding",
          description: "Commands to manage trusted access role bindings",
          subcommands: [
            {
              name: "create",
              description: "Create a new trusted access role binding",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Specify the role binding name",
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
                  name: "--roles",
                  description: "Specify the space-separated roles",
                  args: { name: "roles" },
                  isRequired: true,
                },
                {
                  name: ["--source-resource-id", "-r"],
                  description: "Specify the source resource id of the binding",
                  args: { name: "source-resource-id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a trusted access role binding according to name",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Specify the role binding name",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all the trusted access role bindings",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
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
              name: "show",
              description:
                "Get the specific trusted access role binding according to binding name",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Specify the role binding name",
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
              description: "Update a trusted access role binding",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Specify the role binding name",
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
                  name: "--roles",
                  description: "Specify the space-separated roles",
                  args: { name: "roles" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
