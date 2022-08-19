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
    }));
  },
};

const installedPackages: Fig.Generator = {
  script: "apt list --installed",
  postProcess: function (a) {
    return a.split("\n").map((b) => {
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
    return a.split("\n").map((b) => {
      return {
        name: b.substring(0, b.indexOf("/")),
        description: "Package",
        icon: "📦",
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "apt",
  description: "Package manager for Debian-based Linux distributions",
  subcommands: [
    {
      name: "update",
      description: "Update the package database",
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
    },
    {
      name: "full-upgrade",
      description:
        "Install available upgrades, removing currently installed packages if needed to upgrade the system as a whole",
    },
    {
      name: "install",
      description: "Install package(s)",
      args: {
        name: "package",
        description: "The package you want to install",
        isVariadic: true,
        generators: packages,
      },
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
    },
    {
      name: "autoremove",
      description: "Remove unused packages",
    },
    {
      name: "list",
      description: "List packages",
      options: [
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
    },
    {
      name: "show",
      description: "Show package details",
      args: {
        name: "package",
        description: "The package you want to show",
        generators: packages,
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help message and exit",
    },
  ],
};

export default completionSpec;
