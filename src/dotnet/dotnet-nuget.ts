import { filepaths } from "@fig/autocomplete-generators";

const configFileGenerator = filepaths({ equals: "nuget.config" });

const nupkgGenerator = filepaths({ extensions: ["nupkg"] });

const sourceCommonOptions: Fig.Option[] = [
  {
    name: "--configfile",
    description:
      "The NuGet configuration file (nuget.config) to use. If specified, only the settings from this file will be used. If not specified, the hierarchy of configuration files from the current directory will be used",
    args: {
      name: "file",
      generators: configFileGenerator,
    },
  },
  {
    name: ["-n", "--name"],
    description: "Name of the source",
    args: {
      name: "name",
    },
  },
  {
    name: ["-p", "--password"],
    description:
      "Password to be used when connecting to an authenticated source",
    args: {
      name: "password",
    },
  },
  {
    name: "--store-password-in-clear-text",
    description:
      "Enables storing portable package source credentials by disabling password encryption",
    args: {
      name: "clear-text",
    },
  },
  {
    name: ["-u", "--username"],
    description:
      "Username to be used when connecting to an authenticated source",
    args: {
      name: "username",
    },
  },
  {
    name: "--valid-authentication-types",
    description:
      "Comma-separated list of valid authentication types for this source. Set this to basic if the server advertises NTLM or Negotiate and your credentials must be sent using the Basic mechanism, for instance when using a PAT with on-premises Azure DevOps Server. Other valid values include negotiate, kerberos, ntlm, and digest, but these values are unlikely to be useful",
    args: {
      name: "types",
      suggestions: ["negotiate", "kerberos", "ntlm", "digest"],
    },
  },
];

