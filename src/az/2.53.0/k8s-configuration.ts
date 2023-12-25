const completion: Fig.Spec = {
  name: "k8s-configuration",
  description:
    "Commands to manage resources from Microsoft.KubernetesConfiguration",
  subcommands: [
    {
      name: "create",
      description:
        'Create a Flux v1 Kubernetes configuration (This command is for Flux v1, to use the newer Flux v2, run "az k8s-configuration flux create")',
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: ["--cluster-type", "-t"],
          description:
            "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
          args: {
            name: "cluster-type",
            suggestions: [
              "connectedClusters",
              "managedClusters",
              "provisionedClusters",
            ],
          },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the configuration",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--repository-url", "-u"],
          description: "Url of the source control repository",
          args: { name: "repository-url" },
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
          name: "--scope",
          description:
            "Specify scope of the operator to be 'namespace' or 'cluster'",
          args: { name: "scope", suggestions: ["cluster", "namespace"] },
          isRequired: true,
        },
        {
          name: ["--enable-helm-operator", "--enable-hop"],
          description: "Enable support for Helm chart deployments",
          args: {
            name: "enable-helm-operator",
            suggestions: ["false", "true"],
          },
        },
        {
          name: ["--helm-operator-chart-version", "--hop-chart-version"],
          description: "Chart version of the Helm Operator (if enabled)",
          args: { name: "helm-operator-chart-version" },
        },
        {
          name: ["--helm-operator-params", "--hop-params"],
          description: "Chart values for the Helm Operator (if enabled)",
          args: { name: "helm-operator-params" },
        },
        {
          name: "--https-key",
          description:
            "Specify HTTPS token/password for private repository sync",
          args: { name: "https-key" },
        },
        {
          name: "--https-user",
          description: "Specify HTTPS username for private repository sync",
          args: { name: "https-user" },
        },
        {
          name: "--operator-instance-name",
          description: "Instance name of the Operator",
          args: { name: "operator-instance-name" },
        },
        {
          name: "--operator-namespace",
          description: "Namespace in which to install the Operator",
          args: { name: "operator-namespace" },
        },
        {
          name: "--operator-params",
          description: "Parameters for the Operator",
          args: { name: "operator-params" },
        },
        {
          name: "--operator-type",
          description: "Type of the operator. Valid value is 'flux'",
          args: { name: "operator-type" },
        },
        {
          name: "--ssh-known-hosts",
          description:
            "Specify Base64-encoded known_hosts contents containing public SSH keys required to access private Git instances",
          args: { name: "ssh-known-hosts" },
        },
        {
          name: "--ssh-known-hosts-file",
          description:
            "Specify file path to known_hosts contents containing public SSH keys required to access private Git instances",
          args: { name: "ssh-known-hosts-file" },
        },
        {
          name: "--ssh-private-key",
          description:
            "Specify Base64-encoded private ssh key for private repository sync",
          args: { name: "ssh-private-key" },
        },
        {
          name: "--ssh-private-key-file",
          description:
            "Specify file path to private ssh key for private repository sync",
          args: { name: "ssh-private-key-file" },
        },
      ],
    },
    {
      name: "delete",
      description:
        'Delete a Flux v1 Kubernetes configuration (This command is for Flux v1, to use the newer Flux v2, run "az k8s-configuration flux delete")',
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: ["--cluster-type", "-t"],
          description:
            "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
          args: {
            name: "cluster-type",
            suggestions: [
              "connectedClusters",
              "managedClusters",
              "provisionedClusters",
            ],
          },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the configuration",
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
      description:
        'List Flux v1 Kubernetes configurations (This command is for Flux v1, to use the newer Flux v2, run "az k8s-configuration flux list")',
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: ["--cluster-type", "-t"],
          description:
            "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
          args: {
            name: "cluster-type",
            suggestions: [
              "connectedClusters",
              "managedClusters",
              "provisionedClusters",
            ],
          },
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
        'Show details of a Flux v1 Kubernetes configuration (This command is for Flux v1, to use the newer Flux v2, run "az k8s-configuration flux show")',
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: ["--cluster-type", "-t"],
          description:
            "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
          args: {
            name: "cluster-type",
            suggestions: [
              "connectedClusters",
              "managedClusters",
              "provisionedClusters",
            ],
          },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the configuration",
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
      name: "flux",
      description: "Commands to manage Flux v2 Kubernetes configurations",
      subcommands: [
        {
          name: "create",
          description: "Create a Flux v2 Kubernetes configuration",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-type", "-t"],
              description:
                "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
              args: {
                name: "cluster-type",
                suggestions: [
                  "connectedClusters",
                  "managedClusters",
                  "provisionedClusters",
                ],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the flux configuration",
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
              name: ["--url", "-u"],
              description: "URL of the source to reconcile",
              args: { name: "url" },
              isRequired: true,
            },
            {
              name: "--account-key",
              description: "The Azure Blob Shared Key for authentication",
              args: { name: "account-key" },
            },
            {
              name: "--branch",
              description:
                "Branch within the git source to reconcile with the cluster",
              args: { name: "branch" },
            },
            {
              name: "--bucket-access-key",
              description: "Access Key ID used to authenticate with the bucket",
              args: { name: "bucket-access-key" },
            },
            {
              name: "--bucket-insecure",
              description: "Communicate with a bucket without TLS",
            },
            {
              name: "--bucket-name",
              description: "Name of the S3 bucket to sync",
              args: { name: "bucket-name" },
            },
            {
              name: "--bucket-secret-key",
              description: "Secret Key used to authenticate with the bucket",
              args: { name: "bucket-secret-key" },
            },
            {
              name: ["--cluster-resource-provider", "--cluster-rp"],
              description:
                "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
              args: { name: "cluster-resource-provider" },
            },
            {
              name: "--commit",
              description:
                "Commit within the git source to reconcile with the cluster",
              args: { name: "commit" },
            },
            {
              name: "--container-name",
              description: "Name of the Azure Blob Storage container to sync",
              args: { name: "container-name" },
            },
            {
              name: "--https-ca-cert",
              description:
                "Base64-encoded HTTPS CA certificate for TLS communication with private repository sync",
              args: { name: "https-ca-cert" },
            },
            {
              name: "--https-ca-cert-file",
              description:
                "File path to HTTPS CA certificate file for TLS communication with private repository sync",
              args: { name: "https-ca-cert-file" },
            },
            {
              name: "--https-key",
              description: "HTTPS token/password for private repository sync",
              args: { name: "https-key" },
            },
            {
              name: "--https-user",
              description: "HTTPS username for private repository sync",
              args: { name: "https-user" },
            },
            {
              name: ["--sync-interval", "--interval"],
              description:
                "Time between reconciliations of the source on the cluster",
              args: { name: "sync-interval" },
            },
            {
              name: "--kind",
              description: "Source kind to reconcile",
              args: { name: "kind", suggestions: ["azblob", "bucket", "git"] },
            },
            {
              name: "--known-hosts",
              description:
                "Base64-encoded known_hosts data containing public SSH keys required to access private Git instances",
              args: { name: "known-hosts" },
            },
            {
              name: "--known-hosts-file",
              description:
                "File path to known_hosts contents containing public SSH keys required to access private Git instances",
              args: { name: "known-hosts-file" },
            },
            {
              name: ["--kustomization", "-k"],
              description:
                "Define kustomizations to sync sources with parameters ['name', 'path', 'depends_on', 'timeout', 'sync_interval', 'retry_interval', 'prune', 'force']",
              args: { name: "kustomization" },
            },
            {
              name: ["--local-auth-ref", "--local-ref"],
              description:
                "Local reference to a kubernetes secret in the configuration namespace to use for communication to the source",
              args: { name: "local-auth-ref" },
            },
            {
              name: ["--managed-identity-client-id", "--mi-client-id"],
              description:
                "The client ID of the managed identity for authentication with Azure Blob",
              args: { name: "managed-identity-client-id" },
            },
            {
              name: ["--namespace", "--ns"],
              description: "Namespace to deploy the configuration",
              args: { name: "namespace" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--sas-token",
              description: "The Azure Blob SAS Token for authentication",
              args: { name: "sas-token" },
            },
            {
              name: ["--scope", "-s"],
              description:
                "Specify scope of the operator to be 'namespace' or 'cluster'",
              args: { name: "scope", suggestions: ["cluster", "namespace"] },
            },
            {
              name: "--semver",
              description:
                "Semver range within the git source to reconcile with the cluster",
              args: { name: "semver" },
            },
            {
              name: [
                "--service-principal-client-certificate",
                "--sp-client-cert",
              ],
              description:
                "The Base64 encoded client certificate for authenticating a service principal with Azure Blob",
              args: { name: "service-principal-client-certificate" },
            },
            {
              name: [
                "--service-principal-client-certificate-password",
                "--sp-cert-password",
              ],
              description:
                "The password for the client certificate used to authenticate a service principal with Azure Blob",
              args: { name: "service-principal-client-certificate-password" },
            },
            {
              name: [
                "--service-principal-client-certificate-send-chain",
                "--sp-cert-send-chain",
              ],
              description:
                "Specify whether to include x5c header in client claims when acquiring a token to enable subject name / issuer based authentication for the client certificate",
            },
            {
              name: ["--service-principal-client-id", "--sp-client-id"],
              description:
                "The client ID for authenticating a service principal with Azure Blob, required for this authentication method",
              args: { name: "service-principal-client-id" },
            },
            {
              name: ["--service-principal-client-secret", "--sp-client-secret"],
              description:
                "The client secret for authenticating a service principal with Azure Blob",
              args: { name: "service-principal-client-secret" },
            },
            {
              name: ["--service-principal-tenant-id", "--sp-tenant-id"],
              description:
                "The tenant ID for authenticating a service principal with Azure Blob, required for this authentication method",
              args: { name: "service-principal-tenant-id" },
            },
            {
              name: "--ssh-private-key",
              description:
                "Base64-encoded private ssh key for private repository sync",
              args: { name: "ssh-private-key" },
            },
            {
              name: "--ssh-private-key-file",
              description:
                "File path to private ssh key for private repository sync",
              args: { name: "ssh-private-key-file" },
            },
            {
              name: "--suspend",
              description:
                "Suspend the reconciliation of the source and kustomizations associated with this configuration",
            },
            {
              name: "--tag",
              description:
                "Tag within the git source to reconcile with the cluster",
              args: { name: "tag" },
            },
            {
              name: "--timeout",
              description:
                "Maximum time to reconcile the source before timing out",
              args: { name: "timeout" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Flux v2 Kubernetes configuration",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-type", "-t"],
              description:
                "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
              args: {
                name: "cluster-type",
                suggestions: [
                  "connectedClusters",
                  "managedClusters",
                  "provisionedClusters",
                ],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the flux configuration",
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
              name: ["--cluster-resource-provider", "--cluster-rp"],
              description:
                "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
              args: { name: "cluster-resource-provider" },
            },
            {
              name: "--force",
              description:
                "Force delete the flux configuration from the cluster",
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
          description: "List all Flux v2 Kubernetes configurations",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-type", "-t"],
              description:
                "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
              args: {
                name: "cluster-type",
                suggestions: [
                  "connectedClusters",
                  "managedClusters",
                  "provisionedClusters",
                ],
              },
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
              name: ["--cluster-resource-provider", "--cluster-rp"],
              description:
                "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
              args: { name: "cluster-resource-provider" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a Flux v2 Kubernetes configuration",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-type", "-t"],
              description:
                "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
              args: {
                name: "cluster-type",
                suggestions: [
                  "connectedClusters",
                  "managedClusters",
                  "provisionedClusters",
                ],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the flux configuration",
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
              name: ["--cluster-resource-provider", "--cluster-rp"],
              description:
                "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
              args: { name: "cluster-resource-provider" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a Flux v2 Kubernetes configuration",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-type", "-t"],
              description:
                "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
              args: {
                name: "cluster-type",
                suggestions: [
                  "connectedClusters",
                  "managedClusters",
                  "provisionedClusters",
                ],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the flux configuration",
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
              name: "--account-key",
              description: "The Azure Blob Shared Key for authentication",
              args: { name: "account-key" },
            },
            {
              name: "--branch",
              description:
                "Branch within the git source to reconcile with the cluster",
              args: { name: "branch" },
            },
            {
              name: "--bucket-access-key",
              description: "Access Key ID used to authenticate with the bucket",
              args: { name: "bucket-access-key" },
            },
            {
              name: "--bucket-insecure",
              description: "Communicate with a bucket without TLS",
              args: { name: "bucket-insecure", suggestions: ["false", "true"] },
            },
            {
              name: "--bucket-name",
              description: "Name of the S3 bucket to sync",
              args: { name: "bucket-name" },
            },
            {
              name: "--bucket-secret-key",
              description: "Secret Key used to authenticate with the bucket",
              args: { name: "bucket-secret-key" },
            },
            {
              name: ["--cluster-resource-provider", "--cluster-rp"],
              description:
                "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
              args: { name: "cluster-resource-provider" },
            },
            {
              name: "--commit",
              description:
                "Commit within the git source to reconcile with the cluster",
              args: { name: "commit" },
            },
            {
              name: "--container-name",
              description: "Name of the Azure Blob Storage container to sync",
              args: { name: "container-name" },
            },
            {
              name: "--https-ca-cert",
              description:
                "Base64-encoded HTTPS CA certificate for TLS communication with private repository sync",
              args: { name: "https-ca-cert" },
            },
            {
              name: "--https-ca-cert-file",
              description:
                "File path to HTTPS CA certificate file for TLS communication with private repository sync",
              args: { name: "https-ca-cert-file" },
            },
            {
              name: "--https-key",
              description: "HTTPS token/password for private repository sync",
              args: { name: "https-key" },
            },
            {
              name: "--https-user",
              description: "HTTPS username for private repository sync",
              args: { name: "https-user" },
            },
            {
              name: ["--sync-interval", "--interval"],
              description:
                "Time between reconciliations of the source on the cluster",
              args: { name: "sync-interval" },
            },
            {
              name: "--kind",
              description: "Source kind to reconcile",
              args: { name: "kind", suggestions: ["azblob", "bucket", "git"] },
            },
            {
              name: "--known-hosts",
              description:
                "Base64-encoded known_hosts data containing public SSH keys required to access private Git instances",
              args: { name: "known-hosts" },
            },
            {
              name: "--known-hosts-file",
              description:
                "File path to known_hosts contents containing public SSH keys required to access private Git instances",
              args: { name: "known-hosts-file" },
            },
            {
              name: ["--kustomization", "-k"],
              description:
                "Define kustomizations to sync sources with parameters ['name', 'path', 'depends_on', 'timeout', 'sync_interval', 'retry_interval', 'prune', 'force']",
              args: { name: "kustomization" },
            },
            {
              name: ["--local-auth-ref", "--local-ref"],
              description:
                "Local reference to a kubernetes secret in the configuration namespace to use for communication to the source",
              args: { name: "local-auth-ref" },
            },
            {
              name: ["--managed-identity-client-id", "--mi-client-id"],
              description:
                "The client ID of the managed identity for authentication with Azure Blob",
              args: { name: "managed-identity-client-id" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--sas-token",
              description: "The Azure Blob SAS Token for authentication",
              args: { name: "sas-token" },
            },
            {
              name: "--semver",
              description:
                "Semver range within the git source to reconcile with the cluster",
              args: { name: "semver" },
            },
            {
              name: [
                "--service-principal-client-certificate",
                "--sp-client-cert",
              ],
              description:
                "The Base64 encoded client certificate for authenticating a service principal with Azure Blob",
              args: { name: "service-principal-client-certificate" },
            },
            {
              name: [
                "--service-principal-client-certificate-password",
                "--sp-cert-password",
              ],
              description:
                "The password for the client certificate used to authenticate a service principal with Azure Blob",
              args: { name: "service-principal-client-certificate-password" },
            },
            {
              name: [
                "--service-principal-client-certificate-send-chain",
                "--sp-cert-send-chain",
              ],
              description:
                "Specify whether to include x5c header in client claims when acquiring a token to enable subject name / issuer based authentication for the client certificate",
            },
            {
              name: ["--service-principal-client-id", "--sp-client-id"],
              description:
                "The client ID for authenticating a service principal with Azure Blob, required for this authentication method",
              args: { name: "service-principal-client-id" },
            },
            {
              name: ["--service-principal-client-secret", "--sp-client-secret"],
              description:
                "The client secret for authenticating a service principal with Azure Blob",
              args: { name: "service-principal-client-secret" },
            },
            {
              name: ["--service-principal-tenant-id", "--sp-tenant-id"],
              description:
                "The tenant ID for authenticating a service principal with Azure Blob, required for this authentication method",
              args: { name: "service-principal-tenant-id" },
            },
            {
              name: "--ssh-private-key",
              description:
                "Base64-encoded private ssh key for private repository sync",
              args: { name: "ssh-private-key" },
            },
            {
              name: "--ssh-private-key-file",
              description:
                "File path to private ssh key for private repository sync",
              args: { name: "ssh-private-key-file" },
            },
            {
              name: "--suspend",
              description:
                "Suspend the reconciliation of the source and kustomizations associated with this configuration",
              args: { name: "suspend", suggestions: ["false", "true"] },
            },
            {
              name: "--tag",
              description:
                "Tag within the git source to reconcile with the cluster",
              args: { name: "tag" },
            },
            {
              name: "--timeout",
              description:
                "Maximum time to reconcile the source before timing out",
              args: { name: "timeout" },
            },
            {
              name: ["--url", "-u"],
              description: "URL of the source to reconcile",
              args: { name: "url" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "deployed-object",
          description:
            "Commands to see deployed objects associated with Flux v2 Kubernetes configurations",
          subcommands: [
            {
              name: "list",
              description:
                "List deployed objects associated with a Flux v2 Kubernetes configuration",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description: "Name of the Kubernetes cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-type", "-t"],
                  description:
                    "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
                  args: {
                    name: "cluster-type",
                    suggestions: [
                      "connectedClusters",
                      "managedClusters",
                      "provisionedClusters",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the flux configuration",
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
                  name: ["--cluster-resource-provider", "--cluster-rp"],
                  description:
                    "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
                  args: { name: "cluster-resource-provider" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show a deployed object associated with a Flux v2 Kubernetes configuration",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description: "Name of the Kubernetes cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-type", "-t"],
                  description:
                    "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
                  args: {
                    name: "cluster-type",
                    suggestions: [
                      "connectedClusters",
                      "managedClusters",
                      "provisionedClusters",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the flux configuration",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--object-kind",
                  description:
                    "Kind of the object deployed by the configuration on the cluster",
                  args: {
                    name: "object-kind",
                    suggestions: [
                      "Bucket",
                      "GitRepository",
                      "HelmChart",
                      "HelmRelease",
                      "HelmRepository",
                      "Kustomization",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--object-name",
                  description:
                    "Name of the object deployed by the configuration on the cluster",
                  args: { name: "object-name" },
                  isRequired: true,
                },
                {
                  name: "--object-namespace",
                  description:
                    "Namespace of the object deployed by the configuration on the cluster",
                  args: { name: "object-namespace" },
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
                  name: ["--cluster-resource-provider", "--cluster-rp"],
                  description:
                    "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
                  args: { name: "cluster-resource-provider" },
                },
              ],
            },
          ],
        },
        {
          name: "kustomization",
          description:
            "Commands to manage Kustomizations associated with Flux v2 Kubernetes configurations",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Kustomization associated with a Flux v2 Kubernetes configuration",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description: "Name of the Kubernetes cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-type", "-t"],
                  description:
                    "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
                  args: {
                    name: "cluster-type",
                    suggestions: [
                      "connectedClusters",
                      "managedClusters",
                      "provisionedClusters",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--kustomization-name", "-k"],
                  description:
                    "Specify the name of the kustomization to target",
                  args: { name: "kustomization-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the flux configuration",
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
                  name: ["--cluster-resource-provider", "--cluster-rp"],
                  description:
                    "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
                  args: { name: "cluster-resource-provider" },
                },
                {
                  name: ["--dependencies", "--depends-on", "--depends"],
                  description:
                    "Comma-separated list of kustomization dependencies",
                  args: { name: "dependencies" },
                },
                {
                  name: "--force",
                  description:
                    "Re-create resources that cannot be updated on the cluster (i.e. jobs)",
                  args: { name: "force", suggestions: ["false", "true"] },
                },
                {
                  name: ["--sync-interval", "--interval"],
                  description:
                    "Time between reconciliations of the kustomization on the cluster",
                  args: { name: "sync-interval" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--path",
                  description:
                    "Specify the path in the source that the kustomization should apply",
                  args: { name: "path" },
                },
                {
                  name: "--prune",
                  description:
                    "Garbage collect resources deployed by the kustomization on the cluster",
                  args: { name: "prune", suggestions: ["false", "true"] },
                },
                {
                  name: "--retry-interval",
                  description:
                    "Time between reconciliations of the kustomization on the cluster on failures, defaults to --sync-interval",
                  args: { name: "retry-interval" },
                },
                {
                  name: "--timeout",
                  description:
                    "Maximum time to reconcile the kustomization before timing out",
                  args: { name: "timeout" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Kustomization associated with a Flux v2 Kubernetes configuration",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description: "Name of the Kubernetes cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-type", "-t"],
                  description:
                    "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
                  args: {
                    name: "cluster-type",
                    suggestions: [
                      "connectedClusters",
                      "managedClusters",
                      "provisionedClusters",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--kustomization-name", "-k"],
                  description:
                    "Specify the name of the kustomization to target",
                  args: { name: "kustomization-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the flux configuration",
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
                  name: ["--cluster-resource-provider", "--cluster-rp"],
                  description:
                    "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
                  args: { name: "cluster-resource-provider" },
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
              description:
                "List Kustomizations associated with a Flux v2 Kubernetes configuration",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description: "Name of the Kubernetes cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-type", "-t"],
                  description:
                    "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
                  args: {
                    name: "cluster-type",
                    suggestions: [
                      "connectedClusters",
                      "managedClusters",
                      "provisionedClusters",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the flux configuration",
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
                  name: ["--cluster-resource-provider", "--cluster-rp"],
                  description:
                    "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
                  args: { name: "cluster-resource-provider" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show a Kustomization associated with a Flux v2 Kubernetes configuration",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description: "Name of the Kubernetes cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-type", "-t"],
                  description:
                    "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
                  args: {
                    name: "cluster-type",
                    suggestions: [
                      "connectedClusters",
                      "managedClusters",
                      "provisionedClusters",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--kustomization-name", "-k"],
                  description:
                    "Specify the name of the kustomization to target",
                  args: { name: "kustomization-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the flux configuration",
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
                  name: ["--cluster-resource-provider", "--cluster-rp"],
                  description:
                    "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
                  args: { name: "cluster-resource-provider" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Kustomization associated with a Flux v2 Kubernetes configuration",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description: "Name of the Kubernetes cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-type", "-t"],
                  description:
                    "Specify Arc connected clusters or AKS managed clusters or provisioned clusters",
                  args: {
                    name: "cluster-type",
                    suggestions: [
                      "connectedClusters",
                      "managedClusters",
                      "provisionedClusters",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--kustomization-name", "-k"],
                  description:
                    "Specify the name of the kustomization to target",
                  args: { name: "kustomization-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the flux configuration",
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
                  name: ["--cluster-resource-provider", "--cluster-rp"],
                  description:
                    "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
                  args: { name: "cluster-resource-provider" },
                },
                {
                  name: ["--dependencies", "--depends-on", "--depends"],
                  description:
                    "Comma-separated list of kustomization dependencies",
                  args: { name: "dependencies" },
                },
                {
                  name: "--force",
                  description:
                    "Re-create resources that cannot be updated on the cluster (i.e. jobs)",
                  args: { name: "force", suggestions: ["false", "true"] },
                },
                {
                  name: ["--sync-interval", "--interval"],
                  description:
                    "Time between reconciliations of the kustomization on the cluster",
                  args: { name: "sync-interval" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--path",
                  description:
                    "Specify the path in the source that the kustomization should apply",
                  args: { name: "path" },
                },
                {
                  name: "--prune",
                  description:
                    "Garbage collect resources deployed by the kustomization on the cluster",
                  args: { name: "prune", suggestions: ["false", "true"] },
                },
                {
                  name: "--retry-interval",
                  description:
                    "Time between reconciliations of the kustomization on the cluster on failures, defaults to --sync-interval",
                  args: { name: "retry-interval" },
                },
                {
                  name: "--timeout",
                  description:
                    "Maximum time to reconcile the kustomization before timing out",
                  args: { name: "timeout" },
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
