const completionSpec: Fig.Spec = {
  name: "firefox",
  description: "Free open-source web browser developer by Mozilla",
  args: {
    name: "URL",
    description: "URL to open",
  },
  options: [
    {
      name: "--display",
      description: "Specify an X display to use",
      args: {
        name: "display",
        description: "X display to use",
      },
    },
    {
      name: "--sync",
      description: "Make X calls synchronous",
    },
    {
      name: "--g-fatal-warnings",
      description: "Make all warnings fatal",
    },
    {
      name: ["-h", "--help"],
      description: "Print help message and exit",
    },
    {
      name: ["-v", "--version"],
      description: "Print version information and exit",
    },
    {
      name: "--full-version",
      description: "Print full version information and exit",
    },
    {
      name: "-P",
      description: "Specify profile to use",
      args: {
        name: "profile",
        description: "Profile to use",
      },
    },
    {
      name: "--profile",
      description: "Specify profile to use by folder",
      args: {
        name: "profile",
        description: "Profile folder to use",
        template: "folders",
      },
    },
    {
      name: "--migration",
      description: "Start with migration wizard",
    },
    {
      name: "--ProfileManager",
      description: "Start with ProfileManager",
    },
    {
      name: "--no-remote",
      description:
        "Do not accept or send remote commands; implies --new-instance",
      exclusiveOn: ["--new-instance"],
    },
    {
      name: "--new-instance",
      description: "Open new instance, not a new window in running instance",
    },
    {
      name: "--safe-mode",
      description: "Disables extensions and themes for this session",
    },
    {
      name: "--allow-downgrade",
      description: "Allows downgrading a profile",
    },
    {
      name: "--MOZ_LOG",
      description:
        "Treated as MOZ_LOG=<modules> environment variable, overrides it",
      args: {
        name: "modules",
        // not sure how to describe this, don't know how it works
      },
    },
    {
      name: "--MOZ_LOG_FILE",
      description:
        "Treated as MOZ_LOG_FILE=<file> environment variable, overrides it. If MOZ_LOG_FILE is not specified as an argument or as an environment variable, logging will be written to stdout",
      args: {
        name: "file",
        template: "filepaths",
        // see comment on line 86
      },
    },
    {
      name: "--headless",
      description: "Run without a GUI",
    },
    {
      name: "--jsdebugger",
      description:
        "Open the Browser Toolbox. Defaults to the local build but can be overridden by a firefox path",
      args: {
        name: "folder",
        // see comment on line 86
        template: "folders",
        isOptional: true,
      },
    },
    {
      name: "--wait-for-jsdebugger",
      description:
        "Spin event loop until JS debugger connects; enables debugging (some) application startup code paths",
      dependsOn: ["--jsdebugger"],
    },
    {
      name: "--start-debugger-server",
      description:
        "Start the devtools server on a TCP port or Unix domain socket path",
      args: {
        name: "port or path",
        template: "filepaths",
        generators: {
          // Needs to trigger on every keystroke
          trigger: () => true,

          // Suggest current token if it's a port number
          custom: async (tokens) => {
            const finalToken = tokens[tokens.length - 1];
            const port = Number(finalToken);
            if (Number.isNaN(port)) return [];
            if (!Number.isInteger(port)) return [];
            if (port < 0 || port > 65535) return [];
            return [{ name: finalToken, description: "Port number" }];
          },
        },
      },
    },
    {
      name: "--browser",
      description: "Open a browser window",
    },
    {
      name: "--new-window",
      description: "Open a URL in a new window",
      isRepeatable: true,
      args: {
        name: "URL",
        description: "URL to open",
      },
    },
    {
      name: "--new-tab",
      description: "Open a URL in a new tab",
      isRepeatable: true,
      args: {
        name: "URL",
        description: "URL to open",
      },
    },
    {
      name: "--private-window",
      description: "Open a URL in a new private window",
      isRepeatable: true,
      args: {
        name: "URL",
        description: "URL to open",
      },
    },
    {
      name: "--preferences",
      description: "Open the preferences dialog",
    },
    {
      name: "--screenshot",
      description: "Take a screenshot",
      args: {
        isOptional: true,
        name: "folder",
        description: "Folder to save screenshot to",
        template: "folders",
      },
    },
    {
      name: "--window-size",
      description: "Size of your screenshot",
      dependsOn: ["--screenshot"],
      args: [
        {
          name: "width",
          description: "Width of your screenshot",
        },
        {
          name: "height",
          description: "Height of your screenshot",
          isOptional: true,
        },
      ],
    },
    {
      name: "--search",
      description: "Search for a term in your default search engine",
      args: {
        name: "term",
        description: "Term to search for",
      },
    },
    {
      name: "--setDefaultBrowser",
      description: "Set Firefox as the default browser",
    },
    {
      name: "--first-startup",
      description: "Run post-install actions before opening a new window",
    },
    {
      name: "--kiosk",
      description: "Start the browser in kiosk mode",
    },
    {
      name: "--disable-pinch",
      description: "Disable touch-screen and touch-pad pinch gestures",
    },
    {
      name: "--jsconsole",
      description: "Open the Browser Console",
    },
    {
      name: "--devtools",
      description: "Open DevTools on initial load",
    },
    {
      name: "--marionette",
      description: "Enable remote debugging server",
    },
    {
      name: "--remote-debugging-port",
      description:
        "Start the Firefox Remote Agent, which is a low-level remote debugging interface used for WebDriver",
      args: {
        name: "port",
        description: "Defaults to port 9222",
        isOptional: true,
        default: "9222",
      },
    },
    {
      name: "--allow-remote-hosts",
      description: "Values of the Host header to allow for incoming requests",
      args: {
        name: "hosts",
        // see comment on line 86
      },
    },
    {
      name: "--allow-remote-origins",
      description: "Values of the Origin header to allow for incoming requests",
      args: {
        name: "origins",
        // see comment on line 86
      },
    },
  ],
};
export default completionSpec;
