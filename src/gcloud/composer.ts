const completionSpec: Fig.Spec = {
  name: "composer",
  description: "Create and manage Cloud Composer Environments",
  subcommands: [
    {
      name: "environments",
      description: "Create and manage Cloud Composer environments",
      subcommands: [
        {
          name: "create",
          description: "Create and initialize a Cloud Composer environment",
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
              args: {
                name: "ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--airflow-configs",
              description:
                "A list of Airflow software configuration override KEY=VALUE pairs to set. For\ninformation on how to structure KEYs and VALUEs, run\n`$ {top_command} help composer environments update`",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--airflow-version",
              description:
                "Version of Airflow to run in the environment.\n+\n      Must be of the form `X.Y[.Z]`.\n+\n      The latest supported Cloud Composer version will be used within\n      the created environment",
              args: {
                name: "AIRFLOW_VERSION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to\ncomplete",
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
              args: {
                name: "BILLING_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--cloud-sql-ipv4-cidr",
              description:
                "IPv4 CIDR range to use for the Cloud SQL network. This should have a size\nof the netmask not greater than 24.\n+\nCannot be specified unless '--enable-private-environment' is also\nspecified",
              args: {
                name: "CLOUD_SQL_IPV4_CIDR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--cluster-ipv4-cidr",
              description:
                "IP address range for the pods in this cluster in CIDR notation\n(e.g. 10.0.0.0/14).\n+\nCannot be specified unless '--enable-ip-alias' is also specified",
              args: {
                name: "CLUSTER_IPV4_CIDR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--cluster-secondary-range-name",
              description:
                "Secondary range to be used as the source for pod IPs. Alias ranges will be\nallocated from this secondary range. NAME must be the name of an existing\nsecondary range in the cluster subnetwork.\n+\nCannot be specified unless '--enable-ip-alias' is also specified",
              args: {
                name: "CLUSTER_SECONDARY_RANGE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
              args: {
                name: "CONFIGURATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--disk-size",
              description:
                "The disk size for each VM node in the environment. The minimum size is 20GB, and the maximum is 64TB. Specified value must be an integer multiple of gigabytes. Cannot be updated after the environment has been created. If units are not provided, defaults to GB",
              args: {
                name: "DISK_SIZE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            {
              name: "--enable-ip-alias",
              description:
                "Enable use of alias IPs (https://cloud.google.com/compute/docs/alias-ip/)\nfor Pod IPs. This will require at least two secondary ranges in the\nsubnetwork, one for the pod IPs and another to reserve space for the\nservices range",
            },
            {
              name: "--enable-private-endpoint",
              description:
                "Environment cluster is managed using the private IP address of the master\nAPI endpoint. Therefore access to the master endpoint must be from\ninternal IP addresses.\n+\nIf not specified, the master API endpoint will be accessible by its public\nIP address.\n+\nCannot be specified unless '--enable-private-environment' is also\nspecified",
            },
            {
              name: "--enable-private-environment",
              description:
                "Environment cluster is created with no public IP addresses on the cluster\nnodes.\n+\nIf not specified, cluster nodes will be assigned public IP addresses.\n+\nCannot be specified unless '--enable-ip-alias' is also specified",
            },
            {
              name: "--env-variables",
              description:
                "A comma-delimited list of environment variable `NAME=VALUE` pairs to provide to the Airflow scheduler, worker, and webserver processes. NAME may contain upper and lowercase letters, digits, and underscores, but they may not begin with a digit. To include commas as part of a `VALUE`, see `{top_command} topics escaping` for information about overriding the delimiter",
              args: {
                name: "NAME=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "KEY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
              args: {
                name: "FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--image-version",
              description:
                "Version of the image to run in the environment.\n+\n      The image version encapsulates the versions of both Cloud Composer\n      and Apache Airflow. Must be of the form\n      `composer-A.B.C[-D.E]-airflow-X.Y[.Z]`.\n+\n      The Cloud Composer and Airflow versions are semantic versions.\n      `latest` can be provided instead of an explicit Cloud Composer\n      version number indicating that the server will replace `latest`\n      with the current Cloud Composer version. For the Apache Airflow\n      portion, the patch version can be omitted and the current\n      version will be selected. The version numbers that are used will\n      be stored",
              args: {
                name: "IMAGE_VERSION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--labels",
              description:
                "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "Compute Engine region in which to create the environment",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
            },
            {
              name: "--machine-type",
              description:
                "The Compute Engine machine type (https://cloud.google.com/compute/docs/machine-types) to use for nodes. For example `--machine-type=n1-standard-1`",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--master-ipv4-cidr",
              description:
                "IPv4 CIDR range to use for the cluste master network. This should have a\nsize of the netmask between 23 and 28.\n+\nCannot be specified unless '--enable-private-environment' is also\nspecified",
              args: {
                name: "MASTER_IPV4_CIDR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--network",
              description:
                "The Compute Engine Network to which the environment will be connected. If a 'Custom Subnet Network' is provided, `--subnetwork` must be specified as well",
              args: {
                name: "NETWORK",
                description: "String",
                suggestions: [],
              },
              priority: 100,
            },
            {
              name: "--node-count",
              description:
                "The number of nodes to create to run the environment",
              args: {
                name: "NODE_COUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oauth-scopes",
              description:
                "The set of Google API scopes to be made available on all of the node VMs. Defaults to ['https://www.googleapis.com/auth/cloud-platform']. Cannot be updated",
              args: {
                name: "SCOPE",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
              args: {
                name: "PROJECT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--python-version",
              description:
                "The Python version to be used within the created environment. Supplied value should represent the desired major Python version. Cannot be updated. _PYTHON_VERSION_ must be one of:\n+\n*2*::: Created environment will use Python 2\n*3*::: Created environment will use Python 3\n:::\n+",
              args: {
                name: "PYTHON_VERSION",
                description: "String",
                suggestions: ["2", "3"],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
            },
            {
              name: "--service-account",
              description:
                'The Google Cloud Platform service account to be used by the node VMs. If a service account is not specified, the "default" Compute Engine service account for the project is used. Cannot be updated',
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--services-ipv4-cidr",
              description:
                "IP range for the services IPs.\n+\nCan be specified as a netmask size (e.g. '/20') or as in CIDR notion\n(e.g. '10.100.0.0/20'). If given as a netmask size, the IP range will\nbe chosen automatically from the available space in the network.\n+\nIf unspecified, the services CIDR range will be chosen with a default\nmask size.\n+\nCannot be specified unless '--enable-ip-alias' is also specified",
              args: {
                name: "SERVICES_IPV4_CIDR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--services-secondary-range-name",
              description:
                "Secondary range to be used for services (e.g. ClusterIPs). NAME must be the\nname of an existing secondary range in the cluster subnetwork.\n+\nCannot be specified unless '--enable-ip-alias' is also specified",
              args: {
                name: "SERVICES_SECONDARY_RANGE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--subnetwork",
              description:
                "The Compute Engine subnetwork (https://cloud.google.com/compute/docs/subnetworks) to which the environment will be connected",
              args: {
                name: "SUBNETWORK",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--tags",
              description:
                "The set of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC 1035. Cannot be updated",
              args: {
                name: "TAG",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
              args: {
                name: "TRACE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
              args: {
                name: "VERBOSITY",
                description: "String",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
            {
              name: "--web-server-ipv4-cidr",
              description:
                "IPv4 CIDR range to use for the Airflow web server network. This should have\na size of the netmask between 24 and 29.\n+\nCannot be specified unless '--enable-private-environment' is also\nspecified",
              args: {
                name: "WEB_SERVER_IPV4_CIDR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--zone",
              description:
                "The Compute Engine zone in which the environment will be created. For example `--zone=us-central1-a`",
              args: {
                name: "ZONE",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment",
          },
        },
        {
          name: "delete",
          description: "Delete one or more Cloud Composer environments",
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
              args: {
                name: "ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to\ncomplete",
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
              args: {
                name: "BILLING_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
              args: {
                name: "CONFIGURATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "KEY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
              args: {
                name: "FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "Compute Engine region in which to create the environments",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
              args: {
                name: "PROJECT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
              args: {
                name: "TRACE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
              args: {
                name: "VERBOSITY",
                description: "String",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: {
            name: "ENVIRONMENTS",
            description:
              "IDs of the environments or fully qualified identifiers for the environments",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Get details about a Cloud Composer environment",
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
              args: {
                name: "ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
              args: {
                name: "BILLING_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
              args: {
                name: "CONFIGURATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "KEY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
              args: {
                name: "FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "Compute Engine region in which to create the environment",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
              args: {
                name: "PROJECT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
              args: {
                name: "TRACE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
              args: {
                name: "VERBOSITY",
                description: "String",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment",
          },
        },
        {
          name: "list",
          description:
            "List the Cloud Composer environments under a project and location",
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
              args: {
                name: "ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
              args: {
                name: "BILLING_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
              args: {
                name: "CONFIGURATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--filter",
              description:
                "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "EXPRESSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "KEY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
              args: {
                name: "FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "LIMIT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--locations",
              description:
                "IDs of the locations or fully qualified identifiers for the locations",
              args: {
                name: "LOCATIONS",
                description: "List",
                suggestions: [],
              },
              priority: 100,
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
            },
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
              args: {
                name: "PAGE_SIZE",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
              args: {
                name: "PROJECT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
            },
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "FIELD",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
              args: {
                name: "TRACE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--uri",
              description:
                "Print a list of resource URIs instead of the default output",
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
              args: {
                name: "VERBOSITY",
                description: "String",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
        },
        {
          name: "run",
          description:
            "Run an Airflow sub-command remotely in a Cloud Composer environment",
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
              args: {
                name: "ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
              args: {
                name: "BILLING_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
              args: {
                name: "CONFIGURATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "KEY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
              args: {
                name: "FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "Compute Engine region in which to create the environment",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
              args: {
                name: "PROJECT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
              args: {
                name: "TRACE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
              args: {
                name: "VERBOSITY",
                description: "String",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "ENVIRONMENT",
              description:
                "ID of the environment or fully qualified identifier for the environment",
            },
            {
              name: "SUBCOMMAND",
              description:
                "The Airflow CLI subcommand to run. Available subcommands include: backfill, clear, connections, dag_state, delete_dag, kerberos, list_dag_runs, list_dags, list_tasks, next_execution, pause, pool, render, run, task_failed_deps, task_state, test, trigger_dag, unpause, variables, version (see https://airflow.apache.org/cli.html for more info). Note that delete_dag is available from Airflow 1.10.1, and list_dag_runs, next_execution are available from Airflow 1.10.2",
            },
            {
              name: "CMD_ARGS",
              description:
                "Command line arguments to the subcommand.\n+\nThe '--' argument must be specified between gcloud specific args on the left and CMD_ARGS on the right. Example:\n+\n{command} myenv trigger_dag -- some_dag --run_id=foo",
            },
          ],
        },
        {
          name: "storage",
          description:
            "Manage Cloud Storage objects stored as part of Cloud Composer environments",
          subcommands: [
            {
              name: "dags",
              description: "Manage DAGs for Cloud Composer environments",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete DAG files from an Cloud Composer environment's Cloud Storage bucket",
                  options: [
                    {
                      name: "--account",
                      description:
                        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                      args: {
                        name: "ACCOUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--billing-project",
                      description:
                        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                      args: {
                        name: "BILLING_PROJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--configuration",
                      description:
                        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                      args: {
                        name: "CONFIGURATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--environment",
                      description:
                        "ID of the environment or fully qualified identifier for the environment",
                      args: {
                        name: "ENVIRONMENT",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--flags-file",
                      description:
                        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                      args: {
                        name: "YAML_FILE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--flatten",
                      description:
                        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                      args: {
                        name: "KEY",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--format",
                      description:
                        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                      args: {
                        name: "FORMAT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--impersonate-service-account",
                      description:
                        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                      args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--location",
                      description:
                        "Compute Engine region in which to create the environment",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--log-http",
                      description:
                        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                    },
                    {
                      name: "--project",
                      description:
                        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                      args: {
                        name: "PROJECT_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--quiet",
                      description:
                        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                    },
                    {
                      name: "--trace-token",
                      description:
                        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                      args: {
                        name: "TRACE_TOKEN",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--user-output-enabled",
                      description:
                        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                    },
                    {
                      name: "--verbosity",
                      description:
                        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                      args: {
                        name: "VERBOSITY",
                        description: "String",
                        suggestions: [
                          "debug",
                          "info",
                          "warning",
                          "error",
                          "critical",
                          "none",
                        ],
                      },
                    },
                  ],
                  args: {
                    name: "TARGET",
                    description:
                      "A relative path to a file or subdirectory to delete within the\ndags Cloud Storage subdirectory. If not specified, the entire contents\nof the dags subdirectory will be deleted",
                  },
                },
                {
                  name: "export",
                  description:
                    "Export DAGs from an environment into local storage or Cloud Storage",
                  options: [
                    {
                      name: "--account",
                      description:
                        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                      args: {
                        name: "ACCOUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--billing-project",
                      description:
                        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                      args: {
                        name: "BILLING_PROJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--configuration",
                      description:
                        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                      args: {
                        name: "CONFIGURATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--destination",
                      description:
                        "The path to an existing local directory or a Cloud Storage\nbucket/directory into which to export files",
                      args: {
                        name: "DESTINATION",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--environment",
                      description:
                        "ID of the environment or fully qualified identifier for the environment",
                      args: {
                        name: "ENVIRONMENT",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--flags-file",
                      description:
                        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                      args: {
                        name: "YAML_FILE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--flatten",
                      description:
                        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                      args: {
                        name: "KEY",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--format",
                      description:
                        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                      args: {
                        name: "FORMAT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--impersonate-service-account",
                      description:
                        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                      args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--location",
                      description:
                        "Compute Engine region in which to create the environment",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--log-http",
                      description:
                        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                    },
                    {
                      name: "--project",
                      description:
                        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                      args: {
                        name: "PROJECT_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--quiet",
                      description:
                        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                    },
                    {
                      name: "--source",
                      description:
                        "An optional relative path to a file or directory to be exported from the\ndags/ subdirectory in the environment's Cloud Storage bucket",
                      args: {
                        name: "SOURCE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--trace-token",
                      description:
                        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                      args: {
                        name: "TRACE_TOKEN",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--user-output-enabled",
                      description:
                        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                    },
                    {
                      name: "--verbosity",
                      description:
                        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                      args: {
                        name: "VERBOSITY",
                        description: "String",
                        suggestions: [
                          "debug",
                          "info",
                          "warning",
                          "error",
                          "critical",
                          "none",
                        ],
                      },
                    },
                  ],
                },
                {
                  name: "import",
                  description:
                    "Import DAGs from local storage or Cloud Storage into an environment",
                  options: [
                    {
                      name: "--account",
                      description:
                        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                      args: {
                        name: "ACCOUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--billing-project",
                      description:
                        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                      args: {
                        name: "BILLING_PROJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--configuration",
                      description:
                        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                      args: {
                        name: "CONFIGURATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--destination",
                      description:
                        "An optional subdirectory under the dags/ directory in the environment's\nCloud Storage bucket into which to import files. May contain forward\nslashes to delimit multiple levels of subdirectory nesting, but should not\ncontain leading or trailing slashes. If the DESTINATION does not exist, it\nwill be created",
                      args: {
                        name: "DESTINATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--environment",
                      description:
                        "ID of the environment or fully qualified identifier for the environment",
                      args: {
                        name: "ENVIRONMENT",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--flags-file",
                      description:
                        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                      args: {
                        name: "YAML_FILE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--flatten",
                      description:
                        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                      args: {
                        name: "KEY",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--format",
                      description:
                        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                      args: {
                        name: "FORMAT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--impersonate-service-account",
                      description:
                        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                      args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--location",
                      description:
                        "Compute Engine region in which to create the environment",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--log-http",
                      description:
                        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                    },
                    {
                      name: "--project",
                      description:
                        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                      args: {
                        name: "PROJECT_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--quiet",
                      description:
                        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                    },
                    {
                      name: "--source",
                      description:
                        "Path to a local directory/file or Cloud Storage bucket/object to be\nimported into the dags/ subdirectory in the environment's Cloud Storage\nbucket. Cloud Storage paths must begin with 'gs://'",
                      args: {
                        name: "SOURCE",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--trace-token",
                      description:
                        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                      args: {
                        name: "TRACE_TOKEN",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--user-output-enabled",
                      description:
                        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                    },
                    {
                      name: "--verbosity",
                      description:
                        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                      args: {
                        name: "VERBOSITY",
                        description: "String",
                        suggestions: [
                          "debug",
                          "info",
                          "warning",
                          "error",
                          "critical",
                          "none",
                        ],
                      },
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List the DAG files for a Cloud Composer environment",
                  options: [
                    {
                      name: "--account",
                      description:
                        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                      args: {
                        name: "ACCOUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--billing-project",
                      description:
                        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                      args: {
                        name: "BILLING_PROJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--configuration",
                      description:
                        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                      args: {
                        name: "CONFIGURATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--environment",
                      description:
                        "ID of the environment or fully qualified identifier for the environment",
                      args: {
                        name: "ENVIRONMENT",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--flags-file",
                      description:
                        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                      args: {
                        name: "YAML_FILE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--flatten",
                      description:
                        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                      args: {
                        name: "KEY",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--format",
                      description:
                        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                      args: {
                        name: "FORMAT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--impersonate-service-account",
                      description:
                        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                      args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--location",
                      description:
                        "Compute Engine region in which to create the environment",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--log-http",
                      description:
                        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                    },
                    {
                      name: "--project",
                      description:
                        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                      args: {
                        name: "PROJECT_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--quiet",
                      description:
                        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                    },
                    {
                      name: "--trace-token",
                      description:
                        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                      args: {
                        name: "TRACE_TOKEN",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--user-output-enabled",
                      description:
                        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                    },
                    {
                      name: "--verbosity",
                      description:
                        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                      args: {
                        name: "VERBOSITY",
                        description: "String",
                        suggestions: [
                          "debug",
                          "info",
                          "warning",
                          "error",
                          "critical",
                          "none",
                        ],
                      },
                    },
                  ],
                },
              ],
              options: [
                {
                  name: "--account",
                  description:
                    "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                  args: {
                    name: "ACCOUNT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--billing-project",
                  description:
                    "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                  args: {
                    name: "BILLING_PROJECT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--configuration",
                  description:
                    "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                  args: {
                    name: "CONFIGURATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--flags-file",
                  description:
                    "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                  args: {
                    name: "YAML_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--flatten",
                  description:
                    "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                  args: {
                    name: "KEY",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--format",
                  description:
                    "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                  args: {
                    name: "FORMAT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                {
                  name: "--impersonate-service-account",
                  description:
                    "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                  args: {
                    name: "SERVICE_ACCOUNT_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--log-http",
                  description:
                    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                },
                {
                  name: "--project",
                  description:
                    "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                  args: {
                    name: "PROJECT_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--quiet",
                  description:
                    "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                },
                {
                  name: "--trace-token",
                  description:
                    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                  args: {
                    name: "TRACE_TOKEN",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--user-output-enabled",
                  description:
                    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                },
                {
                  name: "--verbosity",
                  description:
                    "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                  args: {
                    name: "VERBOSITY",
                    description: "String",
                    suggestions: [
                      "debug",
                      "info",
                      "warning",
                      "error",
                      "critical",
                      "none",
                    ],
                  },
                },
              ],
            },
            {
              name: "data",
              description: "Manage data for Cloud Composer environments",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete data from an Cloud Composer environment's Cloud Storage bucket",
                  options: [
                    {
                      name: "--account",
                      description:
                        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                      args: {
                        name: "ACCOUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--billing-project",
                      description:
                        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                      args: {
                        name: "BILLING_PROJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--configuration",
                      description:
                        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                      args: {
                        name: "CONFIGURATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--environment",
                      description:
                        "ID of the environment or fully qualified identifier for the environment",
                      args: {
                        name: "ENVIRONMENT",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--flags-file",
                      description:
                        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                      args: {
                        name: "YAML_FILE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--flatten",
                      description:
                        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                      args: {
                        name: "KEY",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--format",
                      description:
                        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                      args: {
                        name: "FORMAT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--impersonate-service-account",
                      description:
                        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                      args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--location",
                      description:
                        "Compute Engine region in which to create the environment",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--log-http",
                      description:
                        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                    },
                    {
                      name: "--project",
                      description:
                        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                      args: {
                        name: "PROJECT_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--quiet",
                      description:
                        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                    },
                    {
                      name: "--trace-token",
                      description:
                        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                      args: {
                        name: "TRACE_TOKEN",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--user-output-enabled",
                      description:
                        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                    },
                    {
                      name: "--verbosity",
                      description:
                        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                      args: {
                        name: "VERBOSITY",
                        description: "String",
                        suggestions: [
                          "debug",
                          "info",
                          "warning",
                          "error",
                          "critical",
                          "none",
                        ],
                      },
                    },
                  ],
                  args: {
                    name: "TARGET",
                    description:
                      "A relative path to a file or subdirectory to delete within the\ndata Cloud Storage subdirectory. If not specified, the entire contents\nof the data subdirectory will be deleted",
                  },
                },
                {
                  name: "export",
                  description:
                    "Export data from an environment into local storage or Cloud Storage",
                  options: [
                    {
                      name: "--account",
                      description:
                        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                      args: {
                        name: "ACCOUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--billing-project",
                      description:
                        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                      args: {
                        name: "BILLING_PROJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--configuration",
                      description:
                        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                      args: {
                        name: "CONFIGURATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--destination",
                      description:
                        "The path to an existing local directory or a Cloud Storage\nbucket/directory into which to export files",
                      args: {
                        name: "DESTINATION",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--environment",
                      description:
                        "ID of the environment or fully qualified identifier for the environment",
                      args: {
                        name: "ENVIRONMENT",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--flags-file",
                      description:
                        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                      args: {
                        name: "YAML_FILE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--flatten",
                      description:
                        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                      args: {
                        name: "KEY",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--format",
                      description:
                        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                      args: {
                        name: "FORMAT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--impersonate-service-account",
                      description:
                        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                      args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--location",
                      description:
                        "Compute Engine region in which to create the environment",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--log-http",
                      description:
                        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                    },
                    {
                      name: "--project",
                      description:
                        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                      args: {
                        name: "PROJECT_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--quiet",
                      description:
                        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                    },
                    {
                      name: "--source",
                      description:
                        "An optional relative path to a file or directory to be exported from the\ndata/ subdirectory in the environment's Cloud Storage bucket",
                      args: {
                        name: "SOURCE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--trace-token",
                      description:
                        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                      args: {
                        name: "TRACE_TOKEN",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--user-output-enabled",
                      description:
                        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                    },
                    {
                      name: "--verbosity",
                      description:
                        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                      args: {
                        name: "VERBOSITY",
                        description: "String",
                        suggestions: [
                          "debug",
                          "info",
                          "warning",
                          "error",
                          "critical",
                          "none",
                        ],
                      },
                    },
                  ],
                },
                {
                  name: "import",
                  description:
                    "Import data from local storage or Cloud Storage into an environment",
                  options: [
                    {
                      name: "--account",
                      description:
                        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                      args: {
                        name: "ACCOUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--billing-project",
                      description:
                        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                      args: {
                        name: "BILLING_PROJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--configuration",
                      description:
                        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                      args: {
                        name: "CONFIGURATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--destination",
                      description:
                        "An optional subdirectory under the data/ directory in the environment's\nCloud Storage bucket into which to import files. May contain forward\nslashes to delimit multiple levels of subdirectory nesting, but should not\ncontain leading or trailing slashes. If the DESTINATION does not exist, it\nwill be created",
                      args: {
                        name: "DESTINATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--environment",
                      description:
                        "ID of the environment or fully qualified identifier for the environment",
                      args: {
                        name: "ENVIRONMENT",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--flags-file",
                      description:
                        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                      args: {
                        name: "YAML_FILE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--flatten",
                      description:
                        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                      args: {
                        name: "KEY",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--format",
                      description:
                        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                      args: {
                        name: "FORMAT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--impersonate-service-account",
                      description:
                        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                      args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--location",
                      description:
                        "Compute Engine region in which to create the environment",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--log-http",
                      description:
                        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                    },
                    {
                      name: "--project",
                      description:
                        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                      args: {
                        name: "PROJECT_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--quiet",
                      description:
                        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                    },
                    {
                      name: "--source",
                      description:
                        "Path to a local directory/file or Cloud Storage bucket/object to be\nimported into the data/ subdirectory in the environment's Cloud Storage\nbucket. Cloud Storage paths must begin with 'gs://'",
                      args: {
                        name: "SOURCE",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--trace-token",
                      description:
                        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                      args: {
                        name: "TRACE_TOKEN",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--user-output-enabled",
                      description:
                        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                    },
                    {
                      name: "--verbosity",
                      description:
                        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                      args: {
                        name: "VERBOSITY",
                        description: "String",
                        suggestions: [
                          "debug",
                          "info",
                          "warning",
                          "error",
                          "critical",
                          "none",
                        ],
                      },
                    },
                  ],
                },
                {
                  name: "list",
                  description: "List the data for a Cloud Composer environment",
                  options: [
                    {
                      name: "--account",
                      description:
                        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                      args: {
                        name: "ACCOUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--billing-project",
                      description:
                        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                      args: {
                        name: "BILLING_PROJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--configuration",
                      description:
                        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                      args: {
                        name: "CONFIGURATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--environment",
                      description:
                        "ID of the environment or fully qualified identifier for the environment",
                      args: {
                        name: "ENVIRONMENT",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--flags-file",
                      description:
                        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                      args: {
                        name: "YAML_FILE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--flatten",
                      description:
                        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                      args: {
                        name: "KEY",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--format",
                      description:
                        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                      args: {
                        name: "FORMAT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--impersonate-service-account",
                      description:
                        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                      args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--location",
                      description:
                        "Compute Engine region in which to create the environment",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--log-http",
                      description:
                        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                    },
                    {
                      name: "--project",
                      description:
                        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                      args: {
                        name: "PROJECT_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--quiet",
                      description:
                        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                    },
                    {
                      name: "--trace-token",
                      description:
                        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                      args: {
                        name: "TRACE_TOKEN",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--user-output-enabled",
                      description:
                        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                    },
                    {
                      name: "--verbosity",
                      description:
                        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                      args: {
                        name: "VERBOSITY",
                        description: "String",
                        suggestions: [
                          "debug",
                          "info",
                          "warning",
                          "error",
                          "critical",
                          "none",
                        ],
                      },
                    },
                  ],
                },
              ],
              options: [
                {
                  name: "--account",
                  description:
                    "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                  args: {
                    name: "ACCOUNT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--billing-project",
                  description:
                    "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                  args: {
                    name: "BILLING_PROJECT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--configuration",
                  description:
                    "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                  args: {
                    name: "CONFIGURATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--flags-file",
                  description:
                    "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                  args: {
                    name: "YAML_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--flatten",
                  description:
                    "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                  args: {
                    name: "KEY",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--format",
                  description:
                    "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                  args: {
                    name: "FORMAT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                {
                  name: "--impersonate-service-account",
                  description:
                    "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                  args: {
                    name: "SERVICE_ACCOUNT_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--log-http",
                  description:
                    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                },
                {
                  name: "--project",
                  description:
                    "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                  args: {
                    name: "PROJECT_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--quiet",
                  description:
                    "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                },
                {
                  name: "--trace-token",
                  description:
                    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                  args: {
                    name: "TRACE_TOKEN",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--user-output-enabled",
                  description:
                    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                },
                {
                  name: "--verbosity",
                  description:
                    "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                  args: {
                    name: "VERBOSITY",
                    description: "String",
                    suggestions: [
                      "debug",
                      "info",
                      "warning",
                      "error",
                      "critical",
                      "none",
                    ],
                  },
                },
              ],
            },
            {
              name: "plugins",
              description: "Manage plugins for Cloud Composer environments",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete plugins from an Cloud Composer environment's Cloud Storage bucket",
                  options: [
                    {
                      name: "--account",
                      description:
                        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                      args: {
                        name: "ACCOUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--billing-project",
                      description:
                        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                      args: {
                        name: "BILLING_PROJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--configuration",
                      description:
                        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                      args: {
                        name: "CONFIGURATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--environment",
                      description:
                        "ID of the environment or fully qualified identifier for the environment",
                      args: {
                        name: "ENVIRONMENT",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--flags-file",
                      description:
                        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                      args: {
                        name: "YAML_FILE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--flatten",
                      description:
                        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                      args: {
                        name: "KEY",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--format",
                      description:
                        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                      args: {
                        name: "FORMAT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--impersonate-service-account",
                      description:
                        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                      args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--location",
                      description:
                        "Compute Engine region in which to create the environment",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--log-http",
                      description:
                        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                    },
                    {
                      name: "--project",
                      description:
                        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                      args: {
                        name: "PROJECT_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--quiet",
                      description:
                        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                    },
                    {
                      name: "--trace-token",
                      description:
                        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                      args: {
                        name: "TRACE_TOKEN",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--user-output-enabled",
                      description:
                        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                    },
                    {
                      name: "--verbosity",
                      description:
                        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                      args: {
                        name: "VERBOSITY",
                        description: "String",
                        suggestions: [
                          "debug",
                          "info",
                          "warning",
                          "error",
                          "critical",
                          "none",
                        ],
                      },
                    },
                  ],
                  args: {
                    name: "TARGET",
                    description:
                      "A relative path to a file or subdirectory to delete within the\nplugins Cloud Storage subdirectory. If not specified, the entire contents\nof the plugins subdirectory will be deleted",
                  },
                },
                {
                  name: "export",
                  description:
                    "Export plugins from an environment into local storage or Cloud Storage",
                  options: [
                    {
                      name: "--account",
                      description:
                        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                      args: {
                        name: "ACCOUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--billing-project",
                      description:
                        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                      args: {
                        name: "BILLING_PROJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--configuration",
                      description:
                        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                      args: {
                        name: "CONFIGURATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--destination",
                      description:
                        "The path to an existing local directory or a Cloud Storage\nbucket/directory into which to export files",
                      args: {
                        name: "DESTINATION",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--environment",
                      description:
                        "ID of the environment or fully qualified identifier for the environment",
                      args: {
                        name: "ENVIRONMENT",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--flags-file",
                      description:
                        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                      args: {
                        name: "YAML_FILE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--flatten",
                      description:
                        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                      args: {
                        name: "KEY",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--format",
                      description:
                        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                      args: {
                        name: "FORMAT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--impersonate-service-account",
                      description:
                        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                      args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--location",
                      description:
                        "Compute Engine region in which to create the environment",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--log-http",
                      description:
                        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                    },
                    {
                      name: "--project",
                      description:
                        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                      args: {
                        name: "PROJECT_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--quiet",
                      description:
                        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                    },
                    {
                      name: "--source",
                      description:
                        "An optional relative path to a file or directory to be exported from the\nplugins/ subdirectory in the environment's Cloud Storage bucket",
                      args: {
                        name: "SOURCE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--trace-token",
                      description:
                        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                      args: {
                        name: "TRACE_TOKEN",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--user-output-enabled",
                      description:
                        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                    },
                    {
                      name: "--verbosity",
                      description:
                        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                      args: {
                        name: "VERBOSITY",
                        description: "String",
                        suggestions: [
                          "debug",
                          "info",
                          "warning",
                          "error",
                          "critical",
                          "none",
                        ],
                      },
                    },
                  ],
                },
                {
                  name: "import",
                  description:
                    "Import plugins from local storage or Cloud Storage into an environment",
                  options: [
                    {
                      name: "--account",
                      description:
                        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                      args: {
                        name: "ACCOUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--billing-project",
                      description:
                        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                      args: {
                        name: "BILLING_PROJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--configuration",
                      description:
                        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                      args: {
                        name: "CONFIGURATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--destination",
                      description:
                        "An optional subdirectory under the plugins/ directory in the environment's\nCloud Storage bucket into which to import files. May contain forward\nslashes to delimit multiple levels of subdirectory nesting, but should not\ncontain leading or trailing slashes. If the DESTINATION does not exist, it\nwill be created",
                      args: {
                        name: "DESTINATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--environment",
                      description:
                        "ID of the environment or fully qualified identifier for the environment",
                      args: {
                        name: "ENVIRONMENT",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--flags-file",
                      description:
                        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                      args: {
                        name: "YAML_FILE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--flatten",
                      description:
                        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                      args: {
                        name: "KEY",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--format",
                      description:
                        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                      args: {
                        name: "FORMAT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--impersonate-service-account",
                      description:
                        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                      args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--location",
                      description:
                        "Compute Engine region in which to create the environment",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--log-http",
                      description:
                        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                    },
                    {
                      name: "--project",
                      description:
                        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                      args: {
                        name: "PROJECT_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--quiet",
                      description:
                        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                    },
                    {
                      name: "--source",
                      description:
                        "Path to a local directory/file or Cloud Storage bucket/object to be\nimported into the plugins/ subdirectory in the environment's Cloud Storage\nbucket. Cloud Storage paths must begin with 'gs://'",
                      args: {
                        name: "SOURCE",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--trace-token",
                      description:
                        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                      args: {
                        name: "TRACE_TOKEN",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--user-output-enabled",
                      description:
                        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                    },
                    {
                      name: "--verbosity",
                      description:
                        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                      args: {
                        name: "VERBOSITY",
                        description: "String",
                        suggestions: [
                          "debug",
                          "info",
                          "warning",
                          "error",
                          "critical",
                          "none",
                        ],
                      },
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List the plugins for a Cloud Composer environment",
                  options: [
                    {
                      name: "--account",
                      description:
                        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                      args: {
                        name: "ACCOUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--billing-project",
                      description:
                        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                      args: {
                        name: "BILLING_PROJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--configuration",
                      description:
                        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                      args: {
                        name: "CONFIGURATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--environment",
                      description:
                        "ID of the environment or fully qualified identifier for the environment",
                      args: {
                        name: "ENVIRONMENT",
                        description: "String",
                        suggestions: [],
                      },
                      priority: 100,
                    },
                    {
                      name: "--flags-file",
                      description:
                        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                      args: {
                        name: "YAML_FILE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--flatten",
                      description:
                        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                      args: {
                        name: "KEY",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--format",
                      description:
                        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                      args: {
                        name: "FORMAT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--impersonate-service-account",
                      description:
                        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                      args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--location",
                      description:
                        "Compute Engine region in which to create the environment",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--log-http",
                      description:
                        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                    },
                    {
                      name: "--project",
                      description:
                        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                      args: {
                        name: "PROJECT_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--quiet",
                      description:
                        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                    },
                    {
                      name: "--trace-token",
                      description:
                        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                      args: {
                        name: "TRACE_TOKEN",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--user-output-enabled",
                      description:
                        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                    },
                    {
                      name: "--verbosity",
                      description:
                        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                      args: {
                        name: "VERBOSITY",
                        description: "String",
                        suggestions: [
                          "debug",
                          "info",
                          "warning",
                          "error",
                          "critical",
                          "none",
                        ],
                      },
                    },
                  ],
                },
              ],
              options: [
                {
                  name: "--account",
                  description:
                    "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
                  args: {
                    name: "ACCOUNT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--billing-project",
                  description:
                    "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
                  args: {
                    name: "BILLING_PROJECT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--configuration",
                  description:
                    "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
                  args: {
                    name: "CONFIGURATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--flags-file",
                  description:
                    "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
                  args: {
                    name: "YAML_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--flatten",
                  description:
                    "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
                  args: {
                    name: "KEY",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--format",
                  description:
                    "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
                  args: {
                    name: "FORMAT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                {
                  name: "--impersonate-service-account",
                  description:
                    "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
                  args: {
                    name: "SERVICE_ACCOUNT_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--log-http",
                  description:
                    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                },
                {
                  name: "--project",
                  description:
                    "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
                  args: {
                    name: "PROJECT_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--quiet",
                  description:
                    "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                },
                {
                  name: "--trace-token",
                  description:
                    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
                  args: {
                    name: "TRACE_TOKEN",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--user-output-enabled",
                  description:
                    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
                },
                {
                  name: "--verbosity",
                  description:
                    "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
                  args: {
                    name: "VERBOSITY",
                    description: "String",
                    suggestions: [
                      "debug",
                      "info",
                      "warning",
                      "error",
                      "critical",
                      "none",
                    ],
                  },
                },
              ],
            },
          ],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
              args: {
                name: "ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
              args: {
                name: "BILLING_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
              args: {
                name: "CONFIGURATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "KEY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
              args: {
                name: "FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
              args: {
                name: "PROJECT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
              args: {
                name: "TRACE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
              args: {
                name: "VERBOSITY",
                description: "String",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update properties of a Cloud Composer environment",
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
              args: {
                name: "ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to\ncomplete",
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
              args: {
                name: "BILLING_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--clear-airflow-configs",
              description:
                "Removes all Airflow config overrides from the environment",
            },
            {
              name: "--clear-env-variables",
              description:
                "Removes all environment variables from the environment.\n+\nEnvironment variables that have system-provided defaults cannot be unset\nwith the `--remove-env-variables` or `--clear-env-variables` flags; only\nthe user-supplied overrides will be removed",
            },
            {
              name: "--clear-labels",
              description:
                'Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo set the labels to exactly "foo" and "baz":\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux',
            },
            {
              name: "--clear-pypi-packages",
              description:
                "Removes all PyPI packages from the environment.\n+\nPyPI packages that are required by the environment's core software\ncannot be uninstalled with the `--remove-pypi-packages` or\n`--clear-pypi-packages` flags",
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
              args: {
                name: "CONFIGURATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "KEY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
              args: {
                name: "FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "Compute Engine region in which to create the environment",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
            },
            {
              name: "--node-count",
              description:
                "The new number of nodes running the environment. Must be >= 3",
              args: {
                name: "NODE_COUNT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
              args: {
                name: "PROJECT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
            },
            {
              name: "--remove-airflow-configs",
              description: "A list of Airflow config override keys to remove",
              args: {
                name: "KEY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--remove-env-variables",
              description:
                "A list of environment variables to remove.\n+\nEnvironment variables that have system-provided defaults cannot be unset\nwith the `--remove-env-variables` or `--clear-env-variables` flags; only\nthe user-supplied overrides will be removed",
              args: {
                name: "NAME",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--remove-labels` is applied first",
              args: {
                name: "KEY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--remove-pypi-packages",
              description:
                "A list of PyPI package names to remove.\n+\nPyPI packages that are required by the environment's core software\ncannot be uninstalled with the `--remove-pypi-packages` or\n`--clear-pypi-packages` flags",
              args: {
                name: "PACKAGE",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
              args: {
                name: "TRACE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--update-airflow-configs",
              description:
                "A list of Airflow config override KEY=VALUE pairs to set. If a config\noverride exists, its value is updated; otherwise, a new config override\nis created.\n+\nKEYs should specify the configuration section and property name,\nseparated by a hyphen, for example `core-print_stats_interval`. The\nsection may not contain a closing square brace or period. The property\nname must be non-empty and may not contain an equals sign, semicolon,\nor period. By convention, property names are spelled with\n`snake_case.` VALUEs may contain any character",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--update-env-variables",
              description:
                "A list of environment variable NAME=VALUE pairs to set and provide to the\nAirflow scheduler, worker, and webserver processes. If an environment\nvariable exists, its value is updated; otherwise, a new environment\nvariable is created.\n+\nNAMEs are the environment variable names and may contain upper and\nlowercase letters, digits, and underscores; they must not begin with a\ndigit.\n+\nUser-specified environment variables should not be used to set Airflow\nconfiguration properties. Instead use the `--update-airflow-configs` flag",
              args: {
                name: "NAME=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--update-labels",
              description:
                "List of label KEY=VALUE pairs to update. If a label exists its value is modified, otherwise a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--update-pypi-package",
              description:
                "A PyPI package to add to the environment. If a package exists, its\nvalue is updated; otherwise, a new package is installed.\n+\nThe value takes the form of: `PACKAGE[EXTRAS_LIST]VERSION_SPECIFIER`,\nas one would specify in a pip requirements file.\n+\nPACKAGE is specified as a package name, such as `numpy.` EXTRAS_LIST is\na comma-delimited list of PEP 508 distribution extras that may be\nempty, in which case the enclosing square brackets may be omitted.\nVERSION_SPECIFIER is an optional PEP 440 version specifier. If both\nEXTRAS_LIST and VERSION_SPECIFIER are omitted, the `=` and\neverything to the right may be left empty.\n+\nThis is a repeated argument that can be specified multiple times to\nupdate multiple packages. If PACKAGE appears more than once, the last\nvalue will be used",
              isRepeatable: true,
              args: {
                name: "PACKAGE[EXTRAS_LIST]VERSION_SPECIFIER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--update-pypi-packages-from-file",
              description:
                "The path to a file containing a list of PyPI packages to install in\nthe environment. Each line in the file should contain a package\nspecification in the format of the update-pypi-package argument\ndefined above. The path can be a local file path or a Google Cloud Storage\nfile path (Cloud Storage file path starts with 'gs://')",
              args: {
                name: "UPDATE_PYPI_PACKAGES_FROM_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
              args: {
                name: "VERBOSITY",
                description: "String",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment",
          },
        },
      ],
      options: [
        {
          name: "--account",
          description:
            "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
          args: {
            name: "ACCOUNT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--billing-project",
          description:
            "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
          args: {
            name: "BILLING_PROJECT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--configuration",
          description:
            "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
          args: {
            name: "CONFIGURATION",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--flags-file",
          description:
            "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
          args: {
            name: "YAML_FILE",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--flatten",
          description:
            "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
          args: {
            name: "KEY",
            description: "List",
            suggestions: [],
          },
        },
        {
          name: "--format",
          description:
            "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
          args: {
            name: "FORMAT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        {
          name: "--impersonate-service-account",
          description:
            "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
          args: {
            name: "SERVICE_ACCOUNT_EMAIL",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--log-http",
          description:
            "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
        },
        {
          name: "--project",
          description:
            "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
          args: {
            name: "PROJECT_ID",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--quiet",
          description:
            "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
        },
        {
          name: "--trace-token",
          description:
            "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
          args: {
            name: "TRACE_TOKEN",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--user-output-enabled",
          description:
            "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
        },
        {
          name: "--verbosity",
          description:
            "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
          args: {
            name: "VERBOSITY",
            description: "String",
            suggestions: [
              "debug",
              "info",
              "warning",
              "error",
              "critical",
              "none",
            ],
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Cloud Composer operations",
      subcommands: [
        {
          name: "delete",
          description: "Delete one or more completed Cloud Composer operations",
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
              args: {
                name: "ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
              args: {
                name: "BILLING_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
              args: {
                name: "CONFIGURATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "KEY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
              args: {
                name: "FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "Compute Engine region in which to create the operations",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
              args: {
                name: "PROJECT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
              args: {
                name: "TRACE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
              args: {
                name: "VERBOSITY",
                description: "String",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: {
            name: "OPERATIONS",
            description:
              "IDs of the operations or fully qualified identifiers for the operations",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Get details about an asynchronous operation",
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
              args: {
                name: "ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
              args: {
                name: "BILLING_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
              args: {
                name: "CONFIGURATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "KEY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
              args: {
                name: "FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "Compute Engine region in which to create the operation",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
              args: {
                name: "PROJECT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
              args: {
                name: "TRACE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
              args: {
                name: "VERBOSITY",
                description: "String",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: {
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "Lists environment operations",
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
              args: {
                name: "ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
              args: {
                name: "BILLING_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
              args: {
                name: "CONFIGURATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--filter",
              description:
                "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "EXPRESSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "KEY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
              args: {
                name: "FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "LIMIT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--locations",
              description:
                "IDs of the locations or fully qualified identifiers for the locations",
              args: {
                name: "LOCATIONS",
                description: "List",
                suggestions: [],
              },
              priority: 100,
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
            },
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
              args: {
                name: "PAGE_SIZE",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
              args: {
                name: "PROJECT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
            },
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "FIELD",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
              args: {
                name: "TRACE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--uri",
              description:
                "Print a list of resource URIs instead of the default output",
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
              args: {
                name: "VERBOSITY",
                description: "String",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
        },
        {
          name: "wait",
          description: "Wait for asynchronous operation to complete",
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
              args: {
                name: "ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
              args: {
                name: "BILLING_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
              args: {
                name: "CONFIGURATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "KEY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
              args: {
                name: "FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "Compute Engine region in which to create the operation",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
              args: {
                name: "PROJECT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
              args: {
                name: "TRACE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
              args: {
                name: "VERBOSITY",
                description: "String",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: {
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
      ],
      options: [
        {
          name: "--account",
          description:
            "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
          args: {
            name: "ACCOUNT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--billing-project",
          description:
            "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
          args: {
            name: "BILLING_PROJECT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--configuration",
          description:
            "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
          args: {
            name: "CONFIGURATION",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--flags-file",
          description:
            "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
          args: {
            name: "YAML_FILE",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--flatten",
          description:
            "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
          args: {
            name: "KEY",
            description: "List",
            suggestions: [],
          },
        },
        {
          name: "--format",
          description:
            "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
          args: {
            name: "FORMAT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        {
          name: "--impersonate-service-account",
          description:
            "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
          args: {
            name: "SERVICE_ACCOUNT_EMAIL",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--log-http",
          description:
            "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
        },
        {
          name: "--project",
          description:
            "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
          args: {
            name: "PROJECT_ID",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--quiet",
          description:
            "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
        },
        {
          name: "--trace-token",
          description:
            "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
          args: {
            name: "TRACE_TOKEN",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--user-output-enabled",
          description:
            "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
        },
        {
          name: "--verbosity",
          description:
            "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
          args: {
            name: "VERBOSITY",
            description: "String",
            suggestions: [
              "debug",
              "info",
              "warning",
              "error",
              "critical",
              "none",
            ],
          },
        },
      ],
    },
  ],
  options: [
    {
      name: "--account",
      description:
        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
      args: {
        name: "ACCOUNT",
        description: "String",
        suggestions: [],
      },
    },
    {
      name: "--billing-project",
      description:
        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
      args: {
        name: "BILLING_PROJECT",
        description: "String",
        suggestions: [],
      },
    },
    {
      name: "--configuration",
      description:
        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
      args: {
        name: "CONFIGURATION",
        description: "String",
        suggestions: [],
      },
    },
    {
      name: "--flags-file",
      description:
        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
      args: {
        name: "YAML_FILE",
        description: "String",
        suggestions: [],
      },
    },
    {
      name: "--flatten",
      description:
        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
      args: {
        name: "KEY",
        description: "List",
        suggestions: [],
      },
    },
    {
      name: "--format",
      description:
        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats",
      args: {
        name: "FORMAT",
        description: "String",
        suggestions: [],
      },
    },
    {
      name: "--help",
      description: "Display detailed help",
    },
    {
      name: "--impersonate-service-account",
      description:
        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation",
      args: {
        name: "SERVICE_ACCOUNT_EMAIL",
        description: "String",
        suggestions: [],
      },
    },
    {
      name: "--log-http",
      description:
        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
    },
    {
      name: "--project",
      description:
        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
      args: {
        name: "PROJECT_ID",
        description: "String",
        suggestions: [],
      },
    },
    {
      name: "--quiet",
      description:
        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
    },
    {
      name: "--trace-token",
      description:
        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
      args: {
        name: "TRACE_TOKEN",
        description: "String",
        suggestions: [],
      },
    },
    {
      name: "--user-output-enabled",
      description:
        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
    },
    {
      name: "--verbosity",
      description:
        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
      args: {
        name: "VERBOSITY",
        description: "String",
        suggestions: ["debug", "info", "warning", "error", "critical", "none"],
      },
    },
  ],
};

export default completionSpec;
