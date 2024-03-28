const completion: Fig.Spec = {
  name: "forc",
  description: "Fuel Orchestrator",
  subcommands: [
    {
      name: "addr2line",
      description:
        "Show location and context of an opcode address in its source file",
      options: [
        {
          name: "-S",
          description: "Where to search for the project root",
        },
        {
          name: "-g",
          description: "Source file mapping in JSON format",
        },
        {
          name: "-c",
          description: "How many lines of context to show",
        },
        {
          name: "-i",
          description: "Opcode index",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
      ],
    },
    {
      name: "build",
      description: "Compile the current or target project",
      options: [
        {
          name: "-p",
          description:
            "Path to the project, if not specified, current working directory will be used",
        },
        {
          name: "-t",
          description: "Terse mode. Limited warning and error output",
        },
        {
          name: "-o",
          description:
            "If set, outputs a binary file representing the script bytes",
        },
        {
          name: "-g",
          description: "If set, outputs source file mapping in JSON format",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "--offline",
          isOptional: true,
        },
        {
          name: "--output-directory",
          isOptional: true,
        },
        {
          name: "--locked",
          isOptional: true,
        },
        {
          name: "--json-abi-with-callpaths",
          isOptional: true,
        },
        {
          name: "--ipfs-node",
          isOptional: true,
        },
        {
          name: "--ast",
          isOptional: true,
        },
        {
          name: "--dca-graph",
          isOptional: true,
        },
        {
          name: "--dca-graph-url-format",
          isOptional: true,
        },
        {
          name: "--finalized-asm",
          isOptional: true,
        },
        {
          name: "--intermediate-asm",
          isOptional: true,
        },
        {
          name: "--ir",
          isOptional: true,
        },
        {
          name: "--time-phases",
          isOptional: true,
        },
        {
          name: "--reverse-order",
          isOptional: true,
        },
        {
          name: "--metrics-outfile",
          isOptional: true,
        },
        {
          name: "--json-abi",
          isOptional: true,
        },
        {
          name: "--json-storage-slots",
          isOptional: true,
        },
        {
          name: "--build-profile",
          isOptional: true,
        },
        {
          name: "--release",
          isOptional: true,
        },
        {
          name: "--error-on-warnings",
          isOptional: true,
        },
        {
          name: "--build-target",
          isOptional: true,
          suggestions: [
            {
              name: "fuel",
              description: "",
            },
            {
              name: "evm",
              description: "",
            },
            {
              name: "midenvm",
              description: "",
            },
          ],
        },
        {
          name: "--tests",
          isOptional: true,
        },
        {
          name: "--experimental-new-encoding",
          isOptional: true,
        },
      ],
    },
    {
      name: "check",
      description:
        "Check the current or target project and all of its dependencies for errors",
      options: [
        {
          name: "-p",
          description:
            "Path to the project, if not specified, current working directory will be used",
        },
        {
          name: "-t",
          description: "Terse mode. Limited warning and error output",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "build-target",
          isOptional: true,
          suggestions: [
            {
              name: "fuel",
              description: "",
            },
            {
              name: "evm",
              description: "",
            },
            {
              name: "midenvm",
              description: "",
            },
          ],
        },
        {
          name: "--offline-mode",
          isOptional: true,
        },
        {
          name: "--locked",
          isOptional: true,
        },
        {
          name: "--disable-tests",
          isOptional: true,
        },
        {
          name: "--ipfs-node",
          isOptional: true,
        },
      ],
    },
    {
      name: "clean",
      description:
        "Removes the default forc compiler output artifact directory, i.e. `<project-name>/out`",
      options: [
        {
          name: "-p",
          description:
            "Path to the project, if not specified, current working directory will be used",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
      ],
    },
    {
      name: "completions",
      description: "Generate tab-completion scripts for your shell",
      options: [
        {
          name: "-T",
          description: "Specify shell to enable tab-completion for",
          args: {
            name: "--target",
            isOptional: true,
            suggestions: [
              {
                name: "bash",
                description: "Bourne Again SHell (bash)",
              },
              {
                name: "elvish",
                description: "Elvish shell",
              },
              {
                name: "fish",
                description: "Friendly Interactive SHell (fish)",
              },
              {
                name: "power-shell",
                description: "PowerShell",
              },
              {
                name: "zsh",
                description: "Z SHell (zsh)",
              },
              {
                name: "fig",
                description: "Fig",
              },
            ],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
      ],
    },
    {
      name: "new",
      description: "Create a new Forc project at `<path>`",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "--contract",
          isOptional: true,
        },
        {
          name: "--script",
          isOptional: true,
        },
        {
          name: "--predicate",
          isOptional: true,
        },
        {
          name: "--library",
          isOptional: true,
        },
        {
          name: "--workspace",
          isOptional: true,
        },
        {
          name: "--name",
          isOptional: true,
        },
        {
          name: "path",
          isOptional: true,
        },
      ],
    },
    {
      name: "init",
      description: "Create a new Forc project in an existing directory",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "--path",
          isOptional: true,
        },
        {
          name: "--contract",
          isOptional: true,
        },
        {
          name: "--script",
          isOptional: true,
        },
        {
          name: "--predicate",
          isOptional: true,
        },
        {
          name: "--library",
          isOptional: true,
        },
        {
          name: "--workspace",
          isOptional: true,
        },
        {
          name: "--name",
          isOptional: true,
        },
      ],
    },
    {
      name: "parse-bytecode",
      description: "Parse bytecode file into a debug format",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "file-path",
          isOptional: true,
        },
      ],
    },
    {
      name: "test",
      description: "Run the Sway unit tests for the current project",
      options: [
        {
          name: "-p",
          description:
            "Path to the project, if not specified, current working directory will be used",
        },
        {
          name: "-t",
          description: "Terse mode. Limited warning and error output",
        },
        {
          name: "-o",
          description:
            "If set, outputs a binary file representing the script bytes",
        },
        {
          name: "-g",
          description: "If set, outputs source file mapping in JSON format",
        },
        {
          name: "-r",
          description: "Pretty-print the logs emiited from tests",
        },
        {
          name: "-l",
          description: "Print `Log` and `LogData` receipts for tests",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "--offline",
          isOptional: true,
        },
        {
          name: "--output-directory",
          isOptional: true,
        },
        {
          name: "--locked",
          isOptional: true,
        },
        {
          name: "--json-abi-with-callpaths",
          isOptional: true,
        },
        {
          name: "--ipfs-node",
          isOptional: true,
        },
        {
          name: "--ast",
          isOptional: true,
        },
        {
          name: "--dca-graph",
          isOptional: true,
        },
        {
          name: "--dca-graph-url-format",
          isOptional: true,
        },
        {
          name: "--finalized-asm",
          isOptional: true,
        },
        {
          name: "--intermediate-asm",
          isOptional: true,
        },
        {
          name: "--ir",
          isOptional: true,
        },
        {
          name: "--time-phases",
          isOptional: true,
        },
        {
          name: "--reverse-order",
          isOptional: true,
        },
        {
          name: "--metrics-outfile",
          isOptional: true,
        },
        {
          name: "--json-abi",
          isOptional: true,
        },
        {
          name: "--json-storage-slots",
          isOptional: true,
        },
        {
          name: "--build-profile",
          isOptional: true,
        },
        {
          name: "--release",
          isOptional: true,
        },
        {
          name: "--error-on-warnings",
          isOptional: true,
        },
        {
          name: "--build-target",
          isOptional: true,
          suggestions: [
            {
              name: "fuel",
              description: "",
            },
            {
              name: "evm",
              description: "",
            },
            {
              name: "midenvm",
              description: "",
            },
          ],
        },
        {
          name: "filter",
          isOptional: true,
        },
        {
          name: "--filter-exact",
          isOptional: true,
        },
        {
          name: "--test-threads",
          isOptional: true,
        },
        {
          name: "--experimental-new-encoding",
          isOptional: true,
        },
      ],
    },
    {
      name: "update",
      description: "Update dependencies in the Forc dependencies directory",
      options: [
        {
          name: "-p",
          description:
            "Path to the project, if not specified, current working directory will be used",
        },
        {
          name: "-d",
          description:
            "Dependency to be updated. If not set, all dependencies will be updated",
        },
        {
          name: "-c",
          description:
            "Checks if the dependencies have newer versions. Won't actually perform the update, will output which ones are up-to-date and outdated",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "--ipfs-node",
          isOptional: true,
        },
      ],
    },
    {
      name: "plugins",
      description: "List all forc plugins",
      options: [
        {
          name: "-p",
          description: "Prints the absolute path to each discovered plugin",
        },
        {
          name: "-d",
          description:
            "Prints the long description associated with each listed plugin",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
      ],
    },
    {
      name: "template",
      description: "Create a new Forc project from a git template",
      options: [
        {
          name: "-u",
          description: "The template url, should be a git repo",
        },
        {
          name: "-t",
          description:
            "The name of the template that needs to be fetched and used from git repo provided",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "project-name",
          isOptional: true,
        },
      ],
    },
    {
      name: "contract-id",
      description:
        "Determine contract-id for a contract. For workspaces outputs all contract ids in the workspace",
      options: [
        {
          name: "-p",
          description:
            "Path to the project, if not specified, current working directory will be used",
        },
        {
          name: "-t",
          description: "Terse mode. Limited warning and error output",
        },
        {
          name: "-o",
          description:
            "If set, outputs a binary file representing the script bytes",
        },
        {
          name: "-g",
          description: "If set, outputs source file mapping in JSON format",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "--offline",
          isOptional: true,
        },
        {
          name: "--output-directory",
          isOptional: true,
        },
        {
          name: "--locked",
          isOptional: true,
        },
        {
          name: "--json-abi-with-callpaths",
          isOptional: true,
        },
        {
          name: "--ipfs-node",
          isOptional: true,
        },
        {
          name: "--json-abi",
          isOptional: true,
        },
        {
          name: "--json-storage-slots",
          isOptional: true,
        },
        {
          name: "--ast",
          isOptional: true,
        },
        {
          name: "--dca-graph",
          isOptional: true,
        },
        {
          name: "--dca-graph-url-format",
          isOptional: true,
        },
        {
          name: "--finalized-asm",
          isOptional: true,
        },
        {
          name: "--intermediate-asm",
          isOptional: true,
        },
        {
          name: "--ir",
          isOptional: true,
        },
        {
          name: "--time-phases",
          isOptional: true,
        },
        {
          name: "--reverse-order",
          isOptional: true,
        },
        {
          name: "--metrics-outfile",
          isOptional: true,
        },
        {
          name: "--build-profile",
          isOptional: true,
        },
        {
          name: "--release",
          isOptional: true,
        },
        {
          name: "--error-on-warnings",
          isOptional: true,
        },
        {
          name: "--salt",
          isOptional: true,
        },
        {
          name: "--experimental-new-encoding",
          isOptional: true,
        },
      ],
    },
    {
      name: "predicate-root",
      description:
        "Determine predicate-root for a predicate. For workspaces outputs all predicate roots in the workspace",
      options: [
        {
          name: "-p",
          description:
            "Path to the project, if not specified, current working directory will be used",
        },
        {
          name: "-t",
          description: "Terse mode. Limited warning and error output",
        },
        {
          name: "-o",
          description:
            "If set, outputs a binary file representing the script bytes",
        },
        {
          name: "-g",
          description: "If set, outputs source file mapping in JSON format",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "--offline",
          isOptional: true,
        },
        {
          name: "--output-directory",
          isOptional: true,
        },
        {
          name: "--locked",
          isOptional: true,
        },
        {
          name: "--json-abi-with-callpaths",
          isOptional: true,
        },
        {
          name: "--ipfs-node",
          isOptional: true,
        },
        {
          name: "--json-abi",
          isOptional: true,
        },
        {
          name: "--json-storage-slots",
          isOptional: true,
        },
        {
          name: "--ast",
          isOptional: true,
        },
        {
          name: "--dca-graph",
          isOptional: true,
        },
        {
          name: "--dca-graph-url-format",
          isOptional: true,
        },
        {
          name: "--finalized-asm",
          isOptional: true,
        },
        {
          name: "--intermediate-asm",
          isOptional: true,
        },
        {
          name: "--ir",
          isOptional: true,
        },
        {
          name: "--time-phases",
          isOptional: true,
        },
        {
          name: "--reverse-order",
          isOptional: true,
        },
        {
          name: "--metrics-outfile",
          isOptional: true,
        },
        {
          name: "--build-profile",
          isOptional: true,
        },
        {
          name: "--release",
          isOptional: true,
        },
        {
          name: "--error-on-warnings",
          isOptional: true,
        },
        {
          name: "--experimental-new-encoding",
          isOptional: true,
        },
      ],
    },
    {
      name: "debug",
      options: [
        {
          name: "-s",
          description: "Start the DAP server",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "api-url",
          isOptional: true,
        },
      ],
    },
    {
      name: "run",
      description:
        "Run script project. Crafts a script transaction then sends it to a running node",
      options: [
        {
          name: "-p",
          description:
            "Path to the project, if not specified, current working directory will be used",
        },
        {
          name: "-t",
          description: "Terse mode. Limited warning and error output",
        },
        {
          name: "-o",
          description:
            "If set, outputs a binary file representing the script bytes",
        },
        {
          name: "-g",
          description: "If set, outputs source file mapping in JSON format",
        },
        {
          name: "-d",
          description: "Hex string of data to input to script",
        },
        {
          name: "-r",
          description: "Pretty-print the outputs from the node",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "--offline",
          isOptional: true,
        },
        {
          name: "--output-directory",
          isOptional: true,
        },
        {
          name: "--locked",
          isOptional: true,
        },
        {
          name: "--json-abi-with-callpaths",
          isOptional: true,
        },
        {
          name: "--ipfs-node",
          isOptional: true,
        },
        {
          name: "--json-abi",
          isOptional: true,
        },
        {
          name: "--json-storage-slots",
          isOptional: true,
        },
        {
          name: "--ast",
          isOptional: true,
        },
        {
          name: "--dca-graph",
          isOptional: true,
        },
        {
          name: "--dca-graph-url-format",
          isOptional: true,
        },
        {
          name: "--finalized-asm",
          isOptional: true,
        },
        {
          name: "--intermediate-asm",
          isOptional: true,
        },
        {
          name: "--ir",
          isOptional: true,
        },
        {
          name: "--time-phases",
          isOptional: true,
        },
        {
          name: "--reverse-order",
          isOptional: true,
        },
        {
          name: "--metrics-outfile",
          isOptional: true,
        },
        {
          name: "--price",
          isOptional: true,
        },
        {
          name: "--script-gas-limit",
          isOptional: true,
        },
        {
          name: "--maturity",
          isOptional: true,
        },
        {
          name: "--build-profile",
          isOptional: true,
        },
        {
          name: "--release",
          isOptional: true,
        },
        {
          name: "--error-on-warnings",
          isOptional: true,
        },
        {
          name: "--node-url",
          isOptional: true,
        },
        {
          name: "--target",
          isOptional: true,
        },
        {
          name: "--testnet",
          isOptional: true,
        },
        {
          name: "--dry-run",
          isOptional: true,
        },
        {
          name: "--contract",
          isOptional: true,
        },
        {
          name: "--simulate",
          isOptional: true,
        },
        {
          name: "--default-signer",
          isOptional: true,
        },
        {
          name: "--unsigned",
          isOptional: true,
        },
        {
          name: "signing-key",
          isOptional: true,
        },
        {
          name: "--manual-signing",
          isOptional: true,
        },
        {
          name: "--args",
          isOptional: true,
        },
        {
          name: "--experimental-new-encoding",
          isOptional: true,
        },
      ],
    },
    {
      name: "crypto",
      description: "Forc plugin for hashing arbitrary data",
      subcommands: [
        {
          name: "keccak256",
          description: "Hashes the argument or file with this algorithm",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "--help",
              isOptional: true,
            },
            {
              name: "--version",
              isOptional: true,
            },
            {
              name: "content-or-filepath",
              isOptional: true,
            },
          ],
        },
        {
          name: "sha256",
          description: "Hashes the argument or file with this algorithm",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "--help",
              isOptional: true,
            },
            {
              name: "--version",
              isOptional: true,
            },
            {
              name: "content-or-filepath",
              isOptional: true,
            },
          ],
        },
        {
          name: "address",
          description: "Converts an address to another format",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "--help",
              isOptional: true,
            },
            {
              name: "--version",
              isOptional: true,
            },
            {
              name: "address",
              isOptional: true,
            },
          ],
        },
        {
          name: "get-public-key",
          description: "Get the public key from a message and its signature",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "--help",
              isOptional: true,
            },
            {
              name: "--version",
              isOptional: true,
            },
            {
              name: "signature",
              isOptional: true,
            },
            {
              name: "message",
              isOptional: true,
            },
          ],
        },
        {
          name: "new-key",
          description: "Creates a new key for use with fuel-core",
          options: [
            {
              name: "-k",
              description:
                "Key type to generate. It can either be `block-production` or `peering`",
              args: {
                name: "--key-type",
                isOptional: true,
                suggestions: [
                  {
                    name: "block-production",
                    description: "",
                  },
                  {
                    name: "peering",
                    description: "",
                  },
                ],
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "--help",
              isOptional: true,
            },
            {
              name: "--version",
              isOptional: true,
            },
          ],
        },
        {
          name: "parse-secret",
          description: "Parses a private key to view the associated public key",
          options: [
            {
              name: "-k",
              description:
                "Key type to generate. It can either be `block-production` or `peering`",
              args: {
                name: "--key-type",
                isOptional: true,
                suggestions: [
                  {
                    name: "block-production",
                    description: "",
                  },
                  {
                    name: "peering",
                    description: "",
                  },
                ],
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help information",
            },
          ],
          args: [
            {
              name: "--help",
              isOptional: true,
            },
            {
              name: "--version",
              isOptional: true,
            },
            {
              name: "secret",
              isOptional: true,
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          args: {
            name: "subcommand",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
      ],
    },
    {
      name: "doc",
      description: "Forc plugin for building a Sway package's documentation",
      options: [
        {
          name: "-s",
          description:
            "Silent mode. Don't output any warnings or errors to the command line",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "--manifest-path",
          isOptional: true,
        },
        {
          name: "--document-private-items",
          isOptional: true,
        },
        {
          name: "--open",
          isOptional: true,
        },
        {
          name: "--offline",
          isOptional: true,
        },
        {
          name: "--locked",
          isOptional: true,
        },
        {
          name: "--no-deps",
          isOptional: true,
        },
        {
          name: "--ipfs-node",
          isOptional: true,
        },
      ],
    },
    {
      name: "fmt",
      description: "Forc plugin for running the Sway code formatter",
      options: [
        {
          name: "-c",
          description: "Run in 'check' mode",
        },
        {
          name: "-p",
          description:
            "Path to the project, if not specified, current working directory will be used",
        },
        {
          name: "-f",
          description:
            "Formats a single .sw file with the default settings. If not specified, current working directory will be formatted using a Forc.toml configuration",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
      ],
    },
    {
      name: "submit",
      description: "A `forc` plugin for interacting with a Fuel node",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "--node-url",
          isOptional: true,
        },
        {
          name: "--target",
          isOptional: true,
        },
        {
          name: "--testnet",
          isOptional: true,
        },
        {
          name: "--await",
          isOptional: true,
        },
        {
          name: "--json",
          isOptional: true,
        },
        {
          name: "tx-path",
          isOptional: true,
        },
      ],
    },
    {
      name: "deploy",
      description: "Build output file options",
      options: [
        {
          name: "-p",
          description:
            "Path to the project, if not specified, current working directory will be used",
        },
        {
          name: "-t",
          description: "Terse mode. Limited warning and error output",
        },
        {
          name: "-o",
          description:
            "If set, outputs a binary file representing the script bytes",
        },
        {
          name: "-g",
          description: "If set, outputs source file mapping in JSON format",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: [
        {
          name: "--help",
          isOptional: true,
        },
        {
          name: "--version",
          isOptional: true,
        },
        {
          name: "--offline",
          isOptional: true,
        },
        {
          name: "--output-directory",
          isOptional: true,
        },
        {
          name: "--locked",
          isOptional: true,
        },
        {
          name: "--json-abi-with-callpaths",
          isOptional: true,
        },
        {
          name: "--ipfs-node",
          isOptional: true,
        },
        {
          name: "--json-abi",
          isOptional: true,
        },
        {
          name: "--json-storage-slots",
          isOptional: true,
        },
        {
          name: "--ast",
          isOptional: true,
        },
        {
          name: "--dca-graph",
          isOptional: true,
        },
        {
          name: "--dca-graph-url-format",
          isOptional: true,
        },
        {
          name: "--finalized-asm",
          isOptional: true,
        },
        {
          name: "--intermediate-asm",
          isOptional: true,
        },
        {
          name: "--ir",
          isOptional: true,
        },
        {
          name: "--time-phases",
          isOptional: true,
        },
        {
          name: "--reverse-order",
          isOptional: true,
        },
        {
          name: "--metrics-outfile",
          isOptional: true,
        },
        {
          name: "--price",
          isOptional: true,
        },
        {
          name: "--script-gas-limit",
          isOptional: true,
        },
        {
          name: "--maturity",
          isOptional: true,
        },
        {
          name: "--node-url",
          isOptional: true,
        },
        {
          name: "--target",
          isOptional: true,
        },
        {
          name: "--testnet",
          isOptional: true,
        },
        {
          name: "--salt",
          isOptional: true,
        },
        {
          name: "--default-salt",
          isOptional: true,
        },
        {
          name: "--build-profile",
          isOptional: true,
        },
        {
          name: "--default-signer",
          isOptional: true,
        },
        {
          name: "--unsigned",
          isOptional: true,
        },
        {
          name: "signing-key",
          isOptional: true,
        },
        {
          name: "--manual-signing",
          isOptional: true,
        },
        {
          name: "--JSON_FILE_PATH",
          isOptional: true,
        },
        {
          name: "--experimental-new-encoding",
          isOptional: true,
        },
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: {
        name: "subcommand",
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help information",
    },
    {
      name: "-v",
      description: "Use verbose output",
    },
    {
      name: "-s",
      description: "Silence all output",
    },
    {
      name: "-L",
      description: "Set the log level",
    },
  ],
  args: [
    {
      name: "--help",
      isOptional: true,
    },
    {
      name: "--version",
      isOptional: true,
    },
  ],
};

export default completion;
