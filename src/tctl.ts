// Barebones Teleport resource definitions, ensuring type safety and autocomplete
type GenericResource = {
  kind?: string;
  metadata: {
    name: string;
    description: string;
  };
};

type Node = {
  spec: {
    hostname: string;
  };
} & GenericResource;

enum AccessRequestState {
  "NONE",
  "PENDING",
  "DENIED",
  "APPROVED",
}

type AccessRequest = {
  spec: {
    user: string;
    roles: string[];
    request_reason: string;
    state: number;
  };
} & GenericResource;

type User = {
  spec: {
    created_by: {
      time: string;
      user: {
        name: string;
      };
    };
    status: {
      is_locked: boolean;
      lock_expires: string;
    };
  };
} & GenericResource;

type Lock = {
  spec: {
    target: {
      user: string;
    };
    created_by: string;
    expires: string;
  };
} & GenericResource;

type Role = object & GenericResource;

type Token = object & GenericResource;

type Bot = object & GenericResource;

type ACL = object & GenericResource;

type Alert = object & GenericResource;

type Namespace = object & GenericResource;

type Cluster = {
  kube_cluster_name: string;
};

const commaQueryTerm = (curr) => {
  return curr.split(",").pop();
};

// Prefix is used as sometimes Teleport wants the "type" with the request, e.g. tctl get user/USERNAME (user is the prefix here)
const resourcePostProcesserBuilder = (prefix: string = "") => {
  return (out: string, tokens: string[]): Fig.Suggestion[] => {
    const resources = JSON.parse(out);

    const postProcesser = resources
      .map((resource: GenericResource): Fig.Suggestion => {
        if (resource.kind === "node") {
          const node = resource as Node;

          return {
            name: `${prefix}${node.spec.hostname}`,

            // If there is a resource prefix, we do not need to use the UID (name) because its already unique
            insertValue: prefix
              ? `${prefix}${node.spec.hostname}`
              : node.metadata.name,

            description: "Inserts UUID: " + node.metadata.name,
            priority: 65,
          };
        }

        if (resource.kind === "lock") {
          const lock = resource as Lock;

          return {
            name: `${resource.kind}/${lock.metadata.name}`,
            description: "Created by: " + lock.spec.created_by,
            priority: 65,
          };
        }

        if (resource.kind === "access_request") {
          const request = resource as AccessRequest;

          return {
            name: `${prefix}${AccessRequestState[request.spec.state]} ${
              request.spec.user
            }`,
            insertValue: request.metadata.name,
            description: `Requests: ${request.spec.roles.join(", ")}`,
            priority: 76,
          };
        }

        if (resource.kind === "user") {
          const user = resource as User;
          const locked = user.spec.status.is_locked;
          const lockedExpires = user.spec.status.lock_expires;

          let description = locked
            ? `User locked until ${lockedExpires}`
            : user.metadata.description;

          if (!description) {
            const created = new Date(
              user.spec.created_by.time
            ).toLocaleDateString();
            const creator = user.spec.created_by.user.name;

            description = `${creator} created this user on ${created}`;
          }

          return {
            name: `${prefix}${user.metadata.name}`,
            icon: locked
              ? "fig://icon?type=box&=FF0000&badge=🚫"
              : "fig://icon?type=box",
            description,
            priority: 65,
          };
        }

        return {
          name: `${prefix}${resource.metadata.name}`,
          description: resource.metadata.description,
          priority: 65,
        };
      })
      .filter((suggestion: Fig.Suggestion) => {
        // The last token always contains the resources
        const lastToken = tokens[tokens.length - 1];

        // We remove the resources that we are already listing, this wont impact single resource selection options
        return !lastToken.includes(suggestion.name.toString());
      });

    return postProcesser;
  };
};

const tctlGetGenerator = (
  resource: string,
  canBeMultiple: boolean = false
): Fig.Generator => {
  return {
    script: `tctl get ${resource} --format json`,
    getQueryTerm: canBeMultiple ? commaQueryTerm : undefined,
    postProcess: resourcePostProcesserBuilder(),
  };
};

const tshListGenerator = (resource: string): Fig.Generator => {
  return {
    script: `tsh ${resource} ls --format json`,
    postProcess: resourcePostProcesserBuilder(),
  };
};

