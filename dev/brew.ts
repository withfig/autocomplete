const generators: Record<string, Fig.Generator> = {
  servicesgenerators: {
    script: "brew services list | sed -e 's/ .*//' | tail -n +2",
    postProcess: function (out) {
      return out
        .split("\n")
        .filter((line) => !line.includes("unbound"))
        .map((line) => ({
          name: line,
          type: "option",
        }));
    },
  },
};

// brew info is equiv to brew abv. Everything but 'name' is shared.
const brewInfo = {
  description: "Display brief statistics for your Homebrew installation",
  args: {
    isVariadic: true,
    isOptional: true,
    name: "formula",
    description: "Formula or cask to summarize",
    generators: {
      script:
        "HBPATH=$(brew --repository); ls -1 $HBPATH/Library/Taps/homebrew/homebrew-core/Formula $HBPATH/Library/Taps/homebrew/homebrew-cask/Casks",
      postProcess: function (out) {
        return out.split("\n").map((formula) => {
          return {
            name: formula.replace(".rb", ""),
            description: "formula",
            icon: "🍺",
            priority:
              (formula[0] >= "0" && formula[0] <= "9") || formula[0] == "/"
                ? 0
                : 51,
          };
        });
      },
    },
  },
  options: [
    {
      name: "--analytics",
      description:
        "List global Homebrew analytics data or, if specified, installation and build error data for formula",
    },
    {
      name: "--days",
      description: "How many days of analytics data to retrieve",
      exclusiveOn: ["--analytics"],
      args: {},
    },
    {
      name: "--category",
      description: "How many days of analytics data to retrieve",
      exclusiveOn: ["--analytics"],
      args: {
        generators: {
          custom: async (ctx) => {
            // if anything provided after the subcommand does not begin with '-'
            // then a formula has been provided and we should provide info on it
            if (
              ctx.slice(2, ctx.length - 1).some((token) => token[0] !== "-")
            ) {
              return ["install", "install-on-request", "build-error"].map(
                (sugg) => ({
                  name: sugg,
                })
              );
            }

            // if no formulas are specified, then we should provide system info
            return ["cask-install", "os-version"].map((sugg) => ({
              name: sugg,
            }));
          },
        },
      },
    },
    {
      name: "--github",
      description: "Open the GitHub source page for formula in a browser",
    },
    {
      name: "--json",
      description: "Print a JSON representation",
    },
    {
      name: "--installed",
      exclusiveOn: ["--json"],
      description: "Print JSON of formulae that are currently installed",
    },
    {
      name: "--all",
      exclusiveOn: ["--json"],
      description: "Print JSON of all available formulae",
    },
    {
      name: ["-v", "--verbose"],
      description: "Show more verbose analytics data for formulae",
    },
    {
      name: "--formula",
      description: "Treat all named arguments as formulae",
    },
    {
      name: "--cash",
      description: "Treat all named arguments as casks",
    },
  ],
};

