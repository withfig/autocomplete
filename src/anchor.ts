const completionSpec: Fig.Spec = {
  name: "anchor",
  description: "Anchor framework CLI for building Solana programs",
  subcommands: [
    {
      name: "init",
      description: "Initialize a new Anchor workspace",
      args: {
        name: "name",
        description: "Name of the workspace",
      },
      options: [
        {
          name: "--no-git",
          description: "Do not initialize a git repository",
        },
        {
          name: "--jest",
          description: "Use Jest as the testing framework",
        },
        {
          name: "--typescript",
          description: "Use TypeScript (default)",
        },
        {
          name: "--javascript",
          description: "Use JavaScript instead of TypeScript",
        },
        {
          name: "--template",
          description: "Use a template for initialization",
          args: {
            name: "template",
            suggestions: ["single", "multiple"],
          },
        },
      ],
    },
    {
      name: "new",
      description: "Create a new program in the workspace",
      args: {
        name: "program_name",
        description: "Name of the new program",
      },
    },
    {
      name: "build",
      description: "Build the workspace",
      options: [
        {
          name: ["--program-name", "-p"],
          description: "Build a specific program only",
          args: {
            name: "program",
            description: "Program name to build",
          },
        },
        {
          name: "--verifiable",
          description: "Build with verifiable builds",
        },
        {
          name: "--solana-version",
          description: "Solana version to use for the build",
          args: {
            name: "version",
            description: "Solana version (e.g., 1.18.8)",
          },
        },
        {
          name: "--docker-image",
          description: "Docker image to use for verifiable builds",
          args: {
            name: "image",
            description: "Docker image name",
          },
        },
        {
          name: "--bootstrap",
          description: "Bootstrap the docker image",
        },
        {
          name: "--cargo-args",
          description: "Additional arguments to pass to cargo",
          args: {
            name: "args",
            description: "Cargo arguments",
          },
        },
        {
          name: "--skip-lint",
          description: "Skip linting during build",
        },
        {
          name: ["--arch", "-a"],
          description: "Architecture to build for",
          args: {
            name: "arch",
            suggestions: ["x86_64", "arm64"],
          },
        },
      ],
    },
    {
      name: "verify",
      description: "Verify a built program against the on-chain version",
      args: [
        {
          name: "program_id",
          description: "Program ID to verify",
        },
        {
          name: "program_name",
          description: "Local program name",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--solana-version",
          description: "Solana version used for verification",
          args: {
            name: "version",
            description: "Solana version (e.g., 1.18.8)",
          },
        },
        {
          name: "--docker-image",
          description: "Docker image to use for verification",
          args: {
            name: "image",
            description: "Docker image name",
          },
        },
        {
          name: "--bootstrap",
          description: "Bootstrap the docker image",
        },
        {
          name: ["--arch", "-a"],
          description: "Architecture to verify for",
          args: {
            name: "arch",
            suggestions: ["x86_64", "arm64"],
          },
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy all programs in the workspace",
      options: [
        {
          name: ["--program-name", "-p"],
          description: "Deploy a specific program only",
          args: {
            name: "program",
            description: "Program name to deploy",
          },
        },
        {
          name: "--program-keypair",
          description: "Filepath to the program keypair",
          args: {
            name: "keypair",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "upgrade",
      description: "Upgrade a deployed program",
      args: [
        {
          name: "program_id",
          description: "Program ID to upgrade",
        },
        {
          name: "program_filepath",
          description: "Path to the new program binary",

          template: "filepaths",
        },
      ],
    },
    {
      name: "test",
      description: "Run integration tests",
      options: [
        {
          name: "--skip-local-validator",
          description: "Skip starting a local validator",
        },
        {
          name: "--skip-build",
          description: "Skip building programs before testing",
        },
        {
          name: "--skip-deploy",
          description: "Skip deploying programs before testing",
        },
        {
          name: "--detach",
          description: "Exit immediately after starting the validator",
        },
        {
          name: ["--program-name", "-p"],
          description: "Test a specific program only",
          args: {
            name: "program",
            description: "Program name to test",
          },
        },
        {
          name: "--validator-log-stdout",
          description: "Stream validator logs to stdout",
        },
        {
          name: "--run",
          description: "Run specific test file",
          args: {
            name: "test_file",
            description: "Test file to run",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "localnet",
      description: "Start a local test validator",
      options: [
        {
          name: "--skip-build",
          description: "Skip building programs before starting validator",
        },
        {
          name: "--skip-deploy",
          description: "Skip deploying programs to the validator",
        },
        {
          name: "--validator-log-stdout",
          description: "Stream validator logs to stdout",
        },
        {
          name: "--detach",
          description: "Exit immediately after starting the validator",
        },
      ],
    },
    {
      name: "migrate",
      description: "Run the deploy migration script",
      options: [
        {
          name: "--url",
          description: "RPC URL to use for migration",
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
      ],
    },
    {
      name: "idl",
      description: "Interface Definition Language utilities",
      subcommands: [
        {
          name: "init",
          description: "Initialize an IDL for a program",
          args: [
            {
              name: "program_id",
              description: "Program ID",
            },
            {
              name: "idl_filepath",
              description: "Path to the IDL file",

              template: "filepaths",
            },
          ],
        },
        {
          name: "fetch",
          description: "Fetch an IDL from a program",
          args: [
            {
              name: "program_id",
              description: "Program ID to fetch IDL from",
            },
            {
              name: "out",
              description: "Output file for the IDL",
              isOptional: true,
              template: "filepaths",
            },
          ],
        },
        {
          name: "set-authority",
          description: "Set the IDL authority",
          args: [
            {
              name: "program_id",
              description: "Program ID",
            },
            {
              name: "new_authority",
              description: "New authority public key",
            },
          ],
          options: [
            {
              name: "--filepath",
              description: "Path to the IDL file",
              args: {
                name: "filepath",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "erase-authority",
          description: "Erase the IDL authority",
          args: {
            name: "program_id",
            description: "Program ID",
          },
          options: [
            {
              name: "--filepath",
              description: "Path to the IDL file",
              args: {
                name: "filepath",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "authority",
          description: "Show the IDL authority",
          args: {
            name: "program_id",
            description: "Program ID",
          },
        },
        {
          name: "parse",
          description: "Parse an IDL from source",
          args: [
            {
              name: "program_path",
              description: "Path to the program",

              template: "folders",
            },
            {
              name: "out",
              description: "Output file for the parsed IDL",
              isOptional: true,
              template: "filepaths",
            },
          ],
        },
        {
          name: "build",
          description: "Build IDL from source",
          options: [
            {
              name: "--out",
              description: "Output directory",
              args: {
                name: "directory",
                template: "folders",
              },
            },
            {
              name: "--program-name",
              description: "Program name to build IDL for",
              args: {
                name: "program",
                description: "Program name",
              },
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade an IDL on chain",
          args: [
            {
              name: "program_id",
              description: "Program ID",
            },
            {
              name: "idl_filepath",
              description: "Path to the new IDL file",

              template: "filepaths",
            },
          ],
        },
        {
          name: "set-buffer",
          description: "Set an IDL buffer",
          args: [
            {
              name: "program_id",
              description: "Program ID",
            },
            {
              name: "buffer",
              description: "Buffer account address",
            },
          ],
        },
        {
          name: "close",
          description: "Close an IDL buffer",
          args: {
            name: "program_id",
            description: "Program ID",
          },
        },
        {
          name: "write-buffer",
          description: "Write IDL to a buffer account",
          args: [
            {
              name: "program_id",
              description: "Program ID",
            },
            {
              name: "idl_filepath",
              description: "Path to the IDL file",

              template: "filepaths",
            },
          ],
        },
      ],
    },
    {
      name: "account",
      description: "Fetch and deserialize account data",
      args: [
        {
          name: "account_type",
          description: "Account type defined in the program",
        },
        {
          name: "address",
          description: "Address of the account",
        },
      ],
      options: [
        {
          name: "--program-id",
          description: "Program ID that owns the account",
          args: {
            name: "program_id",
            description: "Program ID",
          },
        },
      ],
    },
    {
      name: "cluster",
      description: "Cluster commands for Anchor workspace",
      subcommands: [
        {
          name: "list",
          description: "List cluster endpoints",
        },
      ],
    },
    {
      name: "shell",
      description: "Start an anchor workspace shell",
    },
    {
      name: "run",
      description: "Run a script from the scripts directory",
      args: {
        name: "script",
        description: "Script name to run",
      },
    },
    {
      name: "login",
      description: "Save an API token for Anchor registry",
      args: {
        name: "token",
        description: "API token",
      },
    },
    {
      name: "publish",
      description: "Publish a package to the Anchor registry",
      args: {
        name: "package",
        description: "Package name",
      },
    },
    {
      name: "keys",
      description: "Keypair commands",
      subcommands: [
        {
          name: "list",
          description: "List all configured keypairs",
        },
        {
          name: "sync",
          description: "Sync keypairs with Anchor.toml",
        },
      ],
    },
    {
      name: "clean",
      description: "Remove the target directory",
    },
    {
      name: "expand",
      description: "Expand macros (experimental)",
      options: [
        {
          name: "--program-name",
          description: "Program name to expand",
          args: {
            name: "program",
            description: "Program name",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--provider.cluster", "-c"],
      description: "Cluster to use",
      args: {
        name: "cluster",
        suggestions: ["localnet", "devnet", "testnet", "mainnet"],
      },
    },
    {
      name: ["--provider.wallet", "-w"],
      description: "Wallet keypair path",
      args: {
        name: "wallet",
        template: "filepaths",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show help for anchor",
    },
    {
      name: ["--version", "-V"],
      description: "Show version information",
    },
  ],
};

export default completionSpec;
