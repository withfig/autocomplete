const generalSubCommandOptions: Fig.Option[] = [
  {
    name: "-lock",
    insertValue: "-lock=",
    description:
      "Lock the state file when locking is supported. Defaults to true",
    args: {
      name: "true or false",
      suggestions: ["true", "false"],
    },
  },
  {
    name: "-force",
    insertValue: "-force=",
    description:
      "Delete the workspace even if its state is not empty. Defaults to false",
    args: {
      name: "true or false",
      suggestions: ["true", "false"],
    },
  },
  {
    name: "-lock-timeout",
    insertValue: "-lock-timeout=",
    description: "Duration to retry a state lock. Default 0s",
    args: {
      name: "seconds",
      default: "0",
    },
  },
  {
    name: "-input",
    insertValue: "-input=",
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
    name: "-help",
    description:
      "Show this help output, or the help for a specified subcommand",
    isPersistent: true,
  },
  {
    name: "-chdir",
    description:
      "Switch to a different working directory before executing the given subcommand",
    insertValue: "-chdir=",
    args: {
      template: "filepaths",
    },
    isPersistent: true,
  },
  {
    name: "-version",
    description: "Show the current terragrunt version",
    isPersistent: true,
  },
  {
    name: "--terragrunt-config",
    description:
      "Path to the Terragrunt config file. Default is terragrunt.hcl",
    isPersistent: true,
  },
  {
    name: "--terragrunt-tfpath",
    description: "Path to the Terraform binary. Default is terraform (on PATH)",
    isPersistent: true,
  },
  {
    name: "--terragrunt-no-auto-init",
    description:
      "Don't automatically run 'terraform init' during other terragrunt commands. You must run 'terragrunt init' manually",
    isPersistent: true,
  },
  {
    name: "--terragrunt-non-interactive",
    description: "Assume 'yes' for all prompts",
    isPersistent: true,
  },
  {
    name: "--terragrunt-working-dir",
    description:
      "The path to the Terraform templates. Default is current directory",
    isPersistent: true,
  },
  {
    name: "--terragrunt-download-dir",
    description:
      "The path where to download Terraform code. Default is .terragrunt-cache in the working directory",
    isPersistent: true,
  },
  {
    name: "--terragrunt-source",
    description:
      "Download Terraform configurations from the specified source into a temporary folder, and run Terraform in that temporary folder",
    isPersistent: true,
  },
  {
    name: "--terragrunt-source-update",
    description:
      "Delete the contents of the temporary folder to clear out any old, cached source code before downloading new source code into it",
    isPersistent: true,
  },
  {
    name: "--terragrunt-iam-role",
    description:
      "Assume the specified IAM role before executing Terraform. Can also be set via the TERRAGRUNT_IAM_ROLE environment variable",
    isPersistent: true,
  },
  {
    name: "--terragrunt-ignore-dependency-errors",
    description:
      "*-all commands continue processing components even if a dependency fails",
    isPersistent: true,
  },
  {
    name: "--terragrunt-ignore-dependency-order",
    description: "*-all commands will be run disregarding the dependencie",
    isPersistent: true,
  },
  {
    name: "--terragrunt-ignore-external-dependencies",
    description:
      "*-all commands will not attempt to include external dependencies",
    isPersistent: true,
  },
  {
    name: "--terragrunt-include-external-dependencies",
    description: "*-all commands will include external dependencies",
    isPersistent: true,
  },
  {
    name: "--terragrunt-parallelism",
    description: "*-all commands parallelism set to at most N module",
    args: {
      name: "modules",
    },
    isPersistent: true,
  },
  {
    name: "--terragrunt-exclude-dir",
    description:
      "Unix-style glob of directories to exclude when running *-all commands",
    isPersistent: true,
  },
  {
    name: "--terragrunt-include-dir",
    description:
      "Unix-style glob of directories to include when running *-all command",
    isPersistent: true,
  },
  {
    name: "--terragrunt-check",
    description: "Enable check mode in the hclfmt command",
    isPersistent: true,
  },
  {
    name: "--terragrunt-hclfmt-file",
    description:
      "The path to a single terragrunt.hcl file that the hclfmt command should run on",
    isPersistent: true,
  },
  {
    name: "--terragrunt-override-attr",
    description:
      "A key=value attribute to override in a provider block as part of the aws-provider-patch command. May be specified multiple times",
    isPersistent: true,
  },
  {
    name: "--terragrunt-debug",
    description:
      "Write terragrunt-debug.tfvars to working folder to help root-cause issues",
    isPersistent: true,
  },
  {
    name: "--terragrunt-log-level",
    description: "Sets the logging level for Terragrunt",
    args: {
      name: "level",
      suggestions: [
        "panic",
        "fatal",
        "error",
        "warn",
        "info",
        "debug",
        "trace",
      ],
      default: "warn",
    },
    isPersistent: true,
  },
];

