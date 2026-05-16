const skipPolicyUpdateOption: Fig.Option = {
  name: "--skip-policy-update",
  description: "Skip updating built-in policies [$TRIVY_SKIP_POLICY_UPDATE]",
};

const removePkgsOption: Fig.Option = {
  name: "--removed-pkgs",
  description:
    "Detect vulnerabilities of removed packages (default: false) [$TRIVY_REMOVED_PKGS]",
};

const inputOption: Fig.Option = {
  name: ["--input", "-i"],
  description: "Input file path instead of image name [$TRIVY_INPUT]",
  args: {
    name: "input",
    template: "filepaths",
  },
};

const configPolicy: Fig.Option = {
  name: "--config-policy",
  description:
    "Specify paths to the Rego policy files directory, applying config files [$TRIVY_CONFIG_POLICY]",
  args: {
    name: "configPolicy",
    template: "folders",
  },
};

const regoPolicyOptions: Fig.Option[] = [
  configPolicy,
  {
    name: "--config-data",
    description:
      "Specify paths from which data for the Rego policies will be recursively loaded [$TRIVY_CONFIG_DATA]",
    args: {
      name: "configData",
      template: "folders",
    },
  },
  {
    name: ["--policy-namespaces", "--namespaces"],
    description:
      'Rego namespaces (default: "users") [$TRIVY_POLICY_NAMESPACES]',
    args: {
      name: "policyNamespaces",
      default: "users",
    },
  },
];

const clearCacheOption: Fig.Option = {
  name: ["--clear-cache", "-c"],
  description: "Clear image caches without scanning [$TRIVY_CLEAR_CACHE]",
};

const ignoreFileOption: Fig.Option = {
  name: "--ignorefile",
  description:
    'Specify .trivyignore file (default: ".trivyignore") [$TRIVY_IGNOREFILE]]',
  args: {
    name: "ignorefile",
    template: "filepaths",
    default: ".trivyignore",
  },
};

const timeoutOption: Fig.Option = {
  name: "--timeout",
  description: "Timeout (default: 5m0s) [$TRIVY_TIMEOUT]",
  args: {
    name: "timeout",
    default: "5m0s",
  },
};

const offlineScanOption: Fig.Option = {
  name: "--offline-scan",
  description:
    "Do not issue API requests to identify dependencies [$TRIVY_OFFLINE_SCAN]",
};

const skipOptions: Fig.Option[] = [
  {
    name: "--skip-files",
    description: "Specify the file paths to skip traversal [$TRIVY_SKIP_FILES]",
    args: {
      name: "skipFiles",
      template: "filepaths",
    },
  },
  {
    name: "--skip-dirs",
    description:
      "Allow insecure server connections when using SSL [$TRIVY_INSECURE]",
    args: {
      name: "skipDirs",
      template: "folders",
    },
  },
];

const severityOption: Fig.Option = {
  name: ["--severity", "-s"],
  description:
    'Severities of vulnerabilities to be displayed (comma separated) (default: "UNKNOWN,LOW,MEDIUM,HIGH,CRITICAL") [$TRIVY_SEVERITY]',
  args: {
    name: "severity",
    generators: {
      getQueryTerm: ",",
      trigger: ",",
      custom: async (ctx) => {
        const suggestions = ["UNKNOWN", "LOW", "MEDIUM", "HIGH", "CRITICAL"];
        const currentToken = [ctx[ctx.length - 1]][0];
        return suggestions
          .filter((sugg) => !currentToken.split(",").includes(sugg))
          .map((sugg) => ({ name: sugg }));
      },
    },
    default: "UNKNOWN,LOW,MEDIUM,HIGH,CRITICAL",
  },
};

const outputOption: Fig.Option = {
  name: ["--output", "-o"],
  description: "Output file name [$TRIVY_OUTPUT]",
  args: {
    name: "input",
    template: "filepaths",
  },
};

const skipDBUpdateOption: Fig.Option = {
  name: ["--skip-db-update", "--skip-update"],
  description:
    "Skip updating vulnerability database [$TRIVY_SKIP_UPDATE, $TRIVY_SKIP_DB_UPDATE]",
};

const cacheBackendOption: Fig.Option = {
  name: "--cache-backend",
  description:
    'Cache backend (e.g. redis://localhost:6379) (default: "fs") [$TRIVY_CACHE_BACKEND]',
  args: {
    name: "cacheBackend",
    default: "fs",
  },
};

const templateOptions: Fig.Option = {
  name: ["--template", "-t"],
  description: "Output template [$TRIVY_TEMPLATE]",
  args: {
    name: "output",
  },
};

const formatOptions: Fig.Option = {
  name: ["--format", "-f"],
  description:
    'Format (table, json, sarif, template) (default: "table") [$TRIVY_FORMAT]',
  args: {
    name: "format",
    suggestions: ["table", "json", "sarif", "template"],
    default: "table",
  },
};

