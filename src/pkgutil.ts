const completionSpec: Fig.Spec = {
  name: "pkgutil",
  description: "Package manager for macOS",
  subcommands: [
    {
      name: "--packages",
      description: "List all installed package IDs on the specified --volume",
    },
    {
      name: "--pkgs-plist",
      description:
        "List all installed package IDs, in Mac OS X plist(5) format, on the specified --volume",
    },
    {
      name: "--pkgs",
      description:
        "List all installed package IDs, optionally matching kwarg REGEXP, on the specified --volume",
      args: {
        name: "key=value",
        description: "Regular expression",
        isOptional: true,
      },
    },
    {
      name: "--files",
      description: "List all of the files installed under the package-id",
      args: {
        name: "package-id",
        description: "The package ID to list the files of",
      },
    },
    {
      name: "--export-plist",
      description:
        "Print all receipt information about the specified package-id in Mac OS X plist(5) format",
      args: {
        name: "package-id",
        description: "The package ID to export the plist of",
      },
    },
    {
      name: "--pkg-info",
      description: "Print extended information about the specified package-id",
      args: {
        name: "package-id",
        description: "The package ID to print the info of",
      },
    },
    {
      name: "--pkg-info-plist",
      description:
        "Print extended information about the specified package-id in Mac OS X plist(5) format",
      args: {
        name: "package-id",
        description: "The package ID to print the info of",
      },
    },
    {
      name: "--forget",
      description:
        "Discard all receipt data about package-id, but don't touch installed files",
      args: {
        name: "package-id",
        description: "The package ID to forget",
      },
    },
    {
      name: "--learn",
      description:
        "Update the ACLs of the given path in the receipt identified by --edit-pkg",
      args: {
        name: "path",
        description: "The path to update ACLs on",
      },
    },
    {
      name: "--pkg-groups",
      description:
        "List all of the package groups this package-id is a member of",
      args: {
        name: "package-id",
        description: "The package ID to list the groups of",
      },
    },
    {
      name: "--groups",
      description: "List all of the package groups ont he specified --volume",
    },
    {
      name: "--group-plist",
      description:
        "List all of the package groups ont he specified --volume in Mac OS X plist(5) format",
    },
    {
      name: "--group-pkgs",
      description: "List all of the packages that are members of this group-id",
      args: {
        name: "group-id",
        description: "The group ID to list the packages of",
      },
    },
    {
      name: "--file-info",
      description: "Show the metadata known about path",
      args: {
        name: "path",
        description: "The path to show the metadata of",
      },
    },
    {
      name: "--file-info-plist",
      description:
        "Show the metadata known about path in Mac OS X plist(5) format",
      args: {
        name: "path",
        description: "The path to show the metadata of",
      },
    },
    {
      name: "--expand",
      description:
        "Expand the flat package at pkg-path into a new directory specified by dir-path",
      args: [
        {
          name: "pkg-path",
          description: "The path to the flat package to expand",
        },
        {
          name: "dir-path",
          description: "The path to the directory to expand the package into",
        },
      ],
    },
    {
      name: "--flatten",
      description:
        "Flatten the dir-path into a new flat package created at pkg-path",
      args: [
        {
          name: "dir-path",
          description: "The path to the directory to flatten",
        },
        {
          name: "pkg-path",
          description: "The path to the flat package to create",
        },
      ],
    },
    {
      name: "--bom",
      description:
        "Extract any BOM files from the flat pkg at path into /tml and return the filename(s)",
      args: {
        name: "path",
        description: "The path to the flat package to extract the BOM from",
      },
    },
    {
      name: "--payload-files",
      description:
        "List the files archived within the uninstalled flat package(s) at path",
      args: {
        name: "path",
        description:
          "The path to the flat package to list the archived files of",
      },
    },
    {
      name: "--check-signature",
      description:
        "Check the validity and trust of the signature on the package at pkg-path",
      args: {
        name: "pkg-path",
        description: "The path to the flat package to check the signature of",
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "A brief summary of commands and usage",
    },
    {
      name: ["-f", "--force"],
      description:
        "Skip confirmation before a potentially destructive or ambiguous action",
    },
    {
      name: ["-v", "--verbose"],
      description: "Output in a human-readable format",
    },
    {
      name: "--volume",
      description: "Perform all operations on specified volume",
      args: {
        name: "volume",
        description: "Volume to perform operations on",
      },
    },
    {
      name: "--edit-pkg",
      description:
        "Specifies an existing receipt to be modified in-place by --learn",
      args: {
        name: "package-id",
        description: "Package ID of the receipt to modify",
      },
    },
    {
      name: "--only-files",
      description: "List only files (not directories) in --files listing",
    },
    {
      name: "--only-dirs",
      description: "List only directories (not files) in --files listing",
    },
    {
      name: "--regexp",
      description:
        "Use regex to match package-id arguments, if an exact match isn't found",
    },
  ],
};

export default completionSpec;
