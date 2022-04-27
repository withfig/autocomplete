const completionSpec: Fig.Spec = {
  name: "ml",
  description: "Use Google Cloud machine learning capabilities",
  subcommands: [
    {
      name: "language",
      description: "Use the Google Cloud Natural Language API to analyze text",
      subcommands: [
        {
          name: "analyze-entities",
          description:
            "Use Google Cloud Natural Language API to identify entities in text",
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
              name: "--content",
              description:
                "Specify input text on the command line. Useful for experiments, or\nfor extremely short text",
              args: {
                name: "CONTENT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--content-file",
              description:
                "Specify a local file or Google Cloud Storage (format\n`gs://bucket/object`) file path containing the text to be analyzed.\nMore useful for longer text or data output from another system",
              args: {
                name: "CONTENT_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--content-type",
              description:
                "Specify the format of the input text. _CONTENT_TYPE_ must be one of: *html*, *plain-text*",
              args: {
                name: "CONTENT_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["html", "plain-text"],
              },
            },
            {
              name: "--encoding-type",
              description:
                "The encoding type used by the API to calculate offsets. If set to `none`,\nencoding-dependent offsets will be set at -1. This is an optional flag\nonly used for the entity mentions in results, and does not affect how the\ninput is read or analyzed. _ENCODING_TYPE_ must be one of: *none*, *utf16*, *utf32*, *utf8*",
              args: {
                name: "ENCODING_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["none", "utf16", "utf32", "utf8"],
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
              name: "--language",
              description:
                "Specify the language of the input text. If omitted, the server will\nattempt to auto-detect. Both ISO (such as `en` or `es`) and BCP-47 (such\nas `en-US` or `ja-JP`) language codes are accepted",
              args: {
                name: "LANGUAGE",
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
          name: "analyze-entity-sentiment",
          description:
            "Use Google Cloud Natural Language API to identify entity-level sentiment",
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
              name: "--content",
              description:
                "Specify input text on the command line. Useful for experiments, or\nfor extremely short text",
              args: {
                name: "CONTENT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--content-file",
              description:
                "Specify a local file or Google Cloud Storage (format\n`gs://bucket/object`) file path containing the text to be analyzed.\nMore useful for longer text or data output from another system",
              args: {
                name: "CONTENT_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--content-type",
              description:
                "Specify the format of the input text. _CONTENT_TYPE_ must be one of: *html*, *plain-text*",
              args: {
                name: "CONTENT_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["html", "plain-text"],
              },
            },
            {
              name: "--encoding-type",
              description:
                "The encoding type used by the API to calculate offsets. If set to `none`,\nencoding-dependent offsets will be set at -1. This is an optional flag\nonly used for the entity mentions in results, and does not affect how the\ninput is read or analyzed. _ENCODING_TYPE_ must be one of: *none*, *utf16*, *utf32*, *utf8*",
              args: {
                name: "ENCODING_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["none", "utf16", "utf32", "utf8"],
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
              name: "--language",
              description:
                "Specify the language of the input text. If omitted, the server will\nattempt to auto-detect. Both ISO (such as `en` or `es`) and BCP-47 (such\nas `en-US` or `ja-JP`) language codes are accepted",
              args: {
                name: "LANGUAGE",
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
          name: "analyze-sentiment",
          description:
            "Use Google Cloud Natural Language API to identify sentiments in a text",
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
              name: "--content",
              description:
                "Specify input text on the command line. Useful for experiments, or\nfor extremely short text",
              args: {
                name: "CONTENT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--content-file",
              description:
                "Specify a local file or Google Cloud Storage (format\n`gs://bucket/object`) file path containing the text to be analyzed.\nMore useful for longer text or data output from another system",
              args: {
                name: "CONTENT_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--content-type",
              description:
                "Specify the format of the input text. _CONTENT_TYPE_ must be one of: *html*, *plain-text*",
              args: {
                name: "CONTENT_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["html", "plain-text"],
              },
            },
            {
              name: "--encoding-type",
              description:
                "The encoding type used by the API to calculate offsets. If set to `none`,\nencoding-dependent offsets will be set at -1. This is an optional flag\nonly used for the entity mentions in results, and does not affect how the\ninput is read or analyzed. _ENCODING_TYPE_ must be one of: *none*, *utf16*, *utf32*, *utf8*",
              args: {
                name: "ENCODING_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["none", "utf16", "utf32", "utf8"],
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
              name: "--language",
              description:
                "Specify the language of the input text. If omitted, the server will\nattempt to auto-detect. Both ISO (such as `en` or `es`) and BCP-47 (such\nas `en-US` or `ja-JP`) language codes are accepted",
              args: {
                name: "LANGUAGE",
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
          name: "analyze-syntax",
          description:
            "Use Google Cloud Natural Language API to identify linguistic information",
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
              name: "--content",
              description:
                "Specify input text on the command line. Useful for experiments, or\nfor extremely short text",
              args: {
                name: "CONTENT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--content-file",
              description:
                "Specify a local file or Google Cloud Storage (format\n`gs://bucket/object`) file path containing the text to be analyzed.\nMore useful for longer text or data output from another system",
              args: {
                name: "CONTENT_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--content-type",
              description:
                "Specify the format of the input text. _CONTENT_TYPE_ must be one of: *html*, *plain-text*",
              args: {
                name: "CONTENT_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["html", "plain-text"],
              },
            },
            {
              name: "--encoding-type",
              description:
                "The encoding type used by the API to calculate offsets. If set to `none`,\nencoding-dependent offsets will be set at -1. This is an optional flag\nonly used for the entity mentions in results, and does not affect how the\ninput is read or analyzed. _ENCODING_TYPE_ must be one of: *none*, *utf16*, *utf32*, *utf8*",
              args: {
                name: "ENCODING_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["none", "utf16", "utf32", "utf8"],
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
              name: "--language",
              description:
                "Specify the language of the input text. If omitted, the server will\nattempt to auto-detect. Both ISO (such as `en` or `es`) and BCP-47 (such\nas `en-US` or `ja-JP`) language codes are accepted",
              args: {
                name: "LANGUAGE",
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
          name: "classify-text",
          description: "Classifies input document into categories",
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
              name: "--content",
              description:
                "Specify input text on the command line. Useful for experiments, or\nfor extremely short text",
              args: {
                name: "CONTENT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--content-file",
              description:
                "Specify a local file or Google Cloud Storage (format\n`gs://bucket/object`) file path containing the text to be analyzed.\nMore useful for longer text or data output from another system",
              args: {
                name: "CONTENT_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--content-type",
              description:
                "Specify the format of the input text. _CONTENT_TYPE_ must be one of: *html*, *plain-text*",
              args: {
                name: "CONTENT_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["html", "plain-text"],
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
              name: "--language",
              description:
                "Specify the language of the input text. If omitted, the server will\nattempt to auto-detect. Both ISO (such as `en` or `es`) and BCP-47 (such\nas `en-US` or `ja-JP`) language codes are accepted",
              args: {
                name: "LANGUAGE",
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
      name: "speech",
      description: "Use Google Cloud Speech to get transcripts of audio",
      subcommands: [
        {
          name: "operations",
          description: "Interact with Google Cloud Speech operations",
          subcommands: [
            {
              name: "describe",
              description:
                "Get description of a long-running speech recognition operation",
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
                description:
                  "ID of the operation or fully qualified identifier for the operation",
              },
            },
            {
              name: "wait",
              description:
                "Poll long-running speech recognition operation until it completes",
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
        {
          name: "recognize",
          description:
            "Get transcripts of short (less than 60 seconds) audio from an audio file",
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
              name: "--encoding",
              description:
                "The type of encoding of the file. Required if the file format is not\nWAV or FLAC. _ENCODING_ must be one of: *amr*, *amr-wb*, *encoding-unspecified*, *flac*, *linear16*, *mulaw*, *ogg-opus*, *speex-with-header-byte*",
              args: {
                name: "ENCODING",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "amr",
                  "amr-wb",
                  "encoding-unspecified",
                  "flac",
                  "linear16",
                  "mulaw",
                  "ogg-opus",
                  "speex-with-header-byte",
                ],
              },
            },
            {
              name: "--filter-profanity",
              description:
                'If True, the server will attempt to filter out profanities, replacing\nall but the initial character in each filtered word with asterisks,\ne.g. \\"f***\\"',
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
              name: "--hints",
              description:
                'A list of strings containing word and phrase "hints" so that the speech\nrecognition is more likely to recognize them. This can be used to\nimprove the accuracy for specific words and phrases, for example, if\nspecific commands are typically spoken by the user. This can also be\nused to add additional words to the vocabulary of the recognizer. See\nhttps://cloud.google.com/speech/limits#content',
              args: {
                name: "HINTS",
                description: "List",
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
              name: "--include-word-time-offsets",
              description:
                "If True, the top result includes a list of words with the start and\nend time offsets (timestamps) for those words. If False, no word-level\ntime offset information is returned",
            },
            {
              name: "--language-code",
              description:
                'The language of the supplied audio as a BCP-47\n(https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example:\n"en-US". See https://cloud.google.com/speech/docs/languages for a list\nof the currently supported language codes',
              args: {
                name: "LANGUAGE_CODE",
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
              name: "--max-alternatives",
              description:
                "Maximum number of recognition hypotheses to be returned. The server\nmay return fewer than max_alternatives. Valid values are 0-30. A value\nof 0 or 1 will return a maximum of one",
              args: {
                name: "MAX_ALTERNATIVES",
                description: "Int",
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
              name: "--sample-rate",
              description:
                "The sample rate in Hertz. For best results, set the sampling rate of\nthe audio source to 16000 Hz. If that's not possible, use the native\nsample rate of the audio source (instead of re-sampling)",
              args: {
                name: "SAMPLE_RATE",
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
          args: {
            name: "AUDIO",
            description:
              "The location of the audio file to transcribe. Must be a local path or a\nGoogle Cloud Storage URL (in the format gs://bucket/object)",
          },
        },
        {
          name: "recognize-long-running",
          description: "Get transcripts of longer audio from an audio file",
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
              name: "--encoding",
              description:
                "The type of encoding of the file. Required if the file format is not\nWAV or FLAC. _ENCODING_ must be one of: *amr*, *amr-wb*, *encoding-unspecified*, *flac*, *linear16*, *mulaw*, *ogg-opus*, *speex-with-header-byte*",
              args: {
                name: "ENCODING",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "amr",
                  "amr-wb",
                  "encoding-unspecified",
                  "flac",
                  "linear16",
                  "mulaw",
                  "ogg-opus",
                  "speex-with-header-byte",
                ],
              },
            },
            {
              name: "--filter-profanity",
              description:
                'If True, the server will attempt to filter out profanities, replacing\nall but the initial character in each filtered word with asterisks,\ne.g. \\"f***\\"',
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
              name: "--hints",
              description:
                'A list of strings containing word and phrase "hints" so that the speech\nrecognition is more likely to recognize them. This can be used to\nimprove the accuracy for specific words and phrases, for example, if\nspecific commands are typically spoken by the user. This can also be\nused to add additional words to the vocabulary of the recognizer. See\nhttps://cloud.google.com/speech/limits#content',
              args: {
                name: "HINTS",
                description: "List",
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
              name: "--include-word-time-offsets",
              description:
                "If True, the top result includes a list of words with the start and\nend time offsets (timestamps) for those words. If False, no word-level\ntime offset information is returned",
            },
            {
              name: "--language-code",
              description:
                'The language of the supplied audio as a BCP-47\n(https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example:\n"en-US". See https://cloud.google.com/speech/docs/languages for a list\nof the currently supported language codes',
              args: {
                name: "LANGUAGE_CODE",
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
              name: "--max-alternatives",
              description:
                "Maximum number of recognition hypotheses to be returned. The server\nmay return fewer than max_alternatives. Valid values are 0-30. A value\nof 0 or 1 will return a maximum of one",
              args: {
                name: "MAX_ALTERNATIVES",
                description: "Int",
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
              name: "--sample-rate",
              description:
                "The sample rate in Hertz. For best results, set the sampling rate of\nthe audio source to 16000 Hz. If that's not possible, use the native\nsample rate of the audio source (instead of re-sampling)",
              args: {
                name: "SAMPLE_RATE",
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
          args: {
            name: "AUDIO",
            description:
              "The location of the audio file to transcribe. Must be a local path or a\nGoogle Cloud Storage URL (in the format gs://bucket/object)",
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
      name: "video",
      description: "Cloud ML Video-Intelligence command groups",
      subcommands: [
        {
          name: "detect-explicit-content",
          description: "Detect explicit content in videos",
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
              name: "--output-uri",
              description:
                "Location to which the results should be written. Must be a Google\nCloud Storage URI",
              args: {
                name: "OUTPUT_URI",
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
              name: "--region",
              description:
                "Optional Cloud region where annotation should take place. If no region\nis specified, a region will be determined based on video file location. _REGION_ must be one of: *asia-east1*, *europe-west1*, *us-east1*, *us-west1*",
              args: {
                name: "REGION",
                description: "String",
                suggestions: [
                  "asia-east1",
                  "europe-west1",
                  "us-east1",
                  "us-west1",
                ],
              },
            },
            {
              name: "--segments",
              description:
                "Segments from the video which you want to analyze (by default, the\nentire video will be treated as one segment). Must be in the format\nSTART1:END1[,START2:END2,...] (inclusive). START and END of segments must\nbe a properly formatted duration string of the form `HhMmSs` where:\n+\n```\n*  H is the number of hours from beginning of video\n*  M is the number of minutes from the beginning of video\n*  S is the number of seconds from the beginning of the video\n```\n+\nH, M and S can be specified as ints or floats for fractional units\n(to microsecond resolution). Unit chars (e.g. `h`, `m` or `s`) are\nrequired. Microseconds can be specified using fractional seconds\ne.g. 0.000569s == 569 microseconds.\n+\nExamples:\n+\n0s:23.554048s,24s:29.528064s\n+\n0:1m40s,3m50s:5m10.232265s",
              args: {
                name: "SEGMENTS",
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
            name: "INPUT_PATH",
            description:
              "Path to the video to be analyzed. Must be a local path or a Google\nCloud Storage URI",
          },
        },
        {
          name: "detect-labels",
          description: "Detect general labels for videos",
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
              name: "--detection-mode",
              description:
                "The mode of label detection requested. _DETECTION_MODE_ must be one of:\n+\n*frame*::: Detect labels at the per-frame level.\n*shot*::: Detect labels at the per-shot level.\n*shot-and-frame*::: Detect labels at both the per-shot and per-frame level.\n:::\n+",
              args: {
                name: "DETECTION_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["frame", "shot", "shot-and-frame"],
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
              name: "--output-uri",
              description:
                "Location to which the results should be written. Must be a Google\nCloud Storage URI",
              args: {
                name: "OUTPUT_URI",
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
              name: "--region",
              description:
                "Optional Cloud region where annotation should take place. If no region\nis specified, a region will be determined based on video file location. _REGION_ must be one of: *asia-east1*, *europe-west1*, *us-east1*, *us-west1*",
              args: {
                name: "REGION",
                description: "String",
                suggestions: [
                  "asia-east1",
                  "europe-west1",
                  "us-east1",
                  "us-west1",
                ],
              },
            },
            {
              name: "--segments",
              description:
                "Segments from the video which you want to analyze (by default, the\nentire video will be treated as one segment). Must be in the format\nSTART1:END1[,START2:END2,...] (inclusive). START and END of segments must\nbe a properly formatted duration string of the form `HhMmSs` where:\n+\n```\n*  H is the number of hours from beginning of video\n*  M is the number of minutes from the beginning of video\n*  S is the number of seconds from the beginning of the video\n```\n+\nH, M and S can be specified as ints or floats for fractional units\n(to microsecond resolution). Unit chars (e.g. `h`, `m` or `s`) are\nrequired. Microseconds can be specified using fractional seconds\ne.g. 0.000569s == 569 microseconds.\n+\nExamples:\n+\n0s:23.554048s,24s:29.528064s\n+\n0:1m40s,3m50s:5m10.232265s",
              args: {
                name: "SEGMENTS",
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
            name: "INPUT_PATH",
            description:
              "Path to the video to be analyzed. Must be a local path or a Google\nCloud Storage URI",
          },
        },
        {
          name: "detect-shot-changes",
          description: "Detect shot changes in videos",
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
              name: "--output-uri",
              description:
                "Location to which the results should be written. Must be a Google\nCloud Storage URI",
              args: {
                name: "OUTPUT_URI",
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
              name: "--region",
              description:
                "Optional Cloud region where annotation should take place. If no region\nis specified, a region will be determined based on video file location. _REGION_ must be one of: *asia-east1*, *europe-west1*, *us-east1*, *us-west1*",
              args: {
                name: "REGION",
                description: "String",
                suggestions: [
                  "asia-east1",
                  "europe-west1",
                  "us-east1",
                  "us-west1",
                ],
              },
            },
            {
              name: "--segments",
              description:
                "Segments from the video which you want to analyze (by default, the\nentire video will be treated as one segment). Must be in the format\nSTART1:END1[,START2:END2,...] (inclusive). START and END of segments must\nbe a properly formatted duration string of the form `HhMmSs` where:\n+\n```\n*  H is the number of hours from beginning of video\n*  M is the number of minutes from the beginning of video\n*  S is the number of seconds from the beginning of the video\n```\n+\nH, M and S can be specified as ints or floats for fractional units\n(to microsecond resolution). Unit chars (e.g. `h`, `m` or `s`) are\nrequired. Microseconds can be specified using fractional seconds\ne.g. 0.000569s == 569 microseconds.\n+\nExamples:\n+\n0s:23.554048s,24s:29.528064s\n+\n0:1m40s,3m50s:5m10.232265s",
              args: {
                name: "SEGMENTS",
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
            name: "INPUT_PATH",
            description:
              "Path to the video to be analyzed. Must be a local path or a Google\nCloud Storage URI",
          },
        },
        {
          name: "operations",
          description:
            "Command group for working with Cloud Video Intelligence operations",
          subcommands: [
            {
              name: "describe",
              description:
                "Get description of a long-running video analysis operation",
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
                  description: "Location of the operation",
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
              name: "wait",
              description:
                "Poll long-running video analysis operation until it completes",
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
                  description: "Location of the operation",
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
      name: "vision",
      description: "Use Google Cloud Vision to analyze images",
      subcommands: [
        {
          name: "detect-document",
          description: "Detect dense text in an image",
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
              name: "--language-hints",
              description: "List of languages to use for text detection",
              args: {
                name: "LANGUAGE_HINTS",
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
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-faces",
          description: "Detect faces within an image",
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
              name: "--max-results",
              description: "Maximum number of results to be provided",
              args: {
                name: "MAX_RESULTS",
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
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-image-properties",
          description: "Detect general attributes of an image",
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
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-labels",
          description: "Detect broad sets of categories within an image",
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
              name: "--max-results",
              description: "Maximum number of results to be provided",
              args: {
                name: "MAX_RESULTS",
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
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-landmarks",
          description:
            "Detect popular natural and man-made structures within an image",
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
              name: "--max-results",
              description: "Maximum number of results to be provided",
              args: {
                name: "MAX_RESULTS",
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
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-logos",
          description: "Detect popular product logos within an image",
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
              name: "--max-results",
              description: "Maximum number of results to be provided",
              args: {
                name: "MAX_RESULTS",
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
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-objects",
          description:
            "Detect and extract multiple objects in an image with object localization",
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
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-safe-search",
          description: "Detect explicit content in an image",
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
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-text",
          description: "Detect and extract text within an image",
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
              name: "--language-hints",
              description: "List of languages to use for text detection",
              args: {
                name: "LANGUAGE_HINTS",
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
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-text-pdf",
          description:
            "Detect and transcribe text from PDF files stored in Google Cloud Storage",
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
              name: "--batch-size",
              description:
                "Maximum number of response protos to put into each output JSON file on\nGoogle Cloud Storage.\nThe valid range is [1, 100]. If not specified, the default value is 20",
              args: {
                name: "BATCH_SIZE",
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
              name: "INPUT_FILE",
              description:
                "Google Cloud Storage location to read the input from. It must be in\nGoogle Cloud Storage format (gs://bucket/object)",
            },
            {
              name: "OUTPUT_PATH",
              description:
                "Google Cloud Storage location to store the output file. It must be in\nGoogle Cloud Storage format (gs://bucket/object)",
            },
          ],
        },
        {
          name: "detect-text-tiff",
          description:
            "Detect and transcribe text from TIFF files stored in Google Cloud Storage",
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
              name: "--batch-size",
              description:
                "Maximum number of response protos to put into each output JSON file on\nGoogle Cloud Storage.\nThe valid range is [1, 100]. If not specified, the default value is 20",
              args: {
                name: "BATCH_SIZE",
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
              name: "INPUT_FILE",
              description:
                "Google Cloud Storage location to read the input from. It must be in\nGoogle Cloud Storage format (gs://bucket/object)",
            },
            {
              name: "OUTPUT_PATH",
              description:
                "Google Cloud Storage location to store the output file. It must be in\nGoogle Cloud Storage format (gs://bucket/object)",
            },
          ],
        },
        {
          name: "detect-web",
          description:
            "Detect entities in an image from similar images on the web",
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
              name: "--max-results",
              description: "Maximum number of results to be provided",
              args: {
                name: "MAX_RESULTS",
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
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "suggest-crop",
          description: "Suggest a bounding box in an image",
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
              name: "--aspect-ratios",
              description:
                "A list of aspect ratio hints for the suggested bounding box. Aspect ratios may be specified either as a decimal number (ex. 1.333) or as a ratio of width to height (ex 4:3)",
              args: {
                name: "ASPECT_RATIOS",
                description: "List",
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
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
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