const mainCommands: Fig.Subcommand[] = [
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
    ],
  },
  {
    name: "validate",
    description: "Check whether the configuration is valid",
  },
  {
    name: "plan",
    description: "Show changes required by the current configuration",
    options: [
      {
        name: "-compact-warnings",
        description:
          "If terragrunt produces any warnings that are not accompanied by errors, show them in a more compact form that includes only the summary messages",
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
        insertValue: "-out=",
        description: "The path to save the generated execution plan",
        args: {
          template: "filepaths",
          suggestCurrentToken: true,
        },
      },
      {
        name: "-parallelism",
        description:
          "Limit the number of concurrent operation as terragrunt walks the graph. Defaults to 10",
        args: {
          name: "number",
          default: "10",
        },
      },
      {
        name: "-refresh",
        insertValue: "-refresh=",
        description: "Update the state prior to checking for differences",
        args: {
          name: "true or false",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "-state",
        insertValue: "-state=",
        description:
          "Path to the state file. Defaults to 'terragrunt.tfstate'. Ignored when remote state is used",
        args: {
          template: "filepaths",
        },
      },
      {
        name: "-target",
        displayName: "-target=",
        description:
          "A Resource Address to target. This flag can be used multiple times",
        isRepeatable: true,
        args: {
          name: "resource",
        },
      },
      {
        name: "-var",
        description:
          "Set a variable in the terragrunt configuration. This flag can be set multiple times",
        isRepeatable: true,
        args: {
          name: "foo=bar",
        },
      },

      {
        name: "-var-file",
        insertValue: "-var-file=",
        description:
          "Set variables in the terragrunt configuration from a variable file",
        args: {
          template: "filepaths",
        },
      },
      ...generalSubCommandOptions,
    ],
  },
  {
    name: "apply",
    description: "Create or update infrastructure",
  },
  {
    name: "destroy",
    description: "Destroy previously-created infrastructure",
  },
  {
    name: "run-all",
    description:
      "Run a terraform command against a 'stack' by running the specified command in each subfolder. E.g., to run 'terragrunt apply' in each subfolder, use 'terragrunt run-all apply",
    subcommands: [
      {
        name: "plan",
        description:
          "Display the plans of a ‘stack’ by running ‘terragrunt plan’ in each subfolder",
      },
      {
        name: "apply",
        description:
          "Apply a ‘stack’ by running ‘terragrunt apply’ in each subfolder",
      },
      {
        name: "output",
        description:
          "Display the outputs of a ‘stack’ by running ‘terragrunt output’ in each subfolder",
      },
      {
        name: "destroy",
        description:
          "Destroy a ‘stack’ by running ‘terragrunt destroy’ in each subfolder",
      },
      {
        name: "validate",
        description:
          "Validate a ‘stack’ by running ‘terragrunt destroy’ in each subfolder",
      },
    ],
  },
];

const otherCommands: Fig.Subcommand[] = [
  {
    name: "terragrunt-info",
    description:
      "Emits limited terragrunt state on stdout in a JSON format and exits",
  },
  {
    name: "graph-dependencies",
    description:
      "Prints the terragrunt dependency graph, in DOT format, to stdout",
  },
  {
    name: "hclfmt",
    description:
      "Recursively find hcl files and rewrite them into a canonical format",
  },
  {
    name: "validate-inputs",
    description:
      "Emits information about the input variables that are configured with the given terragrunt configuration",
    options: [
      {
        name: "--terragrunt-strict-validate",
        description: "Enable strict mode",
      },
    ],
  },
  {
    name: "render-json",
    description: "Render out the final interpreted terragrunt.hcl file",
    options: [
      {
        name: "--terragrunt-json-out",
        description:
          "Configure where terragrunt renders out the json representation",
      },
    ],
  },
];

const completionSpec: Fig.Spec = {
  name: "terragrunt",
  description: "Terragrunt CLI",
  options: globalOptions,
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  subcommands: [...mainCommands, ...otherCommands],
};

export default completionSpec;
