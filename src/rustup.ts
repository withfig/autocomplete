type ToolchainLocalGeneratorOptions = {
  excludeShort?: boolean;
};

// A generator of local toolchains including the short names
const toolchainLocalGenertor: (
  args?: ToolchainLocalGeneratorOptions
) => Fig.Generator = ({ excludeShort } = {}) => ({
  script: ["rustup", "toolchain", "list"],
  postProcess: (out) => {
    const toolchains = out
      .split("\n")
      .map((toolchain) => toolchain.split(" ")[0]);

    let shortToolchains = [];
    if (!excludeShort) {
      shortToolchains = toolchains.map((toolchain) => toolchain.split("-")[0]);
      // dedupe
      shortToolchains = shortToolchains.filter(
        (toolchain, index) => shortToolchains.indexOf(toolchain) === index
      );
    }

    return shortToolchains.concat(toolchains).map((name) => ({
      name,
    }));
  },
});

const toolchainAllGenerator: Fig.Generator = {
  // Grab the latest versions of rust from github, try the gh cli first as it has a higher rate limit
  script: [
    "bash",
    "-c",
    'if command -v gh > /dev/null; then \
      gh api -H "Accept: application/vnd.github+json" /repos/rust-lang/rust/releases; \
    else \
      curl -sfL -H "Accept: application/vnd.github+json" https://api.github.com/repos/rust-lang/rust/releases; \
    fi',
  ],
  cache: {
    // 1 hour, the github api is rate limited per hour
    ttl: 60 * 60 * 1000,
  },
  postProcess: (out) => {
    if (out === "") return [];

    const releases = JSON.parse(out) as {
      tag_name: string;
      name: string;
      published_at: string;
    }[];

    return [
      {
        name: "stable",
      },
      {
        name: "beta",
      },
      {
        name: "nightly",
      },
      ...releases.map((release) => ({
        name: release.tag_name,
        description: `${release.name} - ${new Date(
          release.published_at
        ).toLocaleDateString()}`,
      })),
    ];
  },
};

type TripleGeneratorOptions = {
  installed?: boolean;
};

const tripleGenerator: (args?: TripleGeneratorOptions) => Fig.Generator = ({
  installed,
} = {}) => ({
  script: ["rustup", "target", "list"],
  postProcess: (data: string) => {
    return data
      .split("\n")
      .map((line) => line.split(" "))
      .filter((line) => (installed ? line.includes("(installed)") : true))
      .map((line) => ({
        name: line[0],
      }));
  },
});

