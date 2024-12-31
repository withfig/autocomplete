const completionSpec: Fig.Spec = {
  name: "oci",
  description: "Oracle Cloud Infrastructure CLI",
  subcommands: [
    {
      name: "compute",
      description: "Manage Compute resources like instances and images",
      subcommands: [
        {
          name: "instance",
          description: "Manage Compute instances",
          subcommands: [
            {
              name: "launch",
              description: "Launch a new compute instance",
              options: [
                {
                  name: "--availability-domain",
                  description: "The availability domain of the instance",
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description: "The OCID of the compartment",
                  isRequired: true,
                },
                {
                  name: "--shape",
                  description: "The shape of the instance",
                  isRequired: true,
                },
              ],
            },
            {
              name: "terminate",
              description: "Terminate a compute instance",
              options: [
                {
                  name: "--instance-id",
                  description: "The OCID of the instance",
                  isRequired: true,
                },
              ],
            },
            {
              name: "start",
              description: "Start a stopped instance",
              options: [
                {
                  name: "--instance-id",
                  description: "The OCID of the instance",
                  isRequired: true,
                },
              ],
            },
            {
              name: "stop",
              description: "Stop a running instance",
              options: [
                {
                  name: "--instance-id",
                  description: "The OCID of the instance",
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "image",
          description: "Manage Custom Images",
          subcommands: [
            {
              name: "list",
              description: "List available compute images",
              options: [
                {
                  name: "--compartment-id",
                  description: "The OCID of the compartment",
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "network",
      description: "Manage Virtual Cloud Network resources",
      subcommands: [
        {
          name: "vcn",
          description: "Manage Virtual Cloud Networks",
          subcommands: [
            {
              name: "create",
              description: "Create a new VCN",
              options: [
                {
                  name: "--compartment-id",
                  description: "The OCID of the compartment",
                  isRequired: true,
                },
                {
                  name: "--cidr-block",
                  description: "The CIDR block of the VCN",
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "db",
      description: "Manage Database resources",
      subcommands: [
        {
          name: "autonomous-database",
          description: "Manage Autonomous Databases",
          subcommands: [
            {
              name: "create",
              description: "Create an Autonomous Database",
              options: [
                {
                  name: "--compartment-id",
                  description: "The OCID of the compartment",
                  isRequired: true,
                },
                {
                  name: "--db-name",
                  description: "The database name",
                  isRequired: true,
                },
                {
                  name: "--cpu-core-count",
                  description: "Number of CPU cores",
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "os",
      description: "Object Storage commands",
      subcommands: [
        {
          name: "bucket",
          description: "Manage buckets",
          subcommands: [
            {
              name: "create",
              description: "Create a new bucket",
              options: [
                {
                  name: "--compartment-id",
                  description: "The OCID of the compartment",
                  isRequired: true,
                },
                {
                  name: "--name",
                  description: "The name of the bucket",
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "iam",
      description: "Manage Identity and Access Management resources",
      subcommands: [
        {
          name: "user",
          description: "Manage users",
          subcommands: [
            {
              name: "create",
              description: "Create a new user",
              options: [
                {
                  name: "--name",
                  description: "Name of the user",
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "Description for the user",
                },
              ],
            },
          ],
        },
        {
          name: "policy",
          description: "Manage IAM policies",
          subcommands: [
            {
              name: "create",
              description: "Create a new policy",
              options: [
                {
                  name: "--name",
                  description: "Name of the policy",
                  isRequired: true,
                },
                {
                  name: "--statements",
                  description: "Policy statements",
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "group",
          description: "Manage IAM groups",
          subcommands: [
            {
              name: "create",
              description: "Create a new group",
              options: [
                {
                  name: "--name",
                  description: "The name of the group",
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "Description for the group",
                },
              ],
            },
          ],
        },
        {
          name: "compartment",
          description: "Manage compartments",
          subcommands: [
            {
              name: "create",
              description: "Create a new compartment",
              options: [
                {
                  name: "--name",
                  description: "The name of the compartment",
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "Description for the compartment",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "kms",
      description: "Manage Key Management resources",
      subcommands: [
        {
          name: "key",
          description: "Manage encryption keys",
          subcommands: [
            {
              name: "create",
              description: "Create a new key",
              options: [
                {
                  name: "--compartment-id",
                  description: "The OCID of the compartment",
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "Display name of the key",
                  isRequired: true,
                },
                {
                  name: "--key-shape",
                  description: "Shape of the key",
                  args: {
                    suggestions: ["AES", "RSA", "ECDSA"],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "monitoring",
      description: "Manage Monitoring and Alerts",
      subcommands: [
        {
          name: "alarm",
          description: "Manage monitoring alarms",
          subcommands: [
            {
              name: "create",
              description: "Create a new alarm",
              options: [
                {
                  name: "--display-name",
                  description: "Display name of the alarm",
                  isRequired: true,
                },
                {
                  name: "--metric-compartment-id",
                  description: "Compartment OCID containing the metric",
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "budget",
      description: "Manage Budgets and Cost Controls",
      subcommands: [
        {
          name: "create",
          description: "Create a new budget",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              isRequired: true,
            },
            {
              name: "--amount",
              description: "The amount for the budget",
              isRequired: true,
            },
            {
              name: "--reset-period",
              description: "The reset period for the budget",
              args: {
                suggestions: ["MONTHLY", "YEARLY"],
              },
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for oci",
    },
    {
      name: ["--profile", "-p"],
      description: "The profile to load from the config file",
      args: {
        name: "profile",
        default: "DEFAULT",
      },
    },
    {
      name: "--config-file",
      description: "The path to the config file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--region",
      description: "The region to make calls against",
      args: {
        suggestions: [
          // North America
          "us-ashburn-1",
          "us-phoenix-1",
          "us-chicago-1",
          "ca-montreal-1",
          "ca-toronto-1",
          // South America
          "sa-saopaulo-1",
          "sa-vinhedo-1",
          "sa-santiago-1",
          // Europe
          "eu-frankfurt-1",
          "eu-amsterdam-1",
          "eu-zurich-1",
          "eu-madrid-1",
          "uk-london-1",
          "uk-cardiff-1",
          // Asia
          "ap-tokyo-1",
          "ap-osaka-1",
          "ap-seoul-1",
          "ap-sydney-1",
          "ap-melbourne-1",
          "ap-hyderabad-1",
          "ap-mumbai-1",
          // Middle East & Africa
          "me-dubai-1",
        ],
      },
    },
    {
      name: "--output",
      description: "The output format",
      args: {
        suggestions: ["json", "table", "text"],
      },
    },
    {
      name: "--debug",
      description: "Turn on debug logging",
    },
    {
      name: "--auth",
      description: "The type of auth to use",
      args: {
        suggestions: [
          "api_key",
          "instance_principal",
          "resource_principal",
          "security_token",
          "raw_token",
        ],
      },
    },
    {
      name: "--key-file",
      description: "The path to the private key file",
      args: {
        template: "filepaths",
      },
    },
    {
      name: "--wait-for-state",
      description: "Wait until resource reaches a given state",
      args: {
        suggestions: [
          "ACCEPTED",
          "AVAILABLE",
          "RUNNING",
          "PROVISIONING",
          "STOPPED",
          "TERMINATED",
          "FAILED",
        ],
      },
    },
    {
      name: "--wait-interval-seconds",
      description: "Check interval seconds for --wait-for-state",
      args: {
        name: "seconds",
        default: "30",
      },
    },
    {
      name: "--max-wait-seconds",
      description: "Maximum time to wait",
      args: {
        name: "seconds",
        default: "1200",
      },
    },
    {
      name: "--raw-output",
      description: "Output raw response from OCI API",
    },
    {
      name: "--output-format",
      description: "The output format for commands",
      args: {
        suggestions: ["json", "table", "text"],
      },
    },
    {
      name: "--query",
      description: "JMESPath query to filter the output",
    },
  ],
};

export default completionSpec;
