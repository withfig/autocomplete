const completionSpec: Fig.Spec = {
  name: "nuxt",
  description: "",
  subcommands: [
    { name: "dev", description: "Launch the development server" },
    {
      name: "start",
      description:
        "Start the production server (after running nuxt build). Use it for Node.js hosting like Heroku, Digital Ocean, etc",
    },
    {
      name: "generate",
      description:
        "Build the application (if needed), generate every route as a HTML file and statically export to dist/ directory (used for static hosting)",
    },
    {
      name: "build",
      description:
        "Build and optimize your application with webpack for production",
    },
    {
      name: "webpack",
      description: "Inspect the webpack config",
      subcommands: [{ name: "subcommands coming soon" }],
      options: [
        {
          name: "--name",
          description: "Bundle name to inspect. (client, server, modern)",
        },
        { name: "--dev", description: "Inspect webpack config for dev mode" },
        {
          name: "--depth",
          description:
            "Inspection depth. Defaults to 2 to prevent verbose output",
        },
        {
          name: "--no-colors",
          description:
            "Disable ANSI colors (disabled by default when TTY is not available or when piping to a file)",
        },
      ],
    },
  ],

  // Only uncomment if nuxt takes an argument
  // args: {}
};

export default completionSpec;
