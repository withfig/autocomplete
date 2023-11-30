const icon =
  "data:image/png;base64,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";

interface Account {
  url: string;
  email: string;
  user_uuid: string;
  account_uuid: string;
}

const suggestAccounts: Fig.Generator = {
  script: ["op", "account", "list", "--format", "json"],
  postProcess: (out) => {
    const json = JSON.parse(out) as Account[];
    return json.map((account) => ({
      name: account.email,
      description: account.url,
      insertValue: account.account_uuid,
      icon,
    }));
  },
};

const spec: Fig.Spec = {
  name: "op",
  description: "Official 1Password CLI",
  icon,
  subcommands: [
    {
      name: "account",
      description: "Manage your locally configured 1Password accounts",
      icon,
      subcommands: [
        {
          name: "add",
          description: "Add an account to sign in to for the first time",
          options: [
            {
              name: "--address",
              description: "The sign-in address for your account",
              args: {
                name: "string",
              },
            },
            {
              name: "--email",
              description: "The email address associated with your account",
              args: {
                name: "string",
              },
            },
            {
              name: "--raw",
              description: "Only return the session token",
            },
            {
              name: "--shorthand",
              description: "Set the short account name",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "get",
          description: "Get details about your account",
        },
        {
          name: ["list", "ls"],
          description: "List users and accounts set up on this device",
        },
        {
          name: "forget",
          description: "Remove a 1Password account from this device",
          options: [
            {
              name: "--all",
              description: "Forget all authenticated accounts",
            },
          ],
          args: {
            name: "account",
          },
        },
      ],
    },
    {
      name: "connect",
      description:
        "Manage Connect instances and Connect tokens in your 1Password account",
      icon,
      subcommands: [
        {
          name: "group",
          description: "Manage group access to Secrets Automation",
          subcommands: [
            {
              description: "Grant a group access to manage Secrets Automation",
              name: "grant",
              options: [
                {
                  name: "--all-servers",
                  description:
                    "Grant access to all current and future servers in the authenticated account",
                },
                {
                  name: "--group",
                  description: "The group to receive access",
                  args: {
                    name: "group",
                  },
                },
              ],
            },
            {
              name: "revoke",
              description:
                "Revoke a group's access to manage Secrets Automation",
              options: [
                {
                  name: "--all-servers",
                  description:
                    "Revoke access to all current and future servers in the authenticated account",
                },
                {
                  name: "--group",
                  description: "The group to revoke access from",
                  args: {
                    name: "group",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "server",
          description: "Manage Connect servers",
          subcommands: [
            {
              name: "create",
              description: "Set up a Connect server",
            },
            {
              name: "get",
              description: "Get a Connect server",
              args: {
                name: "serverName | serverID",
                suggestions: [
                  { name: "-", description: "Read from stdin", hidden: true },
                ],
              },
            },
            {
              description: "Rename a Connect server",
              name: "edit",
              args: {
                name: "serverName | serverID",
              },
            },
            {
              description: "Remove a Connect server",
              name: ["delete", "remove", "rm"],
              args: {
                name: "serverName | serverID",
                suggestions: [
                  { name: "-", description: "Read from stdin", hidden: true },
                ],
              },
            },
            {
              description: "List Connect servers",
              name: ["list", "ls"],
            },
          ],
        },
        {
          name: "token",
          description: "Manage Connect tokens",
          subcommands: [
            {
              description: "Issue a token for a 1Password Connect server",
              name: "create",
              options: [
                {
                  name: "--expires-in",
                  description:
                    "Set how long the Connect token is valid for in (s)econds, (m)inutes, or (h)ours",
                  args: {
                    name: "duration",
                  },
                },
                {
                  name: "--server",
                  description: "Issue a token for this server",
                  args: {
                    name: "string",
                  },
                },
              ],
            },
            {
              description: "Rename a Connect token",
              name: "edit",
              options: [
                {
                  name: "--name",
                  description: "Change the token's name",
                  args: {
                    name: "string",
                  },
                },
              ],
            },
            {
              description: "Revoke a token for a Connect server",
              name: ["delete", "remove", "rm"],
              args: {
                name: "token",
              },
            },
            {
              description: "Get a list of tokens",
              name: ["list", "ls"],
            },
          ],
        },
        {
          name: "vault",
          description: "Manage connect server vault access",
          subcommands: [
            {
              description: "Grant a Connect server access to a vault",
              name: "grant",
              options: [
                {
                  name: "--server",
                  description: "The server to be granted access",
                  args: {
                    name: "string",
                  },
                },
              ],
            },
            {
              description: "Revoke a Connect server's access to a vault",
              name: "revoke",
              options: [
                {
                  name: "--server",
                  description: "The server to revoke access from",
                  args: {
                    name: "server",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "document",
      description: "Perform CRUD operations on Document items in your vaults",
      icon,
      subcommands: [
        {
          name: "create",
          description: "Create a document item",
          options: [
            {
              name: "--file-name",
              description: "Set the file's name",
              args: {
                name: "name",
              },
            },
            {
              name: "--tags",
              description:
                "Set the tags to the specified (comma-separated) values",
              args: {
                name: "tags",
              },
            },
            {
              name: "--title",
              description: "Set the document item's title",
              args: {
                name: "title",
              },
            },
          ],
          args: {
            name: "file",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: "get",
          description: "Download a document",
          options: [
            {
              name: "--include-archive",
              description:
                "Include document items in the Archive. Can also be set using OP_INCLUDE_ARCHIVE environment variable",
            },
            {
              name: "--output",
              description:
                "Save the document to the file path instead of stdout",
              args: {
                name: "path",
              },
            },
          ],
          args: {
            name: "itemName | itemID",
          },
        },
        {
          name: "edit",
          description: "Edit a document item",
          options: [
            {
              name: "--file-name",
              description: "Set the file's name",
              args: {
                name: "name",
              },
            },
            {
              name: "--tags",
              description:
                "Set the tags to the specified (comma-separated) values. An empty value will remove all tags",
              args: {
                name: "tags",
              },
            },
            {
              name: "--title",
              description: "Set the document item's title",
              args: {
                name: "title",
              },
            },
          ],
          args: [
            {
              name: "itemName | itemID",
            },
            {
              name: "file",
              suggestions: [
                { name: "-", description: "Read from stdin", hidden: true },
              ],
            },
          ],
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Delete or archive a document item",
          options: [
            {
              name: "--archive",
              description: "Move the document to the Archive",
            },
          ],
          args: {
            name: "itemName | itemID",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: ["list", "ls"],
          description: "Get a list of documents",
          options: [
            {
              name: "--include-archive",
              description:
                "Include document items in the Archive. Can also be set using OP_INCLUDE_ARCHIVE environment variable",
            },
          ],
        },
      ],
    },
    {
      name: "events-api",
      description: "Manage Events API integrations in your 1Password account",
      icon,
      subcommands: [
        {
          name: "create",
          description: "Set up an integration with the Events API",
        },
      ],
    },
    {
      name: "group",
      description:
        "Perform CRUD operations on the groups of users in your 1Password account",
      icon,
      subcommands: [
        {
          name: "user",
          description: "Manage users in groups",
          subcommands: [
            {
              description: "Grant a user access to a group",
              name: "grant",
              options: [
                {
                  name: "--group",
                  description: "Specify the group to grant the user access to",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--role",
                  description:
                    "Specify the user's role as a member or manager. Default: member",
                  args: {
                    name: "string",
                  },
                },
              ],
            },
            {
              description: "Revoke a user's access to a vault or group",
              name: "revoke",
              options: [
                {
                  name: "--group",
                  description:
                    "Specify the group to revoke the user's access to",
                  args: {
                    name: "string",
                  },
                },
              ],
            },
            {
              description: "Retrieve users that belong to a group",
              name: ["list", "ls"],
            },
          ],
        },
        {
          name: "create",
          description: "Create a group",
          options: [
            {
              name: "--description",
              description: "Set the group's description",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "get",
          description: "Get details about a group",
          args: {
            name: "groupName | groupID",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: "edit",
          description: "Edit a group's name or description",
          options: [
            {
              name: "--description",
              description: "Change the group's description",
              args: {
                name: "description",
              },
            },
          ],
          args: {
            name: "groupName | groupID",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Remove a group",
          args: {
            name: "groupName | groupID",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: ["list", "ls"],
          description: "List groups",
          options: [
            {
              name: "--user",
              description: "List groups that a user belongs to",
              args: {
                name: "user",
              },
            },
          ],
        },
      ],
    },
    {
      name: "item",
      description:
        "Perform CRUD operations on the 1Password items in your vaults",
      icon,
      subcommands: [
        {
          description: "Manage templates",
          name: "template",
          icon: "📕",
          subcommands: [
            {
              name: "get",
              description: "Get an item template",
              options: [
                {
                  name: ["-f", "--force"],
                  description: "Do not prompt for confirmation",
                },
              ],
              args: {
                name: "category",
                suggestions: [
                  { name: "-", description: "Read from stdin", hidden: true },
                ],
              },
            },
            {
              name: ["list", "ls"],
              description: "Get a list of templates",
            },
          ],
        },
        {
          name: "create",
          description: "Create an item",
          icon: "🪄",
          options: [
            {
              name: "--category",
              description: "Set the item's category",
              args: {
                name: "category",
              },
            },
            {
              name: "--dry-run",
              description:
                "Perform a dry run of the command and output a preview of the resulting item",
            },
            {
              name: "--generate-password",
              description: "Give the item a randomly generated password",
              requiresSeparator: true,
              args: {
                name: "recipe",
              },
            },
            {
              name: "--tags",
              description:
                "Set the tags to the specified (comma-separated) values",
              args: {
                name: "tags",
              },
            },
            {
              name: "--template",
              description: "Specify the filepath to read an item template from",
              args: {
                name: "string",
              },
            },
            {
              name: "--title",
              description: "Set the item's title",
              args: {
                name: "title",
              },
            },
            {
              name: "--url",
              description: "Set the URL associated with the item",
              args: {
                name: "URL",
              },
            },
          ],
          args: {
            name: "assignment...",
          },
        },
        {
          name: "get",
          description: "Get an item's details",
          icon: "📑",
          options: [
            {
              name: "--fields",
              description:
                "Only return data from these fields. Use 'label=' to get the field by name or 'type=' to filter fields by type",
              args: {
                name: "fields",
              },
            },
            {
              name: "--include-archive",
              description:
                "Include items in the Archive. Can also be set using OP_INCLUDE_ARCHIVE environment variable",
            },
            {
              name: "--otp",
              description: "Output the primary one-time password for this item",
            },
            {
              name: "--share-link",
              description: "Get a shareable link for the item",
            },
          ],
          args: {
            name: "itemName | itemID | shareLink",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: "edit",
          description: "Edit an item's details",
          icon: "🔏",
          args: [
            {
              name: "itemName | itemID | shareLink",
            },
            {
              name: "assignment ...",
            },
          ],
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Delete or archive an item",
          icon: "🗑️",
          options: [
            {
              name: "--archive",
              description: "Move the item to the Archive",
            },
          ],
          args: {
            name: "itemName | itemID | shareLink",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: ["list", "ls"],
          description: "List items",
          icon: "📖",
          options: [
            {
              name: "--categories",
              description:
                "Only list items in these categories (comma-separated)",
              args: {
                name: "categories",
              },
            },
            {
              name: "--include-archive",
              description:
                "Include items in the Archive. Can also be set using OP_INCLUDE_ARCHIVE environment variable",
            },
            {
              name: "--long",
              description: "Output a more detailed item list",
            },
            {
              name: "--tags",
              description: "Only list items with these tags (comma-separated)",
              args: {
                name: "tags",
              },
            },
          ],
        },
        {
          name: "share",
          description: "Share an item",
          icon: "👥",
          options: [
            {
              name: "--emails",
              description: "Email addresses to share with",
              args: {
                name: "strings",
              },
            },
            {
              name: "--expiry",
              description:
                "Link expiring after the specified duration in (s)econds, (m)inutes, or (h)ours (default 7h)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--vault",
              description: "Look for the item in this vault",
              args: {
                name: "string",
              },
            },
          ],
          args: {
            name: "itemName | itemID",
          },
        },
      ],
    },
    {
      name: "user",
      description: "Manage users within this 1Password account",
      icon,
      subcommands: [
        {
          name: "provision",
          description: "Provision a user in the authenticated account",
          options: [
            {
              name: "--email",
              description: "Provide the user's email address",
              args: {
                name: "string",
              },
            },
            {
              name: "--language",
              description:
                'Provide the user\'s account language. (default "en")',
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "confirm",
          description: "Confirm a user",
          options: [
            {
              name: "--all",
              description: "Confirm all unconfirmed users",
            },
          ],
          args: {
            name: "email | name | userID",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: "get",
          description: "Get details about a user",
          options: [
            {
              name: "--fingerprint",
              description: "Get the user's public key fingerprint",
            },
          ],
          args: {
            name: "email | name | userID | --me",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
              {
                name: "--me",
                description: "Get the authenticated user's details",
                type: "option",
              },
            ],
          },
        },
        {
          name: "edit",
          description: "Edit a user's name or Travel Mode status",
          options: [
            {
              name: "--name",
              description: "Set the user's name",
              args: {
                name: "string",
              },
            },
          ],
          args: {
            name: "email | name | userID",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: "suspend",
          description: "Suspend a user",
          options: [
            {
              name: "--deauthorize-devices-after",
              description:
                "Deauthorize the user's devices after a time (rounded down to seconds)",
              args: {
                name: "duration",
              },
            },
          ],
          args: {
            name: "email | name | userID",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: "reactivate",
          description: "Reactivate a suspended user",
          args: {
            name: "email | name | userID",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Remove a user and all their data from the account",
          args: {
            name: "email | name | userID",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: ["list", "ls"],
          description: "List users",
          options: [
            {
              name: "--group",
              description: "List users who belong to a group",
              args: {
                name: "group",
              },
            },
          ],
        },
      ],
    },
    {
      name: "vault",
      description:
        "Manage permissions and perform CRUD operations on your 1Password vaults",
      icon,
      subcommands: [
        {
          name: "group",
          description: "Manage group vault access",
          icon: "👥",
          subcommands: [
            {
              name: "grant",
              description: "Grant a group permissions to a vault",
              options: [
                {
                  name: "--group",
                  description: "The group to receive access",
                  args: {
                    name: "group",
                  },
                },
                {
                  name: "--no-input",
                  description:
                    "Do not prompt for input on interactive terminal",
                  args: {
                    name: "input",
                  },
                },
                {
                  name: "--permissions",
                  description: "The permissions to grant to the group",
                  args: {
                    name: "permissions",
                  },
                },
              ],
            },
            {
              name: "revoke",
              description:
                "Revoke a portion or the entire access of a group to a vault",
              options: [
                {
                  name: "--group",
                  description: "The group to revoke access from",
                  args: {
                    name: "group",
                  },
                },
                {
                  name: "--no-input",
                  description:
                    "Do not prompt for input on interactive terminal",
                  args: {
                    name: "input",
                  },
                },
                {
                  name: "--permissions",
                  description: "The permissions to revoke from the group",
                  args: {
                    name: "permissions",
                  },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description:
                "List all the groups that have access to the given vault",
              args: {
                name: "vault",
                suggestions: [
                  { name: "-", description: "Read from stdin", hidden: true },
                ],
              },
            },
          ],
        },
        {
          name: "user",
          description: "Manage user vault access",
          icon: "📈",
          subcommands: [
            {
              description: "Grant a user access to a vault",
              name: "grant",
              options: [
                {
                  name: "--no-input",
                  description:
                    "Do not prompt for input on interactive terminal",
                  args: {
                    name: "input",
                  },
                },
                {
                  name: "--permissions",
                  description: "The permissions to grant to the user",
                  args: {
                    name: "permissions",
                  },
                },
                {
                  name: "--user",
                  description: "The user to receive access",
                  args: {
                    name: "user",
                  },
                },
              ],
            },
            {
              description:
                "Revoke a portion or the entire access of a user to a vault",
              name: "revoke",
              options: [
                {
                  name: "--no-input",
                  description:
                    "Do not prompt for input on interactive terminal",
                  args: {
                    name: "input",
                  },
                },
                {
                  name: "--permissions",
                  description: "The permissions to revoke from the user",
                  args: {
                    name: "permissions",
                  },
                },
                {
                  name: "--user",
                  description: "The user to revoke access from",
                  args: {
                    name: "user",
                  },
                },
              ],
            },
            {
              description:
                "List all users with access to the vault and their permissions",
              name: ["list", "ls"],
            },
          ],
        },
        {
          name: "create",
          description: "Create a new vault",
          icon: "🪄",
          options: [
            {
              name: "--allow-admins-to-manage",
              description:
                "Set whether admins can manage the vault. Default: false",
              args: {
                name: "true|false",
              },
            },
            {
              name: "--description",
              description: "Set the group's description",
              args: {
                name: "description",
              },
            },
          ],
        },
        {
          name: "get",
          description: "Get details about a vault",
          icon: "📑",
          args: {
            name: "vaultName | vaultID",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: "edit",
          description:
            "Edit a vault's name, description, icon or Travel Mode status",
          icon: "🔏",
          options: [
            {
              name: "--description",
              description: "Change the vault's description",
              args: {
                name: "description",
              },
            },
            {
              name: "--icon",
              description: "Change the vault's icon",
              args: {
                name: "icon",
              },
            },
            {
              name: "--name",
              description: "Change the vault's name",
              args: {
                name: "name",
              },
            },
            {
              name: "--travel-mode",
              description:
                "Turn Travel Mode on or off for the vault. Only vaults with Travel Mode enabled will be accessible while a user has Travel Mode turned on. (default off)",
              args: {
                name: "on|off",
              },
            },
          ],
          args: {
            name: "vaultName | vaultID",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Remove a vault",
          icon: "🗑️",
          args: {
            name: "vaultName | vaultID",
            suggestions: [
              { name: "-", description: "Read from stdin", hidden: true },
            ],
          },
        },
        {
          name: ["list", "ls"],
          description: "List all vaults in the account",
          icon: "📖",
          options: [
            {
              name: "--group",
              description: "List vaults a group has access to",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion information",
      icon,
    },
    {
      name: "inject",
      description: "Inject secrets into a config file",
      icon,
    },
    {
      name: "read",
      description: "Read a secret using the secrets reference syntax",
      icon,
      options: [
        {
          name: "--file-mode",
          description:
            "Set filemode for the output file if it does not yet exist. It is ignored without the --out-file flag. (default 0600)",
          args: {
            name: "filemode",
          },
        },
        {
          name: ["-f", "--force"],
          description: "Do not prompt for confirmation",
        },
        {
          name: ["-n", "--no-newline"],
          description: "Do not print a new line after the secret",
        },
      ],
    },
    {
      name: "run",
      description: "Pass secrets as environment variables to a process",
      icon,
      insertValue: "run -- {cursor}",
      args: {
        name: "command",
        isCommand: true,
      },
      options: [
        {
          name: "--env-file",
          description:
            "Enable Dotenv integration with specific Dotenv files to parse. For example: --env-file=.env",
          requiresSeparator: true,
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--no-masking",
          description: "Disable masking of secrets on stdout and stderr",
        },
      ],
    },
    {
      name: "signin",
      description: "Sign in to a 1Password account",
      icon,
      options: [
        {
          name: ["-f", "--force"],
          description: "Ignore warnings and print raw output from this command",
        },
      ],
    },
    {
      name: "signout",
      description: "Sign out of a 1Password account",
      icon,
      options: [
        {
          name: "--all",
          description: "Sign out of all signed-in accounts",
        },
        {
          name: "--forget",
          description:
            "Remove the details for a 1Password account from this device",
        },
      ],
    },
    {
      name: "update",
      description: "Check for and download updates",
      icon,
      options: [
        {
          name: "--directory",
          description: "Download the update to this ''path''",
          args: {
            name: "string",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "whoami",
      description: "Get information about a signed-in account",
      icon,
    },
  ],
  options: [
    {
      name: "--account",
      description:
        "Select the account to execute the command by account shorthand, sign-in address, account ID, or user ID. For a list of available accounts, run 'op account list'. Can be set as the OP_ACCOUNT environment variable",
      isPersistent: true,
      args: {
        name: "account",
        generators: suggestAccounts,
      },
    },
    {
      name: "--cache",
      description: "Store and use cached information",
      isPersistent: true,
    },
    {
      name: "--config",
      description: "Use this configuration directory",
      isPersistent: true,
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--debug",
      description:
        "Output debug logs. Can also be set using $OP_DEBUG environment variable",
      isPersistent: true,
    },
    {
      name: "--encoding",
      description:
        "Use this character encoding type. Default: UTF-8. Supported: SHIFT_JIS, gbk",
      isPersistent: true,
      args: {
        name: "type",
        suggestions: ["UTF-8", "SHIFT_JIS", "gbk"],
      },
    },
    {
      name: "--format",
      description:
        "Use this output format. Can be 'human-readable' or 'json'. Can be set as the OP_FORMAT environment variable. (default \"human-readable\")",
      isPersistent: true,
      args: {
        name: "string",
        suggestions: ["human-readable", "json"],
      },
    },
    {
      name: ["-h", "--help"],
      description: "Get help for op",
      isPersistent: true,
    },
    {
      name: "--iso-timestamps",
      description:
        "Format timestamps according to ISO 8601 / RFC 3339. Can be set as the OP_ISO_TIMESTAMPS environment variable",
      isPersistent: true,
    },
    {
      name: "--no-color",
      isPersistent: true,
      description: "Print output without color",
    },
    {
      name: "--session",
      description:
        "Authenticate with this session token. 1Password CLI outputs session tokens for successful 'op signin' commands when biometric unlock is disabled",
      isPersistent: true,
      args: {
        name: "token",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Version for op",
    },
  ],
};

export default spec;
