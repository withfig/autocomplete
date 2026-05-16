const truffleCommands: Fig.Suggestion[] = [
  {
    name: "build",
  },
  {
    name: "compile",
  },
  {
    name: "config",
  },
  {
    name: "console",
  },
  {
    name: "create",
  },
  {
    name: "debug",
  },
  {
    name: "deploy",
  },
  {
    name: "develop",
  },
  {
    name: "exec",
  },
  {
    name: "help",
  },
  {
    name: "init",
  },
  {
    name: "install",
  },
  {
    name: "networks",
  },
  {
    name: "obtain",
  },
  {
    name: "opcode",
  },
  {
    name: "publish",
  },
  {
    name: "run",
  },
  {
    name: "version",
  },
  {
    name: "watch",
  },
  {
    name: "preserve",
  },
  {
    name: "migrate",
  },
  {
    name: "unbox",
  },
  {
    name: "test",
  },
];

const completionSpec: Fig.Spec = {
  name: "truffle",
  description:
    "A world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier",
  subcommands: [
    {
      name: "build",
      description: "Execute build pipeline (if configuration present)",
    },
    {
      name: "compile",
      description: "Compile contract source files",
      options: [
        {
          name: "--list",
          description:
            "List all recent stable releases from solc-bin. If filter is specified then it will display only that type of release or docker tags",
          args: {
            name: "filter",
            description:
              "The filter parameter must be one of the following: prereleases, releases, latestRelease or docker",
            suggestions: [
              {
                name: "prereleases",
              },
              {
                name: "releases",
              },
              {
                name: "latestRelease",
              },
              {
                name: "docker",
              },
            ],
          },
        },
        {
          name: "--all",
          description:
            "Compile all contracts instead of only the contracts changed since last compile",
        },
        {
          name: "--quiet",
          description: "Suppress all compilation output",
        },
      ],
    },
    {
      name: "config",
      description: "Set user-level configuration options",
      subcommands: [
        {
          name: "get",
          description: "Get a Truffle configuration option value",
          args: {
            name: "key",
          },
        },
        {
          name: "set",
          description: "Set a Truffle configuration option value",
          args: [
            {
              name: "key",
            },
            {
              name: "value-for-set",
            },
          ],
        },
      ],
      options: [
        {
          name: "--enable-analytics",
          description: "Enable Truffle to send usage data to Google Analytics",
          exclusiveOn: ["--disable-analytics"],
        },
        {
          name: "--disable-analytics",
          description:
            "Disable Truffle's ability to send usage data to Google Analytics",
          exclusiveOn: ["--enable-analytics"],
        },
      ],
    },
    {
      name: "console",
      description:
        "Run a console with contract abstractions and commands available",
      options: [
        {
          name: "--network",
          description: "Specify the network to use",
          args: {
            name: "name",
            description: "Network name must exist in the configuration",
          },
        },
        {
          name: "--verbose-rpc",
          description:
            "Log communication between Truffle and the Ethereum client",
        },
        {
          name: ["--require", "-r"],
          description:
            "Preload console environment from required JavaScript file",
          args: {
            name: "file",
            description:
              'The default export must be an object with named keys that will be used to populate the console environment. For example, if your JavaScript is module.exports = { desert: "yes please!" } then breakfast will be available in the console with the value "yes please!."',
            template: "filepaths",
          },
        },
        {
          name: "--require-none",
          description:
            "Do not load any user-defined JavaScript into the console environment. This option takes precedence over --require, -r, and values provided for console.require in your project's truffle-config.js",
        },
      ],
    },
    {
      name: "create",
      description: "Helper to create new contracts, migrations and tests",
      args: [
        {
          name: "artifact_type",
          description:
            "Create a new artifact where artifact_type is one of the following: contract, migration, test or all. The new artifact is created along with one(or all) of the followingfiles: `contracts/ArtifactName.sol`, `migrations/####_artifact_name.js` or`tests/artifact_name.js`. (required)",
          suggestions: [
            {
              name: "contract",
            },
            {
              name: "migration",
            },
            {
              name: "test",
            },
            {
              name: "all",
            },
          ],
        },
        {
          name: "ArtifactName",
          description: "Name of new artifact. (required)",
        },
      ],
    },
    {
      name: "debug",
      description: "Interactively debug any transaction on the blockchain",
      args: {
        name: "transaction_hash",
        isOptional: true,
        description:
          "Transaction ID to use for debugging. You can omit this to simply start the debugger and then load a transaction later",
      },
      options: [
        {
          name: "--network",
          description: "The network to connect to",
          args: {
            name: "network",
          },
        },
        {
          name: ["--fetch-external", "-x"],
          description:
            "Allows the debugger to download source from source verification services to debug transactions involving external contracts. When used, a transaction hash is required. May be abbreviated -x",
        },
        {
          name: "--compile-tests",
          description:
            "Allows the debugger to compile Solidity test contracts. Implies --compile-all",
          exclusiveOn: ["--compile-all", "--compile-none"],
        },
        {
          name: "--compile-all",
          description:
            "Forces the debugger to recompile all contracts, even when it would otherwise judge doing so unnecessary. Compilation results are not saved",
          exclusiveOn: ["--compile-tests", "--compile-none"],
        },
        {
          name: "--compile-none",
          description:
            "Forces the debugger not to recompile contracts, even when it would otherwise judge it necessary. This option is dangerous and may cause errors. Please only use this if you are sure a recompilation is not necessary",
          exclusiveOn: ["--compile-tests", "--compile-all"],
        },
      ],
    },
    {
      name: "deploy",
      description: "Alias for migrate. See migrate for details",
    },
    {
      name: "develop",
      description: "Open a console with a development blockchaine",
      options: [
        {
          name: "--log",
          description:
            "Start/Connect to a Truffle develop session and log all RPC activity. See the Log RPC Activity docs for more information about using this option",
          args: {
            name: "network",
          },
        },
        {
          name: ["--require", "-r"],
          description:
            "Preload console environment from required JavaScript file",
          args: {
            name: "file",
            description:
              'The default export must be an object with named keys that will be used to populate the console environment. For example, if your JavaScript is module.exports = { desert: "yes please!" } then breakfast will be available in the console with the value "yes please!."',
            template: "filepaths",
          },
        },
        {
          name: "--require-none",
          description:
            "Do not load any user-defined JavaScript into the console environment. This option takes precedence over --require, -r, and values provided for console.require in your project's truffle-config.js",
        },
      ],
    },
    {
      name: "exec",
      description: "Execute a JS module within the Truffle environment",
      args: {
        name: "script.js",
        description:
          "JavaScript file to be executed. Can include path information if the script does not exist in the current directory. (required)",
        template: "filepaths",
      },
      options: [
        {
          name: "--network",
          description:
            "Specify the network to use, using artifacts specific to that network",
          args: {
            name: "name",
            description: "Network name must exist in the configuration",
          },
        },
        {
          name: "--compile",
          description: "Compile contracts before executing the script",
        },
      ],
    },
    {
      name: "help",
      description:
        "Display a list of all commands or information about a specific command",
      args: {
        name: "command",
        description: "Display usage information about the specified command",
        suggestions: truffleCommands,
      },
    },
    {
      name: "init",
      description: "Initialize new and empty Ethereum project",
      options: [
        {
          name: "--force",
          description:
            "Initialize project regardless of the current working directory's state. Be careful, this could overwrite existing files that have name conflicts",
          isDangerous: true,
        },
      ],
    },
    {
      name: "install",
      description: "Install a package from the Ethereum Package Registry",
      args: [
        {
          name: "package_name",
          description:
            "Name of the package as listed in the Ethereum Package Registry. (required)",
        },
        {
          name: "@version",
          description:
            "When specified, will install a specific version of the package, otherwise will install the latest version",
        },
      ],
    },
    {
      name: "networks",
      description: "Show addresses for deployed contracts on each network",
      options: [
        {
          name: "--clean",
          description:
            "Remove all network artifacts that aren't associated with a named network",
        },
      ],
    },
    {
      name: "obtain",
      description: "Fetch and cache a specified compiler",
      options: [
        {
          name: "--solc",
          description:
            "Download and cache a version of the solc compiler. (required)",
          isRequired: true,
          args: {
            name: "version",
          },
        },
      ],
    },
    {
      name: "opcode",
      description: "Print the compiled opcodes for a given contract",
      args: {
        name: "contract_name",
        description:
          "Name of the contract to print opcodes for. Must be a contract name, not a file name. (required)",
      },
    },
    {
      name: "publish",
      description: "Publish a package to the Ethereum Package Registry",
    },
    {
      name: "run",
      description: "Run a third-party plugin command",
      args: {
        name: "command",
        description:
          "Name of a command defined by an installed plugin. (required)",
      },
    },
    {
      name: "version",
      description: "Show version number and exit",
    },
    {
      name: "watch",
      description:
        "Watch filesystem for changes and rebuild the project automatically",
    },
    {
      name: "preserve",
      description:
        "Save data to decentralized storage platforms like IPFS and Filecoin",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        {
          name: "--environment",
          description:
            "Environment name, as defined in truffle-config `environments` object",
          args: {
            name: "name",
            default: "development",
          },
        },
        {
          name: "--ipfs",
          description: "Preserve to IPFS",
        },
        {
          name: "--filecoin",
          description: "Preserve to Filecoin",
        },
        {
          name: "--buckets",
          description: "Preserve to Textile Buckets",
        },
      ],
    },
    {
      name: "migrate",
      description: "Run migrations to deploy contracts",
      options: [
        {
          name: "--reset",
          description:
            "Run all migrations from the beginning, instead of running from the last completed migration",
        },
        {
          name: "--f",
          description: "Run contracts from a specific migration",
          args: {
            name: "number",
            description:
              "The number refers to the prefix of the migration file",
          },
        },
        {
          name: "--to",
          description: "Run contracts to a specific migration",
          args: {
            name: "number",
            description:
              "The number refers to the prefix of the migration file",
          },
        },
        {
          name: "--network",
          description:
            "Specify the network to use, saving artifacts specific to that network",
          args: {
            name: "name",
            description: "Network name must exist in the configuration",
          },
        },
        {
          name: "--compile-all",
          description:
            "Compile all contracts instead of intelligently choosing which contracts need to be compiled",
        },
        {
          name: "--verbose-rpc",
          description:
            "Log communication between Truffle and the Ethereum client",
        },
        {
          name: "--dry-run",
          description:
            "Fork the network specified and only perform a test migration",
        },
        {
          name: "--skip-dry-run",
          description:
            "Skip the test migration performed before the real migration",
        },
        {
          name: "--interactive",
          description:
            "Prompt to confirm that the user wants to proceed after the dry run",
        },
        {
          name: "--describe-json",
          description: "Prints additional status messages",
        },
      ],
    },
    {
      name: "unbox",
      description: "Download a Truffle Box, a pre-built Truffle project",
      args: [
        {
          name: "box_name",
          description: "Name of the Truffle Box. (required)",
        },
        {
          name: "path",
          isOptional: true,
          generators: {
            template: "filepaths",
          },
        },
      ],
      options: [
        {
          name: "--force",
          description:
            "Unbox project in the current directory regardless of its state. Be careful, this will potentially overwrite files that exist in the directory",
          isDangerous: true,
        },
      ],
    },
    {
      name: "test",
      description: "Run JavaScript and Solidity tests",
      args: {
        name: "test_file",
        description:
          "Name of the test file to be run. Can include path information if the file does not exist in the current directory",
        template: "filepaths",
      },
      options: [
        {
          name: "--compile-all",
          description:
            "Compile all contracts instead of intelligently choosing which contracts need to be compiled",
        },
        {
          name: "--compile-all-debug",
          description:
            "Like --compile-all, but compiles contracts in debug mode for extra information. Has no effect on Solidity <0.6.3",
        },
        {
          name: "--network",
          description:
            "Specify the network to use, using artifacts specific to that network",
          args: {
            name: "name",
            description: "Network name must exist in the configuration",
          },
        },
        {
          name: "--verbose-rpc",
          description:
            "Log communication between Truffle and the Ethereum client",
        },
        {
          name: "--show-events",
          description: "Log all contract events",
        },
        {
          name: "--debug",
          description:
            "Provides global debug() function for in-test debugging. Usable with Javascript tests only; implies --compile-all",
        },
        {
          name: "--debug-global",
          description:
            "Allows one to rename the debug() function to something else",
          args: {
            name: "identifier",
          },
        },
        {
          name: ["--bail", "-b"],
          description:
            "Bail after the first test failure. May be abbreviated -b",
        },
        {
          name: ["--stacktrace", "-t"],
          description:
            "Allows for mixed Javascript-and-Solidity stacktraces when a Truffle Contract transaction or deployment reverts. Does not apply to calls or gas estimates. Implies --compile-all. May be abbreviated -t. Warning: This option is still somewhat experimental",
        },
        {
          name: "--stacktrace-extra",
          description: "Shortcut for --stacktrace --compile-all-debug",
        },
      ],
    },
  ],
};
export default completionSpec;
