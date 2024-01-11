// If you edit commands or options, please copy our changes on to the terragrunt spec
const workspaceList: Fig.Generator = {
  script: ["terraform", "workspace", "list"],
  postProcess: function (out) {
    return out.split("\n").map((workspace) => {
      return {
        name: workspace.replace("* ", "").trim(),
        icon: "https://www.terraform.io/favicon.ico",
        description: "Workspace",
      };
    });
  },
};

const addressList: Fig.Generator = {
  script: ["terraform", "state", "list"],
  postProcess: function (out) {
    if (out.includes("No state file was found!") || out.includes("Error")) {
      return [];
    }
    return out.split("\n").map((addresses) => {
      return {
        name: addresses.replace("* ", "").trim(),
        icon: "https://www.terraform.io/favicon.ico",
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
    name: "-help",
    description:
      "Show this help output, or the help for a specified subcommand",
  },
  {
    name: "-chdir",
    description:
      "Switch to a different working directory before executing the given subcommand",
    requiresSeparator: true,
    args: {
      template: "filepaths",
    },
  },
  {
    name: "-version",
    description: "Show the current Terraform version",
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

const otherCommands: Fig.Subcommand[] = [
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

const extraCommands: Fig.Subcommand[] = [
  {
    name: "-install-autocomplete",
    description: "Install bash/zsh tab completion",
  },
  {
    name: "-uninstall-autocomplete",
    description: "Uninstall bash/zsh tab completion",
  },
];

const completionSpec: Fig.Spec = {
  name: "terraform",
  description: "Terraform CLI",
  options: globalOptions,
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  subcommands: [...mainCommands, ...otherCommands, ...extraCommands],
};

export default completionSpec;
