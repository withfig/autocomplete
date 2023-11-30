interface PostProcessPkgFilenames {
  pathPrefix?: string;
}

const postProcessPkgFilenames =
  (options: PostProcessPkgFilenames = {}): Fig.Generator["postProcess"] =>
  (out) => {
    const { pathPrefix = "" } = options;
    const names = new Set<string>();
    out.split("\n").map((line) => {
      if (line.startsWith(pathPrefix)) {
        const result = line.replace(pathPrefix, "").split("/")[0];
        if (result) {
          names.add(result + "/");
        }
      }
    });

    const suggestions = [];
    names.forEach((name) => suggestions.push({ name }));

    return suggestions;
  };

export const pkgutilGenerators: Record<string, Fig.Generator> = {
  // BOM files
  bom: {
    script: ["find", ".", "-type", "f", "-name", "*.bom", "-maxdepth", "1"],
    postProcess: function (out) {
      return out.split("\n").map((filepath) => ({
        name: filepath.replace("./", ""),
      }));
    },
  },
  // Installed package ids
  packageIds: {
    script: ["pkgutil", "--pkgs"],
    splitOn: "\n",
  },
  // .pkg files
  pkgs: {
    script: ["find", ".", "-type", "f", "-name", "*.pkg", "-maxdepth", "1"],
    postProcess: function (out) {
      return out.split("\n").map((filepath) => ({
        name: filepath.replace("./", ""),
      }));
    },
  },
  // group ids
  groupIds: {
    script: ["pkgutil", "--groups"],
    splitOn: "\n",
  },
  // filenames within a package
  pkgFilenames: {
    custom: async (tokens, executeShellCommand) => {
      const editPkgIndex = tokens.indexOf("--edit-pkg");
      const pkgIdIndex = editPkgIndex + 1;
      if (editPkgIndex === -1 || pkgIdIndex >= tokens.length) {
        return [];
      }

      const pkgId = tokens[pkgIdIndex];
      const pathPrefix = tokens[tokens.length - 1];
      const pp = postProcessPkgFilenames({ pathPrefix });
      return pp(
        (
          await executeShellCommand({
            command: "pkgutil",
            args: ["--files", pkgId],
          })
        ).stdout,
        tokens
      );
    },
    trigger: "/",
  },
};

const completionSpec: Fig.Spec = {
  name: "pkgutil",
  description: "Query and manipulate for macOS Installer packages and receipts",
  subcommands: [
    {
      name: ["--packages", "--pkgs"],
      description: "List all installed package IDs on the specified --volume",
    },
    {
      name: "--pkgs-plist",
      description:
        "List all installed package IDs, in Mac OS X plist(5) format, on the specified --volume",
    },
    {
      name: "--files",
      description: "List all of the files installed under the package-id",
      args: {
        name: "package-id",
        description: "The package ID to list the files of",
        generators: pkgutilGenerators.packageIds,
      },
    },
    {
      name: "--export-plist",
      description:
        "Print all receipt information about the specified package-id in Mac OS X plist(5) format",
      args: {
        name: "package-id",
        description: "The package ID to export the plist of",
        generators: pkgutilGenerators.packageIds,
      },
    },
    {
      name: "--verify",
      description: "Run repair_packages(8) to verify the specified package-id",
      args: {
        name: "package-id",
        description: "The package ID to verify",
        generators: pkgutilGenerators.packageIds,
      },
    },
    {
      name: "--repair",
      description: "Run repair_packages(8) to repair the specified package-id",
      args: {
        name: "package-id",
        description: "The package ID to repair",
        generators: pkgutilGenerators.packageIds,
      },
    },
    {
      name: "--pkg-info",
      description: "Print extended information about the specified package-id",
      args: {
        name: "package-id",
        description: "The package ID to print the info of",
        generators: pkgutilGenerators.packageIds,
      },
    },
    {
      name: "--pkg-info-plist",
      description:
        "Print extended information about the specified package-id in Mac OS X plist(5) format",
      args: {
        name: "package-id",
        description: "The package ID to print the info of",
        generators: pkgutilGenerators.packageIds,
      },
    },
    {
      name: "--forget",
      description:
        "Discard all receipt data about package-id, but don't touch installed files",
      args: {
        name: "package-id",
        description: "The package ID to forget",
        generators: pkgutilGenerators.packageIds,
      },
    },
    {
      name: "--learn",
      description:
        "Update the ACLs of the given path in the receipt identified by --edit-pkg",
      args: {
        name: "path",
        description: "The path to update ACLs on",
        generators: pkgutilGenerators.pkgFilenames,
      },
    },
    {
      name: "--pkg-groups",
      description:
        "List all of the package groups this package-id is a member of",
      args: {
        name: "package-id",
        description: "The package ID to list the groups of",
        generators: pkgutilGenerators.packageIds,
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
        generators: pkgutilGenerators.groupIds,
      },
    },
    {
      name: "--file-info",
      description: "Show the metadata known about path",
      args: {
        name: "path",
        description: "The path to show the metadata of",
        template: "filepaths",
      },
    },
    {
      name: "--file-info-plist",
      description:
        "Show the metadata known about path in Mac OS X plist(5) format",
      args: {
        name: "path",
        description: "The path to show the metadata of",
        template: "filepaths",
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
          template: "filepaths",
        },
        {
          name: "dir-path",
          description: "The path to the directory to expand the package into",
          template: "folders",
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
          template: "folders",
        },
        {
          name: "pkg-path",
          description: "The path to the flat package to create",
          template: "filepaths",
        },
      ],
    },
    {
      name: "--bom",
      description:
        "Extract any BOM files from the flat pkg at path into /tmp and return the filename(s)",
      args: {
        name: "path",
        description: "The path to the flat package to extract the BOM from",
        generators: pkgutilGenerators.bom,
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
        generators: pkgutilGenerators.pkgs,
      },
    },
    {
      name: "--check-signature",
      description:
        "Check the validity and trust of the signature on the package at pkg-path",
      args: {
        name: "pkg-path",
        description: "The path to the flat package to check the signature of",
        generators: pkgutilGenerators.pkgs,
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
        template: "folders",
      },
    },
    {
      name: "--edit-pkg",
      description:
        "Specifies an existing receipt to be modified in-place by --learn",
      args: {
        name: "package-id",
        description: "Package ID of the receipt to modify",
        generators: pkgutilGenerators.packageIds,
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
    {
      name: "--pkgs",
      description:
        "List all installed package IDs, optionally matching kwarg REGEXP, on the specified --volume",
      requiresSeparator: true,
      args: {
        name: "REGEXP",
        description: "Regular expression",
      },
    },
  ],
};

export default completionSpec;
