// Options used commonly
const OPTION_CONFIG: Fig.Option = {
  name: ["-c", "--config"],
  args: {
    name: "wrangler.toml",
    template: "filepaths",
  },
  description: "Path to configuration file [default: wrangler.toml]",
};
const OPTION_ENV: Fig.Option = {
  name: ["-e", "--env"],
  args: {
    name: "environment",
  },
  description: "Environment to perform a command on",
};
const OPTION_HELP: Fig.Option = {
  name: ["-h", "--help"],
  description: "Prints help information",
};
const OPTION_VERBOSE: Fig.Option = {
  name: "--verbose",
  description: "Toggle verbose output (when applicable)",
};

/* DOCS: 
https://developers.cloudflare.com/workers/cli-wrangler/commands 
*/
const completionSpec: Fig.Spec = {
  name: "wrangler",
  description: "Wrangler CLI for Cloudflare Workers",
  subcommands: [
    /* GENERATE */
    {
      name: "generate",
      args: [
        {
          name: "name",
          isOptional: true,
          description: "The name of your worker! [default: worker]",
        },
        {
          name: "template",
          isOptional: true,
          description: `A link to a GitHub template! Defaults to 
https://github.com/cloudflare/worker-template`,
        },
      ],
      options: [
        OPTION_CONFIG,
        OPTION_ENV,
        OPTION_HELP,
        OPTION_VERBOSE,
        {
          name: ["-s", "--site"],
          args: {
            name: "site",
            isOptional: true,
          },
          description: `Initializes a Workers Sites project. Overrides 'type' 
and 'template'`,
        },
        {
          name: ["-t", "--type"],
          args: {
            name: "type",
            isOptional: true,
          },
          description: "The type of project you want generated",
        },
      ],
      description: "Generate a new worker project",
    },
    /* KV:NAMESPACE */
    {
      name: "kv:namespace",
      description: "Interact with your Workers KV Namespaces",
      options: [OPTION_CONFIG, OPTION_ENV, OPTION_HELP, OPTION_VERBOSE],
      subcommands: [
        {
          name: "create",
          description: "Create a new namespace",
          args: {
            name: "namespace",
          },
        },
        {
          name: "delete",
          description: "Delete namespace",
        },
        {
          name: "list",
          description: "List all namespaces on your Cloudflare account",
        },
      ],
    },
    /* KV:KEY */
    {
      name: "kv:key",
      description: "Individually manage Workers KV key-value",
      options: [OPTION_CONFIG, OPTION_ENV, OPTION_HELP, OPTION_VERBOSE],
      subcommands: [
        {
          name: "delete",
          description: "Delete a key and its value from a namespace",
          args: {
            name: "key",
            description: "Key whose value to delete",
          },
          options: [
            {
              name: ["-b", "--binding"],
              args: {
                name: "binding",
              },
              description:
                "The binding of the namespace this action applies to",
            },
            {
              name: ["-n", "--namespace-id"],
              args: {
                name: "namespace-id",
              },
              description: "The ID of the namespace this action applies to",
            },
          ],
        },
        {
          name: "get",
          description: "Get a key's value from a namespace",
          args: {
            name: "key",
          },
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
        },
        {
          name: "list",
          description: "List all keys in a namespace. Produces JSON output",
        },
        {
          name: "put",
          description: "Put a key-value pair into a namespace",
          args: {
            name: "key",
          },
        },
      ],
    },
    /* KV:BULK */
    {
      name: "kv:bulk",
      description: "Interact with multiple Workers KV key-value pairs at once",
      options: [OPTION_CONFIG, OPTION_ENV, OPTION_HELP, OPTION_VERBOSE],
      subcommands: [
        {
          name: "delete",
          description: "Delete multiple keys and their values from a namespace",
          args: {
            name: "keys",
          },
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
        },
        {
          name: "put",
          description: "Upload multiple key-value pairs to a namespace",
          args: {
            name: "keys",
            template: "filepaths",
          },
        },
      ],
    },
    /* ROUTE */
    {
      name: "route",
      description: "List or delete worker routes",
      options: [OPTION_CONFIG, OPTION_ENV, OPTION_HELP, OPTION_VERBOSE],
      subcommands: [
        {
          name: "delete",
          description: "Delete a route by ID",
          args: {
            name: "routeId",
          },
        },
        {
          name: "list",
          description: "List all routes associated with a zone (outputs json)",
        },
      ],
    },
    /* SECRET */
    {
      name: "secret",
      description:
        "Generate a secret that can be referenced in the worker script",
      options: [OPTION_CONFIG, OPTION_ENV, OPTION_HELP, OPTION_VERBOSE],
      subcommands: [
        {
          name: "delete",
          description: "Delete a secret variable from a script",
          args: {
            name: "secret",
          },
        },
        {
          name: "list",
          description: "List all secrets for a script",
        },
        {
          name: "put",
          description: "Create or update a secret variable for a script",
          args: {
            name: "secret",
          },
        },
      ],
    },
    /* INIT */
    {
      name: "init",
      description: "Create a wrangler.toml for an existing project",
      args: {
        name: "name",
        description: "The name of your worker! [default: worker]",
        isOptional: true,
      },
      options: [
        OPTION_CONFIG,
        OPTION_ENV,
        OPTION_HELP,
        OPTION_VERBOSE,
        {
          name: ["-s", "--site"],
          description: `Initializes a Workers Sites project. Overrides 'type' 
and 'template'`,
        },
        {
          name: ["-t", "--type"],
          args: {
            name: "type",
            isOptional: true,
          },
          description: "The type of project you want generated",
        },
      ],
    },
    /* BUILD */
    {
      name: "build",
      description: "Build your worker",
      options: [OPTION_CONFIG, OPTION_ENV, OPTION_HELP, OPTION_VERBOSE],
    },
    /* PREVIEW */
    {
      name: "preview",
      description: "Preview your code temporarily on cloudflareworkers.com",
      args: [
        {
          name: "method",
          isOptional: true,
          suggestions: ["get", "post"],
          description: `Type of request to preview your worker with (get, post) 
[default: get]`,
        },
        {
          name: "body",
          isOptional: true,
          description: "Body string to post to your preview worker request",
        },
      ],
      options: [
        OPTION_CONFIG,
        OPTION_ENV,
        OPTION_HELP,
        OPTION_VERBOSE,
        {
          name: "--headless",
          description: "Don't open the browser on preview",
        },
        {
          name: "--watch",
          description: `Watch your project for changes and update the preview 
automagically`,
        },
        {
          name: ["-u", "--url"],
          description: `URL to open in the worker preview 
[default: https://example.com]`,
        },
      ],
    },
    /* DEV */
    {
      name: "dev",
      description: "Start a local server for developing your worker",
      options: [
        OPTION_CONFIG,
        OPTION_ENV,
        {
          name: ["-h", "--host"],
          args: {
            name: "hostname",
          },
          description: `Host to forward requests to, defaults to the zone of 
project or to tutorial.cloudflareworkers.com if unauthenticated`,
        },
        {
          name: ["-i", "--ip"],
          args: {
            name: "ip_address",
          },
          description: "IP to listen on. Defaults to 127.0.0.1",
        },
        {
          name: ["-p", "--port"],
          args: {
            name: "port",
          },
          description: "Port to listen on. Defaults to 8787",
        },
      ],
    },
    /* PUBLISH */
    {
      name: "publish",
      description: "Publish your worker to the orange cloud",
      args: {
        name: "output",
        suggestions: ["json"],
        description: "[possible values: json]",
        isOptional: true,
      },
      options: [
        OPTION_CONFIG,
        OPTION_ENV,
        OPTION_HELP,
        OPTION_VERBOSE,
        {
          name: "--delete-class",
          args: {
            name: "delete-class",
          },
          description:
            "Delete all durable objects associated with a class in your script",
        },
        {
          name: "--new-class",
          args: {
            name: "new-class",
          },
          description:
            "Allow durable objects to be created from a class in your script",
        },
        {
          name: "--rename-class",
          args: {
            name: "rename-class new-name",
          },
          description: "Rename a durable object class in your script",
        },
        {
          name: "--transfer-class",
          args: {
            name: "transfer-class",
          },
          description:
            "Transfer all durable objects associated with a class in another script to a class in this script",
        },
      ],
    },
    /* CONFIG */
    {
      name: "config",
      description:
        "Authenticate Wrangler with a Cloudflare API Token or Global API Key",
      options: [
        OPTION_CONFIG,
        OPTION_ENV,
        OPTION_HELP,
        OPTION_VERBOSE,
        {
          name: "--api-key",
          description:
            "Use an email and global API key for authentication. This is not recommended; use API tokens (the default) if possible",
        },
        {
          name: "--no-verify",
          description:
            "Do not verify provided credentials before writing out Wrangler config file",
        },
      ],
    },
    /* SUBDOMAIN */
    {
      name: "subdomain",
      description: "Configure your workers.dev subdomain",
      args: {
        name: "name",
        description: "The subdomain on workers.dev you'd like to reserve",
      },
      options: [OPTION_CONFIG, OPTION_ENV, OPTION_HELP, OPTION_VERBOSE],
    },
    /* WHOAMI */
    {
      name: "whoami",
      description: "Retrieve your user info and test your auth config",
      options: [OPTION_CONFIG, OPTION_ENV, OPTION_HELP, OPTION_VERBOSE],
    },
    /* TAIL */
    {
      name: "tail",
      description: "Aggregate logs from production worker",
      options: [
        OPTION_CONFIG,
        OPTION_ENV,
        OPTION_HELP,
        OPTION_VERBOSE,
        {
          name: ["-f", "--format"],
          args: {
            name: "format",
            suggestions: ["json", "pretty"],
          },
          description:
            "Specify an output format [default: json]  [possible values: json, pretty]",
        },
        {
          name: "--metrics",
          args: {
            name: "metrics-port",
          },
          description:
            "Provides endpoint for cloudflared metrics. Used to retrieve tunnel url",
        },
        {
          name: ["-p", "--port"],
          args: {
            name: "port",
          },
          description: "Port to accept tail log requests",
        },
      ],
    },
    /* LOGIN */
    {
      name: "login",
      description:
        "Authenticate Wrangler with your Cloudflare username and password",
      options: [OPTION_CONFIG, OPTION_ENV, OPTION_HELP, OPTION_VERBOSE],
    },
    /* REPORT */
    {
      name: "report",
      description: "Report an error caught by Wrangler to Cloudflare",
      options: [
        OPTION_CONFIG,
        OPTION_ENV,
        OPTION_HELP,
        OPTION_VERBOSE,
        {
          name: "log",
          args: {
            name: "logfile",
            template: "filepaths",
          },
          description:
            "Specifies a log to report (e.g. --log=1619728882567.log)",
        },
      ],
    },
    /* HELP */
    {
      name: "help",
      description: "Prints this message or the help of the given subcommand(s)",
      args: {
        name: "command",
      },
    },
  ],
  options: [
    OPTION_HELP,
    OPTION_VERBOSE,
    {
      name: ["-V", "--version"],
      description: "Prints version information",
    },
  ],
};

export default completionSpec;
