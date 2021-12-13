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
    },
    {
      name: "-changealias",
      description: "Changes an entry's alias",
    },
    {
      name: "-delete",
      description: "Deletes an entry",
    },
    {
      name: "-exportcert",
      description: "Exports certificate",
    },
    {
      name: "-genkeypair",
      description: "Generate a key pair",
    },
    {
      name: "-genseckey",
      description: "Generates a secret key",
    },
    {
      name: "-gencert",
      description: "Generates certificate from a certificate request",
    },
    {
      name: "-importcert",
      description: "Imports a certificate or a certificate chain",
    },
    {
      name: "-importpass",
      description: "Imports a password",
    },
    {
      name: "-importkeystore",
      description: "Imports one or all entries from another keystore",
    },
    {
      name: "-keypasswd",
      description: "Changes the key password of an entry",
    },
    {
      name: "-list",
      description: "Lists entries in a keystore",
    },
    {
      name: "-printcert",
      description: "Prints the content of a certificate",
    },
    {
      name: "-printcertreq",
      description: "Prints the content of a certificate request",
    },
    {
      name: "-printcrl",
      description: "Prints the content of a CRL file",
    },
    {
      name: "-storepasswd",
      description: "Changes the store password of a keystore",
    },
  ],
};

export default completionSpec;
