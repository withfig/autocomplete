const varOptions: Fig.Option[] = [
  {
    name: "-var",
    description: "Set a variable in the HCL2 template; may be repeated",
    args: { name: "key=value" },
  },
  {
    name: "-var-file",
    description: "Set variables from a .hcl or .json file",
    args: { name: "file", template: "filepaths" },
  },
];

const completionSpec: Fig.Spec = {
  name: "packer",
  description:
    "HashiCorp Packer: build identical machine images from a single source configuration",
  subcommands: [
    {
      name: "build",
      description:
        "Builds machine images; artifacts are reported as they are created",
      args: { name: "template", template: "filepaths", isOptional: true },
      options: [
        {
          name: "-color=false",
          description: "Turn off colorized output (on by default)",
        },
        {
          name: "-debug",
          description:
            "Disable parallelization and pause between build steps for inspection",
        },
        {
          name: "-except",
          description:
            "Run all builds and post-processors except the named ones",
          args: { name: "foo,bar,baz" },
        },
        {
          name: "-only",
          description: "Run only the named builds and post-processors",
          args: { name: "foo,bar,baz" },
        },
        {
          name: "-force",
          description:
            "Run the build even if artifacts from a previous build block it",
        },
        {
          name: "-on-error",
          description: "Behavior when the provisioner fails",
          args: {
            name: "behavior",
            suggestions: ["cleanup", "abort", "ask", "run-cleanup-provisioner"],
            default: "cleanup",
          },
        },
        {
          name: "-parallel-builds",
          description: "Number of builds to run concurrently (0 = unlimited)",
          args: { name: "n" },
        },
        {
          name: "-timestamp-ui",
          description: "Prefix each UI output line with an RFC3339 timestamp",
        },
        {
          name: "-warn-on-undeclared-var",
          description:
            "Warn about var-file entries that have no matching variable block",
        },
        {
          name: "-skip-enforcement",
          description: "Skip HCP Packer enforced provisioner injection",
        },
        ...varOptions,
      ],
    },
    {
      name: "init",
      description: "Install required Packer plugins from the template",
      args: { name: "template", template: "filepaths", isOptional: true },
      options: [
        {
          name: "-upgrade",
          description:
            "Upgrade already-installed plugins to the newest version",
        },
        {
          name: "-force",
          description:
            "Force installation even if plugins are already installed",
        },
      ],
    },
    {
      name: "validate",
      description: "Check that a template is valid",
      args: { name: "template", template: "filepaths" },
      options: [
        {
          name: "-syntax-only",
          description: "Only check the syntax, not the configuration",
        },
        {
          name: "-evaluate-datasources",
          description: "Also evaluate data sources during validation",
        },
        {
          name: "-except",
          description: "Validate all builds except the named ones",
          args: { name: "foo,bar,baz" },
        },
        ...varOptions,
      ],
    },
    {
      name: "fmt",
      description: "Rewrite HCL2 templates to canonical format",
      args: { name: "template", template: "filepaths", isVariadic: true },
      options: [
        {
          name: "-check",
          description: "Check if formatting is needed without rewriting",
        },
        {
          name: "-diff",
          description: "Display the diff of the formatting changes",
        },
        {
          name: "-write=false",
          description: "Do not write the changes back to the file",
        },
        {
          name: "-recursive",
          description: "Process files found in subdirectories",
        },
        {
          name: "-var-file",
          description: "Set variables from a file before formatting",
          args: { name: "file", template: "filepaths" },
        },
      ],
    },
    {
      name: "inspect",
      description: "Show the components of a template",
      args: { name: "template", template: "filepaths" },
      options: [
        {
          name: "-machine-readable",
          description: "Emit machine-readable output",
        },
        ...varOptions,
      ],
    },
    {
      name: "console",
      description: "Start an interactive console for evaluating expressions",
      options: [
        {
          name: "-config-type",
          description: "Configuration input type",
          args: { name: "type", suggestions: ["hcl", "json"] },
        },
        ...varOptions,
      ],
    },
    {
      name: "fix",
      description: "Fix deprecated settings and syntax in legacy templates",
      args: { name: "template", template: "filepaths" },
      options: [
        {
          name: "-validate=false",
          description: "Skip validating the fixed template",
        },
      ],
    },
    {
      name: "hcl2_upgrade",
      description: "Convert a legacy JSON template to HCL2",
      args: { name: "template", template: "filepaths" },
      options: [
        {
          name: "-output-file",
          description: "Write the converted template to this path",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "-with-annotations",
          description: "Add comments describing the changes made",
        },
      ],
    },
    {
      name: "plugins",
      description: "Manage Packer plugins",
      subcommands: [
        {
          name: "installed",
          description: "List installed Packer plugins",
        },
        {
          name: "required",
          description:
            "List plugins required by the templates in the directory",
          args: { name: "directory", template: "folders", isOptional: true },
        },
      ],
    },
    {
      name: "version",
      description: "Print the Packer version",
    },
  ],
  options: [
    {
      name: "-machine-readable",
      description:
        "Emit machine-readable output (mutually exclusive with -debug)",
    },
    {
      name: "-help",
      description: "Show help",
    },
    {
      name: "-autocomplete-install",
      description: "Install shell autocompletion",
    },
  ],
};

export default completionSpec;