const trustCommonOptions: Fig.Option[] = [
  {
    name: "--configfile",
    description:
      "The NuGet configuration file (nuget.config) to use. If specified, only the settings from this file will be used. If not specified, the hierarchy of configuration files from the current directory will be used",
    args: {
      name: "file",
      generators: configFileGenerator,
    },
  },
  {
    name: ["-v", "--verbosity"],
    description:
      "Sets the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]. The default is minimal",
    args: {
      name: "verbosity",
      suggestions: ["quiet", "minimal", "normal", "detailed", "diagnostic"],
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "nuget",
  subcommands: [
    {
      name: "delete",
      description:
        "The dotnet nuget delete command deletes or unlists a package from the server. For nuget.org, the action is to unlist the package",
      isDangerous: true,
      args: [
        {
          name: "package_name",
          description: "Name/ID of the package to delete",
        },
        {
          name: "package_version",
          description: "Version of the package to delete",
        },
      ],
      options: [
        {
          name: "--force-english-output",
          description:
            "Forces the application to run using an invariant, English-based culture",
        },
        {
          name: "--interactive",
          description:
            "Allows the command to stop and wait for user input or action. For example, to complete authentication. Available since .NET Core 3.0 SDK",
        },
        {
          name: ["-k", "--api-key"],
          description: "The API key for the server",
          args: {
            name: "key",
          },
        },
        {
          name: "--no-service-endpoint",
          description:
            'Doesn\'t append "api/v2/package" to the source URL. Option available since .NET Core 2.1 SDK',
        },
        {
          name: "--non-interactive",
          description: "Doesn't prompt for user input or confirmations",
        },
        {
          name: ["-s", "--source"],
          description:
            "Specifies the server URL. Supported URLs for nuget.org include https://www.nuget.org, https://www.nuget.org/api/v3, and https://www.nuget.org/api/v2/package. For private feeds, replace the host name (for example, %hostname%/api/v3)",
          args: {
            name: "source",
          },
        },
      ],
    },
    {
      name: "locals",
      description:
        "The dotnet nuget locals command clears or lists local NuGet resources in the http-request cache, temporary cache, or machine-wide global packages folder",
      args: {
        name: "cache_location",
        suggestions: ["all", "http-cache", "global-packages", "temp"],
      },
      options: [
        {
          name: ["-c", "--clear"],
          description:
            "The clear option executes a clear operation on the specified cache type. The contents of the cache directories are deleted recursively. The executing user/group must have permission to the files in the cache directories. If not, an error is displayed indicating the files/folders that weren't cleared",
        },
        {
          name: ["-l", "--list"],
          description:
            "The list option is used to display the location of the specified cache type",
        },
      ],
    },
    {
      name: "push",
      description:
        "The dotnet nuget push command pushes a package to the server and publishes it. The push command uses server and credential details found in the system's NuGet config file or chain of config files. For more information on config files, see Configuring NuGet Behavior. NuGet's default configuration is obtained by loading %AppData%NuGetNuGet.config (Windows) or $HOME/.local/share (Linux/macOS), then loading any nuget.config or .nuget\nuget.config starting from the root of drive and ending in the current directory",
      args: {
        name: "root",
        description: "Specifies the file path to the package to be pushed",
        generators: nupkgGenerator,
      },
      options: [
        {
          name: ["-d", "--disable-buffering"],
          description:
            "Disables buffering when pushing to an HTTP(S) server to reduce memory usage",
        },
        {
          name: "--force-english-output",
          description:
            "Forces the application to run using an invariant, English-based culture",
        },
        {
          name: "--interactive",
          description:
            "Allows the command to stop and wait for user input or action. For example, to complete authentication. Available since .NET Core 3.0 SDK",
        },
        {
          name: ["-k", "--api-key"],
          description: "The API key for the server",
          args: {
            name: "key",
          },
        },
        {
          name: ["-n", "--no-symbols"],
          description: "Doesn't push symbols (even if present)",
        },
        {
          name: "--no-service-endpoint",
          description:
            'Doesn\'t append "api/v2/package" to the source URL. Option available since .NET Core 2.1 SDK',
        },
        {
          name: ["-s", "--source"],
          description:
            "Specifies the server URL. NuGet identifies a UNC or local folder source and simply copies the file there instead of pushing it using HTTP",
          args: {
            name: "source",
          },
        },
        {
          name: "--skip-duplicate",
          description:
            "When pushing multiple packages to an HTTP(S) server, treats any 409 Conflict response as a warning so that the push can continue. Available since .NET Core 3.1 SDK",
        },
        {
          name: ["-sk", "--symbol-api-key"],
          description: "The API key for the symbol server",
          args: {
            name: "key",
          },
        },
        {
          name: ["-ss", "--symbol-source"],
          description: "Specifies the symbol server URL",
          args: {
            name: "symbol_source",
          },
        },
        {
          name: ["-t", "--timeout"],
          description:
            "Specifies the timeout for pushing to a server in seconds. Defaults to 300 seconds (5 minutes). Specifying 0 applies the default value",
          args: {
            name: "timeout",
            isOptional: true,
            default: "300",
          },
        },
      ],
    },
    {
      name: "add",
      subcommands: [
        {
          name: "source",
          description:
            "The dotnet nuget add source command adds a new package source to your NuGet configuration files",
          args: {
            name: "package_source",
            description: "Path to the package source",
          },
          options: sourceCommonOptions,
        },
      ],
    },
    {
      name: "disable",
      subcommands: [
        {
          name: "source",
          description:
            "The dotnet nuget disable source command disables an existing source in your NuGet configuration files",
          args: {
            name: "name",
            description: "Name of the source",
          },
          options: [
            {
              name: "--configfile",
              description:
                "The NuGet configuration file (nuget.config) to use. If specified, only the settings from this file will be used. If not specified, the hierarchy of configuration files from the current directory will be used",
              args: {
                name: "file",
                generators: configFileGenerator,
              },
            },
          ],
        },
      ],
    },
    {
      name: "enable",
      subcommands: [
        {
          name: "source",
          description:
            "The dotnet nuget enable source command enables an existing source in your NuGet configuration files",
          args: {
            name: "name",
            description: "Name of the source",
          },
          options: [
            {
              name: "--configfile",
              description:
                "The NuGet configuration file (nuget.config) to use. If specified, only the settings from this file will be used. If not specified, the hierarchy of configuration files from the current directory will be used",
              args: {
                name: "file",
                generators: configFileGenerator,
              },
            },
          ],
        },
      ],
    },
    {
      name: "list",
      subcommands: [
        {
          name: "source",
          description:
            "The dotnet nuget list source command lists all existing sources from your NuGet configuration files",
        },
      ],
      options: [
        {
          name: "--configfile",
          description:
            "The NuGet configuration file (nuget.config) to use. If specified, only the settings from this file will be used. If not specified, the hierarchy of configuration files from the current directory will be used",
          args: {
            name: "file",
            generators: configFileGenerator,
          },
        },
        {
          name: "--format",
          description:
            "The format of the list command output: Detailed (the default) and Short",
          args: {
            name: "output",
            suggestions: ["Detailed", "Short"],
          },
        },
      ],
    },
    {
      name: "remove",
      subcommands: [
        {
          name: "source",
          description:
            "The dotnet nuget remove source command removes an existing source from your NuGet configuration files",
          args: {
            name: "name",
            description: "Name of the source",
          },
          options: [
            {
              name: "--configFile",
              description:
                "The NuGet configuration file (nuget.config) to use. If specified, only the settings from this file will be used. If not specified, the hierarchy of configuration files from the current directory will be used",
              args: {
                name: "file",
                generators: configFileGenerator,
              },
            },
          ],
        },
      ],
    },
    {
      name: "update",
      subcommands: [
        {
          name: "source",
          description:
            "The dotnet nuget update source command updates an existing source in your NuGet configuration files",
          args: {
            name: "name",
            description: "Name of the source",
          },
          options: sourceCommonOptions,
        },
      ],
    },
    {
      name: "verify",
      description:
        "The dotnet nuget verify command verifies a signed NuGet package",
      args: {
        name: "package-path",
        description:
          "Specifies the file path to the package(s) to be verified. Multiple position arguments can be passed in to verify multiple packages",
        generators: nupkgGenerator,
      },
      options: [
        {
          name: "--all",
          description:
            "Specifies that all verifications possible should be performed on the package(s). By default, only signatures are verified",
        },
        {
          name: "--certificate-fingerprint",
          description:
            "Verify that the signer certificate matches with one of the specified SHA256 fingerprints. This option can be supplied multiple times to provide multiple fingerprints",
          args: {
            name: "fingerprint",
          },
        },
        {
          name: ["-v", "--verbosity"],
          description:
            "Sets the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]. Not supported in every command. See specific command page to determine if this option is available",
          args: {
            name: "verbosity",
            suggestions: [
              "quiet",
              "minimal",
              "normal",
              "detailed",
              "diagnostic",
            ],
          },
        },
      ],
    },
    {
      name: "trust",
      description:
        "The dotnet nuget trust command manages the trusted signers. By default, NuGet accepts all authors and repositories. These commands allow you to specify only a specific subset of signers whose signatures will be accepted, while rejecting all others",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all the trusted signers in the configuration. This option will include all the certificates (with fingerprint and fingerprint algorithm) each signer has. If a certificate has a preceding [U], it means that certificate entry has allowUntrustedRoot set as true",
          options: trustCommonOptions,
        },
        {
          name: "sync",
          description:
            "Deletes the current list of certificates and replaces them with an up-to-date list from the repository",
          options: trustCommonOptions,
        },
        {
          name: "remove",
          description: "Removes any trusted signers that match the given name",
          args: {
            name: "name",
            description: "The name of the existing trusted signer to remove",
          },
          options: trustCommonOptions,
        },
        {
          name: "author",
          description:
            "Adds a trusted signer with the given name, based on the author signature of the package",
          args: [
            {
              name: "name",
              description:
                "The name of the trusted signer to add. If NAME already exists in the configuration, the signature is appended",
            },
            {
              name: "package",
              description:
                "The given PACKAGE should be a local path to the signed .nupkg file",
            },
          ],
          options: [
            {
              name: "--allow-untrusted-root",
              description:
                "Specifies if the certificate for the trusted signer should be allowed to chain to an untrusted root. This is not recommended",
            },
            ...trustCommonOptions,
          ],
        },
        {
          name: "repository",
          description:
            "Adds a trusted signer with the given name, based on the repository signature or countersignature of a signed package",
          args: [
            {
              name: "name",
              description:
                "The name of the trusted signer to add. If NAME already exists in the configuration, the signature is appended",
            },
            {
              name: "package",
              description:
                "The given PACKAGE should be a local path to the signed .nupkg file",
            },
          ],
          options: [
            {
              name: "--allow-untrusted-root",
              description:
                "Specifies if the certificate for the trusted signer should be allowed to chain to an untrusted root. This is not recommended",
            },
            {
              name: "--owners",
              description:
                "Semicolon-separated list of trusted owners to further restrict the trust of a repository",
            },
            ...trustCommonOptions,
          ],
        },
        {
          name: "certificate",
          description:
            "Adds a trusted signer with the given name, based on a certificate fingerprint",
          args: [
            {
              name: "name",
              description:
                "The name of the trusted signer to add. If a trusted signer with the given name already exists, the certificate item is added to that signer. Otherwise a trusted author is created with a certificate item from the given certificate information",
            },
            {
              name: "fingerprint",
              description: "The fingerprint of the certificate",
            },
          ],
          options: [
            {
              name: "--algorithm",
              description:
                "Specifies the hash algorithm used to calculate the certificate fingerprint. Defaults to SHA256. Values supported are SHA256, SHA384 and SHA512",
            },
            ...trustCommonOptions,
          ],
        },
        {
          name: "source",
          description: "Adds a trusted signer based on a given package source",
          args: {
            name: "name",
          },
          options: [
            {
              name: "owners",
              description:
                "Semicolon-separated list of trusted owners to further restrict the trust of a repository",
            },
            {
              name: "--source-url",
              description:
                "If a source-url is provided, it must be a v3 package source URL (like https://api.nuget.org/v3/index.json). Other package source types are not supported",
              args: {
                name: "source-url",
              },
            },
            ...trustCommonOptions,
          ],
        },
      ],
    },
    {
      name: "sign",
      description:
        "The dotnet nuget sign command signs all the packages matching the first argument with a certificate. The certificate with the private key can be obtained from a file or from a certificate installed in a certificate store by providing a subject name or a SHA-1 fingerprint",
      args: {
        name: "package-paths",
        description:
          "Specifies the file path to the package(s) to be signed. Multiple arguments can be passed in to sign multiple packages",
        isVariadic: true,
      },
      options: [
        {
          name: "--certificate-path",
          description:
            "Specifies the file path to the certificate to be used in signing the package",
          args: {
            name: "path",
            generators: filepaths({ extensions: ["pfx"] }),
          },
        },
        {
          name: "--certificate-store-name",
          description:
            'Specifies the name of the X.509 certificate store to use to search for the certificate. Defaults to "My", the X.509 certificate store for personal certificates. This option should be used when specifying the certificate via --certificate-subject-name or --certificate-fingerprint options',
          args: {
            name: "storename",
          },
        },
        {
          name: "--certificate-store-location",
          description:
            'Specifies the name of the X.509 certificate store use to search for the certificate. Defaults to "CurrentUser", the X.509 certificate store used by the current user. This option should be used when specifying the certificate via --certificate-subject-name or --certificate-fingerprint options',
          args: {
            name: "location",
          },
        },
        {
          name: "--certificate-subject-name",
          description:
            "Specifies the subject name of the certificate used to search a local certificate store for the certificate. The search is a case-insensitive string comparison using the supplied value, which will find all certificates with the subject name containing that string, regardless of other subject values. The certificate store can be specified by --certificate-store-name and --certificate-store-location options",
          args: {
            name: "subjectname",
          },
        },
        {
          name: "--certificate-fingerprint",
          description:
            "SHA-1 fingerprint of the certificate used to search a local certificate store for the certificate",
          args: {
            name: "fingerprint",
          },
        },
        {
          name: "--certificate-password",
          description:
            "Specifies the certificate password, if needed. If a certificate is password protected but no password is provided, the sign command will fail",
          args: {
            name: "password",
          },
        },
        {
          name: "--hash-algorithm",
          description:
            "Hash algorithm to be used to sign the package. Defaults to SHA256. Possible values are SHA256, SHA384, and SHA512",
          args: {
            name: "algorithm",
            suggestions: ["SHA256", "SHA384", "SHA512"],
          },
        },
        {
          name: ["-o", "--output"],
          description:
            "Specifies the directory where the signed package should be saved. If this option is not specified, by default the original package is overwritten by the signed package",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--overwrite",
          description:
            "Indicate that the current signature should be overwritten. By default the command will fail if the package already has a signature",
          isDangerous: true,
        },
        {
          name: "--timestamp-hash-algorithm",
          description:
            "Hash algorithm to be used by the RFC 3161 timestamp server. Defaults to SHA256",
          args: {
            name: "algorithm",
            suggestions: ["SHA256"],
          },
        },
        {
          name: "--timestamper",
          description: "URL to an RFC 3161 timestamping server",
          args: {
            name: "url",
          },
        },
        {
          name: ["-v", "--verbosity"],
          description:
            "Sets the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]. The default is minimal",
          args: {
            name: "verbosity",
            suggestions: [
              "quiet",
              "minimal",
              "normal",
              "detailed",
              "diagnostic",
            ],
          },
        },
      ],
    },
  ],
};

export default completionSpec;
