// Options shared by almost every kmutil subcommand.
const globalOptions: Fig.Option[] = [
  {
    name: ["-V", "--variant-suffix"],
    description: "The image suffix to use for the kernel variant",
    args: {
      name: "variant-suffix",
      description: "Development, debug, or kasan variant",
    },
  },
  {
    name: ["-a", "--arch"],
    description:
      "The architecture to use for the extension(s)/collection(s) specified",
    args: {
      name: "arch",
      description: "Defaults to the current running architecture",
    },
  },
  {
    name: ["-z", "--no-authorization"],
    description: "Skip approval checks for this action",
  },
  {
    name: ["-v", "--verbose"],
    description: "Toggle verbosity",
  },
];

const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Show help information",
};

// Option for selecting extensions by bundle path.
const bundlePathOption: Fig.Option = {
  name: ["-p", "--bundle-path"],
  description:
    "Include the bundle specified at this path in the results. Return an error if not found",
  isRepeatable: true,
  args: {
    name: "bundle-path",
    description: "Path to a kext bundle",
    template: "filepaths",
    suggestCurrentToken: true,
  },
};

// Options for selecting extensions by bundle path or bundle identifier.
const bundleOptions: Fig.Option[] = [
  bundlePathOption,
  {
    name: ["-b", "--bundle-identifier"],
    description:
      "Search for, and/or include this identifier in the results. Return an error if not found",
    args: {
      name: "bundle-identifier",
      description: "A kext bundle identifier, e.g. com.apple.filesystems.apfs",
    },
  },
];

// Options for including or excluding extensions by identifier.
const identifierOptions: Fig.Option[] = [
  {
    name: "--optional-identifier",
    description:
      "Search for, and/or include this identifier in the results, if possible",
    args: {
      name: "optional-identifier",
    },
  },
  {
    name: "--elide-identifier",
    description: "Do not include this identifier in the results",
    args: {
      name: "elide-identifier",
    },
  },
];

// Options for filtering extensions with an Info.plist predicate.
const filterOptions: Fig.Option[] = [
  {
    name: ["-f", "--filter"],
    description:
      "Filter results by the given predicate string. This is overridden by other arguments for specifying and excluding extensions",
    args: {
      name: "filter",
      description: "Predicate against an extension's Info.plist",
    },
  },
  {
    name: ["-F", "--filter-all"],
    description:
      "Filter results by the given predicate string. This is not overridden by other arguments for specifying and excluding extensions",
    args: {
      name: "filter-all",
      description: "Predicate against an extension's Info.plist",
    },
  },
];

// Options for the directories kmutil searches for extensions.
const repositoryOptions: Fig.Option[] = [
  {
    name: ["-r", "--repository"],
    description: "Paths to directories containing extensions",
    isRepeatable: true,
    args: {
      name: "repository",
      description: "Directory containing extensions",
      template: "folders",
    },
  },
  {
    name: ["-R", "--volume-root"],
    description: "The target volume",
    args: {
      name: "volume-root",
      description: "The target volume",
      template: "folders",
      suggestCurrentToken: true,
    },
  },
];

// Options describing the system build kmutil should target.
const versionOptions: Fig.Option[] = [
  {
    name: "--build",
    description: "(If known) The system build version number",
    args: {
      name: "build",
    },
  },
  {
    name: "--sdk",
    description: "The path to the sdk to use",
    args: {
      name: "sdk",
      template: "folders",
      suggestCurrentToken: true,
    },
  },
  {
    name: "--kdk",
    description: "The path to the kdk to use",
    args: {
      name: "kdk",
      template: "folders",
      suggestCurrentToken: true,
    },
  },
];

// Options for the paths of the on-disk kext collections.
const collectionOptions: Fig.Option[] = [
  {
    name: ["-B", "--boot-path"],
    description: "The path to the boot kernel collection",
    args: {
      name: "boot-path",
      template: "filepaths",
      suggestCurrentToken: true,
    },
  },
  {
    name: ["-S", "--system-path"],
    description: "The path to the system kernel collection",
    args: {
      name: "system-path",
      template: "filepaths",
      suggestCurrentToken: true,
    },
  },
  {
    name: ["-A", "--auxiliary-path"],
    description: "The path to the auxiliary kernel collection",
    args: {
      name: "auxiliary-path",
      template: "filepaths",
      suggestCurrentToken: true,
    },
  },
  {
    name: ["-M", "--allow-missing-collections"],
    description:
      "Recover gracefully, where applicable, if any collections are missing",
  },
  {
    name: "--no-variant-extension",
    description:
      "Don't append the build variant as an extension to the collection path",
  },
];

