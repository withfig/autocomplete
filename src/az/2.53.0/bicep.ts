const completion: Fig.Spec = {
  name: "bicep",
  description:
    "Bicep CLI command group.\n\n\t\tBicep CLI command group. There are two configurations that can be set for the command group, including bicep.check_version and bicep.use_binary_from_path:\n[1] az config set bicep.check_version=True/False\nTurn on/off Bicep CLI version check when executing az bicep commands.\n[2] az config set bicep.use_binary_from_path=True/False/if_found_in_ci\nSpecify whether to use Bicep CLI from PATH or not. The default value is if_found_in_ci",
  subcommands: [
    {
      name: "build",
      description: "Build a Bicep file",
      options: [
        {
          name: ["--file", "-f"],
          description: "The path to the Bicep file to build in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: "--no-restore",
          description:
            "When set, builds the bicep file without restoring external modules",
          args: { name: "no-restore" },
        },
        {
          name: "--outdir",
          description: "When set, saves the output at the specified directory",
          args: { name: "outdir" },
        },
        {
          name: "--outfile",
          description: "When set, saves the output as the specified file path",
          args: { name: "outfile" },
        },
        {
          name: "--stdout",
          description:
            "When set, prints all output to stdout instead of corresponding files",
          args: { name: "stdout" },
        },
      ],
    },
    {
      name: "build-params",
      description: "Build .bicepparam file",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the .bicepparam file to build in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: "--no-restore",
          description:
            "When set, builds the .bicepparam file without restoring external modules",
          args: { name: "no-restore" },
        },
        {
          name: "--outdir",
          description: "When set, saves the output at the specified directory",
          args: { name: "outdir" },
        },
        {
          name: "--outfile",
          description: "When set, saves the output as the specified file path",
          args: { name: "outfile" },
        },
        {
          name: "--stdout",
          description:
            "When set, prints all output to stdout instead of corresponding files",
          args: { name: "stdout" },
        },
      ],
    },
    {
      name: "decompile",
      description: "Attempt to decompile an ARM template file to a Bicep file",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the ARM template to decompile in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: "--force",
          description: "Allows overwriting the output file if it exists",
          args: { name: "force" },
        },
      ],
    },
    {
      name: "decompile-params",
      description: "Decompile a parameters .json file to .bicepparam",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the parameters file to build in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: "--bicep-file",
          description:
            "Path to the bicep template file (relative to the .bicepparam file) that will be referenced in the using declaration",
          args: { name: "bicep-file" },
        },
        {
          name: "--outdir",
          description: "When set, saves the output at the specified directory",
          args: { name: "outdir" },
        },
        {
          name: "--outfile",
          description: "When set, saves the output as the specified file path",
          args: { name: "outfile" },
        },
        {
          name: "--stdout",
          description:
            "When set, prints all output to stdout instead of corresponding files",
          args: { name: "stdout" },
        },
      ],
    },
    {
      name: "format",
      description: "Format a Bicep file",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the Bicep file to format in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: "--indent-kind",
          description: "Set indentation kind. Valid values are ( Space | Tab )",
          args: { name: "indent-kind" },
        },
        {
          name: "--indent-size",
          description:
            "Number of spaces to indent with (Only valid with --indent-kind set to Space)",
          args: { name: "indent-size" },
        },
        {
          name: "--insert-final-newline",
          description: "Insert a final newline",
          args: { name: "insert-final-newline" },
        },
        {
          name: "--newline",
          description:
            "Set newline char. Valid values are ( Auto | LF | CRLF | CR )",
          args: { name: "newline" },
        },
        {
          name: "--outdir",
          description: "When set, saves the output at the specified directory",
          args: { name: "outdir" },
        },
        {
          name: "--outfile",
          description: "When set, saves the output as the specified file path",
          args: { name: "outfile" },
        },
        {
          name: "--stdout",
          description:
            "When set, prints all output to stdout instead of corresponding files",
          args: { name: "stdout" },
        },
      ],
    },
    {
      name: "generate-params",
      description: "Generate parameters file for a Bicep file",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the Bicep file to generate the parameters file from in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: "--include-params",
          description:
            "Set include params. Valid values are ( all | required-only )",
          args: { name: "include-params" },
        },
        {
          name: "--no-restore",
          description:
            "When set, generates the parameters file without restoring external modules",
          args: { name: "no-restore" },
        },
        {
          name: "--outdir",
          description: "When set, saves the output at the specified directory",
          args: { name: "outdir" },
        },
        {
          name: "--outfile",
          description: "When set, saves the output as the specified file path",
          args: { name: "outfile" },
        },
        {
          name: "--output-format",
          description:
            "Set output format. Valid values are ( json | bicepparam )",
          args: { name: "output-format" },
        },
        {
          name: "--stdout",
          description:
            "When set, prints all output to stdout instead of corresponding files",
          args: { name: "stdout" },
        },
      ],
    },
    {
      name: "install",
      description: "Install Bicep CLI",
      options: [
        {
          name: ["--target-platform", "-t"],
          description:
            "The platform the Bicep CLI will be running on. Set this to skip automatic platform detection if it does not work properly",
          args: {
            name: "target-platform",
            suggestions: [
              "linux-arm64",
              "linux-musl-x64",
              "linux-x64",
              "osx-arm64",
              "osx-x64",
              "win-x64",
            ],
          },
        },
        {
          name: ["--version", "-v"],
          description:
            "The version of Bicep CLI to be installed. Default to the latest if not specified",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "list-versions",
      description: "List out all available versions of Bicep CLI",
    },
    {
      name: "publish",
      description: "Publish a bicep file to a remote module registry",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the Bicep module file to publish in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: ["--target", "-t"],
          description:
            "The target location where the Bicep module will be published",
          args: { name: "target" },
          isRequired: true,
        },
        {
          name: ["--documentationUri", "-d"],
          description: "The documentation uri of the Bicep module",
          args: { name: "documentationUri" },
        },
        {
          name: "--force",
          description: "Allow overwriting an existing Bicep module version",
          args: { name: "force" },
        },
      ],
    },
    {
      name: "restore",
      description: "Restore external modules for a bicep file",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the Bicep file to restore external modules for",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: "--force",
          description: "Allows overwriting the cached external modules",
          args: { name: "force" },
        },
      ],
    },
    { name: "uninstall", description: "Uninstall Bicep CLI" },
    {
      name: "upgrade",
      description: "Upgrade Bicep CLI to the latest version",
      options: [
        {
          name: ["--target-platform", "-t"],
          description:
            "The platform the Bicep CLI will be running on. Set this to skip automatic platform detection if it does not work properly",
          args: {
            name: "target-platform",
            suggestions: [
              "linux-arm64",
              "linux-musl-x64",
              "linux-x64",
              "osx-arm64",
              "osx-x64",
              "win-x64",
            ],
          },
        },
      ],
    },
    {
      name: "version",
      description: "Show the installed version of Bicep CLI",
    },
  ],
};

export default completion;
