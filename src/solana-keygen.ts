const completionSpec: Fig.Spec = {
    name: "solana-keygen",
    description: "Solana key generation and management utility",
    subcommands: [
      {
        name: "new",
        description: "Generate a new keypair",
        args: {
          name: "outfile",
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
            description: "Do not display seed phrase. Useful when piping to other programs that prompt for user input, like gpg",
          },
          {
            name: "--no-bip39-passphrase",
            description: "Do not prompt for a BIP39 passphrase",
          },
          {
            name: "--word-count",
            description: "Specify the number of words in the recovery seed phrase",
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
          {
            name: "--derivation-path",
            description: "Derivation path to use",
            args: {
              name: "path",
              description: "BIP44 derivation path (e.g., m/44'/501'/0'/0')",
            },
          },
          {
            name: "--legacy",
            description: "Generate a legacy keypair instead of a hierarchical deterministic keypair",
          },
        ],
      },
      {
        name: "grind",
        description: "Grind for vanity keypairs",
        options: [
          {
            name: "--starts-with",
            description: "Starts with the given string",
            args: {
              name: "prefix",
              description: "Prefix that the pubkey should start with",
            },
          },
          {
            name: "--ends-with", 
            description: "Ends with the given string",
            args: {
              name: "suffix",
              description: "Suffix that the pubkey should end with",
            },
          },
          {
            name: "--starts-and-ends-with",
            description: "Starts and ends with the given string",
            args: {
              name: "string",
              description: "String that the pubkey should start and end with",
            },
          },
          {
            name: "--ignore-case",
            description: "Perform case-insensitive matches",
          },
          {
            name: "--num-threads",
            description: "Number of threads to use",
            args: {
              name: "threads",
              description: "Number of threads (default: number of CPU cores)",
            },
          },
          {
            name: "--no-outfile",
            description: "Only search for the vanity pubkey and not save the keypair to a file",
          },
          {
            name: "--outdir",
            description: "Directory to save generated keypairs",
            args: {
              name: "directory",
              template: "folders",
            },
          },
          {
            name: "--word-count",
            description: "Specify the number of words in the recovery seed phrase",
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
          {
            name: "--derivation-path",
            description: "Derivation path to use",
            args: {
              name: "path",
              description: "BIP44 derivation path (e.g., m/44'/501'/0'/0')",
            },
          },
          {
            name: "--use-mnemonic",
            description: "Generate mnemonic seed phrases instead of legacy keypairs",
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
        options: [
          {
            name: "--skip-seed-phrase-validation",
            description: "Skip validation of seed phrase checksums",
          },
          {
            name: "--derivation-path",
            description: "Derivation path to use",
            args: {
              name: "path",
              description: "BIP44 derivation path (e.g., m/44'/501'/0'/0')",
            },
          },
          {
            name: "--outfile",
            description: "Write the pubkey to this file",
            args: {
              name: "file",
              template: "filepaths",
            },
          },
        ],
      },
      {
        name: "verify",
        description: "Verify a keypair can sign and verify a message",
        args: {
          name: "keypair",
          description: "Keypair file to verify",
          template: "filepaths",
        },
        options: [
          {
            name: "--skip-seed-phrase-validation",
            description: "Skip validation of seed phrase checksums",
          },
          {
            name: "--derivation-path",
            description: "Derivation path to use",
            args: {
              name: "path",
              description: "BIP44 derivation path (e.g., m/44'/501'/0'/0')",
            },
          },
        ],
      },
      {
        name: "recover",
        description: "Recover keypair from seed phrase",
        args: {
          name: "outfile",
          description: "Path to output keypair file",
          isOptional: true,
          template: "filepaths",
        },
        options: [
          {
            name: "--force",
            description: "Overwrite the output file if it exists",
          },
          {
            name: "--derivation-path",
            description: "Derivation path to use",
            args: {
              name: "path",
              description: "BIP44 derivation path (e.g., m/44'/501'/0'/0')",
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
          {
            name: "--prompt-signer",
            description: "Prompt for a signer's seed phrase and output the corresponding pubkey",
          },
        ],
      },
      {
        name: "ask-seed-phrase",
        description: "Prompts user for a seed phrase and outputs the corresponding pubkey",
        options: [
          {
            name: "--derivation-path",
            description: "Derivation path to use",
            args: {
              name: "path",
              description: "BIP44 derivation path (e.g., m/44'/501'/0'/0')",
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
        name: "resolve-signer",
        description: "Resolve a signer from a given path",
        args: {
          name: "signer",
          description: "The signer path to resolve",
         },
        options: [
          {
            name: "--derivation-path",
            description: "Derivation path to use", 
            args: {
              name: "path",
              description: "BIP44 derivation path (e.g., m/44'/501'/0'/0')",
            },
          },
          {
            name: "--skip-seed-phrase-validation",
            description: "Skip validation of seed phrase checksums",
          },
        ],
      },
    ],
    options: [
      {
        name: ["--help", "-h"],
        description: "Show help for solana-keygen",
      },
      {
        name: ["--version", "-V"],
        description: "Show version information",
      },
    ],
  };
  
  export default completionSpec;