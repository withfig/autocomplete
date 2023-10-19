import { type } from "node:os";

// Barebones Teleport resource definitions, ensuring type safety and autocomplete
type GenericResource = {
  metadata: {
    name: string;
    description: string;
  };
};

type User = object & GenericResource;

type Role = object & GenericResource;

type App = object & GenericResource;

type Db = object & GenericResource;

type AccessRequest = object & GenericResource;

type Token = object & GenericResource;

type Bot = object & GenericResource;

type WindowsDesktop = object & GenericResource;

type ACL = object & GenericResource;

type Alert = object & GenericResource;

type Device = object & GenericResource;

type Connector = object & GenericResource;

type Namespace = object & GenericResource;

type Cluster = {
  kube_cluster_name: string;
};

const teleportAccountsGenerator: Fig.Generator = {
  script: "tctl get users --format json",
  postProcess: function (out) {
    const users = JSON.parse(out);

    return users.map((user: User) => {
      return {
        name: user.metadata.name,
        description: user.metadata.description,
      };
    });
  },
};

const teleportKubernetesClustersGenerator: Fig.Generator = {
  script: "tsh kube ls --format json",
  postProcess: function (out) {
    const clusters = JSON.parse(out);

    return clusters.map((cluster: Cluster) => {
      return {
        name: cluster.kube_cluster_name,
        description: "Kubernetes cluster connected to Teleport",
      };
    });
  },
};

const commaQueryTerm = (curr) => {
  if (curr.includes(",")) {
    return curr.slice(curr.lastIndexOf(",") + 1);
  } else {
    return curr;
  }
};

const filterRoles = (currentRoles: string, allRoles: Role[]) => {
  let currentRolesString = currentRoles;

  if (currentRoles.includes("=")) {
    currentRolesString = currentRoles.split("=")[1];
  }

  const filterable = currentRolesString.split(",");

  return allRoles.filter((role: Role) => {
    return !filterable.includes(role.metadata.name);
  });
};

const teleportRolesGenerator: Fig.Generator = {
  script: "tctl get roles --format json",
  getQueryTerm: commaQueryTerm,
  postProcess: function (out, tokens) {
    const roles = JSON.parse(out);

    const filteredRoles = filterRoles(tokens[tokens.length - 1], roles);

    return filteredRoles.map((role: Role) => {
      return {
        name: role.metadata.name,
        description: role.metadata.description,
      };
    });
  },
};

const teleportAppGenerator: Fig.Generator = {
  script: "tsh apps ls --format json",
  postProcess: function (out) {
    const apps = JSON.parse(out);
    return apps.map((app: App) => {
      return {
        name: app.metadata.name,
        description: app.metadata.description,
      };
    });
  },
};

const teleportDatabaseGenerator: Fig.Generator = {
  script: "tsh db ls --format json",
  postProcess: function (out) {
    const dbs = JSON.parse(out);
    return dbs.map((db: Db) => {
      return {
        name: db.metadata.name,
        description: db.metadata.description,
      };
    });
  },
};

const teleportRequestGenerator: Fig.Generator = {
  script: "tctl request ls --format json",
  postProcess: function (out) {
    const requests = JSON.parse(out);
    return requests.map((request: AccessRequest) => {
      return {
        name: request.metadata.name,
        description: request.metadata.description,
      };
    });
  },
};

const teleportTokenGenerator: Fig.Generator = {
  script: "tctl tokens ls --format json",
  postProcess: function (out) {
    const tokens = JSON.parse(out);
    return tokens.map((token: Token) => {
      return {
        name: token.metadata.name,
        description: token.metadata.description,
      };
    });
  },
};

const teleportWindowsDesktopGenerator: Fig.Generator = {
  script: "tctl get windows_desktop --format json",
  postProcess: function (out) {
    const desktops = JSON.parse(out);
    return desktops.map((desktop: WindowsDesktop) => {
      return {
        name: desktop.metadata.name,
        description: desktop.metadata.description,
      };
    });
  },
};

const teleportFormatOption: Fig.Option = {
  name: "--format",
  description: "Output format. One of: [text, json, yaml]",
  args: {
    name: "format",
    suggestions: ["text", "json", "yaml"],
    default: "text",
  },
};

const teleportBotsGenerator: Fig.Generator = {
  script: "tctl bots ls --format json",
  postProcess: function (out) {
    const bots = JSON.parse(out);
    return bots.map((bot: Bot) => {
      return {
        name: bot.metadata.name.slice(4),
        description: bot.metadata.description,
      };
    });
  },
};

const teleportACLGenerator: Fig.Generator = {
  script: "tctl acl ls --format json",
  postProcess: function (out) {
    const acl = JSON.parse(out);
    return acl.map((acl: ACL) => {
      return {
        name: acl.metadata.name,
        description: acl.metadata.description,
      };
    });
  },
};

const teleportAlertGenerator: Fig.Generator = {
  script: "tctl alerts list --format json",
  postProcess: function (out) {
    const alerts = JSON.parse(out);
    return alerts.map((alert: Alert) => {
      return {
        name: alert.metadata.name,
        description: alert.metadata.description,
      };
    });
  },
};

