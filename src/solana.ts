const completionSpec: Fig.Spec = {
  name: "solana",
  description:
    "Solana command-line tool for interacting with the Solana blockchain",
  subcommands: [
    {
      name: "account",
      description: "Show the contents of an account",
      args: {
        name: "account_pubkey",
        description: "Account public key to query",
      },
      options: [
        {
          name: ["--output", "-o"],
          description: "Return information in specified output format",
          args: {
            name: "format",
            suggestions: ["json", "json-compact"],
          },
        },
        {
          name: "--lamports",
          description: "Display balance in lamports instead of SOL",
        },
        {
          name: "--use-deprecated-commitment",
          description: "Use deprecated commitment configuration",
        },
      ],
    },
    {
      name: "address",
      description: "Get your public key",
      options: [
        {
          name: "--confirm-key",
          description: "Confirm key on hardware wallet",
        },
      ],
    },
    {
      name: "airdrop",
      description: "Request SOL from a faucet",
      args: [
        {
          name: "amount",
          description: "The amount to airdrop, in SOL",
        },
        {
          name: "recipient",
          description: "The account address of airdrop recipient",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--faucet-host",
          description: "Faucet host to use",
          args: {
            name: "host",
          },
        },
        {
          name: "--faucet-port",
          description: "Faucet port to use",
          args: {
            name: "port",
          },
        },
      ],
    },
    {
      name: "authorize-nonce-account",
      description: "Assign account authority to a new entity",
      args: [
        {
          name: "nonce_account",
          description: "Nonce account",
        },
        {
          name: "new_authority",
          description: "New authority",
        },
      ],
    },
    {
      name: "balance",
      description: "Get your balance",
      args: {
        name: "pubkey",
        description: "The account address of the balance to check",
        isOptional: true,
      },
      options: [
        {
          name: "--lamports",
          description: "Display balance in lamports instead of SOL",
        },
      ],
    },
    {
      name: "block",
      description: "Get a confirmed block",
      args: {
        name: "slot",
        description: "Slot number of the block to query",
      },
    },
    {
      name: "block-height",
      description: "Get current block height",
    },
    {
      name: "block-production",
      description: "Show information about block production",
      options: [
        {
          name: "--epoch",
          description: "Epoch to show block production for",
          args: {
            name: "epoch",
          },
        },
      ],
    },
    {
      name: "block-time",
      description: "Get estimated production time of a block",
      args: {
        name: "slot",
        description: "Slot number of the block to query",
      },
    },
    {
      name: "catchup",
      description: "Wait for a validator to catch up to the cluster",
      args: {
        name: "pubkey",
        description: "Identity pubkey of the validator",
      },
    },
    {
      name: "cluster-date",
      description:
        "Get current cluster date, computed from genesis creation time and network time",
    },
    {
      name: "cluster-version",
      description: "Get the version of the cluster entrypoint",
    },
    {
      name: "config",
      description: "Solana command-line tool configuration",
      subcommands: [
        {
          name: "get",
          description: "Get current config settings",
          args: {
            name: "config_field",
            description: "Return a specific config setting",
            isOptional: true,
            suggestions: [
              "json_rpc_url",
              "websocket_url",
              "keypair_path",
              "commitment",
            ],
          },
        },
        {
          name: "set",
          description: "Set a config setting",
          options: [
            {
              name: ["--url", "-u"],
              description: "JSON RPC URL for the cluster",
              args: {
                name: "url",
                suggestions: [
                  "https://api.mainnet-beta.solana.com",
                  "https://api.devnet.solana.com",
                  "https://api.testnet.solana.com",
                  "http://localhost:8899",
                ],
              },
            },
            {
              name: ["--keypair", "-k"],
              description: "Filepath or URL to a keypair",
              args: {
                name: "keypair",
                template: "filepaths",
              },
            },
            {
              name: "--ws",
              description: "WebSocket URL for the cluster",
              args: {
                name: "url",
              },
            },
            {
              name: "--commitment",
              description: "Commitment level",
              args: {
                name: "commitment",
                suggestions: ["processed", "confirmed", "finalized"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "confirm",
      description: "Confirm transaction by signature",
      args: {
        name: "signature",
        description: "The transaction signature to confirm",
      },
    },
    {
      name: "create-address-with-seed",
      description: "Generate a derived account address with a seed",
      args: [
        {
          name: "seed",
          description: "The seed string",
        },
        {
          name: "program_id",
          description: "The program_id that the address will belong to",
        },
      ],
      options: [
        {
          name: "--from",
          description: "From pubkey",
          args: {
            name: "pubkey",
          },
        },
      ],
    },
    {
      name: "create-keypair",
      description: "Create a new keypair",
      args: {
        name: "keypair",
        description: "Path to generated file",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        {
          name: "--force",
          description: "Overwrite the output file if it exists",
        },
        {
          name: "--silent",
          description:
            "Do not display seed phrase. Useful when piping to other programs that prompt for user input, like gpg",
        },
        {
          name: "--no-bip39-passphrase",
          description: "Do not prompt for a BIP39 passphrase",
        },
        {
          name: "--word-count",
          description:
            "Specify the number of words in the recovery seed phrase",
          args: {
            name: "count",
            suggestions: ["12", "15", "18", "21", "24"],
          },
        },
        {
          name: "--language",
          description: "Specify the mnemonic language",
          args: {
            name: "language",
            suggestions: [
              "english",
              "chinese-simplified",
              "chinese-traditional",
              "french",
              "italian",
              "japanese",
              "korean",
              "spanish",
            ],
          },
        },
      ],
    },
    {
      name: "create-nonce-account",
      description: "Create a nonce account",
      args: [
        {
          name: "nonce_account_keypair",
          description: "Keypair of the nonce account to fund",

          template: "filepaths",
        },
        {
          name: "amount",
          description: "The amount to load the nonce account with, in SOL",
        },
      ],
      options: [
        {
          name: "--nonce-authority",
          description: "Assign this authority to the nonce account",
          args: {
            name: "pubkey",
          },
        },
      ],
    },
    {
      name: "create-stake-account",
      description: "Create a stake account",
      args: [
        {
          name: "stake_account_keypair",
          description: "Keypair of the stake account to fund",

          template: "filepaths",
        },
        {
          name: "amount",
          description: "The amount to assign to the stake account, in SOL",
        },
      ],
      options: [
        {
          name: "--stake-authority",
          description: "Public key of the stake authority",
          args: {
            name: "pubkey",
          },
        },
        {
          name: "--withdraw-authority",
          description: "Public key of the withdraw authority",
          args: {
            name: "pubkey",
          },
        },
        {
          name: "--lockup-epoch",
          description:
            "The epoch height at which this account will be available for withdrawal",
          args: {
            name: "epoch",
          },
        },
        {
          name: "--lockup-date",
          description:
            "The date and time at which this account will be available for withdrawal",
          args: {
            name: "datetime",
          },
        },
        {
          name: "--lockup-custodian",
          description: "Identity of the lockup custodian",
          args: {
            name: "pubkey",
          },
        },
        {
          name: "--seed",
          description: "Seed for address generation",
          args: {
            name: "seed",
          },
        },
      ],
    },
    {
      name: "create-vote-account",
      description: "Create a vote account",
      args: [
        {
          name: "vote_account_keypair",
          description: "Vote account keypair to fund",

          template: "filepaths",
        },
        {
          name: "validator_identity_keypair",
          description: "Validator that will vote with this account",

          template: "filepaths",
        },
        {
          name: "authorized_withdrawer",
          description: "Public key of the authorized withdrawer",
        },
      ],
      options: [
        {
          name: "--commission",
          description: "The commission taken on reward redemption",
          args: {
            name: "percentage",
          },
        },
      ],
    },
    {
      name: "deactivate-stake",
      description: "Deactivate the delegated stake from the stake account",
      args: {
        name: "stake_account_pubkey",
        description: "Stake account to be deactivated",
      },
      options: [
        {
          name: "--stake-authority",
          description: "Public key of the stake authority",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "decode-transaction",
      description: "Decode a serialized transaction",
      args: {
        name: "transaction",
        description: "Transaction to decode",
      },
      options: [
        {
          name: "--encoding",
          description: "Encoding of the transaction",
          args: {
            name: "encoding",
            suggestions: ["base58", "base64"],
          },
        },
      ],
    },
    {
      name: "delegate-stake",
      description: "Delegate stake to a vote account",
      args: [
        {
          name: "stake_account_pubkey",
          description: "Stake account to delegate",
        },
        {
          name: "vote_account_pubkey",
          description: "The vote account to which the stake will be delegated",
        },
      ],
      options: [
        {
          name: "--stake-authority",
          description: "Public key of the stake authority",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
        {
          name: "--force",
          description: "Override vote account sanity checks",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy a program",
      args: {
        name: "program_location",
        description: "Program file to deploy",

        template: "filepaths",
      },
      options: [
        {
          name: "--program-id",
          description: "Public key of the program",
          args: {
            name: "pubkey",
          },
        },
      ],
    },
    {
      name: "epoch",
      description: "Get current epoch",
    },
    {
      name: "epoch-info",
      description: "Get information about the current epoch",
    },
    {
      name: "feature",
      description: "Runtime feature management",
      subcommands: [
        {
          name: "status",
          description: "Query runtime feature status",
          args: {
            name: "feature",
            description: "Feature to query",
            isOptional: true,
          },
        },
        {
          name: "activate",
          description: "Activate a runtime feature",
          args: [
            {
              name: "feature",
              description: "The feature to activate",
            },
            {
              name: "force_activation_slot",
              description: "The slot to force activation at",
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: "fees",
      description: "Display current cluster fees",
      options: [
        {
          name: "--blockhash",
          description:
            "Query fees for this blockhash instead of the latest blockhash",
          args: {
            name: "blockhash",
          },
        },
      ],
    },
    {
      name: "first-available-block",
      description: "Get the first available block in the storage",
    },
    {
      name: "genesis-hash",
      description: "Get the genesis hash",
    },
    {
      name: "gossip",
      description: "Show the current gossip network nodes",
    },
    {
      name: "inflation",
      description: "Show inflation information",
      subcommands: [
        {
          name: "governor",
          description: "Show the current inflation governor",
        },
        {
          name: "rate",
          description: "Show the current inflation rate",
        },
        {
          name: "rewards",
          description: "Show inflation rewards for a set of addresses",
          args: {
            name: "epoch",
            description: "Epoch to query, or latest",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "largest-accounts",
      description: "Get addresses of largest cluster accounts",
      options: [
        {
          name: "--filter",
          description: "Filter results by account type",
          args: {
            name: "filter",
            suggestions: ["circulating", "nonCirculating"],
          },
        },
      ],
    },
    {
      name: "leader-schedule",
      description: "Display leader schedule",
      options: [
        {
          name: "--epoch",
          description: "Epoch to show leader schedule for",
          args: {
            name: "epoch",
          },
        },
      ],
    },
    {
      name: "live-slots",
      description: "Show information about the current slot progression",
    },
    {
      name: "logs",
      description: "Stream transaction logs",
      args: {
        name: "filter",
        description: "Filter criteria",
        isOptional: true,
      },
      options: [
        {
          name: "--include-votes",
          description:
            "Include vote transactions, which are excluded by default",
        },
      ],
    },
    {
      name: "merge-stake",
      description: "Merges one stake account into another",
      args: [
        {
          name: "stake_account_pubkey",
          description: "Stake account to merge into",
        },
        {
          name: "source_stake_account_pubkey",
          description: "Source stake account for the merge",
        },
      ],
      options: [
        {
          name: "--stake-authority",
          description: "Public key of the stake authority",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "nonce",
      description: "Get the current nonce value",
      args: {
        name: "nonce_account_pubkey",
        description: "Address of the nonce account to display",
      },
    },
    {
      name: "nonce-account",
      description: "Show the contents of a nonce account",
      args: {
        name: "nonce_account_pubkey",
        description: "Address of the nonce account to display",
      },
      options: [
        {
          name: "--lamports",
          description: "Display balance in lamports instead of SOL",
        },
      ],
    },
    {
      name: "ping",
      description: "Submit transactions sequentially",
      options: [
        {
          name: ["--interval", "-i"],
          description:
            "Wait interval seconds between submitting the next transaction",
          args: {
            name: "seconds",
          },
        },
        {
          name: ["--count", "-c"],
          description: "Stop after submitting count transactions",
          args: {
            name: "number",
          },
        },
        {
          name: ["--timeout", "-t"],
          description:
            "Wait up to timeout seconds for transaction confirmation",
          args: {
            name: "seconds",
          },
        },
        {
          name: "--data-size",
          description: "Size of transaction data in bytes",
          args: {
            name: "bytes",
          },
        },
      ],
    },
    {
      name: "program",
      description: "Program management",
      subcommands: [
        {
          name: "deploy",
          description: "Deploy a program",
          args: {
            name: "program_location",
            description: "Program file to deploy",

            template: "filepaths",
          },
          options: [
            {
              name: "--program-id",
              description: "Executable program's address",
              args: {
                name: "pubkey",
              },
            },
            {
              name: "--buffer",
              description: "Intermediate buffer account to write data to",
              args: {
                name: "pubkey",
              },
            },
            {
              name: "--upgrade-authority",
              description: "Upgrade authority for the program",
              args: {
                name: "keypair",
                template: "filepaths",
              },
            },
            {
              name: "--max-len",
              description: "Maximum length of the upgradeable program",
              args: {
                name: "bytes",
              },
            },
            {
              name: "--allow-excessive-balance",
              description:
                "Allow buffer account to have a balance higher than required",
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade a program",
          args: [
            {
              name: "program_location",
              description: "Program file to upgrade to",

              template: "filepaths",
            },
            {
              name: "program_id",
              description: "Executable program's address",
            },
          ],
          options: [
            {
              name: "--buffer",
              description: "Intermediate buffer account to upgrade from",
              args: {
                name: "pubkey",
              },
            },
            {
              name: "--upgrade-authority",
              description: "Upgrade authority for the program",
              args: {
                name: "keypair",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "write-buffer",
          description: "Writes a program into a buffer account",
          args: {
            name: "program_location",
            description: "Program file",

            template: "filepaths",
          },
          options: [
            {
              name: "--buffer",
              description: "Buffer account to write data into",
              args: {
                name: "keypair",
                template: "filepaths",
              },
            },
            {
              name: "--buffer-authority",
              description: "Buffer authority",
              args: {
                name: "keypair",
                template: "filepaths",
              },
            },
            {
              name: "--max-len",
              description: "Maximum length of the upgradeable program",
              args: {
                name: "bytes",
              },
            },
          ],
        },
        {
          name: "set-buffer-authority",
          description: "Set a new buffer authority",
          args: [
            {
              name: "buffer",
              description: "Buffer account",
            },
            {
              name: "new_buffer_authority",
              description: "New buffer authority",
            },
          ],
          options: [
            {
              name: "--buffer-authority",
              description: "Buffer authority",
              args: {
                name: "keypair",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "set-upgrade-authority",
          description: "Set a new upgrade authority",
          args: [
            {
              name: "program_id",
              description: "Executable program's address",
            },
            {
              name: "new_upgrade_authority",
              description: "New upgrade authority",
              isOptional: true,
            },
          ],
          options: [
            {
              name: "--upgrade-authority",
              description: "Upgrade authority",
              args: {
                name: "keypair",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "show",
          description: "Display information about a buffer or program",
          args: {
            name: "account",
            description: "Address of the buffer or program to show",
          },
          options: [
            {
              name: "--programs",
              description:
                "Show every upgradeable program that matches the account",
            },
            {
              name: "--buffers",
              description: "Show every buffer that matches the account",
            },
            {
              name: "--all",
              description: "Show accounts for all authorities",
            },
            {
              name: "--lamports",
              description: "Display balance in lamports instead of SOL",
            },
          ],
        },
        {
          name: "dump",
          description: "Write the program data to a file",
          args: [
            {
              name: "account",
              description: "Address of the buffer or program",
            },
            {
              name: "output_location",
              description: "Output file location",

              template: "filepaths",
            },
          ],
        },
        {
          name: "close",
          description:
            "Close a program or buffer account and withdraw all lamports",
          args: {
            name: "account",
            description: "Address of the buffer or program to close",
          },
          options: [
            {
              name: "--recipient",
              description:
                "Address of the account to deposit the closed account's lamports",
              args: {
                name: "pubkey",
              },
            },
            {
              name: "--buffer-authority",
              description: "Buffer authority",
              args: {
                name: "keypair",
                template: "filepaths",
              },
            },
            {
              name: "--upgrade-authority",
              description: "Upgrade authority",
              args: {
                name: "keypair",
                template: "filepaths",
              },
            },
          ],
        },
      ],
    },
    {
      name: "pubkey",
      description: "Display the pubkey for given keypair file",
      args: {
        name: "keypair",
        description: "Keypair file",

        template: "filepaths",
      },
    },
    {
      name: "rent",
      description:
        "Calculate per-epoch and rent-exempt-minimum values for a given account data field length",
      args: {
        name: "data_length",
        description: "Length of account data field in bytes",
      },
    },
    {
      name: "resolve-signer",
      description:
        "Checks that a signer is valid, and returns its specific path",
      args: {
        name: "signer",
        description: "The signer path to resolve",
      },
    },
    {
      name: "rpc-version",
      description: "Get the RPC API version",
    },
    {
      name: "slot",
      description: "Get current slot",
    },
    {
      name: "split-stake",
      description:
        "Duplicate a stake account, splitting the tokens between the two",
      args: [
        {
          name: "stake_account_pubkey",
          description: "Stake account to split",
        },
        {
          name: "new_stake_account_keypair",
          description: "Keypair of the new stake account",

          template: "filepaths",
        },
        {
          name: "amount",
          description: "The amount to move to the new stake account, in SOL",
        },
      ],
      options: [
        {
          name: "--stake-authority",
          description: "Public key of the stake authority",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
        {
          name: "--seed",
          description: "Seed for address generation",
          args: {
            name: "seed",
          },
        },
      ],
    },
    {
      name: "stake-account",
      description: "Show the contents of a stake account",
      args: {
        name: "stake_account_pubkey",
        description: "Address of the stake account to display",
      },
      options: [
        {
          name: "--lamports",
          description: "Display balance in lamports instead of SOL",
        },
        {
          name: "--with-rewards",
          description: "Display inflation rewards",
        },
      ],
    },
    {
      name: "stake-authorize",
      description:
        "Authorize a new signing keypair for the given stake account",
      args: [
        {
          name: "stake_account_pubkey",
          description:
            "Stake account in which to set the authorized staker or withdrawer",
        },
        {
          name: "new_authorized_pubkey",
          description: "New authorized staker or withdrawer",
        },
        {
          name: "stake_authorize",
          description: "Authority type to authorize",

          suggestions: ["staker", "withdrawer"],
        },
      ],
      options: [
        {
          name: "--authority",
          description: "Public key of the current stake or withdraw authority",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
        {
          name: "--custodian",
          description: "Public key of the lockup custodian",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "stake-history",
      description: "Show the stake history",
      options: [
        {
          name: "--limit",
          description: "Limit results to this many epochs",
          args: {
            name: "limit",
          },
        },
      ],
    },
    {
      name: "stake-minimum-delegation",
      description: "Get the minimum delegation amount",
    },
    {
      name: "stake-set-lockup",
      description: "Set Lockup for the stake account",
      args: {
        name: "stake_account_pubkey",
        description: "Stake account for which to set Lockup",
      },
      options: [
        {
          name: "--lockup-epoch",
          description:
            "The epoch height at which this account will be available for withdrawal",
          args: {
            name: "epoch",
          },
        },
        {
          name: "--lockup-date",
          description:
            "The date and time at which this account will be available for withdrawal",
          args: {
            name: "datetime",
          },
        },
        {
          name: "--new-custodian",
          description: "Identity of the new lockup custodian",
          args: {
            name: "pubkey",
          },
        },
        {
          name: "--custodian",
          description: "Public key of the current lockup custodian",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "stakes",
      description: "Show stake account information",
      args: {
        name: "stake_authority_pubkey",
        description: "Address of the stake authority",
      },
      options: [
        {
          name: "--lamports",
          description: "Display balance in lamports instead of SOL",
        },
      ],
    },
    {
      name: "supply",
      description: "Get information about the cluster supply of SOL",
      options: [
        {
          name: "--print-accounts",
          description: "Print list of non-circulating account addresses",
        },
      ],
    },
    {
      name: "transaction-count",
      description: "Get current transaction count",
    },
    {
      name: "transaction-history",
      description: "Show historical transactions affecting the given address",
      args: {
        name: "address",
        description: "Account address",
      },
      options: [
        {
          name: ["--limit", "-l"],
          description: "Maximum number of transaction signatures to return",
          args: {
            name: "limit",
          },
        },
        {
          name: "--before",
          description: "Start with the first signature older than this one",
          args: {
            name: "signature",
          },
        },
        {
          name: "--until",
          description: "End with the last signature newer than this one",
          args: {
            name: "signature",
          },
        },
      ],
    },
    {
      name: "transfer",
      description: "Transfer lamports between system accounts",
      args: [
        {
          name: "to",
          description: "The account address of recipient",
        },
        {
          name: "amount",
          description: "The amount to send, in SOL",
        },
      ],
      options: [
        {
          name: "--from",
          description: "Source account of funds",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
        {
          name: "--fee-payer",
          description: "Specify the fee-payer account",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
        {
          name: "--derived-address-seed",
          description: "Seed for address generation",
          args: {
            name: "seed",
          },
        },
        {
          name: "--derived-address-program-id",
          description: "Program used to generate the address",
          args: {
            name: "program_id",
          },
        },
        {
          name: "--allow-unfunded-recipient",
          description:
            "Complete the transfer even if the recipient address is not funded",
        },
        {
          name: "--no-wait",
          description:
            "Return signature immediately after submitting the transaction, instead of waiting for confirmations",
        },
      ],
    },
    {
      name: "validator-info",
      description: "Publish/get Validator info on Solana",
      subcommands: [
        {
          name: "publish",
          description: "Publish Validator info on Solana",
          args: {
            name: "info_pubkey",
            description: "The pubkey of the Validator info account to update",
          },
          options: [
            {
              name: "--name",
              description: "Validator name",
              args: {
                name: "name",
              },
            },
            {
              name: "--website",
              description: "Validator website url",
              args: {
                name: "url",
              },
            },
            {
              name: "--keybase",
              description: "Validator keybase username",
              args: {
                name: "username",
              },
            },
            {
              name: "--details",
              description: "Validator description",
              args: {
                name: "description",
              },
            },
            {
              name: "--force",
              description: "Override sanity checks",
            },
          ],
        },
        {
          name: "get",
          description: "Get and parse Solana Validator info",
          args: {
            name: "info_pubkey",
            description:
              "The pubkey of the Validator info account; without this argument, returns all",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "validators",
      description: "Show summary information about the current validators",
      options: [
        {
          name: ["--output", "-o"],
          description: "Return information in specified output format",
          args: {
            name: "format",
            suggestions: ["json", "json-compact"],
          },
        },
        {
          name: "--lamports",
          description: "Display balance in lamports instead of SOL",
        },
        {
          name: "--sort",
          description: "Sort order",
          args: {
            name: "field",
            suggestions: [
              "name",
              "stake",
              "commission",
              "vote-account",
              "last-vote",
              "root-slot",
              "credits",
              "version",
              "skip-rate",
            ],
          },
        },
        {
          name: "--reverse",
          description: "Reverse sort order",
        },
        {
          name: "--keep-unstaked-delinquents",
          description: "Don't discard unstaked delinquent validators",
        },
        {
          name: "--delinquent",
          description: "Only show delinquent validators",
        },
      ],
    },
    {
      name: "vote-account",
      description: "Show the contents of a vote account",
      args: {
        name: "vote_account_pubkey",
        description: "Vote account pubkey",
      },
      options: [
        {
          name: "--lamports",
          description: "Display balance in lamports instead of SOL",
        },
        {
          name: "--with-rewards",
          description: "Display inflation rewards",
        },
      ],
    },
    {
      name: "vote-authorize-voter",
      description:
        "Authorize a new vote signing keypair for the given vote account",
      args: [
        {
          name: "vote_account_pubkey",
          description: "Vote account in which to set the authorized voter",
        },
        {
          name: "new_authorized_pubkey",
          description: "New authorized voter",
        },
      ],
      options: [
        {
          name: "--authorized-voter",
          description: "Public key of the current authorized voter",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "vote-authorize-withdrawer",
      description:
        "Authorize a new withdraw signing keypair for the given vote account",
      args: [
        {
          name: "vote_account_pubkey",
          description: "Vote account in which to set the authorized withdrawer",
        },
        {
          name: "new_authorized_pubkey",
          description: "New authorized withdrawer",
        },
      ],
      options: [
        {
          name: "--authorized-withdrawer",
          description: "Public key of the current authorized withdrawer",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "vote-update-commission",
      description: "Update the vote account's commission",
      args: [
        {
          name: "vote_account_pubkey",
          description: "Vote account to update",
        },
        {
          name: "commission",
          description: "The new commission",
        },
      ],
      options: [
        {
          name: "--authorized-withdrawer",
          description: "Public key of the authorized withdrawer",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "vote-update-validator",
      description: "Update the vote account's validator identity",
      args: [
        {
          name: "vote_account_pubkey",
          description: "Vote account to update",
        },
        {
          name: "new_identity_pubkey",
          description: "New validator that will vote with this account",
        },
        {
          name: "authorized_withdrawer",
          description: "Authorized withdrawer keypair",

          template: "filepaths",
        },
      ],
    },
    {
      name: "wait-for-max-stake",
      description:
        "Wait for the max stake of any one node to drop below a percentage of total stake",
      args: {
        name: "percentage",
        description: "Wait for the max stake to drop below this percentage",
      },
    },
    {
      name: "withdraw-from-nonce-account",
      description: "Withdraw SOL from the nonce account",
      args: [
        {
          name: "nonce_account_pubkey",
          description: "Nonce account to withdraw from",
        },
        {
          name: "destination_account_pubkey",
          description:
            "The account to which the lamports should be transferred",
        },
        {
          name: "amount",
          description: "The amount to withdraw from the nonce account, in SOL",
        },
      ],
      options: [
        {
          name: "--nonce-authority",
          description: "Specify nonce authority keypair",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "withdraw-from-vote-account",
      description:
        "Withdraw lamports from a vote account into a specified account",
      args: [
        {
          name: "vote_account_pubkey",
          description: "Vote account from which to withdraw",
        },
        {
          name: "destination_account_pubkey",
          description: "The recipient of withdrawn SOL",
        },
        {
          name: "amount",
          description: "The amount to withdraw, in SOL",
        },
      ],
      options: [
        {
          name: "--authorized-withdrawer",
          description: "Public key of the authorized withdrawer",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "withdraw-stake",
      description: "Withdraw the unstaked SOL from the stake account",
      args: [
        {
          name: "stake_account_pubkey",
          description: "Stake account from which to withdraw",
        },
        {
          name: "destination_account_pubkey",
          description: "The account to which the SOL should be transferred",
        },
        {
          name: "amount",
          description: "The amount to withdraw from the stake account, in SOL",
        },
      ],
      options: [
        {
          name: "--withdraw-authority",
          description: "Public key of the withdraw authority",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
        {
          name: "--custodian",
          description: "Public key of the lockup custodian, if applicable",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--config", "-C"],
      description: "Configuration file to use",
      args: {
        name: "config",
        template: "filepaths",
      },
    },
    {
      name: ["--url", "-u"],
      description: "JSON RPC URL for the cluster",
      args: {
        name: "url",
        suggestions: [
          "https://api.mainnet-beta.solana.com",
          "https://api.devnet.solana.com",
          "https://api.testnet.solana.com",
          "http://localhost:8899",
        ],
      },
    },
    {
      name: ["--keypair", "-k"],
      description: "Filepath or URL to a keypair",
      args: {
        name: "keypair",
        template: "filepaths",
      },
    },
    {
      name: "--commitment",
      description: "Return information at the selected commitment level",
      args: {
        name: "commitment",
        suggestions: ["processed", "confirmed", "finalized"],
      },
    },
    {
      name: ["--verbose", "-v"],
      description: "Show additional information",
    },
    {
      name: ["--output", "-o"],
      description: "Return information in specified output format",
      args: {
        name: "format",
        suggestions: ["json", "json-compact"],
      },
    },
    {
      name: "--ws",
      description: "WebSocket URL for the cluster",
      args: {
        name: "url",
      },
    },
    {
      name: "--rpc-timeout",
      description: "Timeout value for RPC requests",
      args: {
        name: "seconds",
      },
    },
    {
      name: "--confirm-transaction-initial-timeout",
      description: "Timeout for initial transaction status",
      args: {
        name: "seconds",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show help for solana",
    },
    {
      name: ["--version", "-V"],
      description: "Show version information",
    },
  ],
};

export default completionSpec;
