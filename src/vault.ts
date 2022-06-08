const vaultCommonOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Display help",
    priority: 41,
  },
];

const vaultHTTPOptions: Fig.Option[] = [
  {
    name: "-address",
    description:
      "Address of the Vault server. The default is https://127.0.0.1:8200. This can also be specified via the VAULT_ADDR environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-agent-address",
    description:
      "Address of the Agent. This can also be specified via the VAULT_AGENT_ADDR environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-ca-cert",
    description:
      "Path on the local disk to a single PEM-encoded CA certificate to verify the Vault server's SSL certificate. This takes precedence over -ca-path. This can also be specified via the VAULT_CACERT environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-ca-path",
    description:
      "Path on the local disk to a directory of PEM-encoded CA certificates to verify the Vault server's SSL certificate. This can also be specified via the VAULT_CAPATH environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-client-cert",
    description:
      "Path on the local disk to a single PEM-encoded CA certificate to use for TLS authentication to the Vault server. If this flag is specified, -client-key is also required. This can also be specified via the VAULT_CLIENT_CERT environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-client-key",
    description:
      "Path on the local disk to a single PEM-encoded private key matching the client certificate from -client-cert. This can also be specified via the VAULT_CLIENT_KEY environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-header-key",
    description:
      "Key-value pair provided as key=value to provide http header added to any request done by the CLI.Trying to add headers starting with 'X-Vault-' is forbidden and will make the command fail This can be specified multiple times",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-mfa",
    description:
      "Supply MFA credentials as part of X-Vault-MFA header. This can also be specified via the VAULT_MFA environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-namespace",
    description:
      "The namespace to use for the command. Setting this is not necessary but allows using relative paths. -ns can be used as shortcut. The default is (not set). This can also be specified via the VAULT_NAMESPACE environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-non-interactive",
    description:
      "When set true, prevents asking the user for input via the terminal. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-output-curl-string",
    description:
      "Instead of executing the request, print an equivalent cURL command string and exit. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-policy-override",
    description:
      "Override a Sentinel policy that has a soft-mandatory enforcement_level specified The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-tls-server-name",
    description:
      "Name to use as the SNI host when connecting to the Vault server via TLS.  This can also be specified via the VAULT_TLS_SERVER_NAME environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-tls-skip-verify",
    description:
      "Disable verification of TLS certificates. Using this option is highly discouraged as it decreases the security of data transmissions to and from the Vault server. The default is false. This can also be specified via the VAULT_SKIP_VERIFY environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-unlock-key",
    description: "Key to unlock a namespace API lock. The default is (not set)",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
  {
    name: "-wrap-ttl",
    description:
      "Wraps the response in a cubbyhole token with the requested TTL. The response is available via the 'vault unwrap' command. The TTL is specified as a numeric string with suffix like '30s' or '5m'. This can also be specified via the VAULT_WRAP_TTL environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 40,
  },
];

const vaultOutputFieldOptions: Fig.Option[] = [
  {
    name: "-field",
    description:
      "Print only the field with the given name. Specifying this option will take precedence over other formatting directives. The result will not have a trailing newline making it ideal for piping to other processes",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 39,
  },
];

const vaultOutputFormatOptions: Fig.Option[] = [
  {
    name: "-format",
    description:
      "Print the output in the given format. Valid formats are 'table', 'json', 'yaml', or 'pretty'. The default is table. This can also be specified via the VAULT_FORMAT environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["table", "json", "yaml", "pretty"],
      default: "table",
    },
    priority: 39,
  },
];

const vaultWriteOptions: Fig.Option[] = [
  {
    name: ["-force", "-f"],
    description:
      "Allow the operation to continue with no key=value pairs. This allows writing to keys that do not need or expect data. This is aliased as '-f'. The default is false",
    priority: 38,
  },
];

const vaultLoginOptions: Fig.Option[] = [
  {
    name: "-method",
    description:
      "Type of authentication to use such as 'userpass' or 'ldap'. Note this corresponds to the TYPE, not the enabled path. Use -path to specify the path where the authentication is enabled. The default is token",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["userpass", "ldap", "token"],
      default: "token",
    },
    priority: 38,
  },
  {
    name: "-no-print",
    description:
      "Do not display the token. The token will be still be stored to the configured token helper. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
  {
    name: "-no-store",
    description:
      "Do not persist the token to the token helper (usually the local filesystem) after authentication for use in future requests. The token will only be displayed in the command output. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
  {
    name: "-path",
    description:
      "Remote path in Vault where the auth method is enabled. This defaults to the TYPE of method (e.g. userpass -> userpass/)",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["userpass/"],
      default: "userpass/",
    },
    priority: 38,
  },
  {
    name: "-token-only",
    description:
      "Output only the token with no verification. This flag is a shortcut for '-field=token -no-store'. Setting those flags to other values will have no affect. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
];

const vaultAgentOptions: Fig.Option[] = [
  {
    name: "-config",
    description:
      "Path to a configuration file. This configuration file should contain only agent directives",
    requiresSeparator: true,
    args: {
      name: "string",
      template: "filepaths",
    },
    priority: 38,
  },
  {
    name: "-exit-after-auth",
    description:
      "If set to true, the agent will exit with code 0 after a single successful auth, where success means that a token was retrieved and all sinks successfully wrote it The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
  {
    name: "-log-level",
    description:
      "Log verbosity level. Supported values (in order of detail) are 'trace', 'debug', 'info', 'warn', and 'err'. The default is info. This can also be specified via the VAULT_LOG_LEVEL environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["trace", "debug", "info", "warn", "err"],
      default: "info",
    },
    priority: 38,
  },
];

const vaultServerOptions: Fig.Option[] = [
  {
    name: "-config",
    description:
      "Path to a configuration file or directory of configuration files. This flag can be specified multiple times to load multiple configurations.  If the path is a directory, all files which end in .hcl or .json are loaded",
    requiresSeparator: true,
    args: {
      name: "string",
      template: "filepaths",
    },
    priority: 38,
  },
  {
    name: "-exit-on-core-shutdown",
    description:
      "Exit the vault server if the vault core is shutdown. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
  {
    name: "-log-format",
    description:
      "Log format. Supported values are 'standard' and 'json'. The default is (not set)",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["standard", "json"],
    },
    priority: 38,
  },
  {
    name: "-log-level",
    description:
      "Log verbosity level. Supported values (in order of detail) are 'trace', 'debug', 'info', 'warn', and 'err'. The default is info. This can also be specified via the VAULT_LOG_LEVEL environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["trace", "debug", "info", "warn", "err"],
      default: "info",
    },
    priority: 38,
  },
  {
    name: "-recovery",
    description:
      "Enable recovery mode. In this mode, Vault is used to perform recovery actions.Using a recovery operation token, 'sys/raw' API can be used to manipulate the storage. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
];

const vaultDevOptions: Fig.Option[] = [
  {
    name: "-dev",
    description:
      "Enable development mode. In this mode, Vault runs in-memory and starts unsealed. As the name implies, do not run 'dev' mode in production. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
  {
    name: "-dev-listen-address",
    description:
      "Address to bind to in 'dev' mode. The default is 127.0.0.1:8200. This can also be specified via the VAULT_DEV_LISTEN_ADDRESS environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["127.0.0.1:8200"],
      default: "127.0.0.1:8200",
    },
    priority: 38,
  },
  {
    name: "-dev-no-store-token",
    description:
      "Do not persist the dev root token to the token helper (usually the local filesystem) for use in future requests. The token will only be displayed in the command output. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
  {
    name: "-dev-root-token-id",
    description:
      "Initial root token. This only applies when running in 'dev' mode.  This can also be specified via the VAULT_DEV_ROOT_TOKEN_ID environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 38,
  },
];

const vaultDebugOptions: Fig.Option[] = [
  {
    name: "-compress",
    description:
      "Toggles whether to compress output package The default is true",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["true", "true"],
      default: "true",
    },
    priority: 38,
  },
  {
    name: "-duration",
    description: "Duration to run the command. The default is 2m0s",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["2m0s"],
      default: "2m0s",
    },
    priority: 38,
  },
  {
    name: "-interval",
    description:
      "The polling interval at which to collect profiling data and server state. The default is 30s",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["30s"],
      default: "30s",
    },
    priority: 38,
  },
  {
    name: "-metrics-interval",
    description:
      "The polling interval at which to collect metrics data. The default is 10s",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["10s"],
      default: "10s",
    },
    priority: 38,
  },
  {
    name: "-output",
    description: "Specifies the output path for the debug package",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 38,
  },
  {
    name: "-target",
    description:
      "Target to capture, defaulting to all if none specified. This can be specified multiple times to capture multiple targets",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: [
        "config",
        "host",
        "metrics",
        "pprof",
        "replication-status",
        "server-stauts",
        "log",
      ],
    },
    priority: 38,
  },
];

