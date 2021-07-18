const completionSpec: Fig.Spec = {
  name: "gcloud",
  description: "Manage Google Cloud Platform resources and developer workflow.",
  subcommands: [
    {
      name: "access-context-manager",
      description: "Manage Access Context Manager resources.",
      loadSpec: "gcloud/access-context-manager",
    },
    {
      name: "active-directory",
      description: "Manage Managed Microsoft AD resources.",
      loadSpec: "gcloud/active-directory",
    },
    {
      name: "ai-platform",
      description: "Manage AI Platform jobs and models.",
      loadSpec: "gcloud/ai-platform",
    },
    {
      name: "alpha",
      description: "*(ALPHA)*  Alpha versions of gcloud commands.",
      loadSpec: "gcloud/alpha",
    },
    {
      name: "anthos",
      description: "Anthos command Group.",
      loadSpec: "gcloud/anthos",
    },
    {
      name: "apigee",
      description: "Manage Apigee resources.",
      loadSpec: "gcloud/apigee",
    },
    {
      name: "app",
      description: "Manage your App Engine deployments.",
      loadSpec: "gcloud/app",
    },
    {
      name: "artifacts",
      description: "Manage Artifact Registry resources.",
      loadSpec: "gcloud/artifacts",
    },
    {
      name: "asset",
      description: "Manage the Cloud Asset Inventory.",
      loadSpec: "gcloud/asset",
    },
    {
      name: "auth",
      description: "Manage oauth2 credentials for the Google Cloud SDK.",
      loadSpec: "gcloud/auth",
    },
    {
      name: "beta",
      description: "*(BETA)*  Beta versions of gcloud commands.",
      loadSpec: "gcloud/beta",
    },
    {
      name: "bigtable",
      description: "Manage your Cloud Bigtable storage.",
      loadSpec: "gcloud/bigtable",
    },
    {
      name: "builds",
      description: "Create and manage builds for Google Cloud Build.",
      loadSpec: "gcloud/builds",
    },
    {
      name: "cheat-sheet",
      description: "Display gcloud cheat sheet.",
      loadSpec: "gcloud/cheat-sheet",
    },
    {
      name: "cloud-shell",
      description: "Manage Google Cloud Shell.",
      loadSpec: "gcloud/cloud-shell",
    },
    {
      name: "components",
      description:
        "List, install, update, or remove Google Cloud SDK components.",
      loadSpec: "gcloud/components",
    },
    {
      name: "composer",
      description: "Create and manage Cloud Composer Environments.",
      loadSpec: "gcloud/composer",
    },
    {
      name: "compute",
      description: "Create and manipulate Compute Engine resources.",
      loadSpec: "gcloud/compute",
    },
    {
      name: "config",
      description: "View and edit Cloud SDK properties.",
      loadSpec: "gcloud/config",
    },
    {
      name: "container",
      description:
        "Deploy and manage clusters of machines for running containers.",
      loadSpec: "gcloud/container",
    },
    {
      name: "data-catalog",
      description: "Manage Cloud Data Catalog resources.",
      loadSpec: "gcloud/data-catalog",
    },
    {
      name: "dataflow",
      description: "Manage Google Cloud Dataflow resources.",
      loadSpec: "gcloud/dataflow",
    },
    {
      name: "dataproc",
      description: "Create and manage Google Cloud Dataproc clusters and jobs.",
      loadSpec: "gcloud/dataproc",
    },
    {
      name: "datastore",
      description: "Manage your Cloud Datastore resources.",
      loadSpec: "gcloud/datastore",
    },
    {
      name: "debug",
      description: "Commands for interacting with the Cloud Debugger.",
      loadSpec: "gcloud/debug",
    },
    {
      name: "deployment-manager",
      description: "Manage deployments of cloud resources.",
      loadSpec: "gcloud/deployment-manager",
    },
    {
      name: "dns",
      description: "Manage your Cloud DNS managed-zones and record-sets.",
      loadSpec: "gcloud/dns",
    },
    {
      name: "docker",
      description:
        "*(DEPRECATED)*  Enable Docker CLI access to Google Container Registry.",
      loadSpec: "gcloud/docker",
    },
    {
      name: "domains",
      description: "Manage domains for your Google Cloud projects.",
      loadSpec: "gcloud/domains",
    },
    {
      name: "endpoints",
      description: "Create, enable and manage API services.",
      loadSpec: "gcloud/endpoints",
    },
    {
      name: "feedback",
      description: "Provide feedback to the Google Cloud SDK team.",
      loadSpec: "gcloud/feedback",
    },
    {
      name: "filestore",
      description: "Create and manipulate Cloud Filestore resources.",
      loadSpec: "gcloud/filestore",
    },
    {
      name: "firebase",
      description: "Work with Google Firebase.",
      loadSpec: "gcloud/firebase",
    },
    {
      name: "firestore",
      description: "Manage your Cloud Firestore resources.",
      loadSpec: "gcloud/firestore",
    },
    {
      name: "functions",
      description: "Manage Google Cloud Functions.",
      loadSpec: "gcloud/functions",
    },
    {
      name: "game",
      description: "Managed Cloud Game Services.",
      loadSpec: "gcloud/game",
    },
    {
      name: "healthcare",
      description: "Manage Cloud Healthcare resources.",
      loadSpec: "gcloud/healthcare",
    },
    {
      name: "help",
      description: "Search gcloud help text.",
      loadSpec: "gcloud/help",
    },
    {
      name: "iam",
      description: "Manage IAM service accounts and keys.",
      loadSpec: "gcloud/iam",
    },
    {
      name: "iap",
      description: "Manage IAP policies.",
      loadSpec: "gcloud/iap",
    },
    {
      name: "identity",
      description: "Manage Cloud Identity Groups and Memberships resources.",
      loadSpec: "gcloud/identity",
    },
    {
      name: "info",
      description: "Display information about the current gcloud environment.",
      loadSpec: "gcloud/info",
    },
    {
      name: "init",
      description: "Initialize or reinitialize gcloud.",
      loadSpec: "gcloud/init",
    },
    {
      name: "iot",
      description: "Manage Cloud IoT resources.",
      loadSpec: "gcloud/iot",
    },
    {
      name: "kms",
      description: "Manage cryptographic keys in the cloud.",
      loadSpec: "gcloud/kms",
    },
    {
      name: "logging",
      description: "Manage Cloud Logging.",
      loadSpec: "gcloud/logging",
    },
    {
      name: "meta",
      description: "Cloud meta introspection commands.",
      loadSpec: "gcloud/meta",
    },
    {
      name: "ml",
      description: "Use Google Cloud machine learning capabilities.",
      loadSpec: "gcloud/ml",
    },
    {
      name: "ml-engine",
      description: "Manage AI Platform jobs and models.",
      loadSpec: "gcloud/ml-engine",
    },
    {
      name: "monitoring",
      description: "Manage Cloud Monitoring dashboards.",
      loadSpec: "gcloud/monitoring",
    },
    {
      name: "network-management",
      description: "Manage Network Management resources.",
      loadSpec: "gcloud/network-management",
    },
    {
      name: "organizations",
      description: "Create and manage Google Cloud Platform Organizations.",
      loadSpec: "gcloud/organizations",
    },
    {
      name: "policy-troubleshoot",
      description: "Troubleshoot Google Cloud Platform policies.",
      loadSpec: "gcloud/policy-troubleshoot",
    },
    {
      name: "projects",
      description: "Create and manage project access policies.",
      loadSpec: "gcloud/projects",
    },
    {
      name: "pubsub",
      description: "Manage Cloud Pub/Sub topics, subscriptions, and snapshots.",
      loadSpec: "gcloud/pubsub",
    },
    {
      name: "recommender",
      description: "Manage Cloud recommendations and recommendation rules.",
      loadSpec: "gcloud/recommender",
    },
    {
      name: "redis",
      description: "Manage Cloud Memorystore Redis resources.",
      loadSpec: "gcloud/redis",
    },
    {
      name: "resource-manager",
      description: "Manage Cloud Resources.",
      loadSpec: "gcloud/resource-manager",
    },
    {
      name: "run",
      description: "Manage your Cloud Run applications.",
      loadSpec: "gcloud/run",
    },
    {
      name: "scc",
      description: "Manage Cloud SCC resources.",
      loadSpec: "gcloud/scc",
    },
    {
      name: "scheduler",
      description: "Manage Cloud Scheduler jobs and schedules.",
      loadSpec: "gcloud/scheduler",
    },
    {
      name: "secrets",
      description: "Manage secrets on Google Cloud.",
      loadSpec: "gcloud/secrets",
    },
    {
      name: "services",
      description: "List, enable and disable APIs and services.",
      loadSpec: "gcloud/services",
    },
    {
      name: "source",
      description: "Cloud git repository commands.",
      loadSpec: "gcloud/source",
    },
    {
      name: "spanner",
      description: "Command groups for Cloud Spanner.",
      loadSpec: "gcloud/spanner",
    },
    {
      name: "sql",
      description: "Create and manage Google Cloud SQL databases.",
      loadSpec: "gcloud/sql",
    },
    {
      name: "survey",
      description: "Invoke a customer satisfaction survey for Cloud SDK.",
      loadSpec: "gcloud/survey",
    },
    {
      name: "tasks",
      description: "Manage Cloud Tasks queues and tasks.",
      loadSpec: "gcloud/tasks",
    },
    {
      name: "topic",
      description: "gcloud supplementary help.",
      loadSpec: "gcloud/topic",
    },
    {
      name: "version",
      description: "Print version information for Cloud SDK components.",
      loadSpec: "gcloud/version",
    },
  ],
};

export default completionSpec;
