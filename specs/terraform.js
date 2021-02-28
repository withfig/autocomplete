var workspaceList = {
  script: "terraform workspace list",
  postProcess: function (out) {
    // debug only
    //console.log("this is  out list: ", out);
    return out.split("\n").map((workspace) => {
      return {
        name: workspace.replace("* ", "").trim(),
        // UPDATE: Update this after the Icons API is available publicly!
        // icon: `fig://icon?type=terraform`,
        description: "workspace",
      };
    });
  },
};

var generalSubCommandOptions = [
  {
    name: "-lock=false",
    description:
      "Lock the state file when locking is supported. Defaults to true",
    // suggestions: ["true", "false"],
  },
  {
    name: "-force=true",
    description:
      "Delete the workspace even if its state is not empty. Defaults to false.",
    // suggestions: ["true", "false"],
  },
  {
    name: "-lock-timeout=",
    description: "Duration to retry a state lock. Default 0s.",
    args: {
      name: "seconds",
    },
  },
  {
    name: "-input=true",
    description: "Ask for input for variables if not directly set.",
  },
  {
    name: "-no-color ",
    description: "Disables output with coloring.",
  },
];

var globalOptions = [
  {
    name: "-help",
    description:
      "Show this help output, or the help for a specified subcommand.",
  },
  {
    name: "-chdir=",
    description:
      "Switch to a different working directory before executing the given subcommand.",
    insertValue: "-chdir={cursor}",
    args: {
      template: "filepaths",
    },
  },
  {
    name: "-version",
    description: "Show the current Terraform version",
  },
];

var mainCommands = [
  {
    name: "init",
    description: "Prepare your working directory for other commands",
    options: [
      {
        name: "-upgrade",
        description:
          "Opt to upgrade modules and plugins as part of their respective installation steps.",
      },
      ...generalSubCommandOptions,
    ],
  },
  {
    name: "validate",
    description: "Check whether the configuration is valid",
    options: [],
  },
  {
    name: "plan",
    description: "Show changes required by the current configuration",
    options: [
      {
        name: "-compact-warnings",
        description:
          "If Terraform produces any warnings that are not accompanied by errors, show them in a more compact form that includes only the summary messages.",
      },
      {
        name: "-destroy",
        description:
          "If set, generates a plan to destroy all the known resources.",
      },
      {
        name: "-detailed-exitcode",
        description: "Return a detailed exit code when the command exits.",
      },
      {
        name: "-out=path",
        description: "The path to save the generated execution plan.",
      },
      {
        name: "-parallelism=",
        description:
          "Limit the number of concurrent operation as Terraform walks the graph. Defaults to 10.",
        args: {
          name: "number",
        },
      },
      {
        name: "-refresh=true",
        description: "Update the state prior to checking for differences.",
      },
      {
        name: "-state=",
        insertValue: "-state={cursor}",
        description:
          "Path to the state file. Defaults to 'terraform.tfstate'. Ignored when remote state is used.",
        args: {
          name: "file path",
        },
      },
      {
        name: "-target=resource",
        description:
          "A Resource Address to target. This flag can be used multiple times.",
      },
      {
        name: '-var "foo=bar"',
        insertValue: "-var {cursor}",
        description:
          "Set a variable in the Terraform configuration. This flag can be set multiple times.",
        args: {
          name: "foo=bar",
        },
      },

      {
        name: "-var-file=foo",
        insertValue: "-var-file={cursor}",
        description:
          "Set variables in the Terraform configuration from a variable file.",
        args: {
          name: "file path",
        },
      },
      ...generalSubCommandOptions,
    ],
  },
  {
    name: "apply",
    description: "Create or update infrastructure",
    options: [],
  },
  {
    name: "destroy",
    description: "Destroy previously-created infrastructure",
    options: [],
  },
];

var otherCommands = [
  {
    name: "console",
    description: "Try Terraform expressions at an interactive command prompt",
    options: [],
  },
  {
    name: "fmt",
    description: "Reformat your configuration in the standard style",
    options: [],
  },
  {
    name: "force-unlock",
    description: "Release a stuck lock on the current workspace",
    options: [],
  },
  {
    name: "get",
    description: "Install or upgrade remote Terraform modules",
    options: [
      {
        name: "-update",
        description:
          "If specified, modules that are already downloaded will be checked for updates and the updates will be downloaded if present.",
      },
    ],
  },
  {
    name: "graph",
    description: "Generate a Graphviz graph of the steps in an operation",
    options: [],
  },
  {
    name: "import",
    description: "Associate existing infrastructure with a Terraform resource",
    options: [],
  },
  {
    name: "login",
    description: "Obtain and save credentials for a remote hos",
    options: [],
  },
  {
    name: "logout",
    description: "Remove locally-stored credentials for a remote host",
    options: [],
  },
  {
    name: "output",
    description: "Show output values from your root module",
    options: [],
  },
  {
    name: "providers",
    description: "Show the providers required for this configuration",
    options: [],
  },
  {
    name: "refresh",
    description: "Update the state to match remote systems",
    options: [],
  },
  {
    name: "show",
    description: "Show the current state or a saved plan",
    options: [],
  },
  {
    name: "state",
    description: "Advanced state management",
    options: [],
  },
  {
    name: "taint",
    description: "Mark a resource instance as not fully functional",
    options: [],
  },
  {
    name: "untaint",
    description: "Remove the 'tainted' state from a resource instance",
    options: [],
  },
  {
    name: "workspace",
    description: "Workspace management",
    subcommands: [
      {
        name: "new",
        insertValue: "new '{cursor}'",
        description: "create a new workspace",
        args: {
          name: "workspace name",
        },
        options: [
          {
            name: "-lock",
            description:
              "Lock the state file when locking is supported. Defaults to true",
          },
          {
            name: "-lock-timeout",
            description: "Duration to retry a stae lock. Default 0s.",
          },
          {
            name: "-state=",
            insertValue: "-state={cursor}",
            description:
              "Path to an existing state file to initialize the state of this environment.",
            args: {
              name: "path",
              template: "filepaths",
            },
          },
        ],
      },
      {
        name: "show",
        description: "display the current workspace",
      },
      {
        name: "list",
        description: "list the workspace",
      },
      {
        name: "delete",
        description: "delete the specified workspace.",
        args: {
          generators: workspaceList,
          name: "workspace name",
        },
        options: [...generalSubCommandOptions],
      },
      {
        name: "select",
        description: "change the current working workspace",
        args: {
          generators: workspaceList,
        },
      },
    ],
  },
];

var extraCommands = [
  {
    name: "-install-autocomplete",
    description: "Install bash/zsh tab completion",
  },
  {
    name: "-uninstall-autocomplete",
    description: "Uninstall bash/zsh tab completion",
  },
];

var completionSpec = {
  name: "terraform",
  description: "Terraform CLI",
  subcommands: [
    ...mainCommands,
    ...otherCommands,
    ...globalOptions,
    ...extraCommands,
  ],
};
