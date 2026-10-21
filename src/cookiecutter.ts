const completionSpec: Fig.Spec = {
  name: "cookiecutter",
  description: "Create a project from a Cookiecutter project template",
  args: [
    {
      name: "TEMPLATE",
      description:
        "Cookiecutter project template: a local directory, Git repository URL, or zip archive",
      isOptional: true,
      template: ["folders", "filepaths"],
    },
    {
      name: "EXTRA_CONTEXT",
      description: "Additional context values in key=value form",
      isVariadic: true,
      isOptional: true,
    },
  ],
  options: [
    {
      name: ["-V", "--version"],
      description: "Show the version and exit",
    },
    {
      name: "--no-input",
      description:
        "Do not prompt for parameters and only use cookiecutter.json file content. Defaults to deleting any cached resources and redownloading them. Cannot be combined with the --replay flag",
    },
    {
      name: ["-c", "--checkout"],
      description: "Branch, tag or commit to checkout after git clone",
      args: {
        name: "TEXT",
      },
    },
    {
      name: "--directory",
      description:
        "Directory within repo that holds cookiecutter.json file for advanced repositories with multi templates in it",
      args: {
        name: "TEXT",
      },
    },
    {
      name: ["-v", "--verbose"],
      description: "Print debug information",
    },
    {
      name: "--replay",
      description:
        "Do not prompt for parameters and only use information entered previously. Cannot be combined with the --no-input flag or with extra configuration passed",
    },
    {
      name: "--replay-file",
      description: "Use this file for replay instead of the default",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: ["-f", "--overwrite-if-exists"],
      description:
        "Overwrite the contents of the output directory if it already exists",
    },
    {
      name: ["-s", "--skip-if-file-exists"],
      description:
        "Skip the files in the corresponding directories if they already exist",
    },
    {
      name: ["-o", "--output-dir"],
      description: "Where to output the generated project dir into",
      args: {
        name: "PATH",
        template: "folders",
      },
    },
    {
      name: "--config-file",
      description: "User configuration file",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "--default-config",
      description: "Do not load a config file. Use the defaults instead",
    },
    {
      name: "--debug-file",
      description: "File to be used as a stream for DEBUG logging",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "--accept-hooks",
      description: "Accept pre/post hooks",
      args: {
        name: "yes|ask|no",
        isOptional: true,
        suggestions: ["yes", "ask", "no"],
      },
    },
    {
      name: ["-l", "--list-installed"],
      description: "List currently installed templates",
    },
    {
      name: "--keep-project-on-failure",
      description: "Do not delete project folder on failure",
    },
    {
      name: ["-h", "--help"],
      description: "Show this message and exit",
    },
  ],
};

export default completionSpec;
