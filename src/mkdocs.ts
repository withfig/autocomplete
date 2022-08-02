const globalOptions: Fig.Option[] = [
  {
    name: ["-q", "--quiet"],
    description: "Silence warnings",
    priority: 1,
  },
  {
    name: ["-v", "--verbose"],
    description: "Enable verbose output",
    priority: 2,
  },
];

const completionSpec: Fig.Spec = {
  name: "mkdocs",
  description: "Project documentation with Markdown",
  subcommands: [
    {
      name: "build",
      description: "Build the MkDocs documentation",
      options: [...globalOptions],
    },
    {
      name: "gh-deploy",
      description: "Deploy your documentation to GitHub Pages",
      options: [...globalOptions],
    },
    {
      name: "new",
      description: "Create a new MkDocs project",
      options: [...globalOptions],
    },
    {
      name: "serve",
      description: "Run the builtin development server",
      options: [...globalOptions],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help message and exit",
      priority: 1,
    },
    {
      name: ["-V", "--version"],
      description: "Show the version and exit",
      priority: 2,
    },
  ],
};

export default completionSpec;
