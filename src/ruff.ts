const completion: Fig.Spec = {
  name: "ruff",
  description: "Ruff: An extremely fast Python linter",
  options: [
    {
      name: "--config",
      description:
        "Path to the `pyproject.toml` or `ruff.toml` file to use for configuration",
      exclusiveOn: ["--isolated"],
      isRepeatable: true,
      args: {
        name: "config",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "--select",
      description:
        "Comma-separated list of rule codes to enable (or ALL, to enable all rules)",
      isRepeatable: true,
      args: {
        name: "select",
        isOptional: true,
      },
    },
    {
      name: "--extend-select",
      description:
        "Like --select, but adds additional rule codes on top of the selected ones",
      isRepeatable: true,
      args: {
        name: "extend_select",
        isOptional: true,
      },
    },
    {
      name: "--ignore",
      description: "Comma-separated list of rule codes to disable",
      isRepeatable: true,
      args: {
        name: "ignore",
        isOptional: true,
      },
    },
    {
      name: "--extend-ignore",
      description:
        "Like --ignore, but adds additional rule codes on top of the ignored ones",
      isRepeatable: true,
      args: {
        name: "extend_ignore",
        isOptional: true,
      },
    },
    {
      name: "--exclude",
      description:
        "List of paths, used to omit files and/or directories from analysis",
      isRepeatable: true,
      args: {
        name: "exclude",
        isOptional: true,
      },
    },
    {
      name: "--extend-exclude",
      description:
        "Like --exclude, but adds additional files and directories on top of those already excluded",
      isRepeatable: true,
      args: {
        name: "extend_exclude",
        isOptional: true,
      },
    },
    {
      name: "--fixable",
      description:
        "List of rule codes to treat as eligible for autofix. Only applicable when autofix itself is enabled (e.g., via `--fix`)",
      isRepeatable: true,
      args: {
        name: "fixable",
        isOptional: true,
      },
    },
    {
      name: "--unfixable",
      description:
        "List of rule codes to treat as ineligible for autofix. Only applicable when autofix itself is enabled (e.g., via `--fix`)",
      isRepeatable: true,
      args: {
        name: "unfixable",
        isOptional: true,
      },
    },
    {
      name: "--per-file-ignores",
      description: "List of mappings from file pattern to code to exclude",
      isRepeatable: true,
      args: {
        name: "per_file_ignores",
        isOptional: true,
      },
    },
    {
      name: "--format",
      description: "Output serialization format for violations",
      isRepeatable: true,
      args: {
        name: "format",
        isOptional: true,
        suggestions: ["text", "json", "junit", "grouped", "github", "gitlab"],
      },
    },
    {
      name: "--stdin-filename",
      description: "The name of the file when passing it through stdin",
      isRepeatable: true,
      args: {
        name: "stdin_filename",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "--cache-dir",
      description: "Path to the cache directory",
      isRepeatable: true,
      args: {
        name: "cache_dir",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "--dummy-variable-rgx",
      description: "Regular expression matching the name of dummy variables",
      isRepeatable: true,
      args: {
        name: "dummy_variable_rgx",
        isOptional: true,
      },
    },
    {
      name: "--target-version",
      description: "The minimum Python version that should be supported",
      isRepeatable: true,
      args: {
        name: "target_version",
        isOptional: true,
      },
    },
    {
      name: "--line-length",
      description:
        "Set the line-length for length-associated rules and automatic formatting",
      isRepeatable: true,
      args: {
        name: "line_length",
        isOptional: true,
      },
    },
    {
      name: "--explain",
      description: "Explain a rule",
      exclusiveOn: [
        "--add-noqa",
        "--clean",
        "--generate-shell-completion",
        "--show-files",
        "--show-settings",
        "--stdin-filename",
        "-w",
        "--watch",
      ],
      isRepeatable: true,
      args: {
        name: "explain",
        isOptional: true,
      },
    },
    {
      name: "--generate-shell-completion",
      description: "Generate shell completion",
      hidden: true,
      exclusiveOn: [
        "--add-noqa",
        "--clean",
        "--explain",
        "--show-files",
        "--show-settings",
        "--stdin-filename",
        "-w",
        "--watch",
      ],
      isRepeatable: true,
      args: {
        name: "generate_shell_completion",
        isOptional: true,
        suggestions: ["bash", "elvish", "fig", "fish", "powershell", "zsh"],
      },
    },
    {
      name: ["-v", "--verbose"],
      description: "Enable verbose logging",
    },
    {
      name: ["-q", "--quiet"],
      description: "Print lint violations, but nothing else",
    },
    {
      name: ["-s", "--silent"],
      description:
        'Disable all logging (but still exit with status code "1" upon detecting lint violations)',
    },
    {
      name: ["-e", "--exit-zero"],
      description:
        'Exit with status code "0", even upon detecting lint violations',
    },
    {
      name: ["-w", "--watch"],
      description: "Run in watch mode by re-running whenever files change",
    },
    {
      name: "--fix",
      description: "Attempt to automatically fix lint violations",
    },
    {
      name: "--no-fix",
    },
    {
      name: "--fix-only",
      description:
        "Fix any fixable lint violations, but don't report on leftover violations. Implies `--fix`",
    },
    {
      name: "--no-fix-only",
    },
    {
      name: "--diff",
      description:
        "Avoid writing any fixed files back; instead, output a diff for each changed file to stdout",
    },
    {
      name: ["-n", "--no-cache"],
      description: "Disable cache reads",
    },
    {
      name: "--isolated",
      description: "Ignore all configuration files",
      exclusiveOn: ["--config"],
    },
    {
      name: "--show-source",
      description: "Show violations with source code",
    },
    {
      name: "--no-show-source",
    },
    {
      name: "--respect-gitignore",
      description:
        "Respect file exclusions via `.gitignore` and other standard ignore files",
    },
    {
      name: "--no-respect-gitignore",
    },
    {
      name: "--force-exclude",
      description:
        "Enforce exclusions, even for paths passed to Ruff directly on the command-line",
    },
    {
      name: "--no-force-exclude",
    },
    {
      name: "--update-check",
      description: "Enable or disable automatic update checks",
    },
    {
      name: "--no-update-check",
    },
    {
      name: "--add-noqa",
      description:
        "Enable automatic additions of `noqa` directives to failing lines",
      exclusiveOn: [
        "--clean",
        "--explain",
        "--generate-shell-completion",
        "--show-files",
        "--show-settings",
        "--stdin-filename",
        "-w",
        "--watch",
      ],
    },
    {
      name: "--clean",
      description:
        "Clear any caches in the current directory or any subdirectories",
      exclusiveOn: [
        "--add-noqa",
        "--explain",
        "--generate-shell-completion",
        "--show-files",
        "--show-settings",
        "--stdin-filename",
        "-w",
        "--watch",
      ],
    },
    {
      name: "--show-files",
      description:
        "See the files Ruff will be run against with the current settings",
      exclusiveOn: [
        "--add-noqa",
        "--clean",
        "--explain",
        "--generate-shell-completion",
        "--show-settings",
        "--stdin-filename",
        "-w",
        "--watch",
      ],
    },
    {
      name: "--show-settings",
      description: "See the settings Ruff will use to lint a given Python file",
      exclusiveOn: [
        "--add-noqa",
        "--clean",
        "--explain",
        "--generate-shell-completion",
        "--show-files",
        "--stdin-filename",
        "-w",
        "--watch",
      ],
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
  args: {
    name: "files",
    isVariadic: true,
    isOptional: true,
    template: "filepaths",
  },
};

export default completion;