const completionSpec: Fig.Spec = {
  name: "brew",
  description: "Package manager for macOS",
  subcommands: [
    { name: "list", description: "List all installed formulae" },
    {
      name: "leaves",
      description:
        "List installed formulae that are not dependencies of another installed formula",
      options: [
        {
          name: ["-r", "--installed-on-request"],
          description: "Show manually installed formula.",
        },
        {
          name: ["-p", "--installed-as-dependency"],
          description: "Show installed formula as dependencies.",
        },
      ],
    },
    {
      name: "doctor",
      description: "Check your system for potential problems",
      options: [
        {
          name: "--list-checks",
          description: "List all audit methods.",
        },
        {
          name: ["-D", "--audit-debug"],
          description: "Enable debugging and profiling of audit methods.",
        },
      ],
    },
    {
      name: "info",
      ...brewInfo,
    },
    {
      name: "abv",
      ...brewInfo,
    },
    {
      name: "update",
      description: "Fetch the newest version of Homebrew and all formulae",
    },
    {
      name: "outdated",
      description:
        "List installed casks and formulae that have an updated version available",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Display any debugging information.",
        },
        {
          name: ["-q", "--quiet"],
          description: "List only the names of outdated kegs.",
        },
        {
          name: ["-v", "--verbose"],
          description: "Include detailed version information.",
        },
        {
          name: ["-h", "--help"],
          description: "Show help message for the outdated command.",
        },
        { name: "--cask", description: "List only outdated casks." },
        {
          name: "--fetch-HEAD",
          description:
            "Fetch the upstream repository to detect if the HEAD installation of the formula is outdated.",
        },
        { name: "--formula", description: "List only outdated formulae." },
        {
          name: "--greedy",
          description:
            "Print outdated casks with auto_updates or version :latest.",
        },
        { name: "--json", description: "Print output in JSON format." },
      ],
    },
    { name: "upgrade", description: "Upgrade outdated casks and outdated" },
    {
      name: "search",
      description:
        "Perform a substring search of cask tokens and formula names",
    },
    {
      name: "config",
      description: "Show Homebrew and system configuration info",
    },
    {
      name: "install",
      description: "Install <formula>",

      args: {
        isVariadic: true,
        name: "formula",
        description: "Formula or cask to install",
        generators: {
          script:
            "HBPATH=$(brew --repository); ls -1 $HBPATH/Library/Taps/homebrew/homebrew-core/Formula $HBPATH/Library/Taps/homebrew/homebrew-cask/Casks",
          postProcess: function (out) {
            return out.split("\n").map((formula) => {
              return {
                name: formula.replace(".rb", ""),
                description: "formula",
                icon: "🍺",
                priority:
                  (formula[0] >= "0" && formula[0] <= "9") || formula[0] == "/"
                    ? 0
                    : 51,
              };
            });
          },
        },
      },
    },
    {
      name: "uninstall",
      description: "Uninstall <formula>",
      args: {
        isVariadic: true,
        name: "formula",
        generators: {
          script: "brew list -1",
          postProcess: function (out) {
            return out
              .split("\n")
              .filter((line) => !line.includes("="))
              .map((formula) => {
                return {
                  name: formula,
                  icon: "🍺",
                  description: "Installed formula",
                };
              });
          },
        },
      },
    },
    {
      name: "cask",

      description:
        "Homebrew Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.",
      subcommands: [
        {
          name: "install",

          description: "Installs the given cask",
          args: {
            name: "cask",
            description: "Cask to install",
          },
        },
        {
          name: "uninstall",

          description: "Uninstalls the given cask",
          args: {
            isVariadic: true,
            generators: {
              script: "brew list -1 --cask",
              postProcess: function (out) {
                return out.split("\n").map((formula) => {
                  return {
                    name: formula,
                    icon: "🍺",
                    description: "Installed formula",
                  };
                });
              },
            },
          },
        },
      ],
    },
    {
      name: "cleanup",
      description:
        "Remove stale lock files and outdated downloads for all formulae and casks and remove old versions of installed formulae.",
      options: [
        {
          name: ["--prune", "--prune=all"],
          description: "Remove all cache files older than specified days.",
        },
        {
          name: ["-n", "--dry-run"],
          description:
            "Show what would be removed, but do not actually remove anything.",
        },
        {
          name: "-s",
          description:
            "Scrub the cache, including downloads for even the latest versions.",
        },
        {
          name: "--prune-prefix",
          description:
            "Only prune the symlinks and directories from the prefix and remove no other files.",
        },
      ],
      args: {
        isVariadic: true,
        generators: generators.servicesGenerator,
      },
    },
    {
      name: "services",
      description:
        "Manage background services with macOS' launchctl(1) daemon manager.",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Display any debugging information.",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress any warnings.",
        },
        {
          name: ["-v", "--verbose"],
          description: "Make some output more verbose.",
        },
        {
          name: ["-h", "--help"],
          description: "Get help with services command",
        },
      ],
      subcommands: [
        {
          name: "cleanup",

          description: "Remove all unused services.",
        },
        {
          name: "list",

          description: "List all services.",
        },
        {
          name: "run",

          description:
            "Run the service formula without registering to launch at login (or boot).",
          options: [
            {
              name: "--all",

              description: "Start all services",
            },
          ],
          args: {
            isVariadic: true,
            generators: generators.servicesGenerator,
          },
        },
        {
          name: "start",

          description:
            "Start the service formula immediately and register it to launch at login",
          options: [
            {
              name: "--all",

              description: "Start all services",
            },
          ],
          args: {
            isVariadic: true,
            generators: generators.servicesGenerator,
          },
        },
        {
          name: "stop",

          description:
            "Stop the service formula immediately and unregister it from launching at",
          options: [
            {
              name: "--all",

              description: "Start all services",
            },
          ],
          args: {
            isVariadic: true,
            generators: generators.servicesGenerator,
          },
        },
        {
          name: "restart",

          description:
            "Stop (if necessary) and start the service formula immediately and register it to launch at login (or boot).",
          options: [
            {
              name: "--all",

              description: "Start all services",
            },
          ],
          args: {
            isVariadic: true,
            generators: generators.servicesGenerator,
          },
        },
      ],
    },
    {
      name: "analytics",
      description: "Manages analytics preferences",
      subcommands: [
        {
          name: "on",
          description: "Turns on analytics",
        },
        {
          name: "off",
          description: "Turns off analytics",
        },
        {
          name: "regenerate-uuid",
          description: "Regenerate the UUID used for analytics",
        },
      ],
    },
    {
      name: "autoremove",
      description:
        "Uninstall formulae that were only installed as a dependency of another formula and are now no longer needed.",
      options: [
        {
          name: ["-n", "--dry-run"],
          description:
            "List what would be uninstalled, but do not actually uninstall anything.",
        },
      ],
    },
  ],
  options: [
    {
      name: "--version",
      description: "The current Homebrew version",
    },
  ],
};

export default completionSpec;