const completionSpec: Fig.Spec = {
  name: "rustup",
  description: "The Rust toolchain installer",
  subcommands: [
    {
      name: "show",
      description: "Show the active and installed toolchains or profiles",
      subcommands: [
        {
          name: "active-toolchain",
          description: "Show the active toolchain",
        },
        {
          name: "home",
          description: "Display the computed value of RUSTUP_HOME",
        },
        {
          name: "profile",
          description: "Show the current profile",
        },
        {
          name: "keys",
          description: "Display the known PGP keys",
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
    },
    {
      name: "update",
      description: "Update Rust toolchains and rustup",
      options: [
        {
          name: "--force",
          description: "Force an update, even if some components are missing",
        },
        {
          name: "--force-non-host",
          description:
            "Install toolchains that require an emulator. See https://github.com/rust-lang/rustup/wiki/Non-host-toolchains",
        },
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
        {
          name: "--no-self-update",
          description:
            "Don't perform self update when running the `rustup update` command",
        },
      ],
      args: {
        name: "toolchain",
        description:
          "Toolchain name. For more information see `rustup help toolchain`",
        generators: toolchainLocalGenertor(),
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "check",
      description: "Check for updates to Rust toolchains and rustup",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      args: {
        name: "toolchain",
        description:
          "Toolchain name. For more information see `rustup help toolchain`",
        isOptional: true,
      },
    },
    {
      name: "default",
      description:
        "Sets the default toolchain to the one specified. If the toolchain is not already installed then it is installed first",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      args: {
        name: "toolchain",
        description: "Toolchain name",
        generators: toolchainLocalGenertor(),
        isOptional: true,
      },
    },
    {
      name: "target",
      description: "Modify a toolchain's supported targets",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      subcommands: [
        {
          name: "list",
          description: "List installed and available targets",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
        },
        {
          name: "add",
          description: "Add a target to a Rust toolchain",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
            {
              name: "--toolchain",
              args: {
                name: "toolchain",
                description: "Toolchain name",
                generators: toolchainLocalGenertor(),
              },
            },
          ],
          args: {
            name: "target",
            description: "Target triple",
            generators: tripleGenerator(),
          },
        },
        {
          name: "remove",
          description: "Remove a target from a Rust toolchain",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
            {
              name: "--toolchain",
              args: {
                name: "toolchain",
                description: "Toolchain name",
                generators: toolchainLocalGenertor(),
              },
            },
          ],
          args: {
            name: "target",
            description: "Target triple",
            generators: tripleGenerator({ installed: true }),
          },
        },
        {
          name: "help",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
          description:
            "Prints this message or the help of the given subcommand(s)",
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "toolchain",
      description: "Modify or query the installed toolchains",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      subcommands: [
        {
          name: "list",
          description: "List installed toolchains",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
        },
        {
          name: "install",
          description: "Install or update a given toolchain",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-t", "--target"],
              description: "Add specific targets on installation",
              args: {
                name: "targets",
                isVariadic: true,
                generators: tripleGenerator(),
              },
            },
            {
              name: ["-c", "--component"],
              description: "Add specific components on installation",
              args: {
                name: "components",
                isVariadic: true,
              },
            },
            {
              name: "--profile",
              args: {
                name: "profile",
                suggestions: ["minimal", "default", "complete"],
              },
            },
            {
              name: "--allow-downgrade",
              description:
                "Allow rustup to downgrade the toolchain to satisfy your component choice",
            },
            {
              name: "--force",
              description:
                "Force an update, even if some components are missing",
            },
            {
              name: "--no-self-update",
              description:
                "Don't perform self update when running the`rustup toolchain install` command",
            },
          ],
          args: {
            name: "toolchain",
            description: "Toolchain name",
            generators: toolchainAllGenerator,
            isVariadic: true,
          },
        },
        {
          name: "uninstall",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
          ],
          args: {
            name: "toolchain",
            description: "Toolchain name",
            generators: toolchainLocalGenertor({ excludeShort: true }),
            isVariadic: true,
          },
          description: "Uninstall a toolchain",
        },
        {
          name: "link",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
          ],
          args: [
            {
              name: "toolchain",
              description: "Custom toolchain name",
              isVariadic: true,
            },
            {
              name: "path",
              description: "Path to the directory",
            },
          ],
          description: "Create a custom toolchain by symlinking to a directory",
        },
        {
          name: "help",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
          description:
            "Prints this message or the help of the given subcommand(s)",
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "component",
      description: "Modify a toolchain's installed components",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      subcommands: [
        {
          name: "list",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
          description: "List installed and available components",
        },
        {
          name: "add",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
          description: "Add a component to a Rust toolchain",
        },
        {
          name: "remove",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
          description: "Remove a component from a Rust toolchain",
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
          args: {
            name: "subcommand(s)",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "override",
      description: "Modify directory toolchain overrides",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      subcommands: [
        {
          name: "list",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
          description: "List directory toolchain overrides",
        },
        {
          name: "set",
          description: "Set the override toolchain for a directory",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
          args: {
            name: "toolchain",
            description: "Toolchain name",
            generators: toolchainLocalGenertor(),
          },
        },
        {
          name: "unset",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
          description: "Remove the override toolchain for a directory",
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
          args: {
            name: "subcommand(s)",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "run",
      description:
        "Run a command with an environment configured for a given toolchain",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
        {
          name: "--install",
          description: "Install the requested toolchain if needed",
        },
      ],
      args: [
        {
          name: "toolchain",
          description: "Toolchain name",
          generators: toolchainLocalGenertor(),
        },
        {
          name: "command",
          isVariadic: true,
          isCommand: true,
        },
      ],
    },
    {
      name: "which",
      description: "Display which binary will be run for a given command",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
        {
          name: "--toolchain",
          description: "Toolchain name",
          args: {
            name: "toolchain",
            generators: toolchainLocalGenertor(),
          },
        },
      ],
    },
    {
      name: "doc",
      description: "Open the documentation for the current toolchain",
      options: [
        {
          name: "--alloc",
          description: "The Rust core allocation and collections library",
        },
        {
          name: "--book",
          description: "The Rust Programming Language book",
        },
        {
          name: "--cargo",
          description: "The Cargo Book",
        },
        {
          name: "--core",
          description: "The Rust Core Library",
        },
        {
          name: "--edition-guide",
          description: "The Rust Edition Guide",
        },
        {
          name: "--embedded-book",
          description: "The Embedded Rust Book",
        },
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
        {
          name: "--nomicon",
          description: "The Dark Arts of Advanced and Unsafe Rust Programming",
        },
        {
          name: "--path",
          description: "Only print the path to the documentation",
        },
        {
          name: "--proc_macro",
          description:
            "A support library for macro authors when defining new macros",
        },
        {
          name: "--reference",
          description: "The Rust Reference",
        },
        {
          name: "--rust-by-example",
          description:
            "A collection of runnable examples that illustrate various Rust concepts and standard libraries",
        },
        {
          name: "--rustc",
          description: "The compiler for the Rust programming language",
        },
        {
          name: "--rustdoc",
          description: "Generate documentation for Rust projects",
        },
        {
          name: "--std",
          description: "Standard library API documentation",
        },
        {
          name: "--test",
          description:
            "Support code for rustc's built in unit-test and micro-benchmarking framework",
        },
        {
          name: "--unstable-book",
          description: "--unstable-book",
        },
        {
          name: "--toolchain",
          description: "Toolchain name",
          args: {
            name: "toolchain",
            generators: toolchainLocalGenertor(),
          },
        },
      ],
      args: {
        name: "topic",
        description:
          "Topic such as 'core', 'fn', 'usize', 'eprintln!', 'core::arch', 'alloc::format!', 'std::fs', 'std::fs::read_dir', 'std::io::Bytes', 'std::iter::Sum', 'std::io::error::Result' etc",
        generators: {
          script: [
            "bash",
            "-c",
            `find $(rustup docs --path | sed -e "s|index\\.html|std|") $(rustup docs --path | sed -e "s|index\\.html|alloc|") $(rustup docs --path | sed -e "s|index\\.html|core|") | grep "\\.html" | sed -E -e "s|^(.*)/html/||" -e "s|\\.html||" -e "s|/|::|g" -e "s/constant\\.|trait\\.|struct\\.|macro\\.|fn\\.|keyword\\.|primitive\\.|type\\.|enum\\.|union\\.|traitalias\\.|::index$|^(.*)::all$//" -e "/^$/d"`,
          ],
          splitOn: "\n",
        },
      },
    },
    {
      name: "man",
      description: "View the man page for a given command",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
        {
          name: "--toolchain",
          description: "Toolchain name",
          args: {
            name: "toolchain",
            generators: toolchainLocalGenertor(),
          },
        },
      ],
    },
    {
      name: "self",
      description: "Modify the rustup installation",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      subcommands: [
        {
          name: "update",
          description: "Download and install updates to rustup",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstall rustup",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
        },
        {
          name: "upgrade-data",
          description: "Upgrade the internal data format",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
          args: {
            name: "subcommand(s)",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "set",
      description: "Alter rustup settings",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      subcommands: [
        {
          name: "auto-self-update",
          description: "The rustup auto self update mode",
          args: {
            name: "auto-self-update-mode",
            default: "enable",
            isOptional: true,
            suggestions: ["enable", "disable", "check-only"],
          },
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
        },
        {
          name: "default-host",
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints help information",
            },
            {
              name: ["-V", "--version"],
              description: "Prints version information",
            },
          ],
          args: {
            name: "host-triple",
            generators: tripleGenerator(),
          },
        },
      ],
    },
    {
      name: "completions",
      description: "Generate tab-completion scripts for your shell",
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
      args: [
        {
          name: "shell",
          suggestions: ["zsh", "bash", "fish", "powershell", "elvish"],
        },
        {
          name: "command",
          suggestions: ["rustup", "cargo"],
        },
      ],
    },
    {
      name: "help",
      description: "Prints this message or the help of the given subcommand(s)",
      args: {
        name: "subcommand",
        isVariadic: true,
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Prints help information",
    },
    {
      name: ["-V", "--version"],
      description: "Prints version information",
    },
    {
      name: ["-q", "--quiet"],
      description: "Disable progress output",
    },
    {
      name: ["-v", "--verbose"],
      description: "Enable verbose output",
    },
  ],
  args: {
    name: "toolchain",
    description:
      "Release channel (e.g. +stable) or custom toolchain to set override",
    isOptional: true,
  },
  generateSpec: async (_tokens, executeShellCommand) => {
    const { stdout: toolchainOutput } = await executeShellCommand({
      command: "rustup",
      args: ["toolchain", "list"],
    });
    const toolchains: Fig.Option[] = toolchainOutput
      .split("\n")
      .map((toolchain) => {
        return {
          icon: "🧰",
          name: `+${toolchain.split("-")[0]}`,
          description: toolchain,
        };
      });

    return {
      name: "cargo",
      options: toolchains,
    };
  },
};

export default completionSpec;
