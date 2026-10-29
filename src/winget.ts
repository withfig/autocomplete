const commonOptions: Fig.Option[] = [
  {
    name: "--wait",
    description: "Prompts the user to press any key before exiting",
  },
  {
    name: ["--logs", "--open-logs"],
    description: "Open the default logs location",
  },
  {
    name: ["--verbose", "--verbose-logs"],
    description: "Enables verbose logging for winget",
  },
  {
    name: "--disable-interactivity",
    description: "Disable interactive prompts",
  },
];

const sourceAgreements: Fig.Option[] = [
  {
    name: "--header",
    description: "Optional Windows-Package-Manager REST source HTTP header",
    args: { name: "header", description: "REST source HTTP header" },
  },
  {
    name: "--accept-source-agreements",
    description: "Accept all source agreements during source operations",
  },
];

const queryOptions: Fig.Option[] = [
  {
    name: "--id",
    description: "Limits the search to the ID of the application",
    args: { name: "id", description: "Application ID" },
  },
  {
    name: "--name",
    description: "Limits the search to the name of the application",
    args: { name: "name", description: "Application name" },
  },
  {
    name: "--moniker",
    description: "Limits the search to the moniker listed for the application",
    args: { name: "moniker", description: "Application moniker" },
  },
  {
    name: ["-s", "--source"],
    description: "Restricts the search to the source name provided",
    args: { name: "source", description: "Source name" },
  },
  {
    name: ["-e", "--exact"],
    description:
      "Uses the exact string in the query, including case-sensitivity, instead of a substring match",
  },
];