const teleportGenerators: Record<string, Fig.Generator> = {
  yamlFiles: {
    template: "filepaths",
    // Only show YAML files and directories
    filterTemplateSuggestions: function (paths) {
      return paths.filter(
        (file) =>
          file.name.endsWith("/") ||
          file.name.endsWith(".yaml") ||
          file.name.endsWith(".yml")
      );
    },
  },

  // Shorthand suggestion generators
  role: tctlGetGenerator("roles"),
  roles: tctlGetGenerator("roles", true),
  user: tctlGetGenerator("user"),
  windows_desktop: tctlGetGenerator("windows_desktop"),
  node: tctlGetGenerator("node"),
  device: tctlGetGenerator("device"),
  connector: tctlGetGenerator("connector"),
  kube: tshListGenerator("kube"),
  apps: tshListGenerator("apps"),
  db: tshListGenerator("db"),
  request: tshListGenerator("request"),
  tokens: tshListGenerator("tokens"),
};

const teleportOptions: Record<string, Fig.Option> = {
  ttl: {
    name: "--ttl",
    description: "Set the time to live, default is 1h0m0s, maximum is 48h0m0s",
    args: {
      name: "10h10m10s",
      description: "Relative duration like 5s, can be chained like 1h10m10s",
    },
  },

  format: {
    name: "--format",
    description: "Output format. One of: [text, json, yaml]",
    args: {
      name: "format",
      suggestions: ["text", "json", "yaml"],
      default: "yaml",
    },
  },

  labels: {
    name: "--labels",
    description: "Which labels to add to the resource",
    args: {
      name: "label1=value1,label2=value2",
    },
  },

  reason: {
    name: "--reason",
    description: "Optional reason message",
    insertValue: "--reason '{cursor}'",
    args: {
      name: "reason",
    },
  },

  roles: {
    name: "--roles",
    description: "Comma seperated list of roles",
    args: {
      name: "role1,role2",
      generators: teleportGenerators.roles,
    },
  },

  logins: {
    name: "--logins",
    description: "List of allowed SSH logins",
    args: {
      name: "login1,login2",
    },
  },
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

const teleportGetResourcesGenerator: Fig.Generator = {
  trigger: (current, old) => {
    return current.lastIndexOf("/") > old.lastIndexOf("/");
  },
  custom: async (tokens, executeShellCommand): Promise<Fig.Suggestion[]> => {
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
        priority: 100,
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

      // Only show suggestions for resources that are supported by tctl
      if (standardSuggestions.find((sug) => sug === resource) == undefined)
        return respondSuggestions;

      if (["cluster_auth_preference", "all"].includes(resource)) return []; // This is what tctl expects

      const resources = await executeShellCommand(
        `tctl get ${resource} --format json`
      );

      const parsedResources = JSON.parse(resources);

      let parsedLocks: Lock[] = [];

      if (["lock", "user"].includes(resource)) {
        const locks = await executeShellCommand(`tctl get locks --format json`);
        parsedLocks = JSON.parse(locks);
      }

      const postProcessResource = resourcePostProcesserBuilder(`${resource}/`);

      if (resource === "user") {
        const users = parsedResources as User[];

        users.forEach((user) => {
          parsedLocks.find((lock) => {
            if (lock.spec.target.user === user.metadata.name) {
              user.spec.status.is_locked = true;
              user.spec.status.lock_expires = lock.spec.expires;
            }
          });
        });

        return postProcessResource(JSON.stringify(users), tokens);
      }

      return postProcessResource(JSON.stringify(parsedResources), tokens);
    }

    return respondSuggestions;
  },
};

