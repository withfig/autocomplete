const noDescriptionOption: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const nameArg: Fig.Arg = {
  name: "NAME",
};

const releaseNameArg: Fig.Arg = {
  name: "RELEASE_NAME",
};

const chartArg: Fig.Arg = {
  name: "CHART",
};

const outputOption: Fig.Option = {
  name: ["--output", "-o"],
  description:
    "Prints the output in the specified format. Allowed values: table, json, yaml (default table)",
  args: {
    name: "FORMAT",
    default: "table",
    suggestions: ["table", "json", "yaml"],
  },
};

const revisionOption: Fig.Option = {
  name: "--revision",
  description: "Get the named release with revision",
  args: {
    name: "REVISION",
  },
};

const keyringOption: Fig.Option = {
  name: "--keyring",
  description:
    'Location of public keys used for verification (default "~/.gnupg/pubring.gpg")',
  args: {
    name: "KEYRING",
    template: "filepaths",
  },
};

const dependencyOptions: Fig.Option[] = [
  keyringOption,
  {
    name: "--skip-refresh",
    description: "Do not refresh the local repository cache",
  },
  {
    name: "--verify",
    description: "Verify the packages against signatures",
  },
];

const setOptions: Fig.Option[] = [
  {
    name: "--set",
    description:
      "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
    args: {
      name: "SET",
    },
    isRepeatable: true,
  },
  {
    name: "--set-file",
    description:
      "Set values from respective files specified via the command line (can specify multiple or separate values with commas: key1=path1,key2=path2)",
    args: {
      name: "SET_FILE",
    },
    isRepeatable: true,
  },
  {
    name: "--set-string",
    description:
      "Set STRING values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
    args: {
      name: "SET_STRING",
    },
    isRepeatable: true,
  },
];

const valuesOption: Fig.Option = {
  name: ["--values", "-f"],
  description: "Specify values in a YAML file or a URL (can specify multiple)",
  args: {
    name: "VALUES",
    template: "filepaths",
  },
  isRepeatable: true,
};

const certOptions: Fig.Option[] = [
  {
    name: "--ca-file",
    description:
      "Verify certificates of HTTPS-enabled servers using this CA bundle",
    args: {
      name: "CA_FILE",
      template: "filepaths",
    },
  },
  {
    name: "--cert-file",
    description: "Identify HTTPS client using this SSL certificate file",
    args: {
      name: "CERT_FILE",
      template: "filepaths",
    },
  },
];

const develOption: Fig.Option = {
  name: "--devel",
  description:
    "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
};

const insecureSkipTLSVerifyOption: Fig.Option = {
  name: "--insecure-skip-tls-verify",
  description: "Skip tls certificate checks for the chart download",
};

const keyFileOption: Fig.Option = {
  name: "--key-file",
  description: "Identify HTTPS client using this SSL key file",
  args: {
    name: "KEY_FILE",
    template: "filepaths",
  },
};

const userNameOption: Fig.Option = {
  name: "--username",
  description: "Chart repository username where to locate the requested chart",
  args: {
    name: "USERNAME",
  },
};

const passwordOption: Fig.Option = {
  name: "--password",
  description: "Chart repository password where to locate the requested chart",
  args: {
    name: "PASSWORD",
  },
};

const passwordStdinOption: Fig.Option = {
  name: "--password-stdin",
  description: "Chart repository password where to locate the requested chart",
};

const insecureOption: Fig.Option = {
  name: "--insecure",
  description: "Allow connections to TLS registry without certs",
};

const passOptions: Fig.Option[] = [
  {
    name: "--pass-credentials",
    description: "Pass credentials to all domains",
  },
  passwordOption,
];

const repoOption: Fig.Option = {
  name: "--repo",
  description: "Chart repository url where to locate the requested chart",
  args: {
    name: "REPO",
  },
};

const verifyOption: Fig.Option = {
  name: "--verify",
  description: "Verify the package before using it",
};