const vaultMonitorOptions: Fig.Option[] = [
  {
    name: "-log-level",
    description:
      "If passed, the log level to monitor logs. Supported values(in order of detail) are 'trace', 'debug', 'info', 'warn' and 'error'. These are not case sensitive. The default is info",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["info", "trace", "debug", "warn", "error"],
      default: "info",
    },
    priority: 38,
  },
];

const vaultAuditEnableOptions: Fig.Option[] = [
  {
    name: "-description",
    description:
      "Human-friendly description for the purpose of this audit device",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 38,
  },
  {
    name: "-local",
    description:
      "Mark the audit device as a local-only device. Local devices are not replicated or removed by replication. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
  {
    name: "-path",
    description:
      "Place where the audit device will be accessible. This must be unique across all audit devices. This defaults to the 'type' of the audit device",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 38,
  },
];

const vaultVersionOptions: Fig.Option[] = [
  {
    name: "-versions",
    description: "Specifies the version numbers",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
];

const vaultKvMetadataPatchAndPutOptions: Fig.Option[] = [
  {
    name: "-cas-required",
    description:
      "If true the key will require the cas parameter to be set on all write requests. If false, the backend’s configuration will be used",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 38,
  },
  {
    name: "-custom-metadata",
    description:
      "Specifies arbitrary version-agnostic key=value metadata meant to describe a secret. This can be specified multiple times to add multiple pieces of metadata",
    requiresSeparator: true,
    args: {
      name: "key=value",
    },
    priority: 38,
  },
  {
    name: "-delete-version-after",
    description:
      "Specifies the length of time before a version is deleted. If not set, the backend's configured delete-version-after is used. Cannot be greater than the backend's delete-version-after. The delete-version-after is specified as a numeric string with a suffix like '30s' or '3h25m19s'. The default is -1ns",
    requiresSeparator: true,
    args: {
      name: "duration",
      suggestions: ["30s", "3h25m19s"],
      default: "-1ns",
    },
    priority: 38,
  },
  {
    name: "-max-versions",
    description:
      "The number of versions to keep. If not set, the backend’s configured max version is used. The default is -1",
    requiresSeparator: true,
    args: {
      name: "duration",
      suggestions: ["-1"],
      default: "-1",
    },
    priority: 38,
  },
];

const vaultKvPatchOptions: Fig.Option[] = [
  {
    name: "-cas",
    description:
      "Specifies to use a Check-And-Set operation. If set to 0 or not set, the patch will be allowed. If the index is non-zero the patch will only be allowed if the key’s current version matches the version specified in the cas parameter",
    requiresSeparator: true,
    args: {
      name: "int",
      suggestions: ["-1", "0", "1"],
      default: "-1",
    },
    priority: 38,
  },
  {
    name: "-method",
    description:
      "Specifies which method of patching to use. If set to 'patch', then an HTTP PATCH request will be issued. If set to 'rw', then a read will be performed, then a local update, followed by a remote update",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["patch", "rw"],
    },
    priority: 38,
  },
];

const vaultKvPutOptions: Fig.Option[] = [
  {
    name: "-cas",
    description:
      "Specifies to use a Check-And-Set operation. If set to 0 or not set, the patch will be allowed. If the index is non-zero the patch will only be allowed if the key’s current version matches the version specified in the cas parameter",
    requiresSeparator: true,
    args: {
      name: "int",
      suggestions: ["-1", "0", "1"],
      default: "-1",
    },
    priority: 38,
  },
];

const vaultLeaseRenewOptions: Fig.Option[] = [
  {
    name: "-increment",
    description:
      "Request a specific increment in seconds. Vault is not required to honor this request",
    requiresSeparator: true,
    args: {
      name: "duration",
    },
    priority: 38,
  },
];

const vaultLeaseRevokeOptions: Fig.Option[] = [
  {
    name: "-force",
    description:
      "Delete the lease from Vault even if the secret engine revocation fails. This is meant for recovery situations where the secret in the target secret engine was manually removed. If this flag is specified, -prefix is also required. This is aliased as '-f'. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
  {
    name: "-prefix",
    description:
      "Treat the ID as a prefix instead of an exact lease ID. This can revoke multiple leases simultaneously. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
  {
    name: "-sync",
    description:
      "Force a synchronous operation; on failure it is up to the client to retry. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
];

const vaultAuditListOptions: Fig.Option[] = [
  {
    name: "-detailed",
    description:
      "Print detailed information such as options and replication status about each auth device. The default is false",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["false", "true"],
      default: "false",
    },
    priority: 38,
  },
];

const vaultOperatorDiagnoseOptions: Fig.Option[] = [
  {
    name: "-config",
    description:
      "Path to a Vault configuration file or directory of configuration files. This flag can be specified multiple times to load multiple configurations. If the path is a directory, all files which end in .hcl or .json are loaded",
    requiresSeparator: true,
    args: {
      name: "string",
      template: "filepaths",
    },
    priority: 38,
  },
  {
    name: "-debug",
    description: "Dump all information collected by Diagnose",
    priority: 38,
  },
  {
    name: "-format",
    description: "The output format",
    requiresSeparator: true,
    args: {
      name: "format",
      suggestions: ["table", "json", "yaml", "pretty"],
      default: "table",
    },
    priority: 38,
  },
  {
    name: "-skip",
    description: "Skip the health checks named as arguments",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["listen", "storage", "autounseal"],
    },
    priority: 38,
  },
];

const vaultOperatorGenerateRootOptions: Fig.Option[] = [
  {
    name: "-cancel",
    description:
      "Reset the root token generation progress. This will discard any submitted unseal keys or configuration. The default is false",
  },
  {
    name: "-decode",
    description:
      "The value to decode; setting this triggers a decode operation. If the value is '-' then read the encoded token from stdin",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["-"],
      default: "-",
    },
    priority: 38,
  },
  {
    name: "-dr-token",
    description:
      "Set this flag to do generate root operations on DR Operational tokens. The default is false",
  },
  {
    name: "-generate-otp",
    description:
      "Generate and print a high-entropy one-time-password (OTP) suitable for use with the '-init' flag. The default is false",
  },
  {
    name: "-init",
    description:
      "Start a root token generation. This can only be done if there is not currently one in progress. The default is false",
  },
  {
    name: "-nonce",
    description:
      "Nonce value provided at initialization. The same nonce value must be provided with each unseal key",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 38,
  },
  {
    name: "-otp",
    description: "OTP code to use with '-decode' or '-init'",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 38,
  },
  {
    name: "-pgp-key",
    description:
      "Path to a file on disk containing a binary or base64-encoded public PGP key. This can also be specified as a Keybase username using the format 'keybase:<username>'. When supplied, the generated root token will be encrypted and base64-encoded with the given public key",
    requiresSeparator: true,
    args: [
      {
        name: "string",
        template: "filepaths",
      },
      {
        name: "keybase:user",
      },
    ],
    priority: 38,
  },
  {
    name: "-recovery-token",
    description:
      "Set this flag to do generate root operations on Recovery Operational tokens. The default is false",
  },
  {
    name: "-status",
    description:
      "Print the status of the current attempt without providing an unseal key. The default is false",
  },
];

const vaultOperatorInitOptions: Fig.Option[] = [
  {
    name: ["-key-shares", "-n"],
    description:
      "Number of key shares to split the generated root key into. This is the number of 'unseal keys' to generate. This is aliased as '-n'. The default is 5",
    requiresSeparator: true,
    args: {
      name: "int",
      suggestions: ["5"],
      default: "5",
    },
  },
  {
    name: ["-key-threshold", "-t"],
    description:
      "Number of key shares required to reconstruct the root key. This must be less than or equal to -key-shares. This is aliased as '-t'. The default is 3",
    requiresSeparator: true,
    args: {
      name: "int",
      suggestions: ["5"],
      default: "5",
    },
  },
  {
    name: "-pgp-keys",
    description:
      "Comma-separated list of paths to files on disk containing public PGP keys OR a comma-separated list of Keybase usernames using the format 'keybase:<username>'. When supplied, the generated unseal keys will be encrypted and base64-encoded in the order specified in this list. The number of entries must match -key-shares, unless -stored-shares are used",
    requiresSeparator: true,
    args: {
      name: "pgp_key",
      suggestions: ["keybase:user1", "/path/to/pgp/key1,/path/to/pgp/key2"],
      template: "filepaths",
    },
  },
  {
    name: "-root-token-pgp-key",
    description:
      "Path to a file on disk containing a binary or base64-encoded public PGP key. This can also be specified as a Keybase username using the format 'keybase:<username>'. When supplied, the generated root token will be encrypted and base64-encoded with the given public key",
    requiresSeparator: true,
    args: {
      name: "pgp_key",
      suggestions: ["keybase:user1", "/path/to/pgp/key"],
      template: "filepaths",
    },
  },
  {
    name: "-status",
    description:
      "Print the current initialization status. An exit code of 0 means the Vault is already initialized. An exit code of 1 means an error occurred.  An exit code of 2 means the Vault is not initialized. The default is false",
  },
  {
    name: "-stored-shares",
    description:
      "DEPRECATED: This flag does nothing. It will be removed in Vault 1.3. The default is -1",
    requiresSeparator: true,
    args: {
      name: "int",
      suggestions: ["-1"],
      default: "-1",
    },
  },
];

const vaultOperatorConsulOptions: Fig.Option[] = [
  {
    name: "-consul-auto",
    description:
      "Perform automatic service discovery using Consul in HA mode. When all nodes in a Vault HA cluster are registered with Consul, enabling this option will trigger automatic service discovery based on the provided -consul-service value. When Consul is Vault's HA backend, this functionality is automatically enabled. Ensure the proper Consul environment variables are set (CONSUL_HTTP_ADDR, etc). When only one Vault server is discovered, it will be initialized automatically. When more than one Vault server is discovered, they will each be output for selection. The default is false",
  },
  {
    name: "-consul-service",
    description:
      "Name of the service in Consul under which the Vault servers are registered. The default is vault",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["vault"],
      default: "vault",
    },
  },
];

