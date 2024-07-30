const help = (name: string): Fig.Option => ({
  name: ["-h", "--help"],
  description: `help for ${name}`,
});

// options common to 'mkdocs build' 'mkdocs gh-deploy' and 'mkdocs serve'
const commonOptions: Fig.Option[] = [
  {
    name: ["-f", "--config-file"],
    description: "Provide a specific MkDocs config",
    args: {
      template: "filepaths",
    },
  },
  {
    name: ["-s", "--strict"],
    description:
      "Enable strict mode. This will cause MkDocs to abort the build on any warnings",
  },
  {
    name: ["-t", "--theme"],
    description: "The theme to use when building your documentation",
    args: {
      name: "theme",
    },
  },
  {
    name: "--use-directory-urls",
    description: "Use directory URLs when building pages (the default)",
  },
  {
    name: "--no-directory-urls",
    description: "Don't use directory URLs when building pages",
  },
];

const globalOptions: Fig.Option[] = [
  {
    name: ["-q", "--quiet"],
    description: "Silence warnings",
  },
  {
    name: ["-v", "--verbose"],
    description: "Enable verbose output",
  },
];

const completionSpec: Fig.Spec = {
  name: "mkdocs",
  description: "Project documentation with Markdown",
  subcommands: [
    {
      name: "build",
      description: "Build the MkDocs documentation",
      options: [
        help("build"),
        ...globalOptions,
        ...commonOptions,
        {
          name: ["-c", "--clean"],
          description:
            "Remove old files from the site directory before building (the default)",
        },
        {
          name: "--dirty",
          description:
            "Only rebuild pages that have been modified since last build",
        },
        {
          name: ["-d", "--site-dir"],
          description:
            "The directory to output the result of the documentation build",
          args: {
            template: "folders",
          },
        },
      ],
    },
    {
      name: "gh-deploy",
      description: "Deploy your documentation to GitHub Pages",
      options: [
        help("gh-deploy"),
        ...globalOptions,
        ...commonOptions,
        {
          name: ["-c", "--clean"],
          description:
            "Remove old files from the site directory before building (the default)",
        },
        {
          name: "--dirty",
          description:
            "Only rebuild pages that have been modified since last build",
        },
        {
          name: ["-m", "--message"],
          description:
            "A commit message to use when committing to the GitHub Pages remote branch. Commit {sha} and MkDocs {version} are available as expansions",
          args: {
            name: "message",
          },
        },
        {
          name: ["-b", "--remote-branch"],
          description:
            "The remote branch to commit to for GitHub Pages. This overrides the value specified in config",
          args: {
            name: "branch name",
          },
        },
        {
          name: ["-r", "--remote-name"],
          description:
            "The remote name to commit to for GitHub Pages. This overrides the value specified in config",
          args: {
            name: "remote name",
          },
        },
        {
          name: "--force",
          description: "Force the push to the repository",
          isDangerous: true,
        },
        {
          name: "--no-history",
          description: "Replace the whole Git history with one new commit",
          isDangerous: true,
        },
        {
          name: "--ignore-version",
          description:
            "Ignore check that build is not being deployed with an older version of MkDocs",
        },
        {
          name: "--shell",
          description: "Use the shell when invoking Git",
        },
      ],
    },
    {
      name: "new",
      description: "Create a new MkDocs project",
      options: [help("new"), ...globalOptions],
      args: {
        template: "folders",
      },
    },
    {
      name: "serve",
      description: "Run the builtin development server",
      options: [
        help("serve"),
        ...globalOptions,
        ...commonOptions,
        {
          name: ["-a", "--dev-addr"],
          description:
            "IP address and port to serve documentation locally (default: localhost:8000)",
          args: {
            name: "IP:PORT",
          },
        },
        {
          name: "--live-reload",
          description:
            "Enable the live reloading in the development server (this is the default)",
        },
        {
          name: "--no-reload",
          description: "Disable the live reloading in the development server",
        },
        {
          name: "--dirtyreload",
          description:
            "Enable the live reloading in the development server, but only re-build files that have changed",
        },
        {
          name: "--watch-theme",
          description:
            "Include the theme in list of files to watch for live reloading. Ignored when live reload is not used",
        },
        {
          name: ["-w", "--watch"],
          description:
            "A directory or file to watch for live reloading. Can be supplied multiple times",
          args: {
            template: ["folders", "filepaths"],
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help message and exit",
    },
    {
      name: ["-V", "--version"],
      description: "Show the version and exit",
    },
  ],
};

export default completionSpec;