const versionOption: Fig.Option = {
  name: "--version",
  description:
    "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
  args: {
    name: "VERSION",
  },
};

const noHooksOption: Fig.Option = {
  name: "--no-hooks",
  description: "Prevent hooks from running during install",
};

const destinationOption: Fig.Option = {
  name: ["--destination", "-d"],
  description: 'Location to write the chart. (default ".")',
  args: {
    name: "DESTINATION",
    template: "folders",
  },
};

const dryRunOption: Fig.Option = {
  name: "--dry-run",
  description: "Simulate an install",
};

const timeoutOption: Fig.Option = {
  name: "--timeout",
  description:
    "Time to wait for any individual Kubernetes operation (like Jobs for hooks) (default 5m0s)",
  args: {
    name: "TIMEOUT",
    default: "5m0s",
  },
};

const waitOption: Fig.Option = {
  name: "--wait",
  description:
    "If set, will wait until all Pods, PVCs, Services, and minimum number of Pods of a Deployment, StatefulSet, or ReplicaSet are in a ready state before marking the release as successful. It will wait for as long as --timeout",
};

const waitOptions: Fig.Option[] = [
  waitOption,
  {
    name: "--wait-for-jobs",
    description:
      "If set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout",
  },
];

const maxColWidthOption: Fig.Option = {
  name: "--max-col-width",
  description: "Maximum column width for output table (default 80)",
  args: {
    name: "WIDTH",
    default: "80",
  },
};

const atomicOption: Fig.Option = {
  name: "--atomic",
  description:
    "If set, the installation process deletes the installation on failure. The --wait flag will be set automatically if --atomic is used",
};

const createNamespaceOption: Fig.Option = {
  name: "--create-namespace",
  description: "Create the release namespace if not present",
};

const dependencyUpdateOption: Fig.Option = {
  name: "--dependency-update",
  description:
    "Update dependencies if they are missing before installing the chart",
};

const descriptionOption: Fig.Option = {
  name: "--description",
  description: "Add a custom description",
  args: {
    name: "DESCRIPTION",
  },
};

const disableOpenApiValidationOption: Fig.Option = {
  name: "--disable-openapi-validation",
  description:
    "If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema",
};

const generateNameOption: Fig.Option = {
  name: ["--generate-name", "-g"],
  description: "Generate the name (and omit the NAME parameter",
};

const nameTemplateOption: Fig.Option = {
  name: "--name-template",
  description: "Specify template used to name the release",
  args: {
    name: "NAME_TEMPLATE",
  },
};

const postRendererOption: Fig.Option = {
  name: "--post-renderer",
  description:
    "The path to an executable to be used for post rendering. If it exists in $PATH, the binary will be used, otherwise it will try to look for the executable at the given path (default exec)",
  args: {
    name: "POST_RENDERER",
    template: "filepaths",
  },
};

const renderSubchartNotesOption: Fig.Option = {
  name: "--render-subchart-notes",
  description: "If set, render subchart notes along with the parent",
};

const replaceOption: Fig.Option = {
  name: "--replace",
  description:
    "Re-use the given name, only if that name is a deleted release which remains in the history. This is unsafe in production",
};

const skipCrdsOption: Fig.Option = {
  name: "--skip-crds",
  description:
    "If set, no CRDs will be installed. By default, CRDs are installed if not already present",
};

const cleanupOnFailOption: Fig.Option = {
  name: "--cleanup-on-fail",
  description:
    "Allow deletion of new resources created in this rollback when rollback fails",
};

const forceOption: Fig.Option = {
  name: "--force",
  description: "Force resource update through delete/recreate if needed",
};

const historyMaxOption: Fig.Option = {
  name: "--history-max",
  description:
    "Limit the maximum number of revisions saved per release. Use 0 for no limit (default 10)",
  args: {
    name: "HISTORY_MAX",
    default: "10",
  },
};