const vaultOperatorAutoUnsealOptions: Fig.Option[] = [
  {
    name: "-recovery-pgp-keys",
    description:
      "Behaves like -pgp-keys, but for the recovery key shares. This is only used in Auto Unseal mode",
    requiresSeparator: true,
    args: {
      name: "pgp_key",
      suggestions: ["keybase:user1", "/path/to/pgp/key"],
      template: "filepaths",
    },
  },
  {
    name: "-recovery-shares",
    description:
      "Number of key shares to split the recovery key into. This is only used in auto-unseal mode. The default is 5",
    requiresSeparator: true,
    args: {
      name: "int",
      suggestions: ["5"],
      default: "5",
    },
  },
  {
    name: "-recovery-threshold",
    description:
      "Number of key shares required to reconstruct the recovery key. This is only used in Auto Unseal mode. The default is 3",
    requiresSeparator: true,
    args: {
      name: "int",
      suggestions: ["3"],
      default: "3",
    },
  },
];

const vaultOperatorMigrateOptions: Fig.Option[] = [
  {
    name: "-config",
    description:
      "Path to a configuration file. This configuration file should contain only migrator directives",
    requiresSeparator: true,
    args: {
      name: "string",
      template: "filepaths",
    },
  },
  {
    name: "-reset",
    description:
      "Reset the migration lock. No migration will occur. The default is false",
  },
  {
    name: "-start",
    description: "Only copy keys lexicographically at or after this value",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
];

const vaultOperatorRaftJoinOptions: Fig.Option[] = [
  {
    name: "-auto-join-port",
    description:
      "An optional port used for addresses discovered via auto-join. The default is 8200",
    requiresSeparator: true,
    args: {
      name: "uint",
      suggestions: ["8200"],
      default: "8200",
    },
  },
  {
    name: "-auto-join-scheme",
    description:
      "An optional URI protocol scheme used for addresses discovered via auto-join. The default is https",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["https", "http"],
      default: "https",
    },
  },
  {
    name: "-leader-ca-cert",
    description: "CA cert to use when verifying the Raft leader certificate",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["@/path/to/leader_ca.crt"],
      template: "filepaths",
    },
  },
  {
    name: "-leader-client-cert",
    description: "Client cert to use when authenticating with the Raft leader",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["@/path/to/client.crt"],
      template: "filepaths",
    },
  },
  {
    name: "-leader-client-key",
    description: "Client key to use when authenticating with the Raft leader",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["@/path/to/client.key"],
      template: "filepaths",
    },
  },
  {
    name: "-non-voter",
    description:
      "(Enterprise-only) This flag is used to make the server not participate in the Raft quorum, and have it only receive the data replication stream. This can be used to add read scalability to a cluster in cases where a high volume of reads to servers are needed. The default is false",
  },
  {
    name: "-retry",
    description:
      "Continuously retry joining the Raft cluster upon failures. The default is false",
  },
];

const vaultOperatorRaftPeerOptions: Fig.Option[] = [
  {
    name: "-dr-token",
    description:
      "DR operation token used to authorize this request (if a DR secondary node)",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
];

const vaultOperatorRaftSetConfigOptions: Fig.Option[] = [
  {
    name: "-cleanup-dead-servers",
    description: "Clean up dead servers",
    requiresSeparator: true,
    args: {
      name: "bool",
      suggestions: ["false", "true"],
      default: "false",
    },
  },
  {
    name: "-dead-server-last-contact-threshold",
    description: "Dead server last contact threshold",
    requiresSeparator: true,
    args: {
      name: "duration",
    },
  },
  {
    name: "-last-contact-threshold",
    description: "Last contact threshold",
    requiresSeparator: true,
    args: {
      name: "duration",
    },
  },
  {
    name: "-max-trailing-logs",
    description: "Max trailing logs",
    requiresSeparator: true,
    args: {
      name: "uint",
    },
  },
  {
    name: "-min-quorum",
    description: "Min quorum",
    requiresSeparator: true,
    args: {
      name: "uint",
    },
  },
  {
    name: "-server-stabilization-time",
    description: "Server stabilization time",
    requiresSeparator: true,
    args: {
      name: "duration",
    },
  },
];

const vaultOperatorRekeyOptions: Fig.Option[] = [
  {
    name: "-cancel",
    description:
      "Reset the rekeying progress. This will discard any submitted unseal keys or configuration. The default is false",
  },
  {
    name: "-init",
    description:
      "Initialize the rekeying operation. This can only be done if no rekeying operation is in progress. Customize the new number of key shares and key threshold using the -key-shares and -key-threshold flags. The default is false",
  },
  {
    name: ["-key-shares", "-n"],
    description:
      "Number of key shares to split the generated root key into. This is the number of 'unseal keys' to generate. This is aliased as '-n'. The default is 5",
    requiresSeparator: true,
    args: {
      name: "int",
      suggestions: ["5"],
      default: "5",
    },
  },
  {
    name: ["-key-threshold", "-t"],
    description:
      "Number of key shares required to reconstruct the root key. This must be less than or equal to -key-shares. This is aliased as '-t'. The default is 3",
    requiresSeparator: true,
    args: {
      name: "int",
      suggestions: ["5"],
      default: "5",
    },
  },
  {
    name: "-nonce",
    description:
      "Nonce value provided at initialization. The same nonce value must be provided with each unseal key",
    requiresSeparator: true,
    args: {
      name: "string",
    },
    priority: 38,
  },
  {
    name: "-pgp-keys",
    description:
      "Comma-separated list of paths to files on disk containing public PGP keys OR a comma-separated list of Keybase usernames using the format 'keybase:<username>'. When supplied, the generated unseal keys will be encrypted and base64-encoded in the order specified in this list. The number of entries must match -key-shares, unless -stored-shares are used",
    requiresSeparator: true,
    args: {
      name: "pgp_key",
      suggestions: ["keybase:user1", "/path/to/pgp/key1,/path/to/pgp/key2"],
      template: "filepaths",
    },
  },
  {
    name: "-status",
    description:
      "Print the status of the current attempt without providing an unseal key. The default is false",
    requiresSeparator: true,
  },
  {
    name: "-target",
    description:
      "Target for rekeying. 'recovery' only applies when HSM support is enabled. The default is barrier",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["barrier"],
      default: "barrier",
    },
  },
  {
    name: "-verify",
    description:
      "Indicates that the action (-status, -cancel, or providing a key share) will be affecting verification for the current rekey attempt. The default is false",
    requiresSeparator: true,
  },
  {
    name: "-backup",
    description:
      "Store a backup of the current PGP encrypted unseal keys in Vault's core. The encrypted values can be recovered in the event of failure or discarded after success. See the -backup-delete and -backup-retrieve options for more information. This option only applies when the existing unseal keys were PGP encrypted. The default is false",
    requiresSeparator: true,
  },
  {
    name: "-backup-delete",
    description: "Delete any stored backup unseal keys. The default is false",
    requiresSeparator: true,
  },
  {
    name: "-backup-retries",
    description:
      "Retrieve the backed-up unseal keys. This option is only available if the PGP keys were provided and the backup has not been deleted. The default is false",
    requiresSeparator: true,
  },
];

