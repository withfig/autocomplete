const completionSpec: Fig.Spec = {
  name: "mongocli",
  description: "CLI tool to manage your MongoDB Cloud",
  subcommands: [
    {
      name: "config",
      description:
        "Configure a profile to store access settings for your MongoDB deployment",
      subcommands: [
        {
          name: "set",
          description: "Configure specific properties of a profile",
        },
        {
          name: ["ls", "list"],
          description: "List available profiles",
          options: [
            {
              name: ["--output", "-o"],
              description:
                "Output format. Valid values are json, json-path, go-template, or go-template-file",
              args: { name: "output" },
            },
          ],
        },
        {
          name: ["get", "describe"],
          description: "Return a specific profile",
          options: [
            {
              name: ["--output", "-o"],
              description:
                "Output format. Valid values are json, json-path, go-template, or go-template-file",
              args: { name: "output" },
            },
          ],
        },
        { name: ["mv", "rename"], description: "Rename a profile" },
        {
          name: ["rm", "delete"],
          description: "Delete a profile",
          options: [
            {
              name: "--force",
              description:
                "If specified, skips asking for confirmation before proceeding with a requsted action",
            },
          ],
        },
      ],
      options: [
        {
          name: "--service",
          description:
            "Type of MongoDB service. Valid values are cloud, cloudgov, cloud-manager, or ops-manager",
          args: { name: "service", default: "cloud" },
        },
      ],
    },
    {
      name: "atlas",
      description: "MongoDB Atlas operations",
      subcommands: [
        {
          name: "quickstart",
          description: "Create and access an Atlas Cluster",
          options: [
            {
              name: "--accessListIp",
              description: "IP address to be allowed to access the deployment",
              args: { name: "accessListIp" },
            },
            {
              name: "--clusterName",
              description: "Name of the cluster",
              args: { name: "clusterName" },
            },
            {
              name: ["--default", "-Y"],
              description:
                "Flag that indicates whether to run the Quickstart command with all the auto-generated values to deploy and access an Atlas cluster",
            },
            {
              name: "--force",
              description:
                "If specified, skips asking for confirmation before proceeding with a requsted action",
            },
            {
              name: "--password",
              description: "User's password",
              args: { name: "password" },
            },
            {
              name: "--projectId",
              description:
                "Project ID to use. Overrides the settings in the configuration file or environment variable",
              args: { name: "projectId" },
            },
            {
              name: "--provider",
              description:
                "Name of your cloud service provider. Valid values are AWS, AZURE, or GCP",
              args: { name: "provider" },
            },
            {
              name: ["--region", "-r"],
              description:
                "Physical location of your MongoDB cluster. For a complete list of supported AWS regions, see: https://docs.atlas.mongodb.com/reference/amazon-aws/#amazon-aws. For a complete list of supported Azure regions, see: https://docs.atlas.mongodb.com/reference/microsoft-azure/#microsoft-azure. For a complete list of supported GCP regions, see: https://docs.atlas.mongodb.com/reference/google-gcp/#google-gcp",
              args: { name: "region" },
            },
            {
              name: "--skipMongosh",
              description:
                "Indicates whether to skip accessing your deployment with MongoDB Shell",
            },
            {
              name: "--skipSampleData",
              description:
                "Indicates whether to skip loading sample data into your Atlas Cluster",
            },
            {
              name: "--tier",
              description: "Tier for each data-bearing server in the cluster",
              args: { name: "tier", default: "M0" },
            },
            {
              name: "--username",
              description: "Username for authenticating to MongoDB",
              args: { name: "username" },
            },
          ],
        },
        {
          name: ["cluster", "clusters"],
          description: "Manage clusters for your project",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List clusters for your project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["get", "describe"],
              description: "Describe a cluster",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "create",
              description: "Create one cluster in the specified project",
              options: [
                {
                  name: "--backup",
                  description:
                    "If true, enables Continuous Cloud Backup for your deployment",
                },
                {
                  name: "--biConnector",
                  description:
                    "If true, enables BI Connector for Atlas on the deployment",
                },
                {
                  name: "--diskSizeGB",
                  description:
                    "Capacity, in gigabytes, of the host's root volume",
                  args: { name: "diskSizeGB", default: "2" },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "File name to use, optional file with a json cluster configuration",
                  args: { name: "file", template: ["filepaths"] },
                },
                {
                  name: "--mdbVersion",
                  description: "MongoDB version of the cluster to deploy",
                  args: { name: "mdbVersion" },
                },
                {
                  name: ["--members", "-m"],
                  description: "Number of members in the replica set",
                  args: { name: "members", default: "3" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--provider",
                  description:
                    "Name of your cloud service provider. Valid values are AWS, AZURE, or GCP",
                  args: { name: "provider" },
                },
                {
                  name: ["--region", "-r"],
                  description:
                    "Physical location of your MongoDB cluster. For a complete list of supported AWS regions, see: https://docs.atlas.mongodb.com/reference/amazon-aws/#amazon-aws. For a complete list of supported Azure regions, see: https://docs.atlas.mongodb.com/reference/microsoft-azure/#microsoft-azure. For a complete list of supported GCP regions, see: https://docs.atlas.mongodb.com/reference/google-gcp/#google-gcp",
                  args: { name: "region" },
                },
                {
                  name: ["--shards", "-s"],
                  description: "Number of shards in the cluster",
                  args: { name: "shards", default: "1" },
                },
                {
                  name: "--tier",
                  description:
                    "Tier for each data-bearing server in the cluster",
                  args: { name: "tier", default: "M2" },
                },
                {
                  name: "--type",
                  description:
                    "Type of the cluster that you want to create. Valid values are REPLICASET or SHARDED",
                  args: { name: "type", default: "REPLICASET" },
                },
              ],
            },
            {
              name: "watch",
              description: "Watch for a cluster to be available",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a MongoDB cluster",
              options: [
                {
                  name: "--diskSizeGB",
                  description:
                    "Capacity, in gigabytes, of the host's root volume",
                  args: { name: "diskSizeGB", default: "0" },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "File name to use, optional file with a json cluster configuration",
                  args: { name: "file", template: ["filepaths"] },
                },
                {
                  name: "--mdbVersion",
                  description: "MongoDB version of the cluster to deploy",
                  args: { name: "mdbVersion" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--tier",
                  description:
                    "Tier for each data-bearing server in the cluster",
                  args: { name: "tier" },
                },
              ],
            },
            {
              name: "pause",
              description: "Pause a running MongoDB cluster in Atlas",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "start",
              description: "Start a paused MongoDB cluster in Atlas",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete a cluster from your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "loadSampleData",
              description: "Load sample data into a MongoDB cluster in Atlas",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["index", "indexes"],
              description: "Manage cluster rolling indexes for your project",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a rolling index for your MongoDB cluster",
                  options: [
                    {
                      name: "--clusterName",
                      description: "Name of the cluster",
                      args: { name: "clusterName" },
                      isRequired: true,
                    },
                    {
                      name: "--collection",
                      description: "Collection name",
                      args: { name: "collection" },
                      isRequired: true,
                    },
                    {
                      name: "--db",
                      description: "Database name",
                      args: { name: "db" },
                      isRequired: true,
                    },
                    {
                      name: "--key",
                      description:
                        "Field to be indexed and the type of index in the following format: field:type",
                      args: { name: "key" },
                      isRequired: true,
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--sparse",
                      description:
                        "Flag that indicates whether Atlas should create a sparse index",
                    },
                  ],
                },
              ],
            },
            {
              name: ["fts", "search"],
              description: "Manage Atlas Search for your cluster",
              subcommands: [
                {
                  name: ["index", "indexes"],
                  description: "Manage Atlas Search indexes for your cluster",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List Atlas search indexes for a cluster",
                      options: [
                        {
                          name: "--clusterName",
                          description: "Name of the cluster",
                          args: { name: "clusterName" },
                          isRequired: true,
                        },
                        {
                          name: "--collection",
                          description: "Collection name",
                          args: { name: "collection" },
                          isRequired: true,
                        },
                        {
                          name: "--db",
                          description: "Database name",
                          args: { name: "db" },
                          isRequired: true,
                        },
                        {
                          name: "--limit",
                          description: "Number of items per page",
                          args: { name: "limit", default: "100" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--page",
                          description: "Page number",
                          args: { name: "page", default: "1" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: "create",
                      description: "Create a search index for a cluster",
                      options: [
                        {
                          name: "--analyzer",
                          description:
                            "Analyzer to use when creating the index",
                          hidden: true,
                          args: {
                            name: "analyzer",
                            default: "lucene.standard",
                          },
                        },
                        {
                          name: "--clusterName",
                          description: "Name of the cluster",
                          args: { name: "clusterName" },
                          isRequired: true,
                        },
                        {
                          name: "--collection",
                          description: "Collection name",
                          hidden: true,
                          args: { name: "collection" },
                        },
                        {
                          name: "--db",
                          description: "Database name",
                          hidden: true,
                          args: { name: "db" },
                        },
                        {
                          name: "--dynamic",
                          description:
                            "Indicates whether the index uses dynamic or static mappings",
                          hidden: true,
                        },
                        {
                          name: "--field",
                          description: "Static field specifications",
                          hidden: true,
                          args: { name: "field" },
                        },
                        {
                          name: ["--file", "-f"],
                          description:
                            "File name to use, file with a json index configuration",
                          args: { name: "file", template: ["filepaths"] },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                        {
                          name: "--searchAnalyzer",
                          description:
                            "Analyzer to use when searching the index",
                          hidden: true,
                          args: {
                            name: "searchAnalyzer",
                            default: "lucene.standard",
                          },
                        },
                      ],
                    },
                    {
                      name: "describe",
                      description: "Describe a search index for a cluster",
                      options: [
                        {
                          name: "--clusterName",
                          description: "Name of the cluster",
                          args: { name: "clusterName" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: "update",
                      description: "Update a search index for a cluster",
                      options: [
                        {
                          name: "--analyzer",
                          description:
                            "Analyzer to use when creating the index",
                          hidden: true,
                          args: {
                            name: "analyzer",
                            default: "lucene.standard",
                          },
                        },
                        {
                          name: "--clusterName",
                          description: "Name of the cluster",
                          args: { name: "clusterName" },
                          isRequired: true,
                        },
                        {
                          name: "--collection",
                          description: "Collection name",
                          hidden: true,
                          args: { name: "collection" },
                        },
                        {
                          name: "--db",
                          description: "Database name",
                          hidden: true,
                          args: { name: "db" },
                        },
                        {
                          name: "--dynamic",
                          description:
                            "Indicates whether the index uses dynamic or static mappings",
                          hidden: true,
                        },
                        {
                          name: "--field",
                          description: "Static field specifications",
                          hidden: true,
                          args: { name: "field" },
                        },
                        {
                          name: ["--file", "-f"],
                          description:
                            "File name to use, file with a json index configuration",
                          args: { name: "file", template: ["filepaths"] },
                        },
                        {
                          name: "--indexName",
                          description: "Name of the index",
                          hidden: true,
                          args: { name: "indexName" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                        {
                          name: "--searchAnalyzer",
                          description:
                            "Analyzer to use when searching the index",
                          hidden: true,
                          args: {
                            name: "searchAnalyzer",
                            default: "lucene.standard",
                          },
                        },
                      ],
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete a search index from a cluster",
                      options: [
                        {
                          name: "--clusterName",
                          description: "Name of the cluster",
                          args: { name: "clusterName" },
                          isRequired: true,
                        },
                        {
                          name: "--force",
                          description:
                            "If specified, skips asking for confirmation before proceeding with a requsted action",
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "onlinearchives",
                "online-archives",
                "onlineArchive",
                "onlinearchive",
                "online-archive",
                "onlineArchives",
              ],
              description: "Manage online archives for your cluster",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List online archives for a cluster",
                  options: [
                    {
                      name: "--clusterName",
                      description: "Name of the cluster",
                      args: { name: "clusterName" },
                      isRequired: true,
                    },
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "describe",
                  description: "Describe an online archive for a cluster",
                  options: [
                    {
                      name: "--clusterName",
                      description: "Name of the cluster",
                      args: { name: "clusterName" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "create",
                  description: "Create an online archive for a cluster",
                  options: [
                    {
                      name: "--archiveAfter",
                      description:
                        "Number of days that specifies the age limit for the data in the live Atlas cluster",
                      args: { name: "archiveAfter", default: "0" },
                      isRequired: true,
                    },
                    {
                      name: "--clusterName",
                      description: "Name of the cluster",
                      args: { name: "clusterName" },
                      isRequired: true,
                    },
                    {
                      name: "--collection",
                      description: "Collection name",
                      args: { name: "collection" },
                      isRequired: true,
                    },
                    {
                      name: "--dateField",
                      description:
                        "Name of an already indexed date field from the documents",
                      args: { name: "dateField" },
                      isRequired: true,
                    },
                    {
                      name: "--dateFormat",
                      description:
                        "Date format for the date field. Valid values are ISODATE, EPOCH_SECONDS, EPOCH_MILLIS, or EPOCH_NANOSECONDS",
                      args: { name: "dateFormat", default: "ISODATE" },
                    },
                    {
                      name: "--db",
                      description: "Database name",
                      args: { name: "db" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--partition",
                      description:
                        "Fields to use to partition data. You can specify up to two frequently queried fields to use for partitioning data",
                      args: { name: "partition" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update an online archive for a cluster",
                  options: [
                    {
                      name: "--archiveAfter",
                      description:
                        "Number of days that specifies the age limit for the data in the live Atlas cluster",
                      args: { name: "archiveAfter", default: "0" },
                      isRequired: true,
                    },
                    {
                      name: "--clusterName",
                      description: "Name of the cluster",
                      args: { name: "clusterName" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "start",
                  description: "Start a paused online archive from a cluster",
                  options: [
                    {
                      name: "--clusterName",
                      description: "Name of the cluster",
                      args: { name: "clusterName" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "pause",
                  description: "Pause an online archive from a cluster",
                  options: [
                    {
                      name: "--clusterName",
                      description: "Name of the cluster",
                      args: { name: "clusterName" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete an online archive from a cluster",
                  options: [
                    {
                      name: "--clusterName",
                      description: "Name of the cluster",
                      args: { name: "clusterName" },
                      isRequired: true,
                    },
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "watch",
                  description: "Watch for an archive to be available",
                  options: [
                    {
                      name: "--clusterName",
                      description: "Name of the cluster",
                      args: { name: "clusterName" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "connectionstrings",
                "connection-strings",
                "connectionString",
                "connectionstring",
                "connection-string",
                "cs",
                "connectionStrings",
              ],
              description: "Manage MongoDB cluster connection string",
              subcommands: [
                {
                  name: ["get", "describe"],
                  description:
                    "Retrieve the SRV connection string of your MongoDB cluster",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--type",
                      description:
                        "When set to 'private', retrieves the connection string for the network peering endpoint",
                      args: { name: "type", default: "standard" },
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "availableregions",
                "available-regions",
                "availableRegion",
                "availableregion",
                "available-region",
                "availableRegions",
              ],
              description: "Manage available regions for your project",
              hidden: true,
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List available regions for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--provider",
                      description:
                        "Name of your cloud service provider. Valid values are AWS, AZURE, or GCP",
                      args: { name: "provider" },
                      isRequired: true,
                    },
                    {
                      name: "--tier",
                      description:
                        "Tier for each data-bearing server in the cluster",
                      args: { name: "tier" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["dbuser", "dbusers"],
          description: "Manage database users for your project",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List Atlas database users for your project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["get", "describe"],
              description:
                "Return a single Atlas database user for your project",
              options: [
                {
                  name: "--authDB",
                  description: "Authentication database name",
                  args: { name: "authDB", default: "admin" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "create",
              description: "Create a database user for your project",
              options: [
                {
                  name: "--awsIAMType",
                  description:
                    "AWS IAM method by which the provided username is authenticated. Valid values are NONE, USER, or ROLE",
                  args: { name: "awsIAMType", default: "NONE" },
                },
                {
                  name: "--deleteAfter",
                  description:
                    "Timestamp in ISO 8601 in UTC after which Atlas deletes the user",
                  args: { name: "deleteAfter" },
                },
                {
                  name: "--ldapType",
                  description:
                    "LDAP method by which the provided username is authenticated. Valid values are NONE, USER, or GROUP",
                  args: { name: "ldapType", default: "NONE" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: ["--password", "-p"],
                  description: "User's password",
                  args: { name: "password" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--role",
                  description:
                    "User's roles and the databases or collections on which the roles apply",
                  args: { name: "role" },
                },
                {
                  name: "--scope",
                  description:
                    "Array of clusters and Atlas Data Lakes that this user has access to",
                  args: { name: "scope" },
                },
                {
                  name: ["--username", "-u"],
                  description: "Username for authenticating to MongoDB",
                  args: { name: "username" },
                  isRequired: true,
                },
                {
                  name: "--x509Type",
                  description:
                    "X.509 method by which the provided username is authenticated.  Valid values are NONE, MANAGED, or CUSTOMER",
                  args: { name: "x509Type", default: "NONE" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete a database user for your project",
              options: [
                {
                  name: "--authDB",
                  description: "Authentication database name",
                  args: { name: "authDB", default: "admin" },
                },
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a database user for your project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: ["--password", "-p"],
                  description: "User's password",
                  args: { name: "password" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--role",
                  description:
                    "User's roles and the databases or collections on which the roles apply",
                  args: { name: "role" },
                },
                {
                  name: "--scope",
                  description:
                    "Array of clusters and Atlas Data Lakes that this user has access to",
                  args: { name: "scope" },
                },
                {
                  name: ["--username", "-u"],
                  description: "Username for authenticating to MongoDB",
                  args: { name: "username" },
                },
              ],
            },
            {
              name: ["cert", "certs"],
              description:
                "Manage Atlas x509 certificates for your database users",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List of all Atlas-managed, unexpired certificates for a database user",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "create",
                  description:
                    "Create a new Atlas-managed X.509 certificate for the specified database user",
                  options: [
                    {
                      name: "--monthsUntilExpiration",
                      description:
                        "Number of months that the certificate is valid for",
                      args: { name: "monthsUntilExpiration", default: "3" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--username",
                      description: "Username of a database user",
                      args: { name: "username" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: [
            "customdbroles",
            "custom-db-roles",
            "customDbRole",
            "customdbrole",
            "custom-db-role",
            "customDBRoles",
            "customDbRoles",
          ],
          description: "Manage custom database roles for your project",
          subcommands: [
            {
              name: "create",
              description: "Create a custom database role for your project",
              options: [
                {
                  name: "--inheritedRole",
                  description:
                    "List of inherited roles and the database on which the role is granted",
                  args: { name: "inheritedRole" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--privilege",
                  description:
                    "List of actions per database and collection. If no database or collections are provided, cluster scope is assumed",
                  args: { name: "privilege" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["get", "describe"],
              description:
                "Return a single custom database role for your project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["ls", "list"],
              description: "List custom database roles for your project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "0" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "0" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete a custom database role for your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a custom database role for your project",
              options: [
                {
                  name: "--append",
                  description:
                    "The input action and inheritedRoles that will be appended to the existing role",
                },
                {
                  name: "--inheritedRole",
                  description:
                    "List of inherited roles and the database on which the role is granted",
                  args: { name: "inheritedRole" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--privilege",
                  description:
                    "List of actions per database and collection. If no database or collections are provided, cluster scope is assumed",
                  args: { name: "privilege" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "accesslists",
            "access-lists",
            "accessList",
            "accesslist",
            "access-list",
            "whitelists",
            "whitelist",
            "accessLists",
          ],
          description: "Manage the access IP access list for your project",
          subcommands: [
            {
              name: ["get", "describe"],
              description: "Describe an IP access list entry",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["ls", "list"],
              description: "List Atlas IP access list entries for your project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "create",
              description: "Create an IP access list for your project",
              options: [
                {
                  name: "--comment",
                  description: "Optional description or comment for the entry",
                  args: { name: "comment" },
                },
                {
                  name: "--currentIp",
                  description:
                    "Flag that indicates whether to use the IP Address from the host that is currently executing the command. Only applicable for type ipAddress entries. To learn more, see: https://docs.mongodb.com/mongocli/master/command/mongocli-atlas-accessLists-create/",
                },
                {
                  name: "--deleteAfter",
                  description:
                    "ISO-8601-formatted UTC date after which Atlas removes the value from the entry",
                  args: { name: "deleteAfter" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--type",
                  description:
                    "Type of access list entry. Valid values are cidrBlock, ipAddress, or awsSecurityGroup",
                  args: { name: "type", default: "ipAddress" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete an IP access list from your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "datalakes",
            "data-lakes",
            "dataLake",
            "datalake",
            "data-lake",
            "dataLakes",
          ],
          description: "Manage Atlas Data Lakes for your project",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List Atlas Data Lakes for your project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "describe",
              description: "Return a specific data lake",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "create",
              description: "Create a new data lake for your project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--role",
                  description:
                    "Amazon Resource Name (ARN) of the role which Atlas Data Lake uses for accessing the data stores",
                  args: { name: "role" },
                  isRequired: true,
                },
                {
                  name: "--testBucket",
                  description:
                    "Name of an Amazon S3 data bucket which Atlas Data Lake uses to validate the provided role",
                  args: { name: "testBucket" },
                  isRequired: true,
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete a data lake from your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a data lake for your project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--region",
                  description:
                    "Name of the region to which Atlas Data Lake routes client connections for data processing",
                  args: { name: "region" },
                },
                {
                  name: "--role",
                  description:
                    "Amazon Resource Name (ARN) of the role which Atlas Data Lake uses for accessing the data stores",
                  args: { name: "role" },
                },
                {
                  name: "--testBucket",
                  description:
                    "Name of an Amazon S3 data bucket which Atlas Data Lake uses to validate the provided role",
                  args: { name: "testBucket" },
                },
              ],
            },
          ],
        },
        {
          name: ["alert", "alerts"],
          description: "Manage alerts for your project",
          subcommands: [
            {
              name: ["config", "settings"],
              description: "Manages alerts configuration for your project",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Creates one alert configuration in the specified project",
                  options: [
                    {
                      name: "--apiKey",
                      description:
                        "Datadog API Key, Opsgenie API Key, VictorOps API key",
                      args: { name: "apiKey" },
                    },
                    {
                      name: "--enabled",
                      description:
                        "If set to true, the alert configuration is enabled",
                    },
                    {
                      name: "--event",
                      description: "Type of the event that triggered the alert",
                      args: { name: "event" },
                    },
                    {
                      name: "--matcherFieldName",
                      description:
                        "Name of the field in the target object to match on",
                      args: { name: "matcherFieldName" },
                    },
                    {
                      name: "--matcherOperator",
                      description: "Operator to test the field's value",
                      args: { name: "matcherOperator" },
                    },
                    {
                      name: "--matcherValue",
                      description: "Value to test with the specified operator",
                      args: { name: "matcherValue" },
                    },
                    {
                      name: "--metricMode",
                      description:
                        "If specified, Atlas computes the current metric value as an average",
                      args: { name: "metricMode" },
                    },
                    {
                      name: "--metricName",
                      description:
                        "Name of the metric against which Atlas checks the configured alert",
                      args: { name: "metricName" },
                    },
                    {
                      name: "--metricOperator",
                      description:
                        "Operator to apply when checking the current metric value against the threshold value",
                      args: { name: "metricOperator" },
                    },
                    {
                      name: "--metricThreshold",
                      description:
                        "Threshold value outside of which an alert will be triggered",
                      args: { name: "metricThreshold", default: "0" },
                    },
                    {
                      name: "--metricUnits",
                      description: "Units for the threshold value",
                      args: { name: "metricUnits" },
                    },
                    {
                      name: "--notificationChannelName",
                      description:
                        "Slack channel name. Required for the SLACK notifications type",
                      args: { name: "notificationChannelName" },
                    },
                    {
                      name: "--notificationDelayMin",
                      description:
                        "Number of minutes to wait after an alert condition is detected before sending out the first notification",
                      args: { name: "notificationDelayMin", default: "0" },
                    },
                    {
                      name: "--notificationEmailAddress",
                      description:
                        "Email address to which alert notifications are sent",
                      args: { name: "notificationEmailAddress" },
                    },
                    {
                      name: "--notificationEmailEnabled",
                      description:
                        "Flag indicating whether email notifications should be sent",
                    },
                    {
                      name: "--notificationFlowName",
                      description:
                        "Flowdock Flow name in lower-case letters for sending alert notifications",
                      args: { name: "notificationFlowName" },
                    },
                    {
                      name: "--notificationIntervalMin",
                      description:
                        "Number of minutes to wait between successive notifications for unacknowledged alerts that are not resolved",
                      args: { name: "notificationIntervalMin", default: "0" },
                    },
                    {
                      name: "--notificationMobileNumber",
                      description:
                        "Mobile number to which alert notifications are sent",
                      args: { name: "notificationMobileNumber" },
                    },
                    {
                      name: "--notificationOrgName",
                      description:
                        "Flowdock organization's name in lower-case letters",
                      args: { name: "notificationOrgName" },
                    },
                    {
                      name: "--notificationRegion",
                      description: "Region that indicates which API URL to use",
                      args: { name: "notificationRegion" },
                    },
                    {
                      name: "--notificationServiceKey",
                      description: "PagerDuty service key",
                      args: { name: "notificationServiceKey" },
                    },
                    {
                      name: "--notificationSmsEnabled",
                      description:
                        "Flag indicating whether text message notifications should be sent",
                    },
                    {
                      name: "--notificationTeamId",
                      description: "Unique identifier of a team",
                      args: { name: "notificationTeamId" },
                    },
                    {
                      name: "--notificationToken",
                      description:
                        "Slack API token, Bot token, or Flowdock personal API token",
                      args: { name: "notificationToken" },
                    },
                    {
                      name: "--notificationType",
                      description:
                        "Type of alert notification. The values are DATADOG, EMAIL, FLOWDOCK, GROUP (Project), ORG, OPS_GENIE, PAGER_DUTY, SLACK, SMS, USER, or VICTOR_OPS",
                      args: { name: "notificationType" },
                    },
                    {
                      name: "--notificationUsername",
                      description:
                        "Name of the Atlas user to which to send notifications",
                      args: { name: "notificationUsername" },
                    },
                    {
                      name: "--notificationVictorOpsRoutingKey",
                      description: "VictorOps routing key",
                      args: { name: "notificationVictorOpsRoutingKey" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["ls", "list"],
                  description:
                    "Returns alert configurations for the specified project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description:
                    "Deletes the specified alert configuration in a specified project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["field", "fields"],
                  description:
                    "Manages alert configuration fields for your project",
                  subcommands: [
                    {
                      name: ["types", "type"],
                      description:
                        "Lists available field types for your alert configurations",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Updates one alert configuration in the specified project",
                  options: [
                    {
                      name: "--apiKey",
                      description:
                        "Datadog API Key, Opsgenie API Key, VictorOps API key",
                      args: { name: "apiKey" },
                    },
                    {
                      name: "--enabled",
                      description:
                        "If set to true, the alert configuration is enabled",
                    },
                    {
                      name: "--event",
                      description: "Type of the event that triggered the alert",
                      args: { name: "event" },
                    },
                    {
                      name: "--matcherFieldName",
                      description:
                        "Name of the field in the target object to match on",
                      args: { name: "matcherFieldName" },
                    },
                    {
                      name: "--matcherOperator",
                      description: "Operator to test the field's value",
                      args: { name: "matcherOperator" },
                    },
                    {
                      name: "--matcherValue",
                      description: "Value to test with the specified operator",
                      args: { name: "matcherValue" },
                    },
                    {
                      name: "--metricMode",
                      description:
                        "If specified, Atlas computes the current metric value as an average",
                      args: { name: "metricMode" },
                    },
                    {
                      name: "--metricName",
                      description:
                        "Name of the metric against which Atlas checks the configured alert",
                      args: { name: "metricName" },
                    },
                    {
                      name: "--metricOperator",
                      description:
                        "Operator to apply when checking the current metric value against the threshold value",
                      args: { name: "metricOperator" },
                    },
                    {
                      name: "--metricThreshold",
                      description:
                        "Threshold value outside of which an alert will be triggered",
                      args: { name: "metricThreshold", default: "0" },
                    },
                    {
                      name: "--metricUnits",
                      description: "Units for the threshold value",
                      args: { name: "metricUnits" },
                    },
                    {
                      name: "--notificationChannelName",
                      description:
                        "Slack channel name. Required for the SLACK notifications type",
                      args: { name: "notificationChannelName" },
                    },
                    {
                      name: "--notificationDelayMin",
                      description:
                        "Number of minutes to wait after an alert condition is detected before sending out the first notification",
                      args: { name: "notificationDelayMin", default: "0" },
                    },
                    {
                      name: "--notificationEmailAddress",
                      description:
                        "Email address to which alert notifications are sent",
                      args: { name: "notificationEmailAddress" },
                    },
                    {
                      name: "--notificationEmailEnabled",
                      description:
                        "Flag indicating whether email notifications should be sent",
                    },
                    {
                      name: "--notificationFlowName",
                      description:
                        "Flowdock Flow name in lower-case letters for sending alert notifications",
                      args: { name: "notificationFlowName" },
                    },
                    {
                      name: "--notificationIntervalMin",
                      description:
                        "Number of minutes to wait between successive notifications for unacknowledged alerts that are not resolved",
                      args: { name: "notificationIntervalMin", default: "0" },
                    },
                    {
                      name: "--notificationMobileNumber",
                      description:
                        "Mobile number to which alert notifications are sent",
                      args: { name: "notificationMobileNumber" },
                    },
                    {
                      name: "--notificationOrgName",
                      description:
                        "Flowdock organization's name in lower-case letters",
                      args: { name: "notificationOrgName" },
                    },
                    {
                      name: "--notificationRegion",
                      description: "Region that indicates which API URL to use",
                      args: { name: "notificationRegion" },
                    },
                    {
                      name: "--notificationServiceKey",
                      description: "PagerDuty service key",
                      args: { name: "notificationServiceKey" },
                    },
                    {
                      name: "--notificationSmsEnabled",
                      description:
                        "Flag indicating whether text message notifications should be sent",
                    },
                    {
                      name: "--notificationTeamId",
                      description: "Unique identifier of a team",
                      args: { name: "notificationTeamId" },
                    },
                    {
                      name: "--notificationToken",
                      description:
                        "Slack API token, Bot token, or Flowdock personal API token",
                      args: { name: "notificationToken" },
                    },
                    {
                      name: "--notificationType",
                      description:
                        "Type of alert notification. The values are DATADOG, EMAIL, FLOWDOCK, GROUP (Project), ORG, OPS_GENIE, PAGER_DUTY, SLACK, SMS, USER, or VICTOR_OPS",
                      args: { name: "notificationType" },
                    },
                    {
                      name: "--notificationUsername",
                      description:
                        "Name of the Atlas user to which to send notifications",
                      args: { name: "notificationUsername" },
                    },
                    {
                      name: "--notificationVictorOpsRoutingKey",
                      description: "VictorOps routing key",
                      args: { name: "notificationVictorOpsRoutingKey" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["get", "describe"],
              description: "Retrieves one alert for the specified project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["ls", "list"],
              description:
                "Retrieves all alerts for the specified Atlas project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "0" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "0" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--status",
                  description:
                    "Alert's status. The values are TRACKING, OPEN, CLOSED, and CANCELED",
                  args: { name: "status" },
                },
              ],
            },
            {
              name: ["ack", "acknowledge"],
              description: "Acknowledges one alert for the specified project",
              options: [
                {
                  name: "--comment",
                  description: "Optional description or comment for the entry",
                  args: { name: "comment" },
                },
                {
                  name: ["--forever", "-F"],
                  description: "Acknowledges an alert 'forever'",
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--until",
                  description:
                    "Time, in ISO 8601 format, until which the alert has been acknowledged. mongocli returns this value after the alert has been acknowledged",
                  args: { name: "until" },
                },
              ],
            },
            {
              name: ["unack", "unacknowledge"],
              description: "Unacknowledges one alert for the specified project",
              options: [
                {
                  name: "--comment",
                  description: "Optional description or comment for the entry",
                  args: { name: "comment" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "global",
              description:
                "Retrieves all the global alerts for the specified Ops Manager project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Returns all global alerts for the specified Ops Manager project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--status",
                      description:
                        "Alert's status. The values are TRACKING, OPEN, CLOSED, and CANCELED",
                      args: { name: "status" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["backup", "backups"],
          description: "Manage cloud backups for your project",
          subcommands: [
            {
              name: ["snapshot", "snapshots"],
              description: "Manage cloud backup snapshots for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List cloud backup snapshots for your project and cluster",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["take", "create"],
                  description:
                    "Create a backup snapshot for your project and cluster",
                  options: [
                    {
                      name: "--desc",
                      description: "Description of the on-demand snapshot",
                      args: { name: "desc" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--retention",
                      description:
                        "Cloud provider region in which you want to create the private endpoint connection",
                      args: { name: "retention", default: "1" },
                    },
                  ],
                },
                {
                  name: "describe",
                  description: "Get a specific snapshot for your project",
                  options: [
                    {
                      name: "--clusterName",
                      description: "Name of the cluster",
                      args: { name: "clusterName" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "watch",
                  description: "Watch for a snapshot to be available",
                  options: [
                    {
                      name: "--clusterName",
                      description: "Name of the cluster",
                      args: { name: "clusterName" },
                      isRequired: true,
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a backup snapshot",
                  options: [
                    {
                      name: "--clusterName",
                      description: "Name of the cluster",
                      args: { name: "clusterName" },
                      isRequired: true,
                    },
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["restore", "restores"],
              description: "Manage cloud backup restore jobs for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List cloud backup restore jobs for your project and cluster",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "start",
                  description:
                    "Start a restore job for your project and cluster",
                  options: [
                    {
                      name: "--clusterName",
                      description: "Name of the cluster",
                      args: { name: "clusterName" },
                    },
                    {
                      name: "--oplogInc",
                      description:
                        "32-bit incrementing ordinal that represents operations within a given second. When paired with oplogTs, they represent the point in time to which your data will be restored",
                      args: { name: "oplogInc", default: "0" },
                    },
                    {
                      name: "--oplogTs",
                      description:
                        "Oplog timestamp given as a timestamp in the number of seconds that have elapsed since the UNIX Epoch. When paired with oplogInc, they represent the point in time to which your data will be restored",
                      args: { name: "oplogTs", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--pointInTimeUTCMillis",
                      description:
                        "Timestamp in the number of milliseconds that have elapsed since the UNIX epoch that represents the point in time to which your data will be restored. This timestamp must be within the last 24 hours of the current time",
                      args: { name: "pointInTimeUTCMillis", default: "0" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--snapshotId",
                      description:
                        "Unique identifier of the snapshot to restore",
                      args: { name: "snapshotId" },
                    },
                    {
                      name: "--targetClusterName",
                      description:
                        "Name of the target cluster. For use only with automated restore jobs",
                      args: { name: "targetClusterName" },
                    },
                    {
                      name: "--targetProjectId",
                      description:
                        "Unique identifier of the project that contains the destination cluster for the restore job",
                      args: { name: "targetProjectId" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["event", "events"],
          description: "Manage events for your organization or project",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "Return all events for an organization or project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "0" },
                },
                {
                  name: "--maxDate",
                  description:
                    "Returns events whose created date is less than or equal to it",
                  args: { name: "maxDate" },
                },
                {
                  name: "--minDate",
                  description:
                    "Returns events whose created date is greater than or equal to it",
                  args: { name: "minDate" },
                },
                {
                  name: "--orgId",
                  description:
                    "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "orgId" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "0" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--type",
                  description: "Type of the event that triggered the alert",
                  args: { name: "type" },
                },
              ],
            },
            {
              name: ["organization", "orgs", "org", "organizations"],
              description: "Organization operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "Return all events for an organization",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: "--maxDate",
                      description:
                        "Returns events whose created date is less than or equal to it",
                      args: { name: "maxDate" },
                    },
                    {
                      name: "--minDate",
                      description:
                        "Returns events whose created date is greater than or equal to it",
                      args: { name: "minDate" },
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--type",
                      description: "Type of the event that triggered the alert",
                      args: { name: "type" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["project", "projects"],
              description: "Project operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "Return all events for a project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: "--maxDate",
                      description:
                        "Returns events whose created date is less than or equal to it",
                      args: { name: "maxDate" },
                    },
                    {
                      name: "--minDate",
                      description:
                        "Returns events whose created date is greater than or equal to it",
                      args: { name: "minDate" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--type",
                      description: "Type of the event that triggered the alert",
                      args: { name: "type" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["metric", "measurements", "measurement", "metrics"],
          description: "Get metrics on the MongoDB process",
          subcommands: [
            {
              name: ["process", "processes"],
              description: "Get MongoDB process metrics for a given host",
              options: [
                {
                  name: "--end",
                  description:
                    "End of the period, in UNIX Epoch format, until which to retrieve measurements",
                  args: { name: "end" },
                },
                {
                  name: "--granularity",
                  description:
                    "Duration in ISO 8601 notation that specifies the interval between measurement data points. Only the following subset of ISO 8601-formatted time periods are supported: PT10S, PT1M, PT5M, PT1H, P1D",
                  args: { name: "granularity" },
                  isRequired: true,
                },
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--period",
                  description:
                    "Duration in ISO 8601 that specifies how far back in the past to retrieve measurements",
                  args: { name: "period" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--start",
                  description:
                    "Beginning of the period, in UNIX Epoch format, from which to start retrieving measurements",
                  args: { name: "start" },
                },
                {
                  name: "--type",
                  description:
                    "Measurements to return. If it is not specified, all measurements are returned",
                  args: { name: "type" },
                },
              ],
            },
            {
              name: ["disk", "disks"],
              description:
                "List available disks or disk metrics for a given host",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List available disks or disk partitions for a given host",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "describe",
                  description:
                    "Describe disk partition metrics for a disk partition on a specified host",
                  options: [
                    {
                      name: "--end",
                      description:
                        "End of the period, in UNIX Epoch format, until which to retrieve measurements",
                      args: { name: "end" },
                    },
                    {
                      name: "--granularity",
                      description:
                        "Duration in ISO 8601 notation that specifies the interval between measurement data points. Only the following subset of ISO 8601-formatted time periods are supported: PT10S, PT1M, PT5M, PT1H, P1D",
                      args: { name: "granularity" },
                      isRequired: true,
                    },
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--period",
                      description:
                        "Duration in ISO 8601 that specifies how far back in the past to retrieve measurements",
                      args: { name: "period" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--start",
                      description:
                        "Beginning of the period, in UNIX Epoch format, from which to start retrieving measurements",
                      args: { name: "start" },
                    },
                    {
                      name: "--type",
                      description:
                        "Measurements to return. If it is not specified, all measurements are returned",
                      args: { name: "type" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["database", "databases"],
              description:
                "List available databases or database metrics for a given host",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List available databases or database metrics for a given host",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "describe",
                  description:
                    "Describe database metrics for a database on a specific host",
                  options: [
                    {
                      name: "--end",
                      description:
                        "End of the period, in UNIX Epoch format, until which to retrieve measurements",
                      args: { name: "end" },
                    },
                    {
                      name: "--granularity",
                      description:
                        "Duration in ISO 8601 notation that specifies the interval between measurement data points. Only the following subset of ISO 8601-formatted time periods are supported: PT10S, PT1M, PT5M, PT1H, P1D",
                      args: { name: "granularity" },
                      isRequired: true,
                    },
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--period",
                      description:
                        "Duration in ISO 8601 that specifies how far back in the past to retrieve measurements",
                      args: { name: "period" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--start",
                      description:
                        "Beginning of the period, in UNIX Epoch format, from which to start retrieving measurements",
                      args: { name: "start" },
                    },
                    {
                      name: "--type",
                      description:
                        "Measurements to return. If it is not specified, all measurements are returned",
                      args: { name: "type" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: [
            "performanceadvisor",
            "performance-advisor",
            "performanceAdvisor",
          ],
          description: "Performance Advisor operations",
          subcommands: [
            {
              name: ["namespace", "namespaces"],
              description:
                "Retrieve namespaces for collections experiencing slow queries",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Retrieve up to 20 namespaces for collections experiencing slow queries for a specified host",
                  options: [
                    {
                      name: "--duration",
                      description:
                        "Length of time from the since parameter, in milliseconds, for which you want to receive results",
                      args: { name: "duration", default: "0" },
                    },
                    {
                      name: "--hostId",
                      description:
                        "Unique identifier for the host of a MongoDB process",
                      args: { name: "hostId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--processName",
                      description:
                        "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                      args: { name: "processName" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--since",
                      description:
                        "Point in time, specified as milliseconds since the Unix Epoch, from which you want to receive results",
                      args: { name: "since", default: "0" },
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "slowquerylogs",
                "slow-query-logs",
                "slowQueryLog",
                "slowquerylog",
                "slow-query-log",
                "slowQueryLogs",
              ],
              description:
                "Get log lines for slow queries for a specified host",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Return log lines for slow queries that the Performance Advisor and Query Profiler identified",
                  options: [
                    {
                      name: "--duration",
                      description:
                        "Length of time from the since parameter, in milliseconds, for which you want to receive results",
                      args: { name: "duration", default: "0" },
                    },
                    {
                      name: "--hostId",
                      description:
                        "Unique identifier for the host of a MongoDB process",
                      args: { name: "hostId" },
                    },
                    {
                      name: "--nLog",
                      description: "Maximum number of log lines to return",
                      args: { name: "nLog", default: "20000" },
                    },
                    {
                      name: "--namespaces",
                      description:
                        "Namespaces from which to retrieve suggested slow query logs",
                      args: { name: "namespaces" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--processName",
                      description:
                        "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                      args: { name: "processName" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--since",
                      description:
                        "Point in time, specified as milliseconds since the Unix Epoch, from which you want to receive results",
                      args: { name: "since", default: "0" },
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "suggestedindexes",
                "suggested-indexes",
                "suggestedIndex",
                "suggestedindex",
                "suggested-index",
                "suggestedIndexes",
              ],
              description:
                "Get suggested indexes for collections experiencing slow queries",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Retrieve suggested indexes for collections experiencing slow queries",
                  options: [
                    {
                      name: "--duration",
                      description:
                        "Length of time from the since parameter, in milliseconds, for which you want to receive results",
                      args: { name: "duration", default: "0" },
                    },
                    {
                      name: "--hostId",
                      description:
                        "Unique identifier for the host of a MongoDB process",
                      args: { name: "hostId" },
                    },
                    {
                      name: "--nExamples",
                      description:
                        "Maximum number of example queries to provide that will be improved by a suggested index",
                      args: { name: "nExamples", default: "0" },
                    },
                    {
                      name: "--nIndexes",
                      description: "Maximum number of indexes to suggest",
                      args: { name: "nIndexes", default: "0" },
                    },
                    {
                      name: "--namespaces",
                      description:
                        "Namespaces from which to retrieve suggested indexes",
                      args: { name: "namespaces" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--processName",
                      description:
                        "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                      args: { name: "processName" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--since",
                      description:
                        "Point in time, specified as milliseconds since the Unix Epoch, from which you want to receive results",
                      args: { name: "since", default: "0" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["slowOT", "sot", "slowMS", "slowOperationThreshold"],
              description:
                "Enable or disable management of the slow operation threshold for your cluster",
              subcommands: [
                {
                  name: ["ls", "enable"],
                  description:
                    "Enable the application-managed slow operation threshold for your project",
                  options: [
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "disable",
                  description:
                    "Disable the application-managed slow operation threshold for your project",
                  options: [
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["log", "logs"],
          description: "Download host logs for your project",
          subcommands: [
            {
              name: "download",
              description: "Download a host mongodb logs",
              options: [
                {
                  name: "--end",
                  description:
                    "End of the period, in UNIX Epoch format, until which to retrieve logs",
                  args: { name: "end" },
                },
                {
                  name: "--force",
                  description: "Overwrites the destination file",
                },
                {
                  name: "--out",
                  description:
                    "Optional output file name. Uses the log name if the output file's name is not specified",
                  args: { name: "out", template: ["filepaths"] },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--start",
                  description:
                    "Beginning of the date and time, in UNIX Epoch format, from which to retrieve logs",
                  args: { name: "start" },
                },
              ],
            },
          ],
        },
        {
          name: ["process", "processes"],
          description: "Manage MongoDB processes for your project",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List MongoDB processes for your project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "privateendpoints",
            "private-endpoints",
            "privateEndpoint",
            "privateendpoint",
            "private-endpoint",
            "privateEndpoints",
          ],
          description: "Manage Atlas private endpoints",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List Atlas Private Endpoints for your project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["get", "describe"],
              description:
                "Return a specific Private Endpoints for your project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "create",
              description: "Create a new private endpoint for your project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--provider",
                  description:
                    "Name of the cloud provider you want to create the private endpoint connection for",
                  args: { name: "provider", default: "AWS" },
                },
                {
                  name: "--region",
                  description:
                    "Cloud provider region in which you want to create the private endpoint connection",
                  args: { name: "region" },
                  isRequired: true,
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete a private endpoint from your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "watch",
              description: "Watch for a private endpoint to be available",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--provider",
                  description:
                    "Name of the cloud provider you want to create the private endpoint connection for",
                  args: { name: "provider", default: "AWS" },
                },
              ],
            },
            {
              name: ["interface", "interfaces"],
              description: "Manage Atlas private endpoint interfaces",
              subcommands: [
                {
                  name: ["add", "create"],
                  description: "Add a new interface to a private endpoint",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--privateEndpointId",
                      description:
                        "Unique identifier of the AWS PrivateLink connection",
                      args: { name: "privateEndpointId" },
                      isRequired: true,
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Return a specific private endpoint interface for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--privateEndpointId",
                      description:
                        "Unique identifier of the AWS PrivateLink connection",
                      args: { name: "privateEndpointId" },
                      isRequired: true,
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description:
                    "Delete a private endpoint interface from your project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--privateEndpointId",
                      description:
                        "Unique identifier of the AWS PrivateLink connection",
                      args: { name: "privateEndpointId" },
                      isRequired: true,
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: "aws",
              description: "Manage AWS Private Endpoints",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List AWS Private Endpoints for your project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "1" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Return a specific AWS Private Endpoints for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "create",
                  description:
                    "Create a new AWS Private Endpoint for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--region",
                      description:
                        "Cloud provider region in which you want to create the private endpoint connection",
                      args: { name: "region" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description:
                    "Delete a specific AWS Private Endpoint for your project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "watch",
                  description:
                    "Watch for a specific AWS Private Endpoint to be available",
                  options: [
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["interface", "interfaces"],
                  description: "Manage Atlas AWS private endpoint interfaces",
                  subcommands: [
                    {
                      name: ["add", "create"],
                      description:
                        "Add a new interface to a AWS private endpoint",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--privateEndpointId",
                          description:
                            "Unique identifier of the AWS PrivateLink connection",
                          args: { name: "privateEndpointId" },
                          isRequired: true,
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Return a specific AWS private endpoint interface for your project",
                      options: [
                        {
                          name: "--endpointServiceId",
                          description:
                            "Unique identifier of the private endpoint service for which you want to retrieve a private endpoint",
                          args: { name: "endpointServiceId" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete a specific AWS private endpoint interface and the related endpoint service for your project",
                      options: [
                        {
                          name: "--endpointServiceId",
                          description:
                            "Unique identifier of the private endpoint service for which you want to retrieve a private endpoint",
                          args: { name: "endpointServiceId" },
                        },
                        {
                          name: "--force",
                          description:
                            "If specified, skips asking for confirmation before proceeding with a requsted action",
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "azure",
              description: "Manage Azure Private Endpoints",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List Azure Private Endpoints for your project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Return a specific Azure Private Endpoints for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "create",
                  description:
                    "Create a new Azure Private Endpoint for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--region",
                      description:
                        "Cloud provider region in which you want to create the private endpoint connection",
                      args: { name: "region" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description:
                    "Delete a specific Azure Private Endpoint for your project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "watch",
                  description:
                    "Watch for a specific Azure Private Endpoint to be available",
                  options: [
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["interface", "interfaces"],
                  description: "Manage Atlas Azure private endpoint interfaces",
                  subcommands: [
                    {
                      name: ["add", "create"],
                      description:
                        "Add a new Azure interface to a private endpoint",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--privateEndpointId",
                          description:
                            "Unique identifier of the Azure private endpoint resource",
                          args: { name: "privateEndpointId" },
                          isRequired: true,
                        },
                        {
                          name: "--privateEndpointIpAddress",
                          description:
                            "Private IP address of the private endpoint network interface you created in your Azure VNet",
                          args: { name: "privateEndpointIpAddress" },
                          isRequired: true,
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Return a specific Azure private endpoint interface for your project",
                      options: [
                        {
                          name: "--endpointServiceId",
                          description:
                            "Unique identifier of the private endpoint service for which you want to retrieve a private endpoint",
                          args: { name: "endpointServiceId" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete a specific Azure private endpoint interface and related service for your project",
                      options: [
                        {
                          name: "--endpointServiceId",
                          description:
                            "Unique identifier of the private endpoint service for which you want to retrieve a private endpoint",
                          args: { name: "endpointServiceId" },
                        },
                        {
                          name: "--force",
                          description:
                            "If specified, skips asking for confirmation before proceeding with a requsted action",
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "gcp",
              description: "Manage GCP private endpoints",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a new GCP private endpoint for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--region",
                      description:
                        "Cloud provider region in which you want to create the private endpoint connection",
                      args: { name: "region" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a GCP private endpoint for your project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["ls", "list"],
                  description: "List GCP private endpoints for your project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Return a specific GCP private endpoint for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "watch",
                  description:
                    "Watch the specified GCP private endpoint to detect changes in the endpoint's state",
                  options: [
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["interface", "interfaces"],
                  description: "Manage Atlas GCP private endpoint interfaces",
                  subcommands: [
                    {
                      name: ["get", "describe"],
                      description:
                        "Return a specific GCP private endpoint interface for your project",
                      options: [
                        {
                          name: "--endpointServiceId",
                          description:
                            "Unique identifier of the private endpoint service for which you want to retrieve a private endpoint",
                          args: { name: "endpointServiceId" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete a specific GCP private endpoint interface for your project",
                      options: [
                        {
                          name: "--endpointServiceId",
                          description:
                            "Unique identifier of the private endpoint service for which you want to retrieve a private endpoint",
                          args: { name: "endpointServiceId" },
                          isRequired: true,
                        },
                        {
                          name: "--force",
                          description:
                            "If specified, skips asking for confirmation before proceeding with a requsted action",
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: ["add", "create"],
                      description: "Create a GCP private endpoint interface",
                      options: [
                        {
                          name: "--endpoint",
                          description:
                            "List of GCP endpoints in the group separated by commas, such as: endpointName1@ipAddress1,...,endpointNameN@ipAddressN",
                          args: { name: "endpoint" },
                        },
                        {
                          name: "--endpointServiceId",
                          description:
                            "Unique identifier of the private endpoint service for which you want to retrieve a private endpoint",
                          args: { name: "endpointServiceId" },
                          isRequired: true,
                        },
                        {
                          name: "--gcpProjectId",
                          description:
                            "Unique identifier of the GCP project in which the network peer resides",
                          args: { name: "gcpProjectId" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "regionalmodes",
                "regional-modes",
                "regionalMode",
                "regionalmode",
                "regional-mode",
                "regionalModes",
              ],
              description:
                "Manage regionalized private endpoint setting for your Atlas project",
              subcommands: [
                {
                  name: "enable",
                  description:
                    "Enable the regionalized private endpoint setting for your Atlas project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "disable",
                  description:
                    "Disable the regionalized private endpoint setting for your Atlas project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Get the regionalized private endpoint setting for your Atlas project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "datalakes",
                "data-lakes",
                "dataLake",
                "datalake",
                "data-lake",
                "dataLakes",
              ],
              description: "Manage Data Lake private endpoints",
              subcommands: [
                {
                  name: "aws",
                  description: "Manage AWS private endpoints",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create a new Data Lake private endpoint for your project",
                      options: [
                        {
                          name: "--comment",
                          description:
                            "Optional description or comment for the entry",
                          args: { name: "comment" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--privateEndpointId",
                          description:
                            "Unique identifier of the AWS PrivateLink connection",
                          args: { name: "privateEndpointId" },
                          isRequired: true,
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: ["ls", "list"],
                      description:
                        "List Data Lake private endpoints for your project",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Return a specific Data Lake private endpoint for your project",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete a specific Data Lake private endpoint for your project",
                      options: [
                        {
                          name: "--force",
                          description:
                            "If specified, skips asking for confirmation before proceeding with a requsted action",
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: ["onlinearchive", "online-archive", "onlineArchive"],
              description: "Manage Online Archive private endpoints",
              subcommands: [
                {
                  name: "aws",
                  description: "Manage AWS private endpoints",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create a new Data Lake private endpoint for your project",
                      options: [
                        {
                          name: "--comment",
                          description:
                            "Optional description or comment for the entry",
                          args: { name: "comment" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--privateEndpointId",
                          description:
                            "Unique identifier of the AWS PrivateLink connection",
                          args: { name: "privateEndpointId" },
                          isRequired: true,
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: ["ls", "list"],
                      description:
                        "List Data Lake private endpoints for your project",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Return a specific Data Lake private endpoint for your project",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete a specific Data Lake private endpoint for your project",
                      options: [
                        {
                          name: "--force",
                          description:
                            "If specified, skips asking for confirmation before proceeding with a requsted action",
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
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
          name: "networking",
          description: "Networking operations",
          subcommands: [
            {
              name: ["container", "containers"],
              description: "Manage Network Peering containers",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List network peering containers in an Atlas project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--provider",
                      description:
                        "Name of your cloud service provider. Valid values are AWS, AZURE, or GCP",
                      args: { name: "provider" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description:
                    "Remove one network peering container in an Atlas project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: "peering",
              description: "Manage Network Peering connections",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Retrieve details for all network peering connections in one Atlas project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--provider",
                      description:
                        "Name of your cloud service provider. Valid values are AWS, AZURE, or GCP",
                      args: { name: "provider", default: "AWS" },
                    },
                  ],
                },
                {
                  name: "create",
                  description:
                    "Create a connection with AWS, Azure and Google Cloud",
                  subcommands: [
                    {
                      name: "azure",
                      description: "Create a connection with Azure",
                      options: [
                        {
                          name: "--atlasCidrBlock",
                          description:
                            "CIDR block that Atlas uses for your clusters",
                          args: { name: "atlasCidrBlock" },
                        },
                        {
                          name: "--directoryId",
                          description:
                            "Unique identifier for an Azure AD directory",
                          args: { name: "directoryId" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                        {
                          name: "--region",
                          description:
                            "Atlas region where the container resides",
                          args: { name: "region" },
                          isRequired: true,
                        },
                        {
                          name: "--resourceGroup",
                          description: "Name of your Azure resource group",
                          args: { name: "resourceGroup" },
                          isRequired: true,
                        },
                        {
                          name: "--subscriptionId",
                          description:
                            "Unique identifier of the Azure subscription in which the VNet resides",
                          args: { name: "subscriptionId" },
                          isRequired: true,
                        },
                        {
                          name: "--vnet",
                          description: "Name of your Azure VNet",
                          args: { name: "vnet" },
                          isRequired: true,
                        },
                      ],
                    },
                    {
                      name: "aws",
                      description: "Create a connection with AWS",
                      options: [
                        {
                          name: "--accountId",
                          description:
                            "Account ID of the owner of the peer VPC",
                          args: { name: "accountId" },
                          isRequired: true,
                        },
                        {
                          name: "--atlasCidrBlock",
                          description:
                            "CIDR block that Atlas uses for your clusters",
                          args: { name: "atlasCidrBlock" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                        {
                          name: "--region",
                          description:
                            "Atlas region where the container resides",
                          args: { name: "region" },
                          isRequired: true,
                        },
                        {
                          name: "--routeTableCidrBlock",
                          description: "Peer VPC CIDR block or subnet",
                          args: { name: "routeTableCidrBlock" },
                          isRequired: true,
                        },
                        {
                          name: "--vpcId",
                          description: "Unique identifier of the peer VPC",
                          args: { name: "vpcId" },
                          isRequired: true,
                        },
                      ],
                    },
                    {
                      name: "gcp",
                      description: "Create a connection with GCP",
                      options: [
                        {
                          name: "--atlasCidrBlock",
                          description:
                            "CIDR block that Atlas uses for your clusters",
                          args: { name: "atlasCidrBlock" },
                          isRequired: true,
                        },
                        {
                          name: "--gcpProjectId",
                          description:
                            "Unique identifier of the GCP project in which the network peer resides",
                          args: { name: "gcpProjectId" },
                        },
                        {
                          name: "--network",
                          description:
                            "Unique identifier of the Network Peering connection in the Atlas project",
                          args: { name: "network" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                        {
                          name: "--region",
                          description:
                            "List of Atlas regions where the container resides",
                          args: { name: "region" },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "watch",
                  description: "Watch for a peering connection to be available",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description:
                    "Delete a peering connection from an Atlas project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "security",
          description: "Manage security configuration for your project",
          subcommands: [
            {
              name: [
                "customercerts",
                "customer-certs",
                "customerCert",
                "customercert",
                "customer-cert",
                "certs",
                "customerCerts",
              ],
              description: "Manage customer x509 certificates for your project",
              subcommands: [
                {
                  name: "describe",
                  description:
                    "Get the current customer-managed X.509 configuration details for an Atlas project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "create",
                  description:
                    "Saves a customer-managed X.509 configuration for an Atlas project",
                  options: [
                    {
                      name: "--casFile",
                      description:
                        "Path to a PEM file containing one or more CAs for database user authentication",
                      args: { name: "casFile" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "disable",
                  description: "Disables customer-managed X.509 for a project",
                  options: [
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: "ldap",
              description: "LDAP operations",
              subcommands: [
                {
                  name: "verify",
                  description: "Request verification of an LDAP configuration",
                  subcommands: [
                    {
                      name: "status",
                      description:
                        "Get the status of an LDAP configuration request",
                      subcommands: [
                        {
                          name: "watch",
                          description:
                            "Watch for an LDAP configuration request to complete",
                          options: [
                            {
                              name: "--projectId",
                              description:
                                "Project ID to use. Overrides the settings in the configuration file or environment variable",
                              args: { name: "projectId" },
                            },
                          ],
                        },
                      ],
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                  ],
                  options: [
                    {
                      name: "--authzQueryTemplate",
                      description:
                        "An LDAP query template that Atlas executes to obtain the LDAP groups to which the authenticated user belongs",
                      args: { name: "authzQueryTemplate" },
                    },
                    {
                      name: "--bindPassword",
                      description:
                        "Password used to authenticate the bindUsername",
                      args: { name: "bindPassword" },
                    },
                    {
                      name: "--bindUsername",
                      description:
                        "The user distinguished name (DN) that Atlas uses to connect to the LDAP server",
                      args: { name: "bindUsername" },
                      isRequired: true,
                    },
                    {
                      name: "--caCertificate",
                      description:
                        "CA certificate used to verify the identify of the LDAP server",
                      args: { name: "caCertificate" },
                    },
                    {
                      name: "--hostname",
                      description: "Hostname or IP address of the LDAP server",
                      args: { name: "hostname" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--port",
                      description:
                        "Port to which the LDAP server listens to for client connections",
                      args: { name: "port", default: "636" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "save",
                  description: "Save an LDAP configuration",
                  options: [
                    {
                      name: "--authenticationEnabled",
                      description:
                        "Specifies whether user authentication with LDAP is enabled",
                    },
                    {
                      name: "--authorizationEnabled",
                      description:
                        "Specifies whether user authorization with LDAP is enabled",
                    },
                    {
                      name: "--authzQueryTemplate",
                      description:
                        "An LDAP query template that Atlas executes to obtain the LDAP groups to which the authenticated user belongs",
                      args: { name: "authzQueryTemplate" },
                    },
                    {
                      name: "--bindPassword",
                      description:
                        "Password used to authenticate the bindUsername",
                      args: { name: "bindPassword" },
                    },
                    {
                      name: "--bindUsername",
                      description:
                        "The user distinguished name (DN) that Atlas uses to connect to the LDAP server",
                      args: { name: "bindUsername" },
                      isRequired: true,
                    },
                    {
                      name: "--caCertificate",
                      description:
                        "CA certificate used to verify the identify of the LDAP server",
                      args: { name: "caCertificate" },
                    },
                    {
                      name: "--hostname",
                      description: "Hostname or IP address of the LDAP server",
                      args: { name: "hostname" },
                      isRequired: true,
                    },
                    {
                      name: "--mappingLdapQuery",
                      description:
                        "An LDAP query formatting template that inserts the authentication name matched by the match regex into an LDAP query URI encoded respecting RFC4515 and RFC4516",
                      args: { name: "mappingLdapQuery" },
                    },
                    {
                      name: "--mappingMatch",
                      description:
                        "An ECMAScript-formatted regular expression (regex) to match against a provided username",
                      args: { name: "mappingMatch" },
                    },
                    {
                      name: "--mappingSubstitution",
                      description:
                        "An LDAP distinguished name (DN) formatting template that converts the authentication name matched by the match regex into a LDAP DN",
                      args: { name: "mappingSubstitution" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--port",
                      description:
                        "Port to which the LDAP server listens to for client connections",
                      args: { name: "port", default: "636" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description:
                    "Delete an LDAP configuration userToDNMapping from an LDAP configuration",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "get",
                  description: "Get an LDAP configuration",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["integration", "integrations"],
          description: "Third party integration operations",
          subcommands: [
            {
              name: ["update", "create"],
              description: "Create operations",
              subcommands: [
                {
                  name: ["new_relic", "newRelic", "NEW_RELIC"],
                  description: "Create or update the New Relic integration",
                  options: [
                    {
                      name: "--accountId",
                      description:
                        "Unique identifier of your New Relic account",
                      args: { name: "accountId" },
                      isRequired: true,
                    },
                    {
                      name: "--licenceKey",
                      description: "Your License Key",
                      args: { name: "licenceKey" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--readToken",
                      description: "Your Insights Query Key",
                      args: { name: "readToken" },
                      isRequired: true,
                    },
                    {
                      name: "--writeToken",
                      description: "Your Insights Insert Key",
                      args: { name: "writeToken" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: ["ops_genie", "opsGenie", "OPS_GENIE"],
                  description: "Create or update the Ops Genie integration",
                  options: [
                    {
                      name: "--apiKey",
                      description: "API Key",
                      args: { name: "apiKey" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--region",
                      description:
                        "Indicates which API URL to use, either US or EU. The integration service will use US by default",
                      args: { name: "region", default: "US" },
                    },
                  ],
                },
                {
                  name: ["pager_duty", "pagerDuty", "PAGER_DUTY"],
                  description: "Create or update the PagerDuty integration",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--serviceKey",
                      description: "Your Service Key",
                      args: { name: "serviceKey" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: ["datadog", "DATADOG"],
                  description: "Create or update the Datadog integration",
                  options: [
                    {
                      name: "--apiKey",
                      description: "API Key",
                      args: { name: "apiKey" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--region",
                      description:
                        "Indicates which API URL to use, either US or EU. The integration service will use US by default",
                      args: { name: "region", default: "US" },
                    },
                  ],
                },
                {
                  name: ["victor_ops", "victorOps", "VICTOR_OPS"],
                  description: "Create or update the VictorOps integrations",
                  options: [
                    {
                      name: "--apiKey",
                      description: "API Key",
                      args: { name: "apiKey" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--routingKey",
                      description: "An optional field for your Routing Key",
                      args: { name: "routingKey" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: ["flowdock", "FLOWDOCK"],
                  description: "Create or update the Flowdock integration",
                  options: [
                    {
                      name: "--apiToken",
                      description: "Your API Token",
                      args: { name: "apiToken" },
                      isRequired: true,
                    },
                    {
                      name: "--flowName",
                      description: "Flowdock Flow name",
                      args: { name: "flowName" },
                      isRequired: true,
                    },
                    {
                      name: "--orgName",
                      description: "Your Flowdock organization's name",
                      args: { name: "orgName" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["webhook", "WEBHOOK"],
                  description: "Create or update the Webhook integration",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--secret",
                      description: "An optional field for your webhook secret",
                      args: { name: "secret" },
                      isRequired: true,
                    },
                    {
                      name: "--url",
                      description: "Your webhook URL",
                      args: { name: "url" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
            {
              name: ["ls", "list"],
              description: "List third party integrations",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete a third party integration",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "describe",
              description: "Get a third party integration",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "maintenancewindows",
            "maintenance-windows",
            "maintenanceWindow",
            "maintenancewindow",
            "maintenance-window",
            "maintenanceWindows",
          ],
          description: "Manage Atlas maintenance windows",
          subcommands: [
            {
              name: "update",
              description: "Update the maintenance window",
              options: [
                {
                  name: "--dayOfWeek",
                  description:
                    "Day of the week that you want the maintenance window to start, as a 1-based integer",
                  args: { name: "dayOfWeek", default: "0" },
                },
                {
                  name: "--hourOfDay",
                  description:
                    "Hour of the day that you want the maintenance window to start. This parameter uses the 24-hour clock, where midnight is 0 and noon is 12",
                  args: { name: "hourOfDay", default: "0" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--startASAP",
                  description:
                    "Flag that, if specified, indicates to start maintenance immediately upon receiving this request",
                },
              ],
            },
            {
              name: ["rm", "delete", "clear"],
              description: "Clear the maintenance window",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "defer",
              description: "Defer the maintenance window",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["get", "describe"],
              description: "Get a maintenance window",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "customdns",
            "custom-dns",
            "customDn",
            "customdn",
            "custom-dn",
            "customDns",
          ],
          description:
            "Manage DNS configuration of Atlas project’s clusters deployed to AWS",
          subcommands: [
            {
              name: ["aw", "aws"],
              description:
                "Manage DNS configuration of an Atlas project’s cluster deployed to AWS",
              subcommands: [
                {
                  name: "enable",
                  description:
                    "Enable the custom DNS configuration of an Atlas project’s cluster deployed to AWS",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "disable",
                  description:
                    "Disable the custom DNS configuration of an Atlas project’s cluster deployed to AWS",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Describe the custom DNS configuration of an Atlas project’s cluster deployed to AWS",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: [
            "cloudproviders",
            "cloud-providers",
            "cloudProvider",
            "cloudprovider",
            "cloud-provider",
            "cloudProviders",
          ],
          description: "Manage unified IAM role access in Atlas",
          subcommands: [
            {
              name: [
                "accessroles",
                "access-roles",
                "accessRole",
                "accessrole",
                "access-role",
                "accessRoles",
              ],
              description: "Manage AWS IAM role access in Atlas",
              subcommands: [
                {
                  name: "aws",
                  description: "Manage AWS IAM role access in Atlas",
                  subcommands: [
                    {
                      name: "create",
                      description: "Create an AWS IAM role",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: "authorize",
                      description: "Authorize an AWS IAM role",
                      options: [
                        {
                          name: "--iamAssumedRoleArn",
                          description:
                            "Role ARN that Atlas assumes to access your AWS account",
                          args: {
                            name: "iamAssumedRoleArn",
                            template: ["filepaths"],
                          },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: "deauthorize",
                      description: "Deauthorize an AWS IAM role",
                      options: [
                        {
                          name: "--force",
                          description:
                            "If specified, skips asking for confirmation before proceeding with a requsted action",
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: ["ls", "list"],
                  description: "List AWS IAM role access in Atlas",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["sl", "serverless"],
          description: "Manage serverless instances for your project",
          subcommands: [
            {
              name: ["ls", "list"],
              description:
                "Return all serverless instances in the specified project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["get", "describe"],
              description:
                "Return one serverless instance in the specified project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Remove a serverless instance from your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "create",
              description:
                "Creates one serverless instance in the specified project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--provider",
                  description:
                    "Cloud service provider that applies to the provisioned serverless instance",
                  args: { name: "provider" },
                  isRequired: true,
                },
                {
                  name: "--region",
                  description:
                    "Human-readable label that identifies the physical location of your MongoDB serverless instance. The region you choose can affect network latency for clients accessing your databases",
                  args: { name: "region" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "watch",
              description: "Monitor the status of serverless instance",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "livemigrations",
            "live-migrations",
            "liveMigration",
            "livemigration",
            "live-migration",
            "lm",
            "liveMigrations",
          ],
          description: "Manage a Live Migration to Atlas for your organization",
          subcommands: [
            {
              name: "link",
              description: "Manage the link-token for your organization",
              subcommands: [
                {
                  name: "create",
                  description: "Create one new link-token",
                  options: [
                    {
                      name: "--accessListIp",
                      description:
                        "IP address access list entries that are associated with the link-token",
                      args: { name: "accessListIp" },
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete one link-token",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                  ],
                },
              ],
            },
            {
              name: "validation",
              description:
                "Manage a Live Migration validation job for your project",
              subcommands: [
                {
                  name: "create",
                  description: "Create one new validation request",
                  options: [
                    {
                      name: "--clusterName",
                      description:
                        "Human-readable label that identifies the Atlas destination cluster",
                      args: { name: "clusterName" },
                      isRequired: true,
                    },
                    {
                      name: "--drop",
                      description:
                        "Flag that indicates whether this process should drop existing collections from the destination (Atlas) cluster given in --destinationClusterName before starting the migration of data from the source cluster",
                    },
                    {
                      name: "--migrationHost",
                      description:
                        "List of hosts running the MongoDB Agent that can transfer your MongoDB data from the source (Cloud Manager or Ops Manager) to destination (Atlas) deployments. Each live migration process uses its own dedicated migration host",
                      args: { name: "migrationHost" },
                      isRequired: true,
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--sourceCACertificatePath",
                      description:
                        "Path to the CA certificate that signed TLS certificates use to authenticate to the source Cloud Manager or Ops Manager cluster. Omit this value if --sourceSSL is not passed",
                      args: { name: "sourceCACertificatePath" },
                    },
                    {
                      name: "--sourceClusterName",
                      description:
                        "Human-readable label that identifies the source Cloud Manager or Ops Manager cluster",
                      args: { name: "sourceClusterName" },
                      isRequired: true,
                    },
                    {
                      name: "--sourceManagedAuthentication",
                      description:
                        "Flag that indicates whether MongoDB Automation manages authentication to the source Cloud Manager or Ops Manager cluster. If you set this to true, don't provide values for --sourceUsername and --sourcePassword",
                    },
                    {
                      name: ["--sourcePassword", "-p"],
                      description:
                        "Password that authenticates the username to the source Cloud Manager or Ops Manager cluster. Omit this value if --sourceManagedAuthentication is passed",
                      args: { name: "sourcePassword" },
                    },
                    {
                      name: "--sourceProjectId",
                      description:
                        "Unique 24-hexadecimal digit string that identifies the source project",
                      args: { name: "sourceProjectId" },
                      isRequired: true,
                    },
                    {
                      name: "--sourceSsl",
                      description:
                        "Flag that indicates whether data source has TLS enabled",
                    },
                    {
                      name: ["--sourceUsername", "-u"],
                      description:
                        "Human-readable label that identifies the SCRAM-SHA user that connects to the source Cloud Manager or Ops Manager cluster. Omit this value if --sourceManagedAuthentication is set",
                      args: { name: "sourceUsername" },
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description: "Return one validation job",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--validationId",
                      description:
                        "Unique 24-hexadecimal digit string that identifies the validation job",
                      args: { name: "validationId" },
                    },
                  ],
                },
              ],
            },
            {
              name: "create",
              description: "Create one new migration",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the Atlas destination cluster",
                  args: { name: "clusterName" },
                  isRequired: true,
                },
                {
                  name: "--drop",
                  description:
                    "Flag that indicates whether this process should drop existing collections from the destination (Atlas) cluster given in --destinationClusterName before starting the migration of data from the source cluster",
                },
                {
                  name: "--migrationHost",
                  description:
                    "List of hosts running the MongoDB Agent that can transfer your MongoDB data from the source (Cloud Manager or Ops Manager) to destination (Atlas) deployments. Each live migration process uses its own dedicated migration host",
                  args: { name: "migrationHost" },
                  isRequired: true,
                },
                {
                  name: "--orgId",
                  description:
                    "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "orgId" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--sourceCACertificatePath",
                  description:
                    "Path to the CA certificate that signed TLS certificates use to authenticate to the source Cloud Manager or Ops Manager cluster. Omit this value if --sourceSSL is not passed",
                  args: { name: "sourceCACertificatePath" },
                },
                {
                  name: "--sourceClusterName",
                  description:
                    "Human-readable label that identifies the source Cloud Manager or Ops Manager cluster",
                  args: { name: "sourceClusterName" },
                  isRequired: true,
                },
                {
                  name: "--sourceManagedAuthentication",
                  description:
                    "Flag that indicates whether MongoDB Automation manages authentication to the source Cloud Manager or Ops Manager cluster. If you set this to true, don't provide values for --sourceUsername and --sourcePassword",
                },
                {
                  name: ["--sourcePassword", "-p"],
                  description:
                    "Password that authenticates the username to the source Cloud Manager or Ops Manager cluster. Omit this value if --sourceManagedAuthentication is passed",
                  args: { name: "sourcePassword" },
                },
                {
                  name: "--sourceProjectId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the source project",
                  args: { name: "sourceProjectId" },
                  isRequired: true,
                },
                {
                  name: "--sourceSsl",
                  description:
                    "Flag that indicates whether data source has TLS enabled",
                },
                {
                  name: ["--sourceUsername", "-u"],
                  description:
                    "Human-readable label that identifies the SCRAM-SHA user that connects to the source Cloud Manager or Ops Manager cluster. Omit this value if --sourceManagedAuthentication is set",
                  args: { name: "sourceUsername" },
                },
              ],
            },
            {
              name: ["get", "describe"],
              description: "Return one migration job",
              options: [
                {
                  name: "--liveMigrationId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the live migration job",
                  args: { name: "liveMigrationId" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "cutover",
              description:
                "Start the cutover and confirm when the cutover completes. When the cutover completes, the application completes the live migration process and stops synchronizing with the source cluster",
              options: [
                {
                  name: "--liveMigrationId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the live migration job",
                  args: { name: "liveMigrationId" },
                  isRequired: true,
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "accesslogs",
            "access-logs",
            "accessLog",
            "accesslog",
            "access-log",
            "accessLogs",
          ],
          description: "Manage the access logs of a cluster",
          subcommands: [
            {
              name: ["ls", "list"],
              description:
                "Retrieve the access logs of a cluster identified by the cluster's name or hostname",
              options: [
                {
                  name: "--authResult",
                  description:
                    "Flag that indicates whether to return either successful or failed authentication attempts. When set to success, Atlas filters the log to return only successful authentication attempts. When set to fail, Atlas filters the log to return only failed authentication attempts",
                  args: { name: "authResult" },
                },
                {
                  name: "--clusterName",
                  description: "Name of the cluster",
                  args: { name: "clusterName" },
                },
                {
                  name: "--end",
                  description:
                    "Timestamp in the number of milliseconds that have elapsed, since the UNIX Epoch, for the first entry that Atlas returns from the database access logs",
                  args: { name: "end" },
                },
                {
                  name: "--hostname",
                  description:
                    "The fully qualified domain name (FQDN) of the target node that should receive the authentication attempt",
                  args: { name: "hostname" },
                },
                {
                  name: "--ip",
                  description:
                    "IP address that attempted to authenticate with the database. Atlas filters the returned logs to include documents with only this IP address",
                  args: { name: "ip" },
                },
                {
                  name: "--nLog",
                  description: "Maximum number of log lines to return",
                  args: { name: "nLog", default: "0" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--start",
                  description:
                    "Timestamp in the number of milliseconds that have elapsed, since the UNIX Epoch, for the first entry that Atlas returns from the database access logs",
                  args: { name: "start" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["cm", "cloud-manager"],
      description: "MongoDB Cloud Manager operations",
      subcommands: [
        {
          name: ["cluster", "clusters"],
          description: "Manage clusters for your project",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List clusters for your project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "describe",
              description: "Describe a cluster",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "create",
              description: "Create a MongoDB cluster",
              options: [
                {
                  name: ["--file", "-f"],
                  description: "Filename to use to create the cluster",
                  args: { name: "file", template: ["filepaths"] },
                  isRequired: true,
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a MongoDB cluster",
              options: [
                {
                  name: ["--file", "-f"],
                  description: "Filename to use to update the cluster",
                  args: { name: "file", template: ["filepaths"] },
                  isRequired: true,
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Completely removes a cluster from your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "apply",
              description: "Apply a new cluster configuration for your project",
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "Filename to use to change the automation config",
                  args: { name: "file", template: ["filepaths"] },
                  isRequired: true,
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["index", "indexes"],
              description: "Manage cluster rolling indexes for your project",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a rolling index for your MongoDB cluster",
                  options: [
                    {
                      name: "--MaxVariable",
                      description:
                        "Flag that, if specified, determines which characters to ignore. This flag applies only if indexConfigs.collation.alternate is set to shifted",
                      args: { name: "MaxVariable" },
                    },
                    {
                      name: "--alternate",
                      description:
                        "Flag that, if specified, determines whether collation should consider whitespace and punctuation as base characters during comparisons",
                      args: { name: "alternate" },
                    },
                    {
                      name: "--backwards",
                      description:
                        "Flag that, if set to true, strings with diacritics sort from the back to the front of the string",
                    },
                    {
                      name: "--caseFirst",
                      description:
                        "Flag that, if specified, determines the sort order of case differences during tertiary level comparisons",
                      args: { name: "caseFirst" },
                    },
                    {
                      name: "--caseLevel",
                      description:
                        "Flag that indicates whether the index uses case comparison. This flag applies only if the strength level is set to 1 or 2",
                    },
                    {
                      name: "--collectionName",
                      description: "Collection name",
                      args: { name: "collectionName" },
                      isRequired: true,
                    },
                    {
                      name: "--db",
                      description: "Database name",
                      args: { name: "db" },
                      isRequired: true,
                    },
                    {
                      name: "--key",
                      description:
                        "Field to be indexed and the type of index in the following format: field:type",
                      args: { name: "key" },
                      isRequired: true,
                    },
                    {
                      name: "--locale",
                      description: "Locale that the ICU defines",
                      args: { name: "locale" },
                    },
                    {
                      name: "--normalization",
                      description:
                        "Flag that, if set to true, collation checks if text requires normalization and performs normalization to compare text",
                    },
                    {
                      name: "--numericOrdering",
                      description:
                        "Flag that, if set to true, indicates that collation compares numeric strings as numbers. If set to false, collation compares numeric strings as strings",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--rsName",
                      description: "The replica set that the index is built on",
                      args: { name: "rsName" },
                      isRequired: true,
                    },
                    {
                      name: "--sparse",
                      description:
                        "Flag that indicates whether Atlas should create a sparse index",
                    },
                    {
                      name: "--strength",
                      description: "Level of comparison to perform",
                      args: { name: "strength", default: "0" },
                    },
                  ],
                },
              ],
            },
            {
              name: "unmanage",
              description: "Stop managing a cluster via automation",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "restart",
              description: "Restart a cluster for your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--processName",
                  description:
                    "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                  args: { name: "processName" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "startup",
              description: "Start up a cluster for your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--processName",
                  description:
                    "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                  args: { name: "processName" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "shutdown",
              description: "Shutdown a cluster for your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--processName",
                  description:
                    "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                  args: { name: "processName" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rfs", "reclaimFreeSpace"],
              description: "Reclaim unused space for a cluster",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--processName",
                  description:
                    "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                  args: { name: "processName" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--timestamp",
                  description:
                    "Timestamp in ISO 8601 format when the service reclaims the space. If not set, defaults to the current timestamp",
                  args: { name: "timestamp" },
                },
              ],
            },
          ],
        },
        {
          name: ["alert", "alerts"],
          description: "Manage alerts for your project",
          subcommands: [
            {
              name: ["config", "settings"],
              description: "Manages alerts configuration for your project",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Creates one alert configuration in the specified project",
                  options: [
                    {
                      name: "--apiKey",
                      description:
                        "Datadog API Key, Opsgenie API Key, VictorOps API key",
                      args: { name: "apiKey" },
                    },
                    {
                      name: "--enabled",
                      description:
                        "If set to true, the alert configuration is enabled",
                    },
                    {
                      name: "--event",
                      description: "Type of the event that triggered the alert",
                      args: { name: "event" },
                    },
                    {
                      name: "--matcherFieldName",
                      description:
                        "Name of the field in the target object to match on",
                      args: { name: "matcherFieldName" },
                    },
                    {
                      name: "--matcherOperator",
                      description: "Operator to test the field's value",
                      args: { name: "matcherOperator" },
                    },
                    {
                      name: "--matcherValue",
                      description: "Value to test with the specified operator",
                      args: { name: "matcherValue" },
                    },
                    {
                      name: "--metricMode",
                      description:
                        "If specified, Atlas computes the current metric value as an average",
                      args: { name: "metricMode" },
                    },
                    {
                      name: "--metricName",
                      description:
                        "Name of the metric against which Atlas checks the configured alert",
                      args: { name: "metricName" },
                    },
                    {
                      name: "--metricOperator",
                      description:
                        "Operator to apply when checking the current metric value against the threshold value",
                      args: { name: "metricOperator" },
                    },
                    {
                      name: "--metricThreshold",
                      description:
                        "Threshold value outside of which an alert will be triggered",
                      args: { name: "metricThreshold", default: "0" },
                    },
                    {
                      name: "--metricUnits",
                      description: "Units for the threshold value",
                      args: { name: "metricUnits" },
                    },
                    {
                      name: "--notificationChannelName",
                      description:
                        "Slack channel name. Required for the SLACK notifications type",
                      args: { name: "notificationChannelName" },
                    },
                    {
                      name: "--notificationDelayMin",
                      description:
                        "Number of minutes to wait after an alert condition is detected before sending out the first notification",
                      args: { name: "notificationDelayMin", default: "0" },
                    },
                    {
                      name: "--notificationEmailAddress",
                      description:
                        "Email address to which alert notifications are sent",
                      args: { name: "notificationEmailAddress" },
                    },
                    {
                      name: "--notificationEmailEnabled",
                      description:
                        "Flag indicating whether email notifications should be sent",
                    },
                    {
                      name: "--notificationFlowName",
                      description:
                        "Flowdock Flow name in lower-case letters for sending alert notifications",
                      args: { name: "notificationFlowName" },
                    },
                    {
                      name: "--notificationIntervalMin",
                      description:
                        "Number of minutes to wait between successive notifications for unacknowledged alerts that are not resolved",
                      args: { name: "notificationIntervalMin", default: "0" },
                    },
                    {
                      name: "--notificationMobileNumber",
                      description:
                        "Mobile number to which alert notifications are sent",
                      args: { name: "notificationMobileNumber" },
                    },
                    {
                      name: "--notificationOrgName",
                      description:
                        "Flowdock organization's name in lower-case letters",
                      args: { name: "notificationOrgName" },
                    },
                    {
                      name: "--notificationRegion",
                      description: "Region that indicates which API URL to use",
                      args: { name: "notificationRegion" },
                    },
                    {
                      name: "--notificationServiceKey",
                      description: "PagerDuty service key",
                      args: { name: "notificationServiceKey" },
                    },
                    {
                      name: "--notificationSmsEnabled",
                      description:
                        "Flag indicating whether text message notifications should be sent",
                    },
                    {
                      name: "--notificationTeamId",
                      description: "Unique identifier of a team",
                      args: { name: "notificationTeamId" },
                    },
                    {
                      name: "--notificationToken",
                      description:
                        "Slack API token, Bot token, or Flowdock personal API token",
                      args: { name: "notificationToken" },
                    },
                    {
                      name: "--notificationType",
                      description:
                        "Type of alert notification. The values are DATADOG, EMAIL, FLOWDOCK, GROUP (Project), ORG, OPS_GENIE, PAGER_DUTY, SLACK, SMS, USER, or VICTOR_OPS",
                      args: { name: "notificationType" },
                    },
                    {
                      name: "--notificationUsername",
                      description:
                        "Name of the Atlas user to which to send notifications",
                      args: { name: "notificationUsername" },
                    },
                    {
                      name: "--notificationVictorOpsRoutingKey",
                      description: "VictorOps routing key",
                      args: { name: "notificationVictorOpsRoutingKey" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["ls", "list"],
                  description:
                    "Returns alert configurations for the specified project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description:
                    "Deletes the specified alert configuration in a specified project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["field", "fields"],
                  description:
                    "Manages alert configuration fields for your project",
                  subcommands: [
                    {
                      name: ["types", "type"],
                      description:
                        "Lists available field types for your alert configurations",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Updates one alert configuration in the specified project",
                  options: [
                    {
                      name: "--apiKey",
                      description:
                        "Datadog API Key, Opsgenie API Key, VictorOps API key",
                      args: { name: "apiKey" },
                    },
                    {
                      name: "--enabled",
                      description:
                        "If set to true, the alert configuration is enabled",
                    },
                    {
                      name: "--event",
                      description: "Type of the event that triggered the alert",
                      args: { name: "event" },
                    },
                    {
                      name: "--matcherFieldName",
                      description:
                        "Name of the field in the target object to match on",
                      args: { name: "matcherFieldName" },
                    },
                    {
                      name: "--matcherOperator",
                      description: "Operator to test the field's value",
                      args: { name: "matcherOperator" },
                    },
                    {
                      name: "--matcherValue",
                      description: "Value to test with the specified operator",
                      args: { name: "matcherValue" },
                    },
                    {
                      name: "--metricMode",
                      description:
                        "If specified, Atlas computes the current metric value as an average",
                      args: { name: "metricMode" },
                    },
                    {
                      name: "--metricName",
                      description:
                        "Name of the metric against which Atlas checks the configured alert",
                      args: { name: "metricName" },
                    },
                    {
                      name: "--metricOperator",
                      description:
                        "Operator to apply when checking the current metric value against the threshold value",
                      args: { name: "metricOperator" },
                    },
                    {
                      name: "--metricThreshold",
                      description:
                        "Threshold value outside of which an alert will be triggered",
                      args: { name: "metricThreshold", default: "0" },
                    },
                    {
                      name: "--metricUnits",
                      description: "Units for the threshold value",
                      args: { name: "metricUnits" },
                    },
                    {
                      name: "--notificationChannelName",
                      description:
                        "Slack channel name. Required for the SLACK notifications type",
                      args: { name: "notificationChannelName" },
                    },
                    {
                      name: "--notificationDelayMin",
                      description:
                        "Number of minutes to wait after an alert condition is detected before sending out the first notification",
                      args: { name: "notificationDelayMin", default: "0" },
                    },
                    {
                      name: "--notificationEmailAddress",
                      description:
                        "Email address to which alert notifications are sent",
                      args: { name: "notificationEmailAddress" },
                    },
                    {
                      name: "--notificationEmailEnabled",
                      description:
                        "Flag indicating whether email notifications should be sent",
                    },
                    {
                      name: "--notificationFlowName",
                      description:
                        "Flowdock Flow name in lower-case letters for sending alert notifications",
                      args: { name: "notificationFlowName" },
                    },
                    {
                      name: "--notificationIntervalMin",
                      description:
                        "Number of minutes to wait between successive notifications for unacknowledged alerts that are not resolved",
                      args: { name: "notificationIntervalMin", default: "0" },
                    },
                    {
                      name: "--notificationMobileNumber",
                      description:
                        "Mobile number to which alert notifications are sent",
                      args: { name: "notificationMobileNumber" },
                    },
                    {
                      name: "--notificationOrgName",
                      description:
                        "Flowdock organization's name in lower-case letters",
                      args: { name: "notificationOrgName" },
                    },
                    {
                      name: "--notificationRegion",
                      description: "Region that indicates which API URL to use",
                      args: { name: "notificationRegion" },
                    },
                    {
                      name: "--notificationServiceKey",
                      description: "PagerDuty service key",
                      args: { name: "notificationServiceKey" },
                    },
                    {
                      name: "--notificationSmsEnabled",
                      description:
                        "Flag indicating whether text message notifications should be sent",
                    },
                    {
                      name: "--notificationTeamId",
                      description: "Unique identifier of a team",
                      args: { name: "notificationTeamId" },
                    },
                    {
                      name: "--notificationToken",
                      description:
                        "Slack API token, Bot token, or Flowdock personal API token",
                      args: { name: "notificationToken" },
                    },
                    {
                      name: "--notificationType",
                      description:
                        "Type of alert notification. The values are DATADOG, EMAIL, FLOWDOCK, GROUP (Project), ORG, OPS_GENIE, PAGER_DUTY, SLACK, SMS, USER, or VICTOR_OPS",
                      args: { name: "notificationType" },
                    },
                    {
                      name: "--notificationUsername",
                      description:
                        "Name of the Atlas user to which to send notifications",
                      args: { name: "notificationUsername" },
                    },
                    {
                      name: "--notificationVictorOpsRoutingKey",
                      description: "VictorOps routing key",
                      args: { name: "notificationVictorOpsRoutingKey" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["get", "describe"],
              description: "Retrieves one alert for the specified project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["ls", "list"],
              description:
                "Retrieves all alerts for the specified Atlas project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "0" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "0" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--status",
                  description:
                    "Alert's status. The values are TRACKING, OPEN, CLOSED, and CANCELED",
                  args: { name: "status" },
                },
              ],
            },
            {
              name: ["ack", "acknowledge"],
              description: "Acknowledges one alert for the specified project",
              options: [
                {
                  name: "--comment",
                  description: "Optional description or comment for the entry",
                  args: { name: "comment" },
                },
                {
                  name: ["--forever", "-F"],
                  description: "Acknowledges an alert 'forever'",
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--until",
                  description:
                    "Time, in ISO 8601 format, until which the alert has been acknowledged. mongocli returns this value after the alert has been acknowledged",
                  args: { name: "until" },
                },
              ],
            },
            {
              name: ["unack", "unacknowledge"],
              description: "Unacknowledges one alert for the specified project",
              options: [
                {
                  name: "--comment",
                  description: "Optional description or comment for the entry",
                  args: { name: "comment" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "global",
              description:
                "Retrieves all the global alerts for the specified Ops Manager project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Returns all global alerts for the specified Ops Manager project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--status",
                      description:
                        "Alert's status. The values are TRACKING, OPEN, CLOSED, and CANCELED",
                      args: { name: "status" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["backup", "backups"],
          description: "Manage continuous backups for your project",
          subcommands: [
            {
              name: ["snapshot", "snapshots"],
              description: "Manage backup snapshots for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List snapshots for a project and cluster",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "schedule",
                  description: "Manage backup snapshot schedules for a cluster",
                  subcommands: [
                    {
                      name: ["get", "describe"],
                      description: "Describe a snapshot schedule for a cluster",
                      options: [
                        {
                          name: "--clusterId",
                          description: "Unique identifier of the cluster",
                          args: { name: "clusterId" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: "update",
                      description: "Update a snapshot schedule for a cluster",
                      options: [
                        {
                          name: "--clusterCheckpointIntervalMin",
                          description:
                            "Number of minutes between successive cluster checkpoints. Valid values are 15, 30, or 60",
                          args: {
                            name: "clusterCheckpointIntervalMin",
                            default: "0",
                          },
                        },
                        {
                          name: "--clusterId",
                          description: "Unique identifier of the cluster",
                          args: { name: "clusterId" },
                          isRequired: true,
                        },
                        {
                          name: "--dailySnapshotRetentionDays",
                          description:
                            "Number of days to retain daily snapshots. Accepted values are between 1 and 365 inclusive",
                          args: {
                            name: "dailySnapshotRetentionDays",
                            default: "0",
                          },
                        },
                        {
                          name: "--monthlySnapshotRetentionMonths",
                          description:
                            "Number of months to retain monthly snapshots. Accepted values are between 1 and 36 inclusive",
                          args: {
                            name: "monthlySnapshotRetentionMonths",
                            default: "0",
                          },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--pointInTimeWindowHours",
                          description:
                            "Number of hours in the past for which MongoDB should create a point-in-time snapshot",
                          args: {
                            name: "pointInTimeWindowHours",
                            default: "0",
                          },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                        {
                          name: "--referenceHourOfDay",
                          description:
                            "Hour of the day to schedule snapshots using a 24-hour clock. Accepted values are between 0 and 23 inclusive",
                          args: { name: "referenceHourOfDay", default: "0" },
                        },
                        {
                          name: "--referenceMinuteOfHour",
                          description:
                            "Minute of the hour to schedule snapshots. Accepted values are between 0 and 59 inclusive",
                          args: { name: "referenceMinuteOfHour", default: "0" },
                        },
                        {
                          name: "--referenceTimeZoneOffset",
                          description:
                            "The ISO-8601-formatted timezone offset where the Ops Manager host resides",
                          args: { name: "referenceTimeZoneOffset" },
                        },
                        {
                          name: "--snapshotIntervalHours",
                          description:
                            "Number of hours between snapshots. Valid values are 6, 8, 12, or 24",
                          args: { name: "snapshotIntervalHours", default: "0" },
                        },
                        {
                          name: "--snapshotRetentionDays",
                          description:
                            "Number of days to keep recent snapshots. Accepted values are between 2 and 5 inclusive",
                          args: { name: "snapshotRetentionDays", default: "0" },
                        },
                        {
                          name: "--weeklySnapshotRetentionWeeks",
                          description:
                            "Number of weeks to retain weekly snapshots. Accepted values are between 1 and 52 inclusive",
                          args: {
                            name: "weeklySnapshotRetentionWeeks",
                            default: "0",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: ["restore", "restores"],
              description: "Manage restore jobs for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "Lists restore jobs for a project and cluster",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "start",
                  description: "Start a restore job for a project and cluster",
                  options: [
                    {
                      name: "--checkpointId",
                      description:
                        "Unique identifier for the sharded cluster checkpoint that represents the point in time to which your data will be restored. If you set checkpointId, you cannot set oplogInc, oplogTs, snapshotId, or pointInTimeUTCMillis",
                      args: { name: "checkpointId" },
                    },
                    {
                      name: "--clusterId",
                      description: "Unique identifier of the cluster",
                      args: { name: "clusterId" },
                      isRequired: true,
                    },
                    {
                      name: "--expirationHours",
                      description:
                        "Number of hours the download URL is valid once the restore job is complete. For use only with download restore jobs",
                      args: { name: "expirationHours", default: "0" },
                    },
                    {
                      name: "--expires",
                      description:
                        "Timestamp in ISO 8601 date and time format after which the URL is no longer available. For use only with download restore jobs",
                      args: { name: "expires" },
                    },
                    {
                      name: "--maxDownloads",
                      description:
                        "Number of times the download URL can be used. This value must be 1 or greater. For use only with download restore jobs",
                      args: { name: "maxDownloads", default: "0" },
                    },
                    {
                      name: "--oplogInc",
                      description:
                        "32-bit incrementing ordinal that represents operations within a given second. When paired with oplogTs, they represent the point in time to which your data will be restored",
                      args: { name: "oplogInc", default: "0" },
                    },
                    {
                      name: "--oplogTs",
                      description:
                        "Oplog timestamp given as a timestamp in the number of seconds that have elapsed since the UNIX Epoch. When paired with oplogInc, they represent the point in time to which your data will be restored",
                      args: { name: "oplogTs" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--pointInTimeUTCMillis",
                      description:
                        "Timestamp in the number of milliseconds that have elapsed since the UNIX epoch that represents the point in time to which your data will be restored. This timestamp must be within the last 24 hours of the current time",
                      args: { name: "pointInTimeUTCMillis", default: "0" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--snapshotId",
                      description:
                        "Unique identifier of the snapshot to restore",
                      args: { name: "snapshotId" },
                    },
                    {
                      name: "--targetClusterId",
                      description:
                        "Unique identifier of the target cluster. For use only with automated restore jobs",
                      args: { name: "targetClusterId" },
                    },
                    {
                      name: "--targetProjectId",
                      description:
                        "Unique identifier of the project that contains the destination cluster for the restore job",
                      args: { name: "targetProjectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["checkpoint", "checkpoints"],
              description: "Manage backup checkpoints for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List continuous backup checkpoints for your project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: "enable",
              description: "Enable backup for a given hostname",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "disable",
              description: "Disable backup for a given hostname",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "config",
              description: "Manage backup configurations for your project",
              subcommands: [
                {
                  name: ["get", "describe"],
                  description: "Get a backup configuration",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["ls", "list"],
                  description: "List backup configurations for your project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a backup configuration",
                  options: [
                    {
                      name: "--authMechanism",
                      description:
                        "Authentication mechanism needed to connect to the sync source database",
                      args: { name: "authMechanism" },
                    },
                    {
                      name: "--encryption",
                      description:
                        "Flag that indicates if encryption is enabled for the backup configuration",
                    },
                    {
                      name: "--excludedNamespace",
                      description:
                        "List of database names and collection names to omit from the backup",
                      args: { name: "excludedNamespace" },
                    },
                    {
                      name: "--includedNamespace",
                      description:
                        "List of database names and collection names to include in the backup",
                      args: { name: "includedNamespace" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--password",
                      description: "User's password",
                      args: { name: "password" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--provisioned",
                      description:
                        "Flag that indicates if Ops Manager has provisioned the resources needed to store a backup",
                    },
                    {
                      name: "--ssl",
                      description:
                        "Flag that indicates if TLS is enabled for the sync source database",
                    },
                    {
                      name: "--status",
                      description:
                        "Current (or desired) status of the backup configuration",
                      args: { name: "status" },
                    },
                    {
                      name: "--storageEngine",
                      description: "Storage engine used for the backup",
                      args: { name: "storageEngine" },
                    },
                    {
                      name: "--syncSource",
                      description:
                        "Mongod instance from which you retrieve backup data",
                      args: { name: "syncSource" },
                    },
                    {
                      name: "--username",
                      description: "Username of the user",
                      args: { name: "username" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["server", "servers"],
          description: "Manage automated servers for your project",
          subcommands: [
            {
              name: ["ls", "list"],
              description:
                "List all available servers running an automation agent for your project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: "automation",
          description: "Manage automation configuration for your project",
          subcommands: [
            {
              name: "status",
              description: "Show the current status of the automation config",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["show", "get", "describe"],
              description:
                "Get the current automation configuration for a project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the current automation configuration for a project",
              options: [
                {
                  name: ["--file", "-f"],
                  description: "Filename to use",
                  args: { name: "file", template: ["filepaths"] },
                  isRequired: true,
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "watch",
              description: "Watch for automation changes to be completed",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: "security",
          description: "Manage security configuration for your project",
          subcommands: [
            {
              name: "enable",
              description: "Enable authentication mechanisms for your project",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: ["dbuser", "databaseUsers", "databaseUser", "dbusers"],
          description: "Manage database users for your project",
          subcommands: [
            {
              name: "create",
              description: "Create a database user for your project",
              options: [
                {
                  name: "--authDB",
                  description: "Authentication database name",
                  args: { name: "authDB", default: "admin" },
                },
                {
                  name: "--mechanisms",
                  description:
                    "Authentication mechanism. Valid values are SCRAM-SHA-1 or SCRAM-SHA-256",
                  args: { name: "mechanisms", default: "[SCRAM-SHA-1]" },
                },
                {
                  name: ["--password", "-p"],
                  description: "User's password",
                  args: { name: "password" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--role",
                  description:
                    "User's roles and the databases or collections on which the roles apply",
                  args: { name: "role" },
                },
                {
                  name: ["--username", "-u"],
                  description: "Username for authenticating to MongoDB",
                  args: { name: "username" },
                  isRequired: true,
                },
              ],
            },
            {
              name: ["ls", "list"],
              description: "List Atlas database users for your project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete a database user for your project",
              options: [
                {
                  name: "--authDB",
                  description: "Authentication database name",
                  args: { name: "authDB", default: "admin" },
                },
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: ["event", "events"],
          description: "Manage events for your organization or project",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "Return all events for an organization or project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "0" },
                },
                {
                  name: "--maxDate",
                  description:
                    "Returns events whose created date is less than or equal to it",
                  args: { name: "maxDate" },
                },
                {
                  name: "--minDate",
                  description:
                    "Returns events whose created date is greater than or equal to it",
                  args: { name: "minDate" },
                },
                {
                  name: "--orgId",
                  description:
                    "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "orgId" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "0" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--type",
                  description: "Type of the event that triggered the alert",
                  args: { name: "type" },
                },
              ],
            },
            {
              name: ["organization", "orgs", "org", "organizations"],
              description: "Organization operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "Return all events for an organization",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: "--maxDate",
                      description:
                        "Returns events whose created date is less than or equal to it",
                      args: { name: "maxDate" },
                    },
                    {
                      name: "--minDate",
                      description:
                        "Returns events whose created date is greater than or equal to it",
                      args: { name: "minDate" },
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--type",
                      description: "Type of the event that triggered the alert",
                      args: { name: "type" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["project", "projects"],
              description: "Project operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "Return all events for a project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: "--maxDate",
                      description:
                        "Returns events whose created date is less than or equal to it",
                      args: { name: "maxDate" },
                    },
                    {
                      name: "--minDate",
                      description:
                        "Returns events whose created date is greater than or equal to it",
                      args: { name: "minDate" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--type",
                      description: "Type of the event that triggered the alert",
                      args: { name: "type" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "monitoring",
          description: "Manage monitoring for your project",
          subcommands: [
            {
              name: "enable",
              description: "Enable monitoring for a given hostname",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "disable",
              description: "Disable monitoring for a given hostname",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rm", "stop"],
              description: "Stops monitoring the MongoDB process  specified",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: ["process", "processes"],
          description: "Manage MongoDB processes for your project",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List MongoDB processes for your project",
              options: [
                {
                  name: "--clusterId",
                  description: "Unique identifier of the cluster",
                  args: { name: "clusterId" },
                },
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["get", "describe"],
              description: "Describe MongoDB processes for your project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: ["metric", "measurements", "measurement", "metrics"],
          description: "Get measurements on the state of the MongoDB process",
          subcommands: [
            {
              name: ["processes", "process"],
              description: "Get measurements for a given host",
              options: [
                {
                  name: "--end",
                  description:
                    "End of the period, in UNIX Epoch format, until which to retrieve measurements",
                  args: { name: "end" },
                },
                {
                  name: "--granularity",
                  description:
                    "Duration in ISO 8601 notation that specifies the interval between measurement data points. Only the following subset of ISO 8601-formatted time periods are supported: PT10S, PT1M, PT5M, PT1H, P1D",
                  args: { name: "granularity" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--period",
                  description:
                    "Duration in ISO 8601 that specifies how far back in the past to retrieve measurements",
                  args: { name: "period" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--start",
                  description:
                    "Beginning of the period, in UNIX Epoch format, from which to start retrieving measurements",
                  args: { name: "start" },
                },
                {
                  name: "--type",
                  description:
                    "Measurements to return. If it is not specified, all measurements are returned",
                  args: { name: "type" },
                },
              ],
            },
            {
              name: ["disk", "disks"],
              description:
                "List available disks or disks measurements for a given host",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List available disks for a given host",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "describe",
                  description:
                    "Describe disks measurements for a given host partition",
                  options: [
                    {
                      name: "--end",
                      description:
                        "End of the period, in UNIX Epoch format, until which to retrieve measurements",
                      args: { name: "end" },
                    },
                    {
                      name: "--granularity",
                      description:
                        "Duration in ISO 8601 notation that specifies the interval between measurement data points. Only the following subset of ISO 8601-formatted time periods are supported: PT10S, PT1M, PT5M, PT1H, P1D",
                      args: { name: "granularity" },
                      isRequired: true,
                    },
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--period",
                      description:
                        "Duration in ISO 8601 that specifies how far back in the past to retrieve measurements",
                      args: { name: "period" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--start",
                      description:
                        "Beginning of the period, in UNIX Epoch format, from which to start retrieving measurements",
                      args: { name: "start" },
                    },
                    {
                      name: "--type",
                      description:
                        "Measurements to return. If it is not specified, all measurements are returned",
                      args: { name: "type" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["database", "databases"],
              description:
                "List available databases or databases measurements for a given host",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List available databases for a given host",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "describe",
                  description:
                    "Describe database measurements for a given host database",
                  options: [
                    {
                      name: "--end",
                      description:
                        "End of the period, in UNIX Epoch format, until which to retrieve measurements",
                      args: { name: "end" },
                    },
                    {
                      name: "--granularity",
                      description:
                        "Duration in ISO 8601 notation that specifies the interval between measurement data points. Only the following subset of ISO 8601-formatted time periods are supported: PT10S, PT1M, PT5M, PT1H, P1D",
                      args: { name: "granularity" },
                      isRequired: true,
                    },
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--period",
                      description:
                        "Duration in ISO 8601 that specifies how far back in the past to retrieve measurements",
                      args: { name: "period" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--start",
                      description:
                        "Beginning of the period, in UNIX Epoch format, from which to start retrieving measurements",
                      args: { name: "start" },
                    },
                    {
                      name: "--type",
                      description:
                        "Measurements to return. If it is not specified, all measurements are returned",
                      args: { name: "type" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["log", "logs"],
          description: "Manage log collection jobs for your project",
          subcommands: [
            {
              name: ["job", "jobs"],
              description: "Manage log collection jobs for your project",
              subcommands: [
                {
                  name: "collect",
                  description: "Start a job to collect logs for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--redacted",
                      description:
                        "If set to true, emails, hostnames, IP addresses, and namespaces in API responses involving this job are replaced with random string values",
                    },
                    {
                      name: "--sizeRequestedPerFileBytes",
                      description: "Size for each log file in bytes",
                      args: { name: "sizeRequestedPerFileBytes", default: "0" },
                      isRequired: true,
                    },
                    {
                      name: "--type",
                      description:
                        "Array of strings specifying the types of logs to collect",
                      args: { name: "type" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: ["ls", "list"],
                  description: "List log collection jobs for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--verbose",
                      description:
                        "Flag that, if set to true, returns all child jobs in the response",
                    },
                  ],
                },
                {
                  name: "download",
                  description:
                    "Download logs generated by a log collection job",
                  options: [
                    {
                      name: "--force",
                      description: "Overwrites the destination file",
                    },
                    {
                      name: "--out",
                      description:
                        "Optional output file name. Uses the log name if the output file's name is not specified",
                      args: { name: "out", template: ["filepaths"] },
                      isRequired: true,
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a log collection job from your project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["agent", "agents"],
          description: "Manage MongoDB Agents",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List available MongoDB Agents for your project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "upgrade",
              description:
                "Upgrade MongoDB Agents to the latest available version",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: [
                "apikeys",
                "api-keys",
                "apiKey",
                "apikey",
                "api-key",
                "apiKeys",
              ],
              description: "Agent API Keys operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List available MongoDB Agent API Keys for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "create",
                  description: "Create an Agent API Key for your project",
                  options: [
                    {
                      name: "--desc",
                      description: "Description of the API key",
                      args: { name: "desc" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete an Agent API Key for your project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["version", "versions"],
              description: "Manage MongoDB Agents versions",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List MongoDB Agent versions in the provided project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: [
            "maintenancewindows",
            "maintenance-windows",
            "maintenanceWindow",
            "maintenancewindow",
            "maintenance-window",
            "maintenanceWindows",
          ],
          description: "Manage Ops Manager/Cloud Manager maintenance windows",
          subcommands: [
            {
              name: "create",
              description: "Create a maintenance window",
              options: [
                {
                  name: "--alertType",
                  description:
                    "Alert types to silence during maintenance window. Valid values are HOST, REPLICA_SET, CLUSTER, AGENT, or BACKUP",
                  args: { name: "alertType" },
                  isRequired: true,
                },
                {
                  name: "--desc",
                  description: "Description of the maintenance window",
                  args: { name: "desc" },
                },
                {
                  name: "--endDate",
                  description:
                    "Timestamp in ISO 8601 date and time format in UTC when the maintenance window ends",
                  args: { name: "endDate" },
                  isRequired: true,
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--startDate",
                  description:
                    "Timestamp in ISO 8601 date and time format in UTC when the maintenance window starts",
                  args: { name: "startDate" },
                  isRequired: true,
                },
              ],
            },
            {
              name: ["ls", "list"],
              description: "List maintenance windows",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete a maintenance window",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "describe",
              description: "Get a maintenance window",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a maintenance window",
              options: [
                {
                  name: "--alertType",
                  description:
                    "Alert types to silence during maintenance window. Valid values are HOST, REPLICA_SET, CLUSTER, AGENT, or BACKUP",
                  args: { name: "alertType" },
                },
                {
                  name: "--desc",
                  description: "Description of the maintenance window",
                  args: { name: "desc" },
                },
                {
                  name: "--endDate",
                  description:
                    "Timestamp in ISO 8601 date and time format in UTC when the maintenance window ends",
                  args: { name: "endDate" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--startDate",
                  description:
                    "Timestamp in ISO 8601 date and time format in UTC when the maintenance window starts",
                  args: { name: "startDate" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "performanceadvisor",
            "performance-advisor",
            "performanceAdvisor",
          ],
          description: "Performance Advisor operations",
          subcommands: [
            {
              name: ["namespace", "namespaces"],
              description:
                "Retrieve namespaces for collections experiencing slow queries",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Retrieve up to 20 namespaces for collections experiencing slow queries for a specified host",
                  options: [
                    {
                      name: "--duration",
                      description:
                        "Length of time from the since parameter, in milliseconds, for which you want to receive results",
                      args: { name: "duration", default: "0" },
                    },
                    {
                      name: "--hostId",
                      description:
                        "Unique identifier for the host of a MongoDB process",
                      args: { name: "hostId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--processName",
                      description:
                        "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                      args: { name: "processName" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--since",
                      description:
                        "Point in time, specified as milliseconds since the Unix Epoch, from which you want to receive results",
                      args: { name: "since", default: "0" },
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "slowquerylogs",
                "slow-query-logs",
                "slowQueryLog",
                "slowquerylog",
                "slow-query-log",
                "slowQueryLogs",
              ],
              description:
                "Get log lines for slow queries for a specified host",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Return log lines for slow queries that the Performance Advisor and Query Profiler identified",
                  options: [
                    {
                      name: "--duration",
                      description:
                        "Length of time from the since parameter, in milliseconds, for which you want to receive results",
                      args: { name: "duration", default: "0" },
                    },
                    {
                      name: "--hostId",
                      description:
                        "Unique identifier for the host of a MongoDB process",
                      args: { name: "hostId" },
                    },
                    {
                      name: "--nLog",
                      description: "Maximum number of log lines to return",
                      args: { name: "nLog", default: "20000" },
                    },
                    {
                      name: "--namespaces",
                      description:
                        "Namespaces from which to retrieve suggested slow query logs",
                      args: { name: "namespaces" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--processName",
                      description:
                        "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                      args: { name: "processName" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--since",
                      description:
                        "Point in time, specified as milliseconds since the Unix Epoch, from which you want to receive results",
                      args: { name: "since", default: "0" },
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "suggestedindexes",
                "suggested-indexes",
                "suggestedIndex",
                "suggestedindex",
                "suggested-index",
                "suggestedIndexes",
              ],
              description:
                "Get suggested indexes for collections experiencing slow queries",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Retrieve suggested indexes for collections experiencing slow queries",
                  options: [
                    {
                      name: "--duration",
                      description:
                        "Length of time from the since parameter, in milliseconds, for which you want to receive results",
                      args: { name: "duration", default: "0" },
                    },
                    {
                      name: "--hostId",
                      description:
                        "Unique identifier for the host of a MongoDB process",
                      args: { name: "hostId" },
                    },
                    {
                      name: "--nExamples",
                      description:
                        "Maximum number of example queries to provide that will be improved by a suggested index",
                      args: { name: "nExamples", default: "0" },
                    },
                    {
                      name: "--nIndexes",
                      description: "Maximum number of indexes to suggest",
                      args: { name: "nIndexes", default: "0" },
                    },
                    {
                      name: "--namespaces",
                      description:
                        "Namespaces from which to retrieve suggested indexes",
                      args: { name: "namespaces" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--processName",
                      description:
                        "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                      args: { name: "processName" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--since",
                      description:
                        "Point in time, specified as milliseconds since the Unix Epoch, from which you want to receive results",
                      args: { name: "since", default: "0" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["slowOT", "sot", "slowMS", "slowOperationThreshold"],
              description:
                "Enable or disable management of the slow operation threshold for your cluster",
              subcommands: [
                {
                  name: ["ls", "enable"],
                  description:
                    "Enable the application-managed slow operation threshold for your project",
                  options: [
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "disable",
                  description:
                    "Disable the application-managed slow operation threshold for your project",
                  options: [
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: [
            "featurepolicies",
            "feature-policies",
            "featurePolicy",
            "featurepolicy",
            "feature-policy",
            "featurePolicies",
          ],
          description: "Manage feature control policies",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List feature control policies for your project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "update",
              description: "Update feature control policies for your project",
              options: [
                {
                  name: "--name",
                  description:
                    "Identifying label for the external system that manages this Ops Manager Project",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--policy",
                  description:
                    "List of policies that the external system applies to this Ops Manager Project",
                  args: { name: "policy" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--systemId",
                  description:
                    "Unique identifier of the external system that manages this Ops Manager Project",
                  args: { name: "systemId" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "livemigrations",
            "live-migrations",
            "liveMigration",
            "livemigration",
            "live-migration",
            "lm",
            "liveMigrations",
          ],
          description: "Manage a Live Migration to Atlas for your organization",
          subcommands: [
            {
              name: "link",
              description: "Manage the link-token for your organization",
              subcommands: [
                {
                  name: "create",
                  description: "Create one new organization link",
                  options: [
                    {
                      name: "--linkToken",
                      description: "Link-token generated by Atlas",
                      args: { name: "linkToken" },
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete one link-token",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Return the status of the connection between the specified source organization and the target MongoDB Atlas organization",
                  options: [
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
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
      name: ["om", "ops-manager"],
      description: "MongoDB Ops Manager operations",
      subcommands: [
        {
          name: ["cluster", "clusters"],
          description: "Manage clusters for your project",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List clusters for your project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "describe",
              description: "Describe a cluster",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "create",
              description: "Create a MongoDB cluster",
              options: [
                {
                  name: ["--file", "-f"],
                  description: "Filename to use to create the cluster",
                  args: { name: "file", template: ["filepaths"] },
                  isRequired: true,
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a MongoDB cluster",
              options: [
                {
                  name: ["--file", "-f"],
                  description: "Filename to use to update the cluster",
                  args: { name: "file", template: ["filepaths"] },
                  isRequired: true,
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Completely removes a cluster from your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "apply",
              description: "Apply a new cluster configuration for your project",
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "Filename to use to change the automation config",
                  args: { name: "file", template: ["filepaths"] },
                  isRequired: true,
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["index", "indexes"],
              description: "Manage cluster rolling indexes for your project",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a rolling index for your MongoDB cluster",
                  options: [
                    {
                      name: "--MaxVariable",
                      description:
                        "Flag that, if specified, determines which characters to ignore. This flag applies only if indexConfigs.collation.alternate is set to shifted",
                      args: { name: "MaxVariable" },
                    },
                    {
                      name: "--alternate",
                      description:
                        "Flag that, if specified, determines whether collation should consider whitespace and punctuation as base characters during comparisons",
                      args: { name: "alternate" },
                    },
                    {
                      name: "--backwards",
                      description:
                        "Flag that, if set to true, strings with diacritics sort from the back to the front of the string",
                    },
                    {
                      name: "--caseFirst",
                      description:
                        "Flag that, if specified, determines the sort order of case differences during tertiary level comparisons",
                      args: { name: "caseFirst" },
                    },
                    {
                      name: "--caseLevel",
                      description:
                        "Flag that indicates whether the index uses case comparison. This flag applies only if the strength level is set to 1 or 2",
                    },
                    {
                      name: "--collectionName",
                      description: "Collection name",
                      args: { name: "collectionName" },
                      isRequired: true,
                    },
                    {
                      name: "--db",
                      description: "Database name",
                      args: { name: "db" },
                      isRequired: true,
                    },
                    {
                      name: "--key",
                      description:
                        "Field to be indexed and the type of index in the following format: field:type",
                      args: { name: "key" },
                      isRequired: true,
                    },
                    {
                      name: "--locale",
                      description: "Locale that the ICU defines",
                      args: { name: "locale" },
                    },
                    {
                      name: "--normalization",
                      description:
                        "Flag that, if set to true, collation checks if text requires normalization and performs normalization to compare text",
                    },
                    {
                      name: "--numericOrdering",
                      description:
                        "Flag that, if set to true, indicates that collation compares numeric strings as numbers. If set to false, collation compares numeric strings as strings",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--rsName",
                      description: "The replica set that the index is built on",
                      args: { name: "rsName" },
                      isRequired: true,
                    },
                    {
                      name: "--sparse",
                      description:
                        "Flag that indicates whether Atlas should create a sparse index",
                    },
                    {
                      name: "--strength",
                      description: "Level of comparison to perform",
                      args: { name: "strength", default: "0" },
                    },
                  ],
                },
              ],
            },
            {
              name: "unmanage",
              description: "Stop managing a cluster via automation",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "restart",
              description: "Restart a cluster for your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--processName",
                  description:
                    "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                  args: { name: "processName" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "startup",
              description: "Start up a cluster for your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--processName",
                  description:
                    "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                  args: { name: "processName" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "shutdown",
              description: "Shutdown a cluster for your project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--processName",
                  description:
                    "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                  args: { name: "processName" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rfs", "reclaimFreeSpace"],
              description: "Reclaim unused space for a cluster",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--processName",
                  description:
                    "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                  args: { name: "processName" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--timestamp",
                  description:
                    "Timestamp in ISO 8601 format when the service reclaims the space. If not set, defaults to the current timestamp",
                  args: { name: "timestamp" },
                },
              ],
            },
          ],
        },
        {
          name: ["alert", "alerts"],
          description: "Manage alerts for your project",
          subcommands: [
            {
              name: ["config", "settings"],
              description: "Manages alerts configuration for your project",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Creates one alert configuration in the specified project",
                  options: [
                    {
                      name: "--apiKey",
                      description:
                        "Datadog API Key, Opsgenie API Key, VictorOps API key",
                      args: { name: "apiKey" },
                    },
                    {
                      name: "--enabled",
                      description:
                        "If set to true, the alert configuration is enabled",
                    },
                    {
                      name: "--event",
                      description: "Type of the event that triggered the alert",
                      args: { name: "event" },
                    },
                    {
                      name: "--matcherFieldName",
                      description:
                        "Name of the field in the target object to match on",
                      args: { name: "matcherFieldName" },
                    },
                    {
                      name: "--matcherOperator",
                      description: "Operator to test the field's value",
                      args: { name: "matcherOperator" },
                    },
                    {
                      name: "--matcherValue",
                      description: "Value to test with the specified operator",
                      args: { name: "matcherValue" },
                    },
                    {
                      name: "--metricMode",
                      description:
                        "If specified, Atlas computes the current metric value as an average",
                      args: { name: "metricMode" },
                    },
                    {
                      name: "--metricName",
                      description:
                        "Name of the metric against which Atlas checks the configured alert",
                      args: { name: "metricName" },
                    },
                    {
                      name: "--metricOperator",
                      description:
                        "Operator to apply when checking the current metric value against the threshold value",
                      args: { name: "metricOperator" },
                    },
                    {
                      name: "--metricThreshold",
                      description:
                        "Threshold value outside of which an alert will be triggered",
                      args: { name: "metricThreshold", default: "0" },
                    },
                    {
                      name: "--metricUnits",
                      description: "Units for the threshold value",
                      args: { name: "metricUnits" },
                    },
                    {
                      name: "--notificationChannelName",
                      description:
                        "Slack channel name. Required for the SLACK notifications type",
                      args: { name: "notificationChannelName" },
                    },
                    {
                      name: "--notificationDelayMin",
                      description:
                        "Number of minutes to wait after an alert condition is detected before sending out the first notification",
                      args: { name: "notificationDelayMin", default: "0" },
                    },
                    {
                      name: "--notificationEmailAddress",
                      description:
                        "Email address to which alert notifications are sent",
                      args: { name: "notificationEmailAddress" },
                    },
                    {
                      name: "--notificationEmailEnabled",
                      description:
                        "Flag indicating whether email notifications should be sent",
                    },
                    {
                      name: "--notificationFlowName",
                      description:
                        "Flowdock Flow name in lower-case letters for sending alert notifications",
                      args: { name: "notificationFlowName" },
                    },
                    {
                      name: "--notificationIntervalMin",
                      description:
                        "Number of minutes to wait between successive notifications for unacknowledged alerts that are not resolved",
                      args: { name: "notificationIntervalMin", default: "0" },
                    },
                    {
                      name: "--notificationMobileNumber",
                      description:
                        "Mobile number to which alert notifications are sent",
                      args: { name: "notificationMobileNumber" },
                    },
                    {
                      name: "--notificationOrgName",
                      description:
                        "Flowdock organization's name in lower-case letters",
                      args: { name: "notificationOrgName" },
                    },
                    {
                      name: "--notificationRegion",
                      description: "Region that indicates which API URL to use",
                      args: { name: "notificationRegion" },
                    },
                    {
                      name: "--notificationServiceKey",
                      description: "PagerDuty service key",
                      args: { name: "notificationServiceKey" },
                    },
                    {
                      name: "--notificationSmsEnabled",
                      description:
                        "Flag indicating whether text message notifications should be sent",
                    },
                    {
                      name: "--notificationTeamId",
                      description: "Unique identifier of a team",
                      args: { name: "notificationTeamId" },
                    },
                    {
                      name: "--notificationToken",
                      description:
                        "Slack API token, Bot token, or Flowdock personal API token",
                      args: { name: "notificationToken" },
                    },
                    {
                      name: "--notificationType",
                      description:
                        "Type of alert notification. The values are DATADOG, EMAIL, FLOWDOCK, GROUP (Project), ORG, OPS_GENIE, PAGER_DUTY, SLACK, SMS, USER, or VICTOR_OPS",
                      args: { name: "notificationType" },
                    },
                    {
                      name: "--notificationUsername",
                      description:
                        "Name of the Atlas user to which to send notifications",
                      args: { name: "notificationUsername" },
                    },
                    {
                      name: "--notificationVictorOpsRoutingKey",
                      description: "VictorOps routing key",
                      args: { name: "notificationVictorOpsRoutingKey" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["ls", "list"],
                  description:
                    "Returns alert configurations for the specified project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description:
                    "Deletes the specified alert configuration in a specified project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["field", "fields"],
                  description:
                    "Manages alert configuration fields for your project",
                  subcommands: [
                    {
                      name: ["types", "type"],
                      description:
                        "Lists available field types for your alert configurations",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Updates one alert configuration in the specified project",
                  options: [
                    {
                      name: "--apiKey",
                      description:
                        "Datadog API Key, Opsgenie API Key, VictorOps API key",
                      args: { name: "apiKey" },
                    },
                    {
                      name: "--enabled",
                      description:
                        "If set to true, the alert configuration is enabled",
                    },
                    {
                      name: "--event",
                      description: "Type of the event that triggered the alert",
                      args: { name: "event" },
                    },
                    {
                      name: "--matcherFieldName",
                      description:
                        "Name of the field in the target object to match on",
                      args: { name: "matcherFieldName" },
                    },
                    {
                      name: "--matcherOperator",
                      description: "Operator to test the field's value",
                      args: { name: "matcherOperator" },
                    },
                    {
                      name: "--matcherValue",
                      description: "Value to test with the specified operator",
                      args: { name: "matcherValue" },
                    },
                    {
                      name: "--metricMode",
                      description:
                        "If specified, Atlas computes the current metric value as an average",
                      args: { name: "metricMode" },
                    },
                    {
                      name: "--metricName",
                      description:
                        "Name of the metric against which Atlas checks the configured alert",
                      args: { name: "metricName" },
                    },
                    {
                      name: "--metricOperator",
                      description:
                        "Operator to apply when checking the current metric value against the threshold value",
                      args: { name: "metricOperator" },
                    },
                    {
                      name: "--metricThreshold",
                      description:
                        "Threshold value outside of which an alert will be triggered",
                      args: { name: "metricThreshold", default: "0" },
                    },
                    {
                      name: "--metricUnits",
                      description: "Units for the threshold value",
                      args: { name: "metricUnits" },
                    },
                    {
                      name: "--notificationChannelName",
                      description:
                        "Slack channel name. Required for the SLACK notifications type",
                      args: { name: "notificationChannelName" },
                    },
                    {
                      name: "--notificationDelayMin",
                      description:
                        "Number of minutes to wait after an alert condition is detected before sending out the first notification",
                      args: { name: "notificationDelayMin", default: "0" },
                    },
                    {
                      name: "--notificationEmailAddress",
                      description:
                        "Email address to which alert notifications are sent",
                      args: { name: "notificationEmailAddress" },
                    },
                    {
                      name: "--notificationEmailEnabled",
                      description:
                        "Flag indicating whether email notifications should be sent",
                    },
                    {
                      name: "--notificationFlowName",
                      description:
                        "Flowdock Flow name in lower-case letters for sending alert notifications",
                      args: { name: "notificationFlowName" },
                    },
                    {
                      name: "--notificationIntervalMin",
                      description:
                        "Number of minutes to wait between successive notifications for unacknowledged alerts that are not resolved",
                      args: { name: "notificationIntervalMin", default: "0" },
                    },
                    {
                      name: "--notificationMobileNumber",
                      description:
                        "Mobile number to which alert notifications are sent",
                      args: { name: "notificationMobileNumber" },
                    },
                    {
                      name: "--notificationOrgName",
                      description:
                        "Flowdock organization's name in lower-case letters",
                      args: { name: "notificationOrgName" },
                    },
                    {
                      name: "--notificationRegion",
                      description: "Region that indicates which API URL to use",
                      args: { name: "notificationRegion" },
                    },
                    {
                      name: "--notificationServiceKey",
                      description: "PagerDuty service key",
                      args: { name: "notificationServiceKey" },
                    },
                    {
                      name: "--notificationSmsEnabled",
                      description:
                        "Flag indicating whether text message notifications should be sent",
                    },
                    {
                      name: "--notificationTeamId",
                      description: "Unique identifier of a team",
                      args: { name: "notificationTeamId" },
                    },
                    {
                      name: "--notificationToken",
                      description:
                        "Slack API token, Bot token, or Flowdock personal API token",
                      args: { name: "notificationToken" },
                    },
                    {
                      name: "--notificationType",
                      description:
                        "Type of alert notification. The values are DATADOG, EMAIL, FLOWDOCK, GROUP (Project), ORG, OPS_GENIE, PAGER_DUTY, SLACK, SMS, USER, or VICTOR_OPS",
                      args: { name: "notificationType" },
                    },
                    {
                      name: "--notificationUsername",
                      description:
                        "Name of the Atlas user to which to send notifications",
                      args: { name: "notificationUsername" },
                    },
                    {
                      name: "--notificationVictorOpsRoutingKey",
                      description: "VictorOps routing key",
                      args: { name: "notificationVictorOpsRoutingKey" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["get", "describe"],
              description: "Retrieves one alert for the specified project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["ls", "list"],
              description:
                "Retrieves all alerts for the specified Atlas project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "0" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "0" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--status",
                  description:
                    "Alert's status. The values are TRACKING, OPEN, CLOSED, and CANCELED",
                  args: { name: "status" },
                },
              ],
            },
            {
              name: ["ack", "acknowledge"],
              description: "Acknowledges one alert for the specified project",
              options: [
                {
                  name: "--comment",
                  description: "Optional description or comment for the entry",
                  args: { name: "comment" },
                },
                {
                  name: ["--forever", "-F"],
                  description: "Acknowledges an alert 'forever'",
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--until",
                  description:
                    "Time, in ISO 8601 format, until which the alert has been acknowledged. mongocli returns this value after the alert has been acknowledged",
                  args: { name: "until" },
                },
              ],
            },
            {
              name: ["unack", "unacknowledge"],
              description: "Unacknowledges one alert for the specified project",
              options: [
                {
                  name: "--comment",
                  description: "Optional description or comment for the entry",
                  args: { name: "comment" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "global",
              description:
                "Retrieves all the global alerts for the specified Ops Manager project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Returns all global alerts for the specified Ops Manager project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--status",
                      description:
                        "Alert's status. The values are TRACKING, OPEN, CLOSED, and CANCELED",
                      args: { name: "status" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["backup", "backups"],
          description: "Manage continuous backups for your project",
          subcommands: [
            {
              name: ["snapshot", "snapshots"],
              description: "Manage backup snapshots for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List snapshots for a project and cluster",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "schedule",
                  description: "Manage backup snapshot schedules for a cluster",
                  subcommands: [
                    {
                      name: ["get", "describe"],
                      description: "Describe a snapshot schedule for a cluster",
                      options: [
                        {
                          name: "--clusterId",
                          description: "Unique identifier of the cluster",
                          args: { name: "clusterId" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: "update",
                      description: "Update a snapshot schedule for a cluster",
                      options: [
                        {
                          name: "--clusterCheckpointIntervalMin",
                          description:
                            "Number of minutes between successive cluster checkpoints. Valid values are 15, 30, or 60",
                          args: {
                            name: "clusterCheckpointIntervalMin",
                            default: "0",
                          },
                        },
                        {
                          name: "--clusterId",
                          description: "Unique identifier of the cluster",
                          args: { name: "clusterId" },
                          isRequired: true,
                        },
                        {
                          name: "--dailySnapshotRetentionDays",
                          description:
                            "Number of days to retain daily snapshots. Accepted values are between 1 and 365 inclusive",
                          args: {
                            name: "dailySnapshotRetentionDays",
                            default: "0",
                          },
                        },
                        {
                          name: "--monthlySnapshotRetentionMonths",
                          description:
                            "Number of months to retain monthly snapshots. Accepted values are between 1 and 36 inclusive",
                          args: {
                            name: "monthlySnapshotRetentionMonths",
                            default: "0",
                          },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--pointInTimeWindowHours",
                          description:
                            "Number of hours in the past for which MongoDB should create a point-in-time snapshot",
                          args: {
                            name: "pointInTimeWindowHours",
                            default: "0",
                          },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                        {
                          name: "--referenceHourOfDay",
                          description:
                            "Hour of the day to schedule snapshots using a 24-hour clock. Accepted values are between 0 and 23 inclusive",
                          args: { name: "referenceHourOfDay", default: "0" },
                        },
                        {
                          name: "--referenceMinuteOfHour",
                          description:
                            "Minute of the hour to schedule snapshots. Accepted values are between 0 and 59 inclusive",
                          args: { name: "referenceMinuteOfHour", default: "0" },
                        },
                        {
                          name: "--referenceTimeZoneOffset",
                          description:
                            "The ISO-8601-formatted timezone offset where the Ops Manager host resides",
                          args: { name: "referenceTimeZoneOffset" },
                        },
                        {
                          name: "--snapshotIntervalHours",
                          description:
                            "Number of hours between snapshots. Valid values are 6, 8, 12, or 24",
                          args: { name: "snapshotIntervalHours", default: "0" },
                        },
                        {
                          name: "--snapshotRetentionDays",
                          description:
                            "Number of days to keep recent snapshots. Accepted values are between 2 and 5 inclusive",
                          args: { name: "snapshotRetentionDays", default: "0" },
                        },
                        {
                          name: "--weeklySnapshotRetentionWeeks",
                          description:
                            "Number of weeks to retain weekly snapshots. Accepted values are between 1 and 52 inclusive",
                          args: {
                            name: "weeklySnapshotRetentionWeeks",
                            default: "0",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: ["restore", "restores"],
              description: "Manage restore jobs for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "Lists restore jobs for a project and cluster",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "start",
                  description: "Start a restore job for a project and cluster",
                  options: [
                    {
                      name: "--checkpointId",
                      description:
                        "Unique identifier for the sharded cluster checkpoint that represents the point in time to which your data will be restored. If you set checkpointId, you cannot set oplogInc, oplogTs, snapshotId, or pointInTimeUTCMillis",
                      args: { name: "checkpointId" },
                    },
                    {
                      name: "--clusterId",
                      description: "Unique identifier of the cluster",
                      args: { name: "clusterId" },
                      isRequired: true,
                    },
                    {
                      name: "--expirationHours",
                      description:
                        "Number of hours the download URL is valid once the restore job is complete. For use only with download restore jobs",
                      args: { name: "expirationHours", default: "0" },
                    },
                    {
                      name: "--expires",
                      description:
                        "Timestamp in ISO 8601 date and time format after which the URL is no longer available. For use only with download restore jobs",
                      args: { name: "expires" },
                    },
                    {
                      name: "--maxDownloads",
                      description:
                        "Number of times the download URL can be used. This value must be 1 or greater. For use only with download restore jobs",
                      args: { name: "maxDownloads", default: "0" },
                    },
                    {
                      name: "--oplogInc",
                      description:
                        "32-bit incrementing ordinal that represents operations within a given second. When paired with oplogTs, they represent the point in time to which your data will be restored",
                      args: { name: "oplogInc", default: "0" },
                    },
                    {
                      name: "--oplogTs",
                      description:
                        "Oplog timestamp given as a timestamp in the number of seconds that have elapsed since the UNIX Epoch. When paired with oplogInc, they represent the point in time to which your data will be restored",
                      args: { name: "oplogTs" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--pointInTimeUTCMillis",
                      description:
                        "Timestamp in the number of milliseconds that have elapsed since the UNIX epoch that represents the point in time to which your data will be restored. This timestamp must be within the last 24 hours of the current time",
                      args: { name: "pointInTimeUTCMillis", default: "0" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--snapshotId",
                      description:
                        "Unique identifier of the snapshot to restore",
                      args: { name: "snapshotId" },
                    },
                    {
                      name: "--targetClusterId",
                      description:
                        "Unique identifier of the target cluster. For use only with automated restore jobs",
                      args: { name: "targetClusterId" },
                    },
                    {
                      name: "--targetProjectId",
                      description:
                        "Unique identifier of the project that contains the destination cluster for the restore job",
                      args: { name: "targetProjectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["checkpoint", "checkpoints"],
              description: "Manage backup checkpoints for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List continuous backup checkpoints for your project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: "enable",
              description: "Enable backup for a given hostname",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "disable",
              description: "Disable backup for a given hostname",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "config",
              description: "Manage backup configurations for your project",
              subcommands: [
                {
                  name: ["get", "describe"],
                  description: "Get a backup configuration",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["ls", "list"],
                  description: "List backup configurations for your project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a backup configuration",
                  options: [
                    {
                      name: "--authMechanism",
                      description:
                        "Authentication mechanism needed to connect to the sync source database",
                      args: { name: "authMechanism" },
                    },
                    {
                      name: "--encryption",
                      description:
                        "Flag that indicates if encryption is enabled for the backup configuration",
                    },
                    {
                      name: "--excludedNamespace",
                      description:
                        "List of database names and collection names to omit from the backup",
                      args: { name: "excludedNamespace" },
                    },
                    {
                      name: "--includedNamespace",
                      description:
                        "List of database names and collection names to include in the backup",
                      args: { name: "includedNamespace" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--password",
                      description: "User's password",
                      args: { name: "password" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--provisioned",
                      description:
                        "Flag that indicates if Ops Manager has provisioned the resources needed to store a backup",
                    },
                    {
                      name: "--ssl",
                      description:
                        "Flag that indicates if TLS is enabled for the sync source database",
                    },
                    {
                      name: "--status",
                      description:
                        "Current (or desired) status of the backup configuration",
                      args: { name: "status" },
                    },
                    {
                      name: "--storageEngine",
                      description: "Storage engine used for the backup",
                      args: { name: "storageEngine" },
                    },
                    {
                      name: "--syncSource",
                      description:
                        "Mongod instance from which you retrieve backup data",
                      args: { name: "syncSource" },
                    },
                    {
                      name: "--username",
                      description: "Username of the user",
                      args: { name: "username" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["server", "servers"],
          description: "Manage automated servers for your project",
          subcommands: [
            {
              name: ["ls", "list"],
              description:
                "List all available servers running an automation agent for your project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: "automation",
          description: "Manage automation configuration for your project",
          subcommands: [
            {
              name: "status",
              description: "Show the current status of the automation config",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["show", "get", "describe"],
              description:
                "Get the current automation configuration for a project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the current automation configuration for a project",
              options: [
                {
                  name: ["--file", "-f"],
                  description: "Filename to use",
                  args: { name: "file", template: ["filepaths"] },
                  isRequired: true,
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "watch",
              description: "Watch for automation changes to be completed",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: "security",
          description: "Manage security configuration for your project",
          subcommands: [
            {
              name: "enable",
              description: "Enable authentication mechanisms for your project",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: ["dbuser", "databaseUsers", "databaseUser", "dbusers"],
          description: "Manage database users for your project",
          subcommands: [
            {
              name: "create",
              description: "Create a database user for your project",
              options: [
                {
                  name: "--authDB",
                  description: "Authentication database name",
                  args: { name: "authDB", default: "admin" },
                },
                {
                  name: "--mechanisms",
                  description:
                    "Authentication mechanism. Valid values are SCRAM-SHA-1 or SCRAM-SHA-256",
                  args: { name: "mechanisms", default: "[SCRAM-SHA-1]" },
                },
                {
                  name: ["--password", "-p"],
                  description: "User's password",
                  args: { name: "password" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--role",
                  description:
                    "User's roles and the databases or collections on which the roles apply",
                  args: { name: "role" },
                },
                {
                  name: ["--username", "-u"],
                  description: "Username for authenticating to MongoDB",
                  args: { name: "username" },
                  isRequired: true,
                },
              ],
            },
            {
              name: ["ls", "list"],
              description: "List Atlas database users for your project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete a database user for your project",
              options: [
                {
                  name: "--authDB",
                  description: "Authentication database name",
                  args: { name: "authDB", default: "admin" },
                },
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: "owner",
          description: "Manage Ops Manager owners",
          subcommands: [
            {
              name: "create",
              description: "Create the first user for Ops Manager",
              options: [
                {
                  name: "--accessListIp",
                  description:
                    "IP addresses to add to the new user's access list",
                  args: { name: "accessListIp" },
                },
                {
                  name: "--email",
                  description: "User's email address",
                  args: { name: "email" },
                  isRequired: true,
                },
                {
                  name: "--firstName",
                  description: "User's first name",
                  args: { name: "firstName" },
                  isRequired: true,
                },
                {
                  name: "--lastName",
                  description: "User's last name",
                  args: { name: "lastName" },
                  isRequired: true,
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: ["--password", "-p"],
                  description: "User's password",
                  args: { name: "password" },
                },
                {
                  name: "--whitelistIp",
                  description:
                    "IP addresses to add to the new user's access list",
                  hidden: true,
                  args: { name: "whitelistIp" },
                },
              ],
            },
          ],
        },
        {
          name: ["event", "events"],
          description: "Manage events for your organization or project",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "Return all events for an organization or project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "0" },
                },
                {
                  name: "--maxDate",
                  description:
                    "Returns events whose created date is less than or equal to it",
                  args: { name: "maxDate" },
                },
                {
                  name: "--minDate",
                  description:
                    "Returns events whose created date is greater than or equal to it",
                  args: { name: "minDate" },
                },
                {
                  name: "--orgId",
                  description:
                    "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "orgId" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "0" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--type",
                  description: "Type of the event that triggered the alert",
                  args: { name: "type" },
                },
              ],
            },
            {
              name: ["organization", "orgs", "org", "organizations"],
              description: "Organization operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "Return all events for an organization",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: "--maxDate",
                      description:
                        "Returns events whose created date is less than or equal to it",
                      args: { name: "maxDate" },
                    },
                    {
                      name: "--minDate",
                      description:
                        "Returns events whose created date is greater than or equal to it",
                      args: { name: "minDate" },
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--type",
                      description: "Type of the event that triggered the alert",
                      args: { name: "type" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["project", "projects"],
              description: "Project operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "Return all events for a project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: "--maxDate",
                      description:
                        "Returns events whose created date is less than or equal to it",
                      args: { name: "maxDate" },
                    },
                    {
                      name: "--minDate",
                      description:
                        "Returns events whose created date is greater than or equal to it",
                      args: { name: "minDate" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--type",
                      description: "Type of the event that triggered the alert",
                      args: { name: "type" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "monitoring",
          description: "Manage monitoring for your project",
          subcommands: [
            {
              name: "enable",
              description: "Enable monitoring for a given hostname",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "disable",
              description: "Disable monitoring for a given hostname",
              options: [
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rm", "stop"],
              description: "Stops monitoring the MongoDB process  specified",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: ["process", "processes"],
          description: "Manage MongoDB processes for your project",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List MongoDB processes for your project",
              options: [
                {
                  name: "--clusterId",
                  description: "Unique identifier of the cluster",
                  args: { name: "clusterId" },
                },
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["get", "describe"],
              description: "Describe MongoDB processes for your project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: ["metric", "measurements", "measurement", "metrics"],
          description: "Get measurements on the state of the MongoDB process",
          subcommands: [
            {
              name: ["processes", "process"],
              description: "Get measurements for a given host",
              options: [
                {
                  name: "--end",
                  description:
                    "End of the period, in UNIX Epoch format, until which to retrieve measurements",
                  args: { name: "end" },
                },
                {
                  name: "--granularity",
                  description:
                    "Duration in ISO 8601 notation that specifies the interval between measurement data points. Only the following subset of ISO 8601-formatted time periods are supported: PT10S, PT1M, PT5M, PT1H, P1D",
                  args: { name: "granularity" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--period",
                  description:
                    "Duration in ISO 8601 that specifies how far back in the past to retrieve measurements",
                  args: { name: "period" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--start",
                  description:
                    "Beginning of the period, in UNIX Epoch format, from which to start retrieving measurements",
                  args: { name: "start" },
                },
                {
                  name: "--type",
                  description:
                    "Measurements to return. If it is not specified, all measurements are returned",
                  args: { name: "type" },
                },
              ],
            },
            {
              name: ["disk", "disks"],
              description:
                "List available disks or disks measurements for a given host",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List available disks for a given host",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "describe",
                  description:
                    "Describe disks measurements for a given host partition",
                  options: [
                    {
                      name: "--end",
                      description:
                        "End of the period, in UNIX Epoch format, until which to retrieve measurements",
                      args: { name: "end" },
                    },
                    {
                      name: "--granularity",
                      description:
                        "Duration in ISO 8601 notation that specifies the interval between measurement data points. Only the following subset of ISO 8601-formatted time periods are supported: PT10S, PT1M, PT5M, PT1H, P1D",
                      args: { name: "granularity" },
                      isRequired: true,
                    },
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--period",
                      description:
                        "Duration in ISO 8601 that specifies how far back in the past to retrieve measurements",
                      args: { name: "period" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--start",
                      description:
                        "Beginning of the period, in UNIX Epoch format, from which to start retrieving measurements",
                      args: { name: "start" },
                    },
                    {
                      name: "--type",
                      description:
                        "Measurements to return. If it is not specified, all measurements are returned",
                      args: { name: "type" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["database", "databases"],
              description:
                "List available databases or databases measurements for a given host",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List available databases for a given host",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "describe",
                  description:
                    "Describe database measurements for a given host database",
                  options: [
                    {
                      name: "--end",
                      description:
                        "End of the period, in UNIX Epoch format, until which to retrieve measurements",
                      args: { name: "end" },
                    },
                    {
                      name: "--granularity",
                      description:
                        "Duration in ISO 8601 notation that specifies the interval between measurement data points. Only the following subset of ISO 8601-formatted time periods are supported: PT10S, PT1M, PT5M, PT1H, P1D",
                      args: { name: "granularity" },
                      isRequired: true,
                    },
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "0" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "0" },
                    },
                    {
                      name: "--period",
                      description:
                        "Duration in ISO 8601 that specifies how far back in the past to retrieve measurements",
                      args: { name: "period" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--start",
                      description:
                        "Beginning of the period, in UNIX Epoch format, from which to start retrieving measurements",
                      args: { name: "start" },
                    },
                    {
                      name: "--type",
                      description:
                        "Measurements to return. If it is not specified, all measurements are returned",
                      args: { name: "type" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["log", "logs"],
          description: "Manage log collection jobs for your project",
          subcommands: [
            {
              name: ["job", "jobs"],
              description: "Manage log collection jobs for your project",
              subcommands: [
                {
                  name: "collect",
                  description: "Start a job to collect logs for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--redacted",
                      description:
                        "If set to true, emails, hostnames, IP addresses, and namespaces in API responses involving this job are replaced with random string values",
                    },
                    {
                      name: "--sizeRequestedPerFileBytes",
                      description: "Size for each log file in bytes",
                      args: { name: "sizeRequestedPerFileBytes", default: "0" },
                      isRequired: true,
                    },
                    {
                      name: "--type",
                      description:
                        "Array of strings specifying the types of logs to collect",
                      args: { name: "type" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: ["ls", "list"],
                  description: "List log collection jobs for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--verbose",
                      description:
                        "Flag that, if set to true, returns all child jobs in the response",
                    },
                  ],
                },
                {
                  name: "download",
                  description:
                    "Download logs generated by a log collection job",
                  options: [
                    {
                      name: "--force",
                      description: "Overwrites the destination file",
                    },
                    {
                      name: "--out",
                      description:
                        "Optional output file name. Uses the log name if the output file's name is not specified",
                      args: { name: "out", template: ["filepaths"] },
                      isRequired: true,
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a log collection job from your project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["agent", "agents"],
          description: "Manage MongoDB Agents",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List available MongoDB Agents for your project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "upgrade",
              description:
                "Upgrade MongoDB Agents to the latest available version",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: [
                "apikeys",
                "api-keys",
                "apiKey",
                "apikey",
                "api-key",
                "apiKeys",
              ],
              description: "Agent API Keys operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List available MongoDB Agent API Keys for your project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "create",
                  description: "Create an Agent API Key for your project",
                  options: [
                    {
                      name: "--desc",
                      description: "Description of the API key",
                      args: { name: "desc" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete an Agent API Key for your project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["version", "versions"],
              description: "Manage MongoDB Agents versions",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List MongoDB Agent versions in the provided project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: [
            "diagnosearchives",
            "diagnose-archives",
            "diagnoseArchive",
            "diagnosearchive",
            "diagnose-archive",
            "diagnoseArchives",
          ],
          description: "Manage diagnose archives",
          subcommands: [
            {
              name: ["get", "download"],
              description: "Download diagnose archives",
              options: [
                {
                  name: "--limit",
                  description: "Max number of entries for the diagnose archive",
                  args: { name: "limit", default: "0" },
                },
                {
                  name: "--minutes",
                  description:
                    "Beginning of the period, in UNIX Epoch format, from which to start retrieving the diagnose archive. Ops Manager takes out minutes from the current time",
                  args: { name: "minutes", default: "0" },
                },
                {
                  name: "--out",
                  description:
                    "Optional output file name. Uses diagnose-archive.tar.gz if the output file's name is not specified",
                  args: {
                    name: "out",
                    default: "diagnose-archive.tar.gz",
                    template: ["filepaths"],
                  },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "maintenancewindows",
            "maintenance-windows",
            "maintenanceWindow",
            "maintenancewindow",
            "maintenance-window",
            "maintenanceWindows",
          ],
          description: "Manage Ops Manager/Cloud Manager maintenance windows",
          subcommands: [
            {
              name: "create",
              description: "Create a maintenance window",
              options: [
                {
                  name: "--alertType",
                  description:
                    "Alert types to silence during maintenance window. Valid values are HOST, REPLICA_SET, CLUSTER, AGENT, or BACKUP",
                  args: { name: "alertType" },
                  isRequired: true,
                },
                {
                  name: "--desc",
                  description: "Description of the maintenance window",
                  args: { name: "desc" },
                },
                {
                  name: "--endDate",
                  description:
                    "Timestamp in ISO 8601 date and time format in UTC when the maintenance window ends",
                  args: { name: "endDate" },
                  isRequired: true,
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--startDate",
                  description:
                    "Timestamp in ISO 8601 date and time format in UTC when the maintenance window starts",
                  args: { name: "startDate" },
                  isRequired: true,
                },
              ],
            },
            {
              name: ["ls", "list"],
              description: "List maintenance windows",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete a maintenance window",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "describe",
              description: "Get a maintenance window",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a maintenance window",
              options: [
                {
                  name: "--alertType",
                  description:
                    "Alert types to silence during maintenance window. Valid values are HOST, REPLICA_SET, CLUSTER, AGENT, or BACKUP",
                  args: { name: "alertType" },
                },
                {
                  name: "--desc",
                  description: "Description of the maintenance window",
                  args: { name: "desc" },
                },
                {
                  name: "--endDate",
                  description:
                    "Timestamp in ISO 8601 date and time format in UTC when the maintenance window ends",
                  args: { name: "endDate" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--startDate",
                  description:
                    "Timestamp in ISO 8601 date and time format in UTC when the maintenance window starts",
                  args: { name: "startDate" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "performanceadvisor",
            "performance-advisor",
            "performanceAdvisor",
          ],
          description: "Performance Advisor operations",
          subcommands: [
            {
              name: ["namespace", "namespaces"],
              description:
                "Retrieve namespaces for collections experiencing slow queries",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Retrieve up to 20 namespaces for collections experiencing slow queries for a specified host",
                  options: [
                    {
                      name: "--duration",
                      description:
                        "Length of time from the since parameter, in milliseconds, for which you want to receive results",
                      args: { name: "duration", default: "0" },
                    },
                    {
                      name: "--hostId",
                      description:
                        "Unique identifier for the host of a MongoDB process",
                      args: { name: "hostId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--processName",
                      description:
                        "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                      args: { name: "processName" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--since",
                      description:
                        "Point in time, specified as milliseconds since the Unix Epoch, from which you want to receive results",
                      args: { name: "since", default: "0" },
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "slowquerylogs",
                "slow-query-logs",
                "slowQueryLog",
                "slowquerylog",
                "slow-query-log",
                "slowQueryLogs",
              ],
              description:
                "Get log lines for slow queries for a specified host",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Return log lines for slow queries that the Performance Advisor and Query Profiler identified",
                  options: [
                    {
                      name: "--duration",
                      description:
                        "Length of time from the since parameter, in milliseconds, for which you want to receive results",
                      args: { name: "duration", default: "0" },
                    },
                    {
                      name: "--hostId",
                      description:
                        "Unique identifier for the host of a MongoDB process",
                      args: { name: "hostId" },
                    },
                    {
                      name: "--nLog",
                      description: "Maximum number of log lines to return",
                      args: { name: "nLog", default: "20000" },
                    },
                    {
                      name: "--namespaces",
                      description:
                        "Namespaces from which to retrieve suggested slow query logs",
                      args: { name: "namespaces" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--processName",
                      description:
                        "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                      args: { name: "processName" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--since",
                      description:
                        "Point in time, specified as milliseconds since the Unix Epoch, from which you want to receive results",
                      args: { name: "since", default: "0" },
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "suggestedindexes",
                "suggested-indexes",
                "suggestedIndex",
                "suggestedindex",
                "suggested-index",
                "suggestedIndexes",
              ],
              description:
                "Get suggested indexes for collections experiencing slow queries",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Retrieve suggested indexes for collections experiencing slow queries",
                  options: [
                    {
                      name: "--duration",
                      description:
                        "Length of time from the since parameter, in milliseconds, for which you want to receive results",
                      args: { name: "duration", default: "0" },
                    },
                    {
                      name: "--hostId",
                      description:
                        "Unique identifier for the host of a MongoDB process",
                      args: { name: "hostId" },
                    },
                    {
                      name: "--nExamples",
                      description:
                        "Maximum number of example queries to provide that will be improved by a suggested index",
                      args: { name: "nExamples", default: "0" },
                    },
                    {
                      name: "--nIndexes",
                      description: "Maximum number of indexes to suggest",
                      args: { name: "nIndexes", default: "0" },
                    },
                    {
                      name: "--namespaces",
                      description:
                        "Namespaces from which to retrieve suggested indexes",
                      args: { name: "namespaces" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--processName",
                      description:
                        "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
                      args: { name: "processName" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--since",
                      description:
                        "Point in time, specified as milliseconds since the Unix Epoch, from which you want to receive results",
                      args: { name: "since", default: "0" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["slowOT", "sot", "slowMS", "slowOperationThreshold"],
              description:
                "Enable or disable management of the slow operation threshold for your cluster",
              subcommands: [
                {
                  name: ["ls", "enable"],
                  description:
                    "Enable the application-managed slow operation threshold for your project",
                  options: [
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "disable",
                  description:
                    "Disable the application-managed slow operation threshold for your project",
                  options: [
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["versionmanifest", "version-manifest", "versionManifest"],
          description: "Manage Ops Manager version manifest",
          subcommands: [
            {
              name: "update",
              description: "Update Ops Manager version manifest",
              options: [
                {
                  name: "--force",
                  description: "If specified, skips Ops Manager version check",
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
              ],
            },
          ],
        },
        {
          name: "admin",
          description: "Manage backup administration",
          subcommands: [
            {
              name: ["backup", "backups"],
              description: "Manage backup administration",
              subcommands: [
                {
                  name: ["blockstore", "blockstores"],
                  description: "Manage backup blockstore configurations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List backup blockstore configurations",
                      options: [
                        {
                          name: "--limit",
                          description: "Number of items per page",
                          args: { name: "limit", default: "100" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--page",
                          description: "Page number",
                          args: { name: "page", default: "1" },
                        },
                      ],
                    },
                    {
                      name: ["get", "describe"],
                      description: "Get a backup blockstore configuration",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                      ],
                    },
                    {
                      name: "create",
                      description: "Create a backup blockstore configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this blockstore can be assigned backup jobs",
                        },
                        {
                          name: "--encryptedCredentials",
                          description:
                            "Flag indicating whether the username and password were encrypted using the credentials tool",
                        },
                        {
                          name: "--label",
                          description:
                            "Array of tags to manage which backup jobs Ops Manager can assign to which blockstores",
                          args: { name: "label" },
                        },
                        {
                          name: "--loadFactor",
                          description:
                            "A positive, non-zero integer that expresses how much backup work this snapshot store should perform compared to another snapshot store",
                          args: { name: "loadFactor", default: "0" },
                        },
                        {
                          name: "--maxCapacityGB",
                          description:
                            "The maximum amount of data in GB this blockstore can store",
                          args: { name: "maxCapacityGB", default: "0" },
                        },
                        {
                          name: "--name",
                          description:
                            "Unique name that labels this blockstore",
                          args: { name: "name" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--ssl",
                          description:
                            "Flag indicating whether this blockstore only accepts connections encrypted using TLS",
                        },
                        {
                          name: "--uri",
                          description:
                            "A comma-separated list of hosts in the <hostname:port> format that can be used to access this blockstore",
                          args: { name: "uri" },
                          isRequired: true,
                        },
                        {
                          name: "--writeConcern",
                          description:
                            "The write concern used for this blockstore",
                          args: { name: "writeConcern" },
                        },
                      ],
                    },
                    {
                      name: "update",
                      description: "Update a backup blockstore configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this blockstore can be assigned backup jobs",
                        },
                        {
                          name: "--encryptedCredentials",
                          description:
                            "Flag indicating whether the username and password were encrypted using the credentials tool",
                        },
                        {
                          name: "--label",
                          description:
                            "Array of tags to manage which backup jobs Ops Manager can assign to which blockstores",
                          args: { name: "label" },
                        },
                        {
                          name: "--loadFactor",
                          description:
                            "A positive, non-zero integer that expresses how much backup work this snapshot store should perform compared to another snapshot store",
                          args: { name: "loadFactor", default: "0" },
                        },
                        {
                          name: "--maxCapacityGB",
                          description:
                            "The maximum amount of data in GB this blockstore can store",
                          args: { name: "maxCapacityGB", default: "0" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--ssl",
                          description:
                            "Flag indicating whether this blockstore only accepts connections encrypted using TLS",
                        },
                        {
                          name: "--uri",
                          description:
                            "A comma-separated list of hosts in the <hostname:port> format that can be used to access this blockstore",
                          args: { name: "uri" },
                        },
                        {
                          name: "--writeConcern",
                          description:
                            "The write concern used for this blockstore",
                          args: { name: "writeConcern" },
                        },
                      ],
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete a backup blockstore configuration",
                      options: [
                        {
                          name: "--force",
                          description:
                            "If specified, skips asking for confirmation before proceeding with a requsted action",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: [
                    "filesystems",
                    "file-systems",
                    "fileSystem",
                    "filesystem",
                    "file-system",
                    "fileSystems",
                  ],
                  description: "Manage file system configurations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List file system configurations",
                      options: [
                        {
                          name: "--limit",
                          description: "Number of items per page",
                          args: { name: "limit", default: "100" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--page",
                          description: "Page number",
                          args: { name: "page", default: "1" },
                        },
                      ],
                    },
                    {
                      name: ["get", "describe"],
                      description: "Get a file system configuration",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                      ],
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete a file system configuration",
                      options: [
                        {
                          name: "--force",
                          description:
                            "If specified, skips asking for confirmation before proceeding with a requsted action",
                        },
                      ],
                    },
                    {
                      name: "create",
                      description: "Create a file system configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this file system store can be assigned backup jobs",
                        },
                        {
                          name: "--encryptedCredentials",
                          description:
                            "Flag indicating whether the username and password were encrypted using the credentials tool",
                        },
                        {
                          name: "--label",
                          description:
                            "Array of tags to manage which backup jobs Ops Manager can assign to which blockstores",
                          args: { name: "label" },
                        },
                        {
                          name: "--loadFactor",
                          description:
                            "A positive, non-zero integer that expresses how much backup work this snapshot store should perform compared to another snapshot store",
                          args: { name: "loadFactor", default: "0" },
                        },
                        {
                          name: "--mmapv1CompressionSetting",
                          description:
                            "The compression setting for the MMAPv1 storage engine snaphots",
                          args: { name: "mmapv1CompressionSetting" },
                          isRequired: true,
                        },
                        {
                          name: "--name",
                          description:
                            "Unique name that labels this file system store configuration",
                          args: { name: "name" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--storePath",
                          description:
                            "The location where file system-based backups are stored on the file system store host",
                          args: { name: "storePath" },
                          isRequired: true,
                        },
                        {
                          name: "--wtCompressionSetting",
                          description:
                            "The compression setting for the WiredTiger storage engine snaphots",
                          args: { name: "wtCompressionSetting" },
                          isRequired: true,
                        },
                      ],
                    },
                    {
                      name: "update",
                      description: "Update a file system configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this file system store can be assigned backup jobs",
                        },
                        {
                          name: "--encryptedCredentials",
                          description:
                            "Flag indicating whether the username and password were encrypted using the credentials tool",
                        },
                        {
                          name: "--label",
                          description:
                            "Array of tags to manage which backup jobs Ops Manager can assign to which blockstores",
                          args: { name: "label" },
                        },
                        {
                          name: "--loadFactor",
                          description:
                            "A positive, non-zero integer that expresses how much backup work this snapshot store should perform compared to another snapshot store",
                          args: { name: "loadFactor", default: "0" },
                        },
                        {
                          name: "--mmapv1CompressionSetting",
                          description:
                            "The compression setting for the MMAPv1 storage engine snaphots",
                          args: { name: "mmapv1CompressionSetting" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--storePath",
                          description:
                            "The location where file system-based backups are stored on the file system store host",
                          args: { name: "storePath" },
                          isRequired: true,
                        },
                        {
                          name: "--wtCompressionSetting",
                          description:
                            "The compression setting for the WiredTiger storage engine snaphots",
                          args: { name: "wtCompressionSetting" },
                          isRequired: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "s3",
                  description: "Manage backup s3 blockstore configurations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List backup s3 blockstore configurations",
                      options: [
                        {
                          name: "--limit",
                          description: "Number of items per page",
                          args: { name: "limit", default: "100" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--page",
                          description: "Page number",
                          args: { name: "page", default: "1" },
                        },
                      ],
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete a backup s3 blockstore configuration",
                      options: [
                        {
                          name: "--force",
                          description:
                            "If specified, skips asking for confirmation before proceeding with a requsted action",
                        },
                      ],
                    },
                    {
                      name: "create",
                      description:
                        "Create a backup S3 blockstore configuration",
                      options: [
                        {
                          name: "--acceptedTos",
                          description:
                            "Flag indicating whether or not you accepted the terms of service for using Amazon S3-compatible stores with Ops Manager",
                          isRequired: true,
                        },
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this blockstore can be assigned backup jobs",
                        },
                        {
                          name: "--awsAccessKey",
                          description:
                            "AWS Access Key ID that can access the Amazon S3 bucket specified in s3BucketName",
                          args: { name: "awsAccessKey" },
                        },
                        {
                          name: "--awsSecretKey",
                          description:
                            "AWS Secret Access Key that can access the Amazon S3 bucket specified in s3BucketName",
                          args: { name: "awsSecretKey" },
                        },
                        {
                          name: "--disableProxyS3",
                          description:
                            "Flag indicating whether the HTTP proxy should be used when connecting to Amazon S3",
                        },
                        {
                          name: "--encryptedCredentials",
                          description:
                            "Flag indicating whether the username and password were encrypted using the credentials tool",
                        },
                        {
                          name: "--label",
                          description:
                            "Array of tags to manage which backup jobs Ops Manager can assign to which blockstores",
                          args: { name: "label" },
                        },
                        {
                          name: "--loadFactor",
                          description:
                            "A positive, non-zero integer that expresses how much backup work this snapshot store should perform compared to another snapshot store",
                          args: { name: "loadFactor", default: "0" },
                        },
                        {
                          name: "--name",
                          description:
                            "Unique name that labels this blockstore",
                          args: { name: "name" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--pathStyleAccessEnabled",
                          description:
                            "Flag indicating the style of this endpoint",
                        },
                        {
                          name: "--s3AuthMethod",
                          description:
                            "Method used to authorize access to the Amazon S3 bucket specified in s3BucketName. Valid values are KEYS or IAM_ROLE",
                          args: { name: "s3AuthMethod" },
                          isRequired: true,
                        },
                        {
                          name: "--s3BucketEndpoint",
                          description:
                            "URL that Ops Manager uses to access this Amazon S3 or S3-compatible bucket",
                          args: { name: "s3BucketEndpoint" },
                          isRequired: true,
                        },
                        {
                          name: "--s3BucketName",
                          description:
                            "Name of the Amazon S3 bucket that hosts the S3 blockstore",
                          args: { name: "s3BucketName" },
                          isRequired: true,
                        },
                        {
                          name: "--s3MaxConnections",
                          description:
                            "Positive integer indicating the maximum number of connections to this Amazon S3 blockstore",
                          args: { name: "s3MaxConnections", default: "0" },
                        },
                        {
                          name: "--sseEnabled",
                          description:
                            "Flag indicating whether this Amazon S3 blockstore enables server-side encryption",
                        },
                        {
                          name: "--uri",
                          description:
                            "A comma-separated list of hosts in the <hostname:port> format that can be used to access this blockstore",
                          args: { name: "uri" },
                          isRequired: true,
                        },
                        {
                          name: "--writeConcern",
                          description:
                            "The write concern used for this blockstore",
                          args: { name: "writeConcern" },
                        },
                      ],
                    },
                    {
                      name: "update",
                      description:
                        "Update a backup S3 blockstore configuration",
                      options: [
                        {
                          name: "--acceptedTos",
                          description:
                            "Flag indicating whether or not you accepted the terms of service for using Amazon S3-compatible stores with Ops Manager",
                          isRequired: true,
                        },
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this blockstore can be assigned backup jobs",
                        },
                        {
                          name: "--awsAccessKey",
                          description:
                            "AWS Access Key ID that can access the Amazon S3 bucket specified in s3BucketName",
                          args: { name: "awsAccessKey" },
                        },
                        {
                          name: "--awsSecretKey",
                          description:
                            "AWS Secret Access Key that can access the Amazon S3 bucket specified in s3BucketName",
                          args: { name: "awsSecretKey" },
                        },
                        {
                          name: "--disableProxyS3",
                          description:
                            "Flag indicating whether the HTTP proxy should be used when connecting to Amazon S3",
                        },
                        {
                          name: "--encryptedCredentials",
                          description:
                            "Flag indicating whether the username and password were encrypted using the credentials tool",
                        },
                        {
                          name: "--label",
                          description:
                            "Array of tags to manage which backup jobs Ops Manager can assign to which blockstores",
                          args: { name: "label" },
                        },
                        {
                          name: "--loadFactor",
                          description:
                            "A positive, non-zero integer that expresses how much backup work this snapshot store should perform compared to another snapshot store",
                          args: { name: "loadFactor", default: "0" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--pathStyleAccessEnabled",
                          description:
                            "Flag indicating the style of this endpoint",
                        },
                        {
                          name: "--s3AuthMethod",
                          description:
                            "Method used to authorize access to the Amazon S3 bucket specified in s3BucketName. Valid values are KEYS or IAM_ROLE",
                          args: { name: "s3AuthMethod" },
                          isRequired: true,
                        },
                        {
                          name: "--s3BucketEndpoint",
                          description:
                            "URL that Ops Manager uses to access this Amazon S3 or S3-compatible bucket",
                          args: { name: "s3BucketEndpoint" },
                          isRequired: true,
                        },
                        {
                          name: "--s3BucketName",
                          description:
                            "Name of the Amazon S3 bucket that hosts the S3 blockstore",
                          args: { name: "s3BucketName" },
                          isRequired: true,
                        },
                        {
                          name: "--s3MaxConnections",
                          description:
                            "Positive integer indicating the maximum number of connections to this Amazon S3 blockstore",
                          args: { name: "s3MaxConnections", default: "0" },
                        },
                        {
                          name: "--sseEnabled",
                          description:
                            "Flag indicating whether this Amazon S3 blockstore enables server-side encryption",
                        },
                        {
                          name: "--uri",
                          description:
                            "A comma-separated list of hosts in the <hostname:port> format that can be used to access this blockstore",
                          args: { name: "uri" },
                          isRequired: true,
                        },
                        {
                          name: "--writeConcern",
                          description:
                            "The write concern used for this blockstore",
                          args: { name: "writeConcern" },
                        },
                      ],
                    },
                    {
                      name: ["get", "describe"],
                      description: "Get a backup s3 blockstore configuration",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "oplog",
                  description: "Manage backup oplog configurations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List backup oplog configurations",
                      options: [
                        {
                          name: "--limit",
                          description: "Number of items per page",
                          args: { name: "limit", default: "100" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--page",
                          description: "Page number",
                          args: { name: "page", default: "1" },
                        },
                      ],
                    },
                    {
                      name: ["get", "describe"],
                      description: "Get a backup oplog configuration",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                      ],
                    },
                    {
                      name: "create",
                      description: "Create a backup oplog configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this oplog can be assigned backup jobs",
                        },
                        {
                          name: "--encryptedCredentials",
                          description:
                            "Flag indicating whether the username and password were encrypted using the credentials tool",
                        },
                        {
                          name: "--label",
                          description:
                            "Array of tags to manage which backup jobs Ops Manager can assign to which blockstores",
                          args: { name: "label" },
                        },
                        {
                          name: "--maxCapacityGB",
                          description:
                            "The maximum amount of data in GB this blockstore can store",
                          args: { name: "maxCapacityGB", default: "0" },
                        },
                        {
                          name: "--name",
                          description:
                            "Unique name that labels this oplog store",
                          args: { name: "name" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--ssl",
                          description:
                            "Flag indicating whether this oplog store only accepts connections encrypted using TLS",
                        },
                        {
                          name: "--uri",
                          description:
                            "A comma-separated list of hosts in the <hostname:port> format that can be used to access this blockstore",
                          args: { name: "uri" },
                          isRequired: true,
                        },
                        {
                          name: "--writeConcern",
                          description:
                            "The write concern used for this blockstore",
                          args: { name: "writeConcern" },
                        },
                      ],
                    },
                    {
                      name: "update",
                      description: "Update a backup oplog configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this oplog can be assigned backup jobs",
                        },
                        {
                          name: "--encryptedCredentials",
                          description:
                            "Flag indicating whether the username and password were encrypted using the credentials tool",
                        },
                        {
                          name: "--label",
                          description:
                            "Array of tags to manage which backup jobs Ops Manager can assign to which blockstores",
                          args: { name: "label" },
                        },
                        {
                          name: "--maxCapacityGB",
                          description:
                            "The maximum amount of data in GB this blockstore can store",
                          args: { name: "maxCapacityGB", default: "0" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--ssl",
                          description:
                            "Flag indicating whether this oplog store only accepts connections encrypted using TLS",
                        },
                        {
                          name: "--uri",
                          description:
                            "A comma-separated list of hosts in the <hostname:port> format that can be used to access this blockstore",
                          args: { name: "uri" },
                          isRequired: true,
                        },
                        {
                          name: "--writeConcern",
                          description:
                            "The write concern used for this blockstore",
                          args: { name: "writeConcern" },
                        },
                      ],
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete a backup oplog configuration",
                      options: [
                        {
                          name: "--force",
                          description:
                            "If specified, skips asking for confirmation before proceeding with a requsted action",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "sync",
                  description: "Manage backup sync configurations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List backup sync configurations",
                      options: [
                        {
                          name: "--limit",
                          description: "Number of items per page",
                          args: { name: "limit", default: "100" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--page",
                          description: "Page number",
                          args: { name: "page", default: "1" },
                        },
                      ],
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete a backup sync configuration",
                      options: [
                        {
                          name: "--force",
                          description:
                            "If specified, skips asking for confirmation before proceeding with a requsted action",
                        },
                      ],
                    },
                    {
                      name: "create",
                      description: "Create a backup sync configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this sync store can be assigned backup jobs",
                        },
                        {
                          name: "--encryptedCredentials",
                          description:
                            "Flag indicating whether the username and password were encrypted using the credentials tool",
                        },
                        {
                          name: "--label",
                          description:
                            "Array of tags to manage which backup jobs Ops Manager can assign to which blockstores",
                          args: { name: "label" },
                        },
                        {
                          name: "--loadFactor",
                          description:
                            "A positive, non-zero integer that expresses how much backup work this snapshot store should perform compared to another snapshot store",
                          args: { name: "loadFactor", default: "0" },
                        },
                        {
                          name: "--maxCapacityGB",
                          description:
                            "The maximum amount of data in GB this blockstore can store",
                          args: { name: "maxCapacityGB", default: "0" },
                        },
                        {
                          name: "--name",
                          description:
                            "Unique name that labels this sync store",
                          args: { name: "name" },
                          isRequired: true,
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--ssl",
                          description:
                            "Flag indicating whether this blockstore only accepts connections encrypted using TLS",
                        },
                        {
                          name: "--uri",
                          description:
                            "A comma-separated list of hosts in the <hostname:port> format that can be used to access this blockstore",
                          args: { name: "uri" },
                          isRequired: true,
                        },
                        {
                          name: "--writeConcern",
                          description:
                            "The write concern used for this blockstore",
                          args: { name: "writeConcern" },
                        },
                      ],
                    },
                    {
                      name: "update",
                      description: "Update a backup sync configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this sync store can be assigned backup jobs",
                        },
                        {
                          name: "--encryptedCredentials",
                          description:
                            "Flag indicating whether the username and password were encrypted using the credentials tool",
                        },
                        {
                          name: "--label",
                          description:
                            "Array of tags to manage which backup jobs Ops Manager can assign to which blockstores",
                          args: { name: "label" },
                        },
                        {
                          name: "--loadFactor",
                          description:
                            "A positive, non-zero integer that expresses how much backup work this snapshot store should perform compared to another snapshot store",
                          args: { name: "loadFactor", default: "0" },
                        },
                        {
                          name: "--maxCapacityGB",
                          description:
                            "The maximum amount of data in GB this blockstore can store",
                          args: { name: "maxCapacityGB", default: "0" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--ssl",
                          description:
                            "Flag indicating whether this blockstore only accepts connections encrypted using TLS",
                        },
                        {
                          name: "--uri",
                          description:
                            "A comma-separated list of hosts in the <hostname:port> format that can be used to access this blockstore",
                          args: { name: "uri" },
                          isRequired: true,
                        },
                        {
                          name: "--writeConcern",
                          description:
                            "The write concern used for this blockstore",
                          args: { name: "writeConcern" },
                        },
                      ],
                    },
                    {
                      name: ["get", "describe"],
                      description: "Get a backup sync configuration",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
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
          name: [
            "softwarecomponents",
            "software-components",
            "softwareComponent",
            "softwarecomponent",
            "software-component",
            "softwareComponents",
          ],
          description:
            "Manage earliest and latest versions of MongoDB Agent, MongoDB Tools, and BI Connector in your environment",
          subcommands: [
            {
              name: ["ls", "list"],
              description:
                "List versions of MongoDB Agent, MongoDB Tools, and BI Connector in your environment",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "featurepolicies",
            "feature-policies",
            "featurePolicy",
            "featurepolicy",
            "feature-policy",
            "featurePolicies",
          ],
          description: "Manage feature control policies",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List feature control policies for your project",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
              ],
            },
            {
              name: "update",
              description: "Update feature control policies for your project",
              options: [
                {
                  name: "--name",
                  description:
                    "Identifying label for the external system that manages this Ops Manager Project",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--policy",
                  description:
                    "List of policies that the external system applies to this Ops Manager Project",
                  args: { name: "policy" },
                },
                {
                  name: "--projectId",
                  description:
                    "Project ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "projectId" },
                },
                {
                  name: "--systemId",
                  description:
                    "Unique identifier of the external system that manages this Ops Manager Project",
                  args: { name: "systemId" },
                },
              ],
            },
          ],
        },
        {
          name: ["serverusage", "server-usage", "serverUsage"],
          description: "Manage your server usage",
          subcommands: [
            {
              name: ["project", "projects"],
              description: "Manage your server usage for a project",
              subcommands: [
                {
                  name: ["servertype", "server-type", "serverType"],
                  description: "Manage your server type for a project",
                  subcommands: [
                    {
                      name: ["get", "describe"],
                      description: "Get the default server type for a project",
                      options: [
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                    {
                      name: "set",
                      description: "Set the default server type for a project",
                      options: [
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: ["host", "hosts"],
                  description: "Manage host assignment for a project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List all host assignments for one project",
                      options: [
                        {
                          name: "--endDate",
                          description:
                            "Timestamp, in ISO 8601 date format, when the list of host assignments ends",
                          args: { name: "endDate" },
                          isRequired: true,
                        },
                        {
                          name: "--limit",
                          description: "Number of items per page",
                          args: { name: "limit", default: "100" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--page",
                          description: "Page number",
                          args: { name: "page", default: "1" },
                        },
                        {
                          name: "--projectId",
                          description:
                            "Project ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "projectId" },
                        },
                        {
                          name: "--startDate",
                          description:
                            "Timestamp, in ISO 8601 date format, when the list of host assignments starts",
                          args: { name: "startDate" },
                          isRequired: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: ["organization", "organizations"],
              description: "Manage your server usage for an organization",
              subcommands: [
                {
                  name: ["servertype", "server-type", "serverType"],
                  description: "Manage your server type for an organization",
                  subcommands: [
                    {
                      name: ["get", "describe"],
                      description:
                        "Get the default server type for an organization",
                      options: [
                        {
                          name: "--orgId",
                          description:
                            "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "orgId" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                      ],
                    },
                    {
                      name: "set",
                      description:
                        "Set the default server type for an organization",
                      options: [
                        {
                          name: "--orgId",
                          description:
                            "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "orgId" },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: ["host", "hosts"],
                  description: "Manage host assignment for an organization",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List all host assignments for one organization",
                      options: [
                        {
                          name: "--endDate",
                          description:
                            "Timestamp, in ISO 8601 date format, when the list of host assignments ends",
                          args: { name: "endDate" },
                          isRequired: true,
                        },
                        {
                          name: "--limit",
                          description: "Number of items per page",
                          args: { name: "limit", default: "100" },
                        },
                        {
                          name: "--orgId",
                          description:
                            "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "orgId" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--page",
                          description: "Page number",
                          args: { name: "page", default: "1" },
                        },
                        {
                          name: "--startDate",
                          description:
                            "Timestamp, in ISO 8601 date format, when the list of host assignments starts",
                          args: { name: "startDate" },
                          isRequired: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "capture",
              description:
                "Capture a snapshot of usage for the processes Ops Manager manages",
            },
            {
              name: "download",
              description: "Download the server usage report",
              options: [
                {
                  name: "--endDate",
                  description:
                    "Timestamp, in ISO 8601 date format, when the list of host assignments ends",
                  args: { name: "endDate" },
                  isRequired: true,
                },
                {
                  name: "--force",
                  description: "Overwrites the destination file",
                },
                {
                  name: "--format",
                  description:
                    "Compression format of the resulting report. Valid values are ZIP, TAR, or .GZ",
                  args: { name: "format", default: "tar.gz" },
                },
                {
                  name: "--out",
                  description:
                    "Optional output file name. Uses the log name if the output file's name is not specified",
                  args: { name: "out" },
                },
                {
                  name: "--startDate",
                  description:
                    "Timestamp, in ISO 8601 date format, when the list of host assignments starts",
                  args: { name: "startDate" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: [
            "livemigrations",
            "live-migrations",
            "liveMigration",
            "livemigration",
            "live-migration",
            "lm",
            "liveMigrations",
          ],
          description: "Manage a Live Migration to Atlas for your organization",
          subcommands: [
            {
              name: "link",
              description: "Manage the link-token for your organization",
              subcommands: [
                {
                  name: "create",
                  description: "Create one new organization link",
                  options: [
                    {
                      name: "--linkToken",
                      description: "Link-token generated by Atlas",
                      args: { name: "linkToken" },
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete one link-token",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Return the status of the connection between the specified source organization and the target MongoDB Atlas organization",
                  options: [
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
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
      name: "iam",
      description: "Organization and projects operations",
      subcommands: [
        {
          name: ["project", "projects"],
          description: "Project operations",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List projects",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: "--orgId",
                  description:
                    "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "orgId" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
              ],
            },
            {
              name: "create",
              description: "Create a project",
              options: [
                {
                  name: "--govCloudRegionsOnly",
                  description:
                    "Only for AtlasGov projects. If specified, designates that the project uses only the AWS GovCloud region. If unspecified, the project uses only the AWS Standard region. You can't deploy clusters across AWS GovCloud and AWS Standard regions in the same project",
                },
                {
                  name: "--orgId",
                  description:
                    "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "orgId" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--ownerId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the Atlas user account to be granted the Project Owner role on the specified project",
                  args: { name: "ownerId" },
                },
                {
                  name: "--withoutDefaultAlertSettings",
                  description:
                    "Flag that indicates whether to create the new project with the default alert settings enabled. This flag defaults to false. In this case, Atlas creates the project without the default alert settings. This is useful if you create projects programmatically and want to create your own alerts instead of using the default alert settings. To create a project that uses the default alert settings, set this flag to true",
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete a project",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
              ],
            },
            {
              name: ["show", "get", "describe"],
              description: "Describe a project",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
              ],
            },
            {
              name: [
                "apikeys",
                "api-keys",
                "apiKey",
                "apikey",
                "api-key",
                "apiKeys",
              ],
              description: "Manage API Keys for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List API Keys for your project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "create",
                  description: "Create an API Key for your project",
                  options: [
                    {
                      name: "--desc",
                      description: "Description of the API key",
                      args: { name: "desc" },
                      isRequired: true,
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--role",
                      description: "List of roles for the API key",
                      args: { name: "role" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete an API Key for your project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["update", "assign"],
                  description: "Assign an API Key to a project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--role",
                      description: "List of roles for the API key",
                      args: { name: "role" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
            {
              name: ["user", "users"],
              description: "Manage users for a project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List all users for a project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete user from a project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["team", "teams"],
              description: "Teams operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "Get all teams in a project",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: "add",
                  description: "Add team to a project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--role",
                      description:
                        "Project role you want to assign to the team",
                      args: { name: "role" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete team from a project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["updates", "update"],
                  description: "Update roles for a team in a project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--role",
                      description:
                        "Project role you want to assign to the team",
                      args: { name: "role" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
            {
              name: ["invitation", "invitations"],
              description: "Invitation operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Retrieves all pending invitations to the specified project",
                  options: [
                    {
                      name: "--email",
                      description: "User's email address",
                      args: { name: "email" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Retrieve details for one pending invitation to the specified project",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description:
                    "Deletes one pending invitation to the specified project",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                  ],
                },
                {
                  name: ["create", "invite"],
                  description:
                    "Invites one user to the project that you specify",
                  options: [
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--role",
                      description:
                        "User's roles  for the associated organization",
                      args: { name: "role" },
                      isRequired: true,
                    },
                    {
                      name: "--teamId",
                      description: "Unique identification of the team",
                      args: { name: "teamId" },
                    },
                  ],
                },
                {
                  name: ["updates", "update"],
                  description:
                    "Updates one pending invitation by invitationId or email to the project that you specify",
                  options: [
                    {
                      name: "--email",
                      description: "User's email address",
                      args: { name: "email" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--projectId",
                      description:
                        "Project ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "projectId" },
                    },
                    {
                      name: "--role",
                      description:
                        "User's roles  for the associated organization",
                      args: { name: "role" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["organization", "orgs", "org", "organizations"],
          description: "Organization operations",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List organizations",
              options: [
                {
                  name: "--includeDeleted",
                  description:
                    "If specified, Atlas includes the deleted organizations",
                },
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: "--name",
                  description:
                    "Performs a case-insensitive search for organizations which exactly match the specified name",
                  args: { name: "name" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
              ],
            },
            {
              name: ["show", "describe"],
              description: "Describe an organizations",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
              ],
            },
            {
              name: "create",
              description: "Create an organization",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete an organization",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
              ],
            },
            {
              name: [
                "apikeys",
                "api-keys",
                "apiKey",
                "apikey",
                "api-key",
                "apiKeys",
              ],
              description: "Organization API Keys operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List API Keys for your organization",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                  ],
                },
                {
                  name: ["show", "describe"],
                  description: "Get a specific Organization API Key",
                  options: [
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                  ],
                },
                {
                  name: ["updates", "assign"],
                  description: "Update an Organization API Key",
                  options: [
                    {
                      name: "--desc",
                      description: "Description of the API key",
                      args: { name: "desc" },
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--role",
                      description: "List of roles for the API key",
                      args: { name: "role" },
                    },
                  ],
                },
                {
                  name: "create",
                  description: "Create an Organization API Key",
                  options: [
                    {
                      name: "--desc",
                      description: "Description of the API key",
                      args: { name: "desc" },
                      isRequired: true,
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--role",
                      description: "List of roles for the API key",
                      args: { name: "role" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete an Organization API Key",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                  ],
                },
                {
                  name: [
                    "accesslists",
                    "access-lists",
                    "accessList",
                    "accesslist",
                    "access-list",
                    "whitelists",
                    "whitelist",
                    "accessLists",
                  ],
                  description: "Manage the IP access list for your API Key",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List IP access list entries for your API Key",
                      options: [
                        {
                          name: "--limit",
                          description: "Number of items per page",
                          args: { name: "limit", default: "100" },
                        },
                        {
                          name: "--orgId",
                          description:
                            "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "orgId" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                        {
                          name: "--page",
                          description: "Page number",
                          args: { name: "page", default: "1" },
                        },
                      ],
                    },
                    {
                      name: "create",
                      description: "Create an IP access list for your API Key",
                      options: [
                        {
                          name: "--apiKey",
                          description: "API Key",
                          args: { name: "apiKey" },
                          isRequired: true,
                        },
                        {
                          name: "--cidr",
                          description:
                            "Whitelist entry in CIDR notation to be added for a given API key",
                          args: { name: "cidr" },
                        },
                        {
                          name: "--ip",
                          description:
                            "IP address to be allowed for a given API key",
                          args: { name: "ip" },
                        },
                        {
                          name: "--orgId",
                          description:
                            "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "orgId" },
                        },
                        {
                          name: ["--output", "-o"],
                          description:
                            "Output format. Valid values are json, json-path, go-template, or go-template-file",
                          args: { name: "output" },
                        },
                      ],
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete an IP access list from your API Key",
                      options: [
                        {
                          name: "--apiKey",
                          description: "API Key",
                          args: { name: "apiKey" },
                        },
                        {
                          name: "--force",
                          description:
                            "If specified, skips asking for confirmation before proceeding with a requsted action",
                        },
                        {
                          name: "--orgId",
                          description:
                            "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                          args: { name: "orgId" },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: ["user", "users"],
              description: "Users operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List users in a organization",
                  options: [
                    {
                      name: "--limit",
                      description: "Number of items per page",
                      args: { name: "limit", default: "100" },
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--page",
                      description: "Page number",
                      args: { name: "page", default: "1" },
                    },
                  ],
                },
              ],
            },
            {
              name: ["invitation", "invitations"],
              description: "Invitation operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Retrieves all pending invitations to the specified organization",
                  options: [
                    {
                      name: "--email",
                      description: "User's email address",
                      args: { name: "email" },
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Retrieve details for one pending invitation to the specified organization",
                  options: [
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description:
                    "Deletes one pending invitation to the specified organization",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                  ],
                },
                {
                  name: ["updates", "update"],
                  description:
                    "Updates one pending invitation by invitationId or email to the project that you specify",
                  options: [
                    {
                      name: "--email",
                      description: "User's email address",
                      args: { name: "email" },
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--role",
                      description:
                        "User's roles  for the associated organization",
                      args: { name: "role" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: ["create", "invite"],
                  description:
                    "Invites one user to the organization that you specify",
                  options: [
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--role",
                      description:
                        "User's roles  for the associated organization",
                      args: { name: "role" },
                      isRequired: true,
                    },
                    {
                      name: "--teamId",
                      description: "Unique identification of the team",
                      args: { name: "teamId" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: [
            "globalapikeys",
            "global-api-keys",
            "globalApiKey",
            "globalapikey",
            "global-api-key",
            "globalApiKeys",
          ],
          description: "Global API Keys operations",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List Global API Keys",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
              ],
            },
            {
              name: ["show", "describe"],
              description: "Get a specific Global API Key",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
              ],
            },
            {
              name: "create",
              description: "Create a Global API Key",
              options: [
                {
                  name: "--desc",
                  description: "Description of the API key",
                  args: { name: "desc" },
                  isRequired: true,
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--role",
                  description: "List of roles for the API key",
                  args: { name: "role" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update a Global API Key",
              options: [
                {
                  name: "--desc",
                  description: "Description of the API key",
                  args: { name: "desc" },
                  isRequired: true,
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--role",
                  description: "List of roles for the API key",
                  args: { name: "role" },
                  isRequired: true,
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete a Global API Key",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
              ],
            },
          ],
        },
        {
          name: [
            "globalaccesslists",
            "global-access-lists",
            "globalAccessList",
            "globalaccesslist",
            "global-access-list",
            "globalWhitelists",
            "globalwhitelists",
            "global-whitelists",
            "globalWhitelist",
            "globalwhitelist",
            "global-whitelist",
            "globalAccessLists",
          ],
          description: "Manage IP access list for Global API Key",
          subcommands: [
            {
              name: ["ls", "list"],
              description:
                "List Atlas IP access list entries for Global API Key",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
              ],
            },
            {
              name: ["show", "describe"],
              description: "Return one Global IP access list entry",
              options: [
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
              ],
            },
            {
              name: "create",
              description: "Create an IP access list for Global API Key",
              options: [
                {
                  name: "--cidr",
                  description:
                    "Whitelist entry in CIDR notation to be added for a given API key",
                  args: { name: "cidr" },
                  isRequired: true,
                },
                {
                  name: "--desc",
                  description: "IP address to be allowed for a given API key",
                  args: { name: "desc" },
                  isRequired: true,
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete an IP access list from Global API Key",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
              ],
            },
          ],
        },
        {
          name: ["user", "users"],
          description: "Users operations",
          subcommands: [
            {
              name: "invite",
              description: "Invite a user",
              options: [
                {
                  name: "--country",
                  description:
                    "The ISO 3166-1 alpha two-letter country code of the user's country of residence",
                  args: { name: "country" },
                },
                {
                  name: "--email",
                  description: "User's email address",
                  args: { name: "email" },
                  isRequired: true,
                },
                {
                  name: "--firstName",
                  description: "User's first name",
                  args: { name: "firstName" },
                  isRequired: true,
                },
                {
                  name: "--lastName",
                  description: "User's last name",
                  args: { name: "lastName" },
                  isRequired: true,
                },
                {
                  name: "--mobile",
                  description: "The user's mobile or cell phone number",
                  args: { name: "mobile" },
                },
                {
                  name: "--orgRole",
                  description: "User's roles  for the associated organization",
                  args: { name: "orgRole" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--password",
                  description: "User's password",
                  args: { name: "password" },
                },
                {
                  name: "--projectRole",
                  description: "User's roles  for the associated project",
                  args: { name: "projectRole" },
                },
                {
                  name: "--username",
                  description: "Username of the user",
                  args: { name: "username" },
                  isRequired: true,
                },
              ],
            },
            {
              name: ["get", "describe"],
              description: "Get a user by username or id",
              options: [
                {
                  name: "--id",
                  description: "Unique identifier of the user",
                  args: { name: "id" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--username",
                  description: "Username of the user",
                  args: { name: "username" },
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete an Ops Manager user",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
              ],
            },
          ],
        },
        {
          name: ["team", "teams"],
          description: "Teams operations",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "Get all teams in an organization",
              options: [
                {
                  name: "--limit",
                  description: "Number of items per page",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: "--orgId",
                  description:
                    "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "orgId" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--page",
                  description: "Page number",
                  args: { name: "page", default: "1" },
                },
              ],
            },
            {
              name: ["get", "describe"],
              description: "Get a team in an organization",
              options: [
                {
                  name: "--id",
                  description: "Unique identification of the team",
                  args: { name: "id" },
                },
                {
                  name: "--name",
                  description: "Name of the team",
                  args: { name: "name" },
                },
                {
                  name: "--orgId",
                  description:
                    "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "orgId" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
              ],
            },
            {
              name: "create",
              description: "Create a team in an organization",
              options: [
                {
                  name: "--orgId",
                  description:
                    "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "orgId" },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format. Valid values are json, json-path, go-template, or go-template-file",
                  args: { name: "output" },
                },
                {
                  name: "--username",
                  description: "List of usernames to add to the new team",
                  args: { name: "username" },
                  isRequired: true,
                },
              ],
            },
            {
              name: ["user", "users"],
              description: "Users operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List users of a team",
                  options: [
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--teamId",
                      description: "Unique identification of the team",
                      args: { name: "teamId" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "add",
                  description: "Add a user to a team",
                  options: [
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: ["--output", "-o"],
                      description:
                        "Output format. Valid values are json, json-path, go-template, or go-template-file",
                      args: { name: "output" },
                    },
                    {
                      name: "--teamId",
                      description: "Unique identification of the team",
                      args: { name: "teamId" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete user from a team",
                  options: [
                    {
                      name: "--force",
                      description:
                        "If specified, skips asking for confirmation before proceeding with a requsted action",
                    },
                    {
                      name: "--orgId",
                      description:
                        "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                      args: { name: "orgId" },
                    },
                    {
                      name: "--teamId",
                      description: "Unique identification of the team",
                      args: { name: "teamId" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
            {
              name: ["rm", "delete"],
              description: "Delete a team from an organization",
              options: [
                {
                  name: "--force",
                  description:
                    "If specified, skips asking for confirmation before proceeding with a requsted action",
                },
                {
                  name: "--orgId",
                  description:
                    "Organization ID to use. Overrides the settings in the configuration file or environment variable",
                  args: { name: "orgId" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Manage the CLI's authentication state",
      subcommands: [
        {
          name: "login",
          description: "Authenticate with MongoDB Atlas",
          options: [
            { name: "--cm", description: "Log in to Cloud Manager" },
            { name: "--gov", description: "Log in to Atlas for Government" },
            {
              name: "--loginOnly",
              description: "Skip profile configuration",
              hidden: true,
            },
            {
              name: "--noBrowser",
              description: "Don't try to open a browser session",
            },
          ],
        },
        {
          name: "whoami",
          description:
            "Verifies and displays information about your authentication state",
        },
        {
          name: "logout",
          description: "Log out of the CLI",
          options: [
            {
              name: "--force",
              description:
                "If specified, skips asking for confirmation before proceeding with a requsted action",
            },
          ],
        },
      ],
    },
    {
      name: "login",
      description: "Authenticate with MongoDB Atlas",
      hidden: true,
      options: [
        { name: "--cm", description: "Log in to Cloud Manager" },
        { name: "--gov", description: "Log in to Atlas for Government" },
        {
          name: "--loginOnly",
          description: "Skip profile configuration",
          hidden: true,
        },
        {
          name: "--noBrowser",
          description: "Don't try to open a browser session",
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of the CLI",
      hidden: true,
      options: [
        {
          name: "--force",
          description:
            "If specified, skips asking for confirmation before proceeding with a requsted action",
        },
      ],
    },
    {
      name: "whoami",
      description:
        "Verifies and displays information about your authentication state",
      hidden: true,
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "config",
          description:
            "Configure a profile to store access settings for your MongoDB deployment",
          subcommands: [
            {
              name: "set",
              description: "Configure specific properties of a profile",
            },
            { name: ["ls", "list"], description: "List available profiles" },
            {
              name: ["get", "describe"],
              description: "Return a specific profile",
            },
            { name: ["mv", "rename"], description: "Rename a profile" },
            { name: ["rm", "delete"], description: "Delete a profile" },
          ],
        },
        {
          name: "atlas",
          description: "MongoDB Atlas operations",
          subcommands: [
            {
              name: "quickstart",
              description: "Create and access an Atlas Cluster",
            },
            {
              name: ["cluster", "clusters"],
              description: "Manage clusters for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List clusters for your project",
                },
                {
                  name: ["get", "describe"],
                  description: "Describe a cluster",
                },
                {
                  name: "create",
                  description: "Create one cluster in the specified project",
                },
                {
                  name: "watch",
                  description: "Watch for a cluster to be available",
                },
                { name: "update", description: "Update a MongoDB cluster" },
                {
                  name: "pause",
                  description: "Pause a running MongoDB cluster in Atlas",
                },
                {
                  name: "start",
                  description: "Start a paused MongoDB cluster in Atlas",
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a cluster from your project",
                },
                {
                  name: "loadSampleData",
                  description:
                    "Load sample data into a MongoDB cluster in Atlas",
                },
                {
                  name: ["index", "indexes"],
                  description:
                    "Manage cluster rolling indexes for your project",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create a rolling index for your MongoDB cluster",
                    },
                  ],
                },
                {
                  name: ["fts", "search"],
                  description: "Manage Atlas Search for your cluster",
                  subcommands: [
                    {
                      name: ["index", "indexes"],
                      description:
                        "Manage Atlas Search indexes for your cluster",
                      subcommands: [
                        {
                          name: ["ls", "list"],
                          description:
                            "List Atlas search indexes for a cluster",
                        },
                        {
                          name: "create",
                          description: "Create a search index for a cluster",
                        },
                        {
                          name: "describe",
                          description: "Describe a search index for a cluster",
                        },
                        {
                          name: "update",
                          description: "Update a search index for a cluster",
                        },
                        {
                          name: ["rm", "delete"],
                          description: "Delete a search index from a cluster",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: [
                    "onlinearchives",
                    "online-archives",
                    "onlineArchive",
                    "onlinearchive",
                    "online-archive",
                    "onlineArchives",
                  ],
                  description: "Manage online archives for your cluster",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List online archives for a cluster",
                    },
                    {
                      name: "describe",
                      description: "Describe an online archive for a cluster",
                    },
                    {
                      name: "create",
                      description: "Create an online archive for a cluster",
                    },
                    {
                      name: "update",
                      description: "Update an online archive for a cluster",
                    },
                    {
                      name: "start",
                      description:
                        "Start a paused online archive from a cluster",
                    },
                    {
                      name: "pause",
                      description: "Pause an online archive from a cluster",
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete an online archive from a cluster",
                    },
                    {
                      name: "watch",
                      description: "Watch for an archive to be available",
                    },
                  ],
                },
                {
                  name: [
                    "connectionstrings",
                    "connection-strings",
                    "connectionString",
                    "connectionstring",
                    "connection-string",
                    "cs",
                    "connectionStrings",
                  ],
                  description: "Manage MongoDB cluster connection string",
                  subcommands: [
                    {
                      name: ["get", "describe"],
                      description:
                        "Retrieve the SRV connection string of your MongoDB cluster",
                    },
                  ],
                },
                {
                  name: [
                    "availableregions",
                    "available-regions",
                    "availableRegion",
                    "availableregion",
                    "available-region",
                    "availableRegions",
                  ],
                  description: "Manage available regions for your project",
                  hidden: true,
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List available regions for your project",
                    },
                  ],
                },
              ],
            },
            {
              name: ["dbuser", "dbusers"],
              description: "Manage database users for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List Atlas database users for your project",
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Return a single Atlas database user for your project",
                },
                {
                  name: "create",
                  description: "Create a database user for your project",
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a database user for your project",
                },
                {
                  name: "update",
                  description: "Update a database user for your project",
                },
                {
                  name: ["cert", "certs"],
                  description:
                    "Manage Atlas x509 certificates for your database users",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List of all Atlas-managed, unexpired certificates for a database user",
                    },
                    {
                      name: "create",
                      description:
                        "Create a new Atlas-managed X.509 certificate for the specified database user",
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "customdbroles",
                "custom-db-roles",
                "customDbRole",
                "customdbrole",
                "custom-db-role",
                "customDBRoles",
                "customDbRoles",
              ],
              description: "Manage custom database roles for your project",
              subcommands: [
                {
                  name: "create",
                  description: "Create a custom database role for your project",
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Return a single custom database role for your project",
                },
                {
                  name: ["ls", "list"],
                  description: "List custom database roles for your project",
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a custom database role for your project",
                },
                {
                  name: "update",
                  description: "Update a custom database role for your project",
                },
              ],
            },
            {
              name: [
                "accesslists",
                "access-lists",
                "accessList",
                "accesslist",
                "access-list",
                "whitelists",
                "whitelist",
                "accessLists",
              ],
              description: "Manage the access IP access list for your project",
              subcommands: [
                {
                  name: ["get", "describe"],
                  description: "Describe an IP access list entry",
                },
                {
                  name: ["ls", "list"],
                  description:
                    "List Atlas IP access list entries for your project",
                },
                {
                  name: "create",
                  description: "Create an IP access list for your project",
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete an IP access list from your project",
                },
              ],
            },
            {
              name: [
                "datalakes",
                "data-lakes",
                "dataLake",
                "datalake",
                "data-lake",
                "dataLakes",
              ],
              description: "Manage Atlas Data Lakes for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List Atlas Data Lakes for your project",
                },
                {
                  name: "describe",
                  description: "Return a specific data lake",
                },
                {
                  name: "create",
                  description: "Create a new data lake for your project",
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a data lake from your project",
                },
                {
                  name: "update",
                  description: "Update a data lake for your project",
                },
              ],
            },
            {
              name: ["alert", "alerts"],
              description: "Manage alerts for your project",
              subcommands: [
                {
                  name: ["config", "settings"],
                  description: "Manages alerts configuration for your project",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Creates one alert configuration in the specified project",
                    },
                    {
                      name: ["ls", "list"],
                      description:
                        "Returns alert configurations for the specified project",
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Deletes the specified alert configuration in a specified project",
                    },
                    {
                      name: ["field", "fields"],
                      description:
                        "Manages alert configuration fields for your project",
                      subcommands: [
                        {
                          name: ["types", "type"],
                          description:
                            "Lists available field types for your alert configurations",
                        },
                      ],
                    },
                    {
                      name: "update",
                      description:
                        "Updates one alert configuration in the specified project",
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description: "Retrieves one alert for the specified project",
                },
                {
                  name: ["ls", "list"],
                  description:
                    "Retrieves all alerts for the specified Atlas project",
                },
                {
                  name: ["ack", "acknowledge"],
                  description:
                    "Acknowledges one alert for the specified project",
                },
                {
                  name: ["unack", "unacknowledge"],
                  description:
                    "Unacknowledges one alert for the specified project",
                },
                {
                  name: "global",
                  description:
                    "Retrieves all the global alerts for the specified Ops Manager project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Returns all global alerts for the specified Ops Manager project",
                    },
                  ],
                },
              ],
            },
            {
              name: ["backup", "backups"],
              description: "Manage cloud backups for your project",
              subcommands: [
                {
                  name: ["snapshot", "snapshots"],
                  description: "Manage cloud backup snapshots for your project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List cloud backup snapshots for your project and cluster",
                    },
                    {
                      name: ["take", "create"],
                      description:
                        "Create a backup snapshot for your project and cluster",
                    },
                    {
                      name: "describe",
                      description: "Get a specific snapshot for your project",
                    },
                    {
                      name: "watch",
                      description: "Watch for a snapshot to be available",
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete a backup snapshot",
                    },
                  ],
                },
                {
                  name: ["restore", "restores"],
                  description:
                    "Manage cloud backup restore jobs for your project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List cloud backup restore jobs for your project and cluster",
                    },
                    {
                      name: "start",
                      description:
                        "Start a restore job for your project and cluster",
                    },
                  ],
                },
              ],
            },
            {
              name: ["event", "events"],
              description: "Manage events for your organization or project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Return all events for an organization or project",
                },
                {
                  name: ["organization", "orgs", "org", "organizations"],
                  description: "Organization operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "Return all events for an organization",
                    },
                  ],
                },
                {
                  name: ["project", "projects"],
                  description: "Project operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "Return all events for a project",
                    },
                  ],
                },
              ],
            },
            {
              name: ["metric", "measurements", "measurement", "metrics"],
              description: "Get metrics on the MongoDB process",
              subcommands: [
                {
                  name: ["process", "processes"],
                  description: "Get MongoDB process metrics for a given host",
                },
                {
                  name: ["disk", "disks"],
                  description:
                    "List available disks or disk metrics for a given host",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List available disks or disk partitions for a given host",
                    },
                    {
                      name: "describe",
                      description:
                        "Describe disk partition metrics for a disk partition on a specified host",
                    },
                  ],
                },
                {
                  name: ["database", "databases"],
                  description:
                    "List available databases or database metrics for a given host",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List available databases or database metrics for a given host",
                    },
                    {
                      name: "describe",
                      description:
                        "Describe database metrics for a database on a specific host",
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "performanceadvisor",
                "performance-advisor",
                "performanceAdvisor",
              ],
              description: "Performance Advisor operations",
              subcommands: [
                {
                  name: ["namespace", "namespaces"],
                  description:
                    "Retrieve namespaces for collections experiencing slow queries",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Retrieve up to 20 namespaces for collections experiencing slow queries for a specified host",
                    },
                  ],
                },
                {
                  name: [
                    "slowquerylogs",
                    "slow-query-logs",
                    "slowQueryLog",
                    "slowquerylog",
                    "slow-query-log",
                    "slowQueryLogs",
                  ],
                  description:
                    "Get log lines for slow queries for a specified host",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Return log lines for slow queries that the Performance Advisor and Query Profiler identified",
                    },
                  ],
                },
                {
                  name: [
                    "suggestedindexes",
                    "suggested-indexes",
                    "suggestedIndex",
                    "suggestedindex",
                    "suggested-index",
                    "suggestedIndexes",
                  ],
                  description:
                    "Get suggested indexes for collections experiencing slow queries",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Retrieve suggested indexes for collections experiencing slow queries",
                    },
                  ],
                },
                {
                  name: ["slowOT", "sot", "slowMS", "slowOperationThreshold"],
                  description:
                    "Enable or disable management of the slow operation threshold for your cluster",
                  subcommands: [
                    {
                      name: ["ls", "enable"],
                      description:
                        "Enable the application-managed slow operation threshold for your project",
                    },
                    {
                      name: "disable",
                      description:
                        "Disable the application-managed slow operation threshold for your project",
                    },
                  ],
                },
              ],
            },
            {
              name: ["log", "logs"],
              description: "Download host logs for your project",
              subcommands: [
                {
                  name: "download",
                  description: "Download a host mongodb logs",
                },
              ],
            },
            {
              name: ["process", "processes"],
              description: "Manage MongoDB processes for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List MongoDB processes for your project",
                },
              ],
            },
            {
              name: [
                "privateendpoints",
                "private-endpoints",
                "privateEndpoint",
                "privateendpoint",
                "private-endpoint",
                "privateEndpoints",
              ],
              description: "Manage Atlas private endpoints",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List Atlas Private Endpoints for your project",
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Return a specific Private Endpoints for your project",
                },
                {
                  name: "create",
                  description: "Create a new private endpoint for your project",
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a private endpoint from your project",
                },
                {
                  name: "watch",
                  description: "Watch for a private endpoint to be available",
                },
                {
                  name: ["interface", "interfaces"],
                  description: "Manage Atlas private endpoint interfaces",
                  subcommands: [
                    {
                      name: ["add", "create"],
                      description: "Add a new interface to a private endpoint",
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Return a specific private endpoint interface for your project",
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete a private endpoint interface from your project",
                    },
                  ],
                },
                {
                  name: "aws",
                  description: "Manage AWS Private Endpoints",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List AWS Private Endpoints for your project",
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Return a specific AWS Private Endpoints for your project",
                    },
                    {
                      name: "create",
                      description:
                        "Create a new AWS Private Endpoint for your project",
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete a specific AWS Private Endpoint for your project",
                    },
                    {
                      name: "watch",
                      description:
                        "Watch for a specific AWS Private Endpoint to be available",
                    },
                    {
                      name: ["interface", "interfaces"],
                      description:
                        "Manage Atlas AWS private endpoint interfaces",
                      subcommands: [
                        {
                          name: ["add", "create"],
                          description:
                            "Add a new interface to a AWS private endpoint",
                        },
                        {
                          name: ["get", "describe"],
                          description:
                            "Return a specific AWS private endpoint interface for your project",
                        },
                        {
                          name: ["rm", "delete"],
                          description:
                            "Delete a specific AWS private endpoint interface and the related endpoint service for your project",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "azure",
                  description: "Manage Azure Private Endpoints",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List Azure Private Endpoints for your project",
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Return a specific Azure Private Endpoints for your project",
                    },
                    {
                      name: "create",
                      description:
                        "Create a new Azure Private Endpoint for your project",
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete a specific Azure Private Endpoint for your project",
                    },
                    {
                      name: "watch",
                      description:
                        "Watch for a specific Azure Private Endpoint to be available",
                    },
                    {
                      name: ["interface", "interfaces"],
                      description:
                        "Manage Atlas Azure private endpoint interfaces",
                      subcommands: [
                        {
                          name: ["add", "create"],
                          description:
                            "Add a new Azure interface to a private endpoint",
                        },
                        {
                          name: ["get", "describe"],
                          description:
                            "Return a specific Azure private endpoint interface for your project",
                        },
                        {
                          name: ["rm", "delete"],
                          description:
                            "Delete a specific Azure private endpoint interface and related service for your project",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "gcp",
                  description: "Manage GCP private endpoints",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create a new GCP private endpoint for your project",
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete a GCP private endpoint for your project",
                    },
                    {
                      name: ["ls", "list"],
                      description:
                        "List GCP private endpoints for your project",
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Return a specific GCP private endpoint for your project",
                    },
                    {
                      name: "watch",
                      description:
                        "Watch the specified GCP private endpoint to detect changes in the endpoint's state",
                    },
                    {
                      name: ["interface", "interfaces"],
                      description:
                        "Manage Atlas GCP private endpoint interfaces",
                      subcommands: [
                        {
                          name: ["get", "describe"],
                          description:
                            "Return a specific GCP private endpoint interface for your project",
                        },
                        {
                          name: ["rm", "delete"],
                          description:
                            "Delete a specific GCP private endpoint interface for your project",
                        },
                        {
                          name: ["add", "create"],
                          description:
                            "Create a GCP private endpoint interface",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: [
                    "regionalmodes",
                    "regional-modes",
                    "regionalMode",
                    "regionalmode",
                    "regional-mode",
                    "regionalModes",
                  ],
                  description:
                    "Manage regionalized private endpoint setting for your Atlas project",
                  subcommands: [
                    {
                      name: "enable",
                      description:
                        "Enable the regionalized private endpoint setting for your Atlas project",
                    },
                    {
                      name: "disable",
                      description:
                        "Disable the regionalized private endpoint setting for your Atlas project",
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Get the regionalized private endpoint setting for your Atlas project",
                    },
                  ],
                },
                {
                  name: [
                    "datalakes",
                    "data-lakes",
                    "dataLake",
                    "datalake",
                    "data-lake",
                    "dataLakes",
                  ],
                  description: "Manage Data Lake private endpoints",
                  subcommands: [
                    {
                      name: "aws",
                      description: "Manage AWS private endpoints",
                      subcommands: [
                        {
                          name: "create",
                          description:
                            "Create a new Data Lake private endpoint for your project",
                        },
                        {
                          name: ["ls", "list"],
                          description:
                            "List Data Lake private endpoints for your project",
                        },
                        {
                          name: ["get", "describe"],
                          description:
                            "Return a specific Data Lake private endpoint for your project",
                        },
                        {
                          name: ["rm", "delete"],
                          description:
                            "Delete a specific Data Lake private endpoint for your project",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: ["onlinearchive", "online-archive", "onlineArchive"],
                  description: "Manage Online Archive private endpoints",
                  subcommands: [
                    {
                      name: "aws",
                      description: "Manage AWS private endpoints",
                      subcommands: [
                        {
                          name: "create",
                          description:
                            "Create a new Data Lake private endpoint for your project",
                        },
                        {
                          name: ["ls", "list"],
                          description:
                            "List Data Lake private endpoints for your project",
                        },
                        {
                          name: ["get", "describe"],
                          description:
                            "Return a specific Data Lake private endpoint for your project",
                        },
                        {
                          name: ["rm", "delete"],
                          description:
                            "Delete a specific Data Lake private endpoint for your project",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "networking",
              description: "Networking operations",
              subcommands: [
                {
                  name: ["container", "containers"],
                  description: "Manage Network Peering containers",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List network peering containers in an Atlas project",
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Remove one network peering container in an Atlas project",
                    },
                  ],
                },
                {
                  name: "peering",
                  description: "Manage Network Peering connections",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Retrieve details for all network peering connections in one Atlas project",
                    },
                    {
                      name: "create",
                      description:
                        "Create a connection with AWS, Azure and Google Cloud",
                      subcommands: [
                        {
                          name: "azure",
                          description: "Create a connection with Azure",
                        },
                        {
                          name: "aws",
                          description: "Create a connection with AWS",
                        },
                        {
                          name: "gcp",
                          description: "Create a connection with GCP",
                        },
                      ],
                    },
                    {
                      name: "watch",
                      description:
                        "Watch for a peering connection to be available",
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete a peering connection from an Atlas project",
                    },
                  ],
                },
              ],
            },
            {
              name: "security",
              description: "Manage security configuration for your project",
              subcommands: [
                {
                  name: [
                    "customercerts",
                    "customer-certs",
                    "customerCert",
                    "customercert",
                    "customer-cert",
                    "certs",
                    "customerCerts",
                  ],
                  description:
                    "Manage customer x509 certificates for your project",
                  subcommands: [
                    {
                      name: "describe",
                      description:
                        "Get the current customer-managed X.509 configuration details for an Atlas project",
                    },
                    {
                      name: "create",
                      description:
                        "Saves a customer-managed X.509 configuration for an Atlas project",
                    },
                    {
                      name: "disable",
                      description:
                        "Disables customer-managed X.509 for a project",
                    },
                  ],
                },
                {
                  name: "ldap",
                  description: "LDAP operations",
                  subcommands: [
                    {
                      name: "verify",
                      description:
                        "Request verification of an LDAP configuration",
                      subcommands: [
                        {
                          name: "status",
                          description:
                            "Get the status of an LDAP configuration request",
                          subcommands: [
                            {
                              name: "watch",
                              description:
                                "Watch for an LDAP configuration request to complete",
                            },
                          ],
                        },
                      ],
                    },
                    { name: "save", description: "Save an LDAP configuration" },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete an LDAP configuration userToDNMapping from an LDAP configuration",
                    },
                    { name: "get", description: "Get an LDAP configuration" },
                  ],
                },
              ],
            },
            {
              name: ["integration", "integrations"],
              description: "Third party integration operations",
              subcommands: [
                {
                  name: ["update", "create"],
                  description: "Create operations",
                  subcommands: [
                    {
                      name: ["new_relic", "newRelic", "NEW_RELIC"],
                      description: "Create or update the New Relic integration",
                    },
                    {
                      name: ["ops_genie", "opsGenie", "OPS_GENIE"],
                      description: "Create or update the Ops Genie integration",
                    },
                    {
                      name: ["pager_duty", "pagerDuty", "PAGER_DUTY"],
                      description: "Create or update the PagerDuty integration",
                    },
                    {
                      name: ["datadog", "DATADOG"],
                      description: "Create or update the Datadog integration",
                    },
                    {
                      name: ["victor_ops", "victorOps", "VICTOR_OPS"],
                      description:
                        "Create or update the VictorOps integrations",
                    },
                    {
                      name: ["flowdock", "FLOWDOCK"],
                      description: "Create or update the Flowdock integration",
                    },
                    {
                      name: ["webhook", "WEBHOOK"],
                      description: "Create or update the Webhook integration",
                    },
                  ],
                },
                {
                  name: ["ls", "list"],
                  description: "List third party integrations",
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a third party integration",
                },
                {
                  name: "describe",
                  description: "Get a third party integration",
                },
              ],
            },
            {
              name: [
                "maintenancewindows",
                "maintenance-windows",
                "maintenanceWindow",
                "maintenancewindow",
                "maintenance-window",
                "maintenanceWindows",
              ],
              description: "Manage Atlas maintenance windows",
              subcommands: [
                {
                  name: "update",
                  description: "Update the maintenance window",
                },
                {
                  name: ["rm", "delete", "clear"],
                  description: "Clear the maintenance window",
                },
                { name: "defer", description: "Defer the maintenance window" },
                {
                  name: ["get", "describe"],
                  description: "Get a maintenance window",
                },
              ],
            },
            {
              name: [
                "customdns",
                "custom-dns",
                "customDn",
                "customdn",
                "custom-dn",
                "customDns",
              ],
              description:
                "Manage DNS configuration of Atlas project’s clusters deployed to AWS",
              subcommands: [
                {
                  name: ["aw", "aws"],
                  description:
                    "Manage DNS configuration of an Atlas project’s cluster deployed to AWS",
                  subcommands: [
                    {
                      name: "enable",
                      description:
                        "Enable the custom DNS configuration of an Atlas project’s cluster deployed to AWS",
                    },
                    {
                      name: "disable",
                      description:
                        "Disable the custom DNS configuration of an Atlas project’s cluster deployed to AWS",
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Describe the custom DNS configuration of an Atlas project’s cluster deployed to AWS",
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "cloudproviders",
                "cloud-providers",
                "cloudProvider",
                "cloudprovider",
                "cloud-provider",
                "cloudProviders",
              ],
              description: "Manage unified IAM role access in Atlas",
              subcommands: [
                {
                  name: [
                    "accessroles",
                    "access-roles",
                    "accessRole",
                    "accessrole",
                    "access-role",
                    "accessRoles",
                  ],
                  description: "Manage AWS IAM role access in Atlas",
                  subcommands: [
                    {
                      name: "aws",
                      description: "Manage AWS IAM role access in Atlas",
                      subcommands: [
                        {
                          name: "create",
                          description: "Create an AWS IAM role",
                        },
                        {
                          name: "authorize",
                          description: "Authorize an AWS IAM role",
                        },
                        {
                          name: "deauthorize",
                          description: "Deauthorize an AWS IAM role",
                        },
                      ],
                    },
                    {
                      name: ["ls", "list"],
                      description: "List AWS IAM role access in Atlas",
                    },
                  ],
                },
              ],
            },
            {
              name: ["sl", "serverless"],
              description: "Manage serverless instances for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Return all serverless instances in the specified project",
                },
                {
                  name: ["get", "describe"],
                  description:
                    "Return one serverless instance in the specified project",
                },
                {
                  name: ["rm", "delete"],
                  description: "Remove a serverless instance from your project",
                },
                {
                  name: "create",
                  description:
                    "Creates one serverless instance in the specified project",
                },
                {
                  name: "watch",
                  description: "Monitor the status of serverless instance",
                },
              ],
            },
            {
              name: [
                "livemigrations",
                "live-migrations",
                "liveMigration",
                "livemigration",
                "live-migration",
                "lm",
                "liveMigrations",
              ],
              description:
                "Manage a Live Migration to Atlas for your organization",
              subcommands: [
                {
                  name: "link",
                  description: "Manage the link-token for your organization",
                  subcommands: [
                    {
                      name: "create",
                      description: "Create one new link-token",
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete one link-token",
                    },
                  ],
                },
                {
                  name: "validation",
                  description:
                    "Manage a Live Migration validation job for your project",
                  subcommands: [
                    {
                      name: "create",
                      description: "Create one new validation request",
                    },
                    {
                      name: ["get", "describe"],
                      description: "Return one validation job",
                    },
                  ],
                },
                { name: "create", description: "Create one new migration" },
                {
                  name: ["get", "describe"],
                  description: "Return one migration job",
                },
                {
                  name: "cutover",
                  description:
                    "Start the cutover and confirm when the cutover completes. When the cutover completes, the application completes the live migration process and stops synchronizing with the source cluster",
                },
              ],
            },
            {
              name: [
                "accesslogs",
                "access-logs",
                "accessLog",
                "accesslog",
                "access-log",
                "accessLogs",
              ],
              description: "Manage the access logs of a cluster",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Retrieve the access logs of a cluster identified by the cluster's name or hostname",
                },
              ],
            },
          ],
        },
        {
          name: ["cm", "cloud-manager"],
          description: "MongoDB Cloud Manager operations",
          subcommands: [
            {
              name: ["cluster", "clusters"],
              description: "Manage clusters for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List clusters for your project",
                },
                { name: "describe", description: "Describe a cluster" },
                { name: "create", description: "Create a MongoDB cluster" },
                { name: "update", description: "Update a MongoDB cluster" },
                {
                  name: ["rm", "delete"],
                  description: "Completely removes a cluster from your project",
                },
                {
                  name: "apply",
                  description:
                    "Apply a new cluster configuration for your project",
                },
                {
                  name: ["index", "indexes"],
                  description:
                    "Manage cluster rolling indexes for your project",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create a rolling index for your MongoDB cluster",
                    },
                  ],
                },
                {
                  name: "unmanage",
                  description: "Stop managing a cluster via automation",
                },
                {
                  name: "restart",
                  description: "Restart a cluster for your project",
                },
                {
                  name: "startup",
                  description: "Start up a cluster for your project",
                },
                {
                  name: "shutdown",
                  description: "Shutdown a cluster for your project",
                },
                {
                  name: ["rfs", "reclaimFreeSpace"],
                  description: "Reclaim unused space for a cluster",
                },
              ],
            },
            {
              name: ["alert", "alerts"],
              description: "Manage alerts for your project",
              subcommands: [
                {
                  name: ["config", "settings"],
                  description: "Manages alerts configuration for your project",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Creates one alert configuration in the specified project",
                    },
                    {
                      name: ["ls", "list"],
                      description:
                        "Returns alert configurations for the specified project",
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Deletes the specified alert configuration in a specified project",
                    },
                    {
                      name: ["field", "fields"],
                      description:
                        "Manages alert configuration fields for your project",
                      subcommands: [
                        {
                          name: ["types", "type"],
                          description:
                            "Lists available field types for your alert configurations",
                        },
                      ],
                    },
                    {
                      name: "update",
                      description:
                        "Updates one alert configuration in the specified project",
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description: "Retrieves one alert for the specified project",
                },
                {
                  name: ["ls", "list"],
                  description:
                    "Retrieves all alerts for the specified Atlas project",
                },
                {
                  name: ["ack", "acknowledge"],
                  description:
                    "Acknowledges one alert for the specified project",
                },
                {
                  name: ["unack", "unacknowledge"],
                  description:
                    "Unacknowledges one alert for the specified project",
                },
                {
                  name: "global",
                  description:
                    "Retrieves all the global alerts for the specified Ops Manager project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Returns all global alerts for the specified Ops Manager project",
                    },
                  ],
                },
              ],
            },
            {
              name: ["backup", "backups"],
              description: "Manage continuous backups for your project",
              subcommands: [
                {
                  name: ["snapshot", "snapshots"],
                  description: "Manage backup snapshots for your project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List snapshots for a project and cluster",
                    },
                    {
                      name: "schedule",
                      description:
                        "Manage backup snapshot schedules for a cluster",
                      subcommands: [
                        {
                          name: ["get", "describe"],
                          description:
                            "Describe a snapshot schedule for a cluster",
                        },
                        {
                          name: "update",
                          description:
                            "Update a snapshot schedule for a cluster",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: ["restore", "restores"],
                  description: "Manage restore jobs for your project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Lists restore jobs for a project and cluster",
                    },
                    {
                      name: "start",
                      description:
                        "Start a restore job for a project and cluster",
                    },
                  ],
                },
                {
                  name: ["checkpoint", "checkpoints"],
                  description: "Manage backup checkpoints for your project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List continuous backup checkpoints for your project",
                    },
                  ],
                },
                {
                  name: "enable",
                  description: "Enable backup for a given hostname",
                },
                {
                  name: "disable",
                  description: "Disable backup for a given hostname",
                },
                {
                  name: "config",
                  description: "Manage backup configurations for your project",
                  subcommands: [
                    {
                      name: ["get", "describe"],
                      description: "Get a backup configuration",
                    },
                    {
                      name: ["ls", "list"],
                      description:
                        "List backup configurations for your project",
                    },
                    {
                      name: "update",
                      description: "Update a backup configuration",
                    },
                  ],
                },
              ],
            },
            {
              name: ["server", "servers"],
              description: "Manage automated servers for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List all available servers running an automation agent for your project",
                },
              ],
            },
            {
              name: "automation",
              description: "Manage automation configuration for your project",
              subcommands: [
                {
                  name: "status",
                  description:
                    "Show the current status of the automation config",
                },
                {
                  name: ["show", "get", "describe"],
                  description:
                    "Get the current automation configuration for a project",
                },
                {
                  name: "update",
                  description:
                    "Update the current automation configuration for a project",
                },
                {
                  name: "watch",
                  description: "Watch for automation changes to be completed",
                },
              ],
            },
            {
              name: "security",
              description: "Manage security configuration for your project",
              subcommands: [
                {
                  name: "enable",
                  description:
                    "Enable authentication mechanisms for your project",
                },
              ],
            },
            {
              name: ["dbuser", "databaseUsers", "databaseUser", "dbusers"],
              description: "Manage database users for your project",
              subcommands: [
                {
                  name: "create",
                  description: "Create a database user for your project",
                },
                {
                  name: ["ls", "list"],
                  description: "List Atlas database users for your project",
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a database user for your project",
                },
              ],
            },
            {
              name: ["event", "events"],
              description: "Manage events for your organization or project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Return all events for an organization or project",
                },
                {
                  name: ["organization", "orgs", "org", "organizations"],
                  description: "Organization operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "Return all events for an organization",
                    },
                  ],
                },
                {
                  name: ["project", "projects"],
                  description: "Project operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "Return all events for a project",
                    },
                  ],
                },
              ],
            },
            {
              name: "monitoring",
              description: "Manage monitoring for your project",
              subcommands: [
                {
                  name: "enable",
                  description: "Enable monitoring for a given hostname",
                },
                {
                  name: "disable",
                  description: "Disable monitoring for a given hostname",
                },
                {
                  name: ["rm", "stop"],
                  description:
                    "Stops monitoring the MongoDB process  specified",
                },
              ],
            },
            {
              name: ["process", "processes"],
              description: "Manage MongoDB processes for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List MongoDB processes for your project",
                },
                {
                  name: ["get", "describe"],
                  description: "Describe MongoDB processes for your project",
                },
              ],
            },
            {
              name: ["metric", "measurements", "measurement", "metrics"],
              description:
                "Get measurements on the state of the MongoDB process",
              subcommands: [
                {
                  name: ["processes", "process"],
                  description: "Get measurements for a given host",
                },
                {
                  name: ["disk", "disks"],
                  description:
                    "List available disks or disks measurements for a given host",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List available disks for a given host",
                    },
                    {
                      name: "describe",
                      description:
                        "Describe disks measurements for a given host partition",
                    },
                  ],
                },
                {
                  name: ["database", "databases"],
                  description:
                    "List available databases or databases measurements for a given host",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List available databases for a given host",
                    },
                    {
                      name: "describe",
                      description:
                        "Describe database measurements for a given host database",
                    },
                  ],
                },
              ],
            },
            {
              name: ["log", "logs"],
              description: "Manage log collection jobs for your project",
              subcommands: [
                {
                  name: ["job", "jobs"],
                  description: "Manage log collection jobs for your project",
                  subcommands: [
                    {
                      name: "collect",
                      description:
                        "Start a job to collect logs for your project",
                    },
                    {
                      name: ["ls", "list"],
                      description: "List log collection jobs for your project",
                    },
                    {
                      name: "download",
                      description:
                        "Download logs generated by a log collection job",
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete a log collection job from your project",
                    },
                  ],
                },
              ],
            },
            {
              name: ["agent", "agents"],
              description: "Manage MongoDB Agents",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List available MongoDB Agents for your project",
                },
                {
                  name: "upgrade",
                  description:
                    "Upgrade MongoDB Agents to the latest available version",
                },
                {
                  name: [
                    "apikeys",
                    "api-keys",
                    "apiKey",
                    "apikey",
                    "api-key",
                    "apiKeys",
                  ],
                  description: "Agent API Keys operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List available MongoDB Agent API Keys for your project",
                    },
                    {
                      name: "create",
                      description: "Create an Agent API Key for your project",
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete an Agent API Key for your project",
                    },
                  ],
                },
                {
                  name: ["version", "versions"],
                  description: "Manage MongoDB Agents versions",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List MongoDB Agent versions in the provided project",
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "maintenancewindows",
                "maintenance-windows",
                "maintenanceWindow",
                "maintenancewindow",
                "maintenance-window",
                "maintenanceWindows",
              ],
              description:
                "Manage Ops Manager/Cloud Manager maintenance windows",
              subcommands: [
                { name: "create", description: "Create a maintenance window" },
                {
                  name: ["ls", "list"],
                  description: "List maintenance windows",
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a maintenance window",
                },
                { name: "describe", description: "Get a maintenance window" },
                { name: "update", description: "Update a maintenance window" },
              ],
            },
            {
              name: [
                "performanceadvisor",
                "performance-advisor",
                "performanceAdvisor",
              ],
              description: "Performance Advisor operations",
              subcommands: [
                {
                  name: ["namespace", "namespaces"],
                  description:
                    "Retrieve namespaces for collections experiencing slow queries",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Retrieve up to 20 namespaces for collections experiencing slow queries for a specified host",
                    },
                  ],
                },
                {
                  name: [
                    "slowquerylogs",
                    "slow-query-logs",
                    "slowQueryLog",
                    "slowquerylog",
                    "slow-query-log",
                    "slowQueryLogs",
                  ],
                  description:
                    "Get log lines for slow queries for a specified host",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Return log lines for slow queries that the Performance Advisor and Query Profiler identified",
                    },
                  ],
                },
                {
                  name: [
                    "suggestedindexes",
                    "suggested-indexes",
                    "suggestedIndex",
                    "suggestedindex",
                    "suggested-index",
                    "suggestedIndexes",
                  ],
                  description:
                    "Get suggested indexes for collections experiencing slow queries",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Retrieve suggested indexes for collections experiencing slow queries",
                    },
                  ],
                },
                {
                  name: ["slowOT", "sot", "slowMS", "slowOperationThreshold"],
                  description:
                    "Enable or disable management of the slow operation threshold for your cluster",
                  subcommands: [
                    {
                      name: ["ls", "enable"],
                      description:
                        "Enable the application-managed slow operation threshold for your project",
                    },
                    {
                      name: "disable",
                      description:
                        "Disable the application-managed slow operation threshold for your project",
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "featurepolicies",
                "feature-policies",
                "featurePolicy",
                "featurepolicy",
                "feature-policy",
                "featurePolicies",
              ],
              description: "Manage feature control policies",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List feature control policies for your project",
                },
                {
                  name: "update",
                  description:
                    "Update feature control policies for your project",
                },
              ],
            },
            {
              name: [
                "livemigrations",
                "live-migrations",
                "liveMigration",
                "livemigration",
                "live-migration",
                "lm",
                "liveMigrations",
              ],
              description:
                "Manage a Live Migration to Atlas for your organization",
              subcommands: [
                {
                  name: "link",
                  description: "Manage the link-token for your organization",
                  subcommands: [
                    {
                      name: "create",
                      description: "Create one new organization link",
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete one link-token",
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Return the status of the connection between the specified source organization and the target MongoDB Atlas organization",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["om", "ops-manager"],
          description: "MongoDB Ops Manager operations",
          subcommands: [
            {
              name: ["cluster", "clusters"],
              description: "Manage clusters for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List clusters for your project",
                },
                { name: "describe", description: "Describe a cluster" },
                { name: "create", description: "Create a MongoDB cluster" },
                { name: "update", description: "Update a MongoDB cluster" },
                {
                  name: ["rm", "delete"],
                  description: "Completely removes a cluster from your project",
                },
                {
                  name: "apply",
                  description:
                    "Apply a new cluster configuration for your project",
                },
                {
                  name: ["index", "indexes"],
                  description:
                    "Manage cluster rolling indexes for your project",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create a rolling index for your MongoDB cluster",
                    },
                  ],
                },
                {
                  name: "unmanage",
                  description: "Stop managing a cluster via automation",
                },
                {
                  name: "restart",
                  description: "Restart a cluster for your project",
                },
                {
                  name: "startup",
                  description: "Start up a cluster for your project",
                },
                {
                  name: "shutdown",
                  description: "Shutdown a cluster for your project",
                },
                {
                  name: ["rfs", "reclaimFreeSpace"],
                  description: "Reclaim unused space for a cluster",
                },
              ],
            },
            {
              name: ["alert", "alerts"],
              description: "Manage alerts for your project",
              subcommands: [
                {
                  name: ["config", "settings"],
                  description: "Manages alerts configuration for your project",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Creates one alert configuration in the specified project",
                    },
                    {
                      name: ["ls", "list"],
                      description:
                        "Returns alert configurations for the specified project",
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Deletes the specified alert configuration in a specified project",
                    },
                    {
                      name: ["field", "fields"],
                      description:
                        "Manages alert configuration fields for your project",
                      subcommands: [
                        {
                          name: ["types", "type"],
                          description:
                            "Lists available field types for your alert configurations",
                        },
                      ],
                    },
                    {
                      name: "update",
                      description:
                        "Updates one alert configuration in the specified project",
                    },
                  ],
                },
                {
                  name: ["get", "describe"],
                  description: "Retrieves one alert for the specified project",
                },
                {
                  name: ["ls", "list"],
                  description:
                    "Retrieves all alerts for the specified Atlas project",
                },
                {
                  name: ["ack", "acknowledge"],
                  description:
                    "Acknowledges one alert for the specified project",
                },
                {
                  name: ["unack", "unacknowledge"],
                  description:
                    "Unacknowledges one alert for the specified project",
                },
                {
                  name: "global",
                  description:
                    "Retrieves all the global alerts for the specified Ops Manager project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Returns all global alerts for the specified Ops Manager project",
                    },
                  ],
                },
              ],
            },
            {
              name: ["backup", "backups"],
              description: "Manage continuous backups for your project",
              subcommands: [
                {
                  name: ["snapshot", "snapshots"],
                  description: "Manage backup snapshots for your project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List snapshots for a project and cluster",
                    },
                    {
                      name: "schedule",
                      description:
                        "Manage backup snapshot schedules for a cluster",
                      subcommands: [
                        {
                          name: ["get", "describe"],
                          description:
                            "Describe a snapshot schedule for a cluster",
                        },
                        {
                          name: "update",
                          description:
                            "Update a snapshot schedule for a cluster",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: ["restore", "restores"],
                  description: "Manage restore jobs for your project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Lists restore jobs for a project and cluster",
                    },
                    {
                      name: "start",
                      description:
                        "Start a restore job for a project and cluster",
                    },
                  ],
                },
                {
                  name: ["checkpoint", "checkpoints"],
                  description: "Manage backup checkpoints for your project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List continuous backup checkpoints for your project",
                    },
                  ],
                },
                {
                  name: "enable",
                  description: "Enable backup for a given hostname",
                },
                {
                  name: "disable",
                  description: "Disable backup for a given hostname",
                },
                {
                  name: "config",
                  description: "Manage backup configurations for your project",
                  subcommands: [
                    {
                      name: ["get", "describe"],
                      description: "Get a backup configuration",
                    },
                    {
                      name: ["ls", "list"],
                      description:
                        "List backup configurations for your project",
                    },
                    {
                      name: "update",
                      description: "Update a backup configuration",
                    },
                  ],
                },
              ],
            },
            {
              name: ["server", "servers"],
              description: "Manage automated servers for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List all available servers running an automation agent for your project",
                },
              ],
            },
            {
              name: "automation",
              description: "Manage automation configuration for your project",
              subcommands: [
                {
                  name: "status",
                  description:
                    "Show the current status of the automation config",
                },
                {
                  name: ["show", "get", "describe"],
                  description:
                    "Get the current automation configuration for a project",
                },
                {
                  name: "update",
                  description:
                    "Update the current automation configuration for a project",
                },
                {
                  name: "watch",
                  description: "Watch for automation changes to be completed",
                },
              ],
            },
            {
              name: "security",
              description: "Manage security configuration for your project",
              subcommands: [
                {
                  name: "enable",
                  description:
                    "Enable authentication mechanisms for your project",
                },
              ],
            },
            {
              name: ["dbuser", "databaseUsers", "databaseUser", "dbusers"],
              description: "Manage database users for your project",
              subcommands: [
                {
                  name: "create",
                  description: "Create a database user for your project",
                },
                {
                  name: ["ls", "list"],
                  description: "List Atlas database users for your project",
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a database user for your project",
                },
              ],
            },
            {
              name: "owner",
              description: "Manage Ops Manager owners",
              subcommands: [
                {
                  name: "create",
                  description: "Create the first user for Ops Manager",
                },
              ],
            },
            {
              name: ["event", "events"],
              description: "Manage events for your organization or project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "Return all events for an organization or project",
                },
                {
                  name: ["organization", "orgs", "org", "organizations"],
                  description: "Organization operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "Return all events for an organization",
                    },
                  ],
                },
                {
                  name: ["project", "projects"],
                  description: "Project operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "Return all events for a project",
                    },
                  ],
                },
              ],
            },
            {
              name: "monitoring",
              description: "Manage monitoring for your project",
              subcommands: [
                {
                  name: "enable",
                  description: "Enable monitoring for a given hostname",
                },
                {
                  name: "disable",
                  description: "Disable monitoring for a given hostname",
                },
                {
                  name: ["rm", "stop"],
                  description:
                    "Stops monitoring the MongoDB process  specified",
                },
              ],
            },
            {
              name: ["process", "processes"],
              description: "Manage MongoDB processes for your project",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List MongoDB processes for your project",
                },
                {
                  name: ["get", "describe"],
                  description: "Describe MongoDB processes for your project",
                },
              ],
            },
            {
              name: ["metric", "measurements", "measurement", "metrics"],
              description:
                "Get measurements on the state of the MongoDB process",
              subcommands: [
                {
                  name: ["processes", "process"],
                  description: "Get measurements for a given host",
                },
                {
                  name: ["disk", "disks"],
                  description:
                    "List available disks or disks measurements for a given host",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List available disks for a given host",
                    },
                    {
                      name: "describe",
                      description:
                        "Describe disks measurements for a given host partition",
                    },
                  ],
                },
                {
                  name: ["database", "databases"],
                  description:
                    "List available databases or databases measurements for a given host",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List available databases for a given host",
                    },
                    {
                      name: "describe",
                      description:
                        "Describe database measurements for a given host database",
                    },
                  ],
                },
              ],
            },
            {
              name: ["log", "logs"],
              description: "Manage log collection jobs for your project",
              subcommands: [
                {
                  name: ["job", "jobs"],
                  description: "Manage log collection jobs for your project",
                  subcommands: [
                    {
                      name: "collect",
                      description:
                        "Start a job to collect logs for your project",
                    },
                    {
                      name: ["ls", "list"],
                      description: "List log collection jobs for your project",
                    },
                    {
                      name: "download",
                      description:
                        "Download logs generated by a log collection job",
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Delete a log collection job from your project",
                    },
                  ],
                },
              ],
            },
            {
              name: ["agent", "agents"],
              description: "Manage MongoDB Agents",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List available MongoDB Agents for your project",
                },
                {
                  name: "upgrade",
                  description:
                    "Upgrade MongoDB Agents to the latest available version",
                },
                {
                  name: [
                    "apikeys",
                    "api-keys",
                    "apiKey",
                    "apikey",
                    "api-key",
                    "apiKeys",
                  ],
                  description: "Agent API Keys operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List available MongoDB Agent API Keys for your project",
                    },
                    {
                      name: "create",
                      description: "Create an Agent API Key for your project",
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete an Agent API Key for your project",
                    },
                  ],
                },
                {
                  name: ["version", "versions"],
                  description: "Manage MongoDB Agents versions",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "List MongoDB Agent versions in the provided project",
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "diagnosearchives",
                "diagnose-archives",
                "diagnoseArchive",
                "diagnosearchive",
                "diagnose-archive",
                "diagnoseArchives",
              ],
              description: "Manage diagnose archives",
              subcommands: [
                {
                  name: ["get", "download"],
                  description: "Download diagnose archives",
                },
              ],
            },
            {
              name: [
                "maintenancewindows",
                "maintenance-windows",
                "maintenanceWindow",
                "maintenancewindow",
                "maintenance-window",
                "maintenanceWindows",
              ],
              description:
                "Manage Ops Manager/Cloud Manager maintenance windows",
              subcommands: [
                { name: "create", description: "Create a maintenance window" },
                {
                  name: ["ls", "list"],
                  description: "List maintenance windows",
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a maintenance window",
                },
                { name: "describe", description: "Get a maintenance window" },
                { name: "update", description: "Update a maintenance window" },
              ],
            },
            {
              name: [
                "performanceadvisor",
                "performance-advisor",
                "performanceAdvisor",
              ],
              description: "Performance Advisor operations",
              subcommands: [
                {
                  name: ["namespace", "namespaces"],
                  description:
                    "Retrieve namespaces for collections experiencing slow queries",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Retrieve up to 20 namespaces for collections experiencing slow queries for a specified host",
                    },
                  ],
                },
                {
                  name: [
                    "slowquerylogs",
                    "slow-query-logs",
                    "slowQueryLog",
                    "slowquerylog",
                    "slow-query-log",
                    "slowQueryLogs",
                  ],
                  description:
                    "Get log lines for slow queries for a specified host",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Return log lines for slow queries that the Performance Advisor and Query Profiler identified",
                    },
                  ],
                },
                {
                  name: [
                    "suggestedindexes",
                    "suggested-indexes",
                    "suggestedIndex",
                    "suggestedindex",
                    "suggested-index",
                    "suggestedIndexes",
                  ],
                  description:
                    "Get suggested indexes for collections experiencing slow queries",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Retrieve suggested indexes for collections experiencing slow queries",
                    },
                  ],
                },
                {
                  name: ["slowOT", "sot", "slowMS", "slowOperationThreshold"],
                  description:
                    "Enable or disable management of the slow operation threshold for your cluster",
                  subcommands: [
                    {
                      name: ["ls", "enable"],
                      description:
                        "Enable the application-managed slow operation threshold for your project",
                    },
                    {
                      name: "disable",
                      description:
                        "Disable the application-managed slow operation threshold for your project",
                    },
                  ],
                },
              ],
            },
            {
              name: ["versionmanifest", "version-manifest", "versionManifest"],
              description: "Manage Ops Manager version manifest",
              subcommands: [
                {
                  name: "update",
                  description: "Update Ops Manager version manifest",
                },
              ],
            },
            {
              name: "admin",
              description: "Manage backup administration",
              subcommands: [
                {
                  name: ["backup", "backups"],
                  description: "Manage backup administration",
                  subcommands: [
                    {
                      name: ["blockstore", "blockstores"],
                      description: "Manage backup blockstore configurations",
                      subcommands: [
                        {
                          name: ["ls", "list"],
                          description: "List backup blockstore configurations",
                        },
                        {
                          name: ["get", "describe"],
                          description: "Get a backup blockstore configuration",
                        },
                        {
                          name: "create",
                          description:
                            "Create a backup blockstore configuration",
                        },
                        {
                          name: "update",
                          description:
                            "Update a backup blockstore configuration",
                        },
                        {
                          name: ["rm", "delete"],
                          description:
                            "Delete a backup blockstore configuration",
                        },
                      ],
                    },
                    {
                      name: [
                        "filesystems",
                        "file-systems",
                        "fileSystem",
                        "filesystem",
                        "file-system",
                        "fileSystems",
                      ],
                      description: "Manage file system configurations",
                      subcommands: [
                        {
                          name: ["ls", "list"],
                          description: "List file system configurations",
                        },
                        {
                          name: ["get", "describe"],
                          description: "Get a file system configuration",
                        },
                        {
                          name: ["rm", "delete"],
                          description: "Delete a file system configuration",
                        },
                        {
                          name: "create",
                          description: "Create a file system configuration",
                        },
                        {
                          name: "update",
                          description: "Update a file system configuration",
                        },
                      ],
                    },
                    {
                      name: "s3",
                      description: "Manage backup s3 blockstore configurations",
                      subcommands: [
                        {
                          name: ["ls", "list"],
                          description:
                            "List backup s3 blockstore configurations",
                        },
                        {
                          name: ["rm", "delete"],
                          description:
                            "Delete a backup s3 blockstore configuration",
                        },
                        {
                          name: "create",
                          description:
                            "Create a backup S3 blockstore configuration",
                        },
                        {
                          name: "update",
                          description:
                            "Update a backup S3 blockstore configuration",
                        },
                        {
                          name: ["get", "describe"],
                          description:
                            "Get a backup s3 blockstore configuration",
                        },
                      ],
                    },
                    {
                      name: "oplog",
                      description: "Manage backup oplog configurations",
                      subcommands: [
                        {
                          name: ["ls", "list"],
                          description: "List backup oplog configurations",
                        },
                        {
                          name: ["get", "describe"],
                          description: "Get a backup oplog configuration",
                        },
                        {
                          name: "create",
                          description: "Create a backup oplog configuration",
                        },
                        {
                          name: "update",
                          description: "Update a backup oplog configuration",
                        },
                        {
                          name: ["rm", "delete"],
                          description: "Delete a backup oplog configuration",
                        },
                      ],
                    },
                    {
                      name: "sync",
                      description: "Manage backup sync configurations",
                      subcommands: [
                        {
                          name: ["ls", "list"],
                          description: "List backup sync configurations",
                        },
                        {
                          name: ["rm", "delete"],
                          description: "Delete a backup sync configuration",
                        },
                        {
                          name: "create",
                          description: "Create a backup sync configuration",
                        },
                        {
                          name: "update",
                          description: "Update a backup sync configuration",
                        },
                        {
                          name: ["get", "describe"],
                          description: "Get a backup sync configuration",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "softwarecomponents",
                "software-components",
                "softwareComponent",
                "softwarecomponent",
                "software-component",
                "softwareComponents",
              ],
              description:
                "Manage earliest and latest versions of MongoDB Agent, MongoDB Tools, and BI Connector in your environment",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List versions of MongoDB Agent, MongoDB Tools, and BI Connector in your environment",
                },
              ],
            },
            {
              name: [
                "featurepolicies",
                "feature-policies",
                "featurePolicy",
                "featurepolicy",
                "feature-policy",
                "featurePolicies",
              ],
              description: "Manage feature control policies",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "List feature control policies for your project",
                },
                {
                  name: "update",
                  description:
                    "Update feature control policies for your project",
                },
              ],
            },
            {
              name: ["serverusage", "server-usage", "serverUsage"],
              description: "Manage your server usage",
              subcommands: [
                {
                  name: ["project", "projects"],
                  description: "Manage your server usage for a project",
                  subcommands: [
                    {
                      name: ["servertype", "server-type", "serverType"],
                      description: "Manage your server type for a project",
                      subcommands: [
                        {
                          name: ["get", "describe"],
                          description:
                            "Get the default server type for a project",
                        },
                        {
                          name: "set",
                          description:
                            "Set the default server type for a project",
                        },
                      ],
                    },
                    {
                      name: ["host", "hosts"],
                      description: "Manage host assignment for a project",
                      subcommands: [
                        {
                          name: ["ls", "list"],
                          description:
                            "List all host assignments for one project",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: ["organization", "organizations"],
                  description: "Manage your server usage for an organization",
                  subcommands: [
                    {
                      name: ["servertype", "server-type", "serverType"],
                      description:
                        "Manage your server type for an organization",
                      subcommands: [
                        {
                          name: ["get", "describe"],
                          description:
                            "Get the default server type for an organization",
                        },
                        {
                          name: "set",
                          description:
                            "Set the default server type for an organization",
                        },
                      ],
                    },
                    {
                      name: ["host", "hosts"],
                      description: "Manage host assignment for an organization",
                      subcommands: [
                        {
                          name: ["ls", "list"],
                          description:
                            "List all host assignments for one organization",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "capture",
                  description:
                    "Capture a snapshot of usage for the processes Ops Manager manages",
                },
                {
                  name: "download",
                  description: "Download the server usage report",
                },
              ],
            },
            {
              name: [
                "livemigrations",
                "live-migrations",
                "liveMigration",
                "livemigration",
                "live-migration",
                "lm",
                "liveMigrations",
              ],
              description:
                "Manage a Live Migration to Atlas for your organization",
              subcommands: [
                {
                  name: "link",
                  description: "Manage the link-token for your organization",
                  subcommands: [
                    {
                      name: "create",
                      description: "Create one new organization link",
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete one link-token",
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Return the status of the connection between the specified source organization and the target MongoDB Atlas organization",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "iam",
          description: "Organization and projects operations",
          subcommands: [
            {
              name: ["project", "projects"],
              description: "Project operations",
              subcommands: [
                { name: ["ls", "list"], description: "List projects" },
                { name: "create", description: "Create a project" },
                { name: ["rm", "delete"], description: "Delete a project" },
                {
                  name: ["show", "get", "describe"],
                  description: "Describe a project",
                },
                {
                  name: [
                    "apikeys",
                    "api-keys",
                    "apiKey",
                    "apikey",
                    "api-key",
                    "apiKeys",
                  ],
                  description: "Manage API Keys for your project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List API Keys for your project",
                    },
                    {
                      name: "create",
                      description: "Create an API Key for your project",
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete an API Key for your project",
                    },
                    {
                      name: ["update", "assign"],
                      description: "Assign an API Key to a project",
                    },
                  ],
                },
                {
                  name: ["user", "users"],
                  description: "Manage users for a project",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List all users for a project",
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete user from a project",
                    },
                  ],
                },
                {
                  name: ["team", "teams"],
                  description: "Teams operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "Get all teams in a project",
                    },
                    { name: "add", description: "Add team to a project" },
                    {
                      name: ["rm", "delete"],
                      description: "Delete team from a project",
                    },
                    {
                      name: ["updates", "update"],
                      description: "Update roles for a team in a project",
                    },
                  ],
                },
                {
                  name: ["invitation", "invitations"],
                  description: "Invitation operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Retrieves all pending invitations to the specified project",
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Retrieve details for one pending invitation to the specified project",
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Deletes one pending invitation to the specified project",
                    },
                    {
                      name: ["create", "invite"],
                      description:
                        "Invites one user to the project that you specify",
                    },
                    {
                      name: ["updates", "update"],
                      description:
                        "Updates one pending invitation by invitationId or email to the project that you specify",
                    },
                  ],
                },
              ],
            },
            {
              name: ["organization", "orgs", "org", "organizations"],
              description: "Organization operations",
              subcommands: [
                { name: ["ls", "list"], description: "List organizations" },
                {
                  name: ["show", "describe"],
                  description: "Describe an organizations",
                },
                { name: "create", description: "Create an organization" },
                {
                  name: ["rm", "delete"],
                  description: "Delete an organization",
                },
                {
                  name: [
                    "apikeys",
                    "api-keys",
                    "apiKey",
                    "apikey",
                    "api-key",
                    "apiKeys",
                  ],
                  description: "Organization API Keys operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List API Keys for your organization",
                    },
                    {
                      name: ["show", "describe"],
                      description: "Get a specific Organization API Key",
                    },
                    {
                      name: ["updates", "assign"],
                      description: "Update an Organization API Key",
                    },
                    {
                      name: "create",
                      description: "Create an Organization API Key",
                    },
                    {
                      name: ["rm", "delete"],
                      description: "Delete an Organization API Key",
                    },
                    {
                      name: [
                        "accesslists",
                        "access-lists",
                        "accessList",
                        "accesslist",
                        "access-list",
                        "whitelists",
                        "whitelist",
                        "accessLists",
                      ],
                      description: "Manage the IP access list for your API Key",
                      subcommands: [
                        {
                          name: ["ls", "list"],
                          description:
                            "List IP access list entries for your API Key",
                        },
                        {
                          name: "create",
                          description:
                            "Create an IP access list for your API Key",
                        },
                        {
                          name: ["rm", "delete"],
                          description:
                            "Delete an IP access list from your API Key",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: ["user", "users"],
                  description: "Users operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List users in a organization",
                    },
                  ],
                },
                {
                  name: ["invitation", "invitations"],
                  description: "Invitation operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description:
                        "Retrieves all pending invitations to the specified organization",
                    },
                    {
                      name: ["get", "describe"],
                      description:
                        "Retrieve details for one pending invitation to the specified organization",
                    },
                    {
                      name: ["rm", "delete"],
                      description:
                        "Deletes one pending invitation to the specified organization",
                    },
                    {
                      name: ["updates", "update"],
                      description:
                        "Updates one pending invitation by invitationId or email to the project that you specify",
                    },
                    {
                      name: ["create", "invite"],
                      description:
                        "Invites one user to the organization that you specify",
                    },
                  ],
                },
              ],
            },
            {
              name: [
                "globalapikeys",
                "global-api-keys",
                "globalApiKey",
                "globalapikey",
                "global-api-key",
                "globalApiKeys",
              ],
              description: "Global API Keys operations",
              subcommands: [
                { name: ["ls", "list"], description: "List Global API Keys" },
                {
                  name: ["show", "describe"],
                  description: "Get a specific Global API Key",
                },
                { name: "create", description: "Create a Global API Key" },
                { name: "update", description: "Update a Global API Key" },
                {
                  name: ["rm", "delete"],
                  description: "Delete a Global API Key",
                },
              ],
            },
            {
              name: [
                "globalaccesslists",
                "global-access-lists",
                "globalAccessList",
                "globalaccesslist",
                "global-access-list",
                "globalWhitelists",
                "globalwhitelists",
                "global-whitelists",
                "globalWhitelist",
                "globalwhitelist",
                "global-whitelist",
                "globalAccessLists",
              ],
              description: "Manage IP access list for Global API Key",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description:
                    "List Atlas IP access list entries for Global API Key",
                },
                {
                  name: ["show", "describe"],
                  description: "Return one Global IP access list entry",
                },
                {
                  name: "create",
                  description: "Create an IP access list for Global API Key",
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete an IP access list from Global API Key",
                },
              ],
            },
            {
              name: ["user", "users"],
              description: "Users operations",
              subcommands: [
                { name: "invite", description: "Invite a user" },
                {
                  name: ["get", "describe"],
                  description: "Get a user by username or id",
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete an Ops Manager user",
                },
              ],
            },
            {
              name: ["team", "teams"],
              description: "Teams operations",
              subcommands: [
                {
                  name: ["ls", "list"],
                  description: "Get all teams in an organization",
                },
                {
                  name: ["get", "describe"],
                  description: "Get a team in an organization",
                },
                {
                  name: "create",
                  description: "Create a team in an organization",
                },
                {
                  name: ["user", "users"],
                  description: "Users operations",
                  subcommands: [
                    {
                      name: ["ls", "list"],
                      description: "List users of a team",
                    },
                    { name: "add", description: "Add a user to a team" },
                    {
                      name: ["rm", "delete"],
                      description: "Delete user from a team",
                    },
                  ],
                },
                {
                  name: ["rm", "delete"],
                  description: "Delete a team from an organization",
                },
              ],
            },
          ],
        },
        {
          name: "auth",
          description: "Manage the CLI's authentication state",
          subcommands: [
            { name: "login", description: "Authenticate with MongoDB Atlas" },
            {
              name: "whoami",
              description:
                "Verifies and displays information about your authentication state",
            },
            { name: "logout", description: "Log out of the CLI" },
          ],
        },
        {
          name: "login",
          description: "Authenticate with MongoDB Atlas",
          hidden: true,
        },
        { name: "logout", description: "Log out of the CLI", hidden: true },
        {
          name: "whoami",
          description:
            "Verifies and displays information about your authentication state",
          hidden: true,
        },
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--profile", "-P"],
      description: "Profile to use from your configuration file",
      isPersistent: true,
      args: { name: "profile" },
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
