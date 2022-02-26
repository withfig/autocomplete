import { filepaths } from "@fig/autocomplete-generators";

const testList: Fig.Generator = {
  script: function (context) {
    const base = context[context.length - 1];
    // allow split by single colon so that it triggers on a::b:
    const indexIntoModPath = Math.max(base.split(/::?/).length, 1);
    // split by :: so that tokens with a single colon are allowed
    const moduleTokens = base.split("::");
    const lastModule = moduleTokens.pop();
    // check if the token has a : on the end
    const hasColon = lastModule[lastModule.length - 1] == ":" ? ":" : "";
    return `cargo t -- --list | awk '/: test$/ { print substr($1, 1, length($1) - 1) }' | awk -F "::" '{ print "${hasColon}"$${indexIntoModPath},int( NF / ${indexIntoModPath} ) }'`;
  },
  postProcess: function (out) {
    return [...new Set(out.split("\n"))].map((line) => {
      const [display, last] = line.split(" ");
      const lastModule = parseInt(last);
      const displayName = display.replaceAll(":", "");
      const name = displayName.length
        ? `${display}${lastModule ? "" : "::"}`
        : "";
      return { name, displayName };
    });
  },
  trigger: ":",
  getQueryTerm: ":",
};

const binList: Fig.Generator = {
  script: function () {
    return `cargo read-manifest`;
  },
  postProcess: function (data: string) {
    const manifest = JSON.parse(data);
    return manifest.targets
      ? manifest.targets
          .filter(({ kind }) => kind.includes("bin"))
          .map(({ name }) => ({ name }))
      : [];
  },
};

const searchGenerator: Fig.Generator = {
  script: function (context) {
    if (context[context.length - 1] === "") return "";
    const searchTerm = context[context.length - 1];
    return `cargo search "${searchTerm}" | \grep -E "^\\w"`;
  },
  postProcess: function (out) {
    return out.split("\n").map((line) => {
      const regex = /([a-zA-Z0-9-_]+)\s=\s"(.*)"\s+#\s(.*)/;
      const matches = regex.exec(line);
      return {
        name: matches[1],
        description: `v${matches[2]} - ${matches[3]}`,
      };
    });
  },
};

const featuresGenerator: Fig.Generator = {
  script: "cargo read-manifest",
  postProcess: function (data: string) {
    const manifest = JSON.parse(data);
    return Object.keys(manifest.features || {}).map((name) => ({
      name,
      description: `Features: [${manifest.features[name].join(", ")}]`,
    }));
  },
};

const targetGenerator: Fig.Generator = {
  script: "rustc --print target-list",
  postProcess: function (data: string) {
    return data
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((name) => ({
        name,
      }));
  },
};

const rustEditions: Fig.Suggestion[] = [
  { name: "2015", description: "2015 edition" },
  { name: "2018", description: "2018 edition" },
  { name: "2021", description: "2021 edition" },
];

const vcsOptions: Fig.Suggestion[] = [
  {
    name: "git",
    icon: "fig://icon?type=git",
    description: "Initialize with Git",
  },
  {
    name: "hg",
    description: "Initialize with Mercurial",
  },
  {
    name: "pijul",
    description: "Initialize with Pijul",
  },
  {
    name: "fossil",
    icon: "fig://template?color=818181&badge=🦴",
    description: "Initialize with Fossil",
  },
  {
    name: "none",
    description: "Initialize with no VCS",
  },
];