const vaultOperatorRaftSnaphotRestoreOptions: Fig.Option[] = [
  {
    name: "-force",
    description:
      "This bypasses checks ensuring the Autounseal or shamir keys are consistent with the snapshot data. The default is false",
    requiresSeparator: true,
  },
];

const vaultOperatorUnsealOptions: Fig.Option[] = [
  {
    name: "-migrate",
    description:
      "Indicate that this share is provided with the intent that it is part of a seal migration process. The default is false",
    requiresSeparator: true,
  },
  {
    name: "-reset",
    description:
      "Discard any previously entered keys to the unseal process. The default is false",
    requiresSeparator: true,
  },
];

const vaultOperatorUsageOptions: Fig.Option[] = [
  {
    name: "-end-time",
    description: "End of report period. Defaults to end of last month",
    requiresSeparator: true,
    args: {
      name: "time",
    },
  },
  {
    name: "-start-time",
    description:
      "Start of report period. Defaults to 'default_reporting_period' before end time",
    requiresSeparator: true,
    args: {
      name: "time",
    },
  },
];

const vaultPluginRegisterOptions: Fig.Option[] = [
  {
    name: "-args",
    description:
      "Arguments to pass to the plugin when starting. Separate multiple arguments with a comma",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-command",
    description:
      "Command to spawn the plugin. This defaults to the name of the plugin if unspecified",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-sha256",
    description:
      "SHA256 of the plugin binary. This is required for all plugins",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
];

const vaultPluginReloadOptions: Fig.Option[] = [
  {
    name: "-mounts",
    description:
      "Array or comma-separated string mount paths of the plugin backends to reload",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-plugin",
    description:
      "The name of the plugin to reload, as registered in the plugin catalog",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-scope",
    description:
      "The scope of the reload, omitted for local, 'global', for replicated reloads",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
];

const vaultSecretsEnableOptions: Fig.Option[] = [
  {
    name: "-allowed-managed-keys",
    description:
      "Managed key name(s) that the mount in question is allowed to access.  Note that multiple keys may be specified by providing this option multiple times, each time with 1 key",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-allowed-response-headers",
    description:
      "Comma-separated string or list of response header values that plugins will be allowed to set",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-audit-non-hmac-request-keys",
    description:
      "Comma-separated string or list of keys that will not be HMAC'd by audit devices in the request data object",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-audit-non-hmac-response-keys",
    description:
      "Comma-separated string or list of keys that will not be HMAC'd by audit devices in the response data object",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-default-lease-ttl",
    description:
      "The default lease TTL for this secrets engine. If unspecified, this defaults to the Vault server's globally configured default lease TTL",
    requiresSeparator: true,
    args: {
      name: "duration",
    },
  },
  {
    name: "-description",
    description: "Human-friendly description for the purpose of this engine",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-external-entropy-access",
    description:
      "Enable secrets engine to access Vault's external entropy source. The default is false",
    requiresSeparator: true,
  },
  {
    name: "-force-no-cache",
    description:
      "Force the secrets engine to disable caching. If unspecified, this defaults to the Vault server's globally configured cache settings. This does not affect caching of the underlying encrypted data storage. The default is false",
    requiresSeparator: true,
  },
  {
    name: "-listing-visibility",
    description:
      "Determines the visibility of the mount in the UI-specific listing endpoint",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-local",
    description:
      "Mark the secrets engine as local-only. Local engines are not replicated or removed by replication. The default is false",
    requiresSeparator: true,
  },
  {
    name: "-max-lease-ttl",
    description:
      "The maximum lease TTL for this secrets engine. If unspecified, this defaults to the Vault server's globally configured maximum lease TTL",
    args: {
      name: "duration",
    },
  },
  {
    name: "-options",
    description:
      "Key-value pair provided as key=value for the mount options. This can be specified multiple times",
    requiresSeparator: true,
    args: {
      name: "key=value",
    },
  },
  {
    name: "-passthrough-request-headers",
    description:
      "Comma-separated string or list of request header values that will be sent to the plugins",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-path",
    description:
      "Place where the secrets engine will be accessible. This must be unique cross all secrets engines. This defaults to the 'type' of the secrets engine",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-plugin-name",
    description:
      "Name of the secrets engine plugin. This plugin name must already exist in Vault's plugin catalog",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-seal-wrap",
    description:
      "Enable seal wrapping of critical values in the secrets engine. The default is false",
  },
  {
    name: "-version",
    description:
      "Select the version of the engine to run. Not supported by all engines",
    requiresSeparator: true,
    args: {
      name: "int",
    },
  },
];

const vaultSecretsListOptions: Fig.Option[] = [
  {
    name: "-details",
    description:
      "Print detailed information such as TTLs and replication status about each secrets engine. The default is false",
    requiresSeparator: true,
  },
];

const vaultSshOptions: Fig.Option[] = [
  {
    name: "-mode",
    description: "Name of the authentication mode (ca, dynamic, otp)",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["ca", "dynamic", "otp"],
    },
  },
  {
    name: "-mount-point",
    description: "Mount point to the SSH secrets engine. The default is ssh/",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["ssh/"],
      default: "ssh/",
    },
  },
  {
    name: "-no-exec",
    description:
      "Print the generated credentials, but do not establish a connection. The default is false",
    requiresSeparator: true,
  },
  {
    name: "-role",
    description: "Name of the role to use to generate the key",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-strict-host-key-checking",
    description:
      "Value to use for the SSH configuration option 'StrictHostKeyChecking'. The default is ask. This can also be specified via the VAULT_SSH_STRICT_HOST_KEY_CHECKING environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-user-known-hosts-file",
    description:
      "Value to use for the SSH configuration option 'UserKnownHostsFile'. This can also be specified via the VAULT_SSH_USER_KNOWN_HOSTS_FILE environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["~/.ssh/known_hosts"],
      default: "~/.ssh/known_hosts",
      template: "filepaths",
    },
  },
];

