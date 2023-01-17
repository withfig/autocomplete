const completionSpec: Fig.Spec = {
  name: "firebase",
  description: "Work with Google Firebase",
  subcommands: [
    {
      name: "test",
      description: "Interact with Firebase Test Lab",
      subcommands: [
        {
          name: "android",
          description: "Command group for Android application testing",
          subcommands: [
            {
              name: "locales",
              description: "Explore Android locales available for testing",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe an Android locale",
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
                    name: "LOCALE",
                    description:
                      "The locale to describe, found using $ {parent_command} list",
                  },
                },
                {
                  name: "list",
                  description:
                    "List all Android locales available for testing internationalized apps",
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
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:Parse",
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
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:Parse",
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
              name: "models",
              description:
                "Explore Android models available in the Test Environment catalog",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe an Android model",
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
                    name: "MODEL_ID",
                    description:
                      "ID of the model to describe, found using $ {parent_command} list",
                  },
                },
                {
                  name: "list",
                  description: "List all Android models available for testing",
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
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:Parse",
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
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:Parse",
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
              name: "run",
              description:
                "Invoke a test in Firebase Test Lab for Android and view test results",
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
                  name: "--additional-apks",
                  description:
                    "A list of up to 100 additional APKs to install, in addition to those being directly tested. The path may be in the local filesystem or in Google Cloud Storage using gs:// notation",
                  args: {
                    name: "APK",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--app",
                  description:
                    "The path to the application binary file. The path may be in the local filesystem or in Google Cloud Storage using gs:// notation. Android App Bundles are specified as .aab, all other files are assumed to be APKs",
                  args: {
                    name: "APP",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--app-package",
                  description:
                    "(REMOVED) The Java package of the application under test. By default, the application package name is parsed from the APK manifest.\n+\nFlag --app-package has been removed",
                  args: {
                    name: "APP_PACKAGE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--async",
                  description:
                    "Invoke a test asynchronously without waiting for test results",
                },
                {
                  name: "--auto-google-login",
                  description:
                    "Automatically log into the test device using a preconfigured Google account before beginning the test. Enabled by default, use --no-auto-google-login to disable",
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
                  name: "--device",
                  description:
                    "A list of ``DIMENSION=VALUE'' pairs which specify a target device to test\nagainst. This flag may be repeated to specify multiple devices. The four\ndevice dimensions are: *model*, *version*, *locale*, and *orientation*. If\nany dimensions are omitted, they will use a default value. The default\nvalue, and all possible values, for each dimension can be found with the\n``list'' command for that dimension, such as `$ {parent_command} models\nlist`. *--device* is now the preferred way to specify test devices and may\nnot be used in conjunction with *--devices-ids*, *--os-version-ids*,\n*--locales*, or *--orientations*. Omitting all of the preceding\ndimension-related flags will run tests against a single device using\ndefaults for all four device dimensions.\n+\nExamples:\n+\n```\n--device model=Nexus6\n--device version=23,orientation=portrait\n--device model=shamu,version=22,locale=zh_CN,orientation=default\n```",
                  args: {
                    name: "DIMENSION=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--device-ids",
                  description:
                    "The list of MODEL_IDs to test against (default: one device model determined by the Firebase Test Lab device catalog; see TAGS listed by the `$ {parent_command} devices list` command)",
                  args: {
                    name: "MODEL_ID",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--directories-to-pull",
                  description:
                    "A list of paths that will be copied from the device's storage to the designated results bucket after the test is complete. These must be absolute paths under `/sdcard`, `/storage`, or `/data/local/tmp` (for example, `--directories-to-pull /sdcard/tempDir1,/data/local/tmp/tempDir2`). Path names are restricted to the characters ```a-zA-Z0-9_-./+```. The paths `/sdcard` and `/data` will be made available and treated as implicit path substitutions. E.g. if `/sdcard` on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device. Note that access to some directories on API levels 29 and later may also be limited by scoped storage rules",
                  args: {
                    name: "DIR_TO_PULL",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--environment-variables",
                  description:
                    "A comma-separated, key=value map of environment variables and their\ndesired values. The environment variables are mirrored as extra options to\nthe `am instrument -e KEY1 VALUE1 ...` command and passed to your test\nrunner (typically AndroidJUnitRunner). Examples:\n+\nEnable code coverage and provide a directory to store the coverage\nresults when using Android Test Orchestrator (`--use-orchestrator`):\n+\n```\n--environment-variables clearPackageData=true,coverage=true,coverageFilePath=/sdcard/\n```\n+\nEnable code coverage and provide a file path to store the coverage\nresults when *not* using Android Test Orchestrator\n(`--no-use-orchestrator`):\n+\n```\n--environment-variables coverage=true,coverageFile=/sdcard/coverage.ec\n```\n+\nNote: If you need to embed a comma into a `VALUE` string, please refer to\n`gcloud topic escaping` for ways to change the default list delimiter",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
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
                  name: "--locales",
                  description:
                    "The list of LOCALEs to test against (default: a single locale determined by the Firebase Test Lab device catalog)",
                  args: {
                    name: "LOCALE",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--log-http",
                  description:
                    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
                },
                {
                  name: "--network-profile",
                  description:
                    "The name of the network traffic profile, for example --network-profile=LTE, which consists of a set of parameters to emulate network conditions when running the test (default: no network shaping; see available profiles listed by the $ {grandparent_command} network-profiles list` command). This feature only works on physical devices",
                  args: {
                    name: "PROFILE_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--num-flaky-test-attempts",
                  description:
                    "Specifies the number of times a test execution should be reattempted if\none or more of its test cases fail for any reason. An execution that\ninitially fails but succeeds on any reattempt is reported as FLAKY.\n+\nThe maximum number of reruns allowed is 10. (Default: 0, which implies\nno reruns.) All additional attempts are executed in parallel",
                  args: {
                    name: "int",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                {
                  name: "--obb-files",
                  description:
                    "A list of one or two Android OBB file names which will be copied to each test device before the tests will run (default: None). Each OBB file name must conform to the format as specified by Android (e.g. [main|patch].0300110.com.example.android.obb) and will be installed into <shared-storage>/Android/obb/<package-name>/ on the test device",
                  args: {
                    name: "OBB_FILE",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--orientations",
                  description:
                    "The device orientation(s) to test against (default: portrait). Specifying 'default' will pick the preferred orientation for the app. _ORIENTATION_ must be one of: *portrait*, *landscape*, *default*",
                  args: {
                    name: "ORIENTATION",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--os-version-ids",
                  description:
                    "The list of OS_VERSION_IDs to test against (default: a version ID determined by the Firebase Test Lab device catalog)",
                  args: {
                    name: "OS_VERSION_ID",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--other-files",
                  description:
                    "A list of device-path=file-path pairs that indicate the device paths to\npush files to the device before starting tests, and the paths of files to\npush.\n+\nDevice paths must be under absolute, approved paths\n(${EXTERNAL_STORAGE}, or ${ANDROID_DATA}/local/tmp). Source file paths may\nbe in the local filesystem or in Google Cloud Storage (gs://...).\n+\nExamples:\n+\n```\n--other-files /sdcard/dir1/file1.txt=local/file.txt,/storage/dir2/file2.jpg=gs://bucket/file.jpg\n```\n+\nThis flag only copies files to the device. To install files, like OBB or\nAPK files, see --obb-files and --additional-apks",
                  args: {
                    name: "DEVICE_PATH=FILE_PATH",
                    description: "Dict",
                    suggestions: [],
                  },
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
                  name: "--performance-metrics",
                  description:
                    "Monitor and record performance metrics: CPU, memory, network usage, and FPS (game-loop only). Enabled by default, use --no-performance-metrics to disable",
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
                  name: "--record-video",
                  description:
                    "Enable video recording during the test. Enabled by default, use --no-record-video to disable",
                },
                {
                  name: "--results-bucket",
                  description:
                    'The name of a Google Cloud Storage bucket where raw test results will be stored (default: "test-lab-<random-UUID>"). Note that the bucket must be owned by a billing-enabled project, and that using a non-default bucket will result in billing charges for the storage used',
                  args: {
                    name: "RESULTS_BUCKET",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--results-dir",
                  description:
                    "The name of a *unique* Google Cloud Storage object within the results bucket where raw test results will be stored (default: a timestamp with a random suffix). Caution: if specified, this argument *must be unique* for each test matrix you create, otherwise results from multiple test matrices will be overwritten or intermingled",
                  args: {
                    name: "RESULTS_DIR",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--results-history-name",
                  description:
                    "The history name for your test results (an arbitrary string label; default: the application's label from the APK manifest). All tests which use the same history name will have their results grouped together in the Firebase console in a time-ordered test history list",
                  args: {
                    name: "RESULTS_HISTORY_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--robo-directives",
                  description:
                    "A comma-separated (`<type>:<key>=<value>`) map of `robo_directives` that you can use to customize the behavior of Robo test. The `type` specifies the action type of the directive, which may take on values `click`, `text` or `ignore`. If no `type` is provided, `text` will be used by default. Each key should be the Android resource name of a target UI element and each value should be the text input for that element. Values are only permitted for `text` type elements, so no value should be specified for `click` and `ignore` type elements.\n+\nTo provide custom login credentials for your app, use\n+\n    --robo-directives text:username_resource=username,text:password_resource=password\n+\nTo instruct Robo to click on the sign-in button, use\n+\n    --robo-directives click:sign_in_button=\n+\nTo instruct Robo to ignore any UI elements with resource names which equal or start with the user-defined value, use\n+\n  --robo-directives ignore:ignored_ui_element_resource_name=\n+\nTo learn more about Robo test and robo_directives, see https://firebase.google.com/docs/test-lab/android/command-line#custom_login_and_text_input_with_robo_test.\n+\nCaution: You should only use credentials for test accounts that are not associated with real users",
                  args: {
                    name: "TYPE:RESOURCE_NAME=INPUT",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--robo-script",
                  description:
                    "The path to a Robo Script JSON file. The path may be in the local filesystem or in Google Cloud Storage using gs:// notation. You can guide the Robo test to perform specific actions by recording a Robo Script in Android Studio and then specifying this argument. Learn more at https://firebase.google.com/docs/test-lab/robo-ux-test#scripting",
                  args: {
                    name: "ROBO_SCRIPT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--scenario-labels",
                  description:
                    "A list of game-loop scenario labels (default: None). Each game-loop scenario may be labeled in the APK manifest file with one or more arbitrary strings, creating logical groupings (e.g. GPU_COMPATIBILITY_TESTS). If *--scenario-numbers* and *--scenario-labels* are specified together, Firebase Test Lab will first execute each scenario from *--scenario-numbers*. It will then expand each given scenario label into a list of scenario numbers marked with that label, and execute those scenarios",
                  args: {
                    name: "LABEL",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--scenario-numbers",
                  description:
                    "A list of game-loop scenario numbers which will be run as part of the test (default: all scenarios). A maximum of 1024 scenarios may be specified in one test matrix, but the maximum number may also be limited by the overall test *--timeout* setting",
                  args: {
                    name: "int",
                    description: "List",
                    suggestions: [],
                  },
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
                  name: "--test",
                  description:
                    "The path to the binary file containing instrumentation tests. The given path may be in the local filesystem or in Google Cloud Storage using a URL beginning with `gs://`",
                  args: {
                    name: "TEST",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--test-package",
                  description:
                    "(REMOVED) The Java package name of the instrumentation test. By default, the test package name is parsed from the APK manifest.\n+\nFlag --test-package has been removed",
                  args: {
                    name: "TEST_PACKAGE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--test-runner-class",
                  description:
                    "The fully-qualified Java class name of the instrumentation test runner (default: the last name extracted from the APK manifest)",
                  args: {
                    name: "TEST_RUNNER_CLASS",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--test-targets",
                  description:
                    'A list of one or more test target filters to apply (default: run all test\ntargets). Each target filter must be fully qualified with the package\nname, class name, or test annotation desired. Any test filter supported by\n`am instrument -e ...` is supported. See\n https://developer.android.com/reference/android/support/test/runner/AndroidJUnitRunner\n for more information. Examples:\n+\n   * `--test-targets "package com.my.package.name"`\n   * `--test-targets "notPackage com.package.to.skip"`\n   * `--test-targets "class com.foo.ClassName"`\n   * `--test-targets "notClass com.foo.ClassName#testMethodToSkip"`\n   * `--test-targets "annotation com.foo.AnnotationToRun"`\n   * `--test-targets "size large notAnnotation com.foo.AnnotationToSkip"`',
                  args: {
                    name: "TEST_TARGET",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--timeout",
                  description:
                    "The max time this test execution can run before it is cancelled (default: 15m). It does not include any time necessary to prepare and clean up the target device. The maximum possible testing time is 45m on physical devices and 60m on virtual devices. The _TIMEOUT_ units can be h, m, or s. If no unit is given, seconds are assumed. Examples:\n- *--timeout 1h* is 1 hour\n- *--timeout 5m* is 5 minutes\n- *--timeout 200s* is 200 seconds\n- *--timeout 100* is 100 seconds",
                  args: {
                    name: "TIMEOUT",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
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
                  name: "--type",
                  description:
                    "The type of test to run. _TYPE_ must be one of: *instrumentation*, *robo*, *game-loop*",
                  args: {
                    name: "TYPE",
                    description: "String",
                    suggestions: ["instrumentation", "robo", "game-loop"],
                  },
                },
                {
                  name: "--use-orchestrator",
                  description:
                    "Whether each test runs in its own Instrumentation instance with the Android Test Orchestrator (default: Orchestrator is not used, same as specifying --no-use-orchestrator). Orchestrator is only compatible with AndroidJUnitRunner v1.0 or higher. See https://developer.android.com/training/testing/junit-runner.html#using-android-test-orchestrator for more information about Android Test Orchestrator",
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
                name: "ARGSPEC",
                description:
                  "An ARG_FILE:ARG_GROUP_NAME pair, where ARG_FILE is the path to a file containing groups of test arguments in yaml format, and ARG_GROUP_NAME is the particular yaml object holding a group of arg:value pairs to use. Run *$ gcloud topic arg-files* for more information and examples",
              },
            },
            {
              name: "versions",
              description: "Explore Android versions available for testing",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe an Android OS version",
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
                    name: "VERSION_ID",
                    description:
                      "The version ID to describe, found using $ {parent_command} list",
                  },
                },
                {
                  name: "list",
                  description:
                    "List all Android OS versions available for testing",
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
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:Parse",
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
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:Parse",
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
          name: "ios",
          description: "Command group for iOS application testing",
          subcommands: [
            {
              name: "locales",
              description: "Explore iOS locales available for testing",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe an iOS locale",
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
                    name: "LOCALE",
                    description:
                      "The locale to describe, found using $ {parent_command} list",
                  },
                },
                {
                  name: "list",
                  description:
                    "List all iOS locales available for testing internationalized apps",
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
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:Parse",
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
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:Parse",
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
              name: "models",
              description:
                "Explore iOS models available in the Test Environment catalog",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe an iOS model",
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
                    name: "MODEL_ID",
                    description:
                      "ID of the model to describe, found using $ {parent_command} list",
                  },
                },
                {
                  name: "list",
                  description: "List all iOS models available for testing",
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
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:Parse",
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
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:Parse",
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
              name: "run",
              description:
                "Invoke a test in Firebase Test Lab for iOS and view test results",
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
                    "Invoke a test asynchronously without waiting for test results",
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
                  name: "--device",
                  description:
                    "A list of ``DIMENSION=VALUE'' pairs which specify a target device to test\nagainst. This flag may be repeated to specify multiple devices. The device\ndimensions are: *model*, *version*, *locale*, and *orientation*. If any\ndimensions are omitted, they will use a default value. The default value,\nand all possible values, for each dimension can be found with the\n``list'' command for that dimension, such as `$ {parent_command} models\nlist`. Omitting this flag entirely will run tests against a single device\nusing defaults for every dimension.\n+\nExamples:\n+\n```\n--device model=iphone8plus\n--device version=11.2\n--device model=ipadmini4,version=11.2,locale=zh_CN,orientation=landscape\n```",
                  args: {
                    name: "DIMENSION=VALUE",
                    description: "Dict",
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
                  name: "--num-flaky-test-attempts",
                  description:
                    "Specifies the number of times a test execution should be reattempted if\none or more of its test cases fail for any reason. An execution that\ninitially fails but succeeds on any reattempt is reported as FLAKY.\n+\nThe maximum number of reruns allowed is 10. (Default: 0, which implies\nno reruns.) All additional attempts are executed in parallel",
                  args: {
                    name: "int",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
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
                  name: "--record-video",
                  description:
                    "Enable video recording during the test. Enabled by default, use --no-record-video to disable",
                },
                {
                  name: "--results-bucket",
                  description:
                    'The name of a Google Cloud Storage bucket where raw test results will be stored (default: "test-lab-<random-UUID>"). Note that the bucket must be owned by a billing-enabled project, and that using a non-default bucket will result in billing charges for the storage used',
                  args: {
                    name: "RESULTS_BUCKET",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--results-dir",
                  description:
                    "The name of a *unique* Google Cloud Storage object within the results bucket where raw test results will be stored (default: a timestamp with a random suffix). Caution: if specified, this argument *must be unique* for each test matrix you create, otherwise results from multiple test matrices will be overwritten or intermingled",
                  args: {
                    name: "RESULTS_DIR",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--results-history-name",
                  description:
                    "The history name for your test results (an arbitrary string label; default: the bundle ID for the iOS application). All tests which use the same history name will have their results grouped together in the Firebase console in a time-ordered test history list",
                  args: {
                    name: "RESULTS_HISTORY_NAME",
                    description: "String",
                    suggestions: [],
                  },
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
                  name: "--test",
                  description:
                    "The path to the test package (a zip file containing the iOS app and XCTest files). The given path may be in the local filesystem or in Google Cloud Storage using a URL beginning with `gs://`. Note: any .xctestrun file in this zip file will be ignored if *--xctestrun-file* is specified",
                  args: {
                    name: "XCTEST_ZIP",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--test-special-entitlements",
                  description:
                    "Enables testing special app entitlements. Re-signs an app having special\nentitlements with a new application-identifier. This currently supports\ntesting Push Notifications (aps-environment) entitlement for up to one\napp in a project.\n+\nNote: Because this changes the app's identifier, make sure none of the\nresources in your zip file contain direct references to the test app's\nbundle id",
                },
                {
                  name: "--timeout",
                  description:
                    "The max time this test execution can run before it is cancelled (default: 15m). It does not include any time necessary to prepare and clean up the target device. The maximum possible testing time is 45m on physical devices and 60m on virtual devices. The _TIMEOUT_ units can be h, m, or s. If no unit is given, seconds are assumed. Examples:\n- *--timeout 1h* is 1 hour\n- *--timeout 5m* is 5 minutes\n- *--timeout 200s* is 200 seconds\n- *--timeout 100* is 100 seconds",
                  args: {
                    name: "TIMEOUT",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
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
                  name: "--type",
                  description:
                    "The type of iOS test to run. _TYPE_ must be one of: *xctest*, *game-loop*",
                  args: {
                    name: "TYPE",
                    description: "String",
                    suggestions: ["xctest", "game-loop"],
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
                  name: "--xcode-version",
                  description:
                    "The version of Xcode that should be used to run an XCTest. Defaults to the\nlatest Xcode version supported in Firebase Test Lab. This Xcode version\nmust be supported by all iOS versions selected in the test matrix. The\nlist of Xcode versions supported by each version of iOS can be viewed by\nrunning `$ {parent_command} versions list`",
                  args: {
                    name: "XCODE_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--xctestrun-file",
                  description:
                    "The path to an .xctestrun file that will override any .xctestrun file contained in the *--test* package. Because the .xctestrun file contains environment variables along with test methods to run and/or ignore, this can be useful for customizing or sharding test suites. The given path may be in the local filesystem or in Google Cloud Storage using a URL beginning with `gs://`",
                  args: {
                    name: "XCTESTRUN_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "ARGSPEC",
                description:
                  "An ARG_FILE:ARG_GROUP_NAME pair, where ARG_FILE is the path to a file containing groups of test arguments in yaml format, and ARG_GROUP_NAME is the particular yaml object holding a group of arg:value pairs to use. Run *$ gcloud topic arg-files* for more information and examples",
              },
            },
            {
              name: "versions",
              description: "Explore iOS versions available for testing",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe an iOS operating system version",
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
                    name: "VERSION_ID",
                    description:
                      "The version ID to describe, found using $ {parent_command} list",
                  },
                },
                {
                  name: "list",
                  description: "List all iOS versions available for testing",
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
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:Parse",
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
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:Parse",
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
          name: "network-profiles",
          description: "Explore network profiles available for testing",
          subcommands: [
            {
              name: "describe",
              description: "Describe a network profile",
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
                name: "PROFILE_ID",
                description:
                  "The network profile to describe, found using $ {parent_command} list",
              },
            },
            {
              name: "list",
              description: "List all network profiles available for testing",
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
