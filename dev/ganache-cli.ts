const completionSpec: Fig.Spec = {
  name: "ganache-cli",
  description: "Fast Ethereum RPC client",
  subcommands: [
    {
      name: "forkCacheSize",
      description:
        "The maximum size, in bytes, of the in-memory cache for queries on a chain fork. Defaults to 1_073_741_824 bytes (1 gigabyte).",
      args: { name: "number" },
    },
  ],
  options: [
    {
      name: ["-a", "--accounts"],
      description: "Specify the number of accounts to generate at startup",
      args: { name: "number" },
    },
    {
      name: ["-e", "--defaultBalanceEther"],
      description:
        "Amount of ether to assign each test account. Default is 100",
      args: { name: "number", default: "100" },
    },
    {
      name: ["-b", "--blockTime"],
      description:
        "Specify blockTime in seconds for automatic mining. If you don't specify this flag, ganache will instantly mine a new block for every transaction.",
      args: { name: "seconds" },
    },
    {
      name: ["-d", "--deterministic"],
      description:
        "Generate deterministic addresses based on a pre-defined mnemonic",
    },
    {
      name: ["-n", "--secure"],
      description:
        "Lock available accounts by default (good for third party transaction signing)",
    },
    {
      name: ["-m", "--mnemonic"],
      description:
        "Use a bip39 mnemonic phrase for generating a PRNG seed, which is in turn used for hierarchical deterministic (HD) account generation.",
    },
    {
      name: ["-p", "--port"],
      description: "Port number to listen on. Defaults to 8545.",
      args: { name: "port number" },
    },
    {
      name: ["-h", "--host"],
      description:
        "Hostname to listen on. Defaults to 127.0.0.1 (defaults to 0.0.0.0 for Docker instances of ganache-cli).",
      args: { name: "Hostname" },
    },
    {
      name: ["-s", "--seed"],
      description:
        "Use arbitrary data to generate the HD wallet mnemonic to be used.",
    },
    {
      name: ["-g", "--gasPrice"],
      description: "The price of gas in wei (defaults to 20000000000).",
      args: { name: "price" },
    },
    {
      name: ["-l", "--gasLimit"],
      description: "The block gas limit (defaults to 0x6691b7)",
      args: { name: "limit" },
    },
    {
      name: "--callGasLimit",
      description:
        "Sets the transaction gas limit for eth_call and eth_estimateGas calls.",
      args: { name: "limit" },
    },
    {
      name: ["-k", "--hardfork"],
      description: "Allows users to specify which hardfork should be used.",
      args: {
        name: "hardfork",
        suggestions: [
          "byzantium",
          "constantinople",
          "petersburg",
          "istanbul",
          "muirGlacier",
        ],
      },
    },
    {
      name: ["-f", "--fork"],
      description:
        "Fork from another currently running Ethereum client at a given block. Input should be the HTTP location and port of the other client",
      args: { name: "HTTP location & port" },
    },
    {
      name: ["-i", "--networkId"],
      description:
        "Specify the network id ganache-cli will use to identify itself (defaults to the current time or the network id of the forked blockchain if configured)",
      args: { name: "Network ID" },
    },
    {
      name: "--chainId",
      description:
        "Specify the Chain ID ganache-cli will use for eth_chainId RPC and the CHAINID opcode.",
      args: { name: "Chain ID" },
    },
    {
      name: "--db",
      description:
        "Specify a path to a directory to save the chain database. If a database already exists, ganache-cli will initialize that chain instead of creating a new one.",
      args: { name: "folder", template: "folders" },
    },
    {
      name: "--debug",
      description: "Output VM opcodes for debugging.",
    },
    {
      name: "--mem",
      description:
        "Output ganache-cli memory usage statistics. This replaces normal output.",
    },
    {
      name: ["-q", "--quiet"],
      description: "Run ganache-cli without any logs.",
    },
    {
      name: ["-?", "--help"],
      description: "Display help information.",
    },
    {
      name: "--version",
      description: "Display the version of ganache-cli.",
    },
    {
      name: ["--account_keys_path", "--acctKeys"],
      description:
        "Specifies a file to save accounts and private keys to, for testing.",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--noVMErrorsOnRPCResponse",
      description: "Do not transmit transaction failures as RPC errors.",
    },
    {
      name: "--allowUnlimitedContractSize",
      description: "Allows unlimited contract sizes while debugging.",
    },
    {
      name: "--keepAliveTimeout",
      description: "Sets the HTTP server's keepAliveTimeout in milliseconds.",
      args: { name: "timeout" },
    },
    {
      name: ["-t", "--time"],
      description: "Date (ISO 8601) that the first block should start.",
      args: { name: "date" },
    },
    {
      name: "--account",
      description:
        "Specify any number of times passing arbitrary private keys and their associated balances to generate initial addresses.",
      args: { name: "<privatekey>, balance", isVariadic: true },
    },
    {
      name: ["-u", "--unlock"],
      description:
        "Specify any number of times passing either an address or an account index to unlock specific accounts.",
      args: { name: "address or account index", isVariadic: true },
    },
  ],
};

export default completionSpec;
