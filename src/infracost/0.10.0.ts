const completion: Fig.Subcommand = {
  name: "infracost",
  description: "Cloud cost estimates for Terraform",
  subcommands: [
    {
      name: "auth",
      description: "Get a free API key, or log in to your existing account",
      subcommands: [
        {
          name: "login",
          description: "Authenticate the CLI with your Infracost account",
        },
      ],
    },
    {
      name: "breakdown",
      description: "Show breakdown of costs",
      options: [
        {
          name: "--config-file",
          description:
            "Path to Infracost config file. Cannot be used with path, terraform* or usage-file flags",
          args: { name: "config-file", template: ["filepaths"] },
        },
        {
          name: "--exclude-path",
          description:
            "Paths of directories to exclude, glob patterns need quotes",
          args: { name: "exclude-path" },
        },
        {
          name: "--fields",
          description:
            "Comma separated list of output fields: all,price,monthlyQuantity,unit,hourlyCost,monthlyCost. Supported by table and html output formats",
          args: {
            name: "fields",
            default: "[monthlyQuantity,unit,monthlyCost]",
          },
        },
        {
          name: "--format",
          description: "Output format: json, table, html",
          args: {
            name: "format",
            default: "table",
            suggestions: [
              {
                name: "json",
              },
              {
                name: "table",
              },
              {
                name: "html",
              },
            ],
          },
        },
        {
          name: "--git-diff-target",
          description:
            "Show only costs that have git changes compared to the provided branch. Use the name of the current branch to fetch changes from the last two commits",
          hidden: true,
          args: { name: "git-diff-target", default: "master" },
        },
        {
          name: "--include-all-paths",
          description:
            "Set project auto-detection to use all subdirectories in given path",
        },
        {
          name: "--no-cache",
          description: "Don't attempt to cache Terraform plans",
        },
        {
          name: "--out-file",
          description: "Save output to a file, helpful with format flag",
          args: { name: "out-file" },
        },
        {
          name: ["--path", "-p"],
          description: "Path to the Terraform directory or JSON/plan file",
          args: { name: "path", template: ["filepaths"] },
        },
        {
          name: "--project-name",
          description:
            "Name of project in the output. Defaults to path or git repo name",
          args: { name: "project-name" },
        },
        {
          name: "--show-skipped",
          description: "List unsupported and free resources",
        },
        {
          name: "--sync-usage-file",
          description:
            "Sync usage-file with missing resources, needs usage-file too (experimental)",
        },
        {
          name: "--terraform-force-cli",
          description:
            "Generate the Terraform plan JSON using the Terraform CLI. This may require cloud credentials",
          hidden: true,
        },
        {
          name: "--terraform-init-flags",
          description:
            "Flags to pass to 'terraform init'. Applicable with --terraform-force-cli",
          hidden: true,
          args: { name: "terraform-init-flags" },
        },
        {
          name: "--terraform-plan-flags",
          description:
            "Flags to pass to 'terraform plan'. Applicable with --terraform-force-cli",
          hidden: true,
          args: { name: "terraform-plan-flags" },
        },
        {
          name: "--terraform-use-state",
          description:
            "Use Terraform state instead of generating a plan. Applicable with --terraform-force-cli",
          hidden: true,
        },
        {
          name: "--terraform-var",
          description:
            "Set value for an input variable, similar to Terraform's -var flag",
          args: { name: "terraform-var" },
        },
        {
          name: "--terraform-var-file",
          description:
            "Load variable files, similar to Terraform's -var-file flag. Provided files must be relative to the --path flag",
          args: { name: "terraform-var-file" },
        },
        {
          name: "--terraform-workspace",
          description:
            "Terraform workspace to use. Applicable when path is a Terraform directory",
          args: { name: "terraform-workspace" },
        },
        {
          name: "--usage-file",
          description:
            "Path to Infracost usage file that specifies values for usage-based resources",
          args: { name: "usage-file", template: ["filepaths"] },
        },
      ],
    },
    {
      name: "comment",
      description:
        "Post an Infracost comment to GitHub, GitLab, Azure Repos or Bitbucket",
      subcommands: [
        {
          name: "azure-repos",
          description: "Post an Infracost comment to Azure Repos",
          options: [
            {
              name: "--additional-comment-data-path",
              description: "Path to additional comment text (experimental)",
              hidden: true,
              args: { name: "additional-comment-data-path" },
            },
            {
              name: "--azure-access-token",
              description: "Azure DevOps access token",
              args: { name: "azure-access-token" },
              isRequired: true,
            },
            {
              name: "--behavior",
              description: "Behavior when posting comment",
              args: {
                name: "behavior",
                default: "update",
                suggestions: [
                  {
                    name: "update",
                    description: "Update latest comment",
                  },
                  {
                    name: "new",
                    description: "Create a new comment",
                  },
                  {
                    name: "hide-and-new",
                    description:
                      "Hide previous matching comments and create a new comment",
                  },
                  {
                    name: "delete-and-new",
                    description:
                      "Delete previous matching comments and create a new comment",
                  },
                ],
              },
            },
            {
              name: "--dry-run",
              description:
                "Generate comment without actually posting to Azure Repos",
            },
            {
              name: ["--path", "-p"],
              description:
                "Path to Infracost JSON files, glob patterns need quotes",
              isRepeatable: true,
              args: { name: "path", template: ["filepaths"] },
              isRequired: true,
            },
            {
              name: "--policy-path",
              description:
                "Path to Infracost policy files, glob patterns need quotes (experimental)",
              isRepeatable: true,
              args: { name: "policy-path" },
            },
            {
              name: "--pull-request",
              description: "Pull request number to post comment on",
              args: { name: "pull-request", default: "0" },
              isRequired: true,
            },
            {
              name: "--repo-url",
              description:
                "Repository URL, e.g. https://dev.azure.com/my-org/my-project/_git/my-repo",
              args: { name: "repo-url" },
              isRequired: true,
            },
            {
              name: "--show-all-projects",
              description:
                "Show all projects in the table of the comment output",
            },
            {
              name: "--show-changed",
              description:
                "Show only projects in the table that have code changes",
              hidden: true,
            },
            {
              name: "--show-skipped",
              description: "List unsupported and free resources",
            },
            {
              name: "--skip-no-diff",
              description:
                "Skip posting comment if there are no resource changes. Only applies to update, hide-and-new, and delete-and-new behaviors",
              hidden: true,
            },
            {
              name: "--tag",
              description:
                "Customize hidden markdown tag used to detect comments posted by Infracost",
              args: { name: "tag" },
            },
          ],
        },
        {
          name: "bitbucket",
          description: "Post an Infracost comment to Bitbucket",
          options: [
            {
              name: "--additional-comment-data-path",
              description: "Path to additional comment text (experimental)",
              hidden: true,
              args: { name: "additional-comment-data-path" },
            },
            {
              name: "--behavior",
              description: "Behavior when posting comment",
              args: {
                name: "behavior",
                default: "update",
                suggestions: [
                  {
                    name: "update",
                    description: "Update latest comment",
                  },
                  {
                    name: "new",
                    description: "Create a new comment",
                  },
                  {
                    name: "delete-and-new",
                    description:
                      "Delete previous matching comments and create a new comment",
                  },
                ],
              },
            },
            {
              name: "--bitbucket-server-url",
              description: "Bitbucket Server URL",
              args: {
                name: "bitbucket-server-url",
                default: "https://bitbucket.org",
              },
            },
            {
              name: "--bitbucket-token",
              description:
                "Bitbucket access token. Use 'username:app-password' for Bitbucket Cloud and HTTP access token for Bitbucket Server",
              args: { name: "bitbucket-token" },
              isRequired: true,
            },
            {
              name: "--commit",
              description:
                "Commit SHA to post comment on, mutually exclusive with pull-request. Not available when bitbucket-server-url is set",
              exclusiveOn: ["--pull-request"],
              args: { name: "commit" },
            },
            {
              name: "--dry-run",
              description:
                "Generate comment without actually posting to Bitbucket",
            },
            {
              name: "--exclude-cli-output",
              description:
                "Exclude CLI output so comment has just the summary table",
            },
            {
              name: ["--path", "-p"],
              description:
                "Path to Infracost JSON files, glob patterns need quotes",
              isRepeatable: true,
              args: { name: "path", template: ["filepaths"] },
              isRequired: true,
            },
            {
              name: "--policy-path",
              description:
                "Path to Infracost policy files, glob patterns need quotes (experimental)",
              isRepeatable: true,
              args: { name: "policy-path" },
            },
            {
              name: "--pull-request",
              description: "Pull request number to post comment on",
              exclusiveOn: ["--commit"],
              args: { name: "pull-request", default: "0" },
            },
            {
              name: "--repo",
              description: "Repository in format workspace/repo",
              args: { name: "workspace/repo" },
              isRequired: true,
            },
            {
              name: "--show-all-projects",
              description:
                "Show all projects in the table of the comment output",
            },
            {
              name: "--show-changed",
              description:
                "Show only projects in the table that have code changes",
              hidden: true,
            },
            {
              name: "--show-skipped",
              description: "List unsupported and free resources",
            },
            {
              name: "--skip-no-diff",
              description:
                "Skip posting comment if there are no resource changes. Only applies to update, hide-and-new, and delete-and-new behaviors",
              hidden: true,
            },
            {
              name: "--tag",
              description:
                "Customize special text used to detect comments posted by Infracost (placed at the bottom of a comment)",
              args: { name: "tag" },
            },
          ],
        },
        {
          name: "github",
          description: "Post an Infracost comment to GitHub",
          options: [
            {
              name: "--additional-comment-data-path",
              description: "Path to additional comment text (experimental)",
              hidden: true,
              args: { name: "additional-comment-data-path" },
            },
            {
              name: "--behavior",
              description: "Behavior when posting comment",
              args: {
                name: "behavior",
                default: "update",
                suggestions: [
                  {
                    name: "update",
                    description: "Update latest comment",
                  },
                  {
                    name: "new",
                    description: "Create a new comment",
                  },
                  {
                    name: "hide-and-new",
                    description:
                      "Hide previous matching comments and create a new comment",
                  },
                  {
                    name: "delete-and-new",
                    description:
                      "Delete previous matching comments and create a new comment",
                  },
                ],
              },
            },
            {
              name: "--commit",
              description:
                "Commit SHA to post comment on, mutually exclusive with pull-request",
              exclusiveOn: ["--pull-request"],
              args: { name: "commit" },
            },
            {
              name: "--dry-run",
              description:
                "Generate comment without actually posting to GitHub",
            },
            {
              name: "--github-api-url",
              description: "GitHub API URL",
              args: {
                name: "github-api-url",
                default: "https://api.github.com",
              },
            },
            {
              name: "--github-tls-cert-file",
              description:
                "Path to optional client certificate file when communicating with GitHub Enterprise API",
              args: { name: "github-tls-cert-file" },
            },
            {
              name: "--github-tls-insecure-skip-verify",
              description:
                "Skip TLS certificate checks for GitHub Enterprise API",
            },
            {
              name: "--github-tls-key-file",
              description:
                "Path to optional client key file when communicating with GitHub Enterprise API",
              args: { name: "github-tls-key-file" },
            },
            {
              name: "--github-token",
              description: "GitHub token",
              args: { name: "github-token" },
              isRequired: true,
            },
            {
              name: ["--path", "-p"],
              description:
                "Path to Infracost JSON files, glob patterns need quotes",
              isRepeatable: true,
              args: { name: "path", template: ["filepaths"] },
              isRequired: true,
            },
            {
              name: "--policy-path",
              description:
                "Path to Infracost policy files, glob patterns need quotes (experimental)",
              isRepeatable: true,
              args: { name: "policy-path" },
            },
            {
              name: "--pull-request",
              description:
                "Pull request number to post comment on, mutually exclusive with commit",
              exclusiveOn: ["--commit"],
              args: { name: "pull-request", default: "0" },
            },
            {
              name: "--repo",
              description: "Repository in format owner/repo",
              args: { name: "owner/repo" },
              isRequired: true,
            },
            {
              name: "--show-all-projects",
              description:
                "Show all projects in the table of the comment output",
            },
            {
              name: "--show-changed",
              description:
                "Show only projects in the table that have code changes",
              hidden: true,
            },
            {
              name: "--show-skipped",
              description: "List unsupported and free resources",
            },
            {
              name: "--skip-no-diff",
              description:
                "Skip posting comment if there are no resource changes. Only applies to update, hide-and-new, and delete-and-new behaviors",
              hidden: true,
            },
            {
              name: "--tag",
              description:
                "Customize hidden markdown tag used to detect comments posted by Infracost",
              args: { name: "tag" },
            },
          ],
        },
        {
          name: "gitlab",
          description: "Post an Infracost comment to GitLab",
          options: [
            {
              name: "--additional-comment-data-path",
              description: "Path to additional comment text (experimental)",
              hidden: true,
              args: { name: "additional-comment-data-path" },
            },
            {
              name: "--behavior",
              description: "Behavior when posting comment",
              args: {
                name: "behavior",
                default: "update",
                suggestions: [
                  {
                    name: "update",
                    description: "Update latest comment",
                  },
                  {
                    name: "new",
                    description: "Create a new comment",
                  },
                  {
                    name: "delete-and-new",
                    description:
                      "Delete previous matching comments and create a new comment",
                  },
                ],
              },
            },
            {
              name: "--commit",
              description:
                "Commit SHA to post comment on, mutually exclusive with merge-request",
              exclusiveOn: ["--merge-request"],
              args: { name: "commit" },
            },
            {
              name: "--dry-run",
              description:
                "Generate comment without actually posting to GitLab",
            },
            {
              name: "--gitlab-server-url",
              description: "GitLab Server URL",
              args: {
                name: "gitlab-server-url",
                default: "https://gitlab.com",
              },
            },
            {
              name: "--gitlab-token",
              description: "GitLab token",
              args: { name: "gitlab-token" },
              isRequired: true,
            },
            {
              name: "--merge-request",
              description:
                "Merge request number to post comment on, mutually exclusive with commit",
              exclusiveOn: ["--commit"],
              args: { name: "merge-request", default: "0" },
            },
            {
              name: ["--path", "-p"],
              description:
                "Path to Infracost JSON files, glob patterns need quotes",
              isRepeatable: true,
              args: { name: "path", template: ["filepaths"] },
              isRequired: true,
            },
            {
              name: "--policy-path",
              description:
                "Path to Infracost policy files, glob patterns need quotes (experimental)",
              isRepeatable: true,
              args: { name: "policy-path" },
            },
            {
              name: "--repo",
              description: "Repository in format owner/repo",
              args: { name: "owner/repo" },
              isRequired: true,
            },
            {
              name: "--show-all-projects",
              description:
                "Show all projects in the table of the comment output",
            },
            {
              name: "--show-changed",
              description:
                "Show only projects in the table that have code changes",
              hidden: true,
            },
            {
              name: "--show-skipped",
              description: "List unsupported and free resources",
            },
            {
              name: "--skip-no-diff",
              description:
                "Skip posting comment if there are no resource changes. Only applies to update, hide-and-new, and delete-and-new behaviors",
              hidden: true,
            },
            {
              name: "--tag",
              description:
                "Customize hidden markdown tag used to detect comments posted by Infracost",
              args: { name: "tag" },
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion script",
      options: [
        {
          name: "--shell",
          description: "Supported shell formats: bash, zsh, fish, powershell",
          args: { name: "shell" },
          isRequired: true,
        },
      ],
    },
    {
      name: "configure",
      description: "Display or change global configuration",
      subcommands: [
        {
          name: "get",
          description: "Get global configuration",
          subcommands: [
            { name: "api_key" },
            { name: "currency" },
            { name: "pricing_api_endpoint" },
            { name: "enable_dashboard" },
            { name: "enable_cloud" },
            { name: "disable_hcl" },
            { name: "tls_insecure_skip_verify" },
            { name: "tls_ca_cert_file" },
          ],
        },
        {
          name: "set",
          description: "Set global configuration",
          subcommands: [
            { name: "api_key", args: { name: "api_key" } },
            {
              name: "currency",
              description: "Currency code (ISO 4217)",
              args: {
                name: "currency",
              },
            },
            {
              name: "pricing_api_endpoint",
              args: { name: "Pricing API endpoint" },
            },
            { name: "enable_dashboard" },
            { name: "enable_cloud" },
            { name: "disable_hcl" },
            {
              name: "tls_insecure_skip_verify",
              args: {
                name: "tls_insecure_skip_verify",
                suggestions: [{ name: "true" }, { name: "false" }],
              },
            },
            { name: "tls_ca_cert_file" },
          ],
        },
      ],
    },
    {
      name: "diff",
      description:
        "Show diff of monthly costs between current and planned state",
      options: [
        {
          name: "--compare-to",
          description: "Path to Infracost JSON file to compare against",
          args: { name: "compare-to" },
        },
        {
          name: "--config-file",
          description:
            "Path to Infracost config file. Cannot be used with path, terraform* or usage-file flags",
          args: { name: "config-file", template: ["filepaths"] },
        },
        {
          name: "--exclude-path",
          description:
            "Paths of directories to exclude, glob patterns need quotes",
          args: { name: "exclude-path" },
        },
        {
          name: "--format",
          description: "Output format: json, diff",
          args: { name: "format", default: "diff" },
        },
        {
          name: "--git-diff-target",
          description:
            "Show only costs that have git changes compared to the provided branch. Use the name of the current branch to fetch changes from the last two commits",
          hidden: true,
          args: { name: "git-diff-target", default: "master" },
        },
        {
          name: "--include-all-paths",
          description:
            "Set project auto-detection to use all subdirectories in given path",
        },
        {
          name: "--no-cache",
          description: "Don't attempt to cache Terraform plans",
        },
        {
          name: "--out-file",
          description: "Save output to a file",
          args: { name: "out-file" },
        },
        {
          name: ["--path", "-p"],
          description: "Path to the Terraform directory or JSON/plan file",
          args: { name: "path", template: ["filepaths"] },
        },
        {
          name: "--project-name",
          description:
            "Name of project in the output. Defaults to path or git repo name",
          args: { name: "project-name" },
        },
        {
          name: "--show-skipped",
          description: "List unsupported and free resources",
        },
        {
          name: "--sync-usage-file",
          description:
            "Sync usage-file with missing resources, needs usage-file too (experimental)",
        },
        {
          name: "--terraform-force-cli",
          description:
            "Generate the Terraform plan JSON using the Terraform CLI. This may require cloud credentials",
          hidden: true,
        },
        {
          name: "--terraform-init-flags",
          description:
            "Flags to pass to 'terraform init'. Applicable with --terraform-force-cli",
          hidden: true,
          args: { name: "terraform-init-flags" },
        },
        {
          name: "--terraform-plan-flags",
          description:
            "Flags to pass to 'terraform plan'. Applicable with --terraform-force-cli",
          hidden: true,
          args: { name: "terraform-plan-flags" },
        },
        {
          name: "--terraform-var",
          description:
            "Set value for an input variable, similar to Terraform's -var flag",
          args: { name: "terraform-var" },
        },
        {
          name: "--terraform-var-file",
          description:
            "Load variable files, similar to Terraform's -var-file flag. Provided files must be relative to the --path flag",
          args: { name: "terraform-var-file" },
        },
        {
          name: "--terraform-workspace",
          description:
            "Terraform workspace to use. Applicable when path is a Terraform directory",
          args: { name: "terraform-workspace" },
        },
        {
          name: "--usage-file",
          description:
            "Path to Infracost usage file that specifies values for usage-based resources",
          args: { name: "usage-file", template: ["filepaths"] },
        },
      ],
    },
    {
      name: "generate",
      description: "Generate configuration to help run Infracost",
      subcommands: [
        {
          name: "config",
          description: "Generate Infracost config file from a template file",
          options: [
            {
              name: "--out-file",
              description: "Save output to a file",
              args: { name: "out-file" },
            },
            {
              name: "--repo-path",
              description:
                "Path to the Terraform repo or directory you want to run the template file on",
              args: { name: "repo-path", default: "." },
            },
            {
              name: "--template",
              description:
                "Infracost template string that will generate the config-file yaml output",
              args: { name: "template" },
            },
            {
              name: "--template-path",
              description:
                "Path to the Infracost template file that will generate the config-file yaml output",
              args: { name: "template-path" },
            },
          ],
        },
      ],
    },
    {
      name: "output",
      description:
        "Combine and output Infracost JSON files in different formats",
      options: [
        {
          name: "--fields",
          description:
            "Comma separated list of output fields: all,price,monthlyQuantity,unit,hourlyCost,monthlyCost. Supported by table and html output formats",
          args: {
            name: "fields",
            default: "[monthlyQuantity,unit,monthlyCost]",
          },
        },
        {
          name: "--format",
          description:
            "Output format: json, diff, table, html, github-comment, gitlab-comment, azure-repos-comment, bitbucket-comment, bitbucket-comment-summary, slack-message",
          args: { name: "format", default: "table" },
        },
        {
          name: ["--out-file", "-o"],
          description: "Save output to a file, helpful with format flag",
          args: { name: "out-file" },
        },
        {
          name: ["--path", "-p"],
          description:
            "Path to Infracost JSON files, glob patterns need quotes",
          isRepeatable: true,
          args: { name: "path", template: ["filepaths"] },
          isRequired: true,
        },
        {
          name: "--show-all-projects",
          description: "Show all projects in the table of the comment output",
        },
        {
          name: "--show-skipped",
          description: "List unsupported and free resources",
        },
      ],
    },
    {
      name: "upload",
      description: "Upload an Infracost JSON file to Infracost Cloud",
      options: [
        {
          name: "--path",
          description: "Path to Infracost JSON file",
          args: { name: "path", default: "p", template: ["filepaths"] },
          isRequired: true,
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "auth",
          description: "Get a free API key, or log in to your existing account",
          subcommands: [
            {
              name: "login",
              description: "Authenticate the CLI with your Infracost account",
            },
          ],
        },
        { name: "breakdown", description: "Show breakdown of costs" },
        {
          name: "comment",
          description:
            "Post an Infracost comment to GitHub, GitLab, Azure Repos or Bitbucket",
          subcommands: [
            {
              name: "azure-repos",
              description: "Post an Infracost comment to Azure Repos",
            },
            {
              name: "bitbucket",
              description: "Post an Infracost comment to Bitbucket",
            },
            {
              name: "github",
              description: "Post an Infracost comment to GitHub",
            },
            {
              name: "gitlab",
              description: "Post an Infracost comment to GitLab",
            },
          ],
        },
        {
          name: "completion",
          description: "Generate shell completion script",
        },
        {
          name: "configure",
          description: "Display or change global configuration",
          subcommands: [
            { name: "get", description: "Get global configuration" },
            { name: "set", description: "Set global configuration" },
          ],
        },
        {
          name: "diff",
          description:
            "Show diff of monthly costs between current and planned state",
        },
        {
          name: "generate",
          description: "Generate configuration to help run Infracost",
          subcommands: [
            {
              name: "config",
              description:
                "Generate Infracost config file from a template file",
            },
          ],
        },
        {
          name: "output",
          description:
            "Combine and output Infracost JSON files in different formats",
        },
        {
          name: "upload",
          description: "Upload an Infracost JSON file to Infracost Cloud",
        },
      ],
    },
  ],
  options: [
    {
      name: "--debug-report",
      description:
        "Generate a debug report file which can be sent to Infracost team",
      isPersistent: true,
    },
    {
      name: "--log-level",
      description: "Log level",
      isPersistent: true,
      args: {
        name: "log-level",
        suggestions: [
          {
            name: "trace",
          },
          {
            name: "debug",
          },
          {
            name: "info",
          },
          {
            name: "warn",
          },
          {
            name: "error",
          },
          {
            name: "fatal",
          },
        ],
      },
    },
    {
      name: "--no-color",
      description: "Turn off colored output",
      isPersistent: true,
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};

const versions: Fig.VersionDiffMap = {};

versions["0.10.30"] = {};

export { versions };
export default completion;
