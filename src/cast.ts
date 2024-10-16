const completion: Fig.Spec = {
  name: "cast",
  description: "Perform Ethereum RPC calls from the comfort of your command line",
  subcommands: [
    {
      name: ["max-int", "--max-int", "maxi"],
      description: "Prints the maximum value of the given integer type",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "type",
        isOptional: true,
      },
    },
    {
      name: ["min-int", "--min-int", "mini"],
      description: "Prints the minimum value of the given integer type",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "type",
        isOptional: true,
      },
    },
    {
      name: ["max-uint", "--max-uint", "maxu"],
      description: "Prints the maximum value of the given integer type",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "type",
        isOptional: true,
      },
    },
    {
      name: ["address-zero", "--address-zero", "az"],
      description: "Prints the zero address",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: ["hash-zero", "--hash-zero", "hz"],
      description: "Prints the zero hash",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: ["from-utf8", "--from-ascii", "--from-utf8", "from-ascii", "fu", "fa"],
      description: "Convert UTF8 text to hex",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "text",
        isOptional: true,
      },
    },
    {
      name: ["concat-hex", "--concat-hex", "ch"],
      description: "Concatenate hex strings",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "data",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: ["from-bin", "--from-bin", "from-binx", "fb"],
      description: "Convert binary data into hex data",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: ["to-hexdata", "--to-hexdata", "thd", "2hd"],
      description: "Normalize the input to lowercase, 0x-prefixed hex",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "input",
        isOptional: true,
      },
    },
    {
      name: ["to-check-sum-address", "--to-checksum-address", "--to-checksum", "to-checksum", "ta", "2a"],
      description: "Convert an address to a checksummed format (EIP-55)",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "address",
        isOptional: true,
      },
    },
    {
      name: ["to-ascii", "--to-ascii", "tas", "2as"],
      description: "Convert hex data to an ASCII string",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "hexdata",
        isOptional: true,
      },
    },
    {
      name: ["to-utf8", "--to-utf8", "tu8", "2u8"],
      description: "Convert hex data to a utf-8 string",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "hexdata",
        isOptional: true,
      },
    },
    {
      name: ["from-fixed-point", "--from-fix", "ff"],
      description: "Convert a fixed point number into an integer",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: [
        {
          name: "decimals",
          isOptional: true,
        },
        {
          name: "value",
          isOptional: true,
        },
      ]
    },
    {
      name: ["to-bytes32", "--to-bytes32", "tb", "2b"],
      description: "Right-pads hex data to 32 bytes",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "bytes",
        isOptional: true,
      },
    },
    {
      name: ["to-fixed-point", "--to-fix", "tf", "2f"],
      description: "Convert an integer into a fixed point number",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: [
        {
          name: "decimals",
          isOptional: true,
        },
        {
          name: "value",
          isOptional: true,
        },
      ]
    },
    {
      name: ["to-uint256", "--to-uint256", "tu", "2u"],
      description: "Convert a number to a hex-encoded uint256",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: ["to-int256", "--to-int256", "ti", "2i"],
      description: "Convert a number to a hex-encoded int256",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "shl",
      description: "Perform a left shifting operation",
      options: [
        {
          name: "--base-in",
          description: "The input base",
          isRepeatable: true,
          args: {
            name: "base_in",
            isOptional: true,
          },
        },
        {
          name: "--base-out",
          description: "The output base",
          isRepeatable: true,
          args: {
            name: "base_out",
            isOptional: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: [
        {
          name: "value",
        },
        {
          name: "bits",
        },
      ]
    },
    {
      name: "shr",
      description: "Perform a right shifting operation",
      options: [
        {
          name: "--base-in",
          description: "The input base,",
          isRepeatable: true,
          args: {
            name: "base_in",
            isOptional: true,
          },
        },
        {
          name: "--base-out",
          description: "The output base,",
          isRepeatable: true,
          args: {
            name: "base_out",
            isOptional: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: [
        {
          name: "value",
        },
        {
          name: "bits",
        },
      ]
    },
    {
      name: ["to-unit", "--to-unit", "tun", "2un"],
      description: "Convert an ETH amount into another unit (ether, gwei or wei)",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "value",
          isOptional: true,
        },
        {
          name: "unit",
          isOptional: true,
        },
      ]
    },
    {
      name: ["to-wei", "--to-wei", "tw", "2w"],
      description: "Convert an ETH amount to wei",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "value",
          isOptional: true,
        },
        {
          name: "unit",
          isOptional: true,
        },
      ]
    },
    {
      name: ["from-wei", "--from-wei", "fw"],
      description: "Convert wei into an ETH amount",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "value",
          isOptional: true,
        },
        {
          name: "unit",
          isOptional: true,
        },
      ]
    },
    {
      name: ["to-rlp", "--to-rlp"],
      description: "RLP encodes hex data, or an array of hex data",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: ["from-rlp", "--from-rlp"],
      description: "Decodes RLP hex-encoded data",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: ["to-hex", "--to-hex", "th", "2h"],
      description: "Converts a number of one base to another",
      options: [
        {
          name: ["-i", "--base-in"],
          description: "The input base",
          isRepeatable: true,
          args: {
            name: "base_in",
            isOptional: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: ["to-dec", "--to-dec", "td", "2d"],
      description: "Converts a number of one base to decimal",
      options: [
        {
          name: ["-i", "--base-in"],
          description: "The input base",
          isRepeatable: true,
          args: {
            name: "base_in",
            isOptional: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: ["to-base", "--to-base", "--to-radix", "to-radix", "tr", "2r"],
      description: "Converts a number of one base to another",
      options: [
        {
          name: ["-i", "--base-in"],
          description: "The input base",
          isRepeatable: true,
          args: {
            name: "base_in",
            isOptional: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: [
        {
          name: "value",
          isOptional: true,
        },
        {
          name: "base_out",
          isOptional: true,
        },
      ]
    },
    {
      name: ["access-list", "ac", "acl"],
      description: "Create an access list for a transaction",
      options: [
        {
          name: ["-B", "--block"],
          description: "The block height to query at",
          isRepeatable: true,
          args: {
            name: "block",
            isOptional: true,
          },
        },
        {
          name: "--gas-limit",
          description: "Gas limit for the transaction",
          isRepeatable: true,
          args: {
            name: "gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--gas-price",
          description: "Gas price for legacy transactions, or max fee per gas for EIP1559 transactions, either specified in wei, or as a string with a unit type",
          isRepeatable: true,
          args: {
            name: "gas_price",
            isOptional: true,
          },
        },
        {
          name: "--priority-gas-price",
          description: "Max priority fee per gas for EIP1559 transactions",
          isRepeatable: true,
          args: {
            name: "priority_gas_price",
            isOptional: true,
          },
        },
        {
          name: "--value",
          description: "Ether to send in the transaction, either specified in wei, or as a string with a unit type",
          isRepeatable: true,
          args: {
            name: "value",
            isOptional: true,
          },
        },
        {
          name: "--nonce",
          description: "Nonce for the transaction",
          isRepeatable: true,
          args: {
            name: "nonce",
            isOptional: true,
          },
        },
        {
          name: "--blob-gas-price",
          description: "Gas price for EIP-4844 blob transaction",
          exclusiveOn: [
            "--legacy",
          ],
          isRepeatable: true,
          args: {
            name: "blob_gas_price",
            isOptional: true,
          },
        },
        {
          name: "--auth",
          description: "EIP-7702 authorization list",
          exclusiveOn: [
            "--legacy",
            "--blob",
          ],
          isRepeatable: true,
          args: {
            name: "auth",
            isOptional: true,
          },
        },
        {
          name: "--access-list",
          description: "EIP-2930 access list",
          isRepeatable: true,
          args: {
            name: "access_list",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--etherscan-api-key"],
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "key",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--chain"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--from"],
          description: "The sender account",
          isRepeatable: true,
          args: {
            name: "from",
            isOptional: true,
          },
        },
        {
          name: "--private-key",
          description: "Use the provided private key",
          isRepeatable: true,
          args: {
            name: "private_key",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic",
          description: "Use the mnemonic phrase of mnemonic file at the specified path",
          isRepeatable: true,
          args: {
            name: "mnemonic",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-passphrase",
          description: "Use a BIP39 passphrase for the mnemonic",
          isRepeatable: true,
          args: {
            name: "mnemonic_passphrase",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-derivation-path",
          description: "The wallet derivation path",
          isRepeatable: true,
          args: {
            name: "hd_path",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-index",
          description: "Use the private key from the given mnemonic index",
          exclusiveOn: [
            "--mnemonic-derivation-path",
          ],
          isRepeatable: true,
          args: {
            name: "mnemonic_index",
            isOptional: true,
          },
        },
        {
          name: "--keystore",
          description: "Use the keystore in the given folder or file",
          isRepeatable: true,
          args: {
            name: "keystore_path",
            isOptional: true,
          },
        },
        {
          name: "--account",
          description: "Use a keystore from the default keystores folder (~/.foundry/keystores) by its filename",
          exclusiveOn: [
            "--keystore",
          ],
          isRepeatable: true,
          args: {
            name: "keystore_account_name",
            isOptional: true,
          },
        },
        {
          name: "--password",
          description: "The keystore password",
          isRepeatable: true,
          args: {
            name: "keystore_password",
            isOptional: true,
          },
        },
        {
          name: "--password-file",
          description: "The keystore password file path",
          isRepeatable: true,
          args: {
            name: "keystore_password_file",
            isOptional: true,
          },
        },
        {
          name: ["-j", "--json"],
          description: "Print the access list as JSON",
        },
        {
          name: "--legacy",
          description: "Send a legacy transaction instead of an EIP1559 transaction",
        },
        {
          name: "--blob",
          description: "Send a EIP-4844 blob transaction",
          exclusiveOn: [
            "--legacy",
          ],
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-i", "--interactive"],
          description: "Open an interactive prompt to enter your private key",
        },
        {
          name: ["-l", "--ledger"],
          description: "Use a Ledger hardware wallet",
        },
        {
          name: ["-t", "--trezor"],
          description: "Use a Trezor hardware wallet",
        },
        {
          name: "--aws",
          description: "Use AWS Key Management Service",
        },
        {
          name: "--gcp",
          description: "Use Google Cloud Key Management Service",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "to",
          isOptional: true,
        },
        {
          name: "sig",
          isOptional: true,
        },
        {
          name: "args",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: ["logs", "l"],
      description: "Get logs by signature or topic",
      options: [
        {
          name: "--from-block",
          description: "The block height to start query at",
          isRepeatable: true,
          args: {
            name: "from_block",
            isOptional: true,
          },
        },
        {
          name: "--to-block",
          description: "The block height to stop query at",
          isRepeatable: true,
          args: {
            name: "to_block",
            isOptional: true,
          },
        },
        {
          name: "--address",
          description: "The contract address to filter on",
          isRepeatable: true,
          args: {
            name: "address",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--etherscan-api-key"],
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "key",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--chain"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--from"],
          description: "The sender account",
          isRepeatable: true,
          args: {
            name: "from",
            isOptional: true,
          },
        },
        {
          name: "--private-key",
          description: "Use the provided private key",
          isRepeatable: true,
          args: {
            name: "private_key",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic",
          description: "Use the mnemonic phrase of mnemonic file at the specified path",
          isRepeatable: true,
          args: {
            name: "mnemonic",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-passphrase",
          description: "Use a BIP39 passphrase for the mnemonic",
          isRepeatable: true,
          args: {
            name: "mnemonic_passphrase",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-derivation-path",
          description: "The wallet derivation path",
          isRepeatable: true,
          args: {
            name: "hd_path",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-index",
          description: "Use the private key from the given mnemonic index",
          exclusiveOn: [
            "--mnemonic-derivation-path",
          ],
          isRepeatable: true,
          args: {
            name: "mnemonic_index",
            isOptional: true,
          },
        },
        {
          name: "--keystore",
          description: "Use the keystore in the given folder or file",
          isRepeatable: true,
          args: {
            name: "keystore_path",
            isOptional: true,
          },
        },
        {
          name: "--account",
          description: "Use a keystore from the default keystores folder (~/.foundry/keystores) by its filename",
          exclusiveOn: [
            "--keystore",
          ],
          isRepeatable: true,
          args: {
            name: "keystore_account_name",
            isOptional: true,
          },
        },
        {
          name: "--password",
          description: "The keystore password",
          isRepeatable: true,
          args: {
            name: "keystore_password",
            isOptional: true,
          },
        },
        {
          name: "--password-file",
          description: "The keystore password file path",
          isRepeatable: true,
          args: {
            name: "keystore_password_file",
            isOptional: true,
          },
        },
        {
          name: "--subscribe",
          description: "If the RPC type and endpoints supports `eth_subscribe` stream logs instead of printing and exiting. Will continue until interrupted or TO_BLOCK is reached",
        },
        {
          name: ["-j", "--json"],
          description: "Print the logs as JSON.s",
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-i", "--interactive"],
          description: "Open an interactive prompt to enter your private key",
        },
        {
          name: ["-l", "--ledger"],
          description: "Use a Ledger hardware wallet",
        },
        {
          name: ["-t", "--trezor"],
          description: "Use a Trezor hardware wallet",
        },
        {
          name: "--aws",
          description: "Use AWS Key Management Service",
        },
        {
          name: "--gcp",
          description: "Use Google Cloud Key Management Service",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "sig_or_topic",
          isOptional: true,
        },
        {
          name: "topics_or_args",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: ["block", "bl"],
      description: "Get information about a block",
      options: [
        {
          name: ["-f", "--field"],
          description: "If specified, only get the given field of the block",
          isRepeatable: true,
          args: {
            name: "field",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--full",
        },
        {
          name: ["-j", "--json"],
          description: "Print the block as JSON",
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "block",
        isOptional: true,
      },
    },
    {
      name: ["block-number", "bn"],
      description: "Get the latest block number",
      options: [
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "block",
        isOptional: true,
      },
    },
    {
      name: ["call", "c"],
      description: "Perform a call on an account without publishing a transaction",
      subcommands: [
        {
          name: "--create",
          description: "Ignores the address field and simulates creating a contract",
          options: [
            {
              name: "--value",
              description: "Ether to send in the transaction",
              isRepeatable: true,
              args: {
                name: "value",
                isOptional: true,
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: [
            {
              name: "code",
            },
            {
              name: "sig",
              isOptional: true,
            },
            {
              name: "args",
              isVariadic: true,
              isOptional: true,
            },
          ]
        },
        {
          name: "help",
          description: "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "--create",
              description: "Ignores the address field and simulates creating a contract",
            },
            {
              name: "help",
              description: "Print this message or the help of the given subcommand(s)",
            },
          ],
        },
      ],
      options: [
        {
          name: "--data",
          description: "Data for the transaction",
          isRepeatable: true,
          args: {
            name: "data",
            isOptional: true,
          },
        },
        {
          name: "--labels",
          description: "Labels to apply to the traces; format: `address:label`. Can only be used with `--trace`",
          isRepeatable: true,
          args: {
            name: "labels",
            isOptional: true,
          },
        },
        {
          name: "--evm-version",
          description: "The EVM Version to use. Can only be used with `--trace`",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: ["-b", "--block"],
          description: "The block height to query at",
          isRepeatable: true,
          args: {
            name: "block",
            isOptional: true,
          },
        },
        {
          name: "--gas-limit",
          description: "Gas limit for the transaction",
          isRepeatable: true,
          args: {
            name: "gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--gas-price",
          description: "Gas price for legacy transactions, or max fee per gas for EIP1559 transactions, either specified in wei, or as a string with a unit type",
          isRepeatable: true,
          args: {
            name: "gas_price",
            isOptional: true,
          },
        },
        {
          name: "--priority-gas-price",
          description: "Max priority fee per gas for EIP1559 transactions",
          isRepeatable: true,
          args: {
            name: "priority_gas_price",
            isOptional: true,
          },
        },
        {
          name: "--value",
          description: "Ether to send in the transaction, either specified in wei, or as a string with a unit type",
          isRepeatable: true,
          args: {
            name: "value",
            isOptional: true,
          },
        },
        {
          name: "--nonce",
          description: "Nonce for the transaction",
          isRepeatable: true,
          args: {
            name: "nonce",
            isOptional: true,
          },
        },
        {
          name: "--blob-gas-price",
          description: "Gas price for EIP-4844 blob transaction",
          exclusiveOn: [
            "--legacy",
          ],
          isRepeatable: true,
          args: {
            name: "blob_gas_price",
            isOptional: true,
          },
        },
        {
          name: "--auth",
          description: "EIP-7702 authorization list",
          exclusiveOn: [
            "--legacy",
            "--blob",
          ],
          isRepeatable: true,
          args: {
            name: "auth",
            isOptional: true,
          },
        },
        {
          name: "--access-list",
          description: "EIP-2930 access list",
          isRepeatable: true,
          args: {
            name: "access_list",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--etherscan-api-key"],
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "key",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--chain"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--from"],
          description: "The sender account",
          isRepeatable: true,
          args: {
            name: "from",
            isOptional: true,
          },
        },
        {
          name: "--private-key",
          description: "Use the provided private key",
          isRepeatable: true,
          args: {
            name: "private_key",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic",
          description: "Use the mnemonic phrase of mnemonic file at the specified path",
          isRepeatable: true,
          args: {
            name: "mnemonic",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-passphrase",
          description: "Use a BIP39 passphrase for the mnemonic",
          isRepeatable: true,
          args: {
            name: "mnemonic_passphrase",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-derivation-path",
          description: "The wallet derivation path",
          isRepeatable: true,
          args: {
            name: "hd_path",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-index",
          description: "Use the private key from the given mnemonic index",
          exclusiveOn: [
            "--mnemonic-derivation-path",
          ],
          isRepeatable: true,
          args: {
            name: "mnemonic_index",
            isOptional: true,
          },
        },
        {
          name: "--keystore",
          description: "Use the keystore in the given folder or file",
          isRepeatable: true,
          args: {
            name: "keystore_path",
            isOptional: true,
          },
        },
        {
          name: "--account",
          description: "Use a keystore from the default keystores folder (~/.foundry/keystores) by its filename",
          exclusiveOn: [
            "--keystore",
          ],
          isRepeatable: true,
          args: {
            name: "keystore_account_name",
            isOptional: true,
          },
        },
        {
          name: "--password",
          description: "The keystore password",
          isRepeatable: true,
          args: {
            name: "keystore_password",
            isOptional: true,
          },
        },
        {
          name: "--password-file",
          description: "The keystore password file path",
          isRepeatable: true,
          args: {
            name: "keystore_password_file",
            isOptional: true,
          },
        },
        {
          name: "--trace",
          description: "Forks the remote rpc, executes the transaction locally and prints a trace",
        },
        {
          name: "--debug",
          description: "Opens an interactive debugger. Can only be used with `--trace`",
        },
        {
          name: "--decode-internal",
        },
        {
          name: ["-j", "--json"],
          description: "Print the decoded output as JSON",
        },
        {
          name: "--alphanet",
          description: "Enable Alphanet features",
        },
        {
          name: "--legacy",
          description: "Send a legacy transaction instead of an EIP1559 transaction",
        },
        {
          name: "--blob",
          description: "Send a EIP-4844 blob transaction",
          exclusiveOn: [
            "--legacy",
          ],
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-i", "--interactive"],
          description: "Open an interactive prompt to enter your private key",
        },
        {
          name: ["-l", "--ledger"],
          description: "Use a Ledger hardware wallet",
        },
        {
          name: ["-t", "--trezor"],
          description: "Use a Trezor hardware wallet",
        },
        {
          name: "--aws",
          description: "Use AWS Key Management Service",
        },
        {
          name: "--gcp",
          description: "Use Google Cloud Key Management Service",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "to",
          isOptional: true,
        },
        {
          name: "sig",
          isOptional: true,
        },
        {
          name: "args",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: ["calldata", "cd"],
      description: "ABI-encode a function with arguments",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: [
        {
          name: "sig",
        },
        {
          name: "args",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: "chain",
      description: "Get the symbolic name of the current chain",
      options: [
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: ["chain-id", "ci", "cid"],
      description: "Get the Ethereum chain ID",
      options: [
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: ["client", "cl"],
      description: "Get the current client version",
      options: [
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: ["compute-address", "ca"],
      description: "Compute the contract address from a given nonce and deployer address",
      options: [
        {
          name: "--nonce",
          description: "The nonce of the deployer address",
          isRepeatable: true,
          args: {
            name: "nonce",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "address",
        isOptional: true,
      },
    },
    {
      name: ["disassemble", "da"],
      description: "Disassembles hex encoded bytecode into individual / human readable opcodes",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "bytecode",
      },
    },
    {
      name: ["mktx", "m"],
      description: "Build and sign a transaction",
      subcommands: [
        {
          name: "--create",
          description: "Use to deploy raw contract bytecode",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: [
            {
              name: "code",
            },
            {
              name: "sig",
              isOptional: true,
            },
            {
              name: "args",
              isVariadic: true,
              isOptional: true,
            },
          ]
        },
        {
          name: "help",
          description: "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "--create",
              description: "Use to deploy raw contract bytecode",
            },
            {
              name: "help",
              description: "Print this message or the help of the given subcommand(s)",
            },
          ],
        },
      ],
      options: [
        {
          name: "--gas-limit",
          description: "Gas limit for the transaction",
          isRepeatable: true,
          args: {
            name: "gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--gas-price",
          description: "Gas price for legacy transactions, or max fee per gas for EIP1559 transactions, either specified in wei, or as a string with a unit type",
          isRepeatable: true,
          args: {
            name: "gas_price",
            isOptional: true,
          },
        },
        {
          name: "--priority-gas-price",
          description: "Max priority fee per gas for EIP1559 transactions",
          isRepeatable: true,
          args: {
            name: "priority_gas_price",
            isOptional: true,
          },
        },
        {
          name: "--value",
          description: "Ether to send in the transaction, either specified in wei, or as a string with a unit type",
          isRepeatable: true,
          args: {
            name: "value",
            isOptional: true,
          },
        },
        {
          name: "--nonce",
          description: "Nonce for the transaction",
          isRepeatable: true,
          args: {
            name: "nonce",
            isOptional: true,
          },
        },
        {
          name: "--blob-gas-price",
          description: "Gas price for EIP-4844 blob transaction",
          exclusiveOn: [
            "--legacy",
          ],
          isRepeatable: true,
          args: {
            name: "blob_gas_price",
            isOptional: true,
          },
        },
        {
          name: "--auth",
          description: "EIP-7702 authorization list",
          exclusiveOn: [
            "--legacy",
            "--blob",
          ],
          isRepeatable: true,
          args: {
            name: "auth",
            isOptional: true,
          },
        },
        {
          name: "--access-list",
          description: "EIP-2930 access list",
          isRepeatable: true,
          args: {
            name: "access_list",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--path",
          description: "The path of blob data to be sent",
          exclusiveOn: [
            "--legacy",
          ],
          isRepeatable: true,
          args: {
            name: "path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--etherscan-api-key"],
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "key",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--chain"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--from"],
          description: "The sender account",
          isRepeatable: true,
          args: {
            name: "from",
            isOptional: true,
          },
        },
        {
          name: "--private-key",
          description: "Use the provided private key",
          isRepeatable: true,
          args: {
            name: "private_key",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic",
          description: "Use the mnemonic phrase of mnemonic file at the specified path",
          isRepeatable: true,
          args: {
            name: "mnemonic",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-passphrase",
          description: "Use a BIP39 passphrase for the mnemonic",
          isRepeatable: true,
          args: {
            name: "mnemonic_passphrase",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-derivation-path",
          description: "The wallet derivation path",
          isRepeatable: true,
          args: {
            name: "hd_path",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-index",
          description: "Use the private key from the given mnemonic index",
          exclusiveOn: [
            "--mnemonic-derivation-path",
          ],
          isRepeatable: true,
          args: {
            name: "mnemonic_index",
            isOptional: true,
          },
        },
        {
          name: "--keystore",
          description: "Use the keystore in the given folder or file",
          isRepeatable: true,
          args: {
            name: "keystore_path",
            isOptional: true,
          },
        },
        {
          name: "--account",
          description: "Use a keystore from the default keystores folder (~/.foundry/keystores) by its filename",
          exclusiveOn: [
            "--keystore",
          ],
          isRepeatable: true,
          args: {
            name: "keystore_account_name",
            isOptional: true,
          },
        },
        {
          name: "--password",
          description: "The keystore password",
          isRepeatable: true,
          args: {
            name: "keystore_password",
            isOptional: true,
          },
        },
        {
          name: "--password-file",
          description: "The keystore password file path",
          isRepeatable: true,
          args: {
            name: "keystore_password_file",
            isOptional: true,
          },
        },
        {
          name: "--legacy",
          description: "Send a legacy transaction instead of an EIP1559 transaction",
        },
        {
          name: "--blob",
          description: "Send a EIP-4844 blob transaction",
          exclusiveOn: [
            "--legacy",
          ],
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-i", "--interactive"],
          description: "Open an interactive prompt to enter your private key",
        },
        {
          name: ["-l", "--ledger"],
          description: "Use a Ledger hardware wallet",
        },
        {
          name: ["-t", "--trezor"],
          description: "Use a Trezor hardware wallet",
        },
        {
          name: "--aws",
          description: "Use AWS Key Management Service",
        },
        {
          name: "--gcp",
          description: "Use Google Cloud Key Management Service",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "to",
          isOptional: true,
        },
        {
          name: "sig",
          isOptional: true,
        },
        {
          name: "args",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: ["namehash", "na", "nh"],
      description: "Calculate the ENS namehash of a name",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "name",
        isOptional: true,
      },
    },
    {
      name: ["tx", "t"],
      description: "Get information about a transaction",
      options: [
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--raw",
          description: "Print the raw RLP encoded transaction",
        },
        {
          name: ["-j", "--json"],
          description: "Print as JSON",
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "tx_hash",
        },
        {
          name: "field",
          isOptional: true,
        },
      ]
    },
    {
      name: ["receipt", "re"],
      description: "Get the transaction receipt for a transaction",
      options: [
        {
          name: "--confirmations",
          description: "The number of confirmations until the receipt is fetched",
          isRepeatable: true,
          args: {
            name: "confirmations",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--async",
          description: "Exit immediately if the transaction was not found",
        },
        {
          name: ["-j", "--json"],
          description: "Print as JSON",
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "tx_hash",
        },
        {
          name: "field",
          isOptional: true,
        },
      ]
    },
    {
      name: ["send", "s"],
      description: "Sign and publish a transaction",
      subcommands: [
        {
          name: "--create",
          description: "Use to deploy raw contract bytecode",
          options: [
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: [
            {
              name: "code",
            },
            {
              name: "sig",
              isOptional: true,
            },
            {
              name: "args",
              isVariadic: true,
              isOptional: true,
            },
          ]
        },
        {
          name: "help",
          description: "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "--create",
              description: "Use to deploy raw contract bytecode",
            },
            {
              name: "help",
              description: "Print this message or the help of the given subcommand(s)",
            },
          ],
        },
      ],
      options: [
        {
          name: "--confirmations",
          description: "The number of confirmations until the receipt is fetched",
          isRepeatable: true,
          args: {
            name: "confirmations",
            isOptional: true,
          },
        },
        {
          name: "--timeout",
          description: "Timeout for sending the transaction",
          isRepeatable: true,
          args: {
            name: "timeout",
            isOptional: true,
          },
        },
        {
          name: "--gas-limit",
          description: "Gas limit for the transaction",
          isRepeatable: true,
          args: {
            name: "gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--gas-price",
          description: "Gas price for legacy transactions, or max fee per gas for EIP1559 transactions, either specified in wei, or as a string with a unit type",
          isRepeatable: true,
          args: {
            name: "gas_price",
            isOptional: true,
          },
        },
        {
          name: "--priority-gas-price",
          description: "Max priority fee per gas for EIP1559 transactions",
          isRepeatable: true,
          args: {
            name: "priority_gas_price",
            isOptional: true,
          },
        },
        {
          name: "--value",
          description: "Ether to send in the transaction, either specified in wei, or as a string with a unit type",
          isRepeatable: true,
          args: {
            name: "value",
            isOptional: true,
          },
        },
        {
          name: "--nonce",
          description: "Nonce for the transaction",
          isRepeatable: true,
          args: {
            name: "nonce",
            isOptional: true,
          },
        },
        {
          name: "--blob-gas-price",
          description: "Gas price for EIP-4844 blob transaction",
          exclusiveOn: [
            "--legacy",
          ],
          isRepeatable: true,
          args: {
            name: "blob_gas_price",
            isOptional: true,
          },
        },
        {
          name: "--auth",
          description: "EIP-7702 authorization list",
          exclusiveOn: [
            "--legacy",
            "--blob",
          ],
          isRepeatable: true,
          args: {
            name: "auth",
            isOptional: true,
          },
        },
        {
          name: "--access-list",
          description: "EIP-2930 access list",
          isRepeatable: true,
          args: {
            name: "access_list",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--etherscan-api-key"],
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "key",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--chain"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--from"],
          description: "The sender account",
          isRepeatable: true,
          args: {
            name: "from",
            isOptional: true,
          },
        },
        {
          name: "--private-key",
          description: "Use the provided private key",
          isRepeatable: true,
          args: {
            name: "private_key",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic",
          description: "Use the mnemonic phrase of mnemonic file at the specified path",
          isRepeatable: true,
          args: {
            name: "mnemonic",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-passphrase",
          description: "Use a BIP39 passphrase for the mnemonic",
          isRepeatable: true,
          args: {
            name: "mnemonic_passphrase",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-derivation-path",
          description: "The wallet derivation path",
          isRepeatable: true,
          args: {
            name: "hd_path",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-index",
          description: "Use the private key from the given mnemonic index",
          exclusiveOn: [
            "--mnemonic-derivation-path",
          ],
          isRepeatable: true,
          args: {
            name: "mnemonic_index",
            isOptional: true,
          },
        },
        {
          name: "--keystore",
          description: "Use the keystore in the given folder or file",
          isRepeatable: true,
          args: {
            name: "keystore_path",
            isOptional: true,
          },
        },
        {
          name: "--account",
          description: "Use a keystore from the default keystores folder (~/.foundry/keystores) by its filename",
          exclusiveOn: [
            "--keystore",
          ],
          isRepeatable: true,
          args: {
            name: "keystore_account_name",
            isOptional: true,
          },
        },
        {
          name: "--password",
          description: "The keystore password",
          isRepeatable: true,
          args: {
            name: "keystore_password",
            isOptional: true,
          },
        },
        {
          name: "--password-file",
          description: "The keystore password file path",
          isRepeatable: true,
          args: {
            name: "keystore_password_file",
            isOptional: true,
          },
        },
        {
          name: "--path",
          description: "The path of blob data to be sent",
          exclusiveOn: [
            "--legacy",
          ],
          isRepeatable: true,
          args: {
            name: "path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--async",
          description: "Only print the transaction hash and exit immediately",
        },
        {
          name: ["-j", "--json"],
          description: "Print the transaction receipt as JSON",
        },
        {
          name: "--unlocked",
          description: "Send via `eth_sendTransaction using the `--from` argument or $ETH_FROM as sender",
        },
        {
          name: "--legacy",
          description: "Send a legacy transaction instead of an EIP1559 transaction",
        },
        {
          name: "--blob",
          description: "Send a EIP-4844 blob transaction",
          exclusiveOn: [
            "--legacy",
          ],
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-i", "--interactive"],
          description: "Open an interactive prompt to enter your private key",
        },
        {
          name: ["-l", "--ledger"],
          description: "Use a Ledger hardware wallet",
        },
        {
          name: ["-t", "--trezor"],
          description: "Use a Trezor hardware wallet",
        },
        {
          name: "--aws",
          description: "Use AWS Key Management Service",
        },
        {
          name: "--gcp",
          description: "Use Google Cloud Key Management Service",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "to",
          isOptional: true,
        },
        {
          name: "sig",
          isOptional: true,
        },
        {
          name: "args",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: ["publish", "p"],
      description: "Publish a raw transaction to the network",
      options: [
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--async",
          description: "Only print the transaction hash and exit immediately",
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "raw_tx",
      },
    },
    {
      name: ["estimate", "e"],
      description: "Estimate the gas cost of a transaction",
      subcommands: [
        {
          name: "--create",
          description: "Estimate gas cost to deploy a smart contract",
          options: [
            {
              name: "--value",
              description: "Ether to send in the transaction",
              isRepeatable: true,
              args: {
                name: "value",
                isOptional: true,
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: [
            {
              name: "code",
            },
            {
              name: "sig",
              isOptional: true,
            },
            {
              name: "args",
              isVariadic: true,
              isOptional: true,
            },
          ]
        },
        {
          name: "help",
          description: "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "--create",
              description: "Estimate gas cost to deploy a smart contract",
            },
            {
              name: "help",
              description: "Print this message or the help of the given subcommand(s)",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-B", "--block"],
          description: "The block height to query at",
          isRepeatable: true,
          args: {
            name: "block",
            isOptional: true,
          },
        },
        {
          name: "--gas-limit",
          description: "Gas limit for the transaction",
          isRepeatable: true,
          args: {
            name: "gas_limit",
            isOptional: true,
          },
        },
        {
          name: "--gas-price",
          description: "Gas price for legacy transactions, or max fee per gas for EIP1559 transactions, either specified in wei, or as a string with a unit type",
          isRepeatable: true,
          args: {
            name: "gas_price",
            isOptional: true,
          },
        },
        {
          name: "--priority-gas-price",
          description: "Max priority fee per gas for EIP1559 transactions",
          isRepeatable: true,
          args: {
            name: "priority_gas_price",
            isOptional: true,
          },
        },
        {
          name: "--value",
          description: "Ether to send in the transaction, either specified in wei, or as a string with a unit type",
          isRepeatable: true,
          args: {
            name: "value",
            isOptional: true,
          },
        },
        {
          name: "--nonce",
          description: "Nonce for the transaction",
          isRepeatable: true,
          args: {
            name: "nonce",
            isOptional: true,
          },
        },
        {
          name: "--blob-gas-price",
          description: "Gas price for EIP-4844 blob transaction",
          exclusiveOn: [
            "--legacy",
          ],
          isRepeatable: true,
          args: {
            name: "blob_gas_price",
            isOptional: true,
          },
        },
        {
          name: "--auth",
          description: "EIP-7702 authorization list",
          exclusiveOn: [
            "--legacy",
            "--blob",
          ],
          isRepeatable: true,
          args: {
            name: "auth",
            isOptional: true,
          },
        },
        {
          name: "--access-list",
          description: "EIP-2930 access list",
          isRepeatable: true,
          args: {
            name: "access_list",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--etherscan-api-key"],
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "key",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--chain"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--from"],
          description: "The sender account",
          isRepeatable: true,
          args: {
            name: "from",
            isOptional: true,
          },
        },
        {
          name: "--private-key",
          description: "Use the provided private key",
          isRepeatable: true,
          args: {
            name: "private_key",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic",
          description: "Use the mnemonic phrase of mnemonic file at the specified path",
          isRepeatable: true,
          args: {
            name: "mnemonic",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-passphrase",
          description: "Use a BIP39 passphrase for the mnemonic",
          isRepeatable: true,
          args: {
            name: "mnemonic_passphrase",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-derivation-path",
          description: "The wallet derivation path",
          isRepeatable: true,
          args: {
            name: "hd_path",
            isOptional: true,
          },
        },
        {
          name: "--mnemonic-index",
          description: "Use the private key from the given mnemonic index",
          exclusiveOn: [
            "--mnemonic-derivation-path",
          ],
          isRepeatable: true,
          args: {
            name: "mnemonic_index",
            isOptional: true,
          },
        },
        {
          name: "--keystore",
          description: "Use the keystore in the given folder or file",
          isRepeatable: true,
          args: {
            name: "keystore_path",
            isOptional: true,
          },
        },
        {
          name: "--account",
          description: "Use a keystore from the default keystores folder (~/.foundry/keystores) by its filename",
          exclusiveOn: [
            "--keystore",
          ],
          isRepeatable: true,
          args: {
            name: "keystore_account_name",
            isOptional: true,
          },
        },
        {
          name: "--password",
          description: "The keystore password",
          isRepeatable: true,
          args: {
            name: "keystore_password",
            isOptional: true,
          },
        },
        {
          name: "--password-file",
          description: "The keystore password file path",
          isRepeatable: true,
          args: {
            name: "keystore_password_file",
            isOptional: true,
          },
        },
        {
          name: "--legacy",
          description: "Send a legacy transaction instead of an EIP1559 transaction",
        },
        {
          name: "--blob",
          description: "Send a EIP-4844 blob transaction",
          exclusiveOn: [
            "--legacy",
          ],
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-i", "--interactive"],
          description: "Open an interactive prompt to enter your private key",
        },
        {
          name: ["-l", "--ledger"],
          description: "Use a Ledger hardware wallet",
        },
        {
          name: ["-t", "--trezor"],
          description: "Use a Trezor hardware wallet",
        },
        {
          name: "--aws",
          description: "Use AWS Key Management Service",
        },
        {
          name: "--gcp",
          description: "Use Google Cloud Key Management Service",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "to",
          isOptional: true,
        },
        {
          name: "sig",
          isOptional: true,
        },
        {
          name: "args",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: ["calldata-decode", "--calldata-decode", "cdd"],
      description: "Decode ABI-encoded input data",
      options: [
        {
          name: ["-j", "--json"],
          description: "Print the decoded calldata as JSON",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "sig",
        },
        {
          name: "calldata",
        },
      ]
    },
    {
      name: ["abi-decode", "ad", "--abi-decode"],
      description: "Decode ABI-encoded input or output data",
      options: [
        {
          name: ["-i", "--input"],
          description: "Whether to decode the input or output data",
        },
        {
          name: ["-j", "--json"],
          description: "Print the decoded calldata as JSON",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "sig",
        },
        {
          name: "calldata",
        },
      ]
    },
    {
      name: ["abi-encode", "ae"],
      description: "ABI encode the given function argument, excluding the selector",
      options: [
        {
          name: "--packed",
          description: "Whether to use packed encoding",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: [
        {
          name: "sig",
        },
        {
          name: "args",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: ["index", "in"],
      description: "Compute the storage slot for an entry in a mapping",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: [
        {
          name: "key_type",
        },
        {
          name: "key",
        },
        {
          name: "slot_number",
        },
      ]
    },
    {
      name: ["index-erc7201", "index-erc-7201", "index7201", "in7201"],
      description: "Compute storage slots as specified by `ERC-7201: Namespaced Storage Layout`",
      options: [
        {
          name: "--formula-id",
          description: "The formula ID. Currently the only supported formula is `erc7201`",
          isRepeatable: true,
          args: {
            name: "formula_id",
            isOptional: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "id",
        isOptional: true,
      },
    },
    {
      name: ["implementation", "impl"],
      description: "Fetch the EIP-1967 implementation account",
      options: [
        {
          name: ["-B", "--block"],
          description: "The block height to query at",
          isRepeatable: true,
          args: {
            name: "block",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "who",
      },
    },
    {
      name: ["admin", "adm"],
      description: "Fetch the EIP-1967 admin account",
      options: [
        {
          name: ["-B", "--block"],
          description: "The block height to query at",
          isRepeatable: true,
          args: {
            name: "block",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "who",
      },
    },
    {
      name: ["4byte", "4", "4b"],
      description: "Get the function signatures for the given selector from https://openchain.xyz",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "selector",
        isOptional: true,
      },
    },
    {
      name: ["4byte-decode", "4d", "4bd"],
      description: "Decode ABI-encoded calldata using https://openchain.xyz",
      options: [
        {
          name: ["-j", "--json"],
          description: "Print the decoded calldata as JSON",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "calldata",
        isOptional: true,
      },
    },
    {
      name: ["4byte-event", "4e", "4be", "topic0-event", "t0e"],
      description: "Get the event signature for a given topic 0 from https://openchain.xyz",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "topic",
        isOptional: true,
      },
    },
    {
      name: ["upload-signature", "ups"],
      description: "Upload the given signatures to https://openchain.xyz",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "signatures",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: ["pretty-calldata", "pc"],
      description: "Pretty print calldata",
      options: [
        {
          name: ["-o", "--offline"],
          description: "Skip the https://openchain.xyz lookup",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "calldata",
        isOptional: true,
      },
    },
    {
      name: ["age", "a"],
      description: "Get the timestamp of a block",
      options: [
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "block",
        isOptional: true,
      },
    },
    {
      name: ["balance", "b"],
      description: "Get the balance of an account in wei",
      options: [
        {
          name: ["-B", "--block"],
          description: "The block height to query at",
          isRepeatable: true,
          args: {
            name: "block",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--erc20",
          description: "Erc20 address to query, with the method `balanceOf(address) return (uint256)`, alias with '--erc721'",
          isRepeatable: true,
          args: {
            name: "erc20",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--ether"],
          description: "Format the balance in ether",
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "who",
      },
    },
    {
      name: ["base-fee", "ba", "fee", "basefee"],
      description: "Get the basefee of a block",
      options: [
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "block",
        isOptional: true,
      },
    },
    {
      name: ["code", "co"],
      description: "Get the runtime bytecode of a contract",
      options: [
        {
          name: ["-B", "--block"],
          description: "The block height to query at",
          isRepeatable: true,
          args: {
            name: "block",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: ["-d", "--disassemble"],
          description: "Disassemble bytecodes into individual opcodes",
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "who",
      },
    },
    {
      name: ["codesize", "cs"],
      description: "Get the runtime bytecode size of a contract",
      options: [
        {
          name: ["-B", "--block"],
          description: "The block height to query at",
          isRepeatable: true,
          args: {
            name: "block",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "who",
      },
    },
    {
      name: ["gas-price", "g"],
      description: "Get the current gas price",
      options: [
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
    },
    {
      name: ["sig-event", "se"],
      description: "Generate event signatures from event string",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "event_string",
        isOptional: true,
      },
    },
    {
      name: ["keccak", "k", "keccak256"],
      description: "Hash arbitrary data using Keccak-256",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "data",
        isOptional: true,
      },
    },
    {
      name: ["hash-message", "--hash-message", "hm"],
      description: "Hash a message according to EIP-191",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "message",
        isOptional: true,
      },
    },
    {
      name: ["resolve-name", "rn"],
      description: "Perform an ENS lookup",
      options: [
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: ["-v", "--verify"],
          description: "Perform a reverse lookup to verify that the name is correct",
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "who",
        isOptional: true,
      },
    },
    {
      name: ["lookup-address", "la"],
      description: "Perform an ENS reverse lookup",
      options: [
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: ["-v", "--verify"],
          description: "Perform a normal lookup to verify that the address is correct",
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "who",
        isOptional: true,
      },
    },
    {
      name: ["storage", "st"],
      description: "Get the raw value of a contract's storage slot",
      options: [
        {
          name: ["-b", "--block"],
          description: "The block height to query at",
          isRepeatable: true,
          args: {
            name: "block",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--etherscan-api-key"],
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "key",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--chain"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: "--libraries",
          description: "Set pre-linked libraries",
          isRepeatable: true,
          args: {
            name: "libraries",
            isOptional: true,
          },
        },
        {
          name: "--ignored-error-codes",
          description: "Ignore solc warnings by error code",
          isRepeatable: true,
          args: {
            name: "ignored_error_codes",
            isOptional: true,
          },
        },
        {
          name: "--use",
          description: "Specify the solc version, or a path to a local solc, to build with",
          isRepeatable: true,
          args: {
            name: "use_solc",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--out"],
          description: "The path to the contract artifacts folder",
          isRepeatable: true,
          args: {
            name: "out_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--revert-strings",
          description: "Revert string configuration",
          isRepeatable: true,
          args: {
            name: "revert_strings",
            isOptional: true,
          },
        },
        {
          name: "--build-info-path",
          description: "Output path to directory that build info files will be written to",
          isRepeatable: true,
          args: {
            name: "build_info_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--skip",
          description: "Skip building files whose names contain the given filter",
          isRepeatable: true,
          args: {
            name: "skip",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--evm-version",
          description: "The target EVM version",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: "--optimize",
          description: "Activate the Solidity optimizer",
          isRepeatable: true,
          args: {
            name: "optimize",
            isVariadic: true,
            isOptional: true,
            suggestions: [
              "true",
              "false",
            ],
          },
        },
        {
          name: "--optimizer-runs",
          description: "The number of runs specifies roughly how often each opcode of the deployed code will be executed across the life-time of the contract. This means it is a trade-off parameter between code size (deploy cost) and code execution cost (cost after deployment). An `optimizer_runs` parameter of `1` will produce short but expensive code. In contrast, a larger `optimizer_runs` parameter will produce longer but more gas efficient code",
          isRepeatable: true,
          args: {
            name: "optimizer_runs",
            isOptional: true,
          },
        },
        {
          name: "--extra-output",
          description: "Extra output to include in the contract's artifact",
          isRepeatable: true,
          args: {
            name: "extra_output",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--extra-output-files",
          description: "Extra output to write to separate files",
          isRepeatable: true,
          args: {
            name: "extra_output_files",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "The project's root path",
          isRepeatable: true,
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-C", "--contracts"],
          description: "The contracts source directory",
          isRepeatable: true,
          args: {
            name: "contracts",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-R", "--remappings"],
          description: "The project's remappings",
          isRepeatable: true,
          args: {
            name: "remappings",
            isOptional: true,
          },
        },
        {
          name: "--remappings-env",
          description: "The project's remappings from the environment",
          isRepeatable: true,
          args: {
            name: "remappings_env",
            isOptional: true,
          },
        },
        {
          name: "--cache-path",
          description: "The path to the compiler cache",
          isRepeatable: true,
          args: {
            name: "cache_path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--lib-paths",
          description: "The path to the library folder",
          isRepeatable: true,
          args: {
            name: "lib_paths",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--config-path",
          description: "Path to the config file",
          isRepeatable: true,
          args: {
            name: "config_path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: "--force",
          description: "Clear the cache and artifacts folder and recompile",
        },
        {
          name: "--no-cache",
          description: "Disable the cache",
        },
        {
          name: "--deny-warnings",
          description: "Warnings will trigger a compiler error",
        },
        {
          name: "--no-auto-detect",
          description: "Do not auto-detect the `solc` version",
        },
        {
          name: "--offline",
          description: "Do not access the network",
        },
        {
          name: "--via-ir",
          description: "Use the Yul intermediate representation compilation pipeline",
        },
        {
          name: "--no-metadata",
          description: "Do not append any metadata to the bytecode",
        },
        {
          name: "--silent",
          description: "Don't print anything on startup",
        },
        {
          name: "--build-info",
          description: "Generate build info files",
        },
        {
          name: "--eof",
          description: "Use EOF-enabled solc binary. Enables via-ir and sets EVM version to Prague. Requires Docker to be installed",
        },
        {
          name: "--ast",
          description: "Includes the AST as JSON in the compiler output",
        },
        {
          name: ["--hardhat", "--hh"],
          description: "Use the Hardhat-style project layout",
          exclusiveOn: [
            "-C",
            "--contracts",
          ],
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "address",
        },
        {
          name: "slot",
          isOptional: true,
        },
      ]
    },
    {
      name: ["proof", "pr"],
      description: "Generate a storage proof for a given storage slot",
      options: [
        {
          name: ["-B", "--block"],
          description: "The block height to query at",
          isRepeatable: true,
          args: {
            name: "block",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "address",
        },
        {
          name: "slots",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: ["nonce", "n"],
      description: "Get the nonce for an account",
      options: [
        {
          name: ["-B", "--block"],
          description: "The block height to query at",
          isRepeatable: true,
          args: {
            name: "block",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "who",
      },
    },
    {
      name: "codehash",
      description: "Get the codehash for an account",
      options: [
        {
          name: ["-B", "--block"],
          description: "The block height to query at",
          isRepeatable: true,
          args: {
            name: "block",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "who",
        },
        {
          name: "slots",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: ["storage-root", "sr"],
      description: "Get the storage root for an account",
      options: [
        {
          name: ["-B", "--block"],
          description: "The block height to query at",
          isRepeatable: true,
          args: {
            name: "block",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "who",
        },
        {
          name: "slots",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: ["etherscan-source", "et", "src"],
      description: "Get the source code of a contract from Etherscan",
      options: [
        {
          name: "-d",
          description: "The output directory/file to expand source tree into",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-e", "--etherscan-api-key"],
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "key",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--chain"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--flatten"],
          description: "Whether to flatten the source code",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "address",
      },
    },
    {
      name: ["wallet", "w"],
      description: "Wallet management utilities",
      subcommands: [
        {
          name: ["new", "n"],
          description: "Create a new random keypair",
          options: [
            {
              name: "--unsafe-password",
              description: "Password for the JSON keystore in cleartext",
              isRepeatable: true,
              args: {
                name: "unsafe_password",
                isOptional: true,
              },
            },
            {
              name: ["-n", "--number"],
              description: "Number of wallets to generate",
              isRepeatable: true,
              args: {
                name: "number",
                isOptional: true,
              },
            },
            {
              name: ["-p", "--password"],
              description: "Triggers a hidden password prompt for the JSON keystore",
              exclusiveOn: [
                "--unsafe-password",
              ],
            },
            {
              name: ["-j", "--json"],
              description: "Output generated wallets as JSON",
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: {
            name: "path",
            isOptional: true,
          },
        },
        {
          name: ["new-mnemonic", "nm"],
          description: "Generates a random BIP39 mnemonic phrase",
          options: [
            {
              name: ["-w", "--words"],
              description: "Number of words for the mnemonic",
              isRepeatable: true,
              args: {
                name: "words",
                isOptional: true,
              },
            },
            {
              name: ["-a", "--accounts"],
              description: "Number of accounts to display",
              isRepeatable: true,
              args: {
                name: "accounts",
                isOptional: true,
              },
            },
            {
              name: ["-e", "--entropy"],
              description: "Entropy to use for the mnemonic",
              exclusiveOn: [
                "-w",
                "--words",
              ],
              isRepeatable: true,
              args: {
                name: "entropy",
                isOptional: true,
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: ["vanity", "va"],
          description: "Generate a vanity address",
          options: [
            {
              name: "--starts-with",
              description: "Prefix regex pattern or hex string",
              isRepeatable: true,
              args: {
                name: "starts_with",
                isOptional: true,
              },
            },
            {
              name: "--ends-with",
              description: "Suffix regex pattern or hex string",
              isRepeatable: true,
              args: {
                name: "ends_with",
                isOptional: true,
              },
            },
            {
              name: "--nonce",
              description: "Generate a vanity contract address created by the generated keypair with the specified nonce",
              isRepeatable: true,
              args: {
                name: "nonce",
                isOptional: true,
              },
            },
            {
              name: "--save-path",
              description: "Path to save the generated vanity contract address to",
              isRepeatable: true,
              args: {
                name: "save_path",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
        },
        {
          name: ["address", "a", "addr"],
          description: "Convert a private key to an address",
          options: [
            {
              name: ["-f", "--from"],
              description: "The sender account",
              isRepeatable: true,
              args: {
                name: "from",
                isOptional: true,
              },
            },
            {
              name: "--private-key",
              description: "Use the provided private key",
              isRepeatable: true,
              args: {
                name: "private_key",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic",
              description: "Use the mnemonic phrase of mnemonic file at the specified path",
              isRepeatable: true,
              args: {
                name: "mnemonic",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-passphrase",
              description: "Use a BIP39 passphrase for the mnemonic",
              isRepeatable: true,
              args: {
                name: "mnemonic_passphrase",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-derivation-path",
              description: "The wallet derivation path",
              isRepeatable: true,
              args: {
                name: "hd_path",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-index",
              description: "Use the private key from the given mnemonic index",
              exclusiveOn: [
                "--mnemonic-derivation-path",
              ],
              isRepeatable: true,
              args: {
                name: "mnemonic_index",
                isOptional: true,
              },
            },
            {
              name: "--keystore",
              description: "Use the keystore in the given folder or file",
              isRepeatable: true,
              args: {
                name: "keystore_path",
                isOptional: true,
              },
            },
            {
              name: "--account",
              description: "Use a keystore from the default keystores folder (~/.foundry/keystores) by its filename",
              exclusiveOn: [
                "--keystore",
              ],
              isRepeatable: true,
              args: {
                name: "keystore_account_name",
                isOptional: true,
              },
            },
            {
              name: "--password",
              description: "The keystore password",
              isRepeatable: true,
              args: {
                name: "keystore_password",
                isOptional: true,
              },
            },
            {
              name: "--password-file",
              description: "The keystore password file path",
              isRepeatable: true,
              args: {
                name: "keystore_password_file",
                isOptional: true,
              },
            },
            {
              name: ["-i", "--interactive"],
              description: "Open an interactive prompt to enter your private key",
            },
            {
              name: ["-l", "--ledger"],
              description: "Use a Ledger hardware wallet",
            },
            {
              name: ["-t", "--trezor"],
              description: "Use a Trezor hardware wallet",
            },
            {
              name: "--aws",
              description: "Use AWS Key Management Service",
            },
            {
              name: "--gcp",
              description: "Use Google Cloud Key Management Service",
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: {
            name: "private_key_override",
            isOptional: true,
          },
        },
        {
          name: ["sign", "s"],
          description: "Sign a message or typed data",
          options: [
            {
              name: ["-f", "--from"],
              description: "The sender account",
              isRepeatable: true,
              args: {
                name: "from",
                isOptional: true,
              },
            },
            {
              name: "--private-key",
              description: "Use the provided private key",
              isRepeatable: true,
              args: {
                name: "private_key",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic",
              description: "Use the mnemonic phrase of mnemonic file at the specified path",
              isRepeatable: true,
              args: {
                name: "mnemonic",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-passphrase",
              description: "Use a BIP39 passphrase for the mnemonic",
              isRepeatable: true,
              args: {
                name: "mnemonic_passphrase",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-derivation-path",
              description: "The wallet derivation path",
              isRepeatable: true,
              args: {
                name: "hd_path",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-index",
              description: "Use the private key from the given mnemonic index",
              exclusiveOn: [
                "--mnemonic-derivation-path",
              ],
              isRepeatable: true,
              args: {
                name: "mnemonic_index",
                isOptional: true,
              },
            },
            {
              name: "--keystore",
              description: "Use the keystore in the given folder or file",
              isRepeatable: true,
              args: {
                name: "keystore_path",
                isOptional: true,
              },
            },
            {
              name: "--account",
              description: "Use a keystore from the default keystores folder (~/.foundry/keystores) by its filename",
              exclusiveOn: [
                "--keystore",
              ],
              isRepeatable: true,
              args: {
                name: "keystore_account_name",
                isOptional: true,
              },
            },
            {
              name: "--password",
              description: "The keystore password",
              isRepeatable: true,
              args: {
                name: "keystore_password",
                isOptional: true,
              },
            },
            {
              name: "--password-file",
              description: "The keystore password file path",
              isRepeatable: true,
              args: {
                name: "keystore_password_file",
                isOptional: true,
              },
            },
            {
              name: "--data",
              description: "Treat the message as JSON typed data",
            },
            {
              name: "--from-file",
              description: "Treat the message as a file containing JSON typed data. Requires `--data`",
            },
            {
              name: "--no-hash",
              description: "Treat the message as a raw 32-byte hash and sign it directly without hashing it again",
              exclusiveOn: [
                "--data",
              ],
            },
            {
              name: ["-i", "--interactive"],
              description: "Open an interactive prompt to enter your private key",
            },
            {
              name: ["-l", "--ledger"],
              description: "Use a Ledger hardware wallet",
            },
            {
              name: ["-t", "--trezor"],
              description: "Use a Trezor hardware wallet",
            },
            {
              name: "--aws",
              description: "Use AWS Key Management Service",
            },
            {
              name: "--gcp",
              description: "Use Google Cloud Key Management Service",
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: {
            name: "message",
          },
        },
        {
          name: ["sign-auth", "sa"],
          description: "EIP-7702 sign authorization",
          options: [
            {
              name: ["-r", "--rpc-url"],
              description: "The RPC endpoint",
              isRepeatable: true,
              args: {
                name: "url",
                isOptional: true,
              },
            },
            {
              name: "--jwt-secret",
              description: "JWT Secret for the RPC endpoint",
              isRepeatable: true,
              args: {
                name: "jwt_secret",
                isOptional: true,
              },
            },
            {
              name: "--nonce",
              isRepeatable: true,
              args: {
                name: "nonce",
                isOptional: true,
              },
            },
            {
              name: "--chain",
              isRepeatable: true,
              args: {
                name: "chain",
                isOptional: true,
              },
            },
            {
              name: ["-f", "--from"],
              description: "The sender account",
              isRepeatable: true,
              args: {
                name: "from",
                isOptional: true,
              },
            },
            {
              name: "--private-key",
              description: "Use the provided private key",
              isRepeatable: true,
              args: {
                name: "private_key",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic",
              description: "Use the mnemonic phrase of mnemonic file at the specified path",
              isRepeatable: true,
              args: {
                name: "mnemonic",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-passphrase",
              description: "Use a BIP39 passphrase for the mnemonic",
              isRepeatable: true,
              args: {
                name: "mnemonic_passphrase",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-derivation-path",
              description: "The wallet derivation path",
              isRepeatable: true,
              args: {
                name: "hd_path",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-index",
              description: "Use the private key from the given mnemonic index",
              exclusiveOn: [
                "--mnemonic-derivation-path",
              ],
              isRepeatable: true,
              args: {
                name: "mnemonic_index",
                isOptional: true,
              },
            },
            {
              name: "--keystore",
              description: "Use the keystore in the given folder or file",
              isRepeatable: true,
              args: {
                name: "keystore_path",
                isOptional: true,
              },
            },
            {
              name: "--account",
              description: "Use a keystore from the default keystores folder (~/.foundry/keystores) by its filename",
              exclusiveOn: [
                "--keystore",
              ],
              isRepeatable: true,
              args: {
                name: "keystore_account_name",
                isOptional: true,
              },
            },
            {
              name: "--password",
              description: "The keystore password",
              isRepeatable: true,
              args: {
                name: "keystore_password",
                isOptional: true,
              },
            },
            {
              name: "--password-file",
              description: "The keystore password file path",
              isRepeatable: true,
              args: {
                name: "keystore_password_file",
                isOptional: true,
              },
            },
            {
              name: "--flashbots",
              description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
            },
            {
              name: ["-i", "--interactive"],
              description: "Open an interactive prompt to enter your private key",
            },
            {
              name: ["-l", "--ledger"],
              description: "Use a Ledger hardware wallet",
            },
            {
              name: ["-t", "--trezor"],
              description: "Use a Trezor hardware wallet",
            },
            {
              name: "--aws",
              description: "Use AWS Key Management Service",
            },
            {
              name: "--gcp",
              description: "Use Google Cloud Key Management Service",
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: {
            name: "address",
          },
        },
        {
          name: ["verify", "v"],
          description: "Verify the signature of a message",
          options: [
            {
              name: ["-a", "--address"],
              description: "The address of the message signer",
              isRepeatable: true,
              args: {
                name: "address",
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: [
            {
              name: "message",
            },
            {
              name: "signature",
            },
          ]
        },
        {
          name: ["import", "i"],
          description: "Import a private key into an encrypted keystore",
          options: [
            {
              name: ["-k", "--keystore-dir"],
              description: "If provided, keystore will be saved here instead of the default keystores directory (~/.foundry/keystores)",
              isRepeatable: true,
              args: {
                name: "keystore_dir",
                isOptional: true,
              },
            },
            {
              name: "--unsafe-password",
              description: "Password for the JSON keystore in cleartext This is unsafe, we recommend using the default hidden password prompt",
              isRepeatable: true,
              args: {
                name: "unsafe_password",
                isOptional: true,
              },
            },
            {
              name: "--private-key",
              description: "Use the provided private key",
              isRepeatable: true,
              args: {
                name: "private_key",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic",
              description: "Use the mnemonic phrase of mnemonic file at the specified path",
              isRepeatable: true,
              args: {
                name: "mnemonic",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-passphrase",
              description: "Use a BIP39 passphrase for the mnemonic",
              isRepeatable: true,
              args: {
                name: "mnemonic_passphrase",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-derivation-path",
              description: "The wallet derivation path",
              isRepeatable: true,
              args: {
                name: "hd_path",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-index",
              description: "Use the private key from the given mnemonic index",
              exclusiveOn: [
                "--mnemonic-derivation-path",
              ],
              isRepeatable: true,
              args: {
                name: "mnemonic_index",
                isOptional: true,
              },
            },
            {
              name: ["-i", "--interactive"],
              description: "Open an interactive prompt to enter your private key",
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: {
            name: "account_name",
          },
        },
        {
          name: ["list", "ls"],
          description: "List all the accounts in the keystore default directory",
          options: [
            {
              name: "--dir",
              description: "List all the accounts in the keystore directory. Default keystore directory is used if no path provided",
              isRepeatable: true,
              args: {
                name: "dir",
                isVariadic: true,
                isOptional: true,
              },
            },
            {
              name: ["-m", "--max-senders"],
              description: "Max number of addresses to display from hardware wallets",
              isRepeatable: true,
              args: {
                name: "max_senders",
                isOptional: true,
              },
            },
            {
              name: ["-l", "--ledger"],
              description: "List accounts from a Ledger hardware wallet",
            },
            {
              name: ["-t", "--trezor"],
              description: "List accounts from a Trezor hardware wallet",
            },
            {
              name: "--aws",
              description: "List accounts from AWS KMS",
            },
            {
              name: "--all",
              description: "List all configured accounts",
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: ["private-key", "pk", "derive-private-key", "--derive-private-key"],
          description: "Derives private key from mnemonic",
          options: [
            {
              name: ["-f", "--from"],
              description: "The sender account",
              isRepeatable: true,
              args: {
                name: "from",
                isOptional: true,
              },
            },
            {
              name: "--private-key",
              description: "Use the provided private key",
              isRepeatable: true,
              args: {
                name: "private_key",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic",
              description: "Use the mnemonic phrase of mnemonic file at the specified path",
              isRepeatable: true,
              args: {
                name: "mnemonic",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-passphrase",
              description: "Use a BIP39 passphrase for the mnemonic",
              isRepeatable: true,
              args: {
                name: "mnemonic_passphrase",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-derivation-path",
              description: "The wallet derivation path",
              isRepeatable: true,
              args: {
                name: "hd_path",
                isOptional: true,
              },
            },
            {
              name: "--mnemonic-index",
              description: "Use the private key from the given mnemonic index",
              exclusiveOn: [
                "--mnemonic-derivation-path",
              ],
              isRepeatable: true,
              args: {
                name: "mnemonic_index",
                isOptional: true,
              },
            },
            {
              name: "--keystore",
              description: "Use the keystore in the given folder or file",
              isRepeatable: true,
              args: {
                name: "keystore_path",
                isOptional: true,
              },
            },
            {
              name: "--account",
              description: "Use a keystore from the default keystores folder (~/.foundry/keystores) by its filename",
              exclusiveOn: [
                "--keystore",
              ],
              isRepeatable: true,
              args: {
                name: "keystore_account_name",
                isOptional: true,
              },
            },
            {
              name: "--password",
              description: "The keystore password",
              isRepeatable: true,
              args: {
                name: "keystore_password",
                isOptional: true,
              },
            },
            {
              name: "--password-file",
              description: "The keystore password file path",
              isRepeatable: true,
              args: {
                name: "keystore_password_file",
                isOptional: true,
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Verbose mode, print the address and private key",
            },
            {
              name: ["-i", "--interactive"],
              description: "Open an interactive prompt to enter your private key",
            },
            {
              name: ["-l", "--ledger"],
              description: "Use a Ledger hardware wallet",
            },
            {
              name: ["-t", "--trezor"],
              description: "Use a Trezor hardware wallet",
            },
            {
              name: "--aws",
              description: "Use AWS Key Management Service",
            },
            {
              name: "--gcp",
              description: "Use Google Cloud Key Management Service",
            },
            {
              name: ["-h", "--help"],
              description: "Print help (see more with '--help')",
            },
          ],
          args: [
            {
              name: "mnemonic_override",
              isOptional: true,
            },
            {
              name: "mnemonic_index_or_derivation_path_override",
              isOptional: true,
            },
          ]
        },
        {
          name: ["decrypt-keystore", "dk"],
          description: "Decrypt a keystore file to get the private key",
          options: [
            {
              name: ["-k", "--keystore-dir"],
              description: "If not provided, keystore will try to be located at the default keystores directory (~/.foundry/keystores)",
              isRepeatable: true,
              args: {
                name: "keystore_dir",
                isOptional: true,
              },
            },
            {
              name: "--unsafe-password",
              description: "Password for the JSON keystore in cleartext This is unsafe, we recommend using the default hidden password prompt",
              isRepeatable: true,
              args: {
                name: "unsafe_password",
                isOptional: true,
              },
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
          args: {
            name: "account_name",
          },
        },
        {
          name: "help",
          description: "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "new",
              description: "Create a new random keypair",
            },
            {
              name: "new-mnemonic",
              description: "Generates a random BIP39 mnemonic phrase",
            },
            {
              name: "vanity",
              description: "Generate a vanity address",
            },
            {
              name: "address",
              description: "Convert a private key to an address",
            },
            {
              name: "sign",
              description: "Sign a message or typed data",
            },
            {
              name: "sign-auth",
              description: "EIP-7702 sign authorization",
            },
            {
              name: "verify",
              description: "Verify the signature of a message",
            },
            {
              name: "import",
              description: "Import a private key into an encrypted keystore",
            },
            {
              name: "list",
              description: "List all the accounts in the keystore default directory",
            },
            {
              name: "private-key",
              description: "Derives private key from mnemonic",
            },
            {
              name: "decrypt-keystore",
              description: "Decrypt a keystore file to get the private key",
            },
            {
              name: "help",
              description: "Print this message or the help of the given subcommand(s)",
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
      name: ["interface", "i"],
      description: "Generate a Solidity interface from a given ABI",
      options: [
        {
          name: ["-n", "--name"],
          description: "The name to use for the generated interface",
          isRepeatable: true,
          args: {
            name: "name",
            isOptional: true,
          },
        },
        {
          name: ["-p", "--pragma"],
          description: "Solidity pragma version",
          isRepeatable: true,
          args: {
            name: "pragma",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--output"],
          description: "The path to the output file",
          isRepeatable: true,
          args: {
            name: "output",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-e", "--etherscan-api-key"],
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "key",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--chain"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: ["-j", "--json"],
          description: "If specified, the interface will be output as JSON rather than Solidity",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "contract",
      },
    },
    {
      name: ["bind", "bi"],
      description: "Generate a rust binding from a given ABI",
      options: [
        {
          name: ["-o", "--output-dir"],
          description: "Path to where bindings will be stored",
          isRepeatable: true,
          args: {
            name: "output_dir",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--crate-name",
          description: "The name of the Rust crate to generate",
          isRepeatable: true,
          args: {
            name: "crate_name",
            isOptional: true,
          },
        },
        {
          name: "--crate-version",
          description: "The version of the Rust crate to generate",
          isRepeatable: true,
          args: {
            name: "crate_version",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--etherscan-api-key"],
          description: "The Etherscan (or equivalent) API key",
          isRepeatable: true,
          args: {
            name: "key",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--chain"],
          description: "The chain name or EIP-155 chain ID",
          isRepeatable: true,
          args: {
            name: "chain",
            isOptional: true,
          },
        },
        {
          name: "--separate-files",
          description: "Generate bindings as separate files",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "path_or_address",
      },
    },
    {
      name: ["sig", "si"],
      description: "Get the selector for a function",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: [
        {
          name: "sig",
          isOptional: true,
        },
        {
          name: "optimize",
          isOptional: true,
        },
      ]
    },
    {
      name: ["create2", "c2"],
      description: "Generate a deterministic contract address using CREATE2",
      options: [
        {
          name: ["-s", "--starts-with"],
          description: "Prefix for the contract address",
          isRepeatable: true,
          args: {
            name: "starts_with",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--ends-with"],
          description: "Suffix for the contract address",
          isRepeatable: true,
          args: {
            name: "ends_with",
            isOptional: true,
          },
        },
        {
          name: ["-m", "--matching"],
          description: "Sequence that the address has to match",
          isRepeatable: true,
          args: {
            name: "matching",
            isOptional: true,
          },
        },
        {
          name: ["-d", "--deployer"],
          description: "Address of the contract deployer",
          isRepeatable: true,
          args: {
            name: "deployer",
            isOptional: true,
          },
        },
        {
          name: "--salt",
          description: "Salt to be used for the contract deployment. This option separate from the default salt mining with filters",
          exclusiveOn: [
            "-s",
            "--starts-with",
            "-e",
            "--ends-with",
            "-m",
            "--matching",
            "-c",
            "--case-sensitive",
            "--caller",
            "--seed",
            "--no-random",
          ],
          isRepeatable: true,
          args: {
            name: "salt",
            isOptional: true,
          },
        },
        {
          name: ["-i", "--init-code"],
          description: "Init code of the contract to be deployed",
          isRepeatable: true,
          args: {
            name: "init_code",
            isOptional: true,
          },
        },
        {
          name: "--init-code-hash",
          description: "Init code hash of the contract to be deployed",
          isRepeatable: true,
          args: {
            name: "init_code_hash",
            isOptional: true,
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of threads to use. Defaults to and caps at the number of logical cores",
          isRepeatable: true,
          args: {
            name: "jobs",
            isOptional: true,
          },
        },
        {
          name: "--caller",
          description: "Address of the caller. Used for the first 20 bytes of the salt",
          isRepeatable: true,
          args: {
            name: "caller",
            isOptional: true,
          },
        },
        {
          name: "--seed",
          description: "The random number generator's seed, used to initialize the salt",
          isRepeatable: true,
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: ["-c", "--case-sensitive"],
          description: "Case sensitive matching",
        },
        {
          name: "--no-random",
          description: "Don't initialize the salt with a random value, and instead use the default value of 0",
          exclusiveOn: [
            "--seed",
          ],
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: ["find-block", "f"],
      description: "Get the block number closest to the provided timestamp",
      options: [
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "timestamp",
      },
    },
    {
      name: ["completions", "com"],
      description: "Generate shell completions script",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "shell",
        suggestions: [
          "bash",
          "elvish",
          "fish",
          "powershell",
          "zsh",
        ],
      },
    },
    {
      name: ["generate-fig-spec", "fig"],
      description: "Generate Fig autocompletion spec",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: ["run", "r"],
      description: "Runs a published transaction in a local environment and prints the trace",
      options: [
        {
          name: ["-l", "--label"],
          description: "Label addresses in the trace",
          isRepeatable: true,
          args: {
            name: "label",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--evm-version"],
          description: "The EVM version to use",
          isRepeatable: true,
          args: {
            name: "evm_version",
            isOptional: true,
          },
        },
        {
          name: "--compute-units-per-second",
          description: "Sets the number of assumed available compute units per second for this provider",
          isRepeatable: true,
          args: {
            name: "compute_units_per_second",
            isOptional: true,
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Opens the transaction in the debugger",
        },
        {
          name: "--decode-internal",
          description: "Whether to identify internal functions in traces",
        },
        {
          name: ["-t", "--trace-printer"],
          description: "Print out opcode traces",
        },
        {
          name: ["-q", "--quick"],
          description: "Executes the transaction only with the state from the previous block",
        },
        {
          name: ["-v", "--verbose"],
          description: "Prints the full address of the contract",
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["--no-rate-limit", "--no-rpc-rate-limit"],
          description: "Disables rate limiting for this node's provider",
        },
        {
          name: "--alphanet",
          description: "Enables Alphanet features",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "tx_hash",
      },
    },
    {
      name: ["rpc", "rp"],
      description: "Perform a raw JSON-RPC request",
      options: [
        {
          name: ["-r", "--rpc-url"],
          description: "The RPC endpoint",
          isRepeatable: true,
          args: {
            name: "url",
            isOptional: true,
          },
        },
        {
          name: "--jwt-secret",
          description: "JWT Secret for the RPC endpoint",
          isRepeatable: true,
          args: {
            name: "jwt_secret",
            isOptional: true,
          },
        },
        {
          name: ["-w", "--raw"],
          description: "Send raw JSON parameters",
        },
        {
          name: "--flashbots",
          description: "Use the Flashbots RPC URL with fast mode (<https://rpc.flashbots.net/fast>)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: [
        {
          name: "method",
        },
        {
          name: "params",
          isVariadic: true,
          isOptional: true,
        },
      ]
    },
    {
      name: ["format-bytes32-string", "--format-bytes32-string"],
      description: "Formats a string into bytes32 encoding",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "string",
        isOptional: true,
      },
    },
    {
      name: ["parse-bytes32-string", "--parse-bytes32-string"],
      description: "Parses a string from bytes32 encoding",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "bytes",
        isOptional: true,
      },
    },
    {
      name: ["parse-bytes32-address", "--parse-bytes32-address"],
      description: "Parses a checksummed address from bytes32 encoding",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "bytes",
        isOptional: true,
      },
    },
    {
      name: ["decode-transaction", "dt", "decode-tx"],
      description: "Decodes a raw signed EIP 2718 typed transaction",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "tx",
        isOptional: true,
      },
    },
    {
      name: ["selectors", "sel"],
      description: "Extracts function selectors and arguments from bytecode",
      options: [
        {
          name: ["-r", "--resolve"],
          description: "Resolve the function signatures for the extracted selectors using https://openchain.xyz",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "bytecode",
      },
    },
    {
      name: "decode-eof",
      description: "Decodes EOF container bytes",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "eof",
        isOptional: true,
      },
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      subcommands: [
        {
          name: "max-int",
          description: "Prints the maximum value of the given integer type",
        },
        {
          name: "min-int",
          description: "Prints the minimum value of the given integer type",
        },
        {
          name: "max-uint",
          description: "Prints the maximum value of the given integer type",
        },
        {
          name: "address-zero",
          description: "Prints the zero address",
        },
        {
          name: "hash-zero",
          description: "Prints the zero hash",
        },
        {
          name: "from-utf8",
          description: "Convert UTF8 text to hex",
        },
        {
          name: "concat-hex",
          description: "Concatenate hex strings",
        },
        {
          name: "from-bin",
          description: "Convert binary data into hex data",
        },
        {
          name: "to-hexdata",
          description: "Normalize the input to lowercase, 0x-prefixed hex",
        },
        {
          name: "to-check-sum-address",
          description: "Convert an address to a checksummed format (EIP-55)",
        },
        {
          name: "to-ascii",
          description: "Convert hex data to an ASCII string",
        },
        {
          name: "to-utf8",
          description: "Convert hex data to a utf-8 string",
        },
        {
          name: "from-fixed-point",
          description: "Convert a fixed point number into an integer",
        },
        {
          name: "to-bytes32",
          description: "Right-pads hex data to 32 bytes",
        },
        {
          name: "to-fixed-point",
          description: "Convert an integer into a fixed point number",
        },
        {
          name: "to-uint256",
          description: "Convert a number to a hex-encoded uint256",
        },
        {
          name: "to-int256",
          description: "Convert a number to a hex-encoded int256",
        },
        {
          name: "shl",
          description: "Perform a left shifting operation",
        },
        {
          name: "shr",
          description: "Perform a right shifting operation",
        },
        {
          name: "to-unit",
          description: "Convert an ETH amount into another unit (ether, gwei or wei)",
        },
        {
          name: "to-wei",
          description: "Convert an ETH amount to wei",
        },
        {
          name: "from-wei",
          description: "Convert wei into an ETH amount",
        },
        {
          name: "to-rlp",
          description: "RLP encodes hex data, or an array of hex data",
        },
        {
          name: "from-rlp",
          description: "Decodes RLP hex-encoded data",
        },
        {
          name: "to-hex",
          description: "Converts a number of one base to another",
        },
        {
          name: "to-dec",
          description: "Converts a number of one base to decimal",
        },
        {
          name: "to-base",
          description: "Converts a number of one base to another",
        },
        {
          name: "access-list",
          description: "Create an access list for a transaction",
        },
        {
          name: "logs",
          description: "Get logs by signature or topic",
        },
        {
          name: "block",
          description: "Get information about a block",
        },
        {
          name: "block-number",
          description: "Get the latest block number",
        },
        {
          name: "call",
          description: "Perform a call on an account without publishing a transaction",
          subcommands: [
            {
              name: "--create",
              description: "Ignores the address field and simulates creating a contract",
            },
          ],
        },
        {
          name: "calldata",
          description: "ABI-encode a function with arguments",
        },
        {
          name: "chain",
          description: "Get the symbolic name of the current chain",
        },
        {
          name: "chain-id",
          description: "Get the Ethereum chain ID",
        },
        {
          name: "client",
          description: "Get the current client version",
        },
        {
          name: "compute-address",
          description: "Compute the contract address from a given nonce and deployer address",
        },
        {
          name: "disassemble",
          description: "Disassembles hex encoded bytecode into individual / human readable opcodes",
        },
        {
          name: "mktx",
          description: "Build and sign a transaction",
          subcommands: [
            {
              name: "--create",
              description: "Use to deploy raw contract bytecode",
            },
          ],
        },
        {
          name: "namehash",
          description: "Calculate the ENS namehash of a name",
        },
        {
          name: "tx",
          description: "Get information about a transaction",
        },
        {
          name: "receipt",
          description: "Get the transaction receipt for a transaction",
        },
        {
          name: "send",
          description: "Sign and publish a transaction",
          subcommands: [
            {
              name: "--create",
              description: "Use to deploy raw contract bytecode",
            },
          ],
        },
        {
          name: "publish",
          description: "Publish a raw transaction to the network",
        },
        {
          name: "estimate",
          description: "Estimate the gas cost of a transaction",
          subcommands: [
            {
              name: "--create",
              description: "Estimate gas cost to deploy a smart contract",
            },
          ],
        },
        {
          name: "calldata-decode",
          description: "Decode ABI-encoded input data",
        },
        {
          name: "abi-decode",
          description: "Decode ABI-encoded input or output data",
        },
        {
          name: "abi-encode",
          description: "ABI encode the given function argument, excluding the selector",
        },
        {
          name: "index",
          description: "Compute the storage slot for an entry in a mapping",
        },
        {
          name: "index-erc7201",
          description: "Compute storage slots as specified by `ERC-7201: Namespaced Storage Layout`",
        },
        {
          name: "implementation",
          description: "Fetch the EIP-1967 implementation account",
        },
        {
          name: "admin",
          description: "Fetch the EIP-1967 admin account",
        },
        {
          name: "4byte",
          description: "Get the function signatures for the given selector from https://openchain.xyz",
        },
        {
          name: "4byte-decode",
          description: "Decode ABI-encoded calldata using https://openchain.xyz",
        },
        {
          name: "4byte-event",
          description: "Get the event signature for a given topic 0 from https://openchain.xyz",
        },
        {
          name: "upload-signature",
          description: "Upload the given signatures to https://openchain.xyz",
        },
        {
          name: "pretty-calldata",
          description: "Pretty print calldata",
        },
        {
          name: "age",
          description: "Get the timestamp of a block",
        },
        {
          name: "balance",
          description: "Get the balance of an account in wei",
        },
        {
          name: "base-fee",
          description: "Get the basefee of a block",
        },
        {
          name: "code",
          description: "Get the runtime bytecode of a contract",
        },
        {
          name: "codesize",
          description: "Get the runtime bytecode size of a contract",
        },
        {
          name: "gas-price",
          description: "Get the current gas price",
        },
        {
          name: "sig-event",
          description: "Generate event signatures from event string",
        },
        {
          name: "keccak",
          description: "Hash arbitrary data using Keccak-256",
        },
        {
          name: "hash-message",
          description: "Hash a message according to EIP-191",
        },
        {
          name: "resolve-name",
          description: "Perform an ENS lookup",
        },
        {
          name: "lookup-address",
          description: "Perform an ENS reverse lookup",
        },
        {
          name: "storage",
          description: "Get the raw value of a contract's storage slot",
        },
        {
          name: "proof",
          description: "Generate a storage proof for a given storage slot",
        },
        {
          name: "nonce",
          description: "Get the nonce for an account",
        },
        {
          name: "codehash",
          description: "Get the codehash for an account",
        },
        {
          name: "storage-root",
          description: "Get the storage root for an account",
        },
        {
          name: "etherscan-source",
          description: "Get the source code of a contract from Etherscan",
        },
        {
          name: "wallet",
          description: "Wallet management utilities",
          subcommands: [
            {
              name: "new",
              description: "Create a new random keypair",
            },
            {
              name: "new-mnemonic",
              description: "Generates a random BIP39 mnemonic phrase",
            },
            {
              name: "vanity",
              description: "Generate a vanity address",
            },
            {
              name: "address",
              description: "Convert a private key to an address",
            },
            {
              name: "sign",
              description: "Sign a message or typed data",
            },
            {
              name: "sign-auth",
              description: "EIP-7702 sign authorization",
            },
            {
              name: "verify",
              description: "Verify the signature of a message",
            },
            {
              name: "import",
              description: "Import a private key into an encrypted keystore",
            },
            {
              name: "list",
              description: "List all the accounts in the keystore default directory",
            },
            {
              name: "private-key",
              description: "Derives private key from mnemonic",
            },
            {
              name: "decrypt-keystore",
              description: "Decrypt a keystore file to get the private key",
            },
          ],
        },
        {
          name: "interface",
          description: "Generate a Solidity interface from a given ABI",
        },
        {
          name: "bind",
          description: "Generate a rust binding from a given ABI",
        },
        {
          name: "sig",
          description: "Get the selector for a function",
        },
        {
          name: "create2",
          description: "Generate a deterministic contract address using CREATE2",
        },
        {
          name: "find-block",
          description: "Get the block number closest to the provided timestamp",
        },
        {
          name: "completions",
          description: "Generate shell completions script",
        },
        {
          name: "generate-fig-spec",
          description: "Generate Fig autocompletion spec",
        },
        {
          name: "run",
          description: "Runs a published transaction in a local environment and prints the trace",
        },
        {
          name: "rpc",
          description: "Perform a raw JSON-RPC request",
        },
        {
          name: "format-bytes32-string",
          description: "Formats a string into bytes32 encoding",
        },
        {
          name: "parse-bytes32-string",
          description: "Parses a string from bytes32 encoding",
        },
        {
          name: "parse-bytes32-address",
          description: "Parses a checksummed address from bytes32 encoding",
        },
        {
          name: "decode-transaction",
          description: "Decodes a raw signed EIP 2718 typed transaction",
        },
        {
          name: "selectors",
          description: "Extracts function selectors and arguments from bytecode",
        },
        {
          name: "decode-eof",
          description: "Decodes EOF container bytes",
        },
        {
          name: "help",
          description: "Print this message or the help of the given subcommand(s)",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
};

export default completion;