const completionSpec: Fig.Spec = {
  name: "tctl",
  description: "Admin tool for the Teleport Access Platform",
  args: {},
  requiresSubcommand: true,
  subcommands: [
    /* tctl help */
    {
      name: "help",
      description: "Show help",
      priority: 100,
    },
    /* tctl users */
    {
      name: "users",
      description: "Manage user accounts",
      requiresSubcommand: true,
      args: {},
      priority: 100,
      subcommands: [
        {
          name: "add",
          description: "Add a new user",
          args: {
            name: "account",
            description: "Teleport user account name",
          },
          options: [
            teleportOptions.ttl,
            teleportOptions.roles,
            teleportOptions.logins,
            {
              name: "--windows-logins",
              description: "List of allowed Windows logins for the new user",
              args: {
                name: "login1,login2",
              },
            },
            {
              name: "--kubernetes-users",
              description: "List of allowed Kubernetes users for the new user",
              args: {
                name: "value1,value2",
              },
            },
            {
              name: "--kubernetes-groups",
              description: "List of allowed Kubernetes groups for the new user",
              args: {
                name: "group1,group2",
              },
            },
            {
              name: "--db-users",
              description: "List of allowed database users for the new user",
              args: {
                name: "user1,user2",
              },
            },
            {
              name: "--db-names",
              description: "List of allowed database names for the new user",
              args: {
                name: "value1,value2",
              },
            },
            {
              name: "--db-roles",
              description:
                "List of database roles for automatic database user provisioning",
              args: {
                name: "name1,name2",
              },
            },
            {
              name: "--aws-role-arns",
              description: "List of allowed AWS role ARNs for the new user",
              args: {
                name: "value1,value2",
              },
            },
            {
              name: "--azure-identities",
              description: "List of allowed Azure identities for the new user",
              args: {
                name: "identity1,identity2",
              },
            },
            {
              name: "--gcp-service-accounts",
              description:
                "List of allowed GCP service accounts for the new user",
              args: {
                name: "account1,account2",
              },
            },
            {
              name: "--host-user-uid",
              description: "UID for auto provisioned host users to use",
              args: {
                name: "user-id",
              },
            },
            {
              name: "--host-user-gid",
              description: "GID for auto provisioned host users to use",
              args: {
                name: "group-id",
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
                "List of roles for the user to assume, replaces current roles",
              args: {
                name: "role1,role2",
                generators: teleportGenerators.roles,
              },
            },
            {
              name: "--set-logins",
              description:
                "List of allowed SSH logins for the user, replaces current logins",
              args: {
                name: "value1,value2",
              },
            },
            {
              name: "--set-windows-logins",
              description:
                "List of allowed Windows logins for the user, replaces current Windows logins",
              args: {
                name: "value1,value2",
              },
            },
            {
              name: "--set-kubernetes-users",
              description:
                "List of allowed Kubernetes users for the user, replaces current Kubernetes users",
              args: {
                name: "value1,value2",
              },
            },
            {
              name: "--set-kubernetes-groups",
              description:
                "List of allowed Kubernetes groups for the user, replaces current Kubernetes groups",
              args: {
                name: "value1,value2",
              },
            },
            {
              name: "--set-db-users",
              description:
                "List of allowed database users for the user, replaces current database users",
              args: {
                name: "value1,value2",
              },
            },
            {
              name: "--set-db-names",
              description:
                "List of allowed database names for the user, replaces current database names",
              args: {
                name: "value1,value2",
              },
            },
            {
              name: "--set-db-roles",
              description:
                "List of allowed database roles for automatic database user provisioning, replaces current database roles",
              args: {
                name: "value1,value2",
              },
            },
            {
              name: "--set-aws-role-arns",
              description:
                "List of allowed AWS role ARNs for the user, replaces current AWS role ARNs",
              args: {
                name: "value1,value2",
              },
            },
            {
              name: "--set-azure-identities",
              description:
                "List of allowed Azure identities for the user, replaces current Azure identities",
              args: {
                name: "value1,value2",
              },
            },
            {
              name: "--set-gcp-service-accounts",
              description:
                "List of allowed GCP service accounts for the user, replaces current service accounts",
              args: {
                name: "value1,value2",
              },
            },
            {
              name: "--set-host-user-uid",
              description:
                "UID for auto provisioned host users to use. Value can be reset by providing an empty string",
              args: {
                name: "user-id",
              },
            },
            {
              name: "--set-host-user-gid",
              description:
                "GID for auto provisioned host users to use. Value can be reset by providing an empty string",
              args: {
                name: "group-id",
              },
            },
          ],
          args: {
            name: "account",
            description: "Teleport user account name",
            generators: teleportGenerators.user,
          },
        },
        {
          name: "ls",
          description: "Lists all user accounts",
          options: [teleportOptions.format],
        },
        {
          name: "rm",
          description: "Remove user account",
          args: {
            name: "account",
            description: "Teleport user account name",
            isVariadic: true,
            generators: teleportGenerators.user,
          },
        },
        {
          name: "reset",
          description:
            "Reset user password and generate a new token [Teleport DB users only]",
          args: {
            name: "account",
            description: "Teleport user account name",
            generators: teleportGenerators.user,
          },
        },
      ],
    },
    /* tctl nodes */
    {
      name: "nodes",
      priority: 100,
      description: "Issue invites for other nodes to join the cluster",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "add",
          description: "Generate a node invitation token",
          args: {},
          options: [
            teleportOptions.ttl,
            {
              name: "--roles",
              description:
                "Comma-separated list of roles for the new node to assume",
              args: {
                name: "role1,role2",
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
          ],
        },
        {
          name: "ls",
          description: "List all active SSH nodes within the cluster",
          options: [
            teleportOptions.format,
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
      priority: 100,
      description: "Manage invitation tokens",
      requiresSubcommand: true,
      args: {},
      subcommands: [
        {
          name: "add",
          description: "Create a invitation token",
          args: {},
          options: [
            teleportOptions.format,
            teleportOptions.ttl,
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
          options: [teleportOptions.format],
        },
      ],
    },
    /* tctl auth */
    {
      name: "auth",
      description:
        "Operations with user and host certificate authorities (CAs)",
      priority: 100,
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
              args: {
                name: "fingerprint",
              },
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
              priority: 100,
              isRequired: true,
              args: {
                name: "user",
                generators: teleportGenerators.user,
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
              priority: 99,
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
              ...teleportOptions.ttl,
              description: "TTL (time to live) for the generated certificate",
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
                generators: {
                  ...teleportGenerators.kube,
                  postProcess: function (out) {
                    const clusters = JSON.parse(out);

                    return clusters.map((cluster: Cluster) => {
                      return {
                        name: cluster.kube_cluster_name,
                        description: "Kubernetes cluster connected to Teleport",
                      };
                    });
                  },
                },
              },
            },
            {
              name: "--app-name",
              description:
                'Application to generate identity file for. Mutually exclusive with "--db-service"',
              exclusiveOn: ["--db-service"],
              args: {
                name: "name",
                generators: teleportGenerators.apps,
              },
            },
            {
              name: "--db-service",
              description:
                'Database to generate identity file for. Mutually exclusive with "--app-name"',
              exclusiveOn: ["--app-name"],
              args: {
                name: "service",
                generators: teleportGenerators.db,
              },
            },
            {
              name: "--db-user",
              description:
                'Database user placed on the identity file. Only used when "--db-service" is set',
              dependsOn: ["--db-service"],
              args: {
                name: "user",
              },
            },
            {
              name: "--db-name",
              description:
                'Database name placed on the identity file. Only used when "--db-service" is set',
              dependsOn: ["--db-service"],
              args: {
                name: "name",
              },
            },
            {
              name: "--windows-user",
              description:
                'Window user placed on the identity file. Only used when --format is set to "windows"',
              args: {
                name: "user",
              },
            },
            {
              name: "--windows-domain",
              description:
                'Active Directory domain for which this cert is valid. Only used when --format is set to "windows"',
              args: {
                name: "domain",
              },
            },
            {
              name: "--windows-sid",
              description:
                'Optional Security Identifier to embed in the certificate. Only used when --format is set to "windows"',
              args: {
                name: "security-id",
              },
            },
          ],
        },
        {
          name: "rotate",
          description: "Rotate certificate authorities in the cluster",
          args: {},
          isDangerous: true,
          options: [
            {
              ...teleportOptions.ttl,
              name: "--grace-period",
              description: "Grace period keeps previous CA valid",
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
          options: [teleportOptions.format],
        },
        {
          name: "crl",
          description:
            "Export empty certificate revocation list (CRL) for certificate authorities",
          args: {},
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
      priority: 100,
      args: {
        name: "type/name",
        description: "Resource to get (e.g. user/bob)",
        generators: teleportGetResourcesGenerator,
      },
      options: [
        teleportOptions.format,
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
      priority: 100,
    },
    /* tctl top */
    {
      name: "top",
      description: "Report cluster status",
      priority: 100,
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
      priority: 100,
      subcommands: [
        {
          name: "ls",
          description: "Show active access requests",
          options: [teleportOptions.format],
        },
        {
          name: "get",
          description: "Show access request details",
          args: {
            name: "request",
            description: "Access request ID",
            generators: teleportGenerators.request,
          },
          options: [teleportOptions.format],
        },
        {
          name: "approve",
          description: "Approve pending access request",
          args: {
            name: "request",
            description: "Access request ID",
            generators: teleportGenerators.request,
          },
        },
        {
          name: "deny",
          description: "Deny pending access request",
          args: {
            name: "request",
            description: "Access request ID",
            generators: teleportGenerators.request,
          },
        },
        {
          name: "create",
          description: "Create pending access request",
          args: {
            name: "username",
            description: "Name of target user",
            generators: teleportGenerators.user,
          },
          options: [
            teleportOptions.reason,
            teleportOptions.roles,
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
            generators: teleportGenerators.request,
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
                generators: teleportGenerators.user,
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
            generators: teleportGenerators.request,
          },
        },
      ],
    },
    /* tctl apps */
    {
      name: "apps",
      description: "Operate on applications registered with the cluster",
      requiresSubcommand: true,
      priority: 100,
      subcommands: [
        {
          name: "ls",
          description: "List all applications registered with the cluster",
          options: [teleportOptions.format],
        },
      ],
    },
    /* tctl db */
    {
      name: "db",
      description: "Operate on databases registered with the cluster",
      requiresSubcommand: true,
      priority: 100,
      subcommands: [
        {
          name: "ls",
          description: "List all databases registered with the cluster",
          options: [teleportOptions.format],
        },
      ],
    },
    /* tctl kube */
    {
      name: "kube",
      description: "Operate on registered Kubernetes clusters",
      requiresSubcommand: true,
      priority: 100,
      subcommands: [
        {
          name: "ls",
          description:
            "List all Kubernetes clusters registered with the cluster",
          options: [teleportOptions.format],
        },
      ],
    },
    /* tctl windows_desktops */
    {
      name: "windows_desktops",
      description: "Operate on registered Windows desktops",
      requiresSubcommand: true,
      priority: 100,
      subcommands: [
        {
          name: "ls",
          description: "List all Windows desktops registered with the cluster",
          options: [teleportOptions.format],
        },
      ],
    },
    /* tctl proxy */
    {
      name: "proxy",
      description: "Operations with information for cluster proxies",
      requiresSubcommand: true,
      priority: 100,
      subcommands: [
        {
          name: "ls",
          description: "Lists proxies connected to the cluster",
          options: [teleportOptions.format],
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
      priority: 100,
      options: [
        {
          name: "--user",
          description: "Name of a Teleport user to disable",
          args: {
            name: "user",
            generators: teleportGenerators.user,
          },
        },
        {
          name: "--role",
          description: "Name of a Teleport role to disable",
          args: {
            name: "role",
            generators: teleportGenerators.role,
          },
        },
        {
          name: "--login",
          description: "Name of a local UNIX user to disable",
          args: {
            name: "login",
          },
        },
        {
          name: "--mfa-device",
          description: "UUID of a user MFA device to disable",
          args: {
            name: "device",
          },
        },
        {
          name: "--windows-desktop",
          description: "Name of a Windows desktop to disable",
          args: {
            name: "desktop",
            generators: teleportGenerators.windows_desktop,
          },
        },
        {
          name: "--access-request",
          description: "UUID of an access request to disable",
          args: {
            name: "request",
            generators: teleportGenerators.request,
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
          ...teleportOptions.ttl,
          description: "Time duration after which the lock expires",
        },
        {
          name: "--server-id",
          description: "UUID of a Teleport server to disable",
          args: {
            name: "server-uuid",
            generators: teleportGenerators.node,
          },
        },
      ],
    },
    /* tctl bots */
    {
      name: "bots",
      description:
        "Operate on certificate renewal bots registered with the cluster",
      requiresSubcommand: true,
      args: {},
      priority: 100,
      subcommands: [
        {
          name: "ls",
          description:
            "List all certificate renewal bots registered with the cluster",
          options: [teleportOptions.format],
        },
        {
          name: "add",
          description: "Add a new certificate renewal bot to the cluster",
          args: {
            name: "name",
            description: "A name to uniquely identify this bot in the cluster",
            generators: {
              ...teleportBotsGenerator,
              postProcess: function (out) {
                const bots = JSON.parse(out);
                return bots.map((bot: Bot) => {
                  return {
                    name: bot.metadata.name.slice(4),
                    description: "A bot with this name already exists",
                  };
                });
              },
            },
          },
          options: [
            teleportOptions.ttl,
            teleportOptions.roles,
            teleportOptions.logins,
            {
              name: "--token",
              description: "Name of an existing token to use",
              args: {
                name: "token",
                generators: teleportGenerators.tokens,
              },
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
      priority: 100,
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
      priority: 100,
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
      args: {},
      priority: 100,
      subcommands: [
        {
          name: "list",
          description: "List cluster alerts",
          options: [
            teleportOptions.format,
            {
              name: "--labels",
              description: "Filter by labels",
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
              description: "Which labels should this alert have",
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
              ...teleportOptions.ttl,
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
            ...[teleportOptions.reason],
            {
              ...teleportOptions.ttl,
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
      priority: 100,
      args: {
        name: "filename",
        generators: teleportGenerators.yamlFiles,
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
      priority: 100,
      args: {
        name: "resource type/resource name",
        description: "Resource to update",
        generators: teleportGetResourcesGenerator,
      },
      options: [
        {
          name: "--set-labels",
          description: "Replace labels",
          args: {
            name: "label1=value1,label2=value2",
          },
        },
        {
          ...teleportOptions.ttl,
          name: "--set-ttl",
          description: "Replace TTL",
        },
      ],
    },
    /* tctl edit */
    {
      name: "edit",
      description: "Edit a Teleport resource",
      priority: 100,
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
      priority: 100,
      requiresSubcommand: true,
      args: {},
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
            generators: teleportGenerators.device,
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
            generators: teleportGenerators.device,
          },
        },
      ],
    },
    /* tctl saml */
    {
      name: "saml",
      description: "Operations on SAML auth connectors",
      requiresSubcommand: true,
      priority: 100,
      args: {},
      subcommands: [
        {
          name: "export",
          description: "Export a SAML signing key in .crt format",
          args: {
            name: "connector_name",
            isOptional: true,
            description: "Name of the SAML connector to export the key from",
            generators: teleportGenerators.connector,
          },
        },
      ],
    },
    /* tctl acl */
    {
      name: ["acl", "access-lists"],
      description: "Manage access lists",
      requiresSubcommand: true,
      priority: 100,
      args: {},
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
                  generators: teleportGenerators.user,
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
                  generators: teleportGenerators.user,
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
      priority: 100,
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
      priority: 100,
      args: {},
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
                  args: {
                    name: "name",
                  },
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
                  args: {
                    name: "display-name",
                  },
                },
                {
                  name: "--id",
                  description: "GitHub app client ID",
                  args: {
                    name: "id",
                  },
                },
                {
                  name: "--secret",
                  description: "GitHub app client secret",
                  args: {
                    name: "secret",
                  },
                },
                {
                  name: "--endpoint-url",
                  description: "Endpoint URL for GitHub instance",
                  args: {
                    name: "endpoint-url",
                  },
                },
                {
                  name: "--api-endpoint-url",
                  description: "API endpoint URL for GitHub instance",
                  args: {
                    name: "api-endpoint-url",
                  },
                },
                {
                  name: "--redirect-url",
                  description: "Authorization callback URL",
                  args: {
                    name: "redirect-url",
                  },
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
            generators: teleportGenerators.yamlFiles,
          },
        },
      ],
    },
    /* tctl version */
    {
      name: "version",
      priority: 100,
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
        generators: teleportGenerators.yamlFiles,
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