const vaultSshCaOptions: Fig.Option[] = [
  {
    name: "-host-key-hostnames",
    description:
      "List of hostnames to delegate for the CA. The default value allows all domains and IPs. This is specified as a comma-separated list of values. The default is *. This can also be specified via the VAULT_SSH_HOST_KEY_HOSTNAMES environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["*"],
      default: "*",
    },
  },
  {
    name: "-host-key-mount-point",
    description:
      "Mount point to the SSH secrets engine where host keys are signed. When given a value, Vault will generate a custom 'known_hosts' file with delegation to the CA at the provided mount point to verify the SSH connection's host keys against the provided CA. By default, host keys are validated against the user's local 'known_hosts' file. This flag forces strict key host checking and ignores a custom user known hosts file. This can also be specified via the VAULT_SSH_HOST_KEY_MOUNT_POINT environment variable",
    requiresSeparator: true,
    args: {
      name: "string",
      template: "folders",
    },
  },
  {
    name: "-private-key-path",
    description:
      "Path to the SSH private key to use for authentication. This must be the corresponding private key to -public-key-path. The default is ~/.ssh/id_rsa",
    args: {
      name: "string",
      suggestions: ["~/.ssh/id_rsa"],
      default: "~/.ssh/id_rsa",
      template: "filepaths",
    },
  },
  {
    name: "-public-key-path",
    description:
      "Path to the SSH public key to send to Vault for signing. The default is ~/.ssh/id_rsa.pub",
    args: {
      name: "string",
      suggestions: ["~/.ssh/id_rsa.pub"],
      default: "~/.ssh/id_rsa.pub",
      template: "filepaths",
    },
  },
  {
    name: "-ssh-executable",
    description:
      "Path to the SSH executable to use when connecting to the host The default is ssh. This can also be specified via the VAULT_SSH_EXECUTABLE environment variable",
    args: {
      name: "string",
      suggestions: ["ssh", "/usr/bin/ssh"],
      default: "ssh",
      template: "filepaths",
    },
  },
  {
    name: "-valid-principals",
    description:
      "List of valid principal names to include in the generated user certificate. This is specified as a comma-separated list of values",
    args: {
      name: "string",
    },
  },
];

const vaultTokenCreateOptions: Fig.Option[] = [
  {
    name: "-display-name",
    description:
      "Name to associate with this token. This is a non-sensitive value that can be used to help identify created secrets (e.g. prefixes)",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-empty-alias",
    description:
      "Name of the entity alias to associate with during token creation. Only works in combination with -role argument and used entity alias must be listed in allowed_entity_aliases. If this has been specified, the entity will not be inherited from the parent",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-explicit-max-ttl",
    description:
      "Explicit maximum lifetime for the token. Unlike normal TTLs, the maximum TTL is a hard limit and cannot be exceeded. This is specified as a numeric string with suffix like '30s' or '5m'",
    requiresSeparator: true,
    args: {
      name: "duration",
      suggestions: ["30s", "1m", "5m"],
    },
  },
  {
    name: "-id",
    description:
      "Value for the token. By default, this is an auto-generated string. Specifying this value requires sudo permissions",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-metadata",
    description:
      "Arbitrary key=value metadata to associate with the token. This metadata will show in the audit log when the token is used. This can be specified multiple times to add multiple pieces of metadata",
    requiresSeparator: true,
    args: {
      name: "key=value",
    },
  },
  {
    name: "-no-default-policy",
    description:
      "Detach the 'default' policy from the policy set for this token. The default is false",
  },
  {
    name: "-orphan",
    description:
      "Create the token with no parent. This prevents the token from being revoked when the token which created it expires. Setting this value requires root or sudo permissions. The default is false",
    requiresSeparator: true,
  },
  {
    name: "-period",
    description:
      "If specified, every renewal will use the given period. Periodic tokens do not expire (unless -explicit-max-ttl is also provided). Setting this value requires sudo permissions. This is specified as a numeric string with suffix like '30s' or '5m'",
    requiresSeparator: true,
    args: {
      name: "duration",
      suggestions: ["30s", "1m", "5m"],
    },
  },
  {
    name: "-policy",
    description:
      "Name of a policy to associate with this token. This can be specified multiple times to attach multiple policies",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-renewable",
    description:
      "Allow the token to be renewed up to it's maximum TTL. The default is true",
  },
  {
    name: "-role",
    description:
      "Name of the role to create the token against. Specifying -role may override other arguments. The locally authenticated Vault token must have permission for 'auth/token/create/<role>'",
    requiresSeparator: true,
    args: {
      name: "string",
    },
  },
  {
    name: "-ttl",
    description:
      "Initial TTL to associate with the token. Token renewals may be able to extend beyond this value, depending on the configured maximum TTLs. This is specified as a numeric string with suffix like '30s' or '5m'",
    requiresSeparator: true,
    args: {
      name: "duration",
      suggestions: ["30s", "1m", "5m"],
    },
  },
  {
    name: "-type",
    description:
      "The type of token to create. Can be 'service' or 'batch'. The default is service",
    requiresSeparator: true,
    args: {
      name: "string",
      suggestions: ["service", "batch"],
      default: "service",
    },
  },
  {
    name: "-use-limit",
    description:
      "Number of times this token can be used. After the last use, the token is automatically revoked. By default, tokens can be used an unlimited number of times until their expiration",
    requiresSeparator: true,
    args: {
      name: "int",
    },
  },
];

const vaultTokenLookupOptions: Fig.Option[] = [
  {
    name: "-accessor",
    description:
      "Treat the argument as an accessor instead of a token. When this option is selected, the output will NOT include the token. The default is false",
  },
];

const vaultTokenRenewOptions: Fig.Option[] = [
  {
    name: "-accessor",
    description:
      "Treat the argument as an accessor instead of a token. When this option is selected, the output will NOT include the token. The default is false",
  },
  {
    name: ["-increment", "-i"],
    description:
      "Request a specific increment for renewal. This increment may not be honored, for instance in the case of periodic tokens. If not supplied, Vault will use the default TTL. This is specified as a numeric string with suffix like '30s' or '5m'. This is aliased as '-i'",
    requiresSeparator: true,
    args: {
      name: "duration",
      suggestions: ["30s", "1m", "5m"],
    },
  },
];

const vaultTokenRevokeOptions: Fig.Option[] = [
  {
    name: "-accessor",
    description:
      "Treat the argument as an accessor instead of a token. When this option is selected, the output will NOT include the token. The default is false",
  },
  {
    name: "-mode",
    description:
      "Type of revocation to perform. If unspecified, Vault will revoke the token and all of the token's children. If 'orphan', Vault will revoke only the token, leaving the children as orphans. If 'path', tokens created from the given authentication path prefix are deleted along with their children",
    requiresSeparator: true,
    args: {
      name: "duration",
      suggestions: ["orphan", "path"],
    },
  },
  {
    name: "-self",
    description:
      "Perform the revocation on the currently authenticated token. The default is false",
  },
];

const vaultSshArgs: Fig.Arg[] = [
  {
    name: "username@ip",
    description: "Ssh username and destination",
  },
];

const vaultSecretsMoveArgs: Fig.Arg[] = [
  {
    name: "source",
    description: "Secret source engine",
  },
  {
    name: "destination",
    description: "Secret destination engine",
  },
];

const vaultPluginReloadIdArg: Fig.Arg[] = [
  {
    name: "reload_id",
    description: "Reload ID",
  },
];

const vaultPluginTypeArg: Fig.Arg[] = [
  {
    name: "type",
    description: "Plugin type",
    suggestions: ["auth", "database", "secret"],
  },
];

const vaultPluginNameArg: Fig.Arg[] = [
  {
    name: "name",
    description: "Plugin name",
  },
];

const vaultPolicyNameArg: Fig.Arg[] = [
  {
    name: "name",
    description: "Policy name",
  },
];

const vaultPolicyPathArg: Fig.Arg[] = [
  {
    name: "path",
    description: "Policy file",
    template: "filepaths",
  },
];

const vaultPathArg: Fig.Arg[] = [
  {
    name: "PATH",
    description: "Vault secret path",
    suggestions: [
      {
        name: "secret/foo",
      },
    ],
  },
];

const vaultKeyArg: Fig.Arg[] = [
  {
    name: "KEY",
    description: "Vault secret key",
    suggestions: [
      {
        name: "secret",
      },
    ],
  },
];

const vaultIdArg: Fig.Arg[] = [
  {
    name: "ID",
    description: "Vault secret ID",
    suggestions: [
      {
        name: "database/creds/readonly/2f6a614c...",
      },
    ],
  },
];

const vaultDataArg: Fig.Arg[] = [
  {
    name: "DATA",
    description: "K=V or K=@V.json",
    suggestions: ["bar=buz", "bar=@buz.json"],
    isVariadic: true,
  },
];

const vaultTypeArg: Fig.Arg[] = [
  {
    name: "TYPE",
    description: "Device type",
    suggestions: [
      {
        name: "file",
      },
    ],
  },
];

const vaultConfigArg: Fig.Arg[] = [
  {
    name: "CONFIG",
    description: "K=V",
    suggestions: ["file_path=/var/log/audit.log"],
    isVariadic: true,
  },
];