const completionSpec: Fig.Spec = {
  name: "kmutil",
  description: "KernelManagement utility for kext collections",
  subcommands: [
    {
      name: "create",
      description: "Create one or more new artifacts",
      options: [
        ...globalOptions,
        ...bundleOptions,
        ...identifierOptions,
        ...filterOptions,
        ...repositoryOptions,
        ...versionOptions,
        ...collectionOptions,
        {
          name: ["-Z", "--authentication", "--no-authentication"],
          description:
            "Perform codesigning checks (local to this utility) for this action",
        },
        {
          name: ["-n", "--new"],
          description:
            "Which types of artifact to build. Takes one or more of 'boot', 'sys', or 'aux'",
          isRepeatable: true,
          args: {
            name: "new",
            suggestions: ["boot", "sys", "aux"],
          },
        },
        {
          name: ["-L", "--no-system-collection"],
          description:
            "If building an auxiliary collection, don't look for or generate a system collection",
        },
        {
          name: ["-s", "--strip"],
          description:
            "The strip mode to use when creating new collections. Accepts 'none', 'all', and 'allkexts'",
          args: {
            name: "strip",
            default: "none",
            suggestions: ["none", "all", "allkexts"],
          },
        },
        {
          name: ["-k", "--kernel"],
          description: "The path to the kernel to use",
          args: {
            name: "kernel",
            template: "filepaths",
            suggestCurrentToken: true,
          },
        },
        {
          name: ["-x", "--explicit-only"],
          description:
            "Only consider the bundle identifiers and paths explicitly specified, along with their dependencies",
        },
        {
          name: "--compress",
          description: "Compress the collection using LZFSE",
        },
        {
          name: "--img4-encode",
          description: "Encode the collection in an img4 payload",
        },
        {
          name: "--emit-macho-with-ext",
          description:
            "Emit raw Mach-O files for each collection suffixed with the given extension",
          args: {
            name: "emit-macho-with-ext",
          },
        },
        {
          name: "--split-ro-rx-tags",
          description: "Split RO RX region payload property tags for iBoot",
        },
        {
          name: ["-m", "--manifest"],
          description:
            "The source build manifest for kernel collection rebuilding (Apple Silicon only)",
          args: {
            name: "manifest",
            template: "filepaths",
            suggestCurrentToken: true,
          },
        },
        {
          name: ["-u", "--update-all"],
          description:
            "Rebuild all collections on a target volume, if the target is writable",
        },
        {
          name: "--force",
          description:
            "Force a collection rebuild even if none of the contents has changed",
        },
        {
          name: "--allow-missing-kdk",
          description:
            "Force a collection rebuild even if a KDK matching the volume's build is not found. Use with caution!",
        },
        {
          name: "--include-volume-kexts",
          description:
            "Include kexts installed on the ARV that are not included in the build manifest (Apple Silicon only)",
        },
        helpOption,
      ],
    },
    {
      name: "load",
      description: "Load one or more extensions",
      options: [
        ...globalOptions,
        ...bundleOptions,
        ...repositoryOptions,
        ...versionOptions,
        {
          name: ["-P", "--personality-name"],
          description:
            "If this kext is already loaded, send the named personality to the catalog",
          args: {
            name: "personality-name",
          },
        },
        {
          name: ["-e", "--no-default-repositories"],
          description:
            "Don't use the default repositories for kexts. You will have to explicitly specify all dependencies of the kext being loaded",
        },
        {
          name: "--load-style",
          description: "The load style used when loading extensions",
          args: {
            name: "load-style",
            default: "start-and-match",
            suggestions: ["start-only", "match-only", "start-and-match"],
          },
        },
        helpOption,
      ],
    },
    {
      name: "unload",
      description: "Unload the named kexts and all personalities",
      options: [
        ...globalOptions,
        ...bundleOptions,
        {
          name: ["-c", "--class-name"],
          description:
            "Terminate all instances of IOService class, but do not unload its kext or unload its personalities",
          args: {
            name: "class-name",
          },
        },
        {
          name: ["-P", "--personalities-only"],
          description:
            "Terminate services and remove personalities only; do not unload kexts",
        },
        helpOption,
      ],
    },
    {
      name: "log",
      description:
        "Display logging information about the KernelManagement subsystem",
      subcommands: [
        {
          name: "show",
          description: "Show logs from kernelmanagerd and kmutil",
        },
        {
          name: "stream",
          description: "Stream logs from kernelmanagerd and kmutil",
        },
      ],
    },
    {
      name: "libraries",
      description:
        "Search for library kexts that define symbols needed for linking by a kernel extension",
      options: [
        ...globalOptions,
        ...bundleOptions,
        ...identifierOptions,
        ...filterOptions,
        ...repositoryOptions,
        ...versionOptions,
        ...collectionOptions,
        {
          name: "--all-symbols",
          description: "List all symbols; found, not found, or found twice",
        },
        {
          name: "--onedef-symbols",
          description:
            "List all symbols found, with the library kext they were found in",
        },
        {
          name: "--multdef-symbols",
          description:
            "List all symbols found more than once, with their library kexts",
        },
        {
          name: "--undef-symbols",
          description: "List all symbols not found in any library",
        },
        {
          name: "--unsupported",
          description: "Look in unsupported kexts for symbols",
        },
        {
          name: ["-c", "--compatible-versions"],
          description:
            "Use library kext compatible versions rather than current versions",
        },
        {
          name: "--xml",
          description: "Print XML fragment suitable for pasting",
        },
        helpOption,
      ],
    },
    {
      name: "dumpstate",
      description: "Dumps kernelmanagerd(8) state for debugging",
      options: [helpOption],
    },
    {
      name: "inspect",
      description: "Inspect & display a kext collection's contents",
      options: [
        ...globalOptions,
        ...bundleOptions,
        ...identifierOptions,
        ...filterOptions,
        ...collectionOptions,
        {
          name: "--show-mach-header",
          description:
            "Print the mach header(s) in the collection(s). Use with --verbose to show more output",
        },
        {
          name: "--show-fileset-entries",
          description:
            "Print the fileset entries of the mach header(s) in the collection(s)",
        },
        {
          name: "--show-kext-load-addresses",
          description:
            "Print the load addresses of each kext in the collection(s)",
        },
        {
          name: "--show-kext-uuids",
          description: "Print the UUIDs of each kext in the collection(s)",
        },
        {
          name: "--show-kernel-uuid",
          description: "Print the UUID of the kernel in the collection",
        },
        {
          name: "--show-kernel-uuid-only",
          description:
            "Print the UUID of the kernel in the collection, and suppress default kext information",
        },
        {
          name: "--no-header",
          description:
            "Don't show the header describing the collection the data came from",
        },
        {
          name: "--show-prelink-info",
          description:
            "Dump the __PRELINK_INFO section(s) of the collection(s)",
        },
        {
          name: "--show-collection-metadata",
          description: "Print the metadata of the collection(s)",
        },
        {
          name: "--show-mach-boot-properties",
          description: "Print derived Mach-O boot properties",
        },
        {
          name: "--show-extension-info",
          description:
            "Show extension information. Default if no other options specified",
        },
        {
          name: "--json",
          description: "Print the section layout of the collection(s) as JSON",
        },
        helpOption,
      ],
    },
    {
      name: "clear-staging",
      description:
        "Clears all contents of the kext staging locations on the system",
      options: [helpOption],
    },
    {
      name: "configure-boot",
      description: "Configure custom boot object policy (recovery-mode only)",
      options: [
        {
          name: ["-c", "--custom-boot-object"],
          description: "File to set as the custom boot object",
          args: {
            name: "custom-boot-object",
            template: "filepaths",
            suggestCurrentToken: true,
          },
        },
        {
          name: ["-C", "--compress"],
          description: "Compress the Mach-O payload",
        },
        {
          name: ["-v", "--volume"],
          description: "Target volume to configure",
          args: {
            name: "volume",
            template: "folders",
            suggestCurrentToken: true,
          },
        },
        {
          name: ["-r", "--raw"],
          description:
            "Treat boot object as a raw file to be installed with a custom entry point and lowest virtual address",
        },
        {
          name: "--lowest-virtual-address",
          description:
            "Lowest virtual memory address (iBoot will map the raw boot object at this virtual address)",
          args: {
            name: "lowest-virtual-address",
          },
        },
        {
          name: "--entry-point",
          description:
            "Virtual memory address of entry point into the raw boot object",
          args: {
            name: "entry-point",
          },
        },
        helpOption,
      ],
    },
    {
      name: "find",
      description: "Find kexts available on the operating system",
      options: [
        ...globalOptions,
        ...bundleOptions,
        ...identifierOptions,
        ...filterOptions,
        ...repositoryOptions,
        ...versionOptions,
        ...collectionOptions,
        {
          name: "--location",
          description:
            "Specify 'collection' or 'any' to restrict output to other possible kext locations",
          args: {
            name: "location",
            default: "bundle",
            suggestions: ["bundle", "collection", "any"],
          },
        },
        helpOption,
      ],
    },
    {
      name: "showloaded",
      description: "Show the loaded state of the extensions on the system",
      options: [
        ...globalOptions,
        ...bundleOptions,
        ...identifierOptions,
        ...filterOptions,
        {
          name: "--show-mach-headers",
          description: "Show the Mach-O headers of the loaded extensions",
        },
        {
          name: "--show",
          description: "Restrict output to a specific load state",
          args: {
            name: "show",
            default: "loaded",
            suggestions: ["loaded", "unloaded", "all"],
          },
        },
        {
          name: "--collection",
          description:
            "Restrict the load information to a particular collection kind",
          args: {
            name: "collection",
            suggestions: ["boot", "sys", "aux", "codeless"],
          },
        },
        {
          name: "--sort",
          description:
            "Sort by load address of each extension, instead of by load tag",
        },
        {
          name: "--list-only",
          description: "Print the list only, omitting the column headers",
        },
        {
          name: "--arch-info",
          description: "Include the architecture info in output",
        },
        {
          name: "--no-kernel-components",
          description: "Omit kernel components from output",
        },
        {
          name: "--show-kernel",
          description: "Show kernel information in output",
        },
        helpOption,
      ],
    },
    {
      name: "trigger-panic-medic",
      description:
        "Delete and disable loading of third party kexts in order to safely boot into a target volume (can only be triggered in Recovery mode)",
      options: [
        {
          name: ["-R", "--volume-root"],
          description: "The target volume to fix",
          args: {
            name: "volume-root",
            template: "folders",
            suggestCurrentToken: true,
          },
        },
        helpOption,
      ],
    },
    {
      name: "check",
      description:
        "Check the consistency of kext collections against each other and/or load information in-kernel",
      options: [
        {
          name: "--collection",
          description:
            "Which types of artifact to check. Takes one or more of 'boot', 'sys', or 'aux'",
          isRepeatable: true,
          args: {
            name: "collection",
            suggestions: ["boot", "sys", "aux"],
          },
        },
        {
          name: "--collection-linkage",
          description:
            "Check to see that the collections on the system are properly linked together",
        },
        {
          name: "--load-info",
          description:
            "Check to see that load info matches collections on disk",
        },
        {
          name: "--kernel-only",
          description:
            "When checking load info, just check the kernel UUID and nothing else",
        },
        helpOption,
      ],
    },
    {
      name: "print-diagnostics",
      description:
        "Perform all possible tests on a specified kext, and indicate whether the kext is loadable",
      options: [
        ...globalOptions,
        ...repositoryOptions,
        ...versionOptions,
        ...collectionOptions,
        bundlePathOption,
        {
          name: ["-Z", "--no-resolve-dependencies"],
          description: "Don't resolve dependencies",
        },
        {
          name: ["-D", "--diagnose-dependencies"],
          description: "Recursively diagnose dependencies",
        },
        {
          name: "--plugins",
          description:
            "Recurse into the standard PlugIns directory and validate kext inside",
        },
        {
          name: "--do-staging",
          description:
            "Perform staging to SIP protected location (requires root)",
        },
        helpOption,
      ],
    },
    {
      name: "emit-macho",
      description:
        "Unwrap and uncompress given kernel collections to emit raw Mach-O files",
      options: [...globalOptions, ...collectionOptions, helpOption],
    },
    {
      name: "rebuild",
      description: "Attempts an auxiliary kernel collection rebuild",
      options: [helpOption],
    },
    {
      name: "path-for-identifier",
      description: "Gets a bundle path for a kext bundle identifier",
      options: [
        {
          name: ["-b", "--bundle-id"],
          description: "Bundle identifier for the kext",
          args: {
            name: "bundle-id",
          },
        },
        helpOption,
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help information",
    },
    {
      name: "--generate-completion-script",
      description:
        "Print a completion script for the given shell. If no shell is specified, the current running shell is used",
      args: {
        name: "shell",
        isOptional: true,
        suggestions: ["zsh", "bash", "fish"],
      },
    },
  ],
};

export default completionSpec;
