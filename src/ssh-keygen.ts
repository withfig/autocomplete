const capitalBExclusives = [
  "-a",
  "-b",
  "-C",
  "-c",
  "-D",
  "-E",
  "-e",
  "-F",
  "-g",
  "-H",
  "-h",
  "-I",
  "-i",
  "-K",
  "-k",
  "-L",
  "-l",
  "-M",
  "-m",
  "-N",
  "-n",
  "-O",
  "-P",
  "-p",
  "-Q",
  "-q",
  "-R",
  "-r",
  "-s",
  "-t",
  "-u",
  "-V",
  "-v",
  "-w",
  "-Y",
  "-y",
  "-Z",
  "-z",
];
const capitalDExclusives = [
  "-a",
  "-B",
  "-b",
  "-C",
  "-c",
  "-E",
  "-e",
  "-F",
  "-f",
  "-g",
  "-H",
  "-h",
  "-I",
  "-i",
  "-K",
  "-k",
  "-L",
  "-l",
  "-M",
  "-m",
  "-N",
  "-n",
  "-O",
  "-P",
  "-p",
  "-Q",
  "-q",
  "-R",
  "-r",
  "-s",
  "-t",
  "-u",
  "-V",
  "-v",
  "-w",
  "-Y",
  "-y",
  "-Z",
  "-z",
];
const completionSpec: Fig.Spec = {
  name: "ssh-keygen",
  description: "Generates, manages and converts authentication keys for ssh",
  options: [
    {
      name: "-a",
      description:
        "When saving a private key, this option specifies the number of KDF",
      args: {
        name: "rounds",
        description: "Number of rounds being used",
        default: "16",
        isOptional: true,
        suggestions: ["16"],
      },
    },
    {
      name: "-B",
      description:
        "Show the bubblebabble digest of specified private or public key file",
      exclusiveOn: capitalBExclusives,
    },
    {
      name: "-b",
      description: "Specifies the number of bits in the key to create",
      args: {
        name: "bits",
        description: "Number of bits in the key",
        default: "3072",
        suggestions: ["3072"],
      },
    },
    {
      name: "-C",
      description: "Provides a new comment",
      args: {
        name: "comment",
        description: "New comment value",
      },
    },
    {
      name: "-c",
      description:
        "Requests changing the comment in the private and public key files",
    },
    {
      name: "-D",
      description: "Download the public keys provided by the PKCS#11",
      args: {
        name: "pkcs11",
        description: "PKCS#11 public keys",
      },
      exclusiveOn: capitalDExclusives,
    },
    {
      name: "-E",
      description: "Specifies the hash algorithm used",
      args: {
        name: "fingerprint_hash",
        description: "Hash algorithm value",
        default: "sha256",
        suggestions: [{ name: "md5" }, { name: "sha256" }],
      },
    },
    {
      name: "-e",
      description: "Read a OpenSSH key file and print to stdout",
    },
    {
      name: "-F",
      description:
        "Search for the specified hostname (with optional port number)",
      args: {
        name: "hostname",
        description: "Hostname with optional port number",
      },
    },
    {
      name: "-f",
      description: "Specifies the filename of the key file",
      args: {
        name: "filename",
        description: "Filename of the key file",
        template: "filepaths",
      },
    },
    {
      name: "-g",
      description:
        "Use generic DNS format when printing fingerprint resource records",
    },
    {
      name: "-H",
      description: "Hash a known_hosts file",
    },
    {
      name: "-h",
      description: "Create a host certificate instead of a user",
    },
    {
      name: "-I",
      description: "Specify the key identity when signing a public key",
      args: {
        name: "certificate_identity",
        description: "Key identity value",
        template: "filepaths",
      },
    },
    {
      name: "-i",
      description: "Read an unencrypted private (or public) key file",
    },
    {
      name: "-K",
      description: "Download resident keys from a FIDO	authenticator",
    },
    {
      name: "-k",
      description: "Generate a	KRL file",
    },
    {
      name: "-L",
      description: "Generate a	KRL file",
    },
    {
      name: "-l",
      description: "Show fingerprint of specified public key file",
    },
    {
      name: "-M",
      description: "Use for Moduli generation",
      args: {
        name: "command",
        description: "Use generate or screen",
        suggestions: [{ name: "generate" }, { name: "screen" }],
      },
    },
    {
      name: "-m",
      description: "Specify a key format for key generation",
      args: {
        name: "key_format",
        description: "Key format for key generation",
      },
    },
    {
      name: "-N",
      description: "Provides the new passphrase",
      args: {
        name: "new_passphrase",
        description: "New passphrase value",
      },
    },
    {
      name: "-n",
      description:
        "Specify one or more principals (user or host names) to be included in a certificate when signing a key",
      args: {
        name: "principals",
        description:
          "Principals to be included in a certificate when signing a key",
      },
    },
    {
      name: "-O",
      description: "Specify a key/value option",
      isRepeatable: true,
      args: {
        name: "option",
        description: "Value for option",
      },
    },

    {
      name: "-P",
      description: "Provides the (old) passphrase",
      args: {
        name: "passphrase",
        description: "(Old) passphrase value",
      },
    },
    {
      name: "-p",
      description:
        "Requests changing the passphrase of a private key file instead of creating a new private key",
    },
    {
      name: "-Q",
      description: "Test whether keys have been revoked in a KRL",
    },
    {
      name: "-q",
      description: "Silence ssh-keygen",
    },
    {
      name: "-R",
      description: "Removes all keys belonging to hostname",
      args: {
        name: "hostname",
        description: "Hostname to remove keys from a known_hosts file",
      },
    },
    {
      name: "-r",
      description:
        "Print the SSHFP fingerprint resource record named hostname for the specified public key file",
      args: {
        name: "hostname",
        description: "Hostname for the specified public key file",
      },
    },
    {
      name: "-s",
      description: "Certify (sign) a public key using the specified CA	key",
      args: {
        name: "ca_key",
        description: "Hostname for the specified public key file",
      },
    },
    {
      name: "-t",
      description: "Specifies the type of key to create",
      args: {
        name: "command",
        suggestions: [
          { name: "dsa" },
          { name: "ecdsa-sk" },
          { name: "ed25519" },
          { name: "ed25519-sk" },
          { name: "rsa" },
        ],
      },
    },
    {
      name: "-u",
      description: "Update a KRL",
    },
    {
      name: "-V",
      description: "Specify a validity interval when signing a certificate",
      args: {
        name: "validity_interval",
        description: "Value for validity interval",
      },
    },
    {
      name: "-w",
      description:
        "Specifies a path to a library that will be used when creating FIDO authenticator-hosted keys",
      args: {
        name: "provider",
        description:
          "Path to library to be used when creating FIDO authenticator-hosted keys",
      },
    },
    {
      name: "-Y",
      description:
        "Multiple functions: find principals, match principals, check novalidate, sign, verify",
      args: {
        name: "command",
        suggestions: [
          {
            name: "find-principals",
            description:
              "Find the principal(s) associated with the public key of a signature",
          },
          {
            name: "check-novalidate",
            description:
              "Checks that a signature generated using ssh-keygen -Y sign has a valid structure",
          },
          {
            name: "sign",
            description:
              "Cryptographically sign a file or some data using a SSH key",
          },
          {
            name: "verify",
            description:
              "Request to verify a signature generated using ssh-keygen -Y",
          },
        ],
        isVariadic: true,
      },
    },
    {
      name: "-y",
      description:
        "Read a private OpenSSH format file and print an OpenSSH public key to stdout",
    },
    {
      name: "-Z",
      description:
        "Specifies the cipher to use for encryption when writing an OpenSSH-format private key file",
      args: {
        name: "cipher",
        description: "Cipher to use for encryption",
        default: "aes256-ctr",
      },
    },
    {
      name: "-z",
      description:
        "Specifies a serial number to be embedded in the certificate to distinguish this certificate from others from the same CA",
      args: {
        name: "serial_number",
        description: "Serial number to distinguish this certificate",
        default: "aes256-ctr",
      },
    },
  ],

  // Only uncomment if ssh-keygen takes an argument
  // args: {}
};
export default completionSpec;
