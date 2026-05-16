// If you edit terraform commands or options, please copy our changes on to the terraform spec
// ARGUMENTS json-out etc
const workspaceList: Fig.Generator = {
  script: ["terragrunt", "workspace", "list"],
  postProcess: function (out) {
    return out.split("\n").map((workspace) => {
      return {
        name: workspace.replace("* ", "").trim(),
        icon: "https://terragrunt.gruntwork.io/assets/img/favicon/favicon.ico",
        description: "Workspace",
      };
    });
  },
};

const addressList: Fig.Generator = {
  script: ["terragrunt", "state", "list"],
  postProcess: function (out) {
    if (out.includes("No state file was found!") || out.includes("Error")) {
      return [];
    }
    return out.split("\n").map((addresses) => {
      return {
        name: addresses.replace("* ", "").trim(),
        icon: "https://terragrunt.gruntwork.io/assets/img/favicon/favicon.ico",
        description: "Address",
      };
    });
  },
};

const generalSubCommandOptions: Fig.Option[] = [
  {
    name: "-lock",
    requiresSeparator: true,
    description:
      "Lock the state file when locking is supported. Defaults to true",
    args: {
      name: "true or false",
      suggestions: ["true", "false"],
    },
  },
  {
    name: "-force",
    requiresSeparator: true,
    description:
      "Delete the workspace even if its state is not empty. Defaults to false",
    args: {
      name: "true or false",
      suggestions: ["true", "false"],
    },
  },
  {
    name: "-lock-timeout",
    requiresSeparator: true,
    description: "Duration to retry a state lock. Default 0s",
    args: {
      name: "seconds",
    },
  },
  {
    name: "-input",
    requiresSeparator: true,
    description: "Ask for input for variables if not directly set",
    args: {
      name: "true or false",
      suggestions: ["true", "false"],
    },
  },
  {
    name: "-no-color",
    description: "Disables output with coloring",
  },
];

const globalOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description:
      "Show this help output, or the help for a specified subcommand",
  },
  {
    name: ["-v", "--version"],
    description: "Show the current Terragrunt version",
  },
  {
    name: "--terragrunt-config",
    description:
      "Path to the Terragrunt config file. Default is terragrunt.hcl",
    args: {
      template: ["filepaths"],
    },
  },
  {
    name: "--terragrunt-tfpath",
    description: "Path to the Terraform binary. Default is terraform (on PATH)",
    args: {
      template: ["filepaths"],
    },
  },
  {
    name: "--terragrunt-no-auto-init",
    description:
      "Don't automatically run 'terraform init' during other terragrunt commands. You must run 'terragrunt init' manually",
  },
  {
    name: "--terragrunt-no-auto-retry",
    description:
      "Don't automatically re-run command in case of transient errors",
  },
  {
    name: "--terragrunt-non-interactive",
    description: "Assume 'yes' for all prompts",
  },
  {
    name: "--terragrunt-working-dir",
    description:
      "The path to the Terraform templates. Default is current directory",
    args: {
      template: ["folders"],
    },
  },
  {
    name: "--terragrunt-download-dir",
    description:
      "The path where to download Terraform code. Default is .terragrunt-cache in the working directory",
    args: {
      template: ["folders"],
    },
  },
  {
    name: "--terragrunt-source",
    description:
      "Download Terraform configurations from the specified source into a temporary folder, and run Terraform in that temporary folder",
    args: {
      template: ["folders"],
    },
  },
  {
    name: "--terragrunt-source-map",
    description:
      "Replaces any source URL (including the source URL of a config pulled in with dependency blocks) that has root source with dest",
  },
  {
    name: "--terragrunt-source-update",
    description:
      "Delete the contents of the temporary folder to clear out any old, cached source code before downloading new source code into it",
  },
  {
    name: "--terragrunt-ignore-dependency-errors",
    description:
      "*-all commands continue processing components even if a dependency fails",
  },
  {
    name: "--terragrunt-iam-role",
    description:
      "Assume the specified IAM role before executing Terraform. Can also be set via the TERRAGRUNT_IAM_ROLE environment variable",
    args: {
      name: "IAM role ARN",
    },
  },
  {
    name: "--terragrunt-iam-assume-role-duration",
    description:
      "Session duration for IAM Assume Role session. Can also be set via the TERRAGRUNT_IAM_ASSUME_ROLE_DURATION environment variable",
    args: {
      name: "Duration",
    },
  },
  {
    name: "--terragrunt-iam-assume-role-session-name",
    description:
      "Name for the IAM Assummed Role session. Can also be set via TERRAGRUNT_IAM_ASSUME_ROLE_SESSION_NAME environment variable",
    args: {
      name: "Session name",
    },
  },
  {
    name: "--terragrunt-exclude-dir",
    description:
      "Unix-style glob of directories to exclude when running *-all commands",
    args: {
      template: ["folders"],
    },
  },
  {
    name: "--terragrunt-include-dir",
    description:
      "Unix-style glob of directories to include when running *-all commands",
    args: {
      template: ["folders"],
    },
  },
  {
    name: "--terragrunt-strict-include",
    description:
      "Only modules under the directories passed in with –terragrunt-include-dir will be included. All dependencies of the included directories will be excluded if they are not in the included directories. If no –terragrunt-include-dir flags are included, terragrunt will not include any modules during the execution of the commands",
  },
  {
    name: "--terragrunt-strict-validate",
    description:
      "Sets strict mode for the validate-inputs command. By default, strict mode is off. When this flag is passed, strict mode is turned on. When strict mode is turned off, the validate-inputs command will only return an error if required inputs are missing from all input sources (env vars, var files, etc). When strict mode is turned on, an error will be returned if required inputs are missing OR if unused variables are passed to Terragrunt",
  },
  {
    name: "--terragrunt-ignore-dependency-order",
    description: "*-all commands will be run disregarding the dependencies",
  },
  {
    name: "--terragrunt-ignore-external-dependencies",
    description:
      "*-all commands will not attempt to include external dependencies",
  },
  {
    name: "--terragrunt-include-external-dependencies",
    description: "*-all commands will include external dependencies",
  },
  {
    name: "--terragrunt-parallelism",
    description: "*-all commands parallelism set to at most N modules",
    args: {
      name: "N",
      description: "Number of modules",
    },
  },
  {
    name: "--terragrunt-debug",
    description:
      "Write terragrunt-debug.tfvars to working folder to help root-cause issues",
  },
  {
    name: "--terragrunt-log-level",
    description:
      "Sets the logging level for Terragrunt. Supported levels: panic, fatal, error, warn (default), info, debug, trace",
  },
  {
    name: "--terragrunt-check",
    description: "Enable check mode in the hclfmt command",
  },
  {
    name: "--terragrunt-hclfmt-file",
    description:
      "The path to a single hcl file that the hclfmt command should run on",
    args: {
      name: "hcl file",
      template: ["filepaths"],
    },
  },
  {
    name: "--terragrunt-override-attr",
    description:
      "A key=value attribute to override in a provider block as part of the aws-provider-patch command. May be specified multiple times",
    args: {},
  },
  {
    name: "--terragrunt-json-out",
    description:
      "The file path that terragrunt should use when rendering the terragrunt.hcl config as json. Only used in the render-json command. Defaults to terragrunt_rendered.json",
    args: {
      template: ["filepaths"],
    },
  },
  {
    name: "--terragrunt-modules-that-include",
    description:
      "When passed in, run-all will only run the command against Terragrunt modules that include the specified file",
    args: {
      template: ["filepaths"],
    },
  },
];

