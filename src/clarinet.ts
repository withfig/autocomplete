const manifestArg: Fig.Option = {
  name: "--manifest-path",
  description: "Path to Clarinet.toml",
  args: { name: "manifest_path", template: "filepaths" },
};

const completionSpec: Fig.Spec = {
  name: "clarinet",
  description: "Command line tool for Clarity smart contract development",
  subcommands: [
    {
      name: "completions",
      description: "Generate shell completion scripts",
    },
    {
      name: "new",
      description: "Create and scaffold a new project",
      args: { name: "project_name" },
    },
    {
      name: "contracts",
      description: "Subcommands for working with contracts",
      subcommands: [
        {
          name: "new",
          description: "Generate files and settings for a new contract",
          args: { name: "name" },
          options: [manifestArg],
        },
        {
          name: "rm",
          description: "Remove files and settings for a contract",
          args: { name: "name" },
          options: [manifestArg],
        },
      ],
    },
    {
      name: "requirements",
      description: "Interact with contracts deployed on Mainnet",
      subcommands: [
        {
          name: "add",
          description: "Interact with contracts deployed on Mainnet",
          args: { name: "requirement" },
          options: [manifestArg],
        },
      ],
    },
    {
      name: "deployments",
      description:
        "Manage contracts deployments on Simnet/Devnet/Testnet/Mainnet",
      subcommands: [
        { name: "check", description: "Check deployments format" },
        {
          name: "generate",
          description: "Generate new deployment",
          options: [manifestArg],
        },
        {
          name: "apply",
          description: "Apply deployment",
          options: [
            manifestArg,
            {
              name: "--devnet",
              description:
                "Apply default deployment settings/default.devnet-plan.toml",
            },
            {
              name: "--testnet",
              description:
                "Apply default deployment settings/default.testnet-plan.toml",
            },
            {
              name: "--mainnet",
              description:
                "Apply default deployment settings/default.mainnet-plan.toml",
            },
            {
              name: "-p",
              description: "If specified, use this deployment file",
              args: { name: "deployment_plan_path", template: "filepaths" },
            },
          ],
        },
        {
          name: "encrypt",
          description: "Encrypt deployment mnemonic",
        },
      ],
    },
    {
      name: "devnet",
      description: "Subcommands for Devnet usage",
      subcommands: [
        {
          name: "package",
          description: "Generate package of all required devnet artifacts",
        },
        {
          name: "start",
          description:
            "Start a local Devnet network for interacting with your contracts from your browser",
          options: [
            manifestArg,
            {
              name: "--no-dashboard",
              description:
                "Display streams of logs instead of terminal UI dashboard",
            },
            { name: "--from-genesis", description: "Start from genesis" },
          ],
        },
      ],
    },
    {
      name: "console",
      description: "Load contracts in a REPL for an interactive session",
      options: [
        manifestArg,
        {
          name: "-p",
          description: "If specified, use this deployment file",
          args: { name: "deployment_plan_path", template: "filepaths" },
        },
        {
          name: "-d",
          description:
            "Use on disk deployment plan (prevent updates computing)",
        },
        {
          name: "-c",
          description:
            "Use computed deployment plan (will overwrite on disk version if any update)",
        },
        { name: "-r", description: "Enable remote data fetching" },
      ],
    },
    {
      name: "check",
      description: "Run syntax checking, type checking, and lints on contracts",
      options: [manifestArg],
    },
    {
      name: "integrate",
      description:
        "Start a local Devnet network (deprecated, use 'clarinet devnet start')",
    },
    {
      name: "lsp",
      description:
        "Get Clarity autocompletion and inline errors from your code editor (VSCode, vim, emacs, etc)",
    },
    {
      name: "format",
      description: "Format clarity code files",
      options: [
        manifestArg,
        {
          name: "-f",
          description: "If specified, format only this file",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "-l",
          description: "Maximum line length",
          args: { name: "max_line_length" },
        },
        {
          name: "-i",
          description: "Indentation size, e.g. 2",
          args: { name: "indentation" },
        },
        { name: "-t", description: "Use tabs instead of spaces" },
      ],
    },
    {
      name: "dap",
      description:
        "Step by step debugging and breakpoints from your code editor (VSCode, vim, emacs, etc)",
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
    },
  ],
  options: [
    { name: ["-h", "--help"], description: "Print help" },
    { name: ["-V", "--version"], description: "Print version" },
  ],
};

export default completionSpec;
