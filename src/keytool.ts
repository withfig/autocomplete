const commonOptions: Fig.Option[] = [
  {
    name: ["-h", "-?", "--help", "-help"],
    description: "Show help message",
  },
  {
    name: "-v",
    description: "Verbose output",
  },
];

const completionSpec: Fig.Spec = {
  name: "keytool",
  description: "Key and Certificate Management Tool",
  options: [
    {
      name: ["-h", "-?", "--help", "-help"],
      description: "Show help message",
    },
    {
      name: "-conf",
      description: "Specify pre-configured options file",
      args: {
        name: "url",
      },
    },
  ],
  subcommands: [
    {
      name: "-certreq",
      description: "Generates a certificate request",
      options: [...commonOptions],
    },
    {
      name: "-changealias",
      description: "Changes an entry's alias",
      options: [...commonOptions],
    },
    {
      name: "-delete",
      description: "Deletes an entry",
      options: [...commonOptions],
    },
    {
      name: "-exportcert",
      description: "Exports certificate",
      options: [...commonOptions],
    },
    {
      name: "-genkeypair",
      description: "Generate a key pair",
      options: [...commonOptions],
    },
    {
      name: "-genseckey",
      description: "Generates a secret key",
      options: [...commonOptions],
    },
    {
      name: "-gencert",
      description: "Generates certificate from a certificate request",
      options: [...commonOptions],
    },
    {
      name: "-importcert",
      description: "Imports a certificate or a certificate chain",
      options: [...commonOptions],
    },
    {
      name: "-importpass",
      description: "Imports a password",
      options: [...commonOptions],
    },
    {
      name: "-importkeystore",
      description: "Imports one or all entries from another keystore",
      options: [...commonOptions],
    },
    {
      name: "-keypasswd",
      description: "Changes the key password of an entry",
      options: [...commonOptions],
    },
    {
      name: "-list",
      description: "Lists entries in a keystore",
      options: [...commonOptions],
    },
    {
      name: "-printcert",
      description: "Prints the content of a certificate",
      options: [...commonOptions],
    },
    {
      name: "-printcertreq",
      description: "Prints the content of a certificate request",
      options: [...commonOptions],
    },
    {
      name: "-printcrl",
      description: "Prints the content of a CRL file",
      options: [...commonOptions],
    },
    {
      name: "-storepasswd",
      description: "Changes the store password of a keystore",
      options: [...commonOptions],
    },
  ],
};

export default completionSpec;
