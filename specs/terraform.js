var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
var workspaceList = {
  script: "terraform workspace list",
  postProcess: function (out) {
    // debug only
    //console.log("this is  out list: ", out);
    return out.split("\n").map(function (workspace) {
      return {
        name: workspace.replace("* ", "").trim(),
        // UPDATE: Update this after the Icons API is available publicly!
        icon: "fig://icon?type=terraform",
        description: "workspace",
      };
    });
  },
};
var generalSubCommandOptions = [
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
      "Delete the workspace even if its state is not empty. Defaults to false.",
    args: {
      name: "true or false",
      suggestions: ["true", "false"],
    },
  },
  {
    name: "-lock-timeout",
    insertValue: "-lock-timeout=",
    description: "Duration to retry a state lock. Default 0s.",
    args: {
      name: "seconds",
    },
  },
  {
    name: "-input",
    insertValue: "-input=",
    description: "Ask for input for variables if not directly set.",
    args: {
      name: "true or false",
      suggestions: ["true", "false"],
    },
  },
  {
    name: "-no-color",
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
    name: "-chdir",
    description:
      "Switch to a different working directory before executing the given subcommand.",
    insertValue: "-chdir=",
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
    options: __spreadArray(
      __spreadArray(
        [
          {
            name: "-upgrade",
            description:
              "Opt to upgrade modules and plugins as part of their respective installation steps.",
          },
        ],
        generalSubCommandOptions
      ),
      globalOptions
    ),
  },
  {
    name: "validate",
    description: "Check whether the configuration is valid",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "plan",
    description: "Show changes required by the current configuration",
    options: __spreadArray(
      __spreadArray(
        [
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
            name: "-out",
            insertValue: "-out=",
            description: "The path to save the generated execution plan.",
          },
          {
            name: "-parallelism",
            description:
              "Limit the number of concurrent operation as Terraform walks the graph. Defaults to 10.",
            args: {
              name: "number",
            },
          },
          {
            name: "-refresh",
            insertValue: "-refresh=",
            description: "Update the state prior to checking for differences.",
            args: {
              name: "true or false",
              suggestions: ["true", "false"],
            },
          },
          {
            name: "-state",
            insertValue: "-state=",
            description:
              "Path to the state file. Defaults to 'terraform.tfstate'. Ignored when remote state is used.",
            args: {
              template: "filepaths",
            },
          },
          {
            name: "-target",
            displayName: "-target=resource",
            description:
              "A Resource Address to target. This flag can be used multiple times.",
          },
          {
            name: "-var",
            insertValue: "-var {cursor}",
            description:
              "Set a variable in the Terraform configuration. This flag can be set multiple times.",
            args: {
              name: "foo=bar",
            },
          },
          {
            name: "-var-file",
            insertValue: "-var-file=",
            description:
              "Set variables in the Terraform configuration from a variable file.",
            args: {
              template: "filepaths",
            },
          },
        ],
        generalSubCommandOptions
      ),
      globalOptions
    ),
  },
  {
    name: "apply",
    description: "Create or update infrastructure",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "destroy",
    description: "Destroy previously-created infrastructure",
    options: __spreadArray([], globalOptions),
  },
];
var otherCommands = [
  {
    name: "console",
    description: "Try Terraform expressions at an interactive command prompt",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "fmt",
    description: "Reformat your configuration in the standard style",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "force-unlock",
    description: "Release a stuck lock on the current workspace",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "get",
    description: "Install or upgrade remote Terraform modules",
    options: __spreadArray(
      [
        {
          name: "-update",
          description:
            "If specified, modules that are already downloaded will be checked for updates and the updates will be downloaded if present.",
        },
      ],
      globalOptions
    ),
  },
  {
    name: "graph",
    description: "Generate a Graphviz graph of the steps in an operation",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "import",
    description: "Associate existing infrastructure with a Terraform resource",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "login",
    description: "Obtain and save credentials for a remote hos",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "logout",
    description: "Remove locally-stored credentials for a remote host",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "output",
    description: "Show output values from your root module",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "providers",
    description: "Show the providers required for this configuration",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "refresh",
    description: "Update the state to match remote systems",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "show",
    description: "Show the current state or a saved plan",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "state",
    description: "Advanced state management",
    options: [],
  },
  {
    name: "taint",
    description: "Mark a resource instance as not fully functional",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "untaint",
    description: "Remove the 'tainted' state from a resource instance",
    options: __spreadArray([], globalOptions),
  },
  {
    name: "workspace",
    description: "Workspace management",
    options: __spreadArray([], globalOptions),
    subcommands: [
      __assign(
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
              args: {
                name: "true or false",
                suggestions: ["true", "false"],
              },
            },
            {
              name: "-lock-timeout",
              description: "Duration to retry a stae lock. Default 0s.",
              args: {
                name: "seconds",
              },
            },
            {
              name: "-state",
              insertValue: "-state=",
              description:
                "Path to an existing state file to initialize the state of this environment.",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
          ],
        },
        globalOptions
      ),
      {
        name: "show",
        description: "display the current workspace",
        options: __spreadArray([], globalOptions),
      },
      {
        name: "list",
        description: "list the workspace",
        options: __spreadArray([], globalOptions),
      },
      {
        name: "delete",
        description: "delete the specified workspace.",
        args: {
          generators: workspaceList,
          name: "workspace name",
        },
        options: __spreadArray([], generalSubCommandOptions),
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
  options: globalOptions,
  posixNoncompliantFlags: true,
  subcommands: __spreadArray(
    __spreadArray(__spreadArray([], mainCommands), otherCommands),
    extraCommands
  ),
};
