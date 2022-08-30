const completionSpec: Fig.Spec = {
  name: "sanity",
  description: "",
  subcommands: [
    {
      name: "help",
      description: "Displays help information about Sanity",
      subcommands: [
        {
          name: "build",
        },
        {
          name: "codemod",
        },
        {
          name: "configcheck",
        },
        {
          name: "cors",
        },
        {
          name: "dataset",
        },
        {
          name: "debug",
        },
        {
          name: "deploy",
        },
        {
          name: "docs",
        },
        {
          name: "documents",
        },
        {
          name: "exec",
        },
        {
          name: "graphql",
        },
        {
          name: "hook",
        },
        {
          name: "init",
        },
        {
          name: "install",
        },
        {
          name: "login",
        },
        {
          name: "logout",
        },
        {
          name: "manage",
        },
        {
          name: "projects",
        },
        {
          name: "start",
        },
        {
          name: "undeploy",
        },
        {
          name: "uninstall",
        },
        {
          name: "upgrade",
        },
        {
          name: "users",
        },
        {
          name: "versions",
        },
      ],
    },
    {
      name: "build",
      description: "Builds the current Sanity configuration to a static bundle",
      options: [
        {
          name: "--source-maps",
          description:
            "Enable source maps for built bundles (increases size of bundle)",
        },
        {
          name: "--no-minify",
          description:
            "Skip minifying built JavaScript (speeds up build, increases size of bundle)",
        },
        {
          name: ["-y", "--yes"],
          description:
            "Use unattended mode, accepting defaults and using only flags for choices",
        },
      ],
    },
    {
      name: "codemod",
      description: "Runs a code modification script",
      options: [
        {
          name: "--dry",
          description: "Dry run (no changes are made to files)",
        },
        {
          name: "extensions",
          description:
            "Transform files with these file extensions (comma separated list) (default: js,ts,tsx)",
        },
        {
          name: "--no-verify",
          description: "Skip verification before running codemod",
        },
      ],
    },
    {
      name: "configcheck",
      description:
        "Checks if the required configuration files for plugins exists and are up to date",
    },
    {
      name: "cors",
      description: "Interact with CORS-entries for your project",
      subcommands: [
        {
          name: "add",
          description:
            "Allow a new origin to use your project API through CORS",
          options: [
            {
              name: "--credentials",
              description:
                "Allow credentials (token/cookie) to be sent from this origin",
            },
            {
              name: "--no-credentials",
              description:
                "Disallow credentials (token/cookie) to be sent from this origin",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing CORS-origin from your project",
        },
        {
          name: "list",
          description:
            "List all origins allowed to access the API for this project",
        },
      ],
    },
    {
      name: "dataset",
      description: "Interact with datasets in your project",
      subcommands: [
        {
          name: "alias",
          description: "You can manage your dataset alias using this command",
        },
        {
          name: "copy",
          description:
            "Manages dataset copying, including starting a new copy job, listing copy jobs and following the progress of a running copy job",
        },
        {
          name: "create",
          description: "Create a new dataset within your project",
        },
        {
          name: "delete",
          description: "Delete a dataset within your project",
        },
        {
          name: "export",
          description:
            "Export dataset to local filesystem as a gzipped tarball",
        },
        {
          name: "import",
          description: "Import documents to given dataset from ndjson file",
        },
        {
          name: "list",
          description: "List datasets of your project",
        },
        {
          name: "visibility",
          description: "Set visibility of a dataset",
        },
      ],
    },
    {
      name: "debug",
      description: "Gathers information on Sanity environment",
      options: [
        {
          name: "--secrets",
          description: "Include API keys in output",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploys a statically built Sanity studio",
      options: [
        {
          name: "--source-maps",
          description:
            "Enable source maps for built bundles (increases size of bundle)",
        },
        {
          name: "--no-minify",
          description:
            "Skip minifying built JavaScript (speeds up build, increases size of bundle)",
        },
        {
          name: "--no-build",
          description:
            "Don't build the studio prior to deploy, instead deploying the version currently in `dist/`",
        },
      ],
    },
    {
      name: "docs",
      description: "Opens the Sanity documentation",
    },
    {
      name: "documents",
      description: "Interact with documents in your project",
      subcommands: [
        {
          name: "create",
          description: "Create one or more documents",
        },
        {
          name: "delete",
          description: "Delete a document by ID",
        },
        {
          name: "get",
          description: "Get and print a document by ID",
        },
        {
          name: "query",
          description: "Query for documents",
        },
      ],
    },
    {
      name: "exec",
      description: "Runs a script in Sanity context",
      options: [
        {
          name: "--with-user-token",
          description:
            "Preload access token from CLI config into 'part:@sanity/base/client' part",
        },
        {
          name: "--mock-browser-env",
          description: "Mocks a browser-like environment using jsdom",
        },
      ],
    },
    {
      name: "graphql",
      description: "Interact with GraphQL APIs",
      subcommands: [
        {
          name: "deploy",
          description: "Deploy a GraphQL API from the current Sanity schema",
        },
        {
          name: "list",
          description:
            "Lists all the GraphQL endpoints deployed for this project",
        },
        {
          name: "undeploy",
          description: "Remove a deployed GraphQL API",
        },
      ],
    },
    {
      name: "hook",
      description: "Interact with hooks in your project",
      subcommands: [
        {
          name: "attempt",
          description: "Print details of a given webhook delivery attempt",
        },
        {
          name: "create",
          description: "Create a new hook for the given dataset",
        },
        {
          name: "delete",
          description: "Delete a hook within your project",
        },
        {
          name: "list",
          description: "List hooks for a given project",
        },
        {
          name: "logs",
          description: "List latest log entries for a given hook",
        },
      ],
    },
    {
      name: "init",
      description: "Initialize a new Sanity project or plugin",
      options: [
        {
          name: ["-y", "--yes"],
          description:
            "Use unattended mode, accepting defaults and using only flags for choices",
        },
        {
          name: "--project",
          description: "Project ID to use for the studio",
          args: {
            name: "projectId",
          },
        },
        {
          name: "--organization",
          description: "Organization ID to use for the project",
          args: {
            name: "organizationId",
          },
        },
        {
          name: "--dataset",
          description: "Dataset name for the studio",
          args: {
            name: "dataset",
          },
        },
        {
          name: "--dataset-default",
          description:
            'Set up a project with a public dataset named "production"',
        },
        {
          name: "--output-path",
          description: "Path to write studio project to",
          args: {
            name: "path",
          },
        },
        {
          name: "--template",
          description: 'Project template to use [default: "clean"]',
          args: {
            name: "template",
          },
        },
        {
          name: "--provider",
          description: "Login provider to use",
          args: {
            name: "provider",
          },
        },
        {
          name: "--visibility",
          description: "Visibility mode for dataset (public/private)",
          args: {
            name: "mode",
          },
        },
        {
          name: "--create-project",
          description: "Create a new project with the given name",
          args: {
            name: "name",
          },
        },
        {
          name: "project-plan",
          description: "Optionally select a plan for a new project",
          args: {
            name: "name",
          },
        },
        {
          name: "--coupon",
          description:
            "Optionally select a coupon for a new project (cannot be used with --project-plan)",
          args: {
            name: "name",
          },
        },
        {
          name: "--reconfigure",
          description:
            "Reconfigure Sanity studio in current folder with new project/dataset",
        },
      ],
    },
    {
      name: "install",
      description:
        "Installs a Sanity plugin to the current Sanity configuration",
    },
    {
      name: "login",
      description:
        "Authenticates against the Sanity.io API (no flag) or a third-party identity provider (with --sso flag)",
      options: [
        {
          name: "--sso",
          description: "Authenticate against a third-party identity provider",
          args: {
            name: "slug",
          },
        },
      ],
    },
    {
      name: "logout",
      description: "Logs out of the Sanity.io session",
    },
    {
      name: "manage",
      description: "Opens the Sanity project management UI",
    },
    {
      name: "projects",
      description: "Interact with projects connected to your logged in user",
      subcommands: [
        {
          name: "list",
          description: "Lists projects connected to your user",
        },
      ],
    },
    {
      name: "start",
      description: "Starts a web server for the Content Studio",
      options: [
        {
          name: "--port",
          description: "TCP port to start server on. [default: 3333]",
          args: {
            name: "port",
          },
        },
        {
          name: "--host",
          description:
            'The local network interface at which to listen. [default: "127.0.0.1"]',
          args: {
            name: "host",
          },
        },
      ],
    },
    {
      name: "undeploy",
      description: "Removes the deployed studio from <hostname>.sanity.studio",
    },
    {
      name: "uninstall",
      description:
        "Removes a Sanity plugin from the current Sanity configuration",
    },
    {
      name: "upgrade",
      description:
        "Upgrades all (or some) Sanity modules to their latest versions",
      options: [
        {
          name: "--range",
          description: "Version range to upgrade to, eg '^2.2.7' or '2.1.x'",
          args: {
            name: "range",
          },
        },
        {
          name: "--tag",
          description:
            "Tagged release to upgrade to, eg 'canary' or 'some-feature'",
          args: {
            name: "tag",
          },
        },
        {
          name: "--save-exact",
          description:
            "Pin the resolved version numbers in package.json (no ^ prefix)",
        },
      ],
    },
    {
      name: "users",
      description: "Manage users of your project",
      subcommands: [
        {
          name: "invite",
          description: "Invite a new user to the project",
        },
        {
          name: "list",
          description: "List users of the project",
        },
      ],
    },
    {
      name: "versions",
      description:
        "Shows the installed versions of Sanity CLI and core components",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for sanity",
    },
  ],
};
export default completionSpec;
