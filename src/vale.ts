const completionSpec: Fig.Spec = {
  name: "vale",
  description:
    "A syntax-aware linter for prose built with speed and extensibility in mind",
  subcommands: [
    {
      name: "ls-config",
      description: "Print the current configuration to stdout",
    },
    {
      name: "ls-metrics",
      description: "Print the given file's internal metrics to stdout",
      args: {
        name: "file",
        description: "The path to a file you want to analyze",
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for vale",
    },
    {
      name: ["--version", "-v"],
      description: "Print the current version",
    },
    {
      name: "--ignore-syntax",
      description: "Lint all files line-by-line",
    },
    {
      name: "--no-exit",
      description: "Don't return a nonzero exit code on errors",
    },
    {
      name: "--no-wrap",
      description: "Don't wrap CLI output",
    },
    {
      name: "--ext",
      description: "An extension to associate with stdin",
      displayName: "--ext=<ext>",
      requiresSeparator: true,
      args: {
        name: "ext",
        suggestions: [".md", ".rst", ".adoc", ".html"],
      },
    },
    {
      name: "--glob",
      description: "A glob pattern",
      displayName: "--glob=<glob>",
      requiresSeparator: true,
      args: {
        name: "glob",
      },
    },
    {
      name: "--minAlertLevel",
      description: "The minimum level to display",
      displayName: "--minAlertLevel=<level>",
      requiresSeparator: true,
      args: {
        name: "level",
        suggestions: ["suggestion", "warning", "error"],
      },
    },
    {
      name: "--output",
      description: "The alert output style to use",
      displayName: "--output=<style>",
      requiresSeparator: true,
      args: {
        name: "style",
        suggestions: ["line", "JSON"],
      },
    },
    {
      name: "--config",
      description: "A path to a .vale.ini file",
      displayName: "--config=<path>",
      requiresSeparator: true,
      args: {
        name: "path",
      },
    },
  ],
  args: {
    template: ["filepaths", "folders"],
    isVariadic: true,
  },
};
export default completionSpec;
