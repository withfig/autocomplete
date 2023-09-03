const completionSpec: Fig.Spec = {
  name: "starkli",
  description:
    "Starkli, a ⚡ blazing ⚡ fast ⚡ CLI tool for Starknet powered by 🦀 starknet-rs 🦀",
  subcommands: [
    {
      name: "account",
      description: "Account management commands",
      subcommands: [
        {
          name: "fetch",
          description:
            "Fetch account config from an already deployed account contract",
          args: {
            name: "ADDRESS",
            description: "Contract address",
          },
          options: [
            {
              name: "--rpc",
              description: "Starknet JSON-RPC endpoint",
              args: {
                name: "RPC",
              },
            },
            {
              name: "--network",
              description: "Starknet network",
              args: {
                name: "NETWORK",
                suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
              },
            },
            {
              name: "--force",
              description: "Overwrite the file if it already exists",
            },
            {
              name: "--output",
              description: "Path to save the account config file",
              args: {
                name: "OUTPUT",
                template: "filepaths",
              },
            },
            {
              name: "--log-traffic",
              description: "Log raw request/response traffic of providers",
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "deploy",
          description:
            "Deploy account contract with a DeployAccount transaction",
          args: {
            name: "FILE",
            description: "Path to the account config file",
            template: "filepaths",
          },
          options: [
            {
              name: "--rpc",
              description: "Starknet JSON-RPC endpoint",
              args: {
                name: "RPC",
              },
            },
            {
              name: "--network",
              description: "Starknet network",
              args: {
                name: "NETWORK",
                suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
              },
            },
            {
              name: "--keystore",
              description: "Path to keystore JSON file",
              args: {
                name: "KEYSTORE",
                template: "filepaths",
              },
            },
            {
              name: "--keystore-password",
              description:
                "Supply keystore password from command line option instead of prompt",
              args: {
                name: "keystore password",
              },
            },
            {
              name: "--private-key",
              description: "Private key in hex in plain text",
              args: {
                name: "PRIVATE_KEY",
              },
            },
            {
              name: "--max-fee",
              description: "Maximum transaction fee in Ether (18 decimals)",
              args: {
                name: "MAX_FEE",
              },
            },
            {
              name: "--max-fee-raw",
              description: "Maximum transaction fee in Wei",
              args: {
                name: "MAX_FEE_RAW",
              },
            },
            {
              name: "--estimate-only",
              description:
                "Only estimate transaction fee without sending transaction",
            },
            {
              name: "--log-traffic",
              description: "Log raw request/response traffic of providers",
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },

        {
          name: "oz",
          description: "Create and manage OpenZeppelin account contracts",
          subcommands: [
            {
              name: "init",
              description:
                "Create a new account configuration without actually deploying",
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },

    {
      name: "block",
      description: "Get Starknet block",
      args: {
        name: "BLOCK_ID",
        description: "Block number, hash, or tag (latest/pending)",
        isOptional: true,
        default: "latest",
      },
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--full",
          description: "Fetch full transactions instead of hashes only",
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "block-hash",
      description: "Get latest block hash",
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "block-number",
      description: "Get latest block number",
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "block-time",
      description: "Get Starknet block timestamp only",
      args: {
        name: "BLOCK_ID",
        description: "Block number, hash, or tag (latest/pending)",
        isOptional: true,
        default: "latest",
      },
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--unix",
          description: "Show block time in Unix timestamp format",
        },
        {
          name: "--rfc2822",
          description: "Show block time in RFC 2822 format",
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "call",
      description: "Call contract functions without sending transactions",
      args: [
        {
          name: "CONTRACT_ADDRESS",
          description: "Contract address",
        },
        {
          name: "SELECTOR",
          description: "Name of the function being called",
        },
        {
          name: "CALLDATA",
          description: "Raw function call arguments",
        },
      ],
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "chain-id",
      description: "Get Starknet network ID",
      args: {
        name: "BLOCK_ID",
        description: "Block number, hash, or tag (latest/pending)",
        isOptional: true,
        default: "latest",
      },
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--no-decode",
          description: "Do not show the decoded text",
        },
        {
          name: "--dec",
          description:
            "Display the decimal instead of hexadecimal representation",
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "class-at",
      description: "Get contract class deployed at a certain address",
      args: {
        name: "ADDRESS",
        description: "Contract address",
      },
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "class-by-hash",
      description: "Get contract class by hash",
      args: {
        name: "HASH",
        description: "Class hash",
      },
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "class-hash",
      description:
        "Calculate class hash from any contract artifacts (Sierra, casm, legacy)",
      args: {
        name: "FILE",
        description: "Path to contract artifact file",
        template: "filepaths",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "class-hash-at",
      description: "Get contract class hash deployed at a certain address",
      args: {
        name: "ADDRESS",
        description: "Contract address",
      },
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "completions",
      description: "Generate shell completions script",
    },
    {
      name: "declare",
      description: "Declare a contract class",
      args: {
        name: "FILE",
        description: "Path to contract artifact file",
        template: "filepaths",
      },
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--keystore",
          description: "Path to keystore JSON file",
          args: {
            name: "KEYSTORE",
            template: "filepaths",
          },
        },
        {
          name: "--keystore-password",
          description:
            "Supply keystore password from command line option instead of prompt",
          args: {
            name: "KEYSTORE_PASSWORD",
          },
        },
        {
          name: "--private-key",
          description: "Private key in hex in plain text",
          args: {
            name: "PRIVATE_KEY",
          },
        },
        {
          name: "--compiler-version",
          description: "Statically-linked Sierra compiler version",
          args: {
            name: "COMPILER_VERSION",
            suggestions: ["2.0.1"],
          },
        },
        {
          name: "--casm-hash",
          description: "Override Sierra compilation and use CASM hash directly",
          args: {
            name: "CASM_HASH",
          },
        },
        {
          name: "--account",
          description: "Path to account config JSON file",
          args: {
            name: "ACCOUNT",
            template: "filepaths",
          },
        },
        {
          name: "--max-fee",
          description: "Maximum transaction fee in Ether (18 decimals)",
          args: {
            name: "MAX_FEE",
          },
        },
        {
          name: "--max-fee-raw",
          description: "Maximum transaction fee in Wei",
          args: {
            name: "MAX_FEE_RAW",
          },
        },
        {
          name: "--estimate-only",
          description:
            "Only estimate transaction fee without sending transaction",
        },
        {
          name: "--watch",
          description: "Wait for the transaction to confirm",
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy contract via the Universal Deployer Contract",
      args: [
        {
          name: "CLASS_HASH",
          description: "Class hash",
        },
        {
          name: "CTOR_ARGS",
          description: "Raw constructor arguments",
        },
      ],
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--keystore",
          description: "Path to keystore JSON file",
          args: {
            name: "KEYSTORE",
            template: "filepaths",
          },
        },
        {
          name: "--keystore-password",
          description:
            "Supply keystore password from command line option instead of prompt",
          args: {
            name: "KEYSTORE_PASSWORD",
          },
        },
        {
          name: "--private-key",
          description: "Private key in hex in plain text",
          args: {
            name: "PRIVATE_KEY",
          },
        },
        {
          name: "--not-unique",
          description: "Do not derive contract address from deployer address",
        },
        {
          name: "--account",
          description: "Path to account config JSON file",
          args: {
            name: "ACCOUNT",
            template: "filepaths",
          },
        },
        {
          name: "--max-fee",
          description: "Maximum transaction fee in Ether (18 decimals)",
          args: {
            name: "MAX_FEE",
          },
        },
        {
          name: "--max-fee-raw",
          description: "Maximum transaction fee in Wei",
          args: {
            name: "MAX_FEE_RAW",
          },
        },
        {
          name: "--estimate-only",
          description:
            "Only estimate transaction fee without sending transaction",
        },
        {
          name: "--salt",
          description: "Use the given salt to compute contract deploy address",
          args: {
            name: "SALT",
          },
        },
        {
          name: "--watch",
          description: "Wait for the transaction to confirm",
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "invoke",
      description: "Send an invoke transaction from an account contract",
      args: {
        name: "CALLS",
        description:
          "One or more contract calls. See documentation for more details",
      },
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--keystore",
          description: "Path to keystore JSON file",
          args: {
            name: "KEYSTORE",
            template: "filepaths",
          },
        },
        {
          name: "--keystore-password",
          description:
            "Supply keystore password from command line option instead of prompt",
          args: {
            name: "KEYSTORE_PASSWORD",
          },
        },
        {
          name: "--private-key",
          description: "Private key in hex in plain text",
          args: {
            name: "PRIVATE_KEY",
          },
        },
        {
          name: "--account",
          description: "Path to account config JSON file",
          args: {
            name: "ACCOUNT",
            template: "filepaths",
          },
        },
        {
          name: "--max-fee",
          description: "Maximum transaction fee in Ether (18 decimals)",
          args: {
            name: "MAX_FEE",
          },
        },
        {
          name: "--max-fee-raw",
          description: "Maximum transaction fee in Wei",
          args: {
            name: "MAX_FEE_RAW",
          },
        },
        {
          name: "--estimate-only",
          description:
            "Only estimate transaction fee without sending transaction",
        },
        {
          name: "--watch",
          description: "Wait for the transaction to confirm",
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "mont",
      description: "Print the montgomery representation of a field element",
      args: {
        name: "FELT",
        description:
          "Encoded string value in felt, in decimal or hexadecimal representation",
      },
      options: [
        {
          name: "--hex",
          description: "Emit array elements in hexadecimal format",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "nonce",
      description: "Get nonce for a certain contract",
      args: {
        name: "ADDRESS",
        description: "Contract address",
      },
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "parse-cairo-string",
      description:
        "Decode string from felt with the Cairo short string representation",
      args: {
        name: "FELT",
        description:
          "Encoded string value in felt, in decimal or hexadecimal representation",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "selector",
      description: "Calculate selector from name",
      args: {
        name: "NAME",
        description: "Selector name",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "signer",
      description: "Signer management commands",
      subcommands: [
        {
          name: "keystore",
          description: "Keystore management commands",
          subcommands: [
            {
              name: "new",
              description: "Randomly generate a new keystore",
              args: {
                name: "FILE",
                description: "Path to save the JSON keystore",
                template: "filepaths",
              },
              options: [
                {
                  name: "--password",
                  description:
                    "Supply password from command line option instead of prompt",
                  args: {
                    name: "PASSWORD",
                  },
                },
                {
                  name: "--force",
                  description: "Overwrite the file if it already exists",
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "from-key",
              description:
                "Create a keystore file from an existing private key",
              args: {
                name: "FILE",
                description: "Path to save the JSON keystore",
                template: "filepaths",
              },
              options: [
                {
                  name: "--force",
                  description: "Overwrite the file if it already exists",
                },
                {
                  name: "--private-key-stdin",
                  description:
                    "Take the private key from stdin instead of prompt",
                },
                {
                  name: "--password",
                  description:
                    "Supply password from command line option instead of prompt",
                  args: {
                    name: "PASSWORD",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "inspect",
              description: "Check the public key of an existing keystore file",
              args: {
                name: "FILE",
                description: "Path to the JSON keystore",
                template: "filepaths",
              },
              options: [
                {
                  name: "--password",
                  description:
                    "Supply password from command line option instead of prompt",
                  args: {
                    name: "PASSWORD",
                  },
                },
                {
                  name: "--raw",
                  description: "Print the public key only",
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
            {
              name: "inspect-private",
              description: "Check the private key of an existing keystore file",
              args: {
                name: "FILE",
                description: "Path to the JSON keystore",
                template: "filepaths",
              },
              options: [
                {
                  name: "--password",
                  description:
                    "Supply password from command line option instead of prompt",
                  args: {
                    name: "PASSWORD",
                  },
                },
                {
                  name: "--raw",
                  description: "Print the private key only",
                },
                {
                  name: ["-h", "--help"],
                  description: "Print help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "gen-keypair",
          description: "Randomly generate a new key pair",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "state-update",
      description: "Get state update from a certain block",
      args: {
        name: "BLOCK_ID",
        description: "Block number, hash, or tag (latest/pending)",
        isOptional: true,
        default: "latest",
      },
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "storage",
      description: "Get storage value for a slot at a contract",
      args: [
        {
          name: "ADDRESS",
          description: "Contract address",
        },
        {
          name: "KEY",
          description: "Storage key",
        },
      ],
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "syncing",
      description: "Get node syncing status",
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "to-cairo-string",
      description:
        "Encode string into felt with the Cairo short string representation",
      args: {
        name: "TEXT",
        description: "Text to be encoded in felt",
      },
      options: [
        {
          name: "--dec",
          description: "Display the encoded value in decimal representation",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "transaction",
      description: "Get Starknet transaction by hash",
      args: {
        name: "HASH",
        description: "Transaction hash",
      },
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "transaction-receipt",
      description: "Get transaction receipt by hash",
      args: {
        name: "HASH",
        description: "Transaction hash",
      },
      options: [
        {
          name: "--rpc",
          description: "Starknet JSON-RPC endpoint",
          args: {
            name: "RPC",
          },
        },
        {
          name: "--network",
          description: "Starknet network",
          args: {
            name: "NETWORK",
            suggestions: ["mainnet", "goerli-1", "goerli-2", "integration"],
          },
        },
        {
          name: "--log-traffic",
          description: "Log raw request/response traffic of providers",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
  ],
};
export default completionSpec;
