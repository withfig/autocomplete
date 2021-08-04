export const completionSpec: Fig.Spec = {
    name: "hardhat",
    options: [
      { name: "config", description: "A Hardhat config file" },
      { name: "--emoji", description: "Use emoji in messages" },
      {
        name: "--max-memory",
        description: "The maximum amount of memory that Hardhat can use",
      },
      {
        name: "--help",
        description: "Shows the help text or task's help if name is provided",
        args: { isOptional: true, name: "task" },
      },
      { name: "--network", description: "The network to connect to" },
      { name: "---show-stack-traces", description: "Show stack traces" },
      { name: "--verbose", description: "Enables Hardhat verbose logging" },
      { name: "--version", description: "Shows hardhat's version." },
    ],
    subcommands: [
      { name: "accounts", description: "Prints the list of accounts" },
      { name: "check", description: "Check whatever you need" },
      {
        name: "clean",
        description: "Clears the cache and deletes all artifacts",
        options: [{ name: "--global", description: "clear the global cache" }],
      },
      {
        name: "compile",
        description: "Compiles the entire project, building all artifacts",
        options: [
          { name: "--force", description: "Force compilation ignoring cache" },
          {
            name: "--quiet",
            description: "Makes the compilation process less verbose",
          },
        ],
      },
      {
        name: "console",
        description: "Opens a hardhat console",
        options: [
          {
            name: "--no-compile",
            description: "Don't compile before running this task",
          },
        ],
      },
      {
        name: "flatten",
        description: "Flattens and prints contracts and their dependencies",
      },
      { name: "help", description: "Prints this message" },
      {
        name: "node",
        description: "Starts a JSON-RPC server on top of Hardhat Network",
        options: [
          {
            name: "--fork",
            description: "The URL of the JSON-RPC server to fork from",
          },
          {
            name: "--fork-block-number",
            description: "The block number to fork from",
          },
          {
            name: "--hostname",
            description: "The host to which to bind to for new connections",
          },
          {
            name: "--port",
            description:
              "The port on which to listen for new connections (default: 8545)",
          },
        ],
      },
      {
        name: "run",
        description: "Runs a user-defined script after compiling the project",
        options: [
          {
            name: "--no-compile",
            description: "Don't compile before running this task",
          },
        ],
      },
      {
        name: "test",
        description: "Runs mocha tests",
        options: [
          {
            name: "--no-compile",
            description: "Don't compile before running this task",
          },
        ],
      },
    ],
  };
