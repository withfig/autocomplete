import { filepaths } from "@fig/autocomplete-generators";

const packages: Fig.Generator = {
  // only trigger when the token length transitions to or from 0
  trigger: (current, previous) =>
    current.length === 0 || (previous.length === 0 && current.length > 0),

  // have to use `custom` to skip running the script when length is 0
  custom: async (tokens, executeShellCommand) => {
    const finalToken = tokens[tokens.length - 1];
    if (finalToken.length === 0) {
      return [];
    }
    // Only lines matching the first character, delete characters after '/'
    const out = await executeShellCommand(
      `apt list | grep '^${finalToken[0]}' | sed 's#/.*##g'`
    );
    return out.split("\n").map((name) => ({
      name,
      description: "Package",
      icon: "📦",
      priority: 50,
    }));
  },
};

const installedPackages: Fig.Generator = {
  script: "apt list --installed",
  postProcess: function (a) {
    return a
      .trim()
      .split("\n")
      .map((b) => {
        return {
          name: b.substring(0, b.indexOf("/")),
          description: "Package",
          icon: "📦",
        };
      });
  },
};

const upgradablePackages: Fig.Generator = {
  script: "apt list --upgradable",
  postProcess: function (a) {
    return a
      .trim()
      .split("\n")
      .map((b) => {
        return {
          name: b.substring(0, b.indexOf("/")),
          description: "Package",
          icon: "📦",
        };
      });
  },
};

const globalOptions: Fig.Option[] = [
  {
    name: ["-s", "--simulate"],
    description:
      "Simulate running this command and show it's output, without actually changing anything",
  },
  {
    name: "-y",
    description: "Assume yes to all prompts",
  },
  {
    name: "--assume-no",
    description: "Assume no to all prompts",
  },
  {
    name: ["-d", "--download-only"],
    description:
      "For any operation that would download packages, download them, but do nothing else",
  },
  {
    name: "--no-download",
    description:
      "Do not download packages, attempt to use already downloaded packages",
  },
];

const completionSpec: Fig.Spec = {
  name: "apt",
  description: "Package manager for Debian-based Linux distributions",
  subcommands: [
    {
      name: "update",
      description: "Update the package database",
      options: globalOptions,
    },
    {
      name: "upgrade",
      description: "Install all available upgrades",
      args: {
        name: "package",
        description: "Package(s) to upgrade",
        isVariadic: true,
        isOptional: true,
        generators: upgradablePackages,
      },
      options: globalOptions,
    },
    {
      name: "full-upgrade",
      description:
        "Install available upgrades, removing currently installed packages if needed to upgrade the system as a whole",
      options: globalOptions,
    },
    {
      name: "install",
      description: "Install package(s)",
      args: {
        name: "package",
        description: "The package you want to install",
        isVariadic: true,
        generators: [packages, filepaths({ extensions: ["deb"] })],
      },
      options: [
        ...globalOptions,
        {
          name: "--reinstall",
          description: "Reinstall the package if it is already installed",
        },
        {
          name: ["-f", "--fix-broken"],
          description: "Attempt to fix broken packages",
        },
      ],
    },
    {
      name: "reinstall",
      description: "Reinstall package(s)",
      args: {
        name: "package",
        description: "The package you want to reinstall",
        isVariadic: true,
        generators: installedPackages,
      },
      options: globalOptions,
    },
    {
      name: "remove",
      description: "Remove package(s)",
      args: {
        name: "package",
        description: "The package you want to remove",
        isVariadic: true,
        generators: installedPackages,
      },
      options: [
        ...globalOptions,
        {
          name: ["-f", "--fix-broken"],
          description: "Attempt to fix broken packages",
        },
      ],
    },
    {
      name: "purge",
      description: "Remove package(s) and their configuration files",
      args: {
        name: "package",
        description: "The package you want to purge",
        isVariadic: true,
        generators: installedPackages,
      },
      options: globalOptions,
    },
    {
      name: ["autoremove", "auto-remove"],
      description: "Remove unused packages",
      options: globalOptions,
    },
    {
      name: "list",
      description: "List packages",
      options: [
        ...globalOptions,
        {
          name: "--installed",
          description: "List installed packages",
        },
        {
          name: "--upgradable",
          description: "List upgradable packages",
        },
      ],
    },
    {
      name: "search",
      description: "Search for packages",
      args: {
        name: "query",
        description: "The query to search for",
      },
      options: globalOptions,
    },
    {
      name: "show",
      description: "Show package details",
      args: {
        name: "package",
        description: "The package you want to show",
        generators: packages,
      },
      options: globalOptions,
    },
    {
      name: "satisfy",
      description: "Satisfy package dependencies",
      args: {
        name: "package",
        description: "The package you want to satisfy",
        isVariadic: true,
        generators: packages,
      },
      options: globalOptions,
    },
    {
      name: "clean",
      description: "Remove downloaded package files",
      options: globalOptions,
    },
    {
      name: "edit-sources",
      description: "Edit the list of package sources",
      options: globalOptions,
    },
    {
      // docs for this weren't the greatest, some descriptions might be slightly (or very) wrong.
      name: "source",
      description: "Fetch package source files",
      args: {
        name: "package",
        description: "The package you want to get source files for",
        isVariadic: true,
        generators: packages,
      },
      options: [
        ...globalOptions,
        {
          name: "--compile",
          description:
            "Compile the package to a binary using dpkg-buildpackage",
        },
        {
          name: "--only-source",
          // no idea how this works
        },
        {
          name: "--host-architecture",
          description: "The architecture to build for",
          args: {
            name: "architecture",
            description: "The architecture to build for",
          },
        },
      ],
    },
    {
      name: "build-dep",
      description:
        "Install/remove packages in an attempt to satisfy the build dependencies for a source package",
      args: {
        name: "package",
        description: "The package you want to build dependencies for",
        generators: packages,
      },
      options: [
        ...globalOptions,
        {
          name: "--host-architecture",
          description: "The architecture to build for",
          args: {
            name: "architecture",
            description: "The architecture to build for",
          },
        },
        {
          name: "--only-source",
        },
      ],
    },
    {
      name: "download",
      description: "Download package binary into the current directory",
      args: {
        name: "package",
        description: "The package you want to download",
        generators: packages,
      },
      options: globalOptions,
    },
    {
      name: ["autoclean", "auto-clean"],
      description:
        "Like clean, but only removes package files that can no longer be downloaded",
      options: globalOptions,
    },
    {
      name: "changelog",
      description: "Show the changelog for a package",
      args: {
        name: "package",
        description: "The package you want to show the changelog for",
        generators: packages,
        isVariadic: true,
      },
      options: globalOptions,
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help message and exit",
    },
    {
      name: ["-v", "--version"],
      description: "Print version information and exit",
    },
  ],
};

export default completionSpec;
