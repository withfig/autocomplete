export const completionSpec: Fig.Spec = {
  name: "help",
  description: "Search gcloud help text.",

  options: [
    {
      name: "--account",
      description:
        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
      args: {
        name: "ACCOUNT",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--billing-project",
      description:
        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
      args: {
        name: "BILLING_PROJECT",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--configuration",
      description:
        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
      args: {
        name: "CONFIGURATION",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--filter",
      description:
        "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
      args: {
        name: "EXPRESSION",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--flags-file",
      description:
        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
      args: {
        name: "YAML_FILE",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--flatten",
      description:
        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
      args: {
        name: "KEY",
        description: "list",
        suggestions: [],
      },
    },
    {
      name: "--format",
      description:
        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
      args: {
        name: "FORMAT",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--help",
      description: "Display detailed help.",
    },
    {
      name: "--impersonate-service-account",
      description:
        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
      args: {
        name: "SERVICE_ACCOUNT_EMAIL",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--limit",
      description:
        "Maximum number of resources to list. The default is *5*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*.",
      args: {
        name: "LIMIT",
        description: "int",
        suggestions: [],
      },
    },
    {
      name: "--log-http",
      description:
        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
    },
    {
      name: "--page-size",
      description:
        "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service.",
      args: {
        name: "PAGE_SIZE",
        description: "googlecloudsdk.calliope.arg_parsers:Parse",
        suggestions: [],
      },
    },
    {
      name: "--project",
      description:
        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
      args: {
        name: "PROJECT_ID",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--quiet",
      description:
        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
    },
    {
      name: "--sort-by",
      description:
        "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*.\n The default is *~relevance*.",
      args: {
        name: "FIELD",
        description: "list",
        suggestions: [],
      },
    },
    {
      name: "--trace-token",
      description:
        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
      args: {
        name: "TRACE_TOKEN",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--user-output-enabled",
      description:
        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
    },
    {
      name: "--verbosity",
      description:
        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
      args: {
        name: "VERBOSITY",
        description: "string",
        suggestions: ["debug", "info", "warning", "error", "critical", "none"],
      },
    },
  ],
  args: [
    {
      name: "COMMAND",
      description:
        "Sequence of names representing a gcloud group or command name.\n+\nIf the arguments provide the name of a gcloud command, the full help\ntext of that command will be displayed. Otherwise, all arguments will\nbe considered search terms and used to search through all of gcloud's\nhelp text.",
      variadic: false,
    },
    {
      name: "SEARCH_TERMS",
      description:
        "Search terms. The command will return a list of gcloud commands that are\nrelevant to the searched term. If this argument is provided, the command\nwill always return a list of search results rather than displaying help\ntext of a single command.\n+\nFor example, to search for commands that relate to the term `project` or\n`folder`, run:\n+\n  $ {command} -- project folder\n+\n+\nThe '--' argument must be specified between gcloud specific args on the left and SEARCH_TERMS on the right.",
      variadic: false,
    },
  ],
};