const vaultTokenArg: Fig.Arg[] = [
  {
    name: "TOKEN",
    description: "Vault token",
  },
];

const vaultTokenOrAccessorArg: Fig.Arg[] = [
  {
    name: "TOKEN|ACCESSOR",
    description: "Vault token or accesor",
  },
];

const completionSpec: Fig.Spec = {
  name: "vault",
  description: "Interact with HashiCorp Vault",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
    optionsMustPrecedeArguments: true,
  },
  subcommands: [
    {
      name: "read",
      description: "Reads data from Vault at the given path",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultOutputFieldOptions,
        ...vaultOutputFormatOptions,
      ],
      args: vaultPathArg,
    },
    {
      name: "write",
      description: "Writes data from Vault at the given path",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultOutputFieldOptions,
        ...vaultOutputFormatOptions,
        ...vaultWriteOptions,
      ],
      args: [...vaultPathArg, ...vaultDataArg],
    },
    {
      name: "delete",
      description:
        "Deletes secrets and configuration from Vault at the given path",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultOutputFieldOptions,
        ...vaultOutputFormatOptions,
      ],
      args: vaultPathArg,
    },
    {
      name: "list",
      description: "Lists data from Vault at the given path",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultOutputFormatOptions,
      ],
      args: vaultPathArg,
    },
    {
      name: "login",
      description:
        "Authenticates users or machines to Vault using the provided arguments",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultOutputFieldOptions,
        ...vaultOutputFormatOptions,
        ...vaultLoginOptions,
      ],
      args: vaultPathArg,
    },
    {
      name: "agent",
      description:
        "This command starts a Vault agent that can perform automatic authentication in certain environments",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultAgentOptions,
      ],
    },
    {
      name: "server",
      description:
        "This command starts a Vault server that responds to API requests. By default, Vault will start in a 'sealed' state. The Vault cluster must be initialized before use, usually by the 'vault operator init' command. Each Vault server must also be unsealed using the 'vault operator unseal' command or the API before the server can respond to requests",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultServerOptions,
        ...vaultDevOptions,
      ],
    },
    {
      name: "status",
      description:
        "Prints the current state of Vault including whether it is sealed and if HA mode is enabled. This command prints regardless of whether the Vault is sealed",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultOutputFormatOptions,
      ],
    },
    {
      name: "unwrap",
      description:
        "Unwraps a wrapped secret from Vault by the given token. The result is the same as the 'vault read' operation on the non-wrapped secret. If no token is given, the data in the currently authenticated token is unwrapped",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultOutputFieldOptions,
        ...vaultOutputFormatOptions,
      ],
      args: vaultTokenArg,
    },
    {
      name: "audit",
      description:
        "This command groups subcommands for interacting with Vault's audit devices. Users can list, enable, and disable audit devices",
      subcommands: [
        {
          name: "list",
          description:
            "Lists the enabled audit devices in the Vault server. The output lists the enabled audit devices and the options for those devices",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultAuditListOptions,
          ],
        },
        {
          name: "disable",
          description:
            "Disables an audit device. Once an audit device is disabled, no future audit logs are dispatched to it. The data associated with the audit device is not affected",
          options: [...vaultCommonOptions, ...vaultHTTPOptions],
          args: {
            name: "PATH",
            description: "Disable the audit device enabled at this path",
          },
        },
        {
          name: "enable",
          description: "Enables an audit device at a given path",
          options: [...vaultCommonOptions, ...vaultHTTPOptions],
          args: [...vaultTypeArg, ...vaultConfigArg],
        },
      ],
    },
    {
      name: "debug",
      description:
        "Probes a specific Vault server node for a specified period of time, recording information about the node, its cluster, and its host environment",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultDebugOptions,
      ],
    },
    {
      name: "kv",
      description:
        "This command has subcommands for interacting with Vault's key-value store. Here are some simple examples, and more detailed examples are available in the subcommands or the documentation",
      options: [...vaultCommonOptions],
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes the data for the provided version and path in the key-value store. The versioned data will not be fully removed, but marked as deleted and will no longer be returned in normal get requests",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFieldOptions,
            ...vaultOutputFormatOptions,
            ...vaultVersionOptions,
          ],
          args: vaultPathArg,
        },
        {
          name: "destroy",
          description:
            "Permanently removes the specified versions' data from the key-value store. If no key exists at the path, no action is taken",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultVersionOptions,
          ],
          args: vaultPathArg,
        },
        {
          name: "enable-versioning",
          description:
            "This command turns on versioning for the backend at the provided path",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
          args: vaultKeyArg,
        },
        {
          name: "get",
          description:
            "Retrieves the value from Vault's key-value store at the given key name. If no key exists with that name, an error is returned. If a key exists with that name but has no data, nothing is returned",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
          args: vaultPathArg,
        },
        {
          name: "list",
          description:
            "Lists data from Vault's key-value store at the given path",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFieldOptions,
            ...vaultOutputFormatOptions,
            ...vaultVersionOptions,
          ],
          args: vaultPathArg,
        },
        {
          name: "metadata",
          description:
            "This command has subcommands for interacting with the metadata endpoint in Vault's key-value store. Here are some simple examples, and more detailed examples are available in the subcommands or the documentation",
          options: [...vaultCommonOptions],
          subcommands: [
            {
              name: "delete",
              description:
                "Deletes all versions and metadata for the provided key",
              options: [...vaultCommonOptions, ...vaultHTTPOptions],
              args: vaultPathArg,
            },
            {
              name: "get",
              description:
                "Retrieves the metadata from Vault's key-value store at the given key name. If no key exists with that name, an error is returned",
              options: [
                ...vaultCommonOptions,
                ...vaultHTTPOptions,
                ...vaultOutputFormatOptions,
              ],
              args: vaultKeyArg,
            },
            {
              name: "patch",
              description:
                "This command can be used to create a blank key in the key-value store or to update key configuration for a specified key",
              options: [
                ...vaultCommonOptions,
                ...vaultHTTPOptions,
                ...vaultOutputFormatOptions,
                ...vaultKvMetadataPatchAndPutOptions,
              ],
              args: vaultKeyArg,
            },
            {
              name: "put",
              description:
                "This command can be used to create a blank key in the key-value store or to update key configuration for a specified key",
              options: [
                ...vaultCommonOptions,
                ...vaultHTTPOptions,
                ...vaultOutputFormatOptions,
                ...vaultKvMetadataPatchAndPutOptions,
              ],
              args: vaultKeyArg,
            },
          ],
        },
        {
          name: "patch",
          description:
            "Writes the data to the given path in the key-value store. The data can be of any type",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFieldOptions,
            ...vaultOutputFormatOptions,
            ...vaultKvPatchOptions,
          ],
          args: [...vaultKeyArg, ...vaultDataArg],
        },
        {
          name: "put",
          description:
            "Writes the data to the given path in the key-value store. The data can be of any type",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFieldOptions,
            ...vaultOutputFormatOptions,
            ...vaultKvPutOptions,
          ],
          args: [...vaultKeyArg, ...vaultDataArg],
        },
        {
          name: "rollback",
          description:
            "Restores a given previous version to the current version at the given path. The value is written as a new version; for instance, if the current version is 5 and the rollback version is 2, the data from version 2 will become version 6",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultVersionOptions,
          ],
          args: vaultKeyArg,
        },
        {
          name: "undelete",
          description:
            "Undeletes the data for the provided version and path in the key-value store. This restores the data, allowing it to be returned on get requests",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultVersionOptions,
          ],
          args: vaultKeyArg,
        },
      ],
    },
    {
      name: "lease",
      description:
        "This command groups subcommands for interacting with leases. Users can revoke or renew leases",
      options: [...vaultCommonOptions],
      subcommands: [
        {
          name: "lookup",
          description: "Lookup the lease information of a secret",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
          args: vaultIdArg,
        },
        {
          name: "renew",
          description:
            "Renews the lease on a secret, extending the time that it can be used before it is revoked by Vault",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultLeaseRenewOptions,
          ],
          args: vaultIdArg,
        },
        {
          name: "revoke",
          description:
            "Revokes secrets by their lease ID. This command can revoke a single secret or multiple secrets based on a path-matched prefix",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultLeaseRevokeOptions,
          ],
          args: vaultIdArg,
        },
      ],
    },
    {
      name: "monitor",
      description:
        "Stream log messages of a Vault server. The monitor command lets you listen for log levels that may be filtered out of the server logs. For example, the server may be logging at the INFO level, but with the monitor command you can set -log-level=DEBUG",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultMonitorOptions,
      ],
    },
    {
      name: "namespace",
      description:
        "This command groups subcommands for interacting with Vault namespaces. These subcommands operate in the context of the namespace that the currently logged in token belongs to",
      options: [...vaultCommonOptions],
      subcommands: [
        {
          name: "create",
          description:
            "Create a child namespace. The namespace created will be relative to the namespace provided in either the VAULT_NAMESPACE environment variable or -namespace CLI flag",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFieldOptions,
            ...vaultOutputFormatOptions,
          ],
          args: vaultPathArg,
        },
        {
          name: "delete",
          description:
            "Delete an existing namespace. The namespace deleted will be relative to the namespace provided in either the VAULT_NAMESPACE environment variable or -namespace CLI flag",
          options: [...vaultCommonOptions, ...vaultHTTPOptions],
          args: vaultPathArg,
        },
        {
          name: "list",
          description: "Lists the enabled child namespaces",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
        },
        {
          name: "lock",
          description: "Lock the current namespace, and all descendants",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
          args: vaultPathArg,
        },
        {
          name: "lookup",
          description:
            "Get information about the namespace of the locally authenticated token",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
          args: vaultPathArg,
        },
        {
          name: "unlock",
          description:
            "Unlock the current namespace, and all descendants, with unlock key",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
          args: vaultPathArg,
        },
      ],
    },
    {
      name: "operator",
      description:
        "This command groups subcommands for operators interacting with Vault. Most users will not need to interact with these commands. Here are a few examples of the operator commands",
      options: [...vaultCommonOptions],
      subcommands: [
        {
          name: "diagnose",
          description:
            "This command troubleshoots Vault startup issues, such as TLS configuration or auto-unseal. It should be run using the same environment variables and configuration files as the 'vault server' command, so that startup problems can be accurately reproduced",
          options: [...vaultCommonOptions, ...vaultOperatorDiagnoseOptions],
        },
        {
          name: "generate-root",
          description:
            "Generates a new root token by combining a quorum of share holders. Must provide either '-otp' or '-pgp-key'",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultOperatorGenerateRootOptions,
          ],
        },
        {
          name: "init",
          description:
            "Initializes a Vault server. Initialization is the process by which Vault's storage backend is prepared to receive data. Since Vault servers share the same storage backend in HA mode, you only need to initialize one Vault to initialize the storage backend",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultOperatorInitOptions,
            ...vaultOperatorConsulOptions,
          ],
        },
        {
          name: "key-status",
          description:
            "Provides information about the active encryption key. Specifically, the current key term and the key installation time",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
        },
        {
          name: "members",
          description: "Provides the details of all the nodes in the cluster",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
        },
        {
          name: "migrate",
          description:
            "This command starts a storage backend migration process to copy all data from one backend to another. This operates directly on encrypted data and does not require a Vault server, nor any unsealing",
          options: vaultOperatorMigrateOptions,
        },
        {
          name: "raft",
          description:
            "This command groups subcommands for operators interacting with the Vault raft storage backend. Most users will not need to interact with these commands. Here are a few examples of the raft operator commands",
          subcommands: [
            {
              name: "autopilot",
              description: "Raft auto pilot",
              subcommands: [
                {
                  name: "get-config",
                  description:
                    "Returns the configuration of the autopilot subsystem under integrated storage",
                  options: [
                    ...vaultCommonOptions,
                    ...vaultHTTPOptions,
                    ...vaultOutputFormatOptions,
                  ],
                },
                {
                  name: "set-config",
                  description:
                    "Modify the configuration of the autopilot subsystem under integrated storage",
                  options: [
                    ...vaultCommonOptions,
                    ...vaultHTTPOptions,
                    ...vaultOutputFormatOptions,
                    ...vaultOperatorRaftSetConfigOptions,
                  ],
                },
                {
                  name: "state",
                  description:
                    "Displays the state of the raft cluster under integrated storage as seen by autopilot",
                  options: [
                    ...vaultCommonOptions,
                    ...vaultHTTPOptions,
                    ...vaultOutputFormatOptions,
                  ],
                },
              ],
            },
            {
              name: "join",
              description: "Joins a node to the Raft cluster",
              options: [
                ...vaultCommonOptions,
                ...vaultHTTPOptions,
                ...vaultOutputFormatOptions,
                ...vaultOperatorRaftJoinOptions,
              ],
              args: {
                name: "leader-api-addr|auto-join-configuration",
                suggestions: [
                  "http://127.0.0.2:8200",
                  "provider=aws region=eu-west-1 ...",
                ],
              },
            },
            {
              name: "list-peers",
              description: "Returns the Raft peer set",
              options: [
                ...vaultCommonOptions,
                ...vaultHTTPOptions,
                ...vaultOutputFormatOptions,
                ...vaultOperatorRaftPeerOptions,
              ],
            },
            {
              name: "remove-peer",
              description: "Removes a node from the Raft cluster",
              options: [
                ...vaultCommonOptions,
                ...vaultHTTPOptions,
                ...vaultOutputFormatOptions,
                ...vaultOperatorRaftPeerOptions,
              ],
              args: {
                name: "server_id",
              },
            },
            {
              name: "snapshot",
              description: "Restores and saves snapshots from the Raft cluster",
              subcommands: [
                {
                  name: "restore",
                  description:
                    "Installs the provided snapshot, returning the cluster to the state defined in it",
                  options: [
                    ...vaultCommonOptions,
                    ...vaultHTTPOptions,
                    ...vaultOutputFormatOptions,
                    ...vaultOperatorRaftSnaphotRestoreOptions,
                  ],
                  args: {
                    name: "snapshot_file",
                    description: "Save snapshot to this file",
                    template: "filepaths",
                  },
                },
                {
                  name: "save",
                  description:
                    "Saves a snapshot of the current state of the Raft cluster into a file",
                  options: [
                    ...vaultCommonOptions,
                    ...vaultHTTPOptions,
                    ...vaultOutputFormatOptions,
                  ],
                  args: {
                    name: "snapshot_file",
                    description: "Restore snapshot from this file",
                    template: "filepaths",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "rekey",
          description:
            "Generates a new set of unseal keys. This can optionally change the total number of key shares or the required threshold of those key shares to reconstruct the root key. This operation is zero downtime, but it requires the Vault is unsealed and a quorum of existing unseal keys are provided",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultOperatorRekeyOptions,
          ],
          args: {
            name: "key",
            description:
              "An unseal key may be provided directly on the command line as an argument to the command. If key is specified as '-', the command will read from stdin. If a TTY is available, the command will prompt for text",
            suggestions: ["-"],
            default: "-",
          },
        },
        {
          name: "rotate",
          description:
            "Rotates the underlying encryption key which is used to secure data written to the storage backend. This installs a new key in the key ring. This new key is used to encrypted new data, while older keys in the ring are used to decrypt older data",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
        },
        {
          name: "seal",
          description:
            "Seals the Vault server. Sealing tells the Vault server to stop responding to any operations until it is unsealed. When sealed, the Vault server discards its in-memory root key to unlock the data, so it is physically blocked from responding to operations unsealed",
          options: [...vaultCommonOptions, ...vaultHTTPOptions],
        },
        {
          name: "step-down",
          description:
            "Forces the Vault server at the given address to step down from active duty.  While the affected node will have a delay before attempting to acquire the leader lock again, if no other Vault nodes acquire the lock beforehand, it is possible for the same node to re-acquire the lock and become active again",
          options: [...vaultCommonOptions, ...vaultHTTPOptions],
        },
        {
          name: "unseal",
          description:
            "Provide a portion of the root key to unseal a Vault server. Vault starts in a sealed state. It cannot perform operations until it is unsealed. This command accepts a portion of the root key (an 'unseal key')",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultOperatorUnsealOptions,
          ],
          args: {
            name: "key",
            description:
              "The unseal key can be supplied as an argument to the command, but this is not recommended as the unseal key will be available in your history",
            isOptional: true,
          },
        },
        {
          name: "usage",
          description:
            "List the client counts for the default reporting period",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultOperatorUsageOptions,
          ],
        },
      ],
    },
    {
      name: "path-help",
      description:
        "Retrieves API help for paths. All endpoints in Vault provide built-in help in markdown format. This includes system paths, secret engines, and auth methods",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultOutputFormatOptions,
      ],
      args: vaultPathArg,
    },
    {
      name: "plugin",
      description:
        "This command groups subcommands for interacting with Vault's plugins and the plugin catalog. The plugin catalog is divided into three types: 'auth', 'database', and 'secret' plugins. A type must be specified on each call. Here are a few examples of the plugin commands",
      subcommands: [
        {
          name: "deregister",
          description:
            "Deregister an existing plugin in the catalog. If the plugin does not exist, no action is taken (the command is idempotent). The argument of type takes 'auth', 'database', or 'secret'",
          options: [...vaultCommonOptions, ...vaultHTTPOptions],
          args: [
            {
              name: "type",
              description: "Plugin type",
              suggestions: ["auth", "database", "secret"],
            },
            {
              name: "name",
              description: "Plugin name",
            },
          ],
        },
        {
          name: "info",
          description:
            "Displays information about a plugin in the catalog with the given name. If the plugin does not exist, an error is returned. The argument of type takes 'auth', 'database', or 'secret'",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultOutputFieldOptions,
          ],
          args: [...vaultPluginTypeArg, ...vaultPluginNameArg],
        },
        {
          name: "list",
          description:
            "Lists available plugins registered in the catalog. This does not list whether plugins are in use, but rather just their availability. The last argument of type takes 'auth', 'database', or 'secret'",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
          args: vaultPluginTypeArg,
        },
        {
          name: "register",
          description:
            "Registers a new plugin in the catalog. The plugin binary must exist in Vault's configured plugin directory. The argument of type takes 'auth', 'database', or 'secret'",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultPluginRegisterOptions,
          ],
          args: [...vaultPluginTypeArg, ...vaultPluginNameArg],
        },
        {
          name: "reload",
          description:
            "Reloads mounted plugins. Either the plugin name or the desired plugin mount(s) must be provided, but not both. In case the plugin name is provided, all of its corresponding mounted paths that use the plugin backend will be reloaded",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultPluginReloadOptions,
          ],
        },
        {
          name: "reload-status",
          description:
            "Retrieves the status of a recent cluster plugin reload. The reload id must be provided",
          options: [...vaultCommonOptions, ...vaultHTTPOptions],
          args: vaultPluginReloadIdArg,
        },
      ],
    },
    {
      name: "policy",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes the policy named NAME in the Vault server. Once the policy is deleted, all tokens associated with the policy are affected immediately",
          options: [...vaultCommonOptions, ...vaultHTTPOptions],
          args: vaultPolicyNameArg,
        },
        {
          name: "fmt",
          description:
            "Formats a local policy file to the policy specification. This command will overwrite the file at the given PATH with the properly-formatted policy file contents",
          options: [...vaultCommonOptions, ...vaultHTTPOptions],
          args: vaultPolicyPathArg,
        },
        {
          name: "list",
          description:
            "Lists the names of the policies that are installed on the Vault server",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
        },
        {
          name: "read",
          description:
            "Prints the contents and metadata of the Vault policy named NAME. If the policy does not exist, an error is returned",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
          args: vaultPolicyNameArg,
        },
        {
          name: "write",
          description:
            "Uploads a policy with name NAME from the contents of a local file PATH or stdin. If PATH is '-', the policy is read from stdin. Otherwise, it is loaded from the file at the given path on the local disk",
          options: [...vaultCommonOptions, ...vaultHTTPOptions],
          args: [...vaultPolicyNameArg, ...vaultPolicyPathArg],
        },
      ],
    },
    {
      name: "print",
      description:
        "This command groups subcommands for interacting with Vault's runtime values",
      subcommands: [
        {
          name: "token",
          description:
            "Prints the value of the Vault token that will be used for commands, after taking into account the configured token-helper and the environment",
        },
      ],
    },
    {
      name: "secrets",
      description:
        "This command groups subcommands for interacting with Vault's secrets engines.  Each secret engine behaves differently. Please see the documentation for more information",
      subcommands: [
        {
          name: "disable",
          description:
            "Disables a secrets engine at the given PATH. The argument corresponds to the enabled PATH of the engine, not the TYPE! All secrets created by this engine are revoked and its Vault data is removed",
          options: [...vaultCommonOptions, ...vaultHTTPOptions],
          args: vaultPathArg,
        },
        {
          name: "enable",
          description:
            "Enables a secrets engine. By default, secrets engines are enabled at the path corresponding to their TYPE, but users can customize the path using the -path option",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultSecretsEnableOptions,
          ],
          args: vaultPathArg,
        },
        {
          name: "list",
          description:
            "Lists the enabled secret engines on the Vault server. This command also outputs information about the enabled path including configured TTLs and human-friendly descriptions. A TTL of 'system' indicates that the system default is in use",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultSecretsListOptions,
          ],
        },
        {
          name: "move",
          description:
            "Moves an existing secrets engine to a new path. Any leases from the old secrets engine are revoked, but all configuration associated with the engine is preserved. It initiates the migration and intermittently polls its status, exiting if a final state is reached",
          options: [...vaultCommonOptions, ...vaultHTTPOptions],
          args: vaultSecretsMoveArgs,
        },
        {
          name: "tune",
          description:
            "Tunes the configuration options for the secrets engine at the given PATH.  The argument corresponds to the PATH where the secrets engine is enabled, not the TYPE",
          options: [...vaultCommonOptions, ...vaultHTTPOptions],
          args: vaultPathArg,
        },
      ],
    },
    {
      name: "ssh",
      description: "Establishes an SSH connection with the target machine",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultOutputFieldOptions,
        ...vaultOutputFormatOptions,
        ...vaultSshOptions,
        ...vaultSshCaOptions,
      ],
      args: vaultSshArgs,
    },
    {
      name: "token",
      description:
        "This command groups subcommands for interacting with tokens. Users can create, lookup, renew, and revoke tokens",
      subcommands: [
        {
          name: "capabilities",
          description:
            "Fetches the capabilities of a token for a given path. If a TOKEN is provided as an argument, the '/sys/capabilities' endpoint and permission is used. If no TOKEN is provided, the '/sys/capabilities-self' endpoint and permission is used with the locally authenticated token",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
          ],
          args: [...vaultTokenArg, ...vaultPathArg],
        },
        {
          name: "create",
          description:
            "Creates a new token that can be used for authentication. This token will be created as a child of the currently authenticated token. The generated token will inherit all policies and permissions of the currently authenticated token unless you explicitly define a subset list policies to assign to the token",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFieldOptions,
            ...vaultOutputFormatOptions,
            ...vaultTokenCreateOptions,
          ],
        },
        {
          name: "lookup",
          description:
            "Displays information about a token or accessor. If a TOKEN is not provided, the locally authenticated token is use",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultTokenLookupOptions,
          ],
          args: vaultTokenOrAccessorArg,
        },
        {
          name: "renew",
          description:
            "Renews a token's lease, extending the amount of time it can be used. If a TOKEN is not provided, the locally authenticated token is used. A token accessor can be used as well. Lease renewal will fail if the token is not renewable, the token has already been revoked, or if the token has already reached its maximum TTL",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultOutputFormatOptions,
            ...vaultTokenRenewOptions,
          ],
          args: vaultTokenArg,
        },
        {
          name: "revoke",
          description:
            "Revokes authentication tokens and their children. If a TOKEN is not provided, the locally authenticated token is used. The '-mode' flag can be used to control the behavior of the revocation. See the '-mode' flag documentation for more information",
          options: [
            ...vaultCommonOptions,
            ...vaultHTTPOptions,
            ...vaultTokenRevokeOptions,
          ],
          args: vaultTokenOrAccessorArg,
        },
      ],
    },
    {
      name: "version-history",
      description: "Prints the version history of the target Vault server",
      options: [
        ...vaultCommonOptions,
        ...vaultHTTPOptions,
        ...vaultOutputFormatOptions,
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for vault",
      args: {
        isOptional: true,
      },
      priority: 30,
    },
  ],
};
export default completionSpec;
