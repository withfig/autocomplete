const completionSpec: Fig.Spec = {
  name: "dla",
  description: "Manage Data Lake Analytics accounts, jobs, and catalogs",
  subcommands: [
    {
      name: "account",
      description: "Manage Data Lake Analytics accounts",
      subcommands: [
        {
          name: "blob-storage",
          description:
            "Manage links between Data Lake Analytics accounts and Azure Storage",
          subcommands: [
            {
              name: "add",
              description:
                "Links an Azure Storage account to the specified Data Lake Analytics account",
            },
            {
              name: "delete",
              description:
                "Updates the specified Data Lake Analytics account to remove an Azure Storage account",
            },
            {
              name: "list",
              description:
                "Gets the first page of Azure Storage accounts, if any, linked to the specified Data Lake Analytics account",
            },
            {
              name: "show",
              description:
                "Gets the specified Azure Storage account linked to the given Data Lake Analytics account",
            },
            {
              name: "update",
              description:
                "Updates an Azure Storage account linked to the specified Data Lake Analytics account",
            },
          ],
        },
        {
          name: "compute-policy",
          description: "Manage Data Lake Analytics account compute policies",
          subcommands: [
            {
              name: "create",
              description:
                "Create a compute policy in the Data Lake Analytics account",
            },
            {
              name: "delete",
              description:
                "Delete a compute policy in a Data Lake Analytics account",
            },
            {
              name: "list",
              description:
                "List compute policies in the a Lake Analytics account",
            },
            {
              name: "show",
              description:
                "Retrieve a compute policy in a Data Lake Analytics account",
            },
            {
              name: "update",
              description:
                "Update a compute policy in the Data Lake Analytics account",
            },
          ],
        },
        { name: "create", description: "Create a Data Lake Analytics account" },
        {
          name: "data-lake-store",
          description:
            "Manage links between Data Lake Analytics and Data Lake Store accounts",
          subcommands: [
            {
              name: "add",
              description:
                "Updates the specified Data Lake Analytics account to include the additional Data Lake Store account",
            },
            {
              name: "delete",
              description:
                "Updates the Data Lake Analytics account specified to remove the specified Data Lake Store account",
            },
            {
              name: "list",
              description:
                "Gets the first page of Data Lake Store accounts linked to the specified Data Lake Analytics account",
            },
            {
              name: "show",
              description:
                "Gets the specified Data Lake Store account details in the specified Data Lake Analytics account",
            },
          ],
        },
        { name: "delete", description: "Delete a Data Lake Analytics account" },
        {
          name: "firewall",
          description: "Manage Data Lake Analytics account firewall rules",
          subcommands: [
            {
              name: "create",
              description:
                "Create a firewall rule in a Data Lake Analytics account",
            },
            {
              name: "delete",
              description:
                "Delete a firewall rule in a Data Lake Analytics account",
            },
            {
              name: "list",
              description:
                "List firewall rules in a Data Lake Analytics account",
            },
            {
              name: "show",
              description:
                "Retrieve a firewall rule in a Data Lake Analytics account",
            },
            {
              name: "update",
              description:
                "Update a firewall rule in a Data Lake Analytics account",
            },
          ],
        },
        {
          name: "list",
          description: "List available Data Lake Analytics accounts",
        },
        {
          name: "show",
          description: "Get the details of a Data Lake Analytics account",
        },
        { name: "update", description: "Update a Data Lake Analytics account" },
      ],
    },
    {
      name: "catalog",
      description: "Manage Data Lake Analytics catalogs",
      subcommands: [
        {
          name: "assembly",
          description: "Manage Data Lake Analytics catalog assemblies",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of assemblies from the Data Lake Analytics catalog",
            },
            {
              name: "show",
              description:
                "Retrieves the specified assembly from the Data Lake Analytics catalog",
            },
          ],
        },
        {
          name: "credential",
          description: "Manage Data Lake Analytics catalog credentials",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new catalog credential for use with an external data source",
            },
            { name: "delete", description: "Delete a catalog credential" },
            { name: "list", description: "List catalog credentials" },
            { name: "show", description: "Retrieve a catalog credential" },
            {
              name: "update",
              description:
                "Update a catalog credential for use with an external data source",
            },
          ],
        },
        {
          name: "database",
          description: "Manage Data Lake Analytics catalog databases",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of databases from the Data Lake Analytics catalog",
            },
            {
              name: "show",
              description:
                "Retrieves the specified database from the Data Lake Analytics catalog",
            },
          ],
        },
        {
          name: "external-data-source",
          description:
            "Manage Data Lake Analytics catalog external data sources",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of external data sources from the Data Lake Analytics catalog",
            },
            {
              name: "show",
              description:
                "Retrieves the specified external data source from the Data Lake Analytics catalog",
            },
          ],
        },
        {
          name: "package",
          description: "Manage Data Lake Analytics catalog packages",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of packages from the Data Lake Analytics catalog",
            },
            {
              name: "show",
              description:
                "Retrieves the specified package from the Data Lake Analytics catalog",
            },
          ],
        },
        {
          name: "procedure",
          description: "Manage Data Lake Analytics catalog stored procedures",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of procedures from the Data Lake Analytics catalog",
            },
            {
              name: "show",
              description:
                "Retrieves the specified procedure from the Data Lake Analytics catalog",
            },
          ],
        },
        {
          name: "schema",
          description: "Manage Data Lake Analytics catalog schemas",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of schemas from the Data Lake Analytics catalog",
            },
            {
              name: "show",
              description:
                "Retrieves the specified schema from the Data Lake Analytics catalog",
            },
          ],
        },
        {
          name: "table",
          description: "Manage Data Lake Analytics catalog tables",
          subcommands: [
            {
              name: "list",
              description: "List tables in a database or schema",
            },
            {
              name: "show",
              description:
                "Retrieves the specified table from the Data Lake Analytics catalog",
            },
          ],
        },
        {
          name: "table-partition",
          description: "Manage Data Lake Analytics catalog table partitions",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of table partitions from the Data Lake Analytics catalog",
            },
            {
              name: "show",
              description:
                "Retrieves the specified table partition from the Data Lake Analytics catalog",
            },
          ],
        },
        {
          name: "table-stats",
          description: "Manage Data Lake Analytics catalog table statistics",
          subcommands: [
            {
              name: "list",
              description:
                "List table statistics in a database, table, or schema",
            },
            {
              name: "show",
              description:
                "Retrieves the specified table statistics from the Data Lake Analytics catalog",
            },
          ],
        },
        {
          name: "table-type",
          description: "Manage Data Lake Analytics catalog table types",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of table types from the Data Lake Analytics catalog",
            },
            {
              name: "show",
              description:
                "Retrieves the specified table type from the Data Lake Analytics catalog",
            },
          ],
        },
        {
          name: "tvf",
          description:
            "Manage Data Lake Analytics catalog table valued functions",
          subcommands: [
            {
              name: "list",
              description:
                "List table valued functions in a database or schema",
            },
            {
              name: "show",
              description:
                "Retrieves the specified table valued function from the Data Lake Analytics catalog",
            },
          ],
        },
        {
          name: "view",
          description: "Manage Data Lake Analytics catalog views",
          subcommands: [
            { name: "list", description: "List views in a database or schema" },
            {
              name: "show",
              description:
                "Retrieves the specified view from the Data Lake Analytics catalog",
            },
          ],
        },
      ],
    },
    {
      name: "job",
      description: "Manage Data Lake Analytics jobs",
      subcommands: [
        { name: "cancel", description: "Cancel a Data Lake Analytics job" },
        { name: "list", description: "List Data Lake Analytics jobs" },
        {
          name: "pipeline",
          description: "Manage Data Lake Analytics job pipelines",
          subcommands: [
            {
              name: "list",
              description:
                "List job pipelines in a Data Lake Analytics account",
            },
            {
              name: "show",
              description:
                "Retrieve a job pipeline in a Data Lake Analytics account",
            },
          ],
        },
        {
          name: "recurrence",
          description: "Manage Data Lake Analytics job recurrences",
          subcommands: [
            {
              name: "list",
              description:
                "List job recurrences in a Data Lake Analytics account",
            },
            {
              name: "show",
              description:
                "Retrieve a job recurrence in a Data Lake Analytics account",
            },
          ],
        },
        {
          name: "show",
          description: "Get information for a Data Lake Analytics job",
        },
        {
          name: "submit",
          description: "Submit a job to a Data Lake Analytics account",
        },
        {
          name: "wait",
          description: "Wait for a Data Lake Analytics job to finish",
        },
      ],
    },
  ],
};

export default completionSpec;
