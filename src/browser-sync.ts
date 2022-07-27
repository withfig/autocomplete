const completionSpec: Fig.Spec = {
  name: "browser-sync",
  description:
    "Keep multiple browsers & devices in sync when building websites",
  options: [
    { name: "--version", description: "Show version number" },
    { name: "--help", description: "Show help", isPersistent: true },
  ],
  args: {
    name: "site or directory",
    template: "folders",
    isOptional: true,
    suggestCurrentToken: true,
  },
  subcommands: [
    {
      name: "start",
      description: "Start Browsersync",
      options: [
        {
          name: ["-s", "--server"],
          description: "Run a Local server (uses your cwd as the web root)",
        },
        {
          name: "--cwd",
          description: "Working directory",
          args: { name: "string", template: "folders" },
        },
        {
          name: "--json",
          description: "If true, certain logs will output as json only",
        },
        {
          name: ["--serveStatic", "--ss"],
          description: "Directories to serve static files from",
          args: { name: "array", template: "filepaths" },
        },
        {
          name: "--port",
          description: "Specify a port to use",
          args: { name: "number" },
        },
        { name: ["-p", "--proxy"], description: "Proxy an existing server" },
        {
          name: "--ws",
          description: "Proxy mode only - enable websocket proxying",
        },
        {
          name: ["-b", "--browser"],
          description: "Choose which browser should be auto-opened",
          args: { name: "array" },
        },
        {
          name: ["-w", "--watch"],
          description: "Watch files",
        },
        {
          name: "--ignore",
          description: "Ignore patterns for file watchers",
          args: { name: "array" },
        },
        {
          name: ["-f", "--files"],
          description: "File paths to watch",
          args: { name: "array", template: "filepaths" },
        },
        {
          name: "--index",
          description: "Specify which file should be used as the index page",
          args: { name: "string" },
        },
        {
          name: "--plugins",
          description: "Load Browsersync plugins",
          args: { name: "array" },
        },
        {
          name: "--extensions",
          description: "Specify file extension fallbacks",
          args: { name: "array" },
        },
        {
          name: "--startPath",
          description: "Specify the start path for the opened browser",
          args: { name: "string" },
        },
        {
          name: "--single",
          description:
            "If true, the connect-history-api-fallback middleware will be added",
        },
        { name: "--https", description: "Enable SSL for local development" },
        {
          name: "--directory",
          description: "Show a directory listing for the server",
        },
        {
          name: "--xip",
          description: "Use xip.io domain routing",
        },
        { name: "--tunnel", description: "Use a public URL" },
        {
          name: "--open",
          description:
            "Choose which URL is auto-opened (local, external or tunnel), or provide a url",
          args: { name: "string" },
        },
        {
          name: "--cors",
          description: "Add Access Control headers to every request",
        },
        {
          name: ["-c", "--config"],
          description: "Specify a path to a configuration file",
          args: { name: "string" },
        },
        { name: "--host", description: "Specify a hostname to use" },
        {
          name: "--listen",
          description:
            "Specify a hostname bind to (this will prevent binding to all interfaces)",
        },
        {
          name: "--logLevel",
          description: "Set the logger output level (silent, info or debug)",
          args: {
            name: "level",
            suggestions: ["silent", "info", "debug"],
          },
        },
        {
          name: "--reload-delay",
          description:
            "Time in milliseconds to delay the reload event following file changes",
          args: { name: "number" },
        },
        {
          name: "--reload-debounce",
          description:
            "Restrict the frequency in which browser:reload events can be emitted to connected clients",
          args: { name: "number" },
        },
        {
          name: "--ui-port",
          description: "Specify a port for the UI to use",
          args: { name: "number" },
        },
        {
          name: "--watchEvents",
          description: "Specify which file events to respond to",
          args: { name: "array" },
        },
        {
          name: "--no-notify",
          description: "Disable the notify element in browsers",
        },
        { name: "--no-open", description: "Don't open a new browser window" },
        { name: "--no-snippet", description: "Disable the snippet injection" },
        { name: "--no-online", description: "Force offline usage" },
        { name: "--no-ui", description: "Don't start the user interface" },
        { name: "--no-ghost-mode", description: "Disable Ghost Mode" },
        {
          name: "--no-inject-changes",
          description: "Reload on every file change",
        },
        {
          name: "--no-reload-on-restart",
          description: "Don't auto-reload all browsers following a restart",
        },
      ],
    },
    {
      name: "init",
      description: "Create a configuration file",
      options: [
        {
          name: "--cwd",
          description: "Working directory",
          args: { name: "string", template: "folders" },
        },
      ],
    },
    {
      name: "reload",
      description: "Send a reload event over HTTP protocol",
      options: [
        {
          name: ["-f", "--files"],
          description: "File paths to reload",
          args: { name: "array", template: "filepaths" },
        },
        {
          name: ["-p", "--port"],
          description: "Target a running instance by port number",
          args: { name: "number" },
        },
        {
          name: ["-u", "--url"],
          description:
            "Provide the full URL to the running browsersync isntance",
          args: { name: "number" },
        },
        {
          name: "--cwd",
          description: "Working directory",
          args: { name: "string", template: "folders" },
        },
      ],
    },
    {
      name: "recipe",
      description: "Generate the files for a recipe",
      args: {
        name: "recipe-name",
        generators: {
          script:
            "browser-sync recipe ls | tail -n +3 | sed -e 's/^[[:space:]]*//'",
          splitOn: "\n",
          cache: {
            strategy: "max-age",
            ttl: 1000 * 60 * 60 * 24 * 7,
          },
        },
      },
      subcommands: [{ name: "ls", description: "List recipes" }],
      options: [
        {
          name: "--cwd",
          description: "Working directory",
          args: { name: "string", template: "folders" },
        },
        {
          name: ["-o", "--output"],
          description: "Specify an output directory",
          args: { name: "string", template: "folders" },
        },
      ],
    },
  ],
};

export default completionSpec;
