const completion: Fig.Spec = {
  name: "anvil",
  description: "A fast local Ethereum development node",
  subcommands: [
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
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      subcommands: [
        {
          name: "completions",
          description: "Generate shell completions script",
        },
        {
          name: "generate-fig-spec",
          description: "Generate Fig autocompletion spec",
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
      name: ["-p", "--port"],
      description: "Port number to listen on",
      isRepeatable: true,
      args: {
        name: "port",
        isOptional: true,
      },
    },
    {
      name: ["-a", "--accounts"],
      description: "Number of dev accounts to generate and configure",
      isRepeatable: true,
      args: {
        name: "accounts",
        isOptional: true,
      },
    },
    {
      name: "--balance",
      description: "The balance of every dev account in Ether",
      isRepeatable: true,
      args: {
        name: "balance",
        isOptional: true,
      },
    },
    {
      name: "--timestamp",
      description: "The timestamp of the genesis block",
      isRepeatable: true,
      args: {
        name: "timestamp",
        isOptional: true,
      },
    },
    {
      name: ["-m", "--mnemonic"],
      description: "BIP39 mnemonic phrase used for generating accounts. Cannot be used if `mnemonic_random` or `mnemonic_seed` are used",
      exclusiveOn: [
        "--mnemonic-seed-unsafe",
        "--mnemonic-random",
      ],
      isRepeatable: true,
      args: {
        name: "mnemonic",
        isOptional: true,
      },
    },
    {
      name: "--mnemonic-random",
      description: "Automatically generates a BIP39 mnemonic phrase, and derives accounts from it. Cannot be used with other `mnemonic` options. You can specify the number of words you want in the mnemonic. [default: 12]",
      exclusiveOn: [
        "-m",
        "--mnemonic",
        "--mnemonic-seed-unsafe",
      ],
      isRepeatable: true,
      args: {
        name: "mnemonic_random",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "--mnemonic-seed-unsafe",
      description: "Generates a BIP39 mnemonic phrase from a given seed Cannot be used with other `mnemonic` options",
      exclusiveOn: [
        "-m",
        "--mnemonic",
        "--mnemonic-random",
      ],
      isRepeatable: true,
      args: {
        name: "mnemonic_seed",
        isOptional: true,
      },
    },
    {
      name: "--derivation-path",
      description: "Sets the derivation path of the child key to be derived",
      isRepeatable: true,
      args: {
        name: "derivation_path",
        isOptional: true,
      },
    },
    {
      name: "--hardfork",
      description: "The EVM hardfork to use",
      isRepeatable: true,
      args: {
        name: "hardfork",
        isOptional: true,
      },
    },
    {
      name: ["-b", "--block-time", "--blockTime"],
      description: "Block time in seconds for interval mining",
      isRepeatable: true,
      args: {
        name: "block_time",
        isOptional: true,
      },
    },
    {
      name: "--slots-in-an-epoch",
      description: "Slots in an epoch",
      isRepeatable: true,
      args: {
        name: "slots_in_an_epoch",
        isOptional: true,
      },
    },
    {
      name: "--config-out",
      description: "Writes output of `anvil` as json to user-specified file",
      isRepeatable: true,
      args: {
        name: "config_out",
        isOptional: true,
      },
    },
    {
      name: "--host",
      description: "The hosts the server will listen on",
      isRepeatable: true,
      args: {
        name: "host",
        isOptional: true,
      },
    },
    {
      name: "--order",
      description: "How transactions are sorted in the mempool",
      isRepeatable: true,
      args: {
        name: "order",
        isOptional: true,
      },
    },
    {
      name: "--init",
      description: "Initialize the genesis block with the given `genesis.json` file",
      isRepeatable: true,
      args: {
        name: "init",
        isOptional: true,
      },
    },
    {
      name: "--state",
      description: "This is an alias for both --load-state and --dump-state",
      exclusiveOn: [
        "--init",
        "--dump-state",
        "--load-state",
      ],
      isRepeatable: true,
      args: {
        name: "state",
        isOptional: true,
      },
    },
    {
      name: ["-s", "--state-interval"],
      description: "Interval in seconds at which the state and block environment is to be dumped to disk",
      isRepeatable: true,
      args: {
        name: "state_interval",
        isOptional: true,
      },
    },
    {
      name: "--dump-state",
      description: "Dump the state and block environment of chain on exit to the given file",
      exclusiveOn: [
        "--init",
      ],
      isRepeatable: true,
      args: {
        name: "dump_state",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "--load-state",
      description: "Initialize the chain from a previously saved state snapshot",
      exclusiveOn: [
        "--init",
      ],
      isRepeatable: true,
      args: {
        name: "load_state",
        isOptional: true,
      },
    },
    {
      name: ["--ipc", "--ipcpath"],
      description: "Launch an ipc server at the given path or default path = `/tmp/anvil.ipc`",
      isRepeatable: true,
      args: {
        name: "ipc",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "--prune-history",
      description: "Don't keep full chain history. If a number argument is specified, at most this number of states is kept in memory",
      isRepeatable: true,
      args: {
        name: "prune_history",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "--max-persisted-states",
      description: "Max number of states to persist on disk",
      isRepeatable: true,
      args: {
        name: "max_persisted_states",
        isOptional: true,
      },
    },
    {
      name: "--transaction-block-keeper",
      description: "Number of blocks with transactions to keep in memory",
      isRepeatable: true,
      args: {
        name: "transaction_block_keeper",
        isOptional: true,
      },
    },
    {
      name: ["-f", "--fork-url", "--rpc-url"],
      description: "Fetch state over a remote endpoint instead of starting from an empty state",
      isRepeatable: true,
      args: {
        name: "fork_url",
        isOptional: true,
      },
    },
    {
      name: "--fork-header",
      description: "Headers to use for the rpc client, e.g. \"User-Agent: test-agent\"",
      isRepeatable: true,
      args: {
        name: "fork_headers",
        isOptional: true,
      },
    },
    {
      name: "--timeout",
      description: "Timeout in ms for requests sent to remote JSON-RPC server in forking mode",
      isRepeatable: true,
      args: {
        name: "timeout",
        isOptional: true,
      },
    },
    {
      name: "--retries",
      description: "Number of retry requests for spurious networks (timed out requests)",
      isRepeatable: true,
      args: {
        name: "retries",
        isOptional: true,
      },
    },
    {
      name: "--fork-block-number",
      description: "Fetch state from a specific block number over a remote endpoint",
      isRepeatable: true,
      args: {
        name: "fork_block_number",
        isOptional: true,
      },
    },
    {
      name: "--fork-transaction-hash",
      description: "Fetch state from a specific transaction hash over a remote endpoint",
      exclusiveOn: [
        "--fork-block-number",
      ],
      isRepeatable: true,
      args: {
        name: "fork_transaction_hash",
        isOptional: true,
      },
    },
    {
      name: "--fork-retry-backoff",
      description: "Initial retry backoff on encountering errors",
      isRepeatable: true,
      args: {
        name: "fork_retry_backoff",
        isOptional: true,
      },
    },
    {
      name: "--fork-chain-id",
      description: "Specify chain id to skip fetching it from remote endpoint. This enables offline-start mode",
      isRepeatable: true,
      args: {
        name: "fork_chain_id",
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
      name: "--gas-limit",
      description: "The block gas limit",
      isRepeatable: true,
      args: {
        name: "gas_limit",
        isOptional: true,
      },
    },
    {
      name: "--code-size-limit",
      description: "EIP-170: Contract code size limit in bytes. Useful to increase this because of tests. To disable entirely, use `--disable-code-size-limit`. By default, it is 0x6000 (~25kb)",
      isRepeatable: true,
      args: {
        name: "code_size_limit",
        isOptional: true,
      },
    },
    {
      name: "--gas-price",
      description: "The gas price",
      isRepeatable: true,
      args: {
        name: "gas_price",
        isOptional: true,
      },
    },
    {
      name: ["--block-base-fee-per-gas", "--base-fee"],
      description: "The base fee in a block",
      isRepeatable: true,
      args: {
        name: "block_base_fee_per_gas",
        isOptional: true,
      },
    },
    {
      name: "--chain-id",
      description: "The chain ID",
      isRepeatable: true,
      args: {
        name: "chain_id",
        isOptional: true,
      },
    },
    {
      name: "--memory-limit",
      description: "The memory limit per EVM execution in bytes",
      isRepeatable: true,
      args: {
        name: "memory_limit",
        isOptional: true,
      },
    },
    {
      name: "--allow-origin",
      description: "The cors `allow_origin` header",
      isRepeatable: true,
      args: {
        name: "allow_origin",
        isOptional: true,
      },
    },
    {
      name: "--silent",
      description: "Don't print anything on startup and don't print logs",
    },
    {
      name: ["--no-mining", "--no-mine"],
      description: "Disable auto and interval mining, and mine on demand instead",
      exclusiveOn: [
        "-b",
        "--block-time",
      ],
    },
    {
      name: "--mixed-mining",
    },
    {
      name: "--preserve-historical-states",
      description: "Preserve historical state snapshots when dumping the state",
      exclusiveOn: [
        "--init",
      ],
    },
    {
      name: ["--no-rate-limit", "--no-rpc-rate-limit"],
      description: "Disables rate limiting for this node's provider",
    },
    {
      name: "--no-storage-caching",
      description: "Explicitly disables the use of RPC caching",
    },
    {
      name: "--disable-block-gas-limit",
      description: "Disable the `call.gas_limit <= block.gas_limit` constraint",
      exclusiveOn: [
        "--gas-limit",
      ],
    },
    {
      name: "--disable-code-size-limit",
      description: "Disable EIP-170: Contract code size limit",
      exclusiveOn: [
        "--code-size-limit",
      ],
    },
    {
      name: ["--disable-min-priority-fee", "--no-priority-fee"],
      description: "Disable the enforcement of a minimum suggested priority fee",
    },
    {
      name: ["--steps-tracing", "--tracing"],
      description: "Enable steps tracing used for debug calls returning geth-style traces",
    },
    {
      name: ["--disable-console-log", "--no-console-log"],
      description: "Disable printing of `console.log` invocations to stdout",
    },
    {
      name: "--auto-impersonate",
      description: "Enable autoImpersonate on startup",
    },
    {
      name: "--optimism",
      description: "Run an Optimism chain",
    },
    {
      name: ["--disable-default-create2-deployer", "--no-create2"],
      description: "Disable the default create2 deployer",
    },
    {
      name: ["--alphanet", "--odyssey"],
      description: "Enable Alphanet features",
    },
    {
      name: "--no-cors",
      description: "Disable CORS",
      exclusiveOn: [
        "--allow-origin",
      ],
    },
    {
      name: "--no-request-size-limit",
      description: "Disable the default request body size limit. At time of writing the default limit is 2MB",
    },
    {
      name: ["-h", "--help"],
      description: "Print help (see more with '--help')",
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
};

export default completion;
