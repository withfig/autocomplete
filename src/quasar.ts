const completionSpec: Fig.Spec = {
  name: "quasar",
  description: "Quasar Framework CLI",
  options: [
    {
      name: ["-h", "--help"],
      description: "Output usage information",
    },
  ],
  subcommands: [
    {
      name: "create",
      description: "Create a new Quasar project",
      args: {
        name: "project-name",
        description: "Name of the project",
      },
      options: [
        {
          name: ["--kit", "-k"],
          description: "Use specific starter kit",
          args: {
            name: "kit",
          },
        },
        {
          name: ["--branch", "-b"],
          description: "Use specific branch of the starter kit",
          args: {
            name: "branch",
          },
        },
        {
          name: ["--clone", "-c"],
          description: "Use git clone",
        },
        {
          name: ["--offline", "-o"],
          description: "Use a cached starter kit",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "info",
      description: "Gather environment information for issue reporting",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "upgrade",
      description: "Upgrade Quasar Framework packages",
      options: [
        {
          name: ["--install", "-i"],
          description: "Also perform package upgrades",
        },
        {
          name: ["--prerelease", "-p"],
          description: "Allow pre-release versions (alpha/beta)",
        },
        {
          name: ["--major", "-m"],
          description: "Allow newer major versions (breaking changes)",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },

    {
      name: "serve",
      description: "Start development server",
      args: {
        name: "path",
        template: "folders",
        description: "Path to serve",
      },
      options: [
        {
          name: ["--port", "-p"],
          description: "Port to use",
          args: {
            name: "port",
          },
        },
        {
          name: ["--hostname", "-H"],
          description: "Address to use",
          args: {
            name: "hostname",
          },
        },
        {
          name: ["--gzip", "-g"],
          description: "Compress content",
        },
        {
          name: ["--silent", "-s"],
          description: "Suppress log message",
        },
        {
          name: "--colors",
          description: "Log messages with colors",
        },
        {
          name: ["--open", "-o"],
          description: "Open browser window after starting",
        },
        {
          name: ["--cache", "-c"],
          description: "Cache time (max-age) in seconds",
          args: {
            name: "cache",
          },
        },
        {
          name: ["--micro", "-m"],
          description: "Use micro-cache",
          args: {
            name: "micro",
          },
        },
        {
          name: "--history",
          description: "Use history api fallback",
        },
        {
          name: ["--index", "-i"],
          description: "History mode (only!) index url path",
          args: {
            name: "index",
          },
        },
        {
          name: "--https",
          description: "Enable HTTPS",
        },
        {
          name: ["--cert", "-C"],
          description: "Path to SSL cert file (Optional)",
          args: {
            name: "cert",
          },
        },
        {
          name: ["--key", "-K"],
          description: "Path to SSL key file (Optional)",
          args: {
            name: "key",
          },
        },
        {
          name: "--proxy",
          description: "Proxy specific requests defined in file",
          args: {
            name: "proxy",
          },
        },
        {
          name: "--cors",
          description: "Enable CORS for all requests",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
  ],
};
export default completionSpec;