const completionSpec: Fig.Spec = {
  name: "helm",
  description: "The Kubernetes package manage",
  icon: "fig://icon?type=kubernetes",
  subcommands: [
    {
      name: "completion",
      description: "Generate autocompletion scripts for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [noDescriptionOption],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [noDescriptionOption],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [noDescriptionOption],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [noDescriptionOption],
        },
      ],
    },
    {
      name: "create",
      description: "Create a new chart with the given name",
      args: nameArg,
      options: [
        {
          name: ["--starter", "-p"],
          description: "The name or absolute path to Helm starter scaffold",
        },
      ],
    },
    {
      name: "dependency",
      description: "Manage a chart's dependencies",
      subcommands: [
        {
          name: "build",
          description:
            "Rebuild the charts/ directory based on the Chart.lock file",
          args: nameArg,
          options: dependencyOptions,
        },
        {
          name: "list",
          description: "List the dependencies for the given chart",
          args: nameArg,
          options: [maxColWidthOption],
        },
        {
          name: "update",
          description: "Update charts/ based on the contents of Chart.yaml",
          args: nameArg,
          options: dependencyOptions,
        },
      ],
    },
    {
      name: "env",
      description: "Helm client environment information",
    },
    {
      name: "get",
      description: "Download extended information of a named release",
      subcommands: [
        {
          name: "all",
          description: "Download all information for a named release",
          options: [
            revisionOption,
            {
              name: "--template",
              description:
                "Go template for formatting the output, eg: {{.Release.Name}}",
              args: {
                name: "TEMPLATE",
              },
            },
          ],
          args: releaseNameArg,
        },
        {
          name: "hooks",
          description: "Download all hooks for a named release",
          options: [revisionOption],
          args: releaseNameArg,
        },
        {
          name: "manifest",
          description: "Download the manifest for a named release",
          options: [revisionOption],
          args: releaseNameArg,
        },
        {
          name: "notes",
          description: "Download the notes for a named release",
          options: [revisionOption],
          args: releaseNameArg,
        },
        {
          name: "values",
          description: "Download the values file for a named release",
          options: [
            revisionOption,
            {
              name: ["--all", "-a"],
              description: "Dump all (computed) values",
            },
            outputOption,
          ],
          args: releaseNameArg,
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "history",
      description: "Fetch release history",
      options: [
        outputOption,
        {
          name: "--max",
          description:
            "Maximum number of revision to include in history (default 256)",
          args: {
            name: "MAX",
            default: "256",
          },
        },
      ],
      args: releaseNameArg,
    },
    {
      name: "install",
      description: "Install a chart",
      options: [
        atomicOption,
        ...certOptions,
        createNamespaceOption,
        dependencyUpdateOption,
        descriptionOption,
        develOption,
        disableOpenApiValidationOption,
        dryRunOption,
        generateNameOption,
        insecureSkipTLSVerifyOption,
        keyFileOption,
        keyringOption,
        nameTemplateOption,
        noHooksOption,
        outputOption,
        ...passOptions,
        postRendererOption,
        renderSubchartNotesOption,
        replaceOption,
        repoOption,
        ...setOptions,
        skipCrdsOption,
        timeoutOption,
        valuesOption,
        userNameOption,
        verifyOption,
        versionOption,
        ...waitOptions,
      ],
      args: [nameArg, chartArg],
    },
    {
      name: "lint",
      description: "Examine a chart for possible issues",
      options: [
        ...setOptions,
        {
          name: "--strict",
          description: "Fail on lint warnings",
        },
        valuesOption,
        {
          name: "--with-subcharts",
          description: "Lint dependent charts",
        },
      ],
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "list",
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
        {
          name: ["--date", "-d"],
          description: "Sort by release date",
        },
        {
          name: "--deployed",
          description:
            "Show deployed releases. If no other is specified, this will be automatically enabled",
        },
        {
          name: "--failed",
          description: "Show failed releases",
        },
        {
          name: ["--filter", "-f"],
          description:
            "A regular expression (Perl compatible). Any releases that match the expression will be included in the results",
          args: {
            name: "REGEX",
          },
        },
        {
          name: "--max",
          description: "Maximum number of releases to fetch (default 256)",
          args: {
            name: "MAX",
            default: "256",
          },
        },
        {
          name: "--offset",
          description:
            "Next release index in the list, used to offset from start value",
          args: {
            name: "OFFSET",
          },
        },
        outputOption,
        {
          name: "--pending",
          description: "Show pending releases",
        },
        {
          name: ["--reverse", "-r"],
          description: "Reverse the sort order",
        },
        {
          name: ["--selector", "-l"],
          description:
            "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2). Works only for secret(default) and configmap storage backends",
          args: {
            name: "SELECTOR",
          },
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
          args: {
            name: "TIME_FORMAT",
          },
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
          args: {
            name: "APP_VERSION",
          },
        },
        {
          name: ["--dependency-update", "-u"],
          description:
            'Update dependencies from "Chart.yaml" to dir "charts/" before packaging',
        },
        destinationOption,
        {
          name: "--key",
          description:
            "Name of the key to use when signing. Used if --sign is true",
          args: {
            name: "KEY",
          },
        },
        keyringOption,
        {
          name: "--passphrase-file",
          description:
            'Location of a file which contains the passphrase for the signing key. Use "-" in order to read from stdin',
          args: {
            name: "PASSPHRASE_FILE",
            template: "filepaths",
          },
        },
        {
          name: "--sign",
          description: "Use a PGP private key to sign this package",
        },
        {
          name: "--version",
          description: "Set the version on the chart to this version",
        },
      ],
      args: {
        name: "CHART_PATH",
        template: "filepaths",
        isOptional: true,
      },
    },
    {
      name: "plugin",
      description: "Install, list, or uninstall Helm plugins",
      subcommands: [
        {
          name: "install",
          description: "Install one or more Helm plugins",
          options: [
            {
              name: "--version",
              description:
                "Specify a version constraint. If this is not specified, the latest version is installed",
              args: {
                name: "VERSION",
              },
            },
          ],
          args: {
            name: "path | url",
          },
        },
        {
          name: "list",
          description: "List installed Helm plugins",
        },
        {
          name: "uninstall",
          description: "Uninstall one or more Helm plugins",
          args: {
            name: "plugin",
          },
        },
        {
          name: "update",
          description: "Update one or more Helm plugins",
          args: {
            name: "plugin",
          },
        },
      ],
    },
    {
      name: "pull",
      description:
        "Download a chart from a repository and (optionally) unpack it in local directory",
      options: [
        ...certOptions,
        destinationOption,
        develOption,
        insecureSkipTLSVerifyOption,
        keyFileOption,
        keyringOption,
        ...passOptions,
        {
          name: "--prov",
          description:
            "Fetch the provenance file, but don't perform verification",
        },
        repoOption,
        {
          name: "--untar",
          description:
            "If set to true, will untar the chart after downloading it",
        },
        {
          name: "--untardir",
          description:
            'If untar is specified, this flag specifies the name of the directory into which the chart is expanded (default ".")',
          args: {
            name: "UNTARDIR",
            template: "folders",
            default: ".",
          },
        },
        userNameOption,
        verifyOption,
        versionOption,
      ],
      args: {
        name: "CHART_URL | REPO/CHART_NAME",
      },
    },
    {
      name: "push",
      description: "Push a chart to remote",
      args: [
        chartArg,
        {
          name: "REMOTE",
        },
      ],
    },
    {
      name: "registry",
      description: "Login to or logout from a registry",
      subcommands: [
        {
          name: "login",
          description: "Login to a registry",
          options: [
            insecureOption,
            passwordOption,
            passwordStdinOption,
            userNameOption,
          ],
          args: {
            name: "HOST",
          },
        },
        {
          name: "logout",
          description: "Logout from a registry",
          args: {
            name: "HOST",
          },
        },
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
            ...certOptions,
            {
              name: "--foce-update",
              description: "Replace (overwrite) the repo if it already exists",
            },
            insecureSkipTLSVerifyOption,
            keyFileOption,
            {
              name: "--no-update",
              description:
                "Ignored. Formerly, it would disabled forced updates. It is deprecated by force-update",
              deprecated: true,
            },
            ...passOptions,
            passwordStdinOption,
            userNameOption,
          ],
          args: [
            {
              name: "NAME",
              description: "The name of the repository",
            },
            {
              name: "URL",
              description: "The URL of the repository",
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
              args: {
                name: "INDEX",
              },
            },
            {
              name: "--url",
              description: "Url of chart repository",
              args: {
                name: "URL",
              },
            },
          ],
          args: {
            name: "DIR",
            template: "folders",
          },
        },
        {
          name: "list",
          description: "List chart repositories",
          options: [outputOption],
        },
        {
          name: "remove",
          description: "Remove one or more chart repositories",
          args: {
            name: "REPO",
            isVariadic: true,
          },
        },
        {
          name: "update",
          description:
            "Update information of available charts locally from chart repositories",
          options: [
            {
              name: "--fail-on-repo-update-fail",
              description: "Update fails if any of the repository updates fail",
            },
          ],
          args: {
            name: "REPO",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "rollback",
      description: "Roll back a release to a previous revision",
      options: [
        cleanupOnFailOption,
        dryRunOption,
        forceOption,
        historyMaxOption,
        noHooksOption,
        {
          name: "--recreate-pods",
          description: "Performs pods restart for the resource if applicable",
        },
        timeoutOption,
        ...waitOptions,
      ],
      args: [
        {
          name: "RELEASE",
        },
        {
          name: "REVISION",
          isOptional: true,
        },
      ],
    },
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
              description:
                'Hub instance to query for charts (default "https://hub.helm.sh")',
              args: {
                name: "ENDPOINT",
                default: "https://hub.helm.sh",
              },
            },
            {
              name: "--list-repo-url",
              description: "Print charts repository URL",
            },
            maxColWidthOption,
            outputOption,
          ],
          args: {
            name: "KEYWORD",
          },
        },
        {
          name: "repo",
          description: "Search repositories for a keyword in charts",
          options: [
            develOption,
            maxColWidthOption,
            outputOption,
            {
              name: "--regexp",
              description:
                "Use regular expressions for searching repositories you have added",
            },
            versionOption,
            {
              name: ["--versions", "-l"],
              description:
                "Show the long listing, with each version of each chart on its own line, for repositories you have added",
            },
          ],
          args: {
            name: "KEYWORD",
          },
        },
      ],
    },
    {
      name: "show",
      description: "Show information of a chart",
      subcommands: [
        {
          name: "all",
          description: "Show all information of the chart",
          options: [
            ...certOptions,
            develOption,
            insecureSkipTLSVerifyOption,
            keyFileOption,
            keyringOption,
            ...passOptions,
            repoOption,
            userNameOption,
            verifyOption,
            versionOption,
          ],
          args: {
            name: "CHART",
          },
        },
        {
          name: "chart",
          description: "Show the chart's definition",
          options: [
            ...certOptions,
            develOption,
            insecureSkipTLSVerifyOption,
            keyFileOption,
            keyringOption,
            ...passOptions,
            repoOption,
            userNameOption,
            verifyOption,
            versionOption,
          ],
          args: {
            name: "CHART",
          },
        },
        {
          name: "crds",
          description: "Show the chart's CRDs",
          options: [
            ...certOptions,
            develOption,
            insecureSkipTLSVerifyOption,
            keyFileOption,
            keyringOption,
            ...passOptions,
            repoOption,
            userNameOption,
            verifyOption,
            versionOption,
          ],
          args: {
            name: "CHART",
          },
        },
        {
          name: "readme",
          description: "Show the chart's README",
          options: [
            ...certOptions,
            develOption,
            insecureSkipTLSVerifyOption,
            keyFileOption,
            keyringOption,
            ...passOptions,
            repoOption,
            userNameOption,
            verifyOption,
            versionOption,
          ],
          args: {
            name: "CHART",
          },
        },
        {
          name: "values",
          description: "Show the chart's values",
          options: [
            ...certOptions,
            develOption,
            insecureSkipTLSVerifyOption,
            {
              name: "--jsonpath",
              description: "Supply a JSONPath expression to filter the output",
              args: {
                name: "JSONPATH",
              },
            },
            keyFileOption,
            keyringOption,
            ...passOptions,
            repoOption,
            userNameOption,
            verifyOption,
            versionOption,
          ],
          args: {
            name: "CHART",
          },
        },
      ],
    },
    {
      name: "status",
      description: "Display the status of the named release",
      options: [
        outputOption,
        revisionOption,
        {
          name: "--show-desc",
          description:
            "If set, display the description message of the named release",
        },
      ],
      args: {
        name: "RELEASE_NAME",
      },
    },
    {
      name: "template",
      description: "Locally render templates",
      options: [
        {
          name: ["--api-versions", "-a"],
          description:
            "Kubernetes api versions used for Capabilities.APIVersions",
          args: {
            name: "API_VERSIONS",
          },
        },
        atomicOption,
        ...certOptions,
        createNamespaceOption,
        dependencyUpdateOption,
        descriptionOption,
        develOption,
        disableOpenApiValidationOption,
        dryRunOption,
        generateNameOption,
        {
          name: "--include-crds",
          description: "Include CRDs in the templated output",
        },
        insecureSkipTLSVerifyOption,
        {
          name: "--is-upgrade",
          description: "Set .Release.IsUpgrade instead of .Release.IsInstall",
        },
        keyFileOption,
        keyringOption,
        {
          name: "--kube-version",
          description: "Kubernetes version used for Capabilities.KubeVersion",
          args: {
            name: "KUBE_VERSION",
          },
        },
        nameTemplateOption,
        noHooksOption,
        {
          name: "--output-dir",
          description:
            "Writes the executed templates to files in output-dir instead of stdout",
          args: {
            name: "OUTPUT_DIR",
            template: "folders",
          },
        },
        ...passOptions,
        postRendererOption,
        {
          name: "--release-name",
          description: "Use release name in the output-dir path",
        },
        renderSubchartNotesOption,
        replaceOption,
        repoOption,
        ...setOptions,
        {
          name: ["--show-only", "-s"],
          description: "Only show manifests rendered from the given templates",
        },
        skipCrdsOption,
        {
          name: "--skip-tests",
          description: "Skip tests from templated output",
        },
        timeoutOption,
        userNameOption,
        {
          name: "--validate",
          description:
            "Validate your manifests against the Kubernetes cluster you are currently pointing at. This is the same validation performed on an install",
        },
        valuesOption,
        verifyOption,
        versionOption,
        ...waitOptions,
      ],
      args: [nameArg, chartArg],
    },
    {
      name: "test",
      description: "Run tests for a release",
      options: [
        {
          name: "--filter",
          description:
            "Specify tests by attribute (currently \"name\") using attribute=value syntax or '!attribute=value' to exclude a test (can specify multiple or separate values with commas: name=test1,name=test2)",
          args: {
            name: "FILTER",
          },
          isRepeatable: true,
        },
        {
          name: "--logs",
          description:
            "Dump the logs from test pods (this runs after all tests are complete, but before any cleanup)",
        },
        timeoutOption,
      ],
      args: {
        name: "RELEASE",
      },
    },
    {
      name: "uninstall",
      description: "Uninstall a release",
      options: [
        descriptionOption,
        dryRunOption,
        {
          name: "--keep-history",
          description:
            "Remove all associated resources and mark the release as deleted, but retain the release history",
        },
        noHooksOption,
        timeoutOption,
        waitOption,
      ],
      args: {
        name: "RELEASE_NAME",
      },
    },
    {
      name: "upgrade",
      description: "Upgrade a release",
      options: [
        atomicOption,
        ...certOptions,
        cleanupOnFailOption,
        createNamespaceOption,
        dependencyUpdateOption,
        descriptionOption,
        develOption,
        disableOpenApiValidationOption,
        dryRunOption,
        forceOption,
        historyMaxOption,
        insecureSkipTLSVerifyOption,
        {
          name: ["--install", "-i"],
          description:
            "If a release by this name doesn't already exist, run an install",
        },
        keyFileOption,
        keyringOption,
        noHooksOption,
        outputOption,
        ...passOptions,
        postRendererOption,
        renderSubchartNotesOption,
        repoOption,
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
        ...setOptions,
        skipCrdsOption,
        timeoutOption,
        userNameOption,
        valuesOption,
        verifyOption,
        versionOption,
        ...waitOptions,
      ],
      args: [nameArg, chartArg],
    },
    {
      name: "verify",
      description:
        "Verify that a chart at the given path has been signed and is valid",
      options: [keyringOption],
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "version",
      description: "Print the client version information",
      icon: "fig://icon?type=kubernetes",
      options: [
        {
          name: "--short",
          description: "Print the version number",
        },
        {
          name: "--template",
          description: "Template for version string format",
          args: {
            name: "TEMPLATE",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for helm",
      isPersistent: true,
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
      args: {
        name: "KUBE_APISERVER",
      },
    },
    {
      name: "--kube-as-group",
      description:
        "Group to impersonate for the operation, this flag can be repeated to specify multiple groups",
      isRepeatable: true,
      isPersistent: true,
      args: {
        name: "GROUP",
      },
    },
    {
      name: "--kube-as-user",
      description: "Username to impersonate for the operation",
      isPersistent: true,
      args: {
        name: "USERNAME",
      },
    },
    {
      name: "--kube-ca-file",
      description:
        "The certificate authority file for the Kubernetes API server connection",
      isPersistent: true,
      args: {
        name: "KUBE_CA_FILE",
        template: "filepaths",
      },
    },
    {
      name: "--kube-context",
      description: "Name of the kubeconfig context to use",
      isPersistent: true,
      args: {
        name: "KUBE_CONTEXT",
      },
    },
    {
      name: "--kube-token",
      description: "Bearer token used for authentication",
      isPersistent: true,
      args: {
        name: "KUBE_TOKEN",
      },
    },
    {
      name: "--kubeconfig",
      description: "Path to the kubeconfig file",
      isPersistent: true,
      args: {
        name: "KUBECONFIG",
        template: "filepaths",
      },
    },
    {
      name: ["--namespace", "-n"],
      description: "Namespace scope for this request",
      isPersistent: true,
      args: {
        name: "NAMESPACE",
      },
    },
    {
      name: "--registry-config",
      description: "Path to the registry config file",
      isPersistent: true,
      args: {
        name: "REGISTRY_CONFIG",
        template: "filepaths",
      },
    },
    {
      name: "--repository-cache",
      description: "Path to the file containing cached repository indexes",
      isPersistent: true,
      args: {
        name: "REPOSITORY_CACHE",
        template: "filepaths",
      },
    },
    {
      name: "--repository-config",
      description: "Path to the file containing repository names and URLs",
      isPersistent: true,
      args: {
        name: "REPOSITORY_CONFIG",
        template: "filepaths",
      },
    },
  ],
};

export default completionSpec;