const terraformCommands: Fig.Subcommand[] = [
  {
    name: "init",
    description: "Prepare your working directory for other commands",
    options: [
      {
        name: "-upgrade",
        description:
          "Opt to upgrade modules and plugins as part of their respective installation steps",
      },
      ...generalSubCommandOptions,
      ...globalOptions,
    ],
  },
  {
    name: "validate",
    description: "Check whether the configuration is valid",
    options: [...globalOptions],
  },
  {
    name: "plan",
    description: "Show changes required by the current configuration",
    options: [
      {
        name: "-compact-warnings",
        description:
          "If Terraform produces any warnings that are not accompanied by errors, show them in a more compact form that includes only the summary messages",
      },
      {
        name: "-destroy",
        description:
          "If set, generates a plan to destroy all the known resources",
      },
      {
        name: "-detailed-exitcode",
        description: "Return a detailed exit code when the command exits",
      },
      {
        name: "-out",
        requiresSeparator: true,
        description: "The path to save the generated execution plan",
      },
      {
        name: "-parallelism",
        description:
          "Limit the number of concurrent operation as Terraform walks the graph. Defaults to 10",
        args: {
          name: "number",
        },
      },
      {
        name: "-refresh",
        requiresSeparator: true,
        description: "Update the state prior to checking for differences",
        args: {
          name: "true or false",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "-state",
        requiresSeparator: true,
        description:
          "Path to the state file. Defaults to 'terraform.tfstate'. Ignored when remote state is used",
        args: {
          template: "filepaths",
        },
      },
      {
        name: "-target",
        displayName: "-target=resource",
        description:
          "A Resource Address to target. This flag can be used multiple times",
        isRepeatable: true,
      },
      {
        name: "-var",
        insertValue: "-var {cursor}",
        description:
          "Set a variable in the Terraform configuration. This flag can be set multiple times",
        isRepeatable: true,
        args: {
          name: "foo=bar",
        },
      },
      {
        name: "-var-file",
        requiresSeparator: true,
        description:
          "Set variables in the Terraform configuration from a variable file",
        args: {
          template: "filepaths",
        },
      },
      ...generalSubCommandOptions,
      ...globalOptions,
    ],
  },
  {
    name: "apply",
    description: "Create or update infrastructure",
    options: [...globalOptions],
  },
  {
    name: "destroy",
    description: "Destroy previously-created infrastructure",
    options: [...globalOptions],
  },
];

const terraformOtherCommands: Fig.Subcommand[] = [
  {
    name: "console",
    description: "Try Terraform expressions at an interactive command prompt",
    options: [...globalOptions],
  },
  {
    name: "fmt",
    description: "Reformat your configuration in the standard style",
    options: [...globalOptions],
  },
  {
    name: "force-unlock",
    description: "Release a stuck lock on the current workspace",
    options: [...globalOptions],
  },
  {
    name: "get",
    description: "Install or upgrade remote Terraform modules",
    options: [
      {
        name: "-update",
        description:
          "If specified, modules that are already downloaded will be checked for updates and the updates will be downloaded if present",
      },
      ...globalOptions,
    ],
  },
  {
    name: "graph",
    description: "Generate a Graphviz graph of the steps in an operation",
    options: [...globalOptions],
  },
  {
    name: "import",
    description: "Associate existing infrastructure with a Terraform resource",
    options: [...globalOptions],
  },
  {
    name: "login",
    description: "Obtain and save credentials for a remote hos",
    options: [...globalOptions],
  },
  {
    name: "logout",
    description: "Remove locally-stored credentials for a remote host",
    options: [...globalOptions],
  },
  {
    name: "output",
    description: "Show output values from your root module",
    options: [...globalOptions],
  },
  {
    name: "providers",
    description: "Show the providers required for this configuration",
    options: [...globalOptions],
  },
  {
    name: "refresh",
    description: "Update the state to match remote systems",
    options: [...globalOptions],
  },
  {
    name: "show",
    description: "Show the current state or a saved plan",
    options: [...globalOptions],
  },
  {
    name: "state",
    description: "Advanced state management",
  },
  {
    name: "taint",
    description: "Mark a resource instance as not fully functional",
    options: [
      {
        name: "-allow-missing",
        description:
          "If specified, the command will succeed (exit code 0) even if the resource is missing. The command might still return an error for other situations, such as if there is a problem reading or writing the state",
      },
      {
        name: "-lock",
        requiresSeparator: true,
        description:
          "Disables Terraform's default behavior of attempting to take a read/write lock on the state for the duration of the operation if set to false. Defaults to true",
        args: {
          name: "true or false",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "-lock-timeout",
        requiresSeparator: true,
        description:
          "Unless locking is disabled with -lock=false, instructs Terraform to retry acquiring a lock for a period of time before returning an error. The duration syntax is a number followed by a time unit letter, such as 3s for three seconds",
        args: {
          name: "seconds",
        },
      },
      {
        name: "-ignore-remote-version",
        description:
          "When using the enhanced remote backend with Terraform Cloud, continue even if remote and local Terraform versions differ. This may result in an unusable Terraform Cloud workspace, and should be used with extreme caution",
        args: {
          name: "seconds",
        },
      },
      ...globalOptions,
    ],
    args: {
      generators: addressList,
      name: "address",
    },
  },
  {
    name: "untaint",
    description: "Remove the 'tainted' state from a resource instance",
    options: [...globalOptions],
  },
  {
    name: "workspace",
    description: "Workspace management",
    options: [...globalOptions],
    subcommands: [
      {
        name: "new",
        insertValue: "new '{cursor}'",
        description: "Create a new workspace",
        args: {
          name: "workspace name",
        },
        options: [
          {
            name: "-lock",
            description:
              "Lock the state file when locking is supported. Defaults to true",
            args: {
              name: "true or false",
              suggestions: ["true", "false"],
            },
          },
          {
            name: "-lock-timeout",
            description: "Duration to retry a stae lock. Default 0s",
            args: {
              name: "seconds",
            },
          },
          {
            name: "-state",
            requiresSeparator: true,
            description:
              "Path to an existing state file to initialize the state of this environment",
            args: {
              name: "path",
              template: "filepaths",
            },
          },
          ...globalOptions,
        ],
      },
      {
        name: "show",
        description: "Display the current workspace",
        options: [...globalOptions],
      },
      {
        name: "list",
        description: "List the workspace",
        options: [...globalOptions],
      },
      {
        name: "delete",
        description: "Delete the specified workspace",
        args: {
          generators: workspaceList,
          name: "workspace name",
        },
        options: [...generalSubCommandOptions],
      },
      {
        name: "select",
        description: "Change the current working workspace",
        args: {
          generators: workspaceList,
        },
      },
    ],
  },
];

const terragruntCommands: Fig.Subcommand[] = [
  {
    name: "run-all",
    description:
      "Run a terraform command against a 'stack' by running the specified command in each subfolder. E.g., to run 'terragrunt apply' in each subfolder, use 'terragrunt run-all apply'",
  },
  {
    name: "terragrunt-info",
    description: "Emits limited terragrunt state on stdout and exits",
  },
  {
    name: "validate-inputs",
    description:
      "Checks if the terragrunt configured inputs align with the terraform defined variables",
  },
  {
    name: "graph-dependencies",
    description: "Prints the terragrunt dependency graph to stdout",
  },
  {
    name: "hclfmt",
    description:
      "Recursively find hcl files and rewrite them into a canonical format",
  },
  {
    name: "aws-provider-patch",
    description:
      "Overwrite settings on nested AWS providers to work around a Terraform bug (issue #13018)",
  },
  {
    name: "render-json",
    description:
      "Render the final terragrunt config, with all variables, includes, and functions resolved, as json. This is useful for enforcing policies using static analysis tools like Open Policy Agent, or for debugging your terragrunt config",
  },
];

const completionSpec: Fig.Spec = {
  name: "terragrunt",
  description: "Terragrunt CLI",
  options: globalOptions,
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  subcommands: [
    ...terraformCommands,
    ...terraformOtherCommands,
    ...terragruntCommands,
  ],
};

export default completionSpec;
