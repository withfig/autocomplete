const sharedOptions: Fig.Option[] = [
  {
    name: ["-V", "--variant-suffix"],
    description: "Variant suffix to use",
    args: { name: "variant-suffix" },
  },
  {
    name: ["-a", "--arch"],
    description: "The architecture to use for the specified actions",
    args: { name: "arch" },
  },
  {
    name: ["-z", "--no-authorization"],
    description: "Skip approval checks for this action",
  },
  {
    name: ["-v", "--verbose"],
    description: "Toggle verbosity",
  },
  {
    name: ["-p", "--bundle-path"],
    description: "Path of the kext bundle to act upon",
    args: { name: "bundle-path", template: "fold" },
  },
  {
    name: ["-b", "--bundle-identifier"],
    description: "CFBundleIdentifier of the kext to act upon",
    args: { name: "bundle-identifier" },
  },
];

const repositoryOptions: Fig.Option[] = [
  {
    name: ["-r", "--repository"],
    description: "Additional repository to search for kexts",
    args: { name: "repository" },
  },
  {
    name: ["-R", "--volume-root"],
    description: "Path to the volume root to search for kexts",
    args: { name: "volume-root" },
  },
  {
    name: "--build",
    description: "(If known) The system build version number",
    args: { name: "build" },
  },
  {
    name: "--sdk",
    description: "The path to the sdk to use",
    args: { name: "sdk" },
  },
  {
    name: "--kdk",
    description: "The path to the kdk to use",
    args: { name: "kdk" },
  },
];

const filterOptions: Fig.Option[] = [
  {
    name: ["-f", "--filter"],
    description: "Filter results by the given predicate string",
    args: { name: "filter" },
  },
  {
    name: ["-F", "--filter-all"],
    description: "Filter all results by the given predicate string",
    args: { name: "filter-all" },
  },
  {
    name: "--optional-identifier",
    description: "Treat the given identifier as optional",
    args: { name: "optional-identifier" },
  },
  {
    name: "--elide-identifier",
    description: "Elide the given identifier from results",
    args: { name: "elide-identifier" },
  },
];

const completionSpec: Fig.Spec = {
  name: "kmutil",
  description: "KernelManagement utility for kexts and kernel collections",
  subcommands: [
    {
      name: "create",
      description: "Create one or more new artifacts based on the arguments",
      options: [
        ...sharedOptions,
        ...repositoryOptions,
        ...filterOptions,
        {
          name: ["-L", "--no-system-collection"],
          description: "Do not include the system collection",
        },
      ],
    },
    {
      name: "rebuild",
      description: "Attempt an auxiliary kernel collection rebuild",
    },
    {
      name: "load",
      description: "Load one or more extensions based on the arguments",
      options: [
        ...sharedOptions,
        ...repositoryOptions,
        {
          name: ["-P", "--personality-name"],
          description: "Name of the personality to load",
          args: { name: "personality-name" },
        },
        {
          name: "-e",
          description: "Do not use the default repositories",
        },
        {
          name: "--load-style",
          description: "Style to use when loading extensions",
          args: { name: "load-style" },
        },
      ],
    },
    {
      name: "unload",
      description: "Unload the named kexts and all personalities",
      options: [
        ...sharedOptions,
        {
          name: ["-c", "--class-name"],
          description: "Name of the class to unload",
          args: { name: "class-name" },
        },
        {
          name: ["-P", "--personalities-only"],
          description: "Only unload personalities",
        },
      ],
    },
    {
      name: "log",
      description:
        "Display logging information about the KernelManagement subsystem",
    },
    {
      name: "libraries",
      description:
        "Search for library kexts that define symbols needed for linking",
    },
    {
      name: "dumpstate",
      description: "Dump kernelmanagerd(8) state for debugging",
    },
    {
      name: "inspect",
      description:
        "Inspect & display a kext collection's contents according to the options",
      options: [
        ...sharedOptions,
        {
          name: "--show-mach-header",
          description: "Print the mach header(s) in the collection(s)",
        },
        {
          name: "--show-fileset-entries",
          description: "Print the fileset entries of the mach header(s)",
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
          name: "--show-prelink-info",
          description:
            "Dump the __PRELINK_INFO section(s) of the collection(s)",
        },
        {
          name: "--show-extension-info",
          description: "Show extension information (default if no other flag)",
        },
        {
          name: "--json",
          description: "Print the section layout of the collection(s) as JSON",
        },
      ],
    },
    {
      name: "clear-staging",
      description: "Clears all contents of the kext staging locations",
    },
    {
      name: "configure-boot",
      description: "Configure custom boot object policy (recovery-mode only)",
    },
    {
      name: "find",
      description: "Find kexts available on the operating system",
      options: [
        ...sharedOptions,
        ...repositoryOptions,
        ...filterOptions,
        {
          name: ["-B", "--boot-path"],
          description: "Path to the boot kext collection",
          args: { name: "boot-path", template: "filepaths" },
        },
        {
          name: ["-S", "--system-path"],
          description: "Path to the system kext collection",
          args: { name: "system-path", template: "filepaths" },
        },
        {
          name: ["-A", "--auxiliary-path"],
          description: "Path to the auxiliary kext collection",
          args: { name: "auxiliary-path", template: "filepaths" },
        },
        {
          name: ["-M", "--allow-missing-collections"],
          description: "Do not fail if collections are missing",
        },
        {
          name: "--no-variant-extension",
          description:
            "Don't append the build variant as an extension to the collections",
        },
      ],
    },
    {
      name: "showloaded",
      description: "Show the loaded state of the extensions on the system",
      options: [
        ...sharedOptions,
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
            suggestions: [
              { name: "loaded", description: "Show loaded extensions" },
              { name: "unloaded", description: "Show unloaded extensions" },
            ],
          },
        },
        {
          name: "--collection",
          description: "Restrict output to a specific collection",
          args: { name: "collection" },
        },
        {
          name: "--sort",
          description:
            "Sort by load address of each extension, instead of by name",
        },
      ],
    },
    {
      name: "trigger-panic-medic",
      description: "Delete and disable loading of third party kexts",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help information",
    },
  ],
};

export default completionSpec;
