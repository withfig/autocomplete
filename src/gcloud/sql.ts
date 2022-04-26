const completionSpec: Fig.Spec = {
  name: "sql",
  description: "Create and manage Google Cloud SQL databases",
  subcommands: [
    {
      name: "backups",
      description:
        "Provide commands for working with backups of Cloud SQL instances",
      subcommands: [
        {
          name: "create",
          description: "Creates a backup of a Cloud SQL instance",
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
              name: "--description",
              description: "A friendly description of the backup",
              args: {
                name: "DESCRIPTION",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
                suggestions: [],
              },
              priority: 100,
            },
            {
              name: "--location",
              description:
                "Choose where to store your backup. Backups are stored in the closest multi-region location to you by default. Only customize if needed",
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
        {
          name: "delete",
          description: "Delete a backup of a Cloud SQL instance",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
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
            name: "ID",
            description:
              "The ID of the backup run. You can find the ID by running\n            $ gcloud beta sql backups list",
          },
        },
        {
          name: "describe",
          description: "Retrieves information about a backup",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
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
            name: "ID",
            description: "The ID of the Backup Run",
          },
        },
        {
          name: "list",
          description: "Lists all backups associated with a given instance",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
                suggestions: [],
              },
              priority: 100,
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
          name: "restore",
          description: "Restores a backup of a Cloud SQL instance",
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
              name: "--backup-instance",
              description:
                "The ID of the instance that the backup was taken from",
              args: {
                name: "BACKUP_INSTANCE",
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
              name: "--restore-instance",
              description: "Cloud SQL instance ID that will be restored",
              args: {
                name: "RESTORE_INSTANCE",
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
          args: {
            name: "BACKUP_ID",
            description: "The ID of the backup run to restore from",
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
      name: "connect",
      description: "Connects to a Cloud SQL instance",
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
          name: "--database",
          description: "The SQL Server database to connect to",
          args: {
            name: "DATABASE",
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
          name: "--user",
          description: "Cloud SQL instance user to connect as",
          args: {
            name: "USER",
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
        name: "INSTANCE",
        description: "Cloud SQL instance ID",
      },
    },
    {
      name: "databases",
      description:
        "Provide commands for managing databases of Cloud SQL instances",
      subcommands: [
        {
          name: "create",
          description: "Creates a database for a Cloud SQL instance",
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
              name: "--charset",
              description:
                "Cloud SQL database charset setting, which specifies the set of symbols and encodings used to store the data in your database. Each database version may support a different set of charsets",
              args: {
                name: "CHARSET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--collation",
              description:
                "Cloud SQL database collation setting, which specifies the set of rules for comparing characters in a character set. Each database version may support a different set of collations. For PostgreSQL database versions, this may only be set to the collation of the template database",
              args: {
                name: "COLLATION",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
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
            name: "DATABASE",
            description: "Cloud SQL database name",
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud SQL database",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
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
            name: "DATABASE",
            description: "Cloud SQL database name",
          },
        },
        {
          name: "describe",
          description:
            "Displays configuration and metadata about a Cloud SQL database",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
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
            name: "DATABASE",
            description: "Cloud SQL database name",
          },
        },
        {
          name: "list",
          description: "Lists databases for a Cloud SQL instance",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
                suggestions: [],
              },
              priority: 100,
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
          name: "patch",
          description: "Patches the settings of a Cloud SQL database",
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
              name: "--charset",
              description:
                "Cloud SQL database charset setting, which specifies the set of symbols and encodings used to store the data in your database. Each database version may support a different set of charsets",
              args: {
                name: "CHARSET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--collation",
              description:
                "Cloud SQL database collation setting, which specifies the set of rules for comparing characters in a character set. Each database version may support a different set of collations. For PostgreSQL database versions, this may only be set to the collation of the template database",
              args: {
                name: "COLLATION",
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
              name: "--diff",
              description: "Show what changed as a result of the patch",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
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
            name: "DATABASE",
            description: "Cloud SQL database name",
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
      name: "export",
      description: "Provide commands to export Cloud SQL instances",
      subcommands: [
        {
          name: "bak",
          description: "Export data from a Cloud SQL instance to a BAK file",
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
              name: "--database",
              description:
                "Database from which the export is made. Information on requirements can be found here: https://cloud.google.com/sql/docs/sqlserver/admin-api/v1beta4/instances/export#exportContext.databases",
              args: {
                name: "DATABASE",
                description: "List",
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
          args: [
            {
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails",
            },
          ],
        },
        {
          name: "csv",
          description: "Exports data from a Cloud SQL instance to a CSV file",
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
              name: "--database",
              description:
                "Database(s) from which the export is made. Information on requirements can be found here: https://cloud.google.com/sql/docs/mysql/admin-api/v1beta4/instances/export#exportContext.databases",
              args: {
                name: "DATABASE",
                description: "List",
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
              name: "--offload",
              description:
                "Offload an export to a temporary instance. Doing so reduces strain on source instances and allows other operations to be performed while the export is in progress",
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
              name: "--query",
              description:
                "A SQL SELECT query (e.g., SELECT * FROM table) that specifies the data to export",
              args: {
                name: "QUERY",
                description: "String",
                suggestions: [],
              },
              priority: 100,
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
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails. If the filename ends with .gz, the contents are compressed",
            },
          ],
        },
        {
          name: "sql",
          description: "Exports data from a Cloud SQL instance to a SQL file",
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
              name: "--database",
              description:
                "Database(s) from which the export is made. Information on requirements can be found here: https://cloud.google.com/sql/docs/mysql/admin-api/v1beta4/instances/export#exportContext.databases",
              args: {
                name: "DATABASE",
                description: "List",
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
              name: "--offload",
              description:
                "Offload an export to a temporary instance. Doing so reduces strain on source instances and allows other operations to be performed while the export is in progress",
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
              name: "--table",
              description:
                "Tables to export from the specified database. If you specify tables, specify one and only one database. For PostgreSQL instances, only one table can be exported at a time",
              args: {
                name: "TABLE",
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
          ],
          args: [
            {
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails. If the filename ends with .gz, the contents are compressed",
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
      name: "flags",
      description: "Provide a command to list flags",
      subcommands: [
        {
          name: "list",
          description: "List customizable flags for Google Cloud SQL instances",
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
              name: "--database-version",
              description:
                "The database engine type and version. If left unspecified, the API defaults will be used. _DATABASE_VERSION_ must be one of: *MYSQL_5_6*, *MYSQL_5_7*, *MYSQL_8_0*, *POSTGRES_9_6*, *POSTGRES_10*, *POSTGRES_11*, *POSTGRES_12*, *POSTGRES_13*, *SQLSERVER_2017_EXPRESS*, *SQLSERVER_2017_WEB*, *SQLSERVER_2017_STANDARD*, *SQLSERVER_2017_ENTERPRISE*",
              args: {
                name: "DATABASE_VERSION",
                description: "String",
                suggestions: [
                  "MYSQL_5_6",
                  "MYSQL_5_7",
                  "MYSQL_8_0",
                  "POSTGRES_9_6",
                  "POSTGRES_10",
                  "POSTGRES_11",
                  "POSTGRES_12",
                  "POSTGRES_13",
                  "SQLSERVER_2017_EXPRESS",
                  "SQLSERVER_2017_WEB",
                  "SQLSERVER_2017_STANDARD",
                  "SQLSERVER_2017_ENTERPRISE",
                ],
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
      name: "import",
      description: "Provides commands to import Cloud SQL instances",
      subcommands: [
        {
          name: "bak",
          description: "Import data into a Cloud SQL instance from a BAK file",
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
              name: "--cert-path",
              description:
                "Path to the encryption certificate file in Google Cloud Storage associated with the BAK file. The URI is in the form `gs://bucketName/fileName`",
              args: {
                name: "CERT_PATH",
                description: "String",
                suggestions: [],
              },
              priority: 100,
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
              name: "--database",
              description: "A new database into which the import is made",
              args: {
                name: "DATABASE",
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
              name: "--prompt-for-pvk-password",
              description:
                "Prompt for the private key password associated with the BAK file with character echo disabled. The password is all typed characters up to but not including the RETURN or ENTER key",
            },
            {
              name: "--pvk-password",
              description:
                "The private key password associated with the BAK file",
              args: {
                name: "PVK_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--pvk-path",
              description:
                "Path to the encryption private key file in Google Cloud Storage associated with the BAK file. The URI is in the form `gs://bucketName/fileName`",
              args: {
                name: "PVK_PATH",
                description: "String",
                suggestions: [],
              },
              priority: 100,
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
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "Path to the BAK file file in Google Cloud Storage from which the import is made. The URI is in the form `gs://bucketName/fileName`",
            },
          ],
        },
        {
          name: "csv",
          description: "Imports data into a Cloud SQL instance from a CSV file",
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
              name: "--columns",
              description:
                "The columns to import from csv file. These correspond to actual database columns to import. If not set, all columns from csv file are imported to corresponding database columns",
              args: {
                name: "COLUMNS",
                description: "List",
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
              name: "--database",
              description:
                "The database (for example, guestbook) to which the import is made",
              args: {
                name: "DATABASE",
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
              name: "--table",
              description: "The database table to import csv file into",
              args: {
                name: "TABLE",
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
              name: "--user",
              description: "PostgreSQL user for this import operation",
              args: {
                name: "USER",
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
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "Path to the CSV file in Google Cloud Storage from which the import is made. The URI is in the form `gs://bucketName/fileName`. Compressed gzip files (.gz) are also supported",
            },
          ],
        },
        {
          name: "sql",
          description:
            "Imports data into a Cloud SQL instance from a SQL dump file",
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
              name: "--database",
              description:
                "Database to which the import is made. If not set, it is assumed that the database is specified in the file to be imported. If your SQL dump file includes a database statement, it will override the database set in this flag",
              args: {
                name: "DATABASE",
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
              name: "--user",
              description: "PostgreSQL user for this import operation",
              args: {
                name: "USER",
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
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "Path to the MySQL dump file in Google Cloud Storage from which the import is made. The URI is in the form `gs://bucketName/fileName`. Compressed gzip files (.gz) are also supported",
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
      name: "instances",
      description: "Provide commands for managing Cloud SQL instances",
      subcommands: [
        {
          name: "clone",
          description: "Clones a Cloud SQL instance",
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
              name: "--bin-log-file-name",
              description:
                "The name of the binary log file. Enable point-in-time recovery on the\nsource instance to create a binary log file. If specified with\n<--bin-log-position> to form a valid binary log coordinate, it defines an\nearlier point in time to clone a source instance from.\nFor example, mysql-bin.000001",
              args: {
                name: "BIN_LOG_FILE_NAME",
                description: "String",
                suggestions: [],
              },
              priority: 100,
            },
            {
              name: "--bin-log-position",
              description:
                "Represents the state of an instance at any given point in time inside a\nbinary log file. If specified along with <--bin-log-file-name> to form a\nvalid binary log coordinate, it defines an earlier point in time to clone\na source instance from.\nFor example, 123 (a numeric value)",
              args: {
                name: "BIN_LOG_POSITION",
                description: "String",
                suggestions: [],
              },
              priority: 100,
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
              name: "--point-in-time",
              description:
                "Represents the state of an instance at any given point in time inside a\nwrite-ahead log file. Enable point-in-time recovery on the source\ninstance to create a write-ahead log file. Uses RFC 3339 format in UTC\ntimezone. If specified, defines a past state of the instance to clone.\nFor example, '2012-11-15T16:19:00.094Z'",
              args: {
                name: "POINT_IN_TIME",
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
              name: "SOURCE",
              description: "Cloud SQL instance ID of the source",
            },
            {
              name: "DESTINATION",
              description: "Cloud SQL instance ID of the clone",
            },
          ],
        },
        {
          name: "create",
          description: "Creates a new Cloud SQL instance",
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
              name: "--activation-policy",
              description:
                "Activation policy for this instance. This specifies when the instance should be activated and is applicable only when the instance state is `RUNNABLE`. The default is `on-demand`. More information on activation policies can be found here: https://cloud.google.com/sql/faq#activation_policy. _ACTIVATION_POLICY_ must be one of: *always*, *never*, *on-demand*",
              args: {
                name: "ACTIVATION_POLICY",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["always", "never", "on-demand"],
              },
            },
            {
              name: "--assign-ip",
              description:
                "Assign a public IP address to the instance. This is a public, externally available IPv4 address that you can use to connect to your instance when properly authorized. Use --assign-ip to enable a public IP and --no-assign-ip to disable it. Use *--assign-ip* to enable and *--no-assign-ip* to disable",
            },
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to\ncomplete",
            },
            {
              name: "--authorized-networks",
              description:
                "The list of external networks that are allowed to connect to the instance. Specified in CIDR notation, also known as 'slash' notation (e.g. 192.168.100.0/24)",
              args: {
                name: "NETWORK",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--availability-type",
              description:
                "Specifies level of availability. _AVAILABILITY_TYPE_ must be one of:\n+\n*regional*::: Provides high availability and is recommended for production instances; instance automatically fails over to another zone within your selected region.\n*zonal*::: Provides no failover capability. This is the default.\n:::\n+",
              args: {
                name: "AVAILABILITY_TYPE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["regional", "zonal"],
              },
            },
            {
              name: "--backup",
              description:
                "Enables daily backup. Enabled by default, use *--no-backup* to disable",
            },
            {
              name: "--backup-location",
              description:
                "Choose where to store your backups. Backups are stored in the closest multi-region location to you by default. Only customize if needed",
              args: {
                name: "BACKUP_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--backup-start-time",
              description:
                "Start time of daily backups, specified in the 24 hour format - HH:MM, in the UTC timezone",
              args: {
                name: "BACKUP_START_TIME",
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
              name: "--collation",
              description:
                "Cloud SQL server-level collation setting, which specifies the set of rules for comparing characters in a character set",
              args: {
                name: "COLLATION",
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
              name: "--cpu",
              description:
                "Whole number value indicating how many cores are desired in the machine. Both --cpu and --memory must be specified if a custom machine type is desired, and the --tier flag must be omitted",
              args: {
                name: "CPU",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-flags",
              description:
                "Comma-separated list of database flags to set on the instance. Use an equals sign to separate flag name and value. Flags without values, like skip_grant_tables, can be written out without a value after, e.g., `skip_grant_tables=`. Use on/off for booleans. View the Instance Resource API for allowed flags. (e.g., `--database-flags max_allowed_packet=55555,skip_grant_tables=,log_output=1`)",
              args: {
                name: "FLAG=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--database-version",
              description:
                "The database engine type and version. If left unspecified, the API defaults will be used. _DATABASE_VERSION_ must be one of: *MYSQL_5_6*, *MYSQL_5_7*, *MYSQL_8_0*, *POSTGRES_9_6*, *POSTGRES_10*, *POSTGRES_11*, *POSTGRES_12*, *POSTGRES_13*, *SQLSERVER_2017_EXPRESS*, *SQLSERVER_2017_WEB*, *SQLSERVER_2017_STANDARD*, *SQLSERVER_2017_ENTERPRISE*",
              args: {
                name: "DATABASE_VERSION",
                description: "String",
                suggestions: [
                  "MYSQL_5_6",
                  "MYSQL_5_7",
                  "MYSQL_8_0",
                  "POSTGRES_9_6",
                  "POSTGRES_10",
                  "POSTGRES_11",
                  "POSTGRES_12",
                  "POSTGRES_13",
                  "SQLSERVER_2017_EXPRESS",
                  "SQLSERVER_2017_WEB",
                  "SQLSERVER_2017_STANDARD",
                  "SQLSERVER_2017_ENTERPRISE",
                ],
              },
            },
            {
              name: "--deny-maintenance-period-end-date",
              description:
                'Date when the deny maintenance period ends, that is ``2021-01-10"',
              args: {
                name: "DENY_MAINTENANCE_PERIOD_END_DATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--deny-maintenance-period-start-date",
              description:
                'Date when the deny maintenance period begins,\n       that is ``2020-11-01"',
              args: {
                name: "DENY_MAINTENANCE_PERIOD_START_DATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--deny-maintenance-period-time",
              description:
                'Time when the deny maintenance period starts or ends,\n       that is ``05:00:00"',
              args: {
                name: "DENY_MAINTENANCE_PERIOD_TIME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--disk-encryption-key",
              description:
                "ID of the key or fully qualified identifier for the key",
              args: {
                name: "DISK_ENCRYPTION_KEY",
                description: "String",
                suggestions: [],
              },
              priority: 100,
            },
            {
              name: "--disk-encryption-key-keyring",
              description: "The KMS keyring of the key",
              args: {
                name: "DISK_ENCRYPTION_KEY_KEYRING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--disk-encryption-key-location",
              description: "The Cloud location for the key",
              args: {
                name: "DISK_ENCRYPTION_KEY_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--disk-encryption-key-project",
              description: "The Cloud project for the key",
              args: {
                name: "DISK_ENCRYPTION_KEY_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-bin-log",
              description:
                "Allows for data recovery from a specific point in time, down to a fraction of a second. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs",
            },
            {
              name: "--enable-point-in-time-recovery",
              description:
                "Allows for data recovery from a specific point in time, down to a fraction of a second, via write-ahead logs. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs",
            },
            {
              name: "--failover-replica-name",
              description:
                "Also create a failover replica with the specified name",
              args: {
                name: "FAILOVER_REPLICA_NAME",
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
              name: "--gce-zone",
              description:
                "(DEPRECATED) Preferred Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.).\n+\nFlag `--gce-zone` is deprecated and will be removed by release 255.0.0. Use `--zone` instead",
              args: {
                name: "GCE_ZONE",
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
              name: "--insights-config-query-insights-enabled",
              description:
                "Enable query insights feature to provide query and query plan\n        analytics. To disable this feature, use\n        `--no-insights-config-query-insights-enabled` instead",
            },
            {
              name: "--insights-config-query-string-length",
              description:
                "Query string length in bytes to be stored by the query insights\n        feature. Default length is 1024 bytes. Allowed range: 256 to 4500\n        bytes",
              args: {
                name: "INSIGHTS_CONFIG_QUERY_STRING_LENGTH",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--insights-config-record-application-tags",
              description:
                "Allow application tags to be recorded by the query insights\n        feature. To disable application tag recording, use\n        `--no-insights-record-application-tags` flag instead",
            },
            {
              name: "--insights-config-record-client-address",
              description:
                "Allow the client address to be recorded by the query insights\n        feature. To disable client address recording, use\n        `--no-insights-config-record-client-address` instead",
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
            },
            {
              name: "--maintenance-release-channel",
              description:
                "Which channel's updates to apply during the maintenance window. If not specified, Cloud SQL chooses the timing of updates to your instance. _MAINTENANCE_RELEASE_CHANNEL_ must be one of:\n+\n*preview*::: Preview updates release prior to production updates. You may wish to use the preview channel for dev/test applications so that you can preview their compatibility with your application prior to the production release.\n*production*::: Production updates are stable and recommended for applications in production.\n:::\n+",
              args: {
                name: "MAINTENANCE_RELEASE_CHANNEL",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["preview", "production"],
              },
            },
            {
              name: "--maintenance-window-day",
              description:
                "Day of week for maintenance window, in UTC time zone. _MAINTENANCE_WINDOW_DAY_ must be one of: *SUN*, *MON*, *TUE*, *WED*, *THU*, *FRI*, *SAT*",
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
              },
            },
            {
              name: "--maintenance-window-hour",
              description:
                "Hour of day for maintenance window, in UTC time zone",
              args: {
                name: "MAINTENANCE_WINDOW_HOUR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--master-instance-name",
              description:
                "Name of the instance which will act as master in the replication setup. The newly created instance will be a read replica of the specified master instance",
              args: {
                name: "MASTER_INSTANCE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--memory",
              description:
                "Whole number value indicating how much memory is desired in the machine. A size unit should be provided (eg. 3072MiB or 9GiB) - if no units are specified, GiB is assumed. Both --cpu and --memory must be specified if a custom machine type is desired, and the --tier flag must be omitted",
              args: {
                name: "MEMORY",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
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
              name: "--region",
              description:
                "Regional location (e.g. asia-east1, us-east1). See the full list of regions at https://cloud.google.com/sql/docs/instance-locations",
              args: {
                name: "REGION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--replica-type",
              description:
                "The type of replica to create. _REPLICA_TYPE_ must be one of: *READ*, *FAILOVER*",
              args: {
                name: "REPLICA_TYPE",
                description: "String",
                suggestions: ["READ", "FAILOVER"],
              },
            },
            {
              name: "--replication",
              description:
                "Type of replication this instance uses. The default is synchronous. _REPLICATION_ must be one of: *synchronous*, *asynchronous*",
              args: {
                name: "REPLICATION",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["synchronous", "asynchronous"],
              },
            },
            {
              name: "--require-ssl",
              description: "Specified if users connecting over IP must use SSL",
            },
            {
              name: "--retained-backups-count",
              description:
                "How many backups to keep. The valid range is between 1 and 365. The default value is 7 if not specified. Applicable only if --no-backups is not specified",
              args: {
                name: "RETAINED_BACKUPS_COUNT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--retained-transaction-log-days",
              description:
                "How many days of transaction logs to keep. The valid range is between 1 and 7. The default value is 7 if not specified. Only valid when point in time recovery is enabled. Keeping more days of transaction logs requires bigger storage size",
              args: {
                name: "RETAINED_TRANSACTION_LOG_DAYS",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--root-password",
              description: "Root Cloud SQL user's password",
              args: {
                name: "ROOT_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--storage-auto-increase",
              description:
                "Storage size can be increased, but it cannot be decreased; storage increases are permanent for the life of the instance. With this setting enabled, a spike in storage requirements can result in permanently increased storage costs for your instance. However, if an instance runs out of available space, it can result in the instance going offline, dropping existing connections. This setting is enabled by default",
            },
            {
              name: "--storage-size",
              description:
                "Amount of storage allocated to the instance. Must be an integer number of GB. The default is 10GB. Information on storage limits can be found here: https://cloud.google.com/sql/docs/quotas#storage_limits",
              args: {
                name: "STORAGE_SIZE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            {
              name: "--storage-type",
              description:
                "The storage type for the instance. The default is SSD. _STORAGE_TYPE_ must be one of: *SSD*, *HDD*",
              args: {
                name: "STORAGE_TYPE",
                description: "String",
                suggestions: ["SSD", "HDD"],
              },
            },
            {
              name: "--tier",
              description:
                "The tier for this instance. For Second Generation instances, TIER is the instance's machine type (e.g., db-n1-standard-1). For PostgreSQL instances, only shared-core machine types (e.g., db-f1-micro) apply. A complete list of tiers is available here: https://cloud.google.com/sql/pricing",
              args: {
                name: "TIER",
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
            {
              name: "--zone",
              description:
                "Preferred Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.)",
              args: {
                name: "ZONE",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud SQL instance",
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
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "describe",
          description:
            "Displays configuration and metadata about a Cloud SQL instance",
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
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "export",
          description: "*(DEPRECATED)*  Exports data from a Cloud SQL instance",
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
              name: "--database",
              description:
                "Database(s) from which the export is made. Information on requirements can be found here: https://cloud.google.com/sql/docs/mysql/admin-api/v1beta4/instances/export#exportContext.databases",
              args: {
                name: "DATABASE",
                description: "List",
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
              name: "--table",
              description:
                "Tables to export from the specified database. If you specify tables, specify one and only one database. For Postgres instances, only one table can be exported at a time",
              args: {
                name: "TABLE",
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
          ],
          args: [
            {
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails. If the filename ends with .gz, the contents are compressed",
            },
          ],
        },
        {
          name: "failover",
          description:
            "Causes a high-availability Cloud SQL instance to failover",
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
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "import",
          description:
            "*(DEPRECATED)*  Imports data into a Cloud SQL instance from Google Cloud Storage",
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
              name: "--database",
              description:
                "Database to which the import is made. If not set, it is assumed that the database is specified in the file to be imported. If your SQL dump file includes a database statement, it will override the database set in this flag",
              args: {
                name: "DATABASE",
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
          args: [
            {
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "Path to the MySQL dump file in Google Cloud Storage from which the import is made. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported",
            },
          ],
        },
        {
          name: "list",
          description: "Lists Cloud SQL instances in a given project",
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
          name: "patch",
          description: "Updates the settings of a Cloud SQL instance",
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
              name: "--activation-policy",
              description:
                "Activation policy for this instance. This specifies when the instance should be activated and is applicable only when the instance state is `RUNNABLE`. The default is `on-demand`. More information on activation policies can be found here: https://cloud.google.com/sql/faq#activation_policy. _ACTIVATION_POLICY_ must be one of: *always*, *never*, *on-demand*",
              args: {
                name: "ACTIVATION_POLICY",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["always", "never", "on-demand"],
              },
            },
            {
              name: "--assign-ip",
              description:
                "Assign a public IP address to the instance. This is a public, externally available IPv4 address that you can use to connect to your instance when properly authorized. Use --assign-ip to enable a public IP and --no-assign-ip to disable it. Use *--assign-ip* to enable and *--no-assign-ip* to disable",
            },
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to\ncomplete",
            },
            {
              name: "--authorized-gae-apps",
              description:
                "First Generation instances only. List of project IDs for App Engine applications running in the Standard environment that can access this instance.\n+\nThe value given for this argument *replaces* the existing list",
              args: {
                name: "APP",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--authorized-networks",
              description:
                "The list of external networks that are allowed to connect to the instance. Specified in CIDR notation, also known as 'slash' notation (e.g. 192.168.100.0/24).\n+\nThe value given for this argument *replaces* the existing list",
              args: {
                name: "NETWORK",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--availability-type",
              description:
                "Specifies level of availability. _AVAILABILITY_TYPE_ must be one of:\n+\n*regional*::: Provides high availability and is recommended for production instances; instance automatically fails over to another zone within your selected region.\n*zonal*::: Provides no failover capability. This is the default.\n:::\n+",
              args: {
                name: "AVAILABILITY_TYPE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["regional", "zonal"],
              },
            },
            {
              name: "--backup-location",
              description:
                "Choose where to store your backups. Backups are stored in the closest multi-region location to you by default. Only customize if needed. Specify empty string to revert to default",
              args: {
                name: "BACKUP_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--backup-start-time",
              description:
                "Start time of daily backups, specified in the 24 hour format - HH:MM, in the UTC timezone",
              args: {
                name: "BACKUP_START_TIME",
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
              name: "--clear-authorized-networks",
              description:
                "Clear the list of external networks that are allowed to connect to the instance",
            },
            {
              name: "--clear-database-flags",
              description:
                "Clear the database flags set on the instance. WARNING: Instance will be restarted",
            },
            {
              name: "--clear-gae-apps",
              description:
                "Specified to clear the list of App Engine apps that can access this instance",
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
              name: "--cpu",
              description:
                "Whole number value indicating how many cores are desired in the machine. Both --cpu and --memory must be specified if a custom machine type is desired, and the --tier flag must be omitted",
              args: {
                name: "CPU",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-flags",
              description:
                "Comma-separated list of database flags to set on the instance. Use an equals sign to separate flag name and value. Flags without values, like skip_grant_tables, can be written out without a value after, e.g., `skip_grant_tables=`. Use on/off for booleans. View the Instance Resource API for allowed flags. (e.g., `--database-flags max_allowed_packet=55555,skip_grant_tables=,log_output=1`)",
              args: {
                name: "FLAG=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--deny-maintenance-period-end-date",
              description:
                'Date when the deny maintenance period ends, that is ``2021-01-10"',
              args: {
                name: "DENY_MAINTENANCE_PERIOD_END_DATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--deny-maintenance-period-start-date",
              description:
                'Date when the deny maintenance period begins,\n       that is ``2020-11-01"',
              args: {
                name: "DENY_MAINTENANCE_PERIOD_START_DATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--deny-maintenance-period-time",
              description:
                'Time when the deny maintenance period starts or ends,\n       that is ``05:00:00"',
              args: {
                name: "DENY_MAINTENANCE_PERIOD_TIME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--diff",
              description: "Show what changed as a result of the update",
            },
            {
              name: "--enable-bin-log",
              description:
                "Allows for data recovery from a specific point in time, down to a fraction of a second. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs. Use *--enable-bin-log* to enable and *--no-enable-bin-log* to disable",
            },
            {
              name: "--enable-database-replication",
              description:
                "Enable database replication. Applicable only for read replica instance(s). WARNING: Instance will be restarted. Use *--enable-database-replication* to enable and *--no-enable-database-replication* to disable",
            },
            {
              name: "--enable-point-in-time-recovery",
              description:
                "Allows for data recovery from a specific point in time, down to a fraction of a second, via write-ahead logs. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs",
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
              name: "--follow-gae-app",
              description:
                "First Generation instances only. The App Engine app this instance should follow. It must be in the same region as the instance. WARNING: Instance may be restarted",
              args: {
                name: "FOLLOW_GAE_APP",
                description: "String",
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
              name: "--gce-zone",
              description:
                "(DEPRECATED) Preferred Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.). WARNING: Instance may be restarted.\n+\nFlag `--gce-zone` is deprecated and will be removed by release 255.0.0. Use `--zone` instead",
              args: {
                name: "GCE_ZONE",
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
              name: "--insights-config-query-insights-enabled",
              description:
                "Enable query insights feature to provide query and query plan\n        analytics. To disable this feature, use\n        `--no-insights-config-query-insights-enabled` instead",
            },
            {
              name: "--insights-config-query-string-length",
              description:
                "Query string length in bytes to be stored by the query insights\n        feature. Default length is 1024 bytes. Allowed range: 256 to 4500\n        bytes",
              args: {
                name: "INSIGHTS_CONFIG_QUERY_STRING_LENGTH",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--insights-config-record-application-tags",
              description:
                "Allow application tags to be recorded by the query insights\n        feature. To disable application tag recording, use\n        `--no-insights-record-application-tags` flag instead",
            },
            {
              name: "--insights-config-record-client-address",
              description:
                "Allow the client address to be recorded by the query insights\n        feature. To disable client address recording, use\n        `--no-insights-config-record-client-address` instead",
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
            },
            {
              name: "--maintenance-release-channel",
              description:
                "Which channel's updates to apply during the maintenance window. If not specified, Cloud SQL chooses the timing of updates to your instance. _MAINTENANCE_RELEASE_CHANNEL_ must be one of:\n+\n*preview*::: Preview updates release prior to production updates. You may wish to use the preview channel for dev/test applications so that you can preview their compatibility with your application prior to the production release.\n*production*::: Production updates are stable and recommended for applications in production.\n:::\n+",
              args: {
                name: "MAINTENANCE_RELEASE_CHANNEL",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["preview", "production"],
              },
            },
            {
              name: "--maintenance-window-any",
              description: "Removes the user-specified maintenance window",
            },
            {
              name: "--maintenance-window-day",
              description:
                "Day of week for maintenance window, in UTC time zone. _MAINTENANCE_WINDOW_DAY_ must be one of: *SUN*, *MON*, *TUE*, *WED*, *THU*, *FRI*, *SAT*",
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
              },
            },
            {
              name: "--maintenance-window-hour",
              description:
                "Hour of day for maintenance window, in UTC time zone",
              args: {
                name: "MAINTENANCE_WINDOW_HOUR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--memory",
              description:
                "Whole number value indicating how much memory is desired in the machine. A size unit should be provided (eg. 3072MiB or 9GiB) - if no units are specified, GiB is assumed. Both --cpu and --memory must be specified if a custom machine type is desired, and the --tier flag must be omitted",
              args: {
                name: "MEMORY",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            {
              name: "--no-backup",
              description: "Specified if daily backup should be disabled",
            },
            {
              name: "--pricing-plan",
              description:
                "First Generation instances only. The pricing plan for this instance. _PRICING_PLAN_ must be one of: *PER_USE*, *PACKAGE*",
              args: {
                name: "PRICING_PLAN",
                description: "String",
                suggestions: ["PER_USE", "PACKAGE"],
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
              name: "--remove-deny-maintenance-period",
              description: "Removes the user-specified deny maintenance period",
            },
            {
              name: "--replication",
              description:
                "Type of replication this instance uses. The default is synchronous. _REPLICATION_ must be one of: *synchronous*, *asynchronous*",
              args: {
                name: "REPLICATION",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["synchronous", "asynchronous"],
              },
            },
            {
              name: "--require-ssl",
              description:
                "Mysqld should default to 'REQUIRE X509' for users connecting over IP. Use *--require-ssl* to enable and *--no-require-ssl* to disable",
            },
            {
              name: "--retained-backups-count",
              description:
                "How many backups to keep. The valid range is between 1 and 365. The default value is 7 if not specified. Applicable only if --no-backups is not specified",
              args: {
                name: "RETAINED_BACKUPS_COUNT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--retained-transaction-log-days",
              description:
                "How many days of transaction logs to keep. The valid range is between 1 and 7. The default value is 7 if not specified. Only valid when point in time recovery is enabled. Keeping more days of transaction logs requires bigger storage size",
              args: {
                name: "RETAINED_TRANSACTION_LOG_DAYS",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--storage-auto-increase",
              description:
                "Storage size can be increased, but it cannot be decreased; storage increases are permanent for the life of the instance. With this setting enabled, a spike in storage requirements can result in permanently increased storage costs for your instance. However, if an instance runs out of available space, it can result in the instance going offline, dropping existing connections. This setting is enabled by default",
            },
            {
              name: "--storage-size",
              description:
                "Amount of storage allocated to the instance. Must be an integer number of GB. The default is 10GB. Information on storage limits can be found here: https://cloud.google.com/sql/docs/quotas#storage_limits",
              args: {
                name: "STORAGE_SIZE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            {
              name: "--tier",
              description:
                "The tier for this instance. For Second Generation instances, TIER is the instance's machine type (e.g., db-n1-standard-1). For PostgreSQL instances, only shared-core machine types (e.g., db-f1-micro) apply. A complete list of tiers is available here: https://cloud.google.com/sql/pricing. WARNING: Instance will be restarted",
              args: {
                name: "TIER",
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
            {
              name: "--zone",
              description:
                "Preferred Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.). WARNING: Instance may be restarted",
              args: {
                name: "ZONE",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "promote-replica",
          description:
            "Promotes Cloud SQL read replica to a stand-alone instance",
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
            name: "REPLICA",
            description: "Cloud SQL read replica ID",
          },
        },
        {
          name: "reset-ssl-config",
          description:
            "Deletes all client certificates and generates a new server certificate",
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
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "restart",
          description: "Restarts a Cloud SQL instance",
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
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "restore-backup",
          description: "Restores a backup of a Cloud SQL instance",
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
              name: "--backup-id",
              description: "The ID of the backup run to restore from",
              args: {
                name: "BACKUP_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--backup-instance",
              description:
                "The ID of the instance that the backup was taken from",
              args: {
                name: "BACKUP_INSTANCE",
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
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID that will be restored",
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
      description:
        "Provide commands for working with Cloud SQL instance operations",
      subcommands: [
        {
          name: "describe",
          description:
            "Retrieves information about a Cloud SQL instance operation",
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
          args: {
            name: "OPERATION",
            description: "Name that uniquely identifies the operation",
          },
        },
        {
          name: "list",
          description:
            "Lists all instance operations for the given Cloud SQL instance",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
                suggestions: [],
              },
              priority: 100,
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
          description: "Waits for one or more operations to complete",
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
              name: "--timeout",
              description:
                "Maximum number of seconds to wait for an operation to complete. By default, wait for 300s. Set to *unlimited* to wait indefinitely",
              args: {
                name: "TIMEOUT",
                description: "Int",
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
          args: {
            name: "OPERATION",
            description: "An identifier that uniquely identifies the operation",
            isVariadic: true,
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
      name: "reschedule-maintenance",
      description: "Reschedule a Cloud SQL instance's maintenance",
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
          name: "--reschedule-type",
          description:
            "The type of reschedule operation to perform. _RESCHEDULE_TYPE_ must be one of: *IMMEDIATE*, *NEXT_AVAILABLE_WINDOW*, *SPECIFIC_TIME*",
          args: {
            name: "RESCHEDULE_TYPE",
            description: "String",
            suggestions: [
              "IMMEDIATE",
              "NEXT_AVAILABLE_WINDOW",
              "SPECIFIC_TIME",
            ],
          },
          priority: 100,
        },
        {
          name: "--schedule-time",
          description:
            "When specifying SPECIFIC_TIME, the date and time at which to schedule the maintenance in ISO 8601 format",
          args: {
            name: "SCHEDULE_TIME",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
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
      args: {
        name: "INSTANCE",
        description: "Cloud SQL instance ID",
      },
    },
    {
      name: "ssl",
      description:
        "Provide commands for managing SSL certificates of Cloud SQL instances",
      subcommands: [
        {
          name: "client-certs",
          description:
            "Provide commands for managing client certificates of Cloud SQL instances",
          subcommands: [
            {
              name: "create",
              description:
                "Create a client certificate for a Cloud SQL instance",
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
                  name: "--instance",
                  description: "Cloud SQL instance ID",
                  args: {
                    name: "INSTANCE",
                    description: "String",
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
                  name: "COMMON_NAME",
                  description:
                    "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
                },
                {
                  name: "CERT_FILE",
                  description:
                    "Location of file which the private key of the created ssl-cert will be written to",
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a client certificate for a Cloud SQL instance",
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
                  name: "--instance",
                  description: "Cloud SQL instance ID",
                  args: {
                    name: "INSTANCE",
                    description: "String",
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
                name: "COMMON_NAME",
                description:
                  "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
              },
            },
            {
              name: "describe",
              description:
                "Retrieve information about a client cert for a Cloud SQL instance",
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
                  name: "--instance",
                  description: "Cloud SQL instance ID",
                  args: {
                    name: "INSTANCE",
                    description: "String",
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
                name: "COMMON_NAME",
                description:
                  "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
              },
            },
            {
              name: "list",
              description: "List all client certs for a Cloud SQL instance",
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
                  name: "--instance",
                  description: "Cloud SQL instance ID",
                  args: {
                    name: "INSTANCE",
                    description: "String",
                    suggestions: [],
                  },
                  priority: 100,
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
      name: "ssl-certs",
      description:
        "*(DEPRECATED)*  Provide commands for managing SSL certificates of Cloud SQL instances",
      subcommands: [
        {
          name: "create",
          description:
            "*(DEPRECATED)*  Creates an SSL certificate for a Cloud SQL instance",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
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
              name: "COMMON_NAME",
              description:
                "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
            },
            {
              name: "CERT_FILE",
              description:
                "Location of file which the private key of the created ssl-cert will be written to",
            },
          ],
        },
        {
          name: "delete",
          description:
            "*(DEPRECATED)*  Deletes an SSL certificate for a Cloud SQL instance",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
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
            name: "COMMON_NAME",
            description:
              "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
          },
        },
        {
          name: "describe",
          description:
            "*(DEPRECATED)*  Retrieves information about an SSL cert for a Cloud SQL instance",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
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
            name: "COMMON_NAME",
            description:
              "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
          },
        },
        {
          name: "list",
          description:
            "*(DEPRECATED)*  Lists all SSL certs for a Cloud SQL instance",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
                suggestions: [],
              },
              priority: 100,
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
      name: "tiers",
      description: "Provide a command to list tiers",
      subcommands: [
        {
          name: "list",
          description: "Lists all available service tiers for Google Cloud SQL",
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
      name: "users",
      description: "Provide commands for managing Cloud SQL users",
      subcommands: [
        {
          name: "create",
          description: "Creates a user in a given instance",
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
              name: "--host",
              description:
                "Cloud SQL user's host name expressed as a specific IP address or address range. `%` denotes an unrestricted host name. Applicable flag for MySQL instances; ignored for all other engines. Note, if you connect to your instance using IP addresses, you must add your client IP address as an Authorized Address, even if your host name is unrestricted. For help on how to do so, read: https://cloud.google.com/sql/docs/mysql/configure-ip",
              args: {
                name: "HOST",
                description: "String",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
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
              name: "--password",
              description: "Cloud SQL user's password",
              args: {
                name: "PASSWORD",
                description: "String",
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
            name: "USERNAME",
            description: "Cloud SQL username",
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud SQL user in a given instance",
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
              name: "--host",
              description:
                "Cloud SQL user's host name expressed as a specific IP address or address range. `%` denotes an unrestricted host name. Applicable flag for MySQL instances; ignored for all other engines. Note, if you connect to your instance using IP addresses, you must add your client IP address as an Authorized Address, even if your host name is unrestricted. For help on how to do so, read: https://cloud.google.com/sql/docs/mysql/configure-ip",
              args: {
                name: "HOST",
                description: "String",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
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
            name: "USERNAME",
            description: "Cloud SQL username",
          },
        },
        {
          name: "list",
          description: "Lists Cloud SQL users in a given instance",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
                suggestions: [],
              },
              priority: 100,
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
          name: "set-password",
          description: "Changes a user's password in a given instance",
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
              name: "--host",
              description:
                "Cloud SQL user's host name expressed as a specific IP address or address range. `%` denotes an unrestricted host name. Applicable flag for MySQL instances; ignored for all other engines. Note, if you connect to your instance using IP addresses, you must add your client IP address as an Authorized Address, even if your host name is unrestricted. For help on how to do so, read: https://cloud.google.com/sql/docs/mysql/configure-ip",
              args: {
                name: "HOST",
                description: "String",
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
              name: "--instance",
              description: "Cloud SQL instance ID",
              args: {
                name: "INSTANCE",
                description: "String",
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
              name: "--password",
              description: "Cloud SQL user's password",
              args: {
                name: "PASSWORD",
                description: "String",
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
              name: "--prompt-for-password",
              description:
                "Prompt for the Cloud SQL user's password with character echo disabled. The password is all typed characters up to but not including the RETURN or ENTER key",
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
            name: "USERNAME",
            description: "Cloud SQL username",
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
