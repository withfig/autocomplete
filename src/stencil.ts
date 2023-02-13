const completionSpec: Fig.Spec = {
  name: "stencil",
  description: "CLI to build Stencil projects and generate components",
  icon: "https://stenciljs.com/assets/icon/favicon.ico",
  subcommands: [
    {
      name: "build",
      description: "Build components for development or production",
      options: [
        {
          name: "--ci",
          description:
            "Run a build using recommended settings for a Continuous Integration (CI) environment",
        },
        {
          name: ["--config", "-c"],
          description: "Set stencil config file",
          args: {
            name: "config file",
            template: "filepaths",
          },
        },
        {
          name: "--debug",
          description: "Set the log level to debug",
        },
        {
          name: "--dev",
          description: "Development build",
        },
        {
          name: "--docs-readme",
          description: "Generate component readme.md docs",
        },
        {
          name: "--es5",
          description: "Creates an ES5 compatible build",
        },
        {
          name: "--log",
          description: "Write stencil-build.log file",
        },
        {
          name: "--prerender",
          description: "Prerender the application",
        },
        {
          name: "--prod",
          description: "Runs a production build",
        },
        {
          name: "--max-workers",
          description: "Max number of workers the compiler should use",
          args: {
            name: "workers",
            description: "Number of workers",
          },
        },
        {
          name: "--next",
          description: "Opt-in to test the 'next' Stencil compiler features",
        },
        { name: "--no-cache", description: "Disables using the cache" },
        {
          name: "--no-open",
          description: "Do not automatically open the browser window",
        },
        {
          name: ["--port", "--p"],
          description: "Port for the Integrated Dev Server",
          args: { name: "port" },
        },
        {
          name: "--serve",
          description: "Start the dev-server",
        },
        {
          name: "--stats",
          description: "Write stencil-stats.json file",
        },
        {
          name: "--verbose",
          description:
            "Logs additional information about each step of the build",
        },
        {
          name: "--watch",
          description: "Rebuild when files update",
        },
      ],
    },
    {
      name: "test",
      description: "Run unit and end-to-end tests",
      options: [
        {
          name: "--spec",
          description: "Run unit tests with Jest",
        },
        {
          name: "--e2e",
          description: "Run e2e tests with Puppeteer",
        },
        {
          name: "--no-build",
          description: "Skips build process before running the tests",
        },
      ],
    },
    {
      name: ["generate", "g"],
      description: "Bootstrap components",
      args: {
        isOptional: true,
        name: "name",
        description: "Name of new component (must contain dash (-))",
        isVariadic: true,
      },
    },
    {
      name: "telemetry",
      description: "Opt in or out of telemetry",
      args: {
        name: "state",
        suggestions: [
          {
            name: "off",
            description: "Disable sharing anonymous usage data",
          },
          {
            name: "on",
            description: "Enable sharing anonymous usage data",
          },
        ],
      },
    },
  ],
  options: [
    {
      name: "--help",
      description: "Display the help output explaining the different flags",
    },
    {
      name: "--version",
      description: "Prints the current Stencil version",
    },
  ],
};
export default completionSpec;