const completionSpec: Fig.Spec = {
  name: "cargo",
  icon: "📦",
  description: "CLI Interface for Cargo",
  subcommands: [
    {
      name: "bench",
      icon: "📊",
      description: "Execute all benchmarks of a local package",
      options: [
        {
          name: "--bin",
          description: "Benchmark only the specified binary",
          isRepeatable: true,
          args: {
            name: "bin",
            generators: binList,
            isVariadic: true,
          },
        },
        {
          name: "--example",
          description: "Benchmark only the specified example",
          isRepeatable: true,
          args: {
            name: "example",
            isVariadic: true,
          },
        },
        {
          name: "--test",
          description: "Benchmark only the specified test target",
          isRepeatable: true,
          args: {
            name: "test",
            generators: testList,
            isVariadic: true,
          },
        },
        {
          name: "--bench",
          description: "Benchmark only the specified bench target",
          isRepeatable: true,
          args: {
            name: "bench",
            isVariadic: true,
          },
        },
        {
          name: ["-p", "--package"],
          description: "Package to run benchmarks for",
          isRepeatable: true,
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: "--exclude",
          description: "Exclude packages from the benchmark",
          isRepeatable: true,
          args: {
            name: "exclude",
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of parallel jobs, defaults to # of CPUs",
          args: {
            name: "jobs",
          },
        },
        {
          name: "--profile",
          description: "Build artifacts with the specified profile",
          args: {
            name: "profile",
          },
        },
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,
            isVariadic: true,
          },
        },
        {
          name: "--target",
          description: "Build for the target triple",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "target-dir",
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--message-format",
          description: "Error format",
          isRepeatable: true,
          args: {
            name: "message-format",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["auto", "always", "never"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--lib",
          description: "Benchmark only this package's library",
        },
        {
          name: "--bins",
          description: "Benchmark all binaries",
        },
        {
          name: "--examples",
          description: "Benchmark all examples",
        },
        {
          name: "--tests",
          description: "Benchmark all tests",
        },
        {
          name: "--benches",
          description: "Benchmark all benches",
        },
        {
          name: "--all-targets",
          description: "Benchmark all targets",
        },
        {
          name: "--no-run",
          description: "Compile, but don't run benchmarks",
        },
        {
          name: "--workspace",
          description: "Benchmark all packages in the workspace",
        },
        {
          name: "--all",
          description: "Alias for --workspace (deprecated)",
          hidden: true,
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--ignore-rust-version",
          description: "Ignore `rust-version` specification in packages",
        },
        {
          name: "--no-fail-fast",
          description: "Run all benchmarks regardless of failure",
        },
        {
          name: "--unit-graph",
          description: "Output build graph in JSON (unstable)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: [
        {
          name: "BENCHNAME",
        },
        {
          name: "args",
          isVariadic: true,
        },
      ],
    },
    {
      name: ["build", "b"],
      icon: "📦",
      description: "Compile a local package and all of its dependencies",
      options: [
        {
          name: ["-p", "--package"],
          description: "Package to build (see `cargo help pkgid`)",
          isRepeatable: true,
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: "--exclude",
          description: "Exclude packages from the build",
          isRepeatable: true,
          args: {
            name: "exclude",
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of parallel jobs, defaults to # of CPUs",
          args: {
            name: "jobs",
          },
        },
        {
          name: "--bin",
          description: "Build only the specified binary",
          isRepeatable: true,
          args: {
            name: "bin",
            generators: binList,
            isVariadic: true,
          },
        },
        {
          name: "--example",
          description: "Build only the specified example",
          isRepeatable: true,
          args: {
            name: "example",
            isVariadic: true,
          },
        },
        {
          name: "--test",
          description: "Build only the specified test target",
          isRepeatable: true,
          args: {
            name: "test",
            generators: testList,
            isVariadic: true,
          },
        },
        {
          name: "--bench",
          description: "Build only the specified bench target",
          isRepeatable: true,
          args: {
            name: "bench",
            isVariadic: true,
          },
        },
        {
          name: "--profile",
          description: "Build artifacts with the specified profile",
          args: {
            name: "profile",
          },
        },
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,
            isVariadic: true,
          },
        },
        {
          name: "--target",
          description: "Build for the target triple",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "target-dir",
          },
        },
        {
          name: "--out-dir",
          description: "Copy final artifacts to this directory (unstable)",
          args: {
            name: "out-dir",
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--message-format",
          description: "Error format",
          isRepeatable: true,
          args: {
            name: "message-format",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["auto", "always", "never"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--workspace",
          description: "Build all packages in the workspace",
        },
        {
          name: "--all",
          description: "Alias for --workspace (deprecated)",
          hidden: true,
        },
        {
          name: "--lib",
          description: "Build only this package's library",
        },
        {
          name: "--bins",
          description: "Build all binaries",
        },
        {
          name: "--examples",
          description: "Build all examples",
        },
        {
          name: "--tests",
          description: "Build all tests",
        },
        {
          name: "--benches",
          description: "Build all benches",
        },
        {
          name: "--all-targets",
          description: "Build all targets",
        },
        {
          name: ["-r", "--release"],
          description: "Build artifacts in release mode, with optimizations",
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--ignore-rust-version",
          description: "Ignore `rust-version` specification in packages",
        },
        {
          name: "--build-plan",
          description: "Output the build plan in JSON (unstable)",
        },
        {
          name: "--unit-graph",
          description: "Output build graph in JSON (unstable)",
        },
        {
          name: "--future-incompat-report",
          description:
            "Outputs a future incompatibility report at the end of the build",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: ["check", "c"],
      icon: "🛠",
      description:
        "Check a local package and all of its dependencies for errors",
      options: [
        {
          name: ["-p", "--package"],
          description: "Package(s) to check",
          isRepeatable: true,
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: "--exclude",
          description: "Exclude packages from the check",
          isRepeatable: true,
          args: {
            name: "exclude",
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of parallel jobs, defaults to # of CPUs",
          args: {
            name: "jobs",
          },
        },
        {
          name: "--bin",
          description: "Check only the specified binary",
          isRepeatable: true,
          args: {
            name: "bin",
            generators: binList,
            isVariadic: true,
          },
        },
        {
          name: "--example",
          description: "Check only the specified example",
          isRepeatable: true,
          args: {
            name: "example",
            isVariadic: true,
          },
        },
        {
          name: "--test",
          description: "Check only the specified test target",
          isRepeatable: true,
          args: {
            name: "test",
            generators: testList,
            isVariadic: true,
          },
        },
        {
          name: "--bench",
          description: "Check only the specified bench target",
          isRepeatable: true,
          args: {
            name: "bench",
            isVariadic: true,
          },
        },
        {
          name: "--profile",
          description: "Check artifacts with the specified profile",
          args: {
            name: "profile",
          },
        },
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,
            isVariadic: true,
          },
        },
        {
          name: "--target",
          description: "Check for the target triple",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "target-dir",
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--message-format",
          description: "Error format",
          isRepeatable: true,
          args: {
            name: "message-format",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["auto", "always", "never"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--workspace",
          description: "Check all packages in the workspace",
        },
        {
          name: "--all",
          description: "Alias for --workspace (deprecated)",
          hidden: true,
        },
        {
          name: "--lib",
          description: "Check only this package's library",
        },
        {
          name: "--bins",
          description: "Check all binaries",
        },
        {
          name: "--examples",
          description: "Check all examples",
        },
        {
          name: "--tests",
          description: "Check all tests",
        },
        {
          name: "--benches",
          description: "Check all benches",
        },
        {
          name: "--all-targets",
          description: "Check all targets",
        },
        {
          name: ["-r", "--release"],
          description: "Check artifacts in release mode, with optimizations",
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--ignore-rust-version",
          description: "Ignore `rust-version` specification in packages",
        },
        {
          name: "--unit-graph",
          description: "Output build graph in JSON (unstable)",
        },
        {
          name: "--future-incompat-report",
          description:
            "Outputs a future incompatibility report at the end of the build",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "clean",
      icon: "🛠",
      description: "Remove artifacts that cargo has generated in the past",
      options: [
        {
          name: ["-p", "--package"],
          description: "Package to clean artifacts for",
          isRepeatable: true,
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--target",
          description: "Target triple to clean output for",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "target-dir",
          },
        },
        {
          name: "--profile",
          description: "Clean artifacts of the specified profile",
          args: {
            name: "profile",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["auto", "always", "never"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-r", "--release"],
          description: "Whether or not to clean release artifacts",
        },
        {
          name: "--doc",
          description:
            "Whether or not to clean just the documentation directory",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "config",
      icon: "⚙️",
      description: "Inspect configuration values",
      subcommands: [
        {
          name: "get",
          options: [
            {
              name: "--format",
              description: "Display format",
              args: {
                name: "format",
                suggestions: ["toml", "json", "json-value"],
              },
            },
            {
              name: "--merged",
              description: "Whether or not to merge config values",
              args: {
                name: "merged",

                suggestions: ["yes", "no"],
              },
            },
            {
              name: "--color",
              description: "Coloring: auto, always, never",
              args: {
                name: "color",
                suggestions: ["auto", "always", "never"],
              },
            },
            {
              name: "--config",
              description: "Override a configuration value (unstable)",
              isRepeatable: true,
              args: {
                name: "config",
              },
            },
            {
              name: "-Z",
              description:
                "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
              isRepeatable: true,
              args: {
                name: "unstable-features",
              },
            },
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: "--show-origin",
              description: "Display where the config value is defined",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
            {
              name: ["-v", "--verbose"],
              description:
                "Use verbose output (-vv very verbose/build.rs output)",
              isRepeatable: true,
            },
            {
              name: "--frozen",
              description: "Require Cargo.lock and cache are up to date",
            },
            {
              name: "--locked",
              description: "Require Cargo.lock is up to date",
            },
            {
              name: "--offline",
              description: "Run without accessing the network",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          options: [
            {
              name: "--color",
              description: "Coloring: auto, always, never",
              args: {
                name: "color",
                suggestions: ["auto", "always", "never"],
              },
            },
            {
              name: "--config",
              description: "Override a configuration value (unstable)",
              isRepeatable: true,
              args: {
                name: "config",
              },
            },
            {
              name: "-Z",
              description:
                "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
              isRepeatable: true,
              args: {
                name: "unstable-features",
              },
            },
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
            {
              name: ["-v", "--verbose"],
              description:
                "Use verbose output (-vv very verbose/build.rs output)",
              isRepeatable: true,
            },
            {
              name: "--frozen",
              description: "Require Cargo.lock and cache are up to date",
            },
            {
              name: "--locked",
              description: "Require Cargo.lock is up to date",
            },
            {
              name: "--offline",
              description: "Run without accessing the network",
            },
          ],
          args: {
            name: "subcommand",
          },
        },
      ],
      options: [
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["auto", "always", "never"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: ["doc", "d"],
      icon: "📄",
      description: "Build a package's documentation",
      options: [
        {
          name: ["-p", "--package"],
          description: "Package to document",
          isRepeatable: true,
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: "--exclude",
          description: "Exclude packages from the build",
          isRepeatable: true,
          args: {
            name: "exclude",
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of parallel jobs, defaults to # of CPUs",
          args: {
            name: "jobs",
          },
        },
        {
          name: "--bin",
          description: "Document only the specified binary",
          isRepeatable: true,
          args: {
            name: "bin",
            generators: binList,
            isVariadic: true,
          },
        },
        {
          name: "--example",
          description: "Document only the specified example",
          isRepeatable: true,
          args: {
            name: "example",
            isVariadic: true,
          },
        },
        {
          name: "--profile",
          description: "Build artifacts with the specified profile",
          args: {
            name: "profile",
          },
        },
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,

            isVariadic: true,
          },
        },
        {
          name: "--target",
          description: "Build for the target triple",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "target-dir",
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--message-format",
          description: "Error format",
          isRepeatable: true,
          args: {
            name: "message-format",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--open",
          description: "Opens the docs in a browser after the operation",
        },
        {
          name: "--workspace",
          description: "Document all packages in the workspace",
        },
        {
          name: "--all",
          description: "Alias for --workspace (deprecated)",
          hidden: true,
        },
        {
          name: "--no-deps",
          description: "Don't build documentation for dependencies",
        },
        {
          name: "--document-private-items",
          description: "Document private items",
        },
        {
          name: "--lib",
          description: "Document only this package's library",
        },
        {
          name: "--bins",
          description: "Document all binaries",
        },
        {
          name: "--examples",
          description: "Document all examples",
        },
        {
          name: ["-r", "--release"],
          description: "Build artifacts in release mode, with optimizations",
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--ignore-rust-version",
          description: "Ignore `rust-version` specification in packages",
        },
        {
          name: "--unit-graph",
          description: "Output build graph in JSON (unstable)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "fetch",
      icon: "📦",
      description: "Fetch dependencies of a package from the network",
      options: [
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--target",
          description: "Fetch dependencies for the target triple",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "fix",
      icon: "🔧",
      description: "Automatically fix lint warnings reported by rustc",
      options: [
        {
          name: ["-p", "--package"],
          description: "Package(s) to fix",
          isRepeatable: true,
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: "--exclude",
          description: "Exclude packages from the fixes",
          isRepeatable: true,
          args: {
            name: "exclude",
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of parallel jobs, defaults to # of CPUs",
          args: {
            name: "jobs",
          },
        },
        {
          name: "--bin",
          description: "Fix only the specified binary",
          isRepeatable: true,
          args: {
            name: "bin",
            generators: binList,
            isVariadic: true,
          },
        },
        {
          name: "--example",
          description: "Fix only the specified example",
          isRepeatable: true,
          args: {
            name: "example",
            isVariadic: true,
          },
        },
        {
          name: "--test",
          description: "Fix only the specified test target",
          isRepeatable: true,
          args: {
            name: "test",
            generators: testList,
            isVariadic: true,
          },
        },
        {
          name: "--bench",
          description: "Fix only the specified bench target",
          isRepeatable: true,
          args: {
            name: "bench",
            isVariadic: true,
          },
        },
        {
          name: "--profile",
          description: "Build artifacts with the specified profile",
          args: {
            name: "profile",
          },
        },
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,
            isVariadic: true,
          },
        },
        {
          name: "--target",
          description: "Fix for the target triple",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "target-dir",
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--message-format",
          description: "Error format",
          isRepeatable: true,
          args: {
            name: "message-format",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--workspace",
          description: "Fix all packages in the workspace",
        },
        {
          name: "--all",
          description: "Alias for --workspace (deprecated)",
          hidden: true,
        },
        {
          name: "--lib",
          description: "Fix only this package's library",
        },
        {
          name: "--bins",
          description: "Fix all binaries",
        },
        {
          name: "--examples",
          description: "Fix all examples",
        },
        {
          name: "--tests",
          description: "Fix all tests",
        },
        {
          name: "--benches",
          description: "Fix all benches",
        },
        {
          name: "--all-targets",
          description: "Fix all targets (default)",
        },
        {
          name: ["-r", "--release"],
          description: "Fix artifacts in release mode, with optimizations",
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--broken-code",
          description: "Fix code even if it already has compiler errors",
        },
        {
          name: "--edition",
          description: "Fix in preparation for the next edition",
        },
        {
          name: "--edition-idioms",
          description: "Fix warnings to migrate to the idioms of an edition",
        },
        {
          name: "--allow-no-vcs",
          description: "Fix code even if a VCS was not detected",
        },
        {
          name: "--allow-dirty",
          description: "Fix code even if the working directory is dirty",
        },
        {
          name: "--allow-staged",
          description:
            "Fix code even if the working directory has staged changes",
        },
        {
          name: "--ignore-rust-version",
          description: "Ignore `rust-version` specification in packages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "generate-lockfile",
      icon: "📦",
      description: "Generate the lockfile for a package",
      options: [
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "git-checkout",
      icon: "📦",
      description: "This subcommand has been removed",
      hidden: true,
      options: [
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "init",
      icon: "📦",
      description: "Create a new cargo package in an existing directory",
      options: [
        {
          name: "--registry",
          description: "Registry to use",
          args: {
            name: "registry",
          },
        },
        {
          name: "--vcs",
          description:
            "Initialize a new repository for the given version control system (git, hg, pijul, or fossil) or do not initialize any version control at all (none), overriding a global configuration",
          args: {
            name: "vcs",
            suggestions: vcsOptions,
          },
        },
        {
          name: "--edition",
          description: "Edition to set for the crate generated",
          args: {
            name: "edition",
            suggestions: rustEditions,
          },
        },
        {
          name: "--name",
          description:
            "Set the resulting package name, defaults to the directory name",
          args: {
            name: "name",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--bin",
          description: "Use a binary (application) template [default]",
        },
        {
          name: "--lib",
          description: "Use a library template",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "path",
      },
    },
    {
      name: "install",
      icon: "📦",
      description:
        "Install a Rust binary. Default location is $HOME/.cargo/bin",
      options: [
        {
          name: "--version",
          description: "Specify a version to install",
          args: {
            name: "version",
          },
        },
        {
          name: "--git",
          description: "Git URL to install the specified crate from",
          exclusiveOn: ["--path", "--index", "--registry"],
          args: {
            name: "git",
          },
        },
        {
          name: "--branch",
          description: "Branch to use when installing from git",
          args: {
            name: "branch",
          },
        },
        {
          name: "--tag",
          description: "Tag to use when installing from git",
          args: {
            name: "tag",
          },
        },
        {
          name: "--rev",
          description: "Specific commit to use when installing from git",
          args: {
            name: "rev",
          },
        },
        {
          name: "--path",
          description: "Filesystem path to local crate to install",
          exclusiveOn: ["--git", "--index", "--registry"],
          args: {
            name: "path",
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of parallel jobs, defaults to # of CPUs",
          args: {
            name: "jobs",
          },
        },
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,
            isVariadic: true,
          },
        },
        {
          name: "--profile",
          description: "Install artifacts with the specified profile",
          args: {
            name: "profile",
          },
        },
        {
          name: "--bin",
          description: "Install only the specified binary",
          isRepeatable: true,
          args: {
            name: "bin",
            generators: binList,
            isVariadic: true,
          },
        },
        {
          name: "--example",
          description: "Install only the specified example",
          isRepeatable: true,
          args: {
            name: "example",
            isVariadic: true,
          },
        },
        {
          name: "--target",
          description: "Build for the target triple",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "target-dir",
          },
        },
        {
          name: "--root",
          description: "Directory to install packages into",
          args: {
            name: "root",
          },
        },
        {
          name: "--index",
          description: "Registry index to install from",
          exclusiveOn: ["--git", "--path", "--registry"],
          args: {
            name: "index",
          },
        },
        {
          name: "--registry",
          description: "Registry to use",
          exclusiveOn: ["--git", "--path", "--index"],
          args: {
            name: "registry",
          },
        },
        {
          name: "--message-format",
          description: "Error format",
          isRepeatable: true,
          args: {
            name: "message-format",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--list",
          description: "List all installed packages and their versions",
        },
        {
          name: ["-f", "--force"],
          description: "Force overwriting existing crates or binaries",
        },
        {
          name: "--no-track",
          description: "Do not save tracking information",
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--debug",
          description: "Build in debug mode instead of release mode",
        },
        {
          name: "--bins",
          description: "Install all binaries",
        },
        {
          name: "--examples",
          description: "Install all examples",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "crate",
        generators: searchGenerator,
        debounce: true,
        isVariadic: true,
      },
    },
    {
      name: "locate-project",
      icon: "📦",
      description:
        "Print a JSON representation of a Cargo.toml file's location",
      options: [
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--message-format",
          description: "Output representation [possible values: json, plain]",
          args: {
            name: "message-format",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--workspace",
          description: "Locate Cargo.toml of the workspace root",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "login",
      icon: "📦",
      description:
        "Save an api token from the registry locally. If token is not specified, it will be read from stdin",
      options: [
        {
          name: "--registry",
          description: "Registry to use",
          args: {
            name: "registry",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "token",
      },
    },
    {
      name: "logout",
      icon: "📦",
      description: "Remove an API token from the registry locally",
      options: [
        {
          name: "--registry",
          description: "Registry to use",
          args: {
            name: "registry",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "metadata",
      icon: "📦",
      description:
        "Output the resolved dependencies of a package, the concrete used versions including overrides, in machine-readable format",
      options: [
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,
            isVariadic: true,
          },
        },
        {
          name: "--filter-platform",
          description:
            "Only include resolve dependencies matching the given target-triple",
          isRepeatable: true,
          args: {
            name: "filter-platform",
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--format-version",
          description: "Format version",
          args: {
            name: "format-version",
            suggestions: ["1"],
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--no-deps",
          description:
            "Output information only about the workspace members and don't fetch dependencies",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "new",
      icon: "📦",
      description: "Create a new cargo package at <path>",
      options: [
        {
          name: "--registry",
          description: "Registry to use",
          args: {
            name: "registry",
          },
        },
        {
          name: "--vcs",
          description:
            "Initialize a new repository for the given version control system (git, hg, pijul, or fossil) or do not initialize any version control at all (none), overriding a global configuration",
          args: {
            name: "vcs",
            suggestions: vcsOptions,
          },
        },
        {
          name: "--edition",
          description: "Edition to set for the crate generated",
          args: {
            name: "edition",

            suggestions: rustEditions,
          },
        },
        {
          name: "--name",
          description:
            "Set the resulting package name, defaults to the directory name",
          args: {
            name: "name",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--bin",
          description: "Use a binary (application) template [default]",
        },
        {
          name: "--lib",
          description: "Use a library template",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "owner",
      icon: "📦",
      description: "Manage the owners of a crate on the registry",
      options: [
        {
          name: ["-a", "--add"],
          description: "Name of a user or team to invite as an owner",
          isRepeatable: true,
          args: {
            name: "add",
          },
        },
        {
          name: ["-r", "--remove"],
          description: "Name of a user or team to remove as an owner",
          isRepeatable: true,
          args: {
            name: "remove",
          },
        },
        {
          name: "--index",
          description: "Registry index to modify owners for",
          args: {
            name: "index",
          },
        },
        {
          name: "--token",
          description: "API token to use when authenticating",
          args: {
            name: "token",
          },
        },
        {
          name: "--registry",
          description: "Registry to use",
          args: {
            name: "registry",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-l", "--list"],
          description: "List owners of a crate",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "crate",
      },
    },
    {
      name: "package",
      icon: "📦",
      description: "Assemble the local package into a distributable tarball",
      options: [
        {
          name: "--target",
          description: "Build for the target triple",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "target-dir",
          },
        },
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,
            isVariadic: true,
          },
        },
        {
          name: ["-p", "--package"],
          description: "Package(s) to assemble",
          isRepeatable: true,
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: "--exclude",
          description: "Don't assemble specified packages",
          isRepeatable: true,
          args: {
            name: "exclude",
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of parallel jobs, defaults to # of CPUs",
          args: {
            name: "jobs",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-l", "--list"],
          description: "Print files included in a package without making one",
        },
        {
          name: "--no-verify",
          description: "Don't verify the contents by building them",
        },
        {
          name: "--no-metadata",
          description: "Ignore warnings about a lack of human-usable metadata",
        },
        {
          name: "--allow-dirty",
          description: "Allow dirty working directories to be packaged",
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--workspace",
          description: "Assemble all packages in the workspace",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "pkgid",
      icon: "📦",
      description: "Print a fully qualified package specification",
      options: [
        {
          name: ["-p", "--package"],
          description: "Argument to get the package ID specifier for",
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "spec",
      },
    },
    {
      name: "publish",
      icon: "📦",
      description: "Upload a package to the registry",
      options: [
        {
          name: "--index",
          description: "Registry index URL to upload the package to",
          args: {
            name: "index",
          },
        },
        {
          name: "--token",
          description: "Token to use when uploading",
          args: {
            name: "token",
          },
        },
        {
          name: "--target",
          description: "Build for the target triple",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "target-dir",
          },
        },
        {
          name: ["-p", "--package"],
          description: "Package to publish",
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",

            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,

            isVariadic: true,
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of parallel jobs, defaults to # of CPUs",
          args: {
            name: "jobs",
          },
        },
        {
          name: "--registry",
          description: "Registry to publish to",
          args: {
            name: "registry",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--no-verify",
          description: "Don't verify the contents by building them",
        },
        {
          name: "--allow-dirty",
          description: "Allow dirty working directories to be packaged",
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--dry-run",
          description: "Perform all checks without uploading",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "read-manifest",
      icon: "📦",
      description:
        "Print a JSON representation of a Cargo.toml manifest. Deprecated, use `cargo metadata --no-deps` instead",
      hidden: true,
      options: [
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",

            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "report",
      icon: "📦",
      description: "Generate and display various kinds of reports",
      subcommands: [
        {
          name: "future-incompatibilities",
          description:
            "Reports any crates which will eventually stop compiling",
          options: [
            {
              name: "--id",
              description:
                "Identifier of the report generated by a Cargo command invocation",
              args: {
                name: "id",
              },
            },
            {
              name: ["-p", "--package"],
              description: "Package to display a report for",
              args: {
                name: "package",
                isVariadic: true,
              },
            },
            {
              name: "--color",
              description: "Coloring: auto, always, never",
              args: {
                name: "color",
                suggestions: ["always", "never", "auto"],
              },
            },
            {
              name: "--config",
              description: "Override a configuration value (unstable)",
              isRepeatable: true,
              args: {
                name: "config",
              },
            },
            {
              name: "-Z",
              description:
                "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
              isRepeatable: true,
              args: {
                name: "unstable-features",
              },
            },
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
            {
              name: ["-v", "--verbose"],
              description:
                "Use verbose output (-vv very verbose/build.rs output)",
              isRepeatable: true,
            },
            {
              name: "--frozen",
              description: "Require Cargo.lock and cache are up to date",
            },
            {
              name: "--locked",
              description: "Require Cargo.lock is up to date",
            },
            {
              name: "--offline",
              description: "Run without accessing the network",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          options: [
            {
              name: "--color",
              description: "Coloring: auto, always, never",
              args: {
                name: "color",
                suggestions: ["always", "never", "auto"],
              },
            },
            {
              name: "--config",
              description: "Override a configuration value (unstable)",
              isRepeatable: true,
              args: {
                name: "config",
              },
            },
            {
              name: "-Z",
              description:
                "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
              isRepeatable: true,
              args: {
                name: "unstable-features",
              },
            },
            {
              name: "--version",
              description: "Print version information",
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
            {
              name: ["-v", "--verbose"],
              description:
                "Use verbose output (-vv very verbose/build.rs output)",
              isRepeatable: true,
            },
            {
              name: "--frozen",
              description: "Require Cargo.lock and cache are up to date",
            },
            {
              name: "--locked",
              description: "Require Cargo.lock is up to date",
            },
            {
              name: "--offline",
              description: "Run without accessing the network",
            },
          ],
          args: {
            name: "subcommand",
          },
        },
      ],
      options: [
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: ["run", "r"],
      icon: "📦",
      description: "Run a binary or example of the local package",
      options: [
        {
          name: "--bin",
          description: "Name of the bin target to run",
          isRepeatable: true,
          args: {
            name: "bin",
            generators: binList,
            isVariadic: true,
          },
        },
        {
          name: "--example",
          description: "Name of the example target to run",
          isRepeatable: true,
          args: {
            name: "example",
            isVariadic: true,
          },
        },
        {
          name: ["-p", "--package"],
          description: "Package with the target to run",
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of parallel jobs, defaults to # of CPUs",
          args: {
            name: "jobs",
          },
        },
        {
          name: "--profile",
          description: "Build artifacts with the specified profile",
          args: {
            name: "profile",
          },
        },
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,

            isVariadic: true,
          },
        },
        {
          name: "--target",
          description: "Build for the target triple",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "target-dir",
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--message-format",
          description: "Error format",
          isRepeatable: true,
          args: {
            name: "message-format",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-r", "--release"],
          description: "Build artifacts in release mode, with optimizations",
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--unit-graph",
          description: "Output build graph in JSON (unstable)",
        },
        {
          name: "--ignore-rust-version",
          description: "Ignore `rust-version` specification in packages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "args",
        isVariadic: true,
      },
    },
    {
      name: "rustc",
      icon: "📦",
      description: "Compile a package, and pass extra options to the compiler",
      options: [
        {
          name: ["-p", "--package"],
          description: "Package to build",
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of parallel jobs, defaults to # of CPUs",
          args: {
            name: "jobs",
          },
        },
        {
          name: "--bin",
          description: "Build only the specified binary",
          isRepeatable: true,
          args: {
            name: "bin",
            generators: binList,
            isVariadic: true,
          },
        },
        {
          name: "--example",
          description: "Build only the specified example",
          isRepeatable: true,
          args: {
            name: "example",
            isVariadic: true,
          },
        },
        {
          name: "--test",
          description: "Build only the specified test target",
          isRepeatable: true,
          args: {
            name: "test",
            generators: testList,
            isVariadic: true,
          },
        },
        {
          name: "--bench",
          description: "Build only the specified bench target",
          isRepeatable: true,
          args: {
            name: "bench",
            isVariadic: true,
          },
        },
        {
          name: "--profile",
          description: "Build artifacts with the specified profile",
          args: {
            name: "profile",
          },
        },
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,

            isVariadic: true,
          },
        },
        {
          name: "--target",
          description: "Target triple which compiles will be for",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--print",
          description: "Output compiler information without compiling",
          args: {
            name: "print",
          },
        },
        {
          name: "--crate-type",
          description:
            "Comma separated list of types of crates for the compiler to emit (unstable)",
          isRepeatable: true,
          args: {
            name: "crate-type",
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "target-dir",
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--message-format",
          description: "Error format",
          isRepeatable: true,
          args: {
            name: "message-format",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--lib",
          description: "Build only this package's library",
        },
        {
          name: "--bins",
          description: "Build all binaries",
        },
        {
          name: "--examples",
          description: "Build all examples",
        },
        {
          name: "--tests",
          description: "Build all tests",
        },
        {
          name: "--benches",
          description: "Build all benches",
        },
        {
          name: "--all-targets",
          description: "Build all targets",
        },
        {
          name: ["-r", "--release"],
          description: "Build artifacts in release mode, with optimizations",
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--unit-graph",
          description: "Output build graph in JSON (unstable)",
        },
        {
          name: "--ignore-rust-version",
          description: "Ignore `rust-version` specification in packages",
        },
        {
          name: "--future-incompat-report",
          description:
            "Outputs a future incompatibility report at the end of the build",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "args",
        isVariadic: true,
      },
    },
    {
      name: "rustdoc",
      icon: "📦",
      description:
        "Build a package's documentation, using specified custom flags",
      options: [
        {
          name: ["-p", "--package"],
          description: "Package to document",
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of parallel jobs, defaults to # of CPUs",
          args: {
            name: "jobs",
          },
        },
        {
          name: "--bin",
          description: "Build only the specified binary",
          isRepeatable: true,
          args: {
            name: "bin",
            generators: binList,
            isVariadic: true,
          },
        },
        {
          name: "--example",
          description: "Build only the specified example",
          isRepeatable: true,
          args: {
            name: "example",
            isVariadic: true,
          },
        },
        {
          name: "--test",
          description: "Build only the specified test target",
          isRepeatable: true,
          args: {
            name: "test",
            generators: testList,
            isVariadic: true,
          },
        },
        {
          name: "--bench",
          description: "Build only the specified bench target",
          isRepeatable: true,
          args: {
            name: "bench",
            isVariadic: true,
          },
        },
        {
          name: "--profile",
          description: "Build artifacts with the specified profile",
          args: {
            name: "profile",
          },
        },
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,
            isVariadic: true,
          },
        },
        {
          name: "--target",
          description: "Build for the target triple",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "target-dir",
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--message-format",
          description: "Error format",
          isRepeatable: true,
          args: {
            name: "message-format",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--open",
          description: "Opens the docs in a browser after the operation",
        },
        {
          name: "--lib",
          description: "Build only this package's library",
        },
        {
          name: "--bins",
          description: "Build all binaries",
        },
        {
          name: "--examples",
          description: "Build all examples",
        },
        {
          name: "--tests",
          description: "Build all tests",
        },
        {
          name: "--benches",
          description: "Build all benches",
        },
        {
          name: "--all-targets",
          description: "Build all targets",
        },
        {
          name: ["-r", "--release"],
          description: "Build artifacts in release mode, with optimizations",
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--unit-graph",
          description: "Output build graph in JSON (unstable)",
        },
        {
          name: "--ignore-rust-version",
          description: "Ignore `rust-version` specification in packages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "args",
        isVariadic: true,
      },
    },
    {
      name: "search",
      icon: "🔎",
      description: "Search packages in crates.io",
      options: [
        {
          name: "--index",
          description: "Registry index URL to upload the package to",
          args: {
            name: "index",
          },
        },
        {
          name: "--limit",
          description: "Limit the number of results (default: 10, max: 100)",
          args: {
            name: "limit",
          },
        },
        {
          name: "--registry",
          description: "Registry to use",
          args: {
            name: "registry",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "query",
        isVariadic: true,
      },
    },
    {
      name: ["test", "t"],
      icon: "📦",
      description:
        "Execute all unit and integration tests and build examples of a local package",
      options: [
        {
          name: "--bin",
          description: "Test only the specified binary",
          isRepeatable: true,
          args: {
            name: "bin",
            generators: binList,
            isVariadic: true,
          },
        },
        {
          name: "--example",
          description: "Test only the specified example",
          isRepeatable: true,
          args: {
            name: "example",
            isVariadic: true,
          },
        },
        {
          name: "--test",
          description: "Test only the specified test target",
          isRepeatable: true,
          args: {
            name: "test",
            generators: testList,
            isVariadic: true,
          },
        },
        {
          name: "--bench",
          description: "Test only the specified bench target",
          isRepeatable: true,
          args: {
            name: "bench",
            isVariadic: true,
          },
        },
        {
          name: ["-p", "--package"],
          description: "Package to run tests for",
          isRepeatable: true,
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: "--exclude",
          description: "Exclude packages from the test",
          isRepeatable: true,
          args: {
            name: "exclude",
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of parallel jobs, defaults to # of CPUs",
          args: {
            name: "jobs",
          },
        },
        {
          name: "--profile",
          description: "Build artifacts with the specified profile",
          args: {
            name: "profile",
          },
        },
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,

            isVariadic: true,
          },
        },
        {
          name: "--target",
          description: "Build for the target triple",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "target-dir",
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",

            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--message-format",
          description: "Error format",
          isRepeatable: true,
          args: {
            name: "message-format",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["auto", "always", "never"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Display one character per test instead of one line",
        },
        {
          name: "--lib",
          description: "Test only this package's library unit tests",
        },
        {
          name: "--bins",
          description: "Test all binaries",
        },
        {
          name: "--examples",
          description: "Test all examples",
        },
        {
          name: "--tests",
          description: "Test all tests",
        },
        {
          name: "--benches",
          description: "Test all benches",
        },
        {
          name: "--all-targets",
          description: "Test all targets",
        },
        {
          name: "--doc",
          description: "Test only this library's documentation",
        },
        {
          name: "--no-run",
          description: "Compile, but don't run tests",
        },
        {
          name: "--no-fail-fast",
          description: "Run all tests regardless of failure",
        },
        {
          name: "--workspace",
          description: "Test all packages in the workspace",
        },
        {
          name: "--all",
          description: "Alias for --workspace (deprecated)",
          hidden: true,
        },
        {
          name: ["-r", "--release"],
          description: "Build artifacts in release mode, with optimizations",
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--ignore-rust-version",
          description: "Ignore `rust-version` specification in packages",
        },
        {
          name: "--unit-graph",
          description: "Output build graph in JSON (unstable)",
        },
        {
          name: "--future-incompat-report",
          description:
            "Outputs a future incompatibility report at the end of the build",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: [
        {
          name: "TESTNAME",
        },
        {
          name: "args",
          isVariadic: true,
        },
      ],
    },
    {
      name: "tree",
      icon: "📦",
      description: "Display a tree visualization of a dependency graph",
      options: [
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: ["-p", "--package"],
          description: "Package to be used as the root of the tree",
          isRepeatable: true,
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: "--exclude",
          description: "Exclude specific workspace members",
          isRepeatable: true,
          args: {
            name: "exclude",
          },
        },
        {
          name: "--features",
          description: "Space or comma separated list of features to activate",
          isRepeatable: true,
          args: {
            name: "features",
            generators: featuresGenerator,
            isVariadic: true,
          },
        },
        {
          name: "--target",
          description:
            "Filter dependencies matching the given target-triple (default host platform). Pass `all` to include all targets",
          isRepeatable: true,
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: ["-e", "--edges"],
          description:
            "The kinds of dependencies to display (features, normal, build, dev, all, no-normal, no-build, no-dev, no-proc-macro)",
          isRepeatable: true,
          args: {
            name: "edges",
            suggestions: [
              "features",
              "normal",
              "build",
              "dev",
              "all",
              "no-normal",
              "no-build",
              "no-dev",
              "no-proc-macro",
            ],
          },
        },
        {
          name: ["-i", "--invert"],
          description:
            "Invert the tree direction and focus on the given package",
          isRepeatable: true,
          args: {
            name: "invert",
            isVariadic: true,
          },
        },
        {
          name: "--prune",
          description:
            "Prune the given package from the display of the dependency tree",
          isRepeatable: true,
          args: {
            name: "prune",
          },
        },
        {
          name: "--depth",
          description: "Maximum display depth of the dependency tree",
          args: {
            name: "depth",
          },
        },
        {
          name: "--prefix",
          description:
            "Change the prefix (indentation) of how each entry is displayed",
          args: {
            name: "prefix",
            suggestions: ["depth", "indent", "none"],
          },
        },
        {
          name: "--charset",
          description: "Character set to use in output: utf8, ascii",
          args: {
            name: "charset",
            suggestions: ["utf8", "ascii"],
          },
        },
        {
          name: ["-f", "--format"],
          description: "Format string used for printing dependencies",
          args: {
            name: "format",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["auto", "always", "never"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--workspace",
          description: "Display the tree for all packages in the workspace",
        },
        {
          name: ["-a", "--all"],
        },
        {
          name: "--all-targets",
        },
        {
          name: "--all-features",
          description: "Activate all available features",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--no-dev-dependencies",
        },
        {
          name: "--no-indent",
        },
        {
          name: "--prefix-depth",
        },
        {
          name: "--no-dedupe",
          description: "Do not de-duplicate (repeats all shared dependencies)",
        },
        {
          name: ["-d", "--duplicates"],
          description:
            "Show only dependencies which come in multiple versions (implies -i)",
        },
        {
          name: ["-V", "--version"],
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "uninstall",
      icon: "📦",
      description: "Remove a Rust binary",
      options: [
        {
          name: ["-p", "--package"],
          description: "Package to uninstall",
          isRepeatable: true,
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: "--bin",
          description: "Only uninstall the binary NAME",
          isRepeatable: true,
          args: {
            name: "bin",
          },
        },
        {
          name: "--root",
          description: "Directory to uninstall packages from",
          args: {
            name: "root",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["auto", "always", "never"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "spec",
        generators: {
          script:
            "cargo install --list | grep -E \"^[a-zA-Z\\-]+\\sv\" | cut -d ' ' -f 1",
          splitOn: "\n",
        },
        isVariadic: true,
      },
    },
    {
      name: "update",
      icon: "📦",
      description: "Update dependencies as recorded in the local lock file",
      options: [
        {
          name: ["-p", "--package"],
          description: "Package to update",
          isRepeatable: true,
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: "--precise",
          description:
            "Update a single dependency to exactly PRECISE when used with -p",
          args: {
            name: "precise",
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-w", "--workspace"],
          description: "Only update the workspace packages",
        },
        {
          name: "--aggressive",
          description:
            "Force updating all dependencies of SPEC as well when used with -p",
        },
        {
          name: "--dry-run",
          description: "Don't actually write the lockfile",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "vendor",
      icon: "📦",
      description: "Vendor all dependencies for a project locally",
      options: [
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",

            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: ["-s", "--sync"],
          description: "Additional `Cargo.toml` to sync and vendor",
          isRepeatable: true,
          args: {
            name: "tomls",
            isVariadic: true,
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--no-delete",
          description: "Don't delete older crates in the vendor directory",
        },
        {
          name: "--respect-source-config",
          description: "Respect `[source]` config in `.cargo/config`",
          isRepeatable: true,
        },
        {
          name: "--versioned-dirs",
          description: "Always include version in subdir name",
        },
        {
          name: "--no-merge-sources",
        },
        {
          name: "--relative-path",
        },
        {
          name: "--only-git-deps",
        },
        {
          name: "--disallow-duplicates",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "path",
      },
    },
    {
      name: "verify-project",
      icon: "📦",
      description: "Check correctness of crate manifest",
      options: [
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "manifest-path",

            generators: filepaths({ equals: "Cargo.toml" }),
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "version",
      icon: "📦",
      description: "Show version information",
      options: [
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
    },
    {
      name: "yank",
      icon: "📦",
      description: "Remove a pushed crate from the index",
      options: [
        {
          name: "--vers",
          description: "The version to yank or un-yank",
          args: {
            name: "vers",
          },
        },
        {
          name: "--index",
          description: "Registry index to yank from",
          args: {
            name: "index",
          },
        },
        {
          name: "--token",
          description: "API token to use when authenticating",
          args: {
            name: "token",
          },
        },
        {
          name: "--registry",
          description: "Registry to use",
          args: {
            name: "registry",
          },
        },
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print cargo log messages",
        },
        {
          name: "--undo",
          description: "Undo a yank, putting a version back into the index",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "crate",
      },
    },
    {
      name: "help",
      icon: "📦",
      description: "Print this message or the help of the given subcommand(s)",
      options: [
        {
          name: "--color",
          description: "Coloring: auto, always, never",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--config",
          description: "Override a configuration value (unstable)",
          isRepeatable: true,
          args: {
            name: "config",
          },
        },
        {
          name: "-Z",
          description:
            "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
          isRepeatable: true,
          args: {
            name: "unstable-features",
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output (-vv very verbose/build.rs output)",
          isRepeatable: true,
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
      ],
      args: {
        name: "subcommand",
      },
    },
  ],
  options: [
    {
      name: "--explain",
      description: "Run `rustc --explain CODE`",
      args: {
        name: "explain",
      },
    },
    {
      name: "--color",
      description: "Coloring: auto, always, never",
      args: {
        name: "color",
        suggestions: ["always", "never", "auto"],
      },
    },
    {
      name: "--config",
      description: "Override a configuration value (unstable)",
      isRepeatable: true,
      args: {
        name: "config",
      },
    },
    {
      name: "-Z",
      description:
        "Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details",
      isRepeatable: true,
      args: {
        name: "unstable-features",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Print help information",
    },
    {
      name: ["-V", "--version"],
      description: "Print version info and exit",
    },
    {
      name: "--list",
      description: "List installed commands",
    },
    {
      name: ["-v", "--verbose"],
      description: "Use verbose output (-vv very verbose/build.rs output)",
      isRepeatable: true,
    },
    {
      name: ["-q", "--quiet"],
      description: "Do not print cargo log messages",
    },
    {
      name: "--frozen",
      description: "Require Cargo.lock and cache are up to date",
    },
    {
      name: "--locked",
      description: "Require Cargo.lock is up to date",
    },
    {
      name: "--offline",
      description: "Run without accessing the network",
    },
  ],
  generateSpec: async (_tokens, executeShellCommand) => {
    const subcommands: Fig.Subcommand[] = [];

    const commands = (await executeShellCommand("cargo --list"))
      .split("\n")
      .filter((_, i) => i != 0)
      .map((line) => line.trim().split(/\s+/, 1)[0]);

    const fmt: Fig.Subcommand = {
      name: "fmt",
      icon: "🛠",
      description:
        "This utility formats all bin and lib files of the current crate using rustfmt",
      subcommands: [
        {
          name: "--",
          description: "All other arguments are passed to rustfmt",
          args: {
            generators: filepaths({
              extensions: ["rs"],
            }),
          },
          options: [
            {
              name: "--check",
              description:
                "Run in 'check' mode. Exits with 0 if input is formatted correctly. Exits with 1 and prints a diff if formatting is required",
            },
            {
              name: "--emit",
              description: "What data to emit and how",
              args: {
                suggestions: ["files", "stdout"],
              },
            },
            {
              name: "--backup",
              description: "Backup any modified files",
            },
            {
              name: "--config-path",
              description: "Path for the configuration file",
              args: {
                generators: filepaths({
                  equals: ["rustfmt.toml"],
                }),
              },
            },
            {
              name: "--edition",
              description: "Rust edition to use",
              args: {
                suggestions: rustEditions,
              },
            },
            {
              name: "--print-config",
              description: "Dumps a default or minimal config to PATH",
              args: [
                {
                  name: "verbosity",
                  suggestions: ["default", "minimal", "current"],
                },
                {
                  name: "PATH",
                  template: "filepaths",
                },
              ],
            },
            {
              name: ["-l", "--files-with-diff"],
              description:
                "Prints the names of mismatched files that were formatted",
            },
          ],
        },
      ],
      options: [
        {
          name: "--check",
          description: "Run rustfmt in check mode",
        },
        {
          name: "--all",
          description:
            "Format all packages, and also their local path-based dependencies",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "No output printed to stdout",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
        },
        {
          name: "--version",
          description: "Print rustfmt version and exit",
        },
        {
          name: "--manifest-path",
          description: "Specify path to Cargo.toml",
          args: {
            name: "manifest-path",
            generators: filepaths({
              equals: ["Cargo.toml"],
            }),
          },
        },
        {
          name: "--message-format",
          description: "Specify message-format",
          args: {
            name: "message-format",
            suggestions: ["short", "json", "human"],
          },
        },
        {
          name: ["-p", "--package"],
          description: "Specify package to format",
          args: {
            name: "package",
          },
        },
      ],
    };

    if (commands.includes("fmt")) {
      subcommands.push(fmt);
    }

    const clippy: Fig.Subcommand = {
      name: "clippy",
      icon: "📎",
      description: "Runs the Clippy linter",
      subcommands: [
        {
          name: "--",
          description: "All other arguments are passed to clippy",
          options: [
            {
              name: ["-W", "--warn"],
              description: "Set lint warnings",
              args: {},
            },
            {
              name: ["-A", "--allow"],
              description: "Set lint allowed",
              args: {},
            },
            {
              name: ["-D", "--deny"],
              description: "Set lint denied",
              args: {},
            },
            {
              name: ["-F", "--forbid"],
              description: "Set lint forbidden",
              args: {},
            },
          ],
        },
      ],
      options: [
        {
          name: "--no-deps",
          description:
            "Run Clippy only on the given crate, without linting the dependencies",
        },
        {
          name: "--fix",
          description:
            "Automatically apply lint suggestions. This flag implies `--no-deps`",
        },
        {
          name: "--allow-dirty",
          description:
            "Allow fix to apply even if the working directory is dirty",
          dependsOn: ["--fix"],
        },
        {
          name: "--allow-staged",
          description:
            "Allow fix to apply even if the working directory has staged changes",
          dependsOn: ["--fix"],
        },
      ],
    };

    if (commands.includes("clippy")) {
      subcommands.push(clippy);
    }

    const flamegraph: Fig.Subcommand = {
      name: "flamegraph",
      icon: "🔥",
      description: "Generates a flamegraph of the current crate",
      options: [
        {
          name: "--deterministic",
          description:
            "Colors are selected such that the color of a function does not change between runs",
        },
        {
          name: "--dev",
          description: "Build with the dev profile",
        },
        {
          name: ["-i", "--inverted"],
          description: "Plot the flame graph up-side-down",
        },
        {
          name: "--no-default-features",
          description: "Disable default features",
        },
        {
          name: "--open",
          description: "Open the output .svg file with default program",
        },
        {
          name: "--reverse",
          description: "Generate stack-reversed flame graph",
        },
        {
          name: "--root",
          description: "Run with root privileges (using `sudo`)",
        },
        {
          name: "--no-inline",
          description:
            "Disable inlining for perf script because of performance issues",
        },
      ],
    };

    if (commands.includes("flamegraph")) {
      subcommands.push(flamegraph);
    }

    const audit: Fig.Subcommand = {
      name: "audit",
      icon: "📚",
      description: "Runs the cargo audit tool",
      options: [
        {
          name: ["-d", "--db"],
          description: "Advisory database git repo path",
          args: {
            name: "DB",
            template: "folders",
          },
        },
        {
          name: ["-D", "--deny"],
          description: "Exit with an error on the argument",
          args: {
            isVariadic: true,
            suggestions: [
              { name: "warnings", description: "Warnings (any)" },
              { name: "unmaintained", description: "Unmaintained crates" },
              { name: "unsound", description: "Unsound Rust code" },
              { name: "yanked", description: "Yanked crates" },
            ],
          },
        },
        {
          name: ["-f", "--file"],
          description: "Cargo lockfile to inspect",
          args: {
            suggestions: [{ name: "-", description: "Stdin" }],
            generators: filepaths({
              equals: ["Cargo.lock"],
            }),
          },
        },
        {
          name: ["-n", "--no-fetch"],
          description: "Do not perform a git fetch on the advisory DB",
        },
        {
          name: "--stale",
          description: "Allow stale database",
        },
        {
          name: "--target-arch",
          description: "Filter vulnerabilities by CPU",
          args: {},
        },
        {
          name: "--target-os",
          description: "Filter vulnerabilities by OS",
          args: {},
        },
        {
          name: ["-u", "--url"],
          description: "URL for advisory database git repo",
        },
        {
          name: "--json",
          description: "Output report in JSON format",
        },
        {
          name: "--no-local-crates",
          description: "Vulnerability querying does not consider local crates",
        },
      ],
    };

    if (commands.includes("audit")) {
      subcommands.push(audit);
    }

    return {
      name: "cargo",
      subcommands,
    };
  },
};

export default completionSpec;
