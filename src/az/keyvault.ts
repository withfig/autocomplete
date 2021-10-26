const completionSpec: Fig.Spec = {
  name: "keyvault",
  description: "Manage KeyVault keys, secrets, and certificates",
  subcommands: [
    {
      name: "backup",
      description: "Manage full HSM backup",
      subcommands: [
        { name: "start", description: "Begin a full backup of the HSM" },
      ],
    },
    {
      name: "certificate",
      description: "Manage certificates",
      subcommands: [
        { name: "backup", description: "Backs up the specified certificate" },
        {
          name: "contact",
          description: "Manage contacts for certificate management",
          subcommands: [
            {
              name: "add",
              description:
                "Add a contact to the specified vault to receive notifications of certificate operations",
            },
            {
              name: "delete",
              description:
                "Remove a certificate contact from the specified vault",
            },
            {
              name: "list",
              description:
                "Lists the certificate contacts for a specified key vault",
            },
          ],
        },
        { name: "create", description: "Create a Key Vault certificate" },
        {
          name: "delete",
          description: "Deletes a certificate from a specified key vault",
        },
        {
          name: "download",
          description: "Download the public portion of a Key Vault certificate",
        },
        {
          name: "get-default-policy",
          description: "Get the default policy for self-signed certificates",
        },
        { name: "import", description: "Import a certificate into KeyVault" },
        {
          name: "issuer",
          description: "Manage certificate issuer information",
          subcommands: [
            {
              name: "admin",
              description: "Manage admin information for certificate issuers",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add admin details for a specified certificate issuer",
                },
                {
                  name: "delete",
                  description:
                    "Remove admin details for the specified certificate issuer",
                },
                {
                  name: "list",
                  description: "List admins for a specified certificate issuer",
                },
              ],
            },
            {
              name: "create",
              description: "Create a certificate issuer record",
            },
            {
              name: "delete",
              description: "Deletes the specified certificate issuer",
            },
            {
              name: "list",
              description: "List certificate issuers for a specified key vault",
            },
            {
              name: "show",
              description: "Lists the specified certificate issuer",
            },
            {
              name: "update",
              description: "Update a certificate issuer record",
            },
          ],
        },
        {
          name: "list",
          description: "List certificates in a specified key vault",
        },
        {
          name: "list-deleted",
          description:
            "Lists the deleted certificates in the specified vault currently available for recovery",
        },
        {
          name: "list-versions",
          description: "List the versions of a certificate",
        },
        {
          name: "pending",
          description: "Manage pending certificate creation operations",
          subcommands: [
            {
              name: "delete",
              description:
                "Deletes the creation operation for a specific certificate",
            },
            {
              name: "merge",
              description:
                "Merges a certificate or a certificate chain with a key pair existing on the server",
            },
            {
              name: "show",
              description: "Gets the creation operation of a certificate",
            },
          ],
        },
        {
          name: "purge",
          description: "Permanently deletes the specified deleted certificate",
        },
        {
          name: "recover",
          description:
            "Recovers the deleted certificate back to its current version under /certificates",
        },
        {
          name: "restore",
          description: "Restores a backed up certificate to a vault",
        },
        {
          name: "set-attributes",
          description:
            "Updates the specified attributes associated with the given certificate",
        },
        { name: "show", description: "Gets information about a certificate" },
        {
          name: "show-deleted",
          description:
            "Retrieves information about the specified deleted certificate",
        },
      ],
    },
    { name: "create", description: "Create a Vault or HSM" },
    { name: "delete", description: "Delete a Vault or HSM" },
    {
      name: "delete-policy",
      description: "Delete security policy settings for a Key Vault",
    },
    {
      name: "key",
      description: "Manage keys",
      subcommands: [
        {
          name: "backup",
          description:
            "Request that a backup of the specified key be downloaded to the client",
        },
        {
          name: "create",
          description:
            "Create a new key, stores it, then returns key parameters and attributes to the client",
        },
        {
          name: "decrypt",
          description: "Decrypt a single block of encrypted data",
        },
        {
          name: "delete",
          description: "Delete a key of any type from storage in Vault or HSM",
        },
        {
          name: "download",
          description: "Download the public part of a stored key",
        },
        {
          name: "encrypt",
          description:
            "Encrypt an arbitrary sequence of bytes using an encryption key that is stored in a Vault or HSM",
        },
        {
          name: "get-policy-template",
          description:
            "Return policy template as JSON encoded policy definition",
        },
        { name: "import", description: "Import a private key" },
        {
          name: "list",
          description: "List keys in the specified Vault or HSM",
        },
        {
          name: "list-deleted",
          description: "List the deleted keys in the specified Vault or HSM",
        },
        {
          name: "list-versions",
          description:
            "Retrieves a list of individual key versions with the same key name",
        },
        { name: "purge", description: "Permanently delete the specified key" },
        {
          name: "recover",
          description: "Recover the deleted key to its latest version",
        },
        {
          name: "restore",
          description: "Restore a backed up key to a Vault or HSM",
        },
        {
          name: "set-attributes",
          description:
            "The update key operation changes specified attributes of a stored key and can be applied to any key type and key version stored in Vault or HSM",
        },
        {
          name: "show",
          description:
            "Get a key's attributes and, if it's an asymmetric key, its public material",
        },
        {
          name: "show-deleted",
          description: "Get the public part of a deleted key",
        },
      ],
    },
    { name: "list", description: "List Vaults and/or HSMs" },
    {
      name: "list-deleted",
      description:
        "Get information about the deleted Vaults or HSMs in a subscription",
    },
    {
      name: "network-rule",
      description: "Manage vault network ACLs",
      subcommands: [
        {
          name: "add",
          description: "Add a network rule to the network ACLs for a Key Vault",
        },
        {
          name: "list",
          description:
            "List the network rules from the network ACLs for a Key Vault",
        },
        {
          name: "remove",
          description:
            "Remove a network rule from the network ACLs for a Key Vault",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the vault is met",
        },
      ],
    },
    {
      name: "private-endpoint-connection",
      description: "Manage vault/HSM private endpoint connections",
      subcommands: [
        {
          name: "approve",
          description:
            "Approve a private endpoint connection request for a Key Vault/HSM",
        },
        {
          name: "delete",
          description:
            "Delete the specified private endpoint connection associated with a Key Vault/HSM",
        },
        {
          name: "list",
          description:
            "List all private endpoint connections associated with a HSM",
        },
        {
          name: "reject",
          description:
            "Reject a private endpoint connection request for a Key Vault/HSM",
        },
        {
          name: "show",
          description:
            "Show details of a private endpoint connection associated with a Key Vault/HSM",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the private endpoint connection is met",
        },
      ],
    },
    {
      name: "private-link-resource",
      description: "Manage vault/HSM private link resources",
      subcommands: [
        {
          name: "list",
          description:
            "List the private link resources supported for a Key Vault/HSM",
        },
      ],
    },
    {
      name: "purge",
      description:
        "Permanently delete the specified Vault or HSM. Aka Purges the deleted Vault or HSM",
    },
    { name: "recover", description: "Recover a Vault or HSM" },
    {
      name: "restore",
      description: "Manage full HSM restore",
      subcommands: [
        { name: "start", description: "Restore a full backup of a HSM" },
      ],
    },
    {
      name: "role",
      description: "Manage user roles for access control",
      subcommands: [
        {
          name: "assignment",
          description: "Manage role assignments",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new role assignment for a user, group, or service principal",
            },
            { name: "delete", description: "Delete a role assignment" },
            { name: "list", description: "List role assignments" },
          ],
        },
        {
          name: "definition",
          description: "Manage role definitions",
          subcommands: [
            { name: "create", description: "Create a custom role definition" },
            { name: "delete", description: "Delete a role definition" },
            { name: "list", description: "List role definitions" },
            {
              name: "show",
              description: "Show the details of a role definition",
            },
            { name: "update", description: "Update a role definition" },
          ],
        },
      ],
    },
    {
      name: "secret",
      description: "Manage secrets",
      subcommands: [
        { name: "backup", description: "Backs up the specified secret" },
        {
          name: "delete",
          description: "Deletes a secret from a specified key vault",
        },
        { name: "download", description: "Download a secret from a KeyVault" },
        { name: "list", description: "List secrets in a specified key vault" },
        {
          name: "list-deleted",
          description: "Lists deleted secrets for the specified vault",
        },
        {
          name: "list-versions",
          description: "List all versions of the specified secret",
        },
        {
          name: "purge",
          description: "Permanently deletes the specified secret",
        },
        {
          name: "recover",
          description: "Recovers the deleted secret to the latest version",
        },
        {
          name: "restore",
          description: "Restores a backed up secret to a vault",
        },
        {
          name: "set",
          description:
            "Create a secret (if one doesn't exist) or update a secret in a KeyVault",
        },
        {
          name: "set-attributes",
          description:
            "Updates the attributes associated with a specified secret in a given key vault",
        },
        {
          name: "show",
          description: "Get a specified secret from a given key vault",
        },
        {
          name: "show-deleted",
          description: "Gets the specified deleted secret",
        },
      ],
    },
    {
      name: "security-domain",
      description: "Manage security domain operations",
      subcommands: [
        {
          name: "download",
          description: "Download the security domain file from the HSM",
        },
        {
          name: "init-recovery",
          description: "Retrieve the exchange key of the HSM",
        },
        { name: "upload", description: "Start to restore the HSM" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until HSM security domain operation is finished",
        },
      ],
    },
    {
      name: "set-policy",
      description: "Update security policy settings for a Key Vault",
    },
    { name: "show", description: "Show details of a Vault or HSM" },
    {
      name: "show-deleted",
      description: "Show details of a deleted Vault or HSM",
    },
    {
      name: "storage",
      description: "Manage storage accounts",
      subcommands: [
        {
          name: "add",
          description: "Creates or updates a new storage account",
        },
        {
          name: "backup",
          description: "Backs up the specified storage account",
        },
        {
          name: "list",
          description:
            "List storage accounts managed by the specified key vault",
        },
        {
          name: "list-deleted",
          description: "Lists deleted storage accounts for the specified vault",
        },
        {
          name: "purge",
          description: "Permanently deletes the specified storage account",
        },
        {
          name: "recover",
          description: "Recovers the deleted storage account",
        },
        {
          name: "regenerate-key",
          description:
            "Regenerates the specified key value for the given storage account",
        },
        {
          name: "remove",
          description:
            "Remove a Key Vault managed Azure Storage Account and all associated SAS definitions. This operation requires the storage/delete permission",
        },
        {
          name: "restore",
          description: "Restores a backed up storage account to a vault",
        },
        {
          name: "sas-definition",
          description: "Manage storage account SAS definitions",
          subcommands: [
            {
              name: "create",
              description:
                "Creates or updates a new SAS definition for the specified storage account",
            },
            {
              name: "delete",
              description:
                "Deletes a SAS definition from a specified storage account",
            },
            {
              name: "list",
              description:
                "List storage SAS definitions for the given storage account",
            },
            {
              name: "list-deleted",
              description:
                "Lists deleted SAS definitions for the specified vault and storage account",
            },
            {
              name: "recover",
              description: "Recovers the deleted SAS definition",
            },
            {
              name: "show",
              description:
                "Gets information about a SAS definition for the specified storage account",
            },
            {
              name: "show-deleted",
              description: "Gets the specified deleted sas definition",
            },
            {
              name: "update",
              description:
                "Updates the specified attributes associated with the given SAS definition",
            },
          ],
        },
        {
          name: "show",
          description: "Gets information about a specified storage account",
        },
        {
          name: "show-deleted",
          description: "Gets the specified deleted storage account",
        },
        {
          name: "update",
          description:
            "Updates the specified attributes associated with the given storage account",
        },
      ],
    },
    { name: "update", description: "Update the properties of a Vault" },
    { name: "update-hsm", description: "Update the properties of a HSM" },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the Vault is met",
    },
    {
      name: "wait-hsm",
      description:
        "Place the CLI in a waiting state until a condition of the HSM is met",
    },
  ],
};

export default completionSpec;
