const completionSpec: Fig.Spec = {
  name: "helm",
  description: "The Helm package manager for Kubernetes",
  subcommands: [
    {
      name: "completion",
      description: "Generate autocompletion scripts for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Create a new chart with the given name",
      options: [
        {
          name: ["--starter", "-p"],
          description: "The name or absolute path to Helm starter scaffold",
          args: { name: "starter" },
        },
      ],
    },
    {
      name: ["dep", "dependencies", "dependency"],
      description: "Manage a chart's dependencies",
      subcommands: [
        {
          name: "build",
          description:
            "Rebuild the charts/ directory based on the Chart.lock file",
          options: [
            {
              name: "--keyring",
              description: "Keyring containing public keys",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--skip-refresh",
              description: "Do not refresh the local repository cache",
            },
            {
              name: "--verify",
              description: "Verify the packages against signatures",
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "List the dependencies for the given chart",
          options: [
            {
              name: "--max-col-width",
              description: "Maximum column width for output table",
              args: { name: "max-col-width", default: "80" },
            },
          ],
        },
        {
          name: ["up", "update"],
          description: "Update charts/ based on the contents of Chart.yaml",
          options: [
            {
              name: "--keyring",
              description: "Keyring containing public keys",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--skip-refresh",
              description: "Do not refresh the local repository cache",
            },
            {
              name: "--verify",
              description: "Verify the packages against signatures",
            },
          ],
        },
      ],
    },
    { name: "env", description: "Helm client environment information" },
    {
      name: "get",
      description: "Download extended information of a named release",
      subcommands: [
        {
          name: "all",
          description: "Download all information for a named release",
          options: [
            {
              name: "--revision",
              description: "Get the named release with revision",
              args: { name: "revision", default: "0" },
            },
            {
              name: "--template",
              description:
                "Go template for formatting the output, eg: {{.Release.Name}}",
              args: { name: "template" },
            },
          ],
        },
        {
          name: "hooks",
          description: "Download all hooks for a named release",
          options: [
            {
              name: "--revision",
              description: "Get the named release with revision",
              args: { name: "revision", default: "0" },
            },
          ],
        },
        {
          name: "manifest",
          description: "Download the manifest for a named release",
          options: [
            {
              name: "--revision",
              description: "Get the named release with revision",
              args: { name: "revision", default: "0" },
            },
          ],
        },
        {
          name: "notes",
          description: "Download the notes for a named release",
          options: [
            {
              name: "--revision",
              description: "Get the named release with revision",
              args: { name: "revision", default: "0" },
            },
          ],
        },
        {
          name: "values",
          description: "Download the values file for a named release",
          options: [
            {
              name: ["--all", "-a"],
              description: "Dump all (computed) values",
            },
            {
              name: ["--output", "-o"],
              description:
                "Prints the output in the specified format. Allowed values: table, json, yaml",
              args: { name: "output", default: "table" },
            },
            {
              name: "--revision",
              description: "Get the named release with revision",
              args: { name: "revision", default: "0" },
            },
          ],
        },
      ],
    },
    {
      name: ["hist", "history"],
      description: "Fetch release history",
      options: [
        {
          name: "--max",
          description: "Maximum number of revision to include in history",
          args: { name: "max", default: "256" },
        },
        {
          name: ["--output", "-o"],
          description:
            "Prints the output in the specified format. Allowed values: table, json, yaml",
          args: { name: "output", default: "table" },
        },
      ],
    },
    {
      name: "install",
      description: "Install a chart",
      options: [
        {
          name: "--atomic",
          description:
            "If set, the installation process deletes the installation on failure. The --wait flag will be set automatically if --atomic is used",
        },
        {
          name: "--ca-file",
          description:
            "Verify certificates of HTTPS-enabled servers using this CA bundle",
          args: { name: "ca-file", template: "filepaths" },
        },
        {
          name: "--cert-file",
          description: "Identify HTTPS client using this SSL certificate file",
          args: { name: "cert-file", template: "filepaths" },
        },
        {
          name: "--create-namespace",
          description: "Create the release namespace if not present",
        },
        {
          name: "--dependency-update",
          description:
            "Update dependencies if they are missing before installing the chart",
        },
        {
          name: "--description",
          description: "Add a custom description",
          args: { name: "description" },
        },
        {
          name: "--devel",
          description:
            "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
        },
        {
          name: "--disable-openapi-validation",
          description:
            "If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema",
        },
        { name: "--dry-run", description: "Simulate an install" },
        {
          name: ["--generate-name", "-g"],
          description: "Generate the name (and omit the NAME parameter)",
        },
        {
          name: "--insecure-skip-tls-verify",
          description: "Skip tls certificate checks for the chart download",
        },
        {
          name: "--key-file",
          description: "Identify HTTPS client using this SSL key file",
          args: { name: "key-file", template: "filepaths" },
        },
        {
          name: "--keyring",
          description: "Location of public keys used for verification",
          args: {
            name: "keyring",
            template: "filepaths",
            default: "~/.gnupg/pubring.gpg",
          },
        },
        {
          name: "--name-template",
          description: "Specify template used to name the release",
          args: { name: "name-template" },
        },
        {
          name: "--no-hooks",
          description: "Prevent hooks from running during install",
        },
        {
          name: ["--output", "-o"],
          description:
            "Prints the output in the specified format. Allowed values: table, json, yaml",
          args: { name: "output", default: "table" },
        },
        {
          name: "--pass-credentials",
          description: "Pass credentials to all domains",
        },
        {
          name: "--password",
          description:
            "Chart repository password where to locate the requested chart",
          args: { name: "password" },
        },
        {
          name: "--post-renderer",
          description:
            "The path to an executable to be used for post rendering. If it exists in $PATH, the binary will be used, otherwise it will try to look for the executable at the given path",
          args: { name: "post-renderer" },
        },
        {
          name: "--post-renderer-args",
          description:
            "An argument to the post-renderer (can specify multiple)",
          isRepeatable: true,
          args: { name: "post-renderer-args" },
        },
        {
          name: "--render-subchart-notes",
          description: "If set, render subchart notes along with the parent",
        },
        {
          name: "--replace",
          description:
            "Re-use the given name, only if that name is a deleted release which remains in the history. This is unsafe in production",
        },
        {
          name: "--repo",
          description:
            "Chart repository url where to locate the requested chart",
          args: { name: "repo" },
        },
        {
          name: "--set",
          description:
            "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set" },
        },
        {
          name: "--set-file",
          description:
            "Set values from respective files specified via the command line (can specify multiple or separate values with commas: key1=path1,key2=path2)",
          isRepeatable: true,
          args: { name: "set-file", template: "filepaths" },
        },
        {
          name: "--set-string",
          description:
            "Set STRING values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set-string" },
        },
        {
          name: "--skip-crds",
          description:
            "If set, no CRDs will be installed. By default, CRDs are installed if not already present",
        },
        {
          name: "--timeout",
          description:
            "Time to wait for any individual Kubernetes operation (like Jobs for hooks)",
          args: { name: "timeout", default: "5m0s" },
        },
        {
          name: "--username",
          description:
            "Chart repository username where to locate the requested chart",
          args: { name: "username" },
        },
        {
          name: ["--values", "-f"],
          description:
            "Specify values in a YAML file or a URL (can specify multiple)",
          isRepeatable: true,
          args: { name: "values", template: "filepaths" },
        },
        { name: "--verify", description: "Verify the package before using it" },
        {
          name: "--version",
          description:
            "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
          args: { name: "version" },
        },
        {
          name: "--wait",
          description:
            "If set, will wait until all Pods, PVCs, Services, and minimum number of Pods of a Deployment, StatefulSet, or ReplicaSet are in a ready state before marking the release as successful. It will wait for as long as --timeout",
        },
        {
          name: "--wait-for-jobs",
          description:
            "If set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout",
        },
      ],
    },
    {
      name: "lint",
      description: "Examine a chart for possible issues",
      options: [
        { name: "--quiet", description: "Print only warnings and errors" },
        {
          name: "--set",
          description:
            "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set" },
        },
        {
          name: "--set-file",
          description:
            "Set values from respective files specified via the command line (can specify multiple or separate values with commas: key1=path1,key2=path2)",
          isRepeatable: true,
          args: { name: "set-file", template: "filepaths" },
        },
        {
          name: "--set-string",
          description:
            "Set STRING values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set-string" },
        },
        { name: "--strict", description: "Fail on lint warnings" },
        {
          name: ["--values", "-f"],
          description:
            "Specify values in a YAML file or a URL (can specify multiple)",
          isRepeatable: true,
          args: { name: "values", template: "filepaths" },
        },
        { name: "--with-subcharts", description: "Lint dependent charts" },
      ],
    },
    {
      name: ["ls", "list"],
      description: "List releases",
      options: [
        {
          name: ["--all", "-a"],
          description: "Show all releases without any filter applied",
        },
        {
          name: ["--all-namespaces", "-A"],
          description: "List releases across all namespaces",
        },
        { name: ["--date", "-d"], description: "Sort by release date" },
        {
          name: "--deployed",
          description:
            "Show deployed releases. If no other is specified, this will be automatically enabled",
        },
        { name: "--failed", description: "Show failed releases" },
        {
          name: ["--filter", "-f"],
          description:
            "A regular expression (Perl compatible). Any releases that match the expression will be included in the results",
          args: { name: "filter" },
        },
        {
          name: ["--max", "-m"],
          description: "Maximum number of releases to fetch",
          args: { name: "max", default: "256" },
        },
        {
          name: "--no-headers",
          description:
            "Don't print headers when using the default output format",
        },
        {
          name: "--offset",
          description:
            "Next release index in the list, used to offset from start value",
          args: { name: "offset", default: "0" },
        },
        {
          name: ["--output", "-o"],
          description:
            "Prints the output in the specified format. Allowed values: table, json, yaml",
          args: { name: "output", default: "table" },
        },
        { name: "--pending", description: "Show pending releases" },
        {
          name: ["--reverse", "-r"],
          description: "Reverse the sort order",
        },
        {
          name: ["--selector", "-l"],
          description:
            "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2). Works only for secret(default) and configmap storage backends",
          args: { name: "selector" },
        },
        {
          name: ["--short", "-q"],
          description: "Output short (quiet) listing format",
        },
        {
          name: "--superseded",
          description: "Show superseded releases",
        },
        {
          name: "--time-format",
          description:
            'Format time using golang time formatter. Example: --time-format "2006-01-02 15:04:05Z0700"',
          args: { name: "time-format" },
        },
        {
          name: "--uninstalled",
          description:
            "Show uninstalled releases (if 'helm uninstall --keep-history' was used)",
        },
        {
          name: "--uninstalling",
          description: "Show releases that are currently being uninstalled",
        },
      ],
    },
    {
      name: "package",
      description: "Package a chart directory into a chart archive",
      options: [
        {
          name: "--app-version",
          description: "Set the appVersion on the chart to this version",
          args: { name: "app-version" },
        },
        {
          name: ["--dependency-update", "-u"],
          description:
            'Update dependencies from "Chart.yaml" to dir "charts/" before packaging',
        },
        {
          name: ["--destination", "-d"],
          description: "Location to write the chart",
          args: { name: "destination", default: "." },
        },
        {
          name: "--key",
          description:
            "Name of the key to use when signing. Used if --sign is true",
          args: { name: "key" },
        },
        {
          name: "--keyring",
          description: "Location of a public keyring",
          args: {
            name: "keyring",
            template: "filepaths",
            default: "~/.gnupg/pubring.gpg",
          },
        },
        {
          name: "--passphrase-file",
          description:
            'Location of a file which contains the passphrase for the signing key. Use "-" in order to read from stdin',
          args: { name: "passphrase-file", template: "filepaths" },
        },
        {
          name: "--sign",
          description: "Use a PGP private key to sign this package",
        },
        {
          name: "--version",
          description: "Set the version on the chart to this semver version",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "plugin",
      description: "Install, list, or uninstall Helm plugins",
      subcommands: [
        {
          name: ["add", "install"],
          description: "Install one or more Helm plugins",
          options: [
            {
              name: "--version",
              description:
                "Specify a version constraint. If this is not specified, the latest version is installed",
              args: { name: "version" },
            },
          ],
        },
        { name: ["ls", "list"], description: "List installed Helm plugins" },
        {
          name: ["rm", "remove", "uninstall"],
          description: "Uninstall one or more Helm plugins",
        },
        {
          name: ["up", "update"],
          description: "Update one or more Helm plugins",
        },
      ],
    },
    {
      name: ["fetch", "pull"],
      description:
        "Download a chart from a repository and (optionally) unpack it in local directory",
      options: [
        {
          name: "--ca-file",
          description:
            "Verify certificates of HTTPS-enabled servers using this CA bundle",
          args: { name: "ca-file", template: "filepaths" },
        },
        {
          name: "--cert-file",
          description: "Identify HTTPS client using this SSL certificate file",
          args: { name: "cert-file", template: "filepaths" },
        },
        {
          name: ["--destination", "-d"],
          description:
            "Location to write the chart. If this and untardir are specified, untardir is appended to this",
          args: { name: "destination", default: "." },
        },
        {
          name: "--devel",
          description:
            "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
        },
        {
          name: "--insecure-skip-tls-verify",
          description: "Skip tls certificate checks for the chart download",
        },
        {
          name: "--key-file",
          description: "Identify HTTPS client using this SSL key file",
          args: { name: "key-file", template: "filepaths" },
        },
        {
          name: "--keyring",
          description: "Location of public keys used for verification",
          args: {
            name: "keyring",
            template: "filepaths",
            default: "~/.gnupg/pubring.gpg",
          },
        },
        {
          name: "--pass-credentials",
          description: "Pass credentials to all domains",
        },
        {
          name: "--password",
          description:
            "Chart repository password where to locate the requested chart",
          args: { name: "password" },
        },
        {
          name: "--prov",
          description:
            "Fetch the provenance file, but don't perform verification",
        },
        {
          name: "--repo",
          description:
            "Chart repository url where to locate the requested chart",
          args: { name: "repo" },
        },
        {
          name: "--untar",
          description:
            "If set to true, will untar the chart after downloading it",
        },
        {
          name: "--untardir",
          description:
            "If untar is specified, this flag specifies the name of the directory into which the chart is expanded",
          args: { name: "untardir", default: ".", template: "filepaths" },
        },
        {
          name: "--username",
          description:
            "Chart repository username where to locate the requested chart",
          args: { name: "username" },
        },
        { name: "--verify", description: "Verify the package before using it" },
        {
          name: "--version",
          description:
            "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
          args: { name: "version" },
        },
      ],
    },
    { name: "push", description: "Push a chart to remote" },
    {
      name: "registry",
      description: "Login to or logout from a registry",
      subcommands: [
        {
          name: "login",
          description: "Login to a registry",
          options: [
            {
              name: "--insecure",
              description: "Allow connections to TLS registry without certs",
            },
            {
              name: ["--password", "-p"],
              description: "Registry password or identity token",
              args: { name: "password" },
            },
            {
              name: "--password-stdin",
              description: "Read password or identity token from stdin",
            },
            {
              name: ["--username", "-u"],
              description: "Registry username",
              args: { name: "username" },
            },
          ],
        },
        { name: "logout", description: "Logout from a registry" },
      ],
    },
    {
      name: "repo",
      description: "Add, list, remove, update, and index chart repositories",
      subcommands: [
        {
          name: "add",
          description: "Add a chart repository",
          options: [
            {
              name: "--allow-deprecated-repos",
              description:
                "By default, this command will not allow adding official repos that have been permanently deleted. This disables that behavior",
            },
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--force-update",
              description: "Replace (overwrite) the repo if it already exists",
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the repository",
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: "--no-update",
              description:
                "Ignored. Formerly, it would disabled forced updates. It is deprecated by force-update",
            },
            {
              name: "--pass-credentials",
              description: "Pass credentials to all domains",
            },
            {
              name: "--password",
              description: "Chart repository password",
              args: { name: "password" },
            },
            {
              name: "--password-stdin",
              description: "Read chart repository password from stdin",
            },
            {
              name: "--username",
              description: "Chart repository username",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "index",
          description:
            "Generate an index file given a directory containing packaged charts",
          options: [
            {
              name: "--merge",
              description: "Merge the generated index into the given index",
              args: { name: "merge" },
            },
            {
              name: "--url",
              description: "Url of chart repository",
              args: { name: "url" },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "List chart repositories",
          options: [
            {
              name: ["--output", "-o"],
              description:
                "Prints the output in the specified format. Allowed values: table, json, yaml",
              args: { name: "output", default: "table" },
            },
          ],
        },
        {
          name: ["rm", "remove"],
          description: "Remove one or more chart repositories",
        },
        {
          name: ["up", "update"],
          description:
            "Update information of available charts locally from chart repositories",
          options: [
            {
              name: "--fail-on-repo-update-fail",
              description: "Update fails if any of the repository updates fail",
            },
          ],
        },
      ],
    },
    {
      name: "rollback",
      description: "Roll back a release to a previous revision",
      options: [
        {
          name: "--cleanup-on-fail",
          description:
            "Allow deletion of new resources created in this rollback when rollback fails",
        },
        { name: "--dry-run", description: "Simulate a rollback" },
        {
          name: "--force",
          description:
            "Force resource update through delete/recreate if needed",
        },
        {
          name: "--history-max",
          description:
            "Limit the maximum number of revisions saved per release. Use 0 for no limit",
          args: { name: "history-max", default: "10" },
        },
        {
          name: "--no-hooks",
          description: "Prevent hooks from running during rollback",
        },
        {
          name: "--recreate-pods",
          description: "Performs pods restart for the resource if applicable",
        },
        {
          name: "--timeout",
          description:
            "Time to wait for any individual Kubernetes operation (like Jobs for hooks)",
          args: { name: "timeout", default: "5m0s" },
        },
        {
          name: "--wait",
          description:
            "If set, will wait until all Pods, PVCs, Services, and minimum number of Pods of a Deployment, StatefulSet, or ReplicaSet are in a ready state before marking the release as successful. It will wait for as long as --timeout",
        },
        {
          name: "--wait-for-jobs",
          description:
            "If set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout",
        },
      ],
    },
    { name: "s3", description: "Manage chart repositories on Amazon S3" },
    {
      name: "search",
      description: "Search for a keyword in charts",
      subcommands: [
        {
          name: "hub",
          description:
            "Search for charts in the Artifact Hub or your own hub instance",
          options: [
            {
              name: "--endpoint",
              description: "Hub instance to query for charts",
              args: { name: "endpoint", default: "https://hub.helm.sh" },
            },
            {
              name: "--list-repo-url",
              description: "Print charts repository URL",
            },
            {
              name: "--max-col-width",
              description: "Maximum column width for output table",
              args: { name: "max-col-width", default: "50" },
            },
            {
              name: ["--output", "-o"],
              description:
                "Prints the output in the specified format. Allowed values: table, json, yaml",
              args: { name: "output", default: "table" },
            },
          ],
        },
        {
          name: "repo",
          description: "Search repositories for a keyword in charts",
          options: [
            {
              name: "--devel",
              description:
                "Use development versions (alpha, beta, and release candidate releases), too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
            },
            {
              name: "--max-col-width",
              description: "Maximum column width for output table",
              args: { name: "max-col-width", default: "50" },
            },
            {
              name: ["--output", "-o"],
              description:
                "Prints the output in the specified format. Allowed values: table, json, yaml",
              args: { name: "output", default: "table" },
            },
            {
              name: ["--regexp", "-r"],
              description:
                "Use regular expressions for searching repositories you have added",
            },
            {
              name: "--version",
              description:
                "Search using semantic versioning constraints on repositories you have added",
              args: { name: "version" },
            },
            {
              name: ["--versions", "-l"],
              description:
                "Show the long listing, with each version of each chart on its own line, for repositories you have added",
            },
          ],
        },
      ],
    },
    {
      name: ["inspect", "show"],
      description: "Show information of a chart",
      subcommands: [
        {
          name: "all",
          description: "Show all information of the chart",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--devel",
              description:
                "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the chart download",
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: "--keyring",
              description: "Location of public keys used for verification",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--pass-credentials",
              description: "Pass credentials to all domains",
            },
            {
              name: "--password",
              description:
                "Chart repository password where to locate the requested chart",
              args: { name: "password" },
            },
            {
              name: "--repo",
              description:
                "Chart repository url where to locate the requested chart",
              args: { name: "repo" },
            },
            {
              name: "--username",
              description:
                "Chart repository username where to locate the requested chart",
              args: { name: "username" },
            },
            {
              name: "--verify",
              description: "Verify the package before using it",
            },
            {
              name: "--version",
              description:
                "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "chart",
          description: "Show the chart's definition",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--devel",
              description:
                "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the chart download",
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file" },
            },
            {
              name: "--keyring",
              description: "Location of public keys used for verification",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--pass-credentials",
              description: "Pass credentials to all domains",
            },
            {
              name: "--password",
              description:
                "Chart repository password where to locate the requested chart",
              args: { name: "password" },
            },
            {
              name: "--repo",
              description:
                "Chart repository url where to locate the requested chart",
              args: { name: "repo" },
            },
            {
              name: "--username",
              description:
                "Chart repository username where to locate the requested chart",
              args: { name: "username" },
            },
            {
              name: "--verify",
              description: "Verify the package before using it",
            },
            {
              name: "--version",
              description:
                "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "crds",
          description: "Show the chart's CRDs",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--devel",
              description:
                "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the chart download",
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: "--keyring",
              description: "Location of public keys used for verification",
              args: {
                name: "keyring",
                default: "~/.gnupg/pubring.gpg",
                template: "filepaths",
              },
            },
            {
              name: "--pass-credentials",
              description: "Pass credentials to all domains",
            },
            {
              name: "--password",
              description:
                "Chart repository password where to locate the requested chart",
              args: { name: "password" },
            },
            {
              name: "--repo",
              description:
                "Chart repository url where to locate the requested chart",
              args: { name: "repo" },
            },
            {
              name: "--username",
              description:
                "Chart repository username where to locate the requested chart",
              args: { name: "username" },
            },
            {
              name: "--verify",
              description: "Verify the package before using it",
            },
            {
              name: "--version",
              description:
                "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "readme",
          description: "Show the chart's README",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--devel",
              description:
                "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the chart download",
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file" },
            },
            {
              name: "--keyring",
              description: "Location of public keys used for verification",
              args: {
                name: "keyring",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--pass-credentials",
              description: "Pass credentials to all domains",
            },
            {
              name: "--password",
              description:
                "Chart repository password where to locate the requested chart",
              args: { name: "password" },
            },
            {
              name: "--repo",
              description:
                "Chart repository url where to locate the requested chart",
              args: { name: "repo" },
            },
            {
              name: "--username",
              description:
                "Chart repository username where to locate the requested chart",
              args: { name: "username" },
            },
            {
              name: "--verify",
              description: "Verify the package before using it",
            },
            {
              name: "--version",
              description:
                "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "values",
          description: "Show the chart's values",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--devel",
              description:
                "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the chart download",
            },
            {
              name: "--jsonpath",
              description: "Supply a JSONPath expression to filter the output",
              args: { name: "jsonpath" },
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: "--keyring",
              description: "Location of public keys used for verification",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--pass-credentials",
              description: "Pass credentials to all domains",
            },
            {
              name: "--password",
              description:
                "Chart repository password where to locate the requested chart",
              args: { name: "password" },
            },
            {
              name: "--repo",
              description:
                "Chart repository url where to locate the requested chart",
              args: { name: "repo" },
            },
            {
              name: "--username",
              description:
                "Chart repository username where to locate the requested chart",
              args: { name: "username" },
            },
            {
              name: "--verify",
              description: "Verify the package before using it",
            },
            {
              name: "--version",
              description:
                "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
              args: { name: "version" },
            },
          ],
        },
      ],
    },
    {
      name: "status",
      description: "Display the status of the named release",
      options: [
        {
          name: ["--output", "-o"],
          description:
            "Prints the output in the specified format. Allowed values: table, json, yaml",
          args: { name: "output", default: "table" },
        },
        {
          name: "--revision",
          description:
            "If set, display the status of the named release with revision",
          args: { name: "revision", default: "0" },
        },
        {
          name: "--show-desc",
          description:
            "If set, display the description message of the named release",
        },
      ],
    },
    {
      name: "template",
      description: "Locally render templates",
      options: [
        {
          name: ["--api-versions", "-a"],
          description:
            "Kubernetes api versions used for Capabilities.APIVersions",
          isRepeatable: true,
          args: { name: "api-versions" },
        },
        {
          name: "--atomic",
          description:
            "If set, the installation process deletes the installation on failure. The --wait flag will be set automatically if --atomic is used",
        },
        {
          name: "--ca-file",
          description:
            "Verify certificates of HTTPS-enabled servers using this CA bundle",
          args: { name: "ca-file", template: "filepaths" },
        },
        {
          name: "--cert-file",
          description: "Identify HTTPS client using this SSL certificate file",
          args: { name: "cert-file", template: "filepaths" },
        },
        {
          name: "--create-namespace",
          description: "Create the release namespace if not present",
        },
        {
          name: "--dependency-update",
          description:
            "Update dependencies if they are missing before installing the chart",
        },
        {
          name: "--description",
          description: "Add a custom description",
          args: { name: "description" },
        },
        {
          name: "--devel",
          description:
            "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
        },
        {
          name: "--disable-openapi-validation",
          description:
            "If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema",
        },
        { name: "--dry-run", description: "Simulate an install" },
        {
          name: ["--generate-name", "-g"],
          description: "Generate the name (and omit the NAME parameter)",
        },
        {
          name: "--include-crds",
          description: "Include CRDs in the templated output",
        },
        {
          name: "--insecure-skip-tls-verify",
          description: "Skip tls certificate checks for the chart download",
        },
        {
          name: "--is-upgrade",
          description: "Set .Release.IsUpgrade instead of .Release.IsInstall",
        },
        {
          name: "--key-file",
          description: "Identify HTTPS client using this SSL key file",
          args: { name: "key-file", template: "filepaths" },
        },
        {
          name: "--keyring",
          description: "Location of public keys used for verification",
          args: {
            name: "keyring",
            template: "filepaths",
            default: "~/.gnupg/pubring.gpg",
          },
        },
        {
          name: "--kube-version",
          description: "Kubernetes version used for Capabilities.KubeVersion",
          args: { name: "kube-version" },
        },
        {
          name: "--name-template",
          description: "Specify template used to name the release",
          args: { name: "name-template" },
        },
        {
          name: "--no-hooks",
          description: "Prevent hooks from running during install",
        },
        {
          name: "--output-dir",
          description:
            "Writes the executed templates to files in output-dir instead of stdout",
          args: { name: "output-dir", template: "filepaths" },
        },
        {
          name: "--pass-credentials",
          description: "Pass credentials to all domains",
        },
        {
          name: "--password",
          description:
            "Chart repository password where to locate the requested chart",
          args: { name: "password" },
        },
        {
          name: "--post-renderer",
          description:
            "The path to an executable to be used for post rendering. If it exists in $PATH, the binary will be used, otherwise it will try to look for the executable at the given path",
          args: { name: "post-renderer" },
        },
        {
          name: "--post-renderer-args",
          description:
            "An argument to the post-renderer (can specify multiple)",
          isRepeatable: true,
          args: { name: "post-renderer-args" },
        },
        {
          name: "--release-name",
          description: "Use release name in the output-dir path",
        },
        {
          name: "--render-subchart-notes",
          description: "If set, render subchart notes along with the parent",
        },
        {
          name: "--replace",
          description:
            "Re-use the given name, only if that name is a deleted release which remains in the history. This is unsafe in production",
        },
        {
          name: "--repo",
          description:
            "Chart repository url where to locate the requested chart",
          args: { name: "repo" },
        },
        {
          name: "--set",
          description:
            "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set" },
        },
        {
          name: "--set-file",
          description:
            "Set values from respective files specified via the command line (can specify multiple or separate values with commas: key1=path1,key2=path2)",
          isRepeatable: true,
          args: { name: "set-file", template: "filepaths" },
        },
        {
          name: "--set-string",
          description:
            "Set STRING values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set-string" },
        },
        {
          name: ["--show-only", "-s"],
          description: "Only show manifests rendered from the given templates",
          isRepeatable: true,
          args: { name: "show-only" },
        },
        {
          name: "--skip-crds",
          description:
            "If set, no CRDs will be installed. By default, CRDs are installed if not already present",
        },
        {
          name: "--skip-tests",
          description: "Skip tests from templated output",
        },
        {
          name: "--timeout",
          description:
            "Time to wait for any individual Kubernetes operation (like Jobs for hooks)",
          args: { name: "timeout", default: "5m0s" },
        },
        {
          name: "--username",
          description:
            "Chart repository username where to locate the requested chart",
          args: { name: "username" },
        },
        {
          name: "--validate",
          description:
            "Validate your manifests against the Kubernetes cluster you are currently pointing at. This is the same validation performed on an install",
        },
        {
          name: ["--values", "-f"],
          description:
            "Specify values in a YAML file or a URL (can specify multiple)",
          isRepeatable: true,
          args: { name: "values", template: "filepaths" },
        },
        { name: "--verify", description: "Verify the package before using it" },
        {
          name: "--version",
          description:
            "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
          args: { name: "version" },
        },
        {
          name: "--wait",
          description:
            "If set, will wait until all Pods, PVCs, Services, and minimum number of Pods of a Deployment, StatefulSet, or ReplicaSet are in a ready state before marking the release as successful. It will wait for as long as --timeout",
        },
        {
          name: "--wait-for-jobs",
          description:
            "If set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout",
        },
      ],
    },
    {
      name: "test",
      description: "Run tests for a release",
      options: [
        {
          name: "--filter",
          description:
            "Specify tests by attribute (currently \"name\") using attribute=value syntax or '!attribute=value' to exclude a test (can specify multiple or separate values with commas: name=test1,name=test2)",
          isRepeatable: true,
          args: { name: "filter" },
        },
        {
          name: "--logs",
          description:
            "Dump the logs from test pods (this runs after all tests are complete, but before any cleanup)",
        },
        {
          name: "--timeout",
          description:
            "Time to wait for any individual Kubernetes operation (like Jobs for hooks)",
          args: { name: "timeout", default: "5m0s" },
        },
      ],
    },
    {
      name: ["del", "delete", "un", "uninstall"],
      description: "Uninstall a release",
      options: [
        {
          name: "--description",
          description: "Add a custom description",
          args: { name: "description" },
        },
        { name: "--dry-run", description: "Simulate a uninstall" },
        {
          name: "--keep-history",
          description:
            "Remove all associated resources and mark the release as deleted, but retain the release history",
        },
        {
          name: "--no-hooks",
          description: "Prevent hooks from running during uninstallation",
        },
        {
          name: "--timeout",
          description:
            "Time to wait for any individual Kubernetes operation (like Jobs for hooks)",
          args: { name: "timeout", default: "5m0s" },
        },
        {
          name: "--wait",
          description:
            "If set, will wait until all the resources are deleted before returning. It will wait for as long as --timeout",
        },
      ],
    },
    { name: "unittest", description: "Unittest for helm charts" },
    {
      name: "upgrade",
      description: "Upgrade a release",
      options: [
        {
          name: "--atomic",
          description:
            "If set, upgrade process rolls back changes made in case of failed upgrade. The --wait flag will be set automatically if --atomic is used",
        },
        {
          name: "--ca-file",
          description:
            "Verify certificates of HTTPS-enabled servers using this CA bundle",
          args: { name: "ca-file", template: "filepaths" },
        },
        {
          name: "--cert-file",
          description: "Identify HTTPS client using this SSL certificate file",
          args: { name: "cert-file", template: "filepaths" },
        },
        {
          name: "--cleanup-on-fail",
          description:
            "Allow deletion of new resources created in this upgrade when upgrade fails",
        },
        {
          name: "--create-namespace",
          description:
            "If --install is set, create the release namespace if not present",
        },
        {
          name: "--dependency-update",
          description:
            "Update dependencies if they are missing before installing the chart",
        },
        {
          name: "--description",
          description: "Add a custom description",
          args: { name: "description" },
        },
        {
          name: "--devel",
          description:
            "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
        },
        {
          name: "--disable-openapi-validation",
          description:
            "If set, the upgrade process will not validate rendered templates against the Kubernetes OpenAPI Schema",
        },
        { name: "--dry-run", description: "Simulate an upgrade" },
        {
          name: "--force",
          description: "Force resource updates through a replacement strategy",
        },
        {
          name: "--history-max",
          description:
            "Limit the maximum number of revisions saved per release. Use 0 for no limit",
          args: { name: "history-max", default: "10" },
        },
        {
          name: "--insecure-skip-tls-verify",
          description: "Skip tls certificate checks for the chart download",
        },
        {
          name: ["--install", "-i"],
          description:
            "If a release by this name doesn't already exist, run an install",
        },
        {
          name: "--key-file",
          description: "Identify HTTPS client using this SSL key file",
          args: { name: "key-file", template: "filepaths" },
        },
        {
          name: "--keyring",
          description: "Location of public keys used for verification",
          args: {
            name: "keyring",
            template: "filepaths",
            default: "~/.gnupg/pubring.gpg",
          },
        },
        { name: "--no-hooks", description: "Disable pre/post upgrade hooks" },
        {
          name: ["--output", "-o"],
          description:
            "Prints the output in the specified format. Allowed values: table, json, yaml",
          args: { name: "output", default: "table" },
        },
        {
          name: "--pass-credentials",
          description: "Pass credentials to all domains",
        },
        {
          name: "--password",
          description:
            "Chart repository password where to locate the requested chart",
          args: { name: "password" },
        },
        {
          name: "--post-renderer",
          description:
            "The path to an executable to be used for post rendering. If it exists in $PATH, the binary will be used, otherwise it will try to look for the executable at the given path",
          args: { name: "post-renderer" },
        },
        {
          name: "--post-renderer-args",
          description:
            "An argument to the post-renderer (can specify multiple)",
          isRepeatable: true,
          args: { name: "post-renderer-args" },
        },
        {
          name: "--recreate-pods",
          description: "Performs pods restart for the resource if applicable",
          hidden: true,
        },
        {
          name: "--render-subchart-notes",
          description: "If set, render subchart notes along with the parent",
        },
        {
          name: "--repo",
          description:
            "Chart repository url where to locate the requested chart",
          args: { name: "repo" },
        },
        {
          name: "--reset-values",
          description:
            "When upgrading, reset the values to the ones built into the chart",
        },
        {
          name: "--reuse-values",
          description:
            "When upgrading, reuse the last release's values and merge in any overrides from the command line via --set and -f. If '--reset-values' is specified, this is ignored",
        },
        {
          name: "--set",
          description:
            "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set" },
        },
        {
          name: "--set-file",
          description:
            "Set values from respective files specified via the command line (can specify multiple or separate values with commas: key1=path1,key2=path2)",
          isRepeatable: true,
          args: { name: "set-file", template: "filepaths" },
        },
        {
          name: "--set-string",
          description:
            "Set STRING values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set-string" },
        },
        {
          name: "--skip-crds",
          description:
            "If set, no CRDs will be installed when an upgrade is performed with install flag enabled. By default, CRDs are installed if not already present, when an upgrade is performed with install flag enabled",
        },
        {
          name: "--timeout",
          description:
            "Time to wait for any individual Kubernetes operation (like Jobs for hooks)",
          args: { name: "timeout", default: "5m0s" },
        },
        {
          name: "--username",
          description:
            "Chart repository username where to locate the requested chart",
          args: { name: "username" },
        },
        {
          name: ["--values", "-f"],
          description:
            "Specify values in a YAML file or a URL (can specify multiple)",
          isRepeatable: true,
          args: { name: "values", template: "filepaths" },
        },
        { name: "--verify", description: "Verify the package before using it" },
        {
          name: "--version",
          description:
            "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
          args: { name: "version" },
        },
        {
          name: "--wait",
          description:
            "If set, will wait until all Pods, PVCs, Services, and minimum number of Pods of a Deployment, StatefulSet, or ReplicaSet are in a ready state before marking the release as successful. It will wait for as long as --timeout",
        },
        {
          name: "--wait-for-jobs",
          description:
            "If set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout",
        },
      ],
    },
    {
      name: "verify",
      description:
        "Verify that a chart at the given path has been signed and is valid",
      options: [
        {
          name: "--keyring",
          description: "Keyring containing public keys",
          args: {
            name: "keyring",
            template: "filepaths",
            default: "~/.gnupg/pubring.gpg",
          },
        },
      ],
    },
    {
      name: "version",
      description: "Print the client version information",
      options: [
        {
          name: ["--client", "-c"],
          description: "Display client version information",
          hidden: true,
        },
        { name: "--short", description: "Print the version number" },
        {
          name: "--template",
          description: "Template for version string format",
          args: { name: "template" },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "completion",
          description:
            "Generate autocompletion scripts for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate autocompletion script for bash",
            },
            {
              name: "fish",
              description: "Generate autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate autocompletion script for powershell",
            },
            {
              name: "zsh",
              description: "Generate autocompletion script for zsh",
            },
          ],
        },
        {
          name: "create",
          description: "Create a new chart with the given name",
        },
        {
          name: ["dep", "dependencies", "dependency"],
          description: "Manage a chart's dependencies",
          subcommands: [
            {
              name: "build",
              description:
                "Rebuild the charts/ directory based on the Chart.lock file",
            },
            {
              name: ["ls", "list"],
              description: "List the dependencies for the given chart",
            },
            {
              name: ["up", "update"],
              description: "Update charts/ based on the contents of Chart.yaml",
            },
          ],
        },
        { name: "env", description: "Helm client environment information" },
        {
          name: "get",
          description: "Download extended information of a named release",
          subcommands: [
            {
              name: "all",
              description: "Download all information for a named release",
            },
            {
              name: "hooks",
              description: "Download all hooks for a named release",
            },
            {
              name: "manifest",
              description: "Download the manifest for a named release",
            },
            {
              name: "notes",
              description: "Download the notes for a named release",
            },
            {
              name: "values",
              description: "Download the values file for a named release",
            },
          ],
        },
        { name: ["hist", "history"], description: "Fetch release history" },
        {
          name: "install",
          description: "Install a chart",
        },
        { name: "lint", description: "Examine a chart for possible issues" },
        {
          name: ["ls", "list"],
          description: "List releases",
        },
        {
          name: "package",
          description: "Package a chart directory into a chart archive",
        },
        {
          name: "plugin",
          description: "Install, list, or uninstall Helm plugins",
          subcommands: [
            {
              name: ["add", "install"],
              description: "Install one or more Helm plugins",
            },
            {
              name: ["ls", "list"],
              description: "List installed Helm plugins",
            },
            {
              name: ["rm", "remove", "uninstall"],
              description: "Uninstall one or more Helm plugins",
            },
            {
              name: ["up", "update"],
              description: "Update one or more Helm plugins",
            },
          ],
        },
        {
          name: ["fetch", "pull"],
          description:
            "Download a chart from a repository and (optionally) unpack it in local directory",
        },
        { name: "push", description: "Push a chart to remote" },
        {
          name: "registry",
          description: "Login to or logout from a registry",
          subcommands: [
            { name: "login", description: "Login to a registry" },
            {
              name: "logout",
              description: "Logout from a registry",
            },
          ],
        },
        {
          name: "repo",
          description:
            "Add, list, remove, update, and index chart repositories",
          subcommands: [
            { name: "add", description: "Add a chart repository" },
            {
              name: "index",
              description:
                "Generate an index file given a directory containing packaged charts",
            },
            { name: ["ls", "list"], description: "List chart repositories" },
            {
              name: ["rm", "remove"],
              description: "Remove one or more chart repositories",
            },
            {
              name: ["up", "update"],
              description:
                "Update information of available charts locally from chart repositories",
            },
          ],
        },
        {
          name: "rollback",
          description: "Roll back a release to a previous revision",
        },
        {
          name: "s3",
          description: "Manage chart repositories on Amazon S3",
        },
        {
          name: "search",
          description: "Search for a keyword in charts",
          subcommands: [
            {
              name: "hub",
              description:
                "Search for charts in the Artifact Hub or your own hub instance",
            },
            {
              name: "repo",
              description: "Search repositories for a keyword in charts",
            },
          ],
        },
        {
          name: ["inspect", "show"],
          description: "Show information of a chart",
          subcommands: [
            { name: "all", description: "Show all information of the chart" },
            {
              name: "chart",
              description: "Show the chart's definition",
            },
            { name: "crds", description: "Show the chart's CRDs" },
            {
              name: "readme",
              description: "Show the chart's README",
            },
            { name: "values", description: "Show the chart's values" },
          ],
        },
        {
          name: "status",
          description: "Display the status of the named release",
        },
        {
          name: "template",
          description: "Locally render templates",
        },
        { name: "test", description: "Run tests for a release" },
        {
          name: ["del", "delete", "un", "uninstall"],
          description: "Uninstall a release",
        },
        { name: "unittest", description: "Unittest for helm charts" },
        {
          name: "upgrade",
          description: "Upgrade a release",
        },
        {
          name: "verify",
          description:
            "Verify that a chart at the given path has been signed and is valid",
        },
        {
          name: "version",
          description: "Print the client version information",
        },
      ],
    },
  ],
  options: [
    {
      name: "--add-dir-header",
      description:
        "If true, adds the file directory to the header of the log messages",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--alsologtostderr",
      description: "Log to standard error as well as files",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--burst-limit",
      description: "Client-side default throttling limit",
      isPersistent: true,
      args: { name: "burst-limit", default: "100" },
    },
    {
      name: "--debug",
      description: "Enable verbose output",
      isPersistent: true,
    },
    {
      name: "--kube-apiserver",
      description: "The address and the port for the Kubernetes API server",
      isPersistent: true,
      args: { name: "kube-apiserver" },
    },
    {
      name: "--kube-as-group",
      description:
        "Group to impersonate for the operation, this flag can be repeated to specify multiple groups",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "kube-as-group" },
    },
    {
      name: "--kube-as-user",
      description: "Username to impersonate for the operation",
      isPersistent: true,
      args: { name: "kube-as-user" },
    },
    {
      name: "--kube-ca-file",
      description:
        "The certificate authority file for the Kubernetes API server connection",
      isPersistent: true,
      args: { name: "kube-ca-file", template: "filepaths" },
    },
    {
      name: "--kube-context",
      description: "Name of the kubeconfig context to use",
      isPersistent: true,
      args: { name: "kube-context" },
    },
    {
      name: "--kube-insecure-skip-tls-verify",
      description:
        "If true, the Kubernetes API server's certificate will not be checked for validity. This will make your HTTPS connections insecure",
      isPersistent: true,
    },
    {
      name: "--kube-tls-server-name",
      description:
        "Server name to use for Kubernetes API server certificate validation. If it is not provided, the hostname used to contact the server is used",
      isPersistent: true,
      args: { name: "kube-tls-server-name" },
    },
    {
      name: "--kube-token",
      description: "Bearer token used for authentication",
      isPersistent: true,
      args: { name: "kube-token" },
    },
    {
      name: "--kubeconfig",
      description: "Path to the kubeconfig file",
      isPersistent: true,
      args: { name: "kubeconfig", template: "filepaths" },
    },
    {
      name: "--log-backtrace-at",
      description: "When logging hits line file:N, emit a stack trace",
      isPersistent: true,
      hidden: true,
      args: { name: "log-backtrace-at", default: ":0" },
    },
    {
      name: "--log-dir",
      description: "If non-empty, write log files in this directory",
      isPersistent: true,
      hidden: true,
      args: { name: "log-dir", template: "filepaths" },
    },
    {
      name: "--log-file",
      description: "If non-empty, use this log file",
      isPersistent: true,
      hidden: true,
      args: { name: "log-file", template: "filepaths" },
    },
    {
      name: "--log-file-max-size",
      description:
        "Defines the maximum size a log file can grow to. Unit is megabytes. If the value is 0, the maximum file size is unlimited",
      isPersistent: true,
      hidden: true,
      args: { name: "log-file-max-size", default: "1800" },
    },
    {
      name: "--logtostderr",
      description: "Log to standard error instead of files",
      isPersistent: true,
      hidden: true,
    },
    {
      name: ["--namespace", "-n"],
      description: "Namespace scope for this request",
      isPersistent: true,
      args: { name: "namespace" },
    },
    {
      name: "--one-output",
      description:
        "If true, only write logs to their native severity level (vs also writing to each lower severity level)",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--registry-config",
      description: "Path to the registry config file",
      isPersistent: true,
      args: {
        name: "registry-config",
        template: "filepaths",
        default: "~/Library/Preferences/helm/registry/config.json",
      },
    },
    {
      name: "--repository-cache",
      description: "Path to the file containing cached repository indexes",
      isPersistent: true,
      args: {
        name: "repository-cache",
        template: "filepaths",
        default: "~/Library/Caches/helm/repository",
      },
    },
    {
      name: "--repository-config",
      description: "Path to the file containing repository names and URLs",
      isPersistent: true,
      args: {
        name: "repository-config",
        template: "filepaths",
        default: "~/Library/Preferences/helm/repositories.yaml",
      },
    },
    {
      name: "--skip-headers",
      description: "If true, avoid header prefixes in the log messages",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--skip-log-headers",
      description: "If true, avoid headers when opening log files",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--stderrthreshold",
      description: "Logs at or above this threshold go to stderr",
      isPersistent: true,
      hidden: true,
      args: { name: "stderrthreshold", default: "2" },
    },
    {
      name: ["--v", "-v"],
      description: "Number for the log level verbosity",
      isPersistent: true,
      hidden: true,
      args: { name: "v", default: "0" },
    },
    {
      name: "--vmodule",
      description:
        "Comma-separated list of pattern=N settings for file-filtered logging",
      isPersistent: true,
      hidden: true,
      args: { name: "vmodule" },
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
