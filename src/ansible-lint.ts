const shortFormatArg: Fig.Arg = {
  name: "-f",
  suggestions: ["rich", "plain", "md"],
  default: "rich",
};

const fullFormatArg: Fig.Arg = {
  name: "-f",
  suggestions: [
    "rich",
    "plain",
    "md",
    "json",
    "codeclimate",
    "quiet",
    "pep8",
    "sarif",
  ],
  default: "rich",
};

const completionSpec: Fig.Spec = {
  name: "ansible-lint",
  description: "Ansible static code analysis",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for ansible-lint",
    },
    {
      name: ["--list-rules", "-L"],
      description: "List all the rules",
      exclusiveOn: ["-T"],
    },
    {
      name: ["--list-tags", "-T"],
      description: "List all the tags and the rules they cover",
      exclusiveOn: ["-L"],
    },
    {
      name: ["--format", "-f"],
      displayName: "Format",
      description: "Stdout formatting",
      args: fullFormatArg,
      icon: "fig://icon?type=characters",
    },
    {
      name: "-q",
      description: "Quieter, reduce verbosity, can be specified twice",
      isRepeatable: 2,
    },
    {
      name: "-p",
      description: "Parseable output, same as '-f pep8'",
    },
    {
      name: "--progressive",
      description:
        "Return success if it detects a reduction in number of violations compared with previous git commit. This feature works only in git repositories",
    },
    {
      name: "--project-dir",
      description:
        "Location of project/repository, autodetected based on location of configuration file",
      args: {
        name: "PROJECT_DIR",
        template: "folders",
      },
    },
    {
      name: ["--rules-dir", "-r"],
      description: "Specify custom rule directories",
      args: {
        name: "RULESDIR",
        template: "folders",
      },
    },
    {
      name: "-R",
      description: "Keep using embedded rules when using '-r'",
    },
    {
      name: "--write",
      description:
        "Allow ansible-lint to reformat YAML files and run rule transforms",
      args: {
        name: "WRITE_LIST",
        description:
          "Limit the effective rule transforms by passing a keywords 'all' or 'none' or a comma separated list of rule ids or rule tags",
        suggestions: ["all", "none", "rule1,rule2,..."],
        default: "all",
      },
    },
    {
      name: "--show-relpath",
      description: "Display path relative to CWD",
    },
    {
      name: ["--tags", "-t"],
      description: "Only check rules whose id/tags match these values",
    },
    {
      name: "-v",
      description: "Increase verbosity level (-vv for more)",
      isRepeatable: 2,
    },
    {
      name: ["--skip-list", "-x"],
      description: "Only check rules whose id/tags do not match these values",
      args: {
        name: "SKIP_LIST",
      },
    },
    {
      name: ["--warn-list", "-w"],
      description:
        "Only warn about these rules, unless overridden in config file defaults to 'experimental'",
      args: {
        name: "WARN_LIST",
      },
    },
    {
      name: "--enable-list",
      description: "Activate optional rules by their tag name",
      args: {
        name: "ENABLE_LIST",
      },
    },
    {
      name: "--nocolor",
      description: "Disable colored output, same as NO_COLOR=1",
    },
    {
      name: "--force-color",
      description: "Force colored output, same as FORCE_COLOR=1",
    },
    {
      name: "--exclude-paths",
      description:
        "Path to directories or files to skip. This option is repeatable",
      args: {
        name: "EXCLUDE_PATHS",
        isVariadic: true,
        template: "folders",
      },
    },
    {
      name: "--config-file",
      description:
        "Specify configuration file to use. By default it will look for '.ansible-lint' or '.config/ansible-lint.yml'",
      args: {
        name: "CONFIG_FILE",
        template: "filepaths",
      },
    },
    {
      name: "--offline",
      description: "Disable installation of requirements.yml",
    },
    {
      name: "--version",
      description: "Show version of ansible-lint",
    },
  ],
  args: {
    name: "lintables",
    description: "Files to lint",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
};

export default completionSpec;