const teleportDeviceGenerator: Fig.Generator = {
  script: "tctl get device --format json",
  postProcess: function (out) {
    const devices = JSON.parse(out);
    return devices.map((device: Device) => {
      return {
        name: device.metadata.name,
        description: device.metadata.description,
      };
    });
  },
};

const teleportSAMLConnectorGenerator: Fig.Generator = {
  script: "tctl get connector --format json",
  postProcess: function (out) {
    const connectors = JSON.parse(out);
    return connectors.map((connector: Connector) => {
      return {
        name: connector.metadata.name,
        description: connector.metadata.description,
      };
    });
  },
};

const teleportGetResourcesGenerator: Fig.Generator = {
  trigger: (current, old) => {
    return true;
  },
  custom: async (tokens, executeShellCommand) => {
    const standardSuggestions = [
      "user",
      "role",
      "connector",
      "node",
      "windows_desktop",
      "cluster",
      "login_rule",
      "device",
      "ui_config",
      "cluster_auth_preference",
      "lock",
      "all",
    ];
    const respondSuggestions = standardSuggestions.map((suggestion) => {
      return {
        name: suggestion,
        description: "Get a " + suggestion,
      };
    });

    if (
      tokens.find((token) =>
        standardSuggestions.includes(token.split("/")[0])
      ) != undefined
    ) {
      // Get the name from the token which contains one of the standard suggestions
      const resource = tokens
        .find((token) => standardSuggestions.includes(token.split("/")[0]))
        .split("/")[0];

      if (standardSuggestions.find((sug) => sug === resource) == undefined)
        return respondSuggestions;
      if (["cluster_auth_preference", "all"].includes(resource)) return []; // This is what tctl expects

      const resources = await executeShellCommand(
        `tctl get ${resource} --format json`
      );
      const parsedResources = JSON.parse(resources);

      return parsedResources.map((parsedResource: GenericResource) => {
        return {
          name: `${resource}/${parsedResource.metadata.name}`,
        };
      });
    }

    return respondSuggestions;
  },
};

/* tctl lock --help
      --user             Name of a Teleport user to disable.
      --role             Name of a Teleport role to disable.
      --login            Name of a local UNIX user to disable.
      --mfa-device       UUID of a user MFA device to disable.
      --windows-desktop  Name of a Windows desktop to disable.
      --access-request   UUID of an access request to disable.
      --device           UUID of a trusted device to disable.
      --message          Message to display to locked-out users.
      --expires          Time point (RFC3339) when the lock expires.
      --ttl              Time duration after which the lock expires.
      --server-id        UUID of a Teleport server to disable.
*/

