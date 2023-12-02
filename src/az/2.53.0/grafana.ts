const completion: Fig.Spec = {
  name: "grafana",
  description:
    "Commands to manage Azure Grafana instanced.\n\n\t\tFor optimized experience, not all data plane Apis, documented at https://grafana.com/docs/grafana/latest/http_api/, are exposed. On coverage gap, please reach out to ad4g@microsoft.com",
  subcommands: [
    {
      name: "api-key",
      description: "Commands to manage api keys",
      subcommands: [
        {
          name: "create",
          description: "Create a new api key",
          options: [
            {
              name: "--key",
              description: "Api key name",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--role", "-r"],
              description: "Grafana role name",
              args: {
                name: "role",
                suggestions: ["Admin", "Editor", "Viewer"],
              },
            },
            {
              name: "--time-to-live",
              description:
                "The API key life duration. For example, 1d if your key is going to last fr one day. Supported units are: s,m,h,d,w,M,y",
              args: { name: "time-to-live" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an api key",
          options: [
            {
              name: "--key",
              description: "Id or name that identify an api-key to delete",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list",
          description: "List existing api keys",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "backup",
      description:
        "Backup an Azure Managed Grafana instance's content to an achive",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Azure Managed Grafana",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--components", "-c"],
          description: "Grafana artifact types to backup",
          args: {
            name: "components",
            suggestions: [
              "annotations",
              "dashboards",
              "datasources",
              "folders",
              "snapshots",
            ],
          },
        },
        {
          name: ["--directory", "-d"],
          description: "Directory to backup Grafana artifacts",
          args: { name: "directory" },
        },
        {
          name: ["--folders-to-exclude", "-e"],
          description: "Folders to exclude in backup or sync",
          args: { name: "folders-to-exclude" },
        },
        {
          name: ["--folders-to-include", "-i"],
          description: "Folders to include in backup or sync",
          args: { name: "folders-to-include" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "create",
      description: "Create a Azure Managed Grafana instance",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Azure Managed Grafana",
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
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--principal-ids",
          description:
            "Space-separated Azure AD object ids for users, groups, etc to be made as Grafana Admins. Once provided, CLI won't make the current logon user as Grafana Admin",
          args: { name: "principal-ids" },
        },
        {
          name: "--principal-types",
          description:
            "Space-separated Azure AD principal types to pair with --principal-ids",
          args: {
            name: "principal-types",
            suggestions: ["Group", "ServicePrincipal", "User"],
          },
        },
        {
          name: "--skip-role-assignments",
          description:
            "Do not create role assignments for managed identity and the current login user",
        },
        {
          name: ["--skip-system-assigned-identity", "-s"],
          description: "Do not enable system assigned identity",
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--zone-redundancy",
          description:
            "Indicates whether or not zone redundancy should be enabled. Default: Disabled",
          args: {
            name: "zone-redundancy",
            suggestions: ["Disabled", "Enabled"],
          },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a Azure Managed Grafana instance",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Azure Managed Grafana",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "list",
      description: "List Azure Managed Grafana instances",
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
      name: "restore",
      description: "Restore an Azure Managed Grafana instance from an achive",
      options: [
        {
          name: ["--archive-file", "-a"],
          description: "Archive to restore Grafana artifacts from",
          args: { name: "archive-file" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Azure Managed Grafana",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--components", "-c"],
          description: "Grafana artifact types to backup",
          args: {
            name: "components",
            suggestions: [
              "annotations",
              "dashboards",
              "datasources",
              "folders",
              "snapshots",
            ],
          },
        },
        {
          name: ["--remap-data-sources", "-r"],
          description:
            "During restoration, update dashboards to reference data sources defined at the destination workspace through name matching",
          args: { name: "remap-data-sources", suggestions: ["false", "true"] },
        },
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
      description: "Show details of a Azure Managed Grafana instance",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Azure Managed Grafana",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "update",
      description: "Update a Azure Managed Grafana instance",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Azure Managed Grafana",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--service-account", "--api-key"],
          description:
            "If enabled, you will be able to configur Grafana api keys and service accounts",
          args: {
            name: "service-account",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: ["--deterministic-outbound-ip", "-i"],
          description:
            "If enabled, the Grafana workspace will have fixed egress IPs you can use them in the firewall of datasources",
          args: {
            name: "deterministic-outbound-ip",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--from-address",
          description: "Address used when sending out emails",
          args: { name: "from-address" },
        },
        {
          name: "--from-name",
          description: "Name to be used when sending out emails",
          args: { name: "from-name" },
        },
        {
          name: "--host",
          description: "Smtp server url(port included)",
          args: { name: "host" },
        },
        {
          name: "--password",
          description: "Smtp server user password",
          args: { name: "password" },
        },
        {
          name: ["--public-network-access", "-p"],
          description: "Allow public network access",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--skip-verify",
          description: "Skip verifying SSL for SMTP server",
          args: { name: "skip-verify", suggestions: ["false", "true"] },
        },
        {
          name: "--smtp",
          description: "Allow Grafana to send email",
          args: { name: "smtp", suggestions: ["Disabled", "Enabled"] },
        },
        {
          name: "--start-tls-policy",
          description: "TLS policy",
          args: {
            name: "start-tls-policy",
            suggestions: [
              "MandatoryStartTLS",
              "NoStartTLS",
              "OpportunisticStartTLS",
            ],
          },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--user",
          description: "Smtp server user name",
          args: { name: "user" },
        },
      ],
    },
    {
      name: "dashboard",
      description: "Commands to manage dashboards of an instance",
      subcommands: [
        {
          name: "create",
          description: "Create a new dashboard",
          options: [
            {
              name: "--definition",
              description:
                "The complete dashboard model in json string, a path or url to a file with such content",
              args: { name: "definition" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: "--folder",
              description:
                "Id, uid, title which can identify a folder. CLI will search in the order of id, uid, and title, till finds a match",
              args: { name: "folder" },
            },
            {
              name: "--overwrite",
              description: "Overwrite a dashboard with same uid",
              args: { name: "overwrite", suggestions: ["false", "true"] },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--title",
              description: "Title of a dashboard",
              args: { name: "title" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a dashboard",
          options: [
            {
              name: "--dashboard",
              description: "Dashboard uid",
              args: { name: "dashboard" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "import",
          description: "Import a dashboard",
          options: [
            {
              name: "--definition",
              description:
                "The complete dashboard model in json string, Grafana gallery id, a path or url to a file with such content",
              args: { name: "definition" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: "--folder",
              description:
                "Id, uid, title which can identify a folder. CLI will search in the order of id, uid, and title, till finds a match",
              args: { name: "folder" },
            },
            {
              name: "--overwrite",
              description: "Overwrite a dashboard with same uid",
              args: { name: "overwrite", suggestions: ["false", "true"] },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list",
          description: "List all dashboards of an instance",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
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
          description: "Show the detail of a dashboard",
          options: [
            {
              name: "--dashboard",
              description: "Dashboard uid",
              args: { name: "dashboard" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "sync",
          description:
            'Sync Azure Managed Grafana dashboards from one instance to another instance. Note, dashboards with "provisioned" state will be skipped due to being read-only',
          options: [
            {
              name: ["--destination", "-d"],
              description: "Resource id of the destination workspace",
              args: { name: "destination" },
              isRequired: true,
            },
            {
              name: ["--source", "-s"],
              description: "Resource id of the source workspace",
              args: { name: "source" },
              isRequired: true,
            },
            {
              name: "--dashboards-to-exclude",
              description:
                "Space separated titles of dashboards to exclude in sync. Pair with --folders-to-exclude for folders specific",
              args: { name: "dashboards-to-exclude" },
            },
            {
              name: "--dashboards-to-include",
              description:
                "Space separated titles of dashboards to include in sync. Pair with --folders-to-include for folders specific",
              args: { name: "dashboards-to-include" },
            },
            {
              name: "--dry-run",
              description: "Preview changes w/o committing",
              args: { name: "dry-run", suggestions: ["false", "true"] },
            },
            {
              name: ["--folders-to-exclude", "-e"],
              description: "Folders to exclude in backup or sync",
              args: { name: "folders-to-exclude" },
            },
            {
              name: ["--folders-to-include", "-i"],
              description: "Folders to include in backup or sync",
              args: { name: "folders-to-include" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a dashboard",
          options: [
            {
              name: "--definition",
              description:
                "The complete dashboard model in json string, a path or url to a file with such content",
              args: { name: "definition" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: "--folder",
              description:
                "Id, uid, title which can identify a folder. CLI will search in the order of id, uid, and title, till finds a match",
              args: { name: "folder" },
            },
            {
              name: "--overwrite",
              description: "Overwrite a dashboard with same uid",
              args: { name: "overwrite", suggestions: ["false", "true"] },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "data-source",
      description: "Commands to manage data sources of an instance",
      subcommands: [
        {
          name: "create",
          description: "Create a data source",
          options: [
            {
              name: "--definition",
              description:
                "Json string with data source definition, or a path to a file with such content",
              args: { name: "definition" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a data source",
          options: [
            {
              name: "--data-source",
              description:
                "Name, id, uid which can identify a data source. CLI will search in the order of name, id, and uid, till finds a match",
              args: { name: "data-source" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list",
          description: "List all data sources of an instance",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "query",
          description: "Query a data source having backend implementation",
          options: [
            {
              name: "--data-source",
              description:
                "Name, id, uid which can identify a data source. CLI will search in the order of name, id, and uid, till finds a match",
              args: { name: "data-source" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: "--conditions",
              description:
                "Space-separated condition in a format of <name>=<value>",
              args: { name: "conditions" },
            },
            {
              name: "--from",
              description:
                "Start time in iso 8601, e.g. '2022-01-02T16:15:00'. Default: 1 hour early",
              args: { name: "from" },
            },
            {
              name: "--internal-ms",
              description:
                "The time interval in milliseconds of time series. Default: 1000",
              args: { name: "internal-ms" },
            },
            {
              name: "--max-data-points",
              description:
                "Maximum amount of data points that dashboard panel can render. Default: 1000",
              args: { name: "max-data-points" },
            },
            {
              name: "--query-format",
              description: "Format of the resule, e.g. table, time_series",
              args: { name: "query-format" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--to",
              description:
                "End time in iso 8601, e.g. '2022-01-02T17:15:00'. Default: current time",
              args: { name: "to" },
            },
          ],
        },
        {
          name: "show",
          description: "Get details of a data source",
          options: [
            {
              name: "--data-source",
              description:
                "Name, id, uid which can identify a data source. CLI will search in the order of name, id, and uid, till finds a match",
              args: { name: "data-source" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a data source",
          options: [
            {
              name: "--data-source",
              description:
                "Name, id, uid which can identify a data source. CLI will search in the order of name, id, and uid, till finds a match",
              args: { name: "data-source" },
              isRequired: true,
            },
            {
              name: "--definition",
              description:
                "Json string with data source definition, or a path to a file with such content",
              args: { name: "definition" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "folder",
      description: "Commands to manage folders of an instance",
      subcommands: [
        {
          name: "create",
          description: "Create a new folder",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--title",
              description: "Title of the folder",
              args: { name: "title" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a folder",
          options: [
            {
              name: "--folder",
              description:
                "Id, uid, title which can identify a folder. CLI will search in the order of id, uid, and title, till finds a match",
              args: { name: "folder" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list",
          description: "List all folders of an instance",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
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
          description: "Show the details of a folder",
          options: [
            {
              name: "--folder",
              description:
                "Id, uid, title which can identify a folder. CLI will search in the order of id, uid, and title, till finds a match",
              args: { name: "folder" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a folder",
          options: [
            {
              name: "--folder",
              description:
                "Id, uid, title which can identify a folder. CLI will search in the order of id, uid, and title, till finds a match",
              args: { name: "folder" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--title",
              description: "Title of the folder",
              args: { name: "title" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "notification-channel",
      description:
        "Commands to manage notification channels of an instance.\n\n\t\tAs part of legacy alerting, this command group will be deprecated in a future release",
      subcommands: [
        {
          name: "create",
          description: "Create a notification channel",
          options: [
            {
              name: "--definition",
              description:
                "Json string with notification channel definition, or a path to a file with such content",
              args: { name: "definition" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a notification channel",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--notification-channel",
              description:
                "Id, uid which can identify a data source. CLI will search in the order of id, and uid, till finds a match",
              args: { name: "notification-channel" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list",
          description: "List all notification channels of an instance",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--short",
              description: "List notification channels in short format",
            },
          ],
        },
        {
          name: "show",
          description: "Get details of a notification channel",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--notification-channel",
              description:
                "Id, uid which can identify a data source. CLI will search in the order of id, and uid, till finds a match",
              args: { name: "notification-channel" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "test",
          description: "Tests a notification channels",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--notification-channel",
              description:
                "Id, uid which can identify a data source. CLI will search in the order of id, and uid, till finds a match",
              args: { name: "notification-channel" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a notification channel",
          options: [
            {
              name: "--definition",
              description:
                "Json string with notification channel definition, or a path to a file with such content",
              args: { name: "definition" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--notification-channel",
              description:
                "Id, uid which can identify a data source. CLI will search in the order of id, and uid, till finds a match",
              args: { name: "notification-channel" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "service-account",
      description: "Commands to manage service accounts",
      subcommands: [
        {
          name: "create",
          description: "Create a new service account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--service-account",
              description: "Service account name",
              args: { name: "service-account" },
              isRequired: true,
            },
            {
              name: "--is-disabled",
              description: "Disable the service account. default: false",
              args: { name: "is-disabled", suggestions: ["false", "true"] },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--role", "-r"],
              description: "Grafana role name",
              args: {
                name: "role",
                suggestions: ["Admin", "Editor", "Viewer"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a service account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--service-account",
              description: "Id or name which can identify a service account",
              args: { name: "service-account" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list",
          description: "List existing service accounts",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
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
          description: "Show details of a service account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--service-account",
              description: "Id or name which can identify a service account",
              args: { name: "service-account" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a service account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--service-account",
              description: "Id or name which can identify a service account",
              args: { name: "service-account" },
              isRequired: true,
            },
            {
              name: "--is-disabled",
              description: "Disable the service account. default: false",
              args: { name: "is-disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--new-name",
              description: "New name of the service account",
              args: { name: "new-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--role", "-r"],
              description: "Grafana role name",
              args: {
                name: "role",
                suggestions: ["Admin", "Editor", "Viewer"],
              },
            },
          ],
        },
        {
          name: "token",
          description: "Commands to manage service account tokens",
          subcommands: [
            {
              name: "create",
              description: "Create a new service account token",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure Managed Grafana",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--service-account",
                  description:
                    "Id or name which can identify a service account",
                  args: { name: "service-account" },
                  isRequired: true,
                },
                {
                  name: "--token",
                  description: "Name of the new service account token",
                  args: { name: "token" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--time-to-live",
                  description:
                    "The life duration. For example, 1d if your key is going to last fr one day. Supported units are: s,m,h,d,w,M,y",
                  args: { name: "time-to-live" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a service account token",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure Managed Grafana",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--service-account",
                  description:
                    "Id or name which can identify a service account",
                  args: { name: "service-account" },
                  isRequired: true,
                },
                {
                  name: "--token",
                  description:
                    "Id or name which can identify a service account token",
                  args: { name: "token" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "list",
              description: "List existing service account tokens",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure Managed Grafana",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--service-account",
                  description:
                    "Id or name which can identify a service account",
                  args: { name: "service-account" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "user",
      description: "Commands to manage users of an instance",
      subcommands: [
        {
          name: "actual-user",
          description: "Show details of current user",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list",
          description: "List users",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
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
          description: "Show detail of a user",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Managed Grafana",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--user",
              description: "User login name or email",
              args: { name: "user" },
              isRequired: true,
            },
            {
              name: ["--api-key", "--token", "-t"],
              description:
                "Api key or service account token, a randomly generated string used to interact with Grafana endpoint; if missing, CLI will use logon user's credentials",
              args: { name: "api-key" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
