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

const repeatedOptions: Fig.Option[] = [
  {
    name: "-alias",
    description: "Alias name of the entry to process",
    args: {
      name: "alias",
    },
  },
  {
    name: "-keystore",
    description: "Keystore name",
    args: {
      name: "keystore",
    },
  },
  {
    name: "-storepass",
    description: "Keystore password",
    args: {
      name: "arg",
    },
  },
  {
    name: "-storetype",
    description: "Keystore type",
    args: {
      name: "type",
    },
  },
  {
    name: "-providername",
    description: "Provider name",
    args: {
      name: "name",
    },
  },
  {
    name: "-addprovider",
    description: "Add security provider by name (e.g. SunPKCS11)",
    args: {
      name: "name",
    },
  },
  {
    name: "-providerclass",
    description: "Add security provider by fully-qualified class name",
    args: {
      name: "class",
    },
  },
  {
    name: "-providerarg",
    description: "Configure argument for -addprovider or -providerclass",
    args: {
      name: "arg",
    },
    dependsOn: ["-addprovider", "-providerclass"],
  },
  {
    name: "-providerpath",
    description: "Provider classpath",
    args: {
      name: "list",
    },
  },
  {
    name: "-protected",
    description: "Password through protected mechanism",
  },
];

const completionSpec: Fig.Spec = {
  name: "keytool",
  description: "Key and Certificate Management Tool",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
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
      options: [
        ...commonOptions,
        ...repeatedOptions,
        {
          name: "-sigalg",
          description: "Signature algorithm name",
          args: {
            name: "alg",
          },
        },
        {
          name: "-file",
          description: "Output file name",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "-keypass",
          description: "Key password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-dname",
          description: "Distinguished name",
          args: {
            name: "name",
          },
        },
        {
          name: "-ext",
          description: "X.509 extension",
          args: {
            name: "value",
          },
        },
      ],
    },
    {
      name: "-changealias",
      description: "Changes an entry's alias",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        {
          name: "-destalias",
          description: "Destination alias",
          args: {
            name: "alias",
          },
        },
        {
          name: "-keypass",
          description: "Key password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-cacerts",
          description: "Access the cacerts keystore",
        },
      ],
    },
    {
      name: "-delete",
      description: "Deletes an entry",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        {
          name: "-cacerts",
          description: "Access the cacerts keystore",
        },
      ],
    },
    {
      name: "-exportcert",
      description: "Exports certificate",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        {
          name: "-rfc",
          description: "Output in RFC style",
        },
        {
          name: "-file",
          description: "Output file name",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "-cacerts",
          description: "Access the cacerts keystore",
        },
      ],
    },
    {
      name: "-genkeypair",
      description: "Generate a key pair",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        {
          name: "-keyalg",
          description: "Key algorithm name",
          args: {
            name: "alg",
          },
        },
        {
          name: "-keysize",
          description: "Key bit size",
          args: {
            name: "size",
          },
        },
        {
          name: "-groupname",
          description: "Group name. For example, an Elliptic Curve name",
          args: {
            name: "name",
          },
        },
        {
          name: "-sigalg",
          description: "Signature algorithm name",
          args: {
            name: "alg",
          },
        },
        {
          name: "-destalias",
          description: "Destination alias",
          args: {
            name: "alias",
          },
        },
        {
          name: "-dname",
          description: "Distinguished name",
          args: {
            name: "name",
          },
        },
        {
          name: "-startdate",
          description: "Certificate validity start date/time",
          args: {
            name: "date",
          },
        },
        {
          name: "-ext",
          description: "X.509 extension name",
          args: {
            name: "value",
          },
        },
        {
          name: "-validity",
          description: "Validity number of days",
          args: {
            name: "days",
          },
        },
        {
          name: "-keypass",
          description: "Key password",
          args: {
            name: "arg",
          },
        },
      ],
    },
    {
      name: "-genseckey",
      description: "Generates a secret key",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        {
          name: "-keypass",
          description: "Key password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-keyalg",
          description: "Key algorithm name",
          args: {
            name: "alg",
          },
        },
        {
          name: "-keysize",
          description: "Key bit size",
          args: {
            name: "size",
          },
        },
      ],
    },
    {
      name: "-gencert",
      description: "Generates certificate from a certificate request",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        {
          name: "-rfc",
          description: "Output in RFC style",
        },
        {
          name: "-infile",
          description: "Input file name",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "-outfile",
          description: "Output file name",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "-sigalg",
          description: "Signature algorithm name",
          args: {
            name: "alg",
          },
        },
        {
          name: "-dname",
          description: "Distinguished name",
          args: {
            name: "name",
          },
        },
        {
          name: "-startdate",
          description: "Certificate validity start date/time",
          args: {
            name: "date",
          },
        },
        {
          name: "-ext",
          description: "X.509 extension name",
          args: {
            name: "value",
          },
        },
        {
          name: "-validity",
          description: "Validity number of days",
          args: {
            name: "days",
          },
        },
        {
          name: "-keypass",
          description: "Key password",
          args: {
            name: "arg",
          },
        },
      ],
    },
    {
      name: "-importcert",
      description: "Imports a certificate or a certificate chain",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        {
          name: "-noprompt",
          description: "Do not prompt",
        },
        {
          name: "-trustcacerts",
          description: "Trust certificates from cacerts",
        },
        {
          name: "-file",
          description: "Output file name",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "-keypass",
          description: "Key password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-cacerts",
          description: "Access the cacerts keystore",
        },
      ],
    },
    {
      name: "-importpass",
      description: "Imports a password",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        {
          name: "-keypass",
          description: "Key password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-keyalg",
          description: "Key algorithm name",
          args: {
            name: "alg",
          },
        },
        {
          name: "-keysize",
          description: "Key bit size",
          args: {
            name: "size",
          },
        },
      ],
    },
    {
      name: "-importkeystore",
      description: "Imports one or all entries from another keystore",
      options: [
        ...commonOptions,
        {
          name: "-srckeystore",
          description: "Source keystore name",
          args: {
            name: "keystore",
          },
        },
        {
          name: "-destkeystore",
          description: "Destination keystore name",
          args: {
            name: "keystore",
          },
        },
        {
          name: "-srcstoretype",
          description: "Source keystore type",
          args: {
            name: "type",
          },
        },
        {
          name: "-deststoretype",
          description: "Destination keystore type",
          args: {
            name: "type",
          },
        },
        {
          name: "-srcstorepass",
          description: "Source keystore password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-deststorepass",
          description: "Destination keystore password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-srcprotected",
          description: "Source keystore password protected",
        },
        {
          name: "-destprotected",
          description: "Destination keystore password protected",
        },
        {
          name: "-srcprovidername",
          description: "Source keystore provider name",
          args: {
            name: "name",
          },
        },
        {
          name: "-destprovidername",
          description: "Destination keystore provider name",
          args: {
            name: "name",
          },
        },
        {
          name: "-srcalias",
          description: "Source alias",
          args: {
            name: "alias",
          },
        },
        {
          name: "-destalias",
          description: "Destination alias",
          args: {
            name: "alias",
          },
        },
        {
          name: "-srckeypass",
          description: "Source key password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-destkeypass",
          description: "Destination key password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-noprompt",
          description: "Do not prompt",
        },
        {
          name: "-addprovider",
          description: "Add security provider by name (e.g. SunPKCS11)",
          args: {
            name: "name",
          },
        },
        {
          name: "-providerclass",
          description: "Add security provider by fully-qualified class name",
          args: {
            name: "class",
          },
        },
        {
          name: "-providerarg",
          description: "Configure argument for -addprovider or -providerclass",
          args: {
            name: "arg",
          },
          dependsOn: ["-addprovider", "-providerclass"],
        },
        {
          name: "-providerpath",
          description: "Provider classpath",
          args: {
            name: "list",
          },
        },
      ],
    },
    {
      name: "-keypasswd",
      description: "Changes the key password of an entry",
      options: [
        ...commonOptions,
        // except for -protected
        ...repeatedOptions.filter((opt) => opt.name !== "-protected"),
        {
          name: "-keypass",
          description: "Key password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-new",
          description: "New password",
          args: {
            name: "arg",
          },
        },
      ],
    },
    {
      name: "-list",
      description: "Lists entries in a keystore",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        {
          name: "-rfc",
          description: "Output in RFC style",
        },
        {
          name: "-cacerts",
          description: "Access the cacerts keystore",
        },
      ],
    },
    {
      name: "-printcert",
      description: "Prints the content of a certificate",
      options: [
        ...commonOptions,
        {
          name: "-rfc",
          description: "Output in RFC style",
        },
        {
          name: "-file",
          description: "Input file name",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "-sslserver",
          description: "SSL server host and port",
          args: {
            name: "server:[port]",
          },
        },
        {
          name: "-jarfile",
          description: "Signed jar file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "-printcertreq",
      description: "Prints the content of a certificate request",
      options: [
        ...commonOptions,
        {
          name: "-file",
          description: "Input file name",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "-printcrl",
      description: "Prints the content of a CRL file",
      options: [
        ...commonOptions,
        {
          name: "-file",
          description: "Input file name",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "-storepasswd",
      description: "Changes the store password of a keystore",
      options: [
        ...commonOptions,
        // except for -protected
        ...repeatedOptions.filter((opt) => opt.name !== "-protected"),
        {
          name: "-new",
          description: "New password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-cacerts",
          description: "Access the cacerts keystore",
        },
      ],
    },
  ],
};

export default completionSpec;