const completionSpec: Fig.Spec = {
  name: "tctl",
  description: "Admin tool for the Teleport Access Platform",
  subcommands: [
    /* tctl help */
    {
      name: "help",
      description: "Show help",
    },
    /* tctl users */
    {
      name: "users",
      subcommands: [
        {
          name: "add",
          description: "Add a new user",
          args: {
            name: "account",
            description: "Teleport user account name",
          },
          options: [
            {
              name: "--logins",
              description: "List of allowed SSH logins for the new user",
            },
            {
              name: "--windows-logins",
              description: "List of allowed Windows logins for the new user",
            },
            {
              name: "--kubernetes-users",
              description: "List of allowed Kubernetes users for the new user",
            },
            {
              name: "--kubernetes-groups",
              description: "List of allowed Kubernetes groups for the new user",
            },
            {
              name: "--db-users",
              description: "List of allowed database users for the new user",
            },
            {
              name: "--db-names",
              description: "List of allowed database names for the new user",
            },
            {
              name: "--db-roles",
              description:
                "List of database roles for automatic database user provisioning",
            },
            {
              name: "--aws-role-arns",
              description: "List of allowed AWS role ARNs for the new user",
            },
            {
              name: "--azure-identities",
              description: "List of allowed Azure identities for the new user",
            },
            {
              name: "--gcp-service-accounts",
              description:
                "List of allowed GCP service accounts for the new user",
            },
            {
              name: "--host-user-uid",
              description: "UID for auto provisioned host users to use",
            },
            {
              name: "--host-user-gid",
              description: "GID for auto provisioned host users to use",
            },
            {
              name: "--ttl",
              description:
                "Set expiration time for token, default is 1h0m0s, maximum is 48h0m0s",
            },
            {
              name: "--roles",
              description:
                "List of roles for the new user to assume. Comma seperated",
              isRequired: true,
              isRepeatable: true,
              args: {
                generators: teleportRolesGenerator,
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update user account",
          options: [
            {
              name: "--set-roles",
              description:
                "List of roles for the user to assume, replaces current roles. Comma seperated",
              args: {
                generators: teleportRolesGenerator,
              },
            },
            {
              name: "--set-logins",
              description:
                "List of allowed SSH logins for the user, replaces current logins",
            },
            {
              name: "--set-windows-logins",
              description:
                "List of allowed Windows logins for the user, replaces current Windows logins",
            },
            {
              name: "--set-kubernetes-users",
              description:
                "List of allowed Kubernetes users for the user, replaces current Kubernetes users",
            },
            {
              name: "--set-kubernetes-groups",
              description:
                "List of allowed Kubernetes groups for the user, replaces current Kubernetes groups",
            },
            {
              name: "--set-db-users",
              description:
                "List of allowed database users for the user, replaces current database users",
            },
            {
              name: "--set-db-names",
              description:
                "List of allowed database names for the user, replaces current database names",
            },
            {
              name: "--set-db-roles",
              description:
                "List of allowed database roles for automatic database user provisioning, replaces current database roles",
            },
            {
              name: "--set-aws-role-arns",
              description:
                "List of allowed AWS role ARNs for the user, replaces current AWS role ARNs",
            },
            {
              name: "--set-azure-identities",
              description:
                "List of allowed Azure identities for the user, replaces current Azure identities",
            },
            {
              name: "--set-gcp-service-accounts",
              description:
                "List of allowed GCP service accounts for the user, replaces current service accounts",
            },
            {
              name: "--set-host-user-uid",
              description:
                "UID for auto provisioned host users to use. Value can be reset by providing an empty string",
            },
            {
              name: "--set-host-user-gid",
              description:
                "GID for auto provisioned host users to use. Value can be reset by providing an empty string",
            },
          ],
          args: {
            name: "account",
            description: "Teleport user account name",
            generators: teleportAccountsGenerator,
          },
        },
        {
          name: "ls",
          description: "Lists all user accounts",
        },
        {
          name: "rm",
          description: "Remove user account",
          args: {
            name: "account",
            description: "Teleport user account name",
            isVariadic: true,
            generators: teleportAccountsGenerator,
          },
        },
        {
          name: "reset",
          description:
            "Reset user password and generate a new token [Teleport DB users only]",
          args: {
            name: "account",
            description: "Teleport user account name",
            generators: teleportAccountsGenerator,
          },
        },
      ],
    },
    /* tctl nodes */
    {
      name: "nodes",
      description: "Issue invites for other nodes to join the cluster",
      subcommands: [
        {
          name: "add",
          description: "Generate a node invitation token",
          options: [
            {
              name: "--roles",
              description:
                "Comma-separated list of roles for the new node to assume",
              args: {
                generators: {
                  getQueryTerm: commaQueryTerm,
                  trigger: (current, old) => {
                    return true;
                  },
                  custom: async (tokens) => {
                    const roles = ["node", "proxy", "auth", "app", "db"];

                    const filteredRoles = filterRoles(
                      tokens[tokens.length - 1],
                      roles.map((role) => {
                        return {
                          metadata: {
                            name: role,
                            description:
                              "Add a new " + role + " to the cluster",
                          },
                        };
                      })
                    );

                    return filteredRoles.map((role: Role) => {
                      return {
                        name: role.metadata.name,
                      };
                    });
                  },
                },
              },
            },
            {
              name: "--ttl",
              description:
                "Time to live for a generated token, default is 0h30m0s, maximum is 48h0m0s",
            },
          ],
        },
        {
          name: "ls",
          description: "List all active SSH nodes within the cluster",
          options: [
            {
              name: "--namespace",
              description: "Namespace of the nodes",
              args: {
                name: "namespace",
                description: "Namespace of the nodes",
                isOptional: true,
                generators: {
                  script: "tctl get namespaces --format json",
                  postProcess: function (out) {
                    const namespaces = JSON.parse(out);

                    return namespaces.map((namespace: Namespace) => {
                      return {
                        name: namespace.metadata.name,
                        description: namespace.metadata.description,
                      };
                    });
                  },
                },
              },
            },
          ],
        },
      ],
    },
    /* tctl tokens */
    {
      name: "tokens",
      description: "Manage invitation tokens",
      subcommands: [
        {
          name: "add",
          description: "Create a invitation token",
          args: {},
          options: [
            teleportFormatOption,
            {
              name: "--type",
              description: "Type(s) of token to add",
              isRepeatable: true,
              requiresSeparator: true,
              args: {
                name: "type",
                description: "Node,app,db,proxy,etc",
                default: "app",

                generators: {
                  getQueryTerm: commaQueryTerm,
                  custom: async (tokens) => {
                    const types = [
                      {
                        metadata: {
                          name: "proxy",
                          description: "Add a new proxy node to the cluster",
                        },
                      },
                      {
                        metadata: {
                          name: "auth",
                          description:
                            "Add a new auth service node to the cluster",
                        },
                      },
                      {
                        metadata: {
                          name: "trusted_cluster",
                          description:
                            "Add a new trusted cluster to the cluster",
                        },
                      },
                      {
                        metadata: {
                          name: "node",
                          description: "Aadd a new (ssh-)node to the cluster",
                        },
                      },
                      {
                        metadata: {
                          name: "db",
                          description: "Add a new database to the cluster",
                        },
                      },
                      {
                        metadata: {
                          name: "kube",
                          description:
                            "Add a new kubernetes cluster to the cluster",
                        },
                      },
                      {
                        metadata: {
                          name: "app",
                          description:
                            "Add a new (web-)application to the cluster",
                        },
                      },
                      {
                        metadata: {
                          name: "windowsdesktop",
                          description:
                            "Add a new windows desktop to the cluster",
                        },
                      },
                    ];

                    const filteredTypes = filterRoles(
                      tokens[tokens.length - 1],
                      types
                    );

                    return filteredTypes.map((type) => {
                      return {
                        name: type.metadata.name,
                        description: type.metadata.description,
                      };
                    });
                  },
                },
              },
            },
            {
              name: "--value",
              description:
                "Override the default random generated token with a specified value",
              args: {
                name: "value",
              },
            },
            {
              name: "--labels",
              description: "Set token labels",
              args: {
                name: "label1=value1,label2=value2",
              },
            },
            {
              name: "--ttl",
              description:
                "Set expiration time for token, default is 30 minutes",
              args: {
                name: "30m",
              },
            },
            {
              name: "--app-name",
              description: "Name of the application to add",
              args: {
                name: "name",
              },
            },
            {
              name: "--app-uri",
              description: "URI of the application to add",
              args: {
                name: "app.example.com",
              },
            },
            {
              name: "--db-name",
              description: "Name of the database to add",
              args: {
                name: "name",
              },
            },
            {
              name: "--db-protocol",
              description:
                "Database protocol to use. Supported are: [postgres mysql mongodb oracle cockroachdb redis snowflake sqlserver cassandra elasticsearch opensearch dynamodb clickhouse clickhouse-http]",
              args: {
                name: "protocol",
                suggestions: [
                  "postgres",
                  "mysql",
                  "mongodb",
                  "oracle",
                  "cockroachdb",
                  "redis",
                  "snowflake",
                  "sqlserver",
                  "cassandra",
                  "elasticsearch",
                  "opensearch",
                  "dynamodb",
                  "clickhouse",
                  "clickhouse-http",
                ],
                default: "postgres",
              },
            },
          ],
        },
        {
          name: ["rm", "del"],
          description: "Delete/revoke an invitation token",
          args: {
            name: "token",
            description: "Token to delete",
            isVariadic: true,
            generators: {
              script: "tctl get tokens --format json",
              postProcess: function (out) {
                const tokens = JSON.parse(out);
                return tokens.map((token: Token) => {
                  return {
                    name: token.metadata.name,
                    description: token.metadata.description,
                  };
                });
              },
            },
          },
        },
        {
          name: "ls",
          description: "List node and user invitation tokens",
          options: [teleportFormatOption],
        },
      ],
    },
    /* tctl auth */
    {
      name: "auth",
      description:
        "Operations with user and host certificate authorities (CAs)",
      args: {},
      subcommands: [
        {
          name: "export",
          description: "Export public cluster (CA) keys to stdout",
          options: [
            {
              name: "--keys",
              description: "If set, will print private keys",
            },
            {
              name: "--fingerprint",
              description: "Filter authority by fingerprint",
            },
            {
              name: "--compat",
              description:
                "Export certificates compatible with specific version of Teleport",
              args: {
                name: "version",
                description: "E.g. 13",
              },
            },
            {
              name: "--type",
              description: "Export certificate type",
              args: {
                name: "type",
                suggestions: [
                  "user",
                  "host",
                  "tls-host",
                  "tls-user",
                  "tls-user-der",
                  "windows",
                  "db",
                  "db-der",
                  "openssh",
                  "saml-idp",
                ],
                description: "Export certificate type",
              },
            },
          ],
        },
        {
          name: "sign",
          description: "Create an identity file(s) for a given user",
          args: {},
          options: [
            {
              name: "--user",
              description: "Teleport user name",
              isRequired: true,
              args: {
                name: "user",
                generators: teleportAccountsGenerator,
              },
            },
            {
              name: "--host",
              description: "Teleport host name",
              args: {
                name: "host",
              },
            },
            {
              name: ["--out", "-o"],
              description: "Identity output",
              isRequired: true,
              args: {
                name: "out",
                template: "filepaths",
              },
            },
            {
              name: "--format",
              description: "Identity format",
              args: {
                name: "format",
                suggestions: ["file", "openssh", "tls", "kubernetes"],
                default: "file",
              },
            },
            {
              name: "--ttl",
              description: "TTL (time to live) for the generated certificate",
              args: {
                name: "ttl",
              },
            },
            {
              name: "--compat",
              description: "OpenSSH compatibility flag",
            },
            {
              name: "--proxy",
              description:
                'Address of the Teleport proxy. When --format is set to "kubernetes", this address will be set as cluster address in the generated kubeconfig file',
              args: {
                name: "proxy",
              },
            },
            {
              name: "--overwrite",
              description:
                "Whether to overwrite existing destination files. When not set, user will be prompted before overwriting any existing file",
            },
            {
              name: "--no-overwrite",
              description:
                "Whether to overwrite existing destination files. When not set, user will be prompted before overwriting any existing file",
            },
            {
              name: "--tar",
              description:
                "Create a tarball of the resulting certificates and stream to stdout",
            },
            {
              name: "--leaf-cluster",
              description:
                'Leaf cluster to generate identity file for when --format is set to "kubernetes"',
              args: {
                name: "leaf-cluster",
              },
            },
            {
              name: "--kube-cluster-name",
              description:
                'Kubernetes cluster to generate identity file for when --format is set to "kubernetes"',
              args: {
                name: "name",
                generators: teleportKubernetesClustersGenerator,
              },
            },
            {
              name: "--app-name",
              description:
                'Application to generate identity file for. Mutually exclusive with "--db-service"',
              args: {
                name: "name",
                generators: teleportAppGenerator,
              },
            },
            {
              name: "--db-service",
              description:
                'Database to generate identity file for. Mutually exclusive with "--app-name"',
              args: {
                name: "service",
                generators: teleportDatabaseGenerator,
              },
            },
            {
              name: "--db-user",
              description:
                'Database user placed on the identity file. Only used when "--db-service" is set',
            },
            {
              name: "--db-name",
              description:
                'Database name placed on the identity file. Only used when "--db-service" is set',
            },
            {
              name: "--windows-user",
              description:
                'Window user placed on the identity file. Only used when --format is set to "windows"',
            },
            {
              name: "--windows-domain",
              description:
                'Active Directory domain for which this cert is valid. Only used when --format is set to "windows"',
            },
            {
              name: "--windows-sid",
              description:
                'Optional Security Identifier to embed in the certificate. Only used when --format is set to "windows"',
            },
          ],
        },
        {
          name: "rotate",
          description: "Rotate certificate authorities in the cluster",
          options: [
            {
              name: "--grace-period",
              description:
                "Grace period keeps previous certificate authorities signatures valid, if set to 0 will force users to re-login and nodes to re-register",
              args: {
                name: "duration",
                description: "Relative duration like 5s, 2m, or 3h",
              },
            },
            {
              name: "--manual",
              description:
                "Activate manual rotation, set rotation phases manually",
            },
            {
              name: "--type",
              description: "Certificate authority to rotate",
              isRequired: true,
              args: {
                name: "type",
                suggestions: [
                  "host",
                  "user",
                  "db",
                  "openssh",
                  "jwt",
                  "saml_idp",
                  "oidc_idp",
                ],
                default: "host",
              },
            },
            {
              name: "--phase",
              description:
                "Target rotation phase to set, used in manual rotation",
              args: {
                name: "phase",
                suggestions: [
                  "init",
                  "standby",
                  "update_clients",
                  "update_servers",
                  "rollback",
                ],
                default: "init",
              },
            },
          ],
        },
        {
          name: "ls",
          description: "List connected auth servers",
          options: [teleportFormatOption],
        },
        {
          name: "crl",
          description:
            "Export empty certificate revocation list (CRL) for certificate authorities",
          options: [
            {
              name: "--type",
              description: "Certificate authority to rotate",
              isRequired: true,
              args: {
                name: "type",
                suggestions: ["host", "db"],
                default: "host",
              },
            },
          ],
        },
      ],
    },
    /* tctl get */
    {
      name: "get",
      description: "Get a resource",
      args: {
        name: "resource",
        description: "Resource to get",
        generators: teleportGetResourcesGenerator,
      },
      options: [
        teleportFormatOption,
        {
          name: "--with-secrets",
          description:
            "Include secrets in resources like certificate authorities or OIDC connectors",
        },
        {
          name: "--verbose",
          description: "Verbose table output, shows full label output",
        },
      ],
    },
    /* tctl status */
    {
      name: "status",
      description: "Report cluster status",
    },
    /* tctl top */
    {
      name: "top",
      description: "Report cluster status",
      args: [
        {
          name: "diag-address",
          description: "Diagnostic HTTP URL, default is http://127.0.0.1:3000",
        },
        {
          name: "refresh",
          description: "Refresh period",
        },
      ],
    },
    /* tctl requests */
    {
      name: ["requests", "request"],
      description: "Manage access requests",
      args: {},
      subcommands: [
        {
          name: "ls",
          description: "Show active access requests",
        },
        {
          name: "get",
          description: "Show access request details",
          args: {
            name: "request",
            description: "Access request ID",
            generators: teleportRequestGenerator,
          },
        },
        {
          name: "approve",
          description: "Approve pending access request",
          args: {
            name: "request",
            description: "Access request ID",
            generators: teleportRequestGenerator,
          },
        },
        {
          name: "deny",
          description: "Deny pending access request",
          args: {
            name: "request",
            description: "Access request ID",
            generators: teleportRequestGenerator,
          },
        },
        {
          name: "create",
          description: "Create pending access request",
          args: {
            name: "username",
            description: "Name of target user",
            generators: teleportAccountsGenerator,
          },
          options: [
            {
              name: "--roles",
              description: "Roles to be requested",
              args: {
                name: "roles",
                generators: teleportRolesGenerator,
              },
            },
            {
              name: "--reason",
              description: "Optional reason message",
            },
            {
              name: "--resource",
              description: "Resource ID to be requested",
              args: {
                name: "resource",
                generators: teleportGetResourcesGenerator,
              },
            },
            {
              name: "--dry-run",
              description: "Don't actually generate the access request",
            },
          ],
        },
        {
          name: "rm",
          description: "Delete an access request",
          options: [
            {
              name: ["--force", "-f"],
              description: "Force the deletion of an active access request",
            },
          ],
          args: {
            name: "request-id",
            description: "Access request ID",
            generators: teleportRequestGenerator,
          },
        },
        {
          name: "review",
          description: "Review an access request",
          options: [
            {
              name: "--author",
              description: "Username of reviewer",
              isRequired: true,
              args: {
                name: "author",
                generators: teleportAccountsGenerator,
              },
            },
            {
              name: "--approve",
              description: "Review proposes approval",
            },
            {
              name: "--deny",
              description: "Review proposes denial",
            },
          ],
          args: {
            name: "request-id",
            description: "Access request ID",
            generators: teleportRequestGenerator,
          },
        },
      ],
    },
    /* tctl apps */
    {
      name: "apps",
      description: "Operate on applications registered with the cluster",
      args: {},
      requiresSubcommand: true,
      subcommands: [
        {
          name: "ls",
          description: "List all applications registered with the cluster",
        },
      ],
    },
    /* tctl db */
    {
      name: "db",
      description: "Operate on databases registered with the cluster",
      args: {},
      requiresSubcommand: true,
      subcommands: [
        {
          name: "ls",
          description: "List all databases registered with the cluster",
        },
      ],
    },
    /* tctl kube */
    {
      name: "kube",
      description: "Operate on registered Kubernetes clusters",
      args: {},
      requiresSubcommand: true,
      subcommands: [
        {
          name: "ls",
          description:
            "List all Kubernetes clusters registered with the cluster",
        },
      ],
    },
    /* tctl windows_desktops */
    {
      name: "windows_desktops",
      description: "Operate on registered Windows desktops",
      args: {},
      requiresSubcommand: true,
      subcommands: [
        {
          name: "ls",
          description: "List all Windows desktops registered with the cluster",
        },
      ],
    },
    /* tctl proxy */
    {
      name: "proxy",
      description: "Operations with information for cluster proxies",
      args: {},
      requiresSubcommand: true,
      subcommands: [
        {
          name: "ls",
          description: "Lists proxies connected to the cluster",
          options: [teleportFormatOption],
        },
      ],
    },
    /* tctl rm */
    {
      name: ["rm", "del"],
      description: "Delete a resource",
      args: {
        name: "resource type/resource name",
        description: "Resource to delete",
        generators: teleportGetResourcesGenerator,
      },
    },
    /* tctl lock */
    {
      name: "lock",
      description: "Create a new lock",
      args: {},
      options: [
        {
          name: "--user",
          description: "Name of a Teleport user to disable",
          args: {
            name: "user",
            generators: teleportAccountsGenerator,
          },
        },
        {
          name: "--role",
          description: "Name of a Teleport role to disable",
          args: {
            name: "role",
            generators: teleportRolesGenerator,
          },
        },
        {
          name: "--login",
          description: "Name of a local UNIX user to disable",
        },
        {
          name: "--mfa-device",
          description: "UUID of a user MFA device to disable",
        },
        {
          name: "--windows-desktop",
          description: "Name of a Windows desktop to disable",
          args: {
            name: "desktop",
            generators: teleportWindowsDesktopGenerator,
          },
        },
        {
          name: "--access-request",
          description: "UUID of an access request to disable",
          args: {
            name: "request",
            generators: teleportRequestGenerator,
          },
        },
        {
          name: "--device",
          description: "UUID of a trusted device to disable",
        },
        {
          name: "--message",
          description: "Message to display to locked-out users",
        },
        {
          name: "--expires",
          description: "Time point (RFC3339) when the lock expires",
          args: {
            name: "yyyy-MM-ddThh:mm:ss.msZ",
            description: "Time point (RFC3339) when the lock expires",
          },
        },
        {
          name: "--ttl",
          description: "Time duration after which the lock expires",
          args: {
            name: "duration",
            description: "Time duration after which the lock expires",
          },
        },
        {
          name: "--server-id",
          description: "UUID of a Teleport server to disable",
        },
      ],
    },
    /* tctl bots */
    {
      name: "bots",
      description:
        "Operate on certificate renewal bots registered with the cluster",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "ls",
          description:
            "List all certificate renewal bots registered with the cluster",
        },
        {
          name: "add",
          description: "Add a new certificate renewal bot to the cluster",
          args: {
            name: "name",
            description: "A name to uniquely identify this bot in the cluster",
          },
          options: [
            {
              name: "--roles",
              description: "Roles the bot is able to assume",
              isRequired: true,
              args: {
                name: "roles",
                generators: teleportRolesGenerator,
              },
            },
            {
              name: "--ttl",
              description: "TTL for the bot join token",
            },
            {
              name: "--token",
              description: "Name of an existing token to use",
              args: {
                name: "token",
                generators: teleportTokenGenerator,
              },
            },
            {
              name: "--logins",
              description: "List of allowed SSH logins for the bot user",
            },
          ],
        },
        {
          name: "rm",
          description:
            "Permanently remove a certificate renewal bot from the cluster",
          args: {
            name: "name",
            description: "Name of an existing bot to remove",
            generators: teleportBotsGenerator,
          },
        },
      ],
    },
    /* tctl inventory */
    {
      name: "inventory",
      description: "Manage Teleport instance inventory",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "status",
          description: "Show inventory status summary",
          options: [
            {
              name: "--connected",
              description: "Show locally connected instances summary",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List Teleport instance inventory",
          options: [
            {
              name: "--older-than",
              description: "Filter for older teleport versions",
              args: {
                name: "version",
                description: "E.g. 13",
              },
            },
            {
              name: "--newer-than",
              description: "Filter for newer teleport versions",
              args: {
                name: "version",
                description: "E.g. 13",
              },
            },
            {
              name: "--exact-version",
              description: "Filter for exact teleport version",
              args: {
                name: "version",
                description: "E.g. 13",
              },
            },
            {
              name: "--services",
              description: "Filter output by service (node,kube,proxy,etc)",
              args: {
                name: "service",
                description: "E.g. node",
                suggestions: [
                  "node",
                  "kube",
                  "proxy",
                  "auth",
                  "app",
                  "db",
                  "windowsdesktop",
                ],
              },
            },
            {
              name: "--upgrader",
              description: "Filter output by upgrader (kube,unit,none)",
              args: {
                name: "upgrader",
                description: "E.g. kube",
                suggestions: ["kube", "unit", "none"],
              },
            },
          ],
        },
      ],
    },
    /* tctl recordings */
    {
      name: "recordings",
      description: "View and control session recordings",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "ls",
          description: "List recorded sessions",
        },
      ],
    },
    /* tctl alerts */
    {
      name: "alerts",
      description: "Manage cluster alerts",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "list",
          description: "List cluster alerts",
          options: [
            teleportFormatOption,
            {
              name: "--labels",
              description: "List of comma separated labels to filter by labels",
              args: {
                name: "label1=value1,label2=value2",
              },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Show detailed alert info, including acknowledged alerts",
            },
          ],
        },
        {
          name: "create",
          description: "Create cluster alerts",
          options: [
            {
              name: "--labels",
              description: "List of comma separated labels to filter by labels",
              args: {
                name: "label1=value1,label2=value2",
              },
            },
            {
              name: "--severity",
              description: "Severity of the alert (low, medium, or high)",
              args: {
                name: "severity",
                suggestions: ["low", "medium", "high"],
              },
            },
            {
              name: "--ttl",
              description:
                "Time duration after which the alert expires (default 24h)",
            },
          ],
          args: {
            name: "message",
            description: "Alert body message",
          },
        },
        {
          name: "ack",
          description: "Acknowledge cluster alerts",
          subcommands: [
            {
              name: "ls",
              description: "List acknowledged cluster alerts",
            },
          ],
          args: {
            name: "id",
            description: "The cluster alert ID",
            generators: teleportAlertGenerator,
          },
          options: [
            {
              name: "--reason",
              description: "The reason for acknowledging the cluster alert",
            },
            {
              name: "--ttl",
              description:
                "Time duration after which the alert expires (default 24h)",
            },
            {
              name: "--clear",
              description: "Clear the acknowledgment for the cluster alert",
            },
          ],
        },
      ],
    },
    /* tctl create */
    {
      name: "create",
      description: "Create or update a Teleport resource from a YAML file",
      args: {
        name: "filename",
        template: "filepaths",
      },
      options: [
        {
          name: ["--force", "-f"],
          description: "Overwrite the resource if already exists",
        },
      ],
    },
    /* tctl update */
    {
      name: "update",
      description: "Update resource fields",
      args: {
        name: "resource type/resource name",
        description: "Resource to update",
        generators: teleportGetResourcesGenerator,
      },
      options: [
        {
          name: "--set-labels",
          description: "Set labels",
        },
        {
          name: "--set-ttl",
          description: "Set TTL",
        },
      ],
    },
    /* tctl edit */
    {
      name: "edit",
      description: "Edit a Teleport resource",
      args: {
        name: "resource type/resource name",
        description: "Resource to edit",
        generators: teleportGetResourcesGenerator,
      },
    },
    /* tctl devices */
    {
      name: "devices",
      description: "Register and manage trusted devices",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "add",
          description: "Register managed devices",
          options: [
            {
              name: "--os",
              description: "Operating System",
              exclusiveOn: ["--current-device"],
            },
            {
              name: "--asset-tag",
              description:
                "Inventory identifier for the device (e.g., Mac serial number)",
              exclusiveOn: ["--current-device"],
            },
            {
              name: "--current-device",
              description:
                "Registers the current device. Overrides --os and --asset-tag",
              exclusiveOn: ["--os", "--asset-tag"],
            },
            {
              name: "--enroll",
              description: "If set, creates a device enrollment token",
            },
            {
              name: "--enroll-ttl",
              description: "Time duration for the enrollment token",
              dependsOn: ["--enroll"],
            },
          ],
        },
        {
          name: "ls",
          description: "Lists managed devices",
        },
        {
          name: "rm",
          description: "Removes a managed device",
          args: {
            name: "device",
            description: "Device ID",
            generators: teleportDeviceGenerator,
          },
        },
        {
          name: "enroll",
          description: "Creates a new device enrollment token",
          options: [
            {
              name: "--asset-tag",
              description:
                "Inventory identifier for the device (e.g., Mac serial number)",
              exclusiveOn: ["--current-device"],
            },
            {
              name: "--current-device",
              description:
                "Registers the current device. Overrides --os and --asset-tag",
              exclusiveOn: ["--os", "--asset-tag"],
            },
          ],
        },
        {
          name: "lock",
          description: "Locks a device",
          args: {
            name: "device",
            description: "Device ID",
            generators: teleportDeviceGenerator,
          },
        },
      ],
    },
    /* tctl saml */
    {
      name: "saml",
      description: "Operations on SAML auth connectors",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "export",
          description: "Export a SAML signing key in .crt format",
          args: {
            name: "connector_name",
            description: "Name of the SAML connector to export the key from",
            generators: teleportSAMLConnectorGenerator,
          },
        },
      ],
    },
    /* tctl acl */
    {
      name: ["acl", "access-lists"],
      description: "Manage access lists",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "ls",
          description: "List cluster access lists",
        },
        {
          name: "get",
          description: "Get detailed information for an access list",
          args: {
            name: "access list",
            description: "Access list name",
            generators: teleportACLGenerator,
          },
        },
        {
          name: "users",
          description: "Manage user membership to access lists",
          requiresSubcommand: true,
          subcommands: [
            {
              name: "add",
              description: "Add a user to an access list",
              args: [
                {
                  name: "access-list-name",
                  description: "The access list name",
                  generators: teleportACLGenerator,
                },
                {
                  name: "user",
                  description: "The user name",
                  generators: teleportAccountsGenerator,
                },
                {
                  name: "expires",
                  description:
                    "When the user's access expires (must be in RFC3339). Defaults to the expiration time of the access list",
                  isOptional: true,
                },
                {
                  name: "reason",
                  description:
                    "The reason the user has been added to the access list. Defaults to empty",
                  isOptional: true,
                },
              ],
            },
            {
              name: "rm",
              description: "Remove a user from an access list",
              args: [
                {
                  name: "access-list-name",
                  description: "The access list name",
                  generators: teleportACLGenerator,
                },
                {
                  name: "user",
                  description: "The user name",
                  generators: teleportAccountsGenerator,
                },
              ],
            },
            {
              name: "ls",
              description: "List users that are members of an access list",
              args: {
                name: "access list",
                description: "Access list name",
                generators: teleportACLGenerator,
              },
            },
          ],
        },
      ],
    },
    /* tctl login_rule */
    {
      name: "login_rule",
      description: "Test login rules",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "test",
          description: "Test the parsing and evaluation of login rules",
        },
      ],
    },
    /* tctl sso */
    {
      name: "sso",
      description:
        "A family of commands for configuring and testing auth connectors (SSO)",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "configure",
          description: "Create auth connector configuration",
          requiresSubcommand: true,
          subcommands: [
            {
              name: "github",
              description: "Configure GitHub auth connector",
              options: [
                {
                  name: "--name",
                  description: "Connector name",
                },
                {
                  name: "--teams-to-roles",
                  description:
                    "Sets teams-to-roles mapping using format 'organization,name,role1,role2,...'. Repeatable",
                  args: {
                    name: "teams-to-roles",
                  },
                },
                {
                  name: "--display",
                  description: "Sets the connector display name",
                },
                {
                  name: "--id",
                  description: "GitHub app client ID",
                },
                {
                  name: "--secret",
                  description: "GitHub app client secret",
                },
                {
                  name: "--endpoint-url",
                  description: "Endpoint URL for GitHub instance",
                },
                {
                  name: "--api-endpoint-url",
                  description: "API endpoint URL for GitHub instance",
                },
                {
                  name: "--redirect-url",
                  description: "Authorization callback URL",
                },
                {
                  name: "--ignore-missing-roles",
                  description:
                    "Ignore missing roles referenced in --teams-to-roles",
                  dependsOn: ["--teams-to-roles"],
                },
              ],
            },
          ],
        },
        {
          name: "test",
          description:
            "Perform end-to-end test of SSO flow using provided auth connector definition",
          args: {
            name: "filename",
            description:
              "Connector resource definition filename. Empty for stdin",
            isOptional: true,
            template: "filepaths",
          },
        },
      ],
    },
    /* tctl version */
    {
      name: "version",
      description: "Print the version of your tctl binary",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["--debug", "-d"],
      description: "Enable verbose logging to stderr",
      isPersistent: true,
    },
    {
      name: ["--config", "-c"],
      description: "Path to a configuration file [/etc/teleport.yaml]",
      isPersistent: true,
      args: {
        name: "config",
        template: "filepaths",
      },
    },
    {
      name: "--auth-server",
      description: "Attempts to connect to specific auth/proxy address(es)",
      isPersistent: true,
      args: {
        name: "auth-server",
      },
    },
    {
      name: ["--identity", "-i"],
      description: "Path to an identity file",
      isPersistent: true,
      args: {
        name: "identity",
        template: "filepaths",
      },
    },
    {
      name: "--insecure",
      description:
        "When specifying a proxy address in --auth-server, do not verify its TLS certificate",
      isPersistent: true,
    },
  ],
  // Only uncomment if tctl takes an argument
  // args: {}
};
export default completionSpec;