const completionSpec: Fig.Spec = {
  name: "winget",
  description:
    "Windows Package Manager CLI. Enables users to discover, install, upgrade, remove and configure applications",
  subcommands: [
    {
      name: "install",
      description: "Installs the specified application (alias: add)",
      args: {
        name: "query",
        description: "The query used to search for an app",
        isOptional: true,
      },
      options: [
        {
          name: ["-q", "--query"],
          description: "The query used to search for an app",
          args: {
            name: "query",
            description: "Query used to search for an app",
          },
        },
        {
          name: ["-m", "--manifest"],
          description: "Path to the manifest (YAML) file for a local install",
          args: {
            name: "path",
            description: "Path to manifest file",
            template: "filepaths",
          },
        },
        ...queryOptions,
        {
          name: ["-v", "--version"],
          description:
            "Specify an exact version to install (latest if not specified)",
          args: { name: "version", description: "Version to install" },
        },
        {
          name: "--scope",
          description: "Select install scope (user or machine)",
          args: {
            name: "scope",
            suggestions: ["user", "machine"],
          },
        },
        {
          name: "-i",
          description: "Runs the installer in interactive mode",
        },
        {
          name: "--interactive",
          description: "Runs the installer in interactive mode",
        },
        {
          name: "-h",
          description: "Runs the installer in silent mode (suppresses all UI)",
        },
        {
          name: "--silent",
          description: "Runs the installer in silent mode (suppresses all UI)",
        },
        {
          name: ["-o", "--log"],
          description: "Directs logging to a log file",
          args: {
            name: "path",
            description: "Log file path",
            template: "filepaths",
          },
        },
        {
          name: "--override",
          description: "A string that will be passed directly to the installer",
          args: {
            name: "string",
            description: "String passed to the installer",
          },
        },
        {
          name: "--custom",
          description:
            "Arguments to be passed on to the installer in addition to the defaults",
          args: { name: "args", description: "Installer arguments" },
        },
        {
          name: ["-l", "--location"],
          description: "Location to install to (if supported)",
          args: {
            name: "location",
            description: "Install location",
            template: "folders",
          },
        },
        {
          name: "--force",
          description: "Override the installer hash check",
        },
        {
          name: ["-a", "--architecture"],
          description: "Select the architecture",
          args: {
            name: "architecture",
            suggestions: ["x86", "x64", "arm", "arm64"],
          },
        },
        {
          name: "--installer-type",
          description: "Select the installer type",
          args: {
            name: "type",
            suggestions: [
              "exe",
              "msi",
              "msix",
              "appx",
              "zip",
              "inno",
              "nullsoft",
              "wix",
              "burn",
            ],
          },
        },
        {
          name: "--locale",
          description: "Locale to use (BCP47 format)",
          args: { name: "locale", description: "Locale (BCP47)" },
        },
        {
          name: "--ignore-security-hash",
          description: "Ignore the installer hash check failure",
        },
        {
          name: "--skip-dependencies",
          description:
            "Skip processing package dependencies and Windows features",
        },
        {
          name: "--ignore-local-archive-malware-scan",
          description:
            "Ignore the malware scan performed as part of installing an archive-type package from a local manifest",
        },
        {
          name: "--ignore-unavailable",
          description:
            "Ignore unavailable packages when installing multiple packages; remaining packages continue to install",
        },
        {
          name: "--dependency-source",
          description: "Find package dependencies using the specified source",
          args: { name: "source", description: "Dependency source name" },
        },
        {
          name: "--accept-package-agreements",
          description: "Accept all license agreements for packages",
        },
        {
          name: "--no-upgrade",
          description: "Skip upgrade if an installed version already exists",
        },
        {
          name: "-r",
          description: "The value to rename the executable file (portable)",
          args: { name: "name", description: "New executable name" },
        },
        {
          name: "--rename",
          description: "The value to rename the executable file (portable)",
          args: { name: "name", description: "New executable name" },
        },
        {
          name: "--uninstall-previous",
          description:
            "Uninstall the previous version of the package during the upgrade",
        },
        ...sourceAgreements,
        ...commonOptions,
      ],
    },
    {
      name: "uninstall",
      description: "Uninstalls the specified application",
      args: {
        name: "query",
        description: "The query used to search for an app",
        isOptional: true,
      },
      options: [
        {
          name: ["-q", "--query"],
          description: "The query used to search for an app",
          args: {
            name: "query",
            description: "Query used to search for an app",
          },
        },
        {
          name: ["-m", "--manifest"],
          description: "Path to the manifest (YAML) file for a local uninstall",
          args: {
            name: "path",
            description: "Path to manifest file",
            template: "filepaths",
          },
        },
        ...queryOptions,
        {
          name: ["-v", "--version"],
          description: "Specify an exact version to uninstall",
          args: { name: "version", description: "Version to uninstall" },
        },
        {
          name: "-i",
          description: "Runs the uninstaller in interactive mode",
        },
        {
          name: "--interactive",
          description: "Runs the uninstaller in interactive mode",
        },
        {
          name: "-h",
          description:
            "Runs the uninstaller in silent mode (suppresses all UI)",
        },
        {
          name: "--silent",
          description:
            "Runs the uninstaller in silent mode (suppresses all UI)",
        },
        {
          name: ["-o", "--log"],
          description: "Directs logging to a log file",
          args: {
            name: "path",
            description: "Log file path",
            template: "filepaths",
          },
        },
        {
          name: "--product-code",
          description: "Filters using the product code",
          args: { name: "code", description: "Product code" },
        },
        {
          name: "--scope",
          description:
            "Select installed package scope filter (user or machine)",
          args: {
            name: "scope",
            suggestions: ["user", "machine"],
          },
        },
        {
          name: "--force",
          description:
            "Directly run the command and continue with non-security-related issues",
        },
        {
          name: "--purge",
          description:
            "Deletes all files and directories in the package directory (portable)",
        },
        {
          name: "--preserve",
          description:
            "Retains all files and directories created by the package (portable)",
        },
        ...sourceAgreements,
        ...commonOptions,
      ],
    },
    {
      name: "show",
      description: "Displays details for the specified application",
      args: {
        name: "query",
        description: "The query used to search for an application",
        isOptional: true,
      },
      options: [
        {
          name: ["-q", "--query"],
          description: "The query used to search for an application",
          args: {
            name: "query",
            description: "Query used to search for an app",
          },
        },
        {
          name: ["-m", "--manifest"],
          description: "The path to the manifest of the application",
          args: {
            name: "path",
            description: "Path to manifest file",
            template: "filepaths",
          },
        },
        {
          name: "--id",
          description: "Filter results by ID",
          args: { name: "id", description: "Application ID" },
        },
        {
          name: "--name",
          description: "Filter results by name",
          args: { name: "name", description: "Application name" },
        },
        {
          name: "--moniker",
          description: "Filter results by application moniker",
          args: { name: "moniker", description: "Application moniker" },
        },
        {
          name: ["-v", "--version"],
          description:
            "Use the specified version (default is the latest version)",
          args: { name: "version", description: "Version to show" },
        },
        {
          name: ["-s", "--source"],
          description: "Find the application using the specified source",
          args: { name: "source", description: "Source name" },
        },
        {
          name: ["-e", "--exact"],
          description: "Find the application using exact match",
        },
        {
          name: "--versions",
          description: "Show available versions of the application",
        },
        {
          name: "--scope",
          description: "Select install scope (user or machine)",
          args: {
            name: "scope",
            suggestions: ["user", "machine"],
          },
        },
        {
          name: ["-a", "--architecture"],
          description: "Select the architecture",
          args: {
            name: "architecture",
            suggestions: ["x86", "x64", "arm", "arm64"],
          },
        },
        {
          name: "--installer-type",
          description: "Select the installer type",
          args: {
            name: "type",
            suggestions: [
              "exe",
              "msi",
              "msix",
              "appx",
              "zip",
              "inno",
              "nullsoft",
              "wix",
              "burn",
            ],
          },
        },
        {
          name: "--locale",
          description: "Locale to use (BCP47 format)",
          args: { name: "locale", description: "Locale (BCP47)" },
        },
        ...sourceAgreements,
        ...commonOptions,
      ],
    },
    {
      name: "search",
      description: "Searches for applications (alias: find)",
      args: {
        name: "query",
        description: "The query used to search for an app",
        isOptional: true,
      },
      options: [
        {
          name: ["-q", "--query"],
          description: "The query used to search for an app",
          args: {
            name: "query",
            description: "Query used to search for an app",
          },
        },
        {
          name: "--id",
          description:
            "Limits the search to the ID of the application (includes publisher and application name)",
          args: { name: "id", description: "Application ID" },
        },
        {
          name: "--name",
          description: "Limits the search to the name of the application",
          args: { name: "name", description: "Application name" },
        },
        {
          name: "--moniker",
          description: "Limits the search to the moniker specified",
          args: { name: "moniker", description: "Application moniker" },
        },
        {
          name: "--tag",
          description:
            "Limits the search to the tags listed for the application",
          args: { name: "tag", description: "Application tag" },
        },
        {
          name: ["--cmd", "--command"],
          description:
            "Limits the search to the commands listed for the application",
          args: { name: "command", description: "Application command" },
        },
        {
          name: ["-s", "--source"],
          description: "Find package using the specified source",
          args: { name: "source", description: "Source name" },
        },
        {
          name: ["-n", "--count"],
          description:
            "Show no more than specified number of results (between 1 and 1000)",
          args: { name: "count", description: "Maximum number of results" },
        },
        {
          name: ["-e", "--exact"],
          description: "Find package using exact match",
        },
        {
          name: "--versions",
          description: "Show available versions of the package",
        },
        ...sourceAgreements,
        ...commonOptions,
      ],
    },
    {
      name: "list",
      description: "Displays a list of installed packages",
      options: [
        {
          name: ["-q", "--query"],
          description: "The query used to search for an app",
          args: {
            name: "query",
            description: "Query used to search for an app",
          },
        },
        {
          name: "--id",
          description: "Limits the list to the ID of the application",
          args: { name: "id", description: "Application ID" },
        },
        {
          name: "--name",
          description: "Limits the list to the name of the application",
          args: { name: "name", description: "Application name" },
        },
        {
          name: "--moniker",
          description:
            "Limits the list to the moniker listed for the application",
          args: { name: "moniker", description: "Application moniker" },
        },
        {
          name: ["-s", "--source"],
          description: "Restricts the list to the source name provided",
          args: { name: "source", description: "Source name" },
        },
        {
          name: "--tag",
          description: "Filters results by tags",
          args: { name: "tag", description: "Application tag" },
        },
        {
          name: "--command",
          description:
            "Filters results by command specified by the application",
          args: { name: "command", description: "Application command" },
        },
        {
          name: ["-n", "--count"],
          description: "Limits the number of apps displayed in one query",
          args: { name: "count", description: "Maximum number of results" },
        },
        {
          name: ["-e", "--exact"],
          description:
            "Uses the exact string in the list query, including case-sensitivity",
        },
        {
          name: "--scope",
          description:
            "Select installed package scope filter (user or machine)",
          args: {
            name: "scope",
            suggestions: ["user", "machine"],
          },
        },
        {
          name: "--upgrade-available",
          description: "Lists only packages which have an upgrade available",
        },
        {
          name: ["-u", "--unknown", "--include-unknown"],
          description:
            "List packages even if their current version cannot be determined (only with --upgrade-available)",
        },
        {
          name: ["--pinned", "--include-pinned"],
          description:
            "List packages even if they have a pin that prevents upgrade (only with --upgrade-available)",
        },
        {
          name: "--sort",
          description:
            "Sort results by a property. Can be repeated for multi-field sorting",
          isRepeatable: true,
          args: {
            name: "property",
            suggestions: [
              "name",
              "id",
              "version",
              "source",
              "available",
              "relevance",
            ],
          },
        },
        {
          name: ["--ascending", "--asc"],
          description: "Sort results in ascending order (default)",
        },
        {
          name: ["--descending", "--desc"],
          description: "Sort results in descending order",
        },
        ...sourceAgreements,
        ...commonOptions,
      ],
    },
    {
      name: "upgrade",
      description: "Upgrades a given package (alias: update)",
      args: {
        name: "query",
        description: "The query used to search for an app",
        isOptional: true,
      },
      options: [
        {
          name: ["-m", "--manifest"],
          description: "Path to the manifest (YAML) file for a local upgrade",
          args: {
            name: "path",
            description: "Path to manifest file",
            template: "filepaths",
          },
        },
        {
          name: "--id",
          description: "Limits the upgrade to the ID of the application",
          args: { name: "id", description: "Application ID" },
        },
        {
          name: "--name",
          description: "Limits the search to the name of the application",
          args: { name: "name", description: "Application name" },
        },
        {
          name: "--moniker",
          description:
            "Limits the search to the moniker listed for the application",
          args: { name: "moniker", description: "Application moniker" },
        },
        {
          name: ["-v", "--version"],
          description: "Specify an exact version to upgrade",
          args: { name: "version", description: "Version to upgrade to" },
        },
        {
          name: ["-s", "--source"],
          description: "Restricts the search to the source name provided",
          args: { name: "source", description: "Source name" },
        },
        {
          name: ["-e", "--exact"],
          description:
            "Uses the exact string in the query, including case-sensitivity",
        },
        {
          name: "-i",
          description: "Runs the installer in interactive mode",
        },
        {
          name: "--interactive",
          description: "Runs the installer in interactive mode",
        },
        {
          name: "-h",
          description: "Runs the installer in silent mode (suppresses all UI)",
        },
        {
          name: "--silent",
          description: "Runs the installer in silent mode (suppresses all UI)",
        },
        {
          name: ["-o", "--log"],
          description: "Directs logging to a log file",
          args: {
            name: "path",
            description: "Log file path",
            template: "filepaths",
          },
        },
        {
          name: "--override",
          description: "A string that will be passed directly to the installer",
          args: {
            name: "string",
            description: "String passed to the installer",
          },
        },
        {
          name: "--custom",
          description:
            "Arguments to be passed on to the installer in addition to the defaults",
          args: { name: "args", description: "Installer arguments" },
        },
        {
          name: ["-l", "--location"],
          description: "Location to upgrade to (if supported)",
          args: {
            name: "location",
            description: "Install location",
            template: "folders",
          },
        },
        {
          name: "--force",
          description:
            "When a hash mismatch is discovered will ignore the error and attempt to install the package",
        },
        {
          name: "--all",
          description:
            "Updates all available packages to the latest application",
        },
        {
          name: ["-r", "--recurse"],
          description:
            "Upgrade all installed packages to the latest version if available",
        },
        {
          name: "--include-unknown",
          description:
            "Attempt to upgrade a package even if the package's current version is unknown",
        },
        {
          name: "--purge",
          description:
            "Deletes all files and directories in the package directory (portable)",
        },
        {
          name: ["--pinned", "--include-pinned"],
          description: "Upgrade packages even if they have a non-blocking pin",
        },
        {
          name: "--scope",
          description:
            "Select installed package scope filter (user or machine)",
          args: {
            name: "scope",
            suggestions: ["user", "machine"],
          },
        },
        {
          name: ["-a", "--architecture"],
          description: "Select the architecture to install",
          args: {
            name: "architecture",
            suggestions: ["x86", "x64", "arm", "arm64"],
          },
        },
        {
          name: "--installer-type",
          description: "Select the installer type",
          args: {
            name: "type",
            suggestions: [
              "exe",
              "msi",
              "msix",
              "appx",
              "zip",
              "inno",
              "nullsoft",
              "wix",
              "burn",
            ],
          },
        },
        {
          name: "--locale",
          description: "Locale to use (BCP47 format)",
          args: { name: "locale", description: "Locale (BCP47)" },
        },
        {
          name: "--ignore-security-hash",
          description: "Ignore the installer hash check failure",
        },
        {
          name: "--ignore-local-archive-malware-scan",
          description:
            "Ignore the malware scan performed as part of installing an archive-type package from a local manifest",
        },
        {
          name: "--skip-dependencies",
          description:
            "Skips processing package dependencies and Windows features",
        },
        {
          name: "--accept-package-agreements",
          description: "Accept all license agreements for packages",
        },
        {
          name: "--uninstall-previous",
          description:
            "Uninstall the previous version of the package during the upgrade",
        },
        ...sourceAgreements,
        ...commonOptions,
      ],
    },
    {
      name: "source",
      description: "Manage sources of applications",
      subcommands: [
        {
          name: "add",
          description: "Add a new source",
          args: [
            { name: "name", description: "Name of the source" },
            { name: "url", description: "URL of the source" },
          ],
          options: [
            {
              name: ["-n", "--name"],
              description: "Name of the source",
              args: { name: "name", description: "Name of the source" },
            },
            {
              name: "-a",
              description: "URL of the source",
              args: { name: "url", description: "URL of the source" },
            },
            {
              name: "-t",
              description:
                "Type of source (Microsoft.PreIndexed.Package default, Microsoft.Rest)",
              args: {
                name: "type",
                suggestions: ["Microsoft.PreIndexed.Package", "Microsoft.Rest"],
              },
            },
            {
              name: ["-p", "--priority"],
              description:
                "Sets the source priority for add or edit. Higher values take precedence; new sources default to 0",
              args: { name: "priority", description: "Source priority" },
            },
            ...commonOptions,
          ],
        },
        {
          name: "list",
          description: "List current sources (all or details of a source)",
          args: {
            name: "name",
            description: "Name of the source to show details for",
            isOptional: true,
          },
          options: [
            {
              name: ["-n", "--name"],
              description: "Name of the source",
              args: { name: "name", description: "Name of the source" },
            },
            ...commonOptions,
          ],
        },
        {
          name: "update",
          description: "Update current sources (all or a specific source)",
          args: {
            name: "name",
            description: "Name of the source to update",
            isOptional: true,
          },
          options: [
            {
              name: ["-n", "--name"],
              description: "Name of the source",
              args: { name: "name", description: "Name of the source" },
            },
            ...commonOptions,
          ],
        },
        {
          name: "remove",
          description: "Remove current sources",
          args: { name: "name", description: "Name of the source to remove" },
          options: [
            {
              name: ["-n", "--name"],
              description: "Name of the source",
              args: { name: "name", description: "Name of the source" },
            },
            ...commonOptions,
          ],
        },
        {
          name: "reset",
          description: "Reset sources to defaults (user must accept)",
          args: {
            name: "name",
            description: "Name of the source to reset",
            isOptional: true,
          },
          options: [
            {
              name: "--force",
              description:
                "Directly run the command and continue with non-security-related issues",
            },
            ...commonOptions,
          ],
        },
      ],
      options: [
        {
          name: ["-p", "--priority"],
          description:
            "Sets the source priority for add or edit. Higher values take precedence; new sources default to 0",
          args: { name: "priority", description: "Source priority" },
        },
        ...commonOptions,
      ],
    },
    {
      name: "settings",
      description: "Opens settings or sets administrative settings",
      options: [...commonOptions],
    },
    {
      name: "features",
      description: "Shows the status of experimental features",
      options: [...commonOptions],
    },
    {
      name: "hash",
      description: "Generates the SHA-256 hash for the given installer file",
      args: {
        name: "file",
        description: "Path to the file to be hashed",
        template: "filepaths",
      },
      options: [
        {
          name: ["-f", "--file"],
          description: "The path to the file to be hashed",
          args: {
            name: "path",
            description: "Path to the file to be hashed",
            template: "filepaths",
          },
        },
        {
          name: ["-m", "--msix"],
          description:
            "Also create the SHA-256 SignatureSha256 for use with MSIX installers",
        },
        ...commonOptions,
      ],
    },
    {
      name: "validate",
      description: "Validates a manifest file for correctness and compliance",
      args: {
        name: "manifest",
        description: "Path to the manifest to be validated",
        template: "filepaths",
      },
      options: [
        {
          name: "--manifest",
          description: "The path to the manifest to be validated",
          args: {
            name: "path",
            description: "Path to the manifest",
            template: "filepaths",
          },
        },
        ...commonOptions,
      ],
    },
    {
      name: "export",
      description: "Exports a JSON file with the current packages and sources",
      options: [
        {
          name: ["-o", "--output"],
          description: "Path to the JSON file to be created",
          args: {
            name: "path",
            description: "Output JSON file",
            template: "filepaths",
          },
        },
        {
          name: ["-s", "--source"],
          description: "Specifies a source to export files from",
          args: { name: "source", description: "Source name" },
        },
        {
          name: "--include-versions",
          description:
            "Includes the version of the app currently installed (import will use latest by default)",
        },
        ...sourceAgreements,
        ...commonOptions,
      ],
    },
    {
      name: "import",
      description: "Installs all packages in a JSON file",
      options: [
        {
          name: ["-i", "--import-file"],
          description: "JSON file describing the packages to install",
          args: {
            name: "path",
            description: "Import JSON file",
            template: "filepaths",
          },
        },
        {
          name: "--ignore-unavailable",
          description: "Suppresses errors if the app requested is unavailable",
        },
        {
          name: "--ignore-versions",
          description:
            "Ignores versions specified in the JSON file and installs the latest available version",
        },
        {
          name: "--no-upgrade",
          description: "Skips upgrade if an installed version already exists",
        },
        {
          name: "--accept-package-agreements",
          description: "Accept all license agreements for packages",
        },
        ...sourceAgreements,
        ...commonOptions,
      ],
    },
    {
      name: "help",
      description: "Displays help for all the supported commands",
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
        suggestions: [
          "install",
          "uninstall",
          "show",
          "search",
          "list",
          "upgrade",
          "source",
          "settings",
          "features",
          "hash",
          "validate",
          "export",
          "import",
        ],
      },
      options: [...commonOptions],
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "Display the version of winget",
    },
    {
      name: "--info",
      description: "Display general info of winget",
    },
    ...commonOptions,
  ],
};

export default completionSpec;
