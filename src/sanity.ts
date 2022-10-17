const completionSpec: Fig.Spec = {
  name: "sanity",
  description:
    "Sanity CLI tool for managing Sanity installations, managing plugins, schemas and datasets",
  subcommands: [
    {
      name: "help",
      description: "Displays help information about Sanity",
      args: { name: "command", template: "help", isOptional: true },
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
          name: "--extensions",
          description:
            "Transform files with these file extensions (comma separated list) (default: js,ts,tsx)",
          args: { name: "extensions" },
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
              exclusiveOn: ["--no-credentials"],
            },
            {
              name: "--no-credentials",
              description:
                "Disallow credentials (token/cookie) to be sent from this origin",
              exclusiveOn: ["--credentials"],
            },
          ],
          args: { name: "origin", description: "The origin to allow" },
        },
        {
          name: "delete",
          description: "Delete an existing CORS-origin from your project",
          args: { name: "origin", description: "The origin to delete" },
          isDangerous: true,
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
          subcommands: [
            {
              name: "create",
              args: [
                { name: "alias-name", isOptional: true },
                { name: "target-dataset", isOptional: true },
              ],
            },
            {
              name: "delete",
              args: { name: "alias-name" },
              isDangerous: true,
            },
            {
              name: "link",
              options: [
                {
                  name: "--force",
                  description: "Skips security prompt and forces link command",
                },
              ],
              args: [
                { name: "alias-name", isOptional: true },
                { name: "target-dataset", isOptional: true },
              ],
            },
            {
              name: "unlink",
              args: { name: "alias-name", isOptional: true },
            },
          ],
        },
        {
          name: "copy",
          description:
            "Manages dataset copying, including starting a new copy job, listing copy jobs and following the progress of a running copy job",
          options: [
            {
              name: "--detach",
              description: "Start the copy without waiting for it to finish",
            },
            {
              name: "--attach",
              description:
                "Attach to the running copy process to show progress",
              args: { name: "job-id" },
            },
            {
              name: "--skip-history",
              description: "Don't preserve document history on copy",
            },
            {
              name: "--list",
              description:
                "Lists all dataset copy jobs corresponding to a certain criteria",
            },
            {
              name: "--offset",
              description:
                "Start position in the list of jobs. Default 0. With --list",
              args: { name: "offset" },
              dependsOn: ["--list"],
            },
            {
              name: "--limit",
              description:
                "Maximum number of jobs returned. Default 10. Maximum 1000. With --list",
              args: { name: "limit" },
              dependsOn: ["--list"],
            },
          ],
          args: [
            { name: "source-dataset", isOptional: true },
            { name: "target-dataset", isOptional: true },
          ],
        },
        {
          name: "create",
          description: "Create a new dataset within your project",
          options: [
            {
              name: "--visibility",
              description: "Set visibility for this dataset (public/private)",
              args: { name: "visibility", suggestions: ["public", "private"] },
            },
          ],
          args: { name: "name" },
        },
        {
          name: "delete",
          description: "Delete a dataset within your project",
          args: { name: "datasetName" },
          isDangerous: true,
        },
        {
          name: "export",
          description:
            "Export dataset to local filesystem as a gzipped tarball",
          options: [
            {
              name: "--raw",
              description:
                "Extract only documents, without rewriting asset references",
            },
            {
              name: "--no-assets",
              description:
                "Export only non-asset documents and remove references to image assets",
            },
            {
              name: "--no-drafts",
              description: "Export only published versions of documents",
            },
            {
              name: "--no-compress",
              description:
                "Skips compressing tarball entries (still generates a gzip file)",
            },
            {
              name: "--types",
              description: "Defines which document types to export",
              args: { name: "types" },
            },
            {
              name: "--overwrite",
              description: "Overwrite any file with the same name",
            },
            {
              name: "--asset-concurrency",
              description: "Concurrent number of asset downloads",
              args: { name: "num" },
            },
          ],
          args: [
            { name: "name" },
            { name: "destination", template: "folders" },
          ],
        },
        {
          name: "import",
          description: "Import documents to given dataset from ndjson file",
          options: [
            {
              name: "--missing",
              description:
                "On duplicate document IDs, skip importing document in question",
            },
            {
              name: "--replace",
              description:
                "On duplicate document IDs, replace existing document with imported document",
            },
            {
              name: "--allow-failing-assets",
              description: "Skip assets that cannot be fetched/uploaded",
            },
            {
              name: "--replace-assets",
              description: "Skip reuse of existing assets",
            },
          ],
          args: [
            { name: "file", template: "filepaths" },
            { name: "target_dataset" },
          ],
        },
        {
          name: "list",
          description: "List datasets of your project",
        },
        {
          name: "visibility",
          description: "Set visibility of a dataset",
          args: [
            { name: "dataset" },
            { name: "mode", suggestions: ["get", "set"] },
          ],
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
      args: { name: "source_dir", template: "folders", isOptional: true },
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
          options: [
            {
              name: "--replace",
              description:
                "On duplicate document IDs, replace existing document with specified document(s)",
            },
            {
              name: "--missing",
              description:
                "On duplicate document IDs, don't modify the target document(s)",
            },
            {
              name: "--watch",
              description:
                "Write the documents whenever the target file or buffer changes",
            },
            {
              name: "--json5",
              description:
                'Use JSON5 file type to allow a "simplified" version of JSON',
            },
            {
              name: "--id",
              description:
                "Specify a document ID to use. Will fetch remote document ID and populate editor",
              args: { name: "id" },
            },
            {
              name: "--dataset",
              description: "NAME to override dataset",
              args: { name: "dataset" },
            },
          ],
          args: { name: "file", template: "filepaths", isOptional: true },
        },
        {
          name: "delete",
          description: "Delete a document by ID",
          options: [
            {
              name: "--dataset",
              description: "NAME to override dataset",
              args: { name: "dataset" },
            },
          ],
          args: { name: "id", isVariadic: true },
          isDangerous: true,
        },
        {
          name: "get",
          description: "Get and print a document by ID",
          options: [
            { name: "--pretty", description: "Colorized JSON output" },
            {
              name: "--dataset",
              description: "NAME to override dataset",
              args: { name: "dataset" },
            },
          ],
          args: { name: "document_id" },
        },
        {
          name: "query",
          description: "Query for documents",
          options: [
            { name: "--pretty", description: "Colorized JSON output" },
            {
              name: "--dataset",
              description: "NAME to override dataset",
              args: { name: "dataset" },
            },
            {
              name: "--api-version",
              description: "API version to use (defaults to `v1`)",
              args: { name: "version" },
            },
          ],
          args: { name: "query" },
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
      args: { name: "script", template: "filepaths" },
    },
    {
      name: "graphql",
      description: "Interact with GraphQL APIs",
      subcommands: [
        {
          name: "deploy",
          description: "Deploy a GraphQL API from the current Sanity schema",
          options: [
            {
              name: "--dataset",
              description: "Deploy API for the given dataset",
              args: { name: "dataset" },
            },
            {
              name: "--tag",
              description: "Deploy API to given tag (defaults to 'default')",
              args: { name: "tag" },
            },
            {
              name: "--generation",
              description: "API generation to deploy (defaults to 'gen3')",
              args: { name: "generation" },
            },
            {
              name: "--non-null-document-fields",
              description:
                "Set document interface fields (_id, _type etc) as non-null",
            },
            {
              name: "--playground",
              description:
                "Deploy a GraphQL playground for easily testing queries (public)",
            },
            {
              name: "--no-playground",
              description:
                "Skip playground prompt (do not deploy a playground)",
            },
            {
              name: "--force",
              description: "Deploy API without confirming breaking changes",
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all the GraphQL endpoints deployed for this project",
        },
        {
          name: "undeploy",
          description: "Remove a deployed GraphQL API",
          options: [
            {
              name: "--dataset",
              description: "Delete GraphQL API for the given dataset",
              args: { name: "dataset" },
            },
            {
              name: "--tag",
              description:
                "Delete GraphQL API for the given tag (defaults to 'default')",
              args: { name: "tag" },
            },
          ],
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
          args: { name: "attempt_id" },
        },
        {
          name: "create",
          description: "Create a new hook for the given dataset",
        },
        {
          name: "delete",
          description: "Delete a hook within your project",
          args: { name: "name" },
          isDangerous: true,
        },
        {
          name: "list",
          description: "List hooks for a given project",
        },
        {
          name: "logs",
          description: "List latest log entries for a given hook",
          args: { name: "name" },
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
            suggestions: ["public", "private"],
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
          name: "--project-plan",
          description: "Optionally select a plan for a new project",
          args: {
            name: "name",
          },
        },
        {
          name: "--coupon",
          description:
            "Optionally select a coupon for a new project (cannot be used with --project-plan)",
          exclusiveOn: ["--project-plan"],
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
      args: { name: "plugin" },
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
          options: [
            {
              name: "--sort",
              description: "Sort output by specified column",
              args: { name: "field" },
            },
            {
              name: "--order",
              description: "Sort output ascending/descending",
              args: { name: "order", suggestions: ["asc", "desc"] },
            },
          ],
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
      args: { name: "plugin" },
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
          options: [
            {
              name: "--role",
              description: "Role to invite the user as",
              args: { name: "role" },
            },
          ],
          args: { name: "email" },
        },
        {
          name: "list",
          description: "List users of the project",
          options: [
            {
              name: "--no-invitations",
              description: "Don't include pending invitations",
            },
            {
              name: "--no-robots",
              description: "Don't include robots (token users)",
            },
            {
              name: "--sort",
              description:
                "Sort users by specified column: id, name, role, date",
              args: {
                name: "field",
                suggestions: ["id", "name", "role", "date"],
              },
            },
            {
              name: "--order",
              description: "Sort output ascending/descending",
              args: { name: "order", suggestions: ["asc", "desc"] },
            },
          ],
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
