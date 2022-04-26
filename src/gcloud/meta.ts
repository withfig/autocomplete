const completionSpec: Fig.Spec = {
  name: "meta",
  description: "Cloud meta introspection commands",
  subcommands: [
    {
      name: "apis",
      description: "Inspect the APIs registered in gcloud",
      subcommands: [
        {
          name: "collections",
          description: "Inspect the API collections registered in gcloud",
          subcommands: [
            {
              name: "describe",
              description: "Describe the details of a collection for an API",
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
                  name: "--api-version",
                  description:
                    "The version of the given API to use. If not provided, the default version of the API will be used",
                  args: {
                    name: "API_VERSION",
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
                name: "COLLECTION",
                description: "The name of the collection to get the details of",
              },
            },
            {
              name: "lint",
              description:
                "Show which collections have non-compliant list API methods",
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
                  name: "--api",
                  description: "The name of the API to get the collections for",
                  args: {
                    name: "API",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--api-version",
                  description:
                    "The version of the given API to use. If not provided, the default version of the API will be used",
                  args: {
                    name: "API_VERSION",
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
              description: "List the resource collections for an API",
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
                  name: "--api",
                  description: "The name of the API to get the collections for",
                  args: {
                    name: "API",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--api-version",
                  description:
                    "The version of the given API to use. If not provided, the default version of the API will be used",
                  args: {
                    name: "API_VERSION",
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
          name: "describe",
          description: "Describe the details of an API registered in gcloud",
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
              name: "--api-version",
              description:
                "The version of the given API to use. If not provided, the default version of the API will be used",
              args: {
                name: "API_VERSION",
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
            name: "API_NAME",
            description: "The name of the API to show the details of",
          },
        },
        {
          name: "discovery",
          description:
            "Inspect the Google Cloud Platform APIs through the discovery service",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the details of an API in discovery service",
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
                name: "API",
                description: "The api_name/api_version to show the details of",
              },
            },
            {
              name: "list",
              description: "List the APIs available via discovery service",
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
          name: "list",
          description: "List the APIs registered in gcloud",
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
          name: "messages",
          description: "Inspect the API messages in an API",
          subcommands: [
            {
              name: "describe",
              description: "Describe the details of a proto message in an API",
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
                  name: "--api",
                  description: "The name of the API to get the attributes for",
                  args: {
                    name: "API",
                    description: "String",
                    suggestions: [],
                  },
                  priority: 100,
                },
                {
                  name: "--api-version",
                  description:
                    "The version of the given API to use. If not provided, the default version of the API will be used",
                  args: {
                    name: "API_VERSION",
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
                name: "MESSAGE",
                description: "The name of the message you want to describe",
              },
            },
            {
              name: "generate-export-schemas",
              description:
                "Generate YAML export schemas for a message in a given API",
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
                  name: "--api",
                  description: "The name of the API to get the attributes for",
                  args: {
                    name: "API",
                    description: "String",
                    suggestions: [],
                  },
                  priority: 100,
                },
                {
                  name: "--api-version",
                  description:
                    "The version of the given API to use. If not provided, the default version of the API will be used",
                  args: {
                    name: "API_VERSION",
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
                  name: "--directory",
                  description:
                    "The path name of the directory to create the YAML export schema files in. If not specified then the files are created in the current directory",
                  args: {
                    name: "DIRECTORY",
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
                name: "MESSAGE",
                description:
                  "The name of the message to generate the YAML export schemas for",
              },
            },
            {
              name: "list",
              description: "List the proto messages for an API",
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
                  name: "--api",
                  description: "The name of the API to get the attributes for",
                  args: {
                    name: "API",
                    description: "String",
                    suggestions: [],
                  },
                  priority: 100,
                },
                {
                  name: "--api-version",
                  description:
                    "The version of the given API to use. If not provided, the default version of the API will be used",
                  args: {
                    name: "API_VERSION",
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
          name: "methods",
          description:
            "Inspect the methods for an API collection registered in gcloud",
          subcommands: [
            {
              name: "call",
              description: "Calls an API method with specific parameters",
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
                  name: "--api-version",
                  description:
                    "The version of the given API to use. If not provided, the default version of the API will be used",
                  args: {
                    name: "API_VERSION",
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
                  name: "--collection",
                  description:
                    "The name of the collection to specify the method for",
                  args: {
                    name: "COLLECTION",
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
                  name: "--raw",
                  description:
                    "For list commands, the response is flattened to return the items as a list rather than returning the list response verbatim. Use this flag to disable this behavior and return the raw response",
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
                name: "METHOD",
                description: "The name of the API method to invoke",
              },
            },
            {
              name: "describe",
              description: "Describe the details of a collection for an API",
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
                  name: "--api-version",
                  description:
                    "The version of the given API to use. If not provided, the default version of the API will be used",
                  args: {
                    name: "API_VERSION",
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
                  name: "--collection",
                  description:
                    "The name of the collection to specify the method for",
                  args: {
                    name: "COLLECTION",
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
                name: "METHOD",
                description: "The name of the method to get the details of",
              },
            },
            {
              name: "list",
              description:
                "List the methods of a resource collection for an API",
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
                  name: "--api-version",
                  description:
                    "The version of the given API to use. If not provided, the default version of the API will be used",
                  args: {
                    name: "API_VERSION",
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
                  name: "--collection",
                  description:
                    "The name of the collection to specify the method for",
                  args: {
                    name: "COLLECTION",
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
          name: "regen",
          description: "Regenerate given API(s) in gcloud",
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
              name: "--api-discovery-doc",
              description:
                "Path to json file describing the api. If not specified, an existing discovery doc will be used",
              args: {
                name: "API_DISCOVERY_DOC",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--base-dir",
              description:
                "Directory where generated code will be written. By default googlecloudsdk/third_party/apis",
              args: {
                name: "BASE_DIR",
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
              name: "--config",
              description:
                "Regeneration config yaml filename. If not specified canonical config will be used",
              args: {
                name: "CONFIG",
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
            name: "API",
            description:
              "The APIs to regenerate in api_name/api_version format. These can be filename glob expressions to regenerate multiple apis. For example */* to regegenerate all apis and versions, or */*beta* to only regenerate existing beta apis. Note that if discovery doc is supplied this cannot contain any wildcards",
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
      name: "cache",
      description: "Cloud SDK persistent cache commands",
      subcommands: [
        {
          name: "completers",
          description: "Cloud SDK resource completer cache commands",
          subcommands: [
            {
              name: "list",
              description:
                "List all Cloud SDK command argument completer objects",
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
              name: "run",
              description: "Cloud SDK completer module tester",
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
                  name: "--attribute",
                  description:
                    "The name of the resource attribute for a resource argument auto-generated completer",
                  args: {
                    name: "ATTRIBUTE",
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
                  name: "--cache",
                  description:
                    'The cache name to operate on. May be prefixed by "resource://" for resource cache names. If only the prefix is specified then the default cache name for that prefix is used',
                  args: {
                    name: "CACHE_NAME",
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
                  name: "--kwargs",
                  description:
                    'Keyword arg dict passed to the completer constructor. For example, use this to set the resource collection and list command for `DeprecatedListCommandCompleter`:\n+\n  --kwargs=collection=...,foo="..."',
                  args: {
                    name: "NAME=VALUE",
                    description: "Dict",
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
                  name: "--qualify",
                  description:
                    "A list of resource parameter names that must always be qualified. This is a manual setting for testing. The CLI sets this automatically",
                  args: {
                    name: "NAME",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--quiet",
                  description:
                    "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
                },
                {
                  name: "--resource-presentation-kwargs",
                  description:
                    "Dict of kwargs to be passed to the presentation spec for the resource argument for which a completer is being tested, such as name, prefixes, plural, flag name overrides (format as a list of semicolon-separated key:value pairs). Prefixes is False by default. Name is the resource spec name by default",
                  args: {
                    name: "RESOURCE_PRESENTATION_KWARGS",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--resource-spec-path",
                  description:
                    "The resource spec path for a resource argument auto-generated completer",
                  args: {
                    name: "RESOURCE_SPEC_PATH",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--stack-trace",
                  description:
                    "Enable all exception stack traces, including Cloud SDK core exceptions. Enabled by default, use *--no-stack-trace* to disable",
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
                name: "MODULE_PATH",
                description:
                  'The completer module path. Run $ gcloud meta completers list` to list the module paths of the available completers. A completer module may declare additional flags. Specify `--help` after _MODULE_PATH_ for details on the module specific flags.\n+\nNOTE: To test resource argument completers, use the module path "googlecloudsdk.command_lib.util.completers:CompleterForAttribute". The flags `--resource-spec-path`, `--attribute`, and (if desired) `--resource-presentation-kwargs` must be provided BEFORE the positional. Unlike with most gcloud commands, the arguments are generated on the fly using the completer you provide, so all the information to create a resource completer needs to be provided up-front. For example:\n+\n  $ {command} --resource-spec-path MODULE_PATH:SPEC_OBJECT --attribute ATTRIBUTE_NAME --resource-presentation-kwargs flag_name_overrides=ATTRIBUTE1:FLAG1;ATTRIBUTE2:FLAG2 googlecloudsdk.command_lib.util.completers:CompleterForAttribute',
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
          name: "delete",
          description: "Delete a persistent cache or tables in the cache",
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
              name: "--cache",
              description:
                'The cache name to operate on. May be prefixed by "resource://" for resource cache names. If only the prefix is specified then the default cache name for that prefix is used',
              args: {
                name: "CACHE_NAME",
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
            name: "TABLES",
            description:
              "The table names or name patterns to delete, where `?` matches any character and ```*``` matches any string of zero or more characters. If omitted then the entire cache is deleted",
          },
        },
        {
          name: "list",
          description:
            "List the tables or table contents in a persistent cache",
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
              name: "--cache",
              description:
                'The cache name to operate on. May be prefixed by "resource://" for resource cache names. If only the prefix is specified then the default cache name for that prefix is used',
              args: {
                name: "CACHE_NAME",
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
          args: {
            name: "TABLES",
            description:
              "The table names or name patterns to list, where `?` matches any character and ```*``` matches any string of zero or more characters. If omitted then a table of all tables is displayed",
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
      name: "cli-trees",
      description: "CLI trees manager",
      subcommands: [
        {
          name: "list",
          description: "List the installed gcloud interactive CLI trees",
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
              name: "--directory",
              description:
                "Insert this directory into the list of directories to search",
              args: {
                name: "DIRECTORY",
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
          description:
            "Updates gcloud CLI command trees in the installation directory",
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
              name: "--commands",
              description: "Update only the commands in this list",
              args: {
                name: "COMMAND",
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
              name: "--directory",
              description:
                "Update this directory instead of the default installation directory",
              args: {
                name: "DIRECTORY",
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
              name: "--force",
              description:
                "Force existing CLI trees to be out of date. This causes them to be regenerated",
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
              name: "--tarball",
              description:
                "For packaging CLI trees. --commands specifies one command that is a relative path in this tarball. The tarball is extracted to a temporary directory and the command path is adjusted to point to the temporary directory",
              args: {
                name: "TARBALL",
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
      name: "debug",
      description:
        "Run an interactive debug console with the Cloud SDK libraries loaded",
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
          name: "--mode",
          description:
            "The debug console mode to run in. _MODE_ must be one of: *ipdb*, *pdb*, *pudb*, *python*",
          args: {
            name: "MODE",
            description: "String",
            suggestions: ["ipdb", "pdb", "pudb", "python"],
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
    },
    {
      name: "flag-coverage-tree",
      description: "Cloud meta introspection commands",
      subcommands: [
        {
          name: "update",
          description: "Generates the flag coverage tree",
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
              name: "--file-path",
              description: "The file path to write the output tree into",
              args: {
                name: "FILE_PATH",
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
            name: "COMMAND/GROUP",
            description:
              "Restrict the listing to these dotted command paths. For example: gcloud.alpha gcloud.beta.test",
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
      name: "generate-command",
      description: "Generate YAML file to implement given command",
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
          name: "--output-dir",
          description:
            "The directory where the generated command YAML files will be written. If not specified then yaml files will not be generated. If no output directory is specified, the new YAML file will be written to stdout",
          args: {
            name: "DIRECTORY",
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
        name: "COLLECTION",
        description: "The name of the collection to generate commands for",
      },
    },
    {
      name: "generate-help-docs",
      description: "Generate and/or update help document directories",
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
          name: "--devsite-dir",
          description:
            "The directory where the generated DevSite reference document subtree will be written. If not specified then DevSite documents will not be generated",
          args: {
            name: "DIRECTORY",
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
          name: "--help-text-dir",
          description:
            "The directory where the generated help text reference document subtree will be written. If not specified then help text documents will not be generated. The --hidden flag is implied for --help-text-dir",
          args: {
            name: "DIRECTORY",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--hidden",
          description: "Include documents for hidden commands and groups",
        },
        {
          name: "--html-dir",
          description:
            "The directory where the standalone manpage HTML files will be generated. index.html contains manpage tree navigation in the left pane. The active command branch and its immediate children are visible and clickable. Hover to navigate the tree. Run `python -m SimpleHTTPServer 8888 &` in DIRECTORY and point your browser at [](http://localhost:8888) to view the manpage tree. If not specified then the HTML manpage site will not be generated",
          args: {
            name: "DIRECTORY",
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
          name: "--linter-dir",
          description:
            "The directory where the generated documentation linter errors for the help text reference document subtree will be written. If not specified then documentation linter documents will not be generated",
          args: {
            name: "DIRECTORY",
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
          name: "--manpage-dir",
          description:
            "The directory where the generated manpage document subtree will be written. The manpage hierarchy is flat with all command documents in the manN/ subdirectory. If not specified then manpage documents will not be generated",
          args: {
            name: "DIRECTORY",
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
          name: "--test",
          description:
            "Show but do not apply --update actions. Exit with non-zero exit status if any help document file must be updated",
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
          name: "--update",
          description:
            "Update destination directories to match the current CLI. Documents for commands not present in the current CLI will be deleted. Use this flag to update the help text golden files after the help_text_test test fails",
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
        name: "COMMAND/GROUP",
        description:
          "Restrict document generation to these dotted command paths. For example: gcloud.alpha gcloud.beta.test",
      },
    },
    {
      name: "lint",
      description: "Validate gcloud flags according to Cloud SDK CLI Style",
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
        name: "CHECKS",
        description:
          "A list of checks to apply to gcloud groups and commands.\nIf omitted will run all available checks.\nAvailable Checks:\n  BadLists          Verifies all flags implement lists properly.\n  WhitelistedNameCheck\n                    Verifies that every command is whitelisted",
      },
    },
    {
      name: "list-commands",
      description: "List all possible gcloud commands excluding flags",
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
          name: "--completions",
          description:
            "Write the static TAB completion data on the standard output. The\ndata is a shell script containing variable definitions of the\nform ```_SC_{COMMAND.PATH}``` for each dotted command path",
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
          name: "--flag-values",
          description:
            "Include the non-global flags and flag values/types for each\ncommand/group. Flags with fixed choice values will be listed as\n--flag=choice1,..., and flags with typed values will be listed\nas --flag=:type:",
        },
        {
          name: "--flags",
          description: "Include the non-global flags for each command/group",
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
          name: "--hidden",
          description: "Include hidden commands and groups",
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
        name: "COMMAND/GROUP",
        description:
          "Restrict the listing to these dotted command paths. For example: gcloud.alpha gcloud.beta.test",
      },
    },
    {
      name: "list-files-for-upload",
      description: "List files for upload",
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
        name: "DIRECTORY",
        description:
          "The directory in which to show what files would be uploaded",
      },
    },
    {
      name: "list-from-json",
      description: "Read JSON data and list it on the standard output",
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
        name: "JSON-FILE",
        description:
          "A file containing JSON data for a single resource or a list of resources of the same type. If omitted then the standard input is read",
      },
    },
    {
      name: "list-gcloud",
      description:
        "List the gcloud CLI command tree with flag, positional and help details",
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
          name: "--branch",
          description:
            'The branch of the CLI subtree to generate as a dotted command path. Mainly used to generate test data. For example, for the `gcloud compute instances` branch use "compute.instances"',
          args: {
            name: "COMMAND_PATH",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--completions",
          description:
            "List the static completion CLI tree. This is a stripped down variant of the CLI tree that only contains the subcommand and flag name dictionaries. The tree is written as a Python source file (~1MiB) that loads fast (~30ms) as a .pyc file",
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
      name: "render-markdown",
      description:
        "Uses gcloud's markdown renderer to render the given markdown file",
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
          name: "--style",
          description:
            "The renderer output format. _STYLE_ must be one of: *devsite*, *html*, *linter*, *man*, *markdown*, *text*",
          args: {
            name: "STYLE",
            description: "String",
            suggestions: [
              "devsite",
              "html",
              "linter",
              "man",
              "markdown",
              "text",
            ],
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
        name: "MD_FILE",
        description:
          "The path to a file containing markdown to render, or `-` to read from stdin",
      },
    },
    {
      name: "resources",
      description: "Cloud SDK resource parser test commands",
      subcommands: [
        {
          name: "generate",
          description: "Cloud SDK resource test URI generator",
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
              name: "--api-version",
              description:
                "The resource collection API version. The collection default is used if not specified",
              args: {
                name: "VERSION",
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
              name: "--collection",
              description:
                "The resource collection name of the resource to parse",
              args: {
                name: "NAME",
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
              name: "--count",
              description: "The number of test resource URIs to generate",
              args: {
                name: "COUNT",
                description: "Int",
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
          name: "parse",
          description: "Cloud SDK resource parser module tester",
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
              name: "--api-version",
              description:
                "The resource collection API version. The collection default is used if not specified",
              args: {
                name: "VERSION",
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
              name: "--collection",
              description:
                "The resource collection name of the resource to parse",
              args: {
                name: "NAME",
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
              name: "--stack-trace",
              description:
                "Enable all exception stack traces, including Cloud SDK core exceptions. Enabled by default, use *--no-stack-trace* to disable",
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
          args: {
            name: "RESOURCES_TO_PARSE",
            description:
              "The list of resource URLs to parse. If not specified then *{command}* enters an interactive loop, prompting for URLs to parse",
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
      name: "test",
      description: "Run miscellaneous gcloud command and CLI test scenarios",
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
          name: "--arg-dict",
          description: "ArgDict flag value test",
          args: {
            name: "ATTRIBUTES",
            description: "Dict",
            suggestions: [],
          },
        },
        {
          name: "--arg-list",
          description: "ArgList flag value test",
          args: {
            name: "ITEMS",
            description: "List",
            suggestions: [],
          },
        },
        {
          name: "--argumenterror-outside-argparse",
          description:
            "Trigger a calliope.parser_errors.ArgumentError exception outside of argparse",
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
          name: "--core-exception",
          description: "Trigger a core exception",
        },
        {
          name: "--exec-file",
          description: "Runs `bash SCRIPT_FILE`",
          args: {
            name: "SCRIPT_FILE",
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
          name: "--interrupt",
          description: "Kill the command with SIGINT",
        },
        {
          name: "--is-interactive",
          description:
            "Call console_io.IsInteractive(heuristic=True) and exit 0 if the return value is True, 1 if False",
        },
        {
          name: "--log-http",
          description:
            "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
        },
        {
          name: "--progress-tracker",
          description: "Run the progress tracker for SECONDS seconds and exit",
          args: {
            name: "SECONDS",
            description: "Float",
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
          name: "--prompt-completer",
          description:
            "Call console_io.PromptResponse() with a MODULE_PATH completer and print the response on the standard output",
          args: {
            name: "MODULE_PATH",
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
          name: "--sleep",
          description: "Sleep for SECONDS seconds and exit",
          args: {
            name: "SECONDS",
            description: "Float",
            suggestions: [],
          },
        },
        {
          name: "--staged-progress-tracker",
          description: "Run example staged progress tracker",
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
          name: "--uncaught-exception",
          description: "Trigger an exception that is not caught",
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
        name: "NAME",
        description: "Command_lib.compute.TestCompleter instance name test",
      },
    },
    {
      name: "validate-yaml",
      description: "Validate a YAML file against a JSON Schema",
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
      args: [
        {
          name: "SCHEMA_FILE",
          description: "The path to a file containing the JSON Schema",
        },
        {
          name: "YAML_FILE",
          description:
            "The path to a file containing YAML / JSON data. Use `-` for the standard input",
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
