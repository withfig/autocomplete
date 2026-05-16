const sharedOptions: Fig.Option[] = [
  {
    name: ["-H", "--host"],
    description: "Set host. Defaults to localhost",
    args: {
      name: "host",
    },
  },
  {
    name: ["-p", "--port"],
    description: "Set port. Defaults to env.PORT or 8000",
    args: {
      name: "port",
    },
  },
  {
    name: ["-o", "--open"],
    description: "Open the site in your (default) browser for you",
  },
];

const completionSpec: Fig.Spec = {
  name: "gatsby",
  description: "Gatsby CLI",
  subcommands: [
    {
      name: "develop",
      description: "Start the Gatsby development server",
      options: [
        ...sharedOptions,
        {
          name: ["-S", "--https"],
          description: "Use HTTPS",
        },
        {
          name: "--inspect",
          description: "Opens a port for debugging",
        },
      ],
    },
    {
      name: "build",
      description: "Compile your application and make it ready for deployment",
      options: [
        {
          name: "--prefix-paths",
          description:
            "Build site with link paths prefixed (set pathPrefix in your config)",
        },
        {
          name: "--no-uglify",
          description:
            "Build site without uglifying JS bundles (for debugging)",
        },
        {
          name: "--profile",
          description: "Build site with react profiling",
        },
        {
          name: "--open-tracing-config-file",
          description: "Use Tracer configuration file",
        },
        {
          name: "--graphql-tracing",
          description:
            "Trace every graphql resolver, may have performance implications",
        },
        {
          name: ["--no-color", "--no-colors"],
          description: "Disables colored terminal output",
        },
      ],
    },
    {
      name: "serve",
      description: "Serve the production build of your site for testing",
      options: [
        ...sharedOptions,
        {
          name: "--prefix-paths",
          description: "Serve site with link paths prefixed",
        },
      ],
    },
    {
      name: "clean",
      description: "Wipe out the cache (.cache folder) and public directories",
    },
    {
      name: "info",
      description: "Get helpful environment information",
      options: [
        {
          name: ["-C", "--clipboard"],
          description: "Copy environment information to your clipboard",
        },
      ],
    },
    {
      name: "plugin",
      description: "Run commands pertaining to gatsby plugins",
      options: [
        {
          name: "docs",
          description: "Documentation about using and creating plugins",
        },
      ],
    },
    {
      name: "repl",
      description: "Gatsby will prompt you to type in commands and explore",
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "View your current Gatsby CLI version",
    },
  ],
};

export default completionSpec;
