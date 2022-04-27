const completion: Fig.Subcommand = {
  name: "infracost",
  description: "Cloud cost estimates for Terraform",
  subcommands: [
    {
      name: "breakdown",
      description: "Show full breakdown of costs",
      options: [
        {
          name: "--config-file",
          description:
            "Path to Infracost config file. Cannot be used with path, terraform* or usage-file flags",
          args: {
            name: "config-file",
            template: ["filepaths"],
          },
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
          },
        },
        {
          name: "--no-cache",
          description: "Don't attempt to cache Terraform plans",
        },
        {
          name: "--out-file",
          description: "Save output to a file, helpful with format flag",
          args: {
            name: "out-file",
          },
        },
        {
          name: ["--path", "-p"],
          description: "Path to the Terraform directory or JSON/plan file",
          args: {
            name: "path",
            template: ["filepaths"],
          },
        },
        {
          name: "--show-skipped",
          description: "Show unsupported resources",
        },
        {
          name: "--sync-usage-file",
          description:
            "Sync usage-file with missing resources, needs usage-file too (experimental)",
        },
        {
          name: "--terraform-parse-hcl",
          description:
            "Parse the HCL directly instead of generating a Terraform plan. This option does not need credentials and is faster (experimental)",
          hidden: true,
        },
        {
          name: "--terraform-plan-flags",
          description:
            "Flags to pass to 'terraform plan'. Applicable when path is a Terraform directory",
          args: {
            name: "terraform-plan-flags",
          },
        },
        {
          name: "--terraform-use-state",
          description:
            "Use Terraform state instead of generating a plan. Applicable when path is a Terraform directory",
        },
        {
          name: "--terraform-var",
          description:
            "Set a value for one of the input variables, similar to Terraform's -var flag. Only supported with --terraform-parse-hcl (experimental)",
          hidden: true,
          args: {
            name: "terraform-var",
          },
        },
        {
          name: "--terraform-var-file",
          description:
            "Load variable files from the given file, similar to Terraform's -var-file flag. Only supported with --terraform-parse-hcl (experimental)",
          hidden: true,
          args: {
            name: "terraform-var-file",
          },
        },
        {
          name: "--terraform-workspace",
          description:
            "Terraform workspace to use. Applicable when path is a Terraform directory",
          args: {
            name: "terraform-workspace",
          },
        },
        {
          name: "--usage-file",
          description:
            "Path to Infracost usage file that specifies values for usage-based resources",
          args: {
            name: "usage-file",
            template: ["filepaths"],
          },
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
              name: "--azure-access-token",
              description: "Azure DevOps access token",
              args: {
                name: "azure-access-token",
              },
              isRequired: true,
            },
            {
              name: "--behavior",
              description:
                "Behavior when posting comment, one of:   update (default)  Update latest comment   new               Create a new comment   delete-and-new    Delete previous matching comments and create a new comment",
              args: {
                name: "behavior",
                default: "update",
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
              args: {
                name: "path",
                template: ["filepaths"],
              },
              isRequired: true,
            },
            {
              name: "--policy-path",
              description:
                "Path to Infracost policy files, glob patterns need quotes (experimental)",
              isRepeatable: true,
              args: {
                name: "policy-path",
              },
            },
            {
              name: "--pull-request",
              description: "Pull request number to post comment on",
              args: {
                name: "pull-request",
                default: "0",
              },
              isRequired: true,
            },
            {
              name: "--repo-url",
              description:
                "Repository URL, e.g. https://dev.azure.com/my-org/my-project/_git/my-repo",
              args: {
                name: "repo-url",
              },
              isRequired: true,
            },
            {
              name: "--tag",
              description:
                "Customize hidden markdown tag used to detect comments posted by Infracost",
              args: {
                name: "tag",
              },
            },
          ],
        },
        {
          name: "bitbucket",
          description: "Post an Infracost comment to Bitbucket",
          options: [
            {
              name: "--behavior",
              description:
                "Behavior when posting comment, one of:   update (default)  Update latest comment   new               Create a new comment   delete-and-new    Delete previous matching comments and create a new comment",
              args: {
                name: "behavior",
                default: "update",
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
              args: {
                name: "bitbucket-token",
              },
              isRequired: true,
            },
            {
              name: "--commit",
              description:
                "Commit SHA to post comment on, mutually exclusive with pull-request. Not available when bitbucket-server-url is set",
              args: {
                name: "commit",
              },
            },
            {
              name: "--dry-run",
              description:
                "Generate comment without actually posting to Bitbucket",
            },
            {
              name: ["--path", "-p"],
              description:
                "Path to Infracost JSON files, glob patterns need quotes",
              isRepeatable: true,
              args: {
                name: "path",
                template: ["filepaths"],
              },
              isRequired: true,
            },
            {
              name: "--policy-path",
              description:
                "Path to Infracost policy files, glob patterns need quotes (experimental)",
              isRepeatable: true,
              args: {
                name: "policy-path",
              },
            },
            {
              name: "--pull-request",
              description: "Pull request number to post comment on",
              args: {
                name: "pull-request",
                default: "0",
              },
            },
            {
              name: "--repo",
              description: "Repository in format workspace/repo",
              args: {
                name: "repo",
              },
              isRequired: true,
            },
            {
              name: "--tag",
              description:
                "Customize special text used to detect comments posted by Infracost (placed at the bottom of a comment)",
              args: {
                name: "tag",
              },
            },
          ],
        },
        {
          name: "github",
          description: "Post an Infracost comment to GitHub",
          options: [
            {
              name: "--behavior",
              description:
                "Behavior when posting comment, one of:   update (default)  Update latest comment   new               Create a new comment   hide-and-new      Hide previous matching comments and create a new comment   delete-and-new    Delete previous matching comments and create a new comment",
              args: {
                name: "behavior",
                default: "update",
              },
            },
            {
              name: "--commit",
              description:
                "Commit SHA to post comment on, mutually exclusive with pull-request",
              args: {
                name: "commit",
              },
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
              name: "--github-token",
              description: "GitHub token",
              args: {
                name: "github-token",
              },
              isRequired: true,
            },
            {
              name: ["--path", "-p"],
              description:
                "Path to Infracost JSON files, glob patterns need quotes",
              isRepeatable: true,
              args: {
                name: "path",
                template: ["filepaths"],
              },
              isRequired: true,
            },
            {
              name: "--policy-path",
              description:
                "Path to Infracost policy files, glob patterns need quotes (experimental)",
              isRepeatable: true,
              args: {
                name: "policy-path",
              },
            },
            {
              name: "--pull-request",
              description:
                "Pull request number to post comment on, mutually exclusive with commit",
              args: {
                name: "pull-request",
                default: "0",
              },
            },
            {
              name: "--repo",
              description: "Repository in format owner/repo",
              args: {
                name: "repo",
              },
              isRequired: true,
            },
            {
              name: "--tag",
              description:
                "Customize hidden markdown tag used to detect comments posted by Infracost",
              args: {
                name: "tag",
              },
            },
          ],
        },
        {
          name: "gitlab",
          description: "Post an Infracost comment to GitLab",
          options: [
            {
              name: "--behavior",
              description:
                "Behavior when posting comment, one of:   update (default)  Update latest comment   new               Create a new comment   delete-and-new    Delete previous matching comments and create a new comment",
              args: {
                name: "behavior",
                default: "update",
              },
            },
            {
              name: "--commit",
              description:
                "Commit SHA to post comment on, mutually exclusive with merge-request",
              args: {
                name: "commit",
              },
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
              args: {
                name: "gitlab-token",
              },
              isRequired: true,
            },
            {
              name: "--merge-request",
              description:
                "Merge request number to post comment on, mutually exclusive with commit",
              args: {
                name: "merge-request",
                default: "0",
              },
            },
            {
              name: ["--path", "-p"],
              description:
                "Path to Infracost JSON files, glob patterns need quotes",
              isRepeatable: true,
              args: {
                name: "path",
                template: ["filepaths"],
              },
              isRequired: true,
            },
            {
              name: "--policy-path",
              description:
                "Path to Infracost policy files, glob patterns need quotes (experimental)",
              isRepeatable: true,
              args: {
                name: "policy-path",
              },
            },
            {
              name: "--repo",
              description: "Repository in format owner/repo",
              args: {
                name: "repo",
              },
              isRequired: true,
            },
            {
              name: "--tag",
              description:
                "Customize hidden markdown tag used to detect comments posted by Infracost",
              args: {
                name: "tag",
              },
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
          args: {
            name: "shell",
          },
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
        },
        {
          name: "set",
          description: "Set global configuration",
        },
      ],
    },
    {
      name: "diff",
      description:
        "Show diff of monthly costs between current and planned state",
      options: [
        {
          name: "--config-file",
          description:
            "Path to Infracost config file. Cannot be used with path, terraform* or usage-file flags",
          args: {
            name: "config-file",
            template: ["filepaths"],
          },
        },
        {
          name: "--no-cache",
          description: "Don't attempt to cache Terraform plans",
        },
        {
          name: "--out-file",
          description: "Save output to a file",
          args: {
            name: "out-file",
          },
        },
        {
          name: ["--path", "-p"],
          description: "Path to the Terraform directory or JSON/plan file",
          args: {
            name: "path",
            template: ["filepaths"],
          },
        },
        {
          name: "--show-skipped",
          description: "Show unsupported resources",
        },
        {
          name: "--sync-usage-file",
          description:
            "Sync usage-file with missing resources, needs usage-file too (experimental)",
        },
        {
          name: "--terraform-plan-flags",
          description:
            "Flags to pass to 'terraform plan'. Applicable when path is a Terraform directory",
          args: {
            name: "terraform-plan-flags",
          },
        },
        {
          name: "--terraform-workspace",
          description:
            "Terraform workspace to use. Applicable when path is a Terraform directory",
          args: {
            name: "terraform-workspace",
          },
        },
        {
          name: "--usage-file",
          description:
            "Path to Infracost usage file that specifies values for usage-based resources",
          args: {
            name: "usage-file",
            template: ["filepaths"],
          },
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
          description: "Output format",
          args: {
            name: "format",
            default: "table",
            suggestions: [
              "json",
              "diff",
              "table",
              "html",
              "github-comment",
              "gitlab-comment",
              "azure-repos-comment",
              "bitbucket-comment",
              "slack-message",
            ],
          },
        },
        {
          name: ["--out-file", "-o"],
          description: "Save output to a file, helpful with format flag",
          args: {
            name: "out-file",
          },
        },
        {
          name: ["--path", "-p"],
          description:
            "Path to Infracost JSON files, glob patterns need quotes",
          isRepeatable: true,
          args: {
            name: "path",
            template: ["filepaths"],
          },
          isRequired: true,
        },
        {
          name: "--show-skipped",
          description: "Show unsupported resources",
        },
      ],
    },
    {
      name: "register",
      description: "Register for a free Infracost API key",
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "breakdown",
          description: "Show full breakdown of costs",
        },
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
            {
              name: "get",
              description: "Get global configuration",
            },
            {
              name: "set",
              description: "Set global configuration",
            },
          ],
        },
        {
          name: "diff",
          description:
            "Show diff of monthly costs between current and planned state",
        },
        {
          name: "output",
          description:
            "Combine and output Infracost JSON files in different formats",
        },
        {
          name: "register",
          description: "Register for a free Infracost API key",
        },
      ],
    },
  ],
  options: [
    {
      name: "--log-level",
      description: "Log level",
      isPersistent: true,
      args: {
        name: "log-level",
        suggestions: ["trace", "debug", "info", "warn", "error", "fatal"],
      },
    },
    {
      name: "--no-color",
      description: "Turn off colored output",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Display help",
      isPersistent: true,
    },
  ],
};

const versions: Fig.VersionDiffMap = {};

versions["0.9.19"] = {};

export { versions };
export default completion;
