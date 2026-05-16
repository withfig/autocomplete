const getCipherAlgorithms: Fig.Generator = {
  script: ["gpg", "--version"],
  postProcess: (out, context) => {
    // Get the substring 2of cyphers, remove whitespace and split by commas
    let cyphers = out.substring(
      out.indexOf("Cypher: ") + 8,
      out.indexOf("Hash: ")
    );
    cyphers = cyphers.replace(/\s+/g, "");

    return cyphers.split(",").map((cypher) => {
      return { name: cypher };
    });
  },
};

const getDigestAlgorithms: Fig.Generator = {
  script: ["gpg", "--version"],
  postProcess: (out, context) => {
    // Get the substring of digests, remove whitespace and split by commas
    let digests = out.substring(
      out.indexOf("Hash: ") + 8,
      out.indexOf("Compression: ")
    );
    digests = digests.replace(/\s+/g, "");

    return digests.split(",").map((digest) => {
      return { name: digest };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "gpg",
  description: "Encryption and signing tool",
  options: [
    {
      name: "--homedir",
      description: "Set the name of the home directory",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--options",
      description: "Read options from file",
      exclusiveOn: ["--no-options"],
      args: { name: "file", template: "filepaths" },
    },
    { name: ["-a", "--armour"], description: "Create ASCII armored output" },
    {
      name: ["-o", "--output"],
      description: "Write output to file",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: ["-u", "--local-user"],
      description: "Use name as the user ID to sign",
      args: { name: "name" },
    },
    {
      name: "--default-key",
      description: "Use name as default user ID for signatures",
      args: { name: "name" },
    },
    {
      name: ["-r", "--recipient"],
      description: "Encrypt for user id name",
      args: { name: "name" },
    },
    {
      name: "--default-recipient",
      description: "Use name as default recipient",
      exclusiveOn: ["--no-default-recipient", "--default-recipient-self"],
      args: { name: "name" },
    },
    {
      name: "--default-recipient-self",
      description: "Use the default key as default recipient",
      exclusiveOn: ["--default-recipient", "--no-default-recipient"],
    },
    {
      name: "--no-default-recipient",
      description: "Reset --default-recipient and --default-recipient-self",
      exclusiveOn: ["--default-recipient", "--default-recipient-self"],
    },
    {
      name: "--encrypt-to",
      description:
        "Same as --recipient but this one is intended for in the options file",
      exclusiveOn: ["--no-encrypt-to"],
      args: { name: "name" },
    },
    {
      name: "--no-encrypt-to",
      description: "Disable the use of all --encrypt-to keys",
      exclusiveOn: ["--encrypt-to"],
    },
    {
      name: ["-v", "--verbose"],
      description: "Give more information during processing",
      exclusiveOn: ["--no-verbose"],
    },
    { name: ["-q", "--quiet"], description: "Try to be as quiet as possible" },
    {
      name: "-Z",
      description: "Set compression level to n",
      args: {
        name: "n",
        default: "6",
        suggestions: ["0", "1", "2", "3", "4", "5", "6"],
      },
    },
    { name: ["-t", "--textmode"], description: "Use canonical text mode" },
    { name: ["-n", "--dry-run"], description: "Don't make any changes" },
    {
      name: ["-i", "--interactive"],
      description: "Prompt before overwriting any files",
    },
    {
      name: "--batch",
      description: "Use batch mode",
      exclusiveOn: ["--no-batch"],
    },
    {
      name: "--no-tty",
      description: "Make sure that the TTY is never used for any output",
    },
    {
      name: "--no-batch",
      description: "Disable batch mode",
      exclusiveOn: ["--batch"],
    },
    {
      name: "--yes",
      description: 'Assume "yes" on most questions',
      exclusiveOn: ["--no"],
    },
    {
      name: "--no",
      description: 'Assume "no" on most questions',
      exclusiveOn: ["--yes"],
    },
    { name: "--always-trust", description: "Skip key validation" },
    {
      name: "--keyserver",
      description: "Use name to lookup keys which are not yet in your keyring",
      args: { name: "name" },
    },
    {
      name: "--no-auto-key-retrieve",
      description: "Disables the automatic retrieving of keys",
    },
    {
      name: "--honor-http-proxy",
      description: "Try to access the keyserver over the proxy",
    },
    {
      name: "--keyring",
      description: "Add file to the list of keyrings",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--secret-keyring",
      description: "Same as --keyring but for the secret keyrings",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--charset",
      description: "Set the name of the native character set",
      args: {
        name: "name",
        suggestions: [
          {
            name: "iso-8859-1",
            description: "This is the default Latin 1 set",
          },
          { name: "iso-8859-2", description: "The Latin 2 set" },
          { name: "koi8-r", description: "The usual Russian set (rfc1489)" },
        ],
      },
    },
    {
      name: "--utf8-strings",
      description: "Assume that the arguments are already given as UTF8",
      exclusiveOn: ["--no-utf8-strings"],
    },
    {
      name: "--no-utf8-strings",
      exclusiveOn: ["--utf8-strings"],
    },
    {
      name: "--no-options",
      description: 'Shortcut for "--options /dev/null"',
      exclusiveOn: ["--options"],
    },
    {
      name: "--load-extension",
      description: "Load an extension module",
      args: {
        name: "name",
        description:
          'If name does not contain a slash it is searched in "/usr/local/lib/gnupg"',
      },
    },
    {
      name: "--debug",
      description: "Set debugging flags",
      args: { name: "flags" },
    },
    { name: "--debug-all", description: "Set all useful debugging flags" },
    {
      name: "--status-fd",
      description: "Write special status strings to the file descriptor n",
      args: { name: "n" },
    },
    {
      name: "--logger-fd",
      description: "Write log output to file descriptor n and not to stderr",
      args: { name: "n" },
    },
    {
      name: "--no-comment",
      description: "Do not write comment packets",
      exclusiveOn: ["--comment", "--default-comment"],
    },
    {
      name: "--comment",
      description: "Use string as comment string in clear text signatures",
      exclusiveOn: ["--no-comment", "--default-comment"],
      args: { name: "string", default: "" },
    },
    {
      name: "--default-comment",
      description: "Force to write the standard comment string",
      exclusiveOn: ["--no-comment", "--comment"],
    },
    {
      name: "--no-version",
      description: "Omit the version string in clear text signatures",
    },
    {
      name: "--emit-version",
      description: "Force to write the version string",
    },
    {
      name: ["-N", "--notation-data"],
      description:
        "Put the name value pair into the signature as notation data",
      args: { name: "name=value" },
    },
    {
      name: "--set-policy-url",
      description: "Use string as Policy URL for signatures (rfc2440:5.2.3.19)",
      args: { name: "string" },
    },
    {
      name: "--set-filename",
      description: "Use string as the name of file which is stored in messages",
      args: { name: "string" },
    },
    {
      name: "--use-embedded-filename",
      description: "Try to create a file with a name as embedded in the data",
    },
    {
      name: "--completes-needed",
      description:
        "Number of completely trusted users to introduce a new key signer",
      args: { name: "n", default: "1" },
    },
    {
      name: "--marginals-needed",
      description:
        "Number of marginally trusted users to introduce a new key signer",
      args: { name: "n", default: "3" },
    },
    {
      name: "--max-cert-depth",
      description: "Maximum depth of a certification chain",
      args: { name: "n", default: "5" },
    },
    {
      name: "--cipher-algo",
      description: "Use name as cipher algorithm",
      args: { name: "name", generators: getCipherAlgorithms },
    },
    {
      name: "--digest-algo",
      description: "Use name as message digest algorithm",
      args: { name: "name", generators: getDigestAlgorithms },
    },
    {
      name: "--s2k-cipher-algo",
      description:
        "Use name as the cipher algorithm used to protect secret keys",
      args: {
        name: "name",
        default: "BLOWFISH",
        generators: getCipherAlgorithms,
      },
    },
    {
      name: "--s2k-digest-algo",
      description:
        "Use name as the digest algorithm used to mangle the passphrases",
      args: {
        name: "name",
        default: "RIPE-MD-160",
        generators: getDigestAlgorithms,
      },
    },
    {
      name: "--s2k-mode",
      description: "Selects how passphrases are mangled",
      args: {
        name: "n",
        default: "1",
        suggestions: [
          {
            name: "0",
            description:
              "A plain passphrase (which is not recommended) will be used",
          },
          { name: "1", description: "Adds a salt to the passphrase" },
          // 2 is reserved
          {
            name: "3",
            description: "Iterates the whole process a couple of times",
          },
        ],
      },
    },
    {
      name: "--compress-algo",
      description: "Use compress algorithm n",
      args: {
        name: "n",
        default: "2",
        suggestions: [
          {
            name: "1",
            description:
              "Use the old zlib version (RFC1951) which is used by PGP",
          },
          { name: "2", description: "RFC1950 compression" },
        ],
      },
    },
    {
      name: "--disable-cipher-algo",
      description: "Never allow the use of name as cipher algorithm",
      args: { name: "name", generators: getCipherAlgorithms },
    },
    {
      name: "--disable-pubkey-algo",
      description: "Never allow the use of name as public key algorithm",
      args: { name: "name" },
    },
    {
      name: "--throw-keyid",
      description: "Do not put the keyid into encrypted packets",
    },
    {
      name: "--not-dash-escaped",
      description: "Makes signatures usable for patch files",
    },
    { name: "--escape-from-lines", description: 'Handle "<From" in emails' },
    {
      name: "--passphrase-fd",
      description: "Read the passphrase from file descriptor n",
      args: { name: "n", default: "0" },
    },
    {
      name: "--command-fd",
      description:
        "This is a replacement for the depreciated shared-memory IPC mode",
      args: { name: "n", default: "0" },
    },
    {
      name: "--rfc1991",
      description: "Try to be more RFC1991 (PGP 2.x) compliant",
    },
    {
      name: "--openpgp",
      description: "Reset all packet, cipher and digest options to OpenPGP",
    },
    {
      name: "--force-v3-sigs",
      description: "Forces v3 signatures for signatures on data",
    },
    {
      name: "--force-mdc",
      description: "Force encryption with appended manipulation code",
    },
    {
      name: "--allow-non-selfsigned-uid",
      description: "Allow non self-signed user IDs",
    },
    {
      name: "--allow-freeform-uid",
      description: "Disable all checks on the form of the user ID",
    },
    {
      name: "--ignore-time-conflict",
      description: "Makes time checks just a warning",
    },
    {
      name: "--lock-once",
      description: "Do not release the lock until the process terminates",
      exclusiveOn: ["--lock-multiple", "--lock-never"],
    },
    {
      name: "--lock-multiple",
      description: "Release the locks every time one is no longer needed",
      exclusiveOn: ["--lock-once", "--lock-never"],
    },
    {
      name: "--lock-never",
      description: "Disable locking entirely",
      exclusiveOn: ["--lock-once", "--lock-multiple"],
    },
    { name: "--no-random-seed-file", description: "Disable random pool cache" },
    {
      name: "--no-verbose",
      description: "Reset verbose level to 0",
      exclusiveOn: ["--verbose"],
    },
    {
      name: "--no-greeting",
      description: "Suppress the initial copyright message",
    },
    {
      name: "--no-secmem-warning",
      description: 'Suppress the "using insecure memory" warning',
    },
    {
      name: "--no-armor",
      description: "Assume the input data is not in ASCII armored format",
    },
    {
      name: "--no-default-keyring",
      description: "Do not add the keyrings to the list of keyrings",
    },
    {
      name: "--skip-verify",
      description: "Skip the signature verification step",
    },
    {
      name: "--with-colons",
      description: "Print key listings delimited by colons",
    },
    {
      name: "--with-key-data",
      description: "--with-colons with the public key data",
    },
    {
      name: "--with-fingerprint",
      description: "--fingerprint with a different format",
    },
    {
      name: "--fast-list-mode",
      description: "Changes the list commands to work faster",
    },
    { name: "--list-only", description: "Skip the decryption pass" },
    { name: "--no-literal", description: "This is not for normal use" },
    { name: "--set-filesize", description: "This is not for normal use" },
    {
      name: "--emulate-md-encode-bug",
      description: "Enables workaround to check faulty signatures",
    },
    {
      name: "--show-session-key",
      description: "Display the session key used for one message",
    },
    {
      name: "--override-session-key",
      description: "Don't use the public key but the session key string",
      args: { name: "string" },
    },
    {
      name: "--merge-only",
      description: "Don't insert new keys into the keyrings",
    },
    {
      name: "--try-all-secrets",
      description: "Try all secret keys in turn to find the right one",
    },
  ],
  subcommands: [
    { name: ["-s", "--sign"], description: "Make a signature" },
    { name: "--clearsign", description: "Make a clear text signature" },
    { name: ["-b", "--detach-sign"], description: "Make a detached signature" },
    { name: ["-e", "--encrypt"], description: "Encrypt data" },
    {
      name: ["-c", "--symmetric"],
      description: "Encrypt with symmetric cipher only",
    },
    {
      name: "--store",
      description: "Store only (make a simple RFC1991 packet)",
    },
    {
      name: "--decrypt",
      description:
        "Decrypt file (or stdin if no file is specified) and write it to stdout",
      args: {
        name: "file",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "--verify",
      description:
        "Assume that sigfile is a signature and verify it without generating any output",
      args: [
        {
          name: "sigfile",
          isOptional: true,
          template: "filepaths",
        },
        {
          name: "signed-files",
          isOptional: true,
          isVariadic: true,
          template: "filepaths",
        },
      ],
    },
    {
      name: "--verify-files",
      description:
        "Special version of --verify which does not work with detached signatures",
      args: {
        name: "files",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: ["--list-keys", "--list-public-keys"],
      description:
        "List all keys from public keyrings, or just the ones given on the command line",
      args: {
        name: "names",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--list-secret-keys",
      description:
        "List all keys from secret keyrings, or just the ones given on the command line",
      args: {
        name: "names",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--list-sigs",
      description: "Same as --list-keys, but the signatures are listed too",
      args: {
        name: "names",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--check-sigs",
      description: "Same as --list-sigs, but the signatures are verified",
      args: {
        name: "names",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--fingerprint",
      description: "List all keys with their fingerprints",
      args: {
        name: "names",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--list-packets",
      description: "List only the sequence of packets",
    },
    { name: "--gen-key", description: "Generate a new key pair" },
    {
      name: "--edit-key",
      description:
        "Present a menu which enables you to do all key related tasks",
      args: { name: "name" },
    },
    {
      name: "--sign-key",
      description: "Sign a public key with you secret key",
      args: { name: "name" },
    },
    {
      name: "--lsign-key",
      description:
        "Sign a public key with you secret key but mark it as non-exportable",
      args: { name: "name" },
    },
    {
      name: "--trusted-key",
      description:
        "Assume that the specified key is as trustworthy as one of your own secret keys",
      args: { name: "long key ID" },
    },
    {
      name: "--delete-key",
      description: "Remove key from the public keyring",
      args: { name: "name" },
    },
    {
      name: "--delete-secret-key",
      description: "Remove key from the secret and public keyring",
      args: { name: "name" },
    },
    {
      name: "--gen-revoke",
      description: "Generate a revocation certificate for the complete key",
    },
    {
      name: "--export",
      description:
        "Either export all keys from all keyrings or those of the given names",
      args: {
        name: "names",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--send-keys",
      description: "Same as --export but sends the keys to a keyserver",
      args: {
        name: "names",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--export-all",
      description:
        "Same as --export, but also exports keys which are not compatible to OpenPGP",
      args: {
        name: "names",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--export-secret-keys",
      description: "Same as --export, but exports the secret keys",
      args: {
        name: "names",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--export-secret-subkeys",
      description: "Same as --export, but exports the secret subkeys",
      args: {
        name: "names",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--import",
      description: "Import/merge keys. This adds the given keys to the keyring",
      args: {
        name: "files",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "--fast-import",
      description: "--import but does not build the trustdb",
      args: {
        name: "files",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "--recv-keys",
      description:
        "Import the keys with the given key IDs from a HKP keyserver",
      args: {
        name: "key IDs",
        isVariadic: true,
      },
    },
    {
      name: "--export-ownertrust",
      description: "List the ownertrust values in ASCII format",
    },
    {
      name: "--import-ownertrust",
      description:
        "Update the trustdb with the ownertrust values stored in files",
      args: {
        name: "files",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "--print-md",
      description:
        "Print message digest of algorithm ALGO for all given files of stdin",
      args: [
        {
          name: "algo",
          default: "*",
          generators: getDigestAlgorithms,
        },
        {
          name: "files",
          isOptional: true,
          isVariadic: true,
          template: "filepaths",
        },
      ],
    },
    {
      name: "--gen-random",
      description: "Emit COUNT random bytes of the given quality level",
      args: [
        { name: "0|1|2", suggestions: ["0", "1", "2"] },
        {
          name: "files",
          isOptional: true,
          isVariadic: true,
          template: "filepaths",
        },
      ],
    },
    // --gen-prime is barely documented
    {
      name: "--gen-prime",
      description: "Generate prime numbers",
      args: [
        { name: "mode" },
        { name: "bits" },
        {
          name: "qbits",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    { name: "--version", description: "Print version information" },
    { name: "--warranty", description: "Print warranty information" },
    { name: ["-h", "--help"], description: "Print usage information" },
  ],
};

export default completionSpec;
