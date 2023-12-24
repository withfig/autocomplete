const completion: Fig.Spec = {
  name: "keyvault",
  description: "Manage KeyVault keys, secrets, and certificates",
  subcommands: [
    {
      name: "backup",
      description: "Manage full HSM backup",
      subcommands: [
        {
          name: "start",
          description: "Begin a full backup of the HSM",
          options: [
            {
              name: ["--storage-container-SAS-token", "-t"],
              description:
                "The SAS token pointing to an Azure Blob storage container",
              args: { name: "storage-container-SAS-token" },
              isRequired: true,
            },
            {
              name: "--blob-container-name",
              description: "Name of Blob Container",
              args: { name: "blob-container-name" },
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. Can be omitted if --id is specified",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description: "Full URI of the HSM",
              args: { name: "id" },
            },
            {
              name: "--storage-account-name",
              description: "Name of Azure Storage Account",
              args: { name: "storage-account-name" },
            },
            {
              name: "--storage-resource-uri",
              description:
                "Azure Blob storage container Uri. If specified all other 'Storage Id' arguments should be omitted",
              args: { name: "storage-resource-uri" },
            },
          ],
        },
      ],
    },
    {
      name: "certificate",
      description: "Manage certificates",
      subcommands: [
        {
          name: "backup",
          description: "Backs up the specified certificate",
          options: [
            {
              name: ["--file", "-f"],
              description:
                "Local file path in which to store certificate backup",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: "--id",
              description:
                "Id of the certificate. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the certificate. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a Key Vault certificate",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the certificate",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--policy", "-p"],
              description:
                "JSON encoded policy definition. Use @{file} to load from a file(e.g. @my_policy.json)",
              args: { name: "policy" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--disabled",
              description: "Create certificate in disabled state",
              args: { name: "disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--validity",
              description:
                "Number of months the certificate is valid for. Overrides the value specified with --policy/-p",
              args: { name: "validity" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a certificate from a specified key vault",
          options: [
            {
              name: "--id",
              description:
                "Id of the certificate. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the certificate. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "download",
          description: "Download the public portion of a Key Vault certificate",
          options: [
            {
              name: ["--file", "-f"],
              description: "File to receive the binary certificate contents",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--encoding", "-e"],
              description:
                "Encoding of the certificate. DER will create a binary DER formatted x509 certificate, and PEM will create a base64 PEM x509 certificate",
              args: { name: "encoding", suggestions: ["DER", "PEM"] },
            },
            {
              name: "--id",
              description:
                "Id of the certificate. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the certificate. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
            {
              name: ["--version", "-v"],
              description:
                "The certificate version. If omitted, uses the latest version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "get-default-policy",
          description: "Get the default policy for self-signed certificates",
          options: [
            {
              name: "--scaffold",
              description:
                "Create a fully formed policy structure with default values",
            },
          ],
        },
        {
          name: "import",
          description: "Import a certificate into KeyVault",
          options: [
            {
              name: ["--file", "-f"],
              description:
                "PKCS12 file or PEM file containing the certificate and private key",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the certificate",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--disabled",
              description: "Import the certificate in disabled state",
              args: { name: "disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--password",
              description:
                "If the private key in certificate is encrypted, the password used for encryption",
              args: { name: "password" },
            },
            {
              name: ["--policy", "-p"],
              description:
                "JSON encoded policy definition. Use @{file} to load from a file(e.g. @my_policy.json)",
              args: { name: "policy" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "list",
          description: "List certificates in a specified key vault",
          options: [
            {
              name: "--id",
              description:
                "Full URI of the Vault. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--include-pending",
              description:
                "Specifies whether to include certificates which are not completely provisioned",
              args: { name: "include-pending", suggestions: ["false", "true"] },
            },
            {
              name: "--maxresults",
              description:
                "Maximum number of results to return in a page. If not specified, the service will return up to 25 results",
              args: { name: "maxresults" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "list-deleted",
          description: "Lists the currently-recoverable deleted certificates",
          options: [
            {
              name: "--id",
              description:
                "Full URI of the Vault. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--include-pending",
              description:
                "Specifies whether to include certificates which are not completely provisioned",
              args: { name: "include-pending", suggestions: ["false", "true"] },
            },
            {
              name: "--maxresults",
              description:
                "Maximum number of results to return in a page. If not specified, the service will return up to 25 results",
              args: { name: "maxresults" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "list-versions",
          description: "List the versions of a certificate",
          options: [
            {
              name: "--id",
              description:
                "Id of the certificate. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--maxresults",
              description:
                "Maximum number of results to return in a page. If not specified, the service will return up to 25 results",
              args: { name: "maxresults" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the certificate. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "purge",
          description: "Permanently deletes the specified deleted certificate",
          options: [
            {
              name: "--id",
              description:
                "The recovery id of the certificate. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the certificate. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "recover",
          description: "Recover a deleted certificate to its latest version",
          options: [
            {
              name: "--id",
              description:
                "The recovery id of the certificate. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the certificate. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "restore",
          description: "Restores a backed up certificate to a vault",
          options: [
            {
              name: ["--file", "-f"],
              description:
                "Local certificate backup from which to restore certificate",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "Name of the Key Vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "set-attributes",
          description:
            "Updates the specified attributes associated with the given certificate",
          options: [
            {
              name: "--enabled",
              description: "Enable the certificate",
              args: { name: "enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--id",
              description:
                "Id of the certificate. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the certificate. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: ["--policy", "-p"],
              description:
                "JSON encoded policy definition. Use @{file} to load from a file(e.g. @my_policy.json)",
              args: { name: "policy" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
            {
              name: ["--version", "-v"],
              description:
                "The certificate version. If omitted, uses the latest version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets information about a certificate",
          options: [
            {
              name: "--id",
              description:
                "Id of the certificate. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the certificate. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
            {
              name: ["--version", "-v"],
              description:
                "The certificate version. If omitted, uses the latest version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "show-deleted",
          description: "Get a deleted certificate",
          options: [
            {
              name: "--id",
              description:
                "The recovery id of the certificate. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the certificate. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "contact",
          description: "Manage contacts for certificate management",
          subcommands: [
            {
              name: "add",
              description:
                "Add a contact to the specified vault to receive notifications of certificate operations",
              options: [
                {
                  name: "--email",
                  description: "Contact e-mail address. Must be unique",
                  args: { name: "email" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description: "Full contact name",
                  args: { name: "name" },
                },
                {
                  name: "--phone",
                  description: "Contact phone number",
                  args: { name: "phone" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Remove a certificate contact from the specified vault",
              options: [
                {
                  name: "--email",
                  description: "Contact e-mail address. Must be unique",
                  args: { name: "email" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description:
                "Lists the certificate contacts for a specified key vault",
              options: [
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "issuer",
          description: "Manage certificate issuer information",
          subcommands: [
            {
              name: "create",
              description: "Create a certificate issuer record",
              options: [
                {
                  name: "--issuer-name",
                  description: "Certificate issuer name",
                  args: { name: "issuer-name" },
                  isRequired: true,
                },
                {
                  name: "--provider-name",
                  description:
                    "The certificate provider name. Must be registered with your tenant ID and in your region",
                  args: { name: "provider-name" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
                {
                  name: "--account-id",
                  description: "The issuer account id/username/etc",
                  args: { name: "account-id" },
                },
                {
                  name: "--disabled",
                  description: "Set issuer to disabled state",
                  args: { name: "disabled", suggestions: ["false", "true"] },
                },
                {
                  name: "--organization-id",
                  description: "The organization id",
                  args: { name: "organization-id" },
                },
                {
                  name: "--password",
                  description: "The issuer account password/secret/etc",
                  args: { name: "password" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes the specified certificate issuer",
              options: [
                {
                  name: "--issuer-name",
                  description: "Certificate issuer name",
                  args: { name: "issuer-name" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description:
                "Lists properties of the certificate issuers for the key vault",
              options: [
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Gets the specified certificate issuer",
              options: [
                {
                  name: "--issuer-name",
                  description: "Certificate issuer name",
                  args: { name: "issuer-name" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update a certificate issuer record",
              options: [
                {
                  name: "--issuer-name",
                  description: "Certificate issuer name",
                  args: { name: "issuer-name" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
                {
                  name: "--account-id",
                  description: "The issuer account id/username/etc",
                  args: { name: "account-id" },
                },
                {
                  name: "--enabled",
                  description: "Set issuer enabled state",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                },
                {
                  name: "--organization-id",
                  description: "The organization id",
                  args: { name: "organization-id" },
                },
                {
                  name: "--password",
                  description: "The issuer account password/secret/etc",
                  args: { name: "password" },
                },
                {
                  name: "--provider-name",
                  description:
                    "The certificate provider name. Must be registered with your tenant ID and in your region",
                  args: { name: "provider-name" },
                },
              ],
            },
            {
              name: "admin",
              description: "Manage admin information for certificate issuers",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add admin details for a specified certificate issuer",
                  options: [
                    {
                      name: "--email",
                      description:
                        "Admin e-mail address. Must be unique within the vault",
                      args: { name: "email" },
                      isRequired: true,
                    },
                    {
                      name: "--issuer-name",
                      description: "Certificate issuer name",
                      args: { name: "issuer-name" },
                      isRequired: true,
                    },
                    {
                      name: "--vault-name",
                      description: "Name of the Vault",
                      args: { name: "vault-name" },
                      isRequired: true,
                    },
                    {
                      name: "--first-name",
                      description: "Admin first name",
                      args: { name: "first-name" },
                    },
                    {
                      name: "--last-name",
                      description: "Admin last name",
                      args: { name: "last-name" },
                    },
                    {
                      name: "--phone",
                      description: "Admin phone number",
                      args: { name: "phone" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Remove admin details for the specified certificate issuer",
                  options: [
                    {
                      name: "--email",
                      description:
                        "Admin e-mail address. Must be unique within the vault",
                      args: { name: "email" },
                      isRequired: true,
                    },
                    {
                      name: "--issuer-name",
                      description: "Certificate issuer name",
                      args: { name: "issuer-name" },
                      isRequired: true,
                    },
                    {
                      name: "--vault-name",
                      description: "Name of the Vault",
                      args: { name: "vault-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "list",
                  description: "List admins for a specified certificate issuer",
                  options: [
                    {
                      name: "--issuer-name",
                      description: "Certificate issuer name",
                      args: { name: "issuer-name" },
                      isRequired: true,
                    },
                    {
                      name: "--vault-name",
                      description: "Name of the Vault",
                      args: { name: "vault-name" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "pending",
          description: "Manage pending certificate creation operations",
          subcommands: [
            {
              name: "delete",
              description:
                "Deletes the creation operation for a specific certificate",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the pending certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "merge",
              description:
                "Merges a certificate or a certificate chain with a key pair existing on the server",
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "File containing the certificate or certificate chain to merge",
                  args: { name: "file" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the pending certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
                {
                  name: "--disabled",
                  description: "Create certificate in disabled state",
                  args: { name: "disabled", suggestions: ["false", "true"] },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "show",
              description: "Gets the creation operation of a certificate",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the pending certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "check-name",
      description:
        "Checks that the managed hsm name is valid and is not already in use",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The name of the HSM within the specified resource group",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--resource-type",
          description: "Type of resource",
          args: { name: "resource-type", suggestions: ["hsm"] },
        },
      ],
    },
    {
      name: "create",
      description: "Create a Vault or HSM",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--administrators",
          description:
            "[HSM Only] Administrator role for data plane operations for Managed HSM. It accepts a space separated list of OIDs that will be assigned",
          args: { name: "administrators" },
        },
        {
          name: "--bypass",
          description: "Bypass traffic for space-separated uses",
          args: { name: "bypass", suggestions: ["AzureServices", "None"] },
        },
        {
          name: "--default-action",
          description: "Default action to apply when no rule matches",
          args: { name: "default-action", suggestions: ["Allow", "Deny"] },
        },
        {
          name: "--enable-purge-protection",
          description:
            "Property specifying whether protection against purge is enabled for this vault/managed HSM pool. Setting this property to true activates protection against purge for this vault/managed HSM pool and its content - only the Key Vault/Managed HSM service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible",
          args: {
            name: "enable-purge-protection",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-rbac-authorization",
          description:
            "Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be ignored. When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC",
          args: {
            name: "enable-rbac-authorization",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enabled-for-deployment",
          description:
            "[Vault Only] Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault",
          args: {
            name: "enabled-for-deployment",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enabled-for-disk-encryption",
          description:
            "[Vault Only] Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys",
          args: {
            name: "enabled-for-disk-encryption",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enabled-for-template-deployment",
          description:
            "[Vault Only] Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault",
          args: {
            name: "enabled-for-template-deployment",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--hsm-name",
          description:
            "Name of the HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them)",
          args: { name: "hsm-name" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Vault",
          args: { name: "name" },
        },
        {
          name: "--network-acls",
          description:
            'Network ACLs. It accepts a JSON filename or a JSON string. JSON format: {\\"ip\\":[<ip1>, <ip2>...],\\"vnet\\":[<vnet_name_1>/<subnet_name_1>,<subnet_id2>...]}',
          args: { name: "network-acls" },
        },
        {
          name: "--network-acls-ips",
          description:
            "Network ACLs IP rules. Space-separated list of IP addresses",
          args: { name: "network-acls-ips" },
        },
        {
          name: "--network-acls-vnets",
          description:
            "Network ACLS VNet rules. Space-separated list of Vnet/subnet pairs or subnet resource ids",
          args: { name: "network-acls-vnets" },
        },
        {
          name: "--no-self-perms",
          description:
            "[Vault Only] Don't add permissions for the current user/service principal in the new vault",
          args: { name: "no-self-perms", suggestions: ["false", "true"] },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--public-network-access",
          description:
            "Control permission for data plane traffic coming from public networks while private endpoint is enabled",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--retention-days",
          description:
            "Soft delete data retention days. It accepts >=7 and <=90. Defaults to 90 for keyvault creation. Required for MHSM creation",
          args: { name: "retention-days" },
        },
        {
          name: "--sku",
          description:
            "Required. SKU details. Allowed values for Vault: premium, standard. Default: standard. Allowed values for HSM: Standard_B1, Custom_B32. Default: Standard_B1",
          args: { name: "sku" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a Vault or HSM",
      options: [
        {
          name: "--hsm-name",
          description:
            "Name of the HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them)",
          args: { name: "hsm-name" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Vault",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Proceed only if Key Vault belongs to the specified resource group",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "delete-policy",
      description: "Delete security policy settings for a Key Vault",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Vault",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--application-id",
          description:
            "Application ID of the client making request on behalf of a principal. Exposed for compound identity using on-behalf-of authentication flow",
          args: { name: "application-id" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--object-id",
          description:
            "A GUID that identifies the principal that will receive permissions",
          args: { name: "object-id" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Proceed only if Key Vault belongs to the specified resource group",
          args: { name: "resource-group" },
        },
        {
          name: "--spn",
          description:
            "Name of a service principal that will receive permissions",
          args: { name: "spn" },
        },
        {
          name: "--upn",
          description: "Name of a user principal that will receive permissions",
          args: { name: "upn" },
        },
      ],
    },
    {
      name: "list",
      description: "List Vaults and/or HSMs",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "When --resource-type is not present the command will list all Vaults and HSMs. Possible values for --resource-type are vault and hsm",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "list-deleted",
      description:
        "Get information about the deleted Vaults or HSMs in a subscription",
      options: [
        {
          name: "--resource-type",
          description:
            "When --resource-type is not present the command will list all deleted Vaults and HSMs. Possible values for --resource-type are vault and hsm",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "purge",
      description:
        "Permanently delete the specified Vault or HSM. Aka Purges the deleted Vault or HSM",
      options: [
        {
          name: "--hsm-name",
          description:
            "Name of the deleted HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them)",
          args: { name: "hsm-name" },
        },
        {
          name: ["--location", "-l"],
          description: "Location of the deleted Vault or HSM",
          args: { name: "location" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the deleted Vault",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "recover",
      description: "Recover a Vault or HSM",
      options: [
        {
          name: "--hsm-name",
          description:
            "Name of the deleted HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them)",
          args: { name: "hsm-name" },
        },
        {
          name: ["--location", "-l"],
          description: "Location of the deleted Vault or HSM",
          args: { name: "location" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the deleted Vault",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--resource-group", "-g"],
          description: "Resource group of the deleted Vault or HSM",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "set-policy",
      description: "Update security policy settings for a Key Vault",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Vault",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--application-id",
          description:
            "Application ID of the client making request on behalf of a principal. Exposed for compound identity using on-behalf-of authentication flow",
          args: { name: "application-id" },
        },
        {
          name: "--certificate-permissions",
          description:
            "Space-separated list of certificate permissions to assign",
          args: {
            name: "certificate-permissions",
            suggestions: [
              "all",
              "backup",
              "create",
              "delete",
              "deleteissuers",
              "get",
              "getissuers",
              "import",
              "list",
              "listissuers",
              "managecontacts",
              "manageissuers",
              "purge",
              "recover",
              "restore",
              "setissuers",
              "update",
            ],
          },
        },
        {
          name: "--key-permissions",
          description: "Space-separated list of key permissions to assign",
          args: {
            name: "key-permissions",
            suggestions: [
              "all",
              "backup",
              "create",
              "decrypt",
              "delete",
              "encrypt",
              "get",
              "getrotationpolicy",
              "import",
              "list",
              "purge",
              "recover",
              "release",
              "restore",
              "rotate",
              "setrotationpolicy",
              "sign",
              "unwrapKey",
              "update",
              "verify",
              "wrapKey",
            ],
          },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--object-id",
          description:
            "A GUID that identifies the principal that will receive permissions",
          args: { name: "object-id" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Proceed only if Key Vault belongs to the specified resource group",
          args: { name: "resource-group" },
        },
        {
          name: "--secret-permissions",
          description: "Space-separated list of secret permissions to assign",
          args: {
            name: "secret-permissions",
            suggestions: [
              "all",
              "backup",
              "delete",
              "get",
              "list",
              "purge",
              "recover",
              "restore",
              "set",
            ],
          },
        },
        {
          name: "--spn",
          description:
            "Name of a service principal that will receive permissions",
          args: { name: "spn" },
        },
        {
          name: "--storage-permissions",
          description: "Space-separated list of storage permissions to assign",
          args: {
            name: "storage-permissions",
            suggestions: [
              "all",
              "backup",
              "delete",
              "deletesas",
              "get",
              "getsas",
              "list",
              "listsas",
              "purge",
              "recover",
              "regeneratekey",
              "restore",
              "set",
              "setsas",
              "update",
            ],
          },
        },
        {
          name: "--upn",
          description: "Name of a user principal that will receive permissions",
          args: { name: "upn" },
        },
      ],
    },
    {
      name: "show",
      description: "Show details of a Vault or HSM",
      options: [
        {
          name: "--hsm-name",
          description:
            "Name of the HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them)",
          args: { name: "hsm-name" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Vault",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Proceed only if Key Vault belongs to the specified resource group",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "show-deleted",
      description: "Show details of a deleted Vault or HSM",
      options: [
        {
          name: "--hsm-name",
          description:
            "Name of the deleted HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them)",
          args: { name: "hsm-name" },
        },
        {
          name: ["--location", "-l"],
          description: "Location of the deleted Vault or HSM",
          args: { name: "location" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the deleted Vault",
          args: { name: "name" },
        },
      ],
    },
    {
      name: "update",
      description: "Update the properties of a Vault",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Vault",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: "--bypass",
          description: "Bypass traffic for space-separated uses",
          args: { name: "bypass", suggestions: ["AzureServices", "None"] },
        },
        {
          name: "--default-action",
          description: "Default action to apply when no rule matches",
          args: { name: "default-action", suggestions: ["Allow", "Deny"] },
        },
        {
          name: "--enable-purge-protection",
          description:
            "Property specifying whether protection against purge is enabled for this vault/managed HSM pool. Setting this property to true activates protection against purge for this vault/managed HSM pool and its content - only the Key Vault/Managed HSM service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible",
          args: {
            name: "enable-purge-protection",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-rbac-authorization",
          description:
            "Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be ignored. When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC",
          args: {
            name: "enable-rbac-authorization",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enabled-for-deployment",
          description:
            "[Vault Only] Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault",
          args: {
            name: "enabled-for-deployment",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enabled-for-disk-encryption",
          description:
            "[Vault Only] Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys",
          args: {
            name: "enabled-for-disk-encryption",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enabled-for-template-deployment",
          description:
            "[Vault Only] Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault",
          args: {
            name: "enabled-for-template-deployment",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--public-network-access",
          description:
            "Control permission for data plane traffic coming from public networks while private endpoint is enabled",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--remove",
          description:
            "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
          args: { name: "remove" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Proceed only if Key Vault belongs to the specified resource group",
          args: { name: "resource-group" },
        },
        {
          name: "--retention-days",
          description:
            "Soft delete data retention days. It accepts >=7 and <=90",
          args: { name: "retention-days" },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
          args: { name: "set" },
        },
      ],
    },
    {
      name: "update-hsm",
      description: "Update the properties of a HSM",
      options: [
        {
          name: "--hsm-name",
          description: "Name of the HSM",
          args: { name: "hsm-name" },
          isRequired: true,
        },
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: "--bypass",
          description: "Bypass traffic for space-separated uses",
          args: { name: "bypass", suggestions: ["AzureServices", "None"] },
        },
        {
          name: "--default-action",
          description: "Default action to apply when no rule matches",
          args: { name: "default-action", suggestions: ["Allow", "Deny"] },
        },
        {
          name: ["--enable-purge-protection", "-e"],
          description:
            "Property specifying whether protection against purge is enabled for this vault/managed HSM pool. Setting this property to true activates protection against purge for this vault/managed HSM pool and its content - only the Key Vault/Managed HSM service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible",
          args: {
            name: "enable-purge-protection",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--public-network-access",
          description:
            "Control permission for data plane traffic coming from public networks while private endpoint is enabled",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--remove",
          description:
            "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
          args: { name: "remove" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Proceed only if Key Vault belongs to the specified resource group",
          args: { name: "resource-group" },
        },
        {
          name: "--secondary-locations",
          description:
            "--secondary-locations extends/contracts an HSM pool to listed regions. The primary location where the resource was originally created CANNOT be removed",
          args: { name: "secondary-locations" },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
          args: { name: "set" },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the Vault is met",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Vault",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--created",
          description:
            "Wait until created with 'provisioningState' at 'Succeeded'",
        },
        {
          name: "--custom",
          description:
            "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
          args: { name: "custom" },
        },
        { name: "--deleted", description: "Wait until deleted" },
        { name: "--exists", description: "Wait until the resource exists" },
        {
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Proceed only if Key Vault belongs to the specified resource group",
          args: { name: "resource-group" },
        },
        {
          name: "--timeout",
          description: "Maximum wait in seconds",
          args: { name: "timeout" },
        },
        {
          name: "--updated",
          description:
            "Wait until updated with provisioningState at 'Succeeded'",
        },
      ],
    },
    {
      name: "wait-hsm",
      description:
        "Place the CLI in a waiting state until a condition of the HSM is met",
      options: [
        {
          name: "--hsm-name",
          description: "Name of the HSM",
          args: { name: "hsm-name" },
          isRequired: true,
        },
        {
          name: "--created",
          description:
            "Wait until created with 'provisioningState' at 'Succeeded'",
        },
        {
          name: "--custom",
          description:
            "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
          args: { name: "custom" },
        },
        { name: "--deleted", description: "Wait until deleted" },
        { name: "--exists", description: "Wait until the resource exists" },
        {
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Proceed only if HSM belongs to the specified resource group",
          args: { name: "resource-group" },
        },
        {
          name: "--timeout",
          description: "Maximum wait in seconds",
          args: { name: "timeout" },
        },
        {
          name: "--updated",
          description:
            "Wait until updated with provisioningState at 'Succeeded'",
        },
      ],
    },
    {
      name: "key",
      description: "Manage keys",
      subcommands: [
        {
          name: "backup",
          description:
            "Request that a backup of the specified key be downloaded to the client",
          options: [
            {
              name: ["--file", "-f"],
              description: "Local file path in which to store key backup",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a new key, stores it, then returns key parameters and attributes to the client",
          options: [
            {
              name: "--curve",
              description:
                "Elliptic curve name. For valid values, see: https://docs.microsoft.com/rest/api/keyvault/keys/create-key/create-key#jsonwebkeycurvename",
              args: {
                name: "curve",
                suggestions: ["Ed25519", "P-256", "P-256K", "P-384", "P-521"],
              },
            },
            {
              name: "--default-cvm-policy",
              description:
                "Use default policy under which the key can be exported for CVM disk encryption",
            },
            { name: "--disabled", description: "Create key in disabled state" },
            {
              name: "--expires",
              description: "Expiration UTC datetime (Y-m-d'T'H:M:S'Z')",
              args: { name: "expires" },
            },
            {
              name: "--exportable",
              description:
                'Whether the private key can be exported. To create key with release policy, "exportable" must be true and caller must have "export" permission',
              args: { name: "exportable", suggestions: ["false", "true"] },
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--immutable",
              description:
                "Mark a release policy as immutable. An immutable release policy cannot be changed or updated after being marked immutable. Release policies are mutable by default",
              args: { name: "immutable", suggestions: ["false", "true"] },
            },
            {
              name: "--kty",
              description:
                "The type of key to create. For valid values, see: https://docs.microsoft.com/rest/api/keyvault/keys/create-key/create-key#jsonwebkeytype",
              args: {
                name: "kty",
                suggestions: [
                  "EC",
                  "EC-HSM",
                  "OKP",
                  "OKP-HSM",
                  "RSA",
                  "RSA-HSM",
                  "oct",
                  "oct-HSM",
                ],
              },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--not-before",
              description:
                "Key not usable before the provided UTC datetime (Y-m-d'T'H:M:S'Z')",
              args: { name: "not-before" },
            },
            {
              name: "--ops",
              description:
                "Space-separated list of permitted JSON web key operations",
              args: {
                name: "ops",
                suggestions: [
                  "decrypt",
                  "encrypt",
                  "export",
                  "import",
                  "sign",
                  "unwrapKey",
                  "verify",
                  "wrapKey",
                ],
              },
            },
            {
              name: "--policy",
              description:
                "The policy rules under which the key can be exported. Policy definition as JSON, or a path to a file containing JSON policy definition",
              args: { name: "policy" },
            },
            {
              name: ["--protection", "-p"],
              description: "Specifies the type of key protection",
              args: { name: "protection", suggestions: ["hsm", "software"] },
            },
            {
              name: "--size",
              description:
                "The key size in bits. For example: 2048, 3072, or 4096 for RSA. 128, 192, or 256 for oct",
              args: { name: "size" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "decrypt",
          description: "Decrypt a single block of encrypted data",
          options: [
            {
              name: ["--algorithm", "-a"],
              description: "Algorithm identifier",
              args: {
                name: "algorithm",
                suggestions: [
                  "A128CBC",
                  "A128CBCPAD",
                  "A128GCM",
                  "A192CBC",
                  "A192CBCPAD",
                  "A192GCM",
                  "A256CBC",
                  "A256CBCPAD",
                  "A256GCM",
                  "RSA-OAEP",
                  "RSA-OAEP-256",
                  "RSA1_5",
                ],
              },
              isRequired: true,
            },
            {
              name: "--value",
              description:
                'The value to be decrypted, which should be the result of "az keyvault encrypt"',
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--aad",
              description:
                "Optional data that is authenticated but not encrypted. For use with AES-GCM decryption",
              args: { name: "aad" },
            },
            {
              name: "--data-type",
              description: "The type of the original data",
              args: { name: "data-type", suggestions: ["base64", "plaintext"] },
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--iv",
              description:
                "The initialization vector used during encryption. Required for AES decryption",
              args: { name: "iv" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--tag",
              description:
                "The authentication tag generated during encryption. Required for only AES-GCM decryption",
              args: { name: "tag" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--version", "-v"],
              description:
                "The key version. If omitted, uses the latest version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a key of any type from storage in Vault or HSM",
          options: [
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "download",
          description: "Download the public part of a stored key",
          options: [
            {
              name: ["--file", "-f"],
              description: "File to receive the key contents",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--encoding", "-e"],
              description: "Encoding of the key, default: PEM",
              args: { name: "encoding", suggestions: ["DER", "PEM"] },
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--version", "-v"],
              description:
                "The key version. If omitted, uses the latest version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "encrypt",
          description:
            "Encrypt an arbitrary sequence of bytes using an encryption key that is stored in a Vault or HSM",
          options: [
            {
              name: ["--algorithm", "-a"],
              description: "Algorithm identifier",
              args: {
                name: "algorithm",
                suggestions: [
                  "A128CBC",
                  "A128CBCPAD",
                  "A128GCM",
                  "A192CBC",
                  "A192CBCPAD",
                  "A192GCM",
                  "A256CBC",
                  "A256CBCPAD",
                  "A256GCM",
                  "RSA-OAEP",
                  "RSA-OAEP-256",
                  "RSA1_5",
                ],
              },
              isRequired: true,
            },
            {
              name: "--value",
              description:
                "The value to be encrypted. Default data type is Base64 encoded string",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--aad",
              description:
                "Optional data that is authenticated but not encrypted. For use with AES-GCM encryption",
              args: { name: "aad" },
            },
            {
              name: "--data-type",
              description: "The type of the original data",
              args: { name: "data-type", suggestions: ["base64", "plaintext"] },
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--iv",
              description:
                "Initialization vector. Required for only AES-CBC(PAD) encryption",
              args: { name: "iv" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--version", "-v"],
              description:
                "The key version. If omitted, uses the latest version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "get-policy-template",
          description:
            "Return policy template as JSON encoded policy definition",
        },
        {
          name: "import",
          description: "Import a private key",
          options: [
            {
              name: "--byok-file",
              description:
                "BYOK file containing the key to be imported. Must not be password protected",
              args: { name: "byok-file" },
            },
            {
              name: "--byok-string",
              description:
                "BYOK string containing the key to be imported. Must not be password protected",
              args: { name: "byok-string" },
            },
            {
              name: "--curve",
              description:
                "The curve name of the key to import (only for BYOK)",
              args: {
                name: "curve",
                suggestions: ["Ed25519", "P-256", "P-256K", "P-384", "P-521"],
              },
            },
            {
              name: "--default-cvm-policy",
              description:
                "Use default policy under which the key can be exported for CVM disk encryption",
            },
            { name: "--disabled", description: "Create key in disabled state" },
            {
              name: "--expires",
              description: "Expiration UTC datetime (Y-m-d'T'H:M:S'Z')",
              args: { name: "expires" },
            },
            {
              name: "--exportable",
              description:
                'Whether the private key can be exported. To create key with release policy, "exportable" must be true and caller must have "export" permission',
              args: { name: "exportable", suggestions: ["false", "true"] },
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--immutable",
              description:
                "Mark a release policy as immutable. An immutable release policy cannot be changed or updated after being marked immutable. Release policies are mutable by default",
              args: { name: "immutable", suggestions: ["false", "true"] },
            },
            {
              name: "--kty",
              description: "The type of key to import (only for BYOK)",
              args: { name: "kty", suggestions: ["EC", "RSA", "oct"] },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--not-before",
              description:
                "Key not usable before the provided UTC datetime (Y-m-d'T'H:M:S'Z')",
              args: { name: "not-before" },
            },
            {
              name: "--ops",
              description:
                "Space-separated list of permitted JSON web key operations",
              args: {
                name: "ops",
                suggestions: [
                  "decrypt",
                  "encrypt",
                  "export",
                  "import",
                  "sign",
                  "unwrapKey",
                  "verify",
                  "wrapKey",
                ],
              },
            },
            {
              name: "--pem-file",
              description: "PEM file containing the key to be imported",
              args: { name: "pem-file" },
            },
            {
              name: "--pem-password",
              description: "Password of PEM file",
              args: { name: "pem-password" },
            },
            {
              name: "--pem-string",
              description: "PEM string containing the key to be imported",
              args: { name: "pem-string" },
            },
            {
              name: "--policy",
              description:
                "The policy rules under which the key can be exported. Policy definition as JSON, or a path to a file containing JSON policy definition",
              args: { name: "policy" },
            },
            {
              name: ["--protection", "-p"],
              description: "Specifies the type of key protection",
              args: { name: "protection", suggestions: ["hsm", "software"] },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List keys in the specified Vault or HSM",
          options: [
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Full URI of the Vault or HSM. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--include-managed",
              description: "Include managed keys. Default: false",
            },
            {
              name: "--maxresults",
              description:
                "Maximum number of results to return in a page. If not specified the service will return up to 25 results",
              args: { name: "maxresults" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "list-deleted",
          description: "List the deleted keys in the specified Vault or HSM",
          options: [
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Full URI of the Vault or HSM. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--maxresults",
              description:
                "Maximum number of results to return in a page. If not specified the service will return up to 25 results",
              args: { name: "maxresults" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "list-versions",
          description:
            "Retrieves a list of individual key versions with the same key name",
          options: [
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--maxresults",
              description:
                "Maximum number of results to return in a page. If not specified the service will return up to 25 results",
              args: { name: "maxresults" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "purge",
          description: "Permanently delete the specified key",
          options: [
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "The recovery id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "random",
          description:
            "Get the requested number of random bytes from a managed HSM",
          options: [
            {
              name: "--count",
              description: "The requested number of random bytes",
              args: { name: "count" },
              isRequired: true,
            },
            {
              name: "--hsm-name",
              description: "Name of the HSM",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description: "Full URI of the HSM",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "recover",
          description: "Recover the deleted key to its latest version",
          options: [
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "The recovery id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "restore",
          description: "Restore a backed up key to a Vault or HSM",
          options: [
            {
              name: "--backup-folder",
              description:
                "Name of the blob container which contains the backup",
              args: { name: "backup-folder" },
            },
            {
              name: "--blob-container-name",
              description: "Name of Blob Container",
              args: { name: "blob-container-name" },
            },
            {
              name: ["--file", "-f"],
              description: "Local key backup from which to restore key",
              args: { name: "file" },
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Full URI of the Vault or HSM. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the key. (Only for restoring from storage account)",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--storage-account-name",
              description: "Name of Azure Storage Account",
              args: { name: "storage-account-name" },
            },
            {
              name: ["--storage-container-SAS-token", "-t"],
              description:
                "The SAS token pointing to an Azure Blob storage container",
              args: { name: "storage-container-SAS-token" },
            },
            {
              name: ["--storage-resource-uri", "-u"],
              description:
                "Azure Blob storage container Uri. If specified, all other 'Storage Id' arguments should be omitted",
              args: { name: "storage-resource-uri" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "rotate",
          description:
            "Rotate the key based on the key policy by generating a new version of the key",
          options: [
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "set-attributes",
          description:
            "The update key operation changes specified attributes of a stored key and can be applied to any key type and key version stored in Vault or HSM",
          options: [
            {
              name: "--enabled",
              description: "Enable the key",
              args: { name: "enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--expires",
              description: "Expiration UTC datetime (Y-m-d'T'H:M:S'Z')",
              args: { name: "expires" },
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--immutable",
              description:
                "Mark a release policy as immutable. An immutable release policy cannot be changed or updated after being marked immutable. Release policies are mutable by default",
              args: { name: "immutable", suggestions: ["false", "true"] },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--not-before",
              description:
                "Key not usable before the provided UTC datetime (Y-m-d'T'H:M:S'Z')",
              args: { name: "not-before" },
            },
            {
              name: "--ops",
              description:
                "Space-separated list of permitted JSON web key operations",
              args: {
                name: "ops",
                suggestions: [
                  "decrypt",
                  "encrypt",
                  "export",
                  "import",
                  "sign",
                  "unwrapKey",
                  "verify",
                  "wrapKey",
                ],
              },
            },
            {
              name: "--policy",
              description:
                "The policy rules under which the key can be exported. Policy definition as JSON, or a path to a file containing JSON policy definition",
              args: { name: "policy" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--version", "-v"],
              description:
                "The key version. If omitted, uses the latest version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get a key's attributes and, if it's an asymmetric key, its public material",
          options: [
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--version", "-v"],
              description:
                "The key version. If omitted, uses the latest version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "show-deleted",
          description: "Get the public part of a deleted key",
          options: [
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "The recovery id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "sign",
          description:
            "Create a signature from a digest using a key that is stored in a Vault or HSM",
          options: [
            {
              name: ["--algorithm", "-a"],
              description: "Algorithm identifier",
              args: {
                name: "algorithm",
                suggestions: [
                  "ES256",
                  "ES256K",
                  "ES384",
                  "ES512",
                  "EdDSA",
                  "PS256",
                  "PS384",
                  "PS512",
                  "RS256",
                  "RS384",
                  "RS512",
                ],
              },
              isRequired: true,
            },
            {
              name: "--digest",
              description: "The value to sign",
              args: { name: "digest" },
              isRequired: true,
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--version", "-v"],
              description:
                "The key version. If omitted, uses the latest version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "verify",
          description:
            "Verify a signature using the key that is stored in a Vault or HSM",
          options: [
            {
              name: ["--algorithm", "-a"],
              description: "Algorithm identifier",
              args: {
                name: "algorithm",
                suggestions: [
                  "ES256",
                  "ES256K",
                  "ES384",
                  "ES512",
                  "EdDSA",
                  "PS256",
                  "PS384",
                  "PS512",
                  "RS256",
                  "RS384",
                  "RS512",
                ],
              },
              isRequired: true,
            },
            {
              name: "--digest",
              description: "The value to sign",
              args: { name: "digest" },
              isRequired: true,
            },
            {
              name: "--signature",
              description: "Signature to verify",
              args: { name: "signature" },
              isRequired: true,
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Id of the key. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the key. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--version", "-v"],
              description:
                "The key version. If omitted, uses the latest version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "rotation-policy",
          description: "Manage key's rotation policy",
          subcommands: [
            {
              name: "show",
              description: "Get the rotation policy of a Key Vault key",
              options: [
                {
                  name: "--hsm-name",
                  description:
                    "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
                  args: { name: "hsm-name" },
                },
                {
                  name: "--id",
                  description:
                    "Id of the key. If specified all other 'Id' arguments should be omitted",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the key. Required if --id is not specified",
                  args: { name: "name" },
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update the rotation policy of a Key Vault key",
              options: [
                {
                  name: "--value",
                  description:
                    "The rotation policy file definition as JSON, or a path to a file containing JSON policy definition",
                  args: { name: "value" },
                  isRequired: true,
                },
                {
                  name: "--hsm-name",
                  description:
                    "Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
                  args: { name: "hsm-name" },
                },
                {
                  name: "--id",
                  description:
                    "Id of the key. If specified all other 'Id' arguments should be omitted",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the key. Required if --id is not specified",
                  args: { name: "name" },
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "network-rule",
      description: "Manage vault network ACLs",
      subcommands: [
        {
          name: "add",
          description: "Add a network rule to the network ACLs for a Key Vault",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Vault",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--ip-address",
              description:
                "IPv4 address or CIDR range. Can supply a list: --ip-address ip1 [ip2]",
              args: { name: "ip-address" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--subnet",
              description:
                "Name or ID of subnet. If name is supplied, --vnet-name must be supplied",
              args: { name: "subnet" },
            },
            {
              name: "--vnet-name",
              description: "Name of a virtual network",
              args: { name: "vnet-name" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List the network rules from the network ACLs for a Key Vault",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Vault",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove a network rule from the network ACLs for a Key Vault",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Vault",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--ip-address",
              description:
                "IPv4 address or CIDR range. Can supply a list: --ip-address ip1 [ip2]",
              args: { name: "ip-address" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--subnet",
              description:
                "Name or ID of subnet. If name is supplied, --vnet-name must be supplied",
              args: { name: "subnet" },
            },
            {
              name: "--vnet-name",
              description: "Name of a virtual network",
              args: { name: "vnet-name" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the vault is met",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Vault",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
          ],
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
          options: [
            {
              name: "--description",
              description: "Comments for the approve operation",
              args: { name: "description" },
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. Required if --id is not specified.(--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "The ID of the private endpoint connection associated with the Key Vault/HSM. If specified --vault-name/--hsm-name and --name/-n, this should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the private endpoint connection associated with the Key Vault/HSM. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete the specified private endpoint connection associated with a Key Vault/HSM",
          options: [
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. Required if --id is not specified.(--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "The ID of the private endpoint connection associated with the Key Vault/HSM. If specified --vault-name/--hsm-name and --name/-n, this should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the private endpoint connection associated with the Key Vault/HSM. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List all private endpoint connections associated with a HSM",
          options: [
            {
              name: "--hsm-name",
              description: "Name of the HSM",
              args: { name: "hsm-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "reject",
          description:
            "Reject a private endpoint connection request for a Key Vault/HSM",
          options: [
            {
              name: "--description",
              description: "Comments for the reject operation",
              args: { name: "description" },
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. Required if --id is not specified.(--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "The ID of the private endpoint connection associated with the Key Vault/HSM. If specified --vault-name/--hsm-name and --name/-n, this should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the private endpoint connection associated with the Key Vault/HSM. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of a private endpoint connection associated with a Key Vault/HSM",
          options: [
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. Required if --id is not specified.(--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "The ID of the private endpoint connection associated with the Key Vault/HSM. If specified --vault-name/--hsm-name and --name/-n, this should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the private endpoint connection associated with the Key Vault/HSM. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the private endpoint connection is met",
          options: [
            {
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. Required if --id is not specified.(--hsm-name and --vault-name are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "The ID of the private endpoint connection associated with the Key Vault/HSM. If specified --vault-name/--hsm-name and --name/-n, this should be omitted",
              args: { name: "id" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the private endpoint connection associated with the Key Vault/HSM. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
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
          options: [
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them)",
              args: { name: "hsm-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
            },
          ],
        },
      ],
    },
    {
      name: "region",
      description: "Manage MHSM multi-regions",
      subcommands: [
        {
          name: "add",
          description: "Add regions for the managed HSM Pool",
          options: [
            {
              name: "--hsm-name",
              description: "Name of the HSM",
              args: { name: "hsm-name" },
              isRequired: true,
            },
            {
              name: ["--region-name", "--region", "-r"],
              description: "The region name",
              args: { name: "region-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list",
          description:
            "Get regions information associated with the managed HSM Pool",
          options: [
            {
              name: "--hsm-name",
              description: "Name of the HSM",
              args: { name: "hsm-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "remove",
          description: "Remove regions for the managed HSM Pool",
          options: [
            {
              name: "--hsm-name",
              description: "Name of the HSM",
              args: { name: "hsm-name" },
              isRequired: true,
            },
            {
              name: ["--region-name", "--region", "-r"],
              description: "The region name",
              args: { name: "region-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the HSM is met",
          options: [
            {
              name: "--hsm-name",
              description: "Name of the HSM",
              args: { name: "hsm-name" },
              isRequired: true,
            },
            {
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Proceed only if Key Vault belongs to the specified resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
          ],
        },
      ],
    },
    {
      name: "restore",
      description: "Manage full HSM restore",
      subcommands: [
        {
          name: "start",
          description: "Restore a full backup of a HSM",
          options: [
            {
              name: "--backup-folder",
              description:
                "Name of the blob container which contains the backup",
              args: { name: "backup-folder" },
              isRequired: true,
            },
            {
              name: ["--storage-container-SAS-token", "-t"],
              description:
                "The SAS token pointing to an Azure Blob storage container",
              args: { name: "storage-container-SAS-token" },
              isRequired: true,
            },
            {
              name: "--blob-container-name",
              description: "Name of Blob Container",
              args: { name: "blob-container-name" },
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. Can be omitted if --id is specified",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description: "Full URI of the HSM",
              args: { name: "id" },
            },
            {
              name: ["--key-name", "--key"],
              description:
                "Name of a single key in the backup. When set, only this key will be restored",
              args: { name: "key-name" },
            },
            {
              name: "--storage-account-name",
              description: "Name of Azure Storage Account",
              args: { name: "storage-account-name" },
            },
            {
              name: "--storage-resource-uri",
              description:
                "Azure Blob storage container Uri. If specified all other 'Storage Id' arguments should be omitted",
              args: { name: "storage-resource-uri" },
            },
          ],
        },
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
              options: [
                {
                  name: "--role",
                  description: "Role name or id",
                  args: { name: "role" },
                  isRequired: true,
                },
                {
                  name: "--scope",
                  description:
                    'Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}"',
                  args: { name: "scope" },
                  isRequired: true,
                },
                {
                  name: "--assignee",
                  description:
                    "Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name",
                  args: { name: "assignee" },
                },
                {
                  name: "--assignee-object-id",
                  description:
                    "Use this parameter instead of '--assignee' to bypass graph permission issues. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id",
                  args: { name: "assignee-object-id" },
                },
                {
                  name: ["--assignee-principal-type", "-t"],
                  description: "The principal type of assignee",
                  args: {
                    name: "assignee-principal-type",
                    suggestions: [
                      "Application",
                      "DirectoryObjectOrGroup",
                      "DirectoryRoleTemplate",
                      "Everyone",
                      "ForeignGroup",
                      "Group",
                      "MSI",
                      "ServicePrincipal",
                      "Unknown",
                      "User",
                    ],
                  },
                },
                {
                  name: "--hsm-name",
                  description: "Name of the HSM",
                  args: { name: "hsm-name" },
                },
                {
                  name: "--id",
                  description:
                    "Full URI of the HSM. If specified all other 'Id' arguments should be omitted",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the role assignment",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a role assignment",
              options: [
                {
                  name: "--assignee",
                  description:
                    "Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name",
                  args: { name: "assignee" },
                },
                {
                  name: "--assignee-object-id",
                  description:
                    "Use this parameter instead of '--assignee' to bypass graph permission issues. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id",
                  args: { name: "assignee-object-id" },
                },
                {
                  name: "--hsm-name",
                  description: "Name of the HSM",
                  args: { name: "hsm-name" },
                },
                {
                  name: "--id",
                  description:
                    "Full URI of the HSM. If specified all other 'Id' arguments should be omitted",
                  args: { name: "id" },
                },
                {
                  name: "--ids",
                  description: "Space-separated role assignment ids",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the role assignment",
                  args: { name: "name" },
                },
                {
                  name: "--role",
                  description: "Role name or id",
                  args: { name: "role" },
                },
                {
                  name: "--scope",
                  description:
                    'Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}"',
                  args: { name: "scope" },
                },
              ],
            },
            {
              name: "list",
              description: "List role assignments",
              options: [
                {
                  name: "--assignee",
                  description:
                    "Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name",
                  args: { name: "assignee" },
                },
                {
                  name: "--assignee-object-id",
                  description:
                    "Use this parameter instead of '--assignee' to bypass graph permission issues. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id",
                  args: { name: "assignee-object-id" },
                },
                {
                  name: "--hsm-name",
                  description: "Name of the HSM",
                  args: { name: "hsm-name" },
                },
                {
                  name: "--id",
                  description:
                    "Full URI of the HSM. If specified all other 'Id' arguments should be omitted",
                  args: { name: "id" },
                },
                {
                  name: "--role",
                  description: "Role name or id",
                  args: { name: "role" },
                },
                {
                  name: "--scope",
                  description:
                    'Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}"',
                  args: { name: "scope" },
                },
              ],
            },
          ],
        },
        {
          name: "definition",
          description: "Manage role definitions",
          subcommands: [
            {
              name: "create",
              description: "Create a custom role definition",
              options: [
                {
                  name: "--hsm-name",
                  description: "Name of the HSM",
                  args: { name: "hsm-name" },
                  isRequired: true,
                },
                {
                  name: "--role-definition",
                  description:
                    "Description of a role as JSON, or a path to a file containing a JSON description",
                  args: { name: "role-definition" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a role definition",
              options: [
                {
                  name: "--hsm-name",
                  description: "Name of the HSM",
                  args: { name: "hsm-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    'The role definition name. This is a GUID in the "name" property of a role definition',
                  args: { name: "name" },
                },
                {
                  name: "--role-id",
                  description: "The role definition ID",
                  args: { name: "role-id" },
                },
              ],
            },
            {
              name: "list",
              description: "List role definitions",
              options: [
                {
                  name: "--custom-role-only",
                  description: "Only show custom role definitions",
                },
                {
                  name: "--hsm-name",
                  description: "Name of the HSM",
                  args: { name: "hsm-name" },
                },
                {
                  name: "--scope",
                  description:
                    'Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}"',
                  args: { name: "scope" },
                },
              ],
            },
            {
              name: "show",
              description: "Show the details of a role definition",
              options: [
                {
                  name: "--hsm-name",
                  description: "Name of the HSM",
                  args: { name: "hsm-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    'The role definition name. This is a GUID in the "name" property of a role definition',
                  args: { name: "name" },
                },
                {
                  name: "--role-id",
                  description: "The role definition ID",
                  args: { name: "role-id" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a role definition",
              options: [
                {
                  name: "--hsm-name",
                  description: "Name of the HSM",
                  args: { name: "hsm-name" },
                  isRequired: true,
                },
                {
                  name: "--role-definition",
                  description:
                    "Description of a role as JSON, or a path to a file containing a JSON description",
                  args: { name: "role-definition" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "secret",
      description: "Manage secrets",
      subcommands: [
        {
          name: "backup",
          description: "Backs up the specified secret",
          options: [
            {
              name: ["--file", "-f"],
              description: "File to receive the secret contents",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: "--id",
              description:
                "Id of the secret. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the secret. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete all versions of a secret",
          options: [
            {
              name: "--id",
              description:
                "Id of the secret. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the secret. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "download",
          description: "Download a secret from a KeyVault",
          options: [
            {
              name: ["--file", "-f"],
              description: "File to receive the secret contents",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--encoding", "-e"],
              description:
                "Encoding of the secret. By default, will look for the 'file-encoding' tag on the secret. Otherwise will assume 'utf-8'",
              args: {
                name: "encoding",
                suggestions: [
                  "ascii",
                  "base64",
                  "hex",
                  "utf-16be",
                  "utf-16le",
                  "utf-8",
                ],
              },
            },
            {
              name: "--id",
              description:
                "Id of the secret. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the secret. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
            {
              name: ["--version", "-v"],
              description:
                "The secret version. If omitted, uses the latest version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "list",
          description: "List secrets in a specified key vault",
          options: [
            {
              name: "--id",
              description:
                "Full URI of the Vault. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--include-managed",
              description: "Include managed secrets. Default: false",
            },
            {
              name: "--maxresults",
              description:
                "Maximum number of results to return in a page. If not specified, the service will return up to 25 results",
              args: { name: "maxresults" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "list-deleted",
          description: "Lists deleted secrets for the specified vault",
          options: [
            {
              name: "--id",
              description:
                "Full URI of the Vault. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--maxresults",
              description:
                "Maximum number of results to return in a page. If not specified, the service will return up to 25 results",
              args: { name: "maxresults" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "list-versions",
          description: "List all versions of the specified secret",
          options: [
            {
              name: "--id",
              description:
                "Id of the secret. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: "--maxresults",
              description:
                "Maximum number of results to return in a page. If not specified, the service will return up to 25 results",
              args: { name: "maxresults" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the secret. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "purge",
          description: "Permanently deletes the specified secret",
          options: [
            {
              name: "--id",
              description:
                "The recovery id of the secret. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the secret. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "recover",
          description: "Recovers the deleted secret to the latest version",
          options: [
            {
              name: "--id",
              description:
                "The recovery id of the secret. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the secret. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "restore",
          description: "Restores a backed up secret to a vault",
          options: [
            {
              name: ["--file", "-f"],
              description: "File to receive the secret contents",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "set",
          description:
            "Create a secret (if one doesn't exist) or update a secret in a KeyVault",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the secret",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: ["--content-type", "--description"],
              description:
                "Description of the secret contents (e.g. password, connection string, etc)",
              args: { name: "content-type" },
            },
            {
              name: "--disabled",
              description: "Create secret in disabled state",
              args: { name: "disabled", suggestions: ["false", "true"] },
            },
            {
              name: ["--encoding", "-e"],
              description:
                "Source file encoding. The value is saved as a tag (file-encoding=<val>) and used during download to automatically encode the resulting file",
              args: {
                name: "encoding",
                suggestions: [
                  "ascii",
                  "base64",
                  "hex",
                  "utf-16be",
                  "utf-16le",
                  "utf-8",
                ],
              },
            },
            {
              name: "--expires",
              description: "Expiration UTC datetime (Y-m-d'T'H:M:S'Z')",
              args: { name: "expires" },
            },
            {
              name: ["--file", "-f"],
              description:
                "Source file for secret. Use in conjunction with '--encoding'",
              args: { name: "file" },
            },
            {
              name: "--not-before",
              description:
                "Secret not usable before the provided UTC datetime (Y-m-d'T'H:M:S'Z')",
              args: { name: "not-before" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--value",
              description:
                "Plain text secret value. Cannot be used with '--file' or '--encoding'",
              args: { name: "value" },
            },
          ],
        },
        {
          name: "set-attributes",
          description:
            "Updates the attributes associated with a specified secret in a given key vault",
          options: [
            {
              name: "--content-type",
              description: "Type of the secret value such as a password",
              args: { name: "content-type" },
            },
            {
              name: "--enabled",
              description: "Enable the secret",
              args: { name: "enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--expires",
              description: "Expiration UTC datetime (Y-m-d'T'H:M:S'Z')",
              args: { name: "expires" },
            },
            {
              name: "--id",
              description:
                "Id of the secret. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the secret. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--not-before",
              description:
                "Secret not usable before the provided UTC datetime (Y-m-d'T'H:M:S'Z')",
              args: { name: "not-before" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
            {
              name: ["--version", "-v"],
              description:
                "The secret version. If omitted, uses the latest version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a specified secret from a given key vault",
          options: [
            {
              name: "--id",
              description:
                "Id of the secret. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the secret. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
            {
              name: ["--version", "-v"],
              description:
                "The secret version. If omitted, uses the latest version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "show-deleted",
          description: "Gets the specified deleted secret",
          options: [
            {
              name: "--id",
              description:
                "The recovery id of the secret. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the secret. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
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
          options: [
            {
              name: "--sd-quorum",
              description:
                "The minimum number of shares required to decrypt the security domain for recovery",
              args: { name: "sd-quorum" },
              isRequired: true,
            },
            {
              name: "--sd-wrapping-keys",
              description:
                "Space-separated file paths to PEM files containing public keys",
              args: { name: "sd-wrapping-keys" },
              isRequired: true,
            },
            {
              name: "--security-domain-file",
              description:
                "Path to a file where the JSON blob returned by this command is stored",
              args: { name: "security-domain-file" },
              isRequired: true,
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. Can be omitted if --id is specified",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description: "Full URI of the HSM",
              args: { name: "id" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "init-recovery",
          description: "Retrieve the exchange key of the HSM",
          options: [
            {
              name: "--sd-exchange-key",
              description: "Local file path to store the exported key",
              args: { name: "sd-exchange-key" },
              isRequired: true,
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. Can be omitted if --id is specified",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description: "Full URI of the HSM",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "restore-blob",
          description:
            "Enable to decrypt and encrypt security domain file as blob. Can be run in offline environment, before file is uploaded to HSM using security-domain upload",
          options: [
            {
              name: "--sd-exchange-key",
              description: "The exchange key for security domain",
              args: { name: "sd-exchange-key" },
              isRequired: true,
            },
            {
              name: "--sd-file",
              description:
                "This file contains security domain encrypted using SD Exchange file downloaded in security-domain init-recovery command",
              args: { name: "sd-file" },
              isRequired: true,
            },
            {
              name: "--sd-file-restore-blob",
              description:
                "Local file path to store the security domain encrypted with the exchange key",
              args: { name: "sd-file-restore-blob" },
              isRequired: true,
            },
            {
              name: "--sd-wrapping-keys",
              description:
                "Space-separated file paths to PEM files containing private keys",
              args: { name: "sd-wrapping-keys" },
              isRequired: true,
            },
            {
              name: "--passwords",
              description:
                "Space-separated password list for --sd-wrapping-keys. CLI will match them in order. Can be omitted if your keys are without password protection",
              args: { name: "passwords" },
            },
          ],
        },
        {
          name: "upload",
          description: "Start to restore the HSM",
          options: [
            {
              name: "--sd-file",
              description:
                "This file contains security domain encrypted using SD Exchange file downloaded in security-domain init-recovery command",
              args: { name: "sd-file" },
              isRequired: true,
            },
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. Can be omitted if --id is specified",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description: "Full URI of the HSM",
              args: { name: "id" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--passwords",
              description:
                "Space-separated password list for --sd-wrapping-keys. CLI will match them in order. Can be omitted if your keys are without password protection",
              args: { name: "passwords" },
            },
            {
              name: "--restore-blob",
              description: "Indicator if blob is already restored",
            },
            {
              name: "--sd-exchange-key",
              description: "The exchange key for security domain",
              args: { name: "sd-exchange-key" },
            },
            {
              name: "--sd-wrapping-keys",
              description:
                "Space-separated file paths to PEM files containing private keys",
              args: { name: "sd-wrapping-keys" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until HSM security domain operation is finished",
          options: [
            {
              name: "--hsm-name",
              description:
                "Name of the HSM. Can be omitted if --id is specified",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description: "Full URI of the HSM",
              args: { name: "id" },
            },
            {
              name: "--target-operation",
              description: "Target operation that needs waiting",
              args: {
                name: "target-operation",
                suggestions: ["download", "restore_blob", "upload"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "setting",
      description: "Manage MHSM settings",
      subcommands: [
        {
          name: "list",
          description: "Get all settings associated with the managed HSM",
          options: [
            {
              name: "--hsm-name",
              description: "Name of the HSM",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Full URI of the HSM. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "show",
          description: "Get specific setting associated with the managed HSM",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the setting",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--hsm-name",
              description: "Name of the HSM",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Full URI of the HSM. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update specific setting associated with the managed HSM",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the setting",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Value of the setting",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--hsm-name",
              description: "Name of the HSM",
              args: { name: "hsm-name" },
            },
            {
              name: "--id",
              description:
                "Full URI of the HSM. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--setting-type", "--type"],
              description: "Type of the setting value",
              args: {
                name: "setting-type",
                suggestions: ["boolean", "string"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "storage",
      description: "Manage storage accounts",
      subcommands: [
        {
          name: "add",
          description: "Creates or updates a new storage account",
          options: [
            {
              name: "--active-key-name",
              description: "Current active storage account key name",
              args: { name: "active-key-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name to identify the storage account in the vault",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description: "Storage account resource id",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--auto-regenerate-key",
              description:
                "Whether keyvault should manage the storage account for the user",
              args: {
                name: "auto-regenerate-key",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--disabled",
              description: "Add the storage account in a disabled state",
              args: { name: "disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--regeneration-period",
              description:
                'The key regeneration time duration specified in ISO-8601 format, such as "P30D" for rotation every 30 days',
              args: { name: "regeneration-period" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "backup",
          description: "Backs up the specified storage account",
          options: [
            {
              name: ["--file", "-f"],
              description:
                "Local file path in which to store storage account backup",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: "--id",
              description:
                "Id of the storage account. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name to identify the storage account in the vault. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List storage accounts managed by the specified key vault",
          options: [
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--maxresults",
              description:
                "Maximum number of results to return in a page. If not specified the service will return up to 25 results",
              args: { name: "maxresults" },
            },
          ],
        },
        {
          name: "list-deleted",
          description: "Lists deleted storage accounts for the specified vault",
          options: [
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--maxresults",
              description:
                "Maximum number of results to return in a page. If not specified the service will return up to 25 results",
              args: { name: "maxresults" },
            },
          ],
        },
        {
          name: "purge",
          description: "Permanently deletes the specified storage account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name to identify the storage account in the vault",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "recover",
          description: "Recovers the deleted storage account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name to identify the storage account in the vault",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "regenerate-key",
          description:
            "Regenerates the specified key value for the given storage account",
          options: [
            {
              name: "--key-name",
              description: "The storage account key name",
              args: { name: "key-name" },
              isRequired: true,
            },
            {
              name: "--id",
              description:
                "Id of the storage account. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name to identify the storage account in the vault. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove a Key Vault managed Azure Storage Account and all associated SAS definitions. This operation requires the storage/delete permission",
          options: [
            {
              name: "--id",
              description:
                "Id of the storage account. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name to identify the storage account in the vault. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "restore",
          description: "Restores a backed up storage account to a vault",
          options: [
            {
              name: ["--file", "-f"],
              description:
                "Local key backup from which to restore storage account",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Gets information about a specified storage account",
          options: [
            {
              name: "--id",
              description:
                "Id of the storage account. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name to identify the storage account in the vault. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "show-deleted",
          description: "Gets the specified deleted storage account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name to identify the storage account in the vault",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "Name of the Vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified attributes associated with the given storage account",
          options: [
            {
              name: "--active-key-name",
              description: "The current active storage account key name",
              args: { name: "active-key-name" },
            },
            {
              name: "--auto-regenerate-key",
              description:
                "Whether keyvault should manage the storage account for the user",
              args: {
                name: "auto-regenerate-key",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--disabled",
              description: "Add the storage account in a disabled state",
              args: { name: "disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--id",
              description:
                "Id of the storage account. If specified all other 'Id' arguments should be omitted",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name to identify the storage account in the vault. Required if --id is not specified",
              args: { name: "name" },
            },
            {
              name: "--regeneration-period",
              description:
                'The key regeneration time duration specified in ISO-8601 format, such as "P30D" for rotation every 30 days',
              args: { name: "regeneration-period" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--vault-name",
              description:
                "Name of the Key Vault. Required if --id is not specified",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "sas-definition",
          description: "Manage storage account SAS definitions",
          subcommands: [
            {
              name: "create",
              description:
                "Creates or updates a new SAS definition for the specified storage account",
              options: [
                {
                  name: "--account-name",
                  description:
                    "Name to identify the storage account in the vault",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name to identify the SAS definition in the vault",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--sas-type",
                  description:
                    "The type of SAS token the SAS definition will create. Possible values include: 'account', 'service'",
                  args: {
                    name: "sas-type",
                    suggestions: ["account", "service"],
                  },
                  isRequired: true,
                },
                {
                  name: "--template-uri",
                  description:
                    "The SAS definition token template signed with the key 00000000. In the case of an account token this is only the sas token itself, for service tokens, the full service endpoint url along with the sas token. Tokens created according to the SAS definition will have the same properties as the template",
                  args: { name: "template-uri" },
                  isRequired: true,
                },
                {
                  name: "--validity-period",
                  description:
                    'The validity period of SAS tokens created according to the SAS definition in ISO-8601, such as "PT12H" for 12 hour tokens',
                  args: { name: "validity-period" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
                {
                  name: "--disabled",
                  description: "Add the storage account in a disabled state",
                  args: { name: "disabled", suggestions: ["false", "true"] },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes a SAS definition from a specified storage account",
              options: [
                {
                  name: "--account-name",
                  description:
                    "Name to identify the storage account in the vault. Required if --id is not specified",
                  args: { name: "account-name" },
                },
                {
                  name: "--id",
                  description:
                    "Id of the SAS definition. If specified all other 'Id' arguments should be omitted",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name to identify the SAS definition in the vault. Required if --id is not specified",
                  args: { name: "name" },
                },
                {
                  name: "--vault-name",
                  description:
                    "Name of the Key Vault. Required if --id is not specified",
                  args: { name: "vault-name" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List storage SAS definitions for the given storage account",
              options: [
                {
                  name: "--account-name",
                  description:
                    "Name to identify the storage account in the vault",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
                {
                  name: "--maxresults",
                  description:
                    "Maximum number of results to return in a page. If not specified the service will return up to 25 results",
                  args: { name: "maxresults" },
                },
              ],
            },
            {
              name: "list-deleted",
              description:
                "Lists deleted SAS definitions for the specified vault and storage account",
              options: [
                {
                  name: "--account-name",
                  description:
                    "Name to identify the storage account in the vault",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
                {
                  name: "--maxresults",
                  description:
                    "Maximum number of results to return in a page. If not specified the service will return up to 25 results",
                  args: { name: "maxresults" },
                },
              ],
            },
            {
              name: "recover",
              description: "Recovers the deleted SAS definition",
              options: [
                {
                  name: "--account-name",
                  description:
                    "Name to identify the storage account in the vault",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name to identify the SAS definition in the vault",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets information about a SAS definition for the specified storage account",
              options: [
                {
                  name: "--account-name",
                  description:
                    "Name to identify the storage account in the vault. Required if --id is not specified",
                  args: { name: "account-name" },
                },
                {
                  name: "--id",
                  description:
                    "Id of the SAS definition. If specified all other 'Id' arguments should be omitted",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name to identify the SAS definition in the vault. Required if --id is not specified",
                  args: { name: "name" },
                },
                {
                  name: "--vault-name",
                  description:
                    "Name of the Key Vault. Required if --id is not specified",
                  args: { name: "vault-name" },
                },
              ],
            },
            {
              name: "show-deleted",
              description: "Gets the specified deleted sas definition",
              options: [
                {
                  name: "--account-name",
                  description:
                    "Name to identify the storage account in the vault",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name to identify the SAS definition in the vault",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "Name of the Vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Updates the specified attributes associated with the given SAS definition",
              options: [
                {
                  name: "--account-name",
                  description:
                    "Name to identify the storage account in the vault. Required if --id is not specified",
                  args: { name: "account-name" },
                },
                {
                  name: "--disabled",
                  description: "Add the storage account in a disabled state",
                  args: { name: "disabled", suggestions: ["false", "true"] },
                },
                {
                  name: "--id",
                  description:
                    "Id of the SAS definition. If specified all other 'Id' arguments should be omitted",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name to identify the SAS definition in the vault. Required if --id is not specified",
                  args: { name: "name" },
                },
                {
                  name: "--sas-type",
                  description:
                    "The type of SAS token the SAS definition will create. Possible values include: 'account', 'service'",
                  args: {
                    name: "sas-type",
                    suggestions: ["account", "service"],
                  },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: "--template-uri",
                  description:
                    "The SAS definition token template signed with the key 00000000. In the case of an account token this is only the sas token itself, for service tokens, the full service endpoint url along with the sas token. Tokens created according to the SAS definition will have the same properties as the template",
                  args: { name: "template-uri" },
                },
                {
                  name: "--validity-period",
                  description:
                    'The validity period of SAS tokens created according to the SAS definition in ISO-8601, such as "PT12H" for 12 hour tokens',
                  args: { name: "validity-period" },
                },
                {
                  name: "--vault-name",
                  description:
                    "Name of the Key Vault. Required if --id is not specified",
                  args: { name: "vault-name" },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
