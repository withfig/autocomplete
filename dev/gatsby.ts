export const completion: Fig.Spec = {
  name: "gatsby",
  description: "Gatsby CLI",
  subcommands: [
    {
      name: "develop",
      description: "Start the Gatsby development server",
      args: {},
      options: [
        {
          name: ["-H", "--host"],
          description: "Set host. Defaults to localhost",
          args: {},
        },
        {
          name: ["-p", "--port"],
          description: "Set port. Defaults to env.PORT or 8000",
          args: {},
        },
        {
          name: ["-o", "--open"],
          description: "Open the site in your (default) browser for you",
          args: {},
        },
        {
          name: ["-S", "--https"],
          description: "Use HTTPS",
          args: {},
        },
        {
          name: ["--inspect"],
          description: "Opens a port for debugging",
          args: {},
        },
      ],
    },

    {
      name: "build",
      description: "Compile your application and make it ready for deployment",
      args: {},
      options: [
        {
          name: ["--prefix-paths"],
          description:
            "Build site with link paths prefixed (set pathPrefix in your config)",
          args: {},
        },
        {
          name: ["--no-uglify"],
          description:
            "Build site without uglifying JS bundles (for debugging)",
          args: {},
        },
        {
          name: ["--profile"],
          description: "Build site with react profiling",
          args: {},
        },
        {
          name: ["--open-tracing-config-file"],
          description: "Use Tracer configuration file",
          args: {},
        },
        {
          name: ["--graphql-tracing"],
          description:
            "Trace every graphql resolver, may have performance implications.",
          args: {},
        },
        {
          name: ["--no-color", "--no-colors"],
          description: "Disables colored terminal output",
          args: {},
        },
      ],
    },

    {
      name: "serve",
      description: "Serve the production build of your site for testing",
      args: {},
      options: [
        {
          name: ["-H", "--host"],
          description: "Set host. Defaults to localhost",
          args: {},
        },
        {
          name: ["-p", "--port"],
          description: "Set port. Defaults to env.PORT or 8000",
          args: {},
        },
        {
          name: ["-o", "--open"],
          description: "Open the site in your (default) browser for you",
          args: {},
        },
        {
          name: ["--prefix-paths"],
          description: "Serve site with link paths prefixed",
          args: {},
        },
      ],
    },

    {
      name: "clean",
      description: "Wipe out the cache (.cache folder) and public directories",
      args: {},
    },
    {
      name: "info",
      description: "Get helpful environment information",
      args: {},
    },
    {
      name: "plugin",
      description: "Run commands pertaining to gatsby plugins",

      args: {},
      options: [
        {
          name: ["docs"],
          description: "Documentation about using and creating plugins",
          args: {},
        },
      ],
    },

    {
      name: "repl",
      description: "Gatsby will prompt you to type in commands and explore",
      args: {},
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "View your current Gatsby CLI version",
    },
  ],
};
