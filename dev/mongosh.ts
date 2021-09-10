// https://docs.mongodb.com/mongodb-shell/reference/options/

const completionSpec: Fig.Spec = {
  name: "mongosh",
  description: "The stupid content tracker",
  args: {
    name: "Connection String",
    isOptional: true,
    default: "mongodb://localhost:27017",
    suggestions: [
      {
        name: "mongodb://localhost:27017",
        description:
          "Default Connection String; Equivalant to running mongosh without any commands",
      },
      {
        name: "mongodb+srv://cluster0.example.mongodb.net/sample_geospatial",
        description: "Atlas Connection String Example",
      },
    ],
  },

  options: [
    {
      name: ["-v", "--version"],
      description: "View your current git version",
    },
    {
      name: "--shell",
      description:
        "Enables the shell interface. If you invoke the mongosh command and specify a JavaScript file as an argument, or use --eval to specify JavaScript on the command line, the --shell option provides the user with a shell prompt after the file finishes executing",
    },
    {
      name: "--eval",
      description:
        "<javascript>: Evaluates a JavaScript expression that is specified as an argument. mongosh does not load its own environment when evaluating code. As a result many options of the shell environment are not available. The result of evaluating a JavaScript argument is printed to your command line",
    },
    {
      name: ["--help", "-h"],
      description:
        "Returns information on the options and use of the MongoDB Shell",
    },
    {
      name: "--authenticationDatabase",
      description:
        "Specifies the authentication database where the specified --username has been created. See Authentication Database",
    },
    {
      name: "--gssapiHostName",
      description:
        "Specify the hostname of a service using GSSAPI/Kerberos. Only required if the hostname of a machine does not match the hostname resolved by DNS",
    },
    {
      name: "--gssapiServiceName",
      description:
        "Specify the name of the service using GSSAPI/Kerberos. Only required if the service does not use the default name of mongodb",
    },
    {
      name: ["--password", "-p"],
      description:
        "Specifies a password with which to authenticate to a MongoDB database that uses authentication. Use in conjunction with the --username and --authenticationDatabase options",
    },
    {
      name: ["--username", "-u"],
      description:
        "Specifies a username with which to authenticate to a MongoDB database that uses authentication. Use in conjunction with the --password and --authenticationDatabase options",
    },
    {
      name: "--retryWrites",
      description:
        "Enables retryable writes as the default for sessions in the MongoDB Shell",
    },
    {
      name: "--authenticationMechanism",
      description:
        "Specifies the authentication mechanism the MongoDB Shell uses to authenticate to the mongod or mongos",
      args: {
        name: "authentication mechanism",
        suggestions: [
          {
            name: "SCRAM-SHA-1",
            description:
              "RFC 5802 standard Salted Challenge Response Authentication Mechanism using the SHA-1 hash function",
          },
          {
            name: "SCRAM-SHA-256",
            description:
              "RFC 7677 standard Salted Challenge Response Authentication Mechanism using the SHA-256 hash function",
          },
          {
            name: "MONGODB-X509",
            description: "MongoDB TLS SSL certificate authentication",
          },
          {
            name: "GSSAPI (Kerberos)",
            description:
              "External authentication using Kerberos. This mechanism is available only in MongoDB Enterprise",
          },
          {
            name: "PLAIN (LDAP SASL)",
            description:
              "External authentication using LDAP. You can also use PLAIN for authenticating in-database users. PLAIN transmits passwords in plain text. This mechanism is available only in MongoDB Enterprise",
          },
        ],
      },
    },
    {
      name: "--nodb",
      description:
        "<javascript>: Evaluates a JavaScript expression that is specified as an argument. mongosh does not load its own environment when evaluating code. As a result many options of the shell environment are not available. The result of evaluating a JavaScript argument is printed to your command line",
    },
    {
      name: "--norc",
      description:
        "Prevents the shell from sourcing and evaluating ~/.mongoshrc.js on startup",
    },
    {
      name: "--quiet",
      description:
        "Skips all messages during startup (such as welcome messages and startup warnings) and goes directly to the prompt",
    },
    {
      name: "--verbose",
      description:
        "Increases the verbosity of the shell output during the connection process and when running commands",
    },
    {
      name: "--port",
      description:
        "Specifies the port where the mongod or mongos instance is listening. If --port is not specified, the MongoDB Shell attempts to connect to port 27017",
    },
    {
      name: "--tls",
      description:
        "Enables connection to a mongod or mongos that has TLS SSL support enabled",
    },
    {
      name: "--tlsCertificateKeyFile",
      description:
        "Enables connection to a mongod or mongos that has TLS SSL support enabled",
      args: {
        name: "filePath",
        generators: {
          template: "filepaths",
        },
      },
    },
  ],
};

export default completionSpec;