const exitCodeOption: Fig.Option = {
  name: "--exit-code",
  description:
    "Exit code when vulnerabilities were found (default: 0) [$TRIVY_EXIT_CODE]",
  args: {
    name: "exitCode",
    default: "0",
  },
};

const scanOptions: Fig.Option[] = [
  templateOptions,
  formatOptions,
  severityOption,
  outputOption,
  exitCodeOption,
  clearCacheOption,
  {
    name: "--vuln-type",
    description:
      'Comma-separated list of vulnerability types (os,library) (default: "os,library") [$TRIVY_VULN_TYPE]',
    args: {
      name: "vulnType",
      generators: {
        getQueryTerm: ",",
        trigger: ",",
        custom: async (ctx) => {
          const suggestions = ["os", "library"];
          const currentToken = [ctx[ctx.length - 1]][0];
          return suggestions
            .filter((sugg) => !currentToken.split(",").includes(sugg))
            .map((sugg) => ({ name: sugg }));
        },
      },
      default: "os,library",
    },
  },
  {
    name: "--security-checks",
    description:
      'Comma-separated list of what security issues to detect (vuln,config) (default: "vuln") [$TRIVY_SECURITY_CHECKS]',
    args: {
      name: "securityChecks",
      generators: {
        getQueryTerm: ",",
        trigger: ",",
        custom: async (ctx) => {
          const suggestions = ["vuln", "config"];
          const currentToken = [ctx[ctx.length - 1]][0];
          return suggestions
            .filter((sugg) => !currentToken.split(",").includes(sugg))
            .map((sugg) => ({ name: sugg }));
        },
      },
      default: "vuln",
    },
  },
  ignoreFileOption,
  timeoutOption,
  {
    name: "--ignore-policy",
    description:
      "Specify the Rego file to evaluate each vulnerability [$TRIVY_IGNORE_POLICY]",
    args: {
      name: "ignorePolicy",
      template: "filepaths",
    },
  },
  {
    name: "--list-all-pkgs",
    description:
      "Enabling the option will output all packages regardless of vulnerability (default: false) [$TRIVY_LIST_ALL_PKGS]",
  },
  cacheBackendOption,
  {
    name: "--no-progress",
    description: "Suppress progress bar [$TRIVY_NO_PROGRESS]",
  },
  offlineScanOption,
  ...skipOptions,
];

const tokenOptions: Fig.Option[] = [
  {
    name: "--token",
    description: "For authentication in client/server mode [$TRIVY_TOKEN]",
    args: {
      name: "token",
    },
  },
  {
    name: "--token-header",
    description:
      'Specify a header name for token in client/server mode (default: "Trivy-Token") [$TRIVY_TOKEN_HEADER]',
    args: {
      name: "tokenHeader",
      default: "Trivy-Token",
    },
  },
];

const clientServerOptions: Fig.Option[] = [
  ...tokenOptions,
  {
    name: "--custom-headers",
    description: "Custom headers in client/server mode [$TRIVY_CUSTOM_HEADERS]",
    args: {
      name: "customHeaders",
    },
  },
];

const insecureOption: Fig.Option = {
  name: "--insecure",
  description:
    "Allow insecure server connections when using SSL [$TRIVY_INSECURE]",
};

const listenOption: Fig.Option = {
  name: "--listen",
  description: 'Listen address (default: "localhost:4954") [$TRIVY_LISTEN]',
  args: {
    name: "listen",
  },
};

const ignoreUnfixedOption: Fig.Option = {
  name: "--ignore-unfixed",
  description: "Display only fixed vulnerabilities [$TRIVY_IGNORE_UNFIXED]",
};

const remoteServerOption: Fig.Option = {
  name: "--remote",
  description:
    'Server address (default: "http://localhost:4954") [$TRIVY_REMOTE]',
  args: {
    name: "remote",
    default: "http://localhost:4954",
  },
};

const downloadDBOnlyOption: Fig.Option = {
  name: "--download-db-only",
  description:
    "Download/update vulnerability database but don't run a scan [$TRIVY_DOWNLOAD_DB_ONLY]",
};

const resetOption: Fig.Option = {
  name: "--reset",
  description: "Remove all caches and database [$TRIVY_RESET]",
};

const completionSpec: Fig.Spec = {
  name: "trivy",
  description: "A simple and comprehensive vulnerability scanner",
  subcommands: [
    {
      name: ["image", "i"],
      description: "Scan an image",
      subcommands: [
        ...scanOptions,
        skipDBUpdateOption,
        removePkgsOption,
        inputOption,
        downloadDBOnlyOption,
        resetOption,
        ignoreUnfixedOption,
        {
          name: "--light",
          deprecated: true,
          description: "Deprecated [$TRIVY_LIGHT]",
        },
        insecureOption,
      ],
      args: {
        name: "image_name",
      },
    },
    {
      name: ["filesystem", "fs"],
      description:
        "Scan local filesystem for language-specific dependencies and config files",
      subcommands: [
        ...scanOptions,
        skipPolicyUpdateOption,
        ignoreUnfixedOption,
        ...regoPolicyOptions,
        skipDBUpdateOption,
        {
          name: "--server",
          description: "Server address [$TRIVY_SERVER]",
          args: {
            name: "server",
          },
        },
        ...clientServerOptions,
      ],
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "rootfs",
      description: "Scan rootfs",
      subcommands: [
        ...scanOptions,
        skipPolicyUpdateOption,
        ...regoPolicyOptions,
        skipDBUpdateOption,
      ],
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "sbom",
      description: "Generate SBOM for an artifact",
      subcommands: [
        outputOption,
        clearCacheOption,
        ignoreFileOption,
        timeoutOption,
        severityOption,
        offlineScanOption,
        ...skipOptions,
        {
          name: ["--artifact-type", "--type"],
          description:
            'Input artifact type (image, fs, repo, archive) (default: "image") [$TRIVY_ARTIFACT_TYPE]',
          args: {
            name: "artifactType",
            default: "image",
            suggestions: ["image", "fs", "repo", "archive"],
          },
        },
        {
          name: ["--sbom-format", "--format"],
          description:
            'SBOM format (cyclonedx) (default: "cyclonedx") [$TRIVY_SBOM_FORMAT]',
          args: {
            name: "sbomFormat",
            default: "cyclonedx",
            suggestions: ["cyclonedx"],
          },
        },
      ],
    },
    {
      name: ["repository", "repo"],
      description: "Scan remote repository",
      subcommands: [
        ...scanOptions,
        skipPolicyUpdateOption,
        skipDBUpdateOption,
        ignoreUnfixedOption,
        removePkgsOption,
        inputOption,
        {
          name: ["--quiet", "-q"],
          description: "Suppress progress bar and log output [$TRIVY_QUIET]",
        },
        insecureOption,
      ],
    },
    {
      name: ["client", "c"],
      description: "Client mode",
      subcommands: [
        ...scanOptions,
        severityOption,
        inputOption,
        ignoreUnfixedOption,
        insecureOption,
        removePkgsOption,
        outputOption,
        configPolicy,
        ...skipOptions,
        ...clientServerOptions,
        remoteServerOption,
      ],
    },
    {
      name: ["server", "s"],
      description: "Server mode",
      subcommands: [
        skipDBUpdateOption,
        downloadDBOnlyOption,
        resetOption,
        cacheBackendOption,
        ...tokenOptions,
        listenOption,
      ],
    },
    {
      name: ["config", "conf"],
      description: "Scan config files",
      subcommands: [
        templateOptions,
        formatOptions,
        severityOption,
        outputOption,
        exitCodeOption,
        skipPolicyUpdateOption,
        resetOption,
        clearCacheOption,
        ignoreFileOption,
        timeoutOption,
        ...skipOptions,
        ...regoPolicyOptions,
        {
          name: "--file-patterns",
          description: "Specify file patterns [$TRIVY_FILE_PATTERNS",
          args: {
            name: "filePatterns",
          },
        },
        {
          name: "--include-non-failures",
          description:
            "Enable more verbose trace output for custom queries [$TRIVY_TRACE]",
        },
        {
          name: "--trace",
          description:
            "Enable more verbose trace output for custom queries [$TRIVY_TRACE]",
        },
      ],
    },
    {
      name: ["plugin", "p"],
      description: "Manage plugins",
      subcommands: [
        {
          name: ["install", "i"],
          description: "Install a plugin",
          args: {
            name: "plugin",
            description: "URL | FILE_PATH",
          },
        },
        {
          name: ["uninstall", "u"],
          description: "Uninstall plugin",
          args: {
            name: "plugin",
          },
        },
        {
          name: ["list", "l"],
          description: "List installed plugin",
        },
        {
          name: "info",
          description: "Information about a plugin",
          args: {
            name: "plugin",
          },
        },
        {
          name: ["run", "r"],
          description: "Run a plugin on the fly",
          args: {
            name: "plugin",
          },
        },
        {
          name: "update",
          description: "Update an existing plugin",
          args: {
            name: "plugin",
          },
        },
        {
          name: ["help", "h"],
          description: "Shows a list of commands or help for one command",
          args: {
            template: "help",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "version",
      description: "Print the version",
    },
    {
      name: ["help", "h"],
      description: "Shows a list of commands or help for one command",
    },
  ],
  options: [
    {
      name: ["--quiet", "-q"],
      description: "Suppress progress bar and log output [$TRIVY_QUIET]",
    },
    {
      name: ["--debug", "-d"],
      description: "Enable debug output [$TRIVY_DEBUG]",
    },
    {
      name: "--cache-dir",
      description: "Cache directory [$TRIVY_CACHE_DIR]",
      args: {
        name: "cache-dir",
        template: "folders",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Print the version",
    },
  ],
};
export default completionSpec;
